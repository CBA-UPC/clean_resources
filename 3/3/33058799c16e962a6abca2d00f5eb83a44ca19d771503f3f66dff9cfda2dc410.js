if (window.Evergage && window.SalesforceInteractions && window.SalesforceInteractions.mcis) {
    try {
        window.SalesforceInteractions.log.warn("Aborting SDK load since the SalesforceInteractions SDK was already found on this page.");
    } catch(e) {}
} else {
window.evergageBeaconParseTimeStart = (new Date().getTime());
'use strict';var Evergage={});
window.evergageBeaconParseTimeEnd = (new Date().getTime());

(();


try {
    const CAMPAIGN_STAT_ATTRIBUTE = {
    CAMPAIGN: "data-evg-campaign-id",
    EXPERIENCE: "data-evg-experience-id",
    USER_GROUP: "data-evg-user-group",
    CLICKTHROUGH: "data-evg-clickthrough",
    IGNORE_CLICKTHROUGH: "data-evg-ignore-clickthrough",
    DISMISSAL: "data-evg-dismissal",
    ITEM: "data-evg-item-id",
    ITEM_TYPE: "data-evg-item-type"
};

const CAMPAIGN_STAT_TYPE = {
    IMPRESSION: "Impression",
    CLICKTHROUGH: "Clickthrough",
    DISMISSAL: "Dismissal"
};

const CAMPAIGN_STAT_USER_GROUP = {
    TEST: "Test",
    CONTROL: "Control"
};

document.addEventListener(Evergage.CustomEvents.OnTemplateDisplayEnd, ;

const sendImpression = 

const generateItemStats = 
const buildCampaignSelector = 
const getCampaignElementFromPayload = 

const getCampaignClickthroughAndDismissalElements = 

const sendClickthroughOrDismissal = 

const generateItemClickthroughStats = 
const bindCampaignClickthroughsAndDismissals = 

const validateOnTemplateDisplayEndEvent = 

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Campaign Stats Tracking:campaignStatsTracking.js");
    }
};


try {
    /**
 *  Personalization Flicker Defense
 */
Evergage.FlickerDefender = Evergage.FlickerDefender || (();

if (window.SalesforceInteractions && window.SalesforceInteractions.mcis) {
    window.SalesforceInteractions.mcis.FlickerDefender = Evergage.FlickerDefender;
}

if (typeof Evergage.FlickerDefender.init === "function" && (window.frameElement || {}).id !== "siteEditorFrame") {
    Evergage.FlickerDefender.init();
}

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Flicker Defender:flickerDefender.js");
    }
};


try {
    !window,[));
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Handlebars Templates:index.js");
    }
};


try {
    // syncs with @frontend/packages/ui-chrome-extension/src/constants.ts#CUSTOM_EVENT.MESSAGE_FROM_INTERACTION_STUDIO_TOOLS_GEAR
var VE_CUSTOM_EVENT_NAME = 'msg_from_interaction_studio_tools_gear';
// syncs with @frontend/packages/ui-chrome-extension/src/constants.ts#EVENT_TYPE.MESSAGE_FROM_INTERACTION_STUDIO_TOOLS_GEAR
var TO_LAUNCHER_MESSAGE_TYPE = 'nxve_messageFromInteractionStudioToolsGear';

var TO_LAUNCHER_PAYLOAD_TYPE = 'beaconSDK_domEvent';


var eventLinkId = null;

if (Evergage !== null) {
    document.addEventListener(Evergage.CustomEvents.OnInit, ;

    document.addEventListener(Evergage.CustomEvents.OnEventSend, ;

    document.addEventListener(Evergage.CustomEvents.OnEventResponse, ;
}

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: System Tools:interactionStudioTools.js");
    }
};


try {
    Evergage.Surveys = Evergage.Surveys || ((window);

if (window.SalesforceInteractions && window.SalesforceInteractions.mcis) {
    window.SalesforceInteractions.mcis.Surveys = Evergage.Surveys;
}
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Surveys:SurveyJS.js");
    }
};


try {
    (();

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Visual Editor:visualEditor.js");
    }
};


try {
var evgr = Evergage.resolvers;
var dnc = 0;

if (window.doNotTrack || navigator.doNotTrack) {
    if (window.doNotTrack == "1" || navigator.doNotTrack == "yes" || navigator.doNotTrack == "1") {
        // browser supports do-not-track, and it's enabled
        dnc = 1;
    } else {
        // browser supports do-not-track, and it's disabled
        dnc = -1;
    }
} else {
    // browser does not support do-not-track, or we can't read it
    dnc = 0;
}
if (dnc < 1) {
    SalesforceInteractions.init({
        cookieDomain: "effectv.com"
    }).then(() => { 
        console.log('v2');
        const getMCParam = () => {
            let user = SalesforceInteractions.mcis.getParameterByName("mcid");
            return user;
        };

        function getImageURL() {
            let foundImageURL;

            if (document.querySelector("meta[name='twitter:image']")) {
                foundImageURL = SalesforceInteractions.cashDom('meta[name="twitter:image"]').attr("content");
            }

            if (document.querySelector("meta[property='og:image']"))
            {
                foundImageURL = SalesforceInteractions.cashDom('meta[property="og:image"]').attr("content");
            }

            if (document.querySelector("div.featured-image img")) {
                foundImageURL = SalesforceInteractions.cashDom("div.featured-image img").attr("src");
            }

            return foundImageURL;
        }

        function didFindImageURL() {
            let foundImageURL = ["no"];

            if (document.querySelector("meta[name='twitter:image']")) {
            {
                foundImageURL = ["yes"];
            }

            if (document.querySelector("meta[property='og:image']"))
                foundImageURL = ["yes"];
            }


            if (document.querySelector("div.featured-image img")) {
                foundImageURL = ["yes"];
            }

            return foundImageURL;
        }

        let siteConfig = {
            global: {
                onActionEvent: (actionEvent) => {
                    var mcID = getMCParam();                    
                    if (mcID.length > 5) {
                        actionEvent.user = actionEvent.user || {};
                        actionEvent.user.attributes = actionEvent.user.attributes || {};
                        actionEvent.user.attributes.sfmcSubscriberID = mcID;
                    }

                    utmSource = SalesforceInteractions.mcis.getParameterByName("utm_source");
                    utmMedium = SalesforceInteractions.mcis.getParameterByName("utm_medium");
                    utmCampaign = SalesforceInteractions.mcis.getParameterByName("utm_campaign"); 

                    if (utmSource.length > 1) {
                        actionEvent.user = actionEvent.user || {};
                        actionEvent.user.attributes = actionEvent.user.attributes || {};
                        actionEvent.user.attributes.utmSource = utmSource;
                    }
                    if (utmMedium.length > 1) {
                        actionEvent.user = actionEvent.user || {};
                        actionEvent.user.attributes = actionEvent.user.attributes || {};
                        actionEvent.user.attributes.utmMedium = utmMedium;
                    }
                    if (utmCampaign.length > 1) {
                        actionEvent.user = actionEvent.user || {};
                        actionEvent.user.attributes = actionEvent.user.attributes || {};
                        actionEvent.user.attributes.utmCampaign = utmCampaign;
                    }

                    return actionEvent;
                },
                contentZones: [
                    { name: "global_popup" },
                    { name: "global_infobar" },
                    { name: "global_exit_intent" },
                    { name: "global_footer" },
                    { name: "related-posts", selector: ".related-posts"}
                ],
                listeners: []
            },
            pageTypeDefault: {
                name: "default",
                interaction: {
                    name: "Default Page"
                }
            },
            pageTypes: [
                {
                    // https://www.effectv.com/
                    name: "home",
                    isMatch: () =>  /^\/$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: "Homepage",
                    },
                },
                {
                    // https://www.effectv.com/industries/
                    name: "industries",
                    isMatch: () => /^\/industries\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: "Industries",
                    },
                },
                {
                    // https://www.effectv.com/industries/[indistry id]
                    name: "industryView",
                    isMatch: () => /^\/industries\/[a-z0-9\-_]+\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Industry",
                            id: () => SalesforceInteractions.mcis.getLastPathComponentWithoutExtension(window.location.pathname).toLowerCase(),
                            attributes: {
                                name: SalesforceInteractions.resolvers.fromMeta("og:title", (pageTitle) =>
                                    pageTitle.split("|")[0],
                                ),
                                url: SalesforceInteractions.resolvers.fromCanonical(),
                                description: SalesforceInteractions.resolvers.fromMeta("og:description")
                            }
                        }
                    },
                },
                {
                    // https://www.effectv.com/networks/
                    name: "networks",
                    isMatch: () => /^\/networks\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: "Networks",
                    },
                },
                {
                    // https://www.effectv.com/networks/[network id]
                    name: "networkView",
                    isMatch: () => /^\/networks\/[a-z0-9\-_]+\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Network",
                            id: () => SalesforceInteractions.mcis.getLastPathComponentWithoutExtension(window.location.pathname).toLowerCase(),
                            attributes: {
                                name: SalesforceInteractions.resolvers.fromMeta("og:title"),
                                url: SalesforceInteractions.resolvers.fromCanonical(),
                                description: SalesforceInteractions.resolvers.fromMeta("og:description")
                            }
                        }
                    },
                },
                {
                    // https://www.effectv.com/networks/
                    name: "markets",
                    isMatch: () => /^\/markets\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: "Markets",
                    },
                },
                {
                    // https://www.effectv.com/markets/[network id]
                    name: "marketView",
                    isMatch: () => /^\/markets\/[a-z0-9\-_]+\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Market",
                            id: () => SalesforceInteractions.mcis.getLastPathComponentWithoutExtension(window.location.pathname).toLowerCase(),
                            attributes: {
                                name: SalesforceInteractions.resolvers.fromSelector("title", (pageTitle) =>
                                    pageTitle.split(/(\s\|\s)|(\s\│\s)/)[0],
                                ),
                                url: SalesforceInteractions.resolvers.fromCanonical(),
                                description: SalesforceInteractions.resolvers.fromMeta("og:description")
                            }
                        }
                    },
                },
                {
                    // https://www.effectv.com/insights/
                    name: "insights",
                    isMatch: () => /^\/insights\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: "Insights",
                    },
                },
                {
                    // https://www.effectv.com/insights/blog
                    name: "blogs",
                    isMatch: () => /^\/insights\/blog\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: "Blog",
                    },
                },
                {
                    // https://www.effectv.com/archive/blog
                    name: "blogsCategory",
                    isMatch: () => /^\/archive\/blog\/?$/.test(window.location.pathname.toLowerCase()) && SalesforceInteractions.mcis.getParameterByName("tax_topic").length>0,
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Category",
                            id: () => SalesforceInteractions.mcis.getParameterByName("tax_topic").replace(/[\W_]+/g, '-').toLowerCase(),
                        }
                    },
                },
                {
                    // https://www.effectv.com/insights/blog/[article id]
                    name: "blogView",
                    isMatch: () => /^\/insights\/blog\/[a-z0-9\-_]+\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Article",
                            id: () => SalesforceInteractions.mcis.getLastPathComponentWithoutExtension(window.location.pathname).toLowerCase(),
                            attributes: {
                                type: "Blog",
                                name: SalesforceInteractions.resolvers.fromMeta("og:title", (pageTitle) =>
                                    pageTitle.split("|")[0],
                                ),
                                url: SalesforceInteractions.resolvers.fromCanonical(),
                                description: SalesforceInteractions.resolvers.fromMeta("og:description"),
                                imageUrl: getImageURL(),
                                published: SalesforceInteractions.resolvers.fromMeta("article:modified_time", (pageTitle) =>
                                    pageTitle.split("T")[0],
                                )
                            },
                            relatedCatalogObjects: {
                                Category: () => {
                                    const pageCats = [];
                                    const catLinks = document.querySelectorAll(".mb-0");
                                    for (var i = 0; i < catLinks.length; i++) {
                                        pageCats.push(catLinks[i].innerText.replace(/[\W_]+/g, '-').toLowerCase());
                                    }
                                    return pageCats;
                                },
                                Type: () => {
                                    return ["Blog"];
                                },
                                HasImage: didFindImageURL()
                            }
                        }
                    },
                    listeners: [
                        SalesforceInteractions.listener("click", ".social-row", (evt) => {
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: SalesforceInteractions.CatalogObjectInteractionName.ShareCatalogObject,
                                     catalogObject: {
                                        type: "Article",
                                        id: SalesforceInteractions.mcis.getLastPathComponentWithoutExtension(window.location.pathname).toLowerCase()
                                    }
                                }
                            });
                        })                      
                    ]
                },
                {
                    // https://www.effectv.com/insights/research-reports
                    name: "reports",
                    isMatch: () => /^\/insights\/research-reports\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: "Reports",
                    },
                },
                {
                    // https://www.effectv.com/archive/research-reports
                    name: "reportsCategory",
                    isMatch: () => /^\/archive\/research-reports\/?$/.test(window.location.pathname.toLowerCase()) && SalesforceInteractions.mcis.getParameterByName("tax_topic").length>0,
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Category",
                            id: () => SalesforceInteractions.mcis.getParameterByName("tax_topic").replace(/[\W_]+/g, '-').toLowerCase(),
                        }
                    },
                },
                {
                    // https://www.effectv.com/insights/research-reports/[article id]
                    name: "reportView",
                    isMatch: () => /^\/insights\/research-reports\/[a-z0-9\-_]+\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Article",
                            id: () => SalesforceInteractions.mcis.getLastPathComponentWithoutExtension(window.location.pathname).toLowerCase(),
                            attributes: {
                                type: "Report",
                                name: SalesforceInteractions.resolvers.fromMeta("og:title", (pageTitle) =>
                                    pageTitle.split("|")[0].replace(/[\[\]]+/g, ''),
                                ),
                                url: SalesforceInteractions.resolvers.fromCanonical(),
                                description: SalesforceInteractions.resolvers.fromMeta("og:description"),
                                imageUrl: getImageURL(),
                                published: SalesforceInteractions.resolvers.fromMeta("article:modified_time", (pageTitle) =>
                                    pageTitle.split("T")[0],
                                )
                            },
                            relatedCatalogObjects: {
                                Category: () => {
                                    const pageCats = [];
                                    const catLinks = document.querySelectorAll(".pills-block li a");
                                    for (var i = 0; i < catLinks.length; i++) {
                                        pageCats.push(catLinks[i].innerText.replace(/[\W_]+/g, '-').toLowerCase());
                                    }
                                    return pageCats;
                                },
                                Type: () => {
                                    return ["Report"];
                                },
                                HasImage: didFindImageURL()
                            }
                        }
                    },
                    listeners: [
                        SalesforceInteractions.listener("click", ".social-icons", (evt) => {
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: SalesforceInteractions.CatalogObjectInteractionName.ShareCatalogObject,
                                     catalogObject: {
                                        type: "Article",
                                        id: SalesforceInteractions.mcis.getLastPathComponentWithoutExtension(window.location.pathname).toLowerCase()
                                    }
                                }
                            });
                        }),
                        SalesforceInteractions.listener("click", ".button-sm", (evt) => {
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObjectDetail,
                                     catalogObject: {
                                        type: "Article",
                                        id: SalesforceInteractions.mcis.getLastPathComponentWithoutExtension(window.location.pathname).toLowerCase()
                                    }
                                }
                            });
                        })                   
                    ]
                },
                {
                    // https://www.effectv.com/insights/videos-webcasts/
                    name: "videosWebcasts",
                    isMatch: () => /^\/insights\/videos-webcasts\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: "Videos and Webcasts",
                    },
                },
                {
                    // https://www.effectv.com/insights/videos-webcasts/[article id]
                    name: "videosWebcastsView",
                    isMatch: () => /^\/insights\/videos-webcasts\/[a-z0-9\-_]+\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Article",
                            id: () => SalesforceInteractions.mcis.getLastPathComponentWithoutExtension(window.location.pathname).toLowerCase(),
                            attributes: {
                                type: "Videos Webcast",
                                name: SalesforceInteractions.resolvers.fromMeta("og:title", (pageTitle) =>
                                    pageTitle.split("|")[0].replace(/[\[\]]+/g, ''),
                                ),
                                url: SalesforceInteractions.resolvers.fromCanonical(),
                                description: SalesforceInteractions.resolvers.fromMeta("og:description"),
                                imageUrl: getImageURL(),
                                published: SalesforceInteractions.resolvers.fromMeta("article:modified_time", (pageTitle) =>
                                    pageTitle.split("T")[0],
                                )
                            },
                            relatedCatalogObjects: {
                                Category: () => {
                                    const pageCats = [];
                                    const catLinks = document.querySelectorAll(".pills-block li a");
                                    for (var i = 0; i < catLinks.length; i++) {
                                        pageCats.push(catLinks[i].innerText.replace(/[\W_]+/g, '-').toLowerCase());
                                    }
                                    return pageCats;
                                },
                                Type: () => {
                                    return ["VideosWebcast"];
                                },
                                HasImage: didFindImageURL()
                            }
                        }
                    },
                    listeners: [
                        SalesforceInteractions.listener("click", ".social-row", (evt) => {
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: SalesforceInteractions.CatalogObjectInteractionName.ShareCatalogObject,
                                     catalogObject: {
                                        type: "Article",
                                        id: SalesforceInteractions.mcis.getLastPathComponentWithoutExtension(window.location.pathname).toLowerCase()
                                    }
                                }
                            });
                        }),
                        SalesforceInteractions.listener("click", ".video-iframe", (evt) => {
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObjectDetail,
                                     catalogObject: {
                                        type: "Article",
                                        id: SalesforceInteractions.mcis.getLastPathComponentWithoutExtension(window.location.pathname).toLowerCase()
                                    }
                                }
                            });
                        })                      
                    ]
                },
                {
                    // https://www.effectv.com/case-studies/
                    name: "caseStudies",
                    isMatch: () => /^\/case-studies\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: "Case Studies",
                    },
                },
                {
                    // https://www.effectv.com/archive/case-studies/
                    name: "caseStudiesMarketBrowse",
                    isMatch: () => (/^\/archive\/case-studies\/?$/.test(window.location.pathname.toLowerCase()) && SalesforceInteractions.mcis.getParameterByName("tax_market").length > 0),
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Market",
                            id: () => SalesforceInteractions.mcis.getParameterByName("tax_market").replace(/[\W_]+/g, '-').toLowerCase(),
                        }
                    },
                },
                {
                    // https://www.effectv.com/archive/case-studies/
                    name: "caseStudiesIndustryBrowse",
                    isMatch: () => (/^\/archive\/case-studies\/?$/.test(window.location.pathname.toLowerCase()) && SalesforceInteractions.mcis.getParameterByName("tax_industries").length > 0),
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Industry",
                            id: () => SalesforceInteractions.mcis.getParameterByName("tax_industries").replace(/[\W_]+/g, '-').toLowerCase(),
                        }
                    },
                },
                {
                    // https://www.effectv.com/case-studies/[article id]
                    name: "caseStudyView",
                    isMatch: () => /^\/case-studies\/[a-z0-9\-_]+\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Article",
                            id: () => SalesforceInteractions.mcis.getLastPathComponentWithoutExtension(window.location.pathname).toLowerCase(),
                            attributes: {
                                type: "Case Study",
                                name: SalesforceInteractions.resolvers.fromMeta("og:title", (pageTitle) =>
                                    "Success Story: "+pageTitle.split("|")[0].replace(/[\[\]]+/g, ''),
                                ),
                                url: SalesforceInteractions.resolvers.fromCanonical(),
                                description: SalesforceInteractions.resolvers.fromMeta("og:description"),
                                imageUrl: getImageURL(),
                                published: SalesforceInteractions.resolvers.fromMeta("article:modified_time", (pageTitle) =>
                                    pageTitle.split("T")[0],
                                )
                            },
                            relatedCatalogObjects: {
                                Category: () => {
                                    const pageCategory = [];
                                    pageCategory.push(SalesforceInteractions.cashDom(".mb-8 span").text().toLowerCase().replace(/[\W_]+/g, "-"));
                                    return pageCategory;
                                },
                                Industry: () => {
                                    const pageIndustry = [];
                                    pageIndustry.push(SalesforceInteractions.cashDom(".mb-8 span").text().toLowerCase().replace(/[\W_]+/g, "-"));
                                    return pageIndustry;
                                },
                                Market: () => {
                                    const pageMarket = [];
                                    const marketLinksText = SalesforceInteractions.cashDom(".pills-block").text().toLowerCase().replace(/\s+/g, " ");
                                    marketLinks = marketLinksText.split(" ");
                                    for (var i = 1; i < marketLinks.length; i++) {
                                        if(i % 2 === 0) { // index is even
                                            pageMarket.push(marketLinks[i]);
                                        }
                                    }
                                    return pageMarket;
                                },
                                Type: () => {
                                    return ["CaseStudy"];
                                },
                                HasImage: didFindImageURL()
                            }
                        }
                    }
                },
                {
                    // https://www.effectv.com/contact-us/
                    name: "contactUs",
                    isMatch: () => /^\/contact-us\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: "Contact Us",
                    },
                    listeners: [
                        SalesforceInteractions.listener("change", "#mktoFirstName", () => {
                            const firstName = SalesforceInteractions.cashDom("#mktoFirstName").val();
                            if (firstName) {
                                SalesforceInteractions.sendEvent({
                                    interaction: { name: "firstName capture" },
                                    user: { attributes: { firstName: firstName } }
                                });
                            }
                        }),
                        SalesforceInteractions.listener("change", "#mktoLastName", () => {
                            const lastName = SalesforceInteractions.cashDom("#mktoLastName").val();
                            if (lastName) {
                                SalesforceInteractions.sendEvent({
                                    interaction: { name: "lastName capture" },
                                    user: { attributes: { lastName: lastName } }
                                });
                            }
                        }),
                        SalesforceInteractions.listener("change", "#Email", () => {
                            const emailAddress = SalesforceInteractions.cashDom("#Email").val();
                            if (emailAddress) {
                                SalesforceInteractions.sendEvent({
                                    interaction: { name: "emailAddress capture" },
                                    user: { identities: { emailAddress: emailAddress } }
                                });
                            }
                        }),
                        SalesforceInteractions.listener("change", "#mktoCompanyName", () => {
                            const companyName = SalesforceInteractions.cashDom("#mktoCompanyName").val();
                            if (companyName) {
                                SalesforceInteractions.sendEvent({
                                    interaction: { name: "companyName capture" },
                                    user: { attributes: { companyName: companyName } }
                                });
                            }
                        }),
                        SalesforceInteractions.listener("change", "#mktoPhone", () => {
                            const phoneNumber = SalesforceInteractions.cashDom("#mktoPhone").val();
                            if (phoneNumber) {
                                SalesforceInteractions.sendEvent({
                                    interaction: { name: "phoneNumber capture" },
                                    user: { attributes: { phoneNumber: phoneNumber } }
                                });
                            }
                        }),
                        SalesforceInteractions.listener("change", "#mktoCity", () => {
                            const submitedCity = SalesforceInteractions.cashDom("#mktoCity").val();
                            if (submitedCity) {
                                SalesforceInteractions.sendEvent({
                                    interaction: { name: "submitedCity capture" },
                                    user: { attributes: { submitedCity: submitedCity } }
                                });
                            }
                        }),
                        SalesforceInteractions.listener("change", "#mktoState", () => {
                            const submitedState = SalesforceInteractions.cashDom("#mktoState").val();
                            if (submitedState) {
                                SalesforceInteractions.sendEvent({
                                    interaction: { name: "submitedState capture" },
                                    user: { attributes: { submitedState: submitedState } }
                                });
                            }
                        }),
                        SalesforceInteractions.listener("change", "#mktoTargetDMA", () => {
                            const targetDMA = SalesforceInteractions.cashDom("#mktoTargetDMA").val();
                            if (targetDMA) {
                                SalesforceInteractions.sendEvent({
                                    interaction: { name: "targetDMA capture" },
                                    user: { attributes: { targetDMA: targetDMA } }
                                });
                            }
                        }),
                        SalesforceInteractions.listener("change", "#custom_businesstypecode", () => {
                            const businessTypeCode = SalesforceInteractions.cashDom("#custom_businesstypecode").val();
                            if (businessTypeCode) {
                                SalesforceInteractions.sendEvent({
                                    interaction: { name: "businessTypeCode capture" },
                                    user: { attributes: { businessTypeCode: businessTypeCode } }
                                });
                            }
                        }),
                        SalesforceInteractions.listener("submit", "#mktoForm_5", () => {
                            const firstName = SalesforceInteractions.cashDom("#mktoFirstName").val();
                            const lastName = SalesforceInteractions.cashDom("#mktoLastName").val();
                            const emailAddress = SalesforceInteractions.cashDom("#Email").val();
                            const companyName = SalesforceInteractions.cashDom("#mktoCompanyName").val();
                            const phoneNumber = SalesforceInteractions.cashDom("#mktoPhone").val();
                            const submitedCity = SalesforceInteractions.cashDom("#mktoCity").val();
                            const submitedState = SalesforceInteractions.cashDom("#mktoState").val();
                            const targetDMA = SalesforceInteractions.cashDom("#mktoTargetDMA").val();
                            const businessTypeCode = SalesforceInteractions.cashDom("#custom_businesstypecode").val();
                            if (emailAddress) {
                                SalesforceInteractions.sendEvent({
                                interaction: { name: "Contact Us Submited" },
                                    user: { 
                                        identities: { emailAddress: emailAddress },
                                        attributes: {
                                            firstName: firstName,
                                            lastName: lastName,
                                            companyName: companyName,
                                            phoneNumber: phoneNumber,
                                            submitedCity: submitedCity,
                                            submitedState: submitedState,
                                            targetDMA: targetDMA,
                                            businessTypeCode: businessTypeCode
                                        }
                                    },
                                });
                            }
                        })
                    ]
                },
                {
                    // https://www.effectv.com/thank-you/
                    name: "contactUsThankYou",
                    isMatch: () => /^\/thank-you\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: "Contact Us Thank You",
                    },
                },
                {
                    // https://www.effectv.com/news/
                    name: "news",
                    isMatch: () => /^\/news\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: "News",
                    },
                },
                {
                    // https://www.effectv.com/news/[article id]
                    name: "newsView",
                    isMatch: () => /^\/news\/[a-z0-9\-_]+\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Article",
                            id: () => SalesforceInteractions.mcis.getLastPathComponentWithoutExtension(window.location.pathname).toLowerCase(),
                            attributes: {
                                type: "News",
                                name: SalesforceInteractions.resolvers.fromMeta("og:title", (pageTitle) =>
                                    pageTitle.split("|")[0].replace(/[\[\]]+/g, ''),
                                ),
                                url: SalesforceInteractions.resolvers.fromCanonical(),
                                description: SalesforceInteractions.resolvers.fromMeta("og:description"),
                                imageUrl: getImageURL()
                            },
                            relatedCatalogObjects: {
                                Type: () => {
                                    return ["News"];
                                },
                                HasImage: didFindImageURL()
                            }
                        }
                    },
                    listeners: [
                        SalesforceInteractions.listener("click", ".social-row", (evt) => {
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: SalesforceInteractions.CatalogObjectInteractionName.ShareCatalogObject,
                                     catalogObject: {
                                        type: "Article",
                                        id: SalesforceInteractions.mcis.getLastPathComponentWithoutExtension(window.location.pathname).toLowerCase()
                                    }
                                }
                            });
                        })                      
                    ]
                },
                {
                    // https://www.effectv.com/advertising/[Category id]
                    name: "advertisingView",
                    isMatch: () => /^\/advertising\/[a-z0-9\-_]+\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Category",
                            id: () => SalesforceInteractions.mcis.getLastPathComponentWithoutExtension(window.location.pathname).toLowerCase(),
                            attributes: {
                                name: SalesforceInteractions.resolvers.fromMeta("og:title", (pageTitle) =>
                                    pageTitle.split("|")[0].replace(/[\[\]]+/g, ''),
                                ),
                                url: SalesforceInteractions.resolvers.fromCanonical(),
                                description: SalesforceInteractions.resolvers.fromMeta("og:description")
                            }
                        }
                    },
                    contentZones: [
                        { name: "Section1", selector: "section:nth-of-type(1)" },
                        { name: "Section2", selector: "section:nth-of-type(2)" },
                        { name: "Section3", selector: "section:nth-of-type(3)" },
                        { name: "Section4", selector: "section:nth-of-type(4)" },
                        { name: "Section5", selector: "section:nth-of-type(5)" },
                        { name: "Section6", selector: "section:nth-of-type(6)" }
                    ],
                },
                {
                    // https://www.effectv.com/insights/researchtopic/[Category id]
                    name: "topicView",
                    isMatch: () => /^\/insights\/topic\/[a-z0-9\-_]+\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Category",
                            id: () => SalesforceInteractions.mcis.getLastPathComponentWithoutExtension(window.location.pathname).toLowerCase()
                        }
                    }
                },
                {
                    // https://www.effectv.com/autoshowroom/
                    name: "autoshowroom",
                    isMatch: () => /^\/autoshowroom\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Industry",
                            id: "automotive"
                        }
                    }
                },
                {
                    // https://www.effectv.com/content/cable-news/
                    name: "cableNews",
                    isMatch: () => /^\/content\/cable-news\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Category",
                            id: "cable-news"
                        }
                    }
                },
                {
                    // https://www.effectv.com/content/cable-news/
                    name: "cableNews",
                    isMatch: () => /^\/content\/cable-news\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Category",
                            id: "cable-news"
                        }
                    }
                },
                {
                    // https://www.effectv.com/content/cable-news/
                    name: "sports",
                    isMatch: () => /^\/content\/sports\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Category",
                            id: "sports"
                        }
                    }
                },
                {
                    // https://www.effectv.com/find-your-unique-audience/
                    name: "findYourUniqueAudience",
                    isMatch: () => /^\/find-your-unique-audience\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: "Find Your Unique Audience"
                    }
                },
                {
                    // https://www.effectv.com/insights/immersive-stories/
                    name: "stories",
                    isMatch: () => /^\/insights\/immersive-stories\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: "Stories",
                    },
                },
                {
                    // https://www.effectv.com/archive/research-reports
                    name: "storiesCategory",
                    isMatch: () => /^\/archive\/immersive-stories\/?$/.test(window.location.pathname.toLowerCase()) && SalesforceInteractions.mcis.getParameterByName("tax_topic").length>0,
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Category",
                            id: () => SalesforceInteractions.mcis.getParameterByName("tax_topic").replace(/[\W_]+/g, '-').toLowerCase(),
                        }
                    },
                },
                {
                    // https://www.effectv.com/insights/research-reports/[article id]
                    name: "storiesView",
                    isMatch: () => /^\/insights\/immersive-stories\/[a-z0-9\-_]+\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Article",
                            id: () => SalesforceInteractions.mcis.getLastPathComponentWithoutExtension(window.location.pathname).toLowerCase(),
                            attributes: {
                                type: "Story",
                                name: SalesforceInteractions.resolvers.fromMeta("og:title"),
                                ),
                                url: SalesforceInteractions.resolvers.fromCanonical(),
                                description: SalesforceInteractions.resolvers.fromMeta("og:description"),
                                imageUrl: getImageURL(),
                                published: SalesforceInteractions.resolvers.fromMeta("article:modified_time"],
                                )
                            },
                            relatedCatalogObjects: {
                                Type: () => {
                                    return ["Story"];
                                },
                                HasImage: didFindImageURL()
                            }
                        }
                    }
                },
                {
                    // https://www.effectv.com/media-kit/
                    name: "mediaKit",
                    isMatch: () => /^\/media-kit\/?$/.test(window.location.pathname.toLowerCase()),
                    interaction: {
                        name: "Media Kit",
                    },
                },
                {
                    // https://www.effectv.com/reachgamers/
                    name: "reachGamers",
                    isMatch),
                    interaction: {
                        name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                        catalogObject: {
                            type: "Category",
                            id: "gamers"
                        }
                    }
                }
            ] 
        };
        //Making the MCP campaign stats visible in a datalayer
        const storedCampaignStats = []; 
        document.addEventListener(SalesforceInteractions.mcis.CustomEvents.OnStatSend, (event) => {
            const statTypeAll = event.detail.campaignStat;
            const statType = event.detail.campaignStat.stat;
            const isControl = event.detail.campaignStat.control;
            const campaignId = event.detail.campaignResponse.campaignId;
            const campaignName = event.detail.campaignResponse.campaignName;
            const campaignType = event.detail.campaignResponse.campaignType;
            const experienceId = event.detail.campaignResponse.experienceId;
            const experienceName = event.detail.campaignResponse.experienceName;
            const payload = event.detail.campaignResponse.payload;
            const state = event.detail.campaignResponse.state;
            const templateNames = event.detail.campaignResponse.templateNames;
            const type = event.detail.campaignResponse.type;
            const userGroup = event.detail.campaignResponse.userGroup;
            //Split between Clicked and Impression types for pushes
            if (campaignId && statType) {
                console.log('pushing stats to DL '+ event.detail.campaignStat.stat);
                window.dataLayer.push({
                    'event': 'MCP_'+ event.detail.campaignStat.stat,
                    'statTypeAll': statTypeAll,
                    'payload': payload,
                    'isControl': isControl,
                    'campaignId': campaignId,
                    'campaignName': campaignName,
                    'campaignType': campaignType,
                    'experienceId': experienceId,
                    'experienceName': experienceName, 
                    'state': state,
                    'templateNames': templateNames,
                    'type': type,
                    'userGroup': userGroup
                });
                //If campaign is not run
            }  else {
                console.log('Not Run'); 
            }
        });
        SalesforceInteractions.initSitemap(siteConfig);
    });
}
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
          console.error("siteWideJavascriptError" + e);    }
};


}