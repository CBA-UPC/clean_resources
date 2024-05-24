<HTML><HEAD>
<TITLE>Access Denied</TITLE>
</HEAD><BODY>
<H1>Access Denied</H1>
 
You don't have permission to access "http&#58;&#47;&#47;www&#46;disneyworld&#46;eu&#47;akam&#47;13&#47;57574891&#47;" on this server.<P>
Reference&#32;&#35;18&#46;958f2117&#46;1705437176&#46;118ea44
</BODY>
</HTML>

 * stepAmount: amount of items to slide per step
 * visibleItemAmount: amount of items that are visible
 * duration: set to 0 for no sliding animation
 * loop: carousel goes back to the first item if set to true
 *
 * @author Kamesh Balasubramanian
 *
 */

(function($){

    // Carousel class
    var Carousel = function(element, options)
    {
        var elem = $(element),
            obj = this,
            emptyFunction = function() {},
            current = 0,
            listCount = $(options.listContainer + ' ul li').size(),
            containerWidth = options.itemWidth * listCount,
            divWidth = options.itemWidth * options.visibleItemAmount,
            settings = $.extend({
                }, options || {});


        $(options.listContainer + ' ul').css({'width' : containerWidth + 'px', 'left' : -(current * options.itemWidth), 'position' : 'absolute'});

        $(options.listContainer).css({'width': divWidth + 'px', 'height' : options.containerHeight + 'px', 'visibility' : 'visibile', 'overflow' : 'hidden', 'position' : 'relative'});

        $(options.previousArrow).click(function() {
            if(current - options.stepAmount < 0 || current - options.stepAmount > listCount - options.visibleItemAmount) {
                if (options.loop == true) {
                    current = listCount - 1;
                    $(options.listContainer + ' ul').animate({left: -(options.itemWidth * current)}, options.duration, null);
                }
                return;
            }
            else {
                current = current - options.stepAmount;
                $(options.listContainer + ' ul').animate({left: -(options.itemWidth * current)}, options.duration, null);
            }
        });

        $(options.nextArrow).click(function() {
            if(current + options.stepAmount < 0 || current + options.stepAmount > listCount - options.visibleItemAmount) {
                if (options.loop == true) {
                    current = 0;
                    $(options.listContainer + ' ul').animate({left: -(options.itemWidth * current)}, options.duration, null);
                }
                return;
            }
            else {
                current = current + options.stepAmount;
                $(options.listContainer + ' ul').animate({left: -(options.itemWidth * current)}, options.duration, null);
            }
        });

    };

    // Register jQuery plugin
    $.fn.carousel = function(options)
    {
        return this.each(function()
        {
            var element = $(this);
            var carousel = new Carousel(element, options);
        });
    };

})(jQuery);
/**
 * Menu plugin for jQuery
 *
 * Converts an element (usually an unordered list) into a fancy animated menu.
 * The accepted animation types include "show" (default), "fade" and "slide".
 * The durations can be adjusted independently, and delays can be adjusted
 * independently as well.
 *
 * @author Hector Virgen
 */
var selectOpened = false;
var optionSelected = false;
function setQQNavBackground() {
    $('.topnav-item-priceyourvacation-grouping').css('background', "url('/static/images/topnav_bk_hover.png') repeat-x").css('color', '#01468B');
    $('.topnav-item-priceyourvacation-grouping span').css('background', "url('/static/images/topnav_arrow_hover.png') no-repeat");
}
function resetQQNavBackground() {
    $('.topnav-item-priceyourvacation-grouping').css('background', '').css('color', '');
    $('.topnav-item-priceyourvacation-grouping span').css('background', '');
}
(function($){
    // Menu class
    var Menu = function(element, options)
    {
        var elem = $(element),
            obj = this,
            emptyFunction = function() {},
            settings = $.extend({
                children:       'li',
                subMenu:        'ul',
                type:           'show',
                duration:       500,
                delay:          [10, 200],
                beforeShow:     emptyFunction,
                afterShow:      emptyFunction,
                beforeHide:     emptyFunction,
                afterHide:      emptyFunction,
                onHoverIn:      emptyFunction,
                onHoverOut:     emptyFunction
            }, options || {}),
            animations = {
                show:           ['show', 'hide'],
                fade:           ['fadeIn', 'fadeOut'],
                slide:          ['slideDown', 'slideUp']
            },
            defaultFrom = elem.children(settings.children).children(settings.subMenu),
            defaultOpacity = defaultFrom.css('opacity'),
            defaultHeight = defaultFrom.css('height'),
            defaultWidth = defaultFrom.css('width'),
            showDuration = 0,
            hideDuration = 0,
            showDelay = 0,
            hideDelay = 0;
           if(defaultOpacity==1) defaultOpacity=""; // to fix ie8 issue
        // Determine individual show/hide durations
        switch (true) {
            // normal int
            case (settings.duration >= 0):
                showDuration = settings.duration;
                hideDuration = settings.duration;
                break;

            // array [xxx, yyy]
            case ($.isArray(settings.duration)):
                showDuration = settings.duration[0];
                hideDuration = settings.duration[1];
                break;

            // object {show: xxx, hide: yyy}
            case ($.isObject(settings.duration)):
                showDuration = settings.duration['show'];
                hideDuration = settings.duration['hide'];
                break;
        }

        // Determine individual show/hide delays
        switch (true) {
            // normal int
            case (settings.delay >= 0):
                showDelay = settings.delay;
                hideDelay = settings.delay;
                break;

            // array [xxx, yyy]
            case ($.isArray(settings.delay)):
                showDelay = settings.delay[0];
                hideDelay = settings.delay[1];
                break;

            // object {show: xxx, hide: yyy}
            case ($.isObject(settings.delay)):
                showDelay = settings.delay['show'];
                hideDelay = settings.delay['hide'];
                break;
        }

        var getShowMethod = function()
        {
            return animations[settings.type][0];
        };

        var getHideMethod = function()
        {
            return animations[settings.type][1];
        };

        var onHoverChildIn = function(event)
        {
            if (selectOpened || $('#quick-quote-container').css('display') != 'none') {
                return;
            }

            var section = $(this),
                showMethod = getShowMethod(),
                subMenu = section.children(settings.subMenu);

            if (false === settings.onHoverIn.call(subMenu)) {
                return;
            }

            elem.children(settings.children).children(settings.subMenu).each(function()
            {
                var otherSubMenu = $(this);
                if (true === otherSubMenu.data('menuIsVisible') || true === otherSubMenu.data('menuIsHiding')) {
                    return;
                }
                otherSubMenu.stop().hide(0).css({
                    opacity:    defaultOpacity,
                    height:     defaultHeight
                    //width:      defaultWidth
                });
            });

            if (subMenu.data('menuHideTimeout')) {
                window.clearTimeout(subMenu.data('menuHideTimeout'));
            }

            if (true === subMenu.data('menuIsHiding')) {
                // Menu is in the process of being hidden, but since we want to
                // show it, just reset it to its "visible" state.
                subMenu.stop().css({
                    opacity:    defaultOpacity,
                    height:     defaultHeight
                    //width:      defaultWidth
                });
                subMenu.data('menuIsHiding', false);
                subMenu.data('menuIsVisible', true);
                return;
            }

            // Set up timer to show subMenu
            subMenu.data('menuShowTimeout', window.setTimeout(function()
            {
                if (false === settings.beforeShow.call(subMenu)) {
                    return;
                }
                subMenu[showMethod](showDuration, function()
                {
                    subMenu.data('menuIsVisible', true);
                    settings.afterShow.call(subMenu);
                });
            }, showDelay));
        };

        var onHoverChildOut = function(event)
        {
            if (optionSelected || selectOpened || $('.DisneyCal :visible').length > 0) {
                setQQNavBackground();
                return;
            }

            $(".DisneyCal").css("display", "none");
            resetQQNavBackground();

            var hideMethod = getHideMethod();
            var subMenu = $(this).children(settings.subMenu);

            if (false === settings.onHoverOut.call(subMenu)) {
                return;
            }

            if (subMenu.data('menuShowTimeout')) {
                window.clearTimeout(subMenu.data('menuShowTimeout'));
            }

            subMenu.data('menuHideTimeout', window.setTimeout(function()
            {
                if (false === settings.beforeHide.call(subMenu)) {
                    return;
                }
                if (true === subMenu.data('menuIsHiding')) {
                    return;
                }
                subMenu.data('menuIsHiding', true);
                subMenu[hideMethod](hideDuration, function()
                {
                    subMenu.data('menuIsVisible', false);
                    subMenu.data('menuIsHiding', false);
                    subMenu.hide(0).css({
                        opacity:    defaultOpacity,
                        height:     defaultHeight
                        //width:      defaultWidth
                    });
                    settings.afterHide.call(subMenu);
                });

            }, hideDelay));
        };

        // Bind hover event
        elem.children(settings.children).hover(onHoverChildIn, onHoverChildOut);
    };

    // Register jQuery plugin
    $.fn.menu = function(options)
    {
        return this.each(function()
        {
            var element = $(this);
            if (element.data('menu')) {
                return;
            }
            var menu = new Menu(element, options);
            element.data('menu', menu);
        });
    };
})(jQuery);

var currentClientBackground = '';

(function($) {
    if (!$('body').hasClass('home')) {
        // hide chrome, display Show control
        $('#chrome_dol').slideUp();
        $('.chrome_controls').removeClass('SN_hide').addClass('SN_show');
    }
    else {
        // display Hide control
        $('.chrome_controls').removeClass('SN_show').addClass('SN_hide');
    }

    $('.chrome_hide, .chrome_show').click(function(evt) {
        evt.preventDefault();
        var dol = $('#chrome_dol');

        if (dol.is(':visible')) {
            $('.chrome_controls')
                .removeClass('SN_hide')
                .addClass('SN_show');
        } else {
            $('.chrome_controls')
                .removeClass('SN_show')
                .addClass('SN_hide');
            $('#goc-bar a[href^="https://liveshows.disney.com"],#goc-bar a[href^="https://books.disney.com/"],#goc-bar a[href^="https://preview.disneyplus.com?cid=DTCI-desktopnav_disneyplus"]').css('display','none');
        }
        dol.slideToggle(400, function(){
            if (dol.is(':visible')) {
                $('#goc-desktop-global li:first a').focus();
            }
        });
    });

    $('ul.navigation').hover(function() {
        $('#nav-0,#nav-1,#nav-2,#nav-3').each(function(){
            if (!$('.container').hasClass('mobile')) {
                $(this).removeClass('active');
            }
        });
    });

    /*$('ul.navigation .navWrapper a').focus(function(){
        $('#nav-0,#nav-1,#nav-2,#nav-3').each(function(){
            if (!$('.container').hasClass('mobile')) {
                $(this).removeClass('active');
            }
        });

        var par = $(this).parent().parent();
        if (!par.hasClass('active')) {
            par.addClass('active');
        }
        $(this).attr('aria-expanded', 'true');
    });*/
    
    $('ul.navigation .navWrapper a').blur(function(){
        $(this).attr('aria-expanded', 'false');
    });

    $('a:not(ul.navigation .navWrapper a,ul.navigation .menuWrapper a)').focus(function(){
        $('#nav-0,#nav-1,#nav-2,#nav-3').each(function(){
            $(this).removeClass('active');
        });
    });
    
    if($(window).width() > 941) {
        //with JAWS on enter fires a click event not a keydown
        //so only allow top elements to receive the click event if the submenu is open
        $('.navigation a').click(function(e){
            if($(this).parent().hasClass('navWrapper')){
                if(!$(this).parent().siblings('.menuWrapper').is(':visible')){
                    e.preventDefault();
                }
            }
        });
        $('.navigation a').keydown(function(e){
            var $active = $(document.activeElement);
            var topNav = false;
            var innerNav = false;
            if($active.parent().hasClass('navWrapper')){
                topNav = true;
            } else if($active.parents('.menuWrapper').length){
                innerNav = true;
            }
            //enter
            if(e.keyCode == 13) {
                if($active.parent().hasClass('navWrapper')){
                    var par = $active.parents('li');

                    if (!$(par).hasClass('active')) {
                        e.preventDefault();
                        $(par).addClass('active');
                        $(par).find('.menuWrapper').show();
                        $(this).attr('aria-expanded', 'true');
                    } else {
                        $(this).attr('aria-expanded', 'false');
                    }
                }
            }
            //esc
            if(e.keyCode == 27) {
                if(innerNav){
                    closeMenu($active, false, true);
                }
            }
            //space
            if(e.keyCode == 32) {
               e.preventDefault();
                if(innerNav){
                    $active.click();
                }
                if(topNav){
                    openMenu($active, true, true);
                }
            }
            //end
            if(e.keyCode == 35) {
                e.preventDefault();
                if(innerNav){
                    $active.parent('li').siblings('li').last().find('a').focus();
                } else {
                    $active.parents('.navWrapper').parent('li').siblings('li').last().find('a').focus();
                }
            }
            //home
            if(e.keyCode == 36) {
                e.preventDefault();
                if(innerNav){
                    $first = $active.parents('.menuWrapper').children('.leftMenu').children('ul').children('li').first();
                    if($first.hasClass('headline0')){
                        $first.next('li').find('a').focus();
                    } else {
                        $first.find('a').focus();
                    }
                } else {
                    $active.parents('.navWrapper').parent('li').siblings('li').first().find('a').focus();
                }
            }
            //left arrow
            if(e.keyCode == 37) {
                if(innerNav){
                    focusPrev($active, false);
                } else {
                    focusPrev($active, true);
                }
            }
            //up arrow
            if(e.keyCode == 38) {
                e.preventDefault();
                if(innerNav){
                    focusUp($active, false);
                }
                if(topNav){
                    focusUp($active, true);
                }   
            }
            //right arrow
            if(e.keyCode == 39) {
                if(innerNav){
                    focusNext($active, false);
                } else {
                    focusNext($active, true);
                }
            }
            //down arrow
            if(e.keyCode == 40) {
                e.preventDefault();
                 if(innerNav){
                    focusDown($active, false);
                }
                if(topNav){
                    focusDown($active, true);
                }
            }
            //tab
            if(e.keyCode == 9) {
                if($active.parent('li').next().length == 0) {
                    if($active.parents('.leftMenu').length) {
                        if($active.parents('.leftMenu').next('.rightMenu').length == 0) {
                            closeMenu($active);
                        }
                    } else {
                        closeMenu($active);
                    }
                }
            }
        });
        //accessibility object context
        /*$('.navigation').attr('role','menu');
        $('.navigation .navWrapper a').attr('aria-expanded', 'false');
        $('.navigation .navWrapper a').attr('aria-haspopup', 'true');
        $('.navigation .navWrapper a').attr('role', 'menuitem');*/
            $('.leftMenu ul').each(function(){
                //$(this).attr('role', 'menu');
                var name = $(this).parent().parent().prev('.navWrapper').find('a').text();
                $(this).attr('aria-labelledby',name);
            });
        $('.menuWrapper a').attr('role','menuitem');
    
        $('#nav-icon').attr('aria-label','Open Menu');
        
        
    }

    $('.mediaEngineContainer a, #disney-parks-logo a').focus(function() {
        $('#nav-0,#nav-1,#nav-2,#nav-3').each(function(){
            $(this).removeClass('active');
        });
    });

    // start crisis message
    /*
    * By default, this container is set to 'display: none' for the no-js browser mode
    * this will display the close ('x') icon on the crisis message dialog window
    */
    $('.close-container').show();
    $('.crisis-message .close-container .close-link').click(function(){
        $('.crisis-message-container').slideUp('slow');
        $('.crisis-message-mini-container').css('display', 'block');
        $('.login-status').css('display', 'inline-block');
        $('.welcome').css('display', 'inline-block');
        $('.welcome').css('margin-left', '25px');
    });

    $('.crisis-message-mini-container .open-link').click(function(){
        $('.crisis-message-container').slideDown('slow');
        $('.crisis-message-mini-container').css('display', 'none');
        $('.welcome').css('margin-left', '0px');
    });
    //end crisis message

    $('#nav-0').hover( function() { $("#nav-0 .nav-arrow").removeClass("nav-arrow").addClass("nav-arrow-hover"); }, function() { $("#nav-0 .nav-arrow-hover").removeClass("nav-arrow-hover").addClass("nav-arrow");});
    $('#nav-1').hover( function() { $("#nav-1 .nav-arrow").removeClass("nav-arrow").addClass("nav-arrow-hover"); }, function() { $("#nav-1 .nav-arrow-hover").removeClass("nav-arrow-hover").addClass("nav-arrow");});
    $('#nav-2').hover( function() { $("#nav-2 .nav-arrow").removeClass("nav-arrow").addClass("nav-arrow-hover"); }, function() { $("#nav-2 .nav-arrow-hover").removeClass("nav-arrow-hover").addClass("nav-arrow");});
    $('#nav-3').hover( function() { $("#nav-3 .nav-arrow").removeClass("nav-arrow").addClass("nav-arrow-hover"); }, function() { $("#nav-3 .nav-arrow-hover").removeClass("nav-arrow-hover").addClass("nav-arrow");});

    /** Navigation Menu **/
    // Enable fading of navigation menu.
    $('ul.navigation').menu({
        type:            'fade',
        delay:           [10, 100],
        duration:        [200, 300]
    });

    // Enable accordian-like sidebar behavior for collapsible sections.
    $('ul.sidebar').menu({
        subMenu:        'div.collapsible',
        type:           'slide',
        delay:          250,
        duration:       350,
        onHoverIn:      function()
        {
            var subMenu = $(this);
            if (!subMenu.length || subMenu.is(':visible')) {
                return false;
            }
        },
        beforeHide:     function()
        {
            return false;
        },
        beforeShow:     function()
        {
            $('ul.sidebar div.collapsible:visible').slideUp(350);
        }
    }).find('div.collapsible').not('.quickquote').hide(0);
    $('ul.sidebar .quickquote').data('menuIsVisible', true);

    // Enable promo tile carousel.
    $('#promoCarousel').carousel({
        listContainer: '#promoCarousel',
        previousArrow: '#promoLeftArrow',
        nextArrow: '#promoRightArrow',
        itemWidth: 211,
        containerHeight: 131,
        stepAmount: 1,
        visibleItemAmount: 1,
        duration: 180,
        loop: true
    });

    //start footer bg switcher;
    /*
     * will remove 'no-js' class from body
     */
    $("body").removeClass('no-js');
    $("#hero-media-push").html('');

    // Fix for iPad homepage layout
    if(navigator.userAgent.match(/iPad/i) != null) {
        // If we don't have Flash embedded
        $('#hero-media-push').css({'height': '16px'});
    }

    /* first time call to timer */
    setTimeout('footerbackgroundtimer()', 0);
    //end footer bg switcher;

    /* ie9 hack to add gradient to sign up modal */
    $('#close-label').html('<!--[if IE 9]><span class="gradientLeft"></span><span class="gradientRight"></span><![endif]-->');

    // Removes old visa rewards link if found
    var visalink = $('table.gde_footerFeaturedLinks a[name="&lid=global_footer/featured/visarewards"]');
    if (visalink.length > 0) {
        visalink.closest('td').remove();
    }

    // Removes Mater from Favorite Character options
    $('form #character option[value="Mater"]').remove();

    // Removes checkboxes to opt-in to character call / email
    $('#character_call_singlevisit-container').remove();
    $('#character_call_multiplevisit-container').remove();

    var redirect_flag = true;
    // Check if element needs to open in new window.
    $(".interstitial-new-window").click(function (){
        $(".continue-link").attr("target","_blank");
        $(".continue-link").attr("href", this.id);
        redirect_flag = false;
    });

    var nameInt = '';
    $("#LTMBWrap a").click(function() {
        nameInt = $(this).attr('name');
    });

    // PEP INTERSTITIAL
    var selectedLink = null;
    var newWindow = false;
    var openMobile = false;
    $('#popupInterstitial .overlay-close').click(function(e){
        $('#popupInterstitial').hide();
        $('.shim').fadeOut(500);
    });

    $('#popupInterstitial .overlay-continue').click(function(e){
        if (!selectedLink) return;
        var ele = document.createElement("a");
        ele.href = selectedLink;

        if (newWindow) {
            window.open(ele.href);
            $('#popupInterstitial').hide();
        } else {
            window.location = ele.href;
        }
    });

    $('#popupInterstitial .overlay-close, #popupInterstitial .overlay-continue').click(function(e) {
        if (openMobile) {
            $('#nav-icon').trigger('click');
            openMobile = false;
        }
    });

    //accessibility
    $('#popupInterstitial .overlay-close').keydown(function(e) {
        // tab
        if(e.keyCode == 9) {
            if(!e.shiftKey) {
                e.preventDefault();
                $('#popupInterstitial .languageOptions:first a:first').focus();
            }
        }
    });
    $('#popupInterstitial a:first').on('keydown', function(e) {
        // shift tab
        if(e.keyCode == 9) {
            if(e.shiftKey) {
                e.preventDefault();
                $('#popupInterstitial .overlay-close').focus();
            }
        }
    });

    function interstitial_onclick(e) {
        e.preventDefault();
        var ele = e.target;
        while(ele != null && ele.parentNode != null && ele.nodeName.toUpperCase() != 'A') {
            ele = ele.parentNode;
        }
        selectedLink = ele.id;
        newWindow = ele.target == '_blank';

        if($('.container').hasClass('mobile') && $('#mobile-container').hasClass('active')) {
            $('#nav-icon').trigger('click');
            openMobile = true;
        }


        $('#popupInterstitial .interstitial-module').hide();
    }

    $('.interstitial-internal-link').on('click', function(e) {
        interstitial_onclick(e);
        $('#popupInterstitial, #interstitial-internal').show();
    });

    $('.chrome_controls_wrapper .interstitial-language-link,  #mobile-container .navigation .interstitial-language-link').on('click', function(e) {
        interstitial_onclick(e);
        if($('.container').hasClass('mobile')){
            window.scrollTo(0,0);
        }
        $('#popupInterstitial, #interstitial-language').show(400,function(){
            $('#popupInterstitial .languageOptions a').first().focus();
        });
    });

    $('.interstitial-external-link').on('click', function(e) {
        interstitial_onclick(e);
        $('#popupInterstitial, #interstitial-external').show();

    });

    $('.interstitial-external-language-link').on('click', function(e) {
        interstitial_onclick(e);
        $('#popupInterstitial, #interstitial-external-language').show();
    });
    //END PEP INTERSTITIAL

    // language toggle
    $('.wdwFooterRegion a').on('click', function (e) {
        e.preventDefault();
        var pageUri = $('#pageUri').html()
            , intLang = '/' + $(this).attr('rel') + '/';
        if ('/en/' === intLang) {
            intLang = '/';
        }
        window.location.replace(intLang + pageUri);
        return false;
    });

    $('.hero-media-container').on('click','.interstitial-language-link',function(e) {
        interstitial_onclick(e);
        if($('.container').hasClass('mobile')){
            window.scrollTo(0,0);
        }
        $('#popupInterstitial, #interstitial-language').show();
    });

    $('#surveyOptOut').on('click', function(e) {
        cookie.set('DP_SURVEY_DISPLAYED', -2, expiry);
    });

    $('#surveyOptIn').on('click', function(e) {
        $('#popupInterstitial, #interstitial-survey').hide();
        cookie.set('DP_SURVEY_DISPLAYED', 2, expiry);
    });

    // survey popop
    if (1 === $('#interstitial-survey').length) {
        var minPageViewsBeforePopup = $('#minPageViewsBeforePopup').html(),
            popupFrequency = $('#popupFrequency').html(),
            cookie = new window.WDPRO.Cookie,
            cPageViews = cookie.get('DP_SURVEY_COUNTER'),
            cDisplayed = cookie.get('DP_SURVEY_DISPLAYED'),
            date = new Date(),
            expiry = date.getTime() + 84600000;

        if (null === cPageViews || isNaN(cPageViews)) cPageViews = 0;
        var increment = parseInt(cPageViews) + 1;

        /**
         * null - not initialized
         * -2 - opted-out
         * -1 - do NOT display
         *  0 - display based on counter
         *  1 - survey already displayed
         *  2  - opted in
         * */
        if (null === cDisplayed) {
            // test for ping rate
            var d = parseInt(Math.random() * 100);
            if (d >= popupFrequency) {
                // do not show survey for this session
                cookie.set('DP_SURVEY_DISPLAYED', -1, expiry);
                return;
            }
            else {
                cookie.set('DP_SURVEY_DISPLAYED', 0, expiry);
                cookie.set('DP_SURVEY_COUNTER', parseInt(cPageViews) + 1, expiry);
            }
        }
        else if(0 == cDisplayed) {
            // display survey based on minPageViewsBeforePopup
            if (increment >= minPageViewsBeforePopup) {
                // show survey modal
                $('#popupInterstitial .interstitial-module').hide();
                $('#popupInterstitial, #interstitial-survey').show();
                cookie.set('DP_SURVEY_DISPLAYED', 1, expiry);
            }
            cookie.set('DP_SURVEY_COUNTER', parseInt(cPageViews) + 1, expiry);
        }
    }

/**
 * Interstitial popup: Normally used when a guest exits current domain to another domain with a different language
 * Modified to be its own function instead of an anonymous function so flash could access the interstitial layer functionality.
 *
 * @author Hector Virgen
 */
function interStitialLanguageLayer(thisUrl, redirectUrl) {
    // Reset Interstitial Continue button
    resetInterstitialContinueButton = function(thisUrl) {
        if (!$(thisUrl).hasClass('interstitial-new-window')) {
            $(".continue-link").removeAttr("target");
            $(".continue-link").attr("href", "javascript:void(0);");
            redirect_flag = true;
        }
    };

    window.scrollTo(0,0);
    resetInterstitialContinueButton(thisUrl);

    var shim = $('.shim'),
        tmp_doc = $(document),
        tmp_body = $('body');

    if( redirectUrl != '') {
        // get redirectUrl from flash which is passed from datafeed
        redirect_loc = redirectUrl;
    } else {
        redirect_loc = thisUrl.id;
    }

    width_actual     = (tmp_body.width() > tmp_doc.width() ? tmp_body.width() : tmp_doc.width());
    height_actual     = (tmp_body.height() > tmp_doc.height() ? tmp_body.height() : tmp_doc.height());

    shim.css({
        background: '#000',
        width: width_actual + 'px',
        height: height_actual + 'px',
        display: 'block',
        opacity: '0'
    });

    xaxis_dialog    = (width_actual / 2) - (240); /* 480 is the width of the dialog window / 2 = 240 */

    shim.fadeTo(500, 0.5, function() {
        var popupInterstitial = $('#popupInterstitialLanguage'),
            popupInterstitialContainer = $('#popupInterstitialLanguage .interstitial-popup-container');

        if(!($('.container').hasClass('mobile'))) {
            popupInterstitial.css({
                width: width_actual + 'px'
            });

            popupInterstitialContainer.css({
                left: xaxis_dialog + 'px'
            });
        }
        popupInterstitial.fadeIn(500);

        $('.interstitial-popup-container .title-bar .close-container a').click(function() {
            popupInterstitial.hide();
            shim.fadeOut(500);
        });

        $('.interstitial-popup-container a.cancel-link').click(function() {
            popupInterstitial.hide();
            shim.fadeOut(500);
        });

        $('.interstitial-popup-container a.continue-link').click(function() {
            if (nameInt != '') {
                   s_wdpro.trackClick({}, nameInt.substring(5));
            }
            popupInterstitial.hide();
            shim.fadeOut(500);
            if (redirect_flag) {
                window.location = redirect_loc;
            }
        });
    });
}

    var body = $('body'),
        shim = $('.shim'),
        doc = $(document),
        docdims = {
            width: doc.width(),
            height: doc.height()
        },
        bodydims = {
            width: body.width(),
            height: body.height()
        };

    shim.css({
       width: (bodydims.width > docdims.width ? bodydims.width : docdims.width) + 'px',
       height: (bodydims.height > docdims.height ? bodydims.height : docdims.height) + 'px',
       opacity: 0
    }).hide();

    //Add sharethis background
    $("li.show-popup-li a").click(function(e){
        linkNow = $("li.show-popup-li a").attr('href');
        window.open(linkNow, 'PopupFeedBackExternalLinkPage','width=1200,height=1000,toolbar=no,scrollbars=yes,menubar=no,status=false,location=no,resizable=yes,top=10,left=10');
        e.preventDefault();
    });

  //start read more card
  $('.read-more-card-read-link a').click(function(){
      $(this).parents('.read-more-card-short-copy-container').hide();
      $(this).parents('.read-more-card-short-copy-container').siblings().show();
  });

  $('.read-more-card-close-link a').click(function(){
      $(this).parents('.read-more-card-long-copy').hide();
      $(this).parents('.read-more-card-long-copy').siblings().show();
  });
  //end read more card

  //start media player overlay
  $('#mediaIcon').click(function(){
      $('#mediaOverlay').attr('class', 'overlay video');
      $('#mediaOverlay').show();
      $('#primaryPlayer').show();
      if($('#primaryPlayer *').children().length > 0) {
          window.videoMediaPlayer.hide();
          window.videoMediaPlayer.show({book: 0, chapter: 0, subchapter: 0, asset: 0});
      } else {
          window.videoMediaPlayer.show({book: 0, chapter: 0, subchapter: 0, asset: 0});
      }
  });

  $('.popup-card a').click(function(){
      // get image to open on
      var id = $(this).attr('id');
      var playerPos = id.split(',');
      var playerBook = playerPos[0];
      var playerChapter = playerPos[1];
      var playerSubchapter = playerPos[2];
      var playerAsset = playerPos[3];
      $('#mediaOverlay').attr('class', 'overlay image');
      $('#mediaOverlay').show();
      $('#secondaryPlayer').show();
      if($('#secondaryPlayer').children().length > 0) {
          window.imageMediaPlayer.hide();
      }
      window.imageMediaPlayer.show({chapter: playerChapter, subchapter: playerSubchapter, asset: playerAsset});

  });

  $('#mediaOverlayClose').click(function(){
      $('#mediaOverlay').hide();
      $('#mediaOverlay').attr('class', 'overlay');
      $('#primaryPlayer').hide();
      $('#secondaryPlayer').hide();
      if(window.videoMediaPlayer) {
          window.videoMediaPlayer.hide();
      }
      if(window.imageMediaPlayer){
          window.imageMediaPlayer.hide();
      }

  });
  //end media player overlay

  $("a.group").click(function(){
      $('#cboxContent').prepend('<div id="cboxPixelOverlay"><img src="/static/css/global/images/spacer.gif" width="824" height="564"></div>');
  });

  $('#chrome_dol, #goc-bar').on( "click", 'a', function(e) {
      e.stopPropagation();
      linkId = $(this).attr('id');
      if (linkId == null || typeof linkId == 'undefined') {
          linkId = $(this).text();
      }
      s_wdpro.trackClick(this, 'DP_Global_Header_' + linkId);
  });

  $('#footer_dol, #goc-footer').on( "click", 'a:visible', function(e) {
      e.stopPropagation();
      linkId = $(this).attr('id');
      if (linkId == null || typeof linkId == 'undefined') {
          linkId = $(this).text();
      }
      s_wdpro.trackClick(this, 'DP_Global_Footer_' + linkId);
  });

    // fix for menu white background issue
    if (0 === $('#mobile-container').length) {
        $('ul.navigation li .leftMenu').each(function(ndx) {
            $(this).css('height', $(this).parent().css('height'));
        });
    }
})(jQuery);

function onloadPlayer() {
    if($('body').hasClass('disney-dream-portraits')) {
        $('#mediaOverlay').show();
        $('#primaryPlayer').show();
    }
}

function submitQQ(){
    interstitialInternalPopup();
    return false;
}

function interstitialInternalPopup(parentForm, sId){

    if(parentForm != null){
        $('#popupInterstitialInternal .continue-link').attr('href', '#');
        $('#popupInterstitialInternal .continue-link').attr('target', '');
        $('#popupInterstitialInternal .continue-link').click(function(){
            $('#' + parentForm).submit();
        });
    }else{
        redirect_loc     = sId;
        $('#popupInterstitialInternal .interstitial-popup-container .button-container .continue-link').attr('href', redirect_loc);
    }


    window.scrollTo(0,0);

    var shim = $('.shim'),
        tmp_doc = $(document),
        tmp_body = $('body');

    width_actual     = (tmp_body.width() > tmp_doc.width() ? tmp_body.width() : tmp_doc.width());
    height_actual     = (tmp_body.height() > tmp_doc.height() ? tmp_body.height() : tmp_doc.height());

    shim.css({
        background: '#000',
        width: width_actual + 'px',
        height: height_actual + 'px',
        display: 'block',
        opacity: '0'
    });

    xaxis_dialog    = (width_actual / 2) - (240); /* 480 is the width of the dialog window / 2 = 240 */


    shim.fadeTo(500, 0.5, function() {
        var popupInterstitial = $('#popupInterstitialInternal'),
            popupInterstitialContainer = $('#popupInterstitialInternal .interstitial-popup-container');

        popupInterstitial.css({
            width: width_actual + 'px'
        });

        popupInterstitialContainer.css({
            left: xaxis_dialog + 'px'
        });

        popupInterstitial.fadeIn(500);

        $('.interstitial-popup-container .title-bar .close-container a').click(function() {
            popupInterstitial.hide();
            shim.fadeOut(500);
        });

        $('.interstitial-popup-container a.cancel-link').click(function() {
            popupInterstitial.hide();
            shim.fadeOut(500);
        });

        $('.interstitial-popup-container a.continue-link').click(function() {
            if (nameInt != '') {
                s_wdpro.trackClick({}, nameInt.substring(5));
            }
            popupInterstitial.hide();
            shim.fadeOut(500);
            //window.location = redirect_loc;
        });
    });

    return false;
}

function closeMenu($element, top, focus){
    focus = typeof focus !== 'undefined' ? focus : true;
    if(top){
        $element.parents('.navWrapper').parent('li').removeClass('active');
        $element.attr('aria-expanded','false');
        if(focus){
            $element.parents('.navWrapper').prev('.navWrapper').find('a').focus();
        }
    } else {
        $element.parents('.menuWrapper').parent('li').removeClass('active');
        $element.parents('.menuWrapper').prev('.navWrapper').find('a').attr('aria-expanded','false');
        if(focus){
            $element.parents('.menuWrapper').prev('.navWrapper').find('a').focus();
        }
    }
}
function openMenu($element, top, focus){
    focus = typeof focus !== 'undefined' ? focus : true;
    if(top){
        $element.parents('.navWrapper').parent('li').addClass('active');
        $element.attr('aria-expanded','true');
        if(focus){
                var $first = $element.parents('.navWrapper').next('.menuWrapper').children('.leftMenu').children('ul').children('li').first();
                if($first.hasClass('headline0')) {
                    focusDown($first.find('span'), false);
                } else {
                    $first.find('a').focus();
                }
        }
    } /*else {
        $element.parents('.menuWrapper').parent('li').addClass('active');
        $element.parents('.menuWrapper').prev('.navWrapper').find('a').attr('aria-expanded','true');
        if(focus){
            $element.parents('.navWrapper').prev('.menuWrapper').find('a').focus();
        }
    }*/
}
function focusNext($element, top){
    top = typeof top !== 'undefined' ? top : true;
    if(top){
        var $parent = $element.parents('.navWrapper').parent('li');
        closeMenu($element, true, false);
        if($parent.next().length) {
            $parent.next().children('.navWrapper').find('a').focus();
        } else {
            $parent.parent('ul').children('li').first().focus();
        }
    } else {
        var $parent = $element.parents('.menuWrapper').parent('li');
        closeMenu($element, false, false);
        if($parent.next().length) {
            $parent.next().children('.navWrapper').find('a').focus();
            openMenu($parent.next().children('.navWrapper').find('a'), true, false);
        } else {
            $parent.parent('ul').children('li').first().find('a').focus();
            openMenu($parent.parent('ul').children('li').first().find('a'), true, false);
        }
    }
}
function focusPrev($element, top){
    top = typeof top !== 'undefined' ? top : true;
    if(top){
        var $parent = $element.parents('.navWrapper').parent('li');
        closeMenu($element, true, false);
        if($parent.prev().length) {
            $parent.prev().children('.navWrapper').find('a').focus();
        } else {
            $parent.parent('ul').children('li').last().focus();
        }
    } else {
        var $parent = $element.parents('.menuWrapper').parent('li');
        closeMenu($element, false, false);
        if($parent.prev().length) {
            $parent.prev().children('.navWrapper').find('a').focus();
        } else {
            $parent.parent('ul').children('li').last().focus();
        }
    }
}
function focusUp($element, top){
    top = typeof top !== 'undefined' ? top : true;
    if(top) {
        openMenu($element, true, true);
        $element.parent('.navWrapper').next('.menuWrapper').children('div').last().children('ul').last().children('li').last().focus();
    } else {        
        if($element.parent('li').prev('li').length){
            var $prev = $element.parent('li').prev('li');
            if($prev.hasClass('headline0')) {
                focusUp($prev.find('span'), false);
            } else {
                $prev.find('a').focus();
            }
        } else {
            if($element.parent().parent().parent().parent().children('.rightMenu').length){
                if($element.parent().parent().parent().hasClass('leftMenu') ){
                    $element.parents('.leftMenu').siblings('.rightMenu').children('ul').children('li').last().find('a').focus();
                } else {
                    $element.parents('.rightMenu').siblings('.leftMenu').children('ul').children('li').last().find('a').focus();
                }
            } else {
                $element.parents('.leftMenu').children('ul').children('li').last().find('a').focus();
            }
        }
    }
}

function focusDown($element, top){
    top = typeof top !== 'undefined' ? top : true;
    if(top){
        openMenu($element, true, true);
    } else {
        if($element.parent('li').next('li').length){
            var $next = $element.parent('li').next('li');
            if($next.hasClass('headline0')) {
                focusDown($next.find('span'), false);
            } else {
                $next.find('a').focus();
            }
        } else {
            if($element.parent().parent().parent().parent().children('.rightMenu').length){
                if($element.parent().parent().parent().hasClass('leftMenu') ){
                    var $next = $element.parents('.leftMenu').siblings('.rightMenu').children('ul').children('li').first();
                    if($next.hasClass('headline0')) {
                        focusDown($next.find('span'), false);
                    } else {
                        $next.find('a').focus();
                    }
                } else {
                    var $next = $element.parents('.rightMenu').siblings('.leftMenu').children('ul').children('li').first();
                    if($next.hasClass('headline0')) {
                        focusDown($next.find('span'), false);
                    }else {
                        $next.find('a').focus();
                    }
                }
            } else {
                if($element.parents('.leftMenu').children('ul').children('li').first().hasClass('headline0')) {
                    focusDown($element.parents('.leftMenu').children('ul').children('li').first().find('span'), false);
                } else {
                    $element.parents('.leftMenu').children('ul').children('li').first().find('a').focus();
                }
            }
        }
    }
}

function qqLoaded(){
    //  uncomment for QQ interstitial
    /**
    $('#DisneyQuickQuote form').attr('onsubmit','return false');
    var lang = $('html').attr('lang');
    $(".SQQProductOptionInputSubmit").mousedown(function(){
        if((lang == 'fr-CA')||(lang == 'es-US')){
            parentFormAction = $(this).parents('form').attr('name');
            interstitialInternalPopup(parentFormAction);
        }
    });
    */

    $('#WDW_DPNextGen2WDWPackagesSQQProductOption_Form').append('<div id="WDWPackagesDisclaimer" class="Disclaimer" ></div>');
    $('#WDW_DPNextGen2WDWPackagesSQQProductOption_DPNextGen2FloatingTextUSDollars').remove().appendTo('#WDWPackagesDisclaimer');
    $('#WDW_DPNextGen2WDWPackagesSQQProductOption_DPNextGen2DisabilitiesSQQHTMLText').remove().appendTo('#WDWPackagesDisclaimer');
    $('#WDW_DPNextGen2WDWPackagesSQQProductOption_DPNextGen2FloatingTextWDWPhone').remove().appendTo('#WDWPackagesDisclaimer');

    $('#WDW_DPNextGen2WDWRoomsSQQProductOption_Form').append('<div id="WDWRoomsDisclaimer" class="Disclaimer"></div>');
    $('#WDW_DPNextGen2WDWRoomsSQQProductOption_DPNextGen2FloatingTextUSDollars').remove().appendTo('#WDWRoomsDisclaimer');
    $('#WDW_DPNextGen2WDWRoomsSQQProductOption_DPNextGen2DisabilitiesSQQHTMLText').remove().appendTo('#WDWRoomsDisclaimer');
    $('#WDW_DPNextGen2WDWRoomsSQQProductOption_DPNextGen2FloatingTextWDWPhone').remove().appendTo('#WDWRoomsDisclaimer');

    $('#WDW_DPNextGen2WDWTicketsSQQProductOption_Form').append('<div id="WDWTicketsDisclaimer" class="Disclaimer"></div>');
    $('#WDW_DPNextGen2WDWTicketsSQQProductOption_DPNextGen2FloatingTextUSDollars').remove().appendTo('#WDWTicketsDisclaimer');
    $('#WDW_DPNextGen2WDWTicketsSQQProductOption_DPNextGen2FloatingTextWDWPhone').remove().appendTo('#WDWTicketsDisclaimer');

    $('#DLR_DPNextGen2DLRPackagesSQQProductOption_Form').append('<div id="DLRPackagesDisclaimer" class="Disclaimer"></div>');
    $('#DLR_DPNextGen2DLRPackagesSQQProductOption_DPNextGen2FloatingTextUSDollars').remove().appendTo('#DLRPackagesDisclaimer');
    $('#DLR_DPNextGen2DLRPackagesSQQProductOption_DPNextGen2DisabilitiesSQQHTMLText').remove().appendTo('#DLRPackagesDisclaimer');
    $('#DLR_DPNextGen2DLRPackagesSQQProductOption_DPNextGen2DLRSQQHTMLTextCallReservations').remove().appendTo('#DLRPackagesDisclaimer');

    $('#DLR_DPNextGen2DLRRoomOnlySQQProductOption_Form').append('<div id="DLRRoomsDisclaimer" class="Disclaimer"></div>');
    $('#DLR_DPNextGen2DLRRoomOnlySQQProductOption_DPNextGen2FloatingTextUSDollars').remove().appendTo('#DLRRoomsDisclaimer');
    $('#DLR_DPNextGen2DLRRoomOnlySQQProductOption_DPNextGen2DisabilitiesSQQHTMLText').remove().appendTo('#DLRRoomsDisclaimer');
    $('#DLR_DPNextGen2DLRRoomOnlySQQProductOption_DPNextGen2DLRSQQHTMLTextCallReservations').remove().appendTo('#DLRRoomsDisclaimer');

    $('#DLR_DPNextGen2DLRTicketsSQQProductOption_Form').append('<div id="DLRTicketsDisclaimer" class="Disclaimer"></div>');
    $('#DLR_DPNextGen2DLRTicketsSQQProductOption_DPNextGen2FloatingTextUSDollars').remove().appendTo('#DLRTicketsDisclaimer');
    $('#DLR_DPNextGen2DLRTicketsSQQProductOption_DPNextGen2DLRSQQHTMLTextCallReservations').remove().appendTo('#DLRTicketsDisclaimer');

    $('#DCL_DPNextGen2DCLCruisesSQQProductOption_Form').append('<div id="DCLDisclaimer" class="Disclaimer"></div>');
    $('#DCL_DPNextGen2DCLCruisesSQQProductOption_DPNextGen2DCLDisabilitiesSQQHTMLText').remove().appendTo('#DCLDisclaimer');
    $('#DCL_DPNextGen2DCLCruisesSQQProductOption_DPNextGen2DCLFloatingTextCallReservations').remove().appendTo('#DCLDisclaimer');

    $('#WDWRooms_AulaniRoomOnlySQQProductOption_Form').append('<div id="AULDisclaimer" class="Disclaimer"></div>');
    $('#WDWRooms_AulaniRoomOnlySQQProductOption_DPNextGen2FloatingTextAulaniPhone').remove().appendTo('#AULDisclaimer');

    $('#BWDW_DVCVBRoomsSQQProductOption_Form').append('<div id="BWDWDisclaimer" class="Disclaimer"></div>');
    $('#BWDW_DVCVBRoomsSQQProductOption_DPNextGen2FloatingTextVBHHPhone').remove().appendTo('#BWDWDisclaimer');

    $('#BWDW2_DVCHHRoomsSQQProductOption_Form').append('<div id="DVCHHDisclaimer" class="Disclaimer"></div>');
    $('#BWDW2_DVCHHRoomsSQQProductOption_DPNextGen2FloatingTextVBHHPhone').remove().appendTo('#DVCHHDisclaimer');

    // Fixes link to Guests with Disablities for DLR
    $('#DLR_DPNextGen2DLRPackagesSQQProductOption_DPNextGen2DisabilitiesSQQHTMLText_Link').attr('href', 'http://disneyland.disney.go.com/plan/guest-services/guests-with-disabilities/');
}

function checkClientTimeOfDay() {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();

    if (currentClientBackground == '') {
        if (currentHour >= 6 && currentHour <= 18) {
            $(".global-footer-container")
                .removeClass('footer-background-sunset footer-background-night')
                addClass('footer-background-day');

            $(".footer-panel-header, .footer-panel-content a, .footer-panel-content li a, .footer-panel-content, .signup-content, .signup-success")
                .removeClass('night sunset')
                .addClass('day');

            currentClientBackground = 'day';

        } else if (currentHour >= 19 && currentHour <= 20) {
            $(".global-footer-container")
                .removeClass('footer-background-day footer-background-night')
                .addClass('footer-background-sunset');

            $(".footer-panel-header, .footer-panel-content a, .footer-panel-content li a, .footer-panel-content, .signup-content, .signup-success")
                .removeClass('night day')
                .addClass('sunset');

            currentClientBackground = 'sunset';

        } else {
            $(".global-footer-container")
                .removeClass('footer-background-day footer-background-sunset')
                .addClass('footer-background-night');

            $(".footer-panel-header, .footer-panel-content a, .footer-panel-content li a, .footer-panel-content, .signup-content, .signup-success")
                .removeClass('sunset day')
                .addClass('night');

            currentClientBackground = 'night';

        }
    }

    if (currentHour >= 6 && currentHour <= 18) {
        if (currentClientBackground != 'day') {
            $(".footer-background").addClass('footer-background-day').fadeIn(2500, function() {
                $(".global-footer-container")
                    .removeClass('footer-background-sunset footer-background-night')
                    .addClass('footer-background-day');

                $(".footer-background").removeClass('footer-background-day').hide();

                $(".footer-panel-header, .footer-panel-content a, .footer-panel-content li a, .footer-panel-content")
                    .removeClass('sunset night')
                    .addClass('day');
            });

            currentClientBackground = 'day';
        }
    } else if (currentHour >= 19 && currentHour <= 20) {
        if (currentClientBackground != 'sunset') {
            $(".footer-background").addClass('footer-background-sunset').fadeIn(2500, function() {
                $(".global-footer-container")
                    .removeClass('footer-background-night footer-background-day')
                    .addClass('footer-background-sunset');

                $(".footer-background").removeClass('footer-background-sunset').hide();

                $(".footer-panel-header, .footer-panel-content a, .footer-panel-content li a, .footer-panel-content")
                    .removeClass('day night')
                    .addClass('sunset');
            });

            currentClientBackground = 'sunset';
        }
    } else {
        if (currentClientBackground != 'night') {
            $(".footer-background").addClass('footer-background-night').fadeIn(2500, function() {
                $(".global-footer-container")
                    .removeClass('footer-background-day footer-background-sunset')
                    .addClass('footer-background-night');
                $(".footer-background").removeClass('footer-background-night').hide();

                $(".footer-panel-header, .footer-panel-content a, .footer-panel-content li a, .footer-panel-content")
                    .removeClass('day sunset')
                    .addClass('night');
            });

            currentClientBackground = 'night';
        }
    }
}

function footerbackgroundtimer(){
    setTimeout('footerbackgroundtimer()', 5000);
}

function call_facebook() {
    window.open('http://www.facebook.com/sharer.php?u=http://dnhwdpvllamp01.wdig.com:65080/');
}
function call_blog() {
    window.open('http://www.myspace.com/Modules/PostTo/Pages/?u=http://dnhwdpvllamp01.wdig.com:65080/');
}
function call_twitter() {
    window.open('http://twitter.com/home?status=Disney Park http://dnhwdpvllamp01.wdig.com:65080/');
}

$(document).ready(function(){
    //accessibilty play/pause button for media player
    $('.playerControl').on('click', function() {
        if($('.playPauseButton').hasClass('playing')) {
            $(this).removeClass('playing');
        } else {
            $(this).addClass('playing');
        }
        $(".playPauseButton").click();
    });
    // CPRA privacy compliance
    $('#cpra').on('click', function(){
        OneTrust.ToggleInfoDisplay();
    });
});