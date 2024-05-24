var gaconnector={MAX_COOKIE_SIZE:1024,domainError:null,debug:!1,track:function(e,t){if(t)this.domainError=t;else for(valueName in e){if("lc_"===valueName.substring(0,3))if(fc_valueName=valueName.replace("lc_","fc_"),""===this.getValue(fc_valueName))e[fc_valueName]=e[valueName],this.setValue(fc_valueName,e[valueName]);else if("(direct)"==e.lc_source)continue;this.setValue(valueName,e[valueName])}var o=this.getValue("all_traffic_sources");for(""!=o&&(o+=", "),o+=e.lc_source+"/"+e.lc_medium;o.length>this.MAX_COOKIE_SIZE;)o=o.replace(/^[^,]*,{1,} /,"");this.setValue("all_traffic_sources",o),e.all_traffic_sources=o,e.GA_Measurement_ID=this.getValue("GA_Measurement_ID"),e.GA_Client_ID=this.getValue("GA_Client_ID"),e.GA_Session_ID=this.getValue("GA_Session_ID"),this.values=e,this.callback(this.getValues()),this.valuesReceived=!0},log:function(){this.debug&&console.debug.apply(console,arguments)},getTopDomain:function(e){if("localhost"===window.location.hostname)return"localhost";var t=/[-\w]+\.(?:[-\w]+\.xn--[-\w]+|[-\w]{2,}|[-\w]+\.[-\w]{2})$/i,o=e.split("/")[2],n=t.exec(o);return"object"==typeof n&&n instanceof Array&&n.length>0?n[0]:void 0},getSetting:function(e){var t="object"==typeof gaconnectorSettings?gaconnectorSettings:{};return t.hasOwnProperty(e)?t[e]:null},getValue:function(e,t){if(t||(e="gaconnector_"+e),this.useLocalStorage)return localStorage.getItem(e)||"";for(var e=e+"=",o=document.cookie.split(";"),n=0;n<o.length;n++){for(var r=o[n];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(e))return r.substring(e.length,r.length)}return""},setValue:function(e,t,o){if(e="gaconnector_"+e,this.useLocalStorage)localStorage.setItem(e,t);else{o=o||157248e5;var n=new Date;n.setTime(n.getTime()+o);var r="expires="+n.toGMTString();t=(t=(t=t.replace(/\|{2,}/g,"|").replace(/^\|/,"")).replace(";","")).substr(0,255),document.cookie=e+"="+t+"; "+r+";domain="+this.cookieDomain+";path=/"}},timeCounter:Date.now(),trackTimeOnWebsite:function(){setInterval(this.updateTimeCookie,1e3)},updateTimeCookie:function(){var e=Date.now()-gaconnector.timeCounter;gaconnector.timeCounter=Date.now();var t=gaconnector.getValue("time_passed");""==t&&(t="0");var o=e+parseInt(t);gaconnector.setValue("time_passed",o.toString())},addPageVisit:function(){for(var e=this.getValue("pages_visited_list"),t=e.split("|"),o=window.location.pathname,n=!1,r=0;r<t.length;r++)t[r]==o&&(n=!0);for(n||t.push(o),e=t.join("|");e.length>this.MAX_COOKIE_SIZE;)e=e.replace(/^[^|]+\|/,"");this.setValue("pages_visited_list",e)},incrementVisits:function(){var e,t=this.getValue("page_visits");e=""==t?1:parseInt(t)+1,this.setValue("page_visits",e.toString())},getGaProperty:function(e){function t(){window.dataLayer.push(arguments)}var o=gaconnector.getGAMeasurementID();if(!o)return Promise.resolve(null);var n=new Promise(function(n,r){t("get",o,e,function(e){n(e)})}),r=new Promise(function(e,t){setTimeout(function(){t(new Error("Timeout after 200ms"))},200)});return Promise.race([n,r])},getGAMeasurementIDFromCookies:function(){var e=document.cookie.split("; ").find(function(e){return e.startsWith("_ga_")});if(e){var t=e.split("=")[0];if(/^_ga_[A-Z0-9]+$/.test(t))return"G-"+t.replace("_ga_","")}return null},getGAMeasurementID:function(){if(window.dataLayer){var e=window.dataLayer.find(function(e){return"config"===e[0]&&e[1].startsWith("G-")});if(e)return this.log("Got measurement ID from dataLayer",e[1]),e[1]}if(window.google_tag_data&&google_tag_data.tidr&&google_tag_data.tidr.container){var t=Object.keys(google_tag_data.tidr.container);if(t.length>0){var o=t.find(function(e){return e.startsWith("G-")});if(o)return this.log("Got measurement ID from google_tag_data",o),o}}var n=this.getGAMeasurementIDFromCookies();return n?(this.log("Got measurement ID from cookies",n),n):(this.log("Could not get measurement ID"),null)},cloneGAMeasurementID:function(){var e=gaconnector.getGAMeasurementID();e?gaconnector.setValue("GA_Measurement_ID",e):setTimeout(gaconnector.cloneGAMeasurementID,1e3)},getGAClientIDFromCookies:function(){var e=document.cookie.split("; ").find(function(e){return"_ga"===e.split("=")[0]});if(e){var t=e.split("=")[1].split(".");return t[2]+"."+t[3]}return null},getGAClientID:function(){return gaconnector.getGAMeasurementID()?new Promise(function(e,t){if(!window.dataLayer){var o=gaconnector.getGAClientIDFromCookies();return gaconnector.log("Got client ID from cookies (fallback)",o),e(o)}gaconnector.getGaProperty("client_id").then(function(t){gaconnector.log("Got client ID from dataLayer",t),e(t)}).catch(function(){var t=gaconnector.getGAClientIDFromCookies();gaconnector.log("Got client ID from cookies (error fallback)",t),e(t)})}):Promise.resolve(null)},cloneGAClientID:function(){gaconnector.getGAClientID().then(function(e){e?gaconnector.setValue("GA_Client_ID",e):setTimeout(gaconnector.cloneGAClientID,200)}).catch(console.error)},getGASessionIDFromCookies:function(){var e=gaconnector.getGAMeasurementID(),t=document.cookie.split("; ").find(function(t){return t.startsWith("_ga_"+e.replace("G-",""))});if(t){var o=t.split("=");if(2===o.length){var n=o[1].split(".");if(n.length>2){var r=n[2];if(parseInt(r)===new Date(1e3*r).getTime()/1e3)return r}}}return null},getGASessionID:function(){return gaconnector.getGAMeasurementID()?new Promise(function(e,t){if(!window.dataLayer){var o=gaconnector.getGASessionIDFromCookies();return gaconnector.log("Got session ID from cookies (fallback)",o),e(o)}gaconnector.getGaProperty("session_id").then(function(t){gaconnector.log("Got session ID from dataLayer",t),e(t)}).catch(function(){var t=gaconnector.getGASessionIDFromCookies();gaconnector.log("Got session ID from cookies (error fallback)",t),e(t)})}):Promise.resolve(null)},cloneGASessionID:function(){gaconnector.getGASessionID().then(function(e){e?gaconnector.setValue("GA_Session_ID",e):setTimeout(gaconnector.cloneGASessionID,200)}).catch(console.error)},callback:function(e){},valuesReceived:!1,setCallback:function(e){this.valuesReceived||this.internal?e(this.getValues()):this.callback=e},isInternalReferrer:function(e,t){return""!==t&&void 0!==t&&this.getTopDomain(t)===this.getTopDomain(e)},internal:!1,addRemoteScript:function(){if(this.isInternalReferrer(window.location.href,document.referrer)){internal=!0;var e=this.getValues();this.callback(e)}else{internal=!1;var t=document.createElement("script");t.setAttribute("data-cfasync","false");var o=document.location.search;o+=(o?"&":"?")+"page_url="+encodeURIComponent(window.location.href);var n="https://tracker.gaconnector.com/gaconnector-server.js"+(o+="&referer="+encodeURIComponent(document.referrer));t.src=n,document.getElementsByTagName("head")[0].appendChild(t)}},getValuesFromLocalStorage:function(){for(var e=Object.keys(localStorage),t=[],o=0;o<e.length;o++)"gaconnector_"===e[o].substr(0,12)&&t.push(e[o]);var n={};for(o=0;o<t.length;o++)n[t[o].replace("gaconnector_","")]=localStorage.getItem(t[o]);return n},getValuesFromCookies:function(){for(var e={},t=document.cookie.split("; "),o=0;o<t.length;o++){var n=t[o].split("=")[0],r=t[o].split("=").slice(1).join("=");n.length>12&&"gaconnector_"==n.substring(0,12)&&(e[n.replace("gaconnector_","")]=r)}return e},deleteCookie:function(e){document.cookie="gaconnector_"+e+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"},deleteLocalStorageItem:function(e){localStorage.removeItem("gaconnector_"+e)},getValues:function(){return this.domainError?{lc_source:this.domainError,lc_medium:"Contact gaconnector.com/support",lc_landing:window.location.href}:this.useLocalStorage?this.getValuesFromLocalStorage():this.getValuesFromCookies()},getCookieValues:function(){return this.getValues()},setupDebugging:function(){if(!0===this.getSetting("debug"))return this.debug=!0,void this.log("GA Connector debugging enabled");try{var e=document.querySelector('script[src*="gaconnector.js"]');e&&"true"===new URL(e.src).searchParams.get("debug")&&(this.debug=!0,this.log("GA Connector debugging enabled"))}catch(e){console.error(e)}},setupStorage:function(){this.useLocalStorage=!!window.localStorage&&!!window.localStorage.setItem&&"localStorage"===this.getSetting("storageEngine");var e=this.getValuesFromCookies(),t=this.getValuesFromLocalStorage();if(this.useLocalStorage)for(var o in e)e[o]&&!t[o]&&this.setValue(o,e[o]),this.deleteCookie(o);else for(var o in t)t[o]&&!e[o]&&this.setValue(o,t[o]),this.deleteLocalStorageItem(o)},start:function(){this.setupDebugging(),this.setupStorage(),this.internal=this.isInternalReferrer(window.location.href,document.referrer),"function"==typeof this.getSetting("getTopDomain")&&(this.log("Overriding getTopDomain function"),this.getTopDomain=this.getSetting("getTopDomain")),this.cookieDomain=this.getTopDomain(window.location.href),this.cloneGAMeasurementID(),this.cloneGAClientID(),this.cloneGASessionID(),this.trackTimeOnWebsite(),this.addPageVisit(),this.incrementVisits(),this.addRemoteScript()}};gaconnector.start();rol:ga-cookie.consent.accept.v4">
                Accept
                </button>
                <button class="artdeco-global-alert-action artdeco-button artdeco-button--inverse artdeco-button--2 artdeco-button--primary" action-url action-type="DENY" data-tracking-control-name="urn:li:control:ga-cookie.consent.deny.v4" data-control-name="urn:li:control:ga-cookie.consent.deny.v4">
                Reject
                </button>
          </div>
        </div>
<!---->      </section>
    </div>  
      </div>
  
  

        
        
    
      <code id="isClsFixActive" style="display: none"><!--true--></code>
      
    

    <a href="#main-content" class="skip-link btn-md btn-primary absolute z-11 -top-[100vh] focus:top-0">
      Skip to main content
    </a>
  
    <header class="header base-detail-page__header px-mobile-container-padding bg-color-background-container global-alert-offset">
      
        

    
    
    
    

    <nav class="nav pt-1.5 pb-2 flex items-center justify-between relative flex-nowrap mamabear:flex-wrap mamabear:gap-y-1 babybear:flex-wrap babybear:py-1.5
        " aria-label="Primary">

      <a href="/?trk=organization_guest_nav-header-logo" class="nav__logo-link link-no-visited-state z-1 mr-auto babybear:z-0 babybear:mr-0 babybear:flex-1 hover:no-underline focus:no-underline active:no-underline" data-tracking-control-name="organization_guest_nav-header-logo" data-tracking-will-navigate>
          
              
    
    <span class="sr-only">LinkedIn</span>
<!---->      <icon class="block text-color-brand w-[84px] h-[21px] papabear:w-[135px] papabear:h-[34px]
          " data-test-id="nav-logo" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/8fkga714vy9b2wk5auqo5reeb"></icon>
  
          
      </a>

<!---->
        
    
    
    
    
    
    
    <ul class="top-nav-menu flex items-center mr-0.5 babybear:hidden mamabear:hidden
        
         nav__menu order-3">
        <li class>
          
    <a href="https://www.linkedin.com/pulse/topics/home/?trk=organization_guest_guest_nav_menu_articles" data-tracking-control-name="organization_guest_guest_nav_menu_articles" data-tracking-will-navigate class="top-nav-link flex justify-center items-center h-[52px] hover:text-color-text visited:hover:text-color-text hover:no-underline
        w-[64px]
        flex-col mx-1
        text-color-text-secondary visited:text-color-text-secondary">
      <icon class="top-nav-link__icon flex h-3 w-3 flex-shrink-0 " data-delayed-url="https://static.licdn.com/aero-v1/sc/h/6ulnj3n2ijcmhej768y6oj1hr">
      </icon>
      <span class="top-nav-link__label-text font-sans text-xs leading-regular text-center
          font-regular">
        Articles
      </span>
    </a>
  
        </li>
        <li class>
          
    <a href="https://www.linkedin.com/pub/dir/+/+?trk=organization_guest_guest_nav_menu_people" data-tracking-control-name="organization_guest_guest_nav_menu_people" data-tracking-will-navigate class="top-nav-link flex justify-center items-center h-[52px] hover:text-color-text visited:hover:text-color-text hover:no-underline
        w-[64px]
        flex-col mx-1
        text-color-text-secondary visited:text-color-text-secondary">
      <icon class="top-nav-link__icon flex h-3 w-3 flex-shrink-0 " data-delayed-url="https://static.licdn.com/aero-v1/sc/h/7kb6sn3tm4cx918cx9a5jlb0">
      </icon>
      <span class="top-nav-link__label-text font-sans text-xs leading-regular text-center
          font-regular">
        People
      </span>
    </a>
  
        </li>
        <li class>
          
    <a href="https://www.linkedin.com/learning/search?trk=organization_guest_guest_nav_menu_learning" data-tracking-control-name="organization_guest_guest_nav_menu_learning" data-tracking-will-navigate class="top-nav-link flex justify-center items-center h-[52px] hover:text-color-text visited:hover:text-color-text hover:no-underline
        w-[64px]
        flex-col mx-1
        text-color-text-secondary visited:text-color-text-secondary">
      <icon class="top-nav-link__icon flex h-3 w-3 flex-shrink-0 " data-delayed-url="https://static.licdn.com/aero-v1/sc/h/8wykgzgbqy0t3fnkgborvz54u">
      </icon>
      <span class="top-nav-link__label-text font-sans text-xs leading-regular text-center
          font-regular">
        Learning
      </span>
    </a>
  
        </li>
        <li class>
          
    <a href="https://www.linkedin.com/jobs/search?trk=organization_guest_guest_nav_menu_jobs" data-tracking-control-name="organization_guest_guest_nav_menu_jobs" data-tracking-will-navigate class="top-nav-link flex justify-center items-center h-[52px] hover:text-color-text visited:hover:text-color-text hover:no-underline
        w-[64px]
        flex-col mx-1
        top-nav-link--selected text-color-text visited:text-color-text border-solid border-b-2 border-color-text" aria-current="page">
      <icon class="top-nav-link__icon flex h-3 w-3 flex-shrink-0 " data-delayed-url="https://static.licdn.com/aero-v1/sc/h/92eb1xekc34eklevj0io6x4ki">
      </icon>
      <span class="top-nav-link__label-text font-sans text-xs leading-regular text-center
          font-regular">
        Jobs
      </span>
    </a>
  
        </li>
        <li class>
          
    <a href="ms-windows-store://pdp/?ProductId=9WZDNCRFJ4Q7&amp;mode=mini&amp;cid=guest_nav_upsell&amp;trk=organization_guest_guest_nav_menu_windows" data-tracking-control-name="organization_guest_guest_nav_menu_windows" data-tracking-will-navigate class="top-nav-link flex justify-center items-center h-[52px] hover:text-color-text visited:hover:text-color-text hover:no-underline
        w-[96px] px-1 border-solid border-x-1 border-color-border-faint
        flex-col mx-1
        text-color-text-secondary visited:text-color-text-secondary">
      <icon class="top-nav-link__icon flex h-3 w-3 flex-shrink-0 " data-delayed-url="https://static.licdn.com/aero-v1/sc/h/admayac2rnonsqhz9v3rzwcyu">
      </icon>
      <span class="top-nav-link__label-text font-sans text-xs leading-regular text-center
          font-regular">
        Get the app
      </span>
    </a>
  
        </li>
    </ul>
  

      <div class="nav__cta-container order-3 flex gap-x-1 justify-end min-w-[100px] flex-nowrap flex-shrink-0 babybear:flex-wrap flex-2">
        
    
    <a class="nav__button-tertiary btn-md btn-tertiary" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fattentivehq&amp;trk=organization_guest_nav-header-join" data-tracking-control-name="organization_guest_nav-header-join" data-test-live-nav-primary-cta data-tracking-will-navigate>
      Join now
    </a>


        
  
  

      
      <a class="nav__button-secondary btn-md btn-secondary-emphasis" href="https://www.linkedin.com/login?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fattentivehq&amp;fromSignIn=true&amp;trk=organization_guest_nav-header-signin" data-tracking-control-name="organization_guest_nav-header-signin" data-tracking-will-navigate>
          Sign in
      </a>


<!---->      </div>

<!---->
<!---->    </nav>
  
      
    </header>

    
<!---->      

<!---->
    <main class="main 