<script src='https://cdn.jsdelivr.net/gh/adop-devel/jsdelivr@main/adop_sdk_p4.1.0.min.js'></script><div style='position: absolute; left: -10000px; top: 0px; overflow: hidden; width:1px; height: 1px;'>
<script>
var adop_dmp = function(){
    adop_set({ad_date: '20240119023721',acid:'ES-240119023721-3925c088fbe242f2',ctry:'ES',ip:'147.83.130.27',url:'',net:'Criteo_PM',ad_direction:'v',ad_full_loc:'',area_idx:'d78da13e-df74-42e0-a787-ff9a1a4b5a98',aid:'4a19e01e-67df-4470-8d1c-6fcc1556ece7',log_type:'basic',sc_ref:'',sc_title:'',tp:'iframe',fp:'0'});
};
adop_dmp();
</script></div>
<div style="text-align:center; width:250px; height:250px;">
        <!-- #ADOP Area Mfresh  BEGIN CRITEO CDB -->
        <script async="async" type="text/javascript" src="https://static.criteo.net/js/ld/publishertag.js"></script>
        <div id="criteo_slot_1204099" style="width:250px; height:250px;"></div>
        <script>
            var processCdbBid;
            var criteoTime=0;
            var intervelTime = 20;
            var isRefreshed = false;
            var CriteoAdUnits;
            var count = 0;
            var countLimit = 5;
            var isViewable = false;
            var isCheckViewablity = true;
            var adopad = '';
            var isIntersectionObserverSet = false;
            var startCriteoAd = function () {
                /* CONFIG CRITEO ZONE ID, SLOT DIV ID, PASSBACK */
                var criteoZoneId = 1204099;
                var criteoSlotId = "criteo_slot_1204099";
                var passback = function () {
                    var width = "250px", height = "250px";var div = document.getElementById(criteoSlotId);if (div) { var ifr = document.createElement("iframe");ifr.setAttribute("id", criteoSlotId+"_iframe"), ifr.setAttribute("frameborder","0"), ifr.setAttribute("allowtransparency","true"), ifr.setAttribute("hspace","0"), ifr.setAttribute("marginwidth","0"), ifr.setAttribute("marginheight","0"), ifr.setAttribute("scrolling","no"), ifr.setAttribute("vspace","0"), ifr.setAttribute("width", width), ifr.setAttribute("height", height); div.appendChild(ifr);var htmlcode = "<html><head></head><body><script src='//compass.adop.cc/assets/js/adop/adop.js?v=14'></scr"+"ipt><ins class='adsbyadop' _adop_zon = '6b1086e7-c2da-4825-bb4c-feda9fcb6749' _adop_type = 'js' style='display:inline-block;width:250px;height:250px;' _page_url=''></ins></body></html>";var ifrd = ifr.contentWindow.document; ifrd.open(); ifrd.write(htmlcode); ifrd.close(); }

                }
                CriteoAdUnits = {"placements": [{"slotid": criteoSlotId, "zoneid": criteoZoneId}]};
                window.Criteo = window.Criteo || {};
                window.Criteo.events = window.Criteo.events || [];
                processCdbBid = function () {
                    var bids = Criteo.GetBidsForAdUnit(criteoSlotId);
                    if (bids.length > 0) {
                        if (!isIntersectionObserverSet){
                            isIntersectionObserverSet = true;
                            timer = setInterval(criteoTimeTracker, 1000);
                            adopad = document.getElementById('criteo_slot_1204099');
                            const videoObserverOptions = {
                                threshold: 0.1
                            }
                            const videoObserver = new IntersectionObserver((entries, observer) => {
                                entries.forEach(entry => {
                                    console.log('isIntersecting :',entry.isIntersecting);
                                    isViewable = entry.isIntersecting;
                                })
                            }, videoObserverOptions);
                            videoObserver.observe(adopad);
                        }
                        var bidFound = bids[0];
                        Criteo.RenderAd({bidId: bidFound.id, containerId: bidFound.impressionId});
                        console.log("draw criteo AD");
                        if(document.getElementById(criteoSlotId+"_iframe") != null){
                            document.getElementById(criteoSlotId+"_iframe").remove();
                            console.log("criteo AD refreshed!");
                        }else{
                        }
                    } else {
                        console.log("no criteo ad");
                        if (!isRefreshed){
                            passback();
                        }else{
                        }
                    }
                };
                Criteo.events.push(function () {
                    Criteo.RequestBids(CriteoAdUnits, processCdbBid, 2000);
                });
            };
            var criteoTimeTracker = function(){
                // console.log('criteoTime ',criteoTime);
                if ( criteoTime >= intervelTime){
                    if (isCheckViewablity){
                        if (isViewable){
                            criteoTime = 0;
                            criteoRefresh();
                        }
                    }else{
                        criteoTime = 0;
                        criteoRefresh();
                    }
                }
                criteoTime++;
            }
            var criteoRefresh = function() {
                if (count >= countLimit){
                    return;
                }
                // console.log('criteoRefresh ');
                isRefreshed = true;
                Criteo.events.push(function() { Criteo.RequestBids(CriteoAdUnits, processCdbBid, 2000);});
                count++;
            }

            startCriteoAd();
        </script>

        <!-- END CRITEO CDB -->
    </div><script> var adop_zid1 = "d78da13e-df74-42e0-a787-ff9a1a4b5a98";</script><script src="https://compasscdn.adop.cc/js/adopPBFnc.min.js"></script>