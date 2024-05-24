(function( blueConic, undefined ) {var ps='https://plugins.blueconic.net/';var pf='/gallery/';(();var InteractionType=BCClass.extend({init:getPreloadProperties:function(){return[]},getContent:function(){},onEvent:importLibraries:);(();(();(();(();(();(function(){ var InteractionTypeImpl=InteractionType.extend({DEFAULT_MAX_AGE:7776000000,MAX_ITEMS:100,SKIP_LIMITED:'limited',RESET_ROLLING:'rolling',RESET_CALENDAR:'calendar',init:getPreloadProperties:function(){return this.preLoadProperties},onLoad:_throwEvents:function(a){var b=this._getCurrentViews(a);(a.isHistoricallyAllowedView||a.isHistoricallyAllowedFreeView)&&this.blueConicClient.createEvent('cm_already_viewed'),a.isFreeView?(this.onceOnly&&!a.isHistoricallyAllowedFreeView||!this.onceOnly)&&(this.freeViewTracker.consumedFreeCount===this.freeViewTracker.totalFree?this.blueConicClient.createEvent('cm_last_free_view'):this.blueConicClient.createEvent('cm_free_view_'+this.freeViewTracker.consumedFreeCount)):((this.onceOnly&&!a.isHistoricallyAllowedView&&!a.isSkippedView||!this.onceOnly)&&(1===b?this.blueConicClient.createEvent('cm_firstview'):b===this.expireAt-1?this.blueConicClient.createEvent('cm_lastview'):b<this.expireAt&&this.blueConicClient.createEvent('cm_view_'+b)),b>=this.expireAt&&this.blueConicClient.createEvent('cm_exceeded'),a.isSkippedView&&this.blueConicClient.createEvent('cm_excluded'));var c=this.parameters.bottomFrom&&this.parameters.bottomFrom[0]?parseInt(this.parameters.bottomFrom[0]):null,d=this.parameters.bottomTo&&this.parameters.bottomTo[0]?parseInt(this.parameters.bottomTo[0]):null,e=this.parameters.middleFrom&&this.parameters.middleFrom[0]?parseInt(this.parameters.middleFrom[0]):null,f=this.parameters.middleTo&&this.parameters.middleTo[0]?parseInt(this.parameters.middleTo[0]):null,g=this.parameters.topFrom&&this.parameters.topFrom[0]?parseInt(this.parameters.topFrom[0]):null,h=this.parameters.topTo&&this.parameters.topTo[0]?parseInt(this.parameters.topTo[0]):null;c&&d&&b>=c&&b<=d&&this.blueConicClient.createEvent('cm_bottom'),e&&f&&b>=e&&b<=f&&this.blueConicClient.createEvent('cm_middle'),g&&h&&b>=g&&b<=h&&this.blueConicClient.createEvent('cm_top')},_addViewToHistory:_writeExtraProfileProperties:_getCurrentView:_getIncludeValue:_isPageViewSkipped:_setPageViewFree:_isRuleApplicable:function(a,b){var c=a.area.selectedoption;if('url'===c||'referrer'===c){var d='url'===c?b.url:b.referrer;if(a.anyWord||this._URLMatchesWords(d,a.containsmatches,a.words))return!0}else if('selector'===c){var e=this._getContent(a.area.selector,!0);if(e&&a.anyWord)return!0;if(a.area.selector&&a.words&&this._contentMatchesWords(e,a.containsmatches,a.words))return!0}else if('variable'===c){var f=this._getVariableValue(a.area.variable);if(f&&a.anyWord)return!0;if(f&&this._contentMatchesWords(f,a.containsmatches,a.words))return!0}else if('expression'===c){var g=this._getContent(a.area.expression,!1);if(g&&a.anyWord)return!0;if(g&&this._contentMatchesWords(g,a.containsmatches,a.words))return!0}else if('property'===c){var h=this.profile.getValues(a.property.id);if(0<h.length&&a.anyWord)return!0;var i=this;return h.some(function(b){return a.words&&i._contentMatchesWords(b,a.containsmatches,a.words)||a.dateTime&&!isNaN(parseInt(b))&&i.now.getTime()-parseInt(b)<=i.maxAge})}return!1},_isHistoricallyAllowed:function(a){if(!this.uniqueOnly)return!1;var b=this.history.included.filter(function(b){return b.u===a});return 0<b.length},_isHistoricallyAllowedFree:_getCurrentViews:_visitorQualifies:_getMaxAge:_contentMatchesWords:_URLMatchesWords:_getContent:_getVariableValue:_escapeRegularExpressionCharacters:_normalizeText:_getPropertyIdsFromExpression:PageView:SkippedViewTracker:FreeViewTracker:History:);var a = [];var i='contentmeter';a.push({url: 'http://code.jquery.com/jquery-1.11.2.min.js', sharing: 'local'});blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/contentmeter/ts_045cd023ce2a292ad427f942ccdf7ab3/'}]);})();(();(function(){ InteractionTypeImpl = InteractionType.extend({

    // Called every time a new interaction of this type is created.
    init: 

    // Called right after the interactions are initialized.
    getContent: 

    // Called when an interaction based on this type is executed.
    onLoad: 

    decodeHere: function () {
        const MNGSession = localStorage.getItem('__MNG_Session');
        if (MNGSession) {
            const jwtToDecode = JSON.parse(MNGSession).idToken;
            let decoded = jwt_decode(jwtToDecode);
            if (decoded.email.includes('@example.com') || decoded.sub.includes(',')) {
                decoded.email = "";
                decoded.sub = "";
            }
            if (!window.decodedJWT) {
                window.decodedJWT = decoded;
            }
            blueConicClient.createEvent("jwt_decoded");
        } else {
            //if MNG session token doesn't exist check for cookie
            this.decodeJWTFromCookie();
        }
    },

    decodeJWTFromCookie: function () {
        const mngEntitlements = this.getCookieValue('mng-entitlements');
        if (mngEntitlements) {
            let decoded = jwt_decode(mngEntitlements);
            //don't record the fake emails we generate in entitler, useless for marketing
            if (decoded.email.includes('@example.com') || decoded.sub.includes(',')) {
                decoded.email = "";
                decoded.sub = "";
            }
            window.jwtFromCookie = decoded;
            blueConicClient.createEvent('jwt_decoded');
        }
    },

    //method checks cookies by name and returns the value for that cookie
    getCookieValue: function (cookieName) {
        const cookies = document.cookie.split('; ');

        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].split('=');
            const name = cookie[0];
            const value = cookie[1];

            if (name === cookieName) {
                return value;
            }
        }
        return null; // Cookie not found
    },

    surfaceNavigaAccountNumber: function () {
        document.addEventListener('onFinish', async () => {
            const userData = Connext.Storage.GetUserData()
            if (userData.OwnedSubscriptions.length > 0) {
                window.navigaAccountNumber = userData.OwnedSubscriptions[0].AccountNumber
            }
            blueConicClient.createEvent("account_received");
        })
    }
});
var a = [];var i='decodeauth';a.push({url: '/plugins/decodeauth/js/jwt-decode.js', sharing: 'none'});blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/decodeauth/ts_c1602d83fb39eb0c9917d018374c35c4/'}]);})();(();(();(();(();(();(();(();(();(();(();(();(();(();(();(();(();(();(();(function(){ InteractionTypeImpl = InteractionType.extend({

  // Called every time a new interaction of this type is created.
  init: function(blueConicClient, interactionContext) {
    // Store the parameters for later use.
    this.blueConicClient = blueConicClient;
    this.interactionContext = interactionContext;
  },

  // Called right after the interactions are initialized.
  getContent: function() {
    return '';
  },

  // Called when an interaction based on this type is executed.
  onLoad: function() {
    this.decodeHere();
  },

  decodeHere: function(){
    document.addEventListener(
        'onPaywallShown',
        function (e) {
          let connextAction = jQuery('[id*="ConneXt_Action"]').length;
          let regwallAction = jQuery('#registrationWall').length;
          let viewsLeft = Connext.Storage.GetArticlesLeft();
          if (connextAction && regwallAction){
            //do nothing it's a regwall
          } else if (connextAction && viewsLeft === 0 ){
            var bcProfile = blueConicClient.profile.getProfile();
            bcProfile.addValue('paywall_seen_count', Math.floor(Math.random() * 1000));
            bcProfile.setValue('paywall_seen_date', new Date().getTime());
            blueConicClient.profile.updateProfile();
            blueConicClient.createEvent("connext_paywall_shown");
          }
        });
  },


});
var a = [];var i='paywallshown';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/paywallshown/ts_3b1f4c3f1c981035df7250eec10ae824/'}]);})();(();(();})(blueConicClient);