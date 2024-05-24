

if (typeof _tb_dis === 'undefined' || _tb_dis === null) {
    var _tb_dis = false;
}
if (!_tb_dis) {
    var pm_ppy = "editoraglobonetwork";

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
    

    

     /** Generated CJS **/ if (window.location.href.indexOf('valorinveste.globo.com') > -1) {
    var _pm_ecd = {
        'sp': 1,
        'at': '(//span[@itemprop="author"]//meta/@content)[1]',
        'atd': [' e ']
    };

    var _tb_vpx = [{
        'xpath': '//div[@class="block-youtube"]//iframe',
        'attr': 'iframe'
    }, {
        'xpath': '//div[contains(@class, "clappr-player")]',
        'attr': 'div',
        clickToPlayXPath: [{
            'xpath': '//div[contains(@class, "id-playback")]/video',
            'attr': 'div'
        }]

    }, {    
        'xpath': "//twitter-widget",
            'attr': 'div',
            'sroot': "[data-image^=https\\:\\/\\/pbs\\.twimg\\.com\\/ext_tw_video_thumb]",
          
    }];
    var _tb_vpmd = 3;
    var _tb_vautop = false;
} else if (window.location.href.indexOf('casavogue.globo.com') > -1) {
    var _pm_ecd = {

        'opd': ['headline', 'image', 'section', 'title'],
        'sx': '//div[contains(@class, "featured-text")]//h4//a',
        'at': '//div[contains(@class, "author")]//address',
        'regx': '(^(?:[^\(]+)?)'

    };

    var _tb_vpx = [{
        'xpath': '(//div[contains(@class, "video")])[1]',
        'attr': 'div',


        clickToPlayXPath: [{

            'xpath': '//div[contains(@class, "id-playback")]/video',
            'attr': 'div'


        }]

    }];

} else if (window.location.href.indexOf('vogue.globo.com') > -1) {
    var _pm_ecd = {
        'opd': ['headline', 'image', 'section', 'title'],
        'sx': '//div[contains(@class, "featured-text")]//h4//a',
        'at': '//div[@class="authorship"]/ul/li/address',
        'regx': '(^(?:[^\(]+)?)'
    };

    var _tb_vpx = [{
        'xpath': '(//div[contains(@class, "video")])[1]',
        'attr': 'div',


        clickToPlayXPath: [{

            'xpath': '//div[contains(@class, "id-playback")]/video',
            'attr': 'div'


        }]

    }];

} else if (window.location.href.indexOf('gq.globo.com') > -1) {
    var _pm_ecd = {
        'opd': ['headline', 'image', 'section', 'title'],
        'sx': '//div[contains(@class, "featured-text")]//h4//a',
        'at': '//div[@class="authorship"]/ul/li/address',
        'regx': '(^(?:[^\(]+)?)'
    };

    var _tb_vpx = [{
        'xpath': '(//div[contains(@class, "video")])[1]',
        'attr': 'div',


        clickToPlayXPath: [{

            'xpath': '//div[contains(@class, "id-playback")]/video',
            'attr': 'div'


        }]

    }];

} else if (window.location.href.indexOf('glamour.globo.com') > -1) {
    var _pm_ecd = {
        'opd': ['headline', 'image', 'section', 'title'],
        'sx': '//div[@class="header__brand__sub"]',
        'at': '//span[@itemprop="author"]/meta/@content',
        'regx': '(^(?:[^\(]+)?)'
    };

    var _tb_vpx = [{
        'xpath': '(//div[contains(@class, "video")])[1]',
        'attr': 'div',


        clickToPlayXPath: [{

            'xpath': '//div[contains(@class, "id-playback")]/video',
            'attr': 'div'


        }]

    }];
} else if (window.location.href.indexOf('blogs.oglobo.globo.com') > -1) {
    var _pm_ecd = {
        'opd': ['author', 'section', 'image', 'headline'],
        'at': '//meta[@name="author"]/@content',
        'sx': '//p[contains(@class, "post__content--pre-title")]',
        'im': '//meta[@property="og:image"]/@content',
        'hd': 'substring-before(//meta[@property="og:title"]/@content,"|")'
    };

    var _tb_vpx = [{
        'xpath': '//div[contains(@id, "id-player")]',
        'attr': 'div',

        clickToPlayXPath: [{
            'xpath': '//div[contains(@id, "id-player")]',
            'attr': 'div'
        }]
    }];
} else if (window.location.href.indexOf('techtudo.com.br') > -1) {
    var _pm_ecd = {
        'opd': ['author', 'section', 'image', 'headline'],
        'at': '//p[@class="content-publication-data__from"]',
        'sp': '1',
        'im': '//meta[@property="og:image"]/@content',
        'hd': '//meta[@property="og:title"]/@content',
        'ablw': ['Por ', ', para o TechTudo']
    };

    var _tb_vpx = [{
        'xpath': '//div[contains(@class, "playlist__video__player")]',
        'attr': 'div',

        clickToPlayXPath: [{
            'xpath': '//div[contains(@class, "playlist__panel")]',
            'attr': 'div'
        }]
    }];
} else if (window.location.href.indexOf('extra.globo.com') > -1) {
    var _pm_ecd = {
        'opd': ['author', 'section', 'image', 'headline'],
        'at': '//span[@class="author"]',
        'sp': '1',
        'im': '//meta[@property="og:image"]/@content',
        'hd': '//meta[@property="og:title"]/@content'
    };

    var _tb_vpx = [{
        'xpath': '//div[contains(@class, "video center")]//iframe',
        'attr': 'iframe',

        clickToPlayXPath: [{
            'xpath': '//div[contains(@id, "player")]',
            'attr': 'div'
        }]
    }];
} else if (window.location.href.indexOf('m.extra.globo.com/') > -1) {
    var _pm_ecd = {
        'opd': ['author', 'section', 'image', 'headline'],
        'at': '//span[@class="author"]',
        'sp': '1',
        'im': '//meta[@property="og:image"]/@content',
        'hd': '//meta[@property="og:title"]/@content'
    };

    var _tb_vpx = [{
        'xpath': '//div[contains(@class, "video center")]//iframe',
        'attr': 'iframe',

        clickToPlayXPath: [{
            'xpath': '//div[contains(@id, "player")]',
            'attr': 'div'
        }]
    }];
} else if (window.location.href.indexOf('epocanegocios.globo.com/') > -1) {
    var _pm_ecd = {
        'opd': ['author', 'section', 'image', 'headline'],
        'at': '//div[contains(@class, "authorship")]//ul',
        'sp': '1',
        'im': '//meta[@property="og:image"]/@content',
        'hd': '//meta[@property="og:title"]/@content'
    };
} else if (window.location.href.indexOf('revistapegn.globo.com/') > -1) {
    var _pm_ecd = {
        'opd': ['author', 'section', 'image', 'headline'],
        'at': '//div[contains(@class, "authorship")]//ul',
        'sp': '1',
        'im': '//meta[@property="og:image"]/@content',
        'hd': '//meta[@property="og:title"]/@content'
    };
    var _tb_vpx = [{
        'xpath': '//div[contains(@id,"wp3-player-1")]',
        'attr': 'div',
        clickToPlayXPath: [{
            'xpath': '//div[contains(@id,"wp3-player-1")]',
            'attr': 'div'
        }]

    }];
} else if (window.location.href.indexOf('revistamarieclaire.globo.com/') > -1) {
    var _pm_ecd = {
        'opd': ['author', 'section', 'image', 'headline'],
        'at': '//div[contains(@class, "authorship")]//ul',
        'sp': '1',
        'im': '//meta[@property="og:image"]/@content',
        'hd': '//meta[@property="og:title"]/@content'
    };

    var _tb_vpx = [{
        'xpath': '//div[contains(@id,"wp3-player-1")]',
        'attr': 'div',
        clickToPlayXPath: [{
            'xpath': '//div[contains(@id,"wp3-player-1")]',
            'attr': 'div'
        }]
    }];
} else if (window.location.href.indexOf('autoesporte.globo.com/') > -1) {
    var _pm_ecd = {
        'opd': ['author', 'section', 'image', 'headline'],
        'at': '//p[contains(@class, "content-publication-data__from")]',
        'sp': '1',
        'im': '//meta[@property="og:image"]/@content',
        'hd': '//meta[@property="og:title"]/@content',
        'ablw': ["Por"]
    };

    var _tb_vpx = [{
        'xpath': '//iframe[contains(@src,"youtube.com/embed")]',
        'attr': 'iframe',
        clickToPlayXPath: [{
            'xpath': '//iframe[contains(@src,"youtube.com/embed")]',
            'attr': 'iframe'
        }]
    }];
} else if (window.location.href.indexOf('revistacasaejardim.globo.com/') > -1) {
    var _pm_ecd = {
        'opd': ['author', 'section', 'image', 'headline'],
        'at': '//div[contains(@class, "authorship")]//ul',
        'sp': '1',
        'im': '//meta[@property="og:image"]/@content',
        'hd': '//meta[@property="og:title"]/@content',
        'ablw': ["Por"]
    };
    var _tb_vpx = [{
        'xpath': '//div[contains(@id, "wp3-player-1")]//iframe[contains(@src, "imasdk.googleapis.com")]',
        'attr': 'iframe',

        clickToPlayXPath: [{
            'xpath': '//div[contains(@id, "wp3-player-1")]//iframe[contains(@src, "imasdk.googleapis.com")]',
            'attr': 'iframe'
        }]
    }];
} else if (window.location.href.indexOf('revistacrescer.globo.com/') > -1) {
    var _pm_ecd = {
        'opd': ['author', 'section', 'image', 'headline'],
        'at': '//div[contains(@class, "authorship")]//ul',
        'sp': '1',
        'im': '//meta[@property="og:image"]/@content',
        'hd': '//meta[@property="og:title"]/@content'
    };
    var _tb_vpx = [{
        'xpath': '//div[contains(@id, "wp3-player-1")]',
        'attr': 'div',

        clickToPlayXPath: [{
            'xpath': '//div[contains(@id, "wp3-player-1")]',
            'attr': 'div'
        }]
    }];
} else if (window.location.href.indexOf('revistamonet.globo.com/') > -1) {
    var _pm_ecd = {
        'opd': ['author', 'section', 'image', 'headline'],
        'at': '//div[contains(@class, "authorship")]//ul',
        'sp': '1',
        'im': '//meta[@property="og:image"]/@content',
        'hd': '//meta[@property="og:title"]/@content'
    };
} else if (window.location.href.indexOf('revistagalileu.globo.com') > -1) {
    var _pm_ecd = {
        'opd': ['author', 'section', 'image', 'headline'],
        'at': '//div[contains(@class, "authorship")]//ul',
        'sp': '1',
        'im': '//meta[@property="og:image"]/@content',
        'hd': '//meta[@property="og:title"]/@content'
    };
    var _tb_vpx = [{
        'xpath': '//iframe[contains(@src, "youtube.com/embed")]',
        'attr': 'iframe',

        clickToPlayXPath: [{
            'xpath': '//iframe[contains(@src, "youtube.com/embed")]',
            'attr': 'iframe',
        }]
    }];
}



else if (window.location.href.indexOf('revistagloborural.globo.com/') > -1) {
    var _pm_ecd = {
        'opd': ['author', 'section', 'image', 'headline'],
        'at': '//div[contains(@class, "authorship")]//ul',
        'sp': '1',
        'im': '//meta[@property="og:image"]/@content',
        'hd': '//meta[@property="og:title"]/@content'
    };
    var _tb_vpx = [{
        'xpath': '//iframe[contains(@src, "youtube.com/embed")]',
        'attr': 'iframe',

        clickToPlayXPath: [{
            'xpath': '//iframe[contains(@src, "youtube.com/embed")]',
            'attr': 'iframe',
        }]
    }];
}


 else if (window.location.href.indexOf('valor.globo.com') > -1) {
    var _pm_ecd = {
        'opd': ['author', 'section', 'image', 'headline'],
        'at': '//p[contains(@class, "content-publication-data__from")]/@title',
        'sp': '1',
        'im': '//meta[@property="og:image"]/@content',
        'hd': '//meta[@property="og:title"]/@content',
        'ablw': ["Por", "e"]
    };

    var _tb_vpx = [{
        'xpath': '//div[contains(@class, "playlist__midia__proportion")]',
        'attr': 'div',
    }];
}

var _tb_vautop = false;/** Generated CJS end **/ 
}