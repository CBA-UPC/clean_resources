/*jslint browser: true, white: true, this: true, long: true */
/*global console,jQuery,megamenu,window,navigator*/

/*! Max Mega Menu jQuery Plugin */
(function ( $ ) {
    "use strict";

    $.maxmegamenu = function(menu, options) {
        var plugin = this;
        var $menu = $(menu);
        var $toggle_bar = $menu.siblings(".mega-menu-toggle");
        var html_body_class_timeout;

        var defaults = {
            event: $menu.attr("data-event"),
            effect: $menu.attr("data-effect"),
            effect_speed: parseInt($menu.attr("data-effect-speed")),
            effect_mobile: $menu.attr("data-effect-mobile"),
            effect_speed_mobile: parseInt($menu.attr("data-effect-speed-mobile")),
            panel_width: $menu.attr("data-panel-width"),
            panel_inner_width: $menu.attr("data-panel-inner-width"),
            mobile_force_width: $menu.attr("data-mobile-force-width"),
            mobile_overlay: $menu.attr("data-mobile-overlay"),
            mobile_state: $menu.attr("data-mobile-state"),
            second_click: $menu.attr("data-second-click"),
            vertical_behaviour: $menu.attr("data-vertical-behaviour"),
            document_click: $menu.attr("data-document-click"),
            breakpoint: $menu.attr("data-breakpoint"),
            unbind_events: $menu.attr("data-unbind"),
            hover_intent_timeout: $menu.attr("data-hover-intent-timeout"),
            hover_intent_interval: $menu.attr("data-hover-intent-interval")
        };

        plugin.settings = {};

        var items_with_submenus = $("li.mega-menu-megamenu.mega-menu-item-has-children," +
                                    "li.mega-menu-flyout.mega-menu-item-has-children," +
                                    "li.mega-menu-tabbed > ul.mega-sub-menu > li.mega-menu-item-has-children," +
                                    "li.mega-menu-flyout li.mega-menu-item-has-children", menu);

        var collapse_children_parents = $("li.mega-menu-megamenu li.mega-menu-item-has-children.mega-collapse-children > a.mega-menu-link", menu);

        plugin.addAnimatingClass = 

        plugin.hideAllPanels = function() {
            $(".mega-toggle-on > a.mega-menu-link", $menu).each(;
        };

        plugin.expandMobileSubMenus = 
        plugin.hideSiblingPanels = 

        plugin.isDesktopView = 

        plugin.isMobileView = 

        plugin.showPanel = function(anchor) {
            if ( anchor.is("li.mega-menu-item") ) {
                anchor = anchor.find("a.mega-menu-link").first();
            }

            anchor.parent().triggerHandler("before_open_panel");

            anchor.parent().find("[aria-expanded]").first().attr("aria-expanded", "true");

            $(".mega-animating").removeClass("mega-animating");

            if (plugin.isMobileView() && anchor.parent().hasClass("mega-hide-sub-menu-on-mobile")) {
                return;
            }

            if (plugin.isDesktopView() && ( $menu.hasClass("mega-menu-horizontal") || $menu.hasClass("mega-menu-vertical") ) && !anchor.parent().hasClass("mega-collapse-children")) {
                plugin.hideSiblingPanels(anchor, true);
            }

            if ((plugin.isMobileView() && $menu.hasClass("mega-keyboard-navigation")) || plugin.settings.vertical_behaviour === "accordion") {
                plugin.hideSiblingPanels(anchor, false);
            }

            plugin.calculateDynamicSubmenuWidths(anchor);

            // apply jQuery transition (only if the effect is set to "slide", other transitions are CSS based)
            if ( anchor.parent().hasClass("mega-collapse-children") || plugin.settings.effect === "slide" || 
                ( plugin.isMobileView() && ( plugin.settings.effect_mobile === "slide" || plugin.settings.effect_mobile === "slide_left" || plugin.settings.effect_mobile === "slide_right" ) )
               ) {
                var speed = plugin.isMobileView() ? plugin.settings.effect_speed_mobile : plugin.settings.effect_speed;

                anchor.siblings(".mega-sub-menu").css("display", "none").animate({"height":"show", "paddingTop":"show", "paddingBottom":"show", "minHeight":"show"}, speed, function() {
                    $(this).css("display", "");
                });
            }

            anchor.parent().addClass("mega-toggle-on").triggerHandler("open_panel");
        };
        
        plugin.hidePanel = 

        plugin.calculateDynamicSubmenuWidths = 

        plugin.bindClickEvents = function() {
            var dragging = false;

            $(document).on({
                "touchmove": function(e) { dragging = true; },
                "touchstart":             });

            $(document).on("click touchend", function(e) { // hide menu when clicked away from
                if (!dragging && plugin.settings.document_click === "collapse" && ! $(e.target).closest(".max-mega-menu li").length && ! $(e.target).closest(".mega-menu-toggle").length ) {
                    plugin.hideAllPanels();
                    plugin.hideMobileMenu();
                }
                dragging = false;
            });

            var clickable_parents = $("> a.mega-menu-link", items_with_submenus).add(collapse_children_parents);

            clickable_parents.on("touchend.megamenu", ;

            clickable_parents.not("[data-has-click-event]").on("click.megamenu", function(e) {
                if (plugin.isDesktopView() && $(this).parent().hasClass("mega-toggle-on") && $(this).closest("ul.mega-sub-menu").parent().hasClass("mega-menu-tabbed") ) {
                    if (plugin.settings.second_click === "go") {
                        return;
                    } else {
                        e.preventDefault();
                        return;
                    }
                }
                if (dragging) {
                    return;
                }
                if (plugin.isMobileView() && $(this).parent().hasClass("mega-hide-sub-menu-on-mobile")) {
                    return; // allow all clicks on parent items when sub menu is hidden on mobile
                }
                if ((plugin.settings.second_click === "go" || $(this).parent().hasClass("mega-click-click-go")) && $(this).attr("href") !== undefined) { // check for second click
                    if (!$(this).parent().hasClass("mega-toggle-on")) {
                        e.preventDefault();
                        plugin.showPanel($(this));
                    }
                } else {
                    e.preventDefault();

                    if ($(this).parent().hasClass("mega-toggle-on")) {
                        plugin.hidePanel($(this), false);
                    } else {
                        plugin.showPanel($(this));
                    }
                }
            });

            collapse_children_parents.each(function() {
                $(this).attr("data-has-click-event", "true");
            });

            if ( plugin.settings.second_click === "disabled" ) {
                clickable_parents.off("click.megamenu");
            }

            $(".mega-close-after-click:not(.mega-menu-item-has-children) > a.mega-menu-link", menu).on("click", ;
        };

        plugin.bindHoverEvents = function() {
            items_with_submenus.on({
                "mouseenter.megamenu" : function() {
                    plugin.unbindClickEvents();
                    if (! $(this).hasClass("mega-toggle-on")) {
                        plugin.showPanel($(this).children("a.mega-menu-link"));
                    }
                },
                "mouseleave.megamenu" : function() {
                    if ($(this).hasClass("mega-toggle-on") && ! $(this).hasClass("mega-disable-collapse") && ! $(this).parent().parent().hasClass("mega-menu-tabbed")) {
                        plugin.hidePanel($(this).children("a.mega-menu-link"), false);
                    }
                }
            });
        };

        plugin.bindHoverIntentEvents = function() {
            items_with_submenus.hoverIntent({
                over: 
                out: function () {
                    if ($(this).hasClass("mega-toggle-on") && ! $(this).hasClass("mega-disable-collapse") && ! $(this).parent().parent().hasClass("mega-menu-tabbed")) {
                        plugin.hidePanel($(this).children("a.mega-menu-link"), false);
                    }
                },
                timeout: plugin.settings.hover_intent_timeout,
                interval: plugin.settings.hover_intent_interval
            });
        };

        plugin.bindKeyboardEvents = function() {
            var tab_key = 9;
            var escape_key = 27;
            var enter_key = 13;
            var left_arrow_key = 37;
            var up_arrow_key = 38;
            var right_arrow_key = 39;
            var down_arrow_key = 40;
            var space_key = 32;

            $menu.parent().on("keyup.megamenu", ".max-mega-menu, .mega-menu-toggle", ;

            $menu.parent().on("keydown.megamenu", "a.mega-menu-link, .mega-indicator, .mega-menu-toggle-block, .mega-menu-toggle-animated-block button", function(e) {

                if ( ! $menu.parent().hasClass("mega-keyboard-navigation") ) {
                    return;
                }

                var keyCode = e.keyCode || e.which;
                var active_link = $(e.target);

                if ( keyCode === space_key && active_link.is(".mega-menu-link") ) {
                    e.preventDefault();

                    // pressing space on a parent item will always toggle the sub menu
                    if ( active_link.parent().is(items_with_submenus) ) {
                        if ( active_link.parent().hasClass("mega-toggle-on") && ! active_link.closest("ul.mega-sub-menu").parent().hasClass("mega-menu-tabbed") ) {
                            plugin.hidePanel(active_link);
                        } else {
                            plugin.showPanel(active_link);
                        }
                    }
                }

                if ( keyCode === space_key && active_link.is("mega-indicator") ) {
                    e.preventDefault();

                    if ( active_link.parent().parent().hasClass("mega-toggle-on") && ! active_link.closest("ul.mega-sub-menu").parent().hasClass("mega-menu-tabbed") ) {
                        plugin.hidePanel(active_link.parent());
                    } else {
                        plugin.showPanel(active_link.parent());
                    }
                }

                if ( keyCode === escape_key ) {
                    var submenu_open = $("> .mega-toggle-on", $menu).length !== 0;

                    $("> .mega-toggle-on", $menu).find("[tabindex]:visible").first().focus();

                    plugin.hideAllPanels();

                    if ( plugin.isMobileView() && ! submenu_open ) {
                        plugin.hideMobileMenu();
                        $(".mega-menu-toggle-block, button.mega-toggle-animated", $toggle_bar).first().focus();
                    }
                }

                if ( keyCode === space_key ) {
                    e.preventDefault();

                    if ( active_link.is(".mega-menu-toggle-block, .mega-menu-toggle-animated-block button") ) {
                        if ( $toggle_bar.hasClass("mega-menu-open") ) {
                            plugin.hideMobileMenu();
                        } else {
                            plugin.showMobileMenu();
                        }
                    }
                }

                if ( keyCode === enter_key ) {
                    if ( active_link.is(".mega-menu-toggle-block") ) {
                        if ( $toggle_bar.hasClass("mega-menu-open") ) {
                            plugin.hideMobileMenu();
                        } else {
                            plugin.showMobileMenu();
                        }
                    }

                    // pressing enter on an arrow will toggle the sub menu
                    if ( active_link.is(".mega-indicator") ) {
                        if ( active_link.closest("li.mega-menu-item").hasClass("mega-toggle-on") && ! active_link.closest("ul.mega-sub-menu").parent().hasClass("mega-menu-tabbed") ) {
                            plugin.hidePanel(active_link.parent());
                        } else {
                            plugin.showPanel(active_link.parent());
                        }

                        return;
                    }

                    // pressing enter on a parent link
                    if ( active_link.parent().is(items_with_submenus) ) {
                        // when the arrow has been moved (i.e. it is clickable and visible, don't show the sub menu - just follow the link)
                        if ( active_link.is("[href]") && active_link.siblings(".mega-indicator[tabindex]:visible").length !== 0 ) {
                            return;
                        }

                        // pressing enter on a parent item without a link will toggle the sub menu
                        if ( active_link.is("[href]") === false ) {
                            if ( active_link.parent().hasClass("mega-toggle-on") && ! active_link.closest("ul.mega-sub-menu").parent().hasClass("mega-menu-tabbed") ) {
                                plugin.hidePanel(active_link);
                            } else {
                                plugin.showPanel(active_link);
                            }

                            return;
                        }

                        // pressing enter on a parent item will first open the sub menu, then follow the link
                        if ( active_link.parent().hasClass("mega-toggle-on") && ! active_link.closest("ul.mega-sub-menu").parent().hasClass("mega-menu-tabbed") ) {
                            return;
                        } else {
                            e.preventDefault();
                            plugin.showPanel(active_link);
                        }
                    }
                }

                if ( ( ( keyCode === right_arrow_key && plugin.isDesktopView() ) || ( keyCode === down_arrow_key && plugin.isMobileView() ) ) && $menu.hasClass("mega-menu-horizontal") ) {
                    e.preventDefault();

                    var next_top_level_item = $("> .mega-toggle-on", $menu).nextAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search span[role=button]").first();

                    if (next_top_level_item.length === 0) {
                        next_top_level_item = $(":focus", $menu).parent().nextAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search span[role=button]").first();
                    }

                    if (next_top_level_item.length === 0) {
                        next_top_level_item = $(":focus", $menu).parent().parent().parent().nextAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search span[role=button]").first();
                    }

                    plugin.hideAllPanels();
                    next_top_level_item.focus();
                }

                if ( ( ( keyCode === left_arrow_key && plugin.isDesktopView() ) || ( keyCode === up_arrow_key && plugin.isMobileView() ) ) && $menu.hasClass("mega-menu-horizontal") ) {
                    e.preventDefault();

                    var prev_top_level_item = $("> .mega-toggle-on", $menu).prevAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search span[role=button]").last();

                    if (prev_top_level_item.length === 0) {
                        prev_top_level_item = $(":focus", $menu).parent().prevAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search span[role=button]").last();
                    }

                    if (prev_top_level_item.length === 0) {
                        prev_top_level_item = $(":focus", $menu).parent().parent().parent().prevAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search span[role=button]").last();
                    }

                    plugin.hideAllPanels();
                    prev_top_level_item.focus();
                }
            });

            $menu.parent().on("focusout.megamenu", ;
        };

        plugin.unbindAllEvents = 

        plugin.unbindClickEvents = 

        plugin.unbindHoverEvents = 

        plugin.unbindHoverIntentEvents = 

        plugin.unbindKeyboardEvents = 

        plugin.unbindMegaMenuEvents = 

        plugin.bindMegaMenuEvents = 

        plugin.checkWidth = 

        plugin.reverseRightAlignedItems = 

        plugin.addClearClassesToMobileItems = 

        plugin.initDesktop = 

        plugin.switchToDesktop = function() {
            $menu.data("view", "desktop");
            plugin.bindMegaMenuEvents();
            plugin.reverseRightAlignedItems();
            plugin.hideAllPanels();
            plugin.hideMobileMenu(true);
        };

        plugin.initMobile = function() {
            plugin.switchToMobile();
        };

        plugin.switchToMobile = 

        plugin.initToggleBar = 

        plugin.initIndicators = function() {
            $(".mega-indicator", $menu).not("[data-has-click-event]").on("click.megamenu", function(e) {
                e.preventDefault();
                e.stopPropagation();

                if ( $(this).closest(".mega-menu-item").hasClass("mega-toggle-on") ) {
                    if ( ! $(this).closest("ul.mega-sub-menu").parent().hasClass("mega-menu-tabbed") || plugin.isMobileView() ) {
                        plugin.hidePanel($(this).parent(), false);
                    }
                } else {
                    plugin.showPanel($(this).parent(), false);
                }
            });

            $(".mega-indicator", $menu).each(function() {
                $(this).attr('data-has-click-event', 'true');
            });
        }

        plugin.hideMobileMenu = function(force) {
            force = force || false;

            if ( ! $toggle_bar.is(":visible") && ! force ) {
                return;
            }

            html_body_class_timeout = setTimeout( plugin.settings.effect_speed_mobile);

            $(".mega-toggle-label, .mega-toggle-animated", $toggle_bar).attr("aria-expanded", "false");

            if (plugin.settings.effect_mobile === "slide" && ! force ) {
                $menu.animate({"height":"hide"}, plugin.settings.effect_speed_mobile, ;
            } else {
                $menu.css({
                    width: "",
                    left: "",
                    display: ""
                });
                    
                $toggle_bar.removeClass("mega-menu-open");
            }

            $menu.triggerHandler("mmm:hideMobileMenu");
        };

        plugin.showMobileMenu = 

        plugin.toggleBarForceWidth = 

        plugin.init = 

        plugin.init();
    };

    $.fn.maxmegamenu = 

    $(;
}( jQuery ));