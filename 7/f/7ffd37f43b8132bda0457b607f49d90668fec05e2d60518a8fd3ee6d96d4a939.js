
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
pbjs.que.push(function () {
    pbjs.setConfig({
        targetingControls: {
            addTargetingKeys: ['ADOMAIN']
        },
        sizeConfig: [{
            'mediaQuery': '(min-width: 1025px)',
            'sizesSupported': desktopSizes,
            'labels': ['desktop']
        }, {
            'mediaQuery': '(min-width: 768px) and (max-width: 1024px)',
            'sizesSupported': tabletSizes,
            'labels': ['tablet']
        }, {
            'mediaQuery': '(min-width: 320px) and (max-width: 812px)',
            'sizesSupported': phoneSizes,
            'labels': ['phone']
        }],
        useBidCache: true,
        userSync: {
            iframeEnabled: true,
            filterSettings: {
                iframe: {
                    bidders: "*", //['pubmatic','openx','teads']
                    filter: 'include'
                }
            },
            userIds: [
                {
                    name: 'teadsId',
                    params: {
                        pubId: 11503
                    },
                }, {
                    name: "criteo",
                }],
            syncDelay: 6000
        },
        priceGranularity: "auto",
        enableSendAllBids: true,
        bidderSequence: "random",
        pageUrl: document.location.href,
        //maxRequestsPerOrigin: 6
    });
});

pbjs.bidderSettings = {
    standard: {
        storageAllowed: true,
    },
    pubmatic: {
        storageAllowed: true,
        bidCpmAdjustment: 
    },
    rubicon: {
        storageAllowed: true,
        bidCpmAdjustment: 
    },
    openx: {
        storageAllowed: true,
        alwaysUseBid: true,
        adserverTargeting: [{
            key: "oxb",
            val: function (bidResponse) {
                var bid;
                if (bidResponse.cpm < 1) {
                    bid = ((Math.floor(bidResponse.cpm * 20) / 20) * 100).toFixed(0);
                } else if (bidResponse.cpm < 5) {
                    bid = ((Math.floor(bidResponse.cpm * 10) / 10) * 100).toFixed(0);
                } else if (bidResponse.cpm < 20) {
                    bid = ((Math.floor(bidResponse.cpm * 2) / 2) * 100).toFixed(0);
                } else {
                    bid = "2000";
                }
                return bidResponse.width + "x" + bidResponse.height + "_" + bid;
            }
        }]
    }
};

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

//apstag init config
!function (a9, a, p, s, t, A, g) { if (a[a9]) return; a[a9] = { init: function () { q("i", arguments) }, fetchBids: function () { q("f", arguments) }, setDisplayBids:  targetingKeys:  dpa: function () { q("di", arguments) }, rpa: function () { q("ri", arguments) }, upa:  _Q: [] }; }("apstag", window);
apstag.init({
    pubID: '3281',
    adServer: 'googletag'
});
var parsedUrl = new URL(window.location.href);
if (parsedUrl.searchParams.get("bcid") !== null) {
    var tokenConfig = {
        hashedRecords: [{
            type: 'email',
            record: parsedUrl.searchParams.get("bcid")
        }]
    }
    apstag.rpa(tokenConfig);

}
function fetchHeaderBids(apstagSlots, adUnits) {

    var TIMEOUT = 2500;

    //declare bidders
    var bidders = ['a9', 'prebid'];

    // create a requestManager to keep track of bidder state to determine when to send ad server
    // request and what apstagSlots to request from the ad server
    var requestManager = {
        adserverRequestSent: false,
        apstagSlots: apstagSlots,
        adUnits: adUnits
    };

    //loop through bidder array and add the bidders to the request manager:
    bidders.forEach(;

    // return true if all bidders have returned
    function allBiddersBack() {

        var allBiddersBack = bidders
            // get the booleans from the object
            .map(
            // get rid of false values - indicates that the bidder has responded
            .filter(Boolean)
            // if length is equal to bidders, all bidders are back
            .length === bidders.length;
        return allBiddersBack;
    }

    // handler for header bidder responses
    function headerBidderBack(bidder) {
        // return early if request to adserver is already sent
        if (requestManager.adserverRequestSent === true) {
            return;
        }
        // set the bidder targeting and flip bidder back flag
        if (bidder === 'a9') {
            requestManager.a9 = true;
        } else if (bidder === 'prebid') {
            requestManager.prebid = true;
        }

        // if all bidders are back, send the request to the ad server
        if (allBiddersBack()) {
            console.log("%call bids are back", "color: blue");
            sendAdserverRequest();
        }
    }

    // actually get ads from DFP
    function sendAdserverRequest() {

        // return early if request already sent
        if (requestManager.adserverRequestSent === true) {
            return;
        }

        // flip the boolean that keeps track of whether the adserver request was sent
        requestManager.adserverRequestSent = true;

        // make ad request to DFP
        googletag.cmd.push(function () {
            apstag.setDisplayBids();
            pbjs.setTargetingForGPTAsync();
            console.log("sending bids to gampad");
            googletag.pubads().refresh();
        });
    }

    function requestBids() {
        console.log("request PREBID bids");
        // request bids from prebid
        pbjs.que.push(function () {
            pbjs.addAdUnits(requestManager.adUnits);
            pbjs.requestBids({
                //labels: pjLabels,
                bidsBackHandler: function (bidResponses) {
                    console.log("bids came back from PREBID");
                    headerBidderBack('prebid');
                }
            });
        });
        console.log("request APS bids");
        // fetch bids from APS
        apstag.fetchBids({
            slots: requestManager.apstagSlots
        }, function (bids) {

            console.log("%cbids came back from APS", "color: green");
            headerBidderBack('a9');
        });
    }

    requestBids();
    // set timeout to send request to call sendAdserverRequest() after timeout 
    // if all bidders haven't returned before then
    window.setTimeout( TIMEOUT);
}

fetchHeaderBids(apstagSlots, adUnits);