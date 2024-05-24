const cookie = initCookie(;

const options = {
  message: `<p>En cliquant sur accepter, vous acceptez notre <a href="https://mpublicite.fr/politique-de-confidentialite/">Politique de confidentialité</a> et l’utilisation de cookies pour vous proposer des contenus et services adaptés à vos centres d’intérêts. </p> <p> Vous pouvez librement donner, refuser ou retirer votre consentement à tout moment en accédant à notre <a id="switchpage">outil de paramétrage des cookies.</a></p>`,
  closeTime: 600,
  cookies: [
    {
      purpose: "analytics",
      name: "Cookies analytics",
      description:
        "Ces cookies permettent d’obtenir des statistiques de fréquentation anonymes du site M Publicité afin d’optimiser son ergonomie, sa navigation et ses contenus. En désactivant ces cookies, nous ne pourrons pas analyser le trafic du site M Publicité.",
      checked: false
    },
    {
      purpose: "ads",
      name: "Cookies de ciblage publicitaire",
      description:
        "Ces cookies permettent à M Publicité ou à ses partenaires de vous présenter les publicités les plus pertinentes et les plus adaptées à vos centres d’intérêt en fonction de votre navigation sur les sites de M Publicité. En désactivant ces cookies, des publicités sans lien avec vos centres d’intérêt supposés vous seront proposées sur les sites de M Publicité.",
      checked: false
    },
  ]
};

let config = typeof CMP_CONFIG !== "undefined" ? CMP_CONFIG : {
  features: ["analytics"]
}

console.log(coi(%[0-9A-Z]{2})+/g, decodeURIComponenitCookie(converter) {
  function api() {}

  function set(key, value, attributes) {
    if (typeof document === "undefined") {
      return;
    }

    attributes = extend(
      {
        path: "/",
      },
      api.defaults,
      attributes
    );

    if (typeof attributes.expires === "number") {
      attributes.expires = new Date(
        new Date() * 1 + attributes.expires * 864e5
      );
    }

    // We're using "expires" because "max-age" is not supported by IE
    attributes.expires = attributes.expires
      ? attributes.expires.toUTCString()
      : "";

    try {
      var result = JSON.stringify(value);
      if (/^[\{\[]/.test(result)) {
        value = result;
      }
    } catch (e) {
      console.log(e)
    }

    value = converter.write
      ? converter.write(value, key)
      : encodeURIComponent(String(value)).replace(
          /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
          decodeURIComponent
        );

    key = encodeURIComponent(String(key))
      .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
      .replace(/[\(\)]/g, escape);

    var stringifiedAttributes = "";
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue;
      }
      stringifiedAttributes += "; " + attributeName;
      if (attributes[attributeName] === true) {
        continue;
      }

      // Considers RFC 6265 section 5.2:
      // ...
      // 3.  If the remaining unparsed-attributes contains a %x3B (";")
      //     character:
      // Consume the characters of the unparsed-attributes up to,
      // not including, the first %x3B (";") character.
      // ...
      stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
    }

    return (document.cookie = key + "="  }

    return key ? jar[key] : jar;
  }

  api.set = set;
  api.get = function (key) {
    return get(key, falsern get(key, true
        expires: -1,
      })
    );
  };

  api.defaults = {};

  api.withConverter = init;

  return api;
}

function init() {
  firstVisit = cookie.get("madlab_cookie_manager") ? false : true;

  if (firstVisit) {
    showPopin();
  } else {
    addAllowedScripts()
  }
}

function addAllowedScripts() {
  options.cookies.forEach(cookieOption => {
    if (cookie.get(cookieOption.purpose) !== 'true' ) {
      return
    }

    const scripts = document.querySelectorAll(`[data-gdpr-purposes="${cookieOption.purpose}"]`)
    for (let i = 0; i < scripts.length; i++) {
      const script = scripts[i];
      if (script.hasAttribute("data-gdpr-src")) {
        script.src = script.getAttribute('data-gdpr-src')

        // TODO fix execution order src scripts
      }
      script.setAttribute('type', 'text/javascript')
      script.parentElement.insertBefore(script, script)
    }
  });
}

function closePopin(last) {
  lalast.parentElement.removeChild(last);
  }, options.closeTime);
  popin = null;
}

function showPopin() {
  if (popin) closePopin(popin);

  popin = document.createElement("div");
  popin.className = "cm-popin";

  function switchPage(page) {
    popin
      .que) => page.classList.remove("is-visible"));
    page.classList.toggle("is-visible");
  }

  // Page 1
  const pageOne = document.createElement("div");
  pageOne.className = "cm-page page-1";

  const paragraphs = document.createElement("div");
  paragraphs.innerHTML = options.message;

  const footer = document.createElement("div");
  footer.className = "cm-footer";

  const parameter = document.createElement("span");
  parameter.className = "cm-parameter";
  parameter.innerHTML = "Paramétrer les cookies";

  const deny = document.createElement("button");
  deny.className = "cm-btn cm-secondary";
  deny.innerHTML = "Refuser";
  deny.addEventListener(
    "click",
    () => {
      console.log('Tous les cookies ont été refusés.')
      save("none");
    },
    false
  );

  const ok = document.createElement("button");
  ok.className = "cm-btn cm-primary";
  ok.innerHTML = "Accep ont été acceptés.')
      save("all");
    },
    false
  );

  pageOne.appendChild(paragraphs);
  pageOne.appendChild(footer);

  footer.appendChild(parameter);
  footer.appendChild(deny);
  footer.appendChild(ok);

  popin.appendChild(pageOne);

  // Page 2
  const pageTwo = document.createElement("div");
  pageTwo.className = "cm-page page-2";

  const title = document.createElement("div");
  title.className = "cm-title";
  title.innerHTML = "Paramétrer les cookies";

  const consents = document.createElement("ul");
  consents.className = "cm-options";

  options.cookies.forEach((cookie) => {
    if (!config.features.includes(cookie.purpose)) return
    const consent = document.createElement("li");
    consent.className = "cm-option";

    const cookiesLine = document.createElement("div");
    cookiesLine.className = "cm-option-line";

    const cookieName = document.createElement("div");
    cookieName.className = "cm-cookie-name";
    cookieName.innerHTML = cookie.name;

    const switchEl = document.createElement("label");
    switchEl.className = "cm-option-switch";

    const checkbox = document.createElement("input");
    checkbox.className = "cm-option-checkbox";
    checkbox.type = "checkbox";

    checkbox.checked = cookie.checked;

    checkbox.addEventListener("change", function () {
      cookie.checked = !cookie.checked;
    });

    const slider = document.createElement("span");
    slider.className = "cm-option-slider";

    const cookieDescription = document.createElement("div");
    cookieDescription.className = "cm-cookie-description";
    cookieDescription.innerHTML = cookie.description;

    switchEl.appendChild(checkbox);
    switchEl.appendChild(slider);
    cookiesLine.appendChild(cookieName);
    cookiesLine.appendChild(switchEl);
    consent.appendChild(cookiesLine);
    consent.appendChild(cookieDescription);
    consents.appendChild(consent);
  });

  const pageTwoFooter = document.createElement("div");
  pageTwoFooter.classList.add("cm-footer");

  const goBack = document.createElement("span");
  goBack.className = "cm-parameter";
  goBack.innerHTdEventListener("click", () => switchPage(pageOne), false);

  const saveButton = document.createElement("button");
  saveButton.className = "cm-btn cm-primary";
  saveButton.innerHTML = "Enregistrer et continuer";
  saveButton.addEventListener("click", () => save(false), false);

  pageTwo.appendChild(title);
  pageTwo.appendChild(consents);

  pageTwo.appendChild(pageTwoFooter);
  pageTwoFooter.appendChild(goBack);
  pageTwoFooter.appendChild(saveButton);

  popin.appendChild(pageTwo);

  document.body.appendChild(popin);
  parameter.addEventListener(
    "click",
    () => {
      switchPage(pageTwo);
    },
    false
  );
  const switchpageEl = document.getElementById("switchpage")
  if (switchpageElck",
    () => {
      switchPage(pageTwo);
    },
    false
  );

  setTimeout(() => {
    popin.classList.add("open");
  }, 0);
}

function modifyConsent() {
  if (document.querySelector(".cm-popin")) return;
  popin = document.createElement("div");
  popin.className = "cm-popin";

  const pageTwo = document.createElement("div");
  pageTwo.className = "cm-page page-1";

  const title = document.createElement("div");
  title.className = "cm-title";
  title.innerHTML = "Paramétrer les cookies";

  const consents = document.createElement("ul");
  consents.className = "cm-options";

  options.cookies.forEach((cookie) => {
    if (!config.features.includes(cookie.purpose)) return
    const consent = document.createElement("li");
    consent.className = "cm-option";

    const cookiesLine = document.createElement("div");
    cookiesLine.className = "cm-option-line";

    const cookieName = document.createElement("div");
    cookieName.className = "cm-cookie-name";
    cookieName.innerHTML = cookie.name;

    const switchEl = document.createElement("label");
    switchEl.className = "cm-option-switch";

    const checkbox = document.createElement("input");
    checkbox.className = "cm-option-checkbox";
    checkbox.type = "checkbox";

    checkbox.checked = cookie() {
      cookie.checked = !cookie.checked;
    });

    const slider = document.createElement("span");
    slider.className = "cm-option-slider";

    const cookieDescription = document.createElement("div");
    cookieDescription.className = "cm-cookie-description";
    cookieDescription.innerHTML = cookie.description;

    switchEl.appendChild(checkbox);
    switchEl.appendChild(slider);
    cookiesLine.appendChild(cookieName);
    cookiesLine.appendChild(switchEl);
    consent.appendChild(cookiesLine);
    consent.appendChild(cookieDescription);
    consents.appendChild(consent);
  });

  const pageTwoFooter = document.createElement("div");
  pageTwoFooter.classList.add("cm-footer");

  const saveButton = document.createElement("button");
  saveButton.className = "cm-btn";
  saveButton.innerHTML = "Enregistrer et Button.addEventListener("click", () => save(false), false);

  pageTwo.appendChild(title);
  pageTwo.appendChild(consents);

  pageTwo.appendChild(pageTwoFooter);
  pageTwoFooter.appendChild(saveButton);

  popin.appendChild(pageTwo);
meout(() => {
    popin.classList.add("open");
  }, 0);
}

function save(accept) {
  if (popin) closePopin(popin);
  cookie.set("madlab_cookie_manager", true);
  options.cookies.forEach((c) => {
    if (accept === "all") {
      options.cookies.forEach(cookie => {
        cookie.checked = true
      })
    } 
    
    else if (cookie => {
        cookie.checked = false
      })
    }
    
    cookie.set(c.purpose, c.checked);
  });
  addAllowedScripts();
}
document.addEventListener('DOMContentLoaded', init, false)