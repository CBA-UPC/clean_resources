window.PianoESPConfig = {
    id: 365
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
    function onLoginSuccess(data) {
        //console.log("onLoginSuccess - Data:");
        //console.log(data);
        if (data.registration) {
            tp.pianoId.loadExtendedUser({
                extendedUserLoaded: function (data) {
                    const API_URL = 'https://api-esp-eu.piano.io';
                    const SITE_ID = 197;
                    let MAILING_LISTS = [];
                    let CFields = data.custom_field_values;
                    //console.log('Custom fields:');
                    //console.log(CFields);
                    for (let i in CFields) {
                        let fieldName = CFields[i].field_name;
                        let fieldValue = CFields[i].value;
                        //console.log(fieldName, fieldValue);
                        if(fieldValue == 'true') {
                            if (fieldName == 'lesimmanquablessignup') {
                                MAILING_LISTS.push(5485);
                            }
                            else if (fieldName == 'divertosignup') {
                                MAILING_LISTS.push(5879);
                            }
                            else if (fieldName == 'cesoir1') {
                                MAILING_LISTS.push(6012);
                            }
                            else if (fieldName == 'partenaire') {
                                MAILING_LISTS.push(6013);
                            }
                        }
                    }
                    //console.log(MAILING_LISTS);
                    if(MAILING_LISTS.length) {
                        let email = tp.pianoId.getUser() ? tp.pianoId.getUser().email : data.user.email;
                        let post_data = { email: email, sqids: MAILING_LISTS };
                        let xhr = new XMLHttpRequest();
                        xhr.open('POST', API_URL + '/tracker/lucid/sub/' + SITE_ID, true);
                        xhr.setRequestHeader('Content-type', 'application/json');
                        xhr.send(JSON.stringify(post_data));
                    }
                },
                formName: 'RegistrationFields'
            });
        }
    }

    /* Callback executed after a tinypassAccounts logout */
    

    /* Callback executed after an experience executed successfully */
    function onExperienceExecute(event) {
    }

    /* Callback executed if experience execution has been failed */
    
    /* Callback executed if external checkout has been completed successfully */
    

    tp.push(["setAid", '2n93ZpS6pe']);
    tp.push(["setCxenseSiteId", '4732522261350047399']);
    tp.push(["setEndpoint", 'https://buy-eu.piano.io/api/v3']);
    tp.push(['setPianoIdUrl', 'https://id-eu.piano.io']);
    tp.push(["setEspEndpoint", 'https://api-esp-eu.piano.io']);
    tp.push(["setUseTinypassAccounts", false ]);
    tp.push(["setUsePianoIdUserProvider", true ]);

    /* checkout related events */
    tp.push(["addHandler", "checkoutComplete", onCheckoutComplete]);
    tp.push(["addHandler", "checkoutCustomEvent", onCheckoutExternalEvent]);
    tp.push(["addHandler", "checkoutClose", onCheckoutClose]);
    tp.push(["addHandler", "checkoutCancel", onCheckoutCancel]);
    tp.push(["addHandler", "checkoutError", onCheckoutError]);
    tp.push(["addHandler", "checkoutSubmitPayment", onCheckoutSubmitPayment]);

    /* user login events */
    tp.push(["addHandler", "loginRequired", onLoginRequired]);
    tp.push(["addHandler", "loginSuccess", onLoginSuccess]);
    tp.push(["addHandler", "logout", onLogout]);

    /* meter related */
    tp.push(["addHandler", "meterExpired", onMeterExpired]);
    tp.push(["addHandler", "meterActive", onMeterActive]);

    tp.push(["addHandler", "experienceExecute", onExperienceExecute]);
    tp.push(["addHandler", "experienceExecutionFailed", onExperienceExecutionFailed]);

    /* external checkout related events */
    tp.push(["addHandler", "externalCheckoutComplete", onExternalCheckoutComplete]);

    tp.push(["init", function () {
        //console.log("TP EXPERIENCE INIT");
        tp.experience.init()

        //console.log("IS USER VALID ?");
        if (tp.pianoId.isUserValid()) {
            //console.log("USER IS VALID");
            let body = document.body;
            body.classList.remove("r-anonyme");
            body.classList.add("r-connecte");
            let connected_user = tp.pianoId.getUser();
            let user_menu = document.querySelector('.r-sso--login.r-btn > span');
            if(user_menu !== null){
                user_menu.innerHTML = connected_user.firstName;
            }
            //TODO: Set custom cookie ?
        }
        else {
            //console.log("USER IS NOT VALID");
            let body = document.body;
            body.classList.remove("r-connecte");
            body.classList.add("r-anonyme");
            //TODO: Remove custom cookie ?
        }
    }]);
})();

window.onmessage = (event) => {
  	  console.log(event.data);
      if(event.data == "nextStep"){
        setTimeout( 1000)
      }
    }

// do not change this section
// |BEGIN INCLUDE TINYPASS JS|
(("https://cdn-eu.piano.io/api/tinypass.min.js");
// |END   INCLUDE TINYPASS JS|