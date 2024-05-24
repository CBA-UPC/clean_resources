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
    
    function onCheckoutExternalEvent() {
    }

    function onCheckoutClose(event) {
        /* Default behavior is to refresh the page on successful checkout */
        if (event && event.state == "checkoutCompleted") {
            //location.reload();
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
    function onLoginSuccess(event) {
    	// seteando en storage el token de usuario
    	try {
      		localStorage.setItem("_ps_user-token", event.user_token);
    	} catch (err) {
      		console.log(err);
    	}
    }

  	function onRegistrationSuccess(event) {}

  	function onLogout(event) {
    	// removiendo de storage el token de usuario
    	try {
      		localStorage.removeItem("_ps_user-token");
    	} catch (err) {
      		console.log(err);
    	}
  	}

    /* Callback executed after an experience executed successfully */
    function onExperienceExecute(event) {
    }

    /* Callback executed if experience execution has been failed */
    
    /* Callback executed if external checkout has been completed successfully */
    
    tp.push(["setAid", 'MkdicA21pu']);
  	tp.push(["setCxenseSiteId", "4756151840711136479"])
  	tp.push(['setPianoIdUrl', 'https://id.piano.io']);
    tp.push(["setEndpoint", 'https://buy.tinypass.com/api/v3']);
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
  	tp.push(["addHandler", "registrationSuccess", onRegistrationSuccess]);
  	tp.push(["addHandler", "logout", onLogout]);
  
    /* meter related */
    tp.push(["addHandler", "meterExpired", onMeterExpired]);
    tp.push(["addHandler", "meterActive", onMeterActive]);

    tp.push(["addHandler", "experienceExecute", onExperienceExecute]);
    tp.push(["addHandler", "experienceExecutionFailed", onExperienceExecutionFailed]);

    /* external checkout related events */
    tp.push(["addHandler", "externalCheckoutComplete", onExternalCheckoutComplete]);

  	tp.push([
    	"init",
    	function () {
      	// agregando cookie de sesión en storage en caso no se encuentre 
      	if (tp.pianoId.isUserValid()) {
        	try {
          	
          		const utpCookie = getCookie("__utp") || "";
          		if (
            		localStorage &&
            		!localStorage.getItem("_ps_user-token") &&
            		utpCookie
          		) {
            		localStorage.setItem("_ps_user-token", utpCookie);
          		}
        	} catch (err) {}
      	}

      	// validación para sesionar al usuario en caso tenga su token en storage
      	if (!tp.pianoId.isUserValid()) {
        	try {
          		const deploymentTag = document.querySelector(
            	'meta[name="deployment"]'
          		);
          		const deployment = deploymentTag
            	? deploymentTag.getAttribute("content")
            	: null;
          		const userToken = localStorage
            	? localStorage.getItem("_ps_user-token")
            	: null;
          		if (deploymentTag && deployment && userToken) {
            		const domain ="https://depor.com";
            		const url = "/pf/api/v3/content/fetch/verify-piano-user-token";
            		fetch(
              		`${domain}${url}?query=${encodeURI(
                	`{"token":"${userToken}"}`
              		)}&d=${deployment}`
            		)
              		.the))
              		.then((data = {}) => {
                		const { result } = data || {};
                		if (result === true) {
                  			// sesionandolo por token
                  			tp.pianoId.loginByToken(userToken);
                		} else {
                  			localStorage.removeItem("_ps_user-token");
                		}
              		})
              		.catc});
          		}
        	} catch (error) {}
      	}

      	tp.experience.init();
      },
  	]);
})();


    // do not change this section
    // |BEGIN INCLUDE TINYPASS JS|
   })("//cdn.tinypass.com/api/tinypass.min.js");
    // |END   INCLUDE TINYPASS JS|

