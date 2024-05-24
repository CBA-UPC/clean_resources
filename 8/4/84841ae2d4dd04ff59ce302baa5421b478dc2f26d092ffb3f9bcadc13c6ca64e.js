// ToDo - Delete zfh files in examples/ZionWebVanilla/public/testManagerScripts
/**
 * Loader for side scripts
 * @type {{snowplowLoaderScript: Window.zionFlagManager.snowplowLoaderScript, start: Window.zionFlagManager.start}}
 */

(() => {
    let __collector_top_domain = 'cnn.com';
    let __collector_sub_domain = ((ZION.environment);
    const snowplowConfig = {
        anonymousTracking: false,
        appId: 'cnn.com',
        context_optimizelyXSummary: true,
        eventIgnoreList: ['ComponentOffScreen'],
        spTrackerUrl: 'https://z.cdp-dev.cnn.com/sp/current/zion-sp.js',
        collectorUrl: `//${__collector_sub_domain}.${__collector_top_domain}`,
    };
    console.log(`collectorUrl ${snowplowConfig.collectorUrl}`);
    window.zion_analytics.initialize(snowplowConfig);
})();

window.zionFeatureManager = {
    feature0Script: function(variant) {},
    feature1Script: function(variant) {
        // console.log(`running script 1: with variant ${variant}`);
    },
    feature2Script: function(variant) {},
    feature3Script: function(variant) {
        // console.log(`running script 3: with variant ${variant}`);
    },
    feature4Script: function(variant) {
        // console.log(`running script 4: with variant ${variant}`);
    },
    feature5Script: function(variant) {
        // console.log(`running script 5: with variant ${variant}`);
    },
    feature6Script: function(variant) {
        // console.log(`running script 6: with variant ${variant}`);
    },
    feature7Script: function(variant) {
        // console.log(`running script 7: with variant ${variant}`);
    },
    feature8Script: function(variant) {
        // console.log(`running script 8: with variant ${variant}`);
    },
    feature9Script: 
    start: function(featureObjects, config) {
        window.zionFlagManagerDebug = function(message, type) {
            if (config.debug) {
                switch (type) {
                    case 'table':
                        console.table(message);
                        break;
                    case 'error':
                        console.error(message);
                        break;
                    default:
                        console.info(message);
                        break;
                }
            }
        };
        window.zionFlagManagerDebug(featureObjects, 'table');
        try {
            if (Object.prototype.toString.call(featureObjects) === '[object Object]') {
                Object.keys(featureObjects).forEach(featureKey => {
                    if (featureKey === '0') {
                        this.feature0Script(featureObjects[featureKey]);
                    }
                    if (featureKey === '1') {
                        this.feature1Script(featureObjects[featureKey]);
                    }
                    if (featureKey === '2') {
                        this.feature2Script(featureObjects[featureKey]);
                    }
                    if (featureKey === '3') {
                        this.feature3Script(featureObjects[featureKey]);
                    }
                    if (featureKey === '4') {
                        this.feature4Script(featureObjects[featureKey]);
                    }
                    if (featureKey === '5') {
                        this.feature5Script(featureObjects[featureKey]);
                    }
                    if (featureKey === '6') {
                        this.feature6Script(featureObjects[featureKey]);
                    }
                    if (featureKey === '7') {
                        this.feature7Script(featureObjects[featureKey]);
                    }
                    if (featureKey === '8') {
                        this.feature8Script(featureObjects[featureKey]);
                    }
                    if (featureKey === '9') {
                        this.feature9Script(featureObjects[featureKey]);
                    }
                });
            }
        } catch (e) {
            window.zionFlagManagerDebug(e, 'error');
        }
    },
};
(() => {
    function processSPId(eventQueue) {
        const event = eventQueue[eventQueue.length - 1];
        if (event && event.message) {
            const message = event.message;
            if (message.idType === 'sp_zaid' && message.value) {
                // window.zionFlagManagerDebug(message)
                window.ZION_MESSAGE_BUS.publish('id_found', { type: message.idType, value: message.value });
            }
        }
    }
    let x = window.ZION_MESSAGE_BUS.subscribe('test', ;
    if (x && x.test && x.test.messageQueue && x.test.messageQueue.length > 0) {
        processSPId(x.test.messageQueue);
    }
})();
