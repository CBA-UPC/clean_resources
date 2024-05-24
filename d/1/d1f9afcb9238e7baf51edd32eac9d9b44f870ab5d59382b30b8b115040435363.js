/*Vex base css start*/
/*This must be at the start of the style file to enable override css*/

/*!
Copyright (c) 2013 HubSpot, Inc.
Released under the MIT license

https://github.com/HubSpot/vex/blob/master/LICENSE
*/
@keyframes apt-vex-fadein {
    0% {
        opacity: 0; }
    100% {
        opacity: 1; } }

@-webkit-keyframes apt-vex-fadein {
    0% {
        opacity: 0; }
    100% {
        opacity: 1; } }

@-moz-keyframes apt-vex-fadein {
    0% {
        opacity: 0; }
    100% {
        opacity: 1; } }

@-ms-keyframes apt-vex-fadein {
    0% {
        opacity: 0; }
    100% {
        opacity: 1; } }

@-o-keyframes apt-vex-fadein {
    0% {
        opacity: 0; }
    100% {
        opacity: 1; } }

@keyframes apt-vex-fadeout {
    0% {
        opacity: 1; }
    100% {
        opacity: 0; } }

@-webkit-keyframes apt-vex-fadeout {
    0% {
        opacity: 1; }
    100% {
        opacity: 0; } }

@-moz-keyframes apt-vex-fadeout {
    0% {
        opacity: 1; }
    100% {
        opacity: 0; } }

@-ms-keyframes apt-vex-fadeout {
    0% {
        opacity: 1; }
    100% {
        opacity: 0; } }

@-o-keyframes apt-vex-fadeout {
    0% {
        opacity: 1; }
    100% {
        opacity: 0; } }

@keyframes apt-vex-rotation {
    0% {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg); }
    100% {
        transform: rotate(359deg);
        -webkit-transform: rotate(359deg);
        -moz-transform: rotate(359deg);
        -ms-transform: rotate(359deg);
        -o-transform: rotate(359deg); } }

@-webkit-keyframes apt-vex-rotation {
    0% {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg); }
    100% {
        transform: rotate(359deg);
        -webkit-transform: rotate(359deg);
        -moz-transform: rotate(359deg);
        -ms-transform: rotate(359deg);
        -o-transform: rotate(359deg); } }

@-moz-keyframes apt-vex-rotation {
    0% {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg); }
    100% {
        transform: rotate(359deg);
        -webkit-transform: rotate(359deg);
        -moz-transform: rotate(359deg);
        -ms-transform: rotate(359deg);
        -o-transform: rotate(359deg); } }

@-ms-keyframes apt-vex-rotation {
    0% {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg); }
    100% {
        transform: rotate(359deg);
        -webkit-transform: rotate(359deg);
        -moz-transform: rotate(359deg);
        -ms-transform: rotate(359deg);
        -o-transform: rotate(359deg); } }

@-o-keyframes apt-vex-rotation {
    0% {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg); }
    100% {
        transform: rotate(359deg);
        -webkit-transform: rotate(359deg);
        -moz-transform: rotate(359deg);
        -ms-transform: rotate(359deg);
        -o-transform: rotate(359deg); } }

.apt-vex.vex, .apt-vex.vex *, .apt-vex.vex *:before, .apt-vex.vex *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box; }

.apt-vex.vex {
    position: fixed;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    z-index: 99999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; }

.apt-vex.vex-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll; }

.apt-vex .vex-overlay {
    background: #000;
    filter: alpha(opacity=40);
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)"; }

.apt-vex .vex-overlay {
    animation: apt-vex-fadein 0.5s forwards;
    -webkit-animation: apt-vex-fadein 0.5s forwards;
    -moz-animation: apt-vex-fadein 0.5s forwards;
    -ms-animation: apt-vex-fadein 0.5s forwards;
    -o-animation: apt-vex-fadein 0.5s forwards;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: fixed;
    background: rgba(0, 0, 0, 0.4);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; 
}

.apt-vex.vex.vex-closing .vex-overlay {
    animation: apt-vex-fadeout 0.5s forwards;
    -webkit-animation: apt-vex-fadeout 0.5s forwards;
    -moz-animation: apt-vex-fadeout 0.5s forwards;
    -ms-animation: apt-vex-fadeout 0.5s forwards;
    -o-animation: apt-vex-fadeout 0.5s forwards;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
 }

.apt-vex .vex-content {
    animation: apt-vex-fadein 0.5s forwards;
    -webkit-animation: apt-vex-fadein 0.5s forwards;
    -moz-animation: apt-vex-fadein 0.5s forwards;
    -ms-animation: apt-vex-fadein 0.5s forwards;
    -o-animation: apt-vex-fadein 0.5s forwards;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background: #fff; }
.apt-vex.vex.vex-closing .vex-content {
    animation: apt-vex-fadeout 0.5s;
    -webkit-animation: apt-vex-fadeout 0.5s forwards;
    -moz-animation: apt-vex-fadeout 0.5s forwards;
    -ms-animation: apt-vex-fadeout 0.5s forwards;
    -o-animation: apt-vex-fadeout 0.5s forwards;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
 }

.apt-vex .vex-close:before {
    font-family: Arial, sans-serif;
    content: ""; }

.apt-vex .vex-dialog-form {
    margin: 0; }

.apt-vex .vex-dialog-button {
    text-rendering: optimizeLegibility;
    -moz-appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent; }

.apt-vex .vex-loading-spinner {
    animation: apt-vex-rotation 0.7s linear infinite;
    -webkit-animation: apt-vex-rotation 0.7s linear infinite;
    -moz-animation: apt-vex-rotation 0.7s linear infinite;
    -ms-animation: apt-vex-rotation 0.7s linear infinite;
    -o-animation: apt-vex-rotation 0.7s linear infinite;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-box-shadow: 0 0 1em rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 0 1em rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.1);
    position: fixed;
    z-index: 1112;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 2em;
    width: 2em;
    background: #fff; }

body.apt-vex.vex-open {
    overflow: hidden;
}

/*Vex base css ends*/
/*Vex theme os start*/

@keyframes apt-vex-flyin {
    0% {
        opacity: 0;
        transform: translateY(-40px);
        -webkit-transform: translateY(-40px);
        -moz-transform: translateY(-40px);
        -ms-transform: translateY(-40px);
        -o-transform: translateY(-40px); }
    100% {
        opacity: 1;
        transform: translateY(0);
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0); } }

@-webkit-keyframes apt-vex-flyin {
    0% {
        opacity: 0;
        transform: translateY(-40px);
        -webkit-transform: translateY(-40px);
        -moz-transform: translateY(-40px);
        -ms-transform: translateY(-40px);
        -o-transform: translateY(-40px); }
    100% {
        opacity: 1;
        transform: translateY(0);
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0); } }

@-moz-keyframes apt-vex-flyin {
    0% {
        opacity: 0;
        transform: translateY(-40px);
        -webkit-transform: translateY(-40px);
        -moz-transform: translateY(-40px);
        -ms-transform: translateY(-40px);
        -o-transform: translateY(-40px); }
    100% {
        opacity: 1;
        transform: translateY(0);
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0); } }

@-ms-keyframes apt-vex-flyin {
    0% {
        opacity: 0;
        transform: translateY(-40px);
        -webkit-transform: translateY(-40px);
        -moz-transform: translateY(-40px);
        -ms-transform: translateY(-40px);
        -o-transform: translateY(-40px); }
    100% {
        opacity: 1;
        transform: translateY(0);
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0); } }

@-o-keyframes apt-vex-flyin {
    0% {
        opacity: 0;
        transform: translateY(-40px);
        -webkit-transform: translateY(-40px);
        -moz-transform: translateY(-40px);
        -ms-transform: translateY(-40px);
        -o-transform: translateY(-40px); }
    100% {
        opacity: 1;
        transform: translateY(0);
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0); } }

@keyframes apt-vex-flyout {
    0% {
        opacity: 1;
        transform: translateY(0);
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0); }
    100% {
        opacity: 0;
        transform: translateY(-40px);
        -webkit-transform: translateY(-40px);
        -moz-transform: translateY(-40px);
        -ms-transform: translateY(-40px);
        -o-transform: translateY(-40px); } }

@-webkit-keyframes apt-vex-flyout {
    0% {
        opacity: 1;
        transform: translateY(0);
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0); }
    100% {
        opacity: 0;
        transform: translateY(-40px);
        -webkit-transform: translateY(-40px);
        -moz-transform: translateY(-40px);
        -ms-transform: translateY(-40px);
        -o-transform: translateY(-40px); } }

@-moz-keyframes apt-vex-flyout {
    0% {
        opacity: 1;
        transform: translateY(0);
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0); }
    100% {
        opacity: 0;
        transform: translateY(-40px);
        -webkit-transform: translateY(-40px);
        -moz-transform: translateY(-40px);
        -ms-transform: translateY(-40px);
        -o-transform: translateY(-40px); } }

@-ms-keyframes apt-vex-flyout {
    0% {
        opacity: 1;
        transform: translateY(0);
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0); }
    100% {
        opacity: 0;
        transform: translateY(-40px);
        -webkit-transform: translateY(-40px);
        -moz-transform: translateY(-40px);
        -ms-transform: translateY(-40px);
        -o-transform: translateY(-40px); } }

@-o-keyframes apt-vex-flyout {
    0% {
        opacity: 1;
        transform: translateY(0);
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0); }
    100% {
        opacity: 0;
        transform: translateY(-40px);
        -webkit-transform: translateY(-40px);
        -moz-transform: translateY(-40px);
        -ms-transform: translateY(-40px);
        -o-transform: translateY(-40px); } }

@keyframes apt-vex-pulse {
    0% {
        -moz-box-shadow: inset 0 0 0 300px transparent;
        -webkit-box-shadow: inset 0 0 0 300px transparent;
        box-shadow: inset 0 0 0 300px transparent; }
    70% {
        -moz-box-shadow: inset 0 0 0 300px rgba(255, 255, 255, 0.25);
        -webkit-box-shadow: inset 0 0 0 300px rgba(255, 255, 255, 0.25);
        box-shadow: inset 0 0 0 300px rgba(255, 255, 255, 0.25); }
    100% {
        -moz-box-shadow: inset 0 0 0 300px transparent;
        -webkit-box-shadow: inset 0 0 0 300px transparent;
        box-shadow: inset 0 0 0 300px transparent; } }

@-webkit-keyframes apt-vex-pulse {
    0% {
        -moz-box-shadow: inset 0 0 0 300px transparent;
        -webkit-box-shadow: inset 0 0 0 300px transparent;
        box-shadow: inset 0 0 0 300px transparent; }
    70% {
        -moz-box-shadow: inset 0 0 0 300px rgba(255, 255, 255, 0.25);
        -webkit-box-shadow: inset 0 0 0 300px rgba(255, 255, 255, 0.25);
        box-shadow: inset 0 0 0 300px rgba(255, 255, 255, 0.25); }
    100% {
        -moz-box-shadow: inset 0 0 0 300px transparent;
        -webkit-box-shadow: inset 0 0 0 300px transparent;
        box-shadow: inset 0 0 0 300px transparent; } }

@-moz-keyframes apt-vex-pulse {
    0% {
        -moz-box-shadow: inset 0 0 0 300px transparent;
        -webkit-box-shadow: inset 0 0 0 300px transparent;
        box-shadow: inset 0 0 0 300px transparent; }
    70% {
        -moz-box-shadow: inset 0 0 0 300px rgba(255, 255, 255, 0.25);
        -webkit-box-shadow: inset 0 0 0 300px rgba(255, 255, 255, 0.25);
        box-shadow: inset 0 0 0 300px rgba(255, 255, 255, 0.25); }
    100% {
        -moz-box-shadow: inset 0 0 0 300px transparent;
        -webkit-box-shadow: inset 0 0 0 300px transparent;
        box-shadow: inset 0 0 0 300px transparent; } }

@-ms-keyframes apt-vex-pulse {
    0% {
        -moz-box-shadow: inset 0 0 0 300px transparent;
        -webkit-box-shadow: inset 0 0 0 300px transparent;
        box-shadow: inset 0 0 0 300px transparent; }
    70% {
        -moz-box-shadow: inset 0 0 0 300px rgba(255, 255, 255, 0.25);
        -webkit-box-shadow: inset 0 0 0 300px rgba(255, 255, 255, 0.25);
        box-shadow: inset 0 0 0 300px rgba(255, 255, 255, 0.25); }
    100% {
        -moz-box-shadow: inset 0 0 0 300px transparent;
        -webkit-box-shadow: inset 0 0 0 300px transparent;
        box-shadow: inset 0 0 0 300px transparent; } }

@-o-keyframes apt-vex-pulse {
    0% {
        -moz-box-shadow: inset 0 0 0 300px transparent;
        -webkit-box-shadow: inset 0 0 0 300px transparent;
        box-shadow: inset 0 0 0 300px transparent; }
    70% {
        -moz-box-shadow: inset 0 0 0 300px rgba(255, 255, 255, 0.25);
        -webkit-box-shadow: inset 0 0 0 300px rgba(255, 255, 255, 0.25);
        box-shadow: inset 0 0 0 300px rgba(255, 255, 255, 0.25); }
    100% {
        -moz-box-shadow: inset 0 0 0 300px transparent;
        -webkit-box-shadow: inset 0 0 0 300px transparent;
        box-shadow: inset 0 0 0 300px transparent; } }

.apt-vex.vex.vex-theme-os {
    padding-top: 160px;
    padding-bottom: 160px; }
.apt-vex.vex.vex-theme-os.vex-closing .vex-content {
    animation: apt-vex-flyout 0.5s forwards;
    -webkit-animation: apt-vex-flyout 0.5s forwards;
    -moz-animation: apt-vex-flyout 0.5s forwards;
    -ms-animation: apt-vex-flyout 0.5s forwards;
    -o-animation: apt-vex-flyout 0.5s forwards;
    -webkit-backface-visibility: hidden; 
    backface-visibility: hidden;
}
.apt-vex.vex.vex-theme-os .vex-content {
    animation: apt-vex-flyin 0.5s forwards;
    -webkit-animation: apt-vex-flyin 0.5s forwards;
    -moz-animation: apt-vex-flyin 0.5s forwards;
    -ms-animation: apt-vex-flyin 0.5s forwards;
    -o-animation: apt-vex-flyin 0.5s forwards;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}
.apt-vex.vex.vex-theme-os .vex-content {
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-box-shadow: inset 0 1px #a6a6a6, 0 0 0 1px rgba(0, 0, 0, 0.08);
    -webkit-box-shadow: inset 0 1px #a6a6a6, 0 0 0 1px rgba(0, 0, 0, 0.08);
    box-shadow: inset 0 1px #a6a6a6, 0 0 0 1px rgba(0, 0, 0, 0.08);
    font-family: "Helvetica Neue", sans-serif;
    border-top: 20px solid #bbb;
    background: #f0f0f0;
    color: #444;
    padding: 0px;
    position: relative;
    margin: 0 auto;
    max-width: 100%;
    width: 450px;
    font-size: 1em;
    line-height: normal; }
.apt-vex.vex.vex-theme-os .vex-content h1, .apt-vex.vex.vex-theme-os .vex-content h2, .apt-vex.vex.vex-theme-os .vex-content h3, .apt-vex.vex.vex-theme-os .vex-content h4, .apt-vex.vex.vex-theme-os .vex-content h5, .apt-vex.vex.vex-theme-os .vex-content h6, .apt-vex.vex.vex-theme-os .vex-content p, .apt-vex.vex.vex-theme-os .vex-content ul, .apt-vex.vex.vex-theme-os .vex-content li {
    color: inherit; }
.apt-vex.vex.vex-theme-os .vex-close {
    -moz-border-radius: 0 5px 0 0;
    -webkit-border-radius: 0 5px 0 0;
    border-radius: 0 5px 0 0;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer; }
.apt-vex.vex.vex-theme-os .vex-close:before {
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    position: absolute;
    /*content: "\00D7";*/
    font-size: 26px;
    font-weight: normal;
    line-height: 31px;
    height: 30px;
    width: 30px;
    text-align: center;
    top: 3px;
    right: 3px;
    color: #bbb;
    background: transparent; }
.apt-vex.vex.vex-theme-os .vex-close:hover:before, .apt-vex.vex.vex-theme-os .apt-vex.vex-close:active:before {
    color: #777;
    background: #e0e0e0;
}
.apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-message {
    margin-bottom: .5em; }
.apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input {
    margin-bottom: 1em; }
.apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input select, .apt-vex.vex.vex-theme-os .apt-vex.vex-dialog-form .apt-vex.vex-dialog-input textarea, .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="date"], .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="datetime"], .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="datetime-local"], .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="email"], .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="month"], .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="number"], .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="password"], .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="search"], .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="tel"], .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="text"], .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="time"], .apt-vex.vex.vex-theme-os .vex-dialog-form .apt-vex.vex-dialog-input input[type="url"], .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="week"] {
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    background: #fff;
    width: 100%;
    padding: .25em .67em;
    border: 0;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    min-height: 2.5em;
    margin: 0 0 .25em; }
.apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input select:focus, .apt-vex.vex.vex-theme-os .apt-vex.vex-dialog-form .vex-dialog-input textarea:focus, .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="date"]:focus, .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="datetime"]:focus, .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="datetime-local"]:focus, .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="email"]:focus, .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="month"]:focus, .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="number"]:focus, .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="password"]:focus, .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="search"]:focus, .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="tel"]:focus, .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="text"]:focus, .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="time"]:focus, .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="url"]:focus, .apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-input input[type="week"]:focus {
    -moz-box-shadow: inset 0 0 0 1px #3288e6;
    -webkit-box-shadow: inset 0 0 0 1px #3288e6;
    box-shadow: inset 0 0 0 1px #3288e6;
    outline: none; }
.apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-buttons {
    *zoom: 1; }
.apt-vex.vex.vex-theme-os .vex-dialog-form .vex-dialog-buttons:after {
    content: "";
    display: table;
    clear: both; }
.apt-vex.vex.vex-theme-os .vex-dialog-button {
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    border: 0;
    float: right;
    margin: 0 0 0 .5em;
    font-family: inherit;
    text-transform: uppercase;
    letter-spacing: .1em;
    font-size: .8em;
    line-height: 1em;
    padding: .75em 2em; }
.apt-vex.vex.vex-theme-os .vex-dialog-button.vex-last {
    margin-left: 0; }
.apt-vex.vex.vex-theme-os .vex-dialog-button:focus {
    animation: apt-vex-pulse 1.1s infinite;
    -webkit-animation: apt-vex-pulse 1.1s infinite;
    -moz-animation: apt-vex-pulse 1.1s infinite;
    -ms-animation: apt-vex-pulse 1.1s infinite;
    -o-animation: apt-vex-pulse 1.1s infinite;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    outline: none; }
@media (max-width: 568px) {
    .apt-vex.vex.vex-theme-os .vex-dialog-button:focus {
        animation: none;
        -webkit-animation: none;
        -moz-animation: none;
        -ms-animation: none;
        -o-animation: none;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
     } }
.apt-vex.vex.vex-theme-os .vex-dialog-button.vex-dialog-button-primary {
    background: #3288e6;
    color: #fff; }
.apt-vex.vex.vex-theme-os .vex-dialog-button.vex-dialog-button-secondary {
    background: #e0e0e0;
    color: #777; }

.apt-vex.vex-loading-spinner.vex-theme-os {
    -moz-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2), 0 0 0.5em rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2), 0 0 0.5em rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2), 0 0 0.5em rgba(0, 0, 0, 0.2);
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    border-radius: 100%;
    background: rgba(255, 255, 255, 0.2);
    width: 0;
    height: 0;
    border: 1.2em solid #bbb;
    border-top-color: #f0f0f0;
    border-bottom-color: #f0f0f0;
}

/*Vex theme os ends*/
/**
Override for vex to disable overlay
 */
.apt-vex.vex.apt-popup-disable-overlay{
    padding : 0;
    /*z-index: 999999;*/
    position: static;
    overflow: visible;
}

.apt-vex.vex.apt-popup-disable-overlay .vex-overlay{
    display: none;
    z-index: 99999;
}
body.apt-vex.vex-open{
    overflow: auto;
}

html.apt-non-scroll, body.apt-vex.apt-non-scroll{
    overflow: hidden;
}
.apt-vex.vex.vex-theme-os .apt-popup-content-disable-overlay{
    padding: 0;
    margin: 0;
    position: absolute;
}

.apt-vex.vex.vex-theme-os .vex-close:hover:before, .apt-vex.vex.vex-theme-os .vex-close:active:before {
    background: none;
}
/*End override overlay*/

/** Guide */
.apt-guide-overlay-top, .apt-guide-overlay-bottom {
    position: fixed;
    transition: all 1s ease;
    z-index: 99999;
}

.apt-guide-overlay-left, .apt-guide-overlay-right {
    height: 100%;
    position: fixed;
    transition: all 1s ease;
    z-index: 99999;
}

.apt-guide-target-block {
    z-index: 99999;
    position: fixed;
    background-color: transparent;
}

.apt-vex.vex.vex-theme-os .apt-carousel-popup {
    /*border-radius: 6px;*/
    box-shadow: unset;
    border-top: none;
    background-color: white;
    z-index: 2147483646;
}

.apt-vex.vex.vex-theme-os .apt-guide-popup {
    /*border-radius: 6px;*/
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    border-top: none;
    background-color: white;
    z-index: 2147483647;
}

.apt-vex.vex.vex-theme-os .apt-survey-popup.apt-engagement-wrapper-survey {
    /*border-radius: 6px;*/
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    border-top: none;
    background-color: white;
    z-index: 2147483646;

    /*copied from .apt-survey-multi-choices-step 31.1.19 bugathon*/
    padding: 15px 25px;
    display: flex;
    display: -webkit-flex;
    display : -ms-flexbox;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    -ms-flex-pack: center;
}

.px-survey-label {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 4px;
    min-width: 60px;
    height: 32px;
    padding: 8px;
}

.px-survey-labels {
    display: none;
    -webkit-flex-flow: wrap;
    -ms-flex-flow: wrap;
    flex-flow: wrap;
    gap: 8px;
    margin-bottom: 15px;
    padding: 0 45px;
    width: 100%;
}

.px-survey-labels.px-labels-show {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

.guide-initial-position {
    top: 50%;
    left: 50%;
}


.apt-vex.vex.vex-theme-os .apt-dialog-popup{
    /*border-radius: 6px;*/
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    border-top: none;
    background-color: white;
    z-index: 99999;
    position: absolute;
    /*overflow: scroll;*/
}

.apt-column-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.apt-guide-tooltip::after{
    content: "";
    position: absolute;
    border: 12px solid;
}

.apt-guide-arrow-top::after, .apt-guide-arrow-bottom::after{
    margin-left: -5px;
}

.apt-guide-arrow-center:after{
    left: 50%;
}

.apt-guide-arrow-top::after{
    bottom: 100%;
    border-color: transparent transparent white transparent;
}

.apt-guide-arrow-bottom::after{
    top: 100%;
    border-color: white transparent transparent transparent;
}

.apt-guide-arrow-left::after, .apt-guide-arrow-right::after{
    margin-top: -12px;
    top: 50%;
}

.apt-guide-arrow-left::after{
    right: 100%;
    border-color: transparent white transparent transparent;
}

.apt-guide-arrow-right::after{
    left: 100%;
    border-color: transparent transparent transparent white;
}

.apt-guide-arrow-top-left::after{
    border-width: 0px 20px 20px 0px;
    top: -16px;
    left: 5px;
}

.apt-guide-arrow-top-right::after{
    border-width: 0px 0px 20px 20px;
    top: -16px;
    right: 0px;
}

.apt-vex.vex.vex-theme-os .apt-guide-popup.apt-guide-arrow-bottom-right {
    border-bottom-right-radius: 0px;
}

.apt-guide-arrow-bottom-right::after{
    border-width: 20px 0px 0px 20px;
    top: 98%;
    right: 0px;
}

.apt-vex.vex.vex-theme-os .apt-guide-popup.apt-guide-arrow-bottom-left {
    border-bottom-left-radius: 0px;
}
.apt-guide-arrow-bottom-left::after{
    border-width: 20px 20px 0px 0px;
    top: 98%;
    left: 5px;
}

.apt-step-content{
    display: flex;
    display: -webkit-flex;
    display : -ms-flexbox;
    flex-direction: column;
    -ms-flex-direction: column;
    /*padding: 10px;*/
    height: 100%;
    justify-content: space-between;
}

/*
Setting up this due to APP-22580. putting it as soon as
.apt-step-content class is defined so any class defined below can override it
*/
.apt-step-content div {
    width: auto;
}

.apt-step-footer-buttons{
    /*height: 24px;*/
    cursor: pointer;
    display : -ms-flexbox;
    height: 26px;
}

.apt-step-footer-next {
    margin-left: 5px;
}

.apt-sdk .apt-step-footer {
    /*position: absolute;*/
    bottom: 5px;
    width: 100%;
    padding: 0px 15px 15px 20px;
    line-height: normal;
    display : -ms-flexbox;
    height: 45px;
}

.apt-guide-content-padding {
    /*padding: 16px;*/
}

.apt-sdk .apt-guide-content-wrapper {
    /*height: 100%;*/
    /*.apt-step-content*/
    line-height: 1.2;
    overflow-x: auto;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    overflow-wrap: break-word;
}

.apt-sdk .apt-guide-tooltip-content{
    padding: 10px 10px 0;
    margin-bottom: 45px;
}

.apt-sdk .apt-guide-tooltip-content-navigation {
    padding: 10px 10px 10px;
}

.apt-step-wrapper{
    /*height: 100%;*/
    /*overflow-x: auto;*/
    /*-ms-overflow-style: -ms-autohiding-scrollbar;*/
    overflow-wrap: break-word;
}

/* 
    Disable ALL vex transitions
    We can just set to none, because the style changes of the animation will not take place
*/
.apt-vex.apt-disable-transition .vex-overlay,
.apt-vex.apt-disable-transition.vex.vex-closing .vex-overlay,
.apt-vex.apt-disable-transition .vex-content,
.apt-vex.apt-disable-transition.vex.vex-closing .vex-content,
.apt-vex.apt-disable-transition .vex-loading-spinner,
.apt-vex.apt-disable-transition.vex.vex-theme-os.vex-closing .vex-content,
.apt-vex.apt-disable-transition.vex.vex-theme-os .vex-content,
.apt-vex.apt-disable-transition.vex.vex-theme-os .vex-dialog-button:focus {
    animation-duration: 0s;
    -webkit-animation-duration: 0s;
    -moz-animation-duration: 0s;
    -ms-animatianimation-duration: 0s;
    -o-animation-duration: 0s;
}


/**End Guide */
/* Rectangle: */

.aptrinsic-notification-icon-container{
    position: relative;
    display: inline-block;
    padding: 10px 24px 12px 12px;
    cursor: pointer;
}

.aptrinsic-notification-icon{
    user-select: none;
    display: inline-block;
    color: rgb(255, 255, 255);
    fill: currentcolor;
    height: 24px;
    width: 24px;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
}

.aptrinsic-notification-count{
    font-weight: 500;
    display: none;
    flex-flow: row wrap;
    justify-content: center;
    -ms-flex-pack: center;
    align-content: center;
    -ms-flex-line-pack: center;
    align-items: center;
    -ms-flex-align: center;
    position: absolute;
    top: 0px;
    right: 11px;
    font-size: 12px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgb(14, 98, 194);
    color: rgb(255, 255, 255);
    font-family: Helvetica;
    border: 1px solid rgb(151, 151, 151);
}

.aptrinsic-notification-container{

    font-family: Helvetica-Bold;
}

.aptrinsic-notification-container .title {
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
}

.aptrinsic-notification-container.box{
    background: #F6F6F6;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
    font-size: 14px;
    color: #000000;
    top: 40px;
    float: right;
    width: 400px;
    padding : 20px 0;
}

.aptrinsic-notification-container .inner-box{
    background: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
    font-size: 13px;
    color: #000000;
    width: 200px;
    text-align: center;
    overflow-x : auto;
    transform: translate(50%);
    padding: 10px 0;
    margin-bottom: 20px;
}

.apt-event-dialog {
    display: none;
    width: 408px;
    height: 280px;
    border-radius: 4px;
    background-color: #f6f6f6;
    /*background-color: var(--white);*/
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.px-engagement-wrapper-dialog .apt-dialog-content-wrapper {
    overflow-x: auto;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    overflow-wrap: break-word;
}

.apt-vex.vex.vex-theme-os .apt-dialog-bar {
    display: flex;
    display: -webkit-flex;
    display : -ms-flexbox;
    align-items: center;
    -ms-flex-align: center;
    justify-content: center;
    -ms-flex-pack: center;
    border-radius: 0px;
    position: fixed;
}

.apt-vex.vex.vex-theme-os .apt-dialog-bar .apt-step-content.apt-sdk.px-dialog-container{
    width: 100%;
}

.apt-event-dialog .apt-dialog-close{
    width: 2px;
    height: 10px;
    /*border: solid 2px #56565a;*/
    float: right;
    top:1px;
    margin-right: 14px;
}

.apt-event-dialog .apt-dialog-content{
    margin-left : 23px;
    margin-top: 18px;
}


.apt-event-dialog .apt-dialog-title {
    width: 74px;
    height: 18px;
    font-family: RobotoSlab;
    font-size: 13px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    margin-top: 18px;
    color: #4d545d;
}

.apt-event-dialog .apt-dialog-scope {
    width: 170px;
    height: 25px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: bold;
    font-style: normal;
    font-stretch: condensed;
    line-height: normal;
    letter-spacing: normal;
    margin-top: 18px;
    color: #9b9b9b;
}

.apt-dialog-name{
    width: 324px;
    height: 32px;
    margin-top: 13px;
    margin-left: 8px;
}

.apt-dialog-input{
    float:left;
    width: 238px;
    height: 100%;
    border-radius: 4px;
    background-color: #ffffff;
    border-right: 0;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 300;
    font-style: normal;
    font-stretch: condensed;
    line-height: normal;
    letter-spacing: normal;
    padding-left: 15px;
    /*box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);*/
}

.apt-dialog-save{
    float:left;
    width: 68px;
    height: 38px;
    border-radius: 4px;
    background-color: #ff7f00;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
    line-height: 32px;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: condensed;
    letter-spacing: normal;
    color: #F6F6F6;
}

/*Carousel*/
/** {box-sizing:border-box}*/
/*body {font-family: Verdana,sans-serif;}*/
/*.aptr-slides {display:none}*/

.aptr-carousel-engagement {
    /*height: 100%;*/
    overflow: hidden;
    margin: 0 auto;
}

/* Slideshow container */
.aptr-slideshow-container {
    max-width: 1000px;
    position: relative;
    margin: auto;
}

.aptr-slide {
    border-radius: 0px;
    padding: 0;
    margin: 0;
    float: left;
    padding: 0px;
    overflow-x: auto;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    overflow-wrap: break-word;
}

/* Next & previous buttons */
.aptr-slideshow-prev, .aptr-slideshow-next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
}

/* Position the "next button" to the right */
.aptr-slideshow-next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.aptr-slideshow-prev:hover, .aptr-slideshow-next:hover {
    background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.aptr-slideshow-text {
    color: #f2f2f2;
    font-size: 15px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100%;
    text-align: center;
}

/* Number text (1/3 etc) */
.aptr-slideshow-numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
}

/* The dots/bullets/indicators */
div.aptr-slideshow-dot {
    height: 10px;
    width: 10px;
    margin: 5px;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
    border-color: transparent;
    border: solid 2px;
    position: relative;
}

div.apt-survey-step div.aptr-snooze-container {
    width: 100%;
    text-align: center;
}

div.aptr-snooze-container button.px-step-navigation-snooze:not(.page-snooze) {
   margin-bottom: 5px;
}

div.apt-survey-multi-choices-step div.apt-survey-submit:not(.page-submit),
div.apt-survey-open-text-step div.apt-survey-submit:not(.page-submit) {
    margin: unset;
}

div.apt-survey-open-text-step div.px-survey-page-footer,
div.apt-survey-multi-choices-step div.px-survey-page-footer {
    margin-top: 12px;
}

div.apt-survey-step .aptr-snooze-container button.px-step-navigation-snooze {
    margin-top: 15px;
    margin-bottom: 0;
}

.aptr-slideshow-dots-container {
    position: absolute;
    bottom: 0px;
    text-align: center;
    width: 100%;
}

div.aptr-snooze-container button.px-step-navigation-snooze {
    padding: 10px;
    margin-bottom: 5px;
    border-style: solid;
}
/* Fading animation */
.aptr-slideshow-fade {
    -webkit-animation-name: aptr-fade;
    -webkit-animation-duration: 1.5s;
    animation-name: aptr-fade;
    animation-duration: 1.5s;
}

.aptr-slide-hide {
    visibility: hidden;
}

.aptr-slide-show {
    visibility: visible;
}

.aptr-slides-container {
    /*height: 100%;*/
    border-radius: 5px;
    -webkit-transition:all 0.5s ease-in-out;
    -moz-transition:all 0.5s ease-in-out;
    -o-transition:all 0.5s ease-in-out;
    transition:all 0.5s ease-in-out;
    /*APP-22580*/
    position: static;
}

.aptr-arrows-container {
    height: 0px;
    width: 100%;
    position: absolute;
    top: calc(50% - 20px);;
}

.aptr-nav-button {
    position: relative;
    height: 40px;
    width: 40px;
    display: flex;
    display: -webkit-flex;
    display : -ms-flexbox;
    justify-content: center;
    -ms-flex-pack: center;
    align-items: center;
    -ms-flex-align: center;
    cursor: pointer;
}

.aptr-arrow-left {
    transform: rotate(180deg);
    float: left;
    left: -20px;
}

.aptr-arrow-right {
    float: right;
    right: -20px;
}

.aptr-nav-button .aptr-arrow-icon {
    height: 30px;
    width: 30px;
}

.aptr-nav-svg-path {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(25%,25%);
}

.apt-embedded-close,
.apt-vex.vex.vex-theme-os .aptr-engagement-close-btn.vex-close {
    border: none;
    background: url(images/dialog-close.svg) no-repeat center transparent;
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
}

.apt-vex.vex.vex-theme-os .apt-engagement-close-btn-bright.vex-close {
    border: none;
    background: url('images/dialog-close-bright-1.svg') no-repeat center transparent;
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
}


.apt-vex.vex.vex-theme-os > .apt-survey-bar .aptr-engagement-close-btn.vex-close  {
    right: 20px;
}

.apt-vex.vex.vex-theme-os .vex-close.aptr-engagement-close-btn {
    z-index: 1;
}

.apt-vex.vex.vex-theme-os .px-engagement-wrapper-guide .px-step-navigation-skip {
    margin-left: 10px;
}

.apt-vex.vex.vex-theme-os .px-engagement-wrapper-guide .px-step-new-index, .apt-vex.vex.vex-theme-os .px-engagement-wrapper-guide .apt-step-new-index {
    display: -webkit-flex;
    display : -ms-flexbox;
    display: flex;
    align-items: center;
}

.apt-hotspot-element {
    position:absolute;
    border-radius: 50%;
    -webkit-transform:translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    cursor: pointer;
    z-index: 2147483647;
}

.apt-hotspot-element:before {
    position:absolute;
    content:"";
    border-radius: 50%;
    background-color: transparent;
    z-index: 999999;
    left: 0px;
    top: 0px;
}

@-webkit-keyframes aptr-fade {
    from {opacity: .4}
    to {opacity: 1}
}

@keyframes aptr-fade {
    from {opacity: .4}
    to {opacity: 1}
}

/* Emojis inserted via froala in either dialogs or guides */
.apt-vex.vex.vex-theme-os .apt-dialog-popup .fr-emoticon-img, 
.apt-vex.vex.vex-theme-os .apt-guide-popup .fr-emoticon-img,
.apt-badge-tippy .fr-emoticon-img {
    background-repeat: no-repeat !important;
    padding-left: 12px !important;
    padding-right: 12px !important;
    background-position: center !important;
}

.apt-badge-tippy img.fr-dib {
    display: inline-block;
}

.apt-vex.vex.vex-theme-os .fr-view .fr-video.fr-dvb, .apt-vex.vex.vex-theme-os .fr-view img.fr-dib {
    display: inline-block;
}

div.apt-vex.vex.vex-theme-os .fr-text-uppercase {
    text-transform: uppercase;
}

div.apt-vex.vex.vex-theme-os .fr-text-space {
    letter-spacing: 1px;
}

div.apt-vex.vex.vex-theme-os .fr-text-gray {
    color: #aaa;
}

div.apt-vex.vex.vex-theme-os .vex-content .fr-text-bordered {
    border-top: 1px solid #222;
    border-bottom: 1px solid #222;
    padding: 10px 0;
}

.apt-vex.vex.vex-theme-os .fr-video > * {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    max-width: 100%;
    border: none;
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
    .aptr-slideshow-text {font-size: 11px}
}

@-webkit-keyframes apt-hotspot-active{
    0%{
        -webkit-transform:scale(.1);
        opacity:1;
    }
    70%{
        -webkit-transform:scale(2.5);
        opacity:0;
    }
    100%{
        opacity:0;
    }
}

@keyframes apt-hotspot-active{
    0%{
        transform:scale(.1);
        opacity:1;
    }
    70%{
        transform:scale(2.5);
        opacity:0;
    }
    100%{
        opacity:0;
    }
}
/*End Carousel*/


/**Survey**/

.apt-engagement-wrapper-survey .apt-survey-step{
    display: flex;
    display: -webkit-flex;
    display : -ms-flexbox;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
    box-shadow: none;
    border-radius: 6px;
    text-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-align: center;
    /*min-width: 600px;*/
    /*min-height: 300px;*/
    /*padding: 25px 25px 30px;*/
    overflow-wrap: break-word;
}

.apt-engagement-wrapper-survey .apt-survey-step .apt-survey-footer div {
    width: 100%;
}

.apt-engagement-wrapper-survey .apt-survey-step .apt-survey-footer {
    width: 100%;
    display: flex;
}

.apt-vex.vex.vex-theme-os .apt-survey-bar{
    display: flex;
    display: -webkit-flex;
    display : -ms-flexbox;
    align-items: center;
    -ms-flex-align: center;
    justify-content: center;
    -ms-flex-pack: center;
    border-radius: 0px;
    position: fixed;
}

.apt-survey-bar .apt-survey-step,
.apt-survey-bar .apt-survey-multi-choices-step,
.apt-survey-bar .apt-survey-open-text-step{
    max-width: 600px;
    width: 100%;
}

.apt-survey-open-text-step div {
    width: auto;
}

.px-engagement-wrapper-survey.px-engagement-wrapper .apt-survey-multi-choices-step {
    overflow: auto;
}

/*.apt-survey-step *{*/
    /*font-family: "Roboto";*/
/*}*/

.apt-engagement-wrapper-survey .apt-survey-choices-wrapper{
    width: 100%;
    min-width: 300px;
    max-width: 500px;
}

/*.apt-survey-choices-wrapper.apt-survey-choices-wrapper-7{*/
/*padding: 0 110px;*/
/*}*/

.apt-engagement-wrapper-survey .apt-survey-choices-wrapper.apt-survey-choices-wrapper-7 {
    padding: 0 15px;
    max-width: 400px;
}

.apt-engagement-wrapper-survey .apt-survey-choices-wrapper.apt-survey-choices-wrapper-5{
    padding: 0 45px;
    max-width: 400px;
}

.apt-engagement-wrapper-survey .apt-survey-choices{
    display: flex;
    display: -webkit-flex;
    display : -ms-flexbox;
    justify-content: space-between;
    -ms-flex-pack: justify;
    margin: 10px 0;
}

.apt-engagement-wrapper-survey .apt-survey-choice{
    cursor: pointer;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-align: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-pack: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #ffffff;
    border: 2px solid rgba(0,0,0,.1);
    font-size: 14px;
}

.apt-engagement-wrapper-survey .apt-survey-choices-legend{
    display: flex;
    display: -webkit-flex;
    display : -ms-flexbox;
}

.apt-engagement-wrapper-survey .apt-survey-choices-legend > div{
    width : 50%;
}

.apt-engagement-wrapper-survey .apt-survey-feedback{
    display: none;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-align: center;
    width: 100%;
    margin-top: 10px;
}

.apt-engagement-wrapper-survey .apt-survey-feedback.apt-survey-show{
    display: flex;
    display: -webkit-flex;
    display : -ms-flexbox;
}

.apt-engagement-wrapper-survey .bottom-feedback-container{
    display: flex;
    display : -ms-flexbox;
    display: -webkit-flex;
    width: 100%;
    padding: 0 45px;
    flex-direction: column;
    -ms-flex-direction: column;
    align-items: center;
    -ms-flex-align: center;
}

.apt-engagement-wrapper-survey .bottom-feedback-container-bar{
    flex-direction: row;
    -ms-flex-direction: row;
    padding: 0px;
}

.apt-engagement-wrapper-survey.apt-container-bar-and-combine div.bottom-feedback-container-bar {
    flex-direction: column;
    -ms-flex-direction: column;
}

div.apt-engagement-wrapper-survey.apt-container-bar-and-combine.apt-none-auto-height {
    overflow: scroll;
}

div.apt-engagement-wrapper-survey.apt-container-bar-and-combine.apt-none-auto-height div.apt-survey-step{
    height: 100%;
}

div.apt-container-bar-and-combine-old.apt-engagement-wrapper-survey div.apt-survey-step div.aptr-snooze-container {
    min-width: 108px;
}

.apt-engagement-wrapper-survey .apt-feedback-text-wrapper {
    width: 100%;
}

.apt-engagement-wrapper-survey .bottom-feedback-container > textarea{
    resize: none;
    border: none;
    width: 100%;
    height: 66px;
    padding: 10px 0 0 15px;
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px #d7d6d7;
    font-size: 15px;
    line-height: normal;
    outline: none;
    color: #000000;
}

.apt-engagement-wrapper-survey .bottom-feedback-container > textarea.error{
    box-shadow: 0 0 5px red;
}

.apt-engagement-wrapper-survey .apt-error-message{
    width: 100%;
    color: #cc0033;
    display: none;
    font-size: 12px;
    line-height: 15px;
    text-align: left;
    margin: 5px 0 0 0;
}

.apt-engagement-wrapper-survey .apt-survey-comment{
    margin-bottom: 5px;
    width:100%;
}

.apt-engagement-wrapper-survey .apt-contact-wrapper {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    display : -ms-flexbox;
    height: 18px;
    line-height: 18px;
    margin-top: 20px;
}

.apt-engagement-wrapper-survey .apt-contact-me-text {
    font-size: 15px;
    font-family: Roboto,sans-serif;
    margin-left: 7px;
}

.apt-engagement-wrapper-survey .apt-contact-wrapper input[type="checkbox"] {
  width: auto;
  height: auto;
}

.apt-engagement-wrapper-survey div.px-survey-page-footer, 
.apt-engagement-wrapper-survey div.px-submit-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

div.apt-container-bar-and-combine-old.apt-engagement-wrapper-survey div.px-submit-container {
    align-items: center;
}

div.apt-container-bar-and-combine-old.apt-engagement-wrapper-survey div.apt-survey-step .aptr-snooze-container button.px-step-navigation-snooze {
    margin: 0 12px;
}

.apt-engagement-wrapper-survey .px-survey-page-footer button.px-step-navigation-snooze, 
.apt-engagement-wrapper-survey .px-submit-container button.px-step-navigation-snooze {
    margin-right: 8px;
}

.apt-engagement-wrapper-survey .apt-survey-submit{
    border: 0.5px solid rgb(13, 177, 76);
    color: rgb(13, 177, 76);
    border-radius: 4px;
    height: 36px;
    line-height: 36px;
    margin: 15px auto auto;
    cursor: pointer;
    /*font-size: 20px;*/
    display: flex;
    display: -webkit-flex;
    display : -ms-flexbox;
    justify-content: center;
    -ms-flex-pack: center;
    box-sizing: content-box;
    min-width: 108px;
}

/* Survey Page Style Start */
div.apt-engagement-wrapper-survey div.apt-survey-page {
    overflow-y: auto;
    overflow-x: hidden;
}

div.apt-engagement-wrapper-survey div.apt-survey-page .apt-survey-page-title-wrapper {
    margin-bottom: 24px;
}

div.apt-engagement-wrapper-survey div.apt-survey-page .apt-question-sequence {
    margin: 0;
}

div.apt-engagement-wrapper-survey div.apt-survey-page div.apt-survey-step {
    display: block;
    text-align: left;
    margin-bottom: 24px;
    overflow: hidden;
}

div.apt-engagement-wrapper-survey div.apt-survey-page.apt-orientation-portrait div.apt-survey-step {
    display: flex;
    display: -webkit-inline-flex;
    display : -ms-inline-flexbox;
    justify-content: center;
    -webkit-justify-content: flex-end;
    flex-direction: column;
    -ms-flex-direction: column;
    width: 100%;
}

div.apt-engagement-wrapper-survey div.apt-survey-page div.apt-survey-step div.apt-survey-title-wrapper {
    display: inline-flex;
    display: -webkit-inline-flex;
    display : -ms-inline-flexbox;
    width: 40%;
    align-items: flex-start;
    justify-content: flex-start;
    -webkit-align-items: flex-start;
    -webkit-justify-content: flex-end;
    vertical-align: top;
}

div.apt-engagement-wrapper-survey div.apt-survey-page.apt-orientation-portrait div.apt-survey-step div.apt-survey-title-wrapper {
    display: flex;
    display: -webkit-flex;
    display : -ms-flexbox;
    width: 90%;
    margin-right: 45px;
}

div.apt-engagement-wrapper-survey div.apt-survey-page.apt-orientation-portrait div.apt-survey-step div.apt-survey-open-text-title-wrapper {
    margin-bottom: 2px;
}

div.apt-engagement-wrapper-survey div.apt-survey-page div.apt-survey-step div.apt-survey-title-wrapper div.apt-survey-title {
    padding: 0;
    font-size: 14px;
    color: #19232f;
}

div.apt-engagement-wrapper-survey div.apt-survey-page div.apt-survey-step div.apt-survey-answer-wrapper {
    display: inline-block;
    max-width: 60%;
    text-align: left;
}

div.apt-engagement-wrapper-survey div.apt-survey-page.apt-orientation-portrait div.apt-survey-step div.apt-survey-answer-wrapper {
    width: 90%;
    max-width: 600px;
}

div.apt-engagement-wrapper-survey div.apt-survey-page div.apt-survey-step div.apt-survey-answer-wrapper div.bottom-feedback-container {
    padding: 3px;
}

div.apt-engagement-wrapper-survey div.apt-survey-page div.apt-survey-submit:not(.page-submit),
div.apt-engagement-wrapper-survey div.apt-survey-page div.aptr-snooze-container button.px-step-navigation-snooze:not(.page-snooze),
div.apt-engagement-wrapper-survey div.apt-survey-page .apt-survey-close-button {
    display: none;
}

div.apt-engagement-wrapper-survey div.apt-survey-page .apt-contact-wrapper {
    height: unset;
    padding-bottom: 12px;
    align-items: center;
    -webkit-align-items: center;
}

div.apt-engagement-wrapper-survey div.apt-survey-page .apt-contact-me-text {
    font-size: 12px;
    color: rgb(77, 84, 93);
}

div.apt-engagement-wrapper-survey div.apt-survey-page .apt-survey-step .apt-contact-wrapper {
    display: none;
}

div.apt-engagement-wrapper-survey div.apt-survey-page .apt-survey-multi-choices-radio {
    min-height: 32px;
    margin: 0;
}

/* Survey Page Style End */
/* Survey Page Bar Style Start */
div.apt-engagement-wrapper-survey.apt-survey-bar div.apt-survey-page {
    width: 100%;
}

div.apt-engagement-wrapper-survey.apt-survey-bar div.apt-survey-page div.apt-survey-step {
    max-width: 100%;
}

div.apt-engagement-wrapper-survey.apt-survey-bar div.apt-survey-page div.apt-survey-step div.apt-survey-title-wrapper {
    width: 50%;
}

div.apt-engagement-wrapper-survey.apt-survey-bar div.apt-survey-page div.apt-survey-step div.apt-survey-answer-wrapper {
    max-width: 50%;
}
/* Survey Page Bar Style End */

/* Survey Dynamic Rating Step Style Start */
div.apt-survey-dynamic-rating-step div.apt-survey-dynamic-rating-answers-wrapper div.apt-survey-dynamic-rating-radio-answers {
    display: flex;
    display: -webkit-flex;
    display : -ms-flexbox;
    flex-direction: row;
    -ms-flex-direction: row;
    justify-content: start;
    -webkit-justify-content: flex-start;
    flex-wrap: wrap;
}

div.apt-survey-dynamic-rating-step div.apt-survey-dynamic-rating-answers-wrapper label.apt-survey-dynamic-rating-radio {
    display: inline-flex;
    display: -webkit-inline-flex;
    display : -ms-inline-flexbox;
    margin-right: 8px;
    width: 31px;
    height: 31px;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    -webkit-align-items: center;
    border-radius: 50%;
    border: solid 1px #e3eaf1;
    cursor: pointer;
}

div.apt-survey-dynamic-rating-step div.apt-survey-dynamic-rating-answers-wrapper label.apt-survey-dynamic-rating-radio:last-child {
    margin-right: 0;
}

div.apt-survey-dynamic-rating-step div.apt-survey-dynamic-rating-answers-wrapper input[type="radio"] {
    position: absolute;
    opacity: 0;
}
/* Highlight individual survey selection when child radio button has focus */
div.apt-survey-dynamic-rating-step div.apt-survey-dynamic-rating-answers-wrapper label.apt-survey-dynamic-rating-radio:focus-within {
    border: 2px solid #108310 !important;
}

div.apt-survey-dynamic-rating-step div.apt-survey-dynamic-rating-labels-wrapper {
    display: flex;
    display: -ms-flex;
    display: -webkit-flex;
    flex-flow: row;
    -webkit-flex-flow: row;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    font-size: 12px;
    color: #7596b7;
}
/* Survey Dynamic Rating Step Style End */

.apt-engagement-wrapper-survey .apt-survey-submit.apt-survey-submit-disabled{
    pointer-events: none;
    opacity: 0.5;
}

.apt-engagement-wrapper-survey .apt-survey-submit.apt-survey-submit-bar{
    margin-left: 20px;
}

div.apt-engagement-wrapper-survey.apt-container-bar-and-combine-old div.apt-survey-submit.apt-survey-submit-bar{
    margin: 0 15px;
}

.apt-vex.vex.vex-theme-os .apt-engagement-wrapper-survey .apt-survey-submit-text{
    font-size: 14px;
    line-height: 36px;
}

.apt-engagement-wrapper-survey .apt-survey-close-button{
    border-width: 0.5px;
    border-style: solid;
    border-image: initial;
    color: rgb(13, 177, 76);
    border-radius: 4px;
    width: 108px;
    height: 36px;
    line-height: 36px;
    margin-top: 15px;
    cursor: pointer;
}

.apt-engagement-wrapper-survey .apt-survey-close-text{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}

.apt-boolean-survey-icon {
    width: 220px;
    height: 70px;
}

.apt-hidden {
    display: none;
}

.apt-survey-multi-choices-step {
    /*padding: 30px 25px;*/
    /*display: flex;*/
    /*display: -webkit-flex;*/
    /*display : -ms-flexbox;*/
    /*flex-direction: column;*/
    /*-ms-flex-direction: column;*/
    /*justify-content: center;*/
    /*-ms-flex-pack: center;*/
}

.apt-engagement-wrapper-survey .apt-survey-multi-choices-title-wrapper {
    width: 90%;
    display: flex;
    display: -webkit-flex;
    display : -ms-flexbox;

}

.apt-engagement-wrapper-survey .apt-survey-multi-title {
    padding: 10px;
    width: 100%;
}

.apt-engagement-wrapper-survey .apt-survey-multi-choices-wrapper {
    width: 90%;
    display: flex;
    display: -webkit-flex;
    display : -ms-flexbox;
    flex-direction: column;
    -ms-flex-direction: column;
}

.apt-engagement-wrapper-survey .apt-survey-multi-choices-radio {
    display: flex;
    display: -webkit-flex;
    display : -ms-flexbox;
    flex-direction: row;
    -ms-flex-direction: row;
    padding: 0 10px;
    font-size: 14px;
    line-height: normal;
    cursor: pointer;
    margin: 5px 0;
}

.apt-survey-multi-choice-radio-answers .apt-survey-multi-choice-radio-label {
    margin-left: 28px;
}

.apt-survey-multi-choice-radio-answers .apt-survey-multi-choice-radio {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    cursor: pointer;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
}

.apt-survey-multi-choice-radio .apt-survey-multi-choice-radio-label .px-multi-survey-answer {
    width: unset !important;
}

.apt-survey-multi-choice-radio-answers .apt-survey-multi-choice-radio input[type=radio] {
    cursor: pointer;
    margin-left: 3px;
    -webkit-appearance: auto;
    -moz-appearance: auto;
    appearance: auto;
}

.apt-engagement-wrapper-survey .apt-survey-multi-choices-radio > * {
    cursor: pointer;
}

.apt-engagement-wrapper-survey .apt-survey-multi-choice-input-wrapper {
    margin-right: 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.apt-engagement-wrapper-survey .apt-survey-multi-choice-checkbox {
    width: auto;
    opacity: 1;
    position: static;
}

.apt-engagement-wrapper-survey .apt-survey-multi-choice-label {
    margin-bottom: 0px;
    line-height: normal;
    display: flex;
    display: -webkit-flex;
    display : -ms-flexbox;
    align-items: center;
    -ms-flex-align: center;
}

.apt-engagement-wrapper-survey .apt-multi-survey-answer {
    padding: 10px 0px;
}

.apt-engagement-wrapper-survey .apt-survey-title {
    width: 100%;
}

.apt-engagement-wrapper-survey .apt-survey-multi-choices-submit-text {
    display: flex;
    display: -webkit-flex;
    display : -ms-flexbox;
    align-items: center;
    -ms-flex-align: center;
    justify-content: center;
    -ms-flex-pack: center;
    font-size: 14px;
}

.apt-engagement-wrapper-survey .apt-survey-open-text-step {
    /*padding: 30px 25px;*/
    display: flex;
    display: -webkit-flex;
    display : -ms-flexbox;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    -ms-flex-pack: center;
}

.apt-engagement-wrapper-survey .apt-survey-open-text-title-wrapper {
    width: 90%;
    margin-bottom: 20px;
    display: flex;
    display: -webkit-flex;
    display : -ms-flexbox;
}

.apt-engagement-wrapper-survey .apt-survey-open-text-title {
    padding: 10px;
    width: 100%;
}

.apt-engagement-wrapper-survey .apt-survey-open-text-submit-text {
    display: flex;
    display: -webkit-flex;
    display : -ms-flexbox;
    align-items: center;
    -ms-flex-align: center;
    justify-content: center;
    -ms-flex-pack: center;
    font-size: 14px;
}

.apt-engagement-wrapper-survey .bottom-feedback-container textarea::placeholder {
    font-size: 12px;
}

.apt-engagement-wrapper-survey .apt-question-sequence {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: Arial;
    color: #d3d3d3;
    margin: 0 5px;
    font-size: 18px;
    padding: 7px;
}

.apt-vex.vex.vex-theme-os .px-engagement-wrapper-survey .px-multi-survey-question, .apt-vex.vex.vex-theme-os .px-engagement-wrapper-survey .px-multi-survey-answer {
    overflow-wrap: break-word;
}
/**End Survey**/

/* Alerts */
.apt-vex.vex-theme-default {
    z-index: 2147483647;
}

.apt-vex.vex-theme-default .vex-content {
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-box-shadow: inset 0 1px #a6a6a6, 0 0 0 1px rgba(0, 0, 0, 0.08);
    -webkit-box-shadow: inset 0 1px #a6a6a6, 0 0 0 1px rgba(0, 0, 0, 0.08);
    box-shadow: inset 0 1px #a6a6a6, 0 0 0 1px rgba(0, 0, 0, 0.08);
    font-family: "Roboto";
    margin: 20px auto;
    background: #FFFFFF;
    color: #444;
    padding: 1em;
    position: relative;
    margin: 20px auto;
    max-width: 100%;
    width: 450px;
    /*font-size: 1.1em;*/
    /*line-height: 1.5em;*/
    font-size: 1em;
    line-height: normal;
}

.apt-sdk .button-wrapper {
    width: 100%;
    text-align: center;
}

.apt-vex .vex-content .message-wrapper {
    display: flex;
    align-items: flex-start;
}

.apt-vex .vex-content .apt-message-icon {
    margin-right: 10px;

}

.apt-vex.vex-content-warning,
.apt-vex.vex-content-success,
.apt-vex.vex-content-error,
.apt-vex.vex-content-confirm {
    z-index: 2147483647;
}

.apt-vex .vex-content .apt-message-icon.warning {
    background: url('images/warning.png') no-repeat left;
    width: 60px;
    height: 30px;

}

.apt-vex .vex-content .apt-message-icon.alert {
    background: url('images/alert.png') no-repeat left;
    width: 30px;
    height: 30px;
}

.apt-vex .vex-content .apt-message-icon.success {
    background: url('images/success.png') no-repeat left;
    width: 30px;
    height: 30px;

}

/*Warning*/
.apt-vex.vex-content-warning .vex-content {
    border-left: 6px solid #ffd149;
}

.apt-vex.vex-content-warning .vex-content .vex-dialog-buttons {
    display: none;
}

/*Success*/
.apt-vex.vex-content-success .vex-content {
    border-left: 6px solid #0db14c;
}

.apt-vex.vex-content-success .vex-content .vex-dialog-buttons {
    display: none;
}

/*Error*/
.apt-vex.vex-content-error .vex-content {
    border-top: 6px solid #fc3f1d;
}

.apt-vex.vex-content-error .vex-content .vex-dialog-buttons {
    /*display: none;*/
}

/* Confirm */
.apt-vex.vex-content-confirm .vex-content {
    border-top: 6px solid #fc3f1d;
}

.apt-vex.vex-content-error .vex-dialog-buttons, .apt-vex.vex-content-confirm .vex-dialog-buttons {
    margin: 15px 0 !important;
    display: flex;
    justify-content: center;

}

.apt-vex.vex-content-confirm .vex-dialog-button.vex-last {
    display: none;
}

.apt-vex.vex-content-confirm.apt-confirm-show .vex-dialog-button.vex-last{
    display: block;
}

.apt-vex.vex-content-error .vex-dialog-button.vex-first,
.apt-vex.vex-content-confirm .vex-dialog-button.vex-first {
    /*width: 46px;*/
    height: 24px;
    border-radius: 4px;
    background-color: #fc3f1d;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    margin: 0 auto;
    color: #FFFFFF;
    border: 0;
    text-shadow: none;
    padding: revert;
    line-height: unset;
    position: static;
    min-width: auto;
}

.apt-vex.vex-content-confirm .apt-selector-message .vex-dialog-button.vex-last,
.apt-vex.vex-content-confirm .vex-dialog-button.vex-last{
    display: block;
    height: 24px;
    border-radius: 4px;
    background-color: #fc3f1d;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    margin: 0 auto;
    color: #FFFFFF;
    border: 0;
    padding: revert;
    line-height: unset;
    position: static;
    min-width: auto;
}

.apt-vex.vex-content-confirm.apt-confirm-show .vex-dialog-button.vex-first{
    margin: 0;
}

.apt-vex.vex-content-confirm.apt-confirm-show .vex-dialog-button.vex-last {
    margin: 0 0 0 10px;
    background-color: white;
    color: black;
    border: 1px solid;
}

.apt-vex.vex-content-confirm .apt-message-text {
    max-width: 90%;
}

.apt-vex.vex-content-confirm .apt-selector-message {
    border-top-color: #ff7f00;
}

.apt-vex.vex-content-confirm .apt-selector-message .vex-dialog-button.vex-first {
    background-color: #ff7f00;
}

.apt-vex.vex-content-warning,
.apt-vex.vex-content-success,
.apt-vex.vex-content-error,
.apt-vex.vex-content-confirm {
    z-index: 2147483647;
    font-size: 14px;
}

/* End Alerts */


/* Focus style - outline */

/* Dialog - vex - close button */
.apt-vex.vex.vex-theme-os .vex-close.aptr-engagement-close-btn:focus,

/* Guide */
/* skip button */
.apt-vex.vex.vex-theme-os .px-engagement-wrapper-guide .px-step-navigation-skip:focus,
/* next button */
.apt-vex.vex.vex-theme-os .px-engagement-wrapper-guide .px-step-navigation-next:focus,
/* back button */
.apt-vex.vex.vex-theme-os .px-engagement-wrapper-guide .px-step-navigation-back:focus,
/* hotspot */
.apt-hotspot-element:focus,
/* badge */
.apt-badge:focus,

/* Slider */ 
.aptr-nav-button:focus,
.aptr-nav-button:focus,

/* Survey */
/* choices boolean */
.apt-engagement-wrapper-survey .apt-survey-choices-wrapper .apt-survey-choices svg:focus,
/* choices rating/scores */
.apt-engagement-wrapper-survey .apt-survey-choices-wrapper .apt-survey-choices div:focus,
/* Contact me */
.apt-engagement-wrapper-survey .apt-contact-wrapper input[type="checkbox"]:focus,
/* Submit button */
.apt-engagement-wrapper-survey .apt-survey-submit:focus,
/* Close button */
.apt-engagement-wrapper-survey .apt-survey-close-button:focus,
/* Multi choices */
.apt-engagement-wrapper-survey .apt-survey-multi-choice-checkbox:focus,
/* Multi choices */
.apt-engagement-wrapper-survey .apt-survey-multi-choice-checkbox:focus {
    outline:#c1c1c1 solid 3px;
}

.vex-content.px-engagement-wrapper:focus {
    outline: none;
}

/* Badges */

.tippy-iOS {
    cursor: pointer !important;
    -webkit-tap-highlight-color: transparent;
}
.apt-badge-tippy.tippy-popper {
    pointer-events: none;
    max-width: calc(100vw - 10px);
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    transition-property: transform;
    word-break: break-word;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
}
.apt-badge-tippy .tippy-tooltip {
    position: relative;
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
    line-height: 1.4;
    background-color: #333;
    transition-property: visibility, opacity, transform;
    outline: 0;
    padding: 0px;
}
.apt-badge-tippy .tippy-tooltip[data-animation='fade'][data-state='hidden'] {
    opacity: 0;
}

.apt-badge-tippy .tippy-tooltip .tippy-arrow::before {
    display: none;
}

.apt-badge-tippy .tippy-tooltip[data-placement^='top'] > .tippy-arrow {
    border-width: 8px 8px 0;
    border-top-color: #333;
    margin: 0 3px;
    transform-origin: 50% 0;
    bottom: -7px;
    height: 8px;
    width: 16px;
}
.apt-badge-tippy .tippy-tooltip[data-placement^='bottom'] > .tippy-arrow {
    border-width: 0 8px 8px;
    border-bottom-color: #333;
    margin: 0 3px;
    transform-origin: 50% 7px;
    top: -7px;
    height: 8px;
    width: 16px;
}
.apt-badge-tippy .tippy-tooltip[data-placement^='left'] > .tippy-arrow {
    border-width: 8px 0 8px 8px;
    border-left-color: #333;
    margin: 3px 0;
    transform-origin: 0 50%;
    right: -7px;
    width: 8px;
    height: 16px;
}
.apt-badge-tippy .tippy-tooltip[data-placement^='right'] > .tippy-arrow {
    border-width: 8px 8px 8px 0;
    border-right-color: #333;
    margin: 3px 0;
    transform-origin: 7px 50%;
    left: -7px;
    width: 8px;
    height: 16px;
}
.apt-badge-tippy .tippy-tooltip[data-interactive][data-state='visible'] {
    pointer-events: auto;
}
.apt-badge-tippy .tippy-tooltip[data-inertia][data-state='visible'] {
    transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);
}
.apt-badge-tippy .tippy-arrow {
    position: absolute;
    border-color: transparent;
    border-style: solid;
    box-sizing: border-box;
}
.apt-badge-tippy .tippy-content {
    padding: 5px 9px;
}

.apt-badge-tippy.tippy-popper[x-placement^='bottom'] .badge-theme .tippy-arrow {
    border-bottom-color: currentColor;
}
.apt-badge-tippy.tippy-popper[x-placement^='top'] .badge-theme .tippy-arrow {
    border-top-color: currentColor;
}
.apt-badge-tippy.tippy-popper[x-placement^='left'] .badge-theme .tippy-arrow {
    border-left-color: currentColor;
}
.apt-badge-tippy.tippy-popper[x-placement^='right'] .badge-theme .tippy-arrow {
    border-right-color: currentColor;
}

.apt-badge {
    cursor: pointer;
    border-style: solid;
    border-radius: 50%;
    box-sizing: border-box;

    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Chrome */
    display: flex;

    -webkit-box-pack: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;

    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-line-pack: center;
    -webkit-align-content: center;
    align-content: center;
}

.apt-badge img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.apt-badge.apt-badge--hidden {
    display: none;
}

.apt-badge-tippy .badge-theme .tippy-content {
    color: #06f263;
    font-size: 13px;
    text-align: left;
    font-weight: normal;
    box-sizing: content-box;
}

/* End of Badges */

.apt-vex .vex-content.apt-dialog-popup.px-engagement-wrapper-dialog.apt-auto-height-scroll,
.apt-vex .vex-content.apt-survey-popup.px-engagement-wrapper-survey.apt-auto-height-scroll {
    max-height: 90vh;
    overflow-y: auto;
}

.apt-vex .vex-content.apt-survey-popup.px-engagement-wrapper-survey.apt-auto-height-scroll .apt-survey-step {
    max-height: 90vh;
}

.apt-vex .vex-content.apt-survey-popup.px-engagement-wrapper-survey .apt-survey-step .px-survey-page-content {
    width: 100%;
}