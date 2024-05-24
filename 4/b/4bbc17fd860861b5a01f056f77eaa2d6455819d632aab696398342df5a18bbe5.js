

if (typeof _tb_dis === 'undefined' || _tb_dis === null) {
    var _tb_dis = false;
}
if (!_tb_dis) {
    var pm_ppy = "theweatherchannel";

    var _pmep = '//pm-widget.taboola.com/';
    var _pmep_geo = '//pm-widget.taboola.com/';
    if (document.URL.indexOf('https://') > -1) {
        _pmep = _pmep.replace(/88\//gi, '90/');
        _pmep_geo = _pmep_geo.replace(/88\//gi, '90/');
    }
    var _pmpmk = pm_ppy + '/pmk-20220605.42.js';
    var _pmasync = true;
    var _pmoptimization = true;
    var _pmoptimizationmanipulation = true;
    var _pmhp = false;
    var _pmsb = false;

    
    var pmk, pmglb, pmfa, pmad, pmdebug_c;
    pmglb = pmglb || null;
    pmfa = pmfa || null;
    pmad = pmad || null;
    pmdebug_c = pmdebug_c || null;
    pmk = pmk || null;
    var _pmenv = _tb_getUrlParameter('pmenv');
    //pm async
    var _pma = _tb_getUrlParameter('_pma');
    if (_pma == true) {
        _pmasync = true;
    }

    if (_pmenv && _pmenv == 'sandbox' && !_pmsb) {

        _pmep = '//pm-widget-sandbox.taboola.com/';
        _pmep_geo = '//pm-widget-sandbox.taboola.com/';
        var _tb_d = new Date();
        var _tb_rand = _tb_d.getTime();
        _pmpmk = pm_ppy + "/load.js?" + _tb_rand;
    }

    (();
    

    

     /** Generated CJS **/ var _pm_ecd = {
    'sp': 1,
    'at': '//div[contains(@class, "article-credits")]//div[contains(@class, "field__items")] | //div[contains(@class,"article-wrapper")]//h4/span',
    'ablw': ['Von', 'Par', 'Por', 'Door']
};


_tb_vpx = [{
    xpath: '//div[contains(@class, "akamai-video")]',
    attr: "div"
}
];

var _tb_vpx = [{
    'xpath': '//div[contains(@class, "jwplayer")]//div[contains(@style, "background-image")]',
    'attr': 'div',
    clickToPlayXPath: [{
            'xpath': '//div[contains(@class, "jwplayer")]',
            'attr': 'div'
        }
    ]
}];

var _tb_vautop=false;/** Generated CJS end **/ 
}