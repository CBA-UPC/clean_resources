<!DOCTYPE HTML>
<html lang="en-US">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta name="robots" content="noindex, nofollow" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="preload" href="/cdn-cgi/challenge-platform/h/g/cmg/1/wuTXTOnLAeHZ1pu4MPfYN2m%2BaF4ZjFpylH5Ml5%2BUhCE%3D" as="image">
    <title>Checking your Browser&hellip;</title>
    <style>@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1, 1, 1);
  }
}
@keyframes fill {
  100% {
    transform: scale(1);
  }
}
@keyframes fillfail {
  100% {
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
                chlApiWidgetId: '4ejz3',
                chlApiSitekey: '0x4AAAAAAADnPIDROrmt1Wwj',
                chlApiMode: 'managed',
                chlApiSize: 'normal',
                chlApiRcV: '1/It7Ic-Ix22sRFtR',
                chlTimeoutMs: 120000,
                cK: "visitor-time",
                cType: 'chl_api_m',
                cNounce: '2431',
                cRay: '850d02f5db660c47',
                cHash: 'ba2513ab4e69eb5',
                cFPWv: 'g',
                cLt: 'n',
                cRq: {
                    ru: 'aHR0cDovL2NoYWxsZW5nZXMuY2xvdWRmbGFyZS5jb20vY2RuLWNnaS9jaGFsbGVuZ2UtcGxhdGZvcm0vaC9nL3R1cm5zdGlsZS9pZi9vdjIvYXYwL3JjdjAvMC80ZWp6My8weDRBQUFBQUFBRG5QSURST3JtdDFXd2ovbGlnaHQvbm9ybWFs',
                    ra: 'TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgNi4xOyBXT1c2NDsgcnY6NDUuMCkgR2Vja28vMjAxMDAxMDEgRmlyZWZveC80NS4w',
                    rm: 'R0VU',
                    d: 'E6uhoLGAp1GO5dH2fPTCMB1eYAYTmra5oFJ5nz018obEjQlm4eyYlcAEyd+9g8K5vzTIxnQF+oCfFMXO8fRRUVkb9pJczVNmQlFuLXU+4ILVZ7OwAB34B5P9c9F5j6GlMkB60KxJz6YG+lLIIj7fyATcBuUhOW0yP0FGrzaZKbsCTRyHPd6LZJVUvZEuT3EjUtxOIrVdhx9XZBQV3YF4+3LVXBjmiXRWu9XDFXLS4e5HYEqbP5MSNgNoCcb5HNir1XAUDcGL84Sah38nXG31UYKl9YmIyA3OHk6TrBZI+YXVqkP6I75rKvqqgg6cobopsfOdYSpiPboKm6sg48sfZJqiT3x36+cDAFj13oxa08rT6qxaucwHYEhZHAOlQVpEh1PyDLhdyl7bf8f7Y3Bn1Y1LPn7v9oRCyOQVdUUWJ1bHTYSpZ1p27M5mFXsUtPTo7MC+ED7ptGbUIczMlvQ7fqsh4RFxlnetzDch2ZzMakYLRElLHvmyj/AoO5IqD0lEc/ki1fIkhxIAAgYFO81iOT01pRPT03YyyNYCzC2KUEN6+E7My8AnafrxPuIsB/9qWQt02YtXCqT5uhI5ybDHkmdviuXBOsHI1ls2/yT2uYClRmQmsErwBho+bpgmZ548',
                    t: 'MTcwNzE1NTU5Mi42MzI=',
                    m: 'q4FYKyp6fE7ztnhtR6GvOoHoqfeRomWPosFxx9vU6DM=',
                    i1: 'ypX2qjU1TULMWdFGnkcD0g==',
                    i2: 'AOifAMi0l6s9ZqwGIBeQqA==',
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
    <script src="/cdn-cgi/challenge-platform/h/g/orchestrate/chl_api/v1?ray=850d02f5db660c47"></script>
</head>
<body class="theme-light size-normal">
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
</html>,b,c){var d=U(this.o,a);void 0===d&&(d=b);if(void 0!==d&&void 0!==c&&g(d)&&P(49))try{d=c(d)}catch(e){}void 0!==d&&(this.h[a]=d)};var Nl=function(a){return a.metadata.source_canonical_id},Ol=function(a,b,c){var d=Ll(a.target.Z);return d&&d.hasOwnProperty(b)?d[b]:c};var Pl=function(){ze.dedupe_gclid||(ze.dedupe_gclid=""+Mj());return ze.dedupe_gclid};var Ql=/^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,Rl=/^www.googleadservices.com$/,Tl=function(a){a||(a=Sl());return a.Fm?!1:a.sl||a.vl||a.wl||a.fg||a.Oe||a.Xk||a.jl?!0:!1},Sl=function(){var a={},b=fk(!0);a.Fm=!!b._up;var c=cl();a.sl=void 0!==c.aw;a.vl=void 0!==c.dc;a.wl=void 0!==c.wbraid;var d=qg(D.location.href),e=lg(d,"query",!1,void 0,"gad");a.fg=void 0!==e;if(!a.fg){var f=d.hash.replace("#",""),h=ig(f,"gad");a.fg=void 0!==h}a.Oe=void 0;if(P(56)){var l=lg(d,"query",!1,void 0,"gad_source");a.Oe=
l;if(void 0===a.Oe){var m=d.hash.replace("#",""),n=ig(m,"gad_source");a.Oe=n}}var p=F.referrer?lg(qg(F.referrer),"host"):"";a.jl=Ql.test(p);a.Xk=Rl.test(p);return a};var Ul=function(){if(xa(D.__uspapi)){var a="";try{D.__uspapi("getUSPData",1,function(b,c){if(c&&b){var d=b.uspString;d&&RegExp("^[\\da-zA-Z-]{1,20}$").test(d)&&(a=d)}})}catch(b){}return a}};function bm(a){var b=U(a.o,L.g.tb),c=U(a.o,L.g.sb);b&&!c?(a.eventName!==L.g.ka&&a.eventName!==L.g.Yd&&J(131),a.isAborted=!0):!b&&c&&(J(132),a.isAborted=!0)}function cm(a){var b=S(L.g.F)?ze.pscdl:"denied";a.h[L.g.ee]=b};var km=function(a,b,c,d){var e=Yb(),f;if(1===e)a:{var h=Le;h=h.toLowerCase();for(var l="https://"+h,m="http://"+h,n=1,p=F.getElementsByTagName("script"),q=0;q<p.length&&100>q;q++){var r=p[q].src;if(r){r=r.toLowerCase();if(0===r.indexOf(m)){f=3;break a}1===n&&0===r.indexOf(l)&&(n=2)}}f=n}else f=e;return(2===f||d||"http:"!=D.location.protocol?a:b)+c};function xm(a){return{getDestinationId:function(){return a.target.Z},getEventName:function(){return a.eventName},setEventName:function(b){a.eventName=b},getHitData:function(b){return a.h[b]},setHitData:function(b,c){a.h[b]=c},setHitDataIfNotDefined:function(b,c){void 0===a.h[b]&&(a.h[b]=c)},copyToHitData:function(b,c){a.copyToHitData(b,c)},getMetadata:function(b){return a.metadata[b]},setMetadata:function(b,c){a.metadata[b]=c},isAborted:function(){return a.isAborted},abort:function(){a.isAborted=
!0},getFromEventContext:function(b){return U(a.o,b)},tn:function(){return a},getHitKeys:function(){return Object.keys(a.h)}}};var Em=function(){var a=D.screen;return{width:a?a.width:0,height:a?a.height:0}},Fm=function(a){if(F.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!D.getComputedStyle)return!0;var c=D.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var l=h.indexOf("opacity(");0<=l&&(h=h.substring(l+8,h.indexOf(")",l)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-1)),f=Math.min(h,
f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=D.getComputedStyle(d,null))}return!1};var Fn={vk:Number('')||500,ek:Number('')||5E3,Sh:Number('')||10,jj:Number('')||5E3};function Gn(a){return a.performance&&a.performance.now()||Date.now()}
var Hn=function(a,b){var c;return c};var In="https://"+ye.Cc,Jn=In+"/gtm/static/",Kn=Number('')||5,Ln=Number('')||50,Mn=In,Nn=Jn,On=!1,Pn=0,Qn=Ba();function Zn(){var a=!1;return a}
function $n(a){}
function bo(a,b,c){}
function Vn(a,b,c,d){}
function ao(a,b,c,d,e){}
function co(a,b,c,d){}
function eo(a,b,c,d){}
function fo(a){var b={},c=["tv.1"],d=0;
var u=c.join("~");return{P:b,Te:u}}var go=void 0;function ho(a){var b=[];return b};Bb();ti()||yb("iPod");yb("iPad");!yb("Android")||Cb()||Bb()||Ab()||yb("Silk");Cb();!yb("Safari")||Cb()||(zb()?0:yb("Coast"))||Ab()||(zb()?0:yb("Edge"))||(zb()?xb("Microsoft Edge"):yb("Edg/"))||(zb()?xb("Opera"):yb("OPR"))||Bb()||yb("Silk")||yb("Android")||ui();var io={},jo=null,ko=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}var f=4;void 0===f&&(f=0);if(!jo){jo={};for(var h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),l=["+/=","+/","-_=","-_.","-_"],m=0;5>m;m++){var n=h.concat(l[m].split(""));io[m]=n;for(var p=0;p<n.length;p++){var q=n[p];void 0===jo[q]&&(jo[q]=p)}}}for(var r=io[f],t=Array(Math.floor(b.length/3)),u=r[64]||"",v=0,w=0;v<b.length-2;v+=3){var x=b[v],
y=b[v+1],z=b[v+2],B=r[x>>2],C=r[(x&3)<<4|y>>4],I=r[(y&15)<<2|z>>6],G=r[z&63];t[w++]=""+B+C+I+G}var E=0,M=u;switch(b.length-v){case 2:E=b[v+1],M=r[(E&15)<<2]||u;case 1:var K=b[v];t[w]=""+r[K>>2]+r[(K&3)<<4|E>>4]+M+u}return t.join("")};Object.freeze(new function(){});Object.freeze(new function(){});var lo="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function mo(){var a;return null!=(a=D.google_tag_data)?a:D.google_tag_data={}}function no(){var a=D.google_tag_data,b;if(null!=a&&a.uach){var c=a.uach,d=Object.assign({},c);c.fullVersionList&&(d.fullVersionList=c.fullVersionList.slice(0));b=d}else b=null;return b}function oo(){var a,b;return null!=(b=null==(a=D.google_tag_data)?void 0:a.uach_promise)?b:null}
function po(){var a,b;return"function"===typeof(null==(a=D.navigator)?void 0:null==(b=a.userAgentData)?void 0:b.getHighEntropyValues)}function qo(){if(!po())return null;var a=mo();if(a.uach_promise)return a.uach_promise;var b=D.navigator.userAgentData.getHighEntropyValues(lo).then(function(c){null!=a.uach||(a.uach=c);return c});return a.uach_promise=b};function wo(){return"attribution-reporting"}function xo(a){var b;b=void 0===b?document:b;var c;return!(null==(c=b.featurePolicy)||!c.allowedFeatures().includes(a))};var yo=!1;function zo(){if(xo("join-ad-interest-group")&&xa(Pb.joinAdInterestGroup))return!0;yo||(Ci('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'),yo=!0);return xo("join-ad-interest-group")&&xa(Pb.joinAdInterestGroup)}
function Ao(a,b){var c=void 0;try{c=F.querySelector('iframe[data-tagging-id="'+b+'"]')}catch(e){}if(c){var d=Number(c.dataset.loadTime);if(d&&6E4>La()-d){gb("TAGGING",9);return}try{c.parentNode.removeChild(c)}catch(e){}c=void 0}else try{if(50<=F.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length){gb("TAGGING",10);return}}catch(e){}Zb(a,void 0,{allow:"join-ad-interest-group"},{taggingId:b,loadTime:La()},c)}function Bo(){return"https://td.doubleclick.net"};var Co=RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),Do=/^~?[\w-]+(?:\.~?[\w-]+)*$/,Eo=/^\d+\.fls\.doubleclick\.net$/,Fo=/;gac=([^;?]+)/,Go=/;gacgb=([^;?]+)/,Ho=/;gclaw=([^;?]+)/,Io=/;gclgb=([^;?]+)/;
function Jo(a,b){if(Eo.test(F.location.host)){var c=F.location.href.match(b);return c&&2==c.length&&c[1].match(Co)?decodeURIComponent(c[1]):""}var d=[],e;for(e in a){for(var f=[],h=a[e],l=0;l<h.length;l++)f.push(h[l].U);d.push(e+":"+f.join(","))}return 0<d.length?d.join(";"):""}
var Ko=function(a,b,c){var d=Jk(Ik())?Ek("_gac_gb",!0):{},e=[],f=!1,h;for(h in d){var l=pl("_gac_gb_"+h,a,b,c);f=f||0!==l.length&&l.some(function(m){return 1===m});e.push(h+":"+l.join(","))}return{Wk:f?e.join(";"):"",Vk:Jo(d,Go)}};function Lo(a,b,c){if(Eo.test(F.location.host)){var d=F.location.href.match(c);if(d&&2==d.length&&d[1].match(Do))return[{U:d[1]}]}else return Lk((a||"_gcl")+b);return[]}
var Mo=function(a){return Lo(a,"_aw",Ho).map(function(b){return b.U}).join(".")},No=function(a){return Lo(a,"_gb",Io).map(function(b){return b.U}).join(".")},Oo=function(a,b){var c=pl((b&&b.prefix||"_gcl")+"_gb",a,b);return 0===c.length||c.every(function(d){return 0===d})?"":c.join(".")};var Dp={D:{Hg:"ads_conversion_hit",Bc:"container_execute_start",Lg:"container_setup_end",ff:"container_setup_start",Jg:"container_blocking_end",Kg:"container_execute_end",Mg:"container_yield_end",hf:"container_yield_start",Lh:"event_execute_end",Kh:"event_evaluation_end",Kf:"event_evaluation_start",Mh:"event_setup_end",nd:"event_setup_start",Nh:"ga4_conversion_hit",pd:"page_load",dn:"pageview",Ab:"snippet_load",bi:"tag_callback_error",di:"tag_callback_failure",ei:"tag_callback_success",fi:"tag_execute_end",
vc:"tag_execute_start"}};function Ep(){function a(c,d){var e=ib(d);e&&b.push([c,e])}var b=[];a("u","GTM");a("ut","TAGGING");a("h","HEALTH");return b};var Fp=!1;
var mq=function(a,b){},nq=function(a,b){},oq=function(a,b){},pq=function(a,b){},qq=function(){var a={};return a},eq=function(a){a=void 0===a?!0:a;var b={};return b},rq=function(){},sq=function(a,b){},tq=function(a,b,c){};var uq=function(a,b){var c,d=D.GooglebQhCsO;d||(d={},D.GooglebQhCsO=d);c=d;if(c[a])return!1;c[a]=[];c[a][0]=b;return!0};var vq=function(a,b,c){var d=xi(a,"fmt");if(b){var e=xi(a,"random"),f=xi(a,"label")||"";if(!e)return!1;var h=ko(decodeURIComponent(f.replace(/\+/g," "))+":"+decodeURIComponent(e.replace(/\+/g," ")));if(!uq(h,b))return!1}d&&4!=d&&(a=zi(a,"rfmt",d));var l=zi(a,"fmt",4);Xb(l,function(){D.google_noFurtherRedirects&&b&&b.call&&(D.google_noFurtherRedirects=null,b())},void 0,c,F.getElementsByTagName("script")[0].parentElement||void 0);return!0};var Mq=function(){this.h={}},Nq=function(a,b,c){null!=c&&(a.h[b]=c)},Oq=function(a){return Object.keys(a.h).map(function(b){return encodeURIComponent(b)+"="+encodeURIComponent(a.h[b])}).join("&")},Qq=function(a,b,c,d){};function Sq(a,b){if(data.entities&&data.entities[a])return data.entities[a][b]};var Vq=function(a){var b=Ng(),c;c=void 0===c?!1:c;if(P(98))Tq().addRestriction(0,b,a,c);else{var d=Uq(b);d.entity.push(a);d._entity||(d._entity={internal:[],external:[]});c?d._entity.external.push(a):d._entity.internal.push(a)}},Wq=function(){var a=Ng();if(P(98))return Tq().getRestrictions(0,a);var b=Uq(a),c,d;return[].concat(ka((null==b?void 0:null==(c=b._entity)?void 0:c.internal)||[]),ka((null==b?void 0:null==(d=b._entity)?void 0:d.external)||[]))},Xq=function(a){var b=Ng(),c;c=void 0===c?!1:c;
if(P(98))Tq().addRestriction(1,b,a,c);else{var d=Uq(b);d.event&&(d.event.push(a),d._event||(d._event={internal:[],external:[]}),c?d._event.external.push(a):d._event.internal.push(a))}},Yq=function(){var a=Ng();if(P(98))return Tq().getRestrictions(1,a);var b=Uq(a),c,d;return[].concat(ka((null==b?void 0:null==(c=b._event)?void 0:c.internal)||[]),ka((null==b?void 0:null==(d=b._event)?void 0:d.external)||[]))};
function Uq(a){var b=Tq(),c=b.container[a];c||(c={entity:[],event:[],_entity:{internal:[],external:[]},_event:{internal:[],external:[]}},b.container[a]=c);return c}var Zq=function(){this.container={};this.h={}},$q=function(a,b){var c=a.container[b];c||(c={entity:[],event:[],_entity:{internal:[],external:[]},_event:{internal:[],external:[]}},a.container[b]=c);return c};
Zq.prototype.addRestriction=function(a,b,c,d){d=void 0===d?!1:d;if(!d||!this.h[b]){var e=$q(this,b);0===a?d?e._entity.external.push(c):e._entity.internal.push(c):1===a&&(d?e._event.external.push(c):e._event.internal.push(c))}};
Zq.prototype.getRestrictions=function(a,b){var c=$q(this,b);if(0===a){var d,e;return[].concat(ka((null==c?void 0:null==(d=c._entity)?void 0:d.internal)||[]),ka((null==c?void 0:null==(e=c._entity)?void 0:e.external)||[]))}if(1===a){var f,h;return[].concat(ka((null==c?void 0:null==(f=c._event)?void 0:f.internal)||[]),ka((null==c?void 0:null==(h=c._event)?void 0:h.external)||[]))}return[]};
Zq.prototype.getExternalRestrictions=function(a,b){var c=$q(this,b),d,e;return 0===a?(null==c?void 0:null==(d=c._entity)?void 0:d.external)||[]:(null==c?void 0:null==(e=c._event)?void 0:e.external)||[]};Zq.prototype.removeExternalRestrictions=function(a){var b=$q(this,a);b._event&&(b._event.external=[]);b._entity&&(b._entity.external=[]);this.h[a]=!0};function Tq(){var a=ze.r;a||(a=new Zq,ze.r=a);return a};var ar=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),br={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],gaawc:["googtag"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},cr={cl:["ecl"],customPixels:["customScripts",
"html"],ecl:["cl"],ehl:["hl"],gaawc:["googtag"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},dr="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),gr=function(a){var b=Ye("gtm.allowlist")||Ye("gtm.whitelist");b&&J(9);Fe&&(b=["google","gtagfl",
"lcl","zone"]);er()&&(Fe?J(116):(J(117),fr&&(b=[],window.console&&window.console.log&&window.console.log("GTM blocked. See go/13687728."))));var c=b&&Pa(Ia(b),br),d=Ye("gtm.blocklist")||Ye("gtm.blacklist");d||(d=Ye("tagTypeBlacklist"))&&J(3);d?J(8):d=[];er()&&(d=Ia(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Ia(d).indexOf("google")&&J(2);var e=d&&Pa(Ia(d),cr),f={};return function(h){var l=h&&h[oc.ma];if(!l||"string"!=typeof l)return!0;l=l.replace(/^_*/,"");if(void 0!==f[l])return f[l];
var m=Pe[l]||[],n=a(l,m);if(!P(84))for(var p=Wq(),q=0;q<p.length;q++)try{n=n&&p[q](l,m)}catch(y){n=!1}if(b){var r;if(r=n)a:{if(0>c.indexOf(l))if(m&&0<m.length)for(var t=0;t<m.length;t++){if(0>c.indexOf(m[t])){J(11);r=!1;break a}}else{r=!1;break a}r=!0}n=r}var u=!1;if(d){var v=0<=e.indexOf(l);if(v)u=v;else{var w=Da(e,m||[]);w&&J(10);u=w}}var x=!n||u;x||!(0<=m.indexOf("sandboxedScripts"))||c&&-1!==c.indexOf("sandboxedScripts")||(x=Da(e,dr));return f[l]=x}},fr=!1;
fr=!0;var er=function(){return ar.test(D.location&&D.location.hostname)},hr=function(){if(Eg){var a=function(b){var c={};c[oc.ma]="__"+b;for(var d in void 0)(void 0).hasOwnProperty(d)&&(c["vtp_"+d]=(void 0)[d]);var e;if(bd(c)){var f=c[oc.ma];if(!f)throw"Error: No function name given for function call.";var h=Rc[f];e=!!h&&!!h.runInSiloedMode}else e=!!Sq(c[oc.ma],4);return e};P(84)?Vq(function(b){return a(b.entityId)}):Vq(a)}};
var Fr=function(a,b,c,d){if(!ir()&&!Tg(a)){var e="?id="+encodeURIComponent(a)+"&l="+ye.aa,f=0===a.indexOf("GTM-");f||(e+="&cx=c");P(37)&&(e+="&gtm="+tj());var h=vg();h&&(e+="&sign="+ye.Fe);var l=c?"/gtag/js":"/gtm.js",m=ug()?tg(b,l+e):void 0;if(!m){var n=ye.Cc+l;h&&Qb&&f?(n=Qb.replace(/^(?:https?:\/\/)?/i,"").split(/[?#]/)[0],m=km("https://","http://",n+e)):m=Se.s?Se.C+l+e:km("https://","http://",n+e)}var p=a;d.siloed&&(Vg({ctid:p,isDestination:!1}),p=Hg(p));var q=p,r=Ug();Ag().container[q]={state:1,
context:d,parent:r};Bg({ctid:q,isDestination:!1});Xb(m)}},Mr=function(a,b,c){var d;if(d=!ir()){var e=Ag().destination[a];d=!(e&&e.state)}if(d)if(Wg())Ag().destination[a]={state:0,transportUrl:b,context:c,parent:Ug()},Bg({ctid:a,isDestination:!0}),J(91);else{var f="/gtag/destination?id="+encodeURIComponent(a)+"&l="+ye.aa+"&cx=c";P(37)&&(f+="&gtm="+tj());vg()&&(f+="&sign="+ye.Fe);var h=ug()?tg(b,f):void 0;h||(h=Se.s?Se.C+f:km("https://","http://",ye.Cc+f));var l=a;c.siloed&&(Vg({ctid:l,isDestination:!0}),
l=Hg(l));Ag().destination[l]={state:1,context:c,parent:Ug()};Bg({ctid:l,isDestination:!0});Xb(h)}};function ir(){if(rj()){return!0}return!1};var Nr=!1,Or=0,Pr=[];function Qr(a){if(!Nr){var b=F.createEventObject,c="complete"==F.readyState,d="interactive"==F.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Nr=!0;for(var e=0;e<Pr.length;e++)H(Pr[e])}Pr.push=function(){for(var f=0;f<arguments.length;f++)H(arguments[f]);return 0}}}function Rr(){if(!Nr&&140>Or){Or++;try{F.documentElement.doScroll("left"),Qr()}catch(a){D.setTimeout(Rr,50)}}}var Sr=function(a){Nr?a():Pr.push(a)};var Tr=function(a,b){return{entityType:1,indexInOriginContainer:a,nameInOriginContainer:b,originContainerId:Mg()}};var Vr=function(a,b){this.h=!1;this.J=[];this.M={tags:[]};this.T=!1;this.s=this.C=0;Ur(this,a,b)},Wr=function(a,b,c,d){if(Ce.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Ya(d)&&(e=A(d,e));e.id=c;e.status="timeout";return a.M.tags.push(e)-1},Xr=function(a,b,c,d){var e=a.M.tags[b];e&&(e.status=c,e.executionTime=d)},Yr=function(a){if(!a.h){for(var b=a.J,c=0;c<b.length;c++)b[c]();a.h=!0;a.J.length=0}},Ur=function(a,b,c){void 0!==b&&Zr(a,b);c&&D.setTimeout(function(){return Yr(a)},Number(c))},Zr=
function(a,b){var c=Na(function(){return H(function(){b(Mg(),a.M)})});a.h?c():a.J.push(c)},$r=function(a){a.C++;return Na(function(){a.s++;a.T&&a.s>=a.C&&Yr(a)})},as=function(a){a.T=!0;a.s>=a.C&&Yr(a)};var bs={},ds=function(){return D[cs()]},es=!1;var fs=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(Ka());D[b]=c}return D[b]},gs=function(a){if(Hf()){var b=ds();b(a+"require","linker");b(a+"linker:passthrough",!0)}};
function cs(){return D.GoogleAnalyticsObject||"ga"}
var hs=function(a){if(bs[a]||es)return;var b=D[cs()];xa(b)&&(b("provide",a,wa),bs[a]=!0);},is=function(a,b){return function(){var c=ds(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var h=f.get("hitPayload"),l=f.get("hitCallback"),m=0>h.indexOf("&tid="+b);m&&(f.set("hitPayload",h.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+b),!0),f.set("hitCallback",void 0,!0));e(f);m&&(f.set("hitPayload",
h,!0),f.set("hitCallback",l,!0),f.set("_x_19",void 0,!0),e(f))})}}};var ns=["es","1"],os={},ps={};function qs(a,b){if(fh){var c;c=b.match(/^(gtm|gtag)\./)?encodeURIComponent(b):"*";os[a]=[["e",c],["eid",a]];qh(a)}}function rs(a){var b=a.eventId,c=a.Zb;if(!os[b])return[];var d=[];ps[b]||d.push(ns);d.push.apply(d,ka(os[b]));c&&(ps[b]=!0);return d};var ss={};function ts(a,b){fh&&(ss[a]=ss[a]||{},ss[a][b]=(ss[a][b]||0)+1)}function us(a){var b=a.eventId,c=a.Zb,d=ss[b]||{},e=[],f;for(f in d)d.hasOwnProperty(f)&&e.push(""+f+d[f]);c&&delete ss[b];return e.length?[["md",e.join(".")]]:[]};var vs={},ws={};function xs(a,b,c){if(fh&&b){var d=yg(b);vs[a]=vs[a]||[];vs[a].push(c+d);var e=(bd(b)?"1":"2")+d;ws[a]=ws[a]||[];ws[a].push(e);qh(a)}}function ys(a){var b=a.eventId,c=a.Zb,d=[],e=vs[b]||[];e.length&&d.push(["tr",e.join(".")]);var f=ws[b]||[];f.length&&d.push(["ti",f.join(".")]);c&&(delete vs[b],delete ws[b]);return d};function zs(a,b,c,d){var e=Pc[a],f=As(a,b,c,d);if(!f)return null;var h=Zc(e[oc.ai],c,[]);if(h&&h.length){var l=h[0];f=zs(l.index,{onSuccess:f,onFailure:1===l.ri?b.terminate:f,terminate:b.terminate},c,d)}return f}
function As(a,b,c,d){function e(){if(f[oc.jk])l();else{var w=$c(f,c,[]),x=w[oc.aj];if(null!=x)for(var y=0;y<x.length;y++)if(!S(x[y])){l();return}var z=Wr(c.Nb,String(f[oc.ma]),Number(f[oc.ud]),w[oc.kk]),B=!1;w.vtp_gtmOnSuccess=function(){if(!B){B=!0;var G=La()-I;xs(c.id,Pc[a],"5");Xr(c.Nb,z,"success",G);P(15)&&tq(c,f,Dp.D.ei);h()}};w.vtp_gtmOnFailure=function(){if(!B){B=!0;var G=La()-I;xs(c.id,Pc[a],"6");Xr(c.Nb,z,"failure",G);P(15)&&tq(c,f,Dp.D.di);l()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=
c.id;c.priorityId&&(w.vtp_gtmPriorityId=c.priorityId);xs(c.id,f,"1");var C=function(){jf(3);var G=La()-I;xs(c.id,f,"7");Xr(c.Nb,z,"exception",G);P(15)&&tq(c,f,Dp.D.bi);B||(B=!0,l())};P(15)&&sq(c,f);var I=La();try{Yc(w,{event:c,index:a,type:1})}catch(G){C(G)}P(15)&&tq(c,f,Dp.D.fi)}}var f=Pc[a],h=b.onSuccess,l=b.onFailure,m=b.terminate;if(c.isBlocked(f))return null;var n=Zc(f[oc.gi],c,[]);if(n&&n.length){var p=n[0],q=zs(p.index,{onSuccess:h,onFailure:l,terminate:m},c,d);if(!q)return null;h=q;l=2===
p.ri?m:q}if(f[oc.Vh]||f[oc.mk]){var r=f[oc.Vh]?Qc:c.ym,t=h,u=l;if(!r[a]){e=Na(e);var v=Bs(a,r,e);h=v.onSuccess;l=v.onFailure}return function(){r[a](t,u)}}return e}function Bs(a,b,c){var d=[],e=[];b[a]=Cs(d,e,c);return{onSuccess:function(){b[a]=Ds;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=Es;for(var f=0;f<e.length;f++)e[f]()}}}function Cs(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ds(a){a()}function Es(a,b){b()};var Gs=function(a,b){return 1===arguments.length?Fs("config",a):Fs("config",a,b)},Hs=function(a,b,c){c=c||{};c[L.g.Kb]=a;return Fs("event",b,c)};function Fs(a){return arguments}var Is=function(){this.h=[];this.s=[]};Is.prototype.enqueue=function(a,b,c){var d=this.h.length+1;a["gtm.uniqueEventId"]=b;a["gtm.priorityId"]=d;c.eventId=b;c.fromContainerExecution=!0;c.priorityId=d;var e={message:a,notBeforeEventId:b,priorityId:d,messageContext:c};this.h.push(e);for(var f=0;f<this.s.length;f++)try{this.s[f](e)}catch(h){}};Is.prototype.listen=function(a){this.s.push(a)};
Is.prototype.get=function(){for(var a={},b=0;b<this.h.length;b++){var c=this.h[b],d=a[c.notBeforeEventId];d||(d=[],a[c.notBeforeEventId]=d);d.push(c)}return a};Is.prototype.prune=function(a){for(var b=[],c=[],d=0;d<this.h.length;d++){var e=this.h[d];e.notBeforeEventId===a?b.push(e):c.push(e)}this.h=c;return b};var Ks=function(a,b,c){c.eventMetadata=c.eventMetadata||{};c.eventMetadata.source_canonical_id=Fg.Je;Js().enqueue(a,b,c)},Ms=function(){var a=Ls;Js().listen(a)};
function Js(){var a=ze.mb;a||(a=new Is,ze.mb=a);return a}
var Us=function(a){var b=ze.zones;return b?b.getIsAllowedFn(Ig(),a):function(){return!0}},Vs=function(a){var b=ze.zones;return b?b.isActive(Ig(),a):!0},Ws=function(){P(83)?Xq(function(a){return Vs(a.originalEventData["gtm.uniqueEventId"])}):Xq(function(a,b){return Vs(b)});P(84)&&P(85)&&Vq(function(a){var b=a.entityId,c=a.securityGroups;return Us(a.originalEventData["gtm.uniqueEventId"])(b,c)})};var Zs=function(a,b){for(var c=[],d=0;d<Pc.length;d++)if(a[d]){var e=Pc[d];var f=$r(b.Nb);try{var h=zs(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(h){var l=e[oc.ma];if(!l)throw"Error: No function name given for function call.";var m=Rc[l];c.push({Ri:d,Ei:(m?m.priorityOverride||0:0)||Sq(e[oc.ma],1)||0,execute:h})}else Xs(d,b),f()}catch(p){f()}}c.sort(Ys);for(var n=0;n<c.length;n++)c[n].execute();return 0<c.length};
function Ys(a,b){var c,d=b.Ei,e=a.Ei;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Ri,l=b.Ri;f=h>l?1:h<l?-1:0}return f}
function Xs(a,b){if(fh){var c=function(d){var e=b.isBlocked(Pc[d])?"3":"4",f=Zc(Pc[d][oc.ai],b,[]);f&&f.length&&c(f[0].index);xs(b.id,Pc[d],e);var h=Zc(Pc[d][oc.gi],b,[]);h&&h.length&&c(h[0].index)};c(a)}}var bt=!1,$s;
var gt=function(a){var b=a["gtm.uniqueEventId"],c=a["gtm.priorityId"],d=a.event;if(P(15)){}if("gtm.js"===d){if(bt)return!1;bt=!0}var e,f=!1,h=Yq(),l;if(P(83)){var m=A(a);l=h.every(function(w){return w({originalEventData:m})})}else l=h.every(function(w){return w(d,b)});if(l)e=Us(b);else{if("gtm.js"!==d&&"gtm.init"!==d&&"gtm.init_consent"!==
d)return!1;f=!0;e=Us(Number.MAX_SAFE_INTEGER)}qs(b,d);var n=a.eventCallback,p=a.eventTimeout,q=A(a),r={id:b,priorityId:c,name:d,isBlocked:ct(e,q,f),ym:[],logMacroError:function(){J(6);jf(0)},cachedModelValues:dt(),Nb:new Vr(function(){if(P(15)){}n&&n.apply(n,[].slice.call(arguments,0))},p),originalEventData:q};P(28)&&(r.reportMacroDiscrepancy=ts);P(15)&&oq(r.id,r.name);var t=ed(r);P(15)&&pq(r.id,r.name);f&&(t=et(t));if(P(15)){}var u=Zs(t,r),v=!1;as(r.Nb);"gtm.js"!==d&&"gtm.sync"!==d||hs(Mg());return ft(t,u)||v};function dt(){var a={};a.event=bf("event",1);a.ecommerce=bf("ecommerce",1);a.gtm=bf("gtm");a.eventModel=bf("eventModel");return a}
function ct(a,b,c){var d=gr(a);return P(84)?function(e){if(d(e))return!0;var f=e&&e[oc.ma];if(!f||"string"!=typeof f)return!0;f=f.replace(/^_*/,"");var h=Wq(),l=b;c&&(l=A(b),l["gtm.uniqueEventId"]=Number.MAX_SAFE_INTEGER);for(var m=Pe[f]||[],n=ia(h),p=n.next();!p.done;p=n.next()){var q=p.value;try{if(!q({entityId:f,securityGroups:m,originalEventData:l}))return!0}catch(r){return!0}}return!1}:d}
function et(a){for(var b=[],c=0;c<a.length;c++)if(a[c]){var d=String(Pc[c][oc.ma]);if(Be[d]||void 0!==Pc[c][oc.nk]||Sq(d,2))b[c]=!0}return b}function ft(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Pc[c]&&!Ce[String(Pc[c][oc.ma])])return!0;return!1}var ht={},it={},jt=function(a,b){for(var c=[],d=[],e={},f=0;f<a.length;e={zg:void 0,eg:void 0},f++){var h=a[f];if(0<=h.indexOf("-")){if(e.zg=dg(h,b),e.zg){var l=Kg();Aa(l,function(r){return function(t){return r.zg.Z===t}}(e))?c.push(h):d.push(h)}}else{var m=ht[h]||[];e.eg={};m.forEach(function(r){return function(t){return r.eg[t]=!0}}(e));for(var n=Ig(),p=0;p<n.length;p++)if(e.eg[n[p]]){c=c.concat(Kg());break}var q=it[h]||[];q.length&&(c=c.concat(q))}}return{Ql:c,Sl:d}},kt=function(a){k(ht,function(b,
c){var d=c.indexOf(a);0<=d&&c.splice(d,1)})},lt=function(a){k(it,function(b,c){var d=c.indexOf(a);0<=d&&c.splice(d,1)})};var mt="HA GF G UA AW DC MC".split(" "),nt=!1,ot=!1;function pt(a,b){a.hasOwnProperty("gtm.uniqueEventId")||Object.defineProperty(a,"gtm.uniqueEventId",{value:Qe()});b.eventId=a["gtm.uniqueEventId"];b.priorityId=a["gtm.priorityId"];return{eventId:b.eventId,priorityId:b.priorityId}}var qt=void 0,rt=void 0;function st(a,b,c){var d=A(a);d.eventId=void 0;d.inheritParentConfig=void 0;Object.keys(b).some(function(f){return void 0!==b[f]})&&J(136);var e=A(b);A(c,e);Ks(Gs(Ig()[0],e),a.eventId,d)}
function tt(a){for(var b=ia([L.g.Zc,L.g.Lb]),c=b.next();!c.done;c=b.next()){var d=c.value,e=a&&a[d]||ei.C[d];if(e)return e}}
var ut={config:function(a,b){var c=P(29),d=pt(a,b);if(!(2>a.length)&&g(a[1])){var e={};if(2<a.length){if(void 0!=a[2]&&!Ya(a[2])||3<a.length)return;e=a[2]}var f=dg(a[1],b.isGtmEvent);if(f){var h,l,m;a:{if(!Dg.od){var n=Og(Ug());if(Yg(n)){var p=n.parent,q=p.isDestination;m={Xl:Og(p),Pl:q};break a}}m=void 0}var r=m;r&&(h=r.Xl,l=r.Pl);qs(d.eventId,"gtag.config");var t=f.Z,u=f.id!==t;if(u?-1===Kg().indexOf(t):-1===Ig().indexOf(t)){if(!(c&&b.inheritParentConfig||e[L.g.tb])){var v=tt(e);if(u)Mr(t,v,{source:2,
fromContainerExecution:b.fromContainerExecution});else if(c&&void 0!==h&&-1!==h.containers.indexOf(t)){var w=e;qt?st(b,w,qt):rt||(rt=A(w))}else Fr(t,v,!0,{source:2,fromContainerExecution:b.fromContainerExecution})}}else{if(h&&(J(128),l&&J(130),c&&b.inheritParentConfig)){var x;var y=e;rt?(st(b,rt,y),x=!1):(!y[L.g.Mb]&&Ee&&qt||(qt=A(y)),x=!0);x&&h.containers&&h.containers.join(",");return}if(Ee&&!u&&!e[L.g.Mb]){var z=ot;ot=!0;if(z)return}nt||J(43);if(!b.noTargetGroup)if(u){lt(f.id);var B=f.id,C=e[L.g.se]||
"default";C=String(C).split(",");for(var I=0;I<C.length;I++){var G=it[C[I]]||[];it[C[I]]=G;0>G.indexOf(B)&&G.push(B)}}else{kt(f.id);var E=f.id,M=e[L.g.se]||"default";M=M.toString().split(",");for(var K=0;K<M.length;K++){var N=ht[M[K]]||[];ht[M[K]]=N;0>N.indexOf(E)&&N.push(E)}}delete e[L.g.se];var T=b.eventMetadata||{};T.hasOwnProperty("is_external_event")||(T.is_external_event=!b.fromContainerExecution);b.eventMetadata=T;delete e[L.g.Qc];for(var Q=u?[f.id]:Kg(),R=0;R<Q.length;R++){var da=e,aa=Q[R],
W=A(b),ra=dg(aa,W.isGtmEvent);ra&&ei.push("config",[da],ra,W)}}}}},consent:function(a,b){if(3===a.length){J(39);var c=pt(a,b),d=a[1],e=a[2];b.fromContainerExecution||(e[L.g.K]&&J(139),e[L.g.Aa]&&J(140));"default"===d?Uf(e):"update"===d?Vf(e,c):"declare"===d?b.fromContainerExecution&&Tf(e):P(60)&&"core_platform_services"===d&&Wf(e)}},event:function(a,b){var c=a[1];if(!(2>a.length)&&g(c)){var d;if(2<a.length){if(!Ya(a[2])&&void 0!=a[2]||3<a.length)return;d=a[2]}var e=d,f={},h=(f.event=c,f);e&&(h.eventModel=
A(e),e[L.g.Qc]&&(h.eventCallback=e[L.g.Qc]),e[L.g.oe]&&(h.eventTimeout=e[L.g.oe]));var l=pt(a,b),m=l.eventId,n=l.priorityId;h["gtm.uniqueEventId"]=m;n&&(h["gtm.priorityId"]=n);if("optimize.callback"===c)return h.eventModel=h.eventModel||{},h;var p;var q=d,r=q&&q[L.g.Kb];void 0===r&&(r=Ye(L.g.Kb,2),void 0===r&&(r="default"));if(g(r)||za(r)){var t;b.isGtmEvent?t=g(r)?[r]:r:t=r.toString().replace(/\s+/g,"").split(",");var u=jt(t,b.isGtmEvent),v=u.Ql,w=u.Sl;if(w.length)for(var x=tt(q),y=0;y<w.length;y++){var z=
dg(w[y],b.isGtmEvent);z&&Mr(z.Z,x,{source:3,fromContainerExecution:b.fromContainerExecution})}p=fg(v,b.isGtmEvent)}else p=void 0;var B=p;if(B){qs(m,c);for(var C=[],I=0;I<B.length;I++){var G=B[I],E=A(b);if(-1!==mt.indexOf(Pg(G.prefix))){var M=A(d),K=E.eventMetadata||{};K.hasOwnProperty("is_external_event")||(K.is_external_event=!E.fromContainerExecution);E.eventMetadata=K;delete M[L.g.Qc];fi(c,M,G.id,E)}C.push(G.id)}h.eventModel=h.eventModel||{};0<B.length?h.eventModel[L.g.Kb]=C.join():delete h.eventModel[L.g.Kb];
nt||J(43);void 0===b.noGtmEvent&&b.eventMetadata&&b.eventMetadata.syn_or_mod&&(b.noGtmEvent=!0);h.eventModel[L.g.sb]&&(b.noGtmEvent=!0);return b.noGtmEvent?void 0:h}}},get:function(a,b){J(53);if(4===a.length&&g(a[1])&&g(a[2])&&xa(a[3])){var c=dg(a[1],b.isGtmEvent),d=String(a[2]),e=a[3];if(c){nt||J(43);var f=tt();if(!Aa(Kg(),function(l){return c.Z===l}))Mr(c.Z,f,{source:4,fromContainerExecution:b.fromContainerExecution});else if(-1!==mt.indexOf(Pg(c.prefix))){pt(a,b);var h={};Qf(A((h[L.g.fb]=d,h[L.g.qb]=
e,h)));gi(d,function(l){H(function(){return e(l)})},c.id,b)}}}},js:function(a,b){if(2==a.length&&a[1].getTime){nt=!0;var c=pt(a,b),d=c.eventId,e=c.priorityId,f={};return f.event="gtm.js",f["gtm.start"]=a[1].getTime(),f["gtm.uniqueEventId"]=d,f["gtm.priorityId"]=e,f}},policy:function(){},set:function(a,b){var c;2==a.length&&Ya(a[1])?c=A(a[1]):3==a.length&&g(a[1])&&(c={},Ya(a[2])||za(a[2])?c[a[1]]=A(a[2]):c[a[1]]=a[2]);if(c){var d=pt(a,b),e=d.eventId,f=d.priorityId;A(c);var h=A(c);ei.push("set",[h],
void 0,b);c["gtm.uniqueEventId"]=e;f&&(c["gtm.priorityId"]=f);P(9)&&delete c.event;b.overwriteModelFields=!0;return c}}},vt={policy:!0};var wt=function(a){var b=D[ye.aa].hide;if(b&&void 0!==b[a]&&b.end){b[a]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}},xt=function(a){var b=D[ye.aa],c=b&&b.hide;c&&c.end&&(c[a]=!0)};var zt=!1,At=[];function Bt(){if(!zt){zt=!0;for(var a=0;a<At.length;a++)H(At[a])}}var Ct=function(a){zt?H(a):At.push(a)};
var Lt=function(){try{var a,b;
var m,n=Mg(),p=Gd('script[src*="gtm/js?id='+n+'"],script[src*="optimize.js?id='+n+'"]');m=p&&0<p.length?p[0]:null;b=m?m.hasAttribute("gtm")?"gtmo":m.hasAttribute("async")?"opta":"opts":"optu";b||(b="gaoo");var q=Et(Ft,m&&m.src),r=q.Td,t=q.Ud,u=q.Ue,v=q.Ve,w=q.Ne,x=q.cf,y=q.Cd,z=q.gg,B=q.Bd;"h0"!=y||Gt||(y="h3");Ht={Cd:y,Bd:B,Uk:a,Nl:b,gg:z,Ve:v,Ne:w,cf:x,Ue:u,Td:r,Ud:t,vi:It,Si:Jt};Kt(Ht)}catch(C){}},
Mt=function(){var a=D.gaData,b=0,c=void 0;if(a)for(var d in a)if(a.hasOwnProperty(d)&&0===d.indexOf("UA-")&&a[d].hitcount){b+=a[d].hitcount;var e=Number(a[d].first_hit);e&&(!c||e<c)&&(c=e)}return{wi:b,si:c}},Et=function(a,b){var c,d,e,f,h,l,m,n,p;var q=D.performance;if(q){if(b){var r=q.getEntriesByName(b)[0];if(r){var t=q.getEntriesByType("resource"),u=0;t&&0<t.length&&(u=t[0].startTime);f=Math.round(r.startTime-u);h=Math.round(r.duration);e=t.indexOf(r);-1===e&&(e=
void 0);l=Math.round(a-(r.startTime+r.duration))}}var v=q.timing;if(v.domContentLoadedEventStart){var w=v.domContentLoadedEventStart-v.navigationStart;w&&(d=Math.round(a-w))}var x=q.getEntriesByType("paint").filter(function(C){return"first-contentful-paint"===C.name})[0];x&&(c=Math.round(a-x.startTime))}var y=D[ye.aa].hide;if(y){if(void 0===y[Mg()])m="h2";else{var z=!1;if(null===y.end)for(var B in y)if(y.hasOwnProperty(B)&&Qa(B,Mg())&&!0===y[B]){z=!0;break}m=z?"h0":"h1"}y.start&&!isNaN(y.start)&&
(q?q.timing&&(p=Math.round(a+q.timing.navigationStart-y.start)):p=a-y.start);isNaN(y.timeout)||(n=y.timeout)}return{Td:d,Ud:c,Ue:e,Ve:f,Ne:h,cf:l,Cd:m,gg:n,Bd:p}},Kt=function(a,b){b=void 0===b?"ol":b;var c=function(e,f){null!=f&&(d+=e+encodeURIComponent(f))},d=hh+"&cv=1";c("&t=",b);c("&s=",a.Cd);c("&h=",a.Bd);c("&g=",a.Uk);c("&p=",a.Nl);c("&o=",a.gg);c("&l=",function(){var e=Me;return e?Dt-Fa(e):void 0}());c("&q=",a.Ve);c("&f=",
a.Ne);c("&e=",a.cf);c("&i=",a.Ue);c("&d=",a.Td);c("&c=",a.Ud);c("&tr=",a.Cm);c("&jl=",a.Ll);c("&jf=",a.Jl);c("&ji=",a.Kl);c("&jq=",a.Ml);c("&jd=",a.Hl);c("&jx=",a.Il);c("&hc=",a.vi);c("&fh=",a.Si);d+="&sr=0.050000";c("&ps=",Nt);c("&cb=",Ba());$b(d);},Ot=!1,Dt,Ft,Gt,Nt,Ht,It,Jt;Nt=Math.random(),Ot="0.050000">Nt;var Pt=function(){if(!Ot||Dt)return;Dt=La();
Ft=jc()||Dt;Gt=!!F.querySelector("body");var a=Mt(),b=a.si;It=a.wi;Jt=b?Dt-b:void 0;Ct(Lt);},Rt=function(a){var b=Qt;if(!Ot)return;try{var c=La(),d=jc()||c,e=Mt(),f=e.wi,h=e.si,l=h?c-h:void 0;Ct(function(){var m=Et(d,b),n=m.Td,p=m.Ud,q=m.Ue,r=m.Ve,t=m.Ne,u=m.cf,v=m.Cd,w=m.Bd,x=A(Ht||{});A(a,x);A({Cd:v,Bd:w,Td:n,Ud:p,Kl:q,Ml:r,Hl:t,Il:u,vi:f,Si:l},x);Kt(x,"od")})}catch(m){}};var Tt=function(a){if(St(a))return a;this.h=a};Tt.prototype.getUntrustedMessageValue=function(){return this.h};var St=function(a){return!a||"object"!==Wa(a)||Ya(a)?!1:"getUntrustedMessageValue"in a};Tt.prototype.getUntrustedMessageValue=Tt.prototype.getUntrustedMessageValue;var Ut=0,Vt={},Wt=[],Xt=[],Yt=!1,Zt=!1;function $t(a,b){return a.messageContext.eventId-b.messageContext.eventId||a.messageContext.priorityId-b.messageContext.priorityId}var au=function(a){return D[ye.aa].push(a)},bu=function(a,b){if(!ya(b)||0>b)b=0;var c=ze[ye.aa],d=0,e=!1,f=void 0;f=D.setTimeout(function(){e||(e=!0,a());f=void 0},b);return function(){var h=c?c.subscribers:1;++d===h&&(f&&(D.clearTimeout(f),f=void 0),e||(a(),e=!0))}};
function cu(a,b){var c=a._clear||b.overwriteModelFields;k(a,function(e,f){"_clear"!==e&&(c&&af(e),af(e,f))});Me||(Me=a["gtm.start"]);Pt();var d=a["gtm.uniqueEventId"];if(!a.event)return!1;"number"!==typeof d&&(d=Qe(),a["gtm.uniqueEventId"]=d,af("gtm.uniqueEventId",d));return gt(a)}
function du(a){if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Ea(a)){var b=a[0];if("config"===b||"event"===b||"js"===b||"get"===b)return!0}return!1}
function eu(){var a;if(Xt.length)a=Xt.shift();else if(Wt.length)a=Wt.shift();else return;var b;var c=a;if(Yt||!du(c.message))b=c;else{Yt=!0;var d=c.message["gtm.uniqueEventId"];"number"!==typeof d&&(d=c.message["gtm.uniqueEventId"]=Qe());var e={},f={message:(e.event="gtm.init_consent",e["gtm.uniqueEventId"]=d-2,e),messageContext:{eventId:d-2}},h={},l={message:(h.event="gtm.init",h["gtm.uniqueEventId"]=d-1,h),messageContext:{eventId:d-1}};Wt.unshift(l,c);if(fh){var m=Fg.ctid;if(m){var n,p=Og(Ug());
n=p&&p.context;var q,r=qg(D.location.href);q=r.hostname+r.pathname;var t=n&&n.fromContainerExecution,u=n&&n.source,v=Fg.Je,w=Dg.od;fh&&(uh||(uh=q),vh.push(m+";"+v+";"+(t?1:0)+";"+(u||0)+";"+(w?1:0)))}}b=f}return b}
function fu(){for(var a=!1,b;!Zt&&(b=eu());){Zt=!0;delete Ve.eventModel;Xe();var c=b,d=c.message,e=c.messageContext;if(null==d)Zt=!1;else{if(e.fromContainerExecution)for(var f=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],h=0;h<f.length;h++){var l=f[h],m=Ye(l,1);if(za(m)||Ya(m))m=A(m);We[l]=m}try{if(xa(d))try{d.call(Ze)}catch(C){}else if(za(d)){var n=d;if(g(n[0])){var p=n[0].split("."),q=p.pop(),r=n.slice(1),t=Ye(p.join("."),2);if(null!=t)try{t[q].apply(t,r)}catch(C){}}}else{var u=
void 0,v=!1;if(Ea(d)){a:{if(d.length&&g(d[0])){var w=ut[d[0]];if(w&&(!e.fromContainerExecution||!vt[d[0]])){u=w(d,e);break a}}u=void 0}(v=u&&"set"===d[0]&&!!u.event)&&J(101)}else u=d;if(u){var x=cu(u,e);a=x||a;v&&x&&J(113)}}}finally{e.fromContainerExecution&&Xe(!0);var y=d["gtm.uniqueEventId"];if("number"===typeof y){for(var z=Vt[String(y)]||[],B=0;B<z.length;B++)Xt.push(gu(z[B]));z.length&&Xt.sort($t);delete Vt[String(y)];y>Ut&&(Ut=y)}Zt=!1}}}return!a}
function hu(){if(P(15)){var a=iu();}var b=fu();if(P(15)){}try{wt(Mg())}catch(c){}return b}
function Ls(a){if(Ut<a.notBeforeEventId){var b=String(a.notBeforeEventId);Vt[b]=Vt[b]||[];Vt[b].push(a)}else Xt.push(gu(a)),Xt.sort($t),H(function(){Zt||fu()})}function gu(a){return{message:a.message,messageContext:a.messageContext}}
var ju=function(){function a(f){var h={};if(St(f)){var l=f;f=St(l)?l.getUntrustedMessageValue():void 0;h.fromContainerExecution=!0}return{message:f,messageContext:h}}var b=Rb(ye.aa,[]),c=ze[ye.aa]=ze[ye.aa]||{};!0===c.pruned&&J(83);Vt=Js().get();Ms();Sr(function(){if(!c.gtmDom){c.gtmDom=!0;var f={};b.push((f.event="gtm.dom",f))}});Ct(function(){if(!c.gtmLoad){c.gtmLoad=!0;var f={};b.push((f.event="gtm.load",f))}});c.subscribers=(c.subscribers||0)+1;var d=b.push;b.push=function(){var f;if(0<ze.SANDBOXED_JS_SEMAPHORE){f=
[];for(var h=0;h<arguments.length;h++)f[h]=new Tt(arguments[h])}else f=[].slice.call(arguments,0);var l=f.map(function(q){return a(q)});Wt.push.apply(Wt,l);var m=d.apply(b,f),n=Math.max(100,Number("1000")||300);if(this.length>n)for(J(4),c.pruned=!0;this.length>n;)this.shift();var p="boolean"!==typeof m||m;return fu()&&p};var e=b.slice(0).map(function(f){return a(f)});Wt.push.apply(Wt,e);if(iu()){if(P(15)){}H(hu)}},iu=function(){var a=!0;return a};function ku(a){if(null==a||0===a.length)return!1;var b=Number(a),c=La();return b<c+3E5&&b>c-9E5}function lu(a){return a&&0===a.indexOf("pending:")?ku(a.substr(8)):!1};
var Gu=function(){};var Hu=function(){};Hu.prototype.toString=function(){return"undefined"};var Iu=new Hu;var mv=D.clearTimeout,nv=D.setTimeout,V=function(a,b,c,d){if(rj()){b&&H(b)}else return Xb(a,b,c,d)},ov=function(){return new Date},pv=function(){return D.location.href},qv=function(a){return lg(qg(a),"fragment")},rv=function(a){return mg(qg(a))},sv=function(a,b){return Ye(a,b||2)},tv=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=au(a)):d=au(a);return d},uv=function(a,b){D[a]=b},X=function(a,b,c){b&&
(void 0===D[a]||c&&!D[a])&&(D[a]=b);return D[a]},vv=function(a,b,c){return xj(a,b,void 0===c?!0:!!c)},wv=function(a,b,c){return 0===Gj(a,b,c)},xv=function(a,b){if(rj()){b&&H(b)}else Zb(a,b)},yv=function(a){return!!Tu(a,"init",!1)},zv=function(a){Ru(a,"init",!0)};
var Av=function(a){if(!a||a.nodeType!=Node.ELEMENT_NODE)return!1;var b=a.tagName.toUpperCase();return"SCRIPT"==b||"STYLE"==b||"LINK"==b},Bv=function(a,b,c){try{null==c?a.removeAttribute(b):a.setAttribute(b,c)}catch(d){return d}return null},Cv=function(a,b,c){var d=a.getAttribute(b);return Bv(a,b,c)?8:function(){Bv(a,b,d)}},Fv=function(a,b,c){var d,e,f=a.ownerDocument||a.document||document;c=(c||"").toLowerCase();"after"==c?(d=a.parentNode,e=a.nextSibling):"insert"==c?(d=a,e=a.firstChild):"append"==
c?(d=a,e=null):(d=a.parentNode,e=a);if(!d||d==f)return{result:1,Al:[]};var h=Dv(b,d);Ev(h,"SCRIPT");Ev(h,"NOSCRIPT");var l=[];if(h.firstChild)for(var m=h.firstChild;m;){var n=m.nextSibling;l.push(m);d.insertBefore(m,e);m=n}var p=a.nextSibling;"replace"==c&&d.removeChild(a);return{result:function(){for(;0<l.length;)d.removeChild(l.pop());"replace"==c&&d.insertBefore(a,p)},Al:l.slice()}},Gv={SELECT:[1,'<select multiple="multiple">',"</select>"],FIELDSET:[1,"<fieldset>","</fieldset>"],MAP:[1,"<map>",
"</map>"],OBJECT:[1,"<object>","</object>"],TABLE:[1,"<table>","</table>"],TBODY:[2,"<table><tbody>","</tbody></table>"],COLGROUP:[2,"<table><colgroup>","</colgroup></table>"],TR:[3,"<table><tbody><tr>","</tr></tbody></table>"]},Dv=function(a,b){var c=0,d="",e="",f=Gv[b.tagName];null!=f&&(c=f[0],d=f[1],e=f[2]);var h=b.ownerDocument.createElement("div"),l=Nb(d+(a||"")+e);1===h.nodeType&&Mb(h);h.innerHTML=Fb(l);for(var m=h;0<c;){var n=m.firstChild;if(null==n.firstChild)return b.ownerDocument.createElement("div");
m=n;c--}return m},Ev=function(a,b){for(var c=a.getElementsByTagName(b),d=[],e=c.length-1;0<=e;e--){var f=c[e];f.parentNode.removeChild(f);d.push(f)}},Hv=function(a){var b=null,c=null;try{b=new Function("element",a)}catch(d){c=d}return{ag:b,error:c}},Lv=function(a,b,c,d,e){var f=a+"{"+(b+": "+c+(d?" !important":""))+"}";e&&(f=e+"{"+f+"}");var h=document;if(h.createStyleSheet){var l=Iv(h),m=l.rules.length;l.insertRule(f,m);return function(){l.deleteRule?l.deleteRule(m):l.removeRule(m);l.insertRule("x {}",
m)}}var n=Jv(f,h);Kv(n,h);var p=n.parentNode;return function(){p.removeChild(n)}},Mv=null,Iv=function(a){if(Mv)return Mv;for(var b=a.styleSheets.length-1;0<=b;b--){var c=a.styleSheets[b];if(!c.href){var d=c.ownerNode;if(d&&d.parentNode&&"HEAD"==d.parentNode.tagName)return Mv=c}}0==a.styleSheets.length&&a.createStyleSheet();return Mv=a.styleSheets[0]},Jv=function(a,b){var c=(b||document).createElement("style");void 0!==c.cssText?c.cssText=a:c.innerHTML=a;return c},Kv=function(a,b){var c=b||document,
d=c.getElementsByTagName("head")[0];d||(d=c.createElement("head"),c.body.parentNode.insertBefore(d,c.body));d.appendChild(a)},Nv=function(a,b,c,d){if(a.style.setProperty)try{var e=a.style.getPropertyValue(b),f=a.style.getPropertyPriority(b);a.style.setProperty(b,c,d?"important":"");return function(){a.style.setProperty(b,"",f);a.style.setProperty(b,e,f)}}catch(l){}var h=a.style.cssText;a.style.cssText+=";"+(b+": "+c+(d?" !important":""))+";";return function(){a.style.cssText=h}},Pv=function(a,b,c,
d){if(Av(a))return 7;if(b)return Ov(a,b,d);if(c&&c.parentNode){var e=a.parentNode,f=a.nextSibling;try{c.parentNode.insertBefore(a,c.nextSibling)}catch(h){return 9}return function(){e.insertBefore(a,f)}}return 4},Ov=function(a,b,c){var d=a.parentNode,e=a.nextSibling;c=(c||"").toLowerCase();try{if("bottom"==c)b.appendChild(a);else if("top"==c)b.insertBefore(a,b.childNodes[0]||null);else if("before"==c)if(b.parentNode)b.parentNode.insertBefore(a,b);else return 5;else if("after"==c)if(b.parentNode)b.parentNode.insertBefore(a,
b.nextSibling);else return 5}catch(f){return 9}return function(){try{d.insertBefore(a,e)}catch(f){}}},Qv=function(a,b,c){if(0<=b&&b<a.childNodes.length){var d=a.childNodes[b];if(null!=d&&d.nodeType==Node.TEXT_NODE){var e=d.nodeValue;d.nodeValue=c;return function(){d.nodeValue=e}}return 2}return 3},Rv=function(a,b,c,d){c?d=c.nextSibling:d&&(c=d.previousSibling);if(null!=c&&c.nodeType==Node.TEXT_NODE){var e=c.nodeValue;c.nodeValue+=a;return function(){c.nodeValue=e}}if(null!=d&&d.nodeType==Node.TEXT_NODE){var f=
d.nodeValue;d.nodeValue=a+d.nodeValue;return function(){d.nodeValue=f}}var h=(b.ownerDocument||b.document||document).createTextNode(a);d?b.insertBefore(h,d):b.appendChild(h);return function(){b.removeChild(h)}},Sv=function(a){var b=document.createElement("a");a&&(b.href=a);return b};function Wv(a,b){function c(h){var l=qg(h),m=lg(l,"protocol"),n=lg(l,"host",!0),p=lg(l,"port"),q=lg(l,"path").toLowerCase().replace(/\/$/,"");if(void 0===m||"http"===m&&"80"===p||"https"===m&&"443"===p)m="web",p="default";return[m,n,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Xv(a){return Yv(a)?1:0}
function Yv(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Array.isArray(c)){for(var d=0;d<c.length;d++){var e=A(a,{});A({arg1:c[d],any_of:void 0},e);if(Xv(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b)try{for(var h=0;h<vd.length;h++){var l=vd[h];if(b[l]){f=b[l](c);break a}}}catch(v){}f=!1}return f;case "_ew":var m,n;m=String(b);n=String(c);var p=m.length-n.length;return 0<=p&&m.indexOf(n,p)===p;case "_eq":return String(b)===String(c);
case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":return 0<=String(b).split(",").indexOf(String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var r=a.ignore_case?"i":void 0;try{var t=String(c)+r,u=wd.get(t);u||(u=new RegExp(c,r),wd.set(t,u));q=u.test(b)}catch(v){q=!1}return q;case "_sw":return 0===String(b).indexOf(String(c));case "_um":return Wv(b,c)}return!1};function Zv(){var a=[["cv","1"],["rv",ye.Of],["tc",Pc.filter(function(b){return b}).length]];ye.rd&&a.push(["x",ye.rd]);Se.h&&a.push(["tag_exp",Se.h]);return a};function $v(){var a=lf();return a.length?[["exp_geo",a]]:[]}var aw;function bw(){try{null!=aw||(aw=(new Intl.DateTimeFormat).resolvedOptions().timeZone)}catch(b){}var a;return(null==(a=aw)?0:a.length)?[["exp_tz",aw]]:[]};var Fw=function(){var a=!0;bj(7)&&bj(9)&&bj(10)||(a=!1);return a};of();function Fx(){return D.gaGlobal=D.gaGlobal||{}}var Gx=function(){var a=Fx();a.hid=a.hid||Ba();return a.hid},Hx=function(a,b){var c=Fx();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var oy=function(a){this.s=a;this.C="";this.h=this.s},py=function(a,b){a.h=b;return a};function qy(a){var b=a.search;return a.protocol+"//"+a.hostname+a.pathname+(b?b+"&richsstsse":"?richsstsse")}function ry(a,b,c){if(a){var d=a||[],e=Ya(b)?b:{};if(Array.isArray(d))for(var f=0;f<d.length;f++)c(d[f],e)}};var Gy=window,Hy=document,Iy=function(a){var b=Gy._gaUserPrefs;if(b&&b.ioo&&b.ioo()||Hy.documentElement.hasAttribute("data-google-analytics-opt-out")||a&&!0===Gy["ga-disable-"+a])return!0;try{var c=Gy.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=uj("AMP_TOKEN",String(Hy.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Hy.getElementById("__gaOptOutExtension")?!0:!1};function Ry(a){k(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[L.g.Ta]||{};k(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Zy=function(a,b){};function Yy(a,b){var c=function(){};return c}
function $y(a,b,c){};var az=Yy;Object.freeze({dl:1,id:1});Object.freeze(["config","event","get","set"]);var cz=encodeURI,Y=encodeURIComponent,dz=function(a,b,c){$b(a,b,c)},ez=function(a,b){if(!a)return!1;var c=lg(qg(a),
"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1},fz=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};var iz=function(a){if(!gz[a]){gz[a]=!0;var b=D[a]||{};D[a]=b;var c=function(e){return hz[e]},d=b.get;b.get=d?function(e){return void 0!==hz[e]?hz[e]:d(e)}:c}},lz=function(a,b){hz[a]=b;for(var c=jz(a),d=0;d<c.length;d++)kz(c[d],a,b);c=jz("");for(var e=0;e<c.length;e++)kz(c[e],a,b)},kz=function(a,b,c){try{a(c,b,Mg())}catch(d){}},jz=function(a){mz[a]=mz[a]||[];return mz[a]},hz={},mz={},gz={};
var nz=function(){D.gaData=D.gaData||{};return D.gaData},oz=function(a,b){b=void 0===b?!1:b;D.gaData=D.gaData||{};var c=D.gaData,d=c.tracker_created;c.tracker_created=function(e){b&&a(e);d&&xa(d)&&d(e);b||a(e)}},pz=function(a){var b=D[cs()];try{if(xa(b)&&xa(b.getAll))return b.getAll().filter(function(c){return c.get("trackingId")===a})}catch(c){}return[]},vz=function(a,b){var c=qz[a];if(c)H(function(){return b(c)});else{var d=pz(a)[0];d?(qz[a]=d,rz||(rz=d),H(function(){return b(d)})):(sz[a]||(sz[a]=
[]),sz[a].push(b),tz||(tz=!0,oz(function(e){var f=e.get("trackingId");if(sz[f]){if(uz[f]){uz[f]=!1;var h=D[cs()];xa(h)&&h("ga.require","_"+Mg())}rz||(rz=e);qz[f]=e;for(var l=sz[f],m;void 0!==(m=l.shift());)m(e);sz[f]=void 0}})))}},wz=function(a,b,c,d){var e=D[cs()];if("data"===b.hitType&&c){var f=D.gaData,h=Number(f&&f[d]&&f[d].first_hit),l=La();!isNaN(h)&&l>h&&(b.queueTime=Math.min(2E3,l+100-h))}try{var m="t0"!=a.get("name")?a.get("name")+".send":"send";e(m,b)}catch(n){}},qz={},sz={},uz={},rz,tz=
!1,xz,yz=function(a,b,c){vz(a,function(d){H(function(){wz(d,b,c,a)})})},zz=function(){var a=!1;oz(function(){if(!a){var b=D[cs()];xa(b)&&(b("ga.require","__"+Mg()),a=!0)}},!0)},Az=function(a,b,c){var d=nz(),e=d[a]=d[a]||{};(e.pending_experiments=e.pending_experiments||{})[b]=c;e.experiments=e.experiments||{};e.experiments[b]=c},Bz=function(a){var b=nz()[a];return b?b.hitcount||0:0},Ez=function(a,b,c,d,e,f){lz(b,c);var h=d;if(d){var l=kg(D.location,"host");kg(qg(d),"host")===l&&(d="")}oz(function(q){q.set("referrer",
d?d:void 0)},!0);if(Cz(a))ze.ga4_referrer_override=h,Dz(a,b,c,e,f);else{Az(a,b,c);for(var m=pz(a),n=0;n<m.length;++n)m[n].set("referrer",d?d:void 0);if(0<Bz(a)){var p=m[0];p&&wz(p,{hitType:"data"},!0,a)}}},Cz=function(a){return!!a&&"G-"===a.substring(0,2)},Dz=function(a,b,c,d,e){if(Cz(a)){var f=Hs(a,"experiment_impression",{experiment_id:b,variant_id:c});Ks(f,d,{originatingEntity:e,deferrable:!0})}else Az(a,b,c),0<Bz(a)&&yz(a,{hitType:"data"},!0)};

var Iz=function(a,b,c){function d(){f||(f=!0,!0!==Fz&&(Fz=!1),Gz(c),wt(e))}Qt=a;var e="OPT-W78FS4B_"+b,f=!1;xt(e);D.google_optimize=D.google_optimize||{};var h=D.google_optimize;h["OPT-W78FS4B"]=h["OPT-W78FS4B"]||{};h["OPT-W78FS4B"].optimize_dyn=function(m){m.split(",").forEach(function(n){Hz[n]=!0});Fz=!0;d()};Xb(a,void 0,d);var l=D[ye.aa];D.setTimeout(function(){d()},Number(l&&l.hide&&l.hide.timeout)||1E4)},Gz=function(a){if(void 0!==Jz){var b=Jz-Kz,c,d;Fz?c=La()-Jz:d=La()-Jz;Rt({Cm:b,Ll:c,Jl:d})}Hz.optimize_ready=
!0;au({event:"opt.dyn"});au({event:"opt.js"});if(a&&0<a.length){var e={};D[ye.aa].forEach(function(f){var h=f.event;h&&(e[h]=!0)});a.forEach(function(f){e[f]&&au({event:f})})}H(function(){hs("_"+Mg())})},Lz=function(a,b,c,d,e,f,h,l,m){function n(w,x){x&&(t+="&"+w+"="+encodeURIComponent(x))}Kz=La();if(a||b||c){var p=void 0;if(b){var q=cl().aw;q&&(p=q[0])}if(f&&(a||c||p)){var r=1,t,u="OPT-W78FS4B_"+r++;xt(u);var v=function(w){xz=w;Jz=La();a||b?(t="https://www.google-analytics.com/gtm/optimize-dyn.js?id=OPT-W78FS4B",a&&n("cid",w),n("gclid",
p),h&&(n("gtm_auth",""),n("gtm_preview","")),(h||a)&&n("cb",String(Math.random())),Iz(t,r++,e)):Gz(e);wt(u)};Cz(d)?Ks(Fs("get",d,"client_id",v),l,{originatingEntity:m,deferrable:!0}):(uz[d]=!0,vz(d,function(w){return v(w.get("clientId"))}))}else Gz(e)}},Hz={},Kz,Jz,Fz,Qt;var Mz=function(a,b){this.Le=a;this.Qd=b};Mz.prototype.toString=function(){var a=""+this.Le;1<this.Qd&&(a=a+"-"+this.Qd);return a};var Nz=function(a,b){this.s=a;this.h=b};Nz.prototype.toString=function(){return this.h+"."+this.s};
var Oz=function(){var a=Ye("optimize.cookie_path",2);return g(a)?a:"/"},Qz=function(a,b){var c=new Pz(a,b);c.Yl();return c},Pz=function(a,b){this.J=Math.floor(new Date/864E5);this.C=a||"auto";this.h=b||Oz();this.s=new Mz(Jj(this.C),Kj(this.h));this.N=[];this.map={}};ba=Pz.prototype;ba.il=function(a){if(!a)return"";var b=this.cg(a);return b?b.s:""};ba.sm=function(a,b,c,d,e){var f,h;f=void 0===f?10:f;h=void 0===h?3E3:h;if(!a)return!1;void 0==b&&(b="");this.ze(a,new Nz(b,c));this.Dk(e);return this.hk(d,
f,h)};ba.cg=function(a){return this.map[a]};ba.bl=function(){for(var a=0,b=0;b<this.N.length;b++)"x"!==this.cg(this.N[b]).s[0]&&a++;return a};ba.ze=function(a,b){a&&(""===b.s?this.Ii(a):(this.map[a]||this.N.push(a),this.map[a]=b))};ba.xm=function(a){for(var b=0;b<a.length;b++)this.ze(a[b][0],a[b][1])};ba.Ii=function(a){var b=this.N.indexOf(a);0<=b&&this.N.splice(b,1);delete this.map[a]};ba.km=function(){for(var a=[],b=0;b<this.N.length;b++){var c=this.N[b];this.map[c].h<this.J&&a.push(c)}for(var d=
0;d<a.length;d++)this.Ii(a[d])};ba.Zk=function(){for(var a=[],b=0;b<this.N.length;b++){var c=this.N[b];a.push([c,this.map[c]])}return a};ba.Qk=function(){for(var a=0,b=0;b<this.N.length;b++)a=Math.max(a,this.map[this.N[b]].h);return 864E5*a};ba.toString=function(){if(0==this.N.length)return"";for(var a=[],b=0;b<this.N.length;b++){var c=this.N[b];a.push(c+"."+this.map[c].toString())}return"GAX1."+this.s.toString()+"."+a.join("!")};ba.hk=function(a,b,c){var d=new Date;this.km();var e=this.bl();if(e>
b||e>(a||10)&&wj().replace(RegExp("(?:;\\s*)?(_gaexp=[^;]+)(?:;\\s*)?"),this.toString()).length>c)return!1;d.setTime(this.Qk());if("auto"!=this.C)return this.s=new Mz(Jj(this.C),Kj(this.h)),0===Gj("_gaexp",this.toString(),{path:this.h,domain:this.C,expires:d});for(var f=Dj(),h=0;h<f.length;h++)if(this.s=new Mz(Jj(f[h]),Kj(this.h)),0===Gj("_gaexp",this.toString(),{path:this.h,domain:f[h],expires:d}))return!0;return!1};ba.Yl=function(){var a=Aj("_gaexp",this.s.Le,this.s.Qd);if(a){var b=this.Zl(a);b&&
this.xm(b.Zk())}};ba.Zl=function(a){for(var b=new Pz(this.C,this.h),c=a.split("!"),d=0;d<c.length;d++){var e=c[d].split(".");if(3==e.length){if(isNaN(Number(e[1])))return;b.ze(e[0],new Nz(e[2],Number(e[1])))}}return b};ba.Dk=function(a){a=a||{};var b=0;a.hasOwnProperty("")&&!isNaN(Number(a[""]))&&(b=this.J-Fa(a[""]));for(var c=0;c<this.N.length;c++){var d=this.N[c];if(a.hasOwnProperty(d)&&!isNaN(Number(a[d]))){var e=this.cg(d);e.h=Fa(a[d])+b;this.ze(d,e)}}};
var Vz=function(){Rz=La();var a=Sz;Sz=[];for(var b=0;b<a.length;b++)a[b]();Tz&&(Tz.takeRecords(),Sz.length||(Tz&&(Tz.disconnect(),Tz=null),Uz&&(D.clearTimeout(Uz),Uz=null)))},Xz=function(){var a=La()-Rz;a>=Wz?(Uz&&(D.clearTimeout(Uz),Uz=null),Vz()):Uz||(Uz=D.setTimeout(function(){Vz();Uz=null},Wz-a))},Yz=function(a){if(!D.MutationObserver)return!1;try{return Tz||(Tz=new MutationObserver(Xz),Tz.observe(F.documentElement,{subtree:!0,childList:!0,attributes:!0,characterData:!0}),Rz=La()),Sz.push(a),
!0}catch(b){return!1}},Tz=null,Sz=[],Wz=0,Rz=0,Uz=null;
var Zz=function(a,b){b&&Yz(a)||D.setTimeout(a,80)},$z=function(a){try{return Gd(a)}catch(b){return null}},dA=function(a){if(Nr)return!0;for(;a;){if(a.nextSibling)return!0;a=a.parentNode}return!1},oA=function(a,b){for(var c=$z(a.oa)||[],d=[],e=0;e<c.length;e++){var f=c[e];if(!f.gtmProgressiveApplied||!f.gtmProgressiveApplied[b]){if(a.Ka&&!dA(f))break;d.push(f)}}return d},pA=function(a,b){return function(){a.gtmProgressiveApplied&&delete a.gtmProgressiveApplied[b]}},qA=function(a,b){a.gtmProgressiveApplied||
(a.gtmProgressiveApplied={});a.gtmProgressiveApplied[b]=!0},rA=function(a,b,c){var d;var e=[];if(b.Qa)if(b.Qa.Rf)d=[{element:F.head}];else{var f=oA(b.Qa,b.id),h=null;b.bf&&(h=oA(b.bf,b.id+"-t"));for(var l=0;l<f.length;l++){var m=f[l],n=void 0;if(null!=h&&(n=h.length>l?h[l]:null,!n&&!Nr&&(null===b.bf.na||b.ji+e.length<b.bf.na)))break;e.push({element:m,targetElement:n})}d=e}else d=e;var p=d;if(!Nr&&b.Ak&&(!a||null==b.Qa.na||b.Qa.na!=b.Ie+p.length))return!1;for(var q=0;q<p.length;q++){var r=p[q].element,
t=p[q].targetElement,u=void 0;b.Ie++;qA(r,b.id);t&&(b.ji++,u=b.id+"-t",qA(t,u));var v=b.Ek(r,t);xa(v)&&b.yc.push(v);b.yc.push(pA(r,b.id));t&&u&&b.yc.push(pA(t,u))}if(b.Qa.na&&b.Qa.na==b.Ie||Nr&&(!c||b.Ie))b.finished=!0;return!0},sA=function(a){for(var b={},c=0;c<a.fa.length;c++){var d=a.fa[c];if(!d.Qa.Rf){var e=b[d.Qa.oa];e||(e=b[d.Qa.oa]=$z(d.Qa.oa)||[]);for(var f=0;f<e.length;f++){var h=e[f];h.gtmProgressiveApplied&&h.gtmProgressiveApplied[d.id]||(qA(h,d.id),d.yc.push(pA(h,d.id)))}}}},tA=function(a){if(!a.Dg){for(var b=
a.zd;b<a.fa.length;b++){var c=a.fa[b],d=b==a.zd;if(!c.finished&&!rA(d,c,a.Yi&&a.Ti))break;c.finished&&d&&a.zd++}a.fa.length>a.zd?(!a.pending&&a.Yi&&(a.pending=!0,Zz(function(){a.pending=!1;tA(a)},a.Ti)),Nr||a.wg||(a.wg=function(){H(function(){tA(a)})},ac(F,"DOMContentLoaded",a.wg))):sA(a)}},uA={},vA={},wA=void 0,xA=function(a,b,c,d){var e=wA;if(!Fd||!e)return!1;var f={id:e.id+":"+e.fa.length,Ek:b,yc:[],Ak:c,Qa:a,Ie:0,bf:d||null,ji:0,finished:!1};e.fa.push(f);null===a?(f.finished=!0,b(null)):tA(e);
return!0},yA=function(a){var b=wa;try{b=Lv(a,"visibility","hidden",!0)}catch(c){}return function(){xa(b)&&b.apply();b=null}},zA=function(a,b,c,d){var e=b;if(!Nr&&!a.Rf){var f=yA(a.oa);Pr.push(f);e=function(h,l){var m=b(h,l);f();return m}}return xA(a,e,c,d)};var Z={securityGroups:{}};Z.securityGroups.dee=["google"],function(){(function(a){Z.__dee=a;Z.__dee.m="dee";Z.__dee.isVendorTemplate=!0;Z.__dee.priorityOverride=0;Z.__dee.isInfrastructure=!1;Z.__dee.runInSiloedMode=!1})(function(){var a=!1;return a?"gtm.sync":"gtm.js"})}();
Z.securityGroups.e=["google"],function(){(function(a){Z.__e=a;Z.__e.m="e";Z.__e.isVendorTemplate=!0;Z.__e.priorityOverride=0;Z.__e.isInfrastructure=!0;Z.__e.runInSiloedMode=!0})(function(a){return String(a.vtp_gtmCachedValues.event)})}();




Z.securityGroups.asprv=["google"],function(){function a(){tv({event:"optimize.domChange"});Yz(a)}(function(b){Z.__asprv=b;Z.__asprv.m="asprv";Z.__asprv.isVendorTemplate=!0;Z.__asprv.priorityOverride=0;Z.__asprv.isInfrastructure=!1;Z.__asprv.runInSiloedMode=!1})(function(b){var c=b.vtp_globalName,d=!!b.vtp_listenForMutations,e=sv("eventModel");c&&iz(c);d&&a();var f,h,l;e&&(f=e.name||"",h=e.callback,l=e.remove);if(h&&xa(h))if(f=String(f),!0!==l){var m=f,n=h;jz(m).push(n);if(""!==m)void 0!==hz[m]&&kz(n,
m,hz[m]);else for(var p in hz)void 0!==hz[p]&&kz(n,p,hz[p])}else{var q=h,r=jz(f),t=r.indexOf(q);0<=t&&r.splice(t,1)}b.vtp_gtmOnSuccess()})}();
















var BA={};BA.dataLayer=Ze;BA.callback=function(a){Oe.hasOwnProperty(a)&&xa(Oe[a])&&Oe[a]();delete Oe[a]};BA.bootstrap=0;BA._spx=!1;
function CA(){ze[Mg()]=ze[Mg()]||BA;Sg();Wg()||k(Xg(),function(d,e){Mr(d,e.transportUrl,e.context);J(92)});Oa(Pe,Z.securityGroups);var a=Og(Ug()),b,c=null==a?void 0:null==(b=a.context)?void 0:b.source;2!==c&&4!==c&&3!==c||J(142);Wc=fd}
(function(a){function b(){m=F.documentElement.getAttribute("data-tag-assistant-present");ku(m)&&(l=h.bk)}if(!D["__TAGGY_INSTALLED"]){var c=!1;if(F.referrer){var d=qg(F.referrer);c="cct.google"===kg(d,"host")}if(!c){var e=xj("googTaggyReferrer");c=e.length&&e[0].length}c&&(D["__TAGGY_INSTALLED"]=!0,Xb("https://cct.google/taggy/agent.js"))}if(Je)a();else{var f=function(u){var v="GTM",w="GTM";Fe?(v="OGT",w="GTAG"):Je&&(w=v="OPT");var x=D["google.tagmanager.debugui2.queue"];x||(x=[],
D["google.tagmanager.debugui2.queue"]=x,Xb("https://"+ye.Cc+"/debug/bootstrap?id="+Fg.ctid+"&src="+w+"&cond="+u+"&gtm="+tj()));var y={messageType:"CONTAINER_STARTING",data:{scriptSource:Qb,containerProduct:v,debug:!1,id:Fg.ctid,targetRef:{ctid:Fg.ctid,isDestination:Dg.od},aliases:Gg(),destinations:Jg()}};y.data.resume=function(){a()};ye.bj&&(y.data.initialPublish=!0);x.push(y)},h={Tm:1,dk:2,qk:3,cj:4,bk:5},l=void 0,m=void 0,n=lg(D.location,"query",!1,void 0,"gtm_debug");ku(n)&&(l=h.dk);if(!l&&F.referrer){var p=qg(F.referrer);
"tagassistant.google.com"===kg(p,"host")&&(l=h.qk)}if(!l){var q=xj("__TAG_ASSISTANT");q.length&&q[0].length&&(l=h.cj)}l||b();if(!l&&lu(m)){var r=function(){if(t)return!0;t=!0;b();l&&Qb?f(l):a()},t=!1;ac(F,"TADebugSignal",function(){r()},!1);D.setTimeout(function(){r()},200)}else l&&Qb?f(l):a()}})(function(){try{Qg();if(P(15)){}tf().s();$i();(P(86)||P(87)||P(88))&&
ag();var a=Ng();if(Ag().canonical[a]){var b=ze.zones;b&&b.unregisterChild(Ig());if(P(98))Tq().removeExternalRestrictions(Ng());else{var c=Uq(Ng());c._event&&(c._event.external=[]);c._entity&&(c._entity.external=[])}}else{Se.h="";Se.C="";Se.M="ad_storage|analytics_storage|ad_user_data|ad_personalization";Se.J="ad_storage|analytics_storage|ad_user_data|ad_personalization";hr();for(var d=data.resource||{},e=d.macros||[],f=0;f<e.length;f++)Lc.push(e[f]);for(var h=d.tags||[],l=0;l<h.length;l++)Pc.push(h[l]);for(var m=d.predicates||[],n=0;n<m.length;n++)Oc.push(m[n]);for(var p=d.rules||
[],q=0;q<p.length;q++){for(var r=p[q],t={},u=0;u<r.length;u++){var v=r[u][0];t[v]=Array.prototype.slice.call(r[u],1);"if"!==v&&"unless"!==v||Vc(t[v])}Mc.push(t)}Rc=Z;Sc=Xv;CA();if(P(23)&&!Je)for(var w=!1!==kf["6"]?Te(Se.J):Te(Se.M),x=0;x<Sf.length;x++){var y=Sf[x],z=y,B=w[y]?"granted":"denied";yf().implicit(z,B)}ju();Nr=!1;Or=0;if("interactive"==F.readyState&&!F.createEventObject||"complete"==F.readyState)Qr();else{ac(F,"DOMContentLoaded",Qr);ac(F,"readystatechange",Qr);if(F.createEventObject&&F.documentElement.doScroll){var C=
!0;try{C=!D.frameElement}catch(K){}C&&Rr()}ac(D,"load",Qr)}zt=!1;"complete"===F.readyState?Bt():ac(D,"load",Bt);fh&&(ah(th),D.setInterval(sh,864E5));ah(Zv);ah(rs);ah(Ep);ah(di);ah(ys);ah(yh);ah(ho);ah(wh);P(28)&&ah(us);P(95)&&(ah($v),ah(bw));
au({event:"gtm.js"});Gu();jf(1);Ws();Ne=La();BA.bootstrap=Ne;if(P(15)){}}}catch(K){if(jf(4),
fh){var M=nh(!0,!0);$b(M)}}});

})()

