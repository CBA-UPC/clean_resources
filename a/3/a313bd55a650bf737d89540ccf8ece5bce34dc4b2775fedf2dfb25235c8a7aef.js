;
//tracking.js starts
if(location.href.search('flix-logqa')!=-1)
    window.logqa=
else
    window.logqa=function(){};

window.flixtrackloading=1

if(typeof flixtracking=='undefined'){
var flixtracking={
    tracking: true,
    trackingcc: 0,
    flixconsent: null,
    site_url:'https://media.flixcar.com/delivery/',
    trackingDomain: 'https://media.flixcar.com/',
    trackingDomainBeat : 'https://rt.flix360.com/beat/',
    globalTrackingInit: false,
    noTracking:false,
    inpageloaded: false,
    minisitebuttonloaded: false,
    minisiteloaded: false,
    hotspotloaded: false,
    hotspotmobloaded:false,
    micrositeloaded:false,
    checkLoaderloaded:false,
    adjacencyloaded:false,
    adjacencyhotspotloaded:false,
    app3ploaded:false,
    inpageArImpression:false,
    hsArImpression:false,
    init: function(){        
        logqa('init flixtracking');    
        flixtracking.setGvid();
        
        flixtracking.cookieConsent.initConsent();        
        //flixtracking.checkServices();

        
    },
    checkServices: function (opts) {
        logqa('in checkServices');
        var recheck=false;
        /*if(flixtracking.hotspotloaded==false && typeof flixhotspot!='undefined'){
            flixtracking.products.hotspot();
        }
        if(flixtracking.inpageloaded==false && typeof FlixjQ!='undefined' && typeof FlixjQ.fn.inPage!='undefined'){
             flixtracking.products.inpage(FlixjQ.fn.inPage.data);
        }*/
        /*if(flixtracking.minisitebuttonloaded==false && typeof _FFMatcher!='undefined' && typeof FlixjQ!='undefined' && typeof FlixjQ.fn.minisite!='undefined'){
             flixtracking.products.minisitebutton(_FFMatcher);
        }*/
        if (typeof FlixjQ!='undefined' && typeof FlixjQ.fn.logging == 'undefined') {
            /* Set Logging function */
            FlixjQ.fn.logging = function (type, event, data, media, price, inPcount) {
                //if(typeof flixtracking!='undefined' && flixtracking.site_url)
                //    flixtracking.logging(type, event, data, media); 
            }

        }

        if(typeof FlixjQ=='undefined'){
            setTimeout(function(){
                flixtracking.checkServices()
            }, 100)
        }
    },
    products: {
        inpage: function (data) {
            logqa('in inpage log');
            flixtracking.inpageloaded=true

            // var opts=FlixjQ.extend(true, {}, data)  
            var opts = JSON.parse(JSON.stringify(data));              
            
            opts.type='inpage';

            //adjacency log
            if(typeof window.adjacency_map!='undefined' && !flixtracking.adjacencyloaded && (opts.type=='inpage') && (opts.event_type && opts.event_type=='page') ){
                flixtracking.products.adjacency(opts);
                flixtracking.adjacencyloaded=true
            }  

            flixtracking.log(opts);

            flixtracking.globalTracking(opts);

            var targetcontainer='#'+opts.flixcontainer
            if(!opts.flixcontainer || opts.flixcontainer.length==0){
                targetcontainer='#inpage_container'
            }


            flixtracking.delegate('click', targetcontainer+' a',function(event) {
                if(!this.hasAttribute('data-flix-media')){

                    var href = this.getAttribute('href');
                    opts.type='inpage';
                    var temp = href.split ("?");
                    href = temp[0];
                    var filename = href.split ("/");
                    var filename_real = filename[filename.length - 1];

                    value = filename_real;  
                    logqa('a click-'+targetcontainer, value);          
                    flixtracking.logMedia(opts,value);
                }
            });

            flixtracking.delegate('click', '#flixinpage-lightbox a, .inpage_cap_next_photo, .inpage_cap_prev_photo',function(event) {
                
                if(!this.hasAttribute('data-flix-media')){
                    var href = this.getAttribute('href')|| '';
                    var opts=FlixjQ.fn.inPage.data
                    opts.type='inpage';
                    var temp = href.split ("?");
                    href = temp[0];
                    var filename = href.split ("/");
                    var filename_real = filename[filename.length - 1];

                    var value = filename_real; 
                    if(value.length==0)
                        value=this.innerText;
                    logqa('media', value);  
                            
                    flixtracking.logMedia(opts,value);
                }
            });

            flixtracking.delegate('click', targetcontainer +' *[data-media]',function(event) {
                value = this.dataset.media; 
                value = this.dataset.page;  
                opts.type='inpage';
                logqa('media', value);              
                flixtracking.logMedia(opts,value);
            });
            flixtracking.delegate('click', targetcontainer +' *[data-page]',function(event) {
                value = this.dataset.page;
                opts.type='inpage';  
                logqa('page', value);       
                flixtracking.logPage(opts,value);
            });

            flixtracking.logTime(opts, 0);

            //load AR log when hotspots are hidden case
                setTimeout(function() {
                    if (!flixtracking.inpageArImpression) {
                        if (FlixjQ('#flix_selector_3d').length > 0) {
                            opts.type = '3dfw';
                            opts.event_type = 'ar_inpage_impression';
                            opts.event_detail = '';
                            flixtracking.log(opts, status);
                        }
                        //AR hotspots matchmiss case
                        if (FlixjQ('#flix_hotspots .ek-aricon').length === 0 && FlixjQ('#flix_selector_3d').length > 0) {
                            opts.type = '3dfw';
                            opts.event_type = 'ar_impression';
                            opts.event_detail = '3dfw';
                            flixtracking.log(opts, status);
                        }
                        flixtracking.inpageArImpression=true;
                    }
                }, 5000);

        },
        minisitebutton: function (_FFMatcher, p_id) {
            logqa('in minisitebutton log');

            flixtracking.minisitebuttonloaded=true;
            var d = new Date(), h='';
            
            var opts={};
            opts.type='minisite';

            opts['mpn'] = _FFMatcher._FFmpn;
            opts['ean'] = _FFMatcher._FFean;
            opts['language'] = _FFMatcher._FFlang;
            opts['distributor'] = _FFMatcher._FFd;
            opts['product_id'] = p_id || _FFMatcher._FFPid; 
            opts['ut'] = d.getTime();
            opts['to'] = d.getTimezoneOffset();
            opts['ss'] = screen.width+'x'+screen.height;
            opts.event_type='matchhit';


            flixtracking.log(opts);
        },
        minisite: function (data) {
            logqa('in minisite log');

            var opts = JSON.parse(JSON.stringify(data));
            //var opts=FlixjQ.extend(true, {}, data);  
            opts.event_type = "asset";
            opts.asset=1;
            opts.type='minisite';
            if(typeof main_distributor!='undefined')
                opts.distributor=main_distributor
            flixtracking.log(opts);

            opts.event_type = "click";
            flixtracking.log(opts);

            if(flixtracking.minisiteloaded==false){

                /*  Global logging call */
                setTimeout(function(){
                    flixtracking.globalTracking(opts);
                },1000);

                flixtracking.logTimeMinisite(opts, 0);
            
                flixtracking.minisiteloaded=true;
                //tab click
                flixtracking.delegate('click', '*[data-m-typeid]',function(event) {                
                    value = this.getAttribute('data-m-typeid'); 
                    opts.event_type = "asset";
                    opts.asset=value;
                    opts.event_detail='';
                    opts.vtime=0;
                    opts.view_time=0;
                    opts.type='minisite';
                    logqa('media', value);
                    
                    flixtracking.log(opts, '');
                });

                flixtracking.delegate('click', 'a:not(*[data-m-typeid], *[ data-flix-media])',function(event) {
                    var href = this.getAttribute('href');
                    var temp = href.split ("?");
                    href = temp[0];
                    opts.type='minisite';
                    var filename = href.split ("/");
                    var filename_real = filename[filename.length - 1];

                    logqa('media', filename_real);              
                    flixtracking.logMedia(opts,filename_real);
                });
                flixtracking.delegate('click', '*[data-media]',function(event) {
                    value = this.dataset.media; 
                    value = this.dataset.page;  
                    opts.type='minisite';
                    logqa('media', value);              
                    flixtracking.logMedia(opts,value);
                });
                flixtracking.delegate('click', '*[data-page]',function(event) {
                    value = this.dataset.page;  
                    opts.type='minisite';
                    logqa('page', value);       
                    flixtracking.logPage(opts,value);
                });
            }
        },
        hotspot: function (et, ed, status) {
            logqa('in hotspot log--'+ et+"__"+ed+"__"+status);
            if(typeof flixhotspot!='undefined'){
                logqa('hot flixhotspot')
                var opts=flixhotspot.data;
                if(window.flixJsCallbacks)
                    window.flixJsCallbacks.pageView = window.flixJsCallbacks.pageView || {log : false, beat: false};
                
                if(flixhotspot.data){
                    logqa('hot data')
                    opts.type='interactive';
                    if(!opts.product_id && opts.p)
                        opts.product_id=opts.p
                    opts.edvalueT=opts.mpn || opts.ean || opts.product_id

                    if(et || ed){
                        logqa('hot ed et')
                        opts.event_detail=ed;               
                        opts.event_type= et;
                        // check for webar only retailer and update the ED value 
                        /*if (FlixjQ('#flix_hotspots.flix_hotspotV2 .flix_hs').length == 0 && FlixjQ('#flix_hotspots img.flix_hs').length == 0) {
                            // this is a webar only retailer 
                            opts.event_detail = 'Webar_' + opts.event_detail + '_' + ed;
                        }*/

                        if (ed == 'hotspot_webar' || et == 'webar_click') {
                            opts.event_type = 'webar_click';
                            opts.event_detail = ''
                        } else if (opts.event_type == 'dwelltime') {
                            logqa('dwelltime log')
                            opts.event_detail = ed;
                        } else if (opts.event_type == 'launch') {
                            logqa('launch log')
                            opts.event_detail = ed;
                        } 

                        /*if(opts.event_type =='qr_impression'){
                            //page log for flixar
                            var value = 'Webar_'+opts.edvalueT+'_'
                            flixtracking.products.hotspot('page', 'value');
                        }*/

                        if (ed == 'qr_loaded' || ed == 'qr_close')
                            opts.event_detail = ed;
                        //if(FlixjQ('#flix_hotspots').length>0){
                            flixtracking.log(opts, status);
                        //}

                        //AR 3dfw Desktop Case
                        if(opts.event_type =='qr_impression') {
                            if (!flixtracking.hsArImpression && FlixjQ('.ek-desktop').length) {
                                opts.type = '3dfw';
                                opts.event_type = 'ar_impression';
                                opts.event_detail = 'qr';
                                if (FlixjQ('.flix_selector_3d').length)
                                    opts.event_detail = 'qr|3dfw';
                                flixtracking.log(opts, status);
                                flixtracking.hsArImpression=true;
                            }
                        }

                    }else{
                        //page
                        logqa('hot page')
                        opts.event_type='page'
                        if(flixhotspot.results)
                            var value = 'Hotspot_'+opts.edvalueT+'_'
                        else
                            var value = 'Hotspot_'+opts.edvalueT+'_'
                        opts.event_detail=value;

                        //flixtracking.isMobile==true ||
                        if (FlixjQ('#flix_hotspots') && FlixjQ('#flix_hotspots:not(.ek_hotspots) .flix_hs:not(#flix_desktop_webar)').length>0) {
                            flixtracking.log(opts, status);
                        }
                        else if (flixtracking.isMobile()==true && FlixjQ('.ek-ios, .ek-android').length>0 && !flixtracking.hsArImpression){

                            opts.event_type = 'webar_impressions';
                            opts.event_detail = 'webar_loaded';
                            flixtracking.log(opts, status);

                            //AR 3dfw Mobile Case
                            opts.type='3dfw';
                            opts.event_type = 'ar_impression';
                            opts.event_detail = 'webar';
                            if (FlixjQ('.flix_selector_3d').length)
                                opts.event_detail = 'webar|3dfw';
                            flixtracking.log(opts, status);

                            flixtracking.hsArImpression=true;

                        }else if(typeof flixhotspot.oldresults!='undefined' && typeof flixhotspot.oldresults.hotspots!='undefined' && flixhotspot.results.settings[0].no_hotspots && flixhotspot.results.settings[0].no_hotspots==true){
                            flixtracking.log(opts, status);
                        }
                        else{
                            logqa('NO HOT LOG')
                            
                        }

                        //adjacency log
                        if(typeof window.adjacency_map!='undefined' && !flixtracking.adjacencyhotspotloaded && (opts.type=='interactive') && (opts.event_type && opts.event_type=='page') ){  
                            opts.event_detail='hotspot'             
                            flixtracking.products.adjacency(opts);
                            flixtracking.adjacencyhotspotloaded=true;
                        }                                              

                        if( ( window.comparecheck == 'undefined' || window.comparecheck==false) && (FlixjQ('#flix_hotspots .flix_hs_product_comparison').length > 0 || FlixjQ('#flix_hotspotsmob .flix_hsmob_product_comparison').length > 0)){
                            window.comparecheck=true;
                            flixtracking.products.comparisonv2.init();
                            logqa('Ct v2 init from desk hot')
                        }

                    }

                        //hotspot click

                    if(flixtracking.hotspotloaded==false){
                        flixtracking.delegate('click', '#flix_hotspots .flix_hs', function(event) {
                            var id=''
                            if(flixhotspot.results){                                
                                id=this.id.replace(flixhotspot.results.settings[0].prefix, '')
                                var value = 'Hotspot_'+opts.edvalueT+'_'+id;
                            }else{
                                id=this.id.replace('flix_', '')
                                var value = 'Hotspot_'+opts.edvalueT+'_'+id;
                            }
                            opts.type='interactive';
                            logqa('hotspot click', value);                            
                            
                            if(flixhotspot.results.hotspots && flixhotspot.results.hotspots[id] && flixhotspot.results.hotspots[id].productId)
                                opts.product_id=flixhotspot.results.hotspots[id].productId
                            
                            flixtracking.logMedia(opts,value);


                            if(id=='product_thirdpartyapp'){   
                                flixtracking.products.thirdpartywidget.hotspot();
                            }

                        });                        
                        //flixar clicks desktop
                        flixtracking.delegate('click', '#flix_hotspots .ek-desktop', function(event) {
                            logqa('desktop flixar click');                            
                            flixtracking.products.hotspot('qr_click','qr_open');
                        });
                    
                        flixtracking.hotspotloaded=true;
                    }
                }
            }else{
                setTimeout(function(){
                    flixtracking.products.hotspot(et, ed)
                }, 1000)
            }
        },
        hotspotmob: function (et, ed, status) {
            logqa('in hotspotmob log--'+ et+"__"+ed+"__"+status);
            if(typeof flixhotspotmob!='undefined'){
                logqa('hot flixhotspotmob')                
                var opts=flixhotspotmob.data;
                if(window.flixJsCallbacks)
                    window.flixJsCallbacks.pageView = window.flixJsCallbacks.pageView || {log : false, beat: false};
                
                if(flixhotspotmob.data){
                    logqa('hotmob data')
                    opts.type='interactive';
                    if(!opts.product_id && opts.p)
                        opts.product_id=opts.p
                    opts.edvalueT=opts.mpn || opts.ean || opts.product_id

                    if(et || ed){
                        logqa('hotmob ed et')
                        opts.event_detail=ed;               
                        opts.event_type= et;
                        
                        if (ed == 'hotspot_webar' || et == 'webar_click') {
                            opts.event_type = 'webar_click';
                            opts.event_detail = ''
                        } else if (opts.event_type == 'dwelltime') {
                            logqa('dwelltime log')
                            opts.event_detail = ed;
                        } else if (opts.event_type == 'launch') {
                            logqa('launch log')
                            opts.event_detail = ed;
                        } 
                        
                        if (ed == 'qr_loaded' || ed == 'qr_close')
                            opts.event_detail = ed;
                        //if(FlixjQ('#flix_hotspots').length>0){
                            flixtracking.log(opts, status);
                        //}
                    }else{
                        //page
                        logqa('hotmob page')
                        opts.event_type='page'
                        var value = 'Hotspot_'+opts.edvalueT+'_';
                        opts.event_detail=value;

                        //flixtracking.isMobile==true ||

                        flixtracking.log(opts, status); 
                        
                        //adjacency log
                        if(typeof window.adjacency_map!='undefined' && !flixtracking.adjacencyhotspotloaded && (opts.type=='interactive') && (opts.event_type && opts.event_type=='page') ){  
                            opts.event_detail='hotspot'             
                            flixtracking.products.adjacency(opts);
                            flixtracking.adjacencyhotspotloaded=true;
                        }                        



                        if( ( window.comparecheck == 'undefined' || window.comparecheck==false) && (FlixjQ('#flix_hotspots .flix_hs_product_comparison').length > 0 || FlixjQ('#flix_hotspotsmob .flix_hsmob_product_comparison').length > 0)){
                            window.comparecheck=true;
                            flixtracking.products.comparisonv2.init();
                            logqa('Ct v2 init from mob hot')
                        }

                    }

                        //hotspot click


                    if(flixtracking.hotspotmobloaded==false){
                        flixtracking.delegate('click', '#flix_hotspotsmob .flix_hsmob', function(event) {
                            var id='';
                            if(flixhotspotmob.results){                                
                                id=this.id.replace(flixhotspotmob.results.settings[0].prefix, '');
                                id=id.replace('mob', '');
                                var value = 'Hotspot_'+opts.edvalueT+'_'+id;
                            }else{
                                id=this.id.replace('flix_', '');
                                id=id.replace('mob', '');
                                var value = 'Hotspot_'+opts.edvalueT+'_'+id;
                            }

                            opts.type='interactive';
                            logqa('hotspotmob click', value);                            
                            
                            if(flixhotspotmob.results.hotspots && flixhotspotmob.results.hotspots[id] && flixhotspotmob.results.hotspots[id].productId)
                                opts.product_id=flixhotspotmob.results.hotspots[id].productId
                            
                            flixtracking.logMedia(opts,value);

                            if(id=='product_thirdpartyapp'){   
                                flixtracking.products.thirdpartywidget.hotspot();
                            }
                        });
                        //mobile hotspot click
                        flixtracking.delegate('click', '.flix-mobtab', function(event) {
                            id=this.dataset.tabname
                            var value = 'Hotspot_'+opts.edvalueT+'_'+id;
                            
                            opts.type='interactive';
                            logqa('hotspotmob click', value);                            
                            
                            if(flixhotspotmob.results.hotspots && flixhotspotmob.results.hotspots[id] && flixhotspotmob.results.hotspots[id].productId)
                                opts.product_id=flixhotspotmob.results.hotspots[id].productId
                            
                            flixtracking.logMedia(opts,value);

                            if(id=='product_thirdpartyapp'){   
                                flixtracking.products.thirdpartywidget.hotspot();
                            }
                        });
                        
                        flixtracking.hotspotmobloaded=true;
                    }
                }
            }else{
                setTimeout( 1000)
            }
        },
        microsite: function (opts) {
            logqa('in microsite log');

            opts.type='sis';
            flixtracking.log(opts);

            if(flixtracking.micrositeloaded==false){
                flixtracking.micrositeloaded=true;
                
                flixtracking.logTime(opts, 0);
                setInterval(function(){
                    flixtracking.logTime(opts)
                }, 10000);

                flixtracking.delegate('click', '#'+opts.flixcontainer+' *[data-media]',function(event) {
                    value = this.dataset.media; 
                        opts.type='sis';
                    logqa('media', value); 
                    if(!FlixjQ(event.target).closest('.flix-video-close').length)             
                        flixtracking.logMedia(opts,value);
                });
                flixtracking.delegate('click', '#'+opts.flixcontainer+' *[data-page]',function(event) {
                    value = this.dataset.page;  
                        opts.type='sis'; 
                    logqa('page', value);  
                    if(!FlixjQ(event.target).closest('.flix-video-close').length)     
                        flixtracking.logPage(opts,value);
                });
                flixtracking.delegate('click', '#'+opts.flixcontainer+' *[data-click]',function(event) {
                    value = this.dataset.click;  
                        opts.type='sis'; 
                    logqa('click', value);  
                    if(!FlixjQ(event.target).closest('.flix-video-close').length)     
                        flixtracking.logClick(opts,value);
                });

                flixtracking.delegate('click', '#'+opts.flixcontainer+' a',function(event) {
                    if(!this.hasAttribute('data-media') && !this.hasAttribute('data-page') && !this.hasAttribute('data-click')){
                        var value = "";
                        _img = FlixjQ(this).find("img");
                        if(_img && _img.attr('alt')){
                            value = _img.attr('alt');
                        }else{
                            value = FlixjQ(this).text();
                        }

                        logqa('click', value);       
                        flixtracking.logClick(opts,value);
                    }
                });

            }


        },
        comparison: {
            init: function () {
                logqa('comparison init- new') 
                if (FlixjQ.fn.inPage && FlixjQ.fn.inPage.data.product !== undefined) {
                    opts = FlixjQ.fn.inPage.data;
                } else if (FlixjQ.fn.minisite && FlixjQ.fn.minisite.data.product !== undefined) {
                    opts = FlixjQ.fn.minisite.data;
                }
                opts.type='minisite';
                if (opts.mpn === undefined) {
                    opts.mpn = '';
                }

                flixtracking.logging('compare', 'impression', opts, opts.mpn);
                this.clicks();

                if(FlixjQ('.ui-tabs-nav li').length){
                    window.addEventListener('scroll', flixtracking.products.comparison.checkViewport);
                    FlixjQ('.ui-tabs-nav li').on('click', function(){
                        
                        var tabno=FlixjQ(this).find('a').attr('href');
                        logqa('Minisite logs-'+tabno);     
                        if(FlixjQ(tabno).find('.inpage_selector_comparison').length)  
                            flixtracking.products.comparison.elementInViewport('.inpage_selector_comparison');
                    })
                }else if(FlixjQ('[data-for="flix-mbl-comparison"]').length){
                    FlixjQ('[data-for="flix-mbl-comparison"]').on('click', function(){ 
                        setTimeout(function(){ 
                            window.addEventListener('scroll', flixtracking.products.comparison.checkViewport);
                        }, 200);
                    });
                }else{
                    window.addEventListener('scroll', flixtracking.products.comparison.checkViewport);
                }
            },
            clicks: function () {
                if (FlixjQ.fn.inPage && FlixjQ.fn.inPage.data.product !== undefined) {
                    opts = FlixjQ.fn.inPage.data;
                } else if (FlixjQ.fn.minisite && FlixjQ.fn.minisite.data.product !== undefined) {
                    opts = FlixjQ.fn.minisite.data;
                }
                /*FlixjQ('.flix-comp-prod-title .flix-comp-clickable, .flix-comp-trac-product .flix-comp-clickable, .flix-comp-product .flix-comp-prod-image .flix-comp-clickable').on('click', function () {
                    var attached_mpn = FlixjQ(this).attr('rel');
                    var price = FlixjQ(this).attr('price');
                    flixtracking.logging('compare', 'productpage', opts, attached_mpn, price);
                });*/
                FlixjQ(document).on('click', '.flix-comp-clickable' , function() {
                    var attached_mpn = FlixjQ(this).attr('rel');
                    var price = FlixjQ(this).attr('price');
                    flixtracking.logging('compare', 'productpage', opts, attached_mpn, price);
                });

                FlixjQ('.flix-comp-control-prev').on('click', function () {
                    flixtracking.logging('compare', 'media', opts, 'prev');
                });

                FlixjQ('.flix-comp-control-next').on('click', function () {
                    flixtracking.logging('compare', 'media', opts, 'next');
                });

                FlixjQ('.flix-comp-toggle [data-flix-media]').removeAttr('data-flix-media');
                FlixjQ('.flix-comp-toggle').on('click', function () {                         
                    flixtracking.logging('compare', 'media', opts, 'flix-arrow-toggle');
                });

            },
            checkViewport: function(element) {
                flixtracking.products.comparison.elementInViewport('.inpage_selector_comparison');

                flixtracking.products.comparison.elementInViewport('#inpage_container');
            },
            visibilitychange: function(state, type){
                //document.title = document.visibilityState;
                logqa('visibilitychange-'+type)
                if(document.visibilityState=='hidden' ){
                    flixtracking.products.comparison.dwelltimer('stop', '.inpage_selector_comparison')
                    flixtracking.products.comparison.dwelltimer('stop', '#inpage_container')
                    
                }
                else{
                }
            }, 
            dwelltimer: function(state, element){
                //logqa('dwelltimer-'+state+"__"+element)
                var lastt=document.querySelector(element).dataset.flixtime2 || 0;
               
                if (lastt && lastt!=0 && state=='stop') {
                    var lastt=lastt
                    tdiff = Date.now() - lastt;
                    type='ct'
                    if(element && element.search('inpage_container')!=-1)
                        type='inpage'

                    var artime=type+'_time_'+tdiff;

                    logqa(type+'-timer stop- '+tdiff); 
                    if(tdiff > 0){
                        flixtracking.logging('compare', 'dwelltime', null , artime);
                    }
                   
                    document.querySelector(element).removeAttribute('data-flixtime2')
                } 
                else if (state=='start' && lastt==0 ){ 
                    logqa('dwelltimer timer start- new'+element); 

                    //check stop dwell when user leaves the page
                    document.addEventListener('visibilitychange', flixtracking.products.comparison.visibilitychange);

                    //minisite tab change
                    if(FlixjQ('.ui-tabs-nav li').length){
                        FlixjQ('.ui-tabs-nav li').one('click', function(){
                            var tabno=FlixjQ(this).find('a').attr('href')
                            logqa('Minisite tab click-'+tabno)     
                            if(FlixjQ(tabno).find('.inpage_selector_comparison').length==0)                                      
                                flixtracking.products.comparison.dwelltimer('stop', '.inpage_selector_comparison')
                        })
                    }
                    document.querySelector(element).dataset.flixtime2= Date.now();
                         
                }       
            },
            elementInViewport: function(element) {
                var myElement = document.querySelector(element);
                if(myElement){
                    var bounding = myElement.getBoundingClientRect();
                    var myElementHeight = myElement.offsetHeight;
                    var myElementWidth = myElement.offsetWidth;
                    var bounding = myElement.getBoundingClientRect();

                    if (bounding.top >= -myElementHeight 
                        && bounding.left >= -myElementWidth
                        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
                        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {

                        if(!document.querySelector(element).dataset.flixtime2){
                            flixtracking.products.comparison.dwelltimer('start', element )
                            //log view CT  
                            if(element=='.inpage_selector_comparison' && FlixjQ(element).is(":visible"))                 
                                flixtracking.logging('compare', 'media', null , 'views');
                        }
                    } else {
                        if(document.querySelector(element).dataset.flixtime2)
                            flixtracking.products.comparison.dwelltimer('stop', element)                                
                    }
                }
            }
        },
        comparisonv2: {
            init: function () {
                logqa('comparison V2 init- new') 
                if (FlixjQ.fn.inPage && FlixjQ.fn.inPage.data.product !== undefined) {
                    opts = FlixjQ.fn.inPage.data;
                } else if (FlixjQ.fn.minisite && FlixjQ.fn.minisite.data.product !== undefined) {
                    opts = FlixjQ.fn.minisite.data;
                }
                opts.type='minisite';
                if (opts.mpn === undefined) {
                    opts.mpn = '';
                }

                flixtracking.logging('compare', 'impression', opts, opts.mpn);

                this.clicks();
                this.pageposition();

                setTimeout(function(){
                    var v2prodids='';
                    FlixjQ('.flix-compv2-product').each(function(i){
                        v2prodids+=FlixjQ(this).attr('data-compv2-pid')+';'
                    });                
                    flixtracking.logging('compare', 'launch', opts, v2prodids);
                }, 2000);
                

                //excluded by stock
                var exstock=FlixjQ('[data-compv2-excludedbystock]').attr('data-compv2-excludedbystock')
                if(exstock && exstock.length){
                    exstock=exstock.split('|')
                    FlixjQ.each(exstock,function(no, id){
                        if(id.length)
                            flixtracking.logging('compare', 'ctexclusion', opts, '1;'+id);
                    });
                }
                
                //excluded by price
                var exprice=FlixjQ('[data-compv2-excludedbyprice]').attr('data-compv2-excludedbyprice')
                if(exprice && exprice.length){
                    exprice=exprice.split('|')
                    FlixjQ.each(exprice,function(no, id){
                        if(id.length)
                            flixtracking.logging('compare', 'ctexclusion', opts, '2;'+id);
                    });  
                }

                if(FlixjQ('.ui-tabs-nav li').length){
                    FlixjQ('.ui-tabs-nav li').on('click', function(){
                        window.addEventListener('scroll', flixtracking.products.comparison.checkViewport);
                        
                        var tabno=FlixjQ(this).find('a').attr('href');
                        logqa('Minisite logs-'+tabno);     
                        if(FlixjQ(tabno).find('.inpage_selector_comparison').length)  
                            flixtracking.products.comparisonv2.elementInViewport('.inpage_selector_comparison');
                    })
                }else if(FlixjQ('[data-for="flix-mbl-comparison"]').length){
                    FlixjQ('[data-for="flix-mbl-comparison"]').on('click', function(){ 
                        setTimeout( 200);
                    });
                }else{
                    window.addEventListener('scroll', flixtracking.products.comparisonv2.checkViewport);
                }
            },
            clicks: function () {
                if (FlixjQ.fn.inPage && FlixjQ.fn.inPage.data.product !== undefined) {
                    opts = FlixjQ.fn.inPage.data;
                } else if (FlixjQ.fn.minisite && FlixjQ.fn.minisite.data.product !== undefined) {
                    opts = FlixjQ.fn.minisite.data;
                }

                /*FlixjQ('.flix-compv2-prod-title .flix-compv2-clickable, .flix-compv2-trac-product .flix-compv2-clickable, .flix-compv2-product .flix-compv2-prod-image .flix-compv2-clickable').on('click', function () {
                    var attached_mpn = FlixjQ(this).attr('rel');
                    var price = FlixjQ(this).attr('price');
                    flixtracking.logging('compare', 'productpage', opts, attached_mpn, price);
                });*/
                flixtracking.delegate('click', '.flix-compv2-trac-buy .flix-compv2-clickable, .flix-compv2-linkBtn' , function() {
                    /*var attached_mpn = FlixjQ(this).attr('rel');*/
                    var prodid=''
                    if(FlixjQ(this).closest('.flix-compv2-product').length && FlixjQ(this).closest('.flix-compv2-product').attr('data-compv2-pid'))
                        prodid = FlixjQ(this).closest('.flix-compv2-product').attr('data-compv2-pid');
                    var price = FlixjQ(this).attr('price');
                    flixtracking.logging('compare', 'productpage', opts, prodid, price);
                });

                //pagination next prev
                flixtracking.delegate('click', '.flix-compv2-control-prev', function () {
                    logqa('flix-compv2-control-prev')
                    flixtracking.logging('compare', 'media', opts, 'prev');
                    setTimeout(function(){
                        FlixjQ('.flix-cp-target').each(function(){
                            var pid=FlixjQ(this).attr('data-compv2-pid');
                            if(!FlixjQ(this).hasClass('flix-ct-pos'))
                                flixtracking.logging('compare', 'position', opts, pid);
                            FlixjQ(this).addClass('flix-ct-pos')
                        });
                    }, 1200)
                    
                });
                flixtracking.delegate('click', '.flix-compv2-control-next', function () {
                    logqa('flix-compv2-control-next')
                    flixtracking.logging('compare', 'media', opts, 'next');
                    setTimeout(function(){
                        FlixjQ('.flix-cp-target').each(function(){
                            var pid=FlixjQ(this).attr('data-compv2-pid');
                            if(!FlixjQ(this).hasClass('flix-ct-pos'))
                                flixtracking.logging('compare', 'position', opts, pid);
                            FlixjQ(this).addClass('flix-ct-pos')
                        });
                    }, 1200)
                });

                //toggle subheading
                flixtracking.delegate('click', '.flix-compv2-toggle' , function() {
                    logqa('flix-compv2-toggle')
                    var textval= FlixjQ(this).find('.flix-compv2-itemDesc').text()
                    textval=textval.replace(' ⓘ','')
                    textval=textval.replace('ⓘ','')
                    textval=textval.replace('%20%20','')
                    var toggleval='expand_'
                    if(!FlixjQ(this).hasClass('flix-compv2-toggleactive'))
                        var toggleval='collapse_'
                             
                    flixtracking.logging('compare', 'media', opts, toggleval+textval);
                });

                //tooltip hover
                flixtracking.delegate('click', '.flix-has-tooltip' , function() {
                    if(FlixjQ(this).attr('title') && FlixjQ(this).attr('title').length>0) {        
                        logqa('flix-has-tooltip');
                        flixtracking.logging('compare', 'media', opts, 'tooltip');
                    }
                });

                //remove product
                flixtracking.delegate('click', '.flix-compv2-close' , function() {
                    logqa('flix_close')
                    var prodid= FlixjQ(this).closest('.flix-compv2-product').attr('data-compv2-pid')
                    flixtracking.logging('compare', 'media', opts, 'remove_'+prodid);
                });
                //boost product position
                flixtracking.delegate('click', '.flix-compv2-toggle-movebtn', function () {
                    logqa('flix-toggle-movebtn')
                    var prodid= FlixjQ(this).closest('.flix-compv2-product').attr('data-compv2-pid')
                    flixtracking.logging('compare', 'media', opts, 'boost_'+prodid);
                });


            },
            checkViewpo  },
            visibilitychange: function(state, type){
                //document.title = document.visibilityState;
                logqa('visibilitychange-'+type)
                if(document.visibilityState=='hidden' ){
                    flixtracking.products.comparisonv2.dwelltimer('stop', '.inpage_selector_comparison')
                    flixtracking.products.comparisonv2.dwelltimer('stop', '#inpage_container')
                    
                }
                else{
                }
            }, 
            dwelltimer: function(state, element){
                //logqa('dwelltimer-'+state+"__"+element)
                if(document.querySelector(element))
                    var lastt=document.querySelector(element).dataset.flixtime2 || 0;
                
                if (lastt && lastt!=0 && state=='stop') {
                    var lastt=lastt
                    tdiff = Date.now() - lastt;
                    type='ct'
                    if(element && element.search('inpage_container')!=-1)
                        type='inpage'

                    var artime=type+'_time_'+tdiff;

                    logqa(type+'-timer stop- '+tdiff); 
                    if(tdiff > 0){
                        flixtracking.logging('compare', 'dwelltime', null , artime);
                    }
                   
                    document.querySelector(element).removeAttribute('data-flixtime2')
                } 
                else if (state=='start' && lastt==0 ){ 
                    logqa('dwelltimer timer start- new'+element); 
                    
                    //check stop dwell when user leaves the page
                    document.addEventListener('visibilitychange', flixtracking.products.comparisonv2.visibilitychange);

                    //minisite tab change
                    if(FlixjQ('.ui-tabs-nav li').length){
                        FlixjQ('.ui-tabs-nav li').one('click', function(){
                            var tabno=FlixjQ(this).find('a').attr('href')
                            logqa('Minisite tab click-'+tabno)     
                            if(FlixjQ(tabno).find('.inpage_selector_comparison').length==0)                                      
                                flixtracking.products.comparisonv2.dwelltimer('stop', '.inpage_selector_comparison')
                        })
                    }
                    document.querySelector(element).dataset.flixtime2= Date.now();
                    
                    
                }       
            },
            elementInViewport: function(element) {
                var myElement = document.querySelector(element);
                if(myElement){
                    var bounding = myElement.getBoundingClientRect();
                    var myElementHeight = myElement.offsetHeight;
                    var myElementWidth = myElement.offsetWidth;
                    var bounding = myElement.getBoundingClientRect();

                    if (bounding.top >= -myElementHeight 
                        && bounding.left >= -myElementWidth
                        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
                        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {

                        if(!document.querySelector(element).dataset.flixtime2){
                            flixtracking.products.comparisonv2.dwelltimer('start', element )
                            //log view CT  
                            if(element=='.inpage_selector_comparison' && FlixjQ(element).is(":visible")){                
                                flixtracking.logging('compare', 'media', null , 'views');
                                var v2prodids='';
                                FlixjQ('.flix-compv2-product').each(function(i){
                                    if(FlixjQ(this).attr('data-compv2-pid'))
                                        v2prodids+=FlixjQ(this).attr('data-compv2-pid')+';'
                                }); 
                                if(!flixtracking.ctviewwed)
                                    flixtracking.logging('compare', 'view', null , v2prodids);
                                flixtracking.ctviewwed=1

                                function ctposition(){
                                    if(FlixjQ('.flix-cp-target').length && !flixtracking.products.comparisonv2.ctpos){      
                                        FlixjQ('.flix-cp-target').each(function(){
                                            var pid=FlixjQ(this).attr('data-compv2-pid');
                                            if(!FlixjQ(this).hasClass('flix-ct-pos'))
                                                flixtracking.logging('compare', 'position', null, pid);
                                            FlixjQ(this).addClass('flix-ct-pos')
                                        });
                                        flixtracking.products.comparisonv2.ctpos=1
                                    }else{
                                        setTimeout(function(){  
                                            ctposition()
                                        }, 2000);
                                    }
                                }
                                ctposition();
                            }
                        }
                    } else {
                        if(document.querySelector(element).dataset.flixtime2)
                            flixtracking.products.comparisonv2.dwelltimer('stop', element)                                
                    }
                }
            }, 
            pageposition: function(){
                //logqa('dwelltimer-'+state+"__"+element)
                logqa('pageposition')
                var toptrac=[];
                var middletrac=[];
                var bottomtrac=[];
                FlixjQ(window).scroll(function() {

                    FlixjQ('[id*=flixinpage_],[data-flix-embed-meta="features"]').each(function(inPcount, b){

                        if(FlixjQ(this).find(".inpage_selector_comparison").length>0 && FlixjQ(this).find(".inpage_selector_comparison").offset()){

                            var top_of_element = FlixjQ(this).find(".inpage_selector_comparison").offset().top;
                            var bottom_of_element = FlixjQ(this).find(".inpage_selector_comparison").offset().top + FlixjQ(this).find(".inpage_selector_comparison").outerHeight();
                            var middle_of_element = FlixjQ(this).find(".inpage_selector_comparison").offset().top + FlixjQ(this).find(".inpage_selector_comparison").outerHeight()/2;

                            var bottom_of_screen = FlixjQ(window).scrollTop() + window.innerHeight;
                            var top_of_screen = FlixjQ(window).scrollTop();
                            var pagepos='1';

                            if(((bottom_of_screen+20 )> top_of_element) && (top_of_screen < bottom_of_element)){


                                if(bottom_of_screen < top_of_element &&  FlixjQ.inArray( inPcount, toptrac )==-1){
                                   
                                    logqa('Top of inPage');
                                    pagepos=0;
                                    toptrac.push(inPcount);

                                }

                                if(bottom_of_screen > middle_of_element &&  FlixjQ.inArray( inPcount, middletrac )==-1){
                                    logqa('Middle of ct');
                                    pagepos=50;
                                    middletrac.push(inPcount);
                                }

                                if(bottom_of_screen > bottom_of_element && FlixjQ.inArray( inPcount, bottomtrac )==-1){
                                    logqa('Bottom of ct');
                                    pagepos=100;
                                    bottomtrac.push(inPcount);
                                }

                                if( pagepos!='1'){         
                                    flixtracking.logging('compare', 'viewpoint', opts, 'ct_view_'+pagepos)
                                }

                            }else {
                                //logqa('Inpage not visible yet')
                            }
                        }
                    })
                });
            }
        },
        thirdpartywidget:{
            init: function () {
                logqa('3p init- new')
                if (FlixjQ.fn.inPage && FlixjQ.fn.inPage.data.product !== undefined) {
                    opts = FlixjQ.fn.inPage.data;
                } else if (FlixjQ.fn.minisite && FlixjQ.fn.minisite.data.product !== undefined) {
                    opts = FlixjQ.fn.minisite.data;
                }
                opts.type='3p';
                if (opts.mpn === undefined) {
                    opts.mpn = '';
                }

                var Array3P = [],uniqueArray3P=[],Ed_3p=FlixjQ(".flix-3rdwidget").data("3p");
                if(FlixjQ('.flix-3rdwidget').length){
                    FlixjQ('[data_app_id]').each(function (index, values) {
                        var value3p = FlixjQ(this).attr('data_app_id');
                        Array3P.push(value3p);
                        Array3P.forEach(function(index) {
                            if (!uniqueArray3P.includes(index)) {
                                uniqueArray3P.push(index);
                                opts.app_id=index;
                                flixtracking.logging('3p', 'page', opts,'');
                            }
                        });
                    });
                }



                this.pageposition();

                // Bose button tracking fix  //
                flixtracking.delegate('click', '.flix-bose-widget-button', function () {
                    opts.app_id=FlixjQ(this).closest('.flix-3rd-widget-multi').find('.flix-3p-multi-button-control-content').attr('data_active_app_id');
                    flixtracking.logging('3p', 'media', opts, '3p_Interactive');
                    window.addEventListener('scroll', flixtracking.products.thirdpartywidget.checkViewport);
                });
                // Bose button tracking fix end //

                flixtracking.delegate('click', '.flix-close-3p', function () {
                    opts.app_id=FlixjQ(this).attr('data_app_id');
                    flixtracking.logging('3p', 'media', opts, '3p_close');
                    flixtracking.products.thirdpartywidget.dwelltimer('stop', '.flix-3p-multi-button-control-content-inner.flix-3p-active-frame')
                });

                flixtracking.delegate('click', '#inpage_container .flix-3p-multi-button-control-title', function () {
                    opts.app_id=FlixjQ(this).attr('data-flixmapping_id');
                    FlixjQ(this).closest('.flix-3p-multi-button-control').find(".flix-3p-multi-button-control-content-inner[data_app_id="+opts.app_id+"]");
                    element='#inpage_container .flix-3p-multi-button-control-content-inner.flix-3p-active-frame'
                    flixtracking.products.thirdpartywidget.elementInViewport('.flix-3p-multi-button-control-content-inner.flix-3p-active-frame');
                    if(FlixjQ(element).is(":visible") &&  FlixjQ(element).css('display') !== 'none' && !FlixjQ(element).hasClass( "flix-appload-fired" ) && !FlixjQ(element).closest('.share-bubble,.share-bubblemob').length){
                        FlixjQ(element).addClass("flix-appload-fired")
                        opts.app_id=FlixjQ(element).closest('.flix-3p-multi-button-control').find('.flix-3p-multi-button-control-content').attr('data_active_app_id');
                        flixtracking.logging('3p', 'appload', opts, '');

                    }
                });

                if(FlixjQ('.ui-tabs-nav li').length){

                    if(((FlixjQ('.ui-tabs-nav li').length ==1 && FlixjQ('.flix-3rd-widget-multi').length > 0) || (FlixjQ('.ui-widget-content .flix-3rd-widget-multi') && FlixjQ('.ui-widget-content .flix-3rd-widget-multi').is(':visible'))) && FlixjQ('.flix-3p-multi-button-control').css('display') !== 'none'){
                        window.addEventListener('scroll', flixtracking.products.thirdpartywidget.checkViewport);
                    }

                    FlixjQ('.ui-tabs-nav li').on('click', function(){
                        window.addEventListener('scroll', flixtracking.products.thirdpartywidget.checkViewport);

                        var tabno=FlixjQ(this).find('a').attr('href');
                        logqa('Minisite logs-'+tabno);
                        if(FlixjQ(tabno).find('.flix-3rd-widget-multi').length)
                            flixtracking.products.thirdpartywidget.elementInViewport('.flix-3p-multi-button-control-content-inner.flix-3p-active-frame');
                    })
                }else{
                    window.addEventListener('scroll', flixtracking.products.thirdpartywidget.checkViewport);
                }
            },
            checkViewport: function(element) {
                if(FlixjQ('.flix-3p-multi-button-control-content-inner.flix-3p-active-frame').css('display') !== 'none')
                    flixtracking.products.thirdpartywidget.elementInViewport('.flix-3p-multi-button-control-content-inner.flix-3p-active-frame');
                //flixtracking.products.thirdpartywidget.elementInViewport('#inpage_container');
            },
            visibilitychange: function(state, type){
                //document.title = document.visibilityState;
                logqa('visibilitychange-'+type)
                if(document.visibilityState=='hidden' ){
                    flixtracking.products.thirdpartywidget.dwelltimer('stop', '.flix-3p-multi-button-control-content-inner.flix-3p-active-frame')
                }
                else{
                }
            },
            hotspot: function(state, type){   
                logqa('thirdpartywidget hotspot')
                var Array3P = [],uniqueArray3P=[],Ed_3p=FlixjQ(".flix-3rdwidget").data("3p"),hsappload = false;
                function fireHS3pagelog() {
                    if (FlixjQ('.share-bubble .flix-3rdwidget, .share-bubblemob .flix-3rdwidget').length) {
                        FlixjQ('.share-bubble [data_app_id],.share-bubblemob [data_app_id]').each(function (index, values) {
                            var value3p = FlixjQ(this).attr('data_app_id');
                            Array3P.push(value3p);
                            Array3P.forEach(function (index) {
                                if (!uniqueArray3P.includes(index)) {
                                    uniqueArray3P.push(index);
                                    opts.app_id = index;
                                    flixtracking.logging('3p', 'page', opts, 'hotspot');
                                }
                            });
                        });
                        opts.app_id = uniqueArray3P[0];
                        if (!hsappload){
                            flixtracking.logging('3p', 'appload', opts, 'hotspot');
                            hsappload = true;
                        }

                    }else {
                        setTimeout(function(){
                            fireHS3pagelog();
                        }, 1000);
                    }
                }
                setTime  }, 500);
                FlixjQ('.share-bubble .flix-3p-multi-button-control-content .flix-3p-multi-button-control-content-inner:eq(0),.share-bubblemob .flix-3p-multi-button-control-content .flix-3p-multi-button-control-content-inner:eq(0)').addClass('flix-appload-fired');
                flixtracking.delegate('click', '.share-bubble .flix-3p-multi-button-control-title, .share-bubblemob .flix-3p-multi-button-control-title', function () {
                    setTimeout(function(){
                        opts.app_id=FlixjQ(this).attr('data-flixmapping_id');
                        FlixjQ('.share-bubble .flix-3p-multi-button-control-content .flix-3p-multi-button-control-content-inner:eq(0),.share-bubblemob .flix-3p-multi-button-control-content .flix-3p-multi-button-control-content-inner:eq(0)').addClass('flix-appload-fired');
                        element='.share-bubble .flix-3p-multi-button-control-content-inner.flix-3p-active-frame,.share-bubblemob .flix-3p-multi-button-control-content-inner.flix-3p-active-frame'
                        if(FlixjQ(element).is(":visible") &&  FlixjQ(element).css('display') !== 'none' && !FlixjQ(element).hasClass( "flix-appload-fired" ) && FlixjQ(element).closest('.share-bubble,.share-bubblemob').length){
                            FlixjQ(element).addClass("flix-appload-fired")
                            opts.app_id=FlixjQ(element).closest('.flix-3p-multi-button-control').find('.flix-3p-multi-button-control-content').attr('data_active_app_id');
                            flixtracking.logging('3p', 'appload', opts, 'hotspot');
                        }
                    }, 500);
                });
                flixtracking.products.thirdpartywidget.dwelltimerhot('start')

                setTimeout(function(){
                    var target='.share-bubble .flix-3rdwidget, .share-bubblemob .flix-3rdwidget'
                    const sections = document.querySelectorAll(target);
                    const config = {
                        rootMargin: '50px 0px 50px 0px',
                       threshold: 0
                    };
                    let isLeaving = false;

                    let observer = new IntersectionObserver(function (entries, self) {
                        var delay = 0;
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                isLeaving = true;
                               //self.unobserve(entry.target);
                                FlixjQ('.share-bubble .flix-3p-multi-button-control-content .flix-3p-multi-button-control-content-inner:eq(0),.share-bubblemob .flix-3p-multi-button-control-content .flix-3p-multi-button-control-content-inner:eq(0)').addClass('flix-appload-fired');
                                logqa('thirdpartywidget visible ');
                            }else if (isLeaving) {
                                isLeaving = false;
                                // leaving the section
                                logqa('thirdpartywidget hidden ');

                                flixtracking.products.thirdpartywidget.dwelltimerhot('stop')
                                self.unobserve(entry.target);
                            }
                        });
                    }, config);

                    //support IntersectionObserver
                    if ('IntersectionObserver' in window) {
                        setTime  }, 1000);   
                    }else{
                        //fallback

                    }
                }, 1000)
                
            },
            visibilitychangehot: function(state, type){                
                logqa('visibilitychangehot-'+type)
                if(document.visibilityState=='hidden' ){
                    flixtracking.products.thirdpartywidget.dwelltimerhot('stop');
                }
                else{
                }
            },
            dwelltimerhot: function(state){
                logqa('dwelltimerhot-'+state)
                if (state=='stop') {
                    var lastt=flixtracking.threephotdwelltime;
                    var tdiff = Date.now() - lastt;                    
                    var artime='hot_app_time_'+tdiff;
                    
                    logqa('stop- '+artime);
                    if(tdiff > 0){
                        
                        logqa('dwelltime'+artime)
                        flixtracking.logging('3p', 'dwelltime', opts, artime);

                        document.removeEventListener('visibilitychange', flixtracking.products.thirdpartywidget.visibilitychangehot);
                    }
                }
                else if(state=='start'){
                    flixtracking.threephotdwelltime= Date.now();
                    document.addEventListener('visibilitychange', flixtracking.products.thirdpartywidget.visibilitychangehot);
                }
                
            },
            dwelltimer: function(state, element){
                //logqa('dwelltimer-'+state+"__"+element)
                if(document.querySelector(element))
                    var lastt=document.querySelector(element).dataset.flixtime2 || 0;

                if (lastt && lastt!=0 && state=='stop') {
                    var lastt=lastt
                    tdiff = Date.now() - lastt;
                    type='3p'
                    if(element && element.search('inpage_container')!=-1)
                        type='inpage'

                    var artime='app_time_'+tdiff;
                    opts.app_id=FlixjQ(element).closest('.flix-3p-multi-button-control').find('.flix-3p-multi-button-control-content').attr('data_active_app_id');
                    logqa(type+'-timer stop- '+tdiff);
                    if(tdiff > 0){
                        flixtracking.logging('3p', 'dwelltime', opts, artime);
                    }

                    document.querySelector(element).removeAttribute('data-flixtime2')
                }
                else if (state=='start' && lastt==0 ){
                    logqa('dwelltimer timer start- new'+element);

                    //check stop dwell when user leaves the page
                    document.addEventListener('visibilitychange', flixtracking.products.thirdpartywidget.visibilitychange);

                    //minisite tab change
                    if(FlixjQ('.ui-tabs-nav li').length){
                        FlixjQ('.ui-tabs-nav li').one('click', function(){
                            var tabno=FlixjQ(this).find('a').attr('href')
                            logqa('Minisite tab click-'+tabno)
                            if(FlixjQ(tabno).find('.flix-3rdwidget').length==0)
                                flixtracking.products.thirdpartywidget.dwelltimer('stop', '.flix-3p-multi-button-control-content-inner.flix-3p-active-frame')
                        })
                    }
                    document.querySelector(element).dataset.flixtime2= Date.now();


                }
            },
            elementInViewport: function(element) {
                var myElement = document.querySelector(element);
                if(myElement){
                    var bounding = myElement.getBoundingClientRect();
                    var myElementHeight = myElement.offsetHeight;
                    var myElementWidth = myElement.offsetWidth;
                    var bounding = myElement.getBoundingClientRect();

                    if (bounding.top >= -myElementHeight
                        && bounding.left >= -myElementWidth
                        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
                        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {

                        if(!document.querySelector(element).dataset.flixtime2){
                            flixtracking.products.thirdpartywidget.dwelltimer('start', element )
                        }
                        //log view 3p
                        if(element=='.flix-3p-multi-button-control-content-inner.flix-3p-active-frame' && FlixjQ(element).is(":visible") &&  FlixjQ(element).css('display') !== 'none' && !FlixjQ(element).hasClass( "flix-appload-fired" ) && !FlixjQ(element).closest('.share-bubble,.share-bubblemob').length){
                            FlixjQ(element).addClass("flix-appload-fired")
                            opts.app_id=FlixjQ(element).closest('.flix-3p-multi-button-control').find('.flix-3p-multi-button-control-content').attr('data_active_app_id');
                            flixtracking.logging('3p', 'appload', opts, '');

                        }

                    } else {
                        if(document.querySelector(element).dataset.flixtime2)
                            flixtracking.products.thirdpartywidget.dwelltimer('stop', element)
                    }
                }
            },
            pageposition: function(){
                //logqa('dwelltimer-'+state+"__"+element)
                logqa('pageposition')
                var toptrac=[];
                var middletrac=[];
                var bottomtrac=[];
                FlixjQ(window).scroll(function() {
                    FlixjQ('.flix-3rd-widget-multi').each(function(inPcount, b){
                        var Viewtab = FlixjQ(this);

                        if(Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").length>0 && Viewtab.find('.flix-3p-multi-button-control-content-inner.flix-3p-active-frame').css('display') !== 'none' && Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").offset()){
                            var top_of_element = Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").offset().top;
                            var bottom_of_element = Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").offset().top + Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").outerHeight(false);
                            var middle_of_element = Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").offset().top + Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").outerHeight(false)/2;

                            var bottom_of_screen = FlixjQ(window).scrollTop() + window.innerHeight;
                            var top_of_screen = FlixjQ(window).scrollTop();
                            var pagepos='1';


                            opts.app_id=Viewtab.find('.flix-3p-multi-button-control-content').attr('data_active_app_id');

                            if(((bottom_of_screen+20 )> top_of_element) && (top_of_screen < bottom_of_element)){
                                if (!Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").hasClass("flix-top-view-fired")){
                                    toptrac=[];
                                }else if (!Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").hasClass("flix-middle-view-fired")){
                                    middletrac=[];
                                }else if (!Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").hasClass("flix-bottom-view-fired")){
                                    bottomtrac=[];
                                }
                                if((bottom_of_screen < top_of_element) &&  FlixjQ.inArray( inPcount, toptrac )==-1 && !Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").hasClass("flix-top-view-fired")){
                                    logqa('Top of 3p');
                                    pagepos=0;
                                    toptrac.push(inPcount);
                                    Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").addClass('flix-top-view-fired')
                                    flixtracking.logging('3p', 'viewpoint', opts, '3p_view_'+pagepos)
                                }

                                if(bottom_of_screen > middle_of_element &&  FlixjQ.inArray( inPcount, middletrac )==-1 && !Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").hasClass("flix-middle-view-fired")){
                                    logqa('Middle of 3p');
                                    pagepos=50;
                                    middletrac.push(inPcount);
                                    Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").addClass('flix-middle-view-fired')
                                    flixtracking.logging('3p', 'viewpoint', opts, '3p_view_'+pagepos)
                                }

                                if(bottom_of_screen > bottom_of_element && FlixjQ.inArray( inPcount, bottomtrac )==-1 && !Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").hasClass("flix-bottom-view-fired")){
                                    logqa('Bottom of 3p');
                                    pagepos=100;
                                    bottomtrac.push(inPcount);
                                    Viewtab.find(".flix-3p-multi-button-control-content-inner.flix-3p-active-frame").addClass('flix-bottom-view-fired')
                                    flixtracking.logging('3p', 'viewpoint', opts, '3p_view_'+pagepos)
                                }


                            }else {
                                //logqa('Inpage not visible yet')
                            }
                        }
                    })
                });
            }
        },
        reviews: {
            reviews_count : 0,
            reviewsContainer:'',
            init: function (opts) {
                logqa('init review log');
                if (FlixjQ.fn.inPage && FlixjQ.fn.inPage.data.product !== undefined) {
                    opts = FlixjQ.fn.inPage.data;
                } else if (FlixjQ.fn.minisite && FlixjQ.fn.minisite.data.product !== undefined) {
                    opts = FlixjQ.fn.minisite.data;
                }
                reviews_count = flixtracking.products.reviewsContainer.attr('data-rcount');
                flixtracking.logging('review', 'page', opts, 'review_' + reviews_count);
                this.clicks();
            },
            clicks: function () {
                if (FlixjQ.fn.inPage && FlixjQ.fn.inPage.data.product !== undefined) {
                    opts = FlixjQ.fn.inPage.data;
                } else if (FlixjQ.fn.minisite && FlixjQ.fn.minisite.data.product !== undefined) {
                    opts = FlixjQ.fn.minisite.data;
                }

                
                FlixjQ('body').on('click', '[class*=-topreviews]', function () {
                    flixtracking.logging('review', 'page', opts, 'review_scrollTo');
                });

                FlixjQ('body').on('click', 'nav[class*=_pagination] ul li [data-href]', function () {
                    var page = FlixjQ(this).attr("data-href");
                    flixtracking.logging('review', 'page', opts, 'review_page_' + page);
                });

                FlixjQ("div#minisite_tabs ul").find("[data-m-typeid='14']").on('click', function () {
                    flixtracking.logging('review', 'matchhit', opts, 'review_tabClick');
                });
            }
        },
        pagetracking:{
            init: function(){
                //track when inpage is in viewport
                logqa('start inpage visible tracking')

                if (FlixjQ.fn.inPage && FlixjQ.fn.inPage.data.product !== undefined) {
                    opts = FlixjQ.fn.inPage.data;
                } else if (FlixjQ.fn.minisite && FlixjQ.fn.minisite.data.product !== undefined) {
                    opts = FlixjQ.fn.minisite.data;
                }

                var toptrac=[];
                var middletrac=[];
                var bottomtrac=[];
                FlixjQ(window).scroll(function() {
                    FlixjQ('[id*=flixinpage_]').each(function(inPcount, b){
                        

                        if(FlixjQ(this).find("#inpage_container").length>0 && FlixjQ(this).find("#inpage_container").offset()){

                            var top_of_element = FlixjQ(this).find("#inpage_container").offset().top;
                            var bottom_of_element = FlixjQ(this).find("#inpage_container").offset().top + FlixjQ(this).find("#inpage_container").outerHeight();
                            var middle_of_element = FlixjQ(this).find("#inpage_container").offset().top + FlixjQ(this).find("#inpage_container").outerHeight()/2;

                            var bottom_of_screen = FlixjQ(window).scrollTop() + window.innerHeight;
                            var top_of_screen = FlixjQ(window).scrollTop();
                            var pagepos='';

                            if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){

                                if(top_of_screen < top_of_element &&  FlixjQ.inArray( inPcount, toptrac )==-1){
                                    logqa('Top of inPage');
                                    pagepos='Top of inPage'
                                    toptrac.push(inPcount);
                                }

                                if(top_of_screen > middle_of_element &&  FlixjQ.inArray( inPcount, middletrac )==-1){
                                    logqa('Middle of inPage');
                                    pagepos='Middle of inPage'
                                    middletrac.push(inPcount);
                                }

                                if(bottom_of_screen > bottom_of_element && FlixjQ.inArray( inPcount, bottomtrac )==-1){
                                    logqa('Bottom of inPage');
                                    pagepos='Bottom of inPage'
                                    bottomtrac.push(inPcount);
                                }

                                if(typeof FlixjQ.fn.inPage=='function' && pagepos!=''){
                                    var opts = FlixjQ.fn.inPage.data;
                                    flixtracking.logging('visible', 'media', opts, pagepos, null, inPcount)
                                }

                            }else {
                                //logqa('Inpage not visible yet')
                            }
                        }
                    })
                });

            }
        },
        logotracking: {
            logoclickonce:0,
            init: function () {
                logqa('start logo tracking')
                if (FlixjQ.fn.inPage && FlixjQ.fn.inPage.data.product !== undefined) {
                    opts = FlixjQ.fn.inPage.data;
                } else if (FlixjQ.fn.minisite && FlixjQ.fn.minisite.data.product !== undefined) {
                    opts = FlixjQ.fn.minisite.data;
                }
                flixtracking.logging('logo', 'page', opts, 'logo_page');
                this.hover();
                this.click();
            },
            hover: function () {
                FlixjQ('body').on('hover', '.flix-logop', function () {
                    if (FlixjQ.fn.inPage && FlixjQ.fn.inPage.data.product !== undefined) {
                        opts = FlixjQ.fn.inPage.data;
                    } else if (FlixjQ.fn.minisite && FlixjQ.fn.minisite.data.product !== undefined) {
                        opts = FlixjQ.fn.minisite.data;
                    }
                    if(flixtracking.products.logoclickonce==0)
                        flixtracking.logging('logo', 'media', opts, 'logo_hover');
                    flixtracking.products.logoclickonce++;
                });
            },
            click: function () {
                FlixjQ('body').on('touchstart', '.flix-logop', function () {
                    if (FlixjQ.fn.inPage && FlixjQ.fn.inPage.data.product !== undefined) {
                        opts = FlixjQ.fn.inPage.data;
                    } else if (FlixjQ.fn.minisite && FlixjQ.fn.minisite.data.product !== undefined) {
                        opts = FlixjQ.fn.minisite.data;
                    }
                    if(flixtracking.products.logoclickonce==0)
                        flixtracking.logging('logo', 'media', opts, 'logo_click');
                    flixtracking.products.logoclickonce++;
                });
            }
        },
        ugctracking: {
            init: function () {
                logqa('start ugc tracking')
                if (FlixjQ.fn.inPage && FlixjQ.fn.inPage.data.product !== undefined) {
                    opts = FlixjQ.fn.inPage.data;
                } else if (FlixjQ.fn.minisite && FlixjQ.fn.minisite.data.product !== undefined) {
                    opts = FlixjQ.fn.minisite.data;
                }
                flixtracking.logging('ugc', 'page', opts, 'ugc_page'); 
                this.click();                       
            },
            click: function () {  
                var timerId = null; 
                var lo = {"handled":false}                      
                FlixjQ('body').on('click touchstart', '[data-flix-ucgmedia]', function () {
                    if(lo.handled === false){ 
                        lo.handled = true;
                        if (FlixjQ.fn.inPage && FlixjQ.fn.inPage.data.product !== undefined) {
                            opts = FlixjQ.fn.inPage.data;
                        } else if (FlixjQ.fn.minisite && FlixjQ.fn.minisite.data.product !== undefined) {
                            opts = FlixjQ.fn.minisite.data;
                        }
                        var opts2=opts;
                        var ucgtarget=FlixjQ(this).attr('data-flix-ucgmedia').toLowerCase()
                        if(FlixjQ(this).closest('.share-bubble').length)
                            ucgtarget='hotspot_'+ucgtarget                            
                        if(typeof opts=='undefined' && typeof flixhotspotmob && typeof flixhotspotmob.data!='undefined')
                            opts2=flixhotspotmob.data;
                        if(typeof opts=='undefined' && typeof flixhotspot && typeof flixhotspot.data!='undefined')
                            opts2=flixhotspot.data;
                        if(typeof window.flixlightboxclick=='undefined' && !timerId){
                            logqa('clicked- '+ FlixjQ(this).attr('data-flix-ucgmedia'))
                            timerId = setTimeout(function(){
                                flixtracking.logging('ugc', 'media', opts2, ucgtarget); 
                                timerId = null;
                            },200);                                
                        }
                    }
                    setTimeout(function(){  
                        lo.handled = false;
                    }, 500)
                });                        
            }
        },
        flctracking: {
            in  },
            checkmatch:function(){
                setTimeout(function(){
                    if (FlixjQ.fn.inPage && FlixjQ.fn.inPage.data.product !== undefined) {
                        opts = FlixjQ.fn.inPage.data;
                    } else if (FlixjQ.fn.minisite && FlixjQ.fn.minisite.data.product !== undefined) {
                        opts = FlixjQ.fn.minisite.data;
                    }
                    if(FlixjQ('#flix-location-content').children().length > 0 ){
                        flixtracking.logging("flc", "location", opts, "flc_location ");
                        flixtracking.products.flctracking.click();
                    }else{
                        flixtracking.logging("flc", "matchmisslocation ", opts, "flc_matchmisslocation  ");
                    }
                },1500)
            },
            click: function() {
                var lo = {"handled":false}
                FlixjQ("body").on("click touchstart", "[data-flix-flcmedia]", function() {
                    if(lo.handled === false){ 
                        lo.handled = true;
                        if (FlixjQ.fn.inPage && FlixjQ.fn.inPage.data.product !== undefined) {
                            opts = FlixjQ.fn.inPage.data;
                        } else if (FlixjQ.fn.minisite && FlixjQ.fn.minisite.data.product !== undefined) {
                            opts = FlixjQ.fn.minisite.data;
                        }
                        var opts2=opts;
                        var flctarget = FlixjQ(this).attr("data-flix-flcmedia").toLowerCase();
                        logqa("clicked- " + flctarget);
                        flixtracking.logging("flc", "locationmedia", opts2, flctarget)
                    }
                    setTime  }, 500)
                })
            }
        },
        buttontracking: {
            init: function () {
                logqa('init buttontracking log');
                var type='inpage';
                if(typeof opts=='undefined' && typeof FlixjQ!='undefined' && typeof FlixjQ.fn.inPage!='undefined')
                    opts=FlixjQ.fn.inPage.data;
                if(typeof FlixjQ.fn.minisite!='undefined'){
                    type='minisite'
                    if(typeof opts=='undefined')
                        opts=FlixjQ.fn.minisite.data;
                }
                var cc=0;
                var lo = {"handled":false}  
                var medialog=function(mediatext, prodid){
                    var data2 = JSON.parse(JSON.stringify(opts));
                    //var data2=FlixjQ.extend(true, {}, opts)  
                    if(prodid && prodid!='')
                        data2.product=prodid;
                    if(cc==0){
                        logqa('clicked data-flix-media: '+mediatext)
                        cc=1;
                        flixtracking.logging(type, 'media', data2, mediatext);
                        setTime=0}, 500)
                    }
                }
                flixtracking.delegate('click', '[data-flix-media]', function () {

                    var mediatext=FlixjQ(this).attr('data-flix-media');
                    var targetval=FlixjQ(this).closest('[id*=flixinpage_]');
                    logqa('data-flix-media click-'+targetval+"__"+mediatext);
                    if(FlixjQ(targetval).find('span[id^=inpage-data], span[class^=mobile-data]').length){
                        var prodid=FlixjQ(targetval).find('span[id^=inpage-data]').attr('id') || FlixjQ(targetval).attr('alt') ;
                        prodid=prodid.toString().replace('inpage-data-','');
                        medialog(mediatext, prodid)
                    }else{
                        medialog(mediatext)
                    }
                    medialog(mediatext, prodid)
                });
            }
        },
        jwplayer : function (mediaid_now, type, attr, div_name) {
            logqa('in jwlogs - '+type )

            //page load and start video
            if(type=='mediaload'){
                var et='mediaload';
                var ed=mediaid_now;
                this_position='';
            }
            
            //video times, 1st sec, 10sec and complete
            if(type=='mediatime'){   
                var this_position=attr;  
                var et='mediatime';
                var ed=mediaid_now;                        
            }

            if(typeof FlixjQ.fn.inPage !='undefined' || typeof FlixjQ.fn.minisite!='undefined' || (flixtracking.getUrlParameter('p') && flixtracking.getUrlParameter('l')) || (typeof FlixjQ.fn.hotspot!='undefined')){
                _base='//media.flixcar.com'
                if(flixtracking.getUrlParameter('base') && flixtracking.getUrlParameter('base').length>0)
                        _base=flixtracking.getUrlParameter('base')

                var opts={
                    type:'inpage',
                    event_type: et || '',
                    event_detail: ed || '',
                    product_id: flixtracking.getUrlParameter('p') || '',
                    distributor: flixtracking.getUrlParameter('d') || '',
                    language: flixtracking.getUrlParameter('l') || '',
                    pn:pnurl,
                    page_name: pnurl,       
                    mpn: mpn || flixtracking.getUrlParameter('mpn') ||'',
                    ean: flixtracking.getUrlParameter('ean') || '',
                    ver:2,
                    vtime: this_position || '' , 
                    br: flixtracking.getUrlParameter('br') || '',
                    price: flixtracking.getUrlParameter('pr') || '',        
                    currency: flixtracking.getUrlParameter('cur') || '',
                    jwvideo:1,
                    pagedata:{
                        br: flixtracking.getUrlParameter('br') || '',
                        price: flixtracking.getUrlParameter('pr') || '',        
                        currency: flixtracking.getUrlParameter('cur') || '',
                        pn:pnurl,
                        page_name: pnurl   
                    }
                }

                var d=new Date ()

                if(pnurl.search('minisite/show')!=-1 || pnurl.search('minisite.html')!=-1 || (typeof FlixjQ!='undefined' && typeof FlixjQ.fn.minisite!='undefined')){
                    logqa('minisite.log')
                    opts.type='minisite'                    
                }

                if(et=='mediatime' && (this_position=='' || this_position<0.11))
                    opts.vtime=0;

                d.setMinutes( d.getTimezoneOffset() );
                
                opts.ut = d.getTime ();
                
                flixtracking.log(opts);            
            } else{
                logqa('no video tracking ' )
            }  
        },
        cgi: function(event_type, edription){
            logqa('in cgi - '+event_type )

           
            var aaurl=function(sParam){
                var sPageURL=decodeURI(window.location.search.substring(1)),
                    sURLVariables=sPageURL.split('&'),
                    sParameterName,
                    i;

                for (i=0; i < sURLVariables.length; i++) {
                    sParameterName=sURLVariables[i].split('=');

                    if (sParameterName[0]===sParam) {
                        sParameterName[1]=decodeURIComponent(sParameterName[1])
                        return sParameterName[1]===undefined ? true : sParameterName[1];
                    }
                }
            }


            var data={
                product_id: flixtracking.getUrlParameter('p') || '',
                distributor: flixtracking.getUrlParameter('d') || '', //overwritten by data-flix-distributor
                language: flixtracking.getUrlParameter('l') || 'en',
                event_type: event_type || 'page',
                event_detail: edription.toLowerCase() || '',               
                mpn: flixtracking.getUrlParameter('mpn')|| '',
                ean: flixtracking.getUrlParameter('ean')|| '',
                type:'3d',
                pn: aaurl('pn')|| location.href,
                page_name: aaurl('pn') || location.href
            }  

            flixtracking.log(data)
        },
        threedfw: function(event_type, edription){            
            logqa('in 3dfw - '+event_type )
            var pnurl = '', mpn = '';

            
            if (flixtracking.getUrlParameter('pn'))
                pnurl = flixtracking.getUrlParameter('pn');
            pnurl = pnurl.replace(/\|and/g, '&');
            pnurl = pnurl.replace(/\|for/g, '//');
            pnurl = pnurl.replace(/\|que/g, '?');
            pnurl = pnurl.replace(/\|dub/g, ':');
            pnurl = pnurl.replace(/\|is/g, '=');
            pnurl = pnurl.replace(/\|hash/g, '#');
            pnurl = pnurl.replace(/\|per/g, '%');
            if (flixtracking.getUrlParameter('mpn'))
                mpn = flixtracking.getUrlParameter('mpn')
            mpn = mpn.replace(/\|and/g, '&');
            mpn = mpn.replace(/\|for/g, '//');
            mpn = mpn.replace(/\|que/g, '?');
            mpn = mpn.replace(/\|dub/g, ':');
            mpn = mpn.replace(/\|is/g, '=');
            mpn = mpn.replace(/\|hash/g, '#');
            mpn = mpn.replace(/\|per/g, '%');
            if (!window.flixJsCallbacks) {
                var flixJsCallbacks = {
                    _loadCallback: null,
                    _loadInpageCallback: null,
                    _loadMinisiteCallback: null,
                    _loadNoshowCallback: null
                };
                var getFlixCallbac  };
                window.flixJsCallbacks = getFlixCallback();
            }
            if (flixtracking.getUrlParameter('gvid') && flixtracking.getUrlParameter('gvid').length > 0 && window.flixJsCallbacks) {
                window.flixJsCallbacks.gvid = flixtracking.getUrlParameter('gvid')
            }

            var data = {
                arid: flixtracking.getUrlParameter('arid') || '',
                product_id: flixtracking.getUrlParameter('p') || '',
                distributor: flixtracking.getUrlParameter('d') || '', //overwritten by data-flix-distributor
                language: flixtracking.getUrlParameter('l') || 'en',
                event_type: event_type || 'page',
                event_detail: edription.toLowerCase() || '3dfw',
                sid: flixtracking.getUrlParameter('sid') || '',
                br: flixtracking.getUrlParameter('br') || '',
                price: flixtracking.getUrlParameter('pr') || '',
                currency: flixtracking.getUrlParameter('cur') || '',
                ref: '',
                pn: pnurl || document.referrer || '',
                ti: '',
                mpn: flixtracking.getUrlParameter('mpn') || '',
                ean: flixtracking.getUrlParameter('ean') || '',
                type:'3dfw'
            }

            if(data.distributor && data.distributor!='')
                flixtracking.log(data)

        },
        videoChat:function (data){
            logqa('in videoChat log');
            data.type='videochat';
            flixtracking.log(data);
        },
        addtocart: function (data ,ab_hotspot_data) {
            logqa('in addtocart');
            
            var dist='';
            var lan='';
                   
            if(typeof FlixjQ!='undefined' && typeof FlixjQ.fn.inPage!='undefined' ){
                dist=FlixjQ.fn.inPage.data.distributor;
                lan=FlixjQ.fn.inPage.data.language;               
               
            }

            if(!data.d || (data.d && data.d==''))
                data.d = data.distributor || dist;
            if(!data.l || (data.l && data.l==''))
                data.l = data.language || lan;   
            data.view_time = 0;

            var
                d = new Date (),
                _base =  'https://media.flixcar.com/inpage/log.gif',
                encrypt = [],
                _beatUrlnew = flixtracking.trackingDomainBeat,
                _beatNotActive = window.beat_disabled_retailers || [],
                _beatByLanguage = [],
                beat,
                fallback,
                processed = null,
                once_only = [
                    353,
                    1544,
                    2754,
                    607
                ],
                userAgents = [
                    'symbian',
                    'android',
                    'ios'
                ],
                key,
                flixTag,
                i,
                url,
                flixSource=null, indx=-1
                ;
                  
            if (!data.session_id ){
                if(typeof window !== 'undefined' && typeof window.sessionStorage==='object')
                    var guid=sessionStorage.getItem('flixsession');
                if(guid && guid.length)
                    data.session_id=guid;
                else{
                    data.session_id = flixtracking.setGuid.New();
                    if(typeof window !== 'undefined' && typeof window.sessionStorage==='object')
                        sessionStorage.setItem('flixsession', data.session_id); 
                }
            }
            data.gvid = (window.flixJsCallbacks && window.flixJsCallbacks.gvid) ?  window.flixJsCallbacks.gvid : '';
                
            data.pid = ( window.flixJsCallbacks && window.flixJsCallbacks.pid ) ? window.flixJsCallbacks.pid : 0;
            data.product_id=data.comppid || data.pid

            url = _base+"?newtrack&ts=inpage&m=y&et="+data.event_type;
            url += "&sid="+data.session_id;
            url += "&gvid="+data.gvid;
            url += "&p="+data.product_id;
            url += "&d="+data.d;
            url += "&l="+data.l;
            url += "&ed="+encodeURIComponent(data.event_detail);
            url += "&ut=" + d.getTime();
            
            if(window.flreq){
                var fblan=window.flreq
                for(var i = 0; i < fblan.length; i++ ) {
                    if('inpage'==fblan[i].flreq_service && url.search('&l1=')==-1){
                        if(fblan[i].flreq_language && fblan[i].flreq_language!='null'){
                            var origlan=fblan[i].flreq_language
                            var falllan=fblan[i].language
                            url +="&l1="+ origlan+"&l2="+ falllan;
                            if(data.l!=falllan)
                                url=url.replace("&l="+data.l, "&l="+falllan);                       
                        }else{
                            var origlan=fblan[i].language   
                            url +="&l1="+ origlan       
                        }
                    }
                }
            }

            if(url.search('&l1=')==-1 && data.l){
                url +="&l1="+ data.l
            }

            //ismobile log
            if(typeof flixtracking.isMobile!='undefined'){
                    url += "&ism="+flixtracking.isMobile();      
            }

            //add referrer if missing
            if(url.search('ref=&')!=-1 || url.search('ref')==-1){
                if(document.referrer != null && document.referrer.length > 1){
                    url=url.replace('ref=&','')
                    url+="&ref="+document.referrer;
                }
            }

            //3p App_id update
            if(data.app_id && data.type=='3p'){
                url+="&app_id="+data.app_id;
            }

            if(typeof FlixjQ!='undefined' && typeof window.matching_data!='undefined'){
                var prodid=data.product_id || data.product || data.productid
                if(typeof window.matching_data.main != 'undefined') {
                    FlixjQ.each(window.matching_data.main.data, function (index, values) {
                        if (prodid == index) {
                            if (values.match_id)
                                url += "&mi=" + values.match_id
                            if (values.match_type)
                                url += "&mt=" + values.match_type;
                            if (values['match_type '])
                                url += "&mt=" + values['match_type '];
                        }
                    });
                }
                if(typeof window.matching_data.complimentary != 'undefined') {
                    FlixjQ.each(window.matching_data.complimentary.data, function (index, values) {
                        if (prodid == index) {
                            if (values.match_id)
                                url += "&mi=" + values.match_id
                            if (values.match_type)
                                url += "&mt=" + values.match_type;
                            if (values['match_type '])
                                url += "&mt=" + values['match_type '];
                        }
                    });
                }
            }

            indx = window.location.search.indexOf('flxsrc=');
            if (indx!==-1)
            {
                //save some parsing efforts on the basis that our source will always be added last
                flixSource = window.location.search.substring(indx);
            }

            if( !! window.flixJsCallbacks.pageCapture ) {
                for (key in window.flixJsCallbacks.pageCapture) {
                    if( window.flixJsCallbacks.pageCapture.hasOwnProperty(key)) {
                        if (key=='pn' && flixSource) window.flixJsCallbacks.pageCapture[key]+= (window.flixJsCallbacks.pageCapture[key].indexOf('?')!==-1 ? "&" : "?")+flixSource;
                        url += "&" + key + '=' + encodeURIComponent( window.flixJsCallbacks.pageCapture[key] );
                    }
                }
            }
            else {
                fallback = flixtracking.parsePage();
                url += "&ti=" + fallback.title;
                if(flixSource) {
                    var decoded = decodeURIComponent(fallback.pn);
                    fallback.pn = encodeURIComponent(decoded + (decoded.indexOf('?')!==-1 ? "&" : "?") +flixSource) ;
                }
                url += "&pn=" + fallback.pn;

            }

            flixTag = ['mpn', 'ean', 'sku'];
            for( i=0; i< flixTag.length; i++ ) {
                if( document.querySelector('script[data-flix-' + flixTag[i] + ']') &&
                    document.querySelector('script[data-flix-' + flixTag[i] + ']').getAttribute('data-flix-' + flixTag[i]) ) {
                    if(url.search(flixTag[i])==-1)
                        url += "&" + flixTag[i] + "=" + document.querySelector('script[data-flix-' + flixTag[i] + ']').getAttribute('data-flix-' + flixTag[i]);
                }
            }

            if( typeof window.flixJsCallbacks.imgCache === 'undefined' ) { window.flixJsCallbacks.imgCache = {};}
            var track = 'img_' + (new Date).getTime();
            window.flixJsCallbacks.imgCache[track] = new Image();
            if( data.d && (encrypt.indexOf(+data.d) !==-1) && data.event_type === 'cart_click') {
                url = process( url );
            }

            if(url.search('et=undefined')!=-1){
                logqa('cancel empty complementary alert')
                logqa(url)
                return false;
            }

            //abtesting sales attribute
            try{
                if(data.d=='6' || data.d=='75' || data.d=='174' || data.d=='1394' || data.d=='418'){
                    var sessionprod = sessionStorage.getItem('flix');                
                    if(sessionprod==null)                 
                        var flixprod=[];
                    else
                        var flixprod = JSON.parse(sessionprod);                    
                    
                        var idmatch=''
                        if(sessionprod!=null){
                            var parsedObject = JSON.parse(sessionprod);  
                            for (var prod of parsedObject) {            
                                if (prod.pid === data.product_id ) {
                                    idmatch=1
                                }
                            }
                        }
                        
                        if(idmatch==''){
                            var fprod = {}
                            fprod.pid=data.product_id
                            fprod.mpn=document.querySelector('script[data-flix-mpn]').getAttribute('data-flix-mpn')
                            fprod.ean=document.querySelector('script[data-flix-ean]').getAttribute('data-flix-ean')
                            fprod.gvid=data.gvid;
                            fprod.sid=data.session_id;
                            fprod.lan=data.l;
                            fprod.d=data.d;
                            if(window.flixJsCallbacks['ab_'+data.d]!= null && window.flixJsCallbacks['ab_'+data.d].inpage!=null){                                
                                fprod.version=window.flixJsCallbacks['ab_'+data.d].ab_version||'';
                                fprod.target=window.flixJsCallbacks['ab_'+data.d].target||'';
                                fprod.visitor_id=window.flixJsCallbacks['ab_'+data.d].ab_visitor_id||'';
                                fprod.groups=window.flixJsCallbacks['ab_'+data.d].ab_groups||'';
                                fprod.ab_id=window.flixJsCallbacks['ab_'+data.d].ab_id||'';
                                fprod.device=window.flixJsCallbacks['ab_'+data.d].device||'';
                            }

                            //fnac pid
                            if(typeof tc_vars!='undefined' && typeof tc_vars.product_id!='undefined')
                                fprod.prodretailerpid=tc_vars.product_id;
                            if(typeof digitalData!='undefined' && typeof digitalData.product[0].productInfo.sku!='undefined' && typeof digitalData.product[0].productInfo.sku!='undefined')
                                fprod.retailersku=digitalData.product[0].productInfo.sku;

                            flixprod.push(fprod);
                            var jsonObject = JSON.stringify(flixprod);
                            sessionStorage.setItem('flix', jsonObject);
                        }
                }
            } catch(ignore){}

            
            window.flixJsCallbacks.imgCache[track].src = ( !! processed ) ? processed : url;
            window.flixJsCallbacks.imgCache[track].event_type = data.event_type;
            
            if(_beatNotActive.indexOf( +data.d ) < 0 && data.event_type === 'cart_click') {
                //beat1
                setTimeout(function(){beat = 'img_' + (new Date()).getTime();}, 0);
                window.flixJsCallbacks.imgCache[beat] = new Image();

                window.flixJsCallbacks.imgCache[beat].src = _beatUrlnew + url.replace(_base, '');
                window.flixJsCallbacks.imgCache[beat].event_type = data.event_type;

                //abtesting beaturl update
                if(window.flixJsCallbacks['ab_'+data.d]!= null && window.flixJsCallbacks['ab_'+data.d].inpage!=null){
                    setTimeout(function(){beat = 'img_' + (new Date()).getTime();}, 0);
                    window.flixJsCallbacks.imgCache[beat] = new Image();
                    var _beatUrlnew2=_beatUrlnew;
                    _beatUrlnew2 ='//rt.flix360.io/beat';
                    
                    if(_base.search('dev')!=-1 || flixtracking.site_url.search('dev')!=-1 ||   flixtracking.site_url.search('alpha')!=-1)
                        _beatUrlnew2 ='//alpha-rt.flix360.com/beat'


                    
                    var ab_version=window.flixJsCallbacks['ab_'+data.d].version||'';
                    var target=window.flixJsCallbacks['ab_'+data.d].target||'';
                    var ab_visitor_id=window.flixJsCallbacks['ab_'+data.d].visitor_id||'';
                    var ab_groups=window.flixJsCallbacks['ab_'+data.d].groups||'';
                    var ab_id=window.flixJsCallbacks['ab_'+data.d].ab_id||'';
                    var device=window.flixJsCallbacks['ab_'+data.d].device||'';
                    if(url.search('&visitor_id')==-1)
                        url = url+"&version="+ab_version+"&target="+target+"&visitor_id="+ab_visitor_id+"&groups="+ab_groups+"&ab_id="+ab_id+"&device="+device;

                    window.flixJsCallbacks.imgCache[beat].src = _beatUrlnew2 + url.replace(_base, '');
                    window.flixJsCallbacks.imgCache[beat].event_type = data.event_type;
                }
                
            }
            else if(typeof(ab_hotspot_data)!="undefined"){
                if(ab_hotspot_data!=null){
                    var ab_visitor_id=ab_hotspot_data.visitor_id;
                    var ab_version=ab_hotspot_data.version
                    var ab_groups=ab_hotspot_data.groups
                    if(url.search('&visitor_id')==-1)
                        url += "&visitor_id="+ab_visitor_id+"&version="+ab_version+"&groups="+ab_groups;
                }
            }
            // Hotspot A/B test END

            //disable the target once it has fired.
            
            if(data.l)
                data.language=data.l;
            
            //CT V2 cart click - deactivated on request from SIO

            /*
            var ab_res_id = 'ab_'+data.d;  
            if(document.querySelector('.flix-comparev2'))
                flixtracking.logging('compare', 'cart_click', data); 
                         
            else if( window.flixJsCallbacks[ab_res_id] && window.flixJsCallbacks[ab_res_id].inpage 
                && window.flixJsCallbacks[ab_res_id].ab_id =='707'
                && typeof window.flixJsCallbacks[ab_res_id].inpage.inpages!='undefined' 
                &&
                (
                    (typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_comparison_table !='undefined' && typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_comparison_table =="boolean") 
                    ||
                    (typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_inpage !='undefined' &&   typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_inpage =="boolean") 
                    ||
                    (typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.change_template !='undefined' &&   typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.change_template =="boolean")
                    

                )                        
            ){
                flixtracking.logging('compare', 'cart_click', data);
            }*/
        },
        attachFlix: function (data) {
            logqa('attachFlix');
            data.type='attach'
            flixtracking.log(data);
        },
        noshow: function (data) {
            logqa('noshow');
            if(!data.product_id)
                data.product_id="0";
            if(!data.product)
                data.product="0";
            if(data.type!='interactive' || ( typeof window.flixContentHolder=='undefined' || typeof window.flixContentHolder.mobileHotspotData=='undefined' || window.flixContentHolder.mobileHotspotData.hotspots==0) ){
                 flixtracking.log(data);
            }
        },
        adjacency: function(data){
            logqa('adjacency');
            var opts = JSON.parse(JSON.stringify(data));
            opts.type='adjacency';

            //hotspots
            //opts.event_detail='hotspot'
            if(opts.event_detail=='hotspot'){
                FlixjQ.each(window.adjacency_map, function (index, values) {                   
                    if (values.match_id){
                        opts.adjacencymatch_id=values.id;  
                        opts.match_id=values.match_id;
                        opts.match_type=values.mtadjcnt;

                        if(typeof flixhotspot!='undefined' && flixhotspot.results){
                            var results=JSON.stringify(flixhotspot.results.hotspots);
                            if(results.search(index)!=-1){
                                logqa('hotspot adjacency page');
                                flixtracking.log(opts);   
                            }
                        }else if(typeof flixhotspotmob!='undefined'){
                            var results=JSON.stringify(flixhotspotmob.results.hotspots);
                            if(results.search(index)!=-1){
                                logqa('hotspot adjacency page');
                                flixtracking.log(opts);   
                            }
                        }                   
                                                             
                    }                
                });
            }else{
            setTimeout(function(){
                if (FlixjQ('[data-flixadjacencies]').length) {
                    var AdjArray = [],uniqueArray=[];
                    FlixjQ('[data-flixadjacencies]').each(function (index, values) {
                        var adjvalue = FlixjQ(this).attr('data-flixadjacencies');
                        AdjArray.push(adjvalue);
                        AdjArray.forE  });
                    });

                    FlixjQ.each(window.adjacency_map, function (index, values) {
                        if(uniqueArray.includes(index) === true){
                            logqa('Adjacency page load - '+ uniqueArray + " index - " + index);
                            if (values.match_id) {
                                opts.adjacencymatch_id = values.id;
                                opts.match_id = values.match_id;
                                opts.match_type = values.mtadjcnt;

                                if (FlixjQ('[data-adjacencies]').closest('[id^=flixinpage]').find('span[id^=inpage-data]').length) {
                                    var prodid = FlixjQ('[data-adjacencies]').closest('[id^=flixinpage]').find('span[id^=inpage-data]').attr('id');
                                    opts.product_id = prodid.toString().replace('inpage-data-', '');
                                    flixtracking.log(opts);
                                }

                            }

                        }
                    });
                }

            }, 2500)
                /*
                setTimeout(function(){
                    FlixjQ.each(window.adjacency_map, function (index, values) {                   
                        if (values.match_id){
                            opts.adjacencymatch_id=values.id;  
                            opts.match_id=values.match_id;
                            opts.match_type=values.mtadjcnt;

                            if(FlixjQ('[data-adjacencies]').closest('[id^=flixinpage]').find('span[id^=inpage-data]').length){ 
                                logqa('inpage adjacency page');
                                var prodid=FlixjQ('[data-adjacencies]').closest('[id^=flixinpage]').find('span[id^=inpage-data]').attr('id');                                                    
                                opts.product_id=prodid.toString().replace('inpage-data-','');
                                flixtracking.log(opts);   
                            }
                                                                 
                        }                
                    });
                }, 2000)
                */

                //add clicks
                setTimeout(function(){
                    FlixjQ('span[data-flixadjacencies], [data-flixadjacencies][data-flix-media]').each( function (index, values) {
                        if(!FlixjQ(this).hasClass('flix-adj')){
                            FlixjQ(this).addClass('flix-adj');
                            var thisadj=FlixjQ(this);
                            var adjvalue=FlixjQ(this).attr('data-flixadjacencies');
                            if(FlixjQ(this).closest('[data-flix-media]').length){
                                FlixjQ(this).closest('[data-flix-media]').on('click', function(){                                                       
                                    opts.type='adjacency';
                                    logqa('Adjacency click -'+ adjvalue);
                                    FlixjQ.each(window.adjacency_map, function (index, values) {                   
                                        if (index==adjvalue){
                                            opts.adjacencymatch_id=values.id;  
                                            opts.match_id=values.match_id;
                                            opts.match_type=values.mtadjcnt;  
                                            if(thisadj.closest('[id^=flixinpage]').find('span[id^=inpage-data]').length){ 
                                                var prodid=thisadj.closest('[id^=flixinpage]').find('span[id^=inpage-data]').attr('id');                                                    
                                                opts.product_id=prodid.toString().replace('inpage-data-','')

                                                flixtracking.logMedia(opts,adjvalue);
                                            }
                                        }                
                                    });
                                                                     
                                }); 
                            }else{
                                FlixjQ(this).on('click', function(){                        
                                    opts.type='adjacency';
                                    logqa('Adjacency click -'+ adjvalue);
                                    FlixjQ.each(window.adjacency_map, function (index, values) {                   
                                        if (index==adjvalue){
                                            opts.adjacencymatch_id=values.id;  
                                            opts.match_id=values.match_id;
                                            opts.match_type=values.mtadjcnt;  
                                            if(thisadj.closest('[id^=flixinpage]').find('span[id^=inpage-data]').length){ 
                                                var prodid=thisadj.closest('[id^=flixinpage]').find('span[id^=inpage-data]').attr('id');                                                    
                                                opts.product_id=prodid.toString().replace('inpage-data-','')

                                                flixtracking.logMedia(opts,adjvalue);
                                            }                                               
                                        }                
                                    });
                                    
                                });
                            }
                        }
                    });
                }, 3000)
            }  
        }

    },
    checkLoader: function(data){
        logqa('checkLoader');

        //new production - //delivery.local/
        //beta - //delivery-beta.flix360.io/"
        //alpha - //delivery-alpha.flix360.io/
        //local - //delivery.local/

        if(typeof FlixjQ!='undefined' && typeof FlixjQ.fn.inPage!='undefined' && typeof FlixjQ.fn.inPage.urlMain!='undefined')
            flixtracking.site_url=FlixjQ.fn.inPage.urlMain;
        else if(typeof FlixjQ!='undefined' && typeof FlixjQ.fn.minisite!='undefined' && typeof FlixjQ.fn.minisite.urlMain!='undefined')
            flixtracking.site_url=FlixjQ.fn.minisite.urlMain;
        else if(typeof FlixjQ!='undefined' && typeof FlixjQ.fn.microsite!='undefined' && typeof FlixjQ.fn.microsite.urlMain!='undefined')
            flixtracking.site_url=FlixjQ.fn.microsite.urlMain;

        flixtracking.trackingDomain='https://media.flixcar.com/';
        flixtracking.trackingDomainBeat= 'https://rt.flix360.com/beat/';

        if(flixtracking.site_url.search('delivery-beta')>0 || location.href.search('demo-beta.flix360.io') != -1 || location.href.search('beta=1') != -1  || location.href.search('live=2')!= -1){
            //beta tracking
            logqa('beta - beta logs');
            flixtracking.trackingDomain= 'https://t-beta.flix360.io/';
            flixtracking.trackingDomainBeat= 'https://b-beta.flix360.io/';
        }
        else if(flixtracking.site_url.search('delivery-alpha')!=-1 || location.href.search('demo-local.flix360.io')!= -1 || location.href.search('demo-alpha.flix360.io') != -1 || location.href.search('alpha=1') != -1  || location.href.search('live=3') != -1 ){
            //alpha tracking
            logqa('alpha - alpha logs');
            flixtracking.trackingDomain= 'https://t-alpha.flix360.io/';
            flixtracking.trackingDomainBeat= 'https://b-alpha.flix360.io/';
        }

        flixtracking.checkLoaderloaded=true
    },
    log: function (data, status) {
        logqa('log', data, status);

        if(!data.distributor_id && data.distributor)
            data.distributor_id=data.distributor;
        
        if(!data.distributor && data.distributor_id)
            data.distributor=data.distributor_id;
        if(!data.distributor && data.d)
            data.distributor=data.d;
            
        flixtracking.noTracking=false;
        
        //window.cancelinpagetracking                   =true;
        //window.cancelhotspottracking                  =true;
        //window.cancelminisitetracking                 =true;

        //inpage - cancel all tracking apart from hotspot and minisite button
        //hotspot - cancel all hotspot
        //minisite - cancel all tracking
        //video & 3dfw - ignore fallback as its loading the same in both scenarios

        //check for double tracking
        if(window.cancelinpagetracking && (data.type=='inpage' || data.type=='review' || data.type=='attach' || data.type=='compare' || data.type=='logo' || data.type=='ugc')){
            logqa(' Double tracking, stop the tracking')
            return false;
        }

        if(window.cancelhotspottracking && (data.type=='interactive')){
            logqa(' Double tracking, stop the tracking')
            return false;
        }
        
        if(window.cancelminisitetracking && (data.type=='minisite')){
            logqa(' Double tracking, stop the tracking')
            return false;
        }
        
        //hughes loader
        /*if(data.distributor=='7109'){
            flixtracking.trackingDomain='https://media.flixcar.com/'+data.type+'/'
            flixtracking.trackingDomainBeat= '//rt.flix360.com/beat'
        }*/
        
        //deactivated because we have the no tracking list below
        //flixtracking.checkNoTracking();

        if ( (typeof flixtracking.noTracking!='undefined' && flixtracking.noTracking==false) ) {

            if(flixtracking.checkLoaderloaded==false)
                flixtracking.checkLoader(data);
            //no tracking
            var notrackingretailers=[157, 178, 499, 546, 877, 1590, 2694, 4212, 5227, 6069, 6543, 6558, 6791, 6792, 6900, 6971, 7148, 7417, 8598, 9253, 12498, 14209, 15237, 16260, 17538, 18122];

            if(notrackingretailers.indexOf(parseInt(data.distributor))!=-1){
                logqa('This is NO TRACKING retailer');
                return false;
            }

            //try{
            if(flixtracking.trackingDomain=='')
                flixtracking.trackingDomain='https://media.flixcar.com/'

            if(flixtracking.trackingDomain.search('media.flixcar.com/')==-1){
                var baseurl=flixtracking.trackingDomain+'log.gif';
            }else
                var baseurl=flixtracking.trackingDomain+data.type+'/log.gif';
                       
            //update 3d url because it has different pattern
            if(data.type=='3d'){
                baseurl='https://media.flixcar.com/interactive/3d/log.gif'
            }
            if(data.type=='3p'){
                baseurl=flixtracking.trackingDomain+'3p/log.gif'
            }
            if(data.type=='adjacency'){
                baseurl=flixtracking.trackingDomain+'adjacency/log.gif'
            }

            var d = new Date (),
            t = '',
            _base = baseurl,
            _beatUrl = flixtracking.trackingDomainBeat,
            _beatNotActive = window.beat_disabled_retailers || [],
            _beatByLanguage = [],
            beat,
            processed = null,
            encrypt = [],
            userAgents = [
                'symbian',
                'android',
                'ios'
            ]
            ;
            if (!data.session_id ){
                if(typeof window !== 'undefined' && typeof window.sessionStorage==='object')
                    var guid=sessionStorage.getItem('flixsession');
                if(guid && guid.length)
                    data.session_id=guid
                else{
                    data.session_id = flixtracking.setGuid.New();
                    if(typeof window !== 'undefined' && typeof window.sessionStorage==='object')
                        sessionStorage.setItem('flixsession', data.session_id); 
                }
            }

            if(typeof main_distributor!='undefined')
                data.distributor=main_distributor

            if(!data.distributor_id)
                data.distributor_id=data.distributor;
            if(!data.distributor)
                data.distributor=data.distributor_id;
            


            d.setMinutes( d.getTimezoneOffset());

            window.flixJsCallbacks.pageViewnew = window.flixJsCallbacks.pageViewnew || {log : false, beat: false};
             
            if(!data.page_name){
                var page = this.getURL();
                data.page_name = page;
            }

            data.gvid = (window.flixJsCallbacks && window.flixJsCallbacks.gvid) ?  window.flixJsCallbacks.gvid : '';

            if( typeof FlixjQ!='undefined' && FlixjQ.fn.inPage && FlixjQ.fn.inPage.hasOwn( data.ab_data ) && data.ab_data.expire !== 'expired'){
                var cookieab=''
                if(typeof data.ab_data.cookie!='undefined' && typeof data.ab_data.cookie.abid!='undefined')
                    cookieab=data.ab_data.cookie.abid 
                data.ab = "&ab="+data.ab_data.tst_id+"&abr="+data.ab_data.resource_ref+"&abid="+cookieab;
                if( ! FlixjQ.fn.inPage.defaults.sio_ty ) {
                    FlixjQ.fn.inPage.writeSioTy( window.flixJsCallbacks.gvid, data.ab_data);
                    FlixjQ.fn.inPage.defaults.sio_ty++;
                }
            }   
            
            //minisite page name / referrer
            if ( data.type && data.type=='minisite'){
                pn = window.location.search.match(/\bpn\b=([^&]+)/i);
                if(!window.location.href.search('minisite')==-1)
                    data.page_name = ( !! pn ) ? pn[1] : 'URL not available - Manual http links';    
            }  
            
            if(data.type=='' || !data.type)
                data.type=='inpage'
            
            var url = _base+"?newtrack&ts="+data.type + "&d=" + data.distributor+ "&l=" + data.language  + "&et=" + data.event_type  + "&vtime=" + (data.view_time || data.vtime || 0)+"&gvid="+data.gvid+"&cs=" + flixtracking.tracking+"&cp=" + flixtracking.cookieConsent.provider+"&cd=" + flixtracking.cookieConsent.data+ "&sid=" + data.session_id;   

            if(data.event_detail && data.event_detail.length)
                url +="&ed="+encodeURIComponent(data.event_detail)
            else
                url +="&ed="+""

            if(typeof FlixjQ!='undefined' && ( FlixjQ('#flix-mbl-page').length || FlixjQ('.main_mot_product_wrapper').length) && data.type=='inpage' && data.event_type=='page'){
                url += "&mot=1";
            }

            if(data.distributor=='6' || data.distributor=='174'|| data.distributor=='1394'){
                if(sessionStorage.getItem('flixdist')==null && data.distributor && data.distributor.length>0){
                    sessionStorage.setItem('flixdist', data.distributor)        
                }
                if(sessionStorage.getItem('flixlan')==null && data.language && data.language.length>0){
                    sessionStorage.setItem('flixlan', data.language)        
                }
            }

            //3p App_id update
            if(data.app_id && data.type=='3p'){
                url+="&app_id="+data.app_id;
            }
    
            if(flixtracking.retailercheck && flixtracking.retailercheck.check==false){
                flixtracking.retailercheck.init(data);
            }

            if(flixtracking.retailercheck && flixtracking.retailercheck.cn && flixtracking.retailercheck.cn.length>1){
                url += "&cn="+flixtracking.retailercheck.cn+"&cc="+flixtracking.retailercheck.cc;
            }

            //matchid and matchtype
            if(data.match_id && data.match_id.length>0){
                if (data.match_id)
                    url += "&mi=" + data.match_id
                if (data.match_type)
                    url += "&mt=" + data.match_type;
            }else if(typeof FlixjQ!='undefined' && typeof window.matching_data!='undefined'){
                var prodid=data.product_id || data.product || data.productid
                if(typeof window.matching_data.main != 'undefined') {
                    FlixjQ.each(window.matching_data.main.data, function (index, values) {
                        if (prodid == index) {
                            if (values.match_id)
                                url += "&mi=" + values.match_id
                            if (values.match_type)
                                url += "&mt=" + values.match_type;
                            if (values['match_type '])
                                url += "&mt=" + values['match_type '];
                        }
                    });
                }
                if(typeof window.matching_data.complimentary != 'undefined') {
                    FlixjQ.each(window.matching_data.complimentary.data, function (index, values) {
                        if (prodid == index) {
                            if (values.match_id)
                                url += "&mi=" + values.match_id
                            if (values.match_type)
                                url += "&mt=" + values.match_type;
                            if (values['match_type '])
                                url += "&mt=" + values['match_type '];
                        }
                    });
                }
            }   

            if(data.type=='adjacency'){
                url += "&adjacency_id=" + data.adjacencymatch_id;                
            }
            
            //ismobile log
            if(typeof flixtracking.isMobile!='undefined'){
                    url += "&ism="+flixtracking.isMobile();      
            }

            //microsite variables
            if(data.microsite && data.microsite!='')
                url +="&s="+ data.microsite;        
            if(data.variant)
                url +="&v="+ data.variant;

            //fallback language
            if(window.flreq){
                var fblan=window.flreq
                for(var i = 0; i < fblan.length; i++ ) {
                    if(data.type==fblan[i].flreq_service && url.search('&l1=')==-1){
                        if(fblan[i].flreq_language && fblan[i].flreq_language!='null'){
                            var origlan=fblan[i].flreq_language
                            var falllan=fblan[i].language
                            url +="&l1="+ origlan+"&l2="+ falllan;                        
                        }else{
                            var origlan=fblan[i].language   
                            url +="&l1="+ origlan       
                        }
                    }
                }
            }
            if(url.search('&l1=')==-1 && data.language){
                url +="&l1="+ data.language
            }            

            //if(data.product_id || data.product)
                url +="&p=" + (data.product_id || data.product || data.productid || '');      
            /*url +="&mpn=" + data.mpn;            
            url +="&ean=" + data.ean;*/
            
            /*if( !! document.getElementsByTagName( 'title')) {
                url +="&ti="+document.getElementsByTagName('title')[0].textContent.trim();
            }*/
            //inpage variables


            if(data.event_type=='matchmiss' || data.event_type=='matchmisshotspot' || data.event_type=='matchmissinpage' ){                
                url +="&m=0";                
            }            
            else if(data.type && (data.type=='inpage' || data.type=='interactive')){                
                url +="&m=y";                
            }
            else if(data.type && data.type=='minisite' ){  
            

                url +="&m="+(data.minisite_id  || data.minisite || data.product_id)
            }
            else if(data.type && (data.type=='review' || data.type=='compare' || data.type=='3dfw' || data.type=='ugc' || data.type=='logo' || data.type=='visible' || data.type=='flc')  ){                
                url +="&m=i"
            }

            if(data.type && data.type=='minisite' && window.location.href.search('minisite')==-1 && data.event_type!='matchmiss')
                url+=this.pageDataMinisite(data);
            else
                url+=this.pageData(data);
            

            if(data.type && data.type=='minisite' && window.location.href.search('minisite')==-1 && data.event_type!='matchmiss'){
                /*if (url.search('&ti=&')!=-1){
                    logqa('cancel mini', url);
                    return false

                }*/
            }
            
            if( typeof window.flixJsCallbacks.imgCache === 'undefined' ) { 
                window.flixJsCallbacks.imgCache = {};
            }
            
            if( ! window.navigator.userAgent.match(/(ios|symbian|android)/i) && data.distributor_id && (encrypt.indexOf(+data.distributor_id) >= 0)) {
                processed = FlixjQ.fn.inPage.process( url );
            }

            

            //inpage
            url +="&ut=" + d.getTime();
            //microsite
            url += "&cb=" + d.getTime();

            //minisite
            if ( data.type && data.type=='minisite'){
                url +='&ver=2';               
                url +="&to="+ d.getTimezoneOffset();
                url +="&ss="+ screen.width+'x'+screen.height;
                url +="&pr="+data.price;
                /*url +="&pm="+escape(data.pm);
                url +="&pe="+data.pe;*/
                url +="&a="+ data.asset
            }

            if ( data.event_type == 'cart_click' || data.event_type == 'alert' ) { 
                url+="&pn="+data.page_name; 
            }

            if (url.search('&pn=')==-1  && data.type=="3dfw" ) {
                if(data.pn)
                    var three3url= data.pn;
                else if(document.referrer)
                    var three3url= document.referrer;
                               
                url+="&pn="+encodeURIComponent(three3url); 
                if(data.arid)
                    url+="&arid="+data.arid;
            }

            if(url.search('=mediaload')!=-1 && (url.search('&pn=')==-1 || url.substring(url.length - 4)=='&pn=') ){
                url=url.replace('&pn=','');
                var pnurl=''
                if(flixtracking.getUrlParameter('pn'))
                    pnurl=flixtracking.getUrlParameter('pn');
                pnurl=pnurl.replace(/\|and/g, '&');
                pnurl=pnurl.replace(/\|for/g, '//');
                pnurl=pnurl.replace(/\|que/g, '?');
                pnurl=pnurl.replace(/\|dub/g, ':');
                pnurl=pnurl.replace(/\|is/g, '=');
                pnurl=pnurl.replace(/\|hash/g, '#');
                pnurl=pnurl.replace(/\|per/g, '%');
                if(pnurl)
                    url+='&pn='+encodeURIComponent(pnurl);                        
            }

            if (typeof pnurl!='undefined' && (data.event_type == 'mediatime' || data.event_type == 'mediaload') && url.search('&pn=')==-1) {
                url+="&pn="+encodeURIComponent(data.pn); 
            }
            if (url.search('&pn=')==-1 && typeof window.flixJsCallbacks.pageCapture!='undefined' && typeof window.flixJsCallbacks.pageCapture.pn!='undefined') {
                url+="&pn="+encodeURIComponent(window.flixJsCallbacks.pageCapture.pn); 
            }
            if (url.search('&pn=')==-1 && typeof data.page_name!='undefined' ) {
                url+="&pn="+encodeURIComponent(data.page_name); 
            } 

            //add referrer if missing
            if(url.search('ref=&')!=-1 || url.search('ref')==-1){
                if(document.referrer != null && document.referrer.length > 1){
                    url=url.replace('ref=&','')
                    url+="&ref="+document.referrer;
                }
            }

            //comparison table id
            if(data.ct && data.type=='compare'){
                url+="&ct="+data.ct;
            }

            if(url.search('&pn=undefined')!=-1 || url.search('&pn=&')!=-1  ){ 
                url=url.replace('&pn=undefined','');
                url=url.replace('&pn=&','&');
                if(window.parent){
                    var pnurl = (window.location != window.parent.location)
                    ? document.referrer
                    : top.document.URL;   
                }else{
                    var pnurl = document.location.href;
                }
                
                if(pnurl=='')
                    var pnurl = document.location.href;
               
                url+='&pn='+encodeURIComponent(pnurl);                
            }

            //video module id listing
            if(data.event_type == 'mediaload'){
                url+="&mid="+encodeURIComponent('#')+flixtracking.getUrlParameter('mid');
            }

            //3dfw module id listing
            if(data.type && data.type== '3dfw'){
                url+="&mid="+encodeURIComponent('#')+flixtracking.getUrlParameter('mid');
            }

            if(data.mpn && url.search('&mpn=')==-1)
                url+="&mpn="+data.mpn
            if(data.ean && url.search('&ean=')==-1)
                url+="&ean="+data.ean
           
            
            if ( ! window.flixJsCallbacks.pageViewnew.log && (data.type=='inpage' || data.type=='minisite') && data.event_type != 'mediaload' && data.event_type != 'time' && data.event_type != 'mediatime' ) {
                var initBeaconTime = (new Date()).getTime();
                
                url += "&pv=1";
                window.flixJsCallbacks.pageViewnew.log = true;

                beaconData=url;
                if( ! beaconData ) 
                    return false;

                function getString ( objParams, destructure ) {
                    var params = [], obj = {}, prop, stem, preObj, str, fireBeaconTime;
                    var req = ["m", "p", "d", "l", "sid", "gvid", "ut", "ed", "et", "vtime", "ab", "abr", "abid", "pn"];
                    if( ! destructure ){
                      for(var p in objParams) {
                        if( objParams.hasOwnProperty(p) && (req.indexOf(p) >= 0 )) params.push(p + "=" + objParams[p]);
                      }
                      return "?" + params.join("&");
                    }       
                    else {
                      stem = objParams.split("?");
                      if ( stem.length <= 1 ) return false;
                      params = stem[1].split("&");
                      for(var i = 0; i < params.length; i++ ) {
                        prop = params[i].split("=");
                        if( req.indexOf( prop[0] ) >= 0 ){
                          obj[prop[0]] = prop[1];                                      
                        }
                      }
                      return obj;
                    }
                }

                /*if (( !! navigator && !! navigator.sendBeacon )) {
                    preObj = getString(beaconData, true);
                    if( !! preObj ) {
                        preObj.et = "time";
                        window.addEventListener("beforeunload", function(){
                            fireBeaconTime = (new Date()).getTime();
                            preObj.vtime = Math.round(((fireBeaconTime - initBeaconTime) / 1000));
                            preObj.ed = "onexit";
                            str = getString(preObj);
                            var img = new Image();
                            img.src = flixtracking.trackingDomain+'log.gif'+ str+'&ts=inpage';
                        }, false);
                    };
                } */
            }


            if(data.gvid && data.gvid.length && data.session_id && data.session_id.length){
                //beat log only check
                if((!status || status!='beatlog')){
                    logqa('Fire log - ' - url)    
                    var track = 'img_' + (new Date()).getTime();
                    window.flixJsCallbacks.imgCache[track] = new Image();
                    window.flixJsCallbacks.imgCache[track].src = url;
                    window.flixJsCallbacks.imgCache[track].event_type = data.event_type;
                }else{
                    logqa('beat logs ONLY')      
                }
            }else{
                logqa('trackingqueue')    
                flixtracking.trackingqueue(url);
            }

            if( _beatNotActive.indexOf( +data.distributor_id ) < 0 && data.event_type != 'time' ) {
                var fireBeat=false,fireLog=true;
                logqa('beat logs')                

                if( !! window.flixJsCallbacks && !! window.flixJsCallbacks.a && ( data.distributor_id === 173 && data.mpn === "49UJ630V")) {
                    data.service = "inpage";
                    window.flixJsCallbacks.a.log( data );
                    return true;
                }
                
                var ab_res_id = 'ab_'+data.distributor_id;

                //ABtest for comparison and reviews only
                if(window.flixJsCallbacks['ab_'+data.distributor]!= null && (data.type=='review' || data.type=='compare' || data.type=='interactive') ){
                    fireBeat=true
                }
                //ABtest for complimentary products only
                if(window.flixJsCallbacks[ab_res_id] && typeof window.flixJsCallbacks[ab_res_id].inpage !='undefined'
                        && data.type=='inpage' && (
                        (typeof window.flixJsCallbacks[ab_res_id].inpage.inpages !='undefined' &&typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_inpage !='undefined' && typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_inpage =="boolean") || 
                        (typeof window.flixJsCallbacks[ab_res_id].inpage.inpages !='undefined' && typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.change_template !='undefined' && typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.change_template =="boolean"))
                        
                ){
                    fireBeat=true
                }
                

                if( ! window.flixJsCallbacks.pageViewnew.beat ) {
                    if( ! url.match(/pv\=1/) && data.type=='inpage') url += "&pv=1";
                    window.flixJsCallbacks.pageViewnew.beat = true;
                }
                
                var beaturl=_beatUrl + url.replace(_base, '');

                // a/b test parameter
                
                if (typeof flixtracking.noTracking!='undefined' && flixtracking.noTracking==false && fireBeat) {
                    //ab testing beat logs
                    logqa('Beat tracking', url)
                    if(window.flixJsCallbacks[ab_res_id]!= null){
                        var ab_version=window.flixJsCallbacks[ab_res_id].version||'';
                        var target=window.flixJsCallbacks[ab_res_id].target||'';
                        var ab_visitor_id=window.flixJsCallbacks[ab_res_id].visitor_id||'';
                        var ab_groups=window.flixJsCallbacks[ab_res_id].groups||'';
                        var ab_id=window.flixJsCallbacks[ab_res_id].ab_id||'';
                        var device=window.flixJsCallbacks[ab_res_id].device||'';
                        url += "&version="+ab_version+"&target="+target+"&visitor_id="+ab_visitor_id+"&groups="+ab_groups+"&ab_id="+ab_id+"&device="+device;
                    }

                    if(data.type=='inpage'){
                        url +="&fm_service=1"
                    }else if(data.type=='compare'){
                        url +="&fm_service=315";
                    }
                    else if(data.type=='interactive'){
                        url +="&fm_service=301"
                    }
                    else if(data.type=='review'){
                        url +="&fm_service=334";
                    }
                    
                    var beat = 'img_' + (new Date()).getTime();
                    window.flixJsCallbacks.imgCache[beat] = new Image(); 
                    var _beatUrl2=_beatUrl;
                    _beatUrl2 ='//rt.flix360.com/beat';
                    //abtesting beaturl update
                    if( window.flixJsCallbacks['ab_'+data.distributor]!= null && window.flixJsCallbacks['ab_'+data.distributor].inpage!=null ){
                        if(  flixtracking.trackingDomain.search('alpha')!=-1 ){
                            
                            _beatUrl2 ='//alpha-rt.flix360.io/beat'
                        }else{
                            _beatUrl2=_beatUrl2.replace('//rt.flix360.com/beat', '');
                            _beatUrl2 ='//rt.flix360.io/beat'
                        }
                    } else{
                        _beatUrl2=flixtracking.trackingDomainBeat+url.replace(_base, '');
                    }
                    
                    logqa('_beatUrl2', _beatUrl2 +"__"+data.type)

                    if( window.flixJsCallbacks[ab_res_id] && typeof window.flixJsCallbacks[ab_res_id].inpage !='undefined'
                        && data.type=='inpage'                        
                        && (
                            (typeof window.flixJsCallbacks[ab_res_id].inpage.inpages !='undefined' && typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_inpage !='undefined' &&   typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_inpage =="boolean") 
                            ||
                            (typeof window.flixJsCallbacks[ab_res_id].inpage.inpages !='undefined' && typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.change_template !='undefined' &&   typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.change_template =="boolean")
                            )
                    ){
                        logqa('_beatUrl2 inpage', _beatUrl2 +"__"+data.type)

                        if( window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_inpage ==true ) {

                            if( data.event_type =='impression' || data.event_type =='page'){
                                var targetId=window.flixJsCallbacks[ab_res_id].targetId ||0;
                                if(targetId==data.product_id){
                                    url=url.replace('&p='+data.product_id,'&p='+(window.flixJsCallbacks[ab_res_id].targetId));
                                    window.flixJsCallbacks.imgCache[beat].src = _beatUrl2 + url.replace(_base, '');
                                    window.flixJsCallbacks.imgCache[beat].event_type = data.event_type;
                                }
                            }
                        }else{
                            var targetId=window.flixJsCallbacks[ab_res_id].targetId ||0;
                            if(targetId==data.product_id){
                                url=url.replace('&p='+data.product_id,'&p='+(window.flixJsCallbacks[ab_res_id].targetId));
                                window.flixJsCallbacks.imgCache[beat].src = _beatUrl2 + url.replace(_base, '');
                                window.flixJsCallbacks.imgCache[beat].event_type = data.event_type;
                            }
                           
                        }
                        //standard beat logs
                        var beat = 'img_' + (new Date()).getTime();
                        window.flixJsCallbacks.imgCache[beat] = new Image();
                        window.flixJsCallbacks.imgCache[beat].src = beaturl
                        window.flixJsCallbacks.imgCache[beat].event_type = data.event_type;
                    }

                    //comparison table ab log
                    if( window.flixJsCallbacks[ab_res_id] && window.flixJsCallbacks[ab_res_id].inpage 
                        && typeof window.flixJsCallbacks[ab_res_id].inpage.inpages!='undefined' 
                        &&
                        (
                            (typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_comparison_table !='undefined' && typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_comparison_table =="boolean") 
                            ||
                            (typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_inpage !='undefined' &&   typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_inpage =="boolean") 
                            ||
                            (typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.change_template !='undefined' &&   typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.change_template =="boolean")
                            

                        )
                        && data.type=='compare'
                    ){              
                        logqa('comparison _beatUrl2', _beatUrl2)          
                        if( window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_comparison_table ==true ) {
                            if( data.event_type =='impression' ){
                                window.flixJsCallbacks.imgCache[beat].src = _beatUrl2 + url.replace(_base, '');
                                window.flixJsCallbacks.imgCache[beat].event_type = data.event_type;
                            }
                        }else{
                            window.flixJsCallbacks.imgCache[beat].src = _beatUrl2 + url.replace(_base, '');
                            window.flixJsCallbacks.imgCache[beat].event_type = data.event_type;
                        }

                    }

                    //reviews ab log
                    if(data.type=='review'){
                        if( window.flixJsCallbacks[ab_res_id] && window.flixJsCallbacks[ab_res_id].inpage && typeof window.flixJsCallbacks[ab_res_id].inpage.inpages!='undefined' &&
                            typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_reviews !='undefined' && typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_reviews =="boolean"){
                            logqa('reviews _beatUrl2', _beatUrl2)
                            if( window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_reviews ==true ) {
                                if( data.event_type =='page' ){
                                    window.flixJsCallbacks.imgCache[beat].src = _beatUrl2 + url.replace(_base, '');
                                    window.flixJsCallbacks.imgCache[beat].event_type = data.event_type;
                                }
                            }

                        }else{
                            window.flixJsCallbacks.imgCache[beat].src = _beatUrl2 + url.replace(_base, '');
                            window.flixJsCallbacks.imgCache[beat].event_type = data.event_type;
                        }
                    }

                    
                    //hotspot ab log
                    if( _beatNotActive.indexOf( +data.d ) < 0 
                        && (data.event_type === 'page' || data.event_type === 'media' || data.event_type === 'qr_click' || data.event_type === 'webar_click' || data.event_type === 'dwelltime' ||  data.event_type === 'launch' ||  data.event_type === 'webar_impressions' ||  data.event_type === 'qr_impression' || data.event_type === 'qr_impression') 
                        && (!status || status=='beatlog') 
                        && data.type=='interactive'
                        ){
                        logqa('Hotspot _beatUrl2', _beatUrl2)

                        beat = 'img_' + (new Date()).getTime();
                        window.flixJsCallbacks.imgCache[beat] = new Image();
                        if( ! window.flixJsCallbacks.pageViewnew.beat ) {
                            if( ! url.match(/pv\=1/)) 
                            url += "&pv=1";
                            window.flixJsCallbacks.pageViewnew.beat = true;
                        }

                        //check if abtest criteria is fullfilled
                        if(target==device){
                            // log3('hotspot log beats')
                            //strict rule for services
                            if( window.flixJsCallbacks[ab_res_id] && window.flixJsCallbacks[ab_res_id].hotspot && 
                            ( window.flixJsCallbacks[ab_res_id].hotspot.hotspots || window.flixJsCallbacks[ab_res_id].hotspot.settings )
                            ){
                                window.flixJsCallbacks.imgCache[beat].src = _beatUrl2 + url.replace(_base, '');
                                window.flixJsCallbacks.imgCache[beat].event_type = data.event_type;
                            }else{
                                window.flixJsCallbacks.imgCache[beat].src = _beatUrl + url.replace(_base, '');
                                window.flixJsCallbacks.imgCache[beat].event_type = data.event_type;
                            }
                        }

                          
                    }          
                }else{
                    
                    //standard beat logs
                    if(data.gvid && data.gvid.length && data.session_id && data.session_id.length){
                        var beat = 'img_' + (new Date()).getTime();
                        window.flixJsCallbacks.imgCache[beat] = new Image();
                        window.flixJsCallbacks.imgCache[beat].src = beaturl;
                        window.flixJsCallbacks.imgCache[beat].event_type = data.event_type;
                    }else{
                        flixtracking.trackingqueue(beaturl);
                    }
                }
            }

            //if flixcode loads before competitors, add additional logs
            try{
                if(flixtracking.retailercheck.cc && typeof flixtracking.retailercheck.cc!='undefined' && flixtracking.retailercheck.cc.search('true')==-1 && typeof flixtracking.retailercheck.rc=='undefined' && data.type!='minisite'){
                    logqa('retailercheck again');
                    flixtracking.retailercheck.rc=1;
                    data.event_type = "time";
                    data.event_detail = "";
                    data.view_time = 0;                    

                    for (i = 1; i <= 5; ++i) {
                        var b=i*5000;
                        setTimeout(function(){
                            logqa('retailercheck again -init');
                            flixtracking.retailercheck.init(data);
                            if(flixtracking.retailercheck.cc.search('true')!=-1){
                                logqa('retailercheck again -found it');
                                flixtracking.log(data);
                                //break;
                            }                          
                        }, b);
                    }                    
                }
            } catch(ignore){}

        //}catch(e){}
        }else{
          logqa('No tracking - ');
        }

    },
    logging: function (type, event, data, media, price, inPcount) {
        logqa(type+"__"+event+"__"+data+"__"+media+"__"+price+"__"+inPcount)
        if ( (typeof flixtracking.noTracking!='undefined' && flixtracking.noTracking==false) ) {
            

            if(flixtracking.checkLoaderloaded==false)
                flixtracking.checkLoader(data);

            var fireBeat=false,fireLog=true;
            //clone the data, otherwise it will overwrite the global values

            if (FlixjQ.fn.inPage && FlixjQ.fn.inPage.data.product !== undefined) {
                opts2 = FlixjQ.fn.inPage.data;
            } else if (FlixjQ.fn.minisite && FlixjQ.fn.minisite.data.product !== undefined) {
                opts2 = FlixjQ.fn.minisite.data;
            }
            if(data && data!=null)
                opts2 = JSON.parse(JSON.stringify(data));
                //opts2=FlixjQ.extend(true, {}, data) || opts2;
            if(!flixtracking.getUrlParameter('pn')){
                opts2.page_name = window.location.href;
            }
            opts2.event_type = event;
            opts2.event_detail = media;
            opts2.price = price;
            opts2.view_time = 0;

            var prodid=opts2.product;
            //get productid incase the main product is a matchmiss
            if(prodid==0 || prodid==null){
                prodid=FlixjQ('.main_mot_product_wrapper:eq(0)').attr('alt')  || FlixjQ('[id^=flixinpage]:eq(0)').find('span[id^=inpage-data]').attr('id') || FlixjQ('[id^=flixinpage]:eq(1)').find('span[id^=inpage-data]').attr('id');
                prodid=prodid.toString().replace('inpage-data-','')
            }
            if(type=='review'){
                var prodid=FlixjQ('#flix-mobile_template-reviews').closest('.main_mot_product_wrapper').attr('alt')  || FlixjQ('.inpage_selector_reviews').closest('[id^=flixinpage]').find('span[id^=inpage-data]').attr('id') || opts2.product;
                prodid=prodid.toString().replace('inpage-data-','')
            }

            if(type=='compare'){
                if(FlixjQ('.flix-compare').length && FlixjQ('.flix-compare').html().length)
                    opts2.ct='v1';
                if(FlixjQ('.flix-comparev2').length && FlixjQ('.inpage_selector_comparison').attr('data-compv2-ctid'))
                    opts2.ct=FlixjQ('.inpage_selector_comparison').attr('data-compv2-ctid');
                
                var prodid=FlixjQ('.flix-compare, .flix-comparev2').closest('.main_mot_product_wrapper').attr('alt')  || FlixjQ('.flix-compare, .flix-comparev2').closest('[id^=flixinpage]').find('span[id^=inpage-data]').attr('id') || opts2.product;
                prodid=prodid.toString().replace('inpage-data-','')
            }

            if(type=='visible'){
                var prodid=FlixjQ('[id*=flixinpage_]:eq('+inPcount+')').find('span[id^=inpage-data]').attr('id') || FlixjQ('[id*=flixinpage_]:eq('+inPcount+')').attr('alt') || opts2.product;
                prodid=prodid.toString().replace('inpage-data-','');
            }

            if(type=='3dfw'){ 
                var prodid=FlixjQ('[id*=flixinpage_]:eq('+inPcount+')').find('span[id^=inpage-data]').attr('id') || FlixjQ('[id*=flixinpage_]:eq('+inPcount+')').attr('alt') || opts2.product;
                prodid=prodid.toString().replace('inpage-data-','');
                
            }

            if(type=='inpage' && event=='media'){ 
                var prodid=FlixjQ('[id*=flixinpage_]:eq('+inPcount+')').find('span[id^=inpage-data]').attr('id') || FlixjQ('[id*=flixinpage_]:eq('+inPcount+')').attr('alt') || opts2.product;
                prodid=prodid.toString().replace('inpage-data-','');
            }

            var d = new Date();

            var domain=flixtracking.trackingDomain
            /*if(opts2 && opts2.distributor=='7109'){
                domain='https://media.flixcar.com/'+opts2.type+'/'
            }*/
            
            if(flixtracking.trackingDomain.search('media.flixcar.com/')==-1){
                var _base=flixtracking.trackingDomain+'log.gif';
            }else
                var _base=flixtracking.trackingDomain+type+'/log.gif';

            var url = _base + "?newtrack&ts="+type+"&loggin&m=i"

            if(FlixjQ('#flix-mbl-page').length){
                url += "&mot=1";
            }

            // flixlocation content tracking
            if(type=="flc"){
                fireLog=false;
                fireBeat=true;

                var prodid=opts2.product || '';

                url +="&mpn="+opts2.mpn + "&ean="
                    + opts2.ean + "&location="
                    + opts2.city
            }

            opts2.product_id=prodid

            logqa("Global log - type: "+type+"_ prodid: "+prodid);
            
            opts2.type=type;
            logqa(opts2)
            flixtracking.log(opts2);



        }
    },
    logTimer:0,
    logTime: function(data,newtime) {
        
        if (typeof newtime=='undefined' ){            
            newtime = parseInt(flixtracking.logTimer) + 10;
            flixtracking.logTimer=newtime
        }
        logqa('logTime-'+  newtime);   
        data.event_type = "time";
        data.event_detail = "";
        data.view_time = newtime;
        if(!data.type)
            data.type="inpage"
        if( newtime>300) return;
        logTimer=newtime;
        
        flixtracking.log(data);
    },
    logTimeMinisite: function(data,newtime) {
        logqa('logTime');   
        if (newtime==undefined){
            newtime = parseInt(logTimer) + 10;
        }
        data.event_type = "time";
        data.event_detail = "";
        data.view_time = newtime;
        data.type="minisite"
        if( newtime>300) return;
        logTimer=newtime;
        
        flixtracking.log(data);
    },
    logClick: function(data, medianame) {   
        logqa('logMedia');
        data.event_type = "click";
        data.event_detail = medianame;
        data.view_time = 0;
        flixtracking.log(data);
    },    
    logMedia: function(data, medianame) {   
        logqa('logMedia');
        data.event_type = "media";
        data.event_detail = medianame;
        data.view_time = 0;
        flixtracking.log(data);
    },
    logPage: function(data, pagename) { 
        logqa('logPage');      
        data.event_type = "page";
        data.event_detail = pagename;
        data.view_time = 0;     
        flixtracking.log(data);
    },
    logVideoTi  },
    logVideoLoad: function(newvideo){
        if( typeof FlixjQ!='undefined' && typeof FlixjQ.fn.inPage!='undefined'){
            var data=FlixjQ.fn.inPage.data
            data.type='inpage'
        }
        else if (typeof FlixjQ!='undefined' && typeof FlixjQ.fn.minisite!='undefined'){
            var data=FlixjQ.fn.minisite.data
            data.type='minisite'
        }else if(typeof FlixjQ!='undefined' && typeof FlixjQ.fn.microsite!='undefined'){
            var data=FlixjQ.fn.microsite.data
            data.type='sis'
        }
        data.event_type = "mediaload";
        data.event_detail = newvideo;
        data.view_time = 0; 
        data.asset=0;
        flixtracking.log(data);  
    },
    parsePage: function (pagedata, target) {
        var 
          found = '', h = null, fallback = true, generic = {}, specific = {}, p,
          ignore = [], precedence, hit = false;

        if(!pagedata){
            pagedata = window.flixJsCallbacks.pageGeneric || {};
        }
        if(Object.keys(pagedata.pageSpecific).length=== 0 ){            
            pagedata.pageSpecific=window.flixJsCallbacks.pageSpecific
        }

        try {
            for( p in pagedata ) {
                if( pagedata.hasOwnProperty(p)) {
                    if( p == 'pageSpecific' ) {
                        specific = pagedata.pageSpecific;
                    }
                    else if ( ignore.indexOf( p ) === -1 ) {
                        generic[p] = pagedata[p];
                    }
                }
            }
            //set the precedence on availability in pageSpecific file. 
            precedence = ( !! specific[ target ] ) ? specific[ target ] : generic[ target ];
            if ( ! specific[ target ] ) { fallback = false; }

            //if pagespecific or generic is a function forget terms and attr arrays initially.             
            if( typeof precedence === 'function' ) {
                found = precedence();
                if ( ! found ) { fallback = true; }
            }

            if( ! found && !! precedence && !! precedence.terms && precedence.terms.length ) {
                for(var i = 0; i < precedence.terms.length; i++ ) {
                    h = document.querySelector ( precedence.terms[i] );
                    if ( h && !! h.textContent.trim() ) {
                        hit = true;
                        break;
                    }
                    else if ( h && h instanceof HTMLElement ) {
                        for ( var j = 0; j < precedence.attr.length; j++ ) {
                            if ( h.hasAttribute (precedence.attr[j] ) ) {
                                if(precedence.attr[j]!='href' || (precedence.attr[j]=='href' && h.getAttribute ( precedence.attr[j]).search('//')!=-1) ){
                                    found = h.getAttribute ( precedence.attr[j] );
                                
                                    hit = true;
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            //fallback to generic if nothing found and not already run. 
            if( fallback && ! hit ) {
                precedence = generic[ target ];
                if( typeof precedence === 'function' ) {
                    found = precedence();
                }
                
                if( ! found && !! precedence && !! precedence.terms && precedence.terms.length ) {
                    for(var i = 0; i < precedence.terms.length; i++ ) {
                        h = document.querySelector ( precedence.terms[i] );
                        if ( h && !! h.textContent.trim() ) {
                            hit = true;
                            break;
                        }
                        else if ( h && h instanceof HTMLElement ) {
                            for ( var j = 0; j < precedence.attr.length; j++ ) {
                                if ( h.hasAttribute (precedence.attr[j] ) ) {
                                    found = h.getAttribute ( precedence.attr[j] );
                                    hit = true;
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            //extract text content if we reach here.
            if ( ! found && h && h instanceof HTMLElement) {
                found = h.textContent.trim();
            }

            //enter only if we are a number with \. or , and its a price check
            if( target === 'price' && !! found ) {
                var 
                  value = flixtracking.parsePrice( found );
                if( value ) { found = value; }
            }

            return found.trim();
        }catch(e){ return ''; }
        
    },
    pageData:  function( data ) {

        if(!data.pagedata){
            data.pagedata = window.flixJsCallbacks.pageGeneric || {};
        }

        var pData = {}, s, df, i, p, get = '', skip;
        window.flixJsCallbacks.pageCapture = window.flixJsCallbacks.pageCapture || {};
        try{
            PAGEDATALOOP:
            for( p in data.pagedata ) {
                if( data.pagedata.hasOwnProperty(p)) {
                    switch( p ) {
                        case 'pageSpecific':
                            continue PAGEDATALOOP;
                            break;
                        case 'pn':
                            if( !! window.flixJsCallbacks.pageCapture[p] ) {
                                pData[p] = window.flixJsCallbacks.pageCapture[p];
                            }
                            else {
                                pData[p] = flixtracking.getCanonical( data.pagedata );
                                window.flixJsCallbacks.pageCapture[p] = pData[p];
                            }
                            break;
                        case 'br':
                        default:
                            if( !! window.flixJsCallbacks.pageCapture[p] ) {
                                pData[p] = window.flixJsCallbacks.pageCapture[p];
                            }
                            else {
                                pData[p] = flixtracking.parsePage ( data.pagedata, p );
                                window.flixJsCallbacks.pageCapture[p] = pData[p];
                            }
                            break;
                    }
                }
            }

            //overwrite price and add brand if being supplied by retailer
            df = ['mpn', 'ean', 'sku', 'price', 'brand'];
            skip = ['price', 'brand'];
            for( i=0; i< df.length; i++ ) {
                if( document.querySelector('script[data-flix-' + df[i] + ']') &&
                    !! document.querySelector('script[data-flix-' + df[i] + ']').getAttribute('data-flix-' + df[i]) ) {
                    
                    pData[ df[i] ] = document.querySelector('script[data-flix-' + df[i] + ']').getAttribute('data-flix-' + df[i]);
                    if( skip.indexOf(df[i]) < 0 ) {
                        window.flixJsCallbacks.pageCapture[ df[i] ] = pData[ df[i] ];
                    }
                    else {
                        if( !! data.pagedata && !! data.pagedata.pageSpecific && ! data.pagedata.pageSpecific.price ) {
                            if( df[i] === 'price' && flixtracking.parsePrice( pData[ df[i] ] ) ) {
                                pData[ df[i] ] = flixtracking.parsePrice( pData[ df[i] ] );
                                window.flixJsCallbacks.pageCapture[ df[i] ] = pData[ df[i] ];
                            }
                        }

                        if( !! data.pagedata && !! data.pagedata.pageSpecific && ! data.pagedata.pageSpecific.br ) {
                            //overwrite brand with standard naming
                            if( df[i] === 'brand' ) {
                                pData[ 'br' ] = pData[ df[i] ];
                                window.flixJsCallbacks.pageCapture['br'] = pData[ df[i] ];
                                delete pData['brand'];
                                delete window.flixJsCallbacks.pageCapture['brand'];
                            }
                        }
                    }
                }
            }

        } catch(ignore){}

        for (var key in pData) {
            get += "&"+key+ '=' + encodeURIComponent(pData[key]);
        }
        return get;
    },
    pageDataMinisite:  function( data ) {
        var data = { pagedata: _FFMatcher._FFpagedata }, pData = {}, s, df, i, p, get = '', p2, skip;
        
        window.flixJsCallbacks.pageCapture = window.flixJsCallbacks.pageCapture || {};
        
        
        try{
            PAGEDATALOOP:
            for( p in data.pagedata ) {
                if( data.pagedata.hasOwnProperty(p)) {
                    switch( p ) {
                        case 'pageSpecific':
                            continue PAGEDATALOOP;
                            break;
                        case 'pn':
                            if( !! window.flixJsCallbacks.pageCapture[p] ) {
                                pData[p] = window.flixJsCallbacks.pageCapture[p];
                            }
                            else {
                                pData[p] = flixtracking.getCanonical( data.pagedata );
                                window.flixJsCallbacks.pageCapture[p] = pData[p];
                            }
                            break;
                        case 'br':
                        default:
                            if( !! window.flixJsCallbacks.pageCapture[p] ) {
                                pData[p] = window.flixJsCallbacks.pageCapture[p];
                            }
                            else {
                                pData[p] = flixtracking.parsePage ( data.pagedata, p );
                                window.flixJsCallbacks.pageCapture[p] = pData[p];
                            }
                            break;
                    }
                }
            }

            //overwrite price and add brand if being supplied by retailer
            df = ['mpn', 'ean', 'sku', 'price', 'brand'];
            skip = ['price', 'brand'];
            for( i=0; i<df.length; i++ ) {
                if( document.querySelector('script[data-flix-' + df[i] + ']') &&
                    !! document.querySelector('script[data-flix-' + df[i] + ']').getAttribute('data-flix-' + df[i]) ) {
                    //differs here from inpage and noshow
                    pData[ df[i] ] = document.querySelector('script[data-flix-' + df[i] + ']').getAttribute('data-flix-' + df[i]);
                    if( skip.indexOf(df[i]) < 0 ) {
                        window.flixJsCallbacks.pageCapture[ df[i] ] = pData[ df[i] ];
                    }
                    else {
                        //decide if we should accept passed retailer values.
                        if( !! data.pagedata && !! data.pagedata.pageSpecific && ! data.pagedata.pageSpecific.price ) {
                            if( df[i] === 'price' && _FFUtils._FFparsePrice( pData[ df[i] ] ) ) {
                              pData[ df[i] ] = _FFUtils._FFparsePrice( pData[ df[i] ] );
                              window.flixJsCallbacks.pageCapture[ df[i] ] = pData[ df[i] ];
                            }
                        }
                        //decide if we should accept passed retailer values.
                        if( !! data.pagedata && !! data.pagedata.pageSpecific && ! data.pagedata.pageSpecific.br ) {
                            //overwrite brand with standard naming
                            if( df[i] === 'brand' ) {
                              pData[ 'br' ] = pData[ df[i] ];
                              window.flixJsCallbacks.pageCapture['br'] = pData[ df[i] ];
                              delete pData['brand'];
                              delete window.flixJsCallbacks.pageCapture['brand'];
                            }
                        }
                    }
                }
            }

            for( p2 in pData ){
                //decode URL characters
                if(p2==='pn' && pData.hasOwnProperty(p2) && /%/.test(pData[p2])) {
                    pData[p2]=decodeURIComponent(pData[p2])
                }

                if( pData.hasOwnProperty(p2) && ! /%/.test(pData[p2])) {
                    params[p2] = encodeURIComponent(pData[p2]);
                }
            }

        } catch(ignore){}
       

        for (var key in pData) {
            get += "&"+key+ '=' + encodeURIComponent(pData[key]);
        }
        return get;
    },
    getCanonical: function( data, esc ) {
        try {
            var
              ret, canonicalCheck, s;

            ret = flixtracking.parsePage ( data.pagedata, 'pn' );

            canonicalCheck = window.location.protocol + '//' + window.location.hostname + '/';

            if( ! ret || ret === canonicalCheck || ret.length + 1 <= canonicalCheck.length) {
                var url = (window.location != window.parent.location)
                ? document.referrer
                : top.document.URL;
                               
                if(typeof pnurl!='undefined' && pnurl.length>0)
                    url=pnurl
                
                ret = url; 
            }

            s = ret.indexOf('#');
            if( s != -1 ) { ret = ret.substring(0,s); }

            return arguments.length > 1 ? escape(ret) : ret;

        } catch(e) {}
    },
    parsePrice: function( price ) {
        try{
            if( !! price && ! price.trim().match(/[a-z][\.,\u20AC]+/gi)) {
                var 
                  value = price.trim().replace(/[^0-9\.,\u20AC]/gi, ''),
                  l = value.length, vl, v = '';
                if( !! window.flixJsCallbacks.priceParser ) {
                    value = window.flixJsCallbacks.priceParser.regEx( value );
                    l = value.length;
                }
                switch( true ) {
                    case (!! value.charAt( l - 3 ).match(/[\.,\u20AC]/)):
                        value = value.substr(0, (l - 3)) + '*' +  value.substr( (l - 2) );
                        break;              
                    case (!! value.charAt( l - 2 ).match(/[\.,\u20AC]/)):
                        value = value.substr(0, (l - 2)) + '*' +  value.substr( (l - 1) );
                        break;
                    default:
                        value = value.split('.');
                        vl = (value.length - 1);
                        if( value.length > 1 && value[ vl ].length > 2 ){ value[ vl ] = value[ vl ].substr(0,2);}
                        for( var i=0, vl = value.length; i< vl; i++) {
                            ( i == (vl - 2)) ? v += value[i] + '*' : v += value[i];
                        }
                        value = v;
                        break;
                }
                value = value.replace(/[\.,\u20AC]+/g, '');
                value = value.replace(/\*/, '.');
                return value;
            }
        } catch(ignore){}
        return false;
    },
    delegate: function(eventName, elementSelector, handler){
        //replaces .on click event
        document.addEventListener(eventName, function(e) {
            // loop parent nodes from the target to the delegation node
            for (var target = e.target; target && target != this; target = target.parentNode) {
                if (target && target.matches(elementSelector)) {
                    handler.call(target, e);
                    break;
                }
            }
        }, true);
    },
    getURL: function() {
        if(window.parent){
            var url = (window.location != window.parent.location)? document.referrer : document.location.href;
        }else{
            var url = document.location.href;
        }

        return url;
    },
    isMob  },
    getCookieVa  },
    setGvid: function () {
        logqa('setGvid');
        
        try {
           
            window.flixJsCallbacks = window.flixJsCallbacks || {};

            if(sessionStorage.getItem('flixgvid')){
                window.flixJsCallbacks.gvid=sessionStorage.getItem('flixgvid');
            }else{ 
                var ticks = 3;
                (function threeTicks() {                    
                    if( window.flixJsCallbacks && typeof window.flixJsCallbacks.gvid == 'undefined' && ticks ) {
                        setTime  },100)
                    }
                    else {
                        logqa('create gvid');
                        if ( document.getElementById('data-flix-t-script') &&  typeof window.flixJsCallbacks['gvid']!='undefined') return;
                        window['flixgvid'] = function(obj){
                            try{
                                delete window['flixgvid'];
                                window.flixJsCallbacks = window.flixJsCallbacks || {};
                                window.flixJsCallbacks['gvid'] = obj['gvid'];
                                sessionStorage.setItem('flixgvid',obj['gvid']);
                             }catch(e){}
                        };

                        var _fscript = document.createElement('script');
                        _fscript.setAttribute("type","text/javascript");
                        _fscript.setAttribute("src", "https://prod.flixgvid.flix360.io/");
                        _fscript.setAttribute("async", "true");
                        _fscript.id = "data-flix-t-script";
                        _fscript.onerror = function() { 
                            window.flixJsCallbacks = window.flixJsCallbacks || {};
                            window.flixJsCallbacks['gvid'] =''
                            sessionStorage.setItem('flixgvid','');
                            logqa('gvid not loaded')
                        }
                        document.getElementsByTagName('head')[0].appendChild(_fscript);

                        setTimeout(function(){
                            if(window.flixJsCallbacks && typeof window.flixJsCallbacks.gvid == 'undefined'){
                                window.flixJsCallbacks = window.flixJsCallbacks || {};
                                window.flixJsCallbacks['gvid'] =''
                                sessionStorage.setItem('flixgvid','');
                            }
                        }, 5000)
                    }
                })();
            } 
        } catch( e ) {}
    },
    setGuid: {
        Set: function(e) {
            var t;
            if (arguments.length == 1) {
                if (this.IsValid(arguments[0])) {
                    t = arguments[0];
                } else {
                    t = this.Empty();
                }
            }
            this.sessionid(t);
            
            return t;
        },
        Emp  },
        IsEmpty: function(e) {
            return e == this.Empty() || typeof e == "undefined" || e == null || e == "";
        },
        IsValid: function(e) {
            rGx = new RegExp("\\b(?:[A-F0-9]{8})(?:-[A-F0-9]{4}){3}-(?:[A-F0-9]{12})\\b");
            return rGx.exec(e) != null;
        },
        New: function() {
            if (arguments.length == 1 && this.IsValid(arguments[0])) {
                this.sessionid(arguments[0]);                
                value = arguments[0];
                return value;
            }
            var e = [], t;
            var n = new RegExp("[2345]");
            for (var r = 0; r < 8; r++) {
                t = ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
                if (n.exec(r.toString()) != null) {
                    if (r == 3) {
                        t = "6" + t.substr(1, 3);
                    }
                    e.push("-");
                }
                e.push(t.toUpperCase());
            }
            value = e.join("");

            this.sessionid=value;

            return value;
        },
        Value: function() {
            
            if (this.sessionid!='') {
                return this.sessionid;
            }
            var e = this.New();
            this.sessionid=e;
            return e;
        },
        sessionid:''
        
    },
    loadComp: function(e, t) {
        logqa('loadComp')
        if (-1 != e.search(".js") && 0 === FlixjQ("script[src='" + e + "']").length) {
            var c = document.createElement("script");
            c.type = "text/javascript", c.src = e, c.onload = t, document.head.appendChild(c);
        }
        if (-1 != e.search(".css") && 0 === FlixjQ("link[href='" + e + "']").length) {
            var n = document.createElement("link");
            n.rel = "stylesheet", n.href = e, n.type = "text/css", n.onload = t, document.head.appendChild(n);
        }
    },
    queue:[],
    trackingqueue: function (url) {
        logqa('trackingqueue')
        if(url)
            flixtracking.queue.push(url);

        if(window.flixJsCallbacks && typeof window.flixJsCallbacks.gvid!='undefined'){
            logqa('trackingqueue - gvid found')
            for (var i = 0; i < flixtracking.queue.length; i++) {
                
                var url=flixtracking.queue[i]=flixtracking.queue[i].replace('&gvid=&', '&gvid='+window.flixJsCallbacks.gvid+'&')
                
                logqa(url)
                var img = new Image();
                img.src = url;
            }
            //clear array
            flixtracking.queue = [];            
        }else{

            //if(flixtracking.queue.length==1){
                logqa('trackingqueue - queue more')
                setTime  },1000)
            //}
        }
    },
    getUrlParame  },
    cookieConsent: {
        provider:'',    
        initConsent: function(){
            //logqa('init initConsent')
            if(typeof Cookiebot!='undefined'){
                flixtracking.cookieConsent.cookieBot();
            }
            else if(typeof CookieInformation!='undefined' && typeof CookieInformation.getConsentGivenFor('cookie_cat_statistic')!='undefined' ){
                flixtracking.cookieConsent.cookieInfo();            
            }
            else if(typeof __cmp!='undefined' && typeof __cmp('getCMPData')!='undefined' && typeof __cmp('getCMPData').vendorConsents!='undefined'){
                flixtracking.cookieConsent.consentManager();            
            }
            else if(typeof window.evidon!='undefined' && typeof window.evidon.notice.consentIsGiven!='undefined'){
                flixtracking.cookieConsent.crownPeak();         
            }
            else if(typeof window.didomiState!='undefined' && typeof window.didomiState.didomiPurposesConsent!='undefined'){
                flixtracking.cookieConsent.didomi();            
            }
            else if(typeof _iub!='undefined' && typeof _iub.csActivationDone!='undefined'){
                flixtracking.cookieConsent.iubenda();           
            }
            else if(typeof OneTrust!='undefined'){
                flixtracking.cookieConsent.oneTrust();          
            }
            else if(typeof window.cookieconsent!='undefined'){
                flixtracking.cookieConsent.osano();         
            }
            else if(typeof OneTrust=='undefined' && typeof cact!='undefined'){
                flixtracking.cookieConsent.trustcommander();            
            }
            else if(typeof __cmp=='undefined' && typeof __tcfapi!='undefined'){
                flixtracking.cookieConsent.quantcast(); 
            }
            else{
                var dnt=flixtracking.cookieConsent.doNotTrack();
                if(flixtracking.trackingcc<=20 && dnt!=true){
                    setTime  },1000);
                }
            }
        },
        cookieInfo:function(){
            
            var statistic=CookieInformation.getConsentGivenFor('cookie_cat_statistic') || '';
            logqa('CookieInformation', statistic);
            flixtracking.cookieConsent.provider='CookieInfo'
            if(statistic===false){              
                flixtracking.cookieConsent.stopTracking();
            }else if(statistic===true){
                
            }

            if(document.querySelector('.consentstatus') && document.querySelector('.consentstatus').length>0)
                document.querySelector('.consentstatus').innerHTML=statistic;
            flixconsent=statistic;

        },
        consentManager:function(){
                
            var preferences=__cmp('consentStatus').consentExists;
            logqa('consentManager -'+preferences);  
            flixtracking.cookieConsent.provider='ConsentManager'
            var obj = __cmp('getCMPData').vendorConsents; 
           
            if(Object.keys(obj).length===0){                
                preferences=false;
                flixtracking.cookieConsent.stopTracking();
            }else{              
                preferences=true;
            }

            if(document.querySelector('.consentstatus') && document.querySelector('.consentstatus').length>0)
                document.querySelector('.consentstatus').innerHTML=preferences;
            flixconsent=preferences;
        },
        cookieBot:function(){
            var preferences=''
            if(typeof Cookiebot!='undefined' && typeof Cookiebot.consent!='undefined' && typeof Cookiebot.consent.preferences!='undefined' )
                preferences=Cookiebot.consent.preferences;  
            logqa('cookieBot -'+ preferences);   
            flixtracking.cookieConsent.provider='CookieBot'   
            if(preferences===false){                
                flixtracking.cookieConsent.stopTracking();
            }else if(preferences===true){

            }
            if(document.querySelector('.consentstatus') && document.querySelector('.consentstatus').length>0)
                document.querySelector('.consentstatus').innerHTML=preferences;
            flixconsent=preferences;
        },
        crownPeak:function(){
            var preferences=window.evidon.notice.consentIsGiven;    
            logqa('crownpeak -'+ preferences);
            flixtracking.cookieConsent.provider='CrownPeak'         
            if(preferences===false){                
                flixtracking.cookieConsent.stopTracking();
            }else if(preferences===true){
                /*var obj = window.evidon.notice._getConsentedCategories(); 

                if(Object.values(obj)[2]==true)
                    preferences=true; */
            }
            if(document.querySelector('.consentstatus') && document.querySelector('.consentstatus').length>0)
                document.querySelector('.consentstatus').innerHTML=preferences;
            flixconsent=preferences;
        },
        didomi:function(){
            var preferences=false;  
            logqa('didomi -');  
            flixtracking.cookieConsent.provider='Didomi'        
            if(window.didomiState.didomiPurposesConsentDenied.search('measure_content_performance')!=-1){               
                flixtracking.cookieConsent.stopTracking();
            }else if(preferences===true){
                
            }
            if(document.querySelector('.consentstatus') && document.querySelector('.consentstatus').length>0)
                document.querySelector('.consentstatus').innerHTML=preferences;
            flixconsent=preferences;
        },
        iubenda:function(){     
            var preferences=_iub.csActivationDone;          
            logqa('iubenda -'+ preferences);
            flixtracking.cookieConsent.provider='Iubenda'   

            if(typeof _iub.cs.consent.purposes!='undefined' && typeof _iub.cs.consent.purposes[4]!='undefined' && _iub.cs.consent.purposes[4]===false){
                flixtracking.cookieConsent.stopTracking();
            }       
            if(document.querySelector('.consentstatus') && document.querySelector('.consentstatus').length>0)
                document.querySelector('.consentstatus').innerHTML=preferences;
            flixconsent=preferences;
        },
        oneTrust:function(){        
            var preferences=''
            if(typeof OneTrust!='undefined' && typeof OneTrust.IsAlertBoxClosed!='undefined')
                preferences=OneTrust.IsAlertBoxClosed();            
            logqa('oneTrust -'+ preferences);
            flixtracking.cookieConsent.provider='OneTrust'  

            if(preferences===false){
                flixtracking.cookieConsent.stopTracking();
            }     

            //just for test consent page  
            if(document.querySelector('.consentstatus') && document.querySelector('.consentstatus').length>0)
                document.querySelector('.consentstatus').innerHTML=preferences;
            
            if(typeof Optanon!='undefined' && Optanon.GetDomainData() && Optanon.GetDomainData().ConsentIntegrationData){
                var cv=Optanon.GetDomainData().ConsentIntegrationData.consentPayload.purposes
                var cv2=JSON.stringify(cv);
                var onecv='';
                var third='tp_false|';
                var func='ft_false|';
                var target='tt_false';

                if(cv[2] && cv[2].TransactionType && cv[2].TransactionType=='CONFIRMED'){
                    third='tp_true|';
                }
                if(cv[3] && cv[3].TransactionType && cv[3].TransactionType=='CONFIRMED'){
                    func='ft_true|';
                }                
                if(cv[4] && cv[4].TransactionType && cv[4].TransactionType=='CONFIRMED'){
                    target='tt_true';
                    flixtracking.cookieConsent.stopTracking();
                    preferences=true;
                }

                onecv=third+func+target;                
                flixtracking.cookieConsent.data=onecv;
            }
            flixconsent=preferences;
        },
        osano:function(){
            var preferences=false;  
            logqa('osano -');
            flixtracking.cookieConsent.provider='Osano' 
            var name='cookieconsent_status';
            var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
            if (match) {
                logqa('osano', match[2]);
                //deny
                if(match[2]=='allow'){                  
                    preferences=true;
                    //logqa(preferences)
                }else{
                    
                }
            };
                    
            if(document.querySelector('.consentstatus') && document.querySelector('.consentstatus').length>0)
                document.querySelector('.consentstatus').innerHTML=preferences;
            flixconsent=preferences;
        },
        quantcast:function(){   
            var preferences=false;  
            logqa('quantcast -');
            flixtracking.cookieConsent.provider='Quantcast' 
            __tcfapi('getTCData', 2, function(tcData, success) {                
                
                if(typeof tcData!='undefined' && tcData!== null && (tcData.eventStatus=='useractioncomplete' || tcData.eventStatus=='tcloaded') ){
                    if(tcData.eventStatus=='useractioncomplete' || tcData.eventStatus=='tcloaded'){
                        var obj =tcData.purpose.consents; 
                   
                        if(Object.keys(obj).length===0){
                            //consent denied                        
                            preferences=false;
                            flixtracking.cookieConsent.stopTracking();
                        }else{  
                            preferences=true;           
                            //consent given
                        }
                    }
                }
                
                if(document.querySelector('.consentstatus') && document.querySelector('.consentstatus').length>0)
                    document.querySelector('.consentstatus').innerHTML=preferences;
                flixconsent=preferences;                
            });
        },
        trustcommander:function(){      
            var preferences=false;          
            logqa('trustcommander -');
            flixtracking.cookieConsent.provider='Trustcommander' 
            cact('consent.get', function (result) {
                if (result.consent.status === 'unset') {
                    // Consent was not yet provided.;
                    
                } else {
                    if(result.consent.categories[1].status=='on')
                        preferences=true;
                    else
                        flixtracking.cookieConsent.stopTracking();
                }
            })
            if(document.querySelector('.consentstatus') && document.querySelector('.consentstatus').length>0)
                document.querySelector('.consentstatus').innerHTML=preferences;
            flixconsent=preferences;
        },
        doNotTrack: function(){
            
            var preferences = navigator.doNotTrack == "yes" || navigator.doNotTrack == "1" || navigator.msDoNotTrack == "1" || window.doNotTrack === "1";
            
            if(preferences===true){
                flixconsent=false;  
                flixtracking.cookieConsent.stopTracking();   
                flixtracking.cookieConsent.provider='DNT'; 
                flixtracking.cookieConsent.data=flixconsent;      
            } else{
                flixtracking.cookieConsent.provider='';
                flixtracking.cookieConsent.data='';
                flixconsent=''    
            }

            if(document.querySelector('.consentstatus') && document.querySelector('.consentstatus').length>0)
                    document.querySelector('.consentstatus').innerHTML=preferences;
            
            return preferences;    
        },
        stopTracki  }
    },
    checkNoTracking: function () {
        logqa('checkNoTracking');
        //deactivated because we have the no tracking code on the 
        try{
            
            /*if (typeof _FFUtils !="undefined" && typeof _FFUtils._FFsendLog !="undefined" && _FFUtils._FFsendLog.length==0){
                flixtracking.noTracking=true;
            }
            if (typeof FlixjQ !="undefined" && typeof FlixjQ.fn.inPage !="undefined" && FlixjQ.fn.inPage.log.length==0) {
                flixtracking.noTracking=true;
            }
            if (window.flixJsCallbacks && window.flixJsCallbacks.$ && window.flixJsCallbacks.$.fn.noShow.log.length==0) {
                flixtracking.noTracking=true;
            }
            if (typeof FlixjQ !="undefined" && typeof FlixjQ.fn.minisite !="undefined" && FlixjQ.fn.minisite.log.length==0) {
                flixtracking.noTracking=true;
            }
            if (typeof FlixjQ !="undefined" && typeof FlixjQ.fn.attachFlix !="undefined" && FlixjQ.fn.attachFlix.log.length==0) {
                flixtracking.noTracking=true;
            }
            if (typeof FlixjQ !="undefined" && typeof FlixjQ.fn.hotspot !="undefined" && FlixjQ.fn.hotspot.log.length==0){
                FlixjQ.fn.hotspot = function(){}; FlixjQ.fn.hotspot.log = function(){};
                flixtracking.noTracking=true;
            }            
            if (window.flixJsCallbacks && window.flixJsCallbacks.$ && typeof window.flixJsCallbacks.$.fn.noShow !="undefined" && window.flixJsCallbacks.$.fn.noShow.log.length==0) {
                flixtracking.noTracking=true
            }*/

            if(flixtracking.noTracking==true)
                logqa('No tracking retailer');
        }catch(e){}

            
    },

    globalTracking: function (opts) {
        logqa('globalTracking')
        if(typeof FlixjQ=='undefined'){
            setTime  }, 500)
            return false
        }

        logqa('globalTracking --passed')
        if(typeof FlixjQ!='undefined' && typeof FlixjQ.fn.on=='undefined')
            FlixjQ.fn.on=FlixjQ.fn.live;

        if (flixtracking.globalTrackingInit === false) {
            
            if(typeof FlixjQ.fn.logging=='undefined'){
                FlixjQ.fn.loggin  }
            }

            if (typeof FlixjQ!='undefined' && typeof FlixjQ.fn.inPage!='undefined' && typeof FlixjQ.fn.inPage.data.product !== undefined) {
                opts = FlixjQ.fn.inPage.data;
            } else if (typeof FlixjQ!='undefined' && typeof FlixjQ.fn.minisite!='undefined' && typeof FlixjQ.fn.minisite.data.product !== undefined) {
                opts = FlixjQ.fn.minisite.data;
            } else if(typeof opts!='object'){
                return false;
            }

            setTimeout(function(){
                //3p log init
                if (FlixjQ('.flix-3rdwidget') && FlixjQ('.flix-3rdwidget').length > 0) {
                    flixtracking.products.thirdpartywidget.init();
                }

                var comparisonTable = FlixjQ('.flix-compare');

                /* Load comparison table JS and CSS */
                var abtablecheck=false                
                if(window.flixJsCallbacks['ab_'+opts.distributor] && window.flixJsCallbacks['ab_'+opts.distributor].inpage && window.flixJsCallbacks['ab_'+opts.distributor].inpage.inpages && window.flixJsCallbacks['ab_'+opts.distributor].inpage.inpages.disable_comparison_table &&  window.flixJsCallbacks['ab_'+opts.distributor].inpage.inpages.disable_comparison_table==true){
                    //abtablecheck=true;
                }


                if(!window.comparecheck)
                    window.comparecheck=false;
                var ctprodlength=FlixjQ('.flix-comp-product').length;
                if (comparisonTable && comparisonTable.length > 0) {
                    if( window.comparecheck==false){ 
                        window.comparecheck=true;
                        flixtracking.loadComp(flixtracking.site_url+'static/comparison/standard/js/append.js');
                        flixtracking.loadComp(flixtracking.site_url+'static/comparison/standard/css/main.css');

                        if (ctprodlength>1 || ctprodlength===0){
                            flixtracking.products.comparison.init();
                        }

                    }
                }

                /*comparison V2 */
                var comparisonTable = FlixjQ('.flix-comparev2');
                var ab_res_id = 'ab_'+opts.distributor;

                if (comparisonTable && comparisonTable.length > 0 && abtablecheck==false) {
                    if( window.comparecheck==false){
                        window.comparecheck=true;
                        flixtracking.products.comparisonv2.init();
                    }
                }else if( window.flixJsCallbacks[ab_res_id] && window.flixJsCallbacks[ab_res_id].inpage
                        && window.flixJsCallbacks[ab_res_id].ab_id =='707'
                        && typeof window.flixJsCallbacks[ab_res_id].inpage.inpages!='undefined'
                        &&
                        (
                            (typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_comparison_table !='undefined' && typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_comparison_table =="boolean")
                            ||
                            (typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_inpage !='undefined' &&   typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.disable_inpage =="boolean")
                            ||
                            (typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.change_template !='undefined' &&   typeof window.flixJsCallbacks[ab_res_id].inpage.inpages.change_template =="boolean")


                        )
                    ){
                    window.addEventListener('scroll', flixtracking.products.comparisonv2.checkViewport);
                }

                /* Reviews tracking */

                flixtracking.products.reviewsContainer = FlixjQ('.inpage_selector_reviews');
                if (flixtracking.products.reviewsContainer && flixtracking.products.reviewsContainer.length > 0) {
                    flixtracking.products.reviews.init();
                }

                /*Initialization page position tracking*/

                if(FlixjQ.fn.inPage=='undefined' || (FlixjQ.fn.inPage && FlixjQ.fn.inPage.hasOwn( FlixjQ.fn.inPage.data.ab_data ))) {
                    if(FlixjQ("#inpage_container").length>0){
                        flixtracking.products.pagetracking.init();
                    }
                }else{
                    logqa('No time tracking');
                    if(typeof FlixjQ.fn.inPage!='undefined' && typeof FlixjQ.fn.inPage.logTime!='undefined'){
                       FlixjQ.fn.inPage.logTime= function(){}
                    }
                    if(typeof FlixjQ.fn.minisite!='undefined' && typeof FlixjQ.fn.minisite.logTime!='undefined'){
                       FlixjQ.fn.minisite.logTime= function(){}
                    }
                    if(typeof FlixjQ.fn.compMinisite!='undefined' && typeof FlixjQ.fn.compMinisite.logTime!='undefined'){
                       FlixjQ.fn.compMinisite.logTime= function(){}
                    }
                    if(typeof instance!='undefined' && typeof instance.logTime!='undefined'){
                       instance.logTi){}
                    }

                }



                //load 3dft JS and CSS */
                if(!window.threedcheck)
                    window.threedcheck=false


                if (FlixjQ('#flix-3dfwsrc').length && window.threedcheck==false) {
                    logqa('Load 3dtw');                
                    window.threedcheck=true;
                    flixtracking.loadComp(flixtracking.site_url + 'static/3dfw/3dfw.js');
                    
                }

                if(FlixjQ('[skey]').length>0){
                    flixtracking.products.logotracking.init();
                }

                if(FlixjQ('#flix-ugc-galfeatures').length>0){
                    flixtracking.products.ugctracking.init();
                }

                //default button tracking

                flixtracking.products.buttontracking.init();

                var compcc=0
                function checkCompButton(){
                    if(FlixjQ('#inpage-iframe-modal a') && FlixjQ('#inpage-iframe-modal a').length && FlixjQ('#inpage-iframe-modal a').attr('onclick').search('scrollToComplimentary')!=-1){
                        var s=FlixjQ('#inpage-iframe-modal a').attr('onclick')
                        var id= s.split('(\"#link')[1].split('\")')[0]
                        if(FlixjQ('[id^=flixinpage_'+id+']').length && FlixjQ('[id^=flixinpage_'+id+']').html().length==0){
                            FlixjQ('#inpage-iframe-modal a').hide();
                            setTimeout(function(){
                                if(compcc<10)
                                    checkCompButton()
                                compcc++;
                            }, 2000)
                        }else{
                            FlixjQ('#inpage-iframe-modal a').show()
                        }

                    }
                }
                //hide comp button if abtest hides complementary inpages
                if(FlixjQ.fn.inPage && FlixjQ.fn.inPage.hasOwn( FlixjQ.fn.inPage.data.ab_data ))
                    checkCompButton();

            }, 500);

            

            flixtracking.globalTrackingInit = true;
        }
    },
    retailercheck:{
        //cnet
        //rcn=retail competitor name
        //rcc=retail competitor content
        //1:CNET, 2:24TTL, 3:Loadbee, 4:Content Driver, 5:Syndigo
        check:false,        
        init: function(data){ 
            logqa('retailercheck');
            
                flixtracking.retailercheck.check=true;
                setTime  }, 1000);
                flixtracking.retailercheck.cn='';
                flixtracking.retailercheck.cc='';
            
                if((document.getElementById('ccs-inline-content') && document.getElementById('ccs-inline-content')!=null) || (document.getElementById('ccs-logos') && document.getElementById('ccs-logos')!=null && document.getElementById('ccs-logos').childNodes.length>0) ){
                    if(flixtracking.retailercheck.cn!=''){flixtracking.retailercheck.cn+='|'; flixtracking.retailercheck.cc+='|'}
                    flixtracking.retailercheck.cnet(data);
                }                
                if(document.querySelectorAll('[class^="__ttl__widget"]').length){
                    if(flixtracking.retailercheck.cn!=''){flixtracking.retailercheck.cn+='|'; flixtracking.retailercheck.cc+='|'}
                    flixtracking.retailercheck.twentyfourttl(data);
                }
                if(document.querySelectorAll('.loadbeeTabContent').length){
                    if(flixtracking.retailercheck.cn!=''){flixtracking.retailercheck.cn+='|'; flixtracking.retailercheck.cc+='|'}
                    flixtracking.retailercheck.loadbee(data);
                }            
                if((document.getElementById('syndi_powerpage') && document.getElementById('syndi_powerpage')!=null ) || (document.getElementById('syndigo-hero-image') && document.getElementById('syndigo-hero-image')!=null && document.getElementById('syndigo-hero-image').childNodes.length>0) ){
                    if(flixtracking.retailercheck.cn!=''){flixtracking.retailercheck.cn+='|'; flixtracking.retailercheck.cc+='|'}
                    flixtracking.retailercheck.syndigo(data);  
                }            
                if(document.querySelectorAll('*[data-contentdriver]').length){
                    if(flixtracking.retailercheck.cn!=''){flixtracking.retailercheck.cn+='|'; flixtracking.retailercheck.cc+='|'}
                    flixtracking.retailercheck.contentdriver(data);
                }
                if(document.querySelectorAll('script[src*="1worldsync"]') && document.querySelectorAll('script[src*="1worldsync"]').length){
                    if(flixtracking.retailercheck.cn!=''){flixtracking.retailercheck.cn+='|'; flixtracking.retailercheck.cc+='|'}
                    flixtracking.retailercheck.oneworld(data);
                }
            
            
        },
        cnet: function(data){            
            flixtracking.retailercheck.cn+='cnet';
            try{
                if((document.querySelectorAll('.ccs-cc-inline') && document.querySelectorAll('.ccs-cc-inline').length && document.querySelectorAll('.ccs-cc-inline')[0].innerText.length>100) || document.getElementById('ccs-logos').innerHTML.length>10 ){
                    flixtracking.retailercheck.cc+='true';                    
                }else{                
                    flixtracking.retailercheck.cc+='false';                    
                } 
            }catch(e){ 
                flixtracking.retailercheck.cc+='false'; 
            }           
        },
        twentyfourttl: function(data){
            flixtracking.retailercheck.cn+='24ttl';
            try{
                if(document.querySelectorAll('[class^="__ttl__widget"]') && document.querySelectorAll('[class^="__ttl__widget"]').length && document.querySelectorAll('[class^="__ttl__widget"]')[0].innerText.length>100){                
                    flixtracking.retailercheck.cc+='true';                    
                }else{
                    flixtracking.retailercheck.cc+='false';                    
                }
            }catch(e){ 
                flixtracking.retailercheck.cc+='false'; 
            }
        },
        loadbee: function(data){
            flixtracking.retailercheck.cn+='loadbee';
            try{
                if(document.querySelectorAll('[class^="loadbeeTabContent"]').childNodes && document.querySelectorAll('[class^="__ttl__widget"]').childNodes.length>10){                
                    flixtracking.retailercheck.cc+='true';                    
                }else{
                    flixtracking.retailercheck.cc+='false';                    
                }
            }catch(e){ 
                flixtracking.retailercheck.cc+='false'; 
            }
        },
        syndigo: function(data){
            flixtracking.retailercheck.cn+='syndigo';
            try{
                if((document.getElementById('syndi_powerpage').childNodes.length>0 && document.getElementById('syndi_powerpage').innerHTML.length>10) || (typeof document.querySelector('syndigo-mosaic') !='undefined' && typeof document.querySelector('syndigo-mosaic').shadowRoot !='undefined'  && typeof document.querySelector('syndigo-mosaic').shadowRoot.querySelector('syndigo-mosaic-ribbon') !='undefined' && document.querySelector('syndigo-mosaic').shadowRoot.querySelector('syndigo-mosaic-ribbon') !=null  && typeof document.querySelector('syndigo-mosaic').shadowRoot.querySelector('syndigo-mosaic-ribbon').shadowRoot !='undefined'  && typeof document.querySelector('syndigo-mosaic').shadowRoot.querySelector('syndigo-mosaic-ribbon').shadowRoot.querySelector('.syndigo-mosaic-content') !='undefined' && document.querySelector('syndigo-mosaic').shadowRoot.querySelector('syndigo-mosaic-ribbon').shadowRoot.querySelector('.syndigo-mosaic-content')!=null )){
                    flixtracking.retailercheck.cc+='true';                    
                }else{               
                    flixtracking.retailercheck.cc+='false';                    
                }
            }catch(e){ 
                flixtracking.retailercheck.cc+='false'; 
            }
        },
        contentdriver: function(data){
            flixtracking.retailercheck.cn+='contentdriver';
            try{
                if(document.querySelectorAll('*[data-contentdriver]') && document.querySelectorAll('*[data-contentdriver]').length && document.querySelectorAll('*[data-contentdriver]')[0].innerText.length>100){ 
                    flixtracking.retailercheck.cc+='true';                    
                }else{               
                    flixtracking.retailercheck.cc+='false';                    
                }
            }catch(e){ 
                flixtracking.retailercheck.cc+='false'; 
            }
        },
        oneworld: function(data){
            flixtracking.retailercheck.cn+='oneworld';
            try{
                if(document.querySelectorAll('img[src*="1worldsync"]') && document.querySelectorAll('img[src*="1worldsync"]').length ){ 
                    flixtracking.retailercheck.cc+='true';                    
                }else{               
                    flixtracking.retailercheck.cc+='false';                    
                }
            }catch(e){ 
                flixtracking.retailercheck.cc+='false'; 
            }
        }        
    }


}
flixtracking.init();
}
/*tracking.js ends*/