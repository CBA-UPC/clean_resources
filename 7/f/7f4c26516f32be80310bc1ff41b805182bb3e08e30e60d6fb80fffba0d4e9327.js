(function( blueConic, undefined ) {var ps='https://plugins.blueconic.net/';var pf='/gallery/';(();var InteractionType=BCClass.extend({init:getPreloadProperties:function(){return[]},getContent:function(){},onEvent:function(){},importLibraries:);(();(();(();(function(){ 
var InteractionTypeImpl=InteractionType.extend({});
var a = [];var i='custom_events';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/custom_events/ts_2827456120522eee29ddffc5fe676727/'}]);})();(();(();(function(){ var InteractionTypeImpl=InteractionType.extend({init:getPreloadProperties:onLoad:getProfilePropertiesFromParameters:_migrate:_migrateToVersion2:_migrateConverterMappingsToVersion2:);var a = [];var i='enrichprofilewithvisitorinput';a.push({url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'enrichProfileWithVisitorInput/4.4.3/frontend/src/node_modules/@blueconic/jquery-x-jquerymigrate/load_jQuery3_5_X_jQueryMigrate.min.js', sharing: 'local'});a.push({url: blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'enrichProfileWithVisitorInput/4.4.3/frontend/src/node_modules/@blueconic/frontend-form-rule-service/formRuleService.js', sharing: 'local'});blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'enrichProfileWithVisitorInput/4.4.3/'}]);})();(();(();(();(function(){ 
var InteractionTypeImpl=InteractionType.extend({_LOG_SIZE:50,_PROFILE_PROPERTY:"pages_visited_detail",init:function(a,b){this.blueConicClient=a;this.context=b?b:null},getPreloadProperties:function(){return["page_view_detail"]},onLoad:function(){var a=new Date,b=a.getUTCFullYear(),d=this._stringify(a.getUTCMonth()+1),c=this._stringify(a.getUTCDate()),e=this._stringify(a.getUTCHours()),f=this._stringify(a.getUTCMinutes()),a=this._stringify(a.getUTCSeconds()),b=b+"-"+d+"-"+c+" "+e+":"+f+":"+a+" UTC",
d=0<document.getElementsByTagName("h1").length?document.getElementsByTagName("h1")[0].textContent:document.getElementsByTagName("title")[0].textContent,d=d.replace(/\n/g,""),b=b+" - "+d;80<b.length&&(b=b.substring(0,77)+"...");d=this.blueConicClient.profile.getProfile();(c=d.getValues(this._PROFILE_PROPERTY))?(c.length>this._LOG_SIZE&&(c=c.slice(c.length-this._LOG_SIZE+1)),c.push(b)):c=[b];d.setValues(this._PROFILE_PROPERTY,c);this.blueConicClient.profile.updateProfile()},_stringify:);
var a = [];var i='listener_pagelog';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/listener_pagelog/ts_2271620d0eb1a3f9ef3a1eef579e9b08/'}]);})();(();(function(){ var InteractionTypeImpl=InteractionType.extend({init:function(a,b){this.blueConicClient=a;this.context=b?b:null},onLoad:function(){var a=this.jQuery;a("div.image-wrapper").css("opacity",1);a("div.col-1-2 > h1").css("opacity",1)}});
var a = [];var i='opacityremover';a.push({url: '/plugins/opacityremover/js/jquery-1.11.2.min.js', sharing: 'local'});blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/opacityremover/ts_3a793f68a8c0a5622a7c56fa48014f16/'}]);})();(function(){ var InteractionTypeImpl = InteractionType.extend({
  init : function(blueConicClient, context) {
    this.blueConicClient = blueConicClient;
    this.context = context;
  },

  getPreloadProperties : 

  onLoad : function() {
    var profile = blueConicClient.profile.getProfile();

    var base = new Date(Date.UTC(2014, 1, 1)).getTime();
    var currentDate = new Date().getTime();

    var value = Math.floor((currentDate-base)/1000);
    profile.setValue("lastvisit_timestamp", value);

    this.blueConicClient.profile.updateProfile();
  }

});var a = [];var i='realtime_listener';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/realtime_listener/ts_ba09576bac6131fee9ec3890501f4784/'}]);})();(();(function(){ var InteractionTypeImpl=InteractionType.extend({init:getPreloadProperties:onLoad:function(){var a=this.context.getProfile(),c=this.context.getParameters(),c=c.matching_rules?c.matching_rules[0]:c.matching_rules;try{c=this._parse(c)}catch(h){this._bcLog("error parsing matching_rules",c);return}var d=!1;if(0<c.length)for(var e=0;e<c.length;e++){var b=c[e];if("parameter"==b.ruletype&&b.textinput&&0<b.profileproperty.length){var f=
this._getParameterByName(b.textinput);f&&("add"==b.addset?a.addValue(b.profileproperty[0].profileproperty,f):a.setValue(b.profileproperty[0].profileproperty,f),d=!0)}else if("regexp"==b.ruletype&&b.textinput&&0<b.profileproperty.length)try{var g=RegExp(b.textinput).exec(window.location);g&&("add"==b.addset?a.addValue(b.profileproperty[0].profileproperty,g[1]):a.setValue(b.profileproperty[0].profileproperty,g[1]),d=!0)}catch(i){this._bcLog("Unable to execute regexp",b.textinput)}}d&&this.blueConicClient.profile.updateProfile()},
_getParameterByName:function(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");a=RegExp("[\\?&]"+a+"=([^&#]*)").exec(window.location);return null==a?"":decodeURIComponent(a[1].replace(/\+/g," "))},_parse:function(a){if("undefined"!=typeof JSON)return JSON.parse(a);try{return eval("("+a+")")}catch(c){"undefined"!=typeof console&&console.log(c)}},_bcLog:function(){var a=null!=document.getElementById("bcSimIframe");"undefined"!=typeof console&&a&&console.log(arguments)}});
var a = [];var i='visitedurllistener';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/visitedurllistener/ts_3bad971355da8453bde5ad7e7a70d19f/'},{ id : 'urlmatchingrules', baseUrl : blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/urlmatchingrules/ts_f9da4c4e8a2a4e3eecdcf69675b40ee4/'}]);})();})(blueConicClient);