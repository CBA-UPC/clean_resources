//Read me
/******************************************************************************************************************************
JS files such as s_codeCommon.js, s_accountSetting.js, and s_customTracking.js are tags that are required to load the AdobeAnalytics tool.
These files will be loaded on many pages.
The AdobeAnalytics tool that was implemented in the past has now been discontinued.
All JavaScript code in these JS file contents has been removed. However, functions that may be called on the web page side have been retained.
The functions that may be called on the web page side are "s.t", "s.tl", and the functions under the rakutenSC object.
These functions have also been modified to return false when they are called.
In addition to these functions, AdobeAnalytics tags may contain things like "s.propXX = ...", "s.eVarXX = ...", "s.events=...", etc.
AdobeAnalytics Tags are characterized by having an s object.
When deleting these JS files, please first delete the AdobeAnalytics tags that remain on the web page side.
There are several implementation patterns for AdobeAnalytics tags, including include files, tag manager tools (e.g. GTM), or hard coding on the web page side.
Second, delete these JS files.If you delete the JS file while the Adobe Analytics tag remains on the web page side, a JavaScript error is likely to occur.
When a JavaScript error occurs, it can adversely affect the action on the web page side. Please be careful.
*****************************************************************************************************************************/

var accountSetting = {};

// set RSID for your environment
accountSetting.useLog = false;
accountSetting.listingParamName = "sclid";
accountSetting.campaignParamName = "scid,sclid";
accountSetting.defaultRSID = "rakutencommoniddev";
//change bellow to false for DEV/STG environment
accountSetting.dynamicAccountSelection=true;
accountSetting.dynamicAccountList="rakutencommoniddev=localhost.,stg-;rakutencommonidprod=.id.rakuten.co.jp,www.rakuten.co.jp,r10.to";
accountSetting.serviceName = "common";
accountSetting.cookieDomainPeriods="3";
accountSetting.currencyCode = "JPY";
accountSetting.trackDownloadLinks = false;
accountSetting.trackExternalLinks = false;
accountSetting.usePrePlugins = true;
accountSetting.usePostPlugins = true;
accountSetting._internalSite = [];
accountSetting._internalSite[0] = "javascript:";
accountSetting._internalSite[1]="rakuten.co.jp";
accountSetting._internalSite[2]="rakuten.ne.jp";
accountSetting._internalSite[3]="rakuten.com";
accountSetting._internalSite[4]="rakuten.jp";
accountSetting._internalSite[5]="infoseek.co.jp";
accountSetting._internalSite[6]="rakuten-sec.co.jp";
accountSetting._internalSite[7]="rakuten-kc.co.jp";
accountSetting._internalSite[8]="ebank.co.jp";
accountSetting._internalSite[9]="rakuteneagles.jp";
accountSetting._internalSite[10]="nikki.ne.jp";
accountSetting._internalSite[11]="shokutaku.jp";
accountSetting._internalSite[12]="nuigurumi.ynot.co.jp";
accountSetting._internalSite[13]="keibamall.co.jp";
accountSetting._internalSite[14]="gol.com";
accountSetting._internalSite[15]="onet.jp";
accountSetting._internalSite[16]="onet.co.jp";
accountSetting._internalSite[17]="marketspeed.jp";
accountSetting._internalSite[18]="mytrip.co.jp";
accountSetting._internalSite[19]="rakuten-bank.co.jp";
accountSetting._internalSite[20]="showtime.jp";
accountSetting._internalSite[21]="linkshare.com";
accountSetting._internalSite[22]="edy.jp";
accountSetting._internalSite[23]="rakuten-card.co.jp";
accountSetting._internalSite[24]="priceminister.com";
accountSetting._internalSite[25]="rakuten.com.tw";
accountSetting._internalSite[26]="buy.com";
accountSetting._internalSite[27]="rakuten.com.cn";
accountSetting._internalSite[28]="rakuten.cn";
accountSetting._internalSite[29]="tarad.com";
accountSetting._internalSite[30]="rakuten.co.id";
accountSetting._internalSite[31]="rakuten.de";
accountSetting._internalSite[32]="rakuten.at";
accountSetting._internalSite[33]="rakuten-checkout.de";
accountSetting._internalSite[34]="rakuten-edy.co.jp";
accountSetting._internalSite[35]="play.com";
accountSetting._internalSite[36]="wuaki.tv";
accountSetting._internalSite[37]="kobobooks.com";
accountSetting._internalSite[38]="kobo.com";
accountSetting._internalSite[39]="shareee.jp";
accountSetting._internalSite[40]="rakuten.de";
accountSetting._internalSite[41]="rakuten.com.br";
accountSetting._internalSite[42]="rakuten.tw";

/*** DON'T TOUCH ***/
accountSetting.linkInternalFilters = accountSetting._internalSite.join(",");