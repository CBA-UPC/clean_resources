(function( blueConic, undefined ) {var ps='https://plugins.blueconic.net/';var pf='/gallery/';(();var InteractionType=BCClass.extend({init:getPreloadProperties:function(){return[]},getContent:function(){},onEvent:function(){},importLibraries:);(();(();(();(();(();(();(();(();(();(();(();(();(();(();(();(();(();(();(();(function(){ var InteractionTypeImpl=InteractionType.extend({eventTypes:{audio:{play:"media:audio:play",ended:"media:audio:ended",played:"media:audio:played_"},video:{play:"media:video:play",ended:"media:video:ended",played:"media:video:played_"}},init:function(e,t){this.blueConicClient=e;var i=t.getParameters();if(i.selector&&i.selector[0]&&(this.selector=i.selector[0]),i.urlRestriction&&i.urlRestriction[0])try{this.urlRestriction=new RegExp(i.urlRestriction[0])}catch(t){e.util.log("[ERROR] "+t.message)}i.mediaType&&i.mediaType[0]&&(this.mediaType=i.mediaType[0]),this.blueConicClient.event.subscribe(this.blueConicClient.event.onUrlChange,this,this._findMediaElement),this._reset()},_reset:function(){this._playFired={},document.querySelectorAll(this.selector).length>0?this._positionFound():this.blueConicClient.position.subscribe(this.selector,this,this._positionFound),this.progressInterval&&clearInterval(this.progressInterval),this.playedPercentage=0},_onEnded:function(e){var t=e.target.getAttribute("src");this._playFired[t]&&(this.urlRestriction&&!this.urlRestriction.test(t)||(this._checkProgress(e.target),this.blueConicClient.createEvent("media:ended",[e.target]),this.mediaType&&this.blueConicClient.createEvent(this.eventTypes[this.mediaType].ended,[e.target]),clearInterval(this.progressInterval)))},_checkProgress:function(e){if(!isNaN(e.currentTime)&&!isNaN(e.duration)&&e.duration!==1/0){var t=Math.floor(e.currentTime/e.duration*100);if(0!==t){for(var i=this.playedPercentage+1;i<=t;i++)i%10!=0&&i%25!=0||(this.blueConicClient.event.publish("media:played_"+i+"%",[e]),this.mediaType&&this.blueConicClient.event.publish(this.eventTypes[this.mediaType].played+i+"%",[e]));this.playedPercentage=t}}},_onPlaying:function(e){var t=e.target.getAttribute("src");t&&(this._playFired[t]||this.urlRestriction&&!this.urlRestriction.test(t)||(this.blueConicClient.event.publish("media:play",[e.target]),this.mediaType&&this.blueConicClient.event.publish(this.eventTypes[this.mediaType].play,[e.target]),this._playFired[t]=!0,this.progressInterval=setInterval(this._checkProgress.bind(this),1e3,e.target)))},_positionFound:function(){for(var e=document.querySelectorAll(this.selector),t=!1,i=0;i<e.length;i++)if("IFRAME"===e[i].tagName){var n=e[i];n.contentDocument&&n.contentDocument.children&&n.contentDocument.children.length>0?this._bindMediaEvents(n.contentDocument.children[0]):(n.addEventListener("load",this._positionFound.bind(this)),t=!0)}else this._bindMediaEvents(e[i]);t||this.blueConicClient.position.subscribe(this.selector,this,this._positionFound)},_bindMediaEvents:function(e){e&&!e.getAttribute("data-blueconic-media-listener")&&(e.addEventListener("ended",this._onEnded.bind(this),!0),e.addEventListener("playing",this._onPlaying.bind(this),!0),e.setAttribute("data-blueconic-media-listener",!0))}});var a = [];var i='listener_media';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwarePluginsRepositoryUrl(ps, pf) + i + '/1.0.4/'}]);})();(();(();(();(function(){ var InteractionTypeImpl = InteractionType.extend({
  init: function(blueConicClient, context) {
    this.blueConicClient = blueConicClient;
    this.context = context;
    this.parameters = this.context.getParameters();

    this.selector = this.parameters.selector ? this.parameters.selector[0] : null;
    this.scrollPercentage =
      this.parameters.scrollPercentage && this.parameters.scrollPercentage[0] !== "null"
        ? this.parameters.scrollPercentage[0]
        : null;
    this.eventname = this.parameters.eventname ? this.parameters.eventname[0] : null;
    this.secondsDelay = this.parameters.secondsDelay ? this.parameters.secondsDelay[0] : null;
    if (this.secondsDelay) {
      this.secondsDelay = parseInt(this.secondsDelay) * 1000;
    }

    // scroll down
    this._maxScrollPercent = 0;
    this._minScrollPercent = 100;

    this.eventQueue = {
      scrollUp: [],
      scrollUpThrown: [],
      scroll: [],
      scrollThrown: [],
      scrollExtra: [],
      scrollExtraThrown: []
    };
  },

  /**
   * Fire a scroll event if the current scroll depth is deeper than the last event we fired
   * @private
   */
  _fireExtraScrollEvent: function() {
    if (!this.delayReached) {
      setTimeout(
        function() {
          this._fireExtraScrollEvent();
        }.bind(this),
        1000
      );
      return;
    }
    this.blueConicClient.createEvent(this.eventname);
    this.eventQueue.scrollExtraThrown.push(this.eventname);
    this.eventQueue.scrollExtra = [];
  },

  /**
   * Fire a scroll event if the current scroll depth is deeper than the last event we fired
   * This will fire the follwoing events when a user scrolls down
   * Scroll down to 20%
   * Scroll down to 50%
   * Scroll down to 80%
   * @private
   */
  _fireScrollDownEvent: function() {
    if (!this.delayReached) {
      setTimeout(
        function() {
          this._fireScrollDownEvent();
        }.bind(this),
        1000
      );
      return;
    }

    var me = this;
    // eslint-disable-next-line max-statements
    this.eventQueue.scroll.forEach(function(scrollPercent, index, object) {
      if (me.eventQueue.scrollThrown.includes(scrollPercent)) {
        object.splice(index, 1);
        return;
      }

      if (scrollPercent >= 80) {
        if (!me.eventQueue.scrollThrown.includes(20)) {
          me.blueConicClient.createEvent("scroll_20_percent");
          me.eventQueue.scrollThrown.push(20);
        }
        if (!me.eventQueue.scrollThrown.includes(50)) {
          me.blueConicClient.createEvent("scroll_50_percent");
          me.eventQueue.scrollThrown.push(50);
        }
        me.blueConicClient.createEvent("scroll_80_percent");
        me.eventQueue.scrollThrown.push(80);
      } else if (scrollPercent >= 50) {
        if (!me.eventQueue.scrollThrown.includes(20)) {
          me.blueConicClient.createEvent("scroll_20_percent");
          me.eventQueue.scrollThrown.push(20);
        }
        me.blueConicClient.createEvent("scroll_50_percent");
        me.eventQueue.scrollThrown.push(50);
      } else if (scrollPercent >= 20) {
        me.blueConicClient.createEvent("scroll_20_percent");
        me.eventQueue.scrollThrown.push(20);
      }

      if (scrollPercent > me._maxScrollPercent) {
        me._maxScrollPercent = scrollPercent;
        me._minScrollPercent = scrollPercent;
      }
      object.splice(index, 1);
    });
  },
  /**
   * Fire a scroll event if the current scroll depth is lower than the last scrol down event we fired
   * This will only be fired if one of the scroll down events are reached e.g.
   * Scroll down to 20% throw event
   * Scroll up to 0% throw event
   *
   * Scroll down to 10% (wouldn't throw an event)
   * Scroll up to 0% (wouldn't throw an event)
   *
   * Scroll down to 100%
   * - will throw the events for 20%, 50% 80% down
   * Scroll up to 0%
   * - will throw the events for 50%, 20%, 0% up
   * @private
   */
  _fireScrollUpEvent: function(scrollPercent) {
    if (!this.delayReached) {
      setTimeout(
        function() {
          this._fireScrollUpEvent(scrollPercent);
        }.bind(this),
        1000
      );
      return;
    }

    var me = this;
    this.eventQueue.scrollUp.forEach(function(scrollPercent, index, object) {
      if (me.eventQueue.scrollUpThrown.includes(scrollPercent)) {
        object.splice(index, 1);
        return;
      }
      me.blueConicClient.createEvent("scroll_up_" + scrollPercent.toString() + "_percent");
      if (scrollPercent < me._minScrollPercent && me._maxScrollPercent > scrollPercent) {
        me._maxScrollPercent = scrollPercent;
        me._minScrollPercent = scrollPercent;
      }
      me.eventQueue.scrollUpThrown.push(scrollPercent);
      object.splice(index, 1);
    });
  },

  /**
   * Check if one of the scroll depth events has to be fired
   * @private
   */
  // eslint-disable-next-line complexity, max-statements
  _checkScrollCondition: function() {
    var scrollTo = this.scrollEllement.scrollTop;
    var docHeight = this.scrollEllement.scrollHeight;
    var scrollPercent = (scrollTo / (docHeight - window.innerHeight)) * 100;

    // Scrolling down
    if (scrollPercent >= 80) {
      this.eventQueue.scroll.push(80);
      this.eventQueue.scroll = this._unuiqeValues(this.eventQueue.scroll);
      this._fireScrollDownEvent();
    } else if (scrollPercent >= 50) {
      this.eventQueue.scroll.push(50);
      this.eventQueue.scroll = this._unuiqeValues(this.eventQueue.scroll);
      this._fireScrollDownEvent();
    } else if (scrollPercent >= 20) {
      this.eventQueue.scroll.push(20);
      this.eventQueue.scroll = this._unuiqeValues(this.eventQueue.scroll);
      this._fireScrollDownEvent();
    }

    // Scrolling up
    if (scrollPercent < 5) {
      // this will already be firing at 5%
      // so, that it will fire just before a customer is at the top
      this.eventQueue.scrollUp.push(0);
      this.eventQueue.scrollUp = this._unuiqeValues(this.eventQueue.scrollUp);
      this._fireScrollUpEvent();
    } else if (scrollPercent <= 20) {
      this.eventQueue.scrollUp.push(20);
      this.eventQueue.scrollUp = this._unuiqeValues(this.eventQueue.scrollUp);
      this._fireScrollUpEvent();
    } else if (scrollPercent <= 50) {
      this.eventQueue.scrollUp.push(50);
      this.eventQueue.scrollUp = this._unuiqeValues(this.eventQueue.scrollUp);
      this._fireScrollUpEvent();
    } else if (scrollPercent <= 80) {
      this.eventQueue.scrollUp.push(80);
      this.eventQueue.scrollUp = this._unuiqeValues(this.eventQueue.scrollUp);
      this._fireScrollUpEvent();
    }

    // Extra scroll event
    if (!this.extraEventThrown && this.scrollPercentage && this.eventname && scrollPercent >= this.scrollPercentage) {
      this.extraEventThrown = true;
      this.eventQueue.scrollExtra.push(scrollPercent);
      this.eventQueue.scrollExtra = this._unuiqeValues(this.eventQueue.scrollExtra);
      this._fireExtraScrollEvent();
    }
  },

  onLoad: function() {
    if (!this.selector || this.selector === "document" || this.selector === "document.documentElement") {
      this.scrollEllement = document.documentElement;
      this.windowEvent = true;
    } else if (document.querySelector(this.selector)) {
      this.scrollEllement = document.querySelector(this.selector);
      this.windowEvent = false;
    } else {
      this.scrollEllement = document.documentElement;
      this.windowEvent = true;
    }

    this.delayReached = false;

    if (this.secondsDelay) {
      setTimeout(
        bind(this),
        this.secondsDelay
      );
    } else {
      this.delayReached = true;
    }

    // check if the desired scroll position is already reached
    this._checkScrollCondition();

    if (this.windowEvent) {
      window.addEventListener("scroll", this._checkScrollCondition.bind(this));
    } else {
      this.scrollEllement.addEventListener("scroll", this._checkScrollCondition.bind(this));
    }
  },

  _unuiqeValues: function(obj) {
    if (!Array.isArray(obj)) {
      return obj;
    }
    return obj.filter(;
  }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyIvVXNlcnMvZWdpbHJlYXRoL0RvY3VtZW50cy9HaXQgUmVwb3MvcHMvcGx1Z2luc195YXJuL2N1c3RvbWVyLXNwZWNpZmljL2phbWEvbGlzdGVuZXJfc2Nyb2xsX2phbWEvZnJvbnRlbmQvbGlzdGVuZXJfc2Nyb2xsX2phbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEludGVyYWN0aW9uVHlwZUltcGwgPSBJbnRlcmFjdGlvblR5cGUuZXh0ZW5kKHtcbiAgaW5pdDogZnVuY3Rpb24oYmx1ZUNvbmljQ2xpZW50LCBjb250ZXh0KSB7XG4gICAgdGhpcy5ibHVlQ29uaWNDbGllbnQgPSBibHVlQ29uaWNDbGllbnQ7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSB0aGlzLmNvbnRleHQuZ2V0UGFyYW1ldGVycygpO1xuXG4gICAgdGhpcy5zZWxlY3RvciA9IHRoaXMucGFyYW1ldGVycy5zZWxlY3RvciA/IHRoaXMucGFyYW1ldGVycy5zZWxlY3RvclswXSA6IG51bGw7XG4gICAgdGhpcy5zY3JvbGxQZXJjZW50YWdlID1cbiAgICAgIHRoaXMucGFyYW1ldGVycy5zY3JvbGxQZXJjZW50YWdlICYmIHRoaXMucGFyYW1ldGVycy5zY3JvbGxQZXJjZW50YWdlWzBdICE9PSBcIm51bGxcIlxuICAgICAgICA/IHRoaXMucGFyYW1ldGVycy5zY3JvbGxQZXJjZW50YWdlWzBdXG4gICAgICAgIDogbnVsbDtcbiAgICB0aGlzLmV2ZW50bmFtZSA9IHRoaXMucGFyYW1ldGVycy5ldmVudG5hbWUgPyB0aGlzLnBhcmFtZXRlcnMuZXZlbnRuYW1lWzBdIDogbnVsbDtcbiAgICB0aGlzLnNlY29uZHNEZWxheSA9IHRoaXMucGFyYW1ldGVycy5zZWNvbmRzRGVsYXkgPyB0aGlzLnBhcmFtZXRlcnMuc2Vjb25kc0RlbGF5WzBdIDogbnVsbDtcbiAgICBpZiAodGhpcy5zZWNvbmRzRGVsYXkpIHtcbiAgICAgIHRoaXMuc2Vjb25kc0RlbGF5ID0gcGFyc2VJbnQodGhpcy5zZWNvbmRzRGVsYXkpICogMTAwMDtcbiAgICB9XG5cbiAgICAvLyBzY3JvbGwgZG93blxuICAgIHRoaXMuX21heFNjcm9sbFBlcmNlbnQgPSAwO1xuICAgIHRoaXMuX21pblNjcm9sbFBlcmNlbnQgPSAxMDA7XG5cbiAgICB0aGlzLmV2ZW50UXVldWUgPSB7XG4gICAgICBzY3JvbGxVcDogW10sXG4gICAgICBzY3JvbGxVcFRocm93bjogW10sXG4gICAgICBzY3JvbGw6IFtdLFxuICAgICAgc2Nyb2xsVGhyb3duOiBbXSxcbiAgICAgIHNjcm9sbEV4dHJhOiBbXSxcbiAgICAgIHNjcm9sbEV4dHJhVGhyb3duOiBbXVxuICAgIH07XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZpcmUgYSBzY3JvbGwgZXZlbnQgaWYgdGhlIGN1cnJlbnQgc2Nyb2xsIGRlcHRoIGlzIGRlZXBlciB0aGFuIHRoZSBsYXN0IGV2ZW50IHdlIGZpcmVkXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZmlyZUV4dHJhU2Nyb2xsRXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5kZWxheVJlYWNoZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMuX2ZpcmVFeHRyYVNjcm9sbEV2ZW50KCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgMTAwMFxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5ibHVlQ29uaWNDbGllbnQuY3JlYXRlRXZlbnQodGhpcy5ldmVudG5hbWUpO1xuICAgIHRoaXMuZXZlbnRRdWV1ZS5zY3JvbGxFeHRyYVRocm93bi5wdXNoKHRoaXMuZXZlbnRuYW1lKTtcbiAgICB0aGlzLmV2ZW50UXVldWUuc2Nyb2xsRXh0cmEgPSBbXTtcbiAgfSxcblxuICAvKipcbiAgICogRmlyZSBhIHNjcm9sbCBldmVudCBpZiB0aGUgY3VycmVudCBzY3JvbGwgZGVwdGggaXMgZGVlcGVyIHRoYW4gdGhlIGxhc3QgZXZlbnQgd2UgZmlyZWRcbiAgICogVGhpcyB3aWxsIGZpcmUgdGhlIGZvbGx3b2luZyBldmVudHMgd2hlbiBhIHVzZXIgc2Nyb2xscyBkb3duXG4gICAqIFNjcm9sbCBkb3duIHRvIDIwJVxuICAgKiBTY3JvbGwgZG93biB0byA1MCVcbiAgICogU2Nyb2xsIGRvd24gdG8gODAlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZmlyZVNjcm9sbERvd25FdmVudDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmRlbGF5UmVhY2hlZCkge1xuICAgICAgc2V0VGltZW91dChcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5fZmlyZVNjcm9sbERvd25FdmVudCgpO1xuICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgIDEwMDBcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1lID0gdGhpcztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXN0YXRlbWVudHNcbiAgICB0aGlzLmV2ZW50UXVldWUuc2Nyb2xsLmZvckVhY2goZnVuY3Rpb24oc2Nyb2xsUGVyY2VudCwgaW5kZXgsIG9iamVjdCkge1xuICAgICAgaWYgKG1lLmV2ZW50UXVldWUuc2Nyb2xsVGhyb3duLmluY2x1ZGVzKHNjcm9sbFBlcmNlbnQpKSB7XG4gICAgICAgIG9iamVjdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChzY3JvbGxQZXJjZW50ID49IDgwKSB7XG4gICAgICAgIGlmICghbWUuZXZlbnRRdWV1ZS5zY3JvbGxUaHJvd24uaW5jbHVkZXMoMjApKSB7XG4gICAgICAgICAgbWUuYmx1ZUNvbmljQ2xpZW50LmNyZWF0ZUV2ZW50KFwic2Nyb2xsXzIwX3BlcmNlbnRcIik7XG4gICAgICAgICAgbWUuZXZlbnRRdWV1ZS5zY3JvbGxUaHJvd24ucHVzaCgyMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtZS5ldmVudFF1ZXVlLnNjcm9sbFRocm93bi5pbmNsdWRlcyg1MCkpIHtcbiAgICAgICAgICBtZS5ibHVlQ29uaWNDbGllbnQuY3JlYXRlRXZlbnQoXCJzY3JvbGxfNTBfcGVyY2VudFwiKTtcbiAgICAgICAgICBtZS5ldmVudFF1ZXVlLnNjcm9sbFRocm93bi5wdXNoKDUwKTtcbiAgICAgICAgfVxuICAgICAgICBtZS5ibHVlQ29uaWNDbGllbnQuY3JlYXRlRXZlbnQoXCJzY3JvbGxfODBfcGVyY2VudFwiKTtcbiAgICAgICAgbWUuZXZlbnRRdWV1ZS5zY3JvbGxUaHJvd24ucHVzaCg4MCk7XG4gICAgICB9IGVsc2UgaWYgKHNjcm9sbFBlcmNlbnQgPj0gNTApIHtcbiAgICAgICAgaWYgKCFtZS5ldmVudFF1ZXVlLnNjcm9sbFRocm93bi5pbmNsdWRlcygyMCkpIHtcbiAgICAgICAgICBtZS5ibHVlQ29uaWNDbGllbnQuY3JlYXRlRXZlbnQoXCJzY3JvbGxfMjBfcGVyY2VudFwiKTtcbiAgICAgICAgICBtZS5ldmVudFF1ZXVlLnNjcm9sbFRocm93bi5wdXNoKDIwKTtcbiAgICAgICAgfVxuICAgICAgICBtZS5ibHVlQ29uaWNDbGllbnQuY3JlYXRlRXZlbnQoXCJzY3JvbGxfNTBfcGVyY2VudFwiKTtcbiAgICAgICAgbWUuZXZlbnRRdWV1ZS5zY3JvbGxUaHJvd24ucHVzaCg1MCk7XG4gICAgICB9IGVsc2UgaWYgKHNjcm9sbFBlcmNlbnQgPj0gMjApIHtcbiAgICAgICAgbWUuYmx1ZUNvbmljQ2xpZW50LmNyZWF0ZUV2ZW50KFwic2Nyb2xsXzIwX3BlcmNlbnRcIik7XG4gICAgICAgIG1lLmV2ZW50UXVldWUuc2Nyb2xsVGhyb3duLnB1c2goMjApO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2Nyb2xsUGVyY2VudCA+IG1lLl9tYXhTY3JvbGxQZXJjZW50KSB7XG4gICAgICAgIG1lLl9tYXhTY3JvbGxQZXJjZW50ID0gc2Nyb2xsUGVyY2VudDtcbiAgICAgICAgbWUuX21pblNjcm9sbFBlcmNlbnQgPSBzY3JvbGxQZXJjZW50O1xuICAgICAgfVxuICAgICAgb2JqZWN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfSk7XG4gIH0sXG4gIC8qKlxuICAgKiBGaXJlIGEgc2Nyb2xsIGV2ZW50IGlmIHRoZSBjdXJyZW50IHNjcm9sbCBkZXB0aCBpcyBsb3dlciB0aGFuIHRoZSBsYXN0IHNjcm9sIGRvd24gZXZlbnQgd2UgZmlyZWRcbiAgICogVGhpcyB3aWxsIG9ubHkgYmUgZmlyZWQgaWYgb25lIG9mIHRoZSBzY3JvbGwgZG93biBldmVudHMgYXJlIHJlYWNoZWQgZS5nLlxuICAgKiBTY3JvbGwgZG93biB0byAyMCUgdGhyb3cgZXZlbnRcbiAgICogU2Nyb2xsIHVwIHRvIDAlIHRocm93IGV2ZW50XG4gICAqXG4gICAqIFNjcm9sbCBkb3duIHRvIDEwJSAod291bGRuJ3QgdGhyb3cgYW4gZXZlbnQpXG4gICAqIFNjcm9sbCB1cCB0byAwJSAod291bGRuJ3QgdGhyb3cgYW4gZXZlbnQpXG4gICAqXG4gICAqIFNjcm9sbCBkb3duIHRvIDEwMCVcbiAgICogLSB3aWxsIHRocm93IHRoZSBldmVudHMgZm9yIDIwJSwgNTAlIDgwJSBkb3duXG4gICAqIFNjcm9sbCB1cCB0byAwJVxuICAgKiAtIHdpbGwgdGhyb3cgdGhlIGV2ZW50cyBmb3IgNTAlLCAyMCUsIDAlIHVwXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZmlyZVNjcm9sbFVwRXZlbnQ6IGZ1bmN0aW9uKHNjcm9sbFBlcmNlbnQpIHtcbiAgICBpZiAoIXRoaXMuZGVsYXlSZWFjaGVkKSB7XG4gICAgICBzZXRUaW1lb3V0KFxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLl9maXJlU2Nyb2xsVXBFdmVudChzY3JvbGxQZXJjZW50KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAxMDAwXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgdGhpcy5ldmVudFF1ZXVlLnNjcm9sbFVwLmZvckVhY2goZnVuY3Rpb24oc2Nyb2xsUGVyY2VudCwgaW5kZXgsIG9iamVjdCkge1xuICAgICAgaWYgKG1lLmV2ZW50UXVldWUuc2Nyb2xsVXBUaHJvd24uaW5jbHVkZXMoc2Nyb2xsUGVyY2VudCkpIHtcbiAgICAgICAgb2JqZWN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG1lLmJsdWVDb25pY0NsaWVudC5jcmVhdGVFdmVudChcInNjcm9sbF91cF9cIiArIHNjcm9sbFBlcmNlbnQudG9TdHJpbmcoKSArIFwiX3BlcmNlbnRcIik7XG4gICAgICBpZiAoc2Nyb2xsUGVyY2VudCA8IG1lLl9taW5TY3JvbGxQZXJjZW50ICYmIG1lLl9tYXhTY3JvbGxQZXJjZW50ID4gc2Nyb2xsUGVyY2VudCkge1xuICAgICAgICBtZS5fbWF4U2Nyb2xsUGVyY2VudCA9IHNjcm9sbFBlcmNlbnQ7XG4gICAgICAgIG1lLl9taW5TY3JvbGxQZXJjZW50ID0gc2Nyb2xsUGVyY2VudDtcbiAgICAgIH1cbiAgICAgIG1lLmV2ZW50UXVldWUuc2Nyb2xsVXBUaHJvd24ucHVzaChzY3JvbGxQZXJjZW50KTtcbiAgICAgIG9iamVjdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBvbmUgb2YgdGhlIHNjcm9sbCBkZXB0aCBldmVudHMgaGFzIHRvIGJlIGZpcmVkXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eSwgbWF4LXN0YXRlbWVudHNcbiAgX2NoZWNrU2Nyb2xsQ29uZGl0aW9uOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2Nyb2xsVG8gPSB0aGlzLnNjcm9sbEVsbGVtZW50LnNjcm9sbFRvcDtcbiAgICB2YXIgZG9jSGVpZ2h0ID0gdGhpcy5zY3JvbGxFbGxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgdmFyIHNjcm9sbFBlcmNlbnQgPSAoc2Nyb2xsVG8gLyAoZG9jSGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSkgKiAxMDA7XG5cbiAgICAvLyBTY3JvbGxpbmcgZG93blxuICAgIGlmIChzY3JvbGxQZXJjZW50ID49IDgwKSB7XG4gICAgICB0aGlzLmV2ZW50UXVldWUuc2Nyb2xsLnB1c2goODApO1xuICAgICAgdGhpcy5ldmVudFF1ZXVlLnNjcm9sbCA9IHRoaXMuX3VudWlxZVZhbHVlcyh0aGlzLmV2ZW50UXVldWUuc2Nyb2xsKTtcbiAgICAgIHRoaXMuX2ZpcmVTY3JvbGxEb3duRXZlbnQoKTtcbiAgICB9IGVsc2UgaWYgKHNjcm9sbFBlcmNlbnQgPj0gNTApIHtcbiAgICAgIHRoaXMuZXZlbnRRdWV1ZS5zY3JvbGwucHVzaCg1MCk7XG4gICAgICB0aGlzLmV2ZW50UXVldWUuc2Nyb2xsID0gdGhpcy5fdW51aXFlVmFsdWVzKHRoaXMuZXZlbnRRdWV1ZS5zY3JvbGwpO1xuICAgICAgdGhpcy5fZmlyZVNjcm9sbERvd25FdmVudCgpO1xuICAgIH0gZWxzZSBpZiAoc2Nyb2xsUGVyY2VudCA+PSAyMCkge1xuICAgICAgdGhpcy5ldmVudFF1ZXVlLnNjcm9sbC5wdXNoKDIwKTtcbiAgICAgIHRoaXMuZXZlbnRRdWV1ZS5zY3JvbGwgPSB0aGlzLl91bnVpcWVWYWx1ZXModGhpcy5ldmVudFF1ZXVlLnNjcm9sbCk7XG4gICAgICB0aGlzLl9maXJlU2Nyb2xsRG93bkV2ZW50KCk7XG4gICAgfVxuXG4gICAgLy8gU2Nyb2xsaW5nIHVwXG4gICAgaWYgKHNjcm9sbFBlcmNlbnQgPCA1KSB7XG4gICAgICAvLyB0aGlzIHdpbGwgYWxyZWFkeSBiZSBmaXJpbmcgYXQgNSVcbiAgICAgIC8vIHNvLCB0aGF0IGl0IHdpbGwgZmlyZSBqdXN0IGJlZm9yZSBhIGN1c3RvbWVyIGlzIGF0IHRoZSB0b3BcbiAgICAgIHRoaXMuZXZlbnRRdWV1ZS5zY3JvbGxVcC5wdXNoKDApO1xuICAgICAgdGhpcy5ldmVudFF1ZXVlLnNjcm9sbFVwID0gdGhpcy5fdW51aXFlVmFsdWVzKHRoaXMuZXZlbnRRdWV1ZS5zY3JvbGxVcCk7XG4gICAgICB0aGlzLl9maXJlU2Nyb2xsVXBFdmVudCgpO1xuICAgIH0gZWxzZSBpZiAoc2Nyb2xsUGVyY2VudCA8PSAyMCkge1xuICAgICAgdGhpcy5ldmVudFF1ZXVlLnNjcm9sbFVwLnB1c2goMjApO1xuICAgICAgdGhpcy5ldmVudFF1ZXVlLnNjcm9sbFVwID0gdGhpcy5fdW51aXFlVmFsdWVzKHRoaXMuZXZlbnRRdWV1ZS5zY3JvbGxVcCk7XG4gICAgICB0aGlzLl9maXJlU2Nyb2xsVXBFdmVudCgpO1xuICAgIH0gZWxzZSBpZiAoc2Nyb2xsUGVyY2VudCA8PSA1MCkge1xuICAgICAgdGhpcy5ldmVudFF1ZXVlLnNjcm9sbFVwLnB1c2goNTApO1xuICAgICAgdGhpcy5ldmVudFF1ZXVlLnNjcm9sbFVwID0gdGhpcy5fdW51aXFlVmFsdWVzKHRoaXMuZXZlbnRRdWV1ZS5zY3JvbGxVcCk7XG4gICAgICB0aGlzLl9maXJlU2Nyb2xsVXBFdmVudCgpO1xuICAgIH0gZWxzZSBpZiAoc2Nyb2xsUGVyY2VudCA8PSA4MCkge1xuICAgICAgdGhpcy5ldmVudFF1ZXVlLnNjcm9sbFVwLnB1c2goODApO1xuICAgICAgdGhpcy5ldmVudFF1ZXVlLnNjcm9sbFVwID0gdGhpcy5fdW51aXFlVmFsdWVzKHRoaXMuZXZlbnRRdWV1ZS5zY3JvbGxVcCk7XG4gICAgICB0aGlzLl9maXJlU2Nyb2xsVXBFdmVudCgpO1xuICAgIH1cblxuICAgIC8vIEV4dHJhIHNjcm9sbCBldmVudFxuICAgIGlmICghdGhpcy5leHRyYUV2ZW50VGhyb3duICYmIHRoaXMuc2Nyb2xsUGVyY2VudGFnZSAmJiB0aGlzLmV2ZW50bmFtZSAmJiBzY3JvbGxQZXJjZW50ID49IHRoaXMuc2Nyb2xsUGVyY2VudGFnZSkge1xuICAgICAgdGhpcy5leHRyYUV2ZW50VGhyb3duID0gdHJ1ZTtcbiAgICAgIHRoaXMuZXZlbnRRdWV1ZS5zY3JvbGxFeHRyYS5wdXNoKHNjcm9sbFBlcmNlbnQpO1xuICAgICAgdGhpcy5ldmVudFF1ZXVlLnNjcm9sbEV4dHJhID0gdGhpcy5fdW51aXFlVmFsdWVzKHRoaXMuZXZlbnRRdWV1ZS5zY3JvbGxFeHRyYSk7XG4gICAgICB0aGlzLl9maXJlRXh0cmFTY3JvbGxFdmVudCgpO1xuICAgIH1cbiAgfSxcblxuICBvbkxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5zZWxlY3RvciB8fCB0aGlzLnNlbGVjdG9yID09PSBcImRvY3VtZW50XCIgfHwgdGhpcy5zZWxlY3RvciA9PT0gXCJkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcIikge1xuICAgICAgdGhpcy5zY3JvbGxFbGxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgIHRoaXMud2luZG93RXZlbnQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKSkge1xuICAgICAgdGhpcy5zY3JvbGxFbGxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcik7XG4gICAgICB0aGlzLndpbmRvd0V2ZW50ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2Nyb2xsRWxsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICB0aGlzLndpbmRvd0V2ZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmRlbGF5UmVhY2hlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc2Vjb25kc0RlbGF5KSB7XG4gICAgICBzZXRUaW1lb3V0KFxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLmRlbGF5UmVhY2hlZCA9IHRydWU7XG4gICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgdGhpcy5zZWNvbmRzRGVsYXlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVsYXlSZWFjaGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiB0aGUgZGVzaXJlZCBzY3JvbGwgcG9zaXRpb24gaXMgYWxyZWFkeSByZWFjaGVkXG4gICAgdGhpcy5fY2hlY2tTY3JvbGxDb25kaXRpb24oKTtcblxuICAgIGlmICh0aGlzLndpbmRvd0V2ZW50KSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLl9jaGVja1Njcm9sbENvbmRpdGlvbi5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY3JvbGxFbGxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuX2NoZWNrU2Nyb2xsQ29uZGl0aW9uLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfSxcblxuICBfdW51aXFlVmFsdWVzOiBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgcmV0dXJuIG9iai5maWx0ZXIoZnVuY3Rpb24odmFsdWUsIGluZGV4LCBzZWxmKSB7XG4gICAgICByZXR1cm4gaW5kZXggPT09IHNlbGYuaW5kZXhPZih2YWx1ZSk7XG4gICAgfSk7XG4gIH1cbn0pO1xuIl0sImZpbGUiOiJmcm9udGVuZC9zcmMvbGlzdGVuZXJfc2Nyb2xsX2phbWEuanMifQ==
;var a = [];var i='listener_scroll_jama';blueConic.fn.registerInteractionType(i, InteractionTypeImpl, a, [{ id : i, baseUrl : blueConic.fn.getBCHostnameAwareLocalPluginsUrl() + '/plugins/listener_scroll_jama/ts_b70f0c7cf7fc2f28366c4e81c767c62b/'}]);})();(();(();(();(();(();})(blueConicClient);