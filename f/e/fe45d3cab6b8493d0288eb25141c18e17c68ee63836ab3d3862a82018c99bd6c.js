
  window.PianoESPConfig = {
      id: 318
  };
  (function () {
    tp = window["tp"] || [];

    /* Checkout related */
    /**
     * Event properties
     *
     * chargeAmount - amount of purchase
     * chargeCurrency
     * uid
     * email
     * expires
     * rid
     * startedAt
     * termConversionId
     * termId
     * promotionId
     * token_list
     * cookie_domain
     * user_token
     *
     */
    function onCheckoutComplete(data) {

		window.dataLayer.push({
			'event': 'subscription_complete',
			'piano': {
				'aid': tp.aid
			}
		});

		if (window.fbq) {
			window.fbq("track", "Purchase", {
				value: data.chargeAmount,
				currency: data.chargeCurrency,
				termConversionId: data.termConversionId,
				termId: data.termId,
			})
		}

    }

    function onCheckoutExternalEvent() {
    }

    function onCheckoutClose(event) {
        /* Default behavior is to refresh the page on successful checkout */
        if (event && event.state == "checkoutCompleted") {
            location.reload();
        }
    }

    function onCheckoutCancel() {
    }

    function onCheckoutError() {
    }

    function onCheckoutSubmitPayment() {
    }

    /* Meter callback */
    function onMeterExpired() {

    }

    /* Meter callback */
    
    /* Callback executed when a user must login */
    
    /* Callback executed after a tinypassAccounts login */
    function onLoginSuccess(data) {
	    if (data.source == "PIANOID" && data.params.confirmed){
      		location.reload(); // this reloads the page after direct login (NOT login inside checkout)
  		}
    }

    /* Callback executed after an experience executed successfully */
    function onExperienceExecute(event) {
    }

    /* Callback executed if experience execution has been failed */
    
    /* Callback executed if external checkout has been completed successfully */
    
    tp.push(["setAid", 'lM82g7dkpe']);
    tp.push(["setCxenseSiteId", "1135180859564342700"]);
    tp.push(["setEndpoint", 'https://buy-eu.piano.io/api/v3']);
    tp.push(["setUseTinypassAccounts", false ]);
    tp.push(["setUsePianoIdUserProvider", true ]);
    tp.push(['setPianoIdUrl', 'https://id-eu.piano.io/']);
    tp.push(["setEspEndpoint", "https://api-esp-eu.piano.io"]);
    tp.push(['setCloudflareWorkerUrl','https://micuenta.sport.es/tp/returnpianocookies']);

    /* checkout related events */
    tp.push(["addHandler", "checkoutComplete", onCheckoutComplete]);
    tp.push(["addHandler", "checkoutClose", onCheckoutClose]);
    tp.push(["addHandler", "checkoutCustomEvent", onCheckoutExternalEvent]);
    tp.push(["addHandler", "checkoutCancel", onCheckoutCancel]);
    tp.push(["addHandler", "checkoutError", onCheckoutError]);
    tp.push(["addHandler", "checkoutSubmitPayment", onCheckoutSubmitPayment]);

    /* user login events */
    tp.push(["addHandler", "loginRequired", onLoginRequired]);
    tp.push(["addHandler", "loginSuccess", onLoginSuccess]);

    /* meter related */
    tp.push(["addHandler", "meterExpired", onMeterExpired]);
    tp.push(["addHandler", "meterActive", onMeterActive]);

    tp.push(["addHandler", "experienceExecute", onExperienceExecute]);
    tp.push(["addHandler", "experienceExecutionFailed", onExperienceExecutionFailed]);

    /* external checkout related events */
    tp.push(["addHandler", "externalCheckoutComplete", onExternalCheckoutComplete]);

    tp.push(["init", function () {
      
		/* Redirect if comes from double opt-in */
        try {
          if(window.location.href.indexOf("?verification_code=")>=0){
            var href = localStorage.getItem("_tp_last_closed");
            if (href) {
              localStorage.removeItem("_tp_last_closed");  
              window.location.replace(href+"?"+window.location.href.split("?")[1]);
            }
          }
        }
        catch(e){
        }
      
        try{
            var _mo_tp_cv = JSON.parse(localStorage.getItem("_mo_tp_cv"));
            if (_mo_tp_cv && _mo_tp_cv.length){
                for (var i=0; i<Math.min(70,_mo_tp_cv.length); i++) {
                    tp.push(["setCustomVariable",_mo_tp_cv[i][0],_mo_tp_cv[i][1]]);
                }
            }
            if (window._an && window._an.allowModal === false) {
                tp.push(["setCustomVariable","allowModal","false"])
            }
        }catch(e){}
        tp.experience.init()
    }]);
})();


    // do not change this section
    // |BEGIN INCLUDE TINYPASS JS|
    (("//cdn-eu.piano.io/api/tinypass.min.js");
    // |END   INCLUDE TINYPASS JS|

