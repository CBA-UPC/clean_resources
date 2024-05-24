var BELL = (function (bell) {

    var self;

    var isTopNavAnimationInProgress = false,
        activeLobNavOffsetTop = 0,
        floatingNavPageAdditionalTopPad = 0;

    var header,
        connector,
        federalBar,
        activeLobNav,
        currentProvince,
        currentLanguage,
        connectorNavBackdropDesktop,
        connectorNavWrap,
        connectorNav,
        connectorNavLobs,
        mobileBarCartBtn,
        cartBtn,
        emptyCartTooltip,
        storeLocator,
        storeLocatorBtn,
        storeLocatorFindStoreBtn,
        storeLocatorLaunchBtn,
        storeLocatorTools,
        storeSearchField,
        mobileBarNavBtn,
        desktopLoginBtn,
        desktopLoggedInMenu,
        mobileBackBtn,
        langSelectorDesktopBtn,
        langSelectorMobileBtn,
        mobileLoginLink,
        mobileBarSearchBtn,
        desktopSearchBtn,
        businessSectionMobileBtn,
        businessSectionDesktopBtn,
        provSelectorDesktopBtn,
        connectorNavItems,
        businessSectionMobile,
        businessSectionDesktop,
        provSelectorDesktop,
        provSelectorMobile,
        connectorSearchWrap,
        searchForm,
        searchField,
        searchAutocompleteLiveregion,
        mobileBar,
        resetConnectorSearchBtn,
        searchAutocomplete,
        searchMktseg,
        autocompleteItems,
        observer,
        tabletMediaQuery = "(max-width: 991px)",
        tabletMediaQueryList = window.matchMedia(tabletMediaQuery);        

    bell.gConnector = bell.gConnector || {};

    bell.gConnector = {

        init: function () {
            
            currentProvince = document.querySelector("meta[name='province']") !== null ? document.querySelector("meta[name='province']").content : "ON";
            currentLanguage = document.querySelector("meta[name='language']") !== null ? document.querySelector("meta[name='language']").content : "en";
            header = document.getElementById("ngcHeader");
            federalBar = document.getElementById("federalBarG");
            activeLobNav = document.getElementById("fixedHeader") || document.getElementById("accessible-secondary-nav") || document.querySelector(".g-header .rsx-connector-active-lob");
            connector = document.getElementById("connector");
            connectorNavWrap = document.getElementById("connectorNavWrapG");
            connectorNav = document.getElementById("connectorNavG");
            mobileBarNavBtn = document.getElementById("mobileBarNavBtnG");
            connectorNavItems = document.querySelectorAll(".g-connector-nav-item");
            connectorNavLobs = document.getElementById("connectorNavLobsG");
            mobileBackBtn = document.getElementById("mobileBackBtnG");
            mobileBarSearchBtn = document.getElementById("mobileBarSearchBtnG");
            desktopSearchBtn = document.getElementById("desktopSearchBtnG");
            mobileLoginLink = document.getElementById("mobileLoginLinkG");
            mobileBar = document.getElementById("mobileBarG");
            desktopLoginBtn = document.getElementById("desktopLoginBtnG");
            desktopLoggedInMenu = document.getElementById("desktopLoggedInMenuG");
            businessSectionMobileBtn = document.getElementById("businessSectionMobileBtnG");
            businessSectionDesktopBtn = document.getElementById("businessSectionDesktopBtnG");
            businessSectionMobile = document.getElementById("businessSectionMobileG");
            businessSectionDesktop = document.getElementById("businessSectionDesktopG");
            provSelectorDesktopBtn = document.getElementById("provSelectorDesktopBtnG");
            provSelectorDesktop = document.getElementById("provSelectorDesktopG");
            provSelectorMobile = document.getElementById("provSelectorMobileG");
            connectorSearchWrap = document.getElementById("connectorSearchWrapG");
            searchForm = document.querySelector('[id*="rsx-connector-search"].g-connector-search');
            searchField = document.getElementById("searchFieldG");
            searchAutocomplete = document.getElementById("searchAutocompleteG");
            searchAutocompleteLiveregion = document.getElementById("searchAutocompleteLiveregionG");
            searchMktseg = searchForm.dataset.mktseg;
            resetConnectorSearchBtn = document.getElementById("resetConnectorSearchBtnG");
            langSelectorDesktopBtn = document.getElementById("langSelectorDesktopBtnG");
            langSelectorMobileBtn = document.getElementById("langSelectorMobileBtnG");
            mobileBarCartBtn = document.getElementById("mobileBarCartBtnG");
            cartBtn = document.getElementById("cartBtnG");
            emptyCartTooltip = document.getElementById("emptyCartTooltipG");
            connectorNavBackdropDesktop = document.getElementById("connectorNavBackdropDesktop");
            storeSearchAutocompleteUrl = document.getElementById("gmapsURLG").value;
            storeLocator = document.getElementById("storeLocatorG");
            storeLocatorBtn = document.getElementById("storeLocatorBtnG");
            storeLocatorFindStoreBtn = document.getElementById("storeLocatorFindStoreBtnG");
            storeLocatorLaunchBtn = document.getElementById("storeLocatorLaunchBtnG");
            storeLocatorTools = document.getElementById("storeLocatorToolsG");
            storeSearchField = document.getElementById("storeSearchFieldG");
            observer = new IntersectionObserver(function (entries) {
                if (entries.length > 0 && entries[0].intersectionRatio === 1) {
                    setupFloatingNavigation();
                }                
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 1.0,
            });
            if (header !== null) { observer.observe(header) };
            connectorNav.addEventListener('click', connectorNavClickHandler);
            mobileBarNavBtn.addEventListener('click', mobileBarNavBtnClickHandler);
            mobileBackBtn.addEventListener('click', mobileBackBtnClickHandler);
            if (desktopLoginBtn !== null) {
                desktopLoginBtn.addEventListener('click', desktopLoginBtnClickHandler);
            }
            businessSectionMobileBtn.addEventListener('click', businessSectionBtnClickHandler);
            businessSectionDesktopBtn.addEventListener('click', businessSectionBtnClickHandler);
            provSelectorDesktopBtn.addEventListener('click', provSelectorDesktopBtnClickHandler);
            mobileBarSearchBtn.addEventListener('click', searchBtnClickHandler);
            desktopSearchBtn.addEventListener('click', searchBtnClickHandler);
            searchField.addEventListener("input", debounce(searchFieldChangeHandler, 500));
            searchField.addEventListener('keyup', searchFieldKeyupHandler);
            searchAutocomplete.addEventListener("click", searchAutocompleteClickHandler);
            langSelectorDesktopBtn.addEventListener("click", languageButtonClickHandler);
            langSelectorMobileBtn.addEventListener("click", languageButtonClickHandler);
            
            if (cartBtn !== null) {
                cartBtn.addEventListener("focus", cartBtnFocusHandler);
            }            

            provSelectorDesktop.addEventListener("click", provinceSelectionHandler);
            provSelectorMobile.addEventListener("change", provinceSelectionHandler);

            resetConnectorSearchBtn.addEventListener("click", ;

            document.addEventListener("keyup", documentKeyupHandler);
            document.addEventListener("keydown", documentKeydownHandler);

            tabletMediaQueryList.addListener(viewportChangeHandler);
            document.addEventListener('focus', documentFocusHandler, true);

            searchForm.addEventListener('submit', searchFormSubmissionHandler);

            storeLocatorBtn.addEventListener("click", storeLocatorClickHandler);
            storeLocatorFindStoreBtn.addEventListener("click", storeLocatorFindStoreBtnClickHandler);
            storeLocatorLaunchBtn.addEventListener("click", storeLocatorLaunchBtnClickHandler);

            topNavScrollHandler();
            document.addEventListener('scroll', topNavScrollHandler);

            bell.gConnector.voiceSearch.init();
    
            document.body.classList.add("g-connector-init");

            window.addEventListener("resize", bell.gConnector.utils.debounce(setBodyConnectorPadding, 100));

            var heightAdjustmentIntervalCount = 0,
                heightAdjustmentInterval = setInterval(function () {

                if (document.body.style.paddingTop !== header.offsetHeight + "px") {
                    setBodyConnectorPadding();
                }
                heightAdjustmentIntervalCount++;

                if (heightAdjustmentIntervalCount > 100) {
                    clearInterval(heightAdjustmentInterval);
                }
            }, 300);

            window.addEventListener("load", setupFloatingNavigation);

            bell.gConnector.hideSearch();
            closeStoreLocator();
        },       

        showSearch: function () {
            document.body.classList.add("g-connector-search-active");
            mobileBarSearchBtn.setAttribute("aria-pressed", true);
            mobileBarSearchBtn.setAttribute("aria-label", mobileBarSearchBtn.dataset.labelCollapse);
            desktopSearchBtn.setAttribute("aria-pressed", true);
            desktopSearchBtn.setAttribute("tabindex", -1);
            desktopSearchBtn.setAttribute("aria-label", desktopSearchBtn.dataset.labelCollapse);

            connectorSearchWrap.classList.remove("g-visually-hidden");
            toggleKeyboardAndAssistiveVisibility(searchForm, true);
            searchField.focus();

            detectOutsideClick([connectorSearchWrap, desktopSearchBtn, mobileBarSearchBtn], ;
        },

        hideSearch: function () {

            if (document.activeElement.closest(".g-connector-search-controls-wrap") !== null) {
                desktopSearchBtn.focus();
            }

            toggleKeyboardAndAssistiveVisibility(searchForm, false);
            connectorSearchWrap.classList.add("g-visually-hidden");
            document.body.classList.remove("g-connector-search-active");
            mobileBarSearchBtn.setAttribute("aria-pressed", false);
            mobileBarSearchBtn.setAttribute("aria-label", mobileBarSearchBtn.dataset.labelExpand);
            desktopSearchBtn.setAttribute("aria-pressed", false);
            desktopSearchBtn.removeAttribute("tabindex", -1);
            desktopSearchBtn.setAttribute("aria-label", desktopSearchBtn.dataset.labelExpand);
            searchField.value = "";
        },

        renderSearchAutocomplete: function (autocompleteItems) {

            if (autocompleteItems.length > 0) {

                detectOutsideClick([searchField, searchAutocomplete], ;

                var autocompleteList = searchAutocomplete.querySelectorAll("ul")[0];

                if (typeof autocompleteList !== "undefined") {
                    searchAutocomplete.removeChild(autocompleteList);
                }

                var newAutocompleteList = document.createElement("ul");

                for (var i = 0; i < autocompleteItems.length; i++) {
                    var autocompleteListItem = document.createElement("li"),
                        autocompleteListButton = document.createElement("button");

                    autocompleteListButton.setAttribute("id", "searchAutocompleteBtnG_" + i);
                    autocompleteListButton.setAttribute("tabindex", "-1");
                    autocompleteListButton.setAttribute("type", "button");
                    autocompleteListButton.textContent = autocompleteItems[i];

                    autocompleteListItem.appendChild(autocompleteListButton);
                    newAutocompleteList.appendChild(autocompleteListItem);
                }

                searchAutocomplete.appendChild(newAutocompleteList);
                searchAutocomplete.classList.add("g-active");

                var message = searchAutocompleteLiveregion.dataset.messageMultiple.replace("{0}", autocompleteItems.length);

                if (autocompleteItems.length === 1) {
                    message = searchAutocompleteLiveregion.dataset.messageSingle;
                }

                populateSearchAutocompleteLiveregion(message);

            } else {
                searchAutocomplete.classList.remove("g-active");
                searchAutocompleteLiveregion.innerHTML = '';
            }
        }
    }


    function setupFloatingNavigation() {

        if (activeLobNav !== null) {

            document.body.classList.add("g-header-float--has-l3");
            activeLobNavOffsetTop = activeLobNav.offsetTop;

        } else {

            document.body.classList.remove("g-header-float--has-l3");
            activeLobNavOffsetTop = federalBar.clientHeight;
        }

        setBodyConnectorPadding();
    }

    


    function topNavScrollHandler() {

        if (document.querySelector(".g-connector-nav-lob.g-active") !== null) {
            closeAllNav();
        }

        if (window.scrollY > 0 && window.scrollY > activeLobNavOffsetTop + 70) {
            document.body.classList.add("g-header-float");
        } else {
            document.body.classList.remove("g-header-float");
            setBodyConnectorPadding();
        }
    }

    function storeLocatorClickHandler(e) {

        var button = e.target.closest("button"),
            isActive = button.getAttribute("aria-expanded") === "true";

        if (!isActive) {
            openStoreLocator();
        } else {
            closeStoreLocator();
        }
    }

    function openStoreLocator() {
        storeLocatorBtn.setAttribute("aria-expanded", "true");
        toggleKeyboardAndAssistiveVisibility(storeLocator, true);
        storeLocator.classList.remove("g-visually-hidden");

        detectOutsideClick([storeLocatorBtn, storeLocator], function () {
            closeStoreLocator();
        });
    }

    function closeStoreLocator() {

        if (document.activeElement.closest(".g-store-locator") !== null) {
            storeLocatorBtn.focus();
        }

        storeLocatorBtn.setAttribute("aria-expanded", "false");
        toggleKeyboardAndAssistiveVisibility(storeLocator, false);
        storeLocator.classList.add("g-visually-hidden");
        resetStoreLocator();
    }

    function storeLocatorFindStoreBtnClickHandler(e) {

        storeLocator.classList.add("g-store-locator--find-store");
        e.target.setAttribute("aria-expanded", true);
        storeLocatorTools.setAttribute("aria-hidden", false);
        storeSearchField.focus();
    }

    function resetStoreLocator() {
        storeLocator.classList.remove("g-store-locator--find-store");
        storeLocatorFindStoreBtn.setAttribute("aria-expanded", false);
        storeLocatorTools.setAttribute("aria-hidden", true);
    }

    function storeLocatorLaunchBtnClickHandler() {

        var storeLocatorBaseUrl = storeLocator.dataset.url;

        if (storeLocatorBaseUrl.length > 0) {

            var searchField = storeLocator.querySelector("#storeSearchFieldG");

            var queryStringInitial = storeLocatorBaseUrl.indexOf("?") >= 0 ? "&" : "?",
                storeLocatorFullUrl = storeLocatorBaseUrl + queryStringInitial + "place=" + escape(searchField.value);

            var queryStringOptions = "",
                omnitureFilters = "",
                selectedFilters = document.querySelectorAll("#storeLocatorFiltersG input[type='checkbox']:checked");

            for (var i = 0; i < selectedFilters.length; i++) {
                queryStringOptions += selectedFilters[i].dataset.filterName;

                var omnitureTag = selectedFilters[i].dataset.omnitureTag;

                if (omnitureTag) {
                    if (!omnitureFilters) {
                        omnitureFilters += omnitureTag;
                    } else {
                        omnitureFilters += "," + omnitureTag;
                    }
                }
            }

            omnitureFilters = omnitureFilters.length == 0 ? "No filters" : omnitureFilters;

            if (typeof s_oTrackPage === "function") {
                var omnitureData = {
                    s_oPGS: "store_locator_filters",
                    s_oSLF: "Header:" + omnitureFilters + ":undefined"
                };
                s_oTrackPage(omnitureData);
            }

            console.log(omnitureData);


            if (queryStringOptions) {
                storeLocatorFullUrl += "&option=" + escape(queryStringOptions);
            }
            var target = storeLocator.dataset.target;

            if (target && target.length > 0) {
                window.open(storeLocatorFullUrl, target);
            } else {
                window.location = storeLocatorFullUrl;
            }
        }
    }

    function searchFormSubmissionHandler() {

        var searchQuery = searchField.value,
            searchFormAction = searchForm.dataset.url.replace('#qbox#', searchQuery);

        searchForm.setAttribute("action", searchFormAction);

        return true;
    }

    

    function openCartTootltip() {       
        emptyCartTooltip.classList.remove("g-visually-hidden");
        emptyCartTooltip.removeAttribute("aria-hidden");

        detectOutsideClick([cartBtn], function () {
            closeCartTootltip();
        });
    }

    function closeCartTootltip() {
        emptyCartTooltip.classList.add("g-visually-hidden");
        emptyCartTooltip.setAttribute("aria-hidden", true);
    }

    function provinceSelectionHandler(e) {

        var currentLanguage = langSelectorDesktopBtn.dataset.language,
            selectedProvince;

        if (e.target.matches(".g-prov-selector-province")) {
            selectedProvince = e.target.dataset.value;
        }
        else if (e.target.matches(".g-prov-selector-province-label")) {
            selectedProvince = e.target.parentNode.dataset.value;
        }
        else if (e.target.matches("input") || e.target.matches("select")) {
            selectedProvince = e.target.value;
        } else {
            return;
        }

        closeProvSelectorDesktop();
        BELL.gConnector.utils.cookieManager.setLanguageRegionCookieValue(currentLanguage, selectedProvince);
        var provRegex = /(prov=\w+)|(province=\w+)/i;
        BELL.gConnector.utils.cookieManager.eraseZoneCookie();
        window.location = location.href.replace(provRegex, "prov=" + selectedProvince.toLowerCase());
    }

    function languageButtonClickHandler() {

        var selectedLanguage = langSelectorDesktopBtnG.dataset.alternative,
            vanityurl = langSelectorDesktopBtnG.dataset.vanityurl;

        BELL.gConnector.utils.cookieManager.setLanguageRegionCookieValue(selectedLanguage, null);
        // Hard fix for CR - 00093503 - GEN - Support - Language toggle not working in ON/QC from support home page
        // need to investigate for right fix.

        try {
            if (window.location && (window.location.href.replace(/\/$/, "").toLowerCase() == window.location.origin.toLowerCase())) {
                if ((window.location.host.toLowerCase() == 'support.bell.ca') && (selectedLanguage == 'fr')) {
                    window.location.host = 'soutien.bell.ca';
                    return;
                }
                else if ((window.location.host.toLowerCase() == 'support-p1.int.bell.ca') && (selectedLanguage == 'fr')) {
                    window.location.host = 'soutien-p1.int.bell.ca';
                    return;
                }
                else if ((window.location.host.toLowerCase() == 'support-p2.int.bell.ca') && (selectedLanguage == 'fr')) {
                    window.location.host = 'soutien-p2.int.bell.ca';
                    return;
                }
                else if ((window.location.host.toLowerCase() == 'soutien.bell.ca') && (selectedLanguage == 'en')) {
                    window.location.host = 'support.bell.ca';
                    return;
                }
                else if ((window.location.host.toLowerCase() == 'soutien-p1.int.bell.ca') && (selectedLanguage == 'en')) {
                    window.location.host = 'support-p1.int.bell.ca';
                    return;
                }
                else if ((window.location.host.toLowerCase() == 'soutien-p2.int.bell.ca') && (selectedLanguage == 'en')) {
                    window.location.host = 'support-p2.int.bell.ca';
                    return;
                }
            }
        }
        catch (err) {
            //console.log(err);
        }

        var langRegex = /(language=\w+)|(lang=\w+)/i;

        if (vanityurl && vanityurl.length > 0) {
            if (langRegex.test(vanityurl)) {
                window.location = vanityurl.replace(langRegex, "lang=" + language);
            } else {
                window.location = vanityurl;
            }
        } else if (langRegex.test(location.href)) {
            location.href = location.href.replace(langRegex, "lang=" + language);
        } else {
            window.location.reload();
        }
    }   

    function connectorNavClickHandler(e) {


        if (isTopNavAnimationInProgress) {
            return;
        }

        if (e.target.classList.contains("g-connector-nav-item") || e.target.parentNode.classList.contains("g-connector-nav-item")) {

            var clickedNavItem = e.target.classList.contains("g-connector-nav-item") ? e.target : e.target.parentNode,
                currentLob = clickedNavItem.closest(".g-connector-nav-lob");

            if (clickedNavItem.getAttribute("href") !== null) {
                return;
            }

            var currentLobFlyout = currentLob.querySelector(".g-connector-nav-lob-content");

            if (clickedNavItem.getAttribute("aria-expanded") === "true") {

                clickedNavItem.setAttribute("aria-expanded", false);
                closeTopNav();

            } else {
                closeTopNav();
                openLobNav();
                clickedNavItem.setAttribute("aria-expanded", true);

                if (currentLob !== null) {

                    currentLob.classList.add("g-active");

                    connectorNavBackdropDesktop.style.height = currentLobFlyout.clientHeight + "px";

                    var timeout = setTimeout(function () {
                        currentLob.classList.add("g-transition");

                    }, 10);
                }
            }

            if (!window.matchMedia(tabletMediaQuery).matches) {

                detectOutsideClick([connectorNav], function () {
                    closeAllNav();
                });
            }
        }
    }

    function searchAutocompleteClickHandler(e) {
        var selectedOption = e.target,
            selectedOptionText = selectedOption.textContent;

        searchField.value = selectedOptionText;
        searchForm.dispatchEvent(new Event('submit'));
        searchForm.submit();
    }

    function populateSearchAutocompleteLiveregion(message) {

        searchAutocompleteLiveregion.innerHTML = "";
        var messageEl = document.createElement("div");
        messageEl.textContent = message;
        searchAutocompleteLiveregion.appendChild(messageEl);
    }

    function searchBtnClickHandler(e) {

        var button = e.target.closest("button"),
            isActive = button.getAttribute("aria-pressed") === "true";

        if (!isActive) {
            bell.gConnector.showSearch();
        } else {
            bell.gConnector.hideSearch();
        }
    }

    function mobileBackBtnClickHandler(e) {

        if (isTopNavAnimationInProgress) {
            return;
        }

        closeLobNav();
    }

    function searchFieldChangeHandler(e) {
        if (searchField.value.length > 0) {
            connectorSearchWrap.classList.add("g-connector-search-field-dirty");
        } else {
            connectorSearchWrap.classList.remove("g-connector-search-field-dirty");
        }

        if(searchField.value.length > 2) {

            var query = searchField.value;

            if (query.indexOf(":") > -1) {
                query = query.substring(0, query.indexOf(":"));
            }

            var urlQuery = "?q=" + query + "&prov=" + currentProvince + "&lang=" + currentLanguage + "&mktseg=" + searchMktseg,
                fullUrl = "https://www.bell.ca/Search/Search/GetAutocomplete" + urlQuery;


            BELL.gConnector.utils.getJSONP(fullUrl, "BELL.gConnector.renderSearchAutocomplete");

        } else {
            //searchForm.classList.remove("g-active");
            searchAutocomplete.classList.remove("g-active");
            searchAutocompleteLiveregion.innerHTML = '';
        }
    }

    function searchFieldKeyupHandler(e) {

        var autocompleteItemElements = searchAutocomplete.querySelectorAll("ul > li");

        if ((e.which === 38 || e.which === 40) && autocompleteItemElements.length > 0) {

            e.preventDefault();

            var selectedAutocompleteOption = searchAutocomplete.querySelector("button.g-active"),
                selectedAutocompleteOptionIndex = selectedAutocompleteOption === null ? -1 : selectedAutocompleteOption.id.split("_")[1];

            selectedAutocompleteOptionIndex = parseInt(selectedAutocompleteOptionIndex);

            if (e.which === 38) {

                if (selectedAutocompleteOptionIndex === 0 || selectedAutocompleteOptionIndex === -1) {
                    selectedAutocompleteOptionIndex = autocompleteItemElements.length - 1;
                } else {
                    selectedAutocompleteOptionIndex -= 1;
                }

            } else if (e.which === 40) {
                if (selectedAutocompleteOptionIndex === autocompleteItemElements.length - 1 || selectedAutocompleteOptionIndex === -1) {
                    selectedAutocompleteOptionIndex = 0;
                } else {
                    selectedAutocompleteOptionIndex += 1;
                }
            }

            searchAutocomplete.querySelectorAll("button").forEach(function (element) {
                element.classList.remove("g-active");
            });

            var activeAutocompleteButton = document.getElementById("searchAutocompleteBtnG_" + selectedAutocompleteOptionIndex);
            activeAutocompleteButton.classList.add("g-active");

            var autocompleteItemText = activeAutocompleteButton.innerText;

            searchField.value = "";
            searchField.value = autocompleteItemText;
        }
    }

    function openLobNav() {

        document.body.classList.add("g-mobile-nav-lob-active");
        mobileLoginLink.setAttribute("tabindex", -1);

        if (window.matchMedia(tabletMediaQuery).matches) {
            document.querySelectorAll(".g-connector-nav-item").forEach(function (elem) {
                elem.setAttribute("tabindex", -1);
            });

            document.querySelectorAll(".g-federal-bar-mobile > ul > li > a, .g-federal-bar-mobile > ul > li > button, .g-prov-selector-mobile, .g-lang-selector-mobile").forEach(function (elem) {
                elem.setAttribute("tabindex", -1);
            });
        }

        mobileBackBtn.removeAttribute("disabled");
        mobileBackBtn.focus();
    }

    function closeLobNav() {

        mobileBackBtn.setAttribute("disabled", "disabled");
        mobileLoginLink.removeAttribute("tabindex");

        document.body.classList.remove("g-mobile-nav-lob-active");
        document.querySelectorAll(".g-connector-nav-item").forEach(function (elem) {
            elem.removeAttribute("tabindex");
        });
        document.querySelectorAll(".g-federal-bar-mobile > ul > li > a, .g-federal-bar-mobile > ul > li > button, .g-prov-selector-mobile, .g-lang-selector-mobile").forEach(function (elem) {
            elem.removeAttribute("tabindex");
        });

        var activeLob = document.querySelector(".g-connector-nav-lob.g-active");
        var activeLobButton = document.querySelector(".g-connector-nav-lob.g-active button");

        if (activeLob !== null) {

            activeLob.classList.remove("g-transition");

            var timeout = setTimeout( 500);
        }

        if (activeLobButton !== null) {

            activeLobButton.setAttribute("aria-expanded", false);

            if (window.matchMedia(tabletMediaQuery).matches) {
                activeLobButton.focus();
            }
        }
    }

    function businessSectionBtnClickHandler(e) {

        var button = e.target.closest("button"),
            isActive = button.getAttribute("aria-expanded") === "true",
            isMobile = button.id === "businessSectionMobileBtnG";

        if (!isActive) {
            opneBusinessSection(isMobile);
        } else {
            closeBusinessSection(isMobile);
        }
    }


    function provSelectorDesktopBtnClickHandler(e) {

        var isActive = e.target.getAttribute("aria-expanded") === "true";

        if (!isActive) {
            openProvSelectorDesktop();
        } else {
            closeProvSelectorDesktop();
        }
    }

    function openProvSelectorDesktop() {
        provSelectorDesktopBtn.setAttribute("aria-expanded", "true");
        provSelectorDesktop.classList.remove("g-visually-hidden");
        toggleKeyboardAndAssistiveVisibility(provSelectorDesktop, true);

        detectOutsideClick([provSelectorDesktopBtn, provSelectorDesktop], function () {
            closeProvSelectorDesktop();
        });
    }

    function closeProvSelectorDesktop() {

        if (document.activeElement.closest(".g-prov-selector-desktop") !== null) {
            provSelectorDesktopBtn.focus();
        }

        provSelectorDesktopBtn.setAttribute("aria-expanded", "false");
        provSelectorDesktop.classList.add("g-visually-hidden");
        toggleKeyboardAndAssistiveVisibility(provSelectorDesktop, false);
    }


    function mobileBarNavBtnClickHandler(e) {

        var isActive = e.target.getAttribute("aria-pressed") === "true";

        if (!isActive) {
            openMobileNav();
        } else {
            closeAllNav();
        }
    }

    function desktopLoginBtnClickHandler(e) {
        if (desktopLoginBtn !== null) {
            if (desktopLoginBtn.getAttribute("aria-expanded") === "true") {
                closeDesktopLoggedInMenu();
            } else {
                openDesktopLoggedInMenu();
            }
        }
    }

    function closeDesktopLoggedInMenu() {
        if (desktopLoginBtn !== null) {
            if (document.activeElement.closest(".g-connector-logged-in-menu-list") !== null) {
                desktopLoginBtn.focus();
            }

            desktopLoginBtn.setAttribute("aria-expanded", "false");
            desktopLoggedInMenu.classList.add("g-visually-hidden");
            toggleKeyboardAndAssistiveVisibility(desktopLoggedInMenu, false);
        }
    }

    function openDesktopLoggedInMenu() {
        if (desktopLoginBtn !== null) {
            desktopLoginBtn.setAttribute("aria-expanded", "true");
            desktopLoggedInMenu.classList.remove("g-visually-hidden");
            toggleKeyboardAndAssistiveVisibility(desktopLoggedInMenu, true);

            detectOutsideClick([desktopLoginBtn, desktopLoggedInMenu], ;
        }
    }

    function toggleKeyboardAndAssistiveVisibility(elem, isVisible) {

        if (isVisible === true) {

            elem.removeAttribute("aria-hidden");
            getAllFocusableChildren(elem).forEach(
        } else {

            elem.setAttribute("aria-hidden", true);

            getAllFocusableChildren(elem).forEach(
        }
    }

    

    

    function opneBusinessSection(isMobile) {

        if (isMobile) {
            businessSectionMobileBtn.setAttribute("aria-expanded", "true");
            toggleKeyboardAndAssistiveVisibility(businessSectionMobile, true);

        } else {
            businessSectionDesktopBtn.setAttribute("aria-expanded", "true");
            toggleKeyboardAndAssistiveVisibility(businessSectionDesktop, true);
            businessSectionDesktop.classList.remove("g-visually-hidden");

            detectOutsideClick([businessSectionDesktopBtn, businessSectionDesktop], ;
        }
    }

    function closeBusinessSection(isMobile) {

        if (document.activeElement.closest(".g-connector-business-section-desktop") !== null) {
            businessSectionDesktopBtn.focus();
        }

        if (isMobile) {
            businessSectionMobileBtn.setAttribute("aria-expanded", "false");
            toggleKeyboardAndAssistiveVisibility(businessSectionMobile, false);

        } else {
            businessSectionDesktopBtn.setAttribute("aria-expanded", "false");
            toggleKeyboardAndAssistiveVisibility(businessSectionDesktop, false);
            businessSectionDesktop.classList.add("g-visually-hidden");
        }
    }

    function openMobileNav() {

        mobileBarNavBtn.setAttribute("aria-pressed", "true");
        mobileBarNavBtn.setAttribute("title", mobileBarNavBtn.dataset.labelCollapse);
        mobileBarSearchBtn.setAttribute("disabled", "disabled");
        document.body.classList.add("g-mobile-nav-active");
        mobileBackBtn.classList.remove("g-visually-hidden");
        mobileLoginLink.removeAttribute("tabindex");
        mobileLoginLink.classList.remove("g-visually-hidden");
        mobileBackBtn.setAttribute("disabled", "disabled");
        bell.gConnector.hideSearch();
    }

    function closeMobileNav() {

        mobileBarNavBtn.setAttribute("aria-pressed", "false");
        mobileBarNavBtn.setAttribute("title", mobileBarNavBtn.dataset.labelExpand);
        mobileBarSearchBtn.removeAttribute("disabled");
        mobileBackBtn.classList.add("g-visually-hidden");
        document.body.classList.remove("g-mobile-nav-active");
        mobileLoginLink.classList.add("g-visually-hidden");
        mobileLoginLink.setAttribute("tabindex", "-1");
    }

    function closeTopNav(currentLobButton) {

        if (isTopNavAnimationInProgress) {
            return;
        }

        var activeLob = document.querySelector(".g-connector-nav-lob.g-active"),
            activeLobButton = document.querySelector(".g-connector-nav-lob.g-active button");

        if (activeLob !== null) {

            var activeLobContent = activeLob.querySelector(".g-connector-nav-lob-content");

            if (!window.matchMedia(tabletMediaQuery).matches) {
                toggleKeyboardAndAssistiveVisibility(activeLobContent, false);
            }            

            activeLob.classList.remove("g-transition");
            isTopNavAnimationInProgress = true;
           
            connectorNavBackdropDesktop.style.height = 0;

            var timeout = setTimeout(function () {
                activeLob.classList.remove("g-active");
                isTopNavAnimationInProgress = false;

                if (!window.matchMedia(tabletMediaQuery).matches) {
                    toggleKeyboardAndAssistiveVisibility(activeLobContent, true);
                }
            }, 500);

        }

        if (activeLobButton !== null) {
            activeLobButton.setAttribute("aria-expanded", false);
            if (window.matchMedia(tabletMediaQuery).matches) {
                activeLobButton.focus();
            }
        }
    }

    function closeAllNav() {
        
        closeTopNav();
        closeLobNav();
        closeMobileNav();

        var closestLob = document.activeElement.closest(".g-connector-nav-lob");

        if (window.matchMedia(tabletMediaQuery).matches) {

            mobileBarNavBtn.focus();

        } else {
            if (closestLob !== null) {
                closestLob.querySelector(".g-connector-nav-item").focus();
            }
        }
    }

    function documentKeyupHandler(e) {

        //escape pressed
        if (e.keyCode == "27") {
            closeAllNav();
            closeDesktopLoggedInMenu();
            closeBusinessSection(true);
            closeBusinessSection(false);
            closeProvSelectorDesktop();
            bell.gConnector.hideSearch();
            closeCartTootltip();
            closeStoreLocator();
        }
        ////tab pressed
        if (e.keyCode === 9) {
            if (document.activeElement.classList.contains("g-connector-nav-item")) { closeTopNav() };            
        }
    }

    function documentKeydownHandler(e) {

        //left or up keys pressed
        if (e.keyCode === 37 || e.keyCode === 38) {
            var prevItem = getNavItem("prev");
            if (prevItem) {
                e.preventDefault();
                prevItem.focus();
            }
        }

        ////right or down keys pressed
        if (e.keyCode === 39 || e.keyCode === 40) {
            var nextItem = getNavItem("next");
            if (nextItem) {
                e.preventDefault();
                nextItem.focus();
            }
        }

        ////home pressed
        if (e.keyCode === 36) {
            var firstItem = getNavItem("first");
            if (firstItem) {
                e.preventDefault();
                firstItem.focus();
            }
        }

        ////end pressed
        if (e.keyCode === 35) {
            var lastItem = getNavItem("last");
            if (lastItem) {
                e.preventDefault();
                lastItem.focus();
            }
        }

        if (e.keyCode === 9) {
            if (window.matchMedia(tabletMediaQuery).matches) {

                if (document.activeElement.id === "langSelectorMobileBtnG") {
                    setTimeout(function () { mobileBarNavBtn.focus() }, 10);
                }

                if (document.activeElement.closest(".g-connector-nav-shop-list") !== null) {

                    var lastItem = document.activeElement.closest(".g-connector-nav-shop-list > li:last-of-type > a");

                    if (document.activeElement === lastItem) {
                        setTimeout(function () { mobileBarNavBtn.focus() }, 10);
                    }
                }
            }
        }
    }

    function getNavItem(itemPosition) {

        var item = null,
            elem = document.activeElement;

        if (elem.classList.contains("g-connector-nav-shop-link") || elem.classList.contains("g-connector-nav-discover-link")) {

            var elemSelector = elem.classList.contains("g-connector-nav-shop-link") ? ".g-connector-nav-shop-link" : ".g-connector-nav-discover-link";

            var currentLobContent = elem.closest(".g-connector-nav-lob-content"),
                firstItem = currentLobContent.querySelector(".g-connector-nav-shop-link"),
                lastItem = currentLobContent.querySelector(".g-connector-nav-discover-list > li:last-child > .g-connector-nav-discover-link"),
                firstDiscoverLink = currentLobContent.querySelector(".g-connector-nav-discover-link"),
                lastShopLink = currentLobContent.querySelector(".g-connector-nav-shop-list > li:last-child > .g-connector-nav-shop-link");

            var currentListItem = document.activeElement.parentElement,
                nextListItem = currentListItem.nextElementSibling,
                prevtListItem = currentListItem.previousElementSibling;

            var nextItem = nextListItem === null ? null : nextListItem.querySelector(elemSelector);

            if (itemPosition === "next" && elemSelector === ".g-connector-nav-shop-link" && nextItem === null) {
                nextItem = firstDiscoverLink;
            }

            var prevItem = prevtListItem === null ? null : prevtListItem.querySelector(elemSelector);

            if (itemPosition === "prev" && elemSelector === ".g-connector-nav-discover-link" && prevItem === null) {
                prevItem = lastShopLink;
            }
        }

        switch (itemPosition) {
            case "next":
                item = nextItem;
                break;
            case "prev":
                item = prevItem;
                break;
            case "first":
                item = firstItem;
                break;
            case "last":
                item = lastItem;
                break;
        }

        return item;
    }

    debounce: function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            }, wait);
            if (immediate && !timeout) func.apply(context, args);
        };
    }

    function detectOutsideClick(elements, callback) {

        var outsideClickListener = function (event) {

            var isHide = true;

            for (var i = 0; i < elements.length; i++) {

                var element = elements[i];

                if (typeof element !== "undefined" && element.contains(event.target)) {
                    isHide = false;
                }
            }

            if (isHide) {
                removeClickListener();

                if (typeof callback === "function") {
                    callback();
                }
            }
        }

        

        document.addEventListener('click', outsideClickListener);
        document.addEventListener('focusin', outsideClickListener);
    }

    

    return bell;

})(BELL || {});

var BELL = (function (bell) {

    var self,
        ua,
        language,
        speechRecognitionCheck,
        isAndroid,
        isMicrophoneAvailable,
        isVoiceSearchEnabled,
        isCapturing = false,
        body,
        voiceSearchBtn,
        voiceSearchCloseBtn,
        searchForm;

    bell.gConnector = bell.gConnector || {};

    bell.gConnector.voiceSearch = {

        init: function () {

            self = this;
            ua = navigator.userAgent.toLowerCase(),
                language = (document.documentElement.lang !== "fr" && typeof document.documentElement.lang !== "undefined") ? "en-CA" : "fr-CA",
                speechRecognitionCheck = window.SpeechRecognition || window.webkitSpeechRecognition || null,
                isAndroid = ua.indexOf("android") > -1 || ua.indexOf("mobile") > -1,
                isMicrophoneAvailable = false,
                isVoiceSearchEnabled = false;
            body = document.getElementsByTagName("body")[0],
                voiceSearchBtn = document.getElementById("voice_search_g"),
                searchForm = document.getElementById("rsx-connector-search"),
                voiceSearchCloseBtn = document.getElementById("voiceSearchCloseBtnG");

            if (isAndroid) {
                return;
            }

            if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {

                navigator.mediaDevices.enumerateDevices()
                    .then(function (devices) {
                        for (var i = 0; i < devices.length; i++) {

                            var device = devices[i];

                            if (device.kind === "audioinput" && !isMicrophoneAvailable) {

                                isMicrophoneAvailable = true;

                                if (speechRecognitionCheck
                                    && navigator.mediaDevices.getUserMedia
                                    && isMicrophoneAvailable
                                    && location.protocol.toLowerCase().indexOf("https") > -1) {

                                    self.setupRecognition();
                                }

                                document.addEventListener("keyup", ;

                                voiceSearchCloseBtn.addEventListener("click", ;
                            }
                        }
                    });

            }
        },

        setupRecognition: function () {

            var self = this;

            self.recognition = new speechRecognitionCheck();

            navigator.permissions.query({ name: 'microphone' }).then(function (permissionStatus) {
                console.log('Microphone permission state:', permissionStatus.state);

                if (permissionStatus.state !== "denied") {
                    body.classList.add("g-connector-voice-search-enabled");
                }
            });

            voiceSearchBtn.addEventListener("click", self.voiceSearchBtnClickHandler.bind(this));
            voiceSearchCloseBtn.addEventListener("focusout", self.voiceSearchReturnFocus.bind(this));

            self.recognition.onresult = (function (event) {               

                var query = '',
                    searchField = document.getElementById("searchFieldG"),
                    connectorSearchWrap = document.getElementById("connectorSearchWrapG"),
                    searchForm = document.querySelector("#rsx-connector-search.g-connector-search");

                for (var i = 0; i < event.results.length; i++) {
                    if (event.results[i].isFinal) {
                        query = event.results[i][0].transcript;

                        bell.gConnector.showSearch();

                        searchField.value = query;
                        connectorSearchWrap.classList.add("g-connector-search-field-dirty");
                        searchField.focus();
                        searchForm.dispatchEvent(new Event('submit'));
                        searchForm.submit();
                    }
                }
            });

            self.recognition.onspeechend = (;

            self.recognition.onerror = (function (event) {
                console.log("web speech error: " + event.error);
                self.stopCapture();
            });
        },

        voiceSearchBtnClickHandler: function () {

            var self = this;

            if (isVoiceSearchEnabled === false) {
                navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {

                    isVoiceSearchEnabled === true;

                    self.toggleCapture();
                    self.voiceSearchFocusModal();

                }).catch(;

            } else {
                self.toggleCapture();
            }

            typeof s_oTrackPage == "function" && s_oTrackPage({
                s_oAPT: "095-0-0"
            })

            self.voiceSearchFocusModal();
        },

        voiceSearchFocusModal: function () {
            setTimeout(function () {
                var self = this;
                voiceSearchModal = document.querySelector(".g-connector-voice-search");
                voiceSearchClose = document.getElementById("voiceSearchCloseBtn");
                if (window.getComputedStyle(voiceSearchModal).visibility !== "hidden") {
                    self.voiceSearchClose.focus();
                }
            }, 100);
        },

        voiceSearchReturnFocus: function () {

            var voiceSearchBtn = document.querySelector("#voiceSearchCloseBtn");

            if (window.getComputedStyle(voiceSearchBtn).visibility !== "hidden") {
                voiceSearchBtn.focus();
            }
        },

        startCapture: function () {
            body.classList.add("g-connector-voice-search-active");
            self.recognition.lang = this.language;
            self.recognition.interimResults = true;
            self.recognition.start();
            isCapturing = true;
        },

        stopCapture: function () {

            body.classList.remove("g-connector-voice-search-active");
            if (typeof recognition !== "undefined") {
                this.recognition.stop();
            }

            isCapturing = false;
        },

        toggleCapture: function () {

            if (!isCapturing) {
                this.startCapture();
            } else {
                this.stopCapture();
            }
        }
    }

    return bell;

})(BELL || {});


var BELL = (function (bell) {

    bell.gConnector.utils = {

        cookieManager: {

            setLanguageRegionCookieValue: function (lang, region, larsegmenttype, bIgnorePreviousCookie) {
                var geminiCookieName = "gemini";
                var cookieVal = bIgnorePreviousCookie == true ? null : BELL.gConnector.utils.cookieManager.getCookie(geminiCookieName);
                var geminiCookieVal = BELL.gConnector.utils.cookieManager.getGeminiString(lang, region, cookieVal, larsegmenttype);
                var hostname = window.location.hostname;
                var domain = ".bell.ca";
                if (hostname.toLowerCase().indexOf("virginmobile.ca") > -1) {
                    domain = ".virginmobile.ca";
                }
                BELL.gConnector.utils.cookieManager.setCookie(geminiCookieName, geminiCookieVal, 90, domain);
            },

            getGeminiString: function (lang, region, cval, larsegmenttype) {
                var retVal = "region=" + region + "|language=" + lang + "|province=" + region + "|LarSegmentType=" + larsegmenttype;
                if (cval != null) {
                    var strSpl = cval.split('|');

                    if (region != null && region.length != 0) {
                        strSpl[0] = "region=" + region;
                        strSpl[2] = "province=" + region;
                    }

                    if (lang != null && lang.length != 0) {
                        strSpl[1] = "language=" + lang;
                    }

                    if (larsegmenttype != null && larsegmenttype != undefined && larsegmenttype.length != 0) {
                        strSpl[3] = "LarSegmentType=" + larsegmenttype;
                    }

                    retVal = strSpl[0] + "|" + strSpl[1] + "|" + strSpl[2] + "|" + strSpl[3];
                }

                return retVal;
            },

            getCookie: 

            setCookie: function (name, value, days, domain) {
                var expires = "", date = new Date();

                if (!days || isNaN(days)) {
                    days = 365;
                }

                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toGMTString();

                var setCookieVal = name + "=" + value + expires + "; path=/";

                if (domain) {
                    setCookieVal += "; domain=" + domain;
                }

                if (document.location.protocol === 'https:') {
                    setCookieVal += "; secure";
                }

                document.cookie = setCookieVal;
            },

            getUrlVars: function (cvalue) {
                var vars = {};
                if (!cvalue) return vars;
                var parts = cvalue.replace(/([^=&]+)=([^&]*)/gi, ;
                return vars;
            },

            eraseZoneCookie: 

            updateZoneCookie: function (zone, city) {
                var domain = ".bell.ca";
                var zoneVal = "zone=" + zone + "&city=" + city;
                BELL.gConnector.utils.cookieManager.setCookie('zone', zoneVal, 90, domain);
            },

            readProvinceCookieVal: function () {
                var gemini = document.cookie.match(new RegExp('gemini' + '=([^;]+)'));
                if (typeof gemini !== 'undefined' && gemini != null) {
                    var pair = gemini[1].split("|").filter(function (x) { return x.indexOf("province=") == 0; });
                    return typeof pair != "undefined" && pair != null ? pair.toString().split("=")[1] : "";
                }
                return "";
            },

            readZoneInitCookieVal: function () {
                var zone = document.cookie.match(new RegExp('zone' + '=([^;]+)'));
                if (typeof zone !== 'undefined' && zone != null) {
                    var pair = zone[1].split("&").filter(;
                    return typeof pair != "undefined" && pair != null ? pair.toString().split("=")[1] : "";
                }
                return "";
            },

        },

        getJSONP: function (url, callback) {
            var ref = window.document.getElementsByTagName('script')[0];
            var script = window.document.createElement('script');
            script.src = url + (url.indexOf('?') + 1 ? '&' : '?') + 'callback=' + callback;

            ref.parentNode.insertBefore(script, ref);

            script.onload = 
        },

        removeZoneCookie: function () {

            fetch('/ajax/rsxhome/RemoveZoneCookie')
                .then(
                .then(
                .catch(;
        },

        throttle: 

        debounce: function debounce(func, wait, immediate) {
            var timeout;
            return 
        },

        getScript: function (source, callback) {
            var script = document.createElement('script');
            var prior = document.getElementsByTagName('script')[0];
            script.async = 1;

            script.onload = script.onreadystatechange = 

            script.src = source;
            prior.parentNode.insertBefore(script, prior);
        }
    }

    return bell;

})(BELL || {});