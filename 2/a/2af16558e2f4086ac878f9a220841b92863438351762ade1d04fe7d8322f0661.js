function init_chartbeat(){
    (function() {
        /** CONFIGURATION START **/
        window._sf_async_config = (window._sf_async_config || {});
        window._sf_async_config.uid = 21569;
        window._sf_async_config.domain = 'home.realclear'+document.querySelector('[data-site]').dataset.site+'.com'; //CHANGE THIS TO ONE OF THREE DOMAINS
        window._sf_async_config.flickerControl = false;
        window._sf_async_config.useCanonical = true;
        window._sf_async_config.useCanonicalDomain = true;
        window._sf_async_config.sections = ''; //CHANGE THIS TO YOUR SECTION NAME(s)
        window._sf_async_config.authors = ''; //CHANGE THIS TO YOUR AUTHOR NAME(s)
        /** CONFIGURATION END **/
        function loadChartbeat() {
            var e = document.createElement('script');
            var n = document.getElementsByTagName('script')[0];
            e.type = 'text/javascript';
            e.async = true;
            e.src = '//static.chartbeat.com/js/chartbeat.js';
            n.parentNode.insertBefore(e, n);
        }
        loadChartbeat();
    })();
}

export default init_chartbeat;