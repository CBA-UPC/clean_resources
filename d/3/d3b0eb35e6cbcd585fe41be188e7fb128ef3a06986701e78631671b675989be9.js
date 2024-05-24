<div style="position: absolute; left: -10000px; top: 0px; overflow: hidden; width:1px; height: 1px;"><script src="//data.adop.cc/collect.php?log=com_imp&dt=20240212173238&aid=449d34af-27d2-4cc0-b6fa-6c85fcf47b3f&zid=fb62ba57-cfc7-4ca0-95cd-8d959111acf7&fp=0&acid=ES-240212173238-3e114d0853404161&r=u1dP" style="width:1px; height:1px;"></script></div><div style="text-align:center; width:728px; height:90px;">
        <!-- #ADOP Area Mfresh  BEGIN CRITEO CDB -->
        <script async="async" type="text/javascript" src="https://static.criteo.net/js/ld/publishertag.js"></script>
        <div id="criteo_slot_1626810" style="width:728px; height:90px;"></div>
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
                var criteoZoneId = 1626810;
                var criteoSlotId = "criteo_slot_1626810";
                var passback = function () {
                    var width = "728px", height = "90px";var div = document.getElementById(criteoSlotId);if (div) { var ifr = document.createElement("iframe");ifr.setAttribute("id", criteoSlotId+"_iframe"), ifr.setAttribute("frameborder","0"), ifr.setAttribute("allowtransparency","true"), ifr.setAttribute("hspace","0"), ifr.setAttribute("marginwidth","0"), ifr.setAttribute("marginheight","0"), ifr.setAttribute("scrolling","no"), ifr.setAttribute("vspace","0"), ifr.setAttribute("width", width), ifr.setAttribute("height", height); div.appendChild(ifr);var htmlcode = "<html><head></head><body><script src='//compass.adop.cc/assets/js/adop/adop.js?v=14'></scr"+"ipt><ins class='adsbyadop' _adop_zon = 'e4d80ba8-7c1b-42a0-9c9b-70a5a23fca70' _adop_type = 'js' style='display:inline-block;width:728px;height:90px;' _page_url=''></ins></body></html>";var ifrd = ifr.contentWindow.document; ifrd.open(); ifrd.write(htmlcode); ifrd.close(); }

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
                            adopad = document.getElementById('criteo_slot_1626810');
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
                if ( criteoTime >= in             if (isViewable){
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
    </div>           console.log(\"draw criteo AD\");     ");
document.writeln("                         if(document.getElementById(criteoSlotId+\"_iframe\") != null){     ");
document.writeln("                             document.getElementById(criteoSlotId+\"_iframe\").remove();     ");
document.writeln("                             console.log(\"criteo AD refreshed!\");     ");
document.writeln("                         }else{     ");
document.writeln("                         }     ");
document.writeln("                     } else {     ");
document.writeln("                         console.log(\"no criteo ad\");     ");
document.writeln("                         if (!isRefreshed){     ");
document.writeln("                             passback();     ");
document.writeln("                         }else{     ");
document.writeln("                         }     ");
document.writeln("                     }     ");
document.writeln("                 };     ");
document.writeln("                 Criteo.events.push(function () {     ");
document.writeln("                     Criteo.RequestBids(CriteoAdUnits, processCdbBid, 2000);     ");
document.writeln("                 });     ");
document.writeln("             };     ");
document.writeln("             var criteoTimeTracker = function(){     ");
document.writeln("                 // console.log('criteoTime ',criteoTime);     ");
document.writeln("                 if ( criteoTime >= intervelTime){     ");
document.writeln("                     if (isCheckViewablity){     ");
document.writeln("                         if (isViewable){     ");
document.writeln("                             criteoTime = 0;     ");
document.writeln("                             criteoRefresh();     ");
document.writeln("                         }     ");
document.writeln("                     }else{     ");
document.writeln("                         criteoTime = 0;     ");
document.writeln("                         criteoRefresh();     ");
document.writeln("                     }     ");
document.writeln("                 }     ");
document.writeln("                 criteoTime++;     ");
document.writeln("             }     ");
document.writeln("             var criteoRefresh = function() {     ");
document.writeln("                 if (count >= countLimit){     ");
document.writeln("                     return;     ");
document.writeln("                 }     ");
document.writeln("                 // console.log('criteoRefresh ');     ");
document.writeln("                 isRefreshed = true;     ");
document.writeln("                 Criteo.events.push(function() { Criteo.RequestBids(CriteoAdUnits, processCdbBid, 2000);});     ");
document.writeln("                 count++;     ");
document.writeln("             }     ");
document.writeln("      ");
document.writeln("             startCriteoAd();     ");
document.writeln("         <\/script>     ");
document.writeln("      ");
document.writeln("         <!-- END CRITEO CDB -->     ");
document.writeln("     </div><script> var adop_zid1 = \"044e000f-238d-4852-8a26-6e0d9f86e3f9\";<\/script><script src=\"https://compasscdn.adop.cc/js/adopPBFnc.min.js\"><\/script>     ");
