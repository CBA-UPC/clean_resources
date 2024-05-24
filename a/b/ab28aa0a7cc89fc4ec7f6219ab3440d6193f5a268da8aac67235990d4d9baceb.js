<!DOCThttps://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KFPLMHC');</script>
  </head>
  <body>
    <script nonce="OdvpzLCMCkffEQeEvOMkPt0CZnxY3R">
      window.addEventListener('message', function(event) {
        
        if (event.origin != 'https://firebase.google.com'
            && event.origin != 'https://firebase.google.cn') {
          return;
        };
        window['dataLayer'].push(event.data);
      });
    </script>
  </body>
</html>on(x){a[x]=function(){b(x,arguments)}});
        window.devsite={framebox:{AutoSizeClient:a}};
      })();
      
      (function(d,e,v,s,i,t,E){d['GoogleDevelopersObject']=i;
        t=e.createElement(v);t.async=1;t.src=s;E=e.getElementsByTagName(v)[0];
        E.parentNode.insertBefore(t,E);})(window, document, 'script',
        'https://www.gstatic.com/devrel-devsite/prod/v9e9ed563928734913447a8850ccb7e26986365be22242b631904a5bd14e09639/firebase/js/app_loader.js', '[4,"es_419",null,"/js/devsite_app_module.js","https://www.gstatic.com/devrel-devsite/prod/v9e9ed563928734913447a8850ccb7e26986365be22242b631904a5bd14e09639","https://www.gstatic.com/devrel-devsite/prod/v9e9ed563928734913447a8850ccb7e26986365be22242b631904a5bd14e09639/firebase","https://firebase-dot-devsite-v2-prod.appspot.com",1,1,null,1,null,[1,6,8,12,14,17,21,25,40,50,52,63,70,75,76,80,87,91,92,93,97,98,100,101,102,103,104,105,107,108,109,110,111,112,113,115,117,118,120,122,124,125,126,127,129,130,131,132,133,134,135,136,138,140,141,144,147,148,149,150,151,152,154,155,156,157,158,159,161,163,164,165,168,169,170,172,173,179,180,182,183,186,190,191,193,196],"AIzaSyAP-jjEJBzmIyKR4F-3XITp8yM9T1gEEI8","AIzaSyB6xiKGDR5O3Ak2okS4rLkauxGUG7XP0hg","firebase.google.com","AIzaSyAQk0fBONSGUqCNznf6Krs82Ap1-NV6J4o","AIzaSyCCxcqdrZ_7QMeLCRY20bh_SXdAYqy70KY",null,null,null,["MiscFeatureFlags__enable_keyword_inheritance","Profiles__enable_developer_profiles_dashboard_recommendations","Cloud__enable_cloudx_experiment_ids","Profiles__enable_inferred_interests","Profiles__require_profile_eligibility_for_signin","MiscFeatureFlags__content_publisher_push_queue","Cloud__enable_cloud_dlp_service","MiscFeatureFlags__enable_dark_theme","Profiles__enable_public_developer_profiles","Profiles__enable_release_notes_notifications","Search__enable_suggestions_from_borg","Search__enable_dynamic_content_confidential_banner","ContentExcellence__enable_googler_button","MiscFeatureFlags__developers_footer_image","MiscFeatureFlags__enable_firebase_utm","Localization__enable_locale_redirects","Cloud__enable_cloud_shell","BookNav__enable_tenant_cache_key","BookNav__enable_book_nav_filtering","Cloud__enable_cloud_shell_fte_user_flow","SignIn__enable_auto_signin_oauth","Significatio__enable_by_tenant","MiscFeatureFlags__enable_project_variables","Badges__enable_drag_and_drop_badges","Concierge__enable_pushui","Profiles__enable_developer_profiles_callout","Experiments__reqs_query_experiments","BookNav__enable_collapsible_book_nav","Cloud__enable_free_trial_server_call","ContentExcellence__enable_verified_date","Profiles__enable_profile_communities","Cloud__enable_cloudx_ping","Concierge__enable_concierge","OpenInReplit__enable_replit","Cloud__enable_cloud_facet_chat","Profiles__enable_awarding_url","Search__enable_page_map","MiscFeatureFlags__enable_explain_this_code","Profiles__enable_profile_collections","AuthorPageInsights__enable_author_page_insights","Profiles__enable_profile_notifications_ui","MiscFeatureFlags__developers_footer_dark_image","Significatio__enable_experiment_id_caching","Badges__enable_hide_badges","Search__enable_faceted_search","Profiles__enable_page_saving"],null,null,"AIzaSyBLEMok-5suZ67qRPzx0qUtbnLmyT_kCVE","https://developerscontentserving-pa.googleapis.com","AIzaSyCM4QpTRSqP5qI4Dvjt4OAScIN8sOUlO-k","https://developerscontentsearch-pa.googleapis.com",2,2]')
      
      </script>
    
  </head>
  
  <body style="height: auto; overflow: hidden; padding: 16px;"
        appearance>
    <meta name="suppress_site_styles" content="true" /><meta name="auto_height" content="true" /><meta name="auto_width" content="true" />
       <html>
        <head>
         <link href="https://firebase.google.com/static/styles/main.css?hl=es-419" rel="stylesheet"/>
         <script defer="true" src="https://firebase.google.com/site-assets/material.min.js?hl=es-419">
         </script>
         <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
         <script>
          /**
 * @fileoverview Pricing calculator for Firebase APIs.
 * @author afshar@google.com (Ali Afshar)
 */

// List of the calculator elements.
// TODO: add back 'us', 'other' to phone-auth
// once pricing is updated
const fbCalculatorElements = {
  database: ['storage', 'transfer'],
  firestore: ['storage', 'writes', 'reads', 'deletes'],
  file: ['storage', 'transfer', 'operations'],
  functions: [
    'invocations',
    'gb-transfer',
    'cpu',
    'network',
    'cloud-build',
    'container-storage',
  ],
  'phone-auth': ['mau-exclude', 'mau'],
  hosting: ['storage', 'transfer'],
  test: ['virtual', 'physical'],
  mlkit: ['vision'],
};

// Minimum dollar amount at which cents are no longer displayed.
// b/123255015
var CENT_DISPLAY_CUTOFF = 100;

/**
 * Updates the manual amount price input
 * @param {Object} e
 */
function inputNewPrice(e) {
  // Get the related price slider element
  const id = e.target.id.substr(0, e.target.id.length - 6);
  const rangeElement = document.getElementById(id);

  // convert input value to a number
  const inputValue = convertDisplayValueToInt(e.target.value);

  // Updates the Material slider UI
  rangeElement.value = inputValue;
  const changeEvent = new MouseEvent('change', { view: window });
  rangeElement.dispatchEvent(changeEvent);

  // update input with the updated readable value, with commas
  e.target.value = getInputDisplayValue(inputValue, rangeElement.max);
  setQuantityInputWidth(e.target);
}

/**
 * Formats the amount to display cents only up to the min cutoff.
 * @param {string} value Current dollar amount to format.
 * @return {number}
 */
function convertDisplayValueToInt(value) {
  const inputValue = value.replace(/\D/g, '');
  return inputValue ? parseInt(inputValue) : 0;
}

/**
 * Formats the price input value with commas and + if the number exceeds max value.
 * @param {number} value
 * @param {number} max
 * @return {string}
 */
function getInputDisplayValue(value, max) {
  const maxedOut = value >= max;
  return maxedOut
    ? `${addCommas(formatCents(max))}+`
    : addCommas(formatCents(value));
}

/**
 * Updates the slider's value, which in turn updates input and price
 * @param {Object} e
 */
function updateSlider(e) {
  // Get the related input element
  const id = e.target.id + '-total';
  const totalElement = document.getElementById(id);
  totalElement.value = getInputDisplayValue(
    parseInt(e.target.value),
    e.target.max
  );
  fbUpdatePrices();
}

/**
 * Updates all the prices of the pricing elements.
 *
 * Since all the elements are named in a schema, they are easily found from the
 * fbCalculatorElements list.
 */
function fbUpdatePrices() {
  var totalCalculator = 0;
  var totalCalculatorElement = document.getElementById('fb-calculator-total');
  for (k in fbCalculatorElements) {
    var groupId = 'fb-' + k;
    var groupElement = document.getElementById(groupId + '-cost');
    var groupTotal = 0;
    for (var i = 0; i < fbCalculatorElements[k].length; i++) {
      var rootId = groupId + '-' + fbCalculatorElements[k][i];
      var rangeElement = document.getElementById(rootId);
      var totalElement = document.getElementById(rootId + '-total');
      var summaryElement = document.getElementById(rootId + '-summary');
      var costElement = document.getElementById(rootId + '-cost');
      var total = convertDisplayValueToInt(totalElement.value);
      totalElement.value = getInputDisplayValue(total, rangeElement.max);
      setQuantityInputWidth(totalElement);
      var summary = total * rangeElement.getAttribute('data-summaryMultiplier');
      if (summaryElement) {
        summaryElement.textContent = addCommas(formatCents(summary));
      } else {
        // Special case for storage-operations
        var putsElement = document.getElementById(rootId + '-summary-puts');
        var getsElement = document.getElementById(rootId + '-summary-gets');
        if (putsElement && getsElement) {
          var puts = Math.floor(summary * 0.1);
          var gets = summary - puts;
          putsElement.textContent = addCommas(formatCents(puts));
          getsElement.textContent = addCommas(formatCents(gets));
        }
      }
      var freeAllotment = fbGetFreeAllotment(rangeElement);
      var priceRange = rangeElement.getAttribute('data-costMultiplierRange');

      var cost =
        Math.max(total - freeAllotment, 0) *
        (!priceRange
          ? rangeElement.getAttribute('data-costMultiplier')
          : getCost(JSON.parse(priceRange.replace(/'/g, '"')), total));

      costElement.textContent =
        cost > 0
          ? '$' +
            addCommas(formatCents(cost)) +
            (total == rangeElement.max ? '+' : '')
          : 'No cost';
      totalCalculator = totalCalculator + cost;
      groupTotal = groupTotal + cost;
    }
    groupElement.textContent =
      groupTotal > 0 ? '$' + addCommas(formatCents(groupTotal)) : 'No cost';
  }
  totalCalculatorElement.textContent =
    totalCalculator > 0
      ? '$' + addCommas(formatCents(totalCalculator))
      : 'No cost';

  // hide/show reset button
  var resetButtonElement = document.getElementById(
    'fb-calculator-reset-button'
  );

  resetButtonElement.style.visibility =
    totalCalculator > 0 ? 'visible' : 'hidden';

  // set global table class
  var calculatorElement = document.getElementById('fb-calculator');
  if (totalCalculator > 0) {
    calculatorElement.classList.remove('fb-calculator-free');
  } else {
    calculatorElement.classList.add('fb-calculator-free');
  }
}

/**
 * Formats the amount to display cents only up to the min cutoff.
 * @param {number} amount Current dollar amount to format.
 * @return {number}
 */
function formatCents(amount) {
  if (amount >= CENT_DISPLAY_CUTOFF) {
    return Math.round(amount);
  }

  return amount.toFixed(2);
}

/**
 * Computes the free allotment for this element, either by reading the
 * "data-freeAllotment" attribute, or by computing the component of the free
 * allotment to use, in the event that the free allotment on this range is tied
 * to another element.
 *
 * @param {element} rangeElement
 * @return {number}
 */
function fbGetFreeAllotment(rangeElement) {
  var freeAllotment =
    parseInt(rangeElement.getAttribute('data-freeAllotment')) || 0;

  // Special case for free allotments that are shared amongst two ranges.
  if (rangeElement.hasAttribute('data-freeAllotmentTiedto')) {
    var partnerId = rangeElement.getAttribute('data-freeAllotmentTiedto');
    var partnerValue = document.getElementById(partnerId).value;
    freeAllotment = Math.max(0, freeAllotment - partnerValue);
  }

  return freeAllotment;
}

/**
 * Resets all sliders to their free allotment
 */
function fbResetAllSliders() {
  var sliders = document.querySelectorAll('.fb-calculator .mdl-slider');
  for (var i = 0; i < sliders.length; i++) {
    var slider = sliders[i];
    slider.MaterialSlider.change(0);

    // reset input element
    const id = slider.id + '-total';
    const totalElement = document.getElementById(id);
    totalElement.value = getInputDisplayValue(
      parseInt(slider.value),
      slider.max
    );
  }

  fbUpdatePrices();
}

/**
 * Adds commas to a string representation of a number.
 *
 * @param {string} number
 * @return {string}
 */
function addCommas(number) {
  number += '';
  x = number.split('.');
  x1 = x[0];
  // Special hack for number with .00 after it
  if (/0{2}/.test(x[1])) {
    x[1] = '';
  }
  x2 = x.length > 1 && x[1].length > 0 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}

/**
 * Sets width of quantity inputs based on current number of characters
 * @param {element} totalElement
 */
function setQuantityInputWidth(totalElement) {
  document.fonts.ready.then(() => {
    const displayValue = totalElement.value;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = '500 18px Google Sans';
    const { width } = context.measureText(displayValue);
    totalElement.style.width = Math.floor(width) + 12 + 'px';
  });
}

/**
 * Returns the price for specific range
 * @param {Array} priceRanges
 * @param {number} quantity
 * @return {number}
 */

function getCost(MultiplierRanges, quantity) {
  const prices = MultiplierRanges.map((a, i) => [
    Object.keys(MultiplierRanges[i])[0],
    Object.values(a)[0]['price'],
  ]);

  for (let i = 0; i < prices.length; i++) {
    if (quantity <= parseInt(prices[i][0])) {
      return prices[i][1];
    }
  }
}

/**
 * Initializes the calculator with event handlers.
 */
window.fbInitCalculator = function() {
  // event listeners for slider inputs
  for (k in fbCalculatorElements) {
    var groupId = 'fb-' + k;
    for (var i = 0; i < fbCalculatorElements[k].length; i++) {
      var rootId = groupId + '-' + fbCalculatorElements[k][i];
      var rangeElement = document.getElementById(rootId);
      rangeElement.addEventListener('input', updateSlider);
      rangeElement.addEventListener('change', updateSlider);
      var inputElement = document.getElementById(rootId + '-total');
      inputElement.addEventListener('input', inputNewPrice);
    }
  }

  // event listener for reset button
  var resetButtonElement = document.getElementById(
    'fb-calculator-reset-button'
  );

  resetButtonElement.addEventListener('click', fbResetAllSliders);

  fbUpdatePrices();
};
         </script>
        </head>
        <body class="fb-calculator-body">
         <section class="fb-calculator" id="fb-calculator">
          <section class="fb-calculator-item fb-calculator-header">
           <div class="fb-calculator-header-cell fb-calculator-header-reset-cell fb-calculator--top-left fb-calculator--top-right--mobile">
            <a class="fb-calculator-reset-button" id="fb-calculator-reset-button">
             Restablecer para usar de forma gratuita
            </a>
           </div>
           <section class="fb-calculator-header-cell fb-calculator-header-billing-cell fb-calculator--top-right fb-calculator--top-left--mobile">
            <div class="label">
             Los proyectos se facturan mensualmente
            </div>
           </section>
          </section>
          <section class="fb-calculator-item" id="fb-firestore">
           <header class="showalways">
            <div class="featureicon firesite-feature-icon">
             <i class="gmp-icons">
              gmp_firestore
             </i>
            </div>
            <h5 class="featuretitle">
             Cloud Firestore
            </h5>
            <div class="fb-calculator-item-cost">
             <span id="fb-firestore-cost">
              0
             </span>
            </div>
           </header>
           <section class="fb-calculator-rangeholder">
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell">
              <label for="fb-firestore-storage">
               GiB almacenado
              </label>
              <input class="mdl-slider mdl-js-slider" data-costmultiplier="0.18" data-freeallotment="1" data-summarymultiplier="20" id="fb-firestore-storage" max="5000" min="1" type="range" value="1"/>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell" id="fb-calculator-firestore-storage">
              <label class="fb-calculator-total">
               <div class="fb-quantity-wrapper">
                <input id="fb-firestore-storage-total" pattern="\d*" value="1"/>
                <span>
                 GiB
                </span>
               </div>
              </label>
              <div class="fb-calculator-summary">
               acerca de
               <span id="fb-firestore-storage-summary">
                0
               </span>
               mensajes de chat M
              </div>
              <div class="mdl-tooltip" for="fb-calculator-firestore-storage">
               at 50 bytes per chat message
              </div>
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell cost-border">
              <span id="fb-firestore-storage-cost">
               0
              </span>
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell">
              <label for="fb-firestore-writes">
               Escrituras de documentos
              </label>
              <input class="mdl-slider mdl-js-slider" data-costmultiplier="1.8e-06" data-freeallotment="600000" id="fb-firestore-writes" max="5000000000" min="600000" step="100000" type="range" value="600000"/>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell" id="fb-calculator-db-writes">
              <label class="fb-calculator-total">
               <div class="fb-quantity-wrapper">
                <input id="fb-firestore-writes-total" pattern="\d*" value="600000"/>
                <span>
                 operaciones de escritura
                </span>
               </div>
              </label>
              <div class="fb-calculator-summary">
               cantidad de veces que se escriben los datos
              </div>
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell">
              <span id="fb-firestore-writes-cost">
               0
              </span>
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell">
              <label for="fb-firestore-reads">
               Lecturas de documentos
              </label>
              <input class="mdl-slider mdl-js-slider" data-costmultiplier="6e-07" data-freeallotment="1500000" id="fb-firestore-reads" max="10000000000" min="1500000" step="100000" type="range" value="1500000"/>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell" id="fb-calculator-db-reads">
              <label class="fb-calculator-total">
               <div class="fb-quantity-wrapper">
                <input id="fb-firestore-reads-total" pattern="\d*" value="1500000"/>
                <span>
                 operaciones de lectura
                </span>
               </div>
              </label>
              <div class="fb-calculator-summary">
               cantidad de veces que se leen los datos
              </div>
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell">
              <span id="fb-firestore-reads-cost">
               0
              </span>
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell">
              <label for="fb-firestore-deletes">
               Eliminaciones de documentos
              </label>
              <input class="mdl-slider mdl-js-slider" data-costmultiplier="2e-07" data-freeallotment="600000" id="fb-firestore-deletes" max="10000000000" min="600000" step="100000" type="range" value="600000"/>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell" id="fb-calculator-db-deletes">
              <label class="fb-calculator-total">
               <div class="fb-quantity-wrapper">
                <input id="fb-firestore-deletes-total" pattern="\d*" value="600000"/>
                <span>
                 operaciones de borrado
                </span>
               </div>
              </label>
              <div class="fb-calculator-summary">
               cantidad de veces que se borran los datos
              </div>
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell">
              <span id="fb-firestore-deletes-cost">
               0
              </span>
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell fb-calculator-footnote">
              Don't forget to factor in Egress costs! See
              <a href="https://cloud.google.com/compute/pricing?hl=es-419#network" target="_blank">
               Google Cloud pricing
              </a>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell">
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell">
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
           </section>
          </section>
          <section class="fb-calculator-item" id="fb-database">
           <header class="showalways">
            <div class="featureicon firesite-feature-icon">
             <i class="gmp-icons">
              gmp_database
             </i>
            </div>
            <h5 class="featuretitle">
             Realtime Database
            </h5>
            <div class="fb-calculator-item-cost">
             <span id="fb-database-cost">
              0
             </span>
            </div>
           </header>
           <section class="fb-calculator-rangeholder">
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell">
              <label for="fb-database-storage">
               GB almacenados
              </label>
              <input class="mdl-slider mdl-js-slider" data-costmultiplier="5" data-freeallotment="1" data-summarymultiplier="20" id="fb-database-storage" max="100" min="1" type="range" value="1"/>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell" id="fb-calculator-db-storage">
              <label class="fb-calculator-total">
               <div class="fb-quantity-wrapper">
                <input id="fb-database-storage-total" pattern="\d*" value="1"/>
                <span>
                 GB
                </span>
               </div>
              </label>
              <div class="fb-calculator-summary">
               acerca de
               <span id="fb-database-storage-summary">
                0
               </span>
               mensajes de chat M
              </div>
              <div class="mdl-tooltip" for="fb-calculator-db-storage">
               at 50 bytes per chat message
              </div>
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell cost-border">
              <span id="fb-database-storage-cost">
               0
              </span>
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell">
              <label for="fb-database-transfer">
               GB transferidos
              </label>
              <input class="mdl-slider mdl-js-slider" data-costmultiplier="1" data-freeallotment="10" data-summarymultiplier="20" id="fb-database-transfer" max="1000" min="10" step="5" type="range" value="10"/>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell" id="fb-calculator-db-transfer">
              <label class="fb-calculator-total">
               <div class="fb-quantity-wrapper">
                <input id="fb-database-transfer-total" pattern="\d*" value="10"/>
                <span>
                 GB
                </span>
               </div>
              </label>
              <div class="fb-calculator-summary">
               acerca de
               <span id="fb-database-transfer-summary">
                0
               </span>
               mensajes de chat M
              </div>
              <div class="mdl-tooltip" for="fb-calculator-db-transfer">
               at 50 bytes per chat message
              </div>
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell">
              <span id="fb-database-transfer-cost">
               0
              </span>
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
           </section>
          </section>
          <section class="fb-calculator-item" id="fb-phone-auth">
           <header class="showalways">
            <div class="featureicon firesite-feature-icon">
             <i class="gmp-icons">
              gmp_auth
             </i>
            </div>
            <h5 class="featuretitle">
             Autenticación
            </h5>
            <div class="fb-calculator-item-cost">
             <span id="fb-phone-auth-cost">
              0
             </span>
            </div>
           </header>
           <section class="fb-calculator-rangeholder">
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell">
              <label class="calculator-header-label">
               Phone Auth - All regions
              </label>
              <label>
              </label>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell">
              <label class="fb-calculator-total">
               <div>
                Facturación por SMS enviado
               </div>
              </label>
              <div class="fb-calculator-summary">
               Consulta
               <a href="https://cloud.google.com/identity-platform/pricing?hl=es-419" rel="noopener noreferrer" target="_blank">
                las tarifas actuales
               </a>
              </div>
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell cost-border">
              <span>
               -
              </span>
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell">
              <label class="calculator-header-label" for="fb-phone-auth-mau-exclude">
               Identity Platform Pricing
              </label>
              <label for="fb-phone-auth-mau-exclude">
               Usuarios activos por mes (sin incluir SAML/OIDC)
              </label>
              <input class="mdl-slider mdl-js-slider" data-costmultiplierrange="[{'49999': {'price': 0}}, {'99999': {'price': 0.0055}}, {'999999': {'price': 0.0046}}, {'10000000': {'price': 0.0025}}]" data-freeallotment="50000" id="fb-phone-auth-mau-exclude" max="10000000" min="50000" step="10000" type="range" value="50000"/>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell with-header" id="fb-calculator-auth-mau-exclude">
              <label class="fb-calculator-total">
               <div class="fb-quantity-wrapper">
                <input id="fb-phone-auth-mau-exclude-total" pattern="\d*" value="50000"/>
                <span>
                 MAU
                </span>
               </div>
              </label>
              <div class="fb-calculator-summary">
               Usuarios activos por mes
              </div>
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell with-header">
              <span id="fb-phone-auth-mau-exclude-cost">
               0
              </span>
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell">
              <label for="fb-phone-auth-mau">
               Usuarios activos por mes: SAML/OIDC
              </label>
              <input class="mdl-slider mdl-js-slider" data-costmultiplier="0.015" data-freeallotment="50" id="fb-phone-auth-mau" max="10000" min="50" step="50" type="range" value="50"/>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell" id="fb-calculator-phone-auth-mau">
              <label class="fb-calculator-total">
               <div class="fb-quantity-wrapper">
                <input id="fb-phone-auth-mau-total" pattern="\d*" value="50"/>
                <span>
                 MAU
                </span>
               </div>
              </label>
              <div class="fb-calculator-summary">
               Usuarios activos por mes
              </div>
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell">
              <span id="fb-phone-auth-mau-cost">
               0
              </span>
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
           </section>
          </section>
          <section class="fb-calculator-item" id="fb-file">
           <header class="showalways">
            <div class="featureicon firesite-feature-icon">
             <i class="gmp-icons">
              gmp_storage
             </i>
            </div>
            <h5 class="featuretitle">
             Cloud Storage
            </h5>
            <div class="fb-calculator-item-cost">
             <span id="fb-file-cost">
              0
             </span>
            </div>
           </header>
           <section class="fb-calculator-rangeholder">
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell">
              <label for="fb-file-storage">
               GB almacenados
              </label>
              <input class="mdl-slider mdl-js-slider" data-costmultiplier="0.026" data-freeallotment="5" data-summarymultiplier="500" id="fb-file-storage" max="1000" min="5" step="5" type="range" value="5"/>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell" id="fb-calculator-storage-stored">
              <label class="fb-calculator-total">
               <div class="fb-quantity-wrapper">
                <input id="fb-file-storage-total" pattern="\d*" value="5"/>
                <span>
                 GB
                </span>
               </div>
              </label>
              <div class="fb-calculator-summary">
               acerca de
               <span id="fb-file-storage-summary">
                0
               </span>
               fotos en alta resolución
              </div>
              <div class="mdl-tooltip" for="fb-calculator-storage-stored">
               at 2MB per photo
              </div>
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell cost-border">
              <span id="fb-file-storage-cost">
               0
              </span>
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell">
              <label for="fb-file-transfer">
               GB transferidos
              </label>
              <input class="mdl-slider mdl-js-slider" data-costmultiplier="0.12" data-freeallotment="30" data-summarymultiplier="500" id="fb-file-transfer" max="1000" min="30" step="5" type="range" value="30"/>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell" id="fb-calculator-storage-transfer">
              <label class="fb-calculator-total">
               <div class="fb-quantity-wrapper">
                <input id="fb-file-transfer-total" pattern="\d*" value="30"/>
                <span>
                 GB
                </span>
               </div>
              </label>
              <div class="fb-calculator-summary">
               acerca de
               <span id="fb-file-transfer-summary">
                0
               </span>
               fotos en alta resolución
              </div>
              <div class="mdl-tooltip" for="fb-calculator-storage-transfer">
               at 2MB per photo
              </div>
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell">
              <span id="fb-file-transfer-cost">
               0
              </span>
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell">
              <label for="fb-file-operations">
               Operaciones (cargas y descargas)
              </label>
              <input class="mdl-slider mdl-js-slider" data-costmultiplier="8.6e-07" data-freeallotment="2100000" data-summarymultiplier="1" id="fb-file-operations" max="10000000" min="2100000" step="1000" type="range" value="2100000"/>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell" id="fb-calculator-storage-operations">
              <label class="fb-calculator-total">
               <div class="fb-quantity-wrapper">
                <input id="fb-file-operations-total" pattern="\d*" value="2100000"/>
                <span>
                 operaciones
                </span>
               </div>
              </label>
              <div class="fb-calculator-summary">
               acerca de
               <span id="fb-file-operations-summary-puts">
                0
               </span>
               cargas y;
               <span id="fb-file-operations-summary-gets">
                0
               </span>
               descargas
              </div>
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell">
              <span id="fb-file-operations-cost">
               0
              </span>
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
           </section>
          </section>
          <section class="fb-calculator-item" id="fb-functions">
           <header class="showalways">
            <div class="featureicon firesite-feature-icon">
             <i class="gmp-icons">
              gmp_functions
             </i>
            </div>
            <h5 class="featuretitle">
             Cloud Functions
            </h5>
            <div class="fb-calculator-item-cost">
             <span id="fb-functions-cost">
              0
             </span>
            </div>
           </header>
           <section class="fb-calculator-rangeholder">
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell">
              <label for="fb-functions-invocations">
               Invocaciones
              </label>
              <input class="mdl-slider mdl-js-slider" data-costmultiplier="4e-07" data-freeallotment="2000000" id="fb-functions-invocations" max="100000000" min="2000000" step="2000000" type="range" value="2000000"/>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell" id="fb-calculator-functions-invoked">
              <label class="fb-calculator-total">
               <div class="fb-quantity-wrapper">
                <input id="fb-functions-invocations-total" pattern="\d*" value="2000000"/>
                <span>
                 invocaciones
                </span>
               </div>
              </label>
              <div class="fb-calculator-summary">
               cantidad de veces que se invoca una función
              </div>
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell cost-border">
              <span id="fb-functions-invocations-cost">
               0
              </span>
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell">
              <label for="fb-functions-gb-transfer">
               GB-segundo
              </label>
              <input class="mdl-slider mdl-js-slider" data-costmultiplier="2.5e-06" data-freeallotment="400000" id="fb-functions-gb-transfer" max="10000000" min="400000" step="200000" type="range" value="400000"/>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell" id="fb-calculator-functions-gb-transferred">
              <label class="fb-calculator-total">
               <div class="fb-quantity-wrapper">
                <input id="fb-functions-gb-transfer-total" pattern="\d*" value="400000"/>
                <span>
                 GB-segundo
                </span>
               </div>
              </label>
              <div class="fb-calculator-summary">
               tiempo con 1 GB de memoria aprovisionada
              </div>
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell">
              <span id="fb-functions-gb-transfer-cost">
               0
              </span>
              <div class="firesite-tooltip__container absolute-table">
               <i aria-labelledby="firesite-tooltip" class="material-icons firesite-tooltip__icon">
                help
               </i>
               <div class="firesite-tooltip reversed absolute-table" id="firesite-tooltip" role="tooltip">
                <div class="firesite-tooltip__content-wrapper">
                 <span class="firesite-tooltip__content">
                  En esta estimación, se supone el precio regional del
                  <a href="https://cloud.google.com/functions/docs/locations?hl=es-419" rel="noopener noreferrer" target="_blank">
                   Nivel 1
                  </a>
                  . El precio regional del
                  <a href="https://cloud.google.com/functions/docs/locations?hl=es-419" rel="noopener noreferrer" target="_blank">
                   Nivel 2
                  </a>
                  puede generar un alto costo.
                  <a href="https://cloud.google.com/functions/pricing?hl=es-419" rel="noopener noreferrer" target="_blank">
                   Más información
                  </a>
                 </span>
                </div>
               </div>
              </div>
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell">
              <label for="fb-functions-cpu">
               CPU-segundo
              </label>
              <input class="mdl-slider mdl-js-slider" data-costmultiplier="1e-05" data-freeallotment="200000" id="fb-functions-cpu" max="10000000" min="200000" step="200000" type="range" value="200000"/>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell" id="fb-calculator-functions-cpu-used">
              <label class="fb-calculator-total">
               <div class="fb-quantity-wrapper">
                <input id="fb-functions-cpu-total" pattern="\d*" value="200000"/>
                <span>
                 CPU-segundo
                </span>
               </div>
              </label>
              <div class="fb-calculator-summary">
               tiempo con una CPU de 1 GHz aprovisionada
              </div>
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell">
              <span id="fb-functions-cpu-cost">
               0
              </span>
              <div class="firesite-tooltip__container absolute-table">
               <i aria-labelledby="firesite-tooltip" class="material-icons firesite-tooltip__icon">
                help
               </i>
               <div class="firesite-tooltip reversed absolute-table" id="firesite-tooltip" role="tooltip">
                <div class="firesite-tooltip__content-wrapper">
                 <span class="firesite-tooltip__content">
                  En esta estimación, se supone el precio regional del
                  <a href="https://cloud.google.com/functions/docs/locations?hl=es-419" rel="noopener noreferrer" target="_blank">
                   Nivel 1
                  </a>
                  . El precio regional del
                  <a href="https://cloud.google.com/functions/docs/locations?hl=es-419" rel="noopener noreferrer" target="_blank">
                   Nivel 2
                  </a>
                  puede generar un alto costo.
                  <a href="https://cloud.google.com/functions/pricing?hl=es-419" rel="noopener noreferrer" target="_blank">
                   Más información
                  </a>
                 </span>
                </div>
               </div>
              </div>
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell">
              <label for="fb-functions-network">
               Herramientas de redes (salida)
              </label>
              <input class="mdl-slider mdl-js-slider" data-costmultiplier="0.12" data-freeallotment="5" id="fb-functions-network" max="100" min="5" step="5" type="range" value="5"/>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell" id="fb-calculator-functions-network-used">
              <label class="fb-calculator-total">
               <div class="fb-quantity-wrapper">
                <input id="fb-functions-network-total" pattern="\d*" value="5"/>
                <span>
                 GB
                </span>
               </div>
              </label>
              <div class="fb-calculator-summary">
               transferencia de datos saliente
              </div>
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell">
              <span id="fb-functions-network-cost">
               0
              </span>
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell">
              <label for="fb-functions-cloud-build">
               Minutos de Cloud Build
              </label>
              <input class="mdl-slider mdl-js-slider" data-costmultiplier="0.003" data-freeallotment="120" id="fb-functions-cloud-build" max="1000" min="120" step="10" type="range" value="0"/>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell" id="fb-calculator-functions-cloud-build-used">
              <label class="fb-calculator-total">
               <div class="fb-quantity-wrapper">
                <input id="fb-functions-cloud-build-total" pattern="\d*" value="0"/>
                <span>
                 min
                </span>
               </div>
              </label>
              <div class="fb-calculator-summary">
               minutos empleados para crear Cloud Functions
              </div>
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell">
              <span id="fb-functions-cloud-build-cost">
               0
              </span>
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell">
              <label for="fb-functions-container-storage">
               Almacenamiento en contenedores
              </label>
              <input class="mdl-slider mdl-js-slider" data-costmultiplier="2.6e-05" id="fb-functions-container-storage" max="10000" min="0" step="250" type="range" value="0"/>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell" id="fb-calculator-functions-container-storage-used">
              <label class="fb-calculator-total">
               <div class="fb-quantity-wrapper">
                <input id="fb-functions-container-storage-total" pattern="\d*" value="0"/>
                <span>
                 MB
                </span>
               </div>
              </label>
              <div class="fb-calculator-summary">
               cantidad de almacenamiento para los contenedores de función
              </div>
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell">
              <span id="fb-functions-container-storage-cost">
               0
              </span>
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
           </section>
          </section>
          <section class="fb-calculator-item" id="fb-hosting">
           <header class="showalways">
            <div class="featureicon firesite-feature-icon">
             <i class="gmp-icons">
              gmp_hosting
             </i>
            </div>
            <h5 class="featuretitle">
             Hosting
            </h5>
            <div class="fb-calculator-item-cost">
             <span id="fb-hosting-cost">
              0
             </span>
            </div>
           </header>
           <section class="fb-calculator-rangeholder">
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell">
              <label for="fb-hosting-storage">
               GB almacenados
              </label>
              <input class="mdl-slider mdl-js-slider" data-costmultiplier="0.026" data-freeallotment="10" data-summarymultiplier="500" id="fb-hosting-storage" max="100" min="10" type="range" value="10"/>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell" id="fb-calculator-hosting-stored">
              <label class="fb-calculator-total">
               <div class="fb-quantity-wrapper">
                <input id="fb-hosting-storage-total" pattern="\d*" value="10"/>
                <span>
                 GB
                </span>
               </div>
              </label>
              <div class="fb-calculator-summary">
               acerca de
               <span id="fb-hosting-storage-summary">
                0
               </span>
               páginas de contenido estático
              </div>
              <div class="mdl-tooltip" for="fb-calculator-hosting-stored">
               at 2 MB average page weight
              </div>
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell cost-border">
              <span id="fb-hosting-storage-cost">
               0
              </span>
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell">
              <label for="fb-hosting-transfer">
               GB transferidos
              </label>
              <input class="mdl-slider mdl-js-slider" data-costmultiplier="0.15" data-freeallotment="10" data-summarymultiplier="500" id="fb-hosting-transfer" max="1000" min="10" step="5" type="range" value="10"/>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell" id="fb-calculator-hosting-transfer">
              <label class="fb-calculator-total">
               <div class="fb-quantity-wrapper">
                <input id="fb-hosting-transfer-total" pattern="\d*" value="10"/>
                <span>
                 GB
                </span>
               </div>
              </label>
              <div class="fb-calculator-summary">
               acerca de
               <span id="fb-hosting-transfer-summary">
                0
               </span>
               páginas de contenido estático
              </div>
              <div class="mdl-tooltip" for="fb-calculator-hosting-transfer">
               at 2 MB average page weight
              </div>
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell">
              <span id="fb-hosting-transfer-cost">
               0
              </span>
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
           </section>
          </section>
          <section class="fb-calculator-item" id="fb-test">
           <header class="showalways">
            <div class="featureicon firesite-feature-icon">
             <i class="gmp-icons">
              gmp_test_lab
             </i>
            </div>
            <h5 class="featuretitle">
             Test Lab
            </h5>
            <div class="fb-calculator-item-cost">
             <span id="fb-test-cost">
              0
             </span>
            </div>
           </header>
           <section class="fb-calculator-rangeholder">
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell">
              <label for="fb-test-virtual">
               Pruebas de dispositivos virtuales
              </label>
              <input class="mdl-slider mdl-js-slider" data-costmultiplier="30" data-freeallotment="1" data-summarymultiplier="12" id="fb-test-virtual" max="10" min="1" step="0.5" type="range" value="1"/>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell" id="fb-calculator-test-virtual-hours">
              <label class="fb-calculator-total">
               <div class="fb-quantity-wrapper">
                <input id="fb-test-virtual-total" pattern="\d*" value="1"/>
                <span>
                 horas al día
                </span>
               </div>
              </label>
              <div class="fb-calculator-summary">
               acerca de
               <span id="fb-test-virtual-summary">
                0
               </span>
               pruebas
              </div>
              <div class="mdl-tooltip" for="fb-calculator-test-virtual-hours">
               at 5 minutes average test length
              </div>
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell cost-border">
              <span id="fb-test-virtual-cost">
               0
              </span>
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell">
              <label for="fb-test-physical">
               Pruebas de dispositivos físicos
              </label>
              <input class="mdl-slider mdl-js-slider" data-costmultiplier="2.5" data-freeallotment="30" data-summarymultiplier="0.2" id="fb-test-physical" max="600" min="30" step="10" type="range" value="30"/>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell" id="fb-calculator-test-physical-hours">
              <label class="fb-calculator-total">
               <div class="fb-quantity-wrapper">
                <input id="fb-test-physical-total" pattern="\d*" value="30"/>
                <span>
                 minutos al día
                </span>
               </div>
              </label>
              <div class="fb-calculator-summary">
               acerca de
               <span id="fb-test-physical-summary">
                0
               </span>
               pruebas
              </div>
              <div class="mdl-tooltip" for="fb-calculator-test-physical-hours">
               at 5 minutes average test length
              </div>
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell">
              <span id="fb-test-physical-cost">
               0
              </span>
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
           </section>
          </section>
          <section class="fb-calculator-item" id="fb-mlkit">
           <header class="showalways">
            <div class="featureicon firesite-feature-icon">
             <i class="gmp-icons">
              gmp_ml
             </i>
            </div>
            <h5 class="featuretitle">
             Firebase ML
            </h5>
            <div class="fb-calculator-item-cost">
             <span id="fb-mlkit-cost">
              0
             </span>
            </div>
           </header>
           <section class="fb-calculator-rangeholder">
            <section class="fb-calculator-range">
             <div class="fb-calculator-cell fb-calculator-range-cell">
              <label for="fb-mlkit-vision">
               Llamadas a la API de Cloud Vision
              </label>
              <input class="mdl-slider mdl-js-slider" data-costmultiplier="0.0015" data-freeallotment="1000" id="fb-mlkit-vision" max="1000000" min="1000" type="range" value="1000"/>
             </div>
             <div class="fb-calculator-cell fb-calculator-total-cell" id="fb-calculator-mlkit-vision-hours">
              <label class="fb-calculator-total">
               <div class="fb-quantity-wrapper">
                <input id="fb-mlkit-vision-total" pattern="\d*" value="1000"/>
                <span>
                 llamadas por mes
                </span>
               </div>
              </label>
              <div class="fb-calculator-summary">
              </div>
             </div>
             <div class="fb-calculator-cell fb-calculator-cost-cell cost-border">
              <span id="fb-mlkit-vision-cost">
               0
              </span>
             </div>
             <div class="fb-calculator-clear">
             </div>
            </section>
           </section>
          </section>
          <section class="fb-calculator-item fb-calculator-grand-total fb-calculator--bottom-left fb-calculator--bottom-right">
           <div>
           </div>
           <section class="fb-calculator-grandtotal-cell fb-calculator--bottom-right fb-calculator--bottom-left--mobile">
            <div class="label">
             Estimated monthly cost
            </div>
            <span id="fb-calculator-total">
             0
            </span>
           </section>
          </section>
         </section>
         <script>
          fbInitCalculator();
         </script>
        </body>
       </html>
       
  </body>
</html>