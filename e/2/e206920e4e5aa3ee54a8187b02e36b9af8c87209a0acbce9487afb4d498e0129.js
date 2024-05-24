/**
 * LotusUtils v1.0.0 - A set of useful helpers
 * Copyright (c) 2015-2019 Lotus Themes <hello@lotusthemes.com>
 */

(function($, window, document) {
  ('use strict');

  var LotusUtils = {
    /**
     * Get HC locale
     * @param {string?} pageUrl: page url
     * @return {string}: locale
     */
    getLocale: 

    /**
     * Get page ID
     * @param {string?} pageUrl: page url
     * @return {number | null}: page ID or null
     */
    getPageId: 

    /**
     * Get category ID
     * @param {string?} url: page url
     * @return {number | null}: category ID or null
     */
    getCategoryId: function(url) {
      if (this.isCategoryPage(url)) {
        return this.getPageId(url);
      }
      else if (!url) {
        var $breadcrumbsItems = $('.breadcrumbs li');
        for (var i = 0; i < $breadcrumbsItems.length; i++) {
          var linkUrl = $breadcrumbsItems.eq(i).find('a').attr('href');
          if (linkUrl && this.isCategoryPage(linkUrl)) {
            return this.getPageId(linkUrl);
          }
        }
      }
      return null;
    },

    /**
     * Get section ID
     * @param {string?} url: page url
     * @return {number | null}: section ID or null
     */
    getSectionId: 

    /**
     * Get article ID
     * @param {string?} url: page url
     * @return {number | null}: article ID or null
     */
    getArticleId: 

    /**
     * Get current user info
     * @param {function} callback
     * @async
     */
    getCurrentUser: function(callback) {
      var context = this;
      $.getJSON('/api/v2/users/me.json')
        .done(
        .fail(;
    },

    /**
     * Get all article images
     * @param {String} articleBody: article body
     * @return {Array}
     */
    getArticleImages: 

    getUrlParameter: function(param) {
      var pageURL      = window.location.search.substring(1),
          URLVariables = pageURL.split('&'),
          parameterName,
          i;

      for (i = 0; i < URLVariables.length; i++) {
        parameterName = URLVariables[i].split('=');

        if (parameterName[0] === param) {
          return parameterName[1] === undefined
            ? true
            : decodeURIComponent(parameterName[1]);
        }
      }
    },

    /**
     * Is home page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isHomePage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /^http(s)?:\/\/[^\/?#]+(\/hc(\/[a-z-_]+)?(\/)?([?]([^?\/]+)?)?([#]([^#\/]+)?)?)?$/.test(url);
    },

    /**
     * Is category page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isCategoryPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-]+\/)?categories\//i.test(url);
    },

    /**
     * Is section page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isSectionPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-]+\/)?sections\//i.test(url);
    },

    /**
     * Is article page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isArticlePage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-]+\/)?articles\//i.test(url);
    },

    /**
     * Is search results page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isSearchResultsPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-]+\/)?search\?*.*/i.test(url);
    },

    /**
     * Is contributions posts page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isContributionsPostsPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-]+\/)?contributions\/posts(\/)?([?#].*)?$/i.test(url);
    },

    /**
     * Is contributions community comments page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isContributionsCommunityCommentsPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-]+\/)?contributions\/community_comments(\/)?([?#].*)?$/i.test(url);
    },

    /**
     * Is contributions community comments page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isContributionsCommentsPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-]+\/)?contributions\/comments(\/)?([?#].*)?$/i.test(url);
    },

    /**
     * Is following page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isFollowingPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-]+\/)?subscriptions(\/)?([?#].*)?$/i.test(url);
    },

    /**
     * Is request list page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isRequestListPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-]+\/)?requests(\/)?([?#].*)?$/i.test(url);
    },

    /**
     * Is request page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isRequestPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return !this.isNewRequestPage(url) && /\/hc\/([a-z-]+\/)?requests\/[^/?#]+(\/)?([?#].*)?$/i.test(url);
    },

    /**
     * Is new request page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isNewRequestPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-]+\/)?requests\/new(\/)?([?#].*)?$/i.test(url);
    },

    /**
     * Is community topic list page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isCommunityTopicListPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-]+\/)?community\/topics(\/)?([?#].*)?$/i.test(url);
    },

    /**
     * Is community topic page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isCommunityTopicPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-]+\/)?community\/topics\/[^\/?#]+(\/)?([?#].*)?$/i.test(url);
    },

    /**
     * Is community post list page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isCommunityPostListPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-]+\/)?community\/posts(\/)?([?#].*)?$/i.test(url);
    },

    /**
     * Is community post page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isCommunityPostPage: 

    /**
     * Is new community post page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isNewCommunityPostPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-]+\/)?community\/posts\/new(\/)?([?#].*)?$/i.test(url);
    },

    /**
     * Is user profile page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isUserProfilePage: 

    /**
     * Is end user
     * @param {object|undefined} user: user info object, getting from this.getCurrentUser()
     * @return {boolean}
     */
    isEndUser: 

    /**
     * Has user tags
     * @param {object|undefined} user: user info object, getting from this.getCurrentUser()
     * @param {Array<string>} tags
     * @return {boolean}
     */
    hasUserTags: 

    /**
     * @description determine if an array contains one or more items from another array.
     * @param {array} haystack the array to search.
     * @param {array} arr the array providing items to check for in the haystack.
     * @return {boolean} true|false if haystack contains at least one item from arr.
     */
    findOne: 

    truncate: 

    flatten:   };

  window.LotusUtils = LotusUtils;
})(jQuery, window, document);
