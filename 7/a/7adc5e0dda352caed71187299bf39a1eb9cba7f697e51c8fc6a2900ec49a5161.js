var _gaq = _gaq || [];
(function($) {
    // zabezpieczenie na kilkukrotne zaciagniecie skryptu
    // jeśli serwis korzysta z UA to też out
    if ('function' === typeof cGR.prototype.oTrackEvent || oG_OSA.typAnalytics === 'UA') {
        return;
    }
    var trackers = {},
        clouds = [],
        timer,
        defaultData = {
            transaction: {data: undefined, items: undefined},
            customVariable: [],
            pageViews: []
        };

    /**
     * Funkcja czysci string lub tablice stringow z polskich znakow
     *
     * @param toSecure String|Array
     * @return String|Array string bez polskich znakow jesli podany byl string lub tablice ze stringami bez poslkich
     *                      znakow jeslipodana byla tablica. Wszystkie znaki poza alfanumerycznymi - / _ zostana usuniete
     */
    function secureString(toSecure) {
        var replacements = {
            'ą': 'a', 'Ą': 'A',
            'ć': 'c', 'Ć': 'C',
            'ę': 'e', 'Ę': 'E',
            'ł': 'l', 'Ł': 'L',
            'ń': 'n', 'Ń': 'N',
            'ó': 'o', 'Ó': 'O',
            'ś': 's', 'Ś': 'S',
            'ź': 'z', 'Ź': 'Z',
            'ż': 'z', 'Ż': 'Z'
        };
        if (toSecure instanceof Array) {
            var secured = [];
         his);
            });
            return secured;
        } else if (toSecure instanceof Number) {
            return parseInt(toSecure);
        } else if (toSecure && toSecure.replace) {
            return toSecure.replace(/txt];
            });
        } else {
            return toSecure;
        }
    }

    /**
     * Funkcja pomocnicza. Umieszcza dane z wszystkich trakerow w obiekc;
        });
    }

    /**
     * Konstruktor obiektu sledzenia zdarzenia
     *
     * @param eventConfigObject Object Obiekt musi miec dwa parametry
     *                                 config: Object {
     *                                     counter: Boolean, - opcjonalny domyslnie false
     *                                     initCall: Function, - opcjonalny domyslnie undefined. Dodatkowa funkcja do
     *                                                           sprawdzenia czy wykonac zdarzenie.
     *                                                           Przyjmuje dwa parametry obiek Event jQuery i obiekt html
     *                                     callBack: Function, - domyslnie undefined. Dodatkowa funkcja,
     *                                                           ktora wykonuje sie po wykonaniu zdarznia
     *                                     data: {
     *                                         category: String, parametr obowiazkowy - kategoria
     *                                         action: String, parametr obowiazkowy - akcja
     *                                         optLabel: String, parametr opcjonalny
     *                                         optValue: Number, parametr opcjonalny
     *                                         optNoninteraction: Boolean parametr objonalny domyslnie true. Czy NIE ingerowac w np bouncerate
     *                                     }
     *                                 }
     *                                 objects: jQuery, obiekt jquery elementow do ktorych ma zostac podpiete zdonfigObject);
    }
    $.extend(EventTracker.prototype, {
        eventAttach: function (tracker) {
            var config = this.config,
                attachedFunction,
                that = this;

            function triggerEvent(number) {
                if ('function' === typeof tracker.triggerEvent) {
                    tracker.triggerEvent($.extend({number: number}, config.data));
                } else {
                    $.each(tracker, function () {
                        this.triggerEvent($.extend({number: number}, config.data));
                    });
                }
                pushToGaq();
            }
            function isTracker(tracker) {
                var isTrack = true;
                if ('object' === typeof tracker) {
                    if ('function' !== typeof tracker.triggerEvent) {
                        return true;
                    }
                    $.each(tracker, function () {
                        isTrack = 'object' === typeof this && 'function' === typeof this.triggerEvent
                        return isTrack;
                    });
                    return isTrack;
                }
                return false;
            }
            tracker = tracker || trackers;
            if (!isTracker(tracker)) {
                throw new Error('Nie zdefiniowano lub zdefiniowano b\u0142\u0119dny tracker');
            }
            this.attachedFunction = attachedFunction = function (e) {
                if ('function' === typeof config.initCall) {
                    if (config.initCall(e, this)) {
                        triggerEvent(config.counter ? e.data.number : undefined);
                    }
                } else {
                    triggerEvent(config.counter ? e.data.number : undefined);
                }
                if ('function' === typeof config.callBack) {
                    config.callBack(e, this);
                }
            };
            this.objects.each(function (i) {
                $(this).on('click track-event', {number: i}, attachedFunction);
              }
            });
        },
 unction);
        },
        debug: function () {
            var strRep = '',
                i = 1;
            if ('nm' === oG_OSA.serwis && this.config.counter) {
                strRep = '{!$number$!}';
            }
            this.objects.attr({
                title: this.config.data.category + strRep + ':' + this.config.data.action + ':' + (this.config.data.optLabel || ' ') + ':' + (this.config.data.optValue || 0),
                rel: "{fn: 'title', pozycja: 'bc', czasNad: 10, czasPod: 10}"
            }).each(function() {
                var $this = $(this);
                if (strRep.length) {
                    $this.attr({title : $this.attr('title').replace(strRep, i++) });
                }
                $this.attr('class', 'chmurki debug ' + $this.attr('class'));
            });
            $.merge(clouds, this.objects.toArray());
            clearTimeout(timer);
           uds);
            }, 700);
        }
    });

    // prefix, account, domain, restrictToDomain
    function gaTracker(trackerConfig) {
        var config = {prefix: '', account: undefined, domain: undefined, restrictToDomain: false, setAllowAnchor: false},
            transaction = {data: undefined, items: undefined},
            triggeredEvents = [],
            variables = [],
            pageViews = [],
            pushed = {config: false, transaction: true, variables: true, pageViews: true, events: true},
            tracker;

        function addPrefix(string) {
            return config.prefix ? config.prefix + '.' + string : string;
        }
        $.extend(config, trackerConfig);
        if (trackers[config.prefix]) {
            if (config.account && trackers[config.prefix].account === config.account) {
                throw new Error('Pr\xF3ba przypisania konta ' + config.account + ' do istniej\u0105cego trakera o prefiksie: ' + config.prefix + ', koncie: ' + trackers[config.prefix].account);
            }
            return trackers[config.prefix];
        }
        if (!config.account) {
            throw new Error('Brak zdefiniowanego kodu konta dla prefiksu: ' + config.prefix);
        }
        if (!config.restrictToDomain && config.domain && 0 !== config.domain.indexOf('.')) {
            config.domain = '.' + config.domain;
        }
        tracker = {
            account: config.account,
            // data, items
        alse;
            },
            // index, name, value, optScope
            addCustomVariable: function (customVariable) {
                variables.push($.extend(
                    {index: undefined, name: undefined, value: undefined, optScope: 3},
                    customVariable
                ));
                pushed.variables = false;
            },
            addPageView: function (pageView) {
                pageViews.push($.extend(
                    {value: undefined},
                    pageView
                ));
                pushed.pageViews = false;
            },
            triggerEvent: function (event) {
                triggeredEvents.push(event);
                pushed.events = false;
                this.pushToGaq();
            },
            getDataToPush: function () {
                var transactionTable,
                    data = [];
                if (!pushed.config) {
                    data.push([addPrefix('_setAccount'), config.account]);

                    if (config.domain) {
                        data.push([addPrefix('_setDomainName'), config.domain]);
                    }

                    if (config.setAllowAnchor) {
                        data.push([addPrefix('_setAllowAnchor'), true]);
                    }
                }
                if (!pushed.transaction && transaction.data) {
                    transactionTable = Array.prototype.slice.call(transaction.data);
                    transactionTable.unshift(addPrefix('_addTrans'));
                    data.push(secureString(transactionTable));
                    $.each(transaction.items, function () {
                        this.unshift(addPrefix('_addItem'));
                        data.push(secureString(this));
                    });
                    data.push([addPrefix('_trackTrans')]);
                }
                if (!pushed.variables && variables.length) {
                    $.each(variables, function () {
                        data.push([
                          addPrefix('_setCustomVar'),
                          secureString(this.index),
                          secureString(this.name),
                          secureString(this.value),
                          secureString(this.optScope)
                        ]);
                    });
                }
                if (!pushed.config) {
                    data.push([addPrefix('_trackPageview')]);
                }
                if (!pushed.events && triggeredEvents.length) {
                    $.each(triggeredEvents, function() {
                        var value = this.optValue || 0,
                            category =  this.category;
                        if (this.number && !value) {
                            value = this.number;
                        }
                        if ('nm' === oG_OSA.serwis && value) {
                            category += '_' + (value+1);//+1 dla analitykow zeyb od 0 nie bylo
                        }
                        data.push([
                            addPrefix('_trackEvent'),
                            secureString(category),
                            secureString(this.action) || '',
                            secureString(this.optLabel || ''),
                            secureString(value),
                            this.optNoninteraction || true
                        ]);
                    });
                }
                return data;
            },
            clearDataToPush: function () {
                $.extend(pushed, {config: true, transaction: true, variables: true, pageViews: true, events: true});
                transaction = {data: undefined, items: undefined};
                triggeredEvents = [];
                variables = [];
                pageViews = [];
            },
            pushToGaq: function () {
                $.each(this.getDataToPush(), function () {
                    if (oG_OSA.debugOnclick && window.console && window.console.log) {
                        console.log(this);
                    }
                    _gaq.push(this);
                });
                this.clearDataToPush();
            }
        };
        trackers[config.prefix] = tracker;
        return tefore(ga, s);
    })();

    /**
     * Funkcja uruchamia zdarzenie natychmiast, bez czekania na kliknięcie w jakiś obiekt
     *
     * @param eventData Object
     *                                      {
     *                                         category: String, parametr obowiazkowy - kategoria
     *                                         action: String, parametr obowiazkowy - akcja
     *                                         optLabel: String, parametr opcjonalny
     *                                         optValue: Number, parametr opcjonalny
     *                                         optNoninteraction: Boolean parametr objonalny domyslnie true. Czy NIE ingerowac w np bouncerate
     *                                     }
     */
    cGR.prototype.oTrackEventNow = function (eventData) {
   eventData);
        });
    };

    cGR.pr.eventAttach();
    };

    cGR.prototype.oTrackEvents = function (events) {
        function getConfig(object) {
            var isOld = 'undefined' !== typeof object.href,
                hrefParts = [],
                label;

            if (isOld) {
                hrefParts = object.href.replace(/\//g, ' ').trim().split(/\s+/);
                if ('onclick' === hrefParts[0]) {
                    hrefParts.shift();
                }
                if (typeof oG_OSA.onclick_id !== 'undefined') {
                    hrefParts.unshift(oG_OSA.onclick_id);
                }
                label = hrefParts.length > 2 ? hrefParts.slice(2).join(' '): '';

                // dla serwisu nm scalamy category, action i optLabel do category
                if ('nm' === oG_OSA.serwis) {
                    label = hrefParts.length > 2 ? '/'+hrefParts.slice(2).join('_'): '';
                    hrefParts[0] += '/'+hrefParts[1]+label;

                    oG_OSA.customVariable = oG_OSA.customVariable || defaultData.customVariable;
                    if (typeof oG_OSA.customVariable !== 'undefined') {
                    	if (typeof oG_OSA.customVariable[0] !== 'undefined') {
                    		hrefParts[0] += oG_OSA.customVariable[0].value;
                    	}
                    }
                    hrefParts[0] = hrefParts[0].replace(/\//g, '_');
                    hrefParts[1] = 'klik';
                    label = '';
                }
                return {
                    counter: object.licznik || false,
                    initCall: object.initCall || undefined,
                    callBack: object.callBack || undefined,
                    data: {
                        category: hrefParts[0] || '',
                        action: hrefParts[1] || '',
                        optLabel: label,
                        optValue: parseInt(object.value, 10) || 0,
                        optNoninteraction: true
                    }
                };
            } else {
                return $.extend({
                        counter: false,
                        initCall: undefined,
                        callBack: undefined,
                        data: {}
                    }, object.config);
            }
        }
        function getElements(object) {
            var elements = object.elements || [];
            if (!elements.length) {
                return elements;
            }
            if (!(elements instanceof $)) {
                if (!(elements instanceof Array)) {
                    elements = $(elements).toArray();
                }
                elements = $(elements);
            }
            retu!value;
            });
        }
        if (!(events instanceof Array)) {
            return;
        }
        $(function() {
            $.each(events, function () {
                var objects = getElements(this);
                if (!objects || !objects[0]) {
                    return;
                }
                GR('oTrackEvent', {
                    objects: objects, config: getConfig(this)
                });
            });
        });
    };

    cGR.prototype.oTrackGettracker = function (config, callback) {
        //prefix, account, domain, restrictToDomain
        var tracker = gaTracker(config || {});
        if ('function' === typeof callback) {
            callback(tracker);
        }
        return tracker;
    };

    cGR.prototype.o = transaction;
    };
    cGR.prototype.oTrackSetcustomvariable = function (variable) {
        if ('string' === typeof variable) {
            defaultData.customVariable.push({index: 1, name: variable, value: 'true', optScope: 3});
        } else if ('object' === typeof variable) {
            defaultData.customVariable.push(variable);
        }
    };
    cGR.prototype.oTrackSetpageviews = function (variable) {
        if ('string' === typeof variable) {
            defaultData.pageViews.push({value: variable});
        } else if ('object' === typeof variable) {
            defaultData.pageViews.push(variable);
        }
    };

    cGR.prototype.oTrackBoot = function () {
        $.each(trackers, function (prefix, tracker) {
            if (defaultData.transaction) {
                tracker.setTransaction(defaultData.transaction);
            }
            if (defaultData.customVariable.length) {
                $.each(defaultData.customVariable, function () {
                    if (!this.index) {
                        index = 1;
                    }
                    tracker.addCustomVariable(this);
                });
            }
            if (defaultData.pageViews.length) {
                $.each(ds);
                });
            }
        });
        defaultData.transaction = undefined;
        defaultData.customVariable = [];
        defaultData.pageViews = [];
        pushToGaq();
    };

    // podmiana starych wywolan


    cGR.prototype.oTrackInit = cGR.prototype.oTrackEvents;

    cGR.prototype.GAustawDomyslny = function (kod, domena) {
        if (!defaultData.kody) {
            defaultData.kody = [];
        }
        defaultData.kody[0] = kod || defaultData.kody[0];
        defaultData.domena = domena || (null === domena ? null : defaultData.domena);
    };
    cGR.prototypekody.push(kod);
    };
    cGR.prototyp: przedmioty});
    };

    cGR.prototype.GAustawZmienna = cGR.prototype.oTrackSetcustomvariable;

    cGR.prototype.GoogleAnalytics = function () {
        if (!defaultData.kody) {
            defaultData.kody = ['UA-969241-2'];
            defaultData.domena = 'gratka.pl';
        }
        $.each(defaultData.kody, function (number) {
            GR('oTrackGettracker', {
                prefix: 0 === number ? '' : String.fromCharCode(97 + number),// 97 to kod "a"
                account: this,
                domain: defaultData.domena || undefined,
                restrictToDomain: false
            });
        });
        GR('oTrackBoot');
        if ("undefined" === typeof oG_OSA.GAtracker) {
            oG_OSA.GAtracker = gaTracker();
        }
    };

    cGR.prototype.oTrackGoogleanalytics = cGR.prototype.GoogleAnalytics;
    // koniec starych wywolan
})(jQuery);