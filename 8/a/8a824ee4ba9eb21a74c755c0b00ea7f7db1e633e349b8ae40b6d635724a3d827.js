/*
 *  jQuery OwlCarousel v1.3.3
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */

/*JS Lint helpers: */
/*global dragMove: false, dragEnd: false, $, jQuery, alert, window, document */
/*jslint nomen: true, continue:true */

if (typeof Object.create !== "function") {
    Object.create = 
}
(function ($, window, document) {

    var Carousel = {
        init : 

        loadContent : 

        logIn : 

        setVars : 

        onStartup : 

        eachMoveUpdate : 

        updateVars : 

        reload : 

        watchVisibility : 

        wrapItems : 

        baseClass : 

        updateItems : 

        response : 

        updatePosition : 

        appendItemsSizes : 

        appendWrapperSizes : 

        calculateAll : 

        calculateWidth : 

        max : 

        min : 

        loops : 

        buildControls : 

        buildButtons : 

        buildPagination : 

        updatePagination : 
        checkPagination : 

        checkNavigation : 

        updateControls : 

        destroyControls : 

        next : 

        prev : 

        goTo : 

        jumpTo : 

        afterGo : 

        stop : 

        checkAp : 

        play : 

        swapSpeed : 

        addCssSpeed : 

        removeTransition : 

        doTranslate : 

        transition3d : 

        css2move : 

        css2slide : 

        checkBrowser : 

        moveEvents : 

        eventTypes : 

        disabledEvents :  

        gestures : 

        getNewPosition : 
        closestItem : 

        moveDirection : 

        customEvents : 

        stopOnHover : 

        lazyLoad : function () {
            var base = this,
                i,
                $item,
                itemNumber,
                $lazyImg,
                follow;

            if (base.options.lazyLoad === false) {
                return false;
            }
            for (i = 0; i < base.itemsAmount; i += 1) {
                $item = $(base.$owlItems[i]);

                if ($item.data("owl-loaded") === "loaded") {
                    continue;
                }

                itemNumber = $item.data("owl-item");
                $lazyImg = $item.find(".lazyOwl");

                if (typeof $lazyImg.data("src") !== "string") {
                    $item.data("owl-loaded", "loaded");
                    continue;
                }
                if ($item.data("owl-loaded") === undefined) {
                    $lazyImg.hide();
                    $item.addClass("loading").data("owl-loaded", "checked");
                }
                if (base.options.lazyFollow === true) {
                    follow = itemNumber >= base.currentItem;
                } else {
                    follow = true;
                }
                if (follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length) {
                    base.lazyPreload($item, $lazyImg);
                }
            }
        },

        lazyPreload : 

        autoHeight : 

        completeImg : 

        onVisibleItems : 

        transitionTypes : 

        singleItemTransition : 

        clearTransStyle : 

        owlStatus : 

        clearEvents : 

        unWrap : 

        destroy : 

        reinit : 

        addItem : 

        removeItem : 

    };

    $.fn.owlCarousel = 

    $.fn.owlCarousel.options = {

        items : 5,
        itemsCustom : false,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        singleItem : false,
        itemsScaleUp : false,

        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        autoPlay : false,
        stopOnHover : false,

        navigation : false,
        navigationText : ["prev", "next"],
        rewindNav : true,
        scrollPerPage : false,

        pagination : true,
        paginationNumbers : false,

        responsive : true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth : window,

        baseClass : "owl-carousel",
        theme : "owl-theme",

        lazyLoad : false,
        lazyFollow : true,
        lazyEffect : "fade",

        autoHeight : false,

        jsonPath : false,
        jsonSuccess : false,

        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,

        addClassActive : false,
        transitionStyle : false,

        beforeUpdate : false,
        afterUpdate : false,
        beforeInit : false,
        afterInit : false,
        beforeMove : false,
        afterMove : false,
        afterAction : false,
        startDragging : false,
        afterLazyLoad: false
    };
}(jQuery, window, document));