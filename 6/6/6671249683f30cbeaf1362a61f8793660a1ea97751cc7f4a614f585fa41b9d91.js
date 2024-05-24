!this,();

(function () {

    var PenciLazy = new LazyLoad({
        elements_selector: '.penci-lazy',
        data_bg: 'bgset',
        class_loading: 'lazyloading',
        class_entered: 'lazyloaded',
        class_loaded: 'pcloaded',
        unobserve_entered: true
    });

    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    var observer = new MutationObserver(;

    observer.observe(document, {
        subtree: true,
        attributes: true
    });
})();
