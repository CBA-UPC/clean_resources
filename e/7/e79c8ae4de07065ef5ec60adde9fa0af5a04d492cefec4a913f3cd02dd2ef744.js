<!DOCTfor the case where `elem` is not valid,
            // such as it being `document` and for the broken ShadowDOMPolyfill script.
            // See https://git.io/vrPIf for more details.
            return window.document.defaultView.getComputedStyle(elem, null).getPropertyValue(prop);
        } catch (err) {
            return null;
        }
    };
} else {
    // IE < 9, Opera
    getCurrentStyle = function(elem, prop, camel) {
        return elem.currentStyle[prop] || elem.currentStyle[camel];
    }
}

/**
* Get the height of the document.
*
* @returns {number} - The document height
*/
function getDocumentHeight() {
    const container = document.body;
    var height = container.offsetHeight

    var marginTop = parseInt(getCurrentStyle(container, 'margin-top', 'marginTop'), 10);
    if (marginTop)
        height += marginTop;

    var marginBottom = parseInt(getCurrentStyle(container, 'margin-bottom', 'marginBottom'), 10);
    if (marginBottom)
        height += marginBottom;

    return height;
}

/**
* Starts a loop to notice changes to the page height.
*
* @param {function} cb - Function to call with new height values.
* @returns {void}
*/
function onHeightChange(cb) {
    let count = 0;
    let lastHeight = 0;

    const loop = () => {
        const currentHeight = getDocumentHeight();
        if (currentHeight !== lastHeight) {
            lastHeight = currentHeight;
            cb(currentHeight);
        }

        // We'll watch for height changes for a total of ~25.4 seconds,
        // with these intervals:
        // 100ms, 100ms, 200ms, 200ms, 400ms, 400ms, ..., 6400ms
        // The idea behind these intervals is the following:
        // - on fast websites, with small number of widgets, ad provider
        // will be loaded fast and has good chances to be visible right away,
        // so we need to detect resize quickly
        // - on slow websites it doesn't make sense to check for resize every
        // 100ms because well, they're slow and it might take more than 5sec
        // for ad provider to render. Also most likely page will be long and it
        // will take some time for user to scroll down
        /* eslint-disable no-magic-numbers */
        count += 1;
        if (count < 15)
            setTimeout(loop, 100 * Math.pow(2, Math.floor(count / 2)));
        /* eslint-enable no-magic-numbers */
    };

    loop();
}

/**
* Send a message to the host page. Mimics the format
* used by core/utils/frameBus.
*
* @param {string} name - The event name.
* @param {*} data - JSON-serializable data to send.
* @returns {void}
*/
function sendMessageToHost(name, data) {
    data = data || {};
    window.parent.postMessage(JSON.stringify({
        data,
        name,
        scope: 'host',
        sender:  window.name ,
    }), '*');
}


const POST_MESSAGE_TYPES = Object.freeze({
    click: 'click',
    errorProviderNotReady: 'error-provider-not-ready',
    errorNoHeight: 'error-no-height',
    ready: 'ready',
    resize: 'resize',
    redirect: 'redirect',
});

// The minimum height which indicates an ad has loaded.
// Height of Sponsored text and margin is 32 pixels.
const minHeight = 35;

/**
* Generates events for resizing the frame and ad loads.
*
* @param {Object} options - Options
*   {function} readyData - The data to include with the ready event.
* @returns {function} - A callback which should be called when the provider indicates the ad is ready.
*/
function startAdsLoop(readyData) {
    const startTime = new Date().getTime();

    let providerReadied = false;
    let minHeightReached = false;
    // This parameter isn't expected in the ready event so we delete it after capturing it's value.
    const sendReady = readyData.sendReady;
    delete readyData.sendReady;

    const sendReadyOnce = once(() => {
        const extraData = window._OnReadyExtraData;
        if (extraData) {
            extraData.time_to_load = new Date().getTime() - startTime;
            readyData.extraData = JSON.stringify(extraData);
        }

        sendMessageToHost(POST_MESSAGE_TYPES.ready, readyData);
    });
    const detectReadyMismatch = once(() => {
        setTimeout(() => {
            if (!providerReadied)
                sendMessageToHost(POST_MESSAGE_TYPES.errorProviderNotReady, { provider: readyData.provider });

            const heightReached = minHeightReached || getDocumentHeight() >= minHeight;
            if (!heightReached)
                sendMessageToHost(POST_MESSAGE_TYPES.errorNoHeight, { provider: readyData.provider });
        }, 100); // eslint-disable-line no-magic-numbers
    });

    onHeightChange(height => {
        if (height < minHeight)
            return;

        minHeightReached = true;
        if (sendReady) {
            sendReadyOnce();
        }
        detectReadyMismatch();
        sendMessageToHost(POST_MESSAGE_TYPES.resize, { height });
    });

    return once(() => {
        providerReadied = true;
        detectReadyMismatch();
    });
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

    const onAdLoad = startAdsLoop({
        advertisement_id: 160465,
        provider: 'runative',
        sendReady: true,
    });
    </script>
    <script>
    NativeAd({
        element_id: "rn_ad_native_sczc3",
        spot: "7bde4a562ff44144aeadb1c4b0b394cb",
        type: "label-under",
        cols: 3,
        rows: 1,
        title: "",
        titlePosition: "left",
        adsByPosition: "right",
        mobileEnabled: false,
        breakpoints: [
            {
                "cols": 1,
                "width": 400
            }
        ],
        extid: "mangawindow",
        subid: "mangawindow",
        styles: {
            "headlineLink": {
                
                "font-size": "13px",
                "font-weight": "bold"
            },
            "brandnameLink": {
                "font-size": "8px",
                "font-weight": "normal"
            }
        }
    });
    </script>

    </div>

</body>
</html>
