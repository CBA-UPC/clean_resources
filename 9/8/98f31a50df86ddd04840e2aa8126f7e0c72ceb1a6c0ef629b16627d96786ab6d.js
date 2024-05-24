bject.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:),Array.isArray||(Array.isArray=,),Array.prototype.find||(Array.prototype.find=,Object.keys||(Object.keys=)),Array.prototype.reduce||(Array.prototype.reduce=,Array.prototype.fill||(Array.prototype.fill=,Object.freeze||(Object.freeze=,Object.values||(Object.values=,jQuery),),angular.module("tp.i18n",["ajaxServices","ngCookies","tmh.dynamicLocale","tinypassServices"]).config(["tmhDynamicLocaleProvider",function(e){e.localeLocationPattern("/libs/angular-1.2.22/i18n/angular-locale_{{locale | replaceUnderscoreToDash}}.js")}]).run(["lang",).directive("autoFocus",["$timeout",).directive("t",["$compile","lang","getTextFromLocales",).directive("languageSelector",["lang",).filter("shortLocale",.filter("t",["lang",).filter("tc",["lang",).filter("replaceUnderscoreToDash",.filter("replaceDashToUnderscore",.filter("getCountryCode",.factory("getTextFromLocales",[).factory("lang",["tpHTTP","$q","$locale","$cookies","tmhDynamicLocale","resolveLocale","cookieLang","$rootScope","$filter","getTextFromLocales",).factory("resolveLocale",["$cookies","$locale","tmhDynamicLocale","$filter","cookieLang",).factory("cookieLang",["TinypassService",).factory("updateDirAttrOnLangChanges",["$document","lang","ngEventService",),})}(),window.html5ModeConfig=html5ModeConfig,String.prototype.for{}}(window);var pnErrorWatc}}}(),errorHand)}}(pnErrorWatche)}}(errorHandler),angular.module("exceptionHandler",[]).factory("$exceptionHandler",["$l)}}]),window.PP_LIST={CREDIT_CARD:4,AMAZON:8,MOCK:5,ZERO:0,PAYPAL_BT:11,WORLDPAY_HPP:12,WORLDPAY_PAYPAL:13,WORLDPAY_IDEAL:14,WORLDPAY_ELV:15,SPREEDLY_CC:16,SPREEDLY_STRIPE_CC:17,SPREEDLY_BEANSTREAM:18,EDGIL_PAYWAY:19,WORLDPAY_CC_TOKEN:20,SPREEDLY_PAYU_LATAM:21,PAYPAL_EXPRESS_CHECKOUT:22,SPREEDLY_OPENPAY:23,EIGEN:24,APPLE_PAY_BT:25,OPENPAY_CASH:26,EASYPAY_MULTIBANCO:28,EASYPAY_MBWAY:29,EASYPAY_DIRECT_DEBIT:30,EASYPAY_BOLETO:31,KLARNA:32,OBI:33,OBI_PAYPAL:34,DATATRANS:35,DATATRANS_POSTFINANCE:36,ONET:37,APPLE_PAY_SS:38,CYBER_SOURCE:39,STRIPE:40,STRIPE_APPLEPAY:41,PAYWAY_APPLEPAY:42,WIRECARD:45,CREDIT_GUARD_CC:66,PAY_U_BRAZIL_BOLETO:62,VOLGA:63,INVOICE_BASED_SECOND:72,INVOICE_BASED_FIRST:75},angular.extend(window,window.PP_LIST);var generalModule=angular.module("generalModule",["ui.router","ajaxServices","ngSanitizeeralModule.factory("cookieServi e});var util={debug:getParameterByName("debug"),)}}},urlParams=nseComponentController={_isValid:function(){return!0},displayErr)}}};var EVENT_CHECKOUT_PAYMENT_METHODS_CHANGED="EVENT_CHECKOUT_PAYMENT_METHODS_CHANGED",EVENT_CHECKOUT_TERM_SELECTED="EVENT_CHECKOUT_TERM_SELECTED",EVENT_APPLY_REDEEM_CODE="EVENT_APPLY_REDEEM_CODE",EVENT_CHECKOUT_CONSENT_CHANGED="EVENT_CHECKOUT_CONSENT_CHANGED",EVENT_CHECKOUT_RESET_SELECTED_PAYMENT_METHOD="EVENT_CHECKOUT_RESET_SELECTED_PAYMENT_METHOD",EVENT_CHECKOUT_PRICE_CHANGED="EVENT_CHECKOUT_PRICE_CHANGED",EVENT_CHECKOUT_REDEEM_DONE="EVENT_CHECKOUT_REDEEM_DONE",EVENT_APPLE_PAY_CAN_MAKE_PAYMENTS="EVENT_APPLE_PAY_CAN_MAKE_PAYMENTS",EVENT_BILLING_COUNTRY_SELECTED="EVENT_BILLING_COUNTRY_SELECTED",EVENT_COUNTRY_OF_RESIDENCE_SELECTED="EVENT_COUNTRY_OF_RESIDENCE_SELECTED",EVENT_SAME_RESIDENCE_CHECKBOX_CHANGED="EVENT_SAME_RESIDENCE_CHECKBOX_CHANGED",EVENT_BILLING_FROM_TAX_REQUEST="EVENT_BILLING_FROM_TAX_REQUEST",EVENT_ZIP_CODE_CHANGED="EVENT_CC_ZIP_CODE_CHANGED",EVENT_CC_ZIP_CODE_CHANGED="EVENT_CC_ZIP_CODE_CHANGED",EVENT_USER_ACCESS_CHANGED="EVENT_USER_ACCESS_CHANGED",EVENT_ERRORS_CHANGED="EVENT_ERRORS_CHANGED",EVENT_TERMINAL_ERROR="EVENT_TERMINAL_ERROR",EVENT_CONFIG_RELOAD="EVENT_CONFIG_RELOAD",EVENT_STATS_TRACKED="EVENT_STATS_TRACKED",EVENT_TRACKING_ID_CHANGED="EVENT_TRACKING_ID_CHANGED",EVENT_PAY_WITH_NEW_CHANGED="EVENT_PAY_WITH_NEW_CHANGED",EVENT_PAY_WHAT_YOU_WANT_SHOULD_BE_APPLIED="EVENT_PAY_WHAT_YOU_WANT_SHOULD_BE_APPLIED",EVENT_EXPERIAN_ADDRESS_CHANGED="EVENT_EXPERIAN_ADDRESS_CHANGED",EVENT_RESET_ERRORS="EVENT_RESET_ERRORS",EVENT_HIGHLIGHT_ERROR_FIELDS="EVENT_HIGHLIGHT_ERROR_FIELDS",ENABLE_SAVE_BUTTON="ENABLE_SAVE_BUTTON",DISABLE_SAVE_BUTTON="DISABLE_SAVE_BUTTON",EVENT_SAME_RESIDENCE_CHANGE="EVENT_SAME_RESIDENCE_CHANGE",EVENT_SETUP_CUSTOM_VARIABLES="setupCustomVariables",EVENT_SETUP_AFFILIATE_STATE="setupAffiliateState",EVENT_SETUP_EVT_FIELDS="setupEVTFields",EVENT_ADD_CARD="EVENT_ADD_CARD",EVENT_INIT_BANCARD="EVENT_INIT_BANCARD",EVENT_GOTO_PREVIOUS_STATE="EVENT_GOTO_PREVIOUS_STATE",EVENT_TEMPLATE_RELOADED="EVENT_TEMPLATE_RELOADED",EVENT_TEMPLATE_LOGIN_CHECK_FINISHED="EVENT_TEMPLATE_LOGIN_CHECK_FINISHED",EVENT_TEMPLATE_LOGIN_SUCCESS="EVENT_TEMPLATE_LOGIN_SUCCESS";generalModule.factory("ngEventService",["$rootSco t}]),generalModule.factory("stateServi}}}),generalModule.factory("eventLogger",["$http","$windr}}]),generalModule.factory("gaService",["$window","stateService","integrationEventsService","eventLogger","eventServi i}]),generalModule.factory("statsService",["ngEventService","stateService","$q","$ht}}}]),generalModule.factory("browserIdService",["ngEventService","}}}]),generalModule.run(["ngEventServi})}]),generalModule.factory("configService",["ngEventServi}}}]),generalModule.factory("apiService",["$ht}}}]),generalModule.factory("modalService",["$rootScope","$q","$http","$templateCache","$injector","$timeout","$document","$compile","$controll,u}]),generalModule.factory("shakeServi e}),generalModule.factory("EventManag}}}),generalModule.directive("customScript",["$par}}}]),generalModule.directive("boilerplateCloseButton",["configServi}}}]),generalModule.directive("pnSticky",["$timeout","$interval","utilsServi}}}]),generalModule.factory("windowStateServic}}}]),generalModule.factory("exposeTemplateParan}}),generalModule.factory("exposeCustomVariables",function(){return function(e){var t={};try{t=JSON.parse(e)}catch(e){}return t}}),generalModule.factory("exposeCustomCookit}}),generalModule.factory("exposeActiveMetet}}),generalModule.service("integrationEventsServi)}}),generalModule.factory("topLocation",["$window","eventService",",r}]),generalModule.factory("addQueryParameterToUr}}),generalModule.factory("setupTrackingId",["ngEventServi)}}]),generalModule.service("utilsService",["cookieServiurn t}}]),generalModule.factory("getTracgId()}}),generalModule.factory("trackExterna,t,n)}}),generalModule.factory("interceptAjax",r)})}}}]),generalModule.factory("keysSe===e}}}]),generalModule.factory("windowService",["$null)}}]),generalModule.filter("encodeURIComponent",["$ponent}]);varion(){};Helper.wra,r,o)}};var Integratioe)})}}}();Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex"turn-1}});vae){},n}(IntegrationEvents),eventModule=angular.module("eventModule",["generalModule"]);eventModule.factory("eventService",["$window","$rootScope","$q","configS})}),o}]);var errorModule=angular.module("errorModule",["generalModule"]);errorModule.factory("errorService",["$rootScope","eventService","ngEventS}(),i}}]);var tpComponentsModule=angular.module("tpComponentsModule",["generalModule","containerServiceModule"]);tpComponentsModule.directive("a",["trackExternalEvent","getTrackingId","addQueryParameterToUrl","$timeout","ngEventS()})}}}]),tpComponentsModule.directive("radioTlue)}}}),tpComponentsModule.factory("getExternalEventurn n}}),tpComponentsModule.directive("externalEvent",["eventService","getExternalEventParams","trackExterna)}})}}}]),tpComponentsModule.directive("showIf",["$a))})}}}]),tpComponentsModule.factory("checkMobile",["$q","$timeout","containerS<=600}}]),tpComponentsModule.directive("mobile",["check()}}]}}]),tpComponentsModule.directive("desktop",["check()}}]}}]),tpComponentsModule.directive("onEnter",[")})})}}]),tpComponentsModule.directive("errorMessage",[")})}]}}]),tpComponentsModule.directive("config",["containerService","configSed()}}}]),tpComponentsModule.directive("hideIfBlank",["$an)})}}}]),tpComponentsModule.directive("reCaptcha",["ngEventService","checkMobile","containerS",o)}}}]),tpComponentsModule.directive("n())})}});var userServiceModule=angular.module("userServiceModule",["ui.router","ajaxServices","ngSanitize","generalModule","tp.i18n"]);userServiceModule.factory("userService",["$rootScope","$rootElement","$q","tpHTTP","eventService","ngEventService","errorService","gaService","lang","utilsService","cookieS(e)},v}]);var containerServiceModule=angular.module("containerServiceModule",["ui.router","ngSanitize","generalModule"]);containerServiceModule.factory("containerService",["$window","$rootScope","$rootElement","$timeout","$interval","$document","eventService","errorService","windowStateService","ngEventS(e)},f}]),angular.module("pianoIdProviderModule",["generalModule"]).factory("pianoIdProvider",["$sce","$window","$q","lang","errorService","eventService","ngEventService","userService","containerS)})},_}]).directive("pianoId",["userService","pianoIdProvider","$injector","$l)})}}}]).directive("emailConfirmationRequired",["pianoIdProvider","$inve()}}}]).directive("authPianoId",["pianoIdProvider","errorSn,r)}}}]).directive("formPianoId",["pianoIdPrt,n)}}}]).directive("pianoIdSocialAuth",["userService","pianoIdProvider","$inr,o)}}}]),angular.module("creditRedemptionModule",["generalModule"]).factory("creditRedemptionService",["eventService","userShod},n}]);vared")}}};tpDrop.$inject=["$injector","$document","$rootScope","$q","$http","$templateCache","$controller","$compile","$interval","$timeout"],angular.module("tpDrop.module",["ngSanitize","generalModule"]).factory("tpDrop",tpDrop);var requiredModules=["exceptionHandler","tpComponentsModule","generalModule","eventModule","errorModule","userServiceModule","containerServiceModule","tp.i18n","html5.placeholder","pianoIdProviderModule","creditRedemptionModule"];switch(window.TPTemplateType){case"NEWSCYCLE_OFFER":requiredModules.push("newscycleModule");break;case"ZUORA_OFFER":requiredModules.push("zuoraModule");break;case"LOST_VALUE_OFFER":case"FINAL_CONFIRMATION":requiredModules.push("acpModule"),requiredModules.push("churnPreventionModule");break;case"NEWSLETTER_SIGNUP":requiredModules.push("newsletterModule");break;case"LICENSING_LANDING_PAGE":case"LICENSING_CONTRACT_LIST":case"LICENSING_REDEEM_RESULT":requiredModules.push("tpDrop.module"),requiredModules.push("licensingModule")}var showTemplateModule=angular.module("showTemplateModule",requiredModules);showTemplateModule.config(["$compileProvider","$qPrns(!1)}]),showTemplateModule.run(["intercelate")}]),showTemplateModule.directive("template",["template","exposeTemplateParams","exposeCustomVariables","exposeActiveMeters","exposeCustomCookies","setupTrackingId","utilsService","browserIdService","errorService","eventService","creditRedemptionService","statsSw()}]}}]),showTemplateModule.factory("template",["$window","$rootScope","$rootElement","$timeout","eventService","ngEventService","errorService","containerService","userService","configService","trackExternalEvent","lang","setupTrackingId","pianoIdProvider","updateDirAttrOnLangC,g(),m}]),angular.element(documenti:!0})});
'use strict';
angular.module("ngLocale", [], ["$pr}
});
}]);
var newsletterModule = angular.module('newsletterModule', []);

var ENTER_KEY = 13;

var SIGNUP_STATE = 'signup';
var SUCCESS_STATE = 'success';
var ESP_SINGUP_ERROR = 'ESP_SINGUP_ERROR';


var EMPTY_EMAIL_ERROR = 'EMPTY_EMAIL_ERROR';
var INVALID_EMAIL_ERROR = 'INVALID_EMAIL_ERROR';

var STATES = [SIGNUP_STATE, SUCCESS_STATE];

var NEWSLETTER_PREFIX = 'newsletterSignup';
var NEWSLETTER_IMPRESSION_EVENT = 'impression';
var NEWSLETTER_SUBMISSION_EVENT = 'submission';

newsletterModule.factory('newsletter.espEndsub/'
});

newsletterModule.factory('newsletter.fireAndLogEvent', ['eventService', function (eventService) {
  return function (eventName) {
    piano._logAutoMicroConversion('EXTERNAL_EVENT', eventName);
    eventService.postMessage(NEWSLETTER_PREFIX + eventName.charAt(0).toUpperCase() + eventName.slice(1), {
      mailingListIds: TPParam.params.mailingListIds
    });
  }
}]);

newsletterModule.factory('newsletter.stateService', ['$rootScope', function ($rootScope) {

  var currentState = SIGNUP_STATE;

  var service = {};

  service.getCurrentte;
  };

  service.toSuE);
  };

  service.toState = function (stateName) {
    if (STATES.indexOf(stateName) === -1) {
      throw new Error('incorrect screenName');
    }

    currentState = stateName;
  };

  return service;
}]);


newsletterModule.factory('newsletter.validateService', ['lang', function (lang) {
  var emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var errors = {};

  errors[EMPTY_EMAIL_ERROR] = lang.trc('checkout.platform', 'email can\'t be empty');
  errors[INVALID_EMAIL_ERROR] = lang.trc('checkout.platform', 'invalid email');


  return {
    setErro;
    },

    validateEmail: function (email) {
      if (!email) {
        return errors[EMPTY_EMAIL_ERROR];
      }

      if (!emailRe.test(String(email).toLowerCase())) {
        return errors[INVALID_EMAIL_ERROR];
      }

      return false;
    }
  }
}]);


newsletterModule.factory('newsletter.espService', [
  'newsletter.espEndpoint',
  'newsletter.stateService',
  'newsletter.validateService',
  '$http',
  '$rootScope',
  'lang',
  'ngEventService',
  'newsletter.fireAndLogEvent',
  function (ESP_ENDPOINT, stateService, validateService, $http, $rootScope, lang, ngEventService, fireAndLogEvent) {

    var state = {
      attemptCount: 0,
      error: '',
      errorCode: '',
      email: null,
      sqids: [],
      siteId: TPParam.params.siteId,
      errorValues: {}
    };

    if (TPParam.params.mailingListIds) {
      // non cacheable templates
      setUpMailingList();
    }

    var refresh;
    };

    function setUpMailingList() {
      try {
        state.sqids = JSON.parse(TPParam.params.mailingListIds);
      } catch (_) {
        console.error('incorrect mailingList');
      }
    }

    ngEventService.subscribe('templateInit;
    });

    var service = {};

    service.signup = function () {
      state.attemptCount++;

      if (!service._validate()) {
        return;
      }

      if (TPParam.params.preview) {
        return stateService.toSuccess();
      }

      return $http
        .post(ESP_ENDPOINT + state.siteId, {
            email: state.email,
            sqids: state.sqids
          },
          {
            headers: {
              'Ng-Request': function () {
                return null;
              },
              'X-Requested      }
            }
          })
        .then(function (response) {
          var code = parseInt(response.data.code, 10);
          if (code === 200) {
            fireAndLogEvent(NEWSLETTER_SUBMISSION_EVENT);
            return stateService.toSuccess();
          }
          service._setError(response.data.error);
        })

        .catch(function (error) {
          service._setError(lang.trc('checkout.platform', 'Server error: {0}', error.statusText));
        })
    };

    service.getError = function () {
      return state.error;
    };

    service._set;
    };

    service._validate = function () {
      var email = state.email;
      var validateError = validateService.validateEmail(email);
      if (validateError) {
        service._setError(validateError);
        return false;
      }
      service._setError('');
      return true;
    };

    service.setEmail = function (email) {
      state.email = email;
      if (state.attemptCount > 0) {
        this._validate();
      }
    };

    service.getEmail = function () {
      return state.email;
    };

    return service;
  }]);


STATES.forEach(function (stateName) {
  newsletterModule.directive(stateName + 'Screen', ['ngIfDirective', 'newsletter.stateService', function (ngIfDirective, stateService) {
    var ngIf = ngIfDirective[0];
    return {
      transclude: ngIf.transclude,
      priority: ngIf.priority - 1,
      terminal: ngIf.terminal,
      restrict: 'AE',
      link: function (scope, element, attributes) {
        var ifEval      }
        attributes.ngIf = ifEvaluator;
        ngIf.link.apply(ngIf, arguments);
      }
    };
  }]);
});


newsletterModule.directive('newsletterSwitchScreen', ['newsletter.stateService', function (stateService) {
  return {
    scope: {
      stateName: '@newsletterSwitchScreen'
    },
    link: function ($scope, $element) {
      $element.on('      });
    }
  }
}]);


newsletterModule.directive('newsletterSignupError', [
  'newsletter.espService',
  'newsletter.validateService',
  'ngEventService',
  'lang',
  function (espService, validateService, ngEventService, lang) {
    return {
      scope: {
        emptyError: '@',
        invalidFormatError: '@'
      },
      link: function ($scope, $element) {
        var errors = {};
        if ($scope.emptyError) {
          errors[EMPTY_EMAIL_ERROR] = $scope.emptyError;
        }

        if ($scope.invalidFormatError) {
          errors[INVALID_EMAIL_ERROR] = $scope.invalidFormatError;
        }

        validateService.setErrorsText(errors);

        var unsubscribe = ngEventService.subscribe(ESP_SINGUP      });
        $element.on('$destroy', unsubscribe);
      }
    }
  }]);

newsletterModule.directive('newsletterSignupInvalid', ['newsletter.espService', 'ngEventService', function (espService, ngEventService) {
  return {
    scope: {
      errorClass: '@newsletterSignupInvalid'
    },
    link: function ($scope, $element) {
      var unsubscribe = ngEventService.subscribe(ESP_SINGUP_ERROR, function () {
        $element.toggleClass($scope.errorClass || 'has-error', !!espService.getError());
      });
      $element.on('$destroy', unsubscribe);
    }
  }
}]);

newsletterModule.directive('newsletterSignupInput', ['newsletter.espService', 'newsletter.fireAndLogEvent', function (espService, fireAndLogEvent) {
  return {
    link: function ($scope, $element) {
      fireAndLogEvent(NEWSLETTER_IMPRESSION_EVENT);

      $element.val(espService.getEmail());
      $element.on('input       });

      $element.on('      });
    }
  }
}]);

newsletterModule.directive('newsletterSignupSubmit', ['newsletter.espService', function (espService) {
  return {
  ;
    }
  }
}]);

