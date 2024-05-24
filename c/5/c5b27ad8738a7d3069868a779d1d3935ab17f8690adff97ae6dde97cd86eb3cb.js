/*
 * Nivo Lightbox v1.1
 * http://dev7studios.com/nivo-lightbox
 *
 * Copyright 2013, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

;(function($, window, document, undefined){

  var pluginName = 'nivoLightbox',
      defaults = {
        effect: 'fade',
        theme: 'default',
        keyboardNav: true,
        clickOverlayToClose: true,
        onInit: function(){},
        beforeShowLightbox: function(){},
        afterShowLightbox: function(lightbox){},
        beforeHideLightbox: function(){},
        afterHideLightbox: 
        onPrev: function(element){},
        onNext: 
        errorMessage: 'The requested content cannot be loaded. Please try again later.'
      };

  
  NivoLightbox.prototype = {

      init: function(){
    var $this = this;

    // Need this so we don't use CSS transitions in mobile
    if(!$('html').hasClass('nivo-lightbox-notouch')) $('html').addClass('nivo-lightbox-notouch');
    if('ontouchstart' in document) $('html').removeClass('nivo-lightbox-notouch');

    // Setup the click
          this.$el.on('click', function(e){
            e.preventDefault();
            $this.showLightbox();
          });

          // keyboardNav
        if(this.options.keyboardNav){
          $('body').off('keyup').on('keyup', ;
    }

    this.options.onInit.call(this);

      },

      showLightbox: function(){
        var $this = this;
        this.options.beforeShowLightbox.call(this);

          var lightbox = this.constructLightbox();
          if(!lightbox) return;
          var content = lightbox.find('.nivo-lightbox-content');
          if(!content) return;
          var currentLink = this.$el;
          $('body').addClass('nivo-lightbox-body-effect-'+ this.options.effect);

        // Add content
        this.processContent(content, currentLink);

        // Nav
        if(this.$el.attr('data-lightbox-gallery')){
          var $this = this,
            galleryItems = $('[data-lightbox-gallery="'+ this.$el.attr('data-lightbox-gallery') +'"]');

          $('.nivo-lightbox-nav').show();

      // Prev
          $('.nivo-lightbox-prev').off('click').on('click', ;

          // Next
          $('.nivo-lightbox-next').off('click').on('click', ;
        }

        setTimeout( 1); // For CSS transitions
      },

      processContent: function(content, link){
        var $this = this;
        var href = link.attr('href');
        content.html('').addClass('nivo-lightbox-loading');

        // Is HiDPI?
        if(this.isHidpi() && link.attr('data-lightbox-hidpi')){
          href = link.attr('data-lightbox-hidpi');
        }

        // Image
        if(href.match(/\.(jpeg|jpg|gif|png)$/i) != null){
          var img = $('<img>', { src: href });
      img.one('load', function() {
        var wrap = $('<div class="nivo-lightbox-image" />');
            wrap.append(img);
        content.html(wrap).removeClass('nivo-lightbox-loading');

        // Vertically center images
        wrap.css({
          'line-height': $('.nivo-lightbox-content').height() +'px',
          'height': $('.nivo-lightbox-content').height() +'px' // For Firefox
        });
        $(window).resize(function() {
          wrap.css({
            'line-height': $('.nivo-lightbox-content').height() +'px',
            'height': $('.nivo-lightbox-content').height() +'px' // For Firefox
          });
        });
      }).each(;

      img.error(function() {
        var wrap = $('<div class="nivo-lightbox-error"><p>'+ $this.options.errorMessage +'</p></div>');
            content.html(wrap).removeClass('nivo-lightbox-loading');
      });
        }
        // Video (Youtube/Vimeo)
        else if(video = href.match(/(youtube|youtu|vimeo)\.(com|be)\/(watch\?v=([\w-]+)|([\w-]+))/)){
          var src = '',
            classTerm = 'nivo-lightbox-video';

          if(video[1] == 'youtube'){
            src = 'http://www.youtube.com/v/'+ video[4];
            classTerm = 'nivo-lightbox-youtube';
          }
          if(video[1] == 'youtu'){
            src = 'http://www.youtube.com/v/'+ video[3];
            classTerm = 'nivo-lightbox-youtube';
          }
          if(video[1] == 'vimeo'){
            src = 'http://player.vimeo.com/video/'+ video[3];
            classTerm = 'nivo-lightbox-vimeo';
          }

          if(src){
            var iframe = $('<iframe>', {
              src: src,
              'class': classTerm,
              frameborder: 0,
              vspace: 0,
              hspace: 0,
              scrolling: 'auto'
            });
            content.html(iframe);
            iframe.load(function(){ content.removeClass('nivo-lightbox-loading'); });
          }
        }
        // AJAX
        else if(link.attr('data-lightbox-type') == 'ajax'){
          var $this = this;
      $.ajax({
        url: href,
        cache: false,
        success: function(data) {
          var wrap = $('<div class="nivo-lightbox-ajax" />');
          wrap.append(data);
          content.html(wrap).removeClass('nivo-lightbox-loading');

          // Vertically center html
          if(wrap.outerHeight() < content.height()){
            wrap.css({
              'position': 'relative',
              'top': '50%',
              'margin-top': -(wrap.outerHeight()/2) +'px'
            });
          }
          $(window).resize(function() {
            if(wrap.outerHeight() < content.height()){
              wrap.css({
                'position': 'relative',
                'top': '50%',
                'margin-top': -(wrap.outerHeight()/2) +'px'
              });
            }
          });
        },
        error:       });
        }
        // Inline HTML
        else if(href.substring(0, 1) == '#'){
          if($(href).length){
            var wrap = $('<div class="nivo-lightbox-inline" />');
        wrap.append($(href).clone().show());
            content.html(wrap).removeClass('nivo-lightbox-loading');

            // Vertically center html
        if(wrap.outerHeight() < content.height()){
          wrap.css({
            'position': 'relative',
            'top': '50%',
            'margin-top': -(wrap.outerHeight()/2) +'px'
          });
        }
        $(window).resize(function() {
          if(wrap.outerHeight() < content.height()){
            wrap.css({
              'position': 'relative',
              'top': '50%',
              'margin-top': -(wrap.outerHeight()/2) +'px'
            });
          }
        });
      } else {
        var wrap = $('<div class="nivo-lightbox-error"><p>'+ $this.options.errorMessage +'</p></div>');
          content.html(wrap).removeClass('nivo-lightbox-loading');
      }
        }
        // iFrame (default)
        else {
          var iframe = $('<iframe>', {
            src: href,
            'class': 'nivo-lightbox-item',
            frameborder: 0,
            vspace: 0,
            hspace: 0,
            scrolling: 'auto'
          });
          content.html(iframe);
          iframe.load(;
        }

        // Set the title
        if(link.attr('title')){
          var titleWrap = $('<span>', { 'class': 'nivo-lightbox-title' });
          titleWrap.text(link.attr('title'));
          $('.nivo-lightbox-title-wrap').html(titleWrap);
        } else {
          $('.nivo-lightbox-title-wrap').html('');
        }
      },

      constructLightbox: function(){
        if($('.nivo-lightbox-overlay').length) return $('.nivo-lightbox-overlay');

        var overlay = $('<div>', { 'class': 'nivo-lightbox-overlay nivo-lightbox-theme-'+ this.options.theme +' nivo-lightbox-effect-'+ this.options.effect });
        var wrap = $('<div>', { 'class': 'nivo-lightbox-wrap' });
        var content = $('<div>', { 'class': 'nivo-lightbox-content' });
        var nav = $('<a href="#" class="nivo-lightbox-nav nivo-lightbox-prev">Previous</a><a href="#" class="nivo-lightbox-nav nivo-lightbox-next">Next</a>');
        var close = $('<a href="#" class="nivo-lightbox-close" title="Close">Close</a>');
        var title = $('<div>', { 'class': 'nivo-lightbox-title-wrap' });

        var isMSIE = /*@cc_on!@*/0;
        if(isMSIE) overlay.addClass('nivo-lightbox-ie');

        wrap.append(content);
        wrap.append(title);
        overlay.append(wrap);
        overlay.append(nav);
        overlay.append(close);
        $('body').append(overlay);

        var $this = this;
        if($this.options.clickOverlayToClose){
          overlay.on('click', function(e){
              if(e.target === this ||
                 $(e.target).hasClass('nivo-lightbox-content') ||
                 $(e.target).hasClass('nivo-lightbox-image')) $this.destructLightbox();
          });
      }

        close.on('click', ;

        return overlay;
      },

      destructLightbox: 

      isHidpi: 
  };

  $.fn[pluginName] = 

})(jQuery, window, document);