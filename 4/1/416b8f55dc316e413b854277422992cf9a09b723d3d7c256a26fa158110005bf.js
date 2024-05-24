if(typeof(window['convert'])=='undefined' || typeof(window['convert']['doUseBackupData'])=='undefined') {
window['convertData']={"device":{"mobile":false,"tablet":false,"desktop":true},"geo":{"country":"ES","city":"BARCELONA","continent":"EU","state":"CT"}};
var convert_temp = convert_temp || {}; convert_temp.data = {"u_id":"10042341","prj":{"utc_of":"-18000","extset":{"gdprw":false,"maxvis":0,"maxtv":0,"minordv":0,"maxordv":99999,"mindays":999,"csmb":"$","minvis":5,"minconv":5,"stopTrackingGoalsAfterDays":"30","dnt":"0","ga":{"on":true,"measurementId":"G-EJW7Z9Z8V9","type":"ga4"},"d_anon":true,"autlnk":false,"srm_check":false,"smart_recommendations":true,"stats_engine_processing":{"stats_type":"frequentist","power":80,"test_type":"one_tail","multiple_comparison_correction":"sidak","power_calculation_type":"none","fixed_mde":1,"decision_threshold":95},"gaUA":[]},"id":"10042997","name":"Project #10042997","global_d":{"js":"","css":""},"domains":{"signupgenius.com":["signupgenius.com","staging.signupgenius.com"],"signupgenius.rocks":["test.signupgenius.rocks","marketing.signupgenius.rocks"]},"domainsCount":4},"experiments":{"100434194":{"n":"Test #100434194","v":"10","id":100434194,"t_r_a":[],"t_r_f":[],"t_seg":[],"t_ad_r":[],"locs":["100414728"],"tp":"4","integr":{"ga":{"on":true,"type":"ga4","measurementId":"G-EJW7Z9Z8V9"}},"s":"1","global_d":{"js":function(){ 
 return true; 
},"css":""},"sets":{"minordv":0,"maxordv":99999},"vars":{"100487166":{"p":"100.00","secs":[""],"content":{"js":[{"c":function(){ 
 return true; 
},"w":2},{"c":function(){ 
// Log if clicked the Collect icon
function collectIconClicked(){
  var dateCollectIconClicked = new Date().getTime();
   localStorage.setItem('collect-money-indicator-clicked',dateCollectIconClicked);
}
document.getElementById('collect').addEventListener('click', collectIconClicked);

// Only show indicator if NOT setup for LumaPay and HAS NOT clicked the Collect icon yet
if(window.sug_memberinfo && !window.sug_memberinfo.HASPAYMENTS && !localStorage.getItem('collect-money-indicator-clicked')){
  setTimeout(function(){
    document.querySelectorAll(".collect-money-indicator").forEach(;
  },250);
}
},"w":2},{"c":function(){ 
 return convert.T.applyChange('#collect > .menu-icon', {"originalSelector":"#collect > .menu-icon","insertHtml":{"beforeend":"<div class=\"collect-money-position\"><div class=\"collect-money-indicator\"></div> </div>"},"styles":"{}"}, undefined); 
},"w":3,"s":"#collect > .menu-icon"}],"html":[{"c":"<style type=\"text\/css\" media=\"screen\">.collect-money-position {\n  position: relative;\n}\n.collect-money-indicator {\n  display: none;\n  position: absolute;\n  top: -48px;\n  right: -8px;\n  width: 10px;\n  height: 10px;\n  background-color: red;\n  border-radius: 10px;\n  -webkit-animation: indicator-dot 1s linear alternate infinite;\n  animation: indicator-dot 1s linear alternate infinite;\n}\n@keyframes indicator-dot {  \n  0% { transform: scale(.85,.85); opacity:.85; }\n  100% { transform: scale(1,1); opacity:1; }\n}\n@-webkit-keyframes indicator-dot {\n  0% { transform: scale(.85,.85); opacity:.85; }\n  100% { transform: scale(1,1); opacity:1; }\n}<\/style>","w":0}]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #100487166"}},"vars_sort":[100487166]},"100437504":{"n":"Test #100437504","v":"10","id":100437504,"t_r_a":[],"t_r_f":[],"t_seg":[],"t_ad_r":[{"r":[[[{"entid":"16","compid":"1","not":false,"data":1,"repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"21","compid":"10","not":false,"data":0,"repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"tp":"2"}],"locs":["100438928"],"tp":"4","integr":{"ga":{"on":null,"type":"ga4"}},"s":"1","global_d":{"js":function(){ 
 return true; 
},"css":""},"sets":{"minordv":0,"maxordv":99999},"vars":{"100494769":{"p":"20.00","secs":[""],"content":{"js":[{"c":"w":2},{"c":function(){ 
convert.redirect("https://www.signupgenius.com/pricing");
},"w":2}],"html":[]},"chng":["Version 1"],"active":1,"settings":[],"name":"Var #100494769"}},"vars_sort":[100494769]}},"goals":{"100414521":{"add":[],"vpoints":"0","tp":4,"sts":[],"isbounce":0,"ga_event":"payments_activation"},"100419481":{"add":[],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":"#collect > .menu-icon"}]},"isbounce":0},"100422238":{"add":[],"vpoints":"0","tp":4,"sts":[],"isbounce":0,"ga_event":"purchase"},"100425660":{"add":[],"vpoints":"0","tp":4,"sts":[],"isbounce":0,"ga_event":"free_trial"},"100436633":{"add":[],"vpoints":"0","tp":2,"sts":{"evts":[{"ev":"click","s":"#trialLink"}]},"isbounce":0}},"specgoals":[],"segments":[],"entities":{"1":{"entity_id":"1","group_id":"1","nice_name":"browser"},"2":{"entity_id":"2","group_id":"1","nice_name":"browserV"},"3":{"entity_id":"3","group_id":"1","nice_name":"os"},"4":{"entity_id":"4","group_id":"1","nice_name":"flash"},"5":{"entity_id":"5","group_id":"1","nice_name":"java"},"6":{"entity_id":"6","group_id":"1","nice_name":"screenColor"},"7":{"entity_id":"7","group_id":"1","nice_name":"screenResolution"},"10":{"entity_id":"10","group_id":"2","nice_name":"landingPage"},"11":{"entity_id":"11","group_id":"3","nice_name":"keyword"},"12":{"entity_id":"12","group_id":"3","nice_name":"sourceName"},"13":{"entity_id":"13","group_id":"3","nice_name":"referalMedium"},"14":{"entity_id":"14","group_id":"3","nice_name":"referalPath"},"15":{"entity_id":"15","group_id":"5","nice_name":"dayHour"},"16":{"entity_id":"16","group_id":"4","nice_name":"pageDepth"},"17":{"entity_id":"17","group_id":"4","nice_name":"daysLastVisit"},"18":{"entity_id":"18","group_id":"4","nice_name":"visitDuration"},"19":{"entity_id":"19","group_id":"4","nice_name":"timeOnPage"},"20":{"entity_id":"20","group_id":"4","nice_name":"avgTimeOnPAge"},"21":{"entity_id":"21","group_id":"4","nice_name":"visitKnown"},"22":{"entity_id":"22","group_id":"4","nice_name":"countVisits"},"24":{"entity_id":"24","group_id":"4","nice_name":"city"},"25":{"entity_id":"25","group_id":"4","nice_name":"country"},"26":{"entity_id":"26","group_id":"4","nice_name":"language"},"27":{"entity_id":"27","group_id":"4","nice_name":"region"},"28":{"entity_id":"28","group_id":"4","nice_name":"segment"},"29":{"entity_id":"29","group_id":"2","nice_name":"queryString"},"31":{"entity_id":"31","group_id":"2","nice_name":"pageUrl"},"33":{"entity_id":"33","group_id":"4","nice_name":"visitorPoints"},"34":{"entity_id":"34","group_id":"5","nice_name":"weekDay"},"35":{"entity_id":"35","group_id":"5","nice_name":"ptzWeekDay"},"36":{"entity_id":"36","group_id":"5","nice_name":"ptzDayHour"},"37":{"entity_id":"37","group_id":"5","nice_name":"minute"},"38":{"entity_id":"38","group_id":"5","nice_name":"tzMinute"},"39":{"entity_id":"39","group_id":"6","nice_name":"v0"},"40":{"entity_id":"40","group_id":"6","nice_name":"v1"},"41":{"entity_id":"41","group_id":"6","nice_name":"v2"},"42":{"entity_id":"42","group_id":"6","nice_name":"v3"},"43":{"entity_id":"43","group_id":"6","nice_name":"v4"},"44":{"entity_id":"44","group_id":"6","nice_name":"v41"},"45":{"entity_id":"45","group_id":"6","nice_name":"v5"},"46":{"entity_id":"46","group_id":"6","nice_name":"cv1"},"47":{"entity_id":"47","group_id":"6","nice_name":"cv2"},"48":{"entity_id":"48","group_id":"6","nice_name":"cv3"},"49":{"entity_id":"49","group_id":"6","nice_name":"cv4"},"50":{"entity_id":"50","group_id":"2","nice_name":"pageUrl1"},"51":{"entity_id":"51","group_id":"1","nice_name":"useragent"},"52":{"entity_id":"52","group_id":"4","nice_name":"testedVisitor"},"53":{"entity_id":"53","group_id":"4","nice_name":"cookie"},"54":{"entity_id":"54","group_id":"6","nice_name":"jscondition"},"55":{"entity_id":"55","group_id":"1","nice_name":"deviceMobile"},"56":{"entity_id":"56","group_id":"1","nice_name":"deviceTablet"},"57":{"entity_id":"57","group_id":"1","nice_name":"deviceDesktop"},"58":{"entity_id":"58","group_id":"3","nice_name":"referalCampaign"},"59":{"entity_id":"59","group_id":"7","nice_name":"weatherCondition"},"60":{"entity_id":"60","group_id":"4","nice_name":"goal"},"61":{"entity_id":"61","group_id":"4","nice_name":"bucketedSegment"}},"eclean":["100417083","100435354","100435391"],"locations":{"100414728":{"r":[[[{"entid":"50","compid":"8","not":false,"data":"https:\/\/www.signupgenius.com\/myaccount","repeat":null,"timesearch":null,"visitsCountSearch":null},{"entid":"31","compid":"8","not":false,"data":"https:\/\/www.signupgenius.com\/index.cfm?go=c.myaccount","repeat":null,"timesearch":null,"visitsCountSearch":null},{"entid":"31","compid":"8","not":false,"data":"https:\/\/www.signupgenius.com\/index.cfm?go=t.","repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"n":"Location #100414728"},"100438928":{"r":[[[{"entid":"54","compid":"10","not":false,"data":"(window.location.pathname == '\/')","repeat":null,"timesearch":null,"visitsCountSearch":null}],[{"entid":"50","data":"test","compid":"6","not":true,"repeat":null,"timesearch":null,"visitsCountSearch":null}]]],"n":"Location #100438928"}},"comparisons":{"1":{"comparison_id":"1","module_name":"equal"},"2":{"comparison_id":"2","module_name":"less"},"3":{"comparison_id":"3","module_name":"lessEqual"},"4":{"comparison_id":"4","module_name":"matches"},"5":{"comparison_id":"5","module_name":"regeMatches"},"6":{"comparison_id":"6","module_name":"contains"},"7":{"comparison_id":"7","module_name":"endsWith"},"8":{"comparison_id":"8","module_name":"startsWith"},"9":{"comparison_id":"9","module_name":"isIn"},"10":{"comparison_id":"10","module_name":"equal"},"11":{"comparison_id":"11","module_name":"commaSepStringsContains"},"12":{"comparison_id":"12","module_name":"contains"}}};
/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//
*/
window.convert_temp = window.convert_temp || {};
(();

var convert_temp = convert_temp || {};

// if jquery is not included before this point, let's try to use the global one
if (!convert_temp.jQuery) {
  if (typeof window['jQuery'] != 'undefined')
    convert_temp.jQuery = window['jQuery'];
  else convert_temp.jQuery = window['$'];
}

//check if we have jQuery, if not throw an error
if (
  typeof convert_temp.jQuery == 'undefined' ||
  typeof convert_temp.jQuery.fn == 'undefined'
)
  throw 'jQuery library was not found, aborting everything...';

convert_temp.jQuery = convert_temp.jQuery || {};
convert_temp.jQuery.fn = convert_temp.jQuery.fn || {};
(();
!);
		
			
			window.convert = window.convert || {};
			if (window.convert_temp) {
				if (convert_temp.jQuery) convert.$ = convert_temp.jQuery;
				convert.T = window.convert_temp.toolkit;
				delete window.convert_temp;
			}
			
		
		(();try { convert.run();} catch(e) {if(!(typeof(e)=='object' && e.name && e.name=='URL REDIRECT')) {var loglyjson = {};loglyjson.jserror = e;convert.sendLog(loglyjson,'mainGeneralError');}}

}