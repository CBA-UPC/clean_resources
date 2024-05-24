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
//Only run the beacon if on one of these domains

//stg
//var allowedDomains = [
//    "freeze.ecm.underarmour.com",
//    "www.underarmour.com",
//    "staging-us.sfcc.ua-ecm.com",
//    "staging-ca.sfcc.ua-ecm.com",
//    "seabiscuit-pwa-git-feature-sb-3677-mcp-poc-underarmour.vercel.app",
//    "localhost"
//];


//prod
var allowedDomains = [
    "www.underarmour.com",
    "www.underarmour.ca",
    "www.underarmour.com.mx"
];

// region will be enforced by url string
var regionUrl = [
    "/en-us/",
    "/sites-us-site/en_us/",
    "/en-ca/",
    "/fr-ca/",
    "/es-mx/",
    "/sites-ca-site/en_ca/",
    "/sites-ca-site/fr_ca/",
    "/sites-mx-site/es_mx/"
];

// ignore these urls
var ignoredUrls = [
];

// bypass these querystring
var bypassQuery = [
    "bypassevg=1"
];

// show console.log
var showConsole = [
    "mcpconsole=1"
];
    

// not used now, but could be in the future.
var locale = [
    "en_US",
    "en_CA",
    "fr_CA",
    "es_MX"
];


(allowedDomains.indexOf(window.location.hostname) > -1) && (!ignoredUrls.some(s => window.location.pathname.toLowerCase().includes(s))) && (!bypassQuery.some(s => window.location.search.toLowerCase().includes(s))) &&(regionUrl.some(s => window.location.pathname.toLowerCase().includes(s))) && SalesforceInteractions.init({}).then(() => {  
    
    if (showConsole.some(s => window.location.search.toLowerCase().includes(s)))
        console.log("version: 1.56");

    let productViewed = "";
    let productUrlViewed = "";
    let favoriteProduct = "";


    const getProductInventory = () => {
        let InvCount = -1;
        
        try {
            if(uaDatalayer) {
                InvCount = parseInt(uaDatalayer.getPageData().products[0].product_inventory_stock_level);
            }
        } catch (error) { }
        
        return InvCount;
    };

    const getProductSku = () => {
        let productSku;
        
        try {
            if(uaDatalayer) {
                productSku = uaDatalayer.getPageData().products[0].product_sku.toLowerCase();
            }
        } catch (error) { }
        
        if (productSku) {
            if (productSku.includes('-undefined')) {
                try {
                    productSku = JSON.parse(document.getElementById('ld_json_product').textContent).sku.toLowerCase();
                } catch (error) { }
            }
            productViewed = productSku;
            productUrlViewed = window.location.href.split('?')[0];
        }      
            
        return productSku;    
    };

    const getProductSilhouette = () => {
        let productSilhouette;
        
        try {
            if(uaDatalayer) {
                productSku = uaDatalayer.getPageData().products[0].product_silhouette.toLowerCase();
            }
        } catch (error) { }
            
        return productSilhouette;    
    };

    const getMultiColorTotal = () => {
        let multiColor = 0;
        try {
            if(uaDatalayer) {
                multiColor = parseInt(uaDatalayer.getPageData().products[0].product_options_color_total);
            }
        } catch (error) { }      
        
        return multiColor;
    };    
    
    const getMultiColorTotalBool = () => {
        let multiColor = "False";
        try {
            if(uaDatalayer) {
                let colorCount = parseInt(uaDatalayer.getPageData().products[0].product_options_color_total);
                if (colorCount > 3)
                    multiColor = "True";
                else
                    multiColor = "False";
            }
        } catch (error) { }      
        
        
        return multiColor;
    };


    const getCustomerId = () => {
        let customerId;
        
        try {
            if(uaDatalayer) {
                customerId = uaDatalayer.getPageData().customer_id.toLowerCase();
            }
        } catch (error) { }
            
        return customerId;    
    };

    const getPlainTextEmail = () => {
        let plainTextEmail;

        try {        
            if(uaDatalayer) {
                plainTextEmail = uaDatalayer.getPageData().plain_text_email.toLowerCase();
            }
        } catch (error) { }
            
        return plainTextEmail;    
    };    

    const getLocale = () => {
        let pageLocale;

        try {
            if(uaDatalayer) {
                pageLocale = uaDatalayer.getPageData().site_language.toLowerCase() + '_' + uaDatalayer.getPageData().site_country_code.toUpperCase();
            }
        } catch (error) { }


        if (!pageLocale || pageLocale === "_") {
            if (window.location.pathname.toLowerCase() === "en-ca")
                pageLocale = "en_CA";
            else if (window.location.pathname.toLowerCase() === "fr-ca")
                pageLocale = "fr_CA";   
            else if (window.location.pathname.toLowerCase() === "es-mx")
                pageLocale = "es_MX";                   
            else
                pageLocale = 'en_US';
        }
            

        return pageLocale;
    };

    const getSearchTerm = () => {
        let searchTerm;

        try {
            if(uaDatalayer) {
                searchTerm = uaDatalayer.getPageData().search_term.trim().toLowerCase();                
            }
        } catch (error) { }
            
        return searchTerm;
    };

    const getLoggedStatus = () => {
        let loggedStatus;

        try {
            if(uaDatalayer) {
                loggedStatus = uaDatalayer.getPageData().logged_in_status.toLowerCase();                
            }
        } catch (error) { }
        
        return loggedStatus;
    };

    const getShipToCountry = () => {
        let shipToCountry;

        try {
            if(uaDatalayer) {
                shipToCountry = uaDatalayer.getPageData().site_shipto_country.toLowerCase();                
            }
        } catch (error) { }

        return shipToCountry;
    };       

    const getCurrency = () => {
        let pageCurrency;

        try {
            if(uaDatalayer) {
                pageCurrency = uaDatalayer.getPageData().site_currency.toUpperCase();                
            }
        } catch (error) { }
        
        if (!pageCurrency)
            pageCurrency = 'USD';

        return pageCurrency;
    };

    const getSiteType = () => {
        let siteType;

        try {
            if(uaDatalayer) {
                siteType = uaDatalayer.getPageData().site_type.toLowerCase();
            }
        } catch (error) { }

        return siteType;
    };

    const getPageCategory = () => {
        let pageCategory;

        try {
            if(uaDatalayer) {
                let pcb;
                let p1;
                let p2;
                let p3;
                let p4;

                try {
                    pcb = uaDatalayer.getPageData().page_category.toLowerCase();                     
                    p1 = uaDatalayer.getPageData().page_subcategory1.toLowerCase();
                    p2 = uaDatalayer.getPageData().page_subcategory2.toLowerCase();
                    p3 = uaDatalayer.getPageData().page_subcategory3.toLowerCase();
                    p4 = uaDatalayer.getPageData().page_subcategory4.toLowerCase();
                } catch (error) { }

                
                if (pcb) {
                    if (p1) {
                        if (p1.includes('?'))
                            pageCategory = pcb;
                        else {
                            pageCategory = pcb + '|' + p1;
                            if (p2) {
                                if (!p2.includes('?')) {
                                    pageCategory = pcb + '|' + p1 + '|' + p2;
                                    if (p3) {
                                        if (!p3.includes('?')) {
                                            pageCategory = pcb + '|' + p1 + '|' + p2 + '|' + p3;
                                            if (p4) {
                                                if (!p4.includes('?')) {
                                                    pageCategory = pcb + '|' + p1 + '|' + p2 + '|' + p3 + '|' + p4;
                                                }
                                            }                                            
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else{
                        pageCategory = pcb;
                    }
                } else
                    pageCategory = uaDatalayer.getPageData().page_name.toLowerCase();
                    
                pageCategory = pageCategory.replace("womens|", "women|");
                pageCategory = pageCategory.replace("mens|", "men|");
                pageCategory = pageCategory.replace("shoes-slip-on-sneakers", "shoes|slip-on-sneakers");
                pageCategory = pageCategory.replaceAll("|", "-");
            }
        } catch (error) { }

        return pageCategory;
    };

    const getProductCategory = () => {
        let productCategory;        
        try {
            if(uaDatalayer) {
                productCategory = uaDatalayer.getPageData().pdp_primary_category_id.toLowerCase();
                productCategory = productCategory.replace(/-/g, "|");
                productCategory = productCategory.replace("one|piece", "one-piece");
                productCategory = productCategory.replace("womens|", "women|");
                productCategory = productCategory.replace("mens|", "men|");
                productCategory = productCategory.replaceAll("|", "-");
            }
        } catch (error) { }            
        
        return productCategory;
    };

    const getPageType = () => {
        let pageType = "";    

        try {
            if(uaDatalayer) {
                    pageType = uaDatalayer.getPageData().site_section.toLowerCase();
            }
        } catch (error) { }

        if (pageType == "product refinement") {
            try {
                if (uaDatalayer.getPageData().page_type.toLowerCase() == "product-listing")
                    pageType = "grid_page";
            } catch (error) { }
        }
        else if (pageType == "product-detail") {
            pageType = "product detail";
        }          
        else if (pageType == "category landing page") {
            pageType = "grid_page";
        }
        else if (pageType == "checkout") {
            try {
                if (uaDatalayer.getPageData().page_name.toLowerCase() == "cart")
                    pageType = "cart";
                else if (uaDatalayer.getPageData().page_name.toLowerCase() == "empty-cart")
                    pageType = "cart";                    
                else if (uaDatalayer.getPageData().page_name.toLowerCase() == "order-receipt") {
                    try {
                        let orderId = uaDatalayer.getPageData().order_id;
                        if (orderId)
                            pageType = "purchase";
                        else
                            pageType = "";
                    } catch (error) { pageType = ""}
                    //pageType = "purchase";
                }
            } catch (error) { }
        }
        else if (pageType == "other") {
            try {
                if (uaDatalayer.getPageData().page_name.toLowerCase() == "store-locator")
                    pageType = "store-locator";
                else if (uaDatalayer.getPageData().page_name.toLowerCase() == "404 error")
                    pageType = "404"; 
            } catch (error) { }
        }
        else if (pageType == "my account") {
            try {
                if (uaDatalayer.getPageData().page_name.toLowerCase().indexOf('favorites') > -1)
                    pageType = "saved items";            
            } catch (error) {  }
        }        
        
        //console.log("pt: " + pageType);
        return pageType;
    };

    const config = {
        global: {
            locale: getLocale(),   
            //contentZones: [
            //    { name: "global_popup" }
            //],                     
            onActionEvent: (actionEvent) => {
                actionEvent.user = actionEvent.user || {};
                actionEvent.user.attributes = actionEvent.user.attributes || {};
                actionEvent.user.identities = actionEvent.user.identities || {};
        
                // user identifier
                let customerId = getCustomerId();
                if (customerId) {
                    actionEvent.user.identities.customerId = customerId;
                    actionEvent.user.attributes.dlCustomerId = customerId;
                }
                    
                let domain = window.location.host;
                if (domain)
                    actionEvent.user.attributes.domain = domain;                    

                let hashedEmail = SalesforceInteractions.mcis.getParameterByName("he");
                if (hashedEmail)
                    actionEvent.user.identities.encryptedEmailAddress = hashedEmail;

                
                let loggedStatus = getLoggedStatus();
                if (loggedStatus) {
                    actionEvent.user.attributes.uiLoggedStatus = loggedStatus;
                    if (loggedStatus === "guest") {
                        if (!customerId) {
                            let plainTextEmail = getPlainTextEmail();
                            if (plainTextEmail)
                            actionEvent.user.identities.emailAddress = plainTextEmail; 
                        }
                    }
                }
                
                let shipToCountry = getShipToCountry();
                if (shipToCountry)
                    actionEvent.user.attributes.shipToCountry = shipToCountry;
                
                let siteType = getSiteType();
                if (siteType)
                    actionEvent.user.attributes.siteType = siteType;
                    
                let localeAttr = getLocale();
                if (localeAttr)
                    actionEvent.user.attributes.locale = localeAttr;    
                    
                let pageType = getPageType()
                if (pageType)
                    actionEvent.user.attributes.lastPageType = pageType;      
                    
                if (pageType == "grid_page") {
                    let pageCategory = getPageCategory();
                    actionEvent.user.attributes.lastViewedCategory = pageCategory; 
                }                    
                    
                if (productViewed) {
                    actionEvent.user.attributes.lastViewedProduct = productViewed;                    
                    actionEvent.user.attributes.lastViewedProductUrl = productUrlViewed;
                } 
                if (favoriteProduct) {
                    actionEvent.user.attributes.favoritedProduct = favoriteProduct;
                }
                    
                if (showConsole.some(s => window.location.search.toLowerCase().includes(s)))
                    console.log("evg: ", actionEvent);
              
                return actionEvent;              
            }
        },   
        pageTypeDefault: {
            name: "default",
            interaction: {
                name: "Default Page"
            }
        },
        pageTypes: [
            {
                name: "home",   
                isMatch: () => {
                    let pageType = getPageType();
                    return (pageType == "home");
                },
                interaction: {
                    name: "Homepage"
                }
            },
            {
                name: "grid_page",   
                isMatch: () => {
                    let pageType = getPageType();
                    return (pageType == "grid_page");
                },
                interaction: {
                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "Category",
                        id: () => {
                            let pageCategory = getPageCategory();
                            return pageCategory;
                        }
                    }
                }             
            },
            {
                name: "pdp",   
                isMatch: () => {
                    let pageType = getPageType();
                    if (pageType == "product detail") {
                        let invCount = getProductInventory();
                        let prodSku = getProductSku();
                        let prodSilhouette = getProductSilhouette();
                        if (invCount > -1) {
                            if (invCount == 0) {
                                SalesforceInteractions.sendEvent({
                                    interaction: {
                                        name: "Viewed Out Of Stock"
                                    },
                                    user: {
                                        attributes: {
                                            outOfStockProduct: prodSku,
                                            outOfStockProductSilhouette: prodSilhouette
                                        }
                                    }                                                
                                });                          
                            }
                            else if (invCount > 0 && invCount < 30) {
                                SalesforceInteractions.sendEvent({
                                    interaction: {
                                        name: "Viewed Low Inventory Item"
                                    },
                                    user: {
                                        attributes: {
                                            lowInventoryProduct: prodSku,
                                            lowInventoryProductSilhouette: prodSilhouette
                                        }
                                    }           
                                });                                 
                            }
                        }                        
                    }
                    return (pageType == "product detail");
                },
                //contentZones: [
                //    { name: "pdp-you_may_also_like", selector: "div.b-product-slot.m-slot_4" }
                //],                
                interaction: {
                    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                    catalogObject: {
                        type: "Product",
                        id: () => {
                            let productSku = getProductSku();
                            return productSku.toLowerCase();
                        },
                        attributes: {
                            currency: getCurrency(),
                            productOptionsColorTotal: getMultiColorTotal()
                        },
                        relatedCatalogObjects: {
                            //Category: () => {
                            //    let productCategory = getProductCategory();
                            //    return [productCategory];                                
                            //},
                            MultiColors: () => {
                                let multiColor = getMultiColorTotalBool();
                                return [multiColor];
                            }                            
                        }
                    }
                }              
            },
            {
                name: "cart",                  
                isMatch: () => {
                    let pageType = getPageType();
                    return (pageType == "cart");
                },
                interaction: {
                    name: SalesforceInteractions.CartInteractionName.ReplaceCart,
                    currency: getCurrency(),
                    lineItems: () => {
                        let cartLineItems = [];
                        for (let i = 0; i < uaDatalayer.getPageData().products.length; i++) {
                            let lineItem = {};
                            lineItem["catalogObjectType"] = "Product";
                            lineItem["catalogObjectId"] = uaDatalayer.getPageData().products[i].product_sku.toLowerCase();
                            lineItem["price"] = parseFloat(uaDatalayer.getPageData().products[i].product_price);
                            lineItem["quantity"] = parseInt(uaDatalayer.getPageData().products[i].product_quantity);
                            cartLineItems.push(lineItem);
                        }   
                        return cartLineItems;                        
                    }
                }
            },
            {
                name: "store_locator",   
                isMatch: () => {
                    let pageType = getPageType();
                    return (pageType == "store-locator");
                },
                interaction: {
                    name: "Store Locator"
                }            
            },
            {
                name: "search_results",   
                isMatch: () => {
                    let pageType = getPageType();
                    return (pageType == "search");
                },
                interaction: {
                    name: "Search Results"
                },
                onActionEvent: (actionEvent) => {
                    const searchPhrase = getSearchTerm();
                    if (searchPhrase) {
                        actionEvent.user = actionEvent.user || {};
                        actionEvent.user.attributes = actionEvent.user.attributes || {};
                        actionEvent.user.attributes.lastSearchPhrase = searchPhrase;
                    }
                    return actionEvent;
                }                          
            },
            {
                name: "my_account",   
                isMatch: () => {
                    let pageType = getPageType();
                    return (pageType == "my account");
                },
                interaction: {
                    name: "My Account"
                }            
            },
            {
                name: "saved_items",   
                isMatch: () => {
                    let pageType = getPageType();
                    return (pageType == "saved items");
                },
                interaction: {
                    name: "Saved Items"
                }            
            },
            {
                name: "checkout",   
                isMatch: () => {
                    let pageType = getPageType();
                    return (pageType == "checkout");
                },
                interaction: {
                    name: "Checkout"
                }            
            },
            {
                name: "order_receipt",   
                isMatch: () => {
                    let pageType = getPageType();
                    return (pageType == "purchase");
                },                
                interaction: {
                    name: SalesforceInteractions.OrderInteractionName.Purchase,
                    order: {
                        id: () => {
                            let orderId = uaDatalayer.getPageData().order_id;
                            return orderId;
                        },
                        totalValue: () => {
                            let tValue = parseFloat(uaDatalayer.getPageData().order_subtotal);
                            if (!tValue)
                                tValue = parseFloat(uaDatalayer.getPageData().cart_subtotal);
                            return tValue;                            
                        },
                        currency: getCurrency(),                     
                        lineItems: () => {
                            let cartLineItems = [];
                            for (let i = 0; i < uaDatalayer.getPageData().products.length; i++) {
                                let lineItem = {};
                                lineItem["catalogObjectType"] = "Product";
                                lineItem["catalogObjectId"] = uaDatalayer.getPageData().products[i].product_sku.toLowerCase();
                                lineItem["price"] = parseFloat(uaDatalayer.getPageData().products[i].product_price);
                                lineItem["quantity"] = parseInt(uaDatalayer.getPageData().products[i].product_quantity);
                                cartLineItems.push(lineItem);
                            }   
                            return cartLineItems;                        
                        }
                    }
                }         
            },
            {
                name: "error_page",   
                isMatch: () => {
                    let pageType = getPageType();
                    return (pageType == "404");
                },
                interaction: {
                    name: "Error Page"
                }
            }                                                                                                                                     
        ]   
    };
    
    const addListeners = () => { 
        //console.log("listeners loading");
        // ua event listeners
        window.document.body.addEventListener('_uad_genericLink', (evt) => { 
            if (window.document.readyState === 'complete') {
                let pageType = getPageType();
                if (pageType == "product detail") {
                    productViewed = evt.detail.products[0].product_sku.toLowerCase();
                    if (productViewed) {
                        SalesforceInteractions.sendEvent({
                            interaction: {
                                name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                                catalogObject: {
                                    type: "Product",
                                    id: evt.detail.products[0].product_sku.toLowerCase(),
                                    locale: getLocale(),
                                    attributes: {
                                        currency: getCurrency()
                                    }
                                    //},
                                    //relatedCatalogObjects: {
                                    //    Category: [getProductCategory()]
                                    //}                                               
                                }
                            }
                        });
                        let invCount = parseInt(evt.detail.products[0].product_inventory_stock_level);
                        let prodSilhouette = evt.detail.products[0].product_silhouette.toLowerCase();
                        if (invCount > -1) {
                            if (invCount == 0) {
                                SalesforceInteractions.sendEvent({
                                    interaction: {
                                        name: "Viewed Out Of Stock"
                                    },
                                    user: {
                                        attributes: {
                                            outOfStockProduct: productViewed,
                                            outOfStockProductSilhouette: prodSilhouette
                                        }
                                    }                                                
                                });                          
                            }
                            else if (invCount > 0 && invCount < 30) {
                                SalesforceInteractions.sendEvent({
                                    interaction: {
                                        name: "Viewed Low Inventory Item"
                                    },
                                    user: {
                                        attributes: {
                                            lowInventoryProduct: productViewed,
                                            lowInventoryProductSilhouette: prodSilhouette
                                        }
                                    }           
                                });                                 
                            }
                        }                        
                    }
                }
            }
            if (showConsole.some(s => window.location.search.toLowerCase().includes(s)))
                console.log("genericLink", evt.detail);    
        });  
    
        window.document.body.addEventListener('_uad_cartAdd', (evt) => { 
            if (window.document.readyState === 'complete') {
                SalesforceInteractions.sendEvent({
                    interaction: {
                        name: SalesforceInteractions.CartInteractionName.AddToCart,
                        currency: getCurrency(),
                        locale: getLocale(),
                        lineItem: {
                            catalogObjectType: "Product",                    
                            catalogObjectId: evt.detail.products[0].product_sku.toLowerCase(),
                            price: parseFloat(evt.detail.products[0].product_price),
                            quantity: parseInt(evt.detail.products[0].product_quantity)
                        }
                    }
                });  
            }
            if (showConsole.some(s => window.location.search.toLowerCase().includes(s)))
                console.log("cartAdd", evt.detail);    
        });
    
        window.document.body.addEventListener('_uad_cartChange', (evt) => { 
            if (window.document.readyState === 'complete') {
                let cartLineItems = [];
                for (let i = 0; i < evt.detail.products.length; i++) {
                    let lineItem = {};
                    lineItem["catalogObjectType"] = "Product";
                    lineItem["catalogObjectId"] = evt.detail.products[i].product_sku.toLowerCase();
                    lineItem["price"] = parseFloat(evt.detail.products[i].product_price);
                    lineItem["quantity"] = parseInt(evt.detail.products[i].product_quantity);
                    cartLineItems.push(lineItem);
                }  
                SalesforceInteractions.sendEvent({ 
                    interaction: {
                        name: SalesforceInteractions.CartInteractionName.ReplaceCart,
                        currency: getCurrency(),
                        locale: getLocale(),
                        lineItems: cartLineItems
                    }
                });
            }
            if (showConsole.some(s => window.location.search.toLowerCase().includes(s)))
                console.log("cartChange", evt.detail);            
        });
    
        window.document.body.addEventListener('_uad_emailSubscribed', (evt) => { 
            if (window.document.readyState === 'complete') {
                let customerID = getCustomerId();
                let interactionName = 'Form Email Signup';
                if (!customerID)
                    interactionName = 'New Email Signup';
        
                let email = evt.detail.plain_text_email.toLowerCase();
                if (email) {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: interactionName
                        },
                        user: {
                            identities: {
                                emailAddress: email
                            }
                        }            
                    }); 
                } else {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: interactionName
                        }            
                    });             
                }
            }
            if (showConsole.some(s => window.location.search.toLowerCase().includes(s)))
                console.log("emailSubscribed", evt.detail);               
        });
        
        window.document.body.addEventListener('_uad_registerSuccess', (evt) => { 
            if (window.document.readyState === 'complete') {
                let customerID = getCustomerId();
                let interactionName = 'Form Email Signup';
                if (!customerID)
                    interactionName = 'New Email Signup';
        
                let email = evt.detail.plain_text_email.toLowerCase();
                SalesforceInteractions.sendEvent({
                    interaction: {
                        name: interactionName
                    },
                    user: {
                        identities: {
                            emailAddress: email
                        }
                    }            
                }); 
            }
            if (showConsole.some(s => window.location.search.toLowerCase().includes(s)))
                console.log("registerSuccess", evt.detail);              
        });
    
        window.document.body.addEventListener('_uad_loginSuccess', (evt) => { 
            if (window.document.readyState === 'complete') {
                let customerId = evt.detail.customer_id;
                let email = evt.detail.plain_text_email.toLowerCase();
                SalesforceInteractions.sendEvent({
                    interaction: {
                        name: "Login"
                    }, 
                    user: {
                        identities: {
                            emailAddress: email,
                            customerId: customerId
                        }
                    }  
                }); 
            }
            //if (showConsole.some(s => window.location.search.toLowerCase().includes(s)))
                console.log("loginSuccess", evt.detail);    
        });
        
        window.document.body.addEventListener('_uad_checkoutPaypal', (evt) => { 
            if (window.document.readyState === 'complete') {
                SalesforceInteractions.sendEvent({
                    interaction: {
                        name: "Paypal Checkout"
                    }            
                });   
            }
            if (showConsole.some(s => window.location.search.toLowerCase().includes(s)))
                console.log("checkoutPaypal", evt.detail);    
            
        });   
        
        window.document.body.addEventListener('_uad_pageView', (evt) => { 
            if (window.document.readyState === 'complete') {
                SalesforceInteractions.initSitemap(config);
            }
            if (showConsole.some(s => window.location.search.toLowerCase().includes(s)))
                console.log("pageView", evt.detail);    
        });  
     
        window.document.body.addEventListener('_uad_cartRemove', (evt) => {             
            if (window.document.readyState === 'complete') {
                for (let i = 0; i < evt.detail.products.length; i++) {
                    let lineItem = {};
                    lineItem["catalogObjectType"] = "Product";
                    lineItem["catalogObjectId"] = evt.detail.products[i].product_sku.toLowerCase();
                    lineItem["price"] = parseFloat(evt.detail.products[i].product_price);
                    lineItem["quantity"] = parseInt(evt.detail.products[i].product_quantity);
        
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: SalesforceInteractions.CartInteractionName.RemoveFromCart,
                            lineItem: lineItem,
                            currency: getCurrency(),
                            locale: getLocale()                
                        }
                    });             
                }          
            }
            
            if (showConsole.some(s => window.location.search.toLowerCase().includes(s)))
                console.log("cartRemove", evt.detail);    
        });  
    
        window.document.body.addEventListener('_uad_favoritesAdd', (evt) => { 
            if (window.document.readyState === 'complete') {
                favoriteProduct = evt.detail.products[0].product_sku.toLowerCase();
                if (favoriteProduct) {
                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: SalesforceInteractions.CatalogObjectInteractionName.FavoriteCatalogObject,
                            catalogObject: {
                                type: "Product",
                                id: evt.detail.products[0].product_sku.toLowerCase(),
                                locale: getLocale(),
                                attributes: {
                                    currency: getCurrency()
                                }
                            }
                        }
                    }); 
                }
            }            
            //console.log("favoritesAdd", evt.detail);    
        });     

    
        // unused ua events that may be used in the future.
        //window.document.body.addEventListener('_uad_checkoutStepChange', (evt) => { 
        //    console.log("checkoutStepChange", evt.detail);    
        //});  
        // not needed as event also triggers a view cart
        //window.document.body.addEventListener('_uad_cartQtyChange', (evt) => { 
        //    console.log("cartQtyChange");    
        //    console.log(evt.detail);          
        //});     
        
    };

  
    let promise = new Promise(function(resolve, reject) {
        let intervalId = setInterval(() => {
            if (window.dataLayer) {
                clearInterval(intervalId);
                SalesforceInteractions.initSitemap(config);
                addListeners();
            }
        }, 1500);
    });     

    //SalesforceInteractions.initSitemap(config);
    
    
});
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
          console.error("siteWideJavascriptError" + e);    }
};


}