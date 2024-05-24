(function(w,d,s,i) {
    var c=d.currentScript;
    if (c) {
        var uo = c.getAttribute('data-ueto');
        if (uo && w[uo] && w[uo].uetConfig && w[uo].uetConfig.deBlock === true)
            return;
    }
    var f,j; f=d.getElementsByTagName(s)[0]; j=d.createElement(s); j.async=true;
    j.src='https://www.clarity.ms/tag/uet/'+i+'';
    j.onload = function () {
        if (!c) return;
        var co = function(u) { return u && typeof u === 'object' && !(u instanceof Array) && u.beaconParams && u.beaconParams.mid && w.clarity; };
        var r = 40;
        var cl = function() {
            if (r-- < 1) return;
            var uo = c.getAttribute('data-ueto');
            if (!uo) return;
            var u = w[uo];
            w.clarityuetq = w.mtagq || u;
            if (!co(u)) { setTimeout(function () { cl(); }, 250); return; }
            var m = u.beaconParams.mid;
            w.clarity('set', '_uetmid', m);
            w.clarity('metadata', (function () { w.clarity('set', '_uetmid', m); }), false);
            d.addEventListener('UetEvent', function(e) {
                var nm = u.beaconParams.mid;
                if (m !== nm) { m = nm; w.clarity('set', '_uetmid', m); }
            });
        };
        cl();
    };
    f.parentNode.insertBefore(j,f);

    function launchEventSetup() {
        if (!w.opener) {return;}
        var sessionIdKey = 'ms-event-setup-session-id';
        var originKey = 'ms-event-setup-event-origin';
        if (sessionStorage) {
            var sessionId = sessionStorage.getItem(sessionIdKey);
            var eventOrigin = sessionStorage.getItem(originKey);
            if (sessionId && eventOrigin) {
                w.opener.postMessage({type: 'REINIT_CLARITY_EVENT_SETUP'}, eventOrigin);
            }
        }
        w.addEventListener('message', function eventListener(e) {
            var oRegex = /^https:\/\/.*\.microsoft\.com(:[0-9]+)?$/i;
            if (!oRegex.test(e.origin)) {return;};
            // ignore the event if it does not match the UET tag of the current page
            if (!e.data || !e.data.params || i !== e.data.params.TagId) {return;}
            if (!(e.data.type === 'INIT_CLARITY_EVENT_SETUP' || e.data.type === 'ACK_REINIT_CLARITY_EVENT_SETUP')) { return; };
            // clarity picker script element
            var cp = d.createElement(s); cp.src = 'https://clarity.microsoft.com/eventPicker.js'; cp.async=true;
            cp.onload = function() {
                // event setup script element
                var est = d.createElement(s); est.src = 'https://bat.bing.com/s/uet/eventSetup.js'; est.async=true;
                var b = d.getElementsByTagName('body')[0];
                var es = d.createElement('event-setup-tool'); b.prepend(es);
                // pass init data to event setup
                es.setAttribute("initData", JSON.stringify(e.data.params));
                es.setAttribute("eventOrigin", e.origin);
                if (sessionStorage) {
                    // save session id and event origin in session storage
                    sessionStorage.setItem(sessionIdKey, e.data.params.SessionId);
                    sessionStorage.setItem(originKey, e.origin);
                }
                if (e.data.type === 'INIT_CLARITY_EVENT_SETUP') {
                    w.opener.postMessage({type: 'ACK_INIT_CLARITY_EVENT_SETUP'}, e.origin);
                }
                f.parentNode.insertBefore(est,f);
            };
            f.parentNode.insertBefore(cp,f);
            w.removeEventListener('message', eventListener);
        });
    }
    launchEventSetup();
})(window, document, 'script', '97008698');
 display: table-cell;
  text-align: center;
  vertical-align: middle;
}
#modalWindow .modalLogin .btnTable .colL .btn,
#modalWindow .modalLogin .btnTable .colR .btn {
  display:         box;
  display: -webkit-box;
  display:    -moz-box;
  height: 44px;
  text-decoration: underline;
  border: 2px solid #3f6974;
          box-align: center;
  -webkit-box-align: center;
     -moz-box-align: center;
}
#modalWindow .modalLogin .btnTable .colL .btn span,
#modalWindow .modalLogin .btnTable .colR .btn span {
  display: block;
  width: 100%;
  text-align: center;
  color: #3f6974;
}
#modalWindow .modalLogin .btnTable .img {
  line-height: 1;
  display: block;
  margin-bottom: 10px;
  text-align: center;
}
#modalWindow .modalLogin .btnTable .colB {
  padding-top: 50px;
}
#modalWindow  .colM {
    position: relative;
    margin-top: 25px;
    margin-bottom: 25px;
  }
#modalWindow  .colM .orBorder {
    margin-top: 0;
  }
#modalWindow  .colM .orBorder:before {
    content: "";
    display: block;
    border-top: solid 1px #ccc;
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50%;
    z-index: 1;
  }
#modalWindow  .colM .orBorder span {
    background: #fff;
    padding: 0 10px;
    position: relative;
    z-index: 5;
  }
#modalWindow .modalLogin .btnTable .btnType04 {
  font-size:15px;
  padding: 10px;
}
#modalWindow .modalLogin .btnTable .colB1 {
  padding-top: 20px;
}
#modalWindow .modalLogin .btnTable .colB2 {
  padding-top: 15px;
}
#modalWindow .modalLogin .btnTable .btnType02 {
  font-size: 20px;
  padding-top: 18px;
  padding-bottom: 18px;
}

/*---------------------------------------------
 wrap
---------------------------------------------*/
#wrap {
  font-family:"Noto Sans JP", "Roboto", sans-serif;
  position: relative;
  height: auto !important;
  height: 100%;
  min-height: 100%;
  width:100%;
  overflow:hidden;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
}
#wrap input,
#wrap button {
  font-family:"Noto Sans JP", "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
}
#header input,
#header button {
   font-family:"Noto Sans JP", "Roboto", sans-serif;
   -webkit-font-smoothing: antialiased;
}
/*---------------------------------------------
 header
---------------------------------------------*/
#headerWrap {
  font-family:"Noto Sans JP", "Roboto", sans-serif;
  font-size: 14px;
  position: relative;
  z-index: 500;
  background: #fff;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  border-bottom: 2px solid #005BAC;
}
#headerWrap a {
  text-decoration: none;
  color: #3f6974;
}
#headerWrap a:hover,
#headerWrap a:active {
  opacity: .5;
  filter: alpha(opacity=50);
}
#headerWrap .inner {
  overflow: hidden;
  max-width: 970px;
  margin: 0 auto;
  padding: 0 10px;
}
#headerWrap .inner .logoImg {
  float: left;
  padding: 27px 0 13px;
}
#headerWrap .inner .logoImg a:hover {
  opacity: 1;
  filter: alpha(opacity=100);
}
#headerWrap .inner .headNav {
  float: right;
  width: 370px;
  /*	20160329	*/
  width: 530px;
  /*	/20160329	*/
  width: 525px;
  /*	20161215	*/
  padding: 27px 0 13px;
}
#headerWrap .inner .headNav .searchHeadNav {
  float: left;
  width: 140px;
}
#headerWrap .inner .headNav .searchHeadNav input[type="text"] {
  display: block;
     box-sizing: border-box;
  width: 100%;
  height: 32px;
  font-size: 13px;
  padding: 8px 8px 8px 30px;
  border: none;
  border-bottom: 1px solid #404040;
  border-radius: 0;
  background: url(/common_fx/images/icon_search.png) no-repeat left center;
  -o-box-sizing: border-box;
}
body.search_page .searchBoxWrap label[for="select05"] {
   display: none !important;
}

body.search_page .searchBoxWrap .inner .searchFilterBlock .searchFilterList:nth-of-type(2) {
   display: none !important;
}

body.search_page .searchBoxWrap #select05_li,
body.search_page .searchBoxWrap #select06_li {
   display: none !important;
}
#headerWrap .inner .headNav .userHeadNav {
  float: right;
  width: 170px;
  /*	20160329	*/
  width: 361px;
  /*	/20160329	*/
  width: 374px;
  /*	20161007	*/
  letter-spacing: -.4em;
  text-align: right;
}
#headerWrap .inner .headNav .userHeadNav span {
  display: inline-block;
  margin-left: 10px;
}
#headerWrap .inner .headNav .userHeadNav span:first-child {
  margin-left: 0;
}
#headerWrap .inner .headNav .userHeadNav a {
  font-size: 14px;
  font-weight: bold;
  line-height: 24px;
  display: inline-block;
  width: 100px;
  height: 24px;
  padding: 5px 0;
  text-align: center;
  letter-spacing: 0;
  color: #fff;
}
  /*	20160329	*/
#headerWrap .inner .headNav .userHeadNav a.app {
	border-color: #404040!important;
    border-width: 4px!important;
    color: #404040;
	width:77px;
	line-height:16px;
	height:16px;
	font-size:13px;
}
  /*	20161007	*/
#headerWrap .inner .headNav .userHeadNav a.inquiry {
	border-color: #404040!important;
    border-width: 4px!important;
    color: #404040;
	width:90px;
	line-height:16px;
	height:16px;
	font-size:13px;
}
  /*	/20160329	*/

#headerWrap.campaignHeader {
  background: #404040;
}
#headerWrap.campaignHeader .inner .logoImg {
  padding: 27px 0 15px;
}
#headerWrap.campaignHeader .inner .headNav .camHeadNav {
  text-align: right;
}
#headerWrap.campaignHeader .inner .headNav .camHeadNav a {
  font-weight: bold;
  color: #fff;
}
#headerWrap.campaignHeader .inner .headNav .camHeadNav span {
  margin-left: 30px;
}

/*---------------------------------------------
 gNav
---------------------------------------------*/
#gNavPC {
  font-family:"Noto Sans JP", "Roboto", sans-serif;
  position: relative;
  z-index: 150;
  width: 100%;
  background: #fff;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
}
#gNavPC .gNavSteady {
  border-bottom: 1px solid #bfbfbf;
}
#gNavPC .gNav {
  max-width: 970px;
  margin: 0 auto;
  pointer-events: none;
}
#gNavPC .gNav a:hover {
  text-decoration: none;
  opacity: 1;
  filter: alpha(opacity=100);
}
#gNavPC .gNav ul.parentList {
  display: table;
  margin-left: -1px;
  pointer-events: auto;
  width: 100%;
  position: relative;
}
#gNavPC .gNav ul.parentList:after {
  content: "";
  display: block;
  width: 1px;
  height: 100%;
  background: url(/common_fx/images/bg_menu_solid.gif) no-repeat right center;
  position: absolute;
  top: 0;
  right: -2px;
}
#gNavPC .gNav ul.parentList > li {
  position: relative;
  display: table-cell;
  height: 48px;
  vertical-align: middle;
  width: calc(100%/7);
}
#gNavPC .gNav ul.parentList > li .btn {
  font-family:"Noto Sans JP", "Roboto", sans-serif;
  font-size: 13px;
  font-weight: bold;
  line-height: 1.2;
  position: relative;
  z-index: 125;
  display: table-cell;
  width: 140px;
  height: 48px;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  color: #404040;
  background: #fff url(/common_fx/images/bg_menu_solid.gif) no-repeat left center;
  background-size: 1px auto;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  transition: .3s all;
}
#gNavPC .gNav ul.parentList > li .btn:hover,
#gNavPC .gNav ul.parentList > li .btn.on {
  color: #005BAC;
}
#gNavPC .gNav ul.parentList > li .btn.g_opt {
  font-size: 12px;
}
#gNavPC .gNav ul.parentList > li .btn .disIb {
  display: inline-block;
}
#gNavPC .gNav ul.parentList > li.nav_last ul.childList {
  right: 0;
  left: auto;
}
#gNavPC .gNav ul.parentList > li.cur .btn {
  color: #005BAC;
}
#gNavPC .gNav ul.parentList > li .btn:before{
  content: "";
  position: absolute;
  z-index: 100;
  top: auto;
  bottom: 1px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: block;
  width: 0%;
  height: 2px;
  background: #005BAC;
  transition: .3s all;
}
#gNavPC .gNav ul.parentList > li.cur .btn:before,
#gNavPC .gNav ul.parentList > li .btn:hover:before,
#gNavPC .gNav ul.parentList > li .btn.on:before {
  width: 70%;
}
#gNavPC .gNav ul.parentList > li.cur ul.childList {
  opacity: 1 !important;
  visibility: visible;
}
#gNavPC .gNav ul.parentList > li ul.childList {
  position: absolute;
  z-index: 120;
  top: 48px;
  left: 0;
  width: max-content;
  min-width: calc(100% - 60px);
  padding: 24px 30px 12px;
  border-top: 1px solid #bfbfbf;
  background: #fff;
  opacity: 0 !important;
  visibility: hidden;
  box-shadow: 0px 5px 12px rgb(0 0 0 / 30%);
  transition: .3s all;
}
#gNavPC .gNav ul.parentList > li ul.childList li {
  margin-bottom: 12px;
}
#gNavPC .gNav ul.parentList > li ul.childList li a {
  font-size: 13px;
  display: block;
  text-decoration: none;
  color: #404040;
  transition: .3s all;
  font-weight: bold;
}
#gNavPC .gNav ul.parentList > li ul.childList li a.blank {
  padding-right: 10px;
}
#gNavPC .gNav ul.parentList > li ul.childList li a.blank span:after {
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  background: url(/common_fx/images/icon_target_blank.png) no-repeat center center;
  background-size: 10px 10px;
  position: relative;
  top:0;
  right: -7px;
}
#gNavPC .gNav ul.parentList > li ul.childList li a:hover {
  color: #005BAC;
}
#gNavPC .gNav ul.parentList > li ul.childList li a:hover.blank span:after {
  background: url(/common_fx/images/icon_target_blank_rd.png) no-repeat center center;
  background-size: cover;
  color: #005BAC;
}

/*---------------------------------------------
 main
---------------------------------------------*/
#mainVisualPC {
  position: static;
  z-index: 100;
  overflow: hidden;
  height: 480px;
  background: no-repeat url(/images/mainvisual/bg_mainvisual.jpg) center center;
}
#mainVisualPC.navOpen {
  position: relative;
}
#mainVisualPC ul li {
  position: relative;
  top: 0;
  left: 0;
  float: left;
}
#mainVisualPC ul li .repeatL {
  position: absolute;
  height: 480px;
  background: url(/images/mainvisual/bg_mainvisual_solid.png) repeat-x;
}
#mainVisualPC ul li .repeatR {
  position: absolute;
  height: 480px;
  background: url(/images/mainvisual/bg_mainvisual_solid.png) repeat-x;
}
#mainVisualPC ul li.sl-other {
  z-index: 10;
  cursor: pointer;
}
#mainVisualPC ul li.sl-cur {
  z-index: 1000;
  cursor: default;
}
#mainVisualPC ul li .imgWrap {
  position: relative;
  width: 970px;
}
#mainVisualPC .liquidBg .liquidL {
  position: absolute;
  right: 50%;
  left: 70px;
  height: 480px;
  margin-right: 485px;
  background: #f00;
  background: url(/images/mainvisual/bg_mainvisual_solid.png) repeat-x;
}
#mainVisualPC .liquidBg .liquidR {
  position: absolute;
  right: 70px;
  left: 50%;
  height: 480px;
  margin-left: 485px;
  background: #ff0;
  background: url(/images/mainvisual/bg_mainvisual_solid.png) repeat-x;
}

#mainVisualPC ul li .imgWrap.pcSlideCurrent {
  height: 480px;
  padding-top: 0;
  text-align: center;
  background: url(/images/mainvisual/bg_mainvisual_first.png) no-repeat;
}
#mainVisualPC ul li .imgWrap.pcSlideCurrent .slideTitleMain {
  padding-top: 140px;
}
#mainVisualPC ul li .imgWrap.pcSlideCurrent .slideTitle {
  font-size: 14px;
  font-weight: bold;
  margin-top: 20px;
}
#mainVisualPC ul li .imgWrap.pcSlideCurrent .slideTitleSub {
  font-weight: bold;
  margin-top: 30px;
}
#mainVisualPC ul li .imgWrap.pcSlideCurrent .slideLink {
  font-size: 28px;
  font-weight: bold;
}
#mainVisualPC ul li .imgWrap.pcSlideCurrent .slideLink a {
  text-decoration: underline;
}
#mainVisualPC ul li .imgWrap {
  width: 878px;
  min-width: 760px;
  height: 480px;
}
#mainVisualPC ul li .imgWrap img {
  height: auto;
}
#mainVisualPC ul li .imgWrap a img {
  min-width: 760px;
}
#mainVisualPC ul li .imgWrap a:hover {
  opacity: 1;
  filter: alpha(opacity=100);
}
#mainVisualPC .pcTab li .imgWrap {
  padding-top: 33px;
}
#mainVisualPC .pcTab li .imgWrap img {
  max-width: 100%;
}
#mainVisualPC .pcTab .repeatL,
#mainVisualPC .pcTab .repeatR {
  background-position: 0px 36px;
  background-size: auto 408px;
}
#mainVisualPC .pcTab .imgWrap.pcSlideCurrent {
  background-position: 0 33px;
  background-size: 760px auto;
}
.pcSlideClick {
  position: absolute;
  z-index: 2000;
  width: 50px;
  height: 450px;
  cursor: pointer;
  background: url(/images/mainvisual/transparent.gif) repeat;
}
.pcSlideClick.pcSlideNext {
  right: 0;
}
.slideIndicator {
  position: absolute;
  z-index: 115;
  top: 480px;
  left: 50%;
}
.slideIndicator.navOpen {
  z-index: 105;
}
.slideIndicatorIcon {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 4px;
  cursor: pointer;
  vertical-align: middle;
  border: 3px solid transparent;
  border-radius: 7px;
  background-color: #404040;
  background-clip: padding-box;
}
.slideIndicatorIcon.current {
  border: 3px solid #005BAC;
  border-color: #005BAC;
  background-color: transparent;
}
.slideIndicatorNum {
  display: none;
}

/*---------------------------------------------
 contents
---------------------------------------------*/
#contents {
  padding: 0 0 0;
  background: #fff;
}
.top_index #contents {
  padding: 10px 0 0;
}
.page_popup #contents {
  padding: 0 0 0;
}
#contents .container .containerInner {
  max-width: 890px;
  margin: 0 auto;
  padding-right: 30px;
  padding-left: 30px;
}

/*---------------------------------------------
 footer
---------------------------------------------*/
#footer .footNavWrap {
  margin-top: 0;
}
.footNavWrap {
  font-family:"Noto Sans JP", "Roboto", sans-serif;
  margin-top: 100px;
  background: #005BAC;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
}
.footNavWrap a {
  text-decoration: none;
  color: #3f6974;
}
.footNavWrap a:hover,
.footNavWrap a:active {
  opacity: .5;
  filter: alpha(opacity=50);
}
.footNavWrap .footNav {
  position: relative;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 30px;
}
.footNavWrap .footNav:after {
  font-size: 0;
  display: block;
  visibility: hidden;
  clear: both;
  height: 0;
  content: " ";
}
.footNavWrap .footNav .pageTop {
  position: absolute;
  top: -50px;
  right: 25px;
}
.footNavWrap .footNav .pageTop a {
  font-size: 14px;
  font-weight: bold;
  position: relative;
  display: inline-block;
  padding: 10px;
  color: #005BAC;
}
.pageTop a {
    padding: 10px 30px;
}
.pageTop a {
    font-size: 14px;
    font-weight: bold;
    position: relative;
    display: inline-block;
    padding: 10px;
    color: #005BAC;
}
.footNavWrap .footNav .pageTop a:hover {
  text-decoration: none;
}
.page_popup .footNavWrap .footNav .pageTop a {
  padding: 10px 30px;
}
.footNavWrap .footNav .topicPath {
  float: left;
}
.footNavWrap .footNav .topicPath ul {
  overflow: hidden;
}
.footNavWrap .footNav .topicPath ul li {
  float: left;
}
.footNavWrap .footNav .topicPath ul li a {
  font-size: 12px;
  font-weight: bold;
  position: relative;
  display: block;
  min-height: 21px;
  padding: 12px;
  padding-right: 20px;
  padding-left: 5px;
  background: url(/common_fx/images/bg_pathtopic_arrow.png) right center no-repeat;
}
.footNavWrap .footNav .topicPath ul li a:hover {
  text-decoration: none;
}
.footNavWrap .footNav .topicPath ul li a img {
  margin-right: 5px;
  vertical-align: top;
}
.footNavWrap .footNav a {
  color: #fff;
}
#footerWrap {
  font-family:"Noto Sans JP", "Roboto", sans-serif;
  font-size: 14px;
  line-height: 1.75;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
}
#footerWrap a {
  text-decoration: none;
  color: #3f6974;
}
#footerWrap a:hover,
#footerWrap a:active {
  opacity: .5;
  filter: alpha(opacity=50);
}
#footerWrap .footInner {
  max-width: 970px;
  margin: 0 auto;
}
#footerWrap .footInfoWrap {
  font-size: 12px;
  background: #e6e6e6;
}
#footerWrap .footInfoWrap .footInner {
  padding-right: 30px;
  padding-left: 30px;
}
.page_popup #footerWrap .footInfoWrap .footInner {
  padding: 30px;
}
#footerWrap .footInfoWrap .footInner .footBtnWrap {
  padding: 42px 0 0;
}
#footerWrap .footInfoWrap .footInner .footBtnWrap ul {
  overflow: hidden;
}
#footerWrap .footInfoWrap .footInner .footBtnWrap ul li {
  float: left;
  width: 27.83%;
  margin-right: 20px;
}
#footerWrap .footInfoWrap .footInner .footBtnWrap ul li:last-child {
  float: right;
  width: 36.7%;
  margin-right: 0;
}
#footerWrap .footInfoWrap .footInner .footBtnWrap ul li a {
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  display: block;
  height: 20px;
  padding: 23px 20px;
  text-align: center;
  color: #fff;
}
#footerWrap .footInfoWrap .footInner .footBtnWrap ul li a .ttl {
  font-size: 24px;
  margin-left: 10px;
  letter-spacing: .15em;
}
#footerWrap .footInfoWrap .footInner .footBtnWrap ul li a img {
  margin-top: -2px;
  margin-right: 20px;
  vertical-align: middle;
}
#footerWrap .footInfoWrap .footInner .footAdInfo {
  padding-top: 42px;
  padding-bottom: 30px;
}
.page_popup #footerWrap .footInfoWrap .footInner .footAdInfo {
  padding: 0;
}
#footerWrap .footInfoWrap .footInner .footAdInfo .ttl {
  font-weight: bold;
  margin-bottom: 5px;
}
.page_popup #footerWrap .footInfoWrap .footInner .footAdInfo .txt {
  font-size: 10px;
}
#footerWrap .footInfoWrap .footInner .footAdInfo dt a {
  font-size: 12px;
  display: inline-block;
  white-space: wrap;
  word-break: break-all;
  color: #3f3f3f;
}
#footerWrap .footInfoWrap .footInner .footAdInfo dt a.i_target {
  padding-left: 17px;
  background: url(/common_fx/images/icon_popup.png) left .3em no-repeat;
  background-position: 0% 50%;
  background-size: 10px 10px;
}
#footerWrap .footLinkWrap {
  background: #f2f2f2;
}
#footerWrap .footLinkWrap .footInner {
  display: table;
  overflow: hidden;
   box-sizing: border-box;
  width: 100%;
  padding: 20px 30px;
  -o-box-sizing: border-box;
}
#footerWrap .footLinkWrap .footInner li {
  line-height: 1.375;
  min-height: 20px;
  margin-bottom: 2px;
}
#footerWrap .footLinkWrap .footInner li a {
  font-size: 12px;
  display: inline-block;
  white-space: wrap;
  word-break: break-all;
  color: #3f3f3f;
}
#footerWrap .footLinkWrap .footInner li a[target="_blank"] {
  padding-left: 17px;
  background: url(/common_fx/images/icon_target_blank.png) left .3em no-repeat;
  background-size: 10px 10px;
}
#footerWrap .footLinkWrap .footInner li a[target="_blank"].popupLink {
  padding-left: 17px;
  background: url(/common_fx/images/icon_popup.png) left .3em no-repeat;
  background-size: 10px 10px;
}
#footerWrap .footLinkWrap .footInner .col1 {
  font-weight: bold;
  position: relative;
  display: table-cell;
  width: 29.7%;
  padding-right: 10px;
}
#footerWrap .footLinkWrap .footInner .col1 ul:last-child {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
#footerWrap .footLinkWrap .footInner .col2 {
  display: table-cell;
  width: 33.5%;
  padding-right: 10px;
}
#footerWrap .footLinkWrap .footInner .col3 {
  position: relative;
  display: table-cell;
  width: 37.62%;
}
#footerWrap .footLinkWrap .footInner .col3 .footSns {
  bottom: 0;
  left: 0;
  width: 100%;
}
#footerWrap .footLinkWrap .footInner .col3 .footSns p {
  display: inline-block;
  margin-right: 30px;
}
#footerWrap .footLinkWrap .footInner .col3 .footSns p img {
  vertical-align: middle;
}
#footerWrap .footDescription {
  font-size: 12px;
  padding: 20px 0;
  text-align: center;
}
.page_popup #footerWrap .footDescription {
  padding: 30px;
}
#footerWrap .footDescription .img {
  margin-top: 25px;
  margin-bottom: 10px;
}
#footerWrap .copyright {
  text-align: center;
}

/*---------------------------------------------
page_popup
---------------------------------------------*/
.page_popup #headerWrap {
  padding: 20px;
  border-bottom: 2px solid #005BAC;
}
.page_popup #headerWrap .inner .logoImg {
  float: left;
  padding: 7px 0;
}
.page_popup #headerWrap .inner .closePop a {
  float: right;
  padding: 12px;
  background: #005BAC;
}
.page_popup #headerWrap .inner .closePop a img {
  width: 22px;
  height: auto;
}
.page_popup .section .containerInner {
  padding: 0;
}

/*===========================================
 SP
===========================================*/
@media screen and (max-width: 767px) {
  html {
    overflow: auto;
    height: 100%;
  }
  body {
    line-height: 1.5;
  }
  body:before {
    display: none;
    content: "smartphone";
  }
  body a {
    opacity: 1;
    filter: alpha(opacity=100);
  }

  #gNavPC,
  #mainVisualPC,
  .pcOnly,
  img.pcOnly {
    display: none !important;
  }

  #gNavSP,
  #mainVisualSP,
  .spOnly {
    display: block !important;
  }

  img.spOnly {
    display: inline-block !important;
  }

  .toggleIn {
    display: none !important;
  }

  .toggleOut {
    display: block !important;
  }

  body.onNav {
    overflow: hidden;
    height: 100%;
  }
  body.onNav .toggleIn {
    display: block !important;
  }
  body.onNav .toggleOut {
    display: none !important;
  }

  .slideIndicator {
    display: none !important;
  }

  /*---------------------------------------------
   header
  ---------------------------------------------*/
  #headerWrap a {
    opacity: 1;
    filter: alpha(opacity=100);
  }
  #headerWrap .inner {
    position: relative;
    padding: 0;
  }
  #headerWrap .inner .logoImg {
    float: none;
    height: 28px;
    padding: 8px 8px 8px 50px;
    text-align: center;
  }
  #headerWrap .inner .logoImg img {
    width: auto;
    height: 100%;
  }
  #headerWrap .inner .spMenuToggle {
    position: absolute;
    z-index: 900;
    top: 0;
    right: 6px;
    width: 44px;
    height: 44px;
    background: url(/common_fx/images/sp_icon_menu_btn_bl.png) center no-repeat #fff;
    background-size: 24px;
  }
  #headerWrap .inner .spMenuToggle.cur {
    background: url(/common_fx/images/sp_icon_menu_close_bl.png) center no-repeat #fff;
    background-size: 24px;
  }
  #headerWrap .inner .headNav {
    position: absolute;
    position: fixed;
    z-index: 100;
    top: 0;
    right: -120%;
    display: block;
    float: none;
    overflow: auto;
    width: 100%;
    padding: 0;
    pointer-events: auto;
    background: #fff;
    transition: all .3s;
  }
  body.onNav #headerWrap .inner .headNav {
    right: 0;
  }
  #headerWrap .inner .headNav .searchHeadNav {
    float: none;
    width: auto;
    padding: 10px 62px 0 15px;
  }
  #headerWrap .inner .headNav .userHeadNav {
    float: none;
    width: auto;
    padding: 44px 16px 0;
  }
  #headerWrap .inner .headNav .userHeadNav .spLoginBtn {
    overflow: hidden;
  }
  #headerWrap .inner .headNav .userHeadNav .spLoginBtn span {
    display: block;
  }
  #headerWrap .inner .headNav .userHeadNav span {
       box-sizing: border-box;
    width: 50%;
    margin: 0;
    vertical-align: middle;
    -o-box-sizing: border-box;
  }
  #headerWrap .inner .headNav .userHeadNav span.kouzaBtn {
    display: block;
    width: 100%;
    padding-right: 0 !important;
    padding-bottom: 16px;
  }
  #headerWrap .inner .headNav .userHeadNav span.kouzaBtn a {
    font-size: 18px;
  }
  /*	20160329	*/
  #headerWrap .inner .headNav .userHeadNav span.appBtn {
    float: left;
    padding-right: 4px;
    padding-left: 0;
  }
  #headerWrap .inner .headNav .userHeadNav span.inquiryBtn {
    float: right;
    padding-right: 0;
    padding-left: 4px;
  }
  #headerWrap .inner .headNav .userHeadNav span.gaikaBtn {
	  clear:both;
	  width:100%;
    padding-right: 0;
    padding-left: 0;
	margin-bottom:8px;
  }
  #headerWrap .inner .headNav .userHeadNav span.appBtn a.bgColor07{
	  border-color:#404040;
	  border-width:4px!important;
	  color:#404040 ;
	  line-height:16px;
	  height:16px;
  }
  #headerWrap .inner .headNav .userHeadNav span.optBtn {
	  clear:both;
	  width:100%;
    padding-right: 0;
    padding-left: 0;
	margin-bottom: 8px;
  }
  #headerWrap .inner .headNav .userHeadNav span.fundBtn {
	  clear:both;
	  width:100%;
    padding-right: 0;
    padding-left: 0;
	margin-bottom: 32px;
  }
  #headerWrap .inner .headNav .userHeadNav span.inquiryBtn a.bgColor07{
	  border-color:#404040;
	  border-width:4px!important;
	  color:#404040 ;
	  line-height:16px;
	  height:16px;
  }
  #headerWrap .inner .headNav .userHeadNav p{
	text-align:center;
    letter-spacing: 0;
	margin-bottom:8px;
	font-size: 14px;
    font-weight: bold;
    line-height: 24px;
  }
  /*	/20160329	*/
  #headerWrap .inner .headNav .userHeadNav a {
    display: block;
    width: auto;
    height: 24px;
    padding: 11px 0;
  }
  #gNavSP .gNav {
    padding: 0 16px 20px;
  }
  #gNavSP .gNav .parentList {
    border-bottom: 1px solid #bfbfbf;
  }
  #headerWrap .inner .headNav #gNavSP .gNav .parentList > li .btn,
  #headerWrap .inner .headNav #gNavSP .gNav .parentList > li a {
    font-size: 14px;
    display: block;
    padding: 14px 16px;
    text-align: center;
    opacity: 1;
    color: #404040;
    background: #fff;
    filter: alpha(opacity=100);
    text-align: left;
  }
  #headerWrap .inner .headNav #gNavSP .gNav .parentList > li .childList > li a {
    padding: 12px 16px 12px 30px;
    font-weight: bold;
  }
  #headerWrap .inner .headNav #gNavSP .gNav .parentList > li a.blank span:after {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background: url(/common_fx/images/icon_target_blank.png) no-repeat center center;
    background-size: 10px 10px;
    position: relative;
    top: 0;
    right: -7px;
  }
  #headerWrap .inner .headNav #gNavSP .gNav .parentList > li .btn {
    font-size: 14px;
    font-weight: bold;
    border-top: 1px solid #bfbfbf;
    background: #fff;
    transition: .1s all;
  }
  #headerWrap .inner .headNav #gNavSP .gNav .parentList > li .btn.accToggle {
    background: url(/common_fx/images/sp_icon_menu_b_bl.png) #fff right center no-repeat;
    background-size: 27px 8px;
  }
  #headerWrap .inner .headNav #gNavSP .gNav .parentList > li .childList {
    display: none;
  }
  #headerWrap .inner .headNav #gNavSP .gNav .parentList > li.cur .btn {
    background: url(/common_fx/images/sp_icon_menu_t_rd.png) #fff right center no-repeat;
    background-size: 27px 8px;
    color: #005BAC;
  }
  #headerWrap .inner .headNav #gNavSP .gNav .parentList > li.cur .childList {
    display: block;
    padding: 0px 0 12px;
  }

  #headerWrap.campaignHeader {
    background: #404040;
  }
  #headerWrap.campaignHeader .inner .logoImg {
    height: 22px;
    padding-top: 11px;
    padding-bottom: 11px;
    padding-left: 44px;
  }
  #headerWrap.campaignHeader .inner .headNav {
    top: 44px;
    background: #404040;
  }
  #headerWrap.campaignHeader .inner .headNav .camHeadNav {
    float: none;
    text-align: center;
  }
  #headerWrap.campaignHeader .inner .headNav .camHeadNav a {
    font-size: 14px;
    display: block;
    padding: 12px;
    border-top: 2px solid #000;
  }
  #headerWrap.campaignHeader .inner .headNav .camHeadNav a:hover {
    opacity: 1;
    filter: alpha(opacity=100);
  }
  #headerWrap.campaignHeader .inner .headNav .camHeadNav span {
    display: block;
    width: 100%;
    margin: 0;
  }
  #headerWrap.campaignHeader .inner .spMenuToggle {
    border-right: 1px solid #e5e5e5;
    background-color: #404040;
  }
  #headerWrap.campaignHeader .inner .spMenuToggle.cur {
    border-right: none;
  }

/*---------------------------------------------
　ヘッダー固定配置
---------------------------------------------*/
  #headerWrap {
    position:fixed;
    width:100%;
    top:0;
    border-bottom: 1px solid #c8c8c8;
  }
  #headerWrap .inner .logoImg {
    padding: 8px 15px;
    text-align: left;
  }
  .spKouzaBtn {
    position:fixed;
    top: 0;
    right: 52px;
    margin-top: 5px;
    z-index:999;
  }
  .spKouzaBtn a {
    font-size: 14px;
    font-weight: bold;
    line-height: 1;
    display: inline-block;
    padding: 10px 0;
    text-align: center;
    letter-spacing: 0;
    color: #fff !important;
    width: 105px;
    height: 34px;
    background: #DC1C26;
    box-sizing:border-box;
  }
  .onNav .spKouzaBtn {
    display:none !important;
  }
  body {
    padding-top:44px;
  }

  /*---------------------------------------------
    footer
  ---------------------------------------------*/
  .footNavWrap {
    margin-top: 40px;
  }
  .footNavWrap .footNav .pageTop {
    position: static;
    float: none;
  }
  .footNavWrap .footNav .pageTop a {
    display: block;
    padding: 12px;
    text-align: center;
    color: #fff;
    border: none;
    background: #005BAC;
  }
  .footNavWrap .footNav .topicPath {
    display: none;
    float: none;
  }
  #footerWrap a {
    opacity: 1;
    filter: alpha(opacity=100);
  }
  .page_popup #footerWrap .footInfoWrap {
    padding: 0;
  }
  #footerWrap .footInfoWrap .footInner {
    padding: 20px 18px;
  }
  .page_popup #footerWrap .footInfoWrap .footInner {
    padding: 10px;
  }
  #footerWrap .footInfoWrap .footInner .footBtnWrap {
    padding: 0;
  }
  #footerWrap .footInfoWrap .footInner .footBtnWrap ul li {
    float: none;
    width: auto;
    margin-right: 0;
    margin-bottom: 10px;
    text-align: center;
  }
  #footerWrap .footInfoWrap .footInner .footBtnWrap ul li:last-child {
    float: none;
    width: auto;
    margin-bottom: 0;
  }
  #footerWrap .footInfoWrap .footInner .footBtnWrap ul li a {
    padding: 15px;
  }
  #footerWrap .footInfoWrap .footInner .footBtnWrap ul li a img {
    margin-right: 20px;
  }
  #footerWrap .footInfoWrap .footInner .footBtnWrap ul li a .ttl {
    margin-left: 20px;
  }
  #footerWrap .footInfoWrap .footInner .footAdInfo {
    margin-top: 20px;
    padding: 0;
  }
  #footerWrap .footInfoWrap .footInner .footAdInfo:first-child {
    margin: 0;
    margin-top: 0;
  }
  #footerWrap .footInfoWrap .footInner .footAdInfo .accWrap .ttl {
    font-size: 12px;
    margin-bottom: 0;
    padding: 0;
    background: url(/common_fx/images/sp_icon_foot_arrow_b.png) right center no-repeat;
    background-size: 21px 8px;
  }
  #footerWrap .footInfoWrap .footInner .footAdInfo .accWrap .txt {
    display: none;
    padding: 10px 0;
  }
  #footerWrap .footInfoWrap .footInner .footAdInfo .accWrap.cur .ttl {
    background: url(/common_fx/images/sp_icon_foot_arrow_t.png) right center no-repeat;
    background-size: 21px 8px;
  }
  #footerWrap .footInfoWrap .footInner .footAdInfo .accWrap.cur .txt {
    display: block;
  }
  #footerWrap .footLinkWrap .footInner {
    padding: 10px 0 0;
    background: #f2f2f2;
  }
  #footerWrap .footLinkWrap .footInner ul {
    margin-bottom: 10px;
    padding: 0 15px;
  }
  #footerWrap .footLinkWrap .footInner .col1 {
    display: block;
    float: none;
    width: auto;
  }
  #footerWrap .footLinkWrap .footInner .col1 ul:last-child {
    position: static;
  }
  #footerWrap .footLinkWrap .footInner .col2 {
    display: block;
    float: none;
    width: auto;
  }
  #footerWrap .footLinkWrap .footInner .col3 {
    display: block;
    float: none;
    width: auto;
  }
  #footerWrap .footLinkWrap .footInner .col3 .footSns {
    position: static;
    margin-top: 10px;
    padding: 15px 0;
    text-align: center;
    border-top: 1px solid #ccc;
  }
  #footerWrap .footLinkWrap .footInner .col3 .footSns p {
    margin: 0 10px;
  }
  #footerWrap .footLinkWrap .footInner .col3 .footSns p img {
    width: auto;
    height: 30px;
  }
  #footerWrap .footDescription .txt {
    font-size: 10px;
    display: block;
    margin-bottom: 20px;
  }
  .page_popup #footerWrap .footDescription .txt {
    font-size: 10px;
  }
  #footerWrap .footDescription .img {
    display: none;
  }

  /*---------------------------------------------
   main
  ---------------------------------------------*/
  #mainVisualSP .flex-viewport {
    overflow: visible !important;
  }
  #mainVisualSP .slides {
    overflow: hidden;
  }
  #mainVisualSP .mainVisual {
    min-height: 260px;
    padding-top: 30px;
    text-align: center;
    background: url(/images/mainvisual/sp_bg_mainvisual.jpg) no-repeat center bottom;
  }
  #mainVisualSP .mainVisual .slideTitleMain {
    height: 110px;
    background: url(/images/mainvisual/sp_bg_mainvisual_first.png) no-repeat center top;
  }
  #mainVisualSP .mainVisual .slideTitleMain img {
    width: 203px;
    height: auto;
    padding-top: 12px;
  }
  #mainVisualSP .mainVisual .slideTitle {
    font-weight: bold;
    margin-top: 24px;
  }
  #mainVisualSP .mainVisual .slideTitleSub {
    font-size: 11px;
    font-weight: bold;
    margin-top: 40px;
  }
  #mainVisualSP .mainVisual .slideLink {
    font-size: 21px;
    font-weight: bold;
    text-decoration: underline;
  }
  #mainVisualSP .mainBnrWrap {
    overflow: hidden;
  }
  .top_index #mainVisualSP .mainBnrWrap {
    background: #e6e6e6;
  }
  #mainVisualSP .mainBnr {
    width: 50%;
    margin: 0 auto;
    padding: 10px 0;
  }
  #mainVisualSP .mainBnr .slides li img {
    width: 100%;
    height: auto;
  }

  #contents {
    padding: 0 0 0;
  }
  .top_index #contents {
    padding: 0 0;
  }

  .page_popup #headerWrap {
    padding: 0;
    border-bottom: none;
  }
  .page_popup #headerWrap .inner {
    position: relative;
  }
  .page_popup #headerWrap .inner .logoImg {
    float: none;
    padding: 8px 8px 8px 55px;
  }
  .page_popup #headerWrap .closePop {
    position: absolute;
    top: 0;
    left: 0;
  }
  .page_popup #contents {
    padding: 30px 0 0;
  }
  .page_popup #contents .hd_01 {
    font-size: 20px;
    text-align: center;
  }
  .page_popup #contents .hd_02 {
    font-size: 16px;
    margin-top: 40px;
  }
  .page_popup #contents .hd_wrap .hd_02 {
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 20px;
  }
  .page_popup #contents a {
    opacity: 1;
    filter: alpha(opacity=100);
  }
  .page_popup #contents .section .containerInner {
    padding: 0 16px;
  }
  .ZoomLoope a{
	  display:block;
  }
  .ZoomLoopeIn{
	  background-image: url(/common_fx/images/icon_zoom.png);
	  background-position:center;
	  background-repeat:no-repeat;
	  background-size:60px;
	  width:100%;
	  height:100%;
	  display:block;
	  position:absolute;
	  left:0px;
	  top:0px;
  }
}

/* 20210928GMOグループヘッダー対応 */
#gaikaexbody,
#corporatebody,
#optbody,
#fundbody{
  overflow:hidden;
}

/*===========================================
 IE
===========================================*/
@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {

#gNavPC .gNav ul.parentList > li:nth-child(7) ul.childList{
  min-width: calc(100% - 62px);
}

}


/*===========================================
 2022.09 newMv
===========================================*/
.top_index .topInner {
  overflow: hidden;
  max-width: 970px;
  margin: 0 auto;
  padding: 0 10px;
}

/* mvArea */
.top_index .mvArea{
  background: -moz-linear-gradient(-60deg, #f9f9fa 27%, #dee9ef 70%, #dee9ef 70%);
  background: -webkit-linear-gradient(-60deg, #f9f9fa 27%, #dee9ef 70%, #dee9ef 70%);
  background: linear-gradient(150deg, #f9f9fa 27%, #dee9ef 70%, #dee9ef 70%);
  overflow: hidden;
}
.top_index .mvArea .topInner {
  position: relative;
  overflow: visible;
}
.top_index .mvContents{
  max-width: 500px;
  width: 52%;
  padding: 90px 0 64px;
  box-sizing: border-box;
}
.top_index .mvImg {
  margin-bottom: 90px;
}
.top_index .mvHuman {
  position: absolute;
  top: 20px;
  right: 50px;
  max-width: 457px;
  width: 47%;
}
.top_index .mvSwap {
  position: absolute;
  top: 35px;
  right: -10px;
  max-width: 130px;
  width: 14%;
}
.top_index .mvLinkArea {
  text-align: center;
}
.top_index .mvBtn .btnType01 {
  font-size: 32px;
  padding: 20px;
  letter-spacing: 0.1em;
  max-width: 460px;
  width: 92%;
  box-sizing: border-box;
  margin: 0 auto;
}
.top_index .mvBtn .btnCopy {
  display: block;
  line-height: 1em;
  font-size: 18px;
}
.top_index .mvTxtLink {
  text-align: center;
  font-size: 18px;
  letter-spacing: 0.05em;
  font-weight: bold;
  text-decoration: underline;
  line-height: 1;
  position: relative;
  margin-top: 20px;
  display: inline-block;
}
.top_index .mvTxtLink::after{
  content: "";
  display: inline-block;
  width: 10px;
  height: 16px;
  background: url(../images/icon_txtLink_arrow.svg) no-repeat center right;
  background-size: contain;
  position: relative;
  padding-left: 8px;
  top: 1px;
}
.top_index .mvTxtLink:hover::after,
.top_index .mvTxtLink:hover a{
  opacity: .5;
}

/* bnrArea */
.top_index .bnrArera {
  background: #f2f2f2;
}
.top_index .bnrArera .topInner{
  padding: 20px 0 30px;
  max-width: 990px;
  overflow: visible;
}
.slick-dotted.slick-slider {
  margin-bottom: 0;
}
.top_index .bnrArera .slick-initialized .slick-slide {
  padding: 0 10px;
  box-sizing: border-box;
}
.top_index .bnrArera .slick-dots {
  bottom: -22px;
}
.top_index .bnrArera .slick-prev,
.top_index .bnrArera .slick-next {
  width: 25px;
  height: 25px;
  background: #404040;
  border-radius: 50%;
  z-index: 1;
}
.top_index .bnrArera .slick-prev:hover,
.top_index .bnrArera .slick-next:hover {
  opacity: .5;
}
.top_index .bnrArera .slick-prev:before,
.top_index .bnrArera .slick-next:before {
  opacity: 1;
  content: "";
  display: block;
  width: 7px;
  height: 7px;
  border-top: 3px solid #fff;
  border-left: 3px solid #fff;
  position: relative;
}
.top_index .bnrArera .slick-prev:before{
  transform: rotate(-45deg);
  left: 9px;
}
.top_index .bnrArera .slick-next:before{
  transform: rotate(135deg);
  right: -7px;
}
.top_index .bnrArera .slick-dots li {
  width: 8px;
  height: 8px;
  margin: 0 5px;
}
.top_index .bnrArera .slick-dots li button {
  width: 8px;
  height: 8px;
  padding: 0;
}
.top_index .bnrArera .slick-dots li button:before {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #404040;
  content: "";
  opacity: 1;
}
.top_index .bnrArera .slick-dots li.slick-active button:before {
  background: #ff0033;
}

/* attArea */
.top_index .attArea p {
  font-size: 11px;
}

@media screen and (max-width: 1040px) {
  /* mvArea */
  .top_index .mvContents {
    padding: 8.65385vw 0 6.15385vw;
  }
  .top_index .mvImg {
    margin-bottom: 8.65385vw;
  }
  .top_index .mvHuman {
    top: 1.9231vw;
    right: 6.5vw;
  }
  .top_index .mvSwap {
    top: 3.3654vw;
    right: 10px;
  }
  .top_index .mvBtn .btnType01 {
    font-size: 3.2vw;
    padding: 1.9231vw;
  }
  .top_index .mvTxtLink {
    font-size: 1.73077vw;
    margin-top: 1.9231vw;
  }
  .top_index .mvBtn .btnCopy {
    font-size: 1.73077vw;
  }
  .top_index .mvTxtLink::after {
    width: 0.963vw;
    height: 1.539vw;
  }
  /* bnrArea */
  .top_index .bnrArera .slick-prev {
    left: 15px;
    opacity: .9;
  }
  .top_index .bnrArera .slick-next {
    right: 15px;
    opacity: .9;
  }
}

@media screen and (max-width: 767px) {
  .top_index .topInner {
    padding: 0 15px;
  }

  /* mvArea */
  .top_index .mvArea .topInner {
    padding: 0;
  }
  .top_index .mvContents {
    max-width: 800px;
    padding: 8vw 0 0;
    width: 100%;
  }
  .top_index .mvImg {
    width: 73.335%;
    margin: 0 auto 8vw;
  }
  .top_index .mvHuman {
    top: 31.7333vw;
    right: 2.5vw;
    width: 54%;
  }
  .top_index .mvSwap {
    top: 0;
    right: -7.2vw;
    position: relative;
    width: 38%;
    max-width: 280px;
  }
  .top_index .mvLinkArea {
    background-color: #f2f2f2;
    padding: 15px;
    margin-top: 10.6666vw;
    position: relative;
    z-index: 1;
  }
  .top_index .mvBtn .btnType01 {
    font-size: 24px;
    padding: 16px 5px 12px;
    width: 100%;
    max-width: 700px;
  }
  .top_index .mvBtn .btnCopy {
    font-size: 14px;
  }
  .top_index .mvTxtLink {
    font-size: 14px;
    margin-top: 15px;
  }
  .top_index .mvTxtLink::after {
    width: 8px;
    height: 12px;
  }

  /* bnrArea */
  .top_index .bnrArera .topInner {
      padding: 15px 0 30px;
  }
  .top_index .bnrArera .slick-initialized .slick-slide {
    padding: 0 5px;
  }
.top_index .bnrArera .slick-dots {
    bottom: -18px;
  }

  /* attArea */
  .top_index .attArea p {
    font-size: 8px;
  }
}

@media screen and (max-width: 380px) {
  .top_index .mvBtn .btnType01 {
    font-size: 6.4vw;
  }
  .top_index .mvBtn .btnCopy,
  .top_index .mvTxtLink {
    font-size: 3.73333vw;
  }
}

/*===========================================
  2022.10 gNav fixed
===========================================*/

/* gNavPC ====================*/
/* btnList */
#gNavPC .btnList {
  display: none;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
}
#gNavPC .btnList li {
  margin-left: 10px;
}
#gNavPC .btnList li a {
  display: block;
  padding: 5px 12px;
  border: 1px solid #fff;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  text-decoration: none;
  white-space: nowrap;
}

#gNavPC .gNavFloating{
  position: fixed;
  top: 29px;
  right: 0;
  left: 0;
  margin: 0 auto;
  background: #fff;
  border-bottom: 2px solid #005BAC;
  transform: translateY(-100%);
  transition: .3s all;
  opacity: 0;
  visibility: hidden;
  z-index: 121;
}

/* navFixed */
#gNavPC .gNavFloating.navFixed {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}
#gNavPC .gNavFloating.navFixed .gNav {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: center;
}
#gNavPC .gNavFloating.navFixed .gNav ul.parentList {
  width: calc(100% - 202px);
}
#gNavPC .gNavFloating.navFixed .gNav ul.parentList > li {
  height: 42px;
}
#gNavPC .gNavFloating.navFixed .gNav ul.parentList > li .btn {
  height: 42px;
}
#gNavPC .gNavFloating.navFixed .gNav ul.parentList > li.cur .btn,
#gNavPC .gNavFloating.navFixed .gNav ul.parentList > li .btn:hover,
#gNavPC .gNavFloating.navFixed .gNav ul.parentList > li .btn.on {
  color: #005BAC;
}
#gNavPC .navFixed .gNav ul.parentList > li .btn:before {
  content: none;
}
#gNavPC .navFixed .gNav ul.parentList > li ul.childList {
  top: 42px;
  border-top: 2px solid #005BAC;
}
#gNavPC .gNavFloating.navFixed .btnList {
  display: flex;
  pointer-events: auto;
}
#gNavPC .gNavFloating.navFixed .btnList a:hover {
  opacity: .5;
}

@media screen and (max-width: 1000px) {
  #gNavPC .gNavFloating.navFixed .gNav {
    padding: 0 10px;
  }
}

@media screen and (max-width: 768px) {
  #gNavPC .gNavFloating.navFixed {
    top: 0;
  }
}

/* gNavSP ====================*/
#gNavSP .btnList {
  display: none;
}


/*===========================================
 2022.11 new itemList title
===========================================*/
.itemList_ttl{
	position: relative;
	padding-left: 25px;
}
.itemList_ttl:before {
  content: '';
  position: absolute;
  left: 0;
  top: 5px;
  height: 13px;
  width: 0px;
  border-left: 8px solid #f03;
  border-right: 8px solid #f03;
  border-bottom: 5px solid transparent;
}

@media screen and (max-width: 767px){
  #contents .hd_wrap .hd_03.itemList_ttl {
    text-align: left;
  }
  .itemList_ttl:before {
  top: 3px;
  }
}
