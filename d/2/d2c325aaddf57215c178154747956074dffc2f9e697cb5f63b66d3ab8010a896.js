"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1520],{51520:function(e,a,c){c.r(a);var t,n,l=c(67294);function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var c=arguments[a];for(var t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t])}return e}).apply(this,arguments)}a.default=function(e){return l.createElement("svg",r({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"call_svg__icon-object-call"},e),t||(t=l.createElement("path",{d:"M18.547 13.613c-1.13-.808-2.704-.883-3.909-.19a6.765 6.765 0 00-.75.524c-.197.152-.395.307-.607.433-.099.058-.136.067-.129.07a.884.884 0 01-.134-.088 19.974 19.974 0 01-3.483-3.256c-.189-.225-.38-.48-.356-.676.02-.159.185-.339.361-.53.06-.065.122-.132.178-.198.89-1.039 1.075-2.599.463-3.884-.569-1.194-1.777-2.066-3.153-2.275-1.46-.222-3.417.64-3.892 2.23-.5 1.678.482 3.771 1.266 5.2a19.913 19.913 0 008.744 8.297c.895.431 2.161.955 3.508.955.288 0 .579-.024.87-.078.5-.09.89-.258 1.188-.508.24-.2.415-.45.553-.666.392-.613.633-1.177.738-1.724a3.682 3.682 0 00-1.456-3.636zm.473 3.446c-.08.421-.276.871-.6 1.375-.102.16-.214.323-.35.435-.165.14-.402.234-.729.294-1.369.252-2.803-.332-3.764-.794a18.909 18.909 0 01-8.3-7.877C4.876 9.76 3.653 7.53 4.093 6.057c.281-.944 1.472-1.55 2.457-1.55.112 0 .222.008.326.023 1.037.157 1.979.831 2.4 1.718.439.92.308 2.071-.32 2.803l-.153.171c-.25.271-.564.61-.619 1.091-.078.651.37 1.182.585 1.438a21.175 21.175 0 003.655 3.418c.12.09.324.238.594.272.311.034.576-.086.771-.2.25-.148.48-.324.709-.503.208-.159.413-.319.638-.45.859-.492 2.021-.438 2.83.14.807.574 1.24 1.657 1.053 2.631zM12.933 6.02a.497.497 0 00-.605.364.498.498 0 00.361.607c.945.237 1.73.61 2.102.998.475.495.637.702.894 1.76a.501.501 0 00.973-.236c-.29-1.19-.517-1.56-1.145-2.216-.715-.745-2.042-1.14-2.58-1.276z",fill:"#000001"})),n||(n=l.createElement("path",{d:"M11.892 3.998c.927.104 2.008.258 2.991.623 1.166.432 2.136 1.129 2.805 2.016.715.948 1.06 2.112.948 3.195a.5.5 0 00.994.103c.138-1.331-.279-2.752-1.144-3.9-.784-1.04-1.909-1.853-3.256-2.351-1.085-.402-2.24-.57-3.228-.68a.487.487 0 00-.552.44.502.502 0 00.442.554z",fill:"#000001"})))}}}]);ub');
    // $('#loginfileFormSubscription').parent().children('p').text('Receive Teleflora emails and be the first to know about exclusive offers, promotions, and more!');

    // Top ribbon - JAC 1/12/16
    if (typeof t_page_name != 'undefined' && t_page_name != 'Checkout: Delivery' && t_page_name != 'Checkout: Billing' && t_page_name != 'Checkout: Order Confirmation') {
        //    hiding per James - Sharepoint 10977
        //$('#wrapper').before( '<a class="ribbonBnnr" href="/same-day-flower-delivery?catID=cat480085"><div><img style="float: left;" src="//img.teleflora.com/image/upload/fl_lossy,f_auto,q_auto/pink-banner-left.png" alt="left side image" width="18" height="28"><img style="float: right;" src="//img.teleflora.com/image/upload/fl_lossy,f_auto,q_auto/pink-banner-right.png" alt="right side image" width="18" height="28"><span style="line-height:1.9em">Same Day Delivery Available On All Bouquets!</span></div></a>');
    }
    // Hack to display PDP description on products that have less than 3 SKU's (i.e. Sympathy products,TRS08-1A) - JAC 10/7/16 
    if (typeof t_page_type != 'undefined' && t_page_type == 'Product Details') {
        var variation = $("[id^='mark-']").length; // Number of descriptions in the HTML code 
        if (variation != 3) {
            $('#mark-' + variation).show(); // Show the description of the larger SKU 
            $('#desc-' + variation).show(); // Show the bullet points of the larger SKU 
        }
    }


    // Take away mobile links on main hamburger menu so submenus will show up
    // NOT btn class so CTAs on cartridges will still work
    if ($(window).width() < 961) {
        $("a[href='/birthday-flowers?catID=cat210012'][data-subnav='occasions']").not('.btn').attr("href", "javascript:void(0);");
        $("a[href='/sympathy-funeral/cat210037'][data-subnav='occasions'],a[href='/funeral-sympathy-collection '][data-subnav='occasions']").not('.btn').attr("href", "javascript:void(0);");
        $("a[href='/get-well-flowers/cat210073'][data-subnav='occasions'],a[href='/get-well-flowers?catID=cat210073'][data-subnav='occasions']").not('.btn').attr("href", "javascript:void(0);");
        $('a:contains("Shop By")[data-subnav="occasions"]').not('.btn').attr("href", "javascript:void(0);");
        $("a[href='/occasions/cat210050'][data-subnav='occasions'],a[href='/occasions?catID=cat210050'][data-subnav='occasions']").not('.btn').attr("href", "javascript:void(0);");

        // force focus on second level menu when first level is clicked on
        $('.m-navbar-has-subnav').on("click", function (e) {
            e.stopPropagation();
            $(this).find('ul.m-navbar-secondlevel li').focus();
        });
    }
})

// JavaScript Analytics Upload

if (!window.t_page_name) {

    // JQUERY VERSION //
    //var pageName = $('h1').length > 0 ? $('h1').text() : ""; //

    if (document.getElementsByTagName('h1').length > 0) {
        var pageName = document.getElementsByTagName('h1')[0].innerText ? document.getElementsByTagName('h1')[0].innerText : document.getElementsByTagName('h1')[0].textContent;
    } else {
        var pageName = '';
    }

    // Jerry's code START //

    function getTimeParting(t, z, y) {
        dc = new Date('1/1/2000');
        f = 15;
        ne = 8;
        if (dc.getDay() != 6 || dc.getMonth() != 0) {
            return 'Data Not Available';
        } else {
            z = parseInt(z);
            gmar = new Date('3/1/' + y);
            dsts = f - gmar.getDay();
            gnov = new Date('11/1/' + y);
            dste = ne - gnov.getDay();
            spr = new Date('3/' + dsts + '/' + y);
            fl = new Date('11/' + dste + '/' + y);
            cd = new Date();
            if (cd > spr && cd < fl) {
                z = z + 1;
            } else {
                z = z;
            }
            utc = cd.getTime() + (cd.getTimezoneOffset() * 60000);
            tz = new Date(utc + (3600000 * z));
            thisy = tz.getFullYear();
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            if (thisy != y) {
                return 'Data Not Available';
            } else {
                thish = tz.getHours();
                thismin = tz.getMinutes();
                thisd = tz.getDay();
                var dow = days[thisd];
                var ap = 'AM';
                var dt = 'Weekday';
                var mint = '00';
                if (thismin > 30) {
                    mint = '30';
                }
                if (thish >= 12) {
                    ap = 'PM';
                    thish = thish - 12;
                }
                if (thish == 0) {
                    thish = 12;
                }
                if (thisd == 6 || thisd == 0) {
                    dt = 'Weekend';
                }
                var timestring = thish + ':' + mint + ap;
                var daystring = dow;
                var endstring = dt;
                if (t == 'h') {
                    return timestring;
                }
                if (t == 'd') {
                    return daystring;
                }
                if (t == 'w') {
                    return endstring;
                }
            }
        }
    }

    t_s_code_URL = "vendor/00005557/javascript/s_code.js"; // This needs to be changed to current site location //
    t_region = "US";
    t_server = "www";
    t_account = "telefloracom,70009700";
    t_currency = "US";
    t_channel = "Custom";
    t_serverip = "";
    t_page_name = 'Content: ' + pageName;
    t_pageurl = window.location.pathname;
    t_tfid = "70009700";
    t_startofsession = getTimeParting('h', '-6', new Date().getFullYear());
    t_dayofweek = getTimeParting('d', '-6', new Date().getFullYear());
    t_typeofday = getTimeParting('w', '-6', new Date().getFullYear());
    t_partnername = "teleflora";
    t_lang = "english";
    t_homepagetype = "";

    s_code_URL = t_s_code_URL;
    s.server = t_server;
    s.account = t_account;
    s.channel = t_channel;
    s.prop22 = t_serverip;
    s.prop16 = t_pageurl;
    s.eVar47 = t_tfid;
    s.prop13 = t_startofsession;
    s.prop14 = t_dayofweek;
    s.prop15 = t_typeofday;
    s.pageName = t_page_name;
    s.eVar40 = t_partnername;
    s.eVar38 = t_lang;

    // Jerry's code END //
}

if (typeof jquerySrc == 'undefined' || jquerySrc == '') {
    jquerySrc = 'http://assets.teleflora.com/js/lib/jquery-3.5.1.min.js';
}

/*$(document).ready(function() {
// VDay Banner Inserts - JAC 4/22/16
	var path = '//img.teleflora.com/image/upload/fl_lossy,f_auto,q_80/prod/banners/TF14997_TF.com_MDay_TopBanner_';
	
	var dBnnr = path +'Desktop_940x90_Approved.jpg';
	var mBnnr = path +'Mobile_480x90_Approved.jpg';
	var bnnrLink = '/mothers-day-flowers/cat210089';
	var altTxt = "Mother's Day";
	//[-PDP-]
	if (typeof t_page_type != 'undefined' && t_page_type == 'Product Details') {
		$('.m-pdp-title-ratings-container').before('<a href="'+ bnnrLink +'"><img class="no-mobile" src="http:'+ dBnnr +'" alt="'+ altTxt +'" style="max-width:940px; width:100%;"><img class="no-desktop" src="http:'+ mBnnr +'" alt="'+ altTxt +'" style="max-width:480px; width:100%; margin:auto; display:block;"></a>');
		}

	//[-CATEGORIES-]
	if (typeof t_category != 'undefined' && t_category == 'Occasions' && t_category != 'Funeral Flowers' && t_category != 'Sympathy Flowers' ) {
		$('#productContainer').after('<a href="'+ bnnrLink +'"><img class="no-mobile" src="'+ dBnnr +'" alt="'+ altTxt +'" style="max-width:940px; width:100%;"><img class="no-desktop" src="'+ mBnnr +'" alt="'+ altTxt +'" style="max-width:480px; width:100%; margin:0 auto -40px; display:block;"></a>');
		}
	
	//[-COLLECTIONS-]
	if (typeof t_category != 'undefined' && t_category == 'Collection' && typeof t_page_name != 'undefined') {
		$('footer').before('<a href="'+ bnnrLink +'"><img class="no-mobile" src="'+ dBnnr +'" alt="'+ altTxt +'" style="max-width:940px; width:100%; margin:auto; display:block;"><img class="no-desktop" src="'+ mBnnr +'" alt="'+ altTxt +'" style="max-width:480px; width:100%; margin:-10px auto 30px; display:block;"></a>');
		}


	//[-CONTACT US/CONFIRMATION-]
	//if (typeof t_page_name != 'undefined' && (t_page_name == 'Content: Contact Customer Service' || t_page_name == 'Checkout: Order Confirmation')) {
	if (typeof t_page_name != 'undefined' && t_page_name == 'Checkout: Order Confirmation') {
		$('.m-confirmation-header-container').before('<a href="'+ bnnrLink +'"><img class="no-mobile" src="http:'+ dBnnr +'" alt="'+ altTxt +'" style="max-width:940px; width:100%; display:block;"><img class="no-desktop" src="http:'+ mBnnr +'" alt="'+ altTxt +'" style="max-width:480px; width:100%; margin:-10px auto 0px; display:block;"></a>');
		}

	//[-DELIVERY-]
	if (typeof t_page_name != 'undefined' && t_page_name == 'Checkout: Delivery') {
		$('.m-shopping-cart-delivery-info-footer').after('<img class="no-mobile" src="https:'+ dBnnr +'" alt="'+ altTxt +'" style="max-width:940px; width:100%; margin:15px 0 -45px;"><img class="no-desktop" src="https:'+ mBnnr +'" alt="'+ altTxt +'" style="max-width:480px; width:100%; margin:auto; display:block; margin-top:-50px;">');
		}
	})*/
// slide Search

