import{i as t,P as n,a as i,g as o,p as e,b as s}from"./pushowl-bootstrap-a8c1834f.js";class l{constructor(t){let n=document.querySelector("body");this.config=t,this.container=n,this.node=null,this.state={title:null,buttonText:null,buttonListener:null},this.maximize=!0,this.rendered=!1}toggleFocusableElement(t,n){t.setAttribute("aria-hidden",!n),t.setAttribute("tabindex",n?0:-1)}init(){this.node=this._createNode(),this.container.appendChild(this.node),t()&&this.node.setAttribute("dir","rtl"),this.toast=this.node.querySelector(".pushowl-simple-toast"),this.toastContent=this.node.querySelector(".pushowl-simple-toast__content"),this.title=this.node.querySelector(".pushowl-simple-toast__title"),this.yesButton=this.node.querySelector(".pushowl-simple-toast__yes-button");let i=this.node.querySelectorAll(".action-button");this.bellButton=this.node.querySelector(".js-pushowl-bell-button"),this.closeButton=this.node.querySelector(".js-pushowl-close-button"),this.contentWrap=this.node.querySelector(".js-pushowl-widget-content"),this.subscribeButton=this.node.querySelector(".js-subscribe-button"),Array.from(i).forEach((t=>{t.addEventListener(n.EVENTS.CLICK,()}))}render(){this.rendered||(this.init(),this.rendered=!0),this.title.textContent=this.state.title,this.state.buttonText?(this.yesButton.textContent=this.state.buttonText,this.yesButton.style.display="block",this.yesButton.addEventListener("click",()):this.yesButton.style.display="none"}emove(){var t;this.rendered=!1,null===(t=document.querySelector(".pushowl-widget-node"))||void 0===t||t.remove()}}class a extends l{constructor(t){super(t)}_toggleState(){let t=this.maximize;if(this.maximize=!this.maximize,this.toggleFocusableElement(this.bellButton,!t),this.toggleFocusableElement(this.closeButton,t),this.toggleFocusableElement(this.subscribeButton,t),this.bellButton.setAttribute("aria-expanded",String(t)),this.closeButton.setAttribute("aria-expanded",String(t)),t){this.toastContent.style.display="block",this.toast.classList.add(n.WIDGET_CLASSES.MAXIMIZE);(new i).config.optin_report_enabled&&window.poAnalytics.track("FlyoutWidgetMobileOpened")}else this.toastContent.style.display="none",this.toast.classList.remove(n.WIDGET_CLASSES.MAXIMIZE);setTimeout((()=>{(t?this.subscribeButton:this.bellButton).focus()}),1e3)}_createNode(){var t,n,i,s,l;let a,p=this.config.mobile,r=this.config.color,d=(null===(n=null===(t=this.state)||void 0===t?void 0:t.theme)||void 0===n?void 0:n.primaryColor)||"white",u=(null===(s=null===(i=this.state)||void 0===i?void 0:i.theme)||void 0===s?void 0:s.secondaryColor)||r,h=(null===(l=this.state.position)||void 0===l?void 0:l.mobile)||"bottom-left",{top:c,bottom:m,left:b,right:w,isCustomConfig:g}=o({position:h,device:"mobile",customConfig:p,isExpanded:!1});return g&&(h="bottom-left"),a=`\n      <div class="pushowl-widget-node pushowl-widget-node--mobile">\n        <style>\n          .action-button{\n              cursor: pointer;\n              padding: initial;\n              min-height: initial;\n          }\n          .pushowl-simple-toast {\n              position: fixed;\n              /*\n              Since custom config set through Owly can have different values for the bottom.\n              We set the bottom to 8px if it has value in the expanded state\n              */\n              bottom: ${m?"8px":""};\n              top: ${c};\n              left: 8px;\n              right: 8px;\n              z-index: 2147483647;\n              box-sizing: border-box;\n          }\n          .pushowl-simple-toast * {\n              -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;\n          }\n\n          .pushowl-simple-toast button {\n            margin: 0 !important;\n            text-transform: none !important;\n            min-width: auto !important;\n            box-shadow: none !important;\n          }\n          \n          .pushowl-bell-button {\n              position: absolute;\n              top: ${c?g?c:"0px":null};\n              bottom: ${m||null};\n              left: ${b||null};\n              right: ${w||null};\n              z-index: 2147483647;\n              width: ${p.diameter}px;\n              height: ${p.diameter}px;\n              box-sizing: border-box;\n              display: flex;\n              align-items: center;\n              justify-content: center;\n              border-radius: 12px;\n              color: ${d};\n              background: ${u} !important;\n              box-shadow: 2px 2px 8px 0 rgba(0,0,0,0.35) !important;\n              border: 0 !important;\n              transition: all 1s ease-in;\n          }\n          .pushowl-close-button {\n              padding: 6px;\n              line-height: 12px;\n              border: 0;\n              background: none;\n              \n              /* bring it just above the bell icon */\n              position: relative;\n              top: -4px;\n              right: -2px;\n              width: auto;\n              height: auto;\n          }\n          .pushowl-close-button #ic_close{\n              fill: ${d};\n          }\n          .pushowl-widget-background {\n              position: absolute;\n              top: ${c?g?c:"0px":null};\n              bottom: ${m||null};\n              left: ${b||null};\n              right: ${w||null};\n              z-index: 2147483646;\n              width: ${p.diameter}px;\n              height: ${p.diameter}px;\n              box-sizing: border-box;\n              border-radius: 12px;\n              background: ${u} !important;\n              transition: all 1s ease;\n          }\n          .pushowl-simple-toast__content {\n              box-shadow: 2px 2px 8px 0 rgba(0,0,0,0.35);\n              background: ${u};\n              font-family: Roboto, sans-serif;\n              padding: 13px;\n              opacity: 0;\n              transition: opacity 0.5s ease;\n              z-index: 2147483647;\n              visibility: collapse;\n              border-radius: 12px;\n              display: none;\n          }\n          .pushowl-content-upper-section {\n              display: flex;\n              justify-content: space-between;\n          }\n          .pushowl-simple-toast__title {\n              color: ${d};\n              font-size: 14px;\n              line-height: 14px;\n              padding: 5px;\n              margin-right: 16px;\n          }\n          .pushowl-simple-toast__yes-button-container {\n              margin-top: 20px;\n              display: flex;\n              justify-content: flex-end;\n              width: 100%;\n          }\n          .pushowl-simple-toast__yes-button {\n              font-size: 13px;\n              line-height: 13px;\n              color: ${u};\n              min-width: 100px;\n              cursor: pointer;\n              text-align: center;\n              max-width: 150px;\n              padding: 12px;\n              background-color: ${d};\n              letter-spacing: .3px;\n              border-radius: 4px;\n              text-transform: uppercase;\n              border: 0;\n              height: auto;\n              width: auto;\n          }\n          /*Minimize to Maximize Transition*/\n          .maximize .pushowl-bell-button {\n              animation: fade-out-animation 0.3s ease-in-out forwards\n          }\n          .maximize .pushowl-widget-background {\n              animation: bg-expand-animation 0.5s ease-in-out forwards, fade-out-animation 0.1s 0.8s ease-in-out forwards;\n          }\n          .maximize .pushowl-simple-toast__content {\n              animation: fade-in-animation 0.3s 0.5s ease-in-out forwards;\n          }\n          /* Maximize to Minimize Transition*/\n          .minimize .pushowl-simple-toast__content {\n              animation: fade-out-animation 0.3s ease-in-out forwards\n          }\n          .minimize .pushowl-widget-background {\n              animation: fade-in-animation 0.3s ease-in-out forwards;\n              animation-direction: reverse;\n          }\n          /* Disable animations */\n          @media (prefers-reduced-motion: reduce) {\n            .maximize .pushowl-bell-button,\n            .maximize .pushowl-widget-background,\n            .maximize .pushowl-simple-toast__content,\n            .minimize .pushowl-simple-toast__content,\n            .minimize .pushowl-widget-background {\n              animation-duration: 0s;\n              animation-delay: 0s;\n            }\n          }\n          @keyframes fade-out-animation {\n              0% {\n                  opacity: 1;\n                  visibility: visible;\n              }\n              100% {\n                  opacity: 0;\n                  visibility: collapse;\n              }\n          }\n          @keyframes fade-in-animation {\n              0% {\n                  opacity: 0;\n                  visibility: collapse;\n              }\n              100% {\n                  opacity: 1;\n                  visibility: visible;\n              }\n          }\n          @keyframes bg-expand-animation {\n              to {\n                  /*\n                   Setting the final position based on the position.\n                   For bottom-left it will set bottom:0; left:0;\n                   FIXME: this can be removed when bell is aligned to its container\n                  */\n                    ${h.split("-").map(().join(";")};\n                  width: 100%;\n                  height: 100%;\n                  z-index: 0;\n              }\n          }\n          .pushowl-widget-node svg {\n              width: 14px;\n              height: 18px;\n              vertical-align: baseline;\n              transition: auto;\n          }\n        </style>\n        <div class="pushowl-simple-toast">\n          <button\n            class="js-pushowl-bell-button pushowl-bell-button bell-button action-button"\n            aria-label="Open"\n            aria-expanded="false"\n            aria-controls="pushowl-simple-toast-content"\n          >\n            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" fill="none" class="bell-icon" viewBox="0 0 18 22">\n              <path fill=${d} d="M8.533 0c-.589 0-1.066.478-1.066 1.067v1.066c0 .022 0 .044.002.066A8.535 8.535 0 0 0 0 10.667v5.584c0 1.04.843 1.882 1.882 1.882h13.302c1.04 0 1.882-.843 1.882-1.882v-5.585A8.535 8.535 0 0 0 9.598 2.2l.002-.066V1.067C9.6.477 9.122 0 8.533 0ZM8.533 21.333a2.133 2.133 0 0 0 2.133-2.133H6.4c0 1.178.955 2.133 2.133 2.133Z"/>\n            </svg>\n          </button>\n          <div class="pushowl-widget-background"></div>\n          <div\n            id="js-pushowl-simple-toast-content"\n            class="pushowl-simple-toast__content"\n          >\n            <div class="pushowl-content-upper-section">\n              <div class="pushowl-simple-toast__title"></div>\n              <button\n                class="js-pushowl-close-button action-button pushowl-close-button"\n                aria-label="Close"\n                tabindex="-1"\n                aria-hidden="true"\n                aria-expanded="false"\n                aria-controls="pushowl-simple-toast-content"\n              >\n                <svg\n                  width="12px"\n                  height="12px"\n                  viewBox="0 0 12 12"\n                  version="1.1"\n                  xmlns="http://www.w3.org/2000/svg"\n                  xmlns:xlink="http://www.w3.org/1999/xlink"\n                >\n                  <g\n                    stroke="none"\n                    stroke-width="1"\n                    fill="none"\n                    fill-rule="evenodd"\n                  >\n                    <g id="ic_close" transform="translate(-5.000000, -5.000000)">\n                      <g>\n                        <polygon\n                          points="17 6.20857143 15.7914286 5 11 9.79142857 6.20857143 5 5 6.20857143 9.79142857 11 5 15.7914286 6.20857143 17 11 12.2085714 15.7914286 17 17 15.7914286 12.2085714 11"\n                        ></polygon>\n                      </g>\n                    </g>\n                  </g>\n                </svg>\n              </button>\n            </div>\n            <div class="pushowl-simple-toast__yes-button-container">\n              <button\n                class="js-subscribe-button  pushowl-simple-toast__yes-button"\n                tabindex="-1"\n              ></button>\n            </div>\n          </div>\n        </div>\n      </div>\n    `,e(a)}}class p extends l{toggleState(){var t;const n=new i;var e=this.maximize;this.maximize=!this.maximize,this.toast.classList[e?"add":"remove"]("is-maximized"),e&&n.config.optin_report_enabled&&window.poAnalytics.track("FlyoutWidgetDesktopOpened");let s=this.config.desktop;const l=(null===(t=this.state.position)||void 0===t?void 0:t.default)||"bottom-left";let{left:a,right:p}=o({position:l,device:"desktop",customConfig:s,isExpanded:e});this.toast.style.left=a,this.toast.style.right=p,this.toggleFocusableElement(this.bellButton,!e),this.toggleFocusableElement(this.closeButton,e),this.toggleFocusableElement(this.subscribeButton,e),this.bellButton.setAttribute("aria-expanded",String(e)),this.closeButton.setAttribute("aria-expanded",String(e)),this.contentWrap.setAttribute("aria-hidden",String(!e)),setTimeout((()=>{this.closeButton.style.opacity=e?"1":"0",this.bellButton.style.opacity=e?"0":"1",(e?this.title:this.bellButton).focus()}),400)}_createNode(){var t,n,i,s,l;let a=this.config.desktop,p=this.config.color;const r=(null===(t=this.state.position)||void 0===t?void 0:t.default)||"bottom-left";let{top:d,bottom:u,left:h,right:c}=o({position:r,device:"desktop",customConfig:a,isExpanded:!1}),m=(null===(i=null===(n=this.state)||void 0===n?void 0:n.theme)||void 0===i?void 0:i.primaryColor)||"white",b=(null===(l=null===(s=this.state)||void 0===s?void 0:s.theme)||void 0===l?void 0:l.secondaryColor)||p;const w=`\n      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" fill="none" class="bell-icon">\n        <path fill="${m}" d="M8.533 0c-.589 0-1.066.478-1.066 1.067v1.066c0 .022 0 .044.002.066A8.535 8.535 0 0 0 0 10.667v5.584c0 1.04.843 1.882 1.882 1.882h13.302c1.04 0 1.882-.843 1.882-1.882v-5.585A8.535 8.535 0 0 0 9.598 2.2l.002-.066V1.067C9.6.477 9.122 0 8.533 0ZM8.533 21.333a2.133 2.133 0 0 0 2.133-2.133H6.4c0 1.178.955 2.133 2.133 2.133Z"/>\n      </svg>\n    `;let g;return g=`<div class="pushowl-widget-node pushowl-widget-node--desktop">\n    <style>    \n        .pushowl-simple-toast {\n            z-index: 2147483646;\n            top:${d};\n            bottom: ${u};\n            left: ${h};\n            right: ${c};\n            position: fixed;\n            height: ${a.diameter}px;\n            box-sizing: border-box;\n            background: ${b};\n            font-family: Roboto, sans-serif;\n            display: flex;\n            align-items: center;\n            box-shadow: 2px 2px 8px 0 rgba(0,0,0,0.35);\n            max-width: ${a.diameter}px;\n            transition: max-width 0.8s, left 0.6s;\n            border-radius: 12px;\n            overflow: hidden;\n        }\n\n        .pushowl-simple-toast button {\n          margin: 0 !important;\n          text-transform: none !important;\n          min-width: auto !important;\n          box-shadow: none !important;\n        }\n        \n        .is-maximized.pushowl-simple-toast {\n            max-width: 568px;\n        }\n        .is-maximized .pushowl-simple-toast__content{            \n            margin-left: 0;\n        }\n        .is-maximized .pushowl-simple-toast__title-container .bell-icon {\n          opacity: 1;\n        }\n        .pushowl-simple-toast__content {\n            display: flex;\n            align-items: center;\n            max-width: 0;\n            justify-content: space-between;\n            transition: max-width 0.8s;\n        }\n        .is-maximized .pushowl-simple-toast__content{\n          max-width: 524px;\n        }\n        .pushowl-simple-toast__title {\n            width: 282px;\n            color: ${m}; \n            font-size: 14px; \n            line-height: 14px;\n            padding-left: 8px;\n            opacity: 0;\n        }\n        .is-maximized .pushowl-simple-toast__title {         \n          opacity: 1;\n          transition: 0.25s opacity;\n        }\n        .pushowl-simple-toast__title-container{\n            display: flex;\n            align-items: center;\n            padding-left: 25px; \n            padding-right: 25px;\n        }\n        .pushowl-simple-toast__yes-button {\n            font-size: 14px;\n            line-height: 14px;\n            color: ${b};\n            background-color:${m} !important;\n            min-width: 100px;\n            cursor: pointer;\n            padding-right: 25px;\n            max-width: 150px;\n            letter-spacing: .3px;\n            text-transform: uppercase;\n            font-weight: 600;\n            border: 0;\n            flex-shrink: 0;\n            padding: 12px;\n            border-radius: 12px;\n            height: auto;\n            width: auto;\n        }\n        .pushowl-simple-toast__yes-button:hover{\n          color: ${b} !important;\n          background-color:${m} !important;\n        }\n\n        .pushowl-simple-toast__action-buttons {\n            height: 100%;\n        }\n        \n        .pushowl-simple-toast__action-buttons button {\n            padding: initial;\n            width: ${a.diameter}px;\n            height: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            transition: opacity 0.3s;\n            border: 0 !important;\n            cursor: pointer !important;\n            will-change: opacity;\n            border-radius: 12px !important;\n        }\n        .pushowl-simple-toast__action-buttons .pushowl-bell-button {\n            background-color: ${b};\n            opacity: 1;\n            border-radius: 12px !important;\n            padding: 0 !important;\n        }\n        .pushowl-simple-toast__title-container .bell-icon {\n          flex-shrink: 0;\n          opacity: 0;\n          transition: 0.25s opacity;\n        }\n        .pushowl-simple-toast__action-buttons .pushowl-close-button {\n            position: absolute;\n            font-size: 16px;\n            line-height: 16px !important;\n            color: ${m};\n            background-color: ${b};\n            opacity: 0;\n        }\n        \n        .pushowl-simple-toast__action-buttons svg {\n            width: 14px;\n            height: 18px;\n            vertical-align: baseline;\n            transition: auto;\n        }\n        \n        .pushowl-bell-button svg{\n          width: 18px;\n          height: 20px;\n        }\n        .pushowl-simple-toast__action-buttons .pushowl-close-button g,\n        .pushowl-simple-toast__action-buttons .pushowl-bell-button g {\n            fill: ${m};\n            transition: auto;\n        }\n        /* Disable animations */\n        @media (prefers-reduced-motion: reduce) {\n          .pushowl-simple-toast,\n          .pushowl-simple-toast__content,\n          .is-maximized .pushowl-simple-toast__title,\n          .pushowl-simple-toast__action-buttons button,\n          .pushowl-simple-toast__title-container .bell-icon\n           {\n            transition: none;\n          }\n        }\n    </style>\n    <div class="pushowl-simple-toast">\n        <div id="pushowl-simple-toast-content" class="pushowl-simple-toast__content js-pushowl-widget-content" aria-hidden="true">\n            <div class="pushowl-simple-toast__title-container">\n                ${w}\n                <div class="pushowl-simple-toast__title" tabindex="-1"></div>\n            </div>\n            <button class="js-subscribe-button pushowl-simple-toast__yes-button" tabindex="-1" aria-hidden="true"></button>\n        </div>\n        <div class="pushowl-simple-toast__action-buttons action-button">\n            <button class="js-pushowl-close-button pushowl-close-button" aria-label="Close" tabindex="-1" aria-hidden="true"  aria-expanded="false" aria-controls="pushowl-simple-toast-content">\n              <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                      <g transform="translate(-5.000000, -5.000000)">\n                        <g>\n                          <polygon points="17 6.20857143 15.7914286 5 11 9.79142857 6.20857143 5 5 6.20857143 9.79142857 11 5 15.7914286 6.20857143 17 11 12.2085714 15.7914286 17 17 15.7914286 12.2085714 11"></polygon>\n                        </g>\n                      </g>\n                  </g>\n              </svg>\n            </button>\n            \x3c!-- bell-buttn is kept for legacy purposes. --\x3e\n            <button class="js-pushowl-bell-button pushowl-bell-button bell-button" aria-label="Open" aria-expanded="false" aria-controls="pushowl-simple-toast-content" />\n              ${w}\n            </button>\n        </div>\n    </div>\n</div>\n        `,e(g)}}class r{constructor(t){let n=s()?a:p;this.widget=new n(t)}xport{r as FlyoutWidgetHandler};