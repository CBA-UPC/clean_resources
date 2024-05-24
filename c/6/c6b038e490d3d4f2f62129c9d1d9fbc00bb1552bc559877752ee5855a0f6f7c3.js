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
<script id="translation-dynamic" type="text/javascript" src="/showtemplate/general/loadTranslationMap?aid=lrJ8j3qepa&version=1703132664000&language=en_US" ></script>
<script id="translation-static" type="text/javascript" src="/ng/common/i18n/platform-translation-map_en_US.js?version=16.99.0" ></script>
<script type="text/javascript" src="/_sam/H4sIAAAAAAAA_z3IwQ6AIAgA0B9KmJ76m4bJHI6oBa7f7-bt7eEnrXNgEw8Mvh6lYBy-DHVaU95QpTqS9an0pgwFSkHJu63T-yTlgy1Nh-E_BjVxNVoAAAA?compressed=true&v=16.99.0" ></script>



</head>

<body id="ng-app">

<script>
    var TPConfig = {
        PATH: "https://buy-au.piano.io"
    };

    
var TPParam = {"app":{"name":"Australian Financial Review","image1":"/ml/cropped_lrJ8j3qepa_1_rjaaob.png","aid":"lrJ8j3qepa","useTinypassAccounts":false,"userProvider":"piano_id_lite","businessUrl":"https://www.afr.com/","canInitCheckoutWithAnon":false},"LOGIN":"/checkout/user/loginShow","TRANSLATION_CONFIG":{"isStatic":false,"isEnabled":true,"templateContext":"default","version":"16.99.0","loadTranslationUrl":"/showtemplate/general/loadTranslationMap?aid=lrJ8j3qepa&version=1703132664000","initialLocaleId":"en_US","systemDefaultLocale":"en_US","languages":[{"locale":"en_US","label":"English (United States)","localized":"English (United States)","isDefault":true,"isEnabled":true,"rtl":false}]},"params":{"experienceId":"EX3BWN0RMNU5","widget":"template","pianoIdUrl":"https://id.tinypass.com/id/","iframeId":"offer_aefa66e3682eda0f9f43-0","offerId":"fakeOfferId","templateId":"OTWD2H4ED2JM","aid":"lrJ8j3qepa","displayMode":"inline","url":"https://www.afr.com","customVariables":"{\"isAppSubscriber\":false,\"isIPBypass\":false,\"isReadyToPayWithGoogle\":false,\"giftStatus\":\"none\",\"subscriptionEntitlements\":[],\"subscriptionPlans\":[]}"},"TRACK_SHOW":"/checkout/template/trackShow"};
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

            <a class="strip" href="https://subscribe.afr.com/?promote_channel=HI_HS_GNL&utm_source=HeroStrip&utm_medium=HouseInventory&utm_campaign=General&tracking_id={{params.trackingId | encodeURIComponent}}" target="_parent" >
  <span class="text">DON’T MISS YOUR CHANCE TO SAVE 60% ON PREMIUM DIGITAL.*</span>
  <span target="_parent" class="button">
    GET OFFER
    <svg class="svg" width="16" height="16" transform="translate(0, -1.25)" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <path d="M4.25.75a1.06 1.06 0 0 0 0 1.5L9.999 8l-5.75 5.75a1.06 1.06 0 1 0 1.5 1.5L13.001 8 5.75.75a1.06 1.06 0 0 0-1.5 0z" id="a"/>
      </defs>
      <use fill="currentColor" xlink:href="#a" fill-rule="evenodd"/>
    </svg>
  </span>
</a>

        </div>
    </div>

</div>

<style type="text/css" tp-style="template-custom-style">
    @font-face {
  font-family: suecanano_regular;
  src: url("https://www.afr.com/fonts/suecanano-regular-webfont.woff2") format('woff2');
  font-style: normal;
}

@font-face {
  font-family: suecanano_semi_bold;
  src: url('https://www.afr.com/fonts/suecanano-semibold-webfont.woff2') format('woff2');
  font-style: normal;
}

@font-face {
  font-family: sueca_hd_regular;
  src: url('https://www.afr.com/fonts/suecahd-regular-webfont.woff2') format('woff2');
  font-style: normal;
}

.button {
  padding: 8px 16px;
  border-radius: 4px;
  font-family: suecanano_semi_bold, arial, lucida grande, sans-serif;
  font-size: 12px;
  line-height: 16px;
  text-decoration: none;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  font-weight: bold;
  text-transform: uppercase;

  border: 1px solid transparent;
  background-color: transparent;
  border-color: #fff;
  color: #fff;
  
  &:hover {
      cursor: pointer;
      background-color: #fff;
      color: #085194;
      outline: 0;
  }
  
  &:focus {
      background-color: #fff;
      color: #085194;
      outline: 0;
  }

  display: inline-block
}

@media (min-width: 768px) {
  .button {
  	margin-left: 32px;
    min-width: fit-content;
  }
}

.icon {
  width: 24px;
  height: 24px;
  margin-left: 8px;
}

.strip {
  background-color: #0f6cc9;
  color: #fff;
  font-family: suecanano_semi_bold, arial, lucida grande, sans-serif;;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  transition: height 0.2s ease-in, opacity 0.2s ease-in;
  
  &:hover {
      cursor: pointer;
  }
}

@media (max-width: 767px) {
  .strip {
    display: block;
    overflow: hidden;
    padding: 0 20px 10px;
  }
}

@media (min-width: 768px) {
  .strip {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 20px;
  }
}

.svg {
    display: inline-block;
	width: 16px;
    height: 16px;
    margin-left: 8px;
    flex-shrink: 0;
    transform: translate(0, -1.25);
    vertical-align: middle;
}

.text {
  font-size: 12px;
  text-transform: uppercase;
}

@media (max-width: 767px) {
  .text {
      display: block;
	  padding: 8px 0;
  }
}



</style>





</body>



</html>
