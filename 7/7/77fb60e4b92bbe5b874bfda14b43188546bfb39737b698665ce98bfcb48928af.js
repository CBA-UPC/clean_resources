@keyframes animation--loading{to{transform:rotate(360deg)}}.frontmod-schnellanmeldebox{display:flex}.frontmod-schnellanmeldebox .form{margin-right:0!important;margin-left:0!important;padding:0 24px 24px}.frontmod-schnellanmeldebox .form form>p{font-size:var(--fs);line-height:1.75rem}.frontmod-schnellanmeldebox .form .alert{border:none;margin:0}.frontmod-schnellanmeldebox .form .alert small{margin-top:16px;line-height:var(--flh-sm)}.frontmod-schnellanmeldebox .form button{background-color:var(--brandcolor);border-color:var(--brandcolor)}.frontmod-schnellanmeldebox .form button:hover{background-color:var(--brandcolorLight);border-color:var(--brandcolorLight)}.frontmod-schnellanmeldebox .form button:focus{background-color:var(--brandcolorDark);border-color:var(--brandcolorDark)}.frontmod-schnellanmeldebox .lead{padding:0}.frontmod-schnellanmeldebox .description,.frontmod-schnellanmeldebox [itemprop=description]{width:100%;max-width:650px;padding:0;margin:0 auto;background-color:#fff;border:1px solid #979797}.frontmod-schnellanmeldebox .description>p,.frontmod-schnellanmeldebox [itemprop=description]>p{position:relative;z-index:1;font-size:var(--fs-md);font-weight:var(--fw-semibold);line-height:1.75rem;text-align:left;color:#fff;background-color:var(--brandcolor);margin:-1px -1px 16px;padding:16px 24px}.frontmod-schnellanmeldebox>.lead>p:last-child,.frontmod-schnellanmeldebox>.lead>span,.frontmod-schnellanmeldebox>header{display:none!important}.frontmod-schnellanmeldebox.teaser-asterus .lead,.frontmod-schnellanmeldebox.teaser-majestix .lead,.frontmod-schnellanmeldebox.teaser-special .lead{display:block!important}.frontmod-schnellanmeldebox.teaser-asterix .description,.frontmod-schnellanmeldebox.teaser-asterix [itemprop=description],.frontmod-schnellanmeldebox.teaser-asterix p{text-align:left!important}.frontmod-schnellanmeldebox.teaser-special{height:auto!important;padding-bottom:0!important}IDEO_STARTED event
     * to pause running players when video is started
     */
    jsb.on('Player::VIDEO_STARTED', function () {
        pauseAllAudioPlayers();
    });

    /**
     * Subscribes to Gallery::INDEX_CHANGED event 
     * to pause running players in slider on index change
     */
    jsb.on('Gallery::INDEX_CHANGED', function (e) {
        if (e.gallery_id) {
            // find running players in gallery and stop
            $('#' + e.gallery_id + ' .audioplayer-playing').each(function () {
                var audio = $(this).find('audio');
                if (audio.length === 1) {
                    audio[0].pause();
                }
            });
        };
    });

    /**
     * playerInitialize is called for each player by jsb.registerHandler#
     * does some basic stuff (css classes, check for image)
     * sets isLoading class
     * and adds each placeholder to queuedPlayers array
     * 
     * @param { Object } dom_element 
     * @param { String } options 
     */
    var playerInitialize = function (dom_element, options) {
        this.dom_element = dom_element;
        this.$dom_element = $(dom_element);
        this.options = {};
        this.options.analytics = {};
        $.extend(this.options, options);

        this.$dom_element.addClass('isLoading');

        if (this.$dom_element.children('img').length > 0) {
            this.$dom_element.addClass('hasPicture');
        }

        queuedPlayers.push(this);
    };

    playerInitialize.prototype = {
        isInitialized: false,

        /** 
         * Checks if element is visible 
         */
        isVisible: function () {
            var elm = this.dom_element;

            if (!!elm.offsetParent && !!(elm.offsetWidth || elm.offsetHeight || elm.getClientRects().length)) {
                var bcRect = elm.getBoundingClientRect();
                return (bcRect.left < window.innerWidth && bcRect.right >= 0 && bcRect.top < window.innerHeight && bcRect.bottom >= 0);
            } else {
                return false;
            }
        },

        /** 
         * checks if data-jsb.media-Attribute contains direct mp3 reference (only for radioeins)
         * otherwise gets media JSON and reads media reference including live stream flag,
         * does some basic error handling and calls createInitButton method
         */
        initialize: function () {
            var that = this;
            var mediaJsonURL = this.options.media;
            var mp3URL = mediaJsonURL.match(/http.*\.mp3$/);
            var mediaSrc = '';

            this.isLivestream = false;

            if (mp3URL) {
                mediaSrc = mp3URL[0];
                this.createInitButton(mediaSrc, false);
            } else {
                $.getJSON(mediaJsonURL)
                    .done(function (data) {
                        mediaSrc = (data && data._mediaArray && data._mediaArray[0] && data._mediaArray[0]._mediaStreamArray && data._mediaArray[0]._mediaStreamArray[0] && data._mediaArray[0]._mediaStreamArray[0]._stream);
                        that.isLivestream = data._isLive;

                        if (mediaSrc) {
                            that.createInitButton(mediaSrc);
                        } else {
                            that.showErr(1, 'Referenz zur Audio-Datei nicht gefunden.');
                        }

                        // if livestream add css class audioplayer-livestream
                        if (that.isLivestream) {
                            that.$dom_element.addClass('audioplayer-livestream');
                        }
                    })
                    .fail(function (jqxhr, textStatus, error) {
                        that.showErr(1, 'Fehler beim Abruf der Medien-Informationen.', textStatus + ' ' + error);
                    });
            }
        },

        /**
         * creates initial play button for triggering player setup
         * calculates unique ID
         * sets isReady class
         * fires Player::IS_READY event (used for automatic starting of livestream players)
         * 
         * @param { String } mediaSrc
         */
        createInitButton: function (mediaSrc) {
            var that = this;
            var $audioBtn = $('<div role="button" tabindex="0" class="audio-btn" title="Audio abspielen" />');

            var $teaserImg = this.$dom_element.children('img:eq(0)');
            var imgTitle = $teaserImg.attr('title');
            var btnLayerTitle = 'Audio abspielen';
            if (imgTitle) {
                btnLayerTitle = _.escape(imgTitle + ' | ' + btnLayerTitle);
            }
            var $audioBtnLayer = $('<div class="audio-btn-layer" title="' + btnLayerTitle + '" />');
            this.uniqueId = +new Date() + Math.floor((Math.random() * (999 - 100) + 100));

            $audioBtnLayer.on('click', function (e) {
                initHandler(e);
            });

            $audioBtn.on('click touchend keypress', function (e) {
                initHandler(e);
            });

            $audioBtn.appendTo(this.$dom_element);
            $audioBtnLayer.insertBefore($audioBtn);

            this.$dom_element.removeClass('isLoading').addClass('isReady playerId-' + this.uniqueId);

            jsb.fireEvent('Player::IS_READY', {
                playerId: this.uniqueId
            });

            function initHandler(e) {
                var isKeyboardControl = !!(e.which === 13 || e.which === 32);

                if (e.type === 'click' || e.type === 'touchstart' || isKeyboardControl) {
                    e.preventDefault();

                    // ignore when player is already initialized
                    if (!that.isInitialized) {
                        that.isInitialized = true;
                        that.createAudio(mediaSrc, isKeyboardControl);
                        $audioBtn.blur();
                    }
                    return false;
                }
            }
        },

        /**
         * Creates <audio> element and initializes audio player
         * sets isInitialized class
         * calls subscribeToMediaEvents method
         * 
         * @param { String } src
         * @param { Boolean } isKeyboardControl
         */
        createAudio: function (src, isKeyboardControl) {
            var that = this;
            var $audioElm = $('<audio src="' + src + '" class="audio-element" controls>');

            // Append audio element to player container
            // and initialize audioPlayer on audio element
            $audioElm.appendTo(this.$dom_element).audioPlayer({
                classPrefix: 'audioplayer'
            });

            this.$dom_element.removeClass('isReady').addClass('isInitialized');

            // start the audio
            this.play();

            // if player is initialized via keyboard control, set focus to play/pause button
            if (isKeyboardControl) this.$dom_element.find('.audioplayer-playpause').focus();

            // attach event handler on initial audio button
            // to start / stop the player 
            // (primarily used for audio list player)
            this.$dom_element.find('.audio-btn').on('click keypress', function (e) {
                if (e.type === 'click' || e.which === 13 || e.which === 32) {
                    e.preventDefault();
                    that.toggle();

                    if (e.type === 'click') $(this).blur();
                    return false;
                }
            });

            this.subscribeToMediaEvents();
        },

        /** 
         * subscribes to several media events for setting css classes
         * and sending analytics data
         */
        subscribeToMediaEvents: function () {
            var that = this;
            var initialPlay = true;

            this.$audioElm = this.$dom_element.find('audio');
            this.lastTimeupdate = 0;

            // subscribe to play event
            // fire jsb event to pause video players
            // set audioplayer-playing class
            this.$audioElm.on('play', function (e) {
                jsb.fireEvent('Player::AUDIO_STARTED', {
                    playerId: that.uniqueId,
                    originalEvent: e
                });
                that.$dom_element.removeClass('audioplayer-stopped').addClass('audioplayer-playing');

                if (initialPlay) {
                    that.sendAnalyticsData('play initial');
                    initialPlay = false;
                } else {
                    that.sendAnalyticsData('play');
                }
            });

            // subscribe to pause event
            // set audioplayer-stopped class
            this.$audioElm.on('pause', function (e) {
                that.$dom_element.removeClass('audioplayer-playing').addClass('audioplayer-stopped');
                that.sendAnalyticsData('pause');
            });

            // subscribe to ended event
            // set audioplayer-stopped class
            this.$audioElm.on('ended', function (e) {
                that.$dom_element.removeClass('audioplayer-playing').addClass('audioplayer-stopped');
                that.sendAnalyticsData('ended');
            });

            /*
            this.$audioElm.on('timeupdate', function (e) {
                if (Math.floor(that.$audioElm[0].currentTime) > that.lastTimeupdate) {
                    that.lastTimeupdate = Math.floor(that.$audioElm[0].currentTime);
                    that.sendAnalyticsData('play', 'update');
                }
            });
            */

            // subscribe to AUDIO_STARTED event
            // and stop player (if it's not the one that triggered the event)
            jsb.on('Player::AUDIO_STARTED', function (e) {
                if (e.playerId !== that.uniqueId) {
                    that.pause();
                }
            });
        },

        /**
         * displays error information
         * 
         * @param { Integer } level
         * @param { String } msg
         * @param { String } consoleMsg
         */
        showErr: function (level, msg, consoleMsg) {
            this.$dom_element.removeClass('isLoading isReady isInitialized').addClass('error');
            this.$dom_element.append('<div class="audioplayer-error">' + msg + '</div>');
            if (consoleMsg) console.warn(consoleMsg);
        },

        /** 
         * toggles play/pause
         */
        toggle: function () {
            if (this.$dom_element.hasClass('audioplayer-playing')) {
                this.pause();
            } else {
                this.play();
            }
        },

        pause: function () {
            if (this.$dom_element.hasClass('audioplayer-playing')) {
                var audio = this.$dom_element.find('audio');
                if (audio.length === 1) {
                    audio[0].pause();
                }
            }
        },

        /**
         * start player
         */
        play: function () {
            if (this.$dom_element.hasClass('.audioplayer-playing')) {
                // do nothing (player already running)
            } else {
                var audio = this.$dom_element.find('audio');
                if (audio.length === 1) {
                    audio[0].play();
                }
            }
        },

        /**
         * Sends web analytics information via global callAnalytics function
         * TODO!
         * 
         * @param { Object } data
         */
        sendAnalyticsData: function (action, update) {
            var rbbtitle = this.options.analytics.rbbtitle || '';
            var rbbhandle = this.options.analytics.rbbhandle || '';
            var rbbhandle_short = rbbhandle.replace(/\/content\/rbb/g, '');
            var duration_sec = this.isLivestream ? '' : Math.round(Math.min(this.options.analytics.duration, 86400));
            var level2 = window.xtn2 || this.options.analytics.ATIxtn2 || '';

            // video oder audio, + playerid bei multiinstanzen
            var A = 'audio&plyr=' + this.uniqueId;

            // Level 2 Site
            var B = level2;

            // Richname
            var C = rbbtitle.replace(/ /g, '-').replace(/[^\w-]+/g, '') + ' ' + rbbhandle_short;

            // Refresh interval
            var F = 0;

            // Dauer des clips
            var G = duration_sec;

            // Position des Players
            var H = 'rmp=' + Math.floor(this.$audioElm[0].currentTime);
            H += '&rmpf=0';
            H += '&rmbufp=0';

            // Kennung für Streaming-Datenrate.
            var J = '';

            // Ort der Bereitstellung („int“ oder „ext“).
            var K = 'int';

            // Art der Wiedergabe („live“ oder „clip“)
            var L = this.isLivestream ? 'live' : 'clip';

            // Größe des Inhalts (Gesamtgröße in KB; leer lassen, wenn L=„live“).
            var M = '';

            // Format des Inhalts
            var N = 'mp3'

            if (/play/i.test(action)) {
                if (window.xt_rm) {
                    xt_rm(A, B, C, 'play', '', F, G, H, '', J, K, L, M, N);
                }
            }

            if (/pause/i.test(action)) {
                if (window.xt_rm) {
                    xt_rm(A, B, C, 'pause', '', F, G, H, '', J, K, L, M, N);
                }
            }

            if (/ended/i.test(action)) {
                if (window.xt_rm) {
                    xt_rm(A, B, C, 'stop', '', F, G, H, '', J, K, L, M, N);
                }
            }

            if (window.callAnalytics && !update) {
                callAnalytics('pi', 'player-audio', action + ' ' + rbbtitle + ' ' + rbbhandle);
            }
        }
    };

    jsb.registerHandler('playerInitialize-audio', playerInitialize);

});