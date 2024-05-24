conAdColor = 'color: blue;';

path=location.pathname;
arrpath=path.split("/");
var strPathLevel1 = '';
if (typeof arrpath[1] !== typeof undefined) { 
    strPathLevel1 = arrpath[1];
}

jQuery(function() {
    
    if (typeof siteAds === typeof undefined) { siteAds = 'gglam'; }    
    sampleAds = false;
    if (getCookie("ads4"+siteAds)) { sampleAds = true; }       
    siteJsonSfx = "";    
    if (sampleAds) siteJsonSfx = "-sample";
    
    if (jQuery(".item--no-ads").length == 0 ) {    

        var jsonUrl = "/templates/site/js/ad-" + siteAds + siteJsonSfx + ".json?v12";

        jQuery.getJSON(jsonUrl, function(data) {
            var adMatrixAll = data;

            var adMatrix;

            // page: cover, item, or section
            adPage = "";
            if (jQuery('.itemView').length > 0) {
                adPage = "item";
                adMatrix = adMatrixAll.item;
            } else {
                if (jQuery('.home_page').length > 0) {
                    adPage = "cover";
                    adMatrix = adMatrixAll.cover;
                }
            }
            if (adPage == "") {
                adPage = "section";
                adMatrix = adMatrixAll.section;
            }

            console.log("%c Ads1::::: json = " + siteAds + siteJsonSfx + ", page = " + adPage + ', pathLevel1=' + strPathLevel1, conAdColor);

            if (adPage == "item") {
                var nParagraphs = jQuery(".itemFullText > p").length; 
                var nBRs = jQuery(".itemFullText > br").length; 
                console.log('%c Item:::: paragraphs = ' + nParagraphs + ', br = ' + nBRs, conAdColor); 
            }

            resWidth = jQuery(window).width();            
            // res:  ld,   md,  pt,  lm,  pm, sm
            // bp: 1280, 1024, 768, 480, 320,  0
            console.log ("%c Ads2::::: page width = "+resWidth+"px", conAdColor );

            /*
			if (resWidth < 768) {
                if (adPage == "item") {
                    jQuery('.item_break_01_cont .position_item_break_01_top').detach().prependTo('.item__body');
                } else {
                    jQuery('.break_01_cont .position_break_01_top').detach().appendTo('.col--move-ad-here');
                }
            }
			*/

            adRes = "";
            if (adRes == "" && resWidth >= 1280) adRes = "ld";
            if (adRes == "" && resWidth >= 1024) adRes = "md";
            if (adRes == "" && resWidth >= 768) adRes = "pt";
            if (adRes == "" && resWidth >= 480) adRes = "lm";
            if (adRes == "" && resWidth >= 320) adRes = "pm";
            if (adRes == "") adRes = "sm";

            ads = adMatrix.length;
            for (i = 0; i < ads; i++) {
                var adPos = adMatrix[i].ad;
                if ( (!sampleAds && (adPos[adRes] !== undefined) && (adPos[adRes] !== "")) || (sampleAds && (adPos[adRes] !== undefined) && (adPos[adRes] !== "")) ) {
                    var strAdPos = String(adPos.pos);
                    //
                    //if ( (siteAds != 'sd') || ((siteAds == 'sd') && (strPathLevel1 != 'osmrtnice')) || ((siteAds == 'sd') && (strPathLevel1 == 'osmrtnice') && (strAdPos.indexOf('osmrtnice')>=0)) ) {
                        var adPosDiv = strAdPos;
                        if ( strAdPos.indexOf("_wall") === -1 && strAdPos.indexOf("_floater") === -1) {
                            if (adPos.sfx === undefined) {
                                adPosDiv += "_top";                                                        
                            } else {
                                adPosDiv += "_bottom";                                                        
                            }                            
                        }

                        var positionShort = adPosDiv.replace("position_", "");

                        //sample ads
                        var dummyRes = "";
                        switch (adPos[adRes]) {
                            case "sky":
                                dummyRes = "160x600";
                                break;
                            case "hp1":
                                dummyRes = "300x600";
                                break;
                            case "billboard-tandem":
                                dummyRes = "1275x250";
                                break;
                            case "leaderboard":
                                dummyRes = "728x90";
                                break;
                            case "lider-app":
                                dummyRes = "728x90";
                                break;
                            case "billboard":
                                dummyRes = "970x250";
                                break;
                            default:
                                var dummyRes = "300x250";
                        }    

                        if (sampleAds) {
                            adDiv = "<div class='ad--align ad--loaded ad--sample'></div>";    
                            adScript = "console.log('%c Ads3::::: page="+adPage+", res = "+adRes+", position="+positionShort+", id=" + adPos[adRes] + " -> added', '" + conAdColor + "');";
                        } else {
                            var gptad = "div-gpt-ad-";
                            /*if ( (adPos.adId !== undefined) && (adPos.adId !== "") ) {
                                gptad = adPos.adId;
                            } */
                            
                            // standard
                            adDiv="<div id='" + gptad + adPos[adRes] + "' class='ad--align'></div>";
                            adScript = "console.log('%c Ads4::::: page = "+adPage+", res = "+adRes+", position = "+positionShort+", id = " + adPos[adRes] + " -> added', '" + conAdColor + "');";
                            adScript=adScript+"googletag.cmd.push(function () { googletag.display('" + gptad + adPos[adRes] + "'); });"; 
                            
                            // ldr
                            //adDiv="<div id='" + positionShort + "' class='ad--align'></div>";
                            //adScript = "console.log('res = " + adRes + " / position = " + positionShort + " / id = " + adPos[adRes] + " / added');";
                            //adScript=adScript+"googletag.cmd.push(function () { googletag.display('" + positionShort + "'); });";                                 
                        }   
    
                        var adPositionFound = false;
                        if ( (strAdPos == "position_item_center_01") || (strAdPos == "position_item_center_02") || (strAdPos == "position_item_center_03") ) {
                            if (jQuery(".item--no-inline-ads").length == 0 ) {                            
                                // ad inside item fulltext, add position first
                                adDiv = "<div class='item__ad-center " + adPosDiv + "'>" + adDiv + "</div>";
                                var strEl = '';
                                if (nBRs > 0 ) {
                                    strEl = '.itemFullText > br';                                        
                                }
                                if (nParagraphs > 0) { 
                                    strEl = '.itemFullText > p';
                                }
                                if (strEl != '') {
									if (strAdPos == "position_item_center_01") {
										adPositionFound = true;
										jQuery(adDiv).insertBefore(jQuery(strEl + ":nth-of-type(1)"));
									} 
									if ((nParagraphs > 0) && (strAdPos == "position_item_center_02") ) {
										adPositionFound = true;                                            
										jQuery(adDiv).insertAfter(jQuery(strEl + ":nth-of-type(1)"));
									} 
									if ((nParagraphs > 0) && (strAdPos == "position_item_center_03") ) {
										adPositionFound = true;                                            
										jQuery(adDiv).insertAfter(jQuery(strEl + ":last-child"));
									}    
                                }
                            }
                        } else {
                            // ad on predefined position
                            jQuery("." + adPosDiv).append(adDiv);
                            adPositionFound = true;                                            
                        }

                        if (adPositionFound) {
							jQuery("<script>").text(adScript).appendTo("." + adPosDiv + " div");
							console.log('adScript added!');
						}

                        if (sampleAds) {
                            jQuery("<img>").attr("class", "sample-ad-image").attr("src", "https://placehold.jp/24/dddddd/d01010/" + dummyRes + ".png?text=" + positionShort).appendTo("." + adPosDiv + " div");
                        }
                    //}
                }
            }
        })
        .success(function() {})
        .error(
        .complete(;
    }
});

// detect blocking ads
var e = document.createElement('div');
e.id = 'BlockingAds';
e.style.display = 'none';
document.body.appendChild(e);
