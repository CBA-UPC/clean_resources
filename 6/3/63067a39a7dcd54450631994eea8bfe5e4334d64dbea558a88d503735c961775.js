if (typeof gemius_hcconn != 'undefined' && typeof gemius_hcconn.fpdata != 'undefined' && (gemius_hcconn.fpdata=='' || gemius_hcconn.fpdata[0]=='-')) {
	gemius_hcconn.fpdata = "oznKiGxTF5rDoa7F3yszyAVAN8HbB1tRTLgqg60Txw3.p7|1707461245";
	gemius_hcconn.fpcdomain = 'videa.hu';
}
togglerButton.on('click', function (e) {
        if (!displayBox.hasClass(openDateBoxClass)) {
            e.stopPropagation();

            jQuery('.' + SITE.boxTogglerClasses.join(', .'))
                .removeClass(SITE.boxTogglerClasses.join(' '));

            displayBox.addClass(openDateBoxClass);
            togglerButton.addClass(openDateButtonClass);
        }
    });
    displayBox.on('click', function (e) {
        e.stopPropagation();
    });

    jQuery('body').on('click', function () {
        displayBox.removeClass(openDateBoxClass);
        togglerButton.removeClass(openDateButtonClass);
    });
};

SITE.getWeather = function (city) {
    return jQuery.ajax({
        url: '/wp-json/endless/v1/weather/' + city,
        type: 'GET',
        dataType: 'json'
    });
};

SITE.hideEmptySharedAreas = function ($) {
    var emptyRow;
    var emptySection;
    $('.endless-shared-area .et_pb_section').each(function () {
        emptySection = true;
        $(this).find('.et_pb_row').each(function () {
            emptyRow = false;
            var $columns = $(this).find('.et_pb_column');
            var columnCount = $columns.length;
            if (columnCount == $columns.filter('.et_pb_column_empty').length) {
                emptyRow = true;
            }
            if (emptyRow) {
                $(this).addClass('hidden');
            } else {
                emptySection = false;
            }
        })
        if (emptySection) {
            $(this).addClass('hidden');
        }
    });
};

SITE.menuTogglerClasses = [];
SITE.menuToggler = function (
    mainArea,
    mainAreaOverlayClass,
    topMenu,
    topMenuClass,
    topMenuBox,
    topMenuBoxClass,
    topMenuArrow,
    topMenuArrowClass,
    topMenuOpenColor,
    searchButton,
    body,
    noScrollAndJuming
) {
    SITE.menuTogglerClasses
        .push(topMenuClass);
    SITE.menuTogglerClasses
        .push(topMenuBoxClass);

    topMenu.on('click', function (e) {
        if (!topMenuBox.hasClass(topMenuBoxClass)) {
            e.stopPropagation();

            jQuery('.' + SITE.menuTogglerClasses.join(', .'))
                .removeClass(SITE.menuTogglerClasses.join(' '));

            mainArea.addClass(mainAreaOverlayClass);
            topMenu.addClass(topMenuClass);
            topMenuBox.addClass(topMenuBoxClass);
            topMenuArrow.addClass(topMenuArrowClass);
            topMenu.addClass(topMenuOpenColor);
            body.addClass(noScrollAndJuming);
            body.bind('touchmove', function(e) {
                if (e.target.closest('ul') === topMenuBox[0]) {
                    return;
                }
                e.preventDefault();
                e.stopPropagation();
            });
        }
    });
    topMenuBox.on('click', function (e) {
        e.stopPropagation();
    });
    searchButton.on('click', function () {
        mainArea.removeClass(mainAreaOverlayClass);
        topMenu.removeClass(topMenuClass);
        topMenuBox.removeClass(topMenuBoxClass);
        topMenuArrow.removeClass(topMenuArrowClass);
        topMenu.removeClass(topMenuOpenColor);
        body.removeClass(noScrollAndJuming);
        body.unbind('touchmove');
    });

    jQuery('body').on('click', function () {
        mainArea.removeClass(mainAreaOverlayClass);
        topMenu.removeClass(topMenuClass);
        topMenuBox.removeClass(topMenuBoxClass);
        topMenuArrow.removeClass(topMenuArrowClass);
        topMenu.removeClass(topMenuOpenColor);
        body.removeClass(noScrollAndJuming);
        body.unbind('touchmove');
    });
};

SITE.mobileMenuTogglerClasses = [];
SITE.mobileMenuToggler = function (
    mobileMenuButton,
    mobileMenuBox,
    hamburgerMenuClose,
    mobileMenuButtonClass,
    mobileMenuBoxClass,
    changeTogglerButtonClass,
    borderHiddenLine,
    borderHiddenLineClass,
    hambugerContainer,
    hambugerContainerClass,
    hamburgerIcon,
    hamburgerIconClass,
    mainArea,
    mainAreaOverlayClass,
    mobileSearchButton,
    body,
    noScroll,
    navigation,
    diviClass,
    diviClassRemover
) {
    SITE.mobileMenuTogglerClasses
        .push(mobileMenuButtonClass);
    SITE.mobileMenuTogglerClasses
        .push(mobileMenuBoxClass);

    mobileMenuButton.on('click', function (e) {
        if (!mobileMenuBox.hasClass(mobileMenuBoxClass)) {
            e.stopPropagation();

            jQuery('.' + SITE.mobileMenuTogglerClasses.join(', .'))
                .removeClass(SITE.mobileMenuTogglerClasses.join(' '));

            mobileMenuBox.addClass(mobileMenuBoxClass);
            mobileMenuButton.addClass(mobileMenuButtonClass);
            hamburgerMenuClose.addClass(changeTogglerButtonClass);
            borderHiddenLine.addClass(borderHiddenLineClass);
            hambugerContainer.addClass(hambugerContainerClass);
            hamburgerIcon.addClass(hamburgerIconClass);
            mainArea.addClass(mainAreaOverlayClass);
            body.addClass(noScroll);
            window.bodyScrollTop = jQuery(document).scrollTop().valueOf();
            body.css({"position":"fixed"});
            navigation.trigger("sticky_kit:detach");
            mainArea.addClass(diviClassRemover);
        }
    });
    mobileMenuBox.on('click', function (e) {
        e.stopPropagation();
    });
    mobileSearchButton.on('click', function () {
        mobileMenuBox.removeClass(mobileMenuBoxClass);
        mobileMenuButton.removeClass(mobileMenuButtonClass);
        hamburgerMenuClose.removeClass(changeTogglerButtonClass);
        borderHiddenLine.removeClass(borderHiddenLineClass);
        hambugerContainer.removeClass(hambugerContainerClass);
        hamburgerIcon.removeClass(hamburgerIconClass);
        mainArea.removeClass(mainAreaOverlayClass);
        body.removeClass(noScroll);
        body.css({"position":""});
        navigation.stick_in_parent();
        mainArea.removeClass(diviClassRemover);
    });

    jQuery('body').on('click', function () {
        mobileMenuBox.removeClass(mobileMenuBoxClass);
        mobileMenuButton.removeClass(mobileMenuButtonClass);
        hamburgerMenuClose.removeClass(changeTogglerButtonClass);
        borderHiddenLine.removeClass(borderHiddenLineClass);
        hambugerContainer.removeClass(hambugerContainerClass);
        hamburgerIcon.removeClass(hamburgerIconClass);
        mainArea.removeClass(mainAreaOverlayClass);
        body.removeClass(noScroll);
        body.css({"position":""});
        if (window.bodyScrollTop) {
            jQuery(document).scrollTop(bodyScrollTop);
        }
        navigation.stick_in_parent();
        mainArea.removeClass(diviClassRemover);
    });
};

SITE.searchClasses = [];
SITE.searchToggler = function (
    searchButton,
    searchBox,
    searchBoxClass,
    searchContainer,
    searchContainerClasses,
    searchCloseIcon,
    topMenu
) {
    SITE.searchClasses
        .push(searchBoxClass);

    searchButton.on('click', function (e) {
        if (!searchBox.hasClass(searchBoxClass)) {
            e.stopPropagation();

            jQuery('.' + SITE.searchClasses.join(', .'))
                .removeClass(SITE.searchClasses.join(' '));

            searchBox.addClass(searchBoxClass);
            searchContainer.addClass(searchContainerClasses);
        }
    });
    searchBox.on('click', function (e) {
        e.stopPropagation();
    });
    searchCloseIcon.on('click', function () {
        searchBox.removeClass(searchBoxClass);
        searchContainer.removeClass(searchContainerClasses);

    });
    topMenu.on('click', function () {
        searchBox.removeClass(searchBoxClass);
        searchContainer.removeClass(searchContainerClasses);
    });

    jQuery('body').on('click', function () {
        searchBox.removeClass(searchBoxClass);
        searchContainer.removeClass(searchContainerClasses);
    });
};

SITE.mobileSearchClasses = [];
SITE.mobileSearchToggler = function (
    mobileSearchButton,
    mobileSearchBox,
    mobileSearchBoxClass,
    mobileSearchButtonClass,
    mobileSearchFormField,
    mobileSearchCloseIcon
) {
    SITE.mobileSearchClasses
        .push(mobileSearchButtonClass);
    SITE.mobileSearchClasses
        .push(mobileSearchBoxClass);

    mobileSearchButton.on('click', function (e) {
        if (!mobileSearchBox.hasClass(mobileSearchBoxClass)) {
            e.stopPropagation();

            jQuery('.' + SITE.mobileSearchClasses.join(', .'))
                .removeClass(SITE.mobileSearchClasses.join(' '));

            mobileSearchBox.addClass(mobileSearchBoxClass);
            mobileSearchButton.addClass(mobileSearchButtonClass);
            mobileSearchFormField.focus();
        }
    });
    mobileSearchBox.on('click', function (e) {
        e.stopPropagation();
    });
    mobileSearchCloseIcon.on('click', function () {
        mobileSearchBox.removeClass(mobileSearchBoxClass);
        mobileSearchBox.addClass(mobileSearchButtonClass);
        mobileSearchButton.removeClass(mobileSearchButtonClass);
    });

    jQuery('body').on('click', function () {
        mobileSearchBox.removeClass(mobileSearchBoxClass);
        mobileSearchButton.removeClass(mobileSearchButtonClass);
    });
};

(function ($) {
    $(function () {
        $('.fbShare').on('click', function (e) {
            e.preventDefault();
            var $this = $(this);
            var leftPosition = (window.screen.width / 2);
            var topPosition = (window.screen.height / 2) - ((450 / 2) + 400);
            var windowFeatures = "status=no,height=" + 450 + ",width=" + 550 + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
            window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent($this.data('href')) + '&t=' + encodeURIComponent($this.data('shareTitle')), 'sharer', windowFeatures);
        });
    });

    $(document).ready(function () {
        SITE.hideEmptySharedAreas($);
        //$("#et-top-navigation").stick_in_parent();
        var hideAdvertBoxIfEmpty = function () {
            if (!window.goAdverticum3) {
                return;
            }
            window.goAdverticum3.onReady(function (goa3) {
                goa3.on('invoke', function (jQueryEvent, goa3Event) {
                    goa3Event.zone.node.closest('.et_pb_module').removeClass('hidden')
                });
            });
        };

        hideAdvertBoxIfEmpty();
        var floatHeight = 0;

        $('.enews-article-offerer-layout-float .enews-article-offerer-content-container').each(function () {
            if ($(window).width() >= 1400 || ( $(window).width() <= 980 && $(window).width() > 600)) {
                floatHeight = ($(this).find('.enews-article-offerer-info').height()) + 60;
                $(this).find('.enews-article-offerer-img').css('margin-bottom', floatHeight - 45);
                $(this).find('.enews-article-offerer-info').css('bottom', 0);
            } else $(this).find('.enews-article-offerer-img').css('margin-bottom', 0);
        });

        $(window).resize(function () {
            $('.enews-article-offerer-layout-float .enews-article-offerer-content-container').each(function () {
                if ($(window).width() >= 1400 || ( $(window).width() <= 980 && $(window).width() > 600)) {
                    floatHeight = ($(this).find('.enews-article-offerer-info').height()) + 60;
                    $(this).find('.enews-article-offerer-img').css('margin-bottom', floatHeight - 45);
                    $(this).find('.enews-article-offerer-info').css('bottom', 0);
                } else $(this).find('.enews-article-offerer-img').css('margin-bottom', 0);
            });
        });

        $("select:not([multiple='multiple'])").selectBoxes();

        document.onkeypress = keyPress;

        function keyPress(e) {
            var x = e || window.event;
            var key = (x.keyCode || x.which);
            if (key == 13 || key == 3) {
                $('#searchform').submit();
            }
        }

        /*
         * Mobile Nav
         */
        $("#eads-super-banner").each(function () {
            var super_banner = $(this);
            if (super_banner.children(".et_pb_section")) {
                super_banner.addClass('active');
            }
        });

        $(function () {
            if ($('#eads-super-banner').hasClass('active')) {
                window.close = "close_show_banner";
            } else {
                window.close = "close_show";
            }
        });

        var initMenuToggler = function () {
            var mainArea = $('#main-content'),
                mainAreaOverlayClass = 'desktop-menu-overlay',
                topMenu = $('#ml_top_menu_button'),
                topMenuClass = 'ml_top_menu_active',
                topMenuBox = $('#ml_top_menu_box'),
                topMenuBoxClass = 'ml_top_menu_box_active',
                topMenuArrow = $('.top-menu-arrow'),
                topMenuArrowClass = 'rotate_arrow',
                topMenuOpenColor = 'blueMenu',
                searchButton = $('#ml_secondary_menu_search'),
                body = $('body'),
                noScroll = 'noScroll';



            SITE.menuToggler(
                mainArea,
                mainAreaOverlayClass,
                topMenu,
                topMenuClass,
                topMenuBox,
                topMenuBoxClass,
                topMenuArrow,
                topMenuArrowClass,
                topMenuOpenColor,
                searchButton,
                body,
                noScroll

            );
        };
        initMenuToggler();

        var initMobileMenuToggler = function () {
            var mobileMenuButton = $('#ml_mobile_menu'),
                mobileMenuBox = $('#mobile-menu'),
                hamburgerMenuClose = $('#hamburger-menu-close'),
                borderHiddenLine = $('#hidden_border_mobile_menu'),
                mobileMenuButtonClass = 'ml_mobile_menu_active',
                mobileMenuBoxClass = 'ml_mobile_menu_active',
                changeTogglerButtonClass = 'hamburger-menu-close-active',
                borderHiddenLineClass = 'hidden_border_mobile_menu',
                hambugerContainer = $('#hamburger-container'),
                hambugerContainerClass = 'hamburger-close-select',
                hamburgerIcon = $('#hamburger-menu'),
                hamburgerIconClass = 'hamburger-menu',
                mainArea = $('#main-content'),
                mainAreaOverlayClass = 'desktop-menu-overlay',
                mobileSearchButton = $('#ml_mobile_search'),
                body = $('body'),
                noScroll = 'noScroll',
                navigation = $('#et-top-navigation'),
                diviClass = 'et_pb_row',
                diviClassRemover = 'diviClassRemover';


            SITE.mobileMenuToggler(
                mobileMenuButton,
                mobileMenuBox,
                hamburgerMenuClose,
                mobileMenuButtonClass,
                mobileMenuBoxClass,
                changeTogglerButtonClass,
                borderHiddenLine,
                borderHiddenLineClass,
                hambugerContainer,
                hambugerContainerClass,
                hamburgerIcon,
                hamburgerIconClass,
                mainArea,
                mainAreaOverlayClass,
                mobileSearchButton,
                body,
                noScroll,
                navigation,
                diviClass,
                diviClassRemover

            );
        };
        initMobileMenuToggler();

        var initSearch = function () {
            var searchButton = $('#ml_secondary_menu_search'),
                searchBox = $('.et_search_outer'),
                searchBoxClass = 'ml_desktop_search_active',
                searchContainer = $('.et_search_form_container'),
                searchContainerClasses = 'et_pb_search_visible et_pb_search_form_hidden ',
                searchCloseIcon = $('.et_close_search_field'),
                topMenu = $('#ml_top_menu_button');


            SITE.searchToggler(
                searchButton,
                searchBox,
                searchBoxClass,
                searchContainer,
                searchContainerClasses,
                searchCloseIcon,
                topMenu
            );
        };
        initSearch();

        var initMobileSearch = function () {
            var mobileSearchButton = $('#ml_mobile_search'),
                mobileSearchBox = $('#ml_mobile_search_box'),
                mobileSearchBoxClass = 'ml_mobile_search_box_show',
                mobileSearchButtonClass = 'ml_mobile_search_box_hide',
                mobileSearchFormField = $('#top-search-form-field'),
                mobileSearchCloseIcon = $('#ml_mobile_search_close');


            SITE.mobileSearchToggler(
                mobileSearchButton,
                mobileSearchBox,
                mobileSearchBoxClass,
                mobileSearchButtonClass,
                mobileSearchFormField,
                mobileSearchCloseIcon
            );
        };
        initMobileSearch();

        var keys = {37: 1, 38: 1, 39: 1, 40: 1};

        function preventDefault(e) {
            e = e || window.event;
            if (e.preventDefault)
                e.preventDefault();
            e.returnValue = false;
        }

        function preventDefaultForScrollKeys(e) {
            if (keys[e.keyCode]) {
                preventDefault(e);
                return false;
            }
        }

        var initSearchDateFromToToggler = function () {
            var togglerButton = $('#date_today'),
                displayBox = $('#search_category_all_date'),
                openDateButtonClass = 'right_search_field_columns_text',
                openDateBoxClass = 'right_search_field_date_box';

            SITE.boxToggler(togglerButton, displayBox, openDateButtonClass, openDateBoxClass);
        }
        initSearchDateFromToToggler();

        var initSearchColumnFromToToggler = function () {
            var togglerButton = $('#search_category_all_text'),
                displayBox = $('#search_category_all_box'),
                openDateButtonClass = 'right_search_field_columns_text',
                openDateBoxClass = 'right_search_field_columns_box';

            SITE.boxToggler(togglerButton, displayBox, openDateButtonClass, openDateBoxClass);
        }
        initSearchColumnFromToToggler();

        var initSearchAuthorFromToToggler = function () {
            var togglerButton = $('#author-name-click'),
                displayBox = $('#search_author_box'),
                openDateButtonClass = 'right_search_field_columns_text',
                openDateBoxClass = 'right_search_field_author_box';

            SITE.boxToggler(togglerButton, displayBox, openDateButtonClass, openDateBoxClass);
        }
        initSearchAuthorFromToToggler();

        var initWantAdCategorySelectorFromToToggler = function () {
            var togglerButton = $('#allWantAdCategoryButton'),
                displayBox = $('#allCategorySelectorID'),
                openDateButtonClass = 'allWantAdCategoryTextShow',
                openDateBoxClass = 'allCategorySelectorBoxShow';

            SITE.boxToggler(togglerButton, displayBox, openDateButtonClass, openDateBoxClass);
        }
        initWantAdCategorySelectorFromToToggler();

        $('#left-area').click(function () {
            $('#search_span').removeClass('search_span_show')
            $('#search_span_1').removeClass('search_span_show')
            $('#author_search_box').removeClass('author_search_box_show')
        });

        $('#right-area').click(function () {
            $('#search_span').removeClass('search_span_show')
            $('#search_span_1').removeClass('search_span_show')
            $('#author_search_box').removeClass('author_search_box_show')
        });

        $('#close').click(function () {
            $('#close').removeClass(close)
        });

        $(function () {
            if ($('body').hasClass('iphone')) {
                $('#main-header').addClass('ipad')
                $('#page-container').addClass('apple-hidden')
            }
        });

        $(document).ready(function () {
            if ($('#gallery_menu').hasClass('gallery_menu')) {
                $('body').addClass('media-view-page')
                if ($('body').width() >= 801) {
                    $('#main-header').addClass('gallery_menu_hide');
                }
            }
        });

        $(window).resize(function () {
            if ($('#gallery_menu').hasClass('gallery_menu')) {
                $('body').addClass('media-view-page')
                if ($('body').width() >= 801) {
                    $('#main-header').addClass('gallery_menu_hide');
                }
            }
        });

        $(document).ready(function () {
            if ($('#gallery_menu').hasClass('gallery_menu')) {
                if ($('body').width() <= 800) {
                    $('#main-header').removeClass('gallery_menu_hide');
                }
            }
        });

        $(window).resize(function () {
            if ($('#gallery_menu').hasClass('gallery_menu')) {
                if ($('body').width() <= 800) {
                    $('#main-header').removeClass('gallery_menu_hide');
                }
            }
        });

        $(document).ready(function () {
            $('h3').parent('li').addClass('list_title_ol');
        });

        /*
         * fluid secondary menu
         */
        var secondary_nav = $('#et-secondary-nav');
        var secondary_menu = $('#et-secondary-menu');
        var listItems = $("#et-secondary-menu li");
        if (secondary_nav.width() > (secondary_menu.width() - 210)) {
            listItems.each(function (idx, li) {
                var product = $(li);

                if (product.hasClass('hide-item')) {
                    product.addClass('hide-menu-item')
                    product.removeClass('hide-item')
                    return false;
                }
            });
        }

        $(window).resize(function () {
            if (secondary_nav.width() > (secondary_menu.width() - 210)) {
                listItems.each(function (idx, li) {
                    var product = $(li);

                    if (product.hasClass('hide-item')) {
                        product.addClass('hide-menu-item')
                        product.removeClass('hide-item')
                        return false;
                    }
                });
            }
        });

        $(document).ready(function () {
            if (secondary_nav.width() > (secondary_menu.width() - 210)) {
                listItems.each(function (idx, li) {
                    var product = $(li);
                    if (product.hasClass('hide-item')) {
                        product.addClass('hide-menu-item')
                        product.removeClass('hide-item')
                        return false;
                    }
                });
            }
        });

        $(function () {
            if ($('#no_image').hasClass('no_image')) {
                $('#article-cover-author').addClass('article_no_image_author')
                $('#article-cover-text').addClass('article_no_image_text')
                $('#article-title').addClass('article_no_image')
                $('#article-title_h1').addClass('article-title_h1')
                $('#article-cover').addClass('article-cover_no_image')
                $('#article-datetime').addClass('article-datetime_no_image')
                $('#article-datetime_1').addClass('article-datetime_no_image')
                $('#article-datetime_2').addClass('article-datetime_no_image')
                $('#article-cover-img').removeClass('article-cover-img')
            }
        });

        $('#fb_like')
            .mouseenter(function () {
                $('#fb_like_span').addClass('fb_like_span_hover_g')
            })
            .mouseleave(function () {
                $('#fb_like_span').removeClass('fb_like_span_hover_g')
            });

        $(window).resize(function () {
            if ($('body').width() <= 400) {
                $('#share_button').addClass('share_button_mobile')
                $('#share_button_1').addClass('share_button_mobile')
            } else {
                $('#share_button').removeClass('share_button_mobile')
                $('#share_button_1').removeClass('share_button_mobile')
            }
        });

        $(document).ready(function () {
            if ($('body').width() <= 400) {
                $('#share_button').addClass('share_button_mobile')
                $('#share_button_1').addClass('share_button_mobile')
            } else {
                $('#share_button').removeClass('share_button_mobile')
                $('#share_button_1').removeClass('share_button_mobile')
            }
        });

        function getDateText(date) {

            var today = $.datepicker.formatDate('yy. mm. dd.', new Date());
            var yesterday = $.datepicker.formatDate('yy. mm. dd.', new Date(Date.now() - 86400000));

            if (date === today) {
                date = 'Ma';
            } else if (date === yesterday) {
                date = 'Tegnap';
            }
            return date;
        }

        function showDisplayInterval() {
            var dateAfter = $.datepicker.formatDate('yy. mm. dd.', $('#date_hide_after').datepicker('getDate'));
            dateAfter = getDateText(dateAfter);

            var dateBefore = $.datepicker.formatDate('yy. mm. dd.', $('#date_hide_before').datepicker('getDate'));
            dateBefore = getDateText(dateBefore);

            if (dateAfter === dateBefore) {
                var text = dateAfter;
            } else {
                var text = dateAfter + ' - ' + dateBefore;
            }

            $('#date_today').html(text);
        }

        $('#date_hide_after').change(function () {
            var dateAfter = $.datepicker.formatDate('yy-mm-dd', $('#date_hide_after').datepicker('getDate'));
            $('#date_hide_select_after').val(dateAfter);
            showDisplayInterval();
        });

        $('#date_hide_before').change(function () {
            var dateBefore = $.datepicker.formatDate('yy-mm-dd', $('#date_hide_before').datepicker('getDate'));
            $('#date_hide_select_before').val(dateBefore);
            showDisplayInterval();
        });

        $(".taxonomyCategoryList").click(function (event) {
            $('#taxonomyCategoryListInput').val($(this).data('id'));
            $('#search_category_all_text').text($(this).text());
        });

        $(".taxonomyCategoryList").click(function () {
            $('#taxonomyCategoryListInput').val($(this).data('id'));
            $('#allWantAdCategoryButton').text($(this).text());
        });

        $('.taxonomyCategoryList').on( 'click', function() {
            $(".searchForm").submit();
        } );

        $('.searchFieldIcon').on('click', function () {
            $(".searchForm").submit();
        });

        $('#author_search_input').keyup(function () {
            var authorValue = $('#author_search_input').val();
            if (!authorValue)
                authorValue = 'Összes';
            $('#author-name-click').text(authorValue);
        });

        $(document).ready(function () {
            if ($('div').hasClass('enews-highlighted')) {
                $('.enews-highlighted').next().addClass('enews-highlightedAfterP');
            }
        });

        /* RSSImport shortcode üres képeit javítja */
        $(document).ready(function () {
            var backgroundImage;
            $("li > div.feed-thumbnail").each(function(){
                if ( $(this).css('background-image') === "url(\"https://"+window.location.host+"/\")" ) {
                    $(this).css('background-image', "url(\"http://www.nemzetisport.hu/static/style/nso/i/nso_logo_facebook_placeholder_1200X630.png\")");
                }
            });
        });

        (function ($) {
            var duration = 30000;
            $(".marquee").each(function () {
                var elements = this.getAttribute('data-elements');
                var $this = $(this);
                var marqueeWidth = $this.width();

                if (marqueeWidth > 1307) {
                    duration = 30000;
                } else if (marqueeWidth > 839) {
                    duration = 30000 / 1.5;
                } else if (marqueeWidth > 607) {
                    duration = 30000 / 2;
                } else if (marqueeWidth > 373) {
                    duration = 30000 / 3;
                } else if (marqueeWidth < 372) {
                    duration = 10000;
                }
                $this
                    .bind("beforeStarting", function () {
                        $this.removeClass("hide-it");
                    })
                    .marquee({
                        duration: duration,
                        delayBeforeStart: 2000,
                        gap: 50,
                        delayBeforeStart: 0,
                        direction: "left",
                        duplicated: true,
                        pauseOnHover: true,
                        startVisible: true
                    });
            });
        })(jQuery);

        if ($.hasOwnProperty('datepicker')) {
            $.datepicker.regional['hu'] = {
                closeText: 'bezár',
                prevText: 'vissza',
                nextText: 'előre',
                currentText: 'ma',
                monthNames: ['Január', 'Február', 'Március', 'Április', 'Május', 'Június',
                    'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
                monthNamesShort: ['Jan', 'Feb', 'Már', 'Ápr', 'Máj', 'Jún',
                    'Júl', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec'],
                dayNames: ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'],
                dayNamesShort: ['Vas', 'Hét', 'Ked', 'Sze', 'Csü', 'Pén', 'Szo'],
                dayNamesMin: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
                weekHeader: 'Hét',
                dateFormat: 'yy.mm.dd.',
                firstDay: 1,
                isRTL: false,
                showMonthAfterYear: true,
                yearSuffix: '',
            };

            $.datepicker.setDefaults($.datepicker.regional['hu']);

            // Search

            var dateFrom = $.datepicker.formatDate('yy.mm.dd.', new Date($('#date_hide_select_after').val()));
            $('#date_hide_after').datepicker({
                weekStart: 1,
                language: "hu",
                defaultDate: dateFrom
            });

            var dateBefore = $.datepicker.formatDate('yy.mm.dd.', new Date($('#date_hide_select_before').val()));
            $('#date_hide_before').datepicker({
                weekStart: 1,
                language: "hu",
                defaultDate: dateBefore
            });
        }

        var categorySelectorWidth = $('.categorySelector').width();
        var categorySelectWidth = $('#allCategorySelectorID').width();
        if (categorySelectorWidth > categorySelectWidth) {
            $('.hiddenBorder').css('width', categorySelectWidth);
        }
        $('#taxonomyCategoryListID').on('click', function() {
            if (categorySelectorWidth > categorySelectWidth) {
                $('.hiddenBorder').css('width', categorySelectWidth);
            }
        });
    });
})(jQuery);


(function ($) {
    $.fn.selectBoxes = function (options) {
        var settings = $.extend({}, {
            maxHeight: 160,
            liHeight: 38
        }, options);

        var $this = $(this);

        $this.wrap("<div class='select'></div>");
        $this.closest('div.select').append("<div class='select-element'><span class='active-option'></span><div class='option-list' style='max-height:" + settings.maxHeight + "px;'><ul></ul></div>");

        var $activeSelect = $this.closest('div.select').find('span.active-option'),
            $optionList = $this.closest('div.select').find('.option-list ul'),
            $select = $this.closest('div.select').find('select');

        $(this).each(function (i, selectBox) {
            var optionsCount = $(this).find('option').length;

            $(this).closest('div.select').find('.option-list').css({
                "height": optionsCount * settings.liHeight
            });

            var $current = $(this);
            var $container = $('div.select'),
                $activeOption = $current.closest('div.select').find('span.active-option'),
                $selectList = $current.closest('div.select').find('.option-list ul'),
                $currentValue = $current.find('option:selected'),
                currentValue = $current.find('option:selected').html(),
                values = [];

            $current.find("option").each(function () {
                values.push([$(this).attr('value'), $(this).html()]);
            });

            for (i = 0; i < values.length; ++i) {
                $selectList.append('<li data-value="' + values[i][0] + '">' + values[i][1] + '</li>');
            }

            if (!$currentValue.length) {
                $activeOption.html(values[0][1]);
            } else {
                $activeOption.html(currentValue);
            }
        });

        $('span.active-option').on("click", function () {
            var $active = $(this);
            $active.closest('div.select').find('.option-list').toggleClass('show');
            $active.closest('div.select').toggleClass('open');
        });

        $('.option-list li').on("click", function () {
            var $option = $(this);
            var value = $option.attr("data-value");
            var text = $option.html();

            $option.closest('div.select').find('select').val(value).change();
            $option.closest('div.select').find('.active-option').html(text);
            $option.closest('div.option-list').removeClass('show');
            $('div.select').removeClass('open');
        });

        $(document).mouseup(function (e) {
            var $container = $('div.select');
            if (!$container.is(e.target) && $container.has(e.target).length === 0) {
                $container.find('div.option-list').removeClass('show');
                $container.removeClass('open');
            }
        });
    };
})(jQuery);


/* Slider clickable images - 2018.01.19. Patony */

jQuery(".et_pb_slides .et_pb_slide").each( function(){
    var cikk_href = typeof( jQuery(this).find(".et_pb_slide_description .et_pb_button_wrapper a").attr("href") ) !== 'undefined' ?
        jQuery(this).find(".et_pb_slide_description .et_pb_button_wrapper a").attr("href") :
        false;

    if ( cikk_href ) {
        jQuery(this).find(".et_pb_slide_description").on("click", function() { window.location.href = cikk_href; });
    }
});
