
const addoorMap = {'eldiario-es': 2747, 'eldiario-pre': 2747, 'canarias_ahora': 2748, 'andalucia': 2788, 'asturias': 2792, 'campobase': 2798, 'carne_cruda': 2800, 'castilla_y_leon': 2802, 'castilla-la_mancha': 2804, 'ileon': 2882, 'elbierzo': 2884, 'comunidad_valenciana': 2812, 'cordopolis': 2886, 'eldiario-es_aragon': 2814, 'eldiarioex': 2816, 'eldiarionorte_cantabria': 2818, 'eldiarionorte_euskadi': 2820, 'eldiarionorte_navarra': 2822, 'eldiarionorte_euskadiandarenbici': 2824, 'murcia': 2826, 'somos': 2828, 'somos_chamberi': 2830, 'somos_chueca': 2832, 'somos_malasana': 2834, 'somos_tetuan': 2836, 'somos_lavapies': 2838, 'hoysesale': 2840, 'catalunya': 2842, 'galicia': 2844, 'illesbalears': 2846, 'quo': 2848, 'eldiarioar': 2850, 'eldiarioar-com': 2850, 'desalambre': 2852, 'madrid': 2854, 'cultura': 2856, 'conectados': 2858, 'tecnologia': 2860, 'edcreativo': 2862, 'era': 2864, 'internacional': 2866, 'viajes': 2868, 'motor': 2870, 'consumoclaro': 2872, 'micromachismos': 2874, 'referentefemenino': 2876, 'responsables': 2878, 'ballenablanca': 2880, 'default': 2747};


const edProp = (window.adDesktopTargeting?.ED_prop || window.adMobileTargeting?.ED_prop || 'default').toLowerCase(); // Convertir a minúsculas
var widgetID = addoorMap[edProp.toLowerCase()]; // Acceder usando la clave en minúsculas

if (widgetID === undefined) {
    widgetID = addoorMap['default'];
}

console.log('edProp', edProp);
console.log('widgetID', widgetID);


const addoorDiv = document.querySelector('.addoor-widget');
if (addoorDiv) {
    addoorDiv.removeAttribute('id'); // Elimina el id existente
    addoorDiv.id = 'addoor-widget-' + widgetID; // Asigna el nuevo id
}

var AddoorCTag = AddoorCTag || (function (w, d, undefined) {
    var version = '13';
    var debug = false;
    if (w.location.search) debug = w.location.search.indexOf('addoor_debug') > -1;
    var prefix_render_js = '//pubtags.addoor.net/contag/js/';
    var widget_class = 'addoor-widget';
    var prefix = 'Addoor';
    var initialized = false;
    var ready_handler = false;
    var ready_done = false;

    this.pvid = Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6);
    this.s_ts = Math.floor(new Date().getTime() / 1000);

    var log = function (o) {
        if (typeof console != undefined && debug) {
        }
    };

    var bindready = function (handler, timeout) {
        log("Binding Ready");
        var t_id = false;
        if (ready_handler) {
            log("Handler already installed");
            return;
        }
        ready_handler = true;

        function ready() {
            if (ready_done) {
                log("Handler already done");
                return true;
            }
            ready_done = true;
            if (t_id) {
                clearTimeout(t_id);
                t_id = false;
            }
            log('Ready to load tags');
            handler();

        }

        if (document.readyState === "complete") {
            log('DOM already ready');
            ready();
            return true;
        }
        if (timeout) {
            log("Setting timeout to: " + timeout);
            t_id = setTimeout(function () {
                log("time is out");
                ready()
            }, timeout);
        }

        if (d.addEventListener) {
            d.addEventListener("DOMContentLoaded", ready, false)
        } else if (d.attachEvent) {
            try {
                var isFrame = w.frameElement != null
            } catch (e) {
            }
            if (d.documentElement.doScroll && !isFrame) {
                function tryScroll() {

                    try {
                        d.documentElement.doScroll("left")
                        ready()
                    } catch (e) {
                        setTimeout(tryScroll, 10)
                    }
                }

                tryScroll()
            }
            d.attachEvent("onreadystatechange", function () {
                if (d.readyState === "complete") {
                    ready()
                }
            })
        }
        if (w.addEventListener) {
            w.addEventListener('load', ready, false);
        }
        else if (w.attachEvent) {
            w.attachEvent('onload', ready);
        } else {
            var fn = w.onload;
            w.onload = function () {
                fn && fn();
                ready();
            }
        }
    };


    var display_id = function (widgetID) {
        log("display: " + widgetID);
        var el;
        var scid = 'js-' + widgetID;
        el = d.getElementById(widgetID);
        if (!el) {
            el = d.createElement('div');
            el.id = widgetID;
            el.className = "addoor-widget";
            d.body.appendChild(el);
        }

        if (!d.getElementById(scid)) {
            (function (w, d, t) {
                var sc = d.createElement(t);
                // covnert widgetID
                sc.src = prefix_render_js + 'addoor-widget-' + widgetID;

                // Check if src has addoor-widget- str duplicate
                if (sc.src.indexOf('addoor-widget-addoor-widget-') > -1) {
                    sc.src = sc.src.replace('addoor-widget-addoor-widget-', 'addoor-widget-');
                }
                  
         
                // sc.src = prefix_render_js + 'addoor-widget-' + widgetID;                
                sc.id = 'js-' + widgetID;
                sc.async = 1;
                var s = d.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(sc, s);
            })(w, d, 'script');
        }
    };

    var display = function (div) {
        display_id(widgetID);
    };

    var discover = function () {
        log("Discover divs");
        var divs = d.getElementsByClassName(widget_class);
        log(divs)
        for (var i = 0; i < divs.length; i++)
            display(divs[i]);
    };

    var _ = {
        init: function () {
            if (w.location.search) debug = w.location.search.indexOf('addoor_debug') > -1;
            if (initialized) return;
            initialized = true;
            bindready(discover, 2000);
        },
        setDebug: function (b) {
            debug = b;
        },
        log: log,
        display: display,
        display_id: display_id,
        discover: discover,
        pvid: this.pvid,
        s_ts: this.s_ts

    };
    log('init ' + version);
    _.init();
    return _;
})(window, document);
