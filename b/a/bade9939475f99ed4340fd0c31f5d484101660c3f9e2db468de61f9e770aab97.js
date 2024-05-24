<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" xmlns:ng="http://angularjs.org"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8" xmlns:ng="http://angularjs.org"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9" xmlns:ng="http://angularjs.org"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <!--[if lte IE 9]>
    <script type="text/javascript" src="/js/angular/angular-ui-ieshiv.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/json3/3.2.4/json3.min.js"></script>
    <![endif]-->

    <meta charset="utf-8">
    <title>Piano • Client Dashboard</title>
    <meta property="og:title" content="Piano • Client Dashboard"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    

    <link href="/widget/dist/template/css/template.bundle.1.0.css" rel="stylesheet" type="text/css"  />
<link href="https://cdn.mainichi.jp/vol1/css/v2/pc/common_pc.css" rel="stylesheet" type="text/css" />
<link href="https://cdn.mainichi.jp/vol1/css/v2/pc/module_pc.css" rel="stylesheet" type="text/css" />


    <script>var TPTemplateType = "TEMPLATE";</script>

    

    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery-migrate/1.4.1/jquery-migrate.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.22/angular.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.22/angular-animate.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.22/angular-cookies.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.22/angular-sanitize.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-dynamic-locale/0.1.27/tmhDynamicLocale.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-utils/0.1.1/angular-ui-utils.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-ui/0.4.0/angular-ui-ieshiv.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.10/angular-ui-router.min.js" ></script>
<script id="translation-dynamic" type="text/javascript" src="/showtemplate/general/loadTranslationMap?aid=gmsPBEZtpj&version=1631670796000&language=en_US" ></script>
<script id="translation-static" type="text/javascript" src="/ng/common/i18n/platform-translation-map_en_US.js?version=16.101.0" ></script>
<script type="text/javascript" src="/_sam/H4sIAAAAAAAA_z3IwQ6AIAgA0B9KmJ76m4bJHI6oBa7f7-bt7eEnrXNgEw8Mvh6lYBy-DHVaU95QpTqS9an0pgwFSkHJu63T-yTlgy1Nh-E_BjVxNVoAAAA?compressed=true&v=16.101.0" ></script>



</head>

<body id="ng-app">

<script>
    var TPConfig = {
        PATH: "https://buy-ap.piano.io"
    };

    
var TPParam = {"app":{"name":"毎日新聞ニュースサイト","image1":"/ml/cropped_gmsPBEZtpj_1_qzgd6n.png","aid":"gmsPBEZtpj","useTinypassAccounts":false,"userProvider":"piano_id_lite","businessUrl":"https://mainichi.jp/","canInitCheckoutWithAnon":false},"LOGIN":"/checkout/user/loginShow","TRANSLATION_CONFIG":{"isStatic":false,"isEnabled":true,"templateContext":"default","version":"16.101.0","loadTranslationUrl":"/showtemplate/general/loadTranslationMap?aid=gmsPBEZtpj&version=1631670796000","initialLocaleId":"en_US","systemDefaultLocale":"en_US","languages":[{"locale":"en_US","label":"English (United States)","localized":"English (United States)","isDefault":true,"isEnabled":true,"rtl":false}]},"params":{"experienceId":"EX5MX3U4A222","templateVariantId":"OTVTMGQJSE0LT","widget":"template","pianoIdUrl":"https://id-ap.piano.io/id/","iframeId":"offer_301d913e43d65e1a5796-0","offerId":"fakeOfferId","templateId":"OT51AEBTMWEO","aid":"gmsPBEZtpj","displayMode":"inline","url":"https://mainichi.jp","customVariables":"{}"},"TRACK_SHOW":"/checkout/template/trackShow"};
</script>

<div id="template-container">
    <div template ng-cloak>
        <div class="show-template-error-screen" ng-show="terminalError">
            <div class="error-screen">
                <div class="row">
                    <div class="error-notification-icon"></div>
                    <div class="content">
                        <h1>An error has occurred</h1>

                        <p class="ng-hide" ng-show="terminalError">
                            {{terminalError}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div ng-show="!terminalError">

            <div id="pianoj-ribbon" class="pianoj-ribbon" style="background-color:#ef8811;">
  <div class="pianoj-ribbon-close" ng-click="close()">
    <svg viewBox="0 0 24 24" style="fill:#FFFFFF">
      <path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"></path>
      <path d="M0 0h24v24h-24z" fill="none"></path>
    </svg>
  </div>
  <div class="pianoj-ribbon-inner">
    <img class="pianoj-ribbon-image" src="https://cdn.mainichi.jp/vol1/2023/12/20/20231220hrc00m040001000q/0.png?2" alt="">
    <p class="pianoj-ribbon-text" style="color:#FFFFFF">【今なら2カ月無料で両方読める！】毎日新聞デジタルとウォール・ストリート・ジャーナルが読み放題</p>
        <img class="pianoj-ribbon-image" src="" alt="">
        <p class="pianoj-ribbon-text" style="color:#FFFFFF"></p>
    <p class="pianoj-ribbon-text-2" style="color:#FFFFFF">今すぐ申し込む ＞</p>
  </div>
  <a class="pianoj-ribbon-link" href="https://mainichi.jp/pr/digital/t/standard/?lp_pattern=wsj202401&cx_cp=2024fuyu&cx_plc=bnr&cx_cls=pc_footer02" target="_blank"></a>
</div>




        </div>
    </div>

</div>

<style type="text/css" tp-style="template-custom-style">
    #pianoj-ribbon {
  box-sizing: border-box;
  width: 100%;
  height:50px;
    padding: 5px 0px 5px 0px;;
}
#pianoj-ribbon a, #pianoj-ribbon a:visited{
  text-decoration: none;
}
.pianoj-ribbon-image {
  height:40px;
}
.pianoj-ribbon-inner {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
.pianoj-ribbon-text {
  display: inline-block;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.0;
  vertical-align: middle;
}
.pianoj-ribbon-text-2 {
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.0;
  vertical-align: middle;
  padding-left: 2em;
}
.pianoj-ribbon-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 3;
}
.pianoj-ribbon-close {
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(50%);
  padding: 0.4rem;
  background: rgba(0,0,0,0.3);
  border-radius: 50%;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  cursor: pointer;
  z-index: 4;
}
.pianoj-ribbon-close:hover {
  background: rgba(0,0,0,0.8);
}
.pianoj-ribbon-close svg{
  width: 24px;
  fill: #FFFFFF;
  pointer-events: none;
  vertical-align: top;
}
@media screen and (max-width: 37.4999em) {
  .pianoj-ribbon-inner {
    flex-direction: column;
  }
  .pianoj-ribbon-text {
    padding-left: 0px;
  }
}
@media print{
#pianoj-ribbon {display:none;}
}
</style>





</body>



</html>
