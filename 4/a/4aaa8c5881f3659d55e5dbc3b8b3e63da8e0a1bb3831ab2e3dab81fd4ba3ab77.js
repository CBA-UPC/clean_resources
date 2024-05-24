/* Start Teaching Aids, LLC Header Bidder Code for ABCya.com - Leaderboard Layout */
/* COPPA Verson */
/* Prebid Variable Area */

var kPrebidTimeout = 1000;                  // milliseconds
var kRefreshPollTime = 500;                // milliseconds

var gRefreshCount = 6;
var gOXRefreshCount = 2;
var gRefreshDebug = false;
var gPrebidDebug = false;
var gTrackVisibility = true;                // Turns visibility refresh when true
var gLazyLoad = false;                       // LazyLoad enabled when true
var gTrackPageVisibility = true;           // Active Tab enabled when true

var k30SecondRefreshInterval = 30000;       // milliseconds
var k45SecondRefreshInterval = 45000;       // milliseconds
var k60SecondRefreshInterval = 65000;       // milliseconds
var k90SecondRefreshInterval = 90000;       // milliseconds
var k120SecondRefreshInterval = 120000;     // milliseconds
var k180SecondRefreshInterval = 180000;     // milliseconds
var kRefreshOnDemandOnly      = 9999999999;     // milliseconds
var kDoNotRefresh = 0;

var kDefaultRefreshInterval = k180SecondRefreshInterval;
var gFloatingMobileFullWidthBreakpoint = 450;
var gFloatingFullWidthReportButton = true;

// Prebid Supply Chain nodes passed to pbjs
// sid: must match the value for this site
// contained in the AdmetricsPro sellers.json

var gSChainNodes = [ { "asi":"admetricspro.com", "sid":"733", "hp":1 }, ];

// Set the locale below to test CMP geographies, otherwise set to undefined
// to use visitor's locale set by OS and browser.

var gGDPR_forceLocale = undefined;  // set this 'fr-fr' and it will force the CMP to fire
                                    //  leave at undefined to work normal

                                    // if the next two variables are set to false the CMP will operate normal
var gGDPR_silentNoConsent = false;  // if set to true a consent window will NOT show and consent will be set to No Consent
var gGDPR_forceNoConsent = false;    // if set to true a consent will show and consent window but will inform the user
                                    // that no cookies are collected by this site
var gGDPR_NonTCFVendors = [];
var gGDPR_publisherCountryCode = "US";      // See https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 if you need something else
var gGDPR_logoURL = "https://qd.admetricspro.com/js/abcya/abcya.PNG";
var gGDPR_privacyPolicyURL = "https://www.abcya.com/privacy/";

// set this to True for COPPA or omit if non-COPPA

var gAMPChildDirectedAds = true;

// Set the publisher ID below to enable Amazon, otherwise set to undefined.

var kAmazonPublisherID =  undefined;

//d
//      'cb8cfc89-e83e-44aa-a3a2-ff78eda781ef';
// or    undefined;
// Ad slot definitions and configurations. Each of the ad units also
// needs to appear in the gAllSlotData array variable at the end of
// this section (if you create a new ad, make sure it is in gAllSlotData
// and if you remove an ad, make sure you remove it from gAllSlotData).
//

var ad970x250Leaderboard = {
        slot_adUnitPath:'/22404337467,22570185246/ABCya-Leaderboard-1',
        mediaTypes: {
                banner: {
                        sizes: [
                                [970, 250], [728, 90], [970, 90], [300, 250],
                        ]
                }
        },
        code: 'div-gpt-ad-1657882815693-0',
        bids: [

                {bidder: 'appnexus', params: {placementId: '26578055'}},
    // 728x90                
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '2504762', sizes: '2', position: 'atf'}},
    // 970x90
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '2504762', sizes: '55', position: 'atf'}},
    // 970x250
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '2504762', sizes: '57', position: 'atf'}},
    // 300x250                
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '2504762', sizes: '15', position: 'atf'}},            


                    ],
        slot_options: { disableInitialAdLoad: true, disableUntilDemanded: true, refreshInterval: k45SecondRefreshInterval, reportButtonLeft:true, ampLinkButton: false, minBrowserWidth:0 }
};


var ad320x50Leaderboard = {
        slot_adUnitPath:'/22404337467,22570185246/ABCya-Leaderboard-1-Mobile',
        mediaTypes: {
                banner: {
                        sizes: [
                                [320, 50], [300, 50],
                        ]
                }
        },
        code: 'div-gpt-ad-1658848596005-0',
        bids: [

                {bidder: 'appnexus', params: {placementId: '26578055'}},                
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '2504762', sizes: '43', position: 'atf'}},

                    ],
    slot_options: { disableInitialAdLoad: true, disableUntilDemanded: true, refreshInterval: k45SecondRefreshInterval, reportButtonLeft:true, minBrowserWidth: 0 }
};


var ad320x50Sticky = {
        slot_adUnitPath:'/22404337467,22570185246/ABCya-320x50-Sticky',
        mediaTypes: {
                banner: {
                        sizes: [
                                [320, 50], [300, 50],
                        ]
                }
        },
        code: 'div-gpt-ad-1657882967474-0',
        bids: [

                {bidder: 'appnexus', params: {placementId: '26578055'}},                
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '2504770', sizes: '43', position: 'atf'}},                

                    ],
    slot_options: { refreshInterval: k90SecondRefreshInterval, minBrowserWidth: 0, floatingImmediateInject: true, floating: true, reportButtonLeft:true, floatingXOffset: 0, floatingYOffset: 0, }
};


var ad160x600Left = {
        slot_adUnitPath:'/22404337467,22570185246/ABCya-160x600-Left-New-A',
        mediaTypes: {
                banner: {
                        sizes: [
                                [160, 600], [120, 600],
                        ]
                }
        },
        code: 'div-gpt-ad-1657882894107-0',
        bids: [

                {bidder: 'appnexus', params: {placementId: '26578055'}},                
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '2504766', sizes: '9', position: 'atf'}},

                    ],
    slot_options: { disableInitialAdLoad: true, disableUntilDemanded: true, refreshInterval: k90SecondRefreshInterval, reportButtonLeft:true, ampLinkButton: false, minBrowserWidth:0 }
};


var ad160x600Right = {
        slot_adUnitPath:'/22404337467,22570185246/ABCya-160x600-Right-New',
        mediaTypes: {
                banner: {
                        sizes: [
                                [160, 600], [120, 600],
                        ]
                }
        },
        code: 'div-gpt-ad-1657882930745-0',
        bids: [

                {bidder: 'appnexus', params: {placementId: '26578055'}},                
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '2504768', sizes: '9', position: 'atf'}},     

                    ],
    slot_options: { disableInitialAdLoad: true, disableUntilDemanded: true, refreshInterval: k90SecondRefreshInterval, reportButtonLeft:true, ampLinkButton: false, minBrowserWidth:0 }
};


var ad300x250ATF = {
        slot_adUnitPath:'/22404337467,22570185246/ABCya-300x250-ATF',
        mediaTypes: {
                banner: {
                        sizes: [
                                [300, 250],
                        ]
                }
        },
        code: 'div-gpt-ad-1692042951104-0',
        bids: [

//                {bidder: "amx", params: { tagId: "YWRtZXRyaWNzcHJvLmNvbQ" }},
                {bidder: 'appnexus', params: {placementId: '26578055'}},
//                {bidder: 'sonobi', params: { placement_id: '7d986712c77c2b01c15a' }},                                               
//                {bidder: 'nativo', params: { placementId: 'XXXXXXXXXX' }}, 
//                {bidder: 'openx', params: { delDomain: 'teachingaids-d.openx.net', unit: 'XXXXXXXXXX' }},
//                {bidder: 'pubmatic', params: {publisherId: '156858', adSlot: 'XXXXXXXXXX@300x250'}},
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '2504762', sizes: '15', position: 'atf'}},

                    ],
        slot_options: { disableInitialAdLoad: true, disableUntilDemanded: true, refreshInterval: k45SecondRefreshInterval, reportButtonLeft:true, ampLinkButton: false, minBrowserWidth:0 }
};


var ad970x250Content1 = {
        slot_adUnitPath:'/22404337467,22570185246/ABCya-970x250-Content1-New-A',
        mediaTypes: {
                banner: {
                        sizes: [
                                [970, 250], [300, 250],
                        ]
                }
        },
        code: 'div-gpt-ad-1692042934308-0',
        bids: [

//                {bidder: "amx", params: { tagId: "YWRtZXRyaWNzcHJvLmNvbQ" }},
                {bidder: 'appnexus', params: {placementId: '26578055'}},
//                {bidder: 'adagio', params: { organizationId: '1094', site: 'abcya', placement: 'ABCya-970x250-Content1', useAdUnitCodeAsAdUnitElementId: true, environment: 'desktop' }},                         
//                {bidder: 'openx', params: { delDomain: 'teachingaids-d.openx.net', unit: 'XXXXXXXXXX' }},
//                {bidder: 'pubmatic', params: {publisherId: '156858', adSlot: 'XXXXXXXXXX@728x90'}},
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '2996900', sizes: '15', position: 'atf'}},
// 970x250
//                {bidder: 'ix', params: {siteId: 'XXXXXXXXXX', size: [970, 250] }},
//                {bidder: 'nativo', params: { placementId: 'XXXXXXXXXX' }},  
//                {bidder: 'openx', params: { delDomain: 'teachingaids-d.openx.net', unit: 'XXXXXXXXXX' }},
//                {bidder: 'pubmatic', params: {publisherId: '156858', adSlot: 'XXXXXXXXXX@970x250'}},
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '2996900', sizes: '57', position: 'atf'}},


                    ],
        slot_options: { disableInitialAdLoad: true, disableUntilDemanded: true, refreshInterval: k45SecondRefreshInterval, reportButtonLeft:true, ampLinkButton: false, minBrowserWidth:0 }
};


var ad320x50Content1 = {
        slot_adUnitPath:'/22404337467,22570185246/ABCya-970x250-Content1-New-A',
        mediaTypes: {
                banner: {
                        sizes: [
                                [320, 50], [300, 50],
                        ]
                }
        },
        code: 'div-gpt-ad-1692042934308-1',
        bids: [

//                {bidder: "amx", params: { tagId: "YWRtZXRyaWNzcHJvLmNvbQ" }},
                {bidder: 'appnexus', params: {placementId: '26578055'}},
//                {bidder: 'adagio', params: { organizationId: '1094', site: 'abcya', placement: 'ABCya-970x250-Content1', useAdUnitCodeAsAdUnitElementId: true, environment: 'mobile' }},                               
//                {bidder: 'openx', params: { delDomain: 'teachingaids-d.openx.net', unit: 'XXXXXXXXXX' }},
//                {bidder: 'pubmatic', params: {publisherId: '156858', adSlot: 'XXXXXXXXXX@320x50'}},
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '2996900', sizes: '43', position: 'atf'}},

                    ],
        slot_options: { disableInitialAdLoad: true, disableUntilDemanded: true, refreshInterval: k45SecondRefreshInterval, reportButtonLeft:true, ampLinkButton: false, minBrowserWidth:0 }
};


var ad970x250Content2 = {
        slot_adUnitPath:'/22404337467,22570185246/ABCya-970x250-Content2-New-A',
        mediaTypes: {
                banner: {
                        sizes: [
                                [970, 250], [300, 250],
                        ]
                }
        },
        code: 'div-gpt-ad-1692042942697-0',
        bids: [

//                {bidder: "amx", params: { tagId: "YWRtZXRyaWNzcHJvLmNvbQ" }},
                {bidder: 'appnexus', params: {placementId: '26578055'}},
//                {bidder: 'adagio', params: { organizationId: '1094', site: 'abcya', placement: 'ABCya-970x250-Content2', useAdUnitCodeAsAdUnitElementId: true, environment: 'desktop' }},
//                {bidder: 'consumable', params: {siteId: '2000891',  networkId: '9969', unitId: '6796', unitName: 'cnsmbl-audio-728x90-slider', zoneIds: [2002273]}},                 
//                {bidder: 'openx', params: { delDomain: 'teachingaids-d.openx.net', unit: 'XXXXXXXXXX' }},
//                {bidder: 'pubmatic', params: {publisherId: '156858', adSlot: 'XXXXXXXXXX@728x90'}},
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '2996902', sizes: '15', position: 'atf'}},
// 970x250                
//                {bidder: 'nativo', params: { placementId: 'XXXXXXXXXX' }},  
//                {bidder: 'openx', params: { delDomain: 'teachingaids-d.openx.net', unit: 'XXXXXXXXXX' }},
//                {bidder: 'pubmatic', params: {publisherId: '156858', adSlot: 'XXXXXXXXXX@970x250'}},
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '2996902', sizes: '57', position: 'atf'}},


                    ],
        slot_options: { disableInitialAdLoad: true, disableUntilDemanded: true, refreshInterval: k60SecondRefreshInterval, reportButtonLeft:true, ampLinkButton: false, minBrowserWidth:0 }
};


var ad320x50Content2 = {
        slot_adUnitPath:'/22404337467,22570185246/ABCya-970x250-Content2-New-A',
        mediaTypes: {
                banner: {
                        sizes: [
                                [320, 50], [300, 50], 
                        ]
                }
        },
        code: 'div-gpt-ad-1692042942697-1',
        bids: [

//                {bidder: "amx", params: { tagId: "YWRtZXRyaWNzcHJvLmNvbQ" }},
                {bidder: 'appnexus', params: {placementId: '26578055'}},
//                {bidder: 'adagio', params: { organizationId: '1094', site: 'abcya', placement: 'ABCya-970x250-Content2', useAdUnitCodeAsAdUnitElementId: true, environment: 'mobile' }},                            
//                {bidder: 'openx', params: { delDomain: 'teachingaids-d.openx.net', unit: 'XXXXXXXXXX' }},
//                {bidder: 'pubmatic', params: {publisherId: '156858', adSlot: 'XXXXXXXXXX@320x50'}},
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '2996902', sizes: '43', position: 'atf'}},

                    ],
        slot_options: { disableInitialAdLoad: true, disableUntilDemanded: true, refreshInterval: k60SecondRefreshInterval, reportButtonLeft:true, ampLinkButton: false, minBrowserWidth:0 }
};

var ad970x250Content3 = {
        slot_adUnitPath:'/22404337467,22570185246/ABCya-970x250-Content3-New-A',
        mediaTypes: {
                banner: {
                        sizes: [
                                [970, 250], [728, 90], [970, 90], [300, 250],
                        ]
                }
        },
        code: 'div-gpt-ad-1692906502273-0',
        bids: [

                {bidder: 'appnexus', params: {placementId: '26578055'}},
    // 728x90                
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '3015798', sizes: '2', position: 'atf'}},
    // 970x90
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '3015798', sizes: '55', position: 'atf'}},
    // 970x250
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '3015798', sizes: '57', position: 'atf'}},
    // 300x250                
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '3015798', sizes: '15', position: 'atf'}},            


                    ],
        slot_options: { disableInitialAdLoad: true, disableUntilDemanded: true, refreshInterval: k90SecondRefreshInterval, reportButtonLeft:true, ampLinkButton: false, minBrowserWidth:0 }
};


var ad320x50Content3 = {
        slot_adUnitPath:'/22404337467,22570185246/ABCya-970x250-Content3-New-A',
        mediaTypes: {
                banner: {
                        sizes: [
                                [320, 50], [300, 50],
                        ]
                }
        },
        code: 'div-gpt-ad-1692906502273-1',
        bids: [

                {bidder: 'appnexus', params: {placementId: '26578055'}},                
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '3015798', sizes: '43', position: 'atf'}},

                    ],
    slot_options: { disableInitialAdLoad: true, disableUntilDemanded: true, refreshInterval: k90SecondRefreshInterval, reportButtonLeft:true, minBrowserWidth: 0 }
};

var ad970x250Content4 = {
        slot_adUnitPath:'/22404337467,22570185246/ABCya-970x250-Content4',
        mediaTypes: {
                banner: {
                        sizes: [
                                [970, 250], [728, 90], [970, 90], [300, 250],
                        ]
                }
        },
        code: 'div-gpt-ad-1692906565355-0',
        bids: [

                {bidder: 'appnexus', params: {placementId: '26578055'}},
    // 728x90                
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '3015800', sizes: '2', position: 'atf'}},
    // 970x90
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '3015800', sizes: '55', position: 'atf'}},
    // 970x250
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '3015800', sizes: '57', position: 'atf'}},
    // 300x250                
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '3015800', sizes: '15', position: 'atf'}},            


                    ],
        slot_options: { disableInitialAdLoad: true, disableUntilDemanded: true, refreshInterval: k30SecondRefreshInterval, reportButtonLeft:true, ampLinkButton: false, minBrowserWidth:0 }
};


var ad320x50Content4 = {
        slot_adUnitPath:'/22404337467,22570185246/ABCya-970x250-Content4',
        mediaTypes: {
                banner: {
                        sizes: [
                                [320, 50], [300, 50],
                        ]
                }
        },
        code: 'div-gpt-ad-1692906565355-0',
        bids: [

                {bidder: 'appnexus', params: {placementId: '26578055'}},               
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '3015800', sizes: '43', position: 'atf'}},

                    ],
    slot_options: { disableInitialAdLoad: true, disableUntilDemanded: true, refreshInterval: k30SecondRefreshInterval, reportButtonLeft:true, minBrowserWidth: 0 }
};

var ad970x250Content5 = {
        slot_adUnitPath:'/22404337467,22570185246/ABCya-970x250-Content5',
        mediaTypes: {
                banner: {
                        sizes: [
                                [970, 250], [728, 90], [970, 90], [300, 250],
                        ]
                }
        },
        code: 'div-gpt-ad-1692906618719-0',
        bids: [

                {bidder: 'appnexus', params: {placementId: '26578055'}},
    // 728x90                
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '3015802', sizes: '2', position: 'atf'}},
    // 970x90
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '3015802', sizes: '55', position: 'atf'}},
    // 970x250
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '3015802', sizes: '57', position: 'atf'}},
    // 300x250                
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '3015802', sizes: '15', position: 'atf'}},            


                    ],
        slot_options: { disableInitialAdLoad: true, disableUntilDemanded: true, refreshInterval: k30SecondRefreshInterval, reportButtonLeft:true, ampLinkButton: false, minBrowserWidth:0 }
};


var ad320x50Content5 = {
        slot_adUnitPath:'/22404337467,22570185246/ABCya-970x250-Content5',
        mediaTypes: {
                banner: {
                        sizes: [
                                [320, 50], [300, 50],
                        ]
                }
        },
        code: 'div-gpt-ad-1692906618719-0',
        bids: [

                {bidder: 'appnexus', params: {placementId: '26578055'}},                
                {bidder: 'rubicon', params: {accountId: '19254', siteId: '437282', zoneId: '3015802', sizes: '43', position: 'atf'}},

                    ],
    slot_options: { disableInitialAdLoad: true, disableUntilDemanded: true, refreshInterval: k30SecondRefreshInterval, reportButtonLeft:true, minBrowserWidth: 0 }
};

var gBrowserWidth = window.innerWidth && document.documentElement.clientWidth ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;

console.log("gBrowserWidth =" + gBrowserWidth);

var gAllSlotData = [ ad970x250Leaderboard, ad320x50Leaderboard, ad160x600Left, ad160x600Right, ad300x250ATF, ad970x250Content1, ad970x250Content2, ad970x250Content3, ad320x50Content1, ad320x50Content2, ad320x50Content3, ];


if ( document.getElementById( "div-gpt-ad-1658848596005-0") ) {
     gFloatingMobileFullWidthBreakpoint = gBrowserWidth + 10;
     gAllSlotData.push( ad320x50Sticky );
}

var gAllSlotCount =  gAllSlotData.length;

/* Coppa Verson   */
/* End Teaching Aids, LLC Header Bidder Code for ABCya.com - Leaderboard Layout */



var amp_CommandQueue = [ 
    [ "WaitForPrebidAndGPT", { } ],
    [ "ProcessLayout", { } ],
    
    [ "BuildPrebidConfig", { } ],
    [ "PrebidSetConfig", { } ],    
    
    [ "WaitForCMPs", { } ],                 
    [ "RequestBids", { timeOut: (typeof kPrebidTimeout != 'undefined') ? kPrebidTimeout : 1000 } ],            
    [ "WaitForDOMLoaded", { } ], 
    [ "CreateFloatingAds", { } ], 
    [ "DisplayAds", { } ], 
    
    [ gTrackVisibility ? "ConfigureVisibility" : "NullCommand", { } ], 
    [ gTrackVisibility ? "WaitForInitialVisibility" : "NullCommand", { } ], 
    
    [ "SetLabel", { name:"REFRESH"} ],
    [ "ScheduleSlots", { sleepTime:  (typeof kRefreshPollTime != 'undefined') ? kRefreshPollTime : 500, trackPageVisibility:  (typeof gTrackPageVisibility != 'undefined') ? gTrackPageVisibility : false } ],
    [ "RequestBids", { timeOut:  (typeof kPrebidTimeout != 'undefined') ? kPrebidTimeout : 1000 } ],
    [ "DisplayAds", { } ],
    [ "GotoLabel", { name:"REFRESH", count: (typeof gRefreshCount != 'undefined') ? gRefreshCount : 100 } ],
];



