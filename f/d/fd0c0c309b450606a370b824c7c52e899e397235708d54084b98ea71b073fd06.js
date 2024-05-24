

if (typeof _tb_dis === 'undefined' || _tb_dis === null) {
    var _tb_dis = false;
}
if (!_tb_dis) {
    var pm_ppy = "ndtv-khabar";

    var _pmep = '//pm-widget.taboola.com/';
    var _pmep_geo = '//pm-widget.taboola.com/';
    if (document.URL.indexOf('https://') > -1) {
        _pmep = _pmep.replace(/88\//gi, '90/');
        _pmep_geo = _pmep_geo.replace(/88\//gi, '90/');
    }
    var _pmpmk = pm_ppy + '/pmk-20220605.10.js';
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
    'sx': '(//div[contains(@class, "breadcrumb__ol")]/span[last()-1])',
    'at': '//span[@itemprop="author"]//span',
    'ablw': ["Reported by", "Written by:", "Reported by: ", "Edited by ", ": ", "Edited by"]
};

var _tb_vpx = [{
        'xpath': '//div[contains(@class,"story_pic")]//iframe[contains(@src,"embed-player") or contains(@src,"instagram")]',
        'attr': 'iframe'
    },
    {
        'xpath': '//div[contains(@class,"twitter")]//iframe',
        'attr': 'iframe'
    },
    {
        'xpath': '//div[contains(@id,"vidContainer")]//div[contains(@id,"vidHolder")]',
        'attr': 'div'
    },
    {
        'xpath': '//div[contains(@class,"cStory")]//iframe[contains(@src,"embed-player")]',
        'attr': 'iframe'
    },
    {
        'xpath': '//div[contains(@class,"cStory")]//iframe[contains(@class,"instagram")]',
        'attr': 'iframe'
    },
];

var _tb_vpx = [
{
'xpath': "//twitter-widget",
'attr': 'div',
'sroot': "[data-image^=https\\:\\/\\/pbs\\.twimg\\.com\\/ext_tw_video]",
}];
 
var _tb_vautop = false;
var _tb_vpmd = 3;/** Generated CJS end **/ 
}