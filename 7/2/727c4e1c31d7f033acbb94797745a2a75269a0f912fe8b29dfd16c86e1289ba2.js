(function( blueConic, undefined ) {var ps='https://plugins.blueconic.net/';var pf='/gallery/';(();var InteractionType=BCClass.extend({init:getPreloadProperties:function(){return[]},getContent:function(){},onEvent:function(){},importLibraries:);(();(();(();(function(){ var InteractionTypeImpl=InteractionType.extend({html:{nl:{content:'<div class="bcCSContent">Plaats hier uw content</div>'},"default":{content:'<div class="bcCSContent">Place your content here</div>'}},init:function(a,b){this.blueConicClient=a,this.context=b?b:null,this.profile=a.profile.getProfile(),this.element=this.context.getDOMElement(),this.identifier='bc_'+this.context.getInteractionId(),this.parameters=this.context.getParameters(),this.currentInsertType=this.parameters.inserttype&&this.parameters.inserttype[0]?this.parameters.inserttype[0]:'replace','replacecontainer'!==this.currentInsertType||document.getElementById(this.identifier)||this._hidePosition();var c=this.parameters.content+'';this.htmlFragment=this._createElement(c),this._lastEvent=null,this._inlineCss=null,this._lastCheckDate=null,this._timeoutID=null},getPreloadProperties:getContent:function(){return(this._handleStyling(),!this.htmlFragment)?null:(this.element||(this.element=this.context.getDOMElement()),'replace'===this.currentInsertType)?(this._emptyElementsWithAttribute(this.htmlFragment,'div','data-bc-external'),this.htmlFragment.innerHTML):void 0},onUpdate:onLoad:onMessageReceived:_hidePosition:_showPosition:_placeContent:function(){var a=this.element||this.context.getDOMElement();if(a&&(this._handleStyling(),this.blueConicClient.isInEditMode()||this._handleURLs(this.htmlFragment),'replace'===this.currentInsertType?this._replaceContent(a):this.htmlFragment&&(this._emptyElementsWithAttribute(this.htmlFragment,'div','data-bc-external'),this._setContent()),!this.blueConicClient.isInEditMode())){var b=this.parameters.clickselector&&this.parameters.clickselector[0]?this.parameters.clickselector[0]:'';if(b){this.jQuery('body').one('click',b,this.jQuery.proxy(function(a){this._lastEvent&&this._lastEvent.originalEvent===a.originalEvent||this._logClickEvent(a)},this));try{this.jQuery(b).one('click',this.jQuery.proxy(function(a){this.lastEvent=a,this._logClickEvent(a)},this))}catch(a){}}var c=!!this.parameters.forceclick&&('true'===this.parameters.forceclick[0]||!0===this.parameters.forceclick[0]);c&&this.blueConicClient.createEvent('CLICK',this.context.getInteractionId());var d=this.parameters.javascript&&this.parameters.javascript[0]?this.parameters.javascript[0]:'';if(d)try{d=d.replace(/(^|\W)blueConicVariantId(\W|$)/g,'$1"'+this.context.getInteractionId()+'"$2'),this.jQuery('<script>'+d+'</script>').appendTo(this.jQuery('body'))}catch(a){console.error(a)}}},_replaceContent:function(a){this._assureVisibilty(a);var b=this.getContent();if(b){var c=a.nodeName?a.nodeName.toLowerCase():a.nodeName;if(-1===this.blueConicClient.util.array.indexOfArray(['area','base','br','col','command','embed','hr','img','input','keygen','link','meta','param','source','track','wbr'],c)){if(this.blueConicClient.isInEditMode&&this.blueConicClient.isInEditMode())a.innerHTML!==b&&(a.innerHTML=b);else try{this.jQuery(a).html(b)}catch(a){console.error(a)}}else if(a.parentNode){var d=a.parentNode.innerHTML,e=document.createElement('div');e.appendChild(a.cloneNode(!0));var f=e.innerHTML,g=d.replace(f,b);a.parentNode.innerHTML!==g&&(a.parentNode.innerHTML=g)}this._handleComplexObjects(a),this._trackView(a)}},_setContent:function(){var a=this._getElementByPosition(this.context.getPosition());if(a){var b=a.parent().get(0),c=this.jQuery('[data-bc-id="'+this.identifier+'"],#'+this.identifier);if(0<c.length)return this.blueConicClient.isInEditMode&&this.blueConicClient.isInEditMode()?null:(c.replaceWith(this.htmlFragment.innerHTML),this._handleComplexObjects(b),void('prepend'===this.currentInsertType?(a.prev().attr('data-bc-id',this.identifier),this._trackView(a.prev().get(0))):'append'===this.currentInsertType&&(a.next().attr('data-bc-id',this.identifier),this._trackView(a.next().get(0)))));if('prepend'===this.currentInsertType){var d=a.prev();if(0<d.length&&d.attr('data-bc-id')===this.identifier)return;if(this.blueConicClient.isInEditMode&&this.blueConicClient.isInEditMode())a.get(0).parentNode.insertBefore(this.htmlFragment,a.get(0)),this.blueConicClient.functions.setEditableNode('#bc_'+this.context.getInteractionId(),{positionName:'prepend',lockPosition:!0,redrawPosition:!0});else{try{a.before(this.htmlFragment.innerHTML)}catch(a){console.error(a)}var e=a.prev();e.attr('data-bc-id',this.identifier),this._trackView(e.get(0))}}if('append'===this.currentInsertType){var f=a.next();if(0<f.length&&f.attr('data-bc-id')===this.identifier)return;if(this.blueConicClient.isInEditMode&&this.blueConicClient.isInEditMode())a.get(0).parentNode.insertBefore(this.htmlFragment,a.get(0).nextSibling),this.blueConicClient.functions.setEditableNode('#bc_'+this.context.getInteractionId(),{positionName:'append',lockPosition:!0,redrawPosition:!0});else{try{a.after(this.htmlFragment.innerHTML)}catch(a){console.error(a)}var g=a.next();g.attr('data-bc-id',this.identifier),this._trackView(g.get(0))}}if('replacecontainer'===this.currentInsertType){if(this.blueConicClient.isInEditMode&&this.blueConicClient.isInEditMode())a.get(0).parentNode.replaceChild(this.htmlFragment,a.get(0)),this.blueConicClient.functions.setEditableNode('#bc_'+this.context.getInteractionId(),{positionName:'replace container',lockPosition:!0,redrawPosition:!0});else{var h=this.jQuery(this.htmlFragment.innerHTML).replaceAll(a);this._trackView(h.get(0))}this._showPosition()}this.blueConicClient.isInEditMode()&&null===this.context.getInteractionId()&&setTimeout(500),this._handleComplexObjects(b)}},_trackView:function(a){if(!this.blueConicClient.isInEditMode()){var b=!!(this.parameters.trackviewwhenvisible&&this.parameters.trackviewwhenvisible[0])&&'true'===this.parameters.trackviewwhenvisible[0];b?this._isVisible(a)?this.blueConicClient.createEvent('VIEW',this.context.getInteractionId()):(this._lastCheckDate=new Date().getTime(),this.jQuery(document).on('scroll.bcCSP'+this.identifier,this.jQuery.proxy(function(){this._checkVisibility(a)},this)),this.jQuery(window).on('resize.bcCSP'+this.identifier,this.jQuery.proxy(function(){this._checkVisibility(a)},this)),this._checkVisibility(a)):this.blueConicClient.createEvent('VIEW',this.context.getInteractionId())}},_checkVisibility:function(a){var b=new Date().getTime();return 500<=b-this._lastCheckDate&&(this._lastCheckDate=new Date().getTime(),this._isVisible(a))?(this.blueConicClient.createEvent('VIEW',this.context.getInteractionId()),this.jQuery(document).off('scroll.bcCSP'+this.identifier),this.jQuery(window).off('resize.bcCSP'+this.identifier),void clearTimeout(this._timeoutID)):void(clearTimeout(this._timeoutID),this._timeoutID=setTimeout(this.jQuery.proxy(function(){this._checkVisibility(a)},this),1500))},_isVisible:function(a){var b=a.getBoundingClientRect();return 0<=b.top&&b.top<window.innerHeight&&this.jQuery(a).is(':visible')},_logClickEvent:_getElementByPosition:_createElement:_handleURLs:function(a){var b=!!(this.parameters.newwindow&&this.parameters.newwindow[0])&&'true'===this.parameters.newwindow[0];if(b)for(var c=a.getElementsByTagName('a'),d=0,e=c.length;d<e;d++){var f=c[d],g=f.getAttribute('target');g||f.setAttribute('target','_blank')}this._handlePlaceholders(a)},_assureVisibilty:_handlePlaceholders:_getPropertiesFromPlaceholders:_emptyElementsWithAttribute:getElementsWithAttribute:_handleComplexObjects:_handleStyling:);var a = [];var i='contentinteractiontypespecial';a.push({url: 'http://code.jquery.com/jquery-1.11.2.min.js', sharing: 'local'});blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/contentinteractiontypespecial/ts_25b8fc569d2bb21e2b65eaf5782e7c3a/'},{ id : 'boolean', baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'boolean/1.0.1/'},{ id : 'html', baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'html/1.0.10/'},{ id : 'string', baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'string/1.0.1/'}]);})();(function(){ var InteractionTypeImpl=InteractionType.extend({DEFAULT_MAX_AGE:7776000000,MAX_ITEMS:100,SKIP_LIMITED:'limited',RESET_ROLLING:'rolling',RESET_CALENDAR:'calendar',init:getPreloadProperties:function(){return this.preLoadProperties},onLoad:_throwEvents:function(a){var b=this._getCurrentViews(a);(a.isHistoricallyAllowedView||a.isHistoricallyAllowedFreeView)&&this.blueConicClient.createEvent('cm_already_viewed'),a.isFreeView?(this.onceOnly&&!a.isHistoricallyAllowedFreeView||!this.onceOnly)&&(this.freeViewTracker.consumedFreeCount===this.freeViewTracker.totalFree?this.blueConicClient.createEvent('cm_last_free_view'):this.blueConicClient.createEvent('cm_free_view_'+this.freeViewTracker.consumedFreeCount)):((this.onceOnly&&!a.isHistoricallyAllowedView&&!a.isSkippedView||!this.onceOnly)&&(1===b?this.blueConicClient.createEvent('cm_firstview'):b===this.expireAt-1?this.blueConicClient.createEvent('cm_lastview'):b<this.expireAt&&this.blueConicClient.createEvent('cm_view_'+b)),b>=this.expireAt&&this.blueConicClient.createEvent('cm_exceeded'),a.isSkippedView&&this.blueConicClient.createEvent('cm_excluded'));var c=this.parameters.bottomFrom&&this.parameters.bottomFrom[0]?parseInt(this.parameters.bottomFrom[0]):null,d=this.parameters.bottomTo&&this.parameters.bottomTo[0]?parseInt(this.parameters.bottomTo[0]):null,e=this.parameters.middleFrom&&this.parameters.middleFrom[0]?parseInt(this.parameters.middleFrom[0]):null,f=this.parameters.middleTo&&this.parameters.middleTo[0]?parseInt(this.parameters.middleTo[0]):null,g=this.parameters.topFrom&&this.parameters.topFrom[0]?parseInt(this.parameters.topFrom[0]):null,h=this.parameters.topTo&&this.parameters.topTo[0]?parseInt(this.parameters.topTo[0]):null;c&&d&&b>=c&&b<=d&&this.blueConicClient.createEvent('cm_bottom'),e&&f&&b>=e&&b<=f&&this.blueConicClient.createEvent('cm_middle'),g&&h&&b>=g&&b<=h&&this.blueConicClient.createEvent('cm_top')},_addViewToHistory:_writeExtraProfileProperties:_getCurrentView:_getIncludeValue:_isPageViewSkipped:_setPageViewFree:_isRuleApplicable:function(a,b){var c=a.area.selectedoption;if('url'===c||'referrer'===c){var d='url'===c?b.url:b.referrer;if(a.anyWord||this._URLMatchesWords(d,a.containsmatches,a.words))return!0}else if('selector'===c){var e=this._getContent(a.area.selector,!0);if(e&&a.anyWord)return!0;if(a.area.selector&&a.words&&this._contentMatchesWords(e,a.containsmatches,a.words))return!0}else if('variable'===c){var f=this._getVariableValue(a.area.variable);if(f&&a.anyWord)return!0;if(f&&this._contentMatchesWords(f,a.containsmatches,a.words))return!0}else if('expression'===c){var g=this._getContent(a.area.expression,!1);if(g&&a.anyWord)return!0;if(g&&this._contentMatchesWords(g,a.containsmatches,a.words))return!0}else if('property'===c){var h=this.profile.getValues(a.property.id);if(0<h.length&&a.anyWord)return!0;var i=this;return h.some(function(b){return a.words&&i._contentMatchesWords(b,a.containsmatches,a.words)||a.dateTime&&!isNaN(parseInt(b))&&i.now.getTime()-parseInt(b)<=i.maxAge})}return!1},_isHistoricallyAllowed:function(a){if(!this.uniqueOnly)return!1;var b=this.history.included.filter(function(b){return b.u===a});return 0<b.length},_isHistoricallyAllowedFree:_getCurrentViews:_visitorQualifies:_getMaxAge:_contentMatchesWords:_URLMatchesWords:_getContent:_getVariableValue:_escapeRegularExpressionCharacters:_normalizeText:_getPropertyIdsFromExpression:PageView:SkippedViewTracker:FreeViewTracker:History:);var a = [];var i='contentmeter';a.push({url: 'http://code.jquery.com/jquery-1.11.2.min.js', sharing: 'local'});blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/contentmeter/ts_045cd023ce2a292ad427f942ccdf7ab3/'}]);})();(();(function(){ InteractionTypeImpl = InteractionType.extend({

    // Called every time a new interaction of this type is created.
    init: function (blueConicClient, interactionContext) {
        // Store the parameters for later use.
        this.blueConicClient = blueConicClient;
        this.interactionContext = interactionContext;
    },

    // Called right after the interactions are initialized.
    getContent: function () {
        return '';
    },

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
var a = [];var i='decodeauth';a.push({url: '/plugins/decodeauth/js/jwt-decode.js', sharing: 'none'});blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/decodeauth/ts_c1602d83fb39eb0c9917d018374c35c4/'}]);})();(();(();(function(){ var InteractionTypeImpl=InteractionType.extend({init:function(t,e){this.blueConicClient=t,this.context=e},getPreloadProperties:function(){return[this.context.getParameters().to,"interactions_viewed"]},onLoad:function(){var t=this.context.getParameters(),e=t.to?t.to[0]:undefined,n=t.to_static?t.to_static[0]:undefined,i="false"!==t.delivery[0],o=t.trigger[0],r=this.context.getProfile(),c=this.context.getInteractionId(),doSendMail=function(t,e){this.blueConicClient.mail.sendEmail(t,e),this.blueConicClient.createEvent("VIEW",t)};if((e||n)&&((r.getValue(e)||n)&&c)){var a=this.blueConicClient.json.parse(o);if(a)if("page"===a.type)doSendMail.call(this,c,i);else if("button"===a.type&&a.selector){var l=function(t){var e=document.querySelectorAll(a.selector),n=!1;Array.prototype.forEach.call(e,(),n&&(document.removeEventListener("click",l),doSendMail(c,i))}.bind(this);document.addEventListener("click",l)}}}});var a = [];var i='emailinteractiontype';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/2.1.2/'},{ id : 'email_address_from', baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'email_address_from/1.0.0/'},{ id : 'email_message', baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'email_message/1.0.3/'},{ id : 'string', baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'string/1.0.1/'}]);})();(();(();(();(();(();(();(();(function(){ InteractionTypeImpl = InteractionType.extend({

  // Called every time a new interaction of this type is created.
  init: function(blueConicClient, interactionContext) {
    // Store the parameters for later use.
    this.blueConicClient = blueConicClient;
    this.context = interactionContext;
    this.interactionID = this.context.getInteractionId();
    // Url for this interactiontype
    var interactionTypeId = this.context.getInteractionTypeId();
    var baseUrl = this.blueConicClient.getBaseURL(interactionTypeId);
    // Load the CSS for the paywall modal
    console.log('chris + loading paywall base URL '+baseUrl);
    var paywallModalCSS = baseUrl + 'css/defaults.css?4';
    blueConicClient.util.loadCSS(paywallModalCSS);

    //removing article for people trying to get around pw
    var articleContent = document.getElementsByClassName('body-copy');
    var articleContentCount;
    for (articleContentCount in articleContent){
      articleContent[articleContentCount].innerHTML = '';
    }

        var keys = {37: 1, 38: 1, 39: 1, 40: 1};

    
    var supportsPassive = false;
    try {
      window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get:       }));
    } catch(e) {}

    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);

    //var html = ' ';
    // Create a HTML fragment for the HTML we need to add to the DOM
    //this.htmlFragment = this.createElement(html);
  },

  // Called right after the interactions are initialized.
  getContent: 

  // Called when an interaction based on this type is executed.
  onLoad: function() {
    console.log("chris + inside onload!!");
    console.log(this.context.getParameters());
    console.log('chris+ sandvich');
    console.log('chris + '+this.context._parameters.en_US.javascript);
    this.showOverlay();
  },
  onUpdate: function () {
    //var d = this.context._parameters.en_US.javascript;
    var style = this.context._parameters.en_US.styling_css_inline;
    var userHTML = this.context._parameters.en_US.htmlbox;
    document.getElementById('bcpwModalWrapper').innerHTML = userHTML;
    document.getElementById('bcpwModalWrapperStyles').innerHTML = style;
    console.log('chris + updating prarmeters!');
    //document.location.reload();
  },

  showOverlay: function(){
    console.log(this.getContent());
    var d = this.context._parameters.en_US.javascript;
    var style = this.context._parameters.en_US.styling_css_inline;
    var userHTML = this.context._parameters.en_US.htmlbox;
    console.log('CHRIS+'+userHTML);
    // *******************
    //place styles
    // *******************
    if (style) try {
      var a = 'bcpwModalWrapperStyles';
      this.inlineCss = document.getElementById(a), this.inlineCss || (this.inlineCss = document.createElement('style'), this.inlineCss.id = a, this.inlineCss.innerHTML = style,document.head.appendChild(this.inlineCss));
    } catch (a) {
      console.error(a)
    }

    // *******************
    //place javascript if there is any
    // *******************
    if (d) try {
      d = this.jQuery('<script>' + d + '</script>').appendTo(this.jQuery('body'));
    } catch (a) {
      console.error(a)
    }
    // *******************
    //place HTML and CSS
    // *******************
    if (userHTML) try {
      var elemDiv = document.createElement('div');
      elemDiv.id = "bcpwModalWrapper";
      elemDiv.innerHTML = userHTML;
      document.body.appendChild(elemDiv);
      console.log("chris + adding HTML"+userHTML);
    } catch (a) {
      console.error(a)
    }
    //this.jQuery('body').append(this.getContent());
    console.log('chris + adding to page');
    var pluginID = this.context.getInteractionId();
    var thisObj = this.blueConicClient;
    this.blueConicClient.event.publish('Paywall Modal Plugin Shown');
    this.blueConicClient.createEvent('VIEW', this.context.getInteractionId());
    //track click of checkout button
    document.getElementById("startCheckout").addEventListener("click", function() {
      console.log('chris + clicked checkout!'+pluginID);
      thisObj.createEvent('CLICK', pluginID, this, ;
    });
  },

  // Utility function to create an element inside a div
  // createElement: function(html) {
  //   console.log("chris + inside creating html");
  //   var fragment;
  //
  //   if (!html) {
  //     return null;
  //   }
  //
  //   try {
  //     fragment = document.createElement('div');
  //     fragment.innerHTML = html;
  //   } catch(error) {
  //     return null;
  //   }
  //
  //   return fragment;
  // }

});
var a = [];var i='helloworldmodal';a.push({url: '/plugins/helloworldmodal/jquery/jquery-1.11.2.min.js', sharing: 'none'});blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/helloworldmodal/ts_55a01c089c3fad7ef4c84716670b71cd/'},{ id : 'string', baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + 'string/1.0.1/'}]);})();(();(();(();(();(();(();(();(();(();(function(){ var InteractionTypeImpl=InteractionType.extend({init:function(a,b){this.blueConicClient=a,this.context=b},getPreloadProperties:onLoad:);var a = [];var i='listener_ip_address';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/listener_ip_address/ts_02dbcaa258a21885238ee896ca3b52a4/'}]);})();(();(();(();(();(function(){ InteractionTypeImpl = InteractionType.extend({

  // Called every time a new interaction of this type is created.
  init: 

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
var a = [];var i='paywallshown';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/paywallshown/ts_3b1f4c3f1c981035df7250eec10ae824/'}]);})();(();(();(();})(blueConicClient);