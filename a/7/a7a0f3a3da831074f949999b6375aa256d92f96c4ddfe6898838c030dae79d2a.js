// For license information, see `https://www.trulia.com/plug/59441a34a882/35e39670cce6/0f02824d7d24/EXdd0e71e6ceda4feaa7c7872adb754d90-libraryCode_source.js`.
function s_doPlugins(e){"MobileSite"==_satellite.getVar("msMobileSite")&&(e.eVar4="MobileSite")}ellite.logger.warn("loading Adobe Analytics library"),"undefined"!=typeof s&&(existingData=s);var rsid="production"==_satellite.buildInfo.environment?"truliacom":"truliadev";if(window.s=new AppMeasurement(rsid),"object"==typeof existingData){var hardcodedVars=["eVar","prop","events","pageName","channel","pageType","server","contextData","campaign","list"];for(var v in existingData)if(existingData.hasOwnProperty(v))for(var h in hardcodedVars)-1!==v.indexOf(hardcodedVars[h])&&(s[v]=existingData[v]);_satellite.logger.warn("merged existing s and Launch s objects")}s.usePlugins=!0,s.doPlugins=s_doPlugins,s.getValOnce=new Function("v","c","e","var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v"),s.getQueryParam=s.Util.getQueryParam,AppMeasurement.getInstance=s_gi,window.s_objectID||(window.s_objectID=0),s_pgicq();