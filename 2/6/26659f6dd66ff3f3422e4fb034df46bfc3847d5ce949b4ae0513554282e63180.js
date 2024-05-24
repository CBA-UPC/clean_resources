// ===== Header Bidding Wrapper Solution by ProfitSence ==== //

var PREBID_TIMEOUT = 1000;
var FAILSAFE_TIMEOUT = 3000;

// Default adUnits array
var adUnits = [];

// ======== DO NOT EDIT BELOW THIS LINE =========== //
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(;

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

// Loop through adUnits array and add them to Prebid
adUnits.forEach(function (unit) {
  pbjs.que.push(function () {
    pbjs.addAdUnits([unit]);
    pbjs.requestBids({
      bidsBackHandler: initAdserver,
      timeout: PREBID_TIMEOUT,
    });
  });
});


// In case PBJS doesn't load
setTimeout( FAILSAFE_TIMEOUT);
