(function( blueConic, undefined ) {var ps='https://plugins.blueconic.net/';var pf='/gallery/';(();var InteractionType=BCClass.extend({init:getPreloadProperties:function(){return[]},getContent:function(){},onEvent:function(){},importLibraries:);(();(();(();(();(();(();(();(();(();(();(();(();(function(){ var InteractionTypeImpl=InteractionType.extend({LAST_VISIT_COOKIE_NAME:'last_visit_bc',NEW_VISIT_PROPERTY:'new_visit_bc',SESSION_TIMEOUT_MINUTES:30,init:onPrepare:function(){var a=this.blueConicClient.getCurrentDate().getTime(),b=this.blueConicClient.util.cookie.getCookie(this.LAST_VISIT_COOKIE_NAME);if(b&&!isNaN(parseInt(b))){var c=new Date(parseInt(b));c.setMinutes(c.getMinutes()+this.SESSION_TIMEOUT_MINUTES),a>c?this.profile.setValue(this.NEW_VISIT_PROPERTY,'true'):this.profile.setValue(this.NEW_VISIT_PROPERTY,'false')}else this.profile.setValue(this.NEW_VISIT_PROPERTY,'true');this.blueConicClient.util.cookie.setCookie(this.LAST_VISIT_COOKIE_NAME,a)},onLoad:function(){'true'===this.profile.getValue(this.NEW_VISIT_PROPERTY)&&this.blueConicClient.createEvent('new_visit')}});var a = [];var i='newvisitlistener';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.0.2/'}]);})();(();(function(){ /**
 * Never install this plugin on a customer tenant without modifications.
 * This code only serves as a template. You should explicitly check which
 * of the methods below (hash change, onpopstate, pushState, replaceState)
 * should be leveraged to track dynamic page transitions.
 *
 * After checking, create a custom plugin and only include the methods
 * that are required.
 */
var InteractionTypeImpl = InteractionType.extend({
  init: 

  onLoad: function () {
	var site_hostname = window.location.hostname;
    if (!window.bcUrlListenerActive) {
      // Make sure the bindings are set only once per page view
      window.bcUrlListenerActive = true;

      // BC-4463 Support for SPA's

      /*
       * If applicable, uncomment to check for hash changes
       */
      // if ("onhashchange" in window && window.addEventListener) {
      //   window.addEventListener("hashchange", function() {
      //     this.blueConicClient.handlePageView();
      //   }, false);
      // }

      /*
       * If applicable, uncomment to check for the new HTML5 "popstate" event
       */
      window.addEventListener("popstate", ;

      /*
       * If applicable, uncomment to check for the new HTML5 history API: history.pushState
       */
      if (window.history && window.history.pushState) {
        window.history.pushState = (function(nativePushState, blueConicClient) {
          return function() {
            blueConicClient.handlePageView();
            nativePushState.apply(this, arguments);
          };
        }(window.history.pushState, this.blueConicClient));
      }

      /*
       * If applicable, uncomment to check for the new HTML5 history API: history.replaceState
       */
      // if (window.history && window.history.replaceState) {
      //
      //   window.history.replaceState = (function(nativeReplaceState, blueConicClient) {
      //     return function() {
      //       blueConicClient.handlePageView();
      //
      //       //Continue by calling native history.replaceState
      //       nativeReplaceState.apply(this, arguments);
      //
      //     };
      //   }(window.history.replaceState, this.blueConicClient));
      // }
    }
  }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyIvVXNlcnMvZGFic2hpcmUvd29yay9wcy9wbHVnaW5zX3lhcm4vY3VzdG9tZXItc3BlY2lmaWMvY2JjL3VybGxpc3RlbmVyaW50ZXJhY3Rpb250eXBlL2Zyb250ZW5kL3VybGxpc3RlbmVyaW50ZXJhY3Rpb250eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBOZXZlciBpbnN0YWxsIHRoaXMgcGx1Z2luIG9uIGEgY3VzdG9tZXIgdGVuYW50IHdpdGhvdXQgbW9kaWZpY2F0aW9ucy5cclxuICogVGhpcyBjb2RlIG9ubHkgc2VydmVzIGFzIGEgdGVtcGxhdGUuIFlvdSBzaG91bGQgZXhwbGljaXRseSBjaGVjayB3aGljaFxyXG4gKiBvZiB0aGUgbWV0aG9kcyBiZWxvdyAoaGFzaCBjaGFuZ2UsIG9ucG9wc3RhdGUsIHB1c2hTdGF0ZSwgcmVwbGFjZVN0YXRlKVxyXG4gKiBzaG91bGQgYmUgbGV2ZXJhZ2VkIHRvIHRyYWNrIGR5bmFtaWMgcGFnZSB0cmFuc2l0aW9ucy5cclxuICpcclxuICogQWZ0ZXIgY2hlY2tpbmcsIGNyZWF0ZSBhIGN1c3RvbSBwbHVnaW4gYW5kIG9ubHkgaW5jbHVkZSB0aGUgbWV0aG9kc1xyXG4gKiB0aGF0IGFyZSByZXF1aXJlZC5cclxuICovXHJcbnZhciBJbnRlcmFjdGlvblR5cGVJbXBsID0gSW50ZXJhY3Rpb25UeXBlLmV4dGVuZCh7XHJcbiAgaW5pdDogZnVuY3Rpb24gKGJsdWVDb25pY0NsaWVudCwgY29udGV4dCkge1xyXG4gICAgdGhpcy5ibHVlQ29uaWNDbGllbnQgPSBibHVlQ29uaWNDbGllbnQ7XHJcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gIH0sXHJcblxyXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cdHZhciBzaXRlX2hvc3RuYW1lID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO1xyXG4gICAgaWYgKCF3aW5kb3cuYmNVcmxMaXN0ZW5lckFjdGl2ZSkge1xyXG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIGJpbmRpbmdzIGFyZSBzZXQgb25seSBvbmNlIHBlciBwYWdlIHZpZXdcclxuICAgICAgd2luZG93LmJjVXJsTGlzdGVuZXJBY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgLy8gQkMtNDQ2MyBTdXBwb3J0IGZvciBTUEEnc1xyXG5cclxuICAgICAgLypcclxuICAgICAgICogSWYgYXBwbGljYWJsZSwgdW5jb21tZW50IHRvIGNoZWNrIGZvciBoYXNoIGNoYW5nZXNcclxuICAgICAgICovXHJcbiAgICAgIC8vIGlmIChcIm9uaGFzaGNoYW5nZVwiIGluIHdpbmRvdyAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gICAgIHRoaXMuYmx1ZUNvbmljQ2xpZW50LmhhbmRsZVBhZ2VWaWV3KCk7XHJcbiAgICAgIC8vICAgfSwgZmFsc2UpO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICAvKlxyXG4gICAgICAgKiBJZiBhcHBsaWNhYmxlLCB1bmNvbW1lbnQgdG8gY2hlY2sgZm9yIHRoZSBuZXcgSFRNTDUgXCJwb3BzdGF0ZVwiIGV2ZW50XHJcbiAgICAgICAqL1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuYmx1ZUNvbmljQ2xpZW50LmhhbmRsZVBhZ2VWaWV3KCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLypcclxuICAgICAgICogSWYgYXBwbGljYWJsZSwgdW5jb21tZW50IHRvIGNoZWNrIGZvciB0aGUgbmV3IEhUTUw1IGhpc3RvcnkgQVBJOiBoaXN0b3J5LnB1c2hTdGF0ZVxyXG4gICAgICAgKi9cclxuICAgICAgaWYgKHdpbmRvdy5oaXN0b3J5ICYmIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSkge1xyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSA9IChmdW5jdGlvbihuYXRpdmVQdXNoU3RhdGUsIGJsdWVDb25pY0NsaWVudCkge1xyXG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBibHVlQ29uaWNDbGllbnQuaGFuZGxlUGFnZVZpZXcoKTtcclxuICAgICAgICAgICAgbmF0aXZlUHVzaFN0YXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0od2luZG93Lmhpc3RvcnkucHVzaFN0YXRlLCB0aGlzLmJsdWVDb25pY0NsaWVudCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKlxyXG4gICAgICAgKiBJZiBhcHBsaWNhYmxlLCB1bmNvbW1lbnQgdG8gY2hlY2sgZm9yIHRoZSBuZXcgSFRNTDUgaGlzdG9yeSBBUEk6IGhpc3RvcnkucmVwbGFjZVN0YXRlXHJcbiAgICAgICAqL1xyXG4gICAgICAvLyBpZiAod2luZG93Lmhpc3RvcnkgJiYgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKSB7XHJcbiAgICAgIC8vXHJcbiAgICAgIC8vICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlID0gKGZ1bmN0aW9uKG5hdGl2ZVJlcGxhY2VTdGF0ZSwgYmx1ZUNvbmljQ2xpZW50KSB7XHJcbiAgICAgIC8vICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vICAgICAgIGJsdWVDb25pY0NsaWVudC5oYW5kbGVQYWdlVmlldygpO1xyXG4gICAgICAvL1xyXG4gICAgICAvLyAgICAgICAvL0NvbnRpbnVlIGJ5IGNhbGxpbmcgbmF0aXZlIGhpc3RvcnkucmVwbGFjZVN0YXRlXHJcbiAgICAgIC8vICAgICAgIG5hdGl2ZVJlcGxhY2VTdGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAvL1xyXG4gICAgICAvLyAgICAgfTtcclxuICAgICAgLy8gICB9KHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSwgdGhpcy5ibHVlQ29uaWNDbGllbnQpKTtcclxuICAgICAgLy8gfVxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiJdLCJmaWxlIjoiZnJvbnRlbmQvc3JjL3VybGxpc3RlbmVyaW50ZXJhY3Rpb250eXBlLmpzIn0=
;var a = [];var i='urllistenerinteractiontype';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/urllistenerinteractiontype/ts_663ddba6e40be08403b588017b9140b0/'}]);})();})(blueConicClient);