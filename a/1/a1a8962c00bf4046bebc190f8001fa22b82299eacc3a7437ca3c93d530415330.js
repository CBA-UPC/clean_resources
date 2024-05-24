

if (typeof _tb_dis === 'undefined' || _tb_dis === null) {
    var _tb_dis = false;
}
if (!_tb_dis) {
    var pm_ppy = "futureplc-network";

    var _pmep = '//pm-widget.taboola.com/';
    var _pmep_geo = '//pm-widget.taboola.com/';
    if (document.URL.indexOf('https://') > -1) {
        _pmep = _pmep.replace(/88\//gi, '90/');
        _pmep_geo = _pmep_geo.replace(/88\//gi, '90/');
    }
    var _pmpmk = pm_ppy + '/pmk-20220605.13.js';
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
    

    

     /** Generated CJS **/ if (window.location.href.indexOf('www.gamesradar.com') > -1) {
    var _pm_ecd = {
        'sx': '(//nav[@class="breadcrumb"]//li/a)[2]',
        'ncnsnt': true 
    };

} else if (window.location.href.indexOf('www.whathifi.com/awards/') > -1) {
    var _pm_ecd = {
        'opd': ["section"],
        'sp': 1,
        'at': '//div[contains(@class,"header-sub")]//span[contains(@class,"author")]//a',
        'ncnsnt': true 
    };
    var _tb_vpx = [

        {
            'xpath': '//div[contains(@class,"videoWrapper")]/iframe',
            'attr': 'iframe'
        }

    ];

} else if (window.location.href.indexOf('www.whathifi.com/') > -1) {
    var _pm_ecd = {
        'opd': ["section"],
        'sx': '(//nav[@class="breadcrumb"]//li/a)[2]',
        'at': '//div[contains(@class,"header-sub")]//span[contains(@class,"author")]//a',
        'ncnsnt': true 
    };
    var _tb_vpx = [

        {
            'xpath': '//div[contains(@class,"videoWrapper")]/iframe',
            'attr': 'iframe'
        }

    ];

} else if (window.location.href.indexOf('livescience.com') > -1) {
    var _pm_ecd = {
        'sx': '(//nav[@class="breadcrumb"]//li/a)[2]',
        'opd': ["section"],
        'ncnsnt': true 
    };
    var _tb_vpx = [{
        'xpath': "//twitter-widget",
        'attr': 'div',
        'sroot': "[data-image^=https\\:\\/\\/pbs\\.twimg\\.com\\/tweet_video_thumb]",
    }];
    var _tb_vpmd = 3;

}
 else if (window.location.href.indexOf('fourfourtwo.com') > -1) {
    var _pm_ecd = {
     'hd': '//meta[@property="og:title"]/@content',
    'im': '//meta[@property="og:image"]/@content',
   'opd': ['section','image','headline','author'] 
    };
     var _tb_vpx = [

        {
            'xpath': "//twitter-widget",
            'attr': 'div',
            'sroot': "[data-image^=https\\:\\/\\/pbs\\.twimg\\.com\\/media]",
        }

    ];
    var _tb_vpmd = 3;

}
else {
    var _pm_ecd = {
    'hd': '//meta[@property="og:title"]/@content',
    'im': '//meta[@property="og:image"]/@content',
   'sx': '//meta[@property ="article:section"]/@content',
   'opd': ['section','image','headline','author']

}; 
    var _tb_vpx = [

        {
            'xpath': "//twitter-widget",
            'attr': 'div',
            'sroot': "[data-image^=https\\:\\/\\/pbs\\.twimg\\.com\\/media]",
        }

    ];
    var _tb_vpmd = 3;
}

var _tb_vpx = [{

    'xpath': '//iframe[contains(@src,"ultimedia")]',
    'attr': 'iframe'

},
{
 'xpath': '//div[@class="future__jwplayer"]',
    'attr': 'div'

}];

var _tb_vautop=false;/** Generated CJS end **/ 
}