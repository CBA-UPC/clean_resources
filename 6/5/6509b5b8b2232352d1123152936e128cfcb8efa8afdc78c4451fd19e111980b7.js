/**
 * Package: buildClock
 *
 * Description:
 * this file is the javascript to generate the watch.
 *
 * Files:
 *  - rolex-core-1.3.5.js
 *
 * License:
 * Copyright (c) 2012, matchbox France http://www.matchbox.fr
 * This program is dual licensed under the GNU General Public License
 * and Simplified BSD license.
 */
(function($) {
    // image folder
    var imgFolder = "img";
    if (Modernizr.retina == true) {
        // TODO
//        imgFolder = "imgRetina";
    }

    // get hands images extension
    var imageExtension = "png";
    if (Modernizr.svg == true) {
        imageExtension = "svg";
    }

    /**
     * Build clock.
     * @param {object} options
     * @returns {undefined}
     */
    $.fn.rolexClock = function(options) {
        // default params
        var params = {
            // CONFIGS
            LANG: 'en', // Language
            contentWidth: 0, // px Width of the content
            contentHeight: 0, // px Height of the content
            flashname: '', // flash filename
            fallback: '', // image filename
            trackingurl: '', /* set the tracking url */
            leadingZeros: false, // Display with leading zero.
            amPm: false, /* set custom offset if city doesn't exist in the list */
            time24hours: true, /* show time in 24 hours format with true */
            showText: true, /* show/hide text and time */
            showTime: false, /* show time only without city */
            showDay: false, /* show day of a week */
            // CLOCKS
            clockWidth: 0, /* width of the clock to be set on top the html file */
            clockHeight: 0, /* height of the clock to be set on top the html file */
            globalXcenter: 0, // center of clock X
            globalYcenter: 0, // center of clock Y
            globalXscale: 0, // scale of clock X
            globalYscale: 0, // scale of clock Y
            handsFolder: 'css/images/hands/green/', // assets folder
            watchContainerID: 'clock', // ID of watch container
            // hands parameters
            handsParams: {
                // imagetype SVG
                svg: {
                    hour: {width: 9}, minute: {width: 10}, second: {width: 10, xrotation: 5}
                },
                // imagetype PNG
                png: {
                    hour: {width: 9}, minute: {width: 10}, second: {width: 10, xrotation: 5}
                }
            },
            forceFlash: false,
            blockcontrollerVisible: false,
            forceFallback: false,
            clocktimeAtEvent: false, //Tells whether we display the time at the event location, defined in listofdates.js or not (not tested yet)
            isCountdownClock: false, // Whether it is a countdown. Defaults to false.
            countdownNumbersOnly: false, // Display only numbers in count
            onclickCity: function() {
                // callback here when "city" is clicked
            },
            onclickYourtime: 
            showDefaultCity: false, // Show the default city if no configurable city is currently active
            showLocalOnly: false, // Whether we show the local time only. Defaults to false.
            dateList: undefined, // List of date
            // COMPETITION
            isCompetitionWithCarousel: false, // Whether it's a competition. Defaults to false.
            competitionParams: {// Competition params.
                interval: 1000, // carousel interval in ms
                tag: 'div' // tagname used
            },
            // CLASSNAME
            blockClass: 'block', // default block class name
            activeClass: 'active'// active block class name
        };
        // methods
        var methods = {
            /**
             * Activate a block time.
             * args:
             * - ID of block
             */
            activeBlock: function() {
                if (typeof arguments[0] === 'string') {
                    var target = $('.block#' + arguments[0]);
                    if (target.length > 0) {
                        target.trigger('click');
                    }
                }
            }
        }
        var _competition = {
            index: -1, // index de départ
            isAnimationActive: true,
            timer: undefined, // timer
            data: [] // event data
        };

        // options calls
        if (options && typeof options === 'string' && methods[options]) {
            return methods[ options ].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (options && typeof options === 'object') {
            params = $.extend({}, params, options);
        }

        function init() {

            // init default event
            var defaultEvent;
            if (params.isCountdownClock) {

                defaultEvent = {
                    city: 'GMT', // {string} city name
                    local: 'Your Time', // {string} local text
                    startDate: "19700101", // {string} start date yyyymmdd
                    endDate: "99990101",
                    offset: 0, // {float} Difference to Greenwich time (GMT) in hours. Ex: -4 for NYC, 5.3 for NewDelhi, 5.45 for Katmandu
                    dst: 0, // {string} Daylight saving time zone
                    cdtext: 'ROLEX COUNTDOWN', // CD text
                    cdyear: "1970", // CD year
                    cdmonth: "11", // CD month
                    cdday: "29", // CD day
                    cdhour: "09", // CD hour
                    cdmin: "00", // CD min
                };

            } else {
                defaultEvent = {
                    city: 'GMT', // {string} city name
                    local: 'Your Time', // {string} local text
                    startDate: "19700101", // {string} start date yyyymmdd
                    endDate: "99990101", // {string} end date yyyymmdd
                    offset: 0, // {float} Difference to Greenwich time (GMT) in hours. Ex: -4 for NYC, 5.3 for NewDelhi, 5.45 for Katmandu
                    dst: 0// {string} Daylight saving time zone
                };
            }

            // si compet, add new property
            if (params.isCompetitionWithCarousel) {
                defaultEvent.competition = {};
            }

            // Add default event.
            if (params.dateList === undefined) {
                params.dateList = [
                    defaultEvent
                ];
            } else {
                // push a default city
                params.dateList.push(defaultEvent);
            }
        }

        init();

        // if NO-JS, fallback static image is shown by default.
        // if JS, fallback static image is hidden and grid is shown.
       

        window.requestAnimFrame = )();

        var image_folder = params.handsFolder;
        var all_parts = new Array("hours", "minutes", "seconds", "top_center");

        var hours_p = new Array;
        hours_p["url"] = "hours." + imageExtension + "";
        hours_p["update_mode"] = "hours_base_12";
        hours_p["width"] = params.handsParams[imageExtension].hour.width;
        hours_p["height"] = 67;
        hours_p["xrotation"] = params.handsParams[imageExtension].hour.width / 2;
        hours_p["yrotation"] = 54;
        hours_p["xcenteroffset"] = 0;
        hours_p["ycenteroffset"] = 0;

        var minutes_p = new Array;
        minutes_p["url"] = "minutes." + imageExtension + "";
        minutes_p["update_mode"] = "minutes_base_60";
        minutes_p["width"] = params.handsParams[imageExtension].minute.width;
        minutes_p["height"] = 77;
        minutes_p["xrotation"] = params.handsParams[imageExtension].minute.width / 2;
        minutes_p["yrotation"] = 62;
        minutes_p["xcenteroffset"] = 0;
        minutes_p["ycenteroffset"] = 0;

        var seconds_p = new Array;
        seconds_p["url"] = "seconds." + imageExtension + "";
        seconds_p["update_mode"] = "seconds_base_60";
        seconds_p["width"] = params.handsParams[imageExtension].second.width;
        seconds_p["height"] = 92;
        seconds_p["xrotation"] = params.handsParams[imageExtension].second.xrotation;
        seconds_p["yrotation"] = 72;
        seconds_p["xcenteroffset"] = 0;
        seconds_p["ycenteroffset"] = 0;
        seconds_p["watch_x_center"] = 0;
        seconds_p["watch_y_center"] = 0;

        var top_center_p = new Array;
        top_center_p["url"] = "center.png";
        top_center_p["update_mode"] = "seconds_base_60";
        top_center_p["width"] = 7;
        top_center_p["height"] = 7;
        top_center_p["xcenteroffset"] = -.5;
        top_center_p["ycenteroffset"] = 0;
        top_center_p["xrotation"] = top_center_p["width"]/2;
        top_center_p["yrotation"] = top_center_p["height"]/2;
        top_center_p["watch_x_center"] = 0;
        top_center_p["watch_y_center"] = 0;

        var cyclop_mask_p = new Array;

        var global_watch_p = new Array;
        global_watch_p["rotation_angle"] = 0;
        global_watch_p["width"] = params.clockWidth;
        global_watch_p["height"] = params.clockHeight;
        global_watch_p["xscale"] = params.globalXscale;
        global_watch_p["yscale"] = params.globalYscale;

        function countProperties(a) {
            var b = 0;
            for (var c in a) {
                if (a.hasOwnProperty(c))
                    ++b
            }
            return b
        }
//        function onImageLoaded(a) {
////            console.log(all_p_to_be_loaded)
//            all_p_to_be_loaded--;
//            if (all_p_to_be_loaded == 0) {
//            }
//        }

        var partsContainer = document.createElement('div');
        partsContainer.style.position = "absolute";
        partsContainer.style.width = "1px";
        partsContainer.style.height = "1px";
        partsContainer.style.padding = "0";
        partsContainer.style.margin = "-2px";
        partsContainer.style.overflow = "hidden";
        partsContainer.style.clip = "rect(0, 0, 0, 0)";
        partsContainer.style.border = "0";
        document.getElementsByTagName('body')[0].appendChild(partsContainer);

        /* load sprite */
        var loadSpriteErrors = [];
        function loadSprite(i, src) {
//            console.log("i=" + i + "; src=" + src);
            var deferred = $.Deferred();
            all_p[i]["image"] = document.createElement('img');
            all_p[i]["image"].id = "p_" + all_parts[i];
            all_p[i]["image"].onload =;
            all_p[i]["image"].onerror = function() {
                loadSpriteErrors.push(src);
                $('.content').hide();
                $('.fallback').show();
            }
            partsContainer.appendChild(all_p[i]["image"]);
            all_p[i]["image"].src = src;
            return deferred.promise();
        }
        var all_p = new Array;
        var all_p_to_be_loaded = all_parts.length;
        for (i = 0; i < all_parts.length; i++) {
            all_p[i] = eval(all_parts[i] + "_p");
        }
        var loaders = [];
        for (var i = 0; i < all_parts.length; i++) {
            if (all_p[i]["url"] != null) {
                // loads img
                loaders.push(loadSprite(i, image_folder + all_p[i]["url"]));
                if (!all_p[i]["fileformat"]) {
                    all_p[i]["fileformat"] = all_p[i]["url"].substring(all_p[i]["url"].length - 3, all_p[i]["url"].length)
                }
            } else {
                all_p_to_be_loaded--
            }
            if (!all_p[i]["xcenteroffset"]) {
                all_p[i]["xcenteroffset"] = 0
            }
            if (!all_p[i]["ycenteroffset"]) {
                all_p[i]["ycenteroffset"] = 0
            }
            if (!all_p[i]["xoriginoffset"]) {
                all_p[i]["xoriginoffset"] = null
            }
            if (!all_p[i]["yoriginoffset"]) {
                all_p[i]["yoriginoffset"] = null
            }
            if (!all_p[i]["xcenter"]) {
                all_p[i]["xcenter"] = 0
            }
            if (!all_p[i]["ycenter"]) {
                all_p[i]["ycenter"] = 0
            }
            if (!all_p[i]["update_mode"]) {
                all_p[i]["update_mode"] = null
            }
            if (!all_p[i]["watch_x_center"]) {
                all_p[i]["offset_alternate_x_center"] = 0
            } else {
                all_p[i]["offset_alternate_x_center"] = global_watch_p[all_p[i]["watch_x_center"]] - global_watch_p["xcenter"]
            }
            if (!all_p[i]["watch_y_center"]) {
                all_p[i]["offset_alternate_y_center"] = -4
            } else {
                all_p[i]["offset_alternate_y_center"] = global_watch_p[all_p[i]["watch_y_center"]] - global_watch_p["ycenter"]
            }
        }

        /* load simultaneously all sprites */
        $.when.apply(null, loaders).done(function() {
            // callback when everything was loaded
            all_p_to_be_loaded -= loaders.length;// decrement the number of images to load.
        });

        function f_calculate_additional_vars() {
            if (GLOBAL_LIGHT_SOURCE != undefined) {
                TOP_LIGHT_START = GLOBAL_LIGHT_SOURCE - 90;
                TOP_LIGHT_END = GLOBAL_LIGHT_SOURCE + 90;
                BOTTOM_LIGHT_START = GLOBAL_LIGHT_SOURCE - 90;
                BOTTOM_LIGHT_END = GLOBAL_LIGHT_SOURCE + 90;
                TOP_SHADE_START = GLOBAL_LIGHT_SOURCE + 90;
                TOP_SHADE_END = GLOBAL_LIGHT_SOURCE - 90;
                BOTTOM_SHADE_START = GLOBAL_LIGHT_SOURCE + 90;
                BOTTOM_SHADE_END = GLOBAL_LIGHT_SOURCE - 90;
                LEFT_LIGHT_START = GLOBAL_LIGHT_SOURCE;
                LEFT_LIGHT_END = GLOBAL_LIGHT_SOURCE + 180;
                RIGHT_LIGHT_START = GLOBAL_LIGHT_SOURCE + 180;
                RIGHT_LIGHT_END = GLOBAL_LIGHT_SOURCE;
                LEFT_SHADE_START = GLOBAL_LIGHT_SOURCE + 180;
                LEFT_SHADE_END = GLOBAL_LIGHT_SOURCE;
                RIGHT_SHADE_START = GLOBAL_LIGHT_SOURCE;
                RIGHT_SHADE_END = GLOBAL_LIGHT_SOURCE + 180
            }
            if (GLOBAL_MIN_ALPHA != undefined) {
                TOP_LIGHT_MIN = BOTTOM_LIGHT_MIN = TOP_SHADE_MIN = BOTTOM_SHADE_MIN = LEFT_LIGHT_MIN = RIGHT_LIGHT_MIN = LEFT_SHADE_MIN = RIGHT_SHADE_MIN = GLOBAL_MIN_ALPHA
            }
            if (GLOBAL_MAX_ALPHA != undefined) {
                TOP_LIGHT_MAX = BOTTOM_LIGHT_MAX = TOP_SHADE_MAX = BOTTOM_SHADE_MAX = LEFT_LIGHT_MAX = RIGHT_LIGHT_MAX = LEFT_SHADE_MAX = RIGHT_SHADE_MAX = GLOBAL_MAX_ALPHA
            }
            while (TOP_LIGHT_START > TOP_LIGHT_END) {
                TOP_LIGHT_END += 360
            }
            while (BOTTOM_LIGHT_START > BOTTOM_LIGHT_END) {
                BOTTOM_LIGHT_END += 360
            }
            while (TOP_SHADE_START > TOP_SHADE_END) {
                TOP_SHADE_END += 360
            }
            while (BOTTOM_SHADE_START > BOTTOM_SHADE_END) {
                BOTTOM_SHADE_END += 360
            }
            while (LEFT_LIGHT_START > LEFT_LIGHT_END) {
                LEFT_LIGHT_END += 360
            }
            while (RIGHT_LIGHT_START > RIGHT_LIGHT_END) {
                RIGHT_LIGHT_END += 360
            }
            while (LEFT_SHADE_START > LEFT_SHADE_END) {
                LEFT_SHADE_END += 360
            }
            while (RIGHT_SHADE_START > RIGHT_SHADE_END) {
                RIGHT_SHADE_END += 360
            }
            while (TOP_LIGHT_END > 360) {
                TOP_LIGHT_START -= 360;
                TOP_LIGHT_END -= 360
            }
            while (BOTTOM_LIGHT_END > 360) {
                BOTTOM_LIGHT_START -= 360;
                BOTTOM_LIGHT_END -= 360
            }
            while (TOP_SHADE_END > 360) {
                TOP_SHADE_START -= 360;
                TOP_SHADE_END -= 360
            }
            while (BOTTOM_SHADE_END > 360) {
                BOTTOM_SHADE_START -= 360;
                BOTTOM_SHADE_END -= 360
            }
            while (LEFT_LIGHT_END > 360) {
                LEFT_LIGHT_START -= 360;
                LEFT_LIGHT_END -= 360
            }
            while (RIGHT_LIGHT_END > 360) {
                RIGHT_LIGHT_START -= 360;
                RIGHT_LIGHT_END -= 360
            }
            while (LEFT_SHADE_END > 360) {
                LEFT_SHADE_START -= 360;
                LEFT_SHADE_END -= 360
            }
            while (RIGHT_SHADE_END > 360) {
                RIGHT_SHADE_START -= 360;
                RIGHT_SHADE_END -= 360
            }
            if (TOP_LIGHT_START < TOP_LIGHT_END) {
                top_light_max_point = (TOP_LIGHT_START + TOP_LIGHT_END) / 2 % 360;
                top_light_range = TOP_LIGHT_END - TOP_LIGHT_START
            } else {
                top_light_max_point = (TOP_LIGHT_START + TOP_LIGHT_END) % 360 / 2;
                top_light_range = 360 + TOP_LIGHT_END - TOP_LIGHT_START
            }
            top_light_mid_range = top_light_range / 2;
            if (BOTTOM_LIGHT_START < BOTTOM_LIGHT_END) {
                bottom_light_max_point = (BOTTOM_LIGHT_START + BOTTOM_LIGHT_END) / 2 % 360;
                bottom_light_range = BOTTOM_LIGHT_END - BOTTOM_LIGHT_START
            } else {
                bottom_light_max_point = (BOTTOM_LIGHT_START + BOTTOM_LIGHT_END) % 360 / 2;
                bottom_light_range = 360 + BOTTOM_LIGHT_END - BOTTOM_LIGHT_START
            }
            bottom_light_mid_range = bottom_light_range / 2;
            if (TOP_SHADE_START < TOP_SHADE_END) {
                top_shade_max_point = (TOP_SHADE_START + TOP_SHADE_END) / 2 % 360;
                top_shade_range = TOP_SHADE_END - TOP_SHADE_START
            } else {
                top_shade_max_point = (TOP_SHADE_START + TOP_SHADE_END) % 360 / 2;
                top_shade_range = 360 + TOP_SHADE_END - TOP_SHADE_START
            }
            top_shade_mid_range = top_shade_range / 2;
            if (BOTTOM_SHADE_START < BOTTOM_SHADE_END) {
                bottom_shade_max_point = (BOTTOM_SHADE_START + BOTTOM_SHADE_END) / 2 % 360;
                bottom_shade_range = BOTTOM_SHADE_END - BOTTOM_SHADE_START
            } else {
                bottom_shade_max_point = (BOTTOM_SHADE_START + BOTTOM_SHADE_END) % 360 / 2;
                bottom_shade_range = 360 + BOTTOM_SHADE_END - BOTTOM_SHADE_START
            }
            bottom_shade_mid_range = bottom_shade_range / 2;
            if (LEFT_LIGHT_START < LEFT_LIGHT_END) {
                left_light_max_point = (LEFT_LIGHT_START + LEFT_LIGHT_END) / 2 % 360;
                left_light_range = LEFT_LIGHT_END - LEFT_LIGHT_START
            } else {
                left_light_max_point = (LEFT_LIGHT_START + LEFT_LIGHT_END) % 360 / 2;
                left_light_range = 360 + LEFT_LIGHT_END - LEFT_LIGHT_START
            }
            left_light_mid_range = left_light_range / 2;
            if (RIGHT_LIGHT_START < RIGHT_LIGHT_END) {
                right_light_max_point = (RIGHT_LIGHT_START + RIGHT_LIGHT_END) / 2 % 360;
                right_light_range = RIGHT_LIGHT_END - RIGHT_LIGHT_START
            } else {
                right_light_max_point = (RIGHT_LIGHT_START + RIGHT_LIGHT_END) % 360 / 2;
                right_light_range = 360 + RIGHT_LIGHT_END - RIGHT_LIGHT_START
            }
            right_light_mid_range = right_light_range / 2;
            if (LEFT_SHADE_START < LEFT_SHADE_END) {
                left_shade_max_point = (LEFT_SHADE_START + LEFT_SHADE_END) / 2 % 360;
                left_shade_range = LEFT_SHADE_END - LEFT_SHADE_START
            } else {
                left_shade_max_point = (LEFT_SHADE_START + LEFT_SHADE_END) % 360 / 2;
                left_shade_range = 360 + LEFT_SHADE_END - LEFT_SHADE_START
            }
            left_shade_mid_range = left_shade_range / 2;
            if (RIGHT_SHADE_START < RIGHT_SHADE_END) {
                right_shade_max_point = (RIGHT_SHADE_START + RIGHT_SHADE_END) / 2 % 360;
                right_shade_range = RIGHT_SHADE_END - RIGHT_SHADE_START
            } else {
                right_shade_max_point = (RIGHT_SHADE_START + RIGHT_SHADE_END) % 360 / 2;
                right_shade_range = 360 + RIGHT_SHADE_END - RIGHT_SHADE_START
            }
            right_shade_mid_range = right_shade_range / 2
        }
        function getAlphaForRotation(a, b, c) {
            b = 180 * b / Math.PI + 90;
            subf_find_distance_to_max_point = function(a) {
                var c = Math.abs(a - b);
                if (c > 180) {
                    c = Math.abs(180 - (c - 180))
                }
                return c
            };
            var d;
            if (a == "top_light") {
                if (c == "reverse") {
                    this_hand_distance_to_top_light_point = subf_find_distance_to_max_point(-top_light_max_point)
                } else {
                    this_hand_distance_to_top_light_point = subf_find_distance_to_max_point(top_light_max_point)
                }
                if (this_hand_distance_to_top_light_point <= top_light_mid_range) {
                    d = TOP_LIGHT_MIN + (1 - this_hand_distance_to_top_light_point / top_light_mid_range) * (TOP_LIGHT_MAX - TOP_LIGHT_MIN)
                } else {
                    d = TOP_LIGHT_MIN
                }
            } else if (a == "bottom_light") {
                if (c == "reverse") {
                    this_hand_distance_to_bottom_light_point = subf_find_distance_to_max_point(-bottom_light_max_point)
                } else {
                    this_hand_distance_to_bottom_light_point = subf_find_distance_to_max_point(bottom_light_max_point)
                }
                if (180 - this_hand_distance_to_bottom_light_point <= bottom_light_mid_range) {
                    d = BOTTOM_LIGHT_MIN + (1 - (180 - this_hand_distance_to_bottom_light_point) / bottom_light_mid_range) * (BOTTOM_LIGHT_MAX - BOTTOM_LIGHT_MIN)
                } else {
                    d = BOTTOM_LIGHT_MIN
                }
            } else if (a == "top_shade") {
                if (c == "reverse") {
                    this_hand_distance_to_top_shade_point = subf_find_distance_to_max_point(-top_shade_max_point)
                } else {
                    this_hand_distance_to_top_shade_point = subf_find_distance_to_max_point(top_shade_max_point)
                }
                if (this_hand_distance_to_top_shade_point <= top_shade_mid_range) {
                    d = TOP_SHADE_MIN + (1 - this_hand_distance_to_top_shade_point / top_shade_mid_range) * (TOP_SHADE_MAX - TOP_SHADE_MIN)
                } else {
                    d = TOP_SHADE_MIN
                }
            } else if (a == "bottom_shade") {
                if (c == "reverse") {
                    this_hand_distance_to_bottom_shade_point = subf_find_distance_to_max_point(-bottom_shade_max_point)
                } else {
                    this_hand_distance_to_bottom_shade_point = subf_find_distance_to_max_point(bottom_shade_max_point)
                }
                if (180 - this_hand_distance_to_bottom_shade_point <= bottom_shade_mid_range) {
                    d = BOTTOM_SHADE_MIN + (1 - (180 - this_hand_distance_to_bottom_shade_point) / bottom_shade_mid_range) * (BOTTOM_SHADE_MAX - BOTTOM_SHADE_MIN)
                } else {
                    d = BOTTOM_SHADE_MIN
                }
            }
            if (c == "reverse") {
                if (a == "left_light") {
                    this_hand_distance_to_left_light_point = subf_find_distance_to_max_point(-left_light_max_point);
                    if (this_hand_distance_to_left_light_point <= left_light_mid_range) {
                        d = LEFT_LIGHT_MIN + (1 - this_hand_distance_to_left_light_point / left_light_mid_range) * (LEFT_LIGHT_MAX - LEFT_LIGHT_MIN)
                    } else {
                        d = LEFT_LIGHT_MIN
                    }
                } else if (a == "right_light") {
                    if (this_hand_distance_to_right_light_point <= right_light_mid_range) {
                        d = RIGHT_LIGHT_MIN + (1 - this_hand_distance_to_right_light_point / right_light_mid_range) * (RIGHT_LIGHT_MAX - RIGHT_LIGHT_MIN)
                    } else {
                        d = RIGHT_LIGHT_MIN
                    }
                } else if (a == "left_shade") {
                    this_hand_distance_to_left_shade_point = subf_find_distance_to_max_point(-left_shade_max_point);
                    if (this_hand_distance_to_left_shade_point <= left_shade_mid_range) {
                        d = (1 - this_hand_distance_to_left_shade_point / left_shade_mid_range) * (LEFT_SHADE_MAX - LEFT_SHADE_MIN)
                    } else {
                        d = LEFT_SHADE_MIN
                    }
                } else if (a == "right_shade") {
                    this_hand_distance_to_right_shade_point = subf_find_distance_to_max_point(-right_shade_max_point);
                    if (this_hand_distance_to_right_shade_point <= right_shade_mid_range) {
                        d = (1 - this_hand_distance_to_right_shade_point / right_shade_mid_range) * (RIGHT_SHADE_MAX - RIGHT_SHADE_MIN)
                    } else {
                        d = RIGHT_SHADE_MIN
                    }
                }
            } else {
                if (a == "left_light") {
                    this_hand_distance_to_left_light_point = subf_find_distance_to_max_point(left_light_max_point);
                    if (this_hand_distance_to_left_light_point <= left_light_mid_range) {
                        d = LEFT_LIGHT_MIN + (1 - this_hand_distance_to_left_light_point / left_light_mid_range) * (LEFT_LIGHT_MAX - LEFT_LIGHT_MIN)
                    } else {
                        d = LEFT_LIGHT_MIN
                    }
                } else if (a == "right_light") {
                    this_hand_distance_to_right_light_point = subf_find_distance_to_max_point(-right_light_max_point);
                    this_hand_distance_to_right_light_point = subf_find_distance_to_max_point(right_light_max_point);
                    if (this_hand_distance_to_right_light_point <= right_light_mid_range) {
                        d = RIGHT_LIGHT_MIN + (1 - this_hand_distance_to_right_light_point / right_light_mid_range) * (RIGHT_LIGHT_MAX - RIGHT_LIGHT_MIN)
                    } else {
                        d = RIGHT_LIGHT_MIN
                    }
                } else if (a == "left_shade") {
                    this_hand_distance_to_left_shade_point = subf_find_distance_to_max_point(left_shade_max_point);
                    if (this_hand_distance_to_left_shade_point <= left_shade_mid_range) {
                        d = LEFT_SHADE_MIN + (1 - this_hand_distance_to_left_shade_point / left_shade_mid_range) * (LEFT_SHADE_MAX - LEFT_SHADE_MIN)
                    } else {
                        d = LEFT_SHADE_MIN
                    }
                } else if (a == "right_shade") {
                    this_hand_distance_to_right_shade_point = subf_find_distance_to_max_point(right_shade_max_point);
                    if (this_hand_distance_to_right_shade_point <= right_shade_mid_range) {
                        d = RIGHT_SHADE_MIN + (1 - this_hand_distance_to_right_shade_point / right_shade_mid_range) * (RIGHT_SHADE_MAX - RIGHT_SHADE_MIN)
                    } else {
                        d = RIGHT_SHADE_MIN
                    }
                }
            }
            return d / 100
        }
        var GLOBAL_LIGHT_SOURCE = 360;
        var GLOBAL_MIN_ALPHA = 0;
        var GLOBAL_MAX_ALPHA = 100;
        var TOP_LIGHT_START = 0;
        var TOP_LIGHT_END = 0;
        var BOTTOM_LIGHT_START = 0;
        var BOTTOM_LIGHT_END = 0;
        var TOP_SHADE_START = 0;
        var TOP_SHADE_END = 0;
        var BOTTOM_SHADE_START = 0;
        var BOTTOM_SHADE_END = 0;
        var LEFT_LIGHT_START = 0;
        var LEFT_LIGHT_END = 0;
        var RIGHT_LIGHT_START = 0;
        var RIGHT_LIGHT_END = 0;
        var LEFT_SHADE_START = 0;
        var LEFT_SHADE_END = 0;
        var RIGHT_SHADE_START = 0;
        var RIGHT_SHADE_END = 0;
        var TOP_LIGHT_MIN = 0;
        var TOP_LIGHT_MAX = 0;
        var BOTTOM_LIGHT_MIN = 0;
        var BOTTOM_LIGHT_MAX = 0;
        var TOP_SHADE_MIN = 0;
        var TOP_SHADE_MAX = 0;
        var BOTTOM_SHADE_MIN = 0;
        var BOTTOM_SHADE_MAX = 0;
        var LEFT_LIGHT_MIN = 0;
        var LEFT_LIGHT_MAX = 0;
        var RIGHT_LIGHT_MIN = 0;
        var RIGHT_LIGHT_MAX = 0;
        var LEFT_SHADE_MIN = 0;
        var LEFT_SHADE_MAX = 0;
        var RIGHT_SHADE_MIN = 0;
        var RIGHT_SHADE_MAX = 0;
        var top_light_max_point = 0;
        var top_light_range = 0;
        var top_light_mid_range = 0;
        var bottom_light_max_point = 0;
        var bottom_light_range = 0;
        var bottom_light_mid_range = 0;
        var top_shade_max_point = 0;
        var top_shade_range = 0;
        var top_shade_mid_range = 0;
        var bottom_shade_max_point = 0;
        var bottom_shade_range = 0;
        var bottom_shade_mid_range = 0;
        f_calculate_additional_vars();
        var updated;
       
       
        var visProp = getHiddenProp();
        if (visProp) {
            var evtname = visProp.replace(/[H|h]idden/, '') + 'visibilitychange';
            document.addEventListener(evtname, visChange);
        }

        function visChange() {
            if (isHidden())
                updated = false;
            else
                updateTime();
        }


// self.onblur = function() { updated = false; }
// self.onfocus = function() { updateTime() }

        function updateTime() {
            if (params.isCountdownClock) {
                if (updated == true) {
                    current_seconds += 1000 / 10;

                    if (current_seconds >= 60) {
                        //console.log(current_seconds)
                        currentTime = new Date;
                        currentTime.setHours(currentTime.getHours() + hoursOffset);
                        currentTime.setMinutes(currentTime.getMinutes() + minutesOffset);
                        currentTime.setSeconds(currentTime.getSeconds() + secondsOffset);
                        current_hours = currentTime.getHours();
                        current_minutes = currentTime.getMinutes();
                        current_seconds = currentTime.getSeconds();
                        current_milliseconds = currentTime.getMilliseconds();
                    }
                    //console.log(currentTime)
                } else {
                    currentTime = new Date;
                    // console.log(current_seconds)
                    currentTime.setHours(currentTime.getHours() + hoursOffset);
                    currentTime.setMinutes(currentTime.getMinutes() + minutesOffset);
                    currentTime.setSeconds(currentTime.getSeconds() + secondsOffset);
                    monthdate = currentTime.getDate();// n¬¨¬®¬¨¬Æ¬¨¬®¬¨√Ü‚Äö√Ñ√∂‚àö√ë‚àö‚àÇ‚Äö√†√∂‚Äö√Ñ‚Ä†‚Äö√†√∂¬¨‚Ñ¢ du jour local: 0..31
                    weekday_num = currentTime.getDay();// jour de la semaine local: 0=> sun, ..., 6=> sat
                    current_hours = currentTime.getHours();
                    current_minutes = currentTime.getMinutes();
                    current_seconds = currentTime.getSeconds();
                    current_milliseconds = currentTime.getMilliseconds();
                    // console.log(current_seconds,currentTime.getMilliseconds())
                    // console.log(monthdate,weekday_num,current_hours,current_minutes,current_seconds)
                    updated = true;
                }
            } else {
                currentTime = new Date;
                currentTime.setHours(currentTime.getHours() + hoursOffset);
                currentTime.setMinutes(currentTime.getMinutes() + minutesOffset);
                currentTime.setSeconds(currentTime.getSeconds() + secondsOffset);
                monthdate = currentTime.getDate();
                weekday_num = currentTime.getDay();
                current_seconds = currentTime.getSeconds();
                current_minutes = currentTime.getMinutes();
                current_hours = currentTime.getHours();
                current_milliseconds = currentTime.getMilliseconds();
            }
        }
        function setTimeToDefaultTime() {
            currentTime = new Date;
            currentTime.setHours(10);
            currentTime.setMinutes(11);
            currentTime.setSeconds(31);
            monthdate = currentTime.getDate();
            weekday_num = currentTime.getDay();
            current_seconds = currentTime.getSeconds();
            current_minutes = currentTime.getMinutes();
            current_hours = currentTime.getHours();
            current_milliseconds = currentTime.getMilliseconds()
        }
        function updateTimeCalculations() {
            var a = current_hours;
            weekday_num++;
            if (a > 12) {
                a -= 12
            }
            display_calculation["seconds_base_60"] = current_seconds * timeSlice;
            display_calculation["seconds_base_60"] += current_milliseconds * timeSlice / 1e3;
            display_calculation["seconds_base_60"] += rotCorrect;
            display_calculation["minutes_base_60"] = current_minutes * timeSlice;
            display_calculation["minutes_base_60"] += current_seconds * timeSlice / 60;
            display_calculation["minutes_base_60"] += rotCorrect;
            display_calculation["minutes_base_30"] = current_minutes * timeSlice * 2;
            display_calculation["minutes_base_30"] += current_seconds * timeSlice * 2 / 60;
            display_calculation["minutes_base_30"] += rotCorrect;
            display_calculation["hours_base_12"] = a * timeSlice * 5;
            display_calculation["hours_base_12"] += current_minutes * timeSlice / 12;
            display_calculation["hours_base_12"] += rotCorrect;
            display_calculation["monthdate_base_31"] = monthdate * (timeSlice / 6) * (360 / 31);
            display_calculation["monthdate_base_31"] += rotCorrect
        }
        function easeInOutQuad(a, b, c, d) {
            if (a < d / 2)
                return 2 * c * a * a / (d * d) + b;
            ts = a - d / 2;
            return -2 * c * ts * ts / (d * d) + 2 * c * ts / d + c / 2 + b
        }
        function setHoursOffset(a) {
            hoursOffset = a
        }
      }
        function setSecondsOffset(a) {
            secondsOffset = a
        }
        function getCurrentShownTime() {
            var a = "";
            if (current_hours < 10) {
                a += "0"
            }
            a += current_hours;
            a += ":";
            if (current_minutes < 10) {
                a += "0"
 yOnce() {
            updateTimeCalculations();
            updateDisplay()
        }
        function updateOnTimeDisplayOvertime() {
            updateTime();
            updateOnTimeDisplayOnce();
            timeoutID = window.setTimeout(updateOnTimeDisplayOvertime, tickDelay)
        }
        var ticks_per_seconds = 10;
        var parts_starting_z_index = 23;
        var tickDelay = 1e3 / ticks_per_seconds;
        var timeSlice = Math.PI * 2 / 60;
        var rotCorrect = global_watch_p["rotation_angle"] * (timeSlice / 6);
        var display_calculation = new Array;
        var currentTime = null;
        var hoursOffset = 0;
        var minutesOffset = 0;
        var secondsOffset = 0;
        var monthdate = null;
        var weekday_num = null;
        var current_seconds = null;
        var current_minutes = null;
        var current_hours = null;
        var current_milliseconds = null;
        var canvasId = 'regular_timepiece_canvas';
        var watchContainer = params.watchContainerID;
        var canvasParent = document.getElementById(canvasId);
        function prepareTimepieceElements() {
            if (prepareTimepieceElementsIsDone == false) {
                for (i = 0; i < all_parts.length; i++) {
                    if (all_p[i]["update_mode"] == "monthdate" || all_p[i]["update_mode"] == "weekday") {
                        if (all_p[i]["url"] == null) {
                            var a = document.createElement("DIV")
                        } else {
                            var a = document.createElement("CANVAS")
                        }
                        document.getElementById(watchContainer).appendChild(a);
                        if (typeof G_vmlCanvasManager != "undefined") {
                            a = G_vmlCanvasManager.initElement(a)
                        }
                        a.setAttribute("id", all_parts[i] + "_div");
                        a.style.position = "absolute";
                        a.style.width = all_p[i]["width"] + "px";
                        a.style.height = all_p[i]["height"] + "px";
                        a.style.left = all_p[i]["xoriginoffset"] + "px";
                        a.style.top = all_p[i]["yoriginoffset"] + "px";
                        if (all_p[i]["url"] == null) {
                            a.style.color = "#" + all_p[i]["txt_color"];
                            a.style.fontSize = all_p[i]["txt_fontSize"];
                            a.style.fontFamily = "Arial";
                            a.style.textAlign = "center"
                        }
                        parts_starting_z_index += i;
                        a.style.zIndex = parts_starting_z_index
                    }
                }
                var b = document.createElement("CANVAS");
                document.getElementById(watchContainer).appendChild(b);
                if (typeof G_vmlCanvasManager != "undefined") {
                    b = G_vmlCanvasManager.initElement(b)
                }
                b.setAttribute("id", "regular_timepiece_canvas");
                b.style.position = "absolute";
                b.setAttribute("width", global_watch_p["width"]);
                b.setAttribute("height", global_watch_p["height"]);
                b.style.zIndex = parts_starting_z_index;
                if (cyclop_mask_p["url"]) {
                    var b = document.createElement("CANVAS");
                    document.getElementById(watchContainer).appendChild(b);
                    if (typeof G_vmlCanvasManager != "undefined") {
                        b = G_vmlCanvasManager.initElement(b)
                    }
                    b.setAttribute("id", "magnified_timepiece_canvas");
                    b.style.position = "absolute";
                    b.setAttribute("width", global_watch_p["width"]);
                    b.setAttribute("height", global_watch_p["height"]);
                    b.style.zIndex = parts_starting_z_index + 1
                }
                prepareTimepieceElementsIsDone = true
            }
        }
        function placeCanvas(a, b, c) {
            a.clearRect(-global_watch_p["width"], -global_watch_p["height"], global_watch_p["width"] * 2, global_watch_p["height"] * 2);
            if (b == false) {
            } else {
                a.save();
                if (c) {
                    a.translate(global_watch_p[c["watch_x_center"]], global_watch_p[c["watch_y_center"]])
                } else {
                    a.translate(global_watch_p["xcenter"], global_watch_p["ycenter"])
                }
            }
        }
        function updateDisplay() {
            if (cyclop_mask_p["url"]) {
                var a = document.getElementById(canvasId);
                var b = a.getContext("2d");
                placeCanvas(b, true);
                drawTimepiece(b, true);
                b.save();
                b.translate(-global_watch_p["xcenter"], -global_watch_p["ycenter"]);
                b.globalCompositeOperation = "destination-in";
                b.drawImage(cyclop_mask_p["image"], 0, 0, cyclop_mask_p["width"], cyclop_mask_p["height"]);
                b.restore();
                b.restore()
            }
            var a = document.getElementById(canvasId);
            if (a.getContext) {
                var b = a.getContext("2d");
                placeCanvas(b, true);
                drawTimepiece(b, false);
                if (cyclop_mask_p["url"]) {
                    b.save();
                    b.translate(-global_watch_p["xcenter"], -global_watch_p["ycenter"]);
                    b.globalCompositeOperation = "destination-out";
                    b.drawImage(cyclop_mask_p["image"], 0, 0, cyclop_mask_p["width"], cyclop_mask_p["height"]);
                    b.restore()
                }
                b.restore();
            } else {
                alert('no context')
            }
        }
        function drawTimepiece(a, b) {
            magnify_x_offset = 0;
            magnify_y_offset = 0;
            magnify_x_scale = 1;
            magnify_y_scale = 1;
            if (b == true) {
                magnify_x_offset = cyclop_mask_p["xcenteroffset"];
                magnify_y_offset = cyclop_mask_p["ycenteroffset"];
                magnify_x_scale = cyclop_mask_p["xscale"];
                magnify_y_scale = cyclop_mask_p["yscale"];
            }
            a.globalCompositeOperation = "source-over";
            for (var i = 0; i < all_parts.length; i++) {
                var c = all_p[i];
                a.save();
                if (all_p[i]["update_mode"] != null) {
                    if (all_p[i]["update_mode"] == "monthdate") {
                        if (all_p[i]["url"] == null) {
                            document.getElementById(all_parts[i] + "_div").innerHTML = monthdate
                        } else {
                            document.getElementById(all_parts[i] + "_div").style.background = "url('" + image_folder + "num_" + monthdate + "." + all_p[i]["fileformat"] + "')"
                        }
                    } else if (all_p[i]["update_mode"] == "weekday") {
                        document.getElementById(all_parts[i] + "_div").style.background = "url('" + image_folder + "weekday_" + weekday_num + "." + all_p[i]["fileformat"] + "')"
                    } else {
                        a.translate(c["xcenteroffset"], c["ycenteroffset"]);
                        a.translate(magnify_x_offset, magnify_y_offset);
                        a.translate(c["offset_alternate_x_center"], c["offset_alternate_y_center"]);
                        a.scale(global_watch_p["xscale"] * magnify_x_scale, global_watch_p["yscale"] * magnify_y_scale);
                        a.rotate(display_calculation[c["update_mode"]]);
                        a.translate(-c["xrotation"], -c["yrotation"]);

//                        var img = c["image"];
//                        console.log(img, c["width"],c["height"])
                        var img = document.getElementById("p_" + all_parts[i]);
//                        console.log("p_" + all_parts[i]);
//                        canvas = document.getElementById(canvasId)
//                        ctx = canvas.getContext('2d')                        
//                        ctx.drawImage(img, 0, 0, c["width"], c["height"]);
                        a.drawImage(img, 0, 0, c["width"], c["height"]);
                        for (var d in all_p[i]["__lightEffects"]) {
                            if (all_p[i]["__lightEffects"][d].height > 0) {
                                a.globalAlpha = getAlphaForRotation(d, display_calculation[c["update_mode"]], "normal");
                                a.drawImage(c["__lightEffects"][d], 0, 0, c["width"], c["height"])
                            }
                        }
                    }
                } else {
                    a.translate(all_p[i]["xcenteroffset"], all_p[i]["ycenteroffset"]);
                    a.translate(-all_p[i]["xcenter"], -all_p[i]["ycenter"]);
                    a.drawImage(all_p[i]["image"], 0, 0, all_p[i]["width"], all_p[i]["height"])
                }
                a.restore()
            }
        }
        function startWatchEngineWhenReady() {
            if (all_p_to_be_loaded < 1) {
                prepareTimepieceElements();
//                updateOnTimeDisplayOvertime();
                window.setTimeout(updateOnTimeDisplayOvertime, 0);
            } else {
                  startWatchEngineWhenReady()
//                })
//            }
        }
        function showStaticWatchOnTime() {
            if (all_p_to_be_loaded < 1) {
                prepareTimepieceElements();
                setTimeToDefaultTime();
                updateOnTimeDisplayOnce()
            } else {
                timeoutID )
            }
        }
        function spinToCurrentTimeAfterDelay(a) {
        }
        var prepareTimepieceElementsIsDone = false;
        var weekday_displayed = false;
        var magnify_x_offset = 0;
        var magnify_y_offset = 0;

        var blockLocal = document.getElementById("yourtime");
        var blockCity = document.getElementById("city");

        var oldIE;
        if ($('html').is('.ie6, .ie7, .ie8, .ie9')) {
            oldIE = true;
        }

        /* vars for countdown  */
        var liftoffTime = new Date();
        liftnt.getElementById(id);
            element.parentNode.removeChild(element);
        }

        function loadListofdates() {

            var language = params.LANG;
            var language = language.toLowerCase();
            var now_date = new Date();


            var year = now_date.getFullYear();
            var month = now_date.getMonth() + 1;
            var day = now_date.getDate();
            if (month < 10) {
                month = "0" + month;
            }
            if (day < 10) {
                day = "0" + day;
            }

            var names = [];
            var timezones = [];
            var timezone_dst = [];
            var timeText = [];

            var cdYear = [];
            var cdMonth = [];
            var cdDay = [];
            var cdHour = [];
            var cdMin = [];
            var ClockRacetext = [];

            var todayfull = Number(year + "" + month + "" + day);
            var index = null;
            for (var i = 0; i < params.dateList.length; i++) {
                if (todayfull >= params.dateList[i].startDate && todayfull <= params.dateList[i].endDate) {
                    index = i;
                    if (language == '' || i == params.dateList.length - 1) {
                        names.push(params.dateList[index].city);
                        timeText.push(params.dateList[index].local)
                    } else {
                        names.push(params.dateList[index].city);
                        timeText.push(params.dateList[index].local)
                    }
                    timezones.push(params.dateList[index].offset);
                    timezone_dst.push(params.dateList[index].dst);

                    if (params.isCountdownClock) {
                        cdYear.push(params.dateList[index].cdyear);
                        cdMonth.push(params.dateList[index].cdmonth);
                        cdDay.push(params.dateList[index].cdday);
                        cdHour.push(params.dateList[index].cdhour);
                        cdMin.push(params.dateList[index].cdmin)

                        ClockRacetext.push(params.dateList[index].cdtext);
                    }

                    if (params.isCompetitionWithCarousel) {
                        _competition.data.push(params.dateList[index]);
                    }
                }
            }

            return {
                names: names,
                timezones: timezones,
                timezone_dst: timezone_dst,
                timeText: timeText,
                cdYear: cdYear,
                cdMonth: cdMonth,
                cdDay: cdDay,
                cdHour: cdHour,
                cdMin: cdMin,
                ClockRacetext: ClockRacetext
            }
        }
        // Update the competition module
        var competitionBlock = document.getElementById('competition');
        function updateCompetition() {

            if (_competition.isAnimationActive) { // si animation toujours active, on rappel
                var index = _competition.index >= (_competition.data.length - 2) ? 0 : _competition.index + 1;// -2 because of default element GMT.
                // pour chaque propriete, on update crée les éléments
                var cur = _competition.data[index];// si le suivant existe
                if (cur) {
                    _competition.index = index;
                    // removing any child nodes
                    while (competitionBlock.lastChild) {
                        competitionBlock.removeChild(competitionBlock.lastChild);
                    }
                    // update texts
//                    console.log(cur);
                    var c = cur.competition;
                    for (var n in c) {
                        var e = document.createElement(params.competitionParams.tag);
                        e.className = 'competition-' + n;
                        e.innerHTML = c[n];
                        competitionBlock.appendChild(e);
                    }

                    updateClock(cur);
                    updateAllTextBlock();

                    _competition.timer = window.setTimeout(updateCompetition, params.competitionParams.interval);
                }
            }

        }
        // Activate/Desactivate animation. Defaults to FALSE.
        function activateCompetition(flag) {
            flag = (typeof flag == 'boolean') ? flag : false;
            _competition.isAnimationActive = flag;
        }
        // Update clock
        function updateClock(data) {

            params.theLocalText = data.timeText[params.LANG];
            params.theCityText = data.city[params.LANG];
            params.customOffset = data.timezone;
            params.theCity = ((data.city[params.LANG]).toLowerCase()).trim();
            params.customDST = data.dst;
            if ($(blockCity).hasClass(params.activeClass))
                showTimeIn('city', params.theCity, params.customOffset, params.customDST);
        }
        // update texts for each block
        function updateAllTextBlock() {
            // update all text block
            document.getElementById("cityText").innerHTML = params.theCityText;
            document.getElementById("localtext").innerHTML = params.theLocalText;
            document.getElementById("city-link").title = params.theCityText.replace('"', '&quot;');
            document.getElementById("local-link").title = params.theLocalText.replace('"', '&quot;');
            document.getElementById("city-link").href = '#' + params.theCityText.replace('"', '&quot;').replace(' ', '_');
            document.getElementById("local-link").href = '#' + params.theLocalText.replace('"', '&quot;').replace(' ', '_');
        }

        // Set times to clock
        var _cityParam = {
            tempOffset: 0,
            cityOffset: 0
        }
        function showTimeIn(selectorID, cityname, offset, timezone, cdYear, cdMonth, cdDay, cdHour, cdMin) {
            if (params.isCountdownClock) {
                if (cityname !== '') {
                    var now = new Date;
                    var tempOffset = now.getTimezoneOffset();
                    tempOffset += 60 * offset;
                    var gettimezoneDST = getDST(new Date(), timezone);
                    if (gettimezoneDST == 100) {
                        // Si heure
                        tempOffset += 60;// on ajoute 1h du DST
                    }

                    if (params.clocktimeAtEvent) {
                        // si fuseau horaire local est en DST, on ajoute 1h
                        var dstMinutes = now.dst() ? 60 : 0;
                        rolexClockCountdown = new Date(cdYear, parseInt(cdMonth) - 1, cdDay, parseInt(cdHour), parseInt(cdMin) + dstMinutes);
                        _cityParam.tempOffset = tempOffset;
                        _cityParam.cityOffset = offset;
                        cityTime();
                        rolexClockCountdownCalc = foreignToLocal(rolexClockCountdown, offset * 100, timezone);
                        setMinutesOffset(_cityParam.tempOffset); // Correct to time at event location
                    } else {
                        // on test la date de l'event du visiteur
                        var event = foreignToLocal(new Date(cdYear, parseInt(cdMonth) - 1, cdDay, parseInt(cdHour), parseInt(cdMin)), offset * 100, timezone);
                        // on retient la difference entre l'offset courant et le std offset à la date de l'event
                        var dstMinutes = now.dst() && !event.dst() ? -60 :
                                !now.dst() && event.dst() ? -60 : 0;
                        _cityParam.tempOffset = tempOffset;
                        _cityParam.cityOffset = offset;
                        cityTime();
                        // on recupere le bon countdown
                        rolexClockCountdownCalc = foreignToLocal(new Date(cdYear, parseInt(cdMonth) - 1, cdDay, parseInt(cdHour), parseInt(cdMin) + dstMinutes), offset * 100, timezone);
                        //setMinutesOffset(tempOffset);
                        setMinutesOffset(_cityParam.tempOffset);
                    }
                }
            } else {
                // Autres...
                var now = new Date;
                var tempOffset = now.getTimezoneOffset();
//                var today = b.getFullYear() + "-" + b.getMonth() + "-" + b.getDate() + "-" + b.getHours();
                if (params.theCityText !== '') {
                    if (cityname) {
                        tempOffset += 60 * offset;
                        var gettimezoneDST = getDST(new Date(), timezone);
                        if (gettimezoneDST == 100) {
                            tempOffset += 60;
                        }
                        setMinutesOffset(tempOffset);
                        _cityParam.tempOffset = tempOffset;
                        _cityParam.cityOffset = offset;
                        cityTime();
                    }
                }
            }
        }

        /* yourTime text clock */
        function yourTime() {
            var a = new Date;
            a.setHours(a.getHours());
            a.setMinutes(a.getMinutes());
            a.setSeconds(a.getSeconds());
            var b = a.getSeconds();
            var c = a.getMinutes();
            var d = a.getHours();
            var e = a.getDay();
            if (params.LANG === 'en') {
                if (e == 0) {
                    var f = "Sun"
                } else if (e == 1) {
                    var f = "Mon"
                } else if (e == 2) {
                    var f = "Tue"
                } else if (e == 3) {
                    var f = "Wed"
                } else if (e == 4) {
                    var f = "Thu"
                } else if (e == 5) {
                    var f = "Fri"
                } else if (e == 6) {
                    var f = "Sat"
                }
            } else if (params.LANG === 'fr') {
                if (e == 0) {
                    var f = "Dim"
                } else if (e == 1) {
                    var f = "Lun"
                } else if (e == 2) {
                    var f = "Mar"
                } else if (e == 3) {
                    var f = "Mer"
                } else if (e == 4) {
                    var f = "Jeu"
                } else if (e == 5) {
                    var f = "Ven"
                } else if (e == 6) {
                    var f = "Sam"
                }
            }
            
            if (params.amPm == true) {
                var g = " ";
                if (d >= 12) {
                    g = " PM"
                } else {
                    g = " AM"
                }
            } else {
                g = ""
            }
            if (params.time24hours == true) {
                g = ""
            } else {
                if (d >= 13) {
                    d -= 12
                } else if (d == 0) {
                    d = 12
                }
            }
            if (params.leadingZeros == true) {
                if (d < 10) {
                    d = "0" + d
                }
            }
            if (params.leadingZeros == false && params.time24hours == true) {
                if (d < 10) {
                    d = "0" + d
                }
            }
            if (c < 10)
                c = "0" + c;

            if (params.showText == true) {
                if (params.showDay == true) {
                    f = f;
                } else {
                    f = "";
                }
                if (!params.showTime) {
                    update = document.getElementById("rolexClockYourTime").innerHTML = f + " " + d + ":" + c + "" + g;
                }
            }
        }
        function cityTime() {
            var cityTime = new Date();
//            console.log(_cityParam.cityOffset , _cityParam.tempOffset)
            cityTime.setHours(cityTime.getHours());
            cityTime.setMinutes(cityTime.getMinutes() + _cityParam.tempOffset);
            cityTime.setSeconds(cityTime.getSeconds());
            var cityTime_millisecondes = cityTime.getMilliseconds();
            var cityTime_seconds = cityTime.getSeconds();
            var cityTime_minutes = cityTime.getMinutes();
            var cityTime_hours = cityTime.getHours();
            var cityTime_day = cityTime.getDay();
            if (params.LANG === 'en') {
                if (cityTime_day == 0) {
                    var f = "Sun"
                } else if (cityTime_day == 1) {
                    var f = "Mon"
                } else if (cityTime_day == 2) {
                    var f = "Tue"
                } else if (cityTime_day == 3) {
                    var f = "Wed"
                } else if (cityTime_day == 4) {
                    var f = "Thu"
                } else if (cityTime_day == 5) {
                    var f = "Fri"
                } else if (cityTime_day == 6) {
                    var f = "Sat"
                }
            } else if (params.LANG === 'fr') {
                if (cityTime_day == 0) {
                    var f = "Dim"
                } else if (cityTime_day == 1) {
                    var f = "Lun"
                } else if (cityTime_day == 2) {
                    var f = "Mar"
                } else if (cityTime_day == 3) {
                    var f = "Mer"
                } else if (cityTime_day == 4) {
                    var f = "Jeu"
                } else if (cityTime_day == 5) {
                    var f = "Ven"
                } else if (cityTime_day == 6) {
                    var f = "Sam"
                }
            }
            // console.log(cityTime_hours)
            if (params.amPm == true) {
                var g = " ";
                if (cityTime_hours >= 12) {
                    g = " PM"
                } else {
                    g = " AM"
                }
            } else {
                g = ""
            }
            if (params.time24hours == true) {
                g = ""
            } else {
                if (cityTime_hours >= 13) {
                    cityTime_hours -= 12
                } else if (cityTime_hours == 0) {
                    cityTime_hours = 12
                }
            }
            if (params.leadingZeros == true) {
                if (cityTime_hours < 10) {
                    cityTime_hours = "0" + cityTime_hours
                }
            }
            if (params.leadingZeros == false && params.time24hours == true) {
                if (cityTime_hours < 10) {
                    cityTime_hours = "0" + cityTime_hours
                }
            }
            if (cityTime_minutes < 10)
                cityTime_minutes = "0" + cityTime_minutes;

            if (params.showText == true) {
                if (params.showDay == true) {
                    f = f;
                } else {
                    f = "";
                }
            }

            if (cityTime_seconds >= 0 && cityTime_seconds < 1) {
                update = document.getElementById("rolexClockCityTime").innerHTML = f + " " + cityTime_hours + ":" + cityTime_minutes + "" + g;

            } else {
                if (checked === undefined && params.showTime == false) {
                    update = document.getElementById("rolexClockCityTime").innerHTML = f + " " + cityTime_hours + ":" + cityTime_minutes + "" + g;
                    var checked = 1;
                }

            }
        }
        function getSeconds() {
            var now = new Date;
            var theSeconds = now.getSeconds()
            if (theSeconds === 0) {
             }
        }
        setInterval(function() {
            getSeconds()
        },1000)
        function roundTime() {
            cityTime();
            yourTime();
        }

        function getOffsetBase10(offset) {
//            console.log(typeof offset)
            var hours = parseInt(offset); // +/- N
            var decimal = offset - hours; // 0.xx
            var newDecimal = decimal / .60;
//            console.log(hours, decimal, newDecimal, hours + newDecimal);
            return hours + newDecimal;
        }


        var flashMode = false;
        /**
         * Build the clock.
         * @param {object} options Options or method name
         * @returns {unresolved}
         */
        function buildClock() {
            $('body').addClass(params.LANG);

            $('.image-fallback').attr('src', 'img/' + params.fallback);

            var container = document.getElementById("rolexClockWim-container");

            if (Modernizr.retina == true) {
//                global_watch_p["xscale"] = params.retinaXscale;
//                global_watch_p["yscale"] = params.retinaYscale;
            }

            var blockLocal = document.getElementById("local");
            var blockCity = document.getElementById("city");

            // render view
            function changeBg(bg) {
                if (params.isCountdownClock) {
                    if (bg == 'full') {
                        // When Countdown is present
                        //document.getElementById("rolexClockWim-container").style.background = "#fff url(''" + imgFolder + "/bg.jpg') no-repeat";
                        global_watch_p["xcenter"] = params.globalXcenter;
                        global_watch_p["ycenter"] = params.globalYcenter;
//                        blockCity.style.display = "block";
                        if (Modernizr.retina == true) {
                            //document.getElementById("rolexClockWim-container").style.background = "transparent url('" + imgFolder + "/bg.jpg') no-repeat";
                            //document.getElementById("rolexClockWim-container").style.backgroundSize = "auto 100%";
                        }
                    } else {

                        //document.getElementById("rolexClockWim-container").style.background = "transparent url('" + imgFolder + "/bg.jpg') no-repeat";
                        global_watch_p["xcenter"] = params.globalXcenter;
                        global_watch_p["ycenter"] = params.globalYcenter;
//                        blockCity.style.display = "block";
                        if (Modernizr.retina == true) {
                            //document.getElementById("rolexClockWim-container").style.background = "transparent url('" + imgFolder + "/bg.jpg') no-repeat";
                            //document.getElementById("rolexClockWim-container").style.backgroundSize = "auto 100%";

                        }

                    }
                } else {
                    global_watch_p["xscale"] = params.globalXscale;
                    global_watch_p["yscale"] = params.globalYscale;
                    global_watch_p["xcenter"] = params.globalXcenter;
                    global_watch_p["ycenter"] = params.globalYcenter;
                    if (bg == 'full') {
                        //document.getElementById("rolexClockWim-container").style.background = "#fff url(''" + imgFolder + "/bg.jpg') no-repeat";
//                        blockCity.style.display = "block";
//                        blockLocal.style.display = "block";
                        if (Modernizr.retina == true) {
                            //document.getElementById("rolexClockWim-container").style.background = "transparent url('" + imgFolder + "/bg.jpg') no-repeat";
                            //document.getElementById("rolexClockWim-container").style.backgroundSize = "auto 100%";
                        }
                    } else {
                        //document.getElementById("rolexClockWim-container").style.background = "transparent url('" + imgFolder + "/bg.jpg') no-repeat";
                        blockLocal.style.display = "none";
                        blockCity.style.display = "none";
                        if (Modernizr.retina == true) {
                            //document.getElementById("rolexClockWim-container").style.background = "transparent url('" + imgFolder + "/bg.jpg') no-repeat";
                            //document.getElementById("rolexClockWim-container").style.backgroundSize = "auto 100%";

                        }
                    }
                }

            }

            if (!params.forceFallback && !params.forceFlash && Modernizr.canvas == true && document.compatMode != 'Quirks' && oldIE != true) {
                // Canvas can be used                
                $('.fallback').remove();
                $('.tracker').attr('href', params.trackingurl);

                if (!params.showText) {
                    $(blockCity).hide();
                    $(blockLocal).hide();
                    changeBg('full');
                } else {

                    var e = loadListofdates();
//                    console.log(e);
//                    console.log(_competition);
                    var names = e.names,
                            timezones = e.timezones,
                            timezone_dst = e.timezone_dst,
                            timeText = e.timeText;
                    var cdYear = e.cdYear,
                            cdMonth = e.cdMonth,
                            cdDay = e.cdDay,
                            cdHour = e.cdHour,
                            cdMin = e.cdMin,
                            ClockRacetext = e.ClockRacetext;

                    if (names.length > 0) {

                        if (params.isCountdownClock) {
                            rolexClockRacetext = ClockRacetext[0];
                            $('#racetext').html(rolexClockRacetext);
                        }
                        changeBg('full');

                        // Sets all string to text for each block
                        if (params.isCompetitionWithCarousel) {
                            // compet.
                            if (names.length > 1) {
                                updateCompetition();
                            } else {
                                // fallback
                                $('.ui-loader').hide();
                                $('.fallback').show();
                                return;
                            }
                        } else {
                            params.theLocalText = timeText[0];
                            params.theCityText = names[0];
                            params.customOffset = getOffsetBase10(timezones[0]);
                            params.theCity = (names[0].toLowerCase()).trim();
                            params.customDST = timezone_dst[0];
                        }

                        updateAllTextBlock();

                    } else {
                        // si aucun actif
                        if (params.isCompetitionWithCarousel) {
                            // compet.
                            competitionBlock.style.display = 'none';
                        } else if (params.isCountdownClock) {

                            document.getElementById("cityText").innerHTML = '&nbsp;';
                            document.getElementById("localtext").innerHTML = '&nbsp;';
                            document.getElementById("city-link").title = '&nbsp;';
                            document.getElementById("local-link").title = '&nbsp;';
                            document.getElementById("city-link").href = '#';
                            document.getElementById("local-link").href = '#';
                        } else {

                            changeBg();
                            if (params.showTime == true) {
                                document.getElementById("block-control").removeChild(blockCity);
                                document.getElementById("block-control").removeChild(blockLocal);
                            } else {
                                document.getElementById("cityText").innerHTML = params.theCityText;
                                document.getElementById("localtext").innerHTML = params.theLocalText;
                                document.getElementById("city-link").title = params.theCityText.replace('"', '&quot;');
                                document.getElementById("local-link").title = params.theLocalText.replace('"', '&quot;');
                                document.getElementById("city-link").href = '#' + params.theCityText.replace('"', '&quot;').replace(' ', '_');
                                document.getElementById("local-link").href = '#' + params.theLocalText.replace('"', '&quot;').replace(' ', '_');
                            }
                        }
                    }


                    var thenewOffset,
                            customOffset,
                            elem;

                    blockLocal.onclick = function() {

                        $('.' + params.blockClass + '.' + params.activeClass).removeClass(params.activeClass);
                        $(this).addClass(params.activeClass);

                        showCurrentTime();

                        // callback
                        return params.onclickYourtime();
                    };
                    blockCity.onclick = function() {

                        $('.' + params.blockClass + '.' + params.activeClass).removeClass(params.activeClass);
                        $(this).addClass(params.activeClass);

                        showTimeIn('city', params.theCity, params.customOffset, params.customDST, cdYear, cdMonth, cdDay, cdHour, cdMin);

                        // callback
                        return params.onclickCity();
                    };

                    function updateShownTimeInHTMLComponentOvertime() {
                        updateShownTimeInHTMLComponent();
                        // timeoutID = window.setTimeout("updateShownTimeInHTMLComponentOvertime()", 100)
                        requestAnimFrion showCurrentTime()nent() {
                        tempString = getCurrentShownTime()
                    }
                    if (params.theCity != '') {

                        if (params.isCountdownClock) {
                            //cdYear, cdMonth, cdDay, cdHour, cdMin are Arrays! There's still a default datetime, which is always the last index.
                            showTimeIn('city', params.theCity, params.customOffset, params.customDST, cdYear[0], cdMonth[0], cdDay[0], cdHour[0], cdMin[0]);
                            // start countdown
                            startCountdownPlugin(rolexClockLanguage, rolexClockCountdownCalc);
                        } else {

                            showTimeIn('city', params.theCity, params.customOffset, params.customDST);
                        }
                    }

                    if (params.showLocalOnly) {
                        showCurrentTime();
                    }
                    roundTime();
                }

                startWatchEngine();

                showClock();


            } else {
                // fallback
                $('.ui-loader').hide();
                $('.tracker').attr('href', params.trackingurl);
                $('.content').remove();
                $('.fallback').show();
            }
        }


        /**
         * Callback function called when countdown has expired
         * @returns {undefined}
         */
        function expiration() {
            // add class for triggering styles without CD
            $('.container').addClass('end-countdown');
            params.showLocalOnly = false;
            $('.block-city a').click();
        }

        /**
         * Start countdown plugin.
         * @param {string} lang The language (ex: "en")
         * @returns {undefined}
         */
        function startCountdownPlugin(lang, expirationTime)
        {

            if (params.LANG == "fr") {
                $.countdown.regional['fr'] = {
                    labels: ['Années','Mois','Semaines','Jours','Heures','Mins','Secs'],
                    labels1: ['Année','Mois','Semaine','Jour','Heure','Min','Senction(amount) {
                        return (amount > 1 ? 0 : 1);
                    },
                    digits: ['0','1','2','3','4','5','6','7','8','9'],
                    timeSeparator: ':',
                    isRTL: false
                };
                $.countdown.setDefaults($.countdown.regional['fr']);
            } else if (params.LANG == "zhs") {
                $.countdown.regional['zhs'] = {
                    labels: ['年','月','周','天','时','分','秒'],
                    labels1: ['年','月','周','天','时','分','秒'],
                    compactLabels: ['年','月','周','天'],
                    compactLabels1: ['年','月','周','天'],
                    whichLabels: null,
                    digits: ['0','1','2','3','4','5','6','7','8','9'],
                    timeSeparator: ':',
                    isRTL: false
                };
                $.countdown.setDefaults($.countdown.regional['zhs']);
            } else if (params.LANG == "ja") {
                $.countdown.regional['ja'] = {
                    labels: ['年','月','週','日','時','分','秒'],
                    labels1: ['年','月','週','日','時','分','秒'],
                    compactLabels: ['年','月','週','日'],
                    whichLabels: null,
                    digits: ['0','1','2','3','4','5','6','7','8','9'],
                    timeSeparator: ':',
                    isRTL: false};
                $.countdown.setDefaults($.countdown.regional['ja']);

            } else if (params.LANG == "de") {
                $.countdown.regional['de'] = {
                    labels: ['Jahre', 'Monate', 'Wochen', 'Tage', 'Stunden', 'Min', 'Sek'],
                    labels1: ['Jahr', 'Monat', 'Woche', 'Tag', 'Stunde', 'Min', 'Sek'],
                    compactLabels: ['J', 'M', 'W', 'T'],
                    whichLabels: null,
                    digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
                    timeSeparator: ':', isRTL: false};
                $.countdown.setDefaults($.countdown.regional['de']);
            } else if (params.LANG == "br") {
                $.countdown.regional['br'] = {
                    labels: ['Anos','Meses','Semanas','Dias','Horas','Mins','Segs'],
                    labels1: ['Ano','Mês','Semana','Dia','Hora','Min','Seg'],
                    compactLabels: ['a','m','s','d'],
                    whichLabels: null,
                    digits: ['0','1','2','3','4','5','6','7','8','9'],
                    timeSeparator: ':',
                    isRTL: false};
                $.countdown.setDefaults($.countdown.regional['bra']);
            } else if (params.LANG == "es") {
                $.countdown.regional['es'] = {
                    labels: ['Años','Meses','Semanas','Días','Horas','Mins','Segs'],
                    labels1: ['Año','Mes','Semana','Día','Hora','Min','Seg'],
                    compactLabels: ['a','m','s','d'],
                    whichLabels: null,
                    digits: ['0','1','2','3','4','5','6','7','8','9'],
                    timeSeparator: ':',
                    isRTL: false};
                $.countdown.setDefaults($.countdown.regional['es']);
            } else if (params.LANG == "it") {
                $.countdown.regional['it'] = {
                    labels: ['Anni','Mesi','Settimane','Giorni','Ore','Min','Sec'],
                    labels1: ['Anno','Mese','Settimana','Giorno','Ora','Min','Sec'],
                    compactLabels: ['a','m','s','g'],
                    whichLabels: null,
                    digits: ['0','1','2','3','4','5','6','7','8','9'],
                    timeSeparator: ':',
                    isRTL: false};
                $.countdown.setDefaults($.countdown.regional['it']);
            } else if (params.LANG == "ru") {
                $.countdown.regional['ru'] = {
                    labels: ['Лет','Месяцев','Недель','Дней','Часов','Минут','Секунд'],
                    labels1: ['Год','Месяц','Неделя','День','Час','Минута','Секунда'],
                    labels2: ['Года','Месяца','Недели','Дня','Часа','Минуты','Секунды'],
                    compactLabels: ['л','м','н','д'],
                    compactLabels1: ['г','м','н','д'],
                    whichLabels: function(amount) {
                        var units = amount % 10;
                        var tens = Math.floor((amount % 100) / 10);
                        return (amount === 1 ? 1 : (units >= 2 && units <= 4 && tens !== 1 ? 2 :
                            (units === 1 && tens !== 1 ? 1 : 0)));
                    },
                    digits: ['0','1','2','3','4','5','6','7','8','9'],
                    timeSeparator: ':',
                    isRTL: false};
                $.countdown.setDefaults($.countdown.regional['ru']);
            } else if (params.LANG == "sv") {
                $.countdown.regional['sv'] = {
                    labels: ['År','Månader','Veckor','Dagar','Timmar','Min','Sek'],
                    labels1: ['År','Månad','Vecka','Dag','Timme','Min','Sek'],
                    compactLabels: ['Å','M','V','D'],
                    whichLabels: null,
                    digits: ['0','1','2','3','4','5','6','7','8','9'],
                    timeSeparator: ':',
                    isRTL: false};
                $.countdown.setDefaults($.countdown.regional['sv']);
            } else if (params.LANG == "zh-TW") {
                $.countdown.regional['zh-TW'] = {
                    labels: ['年','月','周','天','時','分','秒'],
                    labels1: ['年','月','周','天','時','分','秒'],
                    compactLabels: ['年','月','周','天'],
                    compactLabels1: ['年','月','周','天'],
                    whichLabels: null,
                    digits: ['0','1','2','3','4','5','6','7','8','9'],
                    timeSeparator: ':',
                    isRTL: false};
                $.countdown.setDefaults($.countdown.regional['zh-TW']);
            } else if (params.LANG == "ar") {
                $.countdown.regional['ar'] = {
                    labels: ['سنوات','أشهر','أسابيع','أيام','ساعات','دقائق','ثواني'],
                    labels1: ['سنة','شهر','أسبوع','يوم','ساعة','دقيقة','ثانية'],
                    compactLabels: ['س','ش','أ','ي'],
                    whichLabels: null,
                    digits: ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'],
                    timeSeparator: ':',
                    isRTL: true};
                $.countdown.setDefaults($.countdown.regional['ar']);
            }
            else {

            }
            // console.log(expirationTime)
            if (expirationTime !== undefined) {
                $('.container').addClass('has-countdown').removeClass('no-countdown');
                var ctdays = '';
                var cthours = '';
                var ctmins = '';
                var ctsecs = '';
                var tpl = '';
                var tpl2 = '';
                // $('.days').countdown({
                //     until: expirationTime,
                //     significant: 0,
                //     format: 'DHMS',
                //     alwaysExpire: true,
                //     layout: ctdays});
                // $('.hours').countdown({
                //     until: expirationTime,
                //     significant: 0,
                //     format: 'DHMS',
                //     alwaysExpire: true,
                //     layout: cthours});
                // $('.mins').countdown({
                //     until: expirationTime,
                //     significant: 0,
                //     format: 'DHMS',
                //     alwaysExpire: true,
                //     layout: ctmins});
                // $('.secs').countdown({
                //     until: expirationTime,
                //     significant: 0,
                //     format: 'DHMS',
                //     alwaysExpire: true,
                //     layout: ctsecs});
                if (!params.countdownNumbersOnly && $('.container').hasClass('ctdwn-twolines-horizontal')) {
                    tpl = '<ul class="cd-listview">'
                            + '<li class="cd-days">{dnn}</li><span></span><li class="cd-hours">{hnn}</li><span></span>'
                            + '<li class="cd-minutes">{mnn}</li><span></span><li class="cd-seconds">{snn}</li></ul>'
                    tpl2 = '<ul class="cd-listview">'
                            + '{d<}<li class="days">{dl}</li>{d>}{h<}<li class="hours">{hl}</li>{h>}'
                            + '{m<}<li class="minutes">{ml}</li>{m>}{s<}<li class="seconds">{sl}</li>{s>}</ul>';

                    $('#watch_countdown_text').countdown({
                        until: expirationTime,
                        significant: 0,
                        format: 'DHMS',
                        alwaysExpire: true,
                        layout: tpl2
                    });
                    $('#watch_countdown').countdown({
                        until: expirationTime,
                        significant: 0,
                        format: 'DHMS',
                        alwaysExpire: true,
                        layout: tpl,
                        onExpiry: expiration
                    });
                } else if (!params.countdownNumbersOnly && $('.container').hasClass('ctdwn-oneline-horizontal')) {
                    ctdays = '{d<}{dl}{d>}';
                    cthours = '{d<}{hl}{d>}';
                    ctmins = '{d<}{ml}{d>}';
                    ctsecs = '{d<}{sl}{d>}';
                    tpl = '<ul class="cd-listview">{y<}<li class="cd-years"><span></span>{yn} {yl}</li>{y>}{o<}<li class="cd-month"><span></span>{on} {ol}</li>{o>}'
                            + '{d<}<li class="cd-days"><span></span>{dnn} {dl}</li>{d>}{h<}<li class="cd-hours"><span></span>{hnn} {hl}</li>{h>}'
                            + '{m<}<li class="cd-minutes"><span></span>{mnn} {ml}</li>{m>}{s<}<li class="cd-seconds"><span></span>{snn} {sl}</li>{s>}</ul>';
                    $('#watch_countdown').countdown({
                        until: expirationTime,
                        significant: 0,
                        format: 'DHMS',
                        alwaysExpire: true,
                        layout: tpl,
                        onExpiry: expiration
                    });
                 } else if (params.countdownNumbersOnly && $('.container').hasClass('ctdwn-oneline-horizontal')) {
                    // console.log("here")
                    ctdays = '{d<}{dl}{d>}';
                    cthours = '{d<}{hl}{d>}';
                    ctmins = '{d<}{ml}{d>}';
                    ctsecs = '{d<}{sl}{d>}';
                    tpl = '<ul class="cd-listview">{y<}<li class="cd-years"><span></span>{yn} </li>{y>}{o<}<li class="cd-months"><span></span>{on} </li>{o>}'
                            + '{d<}<li class="cd-days"><span></span>{dnn} </li>{d>}{h<}<li class="cd-hours"><span></span>{hnn} </li>{h>}'
                            + '{m<}<li class="cd-minutes"><span></span>{mnn} </li>{m>}{s<}<li class="cd-seconds"><span></span>{snn} </li>{s>}</ul>';
                    $('#watch_countdown').countdown({
                        until: expirationTime,
                        significant: 0,
                        format: 'DHMS',
                        alwaysExpire: true,
                        layout: tpl,
                        onExpiry: expiration
                    });
                 } else if (!params.countdownNumbersOnly && $('.container').hasClass('ctdwn-twolinesText-horizontal')) {
                    
                    ctdays = '{d<}{dl}{d>}';
                    cthours = '{d<}{hl}{d>}';
                    ctmins = '{d<}{ml}{d>}';
                    ctsecs = '{d<}{sl}{d>}';
                    tpl = '<ul class="cd-listview">{y<}<li class="cd-years"><span></span>{yn} {yl}</li>{y>}{o<}<li class="cd-month"><span></span>{on} {ol}</li>{o>}'
                            + '{d<}<li class="cd-days"><span></span>{dnn} {dl}</li>{d>}{h<}<li class="cd-hours"><span></span>{hnn} {hl}</li>{h>}'
                            + '{m<}<li class="cd-minutes"><span></span>{mnn} {ml}</li>{m>}{s<}<li class="cd-seconds"><span></span>{snn} {sl}</li>{s>}</ul>';
                    $('#watch_countdown').countdown({
                        until: expirationTime,
                        significant: 0,
                        format: 'DHMS',
                        alwaysExpire: true,
                        layout: tpl,
                        onExpiry: expiration
                    });
                    $('.has-countdown #logo').css({"display": 'block'})
                 } else if (!params.countdownNumbersOnly && $('.container').hasClass('ctdwn-threelines-horizontal')) {
                    // console.log("ctdwn-twolinesNew-horizontal")
                    tpl = '<ul class="cd-listview">'
                            + '<li class="cd-days">{dnn}</li><span></span><li class="cd-hours">{hnn}</li><span></span>'
                            + '<li class="cd-minutes">{mnn}</li><span></span><li class="cd-seconds">{snn}</li></ul>'
                    tpl2 = '<ul class="cd-listview">'
                            + '{d<}<li class="days">{dl}</li>{d>}{h<}<li class="hours">{hl}</li>{h>}'
                            + '{m<}<li class="minutes">{ml}</li>{m>}{s<}<li class="seconds">{sl}</li>{s>}</ul>';
                    $('#watch_countdown').countdown({
                        until: expirationTime,
                        significant: 0,
                        format: 'DHMS',
                        alwaysExpire: true,
                        layout: tpl,
                        onExpiry: expiration
                    });
                    $('#watch_countdown_text').countdown({
                        until: expirationTime,
                        significant: 0,
                        format: 'DHMS',
                        alwaysExpire: true,
                        layout: tpl2
                    });

                } else if (!params.countdownNumbersOnly && $('.container').hasClass('ctdwn-twolinesNew-horizontal')) {
                    // console.log("ctdwn-twolinesNew-horizontal")
                    tpl = '<ul class="cd-listview">'
                            + '<li class="cd-days">{dnn}</li><span>:</span><li class="cd-hours">{hnn}</li><span>:</span>'
                            + '<li class="cd-minutes">{mnn}</li><span>:</span><li class="cd-seconds">{snn}</li></ul>'
                    tpl2 = '<ul class="cd-listview">'
                            + '{d<}<li class="days">{dl}</li>{d>}{h<}<li class="hours">{hl}</li>{h>}'
                            + '{m<}<li class="minutes">{ml}</li>{m>}{s<}<li class="seconds">{sl}</li>{s>}</ul>';
                    $('#watch_countdown').countdown({
                        until: expirationTime,
                        significant: 0,
                        format: 'DHMS',
                        alwaysExpire: true,
                        layout: tpl,
                        onExpiry: expiration
                    });
                    $('#watch_countdown_text').countdown({
                        until: expirationTime,
                        significant: 0,
                        format: 'DHMS',
                        alwaysExpire: true,
                        layout: tpl2
                    });
                 } else if (!params.countdownNumbersOnly && $('.container').hasClass('ctdwn-threelinesNew-horizontal')) {
                    // console.log("ctdwn-twolinesNew-horizontal")
                    tpl = '<ul class="cd-listview">'
                            + '<li class="cd-days">{dnn}</li><span>:</span><li class="cd-hours">{hnn}</li><span>:</span>'
                            + '<li class="cd-minutes">{mnn}</li><span>:</span><li class="cd-seconds">{snn}</li></ul>'
                    tpl2 = '<ul class="cd-listview">'
                            + '{d<}<li class="days">{dl}</li>{d>}{h<}<li class="hours">{hl}</li>{h>}'
                            + '{m<}<li class="minutes">{ml}</li>{m>}{s<}<li class="seconds">{sl}</li>{s>}</ul>';
                    $('#watch_countdown').countdown({
                        until: expirationTime,
                        significant: 0,
                        format: 'DHMS',
                        alwaysExpire: true,
                        layout: tpl,
                        onExpiry: expiration
                    });
                    $('#watch_countdown_text').countdown({
                        until: expirationTime,
                        significant: 0,
                        format: 'DHMS',
                        alwaysExpire: true,
                        layout: tpl2
                    });
                 } else if (params.countdownNumbersOnly && $('.container').hasClass('ctdwn-twolinesNew-horizontal')) {
                    // console.log("ctdwn-twolinesNew-horizontal")
                    tpl = '<ul class="cd-listview">{y<}<li class="cd-years"><span></span>{yn} </li>{y>}{o<}<li class="cd-months"><span></span>{on} </li>{o>}'
                            + '{d<}<li class="cd-days"><span></span>{dnn} </li>{d>}{h<}<li class="cd-hours"><span></span>{hnn} </li>{h>}'
                            + '{m<}<li class="cd-minutes"><span></span>{mnn} </li>{m>}{s<}<li class="cd-seconds"><span></span>{snn} </li>{s>}</ul>';
                    $('#watch_countdown').countdown({
                        until: expirationTime,
                        significant: 0,
                        format: 'DHMS',
                        alwaysExpire: true,
                        layout: tpl,
                        onExpiry: expiration
                    });

                 } else {
                    tpl = '<ul class="cd-listview">{y<}<li class="cd-years"><span></span>{yn} {yl}</li>{y>}{o<}<li class="cd-month"><span></span>{on} {ol}</li>{o>}'
                            + '{d<}<li class="cd-days"><span></span>{dnn} {dl}</li>{d>}{h<}<li class="cd-hours"><span></span>{hnn} {hl}</li>{h>}'
                            + '{m<}<li class="cd-minutes"><span></span>{mnn} {ml}</li>{m>}{s<}<li class="cd-seconds"><span></span>{snn} {sl}</li>{s>}</ul>';
                    $('#watch_countdown').countdown({
                        until: expirationTime,
                        significant: 0,
                        format       
            }
        }
        // build the clock
        buildClock(params);
    };
}(jQuery));

/**
 * Get Standototype.stdTimezoneOffset = function() {
    var jan = new Date(this.getFullYear(), 0, 1);
    var jul = new Date(this.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}
/**
 * Tells whether it is in Daylight Saving Time (Summer Time)
 * @returns {Boolean} DST or not
 */
Date.prototype.dst = function() {
    return this.getTimezoneOffset() < this.stdTimezoneOffset();
}
