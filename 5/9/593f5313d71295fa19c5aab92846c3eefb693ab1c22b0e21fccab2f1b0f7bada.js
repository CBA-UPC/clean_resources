(function (window) {
    'use strict';

    /**
     * UAParser.js v0.7.10
     * Lightweight JavaScript-based User-Agent string parser
     * https://github.com/faisalman/ua-parser-js
     *
     * Copyright © 2012-2015 Faisal Salman <fyzlman@gmail.com>
     * Dual licensed under GPLv2 & MIT
     */
    
    (function (window, undefined) {
    
        'use strict';
    
        //////////////
        // Constants
        /////////////
    
    
        var LIBVERSION  = '0.7.10',
            EMPTY       = '',
            UNKNOWN     = '?',
            FUNC_TYPE   = 'function',
            UNDEF_TYPE  = 'undefined',
            OBJ_TYPE    = 'object',
            STR_TYPE    = 'string',
            MAJOR       = 'major', // deprecated
            MODEL       = 'model',
            NAME        = 'name',
            TYPE        = 'type',
            VENDOR      = 'vendor',
            VERSION     = 'version',
            ARCHITECTURE= 'architecture',
            CONSOLE     = 'console',
            MOBILE      = 'mobile',
            TABLET      = 'tablet',
            SMARTTV     = 'smarttv',
            WEARABLE    = 'wearable',
            EMBEDDED    = 'embedded';
    
    
        ///////////
        // Helper
        //////////
    
    
        var util = {
            extend :,
            has :,
            lowerize :,
            major :
        };
    
    
        ///////////////
        // Map helper
        //////////////
    
    
        var mapper = {
    
            rgx :,
    
            str :
        };
    
    
        ///////////////
        // String map
        //////////////
    
    
        var maps = {
    
            browser : {
                oldsafari : {
                    version : {
                        '1.0'   : '/8',
                        '1.2'   : '/1',
                        '1.3'   : '/3',
                        '2.0'   : '/412',
                        '2.0.2' : '/416',
                        '2.0.3' : '/417',
                        '2.0.4' : '/419',
                        '?'     : '/'
                    }
                }
            },
    
            device : {
                amazon : {
                    model : {
                        'Fire Phone' : ['SD', 'KF']
                    }
                },
                sprint : {
                    model : {
                        'Evo Shift 4G' : '7373KT'
                    },
                    vendor : {
                        'HTC'       : 'APA',
                        'Sprint'    : 'Sprint'
                    }
                }
            },
    
            os : {
                windows : {
                    version : {
                        'ME'        : '4.90',
                        'NT 3.11'   : 'NT3.51',
                        'NT 4.0'    : 'NT4.0',
                        '2000'      : 'NT 5.0',
                        'XP'        : ['NT 5.1', 'NT 5.2'],
                        'Vista'     : 'NT 6.0',
                        '7'         : 'NT 6.1',
                        '8'         : 'NT 6.2',
                        '8.1'       : 'NT 6.3',
                        '10'        : ['NT 6.4', 'NT 10.0'],
                        'RT'        : 'ARM'
                    }
                }
            }
        };
    
    
        //////////////
        // Regex map
        /////////////
    
    
        var regexes = {
    
            browser : [[
    
                // Presto based
                /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
                /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
                /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
                /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80
                ], [NAME, VERSION], [
    
                /(OPiOS)[\/\s]+([\w\.]+)/i                                          // Opera mini on iphone >= 8.0
                ], [[NAME, 'Opera Mini'], VERSION], [
    
                /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
                ], [[NAME, 'Opera'], VERSION], [
    
                // Mixed
                /(kindle)\/([\w\.]+)/i,                                             // Kindle
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
                                                                                    // Lunascape/Maxthon/Netfront/Jasmine/Blazer
    
                // Trident based
                /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                                                                                    // Avant/IEMobile/SlimBrowser/Baidu
                /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer
    
                // Webkit/KHTML based
                /(rekonq)\/([\w\.]+)*/i,                                            // Rekonq
                /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i
                                                                                    // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS
                ], [NAME, VERSION], [
    
                /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
                ], [[NAME, 'IE'], VERSION], [
    
                /(edge)\/((\d+)?[\w\.]+)/i                                          // Microsoft Edge
                ], [NAME, VERSION], [
    
                /(yabrowser)\/([\w\.]+)/i                                           // Yandex
                ], [[NAME, 'Yandex'], VERSION], [
    
                /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
                ], [[NAME, /_/g, ' '], VERSION], [
    
                /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
                                                                                    // Chrome/OmniWeb/Arora/Tizen/Nokia
                /(qqbrowser)[\/\s]?([\w\.]+)/i
                                                                                    // QQBrowser
                ], [NAME, VERSION], [
    
                /(uc\s?browser)[\/\s]?([\w\.]+)/i,
                /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,
                /JUC.+(ucweb)[\/\s]?([\w\.]+)/i
                                                                                    // UCBrowser
                ], [[NAME, 'UCBrowser'], VERSION], [
    
                /(dolfin)\/([\w\.]+)/i                                              // Dolphin
                ], [[NAME, 'Dolphin'], VERSION], [
    
                /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
                ], [[NAME, 'Chrome'], VERSION], [
    
                /XiaoMi\/MiuiBrowser\/([\w\.]+)/i                                   // MIUI Browser
                ], [VERSION, [NAME, 'MIUI Browser']], [
    
                /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i         // Android Browser
                ], [VERSION, [NAME, 'Android Browser']], [
    
                /FBAV\/([\w\.]+);/i                                                 // Facebook App for iOS
                ], [VERSION, [NAME, 'Facebook']], [
    
                /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
                ], [VERSION, [NAME, 'Firefox']], [
    
                /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
                ], [VERSION, [NAME, 'Mobile Safari']], [
    
                /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
                ], [VERSION, NAME], [
    
                /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
                ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [
    
                /(konqueror)\/([\w\.]+)/i,                                          // Konqueror
                /(webkit|khtml)\/([\w\.]+)/i
                ], [NAME, VERSION], [
    
                // Gecko based
                /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
                ], [[NAME, 'Netscape'], VERSION], [
                /(swiftfox)/i,                                                      // Swiftfox
                /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                                                                    // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
                /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
                                                                                    // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
                /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla
    
                // Other
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                                                                    // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
                /(links)\s\(([\w\.]+)/i,                                            // Links
                /(gobrowser)\/?([\w\.]+)*/i,                                        // GoBrowser
                /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
                /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
                ], [NAME, VERSION]
    
                /* /////////////////////
                // Media players BEGIN
                ////////////////////////
    
                , [
    
                /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
                /(coremedia) v((\d+)[\w\._]+)/i
                ], [NAME, VERSION], [
    
                /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
                ], [NAME, VERSION], [
    
                /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
                ], [NAME, VERSION], [
    
                /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
                                                                                    // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
                                                                                    // NSPlayer/PSP-InternetRadioPlayer/Videos
                /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
                /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
                /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
                ], [NAME, VERSION], [
                /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
                ], [NAME, VERSION], [
    
                /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
                ], [[NAME, 'Flip Player'], VERSION], [
    
                /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
                                                                                    // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
                ], [NAME], [
    
                /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
                                                                                    // Gstreamer
                ], [NAME, VERSION], [
    
                /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
                /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
                                                                                    // Java/urllib/requests/wget/cURL
                /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
                ], [NAME, VERSION], [
    
                /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
                ], [[NAME, /_/g, ' '], VERSION], [
    
                /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
                                                                                    // MPlayer SVN
                ], [NAME, VERSION], [
    
                /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
                ], [NAME, VERSION], [
    
                /(mplayer)/i,                                                       // MPlayer (no other info)
                /(yourmuze)/i,                                                      // YourMuze
                /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
                ], [NAME], [
    
                /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
                ], [NAME, VERSION], [
    
                /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
                ], [NAME, VERSION], [
    
                /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
                ], [NAME, VERSION], [
    
                /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
                /(winamp)\s((\d+)[\w\.-]+)/i,
                /(winamp)mpeg\/((\d+)[\w\.-]+)/i
                ], [NAME, VERSION], [
    
                /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
                                                                                    // inlight radio
                ], [NAME], [
    
                /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
                                                                                    // QuickTime/RealMedia/RadioApp/RadioClientApplication/
                                                                                    // SoundTap/Totem/Stagefright/Streamium
                ], [NAME, VERSION], [
    
                /(smp)((\d+)[\d\.]+)/i                                              // SMP
                ], [NAME, VERSION], [
    
                /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
                /(vlc)\/((\d+)[\w\.-]+)/i,
                /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
                /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
                /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
                ], [NAME, VERSION], [
    
                /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
                /(windows-media-player)\/((\d+)[\w\.-]+)/i
                ], [[NAME, /-/g, ' '], VERSION], [
    
                /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
                                                                                    // Windows Media Server
                ], [VERSION, [NAME, 'Windows']], [
    
                /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
                ], [NAME, VERSION], [
    
                /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
                /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
                ], [[NAME, 'rad.io'], VERSION]
    
                //////////////////////
                // Media players END
                ////////////////////*/
    
            ],
    
            cpu : [[
    
                /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
                ], [[ARCHITECTURE, 'amd64']], [
    
                /(ia32(?=;))/i                                                      // IA32 (quicktime)
                ], [[ARCHITECTURE, util.lowerize]], [
    
                /((?:i[346]|x)86)[;\)]/i                                            // IA32
                ], [[ARCHITECTURE, 'ia32']], [
    
                // PocketPC mistakenly identified as PowerPC
                /windows\s(ce|mobile);\sppc;/i
                ], [[ARCHITECTURE, 'arm']], [
    
                /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
                ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [
    
                /(sun4\w)[;\)]/i                                                    // SPARC
                ], [[ARCHITECTURE, 'sparc']], [
    
                /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                                                                                    // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
                ], [[ARCHITECTURE, util.lowerize]]
            ],
    
            device : [[
    
                /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i                         // iPad/PlayBook
                ], [MODEL, VENDOR, [TYPE, TABLET]], [
    
                /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
                ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [
    
                /(apple\s{0,1}tv)/i                                                 // Apple TV
                ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [
    
                /(archos)\s(gamepad2?)/i,                                           // Archos
                /(hp).+(touchpad)/i,                                                // HP TouchPad
                /(kindle)\/([\w\.]+)/i,                                             // Kindle
                /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
                /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
                ], [VENDOR, MODEL, [TYPE, TABLET]], [
    
                /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i                               // Kindle Fire HD
                ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
                /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i                  // Fire Phone
                ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [
    
                /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
                ], [MODEL, VENDOR, [TYPE, MOBILE]], [
                /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
                ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [
    
                /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                                                                                    // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Huawei/Meizu/Motorola/Polytron
                /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
                /(asus)-?(\w+)/i                                                    // Asus
                ], [VENDOR, MODEL, [TYPE, MOBILE]], [
                /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
                ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
                                                                                    // Asus Tablets
                /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i
                ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [
    
                /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
                /(sony)?(?:sgp.+)\sbuild\//i
                ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
                /(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i
                ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Phone'], [TYPE, MOBILE]], [
    
                /\s(ouya)\s/i,                                                      // Ouya
                /(nintendo)\s([wids3u]+)/i                                          // Nintendo
                ], [VENDOR, MODEL, [TYPE, CONSOLE]], [
    
                /android.+;\s(shield)\sbuild/i                                      // Nvidia
                ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [
    
                /(playstation\s[34portablevi]+)/i                                   // Playstation
                ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [
    
                /(sprint\s(\w+))/i                                                  // Sprint Phones
                ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [
    
                /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i                         // Lenovo tablets
                ], [VENDOR, MODEL, [TYPE, TABLET]], [
    
                /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,                               // HTC
                /(zte)-(\w+)*/i,                                                    // ZTE
                /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
                                                                                    // Alcatel/GeeksPhone/Huawei/Lenovo/Nexian/Panasonic/Sony
                ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [
    
                /(nexus\s9)/i                                                       // HTC Nexus 9
                ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [
    
                /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
                ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
                /(kin\.[onetw]{3})/i                                                // Microsoft Kin
                ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [
    
                                                                                    // Motorola
                /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
                /mot[\s-]?(\w+)*/i,
                /(XT\d{3,4}) build\//i,
                /(nexus\s[6])/i
                ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
                /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
                ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [
    
                /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,
                /((SM-T\w+))/i
                ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
                /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,
                /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
                /sec-((sgh\w+))/i
                ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [
                /(samsung);smarttv/i
                ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
    
                /\(dtv[\);].+(aquos)/i                                              // Sharp
                ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [
                /sie-(\w+)*/i                                                       // Siemens
                ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [
    
                /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
                /(nokia)[\s_-]?([\w-]+)*/i
                ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [
    
                /android\s3\.[\s\w;-]{10}(a\d{3})/i                                 // Acer
                ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [
    
                /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
                ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
                /(lg) netcast\.tv/i                                                 // LG SmartTV
                ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
                /(nexus\s[45])/i,                                                   // LG
                /lg[e;\s\/-]+(\w+)*/i
                ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [
    
                /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
                ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [
    
                /linux;.+((jolla));/i                                               // Jolla
                ], [VENDOR, MODEL, [TYPE, MOBILE]], [
    
                /((pebble))app\/[\d\.]+\s/i                                         // Pebble
                ], [VENDOR, MODEL, [TYPE, WEARABLE]], [
    
                /android.+;\s(glass)\s\d/i                                          // Google Glass
                ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [
    
                /android.+(\w+)\s+build\/hm\1/i,                                        // Xiaomi Hongmi 'numeric' models
                /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,                   // Xiaomi Hongmi
                /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i    // Xiaomi Mi
                ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [
    
                /\s(tablet)[;\/\s]/i,                                               // Unidentifiable Tablet
                /\s(mobile)[;\/\s]/i                                                // Unidentifiable Mobile
                ], [[TYPE, util.lowerize], VENDOR, MODEL]
    
                /*//////////////////////////
                // TODO: move to string map
                ////////////////////////////
    
                /(C6603)/i                                                          // Sony Xperia Z C6603
                ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
                /(C6903)/i                                                          // Sony Xperia Z 1
                ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
    
                /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
                ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
                ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
                ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                /(SM-G313HZ)/i                                                      // Samsung Galaxy V
                ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
                ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
                /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
                ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
                ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
    
                /(R1001)/i                                                          // Oppo R1001
                ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [
                /(X9006)/i                                                          // Oppo Find 7a
                ], [[MODEL, 'Find 7a'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
                /(R2001)/i                                                          // Oppo YOYO R2001
                ], [[MODEL, 'Yoyo R2001'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
                /(R815)/i                                                           // Oppo Clover R815
                ], [[MODEL, 'Clover R815'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
                 /(U707)/i                                                          // Oppo Find Way S
                ], [[MODEL, 'Find Way S'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
    
                /(T3C)/i                                                            // Advan Vandroid T3C
                ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
                /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
                ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
                /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
                ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [
    
                /(V972M)/i                                                          // ZTE V972M
                ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
    
                /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
                ], [VENDOR, MODEL, [TYPE, MOBILE]], [
                /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
                ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
                /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
                ], [VENDOR, MODEL, [TYPE, MOBILE]], [
                /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
                ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
    
                /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
                ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [
    
                /////////////
                // END TODO
                ///////////*/
    
            ],
    
            engine : [[
    
                /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
                ], [VERSION, [NAME, 'EdgeHTML']], [
    
                /(presto)\/([\w\.]+)/i,                                             // Presto
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,     // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
                /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
                /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
                ], [NAME, VERSION], [
    
                /rv\:([\w\.]+).*(gecko)/i                                           // Gecko
                ], [VERSION, NAME]
            ],
    
            os : [[
    
                // Windows based
                /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
                ], [NAME, VERSION], [
                /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
                /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
                ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
                /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
                ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [
    
                // Mobile/Embedded OS
                /\((bb)(10);/i                                                      // BlackBerry 10
                ], [[NAME, 'BlackBerry'], VERSION], [
                /(blackberry)\w*\/?([\w\.]+)*/i,                                    // Blackberry
                /(tizen)[\/\s]([\w\.]+)/i,                                          // Tizen
                /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                                                                                    // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
                /linux;.+(sailfish);/i                                              // Sailfish OS
                ], [NAME, VERSION], [
                /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i                 // Symbian
                ], [[NAME, 'Symbian'], VERSION], [
                /\((series40);/i                                                    // Series 40
                ], [NAME], [
                /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
                ], [[NAME, 'Firefox OS'], VERSION], [
    
                // Console
                /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation
    
                // GNU/Linux based
                /(mint)[\/\s\(]?(\w+)*/i,                                           // Mint
                /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
                /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,
                                                                                    // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                                                                    // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
                /(hurd|linux)\s?([\w\.]+)*/i,                                       // Hurd/Linux
                /(gnu)\s?([\w\.]+)*/i                                               // GNU
                ], [NAME, VERSION], [
    
                /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
                ], [[NAME, 'Chromium OS'], VERSION],[
    
                // Solaris
                /(sunos)\s?([\w\.]+\d)*/i                                           // Solaris
                ], [[NAME, 'Solaris'], VERSION], [
    
                // BSD based
                /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i                   // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
                ], [NAME, VERSION],[
    
                /(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i              // iOS
                ], [[NAME, 'iOS'], [VERSION, /_/g, '.']], [
    
                /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
                /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
                ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [
    
                // Other
                /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,                            // Solaris
                /(haiku)\s(\w+)/i,                                                  // Haiku
                /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,                               // AIX
                /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                                                                                    // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
                /(unix)\s?([\w\.]+)*/i                                              // UNIX
                ], [NAME, VERSION]
            ]
        };
    
    
        /////////////////
        // Constructor
        ////////////////
    
    
        var UAParser =;
    
        UAParser.VERSION = LIBVERSION;
        UAParser.BROWSER = {
            NAME    : NAME,
            MAJOR   : MAJOR, // deprecated
            VERSION : VERSION
        };
        UAParser.CPU = {
            ARCHITECTURE : ARCHITECTURE
        };
        UAParser.DEVICE = {
            MODEL   : MODEL,
            VENDOR  : VENDOR,
            TYPE    : TYPE,
            CONSOLE : CONSOLE,
            MOBILE  : MOBILE,
            SMARTTV : SMARTTV,
            TABLET  : TABLET,
            WEARABLE: WEARABLE,
            EMBEDDED: EMBEDDED
        };
        UAParser.ENGINE = {
            NAME    : NAME,
            VERSION : VERSION
        };
        UAParser.OS = {
            NAME    : NAME,
            VERSION : VERSION
        };
    
    
        ///////////
        // Export
        //////////
    
    
        // check js environment
        if (typeof(exports) !== UNDEF_TYPE) {
            // nodejs env
            if (typeof module !== UNDEF_TYPE && module.exports) {
                exports = module.exports = UAParser;
            }
            exports.UAParser = UAParser;
        } else {
            // requirejs env (optional)
            if (typeof(define) === FUNC_TYPE && define.amd) {
                define("ua-parser-js", [],);
            } else {
                // browser env
                window.UAParser = UAParser;
            }
        }
    
        // jQuery/Zepto specific (optional)
        // Note:
        //   In AMD env the global scope should be kept clean, but jQuery is an exception.
        //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
        //   and we should catch that.
        var $ = window.jQuery || window.Zepto;
        if (typeof $ !== UNDEF_TYPE) {
            var parser = new UAParser();
            $.ua = parser.getResult();
            $.ua.get =;
            $.ua.set =;
        }
    
    })(typeof window === 'object' ? window : this);
        var debug = window.WGCDS_DEBUG || false;
        var console = {
            log: function () {},
            info: function () {},
            debug: function () {},
            warn: function () {},
            error: function () {}
        };
        
        if (debug && window.console) {
            console = window.console;
        }

    /*
    event: GAevent_CDS
    eventCategory: CDSStats
    eventActions:
     - cdsContentRequest (label: consumer|place|locale|spa_id|0; metric: time elapsed from page loading)
     - cdsContentView (label: consumer|place|locale|spa_id|content_id; metric: time elapsed from page loading)
     - cdsContentClick (label: consumer|place|locale|spa_id|content_id; metric: time elapsed from contentView)
     - cdsContentLoad (label: consumer|place|locale|spa_id|content_id; metric: time elapsed from contentRequest)
     - cdsIntegrationError (label: consumer|place|locale|spa_id|0; metric: time elapsed from contentRequest)
     - cdsUnexpectedError (label: consumer|place|locale|spa_id|0; metric: time elapsed from contentRequest)
     */
    
    function GAEventsHandler(data, element) {
        if (!data.gtmDataLayerName) {
            this.dataLayer = null;
            this.data = {};
            return;
        }
    
        this.dataLayer = window[data.gtmDataLayerName];
        if (!this.dataLayer) {
            this._enableDataLayerBuffer(data.gtmDataLayerName);
        }
    
        this.element = element;
        data = data || {};
        this.data = {
            'event': 'GAevent_CDS',
            'eventCategory': 'CDSStats',
            'eventNonInteraction': true,
            'cds_consumer': data.consumer || '---',
            'cds_place': data.place || '---',
            'cds_locale': data.locale || '---',
            'cds_spaID': data.accountId || 0,
            'cds_contentID': 0
        };
    }
    
    GAEventsHandler.prototype.onRequestStart = function () {
        this._pushEvent('cdsContentRequest');
    };
    
    GAEventsHandler.prototype.onSuccess = function (contentID) {
        this.data['cds_contentID'] = contentID;
        this._pushEvent('cdsContentLoad');
        this._attachEvents();
    };
    
    GAEventsHandler.prototype.onEmptyContent =;
    
    GAEventsHandler.prototype.onError = function (status) {
        var eventName = status && status >= 400 && status < 500 ? 'cdsIntegrationError' : 'cdsUnexpectedError';
        this._pushEvent(eventName);
    };
    
    GAEventsHandler.prototype._pushEvent = function (action, data) {
        if (!this.dataLayer) return;
    
        data = data || {};
        var eventData = {'eventAction': action};
        for (var field in this.data) {
            eventData[field] = data[field] !== void(0) ? data[field] : this.data[field];
        }
        this.dataLayer.push(eventData);
    };
    
    GAEventsHandler.prototype._attachEvents = function () {
        if (!this.element) return;
    
        var self = this,
            onView =,
            onClick =;
    
        this.element.addEventListener('ga_cds_content_view', onView, false);
        this.element.addEventListener('click', onClick, false);
        this.element.classList.add('js-wgcds-ga-track');
    };
    
    GAEventsHandler.prototype._enableDataLayerBuffer = function (dataLayerName) {
        var self = this,
            callback = function () {
                if (!window[dataLayerName]) return;
                self.dataLayer = window[dataLayerName];
                for (var i = 0, l = self.dataLayerBuffer.length; i < l; i++) {
                    window[dataLayerName].push(self.dataLayerBuffer[i]);
                }
                self.dataLayerBuffer = [];
            };
    
        this.dataLayer = this.dataLayerBuffer = [];
        document.addEventListener('ga_cds_gtm_ready', callback, false);
    };
    

    var WGCDS = {};
    
    if ('onload' in new XMLHttpRequest()) {
        WGCDS.XHR = XMLHttpRequest;
    } else {
        // IE8, IE9
        WGCDS.XHR = XDomainRequest;
        WGCDS.XHR.prototype.setRequestHeader =;
    }
    
    WGCDS.encodeData = function (data) {
        if (!data) return '';
        var str = '';
        for (var key in data) str += '&' + key + '=' + encodeURIComponent(data[key]);
        return str.substring(1);
    };
    
    WGCDS.sendRequest = function (url, data, callbacks) {
        var xhr = new WGCDS.XHR(),
            requestID = Math.random().toString(36).substring(2, 15);
        callbacks = callbacks || {};
    
        xhr.open('POST', url, true);
        xhr.timeout = 3000;
        xhr.withCredentials = true;
        xhr.setRequestHeader('Accept', 'application/vnd.wg.cds+json;version=3');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('X-Request-ID', requestID);
    
        xhr.onload = function () {
            typeof callbacks.onSuccess === 'function' && callbacks.onSuccess(requestID, xhr);
        };
        xhr.onloadend = function () {
            typeof callbacks.onComplete === 'function' && callbacks.onComplete(requestID, xhr);
        };
        xhr.onerror = function () {
            typeof callbacks.onError === 'function' && callbacks.onError(requestID, xhr, 'network error');
        };
        xhr.ontimeout = function () {
            typeof callbacks.onError === 'function' && callbacks.onError(requestID, xhr, 'timeout');
        };
        xhr.onabort = function () {
            typeof callbacks.onError === 'function' && callbacks.onError(requestID, xhr, 'aborted');
        };
    
        xhr.send(WGCDS.encodeData(data));
    };
    
    WGCDS.formatDates = function (rootElement) {
        var dateElements = rootElement.querySelectorAll('.js-wgcds-date');
    
        for (var i = 0, l = dateElements.length; i < l; i++) {
            var element = dateElements[i];
            var date = parseInt(element.innerHTML, 10);
            date = new Date(date * 1000);
            element.innerHTML = date.toLocaleString();
        }
    };
    
    WGCDS.initIFrame = function (rootElement, links) {
        var iframes = rootElement.querySelectorAll('.wgcds-iframe');
        var data = {
            links: links,
            sender: 'wgcds'
        };
    
        for (var i = 0, l = iframes.length; i < l; i++) {
            var iframe = iframes[i];
            data['target'] = iframe.getAttribute('data-target');
    
            iframe.onload =;
        }
    };
    

   
    
    EventsHandler.events = {
        hover: ['mouseenter'],
        show: null,
        click: ['click']
    };
    
    EventsHandler.prototype.pushEvent = function (action, data) {
        console.debug(action);
        this.links[action] && WGCDS.sendRequest(this.links[action], data);
    };
    
    EventsHandler.prototype.attachEvent = function (rootElement, actionName, events) {
        var self = this;
        var elements = rootElement.querySelectorAll('.js-wgcds-event-' + actionName);
        var pushEvent =;
    
        for (var i = 0, l = elements.length; i < l; i++) {
            var element = elements[i];
            if (!events) {
                setTimeout(pushEvent, 0);
            } else {
                for (var e in events) {
                    element.addEventListener(events[e], pushEvent, false);
                }
            }
        }
    };
    
    EventsHandler.prototype.attachEvents = function (rootElement) {
        var events = EventsHandler.events;
        for (var actionName in events) {
            this.attachEvent(rootElement, actionName, events[actionName]);
        }
    };
    

    function Loader(selector, config) {
        this.selector = selector !== void(0) ? selector : '.js-wgcds-content-item';
        this.uaData = this._parseUA();
        this._extendConfig(config || {});
    
        if (this.config.requestOnInit) this.request();
    }
    
    Loader.defaults = {
        pluginPrefix: 'wgcds',
        requestOnInit: true,
        parameters: {
            protocol: 'https:',
            host: 'cds.wargaming.net',
            path: '/api/content-request/',
            consumer: document.domain,
            place: null,
            locale: null,
            authorized: false,
            accountId: 0,
            autoInsert: true,
            gtmDataLayerName: 'dataLayer'
        },
        callbacks: {
            onResponse: null,
            onSuccess: null,
            onError: function (element, status, message, requestID) {
                console.error('Error on requesting content: [' + status + '] "' + message + '". Request-ID: ' + requestID);
            },
            onEmptyContent: null
        }
    };
    
    Loader.prototype._mergeFlat = function (config, name, type) {
        var defaults = this.config[name] ||  Loader.defaults[name];
        this.config[name] = this.config[name] || {};
        var configName = config[name];
        for (var option in defaults) {
            var configOpt = configName && configName[option];
            if (type && configOpt && typeof configName[option] !== type) {
                console.error('Wrong argument type for ' + option);
            }
            this.config[name][option] = configOpt !== void(0) ? configOpt : defaults[option];
        }
    };
    
    Loader.prototype._extendConfig = function (config) {
        var defaults = this.config || Loader.defaults;
        this.config = this.config || {};
        this.config.pluginPrefix = config.pluginPrefix || defaults.pluginPrefix;
        this.config.requestOnInit = config.requestOnInit !== void(0) ? config.requestOnInit : defaults.requestOnInit;
        this._mergeFlat(config, 'parameters');
        this._mergeFlat(config, 'callbacks', 'function');
    };
    
    Loader.prototype._getRequestParams = function (data) {
        var params = {
            'consumer': data.consumer,
            'place': data.place,
            'locale': data.locale,
            'is_logged': (data.authorized || data.accountId) ? 1 : 0,
            'account_id': data.accountId || 0
        };
    
        for (var parameter in params) {
            if (params[parameter] == null) {
                console.error('Improperly configured: ' + parameter);
                return null;
            }
        }
    
        for (var uaElement in this.uaData) {
            params[uaElement] = this.uaData[uaElement];
        }
    
        return params;
    };
    
    Loader.prototype._requestContent = function (data, element) {
        var self = this,
            url = 'https://' + data.host + data.path,
            params = this._getRequestParams(data);
    
        if (!params) return;
    
        var gaEventsHandler = new GAEventsHandler(data, element);
        var callbacks = {
            onSuccess: function (requestID, xhr) {
                if (xhr.responseText) {
                    try {
                        var response = JSON.parse(xhr.responseText);
                        if (response.status === 'ok' && response.content) {
                            gaEventsHandler.onSuccess(response['content_id'] || 0);
                            if (data.autoInsert) {
                                element.innerHTML = response.content;
                                WGCDS.formatDates(element);
                                if (response.events) {
                                    var eventsHandler = new EventsHandler(response.events);
                                    eventsHandler.attachEvents(element);
                                    WGCDS.initIFrame(element, eventsHandler.links);
                                }
                            }
                            self.config.callbacks.onSuccess && self.config.callbacks.onSuccess.call(self, element, response, requestID);
                        } else if (response.status === 'ok' && !response.content) {
                            gaEventsHandler.onEmptyContent();
                            self.config.callbacks.onEmptyContent && self.config.callbacks.onEmptyContent.call(self, element, requestID);
                        } else if (response.status === 'error' && response.error) {
                            gaEventsHandler.onError(xhr.status);
                            self.config.callbacks.onError && self.config.callbacks.onError.call(self, element, xhr.status, response.error, requestID);
                        } else {
                            gaEventsHandler.onError();
                            self.config.callbacks.onError && self.config.callbacks.onError.call(self, element, xhr.status, 'unexpected response', requestID);
                        }
                    } catch (e) {
                        console.error(e);
                        gaEventsHandler.onError();
                        self.config.callbacks.onError && self.config.callbacks.onError.call(self, element, xhr.status, 'malformed response:' + e, requestID);
                    }
                } else {
                    gaEventsHandler.onError();
                    self.config.callbacks.onError && self.config.callbacks.onError.call(self, element, xhr.status, 'empty response', requestID);
                }
            },
            onError: function (requestID, xhr, defaultErrorMsg) {
                gaEventsHandler.onError();
                self.config.callbacks.onError && self.config.callbacks.onError.call(self, element, xhr.status, xhr.statusText || defaultErrorMsg, requestID);
            },
            onComplete: function (requestID, xhr) {
                self.config.callbacks.onResponse && self.config.callbacks.onResponse.call(self, element, xhr, requestID);
            }
        };
    
        gaEventsHandler.onRequestStart();
        WGCDS.sendRequest(url, params, callbacks);
    };
    
    Loader.prototype.request = function () {
        if (this.selector) {
            var elements = document.querySelectorAll(this.selector);
            var defaults = this.config.parameters;
            for (var i = 0, l = elements.length; i < l; i++) {
                var element = elements[i];
                var data = {};
                for (var parameter in defaults) {
                    var param = element.getAttribute('data-' + this.config.pluginPrefix + '-' + parameter);
                    data[parameter] = param != null && param !== '' ? param : defaults[parameter];
                }
                this._requestContent(data, element);
            }
        } else {
            this._requestContent(this.config.parameters);
        }
    
        return this;
    };
    
    Loader.prototype.update = function (config, noRequest) {
        this._extendConfig(config || {});
        if (!noRequest) this.request();
    
        return this;
    };
    
    Loader.prototype._parseUA = function () {
        var parser = new UAParser(),
            empty = 'undefined';
    
        return {
            browser: parser.getBrowser().name || empty,
            os: parser.getOS().name || empty,
            device_type: parser.getDevice().type || empty,
            device_vendor: parser.getDevice().vendor || empty
        };
    };
    

    WGCDS.EventsHandler = EventsHandler;
    WGCDS.Loader = Loader;

    window.WGCDS = WGCDS;
})(window);
