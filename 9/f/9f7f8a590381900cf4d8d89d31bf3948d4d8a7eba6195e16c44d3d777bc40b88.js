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

    
var TPParam = {"app":{"name":"WA Today","image1":"/ml/cropped_lG1OZt97pa_1_rjaalz.png","aid":"lG1OZt97pa","useTinypassAccounts":false,"userProvider":"piano_id_lite","businessUrl":"https://www.watoday.com.au/","canInitCheckoutWithAnon":false},"LOGIN":"/checkout/user/loginShow","TRANSLATION_CONFIG":{"isStatic":true,"isEnabled":false,"templateContext":null,"version":null,"loadTranslationUrl":null,"initialLocaleId":"en_US","systemDefaultLocale":"en_US","languages":null},"params":{"experienceId":"EXW2GL78OJBO","widget":"template","pianoIdUrl":"https://id.tinypass.com/id/","iframeId":"offer_5b528de62e7a08aeef13-0","offerId":"fakeOfferId","templateId":"OTU872SLDFM0","aid":"lG1OZt97pa","displayMode":"inline","url":"https://www.watoday.com.au","customVariables":"{\"hasAppAccess\":false,\"hasAppSubAccess\":false,\"isCurrentGoogleEntitlement\":false,\"isExternalPurchaseSource\":false,\"isIPBypass\":false,\"isReadyToPayWithGoogle\":false,\"subscriptionEntitlements\":[],\"subscriptionPlans\":[]}"},"TRACK_SHOW":"/checkout/template/trackShow"};
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

            <link rel="stylesheet" href="https://www.smh.com.au/subscription/assets/css/watoday.css">
<a id="subscriberButton" class="subscriberButton" href="https://subscribe.watoday.com.au/?promote_channel=HI_HL_GNL&tracking_id={{params.trackingId | encodeURIComponent}}" target="_parent" >SUBSCRIBE</a>

        </div>
    </div>

</div>

<style type="text/css" tp-style="template-custom-style">
    #ng-app {
  background-color: rgba(0, 0, 0, 0);
}

.subscriberButton {
  background-color: #096dd2;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-family: pt_sans_regular, Trebuchet MS, Arial Narrow, sans-serif;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 1;
  padding: 10px 16px 9px;
  text-transform: uppercase;
  text-decoration: none;
  width: fit-content;
  margin-left: auto;
  margin-right: 0;
  
  &:focus,
  &:hover {
    background-color: #4095ec;
  	color: #fff;
  }

  &:active {
    background-color: #0053a6;
  }
}

@media (hover: none) {
  .subscriberButton {
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    padding: 4.5px 12px 3.5px;
  }
}

</style>





</body>



</html>
