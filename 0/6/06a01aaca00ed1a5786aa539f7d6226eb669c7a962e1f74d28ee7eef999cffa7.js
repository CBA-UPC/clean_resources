var rtbpbjs=rtbpbjs||{};rtbpbjs.que=rtbpbjs.que||[];var getQueryString_val_new=function(field,url){var href=url?url:window.location.href;var reg=new RegExp('[?&]'+field+'=([^&#]*)','i');var string=reg.exec(href);return string?string[1]:null;};var blocksitetest=getQueryString_val_new('blocksitetest');var lineitemidcode={};var adslot88=setInterval(function(){var andbeyondcreativead=Array();if(window.googletag&&googletag.pubadsReady&&googletag.apiReady){clearInterval(adslot88);googletag.cmd.push(function(){googletag.pubads().addEventListener('slotRenderEnded',function(event){var slot=event.slot;var andbeyondslotname=slot.getAdUnitPath().toString();var andbeyondcreativediv=slot.getSlotElementId();var andbeyondlineitemID=event.lineItemId;var andbeyondcreativeId=event.creativeId;var andbeyondadvertiserId=event.advertiserId;var andbeyondcampaignId=event.campaignId;creativeid1(andbeyondlineitemID,andbeyondcreativediv,andbeyondslotname,andbeyondcreativeId,andbeyondadvertiserId,andbeyondcampaignId);});});}
function creativeid1(andbeyondlineitemID,andbeyondcreativediv,andbeyondslotname,andbeyondcreativeId,andbeyondadvertiserId,andbeyondcampaignId){andbeyondtemp={};if(andbeyondlineitemID!=null&&andbeyondcreativediv.indexOf("andbeyond")<0){andbeyondtemp['abplineItemId']=andbeyondlineitemID;andbeyondtemp['abpcreativeDIV']=andbeyondcreativediv;andbeyondtemp['abpslotname']=andbeyondslotname;andbeyondtemp['abpcreativeID']=andbeyondcreativeId;andbeyondtemp['abpadvertiserId']=andbeyondadvertiserId;andbeyondtemp['abpcampaignId']=andbeyondcampaignId;lineitemidcode[andbeyondslotname]=andbeyondtemp;}}},101);if(!googletag||!googletag.apiReady||googletag.apiready&&!googletag.pubadsReady){var googletag=googletag||{};googletag.cmd=googletag.cmd||[];googletag.cmd.push(function(){googletag.pubads().enableSingleRequest();googletag.enableServices();});}
function refreshbid2teads(id){id1=eval(id);googletag.pubads().refresh([id1]);}
var randomvaldatatestand=Math.floor(Math.random()*10)+1;var url22=window.location.origin+window.location.pathname;setTimeout(function(){var smailetest1=1;var windowwidth1=window.innerWidth;setInterval(function(){if(window.googletag&&googletag.pubadsReady&&googletag.apiReady){if(document.querySelector('#adunit1x1')){}else{var test17='<div style="width:1px;height:1px;"><div id="adunit1x1"><scr'+'ipt>google'+'tag.cmd.'+'push(func'+'tion() { google'+'tag.displ'+'ay("adunit1x1"); });</scr'+'ipt></div></div></div>';if(document.querySelectorAll(".article-nwsplit-arp-wrap-nf")[0]){googletag.cmd.push(function(){adunit1x1=googletag.defineSlot("/21751243814,78059622/537953_KT_Teads_Inread_1x1",[1,1],"adunit1x1").addService(googletag.pubads().setTargeting("prebidtrue",'0'));});document.querySelectorAll("body")[0].insertAdjacentHTML("afterend",test17);refreshbid2teads('adunit1x1');}}}},1000);},2000);+ 90;
    //var webnmslogo_offset = $('.webnms .section-logo').offset().top;
    var webnmslogo_offset = $('.qntrl .section-logo').offset().top;
    $(window).scroll(function() {
        var scrolloffset = $(window).scrollTop();

        //console.log(brandoffset ,scrolloffset)
        if (brandoffset <= scrolloffset) {
            $('.zoho h2').addClass('fixed');
            if (webnmslogo_offset >= scrolloffset - 10) {
                $('.zoho h2').addClass('fixed');
            } else {
                $('.zoho h2').removeClass('fixed');
            }
        } else {
            $('.zoho h2').removeClass('fixed');
        }

        /*** customer count increase animation ***/
        if ($('.zcount').hasClass('in-view')) {
            $('.zcount').each(function() {
                if (counter === 0) {
                    $(this).prop('Counter', 10).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function(now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                }
                counter = counter + 1;
            });
        }
        /*** customer count increase animation ***/

    });

    if ($(window).width() >= 1025) {
        // $('.banner').height($(window).height());
    }

    $('.bannernav li').on('click', function() {
        var thisLink = $(this).attr('data-href');
        $('body, html').animate({ scrollTop: $('div[data-id="' + thisLink + '"]').offset().top }, 800);
    });

    $('.copy-right-year').text(new Date().getFullYear());
    $(".news-wrapper").html("");

    var URL = "https://www.zohowebstatic.com/sites/default/files/json/press-data-list.json";
    $.getJSON(URL, function(d) {
        var data1 = d.pressLists[0];
        var data2 = d.pressLists[1];
        var slide1 = '<div class="slide-item"><a href="https://www.zoho.com/' + data1.link + '" target="_blank"><p class="date-info">' + data1.date + '</p><p>' + data1.title + '</p></a></div>';
        var slide4 = '<div class="slide-item"><a href="https://www.zoho.com/' + data2.link + '" target="_blank"><p class="date-info">' + data2.date + '</p><p>' + data2.title + '</p></a></div>'
       


        var URL1 = "js/me-news.json";
        $.getJSON(URL1, function(e) {
            var data1 = e.pressLists[0];
            var data2 = e.pressLists[1];
            var slide2 = '<div class="slide-item"><a href="' + data1.link + '" target="_blank"><p class="date-info">' + data1.date + '</p><p>' + data1.title + '</p></a></div>';
            var slide5 = '<div class="slide-item"><a href="' + data2.link + '" target="_blank"><p class="date-info">' + data2.date + '</p><p>' + data2.title + '</p></a></div>'

            var URL2 = "js/nms-news.json";
           // $.getJSON(URL2, function(f) {
                //var data1 = f.pressLists[0];
                //var data2 = f.pressLists[1];
                //var slide3 = '<div class="slide-item"><a href="' + data1.link + '" target="_blank"><p class="date-info">' + data1.date + '</p><p>' + data1.title + '</p></a></div>';
                //var slide6 = '<div class="slide-item"><a href="' + data2.link + '" target="_blank"><p class="date-info">' + data2.date + '</p><p>' + data2.title + '</p></a></div>'
                 //$(".news-wrapper").append(slide1 + slide2 + slide3 + slide4 + slide5 + slide6);
                 $(".news-wrapper").append(slide1 + slide2 + slide4 + slide5 );

                $(".news-wrapper").slick({
                    dots: false,
                    slidesToShow: 1,
                    infinite: false,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    fade: true,
                    arrows: true,
                });

            //});

        });
    });

});