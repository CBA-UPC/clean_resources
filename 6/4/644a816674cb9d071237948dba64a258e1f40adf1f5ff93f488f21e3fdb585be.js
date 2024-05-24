(function (document, performance, queueName) {
    'use strict';

    var queue = window[queueName] = window[queueName] || [];

    // Tracking
    new function () {
        this.send = function (item) {
            if (typeof item === 'object' && item.url && item.data && item.data.tags && item.data.performance) {
                (new Image(0, 0)).src = item.url.replace('%data%', btoa(JSON.stringify(item.data)));
            }
        };

        this.handler = function () {
            while (queue.length > 0) {
                this.send(queue.shift());
            }
        };

        setInterval(this.handler.bind(this), 500);
    };

    // Page Performance Collector
    new function () {
        this.handler = function () {
            if (this.isPageLoaded()) {
                var i, scripts = document.querySelectorAll('script[data-tracking-url]');

                for (i = 0; i < scripts.length; i++) {
                    this.init(scripts[i]);
                }
            } else {
                setTimeout(this.handler.bind(this), 100);
            }
        };

        this.init = function (script) {
            if (script.hasAttribute('data-loaded')) {
                return;
            }

            script.setAttribute('data-loaded', true);

            queue.push({
                url: this.getUrl(script),
                data: this.collect(script)
            });
        };

        this.collect = function (script) {
            return {
                page: {
                    url: document.location.href
                },
                tags: this.getTags(script),
                performance: {
                    connectTime: this.toFixed(
                        this.toSeconds(this.getTiming('responseEnd') - this.getTiming('requestStart'))
                    ),
                    domComplete: this.toFixed(
                        this.toSeconds(this.getTiming('domComplete') - this.getTiming('navigationStart'))
                    ),
                    pageLoadTime: this.toFixed(
                        this.toSeconds(this.getTiming('loadEventEnd') - this.getTiming('navigationStart'))
                    ),
                    requestStartTime: this.toFixed(
                        this.toSeconds(this.getTiming('requestStart') - this.getTiming('navigationStart'))
                    ),
                    responseEndTime: this.toFixed(
                        this.toSeconds(this.getTiming('responseEnd') - this.getTiming('navigationStart'))
                    )
                }
            };
        };

        this.getUrl = 

        this.getTags = function (script) {
            if (script.hasAttribute('data-tracking-tags')) {
                return script.getAttribute('data-tracking-tags').split(',');
            }

            return [];
        };

        this.getTiming = 

        this.toSeconds = 

        this.toFixed = 

        this.isPageLoaded = 

        this.handler();
    };
})(window.document, window.performance, '_mgtq');
