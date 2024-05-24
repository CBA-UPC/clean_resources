if (!(window.location.href.indexOf('accountactivity') > 0) && !(window.location.href.indexOf('accountdetails') > 0)) { 

if (typeof _cls_config === "undefined") {
  _cls_config = {};
} /* DO NOT CHANGE */

//var postURI = "https://"+((/instantverificationstage|test|uat|sit|dit|webqa/i.test(window.location.host))?"uat":"prod")+".report.nacustomerexperience.citi.com/glassbox/reporting/cls_report";
 var postURI = "https://" + ((/instantverificationstage|test|uat|sit|dit/i.test(window.location.host)) ? "uat" : "prod") + ".report.nacustomerexperience.citi.com/glassbox/reporting/798b2f12-9162-4a94-91ee-805d883ca266/cls_report";
 var perfpostURI = "https://uat.report.nacustomerexperience.citi.com/glassbox/reporting/1ec5ce67-c745-d1c8-6067-06904bfb8252/cls_report";

  if (/webqa/i.test(window.location.host)) {
    _cls_config.reportURI = perfpostURI;
  } else {
    _cls_config.reportURI = postURI;
  }
//_cls_config.reportURI=postURI;
//_cls_config.reportURI="https://uat.report.nacustomerexperience.citi.com/glassbox/reporting/cls_report";
_cls_config.recordScrolls = true;
_cls_config.recordMouseMoves = false;
_cls_config.idleEventTimeInterval = -1;
//_cls_config.domKeepScriptMatching = "s.pageName|citiData";
_cls_config.interceptABTesting = true;
_cls_config.abTestingGlobalObject='ttMETAGlassbox';
_cls_config.recordConsoleErrors = true;
_cls_config.recordErrors = true;
_cls_config.resourcesRecordEnabled=true;
_cls_config.resourceRecordCssOnly=true;
_cls_config.webVitalsRecordEnabled=false;
_cls_config.webVitalsReportTimeout=10000;
_cls_config.ajaxRecordResponseBody="or(statusgte(400),uriMatches((.*\/digital\/customers\/dashboardTiles\/accountDetails)|(.*\/staticcms\/USGCB\/en_US\/appid\/cbol_dashboard.json)|(.*\/v2\/digital\/foundations\/cbol\/dynamicTiles\/retrieve)))";
_cls_config.ajaxRecordRequestBody = "uriMatches((.*\/cbol\/onboarding\/applications.*)|(.*\/digital\/customers\/dashboardTiles\/accountDetails)|(.*\/staticcms\/USGCB\/en_US\/appid\/cbol_dashboard.json)|(.*\/v2\/digital\/foundations\/cbol\/dynamicTiles\/retrieve))"; 
_cls_config.ajaxRecordResponseHeaders = "or(statusgte(400),uriMatches((.*\/digital\/customers\/dashboardTiles\/accountDetails)|(.*\/staticcms\/USGCB\/en_US\/appid\/cbol_dashboard.json)|(.*\/v2\/digital\/foundations\/cbol\/dynamicTiles\/retrieve)))";
_cls_config.ajaxRecordRequestHeaders = "uriMatches((.*\/cbol\/onboarding\/applications.*)|(.*\/digital\/customers\/dashboardTiles\/accountDetails)|(.*\/staticcms\/USGCB\/en_US\/appid\/cbol_dashboard.json)|(.*\/v2\/digital\/foundations\/cbol\/dynamicTiles\/retrieve))";
_cls_config.interceptAjax = true;
_cls_config.ajaxRecordMetadata = "never";
_cls_config.ajaxRecordStats = "always";
_cls_config.collectStruggles=true;
_cls_config.domTamperingDetectionEnabled=true;
_cls_config.maskingMode = "whitelist";
_cls_config.domMaskedAttributes = ["onerror"];
_cls_config.domMaskAttributesByTag = ["img"];
_cls_config.iframesAutoInject = true;
_cls_config.iframesDebugEnabled = false;
_cls_config.reportViaTopWindow=true;
_cls_config.clientAttributesEnabled = true;
_cls_config.startMutationObserverOnLoad = false;
_cls_config.ignoreMutationsOnNotAttachedElements = true;
_cls_config.handleAttributeMutationsAsChunks = 250;
_cls_config.ignoreSelectorOnMouseMove = true;
//_cls_config.delayDomMutationEvent = 300;
//_cls_config.domFilterAttributes=["style", "href", "src"];
//_cls_config.domFilterAttributes=["href"];
_cls_config.noIdSelectorsForIDs=['RULE_KEY'];
_cls_config.captureGlobalObjectsOnSegmentChange = true;
//_cls_config.domThrottleChanges = true;
_cls_config.recordAnimation = true;
_cls_config.domPreciseStyleSheetCloning = true;
_cls_config.domRecordStyleAttributes = true; //188600
_cls_config.domMaskContentByClass = ["welcome-header-text", "ciaCardNumber", "channel-address", "ssnText","bao-confirmation-account-number__number","prepopulated-content","customer-details","email-address"]; //186041
_cls_config.domMaskContentById = ["HOMEview", "WORKview", "MOBILEview", "totalIncomeStat", "totalMortStat"];
_cls_config.domMaskSimpleSelector=["div.mailing_address>citi-column>div>div>span",
"div.mailing_address>citi-column>div>p",
"div.email_primary>span>p",
"div.row>div>citi-column>div>div.alerts-view>p",
"#cnf_totalIncomeStat>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)",
"#cnf_totalMortStat>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)",
"#totalIncomeStat>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)",
"#totalMortStat>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)",
"body>app-root>cbol-core>citi-parent-layout>div>div>div>citi-family>div>citi-simple-layout>div>citi-family-accordion>div.accordion-container>citi-family-accordion-child.disclosure-page.col-title-host.active-host>div>div.card-content>div.main-content.ng-star-inserted>citi-family-agreements-disclosures-card>div.row>div.col-sm-4>span",
"body>app-root>cbol-core>citi-parent-layout>div>div>div>div>citi-boost>div>citi-simple-layout>div>citi-family-accordion>div.accordion-container.gb_hover>citi-family-accordion-child.disclosure-page.col-title-host.active-host.gb_hover>div>div.card-content.gb_hover>div.main-content.ng-star-inserted.gb_hover>citi-family-agreements-disclosures-card>span.ssn-num",
"body>app-root>cbol-core>citi-parent-layout>div>div>div>app-terms-conditions>div>section.fedralTaxClassification>section>citi-row:nth-child(2)>div>citi-column>div>div",
"#sfc-form>div.sfc-ui-area>div.sfc-ui-area-middle>main>div:nth-child(3)>div>div.sfc-block.sfc-nav.sfc-ui-fill.sfc-rule-default.sfc-ui-vflow.layout-40>div:nth-child(9)>section>div>div.sfc-block.sfc-nav.sfc-ui-fill.sfc-rule-wrapBelowThreshold1.layout-165>table>tbody>tr:nth-child(2)>td.sfc-block.sfc-ui-fill.sfc-rule-default.layout-146>table>tbody>tr>td>div>div>span",
"#sfc-form>div.sfc-ui-area>div.sfc-ui-area-middle>main>div:nth-child(3)>div>div.sfc-block.sfc-nav.sfc-ui-fill.sfc-rule-default.sfc-ui-vflow.layout-40>div:nth-child(9)>section>div>div.sfc-block.sfc-nav.sfc-ui-fill.sfc-rule-wrapBelowThreshold1.layout-165>table>tbody>tr:nth-child(8)>td>table>tbody>tr>td:nth-child(1)>table>tbody>tr:nth-child(2)>td>div>div>div>span",
"#sfc-form>div.sfc-ui-area>div.sfc-ui-area-middle>main>div:nth-child(3)>div>div.sfc-block.sfc-nav.sfc-ui-fill.sfc-rule-default.sfc-ui-vflow.layout-40>div:nth-child(9)>section>div>div.sfc-block.sfc-nav.sfc-ui-fill.sfc-rule-wrapBelowThreshold1.layout-165>table>tbody>tr:nth-child(8)>td>table>tbody>tr>td:nth-child(2)>table>tbody>tr:nth-child(2)>td>div>div>div>span",
"#sow_applicant_Name>div>b",
"body>app-root>cbol-core>citi-parent-layout>div>div>div>citi-family>div>citi-simple-layout>div>citi-family-accordion>div.accordion-container.gb_hover>citi-family-accordion-child.disclosure-page.col-title-host.active-host.gb_hover>div>div.card-content.gb_hover>div.main-content.ng-star-inserted>citi-family-agreements-disclosures-card>div.row>div.col-sm-4>span",
"body>app-root>cbol-core>citi-parent-layout>div>div>div>citi-family>div>citi-simple-layout>div>citi-family-accordion>div.accordion-container.gb_hover>citi-family-accordion-child.disclosure-page.col-title-host.active-host.gb_hover>div>div.card-content.gb_hover>div.main-content.ng-star-inserted.gb_hover>citi-family-agreements-disclosures-card>div.row>div.col-sm-4>span",
"body>app-root>cbol-core>citi-parent-layout>div>div>div>open-cs-acct>div>citi-simple-layout>div>citi-family-accordion>div.accordion-container>citi-family-accordion-child.col-title-host.ng-star-inserted.active-host>div>div.card-content>div.main-content.blue-heading.ng-star-inserted.adjustErrorDisplay>app-agreements-and-disclosures>div>citi-row.ng-star-inserted>div>citi-column:nth-child(2)>div>section>p",
"#agreementsAndDisclosuresForm>form>div>section>citi-row>div>citi-column:nth-child(2)>div>section>p",
"body>app-root>cbol-core>citi-parent-layout>div>div>div>open-cs-acct>div>citi-simple-layout>div>citi-family-accordion>div.accordion-container>citi-family-accordion-child.col-title-host.ng-star-inserted.active-host>div>div.card-content>div.main-content.blue-heading.ng-star-inserted.adjustErrorDisplay>app-agreements-and-disclosures>div>section>citi-row>div>citi-column.col-xs-12.col-md-10.h3-style.mobile-ssn.ng-star-inserted>div>div",
"#ciaCarddetail>div.ciaCardNumber.gb_hover",
"#ciaCarddetail>div.ciaCardNumber",
"#ddCardDetails > div > div > div > div.form-verified.row > div > div:nth-child(2) > div:nth-child(2) > p",
"#ddCardDetails > div > div > div > div.form-verified.row > div > div:nth-child(3) > div:nth-child(2) > p",
"#ddCardDetails > div > div > div > div.form-verified.row > div > div:nth-child(4) > div:nth-child(2) > p",
"#ddStep2Form > div > div.row.jumbotron.ddTitle > div > div > div.col-xs-12.col-sm-8 > h2 > span",
"#customerName"                                 
];
_cls_config.maskList = ["crecardirdebset-otherAmt", "crecardirdebset-onePayment-radio-select", "citi-autocomplete-content-searchbox-livesearch", "citi-autocomplete-content-searchbox-fullsearch", "routNum", "bankRouteCode", "bankRouteCodeMasked", "fk1", "card_number", "inj_Card_number_0", "inj_Card_number_1", "inj_Card_number_2", "inj_Card_number_3", "_tables.input.cc","_tables.input.firstname", "_tables.input.lastname", "autocomplete-search-panel"];

// Added Aug 02, 2023 
_cls_config.recordScrollReach=true;
_cls_config.injectIframesAboutBlank=true;

/* BEGIN extra - Capture global object */
// Per Ticket: 186051; adding _dl.application_response
_cls_config.captureGlobalObjects = ["_dl.affinity_code","_dl.loan_amount","_dl.payment_amount","_dl.dcm_category","_dl.cust_error","_dl.application_response","_dl.CUUID","_dl.app_hierarchy","_dl.domain","_dl.page_type","_dl.evarPageName","_dl.action_type","_dl.pid","_dl.form_type","_dl.pageName","_dl.site_hierarchy","_dl.cat_id","_dl.event","_dl.test_id","_dl.type_id","_dl.CONTENT_ID","_dl.NAME","_dl.ff_employeeFeedback","_dl.login_status","_dl.track_id","_dl.authentication_status","_dl.lead_type","_dl.site_events","_dl.application_id", "s.pageName", "s.eVar38", "citi_products"];
/* END extra - Capture global objects */


/* BEGIN V7 detector requirements */
_cls_config.initDetectorOnInteractive = true;
_cls_config.detectorPath = 'https://cdn.gbqofs.com/sv/c/';
/* End V7 detector requrements */
}