/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
export var Slick;
;(function($) {
    'use strict';
    Slick = window.Slick || {};

    Slick = ());

    Slick.prototype.activateADA = 

    Slick.prototype.addSlide = Slick.prototype.slickAdd = 

    Slick.prototype.animateHeight = 

    Slick.prototype.animateSlide = 

    Slick.prototype.getNavTarget = 

    Slick.prototype.asNavFor = 

    Slick.prototype.applyTransition = 

    Slick.prototype.autoPlay = 

    Slick.prototype.autoPlayClear = 

    Slick.prototype.autoPlayIterator = 

    Slick.prototype.buildArrows = 

    Slick.prototype.buildDots = 

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(;

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        // if (_.options.centerMode === true || _.options.swipeToSlide === true) {
        //     _.options.slidesToScroll = 1;
        // }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = 

    Slick.prototype.checkResponsive = 

    Slick.prototype.changeSlide = 

    Slick.prototype.checkNavigable = 

    Slick.prototype.cleanUpEvents = 

    Slick.prototype.cleanUpSlideEvents = 

    Slick.prototype.cleanUpRows = 

    Slick.prototype.clickHandler = 

    Slick.prototype.destroy = 

    Slick.prototype.disableTransition = 

    Slick.prototype.fadeSlide = 

    Slick.prototype.fadeSlideOut = 

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = 

    Slick.prototype.focusHandler = 

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = 

    Slick.prototype.getDotCount = 

    Slick.prototype.getLeft = 

    Slick.prototype.getOption = Slick.prototype.slickGetOption = 

    Slick.prototype.getNavigableIndexes = 

    Slick.prototype.getSlick = 

    Slick.prototype.getSlideCount = 

    Slick.prototype.goTo = Slick.prototype.slickGoTo = 

    Slick.prototype.init = 

    Slick.prototype.initADA = 

    Slick.prototype.initArrowEvents = 

    Slick.prototype.initDotEvents = 

    Slick.prototype.initSlideEvents = 

    Slick.prototype.initializeEvents = 

    Slick.prototype.initUI = 

    Slick.prototype.keyHandler = 

    Slick.prototype.lazyLoad = 

    Slick.prototype.loadSlider = 

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = 

    Slick.prototype.pause = Slick.prototype.slickPause = 

    Slick.prototype.play = Slick.prototype.slickPlay = 

    Slick.prototype.postSlide = 

    Slick.prototype.prev = Slick.prototype.slickPrev = 

    Slick.prototype.preventDefault = 

    Slick.prototype.progressiveLazyLoad = 

    Slick.prototype.refresh = 

    Slick.prototype.registerBreakpoints = 

    Slick.prototype.reinit = 

    Slick.prototype.resize = 

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = 

    Slick.prototype.setCSS = 

    Slick.prototype.setDimensions = 

    Slick.prototype.setFade = 

    Slick.prototype.setHeight = 

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = 

    Slick.prototype.setPosition = 

    Slick.prototype.setProps = 


    Slick.prototype.setSlideClasses = 

    Slick.prototype.setupInfinite = 

    Slick.prototype.interrupt = 

    Slick.prototype.selectHandler = 

    Slick.prototype.slideHandler = 

    Slick.prototype.startLoad = 

    Slick.prototype.swipeDirection = 

    Slick.prototype.swipeEnd = 

    Slick.prototype.swipeHandler = 

    Slick.prototype.swipeMove = 

    Slick.prototype.swipeStart = 

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = 

    Slick.prototype.unload = 

    Slick.prototype.unslick = 

    Slick.prototype.updateArrows = 

    Slick.prototype.updateDots = 

    Slick.prototype.visibility = 

    $.fn.slick = 

}));
