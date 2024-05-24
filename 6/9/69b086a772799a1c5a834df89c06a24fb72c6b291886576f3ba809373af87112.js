<div style="position: absolute; left: -10000px; top: 0px; overflow: hidden; width:1px; height: 1px;"><script src="//data.adop.cc/collect.php?log=com_imp&dt=20240212173254&aid=80950e88-254f-4148-9d4b-75f5bf60ad9d&zid=6c537327-1f77-4f95-9737-eb6286c76c9e&fp=0&acid=ES-240212173254-520befb0862749f8&r=lTya" style="width:1px; height:1px;"></script></div><div style="text-align:center;">
      <!-- #ADOP Area Mfresh  BEGIN CRITEO CDB -->
        <script async="async" type="text/javascript" src="https://static.criteo.net/js/ld/publishertag.js"></script>
        <div id="criteo_slot_1626806"></div>
        <script>
            var processCdbBid;
            var criteoTime=0;
            var intervelTime = 30;
            var isRefreshed = false;
            var CriteoAdUnits;
            var count = 0;
            var countLimit = 5;
            var startCriteoAd = function () {
                /* CONFIG CRITEO ZONE ID, SLOT DIV ID, PASSBACK */
                var criteoZoneId = 1626806;
                var criteoSlotId = "criteo_slot_1626806";
                var passback = function () {
                    var width = "850px", height = "100px";var div = document.getElementById(criteoSlotId);if (div) { var ifr = document.createElement("iframe");ifr.setAttribute("id", criteoSlotId+"_iframe"), ifr.setAttribute("frameborder","0"), ifr.setAttribute("allowtransparency","true"), ifr.setAttribute("hspace","0"), ifr.setAttribute("marginwidth","0"), ifr.setAttribute("marginheight","0"), ifr.setAttribute("scrolling","no"), ifr.setAttribute("vspace","0"), ifr.setAttribute("width", width), ifr.setAttribute("height", height); div.appendChild(ifr);var htmlcode = "<html><head></head><body><script src='//compass.adop.cc/assets/js/adop/adop.js?v=14'></scr"+"ipt><ins class='adsbyadop' _adop_zon = 'c3c8d91a-4b00-499e-8be5-417c85712902' _adop_type = 'js' style='display:inline-block;width:850px;height:100px;' _page_url=''></ins></body></html>";var ifrd = ifr.contentWindow.document; ifrd.open(); ifrd.write(htmlcode); ifrd.close(); }
                   
                }
                CriteoAdUnits = {"placements": [{"slotid": criteoSlotId, "zoneid": criteoZoneId}]};
                window.Criteo = window.Criteo || {};
                window.Criteo.events = window.Criteo.events || [];
                processCdbBid = function () {
                    var bids = Criteo.GetBidsForAdUnit(criteoSlotId);
                    if (bids.length > 0) {
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
      
                    setInterval(criteoTimeTracker, 1000);
                });
            };
            var criteoTimeTracker = function(){
                if ( criteoTime >= intervelTime){
                    criteoTime = 0;
                    criteoRefresh();
                }
                criteoTime++;
            }
            var criteoRefresh = function() {
                if (count >= countLimit){
                    return;
                }
                isRefreshed = true;
                Criteo.events.push(function() { Criteo.RequestBids(CriteoAdUnits, processCdbBid, 2000);});
                count++;
            }
            startCriteoAd();
        </script>

        <!-- END CRITEO CDB -->
      </div>
