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
<script type="text/javascript" src="/_sam/H4sIAAAAAAAA_z3IwQ6AIAgA0B9KmJ76m4bJHI6oBa7f7-bt7eEnrXNgEw8Mvh6lYBy-DHVaU95QpTqS9an0pgwFSkHJu63T-yTlgy1Nh-E_BjVxNVoAAAA?compressed=true&v=16.99.0" ></script>



</head>

<body id="ng-app">

<script>
    var TPConfig = {
        PATH: "https://buy-au.piano.io"
    };

    
var TPParam = {"app":{"name":"Brisbane Times","image1":"/ml/cropped_EYAawEY2pa_1_rjaatd.png","aid":"EYAawEY2pa","useTinypassAccounts":false,"userProvider":"piano_id_lite","businessUrl":"https://www.brisbanetimes.com.au/","canInitCheckoutWithAnon":false},"LOGIN":"/checkout/user/loginShow","TRANSLATION_CONFIG":{"isStatic":true,"isEnabled":false,"templateContext":null,"version":null,"loadTranslationUrl":null,"initialLocaleId":"en_US","systemDefaultLocale":"en_US","languages":null},"params":{"experienceId":"EX8Z54YMLGU4","templateVariantId":"OTVAFATTKHLY1","widget":"template","pianoIdUrl":"https://id.tinypass.com/id/","iframeId":"offer_b4c5012823b6cc6a49a3-0","offerId":"fakeOfferId","templateId":"OTY6UAMR8TJH","aid":"EYAawEY2pa","displayMode":"inline","url":"https://www.brisbanetimes.com.au","customVariables":"{\"hasAppAccess\":false,\"hasAppSubAccess\":false,\"isCurrentGoogleEntitlement\":false,\"isExternalPurchaseSource\":false,\"isIPBypass\":false,\"isReadyToPayWithGoogle\":false,\"subscriptionEntitlements\":[],\"subscriptionPlans\":[]}"},"TRACK_SHOW":"/checkout/template/trackShow"};
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

            <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet">
<a class="strip" href="https://subscribe.brisbanetimes.com.au?promote_channel=HI_HPB__IntroOffer&utm_source=HomepageBanner&utm_medium=HouseInventory&utm_campaign=IntroOffer&tracking_id={{params.trackingId | encodeURIComponent}}" target="_parent" >
  <span class="text">Today’s news for tomorrow’s Brisbane. Subscribe for $1/week.</span>
  <span target="_parent" class="button" ng-if="'true'">
    SUBSCRIBE NOW
  </span>
</a>


        </div>
    </div>

</div>

<style type="text/css" tp-style="template-custom-style">
    .button {
  padding: 8px 16px;
  border-radius: 4px;
  font-family: PT Sans, sans-serif;
  font-size: 13px;
  line-height: 16px;
  text-decoration: none;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  font-weight: bold;
  text-transform: uppercase;

  border: 1px solid transparent;
  background-color: transparent;
  border-color: #232323;
  color: #232323;
  
  &:hover {
      cursor: pointer;
      background-color: #69E8FF;
      color: #232323;
      outline: 0;
  }
  
  &:focus {
      background-color: #69E8FF;
      color: #232323;
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
  background-color: #69E8FF;
  color: #232323;
  font-family: PT Sans, sans-serif;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  transition: height 0.2s ease-in, opacity 0.2s ease-in;
  min-height: 46px;
  
  &:hover {
      cursor: pointer;
  }
}

@media (max-width: 767px) {
  .strip {
    display: flex;
    overflow: hidden;
    padding: 0 20px;
    align-items: center;
    flex-direction: column;
    min-height: 80px;
    justify-content: center;
  }
  
  .button {
    margin-bottom: 10px;
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
  font-size: 13px;
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
