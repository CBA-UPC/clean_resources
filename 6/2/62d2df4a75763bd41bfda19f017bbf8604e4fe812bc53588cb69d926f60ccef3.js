$(document).ready(function(){var leaderboard_timeout_set=0;responsiveNav();$(window).resize(function(){if($(".menu-secondary-container").length){responsiveNav()}});$(window).scroll(function(){var scroll=$(window).scrollTop();if(scroll>=80){$(".nav").addClass("nav__shrink");if(!leaderboard_timeout_set){$(".ad__slot--leaderboard").addClass("ad__fixed-viewability");setTimeout(function(){$(".ad__slot--leaderboard").removeClass("ad__fixed-viewability")},4e3);leaderboard_timeout_set=1}}else{$(".nav").removeClass("nav__shrink");$(".ad__slot--leaderboard").removeClass("ad__fixed-viewability");leaderboard_timeout_set=0}});function responsiveNav(){if($(window).width()<1024){$(".menu__overlay  .mo__nav-link").appendTo(".mo__nav-spacer ul")}else{$(".menu__overlay .mo__nav-spacer li").appendTo(".mo__nav--single ul")}}$(".footer__site-links > li > a > .material-icons").on("click",function(e){var collapse=$(this).closest("a").data("href");$(collapse).collapse("toggle");e.preventDefault()})});
ebar-heading {
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 1.2em;
}

button.cookiebar-submit {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  padding: 0.75em 1em;
  line-height: 1.3;
  margin-bottom: 0px !important;
  border: none !important;
  border-radius: 5px;
  background-color: #1bb12f !important;
  color: white !important;
  font-size: 1rem;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

button.cookiebar-submit:hover,
button.cookiebar-submit:focus {
  background-color: #149e26 !important;
}
button.cookiebar-submit:focus {
  -webkit-box-shadow: 0 0 0.06rem 0.19rem #97f1a2 !important;
  box-shadow: 0 0 0.06rem 0.19rem #97f1a2 !important;
}

.cookiebar-overlay {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.85);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  -webkit-animation: fadeIn 0.5s ease-in-out;
  animation: fadeIn 0.5s ease-in-out;
  pointer-events: none;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeUp {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    opacity: 0.8;
  }
  100% {
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
    opacity: 1;
  }
}

@keyframes fadeUp {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    opacity: 0.8;
  }
  100% {
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
    opacity: 1;
  }
}

/* Toggle Switch */

.cookiebar-toggle-wrapper {
  margin-right: 1rem;
}

.cookiebar.intrusive .cookiebar-toggle-wrapper {
  margin-bottom: 1rem;
  margin-right: 0;
}

.cookiebar-toggle-wrapper label {
  font-weight: bold;
}

.cookiebar-toggle-checkbox {
  position: absolute;
  left: -9999999px;
}

.cookiebar-toggle-label {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
  margin-left: 0 !important;
  padding: 0 !important;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  font-size: 0.95em;
  line-height: 1.3;
  margin-right: 1rem;
}

.cookiebar.intrusive .cookiebar-toggle-label span {
  margin-bottom: 0.5rem;
}

.cookiebar-toggle {
  position: relative;
  width: 50px;
  height: 26px;
  border-radius: 15px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  background: #ea1516;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  cursor: pointer;
}

.cookiebar-toggle::before,
.cookiebar-toggle::after {
  content: '';
  position: absolute;
}

.cookiebar-toggle::before {
  left: 2px;
  top: 2px;
  width: 22px;
  height: 22px;
  background: #ffffff;
  border-radius: 50%;
  z-index: 1;
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  -o-transition: transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}

.cookiebar-toggle::after {
  top: 50%;
  right: 8px;
  width: 12px;
  height: 12px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  background: url("data:image/svg+xml;charset=utf-8,<svg style='fill:rgba(0,0,0,.3);' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z'/></svg>");
  background-size: 12px 12px;
}

.cookiebar-toggle-checkbox:checked + .cookiebar-toggle-label .cookiebar-toggle {
  background: #1bb12f;
}

.cookiebar-toggle-checkbox:checked + .cookiebar-toggle-label .cookiebar-toggle::before {
  -webkit-transform: translateX(24px);
  -ms-transform: translateX(24px);
  transform: translateX(24px);
}

.cookiebar-toggle-checkbox:checked + .cookiebar-toggle-label .cookiebar-toggle::after {
  width: 14px;
  height: 14px;
  left: 8px;
  background: url("data:image/svg+xml;charset=utf-8,<svg fill='white' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z'/></svg>");
  background-size: 14px 14px;
}

.sr-text {
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
  width: 1px;
  word-wrap: normal !important;
}

/*  TODO: PREVENT SCROLL */
