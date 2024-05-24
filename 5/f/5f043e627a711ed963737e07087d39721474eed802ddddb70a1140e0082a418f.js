function utmParser(utmValue){
    var utmValue;

    var macroPlacementID = Enabler.getDartPageId();
    var macroSiteName = Enabler.getDartSiteName();
    var macroSiteID = Enabler.getDartSiteId();
    var macroAdID = Enabler.getDartAdId();
    var macroCampaignID = Enabler.getParameter("buy");
    var macroAdvertiserID = Enabler.getParameter("adv");
    var macroCreativeID = Enabler.getDartCreativeId();


    var dynamicUTM = utmValue;

    //encodingPhase
    var placementIdPhase = dynamicUTM.replace("dynamicPlacementIdUTM",macroPlacementID); //This phase replaces dynamicPlacementIdUTM with the placement ID pulled from DCM 
    var siteNamePhase = placementIdPhase.replace("dynamicSiteNameUTM",macroSiteName); //This phase replaces dynamicSiteUTM with the Site Name pulled from DCM 
    var siteIdPhase = siteNamePhase.replace("dynamicSiteIdUTM",macroSiteID); //This phase replaces dynamicSiteIdUTM with the Site ID pulled from DCM 
    var adIdPhase = siteIdPhase.replace("dynamicAdIdUTM",macroAdID); //This phase replaces dynamicAdIdUTM with the Ad ID pulled from DCM 
    var campaignIdPhase = adIdPhase.replace("dynamicCampaignIdUTM",macroCampaignID); //This phase replaces dynamicCampaignIdUTM with the Campaign ID pulled from DCM 
    var advertiserIdPhase = campaignIdPhase.replace("dynamicAdvertiserIdUTM",macroAdvertiserID); //This phase replaces dynamicAdvertiserIdUTM with the Advertiser ID pulled from DCM 
    var creativeIdPhase = advertiserIdPhase.replace("dynamicCreativeIdUTM",macroCreativeID); //This phase replaces dynamicCreativeIdUTM with the Creative ID pulled from DCM 
    
    return(creativeIdPhase);
}