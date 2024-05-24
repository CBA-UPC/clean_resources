 (function () {
    tp = window["tp"] || [];
window.PianoESPConfig = {
        id: 414
    }
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
    function onMeterActive() {

    }

    /* Callback executed when a user must login */
    
    /* Callback executed after a tinypassAccounts login */
    
    /* Callback executed after an experience executed successfully */
    function onExperienceExecute(event) {
    }

    /* Callback executed if experience execution has been failed */
    
    /* Callback executed if external checkout has been completed successfully */
    
    tp.push(["setAid", 'DhI5ZzgPpe']);
  	tp.push(["setCxenseSiteId", "5859578269130232114"])
    tp.push(["setEndpoint", 'https://buy-eu.piano.io/api/v3']);
    tp.push(['setPianoIdUrl', 'https://id-eu.piano.io']);
    tp.push(["setUseTinypassAccounts", false ]);
    tp.push(["setUsePianoIdUserProvider", true ]);

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

    tp.push(["init", );
})();


    // do not change this section
    // |BEGIN INCLUDE TINYPASS JS|
    (("https://cdn-eu.piano.io/api/tinypass.min.js");
    // |END   INCLUDE TINYPASS JS|

