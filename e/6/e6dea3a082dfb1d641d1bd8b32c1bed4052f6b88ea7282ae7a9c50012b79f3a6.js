(function( blueConic, undefined ) {var ps='https://plugins.blueconic.net/';var pf='/gallery/';(();var InteractionType=BCClass.extend({init:getPreloadProperties:function(){return[]},getContent:function(){},onEvent:function(){},importLibraries:);(();(();(();(();(();(();(();(function(){ /* eslint-disable camelcase */
// @ts-nocheck
var InteractionTypeImpl = InteractionType.extend({
  ADMIN: "_visitAdmin",
  TIMEOUT: 30 * 60 * 1000, //30 minutes
  UTM_PARAMS: ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "creative", "clickId"],
  removalUrls: ["https://www.pearson.com/us/404-page-not-found.html"],

  init: function(blueConicClient, context) {
    this.blueConicClient = blueConicClient;
    this.context = context;
  },

  getPreloadProperties: function() {
    return [this.ADMIN];
  },

  onLoad: function() {
    this._profile = this.context.getProfile();

    var visitAdmin = this._getVisitAdmin();
    
    var url = document.location.href.toString();

    // create the event
    var event = {
      id:
        "Visit on " +
        visitAdmin.eventDate.toDateString() +
        " " +
        visitAdmin.eventDate
          .getHours()
          .toString()
          .padStart(2, "0") +
        ":" +
        visitAdmin.eventDate
          .getMinutes()
          .toString()
          .padStart(2, "0"),
      visit_parameters: visitAdmin.visitParameters
    };

    this._addVisitContext(event, visitAdmin, url);
    this._profile.timeline.createEventById(event.id, "visit_parameters", visitAdmin.eventDate, event);

    // make sure the admin is updated
    this._profile.setValue(this.ADMIN, this.blueConicClient.json.stringify(visitAdmin));

    this.blueConicClient.profile.updateProfile();
  },

  _getVisitAdmin: function() {
    var visitAdmin = this._profile.getValue(this.ADMIN)
      ? this.blueConicClient.json.parse(this._profile.getValue(this.ADMIN))
      : {};

    var currentDate = this.blueConicClient.getCurrentDate();

    if (visitAdmin.eventDate) {
      visitAdmin.eventDate = new Date(visitAdmin.eventDate);
    }
    if (visitAdmin.timestamp) {
      visitAdmin.timestamp = new Date(visitAdmin.timestamp);
    }

    if (!visitAdmin.timestamp || currentDate.getTime() - visitAdmin.timestamp.getTime() > this.TIMEOUT) {
      visitAdmin = {
        eventDate: new Date(),
        visitParameters: []
      };
    }
    visitAdmin.timestamp = currentDate;

    return visitAdmin;
  },
  
  _addVisitContext: function(event, visitAdmin, href) {

    if (href) {
      visitAdmin.visitParameters = visitAdmin.visitParameters || [];

      visitAdmin.visitParameters.push({
        source: this._getParameterByName("utm_source", href),
        medium: this._getParameterByName("utm_medium", href),
        campaign: this._getParameterByName("utm_campaign", href),
        content: this._getParameterByName("utm_content", href),
        term: this._getParameterByName("utm_term", href),
        creative: this._getParameterByName("creative", href),
        clickId: this._getParameterByName("gclid", href)
      });
    }
    // add the visitParameters to the event
    event.visit_parameters = visitAdmin.visitParameters;  
  },

  _getParameterByName: function(name, href) {
    if (!name) {
      return "";
    }
    name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&#]" + name + "=([^&#]*)"),
      results = regex.exec(href || location.href);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  },

  _getCleanUrl: function(name, href) {
    
    //profile properties
    if (href && (name === "profile")) {
      if (this.removalUrls.includes(href)) {
        return "";
      }
      href = href.replace("https://www.pearson.com/","").split("?");
      href = href[0].replace(".html","");
      return href;
    }
    //timeline properties
    if (href && (name === "timeline")) {
      href = href.replace("https://", "").split("?");
      return href[0];
    }
    return "";
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyIvVXNlcnMvYW5keS5vZ3JhZHkvZ2l0L3BzL3BsdWdpbnNfeWFybi9jdXN0b21lci1zcGVjaWZpYy9wZWFyc29uL2dsb2JhbF9saXN0ZW5lcl92aXNpdF90aW1lbGluZV9ldmVudF9wZWFyc29uL2Zyb250ZW5kL2dsb2JhbF9saXN0ZW5lcl92aXNpdF90aW1lbGluZV9ldmVudF9wZWFyc29uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xyXG4vLyBAdHMtbm9jaGVja1xyXG52YXIgSW50ZXJhY3Rpb25UeXBlSW1wbCA9IEludGVyYWN0aW9uVHlwZS5leHRlbmQoe1xyXG4gIEFETUlOOiBcIl92aXNpdEFkbWluXCIsXHJcbiAgVElNRU9VVDogMzAgKiA2MCAqIDEwMDAsIC8vMzAgbWludXRlc1xyXG4gIFVUTV9QQVJBTVM6IFtcInV0bV9zb3VyY2VcIiwgXCJ1dG1fbWVkaXVtXCIsIFwidXRtX2NhbXBhaWduXCIsIFwidXRtX3Rlcm1cIiwgXCJ1dG1fY29udGVudFwiXSxcclxuICByZW1vdmFsVXJsczogW1wiaHR0cHM6Ly93d3cucGVhcnNvbi5jb20vdXMvNDA0LXBhZ2Utbm90LWZvdW5kLmh0bWxcIl0sXHJcblxyXG4gIGluaXQ6IGZ1bmN0aW9uKGJsdWVDb25pY0NsaWVudCwgY29udGV4dCkge1xyXG4gICAgdGhpcy5ibHVlQ29uaWNDbGllbnQgPSBibHVlQ29uaWNDbGllbnQ7XHJcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gIH0sXHJcblxyXG4gIGdldFByZWxvYWRQcm9wZXJ0aWVzOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBbdGhpcy5BRE1JTl07XHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkOiBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuX3Byb2ZpbGUgPSB0aGlzLmNvbnRleHQuZ2V0UHJvZmlsZSgpO1xyXG5cclxuICAgIHZhciB2aXNpdEFkbWluID0gdGhpcy5fZ2V0VmlzaXRBZG1pbigpO1xyXG4gICAgXHJcbiAgICB2YXIgdXJsID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZi50b1N0cmluZygpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSB0aGUgZXZlbnRcclxuICAgIHZhciBldmVudCA9IHtcclxuICAgICAgaWQ6XHJcbiAgICAgICAgXCJWaXNpdCBvbiBcIiArXHJcbiAgICAgICAgdmlzaXRBZG1pbi5ldmVudERhdGUudG9EYXRlU3RyaW5nKCkgK1xyXG4gICAgICAgIFwiIFwiICtcclxuICAgICAgICB2aXNpdEFkbWluLmV2ZW50RGF0ZVxyXG4gICAgICAgICAgLmdldEhvdXJzKClcclxuICAgICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgICAucGFkU3RhcnQoMiwgXCIwXCIpICtcclxuICAgICAgICBcIjpcIiArXHJcbiAgICAgICAgdmlzaXRBZG1pbi5ldmVudERhdGVcclxuICAgICAgICAgIC5nZXRNaW51dGVzKClcclxuICAgICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgICAucGFkU3RhcnQoMiwgXCIwXCIpLFxyXG4gICAgICBwYWdldmlld3M6IHZpc2l0QWRtaW4ucGFnZXZpZXdzLFxyXG4gICAgICB2aXNpdF9wYWdlOiB2aXNpdEFkbWluLnZpc2l0UGFnZXNcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fYWRkVmlzaXRDb250ZXh0KGV2ZW50LCB2aXNpdEFkbWluLCB1cmwpO1xyXG4gICAgdGhpcy5fcHJvZmlsZS50aW1lbGluZS5jcmVhdGVFdmVudEJ5SWQoZXZlbnQuaWQsIFwidmlzaXRcIiwgdmlzaXRBZG1pbi5ldmVudERhdGUsIGV2ZW50KTtcclxuXHJcbiAgICAvLyBtYWtlIHN1cmUgdGhlIGFkbWluIGlzIHVwZGF0ZWRcclxuICAgIHRoaXMuX3Byb2ZpbGUuc2V0VmFsdWUodGhpcy5BRE1JTiwgdGhpcy5ibHVlQ29uaWNDbGllbnQuanNvbi5zdHJpbmdpZnkodmlzaXRBZG1pbikpO1xyXG4gICAgdGhpcy5fcHJvZmlsZS5zZXRWYWx1ZShcInZpc2l0X3RpbWVsaW5lX2NyZWF0ZV9kYXRlXCIsIG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCkpO1xyXG4gICAgdGhpcy5fcHJvZmlsZS5hZGRWYWx1ZShcInRpbWVsaW5lX2V2ZW50X3R5cGVzXCIsIFwidmlzaXRcIik7XHJcbiAgICB0aGlzLl9wcm9maWxlLmFkZFZhbHVlKFwidXJsc192aWV3ZWRfLV9hbGxcIiwgdGhpcy5fZ2V0Q2xlYW5VcmwoXCJwcm9maWxlXCIsIHVybCkpO1xyXG5cclxuICAgIHRoaXMuYmx1ZUNvbmljQ2xpZW50LnByb2ZpbGUudXBkYXRlUHJvZmlsZSgpO1xyXG4gIH0sXHJcblxyXG4gIF9nZXRWaXNpdEFkbWluOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciB2aXNpdEFkbWluID0gdGhpcy5fcHJvZmlsZS5nZXRWYWx1ZSh0aGlzLkFETUlOKVxyXG4gICAgICA/IHRoaXMuYmx1ZUNvbmljQ2xpZW50Lmpzb24ucGFyc2UodGhpcy5fcHJvZmlsZS5nZXRWYWx1ZSh0aGlzLkFETUlOKSlcclxuICAgICAgOiB7fTtcclxuXHJcbiAgICB2YXIgY3VycmVudERhdGUgPSB0aGlzLmJsdWVDb25pY0NsaWVudC5nZXRDdXJyZW50RGF0ZSgpO1xyXG5cclxuICAgIGlmICh2aXNpdEFkbWluLmV2ZW50RGF0ZSkge1xyXG4gICAgICB2aXNpdEFkbWluLmV2ZW50RGF0ZSA9IG5ldyBEYXRlKHZpc2l0QWRtaW4uZXZlbnREYXRlKTtcclxuICAgIH1cclxuICAgIGlmICh2aXNpdEFkbWluLnRpbWVzdGFtcCkge1xyXG4gICAgICB2aXNpdEFkbWluLnRpbWVzdGFtcCA9IG5ldyBEYXRlKHZpc2l0QWRtaW4udGltZXN0YW1wKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXZpc2l0QWRtaW4udGltZXN0YW1wIHx8IGN1cnJlbnREYXRlLmdldFRpbWUoKSAtIHZpc2l0QWRtaW4udGltZXN0YW1wLmdldFRpbWUoKSA+IHRoaXMuVElNRU9VVCkge1xyXG4gICAgICB2aXNpdEFkbWluID0ge1xyXG4gICAgICAgIGV2ZW50RGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICBwYWdldmlld3M6IDAsXHJcbiAgICAgICAgdmlzaXRQYWdlczogW11cclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHZpc2l0QWRtaW4ucGFnZXZpZXdzID0gdmlzaXRBZG1pbi5wYWdldmlld3MgKyAxO1xyXG4gICAgdmlzaXRBZG1pbi50aW1lc3RhbXAgPSBjdXJyZW50RGF0ZTtcclxuXHJcbiAgICByZXR1cm4gdmlzaXRBZG1pbjtcclxuICB9LFxyXG4gIFxyXG4gIF9hZGRWaXNpdENvbnRleHQ6IGZ1bmN0aW9uKGV2ZW50LCB2aXNpdEFkbWluLCBocmVmKSB7XHJcblxyXG4gICAgaWYgKGhyZWYpIHtcclxuICAgICAgdmlzaXRBZG1pbi52aXNpdFBhZ2VzID0gdmlzaXRBZG1pbi52aXNpdFBhZ2VzIHx8IFtdO1xyXG5cclxuICAgICAgdmlzaXRBZG1pbi52aXNpdFBhZ2VzLnB1c2goe1xyXG4gICAgICAgIHZpc2l0X2RhdGU6IHZpc2l0QWRtaW4uZXZlbnREYXRlLFxyXG4gICAgICAgIHVybDogdGhpcy5fZ2V0Q2xlYW5VcmwoXCJ0aW1lbGluZVwiLCBocmVmKSxcclxuICAgICAgICBzb3VyY2U6IHRoaXMuX2dldFBhcmFtZXRlckJ5TmFtZShcInV0bV9zb3VyY2VcIiwgaHJlZiksXHJcbiAgICAgICAgbWVkaXVtOiB0aGlzLl9nZXRQYXJhbWV0ZXJCeU5hbWUoXCJ1dG1fbWVkaXVtXCIsIGhyZWYpLFxyXG4gICAgICAgIGNhbXBhaWduOiB0aGlzLl9nZXRQYXJhbWV0ZXJCeU5hbWUoXCJ1dG1fY2FtcGFpZ25cIiwgaHJlZiksXHJcbiAgICAgICAgY29udGVudDogdGhpcy5fZ2V0UGFyYW1ldGVyQnlOYW1lKFwidXRtX2NvbnRlbnRcIiwgaHJlZiksXHJcbiAgICAgICAgdGVybTogdGhpcy5fZ2V0UGFyYW1ldGVyQnlOYW1lKFwidXRtX3Rlcm1cIiwgaHJlZiksXHJcbiAgICAgICAgc2VhcmNoOiB0aGlzLl9nZXRQYXJhbWV0ZXJCeU5hbWUoXCJxXCIsIGhyZWYpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gYWRkIHRoZSB2aXNpdFBhZ2VzIHRvIHRoZSBldmVudFxyXG4gICAgZXZlbnQudmlzaXRfcGFnZSA9IHZpc2l0QWRtaW4udmlzaXRQYWdlcztcclxuICB9LFxyXG5cclxuICBfZ2V0UGFyYW1ldGVyQnlOYW1lOiBmdW5jdGlvbihuYW1lLCBocmVmKSB7XHJcbiAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bW10vLCBcIlxcXFxbXCIpLnJlcGxhY2UoL1tcXF1dLywgXCJcXFxcXVwiKTtcclxuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbXFxcXD8mI11cIiArIG5hbWUgKyBcIj0oW14mI10qKVwiKSxcclxuICAgICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWMoaHJlZiB8fCBsb2NhdGlvbi5ocmVmKTtcclxuICAgIHJldHVybiByZXN1bHRzID09PSBudWxsID8gXCJcIiA6IGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzFdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpO1xyXG4gIH0sXHJcblxyXG4gIF9nZXRDbGVhblVybDogZnVuY3Rpb24obmFtZSwgaHJlZikge1xyXG4gICAgXHJcbiAgICAvL3Byb2ZpbGUgcHJvcGVydGllc1xyXG4gICAgaWYgKGhyZWYgJiYgKG5hbWUgPT09IFwicHJvZmlsZVwiKSkge1xyXG4gICAgICBpZiAodGhpcy5yZW1vdmFsVXJscy5pbmNsdWRlcyhocmVmKSkge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGhyZWYgPSBocmVmLnJlcGxhY2UoXCJodHRwczovL3d3dy5wZWFyc29uLmNvbS9cIixcIlwiKS5zcGxpdChcIj9cIik7XHJcbiAgICAgIGhyZWYgPSBocmVmWzBdLnJlcGxhY2UoXCIuaHRtbFwiLFwiXCIpO1xyXG4gICAgICByZXR1cm4gaHJlZjtcclxuICAgIH1cclxuICAgIC8vdGltZWxpbmUgcHJvcGVydGllc1xyXG4gICAgaWYgKGhyZWYgJiYgKG5hbWUgPT09IFwidGltZWxpbmVcIikpIHtcclxuICAgICAgaHJlZiA9IGhyZWYucmVwbGFjZShcImh0dHBzOi8vXCIsIFwiXCIpLnNwbGl0KFwiP1wiKTtcclxuICAgICAgcmV0dXJuIGhyZWZbMF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcbn0pOyJdLCJmaWxlIjoiZnJvbnRlbmQvc3JjL2dsb2JhbF9saXN0ZW5lcl92aXNpdF90aW1lbGluZV9ldmVudF9wZWFyc29uLmpzIn0=
;var a = [];var i='global_listener_visit_parameters_timeline_event_pearson';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/global_listener_visit_parameters_timeline_event_pearson/ts_eab52c8b12d202ad8fc25268aa192807/'}]);})();(function(){ /* eslint-disable camelcase */
// @ts-nocheck
var InteractionTypeImpl = InteractionType.extend({
  ADMIN: "_visitAdmin",
  TIMEOUT: 30 * 60 * 1000, //30 minutes
  UTM_PARAMS: ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "creative", "clickId"],
  removalUrls: ["https://www.pearson.com/us/404-page-not-found.html"],

  init: function(blueConicClient, context) {
    this.blueConicClient = blueConicClient;
    this.context = context;
  },

  getPreloadProperties: 

  onLoad: function() {
    this._profile = this.context.getProfile();

    var visitAdmin = this._getVisitAdmin();
    
    var url = document.location.href.toString();

    // create the event
    var event = {
      id:
        "Visit on " +
        visitAdmin.eventDate.toDateString() +
        " " +
        visitAdmin.eventDate
          .getHours()
          .toString()
          .padStart(2, "0") +
        ":" +
        visitAdmin.eventDate
          .getMinutes()
          .toString()
          .padStart(2, "0"),
      pageviews: visitAdmin.pageviews,
      visit_page: visitAdmin.visitPages
    };

    this._addVisitContext(event, visitAdmin, url);
    this._profile.timeline.createEventById(event.id, "visit", visitAdmin.eventDate, event);

    // make sure the admin is updated
    this._profile.setValue(this.ADMIN, this.blueConicClient.json.stringify(visitAdmin));
    this._profile.setValue("visit_timeline_create_date", new Date().getTime().toString());
    this._profile.addValue("timeline_event_types", "visit");
    this._profile.addValue("urls_viewed_-_all", this._getCleanUrl("profile", url));

    this.blueConicClient.profile.updateProfile();
  },

  _getVisitAdmin: function() {
    var visitAdmin = this._profile.getValue(this.ADMIN)
      ? this.blueConicClient.json.parse(this._profile.getValue(this.ADMIN))
      : {};

    var currentDate = this.blueConicClient.getCurrentDate();

    if (visitAdmin.eventDate) {
      visitAdmin.eventDate = new Date(visitAdmin.eventDate);
    }
    if (visitAdmin.timestamp) {
      visitAdmin.timestamp = new Date(visitAdmin.timestamp);
    }

    if (!visitAdmin.timestamp || currentDate.getTime() - visitAdmin.timestamp.getTime() > this.TIMEOUT) {
      visitAdmin = {
        eventDate: new Date(),
        pageviews: 0,
        visitPages: []
      };
    }
    visitAdmin.pageviews = visitAdmin.pageviews + 1;
    visitAdmin.timestamp = currentDate;

    return visitAdmin;
  },
  
  _addVisitContext: function(event, visitAdmin, href) {

    if (href) {
      visitAdmin.visitPages = visitAdmin.visitPages || [];

      visitAdmin.visitPages.push({
        visit_date: visitAdmin.eventDate,
        url: this._getCleanUrl("timeline", href),
        source: this._getParameterByName("utm_source", href),
        medium: this._getParameterByName("utm_medium", href),
        campaign: this._getParameterByName("utm_campaign", href),
        content: this._getParameterByName("utm_content", href),
        term: this._getParameterByName("utm_term", href),
        creative: this._getParameterByName("creative", href),
        clickId: this._getParameterByName("gclid", href),
        search: this._getParameterByName("q", href)
      });
    }
    // add the visitPages to the event
    event.visit_page = visitAdmin.visitPages;
  },

  _getParameterByName: function(name, href) {
    if (!name) {
      return "";
    }
    name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&#]" + name + "=([^&#]*)"),
      results = regex.exec(href || location.href);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  },

  _getCleanUrl: function(name, href) {
    
    //profile properties
    if (href && (name === "profile")) {
      if (this.removalUrls.includes(href)) {
        return "";
      }
      href = href.replace("https://www.pearson.com/","").split("?");
      href = href[0].replace(".html","");
      return href;
    }
    //timeline properties
    if (href && (name === "timeline")) {
      href = href.replace("https://", "").split("?");
      return href[0];
    }
    return "";
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyIvVXNlcnMvYW5keS5vZ3JhZHkvZ2l0L3BzL3BsdWdpbnNfeWFybi9jdXN0b21lci1zcGVjaWZpYy9wZWFyc29uL2dsb2JhbF9saXN0ZW5lcl92aXNpdF90aW1lbGluZV9ldmVudF9wZWFyc29uL2Zyb250ZW5kL2dsb2JhbF9saXN0ZW5lcl92aXNpdF90aW1lbGluZV9ldmVudF9wZWFyc29uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xyXG4vLyBAdHMtbm9jaGVja1xyXG52YXIgSW50ZXJhY3Rpb25UeXBlSW1wbCA9IEludGVyYWN0aW9uVHlwZS5leHRlbmQoe1xyXG4gIEFETUlOOiBcIl92aXNpdEFkbWluXCIsXHJcbiAgVElNRU9VVDogMzAgKiA2MCAqIDEwMDAsIC8vMzAgbWludXRlc1xyXG4gIFVUTV9QQVJBTVM6IFtcInV0bV9zb3VyY2VcIiwgXCJ1dG1fbWVkaXVtXCIsIFwidXRtX2NhbXBhaWduXCIsIFwidXRtX3Rlcm1cIiwgXCJ1dG1fY29udGVudFwiXSxcclxuICByZW1vdmFsVXJsczogW1wiaHR0cHM6Ly93d3cucGVhcnNvbi5jb20vdXMvNDA0LXBhZ2Utbm90LWZvdW5kLmh0bWxcIl0sXHJcblxyXG4gIGluaXQ6IGZ1bmN0aW9uKGJsdWVDb25pY0NsaWVudCwgY29udGV4dCkge1xyXG4gICAgdGhpcy5ibHVlQ29uaWNDbGllbnQgPSBibHVlQ29uaWNDbGllbnQ7XHJcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gIH0sXHJcblxyXG4gIGdldFByZWxvYWRQcm9wZXJ0aWVzOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBbdGhpcy5BRE1JTl07XHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkOiBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuX3Byb2ZpbGUgPSB0aGlzLmNvbnRleHQuZ2V0UHJvZmlsZSgpO1xyXG5cclxuICAgIHZhciB2aXNpdEFkbWluID0gdGhpcy5fZ2V0VmlzaXRBZG1pbigpO1xyXG4gICAgXHJcbiAgICB2YXIgdXJsID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZi50b1N0cmluZygpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSB0aGUgZXZlbnRcclxuICAgIHZhciBldmVudCA9IHtcclxuICAgICAgaWQ6XHJcbiAgICAgICAgXCJWaXNpdCBvbiBcIiArXHJcbiAgICAgICAgdmlzaXRBZG1pbi5ldmVudERhdGUudG9EYXRlU3RyaW5nKCkgK1xyXG4gICAgICAgIFwiIFwiICtcclxuICAgICAgICB2aXNpdEFkbWluLmV2ZW50RGF0ZVxyXG4gICAgICAgICAgLmdldEhvdXJzKClcclxuICAgICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgICAucGFkU3RhcnQoMiwgXCIwXCIpICtcclxuICAgICAgICBcIjpcIiArXHJcbiAgICAgICAgdmlzaXRBZG1pbi5ldmVudERhdGVcclxuICAgICAgICAgIC5nZXRNaW51dGVzKClcclxuICAgICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgICAucGFkU3RhcnQoMiwgXCIwXCIpLFxyXG4gICAgICBwYWdldmlld3M6IHZpc2l0QWRtaW4ucGFnZXZpZXdzLFxyXG4gICAgICB2aXNpdF9wYWdlOiB2aXNpdEFkbWluLnZpc2l0UGFnZXNcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fYWRkVmlzaXRDb250ZXh0KGV2ZW50LCB2aXNpdEFkbWluLCB1cmwpO1xyXG4gICAgdGhpcy5fcHJvZmlsZS50aW1lbGluZS5jcmVhdGVFdmVudEJ5SWQoZXZlbnQuaWQsIFwidmlzaXRcIiwgdmlzaXRBZG1pbi5ldmVudERhdGUsIGV2ZW50KTtcclxuXHJcbiAgICAvLyBtYWtlIHN1cmUgdGhlIGFkbWluIGlzIHVwZGF0ZWRcclxuICAgIHRoaXMuX3Byb2ZpbGUuc2V0VmFsdWUodGhpcy5BRE1JTiwgdGhpcy5ibHVlQ29uaWNDbGllbnQuanNvbi5zdHJpbmdpZnkodmlzaXRBZG1pbikpO1xyXG4gICAgdGhpcy5fcHJvZmlsZS5zZXRWYWx1ZShcInZpc2l0X3RpbWVsaW5lX2NyZWF0ZV9kYXRlXCIsIG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCkpO1xyXG4gICAgdGhpcy5fcHJvZmlsZS5hZGRWYWx1ZShcInRpbWVsaW5lX2V2ZW50X3R5cGVzXCIsIFwidmlzaXRcIik7XHJcbiAgICB0aGlzLl9wcm9maWxlLmFkZFZhbHVlKFwidXJsc192aWV3ZWRfLV9hbGxcIiwgdGhpcy5fZ2V0Q2xlYW5VcmwoXCJwcm9maWxlXCIsIHVybCkpO1xyXG5cclxuICAgIHRoaXMuYmx1ZUNvbmljQ2xpZW50LnByb2ZpbGUudXBkYXRlUHJvZmlsZSgpO1xyXG4gIH0sXHJcblxyXG4gIF9nZXRWaXNpdEFkbWluOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciB2aXNpdEFkbWluID0gdGhpcy5fcHJvZmlsZS5nZXRWYWx1ZSh0aGlzLkFETUlOKVxyXG4gICAgICA/IHRoaXMuYmx1ZUNvbmljQ2xpZW50Lmpzb24ucGFyc2UodGhpcy5fcHJvZmlsZS5nZXRWYWx1ZSh0aGlzLkFETUlOKSlcclxuICAgICAgOiB7fTtcclxuXHJcbiAgICB2YXIgY3VycmVudERhdGUgPSB0aGlzLmJsdWVDb25pY0NsaWVudC5nZXRDdXJyZW50RGF0ZSgpO1xyXG5cclxuICAgIGlmICh2aXNpdEFkbWluLmV2ZW50RGF0ZSkge1xyXG4gICAgICB2aXNpdEFkbWluLmV2ZW50RGF0ZSA9IG5ldyBEYXRlKHZpc2l0QWRtaW4uZXZlbnREYXRlKTtcclxuICAgIH1cclxuICAgIGlmICh2aXNpdEFkbWluLnRpbWVzdGFtcCkge1xyXG4gICAgICB2aXNpdEFkbWluLnRpbWVzdGFtcCA9IG5ldyBEYXRlKHZpc2l0QWRtaW4udGltZXN0YW1wKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXZpc2l0QWRtaW4udGltZXN0YW1wIHx8IGN1cnJlbnREYXRlLmdldFRpbWUoKSAtIHZpc2l0QWRtaW4udGltZXN0YW1wLmdldFRpbWUoKSA+IHRoaXMuVElNRU9VVCkge1xyXG4gICAgICB2aXNpdEFkbWluID0ge1xyXG4gICAgICAgIGV2ZW50RGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICBwYWdldmlld3M6IDAsXHJcbiAgICAgICAgdmlzaXRQYWdlczogW11cclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHZpc2l0QWRtaW4ucGFnZXZpZXdzID0gdmlzaXRBZG1pbi5wYWdldmlld3MgKyAxO1xyXG4gICAgdmlzaXRBZG1pbi50aW1lc3RhbXAgPSBjdXJyZW50RGF0ZTtcclxuXHJcbiAgICByZXR1cm4gdmlzaXRBZG1pbjtcclxuICB9LFxyXG4gIFxyXG4gIF9hZGRWaXNpdENvbnRleHQ6IGZ1bmN0aW9uKGV2ZW50LCB2aXNpdEFkbWluLCBocmVmKSB7XHJcblxyXG4gICAgaWYgKGhyZWYpIHtcclxuICAgICAgdmlzaXRBZG1pbi52aXNpdFBhZ2VzID0gdmlzaXRBZG1pbi52aXNpdFBhZ2VzIHx8IFtdO1xyXG5cclxuICAgICAgdmlzaXRBZG1pbi52aXNpdFBhZ2VzLnB1c2goe1xyXG4gICAgICAgIHZpc2l0X2RhdGU6IHZpc2l0QWRtaW4uZXZlbnREYXRlLFxyXG4gICAgICAgIHVybDogdGhpcy5fZ2V0Q2xlYW5VcmwoXCJ0aW1lbGluZVwiLCBocmVmKSxcclxuICAgICAgICBzb3VyY2U6IHRoaXMuX2dldFBhcmFtZXRlckJ5TmFtZShcInV0bV9zb3VyY2VcIiwgaHJlZiksXHJcbiAgICAgICAgbWVkaXVtOiB0aGlzLl9nZXRQYXJhbWV0ZXJCeU5hbWUoXCJ1dG1fbWVkaXVtXCIsIGhyZWYpLFxyXG4gICAgICAgIGNhbXBhaWduOiB0aGlzLl9nZXRQYXJhbWV0ZXJCeU5hbWUoXCJ1dG1fY2FtcGFpZ25cIiwgaHJlZiksXHJcbiAgICAgICAgY29udGVudDogdGhpcy5fZ2V0UGFyYW1ldGVyQnlOYW1lKFwidXRtX2NvbnRlbnRcIiwgaHJlZiksXHJcbiAgICAgICAgdGVybTogdGhpcy5fZ2V0UGFyYW1ldGVyQnlOYW1lKFwidXRtX3Rlcm1cIiwgaHJlZiksXHJcbiAgICAgICAgc2VhcmNoOiB0aGlzLl9nZXRQYXJhbWV0ZXJCeU5hbWUoXCJxXCIsIGhyZWYpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gYWRkIHRoZSB2aXNpdFBhZ2VzIHRvIHRoZSBldmVudFxyXG4gICAgZXZlbnQudmlzaXRfcGFnZSA9IHZpc2l0QWRtaW4udmlzaXRQYWdlcztcclxuICB9LFxyXG5cclxuICBfZ2V0UGFyYW1ldGVyQnlOYW1lOiBmdW5jdGlvbihuYW1lLCBocmVmKSB7XHJcbiAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bW10vLCBcIlxcXFxbXCIpLnJlcGxhY2UoL1tcXF1dLywgXCJcXFxcXVwiKTtcclxuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbXFxcXD8mI11cIiArIG5hbWUgKyBcIj0oW14mI10qKVwiKSxcclxuICAgICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWMoaHJlZiB8fCBsb2NhdGlvbi5ocmVmKTtcclxuICAgIHJldHVybiByZXN1bHRzID09PSBudWxsID8gXCJcIiA6IGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzFdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpO1xyXG4gIH0sXHJcblxyXG4gIF9nZXRDbGVhblVybDogZnVuY3Rpb24obmFtZSwgaHJlZikge1xyXG4gICAgXHJcbiAgICAvL3Byb2ZpbGUgcHJvcGVydGllc1xyXG4gICAgaWYgKGhyZWYgJiYgKG5hbWUgPT09IFwicHJvZmlsZVwiKSkge1xyXG4gICAgICBpZiAodGhpcy5yZW1vdmFsVXJscy5pbmNsdWRlcyhocmVmKSkge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGhyZWYgPSBocmVmLnJlcGxhY2UoXCJodHRwczovL3d3dy5wZWFyc29uLmNvbS9cIixcIlwiKS5zcGxpdChcIj9cIik7XHJcbiAgICAgIGhyZWYgPSBocmVmWzBdLnJlcGxhY2UoXCIuaHRtbFwiLFwiXCIpO1xyXG4gICAgICByZXR1cm4gaHJlZjtcclxuICAgIH1cclxuICAgIC8vdGltZWxpbmUgcHJvcGVydGllc1xyXG4gICAgaWYgKGhyZWYgJiYgKG5hbWUgPT09IFwidGltZWxpbmVcIikpIHtcclxuICAgICAgaHJlZiA9IGhyZWYucmVwbGFjZShcImh0dHBzOi8vXCIsIFwiXCIpLnNwbGl0KFwiP1wiKTtcclxuICAgICAgcmV0dXJuIGhyZWZbMF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcbn0pOyJdLCJmaWxlIjoiZnJvbnRlbmQvc3JjL2dsb2JhbF9saXN0ZW5lcl92aXNpdF90aW1lbGluZV9ldmVudF9wZWFyc29uLmpzIn0=
;var a = [];var i='global_listener_visit_timeline_event_pearson';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/global_listener_visit_timeline_event_pearson/ts_1789d62afbb444b19de13f40a4bdef36/'}]);})();(();(();(();(();(();(();(();(();(();(();(();(();(();(();(();(();(();})(blueConicClient);