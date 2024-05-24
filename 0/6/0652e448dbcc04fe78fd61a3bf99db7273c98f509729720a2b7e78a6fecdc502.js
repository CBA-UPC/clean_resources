Kameleoon.Targeting.evaluate_LANDING_PAGE=function(e){if(Kameleoon.Internals.runtime.gathererRun){let n=Kameleoon.Internals.runtime.Visitor.currentVisit.landingPageURL;return{targeting:null!=n&&new RegExp(e.value).test(n),rescheduleTargeting:!1}}return null};Kameleoon.Targeting.evaluate_TARGET_EXPERIMENT=function(t){let e=!1;let i=Kameleoon.Internals.runtime.Visitor.visits;i.forEach((i=>{let a=i.ExperimentActivations[t.value];if(a)if(null!=t.variation)if(a.associatedVariationID==t.variation)e=!0;else e=!1;else e=!0}));return{targeting:e}};Kameleoon.Internals.runtime.audienceSegments = [{"id":232918,"name":"[Congstar|T49|V1] CSC Permission","tree":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/meincongstar(.*)","include":true}}},{"id":233639,"name":"Congstar_T50_Zwischenseite_Share_segment","tree":{"orOperator":true,"orGuiLevel":0,"leftChild":{"orOperator":false,"orGuiLevel":0,"leftChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/handytarife/allnet-flat-tarife/allnet-flat-l/(.*)","include":true}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/handytarife/allnet-flat-tarife/allnet-flat-m/(.*)","include":true}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/handytarife/allnet-flat-tarife/allnet-flat-s-extra/(.*)","include":true}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/handytarife/allnet-flat-tarife/allnet-flat-s/(.*)","include":true}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/handytarife/share-tut-gutes-option/(.*)","include":true}},"rightChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/geraete/(.*)","include":true}}}}}}},"rightChild":{"targetingCondition":{"type":"JS_CODE","disabled":false,"weight":1,"value":"if (!window.location.href.includes('&planOptionIds=2685') && !window.location.href.includes('&planOptionIds=2684')) {\n    setTargeting(true);\n}","include":true,"async":true}}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/handytarife/share-tut-gutes-option-buchen-ml(.*)","include":true}},"rightChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/handytarife/share-tut-gutes-option-buchen-s(.*)","include":true}}}}},{"id":233915,"name":"[Congstar|T42] Retargeting Homespot (4)","tree":{"orOperator":false,"orGuiLevel":0,"leftChild":{"orOperator":false,"orGuiLevel":0,"leftChild":{"targetingCondition":{"type":"NEW_VISITORS","disabled":false,"weight":1,"value":"RETURNING","include":true}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/festnetz-internet/homespot-30(.*)","include":true}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/festnetz-internet/homespot-100(.*)","include":true}},"rightChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)https\\://www\\.congstar\\.de/festnetz-internet/homespot-200(.*)","include":true}}}}},"rightChild":{"orOperator":false,"orGuiLevel":0,"leftChild":{"orOperator":false,"orGuiLevel":0,"leftChild":{"targetingCondition":{"type":"LANDING_PAGE","disabled":false,"weight":1,"value":"(.*)sp\\=(.*)","include":false}},"rightChild":{"targetingCondition":{"type":"JS_CODE","disabled":false,"weight":1,"value":"const getTargetingCookie = (name) => {\n    const regex = new RegExp(`${name}=([^;]+)`);\n    const value = document.cookie.match(regex);\n    return value ? value[1] : false;\n};\n\nif (\n    !getTargetingCookie('staticentry')\n    && (\n        !getTargetingCookie('campaignContext')\n        || (\n            getTargetingCookie('campaignContext')\n            && /%7B%22campaignId%22%3A(null|302409638)%2C/.test(getTargetingCookie('campaignContext'))\n        )\n    )\n) {\n    return true;\n}\nreturn false;","include":true}}},"rightChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)sp\\=gosh(.*)","include":false}}}}},{"id":236682,"name":"[Congstar|T15|V3] Glückwunschbanner WK 3 New","tree":{"orOperator":false,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)/checkout/warenkorb(.*)","include":true}},"rightChild":{"targetingCondition":{"type":"JS_CODE","disabled":false,"weight":1,"value":"Kameleoon.API.Core.runWhenConditionTrue(\n    () => window.custom_event_queue\n    && window.custom_event_queue.some(\n        (data) => data.product_id),\n    () => {\n        setTargeting(true);\n    });","include":true,"async":true}}}},{"id":238646,"name":"[Congstar|P12] Black Friday Label","tree":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"^https:\\/\\/www\\.congstar\\.de\\/handytarife\\/(smartphone-tarife-im-vergleich|allnet-flat-tarife-im-vergleich)(\\/?(\\?.*)?)?$","include":true}}},{"id":239151,"name":"[Congstar|P13] Black Friday Glückwunschbanner","tree":{"orOperator":false,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)/checkout/warenkorb(.*)","include":true}},"rightChild":{"targetingCondition":{"type":"JS_CODE","disabled":false,"weight":1,"value":"/* eslint-disable no-undef */\nconst { href } = window.location;\nif (href.includes('/checkout/warenkorb')) {\n    Kameleoon.API.Core.runWhenElementPresent('.cart-item .cart-item__subline', (productName) => {\n        productName.forEach((element) => {\n            const product = element.textContent.trim().toLocaleLowerCase();\n            if (product.includes('allnet flat m') || product.includes('allnet flat s extra')) {\n                setTargeting(true);\n            }\n        });\n    });\n}","include":true,"async":true}}}},{"id":239152,"name":"[Congstar|P13] Black Friday Glückwunschbanner (2)","tree":{"orOperator":false,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)/checkout/warenkorb(.*)","include":true}},"rightChild":{"targetingCondition":{"type":"JS_CODE","disabled":false,"weight":1,"value":"/* eslint-disable no-undef */\nconst { href } = window.location;\nif (href.includes('/checkout/warenkorb')) {\n    Kameleoon.API.Core.runWhenElementPresent('.cart-item .cart-item__subline', (productName) => {\n        productName.forEach((element) => {\n            const product = element.textContent.trim().toLocaleLowerCase();\n            if (product.includes('allnet flat m') || product.includes('allnet flat s extra')) {\n                setTargeting(true);\n            }\n        });\n    });\n}","include":true,"async":true}}}},{"id":239154,"name":"[Congstar|P13] Black Friday Glückwunschbanner (3)","tree":{"orOperator":false,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)/checkout/warenkorb(.*)","include":true}},"rightChild":{"targetingCondition":{"type":"JS_CODE","disabled":false,"weight":1,"value":"/* eslint-disable no-undef */\nconst { href } = window.location;\nif (href.includes('/checkout/warenkorb')) {\n    Kameleoon.API.Core.runWhenElementPresent('.cart-item .cart-item__subline', (productName) => {\n        productName.forEach((element) => {\n            const product = element.textContent.trim().toLocaleLowerCase();\n            if (product.includes('allnet flat m') || product.includes('allnet flat s extra')) {\n                setTargeting(true);\n            }\n        });\n    });\n}","include":true,"async":true}}}},{"id":239793,"name":"[Congstar|P14] 10GB Wording","tree":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)/handytarife/allnet-flat-tarife/allnet-flat-m/(.*)","include":true}}},{"id":243370,"name":"Copy [Congstar|T44] Retargeting Prepaid (2)","tree":{"orOperator":false,"orGuiLevel":0,"leftChild":{"orOperator":false,"orGuiLevel":0,"leftChild":{"targetingCondition":{"type":"NEW_VISITORS","disabled":false,"weight":1,"value":"RETURNING","include":true}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)/prepaid/tarife/prepaid-allnet-s/(.*)","include":true}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)/prepaid/tarife/prepaid-allnet-m/(.*)","include":true}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)/prepaid/tarife/prepaid-allnet-l/(.*)","include":true}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)/prepaid/tarife/prepaid-allnet-xl/(.*)","include":true}},"rightChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)/prepaid/tarife/prepaid-wie-ich-will/(.*)","include":true}}}}}}},"rightChild":{"orOperator":false,"orGuiLevel":0,"leftChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)/portal/multisim/\\?sp\\=gose(.*)","include":false}},"rightChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)/portal/handytarife/smartphone-tarife-im-vergleich/\\?sp\\=bise(.*)","include":false}}},"rightChild":{"targetingCondition":{"type":"TARGET_EXPERIMENT","disabled":false,"weight":1,"value":205984,"variation":867371,"operator":"EXACT","include":false}}}}},{"id":245214,"name":"[Congstar|T56|V2] Homespot Streichpreise/-volumen","tree":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"^https\\://www\\.congstar\\.de/festnetz-internet/congstar-homespot-im-vergleich/$","include":true}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"^https\\://www\\.congstar\\.de/festnetz-internet/$","include":true}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"^https\\://www\\.congstar\\.de/festnetz-internet/homespot-30/$","include":true}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"^https\\://www\\.congstar\\.de/festnetz-internet/homespot-100/$","include":true}},"rightChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"^https\\://www\\.congstar\\.de/festnetz-internet/homespot-200/$","include":true}}}}}}},{"id":245254,"name":"[Congstar|T56|V1] ANF Streichpreise/-volumen","tree":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)congstar\\.de/handytarife/smartphone-tarife-im-vergleich/(.*)","include":true}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)congstar\\.de/handytarife/allnet-flat-tarife-im-vergleich/(.*)","include":true}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)congstar\\.de/handytarife/allnet-flat-tarife/allnet-flat-s/(.*)","include":true}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)congstar\\.de/handytarife/allnet-flat-tarife/allnet-flat-s-extra/(.*)","include":true}},"rightChild":{"orOperator":true,"orGuiLevel":1,"leftChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)congstar\\.de/handytarife/allnet-flat-tarife/allnet-flat-m/(.*)","include":true}},"rightChild":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"(.*)congstar\\.de/handytarife/allnet-flat-tarife/allnet-flat-l/(.*)","include":true}}}}}}}},{"id":245279,"name":"[Congstar|T56|V2] Homespot Streichpreise/-volumen (2)","tree":{"targetingCondition":{"type":"PAGE_URL","disabled":false,"weight":1,"value":"www\\.congstar\\.de\\/festnetz-internet\\/(congstar-homespot-im-vergleich|homespot-(30|100|200))\\/?(?:\\?(.*)|\\#(.*))?$|www\\.congstar\\.de\\/festnetz-internet\\/?(?:\\?(.*)|\\#(.*))?$","include":true}}}];Action&quot;:&quot;click;link&quot;,&quot;eventLabel&quot;:&quot;forums&quot;}">
        Forums
      </a>
      <a
        class="shared-global_header-logo_bar_component__menuLink"
        href="https://author.envato.com"
        data-action="analytics-event#send"
        data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;page-header-top&quot;,&quot;eventAction&quot;:&quot;click;link&quot;,&quot;eventLabel&quot;:&quot;start selling&quot;}">
        Start Selling
      </a>
      <div class="shared-global_header-dropdown_component__guestUserMenuWrapper" data-turbo="false">
      <a class="shared-global_header-our_products_component__ourProductMenuLink" href="#">
      <span class="shared-global_header-our_products_component__menuDropdownIconWrapper">
        <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#dialer'></use>
</svg>

      </span>
      <span class="shared-global_header-our_products_component__menuLinkText">Our Products</span>
    </a>

  <div class="shared-global_header-dropdown_component__dropdownWrapper">
    <div class="shared-global_header-dropdown_component__dropdown">
          <nav class="shared-global_header-our_products_component__dropdownListWrapper" aria-label="our products">
        <a
          class="shared-global_header-our_products_component__dropdownLink"
          title="Digital assets subscription"
          rel="noopener"
          target="_blank"
          href="https://elements.envato.com/?utm_source=Market&amp;utm_medium=promos&amp;utm_campaign=elements_mkt-headernav_our_products&amp;utm_content=headernav"
          data-action="analytics-event#send"
          data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;page-header-top&quot;,&quot;eventAction&quot;:&quot;click;link&quot;,&quot;eventLabel&quot;:&quot;our products;envato elements&quot;}">
          <div class="shared-global_header-our_products_component__dropdownLinkLogo">
            <img loading="lazy" alt="Envato Elements" width="118" height="16" src="https://assets.market-storefront.envato-static.com/storefront/assets/logos/envato-elements-93296989e268af4b90133a4016d66fa11eeab8340c5c90d9a172427209e8d492.svg" />
          </div>
          <span class="shared-global_header-our_products_component__dropdownText">Digital assets subscription</span>
        </a>
        <a
          class="shared-global_header-our_products_component__dropdownLink"
          title="Tutorials &amp; courses"
          rel="noopener"
          target="_blank"
          href="https://tutsplus.com"
          data-action="analytics-event#send"
          data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;page-header-top&quot;,&quot;eventAction&quot;:&quot;click;link&quot;,&quot;eventLabel&quot;:&quot;our products;envato tuts+&quot;}">
          <div class="shared-global_header-our_products_component__dropdownLinkLogo">
            <img loading="lazy" alt="Envato Tuts+" width="92" height="16" src="https://assets.market-storefront.envato-static.com/storefront/assets/logos/envato-tutsplus-e52509c744445cddb9bab8c35b1c96b0eaae3263798d941f3f8d8eb3ec0f3d82.svg" />
          </div>
          <span class="shared-global_header-our_products_component__dropdownText">Tutorials &amp; courses</span>
        </a>
        <a
          class="shared-global_header-our_products_component__dropdownLink"
          title="Create designs, videos &amp; mockups"
          rel="noopener"
          target="_blank"
          href="https://placeit.net/?utm_medium=promos&amp;utm_source=envatomarket&amp;utm_campaign=placeit_mkt-headernav&amp;utm_content=headernav_our_products"
          data-action="analytics-event#send"
          data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;page-header-top&quot;,&quot;eventAction&quot;:&quot;click;link&quot;,&quot;eventLabel&quot;:&quot;our products;envato placeit&quot;}">
          <div class="shared-global_header-our_products_component__dropdownLinkLogo">
            <img loading="lazy" alt="Envato Placeit" width="130" height="20" src="https://assets.market-storefront.envato-static.com/storefront/assets/logos/envato-placeit-fe4aedefd74733b2d72b8ded47cdfa0887a2bf5bd1494af6c797e79e36c75ab3.svg" />
          </div>
          <span class="shared-global_header-our_products_component__dropdownText">Create designs, videos &amp; mockups</span>
        </a>
    </nav>
    <div class="shared-global_header-our_products_component__navFooter">
      <ul class="shared-global_header-our_products_component__navFooterListWrapper">
        <li class="shared-global_header-our_products_component__footerItem">
          Join the
          <a class="shared-global_header-our_products_component__footerLink"
             href="https://community.envato.com"
             target="_blank"
             rel="noopener">Envato community</a>
        </li>
        <li class="shared-global_header-our_products_component__footerItem">
          Learn from others in
          <a class="shared-global_header-our_products_component__footerLink"
             href="https://forums.envato.com"
             target="_blank"
             rel="noopener">the forums</a>
        </li>
      </ul>
    </div>

    </div>
  </div>
</div>

      <span class="shared-global_header-logo_bar_component__userCartWrapper">
        <a
  class="shared-global_header-cart_link_component__root"
  href="/cart"
  title="Cart"
  id="cart-link-desktop"
  data-turbo-permanent
  data-turbo="false"
  data-action="analytics-event#send"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;page-header-top&quot;,&quot;eventAction&quot;:&quot;click;link&quot;,&quot;eventLabel&quot;:&quot;cart&quot;}">
  <span class="shared-global_header-cart_link_component__userCartIcon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

  </span>
  <span class="shared-global_header-cart_link_component__userCartCount"
        data-controller="cart-icon"
        data-action="cartStoreUpdated@window->cart-icon#updateFromStore"
  ></span>
</a>

      </span>
      <span
        class="shared-global_header-logo_bar_component__usernameWrapper"
        id="tlp-header-user-nav"
        data-turbo-permanent
        data-controller="fragment-loader"
        data-fragment-loader-session-required-value="true"
        data-fragment-loader-url-value="/my/user_nav"
      >
        <div class="shared-global_header-dropdown_component__guestUserMenuWrapper shared-global_header-dropdown_component__disabled" data-turbo="false">
  
      <a class="shared-global_header-user_nav_component__guestUserMenuLink"
        href="/sign_in"
        data-turbo="false"
        data-controller="modal-commander"
        data-action="modal-commander#open analytics-event#send"
        data-modal-commander-url-value="/storefront/sign_in"
        data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;page-header-top&quot;,&quot;eventAction&quot;:&quot;click;link&quot;,&quot;eventLabel&quot;:&quot;sign in&quot;}">
        <span class="shared-global_header-user_nav_component__guestUserMenuText">Sign In</span>
      </a>


  <div class="shared-global_header-dropdown_component__dropdownWrapper">
    <div class="shared-global_header-dropdown_component__dropdown">
      
    </div>
  </div>
</div>

      </span>
    </nav>
  </div>
</div>

      <div class="shared-global_header-mobile_menu_component__headerTopMobileWrapper" data-controller="mobile-menu">
  <div class="shared-global_header-mobile_menu_component__headerMobile">

    <div class="shared-global_header-mobile_menu_component__accountButton">
      <div>
  <div class="shared-global_header-cart_mini_link_component__cartButton">
    <a class="shared-global_header-cart_mini_link_component__linkButton"
       href="/cart"
       title="Cart"
       data-action="click->analytics-event#sendMiniCartEvent"
       data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click;link&quot;,&quot;eventLabel&quot;:&quot;cart&quot;}"
       data-turbo="false">

      <span class="shared-global_header-cart_mini_link_component__userCartIcon">
        <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart_mobile'></use>
</svg>

      </span>
      <span class="shared-global_header-cart_mini_link_component__userCartCount"
            data-controller="cart-icon"
            data-action="cartStoreUpdated@window->cart-icon#updateFromStore"
      ></span>
    </a>
  </div>
</div>

      <a class="shared-global_header-mobile_menu_component__linkButton"
         title="Open account menu"
         data-action="click->mobile-menu#openUserMenu"
         href="#">
        <span class="shared-global_header-mobile_menu_component__linkIcon">
          <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#person'></use>
</svg>

        </span>
      </a>
    </div>

    <div class="shared-global_header-mobile_menu_component__categoriesButton">
      <a class="shared-global_header-mobile_menu_component__linkButton"
         title="Open site menu"
         data-action="click->mobile-menu#openCategoriesMenu"
         href="#">
        <span class="shared-global_header-mobile_menu_component__linkIcon">
          <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#hamburger'></use>
</svg>

        </span>
      </a>
    </div>

    <div>
      <a class="shared-global_header-mobile_menu_component__baseLogo" href="/">
        <picture>
          <source srcset="https://assets.market-storefront.envato-static.com/storefront/assets/logos/themeforest-dd57a83e1947d49586491f03d1c3eedc4c6a438d2740328c5277e6b67bc46ad9.webp" type="image/webp">
          <img loading="lazy"
               src="https://assets.market-storefront.envato-static.com/storefront/assets/logos/themeforest-15052b5a8846d9acfb6183725cf28b5a4218288c307e0cd3628e9b7631e6dd0e.png"
               alt="ThemeForest"
               class="shared-global_header-mobile_menu_component__logo">
        </picture>
      </a>
    </div>

  </div>

  <div class="shared-global_header-mobile_menu_component__offCanvasBackground" data-mobile-menu-target="categoriesMenu" >
    <div class="shared-global_header-mobile_menu_component__overlay" data-action="click->mobile-menu#closeMenu"></div>
    <template data-mobile-menu-target="categoriesTemplate">
      <div class="shared-global_header-mobile_menu_component__offCanvasWrapper">
        <div class="shared-global_header-mobile_menu_component__offCanvasLeftContainer">
          <button class="shared-global_header-mobile_menu_component__canvasToggle" data-action="click->mobile-menu#closeMenu">
            <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="14px" width="14px" viewBox="0 0 10 10" style="vertical-align: middle;">
              <title id="Close">Close</title>
              <g>
                <path d="M9.888641,1.2053571 C9.962881,1.2797623 10,1.3690471 10,1.4732143 C10,1.5773815 9.962881,1.6666663 9.888641,1.7410714 L6.904232,4.7321429 C6.829992,4.806548 6.792873,4.8958328 6.792873,5 C6.792873,5.1041672 6.829992,5.193452 6.904232,5.2678571 L9.86637,8.2589286 C9.955457,8.3333337 10,8.4226185 10,8.5267857 C10,8.6309529 9.955457,8.7202377 9.86637,8.7946429 L8.797327,9.8883929 C8.723088,9.962798 8.63029,10 8.518931,10 C8.407572,10 8.314774,9.962798 8.240535,9.8883929 L5.278396,6.8973214 C5.204157,6.8229163 5.111359,6.7857143 5,6.7857143 C4.888641,6.7857143 4.795843,6.8229163 4.721604,6.8973214 L1.737194,9.8883929 C1.662954,9.962798 1.573868,10 1.469933,10 C1.365998,10 1.276912,9.962798 1.202673,9.8883929 L0.111359,8.7946429 C0.037119,8.7202377 0,8.6309529 0,8.5267857 C0,8.4226185 0.037119,8.3333337 0.111359,8.2589286 L3.095768,5.2678571 C3.170008,5.193452 3.207127,5.1041672 3.207127,5 C3.207127,4.8958328 3.170008,4.806548 3.095768,4.7321429 L0.111359,1.7410714 C0.037119,1.6666663 0,1.5736613 0,1.4620536 C0,1.3504459 0.037119,1.2574408 0.111359,1.1830357 L1.202673,0.1116071 C1.276912,0.037202 1.36971,0 1.481069,0 C1.592428,0 1.685226,0.037202 1.759465,0.1116071 L4.721604,3.1026786 C4.795843,3.1770837 4.888641,3.2142857 5,3.2142857 C5.111359,3.2142857 5.204157,3.1770837 5.278396,3.1026786 L8.262806,0.1116071 C8.337046,0.037202 8.426132,0 8.530067,0 C8.634002,0 8.723088,0.037202 8.797327,0.1116071 L9.888641,1.2053571 Z"></path>
              </g>
            </svg>
          </button>
          <div class="shared-global_header-mobile_menu_component__logoImageWrapper">
            <a class="shared-global_header-mobile_menu_component__logoImageLink" href="/">
              <img alt="ThemeForest" src="https://assets.market-storefront.envato-static.com/storefront/assets/logos/envato-market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg" width="110" height="13" />
              <span class="shared-global_header-mobile_menu_component__hiddenText">Envato Market</span>
            </a>
          </div>
          <div data-controller="toggler">
  <div class="shared-global_header-mobile_markets_nav_component__currentSiteSectionWrapper shared-global_header-mobile_markets_nav_component__themeforestWrapper">
    <div class="shared-global_header-mobile_markets_nav_component__currentSiteSpan">Web Themes &amp; Templates</div>
    <div
      class="shared-global_header-mobile_markets_nav_component__mainMenuToggle"
      data-toggler-target="toggle"
      data-toggler-expanded-class="shared-global_header-mobile_markets_nav_component__expanded"
      data-action="click->toggler#toggle"
    >
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#arrow_fill_down'></use>
</svg>

    </div>
  </div>
  <div
    class="shared-global_header-mobile_markets_nav_component__sitesMenuWrapper"
    data-toggler-target="toggle"
    data-toggler-expanded-class="shared-global_header-mobile_markets_nav_component__expanded"
  >
      <a class="shared-global_header-mobile_markets_nav_component__siteLink" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;CodeCanyon&quot;}" href="https://codecanyon.net/?auto_signin=true">
        <span class="shared-global_header-mobile_markets_nav_component__siteLinkText">Code</span>
</a>      <a class="shared-global_header-mobile_markets_nav_component__siteLink" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;VideoHive&quot;}" href="https://videohive.net/?auto_signin=true">
        <span class="shared-global_header-mobile_markets_nav_component__siteLinkText">Video</span>
</a>      <a class="shared-global_header-mobile_markets_nav_component__siteLink" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;AudioJungle&quot;}" href="https://audiojungle.net/?auto_signin=true">
        <span class="shared-global_header-mobile_markets_nav_component__siteLinkText">Audio</span>
</a>      <a class="shared-global_header-mobile_markets_nav_component__siteLink" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;GraphicRiver&quot;}" href="https://graphicriver.net/?auto_signin=true">
        <span class="shared-global_header-mobile_markets_nav_component__siteLinkText">Graphics</span>
</a>      <a class="shared-global_header-mobile_markets_nav_component__siteLink" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;PhotoDune&quot;}" href="https://photodune.net/?auto_signin=true">
        <span class="shared-global_header-mobile_markets_nav_component__siteLinkText">Photos</span>
</a>      <a class="shared-global_header-mobile_markets_nav_component__siteLink" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;3DOcean&quot;}" href="https://3docean.net/?auto_signin=true">
        <span class="shared-global_header-mobile_markets_nav_component__siteLinkText">3D Files</span>
</a>  </div>
</div>

          <div class="shared-global_header-mobile_menu_search_component__root shared-global_header-mobile_menu_search_component__noBorder">
  <form role="search" method="get" action="/search">
    <div class="shared-global_header-mobile_menu_search_component__searchInlineElement"></div>
    <div class="shared-global_header-mobile_menu_search_component__form">
      <div class="shared-global_header-mobile_menu_search_component__inputWrapper">
        <input type="search" aria-label="search" class="shared-global_header-mobile_menu_search_component__input" name="term" placeholder="Search" role="search" value="">
      </div>
      <button class="shared-global_header-mobile_menu_search_component__searchButton" type="submit">
        <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 512 512" title="search" style="vertical-align: middle;">
          <title>search</title>
          <g>
            <path d="M507.5 469.3c0 10.5-3.8 19.5-11.5 27.2s-16.7 11.5-27.2 11.5c-10.9 0-20-3.8-27.2-11.5l-103.7-103.4c-36.1 25-76.3 37.5-120.6 37.5-28.8 0-56.4-5.6-82.7-16.8s-49-26.3-68-45.3-34.2-41.7-45.3-68c-11.2-26.3-16.8-53.9-16.8-82.7s5.6-56.4 16.8-82.7 26.3-49 45.3-68 41.7-34.2 68-45.3c26.3-11.2 53.9-16.8 82.7-16.8s56.4 5.6 82.7 16.8c26.3 11.2 49 26.3 68 45.3s34.2 41.7 45.3 68c11.2 26.3 16.8 53.9 16.8 82.7 0 44.3-12.5 84.5-37.5 120.6l103.7 103.7c7.5 7.5 11.2 16.5 11.2 27.2zm-154.8-251.5c0-37.3-13.2-69.2-39.8-95.7-26.5-26.5-58.4-39.8-95.7-39.8s-69.2 13.3-95.7 39.8-39.8 58.4-39.8 95.7 13.2 69.2 39.8 95.7c26.5 26.5 58.4 39.8 95.7 39.8s69.2-13.2 95.7-39.8c26.6-26.5 39.8-58.4 39.8-95.7z"></path>
          </g>
        </svg>
      </button>
    </div>
  </form>
</div>

          
  <div data-controller="toggler">
    <a class="shared-global_header-categories_mobile_menu_component__linkRow"
      href="/category/all"
      data-turbo="true"
      data-action="analytics-event#send click-&gt;toggler#toggle"
      data-toggler-target="toggle"
      data-toggler-expanded-class="shared-global_header-categories_mobile_menu_component__expanded"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;All Items&quot;}">
      <div class="shared-global_header-categories_mobile_menu_component__link">
        All Items
      </div>
        <div class="shared-global_header-categories_mobile_menu_component__icon">
          <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#arrow_fill_down'></use>
</svg>

        </div>
    </a>

      <nav data-toggler-target="toggle"
           data-toggler-expanded-class="shared-global_header-categories_mobile_menu_component__expanded"
           class="shared-global_header-categories_mobile_menu_component__subLinks">
          <a href="/top-sellers"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;All Items - Popular Files&quot;}">
            Popular Files
          </a>
          <a href="/feature"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;All Items - Featured Files&quot;}">
            Featured Files
          </a>
          <a href="/category/all?date=this-month&amp;sort=sales"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;All Items - Top New Files&quot;}">
            Top New Files
          </a>
          <a href="/follow_feed"
             target="_self"
            data-turbo="false"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;All Items - Follow Feed&quot;}">
            Follow Feed
          </a>
          <a href="/authors/top"
             target="_self"
            data-turbo="false"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;All Items - Top Authors&quot;}">
            Top Authors
          </a>
          <a href="/page/top_new_sellers"
             target="_self"
            data-turbo="false"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;All Items - Top New Authors&quot;}">
            Top New Authors
          </a>
          <a href="/collections"
             target="_self"
            data-turbo="false"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;All Items - Public Collections&quot;}">
            Public Collections
          </a>
          <a href="/category"
             target="_self"
            data-turbo="false"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;All Items - View All Categories&quot;}">
            View All Categories
          </a>
      </nav>
  </div>
  <div data-controller="toggler">
    <a class="shared-global_header-categories_mobile_menu_component__linkRow"
      href="/category/wordpress"
      data-turbo="true"
      data-action="analytics-event#send click-&gt;toggler#toggle"
      data-toggler-target="toggle"
      data-toggler-expanded-class="shared-global_header-categories_mobile_menu_component__expanded"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;WordPress&quot;}">
      <div class="shared-global_header-categories_mobile_menu_component__link">
        WordPress
      </div>
        <div class="shared-global_header-categories_mobile_menu_component__icon">
          <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#arrow_fill_down'></use>
</svg>

        </div>
    </a>

      <nav data-toggler-target="toggle"
           data-toggler-expanded-class="shared-global_header-categories_mobile_menu_component__expanded"
           class="shared-global_header-categories_mobile_menu_component__subLinks">
          <a href="/category/wordpress"
             target="_self"
            data-turbo="false"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;WordPress - Show all WordPress&quot;}">
            Show all WordPress
          </a>
          <a href="/popular_item/by_category?category=wordpress"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;WordPress - Popular Items&quot;}">
            Popular Items
          </a>
          <a href="/category/wordpress/blog-magazine"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;WordPress - Blog / Magazine&quot;}">
            Blog / Magazine
          </a>
          <a href="/category/wordpress/buddypress"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;WordPress - BuddyPress&quot;}">
            BuddyPress
          </a>
          <a href="/category/wordpress/corporate"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;WordPress - Corporate&quot;}">
            Corporate
          </a>
          <a href="/category/wordpress/creative"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;WordPress - Creative&quot;}">
            Creative
          </a>
          <a href="/category/wordpress/corporate/directory-listings"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;WordPress - Directory \u0026 Listings&quot;}">
            Directory &amp; Listings
          </a>
          <a href="/category/wordpress/ecommerce"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;WordPress - eCommerce&quot;}">
            eCommerce
          </a>
          <a href="/category/wordpress/education"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;WordPress - Education&quot;}">
            Education
          </a>
          <a href="/attributes/compatible-with/elementor"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;WordPress - Elementor&quot;}">
            Elementor
          </a>
          <a href="/category/wordpress/entertainment"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;WordPress - Entertainment&quot;}">
            Entertainment
          </a>
          <a href="/category/wordpress/mobile"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;WordPress - Mobile&quot;}">
            Mobile
          </a>
          <a href="/category/wordpress/nonprofit"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;WordPress - Nonprofit&quot;}">
            Nonprofit
          </a>
          <a href="/category/wordpress/real-estate"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;WordPress - Real Estate&quot;}">
            Real Estate
          </a>
          <a href="/category/wordpress/retail"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;WordPress - Retail&quot;}">
            Retail
          </a>
          <a href="/category/wordpress/technology"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;WordPress - Technology&quot;}">
            Technology
          </a>
          <a href="/category/wordpress/wedding"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;WordPress - Wedding&quot;}">
            Wedding
          </a>
          <a href="/category/wordpress/miscellaneous"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;WordPress - Miscellaneous&quot;}">
            Miscellaneous
          </a>
          <a href="https://codecanyon.net/category/wordpress"
             target="_self"
            data-turbo="false"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;WordPress - WordPress Plugins&quot;}">
            WordPress Plugins
          </a>
      </nav>
  </div>
  <div data-controller="toggler">
    <a class="shared-global_header-categories_mobile_menu_component__linkRow"
      href="/elementor"
      data-turbo="true"
      data-action="analytics-event#send click-&gt;toggler#toggle"
      data-toggler-target="toggle"
      data-toggler-expanded-class="shared-global_header-categories_mobile_menu_component__expanded"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Elementor&quot;}">
      <div class="shared-global_header-categories_mobile_menu_component__link">
        Elementor
      </div>
        <div class="shared-global_header-categories_mobile_menu_component__icon">
          <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#arrow_fill_down'></use>
</svg>

        </div>
    </a>

      <nav data-toggler-target="toggle"
           data-toggler-expanded-class="shared-global_header-categories_mobile_menu_component__expanded"
           class="shared-global_header-categories_mobile_menu_component__subLinks">
          <a href="/category/template-kits/elementor?sort=trending"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Elementor - Template Kits&quot;}">
            Template Kits
          </a>
          <a href="https://codecanyon.net/category/wordpress?compatible_with=Elementor&amp;sort=trending&amp;term=elementor"
             target="_self"
            data-turbo="false"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Elementor - Plugins&quot;}">
            Plugins
          </a>
          <a href="/search/elementor?compatible_with=Elementor&amp;sort=trending"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Elementor - Themes&quot;}">
            Themes
          </a>
      </nav>
  </div>
  <div data-controller="toggler">
    <a class="shared-global_header-categories_mobile_menu_component__linkRow"
      href="/wordpress-hosting"
      data-turbo="false"
      data-action="analytics-event#send click-&gt;mobile-menu#closeMenu"
      data-toggler-target="toggle"
      data-toggler-expanded-class="shared-global_header-categories_mobile_menu_component__expanded"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Hosting&quot;}">
      <div class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__empty">
        Hosting
      </div>
    </a>

  </div>
  <div data-controller="toggler">
    <a class="shared-global_header-categories_mobile_menu_component__linkRow"
      href="/category/site-templates"
      data-turbo="true"
      data-action="analytics-event#send click-&gt;toggler#toggle"
      data-toggler-target="toggle"
      data-toggler-expanded-class="shared-global_header-categories_mobile_menu_component__expanded"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;HTML&quot;}">
      <div class="shared-global_header-categories_mobile_menu_component__link">
        HTML
      </div>
        <div class="shared-global_header-categories_mobile_menu_component__icon">
          <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#arrow_fill_down'></use>
</svg>

        </div>
    </a>

      <nav data-toggler-target="toggle"
           data-toggler-expanded-class="shared-global_header-categories_mobile_menu_component__expanded"
           class="shared-global_header-categories_mobile_menu_component__subLinks">
          <a href="/category/site-templates"
             target="_self"
            data-turbo="false"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;HTML - Show all HTML&quot;}">
            Show all HTML
          </a>
          <a href="/popular_item/by_category?category=site-templates"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;HTML - Popular Items&quot;}">
            Popular Items
          </a>
          <a href="/category/site-templates/admin-templates"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;HTML - Admin Templates&quot;}">
            Admin Templates
          </a>
          <a href="/category/site-templates/corporate"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;HTML - Corporate&quot;}">
            Corporate
          </a>
          <a href="/category/site-templates/creative"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;HTML - Creative&quot;}">
            Creative
          </a>
          <a href="/category/site-templates/entertainment"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;HTML - Entertainment&quot;}">
            Entertainment
          </a>
          <a href="/category/site-templates/mobile"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;HTML - Mobile&quot;}">
            Mobile
          </a>
          <a href="/category/site-templates/nonprofit"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;HTML - Nonprofit&quot;}">
            Nonprofit
          </a>
          <a href="/category/site-templates/personal"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;HTML - Personal&quot;}">
            Personal
          </a>
          <a href="/category/site-templates/retail"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;HTML - Retail&quot;}">
            Retail
          </a>
          <a href="/category/site-templates/specialty-pages"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;HTML - Specialty Pages&quot;}">
            Specialty Pages
          </a>
          <a href="/category/site-templates/technology"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;HTML - Technology&quot;}">
            Technology
          </a>
          <a href="/category/site-templates/wedding"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;HTML - Wedding&quot;}">
            Wedding
          </a>
          <a href="/category/site-templates/miscellaneous"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;HTML - Miscellaneous&quot;}">
            Miscellaneous
          </a>
      </nav>
  </div>
  <div data-controller="toggler">
    <a class="shared-global_header-categories_mobile_menu_component__linkRow"
      href="/category/ecommerce/shopify"
      data-turbo="true"
      data-action="analytics-event#send click-&gt;toggler#toggle"
      data-toggler-target="toggle"
      data-toggler-expanded-class="shared-global_header-categories_mobile_menu_component__expanded"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Shopify&quot;}">
      <div class="shared-global_header-categories_mobile_menu_component__link">
        Shopify
      </div>
        <div class="shared-global_header-categories_mobile_menu_component__icon">
          <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#arrow_fill_down'></use>
</svg>

        </div>
    </a>

      <nav data-toggler-target="toggle"
           data-toggler-expanded-class="shared-global_header-categories_mobile_menu_component__expanded"
           class="shared-global_header-categories_mobile_menu_component__subLinks">
          <a href="/category/ecommerce/shopify"
             target="_self"
            data-turbo="false"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Shopify - Show all Shopify&quot;}">
            Show all Shopify
          </a>
          <a href="/popular_item/by_category?category=ecommerce/shopify"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Shopify - Popular Items&quot;}">
            Popular Items
          </a>
          <a href="/category/ecommerce/shopify/fashion"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Shopify - Fashion&quot;}">
            Fashion
          </a>
          <a href="/category/ecommerce/shopify/shopping"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Shopify - Shopping&quot;}">
            Shopping
          </a>
          <a href="/category/ecommerce/shopify/health-beauty"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Shopify - Health \u0026 Beauty&quot;}">
            Health &amp; Beauty
          </a>
          <a href="/category/ecommerce/shopify/technology"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Shopify - Technology&quot;}">
            Technology
          </a>
          <a href="/category/ecommerce/shopify/entertainment"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Shopify - Entertainment&quot;}">
            Entertainment
          </a>
          <a href="/category/ecommerce/shopify/miscellaneous"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Shopify - Miscellaneous&quot;}">
            Miscellaneous
          </a>
      </nav>
  </div>
  <div data-controller="toggler">
    <a class="shared-global_header-categories_mobile_menu_component__linkRow"
      href="/category/jamstack"
      data-turbo="true"
      data-action="analytics-event#send click-&gt;mobile-menu#closeMenu"
      data-toggler-target="toggle"
      data-toggler-expanded-class="shared-global_header-categories_mobile_menu_component__expanded"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Jamstack&quot;}">
      <div class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__empty">
        Jamstack
      </div>
    </a>

  </div>
  <div data-controller="toggler">
    <a class="shared-global_header-categories_mobile_menu_component__linkRow"
      href="/category/marketing"
      data-turbo="true"
      data-action="analytics-event#send click-&gt;toggler#toggle"
      data-toggler-target="toggle"
      data-toggler-expanded-class="shared-global_header-categories_mobile_menu_component__expanded"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Marketing&quot;}">
      <div class="shared-global_header-categories_mobile_menu_component__link">
        Marketing
      </div>
        <div class="shared-global_header-categories_mobile_menu_component__icon">
          <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#arrow_fill_down'></use>
</svg>

        </div>
    </a>

      <nav data-toggler-target="toggle"
           data-toggler-expanded-class="shared-global_header-categories_mobile_menu_component__expanded"
           class="shared-global_header-categories_mobile_menu_component__subLinks">
          <a href="/category/marketing"
             target="_self"
            data-turbo="false"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Marketing - Show all Marketing&quot;}">
            Show all Marketing
          </a>
          <a href="/popular_item/by_category?category=marketing"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Marketing - Popular Items&quot;}">
            Popular Items
          </a>
          <a href="/category/marketing/email-templates"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Marketing - Email Templates&quot;}">
            Email Templates
          </a>
          <a href="/category/marketing/landing-pages"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Marketing - Landing Pages&quot;}">
            Landing Pages
          </a>
          <a href="/category/marketing/unbounce-landing-pages"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Marketing - Unbounce Landing Pages&quot;}">
            Unbounce Landing Pages
          </a>
      </nav>
  </div>
  <div data-controller="toggler">
    <a class="shared-global_header-categories_mobile_menu_component__linkRow"
      href="/category/cms-themes"
      data-turbo="true"
      data-action="analytics-event#send click-&gt;toggler#toggle"
      data-toggler-target="toggle"
      data-toggler-expanded-class="shared-global_header-categories_mobile_menu_component__expanded"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;CMS&quot;}">
      <div class="shared-global_header-categories_mobile_menu_component__link">
        CMS
      </div>
        <div class="shared-global_header-categories_mobile_menu_component__icon">
          <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#arrow_fill_down'></use>
</svg>

        </div>
    </a>

      <nav data-toggler-target="toggle"
           data-toggler-expanded-class="shared-global_header-categories_mobile_menu_component__expanded"
           class="shared-global_header-categories_mobile_menu_component__subLinks">
          <a href="/category/cms-themes"
             target="_self"
            data-turbo="false"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;CMS - Show all CMS&quot;}">
            Show all CMS
          </a>
          <a href="/popular_item/by_category?category=cms-themes"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;CMS - Popular Items&quot;}">
            Popular Items
          </a>
          <a href="/category/cms-themes/concrete5"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;CMS - Concrete5&quot;}">
            Concrete5
          </a>
          <a href="/category/cms-themes/drupal"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;CMS - Drupal&quot;}">
            Drupal
          </a>
          <a href="/category/cms-themes/hubspot-cms-hub"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;CMS - HubSpot CMS Hub&quot;}">
            HubSpot CMS Hub
          </a>
          <a href="/category/cms-themes/joomla"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;CMS - Joomla&quot;}">
            Joomla
          </a>
          <a href="/category/cms-themes/modx-themes"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;CMS - MODX Themes&quot;}">
            MODX Themes
          </a>
          <a href="/category/cms-themes/moodle"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;CMS - Moodle&quot;}">
            Moodle
          </a>
          <a href="/category/cms-themes/webflow"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;CMS - Webflow&quot;}">
            Webflow
          </a>
          <a href="/category/cms-themes/weebly"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;CMS - Weebly&quot;}">
            Weebly
          </a>
          <a href="/category/cms-themes/miscellaneous"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;CMS - Miscellaneous&quot;}">
            Miscellaneous
          </a>
      </nav>
  </div>
  <div data-controller="toggler">
    <a class="shared-global_header-categories_mobile_menu_component__linkRow"
      href="/category/ecommerce"
      data-turbo="true"
      data-action="analytics-event#send click-&gt;toggler#toggle"
      data-toggler-target="toggle"
      data-toggler-expanded-class="shared-global_header-categories_mobile_menu_component__expanded"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;eCommerce&quot;}">
      <div class="shared-global_header-categories_mobile_menu_component__link">
        eCommerce
      </div>
        <div class="shared-global_header-categories_mobile_menu_component__icon">
          <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#arrow_fill_down'></use>
</svg>

        </div>
    </a>

      <nav data-toggler-target="toggle"
           data-toggler-expanded-class="shared-global_header-categories_mobile_menu_component__expanded"
           class="shared-global_header-categories_mobile_menu_component__subLinks">
          <a href="/category/ecommerce"
             target="_self"
            data-turbo="false"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;eCommerce - Show all eCommerce&quot;}">
            Show all eCommerce
          </a>
          <a href="/popular_item/by_category?category=ecommerce"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;eCommerce - Popular Items&quot;}">
            Popular Items
          </a>
          <a href="/category/wordpress/ecommerce/woocommerce"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;eCommerce - WooCommerce&quot;}">
            WooCommerce
          </a>
          <a href="/category/ecommerce/bigcommerce"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;eCommerce - BigCommerce&quot;}">
            BigCommerce
          </a>
          <a href="/attributes/compatible-with/Drupal%20Commerce?sort=date"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;eCommerce - Drupal Commerce&quot;}">
            Drupal Commerce
          </a>
          <a href="/search?compatible_with=Easy+Digital+Downloads"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;eCommerce - Easy Digital Downloads&quot;}">
            Easy Digital Downloads
          </a>
          <a href="/attributes/themeforest-files-included/ecwid%20css%20files"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;eCommerce - Ecwid&quot;}">
            Ecwid
          </a>
          <a href="/category/ecommerce/magento"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;eCommerce - Magento&quot;}">
            Magento
          </a>
          <a href="/category/ecommerce/opencart"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;eCommerce - OpenCart&quot;}">
            OpenCart
          </a>
          <a href="/category/ecommerce/prestashop"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;eCommerce - PrestaShop&quot;}">
            PrestaShop
          </a>
          <a href="/category/ecommerce/shopify"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;eCommerce - Shopify&quot;}">
            Shopify
          </a>
          <a href="/attributes/compatible-with/Ubercart?sort=date"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;eCommerce - Ubercart&quot;}">
            Ubercart
          </a>
          <a href="/category/cms-themes/joomla/virtuemart"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;eCommerce - VirtueMart&quot;}">
            VirtueMart
          </a>
          <a href="/category/ecommerce/zen-cart"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;eCommerce - Zen Cart&quot;}">
            Zen Cart
          </a>
          <a href="/category/ecommerce/miscellaneous"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;eCommerce - Miscellaneous&quot;}">
            Miscellaneous
          </a>
      </nav>
  </div>
  <div data-controller="toggler">
    <a class="shared-global_header-categories_mobile_menu_component__linkRow"
      href="/category/ui-templates"
      data-turbo="true"
      data-action="analytics-event#send click-&gt;toggler#toggle"
      data-toggler-target="toggle"
      data-toggler-expanded-class="shared-global_header-categories_mobile_menu_component__expanded"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;UI Templates&quot;}">
      <div class="shared-global_header-categories_mobile_menu_component__link">
        UI Templates
      </div>
        <div class="shared-global_header-categories_mobile_menu_component__icon">
          <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#arrow_fill_down'></use>
</svg>

        </div>
    </a>

      <nav data-toggler-target="toggle"
           data-toggler-expanded-class="shared-global_header-categories_mobile_menu_component__expanded"
           class="shared-global_header-categories_mobile_menu_component__subLinks">
          <a href="/popular_item/by_category?category=ui-templates"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;UI Templates - Popular Items&quot;}">
            Popular Items
          </a>
          <a href="/category/ui-templates/figma"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;UI Templates - Figma&quot;}">
            Figma
          </a>
          <a href="/category/ui-templates/adobe-xd"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;UI Templates - Adobe XD&quot;}">
            Adobe XD
          </a>
          <a href="/category/ui-templates/photoshop"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;UI Templates - Photoshop&quot;}">
            Photoshop
          </a>
          <a href="/category/ui-templates/sketch"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;UI Templates - Sketch&quot;}">
            Sketch
          </a>
      </nav>
  </div>
  <div data-controller="toggler">
    <a class="shared-global_header-categories_mobile_menu_component__linkRow"
      href="https://codecanyon.net/category/wordpress"
      data-turbo="false"
      data-action="analytics-event#send click-&gt;mobile-menu#closeMenu"
      data-toggler-target="toggle"
      data-toggler-expanded-class="shared-global_header-categories_mobile_menu_component__expanded"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Plugins&quot;}">
      <div class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__empty">
        Plugins
      </div>
    </a>

  </div>
  <div data-controller="toggler">
    <a class="shared-global_header-categories_mobile_menu_component__linkRow"
      href="/category"
      data-turbo="false"
      data-action="analytics-event#send click-&gt;toggler#toggle"
      data-toggler-target="toggle"
      data-toggler-expanded-class="shared-global_header-categories_mobile_menu_component__expanded"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;More&quot;}">
      <div class="shared-global_header-categories_mobile_menu_component__link">
        More
      </div>
        <div class="shared-global_header-categories_mobile_menu_component__icon">
          <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#arrow_fill_down'></use>
</svg>

        </div>
    </a>

      <nav data-toggler-target="toggle"
           data-toggler-expanded-class="shared-global_header-categories_mobile_menu_component__expanded"
           class="shared-global_header-categories_mobile_menu_component__subLinks">
          <a href="/category/blogging"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;More - Blogging&quot;}">
            Blogging
          </a>
          <a href="/category/blogging/blogger"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;More - Blogger&quot;}">
            Blogger
          </a>
          <a href="/attributes/compatible-with/facebook"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;More - Facebook Templates&quot;}">
            Facebook Templates
          </a>
          <a href="https://elements.envato.com/extensions/wordpress"
             target="_self"
            data-turbo="false"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;More - Free Elementor Templates&quot;}">
            Free Elementor Templates
          </a>
          <a href="https://themeforest.net/lp/free-wordpress-themes"
             target="_self"
            data-turbo="false"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;More - Free WordPress Themes&quot;}">
            Free WordPress Themes
          </a>
          <a href="/category/forums"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;More - Forums&quot;}">
            Forums
          </a>
          <a href="/category/blogging/ghost-themes"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;More - Ghost Themes&quot;}">
            Ghost Themes
          </a>
          <a href="/category/blogging/tumblr"
             target="_self"
            data-turbo="true"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;More - Tumblr&quot;}">
            Tumblr
          </a>
          <a href="https://elements.envato.com/all-items/?utm_campaign=elements_mkt-nav_child&amp;utm_source=themeforest.net&amp;utm_medium=referral&amp;utm_content=tf_more"
             target="_blank"
            data-turbo="false"
            class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__sub shared-global_header-categories_mobile_menu_component__linkExternal"
            data-action="analytics-event#send click->mobile-menu#closeMenu"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav - Mobile&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;More - Unlimited Creative Assets&quot;}">
            Unlimited Creative Assets
          </a>
      </nav>
  </div>

  <div>
    <a class="shared-global_header-categories_mobile_menu_component__link shared-global_header-categories_mobile_menu_component__linkRow shared-global_header-categories_mobile_menu_component__linkExternal shared-global_header-categories_mobile_menu_component__linkElements"
      href="https://elements.envato.com/?utm_campaign=elements_mkt-nav&utm_source=themeforest.net&utm_medium=referral&utm_content=tf_home_unlimited"
      target="_blank"
      data-action="analytics-event#send"
      data-analytics-event='{"hitType":"event","eventCategory":"MarketNav - Mobile","eventAction":"click","eventLabel":"Unlimited Download"}'
    >
      Unlimited Downloads
    </a>
  </div>

        </div>
      </div>
    </template>
  </div>

  <div class="shared-global_header-mobile_menu_component__offCanvasBackground" data-mobile-menu-target="userMenu">
    <div class="shared-global_header-mobile_menu_component__overlay" data-action="click->mobile-menu#closeMenu"></div>
    <div class="shared-global_header-mobile_menu_component__offCanvasWrapper shared-global_header-mobile_menu_component__right">
      <div class="shared-global_header-mobile_menu_component__offCanvasGuestUserMenuWrapper"
            data-controller="fragment-loader"
            data-fragment-loader-session-required-value="true"
            data-fragment-loader-url-value="/my/user_nav?mobile=true">
          <a class="shared-global_header-mobile_menu_user_nav_component__link" href="/cart" data-turbo="false">
    Guest Cart
    <span class="shared-global_header-mobile_menu_user_nav_component__iconWrapper">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart_mobile'></use>
</svg>

    </span>
    <span class="shared-global_header-mobile_menu_user_nav_component__userCartCount"
          data-controller="cart-icon"
          data-action="cartStoreUpdated@window->cart-icon#updateFromStore"
    ></span>
  </a>
  <a class="shared-global_header-mobile_menu_user_nav_component__link" href="/sign_up?to=themeforest" data-turbo="false">
    Create an Envato Account
    <span class="shared-global_header-mobile_menu_user_nav_component__iconWrapper">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#envato_mobile_menu_logo'></use>
</svg>

    </span >
  </a>
  <a class="shared-global_header-mobile_menu_user_nav_component__link" href="/sign_in?to=themeforest" data-turbo="false">
    Sign In
    <span class="shared-global_header-mobile_menu_user_nav_component__iconWrapper">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#envato_mobile_login'></use>
</svg>

    </span >
  </a>


      </div>
    </div>
  </div>
</div>

      <div class="shared-global_header-markets_nav_component__headerBottomWrapper">
  <div class="shared-global_header-markets_nav_component__gridWide">
    <nav aria-label="markets" class="shared-global_header-markets_nav_component__navWithLabelWrapper">
        <a class="shared-global_header-markets_nav_component__siteLink shared-global_header-markets_nav_component__active" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;ThemeForest&quot;}" href="https://themeforest.net/?auto_signin=true">Web Themes &amp; Templates</a>
        <a class="shared-global_header-markets_nav_component__siteLink" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;CodeCanyon&quot;}" href="https://codecanyon.net/?auto_signin=true">Code</a>
        <a class="shared-global_header-markets_nav_component__siteLink" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;VideoHive&quot;}" href="https://videohive.net/?auto_signin=true">Video</a>
        <a class="shared-global_header-markets_nav_component__siteLink" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;AudioJungle&quot;}" href="https://audiojungle.net/?auto_signin=true">Audio</a>
        <a class="shared-global_header-markets_nav_component__siteLink" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;GraphicRiver&quot;}" href="https://graphicriver.net/?auto_signin=true">Graphics</a>
        <a class="shared-global_header-markets_nav_component__siteLink" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;PhotoDune&quot;}" href="https://photodune.net/?auto_signin=true">Photos</a>
        <a class="shared-global_header-markets_nav_component__siteLink" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;3DOcean&quot;}" href="https://3docean.net/?auto_signin=true">3D Files</a>

      <div class="shared-global_header-elements_nav_component__root">
  <a class="shared-global_header-elements_nav_component__mainLink"
     href="https://elements.envato.com/?utm_campaign=elements_mkt-switcher_link&amp;utm_medium=referral&amp;utm_source=themeforest.net&amp;utm_content=tf_search"
     target="_blank"
  >
    <span
      data-action="mouseover->analytics-event#send click->analytics-event#sendAlt"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;site switcher&quot;,&quot;eventAction&quot;:&quot;hover&quot;,&quot;eventLabel&quot;:&quot;Site switcher;envato elements&quot;}"
      data-analytics-event-alt="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;site switcher&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Unlimited Downloads&quot;}"
    >
      Unlimited Downloads
    </span>
  </a>
  <div class="shared-global_header-elements_nav_component__dropdownContainer shared-global_header-elements_nav_component__uniqueSellingPointVariant">
    <a class="shared-global_header-elements_nav_component__mainPanel"
        href="https://elements.envato.com/?utm_campaign=elements_mkt-switcher_lhs-panel&amp;utm_medium=referral&amp;utm_source=themeforest.net&amp;utm_content=tf_search"
        target="_blank"
        data-action="analytics-event#send"
        data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;site switcher&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cta;Get Unlimited Downloads&quot;}"
    >
      <div>
        <img class="shared-global_header-elements_nav_component__elementsLogo" loading="lazy" src="https://assets.market-storefront.envato-static.com/storefront/assets/logos/envato-elements-93296989e268af4b90133a4016d66fa11eeab8340c5c90d9a172427209e8d492.svg" alt="Elements logo">
      </div>
      <strong class="shared-global_header-elements_nav_component__punchLine">
        Everything you need for your creative projects, for one low cost
      </strong>
      <img class="shared-global_header-elements_nav_component__itemsCollage" loading="lazy" src="https://assets.market-storefront.envato-static.com/storefront/assets/elements-items-collage-068b6a0e859dc995a5892aedc327396630e7868b1bc969c219375e4b3db87ca5.jpg" alt="Items Collage">
    </a>
    <div class="shared-global_header-elements_nav_component__secondaryPanel">
      <ul class="shared-global_header-elements_nav_component__sellingPoints">
        <li> Millions of creative assets</li>
        <li> Unlimited downloads</li>
        <li> Simple commercial licensing</li>
        <li> One low cost</li>
        <li> Cancel any time</li>
      </ul>
      <div class="shared-global_header-elements_nav_component__cta">
        <a href="https://elements.envato.com/?utm_campaign=elements_mkt-switcher_cta&amp;utm_medium=referral&amp;utm_source=themeforest.net&amp;utm_content=tf_search"
            target="_blank"
            data-action="analytics-event#send"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;site switcher&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cta;Get Unlimited Downloads&quot;}"
        >Get Unlimited Downloads&nbsp;</a>
      </div>
    </div>
  </div>
</div>


      <div class="shared-global_header-markets_nav_component__siteLogoWrapper">
        <picture>
          <source srcset="https://assets.market-storefront.envato-static.com/storefront/assets/logos/themeforest-dd57a83e1947d49586491f03d1c3eedc4c6a438d2740328c5277e6b67bc46ad9.webp" type="image/webp">
          <img src="https://assets.market-storefront.envato-static.com/storefront/assets/logos/themeforest-15052b5a8846d9acfb6183725cf28b5a4218288c307e0cd3628e9b7631e6dd0e.png"
               alt="ThemeForest"
               class="shared-global_header-markets_nav_component__siteLogo"
               width="115">
        </picture>
      </div>
    </nav>
  </div>
</div>


    </div>
    <div class="shared-global_header-global_header_component__headerCategoriesWrapper">
      <div class="shared-global_header-global_header_component__headerCategories">
        <div class="shared-global_header-global_header_component__gridWide">
          <nav class="shared-global_header-categories_menu_component__linksList" aria-label="categories">
    <div class="shared-global_header-categories_menu_component__menuItem">
      <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;All Items&quot;}" class="shared-global_header-categories_menu_component__link shared-global_header-categories_menu_component__link" href="/category/all">

        All Items


</a>
        <div class="shared-global_header-categories_menu_component__dropdownContainer">
          <nav class="shared-global_header-categories_menu_component__dropdown">
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;All Items - Popular Files&quot;}" href="/top-sellers">Popular Files</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;All Items - Featured Files&quot;}" href="/feature">Featured Files</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;All Items - Top New Files&quot;}" href="/category/all?date=this-month&amp;sort=sales">Top New Files</a>
              <a data-turbo="false" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;All Items - Follow Feed&quot;}" href="/follow_feed">Follow Feed</a>
              <a data-turbo="false" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;All Items - Top Authors&quot;}" href="/authors/top">Top Authors</a>
              <a data-turbo="false" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;All Items - Top New Authors&quot;}" href="/page/top_new_sellers">Top New Authors</a>
              <a data-turbo="false" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;All Items - Public Collections&quot;}" href="/collections">Public Collections</a>
              <a data-turbo="false" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;All Items - View All Categories&quot;}" href="/category">View All Categories</a>
          </nav>
        </div>
    </div>
    <div class="shared-global_header-categories_menu_component__menuItem">
      <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;WordPress&quot;}" class="shared-global_header-categories_menu_component__link shared-global_header-categories_menu_component__link" href="/category/wordpress">

        WordPress


</a>
        <div class="shared-global_header-categories_menu_component__dropdownContainer">
          <nav class="shared-global_header-categories_menu_component__dropdown">
              <a class="shared-global_header-categories_menu_component__dropdownTop" data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;WordPress - Popular Items&quot;}" href="/popular_item/by_category?category=wordpress">Popular Items</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;WordPress - Blog / Magazine&quot;}" href="/category/wordpress/blog-magazine">Blog / Magazine</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;WordPress - BuddyPress&quot;}" href="/category/wordpress/buddypress">BuddyPress</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;WordPress - Corporate&quot;}" href="/category/wordpress/corporate">Corporate</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;WordPress - Creative&quot;}" href="/category/wordpress/creative">Creative</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;WordPress - Directory \u0026 Listings&quot;}" href="/category/wordpress/corporate/directory-listings">Directory &amp; Listings</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;WordPress - eCommerce&quot;}" href="/category/wordpress/ecommerce">eCommerce</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;WordPress - Education&quot;}" href="/category/wordpress/education">Education</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;WordPress - Elementor&quot;}" href="/attributes/compatible-with/elementor">Elementor</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;WordPress - Entertainment&quot;}" href="/category/wordpress/entertainment">Entertainment</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;WordPress - Mobile&quot;}" href="/category/wordpress/mobile">Mobile</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;WordPress - Nonprofit&quot;}" href="/category/wordpress/nonprofit">Nonprofit</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;WordPress - Real Estate&quot;}" href="/category/wordpress/real-estate">Real Estate</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;WordPress - Retail&quot;}" href="/category/wordpress/retail">Retail</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;WordPress - Technology&quot;}" href="/category/wordpress/technology">Technology</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;WordPress - Wedding&quot;}" href="/category/wordpress/wedding">Wedding</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;WordPress - Miscellaneous&quot;}" href="/category/wordpress/miscellaneous">Miscellaneous</a>
              <a class="shared-global_header-categories_menu_component__dropdownBottom" data-turbo="false" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;WordPress - WordPress Plugins&quot;}" href="https://codecanyon.net/category/wordpress">WordPress Plugins</a>
          </nav>
        </div>
    </div>
    <div class="shared-global_header-categories_menu_component__menuItem">
      <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Elementor&quot;}" class="shared-global_header-categories_menu_component__link shared-global_header-categories_menu_component__link" href="/elementor">

        Elementor


</a>
        <div class="shared-global_header-categories_menu_component__dropdownContainer">
          <nav class="shared-global_header-categories_menu_component__dropdown">
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;Elementor - Template Kits&quot;}" href="/category/template-kits/elementor?sort=trending">Template Kits</a>
              <a data-turbo="false" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;Elementor - Plugins&quot;}" href="https://codecanyon.net/category/wordpress?compatible_with=Elementor&amp;sort=trending&amp;term=elementor">Plugins</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;Elementor - Themes&quot;}" href="/search/elementor?compatible_with=Elementor&amp;sort=trending">Themes</a>
          </nav>
        </div>
    </div>
    <div class="shared-global_header-categories_menu_component__menuItem">
      <a data-turbo="false" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Hosting&quot;}" class="shared-global_header-categories_menu_component__link shared-global_header-categories_menu_component__linkEmpty" href="/wordpress-hosting">

        Hosting


</a>
    </div>
    <div class="shared-global_header-categories_menu_component__menuItem">
      <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;HTML&quot;}" class="shared-global_header-categories_menu_component__link shared-global_header-categories_menu_component__link" href="/category/site-templates">

        HTML


</a>
        <div class="shared-global_header-categories_menu_component__dropdownContainer">
          <nav class="shared-global_header-categories_menu_component__dropdown">
              <a class="shared-global_header-categories_menu_component__dropdownTop" data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;HTML - Popular Items&quot;}" href="/popular_item/by_category?category=site-templates">Popular Items</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;HTML - Admin Templates&quot;}" href="/category/site-templates/admin-templates">Admin Templates</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;HTML - Corporate&quot;}" href="/category/site-templates/corporate">Corporate</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;HTML - Creative&quot;}" href="/category/site-templates/creative">Creative</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;HTML - Entertainment&quot;}" href="/category/site-templates/entertainment">Entertainment</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;HTML - Mobile&quot;}" href="/category/site-templates/mobile">Mobile</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;HTML - Nonprofit&quot;}" href="/category/site-templates/nonprofit">Nonprofit</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;HTML - Personal&quot;}" href="/category/site-templates/personal">Personal</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;HTML - Retail&quot;}" href="/category/site-templates/retail">Retail</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;HTML - Specialty Pages&quot;}" href="/category/site-templates/specialty-pages">Specialty Pages</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;HTML - Technology&quot;}" href="/category/site-templates/technology">Technology</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;HTML - Wedding&quot;}" href="/category/site-templates/wedding">Wedding</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;HTML - Miscellaneous&quot;}" href="/category/site-templates/miscellaneous">Miscellaneous</a>
          </nav>
        </div>
    </div>
    <div class="shared-global_header-categories_menu_component__menuItem">
      <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Shopify&quot;}" class="shared-global_header-categories_menu_component__link shared-global_header-categories_menu_component__link" href="/category/ecommerce/shopify">

        Shopify


</a>
        <div class="shared-global_header-categories_menu_component__dropdownContainer">
          <nav class="shared-global_header-categories_menu_component__dropdown">
              <a class="shared-global_header-categories_menu_component__dropdownTop" data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;Shopify - Popular Items&quot;}" href="/popular_item/by_category?category=ecommerce/shopify">Popular Items</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;Shopify - Fashion&quot;}" href="/category/ecommerce/shopify/fashion">Fashion</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;Shopify - Shopping&quot;}" href="/category/ecommerce/shopify/shopping">Shopping</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;Shopify - Health \u0026 Beauty&quot;}" href="/category/ecommerce/shopify/health-beauty">Health &amp; Beauty</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;Shopify - Technology&quot;}" href="/category/ecommerce/shopify/technology">Technology</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;Shopify - Entertainment&quot;}" href="/category/ecommerce/shopify/entertainment">Entertainment</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;Shopify - Miscellaneous&quot;}" href="/category/ecommerce/shopify/miscellaneous">Miscellaneous</a>
          </nav>
        </div>
    </div>
    <div class="shared-global_header-categories_menu_component__menuItem">
      <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Jamstack&quot;}" class="shared-global_header-categories_menu_component__link shared-global_header-categories_menu_component__linkEmpty" href="/category/jamstack">

        Jamstack


</a>
    </div>
    <div class="shared-global_header-categories_menu_component__menuItem">
      <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Marketing&quot;}" class="shared-global_header-categories_menu_component__link shared-global_header-categories_menu_component__link" href="/category/marketing">

        Marketing


</a>
        <div class="shared-global_header-categories_menu_component__dropdownContainer">
          <nav class="shared-global_header-categories_menu_component__dropdown">
              <a class="shared-global_header-categories_menu_component__dropdownTop" data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;Marketing - Popular Items&quot;}" href="/popular_item/by_category?category=marketing">Popular Items</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;Marketing - Email Templates&quot;}" href="/category/marketing/email-templates">Email Templates</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;Marketing - Landing Pages&quot;}" href="/category/marketing/landing-pages">Landing Pages</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;Marketing - Unbounce Landing Pages&quot;}" href="/category/marketing/unbounce-landing-pages">Unbounce Landing Pages</a>
          </nav>
        </div>
    </div>
    <div class="shared-global_header-categories_menu_component__menuItem">
      <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;CMS&quot;}" class="shared-global_header-categories_menu_component__link shared-global_header-categories_menu_component__link" href="/category/cms-themes">

        CMS


</a>
        <div class="shared-global_header-categories_menu_component__dropdownContainer">
          <nav class="shared-global_header-categories_menu_component__dropdown">
              <a class="shared-global_header-categories_menu_component__dropdownTop" data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;CMS - Popular Items&quot;}" href="/popular_item/by_category?category=cms-themes">Popular Items</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;CMS - Concrete5&quot;}" href="/category/cms-themes/concrete5">Concrete5</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;CMS - Drupal&quot;}" href="/category/cms-themes/drupal">Drupal</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;CMS - HubSpot CMS Hub&quot;}" href="/category/cms-themes/hubspot-cms-hub">HubSpot CMS Hub</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;CMS - Joomla&quot;}" href="/category/cms-themes/joomla">Joomla</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;CMS - MODX Themes&quot;}" href="/category/cms-themes/modx-themes">MODX Themes</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;CMS - Moodle&quot;}" href="/category/cms-themes/moodle">Moodle</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;CMS - Webflow&quot;}" href="/category/cms-themes/webflow">Webflow</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;CMS - Weebly&quot;}" href="/category/cms-themes/weebly">Weebly</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;CMS - Miscellaneous&quot;}" href="/category/cms-themes/miscellaneous">Miscellaneous</a>
          </nav>
        </div>
    </div>
    <div class="shared-global_header-categories_menu_component__menuItem">
      <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;eCommerce&quot;}" class="shared-global_header-categories_menu_component__link shared-global_header-categories_menu_component__link" href="/category/ecommerce">

        eCommerce


</a>
        <div class="shared-global_header-categories_menu_component__dropdownContainer">
          <nav class="shared-global_header-categories_menu_component__dropdown">
              <a class="shared-global_header-categories_menu_component__dropdownTop" data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;eCommerce - Popular Items&quot;}" href="/popular_item/by_category?category=ecommerce">Popular Items</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;eCommerce - WooCommerce&quot;}" href="/category/wordpress/ecommerce/woocommerce">WooCommerce</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;eCommerce - BigCommerce&quot;}" href="/category/ecommerce/bigcommerce">BigCommerce</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;eCommerce - Drupal Commerce&quot;}" href="/attributes/compatible-with/Drupal%20Commerce?sort=date">Drupal Commerce</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;eCommerce - Easy Digital Downloads&quot;}" href="/search?compatible_with=Easy+Digital+Downloads">Easy Digital Downloads</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;eCommerce - Ecwid&quot;}" href="/attributes/themeforest-files-included/ecwid%20css%20files">Ecwid</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;eCommerce - Magento&quot;}" href="/category/ecommerce/magento">Magento</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;eCommerce - OpenCart&quot;}" href="/category/ecommerce/opencart">OpenCart</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;eCommerce - PrestaShop&quot;}" href="/category/ecommerce/prestashop">PrestaShop</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;eCommerce - Shopify&quot;}" href="/category/ecommerce/shopify">Shopify</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;eCommerce - Ubercart&quot;}" href="/attributes/compatible-with/Ubercart?sort=date">Ubercart</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;eCommerce - VirtueMart&quot;}" href="/category/cms-themes/joomla/virtuemart">VirtueMart</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;eCommerce - Zen Cart&quot;}" href="/category/ecommerce/zen-cart">Zen Cart</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;eCommerce - Miscellaneous&quot;}" href="/category/ecommerce/miscellaneous">Miscellaneous</a>
          </nav>
        </div>
    </div>
    <div class="shared-global_header-categories_menu_component__menuItem">
      <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;UI Templates&quot;}" class="shared-global_header-categories_menu_component__link shared-global_header-categories_menu_component__link" href="/category/ui-templates">

        UI Templates


</a>
        <div class="shared-global_header-categories_menu_component__dropdownContainer">
          <nav class="shared-global_header-categories_menu_component__dropdown">
              <a class="shared-global_header-categories_menu_component__dropdownTop" data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;UI Templates - Popular Items&quot;}" href="/popular_item/by_category?category=ui-templates">Popular Items</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;UI Templates - Figma&quot;}" href="/category/ui-templates/figma">Figma</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;UI Templates - Adobe XD&quot;}" href="/category/ui-templates/adobe-xd">Adobe XD</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;UI Templates - Photoshop&quot;}" href="/category/ui-templates/photoshop">Photoshop</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;UI Templates - Sketch&quot;}" href="/category/ui-templates/sketch">Sketch</a>
          </nav>
        </div>
    </div>
    <div class="shared-global_header-categories_menu_component__menuItem">
      <a data-turbo="false" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Plugins&quot;}" class="shared-global_header-categories_menu_component__link shared-global_header-categories_menu_component__linkEmpty" href="https://codecanyon.net/category/wordpress">

        Plugins


</a>
    </div>
    <div class="shared-global_header-categories_menu_component__menuItem">
      <a data-turbo="false" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;More&quot;}" class="shared-global_header-categories_menu_component__link shared-global_header-categories_menu_component__link" href="/category">

        More


</a>
        <div class="shared-global_header-categories_menu_component__dropdownContainer">
          <nav class="shared-global_header-categories_menu_component__dropdown">
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;More - Blogging&quot;}" href="/category/blogging">Blogging</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;More - Blogger&quot;}" href="/category/blogging/blogger">Blogger</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;More - Facebook Templates&quot;}" href="/attributes/compatible-with/facebook">Facebook Templates</a>
              <a data-turbo="false" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;More - Free Elementor Templates&quot;}" href="https://elements.envato.com/extensions/wordpress">Free Elementor Templates</a>
              <a data-turbo="false" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;More - Free WordPress Themes&quot;}" href="https://themeforest.net/lp/free-wordpress-themes">Free WordPress Themes</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;More - Forums&quot;}" href="/category/forums">Forums</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;More - Ghost Themes&quot;}" href="/category/blogging/ghost-themes">Ghost Themes</a>
              <a data-turbo="true" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;MarketNav&quot;,&quot;eventLabel&quot;:&quot;More - Tumblr&quot;}" href="/category/blogging/tumblr">Tumblr</a>
              <a target="_blank" class="shared-global_header-categories_menu_component__linkExternal shared-global_header-categories_menu_component__linkElements shared-global_header-categories_menu_component__dropdownBottom" data-turbo="false" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;sub nav&quot;,&quot;eventLabel&quot;:&quot;Unlimited Creative Assets&quot;}" href="https://elements.envato.com/all-items/?utm_campaign=elements_mkt-nav_child&amp;utm_source=themeforest.net&amp;utm_medium=referral&amp;utm_content=tf_more">Unlimited Creative Assets</a>
          </nav>
        </div>
    </div>
</nav>

        </div>
      </div>
    </div>
  </div>

  
  <section class="category-show_content__root" role="main">
  <div class="shared-content_header_component__root">
  <div class="shared-content_header_component__wrapper">
    <div class="shared-content_header_component__headerWrapper">
      <ol class="shared-content_header_component__list">
          <li class="shared-content_header_component__listItem shared-content_header_component__crumb">
            <a class="shared-content_header_component__link" href="/">Home</a>
          </li>
          <li class="shared-content_header_component__listItem">/</li>
          <li class="shared-content_header_component__listItem shared-content_header_component__crumb">
            <a class="shared-content_header_component__link" href="/category/site-templates">Site Templates</a>
          </li>
          <li class="shared-content_header_component__listItem">/</li>
        <li class="shared-content_header_component__listItem shared-content_header_component__crumb">Personal</li>
      </ol>
      <h1 class="shared-content_header_component__heading">Personal Website Templates</h1>
    </div>
      <div class="shared-content_header_component__searchWrapper">
        <form role="search" method="get" action="/search"
      class="shared-autosuggest_component__root shared-autosuggest_component__fullLayoutStyle"
      data-controller="autosuggest"
      data-action="submit->autosuggest#onSubmit"
      data-autosuggest-target="form"
      data-autosuggest-result-class="shared-autosuggest_component__searchItem"
      data-autosuggest-result-category-class="shared-autosuggest_component__searchItemCategory"
      data-autosuggest-result-separator-class="shared-autosuggest_component__searchItemSeparator"
      data-autosuggest-category-value="site-templates/personal"
      data-autosuggest-suggestions-count-value="5">
  <input type="hidden" name="category" value="site-templates/personal" data-autosuggest-target="category">
  <div class="shared-autosuggest_component__searchInputWrapper">
    <input
      class="shared-autosuggest_component__searchInput"
      placeholder="Search within this category"
      name="term"
      autocomplete="off"
      type="search"
      aria-label="search"
      value=""
      data-search-term=""
      data-action="keydown->autosuggest#onKeydown blur->autosuggest#onInputBlur focus->autosuggest#onInputFocus input->autosuggest#onInputChange"
      data-autosuggest-target="input"
    />

    <nav class="shared-autosuggest_component__searchSuggestions" data-autosuggest-target="results"></nav>

    <button class="shared-autosuggest_component__searchBtn shared-autosuggest_component__alwaysIcon"
            aria-label="Search"
            data-action="click->analytics-event#send"
            data-autosuggest-target="submit"
            data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Search bar&quot;,&quot;eventCategory&quot;:&quot;Block interaction; Search&quot;}">

        <span class="shared-autosuggest_component__searchBtnIcon shared-autosuggest_component__alwaysIcon"><svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#search'></use>
</svg>
</span>
    </button>
  </div>
</form>

      </div>
  </div>
  <div class="shared-content_header_component__wrapper">
    <div
      class="shared-content_header_component__headerWrapper"
      data-controller="toggler"
      data-toggler-expanded-value="false"
      data-toggler-toggle-on-connect-value="false"
    >
          <p class="shared-content_header_component__subheading">Choose from over 800 personal website templates. Explore items created by our global community of independent designers and developers, confident they&#39;re hand-reviewed by us.</p>

    </div>
  </div>
</div>

    <div class="category-show_content__blockWrapper"><nav class="category-categories_with_count_block_component__root">
  <div class="category-categories_with_count_block_component__browseLinks">
    Browse
    <a class="category-categories_with_count_block_component__browseLink" href="/category/site-templates/personal?sort=date">Newest</a>
    <a class="category-categories_with_count_block_component__browseLink" href="/category/site-templates/personal?sort=sales">All</a>
  </div>
  <div class="category-categories_with_count_block_component__subcategoryLinks">
    <a class="category-categories_with_count_block_component__subcategoryLink" href="/category/site-templates/personal/virtual-business-card?sort=sales">Virtual Business Card (341)</a><a class="category-categories_with_count_block_component__subcategoryLink" href="/category/site-templates/personal/social-media-home?sort=sales">Social Media Home (8)</a><a class="category-categories_with_count_block_component__subcategoryLink" href="/category/site-templates/personal/photo-gallery?sort=sales">Photo Gallery (5)</a>
  </div>
</nav>
</div>
    <div class="category-show_content__blockWrapper"></div>
    <div class="category-show_content__blockWrapper"><section class="category-promo_items_block_component__root">
  <div class="category-promo_items_block_component__promoItemsBlockWrapper">
    <div
      data-controller="analytics-item-impressions"
      data-analytics-item-impressions-additional-params-value="{&quot;dimension26&quot;:&quot;site-templates/personal&quot;}"
      class="category-promo_items_block_component__itemCardGrid"
    >
      <div class="category-promo_items_block_component__ctaBlock">
        <header>
          <h2 class="category-promo_items_block_component__title">Save on personal website templates.</h2>
        </header>
        <div>
          <a rel="" class="shared-cta_button_component__root shared-cta_button_component__smallWide" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Block interaction;PromoItemsBlock&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Browse on sale themes&quot;}" href="https://themeforest.net/category/site-templates/personal?discounted_only=1&amp;discount_type=">Browse on sale themes</a>

        </div>
      </div>

        <div class="category-promo_items_block_component__promoItem">
          <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-grid-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="31542002"
     data-impression-position="1"
     data-impression-name="Lendex - Web Developer &amp; Designer Portfolio Bootstrap 5 Template"
     data-impression-list="Category Page: Save on personal website templates."
     data-impression-brand="codecarnival"
     data-impression-category="themeforest.net/site-templates/personal/virtual-business-card"
>
  <div class="shared-item_cards-grid-image_card_component__preview">
    <div class="shared-item_cards-grid-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;codecarnival&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:31542002,&quot;list&quot;:&quot;Category Page: Save on personal website templates.&quot;,&quot;name&quot;:&quot;Lendex - Web Developer \u0026 Designer Portfolio Bootstrap 5 Template&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Save on personal website templates.&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:31542002}]]" href="https://themeforest.net/item/lendex-personal-portfolio-bootstrap-5-template/31542002">
      <img src="https://themeforest.img.customer.envatousercontent.com/files/332829883/01_lendex_preview.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=118fe37b47019018072aede762af5846"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Lendex - Web Developer &amp; Designer Portfolio Bootstrap 5 Template"
        title="Lendex - Web Developer &amp; Designer Portfolio Bootstrap 5 Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/332829883/01_lendex_preview.__large_preview.jpg"
        data-carousel-target="image"
      />
</a></div>

    </div>
      <span class="shared-item_cards-sash_component__sash shared-item_cards-sash_component__sash_sale" style="width: 50px; height: 50px;">
  <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#sash_sale'></use>
</svg>

</span>

    <div class="shared-item_cards-grid-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
      <div class="shared-item_cards-grid-image_card_component__inner">
        <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
           href="https://themeforest.net/item/lendex-personal-portfolio-bootstrap-5-template/31542002" title="Lendex - Web Developer &amp; Designer Portfolio Bootstrap 5 Template"
           data-turbo="false"
           data-action="analytics-event#send"
           data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;codecarnival&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:31542002,&quot;list&quot;:&quot;Category Page: Save on personal website templates.&quot;,&quot;name&quot;:&quot;Lendex - Web Developer \u0026 Designer Portfolio Bootstrap 5 Template&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Save on personal website templates.&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:31542002}]]"></a>
        <div class="shared-item_cards-grid-image_card_component__buttons">
            <a
  href="/my/bookmarks/new?item_id=31542002"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="31542002"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:31542002}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

            <span class="shared-item_cards-grid-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/31542002"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="31542002">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
  </div>
  <div class="shared-item_cards-grid-image_card_component__content">
    <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
      href="https://themeforest.net/item/lendex-personal-portfolio-bootstrap-5-template/31542002"
      title="Lendex - Web Developer &amp; Designer Portfolio Bootstrap 5 Template"
      aria-label="View Lendex - Web Developer &amp; Designer Portfolio Bootstrap 5 Template"
      data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:31542002}]]"></a>

    <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;codecarnival&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:31542002,&quot;list&quot;:&quot;Category Page: Save on personal website templates.&quot;,&quot;name&quot;:&quot;Lendex - Web Developer \u0026 Designer Portfolio Bootstrap 5 Template&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Save on personal website templates.&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:31542002}]]" href="https://themeforest.net/item/lendex-personal-portfolio-bootstrap-5-template/31542002">Lendex - Web Developer & Designer Portfolio Bootstrap 5 Template</a>
</h3>


    <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://themeforest.net/user/codecarnival"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:31542002}]]"
  >
    codecarnival
  </a>
  in
  <a
    href="/category/site-templates/personal/virtual-business-card"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:31542002}]]"
    }
  >
    Virtual Business Card
  </a>
</div>


    <div class="shared-item_cards-grid-image_card_component__footer">
      <div class="shared-item_cards-grid-image_card_component__footerContent">
        <div class="shared-item_cards-price_component__root">
    <span class="shared-item_cards-price_component__originalPrice" role="group" aria-label="original price">$17</span>
    <span role="group" aria-label="promotional price" class="shared-item_cards-price_component__promoPrice">$11</span>
</div>

        
          <div class="shared-item_cards-sales_component__root">
  66 Sales
</div>

      </div>
      <div class="shared-item_cards-grid-image_card_component__footerButtons">
        <div class="shared-item_cards-grid-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/31542002"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=31542002"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="31542002"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;codecarnival&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:31542002,&quot;list&quot;:&quot;Category Page: Save on personal website templates.&quot;,&quot;name&quot;:&quot;Lendex - Web Developer \u0026 Designer Portfolio Bootstrap 5 Template&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:31542002}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

            <a href="https://themeforest.net/item/lendex-personal-portfolio-bootstrap-5-template/full_screen_preview/31542002"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;31542002&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

        </div>
      </div>
    </div>
  </div>
</div>

</div>

        </div>
        <div class="category-promo_items_block_component__promoItem">
          <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-grid-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="24622998"
     data-impression-position="2"
     data-impression-name="Cristino - Bootstrap 5 Personal Portfolio Template + Dark + RTL"
     data-impression-list="Category Page: Save on personal website templates."
     data-impression-brand="ShreeThemes"
     data-impression-category="themeforest.net/site-templates/personal/virtual-business-card"
>
  <div class="shared-item_cards-grid-image_card_component__preview">
    <div class="shared-item_cards-grid-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;ShreeThemes&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:24622998,&quot;list&quot;:&quot;Category Page: Save on personal website templates.&quot;,&quot;name&quot;:&quot;Cristino - Bootstrap 5 Personal Portfolio Template + Dark + RTL&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Save on personal website templates.&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:24622998}]]" href="https://themeforest.net/item/cristino-responsive-personal-portfolio-template/24622998">
      <img src="https://themeforest.img.customer.envatousercontent.com/files/454783334/01_cristino.png?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=aa7ff509c325e6a4e891c85a051ac7ce"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Cristino - Bootstrap 5 Personal Portfolio Template + Dark + RTL"
        title="Cristino - Bootstrap 5 Personal Portfolio Template + Dark + RTL"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/454783334/01_cristino.__large_preview.png"
        data-carousel-target="image"
      />
</a></div>

    </div>
      <span class="shared-item_cards-sash_component__sash shared-item_cards-sash_component__sash_sale" style="width: 50px; height: 50px;">
  <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#sash_sale'></use>
</svg>

</span>

    <div class="shared-item_cards-grid-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
      <div class="shared-item_cards-grid-image_card_component__inner">
        <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
           href="https://themeforest.net/item/cristino-responsive-personal-portfolio-template/24622998" title="Cristino - Bootstrap 5 Personal Portfolio Template + Dark + RTL"
           data-turbo="false"
           data-action="analytics-event#send"
           data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;ShreeThemes&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:24622998,&quot;list&quot;:&quot;Category Page: Save on personal website templates.&quot;,&quot;name&quot;:&quot;Cristino - Bootstrap 5 Personal Portfolio Template + Dark + RTL&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Save on personal website templates.&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:24622998}]]"></a>
        <div class="shared-item_cards-grid-image_card_component__buttons">
            <a
  href="/my/bookmarks/new?item_id=24622998"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="24622998"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:24622998}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

            <span class="shared-item_cards-grid-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/24622998"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="24622998">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
  </div>
  <div class="shared-item_cards-grid-image_card_component__content">
    <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
      href="https://themeforest.net/item/cristino-responsive-personal-portfolio-template/24622998"
      title="Cristino - Bootstrap 5 Personal Portfolio Template + Dark + RTL"
      aria-label="View Cristino - Bootstrap 5 Personal Portfolio Template + Dark + RTL"
      data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:24622998}]]"></a>

    <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;ShreeThemes&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:24622998,&quot;list&quot;:&quot;Category Page: Save on personal website templates.&quot;,&quot;name&quot;:&quot;Cristino - Bootstrap 5 Personal Portfolio Template + Dark + RTL&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Save on personal website templates.&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:24622998}]]" href="https://themeforest.net/item/cristino-responsive-personal-portfolio-template/24622998">Cristino - Bootstrap 5 Personal Portfolio Template + Dark + RTL</a>
</h3>


    <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://themeforest.net/user/shreethemes"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:24622998}]]"
  >
    ShreeThemes
  </a>
  in
  <a
    href="/category/site-templates/personal/virtual-business-card"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:24622998}]]"
    }
  >
    Virtual Business Card
  </a>
</div>


    <div class="shared-item_cards-grid-image_card_component__footer">
      <div class="shared-item_cards-grid-image_card_component__footerContent">
        <div class="shared-item_cards-price_component__root">
    <span class="shared-item_cards-price_component__originalPrice" role="group" aria-label="original price">$16</span>
    <span role="group" aria-label="promotional price" class="shared-item_cards-price_component__promoPrice">$12</span>
</div>

        <div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 5.0 out of 5, 10 reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_5.0'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(10)</span>
</div>

          <div class="shared-item_cards-sales_component__root">
  240 Sales
</div>

      </div>
      <div class="shared-item_cards-grid-image_card_component__footerButtons">
        <div class="shared-item_cards-grid-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/24622998"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=24622998"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="24622998"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;ShreeThemes&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:24622998,&quot;list&quot;:&quot;Category Page: Save on personal website templates.&quot;,&quot;name&quot;:&quot;Cristino - Bootstrap 5 Personal Portfolio Template + Dark + RTL&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:24622998}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

            <a href="https://themeforest.net/item/cristino-responsive-personal-portfolio-template/full_screen_preview/24622998"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;24622998&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

        </div>
      </div>
    </div>
  </div>
</div>

</div>

        </div>
        <div class="category-promo_items_block_component__promoItem">
          <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-grid-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="33516812"
     data-impression-position="3"
     data-impression-name="Persono | Personal HTML Template"
     data-impression-list="Category Page: Save on personal website templates."
     data-impression-brand="Frenify"
     data-impression-category="themeforest.net/site-templates/personal/virtual-business-card"
>
  <div class="shared-item_cards-grid-image_card_component__preview">
    <div class="shared-item_cards-grid-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Frenify&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:33516812,&quot;list&quot;:&quot;Category Page: Save on personal website templates.&quot;,&quot;name&quot;:&quot;Persono | Personal HTML Template&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Save on personal website templates.&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:33516812}]]" href="https://themeforest.net/item/persono-personal-html-template/33516812">
      <img src="https://themeforest.img.customer.envatousercontent.com/files/352172213/01-preview.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=e8d27cb39064f1324158017faca9fb8c"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Persono | Personal HTML Template"
        title="Persono | Personal HTML Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/352172213/01-preview.__large_preview.jpg"
        data-carousel-target="image"
      />
</a></div>

    </div>
      <span class="shared-item_cards-sash_component__sash shared-item_cards-sash_component__sash_sale" style="width: 50px; height: 50px;">
  <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#sash_sale'></use>
</svg>

</span>

    <div class="shared-item_cards-grid-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
      <div class="shared-item_cards-grid-image_card_component__inner">
        <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
           href="https://themeforest.net/item/persono-personal-html-template/33516812" title="Persono | Personal HTML Template"
           data-turbo="false"
           data-action="analytics-event#send"
           data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Frenify&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:33516812,&quot;list&quot;:&quot;Category Page: Save on personal website templates.&quot;,&quot;name&quot;:&quot;Persono | Personal HTML Template&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Save on personal website templates.&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:33516812}]]"></a>
        <div class="shared-item_cards-grid-image_card_component__buttons">
            <a
  href="/my/bookmarks/new?item_id=33516812"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="33516812"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:33516812}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

            <span class="shared-item_cards-grid-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/33516812"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="33516812">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
  </div>
  <div class="shared-item_cards-grid-image_card_component__content">
    <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
      href="https://themeforest.net/item/persono-personal-html-template/33516812"
      title="Persono | Personal HTML Template"
      aria-label="View Persono | Personal HTML Template"
      data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:33516812}]]"></a>

    <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Frenify&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:33516812,&quot;list&quot;:&quot;Category Page: Save on personal website templates.&quot;,&quot;name&quot;:&quot;Persono | Personal HTML Template&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Save on personal website templates.&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:33516812}]]" href="https://themeforest.net/item/persono-personal-html-template/33516812">Persono | Personal HTML Template</a>
</h3>


    <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://themeforest.net/user/frenify"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:33516812}]]"
  >
    Frenify
  </a>
  in
  <a
    href="/category/site-templates/personal/virtual-business-card"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:33516812}]]"
    }
  >
    Virtual Business Card
  </a>
</div>


    <div class="shared-item_cards-grid-image_card_component__footer">
      <div class="shared-item_cards-grid-image_card_component__footerContent">
        <div class="shared-item_cards-price_component__root">
    <span class="shared-item_cards-price_component__originalPrice" role="group" aria-label="original price">$20</span>
    <span role="group" aria-label="promotional price" class="shared-item_cards-price_component__promoPrice">$12</span>
</div>

        
          <div class="shared-item_cards-sales_component__root">
  24 Sales
</div>

      </div>
      <div class="shared-item_cards-grid-image_card_component__footerButtons">
        <div class="shared-item_cards-grid-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/33516812"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=33516812"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="33516812"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Frenify&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:33516812,&quot;list&quot;:&quot;Category Page: Save on personal website templates.&quot;,&quot;name&quot;:&quot;Persono | Personal HTML Template&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:33516812}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

            <a href="https://themeforest.net/item/persono-personal-html-template/full_screen_preview/33516812"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;33516812&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

        </div>
      </div>
    </div>
  </div>
</div>

</div>

        </div>
    </div>
  </div>
</section>
</div>
    <div class="category-show_content__blockWrapper"><section class="category-items_block_component__root">
  <header class="category-items_block_component__header">
    <h2 class="category-items_block_component__heading">
      <a
        href="/popular_item/by_category?category=site-templates/personal"
        data-action="analytics-event#send"
        data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;CategoryPage&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Weekly bestsellers &quot;}"
      >
        Weekly bestsellers 
      </a>
    </h2>
    <div class="category-items_block_component__button">
      <a rel="" class="shared-cta_button_component__root shared-cta_button_component__small" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;CategoryPage&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Weekly bestsellers &quot;}" href="/popular_item/by_category?category=site-templates/personal">View all</a>

    </div>

  </header>
  <div
    data-controller="analytics-item-impressions"
    data-analytics-item-impressions-additional-params-value="{&quot;dimension26&quot;:&quot;site-templates/personal&quot;}"
    class="category-items_block_component__itemCardGrid"
  >
      <div class="category-items_block_component__itemCard">
        <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-grid-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="33188244"
     data-impression-position="1"
     data-impression-name="InBio - Personal Portfolio"
     data-impression-list="Category Page: Weekly bestsellers "
     data-impression-brand="Rainbow-Themes"
     data-impression-category="themeforest.net/site-templates/personal/virtual-business-card"
>
  <div class="shared-item_cards-grid-image_card_component__preview">
    <div class="shared-item_cards-grid-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__multipleImages"
  style="padding-bottom: 50.847457627118644%"
  data-controller="carousel"
>
    <button aria-hidden="true"
      class="shared-item_cards-preview_image_component__prevButton"
      data-action="analytics-event#send click->carousel#prev"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;SearchCatImageCarousel&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:33188244}"
    >
      <div class="shared-item_cards-preview_image_component__svgWrapper">
        <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#chevron_left'></use>
</svg>

      </div>
    </button>
    <button aria-hidden="true"
      class="shared-item_cards-preview_image_component__nextButton"
      data-action="analytics-event#send click->carousel#next"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;SearchCatImageCarousel&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:33188244}"
    >
      <div class="shared-item_cards-preview_image_component__svgWrapper">
        <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#button_chevron_right'></use>
</svg>

      </div>
    </button>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Rainbow-Themes&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:33188244,&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;,&quot;name&quot;:&quot;InBio - Personal Portfolio&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:33188244}]]" href="https://themeforest.net/item/inbio-one-page-personal-portfolio-template/33188244">
      <img src="https://themeforest.img.customer.envatousercontent.com/files/404781609/01_preview.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=25fb419f41782ef26a8cc5ec52843592"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="InBio - Personal Portfolio"
        title="InBio - Personal Portfolio"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/404781609/01_preview.__large_preview.jpg"
        data-carousel-target="image"
      />
      <img src="https://themeforest.img.customer.envatousercontent.com/files/404781609/02_preview.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=69f6c5608ca1b70ba836edcc7e7c2ba0"
        loading="lazy"
        style="left: 100%"
        class="shared-item_cards-preview_image_component__image"
        alt="InBio - Personal Portfolio"
        title="InBio - Personal Portfolio"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/404781609/01_preview.__large_preview.jpg"
        data-carousel-target="image"
      />
</a></div>

    </div>
      <span class="shared-item_cards-sash_component__sash shared-item_cards-sash_component__sash_trending" style="width: 50px; height: 50px;">
  <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#sash_trending'></use>
</svg>

</span>

    <div class="shared-item_cards-grid-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
      <div class="shared-item_cards-grid-image_card_component__inner">
        <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
           href="https://themeforest.net/item/inbio-one-page-personal-portfolio-template/33188244" title="InBio - Personal Portfolio"
           data-turbo="false"
           data-action="analytics-event#send"
           data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Rainbow-Themes&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:33188244,&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;,&quot;name&quot;:&quot;InBio - Personal Portfolio&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:33188244}]]"></a>
        <div class="shared-item_cards-grid-image_card_component__buttons">
            <a
  href="/my/bookmarks/new?item_id=33188244"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="33188244"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:33188244}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

            <span class="shared-item_cards-grid-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/33188244"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="33188244">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
  </div>
  <div class="shared-item_cards-grid-image_card_component__content">
    <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
      href="https://themeforest.net/item/inbio-one-page-personal-portfolio-template/33188244"
      title="InBio - Personal Portfolio"
      aria-label="View InBio - Personal Portfolio"
      data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:33188244}]]"></a>

    <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Rainbow-Themes&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:33188244,&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;,&quot;name&quot;:&quot;InBio - Personal Portfolio&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:33188244}]]" href="https://themeforest.net/item/inbio-one-page-personal-portfolio-template/33188244">InBio - Personal Portfolio</a>
</h3>


    <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://themeforest.net/user/rainbow-themes"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:33188244}]]"
  >
    Rainbow-Themes
  </a>
  in
  <a
    href="/category/site-templates/personal/virtual-business-card"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:33188244}]]"
    }
  >
    Virtual Business Card
  </a>
</div>


    <div class="shared-item_cards-grid-image_card_component__footer">
      <div class="shared-item_cards-grid-image_card_component__footerContent">
        <div class="shared-item_cards-price_component__root">
    $9
</div>

        <div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 4.76 out of 5, 29 reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_5.0'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(29)</span>
</div>

          <div class="shared-item_cards-sales_component__root">
  1.3K Sales
</div>

      </div>
      <div class="shared-item_cards-grid-image_card_component__footerButtons">
        <div class="shared-item_cards-grid-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/33188244"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=33188244"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="33188244"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Rainbow-Themes&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:33188244,&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;,&quot;name&quot;:&quot;InBio - Personal Portfolio&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:33188244}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

            <a href="https://themeforest.net/item/inbio-one-page-personal-portfolio-template/full_screen_preview/33188244"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;33188244&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

        </div>
      </div>
    </div>
  </div>
</div>

</div>

      </div>
      <div class="category-items_block_component__itemCard">
        <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-grid-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="48947458"
     data-impression-position="2"
     data-impression-name="InFo | Personal Portfolio Resume Template"
     data-impression-list="Category Page: Weekly bestsellers "
     data-impression-brand="crowdyflow"
     data-impression-category="themeforest.net/site-templates/personal/virtual-business-card"
>
  <div class="shared-item_cards-grid-image_card_component__preview">
    <div class="shared-item_cards-grid-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;crowdyflow&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:48947458,&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;,&quot;name&quot;:&quot;InFo | Personal Portfolio Resume Template&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:48947458}]]" href="https://themeforest.net/item/info-personal-portfolio-resume-template/48947458">
      <img src="https://themeforest.img.customer.envatousercontent.com/files/475909946/01_preview.png?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=6bb91e0d8bfa8232307fa057971d7a05"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="InFo | Personal Portfolio Resume Template"
        title="InFo | Personal Portfolio Resume Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/475909946/01_preview.__large_preview.png"
        data-carousel-target="image"
      />
</a></div>

    </div>
      <span class="shared-item_cards-sash_component__sash shared-item_cards-sash_component__sash_trending" style="width: 50px; height: 50px;">
  <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#sash_trending'></use>
</svg>

</span>

    <div class="shared-item_cards-grid-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
      <div class="shared-item_cards-grid-image_card_component__inner">
        <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
           href="https://themeforest.net/item/info-personal-portfolio-resume-template/48947458" title="InFo | Personal Portfolio Resume Template"
           data-turbo="false"
           data-action="analytics-event#send"
           data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;crowdyflow&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:48947458,&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;,&quot;name&quot;:&quot;InFo | Personal Portfolio Resume Template&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:48947458}]]"></a>
        <div class="shared-item_cards-grid-image_card_component__buttons">
            <a
  href="/my/bookmarks/new?item_id=48947458"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="48947458"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:48947458}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

            <span class="shared-item_cards-grid-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/48947458"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="48947458">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
  </div>
  <div class="shared-item_cards-grid-image_card_component__content">
    <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
      href="https://themeforest.net/item/info-personal-portfolio-resume-template/48947458"
      title="InFo | Personal Portfolio Resume Template"
      aria-label="View InFo | Personal Portfolio Resume Template"
      data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:48947458}]]"></a>

    <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;crowdyflow&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:48947458,&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;,&quot;name&quot;:&quot;InFo | Personal Portfolio Resume Template&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:48947458}]]" href="https://themeforest.net/item/info-personal-portfolio-resume-template/48947458">InFo | Personal Portfolio Resume Template</a>
</h3>


    <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://themeforest.net/user/crowdyflow"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:48947458}]]"
  >
    crowdyflow
  </a>
  in
  <a
    href="/category/site-templates/personal/virtual-business-card"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:48947458}]]"
    }
  >
    Virtual Business Card
  </a>
</div>


    <div class="shared-item_cards-grid-image_card_component__footer">
      <div class="shared-item_cards-grid-image_card_component__footerContent">
        <div class="shared-item_cards-price_component__root">
    $17
</div>

        
          <div class="shared-item_cards-sales_component__root">
  103 Sales
</div>

      </div>
      <div class="shared-item_cards-grid-image_card_component__footerButtons">
        <div class="shared-item_cards-grid-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/48947458"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=48947458"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="48947458"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;crowdyflow&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:48947458,&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;,&quot;name&quot;:&quot;InFo | Personal Portfolio Resume Template&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:48947458}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

            <a href="https://themeforest.net/item/info-personal-portfolio-resume-template/full_screen_preview/48947458"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;48947458&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

        </div>
      </div>
    </div>
  </div>
</div>

</div>

      </div>
      <div class="category-items_block_component__itemCard">
        <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-grid-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="43411972"
     data-impression-position="3"
     data-impression-name="EdgeFolio - Nextjs React Blog Portfolio TailwindCSS Template"
     data-impression-list="Category Page: Weekly bestsellers "
     data-impression-brand="ElegantStack"
     data-impression-category="themeforest.net/site-templates/personal/virtual-business-card"
>
  <div class="shared-item_cards-grid-image_card_component__preview">
    <div class="shared-item_cards-grid-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__multipleImages"
  style="padding-bottom: 50.847457627118644%"
  data-controller="carousel"
>
    <button aria-hidden="true"
      class="shared-item_cards-preview_image_component__prevButton"
      data-action="analytics-event#send click->carousel#prev"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;SearchCatImageCarousel&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:43411972}"
    >
      <div class="shared-item_cards-preview_image_component__svgWrapper">
        <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#chevron_left'></use>
</svg>

      </div>
    </button>
    <button aria-hidden="true"
      class="shared-item_cards-preview_image_component__nextButton"
      data-action="analytics-event#send click->carousel#next"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;SearchCatImageCarousel&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:43411972}"
    >
      <div class="shared-item_cards-preview_image_component__svgWrapper">
        <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#button_chevron_right'></use>
</svg>

      </div>
    </button>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;ElegantStack&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:43411972,&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;,&quot;name&quot;:&quot;EdgeFolio - Nextjs React Blog Portfolio TailwindCSS Template&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:43411972}]]" href="https://themeforest.net/item/edgefolio-nextjs-react-blog-portfolio-tailwindcss-template/43411972">
      <img src="https://themeforest.img.customer.envatousercontent.com/files/433135885/01_next-theme-edgefolio-preview.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=13882f3d4ee17f111b727991a8e0a2f4"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="EdgeFolio - Nextjs React Blog Portfolio TailwindCSS Template"
        title="EdgeFolio - Nextjs React Blog Portfolio TailwindCSS Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/433135885/01_next-theme-edgefolio-preview.__large_preview.jpg"
        data-carousel-target="image"
      />
      <img src="https://themeforest.img.customer.envatousercontent.com/files/433135885/02_next-theme-edgefolio-preview.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=088420d4c3eb1bd7f03f9563e026f280"
        loading="lazy"
        style="left: 100%"
        class="shared-item_cards-preview_image_component__image"
        alt="EdgeFolio - Nextjs React Blog Portfolio TailwindCSS Template"
        title="EdgeFolio - Nextjs React Blog Portfolio TailwindCSS Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/433135885/01_next-theme-edgefolio-preview.__large_preview.jpg"
        data-carousel-target="image"
      />
</a></div>

    </div>
      
    <div class="shared-item_cards-grid-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
      <div class="shared-item_cards-grid-image_card_component__inner">
        <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
           href="https://themeforest.net/item/edgefolio-nextjs-react-blog-portfolio-tailwindcss-template/43411972" title="EdgeFolio - Nextjs React Blog Portfolio TailwindCSS Template"
           data-turbo="false"
           data-action="analytics-event#send"
           data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;ElegantStack&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:43411972,&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;,&quot;name&quot;:&quot;EdgeFolio - Nextjs React Blog Portfolio TailwindCSS Template&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:43411972}]]"></a>
        <div class="shared-item_cards-grid-image_card_component__buttons">
            <a
  href="/my/bookmarks/new?item_id=43411972"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="43411972"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:43411972}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

            <span class="shared-item_cards-grid-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/43411972"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="43411972">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
  </div>
  <div class="shared-item_cards-grid-image_card_component__content">
    <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
      href="https://themeforest.net/item/edgefolio-nextjs-react-blog-portfolio-tailwindcss-template/43411972"
      title="EdgeFolio - Nextjs React Blog Portfolio TailwindCSS Template"
      aria-label="View EdgeFolio - Nextjs React Blog Portfolio TailwindCSS Template"
      data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:43411972}]]"></a>

    <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;ElegantStack&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:43411972,&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;,&quot;name&quot;:&quot;EdgeFolio - Nextjs React Blog Portfolio TailwindCSS Template&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:43411972}]]" href="https://themeforest.net/item/edgefolio-nextjs-react-blog-portfolio-tailwindcss-template/43411972">EdgeFolio - Nextjs React Blog Portfolio TailwindCSS Template</a>
</h3>


    <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://themeforest.net/user/elegantstack"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:43411972}]]"
  >
    ElegantStack
  </a>
  in
  <a
    href="/category/site-templates/personal/virtual-business-card"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:43411972}]]"
    }
  >
    Virtual Business Card
  </a>
</div>


    <div class="shared-item_cards-grid-image_card_component__footer">
      <div class="shared-item_cards-grid-image_card_component__footerContent">
        <div class="shared-item_cards-price_component__root">
    $19
</div>

        <div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 5.0 out of 5, 12 reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_5.0'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(12)</span>
</div>

          <div class="shared-item_cards-sales_component__root">
  327 Sales
</div>

      </div>
      <div class="shared-item_cards-grid-image_card_component__footerButtons">
        <div class="shared-item_cards-grid-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/43411972"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=43411972"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="43411972"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;ElegantStack&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:43411972,&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;,&quot;name&quot;:&quot;EdgeFolio - Nextjs React Blog Portfolio TailwindCSS Template&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:43411972}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

            <a href="https://themeforest.net/item/edgefolio-nextjs-react-blog-portfolio-tailwindcss-template/full_screen_preview/43411972"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;43411972&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

        </div>
      </div>
    </div>
  </div>
</div>

</div>

      </div>
      <div class="category-items_block_component__itemCard">
        <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-grid-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="26081195"
     data-impression-position="4"
     data-impression-name="BreezyCV Resume Template"
     data-impression-list="Category Page: Weekly bestsellers "
     data-impression-brand="LMPixels"
     data-impression-category="themeforest.net/site-templates/personal/virtual-business-card"
>
  <div class="shared-item_cards-grid-image_card_component__preview">
    <div class="shared-item_cards-grid-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;LMPixels&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:26081195,&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;,&quot;name&quot;:&quot;BreezyCV Resume Template&quot;,&quot;position&quot;:4}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:26081195}]]" href="https://themeforest.net/item/breezycv-resume-cv-template/26081195">
      <img src="https://themeforest.img.customer.envatousercontent.com/files/286692087/Screenshots/01_screenshot.png?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=874a0868fadd24c0343928ea268ef641"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="BreezyCV Resume Template"
        title="BreezyCV Resume Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/286692087/Screenshots/01_screenshot.__large_preview.png"
        data-carousel-target="image"
      />
</a></div>

    </div>
      
    <div class="shared-item_cards-grid-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
      <div class="shared-item_cards-grid-image_card_component__inner">
        <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
           href="https://themeforest.net/item/breezycv-resume-cv-template/26081195" title="BreezyCV Resume Template"
           data-turbo="false"
           data-action="analytics-event#send"
           data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;LMPixels&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:26081195,&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;,&quot;name&quot;:&quot;BreezyCV Resume Template&quot;,&quot;position&quot;:4}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:26081195}]]"></a>
        <div class="shared-item_cards-grid-image_card_component__buttons">
            <a
  href="/my/bookmarks/new?item_id=26081195"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="26081195"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:26081195}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

            <span class="shared-item_cards-grid-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/26081195"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="26081195">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
  </div>
  <div class="shared-item_cards-grid-image_card_component__content">
    <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
      href="https://themeforest.net/item/breezycv-resume-cv-template/26081195"
      title="BreezyCV Resume Template"
      aria-label="View BreezyCV Resume Template"
      data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:26081195}]]"></a>

    <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;LMPixels&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:26081195,&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;,&quot;name&quot;:&quot;BreezyCV Resume Template&quot;,&quot;position&quot;:4}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:26081195}]]" href="https://themeforest.net/item/breezycv-resume-cv-template/26081195">BreezyCV Resume Template</a>
</h3>


    <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://themeforest.net/user/lmpixels"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:26081195}]]"
  >
    LMPixels
  </a>
  in
  <a
    href="/category/site-templates/personal/virtual-business-card"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:26081195}]]"
    }
  >
    Virtual Business Card
  </a>
</div>


    <div class="shared-item_cards-grid-image_card_component__footer">
      <div class="shared-item_cards-grid-image_card_component__footerContent">
        <div class="shared-item_cards-price_component__root">
    $9
</div>

        <div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 4.91 out of 5, 46 reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_5.0'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(46)</span>
</div>

          <div class="shared-item_cards-sales_component__root">
  2.6K Sales
</div>

      </div>
      <div class="shared-item_cards-grid-image_card_component__footerButtons">
        <div class="shared-item_cards-grid-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/26081195"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=26081195"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="26081195"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;LMPixels&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:26081195,&quot;list&quot;:&quot;Category Page: Weekly bestsellers &quot;,&quot;name&quot;:&quot;BreezyCV Resume Template&quot;,&quot;position&quot;:4}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:26081195}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

            <a href="https://themeforest.net/item/breezycv-resume-cv-template/full_screen_preview/26081195"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;26081195&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

        </div>
      </div>
    </div>
  </div>
</div>

</div>

      </div>
  </div>
</section>
</div>
    <div class="category-show_content__blockWrapper"><section class="category-items_block_component__root">
  <header class="category-items_block_component__header">
    <h2 class="category-items_block_component__heading">
      <a
        href="/category/site-templates/personal?date=this-year&amp;price_max=14&amp;sort=sales"
        data-action="analytics-event#send"
        data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;CategoryPage&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Hot under $15&quot;}"
      >
        Hot under $15
      </a>
    </h2>
    <div class="category-items_block_component__button">
      <a rel="" class="shared-cta_button_component__root shared-cta_button_component__small" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;CategoryPage&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Hot under $15&quot;}" href="/category/site-templates/personal?date=this-year&amp;price_max=14&amp;sort=sales">View all</a>

    </div>

  </header>
  <div
    data-controller="analytics-item-impressions"
    data-analytics-item-impressions-additional-params-value="{&quot;dimension26&quot;:&quot;site-templates/personal&quot;}"
    class="category-items_block_component__itemCardGrid"
  >
      <div class="category-items_block_component__itemCard">
        <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-grid-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="45770026"
     data-impression-position="1"
     data-impression-name="Tokyo - Tailwind CSS Personal Portfolio React Next JS Template"
     data-impression-list="Category Page: Hot under $15"
     data-impression-brand="CodeeFly"
     data-impression-category="themeforest.net/site-templates/personal/virtual-business-card"
>
  <div class="shared-item_cards-grid-image_card_component__preview">
    <div class="shared-item_cards-grid-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CodeeFly&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:45770026,&quot;list&quot;:&quot;Category Page: Hot under $15&quot;,&quot;name&quot;:&quot;Tokyo - Tailwind CSS Personal Portfolio React Next JS Template&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Hot under $15&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:45770026}]]" href="https://themeforest.net/item/tokyo-tailwind-css-personal-portfolio-react-next-js-template/45770026">
      <img src="https://themeforest.img.customer.envatousercontent.com/files/464136784/01_preview.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=46ddc4910e357943f684cd7a0f961aa0"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Tokyo - Tailwind CSS Personal Portfolio React Next JS Template"
        title="Tokyo - Tailwind CSS Personal Portfolio React Next JS Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/464136784/01_preview.__large_preview.jpg"
        data-carousel-target="image"
      />
</a></div>

    </div>
      
    <div class="shared-item_cards-grid-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
      <div class="shared-item_cards-grid-image_card_component__inner">
        <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
           href="https://themeforest.net/item/tokyo-tailwind-css-personal-portfolio-react-next-js-template/45770026" title="Tokyo - Tailwind CSS Personal Portfolio React Next JS Template"
           data-turbo="false"
           data-action="analytics-event#send"
           data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CodeeFly&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:45770026,&quot;list&quot;:&quot;Category Page: Hot under $15&quot;,&quot;name&quot;:&quot;Tokyo - Tailwind CSS Personal Portfolio React Next JS Template&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Hot under $15&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:45770026}]]"></a>
        <div class="shared-item_cards-grid-image_card_component__buttons">
            <a
  href="/my/bookmarks/new?item_id=45770026"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="45770026"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:45770026}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

            <span class="shared-item_cards-grid-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/45770026"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="45770026">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
  </div>
  <div class="shared-item_cards-grid-image_card_component__content">
    <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
      href="https://themeforest.net/item/tokyo-tailwind-css-personal-portfolio-react-next-js-template/45770026"
      title="Tokyo - Tailwind CSS Personal Portfolio React Next JS Template"
      aria-label="View Tokyo - Tailwind CSS Personal Portfolio React Next JS Template"
      data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:45770026}]]"></a>

    <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CodeeFly&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:45770026,&quot;list&quot;:&quot;Category Page: Hot under $15&quot;,&quot;name&quot;:&quot;Tokyo - Tailwind CSS Personal Portfolio React Next JS Template&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Hot under $15&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:45770026}]]" href="https://themeforest.net/item/tokyo-tailwind-css-personal-portfolio-react-next-js-template/45770026">Tokyo - Tailwind CSS Personal Portfolio React Next JS Template</a>
</h3>


    <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://themeforest.net/user/codeefly"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:45770026}]]"
  >
    CodeeFly
  </a>
  in
  <a
    href="/category/site-templates/personal/virtual-business-card"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:45770026}]]"
    }
  >
    Virtual Business Card
  </a>
</div>


    <div class="shared-item_cards-grid-image_card_component__footer">
      <div class="shared-item_cards-grid-image_card_component__footerContent">
        <div class="shared-item_cards-price_component__root">
    $14
</div>

        <div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 4.0 out of 5, 4 reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_4.0'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(4)</span>
</div>

          <div class="shared-item_cards-sales_component__root">
  176 Sales
</div>

      </div>
      <div class="shared-item_cards-grid-image_card_component__footerButtons">
        <div class="shared-item_cards-grid-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/45770026"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=45770026"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="45770026"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CodeeFly&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:45770026,&quot;list&quot;:&quot;Category Page: Hot under $15&quot;,&quot;name&quot;:&quot;Tokyo - Tailwind CSS Personal Portfolio React Next JS Template&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:45770026}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

            <a href="https://themeforest.net/item/tokyo-tailwind-css-personal-portfolio-react-next-js-template/full_screen_preview/45770026"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;45770026&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

        </div>
      </div>
    </div>
  </div>
</div>

</div>

      </div>
      <div class="category-items_block_component__itemCard">
        <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-grid-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="44819595"
     data-impression-position="2"
     data-impression-name="Cavani | Tailwind NextJs Personal Portfolio Template"
     data-impression-list="Category Page: Hot under $15"
     data-impression-brand="TrendyCoder"
     data-impression-category="themeforest.net/site-templates/personal"
>
  <div class="shared-item_cards-grid-image_card_component__preview">
    <div class="shared-item_cards-grid-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;TrendyCoder&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal&quot;,&quot;id&quot;:44819595,&quot;list&quot;:&quot;Category Page: Hot under $15&quot;,&quot;name&quot;:&quot;Cavani | Tailwind NextJs Personal Portfolio Template&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Hot under $15&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:44819595}]]" href="https://themeforest.net/item/cavani-tailwind-nextjs-personal-portfolio-template/44819595">
      <img src="https://themeforest.img.customer.envatousercontent.com/files/443080622/01_preview.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=6f38752278f3ae6dca8b0414dfdd32c6"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Cavani | Tailwind NextJs Personal Portfolio Template"
        title="Cavani | Tailwind NextJs Personal Portfolio Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/443080622/01_preview.__large_preview.jpg"
        data-carousel-target="image"
      />
</a></div>

    </div>
      
    <div class="shared-item_cards-grid-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
      <div class="shared-item_cards-grid-image_card_component__inner">
        <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
           href="https://themeforest.net/item/cavani-tailwind-nextjs-personal-portfolio-template/44819595" title="Cavani | Tailwind NextJs Personal Portfolio Template"
           data-turbo="false"
           data-action="analytics-event#send"
           data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;TrendyCoder&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal&quot;,&quot;id&quot;:44819595,&quot;list&quot;:&quot;Category Page: Hot under $15&quot;,&quot;name&quot;:&quot;Cavani | Tailwind NextJs Personal Portfolio Template&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Hot under $15&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:44819595}]]"></a>
        <div class="shared-item_cards-grid-image_card_component__buttons">
            <a
  href="/my/bookmarks/new?item_id=44819595"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="44819595"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:44819595}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

            <span class="shared-item_cards-grid-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/44819595"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="44819595">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
  </div>
  <div class="shared-item_cards-grid-image_card_component__content">
    <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
      href="https://themeforest.net/item/cavani-tailwind-nextjs-personal-portfolio-template/44819595"
      title="Cavani | Tailwind NextJs Personal Portfolio Template"
      aria-label="View Cavani | Tailwind NextJs Personal Portfolio Template"
      data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:44819595}]]"></a>

    <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;TrendyCoder&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal&quot;,&quot;id&quot;:44819595,&quot;list&quot;:&quot;Category Page: Hot under $15&quot;,&quot;name&quot;:&quot;Cavani | Tailwind NextJs Personal Portfolio Template&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Hot under $15&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:44819595}]]" href="https://themeforest.net/item/cavani-tailwind-nextjs-personal-portfolio-template/44819595">Cavani | Tailwind NextJs Personal Portfolio Template</a>
</h3>


    <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://themeforest.net/user/trendycoder"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:44819595}]]"
  >
    TrendyCoder
  </a>
  in
  <a
    href="/category/site-templates/personal"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:44819595}]]"
    }
  >
    Personal
  </a>
</div>


    <div class="shared-item_cards-grid-image_card_component__footer">
      <div class="shared-item_cards-grid-image_card_component__footerContent">
        <div class="shared-item_cards-price_component__root">
    $14
</div>

        
          <div class="shared-item_cards-sales_component__root">
  100 Sales
</div>

      </div>
      <div class="shared-item_cards-grid-image_card_component__footerButtons">
        <div class="shared-item_cards-grid-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/44819595"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=44819595"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="44819595"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;TrendyCoder&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal&quot;,&quot;id&quot;:44819595,&quot;list&quot;:&quot;Category Page: Hot under $15&quot;,&quot;name&quot;:&quot;Cavani | Tailwind NextJs Personal Portfolio Template&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:44819595}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

            <a href="https://themeforest.net/item/cavani-tailwind-nextjs-personal-portfolio-template/full_screen_preview/44819595"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;44819595&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

        </div>
      </div>
    </div>
  </div>
</div>

</div>

      </div>
      <div class="category-items_block_component__itemCard">
        <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-grid-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="48025133"
     data-impression-position="3"
     data-impression-name="Zyan - Personal Portfolio HTML Template"
     data-impression-list="Category Page: Hot under $15"
     data-impression-brand="CodeeFly"
     data-impression-category="themeforest.net/site-templates/personal"
>
  <div class="shared-item_cards-grid-image_card_component__preview">
    <div class="shared-item_cards-grid-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CodeeFly&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal&quot;,&quot;id&quot;:48025133,&quot;list&quot;:&quot;Category Page: Hot under $15&quot;,&quot;name&quot;:&quot;Zyan - Personal Portfolio HTML Template&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Hot under $15&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:48025133}]]" href="https://themeforest.net/item/zyan-personal-portfolio-html-template/48025133">
      <img src="https://themeforest.img.customer.envatousercontent.com/files/477192085/01_preview.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=82bf154ab24320e2f0e77ff0d2b30178"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Zyan - Personal Portfolio HTML Template"
        title="Zyan - Personal Portfolio HTML Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/477192085/01_preview.__large_preview.jpg"
        data-carousel-target="image"
      />
</a></div>

    </div>
      
    <div class="shared-item_cards-grid-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
      <div class="shared-item_cards-grid-image_card_component__inner">
        <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
           href="https://themeforest.net/item/zyan-personal-portfolio-html-template/48025133" title="Zyan - Personal Portfolio HTML Template"
           data-turbo="false"
           data-action="analytics-event#send"
           data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CodeeFly&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal&quot;,&quot;id&quot;:48025133,&quot;list&quot;:&quot;Category Page: Hot under $15&quot;,&quot;name&quot;:&quot;Zyan - Personal Portfolio HTML Template&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Hot under $15&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:48025133}]]"></a>
        <div class="shared-item_cards-grid-image_card_component__buttons">
            <a
  href="/my/bookmarks/new?item_id=48025133"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="48025133"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:48025133}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

            <span class="shared-item_cards-grid-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/48025133"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="48025133">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
  </div>
  <div class="shared-item_cards-grid-image_card_component__content">
    <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
      href="https://themeforest.net/item/zyan-personal-portfolio-html-template/48025133"
      title="Zyan - Personal Portfolio HTML Template"
      aria-label="View Zyan - Personal Portfolio HTML Template"
      data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:48025133}]]"></a>

    <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CodeeFly&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal&quot;,&quot;id&quot;:48025133,&quot;list&quot;:&quot;Category Page: Hot under $15&quot;,&quot;name&quot;:&quot;Zyan - Personal Portfolio HTML Template&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Hot under $15&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:48025133}]]" href="https://themeforest.net/item/zyan-personal-portfolio-html-template/48025133">Zyan - Personal Portfolio HTML Template</a>
</h3>


    <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://themeforest.net/user/codeefly"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:48025133}]]"
  >
    CodeeFly
  </a>
  in
  <a
    href="/category/site-templates/personal"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:48025133}]]"
    }
  >
    Personal
  </a>
</div>


    <div class="shared-item_cards-grid-image_card_component__footer">
      <div class="shared-item_cards-grid-image_card_component__footerContent">
        <div class="shared-item_cards-price_component__root">
    $14
</div>

        
          <div class="shared-item_cards-sales_component__root">
  95 Sales
</div>

      </div>
      <div class="shared-item_cards-grid-image_card_component__footerButtons">
        <div class="shared-item_cards-grid-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/48025133"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=48025133"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="48025133"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CodeeFly&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal&quot;,&quot;id&quot;:48025133,&quot;list&quot;:&quot;Category Page: Hot under $15&quot;,&quot;name&quot;:&quot;Zyan - Personal Portfolio HTML Template&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:48025133}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

            <a href="https://themeforest.net/item/zyan-personal-portfolio-html-template/full_screen_preview/48025133"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;48025133&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

        </div>
      </div>
    </div>
  </div>
</div>

</div>

      </div>
      <div class="category-items_block_component__itemCard">
        <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-grid-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="43811231"
     data-impression-position="4"
     data-impression-name="Fervor Love, Dating and Community HTML Template"
     data-impression-list="Category Page: Hot under $15"
     data-impression-brand="webstrot"
     data-impression-category="themeforest.net/site-templates/personal/social-media-home"
>
  <div class="shared-item_cards-grid-image_card_component__preview">
    <div class="shared-item_cards-grid-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__multipleImages"
  style="padding-bottom: 50.847457627118644%"
  data-controller="carousel"
>
    <button aria-hidden="true"
      class="shared-item_cards-preview_image_component__prevButton"
      data-action="analytics-event#send click->carousel#prev"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;SearchCatImageCarousel&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:43811231}"
    >
      <div class="shared-item_cards-preview_image_component__svgWrapper">
        <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#chevron_left'></use>
</svg>

      </div>
    </button>
    <button aria-hidden="true"
      class="shared-item_cards-preview_image_component__nextButton"
      data-action="analytics-event#send click->carousel#next"
      data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;SearchCatImageCarousel&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:43811231}"
    >
      <div class="shared-item_cards-preview_image_component__svgWrapper">
        <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#button_chevron_right'></use>
</svg>

      </div>
    </button>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;webstrot&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/social-media-home&quot;,&quot;id&quot;:43811231,&quot;list&quot;:&quot;Category Page: Hot under $15&quot;,&quot;name&quot;:&quot;Fervor Love, Dating and Community HTML Template&quot;,&quot;position&quot;:4}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Hot under $15&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:43811231}]]" href="https://themeforest.net/item/fervor-dating-and-community-html-template/43811231">
      <img src="https://themeforest.img.customer.envatousercontent.com/files/453667371/Theme+Preview/01_Preview.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=2c824ba6018940204e3d7c696a640005"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Fervor Love, Dating and Community HTML Template"
        title="Fervor Love, Dating and Community HTML Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/453667371/Theme%20Preview/01_Preview.__large_preview.jpg"
        data-carousel-target="image"
      />
      <img src="https://themeforest.img.customer.envatousercontent.com/files/453667371/Theme+Preview/02_Preview.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=9e2952ad01ecb5ea272c018bafb6a5d5"
        loading="lazy"
        style="left: 100%"
        class="shared-item_cards-preview_image_component__image"
        alt="Fervor Love, Dating and Community HTML Template"
        title="Fervor Love, Dating and Community HTML Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/453667371/Theme%20Preview/01_Preview.__large_preview.jpg"
        data-carousel-target="image"
      />
      <img src="https://themeforest.img.customer.envatousercontent.com/files/453667371/Theme+Preview/03_Preview.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=a50224e720f53e099bf2ab7f988a5360"
        loading="lazy"
        style="left: 200%"
        class="shared-item_cards-preview_image_component__image"
        alt="Fervor Love, Dating and Community HTML Template"
        title="Fervor Love, Dating and Community HTML Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/453667371/Theme%20Preview/01_Preview.__large_preview.jpg"
        data-carousel-target="image"
      />
      <img src="https://themeforest.img.customer.envatousercontent.com/files/453667371/Theme+Preview/04_Preview.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=4bc15b9e4ab19cab93ef663303ba7cfb"
        loading="lazy"
        style="left: 300%"
        class="shared-item_cards-preview_image_component__image"
        alt="Fervor Love, Dating and Community HTML Template"
        title="Fervor Love, Dating and Community HTML Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/453667371/Theme%20Preview/01_Preview.__large_preview.jpg"
        data-carousel-target="image"
      />
</a></div>

    </div>
      
    <div class="shared-item_cards-grid-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
      <div class="shared-item_cards-grid-image_card_component__inner">
        <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
           href="https://themeforest.net/item/fervor-dating-and-community-html-template/43811231" title="Fervor Love, Dating and Community HTML Template"
           data-turbo="false"
           data-action="analytics-event#send"
           data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;webstrot&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/social-media-home&quot;,&quot;id&quot;:43811231,&quot;list&quot;:&quot;Category Page: Hot under $15&quot;,&quot;name&quot;:&quot;Fervor Love, Dating and Community HTML Template&quot;,&quot;position&quot;:4}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Hot under $15&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:43811231}]]"></a>
        <div class="shared-item_cards-grid-image_card_component__buttons">
            <a
  href="/my/bookmarks/new?item_id=43811231"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="43811231"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:43811231}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

            <span class="shared-item_cards-grid-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/43811231"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="43811231">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
  </div>
  <div class="shared-item_cards-grid-image_card_component__content">
    <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
      href="https://themeforest.net/item/fervor-dating-and-community-html-template/43811231"
      title="Fervor Love, Dating and Community HTML Template"
      aria-label="View Fervor Love, Dating and Community HTML Template"
      data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:43811231}]]"></a>

    <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;webstrot&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/social-media-home&quot;,&quot;id&quot;:43811231,&quot;list&quot;:&quot;Category Page: Hot under $15&quot;,&quot;name&quot;:&quot;Fervor Love, Dating and Community HTML Template&quot;,&quot;position&quot;:4}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Hot under $15&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:43811231}]]" href="https://themeforest.net/item/fervor-dating-and-community-html-template/43811231">Fervor Love, Dating and Community HTML Template</a>
</h3>


    <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://themeforest.net/user/webstrot"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:43811231}]]"
  >
    webstrot
  </a>
  in
  <a
    href="/category/site-templates/personal/social-media-home"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:43811231}]]"
    }
  >
    Social Media Home
  </a>
</div>


    <div class="shared-item_cards-grid-image_card_component__footer">
      <div class="shared-item_cards-grid-image_card_component__footerContent">
        <div class="shared-item_cards-price_component__root">
    $12
</div>

        
          <div class="shared-item_cards-sales_component__root">
  55 Sales
</div>

      </div>
      <div class="shared-item_cards-grid-image_card_component__footerButtons">
        <div class="shared-item_cards-grid-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/43811231"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=43811231"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="43811231"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;webstrot&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/social-media-home&quot;,&quot;id&quot;:43811231,&quot;list&quot;:&quot;Category Page: Hot under $15&quot;,&quot;name&quot;:&quot;Fervor Love, Dating and Community HTML Template&quot;,&quot;position&quot;:4}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:43811231}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

            <a href="https://themeforest.net/item/fervor-dating-and-community-html-template/full_screen_preview/43811231"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;43811231&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

        </div>
      </div>
    </div>
  </div>
</div>

</div>

      </div>
  </div>
</section>
</div>
    <div class="category-show_content__blockWrapper"></div>
    <div class="category-show_content__blockWrapper"><section class="category-items_block_component__root">
  <header class="category-items_block_component__header">
    <h2 class="category-items_block_component__heading">
      <a
        href="/category/site-templates/personal?date=this-year&amp;sort=sales"
        data-action="analytics-event#send"
        data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;CategoryPage&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;New bestsellers&quot;}"
      >
        New bestsellers
      </a>
    </h2>
    <div class="category-items_block_component__button">
      <a rel="" class="shared-cta_button_component__root shared-cta_button_component__small" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;CategoryPage&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;New bestsellers&quot;}" href="/category/site-templates/personal?date=this-year&amp;sort=sales">View all</a>

    </div>

  </header>
  <div
    data-controller="analytics-item-impressions"
    data-analytics-item-impressions-additional-params-value="{&quot;dimension26&quot;:&quot;site-templates/personal&quot;}"
    class="category-items_block_component__itemCardGrid"
  >
      <div class="category-items_block_component__itemCard">
        <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-grid-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="44820345"
     data-impression-position="1"
     data-impression-name="R.Elisc - Personal Portfolio HTML Template"
     data-impression-list="Category Page: New bestsellers"
     data-impression-brand="Marketify"
     data-impression-category="themeforest.net/site-templates/personal/virtual-business-card"
>
  <div class="shared-item_cards-grid-image_card_component__preview">
    <div class="shared-item_cards-grid-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Marketify&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:44820345,&quot;list&quot;:&quot;Category Page: New bestsellers&quot;,&quot;name&quot;:&quot;R.Elisc - Personal Portfolio HTML Template&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: New bestsellers&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:44820345}]]" href="https://themeforest.net/item/relisc-personal-portfolio-html-template/44820345">
      <img src="https://themeforest.img.customer.envatousercontent.com/files/469891605/preview/01_preview.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=dce10606e9e3dd8829379041aaffbf80"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="R.Elisc - Personal Portfolio HTML Template"
        title="R.Elisc - Personal Portfolio HTML Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/469891605/preview/01_preview.__large_preview.jpg"
        data-carousel-target="image"
      />
</a></div>

    </div>
      
    <div class="shared-item_cards-grid-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
      <div class="shared-item_cards-grid-image_card_component__inner">
        <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
           href="https://themeforest.net/item/relisc-personal-portfolio-html-template/44820345" title="R.Elisc - Personal Portfolio HTML Template"
           data-turbo="false"
           data-action="analytics-event#send"
           data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Marketify&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:44820345,&quot;list&quot;:&quot;Category Page: New bestsellers&quot;,&quot;name&quot;:&quot;R.Elisc - Personal Portfolio HTML Template&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: New bestsellers&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:44820345}]]"></a>
        <div class="shared-item_cards-grid-image_card_component__buttons">
            <a
  href="/my/bookmarks/new?item_id=44820345"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="44820345"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:44820345}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

            <span class="shared-item_cards-grid-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/44820345"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="44820345">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
  </div>
  <div class="shared-item_cards-grid-image_card_component__content">
    <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
      href="https://themeforest.net/item/relisc-personal-portfolio-html-template/44820345"
      title="R.Elisc - Personal Portfolio HTML Template"
      aria-label="View R.Elisc - Personal Portfolio HTML Template"
      data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:44820345}]]"></a>

    <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Marketify&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:44820345,&quot;list&quot;:&quot;Category Page: New bestsellers&quot;,&quot;name&quot;:&quot;R.Elisc - Personal Portfolio HTML Template&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: New bestsellers&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:44820345}]]" href="https://themeforest.net/item/relisc-personal-portfolio-html-template/44820345">R.Elisc - Personal Portfolio HTML Template</a>
</h3>


    <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://themeforest.net/user/marketify"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:44820345}]]"
  >
    Marketify
  </a>
  in
  <a
    href="/category/site-templates/personal/virtual-business-card"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:44820345}]]"
    }
  >
    Virtual Business Card
  </a>
</div>


    <div class="shared-item_cards-grid-image_card_component__footer">
      <div class="shared-item_cards-grid-image_card_component__footerContent">
        <div class="shared-item_cards-price_component__root">
    $19
</div>

        <div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 5.0 out of 5, 5 reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_5.0'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(5)</span>
</div>

          <div class="shared-item_cards-sales_component__root">
  236 Sales
</div>

      </div>
      <div class="shared-item_cards-grid-image_card_component__footerButtons">
        <div class="shared-item_cards-grid-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/44820345"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=44820345"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="44820345"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Marketify&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:44820345,&quot;list&quot;:&quot;Category Page: New bestsellers&quot;,&quot;name&quot;:&quot;R.Elisc - Personal Portfolio HTML Template&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:44820345}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

            <a href="https://themeforest.net/item/relisc-personal-portfolio-html-template/full_screen_preview/44820345"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;44820345&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

        </div>
      </div>
    </div>
  </div>
</div>

</div>

      </div>
      <div class="category-items_block_component__itemCard">
        <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-grid-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="43862814"
     data-impression-position="2"
     data-impression-name="Callum - Personal Portfolio React Template"
     data-impression-list="Category Page: New bestsellers"
     data-impression-brand="HarnishDesign"
     data-impression-category="themeforest.net/site-templates/personal/virtual-business-card"
>
  <div class="shared-item_cards-grid-image_card_component__preview">
    <div class="shared-item_cards-grid-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;HarnishDesign&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:43862814,&quot;list&quot;:&quot;Category Page: New bestsellers&quot;,&quot;name&quot;:&quot;Callum - Personal Portfolio React Template&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: New bestsellers&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:43862814}]]" href="https://themeforest.net/item/callum-personal-portfolio-react-template/43862814">
      <img src="https://themeforest.img.customer.envatousercontent.com/files/455001952/preview/preview.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=4284270cfd3ea6d180e0690fa755972c"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Callum - Personal Portfolio React Template"
        title="Callum - Personal Portfolio React Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/455001952/preview/preview.__large_preview.jpg"
        data-carousel-target="image"
      />
</a></div>

    </div>
      
    <div class="shared-item_cards-grid-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
      <div class="shared-item_cards-grid-image_card_component__inner">
        <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
           href="https://themeforest.net/item/callum-personal-portfolio-react-template/43862814" title="Callum - Personal Portfolio React Template"
           data-turbo="false"
           data-action="analytics-event#send"
           data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;HarnishDesign&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:43862814,&quot;list&quot;:&quot;Category Page: New bestsellers&quot;,&quot;name&quot;:&quot;Callum - Personal Portfolio React Template&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: New bestsellers&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:43862814}]]"></a>
        <div class="shared-item_cards-grid-image_card_component__buttons">
            <a
  href="/my/bookmarks/new?item_id=43862814"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="43862814"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:43862814}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

            <span class="shared-item_cards-grid-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/43862814"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="43862814">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
  </div>
  <div class="shared-item_cards-grid-image_card_component__content">
    <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
      href="https://themeforest.net/item/callum-personal-portfolio-react-template/43862814"
      title="Callum - Personal Portfolio React Template"
      aria-label="View Callum - Personal Portfolio React Template"
      data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:43862814}]]"></a>

    <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;HarnishDesign&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:43862814,&quot;list&quot;:&quot;Category Page: New bestsellers&quot;,&quot;name&quot;:&quot;Callum - Personal Portfolio React Template&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: New bestsellers&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:43862814}]]" href="https://themeforest.net/item/callum-personal-portfolio-react-template/43862814">Callum - Personal Portfolio React Template</a>
</h3>


    <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://themeforest.net/user/harnishdesign"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:43862814}]]"
  >
    HarnishDesign
  </a>
  in
  <a
    href="/category/site-templates/personal/virtual-business-card"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:43862814}]]"
    }
  >
    Virtual Business Card
  </a>
</div>


    <div class="shared-item_cards-grid-image_card_component__footer">
      <div class="shared-item_cards-grid-image_card_component__footerContent">
        <div class="shared-item_cards-price_component__root">
    $18
</div>

        <div class="shared-stars_rating_component__root">
  <div
    class="shared-stars_rating_component__starRating"
    role="img"
    aria-label="Rated 5.0 out of 5, 3 reviews"
  >
    <span class="shared-stars_rating_component__star">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#stars_5.0'></use>
</svg>

    </span>
  </div>
  <span aria-hidden="true" class="shared-stars_rating_component__starRatingCount">(3)</span>
</div>

          <div class="shared-item_cards-sales_component__root">
  193 Sales
</div>

      </div>
      <div class="shared-item_cards-grid-image_card_component__footerButtons">
        <div class="shared-item_cards-grid-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/43862814"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=43862814"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="43862814"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;HarnishDesign&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:43862814,&quot;list&quot;:&quot;Category Page: New bestsellers&quot;,&quot;name&quot;:&quot;Callum - Personal Portfolio React Template&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:43862814}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

            <a href="https://themeforest.net/item/callum-personal-portfolio-react-template/full_screen_preview/43862814"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;43862814&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

        </div>
      </div>
    </div>
  </div>
</div>

</div>

      </div>
      <div class="category-items_block_component__itemCard">
        <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-grid-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="43407658"
     data-impression-position="3"
     data-impression-name="Valkivid - Tailwind CSS Content Creators HTML Template"
     data-impression-list="Category Page: New bestsellers"
     data-impression-brand="dan_fisher"
     data-impression-category="themeforest.net/site-templates/personal/social-media-home"
>
  <div class="shared-item_cards-grid-image_card_component__preview">
    <div class="shared-item_cards-grid-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;dan_fisher&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/social-media-home&quot;,&quot;id&quot;:43407658,&quot;list&quot;:&quot;Category Page: New bestsellers&quot;,&quot;name&quot;:&quot;Valkivid - Tailwind CSS Content Creators HTML Template&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: New bestsellers&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:43407658}]]" href="https://themeforest.net/item/valkivid-tailwind-css-content-creators-html-template/43407658">
      <img src="https://themeforest.img.customer.envatousercontent.com/files/479474581/00_preview.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=6a1bd55a9b0cc8a3fe0841fb07a509a2"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Valkivid - Tailwind CSS Content Creators HTML Template"
        title="Valkivid - Tailwind CSS Content Creators HTML Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/479474581/00_preview.__large_preview.jpg"
        data-carousel-target="image"
      />
</a></div>

    </div>
      
    <div class="shared-item_cards-grid-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
      <div class="shared-item_cards-grid-image_card_component__inner">
        <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
           href="https://themeforest.net/item/valkivid-tailwind-css-content-creators-html-template/43407658" title="Valkivid - Tailwind CSS Content Creators HTML Template"
           data-turbo="false"
           data-action="analytics-event#send"
           data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;dan_fisher&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/social-media-home&quot;,&quot;id&quot;:43407658,&quot;list&quot;:&quot;Category Page: New bestsellers&quot;,&quot;name&quot;:&quot;Valkivid - Tailwind CSS Content Creators HTML Template&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: New bestsellers&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:43407658}]]"></a>
        <div class="shared-item_cards-grid-image_card_component__buttons">
            <a
  href="/my/bookmarks/new?item_id=43407658"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="43407658"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:43407658}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

            <span class="shared-item_cards-grid-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/43407658"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="43407658">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
  </div>
  <div class="shared-item_cards-grid-image_card_component__content">
    <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
      href="https://themeforest.net/item/valkivid-tailwind-css-content-creators-html-template/43407658"
      title="Valkivid - Tailwind CSS Content Creators HTML Template"
      aria-label="View Valkivid - Tailwind CSS Content Creators HTML Template"
      data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:43407658}]]"></a>

    <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;dan_fisher&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/social-media-home&quot;,&quot;id&quot;:43407658,&quot;list&quot;:&quot;Category Page: New bestsellers&quot;,&quot;name&quot;:&quot;Valkivid - Tailwind CSS Content Creators HTML Template&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: New bestsellers&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:43407658}]]" href="https://themeforest.net/item/valkivid-tailwind-css-content-creators-html-template/43407658">Valkivid - Tailwind CSS Content Creators HTML Template</a>
</h3>


    <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://themeforest.net/user/dan_fisher"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:43407658}]]"
  >
    dan_fisher
  </a>
  in
  <a
    href="/category/site-templates/personal/social-media-home"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:43407658}]]"
    }
  >
    Social Media Home
  </a>
</div>


    <div class="shared-item_cards-grid-image_card_component__footer">
      <div class="shared-item_cards-grid-image_card_component__footerContent">
        <div class="shared-item_cards-price_component__root">
    $19
</div>

        
          <div class="shared-item_cards-sales_component__root">
  100 Sales
</div>

      </div>
      <div class="shared-item_cards-grid-image_card_component__footerButtons">
        <div class="shared-item_cards-grid-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/43407658"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=43407658"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="43407658"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;dan_fisher&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/social-media-home&quot;,&quot;id&quot;:43407658,&quot;list&quot;:&quot;Category Page: New bestsellers&quot;,&quot;name&quot;:&quot;Valkivid - Tailwind CSS Content Creators HTML Template&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:43407658}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

            <a href="https://themeforest.net/item/valkivid-tailwind-css-content-creators-html-template/full_screen_preview/43407658"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;43407658&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

        </div>
      </div>
    </div>
  </div>
</div>

</div>

      </div>
      <div class="category-items_block_component__itemCard">
        <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-grid-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="46132341"
     data-impression-position="4"
     data-impression-name="Tony – React NextJs Personal Portfolio Template"
     data-impression-list="Category Page: New bestsellers"
     data-impression-brand="CodeeFly"
     data-impression-category="themeforest.net/site-templates/personal"
>
  <div class="shared-item_cards-grid-image_card_component__preview">
    <div class="shared-item_cards-grid-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CodeeFly&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal&quot;,&quot;id&quot;:46132341,&quot;list&quot;:&quot;Category Page: New bestsellers&quot;,&quot;name&quot;:&quot;Tony – React NextJs Personal Portfolio Template&quot;,&quot;position&quot;:4}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: New bestsellers&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:46132341}]]" href="https://themeforest.net/item/tony-react-nextjs-personal-portfolio-template/46132341">
      <img src="https://themeforest.img.customer.envatousercontent.com/files/452566676/01_preview.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=fa05a0519db012ccb5d2c5bb85c0866a"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Tony – React NextJs Personal Portfolio Template"
        title="Tony – React NextJs Personal Portfolio Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/452566676/01_preview.__large_preview.jpg"
        data-carousel-target="image"
      />
</a></div>

    </div>
      
    <div class="shared-item_cards-grid-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
      <div class="shared-item_cards-grid-image_card_component__inner">
        <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
           href="https://themeforest.net/item/tony-react-nextjs-personal-portfolio-template/46132341" title="Tony – React NextJs Personal Portfolio Template"
           data-turbo="false"
           data-action="analytics-event#send"
           data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CodeeFly&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal&quot;,&quot;id&quot;:46132341,&quot;list&quot;:&quot;Category Page: New bestsellers&quot;,&quot;name&quot;:&quot;Tony – React NextJs Personal Portfolio Template&quot;,&quot;position&quot;:4}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: New bestsellers&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:46132341}]]"></a>
        <div class="shared-item_cards-grid-image_card_component__buttons">
            <a
  href="/my/bookmarks/new?item_id=46132341"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="46132341"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:46132341}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

            <span class="shared-item_cards-grid-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/46132341"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="46132341">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
  </div>
  <div class="shared-item_cards-grid-image_card_component__content">
    <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
      href="https://themeforest.net/item/tony-react-nextjs-personal-portfolio-template/46132341"
      title="Tony – React NextJs Personal Portfolio Template"
      aria-label="View Tony – React NextJs Personal Portfolio Template"
      data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:46132341}]]"></a>

    <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CodeeFly&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal&quot;,&quot;id&quot;:46132341,&quot;list&quot;:&quot;Category Page: New bestsellers&quot;,&quot;name&quot;:&quot;Tony – React NextJs Personal Portfolio Template&quot;,&quot;position&quot;:4}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: New bestsellers&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:46132341}]]" href="https://themeforest.net/item/tony-react-nextjs-personal-portfolio-template/46132341">Tony – React NextJs Personal Portfolio Template</a>
</h3>


    <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://themeforest.net/user/codeefly"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:46132341}]]"
  >
    CodeeFly
  </a>
  in
  <a
    href="/category/site-templates/personal"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:46132341}]]"
    }
  >
    Personal
  </a>
</div>


    <div class="shared-item_cards-grid-image_card_component__footer">
      <div class="shared-item_cards-grid-image_card_component__footerContent">
        <div class="shared-item_cards-price_component__root">
    $17
</div>

        
          <div class="shared-item_cards-sales_component__root">
  64 Sales
</div>

      </div>
      <div class="shared-item_cards-grid-image_card_component__footerButtons">
        <div class="shared-item_cards-grid-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/46132341"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=46132341"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="46132341"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CodeeFly&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal&quot;,&quot;id&quot;:46132341,&quot;list&quot;:&quot;Category Page: New bestsellers&quot;,&quot;name&quot;:&quot;Tony – React NextJs Personal Portfolio Template&quot;,&quot;position&quot;:4}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:46132341}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

            <a href="https://themeforest.net/item/tony-react-nextjs-personal-portfolio-template/full_screen_preview/46132341"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;46132341&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

        </div>
      </div>
    </div>
  </div>
</div>

</div>

      </div>
  </div>
</section>
</div>
    <div class="category-show_content__blockWrapper"><section class="category-items_block_component__root">
  <header class="category-items_block_component__header">
    <h2 class="category-items_block_component__heading">
      <a
        href="/category/site-templates/personal?date=this-year&amp;sort=sales&amp;term=vcard"
        data-action="analytics-event#send"
        data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;CategoryPage&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Top vcard items&quot;}"
      >
        Top vcard items
      </a>
    </h2>
    <div class="category-items_block_component__button">
      <a rel="" class="shared-cta_button_component__root shared-cta_button_component__small" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;CategoryPage&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Top vcard items&quot;}" href="/category/site-templates/personal?date=this-year&amp;sort=sales&amp;term=vcard">View all</a>

    </div>

  </header>
  <div
    data-controller="analytics-item-impressions"
    data-analytics-item-impressions-additional-params-value="{&quot;dimension26&quot;:&quot;site-templates/personal&quot;}"
    class="category-items_block_component__itemCardGrid"
  >
      <div class="category-items_block_component__itemCard">
        <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-grid-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="46697610"
     data-impression-position="1"
     data-impression-name="R.Elisc - Personal Portfolio React Next JS Template"
     data-impression-list="Category Page: Top vcard items"
     data-impression-brand="CodeeFly"
     data-impression-category="themeforest.net/site-templates/personal/virtual-business-card"
>
  <div class="shared-item_cards-grid-image_card_component__preview">
    <div class="shared-item_cards-grid-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CodeeFly&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:46697610,&quot;list&quot;:&quot;Category Page: Top vcard items&quot;,&quot;name&quot;:&quot;R.Elisc - Personal Portfolio React Next JS Template&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top vcard items&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:46697610}]]" href="https://themeforest.net/item/relisc-personal-portfolio-react-next-js-template/46697610">
      <img src="https://themeforest.img.customer.envatousercontent.com/files/466258055/01_preview.png?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=d73c3691a95deedb81a8c9378aaf0e77"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="R.Elisc - Personal Portfolio React Next JS Template"
        title="R.Elisc - Personal Portfolio React Next JS Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/466258055/01_preview.__large_preview.png"
        data-carousel-target="image"
      />
</a></div>

    </div>
      
    <div class="shared-item_cards-grid-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
      <div class="shared-item_cards-grid-image_card_component__inner">
        <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
           href="https://themeforest.net/item/relisc-personal-portfolio-react-next-js-template/46697610" title="R.Elisc - Personal Portfolio React Next JS Template"
           data-turbo="false"
           data-action="analytics-event#send"
           data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CodeeFly&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:46697610,&quot;list&quot;:&quot;Category Page: Top vcard items&quot;,&quot;name&quot;:&quot;R.Elisc - Personal Portfolio React Next JS Template&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top vcard items&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:46697610}]]"></a>
        <div class="shared-item_cards-grid-image_card_component__buttons">
            <a
  href="/my/bookmarks/new?item_id=46697610"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="46697610"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:46697610}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

            <span class="shared-item_cards-grid-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/46697610"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="46697610">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
  </div>
  <div class="shared-item_cards-grid-image_card_component__content">
    <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
      href="https://themeforest.net/item/relisc-personal-portfolio-react-next-js-template/46697610"
      title="R.Elisc - Personal Portfolio React Next JS Template"
      aria-label="View R.Elisc - Personal Portfolio React Next JS Template"
      data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:46697610}]]"></a>

    <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CodeeFly&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:46697610,&quot;list&quot;:&quot;Category Page: Top vcard items&quot;,&quot;name&quot;:&quot;R.Elisc - Personal Portfolio React Next JS Template&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top vcard items&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:46697610}]]" href="https://themeforest.net/item/relisc-personal-portfolio-react-next-js-template/46697610">R.Elisc - Personal Portfolio React Next JS Template</a>
</h3>


    <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://themeforest.net/user/codeefly"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:46697610}]]"
  >
    CodeeFly
  </a>
  in
  <a
    href="/category/site-templates/personal/virtual-business-card"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:46697610}]]"
    }
  >
    Virtual Business Card
  </a>
</div>


    <div class="shared-item_cards-grid-image_card_component__footer">
      <div class="shared-item_cards-grid-image_card_component__footerContent">
        <div class="shared-item_cards-price_component__root">
    $17
</div>

        
          <div class="shared-item_cards-sales_component__root">
  47 Sales
</div>

      </div>
      <div class="shared-item_cards-grid-image_card_component__footerButtons">
        <div class="shared-item_cards-grid-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/46697610"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=46697610"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="46697610"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CodeeFly&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:46697610,&quot;list&quot;:&quot;Category Page: Top vcard items&quot;,&quot;name&quot;:&quot;R.Elisc - Personal Portfolio React Next JS Template&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:46697610}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

            <a href="https://themeforest.net/item/relisc-personal-portfolio-react-next-js-template/full_screen_preview/46697610"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;46697610&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

        </div>
      </div>
    </div>
  </div>
</div>

</div>

      </div>
      <div class="category-items_block_component__itemCard">
        <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-grid-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="47864498"
     data-impression-position="2"
     data-impression-name="Gray - Personal vCard/Portfolio Template"
     data-impression-list="Category Page: Top vcard items"
     data-impression-brand="FlaTheme"
     data-impression-category="themeforest.net/site-templates/personal/virtual-business-card"
>
  <div class="shared-item_cards-grid-image_card_component__preview">
    <div class="shared-item_cards-grid-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;FlaTheme&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:47864498,&quot;list&quot;:&quot;Category Page: Top vcard items&quot;,&quot;name&quot;:&quot;Gray - Personal vCard/Portfolio Template&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top vcard items&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:47864498}]]" href="https://themeforest.net/item/gray-personal-vcardportfolio-template/47864498">
      <img src="https://themeforest.img.customer.envatousercontent.com/files/484164858/gray-preview.png?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=ed8b7e41e8de684274386aa6d9512f17"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Gray - Personal vCard/Portfolio Template"
        title="Gray - Personal vCard/Portfolio Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/484164858/gray-preview.__large_preview.png"
        data-carousel-target="image"
      />
</a></div>

    </div>
      
    <div class="shared-item_cards-grid-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
      <div class="shared-item_cards-grid-image_card_component__inner">
        <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
           href="https://themeforest.net/item/gray-personal-vcardportfolio-template/47864498" title="Gray - Personal vCard/Portfolio Template"
           data-turbo="false"
           data-action="analytics-event#send"
           data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;FlaTheme&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:47864498,&quot;list&quot;:&quot;Category Page: Top vcard items&quot;,&quot;name&quot;:&quot;Gray - Personal vCard/Portfolio Template&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top vcard items&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:47864498}]]"></a>
        <div class="shared-item_cards-grid-image_card_component__buttons">
            <a
  href="/my/bookmarks/new?item_id=47864498"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="47864498"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:47864498}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

            <span class="shared-item_cards-grid-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/47864498"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="47864498">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
  </div>
  <div class="shared-item_cards-grid-image_card_component__content">
    <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
      href="https://themeforest.net/item/gray-personal-vcardportfolio-template/47864498"
      title="Gray - Personal vCard/Portfolio Template"
      aria-label="View Gray - Personal vCard/Portfolio Template"
      data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:47864498}]]"></a>

    <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;FlaTheme&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:47864498,&quot;list&quot;:&quot;Category Page: Top vcard items&quot;,&quot;name&quot;:&quot;Gray - Personal vCard/Portfolio Template&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top vcard items&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:47864498}]]" href="https://themeforest.net/item/gray-personal-vcardportfolio-template/47864498">Gray - Personal vCard/Portfolio Template</a>
</h3>


    <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://themeforest.net/user/flatheme"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:47864498}]]"
  >
    FlaTheme
  </a>
  in
  <a
    href="/category/site-templates/personal/virtual-business-card"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:47864498}]]"
    }
  >
    Virtual Business Card
  </a>
</div>


    <div class="shared-item_cards-grid-image_card_component__footer">
      <div class="shared-item_cards-grid-image_card_component__footerContent">
        <div class="shared-item_cards-price_component__root">
    $12
</div>

        
          <div class="shared-item_cards-sales_component__root">
  39 Sales
</div>

      </div>
      <div class="shared-item_cards-grid-image_card_component__footerButtons">
        <div class="shared-item_cards-grid-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/47864498"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=47864498"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="47864498"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;FlaTheme&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:47864498,&quot;list&quot;:&quot;Category Page: Top vcard items&quot;,&quot;name&quot;:&quot;Gray - Personal vCard/Portfolio Template&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:47864498}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

            <a href="https://themeforest.net/item/gray-personal-vcardportfolio-template/full_screen_preview/47864498"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;47864498&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

        </div>
      </div>
    </div>
  </div>
</div>

</div>

      </div>
      <div class="category-items_block_component__itemCard">
        <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-grid-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="48150243"
     data-impression-position="3"
     data-impression-name="Gavi - Personal Portfolio Resume HTML"
     data-impression-list="Category Page: Top vcard items"
     data-impression-brand="UI-ThemeZ"
     data-impression-category="themeforest.net/site-templates/personal/virtual-business-card"
>
  <div class="shared-item_cards-grid-image_card_component__preview">
    <div class="shared-item_cards-grid-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;UI-ThemeZ&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:48150243,&quot;list&quot;:&quot;Category Page: Top vcard items&quot;,&quot;name&quot;:&quot;Gavi - Personal Portfolio Resume HTML&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top vcard items&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:48150243}]]" href="https://themeforest.net/item/gavi-personal-portfolio-resume-html/48150243">
      <img src="https://themeforest.img.customer.envatousercontent.com/files/467166124/Image+Preview.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=cfc596ee8f210167e292712cf0f35314"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Gavi - Personal Portfolio Resume HTML"
        title="Gavi - Personal Portfolio Resume HTML"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/467166124/Image%20Preview.__large_preview.jpg"
        data-carousel-target="image"
      />
</a></div>

    </div>
      
    <div class="shared-item_cards-grid-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
      <div class="shared-item_cards-grid-image_card_component__inner">
        <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
           href="https://themeforest.net/item/gavi-personal-portfolio-resume-html/48150243" title="Gavi - Personal Portfolio Resume HTML"
           data-turbo="false"
           data-action="analytics-event#send"
           data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;UI-ThemeZ&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:48150243,&quot;list&quot;:&quot;Category Page: Top vcard items&quot;,&quot;name&quot;:&quot;Gavi - Personal Portfolio Resume HTML&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top vcard items&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:48150243}]]"></a>
        <div class="shared-item_cards-grid-image_card_component__buttons">
            <a
  href="/my/bookmarks/new?item_id=48150243"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="48150243"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:48150243}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

            <span class="shared-item_cards-grid-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/48150243"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="48150243">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
  </div>
  <div class="shared-item_cards-grid-image_card_component__content">
    <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
      href="https://themeforest.net/item/gavi-personal-portfolio-resume-html/48150243"
      title="Gavi - Personal Portfolio Resume HTML"
      aria-label="View Gavi - Personal Portfolio Resume HTML"
      data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:48150243}]]"></a>

    <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;UI-ThemeZ&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:48150243,&quot;list&quot;:&quot;Category Page: Top vcard items&quot;,&quot;name&quot;:&quot;Gavi - Personal Portfolio Resume HTML&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top vcard items&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:48150243}]]" href="https://themeforest.net/item/gavi-personal-portfolio-resume-html/48150243">Gavi - Personal Portfolio Resume HTML</a>
</h3>


    <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://themeforest.net/user/ui-themez"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:48150243}]]"
  >
    UI-ThemeZ
  </a>
  in
  <a
    href="/category/site-templates/personal/virtual-business-card"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:48150243}]]"
    }
  >
    Virtual Business Card
  </a>
</div>


    <div class="shared-item_cards-grid-image_card_component__footer">
      <div class="shared-item_cards-grid-image_card_component__footerContent">
        <div class="shared-item_cards-price_component__root">
    $17
</div>

        
          <div class="shared-item_cards-sales_component__root">
  31 Sales
</div>

      </div>
      <div class="shared-item_cards-grid-image_card_component__footerButtons">
        <div class="shared-item_cards-grid-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/48150243"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=48150243"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="48150243"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;UI-ThemeZ&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:48150243,&quot;list&quot;:&quot;Category Page: Top vcard items&quot;,&quot;name&quot;:&quot;Gavi - Personal Portfolio Resume HTML&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:48150243}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

            <a href="https://themeforest.net/item/gavi-personal-portfolio-resume-html/full_screen_preview/48150243"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;48150243&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

        </div>
      </div>
    </div>
  </div>
</div>

</div>

      </div>
      <div class="category-items_block_component__itemCard">
        <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-grid-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="43673786"
     data-impression-position="4"
     data-impression-name="Glitche - Tailwind CSS Personal Portfolio Template"
     data-impression-list="Category Page: Top vcard items"
     data-impression-brand="Marketify"
     data-impression-category="themeforest.net/site-templates/personal/virtual-business-card"
>
  <div class="shared-item_cards-grid-image_card_component__preview">
    <div class="shared-item_cards-grid-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Marketify&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:43673786,&quot;list&quot;:&quot;Category Page: Top vcard items&quot;,&quot;name&quot;:&quot;Glitche - Tailwind CSS Personal Portfolio Template&quot;,&quot;position&quot;:4}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top vcard items&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:43673786}]]" href="https://themeforest.net/item/glitche-tailwind-css-personal-portfolio-template/43673786">
      <img src="https://themeforest.img.customer.envatousercontent.com/files/434911554/preview/01_preview.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=a3bf68dbb6c8e9950bff0c3cd1fab77f"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Glitche - Tailwind CSS Personal Portfolio Template"
        title="Glitche - Tailwind CSS Personal Portfolio Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/434911554/preview/01_preview.__large_preview.jpg"
        data-carousel-target="image"
      />
</a></div>

    </div>
      
    <div class="shared-item_cards-grid-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
      <div class="shared-item_cards-grid-image_card_component__inner">
        <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
           href="https://themeforest.net/item/glitche-tailwind-css-personal-portfolio-template/43673786" title="Glitche - Tailwind CSS Personal Portfolio Template"
           data-turbo="false"
           data-action="analytics-event#send"
           data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Marketify&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:43673786,&quot;list&quot;:&quot;Category Page: Top vcard items&quot;,&quot;name&quot;:&quot;Glitche - Tailwind CSS Personal Portfolio Template&quot;,&quot;position&quot;:4}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top vcard items&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:43673786}]]"></a>
        <div class="shared-item_cards-grid-image_card_component__buttons">
            <a
  href="/my/bookmarks/new?item_id=43673786"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="43673786"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:43673786}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

            <span class="shared-item_cards-grid-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/43673786"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="43673786">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
  </div>
  <div class="shared-item_cards-grid-image_card_component__content">
    <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
      href="https://themeforest.net/item/glitche-tailwind-css-personal-portfolio-template/43673786"
      title="Glitche - Tailwind CSS Personal Portfolio Template"
      aria-label="View Glitche - Tailwind CSS Personal Portfolio Template"
      data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:43673786}]]"></a>

    <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Marketify&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:43673786,&quot;list&quot;:&quot;Category Page: Top vcard items&quot;,&quot;name&quot;:&quot;Glitche - Tailwind CSS Personal Portfolio Template&quot;,&quot;position&quot;:4}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top vcard items&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:43673786}]]" href="https://themeforest.net/item/glitche-tailwind-css-personal-portfolio-template/43673786">Glitche - Tailwind CSS Personal Portfolio Template</a>
</h3>


    <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://themeforest.net/user/marketify"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:43673786}]]"
  >
    Marketify
  </a>
  in
  <a
    href="/category/site-templates/personal/virtual-business-card"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:43673786}]]"
    }
  >
    Virtual Business Card
  </a>
</div>


    <div class="shared-item_cards-grid-image_card_component__footer">
      <div class="shared-item_cards-grid-image_card_component__footerContent">
        <div class="shared-item_cards-price_component__root">
    $19
</div>

        
          <div class="shared-item_cards-sales_component__root">
  29 Sales
</div>

      </div>
      <div class="shared-item_cards-grid-image_card_component__footerButtons">
        <div class="shared-item_cards-grid-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/43673786"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=43673786"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="43673786"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Marketify&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:43673786,&quot;list&quot;:&quot;Category Page: Top vcard items&quot;,&quot;name&quot;:&quot;Glitche - Tailwind CSS Personal Portfolio Template&quot;,&quot;position&quot;:4}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:43673786}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

            <a href="https://themeforest.net/item/glitche-tailwind-css-personal-portfolio-template/full_screen_preview/43673786"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;43673786&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

        </div>
      </div>
    </div>
  </div>
</div>

</div>

      </div>
  </div>
</section>
</div>
    <div class="category-show_content__blockWrapper"><section class="category-items_block_component__root">
  <header class="category-items_block_component__header">
    <h2 class="category-items_block_component__heading">
      <a
        href="/category/site-templates/personal/virtual-business-card?date=this-year&amp;sort=sales"
        data-action="analytics-event#send"
        data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;CategoryPage&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Top HTML business card website templates&quot;}"
      >
        Top HTML business card website templates
      </a>
    </h2>
    <div class="category-items_block_component__button">
      <a rel="" class="shared-cta_button_component__root shared-cta_button_component__small" data-action="analytics-event#send" data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;CategoryPage&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Top HTML business card website templates&quot;}" href="/category/site-templates/personal/virtual-business-card?date=this-year&amp;sort=sales">View all</a>

    </div>

  </header>
  <div
    data-controller="analytics-item-impressions"
    data-analytics-item-impressions-additional-params-value="{&quot;dimension26&quot;:&quot;site-templates/personal&quot;}"
    class="category-items_block_component__itemCardGrid"
  >
      <div class="category-items_block_component__itemCard">
        <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-grid-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="49674545"
     data-impression-position="1"
     data-impression-name="Erling - Personal Portfolio HTML Template"
     data-impression-list="Category Page: Top HTML business card website templates"
     data-impression-brand="Marketify"
     data-impression-category="themeforest.net/site-templates/personal/virtual-business-card"
>
  <div class="shared-item_cards-grid-image_card_component__preview">
    <div class="shared-item_cards-grid-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Marketify&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:49674545,&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;,&quot;name&quot;:&quot;Erling - Personal Portfolio HTML Template&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:49674545}]]" href="https://themeforest.net/item/erling-personal-portfolio-html-template/49674545">
      <img src="https://themeforest.img.customer.envatousercontent.com/files/481040523/preview/01_preview.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=916faea7f512b7cd6fa0e98a95aa98de"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Erling - Personal Portfolio HTML Template"
        title="Erling - Personal Portfolio HTML Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/481040523/preview/01_preview.__large_preview.jpg"
        data-carousel-target="image"
      />
</a></div>

    </div>
      
    <div class="shared-item_cards-grid-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
      <div class="shared-item_cards-grid-image_card_component__inner">
        <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
           href="https://themeforest.net/item/erling-personal-portfolio-html-template/49674545" title="Erling - Personal Portfolio HTML Template"
           data-turbo="false"
           data-action="analytics-event#send"
           data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Marketify&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:49674545,&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;,&quot;name&quot;:&quot;Erling - Personal Portfolio HTML Template&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:49674545}]]"></a>
        <div class="shared-item_cards-grid-image_card_component__buttons">
            <a
  href="/my/bookmarks/new?item_id=49674545"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="49674545"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:49674545}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

            <span class="shared-item_cards-grid-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/49674545"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="49674545">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
  </div>
  <div class="shared-item_cards-grid-image_card_component__content">
    <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
      href="https://themeforest.net/item/erling-personal-portfolio-html-template/49674545"
      title="Erling - Personal Portfolio HTML Template"
      aria-label="View Erling - Personal Portfolio HTML Template"
      data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:49674545}]]"></a>

    <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Marketify&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:49674545,&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;,&quot;name&quot;:&quot;Erling - Personal Portfolio HTML Template&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:49674545}]]" href="https://themeforest.net/item/erling-personal-portfolio-html-template/49674545">Erling - Personal Portfolio HTML Template</a>
</h3>


    <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://themeforest.net/user/marketify"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:49674545}]]"
  >
    Marketify
  </a>
  in
  <a
    href="/category/site-templates/personal/virtual-business-card"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:49674545}]]"
    }
  >
    Virtual Business Card
  </a>
</div>


    <div class="shared-item_cards-grid-image_card_component__footer">
      <div class="shared-item_cards-grid-image_card_component__footerContent">
        <div class="shared-item_cards-price_component__root">
    $5
</div>

        
          <div class="shared-item_cards-sales_component__root">
  29 Sales
</div>

      </div>
      <div class="shared-item_cards-grid-image_card_component__footerButtons">
        <div class="shared-item_cards-grid-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/49674545"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=49674545"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="49674545"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Marketify&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:49674545,&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;,&quot;name&quot;:&quot;Erling - Personal Portfolio HTML Template&quot;,&quot;position&quot;:1}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:49674545}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

            <a href="https://themeforest.net/item/erling-personal-portfolio-html-template/full_screen_preview/49674545"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;49674545&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

        </div>
      </div>
    </div>
  </div>
</div>

</div>

      </div>
      <div class="category-items_block_component__itemCard">
        <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-grid-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="43530763"
     data-impression-position="2"
     data-impression-name="Tonu - Creative Portfolio React Template"
     data-impression-list="Category Page: Top HTML business card website templates"
     data-impression-brand="themepresss"
     data-impression-category="themeforest.net/site-templates/personal/virtual-business-card"
>
  <div class="shared-item_cards-grid-image_card_component__preview">
    <div class="shared-item_cards-grid-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;themepresss&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:43530763,&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;,&quot;name&quot;:&quot;Tonu - Creative Portfolio React Template&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:43530763}]]" href="https://themeforest.net/item/tonu-creative-portfolio-react-template/43530763">
      <img src="https://themeforest.img.customer.envatousercontent.com/files/435361732/preview.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=007202b12175f7a5a5cba36ea22361f8"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Tonu - Creative Portfolio React Template"
        title="Tonu - Creative Portfolio React Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/435361732/preview.__large_preview.jpg"
        data-carousel-target="image"
      />
</a></div>

    </div>
      
    <div class="shared-item_cards-grid-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
      <div class="shared-item_cards-grid-image_card_component__inner">
        <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
           href="https://themeforest.net/item/tonu-creative-portfolio-react-template/43530763" title="Tonu - Creative Portfolio React Template"
           data-turbo="false"
           data-action="analytics-event#send"
           data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;themepresss&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:43530763,&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;,&quot;name&quot;:&quot;Tonu - Creative Portfolio React Template&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:43530763}]]"></a>
        <div class="shared-item_cards-grid-image_card_component__buttons">
            <a
  href="/my/bookmarks/new?item_id=43530763"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="43530763"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:43530763}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

            <span class="shared-item_cards-grid-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/43530763"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="43530763">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
  </div>
  <div class="shared-item_cards-grid-image_card_component__content">
    <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
      href="https://themeforest.net/item/tonu-creative-portfolio-react-template/43530763"
      title="Tonu - Creative Portfolio React Template"
      aria-label="View Tonu - Creative Portfolio React Template"
      data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:43530763}]]"></a>

    <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;themepresss&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:43530763,&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;,&quot;name&quot;:&quot;Tonu - Creative Portfolio React Template&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:43530763}]]" href="https://themeforest.net/item/tonu-creative-portfolio-react-template/43530763">Tonu - Creative Portfolio React Template</a>
</h3>


    <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://themeforest.net/user/themepresss"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:43530763}]]"
  >
    themepresss
  </a>
  in
  <a
    href="/category/site-templates/personal/virtual-business-card"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:43530763}]]"
    }
  >
    Virtual Business Card
  </a>
</div>


    <div class="shared-item_cards-grid-image_card_component__footer">
      <div class="shared-item_cards-grid-image_card_component__footerContent">
        <div class="shared-item_cards-price_component__root">
    $5
</div>

        
          <div class="shared-item_cards-sales_component__root">
  27 Sales
</div>

      </div>
      <div class="shared-item_cards-grid-image_card_component__footerButtons">
        <div class="shared-item_cards-grid-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/43530763"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=43530763"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="43530763"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;themepresss&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:43530763,&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;,&quot;name&quot;:&quot;Tonu - Creative Portfolio React Template&quot;,&quot;position&quot;:2}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:43530763}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

            <a href="https://themeforest.net/item/tonu-creative-portfolio-react-template/full_screen_preview/43530763"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;43530763&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

        </div>
      </div>
    </div>
  </div>
</div>

</div>

      </div>
      <div class="category-items_block_component__itemCard">
        <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-grid-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="43241895"
     data-impression-position="3"
     data-impression-name="Watson - Personal Portfolio React NextJS Template"
     data-impression-list="Category Page: Top HTML business card website templates"
     data-impression-brand="Marketify"
     data-impression-category="themeforest.net/site-templates/personal/virtual-business-card"
>
  <div class="shared-item_cards-grid-image_card_component__preview">
    <div class="shared-item_cards-grid-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Marketify&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:43241895,&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;,&quot;name&quot;:&quot;Watson - Personal Portfolio React NextJS Template&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:43241895}]]" href="https://themeforest.net/item/watson-personal-portfolio-react-nextjs-template/43241895">
      <img src="https://themeforest.img.customer.envatousercontent.com/files/431777734/preview/01_preview.jpg?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=3c4f7069b1740eebe55bcc9399e039c1"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="Watson - Personal Portfolio React NextJS Template"
        title="Watson - Personal Portfolio React NextJS Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/431777734/preview/01_preview.__large_preview.jpg"
        data-carousel-target="image"
      />
</a></div>

    </div>
      
    <div class="shared-item_cards-grid-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
      <div class="shared-item_cards-grid-image_card_component__inner">
        <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
           href="https://themeforest.net/item/watson-personal-portfolio-react-nextjs-template/43241895" title="Watson - Personal Portfolio React NextJS Template"
           data-turbo="false"
           data-action="analytics-event#send"
           data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Marketify&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:43241895,&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;,&quot;name&quot;:&quot;Watson - Personal Portfolio React NextJS Template&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:43241895}]]"></a>
        <div class="shared-item_cards-grid-image_card_component__buttons">
            <a
  href="/my/bookmarks/new?item_id=43241895"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="43241895"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:43241895}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

            <span class="shared-item_cards-grid-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/43241895"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="43241895">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
  </div>
  <div class="shared-item_cards-grid-image_card_component__content">
    <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
      href="https://themeforest.net/item/watson-personal-portfolio-react-nextjs-template/43241895"
      title="Watson - Personal Portfolio React NextJS Template"
      aria-label="View Watson - Personal Portfolio React NextJS Template"
      data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:43241895}]]"></a>

    <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Marketify&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:43241895,&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;,&quot;name&quot;:&quot;Watson - Personal Portfolio React NextJS Template&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:43241895}]]" href="https://themeforest.net/item/watson-personal-portfolio-react-nextjs-template/43241895">Watson - Personal Portfolio React NextJS Template</a>
</h3>


    <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://themeforest.net/user/marketify"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:43241895}]]"
  >
    Marketify
  </a>
  in
  <a
    href="/category/site-templates/personal/virtual-business-card"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:43241895}]]"
    }
  >
    Virtual Business Card
  </a>
</div>


    <div class="shared-item_cards-grid-image_card_component__footer">
      <div class="shared-item_cards-grid-image_card_component__footerContent">
        <div class="shared-item_cards-price_component__root">
    $19
</div>

        
          <div class="shared-item_cards-sales_component__root">
  27 Sales
</div>

      </div>
      <div class="shared-item_cards-grid-image_card_component__footerButtons">
        <div class="shared-item_cards-grid-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/43241895"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=43241895"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="43241895"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;Marketify&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:43241895,&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;,&quot;name&quot;:&quot;Watson - Personal Portfolio React NextJS Template&quot;,&quot;position&quot;:3}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:43241895}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

            <a href="https://themeforest.net/item/watson-personal-portfolio-react-nextjs-template/full_screen_preview/43241895"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;43241895&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

        </div>
      </div>
    </div>
  </div>
</div>

</div>

      </div>
      <div class="category-items_block_component__itemCard">
        <div class="shared-item_cards-card_component__root">
  <div class="shared-item_cards-grid-image_card_component__root"
     data-analytics-item-impressions-target="item"
     data-favorites-loader-target="item"
     data-item-id="47451772"
     data-impression-position="4"
     data-impression-name="R.Elisc - Tailwind CSS Personal Portfolio React Next JS Template"
     data-impression-list="Category Page: Top HTML business card website templates"
     data-impression-brand="CodeeFly"
     data-impression-category="themeforest.net/site-templates/personal/virtual-business-card"
>
  <div class="shared-item_cards-grid-image_card_component__preview">
    <div class="shared-item_cards-grid-image_card_component__imageWrapper">
      <div class="shared-item_cards-preview_image_component__carousel shared-item_cards-preview_image_component__singleImage"
  style="padding-bottom: 50.847457627118644%"
>
  <a class="shared-item_cards-preview_image_component__imageLink" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CodeeFly&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:47451772,&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;,&quot;name&quot;:&quot;R.Elisc - Tailwind CSS Personal Portfolio React Next JS Template&quot;,&quot;position&quot;:4}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:47451772}]]" href="https://themeforest.net/item/relisc-tailwind-css-personal-portfolio-react-next-js-template/47451772">
      <img src="https://themeforest.img.customer.envatousercontent.com/files/466258233/01_preview.png?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=229421b6a21810fa663c2995793f98b6"
        loading="lazy"
        style="left: 0%"
        class="shared-item_cards-preview_image_component__image"
        alt="R.Elisc - Tailwind CSS Personal Portfolio React Next JS Template"
        title="R.Elisc - Tailwind CSS Personal Portfolio React Next JS Template"
        width="590"
        height="300"
        data-controller="image-preview"
        data-action="error->image-preview#setFallback"
        data-fallback="https://previews.customer.envatousercontent.com/files/466258233/01_preview.__large_preview.png"
        data-carousel-target="image"
      />
</a></div>

    </div>
      
    <div class="shared-item_cards-grid-image_card_component__gradient" style="padding-top: 50.847457627118644%;">
      <div class="shared-item_cards-grid-image_card_component__inner">
        <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
           href="https://themeforest.net/item/relisc-tailwind-css-personal-portfolio-react-next-js-template/47451772" title="R.Elisc - Tailwind CSS Personal Portfolio React Next JS Template"
           data-turbo="false"
           data-action="analytics-event#send"
           data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CodeeFly&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:47451772,&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;,&quot;name&quot;:&quot;R.Elisc - Tailwind CSS Personal Portfolio React Next JS Template&quot;,&quot;position&quot;:4}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;image&quot;,&quot;eventValue&quot;:47451772}]]"></a>
        <div class="shared-item_cards-grid-image_card_component__buttons">
            <a
  href="/my/bookmarks/new?item_id=47451772"
  class="shared-item_cards-collection_button_component__collection"
  role="button"
  aria-label="Add to collection"
  title="Add to collection"
  rel="nofollow"
  data-controller="collection-button"
  data-action="collection-button#open analytics-event#send"
  data-bookmark-button-target="bookmarkButton"
  data-item-id="47451772"
  data-analytics-event="{&quot;hitType&quot;:&quot;event&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventCategory&quot;:&quot;Item&quot;,&quot;eventLabel&quot;:&quot;collection;click&quot;,&quot;eventValue&quot;:47451772}"
>
  <span class="shared-item_cards-collection_button_component__icon">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#collection'></use>
</svg>

  </span>
</a>

            <span class="shared-item_cards-grid-image_card_component__buttonSeparator"></span>
          <form method="post"
      action="/my/favorites/47451772"
      data-controller="favorite-button"
      data-action="submit->favorite-button#submit favoritesStoreUpdated@window->favorite-button#updateFromStore">
  <input type="hidden" name="_method" value="post" data-favorite-button-target="formMethod">
  <button type="submit"
          aria-label="Add to Favorites"
          class="shared-item_cards-favorite_button_component__favoriteButton"
          data-favorite-button-target="favoriteButton"
          data-favorited="false"
          data-item-id="47451772">
    <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#heart'></use>
</svg>

  </button>
</form>

        </div>
      </div>
    </div>
  </div>
  <div class="shared-item_cards-grid-image_card_component__content">
    <a class="shared-item_cards-grid-image_card_component__itemLinkOverlay"
      href="https://themeforest.net/item/relisc-tailwind-css-personal-portfolio-react-next-js-template/47451772"
      title="R.Elisc - Tailwind CSS Personal Portfolio React Next JS Template"
      aria-label="View R.Elisc - Tailwind CSS Personal Portfolio React Next JS Template"
      data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;whitespace&quot;,&quot;eventValue&quot;:47451772}]]"></a>

    <h3 class="shared-item_cards-item_name_component__root">
  <a class="shared-item_cards-item_name_component__itemNameLink" tabindex="0" data-turbo="false" data-action="analytics-event#send" data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CodeeFly&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:47451772,&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;,&quot;name&quot;:&quot;R.Elisc - Tailwind CSS Personal Portfolio React Next JS Template&quot;,&quot;position&quot;:4}],[&quot;ec:setAction&quot;,&quot;click&quot;,{&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Product click: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;item title&quot;,&quot;eventValue&quot;:47451772}]]" href="https://themeforest.net/item/relisc-tailwind-css-personal-portfolio-react-next-js-template/47451772">R.Elisc - Tailwind CSS Personal Portfolio React Next JS Template</a>
</h3>


    <div class="shared-item_cards-author_category_component__root">
  <i>by</i>
  <a
    href="https://themeforest.net/user/codeefly"
    class="shared-item_cards-author_category_component__link"
    rel="nofollow"
    data-turbo="false"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;author name&quot;,&quot;eventValue&quot;:47451772}]]"
  >
    CodeeFly
  </a>
  in
  <a
    href="/category/site-templates/personal/virtual-business-card"
    class="shared-item_cards-author_category_component__link"
      data-action="analytics-event#send"
      data-analytics-event="[[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;category&quot;,&quot;eventValue&quot;:47451772}]]"
    }
  >
    Virtual Business Card
  </a>
</div>


    <div class="shared-item_cards-grid-image_card_component__footer">
      <div class="shared-item_cards-grid-image_card_component__footerContent">
        <div class="shared-item_cards-price_component__root">
    $17
</div>

        
          <div class="shared-item_cards-sales_component__root">
  21 Sales
</div>

      </div>
      <div class="shared-item_cards-grid-image_card_component__footerButtons">
        <div class="shared-item_cards-grid-image_card_component__coverWrapper">
            <a
  class="shared-item_cards-add_to_cart_button_component__root shared-item_cards-add_to_cart_button_component__compact"
  role="button"
  title="Add to cart"
  aria-label="Add to cart"
  href="/cart/configure_before_adding/47451772"
  rel="nofollow"
  data-controller="cart-button modal-commander"
  data-action="click->modal-commander#open cartStoreUpdated@window->cart-button#updateFromStore analytics-event#send"
  data-modal-commander-url-value="/my/cart_entries?item_id=47451772"
  data-modal-commander-method-value="POST"
  data-cart-button-item-id-value="47451772"
  data-cart-button-in-cart-class="shared-item_cards-add_to_cart_button_component__inCart"
  data-analytics-event="[[&quot;ec:addProduct&quot;,{&quot;brand&quot;:&quot;CodeeFly&quot;,&quot;category&quot;:&quot;themeforest.net/site-templates/personal/virtual-business-card&quot;,&quot;id&quot;:47451772,&quot;list&quot;:&quot;Category Page: Top HTML business card website templates&quot;,&quot;name&quot;:&quot;R.Elisc - Tailwind CSS Personal Portfolio React Next JS Template&quot;,&quot;position&quot;:4}],[&quot;ec:setAction&quot;,&quot;add&quot;],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Ecommerce&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;Add to cart: product list&quot;}],[&quot;send&quot;,{&quot;hitType&quot;:&quot;event&quot;,&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click&quot;,&quot;eventLabel&quot;:&quot;cart button&quot;,&quot;eventValue&quot;:47451772}]]"
>
    <span class="shared-item_cards-add_to_cart_button_component__cartIcon">
      <svg width='100%' height='100%'>
  <use xlink:href='/storefront/assets/icon_spritesheet-f6681e837aa64f7d66888c6082f81eaf79ab4d26ac5dfb502549ed602e1d1f5e.svg#cart'></use>
</svg>

    </span>
</a>

            <a href="https://themeforest.net/item/relisc-tailwind-css-personal-portfolio-react-next-js-template/full_screen_preview/47451772"
   class="shared-item_cards-preview_button_with_analytics_component__root"
   target="_blank"
   rel="noopener"
   data-action="analytics-event#send"
   data-analytics-event="{&quot;eventCategory&quot;:&quot;Item Card&quot;,&quot;eventAction&quot;:&quot;click;button&quot;,&quot;eventLabel&quot;:&quot;Preview;47451772&quot;,&quot;hitType&quot;:&quot;event&quot;}">
  Live Preview
</a>

        </div>
      </div>
    </div>
  </div>
</div>

</div>

      </div>
  </div>
</section>
</div>
    <div class="category-show_content__blockWrapper"><section class="category-elements_promo_items_block