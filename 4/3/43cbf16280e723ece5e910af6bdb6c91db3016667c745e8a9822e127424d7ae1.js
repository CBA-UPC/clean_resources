/* global ga */

var AOP = AOP || {};

/* Generic Functionality
 * - init - initialise page
 * - initEventClickLinks - initialise any anchor containing required `data-ga-event-label` attributes - initialised onload
 * - sendGaTrackingEvent - generic action to send event - can be called anywhere
 * */
AOP.gaEvents = {

  dom: {
    eventClickLinks: null,
    eventClickButtons: null
  },

  init: function () {
    /*
     * This file will be expanded to take in all the analytic event tickets but currently provides the functionality for
     * - track generic link clicks based on data-ga-event-label attribute. See initEventClickLinks
     * - track public kbart download events - generic link functionality
     * - track mycore kbart download events - bespoke - AOP.gaEvents.mycore.initMyCoreKbartDownload
     * - track use of COUNTER reports - bespoke - AOP.gaEvents.mycore.initMyCoreCounterDownload
     * - track send to kindle over 10mb file failures - bespoke - AOP.gaEvents.sendto
     */
    AOP.gaEvents.initEventClickLinks();
    AOP.gaEvents.mycore.initMyCoreCounterDownload();
    AOP.gaEvents.mycore.scanMyCoreCounterErrors();

  },

  setState: function (action, status) {
    // this will return the current state of the event
    // expand this if there will be other states for other elements
    var APPLIED = '_applied';
    var REMOVED = '_removed';
    return action + (status ? APPLIED : REMOVED);
  },

  initEventClickLinks: function () {
    this.dom.eventClickLinks = $('[data-ga-event-label]');
    this.dom.eventClickLinks.off('click.gaEvents').on('click.gaEvents', function () {
      var action = $(this).attr('data-ga-check-state') ? AOP.gaEvents.setState($(this).attr('data-ga-event-action'), $(this).is(':checked')) : $(this).attr('data-ga-event-action');
      var cat = $(this).attr('data-ga-event-cat');
      var label = $(this).attr('data-ga-event-label') || '';
      var value = $(this).attr('data-ga-event-value');
      AOP.gaEvents.sendGaTrackingEvent(cat, action, label, value);
    });
  },


  sendGaTrackingEvent: function (eventCategory, eventAction, eventLabel, eventValue) {

    if (eventCategory && eventAction) {
      // ga('send', {
      //   hitType: 'event',
      //   eventCategory: eventCategory,
      //   eventAction: eventAction,
      //   eventLabel: eventLabel || '',
      //   eventValue: typeof eventValue === 'number' ? eventValue : 0,
      //   transport: 'beacon'
      // });
    }
  }
};


/* Bespoke Search Facet Functionality
 * - see search.js for usage
 * - fromYear, toYear - placeholder used to track pub dates on the filters, cause its values are dynamic
 * - getGaData - helper function used in search.js, will add the data-ga-event-* str to the inputs as the elements are generated on the client
 * - initPubDates - setter for the from/to years
 * - trackPubDates - fires pub date events
 */
AOP.gaEvents.search = {
  fromYear: null,
  toYear: null,

  getGaData: function (key, bucket) {
    /*
     Triggered when facets are added to the view, via ajax
     Init all the data ga will need, only the ones below are tracked, just add if the other facets will be tracked
     This will return a data string that will be appended to the new node on the facet container
     */
    var actions = {
      'onlyShowAvailable': 'access_to_facet',
      'openAccess': 'open_access_facet',
      'productCollection': 'collection_facet',
      'productPublisher': 'publisher_facet',
      'productDate': 'publication_date_facet',
      'productSubject': 'subject_facet',
      'productTypes': 'content_type_facet',
      'productSociety': 'society_facet'
    };

    var gaDataStr = '';
    var gaDataActionStr = actions[key];
    if (!gaDataActionStr) {
      //event is not tracked, return!
      return;
    }

    gaDataStr += 'data-ga-event-action="' + gaDataActionStr + '" ';
    gaDataStr += 'data-ga-event-label="' + (bucket.label ? bucket.label : bucket.key) + '" ';
    gaDataStr += 'data-ga-check-state="true" ';

    return gaDataStr;
  },

  initPubDates: function (fromYear, toYear) {
    AOP.gaEvents.search.fromYear = fromYear || $('#startYear').val();
    AOP.gaEvents.search.toYear = toYear || $('#endYear').val();
  },

  trackPubDates: function () {

    var _startYear = $('#startYear').val() || '';
    var _endYear = $('#endYear').val() || '';

    if (AOP.gaEvents.search.fromYear !== _startYear) {
      var _actionFrom = AOP.gaEvents.setState('date_range_from', _startYear.length > 0);
      AOP.gaEvents.sendGaTrackingEvent('refine_search', _actionFrom, _startYear || AOP.gaEvents.search.fromYear);
    }

    if (AOP.gaEvents.search.toYear !== _endYear) {
      var _actionTo = AOP.gaEvents.setState('date_range_to', _endYear.length > 0);
      AOP.gaEvents.sendGaTrackingEvent('refine_search', _actionTo, _endYear || AOP.gaEvents.search.toYear);
    }

    AOP.gaEvents.search.initPubDates(_startYear, _endYear);
  }
};

/* Bespoke Bibliographic Functionality
 * - category - const category for this action
 * - type - could be either public or my_core
 * - init - helper function used set/bind the dom form, events, and biblio type
 * - action - helper function to fire the payload to ga
 * - getBiblioAction - build the biblio action string
 * - getBiblioLabel - build the biblio label string
 */
AOP.gaEvents.bibliographic = {
  category: 'bibliographic_data',
  type: null,

  init: function (formName, type) {
    //services-marc-record-download public
    //biblio-record-download my_core
    var biblioForm = $('form#' + formName);
    if (biblioForm.length === 0 || !type) {
      return;
    }

    AOP.gaEvents.dom.biblioForm = biblioForm;
    AOP.gaEvents.dom.biblioForm.off('submit.gaEvents.bibliographic').on('submit.gaEvents.bibliographic', AOP.gaEvents.bibliographic.action);
    AOP.gaEvents.bibliographic.type = type;
  },

  action: function () {
    var errors = AOP.gaEvents.dom.biblioForm.find('.error:visible');
    if (errors.length === 0) {
      var eventCategory = AOP.gaEvents.bibliographic.category;
      var eventAction = AOP.gaEvents.bibliographic.getBiblioAction();
      var eventLabel = AOP.gaEvents.bibliographic.getBiblioLabel();
      AOP.gaEvents.sendGaTrackingEvent(eventCategory, eventAction, eventLabel);
    }
  },

  getBiblioAction: function () {
    var bySuffix = {
      'GENERAL_COLLECTION': 'oa_books',
      'COLLECTION_COLLECTION': 'by_collection',
      'PUBLISHER_COLLECTION': 'by_publisher',
      'marc-byOrganisation': 'by_org',
      'marc-byOrder': 'by_order',
      'isbn': 'by_isbn'
    };

    var format = $('input[name*=recordFormat]:checked').val().toLowerCase();
    var type = AOP.gaEvents.bibliographic.type;
    var contentType = type === 'public' ?
      $('input[name*=contentType]:checked').val() :
      AOP.gaEvents.dom.biblioForm.find('ul.tabs li.active a').attr('href').replace('#', '');

    //ignore kbart events
    return format === 'kbart' ? null : format + '_' + type + '_' + bySuffix[contentType];
  },

  getBiblioLabel: function () {
    //with/without date
    var startDate = $('input[name*=startDate]').val();
    var endDate = $('input[name*=endDate]').val();
    return (!!startDate || !!endDate ? 'with ' : 'without ') + 'date';
  }
};

/* Bespoke MyCore Functionality
 * - initMyCoreKbartDownload - initialised and cleared in organisation-kbart.js
 * - translateMyCoreTabToEventAction - helper function to identify correct action for the request
 * - clearMyCoreKbartDownload - depreciated - was used to clear when non kbart down type chosen in my-core biblio
 * */
AOP.gaEvents.mycore = {

  initMyCoreKbartDownload: function () {
    AOP.gaEvents.dom.myKbartForm = $('#kbart-record-download');
    AOP.gaEvents.dom.myKbartForm.off('submit.gaEvents.kbart'); //namespacing needed to preserve existing functionality
    AOP.gaEvents.dom.myKbartForm.on('submit.gaEvents.kbart', AOP.gaEvents.mycore.actionMyCoreKbartDownload);
  },

  actionMyCoreKbartDownload: function () {
    var errors = AOP.gaEvents.dom.myKbartForm.find('.error:visible');

    if (errors.length === 0) {
      // For initial launch of my core kbart in own space we have only organisational action. The other tabs
      // will be reintroduced with a refactor of the relevant views in coming sprints. Hard coding this in the meantime
      var action = AOP.gaEvents.mycore.translateMyCoreTabToEventAction();
      AOP.gaEvents.sendGaTrackingEvent('kbart', action);
    }
  },

  translateMyCoreTabToEventAction: function () {

    var downloadTabLabel = $('#bibliographicData ul.tabs li.active a').attr('href').replace('#', '');

    var actions = {
      'kbart-byOrganisation': 'by_org',
      'kbart-byOrder': 'by_order',
      'order-by-package': 'by_package'
    };

    //console.log('actions[downloadTabLabel]', actions[downloadTabLabel]);

    return 'my_core_' + actions[downloadTabLabel] || 'unknown';
  },

  // clearMyCoreKbartDownload: function () {
  //   if (AOP.gaEvents.dom.myKbartForm) {
  //     AOP.gaEvents.dom.myKbartForm.off('submit.gaEvents.kbart');
  //     AOP.gaEvents.dom.myKbartForm = null;
  //   }
  // },

  initMyCoreCounterDownload: function () {
    AOP.gaEvents.dom.counterForm = $('form#usageReports');
    AOP.gaEvents.dom.counterForm.on('submit', AOP.gaEvents.mycore.actionMyCoreCounterRequest);
  },

  actionMyCoreCounterRequest: function () {
    var type = AOP.gaEvents.dom.counterForm.find('select#counterReportTypeSelect').val();
    var label = AOP.gaEvents.dom.counterForm.find('select#reportFormat').val().toUpperCase();
    if (type.indexOf('counter#') > -1) {
      action = type.replace('counter#', 'request_');
    } else {
      action = type.replace('custom#', 'request_');
    }

    AOP.gaEvents.sendGaTrackingEvent('counter4', action, label);
  },

  actionMyCoreCounterDownload: function () {
    var errors = AOP.gaEvents.dom.counterForm.find('.error:visible');

    if (errors.length === 0) {
      AOP.gaEvents.sendGaTrackingEvent('counter4', 'counter_report_downloaded', $(this).attr('data-format'));
    }
  },

  //this function would be invoked by front end error message
  scanMyCoreCounterErrors: function () {
    var counterError = $('#counter-error-marker');
    if (counterError.length) {
      var label = counterError.attr('data-report-type').toUpperCase();
      AOP.gaEvents.sendGaTrackingEvent('counter4', 'download_failed', label);
    }
  },

  //this function would be invoked by function call
  actionMyCoreCounterError: function (failedResponse) {
    var label = 'Unknown';
    var causesOfFailureMapping = {
      'gateway': 'gateway timeout',
      'invalid': 'invalid data',
      'aws': 'AWS error'
    };

    var responseString = JSON.stringify(failedResponse);

    for (var cause in causesOfFailureMapping) {
      if (responseString && responseString.indexOf(cause) > -1) {
        label = causesOfFailureMapping[cause];
      }
    }

    AOP.gaEvents.sendGaTrackingEvent('counter4', 'download_failed', label);
  }
};

$(document).ready(AOP.gaEvents.init);
wo-sub-menu>li.coh-menu-list-item.has-children.is-collapsed>a::after,.business-unit-academic>.group_menu_container ul.level-two-sub-menu>li.coh-menu-list-item.has-children.is-expanded>a::after{content:unset}.group_menu_container ul.coh-menu-list-container>li.coh-menu-list-item{list-style:none;border-bottom:1px solid #e0e0e0;margin:0 12px;padding:12px 4px 11px}li.coh-menu-list-item.has-children.is-expanded ul.coh-menu-list-container.level-two-sub-menu li{background:#eef3f3;margin:0;padding:0;line-height:0}.group_menu_container ul.coh-menu-list-container>li.coh-menu-list-item.has-children.is-expanded{margin:0;padding:0;background:#fff}.group_menu_container li.coh-menu-list-item.js-coh-menu-item.has-children.is-collapsed>a{margin:0}.group_menu_container .level-one-menu>li.coh-menu-list-item.js-coh-menu-item.has-children.is-expanded>a{padding:13px 16px 12px}ul.level-one-menu:first-child>li.coh-menu-list-item.has-children.is-collapsed>a{margin:0 15px 0 0}.business-unit-academic .education-block .menu-dropdown.up-arrow{content:"";background:url(/modules/custom/cambridge_localization/images/down-arrow-green-icon.svg) no-repeat;width:24px;height:24px;display:inline-flex;float:right;position:relative;top:0;right:16px;transform:rotate(-180deg)}.coh-container.education-block{height:40px}li.coh-menu-list-item.has-children.is-expanded ul.coh-menu-list-container li h4{font-size:14px;padding:10px 0 0 16px;margin:0 0 10px}li.coh-menu-list-item.has-children.is-expanded ul.coh-menu-list-container li h6{font-size:12px;padding:0 0 0 16px;margin:0 0 10px;display:none}.business-unit-academic .level-one-menu li.is-expanded:first-child ul.coh-menu-list-container.coh-unordered-list.level-two-sub-menu{min-height:180px}.business-unit-academic .level-one-menu li.is-expanded:first-child ul.coh-menu-list-container.coh-unordered-list.level-two-sub-menu{display:flex;align-items:baseline;overflow-x:scroll;overflow-y:hidden;background:#eef3f3;margin-top:0}.level-one-menu li:first-child ul.coh-menu-list-container.coh-unordered-list.level-two-sub-menu::-webkit-scrollbar{display:none}.business-unit-academic ul.level-three-sub-menu>li.is-expanded>a,.business-unit-academic ul.level-three-sub-menu>li.is-collapsed>a{padding-left:0;pointer-events:none}.business-unit-academic .group_menu_container ul li.coh-menu-list-item.has-children.is-expanded:first-child>ul.level-two-sub-menu>li{width:44px;height:44px;margin:0;background:0 0;border-bottom:0;padding:0}.business-unit-academic .group_menu_container ul li.coh-menu-list-item.has-children.is-expanded:first-child>ul.level-two-sub-menu>li>a{width:44px;height:44px}.business-unit-academic .level-one-menu>li .level-two-sub-menu>li .level-three-sub-menu>li{padding:0 16px!important}.level-one-menu>li .level-two-sub-menu>li .level-three-sub-menu>li{margin:0!important;padding:0 0 0 16px!important;width:100%;height:auto!important}.group-menu-education ul.coh-menu-list-container.coh-unordered-list.level-one-menu{margin-top:34px}.business-unit-academic .level-three-sub-menu li.has-children>a{font-weight:700!important;font-size:16px!important;line-height:20px!important;margin:0!important;padding:12px 0 12px 0!important}.business-unit-academic ul.coh-menu-list-container.coh-unordered-list.level-three-sub-menu li .level-four-sub-menu li a{display:inline-block;font-weight:400;font-size:14px!important;line-height:18px;padding:13px 0 12px 12px;font-family:inherit!important}.business-unit-academic ul.coh-menu-list-container.coh-unordered-list.level-three-sub-menu li .level-four-sub-menu li:focus-within{border:0;outline:0}.business-unit-academic>.group_menu_container ul>li>ul.level-two-sub-menu>li.coh-menu-list-item.has-children:nth-child(odd)>a{color:#1f2121}ul.level-one-menu>li ul.level-two-sub-menu>li a:active,ul.level-one-menu>li ul.level-two-sub-menu>li ul.level-three-sub-menu li a:active ul.level-one-menu>li ul.level-two-sub-menu>li ul.level-three-sub-menu li>ul.level-four-sub-menu>li a:active{background:#e8eded;width:104%!important}ul.level-one-menu>li ul.level-two-sub-menu>li ul.level-three-sub-menu li>ul.level-four-sub-menu>li a:active{margin-left:-16px!important;padding:13px 0 13px 28px!important}.business-unit-academic ul.level-one-menu>li ul.level-two-sub-menu>li ul.level-three-sub-menu li a:active{padding:13px 0 13px 16px!important}.level-one-menu>li ul.level-two-sub-menu>li ul.level-three-sub-menu li a:active{margin-left:-16px!important;padding:13px 0 13px 28px!important}ul.level-one-menu>li ul.level-two-sub-menu>li a:active{padding:13px 0 13px 28px!important}ul.level-one-menu>li ul.level-two-sub-menu li.has-children.is-expanded>a:active,ul.level-one-menu>li ul.level-two-sub-menu li.has-children.is-collapsed>a:active{background:0 0;padding:13px 0 13px 16px!important}}@media screen and (max-width:1024px){li.coh-menu-list-item.has-children.is-expanded ul.coh-menu-list-container li a{padding:0}}.business-unit-academic .coh-heading.header-hidden{display:none}@media screen and (max-device-width:767px){.group-menu-education ul.coh-menu-list-container.coh-unordered-list.level-one-menu{margin-top:34px}}@media screen and (min-width:1024px) and (max-width:1280px){.business-unit-academic .group_menu_container.group-menu-education>.coh-menu-list-container,.business-unit-bibles .group_menu_container.group-menu-education>.coh-menu-list-container,.business-unit-education .group_menu_container.group-menu-education>.coh-menu-list-container,.business-unit .group_menu_container.group-menu-education>.coh-menu-list-container{animation:moving 1s linear;transition:1s}.group-menu-education a.prd-grp-redirect{animation:fadeIn 1s;-webkit-animation:fadeIn 1s;-moz-animation:fadeIn 1s;-o-animation:fadeIn 1s;-ms-animation:fadeIn 1s}.education-block.group-menu-header.input-field .solr-search-form-block form input[value=Apply]{animation:fadeIn 5s;-webkit-animation:fadeIn 1s;-moz-animation:fadeIn 1s;-o-animation:fadeIn 1s;-ms-animation:fadeIn 1s}.education-block.group-menu-header.input-field .solr-search-form-block form input[value=Reset]{animation:fadeIn 5s;-webkit-animation:fadeIn 5s;-moz-animation:fadeIn 5s;-o-animation:fadeIn 5s;-ms-animation:fadeIn 5s}.education-block.group-menu-header.input-field .solr-search-form-block form .form-text{animation:fadeIn 8s;-webkit-animation:fadeIn 8s;-moz-animation:fadeIn 8s;-o-animation:fadeIn 8s;-ms-animation:fadeIn 8s}@keyframes fadeIn{0%{transform:translateX(var(--hidden));opacity:0}50%{transform:translateX(var(--hidden));opacity:0}100%{transform:translateX(var(--hidden));opacity:1}}@-moz-keyframes fadeIn{0%{transform:translateX(var(--hidden));opacity:0}50%{transform:translateX(var(--hidden));opacity:0}100%{transform:translateX(var(--hidden));opacity:1}}@-webkit-keyframes fadeIn{0%{transform:translateX(var(--hidden));opacity:0}50%{transform:translateX(var(--hidden));opacity:0}100%{transform:translateX(var(--hidden));opacity:1}}@-o-keyframes fadeIn{0%{transform:translateX(var(--hidden));opacity:0}50%{transform:translateX(var(--hidden));opacity:0}100%{transform:translateX(var(--hidden));opacity:1}}@-ms-keyframes fadeIn{0%{transform:translateX(var(--hidden));opacity:0}50%{transform:translateX(var(--hidden));opacity:0}100%{transform:translateX(var(--hidden));opacity:1}}.group_menu_container.group-menu-education .business-unit-heading,.ssa-component img.coh-lazy-loaded{animation:fadeIn 1s;-webkit-animation:fadeIn 1s;-moz-animation:fadeIn 1s;-o-animation:fadeIn 1s;-ms-animation:fadeIn 1s}@keyframes specialFadeInRight{from{opacity:0;transform:translate3d(10%,0,0)}to{opacity:1;transform:none}}.input-field .solr-search-form-block form{animation-name:specialFadeInRight;animation-duration:2000ms;animation-fill-mode:both;animation-delay:500ms}@keyframes specialFadeInRight{from{opacity:0;transform:translate3d(50%,0,0)}to{opacity:1;transform:none}}.business-unit-academic .coh-container.group-nav-logo.education-block.group-menu-header.input-field .solr-search-form-block form .form-text,.business-unit-bibles .coh-container.group-nav-logo.education-block.group-menu-header.input-field .solr-search-form-block form .form-text,.business-unit .coh-container.education-block.group-menu-header.input-field .solr-search-form-block form .form-text,.business-unit-education .coh-container.education-block.group-menu-header.input-field .solr-search-form-block form .form-text,.coh-container.group-nav-logo.education-block.group-menu-header.input-field .solr-search-form-block form .form-text{width:0;position:absolute;right:0;animation:textBoxProgress 1s;animation-delay:1s}.coh-container.group-nav-logo.education-block.group-menu-header.input-field .solr-search-form-block form .form-text.valid{animation:textBoxProgress 1s;animation-delay:1s}.coh-container.group-nav-logo.education-block.group-menu-header.input-field .solr-search-form-block form .form-text{border-radius:25px;transition:all 1s;transition-delay:1s}@keyframes textBoxProgress{from{width:0;transform:translateY(0%,0,0);opacity:0;border-radius:4px;color:transparent}to{opacity:1;width:100%;transform:translateY(100%,0,0);border-radius:4px;color:inherit}}.coh-container.group-nav-logo.education-block.group-menu-header.input-field .solr-search-form-block form .form-text::-webkit-input-placeholder{color:transparent}.business-unit-academic .coh-container.group-nav-logo.education-block.group-menu-header.input-field .solr-search-form-block form .form-text.search-width-100::-webkit-input-placeholder{color:#8ee8d8}.business-unit .coh-container.group-nav-logo.education-block.group-menu-header.input-field .solr-search-form-block form .form-text.search-width-100::-webkit-input-placeholder{color:#036268}.business-unit-education .coh-container.group-nav-logo.education-block.group-menu-header.input-field .solr-search-form-block form .form-text.search-width-100::-webkit-input-placeholder,.business-unit-bibles .coh-container.group-nav-logo.education-block.group-menu-header.input-field .solr-search-form-block form .form-text.search-width-100::-webkit-input-placeholder{color:#c5caca}.education-block.group-menu-header{display:none!important}}@media screen and (max-width:1023.98px){.menu-open{overflow-y:hidden}.business-unit .education-block,.business-unit-bibles .education-block,.business-unit-education .education-block{margin-left:0;margin-right:0}.business-unit-academic .education-block{margin-left:0}}@media screen and (min-width:1024px){}#notification-form{display:none}@media only screen and (min-width:1281px){}@media only screen and (min-width:1281px){}@media only screen and (min-width:1281px){}.business-unit-bibles .coh-container.education-block.group-menu-header .solr-search-form-block input[value=Reset],.business-unit-education .coh-container.education-block.group-menu-header .solr-search-form-block input[value=Reset],.business-unit .coh-container.education-block.group-menu-header .solr-search-form-block input[value=Reset],.business-unit-academic .education-block.group-menu-header.input-field,.business-unit-bibles .education-block.group-menu-header.input-field,.business-unit .education-block.group-menu-header.input-field,.business-unit-education .education-block.group-menu-header.input-field,.business-unit-academic .coh-container.group-nav-logo.education-block.group-menu-header .solr-search-form-block input[value=Reset]{display:block!important}@media only screen and (min-width:1024px){}.business-unit-academic .link>img{margin-left:5px;display:unset}.business-unit-academic .group_menu_container ul li.coh-menu-list-item.has-children>ul.level-two-sub-menu .menu-heading a img{vertical-align:middle;margin-bottom:5px}@media only screen and (min-width:1024px){.business-unit-academic .level-two-sub-menu{height:auto;display:block;max-width:6.25rem;-webkit-box-sizing:border-box;box-sizing:border-box;left:-webkit-calc(50% - 0px);left:calc(50% - 0px);z-index:99;position:absolute;-webkit-transform:translateX(-3.125rem);-ms-transform:translateX(-3.125rem);transform:translateX(-3.125rem);margin-top:.0625rem;border-width:0;outline-width:0;-webkit-box-shadow:0 .25rem .625rem #dbdbdb;box-shadow:0 .25rem .625rem #dbdbdb;border-style:initial;background-color:#e8eded;padding-top:1.25rem;padding-right:1.75rem;padding-bottom:1.25rem;padding-left:.0625rem}.business-unit-academic ul.coh-menu-list-container.coh-unordered-list.level-two-sub-menu{height:auto;max-width:960px;position:absolute;width:100%;left:calc(50% - 0px)!important;transform:translateX(-50%)!important;left:0;z-index:999;background:#e8eded;box-shadow:0 4px 10px #dbdbdb;display:none;border:0;outline:0}.business-unit-academic ul.coh-menu-list-container.coh-unordered-list.level-two-sub-menu{display:none;column-count:3;padding:60px 20px 20px!important;min-height:fit-content!important;margin-top:0!important;position:absolute;left:50%!important;box-shadow:0 4px 10px #dbdbdb}.business-unit-academic .group-menu-education ul.coh-menu-list-container.coh-unordered-list.level-two-sub-menu{min-width:100vw}.business-unit-academic .level-one-menu li.coh-menu-list-item.has-children.is-expanded ul.level-two-sub-menu{height:auto;display:block;align-items:flex-start;max-width:100%;box-sizing:border-box;z-index:99;padding:20px 28px 20px 20px}.business-unit-academic .level-one-menu li.coh-menu-list-item.has-children.is-expanded ul.level-two-sub-menu{padding:20px 0 20px 1px}.business-unit-academic .level-one-menu>li .level-two-sub-menu>li{padding-bottom:16px}.business-unit-academic .is-expanded .level-two-sub-menu .coh-menu-list-item{height:auto;list-style:none}.business-unit-academic li.coh-menu-list-item.has-children.is-expanded ul.level-two-sub-menu>li{list-style:none;margin-left:24px;padding:5px 10px;height:auto}.business-unit-academic li.coh-menu-list-item.has-children.is-expanded ul.level-two-sub-menu>li{padding:8px 0}.business-unit-academic .group_menu_container .coh-menu-list-item:first-child>.level-two-sub-menu>li{padding-bottom:0!important}.business-unit-academic .group_menu_container .coh-menu-list-item:first-child>.level-two-sub-menu>li,.business-unit-academic li.coh-menu-list-item.has-children.is-expanded ul.level-two-sub-menu>li{width:100%!important;padding:0!important;padding-bottom:16px!important;margin:0!important;float:unset!important}.business-unit-academic .level-one-menu>li:first-of-type .level-two-sub-menu>li>a{display:none}.business-unit-academic .level-three-sub-menu{display:block;margin-top:.5rem}.business-unit-academic .group_menu_container ul li.coh-menu-list-item.has-children.is-expanded:first-child>ul.level-two-sub-menu>li>ul{width:100vw;position:absolute;left:0;z-index:2}.business-unit-academic .group_menu_container .coh-menu-list-item.has-children.is-expanded:first-child>.level-two-sub-menu>li>.level-three-sub-menu{position:static!important;width:100%!important;margin-top:0}.business-unit-academic .level-one-menu>li .level-two-sub-menu>li .level-three-sub-menu{-webkit-column-count:auto;-moz-column-count:auto;column-count:auto}.business-unit-academic .level-one-menu>li .level-two-sub-menu>li .level-three-sub-menu>li{margin:0!important;padding:8px 16px 8px 0!important;width:100%;height:auto!important;word-wrap:break-word}.business-unit-academic .is-expanded.coh-ce-e6f080a3 .level-two-sub-menu .coh-menu-list-item{height:auto;list-style:none}.business-unit-academic .level-one-menu .level-two-sub-menu .level-three-sub-menu>li{padding:0 0 16px!important}.business-unit-academic .group_menu_container .level-one-menu li.coh-menu-list-item.has-children.is-expanded:first-child{position:unset}.business-unit-academic .level-three-sub-menu li.coh-menu-list-item.has-children.is-expanded>a{pointer-events:all!important;font-weight:400;padding-bottom:0}.business-unit-academic .level-four-sub-menu{display:none!important;padding-bottom:20px!important}.business-unit-academic .group_menu_container ul.coh-menu-list-container.level-four-sub-menu>li.coh-menu-list-item{margin:0;padding:8px 0!important;height:auto!important}.business-unit-academic .group_menu_container ul.coh-menu-list-container.level-four-sub-menu>li.coh-menu-list-item{margin:0;padding:8px 0!important;height:auto!important}.business-unit-academic .coh-link{display:inline-block}.business-unit-academic .level-one-menu>li:first-of-type .level-two-sub-menu>li>a{display:none!important}.business-unit-academic .level-one-menu>li.coh-menu-list-item .coh-unordered-list.level-two-sub-menu>.coh-menu-list-item.has-children .level-three-sub-menu li.coh-menu-list-item.has-children>a{font-weight:400;padding-bottom:0}.business-unit-academic .level-one-menu>li.coh-menu-list-item .coh-unordered-list.level-two-sub-menu li.is-collapsed ul.coh-menu-list-container.coh-unordered-list{display:block;clear:both}.business-unit-academic .level-one-menu li.coh-menu-list-item.has-children.is-expanded:first-child ul.level-two-sub-menu ul.level-three-sub-menu>li>a{font-weight:400}.business-unit-academic .level-one-menu>li.coh-menu-list-item .coh-unordered-list.level-two-sub-menu>.coh-menu-list-item.has-children .level-three-sub-menu>li{width:100%!important}.business-unit-academic .level-one-menu li.coh-menu-list-item.has-children.is-expanded:first-child ul.level-two-sub-menu>li.is-expanded .level-three-sub-menu li a{padding-top:0!important}.business-unit-academic .level-one-menu>li.is-expanded:first-child ul.level-three-sub-menu:before{background-color:#e8eded;height:100%;width:100%;position:relative;left:-webkit-calc(-100% + 1px);left:calc(-100% + 1px);content:"";-webkit-box-shadow:0 4px 6px -4px rgba(63,66,66,.12);box-shadow:0 4px 6px -4px rgba(63,66,66,.12)}.business-unit-academic .level-one-menu>li.is-expanded:first-child ul.level-three-sub-menu:after{background-color:#e8eded;height:100%;width:100%;position:relative;right:-webkit-calc(-100% + 1px);right:calc(-100% + 1px);content:"";-webkit-box-shadow:0 4px 6px -4px rgba(63,66,66,.12);box-shadow:0 4px 6px -4px rgba(63,66,66,.12)}.business-unit-academic .level-one-menu>li.coh-menu-list-item.has-children.is-expanded:first-child ul.level-two-sub-menu>li.is-expanded .level-three-sub-menu li a:hover{color:#036268;text-decoration:underline}.business-unit-academic .level-one-menu>li.coh-menu-list-item .coh-unordered-list.level-two-sub-menu>.coh-menu-list-item.has-children .level-three-sub-menu>li a:hover{color:#036268;text-decoration:underline}.business-unit-academic .level-one-menu li.coh-menu-list-item.has-children.is-expanded:first-child ul.level-two-sub-menu>li.is-expanded .level-three-sub-menu{-webkit-column-count:unset;-moz-column-count:unset;column-count:unset}.business-unit-academic .level-one-menu.coh-ce-31ff2afa li.coh-menu-list-item.has-children.is-expanded:first-child ul.level-two-sub-menu{padding-bottom:40px!important}.business-unit-academic .group_menu_container ul li.coh-menu-list-item.has-children>ul.level-two-sub-menu .menu-heading{position:absolute;top:20px;left:20px;background-color:transparent;padding:0;margin-bottom:0}.business-unit-academic .group_menu_container ul li.coh-menu-list-item.has-children>ul.level-two-sub-menu .menu-heading a{color:#007c85;font-weight:500}.business-unit-academic .group_menu_container ul li.coh-menu-list-item.has-children>ul.level-two-sub-menu .menu-heading span{display:none}.business-unit-academic .group_menu_container ul li.coh-menu-list-item.has-children>ul.level-two-sub-menu .menu-heading a img{vertical-align:middle;margin-bottom:3px}}@media only screen and (min-width:1280px){.business-unit-academic ul.coh-menu-list-container.coh-unordered-list.level-two-sub-menu{left:calc(50% - 0px)!important;transform:translateX(-50%)!important}.business-unit-academic ul.coh-menu-list-container.coh-unordered-list.level-two-sub-menu{box-shadow:0 4px 0 #dbdbdb}.business-unit-academic ul.coh-menu-list-container.coh-unordered-list.level-two-sub-menu{box-shadow:0 4px 0 #dbdbdb}.business-unit-academic .group-menu-education ul.coh-menu-list-container.coh-unordered-list.level-two-sub-menu{min-width:unset}}@media only screen and (max-width:1023.5px){.business-unit-academic .group_menu_container ul li.coh-menu-list-item.has-children>ul.level-two-sub-menu .menu-heading{position:absolute;display:block;padding:12px 16px;width:100%;top:40px;left:0}.business-unit-academic .group_menu_container ul li.coh-menu-list-item.has-children.is-expanded:first-child>ul.level-two-sub-menu{margin-top:40px}.group_menu_container ul li.coh-menu-list-item.has-children>ul.level-two-sub-menu .menu-heading a{color:#007c85;font-weight:500}.business-unit-academic .group_menu_container ul li.coh-menu-list-item.has-children>ul.level-two-sub-menu .menu-heading{margin-bottom:16px}.business-unit-academic .group_menu_container ul li.coh-menu-list-item.has-children.is-expanded:first-child{position:relative}}.level-one-menu .level-two-sub-menu.loading-hide{display:none!important}