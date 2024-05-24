// @ts-nocheck
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.addAdobeScripts = void 0;
    function addAdobeScripts() {
        /*
       Start ActivityMap Module
      
       The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
       allows you to view data overlays on your links and content to understand how
       users engage with your web site. If you do not intend to use ActivityMap, you
       can remove the following block of code from your AppMeasurement.js file.
       Additional documentation on how to configure ActivityMap is available at:
       https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
      */
                window["AppMeasurement_Module_ActivityMap"] = AppMeasurement_Module_ActivityMap;
        /* End ActivityMap Module */
        /*
         ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============
        
        AppMeasurement for JavaScript version: 2.23.0
        Copyright 1996-2016 Adobe, Inc. All Rights Reserved
        More info available at http://www.adobe.com/marketing-cloud.html
        */
                window["AppMeasurement"] = AppMeasurement;
                AppMeasurement.getInstance = s_gi;
        window.s_objectID || (window.s_objectID = 0);
        window["s_gi"] = s_gi;
                s_pgicq();
        window["s_pgicq"] = s_pgicq;
    }
    exports.addAdobeScripts = addAdobeScripts;
});
