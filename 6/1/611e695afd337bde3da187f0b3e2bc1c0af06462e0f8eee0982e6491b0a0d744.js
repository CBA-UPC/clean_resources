
(function ($) {

    $.widget('ui.stars', {
        options: {
            inputType: 'radio', // [radio|select]
            split: 0, // decrease number of stars by splitting each star into pieces [2|3|4|...]
            disabled: false, // set to [true] to make the stars initially disabled
            cancelTitle: 'Cancel Rating',
            cancelValue: 0, // default value of Cancel btn.
            cancelShow: true,
            disableValue: true, // set to [false] to not disable the hidden input when Cancel btn is clicked, so the value will present in POST data.
            oneVoteOnly: false,
            showTitles: false,
            captionEl: null, // jQuery object - target for text captions
            callback: null, // function(ui, type, value, event)

            /*
            * CSS classes
            */
            starWidth: 16, // width of the star image
            cancelClass: 'ui-stars-cancel',
            starClass: 'ui-stars-star',
            starOnClass: 'ui-stars-star-on',
            starHoverClass: 'ui-stars-star-hover',
            starDisabledClass: 'ui-stars-star-disabled',
            cancelHoverClass: 'ui-stars-cancel-hover',
            cancelDisabledClass: 'ui-stars-cancel-disabled'
        },

        _create: function () {
            var self = this, o = this.options, starId = 0;
            this.element.data('former.stars', this.element.html());

            o.isSelect = o.inputType == 'select';
            this.$form = $(this.element).closest('form');
            this.$selec = o.isSelect ? $('select', this.element) : null;
            this.$rboxs = o.isSelect ? $('option', this.$selec) : $(':radio', this.element);

            /*
            * Map all inputs from $rboxs array to Stars elements
            */
            this.$stars = this.$rboxs.map(function (i) {
                var el = {
                    value: this.value,
                    title: (o.isSelect ? this.text : this.title) || this.value,
                    isDefault: (o.isSelect && this.defaultSelected) || this.defaultChecked
                };

                if (i == 0) {
                    o.split = typeof o.split != 'number' ? 0 : o.split;
                    o.val2id = [];
                    o.id2val = [];
                    o.id2title = [];
                    o.name = o.isSelect ? self.$selec.get(0).name : this.name;
                    o.disabled = o.disabled || (o.isSelect ? $(self.$selec).attr('disabled') : $(this).attr('disabled'));
                }

                /*
                * Consider it as a Cancel button?
                */
                if (el.value == o.cancelValue) {
                    o.cancelTitle = el.title;
                    return null;
                }

                o.val2id[el.value] = starId;
                o.id2val[starId] = el.value;
                o.id2title[starId] = el.title;

                if (el.isDefault) {
                    o.checked = starId;
                    o.value = o.defaultValue = el.value;
                    o.title = el.title;
                }

                var $s = $('<div/>').addClass(o.starClass);
                var $a = $('<a/>').attr('title', o.showTitles ? el.title : '').text(el.value);

                /*
                * Prepare division settings
                */
                if (o.split) {
                    var oddeven = (starId % o.split);
                    var stwidth = Math.floor(o.starWidth / o.split);
                    $s.width(stwidth);
                    $a.css('margin-left', '-' + (oddeven * stwidth) + 'px');
                }

                starId++;
                return $s.append($a).get(0);
            });

            /*
            * How many Stars?
            */
            o.items = starId;

            /*
            * Remove old content
            */
            o.isSelect ? this.$selec.remove() : this.$rboxs.remove();

            /*
            * Append Stars interface
            */
            this.$cancel = $('<div/>').addClass(o.cancelClass).append($('<a/>').attr('title', o.showTitles ? o.cancelTitle : '').text(o.cancelValue));
            o.cancelShow &= !o.disabled && !o.oneVoteOnly;
            o.cancelShow && this.element.append(this.$cancel);
            this.element.append(this.$stars);

            /*
            * Initial selection
            */
            if (o.checked === undefined) {
                o.checked = -1;
                o.value = o.defaultValue = o.cancelValue;
                o.title = '';
            }

            /*
            * The only FORM element, that has been linked to the stars control. The value field is updated on each Star click event
            */
            this.$value = $("<input type='hidden' name='" + o.name + "' value='" + o.value + "' />");
            this.element.append(this.$value);


            /*
            * Attach stars event handler
            */
            this.$stars.bind('click.stars', function (e) {
                if (!o.forceSelect && o.disabled) return false;

                var i = self.$stars.index(this);
                o.checked = i;
                o.value = o.id2val[i];
                o.title = o.id2title[i];
                self.$value.attr({ disabled: o.disabled ? 'disabled' : '', value: o.value });

                fillTo(i, false);
                self._disableCancel();

                !o.forceSelect && self.callback(e, 'star');
            })
                .bind('mouseover.stars', function () {
                    if (o.disabled) return false;
                    var i = self.$stars.index(this);
                    fillTo(i, true);
                })
                .bind('mouseout.stars', function () {
                    if (o.disabled) return false;
                    fillTo(self.options.checked, false);
                });


            /*
            * Attach cancel event handler
            */
            this.$cancel.bind('click.stars', function (e) {
                if (!o.forceSelect && (o.disabled || o.value == o.cancelValue)) return false;

                o.checked = -1;
                o.value = o.cancelValue;
                o.title = '';

                self.$value.val(o.value);
                o.disableValue && self.$value.attr({ disabled: 'disabled' });

                fillNone();
                self._disableCancel();

                !o.forceSelect && self.callback(e, 'cancel');
            })
                .bind('mouseover.stars', function () {
                    if (self._disableCancel()) return false;
                    self.$cancel.addClass(o.cancelHoverClass);
                    fillNone();
                    self._showCap(o.cancelTitle);
                })
                .bind('mouseout.stars', function () {
                    if (self._disableCancel()) return false;
                    self.$cancel.removeClass(o.cancelHoverClass);
                    self.$stars.triggerHandler('mouseout.stars');
                });


            /*
            * Attach onReset event handler to the parent FORM
            */
            this.$form.bind('reset.stars', ;


            /*
            * Clean up to avoid memory leaks in certain versions of IE 6
            */
            $(window).unload(function () {
                self.$cancel.unbind('.stars');
                self.$stars.unbind('.stars');
                self.$form.unbind('.stars');
                self.$selec = self.$rboxs = self.$stars = self.$value = self.$cancel = self.$form = null;
            });


            /*
            * Star selection helpers
            */
            function fillTo(index, hover) {
                if (index != -1) {
                    var addClass = hover ? o.starHoverClass : o.starOnClass;
                    var remClass = hover ? o.starOnClass : o.starHoverClass;
                    self.$stars.eq(index).prevAll('.' + o.starClass).addBack().removeClass(remClass).addClass(addClass);
                    self.$stars.eq(index).nextAll('.' + o.starClass).removeClass(o.starHoverClass + ' ' + o.starOnClass);
                    self._showCap(o.id2title[index]);
                }
                else fillNone();
            };
            function fillNone() {
                self.$stars.removeClass(o.starOnClass + ' ' + o.starHoverClass);
                self._showCap('');
            };


            /*
            * Finally, set up the Stars
            */
            this.select(o.value);
            o.disabled && this.disable();

        },

        /*
        * Private functions
        */
        _disableCancel: function () {
            var o = this.options, disabled = o.disabled || o.oneVoteOnly || (o.value == o.cancelValue);
            if (disabled) this.$cancel.removeClass(o.cancelHoverClass).addClass(o.cancelDisabledClass);
            else this.$cancel.removeClass(o.cancelDisabledClass);
            this.$cancel.css('opacity', disabled ? 0.5 : 1);
            return disabled;
        },
        _disableAll: function () {
            var o = this.options;
            this._disableCancel();
            if (o.disabled) this.$stars.filter('div').addClass(o.starDisabledClass);
            else this.$stars.filter('div').removeClass(o.starDisabledClass);
        },
        _showCap: function (s) {
            var o = this.options;
            if (o.captionEl) o.captionEl.text(s);
        },

        /*
        * Public functions
        */
        value: 
        select: function (val) {
            var o = this.options, e = (val == o.cancelValue) ? this.$cancel : this.$stars.eq(o.val2id[val]);
            o.forceSelect = true;
            e.triggerHandler('click.stars');
            o.forceSelect = false;
        },
        selectID: function (id) {
            var o = this.options, e = (id == -1) ? this.$cancel : this.$stars.eq(id);
            o.forceSelect = true;
            e.triggerHandler('click.stars');
            o.forceSelect = false;
        },
        enable: function () {
            this.options.disabled = false;
            this._disableAll();
        },
        disable: 
        destroy: function () {
            this.$form.unbind('.stars');
            this.$cancel.unbind('.stars').remove();
            this.$stars.unbind('.stars').remove();
            this.$value.remove();
            this.element.unbind('.stars').html(this.element.data('former.stars')).removeData('stars');
            return this;
        },
        callback: function (e, type) {
            var o = this.options;
            o.callback && o.callback(this, type, o.value, e);
            o.oneVoteOnly && !o.disabled && this.disable();
        }
    });

    $.extend($.ui.stars, {
        version: '3.0.1'
    });

})(clickd_jquery);/*
* jQuery timepicker addon
* By: Trent Richardson [http://trentrichardson.com]
* Version 0.9.5
* Last Modified: 05/25/2011
*
* Copyright 2011 Trent Richardson
* Dual licensed under the MIT and GPL licenses.
* http://trentrichardson.com/Impromptu/GPL-LICENSE.txt
* http://trentrichardson.com/Impromptu/MIT-LICENSE.txt
*
* HERES THE CSS:
* .ui-timepicker-div .ui-widget-header{ margin-bottom: 8px; }
* .ui-timepicker-div dl{ text-align: left; }
* .ui-timepicker-div dl dt{ height: 25px; }
* .ui-timepicker-div dl dd{ margin: -25px 10px 10px 65px; }
* .ui-timepicker-div td { font-size: 90%; }
*/

(function ($) {

    $.extend($.ui, { timepicker: { version: "0.9.5" } });

    /* Time picker manager.
    Use the singleton instance of this class, $.timepicker, to interact with the time picker.
    Settings for (groups of) time pickers are maintained in an instance object,
    allowing multiple different settings on the same page. */

    function Timepicker() {
        this.regional = []; // Available regional settings, indexed by language code
        this.regional[''] = { // Default regional settings
            currentText: 'Now',
            closeText: 'Done',
            ampm: false,
            timeFormat: 'hh:mm tt',
            timeOnlyTitle: 'Choose Time',
            timeText: 'Time',
            hourText: 'Hour',
            minuteText: 'Minute',
            secondText: 'Second',
            timezoneText: 'Time Zone'
        };
        this._defaults = { // Global defaults for all the datetime picker instances
            showButtonPanel: true,
            timeOnly: false,
            showHour: true,
            showMinute: true,
            showSecond: false,
            showTimezone: false,
            showTime: true,
            stepHour: 0.05,
            stepMinute: 0.05,
            stepSecond: 0.05,
            hour: 0,
            minute: 0,
            second: 0,
            timezone: '+0000',
            hourMin: 0,
            minuteMin: 0,
            secondMin: 0,
            hourMax: 23,
            minuteMax: 59,
            secondMax: 59,
            minDateTime: null,
            maxDateTime: null,
            hourGrid: 0,
            minuteGrid: 0,
            secondGrid: 0,
            alwaysSetTime: true,
            separator: ' ',
            altFieldTimeOnly: true,
            showTimepicker: true,
            timezoneList: ["-1100", "-1000", "-0900", "-0800", "-0700", "-0600",
                "-0500", "-0400", "-0300", "-0200", "-0100", "+0000",
                "+0100", "+0200", "+0300", "+0400", "+0500", "+0600",
                "+0700", "+0800", "+0900", "+1000", "+1100", "+1200"]
        };
        $.extend(this._defaults, this.regional['']);
    }

    $.extend(Timepicker.prototype, {
        $input: null,
        $altInput: null,
        $timeObj: null,
        inst: null,
        hour_slider: null,
        minute_slider: null,
        second_slider: null,
        timezone_select: null,
        hour: 0,
        minute: 0,
        second: 0,
        timezone: '+0000',
        hourMinOriginal: null,
        minuteMinOriginal: null,
        secondMinOriginal: null,
        hourMaxOriginal: null,
        minuteMaxOriginal: null,
        secondMaxOriginal: null,
        ampm: '',
        formattedDate: '',
        formattedTime: '',
        formattedDateTime: '',
        timezoneList: ["-1100", "-1000", "-0900", "-0800", "-0700", "-0600",
            "-0500", "-0400", "-0300", "-0200", "-0100", "+0000",
            "+0100", "+0200", "+0300", "+0400", "+0500", "+0600",
            "+0700", "+0800", "+0900", "+1000", "+1100", "+1200"],

        /* Override the default settings for all instances of the time picker.
        @param  settings  object - the new settings to use as defaults (anonymous object)
        @return the manager object */
        setDefaults: 

        //########################################################################
        // Create a new Timepicker instance
        //########################################################################
        _newInst: function ($input, o) {
            var tp_inst = new Timepicker(),
                inlineSettings = {};

            for (var attrName in this._defaults) {
                var attrValue = $input.attr('time:' + attrName);
                if (attrValue) {
                    try {
                        inlineSettings[attrName] = eval(attrValue);
                    } catch (err) {
                        inlineSettings[attrName] = attrValue;
                    }
                }
            }
            tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, o, {
                beforeShow: function (input, dp_inst) {
                    if ($.isFunction(o.beforeShow))
                        o.beforeShow(input, dp_inst, tp_inst);
                },
                onChangeMonthYear: function (year, month, dp_inst) {
                    // Update the time as well : this prevents the time from disappearing from the $input field.
                    tp_inst._updateDateTime(dp_inst);
                    if ($.isFunction(o.onChangeMonthYear))
                        o.onChangeMonthYear.call($input[0], year, month, dp_inst, tp_inst);
                },
                onClose: function (dateText, dp_inst) {
                    if (tp_inst.timeDefined === true && $input.val() != '')
                        tp_inst._updateDateTime(dp_inst);
                    if ($.isFunction(o.onClose))
                        o.onClose.call($input[0], dateText, dp_inst, tp_inst);
                },
                timepicker: tp_inst // add timepicker as a property of datepicker: $.datepicker._get(dp_inst, 'timepicker');
            });

            tp_inst.hour = tp_inst._defaults.hour;
            tp_inst.minute = tp_inst._defaults.minute;
            tp_inst.second = tp_inst._defaults.second;
            tp_inst.ampm = '';
            tp_inst.$input = $input;

            if (o.altField)
                tp_inst.$altInput = $(o.altField)
                    .css({ cursor: 'pointer' })
                    .focus(;

            // datepicker needs minDate/maxDate, timepicker needs minDateTime/maxDateTime..
            if (tp_inst._defaults.minDate !== undefined && tp_inst._defaults.minDate instanceof Date)
                tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime());
            if (tp_inst._defaults.minDateTime !== undefined && tp_inst._defaults.minDateTime instanceof Date)
                tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime());
            if (tp_inst._defaults.maxDate !== undefined && tp_inst._defaults.maxDate instanceof Date)
                tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime());
            if (tp_inst._defaults.maxDateTime !== undefined && tp_inst._defaults.maxDateTime instanceof Date)
                tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime());

            return tp_inst;
        },

        //########################################################################
        // add our sliders to the calendar
        //########################################################################
        _addTimePicker: 

        //########################################################################
        // parse the time string from input value or _setTime
        //########################################################################
        _parseTime: function (timeString, withDate) {
            var regstr = this._defaults.timeFormat.toString()
                .replace(/h{1,2}/ig, '(\\d?\\d)')
                .replace(/m{1,2}/ig, '(\\d?\\d)')
                .replace(/s{1,2}/ig, '(\\d?\\d)')
                .replace(/t{1,2}/ig, '(am|pm|a|p)?')
                .replace(/z{1}/ig, '((\\+|-)\\d\\d\\d\\d)?')
                .replace(/\s/g, '\\s?') + '$',
                order = this._getFormatPositions(),
                treg;

            if (!this.inst) this.inst = $.datepicker._getInst(this.$input[0]);

            if (withDate || !this._defaults.timeOnly) {
                // the time should come after x number of characters and a space.
                // x = at least the length of text specified by the date format
                var dp_dateFormat = $.datepicker._get(this.inst, 'dateFormat');
                // escape special regex characters in the seperator
                var specials = new RegExp("[.*+?|()\\[\\]{}\\\\]", "g");
                regstr = '.{' + dp_dateFormat.length + ',}' + this._defaults.separator.replace(specials, "\\$&") + regstr;
            }

            treg = timeString.match(new RegExp(regstr, 'i'));

            if (treg) {
                if (order.t !== -1)
                    this.ampm = ((treg[order.t] === undefined || treg[order.t].length === 0) ?
                        '' :
                        (treg[order.t].charAt(0).toUpperCase() == 'A') ? 'AM' : 'PM').toUpperCase();

                if (order.h !== -1) {
                    if (this.ampm == 'AM' && treg[order.h] == '12')
                        this.hour = 0; // 12am = 0 hour
                    else if (this.ampm == 'PM' && treg[order.h] != '12')
                        this.hour = (parseFloat(treg[order.h]) + 12).toFixed(0); // 12pm = 12 hour, any other pm = hour + 12
                    else this.hour = Number(treg[order.h]);
                }

                if (order.m !== -1) this.minute = Number(treg[order.m]);
                if (order.s !== -1) this.second = Number(treg[order.s]);
                if (order.z !== -1) this.timezone = treg[order.z];

                return true;

            }
            return false;
        },

        //########################################################################
        // figure out position of time elements.. cause js cant do named captures
        //########################################################################
        _getFormatPositions: function () {
            var finds = this._defaults.timeFormat.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|t{1,2}|z)/g),
                orders = { h: -1, m: -1, s: -1, t: -1, z: -1 };

            if (finds)
                for (var i = 0; i < finds.length; i++)
                    if (orders[finds[i].toString().charAt(0)] == -1)
                        orders[finds[i].toString().charAt(0)] = i + 1;

            return orders;
        },

        //########################################################################
        // generate and inject html for timepicker into ui datepicker
        //########################################################################
        _injectTimePicker: function () {
            var $dp = this.inst.dpDiv,
                o = this._defaults,
                tp_inst = this,
                // Added by Peter Medeiros:
                // - Figure out what the hour/minute/second max should be based on the step values.
                // - Example: if stepMinute is 15, then minMax is 45.
                hourMax = (o.hourMax - (o.hourMax % o.stepHour)).toFixed(0),
                minMax = (o.minuteMax - (o.minuteMax % o.stepMinute)).toFixed(0),
                secMax = (o.secondMax - (o.secondMax % o.stepSecond)).toFixed(0),
                dp_id = this.inst.id.toString().replace(/([^A-Za-z0-9_])/g, '');

            // Prevent displaying twice
            //if ($dp.find("div#ui-timepicker-div-"+ dp_id).length === 0) {
            if ($dp.find("div#ui-timepicker-div-" + dp_id).length === 0 && o.showTimepicker) {
                var noDisplay = ' style="display:none;"',
                    html = '<div class="ui-timepicker-div" id="ui-timepicker-div-' + dp_id + '"><dl>' +
                        '<dt class="ui_tpicker_time_label" id="ui_tpicker_time_label_' + dp_id + '"' +
                        ((o.showTime) ? '' : noDisplay) + '>' + o.timeText + '</dt>' +
                        '<dd class="ui_tpicker_time" id="ui_tpicker_time_' + dp_id + '"' +
                        ((o.showTime) ? '' : noDisplay) + '></dd>' +
                        '<dt class="ui_tpicker_hour_label" id="ui_tpicker_hour_label_' + dp_id + '"' +
                        ((o.showHour) ? '' : noDisplay) + '>' + o.hourText + '</dt>',
                    hourGridSize = 0,
                    minuteGridSize = 0,
                    secondGridSize = 0,
                    size;

                if (o.showHour && o.hourGrid > 0) {
                    html += '<dd class="ui_tpicker_hour">' +
                        '<div id="ui_tpicker_hour_' + dp_id + '"' + ((o.showHour) ? '' : noDisplay) + '></div>' +
                        '<div style="padding-left: 1px"><table><tr>';

                    for (var h = o.hourMin; h < hourMax; h += o.hourGrid) {
                        hourGridSize++;
                        var tmph = (o.ampm && h > 12) ? h - 12 : h;
                        if (tmph < 10) tmph = '0' + tmph;
                        if (o.ampm) {
                            if (h == 0) tmph = 12 + 'a';
                            else if (h < 12) tmph += 'a';
                            else tmph += 'p';
                        }
                        html += '<td>' + tmph + '</td>';
                    }

                    html += '</tr></table></div>' +
                        '</dd>';
                } else html += '<dd class="ui_tpicker_hour" id="ui_tpicker_hour_' + dp_id + '"' +
                    ((o.showHour) ? '' : noDisplay) + '></dd>';

                html += '<dt class="ui_tpicker_minute_label" id="ui_tpicker_minute_label_' + dp_id + '"' +
                    ((o.showMinute) ? '' : noDisplay) + '>' + o.minuteText + '</dt>';

                if (o.showMinute && o.minuteGrid > 0) {
                    html += '<dd class="ui_tpicker_minute ui_tpicker_minute_' + o.minuteGrid + '">' +
                        '<div id="ui_tpicker_minute_' + dp_id + '"' +
                        ((o.showMinute) ? '' : noDisplay) + '></div>' +
                        '<div style="padding-left: 1px"><table><tr>';

                    for (var m = o.minuteMin; m < minMax; m += o.minuteGrid) {
                        minuteGridSize++;
                        html += '<td>' + ((m < 10) ? '0' : '') + m + '</td>';
                    }

                    html += '</tr></table></div>' +
                        '</dd>';
                } else html += '<dd class="ui_tpicker_minute" id="ui_tpicker_minute_' + dp_id + '"' +
                    ((o.showMinute) ? '' : noDisplay) + '></dd>';

                html += '<dt class="ui_tpicker_second_label" id="ui_tpicker_second_label_' + dp_id + '"' +
                    ((o.showSecond) ? '' : noDisplay) + '>' + o.secondText + '</dt>';

                if (o.showSecond && o.secondGrid > 0) {
                    html += '<dd class="ui_tpicker_second ui_tpicker_second_' + o.secondGrid + '">' +
                        '<div id="ui_tpicker_second_' + dp_id + '"' +
                        ((o.showSecond) ? '' : noDisplay) + '></div>' +
                        '<div style="padding-left: 1px"><table><tr>';

                    for (var s = o.secondMin; s < secMax; s += o.secondGrid) {
                        secondGridSize++;
                        html += '<td>' + ((s < 10) ? '0' : '') + s + '</td>';
                    }

                    html += '</tr></table></div>' +
                        '</dd>';
                } else html += '<dd class="ui_tpicker_second" id="ui_tpicker_second_' + dp_id + '"' +
                    ((o.showSecond) ? '' : noDisplay) + '></dd>';

                html += '<dt class="ui_tpicker_timezone_label" id="ui_tpicker_timezone_label_' + dp_id + '"' +
                    ((o.showTimezone) ? '' : noDisplay) + '>' + o.timezoneText + '</dt>';
                html += '<dd class="ui_tpicker_timezone" id="ui_tpicker_timezone_' + dp_id + '"' +
                    ((o.showTimezone) ? '' : noDisplay) + '></dd>';

                html += '</dl></div>';
                $tp = $(html);

                // if we only want time picker...
                if (o.timeOnly === true) {
                    $tp.prepend(
                        '<div class="ui-widget-header ui-helper-clearfix ui-corner-all">' +
                        '<div class="ui-datepicker-title">' + o.timeOnlyTitle + '</div>' +
                        '</div>');
                    $dp.find('.ui-datepicker-header, .ui-datepicker-calendar').hide();
                }

                this.hour_slider = $tp.find('#ui_tpicker_hour_' + dp_id).slider({
                    orientation: "horizontal",
                    value: this.hour,
                    min: o.hourMin,
                    max: hourMax,
                    step: o.stepHour,
                    slide: function (event, ui) {
                        tp_inst.hour_slider.slider("option", "value", ui.value);
                        tp_inst._onTimeChange();
                    }
                });

                // Updated by Peter Medeiros:
                // - Pass in Event and UI instance into slide function
                this.minute_slider = $tp.find('#ui_tpicker_minute_' + dp_id).slider({
                    orientation: "horizontal",
                    value: this.minute,
                    min: o.minuteMin,
                    max: minMax,
                    step: o.stepMinute,
                    slide: function (event, ui) {
                        // update the global minute slider instance value with the current slider value
                        tp_inst.minute_slider.slider("option", "value", ui.value);
                        tp_inst._onTimeChange();
                    }
                });

                this.second_slider = $tp.find('#ui_tpicker_second_' + dp_id).slider({
                    orientation: "horizontal",
                    value: this.second,
                    min: o.secondMin,
                    max: secMax,
                    step: o.stepSecond,
                    slide: function (event, ui) {
                        tp_inst.second_slider.slider("option", "value", ui.value);
                        tp_inst._onTimeChange();
                    }
                });


                this.timezone_select = $tp.find('#ui_tpicker_timezone_' + dp_id).append('<select></select>').find("select");
                $.fn.append.apply(this.timezone_select,
                    $.map(o.timezoneList, function (val, idx) {
                        return $("<option />")
                            .val(typeof val == "object" ? val.value : val)
                            .text(typeof val == "object" ? val.label : val);
                    })
                );
                this.timezone_select.val((typeof this.timezone != "undefined" && this.timezone != null && this.timezone != "") ? this.timezone : o.timezone);
                this.timezone_select.change(function () {
                    tp_inst._onTimeChange();
                });

                // Add grid functionality
                if (o.showHour && o.hourGrid > 0) {
                    size = 100 * hourGridSize * o.hourGrid / (hourMax - o.hourMin);

                    $tp.find(".ui_tpicker_hour table").css({
                        width: size + "%",
                        marginLeft: (size / (-2 * hourGridSize)) + "%",
                        borderCollapse: 'collapse'
                    }).find("td").each(function (index) {
                        $(this).click(function () {
                            var h = $(this).html();
                            if (o.ampm) {
                                var ap = h.substring(2).toLowerCase(),
                                    aph = parseInt(h.substring(0, 2));
                                if (ap == 'a') {
                                    if (aph == 12) h = 0;
                                    else h = aph;
                                } else if (aph == 12) h = 12;
                                else h = aph + 12;
                            }
                            tp_inst.hour_slider.slider("option", "value", h);
                            tp_inst._onTimeChange();
                            tp_inst._onSelectHandler();
                        }).css({
                            cursor: 'pointer',
                            width: (100 / hourGridSize) + '%',
                            textAlign: 'center',
                            overflow: 'hidden'
                        });
                    });
                }

                if (o.showMinute && o.minuteGrid > 0) {
                    size = 100 * minuteGridSize * o.minuteGrid / (minMax - o.minuteMin);
                    $tp.find(".ui_tpicker_minute table").css({
                        width: size + "%",
                        marginLeft: (size / (-2 * minuteGridSize)) + "%",
                        borderCollapse: 'collapse'
                    }).find("td").each(function (index) {
                        $(this).click(function () {
                            tp_inst.minute_slider.slider("option", "value", $(this).html());
                            tp_inst._onTimeChange();
                            tp_inst._onSelectHandler();
                        }).css({
                            cursor: 'pointer',
                            width: (100 / minuteGridSize) + '%',
                            textAlign: 'center',
                            overflow: 'hidden'
                        });
                    });
                }

                if (o.showSecond && o.secondGrid > 0) {
                    $tp.find(".ui_tpicker_second table").css({
                        width: size + "%",
                        marginLeft: (size / (-2 * secondGridSize)) + "%",
                        borderCollapse: 'collapse'
                    }).find("td").each(function (index) {
                        $(this).click(function () {
                            tp_inst.second_slider.slider("option", "value", $(this).html());
                            tp_inst._onTimeChange();
                            tp_inst._onSelectHandler();
                        }).css({
                            cursor: 'pointer',
                            width: (100 / secondGridSize) + '%',
                            textAlign: 'center',
                            overflow: 'hidden'
                        });
                    });
                }

                var $buttonPanel = $dp.find('.ui-datepicker-buttonpane');
                if ($buttonPanel.length) $buttonPanel.before($tp);
                else $dp.append($tp);

                this.$timeObj = $tp.find('#ui_tpicker_time_' + dp_id);

                if (this.inst !== null) {
                    var timeDefined = this.timeDefined;
                    this._onTimeChange();
                    this.timeDefined = timeDefined;
                }

                //Emulate datepicker onSelect behavior. Call on slidestop.
                var onSelectDelegate = 
                this.hour_slider.bind('slidestop', onSelectDelegate);
                this.minute_slider.bind('slidestop', onSelectDelegate);
                this.second_slider.bind('slidestop', onSelectDelegate);
            }
        },

        //########################################################################
        // This function tries to limit the ability to go outside the
        // min/max date range
        //########################################################################
        _limitMinMaxDateTime: function (dp_inst, adjustSliders) {
            var o = this._defaults,
                dp_date = new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay);

            if (!this._defaults.showTimepicker) return; // No time so nothing to check here

            if (this._defaults.minDateTime !== null && dp_date) {
                var minDateTime = this._defaults.minDateTime,
                    minDateTimeDate = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), 0, 0, 0, 0);

                if (this.hourMinOriginal === null || this.minuteMinOriginal === null || this.secondMinOriginal === null) {
                    this.hourMinOriginal = o.hourMin;
                    this.minuteMinOriginal = o.minuteMin;
                    this.secondMinOriginal = o.secondMin;
                }

                if (dp_inst.settings.timeOnly || minDateTimeDate.getTime() == dp_date.getTime()) {
                    this._defaults.hourMin = minDateTime.getHours();
                    if (this.hour <= this._defaults.hourMin) {
                        this.hour = this._defaults.hourMin;
                        this._defaults.minuteMin = minDateTime.getMinutes();
                        if (this.minute <= this._defaults.minuteMin) {
                            this.minute = this._defaults.minuteMin;
                            this._defaults.secondMin = minDateTime.getSeconds();
                        } else {
                            if (this.second < this._defaults.secondMin) this.second = this._defaults.secondMin;
                            this._defaults.secondMin = this.secondMinOriginal;
                        }
                    } else {
                        this._defaults.minuteMin = this.minuteMinOriginal;
                        this._defaults.secondMin = this.secondMinOriginal;
                    }
                } else {
                    this._defaults.hourMin = this.hourMinOriginal;
                    this._defaults.minuteMin = this.minuteMinOriginal;
                    this._defaults.secondMin = this.secondMinOriginal;
                }
            }

            if (this._defaults.maxDateTime !== null && dp_date) {
                var maxDateTime = this._defaults.maxDateTime,
                    maxDateTimeDate = new Date(maxDateTime.getFullYear(), maxDateTime.getMonth(), maxDateTime.getDate(), 0, 0, 0, 0);

                if (this.hourMaxOriginal === null || this.minuteMaxOriginal === null || this.secondMaxOriginal === null) {
                    this.hourMaxOriginal = o.hourMax;
                    this.minuteMaxOriginal = o.minuteMax;
                    this.secondMaxOriginal = o.secondMax;
                }

                if (dp_inst.settings.timeOnly || maxDateTimeDate.getTime() == dp_date.getTime()) {
                    this._defaults.hourMax = maxDateTime.getHours();
                    if (this.hour >= this._defaults.hourMax) {
                        this.hour = this._defaults.hourMax;
                        this._defaults.minuteMax = maxDateTime.getMinutes();
                        if (this.minute >= this._defaults.minuteMax) {
                            this.minute = this._defaults.minuteMax;
                            this._defaults.secondMin = maxDateTime.getSeconds();
                        } else {
                            if (this.second > this._defaults.secondMax) this.second = this._defaults.secondMax;
                            this._defaults.secondMax = this.secondMaxOriginal;
                        }
                    } else {
                        this._defaults.minuteMax = this.minuteMaxOriginal;
                        this._defaults.secondMax = this.secondMaxOriginal;
                    }
                } else {
                    this._defaults.hourMax = this.hourMaxOriginal;
                    this._defaults.minuteMax = this.minuteMaxOriginal;
                    this._defaults.secondMax = this.secondMaxOriginal;
                }
            }

            if (adjustSliders !== undefined && adjustSliders === true) {
                this.hour_slider.slider("option", { min: this._defaults.hourMin, max: this._defaults.hourMax }).slider('value', this.hour);
                this.minute_slider.slider("option", { min: this._defaults.minuteMin, max: this._defaults.minuteMax }).slider('value', this.minute);
                this.second_slider.slider("option", { min: this._defaults.secondMin, max: this._defaults.secondMax }).slider('value', this.second);
            }

        },


        //########################################################################
        // when a slider moves, set the internal time...
        // on time change is also called when the time is updated in the text field
        //########################################################################
        _onTimeChange: function () {
            var hour = (this.hour_slider) ? this.hour_slider.slider('value') : false,
                minute = (this.minute_slider) ? this.minute_slider.slider('value') : false,
                second = (this.second_slider) ? this.second_slider.slider('value') : false,
                timezone = (this.timezone_select) ? this.timezone_select.val() : false;

            if (hour !== false) hour = parseInt(hour, 10);
            if (minute !== false) minute = parseInt(minute, 10);
            if (second !== false) second = parseInt(second, 10);

            var ampm = (hour < 12) ? 'AM' : 'PM';

            // If the update was done in the input field, the input field should not be updated.
            // If the update was done using the sliders, update the input field.
            var hasChanged = (hour != this.hour || minute != this.minute || second != this.second || (this.ampm.length > 0 && this.ampm != ampm) || timezone != this.timezone);

            if (hasChanged) {

                if (hour !== false) this.hour = hour;
                if (minute !== false) this.minute = minute;
                if (second !== false) this.second = second;
                if (timezone !== false) this.timezone = timezone;
                this._limitMinMaxDateTime(this.inst, true);
            }
            if (this._defaults.ampm) this.ampm = ampm;

            this._formatTime();
            if (this.$timeObj) this.$timeObj.text(this.formattedTime);
            this.timeDefined = true;
            if (hasChanged) this._updateDateTime();
        },

        //########################################################################
        // call custom onSelect.
        // bind to sliders slidestop, and grid click.
        //########################################################################
        _onSelectHandler: function () {
            var onSelect = this._defaults['onSelect'];
            var inputEl = this.$input ? this.$input[0] : null;
            if (onSelect && inputEl) {
                onSelect.apply(inputEl, [this.formattedDateTime, this]);
            }
        },

        //########################################################################
        // format the time all pretty...
        //########################################################################
        _formatTime: function (time, format, ampm) {
            if (ampm == undefined) ampm = this._defaults.ampm;
            time = time || { hour: this.hour, minute: this.minute, second: this.second, ampm: this.ampm, timezone: this.timezone };
            var tmptime = format || this._defaults.timeFormat.toString();

            if (ampm) {
                var hour12 = ((time.ampm == 'AM') ? (time.hour) : (time.hour % 12));
                hour12 = (Number(hour12) === 0) ? 12 : hour12;
                tmptime = tmptime.toString()
                    .replace(/hh/g, ((hour12 < 10) ? '0' : '') + hour12)
                    .replace(/h/g, hour12)
                    .replace(/mm/g, ((time.minute < 10) ? '0' : '') + time.minute)
                    .replace(/m/g, time.minute)
                    .replace(/ss/g, ((time.second < 10) ? '0' : '') + time.second)
                    .replace(/s/g, time.second)
                    .replace(/TT/g, time.ampm.toUpperCase())
                    .replace(/Tt/g, time.ampm.toUpperCase())
                    .replace(/tT/g, time.ampm.toLowerCase())
                    .replace(/tt/g, time.ampm.toLowerCase())
                    .replace(/T/g, time.ampm.charAt(0).toUpperCase())
                    .replace(/t/g, time.ampm.charAt(0).toLowerCase())
                    .replace(/z/g, time.timezone);
            } else {
                tmptime = tmptime.toString()
                    .replace(/hh/g, ((time.hour < 10) ? '0' : '') + time.hour)
                    .replace(/h/g, time.hour)
                    .replace(/mm/g, ((time.minute < 10) ? '0' : '') + time.minute)
                    .replace(/m/g, time.minute)
                    .replace(/ss/g, ((time.second < 10) ? '0' : '') + time.second)
                    .replace(/s/g, time.second)
                    .replace(/z/g, time.timezone);
                tmptime = $.trim(tmptime.replace(/t/gi, ''));
            }

            if (arguments.length) return tmptime;
            else this.formattedTime = tmptime;
        },

        //########################################################################
        // update our input with the new date time..
        //########################################################################
        _updateDateTime: function (dp_inst) {
            dp_inst = this.inst || dp_inst,
                dt = new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay),
                dateFmt = $.datepicker._get(dp_inst, 'dateFormat'),
                formatCfg = $.datepicker._getFormatConfig(dp_inst),
                timeAvailable = dt !== null && this.timeDefined;
            this.formattedDate = $.datepicker.formatDate(dateFmt, (dt === null ? new Date() : dt), formatCfg);
            var formattedDateTime = this.formattedDate;
            if (dp_inst.lastVal !== undefined && (dp_inst.lastVal.length > 0 && this.$input.val().length === 0))
                return;

            if (this._defaults.timeOnly === true) {
                formattedDateTime = this.formattedTime;
            } else if (this._defaults.timeOnly !== true && (this._defaults.alwaysSetTime || timeAvailable)) {
                formattedDateTime += this._defaults.separator + this.formattedTime;
            }

            this.formattedDateTime = formattedDateTime;

            if (!this._defaults.showTimepicker) {
                this.$input.val(this.formattedDate);
            } else if (this.$altInput && this._defaults.altFieldTimeOnly === true) {
                this.$altInput.val(this.formattedTime);
                this.$input.val(this.formattedDate);
            } else if (this.$altInput) {
                this.$altInput.val(formattedDateTime);
                this.$input.val(formattedDateTime);
            } else {
                this.$input.val(formattedDateTime);
            }

            this.$input.trigger("change");
        }

    });

    $.fn.extend({
        //########################################################################
        // shorthand just to use timepicker..
        //########################################################################
        timepicker: function (o) {
            o = o || {};
            var tmp_args = arguments;

            if (typeof o == 'object') tmp_args[0] = $.extend(o, { timeOnly: true });

            return $(this).each(;
        },

        //########################################################################
        // extend timepicker to datepicker
        //########################################################################
        datetimepicker: function (o) {
            o = o || {};
            var $input = this,
                tmp_args = arguments;

            if (typeof (o) == 'string') {
                if (o == 'getDate')
                    return $.fn.datepicker.apply($(this[0]), tmp_args);
                else
                    return this.each(;
            }
            else
                return this.each(;
        }
    });

    //########################################################################
    // the bad hack :/ override datepicker so it doesnt close on select
    // inspired: http://stackoverflow.com/questions/1252512/jquery-datepicker-prevent-closing-picker-when-clicking-a-date/1762378#1762378
    //########################################################################
    $.datepicker._base_selectDate = $.datepicker._selectDate;
    $.datepicker._selectDate = function (id, dateStr) {
        var inst = this._getInst($(id)[0]),
            tp_inst = this._get(inst, 'timepicker');

        if (tp_inst) {
            tp_inst._limitMinMaxDateTime(inst, true);
            inst.inline = inst.stay_open = true;
            //This way the onSelect handler called from calendarpicker get the full dateTime
            this._base_selectDate(id, dateStr + tp_inst._defaults.separator + tp_inst.formattedTime);
            inst.inline = inst.stay_open = false;
            this._notifyChange(inst);
            this._updateDatepicker(inst);
        }
        else this._base_selectDate(id, dateStr);
    };

    //#############################################################################################
    // second bad hack :/ override datepicker so it triggers an event when changing the input field
    // and does not redraw the datepicker on every selectDate event
    //#############################################################################################
    $.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker;
    $.datepicker._updateDatepicker = function (inst) {
        if (typeof (inst.stay_open) !== 'boolean' || inst.stay_open === false) {

            this._base_updateDatepicker(inst);

            // Reload the time control when changing something in the input text field.
            var tp_inst = this._get(inst, 'timepicker');
            if (tp_inst) tp_inst._addTimePicker(inst);
        }
    };

    //#######################################################################################
    // third bad hack :/ override datepicker so it allows spaces and colan in the input field
    //#######################################################################################
    $.datepicker._base_doKeyPress = $.datepicker._doKeyPress;
    $.datepicker._doKeyPress = function (event) {
        var inst = $.datepicker._getInst(event.target),
            tp_inst = $.datepicker._get(inst, 'timepicker');

        if (tp_inst) {
            if ($.datepicker._get(inst, 'constrainInput')) {
                var ampm = tp_inst._defaults.ampm,
                    datetimeChars = tp_inst._defaults.timeFormat.toString()
                        .replace(/[hms]/g, '')
                        .replace(/TT/g, ampm ? 'APM' : '')
                        .replace(/Tt/g, ampm ? 'AaPpMm' : '')
                        .replace(/tT/g, ampm ? 'AaPpMm' : '')
                        .replace(/T/g, ampm ? 'AP' : '')
                        .replace(/tt/g, ampm ? 'apm' : '')
                        .replace(/t/g, ampm ? 'ap' : '') +
                        " " +
                        tp_inst._defaults.separator +
                        $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat')),
                    chr = String.fromCharCode(event.charCode === undefined ? event.keyCode : event.charCode);
                return event.ctrlKey || (chr < ' ' || !datetimeChars || datetimeChars.indexOf(chr) > -1);
            }
        }

        return $.datepicker._base_doKeyPress(event);
    };

    //#######################################################################################
    // Override key up event to sync manual input changes.
    //#######################################################################################
    $.datepicker._base_doKeyUp = $.datepicker._doKeyUp;
    $.datepicker._doKeyUp = function (event) {
        var inst = $.datepicker._getInst(event.target),
            tp_inst = $.datepicker._get(inst, 'timepicker');

        if (tp_inst) {
            if (tp_inst._defaults.timeOnly && (inst.input.val() != inst.lastVal)) {
                try {
                    $.datepicker._updateDatepicker(inst);
                }
                catch (err) {
                    $.datepicker.log(err);
                }
            }
        }

        return $.datepicker._base_doKeyUp(event);
    };

    //#######################################################################################
    // override "Today" button to also grab the time.
    //#######################################################################################
    $.datepicker._base_gotoToday = $.datepicker._gotoToday;
    $.datepicker._gotoToday = function (id) {
        this._base_gotoToday(id);
        this._setTime(this._getInst($(id)[0]), new Date());
    };

    //#######################################################################################
    // Disable & enable the Time in the datetimepicker
    //#######################################################################################
    $.datepicker._disableTimepickerDatepicker = function (target, date, withDate) {
        var inst = this._getInst(target),
            tp_inst = this._get(inst, 'timepicker');
        $(target).datepicker('getDate'); // Init selected[Year|Month|Day]
        if (tp_inst) {
            tp_inst._defaults.showTimepicker = false;
            tp_inst._updateDateTime(inst);
        }
    };

    $.datepicker._enableTimepickerDatepicker = function (target, date, withDate) {
        var inst = this._getInst(target),
            tp_inst = this._get(inst, 'timepicker');
        $(target).datepicker('getDate'); // Init selected[Year|Month|Day]
        if (tp_inst) {
            tp_inst._defaults.showTimepicker = true;
            tp_inst._addTimePicker(inst); // Could be disabled on page load
            tp_inst._updateDateTime(inst);
        }
    };

    //#######################################################################################
    // Create our own set time function
    //#######################################################################################
    $.datepicker._setTime = function (inst, date) {
        var tp_inst = this._get(inst, 'timepicker');
        if (tp_inst) {
            var defaults = tp_inst._defaults,
                // calling _setTime with no date sets time to defaults
                hour = date ? date.getHours() : defaults.hour,
                minute = date ? date.getMinutes() : defaults.minute,
                second = date ? date.getSeconds() : defaults.second;

            //check if within min/max times..
            if ((hour < defaults.hourMin || hour > defaults.hourMax) || (minute < defaults.minuteMin || minute > defaults.minuteMax) || (second < defaults.secondMin || second > defaults.secondMax)) {
                hour = defaults.hourMin;
                minute = defaults.minuteMin;
                second = defaults.secondMin;
            }

            if (tp_inst.hour_slider) tp_inst.hour_slider.slider('value', hour);
            else tp_inst.hour = hour;
            if (tp_inst.minute_slider) tp_inst.minute_slider.slider('value', minute);
            else tp_inst.minute = minute;
            if (tp_inst.second_slider) tp_inst.second_slider.slider('value', second);
            else tp_inst.second = second;

            tp_inst._onTimeChange();
            tp_inst._updateDateTime(inst);
        }
    };

    //#######################################################################################
    // Create new public method to set only time, callable as $().datepicker('setTime', date)
    //#######################################################################################
    $.datepicker._setTimeDatepicker = function (target, date, withDate) {
        var inst = this._getInst(target),
            tp_inst = this._get(inst, 'timepicker');

        if (tp_inst) {
            this._setDateFromField(inst);
            var tp_date;
            if (date) {
                if (typeof date == "string") {
                    tp_inst._parseTime(date, withDate);
                    tp_date = new Date();
                    tp_date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second);
                }
                else tp_date = new Date(date.getTime());
                if (tp_date.toString() == 'Invalid Date') tp_date = undefined;
                this._setTime(inst, tp_date);
            }
        }

    };

    //#######################################################################################
    // override setDate() to allow setting time too within Date object
    //#######################################################################################
    $.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker;
    $.datepicker._setDateDatepicker = function (target, date) {
        var inst = this._getInst(target),
            tp_date = (date instanceof Date) ? new Date(date.getTime()) : date;

        this._updateDatepicker(inst);
        this._base_setDateDatepicker.apply(this, arguments);
        this._setTimeDatepicker(target, tp_date, true);
    };

    //#######################################################################################
    // override getDate() to allow getting time too within Date object
    //#######################################################################################
    $.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker;
    $.datepicker._getDateDatepicker = function (target, noDefault) {
        var inst = this._getInst(target),
            tp_inst = this._get(inst, 'timepicker');

        if (tp_inst) {
            this._setDateFromField(inst, noDefault);
            var date = this._getDate(inst);
            if (date && tp_inst._parseTime($(target).val(), tp_inst.timeOnly)) date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second);
            return date;
        }
        return this._base_getDateDatepicker(target, noDefault);
    };

    //#######################################################################################
    // jQuery extend now ignores nulls!
    //#######################################################################################
    function extendRemove(target, props) {
        $.extend(target, props);
        for (var name in props)
            if (props[name] === null || props[name] === undefined)
                target[name] = props[name];
        return target;
    }

    $.timepicker = new Timepicker(); // singleton instance
    $.timepicker.version = "0.9.5";

})(clickd_jquery);


(function ($) {

    $.extend($.ui, { qaptcha: { version: "1.0.0" } });

    

    $.extend(Qaptcha.prototype, {
        Clr: $('<div>', { 'class': 'clr' }),
        bgSlider: $('<div>', { id: 'bgSlider' }),
        Slider: $('<div>', { id: 'Slider' }),
        Icons: $('<div>', { id: 'Icons' }),
        TxtStatus: $('<div>', { id: 'TxtStatus', 'class': 'dropError' }),
        inputQapTcha: $('<input>', { name: 'iQapTcha', value: "123456", type: 'hidden' }),
        enableAction: function () {
            $.qaptcha.Slider.draggable('disable').css('cursor', 'default');
            $.qaptcha.inputQapTcha.val("");
            $.qaptcha.TxtStatus.text($.qaptcha.defaults.txtUnlock).addClass('dropSuccess').removeClass('dropError');
            $.qaptcha.Icons.css('background-position', '-16px 0');
            if ($.qaptcha.defaults.readOnly !== true) {
                $("#btnSubmit").prop("disabled", false);
            }
        }
    });

    $.fn.extend({
        qaptcha: function (options) {

            $.extend($.qaptcha.defaults, options);

            if (this.length > 0)
                return $(this).each(function (i) {
                    var $this = $(this);
                    $.qaptcha.TxtStatus.text($.qaptcha.defaults.txtLock);

                    if ($.qaptcha.defaults.disabledSubmit) {
                        $('#btnSubmit').attr('disabled', 'disabled');
                    }

                    $.qaptcha.bgSlider.appendTo($this);
                    $.qaptcha.Icons.insertAfter($.qaptcha.bgSlider);
                    $.qaptcha.Clr.insertAfter($.qaptcha.Icons);
                    $.qaptcha.TxtStatus.insertAfter($.qaptcha.Clr);
                    $.qaptcha.inputQapTcha.appendTo($this);
                    $.qaptcha.Slider.appendTo($.qaptcha.bgSlider);
                    $this.show();

                    if ($.qaptcha.defaults.readOnly !== true) {
                        $("#Icons").bind("click", function (e) {
                            $.qaptcha.Slider.css("left", "153px");
                            $.qaptcha.enableAction();
                        });

                        $.qaptcha.Slider.draggable({
                            revert: function () {
                                if ($.qaptcha.defaults.autoRevert) {
                                    if (parseInt($.qaptcha.Slider.css("left")) > 150) return false;
                                    else return true;
                                }
                            },
                            axis: 'x',
                            containment: ".QapTcha",
                            scroll: false,
                            stop: function (event, ui) {
                                if (ui.position.left > 150) {
                                    $.qaptcha.enableAction();
                                }
                            }
                        });
                    }
                });
        }
    });

    $.qaptcha = new Qaptcha(); // singleton instance
    $.qaptcha.version = "1.0.0";

})(clickd_jquery);
/**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info/
*
**/

var Base64 = {

    // private property
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    // public method for encoding
    encode: 

    // public method for decoding
    decode: 

    // private method for UTF-8 encoding
    _utf8_encode: 

    // private method for UTF-8 decoding
    _utf8_decode: 
};

var clickd_MSG_REQUIRED_FIELD = "This field is required. Please enter a value.";
var clickd_MSG_INVALID_EMAIL_FORMAT = "Please enter a valid email address.";
var clickd_MSG_INVALID_INPUT = "Please enter a valid value.";
var clickd_flag = null;
var clickd_pageType = "";
var clickd_handlersLocation = "";
var clickd_directory = "";

function TextareaMaxLength(selfObj, maxLength) {
    var currentChars = clickd_jquery(selfObj).text();

    if (currentChars.length > maxLength) {
        clickd_jquery(selfObj).text(currentChars.substring(0, maxLength));
    }
}

function ShowOneRadio(selfObj) {
    var field = clickd_jquery(selfObj).attr("id");
    field = field.split("_")[1];
    var radios = clickd_jquery("#cont_id_f_" + field).find("input[type='radio']:checked");
    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
    selfObj.checked = true;
}

function FormValid(currentForm) {
    var isValid = true;

    var reqFieldList = clickd_jquery("input[name='reqField']", currentForm);
    for (var i = 0; i < reqFieldList.length; i++) {
        isValid = ValidField(clickd_jquery(reqFieldList[i]));
        if (isValid == false) {
            break;
        }
    }

    return isValid;
}

function ValidField(hidden) {
    var fieldType = hidden.attr("alt");
    var fieldID = hidden.val();
    var fieldRequired = hidden.attr("req");
    var fieldForm = hidden.form();

    if (typeof fieldRequired == "undefined") {
        fieldRequired = "true";
    }

    var field = clickd_jquery("#" + fieldID, fieldForm);
    var wasSkipped = clickd_jquery("#cont_id_" + fieldID, fieldForm).attr("wasskipped");
    if (wasSkipped == "1") {
        return true;
    }

    //alert("#" + fieldID);
    var infoId = "required_info_" + fieldID;
    infoId = infoId.replace("f_upload", "f");
    var info = clickd_jquery("#" + infoId, fieldForm);

    var fieldString = "";
    var patternID = hidden.attr("patternID");

    var infoText = clickd_jquery(info, fieldForm).text();

    if (infoText != "") {
        Un_SelectNotValidInput(info, field);
    }

    if (fieldType.toLowerCase() == "textarea") {
        fieldString = clickd_jquery(field, fieldForm).val();
        if (fieldString.length == 1) {
            if (fieldString.charCodeAt(0) == 160) {
                fieldString = "";
            }
        }
        //alert("fieldString = " + fieldString);
    } else if (fieldType.toLowerCase() == "multicheckbox") {
        var parent = clickd_jquery("#cont_id_" + fieldID, fieldForm);
        fieldString = clickd_jquery("input[type='checkbox']:checked", parent).val();
        if (typeof fieldString == "undefied" || fieldString == null) {
            fieldString = "";
        }
    } else if (fieldType.toLowerCase() == "multiradio" || fieldType.toLowerCase() == "radio") {
        var parent = clickd_jquery("#cont_id_" + fieldID, fieldForm);
        fieldString = clickd_jquery("input[type='radio']:checked", parent).val();
        if (typeof fieldString == "undefied" || fieldString == null) {
            fieldString = "";
        }
    } else if (fieldType.toLowerCase() == "checkbox") {
        var parent = clickd_jquery("#cont_id_" + fieldID, fieldForm);
        fieldString = clickd_jquery("input[type='checkbox']:checked", parent).prop('checked') ? fieldString = "True" : fieldString = "";
        if (typeof fieldString == "undefied" || fieldString == null) {
            fieldString = "";
        }
    } else {
        fieldString = clickd_jquery(field, fieldForm).val();
    }

    if (fieldType.toLowerCase() == "email" && fieldString.length > 0) {
        //Replace all spaces at the end of the email field value
        fieldString = fieldString.replace(/\s+$/gm, '');
        clickd_jquery(field, fieldForm).val(fieldString);
    }

    if (fieldString.length > 0) {
        switch (fieldType) {
            case "Rating":
                if (isNaN(fieldString) == true) {
                    clickd_flag = false;
                    SelectNotValidInput(info, field, clickd_MSG_INVALID_INPUT);
                    return false;
                }
                break;
            case "FileUpload":
                if (fieldString.length >= 5) {
                    if (fieldString.toLowerCase().lastIndexOf(".exe") == (fieldString.length - 4)) {
                        clickd_flag = false;
                        SelectNotValidInput(info, field, "Executable files are not allowed");
                        return false;
                    }


                    if (fieldString.toLowerCase().lastIndexOf(".js") == (fieldString.length - 3)) {
                        clickd_flag = false;
                        SelectNotValidInput(info, field, "Java Script files are not allowed");
                        return false;
                    }
                }
                //                request = clickd_jquery.ajax({
                //                    type: "HEAD",
                //                    url: fieldString,
                //                    success: function () {
                //                        alert("Size is " + request.getResponseHeader("Content-Length"));
                //                    }
                //});
                //var xxx = clickd_jquery("#f_upload_0337af73e5ae80450e184bb078e83254")[0].files[0].size
                //alert("fSize=" + fSize);

                //                if (clickd_jquery.browser.msie) {
                //                    var objFSO = new ActiveXObject("Scripting.FileSystemObject");
                //                    var sPath = field[0].value;
                //                    var objFile = objFSO.getFile(sPath);
                //                    var iSize = objFile.size;
                //                }
                //                else {
                //                    iSize = (clickd_jquery("#flUpload")[0].files[0].size / 1024);
                //                }

                //                alert("iSize=" + iSize);

                break;
            default:
                break;
        }
    }

    var trimChar = function (str, charToRemove) {
        if (!str) {
            return str;
        }
        while (str.charAt(0) == charToRemove) {
            str = str.substring(1);
        }
        while (str.charAt(str.length - 1) == charToRemove) {
            str = str.substring(0, str.length - 1);
        }
        return str;
    }

    //check regex validity
    var customRegex = hidden.attr("customRegex");
    if (customRegex !== null && customRegex !== "null" && fieldString.length > 0 && ((patternID != "0" && typeof patternID != "undefined") || (customRegex != "" && typeof customRegex != "undefined"))) {
        var errorMsg = hidden.attr("errorMsg");
        if (customRegex.length > 0) {
            try {
                clickd_flag = new RegExp(trimChar(customRegex, "/")).test(fieldString);
            } catch (e) { }

            if (clickd_flag == false) {
                SelectNotValidInput(info, field, errorMsg);
                return clickd_flag;
            }
        } else {
            if (fieldType == "EmailComponent") {
                fieldType = "Email";
                //errorMsg = clickd_MSG_INVALID_EMAIL_FORMAT;
            }
            var regex = getPatternByFieldTypeName(fieldType);
            if (regex !== "") {
                clickd_flag = new RegExp(regex).test(fieldString);
                if (clickd_flag == false) {
                    SelectNotValidInput(info, field, errorMsg);
                    return clickd_flag;
                }
            }
        }
    }

    //filterFreeEmail
    if (fieldType.toLowerCase() == "email" && fieldString.length > 0) {
        var filterFreeEmail = hidden.attr("filterFreeEmail");
        if (typeof filterFreeEmail == "undefined") {
            filterFreeEmail = "False";
        }
        if (filterFreeEmail.toLowerCase() == "true") {
            if (new RegExp("(?!@)((gmail.com)|(hotmail.com)|(yahoo.com)|(aol.com))", "i").test(fieldString)) {
                clickd_flag = false;
                if (clickd_flag == false) {
                    SelectNotValidInput(info, field, errorMsg);
                    return clickd_flag;
                }
            }
        }
    }

    if (fieldRequired == "true") {
        var requredErrorMsg = hidden.attr("requredErrorMsg");
        //alert("requredErrorMsg = " + requredErrorMsg);
        if (typeof requredErrorMsg == "undefined" || requredErrorMsg == "" || requredErrorMsg == null) {
            requredErrorMsg = clickd_MSG_REQUIRED_FIELD;
        }
        if (fieldType == "List") {
            if (fieldString == -1) {
                clickd_flag = false;
                SelectNotValidInput(info, field, requredErrorMsg);
                return false;
            }
        }
        if (fieldType == "MultiCheckBox") {
            var options = clickd_jquery("#cont_id_" + fieldID, fieldForm).find("input[type='checkbox']:checked");
            if (options.length < 1) {
                clickd_flag = false;
                SelectNotValidInput(info, field, requredErrorMsg);
                return false;
            }
        } else if (fieldType == "MultiRadio") {
            var options = clickd_jquery("#cont_id_" + fieldID, fieldForm).find("input[type='radio']:checked");
            if (options.length != 1) {
                clickd_flag = false;
                SelectNotValidInput(info, field, requredErrorMsg);
                return false;
            }
        } else {
            if (clickd_jquery.trim(fieldString).length == 0) {
                //if (fieldString.trim().length == 0) {
                clickd_flag = false;
                SelectNotValidInput(info, field, requredErrorMsg);
                return false;
            }
        }
    }

    return true;
}

function getPatternByFieldTypeName(fieldType) {
    for (var i = 0; i < clickd_patternList.length; i++) {
        if (clickd_patternList[i].fieldType.toLowerCase() === fieldType.toLowerCase()) {
            return clickd_patternList[i].value;
        }
    }

    return "";
}

function SelectNotValidInput(info, field, message) {
    clickd_jquery(info).html(clickd_jquery(info).html() + "<div>" + message + "</div>");
    clickd_jquery(field).css("border", "1px solid #ff0000");
    clickd_jquery(info).css("height", "auto");

}

function Un_SelectNotValidInput(info, field) {
    clickd_jquery(info).html("");
    clickd_jquery(info).css("height", "6px");
    clickd_jquery(field).css("border-top", "1px solid #7c7c7c");
    clickd_jquery(field).css("border-left", "1px solid #c3c3c3");
    clickd_jquery(field).css("border-right", "1px solid #c3c3c3");
    clickd_jquery(field).css("border-bottom", "1px solid #ddd");
}

var clickd_preview = 0;

function SendForm(selfObj, formID, sendPageType) {
    var currentForm = clickd_jquery(selfObj).parents('#' + formID)[0];

    var flag = true;
    if (sendPageType.toLowerCase() != "survey") {
        flag = FormValid(currentForm);
    }
    else {
        var parent = clickd_jquery(selfObj).parents(".SplitPage:first");
        if (parent.length == 0) {
            parent = currentForm;
        }
        var reqFieldList = clickd_jquery("input[name='reqField']", parent);
        for (var i = 0; i < reqFieldList.length; i++) {
            flag = ValidField(clickd_jquery(reqFieldList[i]));
            if (flag == false) {
                break;
            }
        }
    }
    if (flag) {
        if (clickd_preview == 0) {
            //clickd_jquery("#" + formID).attr("action", formAction);

            var EmailComponent = clickd_jquery(".EmailComponent", currentForm).val();
            if (typeof EmailComponent != "undefined" && EmailComponent != "") {
                clickd_jquery("#cd_visitoremail", currentForm).val(EmailComponent);
            }

            clickd_jquery(":input[type=text][value!=''][dateFormat!='']", currentForm).each(function (index, dateField) {
                var dateFormat = clickd_jquery(dateField).attr("dateFormat");
                if (dateFormat === "2" || dateFormat === "5" || dateFormat === "6") {
                    dateValue = clickd_jquery(dateField).val();
                    var dateValArr = dateValue.split("/");
                    clickd_jquery(dateField).val(dateValArr[1] + "/" + dateValArr[0] + "/" + dateValArr[2]);
                }
            });

            clickd_jquery("input[disabled=disabled],select[disabled=disabled],textarea[disabled=disabled]", currentForm).each(function (index, field) {
                var isReplace = true;
                var fieldValue = clickd_jquery(field).val();
                var fieldId = clickd_jquery(field).attr("id");
                var fieldName = clickd_jquery(field).attr("name");

                var fieldType = clickd_jquery(field).attr("type");
                if (fieldType == "checkbox") {
                    isReplace = clickd_jquery(field).prop("checked") ? true : false;
                }

                if (isReplace) {
                    clickd_jquery('<input>').attr({
                        type: 'hidden',
                        id: fieldId,
                        name: fieldName,
                        value: fieldValue
                    }).appendTo('form');

                    clickd_jquery(field).remove();
                }
            });

            //clickd_jquery("div[wasSkipped='1']").remove();
            clickd_jquery("input[name='nextPageNumberOnFirstPage']").remove();
            clickd_jquery("input[name='nextPageNumber']").remove();
            clickd_jquery("input[name='nextQuestionID']").remove();
            clickd_jquery("input[name='optionNextPageNumber']").remove();
            clickd_jquery("input[name='optionNextQuestionID']").remove();
            clickd_jquery("input[name='pageNextPageNumber']").remove();
            clickd_jquery("input[name='pagePrevPageNumber']").remove();
            clickd_jquery("input[name='skipLogicQuestionMultiRadioFieldId']").remove();
            clickd_jquery("input[name='skipLogicQuestionMultiCheckBoxFieldId']").remove();
            clickd_jquery("input[name='skipLogicQuestionListFieldId']").remove();
            clickd_jquery("input[name='skipLogicQuestionRatingFieldId']").remove();
            clickd_jquery("input[name='reqField']").remove();

            clickd_jquery(currentForm).submit();
            //return true;
        }
        else {
            return false;
        }
    }
}

function onClickPrevPage(btn) {
    clickd_jquery(btn).parents(".SplitPage:first").hide();
    clickd_jquery(btn).parents(".SplitPage:first").prev().show();
    clickd_jquery(window).scrollTop(clickd_jquery('#clickdimensionsForm').offset().top);
}

function onClickNextPage(btn) {
    var parent = clickd_jquery(btn).parents(".SplitPage:first");
    var isValid = true;

    var reqFieldList = clickd_jquery("input[name='reqField']", parent);
    for (var i = 0; i < reqFieldList.length; i++) {
        isValid = ValidField(clickd_jquery(reqFieldList[i]));
        if (isValid == false) {
            break;
        }
    }

    if (isValid) {
        parent.hide();
        parent.next().show();
        clickd_jquery(window).scrollTop(clickd_jquery('#clickdimensionsForm').offset().top);
    }
}


function WizardInit() {
    var splitPages = clickd_jquery(".SplitPage", "#clickdimensionsForm");
    //alert("numSplitPages = " + numSplitPages);
    if (splitPages.length > 0) {
        clickd_jquery(".WizardPrevButton:first", "#clickdimensionsForm").remove();
        clickd_jquery(".WizardNextButton:first", "#clickdimensionsForm").css("clear", "both");
        clickd_jquery(".WizardNextButton:first", "#clickdimensionsForm").css("float", "right");
        clickd_jquery(".SplitPage:first", "#clickdimensionsForm").show();
        clickd_jquery(".WizardPrevButton", "#clickdimensionsForm").bind("click", function () { onClickPrevPage(this); });
        clickd_jquery(".WizardNextButton", "#clickdimensionsForm").bind("click", function () { onClickNextPage(this); });
    }
}

function SurveyWizardInit() {
    var splitPages = clickd_jquery(".SplitPage", "#clickdimensionsForm");
    if (splitPages.length > 0) {
        clickd_jquery(".WizardPrevButton:first", "#clickdimensionsForm").remove();
        clickd_jquery(".WizardNextButton:first", "#clickdimensionsForm").css("clear", "both");
        clickd_jquery(".WizardNextButton:first", "#clickdimensionsForm").css("float", "right");
        clickd_jquery(".SplitPage:first", "#clickdimensionsForm").show();
        clickd_jquery(".WizardPrevButton", "#clickdimensionsForm").bind("click", function () { onSurveyClickPrevPage(this); });
        clickd_jquery(".WizardNextButton", "#clickdimensionsForm").bind("click", ;

        var splitPageList = clickd_jquery(".SplitPage");
        for (var i = 0; i < splitPageList.length; i++) {
            initSkipLogicGoToEvents(clickd_jquery(splitPageList[i]), 'Rating');
        }
    }
}

function onSurveyClickPrevPage(btn) {
    var parentSplitPage = clickd_jquery(btn).parents(".SplitPage:first");
    var pagePrevPageNumber = clickd_jquery("input[name='pagePrevPageNumber']", parentSplitPage).val();
    if (pagePrevPageNumber != "" && pagePrevPageNumber != null) {
        clickd_jquery("input[name='pagePrevPageNumber']", parentSplitPage).val("");
        //alert("Should to go to page number " + pagePrevPageNumber);
        clickd_jquery(parentSplitPage).hide();
        clickd_jquery(".SplitPage:eq(" + pagePrevPageNumber + ")").show();
        clickd_jquery(window).scrollTop(clickd_jquery('#clickdimensionsForm').offset().top);

    }
    else {
        //alert("regular prev page");
        clickd_jquery(btn).parents(".SplitPage:first").hide();
        clickd_jquery(btn).parents(".SplitPage:first").prev().show();
        clickd_jquery(window).scrollTop(clickd_jquery('#clickdimensionsForm').offset().top);
    }
}

function onSurveyClickNextPage(btn) {
    var isValid = true;
    var parentSplitPage = clickd_jquery(btn).parents(".SplitPage:first");

    var reqFieldList = clickd_jquery("input[name='reqField']", parentSplitPage);
    for (var i = 0; i < reqFieldList.length; i++) {
        isValid = ValidField(clickd_jquery(reqFieldList[i]));
        if (isValid == false) {
            break;
        }
    }

    if (isValid) {

        //var nextPageNumber = clickd_jquery('input[name="nextPageNumber"][value!=0][value!=""]:first', parentSplitPage);
        var nextPageNumbers = parentSplitPage.find('input[name="nextPageNumber"]');
        var value, nextPageNumber;
        for (var i = 0; i < nextPageNumbers.length; i++) {
            value = clickd_jquery(nextPageNumbers[i]).prop("value");
            if (value != "0" && value != "") {
                nextPageNumber = clickd_jquery(nextPageNumbers[i]);
                break;
            }
        }

        if (typeof nextPageNumber !== "undefined" && nextPageNumber.length > 0) {
            var nextQuestionID = clickd_jquery(nextPageNumber).next();
            goToPageNumberQuestionID(clickd_jquery(nextPageNumber).val(), clickd_jquery(nextQuestionID).val(), parentSplitPage);
            //alert("1 Should go to nextPageNumber=" + clickd_jquery(nextPageNumber).val() + " to question " + clickd_jquery(nextQuestionID).val());
        }
        else {
            var pageNextPageNumber = 0;
            var splitPageList = clickd_jquery(".SplitPage");
            var parentSplitPageIndex = splitPageList.index(parentSplitPage);

            //var parentSplitPageIndex = clickd_jquery(parentSplitPage).index(".SplitPage", "#clickdimensionsForm");

            //alert("parentSplitPageIndex = " + parentSplitPageIndex);

            if (parentSplitPageIndex === 0) {
                //first page next page number
                //pageNextPageNumber = clickd_jquery('input[name="nextPageNumberOnFirstPage"][value!="0"][value!=""]:first');
                var nextPageNumbers = clickd_jquery('input[name="nextPageNumberOnFirstPage"]');
                var value;
                for (var i = 0; i < nextPageNumbers.length; i++) {
                    value = clickd_jquery(nextPageNumbers[i]).prop("value");
                    if (value != "0" && value != "") {
                        pageNextPageNumber = clickd_jquery(nextPageNumbers[i]);
                        break;
                    }
                }
            }
            else {
                //wizard page number
                //pageNextPageNumber = clickd_jquery('input[name="pageNextPageNumber"][value!="0"][value!=""]:first', parentSplitPage);
                var nextPageNumbers = parentSplitPage.find('input[name="pageNextPageNumber"]');
                var value;
                for (var i = 0; i < nextPageNumbers.length; i++) {
                    value = clickd_jquery(nextPageNumbers[i]).prop("value");
                    if (value != "0" && value != "") {
                        pageNextPageNumber = clickd_jquery(nextPageNumbers[i]);
                        break;
                    }
                }
            }
            //alert("pageNextPageNumber = " + pageNextPageNumber);


            if (typeof pageNextPageNumber !== "undefined" && pageNextPageNumber.length > 0) {
                //alert("Should go to pageNextPageNumber=" + clickd_jquery(pageNextPageNumber).val() + " and to show all questions");
                goToPageNumberQuestionID(clickd_jquery(pageNextPageNumber).val(), 0, parentSplitPage);
                return;
            }
            else {
                //alert("simple next page");
                parentSplitPage.hide();

                var nextPage = parentSplitPage.next();
                //show all question and titles
                clickd_jquery(".QuestionContainer", nextPage).show();
                clickd_jquery(".QuestionTitleContainer", nextPage).show();
                //remove wasSkipped attribute
                clickd_jquery(".QuestionContainer", nextPage).removeAttr("wasSkipped");
                clickd_jquery(nextPage).show();
                clickd_jquery(window).scrollTop(clickd_jquery('#clickdimensionsForm').offset().top);
            }
            //}
        }
    }
}


function resetSkipedQuestinsValues(questionContainer) {
    //checkbox
    clickd_jquery("input[type='checkbox']", questionContainer).prop("checked", false);

    //stars
    clickd_jquery("input[name='nextPageNumber']", questionContainer).val("");
    clickd_jquery("input[name='nextQuestionID']", questionContainer).val("");
    clickd_jquery(".ui-stars-star", questionContainer).removeClass("ui-stars-star-on");
    clickd_jquery("input[name='selrate']", questionContainer).val(0);

    //radio
    clickd_jquery("input[type='radio']", questionContainer).prop("checked", false);

    //TextArea
    clickd_jquery("textarea", questionContainer).text("");

    //List
    clickd_jquery("select", questionContainer).val("");
    clickd_jquery("select", questionContainer).val("0");

    //TextBox
    clickd_jquery("input[type='text']", questionContainer).val("");
}


function goToPageNumberQuestionID(pageNumber, questionID, currPage) {
    //alert("pageNumber = " + pageNumber + " questionID = " + questionID);
    clickd_jquery(currPage).hide();
    var nextPage = clickd_jquery(".SplitPage:eq(" + pageNumber + ")");

    var splitPageList = clickd_jquery(".SplitPage");
    var currPageindex = splitPageList.index(currPage);
    var nextPageindex = splitPageList.index(nextPage);

    //set wasSkipped attribute to all skiped questions
    var skiptedPageList = clickd_jquery(".SplitPage:gt(" + currPageindex + "):lt(" + (nextPageindex - 1) + ")"); //(nextPageindex - 1) should not include the last page, BETWEEN needs
    var skiptedQuestionList = clickd_jquery(".QuestionContainer", skiptedPageList).attr("wasSkipped", 1);

    //reset values
    resetSkipedQuestinsValues(skiptedQuestionList);

    if (questionID != 0 && questionID != "0" && questionID != "" && typeof questionID != "undefined") {
        //alert("Should to go to page number " + pageNumber + " question id " + questionID);
        var questionContainer = clickd_jquery("#cont_id_f_" + questionID);
        var showQuestionRealIndex = questionContainer.attr("questionIndex");
        var questionTitleContainer = clickd_jquery("#cont_title_id_f_" + questionID);
        var showQuestionTitleRealIndex = questionTitleContainer.attr("questionIndex");

        //show all questions and titles
        clickd_jquery(".QuestionContainer", nextPage).show();
        clickd_jquery(".QuestionTitleContainer", nextPage).show();
        //remove wasSkipped attribute
        clickd_jquery(".QuestionContainer", nextPage).removeAttr("wasSkipped");

        var lastSkipedQuestion = null;
        var showQuestion = null;
        clickd_jquery(".QuestionContainer[questionIndex]", nextPage).each(function (index, question) {
            var questionRealIndex = clickd_jquery(question).attr("questionIndex");
            //alert("questionRealIndex=" + questionRealIndex);
            if (parseInt(questionRealIndex) < parseInt(showQuestionRealIndex)) {
                //set attribute wasSkipped to all skiped questions
                clickd_jquery(question).attr("wasSkipped", 1);

                //reset values
                resetSkipedQuestinsValues(question);

                lastSkipedQuestion = question;
                //removed couse of hiding all prev rows
                clickd_jquery(question).hide();
            }
            else if (parseInt(questionRealIndex) == parseInt(showQuestionRealIndex)) {
                showQuestion = question;
            }
        });

        //check if in same row
        var lastSkipedQuestionTr = clickd_jquery(lastSkipedQuestion).parents("tr");
        var questionContainerTr = clickd_jquery(showQuestion).parents("tr");
        var lastSkipedWuestionTrIndex = clickd_jquery(lastSkipedQuestionTr).index("tr", nextPage);
        var questionContainerTrIndex = clickd_jquery(questionContainerTr).index("tr", nextPage);

        if (lastSkipedWuestionTrIndex !== questionContainerTrIndex) {
            //hide parent tr and all previouse tr
            clickd_jquery(lastSkipedQuestion).parents("tr").hide().prevAll().hide();
        }
        else {
            clickd_jquery(lastSkipedQuestion).parents("tr").prevAll().hide();
            //show title
            questionContainerTr.prev().show();
        }

        clickd_jquery(".QuestionTitleContainer[questionIndex]", nextPage).each(function (index, questionTitle) {
            var questionTitleRealIndex = clickd_jquery(questionTitle).attr("questionIndex");
            //alert("questionRealIndex=" + questionRealIndex);
            if (parseInt(questionTitleRealIndex) < parseInt(showQuestionTitleRealIndex)) {
                //hide title
                //reset values
                resetSkipedQuestinsValues(questionTitle);
                clickd_jquery(questionTitle).hide();
            }
        });

        /*****************************************/
        //hide empty tr
        //        var trList = clickd_jquery("tr", nextPage);
        //        for (var tr = 0; tr < trList.length; tr++) {
        //            var tdList = clickd_jquery("td", trList[tr]);
        //            var emptyColspanCount = 0;
        //            for (var td = 0; td < tdList.length; td++) {
        //                var colSpan = clickd_jquery(tdList[td]).attr("colSpan");
        //                var tdContent = clickd_jquery(tdList[td]).html();
        //                if (tdContent.length < 10) {
        //                    emptyColspanCount += parseInt(clickd_jquery(tdList[td]).attr("colSpan"));
        //                }
        //            }

        //            alert("emptyColspanCount = " + emptyColspanCount);
        //        }
        /****************************************/
    }
    else {
        //alert("Should to go to page number " + pageNumber + " and show all questions");
        //show all questions and titles
        clickd_jquery(".QuestionContainer", nextPage).show();
        clickd_jquery(".QuestionTitleContainer", nextPage).show();
        //remove wasSkipped attribute
        clickd_jquery(".QuestionContainer", nextPage).removeAttr("wasSkipped");
    }

    clickd_jquery("input[name='pagePrevPageNumber']", nextPage).val(currPageindex);
    nextPage.show();
    clickd_jquery(window).scrollTop(clickd_jquery('#clickdimensionsForm').offset().top);
}

function setSkipLogicGoToData(nextPageNumber, nextQuestionID, sourceElement) {
    var parentStarsDiv = clickd_jquery(sourceElement).parents(".QuestionContainer:first");
    clickd_jquery("input[name='nextPageNumber']", parentStarsDiv).val(nextPageNumber);
    clickd_jquery("input[name='nextQuestionID']", parentStarsDiv).val(nextQuestionID);
}

/*stars control*/
function initSkipLogicGoToEvents(parentSplitPage, controlType) {
    clickd_jquery("input[name='skipLogicQuestion" + controlType + "FieldId']", parentSplitPage).each(function (index, skipLogicQuestion) {
        var parentStarsDiv = clickd_jquery(skipLogicQuestion).parents(".QuestionContainer:first");
        var optionNextPageNumberList = clickd_jquery("input[name='optionNextPageNumber']", parentStarsDiv);
        var optionNextQuestionIDList = clickd_jquery("input[name='optionNextQuestionID']", parentStarsDiv);

        if (controlType.toLowerCase() == "rating") {
            clickd_jquery(".ui-stars-star", parentStarsDiv).each(function (startIndex, star) {
                var nextPageNumber = clickd_jquery(optionNextPageNumberList[startIndex]).val();
                var nextQuestionID = clickd_jquery(optionNextQuestionIDList[startIndex]).val();
                clickd_jquery(star).bind("click", function () { setSkipLogicGoToData(nextPageNumber, nextQuestionID, this); return false; });
            });
            var starsReset = clickd_jquery(".ui-stars-cancel", parentStarsDiv);
            clickd_jquery(starsReset).bind("click", function () { setSkipLogicGoToData("", "", this); return false; });
        }
    });
}

function skipLogicOnChange(sourceElement, controlType) {
    var parentQuestionContainer = clickd_jquery(sourceElement).parents(".QuestionContainer:first");
    var skipLogicQuestionFieldId = clickd_jquery("input[name='skipLogicQuestion" + controlType + "FieldId']", parentQuestionContainer);

    var optionNextPageNumberList = clickd_jquery("input[name='optionNextPageNumber']", parentQuestionContainer);
    var optionNextQuestionIDList = clickd_jquery("input[name='optionNextQuestionID']", parentQuestionContainer);

    var selectedIndex = 0;
    if (controlType.toLowerCase() == "list") {
        selectedIndex = clickd_jquery('select option:selected', parentQuestionContainer).index();

    }
    if (controlType.toLowerCase() == "multicheckbox") {
        var selectedCheckbox = clickd_jquery("input[type='checkbox']:checked:first", parentQuestionContainer);
        //selectedIndex = clickd_jquery(selectedCheckbox).index("input[type='checkbox']", parentQuestionContainer);
        selectedIndex = clickd_jquery("input[type='checkbox']", parentQuestionContainer).index(selectedCheckbox);
    }
    if (controlType.toLowerCase() == "multiradio") {
        var selectedRadio = clickd_jquery("input[type='radio']:checked:first", parentQuestionContainer);
        //selectedIndex = clickd_jquery(selectedRadio).index("input[type='radio']", parentQuestionContainer);
        selectedIndex = clickd_jquery("input[type='radio']", parentQuestionContainer).index(selectedRadio);
    }

    var nextPageNumber = clickd_jquery(optionNextPageNumberList[selectedIndex]).val();
    var nextQuestionID = clickd_jquery(optionNextQuestionIDList[selectedIndex]).val();
    setSkipLogicGoToData(nextPageNumber, nextQuestionID, sourceElement);
}

var clickd_patternList = [
    { id: "1", name: "Regular email pattern", fieldType: "Email", fieldTypeID: "1", value: "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$" },
    { id: "2", name: "Regular integer pattern", fieldType: "Integer", fieldTypeID: "3", value: "^-?[0-9]+$" },
    { id: "3", name: "Regular url pattern", fieldType: "Url", fieldTypeID: "4", value: "(.*?)[^w{3}\\.]([a-zA-Z0-9]([a-zA-Z0-9\\-]{0,65}[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,6}" },
    { id: "4", name: "Regular decimal pattern", fieldType: "Decimal", fieldTypeID: "5", value: "^[0-9]+(\\.[0-9]{1,2})?$" },
    { id: "5", name: "Regular date pattern", fieldType: "Date", fieldTypeID: "6", value: "^\\d{1,2}\\\/\\d{1,2}\\\/\\d{4}$" },
    { id: "6", name: "Regular date and time pattern", fieldType: "DateTime", fieldTypeID: "7", value: "^\\d{1,2}\\\/\\d{1,2}\\\/\\d{4}\\s\\d{1,2}\\:\\d{1,2}(\\s*[AaPp][Mm])?" },
    { id: "7", name: "Regular money pattern", fieldType: "Money", fieldTypeID: "8", value: "^(?:\\d+|\\d{1,3}(?:,\\d{3})*)(?:\\.\\d{1,2}){0,1}$" }
];


function RequestQueryString(name, queryString = null) {
    var uri = window.location.search;

    if (queryString) {
        uri = queryString;
    }

    var match = RegExp('[?&]' + name + '=([^&]*)')
        .exec(uri);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function getFormProperties(containerWidth) {
    if (!containerWidth) {
        containerWidth = clickd_jquery("#clickdimensionsForm").width();
    }

    var properties = {};
    var firstSplitPage = clickd_jquery(".SplitPage", "#clickdimensionsForm");
    var width, height;

    if (firstSplitPage.length > 0) {
        properties.height = 0;
        for (var page = 0; page < firstSplitPage.length; page++) {
            clickd_jquery(firstSplitPage[page]).width(containerWidth);
            properties.width = clickd_jquery(firstSplitPage[page]).width();
            if (clickd_jquery(firstSplitPage[page]).height() > properties.height) {
                properties.height = clickd_jquery(firstSplitPage[page]).height();
            }
            clickd_jquery(firstSplitPage[page])[0].style.removeProperty('width');
        }
        properties.height += 220;
    }
    else {
        clickd_jquery("#clickdimensionsForm").width(containerWidth);
        properties.width = clickd_jquery("#clickdimensionsForm").width();
        properties.height = clickd_jquery("#clickdimensionsForm").height();
        clickd_jquery("#clickdimensionsForm")[0].style.removeProperty('width');
        properties.height += 110;
    }


    return properties;
}


function toggleProgressPanel(visible) {
    if (visible) {
        var properties = getFormProperties();
        var sourceRoot = "https://cdn-qa.clickdimensions.com/web";
        clickd_jquery("body").append(
            "<div id=\"progressBar\" style=\"width:" + properties.width + "px; height:" + properties.height + "px\"><div id=\"progressBarInner\" style=\"left:" + ((properties.width / 2) - 16) + "px; top:" + ((properties.height / 2) - 26) + "px;\"><div><img style=\"width:32px; height:32px\" src=\"" + sourceRoot + "/v6/images/progress.gif\"/></div><div>Loading...</div></div></div>"
        );
    }
    else {
        clickd_jquery("#progressBar").remove();
    }
}

function setFunnelFieldProperties(entityName, entry, value, isMapped) {
    if (isMapped) {
        clickd_jquery("input[type!='checkbox'][" + entityName + "Field='" + entry + "']").val(value);
    }
    else {
        clickd_jquery("#f_" + entry).val(value);
    }

    var bValue = (value.toLowerCase() === 'true' || value.toLowerCase() === 'on');
    if (isMapped) {
        clickd_jquery("input[type='checkbox'][" + entityName + "Field='" + entry + "']").prop("checked", bValue);
        clickd_jquery("input[type='radio'][name='" + entry + "'][value='" + value + "']").prop("checked", true);
    }
    else {
        clickd_jquery("#f_" + entry).prop("checked", bValue);
    }

    if (isMapped) {
        clickd_jquery("textarea[" + entityName + "Field='" + entry + "']").val(value);
        clickd_jquery("select[" + entityName + "Field='" + entry + "']").val(value);
    }
    else {
        clickd_jquery("#f_" + entry).val(value);
    }
}

function getFunnelFieldValue(entityName, value, entry, isMapped) {
    var dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}\s\d{1,2}\:\d{1,2}:\d{1,2}\s\w{2}clickd_jquery/;
    var isDate = dateRegex.test(value);
    //alert("isDate = " + isDate);
    if (isDate == true) {
        var dateValue = new Date(value);
        var month = (dateValue.getMonth() + 1);
        var day = dateValue.getDate();
        var year = dateValue.getFullYear();
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }

        var dateField = null;
        if (isMapped) {
            dateField = clickd_jquery("input[type!='checkbox'][" + entityName + "Field='" + entry + "']");
        }
        else {
            dateField = clickd_jquery("#f_" + entry);
        }

        if (dateField.hasClass("Date")) {
            value = day + '/' + month + '/' + year;
        }
        if (dateField.hasClass("DateTime")) {
            var minutes = dateValue.getMinutes();
            var hours = dateValue.getHours();
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (hours < 10) {
                hours = "0" + hours;
            }
            value = day + '/' + month + '/' + year + " " + hours + ":" + minutes;
        }
    }
    return value;
}

function setFunnelProperties(data) {

    var entityName = "";
    for (var entry in data) {
        if (entry.toLowerCase() == "entityname") {
            entityName = data[entry];
        }
        else if (entry.toLowerCase() == "unmapped") {
            var unMappedData = data[entry];
            for (var unMappedEntry in unMappedData) {
                var value = getFunnelFieldValue("", unMappedData[unMappedEntry], unMappedEntry, false);
                setFunnelFieldProperties("", unMappedEntry, value, false);
            }
        }
        else {
            var value = getFunnelFieldValue(entityName, data[entry], entry, true);
            setFunnelFieldProperties(entityName, entry, value, true);
        }
    }
}

function onFieldKeyPress(e) {
    // look for window.event in case event isn't passed in
    if (typeof e == 'undefined' && window.event) { e = window.event; }
    if (e.keyCode == 13) {
        var captcha = clickd_jquery("#Slider");
        if (captcha.length > 0) {
            var left = captcha.css("left");
            left = left.replace("px", "");
            if (isNaN(left)) {
                return false;
            }
        }
        return SendForm(e.currentTarget, "clickdimensionsForm", clickd_pageType);
    }

    return true;
}

function initializeUtmFields() {
    var url = (window.location != window.parent.location)
        ? document.referrer
        : document.location.href;

    var utm_source = RequestQueryString("utm_source", url);
    var utm_campaign = RequestQueryString("utm_campaign", url);
    var utm_medium = RequestQueryString("utm_medium", url);
    var utm_term = RequestQueryString("utm_term", url);
    var utm_content = RequestQueryString("utm_content", url);

    if (utm_source) {
        clickd_jquery("input[type='HIDDEN'][name='cd_utm_source'][id='cd_utm_source']").val(utm_source);
    }
    if (utm_campaign) {
        clickd_jquery("input[type='HIDDEN'][name='cd_utm_campaign'][id='cd_utm_campaign']").val(utm_campaign);
    }
    if (utm_medium) {
        clickd_jquery("input[type='HIDDEN'][name='cd_utm_medium'][id='cd_utm_medium']").val(utm_medium);
    }
    if (utm_term) {
        clickd_jquery("input[type='HIDDEN'][name='cd_utm_term'][id='cd_utm_term']").val(utm_term);
    }
    if (utm_content) {
        clickd_jquery("input[type='HIDDEN'][name='cd_utm_content'][id='cd_utm_content']").val(utm_content);
    }
}

function initForm() {
    //tbd remove, just for test
    //debugger;
    //getFormProperties();

    var visitorEmail = RequestQueryString("_clde");
    if (!visitorEmail || typeof visitorEmail == "undefined") {
        visitorEmail = RequestQueryString("_cldee");
        if (!visitorEmail || typeof visitorEmail == "undefined") {
            visitorEmail = '';
        } else {
            clickd_jquery.post(clickd_handlersLocation + '/ed.srv', {
                accountKey: clickd_jquery('#cd_accountkey').val(),
                email: visitorEmail,
                jsoncallback: '?',
            }, function (data) {
                visitorEmail = data.email;
                clickd_jquery(".EmailComponent").val(visitorEmail);
                if (clickd_pageType.toLowerCase() == "subscription" && clickd_preview == 0 && visitorEmail != "") {
                    toggleProgressPanel(true);
                }
            }).fail(;
        }
    }


    if (clickd_directory == "") {
        //environment
        var sourceRoot = "https://cdn-qa.clickdimensions.com/web";
        clickd_directory = sourceRoot + "/v6/";
    }


    if (clickd_pageType != "" && clickd_preview == 0 && visitorEmail != "") {

        if (clickd_handlersLocation == "") {
            clickd_handlersLocation = "https://webanalytics.cloudapp.net";
        }

        if (clickd_pageType.toLowerCase() == "subscription" && clickd_handlersLocation != "") {
            clickd_jquery.post(clickd_handlersLocation + '/subscription.srv',
                {
                    accountKey: clickd_jquery('#cd_accountkey').val(),
                    email: visitorEmail,
                    jsoncallback: '?',
                    cd_postsettings: clickd_jquery('#cd_postsettings').val()
                }, function (data) {
                    for (var entry in data) {
                        var value = data[entry];
                        var bValue = (value.toLowerCase() === 'true');
                        clickd_jquery("#f_" + entry).prop("checked", bValue);
                    }

                    toggleProgressPanel(false);
                }).error(function (error) {
                    console.log("error from subscription.srv=" + error);
                    toggleProgressPanel(false);
                });
        }
    }

    initializeUtmFields();
}

var n, o = this; function q(a, b, c) { a = a.split("."); c = c || o; !(a[0] in c) && c.execScript && c.execScript("var " + a[0]); for (var d; a.length && (d = a.shift());)if (!a.length && b !== undefined) c[d] = b; else c = c[d] ? c[d] : c[d] = {} } function r() { }
function aa(a) {
    var b = typeof a; if (b == "object") if (a) { if (a instanceof Array || !(a instanceof Object) && Object.prototype.toString.call(a) == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice")) return "array"; if (!(a instanceof Object) && (Object.prototype.toString.call(a) == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call"))) return "function" } else return "null";
    else if (b == "function" && typeof a.call == "undefined") return "object"; return b
} function s(a) { return aa(a) == "array" } function t(a) { var b = aa(a); return b == "array" || b == "object" && typeof a.length == "number" } function v(a) { return typeof a == "string" } function ba(a) { return aa(a) == "function" } function ca(a) { a = aa(a); return a == "object" || a == "array" || a == "function" } function da(a) { if (a.hasOwnProperty && a.hasOwnProperty(w)) return a[w]; a[w] || (a[w] = ++ea); return a[w] }
var w = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), ea = 0, fa = Date.now ||  function x(a, b) { function c() { } c.prototype = b.prototype; a.Ta = b.prototype; a.prototype = new c }; function ga(a) { this.stack = Error().stack || ""; if (a) this.message = String(a) } x(ga, Error); ga.prototype.name = "CustomError"; function ia(a) { for (var b = 1; b < arguments.length; b++) { var c = String(arguments[b]).replace(/\$/g, "$$$$"); a = a.replace(/\%s/, c) } return a } var ja = /^[a-zA-Z0-9\-_.!~*'()]*$/; function ka(a) { a = String(a); if (!ja.test(a)) return encodeURIComponent(a); return a }
function la(a, b) { if (b) return a.replace(ma, "&amp;").replace(na, "&lt;").replace(oa, "&gt;").replace(pa, "&quot;"); else { if (!qa.test(a)) return a; if (a.indexOf("&") != -1) a = a.replace(ma, "&amp;"); if (a.indexOf("<") != -1) a = a.replace(na, "&lt;"); if (a.indexOf(">") != -1) a = a.replace(oa, "&gt;"); if (a.indexOf('"') != -1) a = a.replace(pa, "&quot;"); return a } } var ma = /&/g, na = /</g, oa = />/g, pa = /\"/g, qa = /[&<>\"]/;
function z(a, b, c) { a = c !== undefined ? a.toFixed(c) : String(a); c = a.indexOf("."); if (c == -1) c = a.length; return Array(Math.max(0, b - c) + 1).join("0") + a }
function ra(a, b) {
    for (var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(d.length, e.length), h = 0; c == 0 && h < g; h++) {
        var i = d[h] || "", k = e[h] || "", j = RegExp("(\\d*)(\\D*)", "g"), y = RegExp("(\\d*)(\\D*)", "g"); do { var m = j.exec(i) || ["", "", ""], l = y.exec(k) || ["", "", ""]; if (m[0].length == 0 && l[0].length == 0) break; c = sa(m[1].length == 0 ? 0 : parseInt(m[1], 10), l[1].length == 0 ? 0 : parseInt(l[1], 10)) || sa(m[2].length == 0, l[2].length == 0) || sa(m[2], l[2]) } while (c ==
            0)
    } return c
} function sa(a, b) { if (a < b) return -1; else if (a > b) return 1; return 0 }; function ta(a, b) { b.unshift(a); ga.call(this, ia.apply(null, b)); b.shift(); this.sb = a } x(ta, ga); ta.prototype.name = "AssertionError"; function ua(a, b, c, d) { var e = "Assertion failed"; if (c) { e += ": " + c; var g = d } else if (a) { e += ": " + a; g = b } throw new ta("" + e, g || []); } function va(a, b) { !a && ua("", null, b, Array.prototype.slice.call(arguments, 2)) } function wa(a, b) { typeof a != "number" && ua("Expected number but got %s.", [a], b, Array.prototype.slice.call(arguments, 2)); return a }; var A = Array.prototype, xa = A.indexOf ? function (a, b, c) { va(a || v(a)); wa(a.length); return A.indexOf.call(a, b, c) } : function (a, b, c) { c = c == null ? 0 : c < 0 ? Math.max(0, a.length + c) : c; if (v(a)) { if (!v(b) || b.length != 1) return -1; return a.indexOf(b, c) } for (c = c; c < a.length; c++)if (c in a && a[c] === b) return c; return -1 }, ya = A.forEach ? function (a, b, c) { va(a || v(a)); wa(a.length); A.forEach.call(a, b, c) } : function (a, b, c) { for (var d = a.length, e = v(a) ? a.split("") : a, g = 0; g < d; g++)g in e && b.call(c, e[g], g, a) };
function Aa(a) { if (s(a)) return za(a); else { for (var b = [], c = 0, d = a.length; c < d; c++)b[c] = a[c]; return b } } function Ba(a) { for (var b = 1; b < arguments.length; b++) { var c = arguments[b], d; if (s(c) || (d = t(c)) && c.hasOwnProperty("callee")) a.push.apply(a, c); else if (d) for (var e = a.length, g = c.length, h = 0; h < g; h++)a[e + h] = c[h]; else a.push(c) } }; function Da(a) { var b = [], c = 0; for (var d in a) b[c++] = a[d]; return b } function Ea(a) { var b = [], c = 0; for (var d in a) b[c++] = d; return b } var Fa = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]; function Ga(a) { for (var b, c, d = 1; d < arguments.length; d++) { c = arguments[d]; for (b in c) a[b] = c[b]; for (var e = 0; e < Fa.length; e++) { b = Fa[e]; if (Object.prototype.hasOwnProperty.call(c, b)) a[b] = c[b] } } }; var B, Ha, Ia, Ja, Ka, La, Ma; function Na() { return o.navigator ? o.navigator.userAgent : null } Ka = Ja = Ia = Ha = B = false; var C; if (C = Na()) { var Oa = o.navigator; B = C.indexOf("Opera") == 0; Ha = !B && C.indexOf("MSIE") != -1; Ja = (Ia = !B && C.indexOf("WebKit") != -1) && C.indexOf("Mobile") != -1; Ka = !B && !Ia && Oa.product == "Gecko" } var Pa = B, D = Ha, Qa = Ka, Ra = Ia, Sa = Ja, Ta, Ua = o.navigator; Ta = Ua && Ua.platform || ""; La = Ta.indexOf("Mac") != -1; Ma = Ta.indexOf("Win") != -1; var Va = Ta.indexOf("Linux") != -1, Wa, Xa = "", E;
if (Pa && o.opera) { var Ya = o.opera.version; Xa = typeof Ya == "function" ? Ya() : Ya } else { if (Qa) E = /rv\:([^\);]+)(\)|;)/; else if (D) E = /MSIE\s+([^\);]+)(\)|;)/; else if (Ra) E = /WebKit\/(\S+)/; if (E) { var Za = E.exec(Na()); Xa = Za ? Za[1] : "" } } Wa = Xa; var ab = {}; function bb(a, b) { Ca(b, function (c, d) { if (d == "style") a.style.cssText = c; else if (d == "class") a.className = c; else if (d == "for") a.htmlFor = c; else if (d in cb) a.setAttribute(cb[d], c); else a[d] = c }) } var cb = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", rowspan: "rowSpan", valign: "vAlign", height: "height", width: "width", usemap: "useMap", frameborder: "frameBorder", type: "type" }; 
function eb(a, b) { var c = b[0], d = b[1]; if (D && d && (d.name || d.type)) { c = ["<", c]; d.name && c.push(' name="', la(d.name), '"'); if (d.type) { c.push(' type="', la(d.type), '"'); var e = {}; Ga(e, d); d = e; delete d.type } c.push(">"); c = c.join("") } var g = a.createElement(c); if (d) if (v(d)) g.className = d; else bb(g, d); if (b.length > 2) { d = function (h) { if (h) g.appendChild(v(h) ? a.createTextNode(h) : h) }; for (c = 2; c < b.length; c++) { e = b[c]; t(e) && !(ca(e) && e.nodeType > 0) ? ya(fb(e) ? Aa(e) : e, d) : d(e) } } return g }
function fb(a) { if (a && typeof a.length == "number") if (ca(a)) return typeof a.item == "function" || typeof a.item == "string"; else if (ba(a)) return typeof a.item == "function"; return false }; var gb, hb, ib, jb, kb, lb, mb; mb = lb = kb = jb = ib = hb = gb = false; var F = Na(); if (F) if (F.indexOf("Firefox") != -1) gb = true; else if (F.indexOf("Camino") != -1) hb = true; else if (F.indexOf("iPhone") != -1 || F.indexOf("iPod") != -1) ib = true; else if (F.indexOf("iPad") != -1) jb = true; else if (F.indexOf("Android") != -1) kb = true; else if (F.indexOf("Chrome") != -1) lb = true; else if (F.indexOf("Safari") != -1) mb = true; var nb = gb, ob = hb, pb = ib, qb = jb, rb = kb, sb = lb, tb = mb; var ub, vb;
(function () {
    function a(i) { i = i.match(/[\d]+/g); i.length = 3; return i.join(".") } var b = false, c = ""; if (navigator.plugins && navigator.plugins.length) { var d = navigator.plugins["Shockwave Flash"]; if (d) { b = true; if (d.description) c = a(d.description) } if (navigator.plugins["Shockwave Flash 2.0"]) { b = true; c = "2.0.0.11" } } else if (navigator.mimeTypes && navigator.mimeTypes.length) { if (b = (d = navigator.mimeTypes["application/x-shockwave-flash"]) && d.enabledPlugin) c = a(d.enabledPlugin.description) } else try {
        d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"); b =
            true; c = a(d.GetVariable("$version"))
    } catch (e) { try { d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"); b = true; c = "6.0.21" } catch (g) { try { d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"); b = true; c = a(d.GetVariable("$version")) } catch (h) { } } } ub = b; vb = c
})(); var wb; (function () { var a = ""; if (D) { var b = function (c) { try { new ActiveXObject(c); return true } catch (d) { return false } }; if (b("AcroPDF.PDF.1")) a = "7"; else if (b("PDF.PdfCtrl.6")) a = "6" } else if (navigator.mimeTypes && navigator.mimeTypes.length > 0) if ((b = navigator.mimeTypes["application/pdf"]) && b.enabledPlugin) if ((b = b.enabledPlugin.description) && b.indexOf("Adobe") != -1) a = b.indexOf("Version") != -1 ? b.split("Version")[1] : "7"; wb = !!a; Ma && ra(a, "6") })(); var xb, yb = {
    aa: "afar", ab: "\u0430\u0431\u0445\u0430\u0437\u0441\u043a\u0438\u0439", ace: "Aceh", ach: "Acoli", ada: "Adangme", ady: "\u0430\u0434\u044b\u0433\u0435\u0439\u0441\u043a\u0438\u0439", ae: "Avestan", af: "Afrikaans", afa: "Afro-Asiatic Language", afh: "Afrihili", ain: "Ainu", ak: "Akan", akk: "Akkadian", ale: "Aleut", alg: "Algonquian Language", alt: "Southern Altai", am: "\u12a0\u121b\u122d\u129b", an: "Aragonese", ang: "Old English", anp: "Angika", apa: "Apache Language", ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629", arc: "Aramaic",
    arn: "Araucanian", arp: "Arapaho", art: "Artificial Language", arw: "Arawak", as: "\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be", ast: "asturiano", ath: "Athapascan Language", aus: "Australian Language", av: "\u0430\u0432\u0430\u0440\u0441\u043a\u0438\u0439", awa: "Awadhi", ay: "aimara", az: "az\u0259rbaycanca", az_Arab: "\u062a\u0631\u06a9\u06cc \u0622\u0630\u0631\u0628\u0627\u06cc\u062c\u0627\u0646\u06cc", az_Cyrl: "\u0410\u0437\u04d9\u0440\u0431\u0430\u0458\u04b9\u0430\u043d", az_Latn: "Azerice", ba: "\u0431\u0430\u0448\u043a\u0438\u0440\u0441\u043a\u0438\u0439",
    bad: "Banda", bai: "Bamileke Language", bal: "\u0628\u0644\u0648\u0686\u06cc", ban: "Balin", bas: "Basa", bat: "Baltic Language", be: "\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f", bej: "Beja", bem: "Bemba", ber: "Berber", bg: "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438", bh: "\u092c\u093f\u0939\u093e\u0930\u0940", bho: "Bhojpuri", bi: "bichelamar ; bislama", bik: "Bikol", bin: "Bini", bla: "Siksika", bm: "bambara", bn: "\u09ac\u09be\u0982\u09b2\u09be", bnt: "Bantu", bo: "\u0f54\u0f7c\u0f51\u0f0b\u0f66\u0f90\u0f51\u0f0b",
    br: "breton", bra: "Braj", bs: "Bosanski", btk: "Batak", bua: "Buriat", bug: "Bugis", byn: "\u1265\u120a\u1295", ca: "catal\u00e0", cad: "Caddo", cai: "Central American Indian Language", car: "Carib", cau: "Caucasian Language", cch: "Atsam", ce: "\u0447\u0435\u0447\u0435\u043d\u0441\u043a\u0438\u0439", ceb: "Cebuano", cel: "Celtic Language", ch: "Chamorro", chb: "Chibcha", chg: "Chagatai", chk: "Chuukese", chm: "\u043c\u0430\u0440\u0438\u0439\u0441\u043a\u0438\u0439 (\u0447\u0435\u0440\u0435\u043c\u0438\u0441\u0441\u043a\u0438\u0439)", chn: "Chinook Jargon",
    cho: "Choctaw", chp: "Chipewyan", chr: "Cherokee", chy: "Cheyenne", cmc: "Chamic Language", co: "corse", cop: "\u0642\u0628\u0637\u064a\u0629", cop_Arab: "\u0642\u0628\u0637\u064a\u0629", cpe: "English-based Creole or Pidgin", cpf: "French-based Creole or Pidgin", cpp: "Portuguese-based Creole or Pidgin", cr: "Cree", crh: "Crimean Turkish", crp: "Creole or Pidgin", cs: "\u010de\u0161tina", csb: "Kashubian", cu: "Church Slavic", cus: "Cushitic Language", cv: "\u0447\u0443\u0432\u0430\u0448\u0441\u043a\u0438\u0439", cy: "Cymraeg", da: "dansk",
    dak: "Dakota", dar: "\u0434\u0430\u0440\u0433\u0432\u0430", day: "Dayak", de: "Deutsch", del: "Delaware", den: "Slave", dgr: "Dogrib", din: "Dinka", doi: "\u0627\u0644\u062f\u0648\u062c\u0631\u0649", dra: "Dravidian Language", dsb: "Lower Sorbian", dua: "Duala", dum: "Middle Dutch", dv: "Divehi", dyu: "dioula", dz: "\u0f62\u0fab\u0f7c\u0f44\u0f0b\u0f41", ee: "Ewe", efi: "Efik", egy: "Ancient Egyptian", eka: "Ekajuk", el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac", elx: "Elamite", en: "English", enm: "Middle English", eo: "esperanto", es: "espa\u00f1ol",
    et: "eesti", eu: "euskara", ewo: "Ewondo", fa: "\u0641\u0627\u0631\u0633\u06cc", fan: "fang", fat: "Fanti", ff: "Fulah", fi: "suomi", fil: "Filipino", fiu: "Finno-Ugrian Language", fj: "Fijian", fo: "f\u00f8royskt", fon: "Fon", fr: "fran\u00e7ais", frm: "Middle French", fro: "Old French", frr: "Northern Frisian", frs: "Eastern Frisian", fur: "friulano", fy: "Fries", ga: "Gaeilge", gaa: "Ga", gay: "Gayo", gba: "Gbaya", gd: "Scottish Gaelic", gem: "Germanic Language", gez: "\u130d\u12d5\u12dd\u129b", gil: "Gilbertese", gl: "galego", gmh: "Middle High German",
    gn: "guaran\u00ed", goh: "Old High German", gon: "Gondi", gor: "Gorontalo", got: "Gothic", grb: "Grebo", grc: "\u0391\u03c1\u03c7\u03b1\u03af\u03b1 \u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac", gsw: "Schweizerdeutsch", gu: "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0", gv: "Gaelg", gwi: "Gwich\u02bcin", ha: "\u0627\u0644\u0647\u0648\u0633\u0627", ha_Arab: "\u0627\u0644\u0647\u0648\u0633\u0627", ha_Latn: "haoussa", hai: "Haida", haw: "\u02bb\u014dlelo Hawai\u02bbi", he: "\u05e2\u05d1\u05e8\u05d9\u05ea", hi: "\u0939\u093f\u0902\u0926\u0940",
    hil: "Hiligaynon", him: "Himachali", hit: "Hittite", hmn: "Hmong", ho: "Hiri Motu", hr: "hrvatski", hsb: "Upper Sorbian", ht: "ha\u00eftien", hu: "magyar", hup: "Hupa", hy: "\u0540\u0561\u0575\u0565\u0580\u0567\u0576", hz: "Herero", ia: "interlingvao", iba: "Iban", id: "Bahasa Indonesia", ie: "Interlingue", ig: "Igbo", ii: "\ua188\ua320\ua259", ijo: "Ijo", ik: "Inupiaq", ilo: "Iloko", inc: "Indic Language", ine: "Indo-European Language", inh: "\u0438\u043d\u0433\u0443\u0448\u0441\u043a\u0438\u0439", io: "Ido", ira: "Iranian Language", iro: "Iroquoian Language",
    is: "\u00edslenska", it: "italiano", iu: "Inuktitut", ja: "\u65e5\u672c\u8a9e", jbo: "Lojban", jpr: "Judeo-Persian", jrb: "Judeo-Arabic", jv: "Jawa", ka: "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8", kaa: "\u043a\u0430\u0440\u0430\u043a\u0430\u043b\u043f\u0430\u043a\u0441\u043a\u0438\u0439", kab: "kabyle", kac: "Kachin", kaj: "Jju", kam: "Kamba", kar: "Karen", kaw: "Kawi", kbd: "\u043a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u0441\u043a\u0438\u0439", kcg: "Tyap", kfo: "koro", kg: "Kongo", kha: "Khasi", khi: "Khoisan Language", kho: "Khotanese",
    ki: "Kikuyu", kj: "Kuanyama", kk: "\u049a\u0430\u0437\u0430\u049b", kl: "kalaallisut", km: "\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a", kmb: "quimbundo", kn: "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1", ko: "\ud55c\uad6d\uc5b4", kok: "\u0915\u094b\u0902\u0915\u0923\u0940", kos: "Kosraean", kpe: "kpell\u00e9", kr: "Kanuri", krc: "\u043a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0431\u0430\u043b\u043a\u0430\u0440\u0441\u043a\u0438\u0439", krl: "\u043a\u0430\u0440\u0435\u043b\u044c\u0441\u043a\u0438\u0439", kro: "Kru",
    kru: "Kurukh", ks: "\u0915\u093e\u0936\u094d\u092e\u093f\u0930\u0940", ku: "K\u00fcrt\u00e7e", ku_Arab: "\u0627\u0644\u0643\u0631\u062f\u064a\u0629", ku_Latn: "K\u00fcrt\u00e7e", kum: "\u043a\u0443\u043c\u044b\u043a\u0441\u043a\u0438\u0439", kut: "Kutenai", kv: "Komi", kw: "kernewek", ky: "K\u0131rg\u0131zca", ky_Arab: "\u0627\u0644\u0642\u064a\u0631\u063a\u0633\u062a\u0627\u0646\u064a\u0629", ky_Cyrl: "\u043a\u0438\u0440\u0433\u0438\u0437\u0441\u043a\u0438\u0439", la: "latino", lad: "\u05dc\u05d3\u05d9\u05e0\u05d5", lah: "\u0644\u0627\u0647\u0646\u062f\u0627",
    lam: "Lamba", lb: "luxembourgeois", lez: "\u043b\u0435\u0437\u0433\u0438\u043d\u0441\u043a\u0438\u0439", lg: "Ganda", li: "Limburgs", ln: "lingala", lo: "Lao", lol: "mongo", loz: "Lozi", lt: "lietuvi\u0173", lu: "luba-katanga", lua: "luba-lulua", lui: "Luiseno", lun: "Lunda", luo: "Luo", lus: "Lushai", lv: "latvie\u0161u", mad: "Madura", mag: "Magahi", mai: "Maithili", mak: "Makassar", man: "Mandingo", map: "Austronesian", mas: "Masai", mdf: "\u043c\u043e\u043a\u0448\u0430", mdr: "Mandar", men: "Mende", mg: "malgache", mga: "Middle Irish", mh: "Marshallese",
    mi: "Maori", mic: "Micmac", min: "Minangkabau", mis: "Miscellaneous Language", mk: "\u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438", mkh: "Mon-Khmer Language", ml: "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02", mn: "\u043c\u043e\u043d\u0433\u043e\u043b\u044c\u0441\u043a\u0438\u0439", mn_Cyrl: "\u043c\u043e\u043d\u0433\u043e\u043b\u044c\u0441\u043a\u0438\u0439", mn_Mong: "\u043c\u043e\u043d\u0433\u043e\u043b\u044c\u0441\u043a\u0438\u0439", mnc: "Manchu", mni: "Manipuri", mno: "Manobo Language", mo: "Moldavian", moh: "Mohawk",
    mos: "mor\u00e9 ; mossi", mr: "\u092e\u0930\u093e\u0920\u0940", ms: "Bahasa Melayu", mt: "Malti", mul: "Multiple Languages", mun: "Munda Language", mus: "Creek", mwl: "Mirandese", mwr: "Marwari", my: "Burmese", myn: "Mayan Language", myv: "\u044d\u0440\u0437\u044f", na: "Nauru", nah: "Nahuatl", nai: "North American Indian Language", nap: "napoletano", nb: "norsk bokm\u00e5l", nd: "North Ndebele", nds: "Low German", ne: "\u0928\u0947\u092a\u093e\u0932\u0940", "new": "Newari", ng: "Ndonga", nia: "Nias", nic: "Niger-Kordofanian Language", niu: "Niuean",
    nl: "Nederlands", nn: "nynorsk", no: "Norwegian", nog: "\u043d\u043e\u0433\u0430\u0439\u0441\u043a\u0438\u0439", non: "Old Norse", nqo: "N\u2019Ko", nr: "South Ndebele", nso: "Northern Sotho", nub: "Nubian Language", nv: "Navajo", nwc: "Classical Newari", ny: "nianja; chicheua; cheua", nym: "Nyamwezi", nyn: "Nyankole", nyo: "Nyoro", nzi: "Nzima", oc: "occitan", oj: "Ojibwa", om: "Oromoo", or: "\u0b13\u0b21\u0b3c\u0b3f\u0b06", os: "\u043e\u0441\u0435\u0442\u0438\u043d\u0441\u043a\u0438\u0439", osa: "Osage", ota: "Ottoman Turkish", oto: "Otomian Language",
    pa: "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40", pa_Arab: "\u067e\u0646\u062c\u0627\u0628", pa_Guru: "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40", paa: "Papuan Language", pag: "Pangasinan", pal: "Pahlavi", pam: "Pampanga", pap: "Papiamento", pau: "Palauan", peo: "Old Persian", phi: "Philippine Language", phn: "Phoenician", pi: "\u0e1a\u0e32\u0e25\u0e35", pl: "polski", pon: "Pohnpeian", pra: "Prakrit Language", pro: "Old Proven\u00e7al", ps: "\u067e\u069a\u062a\u0648", pt: "portugu\u00eas", qu: "quechua", raj: "Rajasthani", rap: "Rapanui", rar: "Rarotongan",
    rm: "R\u00e4toromanisch", rn: "roundi", ro: "rom\u00e2n\u0103", roa: "Romance Language", rom: "Romany", ru: "\u0440\u0443\u0441\u0441\u043a\u0438\u0439", rup: "Aromanian", rw: "rwanda", sa: "\u0938\u0902\u0938\u094d\u0915\u0943\u0924 \u092d\u093e\u0937\u093e", sad: "Sandawe", sah: "\u044f\u043a\u0443\u0442\u0441\u043a\u0438\u0439", sai: "South American Indian Language", sal: "Salishan Language", sam: "\u05d0\u05e8\u05de\u05d9\u05ea \u05e9\u05d5\u05de\u05e8\u05d5\u05e0\u05d9\u05ea", sas: "Sasak", sat: "Santali", sc: "Sardinian", scn: "siciliano",
    sco: "Scots", sd: "\u0938\u093f\u0928\u094d\u0927\u0940", sd_Arab: "\u0633\u0646\u062f\u06cc", sd_Deva: "\u0938\u093f\u0928\u094d\u0927\u0940", se: "nordsamiska", sel: "\u0441\u0435\u043b\u044c\u043a\u0443\u043f\u0441\u043a\u0438\u0439", sem: "Semitic Language", sg: "sangho", sga: "Old Irish", sgn: "Sign Language", sh: "Serbo-Croatian", shn: "Shan", si: "Sinhalese", sid: "Sidamo", sio: "Siouan Language", sit: "Sino-Tibetan Language", sk: "slovensk\u00fd", sl: "sloven\u0161\u010dina", sla: "Slavic Language", sm: "Samoan", sma: "sydsamiska",
    smi: "Sami Language", smj: "lulesamiska", smn: "Inari Sami", sms: "Skolt Sami", sn: "Shona", snk: "sonink\u00e9", so: "Soomaali", sog: "Sogdien", son: "Songhai", sq: "shqipe", sr: "\u0421\u0440\u043f\u0441\u043a\u0438", sr_Cyrl: "\u0441\u0435\u0440\u0431\u0441\u043a\u0438\u0439", sr_Latn: "Srpski", srn: "Sranantongo", srr: "s\u00e9r\u00e8re", ss: "Swati", ssa: "Nilo-Saharan Language", st: "Sesotho", su: "Sundan", suk: "Sukuma", sus: "soussou", sux: "Sumerian", sv: "svenska", sw: "Kiswahili", syc: "Classical Syriac", syr: "Syriac", ta: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",
    tai: "Tai Language", te: "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41", tem: "Timne", ter: "Tereno", tet: "t\u00e9tum", tg: "\u062a\u0627\u062c\u06a9", tg_Arab: "\u062a\u0627\u062c\u06a9", tg_Cyrl: "\u0442\u0430\u0434\u0436\u0438\u043a\u0441\u043a\u0438\u0439", th: "\u0e44\u0e17\u0e22", ti: "\u1275\u130d\u122d\u129b", tig: "\u1275\u130d\u1228", tiv: "Tiv", tk: "\u062a\u0631\u06a9\u0645\u0646\u06cc", tkl: "Tokelau", tl: "Tagalog", tlh: "Klingon", tli: "Tlingit", tmh: "tamacheq", tn: "Tswana", to: "Tonga", tog: "Nyasa Tonga", tpi: "Tok Pisin", tr: "T\u00fcrk\u00e7e",
    ts: "Tsonga", tsi: "Tsimshian", tt: "\u0442\u0430\u0442\u0430\u0440\u0441\u043a\u0438\u0439", tum: "Tumbuka", tup: "Tupi Language", tut: "\u0430\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0435 (\u0434\u0440\u0443\u0433\u0438\u0435)", tvl: "Tuvalu", tw: "Twi", ty: "tahitien", tyv: "\u0442\u0443\u0432\u0438\u043d\u0441\u043a\u0438\u0439", udm: "\u0443\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0438\u0439", ug: "\u0443\u0439\u0433\u0443\u0440\u0441\u043a\u0438\u0439", uga: "Ugaritic", uk: "\u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
    umb: "umbundu", und: "English", ur: "\u0627\u0631\u062f\u0648", uz: "\u040e\u0437\u0431\u0435\u043a", uz_Arab: "\u0627\u06c9\u0632\u0628\u06d0\u06a9", uz_Cyrl: "\u0443\u0437\u0431\u0435\u043a\u0441\u043a\u0438\u0439", uz_Latn: "o'zbekcha", vai: "Vai", ve: "Venda", vi: "Ti\u1ebfng Vi\u1ec7t", vo: "volapuko", vot: "Votic", wa: "Wallonisch", wak: "Wakashan Language", wal: "Walamo", war: "Waray", was: "Washo", wen: "Sorbian Language", wo: "wolof", wo_Arab: "\u0627\u0644\u0648\u0644\u0648\u0641", wo_Latn: "wolof", xal: "\u043a\u0430\u043b\u043c\u044b\u0446\u043a\u0438\u0439",
    xh: "Xhosa", yao: "iao", yap: "Yapese", yi: "\u05d9\u05d9\u05d3\u05d9\u05e9", yo: "Yoruba", ypk: "Yupik Language", za: "Zhuang", zap: "Zapotec", zen: "Zenaga", zh: "\u4e2d\u6587", zh_Hans: "\u4e2d\u6587", zh_Hant: "\u4e2d\u6587", znd: "Zande", zu: "Zulu", zun: "Zuni", zxx: "No linguistic content", zza: "Zaza"
}; function zb(a) { if (typeof a.u == "function") return a.u(); if (v(a)) return a.split(""); if (t(a)) { for (var b = [], c = a.length, d = 0; d < c; d++)b.push(a[d]); return b } return Da(a) } function Ab(a, b, c) { if (typeof a.forEach == "function") a.forEach(b, c); else if (t(a) || v(a)) ya(a, b, c); else { var d; if (typeof a.A == "function") d = a.A(); else if (typeof a.u != "function") if (t(a) || v(a)) { d = []; for (var e = a.length, g = 0; g < e; g++)d.push(g); d = d } else d = Ea(a); else d = void 0; e = zb(a); g = e.length; for (var h = 0; h < g; h++)b.call(c, e[h], d && d[h], a) } }; function Bb(a) { this.m = {}; this.d = []; var b = arguments.length; if (b > 1) { if (b % 2) throw Error("Uneven number of arguments"); for (var c = 0; c < b; c += 2)this.set(arguments[c], arguments[c + 1]) } else if (a) { if (a instanceof Bb) { b = a.A(); c = a.u() } else { b = Ea(a); c = Da(a) } for (var d = 0; d < b.length; d++)this.set(b[d], c[d]) } } n = Bb.prototype; n.c = 0; n.Va = 0; n.u = function () { Cb(this); for (var a = [], b = 0; b < this.d.length; b++)a.push(this.m[this.d[b]]); return a }; n.A = function () { Cb(this); return this.d.concat() }; n.p = function (a) { return G(this.m, a) };
n.remove = function (a) { if (G(this.m, a)) { delete this.m[a]; this.c--; this.Va++; this.d.length > 2 * this.c && Cb(this); return true } return false }; function Cb(a) { if (a.c != a.d.length) { for (var b = 0, c = 0; b < a.d.length;) { var d = a.d[b]; if (G(a.m, d)) a.d[c++] = d; b++ } a.d.length = c } if (a.c != a.d.length) { var e = {}; for (c = b = 0; b < a.d.length;) { d = a.d[b]; if (!G(e, d)) { a.d[c++] = d; e[d] = 1 } b++ } a.d.length = c } } n.get = function (a, b) { if (G(this.m, a)) return this.m[a]; return b };
n.set = function (a, b) { if (!G(this.m, a)) { this.c++; this.d.push(a); this.Va++ } this.m[a] = b }; n.clone = function () { return new Bb(this) }; function G(a, b) { return Object.prototype.hasOwnProperty.call(a, b) }; var Db = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"); function H(a, b) { var c; if (a instanceof H) { this.H(b == null ? a.g : b); Eb(this, a.o); Fb(this, a.L); this.G(a.z); Gb(this, a.B); Hb(this, a.K); Ib(this, a.e.clone()); Jb(this, a.J) } else if (a && (c = String(a).match(Db))) { this.H(!!b); Eb(this, c[1] || "", true); Fb(this, c[2] || "", true); this.G(c[3] || "", true); Gb(this, c[4]); Hb(this, c[5] || "", true); this.Da(c[6] || "", true); Jb(this, c[7] || "", true) } else { this.H(!!b); this.e = new I(null, this, this.g) } } n = H.prototype; n.o = ""; n.L = ""; n.z = ""; n.B = null; n.K = ""; n.J = ""; n.bb = false; n.g = false;
n.toString = function () { if (this.f) return this.f; var a = []; this.o && a.push(J(this.o, Kb), ":"); if (this.z) { a.push("//"); this.L && a.push(J(this.L, Kb), "@"); var b; b = this.z; b = v(b) ? encodeURIComponent(b) : null; a.push(b); this.B != null && a.push(":", String(this.B)) } this.K && a.push(J(this.K, Lb)); (b = String(this.e)) && a.push("?", b); this.J && a.push("#", J(this.J, Mb)); return this.f = a.join("") };
n.clone = function () { var a = this.o, b = this.L, c = this.z, d = this.B, e = this.K, g = this.e.clone(), h = this.J, i = new H(null, this.g); a && Eb(i, a); b && Fb(i, b); c && i.G(c); d && Gb(i, d); e && Hb(i, e); g && Ib(i, g); h && Jb(i, h); return i }; function Eb(a, b, c) { K(a); delete a.f; a.o = c ? b ? decodeURIComponent(b) : "" : b; if (a.o) a.o = a.o.replace(/:$/, ""); return a } function Fb(a, b, c) { K(a); delete a.f; a.L = c ? b ? decodeURIComponent(b) : "" : b; return a } n.G = function (a, b) { K(this); delete this.f; this.z = b ? a ? decodeURIComponent(a) : "" : a; return this };
function Gb(a, b) { K(a); delete a.f; if (b) { b = Number(b); if (isNaN(b) || b < 0) throw Error("Bad port number " + b); a.B = b } else a.B = null; return a } function Hb(a, b, c) { K(a); delete a.f; a.K = c ? b ? decodeURIComponent(b) : "" : b; return a } function Ib(a, b, c) { K(a); delete a.f; if (b instanceof I) { a.e = b; a.e.Fa = a; a.e.H(a.g) } else { c || (b = J(b, Nb)); a.e = new I(b, a, a.g) } return a } n.Da =  function Ob(a, b, c) { K(a); delete a.f; a.e.set(b, c); return a }
function Jb(a, b, c) { K(a); delete a.f; a.J = c ? b ? decodeURIComponent(b) : "" : b; return a } function K(a) { if (a.bb) throw Error("Tried to modify a read-only Uri"); } n.H = function (a) { this.g = a; this.e && this.e.H(a) }; var Pb = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/; function J(a, b) { var c = null; if (v(a)) { c = a; Pb.test(c) || (c = encodeURI(a)); if (c.search(b) >= 0) c = c.replace(b, Qb) } return c } function Qb(a) { a = a.charCodeAt(0); return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16) } var Kb = /[#\/\?@]/g, Lb = /[\#\?]/g, Nb = /[\#\?@]/g, Mb = /#/g;
function I(a, b, c) { this.k = a || null; this.Fa = b || null; this.g = !!c } function L(a) { if (!a.b) { a.b = new Bb; if (a.k) for (var b = a.k.split("&"), c = 0; c < b.length; c++) { var d = b[c].indexOf("="), e = null, g = null; if (d >= 0) { e = b[c].substring(0, d); g = b[c].substring(d + 1) } else e = b[c]; e = decodeURIComponent(e.replace(/\+/g, " ")); e = M(a, e); a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "") } } } n = I.prototype; n.b = null; n.c = null;
n.add = function (a, b) { L(this); Rb(this); a = M(this, a); if (this.p(a)) { var c = this.b.get(a); s(c) ? c.push(b) : this.b.set(a, [c, b]) } else this.b.set(a, b); this.c++; return this }; n.remove = function (a) { L(this); a = M(this, a); if (this.b.p(a)) { Rb(this); var b = this.b.get(a); if (s(b)) this.c -= b.length; else this.c--; return this.b.remove(a) } return false }; n.p = function (a) { L(this); a = M(this, a); return this.b.p(a) };
n.A = function () { L(this); for (var a = this.b.u(), b = this.b.A(), c = [], d = 0; d < b.length; d++) { var e = a[d]; if (s(e)) for (var g = 0; g < e.length; g++)c.push(b[d]); else c.push(b[d]) } return c }; n.u = function (a) { L(this); if (a) { a = M(this, a); if (this.p(a)) { var b = this.b.get(a); if (s(b)) return b; else { a = []; a.push(b) } } else a = [] } else { b = this.b.u(); a = []; for (var c = 0; c < b.length; c++) { var d = b[c]; s(d) ? Ba(a, d) : a.push(d) } } return a };
n.set = function (a, b) { L(this); Rb(this); a = M(this, a); if (this.p(a)) { var c = this.b.get(a); if (s(c)) this.c -= c.length; else this.c-- } this.b.set(a, b); this.c++; return this }; n.get = function (a, b) { L(this); a = M(this, a); if (this.p(a)) { var c = this.b.get(a); return s(c) ? c[0] : c } else return b };
n.toString = function () { if (this.k) return this.k; if (!this.b) return ""; for (var a = [], b = 0, c = this.b.A(), d = 0; d < c.length; d++) { var e = c[d], g = ka(e); e = this.b.get(e); if (s(e)) for (var h = 0; h < e.length; h++) { b > 0 && a.push("&"); a.push(g); e[h] !== "" && a.push("=", ka(e[h])); b++ } else { b > 0 && a.push("&"); a.push(g); e !== "" && a.push("=", ka(e)); b++ } } return this.k = a.join("") }; function Rb(a) { delete a.Aa; delete a.k; a.Fa && delete a.Fa.f }
n.clone = function () { var a = new I; if (this.Aa) a.Aa = this.Aa; if (this.k) a.k = this.k; if (this.b) a.b = this.b.clone(); return a }; function M(a, b) { var c = String(b); if (a.g) c = c.toLowerCase(); return c } n.H = function (a) { if (a && !this.g) { L(this); Rb(this); Ab(this.b, function (b, c) { var d = c.toLowerCase(); if (c != d) { this.remove(c); this.add(d, b) } }, this) } this.g = a }; var Sb = /\s*;\s*/; function N(a, b, c, d, e) { if (/[;=]/.test(a)) throw Error('Invalid cookie name "' + a + '"'); if (/;/.test(b)) throw Error('Invalid cookie value "' + b + '"'); c !== undefined || (c = -1); document.cookie = a + "=" + b + (e ? ";domain=" + e : "") + (d ? ";path=" + d : "") + (c < 0 ? "" : c == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date((new Date).getTime() + c * 1E3)).toUTCString()) }
function O(a, b) { for (var c = a + "=", d = String(document.cookie).split(Sb), e = 0, g; g = d[e]; e++)if (g.indexOf(c) == 0) return g.substr(c.length); return b }; function P() { } P.prototype.La = false; P.prototype.X =  P.prototype.v =  var Tb; x(Q, P); Q.prototype.v =  Q.prototype.Ba = false; Q.prototype.gb = true; function R(a, b) { a && this.init(a, b) } x(R, Q); n = R.prototype; n.target = null; n.relatedTarget = null; n.offsetX = 0; n.offsetY = 0; n.clientX = 0; n.clientY = 0; n.screenX = 0; n.screenY = 0; n.button = 0; n.keyCode = 0; n.charCode = 0; n.ctrlKey = false; n.altKey = false; n.shiftKey = false; n.metaKey = false; n.fb = false; n.Ma = null;
n.init = function (a, b) {
    var c = this.type = a.type; this.target = a.target || a.srcElement; this.currentTarget = b; var d = a.relatedTarget; if (d) { if (Qa) try { d = d.nodeName && d } catch (e) { d = null } } else if (c == "mouseover") d = a.fromElement; else if (c == "mouseout") d = a.toElement; this.relatedTarget = d; this.offsetX = a.offsetX !== undefined ? a.offsetX : a.layerX; this.offsetY = a.offsetY !== undefined ? a.offsetY : a.layerY; this.clientX = a.clientX !== undefined ? a.clientX : a.pageX; this.clientY = a.clientY !== undefined ? a.clientY : a.pageY; this.screenX = a.screenX ||
        0; this.screenY = a.screenY || 0; this.button = a.button; this.keyCode = a.keyCode || 0; this.charCode = a.charCode || (c == "keypress" ? a.keyCode : 0); this.ctrlKey = a.ctrlKey; this.altKey = a.altKey; this.shiftKey = a.shiftKey; this.metaKey = a.metaKey; this.fb = La ? a.metaKey : a.ctrlKey; this.Ma = a; delete this.gb; delete this.Ba
}; D && (ab["8"] || (ab["8"] = ra(Wa, "8") >= 0)); R.prototype.v = function () { R.Ta.v.call(this); this.relatedTarget = this.currentTarget = this.target = this.Ma = null }; function Ub() { } var Vb = 0; n = Ub.prototype; n.key = 0; n.F = false; n.Ga = false; n.init = function (a, b, c, d, e, g) { if (ba(a)) this.Na = true; else if (a && a.handleEvent && ba(a.handleEvent)) this.Na = false; else throw Error("Invalid listener argument"); this.ma = a; this.proxy = b; this.src = c; this.type = d; this.capture = !!e; this.handler = g; this.Ga = false; this.key = ++Vb; this.F = false }; n.handleEvent = function (a) { if (this.Na) return this.ma.call(this.handler || this.src, a); return this.ma.handleEvent.call(this.ma, a) }; function S(a, b) { this.Oa = b; this.q = []; if (a > this.Oa) throw Error("[goog.structs.SimplePool] Initial cannot be greater than max"); for (var c = 0; c < a; c++)this.q.push(this.j ? this.j() : {}) } x(S, P); S.prototype.j = null; S.prototype.Ka = null; function T(a) { if (a.q.length) return a.q.pop(); return a.j ? a.j() : {} } function U(a, b) { a.q.length < a.Oa ? a.q.push(b) : Wb(a, b) } function Wb(a, b) { if (a.Ka) a.Ka(b); else if (ba(b.X)) b.X(); else for (var c in b) delete b[c] }
S.prototype.v = function () { S.Ta.v.call(this); for (var a = this.q; a.length;)Wb(this, a.pop()); delete this.q }; var Xb; var Yb = (Xb = "ScriptEngine" in o && o.ScriptEngine() == "JScript") ? o.ScriptEngineMajorVersion() + "." + o.ScriptEngineMinorVersion() + "." + o.ScriptEngineBuildVersion() : "0"; var Zb, $b, ac, bc, cc, dc, ec, fc, gc, hc, ic;
(function () {
    function c() { return l } function d() { return new Ub } var g = Xb && !(ra(Yb, "5.7") >= 0), h; dc =  if (g) {
        Zb = function () { return T(i) }; $b = function (l) { U(i, l) }; ac = function () { return T(k) }; bc = function (l) { U(k, l) }; cc = function () { return T(j) }; ec =  fc = function () { return T(y) }; gc = function (l) { U(y, l) }; hc =  ic =  var i = new S(0,
            600); i.j = a; var k = new S(0, 600); k.j = b; var j = new S(0, 600); j.j = c; var y = new S(0, 600); y.j = d; var m = new S(0, 600); m.j = e
    } else { Zb = a; $b = r; ac = b; bc = r; cc = c; ec = r; fc = d; gc = r; hc = e; ic = r }
})(); var V = {}, W = {}, X = {}, jc = {};
function kc(a, b, c, d, e) {
    if (b) if (s(b)) { for (var g = 0; g < b.length; g++)kc(a, b[g], c, d, e); return null } else {
        d = !!d; var h = W; b in h || (h[b] = Zb()); h = h[b]; if (!(d in h)) { h[d] = Zb(); h.c++ } h = h[d]; var i = da(a), k; h.D++; if (h[i]) { k = h[i]; for (g = 0; g < k.length; g++) { h = k[g]; if (h.ma == c && h.handler == e) { if (h.F) break; return k[g].key } } } else { k = h[i] = ac(); h.c++ } g = cc(); g.src = a; h = fc(); h.init(c, g, a, b, d, e); c = h.key; g.key = c; k.push(h); V[c] = h; X[i] || (X[i] = ac()); X[i].push(h); if (a.addEventListener) { if (a == o || !a.Xa) a.addEventListener(b, g, d) } else a.attachEvent(lc(b),
            g); return c
    } else throw Error("Invalid event type");
} function mc(a, b, c, d) { if (!d.oa) if (d.Pa) { for (var e = 0, g = 0; e < d.length; e++)if (d[e].F) { var h = d[e].proxy; h.src = null; ec(h); gc(d[e]) } else { if (e != g) d[g] = d[e]; g++ } d.length = g; d.Pa = false; if (g == 0) { bc(d); delete W[a][b][c]; W[a][b].c--; if (W[a][b].c == 0) { $b(W[a][b]); delete W[a][b]; W[a].c-- } if (W[a].c == 0) { $b(W[a]); delete W[a] } } } } function lc(a) { if (a in jc) return jc[a]; return jc[a] = "on" + a }
function nc(a, b, c, d, e) { var g = 1; b = da(b); if (a[b]) { a.D--; a = a[b]; if (a.oa) a.oa++; else a.oa = 1; try { for (var h = a.length, i = 0; i < h; i++) { var k = a[i]; if (k && !k.F) g &= oc(k, e) !== false } } finally { a.oa--; mc(c, d, b, a) } } return Boolean(g) }
function oc(a, b) { var c = a.handleEvent(b); if (a.Ga) { var d = a.key; if (V[d]) { var e = V[d]; if (!e.F) { var g = e.src, h = e.type, i = e.proxy, k = e.capture; if (g.removeEventListener) { if (g == o || !g.Xa) g.removeEventListener(h, i, k) } else g.detachEvent && g.detachEvent(lc(h), i); g = da(g); i = W[h][k][g]; if (X[g]) { var j = X[g], y = xa(j, e); if (y >= 0) { va(j || v(j)); wa(j.length); A.splice.call(j, y, 1) } j.length == 0 && delete X[g] } e.F = true; i.Pa = true; mc(h, k, g, i); delete V[d] } } } return c }
dc(function (a, b) {
    if (!V[a]) return true; var c = V[a], d = c.type, e = W; if (!(d in e)) return true; e = e[d]; var g, h; if (Tb === undefined) Tb = D && !o.addEventListener; if (Tb) {
        var i; if (!(i = b)) a: { i = "window.event".split("."); for (var k = o; g = i.shift();)if (k[g]) k = k[g]; else { i = null; break a } i = k } g = i; i = true in e; k = false in e; if (i) { if (g.keyCode < 0 || g.returnValue != undefined) return true; a: { var j = false; if (g.keyCode == 0) try { g.keyCode = -1; break a } catch (y) { j = true } if (j || g.returnValue == undefined) g.returnValue = true } } j = hc(); j.init(g, this); g = true;
        try { if (i) { for (var m = ac(), l = j.currentTarget; l; l = l.parentNode)m.push(l); h = e[true]; h.D = h.c; for (var u = m.length - 1; !j.Ba && u >= 0 && h.D; u--) { j.currentTarget = m[u]; g &= nc(h, m[u], d, true, j) } if (k) { h = e[false]; h.D = h.c; for (u = 0; !j.Ba && u < m.length && h.D; u++) { j.currentTarget = m[u]; g &= nc(h, m[u], d, false, j) } } } else g = oc(c, j) } finally { if (m) { m.length = 0; bc(m) } j.X(); ic(j) } return g
    } d = new R(b, this); try { g = oc(c, d) } finally { d.X() } return g
}); function pc(a, b, c) { if (typeof a == "number") { this.a = new Date(a, b || 0, c || 1); qc(this, c || 1) } else if (ca(a)) { this.a = new Date(a.getFullYear(), a.getMonth(), a.getDate()); qc(this, a.getDate()) } else { this.a = new Date; this.a.setHours(0); this.a.setMinutes(0); this.a.setSeconds(0); this.a.setMilliseconds(0) } } n = pc.prototype; n.Y = 0; n.ea = 3; n.clone = function () { var a = new pc(this.a); a.Y = this.Y; a.ea = this.ea; return a }; n.getFullYear = function () { return this.a.getFullYear() }; n.getYear = function () { return this.getFullYear() };
n.getMonth = function () { return this.a.getMonth() }; n.getDate = function () { return this.a.getDate() }; n.getTime = function () { return this.a.getTime() }; n.getUTCHours = function () { return this.a.getUTCHours() }; n.getTimezoneOffset = function () { return this.a.getTimezoneOffset() }; function rc(a) { a = a.getTimezoneOffset(); if (a == 0) a = "Z"; else { var b = Math.abs(a) / 60, c = Math.floor(b); b = (b - c) * 60; a = (a > 0 ? "-" : "+") + z(c, 2) + ":" + z(b, 2) } return a } n.set = function (a) { this.a = new Date(a.getFullYear(), a.getMonth(), a.getDate()) }; n.setFullYear = function (a) { this.a.setFullYear(a) };
n.setMonth = function (a) { this.a.setMonth(a) }; n.setDate = function (a) { this.a.setDate(a) };
n.add = function (a) {
    if (a.rb || a.eb) { var b = this.getMonth() + a.eb + a.rb * 12, c = this.getYear() + Math.floor(b / 12); b %= 12; if (b < 0) b += 12; var d; a: { switch (b) { case 1: d = c % 4 == 0 && (c % 100 != 0 || c % 400 == 0) ? 29 : 28; break a; case 5: case 8: case 10: case 3: d = 30; break a }d = 31 } d = Math.min(d, this.getDate()); this.setDate(1); this.setFullYear(c); this.setMonth(b); this.setDate(d) } if (a.Ya) {
        a = new Date((new Date(this.getYear(), this.getMonth(), this.getDate(), 12)).getTime() + a.Ya * 864E5); this.setDate(1); this.setFullYear(a.getFullYear()); this.setMonth(a.getMonth());
        this.setDate(a.getDate()); qc(this, a.getDate())
    }
}; n.qa = function (a, b) { return [this.getFullYear(), z(this.getMonth() + 1, 2), z(this.getDate(), 2)].join(a ? "-" : "") + (b ? rc(this) : "") }; n.toString = function () { return this.qa() }; function qc(a, b) { if (a.getDate() != b) { var c = a.getDate() < b ? 1 : -1; a.a.setUTCHours(a.a.getUTCHours() + c) } } n.valueOf = function () { return this.a.valueOf() }; function Y(a, b, c, d, e, g, h) { this.a = typeof a == "number" ? new Date(a, b || 0, c || 1, d || 0, e || 0, g || 0, h || 0) : new Date(a ? a.getTime() : fa()) } x(Y, pc); n = Y.prototype;
n.getHours = function () { return this.a.getHours() }; n.getMinutes = function () { return this.a.getMinutes() }; n.getSeconds = function () { return this.a.getSeconds() }; n.getUTCHours = function () { return this.a.getUTCHours() }; n.setHours = function (a) { this.a.setHours(a) }; n.setMinutes = function (a) { this.a.setMinutes(a) }; n.setSeconds = function (a) { this.a.setSeconds(a) }; n.setMilliseconds = function (a) { this.a.setMilliseconds(a) }; n.setUTCHours = function (a) { this.a.setUTCHours(a) };
n.add =  n.qa = function (a, b) { var c = pc.prototype.qa.call(this, a); if (a) return c + " " + z(this.getHours(), 2) + ":" + z(this.getMinutes(), 2) + ":" + z(this.getSeconds(), 2) + (b ? rc(this) : ""); return c + "T" + z(this.getHours(), 2) + z(this.getMinutes(), 2) + z(this.getSeconds(), 2) + (b ? rc(this) : "") }; n.toString = function () { return this.qa() };
n.clone = function () { var a = new Y(this.a); a.Y = this.Y; a.ea = this.ea; return a }; function Z(a) {
    this.W = ("https:" == document.location.protocol ? "https://" : "http://") + a + "/tsr.js?"; this.Ea(0); this.Sa("PAGE"); this.Ca(false); this.V = "5.0.0"; this.U = sc(this); this.O = tc(this); this.R = ub ? vb : ""; this.N = wb; xb || (xb = "en"); a = xb; var b; b = (b = a.match(/^\w{2,3}([-_]|$)/)) ? b[0].replace(/[_-]/g, "") : ""; this.T = b in yb ? yb[b] : a; this.G(); this.Da(); this.xa = document.referrer; this.ya = document.title.replace(/'/g, "%27"); try { typeof cdCampaignKey != "undefined" && this.Qa(cdCampaignKey) } catch (c) { } try {
        typeof cdDomainKey !=
        "undefined" && this.Ra(cdDomainKey)
    } catch (d) { } try { if (typeof cdPageKey != "undefined") this.ua = cdPageKey } catch (e) { } try { typeof cdScore != "undefined" && this.Ea(cdScore) } catch (g) { } try { typeof cdPriority != "undefined" && this.Ca(cdPriority) } catch (h) { } uc(this); this.n = O("cusid", ""); if (this.n == "") { this.n = (new Y).getTime(); N("cusid", this.n, 1800, escape("/"), this.i) } new vc(this)
} n = Z.prototype; n.M = ""; n.P = ""; n.ra = ""; n.ua = ""; n.Ia = 0; n.Ha = false; n.Ja = ""; n.W = ""; n.I = ""; n.V = ""; n.U = ""; n.O = ""; n.R = ""; n.N = ""; n.T = ""; n.i = ""; n.S = "";
n.va = ""; n.xa = ""; n.ya = ""; n.n = ""; n.Da = function () { this.va = (new H(window.location.href)).e.toString() }; n.Za = function (a) { try { return Ob(a instanceof H ? a.clone() : new H(a, void 0), "_cldvid", uc(this)) } catch (b) { alert("An error occurred while trying to get ClickDimensions linker:" + b.Wa) } return a };
n.cb = function (a) { try { if (a.action) { var b = a.action instanceof H ? a.action.clone() : new H(a.action, void 0); a.action = Ob(b, "_cldvid", uc(this)) } } catch (c) { alert("An error occurred while trying to set ClickDimensions linkByPost:" + c.Wa) } }; n.G = function (a) { if (!(a = a)) a = (new H(window.location.href)).z; this.i = a; this.S = window.location.hostname }; n.ib = f("M"); n.Qa = f("P"); n.Ra = f("ra"); n.Ea = f("Ia"); n.Ca = f("Ha"); n.Sa = f("Ja"); n.kb = function (a) { this.I = a; N("cuvid", a, 63072E3, escape("/"), this.i) };
n.ob = function (a, b, c, d, e, g, h) { var i = ""; i += "&orderid=" + encodeURIComponent(a); i += "&sku=" + encodeURIComponent(b); i += "&name=" + encodeURIComponent(c); i += "&category=" + encodeURIComponent(d); i += "&price=" + encodeURIComponent(e); i += "&quantity=" + encodeURIComponent(g); if (h) i += "&email=" + encodeURIComponent(h); wc(this, "EcomItem", i) };
n.qb = function (a, b, c, d, e, g, h, i, k) { var j = ""; j += "&orderid=" + encodeURIComponent(a); j += "&affiliation=" + encodeURIComponent(b); j += "&total=" + encodeURIComponent(c); j += "&tax=" + encodeURIComponent(d); j += "&shipping=" + encodeURIComponent(e); j += "&city=" + encodeURIComponent(g); j += "&state=" + encodeURIComponent(h); j += "&country=" + encodeURIComponent(i); if (k) j += "&email=" + encodeURIComponent(k); wc(this, "EcomTrans", j) };
n.mb = function (a, b, c, d, e) { var g = ""; g += "&category=" + encodeURIComponent(a); g += "&action=" + encodeURIComponent(b); if (c) g += "&email=" + encodeURIComponent(c); if (d) g += "&label=" + encodeURIComponent(d); if (e) g += "&value=" + encodeURIComponent(e); wc(this, "EcomEvent", g) };
n.pb = function () {
    var a = (new Y).getTime(), b = this.W; b += "ac=" + this.M; b += "&urk=" + a; b += "&cm=" + this.P; b += "&s=" + this.n; b += "&v=" + this.I; b += "&lc=" + this.T; b += "&pt=" + encodeURIComponent(this.ya); b += "&dn=" + this.i; b += "&dnk=" + this.ra; b += "&pk=" + this.ua; b += "&hn=" + this.S; b += "&uri=" + encodeURIComponent(window.location.href); b += "&r=" + encodeURIComponent(this.xa); b += "&t=" + this.Ja; b += "&b=" + this.O; b += "&os=" + this.U; b += "&fv=" + this.R; b += "&ar=" + this.N; b += "&pr=" + this.Ha; b += "&sc=" + this.Ia; b += "&sv=" + this.V; b += "&qd=" + encodeURIComponent(this.va);
    b += "&dt=" + a; b += "&pvon=" + O("cuvon", ""); N("cuvon", a, 1800, escape("/"), this.i); a = b; b = this.n; var c = db("script"); c.src = a; c.type = "text/javascript"; document.getElementsByTagName("head")[0].appendChild(c); N("cusid", b, 1800, escape("/"), this.i)
};
n.Ua = function (a, b) {
    var c = (new Y).getTime(), d = this.W; d += "ac=" + this.M; d += "&urk=" + c; d += "&cm=" + this.P; d += "&s=" + this.n; d += "&v=" + this.I; d += "&lc=" + this.T; d += "&dn=" + this.i; d += "&dnk=" + this.ra; d += "&pk=" + this.ua; d += "&hn=" + this.S; d += "&uri=" + a; d += "&r=" + encodeURIComponent(window.location.href); d += "&t=LINK"; d += "&b=" + this.O; d += "&os=" + this.U; d += "&fv=" + this.R; d += "&ar=" + this.N; d += "&pr=false"; d += "&pt=" + encodeURIComponent(b); d += "&sc=0"; d += "&sv=" + this.V; d += "&qd=" + encodeURIComponent(this.va); d += "&dt=" + c; d += "&pvon=" + O("cuvon",
        ""); N("cuvon", c, 1800, escape("/"), this.i); var e = db("img"); e.id = "clickdimensionsTi" + c; e.src = d.replace("tsr.js", "ti.gif"); document.body.appendChild(e)
};
function wc(a, b, c) { var d = (new Y).getTime(), e = a.W; e += "ac=" + a.M; e += "&urk=" + d; e += "&cm=" + a.P; e += "&s=" + a.n; e += "&v=" + a.I; e += "&lc=" + a.T; e += "&pt=" + encodeURIComponent(a.ya); e += "&dn=" + a.i; e += "&hn=" + a.S; e += "&uri=" + encodeURIComponent(window.location.href); e += "&r=" + encodeURIComponent(a.xa); e += "&t=" + b; e += "&b=" + a.O; e += "&os=" + a.U; e += "&fv=" + a.R; e += "&ar=" + a.N; e += "&sc=0"; e += "&sv=" + a.V; e += c; e += "&dt=" + d; e += "&pvon=" + O("cuvon", ""); a = db("img"); a.id = "clickdimensionsTi" + d; a.src = e.replace("tsr.js", "ti.gif"); document.body.appendChild(a) }
function uc(a) { var b; b = (new H(window.location.href)).e.get("_cldvid"); if (!b || b == undefined || b == "" || b == null) b = O("cuvid", ""); return a.I = b } function sc() { if (Va) return "LINUX"; if (La) return "MAC"; if (Sa) return "MOBILE"; if (Ma) return "WINDOWS"; return "" } function tc() { if (rb) return "ANDROID"; if (ob) return "CAMINO"; if (sb) return "CHROME"; if (nb) return "FIREFOX"; if (D) return "IE"; if (qb) return "IPAD"; if (pb) return "IPHONE"; if (Pa) return "OPERA"; if (tb) return "SAFARI"; return "" }
function vc(a) {
    for (var b = [".pdf", ".txt", ".doc", ".dot", ".csv", ".exe", ".fla", ".msi", ".rar", ".zip", ".gz", ".ppt", ".pps", ".pos", ".xla", ".xlc", ".xlm", ".xls", ".xlt", ".pptx", ".sldx", ".ppsx", ".potx", ".xlsx", ".xltx", ".docx", ".dotx", ".swf", ".vsd", ".xap", ".xlw", ".calx", ".mpp", ".vdx", ".xps", ".mps", ".wav", ".mpg", ".avi", ".mpeg", ".gif", ".jpe", ".jpeg", ".jpg", ".png", ".tif", ".tiff"], c = document.getElementsByTagName("a"), d = 0; d < c.length; d++) {
        var e = String(c[d].getAttribute("href")); if (e) if (e.lastIndexOf("http", 0) == 0) for (var g =
            0; g < b.length; g++)if (ha(e, b[g])) { kc(c[d], "click", function () { try { var h = this.textContent; if (h === undefined) h = this.innerText; a.Ua(this.getAttribute("href"), h) } catch (i) { } }, false, c[d]); break }
    }
} n.jb = function (a) { for (var b = document.getElementsByName("cd_visitorkey"), c = 0; c < b.length; c++)b[c].value = a; b = document.forms; for (c = 0; c < b.length; c++)if (b[c].action) if (b[c].action.indexOf("/forms/h/") != -1) { var d = db("input"); d.type = "HIDDEN"; d.name = "cd_visitorkey"; d.id = "cd_visitorkey"; d.value = a; b[c].appendChild(d) } };
q("clickdimensions.Analytics", Z, void 0); q("clickdimensions.Analytics.prototype.trackPage", Z.prototype.pb, void 0); q("clickdimensions.Analytics.prototype.trackLink", Z.prototype.Ua, void 0); q("clickdimensions.Analytics.prototype.setAccountKey", Z.prototype.ib, void 0); q("clickdimensions.Analytics.prototype.setCampaignKey", Z.prototype.Qa, void 0); q("clickdimensions.Analytics.prototype.setPriorityPage", Z.prototype.Ca, void 0); q("clickdimensions.Analytics.prototype.setScore", Z.prototype.Ea, void 0);
q("clickdimensions.Analytics.prototype.setPageType", Z.prototype.Sa, void 0); q("clickdimensions.Analytics.prototype.setDomainKey", Z.prototype.Ra, void 0); q("clickdimensions.Analytics.prototype.setDomain", Z.prototype.G, void 0); q("clickdimensions.Analytics.prototype.getLinkerUrl", Z.prototype.Za, void 0); q("clickdimensions.Analytics.prototype.linkByPost", Z.prototype.cb, void 0); q("clickdimensions.Analytics.prototype.trackItem", Z.prototype.ob, void 0);
q("clickdimensions.Analytics.prototype.trackTrans", Z.prototype.qb, void 0); q("clickdimensions.Analytics.prototype.trackEvent", Z.prototype.mb, void 0); q("clickdimensions.Analytics.prototype.setVisitorKey", Z.prototype.kb, void 0); q("clickdimensions.Analytics.prototype.setForms", Z.prototype.jb, void 0); window.CD_LANDING_PAGE = "LANDING_PAGE"; window.CD_FORM = "FORM"; window.CD_SURVEY = "SURVEY"; window.CD_FILE = "FILE"; window.CD_EMAIL = "EMAIL"; window.CD_PAGE = "PAGE"; window.CD_LINK = "LINK";

var e, k = this;
function xc(a) {
    var b = typeof a; if (b == "object") if (a) { if (a instanceof Array || !(a instanceof Object) && Object.prototype.toString.call(a) == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice")) return "array"; if (!(a instanceof Object) && (Object.prototype.toString.call(a) == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call"))) return "function" } else return "null"; else if (b ==
        "function" && typeof a.call == "undefined") return "object"; return b
} function yc(a) { var b = xc(a); return b == "array" || b == "object" && typeof a.length == "number" } Math.floor(Math.random() * 2147483648).toString(36); function zc(a, b) { c.prototype = b.prototype; a.Wb = b.prototype; a.prototype = new c }; function Ac(a) { this.stack = Error().stack || ""; if (a) this.message = String(a) } zc(Ac, Error); function Bc(a) { for (var b = 1; b < arguments.length; b++) { var c = String(arguments[b]).replace(/\$/g, "$$$$"); a = a.replace(/\%s/, c) } return a } var Cc = /^[a-zA-Z0-9\-_.!~*'()]*$/; function Dc(a) { a = String(a); if (!Cc.test(a)) return encodeURIComponent(a); return a } function Ec(a, b, c) { a = c !== undefined ? a.toFixed(c) : String(a); c = a.indexOf("."); if (c == -1) c = a.length; return Array(Math.max(0, b - c) + 1).join("0") + a }; function Fc(a, b) { b.unshift(a); Ac.call(this, Bc.apply(null, b)); b.shift(); this.Vb = a } zc(Fc, Ac); function Gc(a, b, c, d) { var g = "Assertion failed"; if (c) { g += ": " + c; var h = d } else if (a) { g += ": " + a; h = b } throw new Fc("" + g, h || []); } function Hc(a, b) { !a && Gc("", null, b, Array.prototype.slice.call(arguments, 2)) } function Ic(a, b) { typeof a != "number" && Gc("Expected number but got %s.", [a], b, Array.prototype.slice.call(arguments, 2)); return a }; var Jc = Array.prototype, Kc = Jc.forEach ? function (a, b, c) { Hc(a || m(a)); Ic(a.length); Jc.forEach.call(a, b, c) } :  function Lc(a) { for (var b = 1; b < arguments.length; b++) { var c = arguments[b], d; if (l(c) || (d = yc(c)) && c.hasOwnProperty("callee")) a.push.apply(a, c); else if (d) for (var g = a.length, h = c.length, i = 0; i < h; i++)a[g + i] = c[i]; else a.push(c) } };  function Oc(a) { if (typeof a.Eb == "function") return a.Eb(); if (m(a)) return a.split(""); if (yc(a)) { for (var b = [], c = a.length, d = 0; d < c; d++)b.push(a[d]); return b } return Mc(a) } function Pc(a, b, c) { if (typeof a.forEach == "function") a.forEach(b, c); else if (yc(a) || m(a)) Kc(a, b, c); else { var d; if (typeof a.Fb == "function") d = a.Fb(); else if (typeof a.Eb != "function") if (yc(a) || m(a)) { d = []; for (var g = a.length, h = 0; h < g; h++)d.push(h); d = d } else d = Nc(a); else d = void 0; g = Oc(a); h = g.length; for (var i = 0; i < h; i++)b.call(c, g[i], d && d[i], a) } }; function Qc(a) { this.Bb = {}; this.vb = []; var b = arguments.length; if (b > 1) { if (b % 2) throw Error("Uneven number of arguments"); for (var c = 0; c < b; c += 2)this.set(arguments[c], arguments[c + 1]) } else if (a) { if (a instanceof Qc) { b = a.Fb(); c = a.Eb() } else { b = Nc(a); c = Mc(a) } for (var d = 0; d < b.length; d++)this.set(b[d], c[d]) } } e = Qc.prototype; e.wb = 0; e.Qb = 0; e.Eb =  e.Fb = 
e.Db =  e.remove = function (a) { if (Sc(this.Bb, a)) { delete this.Bb[a]; this.wb--; this.Qb++; this.vb.length > 2 * this.wb && Rc(this); return true } return false }; function Rc(a) { if (a.wb != a.vb.length) { for (var b = 0, c = 0; b < a.vb.length;) { var d = a.vb[b]; if (Sc(a.Bb, d)) a.vb[c++] = d; b++ } a.vb.length = c } if (a.wb != a.vb.length) { var g = {}; for (c = b = 0; b < a.vb.length;) { d = a.vb[b]; if (!Sc(g, d)) { a.vb[c++] = d; g[d] = 1 } b++ } a.vb.length = c } } e.get = function (a, b) { if (Sc(this.Bb, a)) return this.Bb[a]; return b };
e.set = function (a, b) { if (!Sc(this.Bb, a)) { this.wb++; this.vb.push(a); this.Qb++ } this.Bb[a] = b }; e.clone =   var Tc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"); function Uc(a, b) { var c; if (a instanceof Uc) { this.Hb(b == null ? a.yb : b); Vc(this, a.Cb); Wc(this, a.Lb); Xc(this, a.Ib); Yc(this, a.Gb); Zc(this, a.Kb); ad(this, a.zb.clone()); bd(this, a.Jb) } else if (a && (c = String(a).match(Tc))) { this.Hb(!!b); Vc(this, c[1] || "", true); Wc(this, c[2] || "", true); Xc(this, c[3] || "", true); Yc(this, c[4]); Zc(this, c[5] || "", true); ad(this, c[6] || "", true); bd(this, c[7] || "", true) } else { this.Hb(!!b); this.zb = new cd(null, this, this.yb) } } e = Uc.prototype; e.Cb = ""; e.Lb = ""; e.Ib = ""; e.Gb = null; e.Kb = ""; e.Jb = ""; e.Sb = false;
e.yb = false; e.toString = function () { if (this.xb) return this.xb; var a = []; this.Cb && a.push(dd(this.Cb, ed), ":"); if (this.Ib) { a.push("//"); this.Lb && a.push(dd(this.Lb, ed), "@"); var b; b = this.Ib; b = m(b) ? encodeURIComponent(b) : null; a.push(b); this.Gb != null && a.push(":", String(this.Gb)) } this.Kb && a.push(dd(this.Kb, fd)); (b = String(this.zb)) && a.push("?", b); this.Jb && a.push("#", dd(this.Jb, hd)); return this.xb = a.join("") };
e.clone = function () { var a = this.Cb, b = this.Lb, c = this.Ib, d = this.Gb, g = this.Kb, h = this.zb.clone(), i = this.Jb, j = new Uc(null, this.yb); a && Vc(j, a); b && Wc(j, b); c && Xc(j, c); d && Yc(j, d); g && Zc(j, g); h && ad(j, h); i && bd(j, i); return j }; function Vc(a, b, c) { id(a); delete a.xb; a.Cb = c ? b ? decodeURIComponent(b) : "" : b; if (a.Cb) a.Cb = a.Cb.replace(/:$/, ""); return a } function Wc(a, b, c) { id(a); delete a.xb; a.Lb = c ? b ? decodeURIComponent(b) : "" : b; return a } function Xc(a, b, c) { id(a); delete a.xb; a.Ib = c ? b ? decodeURIComponent(b) : "" : b; return a }
function Yc(a, b) { id(a); delete a.xb; if (b) { b = Number(b); if (isNaN(b) || b < 0) throw Error("Bad port number " + b); a.Gb = b } else a.Gb = null; return a } function Zc(a, b, c) { id(a); delete a.xb; a.Kb = c ? b ? decodeURIComponent(b) : "" : b; return a } function ad(a, b, c) { id(a); delete a.xb; if (b instanceof cd) { a.zb = b; a.zb.Nb = a; a.zb.Hb(a.yb) } else { c || (b = dd(b, jd)); a.zb = new cd(b, a, a.yb) } return a } function bd(a, b, c) { id(a); delete a.xb; a.Jb = c ? b ? decodeURIComponent(b) : "" : b; return a }
e.Hb =  var ld = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/; function dd(a, b) { var c = null; if (m(a)) { c = a; ld.test(c) || (c = encodeURI(a)); if (c.search(b) >= 0) c = c.replace(b, md) } return c } var ed = /[#\/\?@]/g, fd = /[\#\?]/g, jd = /[\#\?@]/g, hd = /#/g; function cd(a, b, c) { this.Ab = a || null; this.Nb = b || null; this.yb = !!c }
function u(a) { if (!a.tb) { a.tb = new Qc; if (a.Ab) for (var b = a.Ab.split("&"), c = 0; c < b.length; c++) { var d = b[c].indexOf("="), g = null, h = null; if (d >= 0) { g = b[c].substring(0, d); h = b[c].substring(d + 1) } else g = b[c]; g = decodeURIComponent(g.replace(/\+/g, " ")); g = nd(a, g); a.add(g, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "") } } } e = cd.prototype; e.tb = null; e.wb = null; e.add = function (a, b) { u(this); od(this); a = nd(this, a); if (this.Db(a)) { var c = this.tb.get(a); l(c) ? c.push(b) : this.tb.set(a, [c, b]) } else this.tb.set(a, b); this.wb++; return this };
e.remove = function (a) { u(this); a = nd(this, a); if (this.tb.Db(a)) { od(this); var b = this.tb.get(a); if (l(b)) this.wb -= b.length; else this.wb--; return this.tb.remove(a) } return false }; e.Db =  e.Fb = function () { u(this); for (var a = this.tb.Eb(), b = this.tb.Fb(), c = [], d = 0; d < b.length; d++) { var g = a[d]; if (l(g)) for (var h = 0; h < g.length; h++)c.push(b[d]); else c.push(b[d]) } return c };
e.Eb = function (a) { u(this); if (a) { a = nd(this, a); if (this.Db(a)) { var b = this.tb.get(a); if (l(b)) return b; else { a = []; a.push(b) } } else a = [] } else { b = this.tb.Eb(); a = []; for (var c = 0; c < b.length; c++) { var d = b[c]; l(d) ? Lc(a, d) : a.push(d) } } return a }; e.set = function (a, b) { u(this); od(this); a = nd(this, a); if (this.Db(a)) { var c = this.tb.get(a); if (l(c)) this.wb -= c.length; else this.wb-- } this.tb.set(a, b); this.wb++; return this }; e.get = function (a, b) { u(this); a = nd(this, a); if (this.Db(a)) { var c = this.tb.get(a); return l(c) ? c[0] : c } else return b };
e.toString = function () { if (this.Ab) return this.Ab; if (!this.tb) return ""; for (var a = [], b = 0, c = this.tb.Fb(), d = 0; d < c.length; d++) { var g = c[d], h = Dc(g); g = this.tb.get(g); if (l(g)) for (var i = 0; i < g.length; i++) { b > 0 && a.push("&"); a.push(h); g[i] !== "" && a.push("=", Dc(g[i])); b++ } else { b > 0 && a.push("&"); a.push(h); g !== "" && a.push("=", Dc(g)); b++ } } return this.Ab = a.join("") }; function od(a) { delete a.Mb; delete a.Ab; a.Nb && delete a.Nb.xb }
e.clone = function () { var a = new cd; if (this.Mb) a.Mb = this.Mb; if (this.Ab) a.Ab = this.Ab; if (this.tb) a.tb = this.tb.clone(); return a }; function nd(a, b) { var c = String(b); if (a.yb) c = c.toLowerCase(); return c } e.Hb = function (a) { if (a && !this.yb) { u(this); od(this); Pc(this.tb, function (b, c) { var d = c.toLowerCase(); if (c != d) { this.remove(c); this.add(d, b) } }, this) } this.yb = a }; var pd, qd, rd, sd; sd = rd = qd = pd = false; var ud; if (ud = td()) { var vd = k.navigator; pd = ud.indexOf("Opera") == 0; qd = !pd && ud.indexOf("MSIE") != -1; rd = !pd && ud.indexOf("WebKit") != -1; sd = !pd && !rd && vd.product == "Gecko" } var wd = qd, xd = sd, yd = rd, zd = "", Ad;
if (pd && k.opera) { var Bd = k.opera.version; zd = typeof Bd == "function" ? Bd() : Bd } else { if (xd) Ad = /rv\:([^\);]+)(\)|;)/; else if (wd) Ad = /MSIE\s+([^\);]+)(\)|;)/; else if (yd) Ad = /WebKit\/(\S+)/; if (Ad) { var Cd = Ad.exec(td()); zd = Cd ? Cd[1] : "" } }; var Dd = null, Ed = null, Fd = null, Gd = null; function Hd(a, b, c) { if (typeof a == "number") { this.ub = new Date(a, b || 0, c || 1); Id(this, c || 1) } else { b = xc(a); if (b == "object" || b == "array" || b == "function") { this.ub = new Date(a.getFullYear(), a.getMonth(), a.getDate()); Id(this, a.getDate()) } else { this.ub = new Date; this.ub.setHours(0); this.ub.setMinutes(0); this.ub.setSeconds(0); this.ub.setMilliseconds(0) } } } e = Hd.prototype; e.Ob = 0; e.Pb = 3; e.clone =  e.getFullYear = function () { return this.ub.getFullYear() };
e.getYear =  e.getMonth = function () { return this.ub.getMonth() }; e.getDate = function () { return this.ub.getDate() }; e.getTime = function () { return this.ub.getTime() }; e.getUTCHours = function () { return this.ub.getUTCHours() }; e.getTimezoneOffset = function () { return this.ub.getTimezoneOffset() }; e.set =  e.setFullYear = function (a) { this.ub.setFullYear(a) }; e.setMonth = function (a) { this.ub.setMonth(a) }; e.setDate = 
e.add = function (a) {
    if (a.Ub || a.Tb) { var b = this.getMonth() + a.Tb + a.Ub * 12, c = this.getYear() + Math.floor(b / 12); b %= 12; if (b < 0) b += 12; var d; a: { switch (b) { case 1: d = c % 4 == 0 && (c % 100 != 0 || c % 400 == 0) ? 29 : 28; break a; case 5: case 8: case 10: case 3: d = 30; break a }d = 31 } d = Math.min(d, this.getDate()); this.setDate(1); this.setFullYear(c); this.setMonth(b); this.setDate(d) } if (a.Rb) {
        b = new Date(this.getYear(), this.getMonth(), this.getDate(), 12); a = new Date(b.getTime() + a.Rb * 864E5); this.setDate(1); this.setFullYear(a.getFullYear()); this.setMonth(a.getMonth());
        this.setDate(a.getDate()); Id(this, a.getDate())
    }
}; e.toString = function () { return [this.getFullYear(), Ec(this.getMonth() + 1, 2), Ec(this.getDate(), 2)].join("") + "" }; function Id(a, b) { if (a.getDate() != b) { var c = a.getDate() < b ? 1 : -1; a.ub.setUTCHours(a.ub.getUTCHours() + c) } } e.valueOf =  function Jd() { b = kd(new Uc(window.location.href), "_cldunsub"); d = document.getElementsByName("cd_timezone"); g = document.getElementsByName("cd_cldunsub"); try { var Md = (new Hd).getTimezoneOffset() / 60; for (h = 0; h < d.length; h++)d[h].value = Md } catch (Nd) { } try { for (h = 0; h < g.length; h++)g[h].value = b } catch (Od) { } } var Kd = "clickdimensions.Forms".split("."), y = k; !(Kd[0] in y) && y.execScript && y.execScript("var " + Kd[0]); for (var Ld; Kd.length && (Ld = Kd.shift());)if (!Kd.length && Jd !== undefined) y[Ld] = Jd; else y = y[Ld] ? y[Ld] : y[Ld] = {};


var clickd_lastWindowWidth;


function FitSize() {
    var id = "clickdimensionsForm";
    var form = clickd_jquery("#" + id);

    var extraMargin = 20;
    var flickerGap = 10;

    //Make elements shrink or go back to it's original size
    var formWidth = clickd_jquery(this).width();
    var isWidthShrinking = false;
    var windowWidth = clickd_jquery(window).width();
    //Handle shrink case
    if (typeof clickd_lastWindowWidth == "undefined" || windowWidth < clickd_lastWindowWidth) {
        clickd_jquery(".responsiveCellSize3").each(function () {
            var currWidth = clickd_jquery(this).width();
            if (currWidth + extraMargin - flickerGap > formWidth) {

                clickd_jquery(this).removeClass("responsiveCellSize3");
                clickd_jquery(this).addClass("prevResponsiveCellSize3");
                clickd_jquery(this).addClass("responsiveCellSize2");

                var descendant = clickd_jquery(this).find('.minSize3');

                //Handle the inner elements
                descendant.removeClass("minSize3");
                descendant.addClass("prevMinSize3");
                descendant.addClass("minSize2");

            }
        });
        clickd_jquery(".responsiveCellSize2").each(function () {
            var currWidth = clickd_jquery(this).width();
            if (currWidth + extraMargin - flickerGap > formWidth) {

                clickd_jquery(this).removeClass("responsiveCellSize2");
                clickd_jquery(this).addClass("prevResponsiveCellSize2");
                clickd_jquery(this).addClass("responsiveCellSize1");

                var descendant = clickd_jquery(this).find('.minSize2');

                descendant.removeClass("minSize2");
                descendant.addClass("prevMinSize2");
                descendant.addClass("minSize1");

            }
        });
    }
    //Handle enlarge case
    else {
        clickd_jquery(".prevResponsiveCellSize2").each(function () {

            //Fetch the restored width from css by creating a dummy element
            var el = clickd_jquery('<div class="responsiveCellSize2"></div>').appendTo(form);
            var newWidth = el.width();
            el.remove();

            if (newWidth + extraMargin + flickerGap < formWidth) {

                clickd_jquery(this).removeClass("responsiveCellSize1");
                clickd_jquery(this).addClass("responsiveCellSize2");
                clickd_jquery(this).addClass("responsiveCellSize2");

                var descendant = clickd_jquery(this).find('.minSize1');

                descendant.removeClass("minSize1");
                descendant.addClass("minSize2");
                descendant.removeClass("prevResponsiveCellSize2");
            }
        });
        clickd_jquery(".prevResponsiveCellSize3").each(function () {

            //Fetch the restored width from css by creating a dummy element
            var el = clickd_jquery('<div class="responsiveCellSize3"></div>').appendTo(form);
            var newWidth = el.width();
            el.remove();

            if (newWidth + extraMargin + flickerGap < formWidth) {
                clickd_jquery(this).removeClass("responsiveCellSize2");
                clickd_jquery(this).addClass("responsiveCellSize3");
                clickd_jquery(this).addClass("responsiveCellSize3");

                var descendant = clickd_jquery(this).find('.minSize2');

                descendant.removeClass("minSize2");
                descendant.addClass("minSize3");
                descendant.removeClass("prevResponsiveCellSize3");
            }
        });
    }
    //Save last window width
    clickd_lastWindowWidth = windowWidth;
}

