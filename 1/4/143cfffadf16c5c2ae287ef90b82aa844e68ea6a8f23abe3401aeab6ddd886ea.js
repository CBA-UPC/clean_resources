
window.s = s_gi(window.s_account);

/* Plugin Config */

function s_doPlugins(s) {
  /* Add calls to plugins here */
  if (s.Util.getQueryParam('marid') != "") {
    s.campaign = 'MARID' + s.Util.getQueryParam('marid');
  }
  else {
    s.campaign = s.Util.getQueryParam('cid');
  }
}

// Will execute before s.t() and s.tl()
s.doPlugins = s_doPlugins;

/**
 * @license
 * Adobe Visitor API for JavaScript version: 4.4.0
 * Copyright 2019 Adobe, Inc. All Rights Reserved
 * More info available at https://marketing.adobe.com/resources/help/en_US/mcvid/
 */
var e=();

/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
  /* End ActivityMap Module */
  /*
   ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============
  
  AppMeasurement for JavaScript version: 2.23.0
  Copyright 1996-2016 Adobe, Inc. All Rights Reserved
  More info available at http://www.adobe.com/marketing-cloud.html
  */
 
 AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
 s_pgicq();
  