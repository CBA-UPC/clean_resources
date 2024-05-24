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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL2Nmc2V0dXBfYnVpbGQvc3JjL29yY2hlc3RyYXRvci90dXJuc3RpbGUvdGVtcGxhdGVzIiwic291cmNlcyI6WyJ0dXJuc3RpbGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QkE7RUFDSTtJQUNJOzs7QUFJUjtFQUNJO0lBQ0k7OztBQUlSO0VBQ0k7SUFFSTs7RUFHSjtJQUNJOzs7QUFJUjtFQUNJO0lBQ0k7OztBQUlSO0VBQ0k7SUFDSTs7O0FBSVI7RUFDSTtJQUNJOzs7QUFJUjtFQUNJO0lBQ0k7OztBQUlSO0VBQ0k7SUFDSTs7RUFHSjtJQUNJOzs7QUFJUjtFQUNJO0lBQ0k7SUFDQTtJQUNBOztFQUdKO0lBQ0k7OztBQUlSO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBR0o7RUFDSTtFQUNBLGtCQTlGaUI7RUErRmpCO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxPQTlHTTtFQStHTixhQXhHaUI7RUF5R2pCO0VBQ0E7RUFDQTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBLE9BMUhNO0VBMkhOO0VBQ0E7OztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7OztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQSxrQkFoSWlCO0VBaUlqQjtFQUNBOzs7QUFHSjtFQUNJOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsV0FDSTtFQUVKO0VBQ0E7RUFDQTs7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQUlSO0VBQ0k7RUFDQTtFQUNBO0VBQ0EsUUExTGM7RUEyTGQsTUEzTGM7OztBQStMZDtFQUNJOztBQUVBO0VBQ0k7O0FBSVI7RUFDSSxRQXpNVTtFQTBNVixNQTFNVTs7QUE2TWQ7RUFDSSxrQkFsTmE7O0FBcU5qQjtBQUFBO0VBRUksT0FqT0U7O0FBbU9GO0FBQUE7RUFDSSxPQWpPRjs7QUFtT0U7QUFBQTtBQUFBO0VBRUksT0FyT047O0FBd09FO0FBQUE7QUFBQTtBQUFBO0VBR0ksT0ExT047O0FBZ1BGO0VBQ0k7RUFDQSxrQkE1T1M7O0FBbVBEO0VBQ0k7O0FBT0o7RUFDSSxrQkExUEg7O0FBNFBHO0VBQ0ksY0E1UFQ7O0FBcVFYO0VBQ0k7RUFDQSxXQUNJOztBQUtaO0VBQ0ksT0F6UkU7O0FBNFJOO0VBQ0ksT0EvUkU7O0FBaVNGO0VBQ0ksT0EvUkY7O0FBaVNFO0VBRUksT0FuU047O0FBc1NFO0VBR0ksT0F4U047O0FBNlNOO0VBQ0ksT0EvU0U7O0FBaVRGO0VBQ0ksT0FsVEY7O0FBb1RFO0VBRUksT0F0VE47O0FBeVRFO0VBR0ksT0EzVE47O0FBZ1VOO0VBQ0ksY0FsVFM7RUFtVFQsa0JBNVRhOztBQStUakI7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0FBQUE7RUFFSSxPQWhWRTs7QUFrVkY7QUFBQTtBQUFBO0VBRUksT0FwVkY7O0FBdVZGO0FBQUE7QUFBQTtBQUFBO0VBR0ksT0F6VkY7O0FBNlZOO0VBQ0ksT0EvVkU7O0FBaVdGO0VBRUksT0FuV0Y7O0FBc1dGO0VBR0ksT0F4V0Y7O0FBNFdOO0VBQ0ksY0E3VlM7RUE4VlQsT0FsWEU7OztBQXNYVjtFQUNJOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBLGtCQXJYaUI7OztBQXdYckI7QUFBQTtFQUVJO0VBQ0E7RUFDQSxPQXRZTTtFQXVZTjs7QUFFQTtBQUFBO0VBQ0ksT0EzWUU7O0FBNllGO0FBQUE7QUFBQTtFQUVJLE9BL1lGOztBQWtaRjtBQUFBO0FBQUE7QUFBQTtFQUdJLE9BbFpGOzs7QUF1WlY7RUFDSTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsUUFqWlc7RUFrWlg7RUFDQTs7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUlRO0VBQ0k7O0FBR0o7RUFDSTs7QUFPSjtFQUNJOztBQUdKO0VBQ0k7O0FBT0o7RUFDSTtFQUNBO0VBQ0E7RUFDQSxrQkF2ZEM7O0FBeWREO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFPcEI7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBOzs7QUFLWjtFQUNJOztBQUdJO0VBQ0k7O0FBR0o7RUFDSTs7QUFJUjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTtFQUNBOztBQUdKO0VBQ0k7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJOzs7QUFJUjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQUlBO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7O0FBR0o7RUFDSTtFQUNBOztBQUdKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUlBO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7RUFDQTs7QUFJUjtFQUNJO0VBQ0E7RUFDQTs7QUFFQTtFQUNJOztBQUtZO0VBQ0k7O0FBT3BCO0VBQ0k7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTs7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQSxPQTF0Qk07RUEydEJOO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0EsT0FqdUJFO0VBa3VCRjtFQUNBO0VBQ0E7O0FBRUE7RUFFSTtFQUNBO0VBQ0EsT0ExdUJGO0VBMnVCRTtFQUNBO0VBQ0E7O0FBR0o7RUFHSTtFQUNBLE9BanZCRjs7O0FBc3ZCVjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxPQTl2Qk07RUErdkJOOztBQUVBO0VBQ0ksT0Fud0JFOztBQXF3QkY7RUFHSTtFQUNBLE9BdHdCRjs7QUF5d0JGO0VBRUksT0E5d0JGOztBQWt4Qk47RUFDSTs7O0FBS0o7RUFDSTs7O0FBSVI7RUFDSTtFQUNBO0VBQ0EsUUEvd0JjO0VBZ3hCZDtFQUNBO0VBQ0E7RUFDQTs7O0FBR0o7RUFDSTs7O0FBR0o7RUFDSTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7OztBQUlBO0VBQ0ksUUF2ekJFOztBQTB6Qk47RUFDSSxRQTN6QkU7RUE0ekJGLE1BNXpCRTs7QUErekJOO0VBQ0ksUUFoMEJFOztBQW0wQk47RUFDSTtFQUNBLFdBQ0k7OztBQU1SO0VBQ0k7O0FBR0o7RUFDSTtFQUNBOztBQUdKO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7RUFDQTs7O0FBSVI7RUFDSTtFQUNBO0VBQ0EsUUE1MUJpQjtFQTYxQmpCLE1BNzFCaUI7RUE4MUJqQjs7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQUdKO0VBQ0k7RUFDQTtFQUNBOzs7QUFHSjtFQUNJOzs7QUFHSjtFQUNJLE1BdDRCTTs7QUF3NEJOO0VBQ0k7RUFDQTs7O0FBSVI7RUFDSSxrQkFuNEJpQjtFQW80QmpCLE9BNTRCTTs7O0FBKzRCVjtBQUFBO0VBRUk7RUFDQSxPQXQ1Qk07O0FBdzVCTjtBQUFBO0FBQUE7RUFFSTtFQUNBLE9BMzVCRTs7QUE4NUJOO0FBQUE7QUFBQTtBQUFBO0VBR0ksT0E5NUJFOzs7QUFrNkJWO0VBQ0k7RUFDQSxPQXY2Qk07O0FBeTZCTjtFQUVJO0VBQ0EsT0E1NkJFOztBQSs2Qk47RUFHSSxPQS82QkU7OztBQW03QlY7RUFDSTs7O0FBSUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUlBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUdKO0FBQUE7RUFFSTtFQUNBOztBQUlSO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJOztBQUlSO0VBQ0k7OztBQUtKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFJUjtFQUNJOztBQUlBO0FBQUE7RUFFSTs7O0FBTVI7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUlBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7RUFDQTs7QUFJQTtFQUNJOztBQUdKO0VBQ0k7O0FBSVI7QUFBQTtFQUVJO0VBQ0E7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBSVI7RUFDSTs7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxrQkF0a0NpQjtFQXVrQ2pCO0VBQ0E7RUFDQTtFQUNBLE9BdGxDTTtFQXVsQ04sYUEva0NlO0VBZ2xDZjs7O0FBS0k7QUFBQTtFQUVJO0VBQ0E7OztBQU9KO0FBQUE7RUFFSTs7O0FBS1o7RUFDSTtJQUNJLGtCQXJtQ2E7SUFzbUNiLE9BOW1DRTs7RUFrbkNGO0lBQ0ksT0FubkNGOztFQXNuQ0Y7SUFDSSxPQXpuQ0Y7O0VBMm5DRTtJQUNJLE9Bem5DTjs7RUEybkNNO0lBRUksT0E3bkNWOztFQWdvQ007SUFHSSxPQWxvQ1Y7O0VBdW9DRjtJQUNJLGtCQWxvQ1M7O0VBcW9DYjtBQUFBO0lBRUksT0FqcENGOztFQW1wQ0U7QUFBQTtJQUNJLE9BanBDTjs7RUFtcENNO0FBQUE7QUFBQTtJQUVJLE9BcnBDVjs7RUF3cENNO0FBQUE7QUFBQTtBQUFBO0lBR0ksT0ExcENWOztFQStwQ0Y7SUFDSSxPQWpxQ0Y7O0VBbXFDRTtJQUNJLE9BcHFDTjs7RUFzcUNNO0lBRUksT0F4cUNWOztFQTJxQ007SUFHSSxPQTdxQ1Y7O0VBb3JDTTtJQUNJLE9BcnJDVjs7RUEwckNGO0lBQ0ksY0E1cUNLO0lBNnFDTCxrQkF0ckNTOztFQXlyQ2I7SUFDSTs7RUFHSjtJQUNJOztFQU9ZO0lBQ0ksa0JBcHNDUDs7RUFzc0NPO0lBQ0ksY0F0c0NiOztFQThzQ0s7SUFDSTs7RUFPSjtJQUNJOztFQU1oQjtJQUNJO0lBQ0Esa0JBbHVDSzs7RUFzdUNiO0lBQ0k7O0VBRUE7SUFDSTs7RUFJUjtJQUNJLFFBM3VDTTtJQTR1Q04sTUE1dUNNOztFQSt1Q1Y7QUFBQTtJQUVJLE9BNXZDRjs7RUE4dkNFO0FBQUE7QUFBQTtJQUVJLE9BaHdDTjs7RUFtd0NFO0FBQUE7QUFBQTtBQUFBO0lBR0ksT0Fyd0NOOztFQXl3Q0Y7SUFDSSxPQTN3Q0Y7O0VBNndDRTtJQUVJLE9BL3dDTjs7RUFreENFO0lBR0ksT0FweENOOztFQXd4Q0Y7SUFDSSxjQXp3Q0s7SUEwd0NMLE9BOXhDRiIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci0xOiAjMWQxZjIwO1xuJGNvbG9yLTI6ICNkZTEzMDM7XG4kY29sb3ItMzogI2ZmYTI5OTtcbiRjb2xvci00OiAjMTY2Mzc5O1xuJGNvbG9yLTU6ICNmZmY7XG4kY29sb3ItNjogI2JiYjtcbiRjb2xvci03OiAjOTQ5NDk0O1xuJGZvbnQtZmFtaWx5LW5vcm1hbDogLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBibGlua21hY3N5c3RlbWZvbnQsICdTZWdvZSBVSScsIHJvYm90bywgb3h5Z2VuLCB1YnVudHUsICdIZWx2ZXRpY2EgTmV1ZScsXG4gICAgYXJpYWwsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktbW9ubzogY29uc29sYXMsICdMaWJlcmF0aW9uIE1vbm8nLCBjb3VyaWVyLCBtb25vc3BhY2U7XG4kYmFja2dyb3VuZC1jb2xvci0xOiAjZmZmO1xuJGJhY2tncm91bmQtY29sb3ItMjogI2ZhZmFmYTtcbiRiYWNrZ3JvdW5kLWNvbG9yLTM6ICMyMjI7XG4kYmFja2dyb3VuZC1jb2xvci00OiB3aGl0ZTtcbiRiYWNrZ3JvdW5kLWNvbG9yLTU6ICM2ZDZkNmQ7XG4kY2hlY2tib3gtY29sb3ItMTogI2ZiYWQ0MTtcbiRzdWNjZXNzLWNvbG9yLTE6ICMwYWE5Mzc7XG4kc3VjY2Vzcy1jb2xvci0yOiAjMDM4MTI3O1xuJGRhcmstbWFyay1jb2xvci0xOiAjZGFkYWRhO1xuJGZhaWwtY29sb3ItMTogI2M0NGQwZTtcbiRib3JkZXItY29sb3ItMTogJGNoZWNrYm94LWNvbG9yLTE7XG4kYm9yZGVyLWNvbG9yLTI6ICM2NjY7XG4kYm9yZGVyLWNvbG9yLTM6ICNmZmEyOTk7XG4kY29udGVudC1ib3JkZXItY29sb3ItMTogI2UwZTBlMDtcblxuQGtleWZyYW1lcyByb3RhdGUge1xuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzdHJva2Uge1xuICAgIDEwMCUge1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2NhbGUge1xuICAgIDAlLFxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuXG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBmaWxsIHtcbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmlsbGZhaWwge1xuICAgIDEwMCUge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzMHB4ICRmYWlsLWNvbG9yLTE7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZpbGxmYWlsLW9mZmxhYmVsIHtcbiAgICAxMDAlIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMzBweCAkY29sb3ItMTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmlsbGZhaWwtb2ZmbGFiZWwtZGFyayB7XG4gICAgMTAwJSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDMwcHggI2ZmZjtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2NhbGUtdXAtY2VudGVyIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4wMSk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHVuc3BpbiB7XG4gICAgNDAlIHtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgICAgIHN0cm9rZS1saW5lY2FwOiBzcXVhcmU7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxOTI7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHN0cm9rZS13aWR0aDogMDtcbiAgICB9XG59XG5cbmh0bWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItMTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIGNvbG9yOiAkY29sb3ItMTtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LW5vcm1hbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmgxIHtcbiAgICBtYXJnaW46IDE2cHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgY29sb3I6ICRjb2xvci0xO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbnRlbnQtYm9yZGVyLWNvbG9yLTE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItMjtcbiAgICBoZWlnaHQ6IDYzcHg7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbiNjaGFsbGVuZ2Utc3RhZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNicmFuZGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMCAxNnB4IDAgMDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuI3NwaW5uZXItaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYW5pbWF0aW9uOiByb3RhdGUgNXMgbGluZWFyIGluZmluaXRlO1xufVxuXG4jZmFpbC1pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAkZmFpbC1jb2xvci0xO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBhbmltYXRpb246XG4gICAgICAgIGZpbGxmYWlsIDAuNHMgZWFzZS1pbi1vdXQgMC40cyBmb3J3YXJkcyxcbiAgICAgICAgc2NhbGUgMC4zcyBlYXNlLWluLW91dCAwLjlzIGJvdGg7XG4gICAgc3Ryb2tlLXdpZHRoOiA2cHg7XG4gICAgc3Ryb2tlOiAjZjhmOGY4O1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcbn1cblxuI3N1Y2Nlc3MtaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgJHN1Y2Nlc3MtY29sb3ItMjtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMC42cyBjdWJpYy1iZXppZXIoMC41NSwgMC4wODUsIDAuNjgsIDAuNTMpIGJvdGg7XG4gICAgc3Ryb2tlLXdpZHRoOiA2cHg7XG4gICAgc3Ryb2tlOiAjZjhmOGY4O1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcblxuICAgIC5wMSB7XG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDI0MjtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI0MjtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgJHN1Y2Nlc3MtY29sb3ItMjtcbiAgICAgICAgYW5pbWF0aW9uOiBzdHJva2UgMC40cyBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC40NSwgMSkgZm9yd2FyZHM7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC41cztcbiAgICB9XG59XG5cbi5zdWNjZXNzLWNpcmNsZSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgc3Ryb2tlLXdpZHRoOiAyO1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcbiAgICBzdHJva2U6ICRzdWNjZXNzLWNvbG9yLTI7XG4gICAgZmlsbDogJHN1Y2Nlc3MtY29sb3ItMjtcbn1cblxuLnRoZW1lLWRhcmsge1xuICAgICNzdWNjZXNzLWljb24ge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAkc3VjY2Vzcy1jb2xvci0xO1xuXG4gICAgICAgIC5wMSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAkc3VjY2Vzcy1jb2xvci0xO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnN1Y2Nlc3MtY2lyY2xlIHtcbiAgICAgICAgc3Ryb2tlOiAkc3VjY2Vzcy1jb2xvci0xO1xuICAgICAgICBmaWxsOiAkc3VjY2Vzcy1jb2xvci0xO1xuICAgIH1cblxuICAgICNjaGFsbGVuZ2Utb3ZlcmxheSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLTM7XG4gICAgfVxuXG4gICAgI2NoYWxsZW5nZS1vdmVybGF5LFxuICAgICNjaGFsbGVuZ2UtZXJyb3ItdGV4dCB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItMztcblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItNjtcblxuICAgICAgICAgICAgJjp2aXNpdGVkLFxuICAgICAgICAgICAgJjpsaW5rIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLTY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jdHAtY2hlY2tib3gtbGFiZWwge1xuICAgICAgICAubWFyayB7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkZGFyay1tYXJrLWNvbG9yLTE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci0zO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICB+IHtcbiAgICAgICAgICAgICAgICAgICAgLm1hcmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGNoZWNrYm94LWNvbG9yLTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6Y2hlY2tlZCB7XG4gICAgICAgICAgICAgICAgfiB7XG4gICAgICAgICAgICAgICAgICAgIC5tYXJrIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLTU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5vZmZsYWJlbCB7XG4gICAgICAgICNmYWlsLWljb24ge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgI2ZmZjtcbiAgICAgICAgICAgIGFuaW1hdGlvbjpcbiAgICAgICAgICAgICAgICBmaWxsZmFpbC1vZmZsYWJlbC1kYXJrIDAuNHMgZWFzZS1pbi1vdXQgMC40cyBmb3J3YXJkcyxcbiAgICAgICAgICAgICAgICBzY2FsZSAwLjNzIGVhc2UtaW4tb3V0IDAuOXMgYm90aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci01O1xuICAgIH1cblxuICAgICNjaGFsbGVuZ2UtZXJyb3ItdGl0bGUge1xuICAgICAgICBjb2xvcjogJGNvbG9yLTM7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLTY7XG5cbiAgICAgICAgICAgICY6dmlzaXRlZCxcbiAgICAgICAgICAgICY6bGluayB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci02O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLTc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjdGVybXMge1xuICAgICAgICBjb2xvcjogJGNvbG9yLTY7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLTY7XG5cbiAgICAgICAgICAgICY6dmlzaXRlZCxcbiAgICAgICAgICAgICY6bGluayB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci02O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLTc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjY29udGVudCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci0zO1xuICAgIH1cblxuICAgICNxciB7XG4gICAgICAgIGZpbGw6IHJnYigyNDMgMTI4IDMyKTtcbiAgICB9XG5cbiAgICAubG9nby10ZXh0IHtcbiAgICAgICAgZmlsbDogI2ZmZjtcbiAgICB9XG5cbiAgICAjZnItaGVscGVyLWxpbmssXG4gICAgI2ZyLWhlbHBlci1sb29wLWxpbmsge1xuICAgICAgICBjb2xvcjogJGNvbG9yLTY7XG5cbiAgICAgICAgJjp2aXNpdGVkLFxuICAgICAgICAmOmxpbmsge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci02O1xuICAgICAgICB9XG5cbiAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci03O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2V4cGlyZWQtcmVmcmVzaC1saW5rIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci02O1xuXG4gICAgICAgICY6dmlzaXRlZCxcbiAgICAgICAgJjpsaW5rIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItNjtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWN0aXZlLFxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItNztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5vdmVybGF5IHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLTM7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItMztcbiAgICB9XG59XG5cbiNjaGFsbGVuZ2UtZXJyb3Ige1xuICAgIG1hcmdpbjogMCA4cHg7XG59XG5cbiNjaGFsbGVuZ2Utb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLTI7XG59XG5cbiNjaGFsbGVuZ2Utb3ZlcmxheSxcbiNjaGFsbGVuZ2UtZXJyb3ItdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgIGNvbG9yOiAkY29sb3ItMjtcbiAgICBmb250LXNpemU6IDlweDtcblxuICAgIGEge1xuICAgICAgICBjb2xvcjogJGNvbG9yLTE7XG5cbiAgICAgICAgJjp2aXNpdGVkLFxuICAgICAgICAmOmxpbmsge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci0xO1xuICAgICAgICB9XG5cbiAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci00O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4jbG9nbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICAgIGhlaWdodDogMjZweDtcbn1cblxuLmZhaWx1cmUtY2lyY2xlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxNjY7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE2NjtcbiAgICBzdHJva2Utd2lkdGg6IDI7XG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1xuICAgIHN0cm9rZTogJGZhaWwtY29sb3ItMTtcbiAgICBmaWxsOiBub25lO1xuICAgIGFuaW1hdGlvbjogc3Ryb2tlIDAuNnMgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuNDUsIDEpIGZvcndhcmRzO1xufVxuXG4uZmFpbHVyZS1jcm9zcyB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICBzdHJva2UtZGFzaGFycmF5OiA0ODtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogNDg7XG4gICAgYW5pbWF0aW9uOiBzdHJva2UgMC4zcyBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC40NSwgMSkgMC44cyBmb3J3YXJkcztcbn1cblxuLmN0cC1jaGVja2JveC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMTFweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmN0cC1jaGVja2JveC1sYWJlbCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctbGVmdDogMzdweDtcblxuICAgIGlucHV0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgIGxlZnQ6IDE4cHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGhlaWdodDogMjRweDtcblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICB+IHtcbiAgICAgICAgICAgICAgICAubWFyayB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRmYWlsLWNvbG9yLTE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3Bhbi5jdHAtbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIH4ge1xuICAgICAgICAgICAgICAgIC5tYXJrIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGZhaWwtY29sb3ItMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcGFuLmN0cC1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6Y2hlY2tlZCB7XG4gICAgICAgICAgICB+IHtcbiAgICAgICAgICAgICAgICAubWFyayB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLTQ7XG5cbiAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkICRmYWlsLWNvbG9yLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDAgNHB4IDRweCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWFyayB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICBsZWZ0OiAxOHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xuICAgICAgICB6LWluZGV4OiA5OTk4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYmFja2dyb3VuZC1jb2xvci01O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIGFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDAuNHMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDg1LCAwLjY4LCAwLjUzKSBib3RoO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2l6ZS1jb21wYWN0IHtcbiAgICBmb250LXNpemU6IDEzcHg7XG5cbiAgICAuY3RwLWNoZWNrYm94LWxhYmVsIHtcbiAgICAgICAgLm1hcmsge1xuICAgICAgICAgICAgbGVmdDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxMThweDtcbiAgICB9XG5cbiAgICAubGluay1zcGFjZXIge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICB9XG5cbiAgICAuY3RwLWNoZWNrYm94LWNvbnRhaW5lciB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgI2xvZ28ge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICB9XG5cbiAgICAuY2ItY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAjYnJhbmRpbmcge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdy1yZXZlcnNlIHdyYXA7XG4gICAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDVweCAxNnB4IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cblxuICAgICN0ZXJtcyB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cblxuICAgICNxciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjY2hhbGxlbmdlLWVycm9yLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG5cbiAgICAjZmFpbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgICAgcGxhY2UtY29udGVudDogY2VudGVyIHNwYWNlLWV2ZW5seTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG5cbiAgICAjZmFpbC1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgfVxuXG4gICAgI2V4cGlyZWQge1xuICAgICAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMXB4O1xuICAgIH1cblxuICAgICNjaGFsbGVuZ2UtZXJyb3Ige1xuICAgICAgICBtYXJnaW46IDAgMnB4O1xuICAgIH1cbn1cblxuLmN0cC1sYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdy1yZXZlcnNlIG5vd3JhcDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbn1cblxuLnJ0bCB7XG4gICAgLmN0cC1sYWJlbCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIH1cblxuICAgICNzdWNjZXNzLWljb24ge1xuICAgICAgICBsZWZ0OiAyNTVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB9XG5cbiAgICAjZmFpbC1pY29uIHtcbiAgICAgICAgbGVmdDogMjU1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgfVxuXG4gICAgI3NwaW5uZXItaWNvbiB7XG4gICAgICAgIGxlZnQ6IDI1NXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIH1cblxuICAgICNleHBpcmVkLWljb24ge1xuICAgICAgICBsZWZ0OiAyNTVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB9XG5cbiAgICAjYnJhbmRpbmcge1xuICAgICAgICBtYXJnaW46IDAgMCAwIDE2cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuc2l6ZS1jb21wYWN0IHtcbiAgICAgICAgI2JyYW5kaW5nIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAjdGVybXMge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgI2NmLXN0YWdlIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQ4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAjc3VjY2Vzcy1pY29uIHtcbiAgICAgICAgICAgIGxlZnQ6IDg2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAjZmFpbC1pY29uIHtcbiAgICAgICAgICAgIGxlZnQ6IDg2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAjc3Bpbm5lci1pY29uIHtcbiAgICAgICAgICAgIGxlZnQ6IDg2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAjZXhwaXJlZC1pY29uIHtcbiAgICAgICAgICAgIGxlZnQ6IDg2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAjZXhwaXJlZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY3RwLWNoZWNrYm94LWxhYmVsIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzdweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICByaWdodDogMThweDtcblxuICAgICAgICAgICAgJjpjaGVja2VkIHtcbiAgICAgICAgICAgICAgICB+IHtcbiAgICAgICAgICAgICAgICAgICAgLm1hcmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubWFyayB7XG4gICAgICAgICAgICByaWdodDogMThweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jdHAtY2hlY2tib3gtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuXG4gICAgLmNiLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbn1cblxuI3Rlcm1zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgIGNvbG9yOiAkY29sb3ItMTtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG5cbiAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICBjb2xvcjogJGNvbG9yLTE7XG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG5cbiAgICAgICAgJjpsaW5rLFxuICAgICAgICAmOnZpc2l0ZWQge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci00O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4jY2hhbGxlbmdlLWVycm9yLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNTVweDtcbiAgICBjb2xvcjogJGNvbG9yLTI7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItMTtcblxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItNDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGluayxcbiAgICAgICAgJjp2aXNpdGVkIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pY29uLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLnVuc3B1biB7XG4gICAgLmNpcmNsZSB7XG4gICAgICAgIGFuaW1hdGlvbjogdW5zcGluIDAuN3MgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuNDUsIDEpIGZvcndhcmRzO1xuICAgIH1cbn1cblxuLmNpcmNsZSB7XG4gICAgc3Ryb2tlLXdpZHRoOiAzcHg7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgIHN0cm9rZTogJHN1Y2Nlc3MtY29sb3ItMjtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwLCAxMDAsIDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDIwMDtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTtcbiAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xufVxuXG4ubWFpbi13cmFwcGVyIHtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLnAxIHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZTogI2ZmZjtcbn1cblxuLmV4cGlyZWQtcDEge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiAjZmZmO1xufVxuXG4ub2ZmbGFiZWwge1xuICAgIC5jaXJjbGUge1xuICAgICAgICBzdHJva2U6ICRjb2xvci0xO1xuICAgIH1cblxuICAgIC5zdWNjZXNzLWNpcmNsZSB7XG4gICAgICAgIHN0cm9rZTogJGNvbG9yLTE7XG4gICAgICAgIGZpbGw6ICRjb2xvci0xO1xuICAgIH1cblxuICAgIC5mYWlsdXJlLWNpcmNsZSB7XG4gICAgICAgIHN0cm9rZTogJGNvbG9yLTE7XG4gICAgfVxuXG4gICAgI2ZhaWwtaWNvbiB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwICRjb2xvci0xO1xuICAgICAgICBhbmltYXRpb246XG4gICAgICAgICAgICBmaWxsZmFpbC1vZmZsYWJlbCAwLjRzIGVhc2UtaW4tb3V0IDAuNHMgZm9yd2FyZHMsXG4gICAgICAgICAgICBzY2FsZSAwLjNzIGVhc2UtaW4tb3V0IDAuOXMgYm90aDtcbiAgICB9XG59XG5cbi50aGVtZS1kYXJrLm9mZmxhYmVsIHtcbiAgICAuY2lyY2xlIHtcbiAgICAgICAgc3Ryb2tlOiAjZmZmO1xuICAgIH1cblxuICAgIC5zdWNjZXNzLWNpcmNsZSB7XG4gICAgICAgIHN0cm9rZTogI2ZmZjtcbiAgICAgICAgZmlsbDogI2ZmZjtcbiAgICB9XG5cbiAgICAucDEge1xuICAgICAgICBzdHJva2U6ICMwMDA7XG4gICAgfVxuXG4gICAgLmV4cGlyZWQtcDEge1xuICAgICAgICBzdHJva2U6ICMwMDA7XG4gICAgfVxuXG4gICAgLmZhaWx1cmUtY2lyY2xlIHtcbiAgICAgICAgc3Ryb2tlOiAjZmZmO1xuICAgIH1cblxuICAgIC5leHBpcmVkLWNpcmNsZSB7XG4gICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgIHN0cm9rZTogI2ZmZjtcbiAgICB9XG59XG5cbi5leHBpcmVkLWNpcmNsZSB7XG4gICAgc3Ryb2tlLXdpZHRoOiAzcHg7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgIHN0cm9rZTogJGJhY2tncm91bmQtY29sb3ItNTtcbiAgICBmaWxsOiAkYmFja2dyb3VuZC1jb2xvci01O1xuICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG59XG5cbiNleHBpcmVkLWljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgJGJhY2tncm91bmQtY29sb3ItNTtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYW5pbWF0aW9uOiBzY2FsZSAwLjNzIGVhc2UtaW4tb3V0IDAuOXMgYm90aDtcbiAgICBzdHJva2Utd2lkdGg6IDZweDtcbiAgICBzdHJva2U6ICNmOGY4Zjg7XG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1xufVxuXG4uY2ItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDExcHg7XG59XG5cbi5sb2dvLXRleHQge1xuICAgIGZpbGw6ICMwMDA7XG59XG5cbiNxciB7XG4gICAgZmlsbDogJGNvbG9yLTE7XG5cbiAgICBzdmcge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cbn1cblxuYm9keS50aGVtZS1kYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci0zO1xuICAgIGNvbG9yOiAkY29sb3ItNTtcbn1cblxuI2ZyLWhlbHBlci1saW5rLFxuI2ZyLWhlbHBlci1sb29wLWxpbmsge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAkY29sb3ItMTtcblxuICAgICY6bGluayxcbiAgICAmOnZpc2l0ZWQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6ICRjb2xvci0xO1xuICAgIH1cblxuICAgICY6YWN0aXZlLFxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItNDtcbiAgICB9XG59XG5cbiNleHBpcmVkLXJlZnJlc2gtbGluayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICRjb2xvci0xO1xuXG4gICAgJjpsaW5rLFxuICAgICY6dmlzaXRlZCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogJGNvbG9yLTE7XG4gICAgfVxuXG4gICAgJjphY3RpdmUsXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci00O1xuICAgIH1cbn1cblxuaHRtbC5ydGwge1xuICAgIGRpcmVjdGlvbjogcnRsO1xufVxuXG4ubGFuZy1kZSB7XG4gICAgI2JyYW5kaW5nIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWFyZ2luOiAwIDE2cHggMCAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG5cbiAgICAuc2l6ZS1jb21wYWN0IHtcbiAgICAgICAgI2JyYW5kaW5nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgICAgICAgICBwbGFjZS1jb250ZW50OiBmbGV4LWVuZCBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jdHAtbGFiZWwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgI2NoYWxsZW5nZS1vdmVybGF5LFxuICAgICAgICAjY2hhbGxlbmdlLWVycm9yLXRleHQge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICN0ZXJtcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcblxuICAgICAgICAubGluay1zcGFjZXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNjaGFsbGVuZ2UtZXJyb3Ige1xuICAgICAgICBtYXJnaW46IDhweCA0cHg7XG4gICAgfVxufVxuXG4ubGFuZy1qYSB7XG4gICAgI2JyYW5kaW5nIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWFyZ2luOiAwIDE2cHggMCAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG5cbiAgICAjdGVybXMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG5cbiAgICAgICAgLmxpbmstc3BhY2VyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY3RwLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgIH1cblxuICAgIC5zaXplLWNvbXBhY3Qge1xuICAgICAgICAjY2hhbGxlbmdlLW92ZXJsYXksXG4gICAgICAgICNjaGFsbGVuZ2UtZXJyb3ItdGV4dCB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxhbmctcnUge1xuICAgICNicmFuZGluZyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1hcmdpbjogMCAxNnB4IDAgMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuXG4gICAgLnNpemUtY29tcGFjdCB7XG4gICAgICAgICNicmFuZGluZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICAgICAgICAgcGxhY2UtY29udGVudDogZmxleC1lbmQgZmxleC1zdGFydDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAjdmVyaWZ5aW5nLXRleHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmN0cC1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmN0cC1jaGVja2JveC1sYWJlbCB7XG4gICAgICAgICAgICAubWFyayB7XG4gICAgICAgICAgICAgICAgbGVmdDogMTFweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDExcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAjY2hhbGxlbmdlLW92ZXJsYXksXG4gICAgICAgICNjaGFsbGVuZ2UtZXJyb3ItdGV4dCB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI3Rlcm1zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuXG4gICAgICAgIC5saW5rLXNwYWNlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2NoYWxsZW5nZS1lcnJvciB7XG4gICAgICAgIG1hcmdpbjogOHB4IDRweDtcbiAgICB9XG59XG5cbi5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogNXB4O1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICB6LWluZGV4OiAyMTQ3NDgzNjQ3O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci0yO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLTQ7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBsaW5lLWhlaWdodDogOHB4O1xuICAgIGNvbG9yOiAkY29sb3ItMjtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LW1vbm87XG4gICAgZm9udC1zaXplOiA4cHg7XG59XG5cbi5sYW5nLWl0IHtcbiAgICAuc2l6ZS1jb21wYWN0IHtcbiAgICAgICAgI2NoYWxsZW5nZS1vdmVybGF5LFxuICAgICAgICAjY2hhbGxlbmdlLWVycm9yLXRleHQge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxhbmctaWQge1xuICAgIC5zaXplLWNvbXBhY3Qge1xuICAgICAgICAjY2hhbGxlbmdlLW92ZXJsYXksXG4gICAgICAgICNjaGFsbGVuZ2UtZXJyb3ItdGV4dCB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIGJvZHkudGhlbWUtYXV0byB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLTM7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItNTtcbiAgICB9XG5cbiAgICAudGhlbWUtYXV0byB7XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItNTtcbiAgICAgICAgfVxuXG4gICAgICAgICNjaGFsbGVuZ2UtZXJyb3ItdGl0bGUge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci0zO1xuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLTY7XG5cbiAgICAgICAgICAgICAgICAmOnZpc2l0ZWQsXG4gICAgICAgICAgICAgICAgJjpsaW5rIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci02O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItNztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAjY2hhbGxlbmdlLW92ZXJsYXkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItMztcbiAgICAgICAgfVxuXG4gICAgICAgICNjaGFsbGVuZ2Utb3ZlcmxheSxcbiAgICAgICAgI2NoYWxsZW5nZS1lcnJvci10ZXh0IHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItMztcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci02O1xuXG4gICAgICAgICAgICAgICAgJjp2aXNpdGVkLFxuICAgICAgICAgICAgICAgICY6bGluayB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItNjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICAgICAgICY6Zm9jdXMsXG4gICAgICAgICAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLTc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgI3Rlcm1zIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItNjtcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci02O1xuXG4gICAgICAgICAgICAgICAgJjp2aXNpdGVkLFxuICAgICAgICAgICAgICAgICY6bGluayB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItNjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICAgICAgICY6Zm9jdXMsXG4gICAgICAgICAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLTc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgI3RlbXJzIHtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci03O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICNjb250ZW50IHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0yO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItMztcbiAgICAgICAgfVxuXG4gICAgICAgICNxciB7XG4gICAgICAgICAgICBmaWxsOiByZ2IoMjQzIDEyOCAzMik7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nby10ZXh0IHtcbiAgICAgICAgICAgIGZpbGw6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuY3RwLWNoZWNrYm94LWxhYmVsIHtcbiAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAmOmNoZWNrZWQge1xuICAgICAgICAgICAgICAgICAgICB+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXJrIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci01O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIH4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRjaGVja2JveC1jb2xvci0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgIH4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRjaGVja2JveC1jb2xvci0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWFyayB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGRhcmstbWFyay1jb2xvci0xO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLTM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAjc3VjY2Vzcy1pY29uIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwICRzdWNjZXNzLWNvbG9yLTE7XG5cbiAgICAgICAgICAgIC5wMSB7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgJHN1Y2Nlc3MtY29sb3ItMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWNjZXNzLWNpcmNsZSB7XG4gICAgICAgICAgICBzdHJva2U6ICRzdWNjZXNzLWNvbG9yLTE7XG4gICAgICAgICAgICBmaWxsOiAkc3VjY2Vzcy1jb2xvci0xO1xuICAgICAgICB9XG5cbiAgICAgICAgI2ZyLWhlbHBlci1saW5rLFxuICAgICAgICAjZnItaGVscGVyLWxvb3AtbGluayB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLTY7XG5cbiAgICAgICAgICAgICY6dmlzaXRlZCxcbiAgICAgICAgICAgICY6bGluayB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci02O1xuIyt://followchannel/e0e4aaca-beb6-4430-947e-52974b0a010b"},Pa={name:"Long Reads",uri:"nyt://followchannel/ef50e742-3281-4cfe-bb38-ce6ba7a38e38"},Ma={name:"Times Investigations",uri:"nyt://followchannel/b07a9628-96c0-4bf8-91f8-f8384c904cad"},_a={name:"The Daily",uri:"nyt://followchannel/587a92f1-97d5-4cb8-bd59-eacf52ae0b19"},Ba={name:"The Weekly",uri:"nyt://followchannel/9b57d374-3bd4-4d15-b849-6091267d9b28"},Da={name:"Big Tech",uri:"nyt://followchannel/06a8d768-5287-4ac2-abf3-a84740c03d28"},Ua={name:"Obituaries",uri:"nyt://followchannel/7ac87d4e-3285-4420-8585-f096e018ee66"},Wa={name:"Philosophy",uri:"nyt://followchannel/92e1d85a-1116-481c-9d2e-b95fa18d67c0"},Ga={name:"Global Migration",uri:"nyt://followchannel/eb844170-4d0f-4b72-9146-4935ab575e83"},Fa={name:"North Korea",uri:"nyt://followchannel/4a6e7b62-03dc-4feb-b381-4295693c7516"},Va={name:"The Interpreter",uri:"nyt://followchannel/5c2b62a8-7384-4fe2-aef7-c3af205313c9"},Ha={name:"2020 Election",uri:"nyt://followchannel/2d6ac777-ec93-46f8-90c7-ffc5928c9348"},Ya={name:"Education",uri:"nyt://followchannel/0825de2c-d934-4b67-8060-01ccb6448f6d"},Za={name:"Health Care",uri:"nyt://followchannel/5803918f-8e6f-455a-956e-ba3607fc1d06"},qa={name:"National Security",uri:"nyt://followchannel/679a17bb-20e6-40a7-a589-e7742a2a52ed"},Xa={name:"U.S. Immigration",uri:"nyt://followchannel/c6479a85-d172-4dbd-9eda-53f522917992"},Qa={name:"The Opioid Epidemic",uri:"nyt://followchannel/569013a9-4959-4a02-897b-d9d811d5129a"},Ja={name:"Only in New York",uri:"nyt://followchannel/6811d396-7fcc-42bf-88d9-bf2e943de96a"},Ka={name:"Architecture & Urbanism",uri:"nyt://followchannel/85a660d3-e122-44b3-9da4-e1d20770b241"},$a={name:"Art & Design",uri:"nyt://followchannel/a5872139-5f7c-4bb0-a5b4-8fc646a8701d"},ei={name:"New York City Arts",uri:"nyt://followchannel/92edc59c-113d-4261-ba23-9281527ea08b"},ti={name:"What to Stream",uri:"nyt://followchannel/b0fd83f2-8dbc-4d75-b717-392d23c6012e"},ni={name:"The 52 Places Traveler",uri:"nyt://followchannel/5808647a-2ae5-486f-bfce-6781cd89fdb5"},ai={name:"Where to Eat: New York",uri:"nyt://followchannel/df81a29d-b9d0-4923-b079-3f921cb0dd6b"},ii={name:"Where to Eat: California",uri:"nyt://followchannel/689bf0df-64be-4b01-9776-bf5f5954708a"},oi={name:"Reviews by Pete Wells",uri:"nyt://followchannel/3b682c62-0d83-4ba6-a563-a4c4dfe3ede9"},ri={name:"Wines of The Times",uri:"nyt://followchannel/ca80d85a-512e-4f4a-ab43-ca5ebf2ff1c8"},li={name:"Space",uri:"nyt://followchannel/5f9f9630-ebda-4326-92b1-d39606a900f5"},ci={name:"Innovation",uri:"nyt://followchannel/da66f2d5-8cad-4026-b547-69ae28929ec1"},si={name:"The Future of Work",uri:"nyt://followchannel/24332e5c-8448-469b-94ce-a5c3ab2006b9"},ui={name:"Bitcoin & Blockchain",uri:"nyt://followchannel/67490a79-467c-4a24-a29c-1c5ba046c337"},di={name:"Privacy Project",uri:"nyt://followchannel/8aad2064-a72a-4c41-b060-1f2525529a4e"},fi={name:"Animals",uri:"nyt://followchannel/dca2033b-f488-496c-9799-85dc6f7cbdd1"},pi={name:"Self Care",uri:"nyt://followchannel/31bad5c4-9b04-4dfe-acc4-28bd9a7e00df"},mi={name:"Stress & Anxiety",uri:"nyt://followchannel/523c56b3-b95a-4577-a693-f42cba982874"},hi={name:"Parents & Families",uri:"nyt://followchannel/473f2671-677c-455d-b650-923f9d171482"},bi={name:"Race in America",uri:"nyt://followchannel/3f5099bc-8b13-456f-8bc9-d1df7d3aecb1"},gi={name:"Gender & Society",uri:"nyt://followchannel/90bf8ecc-e648-4b29-bc48-19696c564c94"},yi={name:"L.G.B.T.Q.",uri:"nyt://followchannel/1af4552f-b96e-4fe7-8d3e-fb53cfdf9fd7"},wi={name:"Latinx",uri:"nyt://followchannel/b8868877-faf8-4441-9281-4c33e2df4d56"},Oi={name:"Faith & Values",uri:"nyt://followchannel/4fb91348-a059-4289-8b48-1959691dda12"},xi={name:"Social Qs",uri:"nyt://followchannel/7a5ef2bc-cc5b-461f-83a3-15b09891369e"},Ni={name:"Tech Tips",uri:"nyt://followchannel/e426082a-e80b-466c-aa6e-e4a5f61fff23"},ji={name:"Your Money",uri:"nyt://followchannel/d3e57cb9-8839-414e-a5f5-00904239cc83"},ki={name:"Travel Advice",uri:"nyt://followchannel/2133f3f4-8c31-4cbe-9fef-295e2e360ba7"},Ei={name:"The Ethicist",uri:"nyt://followchannel/38e52470-4e8c-4c42-ba1e-4ea467e0411f"},Ci={name:"Opinion Video",uri:"nyt://followchannel/d0ecfd0a-20d3-42ed-aa85-076c5f992bf2"},Ti={name:"Photojournalism",uri:"nyt://followchannel/965afb7c-6299-4ed1-b0d0-1320a2e8450c"},Ii={name:"Visual Investigations",uri:"nyt://followchannel/1b88efe1-2f71-4a48-8f40-47587f4051cb"},Si={name:"Amanda Hess",uri:"nyt://followchannel/6567285c-c34e-48eb-890f-dab83da057e8"},Ri={name:"Frank Bruni",uri:"nyt://followchannel/16f488fb-b452-4a58-aff0-97f06b52b234"},zi={name:"Kara Swisher",uri:"nyt://followchannel/d7acd94d-1ff7-4e2e-890a-2d11f75a5a94"},Ai={name:"Maureen Dowd",uri:"nyt://followchannel/0835c877-3a99-4e50-ad39-5167fb940f16"},Li={name:"David Brooks",uri:"nyt://followchannel/c99a593c-6943-412e-bec2-50ec4267813c"},Pi={name:"Michelle Alexander",uri:"nyt://followchannel/f81ac2de-65c5-45bd-8171-257f684583b4"},Mi={name:"Paul Krugman",uri:"nyt://followchannel/2bf4dd68-409c-42fc-b259-2ba0b2408448"},_i={name:"Thomas Friedman",uri:"nyt://followchannel/2ede1823-effd-40c2-8eca-de73a24421a4"},Bi={name:"Nicholas Kristof",uri:"nyt://followchannel/f7f461aa-9574-4ddf-ae57-691b2b6a54d7"},Di={name:"Farhad Manjoo",uri:"nyt://followchannel/449c0e43-5b7d-4b17-ad29-db2369c26ffb"},Ui={name:"Gail Collins",uri:"nyt://followchannel/a6be6fc2-52ba-43aa-965d-a92c8c3d1f65"},Wi={name:"Bret Stephens",uri:"nyt://followchannel/2739980d-80c4-4d1d-a181-367e09ca3ded"},Gi={name:"Ross Douthat",uri:"nyt://followchannel/1851980a-84f0-4a13-aa06-1d46e0badf04"},Fi={name:"Michelle Goldberg",uri:"nyt://followchannel/b752f535-396c-4953-ba8d-fe40abbc35ab"},Vi={name:"David Leonhardt",uri:"nyt://followchannel/b84173b5-770b-499d-9064-5fa1b0258959"},Hi={name:"Jennifer Senior",uri:"nyt://followchannel/cd51abc3-8d69-46c5-af21-ac52469eb515"},Yi={name:"Jamelle Bouie",uri:"nyt://followchannel/48f293b3-ae45-45f0-9439-9a33881e104f"},Zi={name:"Roger Cohen",uri:"nyt://followchannel/a6ac548e-e6ff-440a-9def-382d78786618"},qi={name:"The Editorial Board",uri:"nyt://followchannel/d3c165cc-6547-42c7-8f54-79b030cb139a"},Xi={name:"Charles Blow",uri:"nyt://followchannel/a08e0725-b58c-4b95-ac85-9dd350c73424"},Qi={name:"U.S. & Politics",uri:"nyt://followchannel/273b58f4-71e5-437b-a283-7ac09550e572",sectionId:"U2VjdGlvbjpueXQ6Ly9zZWN0aW9uL2EzNGQzZDZjLWM3N2YtNTkzMS1iOTUxLTI0MWI0ZTI4NjgxYw=="},Ji={name:"International",uri:"nyt://followchannel/009fff57-ea9d-44a1-8f97-72d6757e9b2e",sectionId:"U2VjdGlvbjpueXQ6Ly9zZWN0aW9uLzcwZTg2NWI2LWNjNzAtNTE4MS04NGM5LTgzNjhiM2E1YzM0Yg=="},Ki={name:"New York",uri:"nyt://followchannel/dd1a5725-c3be-4673-be2c-9055eb12c10f",sectionId:"U2VjdGlvbjpueXQ6Ly9zZWN0aW9uLzM5NDgwMzc0LTY2ZDMtNTYwMy05Y2UxLTU4Y2ZhMTI5ODhlMg=="},$i={name:"California",uri:"nyt://followchannel/c86a34d3-1c45-451b-874a-5171ff7aca1f"},eo={name:"United Kingdom",uri:"nyt://followchannel/c4ac88c0-9e85-4f60-9f33-265c2b90ee97"},to={name:"India",uri:"nyt://followchannel/2c6618db-a59b-47da-b59e-d8ea101efc66"},no={name:"Australia",uri:"nyt://followchannel/61b75ff6-a66d-4a8c-b628-a5fec344c61f",sectionId:"U2VjdGlvbjpueXQ6Ly9zZWN0aW9uLzcwZTg2NWI2LWNjNzAtNTE4MS04NGM5LTgzNjhiM2E1YzM0Yg=="},ao={name:"Canada",uri:"nyt://followchannel/5fb2eb20-d192-4a59-8691-ac2a3162cdf1"},io={name:"China",uri:"nyt://followchannel/36ecb4df-0f33-4658-a99a-49346c685f53"},oo={name:"Opinion",uri:"nyt://followchannel/99a39aaa-fc9a-4694-bdc3-62dc716c6efc",sectionId:"U2VjdGlvbjpueXQ6Ly9zZWN0aW9uL2Q3YTcxMTg1LWFhNjAtNTYzNS1iY2UwLTVmYWI3NmM3YzI5Nw=="},ro={name:"Business & Technology",uri:"nyt://followchannel/31b50582-c8a2-4128-af1d-927516001146",sectionId:"U2VjdGlvbjpueXQ6Ly9zZWN0aW9uLzA0MTViMmIwLTUxM2EtNWU3OC04MGRhLTIxYWI3NzBjYjc1Mw=="},lo={name:"Business & Technology",uri:"nyt://followchannel/31b50582-c8a2-4128-af1d-927516001146",sectionId:"U2VjdGlvbjpueXQ6Ly9zZWN0aW9uLzQyMjQyNDBmLWIxYWItNTBiZC04ODFmLTc4MmQ2YTNiYzUyNw=="},co={name:"Science",uri:"nyt://followchannel/3d51faee-dfee-40f7-b3c6-3a65a50acc32",sectionId:"U2VjdGlvbjpueXQ6Ly9zZWN0aW9uL2ZiMjQxZTE2LWNiZGUtNWQ2MC1iZTZlLTZiY2E5ZTg2YzY5Nw=="},so={name:"Food",uri:"nyt://followchannel/1d60193d-2926-4027-9f2b-2e400d373998",sectionId:"U2VjdGlvbjpueXQ6Ly9zZWN0aW9uLzRmMzc5YjExLTQ0NmItNTdhZS04ZTJhLTBjZmYxMmUwZjI2ZQ=="},uo={name:"Sports",uri:"nyt://followchannel/3e033daf-ff6e-47fc-be32-8fb88efd4027",sectionId:"U2VjdGlvbjpueXQ6Ly9zZWN0aW9uLzQzODE0MTFiLTY3MGYtNTQ1OS04Mjc3LWIxODE0ODVhMTllYw=="},fo={name:"Books",uri:"nyt://followchannel/0a87fbb4-e96c-4a9f-9a8d-d0c7cb895231",sectionId:"U2VjdGlvbjpueXQ6Ly9zZWN0aW9uLzU1MGY3NWUyLWZjMzctNWQ1Yy05ZGQxLWM2NjVhYzIyMWI0OQ=="},po={name:"Style & Fashion",uri:"nyt://followchannel/d402fad8-d9aa-4aa5-9690-dded05ebd3c6",sectionId:"U2VjdGlvbjpueXQ6Ly9zZWN0aW9uL2M0MjYwZGJmLTQ3MGMtNTZlMy04YjE5LTNjYmYyYWZkYjM0MQ=="},mo={name:"Pop Culture",uri:"nyt://followchannel/062892b7-db09-421e-8b20-ad3f357c4cb3",sectionId:"U2VjdGlvbjpueXQ6Ly9zZWN0aW9uLzZlNmVlMjkyLWI0YmQtNTAwNi1hNjE5LTljZWFiMDM1MjRmMg=="},ho={name:"Travel",uri:"nyt://followchannel/d26bc241-f463-450e-b4f8-fee5cdfa2541",sectionId:"U2VjdGlvbjpueXQ6Ly9zZWN0aW9uL2IyZmI3YzA4LTRmOGUtNWNmZi04ZTE0LWFmZjhhNDlhOTkzNA=="},bo={name:"Health & Wellness",uri:"nyt://followchannel/58e6dbc4-617f-404f-b297-ee459c9b00e0",sectionId:"U2VjdGlvbjpueXQ6Ly9zZWN0aW9uLzQ3MzE5MWMwLWJlNjItNTE5Zi1hYjk5LWQxYTcxOGRmMjZhOQ=="},go={name:"Trump Impeachment Inquiry",uri:"nyt://followchannel/bceb28ca-4c0f-4753-8ebc-44464a1903cb"},vo={name:"Dispatches",uri:"nyt://followchannel/d827a180-3ace-4152-8656-d11080bec1e0",sectionId:"U2VjdGlvbjpueXQ6Ly9zZWN0aW9uLzcwZTg2NWI2LWNjNzAtNTE4MS04NGM5LTgzNjhiM2E1YzM0Yg=="},yo=Pi,wo=$a,Oo=Xi,xo=fo,No=Yi,jo=Li,ko=Ri,Eo=ro,Co=$i,To=ii,Io=io,So=Sa,Ro=Zi,zo=Ui,Ao=za,Lo=_a,Po=vo,Mo=Gi,_o=Ai,Bo=qi,Do=Ya,Uo=Ei,Wo=hi,Go=_i,Fo=si,Vo=Fi,Ho=bo,Yo=Za,Zo=to,qo=ci,Xo=Ji,Qo=Va,Jo=Ma,Ko=Bi,$o=Mi,er=wi,tr=Vi,nr=yi,ar=Pa,ir=Aa,or=Ga,rr=Ki,lr=Fa,cr=ei,sr=ai,ur=Ja,dr=Ci,fr=mo,pr=bi,mr=co,hr=Hi,br=li,gr=uo,vr=Wi,yr=ti,wr=mi,Or=po,xr=Ni,Nr=ni,jr=ki,kr=eo,Er=Qi,Cr=Ii,Tr=oi,Ir=ji,Sr=La,Rr=([Er,Xo,rr,oo,Eo,lo,mr,so,gr,xo,Or,fr,cr,ho,Ho,Po].reduce((function(e,t){return e[t.sectionId]=t,e}),{}),Object.keys(a).reduce((function(e,t){var n=a[t];return e[n.uri]=n.name,e}),{})),zr=(Ea={},f()(Ea,Io.uri,Qt.MORNING_BRIEFING_AE),f()(Ea,So.uri,Qt.CLIMATE_FWD),f()(Ea,Do.uri,Qt.THE_UPSHOT),f()(Ea,or.uri,Qt.THE_INTERPRETER),f()(Ea,Yo.uri,Qt.THE_UPSHOT),f()(Ea,Zo.uri,Qt.MORNING_BRIEFING_AE),f()(Ea,Xo.uri,Qt.THE_INTERPRETER),f()(Ea,nr.uri,Qt.FRANK_BRUNI),f()(Ea,er.uri,Qt.RACE_RELATED),f()(Ea,lr.uri,Qt.THE_INTERPRETER),f()(Ea,pr.uri,Qt.RACE_RELATED),f()(Ea,Fo.uri,Qt.DEALBOOK),f()(Ea,Qo.uri,Qt.THE_INTERPRETER),f()(Ea,Sr.uri,Qt.NYT_MAGAZINE),f()(Ea,Ho.uri,Qt.WELL),f()(Ea,ir.uri,Qt.LOVE_LETTER),f()(Ea,Nr.uri,Qt.TRAVEL_DISPATCH),f()(Ea,Lo.uri,Qt.THE_DAILY),f()(Ea,Uo.uri,Qt.NYT_MAGAZINE),f()(Ea,Jo.uri,Qt.TOP_STORIES),f()(Ea,Ao.uri,Qt.COOKING),f()(Ea,Co.uri,Qt.CALIFORNIA_TODAY),f()(Ea,ur.uri,Qt.NEW_YORK_TODAY),f()(Ea,rr.uri,Qt.NEW_YORK_TODAY),f()(Ea,kr.uri,Qt.MORNING_BRIEFING_EU),f()(Ea,vr.uri,Qt.DEBATABLE),f()(Ea,Oo.uri,Qt.DEBATABLE),f()(Ea,jo.uri,Qt.DEBATABLE),f()(Ea,tr.uri,Qt.OPINION_TODAY),f()(Ea,ko.uri,Qt.FRANK_BRUNI),f()(Ea,zo.uri,Qt.DEBATABLE),f()(Ea,No.uri,Qt.JAMELLE_BOUIE),f()(Ea,hr.uri,Qt.DEBATABLE),f()(Ea,_o.uri,Qt.DEBATABLE),f()(Ea,yo.uri,Qt.DEBATABLE),f()(Ea,Vo.uri,Qt.DEBATABLE),f()(Ea,Ko.uri,Qt.NICHOLAS_KRISTOF),f()(Ea,$o.uri,Qt.PAUL_KRUGMAN),f()(Ea,Ro.uri,Qt.DEBATABLE),f()(Ea,Mo.uri,Qt.DEBATABLE),f()(Ea,Bo.uri,Qt.DEBATABLE),f()(Ea,Go.uri,Qt.DEBATABLE),f()(Ea,wo.uri,Qt.THE_T_LIST),f()(Ea,Or.uri,Qt.OPEN_THREAD),f()(Ea,qo.uri,Qt.ON_TECH),f()(Ea,cr.uri,Qt.THEATER_UPDATE),f()(Ea,fr.uri,Qt.WATCHING),f()(Ea,br.uri,Qt.SCIENCE_TIMES),f()(Ea,gr.uri,Qt.SPORTS),f()(Ea,xo.uri,Qt.BOOKS),f()(Ea,Wo.uri,Qt.PARENTING),f()(Ea,Tr.uri,Qt.COOKING),f()(Ea,wr.uri,Qt.WELL),f()(Ea,xr.uri,Qt.ON_TECH),f()(Ea,jr.uri,Qt.TRAVEL_DISPATCH),f()(Ea,yr.uri,Qt.WATCHING),f()(Ea,To.uri,Qt.CALIFORNIA_TODAY),f()(Ea,sr.uri,Qt.NEW_YORK_TODAY),f()(Ea,Ir.uri,Qt.YOUR_MONEY),f()(Ea,ar.uri,Qt.TOP_STORIES),f()(Ea,dr.uri,Qt.OP_DOCS),f()(Ea,Cr.uri,Qt.TOP_STORIES),f()(Ea,Eo.uri,Qt.DEALBOOK),f()(Ea,mr.uri,Qt.SCIENCE_TIMES),n("PkOs")),Ar=pe()([ce.a.breakpoint.mediumLarge,"@media (min-width: 1220px)"]),Lr=Object(H.css)("@supports (display:grid){",Ar({gridColumn:["main","3 / span 4","2 / span 4"]}),";}form{max-width:530px;}p{text-align:left;}"),Pr=Object(H.css)("@supports (display:grid){",Ar({gridColumn:["main","2 / span 4","1 / span 4"]}),";}"),Mr=Object(H.css)("color:",ce.a.color.gray10,";font-family:",ce.a.font.franklinBase,";font-size:",ce.a.font.size(16),";font-weight:",ce.a.font.weight.light,";line-height:",ce.a.font.size(18),";margin:24px 0 70px;max-width:578px;padding-bottom:24px;a{font-weight:600;}"),_r=Object(H.css)("margin-bottom:14px;font-size:",ce.a.font.size(18),";font-family:",ce.a.font.franklinBase,";color:",ce.a.color.black,";font-weight:",ce.a.font.weight.bold,";line-height:",ce.a.font.size(24),";"),Br=Object(H.css)("text-align:left;font-family:",ce.a.font.franklinBase,";color:",ce.a.color.gray10,";display:flex;flex-wrap:wrap;border-bottom:1px solid #c4c4c4;padding-bottom:18px;",Ar({marginBottom:["40px","48px"]}),";@supports (display:grid){grid-column:main;}li{font-size:",ce.a.font.size(16),";line-height:",ce.a.font.size(16),";font-weight:",ce.a.font.weight.medium,";display:inline-flex;align-items:center;margin-right:30px;margin-bottom:30px;}li:last-of-type{margin-right:0;}svg{margin-right:10px;}"),Dr=(Ar({justifyContent:[null,"center"]}),Object(H.css)("display:flex;flex-direction:column;margin-left:20px;")),Ur=Object(H.css)("font-size:",ce.a.font.size(18),";line-height:",ce.a.font.size(26),";"),Wr=Object(H.css)("font-size:",ce.a.font.size(14),";line-height:",ce.a.font.size(20),";"),Gr=Object(H.css)("width:170px;height:auto;margin-top:18px;"),Fr=function(){return b.a.createElement(b.a.Fragment,null,c()("ul",{className:Br},void 0,zr.b.map((function(e){return c()("li",{},e.desktopName,e.icon,c()("div",{className:Dr},void 0,c()("h2",{className:Ur},void 0,c()(X.a,{},void 0,e.desktopName)),c()("p",{className:Wr},void 0,e.description)))}))),c()("div",{className:Object(H.cx)(Lr,Pr)},void 0,c()("p",{className:_r},void 0,"Scan the QR code with your phone camera to download the app."),c()("img",{src:"/vi-assets/static-assets/core-news-download-regi-3421d050601d15d3dde1a842c1bfef2a.png",alt:"QR code to download app",className:Gr}),c()("div",{className:Mr},void 0,"or visit"," ",Ca||(Ca=c()("a",{href:"https://nyti.ms/app",target:"_blank",rel:"noreferrer"},void 0,"nyti.ms/app"))," ","on your phone browser")))};function Vr(e,t){var n,a=e.length;if(a>t)n=e.slice(0,t).join(", ");else if(a>1){var i=e.reduce((function(e,t,n){return 0===n?t:"".concat(e,", ").concat(t)}),""),o=i.lastIndexOf(",");n="\n        ".concat(i.slice(0,o)," and\n        ").concat(i.slice(o+1)," \n    ")}else n=e;return n}var Hr,Yr,Zr,qr=Object(H.css)("width:246px;"),Xr=Object(H.css)("justify-content:flex-end;");function Qr(e){var t=e.article,n=Object(Ct.b)(),a=n.currentStep,i=n.followChannels,o=n.EXIT_URI,r=n.handleBackToReading,l=Object(h.useRef)(null),s=Object(v.useTracking)({module:{label:"step".concat(a),name:"app-download"}},{dispatchOnMount:function(){return{event:"impression"}}}),u=s.Track,d=s.trackEvent,f={event:"moduleInteraction",eventData:{trigger:"module",type:"ob_click"},module:{element:{name:"skip",label:"read-in-browser",url:o}}};Object(h.useEffect)((function(){Object(R.c)()}),[]);var p=Object(ha.b)(),m=Object(x.parse)(window.location.search),g=m.FOLLOW_CHANNELS&&JSON.parse(m.FOLLOW_CHANNELS)||i||[],y=m.followChannels&&g&&g.length,w=g.map((function(e){return Rr[e]})),O="You’re all set.",N="Start reading in the app.",j=null,k=p?ne.b:ne.a;if(y){var E=1===g.length?"Your story and others from ".concat(Vr(w,1)," are waiting in the app."):"Your story and others from the ".concat(g.length," topics you selected are waiting in the app."),C="\n        Find stories from ".concat(Vr(w,3),"\n        ").concat(g.length>3?" and more":""," in the “For You” section of the app.\n      ");j=c()(yn,{},void 0,p?O:N,"".concat(p?E:C))}else{var T=t?"Keep reading this story in the app for a smoother, faster experience.":"Keep reading in the app for a smoother, faster experience.";j=c()(yn,{},void 0,p?O:N," ".concat(p?T:""))}return c()(u,{},void 0,b.a.createElement("main",{"data-testid":"app-download",className:Object(H.cx)(k,ne.c),ref:l},c()("div",{className:jn},void 0,Hr||(Hr=c()(pn,{})),j),!p&&(Yr||(Yr=c()(Fr,{}))),p&&c()(Ia.a,{device:p,article:t,readInAppTrackingObject:{event:"moduleInteraction",eventData:{trigger:"module",type:"ob_click"},module:{element:{name:"continue",label:"read-in-app"}}},backToReadingTrackingObject:f,EXIT_URI:o})),!p&&c()(K.a,{className:kn},void 0,c()("div",{className:Object(H.cx)(Cn,Xr)},void 0,c()($.a,{lightBackground:!0,className:qr,onClick:function(){d(function(e,t){return Object(wn.a)({module:{element:{name:"continue",label:"back-to-reading",url:t}},eventCallback:e})}(r,o))}},void 0,"No, thanks. Back to reading."))))}Qr.displayName="AppDownload",Qr.defaultProps={article:null},Qr.fragments={article:w()(Zr||(Zr=m()(["\n    fragment AppDownload_article on Article {\n      id\n      uri\n      ...AppDownloadMobile_article\n    }\n    ","\n  "])),Ia.a.fragments.article)};var Jr=Qr,Kr=pe()(["@media (min-width: 375px)",ce.a.breakpoint.small,"@media (min-width: 834px)",ce.a.breakpoint.mediumLarge]),$r=Object(H.css)("display:flex;justify-content:center;align-items:center;border-radius:4px;border:1px solid ",ce.a.color.gray70,";color:",ce.a.color.gray20,";cursor:pointer;box-sizing:border-box;background-color:",ce.a.color.white,";transition:box-shadow 0.3s ease;&:hover{box-shadow:rgb(196 196 196 / 50%) 0 4px 6px;}",Kr({height:["40px","53px","73px","180px"],width:["100%",null,null,"180px"],flexDirection:["row",null,null,"column"],justifyContent:["center","flex-start",null,"center"],paddingLeft:["6px","14px","27px","18px"],paddingRight:["6px",null,0,"18px"]}),";"),el=Object(H.css)("font-family:",ce.a.font.franklinBase,";font-weight:",ce.a.font.weight.medium,";line-height:1;-webkit-font-smoothing:antialiased;",Kr({fontSize:[ce.a.font.size(14),ce.a.font.size(16),null,ce.a.font.size(18)],textAlign:["center","left",null,"center"]}),";"),tl=Object(H.css)(Kr({height:[null,null,null,"146px","180px"],width:[null,null,null,"146px","180px"]})),nl=Object(H.css)("color:",ce.a.color.white,";background:",ce.a.color.gray20,";box-shadow:rgb(196 196 196 / 50%) 0 4px 6px;"),al=Object(H.css)(Kr({display:["none","inline-block"],marginRight:[0,"12px","28px",0],marginBottom:[0,0,0,"24px"],width:[null,"14px","20px",null]}));function il(e){var t,n=e.text,a=e.selected,i=e.handleProductItemClick,o=e.isCondensed,r=e.icon;return c()("button",{className:Object(H.cx)($r,(t={},f()(t,nl,a),f()(t,tl,o),t)),type:"button",role:"checkbox","aria-checked":a,selected:a,"data-testid":"product-item",onClick:function(){return i(!a)}},void 0,r({className:al,fill:a?ce.a.color.gray55:ce.a.color.gray20}),c()("span",{className:el},void 0,n))}il.displayName="ProductItem",il.defaultProps={selected:!1,isCondensed:!1};var ol,rl,ll=il,cl=pe()(["@media (min-width: 375px)",ce.a.breakpoint.small,"@media (min-width: 834px)",ce.a.breakpoint.mediumLarge]),sl=Object(H.css)(cl({maxWidth:[null,null,null,"none"]}),";"),ul=Object(H.css)("justify-content:center;"),dl=Object(H.css)(cl({width:["296px",null,null,"246px"]}),";"),fl=function(e){var t=e.className,n=e.fill;return c()("svg",{fill:n,className:t,height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},void 0,ol||(ol=c()("path",{d:"m0 0h24v24h-24z",fill:"none"})),rl||(rl=c()("path",{d:"m5 3v16h16v2h-18v-18zm15.293 3.293 1.414 1.414-5.707 5.707-3-2.999-4.293 4.292-1.414-1.414 5.707-5.707 3 2.999z"})))};fl.displayName="ChartsIcon",fl.defaultProps={fill:ce.a.color.gray20,className:void 0};var pl,ml=function(e){var t=e.className,n=e.fill;return c()("svg",{className:t,fill:"none",height:"21",viewBox:"0 0 21 21",width:"21",xmlns:"http://www.w3.org/2000/svg"},void 0,pl||(pl=c()("g",{fill:"none"},void 0,c()("path",{d:"m1.49805 2.88034v3.83026h5.27042v-5.21255h-3.88813c-.36661 0-.7182.14563-.97743.40486s-.40486.61082-.40486.97743z"}),c()("path",{d:"m14.2451 19.5019h3.8745c.0892-.0011.1781-.0103.2656-.0273.2642-.0561.5065-.1873.698-.3779.2586-.2595.4042-.6107.4051-.9771v-3.8847h-5.2432z"}),c()("path",{d:"m13.1796 14.2349h-5.34195v5.267h5.34195z"}),c()("path",{d:"m19.4985 7.77979h-5.2534v5.34191h5.2534z"}),c()("path",{d:"m13.1796 1.49805h-5.34195v5.21255h5.34195z"}),c()("path",{d:"m6.76847 7.77979h-5.27042v5.34191h5.27042z"}))),c()("path",{d:"m20.1624 1.42655c-.1002-.13526-.2143-.25965-.3404-.3711-.4261-.403606-.9804-.644628-1.5662-.680938-.0511 0-.0987 0-.1498 0h-15.22568c-.05107 0-.09873 0-.1498 0-.63891.036519-1.23964.316099-1.67899.781408-.43935.4653-.684027 1.08107-.683854 1.72102v15.24616c.000901.6652.265556 1.3029.735934 1.7733.47038.4703 1.10809.735 1.77331.7359h15.24608c.6656-.0018 1.3033-.2672 1.7735-.7381.4703-.471.7349-1.109.7358-1.7746v-15.23925c-.0013-.52173-.1655-1.03003-.4699-1.4538zm-13.39395 11.69165h-5.27042v-5.33853h5.27042zm0-6.4076h-5.27042v-3.83025c0-.36661.14563-.7182.40486-.97743s.61082-.40487.97743-.40487h3.88813zm6.41095 12.7913h-5.34869v-5.267h5.34869zm0-12.7913h-5.34869v-5.21255h5.34869zm6.3225 11.409c-.0009.3664-.1465.7177-.4051.9772-.1952.1928-.4426.3242-.7116.3779-.092.0178-.1855.027-.2792.0272h-3.8609v-5.267h5.2568zm0-5.0014h-5.2568v-5.33853h5.2568z",fill:n}))};ml.displayName="GamesIcon",ml.defaultProps={fill:ce.a.color.gray20,className:void 0};var hl,bl,gl=function(e){var t=e.className,n=e.fill;return c()("svg",{className:t,fill:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},void 0,hl||(hl=c()("path",{fill:"none",d:"M0 0H24V24H0z"})),bl||(bl=c()("path",{d:"M6 3c3.49 0 6.383 2.554 6.913 5.895C14.088 7.724 15.71 7 17.5 7H22v2.5c0 3.59-2.91 6.5-6.5 6.5H13v5h-2v-8H9c-3.866 0-7-3.134-7-7V3h4zm14 6h-2.5c-2.485 0-4.5 2.015-4.5 4.5v.5h2.5c2.485 0 4.5-2.015 4.5-4.5V9zM6 5H4v1c0 2.761 2.239 5 5 5h2v-1c0-2.761-2.239-5-5-5z"})))};gl.displayName="GuidanceIcon",gl.defaultProps={fill:ce.a.color.gray20,className:void 0};var vl,yl,wl=function(e){var t=e.className,n=e.fill;return c()("svg",{className:t,fill:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},void 0,vl||(vl=c()("path",{fill:"none",d:"M0 0h24v24H0z"})),yl||(yl=c()("path",{d:"M3 4h18v2H3V4zm0 15h14v2H3v-2zm0-5h18v2H3v-2zm0-5h14v2H3V9z"})))};wl.displayName="LongReadsIcon",wl.defaultProps={fill:ce.a.color.gray20,className:void 0};var Ol,xl,Nl=function(e){var t=e.className,n=e.fill;return c()("svg",{className:t,fill:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},void 0,Ol||(Ol=c()("path",{fill:"none",d:"M0 0h24v24H0z"})),xl||(xl=c()("path",{d:"M22 20H2v-2h1v-6.969C3 6.043 7.03 2 12 2s9 4.043 9 9.031V18h1v2zM5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031V18zm4.5 3h5a2.5 2.5 0 1 1-5 0z"})))};Nl.displayName="NewsAlertsIcon",Nl.defaultProps={fill:ce.a.color.gray20,className:void 0};var jl,kl,El=function(e){var t=e.className,n=e.fill;return c()("svg",{className:t,fill:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},void 0,jl||(jl=c()("path",{fill:"none",d:"M0 0h24v24H0z"})),kl||(kl=c()("path",{d:"M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm0-2a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11z"})))};El.displayName="PodcastsIcon",El.defaultProps={fill:ce.a.color.gray20,className:void 0};var Cl,Tl,Il=function(e){var t=e.className,n=e.fill;return c()("svg",{className:t,fill:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},void 0,Cl||(Cl=c()("path",{fill:"none",d:"M0 0h24v24H0z"})),Tl||(Tl=c()("path",{d:"M13 7v4h7a1 1 0 0 1 1 1v8h2v2H1v-2h2v-8a1 1 0 0 1 1-1h7V7h2zm6 6H5v7h14v-7zM13.83.402A3 3 0 0 1 12.732 4.5L11 5.5a3 3 0 0 1 1.098-4.098l1.732-1z"})))};Il.displayName="ReceipesIcon",Il.defaultProps={fill:ce.a.color.gray20,className:void 0};var Sl,Rl,zl=function(e){var t=e.className,n=e.fill;return c()("svg",{className:t,fill:n,height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},void 0,Sl||(Sl=c()("path",{d:"m0 0h24v24h-24z",fill:"none"})),Rl||(Rl=c()("path",{d:"m2 3.993a1 1 0 0 1 .992-.993h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1 -.992.993h-18.016a.993.993 0 0 1 -.992-.993zm6 1.007v14h8v-14zm-4 0v2h2v-2zm14 0v2h2v-2zm-14 4v2h2v-2zm14 0v2h2v-2zm-14 4v2h2v-2zm14 0v2h2v-2zm-14 4v2h2v-2zm14 0v2h2v-2z"})))};zl.displayName="VideoIcon",zl.defaultProps={fill:ce.a.color.gray20,className:void 0};var Al,Ll,Pl=function(e){var t=e.className,n=e.fill;return c()("svg",{className:t,fill:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},void 0,Al||(Al=c()("path",{fill:"none",d:"M0 0h24v24H0z"})),Ll||(Ll=c()("path",{d:"M5 11.1l2-2 5.5 5.5 3.5-3.5 3 3V5H5v6.1zm0 2.829V19h3.1l2.986-2.985L7 11.929l-2 2zM10.929 19H19v-2.071l-3-3L10.929 19zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm11.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})))};Pl.displayName="VisualIcon",Pl.defaultProps={fill:ce.a.color.gray20,className:void 0};var Ml,_l,Bl=function(e){var t=e.className,n=e.fill;return c()("svg",{className:t,fill:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},void 0,Ml||(Ml=c()("path",{fill:"none",d:"M0 0h24v24H0z"})),_l||(_l=c()("path",{d:"M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})))};Bl.displayName="ProductReviewIcon",Bl.defaultProps={fill:ce.a.color.gray20,className:void 0};var Dl,Ul=function(e){return null==e?void 0:e.reduce((function(e,t){return t.selected&&e.push(t.text),e}),[])},Wl=Object(wn.a)({module:{element:{name:"skip",label:"maybe-later"}}});function Gl(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Fl(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Gl(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gl(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Vl=function(e){var t=e.advanceToNextRoute,n=e.nextRoute,a=e.products,i=e.updateProducts,o=e.readyToDispatchImpression,r=Object(Ct.b)().currentStep,l=Object(v.useTracking)({module:{label:"step".concat(r),name:"products"}}).trackEvent;Object(h.useEffect)((function(){o&&l({event:"impression"})}),[l,o]);var s,u=function(e){return function(t){i(a.map((function(n,a){return e===a?Fl(Fl({},n),{},{selected:t}):n}))),function(e,t){var n,a,i,o="prd"===(null===(n=window)||void 0===n||null===(a=n.vi)||void 0===a||null===(i=a.env)||void 0===i?void 0:i.ENVIRONMENT)?"https://persona.api.nytimes.com":"https://persona.api.dev.nytimes.com",r={};r[e.flag]=t,fetch("".concat(o,"/svc/persona/v1/flags/activation_pigs"),{headers:{"Content-Type":"application/json; charset=utf-8"},credentials:"include",method:"POST",body:JSON.stringify(r)})}(a[e],t)}},d=a.some((function(e){return e.selected})),f=a.length/2;return b.a.createElement(b.a.Fragment,null,c()("main",{className:Object(H.cx)(ne.c,ne.d)},void 0,c()("div",{className:jn},void 0,Dl||(Dl=c()(pn,{})),c()(yn,{className:sl},void 0,"Beyond the headlines, what would you like to get from The Times?")),c()("div",{className:(s=f,Object(H.css)("display:flex;flex-wrap:wrap;justify-content:space-evenly;@supports (display:grid){display:grid;grid-column:main;justify-content:center;",cl({gridGap:["10px","null","20px",s>=5?"16px":null,"20px"],gridTemplateColumns:["1fr 1fr",null,null,"repeat(".concat(s,", auto)")]}),";}"))},void 0,a.map((function(e,t){var n=e.text,a=e.selected,i=e.icon;return c()(ll,{text:n,icon:i,selected:a,isCondensed:f>=5,handleProductItemClick:u(t)},n)})))),c()(K.a,{className:kn},void 0,c()("div",{className:Object(H.cx)(Cn,ul)},void 0,c()($.a,{className:dl,dataTestID:d?"save-and-continue-button":"maybe-later-button",onClick:d?function(){l(function(e){return Object(wn.a)({module:{element:{name:"save-products",label:"save-and-continue",productChannel:{"Channel name":Ul(e)}}}})}(a)),t(n)}:function(){l(Wl),t(n)}},void 0,d?"Save and continue":"Maybe later"))))},Hl=n("4mzW"),Yl=n("u1H9"),Zl=n("cDf5"),ql=n.n(Zl),Xl=n("5pww"),Ql={hasSeenFTUX:null},Jl=n("s5tu"),Kl="",$l="promotional",ec="newsletter-signup",tc="app-download",nc="customize-the-headlines",ac="success",ic="products",oc="https://www.nytimes.com",rc=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:oc,n=N.a.parse(e.search),a=n.redirect_uri||n.EXIT_URI,i="http"===(null==a?void 0:a.substring(0,4)),o="/"===(null==a?void 0:a.substring(0,1));if(a&&Object(Jl.isInternalLink)(a)){if(i)return a;if(o)return oc+a}return t},lc=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oc;window.location.assign(e)},cc=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=t.indexOf(e)+1;return void 0!==t[a]?t[a]+n:null},sc=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[nc,ac];return t.some((function(t){return e.endsWith(t)}))};function uc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var dc,fc,pc=function(e){var t=e.abra,n=e.geolocation,a=e.user,i=e.location,o=e.newsletterSubs,r=(null==n?void 0:n.country)||"US",l=null==n?void 0:n.continent,c=Object(R.h)(rc(i)),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:vi.env.ENVIRONMENT,n={};if("object"===ql()(e.debug)&&null!==e.debug&&"prd"!==t){var a=e.debug,i=a.entitlements,o=a.isCrosswordSubscriber,r=a.isSubscriber;Array.isArray(i)&&"string"==typeof i[0]&&(n.entitlements=i),"boolean"==typeof o&&(n.isCrosswordSubscriber=o),"boolean"==typeof r&&(n.isSubscriber=r)}return n}(function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xl.a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ql;try{e=JSON.parse(t.getItem("nyt.vi.onboarding"))||n}catch(t){e=n}return e}()),u=Object.keys(s).length>0;if(!Object(I.d)(a))return lc(Object(Yl.b)());var d=Object(I.f)(a),p=sc(i.pathname);if(d&&!p)return lc("".concat(Hl.b.WELCOME_SUBSCRIBER+i.search));var m=Object(z.f)(l,o),h=Object(ha.d)(a,ha.a);return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?uc(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):uc(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({continent:l,isDataReady:!0,debugMode:u,debugOverrides:s,isUserAVerizonStudent:h,EXIT_URI:c,products:[]},function(e){var t=e.country,n=e.promotionalNewsletter,a=void 0===n?{}:n,i=e.editMode,o=void 0!==i&&i,r=e.isUserAVerizonStudent,l="US"!==t,c=!a.subscribed&&(l||r),s=[Kl,ec,tc];return o?s=[Kl,nc,ac]:c&&(s=[Kl,$l,ec,tc]),{flow:s}}({abra:t,user:a,country:r,promotionalNewsletter:m,location:i,editMode:p,EXIT_URI:c,isUserAVerizonStudent:h}))};function mc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function hc(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?mc(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mc(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var bc="vi-".concat("getstarted"),gc=w()(dc||(dc=m()(["\n  query GetStartedQuery($uri: String!, $articleDataNotNeeded: Boolean!, $userId: UserIdentifier!) {\n    anyWork(id: $uri) @skip(if: $articleDataNotNeeded) {\n      ...AppDownload_article\n    }\n    user(identifier: $userId) {\n      ...NewsletterScreen_marketingPref\n    }\n  }\n  ","\n  ","\n"])),Jr.fragments.article,Ta.fragments.marketingPref),vc=function(e,t){return hc(hc({},e),t)};function yc(e){var t,n=e.location,a=e.match.params,i=e.history,o=e.subscriptionDetails,r=e.staticContext,l=Object(R.h)(rc(n)),s=Object(O.useQuery)(gc,{variables:{uri:l,userId:{token:S.a.load("NYT-S")||""},articleDataNotNeeded:!Object(R.g)(l)},ssr:!1}).data,d=Object(j.a)().newsletterSubs,f=null==d?void 0:d.map((function(e){return e.productCode})),p=Object(h.useRef)(null),m=Object(E.a)(),y=Object(C.a)(),w=Object(h.useRef)(null),x=Object(k.a)().user,P=Object(I.f)(x),M=Object(h.useReducer)(vc,{debugMode:!1,flow:[],isDataReady:!1,hasPreparedApplicationData:!1,isUserAVerizonStudent:null,EXIT_URI:null,hasExitedWelcome:!1,products:[]}),_=u()(M,2),B=_[0],D=_[1],W=Object(v.useTracking)({presentation:{pageType:"onboarding"},module:{context:"/get-started",region:"body"},eventData:{pagetype:"onboarding"}}),G=W.Track,F=W.trackEvent;Object(T.a)({route:"getstarted"});var V=null==a?void 0:a.route;Object(h.useEffect)((function(){if(n){var e=N.a.parse(null==n?void 0:n.search),t=null==e?void 0:e.EXIT_URI;try{var a=new URL(t),o=N.a.parse(a.search);if(null!=o&&o.liveEventId)return void lc(t)}catch(e){}}i.listen((function(e,t){e.pathname==="/get-started/".concat($l)&&"POP"===t&&F({event:"moduleInteraction",eventData:{trigger:"module",type:"ob_click"},module:{name:"back-button"}})}))}),[]),Object(h.useEffect)((function(){if(null!==x&&Array.isArray(f)&&m&&!p.current&&!B.hasPreparedApplicationData){p.current=!0;var e=pc({abra:y,geolocation:m,user:x,subscriptionDetails:o,debugMode:B.debugMode,location:n,subbedNewsletterCodes:f});e.hasPreparedApplicationData=!0,D(e),i.replace("/get-started/".concat(cc("",e.flow,n.search)))}w.current=y}),[y,m,i,P,n,f,V,B.EXIT_URI,B.debugMode,B.flow,o,x,B.hasPreparedApplicationData]);var H,Y,Z,q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e?i.push(e,t):setTimeout((function(){return lc(B.EXIT_URI)}),700)},X=function(e){D({products:e})},Q=B.flow,J=B.hasExitedWelcome,K=B.isDataReady,$=B.hasPreparedApplicationData,ee=B.isUserAVerizonStudent,te=B.EXIT_URI,ne=B.products,ae=m||{},ie=ae.continent,oe=ae.country;if(Q){H=cc(V,Q,n.search);var re=function(e,t){return{currentStep:t.indexOf(e),totalSteps:t.length-1}}(V,Q);Y=re.currentStep,Z=re.totalSteps}r&&(r.edge=bc,r.pageType="getstarted",r.surrogateControl="max-age=3600, stale-if-error=86400, stale-while-revalidate=86400");var le=$&&K,ce=!sc(V),se=ce&&Y&&le;return c()(G,{},void 0,c()(Ct.a,{currentStep:Y,totalSteps:Z,hasSteps:se,EXIT_URI:te,articleUri:null==s||null===(t=s.anyWork)||void 0===t?void 0:t.uri,handleBackToReading:function(){window.location.assign(te||"https://www.nytimes.com")},isTesting:Object(R.f)(n),isUserAVerizonStudent:ee},void 0,c()("div",{className:Nn},void 0,c()(A.a,{route:V,shouldUseDefault:!$}),ce&&b.a.createElement(b.a.Fragment,null,le&&c()(L.a,{visibleSubtext:le}),c()(qt,{onExitWelcome:function(){D({hasExitedWelcome:!0})},readyToRenderContent:le,shouldRenderScreenReaderMessage:1===Y})),c()(g.Switch,{},void 0,le&&b.a.createElement(b.a.Fragment,null,c()(g.Route,{path:"/get-started/".concat($l),render:function(){return c()(zn,{advanceToNextRoute:q,readyToShowNavBar:J,readyToDispatchImpression:J,newsletter:Object(z.f)(ie,f),nextRoute:H})}}),c()(g.Route,{path:"/get-started/".concat(ec),render:function(){return c()(Ta,{advanceToNextRoute:q,readyToShowNavBar:J,readyToDispatchImpression:J,marketingPref:null==s?void 0:s.user,newsletterSubs:f,nextRoute:H})}}),c()(g.Route,{path:"/get-started/".concat(tc),render:function(){return c()(Jr,{userCurrentLocation:oe||"US",article:null==s?void 0:s.anyWork})}}),c()(g.Route,{path:"/get-started/".concat(nc),render:function(){return c()(Et,{advanceToNextRoute:q,EXIT_URI:te,nextRoute:H})}}),c()(g.Route,{path:"/get-started/".concat(ic),render:function(){return c()(Vl,{advanceToNextRoute:q,nextRoute:H,products:ne,updateProducts:X,readyToDispatchImpression:J})}}),c()(g.Route,{path:"/get-started/".concat(ac),component:At})),!ce&&(fc||(fc=c()(g.Route,{component:U.a})))))))}yc.displayName="GetStarted",yc.defaultProps={staticContext:void 0,subscriptionDetails:[]};t.default=yc},JwCr:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("yFJX")).default;t.default=i},LpNy:function(e,t,n){"use strict";var a=n("gcR/"),i=n.n(a),o=(n("q1tI"),n("Jqp9")),r=n("Odck"),l=n("wXC7"),c=n.n(l),s=Object(o.css)("transition:all 500ms;padding:13px;z-index:",c.a.zIndex.dock,";width:100%;position:fixed;bottom:0;left:0;box-sizing:border-box;box-shadow:0 0 6px rgba(0,0,0,0.2);background-color:",c.a.color.white,";@supports (padding-bottom:max(13px,13px)){padding-bottom:max(env(safe-area-inset-bottom),13px);}@media (prefers-reduced-motion:reduce){transition:none;}"),u=Object(o.css)("transform:translateY(100px);opacity:0;"),d=Object(o.css)("opacity:0;"),f=function(e){var t=e.children,n=e.className,a=e.showBar,l=e.shouldTransition,c=e.forYouContinueButtonExitActiveClass,f=e.forYouContinueButtonExitClass,p=e.transitionTimeout;return i()(r.CSSTransition,{in:a,classNames:{appear:u,enter:u,exitActive:c||d,exit:f||d},timeout:p,appear:l&&a,unmountOnExit:!0},void 0,i()("div",{className:Object(o.cx)(s,n)},void 0,t))};f.displayName="GetStartedNavBar",f.defaultProps={className:void 0,showBar:!0,shouldTransition:!1,forYouContinueButtonExitActiveClass:void 0,forYouContinueButtonExitClass:void 0,transitionTimeout:400};t.a=f},O3NJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){return Object.assign(e,{event:"moduleInteraction",eventData:{trigger:"module",type:"click"}})}},PCFz:function(e,t,n){"use strict";var a,i,o,r,l=n("lSNA"),c=n.n(l),s=n("q1tI"),u=n.n(s),d=n("X6oL"),f=n("Jqp9"),p=n("gcR/"),m=n.n(p),h=n("PgO9"),b=n("HUmG"),g=u.a.forwardRef((function(e,t){var n=e.redirectUri,l=Object(h.a)().user,c=Object(b.d)(l)?"".concat(vi.env.AUTH_HOST,"/oauth/authorize"):n;return u.a.createElement("form",{ref:t,style:{visibility:"hidden"},method:"post",action:c,"data-testid":"MagicLinkForm"},a||(a=m()("input",{value:"web.fwk.vi",name:"client_id",type:"hidden"})),m()("input",{value:n,name:"redirect_uri",type:"hidden"}),i||(i=m()("input",{value:"code",name:"response_type",type:"hidden"})),o||(o=m()("input",{value:"no-state",name:"state",type:"hidden"})),r||(r=m()("input",{value:"default",name:"scope",type:"hidden"})))}));g.displayName="MagicLinkForm";var v=g;function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var w=Object(f.css)("background:none;border-radius:10px;"),O=u.a.forwardRef((function(e,t){var n=e.className,a=e.trackingObject,i=e.children,o=e.redirectUri,r=e.handleClick,l=Object(d.useTracking)().trackEvent,s=u.a.useRef(null);return u.a.createElement(u.a.Fragment,null,u.a.createElement("button",{ref:t,type:"button",onClick:function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({eventCallback:function(){r&&r(),s.current&&s.current.submit()},event:"moduleInteraction",eventData:{trigger:"module",type:"ob_click"},module:{element:{url:o}}},a);l(e)},className:Object(f.cx)(w,n),"data-testid":"getstarted-magic-link"},i),u.a.createElement(v,{ref:s,redirectUri:o}))}));O.defaultProps={trackingObject:{},className:void 0,children:"Read in the app",handleClick:null};t.a=O},PkOs:function(e,t,n){"use strict";n.d(t,"a",(function(){return H})),n.d(t,"b",(function(){return Y})),n.d(t,"c",(function(){return Z}));var a=n("gcR/"),i=n.n(a),o=(n("q1tI"),n("wXC7")),r=n.n(o),l=n("Jqp9"),c=Object(l.css)("opacity:0;transition:opacity 0.25s ease-in-out;"),s=Object(l.css)("opacity:1;transition:opacity 0.25s ease-in-out;"),u=function(e){var t=e.className,n=e.selected,a=e.fill;return i()("svg",{className:t,width:"18",height:"24",viewBox:"0 0 18 24",fill:"none"},void 0,i()("path",{d:"M1 0C0.447716 0 0 0.447715 0 1V22.1621C0 22.9546 0.877786 23.4322 1.54315 23.0017L9 18.1779L16.4568 23.0017C17.1222 23.4322 18 22.9546 18 22.1621V1C18 0.447716 17.5523 0 17 0H1Z",fill:a,className:n?s:c}),i()("path",{d:"M0 1C0 0.447715 0.447716 0 1 0H17C17.5523 0 18 0.447716 18 1V22.1621C18 22.9546 17.1222 23.4322 16.4568 23.0017L9 18.1779L1.54315 23.0017C0.877786 23.4322 0 22.9546 0 22.1621V1ZM2.34783 2.46703V19.5841L9 15.2809L15.6522 19.5841V2.46703H2.34783Z",fill:a}))};u.displayName="BookmarkIcon",u.defaultProps={className:void 0,selected:!1,fill:r.a.color.gray10};var d=function(e){var t=e.className,n=e.fill,a=e.secondaryFill;return i()("svg",{className:t,width:"21",height:"22",viewBox:"0 0 21 22",fill:"none"},void 0,i()("rect",{y:"0.0385742",width:"21",height:"21",fill:n}),i()("rect",{x:"1.53662",y:"1.5752",width:"8.70732",height:"8.70732",fill:a}),i()("rect",{x:"10.7559",y:"1.5752",width:"8.70732",height:"8.70732",fill:a}),i()("rect",{x:"1.53662",y:"10.7944",width:"8.70732",height:"8.70732",fill:n}),i()("rect",{x:"10.7559",y:"10.7944",width:"8.70732",height:"8.70732",fill:a}))};d.displayName="CrosswordIcon",d.defaultProps={className:void 0,fill:r.a.color.gray10,secondaryFill:"white"};var f=d,p=function(e){var t=e.className,n=e.fill;return i()("svg",{className:t,width:"25",height:"25",viewBox:"0 0 25 25",fill:"none"},void 0,i()("path",{d:"M13.0053 0.34045L15.9823 7.82998C16.0381 8.05689 16.263 8.17044 16.4879 8.17044L24.4625 8.73781C24.9681 8.79459 25.193 9.41864 24.7999 9.75914L18.6776 14.9224C18.5094 15.0359 18.4527 15.2627 18.5094 15.4897L20.4752 23.3197C20.5877 23.8303 20.082 24.2276 19.6321 23.9439L12.837 19.6316C12.6679 19.5182 12.4439 19.5182 12.2189 19.6316L5.36716 23.9439C4.91824 24.2276 4.41263 23.8303 4.52509 23.3197L6.49086 15.4897C6.54661 15.2627 6.49086 15.0359 6.32167 14.9224L0.200408 9.75914C-0.192744 9.41864 0.0312275 8.79459 0.536847 8.73781L8.51238 8.17044C8.73731 8.17044 8.90553 8.00021 9.01799 7.82998L11.994 0.34045C12.1065 -0.113483 12.7804 -0.113483 13.0053 0.34045Z",fill:n}))};p.displayName="FavoriteIcon",p.defaultProps={className:void 0,fill:r.a.color.gray10};var m=p,h=function(e){var t=e.className;return i()("svg",{className:t,width:"23",height:"24",viewBox:"0 0 23 24",fill:"none"},void 0,i()("path",{d:"M12.2823 9.17647H10.1647V22.5882H12.2823V9.17647Z",fill:r.a.color.gray20}),i()("path",{d:"M17.6471 5.64706C17.3647 5.64706 17.2235 5.64706 16.9412 5.64706C16.9412 2.54118 14.4 0 11.2941 0C8.61176 0 6.49412 1.83529 5.78824 4.23529H5.64706C2.54118 4.23529 0 6.77647 0 9.88235C0 12.9882 2.54118 15.5294 5.64706 15.5294H8.89412V9.17647V8.47059V7.76471H13.8353V8.47059V9.17647V15.5294H17.6471C20.3294 15.5294 22.5882 13.2706 22.5882 10.5882C22.5882 7.90588 20.3294 5.64706 17.6471 5.64706Z",fill:r.a.color.gray20}),i()("path",{d:"M15.2469 19.7647L11.294 24L7.34106 19.7647",fill:r.a.color.gray20}))};h.displayName="SaveIcon",h.defaultProps={className:void 0};n("cyDi");var b,g,v,y=function(e){var t=e.className;return i()("svg",{className:t,width:"40",height:"19",viewBox:"0 0 40 19",fill:"none","data-testid":"KeyIcon"},void 0,b||(b=i()("path",{d:"M35.0883 5H16C15.4477 5 15 5.44772 15 6V14.0002C15 14.5524 15.4477 15.0002 16 15.0002H17.7633C18.1782 15.0002 18.5501 14.7439 18.6978 14.3561L19.5049 12.2375C19.821 11.4076 20.9814 11.3709 21.3494 12.1791L22.4829 14.6682C22.8384 15.449 23.9475 15.449 24.3031 14.6682L25.5187 11.9987C25.8742 11.2179 26.9833 11.2179 27.3388 11.9987L28.5544 14.6682C28.91 15.449 30.0191 15.449 30.3746 14.6682L31.5902 11.9987C31.9457 11.2179 33.0548 11.2179 33.4104 11.9987L34.7929 15.0348C35.1174 15.7475 36.0981 15.8275 36.5338 15.1768L39.569 10.6442C39.8229 10.2651 39.788 9.76217 39.4841 9.4218L35.8342 5.33398C35.6445 5.12149 35.3732 5 35.0883 5Z",fill:"black"})),g||(g=i()("circle",{cx:"9.16681",cy:"9.16681",r:"9.16681",fill:"black"})),v||(v=i()("circle",{cx:"5.83598",cy:"9.16654",r:"2.50004",fill:"white"})))};y.displayName="KeyIcon",y.defaultProps={className:void 0};var w,O=y,x=function(e){var t=e.className;return i()("svg",{className:t,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none","data-testid":"CrosswordIconVariant"},void 0,w||(w=i()("path",{d:"M17.5815 -3.31969e-05H1.46845C1.07897 -3.31969e-05 0.705453 0.154797 0.430052 0.430198C0.154651 0.705599 -1.32787e-05 1.07912 -1.32787e-05 1.4686V17.5815C-1.32787e-05 17.971 0.154651 18.3445 0.430052 18.6199C0.705453 18.8953 1.07897 19.05 1.46845 19.05H17.5815C17.971 19.05 18.3445 18.8953 18.6199 18.6199C18.8953 18.3445 19.05 17.971 19.05 17.5815V1.4686C19.05 1.07912 18.8953 0.705599 18.6199 0.430198C18.3445 0.154797 17.971 -3.31969e-05 17.5815 -3.31969e-05ZM17.6903 9.51817H9.5318V17.6766H1.37334V9.51817H9.5318V1.35971H17.6903V9.51817Z",fill:"black"})))};x.displayName="CrosswordIconVariant",x.defaultProps={className:void 0};var N,j,k,E,C,T,I,S,R,z,A,L=x,P=function(e){var t=e.className;return i()("svg",{className:t,width:"16",height:"22",viewBox:"0 0 16 22",fill:"none","data-testid":"PodcastIcon"},void 0,N||(N=i()("path",{d:"M7.99516 0.430908C5.68452 0.430908 3.81055 2.2728 3.81055 4.54387H12.1798C12.1798 2.2728 10.3149 0.430908 7.99516 0.430908Z",fill:"black"})),j||(j=i()("path",{d:"M7.99516 13.267C10.3058 13.267 12.1798 11.4251 12.1798 9.15405H3.81055C3.81055 11.4251 5.68452 13.267 7.99516 13.267Z",fill:"black"})),k||(k=i()("path",{d:"M12.1798 5.46167H3.81055V6.38475H12.1798V5.46167Z",fill:"black"})),E||(E=i()("path",{d:"M12.1798 7.30786H3.81055V8.23094H12.1798V7.30786Z",fill:"black"})),C||(C=i()("path",{d:"M8.92233 16.5386H7.07617V19.3078H8.92233V16.5386Z",fill:"black"})),T||(T=i()("path",{d:"M6.97461 19.0976V21.1541H9.06692V19.0976H6.97461Z",fill:"black"})),I||(I=i()("path",{d:"M9.06887 19.0955C7.91355 19.0955 6.97656 20.0164 6.97656 21.1519H11.1612C11.1612 20.0164 10.2242 19.0955 9.06887 19.0955Z",fill:"black"})),S||(S=i()("path",{d:"M6.97708 19.0955C5.82175 19.0955 4.88477 20.0164 4.88477 21.1519H9.06938C9.06938 20.0164 8.13239 19.0955 6.97708 19.0955Z",fill:"black"})),R||(R=i()("path",{d:"M13.7543 9.14844C13.7543 12.2689 11.1708 14.8082 8.005 14.8082C4.83924 14.8082 2.24661 12.2689 2.24661 9.14844H0.154297C0.154297 13.4045 3.67483 16.8558 7.9959 16.8558C12.3169 16.8558 15.8375 13.3955 15.8375 9.14844H13.7543Z",fill:"black"})),z||(z=i()("path",{d:"M1.20045 8.12012C0.618244 8.12012 0.154297 8.58506 0.154297 9.14836H2.24661C2.24661 8.58506 1.78266 8.12012 1.20045 8.12012Z",fill:"black"})),A||(A=i()("path",{d:"M14.8001 8.12012C14.2179 8.12012 13.7539 8.57612 13.7539 9.14836H15.8462C15.8462 8.58506 15.3823 8.12012 14.8001 8.12012Z",fill:"black"})))};P.displayName="PodcastIcon",P.defaultProps={className:void 0};var M=P,_=function(e){var t=e.className,n=e.fill;return i()("svg",{className:t,width:"18",height:"31",viewBox:"0 0 18 31","data-testid":"BookmarkIconVariant"},void 0,i()("path",{clipRule:"evenodd",d:"m2,0c-1.1046,0 -2,0.89543 -2,2l0,27.9186c0,0.8387 0.9702,1.3048 1.6249,0.7807l7.2128,-5.7735l6.8036,5.6479c0.6516,0.541 1.6387,0.0775 1.6387,-0.7694l0,-27.8043c0,-1.10457 -0.8954,-2 -2,-2l-13.28,0z",fill:n,fillRule:"evenodd"}))};_.displayName="BookmarkIconVariant",_.defaultProps={className:void 0,fill:r.a.color.gray10};var B=_,D=Object(l.css)("width:30px;height:30px;"),U=Object(l.css)("width:27px;height:37px;"),W={icon:i()(m,{}),desktopName:"Follow topics",mobileName:"Follow your favorite topics",description:"Sign in once, and stay connected"},G={icon:i()(B,{}),desktopName:"Save articles for later",mobileName:"Save articles to read across devices",description:"Read across devices"},F={icon:i()(f,{}),desktopName:"Try a quick puzzle",mobileName:"Play the Mini Crossword",description:"Play the Mini Crossword"},V={icon:i()(O,{}),desktopName:"Remain logged-in",mobileName:"Remain logged-in",description:"Sign in once, and stay connected"},H=[W,G,F],Y=[V,G,F],Z=[V,{icon:i()(L,{className:D}),desktopName:"Try a quick puzzle",mobileName:"Try a quick puzzle",description:"Play the Mini Crossword"},{icon:i()(M,{className:U}),desktopName:"Get the latest podcasts",mobileName:"Get the latest podcasts",description:"Listen to stories from our journalists"},{icon:i()(B,{}),desktopName:"Save articles for later",mobileName:"Save articles for later",description:"Read across devices"}]},Rsy2:function(e,t,n){"use strict";var a=n("gcR/"),i=n.n(a),o=(n("q1tI"),n("Jqp9")),r=n("3Rk2"),l=n.n(r),c=n("wXC7"),s=n.n(c),u=l()(["@media (min-width: 375px)",s.a.breakpoint.small,s.a.breakpoint.medium,s.a.breakpoint.mediumLarge]),d=Object(o.css)("font-family:",s.a.font.franklinBase,";font-weight:",s.a.font.weight.medium,";color:",s.a.color.gray10,";text-align:left;max-width:674px;",u({fontSize:[s.a.font.size(15),s.a.font.size(18),null,s.a.font.size(26)],fontWeight:[s.a.font.weight.book,null,null,null,s.a.font.weight.light],lineHeight:[s.a.font.size(21),s.a.font.size(23),s.a.font.size(26),s.a.font.size(36)]})),f=function(e){var t=e.children,n=e.className;return i()("h1",{"data-testid":"SectionHeader",className:Object(o.cx)(d,n)},void 0,t)};f.displayName="SectionHeader",f.defaultProps={children:null,className:void 0};t.a=f},U4Kb:function(e,t,n){"use strict";n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return v}));var a=n("gcR/"),i=n.n(a),o=n("lSNA"),r=n.n(o),l=n("J4zp"),c=n.n(l),s=n("QILm"),u=n.n(s),d=n("q1tI"),f=["children"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={currentStep:0,totalSteps:0,hasSteps:!1,EXIT_URI:"https://www.nytimes.com",articleUri:"",handleBackToReading:function(){window.location.href="https://www.nytimes.com"},isSubscriber:!1,isTesting:!1,isUserAVerizonStudent:!1,followChannels:[]},b=n.n(d).a.createContext(h),g=function(){return Object(d.useContext)(b)},v=function(e){var t=e.children,n=u()(e,f),a=Object(d.useState)((null==n?void 0:n.followChannels)||[]),o=c()(a,2),r=o[0],l=o[1];return i()(b.Provider,{value:m(m({},n),{},{followChannels:r,handleUpdateFollowChannels:l})},void 0,t)};v.displayName="GetStartedProvider",v.defaultProps=h},U4Yh:function(e,t,n){"use strict";var a,i,o,r=n("VkAN"),l=n.n(r),c=n("gcR/"),s=n.n(c),u=n("lSNA"),d=n.n(u),f=n("q1tI"),p=n.n(f),m=n("eFc+"),h=n.n(m),b=n("Jqp9"),g=n("ZjMX"),v=n("PCFz"),y=n("PkOs"),w=n("3Rk2"),O=n.n(w),x=n("wXC7"),N=n.n(x),j=O()([N.a.breakpoint.small,N.a.breakpoint.medium,"@media (min-width: 834px)"]),k=Object(b.css)("background:",N.a.color.white,";box-shadow:0 2px 15px rgba(0,0,0,0.12);"),E=Object(b.css)(k," width:100%;margin:0 auto;box-sizing:border-box;",j({maxWidth:["503px",null,null,"600px"],padding:["19px 6% 11px",null,"29px 40px 15px","35px 47px 15px"]})),C=Object(b.css)("max-width:439px;",j({maxWidth:[null,null,"470px"],padding:["24px 16px","30px 24px","63px 78px 56px"]})),T=(N.a.color.black,Object(b.css)("letter-spacing:0.1px;color:",N.a.color.gray20,";font-family:",N.a.font.franklinBase,";font-weight:",N.a.font.weight.medium,";font-size:",N.a.font.size(12),";line-height:",N.a.font.size(14),";text-align:center;margin-top:10px;")),I=Object(b.css)("display:flex;flex-direction:column;",j({marginBottom:["31px",null,"37px"],maxWidth:[null,null,"314px"]}),";h2{font-size:",N.a.font.size(18),";line-height:",N.a.font.size(26),";font-family:",N.a.font.franklinBase,";font-weight:",N.a.font.weight.mediumBold,";}li{line-height:",N.a.font.size(16),";font-weight:",N.a.font.weight.medium,";display:inline-flex;align-items:center;font-size:themeUtils.font.size(16);",j({marginTop:["24px",null,"32px"]}),";}svg{",j({width:["20px","25px"],height:["20px","25px"]}),";margin-right:20px;}"),S=Object(b.css)("display:flex;flex-direction:column;"),R=Object(b.css)(N.a.button.base," height:40px;color:",N.a.color.white,";background-color:",N.a.color.gray10,";width:100%;margin:auto;"),z=Object(b.css)(j({marginTop:["20px","40px","28px"]}),";"),A=Object(b.css)("width:100%;");function L(e){var t,n=e.article,o=e.trackingObject,r=e.redirectUri,l=e.isFallback,c=e.isSubscriber,u=e.readInAppClickHandler;return s()("article",{className:Object(b.cx)(E,d()({},C,l)),"data-testid":"readinapp-article"},void 0,l?s()("div",{className:I},void 0,a||(a=s()("h2",{},void 0,"The New York Times App")),s()("ul",{className:S},void 0,c?y.c.map((function(e){return s()("li",{},e.mobileName,e.icon,e.mobileName)})):y.a.map((function(e){return s()("li",{},e.mobileName,p.a.cloneElement(e.icon),e.mobileName)})))):s()(g.a,{article:n}),s()(v.a,{className:Object(b.cx)(R,(t={},d()(t,A,l),d()(t,z,!l),t)),trackingObject:o,redirectUri:r,handleClick:u},void 0,"Read in app"),i||(i=s()("p",{className:T},void 0,"We’ll automatically log you in")))}L.displayName="ReadInAppCard",L.defaultProps={article:null,isFallback:!1,readInAppClickHandler:null},L.fragments={article:h()(o||(o=l()(["\n    fragment ReadInAppCard_article on Article {\n      id\n      ...ArticlePreview_article\n    }\n    ","\n  "])),g.a.fragments.article)};t.a=L},ZGZg:function(e,t,n){"use strict";var a=n("gcR/"),i=n.n(a),o=n("lSNA"),r=n.n(o),l=(n("q1tI"),n("Jqp9")),c=n("ZKN5"),s=n("wXC7"),u=n.n(s),d=Object(l.css)("transition:all 250ms ease;background-color:",u.a.color.gray10,";border:1px solid ",u.a.color.gray10,";color:",u.a.color.white,";padding:10px 0;border-radius:3px;text-align:center;font-family:",u.a.font.franklinBase,";font-weight:",u.a.font.weight.mediumBold,";height:40px;font-size:",u.a.font.size(16),";line-height:",u.a.font.size(18),";text-shadow:0 0 4px rgba(0,0,0,0.15);&:disabled{background-color:",u.a.color.gray50,";border:1px solid ",u.a.color.gray50,";transition:background-color 250ms ease;cursor:not-allowed;}&:hover:not(:disabled){background-color:",u.a.color.gray20,";border:1px solid ",u.a.color.gray20,";}"),f=Object(l.css)("color:",u.a.color.gray10,";background-color:",u.a.color.white,";text-shadow:none;&:hover{color:",u.a.color.white,";background-color:",u.a.color.gray10,";}"),p=function(e){var t,n=e.children,a=e.className,o=e.dataTestID,c=e.disabled,s=e.disabledButtonClass,u=e.lightBackground,p=e.onClick;return i()("button",{type:"button",className:Object(l.cx)(d,a,(t={},r()(t,s,c),r()(t,f,u),t)),disabled:c,onClick:p,"data-testid":o||"get-started-button"},void 0,n)};p.displayName="GetStartedButton",p.defaultProps={children:null,className:void 0,dataTestID:"",disabled:!1,lightBackground:!1,disabledButtonClass:""};t.a=Object(c.a)(p)},ZjMX:function(e,t,n){"use strict";var a,i=n("VkAN"),o=n.n(i),r=n("gcR/"),l=n.n(r),c=n("lSNA"),s=n.n(c),u=(n("q1tI"),n("17x9")),d=n.n(u),f=n("eFc+"),p=n.n(f),m=n("Jqp9"),h=n("3Rk2"),b=n.n(h),g=n("wXC7"),v=n.n(g),y=b()([v.a.breakpoint.small,v.a.breakpoint.medium,"@media (min-width: 834px)"]),w=Object(m.css)("display:flex;flex-direction:column;"),O=Object(m.css)("display:flex;justify-content:space-around;@media (min-width:375px){align-items:center;}"),x=Object(m.css)("justify-content:flex-start;"),N=Object(m.css)("text-align:start;@media (max-width:374px){padding-right:10px;}",y({paddingRight:["22px","0px","70px"]}),";"),j=Object(m.css)("margin:0 auto;",y({width:["40%",null,"145px","172px"],height:["40%",null,"145px","172px"]}),";"),k=Object(m.css)("font-family:",v.a.font.serifMedium,";font-weight:",v.a.font.weight.book,";@media (max-width:374px){font-size:",v.a.font.size(15),";line-height:1.25em;}",y({padding:["10px 0",null,"14px 0"],fontSize:[v.a.font.size(16),null,v.a.font.size(22),v.a.font.size(28)],lineHeight:[v.a.font.size(22),null,v.a.font.size(30),v.a.font.size(38)]}),";"),E=Object(m.css)("opacity:0.6;font-family:",v.a.font.franklinBase,";font-weight:",v.a.font.weight.medium,";font-size:",v.a.font.size(14),";line-height:",v.a.font.size(20),";",y({fontSize:[v.a.font.size(14),null,v.a.font.size(19),v.a.font.size(23)],lineHeight:[v.a.font.size(19),null,v.a.font.size(30),v.a.font.size(38)]}),";"),C=Object(m.css)("justify-content:flex-end;"),T=Object(m.css)("position:absolute;width:100%;height:100%;object-fit:cover;top:0;left:0;z-index:1;"),I=Object(m.css)("position:relative;z-index:5;text-align:start;padding:0 15px 4px;"),S=Object(m.css)("font-family:",v.a.font.cheltenham,";font-weight:",v.a.font.weight.medium,";font-size:",v.a.font.size(14),";line-height:",v.a.font.size(18),";color:",v.a.color.white,";letter-spacing:0.2px;margin-bottom:4px;"),R=Object(m.css)("font-family:",v.a.font.franklinBase,";font-weight:",v.a.font.weight.medium,";font-size:",v.a.font.size(12),";line-height:",v.a.font.size(18),";color:",v.a.color.white,";opacity:0.6;");function z(e){var t,n,a,i,o,r,c,u,d,f,p,h=e.article,b=h.bylines,g=h.headline,v=h.promotionalMedia,y=e.isVariant,z=e.className,A=(null==v||null===(t=v.video)||void 0===t||null===(n=t.crops)||void 0===n||null===(a=n[0])||void 0===a||null===(i=a.renditions)||void 0===i||null===(o=i[0])||void 0===o?void 0:o.url)||(null==v||null===(r=v.crops)||void 0===r||null===(c=r[0])||void 0===c||null===(u=c.renditions)||void 0===u||null===(d=u[0])||void 0===d?void 0:d.url)||(null==v?void 0:v.square),L=(null==v||null===(f=v.caption)||void 0===f?void 0:f.text)||"";return l()("div",{className:Object(m.cx)(w,s()({},C,y),z),"data-testid":"ArticlePreview"},void 0,l()("div",{className:Object(m.cx)((p={},s()(p,x,!A),s()(p,O,!y),p))},void 0,l()("div",{className:y?I:N},void 0,l()("h2",{className:y?S:k},void 0,g.default),l()("h3",{className:y?R:E},void 0,b.map((function(e){return e.renderedRepresentation})))),A&&l()("img",{className:y?T:j,src:A,alt:L})))}z.displayName="ArticlePreview";var A=d.a.shape({renditions:d.a.arrayOf(d.a.shape({url:d.a.string}))});d.a.arrayOf(d.a.shape({renderedRepresentation:d.a.string})).isRequired,d.a.shape({default:d.a.string}).isRequired,d.a.shape({crops:d.a.arrayOf(A),video:d.a.shape({crops:d.a.arrayOf(A)})});z.defaultProps={className:void 0,isVariant:!1},z.fragments={article:p()(a||(a=o()(["\n    fragment ArticlePreview_article on Article {\n      id\n      bylines {\n        renderedRepresentation\n      }\n      headline {\n        default\n      }\n      promotionalMedia {\n        ... on Image {\n          id\n          crops(cropNames: [MEDIUM_SQUARE]) {\n            renditions {\n              url\n            }\n          }\n        }\n        ... on Video {\n          id\n          video: promotionalMedia {\n            ... on Image {\n              id\n              crops(cropNames: [MEDIUM_SQUARE]) {\n                renditions {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  "])))};t.a=z},a1HW:function(e,t,n){"use strict";n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return h}));var a=n("Jqp9"),i=n("3Rk2"),o=n.n(i),r=n("wXC7"),l=n.n(r),c=o()(["@media (min-width: 361px)",l.a.breakpoint.small,l.a.breakpoint.medium,l.a.breakpoint.mediumLarge,"@media (min-width: 1220px)"]),s=Object(a.css)("grid-column:main;",c({flexGrow:[1,null,0]}),";img{margin:0 auto;",c({maxWidth:[null,null,null,null,"782px"]}),";align-self:center;}"),u=Object(a.css)("display:flex;flex-direction:column;align-items:center;position:relative;background-image:linear-gradient(270deg,#ecf42e -0.97%,#d7e1ba 100%);",c({gridColumn:["full-start/full-end",null,null,"main-start/main-end","main-start/main-end"],justifyContent:["center",null,null,"flex-start","flex-start"],height:["calc(100vh - 226px)","calc(100vh - 186px)",null,"calc(100vh - 200px)","calc(100vh - 240px)"],minHeight:["300px","350px",null,"450px","600px"],marginLeft:[null,null,null,"-20px","0px"],marginRight:[null,null,null,"-20px","0px"]}),";img,picture{z-index:100;}img{",c({width:["68vw",null,"34vw","490px"],paddingTop:["1vh","1vh","1vh","1vh","3vh"]}),";}&::before{z-index:0;height:100%;position:absolute;top:0;bottom:0;right:0;left:0;width:100%;content:'';opacity:0;background-image:linear-gradient(230deg,#d7e1ba -0.97%,#ecf42e 100%);animation:",Object(a.keyframes)("0%{opacity:0;}100%{opacity:1;}")," 5s 2s ease-in-out alternate infinite;}"),d=Object(a.css)("text-align:center;"),f=Object(a.css)(c({width:["130px","157px","160px",null,"180px"]}),";&:last-of-type{margin-left:20px;}"),p=Object(a.css)("margin-top:10px;"),m=Object(a.css)("z-index:1;",c({width:["66vw",null,null,"457px"],justifyContent:["flex-start !important",null,null,null,"center"]}),";"),h=Object(a.css)(c({justifyContent:["center",null,null,null,"space-between"]}),";")},aTgc:function(e,t,n){"use strict";n.d(t,"e",(function(){return j})),n.d(t,"c",(function(){return E})),n.d(t,"a",(function(){return I})),n.d(t,"b",(function(){return R})),n.d(t,"f",(function(){return z})),n.d(t,"d",(function(){return P}));var a=n("RIqP"),i=n.n(a),o=n("lSNA"),r=n.n(o),l=n("lwsE"),c=n.n(l),s=n("W8MJ"),u=n.n(s),d=n("ym5e"),f=n.n(d),p=n("j6EF"),m=n.n(p),h=n("/tu1"),b=n("N2/5"),g=n("nW1H");function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=g.EVENING_BRIEFING,O={};function x(e){var t,n=e.country,a=e.region,i=new Set(["AR","BO","CL","CO","CR","CU","DO","EC","ES","GT","GQ","HN","MX","NG","PA","PE","PR","PY","SV","UY","VE"]);return"US"===n?"CA"===a?t="CALI":"NY"===a&&(t="NY"):"CA"===n||"AU"===n?t=n:i.has(n)&&(t="LA"),t}function N(e){var t=x({country:e.country,region:e.region});return b.d[t]}function j(e){return O[e]||{}}Object.values(g).forEach((function(e){O[e.code]=Object.freeze(e)})),Object.freeze(O);var k=m()("count"),E=function(){function e(t){c()(this,e),Object.defineProperty(this,k,{writable:!0,value:1}),"number"==typeof t&&t>0&&(f()(this,k)[k]=t)}return u()(e,[{key:"count",value:function(){return f()(this,k)[k]}},{key:"getRecommendedNewsletters",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!Array.isArray(e))return[];for(var t=[],n=0;n<e.length;n+=1){if(t.length===f()(this,k)[k])return t;void 0!==O[e[n]]&&t.push(O[e[n]])}return e.slice(0,f()(this,k)[k])}}]),e}(),C=m()("newslettersByGeo"),T=m()("options"),I=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];c()(this,e),Object.defineProperty(this,C,{writable:!0,value:{AU:[g.AUSTRALIA_LETTER],CA:[g.CANADA_LETTER],CALI:[g.CALIFORNIA_TODAY],NY:[g.NEW_YORK_TODAY,g.WHERE_TO_EAT_NYC],LA:[g.EL_TIMES]}}),Object.defineProperty(this,T,{writable:!0,value:[]}),Array.isArray(t)&&(f()(this,T)[T]=t)}return u()(e,[{key:"getGeographicNewsletters",value:function(e){var t=e.country,n=void 0===t?"":t,a=e.region,i=x({country:n,region:void 0===a?"":a}),o=f()(this,C)[C][i];return o?f()(this,T)[T].filter((function(e){return o.includes(e)})):[]}}]),e}(),S=m()("newslettersByContinent"),R=function(){function e(){c()(this,e),Object.defineProperty(this,S,{writable:!0,value:{NA:g.MORNING_BRIEFING_US,EU:g.MORNING_BRIEFING_EU,AF:g.MORNING_BRIEFING_EU,AS:g.MORNING_BRIEFING_AE,OC:g.MORNING_BRIEFING_AE}})}return u()(e,[{key:"getMorningBriefing",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(null==e?void 0:e.continent)||"",n=f()(this,S)[S][t];return n||f()(this,S)[S].NA}}]),e}(),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={NA:"NN",EU:"MBE",AF:"MBE",AS:"MBAE",OC:"MBAE"},a=n[e]||"NN",i=!!/\bNN|MBE|MBAE\b/.test(t.join(" "));return y(y({},j(a)),{},{subscribed:i})},A=function(e,t,n){return Object(h.b)(e,"code").filter((function(e){var a=e.code;return a&&!(null!=t&&t.includes(a))&&!function(e,t){var n=e===w.code,a=!["NA","SA"].includes(null==t?void 0:t.continent);return n&&a}(a,n)}))},L=function(e){return null==e?void 0:e.reduce((function(e,t){var n={code:t.newsletterId,name:t.title,frequency:t.frequency,thumb:t.thumbImageUrl,description:t.caption};return[].concat(i()(e),[n])}),[])},P=function(e){var t=e.geolocation,n=e.newsletterSubs,a=e.isUserAVerizonStudent,o=e.hasOptedIntoMarketingEmails,r=e.hasAutoSubscribedToForYou,l=e.hasSubscribedToForYou,c=e.bauNewsletters,s=e.verizonStudentNewsletters,u=N(t),d=function(e){var t=e.geolocation,n=e.newsletterSubs,a=e.hasOptedIntoMarketingEmails,i=z(null==t?void 0:t.continent,n);return a?[]:[i]}({geolocation:t,newsletterSubs:n,hasOptedIntoMarketingEmails:o}),f=[];return f=a?i()(L(s)||[]):[].concat(i()(d),i()(L((null==c?void 0:c.slice(0,2))||[])),i()(u||[]),i()(L((null==c?void 0:c.slice(3,4))||[])),i()(L((null==c?void 0:c.slice(4))||[]))).filter((function(e){return"FORY"!==e.code||!r&&!l})),A(f,n,t)}},aanX:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i=a(n("q1tI")),o=(a(n("17x9")),a(n("wXC7")));function r(e){var t=e.className,n=e.stroke,a=e.strokeWidth;return i.default.createElement("svg",{className:t,viewBox:"0 0 12 12",stroke:n,strokeWidth:a,strokeLinecap:"round",style:{opacity:.95}},i.default.createElement("line",{x1:"11",y1:"1",x2:"1",y2:"11"}),i.default.createElement("line",{x1:"1",y1:"1",x2:"11",y2:"11"}))}r.displayName="CloseIcon",r.defaultProps={className:void 0,stroke:o.default.color.black,strokeWidth:"1"}},bmDE:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return r}));var a=600,i=740,o=1220,r=["cooking"]},cyDi:function(e,t,n){"use strict";var a=n("gcR/"),i=n.n(a),o=n("lSNA"),r=n.n(o),l=(n("q1tI"),n("Jqp9")),c=n("wXC7"),s=n.n(c),u=n("3Rk2"),d=n.n(u)()(["@media (min-width: 411px)","@media (min-width: 1024px)","@media (min-width: 1680px)"]),f=Object(l.css)(d({width:["30px","30px","35px"],height:["30px","30px","35px"]}),";"),p=Object(l.css)("transition:all 500ms ease;@media (prefers-reduced-motion:reduce){transition:none;}"),m=Object(l.css)(p," transform-origin:30% 50%;"),h=Object(l.css)(p," transform-origin:53% 60%;"),b=Object(l.css)("transform:rotate(40deg) scaleX(0.65);"),g=Object(l.css)("transform:rotate(40deg);"),v=Object(l.css)("&:hover > circle{fill:",s.a.color.gray20,";stroke:",s.a.color.gray20,";}"),y=Object(l.css)("&:hover > line,&:hover > circle{stroke:",s.a.color.gray20,";}"),w=function(e){var t,n,a,o=e.selected,c=e.size,u=e.color,d=e.upperRight,w=e.inverted,O=e.className;return n=o&&!w?u:!o&&w?"transparent":d?s.a.color.white:"transparent",a=o&&!w||!o&&w?s.a.color.white:u,i()("svg",{preserveAspectRatio:"xMinYMin meet",height:c,width:c,viewBox:"0 0 37 37","data-testid":"circular-plus-button-selected","data-selected":o,className:Object(l.cx)(O,(t={},r()(t,v,o&&!w),r()(t,y,!o&&!w),r()(t,f,d),t))},void 0,i()("circle",{className:p,cx:18,cy:18,r:17,stroke:w?a:u,fill:n,strokeWidth:"1.5"}),i()("line",{className:Object(l.cx)(m,r()({},b,o)),x1:11,y1:18,x2:25,y2:18,strokeWidth:o?3.5:2,stroke:a}),i()("line",{className:Object(l.cx)(h,r()({},g,o)),x1:18,y1:11,x2:18,y2:25,strokeWidth:o?3.5:2,stroke:a}))};w.displayName="CircularPlusButton",w.defaultProps={size:37,color:"black",className:void 0,upperRight:!0,inverted:!1};t.a=w},fuG8:function(e,t,n){"use strict";var a=n("gcR/"),i=n.n(a),o=(n("q1tI"),n("vftj")),r=n("U4Kb"),l="The New York Times",c="Get Started";function s(e){var t=e.route,n=e.shouldUseDefault,a=Object(r.b)(),s=a.currentStep,u=a.totalSteps,d=a.hasSteps?"Step ".concat(s," of ").concat(u):function(e){return e?null==e?void 0:e.split("-").map((function(e){return e[0].toUpperCase()+e.slice(1)})).join(" "):null}(t);return i()(o.Helmet,{defaultTitle:"".concat(l," - ").concat(c),titleTemplate:"".concat(l," - ").concat(c," %s")},void 0,d&&!n&&i()("title",{},void 0,d))}s.displayName="GetStartedHelmet",s.defaultProps={route:void 0,shouldUseDefault:!1},t.a=s},oXTd:function(e,t,n){"use strict";n.d(t,"i",(function(){return a})),n.d(t,"p",(function(){return i})),n.d(t,"q",(function(){return o})),n.d(t,"k",(function(){return r})),n.d(t,"n",(function(){return l})),n.d(t,"a",(function(){return c})),n.d(t,"l",(function(){return s})),n.d(t,"o",(function(){return u})),n.d(t,"j",(function(){return d})),n.d(t,"f",(function(){return f})),n.d(t,"h",(function(){return p})),n.d(t,"g",(function(){return m})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return v})),n.d(t,"m",(function(){return y}));var a={newsletterIndividualPage:"EmailSignup_NL_indiv_page",newsletterGridIndexPage:"EmailSignup_NL_index_page",newsletterSubOnlyIndexPage:"EmailSignup_NL_sub_only_index_page",onboardingAutoOptin:"Vi_Onboarding_auto_opt_v1",onboardingNewslettersGetStarted:"Vi_Onboarding_newsletters_getStarted",onboardingNewslettersGetStartedSub:"Vi_SubOnboarding_newsletters_getStarted",articleInline:"Vi_article_inline_v1",dynamicArticleInline:"Dynamic_article_inline_v1",onsiteNLTop:"OnsiteNL_top_v1",onsiteNLBottom:"OnsiteNL_bottom_v1",liveBlogPage:"LiveBlog_v1",emailSignupDock:"Vi_dock_v1",targetedNewsletterSignup:"Vi_article_recirc_v1"},i="SUBSCRIBER-ONLY NEWSLETTER",o="".concat(i,"S"),r="HIDDEN",l={BN:"es"},c={default:"default",alert:"alert"},s={seeSample:{"en-US":"Read the Latest",es:"Lee el más reciente"},sendFrequency:{"en-US":"Sent to Your Inbox",es:"Se envía a tu buzón"},contactUs:{"en-US":"Contact us",es:"Contáctenos"},privacyPolicy:{"en-US":"Privacy Policy",es:"Política de privacidad"}},u="Read the latest.",d={newsletterIndividualPage:"individual",newsletterGridIndexPage:"index",newsletterSubOnlyIndexPage:"subonly-index",article:"inline"},f="Thank you for signing up for 4 week complimentary access.",p="Thank you for signing up for this newsletter.",m="Thank you for signing up for these newsletters.",h="We’ve sent you a confirmation email.",b="We’ve sent you confirmation emails.",g="Thank you for signing up for this alert.",v="Thank you for signing up for these alerts.",y={NA:{kicker:"Stay up to date",caption:"Get informed as important news breaks around the world."},NN:{kicker:"Start your day",caption:"Make sense of the day’s news and ideas."},NE:{kicker:"Wind down",caption:"Find out the 10 most important things that happened today."},WG:{kicker:"What to watch",caption:"Discover streaming TV and movie recommendations from critic Margaret Lyons and friends."},RLW:{kicker:"What to read",caption:"Book recommendations from our critic Molly Young."},NC:{kicker:"Expert political analysis",caption:"Making sense of elections, politics and polling."},CLIM:{kicker:"Get clear-eyed analysis",caption:"Your must-read guide to the climate crisis."},TE:{kicker:"Your questions answered",caption:"Expert advice on life’s trickiest situations and moral dilemmas. "},PTG:{kicker:"Opinion Voice",caption:"Analyzing the American family, culture, politics and the way we live now."},DF:{kicker:"Opinion Voice",caption:"Reflections on law and culture, war and peace, and the deeper trends that define and divide America."},JBO:{kicker:"Opinion Voice",caption:"Historical context for present-day events."},PK:{kicker:"Opinion Voice",caption:"A guide to U.S. politics and the economy — from the mainstream to the wonkish."},INT:{kicker:"Decoding global events",caption:"Exploring the ideas and context behind major world events."},WTE:{kicker:"Find new favorites",caption:"Restaurant recommendations, from new places to beloved classics."},THW:{kicker:"Opinion Voice",caption:"Reflecting on matters of faith in private life and public discourse."},TMC:{kicker:"Opinion Voice",caption:"A sociologist’s perspective on culture, politics and the economics of our everyday lives."},RS:{kicker:"Keep up with the sport",caption:"News and analysis, on and off the pitch."},PW:{kicker:"Read reviews early",caption:"Get reviews of New York City restaurants sent to you directly — a day before everyone else."},PC:{kicker:"Opinion Voice",caption:"Offering sensible thinking on economics and the business issues that matter."},HH:{kicker:"Improve your well-being",caption:"Essential news and guidance to live your healthiest life."},DWW:{kicker:"Opinion Voice",caption:"Exploring climate change, technology, the future of the planet and how we live on it."},RD:{kicker:"Opinion Voice",caption:"The columnist reflects on culture and politics, but mostly culture."},AMP:{kicker:"Find your favorite song",caption:"Your alternative to the algorithm — a real, live human helps you discover songs you’ll love."},JM:{kicker:"Opinion Voice",caption:"Examining how race and language shape our politics and culture."},FB:{kicker:"Opinion Voice",caption:"Reflections on the mess (and magic) of politics and life."},WKDR:{kicker:"Our best weekend reads",caption:"Get stories handpicked by Times editors for you to enjoy each weekend."},FORY:{kicker:"A personal daily digest",caption:"Receive a roundup of the best stories for you, based on your interests."},TY:{kicker:"Gain perspective",caption:"Get expert analysis of the news and a guide to the big ideas shaping the world."},CK:{kicker:"What to cook",caption:"Feast on recipes, food writing and culinary inspiration from Sam Sifton and NYT Cooking."}}},sj7d:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.overlayClass=t.modalClass=t.dismissIconClass=t.dismissClass=t.bodyOpenClass=void 0;var i=n("Jqp9"),o=a(n("wXC7")),r=(0,i.css)("position:fixed;width:100%;overflow:hidden;");t.bodyOpenClass=r;var l=(0,i.css)("display:block;position:fixed;box-sizing:border-box;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:",o.default.zIndex.overlay,";background-color:rgba(0,0,0,0.5);opacity:1;");t.overlayClass=l;var c=(0,i.css)("position:fixed;top:0;left:0;right:0;bottom:0;overflow:auto;width:100%;box-shadow:none;border-radius:0;background-color:",o.default.color.white,";font-family:",o.default.font.franklinBase,";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:",o.default.color.black,";z-index:",o.default.zIndex.interstitialModal,";",o.default.breakpoint.small,"{width:450px;left:50%;top:50%;right:unset;bottom:unset;transform:translate(-50%,-50%);margin:0 auto;overflow:unset;position:absolute;border-radius:3px;box-shadow:0 0 8px rgba(0,0,0,0.2);}");t.modalClass=c;var s=(0,i.css)("position:absolute;top:1px;right:0;padding:16px;cursor:pointer;background-color:",o.default.color.white,";");t.dismissClass=s;var u=(0,i.css)("display:block;width:15px;height:15px;");t.dismissIconClass=u},taqW:function(e,t,n){"use strict";var a,i,o,r,l,c,s,u,d,f,p=n("gcR/"),m=n.n(p),h=n("lSNA"),b=n.n(h),g=n("q1tI"),v=n.n(g),y=n("Jqp9"),w=Object(y.css)("display:flex;justify-content:center;align-items:center;"),O=Object(y.css)("position:fixed;width:100%;height:100%;top:0;z-index:1;"),x=Object(y.keyframes)("100%{transform:rotate(360deg);transform-origin:center;}"),N=Object(y.css)("opacity:1;width:50px;animation:",x," 0.8s steps(10,end) infinite;");function j(e){var t=e.wrapperClass,n=e.iconClass,p=e.color,h=e.fixed;return m()("div",{className:Object(y.cx)(w,b()({},O,h),t),"data-testid":"loading-spinner"},void 0,m()("svg",{className:Object(y.cx)(N,n),alt:"Loading spinner icon",version:"1.1",width:"198px",height:"198px",viewBox:"-50 -50 100 100"},void 0,m()("g",{stroke:p,strokeWidth:"3.75",strokeLinecap:"round"},void 0,a||(a=m()("line",{x1:0,y1:-14,x2:0,y2:-30,opacity:"1"})),i||(i=m()("line",{x1:-8.229,y1:-11.33,x2:-17.63,y2:-24.27,opacity:"0.87"})),o||(o=m()("line",{x1:-13.31,y1:-4.326,x2:-28.53,y2:-9.271,opacity:"0.74"})),r||(r=m()("line",{x1:-13.31,y1:4.326,x2:-28.53,y2:9.271,opacity:"0.61"})),l||(l=m()("line",{x1:-8.23,y1:11.33,x2:-17.63,y2:24.27,opacity:"0.48"})),c||(c=m()("line",{x1:0,y1:14,x2:0,y2:30,opacity:"0.37"})),s||(s=m()("line",{x1:8.23,y1:11.33,x2:17.63,y2:24.27,opacity:"0.26"})),u||(u=m()("line",{x1:13.31,y1:4.33,x2:28.53,y2:9.27,opacity:"0.17"})),d||(d=m()("line",{x1:13.31,y1:-4.33,x2:28.53,y2:-9.27,opacity:"0.09"})),f||(f=m()("line",{x1:8.23,y1:-11.33,x2:17.63,y2:-24.27,opacity:"0.02"})))))}j.displayName="LoadingSpinner",j.defaultProps={wrapperClass:void 0,iconClass:void 0,color:"black",fixed:!0};t.a=v.a.memo(j)},vaxi:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){var t=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vi.env.ENVIRONMENT;switch(t){case"dev":case"stg":e="mwcm.stg.nyt.com";break;default:e="mwcm.nyt.com"}return"https://".concat(e,"/dam/mkt_assets/moco/")}(),n=!e||"NN"===e,a=n?"the_morning_sunrise_desktop":"mb_international_wide",i=n?"the_morning_sunrise_mobile":"mb_international_tall";return{morningUrl:"".concat(t,"newsletter/").concat(a,".png"),morningUrlSquare:"".concat(t,"newsletter/").concat(i,".png")}}},"w6U+":function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.enableBodyScroll=t.disableBodyScroll=t.clearAllBodyScrollLocks=void 0;var i=a(n("RIqP")),o=!1;if("undefined"!=typeof window){var r={get passive(){o=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var l,c,s="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),u=[],d=!1,f=-1,p=function(e){return u.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},m=function(e){var t=e||window.event;return!!p(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},h=function(){setTimeout((function(){void 0!==c&&(document.body.style.paddingRight=c,c=void 0),void 0!==l&&(document.body.style.overflow=l,l=void 0)}))};t.disableBodyScroll=function(e,t){if(s){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!u.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};u=[].concat((0,i.default)(u),[n]),e.ontouchstart=function(e){1===e.targetTouches.length&&(f=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-f;!p(e.target)&&(0===(null==t?void 0:t.scrollTop)&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?m(e):e.stopPropagation())}(t,e)},d||(document.addEventListener("touchmove",m,o?{passive:!1}:void 0),d=!0)}}else{!function(e){setTimeout((function(){if(void 0===c){var t=!0==!(null==e||!e.reserveScrollBarGap),n=window.innerWidth-document.documentElement.clientWidth;t&&n>0&&(c=document.body.style.paddingRight,document.body.style.paddingRight="".concat(n,"px"))}void 0===l&&(l=document.body.style.overflow,document.body.style.overflow="hidden")}))}(t);var a={targetElement:e,options:t||{}};u=[].concat((0,i.default)(u),[a])}};t.clearAllBodyScrollLocks=function(){s?(u.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),d&&(document.removeEventListener("touchmove",m,o?{passive:!1}:void 0),d=!1),u=[],f=-1):(h(),u=[])};t.enableBodyScroll=function(e){if(s){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,u=u.filter((function(t){return t.targetElement!==e})),d&&0===u.length&&(document.removeEventListener("touchmove",m,o?{passive:!1}:void 0),d=!1)}else 1===u.length&&u[0].targetElement===e?(h(),u=[]):u=u.filter((function(t){return t.targetElement!==e}))}},wmnt:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"f",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n("Jqp9"),i=n("3Rk2"),o=n.n(i),r=n("wXC7"),l=n.n(r),c=o()([l.a.breakpoint.medium,l.a.breakpoint.mediumLarge,"@media (min-width: 1220px)"]),s=Object(a.css)("display:flex;flex-direction:column;flex:auto;",c({marginLeft:["20px",null,null,"auto"],marginRight:["20px",null,null,"auto"],width:["100%",null,null,"1180px"]}),";@supports (display:grid){display:grid;grid-column-gap:20px;flex:initial;height:auto;",c({marginLeft:["0",null,null,"auto"],marginRight:["0",null,null,"auto"],gridTemplateColumns:["[full-start] 0px [main-start] repeat(2, 1fr) [main-end] 0px [full-end]","[full-start] 0px [main-start] repeat(4, 1fr) [main-end] 0px [full-end]","[full-start] 0px [main-start] repeat(6, 1fr) [main-end] 0px [full-end]","[main-start] repeat(6,1fr) [main-end]"]}),";}"),u=Object(a.css)("@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}animation:fadeIn 0.3s ease;"),d=Object(a.css)("@supports (display:grid){grid-column:main;}"),f=Object(a.css)("@supports (display:grid){grid-column:full;}"),p=(c({margin:["0 0 10px",null,"0 0 25px"]}),Object(a.css)(s,";grid-template-rows:min-content min-content auto;min-height:calc(100vh - 7.5rem);")),m=Object(a.css)(s,";grid-template-rows:min-content auto;min-height:calc(100vh - 8.5rem);align-items:center;")},yFJX:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.boldClass=void 0;var i=n("Jqp9"),o=a(n("wXC7")),r=(0,i.css)("font-weight:",o.default.font.weight.bold,";");t.boldClass=r;var l=(0,i.styled)("strong",{target:"ebyp5n10"})(r,";");t.default=l}}]);
//# sourceMappingURL=getstarted-85f3c45db382ae010009.js.map