/*! ipsos.js  env: uat  date: 2024-01-16T05:14:17.229Z */
(function() {
    var inLocalStorage = 
var debug = function (message) {
    // window.console is guaranteed to exist
    // https://developer.mozilla.org/en-US/docs/Web/API/console
    if (inLocalStorage()) {
        console.log(message);
        
    }
};

var id = 'ipsos-script-tag';
var isExists = document.getElementById(id);
window.nca_ipsos = window.nca_ipsos || {};
var getLocation = 
var logger = ['Ipsos data:'];
var lastSlicedPath = null;
var hasScrollAction = false;

window.nca_ipsos = window.nca_ipsos || {};

window.nca_ipsos.isTabActive = function () {
    var stateKey, eventKey, keys = {
        hidden: "visibilitychange",
        webkitHidden: "webkitvisibilitychange",
        mozHidden: "mozvisibilitychange",
        msHidden: "msvisibilitychange"
    };
    for (stateKey in keys) {
        if (stateKey in document) {
            eventKey = keys[stateKey];
            break;
        }
    }
    return 
};

window.nca_ipsos.isElementVisible = function(obj){
    var rect = obj.elem.getBoundingClientRect(),
        el = obj.elem,
        vWidth = window.innerWidth || document.documentElement.clientWidth,
        vHeight = window.innerHeight || document.documentElement.clientHeight,
        efp = 
   // Check current top pixel of itself, happens when parent element has display:none;
    if( ! el.contains( efp(rect.left, rect.top) ) ) return false;
    // Check adslot top and left edge within the viewport
    if (rect.left < 0 || rect.top < 0 ) return false;
    // Check adslot bottom Edge within viewport Height, <= covers the responsive layout (happens in mobile footer ads)
    var rectBottomEdgeCheck = rect.bottom <= vHeight;
    // Check adslot right Edge within viewport Width, <= covers the responsive layout.
    var rectRightEdgeCheck = rect.right <= vWidth;
    return rectBottomEdgeCheck && rectRightEdgeCheck;
};

if(window){
    window.onscroll = 
}

  QueryStrBuilder.prototype = {
    // prevents duplication of query parameter.
    update: function(){
      var scope = this;
      scope.params = [];
      Object.keys(scope.tmp).forEach(function(key){
        if(scope.tmp[key]) scope.params.push(key+'='+scope.tmp[key]);
      });
    },
    addParams: function (key, value){
      var scope = this;
      scope.tmp[key]=value;
      scope.update();
    },
    getParams: function (){
      var scope = this;
      var qs = '';
      scope.params.forEach(function(param, idx){ qs += (idx===0) ? '?'+ param : '&'+param; });
      return qs;
    },
    // specific methods
    addSection: function(section) {
      var scope = this;
      scope.tmp.t = section;
      scope.update();
    },
    addHost: function() {
      var scope = this;
      scope.tmp.d = document.location.host;
      scope.update();
    }
  };
  var qsBuilder = new QueryStrBuilder();
  

var getSiteConfigs = function(){
    return {
        ttb: {
            siteId: '1566',
            homepageId: '13085',
            sectionId: '13086',
            // (new)
            'news/townsville': '13086', // 13306
            'news/queensland': '13086', // 13307
            'news/national': '13086', // 13308
            'news/world': '13086', // 13309
            'news/opinion': '13086', // 13310
            'business/townsville-business': '13311',
            entertainment: '13312',
            lifestyle: '13313',
            sport: '13314',
            // additional
            classifieds: '13434'
        },
        gq: {
            siteId: '1571',
            homepageId: '13096',
            sectionId: '13097',
            // (new)
            'gq-women': '13097'
        },
        news: {
            siteId: '1554',
            homepageId: '13056',
            sectionId: '13057',
            // (default)
            national: '13057', // 13188
            world: '13057',   // 13189
            lifestyle: '13190',
            travel: '13191',
            entertainment: '13192',
            technology: '13193',
            finance: '13194',
            sport: '13195',
            /* additional (needs clarity)
            decider: '0000',
            newyorkpost: '0000',
            pagesix: '13366',*/
            weather: '13368',
            'in-the-know-quiz': '13369',
            'intheknow-quiz': '13369',
            'finance/business': '14705',
            'finance/money': '14706',
            'finance/real-estate': '14707',
            'technology/motoring': '14715',
            'lifestyle/food': '14716',
            'lifestyle/parenting': '14717',
            'lifestyle/health': '14718',
            'lifestyle/fitness': '14719',
            'lifestyle/beauty': '14720',
            'lifestyle/relationships': '14721'
        },
        taus: {
            siteId: '1555',
            homepageId: '13058',
            sectionId: '13059',
            // (default)
            nation: '13196',
            world: '13059',  // 13197
            business: '13198',
            commentary: '13059', // 13199
            sport: '13200',
            arts: '13201',
            // additional
            'higher-education': '13370',
            life: '13372',                              // lifeluxury
            travel: '13373',
            'the-oz': '13059' // 13531
        },
        ///////////
        // Metros
        ///////////
        hwt: {
            siteId: '1557',
            homepageId: '13062',
            sectionId: '13063',
            // (default)
            leader: '13214',
            'news/victoria': '13063', // 13215
            'news/national': '13063', // 13216
            'news/world': '13063', // 13217
            'news/opinion': '13063', // 13218
            'business/victoria-business': '13219',
            entertainment: '13220',
            lifestyle: '13221',
            sport: '13222',
            // additional
            'real-estate': '13385',
            weather: '13386',
            // travel: '13387',
            classifieds: '13388',
            technology: '13389'
        },
        'todayspaper.hwt': {
            siteId: '0000',
            homepageId: '15045',    
            sectionId: '15045'      
        },
        tcm: {
            siteId: '1558',
            homepageId: '13064',
            sectionId: '13065',
            questnews: '13225',
            /* News Regional
            'news/queensland/ipswich': '13395',                     // Queensland Times
            'news/queensland/gympie':  '13396',                     // Gympie Times
            'news/queensland/whitsunday': '13397',                  // Whitsunday Times
            'news/queensland/chinchilla': '13398',                  // Chinchilla News
            'news/queensland/central-queensland': '13399',          // Central Queensland News
            'news/queensland/gatton': '13400',                      // Gatton Star
            'news/queensland/south-burnett': '13401',               // South Burnett Times
            'news/queensland/roma': '13402',                        // Western Star
            'news/nsw/byron-shire': '0000',                         // Byron Shire News
            */
            'news/queensland/sunshine-coast': '13403',              // Sunshine Coast Daily
            'news/queensland/rockhampton': '13404',                 // Morning Bulletin
            /*
            'news/queensland/noosa': '13405',                       // Noosa News
            'news/queensland/dalby': '13406',                       // Dalby Herald
            'news/queensland/warwick': '13407',                     // Warwick Daily News
            'news/queensland/central-and-north-burnett': '13408',   // Central & North Burnett Times
            'news/queensland/stanthorpe': '13409',                  // Stanthorpe Border Post
            'news/queensland/fraser-coast': '13410',                // Fraser Coast Chronicle
            'news/queensland/bundaberg': '13411',                   // News Mail
            'news/queensland/gladstone': '13412',                   // Gladstone Observer
            */
            'news/queensland/mackay': '13413',                      // Daily Mercury
            
            // (default)
            'news/queensland': '13065', // 13226
            'news/national': '13065', // 13227
            'news/world': '13065', // 13228
            'news/opinion': '13065', // 13229
            'business/qld-business': '13230',
            entertainment: '13231',
            lifestyle: '13232',
            sport: '13233',
            // additional 
            // travel: '13414',
            classifieds: '13415',
            technology: '13416',
            'real-estate': '13417',
            weather: '13418'
        },
        dtm: {
            siteId: '1556',
            homepageId: '13060',
            sectionId: '13061',
            newslocal: '13203',
            /* News Regional
            'news/nsw/grafton': '13374',        // The Daily Examiner
            'news/nsw/tweed-heads': '13375',    // Tweed Daily News
            'news/nsw/byron-shire': '13376',    // Byron Shire News
            'news/nsw/lismore': '13377',        // Northern Start
            'news/nsw/ballina': '13378',        // Ballina Advocate
            'news/nsw/coffs-harbour': '13379',  // Coffs Coast Advocate
            */
            // (default)
            'news/nsw': '13061', // 13204 
            'news/national': '13061', // 13205
            'news/world': '13061', // 13206
            'news/opinion': '13061', // 13207
            'business/nsw-business': '13208',
            entertainment: '13209',
            lifestyle: '13210',
            sport: '13211',
            // additional
            technology: '13380',
            // travel: '13381',
            classifieds: '13382',
            'real-estate': '13383',
            weather: '13384'
        },
        adv: {
            siteId: '1559',
            homepageId: '13066',
            sectionId: '13067',
            // (default)
            messenger: '13236',
            'news/south-australia': '13067', // 13237
            'news/national': '13067', // 13238
            'news/world': '13067', // 13239
            'news/opinion': '13067', // 13240
            'business/sa-business': '13241',
            entertainment: '13242',
            lifestyle: '13243',
            sport: '13244',
            // additional
            // travel: '13419',
            classifieds: '13420',
            technology: '13421',
            'real-estate': '13422',
            weather: '13423'
        },
        ///////////
        // Regionals
        ///////////
        tmrc: {
            siteId: '1560',
            homepageId: '13068',
            sectionId: '13069',
            // (default)
            'news/tasmania': '13069', // 13247
            'news/national': '13069', // 13248
            'news/world': '13069', // 13249
            'news/opinion': '13069', // 13250
            'business/tasmania-business': '13251',
            entertainment: '13252',
            lifestyle: '13253',
            sport: '13254',
            // additional
            'real-estate': '13424',
            classifieds: '13425'
        },
        twc: {
            siteId: '1561',
            homepageId: '13070',
            sectionId: '13071',
            // (default)
            'news/toowoomba': '13071', // 13256
            'news/queensland': '13071', // 13257
            'news/national': '13071', // 13258
            'news/world': '13071', // 13259
            'news/opinion': '13071', // 13260
            'business/toowoomba-business': '13261',
            entertainment: '13262',
            lifestyle: '13263',
            sport: '13264',
            // additional
            classifieds: '13426'
        },
        tcp: {
            siteId: '1562',
            homepageId: '13072',
            sectionId: '13073',
            // (default)
            'news/cairns': '13073', // 13266
            'news/queensland': '13073', // 13267
            'news/national': '13073', // 13268
            'news/world': '13073', // 13269
            'news/opinion': '13073', // 13270
            'business/cairns-business': '13271',
            entertainment: '13272',
            lifestyle: '13273',
            sport: '13274',
            // additional
            classifieds: '13427'
        },
        gea: {
            siteId: '1563',
            homepageId: '13074',
            sectionId: '13075',
            // (default)
            'news/geelong': '13075', // 13276
            'news/victoria': '13075', // 13277
            'news/national': '13075', // 13278
            'news/world': '13075', // 13279
            'news/opinion': '13075', // 13280
            'business/geelong-business': '13281',
            entertainment: '13282',
            lifestyle: '13283',
            sport: '13284',
            // additional
            'real-estate': '13428',
            classifieds: '13429'
        },
        gcb: {
            siteId: '1564',
            homepageId: '13076',
            sectionId: '13077',
            // (default)
            'news/gold-coast': '13077', // 13286
            'news/queensland': '13077', // 13287
            'news/national': '13077', // 13288
            'news/world': '13077', // 13289
            'news/opinion': '13077', // 13290
            'business/gold-coast-business': '13291',
            entertainment: '13292',
            lifestyle: '13293',
            sport: '13077', // 13294
            // additional
            'real-estate': '13430',
            classifieds: '13431'
        },
        ntn: {
            siteId: '1565',
            homepageId: '13078',
            sectionId: '13079',
            // (default)
            'news/northern-territory': '13079', // local - 13296
            // 'news/northern-territory-2': '13297',
            'news/national': '13079', // 13298
            'news/world': '13079', // 13299
            'news/opinion': '13079', // 13300
            'business/nt-business': '13301',
            entertainment: '13302',
            lifestyle: '13303',
            sport: '13304',
            // additional
            classifieds: '13432',
            'real-estate': '13433'
        },
        wtn: {
            siteId: '1567',
            homepageId: '13087',
            sectionId: '13088',
            // additional
            sport: '13435',
            agribusiness: '13436',
            machine: '13437',
            property: '13438'
        },
        ///////////
        // Lifestyle
        ///////////
        vogue: {
            siteId: '1568',
            homepageId: '13089',
            sectionId: '13091',
            // additional 
            'vogue-living': '13090',
            travel: '13440'
        },
        taste: {
            siteId: '1569',
            homepageId: '13092',
            sectionId: '13093'
        },
        delicious: {
            siteId: '1570',
            homepageId: '13094',
            sectionId: '13095',
            // additional
            travel: '13095' // 13439
        },
        escape: {
            siteId: '1572',
            homepageId: '13098',
            sectionId: '13099'
        },
        "escape.wl" : {
            siteId: '1572',
            homepageId: '13099',
            sectionId: '13099'
        },
        bodyandsoul: {
            siteId: '1573',
            homepageId: '13100',
            sectionId: '13101'
        },
        supercoach: {
            siteId: '1574',
            homepageId: '13102',
            sectionId: '13103'
        },
        bestrecipes: {
            siteId: '1575',
            homepageId: '13104',
            sectionId: '13105'
        },
        'kidspot': {
            siteId: '1576',
            homepageId: '13106',
            sectionId: '13107',
            kitchen: '13335'
        },
        ///////////
        // News Perform
        ///////////
        odds: {
            siteId: '1576',
            homepageId: '13108',
            sectionId: '13109'
        },
        punters: {
            siteId: '1578',
            homepageId: '13110',
            sectionId: '13111'
        },
        tips: {
            siteId: '1580',
            homepageId: '13124',
            sectionId: '13125'
        },
        racenet: {
            siteId: '1581',
            homepageId: '13126',
            sectionId: '13127'
        },
        ///////////
        // Others
        ///////////
        foxs: {
            siteId: '1584',
            homepageId: '13136',
            sectionId: '13137'
        },
        sky: {
            siteId: '1585',
            homepageId: '13138',
            sectionId: '13139'
        },
        // ANA-2081: Add Kidsnews
        kidsnews: {
            siteId: '1586',
            homepageId: '13140',
            sectionId: '13141'
        },
        myt: {
            siteId: '1587',
            homepageId: '13142',
            sectionId: '13143'
        },
        codesports: {
            siteId: '1588',
            homepageId: '13144',
            sectionId: '13145'
        },
        buysearchsell: {
            siteId: '1589',
            homepageId: '13146',
            sectionId: '13147'
        },
        braingains: {
            siteId: '1591',
            homepageId: '13150',
            sectionId: '13151'
        },
        /////////////////////////
        // TAUS Plus
        /////////////////////////
        'taus.plus': {
            siteId: '1555',
            homepageId: '13059', // 13371
            sectionId: '13059' //  13371
        },
        /////////////////////////
        // Super coach websites
        /////////////////////////
        'sc.dtm': {
            siteId: '1556',
            homepageId: '13521',    // dtm
            sectionId: '13521'      // dtm.sc any sections
        },
        'sc.hwt': {
            siteId: '1557',
            homepageId: '13522',    // hwt
            sectionId: '13522'      // hwt.sc any sections
        },
        'sc.tcm': {
            siteId: '1558',
            homepageId: '13523',    // tcm
            sectionId: '13523'      // sc.tcm any sections
        },
        'sc.adv': {
            siteId: '1559',
            homepageId: '13524',    // adv
            sectionId: '13524'      // sc.adv any sections
        },
        'sc.tmrc': {
            siteId: '1560',
            homepageId: '13525',    // tmrc
            sectionId: '13525'      // sc.tmrc any sections
        },
        // 'sc.twc': {
        //     siteId: '1561',
        //     homepageId: '13070',
        //     sectionId: '0'
        // },
        'sc.tcp': {
            siteId: '1562',
            homepageId: '13526',    // tcp
            sectionId: '13526'      // sc.tcp any sections
        },
        'sc.gea': {
            siteId: '1563',
            homepageId: '13527',    // gea
            sectionId: '13527'      // sc.gea any sections
        },
        'sc.gcb': {
            siteId: '1564',
            homepageId: '13528',    // gcb
            sectionId: '13528'      // sc.gcb any sections
        },
        'sc.ntn': {
            siteId: '1565',
            homepageId: '13529',    // ntn
            sectionId: '13529'      // sc.ntn any sections
        },
        'sc.ttb': {
            siteId: '1566',
            homepageId: '13530',    // ttb
            sectionId: '13530'      // sc.ttb any sections
        },
        'sc.foxs': {
            siteId: '1584',
            homepageId: '13532',    // foxs
            sectionId: '13532'      // sc.foxs any sections
        },
        // ANA-2105: Changed decider,nypost,pagesix IDs
        decider: {
            siteId: '1604',
            homepageId: '14133',
            sectionId: '14133'
        },
        nypost: {
            siteId: '1605',
            homepageId: '14135',
            sectionId: '14135'
        },
        pagesix: {
            siteId: '1605',
            homepageId: '14134',
            sectionId: '14134'
        },
        // ANA-2312: News Perform - onboarding - The Greyhound Recorder
        thegreyhoundrecorder: {
            siteId: '',
            homepageId: '14537',
            sectionId: '14536'
        }
    };
};

var tcmNewsRegionals = [
    'news/queensland/sunshine-coast',
    'news/queensland/rockhampton',
    'news/queensland/mackay'
];
var dtNewsRegionas = [];

var lookupKey = function(arr, config){
    var key, len;
    for (len = arr.length; len > 0; --len) {
        key = arr.slice(0, len).join('/');
        lastSlicedPath = key;
        if( config && config[key] ){
            logger.push('Path: '+key);
            return config[key];
        }
    }
    return null;
};

function getId() {
    var wut = window.utag_data || {},
    net_site = wut.net_site && wut.net_site.replace("_sops", ""),
    siteconfs = getSiteConfigs();

    net_site = net_site && net_site.replace(/\s/g, "");
    var hostName = getLocation().hostname || '',
    pathName = getLocation().pathname || '/',
    paths = [],
    id = null,
    config = siteconfs[net_site];

    if (pathName.length > 1) paths = pathName.substring(1).split("/");
    ////////////////////////////////////////////////////
    // Handles News Regional DT, TCM
    ////////////////////////////////////////////////////
    var newsRegional = null, nrmPath;
    if( net_site === 'tcm' || net_site === 'dtm' || net_site === 'dt' ){
        newsRegional = []
            .concat(tcmNewsRegionals)
            .concat(dtNewsRegionas)
            .filter(;
    }
    if( newsRegional && newsRegional.length !== 0 ) {
        nrmPath = newsRegional[0];
        logger.push('Path: '+nrmPath);
        return config && config[nrmPath];
    }
    ////////////////////////////////////////////////////
    // Handle net_site mapping for special case domain
    ////////////////////////////////////////////////////
    var removeTestEnv = /(beta|staging\.|dev\.|sit\.|uat\.)\.|\.(staging|integration)\.apnarm\.net\.au|sit|uat|https\:\/\/|www./g;
    var trimmedDomain = hostName.replace(removeTestEnv,"");
    if(trimmedDomain.indexOf('codesports.com.au') > -1) net_site = 'codesports';
    // if(trimmedDomain.indexOf('mytributes.com.au') > -1) net_site = 'myt';
    if(trimmedDomain.indexOf('supercoach.com.au') > -1 ) net_site = 'supercoach';
    if(trimmedDomain.indexOf('theaustralianplus.com.au') > -1 ) net_site = 'taus.plus';
    if(trimmedDomain.indexOf('supercoach.dailytelegraph') > -1 ) net_site = 'sc.dtm';
    if(trimmedDomain.indexOf('supercoach.heraldsun') > -1 ) net_site = 'sc.hwt';
    if(trimmedDomain.indexOf('supercoach.couriermail') > -1 ) net_site = 'sc.tcm';
    if(trimmedDomain.indexOf('supercoach.adelaidenow') > -1 ) net_site = 'sc.adv';
    if(trimmedDomain.indexOf('supercoach.themercury') > -1 ) net_site = 'sc.tmrc';
    if(trimmedDomain.indexOf('supercoach.cairnspost') > -1 ) net_site = 'sc.tcp';
    if(trimmedDomain.indexOf('supercoach.geelongadvertiser') > -1 ) net_site = 'sc.gea';
    if(trimmedDomain.indexOf('supercoach.goldcoastbulletin') > -1 ) net_site = 'sc.gcb';
    if(trimmedDomain.indexOf('supercoach.ntnews') > -1 ) net_site = 'sc.ntn';
    if(trimmedDomain.indexOf('supercoach.townsvillebulletin') > -1 ) net_site = 'sc.ttb';
    if(trimmedDomain.indexOf('supercoach.foxsports') > -1 ) net_site = 'sc.foxs';
    // Newscomau partners
    if(trimmedDomain.indexOf('decider.com') > -1 ) net_site = 'decider';
    if(trimmedDomain.indexOf('pagesix.com') > -1 ) net_site = 'pagesix';
    if(trimmedDomain.indexOf('nypost.com') > -1 ) net_site = 'nypost';
    if(trimmedDomain.indexOf('todayspaper.heraldsun') > -1 ) net_site = 'todayspaper.hwt';
    if(trimmedDomain.indexOf('travel.escape') > -1 || trimmedDomain.indexOf('escape.freya.travlr') > -1 ) net_site = 'escape.wl';
    ////////////////////////////////////////////////////
    // Similar lookup logic in Nielsen
    ////////////////////////////////////////////////////
    config = siteconfs[net_site];
    id = lookupKey(paths, config);
    if(id === null){
        logger.push( 'Path: ' + '/'+lastSlicedPath );
        if (wut.net_content_type === 'homepage' || pathName === '/') return config && config.homepageId;
        return config && config.sectionId;
    }
    return id;
}
window.nca_ipsos.run = function (){
    var beaconId = getId();
    
    logger.push( 'ID: ' + beaconId );
    debug('IPSOS (r): \n' + logger.join('\r\n') );
    
    // applicable ID is looked up
    qsBuilder.addParams("id", beaconId );
};
/* <![CDATA[ */
(function() {
    window.dm = window.dm || {
        AjaxData: []
    };
    window.dm.AjaxEvent = function(et, d, ssid, ad) {
        dm.AjaxData.push({
            et: et,
            d: d,
            ssid: ssid,
            ad: ad
        });
        if (typeof window.DotMetricsObj != 'undefined') {
            DotMetricsObj.onAjaxDataUpdate();
        }
    };
    
    if( ! isExists ) {
        window.nca_ipsos = window.nca_ipsos || {};
        window.nca_ipsos.run();

        var d = document,
            h = d.getElementsByTagName('head')[0],
            qs = qsBuilder.getParams(),
            s = d.createElement('script');

        s.id = id;
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://au-script.dotmetrics.net/door.js'.concat(qs);
        s.referrerPolicy = 'no-referrer';
        h.appendChild(s);

    }

}()); 
/* ]]> */


window.nca_ipsos.fireSpaBeacon = function(){
    var beaconId = getId();
    debug('IPSOS (spa):' + beaconId);
    window.dm = window.dm || {};    
    dm.AjaxEvent("pageview", null, beaconId);
    return beaconId;
};
(function () {
    // Check instance if available
    window.ipsos_ready = window.ipsos_ready || [];
    window.nca_ipsos = window.nca_ipsos || {};
    // Cache previous state
    var actions = window.ipsos_ready;
    var sdkInstance = window.nca_ipsos,
        readyHandler = null;
    // Build Defer system
    readyHandler = {
        push: function (callback) {
            try {
                callback(sdkInstance);
            } catch (error) { debug('Ipsos Handler Error:', error.message); }
        }
    };
    // Rerun deferred functions
    for (var i = 0; i < actions.length; i++) {
        readyHandler.push(actions[i]);
    }
    // Set as the object with "push" namespace.
    window.ipsos_ready = readyHandler;
})();
})();