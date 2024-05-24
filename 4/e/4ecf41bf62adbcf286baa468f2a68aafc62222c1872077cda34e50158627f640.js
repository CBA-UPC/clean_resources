
(function () {
  tp = window["tp"] || [];
  dataLayer = window["dataLayer"] || [];

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

  const LS = window.localStorage;
  const WL = window.location;
  const URL_PIANO = "https://buy.tinypass.com";
  const PATH_CS = "/pf/api/v3/content/fetch/";

  const mediosCompra = {
    OTQ5ENLOVQ9G: "landing",
    OTECFVL5L5K4: "premium",
    organico: "organico",
    callcenter: "callcenter",
    winback: "winback",
    extranjeros: "extranjeros",
    universitarios: "universitarios",
    colaboradores: "colaboradores",
    corporativos: "corporativos",
    alianzacorporativa: "alianzacorporativa",
    ahorro: "ahorro",
    "paywall60-100": "paywall",
    "paywall-estandar": "paywall",
    none: "otros",
    descuentos: "descuentosexclusivos",
    promociones: "promociones",
  };

  const periodosCompra = {
    month: "Mensual",
    year: "Anual",
    "1 month": "Mensual",
    "3 months": "Trimestral",
    "6 months": "Semestral",
    "1 year": "Anual",
    none: "Otros",
  };

  const isPathSubs = WL.pathname.split("/")[1] === "suscripciones";
  const isOnlyPathSubs = WL.pathname === "/suscripciones/";
  const isOnlyDiscount = WL.pathname === "/suscripciones/descuentosexclusivos/";
  const isPromociones = WL.pathname === "/suscripciones/promociones/";
  let DATA_PIANO_TERM = {};
  let TERM_CART_SELECTED = null;

  const getTimeTransaction = () => {
    const localDate = new Date();
    localDate.setHours(localDate.getHours() - 5);
    return `${localDate.toISOString().split(".")[0]}`;
  };

  const getPianoTerm = (termId) => {
    if (DATA_PIANO_TERM.result) {
      return DATA_PIANO_TERM;
    } else {
      return fetch(
        `${PATH_CS}get-piano-term?query=${encodeURI(`{"termId":"${termId}"}`)}`,
        { cache: "no-store" }
      ).then((response) => response.json());
    }
  };

  const stepToStep = async (termId, step, param3) => {
    if (termId === "TMHQF8PUI85M") return;

    if (isOnlyPathSubs || isOnlyDiscount || isPromociones) {
      const templateId = LS.getItem("pianoTemplateId") || "none";
      DATA_PIANO_TERM = await getPianoTerm(termId);

      const { result, name, period } = DATA_PIANO_TERM || {};
      let clearName = name.trim();
      clearName = clearName.toLowerCase();
      clearName = clearName.replace(" ", "_");

      if (result === "termId not found") return;

      const dataStep = {
        event: "pasarela_suscripciones_digitales",
        ec_plan: `${step}_${clearName}`,
        ec_periodo: periodosCompra[period],
        ec_medio: mediosCompra[templateId],
        ec_info: undefined,
        ec_error: undefined,
        ec_ingreso: undefined,
      };

      switch (step) {
        case "p2":
          dataStep.ec_ingreso = param3;
          break;
        case "p2.5":
          dataStep.ec_info = param3;
          dataStep.ec_ingreso = "Login";
          break;
        case "p2.6":
          dataStep.ec_info = param3;
          break;
        case "p2.7":
          dataStep.ec_error = param3;
          break;
        case "p3.5":
          dataStep.ec_error = param3.toLowerCase();
          dataStep.ec_plan = `${step}_${clearName}_cancelado`;
          break;
        case "p4":
          dataStep.ec_tarjeta = param3.toLowerCase();
          break;
      }

      if (
        templateId === "organico" ||
        templateId === "descuentos" ||
        templateId === "promociones" ||
        mediosCompra[templateId] === "landing"
      ) {
        dataLayer.push(dataStep);
        // console.log(
        //   "%c TAGGEO > " + step,
        //   "color: #2876f1; font-weight: bold",
        //   dataStep
        // );
      }
    }
  };

  const GA4Ecommerce = async (nameEvent, termId) => {
    if (isOnlyPathSubs || isOnlyDiscount || isPromociones) {
      DATA_PIANO_TERM = await getPianoTerm(termId);
      const { name, period, priceValue, rid } = DATA_PIANO_TERM || {};
      const templateId = LS.getItem("pianoTemplateId") || "none";

      const dataGA4 = {
        currency: "PEN",
        items: [
          {
            item_id: rid,
            item_name: name,
            item_brand: "elcomercio",
            item_category: periodosCompra[period],
            price: priceValue,
            currency: "PEN",
            quantity: 1,
          },
        ],
        value: priceValue,
      };

      if (nameEvent === "add_payment_info") {
        dataGA4.payment_type = "Credit/Debit Card";
      }

      dataLayer.push({ ecommerce: null });
      dataLayer.push({
        event: nameEvent,
        ecommerce: dataGA4,
        transaction_period: periodosCompra[period],
        transaction_medium: mediosCompra[templateId],
      });
      // console.log(
      //   "%c TAGGEO GA4 > " + nameEvent,
      //   "color: #74017a; font-weight: bold",
      //   dataGA4
      // );
    }
  };

  function captureInputBlur({ origin, data }) {
    const termCartCurrent = LS.getItem("_ps_user-cart");
    if (origin === URL_PIANO && data) {
      const dataError = JSON.parse(data);
      if (!dataError) return;
      const { event } = dataError || {};

      if (event === "inputBlur" && termCartCurrent !== TERM_CART_SELECTED) {
        GA4Ecommerce("add_to_cart", TERM_CART_SELECTED);
        LS.setItem("_ps_user-cart", TERM_CART_SELECTED);
        window.removeEventListener("message", captureInputBlur);
      }
    }
  }

  function captureEventsPiano({ origin, data }) {
    if (origin === URL_PIANO && data) {
      const dataError = JSON.parse(data);
      if (!dataError) return;
      const { event = "", params = {} } = dataError || {};
      const { eventCategory = "", message = "" } = params || {};

      if (event === "emitGAEvent" && eventCategory === "promoApplied") {
        stepToStep(TERM_CART_SELECTED, "p2.6", "cupon valido");
      }
      if (event === "emitGAEvent" && eventCategory === "promoInvalid") {
        stepToStep(TERM_CART_SELECTED, "p2.7", "cupon invalido");
      }

      if (event === "checkoutPaymentError") {
        const nameError = message || "Error de Pago Piano";
        const userPiano = tp.pianoId.getUser() || {};

        if (nameError.match(/requiere|requerido/)) return;

        stepToStep(TERM_CART_SELECTED, "p3.5", nameError);

        const {
          aud = "",
          uid = "",
          email = "",
          firstName = "",
          lastName = "",
          valid = false,
        } = userPiano;

        if (typeof window.Sentry !== "object") return;

        Sentry.configureScope((scope) => {
          scope.setTag("aud", aud || "none");
          scope.setTag("email", email || "none");
          scope.setTag("step", "Pago");
          scope.setUser({
            id: uid,
            name: firstName + " " + lastName,
            email,
            valid,
          });
        });
        Sentry.addBreadcrumb({
          type: "info",
          category: "pago",
          message: "realizando flujo de pago Piano",
          data: {},
          level: "info",
        });
        Sentry.captureEvent({
          message: nameError,
          level: "error",
          extra: dataError || {},
        });
      }
    }
  }

  function onStartCheckout({ type, termId }) {
    switch (type) {
      case "payment": {
        // mostrar taggeo P1
        stepToStep(termId, "p1");

        setTimeout( 800);

        if (!tp.user.isUserValid()) return;

        setTimeout(function () {
          // mostrar taggeo p2 si esta logueado
          stepToStep(termId, "p2", "Login");
          GA4Ecommerce("view_item", termId);
        }, 1200);

        const userInfo = tp.pianoId.getUser();
        const { firstName, lastName } = userInfo || {};
        if (firstName && lastName) break;

        // sólo si falta firstName o lastName
        tp.offer.close();

        // template para pedir que complete sus datos
        setTimeout, 500);
        break;
      }
      default:
    }
  }

  function onCheckoutComplete({ chargeAmount, rid, termId }) {
    if (termId == "TMHQF8PUI85M") return;

    const templateId = LS.getItem("pianoTemplateId") || "none";
    const dataUser = tp.pianoId.getUser();
    const { uid } = dataUser || {};

    fetch(
      `${PATH_CS}get-piano-subscriptions-v2?query=${encodeURI(
        `{"uid":"${uid}"}`
      )}`,
      { cache: "no-store" }
    )
      .then((res) => res.json())
      .then(({ user_payment, term, promo_code }) => {
        const { name = "", payment_billing_plan_table = [] } = term;
        const { user_payment_id = "", payment_method = "" } = user_payment;
        const methodPay = payment_method.split(" ")[0];
        const periodSub = payment_billing_plan_table[0]
          ? payment_billing_plan_table[0].billingPeriod
          : "none";

        const dataPurchase = {
          transaction_id: user_payment_id,
          value: chargeAmount,
          tax: 0,
          shipping: 0,
          currency: "PEN",
          items: [
            {
              item_name: name.trim(),
              item_id: rid,
              price: chargeAmount,
              item_brand: "elcomercio",
              item_category: periodosCompra[periodSub],
              quantity: 1,
            },
          ],
          transaction_date: getTimeTransaction(),
          transaction_period: periodosCompra[periodSub],
          transaction_medium: mediosCompra[templateId],
          transaction_page: WL.href,
        };

        const dataPaywall = {
          event: "tag_signwall",
          eventCategory: "",
          eventAction: "",
          eventLabel: uid,
        };
        switch (templateId) {
          case "paywall60-100":
            dataPaywall.eventCategory = "Web_Paywall_Dinamico_60100";
            dataPaywall.eventAction = "web_paywall_dinamico_60100_pago";
            dataLayer.push(dataPaywall);
            break;

          case "paywall-estandar":
            dataPaywall.eventCategory = "Web_Paywall_Estandar";
            dataPaywall.eventAction = "web_paywall_estandar_pago";
            dataLayer.push(dataPaywall);
            break;
        }

        setTimeout(function () {
          // mostrar taggeo p4
          stepToStep(termId, "p4", "tarjeta_" + methodPay);

          dataLayer.push({ ecommerce: null });
          dataLayer.push({
            coupon: promo_code ? promo_code.code : undefined,
            event: "purchase",
            ecommerce: dataPurchase,
          });
          // console.log(
          //   "%c TAGGEO GA4 > purchase",
          //   "color: #74017a; font-weight: bold",
          //   dataPurchase
          // );
        }, 800);

        setTimeout, 1000);
      });
  }

  function onCheckoutExternalEvent({ eventName }) {
    // redirección para cuando se ejecuta una oferta y el usuario no tiene nombre y/o apellido
    if (eventName === "cta-required-profile-updated") {
      window.open("/mi-cuenta/", "_blank");
    }
  }

  function onCheckoutClose({ state }) {
    //clear Piano Term & Cart
    DATA_PIANO_TERM = {};
    TERM_CART_SELECTED = null;

    // clear event message promo code
    window.removeEventListener("message", captureInputBlur, false);
    window.removeEventListener("message", captureEventsPiano, false);

    /* Default behavior is to refresh the page on successful checkout */
    if (state == "checkoutCompleted") {
      WL.reload();
    }
  }

  function onLoginSuccess({
    user_token,
    source,
    termId,
    registration,
    params,
  }) {
    // seteando en storage el token de usuario
    try {
      LS.setItem("_ps_user-token", user_token);
    } catch (err) {
      console.log(err);
    }

    // mostrar taggeo p2
    if (source === "OFFER" && termId) {
      const typeAuth = registration ? "Registro" : "Login";
      stepToStep(termId, "p2", typeAuth);
      GA4Ecommerce("view_item", termId);
    }

    // validación para refrescar la página cuando se autentica por un template y no oferta
    const { confirmed } = params || {};
    if (confirmed) {
      if (termId) {
        return;
      } else {
        if (WL.pathname.startsWith("/verificacion/")) {
          return;
        } else {
          WL.reload();
        }
      }
    } else {
      const buttonTemplate = document.querySelector(
        ".tp-iframe-wrapper.tp-active.piano-id-modal-ver-.piano-id-modal-ver-2 .tp-close.tp-active"
      );
      if (buttonTemplate) {
        buttonTemplate.addEventListener("clic  });
      }
    }
  }

  function onLogout(event) {
    // removiendo de storage el token de usuario
    try {
      LS.removeItem("_ps_user-token");
    } catch (err) {
      console.log(err);
    }
  }

  /* Callback executed if external checkout has been completed successfully *  }

  function onCheckoutSelectTerm({ termId }) {
    if (!tp.user.isUserValid()) return;

    // asignar id de término de registro
    if (termId == "TMHQF8PUI85M") return;

    // cargar termId a Variable
    TERM_CART_SELECTED = termId;

    // de aqui en adelante es cuando es un termino de pago
    const userInfo = tp.pianoId.getUser();
    if (userInfo.firstName && userInfo.lastName) return;
    tp.offer.close();
    tp.template.show({ templateId: "OT4VNIOCCYTA" });
  }

  function onShowOffer(event) {
    const routeMaps = [
      { ruta: "/cc/digital/", medio: "callcenter" },
      { ruta: "/winback/", medio: "winback" },
      { ruta: "/extranjeros/", medio: "extranjeros" },
      { ruta: "/universitarios/", medio: "universitarios" },
      { ruta: "/colaboradores/", medio: "colaboradores" },
      { ruta: "/corporativos/", medio: "corporativos" },
      { ruta: "/alianzacorporativa/", medio: "alianzacorporativa" },
      { ruta: "/cc/digital/ahorro_anual/", medio: "ahorro" },
      { ruta: "/descuentosexclusivos/", medio: "descuentos" },
      { ruta: "/promociones/", medio: "promociones" },
    ];
    if (isPathSubs) {
      routeMaps.map((item) => {
        if (WL.href && WL.href.match(item.ruta)) {
          LS.setItem("pianoTemplateId", item.medio);
        }
        return false;
      });
    }
  }

  function onCheckoutStateChange({ stateName }) {
    if (stateName === "alreadyHasAccess") {
      setTim   }, 1600);
    }

    if (stateName === "state2") {
      // iniciar captura input blur
      window.addEventListener("message", captureInputBlur, false);
      // iniciar captura eventos piano
      window.addEventListener("message", captureEventsPiano, false);
    }
  }

  function onSubmitPayment({ term }) {
    const { termId } = term || {};
    if (!termId) return;

    // mostrar taggeo p3
    stepToStep(termId, "p3");
    GA4Ecommerce("add_payment_info", termId);
  }

  tp.push(["setAid", "Enoqbpnkpu"]);
  tp.push(["setCxenseSiteId", "1151011768716023417"]);
  tp.push(["setPianoIdUrl", "https://id.piano.io"]);
  tp.push(["setEndpoint", "https://buy.tinypass.com/api/v3"]);
  tp.push(["setUseTinypassAccounts", false]);
  tp.push(["setUsePianoIdUserProvider", true]);

  /* checkout related events */
  tp.push(["addHandler", "startCheckout", onStartCheckout]);
  tp.push(["addHandler", "checkoutComplete", onCheckoutComplete]);
  tp.push(["addHandler", "checkoutClose", onCheckoutClose]);
  tp.push(["addHandler", "checkoutCustomEvent", onCheckoutExternalEvent]);

  /* user login events */
  tp.push(["addHandler", "loginSuccess", onLoginSuccess]);
  tp.push(["addHandler", "logout", onLogout]);

  /* external checkout related events */
  tp.push([
    "addHandler",
    "externalCheckoutComplete",
    onExternalCheckoutComplete,
  ]);
  tp.push(["addHandler", "checkoutSelectTerm", onCheckoutSelectTerm]);
  tp.push(["addHandler", "showOffer", onShowOffer]);
  tp.push(["addHandler", "checkoutStateChange", onCheckoutStateChange]);
  tp.push(["addHandler", "submitPayment", onSubmitPayment]);

  // Script agregado a pedido de piano
  tp.push(["setCookieDomain", "elcomercio.pe"]);

  tp.push([
    "init",
    function () {
      // agregando integración Google Analytics 4
      if (isOnlyPathSubs) {
        tp.setExcludedGAEvents({
          experienceExecute: true,
          meterActive: true,
          meterExpired: true,
          beforeBrowserEvent: true,
          setResponseVariable: true,
          showOffer: true,
          showTemplate: true,
          termSelected: true,
          checkoutCustomEvent: true,
          checkoutStateChange: true,
          receiptDisplayed: true,
        });

        tp.setGA4Config({
          measurementId: "G-NNH3LH5HP2", //PROD
          // measurementId: "G-YETZTZ6MCH", //JAB
        });
      }

      // agregando cookie de sesión en storage en caso no se encuentre
      if (tp.pianoId.isUserValid()) {
        try {
        }
          const utpCookie = getCookie("__utp") || "";
          if (LS && !LS.getItem("_ps_user-token") && utpCookie) {
            LS.setItem("_ps_user-token", utpCookie);
          }
        } catch (err) {}
      }

      // validación para sesionar al usuario en caso tenga su token en storage
      if (!tp.pianoId.isUserValid()) {
        try {
          const userToken = LS && LS.getItem("_ps_user-token");
          if (userToken) {
            fetch(
              `${PATH_CS}verify-piano-user-token?query=${encodeURI(
                `{"token":"${userToken}"}`
              )}`,
              { cache: "no-store" }
            )
            .json())
              .then(({ result }) => {
                if (result === true) {
                  // sesionandolo por token
                  tp.pianoId.loginByToken(userToken);
                } else {
                  LS.removeItem("_ps_user-token");
                }
              })
                   });
          }
        } catch (error) {}
      }

      tp.experience.init();
    },
  ]);
})();


    // do not change this section
    // |BEGIN INCLUDE TINYPASS Je(a,b)})("//cdn.tinypass.com/api/tinypass.min.js");
    // |END   INCLUDE TINYPASS JS|
