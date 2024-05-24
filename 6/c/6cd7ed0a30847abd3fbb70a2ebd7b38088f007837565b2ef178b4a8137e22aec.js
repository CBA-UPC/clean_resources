import{html as l}from"../vendors/lit-html/lit-html.js";import{ifDefined as o}from"../vendors/lit-html/directives/if-defined.js";import{tplIcon as m}from"./components/icon.tpl.js";import{isFunction as p}from"../base/croco.js";import{repeat}from"../vendors/lit-html/directives/repeat.js";import{tplCta as u}from"./components/cta.tpl.js";export const tplNotification=t=>{const i=t.icon?.name||"info";const icon={name:i,className:`l-hmargin--small no-flex--shrink ${t.icon?.className||"bg-transparent text-white"}`,size:"large"};return l`
        <section class="js-notif notification l-relative l-overflow-hidden bg-primary pointer-auto above l-fill-width l-vmargin--small" data-notification-index="${t.id}"
            @mouseenter="${o(p(t.pause)?t.pause:undefined)}"
            @mouseleave="${o(p(t.resume)?t.resume:undefined)}"
            @touchstart="${o(p(t.pause)?e=>t.pause(e,3e3):undefined)}"
            @touchend="${o(p(t.resume)?t.resume:undefined)}"
        >
            ${t.timeout&&t.ctaList?.length?l`<div class="progress-wrapper l-absolute l-fill-width">
                <div class="progress bg-white l-fill ${t.isPaused?" animation-paused":""}"
                    style="--notification-timeout: ${t.timeout}ms"
                ></div>
            </div>`:""}
            <div class="flex flex--align-start font-medium text-white">
                ${i!=="no-icon"?l`<div class="no-flex--shrink l-hmargin--small" style="margin-top: 2px;">${m(icon)}</div>`:null}

                <div class="flex flex--col flex--basis-full">
                    ${t.title?l`<p class="fw-bold ${t.text?"l-vmargin--small":""}">${t.title}</p>`:null}
                    ${t.text?l`<p>${t.text}</p>`:null}
                </div>

                <div class="l-padding-around">
                    <a @click="${t.close}" class="js-notification-close l-absolute l-corner" style="top: 20px">
                        ${m({name:"close",style:"font-size: 3.5rem",source:"critical"})}
                    </a>
                </div>
            </div>

            ${t.ctaList?.length?l`
                <div class="cta-container font-medium flex flex--justify-end">
                    ${repeat(t.ctaList,t=>t,u)}
                </div>
            `:""}
        </section>
    `};