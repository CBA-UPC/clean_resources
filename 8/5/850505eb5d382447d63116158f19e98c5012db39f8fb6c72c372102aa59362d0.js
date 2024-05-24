import{tplIcon as C}from"./components/icon.tpl.js";import{html as N}from"../vendors/lit-html/lit-html.js";import{tplImage as P}from"./picture.tpl.js";const m=(className,icon,t)=>N`
    <button class="pointer-auto ${className}" @click="${t}">
        ${C(icon)}
    </button>`;export const tplTimeline=(currentTime,t,i,l)=>N`
    <div class="static-video--time flex flex--justify-start l-relative">${currentTime}</div>
    <div class="flex flex--basis-full flex--align-center" @click="${l}">
        <div class="static-video--total-timeline flex l-fill-width">
            <div class="static-video--elapsed-timeline bg-primary bg-important l-fill-height l-fill-width" style="transform: scale(${i}, 1)"></div>
        </div>
    </div>
    <div class="static-video--time flex flex--justify-start l-relative">${t}</div>`;export const tplControls=({isBackground:t,isAutoplaySound:i,onPlayClick:l,onMuteClick:o,onFullscreenClick:v,showFullScreenBtn:p})=>N`
    ${i?m("static-video-btn floating-btn l-hmargin--large",{name:"sound",className:"icon-mute"},o):""}
    ${m("static-video-btn floating-btn",{name:"play-pause",className:"icon-play"},l)}
    ${!t?N`
        <div class="js-video-timeline flex flex--basis-full"></div>
        ${m("static-video-btn",{name:"sound",className:"icon-mute"},o)}
        ${p?m("static-video-btn",{name:"expand",className:"icon-fullscreen"},v):""}
    `:""}
`;export const tplVideo=({desktopUrl:t,mobileUrl:i,background,autoplay,autoplaySound:l,alt,wrapperClassname:o="",videoClassname:v="",loop,type="video/mp4",desktopProvider:p,mobileProvider:m,picture:u,fitHeight:$})=>{const g=!!background;const h=g||!!autoplay;const k=h&&!!l;const j=g?"is-background":"is-classic";return t||i?N`
    <div
        class="js-static-video-wrapper static-video-wrapper is-paused l-overflow-hidden l-relative cursor-pointer ${j} ${o} ${h?"is-muted":""}"
        data-src-desktop="${t}"
        data-src-mobile="${i?i:""}"
        data-type="${type}"
        data-autoplay="${autoplay}"
        data-autoplay-sound="${k}"
        data-background="${g}"
        data-desktop-provider="${p}"
        data-mobile-provider="${m}"
    >
        <div class="js-static-video-container l-fill-height l-fill-width">
            <video
                playsinline="true"
                ?muted="${h}"
                ?autoplay="${h}"
                ?loop="${!!loop}"
                class="js-static-video l-block ${v}"
                width="100%"
                height="${$?"100%":"auto"}"
            ></video>
        </div>

        ${g?N`<div class="js-video-play-pause l-overlay"></div>`:""}
        <div class="js-video-controls static-video-controls text-white flex l-absolute ${!k?"flex--space-between":""} flex--align-center"></div>

        <div class="js-video-poster l-overlay poster">
            ${u?P({alt:alt,width:"100%",height:$?"100%":"auto",className:"img-cover img-cover--top l-block",...u}):""}
            <div class="btn-big-play l-overlay flex flex--justify-center flex--align-center text-white">
                ${C({name:"play-pause"})}
            </div>
        </div>

        <div class="static-video-loader l-overlay flex flex--justify-center flex--align-center">
            <svg class="loader-icon">
                <circle class="loader-circle" cx="50" cy="50" r="20" fill="none" stroke-width="5"
                    stroke-miterlimit="10"></circle>
            </svg>
        </div>
   </div>
    `:""};