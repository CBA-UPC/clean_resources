/* eslint-disable no-undef */
var
    eventsPageSwiper,
    membersDomains = [];

jQuery(document).ready(function() {
    jQuery("#module-hero-module__footer-container-mobile-id").on("shown", function() {
        jQuery('.module-hero-module__footer-header-action-mobile div')
            .removeClass()
            .addClass('arrow-up-icon');
    });

    jQuery("#module-hero-module__footer-container-mobile-id").on("hidden", ;

    jQuery(document).ajaxComplete(function() {
        var desktop_length = 110;
        var mobile_length = 80;

        // truncate desktop title
        var resultsCardTitleEl = jQuery('.results-card .results-card-title');

        if (resultsCardTitleEl.length != 0) {
            resultsCardTitleEl.succinct({size: desktop_length});
        }

        // truncate mobile title
        var resultsCardTitleEl = jQuery('.search-page__mobile-card-title .results-card-title');

        if (resultsCardTitleEl.length != 0) {
            resultsCardTitleEl.succinct({size: mobile_length});
        }
    });

    jQuery('footer a').removeClass('fancybox');
    _handleMarketoAttachment() || _handleFileAttachment();
    _handleSingleCertificationPageCarousel();
    _handleSingleCertificationPageLinks();
    _handleCertificationOverview();
    _handleOurStoryTabs();

    // Init content tabs behavior
    jQuery(window).on('resize', ;

    _initContentTabs('#module--tabs-wrapper', true);
    _initContentTabs('#module--timeline-tabs-wrapper', true);
    _initTabs('#our-story #module--tabs-wrapper');
    _initTabs('#module--tabs-wrapper__our-story');
    _initTabs('#directors-submenu');

    // Search topic filters
    _initSearchTopicFilters(jQuery('#search-topic-filter'));
    _initSearchTopicFilters(jQuery('#search-topic-filter-mobile'));

    // Detects touch event and add a class to body for general use.
    if (_hasTouch()) {
        jQuery('body').addClass('touchable');
    } else {
        jQuery('body').addClass('not-touchable');
    }

    // Init Home Page Tile sidebar resizing based on tiles displayed on the left
    _initHomePageTileSidebarResize();
    jQuery(window).on('resize', function () {
        _initHomePageTileSidebarResize();
    });

});

// event listeners
jQuery(window).load(function() {
    // on click of the search filter
    jQuery('.search-filter__filter-options-container-mobile a, .search-filter__filter-options-footer-mobile a').on('click', function() {
        _handleDropdownFilterOptions(jQuery(this));
    });
    // on click of a currently selected filter
    jQuery('.search-filter__filter-options-selected-container').delegate('a','click', ;
    // on click of dropdown toggle
    jQuery(".mobile-dropdown-toggle").on("click", ;
    // on click/touch of 'Load more'
    jQuery(".pagination-mobile__button").on("click touchend", function(e) {
        e.preventDefault();
        // return if disabled
        if (jQuery(this).hasClass("disabled")) { return; }

        // replace 'Load more' with a spinner
        IAB.loading.showMobile();

        // next page
        IAB._handleSearch.params.p++;

        // separate params
        var data = {
            "data" : IAB._handleSearch.params,
            "cb" : IAB._handleSearch._completeCallback,
            "append" : true // optional param
        };

        // perform request
        IAB.ajaxHandler._fireAjax( data );
    });

    IAB._handleSearch._resizeCards();

    // resize card on window resize
    jQuery(window).resize(;

    _fixFullSizeImgAlign();

    // Article content
    _renderArticleContentElements();
    _renderCoBrandedImages();

    _handleModuleFilters();
    _initFilterableContent();

    // handle clicking on the agenda arrow
    _handleAgendaToggle();

    // show agenda arrows where needed
    _showAgendaArrows();

    // Init carousels
    _handlePageCarousel();
    _handleEventsPageCarousel();

    _handleMembersDomains();
    _handleGetInvolvedPageDetails();
    _handleNewsElementsVisibility();
    _handleTocScroll();
    //_handleEventsSharingDropdown();
    _handleEventSpeakersBio();
    _handleBackToTopListener();

    if (jQuery('.pdf-download-button').length > 0) {
        UIkit.util.on('.new-header', 'active', function () {
            jQuery('.pdf-download-button').removeClass('pdf-download-button-position-top-no-top');
            jQuery('.pdf-download-button').addClass('pdf-download-button-position-top');
            jQuery('.article-index__scroll-handler').css({ 'top': '125px'});
        });

        UIkit.util.on('.new-header', 'inactive', function () {
            jQuery('.pdf-download-button').removeClass('pdf-download-button-position-top');
            jQuery('.pdf-download-button').addClass('pdf-download-button-position-top-no-top');
            jQuery('.article-index__scroll-handler').css({ 'top': '75px'});
        });
    }

    // Remove duplicated character counter divs.
    jQuery('.originalTextareaInfo:not(:first)').remove();
    var isEvent         = jQuery('body').hasClass('single-iab_event'),
        hasNavBar       = jQuery('.toc-ul').length,
        hasCustomEmail  = jQuery('.contact-form-modal__custom-email').length;

    // Handles the button for the questions modal on the single events page.
    if (isEvent && hasNavBar && hasCustomEmail) {
        jQuery('.article-index ul').append('<li class="sub-index h3 questions-mail"><a href="#" uk-toggle="target: #contact-form-modal">Questions</a></li>');
        jQuery('#contact-form-modal').on('hidden', function() {
            jQuery('.questions-mail').removeClass('active');
        });
    }

    // Handles the nav-button for discussion topics on the single events page.
    if (jQuery('#module-discussion-topics').length) {
        jQuery('.article-index .toc-ul li:first-child')
            .after('<li class="sub-index h3 questions-mail"><a href="#module-discussion-topics">Discussion Topics</a></li>');
    }

    _handleSessionSponsors(isEvent);
});

/**
 * Some events need to be re-attached after the cart is updated.
 */
$(document.body).on('removed_from_cart updated_cart_totals', function() {
    _handleMembersDomains();
});

_hasTouch = function () {
    return ('ontouchstart' in document.documentElement
        || navigator.maxTouchPoints > 0
        || navigator.msMaxTouchPoints > 0
    );
};

_handleDropdownFilterOptions = function(selectedElement) {

    jQuery('.article-filter__dropdown').trigger('click');

    // get clicked element values
    var
        dropdownValue   = jQuery(selectedElement).data('dropdownValue'),
        value           = jQuery(selectedElement).data('value'),
        isDateOption    = (jQuery(selectedElement).data('date')) ? true : false;

    _handleActiveStatus(selectedElement, isDateOption);

    // Apply filters
    if (value == 'apply'){
        // if params have changed since last search
        if(IAB._handleSearch.currentParamsChanged()) {
            // hide flyout (emulate clicking on 'Filters')
            $('.search-filter__button')[0].click();
            var data = IAB._handleSearch.params,
                complete = IAB._handleSearch._completeCallback;
            // perform search
            IAB._handleSearch.performSearchAndUpdateParams(data, complete);
        }
    }

    // Clear filters
    if (value == 'clear_all') {
        jQuery('.search-filter').find('[data-value="clear_all"]').trigger('click');
        // collapse all filters
        _collapseAllFilters();
        // flip all icons down
        _flipDownAllArrows();
        // reset 'active' classes on all expanded dropdown filters
        _resetActiveClass();
        // clear filterable form
        _resetFilterableForm();
    }
    // actual filter clicked
    else {
        // trigger click of the actual filter item
        jQuery('.search-filter__group').find('[data-dropdown-value="' + dropdownValue + '"]').trigger('click');
    }
};

_handleAppliedFilterOptions = function(selectedElement) {
    // get the value of the clicked element
    var value = jQuery(selectedElement).data('value');
    // find a filter with that value in the dropdown and click it
    jQuery('.search-filter__filter-options-container-mobile').find('[data-value="'+value+'"]').trigger('click');
};

// toggle 'Active' class
_handleActiveStatus = function(selectedElement, isDateOption) {
    if (isDateOption) {
        jQuery('.search-filter__filter-body-dates-list-mobile li').removeClass('active');
    }
    jQuery(selectedElement).parent().toggleClass('active');
};

// add a 'hidden' attr to all dropdowns to hide them
_collapseAllFilters = 

// unsets 'active' class on all <li>s
_resetActiveClass = 

// clears the search input value for filterable content
_resetFilterableForm = function() {
    jQuery('.module-filterable-content .search-field').val("");
};

// flip arrow on filter dropdown expand
_flipArrow = function(parentEl) {
    var icon = parentEl.find('i');
    // if down, flip to up
    if (icon.hasClass('fa-chevron-down')) {
        icon.removeClass('fa-chevron-down').addClass('fa-chevron-up');
    }
    // otherwise, flip down
    else {
        icon.removeClass('fa-chevron-up').addClass('fa-chevron-down');
    }
};

_flipDownAllArrows = function (){
    // get all dropdown links & find all <i>s inside
    jQuery(".mobile-dropdown-toggle").find('i').each(;
};

_fixFullSizeImgAlign = function() {
    var fullSizeImgEl = jQuery('.article__content img.size-full');
    fullSizeImgEl.addClass('size-full-img-align');
    fullSizeImgEl.parent().next().addClass('clear');
};

_capitalizeToc = function() {
    var toc_items = jQuery('.article-index ul li a, .toc, .add-toc');
    jQuery.each(toc_items, function(index, item) {
        var previous_text = jQuery(item).text().toLowerCase();
        jQuery(item).text(previous_text.replace(/(?:^|\s)\S/g, );
    });
};

_renderArticleContentElements = function () {
    // buttons with arrows
    jQuery('.article__content .btn').append('<span class="bold iabicon-arrow-in-circle-right small-icon uk-padding-small uk-padding-remove-vertical uk-padding-remove-right"></span>');

    if ((jQuery('.related-links').length > 0 && jQuery('.related-links').is(":visible")) || (jQuery('.important-links').length > 0 && jQuery('.important-links').is(":visible"))) {
        jQuery('body').addClass('related-exists');
    }
    if ((jQuery('.toc').length > 0) || (jQuery('.add-toc').length > 0)) {
        jQuery('body').addClass('toc-exists');
        if (isMobile.any) {
            jQuery('.article__table-contents-header-container-mobile')
                .append('<div class="article-index uk-flex-auto" id="article-index-id"><ul></ul></div>');
            jQuery('.article-index').addClass('uk-hidden@m').attr('hidden', '');
            jQuery('.article__table-contents-header-mobile-action').removeAttr('hidden');
            jQuery("#article-index-id").on("beforeshow", function() {
                jQuery("#article-index-id").removeClass('uk-hidden@m');
            });
        } else {
            jQuery('.article-container')
                .prepend('<div class="article-index uk-flex-auto" id="article-index-id"><ul></ul></div>');
        }
    } else {
        jQuery('.article__table-contents-header-mobile').hide();
        jQuery('.article .article-container .article__content').addClass('no-toc');
        jQuery('.article .article-container .related-links').addClass('related-links-large');
    }

    jQuery(document)
        .on('touchend', '.article__table-contents-header-mobile-action',     );

    // Render table of content
    jQuery.each( jQuery('.article__content .toc:header, .article__content .add-toc:header, .event__body .toc:header, .product__body .toc:header'), function( key, element ) {
        var className = '',
            parentId = 'none',
            marginLeft = 0,
            currentHeading = 1,
            levels = 0;

        // Add ID to the heading inside the article content
        jQuery(element).prop('id', 'index-' + key);

        // Get first Heading info
        const firstHeading = jQuery('.toc:header, .add-toc:header').first();
        const firstHeadingTagName = firstHeading.prop('tagName');
        const firstHeadingIndex = parseInt(firstHeadingTagName.substring(1)) - 1;

        // Get sub-index parent id
        currentHeading = parseInt(jQuery(element).prop('tagName').substring(1)) - 1;
        parentId = jQuery(element).prevUntil('h' + (currentHeading - 1)).last().prev().attr('id');
        className = 'sub-index ' + jQuery(element).prop('tagName').toLowerCase();
        levels = currentHeading - firstHeadingIndex;

        if (levels > 0) {
            marginLeft = levels * 20;
        }

        // handle outbound targets
        var href = '#index-' + key;
        var target = '';

        var outboundTarget = jQuery(this).data('outbound-link') || '';
        if (outboundTarget) {
            href = outboundTarget;
            target = outboundTarget.match(/www\.iab\.com/) ? '' : ' target="_blank"';
        }

        // Render table of content
        jQuery('.article-index ul').append('<li class="' + className + '" style="margin-left: ' + marginLeft + 'px"><a href="' + href + '" data-parentid="' + parentId + '"' + target + '>' + jQuery(element).text().trim() + '</a></li>');
        //_capitalizeToc();
    });

    // handle fragment on page load
    var hash = ''+window.location.hash
    if (hash.substring(0,7) == '#index-') {
        var targetEl = $(hash)
        if (targetEl.length > 0) {
            $([document.documentElement, document.body]).animate({
                scrollTop: targetEl.offset().top - targetEl.outerHeight()
            }, 600, function() {
                // scroll again to account for additional layout changes
                $([document.documentElement, document.body]).animate({
                    scrollTop: targetEl.offset().top - targetEl.outerHeight()
                }, 150)
            });
        }
    }

    jQuery(document).on('click', '.article-index li', function() {
        // Reset active class
        jQuery('.article-index li').removeClass('active');
        jQuery('.uk-offcanvas-bar ul li').removeClass('active');

        // Activate clicked item
        jQuery(this).addClass('active');
    });
};

// Move co-branded images to the table of content
_renderCoBrandedImages = function () {
    const coBrandedImages = jQuery('.article__content .cobranded_toc_image');

    if (jQuery(coBrandedImages).length > 0) {
        if ($('.article-container .article-index').length === 0) {
            jQuery('.article-container').prepend('<div class="article-index uk-flex-auto" id="article-index-id"><ul></ul></div>');
        }
        // Move image at the bottom of the table of content
        jQuery('.article-index').append('<div class="uk-margin-small uk-width-expand"><h3 class="co-branded-title">Partners</h3><div class="co-branded-images uk-child-width-1-2" uk-grid></div></div>');
        jQuery('.article .article-container .article__content').removeClass('no-toc');
        jQuery('.article .article-container .related-links').removeClass('related-links-large');
    }

    jQuery.each(coBrandedImages, function( key, image ) {
        jQuery('.co-branded-images').append('<div class="co-branded-image-' + key + ' uk-height-1-1"></div>');
        jQuery(image).appendTo('.co-branded-image-' + key);
    });
};

/**
 * Toggles between the passed classes for the selected element.
 *
 * @param string selector A class or ID of the target element.
 * @param string firstClass A class to detect and switch with.
 * @param string firstClass Another class to detect and switch with.
 * @return false
*/
_toggleIconClasses = function(selector, firstClass, secondClass) {
    element = (typeof firstClass === 'string') ? jQuery(selector) : undefined;
    firstClass = (typeof firstClass === 'string') ?  firstClass : undefined;
    secondClass = (typeof secondClass === 'string') ?  secondClass : undefined;

    if (element && firstClass && secondClass) {
        if (element.hasClass(firstClass)) {
            element.removeClass(firstClass).addClass(secondClass);
        } else if (element.hasClass(secondClass)) {
            element.removeClass(secondClass).addClass(firstClass);
        }
    }

    return false;
};

/**
 * Creates a Swiper instance per carousel
 * targets '.swiper-container' class elements,
 * except for #module-featured-events-slider,
 * which is handled with _handleEventsPageCarousel()
*/
_handlePageCarousel = function() {
    var container = jQuery('.swiper-container:not("#module-featured-events-slider")');
    jQuery.each(container, function (index, swiper) {
        var params = {
            slidesPerView: 3,
            freeMode: true,
            loop: true,
            spaceBetween: 20,
            autoHeight: true
        };
        var swiperId = '#' + jQuery(swiper).attr('id');
        if ( jQuery(swiper).find(".swiper-slide").length < 3 ) {
            params.loop = false;
        }
        if ( jQuery(swiper).find(".swiper-slide.two-slides").length) {
            params.slidesPerView = 2;
        }
        _createNewSwiperInstance(swiperId, params);
    });
};

/**
 * Creates Swiper instances for single certification page.
*/
_handleSingleCertificationPageCarousel = function() {
    var params =
        {
            slidesPerView: 1,
            loop: true,
            autoHeight: true,
            effect: 'fade',
            autoplay: {
                delay: 5000,
            },
            fadeEffect: {
                crossFade: true
            }
        }
    _createNewSwiperInstance('.aside-white-box__logos-carousel', params);

    params.autoplay.delay = 7000;
    _createNewSwiperInstance('.aside-white-box__testimonials-carousel', params);
};

/**
 * Handles special links for single certification page.
*/
_handleSingleCertificationPageLinks = function() {
    var
        recertificationLink             = jQuery('.single-certification__recertification a').attr('href'),
        applyNowLink                    = jQuery('.single-certification__apply-now a').data('link'),
        recertificationApplyNowButton   = jQuery('.recertification .single-certification__apply-now a');

    if (recertificationLink) {
        jQuery('.single-certification__recertification')
            .on('click touchend', function(e) {
                window.location.href = recertificationLink;
            });
    }

    if (applyNowLink) {
        jQuery('.single-certification__apply-now')
            .on('click touchend', function(e) {
                window.location.href = applyNowLink;
            });

        jQuery('.single-certification__apply-now-mobile')
            .on('click touchend', function(e) {
                window.location.href = applyNowLink;
            });
    }

    if (recertificationApplyNowButton) {
        jQuery(recertificationApplyNowButton)
            .on('click touchend', ;
    }
};

/**
 * Creates a Swiper instance for event page.
 */
_handleEventsPageCarousel = function() {

    var minWidth = 960; // Mobile breakpoint.

    function initSwiper() {

        var vw = jQuery(window).width();

        if (vw > minWidth && eventsPageSwiper === undefined) {
            var params = {
                slidesPerView: 2,
                freeMode: true,
                loop: false,
                spaceBetween: 20,
                autoHeight: true
            };
            eventsPageSwiper = _createNewSwiperInstance('#module-featured-events-slider', params);
        } else if(vw <= minWidth && eventsPageSwiper !== undefined) {
            eventsPageSwiper.destroy();
            eventsPageSwiper = undefined;
        }
    }

    initSwiper();

    jQuery(window).on('resize', ;
};

/**
 * Creates a new Swiper instance.
 *
 * @param string selector A class or ID of the container element.
 * @param params JSON obj Swiper parameters.
 * Full list: https://idangero.us/swiper/api/#parameters
 * @return Swiper instance
*/
_createNewSwiperInstance = 

_initContentTabs = function(id, autoScroll) {

    if (typeof autoScroll == 'undefined') {
        autoScroll = false;
    }

    var wrapper = jQuery(id);
    var tabContainer = jQuery('ul', wrapper);

    if (wrapper.width() < tabContainer.width()) {

        if (autoScroll) {
            var li = jQuery('li.active', tabContainer);
            if (li.length) {
                var pos = li.position().left;
                setTimeout( 100);
            }
        }

        _initTabs(id);

    } else {

        wrapper.removeClass('show-arrows');
    }
};

_initSearchTopicFilters = function (searchTopicFilter) {
    jQuery('a.filter-option', searchTopicFilter).click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        var range = jQuery(this).attr('data-range');
        jQuery('a.filter-option', searchTopicFilter).removeClass('active');
        jQuery(this).addClass('active');
        searchTopicFilter.attr('class', '');
        searchTopicFilter.addClass('topic-' + range);
    });
};

_initHomePageTileSidebarResize = function() {

    /**
     * Figure out what height the sidebar should be, ideally.
     * @type {[type]}
     */
    var idealHeight = jQuery('.tile-main-column').height();
    // console.log('ideal height:', idealHeight);
    /**
     * Get the tops of each element.
     */
    var tops = jQuery('.upcoming-sidebar ul li').map(function() { 
        return $(this).position().top + $(this).outerHeight();
    });

    /**
     * For each top, whichever element appears deeper than the ideal height,
     * use the top of the element before it as the correct height.
     */
    var correctHeight = 0;
    tops.each(function(index, thisHeight) {
        // console.log(index, thisHeight);
        if (thisHeight > idealHeight && correctHeight == 0) {
            correctHeight = tops[index - 1];
        }
    });

    // if we have a "correctHeight", we found an element that is deeper than the ideal height, 
    // so correct the height.  (If we don't have a correctHeight, it means
    // all the elements are within the idealheight, so no need to do anything.)
    var adjustment = 23;
    if (correctHeight > 0) {
        jQuery('.upcoming-sidebar ul').css('height', (correctHeight - jQuery('.upcoming-sidebar h3').outerHeight() - adjustment) + 'px');
    } else {
        jQuery('.upcoming-sidebar ul').css('height', (idealHeight - jQuery('.upcoming-sidebar h3').outerHeight() - adjustment) + 'px');
    }

};

_initTabs = function(id) {
    var wrapper = jQuery(id);
    var hasArrows = (jQuery('.arrow', wrapper).length > 0);

    wrapper.addClass('show-arrows');

    if (!hasArrows) {

        var leftArrow = jQuery('<div class="arrow left-arrow">');
        leftArrow.click(;
        wrapper.append(leftArrow);

        var rightArrow = jQuery('<div class="arrow right-arrow">');
        rightArrow.click(;
        wrapper.append(rightArrow);
    }
};


/**
 * Private method to handle the necessary before performing a new search query.
 * This is intended to be used outside the search page.
*/
_handleModuleFilters = function() {
    var params = [];
    params.pages = ['category', 'page-template-page-news-php'];
    topicFromPage = _getTopicNameFromClasses();
    params.topics = (topicFromPage) ? [topicFromPage] : (getUrlVars().topic ? getUrlVars().topic : []);
    _handleModuleFiltersParams(params);
};

/**
 * Performs a new search query based on custom parameters.
 * @param array params A collection of mixed values to define query details.
 * @param array params.pages A collection of strings with the pages names where this will be applied.
 * @param array params.topics A collection of strings with topics names.
*/
_handleModuleFiltersParams = function(params) {
    if (params.pages && params.pages.length && params.topics.length) {
        for (var i = 0; i < params.pages.length; i++) {
            if (jQuery('body').hasClass(params.pages[i])) {
                IAB._handleSearch.currently_selected.topic  = params.topics;
                //Selects the topics from the dropdown list.
                IAB._handleSearch._handleSelectedFilters();

                //Passes the current topics in order to perform the query.
                IAB._handleSearch.params.topic              = params.topics;
                var data = IAB._handleSearch.params,
                    complete = IAB._handleSearch._completeCallback;

                //Performs the actual search.
                IAB._handleSearch.performSearchAndUpdateParams(data, complete);
            }
        }
    }
};

/**
 * Gets the topic name for the current page.
 *
 * @return string The topic name.
*/
_getTopicNameFromClasses = function() {
    var
        bodyClasses = jQuery('body').attr('class'),
        moduleClasses = jQuery('.module-browse').attr('class')
        classes = bodyClasses + ' ' + moduleClasses,
        topic = '',
        classes = ((typeof classes !== 'undefined') && classes) ? classes.split(' ') : '',
        substring = 'category-';

    if (classes) {
        var
            filteredClasses =
                classes.filter(;
        for (var i = 0; i < classes.length; i++) {
            if (classes[i].indexOf(substring) !== -1) {
                var topic = classes[i].replace(substring,'');
                break;
            }
        }
    }

    return topic;
};

/**
 * Private method to handle the necessary before render a filterable content module
 */
_initFilterableContent = function() {
    var search_field = jQuery('.module-filterable-content #s');
    if (search_field.length) {
        search_field.attr('placeholder', 'Search within this topic');
        var data = IAB._handleSearch.params,
            complete = IAB._handleSearch._completeCallback,
            topics = IAB.dropdownSearchBrowse._getParameterByName('topic'), // topics from url
            search_section = jQuery('.module-filterable-content'),
            update_currently_selected = false; // flag

        if (topics) {
            IAB._handleSearch.currently_selected.topic = topics.split(','); // can be multiple comma-separated
            // update param
            IAB._handleSearch.params.topic = IAB._handleSearch.currently_selected.topic;
            update_currently_selected = true;
        }

        if (search_section.length) {
            var type_active = search_section.find('.post-type-filter li.active a');
            if (type_active.length) {
                jQuery(type_active).each(function(){
                    var type = jQuery(this);
                    IAB._handleSearch.currently_selected.post_type.push(type.data("value"));
                });
                IAB._handleSearch.params.post_type = IAB._handleSearch.currently_selected.post_type;
                update_currently_selected = true;
            }
        }

        if (update_currently_selected) {
            // update currently_selected
            IAB._handleSearch._handleSelectedFilters();
        }

        // perform search of recent content
        IAB._handleSearch.performSearchAndUpdateParams(data, complete);
    }
};

/**
 * Handles the logic to display a file attachment at the sidebar.
 */
_handleFileAttachment = function() {
    var
        el_selector          = '.pdf_download_link',
        side_el_selector     = '.module-sharing-actions__action',
        el                   = jQuery(el_selector),
        side_el              = jQuery(side_el_selector);
    if (el.length > 1) {
        var first_el = el[0];
        el = [];
        el[0] = first_el;
    }
    if (el.length) {
        var
            curURL      = el[0].getAttribute('href'),
            curTitle    = el[0].textContent;

            jQuery('.module--news')
                .before(
                    '<div class="pdf-download-button uk-margin-small-top" uk-sticky>' +
                    '<a class="primary-button-red uk-display-block uk-text-center uk-width-1-5@m uk-width-1-1" href="'
                    + curURL +
                    '" target="_blank">Download PDF</span></a></div>'
                );

            if (side_el.length) {
                jQuery(side_el_selector).attr('href', curURL);
                jQuery(side_el_selector).attr('title', curTitle);
                jQuery(side_el_selector).removeAttr('hidden');
                jQuery(el_selector).parent().remove();
            }
    }
};

/**
 * Handles logic for displaying a marketing form at the sidebar.
 * For this to trigger, there must be a [marketo] shortcode with a button attribute on the page.
 * Returns false if no marketo shortcode is found.
 */
_handleMarketoAttachment = function() {

    var el_selector          = '.btn-launch-marketo-form';
    var el                   = jQuery(el_selector).not('header ' + el_selector);

    if (el.length > 1) {
        var first_el = el[0];
        el = [];
        el[0] = first_el;
    }

    if (el.length) {
        var curID       = $(el[0]).data('marketo-form-id'),
            curTitle    = el[0].textContent;

            jQuery('.module--news')
                .before(
                    '<div class="pdf-download-button uk-margin-small-top" uk-sticky>' +
                    '<a class="primary-button-red btn-launch-marketo-form uk-display-block uk-text-center uk-width-1-5@m uk-width-1-1" ' + 
                    'href="javascript:;" data-marketo-form-id="' + curID + '">' + curTitle + '</span></a></div>'
                );

        return true;
    }
    return false;
};

_handleAgendaToggle = function() {
    jQuery('.agenda-expand-toggle, .agenda-read-more-button').on('click', function(e){
        e.preventDefault();

        // toggle 'collapsed' class
        var link = jQuery(this);
        var parent_agenda = link.data('parent');
        jQuery('#'+parent_agenda).toggleClass('collapsed');

        var speakerAvatar   = jQuery(this).prev().find('.speaker-avatar'),
            speakerDetails  = jQuery(this).prev().find('.speaker-details');

        jQuery(this).prev().find('.speaker-avatar').toggleClass('uk-width-1-6@m');
        jQuery(this).prev().find('.speaker-details').toggleClass('uk-width-5-6@m');
    });
};

/**
 * show agenda arrows if an agenda
 * has speakers and/or truncated text
 */
_showAgendaArrows = function () {
    var agendas = jQuery('.agenda-item');
    if (agendas && agendas.length) {
        jQuery(agendas).each(function(){
            var agenda = jQuery(this);
            var speakers = agenda.find('.agenda-speakers');
            var truncated_text = agenda.find('.has-truncated-text');
            var subsessions = agenda.find('.agenda-subsessions');
            // has speakers and/or truncated text, and/or subsessions
            if ((speakers && speakers.length) || (truncated_text && truncated_text.length) || (subsessions && subsessions.length)) {
                agenda.find('.agenda-expand-toggle').removeAttr('hidden');
            }
        });
    }
};

/**
 * Private method to handle elements visibility on News template
 */
_handleNewsElementsVisibility = 
_handleCertificationOverview = function () {
    jQuery('.module-certification .overview-index ul a').on('click', function(){
        jQuery('.module-certification .overview-index ul a').removeClass('module-paragraph-title');
        jQuery(this).addClass('module-paragraph-title');
    });
};

_handleOurStoryTabs = 

/**
 * Private method to add the necessary data in order
 * to perform a domain check in Get Involved page.
 */
_handleMembersDomains = function () {
    var salesForceMembersScripts = new Array();
    salesForceMembersScripts[0] = 'https://salesforce.iab.com/accounts/index/type:All';

    if (jQuery('.module-get-involved__join-iab-form-submit-container').length) {
      _scriptLoader(salesForceMembersScripts)
          .then(function () {
              jQuery('.module-get-involved__join-iab-form-submit-container').removeAttr('hidden');
              _checkMembersDomain();
          });
    }

};

/**
 * Private method to handle visual details in Get Involved page.
 */
_handleGetInvolvedPageDetails = function () {
    _replaceFormRequiredCharacter();
    jQuery('.module-subscribe-box .primary-button-black')
        .on("click touchend", function(e) {
            if (jQuery('#module-get-involved__request-quote-container-id').is(':visible')) {
                jQuery(this).closest('.expandable').removeClass('no-bottom-border');
            } else {
                jQuery(this).closest('.expandable').addClass('no-bottom-border');
            }
        });

    // Set margin top based on the overview section height
    jQuery('.module-get-involved__join-iab').css('margin-top', "-" + jQuery(".module-page__overview .overview-index").outerHeight() + "px");
};

/**
 * Private method to trigger domain comparison once the data is completely loaded.
 */
_checkMembersDomain = function () {
    jQuery('.module-get-involved__join-iab-form-container input').keypress(function(e){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            e.preventDefault();
            _domainsComparison(e);
        }
    });
    jQuery('.module-get-involved__join-iab-form-submit')
        .on("click touchend", ;
};

/**
 * Private method to trigger discount code for shop on checking membership.
 */
_applyIABMemberDiscount = function(fullEmail) {

    /* global jQuery, wc_add_to_cart_params */
    if ( typeof wc_add_to_cart_params === 'undefined' ) {
        return false;
    }

    // Create Post Data
    var data = {iab_member_email: fullEmail};
   
    // Ajax action
    $.post( 
        wc_add_to_cart_params.wc_ajax_url.toString().replace( '%%endpoint%%', 'apply_iab_member_discount' ), 
        data, 
        function() {},
        'json'
    ).always(function() {
        // refresh the cart
        $('[name=update_cart]').prop('disabled', false).trigger('click');
    });

};

/**
 * Private method to remove discount code.
 */
_removeIABMemberDiscount = function() {

    /* global jQuery, wc_add_to_cart_params */
    if ( typeof wc_add_to_cart_params === 'undefined' ) {
        return false;
    }

    // Ajax action
    $.post( 
        wc_add_to_cart_params.wc_ajax_url.toString().replace( '%%endpoint%%', 'remove_iab_member_discount' ), 
        {}, 
        function() {},
        'json'
    ).always(;

};

/**
 * Public method to attach event handler to iab member discount remove button.
 */
initHandleMemberDiscountRemoval = 

/**
 * Replaces the * to · for each required field label.
 */
_replaceFormRequiredCharacter = function() {
    jQuery('.gfield_label .gfield_required').text('·');
};

/**
 * Private method to load a chain of scripts.
 */
_scriptLoader = function (scripts) {
    var chain = $.Deferred();
    chain.resolve();
    scripts.forEach(function (script, index, array) {
        chain = chain.then(function () {
            return $.getScript(script});
        });
    });
    chain.the});
    return chain.promise();
};

/**
 * Private method to perform a comparison from my email against a list of members domains.
 */
_domainsComparison = function (e) {
    jQuery('.module-get-involved__join-iab-form-found').attr('hidden', true);
    jQuery('.module-get-involved__join-iab-form-not-found').attr('hidden', true);
    var
        fullEmail = jQuery('.module-get-involved__join-iab-form-container input').val();
        myDomain = (fullEmail) ? fullEmail.substring(fullEmail.lastIndexOf("@") +1) : '',
        filteredMembersDomains = [],
        found = false;

    if ((membersDomains.length == 0)) {
        jQuery('#iab_sf').find('a').each(function() {
            // if this is the secondary_domain, 
            // Don't extract the subdomain.  Just extract the hostname.
            if ($(this).hasClass('hidden')) {
                membersDomains.push(extractHostname(jQuery(this).attr('href')));
            } else {
                membersDomains.push(extractRootDomain(jQuery(this).attr('href')));
            }
            
        });
    }

    filteredMembersDomains = (membersDomains.length > 0) ? unique(membersDomains) : [];

    if (filteredMembersDomains.length > 0 && myDomain) {
        jQuery.each(filteredMembersDomains});
    }

    if (found) {
        jQuery('.module-get-involved__join-iab-form-your-domain').text(myDomain);
        jQuery('.module-get-involved__join-iab-form-found').removeAttr('hidden');
        _applyIABMemberDiscount(fullEmail);
    } else {
        jQuery('.module-get-involved__join-iab-form-your-domain').text(myDomain);
        jQuery('.module-get-involved__join-iab-form-not-found').removeAttr('hidden');
    }
};

_handleTocScroll = function () {

    var isTaxononmyPage };

    var offCanvasContent            = jQuery('.article-index ul').clone(),
        elementWatcher              = scrollMonitor.create(jQuery('.article-index ul')),
        elementContentWatcher       = scrollMonitor.create(jQuery((isTaxononmyPage() ? 'section.main' : '.article__content')))
        mobileElementWatcher        = scrollMonitor.create(jQuery('.article__table-contents-header-mobile-action'), {bottom: 35}),
        mobileElementContentWatcher = scrollMonitor.create(jQuery('#article-index-id'));

    jQuery('.article')
        .append(
            '<div class="article-index__scroll-handler-container uk-hidden">' +
            '<div class="article-index__scroll-handler">' +
            '<a href="#article-index__offcanvas" uk-toggle><i class="fa fa-list-ol" aria-hidden="true"></i></a>' +
            '</div></div>'
        );
    jQuery('.article-index__scroll-handler-container')
        .before(
            '<div class="article-index__offcanvas" id="article-index__offcanvas" uk-offcanvas>' +
            '<div class="uk-offcanvas-bar">' +
            '<h3>Table of Contents</h3>' +
            '<button class="uk-offcanvas-close" type="button" uk-close></button>' +
            '</div>' +
            '</div>'
        );

    jQuery('.uk-offcanvas-bar').append(offCanvasContent).addClass('scrollbar');
    jQuery('.uk-offcanvas-bar ul').addClass('uk-list').addClass('uk-margin-remove');

    if (isMobile.any) {
        if ((jQuery('.toc').length > 0)) {
            const gObserver = new IntersectionObserver(onIntersection,
                {
                    rootMargin: '100px',
                    threshold: 0
                }
            );
            var mobileWatchedElements = [];
            mobileWatchedElements.push(document.querySelectorAll('.article__table-contents-header-container-mobile'));
            for (var i = 0; i < mobileWatchedElements.length; i++) {
                if (mobileWatchedElements[i].length) {
                    gObserver.observe(mobileWatchedElements[i][0]);
                }
            }
        }
    }

    if (jQuery('.toc').length > 0) {
        if (isMobile.any) {
            elementContentWatcher.partiallyExitViewport(function() {
                jQuery('.article-index__scroll-handler-container').fadeOut('fast');
                if (jQuery('.pdf-download-button').length > 0) {
                    jQuery('.pdf-download-button').fadeOut('fast');
                }
            });
            elementContentWatcher.exitViewport(function() {
                jQuery('.article-index__scroll-handler-container').addClass('uk-hidden');
            });
            if (!elementContentWatcher.isInViewport) {
                jQuery('.article-index__scroll-handler-container').addClass('uk-hidden');
            }
            elementContentWatcher.fullyEnterViewport(function() {
                jQuery('.article-index__scroll-handler-container').removeClass('uk-hidden').fadeIn('fast');
                if (jQuery('.pdf-download-button').length > 0) {
                    jQuery('.pdf-download-button').fadeIn('fast');
                }
            });
        } else {
            if(elementWatcher.isInViewport) {
                jQuery('.article-index__scroll-handler-container').fadeIn('fast');
            }
            elementWatcher.enterViewpor});
            elementContentWatcher.enterViewport(function() {
                if (!elementWatcher.isInViewport) {
                    jQuery('.article-index__scroll-handler-container').fadeIn('fast').removeClass('uk-hidden');
                    if (jQuery('.pdf-download-button').length > 0) {
                        jQuery('.pdf-download-button').fadeIn('fast');
                    }
                }
            });
            elementWatcher.exitViewpor});
            elementContentWatcher.exitViewport(function() {
                jQuery('.article-index__scroll-handler-container').fadeOut('fast');
                if (jQuery('.pdf-download-button').length > 0) {
                    jQuery('.pdf-download-button').fadeOut('fast');
                }
            });
        }
    }

    jQuery(document).on('click', '.article-index__offcanvas .uk-list li'});
};

_handleEventsSharingDropdown = function () {
    var dropdown = jQuery('.module-sharing-actions').find('.uk-dropdown');
    if (dropdown && dropdown.length) {
        // existing dropdown attributes
        var attr = jQuery(dropdown).attr('uk-dropdown');
        // append boundary attribute
        jQuery(dropdown).attr('uk-dropdown', 'boundary: .headline-and-sharing; ' + attr);
    }
};


_handleEventSpeakersBio = function () {
    if (jQuery('body').hasClass('single-iab_event') || jQuery('body').hasClass('single-iab_video')) {
        jQuery('.module-featured-members__bio-open').removeAttr('hidden');

        jQuery('.module-featured-members__bio-times').on('click', function (e) {
            e.preventDefault();
            if (isMobile.any) {
                jQuery('html, body').removeClass('uk-overflow-hidden');
            }
            _closeSpeakersModal(this);
        });

        jQuery('.module-featured-members__bio-close').on('click', function (e) {
            e.preventDefault();
            if (isMobile.any) {
                jQuery('html, body').removeClass('uk-overflow-hidden');
            }
            _closeSpeakersModal(this);
        });

        jQuery('.module-featured-members__bio-open').on('click', function (e) {
            e.preventDefault();
            jQuery('body').addClass('iab-custom-modal-open');
            if (isMobile.any) {
                jQuery('html, body').addClass('uk-overflow-hidden');
            }
            jQuery(this)
                .closest('.module-featured-members__container')
                .addClass('active');
            jQuery(this)
                .closest('.member-card')
                .next()
                .fadeIn();

            jQuery('.module-featured-members__container').each(function() {
                if (!jQuery(this).hasClass('active')) {
                    jQuery(this)
                        .closest('.module-featured-members__container')
                        .find('.module-featured-members__overlay-dark')
                        .fadeIn();
                }
            });

            if(jQuery('body').hasClass('single-iab_event')) {
                jQuery(document).on('click', function (e) {
                    e.preventDefault();
                    if (jQuery(e.target).parents('.module-featured-members__container').length == 0) {
                        _closeSpeakersModal('', true);
                    } else if (jQuery(e.target).parents('.module-featured-members__container').hasClass('active') == false) {
                        _closeSpeakersModal('', true);
                    }
                });
            }
        });
    }
};

_closeSpeakersModal = function (el, extClick) {
    var extClick = (extClick) ? extClick : false;
    jQuery('body').removeClass('iab-custom-modal-open');
    if (el.length && extClick) {
        jQuery(el).closest('.module-featured-members__overlay').fadeOut();
        jQuery(el).closest('.active').removeClass('active');
        jQuery('.module-featured-members__overlay-dark').hide();
    } else {
        var activeContainer = jQuery('.module-featured-members__container.active');
        jQuery(activeContainer).find('.module-featured-members__overlay').fadeOut();
        jQuery(activeContainer).removeClass('active');
        jQuery('.module-featured-members__overlay-dark').hide();
    }
};

_handleSessionSponsors = function (isEvent) {
    if (isEvent) {
        jQuery('.agenda-item').eac});

        jQuery('.title-description-column').each(function() {
            var
                nonMobileSponsorsContainer = jQuery(this).closest('.agenda-item').find('.agenda-items-sponsors-container'),
                cloned = nonMobileSponsorsContainer.clone();
                nonMobileSponsorsContainer.remove();
            if (cloned.length) {
                jQuery(this).find('.agenda-description-text').append(cloned);
            }
        });
    }
};

/**
 * Utility method to get the host name from a URL.
 *}

/**
 * Utility method to get the root domain from a URL.
 *}

/**
 * Utility method to remove duplicated elements from an array.
 */
function unique(list) {
    var result = [];
    $.each(list, function(i, e) {
        if ($.inArray(e, result) == -1) {
          result.push(e);
        };
    });
    return result;
}

/**
 * Callback method. Handles observer entries.
 *};

/**
 * Handles entry intersection status.
 */
function manageIntersection(entry) {
    var element = entry.target;
    if (isIntersecting(entry)) {
        jQuery('.article-index__scroll-handler-container').fadeOut('fast').addClass('uk-hidden');
    } else {
        jQuery('.article-index__scroll-handler-container').fadeIn('fast');
    }
};

/**
 * Utility method to detect if an entry is on an intersection.
 *}

/**
 * Utility to get querystring.
 *}

/**
 * back to top button
 */
function _handleBackToTopListener() {
    if($('.btn-scroll-top').length > 0) {
        var scrollTimer = null;
        $(window).scrol});

      }

        $('.btn-scroll-top').on('click'});
    }
}