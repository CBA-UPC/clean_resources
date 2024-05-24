/* istanbul ignore file */
!{1:[function(e,t,i){(function(i){** @license ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============

Adobe Visitor API for JavaScript version: 3.1.2
Copyright 1996-2015 Adobe, Inc. All Rights Reserved
More info available at https://marketing.adobe.com/resources/help/en_US/mcvid/
*/
var r=e("./child/ChildVisitor"),a=e("./child/Message"),s=e("./child/makeChildMessageListener"),o=e("./utils/asyncParallelApply"),l=e("./utils/enums"),u=e("./utils/utils"),d=e("./utils/getDomain"),c=e("./units/version"),f=e("./units/crossDomain"),g=e("@adobe-mcid/visitor-js-shared/lib/ids/generateRandomID"),p=e("./units/makeCorsRequest"),m=e("./units/makeDestinationPublishing"),_=e("./utils/constants"),h=function(e,t,n){||n.split("").reverse().join("")!==e)throw new Error("Please use `Visitor.getInstance` to instantiate Visitor.");var S=this;S.version="3.1.2";var v=i,A=v.Visitor;A.version=S.version,A.AuthState=l.AUTH_STATE,A.OptOut=l.OPT_OUT,v.s_c_in||(v.s_c_il=[],v.s_c_in=0),S._c="Visitor",S._il=v.s_c_il,S._in=v.s_c_in,S._il[S._in]=S,v.s_c_in++,S._log={requests:[]},S.marketingCloudOrgID=e,S.cookieName="AMCV_"+e,S.sessionCookieName="AMCVS_"+e,S.cookieDomain=d(),S.cookieDomain===v.location.hostname&&(S.cookieDomain=""),S.loadSSL=v.location.protocol.toLowerCase().indexOf("https")>=0,S.loadTimeout=3e4,S.CORSErrors=[],S.marketingCloudServer=S.audienceManagerServer="dpm.demdex.net",S.sdidParamExpiry=30;var y=v.document,M=null,b="MC",k="MCMID",E="MCORGID",T="MCCIDH",O="MCSYNCSOP",w="MCIDTS",L="MCOPTOUT",P="A",R="MCAID",F="AAM",x="MCAAMLH",V="MCAAMB",N="NONE",j=U=p(S,G);S.FIELDS=l.FIELDS,S.cookieRead=S.cookieWrite=function(e,t,i){var n,r=S.cookieLifetime;if(t=""+t,r=r?(""+r).toUpperCase():"",i&&"SESSION"!==r&&"NONE"!==r){if(n=""!==t?parseInt(r?r:0,10):-60)i=new Date,i.setTime(i.getTime()+1e3*n);else if(1===i){i=new Date;var a=i.getYear();i.setYear(a+2+(a<1900?1900:0))}}else i=0;return e&&"NONE"!==r?(y.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; path=/;"+(i?" expires="+i.toGMTString()+";":"")+(S.cookieDomain?" domain="+S.cookieDomain+";":""),S.cookieRead(e)===t):0},S.resetState=S._isAllowedDone=!1,S._isAllowedFlag=!1,S.isAllowed=S.setMarketingCloudVisitorID=function(e){S._setMarketingCloudFields(e)},S._use1stPartyMarketingCloudServer=!1,S.getMarketingCloudVisitorID=S.getVisitorValues=S._currentCustomerIDs={},S._customerIDsHashChanged=!1,S._newCustomerIDsHash="",S.setCustomerIDs=S.getCustomerIDs=S.setAnalyticsVisitorID=S.getAnalyticsVisitorID=S.getAudienceManagerLocationHint=S.getLocationHint=S.getAudienceManagerLocationHint,S.getAudienceManagerBlob=S._supplementalDataIDCurrent="",S._supplementalDataIDCurrentConsumed={},S._supplementalDataIDLast="",S._supplementalDataIDLastConsumed={},S.getSupplementalDataID=S.getOptOut=S.isOptedOut=S._fields=null,S._fieldsExpired=null,S._hash=S._generateID=g,S._generateLocalMID=S._callbackList=null,S._callCallback=S._registerCallback=S._callAllCallbacks=S._addQuerystringParam=S._extractParamFromUri=S._parseAdobeMcFromUrl=r(_.ADOBE_MC),S._parseAdobeMcSdidFromUrl=r(_.ADOBE_MC_SDID),S._attemptToPopulateSdidFromUrl=S._attemptToPopulateIdsFromUrl=S._mergeServerState=S._timeout=null,S._loadData=S._clearTimeout=S._settingsDigest=0,S._getSettingsDigest=S._readVisitorDone=!1,S._readVisitor=S._appendVersionTo=S._writeVisitor=S._getField=S._setField=S._getFieldList=S._setFieldList=S._getFieldMap=S._setFieldMap=S._setFieldExpire=S._findVisitorID=S._setFields=S._loading=null,S._getRemoteField=S._setMarketingCloudFields=function(e){S._readVisitor(),S._setFields(b,e)},S._mapCustomerIDs=S._setAnalyticsFields=function(e){S._readVisitor(),S._setFields(P,e)},S._setAudienceManagerFields=S._getAudienceManagerURLData=S.appendVisitorIDsTo=S.appendSupplementalDataIDTo=var H={parseHash:hashlessUrl:addQueryParamAtLocation:isFirstPartyAnalyticsVisitorIDCall:isObject:removeCookie:isTrackingServerPopulated:getTimestampInSeconds:parsePipeDelimetedKeyValues:generateRandomString:parseBoolean:replaceMethodsWithFunction:pluck:;S._helpers=H;var B=m(S,A);S._destinationPublishing=B,S.timeoutMetricsLog=[];var G,q={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,AnalyticsIDCallTimedOut:null,AAMIDCallTimedOut:null,fieldGroupObj:{},setState:;S.isClientSideMarketingCloudVisitorID=function(){return q.isClientSideMarketingCloudVisitorID},S.MCIDCallTimedOut=function(){return q.MCIDCallTimedOut},S.AnalyticsIDCallTimedOut=function(){return q.AnalyticsIDCallTimedOut},S.AAMIDCallTimedOut=S.idSyncGetOnPageSyncInfo=S.idSyncByURL=S.idSyncByDataSource=S._getCookieVersion=S._resetAmcvCookie=S.setAsCoopSafe=function(){M=!0},S.setAsCoopUnsafe=S.init=;h.getInstance=n(),i.Visitor=h,t.exports=h}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./child/ChildVisitor":2,"./child/Message":3,"./child/makeChildMessageListener":4,"./units/crossDomain":8,"./units/makeCorsRequest":9,"./units/makeDestinationPublishing":10,"./units/version":11,"./utils/asyncParallelApply":12,"./utils/constants":14,"./utils/enums":15,"./utils/getDomain":16,"./utils/utils":18,"@adobe-mcid/visitor-js-shared/lib/ids/generateRandomID":19}],2:[{"../utils/callbackRegistryFactory":13,"../utils/enums":15,"../utils/polyfills":17,"./Message":3,"./strategies/LocalVisitor":5,"./strategies/PlaceholderVisitor":6,"./strategies/ProxyVisitor":7}],3:[{"../utils/enums":15}],4:[{"../utils/enums":15,"../utils/utils":18}],5:[{"../../utils/enums":15}],6:[{"../../utils/enums":15}],7:[{"../../utils/enums":15}],8:[{}],9:[{}],10:[{"../utils/constants":14,"../utils/utils":18,"./crossDomain":8}],11:[{}],12:[{}],13:[{"./utils":18}],14:[{}],15:[{}],16:[{}],17:[{}],18:[{}],19:[{}]},{},[1]);