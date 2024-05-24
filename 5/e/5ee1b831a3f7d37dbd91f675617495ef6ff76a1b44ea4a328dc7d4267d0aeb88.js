var pp_gemius_identifier = '.Wc65mb8JxPEJvKco1IyI4XxTIQpjVBJqa0Z32NagYH.Z7';
var pp_gemius_use_cmp = true;

// lines below shouldn't be edited
function gemius_pending(i) {
    window[i] = window[i] || function () {
        var x = window[i + '_pdata'] = window[i + '_pdata'] || [];
        x[x.length] = arguments;
    };
}

gemius_pending('gemius_hit');
gemius_pending('gemius_event');
gemius_pending('pp_gemius_hit');
gemius_pending('pp_gemius_event');
(function (d, t) {
    try {
        var gt = d.createElement(t),
            s = d.getElementsByTagName(t)[0];
        gt.setAttribute('async', 'async');
        gt.setAttribute('defer', 'defer');
        gt.src = 'https://gacz.hit.gemius.pl/xgemius.js';
        s.parentNode.insertBefore(gt, s);
    } catch (e) {
    }
})(document, 'script');ve the ourself to not get called more than once
    __tcfapi('removeEventListener', 2, (success) => {
      if(success) {
        // OK
        console.log("tcData:", tcData);
        console.log("tcData.consents:", tcData.purpose.consents);
        if (tcData.purpose.consents && tcData.purpose.consents.constructor.name === "Object") {
          Object.assign(tcfConsents, tcData.purpose.consents);
          console.log("tcfConsents - nacteno");
          console.log("tcfConsents updated:", tcfConsents);

          // gemius
          if (tcfConsents[9] === true) {
            const gScript = document.createElement('script');
            gScript.setAttribute('src','https://css.ceskenoviny.cz/css/cookieconsent/gemius.js');
            document.body.appendChild(gScript);
            console.log("gemius script created");
          } else {
            console.log("gemius not consent");
          }
          // gemius konec

          // incomaker
          /* if (tcfConsents[9] === true) {
            const incScript = document.createElement('script');
            incScript.setAttribute('src','https://dg.incomaker.com/tracking/resources/js/INlib.js?accountUuid=7bc48aa2-a11c-4039-819b-7410c3e24667&pluginUuid=5f4b1dda-5f9e-4b92-966a-4363f071c49e');
            document.body.appendChild(incScript);
            console.log("incom script created");
          } else {
            console.log("incom not consent");
          } */
          // incomaker konec

          // kontrola souhlasu pro google reklamy
          // div-gpt-ad-1439559550514-0 = CN15_hp_300x300_1
          if (!tcfConsents[1] || tcfConsents[1] === false) {
            if (document.readyState !== 'loading') {
              console.log("consent - page already loaded");
              adNewZones();
            } else {
              console.log("consent - page loading");
              document.addEventListener('DOMContentLoaded', function() {
                addNewZones();
              }, false);
            }
          }
        }
      }
    }, tcData.listenerId);
  } else {
    // do something else
    console.log("tcData - failed");
    console.log("tcData.eventStatus:", tcData.eventStatus);
  }
}
const tcfConsents = {};
__tcfapi('addEventListener', 2, callback);