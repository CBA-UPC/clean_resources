var devicetradein;devicetradein=(()=>{"use strict";var e,t,r={5784:(e,t,r)=>{let n;r.d(t,{S:()=>i,D:()=>o});const i=()=>n,o=e=>{if(e.currentScript){const t=e.currentScript.src;n=t.substring(0,t.lastIndexOf("/")+1)}else n=new URL(window.location.origin)+"device-tradein/"}},3192:(e,t,r)=>{r.r(t);var n=r(5784);(0,n.D)(document),r.p=(0,n.S)();class i extends HTMLElement{connectedCallback(){r.e("device-trade-in").then(r.bind(r,5824)).then((e=>{this.bootstrapper=new e.DeviceTradeInUiBootstrapper(this),this.bootstrapper.mountApp({attachShadow:!0,shadowStylesheetAttribute:"cssurl"})})).catch((e=>{console.log("error loading chunk",e),this.dispatchEvent(new CustomEvent("onError",{detail:e}))}))}disconnectedCallback(){r.e("device-trade-in").then(r.bind(r,5824)).then((e=>{this.bootstrapper.unmountApp()}))}attributeChangedCallback(e,t,n){r.e("device-trade-in").then(r.bind(r,5824)).then((r=>{this.bootstrapper&&this.bootstrapper.updateAttribute(e,t,n)}))}static get observedAttributes(){return["channel","externalId","internalId","token","cmsurl"]}}class o extends HTMLElement{connectedCallback(){r.e("device-trade-in").then(r.bind(r,5824)).then((e=>{this.bootstrapper=new e.DeviceTradeInListBootstrapper(this),this.bootstrapper.mountApp({attachShadow:!0,shadowStylesheetAttribute:"cssurl"})})).catch((e=>{console.log("error loading chunk",e),this.dispatchEvent(new CustomEvent("onError",{detail:e}))}))}disconnectedCallback(){r.e("device-trade-in").then(r.bind(r,5824)).then((e=>{this.bootstrapper.unmountApp()}))}attributeChangedCallback(e,t,n){r.e("device-trade-in").then(r.bind(r,5824)).then((r=>{this.bootstrapper&&this.bootstrapper.updateAttribute(e,t,n)}))}static get observedAttributes(){return["channel","externalId","token","blacklistedIds","cmsurl"]}}class a extends HTMLElement{connectedCallback(){r.e("device-trade-in").then(r.bind(r,5824)).then((e=>{this.bootstrapper=new e.DeviceTradeInDisplayBootstrapper(this),this.bootstrapper.mountApp({attachShadow:!0,shadowStylesheetAttribute:"cssurl"})})).catch((e=>{console.log("error loading chunk",e),this.dispatchEvent(new CustomEvent("onError",{detail:e}))}))}disconnectedCallback(){r.e("device-trade-in").then(r.bind(r,5824)).then((e=>{this.bootstrapper.unmountApp()}))}attributeChangedCallback(e,t,n){r.e("device-trade-in").then(r.bind(r,5824)).then((r=>{this.bootstrapper&&this.bootstrapper.updateAttribute(e,t,n)}))}static get observedAttributes(){return["internalId","token","cmsurl"]}}customElements.define("device-trade-in",i),customElements.define("device-trade-in-list",o),customElements.define("device-trade-in-display",a)}},n={};function i(e){if(n[e])return n[e].exports;var t=n[e]={exports:{}};return r[e].call(t.exports,t,t.exports,i),t.exports}return i.m=r,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>e+".bundle.js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="devicetradein:",i.l=(r,n,o,a)=>{if(e[r])e[r].push(n);else{var s,d;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var p=c[l];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+o){s=p;break}}s||(d=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+o),s.src=r),e[r]=[n];var u=(t,n)=>{s.onerror=s.onload=null,clearTimeout(h);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),d&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={component:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,i)=>{n=e[t]=[r,i]}));r.push(n[2]=o);var a=i.p+i.u(t),s=new Error;i.l(a,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{for(var n,o,[a,s,d]=r,c=0,l=[];c<a.length;c++)o=a[c],i.o(e,o)&&e[o]&&l.push(e[o][0]),e[o]=0;for(n in s)i.o(s,n)&&(i.m[n]=s[n]);for(d&&d(i),t&&t(r);l.length;)l.shift()()},r=self.webpackChunkdevicetradein=self.webpackChunkdevicetradein||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),i(3192)})();
//# sourceMappingURL=component.bundle.js.map"1.0.0"});

        if (window.parent) {
            window.parent.postMessage({
                'func': 'BF__Tealium_PushData',
                'message': {"widgetTypeId":"0005","widgetTypeName":"custom","widgetId":"6452a4988383d","widgetPosition":"chip_widget_configurator"}
            }, "*");
        }
    </script>
</head>
<body class="cwp " style="background: white;">
<div id="main" class="chip-widget__custom">
                <section class="WidgetCustom ">
                        <a href="https://www.thepioneer.de/originals/thepioneer-briefing-business-class-edition/willkommen?utm_source=focus" target="_blank" rel="nofollow"><img src="https://static.focus.de/pics/banners/hub-banners/MediaPioneer_FocusBanner_InhalteWerbung_Static_HIGHRES-min.jpg" width="100%" /></a>
        </section>
    
                <script>
        window.digitalData = window.digitalData || {};
        window.digitalData.component = window.digitalData.component || [];
        window.digitalData.component.push({"widgetID":"0005","partner":"custom","name":"custom_widget","position":"chip_widget_configurator","customType":"Media Pioneer Steingart 1"});
    </script>
    
</div>

                <script async src="//widget.focus.de/build/runtime.ffd7dd9f.js"></script>
            <script async src="//widget.focus.de/build/6002.617e62a9.js"></script>
            <script async src="//widget.focus.de/build/4838.33236739.js"></script>
            <script async src="//widget.focus.de/build/2718.e3e05f66.js"></script>
            <script async src="//widget.focus.de/build/preview.e8fbb23f.js"></script>
    
                <script async src="//widget.focus.de/build/commonPreview.472cfab9.js"></script>
    
    <!-- Renders app.js & a webpack runtime.js file <script src="/build/runtime.js"></script> <script src="/build/app.js"></script> -->

    <script>

        const widgetId = '6452a4988383d';
        let documentHeight = 0;

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const heightDiff = documentHeight - entry.target.scrollHeight;
                if (heightDiff > 10 || heightDiff < -10) {
                    documentHeight = entry.target.scrollHeight;
                    const message = 'documentHeight:' + documentHeight + ', widgetId:' + widgetId;
                    parent.postMessage(message, '*');
                }
            }
        });
        resizeObserver.observe(document.body);

    </script>


<div style="display: none;">
    <svg width="0" height="0" style="position:absolute"><defs><svg id="chip-logo-invert"  viewBox="0 0 81 26">
  <path d="M81 19V0H0v26h70v-7"/>
  <path fill="#FFF" d="M56.244 21c0 1.104-.896 2-2 2H51c-1.104 0-2-.896-2-2V4c0-.55.447-1 1-1h1.877c.553 0 1 .45 1 1v7.05l3.367 3.37V21zm10.43 0c0 1.104-.897 2-2 2h-3.45c-1.104 0-2-.896-2-2V5c0-1.104.896-2 2-2H76c1.104 0 2 .896 2 2v8.435c0 1.104-.896 2-2 2h-8.327c-.553 0-1 .447-1 1V21zm-3.577-10.443c0 .552.447 1 1 1h9.018c.553 0 1-.448 1-1v-2.68c0-.55-.447-1-1-1h-9.018c-.553 0-1 .45-1 1v2.68zM41 3c-.553 0-1 .448-1 1v5.47c0 1.103-.897 2-2 2h-7.124c-1.104 0-2-.897-2-2V4c0-.552-.448-1-1-1H26c-.553 0-1 .448-1 1v17c0 1.104.895 2 2 2h3.346c1.104 0 2-.896 2-2v-3.653c0-1.104.896-2 2-2H38c1.103 0 2 .896 2 2V22c0 .553.447 1 1 1h1.876c.553 0 1-.447 1-1V4c0-.552-.447-1-1-1H41zM21.572 21c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2V5c0-1.105.896-2 2-2h14.572c1.104 0 2 .895 2 2v3.73c0 .553-.448 1-1 1H18.55c-.473 0-.856-.382-.856-.854v-1c0-.552-.448-1-1-1H8.877c-1.104 0-2 .896-2 2v2.174l3.368 3.367v2.704c0 1.107.896 2 2 2h4.45c.55 0 1-.444 1-1v-.493c0-.553.447-1 1-1h1.877c.552 0 1 .447 1 1V21z"/>
</svg><svg id="indicator-angle"  viewBox="0 0 800 800">
    <path d="M0 257.073c0-8.768 3.148-16.3 9.416-22.607l82.386-81.868c6.283-6.283 13.72-9.418 22.337-9.418 8.617 0 16.065 3.135 22.35 9.418l263.517 263.52 263.53-263.52c6.27-6.283 13.733-9.418 22.34-9.418 8.603 0 16.038 3.135 22.335 9.417l82.396 81.87c6.24 6.28 9.393 13.812 9.393 22.606 0 8.78-3.15 16.31-9.392 22.594l-368.24 367.736c-6.294 6.273-13.747 9.418-22.365 9.418-8.62 0-16.063-3.145-22.348-9.417L9.415 279.667C3.148 273.385 0 265.854 0 257.073z"/>
</svg>

<svg id="indicator-arrow"  viewBox="0 0 32 32">
  <path d="M31.4 14.6l-14-14c-.8-.8-2-.8-2.8 0L13 2.2c-.8.8-.8 2 0 2.8l7 7H2c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h17.9l-7 7c-.8.8-.8 2 0 2.8l1.6 1.6c.5.4 1 .6 1.5.6s1-.2 1.4-.6l14-14c.8-.8.8-2 0-2.8z"/>
</svg><svg id="indicator-cross"  viewBox="0 0 800 800">
    <path d="M792.68 642.685L549.99 399.998l242.688-242.69c2.612-2.625 4.52-5.676 5.737-8.922 3.32-8.898 1.415-19.273-5.737-26.428L678.036 7.31c-7.153-7.152-17.553-9.02-26.442-5.724-3.223 1.197-6.297 3.1-8.91 5.7L399.996 249.978 157.305 7.288c-2.625-2.6-5.676-4.503-8.922-5.7-8.898-3.32-19.273-1.428-26.428 5.723L7.31 121.957C.16 129.11-1.71 139.51 1.587 148.384c1.22 3.247 3.1 6.3 5.725 8.922L250 399.996 7.31 642.686c-2.6 2.613-4.505 5.69-5.726 8.91-3.32 8.888-1.428 19.29 5.725 26.44l114.643 114.646c7.153 7.15 17.554 9.01 26.428 5.737 3.248-1.222 6.3-3.126 8.923-5.738L399.996 549.99l242.69 242.688c2.613 2.612 5.69 4.52 8.91 5.737 8.91 3.32 19.29 1.415 26.44-5.737L792.68 678.034c7.152-7.15 9.06-17.552 5.737-26.44-1.22-3.22-3.125-6.296-5.737-8.91z"/>
</svg><svg id="indicator-info"  viewBox="0 0 800 800">
    <path d="M400 0C179.086 0 0 179.086 0 400s179.086 400 400 400 400-179.086 400-400S620.914 0 400 0zm-66.61 100.07c0-4.895 1.525-8.827 4.674-11.975 3.15-3.147 7.08-4.675 11.975-4.675H450.08c4.932 0 8.86 1.525 11.986 4.675 3.175 3.15 4.688 7.08 4.688 11.975v83.25c0 4.894-1.61 8.946-4.688 12.095-3.174 3.148-7.08 4.675-11.986 4.675H350.04c-4.896 0-8.826-1.525-11.976-4.675-3.146-3.15-4.673-7.067-4.673-11.975v-83.37zm199.943 549.956v.024-.024c0 4.81-1.49 8.862-4.662 11.987-3.176 3.173-7.13 4.688-12.012 4.688H283.34c-4.895 0-8.828-1.515-11.975-4.687-3.146-3.174-4.674-7.08-4.674-11.987v-83.37c0-4.936 1.526-8.84 4.675-12.014 3.15-3.125 7.08-4.66 11.975-4.66h50.024V383.36H283.34c-4.895 0-8.828-1.526-11.975-4.676-3.146-3.15-4.674-7.067-4.674-11.975v-83.37c0-4.894 1.526-8.825 4.675-11.974 3.15-3.148 7.08-4.674 11.975-4.674h166.62c4.933 0 8.838 1.525 12.013 4.674 3.125 3.15 4.66 7.08 4.66 11.975v266.667h50.025c4.933 0 8.84 1.514 12.013 4.688 3.126 3.174 4.663 7.08 4.663 11.986v83.346z"/>
</svg><svg id="indicator-checkmark"  viewBox="0 0 800 800">
    <path d="M0 399.986c0-13.747 4.813-25.432 14.453-35.07l70.2-70.215c9.64-9.624 21.34-14.45 35.1-14.45 13.745 0 25.446 4.826 35.086 14.45l151.744 152.253 338.59-339.084c9.626-9.626 21.34-14.453 35.06-14.453 13.774 0 25.46 4.827 35.116 14.452l70.2 70.213c9.624 9.64 14.45 21.325 14.45 35.086 0 13.76-4.826 25.46-14.45 35.084L341.666 692.13c-9.64 9.654-21.325 14.453-35.086 14.453-13.762 0-25.46-4.8-35.085-14.453L14.452 435.1C4.812 425.447 0 413.762 0 399.986z"/>
</svg><svg id="symbol-quote"  viewBox="0 0 800 800">
    <path d="M26.756 326.827V0H348.38v275.104c0 148.86-17.232 256.066-51.723 321.626C248.88 686.688 174.373 754.593 73.25 800L0 681.657c59.976-24.4 101.814-64.823 134.132-115.826 38.8-61.21 48.85-133.436 49.205-239.003H26.73h.026zm0 0V0H348.38v275.104c0 148.86-17.232 256.066-51.723 321.626C248.88 686.688 174.373 754.593 73.25 800L0 681.657c59.976-24.4 101.814-64.823 134.132-115.826 38.8-61.21 48.85-133.436 49.205-239.003H26.73h.026zM478.362 326.827V0H800v275.104c0 148.86-17.245 256.066-51.733 321.626C700.49 686.688 625.99 754.593 524.867 800l-73.273-118.343c59.992-24.4 101.83-64.823 134.146-115.826 38.786-61.21 48.854-133.436 49.192-239.003H478.34h.022zm0 0V0H800v275.104c0 148.86-17.245 256.066-51.733 321.626C700.49 686.688 625.99 754.593 524.867 800l-73.273-118.343c59.992-24.4 101.83-64.823 134.146-115.826 38.786-61.21 48.854-133.436 49.192-239.003H478.34h.022z"/>
</svg><svg id="cta-expand"  viewBox="0 0 800 800">
  <path d="M473 17.9l.2 65c0 5 1.7 9.1 5.1 12.5 3.4 3.4 7.6 5.1 12.5 5.1h137.5l-173.1 173c-3.5 3.5-5.3 7.7-5.3 12.5s1.8 9 5.3 12.5l45.8 46.1c3.5 3.5 7.7 5.3 12.6 5.3 4.9 0 9.1-1.8 12.6-5.3l173.1-173.2v137.5c0 5 1.7 9.1 5.1 12.5 3.4 3.4 7.6 5.1 12.5 5.1l65 .2c5 0 9.2-1.7 12.7-5.2s5.2-7.7 5.2-12.7V17.9c0-5-1.9-9.1-5.3-12.5C791.1 2 786.9.1 781.9.1l-291-.1c-4.9 0-9.2 1.7-12.6 5.2-3.5 3.5-5.2 7.7-5.3 12.7zM327 782.1l-.2-65c0-5-1.7-9.1-5.1-12.5-3.4-3.4-7.6-5.1-12.5-5.1H171.7l173.1-173c3.5-3.5 5.3-7.7 5.3-12.5s-1.8-9-5.3-12.5L299 455.4c-3.5-3.5-7.7-5.3-12.6-5.3-4.9 0-9.1 1.8-12.6 5.3l-173.2 173V490.9c0-5-1.7-9.1-5.1-12.5-3.4-3.4-7.6-5.1-12.5-5.1l-65-.2c-5 0-9.2 1.7-12.7 5.2C1.7 481.8 0 486 0 491v291.2c0 5 1.9 9.1 5.3 12.5 3.4 3.4 7.6 5.3 12.6 5.3h291.2c4.9 0 9.2-1.7 12.6-5.2 3.5-3.5 5.2-7.7 5.3-12.7z"/>
</svg><svg id="cta-download"  viewBox="0 0 10 10">
    <path d="M10 10H0V7h1v2h8V7h1M6 4V0H4v4H2l3 3 3-3"/>
</svg><svg id="service-newsletter"  viewBox="0 0 800 800">
    <path d="M0 643V157.1c0-19.6 7-36.5 21-50.4 14-14 30.8-21 50.5-21h657.1c19.7 0 36.5 7 50.5 21s21 30.8 21 50.4v485.7c0 19.6-7 36.4-21 50.4s-30.8 21-50.5 21H71.3c-19.7 0-36.5-7-50.5-21C7 679.3 0 662.5 0 643zm57.2 0c0 3.9 1.4 7.2 4.2 10 2.8 2.8 6.2 4.3 10 4.3h657.2c3.9 0 7.2-1.4 10-4.3 2.8-2.8 4.3-6.2 4.3-10V300c-9.5 10.7-248.5 203.1-258 210.3-9.5 7.1-22.4 14.3-38.6 21.6-16.2 7.3-31.5 10.9-45.7 10.9h-.9c-14.3 0-29.5-3.6-45.8-10.9-16.2-7.3-29.1-14.5-38.6-21.6-9.5-7.2-248.5-199.6-258-210.3l-.1 343zm0-485.7c0 50 21.9 92.2 65.6 126.8 57.4 45.2 250.8 195.1 257.6 197.8 6.8 2.7 13.2 4 19.2 4h.9c5.9 0 12.4-1.3 19.2-4 6.8-2.7 200.1-152.6 257.6-197.8 16.1-12.8 70-64.9 71.9-127.5 0 0 .3-4-1.6-6.3-7.4-7.6-19-7.4-19-7.4H71.3c-3.9 0-7.2 1.4-10 4.2-2.7 2.8-4.1 6.2-4.1 10.2z"/>
</svg><svg id="service-speedtest"  viewBox="0 0 800 800">
    <path d="M478.004 482.035c0 40.9-33.1 74-73.998 74s-73.998-33.1-73.998-74c0-40.896 33.1-73.998 73.998-73.998 40.9-.1 73.998 33.102 73.998 73.998zM800 243.04c-33.7-51.998-68.4-89.696-120.498-126.396-52-36.8-111.898-61.898-173.798-73.1-61.998-11.3-125.797-9-185.996 6.4-60.3 15.3-116.598 44-164.097 82.8-47.594 38.8-86.294 87.598-112.993 141.997-26.8 54.4-41.3 114.3-42.5 174-1.4 59.7 10.2 119.398 33.8 173.498 23.5 54.1 58.698 102.6 102.197 141.3l8-6.002s-27.3-24.7-54.5-60.398l50-46.8c2.3-2.2 0-6-3-4.898l-65.9 24.5c-10.3-16.3-19.5-33.803-25.7-51.7-1.3-3.6-2.6-7.3-3.8-11l54.3-32c2.7-1.6 1.3-5.8-1.9-5.4l-60.8 8.3c-5.7-22.6-9.4-45.6-11-68.7l58.1-13.7c3.1-.7 3-5.196-.2-5.7l-58.897-9.8c0-10.2.5-20.3 1.4-30.395 1.1-13.4 3-26.7 5.4-39.802l57.7-2.497c3.2-.102 3.9-4.5.9-5.6l-52.4-19.3c6.1-23.1 14.4-45.5 24.6-67l61.6 13.8c3.1.7 4.9-3.4 2.3-5.2l-49.9-35.398c12.1-21 26.1-40.8 41.9-59.1l56.898 35.1c2.7 1.7 5.8-1.6 3.9-4.2l-38.9-54.3c14.4-14.198 29.8-27.198 46.1-38.8 3.7-2.6 7.4-5.198 11.2-7.698l46 46.696c2.2 2.3 6-.2 4.8-3.1l-24-59.8c21.7-11.9 44.5-21.698 67.9-29.2l26.2 49.5c1.5 2.8 5.8 1.5 5.5-1.6l-5.103-55.198c5.6-1.3 11.2-2.5 16.8-3.6 16.8-3.2 33.7-5.2 50.7-6l13.2 55.8c.7 3.1 5.2 2.897 5.7-.2l9.2-56c21.1.5 42.2 2.8 62.8 6.8l-1.2 56.1c-.1 3.2 4.3 4.2 5.6 1.2l22.6-51c23.3 6.4 45.8 15 67.198 25.7l-21.2 58.2c-1.1 3 2.7 5.3 4.9 3l42.9-46.5c13.7 8.3 26.8 17.5 39.2 27.5 6.696 5.397 13.1 10.8 19.198 16.397l-30.698 46.3c-1.8 2.7 1.398 5.8 4.1 4l46.4-31c9.498 10.1 18.397 20.6 26.498 31.7l-256 159.795c22.898 11.6 39.898 33.197 45.3 59.098L708.3 259.343c7.3 11.1 14.002 22.7 20.103 35L800 243.04z"/>
</svg><svg id="service-video"  viewBox="0 0 800 800">
    <circle cx="400" cy="400" r="368" fill="none" stroke="currentcolor" stroke-width="60"/>
    <path d="M260 575l350-175-350-175"/>
</svg><svg id="symbol-triangle"  viewBox="0 0 800 800">
  <path d="M0 800l800-400L0 0"/>
</svg>
<svg id="social-facebook"  viewBox="0 0 800 800">
    <path d="M754.783 0C780.867 0 800 19.13 800 45.217v709.567C800 780.868 780.867 800 754.783 800h-203.48V490.437h104.35l15.653-121.74H551.304v-76.52c0-34.782 10.436-59.13 60.868-59.13h64.352v-107.83S634.784 120 582.61 120c-92.174 0-154.78 57.392-154.78 160v88.695H323.48v121.74h104.35V800H45.216C19.13 800 0 780.868 0 754.784V45.217C0 19.13 19.13 0 45.217 0h709.566z"/>
</svg><svg id="social-youtube"  viewBox="0 0 800 800">
    <path d="M400 118.4c230.398 0 321.6 3.2 358.397 40C785.6 185.6 800 241.8 800 400S785.6 614.4 758.397 641.603C721.6 678.398 630.397 681.6 400 681.6c-230.4 0-321.6-3.2-358.4-39.998C14.4 614.4 0 558.2 0 400.002 0 241.8 14.4 185.6 41.6 158.4c36.8-36.8 128-40 358.4-40zm-83.2 160v225.602L532.8 392l-216-113.6z"/>
</svg><svg id="social-instagram"  viewBox="0 0 800 800">
  <path d="M400 72.1c106.8 0 119.5.4 161.6 2.3 39 1.8 60.2 8.3 74.3 13.8 17.4 6.4 33.1 16.6 46 29.9 13.3 12.9 23.5 28.6 29.9 46 5.5 14.1 12 35.3 13.8 74.3 1.9 42.2 2.3 54.8 2.3 161.6s-.4 119.5-2.3 161.6c-1.8 39-8.3 60.2-13.8 74.3-13.5 34.9-41 62.5-75.9 75.9-14.1 5.5-35.3 12-74.3 13.8-42.2 1.9-54.8 2.3-161.6 2.3s-119.5-.4-161.6-2.3c-39-1.8-60.2-8.3-74.3-13.8-17.4-6.4-33.1-16.6-46-29.9-13.3-12.9-23.5-28.6-29.9-46-5.5-14.1-12-35.3-13.8-74.3-1.9-42.2-2.3-54.8-2.3-161.6s.4-119.5 2.3-161.6c1.8-39 8.3-60.2 13.8-74.3 6.4-17.4 16.6-33.1 29.9-46 12.9-13.3 28.6-23.5 46-29.9 14.1-5.5 35.3-12 74.3-13.8 42.1-1.9 54.8-2.3 161.6-2.3M400 0C291.4 0 277.7.5 235.1 2.4c-42.6 2-71.7 8.7-97.1 18.6-26.7 10-50.9 25.8-70.8 46.1C46.8 87.1 31 111.3 21 138c-9.9 25.4-16.6 54.5-18.6 97.1C.5 277.7 0 291.4 0 400s.5 122.3 2.4 164.9c1.9 42.6 8.7 71.7 18.6 97.1 10 26.7 25.8 50.9 46.1 70.8 20 20.3 44.2 36.1 70.8 46.1 25.4 9.9 54.5 16.6 97.1 18.6 42.7 1.9 56.3 2.4 164.9 2.4s122.3-.5 164.9-2.4c42.6-1.9 71.7-8.7 97.1-18.6 53.7-20.8 96.2-63.3 117-117 9.9-25.4 16.6-54.5 18.6-97.1 1.9-42.7 2.4-56.3 2.4-164.9s-.5-122.3-2.4-164.9c-1.9-42.6-8.7-71.7-18.6-97.1-10-26.7-25.8-50.9-46.1-70.8C712.9 46.8 688.7 31 662 21c-25.4-9.9-54.5-16.6-97.1-18.6C522.3.5 508.6 0 400 0z"/>
  <path d="M400 194.6c-113.4 0-205.4 92-205.4 205.4s92 205.4 205.4 205.4 205.4-92 205.4-205.4-92-205.4-205.4-205.4zm0 338.7c-73.6 0-133.3-59.7-133.3-133.3 0-73.6 59.7-133.3 133.3-133.3 73.6 0 133.3 59.7 133.3 133.3 0 73.6-59.7 133.3-133.3 133.3z"/>
  <circle cx="613.5" cy="186.5" r="48"/>
</svg><svg id="social-tiktok"  viewBox="0 0 800 800">
	<path d="M704.8 0H95.2C42.7 0 0 42.7 0 95.2v609.5C0 757.3 42.7 800 95.2 800h609.5c52.5 0 95.2-42.7 95.2-95.2V95.2C800 42.7 757.3 0 704.8 0m-76.1 349c-4.4.4-8.8.6-13.1.7-48.1 0-93-24.3-119.4-64.5V505c0 89.7-72.7 162.4-162.4 162.4S171.4 594.7 171.4 505 244 342.5 333.7 342.5c3.4 0 6.7.3 10 .5v80c-3.3-.4-6.6-1-10-1-45.8 0-82.9 37.1-82.9 82.9s37.1 82.9 82.9 82.9 86.2-36.1 86.2-81.9l.8-373.2h76.6c7.2 68.7 62.6 122.3 131.4 127.3v89"/>
</svg><svg id="social-twitch"  viewBox="0 0 800 800">
	<path d="M779.5 329.1L759 308.6h-24.9c-24.2 0-24.9 0-25.3-.7-.2-.5-.4-7.6-.4-20.6v-19.9h-86.6L601.2 288l-20.6 20.6h-45.9l-11 10.9c-6 6-11.1 10.9-11.2 10.9s-.3-4.9-.4-10.9l-.1-10.9-20.4-.2-20.4-.2-.1-20.5-.1-20.5H315.5v19.9c0 13-.1 20.1-.4 20.6-.4.7-1.8.7-93.7.7h-93.3L107.6 288 87 267.4H0v182.9L20.7 471l20.7 20.7 34.1 20.5 34.1 20.5h59.6v-4.4c0-2.7.1-4.4.4-4.4.2 0 5.3 2 11.3 4.4l10.9 4.4H311l11.2-11.2c6.2-6.2 11.3-11.1 11.4-11s4.6 21.5 4.6 22.1c0 .1 14.4.1 32.1.1h32.1v-10.9c0-8.5.1-10.9.5-10.9.3 0 5.4 4.9 11.4 10.9l10.9 10.9h64l.2-.8c.1-.5 1.1-5.3 2.2-10.8s2.1-10.1 2.3-10.3c.2-.2 5.3 4.7 11.4 10.8l11.1 11.1h73.3l10.9-10.9c6-6 11.1-10.9 11.4-10.9.4 0 .5 2.4.5 10.9v10.9h41.3l15.6-11.2c8.6-6.1 15.8-11.1 15.9-10.9.1.1.3 5.2.4 11.2l.1 10.9h45.8l34.2-22.9 34.2-22.9V349.7l-20.5-20.6zM109.6 377l-20.4.2-20.4.2v45.2l20.4.2 20.4.2v50H79.9l-29.7.1-16-16-16-16 .1-77.7.1-77.7h50l.2 20.4.2 20.4 20.4.2 20.4.2V377zm190 80.2l-16 16H128V326.8l25.1.1 25.1.1.2 47.8.2 47.8h17.9l.1-47.9.1-47.9 25.1.1 25.1.1.2 47.8.2 47.8H265l.1-47.9.1-47.9 25.1.1 25.1.1.1 57.1.1 57.1-16 16zm84.3-57.2v73l-25.1.1-25.1.1V326.8l25.1.1 25.1.1v73zm0-102.9v11.3l-24.9.1c-19.8.1-24.9 0-25.1-.4-.1-.3-.1-5.4-.1-11.4l.1-10.9h50v11.3zm109.7 80.1l-20.3.1-20.3.1v45.2l20.3.1 20.3.1v50.4h-59.3l-16-16-16-16 .1-77.7.1-77.7h50l.2 20.4.2 20.4 20.3.1 20.3.1.1 50.4zm128 0h-29.5c-26.6 0-29.5.1-29.7.6-.3.8-.3 43.7 0 44.4.2.5 3.2.6 29.7.6h29.5v50.4h-77.9L528 457.4l-15.8-15.8v-83.2l15.8-15.8 15.8-15.8h77.9v50.4h-.1zm160.1 38.7l-.1 57.1h-50l-.2-47.8-.2-47.8h-40.9l-.1 47.9-.1 47.9h-25c-19.7 0-25-.1-25.2-.5-.1-.3-.1-42.4-.1-93.7l.1-93.2h50l.1 20c.1 14.1.2 20.2.5 20.5.3.4 5.7.5 29.8.5h29.4l16 16 16 16v57.1z"/>
</svg>
<svg id="company-trackdelight"  viewBox="0 0 800 800">
    <path d="M407.799 5.241L754.847 196.65c5.036 2.769 7.153 5.756 7.153 11.804v383.256c0 5.61-1.825 8.525-6.715 11.148L406.777 795.068c-4.452 2.477-7.882 2.623-12.481.146L45.788 603.075C40.46 600.161 39 596.664 39 590.98l.158-119.832-.012-71.869h0l.012-71.228L39 209.401c0-6.498 2.033-9.917 7.541-13l.342-.188L393.128 5.241c5.401-2.987 9.269-2.987 14.67 0zm-14.305 53.408L91.988 224.847c-5.693 3.133-7.81 6.558-7.81 13.188v331.232c0 6.286 1.613 9.911 7.248 13.072l.343.189 301.505 166.199c5.036 2.769 8.904 3.06 14.086.219l301.505-166.272c5.693-3.133 7.882-6.558 7.882-13.188l-.181-92.25.031-55.347.005-18.456-.005-18.264h0l-.031-54.786.181-91.254c0-7.008-1.898-10.998-8.041-14.45l-.352-.195L407.58 58.721c-5.109-2.842-8.904-2.914-14.086-.073zm13.721 5.829l296.25 163.357c5.579 3.07 7.864 6.281 7.886 12.717v.398l-.176 108.511.022 36.172.005 18.092-.005 18.07h0l-.022 36.14.176 108.419c0 6.498-2.036 9.847-7.544 12.927l-.342.188-222.824 122.74-74.229 40.982h0c-4.051 2.199-7.064 2.603-11.262.335l-.343-.19L133 598.884l-37.435-20.581c-4.671-2.55-5.985-5.538-5.985-10.711v-327.88c0-5.557 1.814-8.397 6.398-10.973l.317-.175L394.077 64.332c4.89-2.696 8.393-2.477 13.137.146zm-43.986 368.664l-1.63.019h0l-2.415.092h0l-2.365.082h0l-2.317.073h0l-3.388.091h0l-2.204.05h0l-2.163.041h0l-2.123.032h0l-2.086.024h0l-2.05.016h0l-3.012.01h0l-2.943-.006h0l-2.881-.022h0l-1.889-.023h0l-2.791-.046h0l-1.836-.038h0l-2.72-.067h0l-2.686-.078h0l-2.659-.089h0l-2.638-.099-1.751-.071-4.362-.192-.89-.07h0l-.365-.021h0l-.365-.011c-1.456-.019-2.846.308-3.271 2.216-.333 1.426.358 2.077 1.346 2.519l.289.121h0l.456.167h0l.729.243h0l2.688.916h0l1.822.641h0l1.005.368h0l.634.24h0l.606.237h0l.859.351h0l.539.232h0l.514.232.248.116.477.233h0l.452.235h0l.429.238c2.227 1.278 3.479 2.711 4.183 4.882l.126.416a12.39 12.39 0 0 1 .113.434l.102.453h0l.091.473.041.244.075.504h0l.066.526h0l.057.549h0l.049.573h0l.059.906h0l.031.636h0l.025.663h0l.02.69h0l.015.719h0l.021 1.927h0l.004 1.25h0l.001 120.969c0 5.683-.073 11.367-.365 17.05-.365 7.141-3.795 11.585-11.386 12.459a12.91 12.91 0 0 1-1.084.037l-.793-.003-.677.004h0l-.338.01-.168.008-.333.022-.164.015-.322.039h0l-.312.053c-1.43.283-2.464 1.082-2.086 3.311.341 2.21 1.898 2.536 3.644 2.409l.377-.034h0l.38-.044h0l.381-.052h0l.758-.114c.625-.095 1.227-.183 1.759-.199a961.13 961.13 0 0 1 64.812.219c14.232.51 28.392-.146 42.478-2.696 39.85-7.286 68.607-33.079 74.738-69.729 8.612-51.514-9.853-96.615-72.183-106.525-9.375-1.507-18.763-2.122-27.657-2.321l-2.125-.04-2.104-.026-2.082-.014h0-2.058 0l-2.033.009h0l-2.999.029h0l-1.963.028h0l-2.887.05h0l-9.055.184h0l-2.526.041h0zm34.352 4.609c17.444 1.676 28.465 11.512 34.887 27.178 6.37 15.643 8.125 32.118 8.518 48.699l.042 2.073h0l.029 2.074.018 2.074.015 3.223c.041 20.031-1.376 39.961-8.841 58.873-7.591 19.236-22.918 29.072-42.332 27.469l-.778-.069h0l-.755-.077-.369-.042-.72-.089-.351-.048-.686-.103h0l-.663-.113c-.87-.157-1.68-.34-2.434-.555l-.555-.167c-4.268-1.355-6.621-3.832-7.659-8.372l-.125-.591c-.099-.502-.183-1.027-.253-1.578l-.078-.673-.034-.345-.058-.709-.024-.364-.039-.747h0l-.027-.773-.009-.396-.224-41.185.059-17.651.02-11.767c-.088.044-.175.061-.247.068l-.118.005h0l-.024-14.369-.041-14.357.139-35.903c.022-1.807.095-3.477.227-5.018l.086-.909c1.199-11.466 5.977-15.35 17.866-15.111l.941.027h0l.97.043.496.028 1.015.067h0l1.045.082 1.075.098zm91.087-49.036H307.151l.005.73a14.62 14.62 0 0 0 .033.772l.036.393h181.443v-1.894zm-12.7-222.667l-47.723.194-13.652-.031-13.655-.017-15.19.021-22.79.061c-12.672.027-25.372.027-38.144-.082l-.643-.007-.615.006c-5.209.116-7.304 1.84-7.189 6.764l.023.582c.016.298.04.608.071.928l.033.324c1.265 11.852 1.525 23.769 1.535 35.686l-.005 3.972h0l-.028 5.957-.023 3.97-.02 3.968a7.57 7.57 0 0 1-.07.938l-.045.332-.129.852-.048.344-.042.344-.031.341c-.112 1.525.194 2.907 2.336 3.334 2.432.495 3.474-.675 4.088-2.277l.121-.337h0l.111-.347h0l.102-.355h0l.142-.541h0l.264-1.082h0l.135-.526h0c2.992-10.638 6.569-21.13 12.043-30.821l.318-.561h0l.645-1.111c6.304-10.672 14.562-19.305 26.845-23.393l.534-.17h0l.772-.232h0l.496-.138h0l.48-.124.465-.11.45-.094h0l.435-.078a12.1 12.1 0 0 1 .42-.061l.404-.044c2.91-.254 4.594.971 5.051 4.954l.055.56a24.03 24.03 0 0 1 .073 1.893l-.001.348-.215 82.757.012 27.586-.002 13.793-.015 14.367h0l-.009 1.121h0l-.018 1.084h0l-.027 1.047h0l-.038 1.011h0l-.049.976-.029.475-.066.925-.038.45-.085.875c-1.109 10.446-5.149 13.689-16.864 15.142l-.98.115h0l-1.015.108h0l-1.051.101h0l-1.087.095h0l-1.124.09h0c-.35.023-.744.004-1.156-.029l-.943-.082h0l-.313-.024-.321-.019h0l-.317-.009c-1.572-.02-2.921.403-2.789 2.859.13 2.214 1.504 2.669 3.072 2.66l.339-.009h0l.342-.02h0l.515-.045h0l1.17-.126h0l.316-.029h0l.303-.02.146-.006c32.114-.583 64.228-.51 96.342 0 .295 0 .619.025.959.059l1.185.122h0l.326.026h0l.325.018h0l.321.007c1.539.001 2.868-.482 2.868-2.854 0-2.208-1.152-2.713-2.553-2.745h-.315 0l-.321.013h0l-.488.036-.651.064c-.592.06-1.165.116-1.656.083l-1.065-.086h0l-1.032-.091h0l-.999-.098-.487-.051-.95-.108-.463-.057-.903-.12-.44-.063-.857-.133c-9.541-1.563-13.278-4.967-14.423-14.131l-.094-.824-.042-.423-.075-.87-.063-.901-.051-.933h0l-.04-.965-.029-.999-.019-1.032h0l-.009-1.067h0l-.163-62.467.001-31.234-.057-46.85.002-.304h0l.013-.584c.188-5.301 2.172-6.536 7.576-5.015 12.602 3.54 20.973 11.743 27.497 22.038l.657 1.054a97.67 97.67 0 0 1 2.208 3.794c5.255 9.472 8.612 19.746 11.532 30.165l.102.378h0l.287 1.13.093.342.104.349h0l.113.343h0l.125.333c.573 1.418 1.55 2.479 3.774 2.08 2.506-.417 2.828-1.953 2.693-3.578l-.034-.337h0l-.044-.338h0l-.048-.326c-.092-.596-.198-1.175-.232-1.687-.803-15.352-.195-30.703.719-46.055l.256-4.187h0l.286-4.509h0l.028-.62c.17-5.131-1.366-6.817-5.844-7.103l-.54-.027-.281-.009-.582-.009h0l-.61.002h0z"/>
</svg>
<svg id="image-placeholder"  viewBox="0 0 720 720">
  <path fill="#F0F0F0" d="M0 0h720v720H0z"/>
  <text font-family="inherit" color="#808080" font-size="2rem" x="50%" y="42%" dominant-baseline="middle" text-anchor="middle">Das Bild fehlt.</text>
  <text font-family="inherit" color="#808080" font-size="2rem" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">Versuchen Sie es</text>
  <text font-family="inherit" color="#808080" font-size="2rem" x="50%" y="58%" dominant-baseline="middle" text-anchor="middle">später wieder.</text>
</svg>
<svg id="image-placeholder-16-9"  viewBox="0 0 720 405">
  <path fill="#F0F0F0" d="M0 0h720v405H0z"/>
  <text font-family="inherit" color="#808080" font-size="1.5rem" x="50%" y="38%" dominant-baseline="middle" text-anchor="middle">Das Bild fehlt.</text>
  <text font-family="inherit" color="#808080" font-size="1.5rem" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">Versuchen Sie es später</text>
  <text font-family="inherit" color="#808080" font-size="1.5rem" x="50%" y="62%" dominant-baseline="middle" text-anchor="middle">wieder.</text>
</svg><svg id="image-placeholder-4-3"  viewBox="0 0 720 540">
  <path fill="#F0F0F0" d="M0 0h720v540H0z"/>
  <text font-family="inherit" color="#808080" font-size="1.5rem" x="50%" y="40%" dominant-baseline="middle" text-anchor="middle">Das Bild fehlt.</text>
  <text font-family="inherit" color="#808080" font-size="1.5rem" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">Versuchen Sie es später</text>
  <text font-family="inherit" color="#808080" font-size="1.5rem" x="50%" y="60%" dominant-baseline="middle" text-anchor="middle">wieder.</text>
</svg>
</defs></svg>
</div>
<div class="Modal__Container">
    <div class="Modal__Overlay"></div>
</div>
</body>
</html>
				try {
				
        
        window.bf__bfa_metadata = {}; 
        window._aeq = window._aeq || [];
        window._aeq.push(['setGlobalOptions', {
            device: 'desktop',
            mobile: false,
            category: 'sonstiges', contentId: 'esc-sctn22535',adunit1: 'focus',adunit2: 'admanager',adunit3: 'frontpage',
            siteName: 'fol',
            keyword: 'nopolar,fol_admanager',   
            contentWidth: 1116,
            metadata: window.bf__bfa_metadata,
            ugc: false, publisherId: 'V0000', jobId: 'J9999',
            contentpartnerId: 'P0000',
            dataproviderId: 'D0000',
            techpartnerId: 'T0000', customKeywords: {  },   
            layout: 'channelizer'
		}]);
        window.addEventListener('adReceived',function(e){
			window._folmq.push(function() {;TFT.Ext.FOL.onAdReceivedInf(e,false);});
        },false);
        window.addEventListener('adRendered',function(e){
			window._folmq.push(function() {TFT.Ext.FOL.onAdRenderedInf(e);});
		},false);
    
    
    var _deq = _deq || []; _deq.push(["setConfig", {projectId: "c8c3489e-f329-40e8-bcfc-1f852e512b01",apiKey: "5fb72d88-baeb-4ca1-aa5a-6b7c921e159d", cookieDays: 180}]); _deq.push(["init"]); (function() {var node = document.createElement("script"); node.type = "text/javascript"; node.async = true; node.setAttribute("data-config", "{'layout': 'channelizer', 'contentid': 'esc-sctn22535', 'jobid': 'J9999', 'keywords': 'nopolar,fol_admanager'}"); node.src = (document.location.protocol === "https:" ? "https:" :"http:") + "//a.bf-tools.net/de/de.js"; var scripts = document.getElementsByTagName("script")[0]; scripts.parentNode.insertBefore(node, scripts);})();

			} catch (oError) {
				console.log('JsTryCatch', 'message: ' + oError.message,'error');
			}</script>
                <!-- BEGIN STATISTICS SCRIPT HEAD -->
        <script>
                    var tft_userdomain = escape('.focus.de');
                var tft_ivw_match = "";
                window.trackIVWFOL =  function(category) {
                    IOMm('configure', { st: 'focus', dn: 'data-1818d50639.focus.de',  mh: 5 });
                    try { if (category == 'kommentare'){
tft_ivw_match = "fol_news_www_1-1-2-2-1-2-2-22";
} else if (category == 'video'){
tft_ivw_match = "fol_news_www_1-3-1-2-1-2-2-22";
} else {
tft_ivw_match = "fol_news_www_1-1-1-2-1-2-2-22";
}
                     } catch(e) { };
                    IOMm('pageview', { cp: tft_ivw_match});
                };
                window.getomni = function(category,agof,mode) {
                    if(mode!='primaryTrack') {
                        trackIVWFOL(category);
                        try { FOL_TTM_VirtPageview(category,tft_ivw_match);} catch(e) {};
                    }               
                };
                window.get_pagedots = function(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10) {
                    getomni(x9,x10);
                };
                window.renew_page_pix = function(category,agof) {
                    getomni(category,agof);
                };</script>
                <!-- END STATISTICS SCRIPT HEAD -->
        <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [{
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@id": "https://www.focus.de/",
                        "name": "www.focus.de"
                    }
                }
                
                ,{
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@id": "https://www.focus.de/admanager/",
                        "name": "Admanager"
                    }
                }
                
                ]
            }
        </script>
    <script type="text/javascript">

            /* be sure to have the main Object there as well for Variables */
            window.TFT = window.TFT || {};
			window.TFT.Ext = window.TFT.Ext || {};
			window.TFT.Ext.FOL = window.TFT.Ext.FOL || {};
			window._folmq = window._folmq || [];


            window.TFT.Ext.loadAsynchOwnJs = function(ownJsUrl) {
                /* this part could be part of the main js as well */
                var FocusQueue = function () {
                    /* iterates through the parts of e.g. TFT.Ext.FOL.browserDetect.init and selects the function and the scope around it: function TFT.Ext.FOL.browserDetect.init, scope: TFT.Ext.FOL.browserDetect */
                    function getQueuedFunctionAndScopeByString(string) {
                        var splitted_string = string.split('.'),
                            curr_func = window[splitted_string.shift()],
                            curr_scope = window;

                        while(splitted_string.length > 0) {
                            curr_scope = curr_func;
                            curr_func = curr_func[splitted_string.shift()];
                        }

                        return {
                            func: curr_func,
                            scope: curr_scope
                        };
                    }

                    this.push = function () {
                        var current_argument,
                            funcAndScope;

                        for (var i = 0; i < arguments.length; i++) {
                            current_argument = arguments[i];

                            try {
                                if (typeof arguments[i] === "function") {
                                    /*  argument is already a function */
                                    current_argument();
                                } else {
                                    /*  argument is an array containing a string and the parameters */
                                    funcAndScope = getQueuedFunctionAndScopeByString(current_argument[0]);
                                    funcAndScope.func.apply(funcAndScope.scope, current_argument.splice(1));
                                }
                            } catch (error) {
                            	console.debug(error);
                                console.debug("Calling folmq failed: " +
                                            current_argument + " func: " +
                                            funcAndScope.func  + " scope: " +
                                            funcAndScope.scope);
                                TFT.Core.Console.debug('WireFrameHelperMethodQueue', 'message: ' + error.message,'error');
                            }
                        }
                    }
                };

                function handleQueue() {
                    var old_folmq = window._folmq;

                    window._folmq = new FocusQueue();
                    window._folmq.push.apply(window._folmq, old_folmq);
                }
                /*  until here. By doing this the onload handler gets unnecessary and the script can just be included with an async or defer tag */

                var s = document.createElement("script"),
                    t = document.getElementsByTagName("script")[0];
                s.onload = handleQueue;
                s.src= ownJsUrl;
                t.parentNode.insertBefore(s, t);

            };


        </script>

        <script >
						var TftExtFolChannelizer = true;</script>
						<script >
						try {if (typeof __tcfapi === 'function') {__tcfapi('addEventListener',2,function (tcData,success) {if (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete') {__tcfapi('getCustomVendorConsents',2,function(vendorConsents,success){if (success && typeof(vendorConsents.grants) == "object" && typeof(vendorConsents.grants["5ee7add94c24944fdb5c5ac6"]) == "object" && vendorConsents.grants["5ee7add94c24944fdb5c5ac6"].vendorGrant) {(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments) };h._hjSettings={hjid:2224713,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');if (document.location.href.indexOf("#dbg_tcfv2") > -1) console.log('[TCFv2] - granted consent for hotjar');__tcfapi('removeEventListener',2,function (success) {},tcData.listenerId);}});}});};}catch(e) {};</script>
						<script type="text/javascript">
        window.bfaIt = false;
        window.bfaCl = false;
        window.bfaPublisherId = 'xNotHeMGbNONu5rKe3u5d';
        window.bfaPublisher = 'Focus Online';
        window.bfaHasMobileSite = true;
        window.bfaDevice = 'desktop';
        window.bfaNativeAds = [];
        window.bfaAllowedSources = []
            </script>

            <script>
    var _paq = window._paq = window._paq || [];

    _paq.push(['setDocumentTitle', 'HOMEPAGE - ' + document.title]);
    _paq.push(['trackPageView']);
    _paq.push(['disableCookies']);
    _paq.push(['setCustomDimension', customDimensionId = 2, customDimensionValue = 'xNotHeMGbNONu5rKe3u5d']);

    (function() {
        var u="https://conrad.plan-a.de/";
        _paq.push(['setTrackerUrl', u+'matomo.php']);
        _paq.push(['setSiteId', '1']);

        var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
        g.async = true;
        g.src = u + 'matomo.js';
        s.parentNode.insertBefore(g, s);
    })();
</script>
                        <link rel="stylesheet" href="/build/homepage-desktop-focus-online.5f80abe5.css">
</head>
<body itemscope itemtype="https://schema.org/WebPage" class="list ressort rlgrid">
    <!-- BEGIN STATISTICS SCRIPT BODY -->
    <a name="Seitenbeginn"></a>
	<script >
						trackIVWFOL('');</script>
						<script >
						if (window.addEventListener) {window.addEventListener("message",FOLonMessage,false);}else if (window.attachEvent) {window.attachEvent("onmessage",FOLonMessage,false);};function FOLonMessage(event) {if (event.origin !== "https://static.focus.de" && event.origin !== "https://widget-sandbox.focus.de" && event.origin !== "https://widget.focus.de") return;var data = event.data;if (typeof(window[data.func]) == "function") {window[data.func].call(null,data.message);}};window.BF__Tealium_PushData = function(oCustomVarsIn) {if (typeof utag_data != 'undefined' && typeof(oCustomVarsIn) == "object") {for (var param in oCustomVarsIn) {var utagdimension = param,keyvalue = oCustomVarsIn[param];if (utagdimension != '' && keyvalue != '') {var arrtmp = typeof(utag_data[utagdimension]) != "undefined" ? utag_data[utagdimension] :[];try {arrtmp.push(keyvalue);utag.data[utagdimension] = arrtmp;}catch(oError) {};}}}};</script>
						<script>
                        function FOL_TTM_VirtPageview(category,agof) { /*nn*/}
                        var utag_data={"brand": "focus",
                                          "pageCanonicalUrl": "https://www.focus.de/channelizer/",
                                          "pageCanonicalUrlHash": "7f34f43f32c42c4ea583d300779f4633",
                                          "pageContentId": "esc-sctn22535",
                                          "environment": "prod",
                                          "platform": "web",
                                          "appId": "focus_web-prod",
                                          "pageDisplayFormat": "desktop",
                                          "pageLevel1": "admanager",
                                          "pageLevel2":"n/a","pageLevel3":"n/a",
                                          "pageTemplate": "channelizer",
                                          "pageTemplateDetail": "channelizer",
                                          "pageIvwCode": [typeof tft_ivw_match !== "undefined" ? tft_ivw_match : "","n/a"],
                                          "pageIvwOfferIdentifier": ["focus","n/a"],
                                          "pageAuthor": ["n/a"],
                                          "pageAdKeyword": ["nopolar","fol_admanager"],
                                          "pageviewRevenueId": "n/a",
                                          "salesforcePartnerId": "P0000",
                                          "salesforceDataproviderId": "D0000",
                                          "pageJob": "keine-zuordnung",
                                          "pageJobId": "9999",
                                          "pageInitialPageTitle": "Admanager - FOCUS online - Nachrichten",
                                          "pageCurrentPageTitle": "Admanager - FOCUS online - Nachrichten",
                                          "pageName": "esc-sctn22535 | Admanager - FOCUS online - Nachrichten",
                                          "pageEscenicId": "sctn22535",
                                          "dataLayerVersion": "1.0.0"};</script>
                <script >
						(function(){var tempUtagStorage = [];utagLinkCstFbck = function(data) {window.utag ? utag.link(data) :tempUtagStorage.push(data);};document.addEventListener('utagLoaded',function() {tempUtagStorage.forEach(function(item){utag.link(item);});tempUtagStorage = null;});})();</script>
						<script>    
                       (function(a,b,c,d){
                           try {
                               var utagLoaded = document.createEvent('Event');
                           } catch(oError) {};
                           a='https://tags.focus.de/focus-web/prod/utag.js';
                           b=document;c='script';d=b.createElement(c);d.src=a;
                           d.type='text/java'+c;d.async=true;
                           try {
                               d.onload = function() {
                                   utagLoaded.initEvent('utagLoaded', true, true);
                                   document.dispatchEvent(utagLoaded);
                               };
                           } catch(oError) {};
                           a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a)
                       })();
                   </script>
               <!-- END STATISTICS SCRIPT BODY -->
    <header>
                <nav>
                    <div id="main-navigation-v3">
                        <div class="header-nav">
                            <div class="container_12">
                                <a href="https://www.focus.de/" title="Nachrichten - FOCUS online" class="logo">
                    <svg class="svg-icon nonclickable"><use xlink:href="#fol_logo_ohne_outline"></use></svg>
                </a>
            <div class="elements">     
                                        <ul class="icons" id="headerIcons">                                            
                                            <li class="gutscheine">
                                                <a href="https://www.focus.de/deals/" title="Deals" target="_blank">
													<svg class="svg-icon"><use xlink:href="#ic_deals"/></svg>                                                    	
                                                </a>
                                            </li>
                                            <li class="abo">
                                                <a href="https://focus-abo.de/focus-zwischenseite-auswahl/?mag=focus&hnr=extern.forwardnews.focus-de.top-navi" title="FOCUS lesen und sparen. Jetzt abonnieren!" target="_blank">
                                                    <span class="abo_txt">ABO</span>
                                                </a>
                                            </li>
                                            <li class="list">
                                                <a href="https://www.focus.de/kaufberatung/" title="Shopping-Welt - Partnerangebot" target="_blank">
													<svg class="svg-icon"><use xlink:href="#ic_cart"/></svg>                                                    	                                                   
                                                </a>
                                            </li>
                                            <li class="facebook">
                                                <a href="https://www.facebook.com/focus.de" title="Facebook" target="_blank" rel="nofollow">
                                                    <svg class="svg-icon soc"><use xlink:href="#ic_fb"/></svg>                                                    	
                                                </a>
                                            </li>
                                            <li class="twitter">
                                                <a href="https://twitter.com/focusonline" title="Twitter" target="_blank" rel="nofollow">
                                                    <svg class="svg-icon soc"><use xlink:href="#ic_twitter"/></svg>                                                    													
                                                </a>
                                            </li>

                                        </ul>
                                       <div class="swrap">
                                            <form class="search" action="https://www.focus.de/suche/">
                                                <input type="text" autocomplete="off" name="searchItem" placeholder="Suchen"/>
                                                <button type="submit" class="submit" aria-label="auf Focus Online suchen" value="">
                                                    <svg class="svg-icon"><use xlink:href="#ic_search"/></svg>
                                                </button>
                                            </form>
                                        </div>
                                        
                                   		<div class="header-login-button auth0-login" id="login">
                                   			Anmelden
                                            <span class="arrowh3 arr_r"></span>
                                   		</div>
                                   		<div class="logout-icon-button auth0-logout hidden">
                                   			<svg class="svg-icon"><use xlink:href="#ic_user"/></svg>
                                   		</div>
                                        <div class="auth0-dropdown hidden">
                                            <a href="https://login.burda-forward.de/" target="_blank">Mein Konto<svg class="svg-icon"><use xlink:href="#external-link"/></svg></a>
                                            <div id="logout">Abmelden</div>
                                        </div>
                                        	
                                        <script >
						var auth0Script = document.createElement('script'),loginDiv = document.querySelector('.auth0-login'),logoutDiv = document.querySelector('.auth0-logout'),isMew = false,isMewNotApp = isMew && true,isLogged = localStorage.getItem('auth0_token'),checkLoginStatus,redirectUrl = function(name,save) {if (save) {localStorage.setItem(name,window.location.href);}else {var url = localStorage.getItem(name);localStorage.removeItem(name);return url;}},updateMewTabs = function(bool) {menuHandleLogin.classList.toggle('hidden',bool);menuHandleAccount.classList.toggle('hidden',!bool);},setDivs = function(bool) {if (loginDiv) {loginDiv.classList.toggle('hidden',bool);logoutDiv.classList.toggle('hidden',!bool);isMewNotApp && updateMewTabs(bool);}},auth0Loaded = document.createEvent('Event');if (isMewNotApp) {var menuHandleLogin = document.querySelector('.menu-handle-login'),menuHandleAccount = document.querySelector('.menu-handle-account');}auth0Loaded.initEvent('auth0Loaded',true,true);auth0Script.async = true;auth0Script.onload = function() {setDivs(isLogged);createAuth0Client({domain:"auth.login.burda-forward.de",client_id:"mQICv5poT8NaPRFSHCsylkJ3Q2ReK2Gg",cacheLocation:'localstorage',redirect_uri:window.location.origin,useRefreshTokens:true }).then(async (auth0) => {var doLogout = function() {localStorage.removeItem('auth0_token');redirectUrl('auth0LogoutRedirect',true);auth0.logout({returnTo:window.location.origin });};if (loginDiv) {document.getElementById('login').addEventListener('click',(e) => {e.preventDefault();redirectUrl('auth0LoginRedirect',true);utag.link({event_name:'userLogin.click',event_category:'userLogin',event_action:'userLogin.click',event_label:'n/a'});auth0.loginWithRedirect({redirect_uri:window.location.origin });});document.getElementById('logout').addEventListener('click',(e) => {e.preventDefault();doLogout();});}var isAuthenticated = await auth0.isAuthenticated(),query = window.location.search,redirect;checkLoginStatus = function() {if (isAuthenticated) {auth0.getTokenSilently({ignoreCache:true,cacheMode:'off' }).catch((e) => {isAuthenticated = false;doLogout();});}return isAuthenticated;};if (query.includes('state=') && (query.includes('code=') || query.includes('error='))) {await auth0.handleRedirectCallback();localStorage.setItem('auth0AfterLogin',1);window.location.replace(redirectUrl('auth0LoginRedirect'));}if (redirect = redirectUrl('auth0LogoutRedirect')) {window.location.replace(redirect);}setDivs(isAuthenticated);if (isAuthenticated) {var token = await auth0.getIdTokenClaims();localStorage.setItem('auth0_token',token.__raw);var user = await auth0.getUser();if (localStorage.getItem('auth0AfterLogin')) {utagLinkCstFbck({event_name:'userLogin.complete',event_category:'userLogin',event_action:'userLogin.complete',event_label:'n/a',userType:'producer',userLoginType:user.sub.match(/(.*)\|/)[1],userRegistrationBrand:'fol'});localStorage.removeItem('auth0AfterLogin');}}else {localStorage.removeItem('auth0_token');}document.dispatchEvent(auth0Loaded);});if (!isMew) {var logoutDropdown = document.querySelector('.auth0-dropdown');logoutDiv.addEventListener('click',function() {logoutDropdown.classList.toggle('hidden');logoutDiv.classList.toggle('logout-icon-button-active');});document.addEventListener('click',function(e) {if (e.target != logoutDiv && !logoutDiv.contains(e.target) && !logoutDropdown.contains(e.target)) {logoutDropdown.classList.add('hidden');logoutDiv.classList.remove('logout-icon-button-active');}});}};auth0Script.src = 'https://cdn.auth0.com/js/auth0-spa-js/1.20/auth0-spa-js.production.js';document.body.appendChild(auth0Script);</script>
						<div class="clear"></div>
                                    </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        <div id="menu-wrapper" data-id="5550500">
                                <div class="container_12">
                                    <a href="https://www.focus.de/" title="Nachrichten - FOCUS online" class="menu-item-logo">
    <svg class="svg-icon nonclickable"><use xlink:href="#fol_weltkugel2"/></svg>
</a>

<div class="menu-items">
    <div class="menu-item">
                <a href="https://www.focus.de/politik/">Politik</a>

                </div>
        <div class="menu-item">
                <a href="https://www.focus.de/finanzen/">Finanzen</a>

                </div>
        <div class="menu-item">
                <a href="https://www.focus.de/perspektiven/">Perspektiven</a>

                </div>
        <div class="menu-item">
                <a href="https://www.focus.de/earth/">Earth</a>

                </div>
        <div class="menu-item">
                <a href="https://www.focus.de/wissen/">Wissen</a>

                </div>
        <div class="menu-item">
                <a href="https://www.focus.de/gesundheit/">Gesundheit</a>

                </div>
        <div class="menu-item">
                <a href="https://www.focus.de/kultur/">Unterhaltung</a>

                </div>
        <div class="menu-item">
                <a href="https://www.focus.de/panorama/">Panorama</a>

                </div>
        <div class="menu-item">
                <a href="https://www.focus.de/sport/">Sport</a>

                </div>
        <div class="menu-item">
                <a href="https://www.focus.de/reisen/">Reisen</a>

                </div>
        <div class="menu-item">
                <a href="https://www.focus.de/auto/">Auto</a>

                </div>
        <div class="menu-item">
                <a href="https://www.focus.de/immobilien/">Immobilien</a>

                </div>
        <div class="menu-item">
                <a href="https://www.focus.de/videos/">Video</a>

                </div>
        <div class="menu-item">
                <a href="https://gutscheine.focus.de/">Gutscheine</a>

                </div>
        </div>

</div>
                                </div>
                       </div>
                </nav>
            </header>
                <script >
						loadInlineSvgSprite("https://static.focus.de/pics/icons/menu_common-v9.svg");</script>
						<script >
						window._folmq.push(function() {TFT.Ext.FOL.menu_v3.init();TFT.Ext.FOL.menu_v3.initMisc(false);});</script>
						<div id="special-header-v2">
                <style>#special-header-v2 {margin:0.35rem 0 0.5rem 0;position:relative;}#special-header-v2 .container_12 {margin-left:auto;margin-right:auto;width:62.25rem;padding-right:10.375rem;position:relative;}#special-header-v2 .container_12 .block {}#special-header-v2 .headframe {position:relative;margin:0 0 1.875rem;}#special-header-v2 .headframe .titlebg {position:absolute;bottom:0;width:62.25rem;overflow:hidden;}#special-header-v2 .headframe .titlebg div.titlefrm {position:absolute;}#special-header-v2 .headframe .titlebg div.titlefrm,#special-header-v2 .headframe .titlebg div.titlefrm a,#special-header-v2 .headframe .titlebg div.titlefrm h1 {font-size:1.125rem;font-weight:bold;color:#FFF;}#special-header-v2 .headframe .titlebg div.titlefrm span {display:block;font-size:1rem;font-weight:normal;margin:0 0 0.0625rem;}#special-header-v2 .belt {height:5rem;position:absolute;top:1.25rem;background-color:#666;width:100%;}#special-header-v2 .headframe {height:6.25rem;}#special-header-v2 .headframe .titlebg {height:5rem;}#special-header-v2 .headframe .titlebg div.titlefrm {left:0;top:1rem;width:42.75rem;height:3.875rem;}#special-header-v2 .headframe.editorial .specialimg,#special-header-v2 .headframe.editorial .titlebg {background-color:#156FBC;}#special-header-v2 .headframe.da .specialimg,#special-header-v2 .headframe.da .titlebg {background-color:#666;}#special-header-v2 .headframe div.label {position:absolute;top:0;left:0;width:100%;height:1.25rem;color:#333;font-size:0.625rem;}</style>
		            <div class="belt"></div>
	               <div class="container_12 clearfix">
					<div class="block">
	                    <div class="headframe da">
					        <div class="titlebg">
		                        <div class="titlefrm">
                                            <a href="https://www.focus.de/admanager/" title="">
                                                        <span class="special">    Anzeige
</span><h1></h1></a>
                                                    <style>#special-header-v2 {cursor:pointer;}</style>
		            <script >
						window._folmq.push(function() {$("#special-header-v2 .titlebg,#special-header-v2 .belt").click(function(){document.location.href = 'https://www.focus.de/admanager/';});});</script>
						</div>
                                        </div>
	                        </div>
					    
						</div></div></div><div id="page-container"><!-- BEGIN LIMITED WIDTH -->
<main id="main" class="container_12 clearfix"><section id="content" class="grid_12">
		<div class="channelizer clearfix container_12">
			<div class="block grid_12">
				<div class="header"></div>
				<div class="content">
					    <div id="bfa-homepage">
    <div class="content">
                                    <article class="image-teaser">
                    <a href="https://article.focus.de/10-exklusive-delikatessen-weihnachtspakete-zu-gewinnen_id_01573d24-3e6d-5707-925b-b65531bf418d.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/fPv/w630/XpsQE2VeZ0V8fpOC8pfPv-1.png" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">10 exklusive Delikatessen-Weihnachtspakete zu gewinnen</h4>
                            <p class="image-teaser__copy">Die exklusiven und liebevoll zusammengestellten Wolfram Berge Weihnachtspakete enthalten ausgesuchte Delikatessen für eine kleine kulinarische Genuss- und Erlebnisreise.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/online-performance-marketing-experte_id_04f14294-492a-5678-beb3-b269e70ff086.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/gJU/w630/XpX2wDqaBAISobBEb3gJU-1.jpg" width="630" height="437">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Online Performance Marketing-Experte</h4>
                            <p class="image-teaser__copy">Wenn es um erfolgreiches Online Performance Marketing geht, ist Christopher Esche der Name, den Sie kennen sollten. Als deutscher Performance Marketer hat er mit seiner Firma Primest die Leadgenerierung im Bereich Finanzen und Versicherungen revolutioniert.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/aldi-bio-marke-lebensmittel_id_0a150089-a27b-5b86-8c96-126dff963f22.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/t5O/w630/XpnoKZQksyDkyKXCBpt5O-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Weil es mehr sein darf: Wie ALDI SÜD Bio-Lebensmittel weiterdenkt</h4>
                            <p class="image-teaser__copy"></p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/sichere-dir-dein-kino-erlebnis-fuer-zuhause_id_10b86d52-356f-5916-99f3-66e1eb49503c.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/Ulf/w630/XpsQyOzOfNIXiQMQ4sUlf-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Sichern Sie sich Ihr Kino-Erlebnis für zuhause</h4>
                            <p class="image-teaser__copy">Gewinnen Sie ein klangstarkes Soundbar-Set CINEBAR 11 von Teufel und einen iTunes Gutschein für OPPENHEIMER</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/rewe-bio-besser-fuer-alle_id_1670b50f-e595-5b6c-8ce1-db25fb3e1497.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/nBL/w630/XpvE6UySGh6kUa8Lc3nBL-1.jpg" width="630" height="420">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Warum mehr Bio besser für alle ist</h4>
                            <p class="image-teaser__copy">Bio liegt im Trend – und das nicht ohne Grund: Schließlich profitiert nicht nur die Umwelt vom Griff zum Bio-Produkt im Supermarkt. Was Bio-Qualität bei REWE bedeutet und auf welche Siegel Sie beim Einkauf achten sollten, erfahren Sie hier.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/admara-der-steinige-weg-zur-loesung-des-fachkraeftemangels_id_1753f1f1-cbdd-5a2a-a1be-f0808ecbb5bd.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/88Q/w630/XpfNtmVAo7fscY5le188Q-1.jpg" width="630" height="419">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Admara: Der steinige Weg zur Lösung des Fachkräftemangels</h4>
                            <p class="image-teaser__copy">Der Ruf nach Fachkräften wird immer lauter, nicht zuletzt, weil der demografische Wandel seinen Tribut fordert. Vakanzen bleiben aufgrund fehlendem Fachpersonal oft über Monate hinweg unbesetzt. Admara präsentiert schon heute eine einsatzfähige Lösung gegen diesen Notstand.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/rewe-einkaufstipps-tierwohl_id_1a1ed93d-d9ce-50b8-9cd8-aa125ad6655d.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/Wgd/w630/XpvE7TxGXJwSOegkbtWgd-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Vier einfache Einkaufstipps für mehr Tierwohl</h4>
                            <p class="image-teaser__copy">Ob Fleisch, Milch oder Eier: Bei tierischen Produkten ist es besonders wichtig, deren Herkunft zu kennen. Hier kommen vier Tipps, wie Sie mit Ihrem Einkauf bei REWE das Tierwohl verbessern können.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/schenke-was-du-likest-aussergewoehnlich-erlebnisse-zu-weihnachten_id_1b566406-4ea9-5bd3-8fe9-a88a04057aa5.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/3Yo/w630/XpsajS88yzYwBmXnax3Yo-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Schenke, was du likest – Außergewöhnliche Erlebnisse zu Weihnachten</h4>
                            <p class="image-teaser__copy">Auf Social Media liken und teilen wir täglich Geschichten, Aktivitäten und Emotionen, die wir bereits erlebt haben oder noch öfter gerne erleben möchten. Abenteuer und Highlights, nach denen wir uns sehnen und die wir „feiern“ – der „Gefällt mir“-Button auf Social Media ist schnell geklickt.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/fuer-unternehmen-und-experten-die-ihr-wissen-teilen-moechten-der-pressekreis_id_1d8d1758-f224-5e38-b3cd-c4198bd99539.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/hkI/w630/Xonjdq0jGiiJ8BO8GFhkI-1.jpg" width="630" height="472">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Für Unternehmen und Experten, die ihr Wissen teilen möchten – der Pressekreis</h4>
                            <p class="image-teaser__copy">Wer sich in den heutigen Medien präsentieren möchte, wirbt in der Regel über digitale Plattformen. Allein die Reichweite hochkarätiger Medienseiten, aber auch der zielgerichtete Traffic kann ein Sprungbrett für neue Projekte oder Ideen sein.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/twist-in-the-air-like-you-just-don-t-care_id_23965763-2fa5-586e-9615-fe8697547398.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/KXv/w630/XptIJoHaZR2qDsTLgaKXv-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Twist in the air, like you just don’t care!</h4>
                            <p class="image-teaser__copy">Mit dem neuen Twister Air von Hasbro wird Ihr Wohnzimmer zur Partyzone! Twister Air ist ein neues App-basiertes Spiel, welches das klassische Twister, das Fans kennen und lieben, mit Hilfe von Augmented Reality auf den Bildschirm bringt – und das ganz ohne Matte.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/bewusst-lebensmittel-einkaufen_id_26ba11aa-d90a-57a3-929b-e00d189295ac.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/Grs/w630/XpgLD7DDR7w1qNPFJCGrs-1.jpg" width="630" height="419">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">7 Dinge, auf die Sie beim Lebensmitteleinkauf ab sofort achten sollten</h4>
                            <p class="image-teaser__copy">Der Lebensmitteleinkauf muss meist schnell gehen und soll nicht zu viel kosten. Dabei bietet sich gerade hier die Chance, sich selbst und der Umwelt etwas Gutes zu tun. Gemeinsam mit ALDI SÜD geben wir Tipps und verraten, worauf es beim bewussten Einkaufen wirklich ankommt.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/haushaltsroboter-weniger-weihnachtsstress-mehr-zeit_id_2756524d-d440-587d-a7cc-2d43fe18f96e.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/kpO/w630/Xptzn8ZDA7SllsyzGHkpO-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Wie Haushaltsroboter den Weihnachtsstress einfach wegsaugen</h4>
                            <p class="image-teaser__copy"></p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/modulare-over-ear-kopfhoerer-fuer-musik-fans-mit-liebe-zur-nachhaltigkeit_id_2bba9f3e-ea18-55c2-bf26-23e8c58f6583.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/oMU/w630/Xpt7DHgzIAM8F5vGRroMU-1.png" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Modulare Over-Ear-Kopfhörer für Musik-Fans mit Liebe zur Nachhaltigkeit</h4>
                            <p class="image-teaser__copy">Qualität und Nachhaltigkeit – die modularen Kopfhörer Fairbuds XL von Fairphone im Wert von 249 € vereinen großartigen Sound mit nachhaltigem Design.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/homepilot-starter-set-alexa-fahr-schon-mal-den-rollladen-herunter_id_2c5577b6-4e28-55ed-8e9a-04c7ca62d125.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/69K/w630/XpdXOTH1NhMeTFya8x69K-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">HOMEPILOT Starter-Set: Alexa, fahr schon mal den Rollladen herunter!</h4>
                            <p class="image-teaser__copy">100 Prozent smart, aber ohne aufwendige Installation: Gewinnen Sie eine Automation für zwei Rollläden über elektrische Gurtwickler von HOMEPILOT, inklusive Steuerzentrale für weitere smarte Geräte.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/gesundheit-eigenheim-beziehung-lebenstraeume-und-wie-diese-erreicht-werden_id_2f074c3a-7fe6-5075-92ca-9f7dfad183d9.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/TGN/w630/Xpw9pgukpG9A1NEb5UTGN-1.jpg" width="630" height="354">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Gesundheit, Eigenheim, Beziehung – Lebensträume und wie diese erreicht werden</h4>
                            <p class="image-teaser__copy">Gesundheit, Eigenheim, Beziehung – die Wünsche der Deutschen ändern sich in den jeweiligen Lebensphasen. Regelmäßige, fundierte Finanzberatung hilft, sie bestmöglich zu erfüllen.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/extraportion-geschmack-fuer-sie-ihre-liebsten-mit-aoste-salami-spezialitaeten_id_38b059f8-5d70-5fb5-ac54-90fb00d89d3f.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/lyF/w630/XprNONtbNN9vfzdgBnlyF-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Extraportion Geschmack für Sie &amp; Ihre Liebsten – mit Aoste Salami-Spezialitäten</h4>
                            <p class="image-teaser__copy">Hochwertige Salami-Spezialitäten stilecht präsentieren: Machen Sie mit und gewinnen Sie 1 von 3 Servierplatten inkl. Aoste Genusspaket im Wert von jeweils 100 Euro. Denn das Auge isst mit!</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/erhalten-sie-lokale-hilfsaktionen-ueber-unseren-neuen-newsletter-sensefluence_id_3c27724d-1dad-51cb-977b-c2009e13f7a4.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/YLX/w630/XpyXG4kQM59f7fqtr9YLX-1.png" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Erhalten Sie lokale Hilfsaktionen über unseren neuen Newsletter Sensefluence</h4>
                            <p class="image-teaser__copy"></p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/gewinne-den-q-revo-robotersauger-erlebe-reinigungsrevolution_id_3f751a63-facf-5f2c-bd14-89b9df91d1a0.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/g7L/w630/XptIwA9vwkxPXeBZhRg7L-1.png" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Gewinne den Q Revo Robotersauger &amp; erlebe Reinigungsrevolution</h4>
                            <p class="image-teaser__copy">Der Q Revo macht Reinigen so einfach wie nie zuvor. Dieser Roboterstaubsauger ist nicht nur smart, sondern auch super easy zu bedienen.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/iphone-black-deals-vodafone_id_46cd07c0-db93-53c2-9d6b-559214e1ad69.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/ql0/w630/XpMQeiPwEbhomG89OIql0-1.png" width="630" height="420">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Starke Rabatte während der Black Week mit Deals für Neukunden</h4>
                            <p class="image-teaser__copy">Vodafone senkt die Preise für das iPhone bei Abschluss eines Mobilfunkvertrags. Im Rahmen der Black Week Deals vom 17. bis 30. November 2022 kommen Kunden in den Genuss von saftigen Rabatten. Wir zeigen, welcher Deal sich besonders lohnt.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/wie-wir-die-wirtschaft-mit-investitionen-in-start-ups-voranbringen_id_48cfa19c-f0e5-5ede-a746-49739e73e197.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/GEE/w630/XpVdemphifzaIgDdsEGEE-1.jpg" width="315" height="473">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">&quot;Wie wir die Wirtschaft mit Investitionen in Start-ups voranbringen&quot;</h4>
                            <p class="image-teaser__copy">Die Green Capital &amp; Beteiligungen AG (GCB) investiert in Unternehmen aller Art und verhilft ihnen über die Hürde der Nachfolge. Auch Start-ups gehören zu ihren Kunden. Da diese neu auf dem Markt sind, muss hier anders vorgegangen werden als bei regulären Unternehmen, die schon länger existieren.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/verlost-werden-10-schicke-leichte-bademaentel-der-kultmarke-lestoff_id_4b757e68-97b7-53a8-a96c-78e3d90fd376.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/xNq/w630/Xpork37KZFK28F4yOcxNq-1.png" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Verlost werden 10 schicke, leichte Bademäntel der Kultmarke LeStoff</h4>
                            <p class="image-teaser__copy">Die dezent gestreiften Bio-Bademäntel im geraden Kimonoschnitt mit Kapuze sind die perfekte Alternative zu Frottee oder Mikrofaser</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/backup-zur-sicherung-und-wiederherstellung-von-daten-und-partitionen_id_4d7436db-3390-54c1-926e-5bb90e8f80ef.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/NL9/w630/XpsQQABOyahlw4K4wvNL9-1.png" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Backup zur Sicherung und Wiederherstellung von Daten und Partitionen</h4>
                            <p class="image-teaser__copy">Ashampoo Backup Pro 17 erstellt sicher Backups beliebiger Daten und kompletter Betriebssysteme. Das Backup Programm arbeitet automatisch im Hintergrund und verhindert zuverlässig Datenverlust. Eine Rettungssystem stellt Daten wieder her.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/die-perfekte-beleuchtung-fuer-weihnachtsdeko-von-govee-im-wert-von-ca-500-euro_id_514e3aee-79a7-5d46-b569-5bd0f1484aaa.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/Y2M/w630/XpsgrlmMwC8udA4hHPY2M-1.jpg" width="630" height="354">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Die perfekte Beleuchtung für Weihnachtsdeko von Govee im Wert von ca. 500 Euro</h4>
                            <p class="image-teaser__copy">Eine stimmungsvolle Weihnachtsbeleuchtung zaubert ein schönes und buntes Licht in die dunkle Jahreszeit. Mit den intelligenten LED-Streifen, Lichterketten und Dekoleuchten von Govee können Sie in Haus und Garten eine perfekte Weihnachtsatmosphäre schaffen.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/attraktive-deals-aus-online-shops-jetzt-sparen_id_5764bde5-1f6c-59db-a3be-fb9b47aeee6c.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/puJ/w630/XpxYcatLCXQUMGsB0zpuJ-1.png" width="630" height="353">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Die heißesten Schnäppchen aus dem Netz</h4>
                            <p class="image-teaser__copy">Willkommen zu unserem täglichen Deal-Ticker! In der schier unendlichen Weite des Internets nach den besten Angeboten und Rabatten zu suchen, kann sich anfühlen wie die Suche nach der Nadel im Heuhaufen. Doch keine Sorge, das Schnäppchen-Team von FOCUS online nimmt Ihnen diese Aufgabe ab!</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/lieferengpaesse-medikamente_id_586628ea-7d4a-5cc9-800a-debb1912a6b4.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/W5F/w630/Xppk21SSM0h6MRFNmQW5F-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">So bleiben Sie gut versorgt</h4>
                            <p class="image-teaser__copy"></p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/gewinnen-sie-ihr-personalisiertes-sounderlebnis-mit-denon-perl_id_58bb3fb0-67ba-5510-be09-faac335854ca.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/9Gn/w630/XpsWh3xOzAOnO3EmSQ9Gn-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Gewinnen Sie Ihr personalisiertes Sounderlebnis mit Denon PerL!</h4>
                            <p class="image-teaser__copy">Exklusiv auf Focus.de haben Sie die Gelegenheit, einmal Denon PerL oder Denon PerL Pro True Wireless In-Ear-Kopfhörer zu gewinnen. Erleben Sie personalisierten Hörgenuss und erstklassige Klangqualität.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/wie-sie-ihr-unternehmen-mit-effektivem-werbeartikel-marketing-zum-erfolg-fuehren_id_67921ae5-e276-541a-a876-e7bd7a26f4e6.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/Luc/w630/Xpnoia6iXRyNnfR6IrLuc-1.jpg" width="473" height="473">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Wie Sie Ihr Unternehmen mit effektivem Werbeartikel-Marketing zum Erfolg führen</h4>
                            <p class="image-teaser__copy">In der heutigen digitalen Welt ist es von entscheidender Bedeutung, Ihr Unternehmen online sichtbar zu machen und potenzielle Kunden anzuziehen. Eine bewährte Strategie, um dieses Ziel zu erreichen, ist das Werbeartikel-Marketing.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/der-perfekte-solargenerator-fuer-die-tasche_id_6a9efb86-cb4d-5e8d-bc71-90a0849f3760.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/z3z/w630/XpsVdKuFPxt9DqNVvHz3z-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Der perfekte Solargenerator für die Tasche</h4>
                            <p class="image-teaser__copy">Einfach im Rucksack verstaut, ist die Stromversorgung- Jackery Solargenerator 300 Plus mit 288 Wh im Wert von 449€ unterwegs beim Picknick, Zelten oder bei einer Fotosafari der perfekte Begleiter.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/gewinne-den-brandneuen-ghost-max-laufschuh-von-brooks-running_id_70717648-448e-5e15-98f8-ebd0ee8ef4ff.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/t0c/w630/Xpsj9bExjxiwUxgqiet0c-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Gewinne den brandneuen Ghost MAX Laufschuh von Brooks Running</h4>
                            <p class="image-teaser__copy">Auf dich wartet ein Paar des neuen Ghost MAX von Brooks Running. Er bietet deinen Füßen MAXimale Dämpfung und MAXimalen Schutz und sorgt dafür, dass du bei jedem Schritt bequemer landest. Für besonders angenehmen Laufkomfort, der deinen Körper schont.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/wie-sie-psychische-probleme-erkennen-und-betroffene-personen-unterstuetzen-koennen_id_7108b81b-d277-5dda-b265-27d4a6b1d185.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/h6g/w630/XpoQXKuvHxjBPRxDJ3h6g-1.png" width="630" height="354">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Wie Sie psychische Probleme erkennen und betroffene Personen unterstützen können</h4>
                            <p class="image-teaser__copy">In einer Welt, die immer schneller und anspruchsvoller wird, sind psychische Probleme leider keine Seltenheit mehr. Die gute Nachricht: Wir können alle dazu beitragen, Menschen in Not zu unterstützen und die Stigmatisierung psychischer Gesundheitsprobleme zu überwinden.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/ergonomische-sitzkissen-die-ersehnte-unterstuetzung-fuer-ihren-ruecken_id_75298390-c001-5ea8-b562-ae32095a559c.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/Oiw/w630/XpciRLV6xESXF1nJqSOiw-1.jpg" width="473" height="473">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Ergonomische Sitzkissen: Die ersehnte Unterstützung für Ihren Rücken</h4>
                            <p class="image-teaser__copy">Wer lange Zeit am Schreibtisch verbringt, kennt das Problem: Rückenschmerzen, Steifheit und Unbehagen beim Sitzen. Doch es gibt Abhilfe! Mit einem orthopädischen Sitzkissen kann man diesen Beschwerden vorbeugen oder sogar lindern.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/perfekt-zubereitet-und-festlich-serviert-koestliche-weihnachten-mit-tchibo_id_79c13bab-b041-5d3d-bbff-43590ccbd272.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/neF/w630/Xpt7YL8A3AkyoF5gOUneF-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Perfekt zubereitet und festlich serviert: Köstliche Weihnachten mit Tchibo</h4>
                            <p class="image-teaser__copy">Die Weihnachtszeit hält viele Köstlichkeiten bereit. Dank hochwertigen Töpfen, praktischen Küchenhelfern und kreativer Tisch-Dekoration von Tchibo wird es garantiert ein Festmahl!</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/gewinnen-sie-eine-woche-hausbooturlaub-mit-le-boat-fuehrerscheinfrei_id_7f449a44-dd14-53b5-9bff-53ac77087779.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/Nxa/w630/XpsnI0B3zPRCJno1oPNxa-1.png" width="630" height="243">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Gewinnen Sie eine Woche Hausbooturlaub mit Le Boat – führerscheinfrei!</h4>
                            <p class="image-teaser__copy">Legen Sie mit Ihren Liebsten wahlweise auf der Mecklenburgischen Seenplatte, in Belgien, den Niederlanden oder Frankreich mit einem vollausgestatteten 2-Kabinen-Boot ab!</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/rewe-bio-besser-fuer-alle_id_81332648-d007-5a7a-98de-6c518fbed146.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/sJY/w630/Xpimj3BNWMHZ1BAEQLsJY-1.jpg" width="630" height="420">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Warum mehr Bio besser für alle ist</h4>
                            <p class="image-teaser__copy">Bio liegt im Trend – und das nicht ohne Grund: Schließlich profitiert nicht nur die Umwelt vom Griff zum Bio-Produkt im Supermarkt. Was Bio-Qualität bei REWE bedeutet und auf welche Siegel Sie beim Einkauf achten sollten, erfahren Sie hier.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/erste-hilfe-fuer-psychische-gesundheit-das-mhfa-konzept_id_84ac9876-1c0f-5c96-b20e-6ec4dd6caeff.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/tYA/w630/XpuFJBKZQmTSaYiN8utYA-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Erste Hilfe für psychische Gesundheit – das MHFA Konzept</h4>
                            <p class="image-teaser__copy"></p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/rewe-einkaufstipps-tierwohl_id_86a0935e-d7d9-55ca-9796-54ad895a3797.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/pJa/w630/XpimGIqAYOzzXp9DlJpJa-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Vier einfache Einkaufstipps für mehr Tierwohl</h4>
                            <p class="image-teaser__copy">Ob Fleisch, Milch oder Eier: Bei tierischen Produkten ist es besonders wichtig, deren Herkunft zu kennen. Hier kommen vier Tipps, wie Sie mit Ihrem Einkauf bei REWE das Tierwohl verbessern können.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/ferienvilla-portugal-silvercoast_id_928d05ca-5b91-5800-83e4-1562a970f566.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/5ms/w630/XpRu1nf6ISiYpAYquj5ms-1.png" width="630" height="355">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Traumvilla an der Silvercoast</h4>
                            <p class="image-teaser__copy">Dieses Luxury Hideaway liegt auf dem Hügel über der Burgstadt Óbidos an portugiesischen Silver Coast - mit Nähe zu Surferhotspots wie Nazare und Peniche. Der Strand bei Foz do Arelho in der Bucht von Óbidos ist rund 15 km entfernt.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/ein-multitalent-fuer-jede-hochzeit_id_953dd769-1c73-5a50-ac30-08b68186458e.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/53s/w630/XpKaAk7uvA4g4SBOI553s-1.jpg" width="630" height="453">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Ein Multitalent für jede Hochzeit</h4>
                            <p class="image-teaser__copy">Johannes Gorschinski ist Eventplaner, Eventmoderator und Sänger. Am häufigsten plant er einen der wichtigsten Tage vieler Menschen - ihre Hochzeit. Er steht dem Brautpaar immer zur Seite und unterstützt es vor und während des Events. Insbesondere multikulturelle Hochzeiten liegen ihm sehr.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/umsatzbooster-statt-visitenkarte-mehr-kundenanfragen-durch-optimierte-webseiten_id_9f28ab51-f0f2-5fee-8446-76db0b69d639.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/kbS/w630/XpjWLMvFZxRA7AUoNlkbS-1.jpg" width="630" height="419">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Umsatzbooster statt Visitenkarte: Mehr Kundenanfragen durch optimierte Webseiten</h4>
                            <p class="image-teaser__copy">In der heutigen digitalen Ära sind Webseiten nicht nur digitale Visitenkarten, sondern vielmehr ein leistungsstarkes Werkzeug, um Kunden anzuziehen, zu überzeugen und letztendlich Umsätze zu steigern.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/biblische-inhalte-neu-entdecken_id_a0f6585f-ac0a-5676-abbb-b42f7fff2c68.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/BEh/w630/XprNYtqCx62SaQUiuuBEh-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Biblische Inhalte neu entdecken</h4>
                            <p class="image-teaser__copy">Gewinnen Sie ein attraktives Buchpaket und entdecken Sie biblische Inhalte völlig neu</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/frohe-eisnacht-24x-30-einkaufsgutscheine-gratis-lieferung-von-eismann_id_a3ef3001-6938-5953-8f1e-a0de9aaebda3.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/Bek/w630/Xpsizn75v9XbdaARIfBek-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Frohe Eisnacht: 24x 30€ Einkaufsgutscheine + gratis Lieferung von eismann</h4>
                            <p class="image-teaser__copy">Was gibt es schöneres als gutes Essen mit Freunden und Familie zu genießen? eismann hat die passenden Produkte. Jetzt mitmachen und 1 von 24 eismann Einkaufsgutscheinen gewinnen.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/oral-b-io10-zahnputzerlebnis_id_ab46fb39-d951-5acb-b64a-2da4e989e534.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/PRb/w630/XpvDBGhcKOGS79otETPRb-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Die Oral-B iO10 sorgt für ein Zahnputzerlebnis wie von einem anderen Stern</h4>
                            <p class="image-teaser__copy">Die revolutionäre Oral-B iO10 mit dem smarten Gadget iOsense gewinnt nicht nur den aktuellen Testlauf von Stiftung Warentest, sondern verdient sich auch den CHIP-Innovations-Award.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/franky-tree-nachhaltige-weihnachtsbaeume-aus-holz-hochwertig-und-handgefertigt_id_ac196520-ee9c-5900-ac20-e0d3cd431745.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/GqY/w630/Xpsn6d1PJhyjt16imlGqY-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Franky Tree: Nachhaltige Weihnachtsbäume aus Holz, hochwertig und
handgefertigt</h4>
                            <p class="image-teaser__copy">Eine saubere und langlebige Alternative zum traditionellen Weihnachtsbaum - hergestellt in Deutschland mit einem hohen Anspruch an Qualität. Der stylische Baum verliert keine Nadeln, macht keinen Dreck in der Wohnung und kann jedes Jahr wiederverwendet werden.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/wie-kinder-unter-vernachlaessigung-leiden-und-wie-sie-helfen-koennen_id_ad1b7965-6cd5-5126-8fe6-167735f891d0.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/Zlb/w630/Xpq4IhbmXSJJmKQmTaZlb-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Wie Kinder unter Vernachlässigung leiden – und wie Sie helfen können</h4>
                            <p class="image-teaser__copy"></p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/starte-das-jahr-mit-livefresh-vegane-foodkur-bowls-saftkur-zu-gewinnen_id_b126673a-346e-5c0d-baff-f7ce2c7f019f.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/IGA/w630/XpslfBhbTDEdACA7SoIGA-1.png" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Starte das Jahr mit LiveFresh – vegane Foodkur, Bowls &amp; Saftkur zu gewinnen!</h4>
                            <p class="image-teaser__copy">Nutze deine Chance und gewinne mit etwas Glück die neue vegane Foodkur, die klassische 7-Tage Saftkur, ein 7er Bundle vegane Bowls oder ein Probierpaket der kaltgepressten Säfte &amp; Shots von LiveFresh.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/gewinnen-sie-den-perfekten-displex-premium-rundumschutz-fuer-das-iphone-15_id_b27cb069-8547-5f1c-92ba-a0b0f01f9553.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/gKJ/w630/XpsQoa4884Ghsh7glsgKJ-1.jpg" width="630" height="354">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Gewinnen Sie den perfekten DISPLEX® Premium-Rundumschutz für das iPhone 15</h4>
                            <p class="image-teaser__copy">WICHTIG: das neue iPhone 15 rundherum schützen!  Mit dem DISPLEX® Premium Starter Set: hochwertiges  Schutzglas und Silikonhülle, Ladekabel und Ladegerät.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/wie-ein-gutes-weininvestment-ihr-portfolio-stabilisieren-kann_id_b7b9b979-c83b-5b73-b96f-a64d5d75d1d9.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/Jl4/w630/XpNOEvc1ySB9LP5lVGJl4-1.png" width="630" height="334">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Wie ein gutes Weininvestment Ihr Portfolio stabilisieren kann?</h4>
                            <p class="image-teaser__copy">Wein ist nicht nur eine Ergänzung, sondern eine echte Alternative zu den üblichen Anlageformen. Ein professionelles Weininvestment bereichert Anleger durch attraktive Renditen und bietet darüber hinaus als greifbarer Sachwert eine spannende Zukunft.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/constructive-world-award-aldi-sued_id_b9d1ac4c-efbf-5afb-b1b5-368a532eb696.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/YkK/w630/XpgaLVoCqGXswbPCIJYkK-1.jpg" width="630" height="419">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Das waren die Highlights des Constructive World Awards 2023</h4>
                            <p class="image-teaser__copy">Geschichten und Impulse, die beeindrucken, motivieren und unsere Welt konstruktiv nach vorne bewegen: Das waren die Höhepunkte der erstmaligen Preisverleihung des Constructive World Awards in München.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/immobilie-kaufen-die-chancen-sind-besser-als-sie-denken_id_ba30144f-9ad8-5957-8fa2-e2fccbcb6f78.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/SH1/w630/XpybUrl90lGpRsN2v7SH1-1.png" width="630" height="354">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Immobilie kaufen: Die Chancen sind besser, als Sie denken</h4>
                            <p class="image-teaser__copy">Jetzt ist ein guter Zeitpunkt, um den Traum vom eigenen Zuhause zu realisieren. Denn gerade in einem hochvolatilen Markt ergeben sich immer wieder unerwartet attraktive Angebote. Wer seine Finanzierung gut vorbereitet, kann schnell handeln und aktuelle Sparchancen nutzen.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/krankenhaus-op-muell-vermeidbar-loesungen-kunstprojekt_id_bb01089a-732a-5464-8b43-d1cc17ae4a9f.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/GWo/w630/XppNDcDBgu0xv1TWdCGWo-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Bis zu 90% lassen sich vermeiden – Mölnlycke Health Care zeigt Lösungen auf</h4>
                            <p class="image-teaser__copy">In Krankenhäusern – besonders im OP – fällt eine Menge an Müll an. Bis zu 90 Prozent davon lassen sich allerdings vermeiden. Dafür bietet Mölnlycke Health Care innovative Lösungen an. Und machte den Effekt mit einem außergewöhnlichen Kunst-Projekt deutlich.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/rewe-verpackungsmuell-sparen_id_be7799d0-38e9-5e71-b715-92007f5ae68a.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/9tj/w630/XpvE9BdxfleHrkycWN9tj-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Beim Einkauf Verpackungsmüll sparen – so klappt‘s</h4>
                            <p class="image-teaser__copy">Berge von Plastik an Stränden, überquellende Hausmülltonnen, Städte, die mit dem Recycling nicht mehr hinterherkommen. Müll ist ein sichtbares Problem. Gibt es Wege aus dem Dilemma? REWE sagt ja!</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/rewe-einkauf-klima-schuetzen_id_c2435d07-1721-5a24-abb7-070026e3aa7e.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/4p2/w630/XpimqtkpCsPJGMr0Ds4p2-1.jpg" width="630" height="380">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Mit dem Einkauf das Klima schützen – so einfach geht&#039;s</h4>
                            <p class="image-teaser__copy">Hitzesommer, trockene Böden, Sturzregen – die Veränderungen im Klima sind deutlich spürbar. Die Botschaft ist längst in der Mitte der Gesellschaft angekommen: Wir müssen etwas tun. Wie Sie mit Ihrem Einkauf bei REWE einen Beitrag leisten können, erfahren Sie hier.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/die-erfolgsgeschichte-hinter-einem-der-gefragtesten-pr-managern_id_c4292510-b6b5-5318-8c61-581196972966.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/1V6/w630/Xp7k1o7U2k1Iib13wU1V6-1.jpg" width="504" height="473">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Die Erfolgsgeschichte hinter einem der gefragtesten PR-Managern</h4>
                            <p class="image-teaser__copy">PR und Öffentlichkeitsarbeit gibt es schon seit jeher. Trotzdem setzen die meisten Unternehmen nicht auf dieses Pferd. „Ein fataler Fehler“ laut Sedlmeier. Doch wie hat es ein 26-Jähriger geschafft, den PR Markt zu revolutionieren?</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/wie-komme-ich-als-handwerker-durch-die-krise-2024_id_c5809d4b-7fc2-542f-90f1-bf5c7d03b70b.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/ypT/w630/XpygsvsBl1NpXuvcFEypT-1.png" width="630" height="360">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Wie komme ich als Handwerker durch die Krise 2024?</h4>
                            <p class="image-teaser__copy">In Zeiten wirtschaftlicher Unsicherheit, wie wir sie im Jahr 2024 erleben, stehen Handwerksbetriebe vor besonders großen Herausforderungen.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/warum-hellofresh-in-oesterreich-so-beliebt-ist_id_c5f8597e-7b38-535f-86f0-68aab63f1eac.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/FD6/w630/XoybTF9cQ5hZBF2K4DFD6-1.jpg" width="630" height="419">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Warum HelloFresh in Österreich so beliebt ist</h4>
                            <p class="image-teaser__copy"></p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/rewe-einkauf-klima-schuetzen_id_c6bde0a3-3001-5d52-9f5f-47777ba9e0c1.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/NS7/w630/XpvE3Ccznni4pNHm6aNS7-1.jpg" width="630" height="380">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Mit dem Einkauf das Klima schützen – so einfach geht&#039;s</h4>
                            <p class="image-teaser__copy">Hitzesommer, trockene Böden, Sturzregen – die Veränderungen im Klima sind deutlich spürbar. Die Botschaft ist längst in der Mitte der Gesellschaft angekommen: Wir müssen etwas tun. Wie Sie mit Ihrem Einkauf bei REWE einen Beitrag leisten können, erfahren Sie hier.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/medicare-personalmanagement-personalexpertise_id_ccc2235b-f073-567d-86d1-3700b08ec522.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/t2f/w630/XpnXwiSr7rKTC0nHHat2f-1.jpg" width="630" height="457">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">MediCare Personalmanagement: Personalexpertise am Puls der Zeit</h4>
                            <p class="image-teaser__copy">Die Personalvermittlung ist eine Branche, die nicht immer den allerbesten Ruf genoss und genießt. Die Firma MediCare Personalmanagement möchte mit ihrem Konzept zeigen, dass es auch anders geht. Gerade im Bereich der Pflege ist dies sicher kein einfaches Unterfangen.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/rewe-verpackungsmuell-sparen_id_d8dfc43c-2a42-5461-911b-fc3f6c7683b8.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/TDG/w630/XpimHUYmMmu2szwrm1TDG-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Beim Einkauf Verpackungsmüll sparen – so klappt‘s</h4>
                            <p class="image-teaser__copy">Berge von Plastik an Stränden, überquellende Hausmülltonnen, Städte, die mit dem Recycling nicht mehr hinterherkommen. Müll ist ein sichtbares Problem. Gibt es Wege aus dem Dilemma? REWE sagt ja!</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/von-ahnungslos-im-business-zum-musikmanager_id_d9bc9c03-2f3d-5afb-8fa4-e7c6222f56d7.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/POe/w630/XpIs1g5tAdhXCiR8TuPOe-1.jpg" width="266" height="473">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Von ahnungslos im Business zum Musikmanager</h4>
                            <p class="image-teaser__copy">Rap ist ein fester Bestandteil in Destin &quot;Des&quot; Muntu Zolas Leben. Sein musikalisches Talent brachte ihn bereits als Vorgruppe auf die Bühne bekannter Künstler, wie Kendrick Lamar. Inzwischen widmet er sich voll und ganz dem Management seines eigenen Labels Bantu Nation.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/immunsystem-und-vitamin-d-zwei-die-zusammengehoeren_id_dccaf7b5-abd3-5521-ade8-e47451d2aaf6.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/bH8/w630/XprtnFAIh4hPAnUeilbH8-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Immunsystem und Vitamin D – zwei, die zusammengehören</h4>
                            <p class="image-teaser__copy"></p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/schlank-stilvoll-hochwertig-gewinne-eine-design-schallzahnbuerste-von-mate_id_eb25286e-4efd-55e2-8b44-3783dfa153f2.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/NCc/w630/XpslZQQ6S576zH7j8HNCc-1.png" width="630" height="354">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Schlank, stilvoll, hochwertig - Gewinne eine Design-Schallzahnbürste von mate</h4>
                            <p class="image-teaser__copy">Die mate Schallzahnbürste ist ein Gegenentwurf zu klobigen Elektrozahnbürsten aus Plastik. mate ist aus robustem Aluminium gefertigt, überzeugt mit superschlankem Design und bis zu 8 Wochen Akkulaufzeit. Hol’ Dir Stil und Funktionalität ins Bad.</p>
                        </div>
                    </a>
                </article>
                            <article class="image-teaser">
                    <a href="https://article.focus.de/gewinnen-sie-eines-von-zwei-premium-dashcam-bundles-vom-marktfuehrer-nextbase_id_fe015cef-c724-57f4-8e5f-80683545db13.html" class="image-teaser__link">
                        <div class="image-teaser__image-wrapper">
                                                            <img src="/media/ilf/w630/Xps0gnEWWot5Up2ZETilf-1.jpg" width="630" height="329">
                                                    </div>
                        <div class="image-teaser__text-wrapper">
                            <h4 class="image-teaser__headline">Gewinnen Sie eines von zwei Premium-Dashcam-Bundles vom Marktführer Nextbase</h4>
                            <p class="image-teaser__copy">Die preisgekrönte Nextbase 622GW begeistert mit 4K-Bildqualität, Bluetooth 4.2, WLAN und dem Click&amp;Go PROTM-Montagesystem für eine einfache Anbringung.</p>
                        </div>
                    </a>
                </article>
                    
        <p>
            Weitere Infos finden Sie <a href="https://www.burda-forward.de/advertising/goodvertising/ad-manager/">hier</a>.
        </p>
    </div>
</div>

<!-- imageTracker -->				</div>
				<div class="footer"></div>
			</div>
			</div>
		<!-- Topic-ID: 22535 | St-ID:  | Last CALL: Heute, 01.02.2024 | 00:33 | oid:  | eid: 22535 -->
	</section>
	
	</main><!-- END LIMITED WIDTH -->
</div><footer id="footerv2-frame">
    <div id="footerv2-spacer">
        <div></div>
    </div>
    <div id="footerv2-subframe">
        <div id="footerv3">
            <div class="container_12 clearfix"><div class="generic">
                    <div class="left">
                        <a class="nav1" href="https://focus-abo.de/focus-zwischenseite-auswahl/?mag=focus&hnr=extern.forwardnews.focus.footer" title="Focus-Heft-Abo">Focus-Heft-Abo</a>&nbsp;&nbsp;&nbsp;
                            <a class="nav1" href="https://www.focus.de/service/rss/immer-top-informiert-rss-auf-focus-online_aid_13713.html" title="RSS">RSS</a>&nbsp;&nbsp;&nbsp;
                            <a class="nav1" href="https://www.focus.de/newsletters/" title="Newsletter">Newsletter</a>&nbsp;&nbsp;&nbsp;
                            <a class="nav1" href="https://www.focus.de/service/archiv/" title="Archiv">Archiv</a>&nbsp;&nbsp;&nbsp;
                            <a href="https://www.focus.de/service/inhalt/" title="Sitemap">Sitemap</a>&nbsp;&nbsp;&nbsp;
                              
                        <a href="https://www.focus.de/intern/archiv/kontakt-so-erreichen-sie-uns_aid_751155.html" title="Kontakt">Kontakt</a>&nbsp;&nbsp;&nbsp;
                        <a rel="nofollow" href="https://www.focus.de/intern/datenschutzerklaerung-datenschutzerklaerung-fuer-die-webseite-www-focus-de_id_6846331.html" title="Datenschutz" class="externalLink">Datenschutzerklärung</a>&nbsp;&nbsp;&nbsp;
                        <span style="cursor: pointer;" onclick="window._sp_.gdpr.loadPrivacyManagerModal(248910);" title="Datenschutzeinstellung">Datenschutzeinstellung</span>&nbsp;&nbsp;&nbsp;
                        <a rel="nofollow" href="https://www.focus.de/intern/agb-der-focus-online-group-gmbh-agb-focus-online-group-gmbh_id_10064693.html" title="AGB" class="externalLink">AGB</a>&nbsp;&nbsp;&nbsp;
                        <a href="https://www.focus.de/intern/impressum/" title="Impressum"><b>Impressum</b></a>&nbsp;&nbsp;&nbsp;
                        <a rel="nofollow" href="https://www.burda-forward.de/advertising/preise-werbeformen/" title="Inserieren" class="externalLink">Inserieren</a>&nbsp;&nbsp;&nbsp;
                        </div>
                    <div class="right"><div id="footsearch">
                                <form action="https://www.focus.de/suche/" class="search">
                                    <input type="text" autocomplete="off" class="text ac_input" name="searchItem" placeholder="Suchbegriff">
                                    <input type="submit" class="submit" aria-label="auf Focus Online suchen" value="">
                                </form>
                            </div>
                            
                            <script >
						window._folmq.push(function() {try {TFT.Ext.FOL.Form.SearchNew.init('#footerv3');}catch(oError) {}});</script>
						</div><div class="clear"></div>
                </div><div class="partners">
                        <strong>Weitere Online-Angebote sowie Partner der BurdaForward GmbH:</strong><br /><br />
                        <a href="https://www.cinema.de/" class="nav1 externalLink" title="CINEMA" target="_blank">CINEMA</a>&nbsp;&nbsp;&nbsp;
                        <a href="http://www.fitforfun.de/" class="nav1 externalLink" title="FIT FOR FUN" target="_blank">FIT FOR FUN</a>&nbsp;&nbsp;&nbsp;
                        <a href="https://www.patientus.de/" class="nav1 externalLink" title="Patientus" target="_blank">Patientus</a>&nbsp;&nbsp;&nbsp;
                        <a href="https://www.tvspielfilm.de/" class="nav1 externalLink" title="TV SPIELFILM" target="_blank">TV SPIELFILM</a>&nbsp;&nbsp;&nbsp;
                        <a href="http://www.playboy.de" class="nav1 externalLink" title="Playboy" target="_blank">Playboy</a>&nbsp;&nbsp;&nbsp;
                        <a href="http://www.bunte.de" class="nav1 externalLink" title="BUNTE" target="_blank">BUNTE</a>&nbsp;&nbsp;&nbsp;
                        <a href="http://www.haus.de" class="nav1 externalLink" title="Haus+Garten" target="_blank">Haus+Garten</a>&nbsp;&nbsp;&nbsp;    
                        <a href="http://www.elle.de" class="nav1 externalLink" title="ELLE" target="_blank">ELLE</a>&nbsp;&nbsp;&nbsp;
                        <a href="http://www.freundin.de#nmcmpid=001t006r007m001dp002" class="nav1 externalLink" title="freundin" target="_blank">freundin</a>&nbsp;&nbsp;&nbsp;
                        <a href="http://www.mein-schoener-garten.de" class="nav1 externalLink" title="Mein schöner Garten" target="_blank">Mein schöner Garten</a>&nbsp;&nbsp;&nbsp;
                        <a href="http://www.super-illu.de" class="nav1 externalLink" title="Super Illu" target="_blank">Super Illu</a>&nbsp;&nbsp;&nbsp;
                        <a href="http://www.guter-rat.de" class="nav1 externalLink" title="Guter Rat" target="_blank">Guter Rat</a>&nbsp;&nbsp;&nbsp;
                        <a href="http://www.holidaycheck.de" class="nav1 externalLink" title="HolidayCheck" target="_blank">HolidayCheck</a>&nbsp;&nbsp;&nbsp;
                        <a href="http://www.jameda.de/" class="nav1 externalLink" title="jameda" target="_blank">jameda</a>&nbsp;&nbsp;&nbsp;
                        <a href="http://www.freizeitrevue.de/" class="nav1 externalLink" title="Freizeitrevue" target="_blank">Freizeitrevue</a>&nbsp;&nbsp;&nbsp;
                        <a href="http://www.lisa.de/" class="nav1 externalLink" title="Lisa" target="_blank">Lisa</a>&nbsp;&nbsp;&nbsp;
                        <a href="https://www.brandsyoulove.de/" class="nav1 externalLink" title="brands you love" target="_blank">brands you love</a>&nbsp;&nbsp;&nbsp;
                        <a href="http://www.burdastyle.de/" class="nav1 externalLink" title="Burdastyle" target="_blank">Burdastyle</a>&nbsp;&nbsp;&nbsp;
                        <a href="http://www.instyle.de/" class="nav1 externalLink" title="InStyle" target="_blank">InStyle</a>&nbsp;&nbsp;&nbsp;
                        <a href="http://www.computeruniverse.net" class="nav1 externalLink" title="Computeruniverse" target="_blank">Computeruniverse</a>&nbsp;&nbsp;&nbsp;
                        <a href="http://www.cyberport.de" class="nav1 externalLink" title="Cyberport" target="_blank">Cyberport</a>&nbsp;&nbsp;&nbsp;
                        <a href="http://www.daskochrezept.de/" class="nav1 externalLink" title="Das Kochrezept" target="_blank">Das&nbsp;Kochrezept</a>&nbsp;&nbsp;&nbsp;
                        <a href="http://www.mietwagen-check.de/" class="nav1 externalLink" title="Mietwagen Check" target="_blank">Mietwagen Check</a>&nbsp;&nbsp;&nbsp;
                        <a href="https://www.tvtoday.de/" class="nav1 externalLink" title="TV Today" target="_blank">TV Today</a>&nbsp;&nbsp;&nbsp;
                        <a href="http://www.zoover.de/" class="nav1 externalLink" title="zoover" target="_blank">zoover</a>&nbsp;&nbsp;&nbsp;
                        <div class="network-thumbs">
                            <strong>Weitere BurdaForward Angebote:</strong>
                            <ul>
                                <li class="chip">
                                    <a href="https://www.chip.de/" title="Chip" target="_blank">Chip</a>
                                </li>
                                <li class="weatherchannel">
                                    <a href="https://weather.com/de-DE" title="The Weather Channel" target="_blank">The Weather Channel</a>
                                </li>
                                <li class="bestcheck">
                                    <a href="https://www.bestcheck.de/" title="Preisvergleich BestCheck" target="_blank">Preisvergleich BestCheck</a>
                                </li>
                                <li class="netmoms">
                                    <a href="https://www.netmoms.de/" title="netmoms" target="_blank">netmoms</a>
                                </li>
                                <li class="f100">
                                    <a href="https://www.finanzen100.de/" title="Finanzen100" target="_blank">Finanzen100</a>
                                </li>
                                <li class="cds">
                                    <a href="https://www.cardscout.de/" title="Cardscout" target="_blank">Cardscout</a>
                                </li>
                                <li class="efahrer">
                                    <a href="https://efahrer.chip.de/" title="EFAHRER" target="_blank">EFAHRER</a>
                                </li>
                                <div class="clear"></div>
                            </ul>
                        </div>
                    </div>
            </div><div class="bottom"><div class="container_12 clearfix"><div class="small-logo">
                        <a href="https://www.focus.de/" title="FOCUS online Nachrichten">
                            <svg><use xlink:href="#fol_logo_ohne_outline"></use></svg>
                        </a>
                    </div>
                    <span class="copy">&copy; BurdaForward GmbH 2024</span>
                </div></div></div></div></footer><script type="text/javascript">
    	try {
        	
    	} catch(err) {
			
		}
        window.TFT.Ext.loadAsynchOwnJs("https://www.focus.de/resources/ts28445138/ver1-0/js/fol.min.js");
    					

    				var TftExtFolImageDaemonUrl = "https://static.focus.de";

    				
    				window._folmq.push(['TFT.Ext.FOL.browserDetect.init']);
if (document.getElementsByClassName('OUTBRAIN').length > 0) {
                        try {
                            __tcfapi('addEventListener', 2, function (tcData, success) {
                                if (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete') {
                                    __tcfapi('removeEventListener', 2, function (success) {}, tcData.listenerId);
                                    (function(d, a){
                                        var s = d.createElement(a),x = d.getElementsByTagName(a)[0];s.async = true;s.src = '//widgets.outbrain.com/outbrain.js';x.parentNode.insertBefore(s, x);
                                    })(document, 'script');
                                }
                            });
                        } catch (e) {};
                    };
window._folmq.push(function() {$(document).ready(function(){TFT.Ext.FOL.init();});});</script>
    <script type="text/javascript">
             if (typeof(bNewsHubBestCheckInclude) != "undefined" && bNewsHubBestCheckInclude) {
	             (function(d, a){
	                 var s = d.createElement(a),x = d.getElementsByTagName(a)[0];s.async = true;s.src = '//pn.bestcheck.de/embed/bc100.js';x.parentNode.insertBefore(s, x);
	             })(document, 'script');
             }
         </script>
	<script src="https://static.cleverpush.com/channel/loader/6ST4phB33NWhSfWrC.js" async></script>
    </body>            <script src="/build/article-js.c1a0ad5b.js" defer></script>
    <script type="application/ld+json">[]</script><!-- ci20150313-1000, stats20140219-1630, ads20140217-1700, prop20130923-0900, 2024-02-01T00:33:22+01:00, unknown -->
</html>
