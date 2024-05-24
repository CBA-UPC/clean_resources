// ----------------------------------------------------------
// Snippet#4aa54bcc-3269-46fd-aa55-3fd397f60441 - Test
// ----------------------------------------------------------
console.log('test pre script for f1d7026f-040a-43f8-9600-bfc39b9251fc')

 'text/css';
  cssLink.href = 'https://103fm.maariv.co.il/playerLive/LIVE/mouth.css';
  cssLink.media = 'all';
  document.getElementsByTagName('head')[0].appendChild(cssLink);

  var instance = MouthJS({
    target: jQuery('.mouthjs-animation').get(0)
  }),
  elPlaybutton = jQuery('.mouthjs-playbutton'),
  elProgress = jQuery('.mouthjs-progress'),
  elIndicator = jQuery('.mouthjs-indicator'),
  elPosition = jQuery('.mouthjs-position'),
  elDuration = jQuery('.mouthjs-duration'),
  elVolume = jQuery('.mouthjs-volumebar'),
  elMute = jQuery('.mouthjs-mutebutton'),
  elVolumeIndicator = jQuery('.mouthjs-volumebar-indicator'),
  elBlockNoticeButton = jQuery('.mouthjs-block-notice-button'),
  elBlockNoticeModal = jQuery('.mouthjs-block-notice-modal');

  var volume = 1;

  function getAndroidVersion(ua) {
    ua = (ua || navigator.userAgent).toLowerCase();
    var match = ua.match(/android\s([0-9\.]*)/);
    return match ? match[1] : false;
  }

  if(parseInt(getAndroidVersion(), 10) <= 4) {
    elProgress.remove();
    elIndicator.remove();
    elPosition.remove();
    elDuration.remove();
    elVolume.remove();
    elMute.remove();
    elVolumeIndicator.remove();

    var audioElement = document.createElement('audio');
    audioElement.controls = true;
    audioElement.src = (jQuery('.mouthjs-autoplay, .mouthjs-preload').attr('data-file'));

    elPlaybutton.replaceWith(audioElement);

    return;
  }

  function showBlockNotice() {
    elBlockNoticeModal.addClass('visible');
  }

  elBlockNoticeButton.one('click', function(event) {
    elBlockNoticeModal.removeClass('visible');
    hasInitializedIma = true;
    isProcessingIma = false;
    instance.play();
    elPlaybutton.addClass('playing').removeClass('paused');
  })

  var hasInitializedIma = false;
  var isProcessingIma = false;
  var isPausedIma = false;
  var imaPlayerEl = document.getElementById('ima-player');
  var imaContainer = document.getElementById('ima-container');
  var imaManager = null;

  function skipIma() {
    isProcessingIma = false;
    instance.play();
    elPlaybutton.addClass('playing').removeClass('paused');
  }

  function catchImaError(imaError) {
    console.error('problem loading IMA:')
    console.error(imaError);
    tryNextImaUrl();
  }

  if (typeof google !== 'undefined') {
    var imaDisplayContainer = new google.ima.AdDisplayContainer(imaContainer, imaPlayerEl);
    var imaLoader = new google.ima.AdsLoader(imaDisplayContainer);

    imaLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
      function(imaManagerLoadedEvent) {
        elPlaybutton.addClass('playing').removeClass('paused');

        try {
          imaManager = imaManagerLoadedEvent.getAdsManager(imaPlayerEl);
          var loadTimestamp = Date.now();
          imaManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, catchImaError);
          imaManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, function() {
            // if we're faster than 5s, ad probably didn't play
            if (loadTimestamp > (Date.now() - (5 * 1000))) {
              tryNextImaUrl();
              return;
            }
            isProcessingIma = false;
            instance.play();
          })
          imaPlayerEl.load();
          imaManager.init(100, 100, google.ima.ViewMode.NORMAL);
          imaManager.start();
          window.imaDisplayContainer = imaDisplayContainer;
          window.imaLoader = imaLoader;
          window.imaManager = imaManager;
        } catch (imaError) {
          catchImaError(imaError);
        }
      },
      false);
    imaLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,catchImaError,false);
  }

  function initializeIma() {
    if (hasInitializedIma) {
      return;
    }
    if (
      typeof google == 'undefined'
      || !imaLoader
      || !imaDisplayContainer
    ) {
      showBlockNotice();
      return
    }
    hasInitializedIma = true;
    isProcessingIma = true;
    imaDisplayContainer.initialize();
    tryNextImaUrl();
  }

  function tryNextImaUrl() {
    if (!imaUrls.length) {
      skipIma();
      return;
    }
    var imaUrl = imaUrls.shift();
    var imaRequest = new google.ima.AdsRequest();
    imaRequest.adTagUrl = imaUrl;
    imaLoader.requestAds(imaRequest);
  }

  elPlaybutton.click(function (e) {
    e.preventDefault();
    if (!hasInitializedIma) {
      initializeIma();
      return;
    }
    if (isProcessingIma) {
      if (!imaManager) {
        return;
      }
      if (!isPausedIma) {
        elPlaybutton.addClass('paused').removeClass('playing');
        imaManager.pause();
        isPausedIma = true;
      } else {
        elPlaybutton.addClass('playing').removeClass('paused');
        imaManager.resume();
        isPausedIma = false;
      }
      return;
    }
    if (!instance.audioElement.paused) {
      elPlaybutton.addClass('paused').removeClass('playing');
      instance.pause();
    } else {
      if (!instance.audioElement.src) {
        return;
      }
      elPlaybutton.addClass('playing').removeClass('paused');
      instance.play();
    }
  });

  jQuery('.mouthjs-loadfile').click(function (e) {
    e.preventDefault();
    instance.load(jQuery(this).attr('data-file'));
    instance.play();
  });

  elProgress.click(function (e) {
    instance.setPosition((e.pageX - elProgress.offset().left) / elProgress.outerWidth());
    instance.play();
  });

  instance.load(jQuery('.mouthjs-autoplay').attr('data-file'));

  elVolume.click(function (e) {
    volume = ((e.pageX - elVolume.offset().left) / elVolume.outerWidth());
    elVolumeIndicator.css('width', volume * 100 + '%');
    elMute.removeClass('muted');
    elVolumeIndicator.removeClass('muted');
    instance.audioElement.volume = volume;
  });

  elMute.click(function (e) {
    if(elMute.hasClass('muted')) {
      elMute.removeClass('muted');
      elVolumeIndicator.removeClass('muted');
      instance.audioElement.volume = volume;
    } else {
      elMute.addClass('muted');
      elVolumeIndicator.addClass('muted');
      instance.audioElement.volume = 0;

    }
  });

  function render() {
    requestAnimationFrame(render);
    elIndicator.css('width', instance.getPosition() * 100 + '%');

    if (!instance.getPosition()) {
      elDuration.html('');
      elPosition.html('');
    } else {
      var durationMinutes = parseInt(instance.audioElement.duration / 60) % 60,
      durationSeconds = Math.round(instance.audioElement.duration % 60),
      positionMinutes = parseInt(instance.audioElement.currentTime / 60) % 60,
      positionSeconds = Math.round(instance.audioElement.currentTime % 60);
      elDuration.html((durationMinutes < 10 ? "0" + durationMinutes : durationMinutes) + ":" + (durationSeconds < 10 ? "0" + durationSeconds : durationSeconds));
      elPosition.html((positionMinutes < 10 ? "0" + positionMinutes : positionMinutes) + ":" + (positionSeconds < 10 ? "0" + positionSeconds : positionSeconds));
    }
  }
  render();

  var autoplayPromise = instance.audioElement.play();
  if (autoplayPromise !== undefined) {
    autoplayPromise.then(function() {
      instance.audioElement.pause();
      initializeIma();
    }).catch(function(error) {
      // autoplay not working
      console.log(error);
      instance.audioElement.pause();
    });
  }
});
