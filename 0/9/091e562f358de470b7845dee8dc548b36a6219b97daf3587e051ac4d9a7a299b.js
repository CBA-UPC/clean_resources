@import "https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900&subset=cyrillic-ext,greek,vietnamese,latin-ext,cyrillic,latin,greek-ext" screen;
@import "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&subset=cyrillic-ext,greek,vietnamese,latin-ext,cyrillic,latin,greek-ext" screen;
@font-face {
  font-family: 'TTNorms';
  src: url("https://push4site.com/fonts/Home/TTNorms/TTNorms-Light.eot");
  src: url("https://push4site.com/fonts/Home/TTNorms/TTNorms-Light.eot?#iefix") format('embedded-opentype'), url("https://push4site.com/fonts/Home/TTNorms/TTNorms-Light.woff") format('woff'), url("https://push4site.com/fonts/Home/TTNorms/TTNorms-Light.ttf") format('truetype');
  font-style: normal;
  font-weight: 300;
  text-rendering: optimizeLegibility;
  font-display: swap;
}
@font-face {
  font-family: 'TTNorms';
  src: url("https://push4site.com/fonts/Home/TTNorms/TTNorms-LightItalic.eot");
  src: url("https://push4site.com/fonts/Home/TTNorms/TTNorms-LightItalic.eot?#iefix") format('embedded-opentype'), url("https://push4site.com/fonts/Home/TTNorms/TTNorms-LightItalic.woff") format('woff'), url("https://push4site.com/fonts/Home/TTNorms/TTNorms-LightItalic.ttf") format('truetype');
  font-style: italic;
  font-weight: 300;
  text-rendering: optimizeLegibility;
  font-display: swap;
}
@font-face {
  font-family: 'TTNorms';
  src: url("https://push4site.com/fonts/Home/TTNorms/TTNorms-Regular.eot");
  src: url("https://push4site.com/fonts/Home/TTNorms/TTNorms-Regular.eot?#iefix") format('embedded-opentype'), url("https://push4site.com/fonts/Home/TTNorms/TTNorms-Regular.woff") format('woff'), url("https://push4site.com/fonts/Home/TTNorms/TTNorms-Regular.ttf") format('truetype');
  font-style: normal;
  font-weight: 400;
  text-rendering: optimizeLegibility;
  font-display: swap;
}
@font-face {
  font-family: 'TTNorms';
  src: url("https://push4site.com/fonts/Home/TTNorms/TTNorms-Italic.eot");
  src: url("https://push4site.com/fonts/Home/TTNorms/TTNorms-Italic.eot?#iefix") format('embedded-opentype'), url("https://push4site.com/fonts/Home/TTNorms/TTNorms-Italic.woff") format('woff'), url("https://push4site.com/fonts/Home/TTNorms/TTNorms-Italic.ttf") format('truetype');
  font-style: italic;
  font-weight: 400;
  text-rendering: optimizeLegibility;
  font-display: swap;
}
@font-face {
  font-family: 'TTNorms';
  src: url("https://push4site.com/fonts/Home/TTNorms/TTNorms-Medium.eot");
  src: url("https://push4site.com/fonts/Home/TTNorms/TTNorms-Medium.eot?#iefix") format('embedded-opentype'), url("https://push4site.com/fonts/Home/TTNorms/TTNorms-Medium.woff") format('woff'), url("https://push4site.com/fonts/Home/TTNorms/TTNorms-Medium.ttf") format('truetype');
  font-style: normal;
  font-weight: 500;
  text-rendering: optimizeLegibility;
  font-display: swap;
}
@font-face {
  font-family: 'TTNorms';
  src: url("https://push4site.com/fonts/Home/TTNorms/TTNorms-MediumItalic.eot");
  src: url("https://push4site.com/fonts/Home/TTNorms/TTNorms-MediumItalic.eot?#iefix") format('embedded-opentype'), url("https://push4site.com/fonts/Home/TTNorms/TTNorms-MediumItalic.woff") format('woff'), url("https://push4site.com/fonts/Home/TTNorms/TTNorms-MediumItalic.ttf") format('truetype');
  font-style: italic;
  font-weight: 500;
  text-rendering: optimizeLegibility;
  font-display: swap;
}
@font-face {
  font-family: 'TTNorms';
  src: url("https://push4site.com/fonts/Home/TTNorms/TTNorms-Bold.eot");
  src: url("https://push4site.com/fonts/Home/TTNorms/TTNorms-Bold.eot?#iefix") format('embedded-opentype'), url("https://push4site.com/fonts/Home/TTNorms/TTNorms-Bold.woff") format('woff'), url("https://push4site.com/fonts/Home/TTNorms/TTNorms-Bold.ttf") format('truetype');
  font-style: normal;
  font-weight: 700;
  text-rendering: optimizeLegibility;
  font-display: swap;
}
@font-face {
  font-family: 'TTNorms';
  src: url("https://push4site.com/fonts/Home/TTNorms/TTNorms-BlackItalic.eot");
  src: url("https://push4site.com/fonts/Home/TTNorms/TTNorms-BlackItalic.eot?#iefix") format('embedded-opentype'), url("https://push4site.com/fonts/Home/TTNorms/TTNorms-BlackItalic.woff") format('woff'), url("https://push4site.com/fonts/Home/TTNorms/TTNorms-BlackItalic.ttf") format('truetype');
  font-style: italic;
  font-weight: 700;
  text-rendering: optimizeLegibility;
  font-display: swap;
}

@-webkit-keyframes p4s-fadeInUp {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0,50%,0);
        transform: translate3d(0,50%,0)
    }

    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

@keyframes p4s-fadeInUp {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0,50%,0);
        transform: translate3d(0,50%,0)
    }

    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}


#p4s-popup.p4s-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 130000;
}

#p4s-popup .p4s-popup-block {
    overflow-y: auto;
    position: relative;
    z-index: 10000;
    max-height: 100%;
    height: 100%;
    -webkit-animation-duration: .5s;
    animation-duration: .5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: p4s-fadeInUp;
    animation-name: p4s-fadeInUp;
}

#p4s-popup .p4s-popup-pre {
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    display: table;
}

#p4s-popup .p4s-popup-wrapp {
    display: table-cell;
    vertical-align: middle;
}

#p4s-popup .p4s-popup-inner {
    border-radius: 2px;
    box-shadow: 0 0 3px 2px rgba(42,42,69,.23);
    background-color: #fff;
    max-width: 360px;
    position: relative;
    z-index: 10000;
}

#p4s-popup .p4s-popup-header {
    box-sizing: border-box;
    height: 130px;
    padding-top: 36px;
    text-align: center;
}

#p4s-popup .p4s-popup-content {
    box-sizing: border-box;
    display: block;
    width: 100%;
    text-align: center;
    font-family: Roboto,Lato,Arial,Helvetica,sans-serif;
    padding: 0 48px 43px;
}

#p4s-popup .p4s-popup-close {
    position: absolute;
    opacity: .8;
    right: -39px;
    top: 3px;
    cursor: pointer;
    width: 16px;
    height: 16px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAA96GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxNi0wNi0yMFQxNzo0OToyNCswMzowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTYtMDYtMjBUMTc6NDk6MjQrMDM6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE2LTA2LTIwVDE3OjQ5OjI0KzAzOjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDphMDI4N2ViYi0yYTExLTRiYTYtOTVhYy02N2NkZjdlYmVkMGM8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjNjczMGIxZi03NzdjLTExNzktYTNlMC04N2M0YmNhNjQ4OTk8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo5NTA1OWExZS0zMTA0LTQzNTUtYjc5YS0yNTU2ZmRhY2ZlNjI8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6OTUwNTlhMWUtMzEwNC00MzU1LWI3OWEtMjU1NmZkYWNmZTYyPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE2LTA2LTIwVDE3OjQ5OjI0KzAzOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6YTAyODdlYmItMmExMS00YmE2LTk1YWMtNjdjZGY3ZWJlZDBjPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE2LTA2LTIwVDE3OjQ5OjI0KzAzOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICAgICA8cmRmOkJhZz4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MGY0Nzk4MTMtZWMwZS0xMWU1LTk5ZDktODNlYzBhZDkwNzY4PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjQyZDNjZDllLWY3ZTktMTFlNS1iYjhlLWI2NjYwOGE4YjE1ZTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDplOTAwNTA1MC1lYjQ4LTExZTUtYmJkYy04NGE1NWMyMDk2NWM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6ZjgzOTcyMjEtZWQwMi0xMWU1LWE1YTMtZmRiODMzOTA1ZGE0PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoxNmU0MGJlOS1iYTgyLTlhNGQtODA4Ni04ZjAzMTEyZDZkNjA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjI5RDZEMDNGRkM5NjExRTU4RDlBRjk4NTBDNTAyQzRFPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo0MWFkNzM1OC02Y2U4LTY4NDktOTNiNi02MGIyZmUzMzcyNGI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjZmOTM0NzMwLWEzMjUtY2Q0OC04MDgyLTIwOTlmZGNmYWFkMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OWUyNWFmNGUtMjE2Ny1jOTQxLTk1NzMtYjJmNjg1NGVkMjU0PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpkYWRlZmE2MS03ZGQwLWEzNGItYWMwMS0xZWZkMzA2MzI4Yzg8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6QmFnPgogICAgICAgICA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHBob3Rvc2hvcDpJQ0NQcm9maWxlPnNSR0IgSUVDNjE5NjYtMi4xPC9waG90b3Nob3A6SUNDUHJvZmlsZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MzI8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MzI8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PvZB5VsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAShJREFUeNrUmcsSgyAMRdXpfwM/3nTTLKpSQ7h5kA1TZ7T3nALFyU5ERLR1qpbT57YtVYL8LOB3rIVui6/37ssyyvOfbmyNRJVVRA+8n38QPKsIKfg1//FdCG/dGiv1fq15r3HOMVq0g0x6z4jZnKV29oDsInDgDwKyicCDCwVEi7ADHxTgLcIeXCnAWoQf+KQAtAh/cJAAHjmAd+nBwQK8RcyDGwmwFoEDNxaAFoEH5/GwPavvlOs5d68DKY+sfkdsMLj2tTpOxGLgeBHB4Ly5zW6WehHB4Oh/jXERScDjRCQD9xeRFNxPRHJwexGLgNuJWAwcL2KyL8C9tlZj+gL8vdqe5aUvIDUa9YujZsRjX6D3oKzg+vyv/1NLej1byfN/AAAA//8DAKCGMldF/dgkAAAAAElFTkSuQmCC) no-repeat;
    background-size: contain!important;
    z-index: 10005;
}

#p4s-popup .p4s-popup-logo {
    border-radius: 3px;
    overflow: hidden;
    margin: 0 auto;
    width: 72px;
    height: 72px;
}

#p4s-popup .p4s-popup-img {
    background-color: #E5E5E5;
    border-radius: 3px;
    overflow: hidden;
    width: 72px!important;
    height: 72px!important;
    max-width: 72px!important;
    max-height: 72px!important;
    outline: 0;
    display: inline-block;
    vertical-align: middle;
    font-size: 7px;
    font-weight: 400;
    line-height: 72px;
    text-align: center;
}

#p4s-popup .p4s-popup-title {
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 10px;
}

#p4s-popup .p4s-popup-text {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 30px;
}

#p4s-popup .p4s-popup-button {
    box-sizing: border-box;
    display: inline-block;
    border: 2px solid #212121;
    border-radius: 2px;
    padding: 0 35px;
    height: 56px;
    line-height: 52px;
    font-size: 16px;
    color: #212121;
    text-transform: uppercase;
    cursor: pointer;
}

#p4s-popup .p4s-popup-fade {
    background-color: rgba(33,33,33,.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9100;
}

#p4s-confirm-widget {
    width: 322px;
    position: fixed;
    z-index: 999999999;
    top: 10px;
    background-color: #eeeeef;
    border-radius: 1px;
    box-shadow: 0 0 6px 1px rgba(0,0,0,0.57);
    color: #000 !important;
    text-align: left !important;
    padding-bottom: 7px !important;
}

.p4s-confirm-left {
    left: 105px;
}

.p4s-confirm-right {
    right: 105px;
}

.p4s-confirm-center {
    left: 50%;
    margin-left: -200px;
}

.p4s-ru-block {
    width: 400px !important;
}

#site-logo-popup {
    float: left;
    position: relative;
    margin: 0px 9px 0px 4px !important;
    padding: 0 !important;
    display: inline-block;
}

#site-logo-popup img {
    height: 65px !important;
    width: 65px !important;
    margin-top: 8px;
}

#p4s-confirm-title {
    margin-left: 12px;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif !important;
    font-weight: bold;
    padding-top: 11px;
    line-height: 20px !important;
}

#p4s-confirm-text {
    font-size: 12px !important;
    line-height: 1.4em !important;
    margin: 5px 0 5px 78px!important;
    padding: 0 !important;
    text-align: left !important;
    font-family: 'Open Sans', sans-serif !important;
    color: #7c7c7c !important;
}


#p4s-powered {
    float: left;
    font-size: 10px;
    margin-top: 10px;
    font-family: Arial !important;
    line-height: 1.2em !important;
    margin-left: 11px !important;
}

#p4s-powered span {
    vertical-align: 3px;
}

#p4s-powered span>a {
    text-decoration: none !important;
    color: black !important;
    font-size: 10px !important;
    line-height: 19px !important;
    font-weight: normal !important;
}

    #p4s-powered span > a:hover,
    #p4s-powered span > a:focus {
        text-decoration: none !important;
        background-color: transparent !important;
        color: black !important;

    }
    #p4s-powered a:hover,
    #p4s-powered a:focus {
        text-decoration: none !important;
        background-color: transparent !important;
        color: black !important;
    }

#p4s-powered img {
    vertical-align: bottom !important;
    width: 61px !important;
    height: 19px !important;
    padding-right: 2px !important;
    display: inline-block !important;
    margin: 0px !important;
}

#p4s-confirm-buttons {
    margin-top: 6px;
    position: relative;
    width: 164px;
    float: right;
    font-family: Arial;
    font-size: 12px;
}
.p4s-confirm-buttons-ru {
    width: 230px !important;
}

#p4s-confirm-block-button {
    margin-left: 10px;
    position: relative;
    float: left;
}
.p4s-confirm-button {
    background-color: white;
    border: 1px solid #a09797;
    border-radius: 3px;
    padding: 3px 16px 3px 16px;
    background-color: #f7f7f7;
    cursor: pointer;
    line-height: 23px;
}

#p4s-confirm-allow-button {
    position: relative;
    float: left;
    margin-left: 11px;
    cursor: pointer;
    background-color: #ffd500;
}
.p4s-confirm-button {
    background-color: white;
    border: 1px solid #a09797;
    border-radius: 3px;
    padding: 3px 16px 3px 16px;
    background-color: #f7f7f7;
    cursor: pointer;
}


@-webkit-keyframes p4s-tada {
    0%,100% {
        -webkit-transform: scale3d(1,1,1);
        transform: scale3d(1,1,1)
    }

    10%,20% {
        -webkit-transform: scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg);
        transform: scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg)
    }

    30%,50%,70%,90% {
        -webkit-transform: scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg);
        transform: scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)
    }

    40%,60%,80% {
        -webkit-transform: scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg);
        transform: scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)
    }
}

@keyframes p4s-tada {
    0%,100% {
        -webkit-transform: scale3d(1,1,1);
        transform: scale3d(1,1,1)
    }

    10%,20% {
        -webkit-transform: scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg);
        transform: scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg)
    }

    30%,50%,70%,90% {
        -webkit-transform: scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg);
        transform: scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)
    }

    40%,60%,80% {
        -webkit-transform: scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg);
        transform: scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)
    }
}


#p4s-label.p4s-label {
    margin: -0 0 0;
    border: 0;
    background-color: transparent;
    transition: background-color,color .2s ease-in;
    box-shadow: 0 1px 3px 0 rgba(34,28,5,.4);
    /*position: fixed;
    top: 50%;*/
    height: 56px;
    width: 56px;
    line-height: 56px;
    text-align: center;
}

#p4s-label.p4s-label {
    font-family: Arial,Helvetica,sans-serif;
    cursor: pointer;
    padding: 0;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
}

#p4s-label.p4s-label {
    position: relative;
}

#p4s-label.p4s-label--left {
    float: left;
}

#p4s-label.p4s-label--yellow {
    color: #212121;
    background-color: #fdd95b;
}

#p4s-label.p4s-label::after, #p4s-label.p4s-label::before {
    position: absolute;
    content: '';
}

#p4s-label.p4s-label::before {
    -webkit-animation-duration: .75s;
    animation-duration: .75s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: p4s-tada;
    animation-name: p4s-tada;
    top: 18px;
    left: 18px;
    width: 20px;
    height: 20px;
    background-size: contain!important;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAAC5ElEQVRYhe3YT4hVZRjH8c89d0Zb2MjNf5nTYigqhLSyBtMyMFRq06polRAoIiWI0sZVZYvMVi5ESNokaLsWIhaUGxGNatXCikia2eSmwIWhM7Z479h7njn33pxzZ2wxv93zvM95z/e87/P+OU9jZGREDzUx0SsILWzFLZzFX//hmZ59F13aGjiAi1jS40Wj+BkncQo/YU2PZ5bhEvbPBLCJ4ziIdfgay7v0c1T5I5a3fZ20AufwFD5qxzaqAhsVU9zAJ3gz+H/AM6qn5FaF7wYWVPib+A5rg/8I9sTgqhF8rwLuCnZ0gLunwgeDWFjhn2j39Xvwv429vQC3SXmX6zKek74612Yp5/7oAKjddgIvBP+3eB6/Bv+h9rtuK5/iIfyI4ax9HOsxlvlW4FO81AWsSl9gp/IHDUuL8IHMd1ma/r8pj+CBAHcTrwa4J6Svv1M4eAXfY3XmG8NryqnzqGxlTwEuwe7Q4SFcyOxH8CUenAHclFZJe2Q+EOdxOMTtw7054FtYlAWM4/3MHsTn0t5VV8NS7ubbykHlqW9J6aBoB8ZV+yGuZ/Zu07eFOtqINzL7Gj4OMdtJi2RUStQpXcf9/j2qFuA3rOwjIPwipc3UHrpMmrnBLGZ1gU3hwdPK5+i2WYCDh8O7r+KrELO5wIbgPBfsF/vLVdLLwf4m2OsLaZhzXQr2s31FCgDBvhjsxwvlTZKUb7ke6idR0GPBvhLsVQPYEpz5cm/gvn5TZYo3pHE8ndmTA6afsbmGdLgGzZImBJ5uF9b/heYB62oesK7mAetqHrCuelUWPpgDhsO6nFbNVqtV5S9wDLtmCSrXBizFmarGKsCm9FsZfwNmU6PSreq0UKUYCIEFPsPrc8NV0g6pErE9d8bazGL8OYdQVSrlYxzBadedu60IeE35wnjXFQHvVAWe7NI+KZXtZqy6gJNScXOoQ/uYeqWSvpwkJ7u0narbeT8A35EqXlHn8W7dzv8ByUh4HH0FJD0AAAAASUVORK5CYII=) no-repeat;
    z-index: 5;
}

#p4s-label.p4s-label--white::before {
    top: 16px;
    left: 16px;
}

#p4s-label.p4s-label--white {
    color: #212121;
    background-color: #fff;
    border: 2px solid #212121;
    line-height: 52px;
}

#p4s-label.p4s-label--black {
    color: #fff;
    background-color: #212121;
}

#p4s-label.p4s-label--black:before {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAACk0lEQVRYhe2YTWsUQRCG35n166AJEmJQIx6UoIISCQajohDBgH/CXyAiipccPEhAwVMQhIBCDmK8eVEQD3qIB4PxC4SACIlZBT8QowdBTR4Pu4MzlZ6e3cxsctkXGra6qrqe7p3pbiYAlKGSpPmsIEkbJZ2QhKQHkuZqyMkeG0hrATAIPAPaPHECeoGv/NcnYF9GTjswCZz3xaU5SsDNWMFXwCbPQJMs1hNPfAfwJhZ7vbogNQEGwA1HwedVcFeOS789k3/piB+uFfCSI3ka6EkpuC4FEGBtSs4B4L0j/mwW4ACwYJKmgE5HkX5gDPjhAZwDbgHHHPnbgXcm/g9wJA2wBZg1CWUHXAdw3wOVprssfo47gQ8mborYyseDrzhm02cG7Mb919SqMrDHjHkY+GviBi1gG/DTBA2ZgbqAzzngIs2y+F+5bGK+ARvigBdNQJnKwx/5V+N+85aqcZLbynoqe2dc5yLAAJgxztMkZ3imQLhIp0yNC8b/OgLsNY5fQGsscQ3wsQGAb0muYjuVvTOu3aGko+b0u2fO0QFJm2s4V+vVTlP7i6SHJqY/lHTIdD429vFiuRI6aexHxj4YSuoynRPG7isUyQAY+6mx94aStpjOaWPvKJLIaJexZ4y9NQB6TOdk7Hegyn0tKJrM1IhUktQdsxcC8F5YWyV9bwRVTN7Jhw0unltNwLxqAuZVEzCvmoB55QMMJA0tA8NV+U4TkrfaqIXASAMuqWm6Rh1fFkrA6DLCRRqhsjBewBC4vQJwkUYNj+xtZjluL1lKPI+rjHNeyfvgiivrPrjisitYr0JJ+z3+BUkv8hQoYgXnJLWk+MqStuUZvIiTZMzju5N7dPtaL6G1AhOOLWOc6gegPO0fbkF7oEJXxP8AAAAASUVORK5CYII=) no-repeat;
}


#p4s-label.p4s-label--right {
    float: right;
}

#p4s-confirm-widget a {
    display: inline !important;
}

.p4s-label:hover::before {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: p4s-tada;
    animation-name: p4s-tada;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite
}


.p4s-button--circle::after, .p4s-button--text::after, .p4s-button::before {
    content: '';
}
.p4s-button {
    margin: 0;
    border: 0;
    background-color: transparent;
    box-sizing: border-box;
    -webkit-transition: background-color,color .2s ease-in;
    transition: background-color,color .2s ease-in;
    position: relative;
    height: 56px;
    line-height: 56px;
}
.p4s-button, .p4s-button--circle.p4s-button--active, .p4s-button--circle:hover {
    box-shadow: 0 1px 3px 0 rgba(34,28,5,.4);
}
.p4s-button {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
.p4s-button {
    font-family: Arial,Helvetica,sans-serif;
    cursor: pointer;
    padding: 0;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
}

.p4s-button--text {
    max-width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.p4s-button--yellow {
    color: #212121;
    background-color: #fdd95b;
}

.p4s-button--text {
    display: inline-block;
    padding-left: 53px;
    padding-right: 18px;
}

.p4s-button--text, .p4s-button--text::after {
    border-radius: 3px;
}

.p4s-button::before {
    -webkit-animation-duration: .75s;
    animation-duration: .75s;
    animation-fill-mode: both;
    animation-name: p4s-tada;
    position: absolute;
    top: 18px;
    left: 18px;
    width: 20px;
    height: 20px;
    background-size: contain!important;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAAC5ElEQVRYhe3YT4hVZRjH8c89d0Zb2MjNf5nTYigqhLSyBtMyMFRq06polRAoIiWI0sZVZYvMVi5ESNokaLsWIhaUGxGNatXCikia2eSmwIWhM7Z479h7njn33pxzZ2wxv93zvM95z/e87/P+OU9jZGREDzUx0SsILWzFLZzFX//hmZ59F13aGjiAi1jS40Wj+BkncQo/YU2PZ5bhEvbPBLCJ4ziIdfgay7v0c1T5I5a3fZ20AufwFD5qxzaqAhsVU9zAJ3gz+H/AM6qn5FaF7wYWVPib+A5rg/8I9sTgqhF8rwLuCnZ0gLunwgeDWFjhn2j39Xvwv429vQC3SXmX6zKek74612Yp5/7oAKjddgIvBP+3eB6/Bv+h9rtuK5/iIfyI4ax9HOsxlvlW4FO81AWsSl9gp/IHDUuL8IHMd1ma/r8pj+CBAHcTrwa4J6Svv1M4eAXfY3XmG8NryqnzqGxlTwEuwe7Q4SFcyOxH8CUenAHclFZJe2Q+EOdxOMTtw7054FtYlAWM4/3MHsTn0t5VV8NS7ubbykHlqW9J6aBoB8ZV+yGuZ/Zu07eFOtqINzL7Gj4OMdtJi2RUStQpXcf9/j2qFuA3rOwjIPwipc3UHrpMmrnBLGZ1gU3hwdPK5+i2WYCDh8O7r+KrELO5wIbgPBfsF/vLVdLLwf4m2OsLaZhzXQr2s31FCgDBvhjsxwvlTZKUb7ke6idR0GPBvhLsVQPYEpz5cm/gvn5TZYo3pHE8ndmTA6afsbmGdLgGzZImBJ5uF9b/heYB62oesK7mAetqHrCuelUWPpgDhsO6nFbNVqtV5S9wDLtmCSrXBizFmarGKsCm9FsZfwNmU6PSreq0UKUYCIEFPsPrc8NV0g6pErE9d8bazGL8OYdQVSrlYxzBadedu60IeE35wnjXFQHvVAWe7NI+KZXtZqy6gJNScXOoQ/uYeqWSvpwkJ7u0narbeT8A35EqXlHn8W7dzv8ByUh4HH0FJD0AAAAASUVORK5CYII=) no-repeat;
    z-index: 5;
}

.p4s-button--black:before {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAACk0lEQVRYhe2YTWsUQRCG35n166AJEmJQIx6UoIISCQajohDBgH/CXyAiipccPEhAwVMQhIBCDmK8eVEQD3qIB4PxC4SACIlZBT8QowdBTR4Pu4MzlZ6e3cxsctkXGra6qrqe7p3pbiYAlKGSpPmsIEkbJZ2QhKQHkuZqyMkeG0hrATAIPAPaPHECeoGv/NcnYF9GTjswCZz3xaU5SsDNWMFXwCbPQJMs1hNPfAfwJhZ7vbogNQEGwA1HwedVcFeOS789k3/piB+uFfCSI3ka6EkpuC4FEGBtSs4B4L0j/mwW4ACwYJKmgE5HkX5gDPjhAZwDbgHHHPnbgXcm/g9wJA2wBZg1CWUHXAdw3wOVprssfo47gQ8mborYyseDrzhm02cG7Mb919SqMrDHjHkY+GviBi1gG/DTBA2ZgbqAzzngIs2y+F+5bGK+ARvigBdNQJnKwx/5V+N+85aqcZLbynoqe2dc5yLAAJgxztMkZ3imQLhIp0yNC8b/OgLsNY5fQGsscQ3wsQGAb0muYjuVvTOu3aGko+b0u2fO0QFJm2s4V+vVTlP7i6SHJqY/lHTIdD429vFiuRI6aexHxj4YSuoynRPG7isUyQAY+6mx94aStpjOaWPvKJLIaJexZ4y9NQB6TOdk7Hegyn0tKJrM1IhUktQdsxcC8F5YWyV9bwRVTN7Jhw0unltNwLxqAuZVEzCvmoB55QMMJA0tA8NV+U4TkrfaqIXASAMuqWm6Rh1fFkrA6DLCRRqhsjBewBC4vQJwkUYNj+xtZjluL1lKPI+rjHNeyfvgiivrPrjisitYr0JJ+z3+BUkv8hQoYgXnJLWk+MqStuUZvIiTZMzju5N7dPtaL6G1AhOOLWOc6gegPO0fbkF7oEJXxP8AAAAASUVORK5CYII=) no-repeat;
}

.p4s-button::before {
    -webkit-animation-fill-mode: both;
    -webkit-animation-name: p4s-tada
}

.p4s-button:hover::before {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: p4s-tada;
    animation-name: p4s-tada;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite
}

.p4s-button--black {
    color: #fff;
    background-color: #212121;
}

.p4s-button--white {
    color: #212121;
    background-color: #fff;
    border: 2px solid #212121;
    line-height: 52px;
}

.p4s-button--white::before {
    top: 16px;
    left: 16px;
}

.p4s-button--circle {
    width: 56px;
    text-align: center;
    text-indent: -9999px;
}

.p4s-button--circle, .p4s-button--circle::after {
    border-radius: 100%;
}
/*Контейнер для вывода кнопок подписки*/
.push_notification_popup
{

}
.push_notification_popup--left
{
    position: absolute;
    float: left;
    top: 16px;
    left: 16px;
}
.push_notification_popup--right
{
    position: absolute;
    float: right;
    top: 16px;
    right: 16px;

}
.push_notification_popup--bottom-left{
    position: absolute;
    float: left;
    bottom: 16px;
    left: 16px;
}
.push_notification_popup--bottom-right{
    position: absolute;
    float: right;
    bottom: 16px;
    right: 16px;
}
.p4s-button
{
   display: none;
}

@media (max-width: 530px) {
    .p4s-confirm-left {
        left: 3px;
    }
    .p4s-confirm-right {
        right: 3px;
    }
}

@media(max-width:450px) {
    #p4s-confirm-widget {
        width: 98% !important;
    }
    #p4s-confirm-widget #p4s-powered span {
        display: none;
    }
}

.v2-p4s-popup-overlay {
    display: block !important;
    position: fixed !important;
    z-index: 1000000 !important;
    top: 0 !important;
    left: 0 !important;
    height: 100% !important;
    width: 100% !important;
	background: rgba(0, 0, 0, 0.5) !important;
}
.v2-p4s-popup-content {
    font-family: 'arial',arial !important;
    font-weight: 400 !important;
    color: #000000 !important;
    font-size: 14px !important;
    display: block !important;
    width: 720px !important;
    height: 360px !important;
    left: 50% !important;
    top: 50% !important;
    position: fixed !important;
    z-index: 1000001 !important;
    text-align: left !important;
    box-shadow: 0px 5px 20px -2px #202020 !important;
    transform: translate(-50%, -50%) scale(1) !important;
    background-color: #ffffff !important;
}

.v2-p4s-popup-img {
    float: left !important;
    width: 50% !important;
    height: 100% !important;
}

.v2-p4s-popup-img img{
    text-align: left !important;
    font-family: 'arial',arial !important;
    font-weight: 400 !important;
    color: #000000 !important;
    font-size: 14px !important;
    width: 100%!important;
    margin: 0!important;
    padding: 0!important;
    border: none!important;
    height: 100% !important;
    vertical-align: bottom !important;
}
.v2-p4s-popup-title {
    border-radius: 0px !important;
    z-index: 1000004 !important;
    text-align: left !important;
    padding: 0px 0px !important;
    font-family: 'Raleway',arial !important;
    font-weight: 700 !important;
    color: #000000 !important;
    font-size: 32px !important;
    margin: 45px 15px 15px 390px !important;
    line-height: 1.22857143 !important;
}
.v2-p4s-popup-text {
    border-radius: 0px !important;
    z-index: 1000005 !important;
    text-align: left !important;
    padding: 0px 0px !important;
    font-family: 'Raleway',arial !important;
    font-weight: 400 !important;
    color: #000000 !important;
    font-size: 14px !important;
    margin: 15px 15px 15px 390px !important;
    line-height: 1.42857143 !important;
}
.v2-p4s-popup__button {
    background: #000000 !important;
    border: 1px solid #000000 !important;
    right: 20px !important;
    top: 290px !important;
    border-radius: 0px !important;
    z-index: 1000007 !important;
    text-align: center !important;
    padding: 0px 0px !important;
    font-family: 'Raleway',arial !important;
    font-weight: 700 !important;
    color: #FFF !important;
    font-size: 16px !important;
    width: 145px !important;
    height: 35px !important;
    position: absolute !important;
    line-height: 35px !important;
    cursor: pointer !important
}
.v2-p4s-popup-close {
    right: 15px !important;
    top: -10px !important;
    border-radius: 0px !important;
    z-index: 1000008 !important;
    text-align: left !important;
    padding: 0px 0px !important;
    font-family: 'Raleway',arial !important;
    font-weight: 100 !important;
    color: #000000 !important;
    font-size: 56px !important;
    position: absolute !important;
    line-height: 1.42857143 !important;
}
a.v2-p4s-popup__close {
    cursor: pointer !important;
    line-height: 1.42857143 !important;
}

@media (max-width: 760px) {
    .v2-p4s-popup-content {
        width: 95% !important;
    }
    .v2-p4s-popup-img {
        display: none !important;
    }
    .v2-p4s-popup-title {
        margin-left: 15px !important;
        text-align: center !important;
    }
    .v2-p4s-popup-text {
        margin-left: 15px !important;
        text-align: center !important;
    }
}


.v2-p4s-confirm {
  max-width: 228px;
  padding: 10px 25px;
}
.v2-p4s-confirm:after {
  display: table;
  clear: both;
  content: '';
}
@media only screen and (min-width: 635px) {
  .v2-p4s-confirm {
    max-width: 400px;
    padding: 10px 10px 10px 146px;
  }
}
.v2-p4s-confirm__aside {
  color: #3c3c3c;
  font-size: 12px !important;
  line-height: 1.2;
  text-align: center;
}
@media only screen and (min-width: 635px) {
  .v2-p4s-confirm__aside {
    float: left;
    width: 136px;
    margin-left: -146px;
  }
}
.v2-p4s-confirm__image {
  display: block;
  max-width: 98px;
  margin: 0 auto 6px;
}
@media only screen and (min-width: 635px) {
  .v2-p4s-confirm__image {
    min-width: 119px !important;
    max-width: 119px !important;
    height: 119px !important;
  }
}
.v2-p4s-confirm__link {
  color: #7d7d7d !important;
  text-decoration: underline !important;
  font-size: 12px !important
}
.v2-p4s-confirm__link:hover {
  text-decoration: none;
}
.v2-p4s-confirm__title {
  clear: initial;
  margin: 0 0 8px;
  padding: 5px 0 0;
  color: #3c3c3c;
  font-size: 16px;
  font-weight: 700;
  font-weight: 900;
  line-height: 1.1;
  font-family: 'Open Sans','Lato', 'Arial', 'sans-serif' !important;
  background-color: transparent !important;
  border: none !important;
  text-transform: none;
}
.v2-p4s-confirm__desc {
  display: block;
  margin: 0 0 10px;
  color: #7d7d7d;
  font-size: 12px;
  line-height: 1.2;
  font-family: 'Lato', 'Arial', 'sans-serif' !important;
  text-transform: none;
}
@media only screen and (min-width: 635px) {
  .v2-p4s-confirm__desc {
    margin: 0 0 50px;
  }
}
.v2-p4s-confirm__controls {
  font-size: 0;
  bottom: 9px;
  position: absolute;
  width: 244px;
}
@media only screen and (max-width: 634px) {
  .v2-p4s-confirm__controls {
  position: inherit;
  width: auto;
}
}
.v2-p4s-confirm__control {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  padding: 9px 12px !important;
  color: #fff;
  font-size: 13px !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
  text-align: center !important;
  text-decoration: none !important;
  border: 0px solid #ababab;
  outline: 0 none;
  background: #ababab;
  -webkit-transition: color 0.2s ease-in, background 0.2s ease-in;
          transition: color 0.2s ease-in, background 0.2s ease-in;
}
.v2-p4s-confirm__control:hover {
  opacity: 0.7;
}
.v2-p4s-confirm__control--width_full {
  width: 100% !important;
}
.v2-p4s-confirm__control--style_primary {
  border-color: #17b9c7;
  background: #17b9c7;
}
.v2-p4s-confirm__control-item {
  padding: 0 0 10px;
}
@media only screen and (min-width: 635px) {
  .v2-p4s-confirm__control-item {
    display: inline-block;
    vertical-align: middle;
    width: 50%;
    padding: 0 0 0 4px;
  }
}
@media only screen and (min-width: 635px) {
  .v2-p4s-confirm__control-item:first-child {
    padding: 0 4px 0 0;
  }
}
.v2-p4s-confirm__copyright {
  display: block;
  color: #3c3c3c;
  font-size: 12px;
  line-height: 1.2;
}
.v2-p4s-confirm__copyright--type_mobile {
  display: block;
  text-align: center;
  font-family: inherit !important;
}
@media only screen and (min-width: 635px) {
  .v2-p4s-confirm__copyright--type_mobile {
    display: none;
  }
}
.v2-p4s-confirm__copyright--type_desktop {
  display: none;
    font-family: inherit !important;
}
@media only screen and (min-width: 635px) {
  .v2-p4s-confirm__copyright--type_desktop {
    display: block;
  }
}






.v2-p4s-confirm-left {
    left: 105px;
}

.v2-p4s-confirm-right {
    right: 105px;
}

.v2-p4s-confirm-center {
    left: 50%;
    margin-left: -200px;
}

@media (max-width: 634px) {
    .v2-p4s-confirm-left {
        left: 3px;
    }
    .v2-p4s-confirm-right {
        right: 3px;
    }
}

#p4s-confirm-widget.v2-p4s-confirm__container {
    width: 400px;
    padding-bottom: 0px !important;
    background: #fff !important;
    font-family: 'Open Sans','Lato', 'Arial', 'sans-serif' !important;
    letter-spacing: 0 !important;
}

@media (max-width: 634px) {
    #p4s-confirm-widget.v2-p4s-confirm__container {
    width: 228px !important;
    left: 50%;
    margin-left: -114px;
}
}


.v2-p4s-confirm__control {
    -webkit-box-sizing: border-box !important;
    -moz-box-sizing: border-box !important;
    box-sizing: border-box !important;
}
.v2-p4s-confirm__control-item{
    -webkit-box-sizing: border-box !important;
    -moz-box-sizing: border-box !important;
    box-sizing: border-box !important;
}

#p4s-confirm-block-button.v2-p4s-confirm__control {
    margin: 0 !important;
    float: none;
    display: block !important;
    font-family: inherit !important;
    border-radius: 0px !important;
    border: none !important;
    text-shadow: none !important;
    height: auto !important;
    -moz-word-break: normal !important;
    -o-word-break: normal !important;
    word-break: normal !important;
}

.v2-p4s-confirm__control.pushsender-btn-close {
    background: #fff !important;
    color: #777 !important;
}

#p4s-confirm-allow-button.v2-p4s-confirm__control {
    float: none;
    display: block !important;
    font-family: inherit !important;
    -moz-word-break: normal !important;
    -o-word-break: normal !important;
    word-break: normal !important;
    word-wrap: initial !important;
    margin: 0 !important;
}

#p4s-confirm-allow-button.v2-p4s-confirm__control:hover {
    text-decoration: none !important;
}

.v2-p4s-confirm__close {
    right: 5px !important;
    top: -13px !important;
    border-radius: 0px !important;
    z-index: 1000008 !important;
    text-align: left !important;
    padding: 0px 0px !important;
    font-family: 'Raleway',arial !important;
    font-weight: 100 !important;
    color: #000000 !important;
    font-size: 48px !important;
    position: absolute !important;
    cursor: pointer !important;
    display: block !important;
}

@media (min-width: 635px) {
    .v2-p4s-confirm__close {
        display: none !important;
    }

.p4s-designer__overlay {
    display: block !important;
    position: fixed !important;
    z-index: 1000000 !important;
    top: 0 !important;
    left: 0 !important;
    height: 100% !important;
    width: 100% !important;
    background: rgba(0, 0, 0, 0.5) !important;
}

.p4s-designer {
  width: 228px !important;
  padding: 0 25px 10px !important;
  /*left: 50% !important;*/
    top: 10px !important;
    position: fixed !important;
    z-index: 1000001 !important;
    text-align: left !important;
    /*transform: translate(-50%, -50%) scale(1) !important;*/
    background: #f9f9f9 !important;
    color: #444 !important;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    box-sizing: border-box !important;
}
.p4s-designer__illustration {
  position: relative !important;
  margin: 0 -25px !important;
  background: #195b61 !important;
}
.p4s-designer__illustration-image {
  display: block !important;
  max-width: 100% !important;
  margin: 0 auto !important;
}
.p4s-designer__image {
  position: relative !important;
  display: block !important;
  max-width: 98px !important;
  margin: -49px auto 15px !important;
  border: 2px solid rgba(0,0,0,0) !important;
}
.p4s-designer__title {
  margin: 0 0 5px !important;
  color: #3c3c3c !important;
  font-size: 16px !important;
  font-weight: 700 !important;
  line-height: 1.1 !important;
  font-family: 'Open Sans','Lato', 'Arial', sans-serif !important;
    text-transform: none !important;
    text-align: center !important;
}
.p4s-designer__desc {
  margin: 0 0 20px !important;
  color: #7d7d7d !important;
  font-size: 12px !important;
  line-height: 1.2 !important;
  font-family: 'Open Sans','Lato', 'Arial', sans-serif !important;
    text-align: center !important;
}
.p4s-designer__controls {
  margin: 0 0 28px !important;
}
.p4s-designer__control {
  position: relative !important;
  display: inline-block !important;
  vertical-align: middle !important;
  padding: 7px 10px !important;
  color: #fff;
  font-size: 12px !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
  text-align: center !important;
  text-decoration: none !important;
  text-transform: uppercase !important;
  border: 2px solid #17b9c7;
  outline: 0 none !important;
  background: #17b9c7;
  -webkit-transition: color 0.2s ease-in, background 0.2s ease-in !important;
          transition: color 0.2s ease-in, background 0.2s ease-in !important;
  font-family: 'Open Sans','Lato', 'Arial', sans-serif !important;
    box-sizing: border-box !important;
    cursor: pointer; 
}
.p4s-designer__control:hover {
  opacity: 0.7 !important;
    text-decoration: none !important;
    color: #fff !important;
}
.p4s-designer__control--width_full {
  width: 100% !important;
}
.p4s-designer__control--type_light {
  color: #a6a6a6 !important;
  background: transparent !important;
  border-color: #d7d7d7 !important;
}
.p4s-designer__control--type_light:hover {
  color: #a6a6a6 !important;
}

.p4s-designer__control--style_primary {
  border-color: #13ab98 !important;
  background: #13ab98 !important;
}
.p4s-designer__control--style_secondary {
  border-color: #ff036b !important;
  background: #ff036b !important;
}
.p4s-designer__control-item {
  margin: 0 0 8px !important;
}
.p4s-designer__footer {
  margin: 0 -25px !important;
  padding: 13px 0 !important;
  text-align: center !important;
  font-size: 12px !important;
  line-height: 1.2 !important;
  border-top: 1px solid #ebebeb !important;
    font-family: 'Open Sans', 'Lato', 'Arial', sans-serif !important
}
.p4s-designer__link {
  color: #7d7d7d !important;
  text-decoration: underline !important;
  font-family: 'Open Sans','Lato', 'Arial', sans-serif !important;
}
.p4s-designer__link:hover {
  text-decoration: none !important;
}


.p4s-designer__left {
    left: 105px !important;
}
.p4s-designer__right {
    right: 105px !important;
}
.p4s-designer__center {
    left: 50% !important;
    margin-left: -114px !important;
}

@media (max-width: 500px) {
    .p4s-designer__left {
        left: 50% !important;
        margin-left: -114px !important;
    }
    .p4s-designer__right {
        left: 50% !important;
        margin-left: -114px !important;
    }
}

.v2-p4s-popup-text-info {
border-radius: 0px !important;
z-index: 1000005 !important;
text-align: center;
padding: 0px 0px !important;
font-family: 'Raleway',arial !important;
font-weight: 400 !important;
color: #f7f7f9 !important;
font-size: 24px !important;
line-height: 1.42857143 !important;
}

.v2-p4s-popup-content-info {
font-family: 'arial',arial !important;
font-weight: 400 !important;
color: #000000 !important;
font-size: 14px !important;
display: block !important;
left: 50% !important;
top: 50% !important;
position: fixed !important;
z-index: 1000001 !important;
transform: translate(-50%, -50%) scale(1) !important;
}

















.logoLetter
{
	background: #FFD600;
    padding: 3px 7px 6px 7px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    margin-left: 2px;
    margin-right: 2px;
    display: inline;
}
.p4s-webpush-label .p4s-copyright-link,.p4s-webpush-label .p4s-inner-content {
    font-weight: 700;
/*    text-shadow: -2px 0 rgba(0,0,0,.1),0 2px rgba(0,0,0,.1),2px 0 rgba(0,0,0,.1),0 -2px rgba(0,0,0,.1);*/
    font-family: 'Open Sans',Arial,sans-serif
}

.p4s-webpush-label {
    border-radius: 50%;
    width: 896px;
    height: 216px;
    position: fixed;
    top: -85px;
    left: -190px;
    z-index: 100001;
    font-family: 'Open Sans', Arial, sans-serif;
    margin-left: 22px;
    transition-duration: .25s;
    -webkit-transform: scale(.7);
    transform: scale(.7);
    opacity: 0
}

.p4s-webpush-label.p4s-show {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1
}


.p4sbackInfoDiv:after
{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    -webkit-filter: blur(100px);
	-moz-filter: blur(100px);
       -o-filter: blur(100px);
      -ms-filter: blur(100px);
          filter: blur(100px);
    background-color: rgba(0,0,0,.3);
}
.p4s-webpush-label:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 120%;
    left: 0;
    top: 0;
    -webkit-filter: blur(100px);
	-moz-filter: blur(100px);
       -o-filter: blur(100px);
      -ms-filter: blur(100px);
          filter: blur(100px);
    background-color: rgba(0,0,0,.3);
}

.p4s-yandex .p4s-webpush-label .p4s-webpush-label:after
{
    height: 150%!important;
}


.p4s-webpush-label .p4s-inner-content {
    position: absolute;
    right: 80px;
    top: calc(100px);
    white-space: nowrap;
    font-size: 13px;
    color: #000;
    line-height: 15px;
    -webkit-filter: blur(0);
    filter: blur(0);
    z-index: 10;
    width: 165px!important;

}

.p4s-webpush-label .p4s-copyright-link {
    font-size: inherit;
    color: inherit;
    text-decoration: underline;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    padding-left: 0px;
    top: -1px
}

.p4s-webpush-label .p4s-copyright-link:hover {
    text-decoration: none
}

.p4s-webpush-label .p4s-copyright-link:after {
    position: absolute;
    left: 0;
    top: 50%;
    width: 20px;
    margin: -10px 0 0
}

.p4s-webpush-label.p4s-windows.p4s-firefox {
    max-width: 100%;
    width: 100%;
    left: 0px;
}

.p4s-webpush-label.p4s-windows.p4s-firefox:after {
    max-width: 896px
}

.p4s-webpush-label.p4s-windows.p4s-firefox .p4s-inner-content {
    right: auto;
    left: 654px
}

@media (max-width: 1140px) {
    .p4s-webpush-label.p4s-windows.p4s-firefox .p4s-inner-content {
        left:645px
    }
}

@media (max-width: 1080px) {
    .p4s-webpush-label.p4s-windows.p4s-firefox .p4s-inner-content {
        left:calc(23.7% + 384px)
    }
}

@media (max-width: 978px) {
    .p4s-webpush-label.p4s-windows.p4s-firefox .p4s-inner-content {
        left:calc(25% + 384px)
    }
}

@media (max-width: 860px) {
    .p4s-webpush-label.p4s-windows.p4s-firefox .p4s-inner-content {
        left:calc(23.5% + 384px)
    }
}

@media (max-width: 768px) {
    .p4s-webpush-label.p4s-windows.p4s-firefox.initialized {
        display:none!important
    }
}

.p4s-webpush-label.p4s-windows.p4s-opera {

    left: auto;
    right: 0
}

.p4s-webpush-label.p4s-windows.p4s-opera .p4s-inner-content {
    right: 16px
}


.p4s-webpush-label.p4s-windows.p4s-opera.p4s-base-lang {
    margin-left: 0;
    right: auto;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}

.p4s-webpush-label.p4s-windows.p4s-opera.p4s-base-lang .p4s-inner-content {
    right: 0
}


.p4s-webpush-label.p4s-windows.p4s-yandex {
    left: auto;
    right: -160px;
    margin: 0;
}

.p4s-webpush-label.p4s-windows.p4s-yandex .p4s-inner-content {
    right: auto;
    left: 85px
}

.p4s-webpush-label.p4s-linux.p4s-firefox {
    max-width: 100%;
    width: 100%;
    left: -22px;
}

.p4s-webpush-label.p4s-linux.p4s-firefox:after {
    max-width: 896px
}

.p4s-webpush-label.p4s-linux.p4s-firefox .p4s-inner-content {
    right: auto;
    left: 716px
}

@media (max-width: 1540px) {
    .p4s-webpush-label.p4s-linux.p4s-firefox .p4s-inner-content {
        left:710px
    }
}

@media (max-width: 1450px) {
    .p4s-webpush-label.p4s-linux.p4s-firefox .p4s-inner-content {
        left:calc(18% + 450px)
    }
}

@media (max-width: 1270px) {
    .p4s-webpush-label.p4s-linux.p4s-firefox .p4s-inner-content {
        left:calc(19% + 450px)
    }
}

@media (max-width: 1024px) {
    .p4s-webpush-label.p4s-linux.p4s-firefox .p4s-inner-content {
        left:calc(20% + 450px)
    }
}

@media (max-width: 940px) {
    .p4s-webpush-label.p4s-linux.p4s-firefox .p4s-inner-content {
        left:calc(21% + 450px)
    }
}

@media (max-width: 860px) {
    .p4s-webpush-label.p4s-linux.p4s-firefox .p4s-inner-content {
        left:calc(20% + 450px)
    }
}

@media (max-width: 805px) {
    .p4s-webpush-label.p4s-linux.p4s-firefox .p4s-inner-content {
        left:calc(14% + 450px)
    }
}

@media (max-width: 768px) {
    .p4s-webpush-label.p4s-linux.p4s-firefox.initialized {
        display:none!important
    }
}

.p4s-webpush-label.p4s-linux.p4s-opera {

    left: auto;
    right: 0
}

.p4s-webpush-label.p4s-linux.p4s-opera .p4s-inner-content {
    right: 16px
}



.p4s-webpush-label.p4s-linux.p4s-opera.p4s-base-lang {
    margin-left: 16px;
    right: auto;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
}

.p4s-webpush-label.p4s-linux.p4s-opera.p4s-base-lang .p4s-inner-content {
    right: 0;
    margin-right: -18px
}

.p4s-webpush-label.p4s-linux.p4s-yandex {
    left: auto;
    right: -160px;
    margin: 0;
}

.p4s-webpush-label.p4s-linux.p4s-yandex .p4s-inner-content {
    right: auto;
    left: 106px
}


.p4s-webpush-label.p4s-macos.p4s-firefox {
    left: 0;
}

.p4s-webpush-label.p4s-macos.p4s-firefox .p4s-inner-content {
    right: auto;
    left: 616px
}

@media (max-width: 1240px) {
    .p4s-webpush-label.p4s-macos.p4s-firefox .p4s-inner-content {
        left:611px
    }
}

@media (max-width: 1180px) {
    .p4s-webpush-label.p4s-macos.p4s-firefox .p4s-inner-content {
        left:602px
    }
}

@media (max-width: 1140px) {
    .p4s-webpush-label.p4s-macos.p4s-firefox .p4s-inner-content {
        left:596px
    }
}

@media (max-width: 1060px) {
    .p4s-webpush-label.p4s-macos.p4s-firefox .p4s-inner-content {
        left:585px
    }
}

@media (max-width: 998px) {
    .p4s-webpush-label.p4s-macos.p4s-firefox .p4s-inner-content {
        left:576px
    }
}

@media (max-width: 896px) {
    .p4s-webpush-label.p4s-macos.p4s-firefox .p4s-inner-content {
        left:562px
    }
}

@media (max-width: 816px) {
    .p4s-webpush-label.p4s-macos.p4s-firefox .p4s-inner-content {
        left:552px
    }
}

@media (max-width: 760px) {
    .p4s-webpush-label.p4s-macos.p4s-firefox .p4s-inner-content {
        left:542px
    }
}



.p4s-webpush-label.p4s-macos.p4s-opera {

    left: auto;
    right: 0
}

.p4s-webpush-label.p4s-macos.p4s-opera .p4s-inner-content {
    right: 16px
}

.p4s-webpush-label.p4s-macos.p4s-opera.p4s-base-lang{
    margin-left: 16px;
    right: auto;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
}

.p4s-webpush-label.p4s-macos.p4s-opera.p4s-base-lang .p4s-inner-content {
    right: 10.5%
}

@media (max-width: 1380px) {
.p4s-webpush-label.p4s-macos.p4s-opera.p4s-base-lang .p4s-inner-content{
        right:10%
    }
}

.p4s-webpush-label.p4s-macos.p4s-yandex {
    left: auto;
    right: -160px;
    margin: 0;
}

.p4s-webpush-label.p4s-macos.p4s-yandex .p4s-inner-content {
    right: auto;
    left: 94px
}

@media (max-width: 860px) {
    .p4s-webpush-label.p4s-linux.p4s-firefox,.p4s-webpush-label.p4s-windows.p4s-firefox {
        max-width:100%;
        left: 0
    }

    .p4s-webpush-label.p4s-linux.p4s-firefox .p4s-inner-content,.p4s-webpush-label.p4s-windows.p4s-firefox .p4s-inner-content {
        font-size: 0;
        color: transparent;
        letter-spacing: -.36em;
        right: 62px
    }

    .p4s-webpush-label.p4s-linux.p4s-firefox .p4s-copyright-link,.p4s-webpush-label.p4s-windows.p4s-firefox .p4s-copyright-link {
        font-size: 11px;
        letter-spacing: normal;
        color: #000
    }

    .p4s-webpush-label.p4s-linux.p4s-opera,.p4s-webpush-label.p4s-windows.p4s-opera {
        max-width: 100%;
        left: 0;
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    .p4s-webpush-label.p4s-linux.p4s-opera .p4s-inner-content,.p4s-webpush-label.p4s-windows.p4s-opera .p4s-inner-content {
        font-size: 0;
        color: transparent;
        letter-spacing: -.36em;
        right: 40px
    }

    .p4s-webpush-label.p4s-linux.p4s-opera .p4s-copyright-link,.p4s-webpush-label.p4s-windows.p4s-opera .p4s-copyright-link {
        font-size: 11px;
        letter-spacing: normal;
        color: #000
    }
}

.p4s-bottom-push-label,.p4s-bottom-push-label .p4s-copyright-link {
    font-weight: 700;
/*    text-shadow: -2px 0 rgba(0,0,0,.1),0 2px rgba(0,0,0,.1),2px 0 rgba(0,0,0,.1),0 -2px rgba(0,0,0,.1);*/
    font-size: 13px;
    line-height: 15px;
    font-family: 'Segoe UI','Open Sans',Ubuntu,'Dejavu Sans',Helvetica,'Helvetica Neue',Arial,sans-serif
}

@media (max-width: 768px) {
    .p4s-webpush-label {
        display:none!important;
        z-index: -10!important;
        visibility: hidden!important;
        opacity: 0!important
    }
}

.p4s-bottom-push-label {
    position: absolute;
    left: 50%;
    bottom: 30px;
    white-space: nowrap;
    color: #000;
    -webkit-filter: blur(0);
    filter: blur(0);
    z-index: 10;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
}

.p4s-bottom-push-label .p4s-copyright-link {
    text-decoration: underline;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    padding-left: 24px;
    top: -1px;
    color: #000!important
}

.p4s-bottom-push-label .p4s-copyright-link:hover {
    text-decoration: none
}

.p4s-bottom-push-label .p4s-copyright-link:after {
    position: absolute;
    left: 0;
    top: 50%;
    width: 20px;
    margin: -10px 0 0
}


@media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width:1281px) and (max-width:1440px) {
    .p4s-webpush-label.p4s-macos.p4s-chrome .p4s-inner-content {
        right:calc(16% - 65px)
    }
}

@media only screen and (-webkit-min-device-pixel-ratio: 2.5) and (max-width:1280px) {
    .p4s-webpush-label.p4s-windows.p4s-chrome .p4s-inner-content {
        right:calc(16% - 65px)
    }
}

.bottomBrandLink
{
	width: 100%;
    text-align: center;
    bottom: 50px;
    position: absolute;
    z-index: 1000002;
    font-family: 'arial',arial !important;
    font-weight: 700 !important;
    color: #000000 !important;
    font-size: 14px !important;
}
.bottomBrandLink .p4s-copyright-link
{
	color: #f7f7f9  !important;	
}
.bottomBrandLink .p4s-copyright-link .logoLetter
{
	color: #000;
	padding: 3px 7px 4px 7px;
}

.page__p4s_sbs-panel {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index:1000000;
}
@media only screen and (min-width: 768px) {
  .page__p4s_sbs-panel {
    right: 60px;
    bottom: 60px;
  }
}
.p4s_sbs-panel {
  box-sizing: border-box;
  position: relative;
  display: block;
  font-family: TTNorms, Arial, sans-serif;
  font-variant: no-common-ligatures;
  font-size: 18px;
  line-height: 1.2;
}
.p4s_sbs-panel__trigger {
  box-sizing: border-box;
  display: block;
  width: 50px;
  height: 50px;
  padding: 15px 0 0;
  font-size: 0;
  line-height: 100px;
  border-radius: 50%;
  background: #090f5a;
  box-shadow: 0px 24px 32px rgba(9,15,90,0.12);
  cursor: pointer;
}
.p4s_sbs-panel__icon {
  box-sizing: border-box;
  display: block;
  width: 19px;
  height: 19px;
  margin: 0 auto;
  fill: #fff;
  stroke: none;
}
.p4s_sbs-panel__tooltip {
  box-sizing: border-box;
  position: absolute;
  bottom: 100%;
  right: 0;
  display: none;
  padding: 0 0 6px;
}
.p4s_sbs-panel__tooltip-tail {
  position: absolute;
  bottom: -6px;
  right: 51px;
  width: 22px;
  height: 16px;
  fill: #fff;
}
.p4s_sbs-panel__content {
  min-width: 237px;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 24px 32px rgba(9,15,90,0.12);
  background: #fff;
}
.p4s_sbs-panel__title {
  margin: 0 0 10px;
  color: #090f5a;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
}
.p4s_sbs-panel__illustration {
  max-width: 130px;
  margin: 0 auto 5px;
}
.p4s_sbs-panel__image {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}
.p4s_sbs-panel__controls {
  padding: 10px 0 0;
  text-align: center;
}
.p4s_sbs-panel__control,
.p4s_sbs-panel button {
  position: relative;
  display: block;
  width: 100%;
  max-width: 120px;
  margin: 0 auto;
  text-decoration: none;
  background: transparent;
  border: 0 none;
  border-radius: 20px;
  outline: 0 none;
  cursor: pointer;
}
.p4s_sbs-panel__control:hover:before,
.p4s_sbs-panel button:hover:before,
.p4s_sbs-panel__control:focus:before,
.p4s_sbs-panel button:focus:before,
.p4s_sbs-panel__control:active:before,
.p4s_sbs-panel button:active:before {
  left: 10px;
  right: 10px;
}
.p4s_sbs-panel__control:hover .p4s_sbs-panel__control-panel,
.p4s_sbs-panel button:hover .p4s_sbs-panel__control-panel,
.p4s_sbs-panel__control:focus .p4s_sbs-panel__control-panel,
.p4s_sbs-panel button:focus .p4s_sbs-panel__control-panel,
.p4s_sbs-panel__control:active .p4s_sbs-panel__control-panel,
.p4s_sbs-panel button:active .p4s_sbs-panel__control-panel {
  transform: translate(0, -8px);
}
.p4s_sbs-panel__control:before,
.p4s_sbs-panel button:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: block;
  height: 30px;
  background: transparent;
  background: radial-gradient(ellipse at center, rgba(186,188,211,0.8) 0, rgba(186,188,211,0.7) 21%, rgba(255,255,255,0) 70%);
  border-radius: 20px;
  transition: left 0.3s ease, right 0.3s ease;
}
.p4s_sbs-panel__control-panel,
.p4s_sbs-panel button-panel {
  position: relative;
  z-index: 10;
  display: block;
  margin: 0;
  padding: 10px;
  color: #fff;
  font-size: 10px;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  background: #1a217a;
  border-radius: 18px;
  outline: 0 none;
  opacity: 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.p4s_sbs-panel_tooltip_hover:hover .p4s_sbs-panel__tooltip {
  display: block;
}
.p4s_sbs-panel_tooltip_open .p4s_sbs-panel__tooltip {
  display: block;
}

.p4s-native-reply__background {
    z-index: 1000 !important;
    position: fixed !important;
    width: 100% !important;
    height: 100% !important;
    top: 0 !important;
    left: 0 !important;
    background-color: rgba(0,0,0,0.5) !important;
}

@media only screen and (max-width: 768px) {
    .p4s-native-reply__background {
        display: none;
    }
}

.p4s-native-reply__wrapper {
    position: absolute;
    display: table !important;
    width: 465px !important;
    color: #000 !important;
    background-color: #fff !important;
    padding: 30px !important;
    font-size: 19px !important;
    line-height: 1.2em !important;
    box-shadow: #999 0px 0px 49px -3px !important;
    text-align: center !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%,-50%) !important;
}

.p4s-native-reply__title {
    font-size: 20px !important;
    font-weight: bold !important;
    margin: 0 0 30px !important;
    font-family: 'Open Sans', sans-serif !important !important;
}

.p4s-native-reply__text {
    font-size: 16px !important;
    margin: 0 0 20px !important;
    font-family: 'Open Sans', sans-serif !important;
}

img.p4s-native-reply__image {
    display: inline-block !important;
    max-width: 300px !important;
}

.p4s-native-reply__close {
    position: absolute !important;
    line-height: 1px !important;
    top: 15px !important;
    right: 15px !important;
    cursor: pointer !important;
}

.v2-p4s-confirm-large .v2-p4s-confirm-topics-container {
    width: 100% !important;
    display: flex !important;
    flex-wrap: wrap !important;
    padding: 0 0 10px !important;
    justify-content: space-between !important;
}

.v2-p4s-confirm-large .v2-p4s-topic-checkbox {
    position: absolute !important;
    z-index: -1 !important;
    opacity: 0 !important;
}

.v2-p4s-confirm-large .v2-p4s-topic-label {
    position: static !important;
    display: inline-block !important;
    line-height: 2 !important;
}

.v2-p4s-confirm-large .v2-p4s-topic-wrapper {
    position: relative !important;
    padding-left: 35px !important;
    width: 195px !important;
    color: #3c3c3c !important;
    font-size: 13px !important;
    font-weight: 700 !important;
    font-family: 'Open Sans','Lato', 'Arial', 'sans-serif' !important;
    padding-bottom: 8px !important;
}


    .v2-p4s-confirm-large
    .v2-p4s-topic-wrapper
    .v2-p4s-topic-label::before {
        position: absolute !important;
        top: 2px !important;
        left: 0 !important;
        display: block !important;
        width: 19px !important;
        height: 19px !important;
        pointer-events: none !important;
        content: "" !important;
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
        background-color: #ffffff !important;
        border: 2px solid #d2d2e4 !important;
        border-radius: 5px !important;
    }

    .v2-p4s-confirm-large
    .v2-p4s-topic-wrapper
    .v2-p4s-topic-label::after {
        position: absolute !important;
        top: 5px !important;
        left: 3px !important;
        display: block !important;
        width: 17px !important;
        height: 17px !important;
        content: "";
        background-repeat: no-repeat !important;
        background-position: center center !important;
        background-size: 80% 80% !important;
    }

    .v2-p4s-confirm-large
    .v2-p4s-topic-wrapper
    .v2-p4s-topic-checkbox:checked ~ .v2-p4s-topic-label::before {
        background-color: var(--checkbox-background) !important;
        border-color: var(--checkbox-background) !important;
    }

    .v2-p4s-confirm-large
    .v2-p4s-topic-wrapper
    .v2-p4s-topic-checkbox:checked ~ .v2-p4s-topic-label::after {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E") !important;
    }

@media only screen and (min-width: 635px) {
    .v2-p4s-confirm-large {
        width: 500px !important;
    }

        .v2-p4s-confirm-large .v2-p4s-confirm {
            max-width: 500px !important;
            display: flex !important;
            flex-wrap: wrap !important;
            padding: 10px 10px 10px 10px !important;
        }

        .v2-p4s-confirm-large .v2-p4s-confirm__aside {
            float: none !important;
            margin-left: -10px !important;
        }

        .v2-p4s-confirm-large .v2-p4s-confirm__content {
            width: calc(100% - 136px) !important;
        }

        .v2-p4s-confirm-large .v2-p4s-confirm__controls {
            position: relative !important;
            width: 100% !important;
            text-align: right !important;
            bottom: auto !important;
        }

        .v2-p4s-confirm-large .v2-p4s-confirm__control-item {
            display: inline-block !important;
            width: 122px !important;
        }

        .v2-p4s-confirm-large .v2-p4s-confirm-topics-container {
            padding: 0 30px 10px !important;
        }
}
