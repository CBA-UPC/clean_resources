(function(exoDynamicParams){(function(){function getSearchObject(){const query=window.location.search;return query?(/^[?#]/.test(query)?query.slice(1):query).split("&").reduce((params,param)=>{let[key,value]=param.split("=");params[key]=value?decodeURIComponent(value.replace(/\+/g," ")):"";return params},{}):{}}const params=getSearchObject();let queryParams='';Object.keys(params).forEach(item=>{if(item!=="idzone"){queryParams+="&"+item+"="+params[item]}});const hostname="https://"+exoDynamicParams.adsDomain;const script=document.createElement('script');script.type="application/javascript";script.src=hostname+'/iframe.js?idzone='+exoDynamicParams.idzone+queryParams;document.body.appendChild(script)})()})({"adsDomain":"a.magsrv.com","idzone":5207256}) 100% {
    box-shadow: inset 0 0 0 30px #c44d0e;
  }
}
@keyframes fillfail-offlabel {
  100% {
    box-shadow: inset 0 0 0 30px #1d1f20;
  }
}
@keyframes fillfail-offlabel-dark {
  100% {
    box-shadow: inset 0 0 0 30px #fff;
  }
}
@keyframes scale-up-center {
  0% {
    transform: scale(0.01);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes unspin {
  40% {
    stroke-width: 1px;
    stroke-linecap: square;
    stroke-dashoffset: 192;
  }
  100% {
    stroke-width: 0;
  }
}
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  margin: 0;
  background-color: #fff;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  line-height: 17px;
  color: #1d1f20;
  font-family: -apple-system, system-ui, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, "Helvetica Neue", arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  font-style: normal;
}

h1 {
  margin: 16px 0;
  text-align: center;
  line-height: 1.25;
  color: #1d1f20;
  font-size: 16px;
  font-weight: 700;
}

p {
  margin: 8px 0;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
}

#content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e0e0e0;
  background-color: #fafafa;
  height: 63px;
  user-select: none;
}

#challenge-stage {
  display: flex;
}

#branding {
  display: flex;
  flex-direction: column;
  margin: 0 16px 0 0;
  text-align: right;
}

#spinner-icon {
  display: flex;
  margin-right: 8px;
  width: 30px;
  height: 30px;
  animation: rotate 5s linear infinite;
}

#fail-icon {
  display: flex;
  margin-right: 8px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 #c44d0e;
  width: 30px;
  height: 30px;
  animation: fillfail 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;
  stroke-width: 6px;
  stroke: #f8f8f8;
  stroke-miterlimit: 10;
}

#success-icon {
  display: flex;
  margin-right: 8px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 #038127;
  width: 30px;
  height: 30px;
  animation: scale-up-center 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  stroke-width: 6px;
  stroke: #f8f8f8;
  stroke-miterlimit: 10;
}
#success-icon .p1 {
  stroke-dasharray: 242;
  stroke-dashoffset: 242;
  box-shadow: inset 0 0 0 #038127;
  animation: stroke 0.4s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  animation-delay: 0.5s;
}

.success-circle {
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #038127;
  fill: #038127;
}

.theme-dark #success-icon {
  box-shadow: inset 0 0 0 #0aa937;
}
.theme-dark #success-icon .p1 {
  box-shadow: inset 0 0 0 #0aa937;
}
.theme-dark .success-circle {
  stroke: #0aa937;
  fill: #0aa937;
}
.theme-dark #challenge-overlay {
  background-color: #222;
}
.theme-dark #challenge-overlay,
.theme-dark #challenge-error-text {
  color: #ffa299;
}
.theme-dark #challenge-overlay a,
.theme-dark #challenge-error-text a {
  color: #bbb;
}
.theme-dark #challenge-overlay a:visited, .theme-dark #challenge-overlay a:link,
.theme-dark #challenge-error-text a:visited,
.theme-dark #challenge-error-text a:link {
  color: #bbb;
}
.theme-dark #challenge-overlay a:hover, .theme-dark #challenge-overlay a:active, .theme-dark #challenge-overlay a:focus,
.theme-dark #challenge-error-text a:hover,
.theme-dark #challenge-error-text a:active,
.theme-dark #challenge-error-text a:focus {
  color: #949494;
}
.theme-dark .ctp-checkbox-label .mark {
  border: 2px solid #dadada;
  background-color: #222;
}
.theme-dark .ctp-checkbox-label input:focus ~ .mark, .theme-dark .ctp-checkbox-label input:active ~ .mark {
  border: 2px solid #fbad41;
}
.theme-dark .ctp-checkbox-label input:checked ~ .mark {
  background-color: #6d6d6d;
}
.theme-dark .ctp-checkbox-label input:checked ~ .mark::after {
  border-color: #fbad41;
}
.theme-dark .offlabel #fail-icon {
  box-shadow: inset 0 0 0 #fff;
  animation: fillfail-offlabel-dark 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;
}
.theme-dark h1 {
  color: #fff;
}
.theme-dark #challenge-error-title {
  color: #ffa299;
}
.theme-dark #challenge-error-title a {
  color: #bbb;
}
.theme-dark #challenge-error-title a:visited, .theme-dark #challenge-error-title a:link {
  color: #bbb;
}
.theme-dark #challenge-error-title a:hover, .theme-dark #challenge-error-title a:active, .theme-dark #challenge-error-title a:focus {
  color: #949494;
}
.theme-dark #terms {
  color: #bbb;
}
.theme-dark #terms a {
  color: #bbb;
}
.theme-dark #terms a:visited, .theme-dark #terms a:link {
  color: #bbb;
}
.theme-dark #terms a:hover, .theme-dark #terms a:active, .theme-dark #terms a:focus {
  color: #949494;
}
.theme-dark #content {
  border-color: #666;
  background-color: #222;
}
.theme-dark #qr {
  fill: rgb(243, 128, 32);
}
.theme-dark .logo-text {
  fill: #fff;
}
.theme-dark #fr-helper-link,
.theme-dark #fr-helper-loop-link {
  color: #bbb;
}
.theme-dark #fr-helper-link:visited, .theme-dark #fr-helper-link:link,
.theme-dark #fr-helper-loop-link:visited,
.theme-dark #fr-helper-loop-link:link {
  color: #bbb;
}
.theme-dark #fr-helper-link:active, .theme-dark #fr-helper-link:hover, .theme-dark #fr-helper-link:focus,
.theme-dark #fr-helper-loop-link:active,
.theme-dark #fr-helper-loop-link:hover,
.theme-dark #fr-helper-loop-link:focus {
  color: #949494;
}
.theme-dark #expired-refresh-link {
  color: #bbb;
}
.theme-dark #expired-refresh-link:visited, .theme-dark #expired-refresh-link:link {
  color: #bbb;
}
.theme-dark #expired-refresh-link:active, .theme-dark #expired-refresh-link:hover, .theme-dark #expired-refresh-link:focus {
  color: #949494;
}
.theme-dark .overlay {
  border-color: #ffa299;
  color: #ffa299;
}

#challenge-error {
  margin: 0 8px;
}

#challenge-overlay {
  position: absolute;
  top: 0;
  z-index: 9999;
  background-color: #fafafa;
}

#challenge-overlay,
#challenge-error-text {
  text-align: center;
  line-height: 10px;
  color: #de1303;
  font-size: 9px;
}
#challenge-overlay a,
#challenge-error-text a {
  color: #1d1f20;
}
#challenge-overlay a:visited, #challenge-overlay a:link,
#challenge-error-text a:visited,
#challenge-error-text a:link {
  color: #1d1f20;
}
#challenge-overlay a:active, #challenge-overlay a:hover, #challenge-overlay a:focus,
#challenge-error-text a:active,
#challenge-error-text a:hover,
#challenge-error-text a:focus {
  color: #166379;
}

#logo {
  margin-bottom: 1px;
  height: 26px;
}

.failure-circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #c44d0e;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.failure-cross {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

.ctp-checkbox-container {
  display: flex;
  align-items: center;
  margin-left: 11px;
  cursor: pointer;
  text-align: left;
}

.ctp-checkbox-label {
  cursor: pointer;
  padding-left: 37px;
}
.ctp-checkbox-label input {
  position: absolute;
  top: 20px;
  left: 18px;
  opacity: 0;
  z-index: 9999;
  cursor: pointer;
  width: 24px;
  height: 24px;
}
.ctp-checkbox-label input:active ~ .mark {
  border: 2px solid #c44d0e;
}
.ctp-checkbox-label input:active ~ span.ctp-label {
  text-decoration: underline;
}
.ctp-checkbox-label input:focus ~ .mark {
  border: 2px solid #c44d0e;
}
.ctp-checkbox-label input:focus ~ span.ctp-label {
  text-decoration: underline;
}
.ctp-checkbox-label input:checked ~ .mark {
  transform: rotate(0deg) scale(1);
  opacity: 1;
  border-radius: 5px;
  background-color: white;
}
.ctp-checkbox-label input:checked ~ .mark::after {
  top: 3px;
  left: 8px;
  transform: rotate(45deg) scale(1);
  border: solid #c44d0e;
  border-width: 0 4px 4px 0;
  border-radius: 0;
  width: 6px;
  height: 12px;
}
.ctp-checkbox-label .mark {
  position: absolute;
  top: 20px;
  left: 18px;
  transition: all 0.1s ease-in;
  z-index: 9998;
  border: 2px solid #6d6d6d;
  border-radius: 3px;
  background: #fff;
  width: 24px;
  height: 24px;
  animation: scale-up-center 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
.ctp-checkbox-label .mark::after {
  position: absolute;
  border-radius: 5px;
  content: "";
}

.size-compact {
  font-size: 13px;
}
.size-compact .ctp-checkbox-label .mark {
  left: 15px;
}
.size-compact .ctp-checkbox-label input {
  left: 15px;
}
.size-compact #content {
  display: flex;
  flex-flow: column nowrap;
  place-content: center center;
  align-items: center;
  height: 118px;
}
.size-compact .link-spacer {
  margin-right: 3px;
  margin-left: 3px;
}
.size-compact .ctp-checkbox-container {
  text-align: left;
}
.size-compact #logo {
  margin-top: 5px;
  margin-bottom: 0;
  height: 22px;
}
.size-compact .cb-container {
  margin-top: 3px;
  margin-left: 0;
}
.size-compact #branding {
  display: flex;
  flex-flow: row-reverse wrap;
  place-content: center flex-start;
  align-items: center;
  margin: 5px 16px 0;
  padding-right: 0;
  text-align: right;
}
.size-compact #terms {
  text-align: right;
}
.size-compact #qr {
  text-align: center;
}
.size-compact #challenge-error-title {
  margin-top: 3px;
  width: auto;
}
.size-compact #fail {
  display: flex;
  flex-flow: row nowrap;
  place-content: center space-evenly;
  align-items: center;
  visibility: visible;
  line-height: 13px;
  font-size: 11px;
}
.size-compact #fail-icon {
  margin-right: 4px;
  width: 25px;
  height: 25px;
}
.size-compact #expired {
  margin-top: 9px;
  margin-left: 11px;
}
.size-compact #challenge-error {
  margin: 0 2px;
}

.ctp-label {
  display: flex;
  flex-flow: row-reverse nowrap;
  place-content: center flex-end;
  align-items: center;
  padding-left: 2px;
}

.rtl .ctp-label {
  padding-right: 2px;
  padding-left: 0;
}
.rtl #success-icon {
  left: 255px;
  margin-left: 8px;
}
.rtl #fail-icon {
  left: 255px;
  margin-left: 8px;
}
.rtl #spinner-icon {
  left: 255px;
  margin-left: 8px;
}
.rtl #expired-icon {
  left: 255px;
  margin-left: 8px;
}
.rtl #branding {
  margin: 0 0 0 16px;
  padding-right: 0;
  padding-left: 0;
  width: 90px;
  text-align: center;
}
.rtl .size-compact #branding {
  padding-right: 0;
  padding-left: 0;
  text-align: center;
}
.rtl .size-compact #terms {
  text-align: center;
}
.rtl .size-compact #cf-stage {
  padding-right: 48px;
}
.rtl .size-compact #success-icon {
  left: 86px;
}
.rtl .size-compact #fail-icon {
  left: 86px;
}
.rtl .size-compact #spinner-icon {
  left: 86px;
}
.rtl .size-compact #expired-icon {
  left: 86px;
}
.rtl .size-compact #expired {
  margin-top: 0;
  margin-left: 0;
}
.rtl .ctp-checkbox-label {
  padding-right: 37px;
  padding-left: 0;
  text-align: right;
}
.rtl .ctp-checkbox-label input {
  right: 18px;
}
.rtl .ctp-checkbox-label input:checked ~ .mark::after {
  right: 8px;
}
.rtl .ctp-checkbox-label .mark {
  right: 18px;
}
.rtl .ctp-checkbox-container {
  margin-right: 11px;
  margin-left: 0;
  text-align: right;
}
.rtl .cb-container {
  margin-left: 0;
}

#terms {
  display: flex;
  justify-content: space-evenly;
  line-height: 10px;
  color: #1d1f20;
  font-size: 8px;
  font-style: normal;
}
#terms a {
  text-decoration: underline;
  line-height: 10px;
  color: #1d1f20;
  font-size: 8px;
  font-weight: 400;
  font-style: normal;
}
#terms a:link, #terms a:visited {
  text-decoration: underline;
  line-height: 10px;
  color: #1d1f20;
  font-size: 8px;
  font-weight: 400;
  font-style: normal;
}
#terms a:hover, #terms a:focus, #terms a:active {
  text-decoration: underline;
  color: #166379;
}

#challenge-error-title {
  position: absolute;
  top: 0;
  margin: 5px 0;
  width: 200px;
  height: 55px;
  color: #de1303;
  font-size: 11px;
}
#challenge-error-title a {
  color: #1d1f20;
}
#challenge-error-title a:hover, #challenge-error-title a:focus, #challenge-error-title a:active {
  text-decoration: underline;
  color: #166379;
}
#challenge-error-title a:link, #challenge-error-title a:visited {
  color: #1d1f20;
}
#challenge-error-title .icon-wrapper {
  display: none;
}

.unspun .circle {
  animation: unspin 0.7s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.circle {
  stroke-width: 3px;
  stroke-linecap: round;
  stroke: #038127;
  stroke-dasharray: 0, 100, 0;
  stroke-dashoffset: 200;
  stroke-miterlimit: 1;
  stroke-linejoin: round;
}

.main-wrapper {
  border-spacing: 0;
}

.p1 {
  fill: none;
  stroke: #fff;
}

.expired-p1 {
  fill: none;
  stroke: #fff;
}

.offlabel .circle {
  stroke: #1d1f20;
}
.offlabel .success-circle {
  stroke: #1d1f20;
  fill: #1d1f20;
}
.offlabel .failure-circle {
  stroke: #1d1f20;
}
.offlabel #fail-icon {
  box-shadow: inset 0 0 0 #1d1f20;
  animation: fillfail-offlabel 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;
}

.theme-dark.offlabel .circle {
  stroke: #fff;
}
.theme-dark.offlabel .success-circle {
  stroke: #fff;
  fill: #fff;
}
.theme-dark.offlabel .p1 {
  stroke: #000;
}
.theme-dark.offlabel .expired-p1 {
  stroke: #000;
}
.theme-dark.offlabel .failure-circle {
  stroke: #fff;
}
.theme-dark.offlabel .expired-circle {
  fill: #fff;
  stroke: #fff;
}

.expired-circle {
  stroke-width: 3px;
  stroke-linecap: round;
  stroke: #6d6d6d;
  fill: #6d6d6d;
  stroke-linejoin: round;
}

#expired-icon {
  display: flex;
  margin-right: 8px;
  box-shadow: inset 0 0 0 #6d6d6d;
  width: 30px;
  height: 30px;
  animation: scale 0.3s ease-in-out 0.9s both;
  stroke-width: 6px;
  stroke: #f8f8f8;
  stroke-miterlimit: 10;
}

.cb-container {
  display: flex;
  align-items: center;
  margin-left: 11px;
}

.logo-text {
  fill: #000;
}

#qr {
  fill: #1d1f20;
}
#qr svg {
  width: 40px;
  height: 40px;
}

body.theme-dark {
  background-color: #222;
  color: #fff;
}

#fr-helper-link,
#fr-helper-loop-link {
  display: block;
  color: #1d1f20;
}
#fr-helper-link:link, #fr-helper-link:visited,
#fr-helper-loop-link:link,
#fr-helper-loop-link:visited {
  display: block;
  color: #1d1f20;
}
#fr-helper-link:active, #fr-helper-link:hover, #fr-helper-link:focus,
#fr-helper-loop-link:active,
#fr-helper-loop-link:hover,
#fr-helper-loop-link:focus {
  color: #166379;
}

#expired-refresh-link {
  display: block;
  color: #1d1f20;
}
#expired-refresh-link:link, #expired-refresh-link:visited {
  display: block;
  color: #1d1f20;
}
#expired-refresh-link:active, #expired-refresh-link:hover, #expired-refresh-link:focus {
  color: #166379;
}

html.rtl {
  direction: rtl;
}

.lang-de #branding {
  display: flex;
  flex-direction: column;
  margin: 0 16px 0 0;
  padding-top: 5px;
  text-align: right;
}
.lang-de .size-compact #branding {
  display: flex;
  flex-flow: column nowrap;
  place-content: flex-end flex-start;
  align-items: flex-end;
  margin: 0;
  margin-top: 6px;
  margin-left: 16px;
  text-align: right;
}
.lang-de .size-compact .ctp-label {
  font-size: 10px;
}
.lang-de .size-compact #challenge-overlay,
.lang-de .size-compact #challenge-error-text {
  line-height: 10px;
  font-size: 9px;
}
.lang-de #terms {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  line-height: 10px;
  font-style: normal;
}
.lang-de #terms .link-spacer {
  display: none;
}
.lang-de #challenge-error {
  margin: 8px 4px;
}

.lang-ja #branding {
  display: flex;
  flex-direction: column;
  margin: 0 16px 0 0;
  padding-top: 5px;
  text-align: right;
}
.lang-ja #terms {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  line-height: 10px;
  font-style: normal;
}
.lang-ja #terms .link-spacer {
  display: none;
}
.lang-ja .ctp-label {
  font-size: 11px;
}
.lang-ja .size-compact #challenge-overlay,
.lang-ja .size-compact #challenge-error-text {
  line-height: 10px;
}

.lang-ru #branding {
  display: flex;
  flex-direction: column;
  margin: 0 16px 0 0;
  padding-top: 5px;
  text-align: right;
}
.lang-ru .size-compact #branding {
  display: flex;
  flex-flow: column nowrap;
  place-content: flex-end flex-start;
  align-items: flex-end;
  margin: 0;
  margin-top: 6px;
  margin-left: 16px;
  text-align: right;
}
.lang-ru .size-compact #verifying-text {
  font-size: 10px;
}
.lang-ru .size-compact .ctp-label {
  margin-left: 6px;
  font-size: 10px;
}
.lang-ru .size-compact .ctp-checkbox-label .mark {
  left: 11px;
}
.lang-ru .size-compact .ctp-checkbox-label input {
  left: 11px;
}
.lang-ru .size-compact #challenge-overlay,
.lang-ru .size-compact #challenge-error-text {
  line-height: 10px;
  font-size: 8px;
}
.lang-ru #terms {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  line-height: 10px;
  font-style: normal;
}
.lang-ru #terms .link-spacer {
  display: none;
}
.lang-ru #challenge-error {
  margin: 8px 4px;
}

.overlay {
  position: absolute;
  top: 5px;
  left: 5px;
  opacity: 0.9;
  z-index: 2147483647;
  border: 1px solid #de1303;
  background-color: white;
  padding: 2px;
  height: auto;
  line-height: 8px;
  color: #de1303;
  font-family: consolas, "Liberation Mono", courier, monospace;
  font-size: 8px;
}

.lang-it .size-compact #challenge-overlay,
.lang-it .size-compact #challenge-error-text {
  line-height: 10px;
  font-size: 9px;
}

.lang-id .size-compact #challenge-overlay,
.lang-id .size-compact #challenge-error-text {
  line-height: 10px;
}

@media (prefers-color-scheme: dark) {
  body.theme-auto {
    background-color: #222;
    color: #fff;
  }
  .theme-auto h1 {
    color: #fff;
  }
  .theme-auto #challenge-error-title {
    color: #ffa299;
  }
  .theme-auto #challenge-error-title a {
    color: #bbb;
  }
  .theme-auto #challenge-error-title a:visited, .theme-auto #challenge-error-title a:link {
    color: #bbb;
  }
  .theme-auto #challenge-error-title a:hover, .theme-auto #challenge-error-title a:focus, .theme-auto #challenge-error-title a:active {
    color: #949494;
  }
  .theme-auto #challenge-overlay {
    background-color: #222;
  }
  .theme-auto #challenge-overlay,
  .theme-auto #challenge-error-text {
    color: #ffa299;
  }
  .theme-auto #challenge-overlay a,
  .theme-auto #challenge-error-text a {
    color: #bbb;
  }
  .theme-auto #challenge-overlay a:visited, .theme-auto #challenge-overlay a:link,
  .theme-auto #challenge-error-text a:visited,
  .theme-auto #challenge-error-text a:link {
    color: #bbb;
  }
  .theme-auto #challenge-overlay a:hover, .theme-auto #challenge-overlay a:focus, .theme-auto #challenge-overlay a:active,
  .theme-auto #challenge-error-text a:hover,
  .theme-auto #challenge-error-text a:focus,
  .theme-auto #challenge-error-text a:active {
    color: #949494;
  }
  .theme-auto #terms {
    color: #bbb;
  }
  .theme-auto #terms a {
    color: #bbb;
  }
  .theme-auto #terms a:visited, .theme-auto #terms a:link {
    color: #bbb;
  }
  .theme-auto #terms a:hover, .theme-auto #terms a:focus, .theme-auto #terms a:active {
    color: #949494;
  }
  .theme-auto #temrs a:active {
    color: #949494;
  }
  .theme-auto #content {
    border-color: #666;
    background-color: #222;
  }
  .theme-auto #qr {
    fill: rgb(243, 128, 32);
  }
  .theme-auto .logo-text {
    fill: #fff;
  }
  .theme-auto .ctp-checkbox-label input:checked ~ .mark {
    background-color: #6d6d6d;
  }
  .theme-auto .ctp-checkbox-label input:checked ~ .mark::after {
    border-color: #fbad41;
  }
  .theme-auto .ctp-checkbox-label input:active ~ .mark {
    border: 2px solid #fbad41;
  }
  .theme-auto .ctp-checkbox-label input:focus ~ .mark {
    border: 2px solid #fbad41;
  }
  .theme-auto .ctp-checkbox-label .mark {
    border: 2px solid #dadada;
    background-color: #222;
  }
  .theme-auto #success-icon {
    box-shadow: inset 0 0 0 #0aa937;
  }
  .theme-auto #success-icon .p1 {
    box-shadow: inset 0 0 0 #0aa937;
  }
  .theme-auto .success-circle {
    stroke: #0aa937;
    fill: #0aa937;
  }
  .theme-auto #fr-helper-link,
  .theme-auto #fr-helper-loop-link {
    color: #bbb;
  }
  .theme-auto #fr-helper-link:visited, .theme-auto #fr-helper-link:link,
  .theme-auto #fr-helper-loop-link:visited,
  .theme-auto #fr-helper-loop-link:link {
    color: #bbb;
  }
  .theme-auto #fr-helper-link:hover, .theme-auto #fr-helper-link:focus, .theme-auto #fr-helper-link:active,
  .theme-auto #fr-helper-loop-link:hover,
  .theme-auto #fr-helper-loop-link:focus,
  .theme-auto #fr-helper-loop-link:active {
    color: #949494;
  }
  .theme-auto #expired-refresh-link {
    color: #bbb;
  }
  .theme-auto #expired-refresh-link:visited, .theme-auto #expired-refresh-link:link {
    color: #bbb;
  }
  .theme-auto #expired-refresh-link:hover, .theme-auto #expired-refresh-link:focus, .theme-auto #expired-refresh-link:active {
    color: #949494;
  }
  .theme-auto .overlay {
    border-color: #ffa299;
    color: #ffa299;
  }
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2Nmc2V0dXBfYnVpbGQvc3JjL29yY2hlc3RyYXRvci90dXJuc3RpbGUvdGVtcGxhdGVzIiwic291cmNlcyI6WyJ0dXJuc3RpbGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QkE7RUFDSTtJQUNJOzs7QUFJUjtFQUNJO0lBQ0k7OztBQUlSO0VBQ0k7SUFFSTs7RUFHSjtJQUNJOzs7QUFJUjtFQUNJO0lBQ0k7OztBQUlSO0VBQ0k7SUFDSTs7O0FBSVI7RUFDSTtJQUNJOzs7QUFJUjtFQUNJO0lBQ0k7OztBQUlSO0VBQ0k7SUFDSTs7RUFHSjtJQUNJOzs7QUFJUjtFQUNJO0lBQ0k7SUFDQTtJQUNBOztFQUdKO0lBQ0k7OztBQUlSO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBR0o7RUFDSTtFQUNBLGtCQTlGaUI7RUErRmpCO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxPQTlHTTtFQStHTixhQXhHaUI7RUF5R2pCO0VBQ0E7RUFDQTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBLE9BMUhNO0VBMkhOO0VBQ0E7OztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7OztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQSxrQkFoSWlCO0VBaUlqQjtFQUNBOzs7QUFHSjtFQUNJOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsV0FDSTtFQUVKO0VBQ0E7RUFDQTs7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQUlSO0VBQ0k7RUFDQTtFQUNBO0VBQ0EsUUExTGM7RUEyTGQsTUEzTGM7OztBQStMZDtFQUNJOztBQUVBO0VBQ0k7O0FBSVI7RUFDSSxRQXpNVTtFQTBNVixNQTFNVTs7QUE2TWQ7RUFDSSxrQkFsTmE7O0FBcU5qQjtBQUFBO0VBRUksT0FqT0U7O0FBbU9GO0FBQUE7RUFDSSxPQWpPRjs7QUFtT0U7QUFBQTtBQUFBO0VBRUksT0FyT047O0FBd09FO0FBQUE7QUFBQTtBQUFBO0VBR0ksT0ExT047O0FBZ1BGO0VBQ0k7RUFDQSxrQkE1T1M7O0FBbVBEO0VBQ0k7O0FBT0o7RUFDSSxrQkExUEg7O0FBNFBHO0VBQ0ksY0E1UFQ7O0FBcVFYO0VBQ0k7RUFDQSxXQUNJOztBQUtaO0VBQ0ksT0F6UkU7O0FBNFJOO0VBQ0ksT0EvUkU7O0FBaVNGO0VBQ0ksT0EvUkY7O0FBaVNFO0VBRUksT0FuU047O0FBc1NFO0VBR0ksT0F4U047O0FBNlNOO0VBQ0ksT0EvU0U7O0FBaVRGO0VBQ0ksT0FsVEY7O0FBb1RFO0VBRUksT0F0VE47O0FBeVRFO0VBR0ksT0EzVE47O0FBZ1VOO0VBQ0ksY0FsVFM7RUFtVFQsa0JBNVRhOztBQStUakI7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0FBQUE7RUFFSSxPQWhWRTs7QUFrVkY7QUFBQTtBQUFBO0VBRUksT0FwVkY7O0FBdVZGO0FBQUE7QUFBQTtBQUFBO0VBR0ksT0F6VkY7O0FBNlZOO0VBQ0ksT0EvVkU7O0FBaVdGO0VBRUksT0FuV0Y7O0FBc1dGO0VBR0ksT0F4V0Y7O0FBNFdOO0VBQ0ksY0E3VlM7RUE4VlQsT0FsWEU7OztBQXNYVjtFQUNJOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBLGtCQXJYaUI7OztBQXdYckI7QUFBQTtFQUVJO0VBQ0E7RUFDQSxPQXRZTTtFQXVZTjs7QUFFQTtBQUFBO0VBQ0ksT0EzWUU7O0FBNllGO0FBQUE7QUFBQTtFQUVJLE9BL1lGOztBQWtaRjtBQUFBO0FBQUE7QUFBQTtFQUdJLE9BbFpGOzs7QUF1WlY7RUFDSTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsUUFqWlc7RUFrWlg7RUFDQTs7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUlRO0VBQ0k7O0FBR0o7RUFDSTs7QUFPSjtFQUNJOztBQUdKO0VBQ0k7O0FBT0o7RUFDSTtFQUNBO0VBQ0E7RUFDQSxrQkF2ZEM7O0FBeWREO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFPcEI7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBOzs7QUFLWjtFQUNJOztBQUdJO0VBQ0k7O0FBR0o7RUFDSTs7QUFJUjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTtFQUNBOztBQUdKO0VBQ0k7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJOzs7QUFJUjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQUlBO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7O0FBR0o7RUFDSTtFQUNBOztBQUdKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUlBO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7RUFDQTs7QUFJUjtFQUNJO0VBQ0E7RUFDQTs7QUFFQTtFQUNJOztBQUtZO0VBQ0k7O0FBT3BCO0VBQ0k7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTs7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQSxPQTF0Qk07RUEydEJOO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0EsT0FqdUJFO0VBa3VCRjtFQUNBO0VBQ0E7O0FBRUE7RUFFSTtFQUNBO0VBQ0EsT0ExdUJGO0VBMnVCRTtFQUNBO0VBQ0E7O0FBR0o7RUFHSTtFQUNBLE9BanZCRjs7O0FBc3ZCVjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxPQTl2Qk07RUErdkJOOztBQUVBO0VBQ0ksT0Fud0JFOztBQXF3QkY7RUFHSTtFQUNBLE9BdHdCRjs7QUF5d0JGO0VBRUksT0E5d0JGOztBQWt4Qk47RUFDSTs7O0FBS0o7RUFDSTs7O0FBSVI7RUFDSTtFQUNBO0VBQ0EsUUEvd0JjO0VBZ3hCZDtFQUNBO0VBQ0E7RUFDQTs7O0FBR0o7RUFDSTs7O0FBR0o7RUFDSTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7OztBQUlBO0VBQ0ksUUF2ekJFOztBQTB6Qk47RUFDSSxRQTN6QkU7RUE0ekJGLE1BNXpCRTs7QUErekJOO0VBQ0ksUUFoMEJFOztBQW0wQk47RUFDSTtFQUNBLFdBQ0k7OztBQU1SO0VBQ0k7O0FBR0o7RUFDSTtFQUNBOztBQUdKO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7RUFDQTs7O0FBSVI7RUFDSTtFQUNBO0VBQ0EsUUE1MUJpQjtFQTYxQmpCLE1BNzFCaUI7RUE4MUJqQjs7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQUdKO0VBQ0k7RUFDQTtFQUNBOzs7QUFHSjtFQUNJOzs7QUFHSjtFQUNJLE1BdDRCTTs7QUF3NEJOO0VBQ0k7RUFDQTs7O0FBSVI7RUFDSSxrQkFuNEJpQjtFQW80QmpCLE9BNTRCTTs7O0FBKzRCVjtBQUFBO0VBRUk7RUFDQSxPQXQ1Qk07O0FBdzVCTjtBQUFBO0FBQUE7RUFFSTtFQUNBLE9BMzVCRTs7QUE4NUJOO0FBQUE7QUFBQTtBQUFBO0VBR0ksT0E5NUJFOzs7QUFrNkJWO0VBQ0k7RUFDQSxPQXY2Qk07O0FBeTZCTjtFQUVJO0VBQ0EsT0E1NkJFOztBQSs2Qk47RUFHSSxPQS82QkU7OztBQW03QlY7RUFDSTs7O0FBSUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUlBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUdKO0FBQUE7RUFFSTtFQUNBOztBQUlSO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJOztBQUlSO0VBQ0k7OztBQUtKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFJUjtFQUNJOztBQUlBO0FBQUE7RUFFSTs7O0FBTVI7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUlBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7RUFDQTs7QUFJQTtFQUNJOztBQUdKO0VBQ0k7O0FBSVI7QUFBQTtFQUVJO0VBQ0E7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBSVI7RUFDSTs7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxrQkF0a0NpQjtFQXVrQ2pCO0VBQ0E7RUFDQTtFQUNBLE9BdGxDTTtFQXVsQ04sYUEva0NlO0VBZ2xDZjs7O0FBS0k7QUFBQTtFQUVJO0VBQ0E7OztBQU9KO0FBQUE7RUFFSTs7O0FBS1o7RUFDSTtJQUNJLGtCQXJtQ2E7SUFzbUNiLE9BOW1DRTs7RUFrbkNGO0lBQ0ksT0FubkNGOztFQXNuQ0Y7SUFDSSxPQXpuQ0Y7O0VBMm5DRTtJQUNJLE9Bem5DTjs7RUEybkNNO0lBRUksT0E3bkNWOztFQWdvQ007SUFHSSxPQWxvQ1Y7O0VBdW9DRjtJQUNJLGtCQWxvQ1M7O0VBcW9DYjtBQUFBO0lBRUksT0FqcENGOztFQW1wQ0U7QUFBQTtJQUNJLE9BanBDTjs7RUFtcENNO0FBQUE7QUFBQTtJQUVJLE9BcnBDVjs7RUF3cENNO0FBQUE7QUFBQTtBQUFBO0lBR0ksT0ExcENWOztFQStwQ0Y7SUFDSSxPQWpxQ0Y7O0VBbXFDRTtJQUNJLE9BcHFDTjs7RUFzcUNNO0lBRUksT0F4cUNWOztFQTJxQ007SUFHSSxPQTdxQ1Y7O0VBb3JDTTtJQUNJLE9BcnJDVjs7RUEwckNGO0lBQ0ksY0E1cUNLO0lBNnFDTCxrQkF0ckNTOztFQXlyQ2I7SUFDSTs7RUFHSjtJQUNJOztFQU9ZO0lBQ0ksa0JBcHNDUDs7RUFzc0NPO0lBQ0ksY0F0c0NiOztFQThzQ0s7SUFDSTs7RUFPSjtJQUNJOztFQU1oQjtJQUNJO0lBQ0Esa0JBbHVDSzs7RUFzdUNiO0lBQ0k7O0VBRUE7SUFDSTs7RUFJUjtJQUNJLFFBM3VDTTtJQTR1Q04sTUE1dUNNOztFQSt1Q1Y7QUFBQTtJQUVJLE9BNXZDRjs7RUE4dkNFO0FBQUE7QUFBQTtJQUVJLE9BaHdDTjs7RUFtd0NFO0FBQUE7QUFBQTtBQUFBO0lBR0ksT0Fyd0NOOztFQXl3Q0Y7SUFDSSxPQTN3Q0Y7O0VBNndDRTtJQUVJLE9BL3dDTjs7RUFreENFO0lBR0ksT0FweENOOztFQXd4Q0Y7SUFDSSxjQXp3Q0s7SUEwd0NMLE9BOXhDRiIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci0xOiAjMWQxZjIwO1xuJGNvbG9yLTI6ICNkZTEzMDM7XG4kY29sb3ItMzogI2ZmYTI5OTtcbiRjb2xvci00OiAjMTY2Mzc5O1xuJGNvbG9yLTU6ICNmZmY7XG4kY29sb3ItNjogI2JiYjtcbiRjb2xvci03OiAjOTQ5NDk0O1xuJGZvbnQtZmFtaWx5LW5vcm1hbDogLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBibGlua21hY3N5c3RlbWZvbnQsICdTZWdvZSBVSScsIHJvYm90bywgb3h5Z2VuLCB1YnVudHUsICdIZWx2ZXRpY2EgTmV1ZScsXG4gICAgYXJpYWwsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktbW9ubzogY29uc29sYXMsICdMaWJlcmF0aW9uIE1vbm8nLCBjb3VyaWVyLCBtb25vc3BhY2U7XG4kYmFja2dyb3VuZC1jb2xvci0xOiAjZmZmO1xuJGJhY2tncm91bmQtY29sb3ItMjogI2ZhZmFmYTtcbiRiYWNrZ3JvdW5kLWNvbG9yLTM6ICMyMjI7XG4kYmFja2dyb3VuZC1jb2xvci00OiB3aGl0ZTtcbiRiYWNrZ3JvdW5kLWNvbG9yLTU6ICM2ZDZkNmQ7XG4kY2hlY2tib3gtY29sb3ItMTogI2ZiYWQ0MTtcbiRzdWNjZXNzLWNvbG9yLTE6ICMwYWE5Mzc7XG4kc3VjY2Vzcy1jb2xvci0yOiAjMDM4MTI3O1xuJGRhcmstbWFyay1jb2xvci0xOiAjZGFkYWRhO1xuJGZhaWwtY29sb3ItMTogI2M0NGQwZTtcbiRib3JkZXItY29sb3ItMTogJGNoZWNrYm94LWNvbG9yLTE7XG4kYm9yZGVyLWNvbG9yLTI6ICM2NjY7XG4kYm9yZGVyLWNvbG9yLTM6ICNmZmEyOTk7XG4kY29udGVudC1ib3JkZXItY29sb3ItMTogI2UwZTBlMDtcblxuQGtleWZyYW1lcyByb3RhdGUge1xuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzdHJva2Uge1xuICAgIDEwMCUge1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2NhbGUge1xuICAgIDAlLFxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuXG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBmaWxsIHtcbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmlsbGZhaWwge1xuICAgIDEwMCUge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzMHB4ICRmYWlsLWNvbG9yLTE7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZpbGxmYWlsLW9mZmxhYmVsIHtcbiAgICAxMDAlIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMzBweCAkY29sb3ItMTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmlsbGZhaWwtb2ZmbGFiZWwtZGFyayB7XG4gICAgMTAwJSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDMwcHggI2ZmZjtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2NhbGUtdXAtY2VudGVyIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4wMSk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHVuc3BpbiB7XG4gICAgNDAlIHtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgICAgIHN0cm9rZS1saW5lY2FwOiBzcXVhcmU7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxOTI7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHN0cm9rZS13aWR0aDogMDtcbiAgICB9XG59XG5cbmh0bWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItMTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIGNvbG9yOiAkY29sb3ItMTtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LW5vcm1hbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmgxIHtcbiAgICBtYXJnaW46IDE2cHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgY29sb3I6ICRjb2xvci0xO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbnRlbnQtYm9yZGVyLWNvbG9yLTE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItMjtcbiAgICBoZWlnaHQ6IDYzcHg7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbiNjaGFsbGVuZ2Utc3RhZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNicmFuZGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMCAxNnB4IDAgMDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuI3NwaW5uZXItaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYW5pbWF0aW9uOiByb3RhdGUgNXMgbGluZWFyIGluZmluaXRlO1xufVxuXG4jZmFpbC1pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAkZmFpbC1jb2xvci0xO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBhbmltYXRpb246XG4gICAgICAgIGZpbGxmYWlsIDAuNHMgZWFzZS1pbi1vdXQgMC40cyBmb3J3YXJkcyxcbiAgICAgICAgc2NhbGUgMC4zcyBlYXNlLWluLW91dCAwLjlzIGJvdGg7XG4gICAgc3Ryb2tlLXdpZHRoOiA2cHg7XG4gICAgc3Ryb2tlOiAjZjhmOGY4O1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcbn1cblxuI3N1Y2Nlc3MtaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgJHN1Y2Nlc3MtY29sb3ItMjtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMC42cyBjdWJpYy1iZXppZXIoMC41NSwgMC4wODUsIDAuNjgsIDAuNTMpIGJvdGg7XG4gICAgc3Ryb2tlLXdpZHRoOiA2cHg7XG4gICAgc3Ryb2tlOiAjZjhmOGY4O1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcblxuICAgIC5wMSB7XG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDI0MjtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI0MjtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgJHN1Y2Nlc3MtY29sb3ItMjtcbiAgICAgICAgYW5pbWF0aW9uOiBzdHJva2UgMC40cyBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC40NSwgMSkgZm9yd2FyZHM7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC41cztcbiAgICB9XG59XG5cbi5zdWNjZXNzLWNpcmNsZSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgc3Ryb2tlLXdpZHRoOiAyO1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcbiAgICBzdHJva2U6ICRzdWNjZXNzLWNvbG9yLTI7XG4gICAgZmlsbDogJHN1Y2Nlc3MtY29sb3ItMjtcbn1cblxuLnRoZW1lLWRhcmsge1xuICAgICNzdWNjZXNzLWljb24ge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAkc3VjY2Vzcy1jb2xvci0xO1xuXG4gICAgICAgIC5wMSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAkc3VjY2Vzcy1jb2xvci0xO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnN1Y2Nlc3MtY2lyY2xlIHtcbiAgICAgICAgc3Ryb2tlOiAkc3VjY2Vzcy1jb2xvci0xO1xuICAgICAgICBmaWxsOiAkc3VjY2Vzcy1jb2xvci0xO1xuICAgIH1cblxuICAgICNjaGFsbGVuZ2Utb3ZlcmxheSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLTM7XG4gICAgfVxuXG4gICAgI2NoYWxsZW5nZS1vdmVybGF5LFxuICAgICNjaGFsbGVuZ2UtZXJyb3ItdGV4dCB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItMztcblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItNjtcblxuICAgICAgICAgICAgJjp2aXNpdGVkLFxuICAgICAgICAgICAgJjpsaW5rIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLTY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jdHAtY2hlY2tib3gtbGFiZWwge1xuICAgICAgICAubWFyayB7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkZGFyay1tYXJrLWNvbG9yLTE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci0zO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICB+IHtcbiAgICAgICAgICAgICAgICAgICAgLm1hcmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGNoZWNrYm94LWNvbG9yLTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6Y2hlY2tlZCB7XG4gICAgICAgICAgICAgICAgfiB7XG4gICAgICAgICAgICAgICAgICAgIC5tYXJrIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLTU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5vZmZsYWJlbCB7XG4gICAgICAgICNmYWlsLWljb24ge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgI2ZmZjtcbiAgICAgICAgICAgIGFuaW1hdGlvbjpcbiAgICAgICAgICAgICAgICBmaWxsZmFpbC1vZmZsYWJlbC1kYXJrIDAuNHMgZWFzZS1pbi1vdXQgMC40cyBmb3J3YXJkcyxcbiAgICAgICAgICAgICAgICBzY2FsZSAwLjNzIGVhc2UtaW4tb3V0IDAuOXMgYm90aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci01O1xuICAgIH1cblxuICAgICNjaGFsbGVuZ2UtZXJyb3ItdGl0bGUge1xuICAgICAgICBjb2xvcjogJGNvbG9yLTM7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLTY7XG5cbiAgICAgICAgICAgICY6dmlzaXRlZCxcbiAgICAgICAgICAgICY6bGluayB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci02O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLTc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjdGVybXMge1xuICAgICAgICBjb2xvcjogJGNvbG9yLTY7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLTY7XG5cbiAgICAgICAgICAgICY6dmlzaXRlZCxcbiAgICAgICAgICAgICY6bGluayB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci02O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLTc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjY29udGVudCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci0zO1xuICAgIH1cblxuICAgICNxciB7XG4gICAgICAgIGZpbGw6IHJnYigyNDMgMTI4IDMyKTtcbiAgICB9XG5cbiAgICAubG9nby10ZXh0IHtcbiAgICAgICAgZmlsbDogI2ZmZjtcbiAgICB9XG5cbiAgICAjZnItaGVscGVyLWxpbmssXG4gICAgI2ZyLWhlbHBlci1sb29wLWxpbmsge1xuICAgICAgICBjb2xvcjogJGNvbG9yLTY7XG5cbiAgICAgICAgJjp2aXNpdGVkLFxuICAgICAgICAmOmxpbmsge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci02O1xuICAgICAgICB9XG5cbiAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci03O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2V4cGlyZWQtcmVmcmVzaC1saW5rIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci02O1xuXG4gICAgICAgICY6dmlzaXRlZCxcbiAgICAgICAgJjpsaW5rIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItNjtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWN0aXZlLFxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItNztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5vdmVybGF5IHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLTM7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItMztcbiAgICB9XG59XG5cbiNjaGFsbGVuZ2UtZXJyb3Ige1xuICAgIG1hcmdpbjogMCA4cHg7XG59XG5cbiNjaGFsbGVuZ2Utb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLTI7XG59XG5cbiNjaGFsbGVuZ2Utb3ZlcmxheSxcbiNjaGFsbGVuZ2UtZXJyb3ItdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgIGNvbG9yOiAkY29sb3ItMjtcbiAgICBmb250LXNpemU6IDlweDtcblxuICAgIGEge1xuICAgICAgICBjb2xvcjogJGNvbG9yLTE7XG5cbiAgICAgICAgJjp2aXNpdGVkLFxuICAgICAgICAmOmxpbmsge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci0xO1xuICAgICAgICB9XG5cbiAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci00O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4jbG9nbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICAgIGhlaWdodDogMjZweDtcbn1cblxuLmZhaWx1cmUtY2lyY2xlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxNjY7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE2NjtcbiAgICBzdHJva2Utd2lkdGg6IDI7XG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1xuICAgIHN0cm9rZTogJGZhaWwtY29sb3ItMTtcbiAgICBmaWxsOiBub25lO1xuICAgIGFuaW1hdGlvbjogc3Ryb2tlIDAuNnMgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuNDUsIDEpIGZvcndhcmRzO1xufVxuXG4uZmFpbHVyZS1jcm9zcyB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICBzdHJva2UtZGFzaGFycmF5OiA0ODtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogNDg7XG4gICAgYW5pbWF0aW9uOiBzdHJva2UgMC4zcyBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC40NSwgMSkgMC44cyBmb3J3YXJkcztcbn1cblxuLmN0cC1jaGVja2JveC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMTFweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmN0cC1jaGVja2JveC1sYWJlbCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctbGVmdDogMzdweDtcblxuICAgIGlucHV0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgIGxlZnQ6IDE4cHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGhlaWdodDogMjRweDtcblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICB+IHtcbiAgICAgICAgICAgICAgICAubWFyayB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRmYWlsLWNvbG9yLTE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3Bhbi5jdHAtbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIH4ge1xuICAgICAgICAgICAgICAgIC5tYXJrIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGZhaWwtY29sb3ItMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcGFuLmN0cC1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6Y2hlY2tlZCB7XG4gICAgICAgICAgICB+IHtcbiAgICAgICAgICAgICAgICAubWFyayB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLTQ7XG5cbiAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkICRmYWlsLWNvbG9yLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDAgNHB4IDRweCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWFyayB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICBsZWZ0OiAxOHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xuICAgICAgICB6LWluZGV4OiA5OTk4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYmFja2dyb3VuZC1jb2xvci01O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIGFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDAuNHMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDg1LCAwLjY4LCAwLjUzKSBib3RoO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2l6ZS1jb21wYWN0IHtcbiAgICBmb250LXNpemU6IDEzcHg7XG5cbiAgICAuY3RwLWNoZWNrYm94LWxhYmVsIHtcbiAgICAgICAgLm1hcmsge1xuICAgICAgICAgICAgbGVmdDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxMThweDtcbiAgICB9XG5cbiAgICAubGluay1zcGFjZXIge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICB9XG5cbiAgICAuY3RwLWNoZWNrYm94LWNvbnRhaW5lciB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgI2xvZ28ge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICB9XG5cbiAgICAuY2ItY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAjYnJhbmRpbmcge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdy1yZXZlcnNlIHdyYXA7XG4gICAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDVweCAxNnB4IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cblxuICAgICN0ZXJtcyB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cblxuICAgICNxciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjY2hhbGxlbmdlLWVycm9yLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG5cbiAgICAjZmFpbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgICAgcGxhY2UtY29udGVudDogY2VudGVyIHNwYWNlLWV2ZW5seTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG5cbiAgICAjZmFpbC1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgfVxuXG4gICAgI2V4cGlyZWQge1xuICAgICAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMXB4O1xuICAgIH1cblxuICAgICNjaGFsbGVuZ2UtZXJyb3Ige1xuICAgICAgICBtYXJnaW46IDAgMnB4O1xuICAgIH1cbn1cblxuLmN0cC1sYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdy1yZXZlcnNlIG5vd3JhcDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbn1cblxuLnJ0bCB7XG4gICAgLmN0cC1sYWJlbCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIH1cblxuICAgICNzdWNjZXNzLWljb24ge1xuICAgICAgICBsZWZ0OiAyNTVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB9XG5cbiAgICAjZmFpbC1pY29uIHtcbiAgICAgICAgbGVmdDogMjU1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgfVxuXG4gICAgI3NwaW5uZXItaWNvbiB7XG4gICAgICAgIGxlZnQ6IDI1NXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIH1cblxuICAgICNleHBpcmVkLWljb24ge1xuICAgICAgICBsZWZ0OiAyNTVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB9XG5cbiAgICAjYnJhbmRpbmcge1xuICAgICAgICBtYXJnaW46IDAgMCAwIDE2cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuc2l6ZS1jb21wYWN0IHtcbiAgICAgICAgI2JyYW5kaW5nIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAjdGVybXMge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgI2NmLXN0YWdlIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQ4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAjc3VjY2Vzcy1pY29uIHtcbiAgICAgICAgICAgIGxlZnQ6IDg2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAjZmFpbC1pY29uIHtcbiAgICAgICAgICAgIGxlZnQ6IDg2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAjc3Bpbm5lci1pY29uIHtcbiAgICAgICAgICAgIGxlZnQ6IDg2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAjZXhwaXJlZC1pY29uIHtcbiAgICAgICAgICAgIGxlZnQ6IDg2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAjZXhwaXJlZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY3RwLWNoZWNrYm94LWxhYmVsIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzdweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICByaWdodDogMThweDtcblxuICAgICAgICAgICAgJjpjaGVja2VkIHtcbiAgICAgICAgICAgICAgICB+IHtcbiAgICAgICAgICAgICAgICAgICAgLm1hcmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubWFyayB7XG4gICAgICAgICAgICByaWdodDogMThweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jdHAtY2hlY2tib3gtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuXG4gICAgLmNiLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbn1cblxuI3Rlcm1zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgIGNvbG9yOiAkY29sb3ItMTtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG5cbiAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICBjb2xvcjogJGNvbG9yLTE7XG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG5cbiAgICAgICAgJjpsaW5rLFxuICAgICAgICAmOnZpc2l0ZWQge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci00O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4jY2hhbGxlbmdlLWVycm9yLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNTVweDtcbiAgICBjb2xvcjogJGNvbG9yLTI7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItMTtcblxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItNDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGluayxcbiAgICAgICAgJjp2aXNpdGVkIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pY29uLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLnVuc3B1biB7XG4gICAgLmNpcmNsZSB7XG4gICAgICAgIGFuaW1hdGlvbjogdW5zcGluIDAuN3MgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuNDUsIDEpIGZvcndhcmRzO1xuICAgIH1cbn1cblxuLmNpcmNsZSB7XG4gICAgc3Ryb2tlLXdpZHRoOiAzcHg7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgIHN0cm9rZTogJHN1Y2Nlc3MtY29sb3ItMjtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwLCAxMDAsIDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDIwMDtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTtcbiAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xufVxuXG4ubWFpbi13cmFwcGVyIHtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLnAxIHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZTogI2ZmZjtcbn1cblxuLmV4cGlyZWQtcDEge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiAjZmZmO1xufVxuXG4ub2ZmbGFiZWwge1xuICAgIC5jaXJjbGUge1xuICAgICAgICBzdHJva2U6ICRjb2xvci0xO1xuICAgIH1cblxuICAgIC5zdWNjZXNzLWNpcmNsZSB7XG4gICAgICAgIHN0cm9rZTogJGNvbG9yLTE7XG4gICAgICAgIGZpbGw6ICRjb2xvci0xO1xuICAgIH1cblxuICAgIC5mYWlsdXJlLWNpcmNsZSB7XG4gICAgICAgIHN0cm9rZTogJGNvbG9yLTE7XG4gICAgfVxuXG4gICAgI2ZhaWwtaWNvbiB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwICRjb2xvci0xO1xuICAgICAgICBhbmltYXRpb246XG4gICAgICAgICAgICBmaWxsZmFpbC1vZmZsYWJlbCAwLjRzIGVhc2UtaW4tb3V0IDAuNHMgZm9yd2FyZHMsXG4gICAgICAgICAgICBzY2FsZSAwLjNzIGVhc2UtaW4tb3V0IDAuOXMgYm90aDtcbiAgICB9XG59XG5cbi50aGVtZS1kYXJrLm9mZmxhYmVsIHtcbiAgICAuY2lyY2xlIHtcbiAgICAgICAgc3Ryb2tlOiAjZmZmO1xuICAgIH1cblxuICAgIC5zdWNjZXNzLWNpcmNsZSB7XG4gICAgICAgIHN0cm9rZTogI2ZmZjtcbiAgICAgICAgZmlsbDogI2ZmZjtcbiAgICB9XG5cbiAgICAucDEge1xuICAgICAgICBzdHJva2U6ICMwMDA7XG4gICAgfVxuXG4gICAgLmV4cGlyZWQtcDEge1xuICAgICAgICBzdHJva2U6ICMwMDA7XG4gICAgfVxuXG4gICAgLmZhaWx1cmUtY2lyY2xlIHtcbiAgICAgICAgc3Ryb2tlOiAjZmZmO1xuICAgIH1cblxuICAgIC5leHBpcmVkLWNpcmNsZSB7XG4gICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgIHN0cm9rZTogI2ZmZjtcbiAgICB9XG59XG5cbi5leHBpcmVkLWNpcmNsZSB7XG4gICAgc3Ryb2tlLXdpZHRoOiAzcHg7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgIHN0cm9rZTogJGJhY2tncm91bmQtY29sb3ItNTtcbiAgICBmaWxsOiAkYmFja2dyb3VuZC1jb2xvci01O1xuICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG59XG5cbiNleHBpcmVkLWljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgJGJhY2tncm91bmQtY29sb3ItNTtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYW5pbWF0aW9uOiBzY2FsZSAwLjNzIGVhc2UtaW4tb3V0IDAuOXMgYm90aDtcbiAgICBzdHJva2Utd2lkdGg6IDZweDtcbiAgICBzdHJva2U6ICNmOGY4Zjg7XG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1xufVxuXG4uY2ItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDExcHg7XG59XG5cbi5sb2dvLXRleHQge1xuICAgIGZpbGw6ICMwMDA7XG59XG5cbiNxciB7XG4gICAgZmlsbDogJGNvbG9yLTE7XG5cbiAgICBzdmcge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cbn1cblxuYm9keS50aGVtZS1kYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci0zO1xuICAgIGNvbG9yOiAkY29sb3ItNTtcbn1cblxuI2ZyLWhlbHBlci1saW5rLFxuI2ZyLWhlbHBlci1sb29wLWxpbmsge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAkY29sb3ItMTtcblxuICAgICY6bGluayxcbiAgICAmOnZpc2l0ZWQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6ICRjb2xvci0xO1xuICAgIH1cblxuICAgICY6YWN0aXZlLFxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItNDtcbiAgICB9XG59XG5cbiNleHBpcmVkLXJlZnJlc2gtbGluayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICRjb2xvci0xO1xuXG4gICAgJjpsaW5rLFxuICAgICY6dmlzaXRlZCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogJGNvbG9yLTE7XG4gICAgfVxuXG4gICAgJjphY3RpdmUsXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci00O1xuICAgIH1cbn1cblxuaHRtbC5ydGwge1xuICAgIGRpcmVjdGlvbjogcnRsO1xufVxuXG4ubGFuZy1kZSB7XG4gICAgI2JyYW5kaW5nIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWFyZ2luOiAwIDE2cHggMCAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG5cbiAgICAuc2l6ZS1jb21wYWN0IHtcbiAgICAgICAgI2JyYW5kaW5nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgICAgICAgICBwbGFjZS1jb250ZW50OiBmbGV4LWVuZCBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jdHAtbGFiZWwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgI2NoYWxsZW5nZS1vdmVybGF5LFxuICAgICAgICAjY2hhbGxlbmdlLWVycm9yLXRleHQge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICN0ZXJtcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcblxuICAgICAgICAubGluay1zcGFjZXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNjaGFsbGVuZ2UtZXJyb3Ige1xuICAgICAgICBtYXJnaW46IDhweCA0cHg7XG4gICAgfVxufVxuXG4ubGFuZy1qYSB7XG4gICAgI2JyYW5kaW5nIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWFyZ2luOiAwIDE2cHggMCAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG5cbiAgICAjdGVybXMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG5cbiAgICAgICAgLmxpbmstc3BhY2VyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY3RwLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgIH1cblxuICAgIC5zaXplLWNvbXBhY3Qge1xuICAgICAgICAjY2hhbGxlbmdlLW92ZXJsYXksXG4gICAgICAgICNjaGFsbGVuZ2UtZXJyb3ItdGV4dCB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxhbmctcnUge1xuICAgICNicmFuZGluZyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1hcmdpbjogMCAxNnB4IDAgMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuXG4gICAgLnNpemUtY29tcGFjdCB7XG4gICAgICAgICNicmFuZGluZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICAgICAgICAgcGxhY2UtY29udGVudDogZmxleC1lbmQgZmxleC1zdGFydDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAjdmVyaWZ5aW5nLXRleHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmN0cC1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmN0cC1jaGVja2JveC1sYWJlbCB7XG4gICAgICAgICAgICAubWFyayB7XG4gICAgICAgICAgICAgICAgbGVmdDogMTFweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDExcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAjY2hhbGxlbmdlLW92ZXJsYXksXG4gICAgICAgICNjaGFsbGVuZ2UtZXJyb3ItdGV4dCB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI3Rlcm1zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuXG4gICAgICAgIC5saW5rLXNwYWNlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2NoYWxsZW5nZS1lcnJvciB7XG4gICAgICAgIG1hcmdpbjogOHB4IDRweDtcbiAgICB9XG59XG5cbi5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogNXB4O1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICB6LWluZGV4OiAyMTQ3NDgzNjQ3O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci0yO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLTQ7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBsaW5lLWhlaWdodDogOHB4O1xuICAgIGNvbG9yOiAkY29sb3ItMjtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LW1vbm87XG4gICAgZm9udC1zaXplOiA4cHg7XG59XG5cbi5sYW5nLWl0IHtcbiAgICAuc2l6ZS1jb21wYWN0IHtcbiAgICAgICAgI2NoYWxsZW5nZS1vdmVybGF5LFxuICAgICAgICAjY2hhbGxlbmdlLWVycm9yLXRleHQge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxhbmctaWQge1xuICAgIC5zaXplLWNvbXBhY3Qge1xuICAgICAgICAjY2hhbGxlbmdlLW92ZXJsYXksXG4gICAgICAgICNjaGFsbGVuZ2UtZXJyb3ItdGV4dCB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIGJvZHkudGhlbWUtYXV0byB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLTM7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItNTtcbiAgICB9XG5cbiAgICAudGhlbWUtYXV0byB7XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItNTtcbiAgICAgICAgfVxuXG4gICAgICAgICNjaGFsbGVuZ2UtZXJyb3ItdGl0bGUge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci0zO1xuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLTY7XG5cbiAgICAgICAgICAgICAgICAmOnZpc2l0ZWQsXG4gICAgICAgICAgICAgICAgJjpsaW5rIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci02O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItNztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAjY2hhbGxlbmdlLW92ZXJsYXkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItMztcbiAgICAgICAgfVxuXG4gICAgICAgICNjaGFsbGVuZ2Utb3ZlcmxheSxcbiAgICAgICAgI2NoYWxsZW5nZS1lcnJvci10ZXh0IHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItMztcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci02O1xuXG4gICAgICAgICAgICAgICAgJjp2aXNpdGVkLFxuICAgICAgICAgICAgICAgICY6bGluayB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItNjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICAgICAgICY6Zm9jdXMsXG4gICAgICAgICAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLTc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgI3Rlcm1zIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItNjtcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci02O1xuXG4gICAgICAgICAgICAgICAgJjp2aXNpdGVkLFxuICAgICAgICAgICAgICAgICY6bGluayB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItNjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICAgICAgICY6Zm9jdXMsXG4gICAgICAgICAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLTc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgI3RlbXJzIHtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci03O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICNjb250ZW50IHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0yO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItMztcbiAgICAgICAgfVxuXG4gICAgICAgICNxciB7XG4gICAgICAgICAgICBmaWxsOiByZ2IoMjQzIDEyOCAzMik7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nby10ZXh0IHtcbiAgICAgICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuY3RwLWNoZWNrYm94LWxhYmVsIHtcbiAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAmOmNoZWNrZWQge1xuICAgICAgICAgICAgICAgICAgICB+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXJrIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci01O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIH4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRjaGVja2JveC1jb2xvci0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgIH4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRjaGVja2JveC1jb2xvci0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWFyayB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGRhcmstbWFyay1jb2xvci0xO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLTM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAjc3VjY2Vzcy1pY29uIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwICRzdWNjZXNzLWNvbG9yLTE7XG5cbiAgICAgICAgICAgIC5wMSB7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgJHN1Y2Nlc3MtY29sb3ItMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWNjZXNzLWNpcmNsZSB7XG4gICAgICAgICAgICBzdHJva2U6ICRzdWNjZXNzLWNvbG9yLTE7XG4gICAgICAgICAgICBmaWxsOiAkc3VjY2Vzcy1jb2xvci0xO1xuICAgICAgICB9XG5cbiAgICAgICAgI2ZyLWhlbHBlci1saW5rLFxuICAgICAgICAjZnItaGVscGVyLWxvb3AtbGluayB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLTY7XG5cbiAgICAgICAgICAgICY6dmlzaXRlZCxcbiAgICAgICAgICAgICY6bGluayB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci02O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLTc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAjZXhwaXJlZC1yZWZyZXNoLWxpbmsge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci02O1xuXG4gICAgICAgICAgICAmOnZpc2l0ZWQsXG4gICAgICAgICAgICAmOmxpbmsge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItNjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpob3ZlcixcbiAgICAgICAgICAgICY6Zm9jdXMsXG4gICAgICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci03O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLTM7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLTM7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */</style>
    
    <script>
        (function(){
            window._cf_chl_opt={
                cvId: '3',
                cZone: 'challenges.cloudflare.com',
                cTplV: 5,
                chlApivId: '0',
                chlApiWidgetId: '8zyrn',
                chlApiSitekey: '0x4AAAAAAACLKoorrly8r8Vj',
                chlApiMode: 'managed',
                chlApiSize: 'normal',
                chlApiRcV: '1/XJ2F5S5SEnC-ZR1',
                chlTimeoutMs: 120000,
                cK: "visitor-time",
                cType: 'chl_api_m',
                cNounce: '64762',
                cRay: '8543f24409072184',
                cHash: '173a8ec7adce503',
                cFPWv: 'b',
                cLt: 'n',
                cRq: {
                    ru: 'aHR0cDovL2NoYWxsZW5nZXMuY2xvdWRmbGFyZS5jb20vY2RuLWNnaS9jaGFsbGVuZ2UtcGxhdGZvcm0vaC9iL3R1cm5zdGlsZS9pZi9vdjIvYXYwL3JjdjAvMC84enlybi8weDRBQUFBQUFBQ0xLb29ycmx5OHI4VmovYXV0by9ub3JtYWw=',
                    ra: 'TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgNi4xOyBXT1c2NDsgcnY6NDUuMCkgR2Vja28vMjAxMDAxMDEgRmlyZWZveC80NS4w',
                    rm: 'R0VU',
                    d: 'gRgOBZmEHR+7cmOmCeUZ+x38S8WZPwBGdc/+fr+QJREM/1GpXqInnAdc/XceO+N5WiNmO5GNhKl3edry/79HQf50ulbFIg1onKV+iO97fWsF/07ym6sq1F9jQke7HjyTkvY0YmT/E2nQ3BdWBWuRQLbem1INd4R7PvLpsW4GxHv0MFdyhtwmh8FeuJMltoQahC6JRmYc5fDpB+BbkBWlmOUDK/q/5wIS0PvgzuRA+H67J+7Xaj2zV2l7c9e7BBqRtm7pOMh4r5r0+aSn+k8B8foyd2j/O7C0X3LGZ4nvsJWIElG54M3u7YnR0AdQhtbqePJTebWVk4GVIaa45ND5J7tecHyjuDFt9TVWv4yYr9xnmVK57TlsW8jMDKbAas7gFlV/Du3q+bEEXPfpCo85PTBOKHP3HISImKjpVP/DBguitbs7TEWGQpOgvNSahJm2zMU+np5UplMFyGp/Lwua9xnlXja7vU2U/DDq6Iwk/8I7VCc1Py5CtikpCBlsee0/bvPXmWaCR7lkcn5VRjIOuAC4+LlSvdSrI6quLUg459OXmCGYGlqt41+ObCceWoSp4l3wLN4zpV67RiEFQ+iglqh+/yqyYXj42Uv68NIPhcQJPP3JpfRopLQQ3mJFwYM3ZIrx6o7hqMrizQuF8hQpzw==',
                    t: 'MTcwNzczMTYyNS42MTc=',
                    m: 'vy9oMa8ZkAndSPr4uPtDI8NiWh36TvX1uRjcVVC62I4=',
                    i1: 'rNhzj+MQu3I2cYjWRMCKOA==',
                    i2: 'pCdkk3qjRuCdkA8Mfq9aJw==',
                    uh: 'wuTXTOnLAeHZ1pu4MPfYN2m+aF4ZjFpylH5Ml5+UhCE=',
                    hh: 'WCiLdNo2uN2aXsfJJhG2HFkP3bOo0fw8tsFAppLisvs=',
                    zh: '9D+zbxCfwBPyr1pF5Wb5E9kRItcGU2xCgzO1zGTKToQ=',
                }
            };
            var handler = function(event) {
                var e = event.data;
                if (e.source && e.source === 'cloudflare-challenge' && e.event === 'meow' && e.widgetId === window._cf_chl_opt.chlApiWidgetId) {
                    if(window['parent']){
                        window['parent'].postMessage({
                            source: 'cloudflare-challenge',
                            widgetId: window._cf_chl_opt.chlApiWidgetId,
                            event: 'food',
                            seq: e.seq,
                        }, "*");
                    }
                }
            }
            if (window.addEventListener) {
                window.addEventListener('message', handler);
            } else {
                window.attachEvent('onmessage', handler);
            }
        }());
    </script>
    <script src="/cdn-cgi/challenge-platform/h/b/orchestrate/chl_api/v1?ray=8543f24409072184"></script>
</head>
<body class="theme-auto size-normal">
<div class="main-wrapper">
    <noscript>
        <h1 style="color:#bd2426;">Please turn JavaScript on and reload the page.</h1>
    </noscript>
    <div id="content" style="display:none" aria-live="polite" aria-atomic="true">
        <div id="challenge-stage" style="display:none;"></div>
        <div id="verifying" class="cb-container" style="display:none">
            <svg id="spinner-icon" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <line x1="15" x2="15" y1="1.5" y2="5.5" class="circle"></line>
                <line x1="24.5459" x2="24.5459" y1="5.45405" y2="10.45405" transform="rotate(45 24.5459 5.45405)" class="circle"></line>
                <line x1="28.5" x2="28.5" y1="15" y2="20" transform="rotate(90 28.5 15)" class="circle"></line>
                <line x1="24.5459" x2="24.5459" y1="24.546" y2="29.546" transform="rotate(135 24.5459 24.546)" class="circle"></line>
                <line x1="15" x2="15" y1="28.5" y2="33.5" transform="rotate(180 15 28.5)" class="circle"></line>
                <line x1="5.4541" x2="5.4541" y1="24.5459" y2="29.5459" transform="rotate(-135 5.4541 24.5459)" class="circle"></line>
                <line x1="1.5" x2="1.5" y1="15" y2="20" transform="rotate(-90 1.5 15)" class="circle"></line>
                <line x1="5.45408" x2="5.45408" y1="5.45404" y2="10.45404" transform="rotate(-45 5.45408 5.45404)" class="circle"></line>
            </svg>
            <div id="verifying-msg">
                <span id="verifying-text">Verifying&hellip;</span>
                
            </div>
        </div>
        <div id="success" class="cb-container" style="display:none" role="alert">
            <svg id="success-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" aria-hidden="true">
                <circle class="success-circle" cx="26" cy="26" r="25"/>
                <path class="p1" d="m13,26l9.37,9l17.63,-18"/>
            </svg>
            <span id="success-text">Success!</span>
        </div>
        <div id="fail" class="cb-container" style="display:none" role="alert">
            <svg id="fail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" aria-hidden="true">
                <circle class="failure-circle" cx="26" cy="26" r="25" fill="none"/>
                <path class="failure-cross" fill="none" d="M14.1 27.2 l24.124.2"/>
            </svg>
            <div id="failure-msg">
                <span id="fail-text">Failure!</span>
                <br/><span id="fr-helper"><a href="#refresh" id="fr-helper-link">Having trouble?</a></span>
            </div>
        </div>
        <div id="expired" class="cb-container" style="display:none" role="alert">
            <svg id="expired-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" aria-hidden="true">
                <circle class="expired-circle" cx="26" cy="26" r="25"/>
                <path class="expired-p1" d="m13,32l15,0l0,-23"></path>
            </svg>
            <div id="expiry-msg">
                <span id="expired-text">Expired.</span><a href="#refresh" id="expired-refresh-link">Refresh</a>
            </div>
        </div>
        <div id="challenge-error" class="cb-container" style="display:none" role="alert">
            <span id="challenge-error-text"></span>
        </div>
        <div id="branding">
            <a class="cf-link" target="_blank" href="https://www.cloudflare.com/products/turnstile/?utm_source=turnstile&utm_campaign=widget" rel="noopener noreferrer">
                <svg role="img" aria-label="Cloudflare" id="logo" viewBox="0 0 74 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M61.8848 15.7841L62.0632 15.1578C62.2758 14.4126 62.1967 13.7239 61.8401 13.2178C61.5118 12.7517 60.9649 12.4773 60.3007 12.4453L47.7201 12.2836C47.6811 12.2829 47.6428 12.2728 47.6083 12.2542C47.5738 12.2356 47.5442 12.209 47.5217 12.1766C47.4996 12.1431 47.4856 12.1049 47.4807 12.0649C47.4758 12.025 47.4801 11.9844 47.4933 11.9465C47.5149 11.8839 47.5541 11.8291 47.6061 11.7888C47.658 11.7486 47.7204 11.7247 47.7856 11.72L60.4827 11.5566C61.9889 11.4864 63.6196 10.2462 64.1905 8.73372L64.9146 6.81361C64.9443 6.73242 64.951 6.64444 64.9341 6.55957C64.112 2.80652 60.8115 0 56.8652 0C53.2293 0 50.1421 2.38158 49.0347 5.69186C48.2864 5.12186 47.3535 4.85982 46.4228 4.95823C44.6785 5.13401 43.276 6.55928 43.1034 8.32979C43.059 8.77189 43.0915 9.21845 43.1992 9.64918C40.3497 9.73347 38.0645 12.1027 38.0645 15.0151C38.0649 15.2751 38.0838 15.5347 38.1212 15.7919C38.1294 15.8513 38.1584 15.9057 38.2029 15.9452C38.2474 15.9847 38.3044 16.0067 38.3635 16.0071L61.5894 16.0099C61.5916 16.0101 61.5938 16.0101 61.596 16.0099C61.6616 16.0088 61.7252 15.9862 61.7772 15.9455C61.8293 15.9049 61.867 15.8483 61.8848 15.7841Z" fill="#F6821F"/>
                    <path d="M66.0758 6.95285C65.9592 6.95285 65.843 6.95582 65.7274 6.96177C65.7087 6.96312 65.6904 6.96719 65.6729 6.97385C65.6426 6.98437 65.6152 7.00219 65.5931 7.02579C65.5711 7.04939 65.555 7.07806 65.5462 7.10936L65.0515 8.84333C64.8389 9.58847 64.918 10.2766 65.2749 10.7827C65.6029 11.2494 66.1498 11.5233 66.814 11.5552L69.4959 11.7186C69.5336 11.7199 69.5705 11.73 69.6037 11.7483C69.6369 11.7666 69.6654 11.7925 69.687 11.8239C69.7092 11.8576 69.7234 11.896 69.7283 11.9363C69.7332 11.9765 69.7288 12.0173 69.7153 12.0555C69.6937 12.118 69.6546 12.1727 69.6028 12.2129C69.5509 12.2531 69.4887 12.2771 69.4236 12.2819L66.6371 12.4453C65.1241 12.5161 63.4937 13.7558 62.9233 15.2682L62.722 15.8022C62.7136 15.8245 62.7105 15.8486 62.713 15.8724C62.7155 15.8961 62.7236 15.9189 62.7365 15.9389C62.7495 15.9589 62.7669 15.9755 62.7874 15.9873C62.8079 15.9991 62.8309 16.0058 62.8544 16.0068C62.8569 16.0068 62.8592 16.0068 62.8618 16.0068H72.4502C72.506 16.0073 72.5604 15.9893 72.6051 15.9554C72.6498 15.9216 72.6823 15.8739 72.6977 15.8195C72.8677 15.2043 72.9535 14.5684 72.9529 13.9296C72.9517 10.0767 69.8732 6.95285 66.0758 6.95285Z" fill="#FBAD41"/>
                    <path class="logo-text" d="M8.11963 18.8904H9.75541V23.4254H12.6139V24.8798H8.11963V18.8904Z"/>
                    <path class="logo-text" d="M14.3081 21.9023V21.8853C14.3081 20.1655 15.674 18.7704 17.4952 18.7704C19.3164 18.7704 20.6653 20.1482 20.6653 21.8681V21.8853C20.6653 23.6052 19.2991 24.9994 17.4785 24.9994C15.6578 24.9994 14.3081 23.6222 14.3081 21.9023ZM18.9958 21.9023V21.8853C18.9958 21.0222 18.3806 20.2679 17.4785 20.2679C16.5846 20.2679 15.9858 21.0038 15.9858 21.8681V21.8853C15.9858 22.7484 16.6013 23.5025 17.4952 23.5025C18.3973 23.5025 18.9958 22.7666 18.9958 21.9023Z"/>
                    <path class="logo-text" d="M22.6674 22.253V18.8901H24.3284V22.2191C24.3284 23.0822 24.7584 23.4939 25.4159 23.4939C26.0733 23.4939 26.5034 23.1003 26.5034 22.2617V18.8901H28.1647V22.2093C28.1647 24.1432 27.0772 24.9899 25.3991 24.9899C23.7211 24.9899 22.6674 24.1268 22.6674 22.2522"/>
                    <path class="logo-text" d="M30.668 18.8907H32.9445C35.0526 18.8907 36.275 20.1226 36.275 21.8508V21.8684C36.275 23.5963 35.0355 24.88 32.911 24.88H30.668V18.8907ZM32.97 23.4076C33.9483 23.4076 34.597 22.8609 34.597 21.8928V21.8759C34.597 20.9178 33.9483 20.3614 32.97 20.3614H32.3038V23.4082L32.97 23.4076Z"/>
                    <path class="logo-text" d="M38.6525 18.8904H43.3738V20.3453H40.2883V21.3632H43.079V22.7407H40.2883V24.8798H38.6525V18.8904Z"/>
                    <path class="logo-text" d="M45.65 18.8904H47.2858V23.4254H50.1443V24.8798H45.65V18.8904Z"/>
                    <path class="logo-text" d="M54.4187 18.8475H55.9949L58.5079 24.8797H56.7541L56.3238 23.8101H54.047L53.6257 24.8797H51.9058L54.4187 18.8475ZM55.8518 22.5183L55.1941 20.8154L54.5278 22.5183H55.8518Z"/>
                    <path class="logo-text" d="M60.6149 18.8901H63.4056C64.3083 18.8901 64.9317 19.13 65.328 19.5406C65.6742 19.883 65.8511 20.3462 65.8511 20.9357V20.9526C65.8511 21.8678 65.3691 22.4754 64.6369 22.7919L66.045 24.88H64.1558L62.9671 23.0658H62.2507V24.88H60.6149V18.8901ZM63.3299 21.7654C63.8864 21.7654 64.2071 21.4915 64.2071 21.0551V21.0381C64.2071 20.5674 63.8697 20.328 63.3211 20.328H62.2507V21.7665L63.3299 21.7654Z"/>
                    <path class="logo-text" d="M68.2112 18.8904H72.9578V20.3024H69.8302V21.209H72.6632V22.5183H69.8302V23.4683H73V24.8798H68.2112V18.8904Z"/>
                    <path class="logo-text" d="M4.53824 22.6043C4.30918 23.13 3.82723 23.5022 3.18681 23.5022C2.29265 23.5022 1.67746 22.7493 1.67746 21.8851V21.8678C1.67746 21.0047 2.27593 20.2676 3.1698 20.2676C3.84367 20.2676 4.35681 20.6882 4.5734 21.2605H6.29764C6.02151 19.8349 4.78716 18.7707 3.18681 18.7707C1.36533 18.7707 0 20.1666 0 21.8851V21.9021C0 23.6219 1.3486 25 3.1698 25C4.72762 25 5.94525 23.9764 6.26645 22.6046L4.53824 22.6043Z"/>
                </svg>
            </a>
            <div id="terms">
                <a id="privacy-link" target="_blank" rel="noopener noreferrer" href="https://www.cloudflare.com/privacypolicy/">Privacy</a><span class="link-spacer"> &bull; </span><a id="terms-link" target="_blank" rel="noopener noreferrer" href="https://www.cloudflare.com/website-terms/">Terms</a>
            </div>
        </div>
    </div>
</div>
</body>
</html>