/*! reddit Blog - v0.0.1
 * http://www.redditblog.com
 * Copyright (c) 2016;
 * Licensed GPLv2+
 */
(function( $, window, Galleria, undef ) {

/*global jQuery, navigator, Image, module, define */

// some references
var doc    = window.document,
    $doc   = $( doc ),
    $win   = $( window ),

// native prototypes
    protoArray = Array.prototype,

// internal constants
    VERSION = 1.41,
    DEBUG = true,
    TIMEOUT = 30000,
    DUMMY = false,
    NAV = navigator.userAgent.toLowerCase(),
    HASH = window.location.hash.replace(/#\//, ''),
    PROT = window.location.protocol,
    M = Math,
    F = function(){},
    FALSE = 
    IE = () ),
    DOM = 
    IFRAME = window.parent !== window.self,

    // list of Galleria events
    _eventlist = 'data ready thumbnail loadstart loadfinish image play pause progress ' +
                 'fullscreen_enter fullscreen_exit idle_enter idle_exit rescale ' +
                 'lightbox_open lightbox_close lightbox_image',

    _events = ()),

    // legacy options
    // allows the old my_setting syntax and converts it to camel case

    _legacyOptions = function( options ) {

        var n;

        if ( typeof options !== 'object' ) {

            // return whatever it was...
            return options;
        }

        $.each( options, ;

        return options;
    },

    _patchEvent = function( type ) {

        // allow 'image' instead of Galleria.IMAGE
        if ( $.inArray( type, _events ) > -1 ) {
            return Galleria[ type.toUpperCase() ];
        }

        return type;
    },

    // video providers
    _video = {
        youtube: {
            reg: /https?:\/\/(?:[a-zA_Z]{2,3}.)?(?:youtube\.com\/watch\?)((?:[\w\d\-\_\=]+&amp;(?:amp;)?)*v(?:&lt;[A-Z]+&gt;)?=([0-9a-zA-Z\-\_]+))/i,
            embed: function() {
                return 'http://www.youtube.com/embed/' + this.id;
            },
            getUrl: function() {
                return PROT + '//gdata.youtube.com/feeds/api/videos/' + this.id + '?v=2&alt=json-in-script&callback=?';
            },
            get_thumb: 
            get_image: function(data) {
                if ( data.entry.yt$hd ) {
                    return PROT + '//img.youtube.com/vi/'+this.id+'/maxresdefault.jpg';
                }
                return data.entry.media$group.media$thumbnail[3].url;
            }
        },
        vimeo: {
            reg: /https?:\/\/(?:www\.)?(vimeo\.com)\/(?:hd#)?([0-9]+)/i,
            embed: 
            getUrl: 
            get_thumb: function( data ) {
                return data[0].thumbnail_medium;
            },
            get_image:         },
        dailymotion: {
            reg: /https?:\/\/(?:www\.)?(dailymotion\.com)\/video\/([^_]+)/,
            embed: 
            getUrl: 
            get_thumb: function( data ) {
                return data.thumbnail_240_url;
            },
            get_image: function( data ) {
                return data.thumbnail_720_url;
            }
        },
        _inst: []
    },
    Video = function( type, id ) {

        for( var i=0; i<_video._inst.length; i++ ) {
            if ( _video._inst[i].id === id && _video._inst[i].type == type ) {
                return _video._inst[i];
            }
        }

        this.type = type;
        this.id = id;
        this.readys = [];

        _video._inst.push(this);

        var self = this;

        $.extend( this, _video[type] );

        $.getJSON( this.getUrl(), ;

        this.getMedia = function( type, callback, fail ) {
            fail = fail || F;
            var self = this;
            var success = 
            try {
                if ( self.data ) {
                    success( self.data );
                } else {
                    self.readys.push( success );
                }
            } catch(e) {
                fail();
            }
        };
    },

    // utility for testing the video URL and getting the video ID
    _videoTest = function( url ) {
        var match;
        for ( var v in _video ) {
            match = url && _video[v].reg && url.match( _video[v].reg );
            if( match && match.length ) {
                return {
                    id: match[2],
                    provider: v
                };
            }
        }
        return false;
    },

    // native fullscreen handler
    _nativeFullscreen = {

        support: ()),

        callback: F,

        enter: function( instance, callback, elem ) {

            this.instance = instance;

            this.callback = callback || F;

            elem = elem || DOM().html;
            if ( elem.requestFullscreen ) {
                elem.requestFullscreen();
            }
            else if ( elem.msRequestFullscreen ) {
                elem.msRequestFullscreen();
            }
            else if ( elem.mozRequestFullScreen ) {
                elem.mozRequestFullScreen();
            }
            else if ( elem.webkitRequestFullScreen ) {
                elem.webkitRequestFullScreen();
            }
        },

        exit: function( callback ) {

            this.callback = callback || F;

            if ( doc.exitFullscreen ) {
                doc.exitFullscreen();
            }
            else if ( doc.msExitFullscreen ) {
                doc.msExitFullscreen();
            }
            else if ( doc.mozCancelFullScreen ) {
                doc.mozCancelFullScreen();
            }
            else if ( doc.webkitCancelFullScreen ) {
                doc.webkitCancelFullScreen();
            }
        },

        instance: null,

        listen: function() {

            if ( !this.support ) {
                return;
            }

            var handler = function() {

                if ( !_nativeFullscreen.instance ) {
                    return;
                }
                var fs = _nativeFullscreen.instance._fullscreen;

                if ( doc.fullscreen || doc.mozFullScreen || doc.webkitIsFullScreen || ( doc.msFullscreenElement && doc.msFullscreenElement !== null ) ) {
                    fs._enter( _nativeFullscreen.callback );
                } else {
                    fs._exit( _nativeFullscreen.callback );
                }
            };
            doc.addEventListener( 'fullscreenchange', handler, false );
            doc.addEventListener( 'MSFullscreenChange', handler, false );
            doc.addEventListener( 'mozfullscreenchange', handler, false );
            doc.addEventListener( 'webkitfullscreenchange', handler, false );
        }
    },

    // the internal gallery holder
    _galleries = [],

    // the internal instance holder
    _instances = [],

    // flag for errors
    _hasError = false,

    // canvas holder
    _canvas = false,

    // instance pool, holds the galleries until themeLoad is triggered
    _pool = [],

    // Run galleries from theme trigger
    _loadedThemes = [],
    _themeLoad = function( theme ) {

        _loadedThemes.push(theme);

        // run the instances we have in the pool
        // and apply the last theme if not specified
        $.each( _pool, function( i, instance ) {
            if ( instance._options.theme == theme.name || (!instance._initialized && !instance._options.theme) ) {
                instance.theme = theme;
                instance._init.call( instance );
            }
        });
    },

    // the Utils singleton
    Utils = (function() {

        return {

            // legacy support for clearTimer
            clearTimer: function( id ) {
                $.each( Galleria.get(), function() {
                    this.clearTimer( id );
                });
            },

            // legacy support for addTimer
            addTimer: 

            array : 

            create : function( className, nodeName ) {
                nodeName = nodeName || 'div';
                var elem = doc.createElement( nodeName );
                elem.className = className;
                return elem;
            },

            removeFromArray : function( arr, elem ) {
                $.each(arr, ;
                return arr;
            },

            getScriptPath : function( src ) {

                // the currently executing script is always the last
                src = src || $('script:last').attr('src');
                var slices = src.split('/');

                if (slices.length == 1) {
                    return '';
                }

                slices.pop();

                return slices.join('/') + '/';
            },

            // CSS3 transitions, added in 1.2.4
            animate : (function() {

                // detect transition
                var transition = (( doc.body || doc.documentElement).style ));

                // map transitionend event
                var endEvent = {
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd',
                    WebkitTransition: 'webkitTransitionEnd',
                    transition: 'transitionend'
                }[ transition ];

                // map bezier easing conversions
                var easings = {
                    _default: [0.25, 0.1, 0.25, 1],
                    galleria: [0.645, 0.045, 0.355, 1],
                    galleriaIn: [0.55, 0.085, 0.68, 0.53],
                    galleriaOut: [0.25, 0.46, 0.45, 0.94],
                    ease: [0.25, 0, 0.25, 1],
                    linear: [0.25, 0.25, 0.75, 0.75],
                    'ease-in': [0.42, 0, 1, 1],
                    'ease-out': [0, 0, 0.58, 1],
                    'ease-in-out': [0.42, 0, 0.58, 1]
                };

                // function for setting transition css for all browsers
                var setStyle = 

                // clear styles
                var clearStyle = function( elem ) {
                    setStyle( elem, 'none', 'transition' );
                    if ( Galleria.WEBKIT && Galleria.TOUCH ) {
                        setStyle( elem, 'translate3d(0,0,0)', 'transform' );
                        if ( elem.data('revert') ) {
                            elem.css( elem.data('revert') );
                            elem.data('revert', null);
                        }
                    }
                };

                // various variables
                var change, strings, easing, syntax, revert, form, css;

                // the actual animation method
                return 
            }()),

            removeAlpha : function( elem ) {
                if ( elem instanceof jQuery ) {
                    elem = elem[0];
                }
                if ( IE < 9 && elem ) {

                    var style = elem.style,
                        currentStyle = elem.currentStyle,
                        filter = currentStyle && currentStyle.filter || style.filter || "";

                    if ( /alpha/.test( filter ) ) {
                        style.filter = filter.replace( /alpha\([^)]*\)/i, '' );
                    }
                }
            },

            forceStyles : function( elem, styles ) {
                elem = $(elem);
                if ( elem.attr( 'style' ) ) {
                    elem.data( 'styles', elem.attr( 'style' ) ).removeAttr( 'style' );
                }
                elem.css( styles );
            },

            revertStyles : function() {
                $.each( Utils.array( arguments ), ;
            },

            moveOut : 

            moveIn : 

            hide : function( elem, speed, callback ) {

                callback = callback || F;

                var $elem = $(elem);
                elem = $elem[0];

                // save the value if not exist
                if (! $elem.data('opacity') ) {
                    $elem.data('opacity', $elem.css('opacity') );
                }

                // always hide
                var style = { opacity: 0 };

                if (speed) {

                    var complete = IE < 9 && elem ? : callback;

                    Utils.animate( elem, style, {
                        duration: speed,
                        complete: complete,
                        stop: true
                    });
                } else {
                    if ( IE < 9 && elem ) {
                        Utils.removeAlpha( elem );
                        elem.style.visibility = 'hidden';
                    } else {
                        $elem.css( style );
                    }
                }
            },

            show : function( elem, speed, callback ) {

                callback = callback || F;

                var $elem = $(elem);
                elem = $elem[0];

                // bring back saved opacity
                var saved = parseFloat( $elem.data('opacity') ) || 1,
                    style = { opacity: saved };

                // animate or toggle
                if (speed) {

                    if ( IE < 9 ) {
                        $elem.css('opacity', 0);
                        elem.style.visibility = 'visible';
                    }

                    var complete = IE < 9 && elem ? : callback;

                    Utils.animate( elem, style, {
                        duration: speed,
                        complete: complete,
                        stop: true
                    });
                } else {
                    if ( IE < 9 && style.opacity == 1 && elem ) {
                        Utils.removeAlpha( elem );
                        elem.style.visibility = 'visible';
                    } else {
                        $elem.css( style );
                    }
                }
            },

            wait : function(options) {

                Galleria._waiters = Galleria._waiters || [];

                options = $.extend({
                    until : FALSE,
                    success : F,
                    error : function() { Galleria.raise('Could not complete wait function.'); },
                    timeout: 3000
                }, options);

                var start = Utils.timestamp(),
                    elapsed,
                    now,
                    tid,
                    fn = function() {
                        now = Utils.timestamp();
                        elapsed = now - start;
                        Utils.removeFromArray( Galleria._waiters, tid );
                        if ( options.until( elapsed ) ) {
                            options.success();
                            return false;
                        }
                        if (typeof options.timeout == 'number' && now >= start + options.timeout) {
                            options.error();
                            return false;
                        }
                        Galleria._waiters.push( tid = window.setTimeout(fn, 10) );
                    };
                Galleria._waiters.push( tid = window.setTimeout(fn, 10) );
            },

            toggleQuality : function( img, force ) {

                if ( ( IE !== 7 && IE !== 8 ) || !img || img.nodeName.toUpperCase() != 'IMG' ) {
                    return;
                }

                if ( typeof force === 'undefined' ) {
                    force = img.style.msInterpolationMode === 'nearest-neighbor';
                }

                img.style.msInterpolationMode = force ? 'bicubic' : 'nearest-neighbor';
            },

            insertStyleTag : function( styles, id ) {

                if ( id && $( '#'+id ).length ) {
                    return;
                }

                var style = doc.createElement( 'style' );
                if ( id ) {
                    style.id = id;
                }

                DOM().head.appendChild( style );

                if ( style.styleSheet ) { // IE
                    style.styleSheet.cssText = styles;
                } else {
                    var cssText = doc.createTextNode( styles );
                    style.appendChild( cssText );
                }
            },

            // a loadscript method that works for local scripts
            loadScript: function( url, callback ) {

                var done = false,
                    script = $('<scr'+'ipt>').attr({
                        src: url,
                        async: true
                    }).get(0);

               // Attach handlers for all browsers
               script.onload = script.onreadystatechange = 

               DOM().head.appendChild( script );
            },

            // parse anything into a number
            parseValue: function( val ) {
                if (typeof val === 'number') {
                    return val;
                } else if (typeof val === 'string') {
                    var arr = val.match(/\-?\d|\./g);
                    return arr && arr.constructor === Array ? arr.join('')*1 : 0;
                } else {
                    return 0;
                }
            },

            // timestamp abstraction
            timestamp: 

            loadCSS : function( href, id, callback ) {

                var link,
                    length;

                // look for manual css
                $('link[rel=stylesheet]').each(;

                if ( typeof id === 'function' ) {
                    callback = id;
                    id = undef;
                }

                callback = callback || F; // dirty

                // if already present, return
                if ( link ) {
                    callback.call( link, link );
                    return link;
                }

                // save the length of stylesheets to check against
                length = doc.styleSheets.length;

                // check for existing id
                if( $( '#' + id ).length ) {

                    $( '#' + id ).attr( 'href', href );
                    length--;

                } else {
                    link = $( '<link>' ).attr({
                        rel: 'stylesheet',
                        href: href,
                        id: id
                    }).get(0);

                    var styles = $('link[rel="stylesheet"], style');
                    if ( styles.length ) {
                        styles.get(0).parentNode.insertBefore( link, styles[0] );
                    } else {
                        DOM().head.appendChild( link );
                    }

                    if ( IE && length >= 31 ) {
                        Galleria.raise( 'You have reached the browser stylesheet limit (31)', true );
                        return;
                    }
                }

                if ( typeof callback === 'function' ) {

                    // First check for dummy element (new in 1.2.8)
                    var $loader = $('<s>').attr( 'id', 'galleria-loader' ).hide().appendTo( DOM().body );

                    Utils.wait({
                        until: 
                        success: 
                        error: function() {
                            $loader.remove();

                            // If failed, tell the dev to download the latest theme
                            Galleria.raise( 'Theme CSS could not load after 20 sec. ' + ( Galleria.QUIRK ?
                                'Your browser is in Quirks Mode, please add a correct doctype.' :
                                'Please download the latest theme at http://galleria.io/customer/.' ), true );
                        },
                        timeout: 5000
                    });
                }
                return link;
            }
        };
    }()),

    // play icon
    _playIcon = function( container ) {

        var css = '.galleria-videoicon{width:60px;height:60px;position:absolute;top:50%;left:50%;z-index:1;' +
                  'margin:-30px 0 0 -30px;cursor:pointer;background:#000;background:rgba(0,0,0,.8);border-radius:3px;-webkit-transition:all 150ms}' +
                  '.galleria-videoicon i{width:0px;height:0px;border-style:solid;border-width:10px 0 10px 16px;display:block;' +
                  'border-color:transparent transparent transparent #ffffff;margin:20px 0 0 22px}.galleria-image:hover .galleria-videoicon{background:#000}';

        Utils.insertStyleTag( css, 'galleria-videoicon' );

        return $( Utils.create( 'galleria-videoicon' ) ).html( '<i></i>' ).appendTo( container )
            .click( ;
    },

    // the transitions holder
    _transitions = (function() {

        var _slide = function(params, complete, fade, door) {

            var easing = this.getOptions('easing'),
                distance = this.getStageWidth(),
                from = { left: distance * ( params.rewind ? -1 : 1 ) },
                to = { left: 0 };

            if ( fade ) {
                from.opacity = 0;
                to.opacity = 1;
            } else {
                from.opacity = 1;
            }

            $(params.next).css(from);

            Utils.animate(params.next, to, {
                duration: params.speed,
                complete: ( $( params.next ).add( params.prev ) )),
                queue: false,
                easing: easing
            });

            if (door) {
                params.rewind = !params.rewind;
            }

            if (params.prev) {

                from = { left: 0 };
                to = { left: distance * ( params.rewind ? 1 : -1 ) };

                if ( fade ) {
                    from.opacity = 1;
                    to.opacity = 0;
                }

                $(params.prev).css(from);
                Utils.animate(params.prev, to, {
                    duration: params.speed,
                    queue: false,
                    easing: easing,
                    complete: function() {
                        $(this).css('opacity', 0);
                    }
                });
            }
        };

        return {

            active: false,

            init: function( effect, params, complete ) {
                if ( _transitions.effects.hasOwnProperty( effect ) ) {
                    _transitions.effects[ effect ].call( this, params, complete );
                }
            },

            effects: {

                fade: function(params, complete) {
                    $(params.next).css({
                        opacity: 0,
                        left: 0
                    });
                    Utils.animate(params.next, {
                        opacity: 1
                    },{
                        duration: params.speed,
                        complete: complete
                    });
                    if (params.prev) {
                        $(params.prev).css('opacity',1).show();
                        Utils.animate(params.prev, {
                            opacity: 0
                        },{
                            duration: params.speed
                        });
                    }
                },

                flash: function(params, complete) {
                    $(params.next).css({
                        opacity: 0,
                        left: 0
                    });
                    if (params.prev) {
                        Utils.animate( params.prev, {
                            opacity: 0
                        },{
                            duration: params.speed/2,
                            complete:                         });
                    } else {
                        Utils.animate( params.next, {
                            opacity: 1
                        },{
                            duration: params.speed,
                            complete: complete
                        });
                    }
                },

                pulse: function(params, complete) {
                    if (params.prev) {
                        $(params.prev).hide();
                    }
                    $(params.next).css({
                        opacity: 0,
                        left: 0
                    }).show();
                    Utils.animate(params.next, {
                        opacity:1
                    },{
                        duration: params.speed,
                        complete: complete
                    });
                },

                slide: 

                fadeslide: function(params, complete) {
                    _slide.apply( this, Utils.array( arguments ).concat( [true] ) );
                },

                doorslide: function(params, complete) {
                    _slide.apply( this, Utils.array( arguments ).concat( [false, true] ) );
                }
            }
        };
    }());

// listen to fullscreen
_nativeFullscreen.listen();

// create special click:fast event for fast touch interaction
$.event.special['click:fast'] = {
    propagate: true,
    add: function(handleObj) {

        var getCoords = 

        var def = {
            touched: false,
            touchdown: false,
            coords: { x:0, y:0 },
            evObj: {}
        };

        $(this).data({
            clickstate: def,
            timer: 0
        }).on('touchstart.fast', function(e) {
            window.clearTimeout($(this).data('timer'));
            $(this).data('clickstate', {
                touched: true, 
                touchdown: true,
                coords: getCoords(e.originalEvent),
                evObj: e
            });
        }).on('touchmove.fast', function(e) {
            var coords = getCoords(e.originalEvent),
                state = $(this).data('clickstate'),
                distance = Math.max( 
                    Math.abs(state.coords.x - coords.x), 
                    Math.abs(state.coords.y - coords.y) 
                );
            if ( distance > 6 ) {
                $(this).data('clickstate', $.extend(state, {
                    touchdown: false
                }));
            }
        }).on('touchend.fast', function(e) {
            var $this = $(this),
                state = $this.data('clickstate');
            if(state.touchdown) {
              handleObj.handler.call(this, e);
            }
            $this.data('timer', window.setTimeout( 400));
        }).on('click.fast', function(e) {
            var state = $(this).data('clickstate');
            if ( state.touched ) {
                return false;
            }
            $(this).data('clickstate', def);
            handleObj.handler.call(this, e);
        });
    },
    remove: };

// trigger resize on orientationchange (IOS7)
$win.on( 'orientationchange', ;

/**
    The main Galleria class

    @class
    @constructor

    @example var gallery = new Galleria();

    @author http://aino.se

    @requires jQuery

*/

Galleria = function() {

    var self = this;

    // internal options
    this._options = {};

    // flag for controlling play/pause
    this._playing = false;

    // internal interval for slideshow
    this._playtime = 5000;

    // internal variable for the currently active image
    this._active = null;

    // the internal queue, arrayified
    this._queue = { length: 0 };

    // the internal data array
    this._data = [];

    // the internal dom collection
    this._dom = {};

    // the internal thumbnails array
    this._thumbnails = [];

    // the internal layers array
    this._layers = [];

    // internal init flag
    this._initialized = false;

    // internal firstrun flag
    this._firstrun = false;

    // global stagewidth/height
    this._stageWidth = 0;
    this._stageHeight = 0;

    // target holder
    this._target = undef;

    // bind hashes
    this._binds = [];

    // instance id
    this._id = parseInt(M.random()*10000, 10);

    // add some elements
    var divs =  'container stage images image-nav image-nav-left image-nav-right ' +
                'info info-text info-title info-description ' +
                'thumbnails thumbnails-list thumbnails-container thumb-nav-left thumb-nav-right ' +
                'loader counter tooltip',
        spans = 'current total';

    $.each( divs.split(' '), ;

    $.each( spans.split(' '), ;

    // the internal keyboard object
    // keeps reference of the keybinds and provides helper methods for binding keys
    var keyboard = this._keyboard = {

        keys : {
            'UP': 38,
            'DOWN': 40,
            'LEFT': 37,
            'RIGHT': 39,
            'RETURN': 13,
            'ESCAPE': 27,
            'BACKSPACE': 8,
            'SPACE': 32
        },

        map : {},

        bound: false,

        press: function(e) {
            var key = e.keyCode || e.which;
            if ( key in keyboard.map && typeof keyboard.map[key] === 'function' ) {
                keyboard.map[key].call(self, e);
            }
        },

        attach: function(map) {

            var key, up;

            for( key in map ) {
                if ( map.hasOwnProperty( key ) ) {
                    up = key.toUpperCase();
                    if ( up in keyboard.keys ) {
                        keyboard.map[ keyboard.keys[up] ] = map[key];
                    } else {
                        keyboard.map[ up ] = map[key];
                    }
                }
            }
            if ( !keyboard.bound ) {
                keyboard.bound = true;
                $doc.on('keydown', keyboard.press);
            }
        },

        detach: function() {
            keyboard.bound = false;
            keyboard.map = {};
            $doc.off('keydown', keyboard.press);
        }
    };

    // internal controls for keeping track of active / inactive images
    var controls = this._controls = {

        0: undef,

        1: undef,

        active : 0,

        swap : 

        getActive : 

        getNext : 

        slides : [],

        frames: [],

        layers: []
    };

    // internal carousel object
    var carousel = this._carousel = {

        // shortcuts
        next: self.$('thumb-nav-right'),
        prev: self.$('thumb-nav-left'),

        // cache the width
        width: 0,

        // track the current position
        current: 0,

        // cache max value
        max: 0,

        // save all hooks for each width in an array
        hooks: [],

        // update the carousel
        // you can run this method anytime, f.ex on window.resize
        update: function() {
            var w = 0,
                h = 0,
                hooks = [0];

            $.each( self._thumbnails, ;

            self.$( 'thumbnails' ).css({
                width: w,
                height: h
            });

            carousel.max = w;
            carousel.hooks = hooks;
            carousel.width = self.$( 'thumbnails-list' ).width();
            carousel.setClasses();

            self.$( 'thumbnails-container' ).toggleClass( 'galleria-carousel', w > carousel.width );

            // one extra calculation
            carousel.width = self.$( 'thumbnails-list' ).width();

            // todo: fix so the carousel moves to the left
        },

        bindControls: function() {

            var i;

            carousel.next.on( 'click:fast', ;

            carousel.prev.on( 'click:fast', ;
        },

        // calculate and set positions
        set: function( i ) {
            i = M.max( i, 0 );
            while ( carousel.hooks[i - 1] + carousel.width >= carousel.max && i >= 0 ) {
                i--;
            }
            carousel.current = i;
            carousel.animate();
        },

        // get the last position
        getLast: 

        // follow the active image
        follow: function(i) {

            //don't follow if position fits
            if ( i === 0 || i === carousel.hooks.length - 2 ) {
                carousel.set( i );
                return;
            }

            // calculate last position
            var last = carousel.current;
            while( carousel.hooks[last] - carousel.hooks[ carousel.current ] <
                   carousel.width && last <= carousel.hooks.length ) {
                last ++;
            }

            // set position
            if ( i - 1 < carousel.current ) {
                carousel.set( i - 1 );
            } else if ( i + 2 > last) {
                carousel.set( i - last + carousel.current + 2 );
            }
        },

        // helper for setting disabled classes
        setClasses: 

        // the animation method
        animate: function(to) {
            carousel.setClasses();
            var num = carousel.hooks[ carousel.current ] * -1;

            if ( isNaN( num ) ) {
                return;
            }

            // FF 24 bug
            self.$( 'thumbnails' ).css('left', ;

            Utils.animate(self.get( 'thumbnails' ), {
                left: num
            },{
                duration: self._options.carouselSpeed,
                easing: self._options.easing,
                queue: false
            });
        }
    };

    // tooltip control
    // added in 1.2
    var tooltip = this._tooltip = {

        initialized : false,

        open: false,

        timer: 'tooltip' + self._id,

        swapTimer: 'swap' + self._id,

        init: function() {

            tooltip.initialized = true;

            var css = '.galleria-tooltip{padding:3px 8px;max-width:50%;background:#ffe;color:#000;z-index:3;position:absolute;font-size:11px;line-height:1.3;' +
                      'opacity:0;box-shadow:0 0 2px rgba(0,0,0,.4);-moz-box-shadow:0 0 2px rgba(0,0,0,.4);-webkit-box-shadow:0 0 2px rgba(0,0,0,.4);}';

            Utils.insertStyleTag( css, 'galleria-tooltip' );

            self.$( 'tooltip' ).css({
                opacity: 0.8,
                visibility: 'visible',
                display: 'none'
            });

        },

        // move handler
        move: function( e ) {
            var mouseX = self.getMousePosition(e).x,
                mouseY = self.getMousePosition(e).y,
                $elem = self.$( 'tooltip' ),
                x = mouseX,
                y = mouseY,
                height = $elem.outerHeight( true ) + 1,
                width = $elem.outerWidth( true ),
                limitY = height + 15;

            var maxX = self.$( 'container' ).width() - width - 2,
                maxY = self.$( 'container' ).height() - height - 2;

            if ( !isNaN(x) && !isNaN(y) ) {

                x += 10;
                y -= ( height+8 );

                x = M.max( 0, M.min( maxX, x ) );
                y = M.max( 0, M.min( maxY, y ) );

                if( mouseY < limitY ) {
                    y = limitY;
                }

                $elem.css({ left: x, top: y });
            }
        },

        // bind elements to the tooltip
        // you can bind multiple elementIDs using { elemID : function } or { elemID : string }
        // you can also bind single DOM elements using bind(elem, string)
        bind: function( elem, value ) {

            // todo: revise if alternative tooltip is needed for mobile devices
            if (Galleria.TOUCH) {
                return;
            }

            if (! tooltip.initialized ) {
                tooltip.init();
            }

            var mouseout = function() {
                self.$( 'container' ).off( 'mousemove', tooltip.move );
                self.clearTimer( tooltip.timer );

                self.$( 'tooltip' ).stop().animate({
                    opacity: 0
                }, 200, ;
            };

            var hover = function( elem, value) {

                tooltip.define( elem, value );

                $( elem ).hover( mouseout).click(mouseout);
            };

            if ( typeof value === 'string' ) {
                hover( ( elem in self._dom ? self.get( elem ) : elem ), value );
            } else {
                // asume elemID here
                $.each( elem, ;
            }
        },

        show: function( elem ) {

            elem = $( elem in self._dom ? self.get(elem) : elem );

            var text = elem.data( 'tt' ),
                mouseup = 

            text = typeof text === 'function' ? text() : text;

            if ( ! text ) {
                return;
            }

            self.$( 'tooltip' ).html( text.replace(/\s/, '&#160;') );

            // trigger mousemove on mouseup in case of click
            elem.on( 'mouseup', mouseup );
        },

        define: function( elem, value ) {

            // we store functions, not strings
            if (typeof value !== 'function') {
                var s = value;
                value = function() {
                    return s;
                };
            }

            elem = $( elem in self._dom ? self.get(elem) : elem ).data('tt', value);

            tooltip.show( elem );

        }
    };

    // internal fullscreen control
    var fullscreen = this._fullscreen = {

        scrolled: 0,

        crop: undef,

        active: false,

        prev: $(),

        beforeEnter: function(fn){ fn(); },
        beforeExit:  

        keymap: self._keyboard.map,

        parseCallback: function( callback, enter ) {

            return _transitions.active ? : callback;

        },

        enter: function( callback ) {

            fullscreen.beforeEnter(;

        },

        _enter: function( callback ) {

            fullscreen.active = true;

            if ( IFRAME ) {

                fullscreen.iframe = ());

            }

            // hide the image until rescale is complete
            Utils.hide( self.getActiveImage() );

            if ( IFRAME && fullscreen.iframe ) {
                fullscreen.iframe.scrolled = $( window.parent ).scrollTop();
                window.parent.scrollTo(0, 0);
            }

            var data = self.getData(),
                options = self._options,
                inBrowser = !self._options.trueFullscreen || !_nativeFullscreen.support,
                htmlbody = {
                    height: '100%',
                    overflow: 'hidden',
                    margin:0,
                    padding:0
                };

            if (inBrowser) {

                self.$('container').addClass('fullscreen');
                fullscreen.prev = self.$('container').prev();

                if ( !fullscreen.prev.length ) {
                    fullscreen.parent = self.$( 'container' ).parent();
                }

                // move
                self.$( 'container' ).appendTo( 'body' );

                // begin styleforce

                Utils.forceStyles(self.get('container'), {
                    position: Galleria.TOUCH ? 'absolute' : 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 10000
                });
                Utils.forceStyles( DOM().html, htmlbody );
                Utils.forceStyles( DOM().body, htmlbody );
            }

            if ( IFRAME && fullscreen.iframe ) {
                Utils.forceStyles( fullscreen.pd.documentElement, htmlbody );
                Utils.forceStyles( fullscreen.pd.body, htmlbody );
                Utils.forceStyles( fullscreen.iframe, $.extend( htmlbody, {
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    position: 'fixed',
                    zIndex: 10000,
                    border: 'none'
                }));
            }

            // temporarily attach some keys
            // save the old ones first in a cloned object
            fullscreen.keymap = $.extend({}, self._keyboard.map);

            self.attachKeyboard({
                escape: self.exitFullscreen,
                right: self.next,
                left: self.prev
            });

            // temporarily save the crop
            fullscreen.crop = options.imageCrop;

            // set fullscreen options
            if ( options.fullscreenCrop != undef ) {
                options.imageCrop = options.fullscreenCrop;
            }

            // swap to big image if it's different from the display image
            if ( data && data.big && data.image !== data.big ) {
                var big    = new Galleria.Picture(),
                    cached = big.isCached( data.big ),
                    index  = self.getIndex(),
                    thumb  = self._thumbnails[ index ];

                self.trigger( {
                    type: Galleria.LOADSTART,
                    cached: cached,
                    rewind: false,
                    index: index,
                    imageTarget: self.getActiveImage(),
                    thumbTarget: thumb,
                    galleriaData: data
                });

                big.load( data.big, function( big ) {
                    self._scaleImage( big, {
                        complete: function( big ) {
                            self.trigger({
                                type: Galleria.LOADFINISH,
                                cached: cached,
                                index: index,
                                rewind: false,
                                imageTarget: big.image,
                                thumbTarget: thumb
                            });
                            var image = self._controls.getActive().image;
                            if ( image ) {
                                $( image ).width( big.image.width ).height( big.image.height )
                                    .attr( 'style', $( big.image ).attr('style') )
                                    .attr( 'src', big.image.src );
                            }
                        }
                    });
                });

                var n = self.getNext(index),
                    p = new Galleria.Picture(),
                    ndata = self.getData( n );
                p.preload( self.isFullscreen() && ndata.big ? ndata.big : ndata.image );
            }

            // init the first rescale and attach callbacks

            self.rescale(;

            if ( !inBrowser ) {
                Utils.show( self.getActiveImage() );
            } else {
                $win.resize( fullscreen.scale );
            }

        },

        scale : function() {
            self.rescale();
        },

        exit: function( callback ) {

            fullscreen.beforeExit(;
        },

        _exit: function( callback ) {

            fullscreen.active = false;

            var inBrowser = !self._options.trueFullscreen || !_nativeFullscreen.support,
                $container = self.$( 'container' ).removeClass( 'fullscreen' );

            // move back
            if ( fullscreen.parent ) {
                fullscreen.parent.prepend( $container );
            } else {
                $container.insertAfter( fullscreen.prev );
            }

            if ( inBrowser ) {
                Utils.hide( self.getActiveImage() );

                // revert all styles
                Utils.revertStyles( self.get('container'), DOM().html, DOM().body );

                // scroll back
                if( !Galleria.TOUCH ) {
                    window.scrollTo(0, fullscreen.scrolled);
                }

                // reload iframe src manually
                var frame = self._controls.frames[ self._controls.active ];
                if ( frame && frame.image ) {
                    frame.image.src = frame.image.src;
                }
            }

            if ( IFRAME && fullscreen.iframe ) {
                Utils.revertStyles( fullscreen.pd.documentElement, fullscreen.pd.body, fullscreen.iframe );
                if ( fullscreen.iframe.scrolled ) {
                    window.parent.scrollTo(0, fullscreen.iframe.scrolled );
                }
            }

            // detach all keyboard events and apply the old keymap
            self.detachKeyboard();
            self.attachKeyboard( fullscreen.keymap );

            // bring back cached options
            self._options.imageCrop = fullscreen.crop;

            // return to original image
            var big = self.getData().big,
                image = self._controls.getActive().image;

            if ( !self.getData().iframe && image && big && big == image.src ) {

                window.setTimeout( self.getData().image ), 1 );

            }

            self.rescale(;

            $win.off('resize', fullscreen.scale);
        }
    };

    // the internal idle object for controlling idle states
    var idle = this._idle = {

        trunk: [],

        bound: false,

        active: false,

        add: function(elem, to, from, hide) {
            if ( !elem || Galleria.TOUCH ) {
                return;
            }
            if (!idle.bound) {
                idle.addEvent();
            }
            elem = $(elem);

            if ( typeof from == 'boolean' ) {
                hide = from;
                from = {};
            }

            from = from || {};

            var extract = {},
                style;

            for ( style in to ) {
                if ( to.hasOwnProperty( style ) ) {
                    extract[ style ] = elem.css( style );
                }
            }

            elem.data('idle', {
                from: $.extend( extract, from ),
                to: to,
                complete: true,
                busy: false
            });

            if ( !hide ) {
                idle.addTimer();
            } else {
                elem.css( to );
            }
            idle.trunk.push(elem);
        },

        remove: function(elem) {

            elem = $(elem);

            $.each(idle.trunk, ;

            if (!idle.trunk.length) {
                idle.removeEvent();
                self.clearTimer( idle.timer );
            }
        },

        addEvent : function() {
            idle.bound = true;
            self.$('container').on( 'mousemove click', idle.showAll );
            if ( self._options.idleMode == 'hover' ) {
                self.$('container').on( 'mouseleave', idle.hide );
            }
        },

        removeEvent : function() {
            idle.bound = false;
            self.$('container').on( 'mousemove click', idle.showAll );
            if ( self._options.idleMode == 'hover' ) {
                self.$('container').off( 'mouseleave', idle.hide );
            }
        },

        addTimer : function() {
            if( self._options.idleMode == 'hover' ) {
                return;
            }
            self.addTimer( 'idle', function() {
                idle.hide();
            }, self._options.idleTime );
        },

        hide : function() {

            if ( !self._options.idleMode || self.getIndex() === false ) {
                return;
            }

            self.trigger( Galleria.IDLE_ENTER );

            var len = idle.trunk.length;

            $.each( idle.trunk, function(i, elem) {

                var data = elem.data('idle');

                if (! data) {
                    return;
                }

                elem.data('idle').complete = false;

                Utils.animate( elem, data.to, {
                    duration: self._options.idleSpeed,
                    complete: function() {
                        if ( i == len-1 ) {
                            idle.active = false;
                        }
                    }
                });
            });
        },

        showAll : 

        show: function(elem) {

            var data = elem.data('idle');

            if ( !idle.active || ( !data.busy && !data.complete ) ) {

                data.busy = true;

                self.trigger( Galleria.IDLE_EXIT );

                self.clearTimer( 'idle' );

                Utils.animate( elem, data.from, {
                    duration: self._options.idleSpeed/2,
                    complete: function() {
                        idle.active = true;
                        $(elem).data('idle').busy = false;
                        $(elem).data('idle').complete = true;
                    }
                });

            }
            idle.addTimer();
        }
    };

    // internal lightbox object
    // creates a predesigned lightbox for simple popups of images in galleria
    var lightbox = this._lightbox = {

        width : 0,

        height : 0,

        initialized : false,

        active : null,

        image : null,

        elems : {},

        keymap: false,

        init : function() {

            if ( lightbox.initialized ) {
                return;
            }
            lightbox.initialized = true;

            // create some elements to work with
            var elems = 'overlay box content shadow title info close prevholder prev nextholder next counter image',
                el = {},
                op = self._options,
                css = '',
                abs = 'position:absolute;',
                prefix = 'lightbox-',
                cssMap = {
                    overlay:    'position:fixed;display:none;opacity:'+op.overlayOpacity+';filter:alpha(opacity='+(op.overlayOpacity*100)+
                                ');top:0;left:0;width:100%;height:100%;background:'+op.overlayBackground+';z-index:99990',
                    box:        'position:fixed;display:none;width:400px;height:400px;top:50%;left:50%;margin-top:-200px;margin-left:-200px;z-index:99991',
                    shadow:     abs+'background:#000;width:100%;height:100%;',
                    content:    abs+'background-color:#fff;top:10px;left:10px;right:10px;bottom:10px;overflow:hidden',
                    info:       abs+'bottom:10px;left:10px;right:10px;color:#444;font:11px/13px arial,sans-serif;height:13px',
                    close:      abs+'top:10px;right:10px;height:20px;width:20px;background:#fff;text-align:center;cursor:pointer;color:#444;font:16px/22px arial,sans-serif;z-index:99999',
                    image:      abs+'top:10px;left:10px;right:10px;bottom:30px;overflow:hidden;display:block;',
                    prevholder: abs+'width:50%;top:0;bottom:40px;cursor:pointer;',
                    nextholder: abs+'width:50%;top:0;bottom:40px;right:-1px;cursor:pointer;',
                    prev:       abs+'top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;left:20px;display:none;text-align:center;color:#000;font:bold 16px/36px arial,sans-serif',
                    next:       abs+'top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;right:20px;left:auto;display:none;font:bold 16px/36px arial,sans-serif;text-align:center;color:#000',
                    title:      'float:left',
                    counter:    'float:right;margin-left:8px;'
                },
                hover = 
                appends = {};

            // fix for navigation hovers transparent background event "feature"
            var exs = '';
            if ( IE > 7 ) {
                exs = IE < 9 ? 'background:#000;filter:alpha(opacity=0);' : 'background:rgba(0,0,0,0);';
            } else {
                exs = 'z-index:99999';
            }

            cssMap.nextholder += exs;
            cssMap.prevholder += exs;

            // create and insert CSS
            $.each(cssMap, ;

            css += '.galleria-'+prefix+'box.iframe .galleria-'+prefix+'prevholder,'+
                   '.galleria-'+prefix+'box.iframe .galleria-'+prefix+'nextholder{'+
                   'width:100px;height:100px;top:50%;margin-top:-70px}';

            Utils.insertStyleTag( css, 'galleria-lightbox' );

            // create the elements
            $.each(elems.split(' '), ;

            // initiate the image
            lightbox.image = new Galleria.Picture();

            // append the elements
            $.each({
                    box: 'shadow content close prevholder nextholder',
                    info: 'title counter',
                    content: 'info image',
                    prevholder: 'prev',
                    nextholder: 'next'
                }, ;

            self.append( appends );

            $( el.image ).append( lightbox.image.container );

            $( DOM().body ).append( el.overlay, el.box );

            // add the prev/next nav and bind some controls

            hover( $( el.close ).on( 'click:fast', lightbox.hide ).html('&#215;') );

            $.each( ['Prev','Next'], ;
            $( el.overlay ).on( 'click:fast', lightbox.hide );

            // the lightbox animation is slow on ipad
            if ( Galleria.IPAD ) {
                self._options.lightboxTransitionSpeed = 0;
            }

        },

        rescale: function(event) {

            // calculate
             var width = M.min( $win.width()-40, lightbox.width ),
                height = M.min( $win.height()-60, lightbox.height ),
                ratio = M.min( width / lightbox.width, height / lightbox.height ),
                destWidth = M.round( lightbox.width * ratio ) + 40,
                destHeight = M.round( lightbox.height * ratio ) + 60,
                to = {
                    width: destWidth,
                    height: destHeight,
                    'margin-top': M.ceil( destHeight / 2 ) *- 1,
                    'margin-left': M.ceil( destWidth / 2 ) *- 1
                };

            // if rescale event, don't animate
            if ( event ) {
                $( lightbox.elems.box ).css( to );
            } else {
                $( lightbox.elems.box ).animate( to, {
                    duration: self._options.lightboxTransitionSpeed,
                    easing: self._options.easing,
                    complete:                 });
            }
        },

        hide: function() {

            // remove the image
            lightbox.image.image = null;

            $win.off('resize', lightbox.rescale);

            $( lightbox.elems.box ).hide().find( 'iframe' ).remove();

            Utils.hide( lightbox.elems.info );

            self.detachKeyboard();
            self.attachKeyboard( lightbox.keymap );

            lightbox.keymap = false;

            Utils.hide( lightbox.elems.overlay, 200, ;
        },

        showNext: function() {
            lightbox.show( self.getNext( lightbox.active ) );
        },

        showPrev: 

        show: function(index) {

            lightbox.active = index = typeof index === 'number' ? index : self.getIndex() || 0;

            if ( !lightbox.initialized ) {
                lightbox.init();
            }

            // trigger the event
            self.trigger( Galleria.LIGHTBOX_OPEN );

            // temporarily attach some keys
            // save the old ones first in a cloned object
            if ( !lightbox.keymap ) {

                lightbox.keymap = $.extend({}, self._keyboard.map);

                self.attachKeyboard({
                    escape: lightbox.hide,
                    right: lightbox.showNext,
                    left: lightbox.showPrev
                });
            }

            $win.off('resize', lightbox.rescale );

            var data = self.getData(index),
                total = self.getDataLength(),
                n = self.getNext( index ),
                ndata, p, i;

            Utils.hide( lightbox.elems.info );

            try {
                for ( i = self._options.preload; i > 0; i-- ) {
                    p = new Galleria.Picture();
                    ndata = self.getData( n );
                    p.preload( ndata.big ? ndata.big : ndata.image );
                    n = self.getNext( n );
                }
            } catch(e) {}

            lightbox.image.isIframe = ( data.iframe && !data.image );

            $( lightbox.elems.box ).toggleClass( 'iframe', lightbox.image.isIframe );

            $( lightbox.image.container ).find( '.galleria-videoicon' ).remove();

            lightbox.image.load( data.big || data.image || data.iframe, ;

            $( lightbox.elems.overlay ).show().css( 'visibility', 'visible' );
            $( lightbox.elems.box ).show();
        }
    };

    // the internal timeouts object
    // provides helper methods for controlling timeouts

    var _timer = this._timer = {

        trunk: {},

        add: function( id, fn, delay, loop ) {
            id = id || new Date().getTime();
            loop = loop || false;
            this.clear( id );
            if ( loop ) {
                var old = fn;
                fn = 
            }
            this.trunk[ id ] = window.setTimeout( fn, delay );
        },

        clear: function( id ) {

            var del =  i;

            if ( !!id && id in this.trunk ) {
                del.call( this, id );

            } else if ( typeof id === 'undefined' ) {
                for ( i in this.trunk ) {
                    if ( this.trunk.hasOwnProperty( i ) ) {
                        del.call( this, i );
                    }
                }
            }
        }
    };

    return this;
};

// end Galleria constructor

Galleria.prototype = {

    // bring back the constructor reference

    constructor: Galleria,

    /**
        Use this function to initialize the gallery and start loading.
        Should only be called once per instance.

        @param {HTMLElement} target The target element
        @param {Object} options The gallery options

        @returns Instance
    */

    init: function( target, options ) {

        options = _legacyOptions( options );

        // save the original ingredients
        this._original = {
            target: target,
            options: options,
            data: null
        };

        // save the target here
        this._target = this._dom.target = target.nodeName ? target : $( target ).get(0);

        // save the original content for destruction
        this._original.html = this._target.innerHTML;

        // push the instance
        _instances.push( this );

        // raise error if no target is detected
        if ( !this._target ) {
             Galleria.raise('Target not found', true);
             return;
        }

        // apply options
        this._options = {
            autoplay: false,
            carousel: true,
            carouselFollow: true, // legacy, deprecate at 1.3
            carouselSpeed: 400,
            carouselSteps: 'auto',
            clicknext: false,
            dailymotion: {
                foreground: '%23EEEEEE',
                highlight: '%235BCEC5',
                background: '%23222222',
                logo: 0,
                hideInfos: 1
            },
            dataConfig : 
            dataSelector: 'img',
            dataSort: false,
            dataSource: this._target,
            debug: undef,
            dummy: undef, // 1.2.5
            easing: 'galleria',
            extend: 
            fullscreenCrop: undef, // 1.2.5
            fullscreenDoubleTap: true, // 1.2.4 toggles fullscreen on double-tap for touch devices
            fullscreenTransition: undef, // 1.2.6
            height: 0,
            idleMode: true, // 1.2.4 toggles idleMode
            idleTime: 3000,
            idleSpeed: 200,
            imageCrop: false,
            imageMargin: 0,
            imagePan: false,
            imagePanSmoothness: 12,
            imagePosition: '50%',
            imageTimeout: undef, // 1.2.5
            initialTransition: undef, // 1.2.4, replaces transitionInitial
            keepSource: false,
            layerFollow: true, // 1.2.5
            lightbox: false, // 1.2.3
            lightboxFadeSpeed: 200,
            lightboxTransitionSpeed: 200,
            linkSourceImages: true,
            maxScaleRatio: undef,
            maxVideoSize: undef, // 1.2.9
            minScaleRatio: undef, // deprecated in 1.2.9
            overlayOpacity: 0.85,
            overlayBackground: '#0b0b0b',
            pauseOnInteraction: true,
            popupLinks: false,
            preload: 2,
            queue: true,
            responsive: true,
            show: 0,
            showInfo: true,
            showCounter: true,
            showImagenav: true,
            swipe: 'auto', // 1.2.4 -> revised in 1.3 -> changed type in 1.3.5
            theme: null,
            thumbCrop: true,
            thumbEventType: 'click:fast',
            thumbMargin: 0,
            thumbQuality: 'auto',
            thumbDisplayOrder: true, // 1.2.8
            thumbPosition: '50%', // 1.3
            thumbnails: true,
            touchTransition: undef, // 1.2.6
            transition: 'fade',
            transitionInitial: undef, // legacy, deprecate in 1.3. Use initialTransition instead.
            transitionSpeed: 400,
            trueFullscreen: true, // 1.2.7
            useCanvas: false, // 1.2.4
            variation: '', // 1.3.2
            videoPoster: true, // 1.3
            vimeo: {
                title: 0,
                byline: 0,
                portrait: 0,
                color: 'aaaaaa'
            },
            wait: 5000, // 1.2.7
            width: 'auto',
            youtube: {
                modestbranding: 1,
                autohide: 1,
                color: 'white',
                hd: 1,
                rel: 0,
                showinfo: 0
            }
        };

        // legacy support for transitionInitial
        this._options.initialTransition = this._options.initialTransition || this._options.transitionInitial;

        if ( options ) {

            // turn off debug
            if ( options.debug === false ) {
                DEBUG = false;
            }

            // set timeout
            if ( typeof options.imageTimeout === 'number' ) {
                TIMEOUT = options.imageTimeout;
            }

            // set dummy
            if ( typeof options.dummy === 'string' ) {
                DUMMY = options.dummy;
            }

            // set theme
            if ( typeof options.theme == 'string' ) {
                this._options.theme = options.theme;
            }
        }

        // hide all content
        $( this._target ).children().hide();

        // Warn for quirks mode
        if ( Galleria.QUIRK ) {
            Galleria.raise('Your page is in Quirks mode, Galleria may not render correctly. Please validate your HTML and add a correct doctype.');
        }

        // now we just have to wait for the theme...
        // first check if it has already loaded
        if ( _loadedThemes.length ) {
            if ( this._options.theme ) {
                for ( var i=0; i<_loadedThemes.length; i++ ) {
                    if( this._options.theme === _loadedThemes[i].name ) {
                        this.theme = _loadedThemes[i];
                        break;
                    }
                }
            } else {
                // if no theme sepcified, apply the first loaded theme
                this.theme = _loadedThemes[0];
            }
        }

        if ( typeof this.theme == 'object' ) {
            this._init();
        } else {
            // if no theme is loaded yet, push the instance into a pool and run it when the theme is ready
            _pool.push( this );
        }

        return this;
    },

    // this method should only be called once per instance
    // for manipulation of data, use the .load method

    _init: function() {

        var self = this,
            options = this._options;

        if ( this._initialized ) {
            Galleria.raise( 'Init failed: Gallery instance already initialized.' );
            return this;
        }

        this._initialized = true;

        if ( !this.theme ) {
            Galleria.raise( 'Init failed: No theme found.', true );
            return this;
        }

        // merge the theme & caller options
        $.extend( true, options, this.theme.defaults, this._original.options, Galleria.configure.options );

        // internally we use boolean for swipe
        options.swipe = (function(s) {

            if ( s == 'enforced' ) { return true; }

            // legacy patch
            if( s === false || s == 'disabled' ) { return false; }
            
            return !!Galleria.TOUCH;

        }( options.swipe ));

        // disable options that arent compatible with swipe
        if ( options.swipe ) {
            options.clicknext = false;
            options.imagePan = false;
        }

        // check for canvas support
        ( doc.createElement( 'canvas' ) ) );

        // bind the gallery to run when data is ready
        this.bind( Galleria.DATA, function() {

            // remove big if total pixels are less than 1024 (most phones)
            if ( window.screen && window.screen.width && Array.prototype.forEach ) {

                this._data.forEach(;
            }

            // save the new data
            this._original.data = this._data;

            // lets show the counter here
            this.get('total').innerHTML = this.getDataLength();

            // cache the container
            var $container = this.$( 'container' );

            // set ratio if height is < 2
            if ( self._options.height < 2 ) {
                self._userRatio = self._ratio = self._options.height;
            }

            // the gallery is ready, let's just wait for the css
            var num = { width: 0, height: 0 };
            var testHeight = 

            // check container and thumbnail height
            Utils.wait({
                until: function() {

                    // keep trying to get the value
                    num = self._getWH();
                    $container.width( num.width ).height( num.height );
                    return testHeight() && num.width && num.height > 50;

                },
                success: function() {

                    self._width = num.width;
                    self._height = num.height;
                    self._ratio = self._ratio || num.height/num.width;

                    // for some strange reason, webkit needs a single setTimeout to play ball
                    if ( Galleria.WEBKIT ) {
                        window.setTimeout( function() {
                            self._run();
                        }, 1);
                    } else {
                        self._run();
                    }
                },
                error: function() {

                    // Height was probably not set, raise hard errors

                    if ( testHeight() ) {
                        Galleria.raise('Could not extract sufficient width/height of the gallery container. Traced measures: width:' + num.width + 'px, height: ' + num.height + 'px.', true);
                    } else {
                        Galleria.raise('Could not extract a stage height from the CSS. Traced height: ' + testHeight() + 'px.', true);
                    }
                },
                timeout: typeof this._options.wait == 'number' ? this._options.wait : false
            });
        });

        // build the gallery frame
        this.append({
            'info-text' :
                ['info-title', 'info-description'],
            'info' :
                ['info-text'],
            'image-nav' :
                ['image-nav-right', 'image-nav-left'],
            'stage' :
                ['images', 'loader', 'counter', 'image-nav'],
            'thumbnails-list' :
                ['thumbnails'],
            'thumbnails-container' :
                ['thumb-nav-left', 'thumbnails-list', 'thumb-nav-right'],
            'container' :
                ['stage', 'thumbnails-container', 'info', 'tooltip']
        });

        Utils.hide( this.$( 'counter' ).append(
            this.get( 'current' ),
            doc.createTextNode(' / '),
            this.get( 'total' )
        ) );

        this.setCounter('&#8211;');

        Utils.hide( self.get('tooltip') );

        // add a notouch class on the container to prevent unwanted :hovers on touch devices
        this.$( 'container' ).addClass([
            ( Galleria.TOUCH ? 'touch' : 'notouch' ),
            this._options.variation,
            'galleria-theme-'+this.theme.name
        ].join(' '));

        // add images to the controls
        if ( !this._options.swipe ) {
            $.each( new Array(2), ;
        }

        // some forced generic styling
        this.$( 'images' ).css({
            position: 'relative',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
        });

        if ( options.swipe ) {
            this.$( 'images' ).css({
                position: 'absolute',
                top: 0,
                left: 0,
                width: 0,
                height: '100%'
            });
            this.finger = new Galleria.Finger(this.get('stage'), {
                onchange: 
                oncomplete: function(page) {

                    var index = M.max( 0, M.min( parseInt( page, 10 ), self.getDataLength() - 1 ) ),
                        data = self.getData(index);

                    $( self._thumbnails[ index ].container )
                        .addClass( 'active' )
                        .siblings( '.active' )
                        .removeClass( 'active' );

                    if ( !data ) {
                       return;
                    }

                    // remove video iframes
                    self.$( 'images' ).find( '.galleria-frame' ).css('opacity', 0).hide().find( 'iframe' ).remove();

                    if ( self._options.carousel && self._options.carouselFollow ) {
                        self._carousel.follow( index );
                    }
                }
            });
            this.bind( Galleria.RESCALE, ;
            this.$('stage').on('click', ;
            this.bind( Galleria.IMAGE, function(e) {

                self.setCounter( e.index );
                self.setInfo( e.index );

                var next = this.getNext(),
                    prev = this.getPrev();

                var preloads = [prev,next];
                preloads.push(this.getNext(next), this.getPrev(prev), self._controls.slides.length-1);

                var filtered = [];

                $.each(preloads, ;

                $.each(filtered, function(i, loadme) {
                    var d = self.getData(loadme),
                        img = self._controls.slides[loadme],
                        src = self.isFullscreen() && d.big ? d.big : ( d.image || d.iframe );

                    if ( d.iframe && !d.image ) {
                        img.isIframe = true;
                    }

                    if ( !img.ready ) {
                        self._controls.slides[loadme].load(src, function(img) {
                            if ( !img.isIframe ) {
                                $(img.image).css('visibility', 'hidden');
                            }
                            self._scaleImage(img, {
                                complete: function(img) {
                                    if ( !img.isIframe ) {
                                        $(img.image).css({
                                            opacity: 0,
                                            visibility: 'visible'
                                        }).animate({
                                            opacity: 1
                                        }, 200);
                                    }
                                }
                            });
                        });
                    }
                });
            });
        }

        this.$( 'thumbnails, thumbnails-list' ).css({
            overflow: 'hidden',
            position: 'relative'
        });

        // bind image navigation arrows
        this.$( 'image-nav-right, image-nav-left' ).on( 'click:fast', .on('click', ;

        // hide controls if chosen to
        $.each( ['info','counter','image-nav'], ;

        // load up target content
        this.load();

        // now it's usually safe to remove the content
        // IE will never stop loading if we remove it, so let's keep it hidden for IE (it's usually fast enough anyway)
        if ( !options.keepSource && !IE ) {
            this._target.innerHTML = '';
        }

        // re-append the errors, if they happened before clearing
        if ( this.get( 'errors' ) ) {
            this.appendChild( 'target', 'errors' );
        }

        // append the gallery frame
        this.appendChild( 'target', 'container' );

        // parse the carousel on each thumb load
        if ( options.carousel ) {
            var count = 0,
                show = options.show;
            this.bind( Galleria.THUMBNAIL, ;
        }

        // bind window resize for responsiveness
        if ( options.responsive ) {
            $win.on( 'resize', ;
        }

        // double-tap/click fullscreen toggle

        if ( options.fullscreenDoubleTap ) {

            this.$( 'stage' ).on( 'touchstart', (function() {
                var last, cx, cy, lx, ly, now,
                    getData = 
                self.$( 'stage' ).on('touchmove', ;
                return 
            }()));
        }

        // bind the ons
        $.each( Galleria.on.binds, ;

        return this;
    },

    addTimer : function() {
        this._timer.add.apply( this._timer, Utils.array( arguments ) );
        return this;
    },

    clearTimer : function() {
        this._timer.clear.apply( this._timer, Utils.array( arguments ) );
        return this;
    },

    // parse width & height from CSS or options

    _getWH : function() {

        var $container = this.$( 'container' ),
            $target = this.$( 'target' ),
            self = this,
            num = {},
            arr;

        $.each(['width', 'height'], ;

        // allow setting a height ratio instead of exact value
        // useful when doing responsive galleries

        if ( self._userRatio ) {
            num.height = num.width * self._userRatio;
        }

        return num;
    },

    // Creates the thumbnails and carousel
    // can be used at any time, f.ex when the data object is manipulated
    // push is an optional argument with pushed images

    _createThumbnails : function( push ) {

        this.get( 'total' ).innerHTML = this.getDataLength();

        var src,
            thumb,
            data,

            $container,

            self = this,
            o = this._options,

            i = push ? this._data.length - push.length : 0,
            chunk = i,

            thumbchunk = [],
            loadindex = 0,

            gif = IE < 8 ? 'http://upload.wikimedia.org/wikipedia/commons/c/c0/Blank.gif' :
                           'data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D',

            // get previously active thumbnail, if exists
            active = ()),

            // cache the thumbnail option
            optval = typeof o.thumbnails === 'string' ? o.thumbnails.toLowerCase() : null,

            // move some data into the instance
            // for some reason, jQuery cant handle css(property) when zooming in FF, breaking the gallery
            // so we resort to getComputedStyle for browsers who support it
            getStyle = 

            fake = 

            onThumbEvent = function( e ) {

                // pause if option is set
                if ( o.pauseOnInteraction ) {
                    self.pause();
                }

                // extract the index from the data
                var index = $( e.currentTarget ).data( 'index' );
                if ( self.getIndex() !== index ) {
                    self.show( index );
                }

                e.preventDefault();
            },

            thumbComplete = function( thumb, callback ) {

                $( thumb.container ).css( 'visibility', 'visible' );
                self.trigger({
                    type: Galleria.THUMBNAIL,
                    thumbTarget: thumb.image,
                    index: thumb.data.order,
                    galleriaData: self.getData( thumb.data.order )
                });

                if ( typeof callback == 'function' ) {
                    callback.call( self, thumb );
                }
            },

            onThumbLoad = function( thumb, callback ) {

                // scale when ready
                thumb.scale({
                    width:    thumb.data.width,
                    height:   thumb.data.height,
                    crop:     o.thumbCrop,
                    margin:   o.thumbMargin,
                    canvas:   o.useCanvas,
                    position: o.thumbPosition,
                    complete: function( thumb ) {

                        // shrink thumbnails to fit
                        var top = ['left', 'top'],
                            arr = ['Width', 'Height'],
                            m,
                            css,
                            data = self.getData( thumb.index );

                        // calculate shrinked positions
                        $.each(arr, ;

                        // set high quality if downscale is moderate
                        Utils.toggleQuality( thumb.image,
                            o.thumbQuality === true ||
                            ( o.thumbQuality === 'auto' && thumb.original.width < thumb.width * 3 )
                        );

                        if ( o.thumbDisplayOrder && !thumb.lazy ) {

                            $.each( thumbchunk, ;
                        } else {
                            thumbComplete( thumb, callback );
                        }
                    }
                });
            };

        if ( !push ) {
            this._thumbnails = [];
            this.$( 'thumbnails' ).empty();
        }

        // loop through data and create thumbnails
        for( ; this._data[ i ]; i++ ) {

            data = this._data[ i ];

            // get source from thumb or image
            src = data.thumb || data.image;

            if ( ( o.thumbnails === true || optval == 'lazy' ) && ( data.thumb || data.image ) ) {

                // add a new Picture instance
                thumb = new Galleria.Picture(i);

                // save the index
                thumb.index = i;

                // flag displayed
                thumb.displayed = false;

                // flag lazy
                thumb.lazy = false;

                // flag video
                thumb.video = false;

                // append the thumbnail
                this.$( 'thumbnails' ).append( thumb.container );

                // cache the container
                $container = $( thumb.container );

                // hide it
                $container.css( 'visibility', 'hidden' );

                thumb.data = {
                    width  : Utils.parseValue( getStyle( 'width' ) ),
                    height : Utils.parseValue( getStyle( 'height' ) ),
                    order  : i,
                    src    : src
                };

                // grab & reset size for smoother thumbnail loads
                if ( o.thumbCrop !== true ) {
                    $container.css( { width: 'auto', height: 'auto' } );
                } else {
                    $container.css( { width: thumb.data.width, height: thumb.data.height } );
                }

                // load the thumbnail
                if ( optval == 'lazy' ) {

                    $container.addClass( 'lazy' );

                    thumb.lazy = true;

                    thumb.load( gif, {
                        height: thumb.data.height,
                        width: thumb.data.width
                    });

                } else {
                    thumb.load( src, onThumbLoad );
                }

                // preload all images here
                if ( o.preload === 'all' ) {
                    thumb.preload( data.image );
                }

            // create empty spans if thumbnails is set to 'empty'
            } else if ( ( data.iframe && optval !== null ) || optval === 'empty' || optval === 'numbers' ) {
                thumb = {
                    container: Utils.create( 'galleria-image' ),
                    image: Utils.create( 'img', 'span' ),
                    ready: true,
                    data: {
                        order: i
                    }
                };

                // create numbered thumbnails
                if ( optval === 'numbers' ) {
                    $( thumb.image ).text( i + 1 );
                }

                if ( data.iframe ) {
                    $( thumb.image ).addClass( 'iframe' );
                }

                this.$( 'thumbnails' ).append( thumb.container );

                // we need to "fake" a loading delay before we append and trigger
                // 50+ should be enough

                window.setTimeout( ( fake )( thumb.image, i, thumb.container ), 50 + ( i*20 ) );

            // create null object to silent errors
            } else {
                thumb = {
                    container: null,
                    image: null
                };
            }

            // add events for thumbnails
            // you can control the event type using thumb_event_type
            // we'll add the same event to the source if it's kept

            $( thumb.container ).add( o.keepSource && o.linkSourceImages ? data.original : null )
                .data('index', i).on( o.thumbEventType, onThumbEvent )
                .data('thumbload', onThumbLoad);

            if (active === src) {
                $( thumb.container ).addClass( 'active' );
            }

            this._thumbnails.push( thumb );
        }

        thumbchunk = this._thumbnails.slice( chunk );

        return this;
    },

    /**
        Lazy-loads thumbnails.
        You can call this method to load lazy thumbnails at run time

        @param {Array|Number} index Index or array of indexes of thumbnails to be loaded
        @param {Function} complete Callback that is called when all lazy thumbnails have been loaded

        @returns Instance
    */

    lazyLoad: function( index, complete ) {

        var arr = index.constructor == Array ? index : [ index ],
            self = this,
            loaded = 0;

        $.each( arr, function(i, ind) {

            if ( ind > self._thumbnails.length - 1 ) {
                return;
            }

            var thumb = self._thumbnails[ ind ],
                data = thumb.data,
                callback = function() {
                    if ( ++loaded == arr.length && typeof complete == 'function' ) {
                        complete.call( self );
                    }
                },
                thumbload = $( thumb.container ).data( 'thumbload' );
            if ( thumb.video ) {
                thumbload.call( self, thumb, callback );
            } else {
                thumb.load( data.src , ;
            }
        });

        return this;

    },

    /**
        Lazy-loads thumbnails in chunks.
        This method automatcally chops up the loading process of many thumbnails into chunks

        @param {Number} size Size of each chunk to be loaded
        @param {Number} [delay] Delay between each loads

        @returns Instance
    */

    lazyLoadChunks: function( size, delay ) {

        var len = this.getDataLength(),
            i = 0,
            n = 0,
            arr = [],
            temp = [],
            self = this;

        delay = delay || 0;

        for( ; i<len; i++ ) {
            temp.push(i);
            if ( ++n == size || i == len-1 ) {
                arr.push( temp );
                n = 0;
                temp = [];
            }
        }

        var init = function( wait ) {
            var a = arr.shift();
            if ( a ) {
                window.setTimeout( ( delay && wait ) ? delay : 0 );
            }
        };

        init( false );

        return this;

    },

    // the internal _run method should be called after loading data into galleria
    // makes sure the gallery has proper measurements before postrun & ready
    _run : function() {

        var self = this;

        self._createThumbnails();

        // make sure we have a stageHeight && stageWidth

        Utils.wait({

            timeout: 10000,

            until: function() {

                // Opera crap
                if ( Galleria.OPERA ) {
                    self.$( 'stage' ).css( 'display', 'inline-block' );
                }

                self._stageWidth  = self.$( 'stage' ).width();
                self._stageHeight = self.$( 'stage' ).height();

                return( self._stageWidth &&
                        self._stageHeight > 50 ); // what is an acceptable height?
            },

            success: function() {

                // save the instance
                _galleries.push( self );

                // postrun some stuff after the gallery is ready

                // create the touch slider
                if ( self._options.swipe ) {

                    var $images = self.$( 'images' ).width( self.getDataLength() * self._stageWidth );
                    $.each( new Array( self.getDataLength() ), ;

                    self.finger.setup();
                }

                // show counter
                Utils.show( self.get('counter') );

                // bind carousel nav
                if ( self._options.carousel ) {
                    self._carousel.bindControls();
                }

                // start autoplay
                if ( self._options.autoplay ) {

                    self.pause();

                    if ( typeof self._options.autoplay === 'number' ) {
                        self._playtime = self._options.autoplay;
                    }

                    self._playing = true;
                }
                // if second load, just do the show and return
                if ( self._firstrun ) {

                    if ( self._options.autoplay ) {
                        self.trigger( Galleria.PLAY );
                    }

                    if ( typeof self._options.show === 'number' ) {
                        self.show( self._options.show );
                    }
                    return;
                }

                self._firstrun = true;

                // initialize the History plugin
                if ( Galleria.History ) {

                    // bind the show method
                    Galleria.History.change(;
                }

                self.trigger( Galleria.READY );

                // call the theme init method
                self.theme.init.call( self, self._options );

                // Trigger Galleria.ready
                $.each( Galleria.ready.callbacks, ;

                // call the extend option
                self._options.extend.call( self, self._options );

                // show the initial image
                // first test for permalinks in history
                if ( /^[0-9]{1,4}$/.test( HASH ) && Galleria.History ) {
                    self.show( HASH, undef, true );

                } else if( self._data[ self._options.show ] ) {
                    self.show( self._options.show );
                }

                // play trigger
                if ( self._options.autoplay ) {
                    self.trigger( Galleria.PLAY );
                }
            },

            error: function() {
                Galleria.raise('Stage width or height is too small to show the gallery. Traced measures: width:' + self._stageWidth + 'px, height: ' + self._stageHeight + 'px.', true);
            }

        });
    },

    /**
        Loads data into the gallery.
        You can call this method on an existing gallery to reload the gallery with new data.

        @param {Array|string} [source] Optional JSON array of data or selector of where to find data in the document.
        Defaults to the Galleria target or dataSource option.

        @param {string} [selector] Optional element selector of what elements to parse.
        Defaults to 'img'.

        @param {Function} [config] Optional function to modify the data extraction proceedure from the selector.
        See the dataConfig option for more information.

        @returns Instance
    */

    load : function( source, selector, config ) {

        var self = this,
            o = this._options;

        // empty the data array
        this._data = [];

        // empty the thumbnails
        this._thumbnails = [];
        this.$('thumbnails').empty();

        // shorten the arguments
        if ( typeof selector === 'function' ) {
            config = selector;
            selector = null;
        }

        // use the source set by target
        source = source || o.dataSource;

        // use selector set by option
        selector = selector || o.dataSelector;

        // use the dataConfig set by option
        config = config || o.dataConfig;

        // if source is a true object, make it into an array
        if( $.isPlainObject( source ) ) {
            source = [source];
        }

        // check if the data is an array already
        if ( $.isArray( source ) ) {
            if ( this.validate( source ) ) {
                this._data = source;
            } else {
                Galleria.raise( 'Load failed: JSON Array not valid.' );
            }
        } else {

            // add .video and .iframe to the selector (1.2.7)
            selector += ',.video,.iframe';

            // loop through images and set data
            $( source ).find( selector ).each( function( i, elem ) {

                elem = $( elem );
                var data = {},
                    parent = elem.parent(),
                    href = parent.attr( 'href' ),
                    rel  = parent.attr( 'rel' );

                if( href && ( elem[0].nodeName == 'IMG' || elem.hasClass('video') ) && _videoTest( href ) ) {
                    data.video = href;
                } else if( href && elem.hasClass('iframe') ) {
                    data.iframe = href;
                } else {
                    data.image = data.big = href;
                }

                if ( rel ) {
                    data.big = rel;
                }

                // alternative extraction from HTML5 data attribute, added in 1.2.7
                $.each( 'big title description link layer image'.split(' '), ;

                if ( !data.big ) {
                    data.big = data.image;
                }

                // mix default extractions with the hrefs and config
                // and push it into the data array
                self._data.push( $.extend({

                    title:       elem.attr('title') || '',
                    thumb:       elem.attr('src'),
                    image:       elem.attr('src'),
                    big:         elem.attr('src'),
                    link:        elem.attr('longdesc'),
                    original:    elem.get(0) // saved as a reference

                }, data, config( elem ) ) );

            });
        }

        if ( typeof o.dataSort == 'function' ) {
            protoArray.sort.call( this._data, o.dataSort );
        } else if ( o.dataSort == 'random' ) {
            this._data.sort( ;
        }

        // trigger the DATA event and return
        if ( this.getDataLength() ) {
            this._parseData( );
        }
        return this;

    },

    // make sure the data works properly
    _parseData : function( callback ) {

        var self = this,
            current,
            ready = false,
            onload = function() {
                var complete = true;
                $.each( self._data, ;
                if ( complete && !ready ) {
                    ready = true;
                    callback.call( self );
                }
            };

        $.each( this._data, function( i, data ) {

            current = self._data[ i ];

            // copy image as thumb if no thumb exists
            if ( 'thumb' in data === false ) {
                current.thumb = data.image;
            }
            // copy image as big image if no biggie exists
            if ( !data.big ) {
                current.big = data.image;
            }
            // parse video
            if ( 'video' in data ) {
                var result = _videoTest( data.video );

                if ( result ) {
                    current.iframe = new Video(result.provider, result.id ).embed() + (function() {

                        // add options
                        if ( typeof self._options[ result.provider ] == 'object' ) {
                            var str = '?', arr = [];
                            $.each( self._options[ result.provider ], ;

                            // small youtube specifics, perhaps move to _video later
                            if ( result.provider == 'youtube' ) {
                                arr = ['wmode=opaque'].concat(arr);
                            }
                            return str + arr.join('&');
                        }
                        return '';
                    }());

                    // pre-fetch video providers media

                    if( !current.thumb || !current.image ) {
                        $.each( ['thumb', 'image'], ;
                    }
                }
            }
        });

        onload();

        return this;
    },

    /**
        Destroy the Galleria instance and recover the original content

        @example this.destroy();

        @returns Instance
    */

    destroy : function() {
        this.$( 'target' ).data( 'galleria', null );
        this.$( 'container' ).off( 'galleria' );
        this.get( 'target' ).innerHTML = this._original.html;
        this.clearTimer();
        Utils.removeFromArray( _instances, this );
        Utils.removeFromArray( _galleries, this );
        if ( Galleria._waiters.length ) {
            $.each( Galleria._waiters, ;
        }
        return this;
    },

    /**
        Adds and/or removes images from the gallery
        Works just like Array.splice
        https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/splice

        @example this.splice( 2, 4 ); // removes 4 images after the second image

        @returns Instance
    */

    splice : 

    /**
        Append images to the gallery
        Works just like Array.push
        https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/push

        @example this.push({ image: 'image1.jpg' }); // appends the image to the gallery

        @returns Instance
    */

    push : function() {
        var self = this,
            args = Utils.array( arguments );

        if ( args.length == 1 && args[0].constructor == Array ) {
            args = args[0];
        }

        window.setTimeout( 2);
        return self;
    },

    _getActive : 

    validate : 

    /**
        Bind any event to Galleria

        @param {string} type The Event type to listen for
        @param {Function} fn The function to execute when the event is triggered

        @example this.bind( 'image', function() { Galleria.log('image shown') });

        @returns Instance
    */

    bind : 

    /**
        Unbind any event to Galleria

        @param {string} type The Event type to forget

        @returns Instance
    */

    unbind : 

    /**
        Manually trigger a Galleria event

        @param {string} type The Event to trigger

        @returns Instance
    */

    trigger : function( type ) {

        type = typeof type === 'object' ?
            $.extend( type, { scope: this } ) :
            { type: _patchEvent( type ), scope: this };

        this.$( 'container' ).trigger( type );

        return this;
    },

    /**
        Assign an "idle state" to any element.
        The idle state will be applied after a certain amount of idle time
        Useful to hide f.ex navigation when the gallery is inactive

        @param {HTMLElement|string} elem The Dom node or selector to apply the idle state to
        @param {Object} styles the CSS styles to apply when in idle mode
        @param {Object} [from] the CSS styles to apply when in normal
        @param {Boolean} [hide] set to true if you want to hide it first

        @example addIdleState( this.get('image-nav'), { opacity: 0 });
        @example addIdleState( '.galleria-image-nav', { top: -200 }, true);

        @returns Instance
    */

    addIdleState: 

    /**
        Removes any idle state previously set using addIdleState()

        @param {HTMLElement|string} elem The Dom node or selector to remove the idle state from.

        @returns Instance
    */

    removeIdleState: function( elem ) {
        this._idle.remove.apply( this._idle, Utils.array( arguments ) );
        return this;
    },

    /**
        Force Galleria to enter idle mode.

        @returns Instance
    */

    enterIdleMode: function() {
        this._idle.hide();
        return this;
    },

    /**
        Force Galleria to exit idle mode.

        @returns Instance
    */

    exitIdleMode: function() {
        this._idle.showAll();
        return this;
    },

    /**
        Enter FullScreen mode

        @param {Function} callback the function to be executed when the fullscreen mode is fully applied.

        @returns Instance
    */

    enterFullscreen: function( callback ) {
        this._fullscreen.enter.apply( this, Utils.array( arguments ) );
        return this;
    },

    /**
        Exits FullScreen mode

        @param {Function} callback the function to be executed when the fullscreen mode is fully applied.

        @returns Instance
    */

    exitFullscreen: 

    /**
        Toggle FullScreen mode

        @param {Function} callback the function to be executed when the fullscreen mode is fully applied or removed.

        @returns Instance
    */

    toggleFullscreen: 

    /**
        Adds a tooltip to any element.
        You can also call this method with an object as argument with elemID:value pairs to apply tooltips to (see examples)

        @param {HTMLElement} elem The DOM Node to attach the event to
        @param {string|Function} value The tooltip message. Can also be a function that returns a string.

        @example this.bindTooltip( this.get('thumbnails'), 'My thumbnails');
        @example this.bindTooltip( this.get('thumbnails'), function() { return 'My thumbs' });
        @example this.bindTooltip( { image_nav: 'Navigation' });

        @returns Instance
    */

    bindTooltip: function( elem, value ) {
        this._tooltip.bind.apply( this._tooltip, Utils.array(arguments) );
        return this;
    },

    /**
        Note: this method is deprecated. Use refreshTooltip() instead.

        Redefine a tooltip.
        Use this if you want to re-apply a tooltip value to an already bound tooltip element.

        @param {HTMLElement} elem The DOM Node to attach the event to
        @param {string|Function} value The tooltip message. Can also be a function that returns a string.

        @returns Instance
    */

    defineTooltip: 

    /**
        Refresh a tooltip value.
        Use this if you want to change the tooltip value at runtime, f.ex if you have a play/pause toggle.

        @param {HTMLElement} elem The DOM Node that has a tooltip that should be refreshed

        @returns Instance
    */

    refreshTooltip: function( elem ) {
        this._tooltip.show.apply( this._tooltip, Utils.array(arguments) );
        return this;
    },

    /**
        Open a pre-designed lightbox with the currently active image.
        You can control some visuals using gallery options.

        @returns Instance
    */

    openLightbox: function() {
        this._lightbox.show.apply( this._lightbox, Utils.array( arguments ) );
        return this;
    },

    /**
        Close the lightbox.

        @returns Instance
    */

    closeLightbox: function() {
        this._lightbox.hide.apply( this._lightbox, Utils.array( arguments ) );
        return this;
    },

    /**
        Check if a variation exists

        @returns {Boolean} If the variation has been applied
    */

    hasVariation: 

    /**
        Get the currently active image element.

        @returns {HTMLElement} The image element
    */

    getActiveImage: 

    /**
        Get the currently active thumbnail element.

        @returns {HTMLElement} The thumbnail element
    */

    getActiveThumb: 

    /**
        Get the mouse position relative to the gallery container

        @param e The mouse event

        @example

var gallery = this;
$(document).mousemove(function(e) {
    console.log( gallery.getMousePosition(e).x );
});

        @returns {Object} Object with x & y of the relative mouse postion
    */

    getMousePosition : 

    /**
        Adds a panning effect to the image

        @param [img] The optional image element. If not specified it takes the currently active image

        @returns Instance
    */

    addPan : function( img ) {

        if ( this._options.imageCrop === false ) {
            return;
        }

        img = $( img || this.getActiveImage() );

        // define some variables and methods
        var self   = this,
            x      = img.width() / 2,
            y      = img.height() / 2,
            destX  = parseInt( img.css( 'left' ), 10 ),
            destY  = parseInt( img.css( 'top' ), 10 ),
            curX   = destX || 0,
            curY   = destY || 0,
            distX  = 0,
            distY  = 0,
            active = false,
            ts     = Utils.timestamp(),
            cache  = 0,
            move   = 0,

            // positions the image
            position = function( dist, cur, pos ) {
                if ( dist > 0 ) {
                    move = M.round( M.max( dist * -1, M.min( 0, cur ) ) );
                    if ( cache !== move ) {

                        cache = move;

                        if ( IE === 8 ) { // scroll is faster for IE
                            img.parent()[ 'scroll' + pos ]( move * -1 );
                        } else {
                            var css = {};
                            css[ pos.toLowerCase() ] = move;
                            img.css(css);
                        }
                    }
                }
            },

            // calculates mouse position after 50ms
            calculate = function(e) {
                if (Utils.timestamp() - ts < 50) {
                    return;
                }
                active = true;
                x = self.getMousePosition(e).x;
                y = self.getMousePosition(e).y;
            },

            // the main loop to check
            loop = function(e) {

                if (!active) {
                    return;
                }

                distX = img.width() - self._stageWidth;
                distY = img.height() - self._stageHeight;
                destX = x / self._stageWidth * distX * -1;
                destY = y / self._stageHeight * distY * -1;
                curX += ( destX - curX ) / self._options.imagePanSmoothness;
                curY += ( destY - curY ) / self._options.imagePanSmoothness;

                position( distY, curY, 'Top' );
                position( distX, curX, 'Left' );

            };

        // we need to use scroll in IE8 to speed things up
        if ( IE === 8 ) {

            img.parent().scrollTop( curY * -1 ).scrollLeft( curX * -1 );
            img.css({
                top: 0,
                left: 0
            });

        }

        // unbind and bind event
        this.$( 'stage' ).off( 'mousemove', calculate ).on( 'mousemove', calculate );

        // loop the loop
        this.addTimer( 'pan' + self._id, loop, 50, true);

        return this;
    },

    /**
        Brings the scope into any callback

        @param fn The callback to bring the scope into
        @param [scope] Optional scope to bring

        @example $('#fullscreen').click( this.proxy(function() { this.enterFullscreen(); }) )

        @returns {Function} Return the callback with the gallery scope
    */

    proxy : function( fn, scope ) {
        if ( typeof fn !== 'function' ) {
            return F;
        }
        scope = scope || this;
        return 
    },

    /**
        Tells you the theme name of the gallery

        @returns {String} theme name
    */

    getThemeName : function() {
        return this.theme.name;
    },

    /**
        Removes the panning effect set by addPan()

        @returns Instance
    */

    removePan: 

    /**
        Adds an element to the Galleria DOM array.
        When you add an element here, you can access it using element ID in many API calls

        @param {string} id The element ID you wish to use. You can add many elements by adding more arguments.

        @example addElement('mybutton');
        @example addElement('mybutton','mylink');

        @returns Instance
    */

    addElement : 

    /**
        Attach keyboard events to Galleria

        @param {Object} map The map object of events.
        Possible keys are 'UP', 'DOWN', 'LEFT', 'RIGHT', 'RETURN', 'ESCAPE', 'BACKSPACE', and 'SPACE'.

        @example

this.attachKeyboard({
    right: this.next,
    left: this.prev,
    up: function() {
        console.log( 'up key pressed' )
    }
});

        @returns Instance
    */

    attachKeyboard : 

    /**
        Detach all keyboard events to Galleria

        @returns Instance
    */

    detachKeyboard : 

    /**
        Fast helper for appending galleria elements that you added using addElement()

        @param {string} parentID The parent element ID where the element will be appended
        @param {string} childID the element ID that should be appended

        @example this.addElement('myElement');
        this.appendChild( 'info', 'myElement' );

        @returns Instance
    */

    appendChild : function( parentID, childID ) {
        this.$( parentID ).append( this.get( childID ) || childID );
        return this;
    },

    /**
        Fast helper for prepending galleria elements that you added using addElement()

        @param {string} parentID The parent element ID where the element will be prepended
        @param {string} childID the element ID that should be prepended

        @example

this.addElement('myElement');
this.prependChild( 'info', 'myElement' );

        @returns Instance
    */

    prependChild : 

    /**
        Remove an element by blueprint

        @param {string} elemID The element to be removed.
        You can remove multiple elements by adding arguments.

        @returns Instance
    */

    remove : 

    // a fast helper for building dom structures
    // leave this out of the API for now

    append : function( data ) {
        var i, j;
        for( i in data ) {
            if ( data.hasOwnProperty( i ) ) {
                if ( data[i].constructor === Array ) {
                    for( j = 0; data[i][j]; j++ ) {
                        this.appendChild( i, data[i][j] );
                    }
                } else {
                    this.appendChild( i, data[i] );
                }
            }
        }
        return this;
    },

    // an internal helper for scaling according to options
    _scaleImage : function( image, options ) {

        image = image || this._controls.getActive();

        // janpub (JH) fix:
        // image might be unselected yet
        // e.g. when external logics rescales the gallery on window resize events
        if( !image ) {
            return;
        }

        var complete,

            scaleLayer = 

        options = $.extend({
            width:       this._stageWidth,
            height:      this._stageHeight,
            crop:        this._options.imageCrop,
            max:         this._options.maxScaleRatio,
            min:         this._options.minScaleRatio,
            margin:      this._options.imageMargin,
            position:    this._options.imagePosition,
            iframelimit: this._options.maxVideoSize
        }, options );

        if ( this._options.layerFollow && this._options.imageCrop !== true ) {

            if ( typeof options.complete == 'function' ) {
                complete = options.complete;
                options.complete = 
            } else {
                options.complete = scaleLayer;
            }

        } else {
            $( image.container ).children(':first').css({ top: 0, left: 0 });
        }

        image.scale( options );
        return this;
    },

    /**
        Updates the carousel,
        useful if you resize the gallery and want to re-check if the carousel nav is needed.

        @returns Instance
    */

    updateCarousel : 

    /**
        Resize the entire gallery container

        @param {Object} [measures] Optional object with width/height specified
        @param {Function} [complete] The callback to be called when the scaling is complete

        @returns Instance
    */

    resize : function( measures, complete ) {

        if ( typeof measures == 'function' ) {
            complete = measures;
            measures = undef;
        }

        measures = $.extend( { width:0, height:0 }, measures );

        var self = this,
            $container = this.$( 'container' );

        $.each( measures, ;

        $.each( measures, function( m, val ) {
            $container[ m ]( val );
        });

        return this.rescale( complete );

    },

    /**
        Rescales the gallery

        @param {number} width The target width
        @param {number} height The target height
        @param {Function} complete The callback to be called when the scaling is complete

        @returns Instance
    */

    rescale : function( width, height, complete ) {

        var self = this;

        // allow rescale(fn)
        if ( typeof width === 'function' ) {
            complete = width;
            width = undef;
        }

        var scale = function() {

            // set stagewidth
            self._stageWidth = width || self.$( 'stage' ).width();
            self._stageHeight = height || self.$( 'stage' ).height();

            if ( self._options.swipe ) {
                $.each( self._controls.slides, ;
                self.$('images').css('width', self._stageWidth * self.getDataLength());
            } else {
                // scale the active image
                self._scaleImage();
            }

            if ( self._options.carousel ) {
                self.updateCarousel();
            }

            var frame = self._controls.frames[ self._controls.active ];

            if (frame) {
                self._controls.frames[ self._controls.active ].scale({
                    width: self._stageWidth,
                    height: self._stageHeight,
                    iframelimit: self._options.maxVideoSize
                });
            }

            self.trigger( Galleria.RESCALE );

            if ( typeof complete === 'function' ) {
                complete.call( self );
            }
        };

        scale.call( self );

        return this;
    },

    /**
        Refreshes the gallery.
        Useful if you change image options at runtime and want to apply the changes to the active image.

        @returns Instance
    */

    refreshImage : function() {
        this._scaleImage();
        if ( this._options.imagePan ) {
            this.addPan();
        }
        return this;
    },

    _preload: function() {
        if ( this._options.preload ) {
            var p, i,
                n = this.getNext(),
                ndata;
            try {
                for ( i = this._options.preload; i > 0; i-- ) {
                    p = new Galleria.Picture();
                    ndata = this.getData( n );
                    p.preload( this.isFullscreen() && ndata.big ? ndata.big : ndata.image );
                    n = this.getNext( n );
                }
            } catch(e) {}
        }
    },

    /**
        Shows an image by index

        @param {number|boolean} index The index to show
        @param {Boolean} rewind A boolean that should be true if you want the transition to go back

        @returns Instance
    */

    show : function( index, rewind, _history ) {

        var swipe = this._options.swipe;

        // do nothing queue is long || index is false || queue is false and transition is in progress
        if ( !swipe &&
            ( this._queue.length > 3 || index === false || ( !this._options.queue && this._queue.stalled ) ) ) {
            return;
        }

        index = M.max( 0, M.min( parseInt( index, 10 ), this.getDataLength() - 1 ) );

        rewind = typeof rewind !== 'undefined' ? !!rewind : index < this.getIndex();

        _history = _history || false;

        // do the history thing and return
        if ( !_history && Galleria.History ) {
            Galleria.History.set( index.toString() );
            return;
        }

        if ( this.finger && index !== this._active ) {
            this.finger.to = -( index*this.finger.width );
            this.finger.index = index;
        }
        this._active = index;

        // we do things a bit simpler in swipe:
        if ( swipe ) {

            var data = this.getData(index),
                self = this;
            if ( !data ) {
                return;
            }

            var src = this.isFullscreen() && data.big ? data.big : ( data.image || data.iframe ),
                image = this._controls.slides[index],
                cached = image.isCached( src ),
                thumb = this._thumbnails[ index ];

            var evObj = {
                cached: cached,
                index: index,
                rewind: rewind,
                imageTarget: image.image,
                thumbTarget: thumb.image,
                galleriaData: data
            };

            this.trigger($.extend(evObj, {
                type: Galleria.LOADSTART
            }));

            self.$('container').removeClass( 'videoplay' );

            var complete = 

            self._preload();

            window.setTimeout(function() {

                // load if not ready
                if ( !image.ready || $(image.image).attr('src') != src ) {
                    if ( data.iframe && !data.image ) {
                        image.isIframe = true;
                    }
                    image.load(src, ;
                } else {
                    self.trigger($.extend(evObj, {
                        type: Galleria.IMAGE
                    }));
                    complete();
                }
            }, 100);

        } else {
            protoArray.push.call( this._queue, {
                index : index,
                rewind : rewind
            });
            if ( !this._queue.stalled ) {
                this._show();
            }
        }

        return this;
    },

    // the internal _show method does the actual showing
    _show : function() {

        // shortcuts
        var self = this,
            queue = this._queue[ 0 ],
            data = this.getData( queue.index );

        if ( !data ) {
            return;
        }

        var src = this.isFullscreen() && data.big ? data.big : ( data.image || data.iframe ),
            active = this._controls.getActive(),
            next = this._controls.getNext(),
            cached = next.isCached( src ),
            thumb = this._thumbnails[ queue.index ],
            mousetrigger = 

        self.$('container').toggleClass('iframe', !!data.isIframe).removeClass( 'videoplay' );

        // to be fired when loading & transition is complete:
        var complete = ( data, next, active, queue, thumb ));

        // let the carousel follow
        if ( this._options.carousel && this._options.carouselFollow ) {
            this._carousel.follow( queue.index );
        }

        // preload images
        self._preload();

        // show the next image, just in case
        Utils.show( next.container );

        next.isIframe = data.iframe && !data.image;

        // add active classes
        $( self._thumbnails[ queue.index ].container )
            .addClass( 'active' )
            .siblings( '.active' )
            .removeClass( 'active' );

        // trigger the LOADSTART event
        self.trigger( {
            type: Galleria.LOADSTART,
            cached: cached,
            index: queue.index,
            rewind: queue.rewind,
            imageTarget: next.image,
            thumbTarget: thumb.image,
            galleriaData: data
        });

        // stall the queue
        self._queue.stalled = true;

        // begin loading the next image
        next.load( src, function( next ) {

            // add layer HTML
            var layer = $( self._layers[ 1-self._controls.active ] ).html( data.layer || '' ).hide();

            self._scaleImage( next, {

                complete: function( next ) {

                    // toggle low quality for IE
                    if ( 'image' in active ) {
                        Utils.toggleQuality( active.image, false );
                    }
                    Utils.toggleQuality( next.image, false );

                    // remove the image panning, if applied
                    // TODO: rethink if this is necessary
                    self.removePan();

                    // set the captions and counter
                    self.setInfo( queue.index );
                    self.setCounter( queue.index );

                    // show the layer now
                    if ( data.layer ) {
                        layer.show();
                        // inherit click events set on image
                        if ( ( data.iframe && data.image ) || data.link || self._options.lightbox || self._options.clicknext ) {
                            layer.css( 'cursor', 'pointer' ).off( 'mouseup' ).mouseup( mousetrigger );
                        }
                    }

                    // add play icon
                    if( data.video && data.image ) {
                        _playIcon( next.container );
                    }

                    var transition = self._options.transition;

                    // can JavaScript loop through objects in order? yes.
                    $.each({
                        initial: active.image === null,
                        touch: Galleria.TOUCH,
                        fullscreen: self.isFullscreen()
                    }, ;

                    // validate the transition
                    if ( transition in _transitions.effects === false ) {
                        complete();
                    } else {
                        var params = {
                            prev: active.container,
                            next: next.container,
                            rewind: queue.rewind,
                            speed: self._options.transitionSpeed || 400
                        };

                        _transitions.active = true;

                        // call the transition function and send some stuff
                        _transitions.init.call( self, transition, params, complete );

                    }

                    // trigger the LOADFINISH event
                    self.trigger({
                        type: Galleria.LOADFINISH,
                        cached: cached,
                        index: queue.index,
                        rewind: queue.rewind,
                        imageTarget: next.image,
                        thumbTarget: self._thumbnails[ queue.index ].image,
                        galleriaData: self.getData( queue.index )
                    });
                }
            });
        });
    },

    /**
        Gets the next index

        @param {number} [base] Optional starting point

        @returns {number} the next index, or the first if you are at the first (looping)
    */

    getNext : function( base ) {
        base = typeof base === 'number' ? base : this.getIndex();
        return base === this.getDataLength() - 1 ? 0 : base + 1;
    },

    /**
        Gets the previous index

        @param {number} [base] Optional starting point

        @returns {number} the previous index, or the last if you are at the first (looping)
    */

    getPrev : function( base ) {
        base = typeof base === 'number' ? base : this.getIndex();
        return base === 0 ? this.getDataLength() - 1 : base - 1;
    },

    /**
        Shows the next image in line

        @returns Instance
    */

    next : function() {
        if ( this.getDataLength() > 1 ) {
            this.show( this.getNext(), false );
        }
        return this;
    },

    /**
        Shows the previous image in line

        @returns Instance
    */

    prev : function() {
        if ( this.getDataLength() > 1 ) {
            this.show( this.getPrev(), true );
        }
        return this;
    },

    /**
        Retrieve a DOM element by element ID

        @param {string} elemId The delement ID to fetch

        @returns {HTMLElement} The elements DOM node or null if not found.
    */

    get : 

    /**
        Retrieve a data object

        @param {number} index The data index to retrieve.
        If no index specified it will take the currently active image

        @returns {Object} The data object
    */

    getData : 

    /**
        Retrieve the number of data items

        @returns {number} The data length
    */
    getDataLength : function() {
        return this._data.length;
    },

    /**
        Retrieve the currently active index

        @returns {number|boolean} The active index or false if none found
    */

    getIndex : function() {
        return typeof this._active === 'number' ? this._active : false;
    },

    /**
        Retrieve the stage height

        @returns {number} The stage height
    */

    getStageHeight : function() {
        return this._stageHeight;
    },

    /**
        Retrieve the stage width

        @returns {number} The stage width
    */

    getStageWidth : function() {
        return this._stageWidth;
    },

    /**
        Retrieve the option

        @param {string} key The option key to retrieve. If no key specified it will return all options in an object.

        @returns option or options
    */

    getOptions : function( key ) {
        return typeof key === 'undefined' ? this._options : this._options[ key ];
    },

    /**
        Set options to the instance.
        You can set options using a key & value argument or a single object argument (see examples)

        @param {string} key The option key
        @param {string} value the the options value

        @example setOptions( 'autoplay', true )
        @example setOptions({ autoplay: true });

        @returns Instance
    */

    setOptions : function( key, value ) {
        if ( typeof key === 'object' ) {
            $.extend( this._options, key );
        } else {
            this._options[ key ] = value;
        }
        return this;
    },

    /**
        Starts playing the slideshow

        @param {number} delay Sets the slideshow interval in milliseconds.
        If you set it once, you can just call play() and get the same interval the next time.

        @returns Instance
    */

    play : function( delay ) {

        this._playing = true;

        this._playtime = delay || this._playtime;

        this._playCheck();

        this.trigger( Galleria.PLAY );

        return this;
    },

    /**
        Stops the slideshow if currently playing

        @returns Instance
    */

    pause : function() {

        this._playing = false;

        this.trigger( Galleria.PAUSE );

        return this;
    },

    /**
        Toggle between play and pause events.

        @param {number} delay Sets the slideshow interval in milliseconds.

        @returns Instance
    */

    playToggle : 

    /**
        Checks if the gallery is currently playing

        @returns {Boolean}
    */

    isPlaying : 

    /**
        Checks if the gallery is currently in fullscreen mode

        @returns {Boolean}
    */

    isFullscreen : 

    _playCheck : function() {
        var self = this,
            played = 0,
            interval = 20,
            now = Utils.timestamp(),
            timer_id = 'play' + this._id;

        if ( this._playing ) {

            this.clearTimer( timer_id );

            var fn = function() {

                played = Utils.timestamp() - now;
                if ( played >= self._playtime && self._playing ) {
                    self.clearTimer( timer_id );
                    self.next();
                    return;
                }
                if ( self._playing ) {

                    // trigger the PROGRESS event
                    self.trigger({
                        type:         Galleria.PROGRESS,
                        percent:      M.ceil( played / self._playtime * 100 ),
                        seconds:      M.floor( played / 1000 ),
                        milliseconds: played
                    });

                    self.addTimer( timer_id, fn, interval );
                }
            };
            self.addTimer( timer_id, fn, interval );
        }
    },

    /**
        Modify the slideshow delay

        @param {number} delay the number of milliseconds between slides,

        @returns Instance
    */

    setPlaytime: function( delay ) {
        this._playtime = delay;
        return this;
    },

    setIndex: 

    /**
        Manually modify the counter

        @param {number} [index] Optional data index to fectch,
        if no index found it assumes the currently active index

        @returns Instance
    */

    setCounter: function( index ) {

        if ( typeof index === 'number' ) {
            index++;
        } else if ( typeof index === 'undefined' ) {
            index = this.getIndex()+1;
        }

        this.get( 'current' ).innerHTML = index;

        if ( IE ) { // weird IE bug

            var count = this.$( 'counter' ),
                opacity = count.css( 'opacity' );

            if ( parseInt( opacity, 10 ) === 1) {
                Utils.removeAlpha( count[0] );
            } else {
                this.$( 'counter' ).css( 'opacity', opacity );
            }

        }

        return this;
    },

    /**
        Manually set captions

        @param {number} [index] Optional data index to fectch and apply as caption,
        if no index found it assumes the currently active index

        @returns Instance
    */

    setInfo : function( index ) {

        var self = this,
            data = this.getData( index );

        $.each( ['title','description'], ;

        return this;
    },

    /**
        Checks if the data contains any captions

        @param {number} [index] Optional data index to fectch,
        if no index found it assumes the currently active index.

        @returns {boolean}
    */

    hasInfo : function( index ) {

        var check = 'title description'.split(' '),
            i;

        for ( i = 0; check[i]; i++ ) {
            if ( !!this.getData( index )[ check[i] ] ) {
                return true;
            }
        }
        return false;

    },

    jQuery : function( str ) {

        var self = this,
            ret = [];

        $.each( str.split(','), ;

        var jQ = $( self.get( ret.shift() ) );

        $.each( ret, ;

        return jQ;

    },

    /**
        Converts element IDs into a jQuery collection
        You can call for multiple IDs separated with commas.

        @param {string} str One or more element IDs (comma-separated)

        @returns jQuery

        @example this.$('info,container').hide();
    */

    $ : 
};

// End of Galleria prototype

// Add events as static variables
$.each( _events, );

$.extend( Galleria, {

    // Browser helpers
    IE9:     IE === 9,
    IE8:     IE === 8,
    IE7:     IE === 7,
    IE6:     IE === 6,
    IE:      IE,
    WEBKIT:  /webkit/.test( NAV ),
    CHROME:  /chrome/.test( NAV ),
    SAFARI:  /safari/.test( NAV ) && !(/chrome/.test( NAV )),
    QUIRK:   ( IE && doc.compatMode && doc.compatMode === "BackCompat" ),
    MAC:     /mac/.test( navigator.platform.toLowerCase() ),
    OPERA:   !!window.opera,
    IPHONE:  /iphone/.test( NAV ),
    IPAD:    /ipad/.test( NAV ),
    ANDROID: /android/.test( NAV ),
    TOUCH:   ('ontouchstart' in doc)

});

// Galleria static methods

/**
    Adds a theme that you can use for your Gallery

    @param {Object} theme Object that should contain all your theme settings.
    <ul>
        <li>name - name of the theme</li>
        <li>author - name of the author</li>
        <li>css - css file name (not path)</li>
        <li>defaults - default options to apply, including theme-specific options</li>
        <li>init - the init function</li>
    </ul>

    @returns {Object} theme
*/

Galleria.addTheme = function( theme ) {

    // make sure we have a name
    if ( !theme.name ) {
        Galleria.raise('No theme name specified');
    }

    if ( typeof theme.defaults !== 'object' ) {
        theme.defaults = {};
    } else {
        theme.defaults = _legacyOptions( theme.defaults );
    }

    var css = false,
        reg;

    if ( typeof theme.css === 'string' ) {

        // look for manually added CSS
        $('link').each(;

        // else look for the absolute path and load the CSS dynamic
        if ( !css ) {


            $(function() {
                // Try to determine the css-path from the theme script.
                // In IE8/9, the script-dom-element seems to be not present
                // at once, if galleria itself is inserted into the dom
                // dynamically. We therefore try multiple times before raising
                // an error.
                var retryCount = 0;
                var tryLoadCss = function() {
                    $('script').each(function (i, script) {
                        // look for the theme script
                        reg = new RegExp('galleria\\.' + theme.name.toLowerCase() + '\\.');
                        if (reg.test(script.src)) {

                            // we have a match
                            css = script.src.replace(/[^\/]*$/, '') + theme.css;

                            window.setTimeout( 1);
                        }
                    });
                    if (!css) {
                        if (retryCount++ > 5) {
                            Galleria.raise('No theme CSS loaded');
                        } else {
                            window.setTimeout(tryLoadCss, 500);
                        }
                    }
                };
                tryLoadCss();
            });
        }

    } else {

        // pass
        _themeLoad( theme );
    }
    return theme;
};

/**
    loadTheme loads a theme js file and attaches a load event to Galleria

    @param {string} src The relative path to the theme source file

    @param {Object} [options] Optional options you want to apply

    @returns Galleria
*/

Galleria.loadTheme = function( src, options ) {

    // Don't load if theme is already loaded
    if( $('script').filter(.length ) {
        return;
    }

    var loaded = false,
        err;

    // start listening for the timeout onload
    $( window ).load( function() {
        if ( !loaded ) {
            // give it another 20 seconds
            err = window.setTimeout(function() {
                if ( !loaded ) {
                    Galleria.raise( "Galleria had problems loading theme at " + src + ". Please check theme path or load manually.", true );
                }
            }, 20000);
        }
    });

    // load the theme
    Utils.loadScript( src, ;

    return Galleria;
};

/**
    Retrieves a Galleria instance.

    @param {number} [index] Optional index to retrieve.
    If no index is supplied, the method will return all instances in an array.

    @returns Instance or Array of instances
*/

Galleria.get = 

/**

    Configure Galleria options via a static function.
    The options will be applied to all instances

    @param {string|object} key The options to apply or a key

    @param [value] If key is a string, this is the value

    @returns Galleria

*/

Galleria.configure = 

Galleria.configure.options = {};

/**

    Bind a Galleria event to the gallery

    @param {string} type A string representing the galleria event

    @param {function} callback The function that should run when the event is triggered

    @returns Galleria

*/

Galleria.on = 

Galleria.on.binds = [];

/**

    Run Galleria
    Alias for $(selector).galleria(options)

    @param {string} selector A selector of element(s) to intialize galleria to

    @param {object} options The options to apply

    @returns Galleria

*/

Galleria.run = 

/**
    Creates a transition to be used in your gallery

    @param {string} name The name of the transition that you will use as an option

    @param {Function} fn The function to be executed in the transition.
    The function contains two arguments, params and complete.
    Use the params Object to integrate the transition, and then call complete when you are done.

    @returns Galleria

*/

Galleria.addTransition = 

/**
    The Galleria utilites
*/

Galleria.utils = Utils;

/**
    A helper metod for cross-browser logging.
    It uses the console log if available otherwise it falls back to alert

    @example Galleria.log("hello", document.body, [1,2,3]);
*/

Galleria.log = 

/**
    A ready method for adding callbacks when a gallery is ready
    Each method is call before the extend option for every instance

    @param {function} callback The function to call

    @returns Galleria
*/

Galleria.ready = 

Galleria.ready.callbacks = [];

/**
    Method for raising errors

    @param {string} msg The message to throw

    @param {boolean} [fatal] Set this to true to override debug settings and display a fatal error
*/

Galleria.raise = function( msg, fatal ) {

    var type = fatal ? 'Fatal error' : 'Error',

        css = {
            color: '#fff',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 100000
        },

        echo = function( msg ) {

            var html = '<div style="padding:4px;margin:0 0 2px;background:#' +
                ( fatal ? '811' : '222' ) + ';">' +
                ( fatal ? '<strong>' + type + ': </strong>' : '' ) +
                msg + '</div>';

            $.each( _instances, ;

            if ( !_instances.length ) {
                $('<div>').css( $.extend( css, { position: 'fixed' } ) ).append( html ).appendTo( DOM().body );
            }
        };

    // if debug is on, display errors and throw exception if fatal
    if ( DEBUG ) {
        echo( msg );
        if ( fatal ) {
            throw new Error(type + ': ' + msg);
        }

    // else just echo a silent generic error if fatal
    } else if ( fatal ) {
        if ( _hasError ) {
            return;
        }
        _hasError = true;
        fatal = false;
        echo( 'Gallery could not load.' );
    }
};

// Add the version
Galleria.version = VERSION;

Galleria.getLoadedThemes = 

/**
    A method for checking what version of Galleria the user has installed and throws a readable error if the user needs to upgrade.
    Useful when building plugins that requires a certain version to function.

    @param {number} version The minimum version required

    @param {string} [msg] Optional message to display. If not specified, Galleria will throw a generic error.

    @returns Galleria
*/

Galleria.requires = 

/**
    Adds preload, cache, scale and crop functionality

    @constructor

    @requires jQuery

    @param {number} [id] Optional id to keep track of instances
*/

Galleria.Picture = 

Galleria.Picture.prototype = {

    // the inherited cache object
    cache: {},

    // show the image on stage
    show: function() {
        Utils.show( this.image );
    },

    // hide the image
    hide: 

    clear: 

    /**
        Checks if an image is in cache

        @param {string} src The image source path, ex '/path/to/img.jpg'

        @returns {boolean}
    */

    isCached: 

    /**
        Preloads an image into the cache

        @param {string} src The image source path, ex '/path/to/img.jpg'

        @returns Galleria.Picture
    */

    preload: 

    /**
        Loads an image and call the callback when ready.
        Will also add the image to cache.

        @param {string} src The image source path, ex '/path/to/img.jpg'
        @param {Object} [size] The forced size of the image, defined as an object { width: xx, height:xx }
        @param {Function} callback The function to be executed when the image is loaded & scaled

        @returns The image container (jQuery object)
    */

    load: function(src, size, callback) {

        if ( typeof size == 'function' ) {
            callback = size;
            size = null;
        }

        if( this.isIframe ) {
            var id = 'if'+new Date().getTime();

            var iframe = this.image = $('<iframe>', {
                src: src,
                frameborder: 0,
                id: id,
                allowfullscreen: true,
                css: { visibility: 'hidden' }
            })[0];

            if ( size ) {
                $( iframe ).css( size );
            }

            $( this.container ).find( 'iframe,img' ).remove();

            this.container.appendChild( this.image );

            $('#'+id).load( ( this, callback )));

            return this.container;
        }

        this.image = new Image();

        // IE8 opacity inherit bug
        if ( Galleria.IE8 ) {
            $( this.image ).css( 'filter', 'inherit' );
        }

        // FF shaking images bug:
        // http://support.galleria.io/discussions/problems/12245-shaking-photos
        if ( !Galleria.IE && !Galleria.CHROME && !Galleria.SAFARI ) {
            $( this.image ).css( 'image-rendering', 'optimizequality' );
        }

        var reload = false,
            resort = false,

            // some jquery cache
            $container = $( this.container ),
            $image = $( this.image ),

            onerror = function() {
                if ( !reload ) {
                    reload = true;
                    // reload the image with a timestamp
                    window.setTimeout(( $(this), src )), 50);
                } else {
                    // apply the dummy image if it exists
                    if ( DUMMY ) {
                        $( this ).attr( 'src', DUMMY );
                    } else {
                        Galleria.raise('Image not found: ' + src);
                    }
                }
            },

            // the onload method
            onload = (function( self, callback, src ) {

                return function() {

                    var complete = function() {

                        $( this ).off( 'load' );

                        // save the original size
                        self.original = size || {
                            height: this.height,
                            width: this.width
                        };

                        // translate3d if needed
                        if ( Galleria.HAS3D ) {
                            this.style.MozTransform = this.style.webkitTransform = 'translate3d(0,0,0)';
                        }

                        $container.append( this );

                        self.cache[ src ] = src; // will override old cache

                        if (typeof callback == 'function' ) {
                            window.setTimeout(function() {
                                callback.call( self, self );
                            },1);
                        }
                    };

                    // Delay the callback to "fix" the Adblock Bug
                    // http://code.google.com/p/adblockforchrome/issues/detail?id=3701
                    if ( ( !this.width || !this.height ) ) {
                        (function( img ) {
                            Utils.wait({
                                until: 
                                success: 
                                error: function() {
                                    if ( !resort ) {
                                        $(new Image()).load( onload ).attr( 'src', img.src );
                                        resort = true;
                                    } else {
                                        Galleria.raise('Could not extract width/height from image: ' + img.src +
                                            '. Traced measures: width:' + img.width + 'px, height: ' + img.height + 'px.');
                                    }
                                },
                                timeout: 100
                            });
                        }( this ));
                    } else {
                        complete.call( this );
                    }
                };
            }( this, callback, src ));

        // remove any previous images
        $container.find( 'iframe,img' ).remove();

        // append the image
        $image.css( 'display', 'block');

        // hide it for now
        Utils.hide( this.image );

        // remove any max/min scaling
        $.each('minWidth minHeight maxWidth maxHeight'.split(' '), ;

        // begin load and insert in cache when done
        $image.load( onload ).on( 'error', onerror ).attr( 'src', src );

        // return the container
        return this.container;
    },

    /**
        Scales and crops the image

        @param {Object} options The method takes an object with a number of options:

        <ul>
            <li>width - width of the container</li>
            <li>height - height of the container</li>
            <li>min - minimum scale ratio</li>
            <li>max - maximum scale ratio</li>
            <li>margin - distance in pixels from the image border to the container</li>
            <li>complete - a callback that fires when scaling is complete</li>
            <li>position - positions the image, works like the css background-image property.</li>
            <li>crop - defines how to crop. Can be true, false, 'width' or 'height'</li>
            <li>canvas - set to true to try a canvas-based rescale</li>
        </ul>

        @returns The image container object (jQuery)
    */

    scale: function( options ) {

        var self = this;

        // extend some defaults
        options = $.extend({
            width: 0,
            height: 0,
            min: undef,
            max: undef,
            margin: 0,
            complete: F,
            position: 'center',
            crop: false,
            canvas: false,
            iframelimit: undef
        }, options);

        if( this.isIframe ) {

            var cw = options.width,
                ch = options.height,
                nw, nh;
            if ( options.iframelimit ) {
                var r = M.min( options.iframelimit/cw, options.iframelimit/ch );
                if ( r < 1 ) {
                    nw = cw * r;
                    nh = ch * r;

                    $( this.image ).css({
                        top: ch/2-nh/2,
                        left: cw/2-nw/2,
                        position: 'absolute'
                    });
                } else {
                    $( this.image ).css({
                        top: 0,
                        left: 0
                    });
                }
            }
            $( this.image ).width( nw || cw ).height( nh || ch ).removeAttr( 'width' ).removeAttr( 'height' );
            $( this.container ).width( cw ).height( ch );
            options.complete.call(self, self);
            try {
                if( this.image.contentWindow ) {
                    $( this.image.contentWindow ).trigger('resize');
                }
            } catch(e) {}
            return this.container;

        }

        // return the element if no image found
        if (!this.image) {
            return this.container;
        }

        // store locale variables
        var width,
            height,
            $container = $( self.container ),
            data;

        // wait for the width/height
        Utils.wait({
            until: 
            success: function() {

                // calculate some cropping
                var newWidth = ( width - options.margin * 2 ) / self.original.width,
                    newHeight = ( height - options.margin * 2 ) / self.original.height,
                    min = M.min( newWidth, newHeight ),
                    max = M.max( newWidth, newHeight ),
                    cropMap = {
                        'true'  : max,
                        'width' : newWidth,
                        'height': newHeight,
                        'false' : min,
                        'landscape': self.original.width > self.original.height ? max : min,
                        'portrait': self.original.width < self.original.height ? max : min
                    },
                    ratio = cropMap[ options.crop.toString() ],
                    canvasKey = '';

                // allow maxScaleRatio
                if ( options.max ) {
                    ratio = M.min( options.max, ratio );
                }

                // allow minScaleRatio
                if ( options.min ) {
                    ratio = M.max( options.min, ratio );
                }

                $.each( ['width','height'], ;

                $( self.container ).width( width ).height( height );

                if ( options.canvas && _canvas ) {

                    _canvas.elem.width = self.width;
                    _canvas.elem.height = self.height;

                    canvasKey = self.image.src + ':' + self.width + 'x' + self.height;

                    self.image.src = _canvas.cache[ canvasKey ] || ( canvasKey ) );

                }

                // calculate image_position
                var pos = {},
                    mix = {},
                    getPosition = function(value, measure, margin) {
                        var result = 0;
                        if (/\%/.test(value)) {
                            var flt = parseInt( value, 10 ) / 100,
                                m = self.image[ measure ] || $( self.image )[ measure ]();

                            result = M.ceil( m * -1 * flt + margin * flt );
                        } else {
                            result = Utils.parseValue( value );
                        }
                        return result;
                    },
                    positionMap = {
                        'top': { top: 0 },
                        'left': { left: 0 },
                        'right': { left: '100%' },
                        'bottom': { top: '100%' }
                    };

                $.each( options.position.toLowerCase().split(' '), ;

                $.each( pos, ;

                pos = pos.top ? $.extend( pos, mix ) : mix;

                pos = $.extend({
                    top: '50%',
                    left: '50%'
                }, pos);

                // apply position
                $( self.image ).css({
                    position : 'absolute',
                    top :  getPosition(pos.top, 'height', height),
                    left : getPosition(pos.left, 'width', width)
                });

                // show the image
                self.show();

                // flag ready and call the callback
                self.ready = true;
                options.complete.call( self, self );

            },
            error: 
            timeout: 1000
        });
        return this;
    }
};

// our own easings
$.extend( $.easing, {

    galleria: 

    galleriaIn: 

    galleriaOut: 
});


// Forked version of Ainos Finger.js for native-style touch

Galleria.Finger = (function() {

    var abs = M.abs;

    // test for translate3d support
    var has3d = Galleria.HAS3D = ());

    // request animation shim
    var requestFrame = ());

    var Finger = function(elem, options) {

        // default options
        this.config = {
            start: 0,
            duration: 500,
            onchange: function() {},
            oncomplete: function() {},
            easing:         };

        this.easeout = 

        if ( !elem.children.length ) {
            return;
        }

        var self = this;

        // extend options
        $.extend(this.config, options);

        this.elem = elem;
        this.child = elem.children[0];
        this.to = this.pos = 0;
        this.touching = false;
        this.start = {};
        this.index = this.config.start;
        this.anim = 0;
        this.easing = this.config.easing;

        if ( !has3d ) {
          this.child.style.position = 'absolute';
          this.elem.style.position = 'relative';
        }

        // Bind event handlers to context
        $.each(['ontouchstart','ontouchmove','ontouchend','setup'], ;

        // the physical animator
        this.setX = function() {

            var style = self.child.style;

            if (!has3d) {
                // this is actually faster than CSS3 translate
                style.left = self.pos+'px';
                return;
            }
            style.MozTransform = style.webkitTransform = style.transform = 'translate3d(' + self.pos + 'px,0,0)';
            return;
        };

        // bind events
        $(elem).on('touchstart', this.ontouchstart);
        $(window).on('resize', this.setup);
        $(window).on('orientationchange', this.setup);

        // set up width
        this.setup();

        // start the animations
        ());

    };

    Finger.prototype = {

        constructor: Finger,

        setup: function() {
            this.width = $( this.elem ).width();
            this.length = M.ceil( $(this.child).width() / this.width );
            if ( this.index !== 0 ) {
                this.index = M.max(0, M.min( this.index, this.length-1 ) );
                this.pos = this.to = -this.width*this.index;
            }
        },

        setPosition: 

        ontouchstart: function(e) {

            var touch = e.originalEvent.touches;

            this.start = {
                pageX: touch[0].pageX,
                pageY: touch[0].pageY,
                time:  +new Date()
            };

            this.isScrolling = null;
            this.touching = true;
            this.deltaX = 0;

            $doc.on('touchmove', this.ontouchmove);
            $doc.on('touchend', this.ontouchend);
        },

        ontouchmove: function(e) {

            var touch = e.originalEvent.touches;

            // ensure swiping with one touch and not pinching
            if( touch && touch.length > 1 || e.scale && e.scale !== 1 ) {
                return;
            }

            this.deltaX = touch[0].pageX - this.start.pageX;

            // determine if scrolling test has run - one time test
            if ( this.isScrolling === null ) {
                this.isScrolling = !!(
                    this.isScrolling ||
                    M.abs(this.deltaX) < M.abs(touch[0].pageY - this.start.pageY)
                );
            }

            // if user is not trying to scroll vertically
            if (!this.isScrolling) {

                // prevent native scrolling
                e.preventDefault();

                // increase resistance if first or last slide
                this.deltaX /= ( (!this.index && this.deltaX > 0 || this.index == this.length - 1 && this.deltaX < 0 ) ?
                    ( M.abs(this.deltaX) / this.width + 1.8 )  : 1 );
                this.to = this.deltaX - this.index * this.width;
            }
            e.stopPropagation();
        },

        ontouchend: function(e) {

            this.touching = false;

            // determine if slide attempt triggers next/prev slide
            var isValidSlide = +new Date() - this.start.time < 250 &&
                M.abs(this.deltaX) > 40 ||
                M.abs(this.deltaX) > this.width/2,

                isPastBounds = !this.index && this.deltaX > 0 ||
                    this.index == this.length - 1 && this.deltaX < 0;

            // if not scrolling vertically
            if ( !this.isScrolling ) {
                this.show( this.index + ( isValidSlide && !isPastBounds ? (this.deltaX < 0 ? 1 : -1) : 0 ) );
            }

            $doc.off('touchmove', this.ontouchmove);
            $doc.off('touchend', this.ontouchend);
        },

        show: function( index ) {
            if ( index != this.index ) {
                this.config.onchange.call(this, index);
            } else {
                this.to = -( index*this.width );
            }
        },

        moveTo: function( index ) {
            if ( index != this.index ) {
                this.pos = this.to = -( index*this.width );
                this.index = index;
            }
        },

        loop: function() {

            var distance = this.to - this.pos,
                factor = 1;

            if ( this.width && distance ) {
                factor = M.max(0.5, M.min(1.5, M.abs(distance / this.width) ) );
            }

            // if distance is short or the user is touching, do a 1-1 animation
            if ( this.touching || M.abs(distance) <= 1 ) {
                this.pos = this.to;
                distance = 0;
                if ( this.anim && !this.touching ) {
                    this.config.oncomplete( this.index );
                }
                this.anim = 0;
                this.easing = this.config.easing;
            } else {
                if ( !this.anim ) {
                    // save animation parameters
                    this.anim = { start: this.pos, time: +new Date(), distance: distance, factor: factor, destination: this.to };
                }
                // check if to has changed or time has run out
                var elapsed = +new Date() - this.anim.time;
                var duration = this.config.duration*this.anim.factor;

                if ( elapsed > duration || this.anim.destination != this.to ) {
                    this.anim = 0;
                    this.easing = this.easeout;
                    return;
                }
                // apply easing
                this.pos = this.easing(
                    null,
                    elapsed,
                    this.anim.start,
                    this.anim.distance,
                    duration
                );
            }
            this.setX();
        }
    };

    return Finger;

}());

// the plugin initializer
$.fn.galleria = function( options ) {

    var selector = this.selector;

    // try domReady if element not found
    if ( !$(this).length ) {

        $(function() {
            if ( $( selector ).length ) {

                // if found on domReady, go ahead
                $( selector ).galleria( options );

            } else {

                // if not, try fetching the element for 5 secs, then raise a warning.
                Galleria.utils.wait({
                    until: 
                    success: 
                    error: 
                    timeout: 5000
                });

            }
        });
        return this;
    }

    return this.each(;

};

// export as AMD or CommonJS
if ( typeof module === "object" && module && typeof module.exports === "object" ) {
    module.exports = Galleria;
} else {
    window.Galleria = Galleria;
    if ( typeof define === "function" && define.amd ) {
        define( "galleria", ['jquery'], );
    }
}

// phew

}( jQuery, this ) );
/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

;(( window.jQuery || window.Zepto );

/*! lazysizes - v5.3.2 */

!"undefined"!=typeof window?window:{});
/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-backgroundsize-cssfilters-csspositionsticky-flexbox-flexboxlegacy-inlinesvg-opacity-svg-touchevents-domprefixes-prefixes-setclasses-shiv-testallprops-testprop !*/
!function(e,t,n){={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:addTest:addAsyncTest:,Modernizr=Modernizr.prototype=C,Modernizr=new Modernizr,Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var x=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];C._prefixes=x;var b=t.documentElement,E="svg"===b.nodeName.toLowerCase();E||!"undefined"!=typeof e?e:this,t);var w="Moz O ms Webkit",T=C._config.usePrefixes?w.toLowerCase().split(" "):[];C._domPrefixes=T,Modernizr.addTest("opacity",,Modernizr.addTest("csspositionsticky",,Modernizr.addTest("inlinesvg",;var _=C._config.usePrefixes?w.split(" "):[];C._cssomPrefixes=_;var N={elem:s("modernizr")};Modernizr._q.push(function(){delete N.elem});var j={style:N.elem.style};Modernizr._q.unshift(;var k=C.testStyles=p;Modernizr.addTest("touchevents",;C.testProp=C.testAllProps=v,C.testAllProps=g,Modernizr.addTest("backgroundsize",g("backgroundSize","100%",!0)),Modernizr.addTest("flexbox",g("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",g("boxDirection","reverse",!0));var z="CSS"in e&&"supports"in e.CSS,P="supportsCSS"in e;Modernizr.addTest("supports",z||P),Modernizr.addTest("cssfilters",,o(),i(y),delete C.addTest,delete C.addAsyncTest;for(var F=0;F<Modernizr._q.length;F++)Modernizr._q[F]();e.Modernizr=Modernizr}(window,document);
/*! reddit Blog - v0.0.1
 * http://www.redditblog.com
 * Copyright (c) 2015;
 * Licensed GPLv2+
 */
( function() {
	var container, menu_button, menu, topics_menu, links, subMenus, search_button, search_field;

	container = document.getElementById( 'site-navigation' );
	if ( ! container ) {
		return;
	}

	menu_button = document.getElementById( 'js-menu-toggle' );
	if ( 'undefined' === typeof menu_button ) {
		return;
	}

	search_button = document.getElementById( 'js-search-toggle' );
	if ( 'undefined' === typeof search_button ) {
		return;
	}

	search_field = document.getElementById( 's' );
	if ( 'undefined' === typeof search_field ) {
		return;
	}

	topics_menu = container.getElementsByClassName( 'menu-item-topics' )[0];
	if ( 'undefined' === typeof topics_menu ) {
		return;
	}

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle menu_button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		menu_button.style.display = 'none';
		return;
	}

	menu.setAttribute( 'aria-expanded', 'false' );
	if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
		menu.className += ' nav-menu';
	}

	menu_button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
			container.className = container.className.replace( ' toggled', '' );
			menu_button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
		} else {
			container.className += ' toggled';
			menu_button.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );
		}
		if ( -1 !== container.className.indexOf( 'show-search' ) ) {
			container.className = container.className.replace( ' show-search', '' );
			search_button.setAttribute( 'aria-expanded', 'false' );
		}
	};

	search_button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'show-search' ) ) {
			container.className = container.className.replace( ' show-search', '' );
			search_button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
		} else {
			container.className += ' show-search';
			search_button.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );
			search_field.focus();
		} if ( -1 !== container.className.indexOf( 'toggled' ) ) {
			container.className = container.className.replace( ' toggled', '' );
			menu_button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
		}
	};

	topics_menu.onclick = function() {
		if ( -1 !== topics_menu.className.indexOf( 'show-topics-submenu' ) ) {
			topics_menu.className = topics_menu.className.replace( ' show-topics-submenu', '' );
		} else {
			topics_menu.className += ' show-topics-submenu';
		}
	};

	// Get all the link elements within the menu.
	links    = menu.getElementsByTagName( 'a' );
	subMenus = menu.getElementsByTagName( 'ul' );

	// Set menu items with submenus to aria-haspopup="true".
	for ( var i = 0, len = subMenus.length; i < len; i++ ) {
		subMenus[i].parentNode.setAttribute( 'aria-haspopup', 'true' );
	}

	// Each time a menu link is focused or blurred, toggle focus.
	for ( i = 0, len = links.length; i < len; i++ ) {
		links[i].addEventListener( 'focus', toggleFocus, true );
		links[i].addEventListener( 'blur', toggleFocus, true );
	}

	/**
	 * Sets or removes .focus class on an element.
	 */
	} )();
/*! reddit Blog - v0.0.1
 * http://www.redditblog.com
 * Copyright (c) 2016;
 * Licensed GPLv2+
 */
jQuery( document ).ready(function( $ ) {
	'use strict';

	/**
	 * Form Labels Overlay
	 * Mimic placeholder functionality using form labels
	 */
	$( document.getElementsByClassName( 'has-label' ) ).on({
		focus: function() {
			document.querySelector("label[for=" + $(this).prop("id") + "]").style.display = 'none';
		},
		blur: function() {
			if ($(this).val().length === 0) {
				document.querySelector("label[for=" + $(this).prop("id") + "]").style.display = 'block';
			}
		}
	});

	/**
	 * Site Search Focus
	 */
	$( document.getElementById( 's' ) ).on( {
		focus: 
		blur: function() {
			var $this = $(this);
			if ($this.val().length === 0) {
				$this.parent( 'fieldset' ).removeClass( 'active-focus' );
			}
		}
	});

	/**
	 * Clear email input field of newsletter signup when page is restored via back button
	 */
	$(window).bind("pageshow", function () {
		var form = document.getElementsByClassName('newsletter-signup');
		if(form[0] !== undefined){
			form[0].reset();
		}		
	});

	/**
	 * Handle form validation.
	 * HTML5 validation doesn't prevent the form from submitting in Safari. So we'll need to do it.
	 */
	redditBlogFormValidate();

	// Add or remove validation errors if data doesn't match
	$( '.validate-form input[required], .validate-form textarea[required]' ).focusout( function() {
		var $this = $( this );

		if ( $this.is( ':invalid' ) ) {
			$this.parent( 'fieldset' ).addClass( 'required-error' );
		} else {
			$this.parent( 'fieldset' ).removeClass( 'required-error' );
		}
	});

	/**
	 * Make Search Accessible via forward slash
	 */
	window.addEventListener('keydown', function (event) {
		if (document.activeElement === document.body && event.keyCode === 191) {
			document.getElementById('s').focus();
			event.preventDefault();
		}
	});

	/**
	 * Initialize Social Share functionality for article excerpts on mobile
	 */
	jQuery( document.getElementById( 'page' ) ).on( 'click', '.mobile-share-link', function() {
		var $share_link = jQuery( this );
		$share_link.parent('.share-mobile').toggleClass('share-on');
	} );

	jQuery( document.getElementById( 'page' ) ).on( 'click', '.share-mobile-modal', );

	/**
	 * Initialize FitVids.js wrapper for responsive video iframes from YouTube and Vimeo for Video post type
	 */
	$( document.getElementsByClassName( 'video-player' ) ).fitVids();
	$( document.getElementsByClassName( 'entry-content' ) ).fitVids();
	$( document.getElementsByClassName( 'embed-youtube' ) ).fitVids();
	$( document.getElementsByClassName( 'embed-vimeo' ) ).fitVids();

	// Submit our email newsletter form with Ajax after the form has been validated
	var subscribeForm = document.getElementById( 'subForm' );
	if(subscribeForm){
		subscribeForm.addEventListener( 'formValidation', function( e ) {
			e.preventDefault();

			var $form          = $( e.detail ),
					$notifications = $form.find( '.notifications' );

			$.getJSON(
					$form.attr( 'action' ) + '?callback=?',
					$form.serialize(),
					function ( data ) {
						if ( data.Status === 400 ) {
							$notifications.addClass( 'error' ).text( data.Message );
							$notifications.removeClass( 'success' );
						} else { // 200
							$notifications.addClass( 'success' ).text( data.Message );
							$notifications.removeClass( 'error' );
						}
					}
			);
		});
	}

	/**
	 * NSFW Image Reveal for shortcode on single articles
	 */
	$( document.getElementById( 'page' ) ).on( 'click', '.btn-reveal-nsfw-img', function() {
		var $reveal_btn = $( this ),
			$reveal_txt = $reveal_btn.parent( '.nsfw-img-text' ),
			$hide_btn = $reveal_txt.siblings('.btn-hide-nsfw-img'),
			$blur_cont = $reveal_txt.parent( '.nsfw-img-wrap' );

		$reveal_txt.addClass('reveal');
		$hide_btn.addClass('reveal');
		$blur_cont.removeClass('blur');
	} );

	$( document.getElementById( 'page' ) ).on( 'click', '.btn-hide-nsfw-img', function() {
		var $hide_btn = $( this ),
			$reveal_txt = $hide_btn.siblings( '.nsfw-img-text' ),
			$reveal_btn = $reveal_txt.children('.btn-reveal-nsfw-img'),
			$blur_cont = $reveal_txt.parent( '.nsfw-img-wrap' );

		$reveal_txt.removeClass('reveal');
		$hide_btn.removeClass('reveal');
		$blur_cont.addClass('blur');
	} );

} );
/**
 * Allow us to process and validate that form information is actually set.
 *
 * While we do have HTML5 to help us here, sadly, Safari doesn't prevent users from submitting
 * empty forms... (facepalm). We'll need to over ride the default browser validation and do this
 * our selves to ensure empty forms are not sent across the supported browsers.
 */
function redditBlogFormValidate() {
	'use strict';

	var forms = document.getElementsByClassName( 'validate-form' );

	if ( ! forms ) {
		return;
	}

	// Loop through each form
	for ( var i = 0; i < forms.length; i++ ) {
		forms[ i ].noValidate = true;

		forms[ i ].addEventListener( 'submit', redditBlogValidateFields( forms[ i ] ), false );
	}

	// Run validation on keypress for any form with the validate-form class
	jQuery( 'form.validate-form' ).keypress( function( e ) {
		if ( e.which === 13 ) { // Enter key
			redditBlogValidateFields( e.currentTarget );
		}
	});
}
/**
 * Callback function for redditBlogFormValidate.
 *
 * Since loading functions in a loop isn't recommended, this callback function will accept the
 * data of a single form element and validate it's form fields and return the result.
 *
 * Best to be used during the submit event.
 *
 * @param form
 * @returns {Function}
 */
function redditBlogValidateFields( form ) {
	'use strict';

	// Return a function that will allow us to pass the form data in the local scope but
	// still allow us to handle the event properly.
	return function( e ) {
		if ( ! e.target.checkValidity() ) {
			e.preventDefault();

			var elements = form.elements;

			for ( var i = 0; i < elements.length; i++ ) {
				var $this = elements[ i ];

				if ( ( 'INPUT' === $this.tagName || 'TEXTAREA' === $this.tagName ) &&
						$this.hasAttribute( 'required' ) &&
						! $this.checkValidity() ) {
					$this.parentNode.className = 'required-error';
				}
			}
		} else {
			// If all was well, we'll create and fire a custom event for our own use case
			var redditBlogValidated = document.createEvent( 'CustomEvent' );

			redditBlogValidated.initCustomEvent( 'formValidation', true, true, form );

			form.dispatchEvent( redditBlogValidated );

			var newsletter = jQuery( form ).hasClass( 'newsletter-signup');
			if ( newsletter ) {
				// Stop the newsletter signup from submitting the traditional route as
				// we'll be using AJAX to submit.
				e.preventDefault();
			}
		}
	};
}

/**
 * Add referral parameters for tracking URLs in post_content
 *
 * @param location
 * @param topic
 */
jQuery.fn.ref_tracking = function( location, topic ) {
	jQuery(this).find( 'a[href*="reddit.com"]' ).each(function () {
		var url = jQuery(this).attr( 'href' );
		jQuery(this).attr( 'href', url + '?ref=redditblog&ref_source=' + location + '&ref_campaign=' + topic );
	});
};
// Do not delete this empty file; it's fixing a serialization bug in gulp before gulp 4 is released