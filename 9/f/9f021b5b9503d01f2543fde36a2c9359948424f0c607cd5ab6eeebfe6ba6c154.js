// var applicationId = '187960271237149';
var brandId = '1';
var shortenUrl = 'https://dtk.id';
var site = 'detik';

if(window.location.hostname.search(/(insertlive.com)/gi)>-1){
    // applicationId = '229248547753202';
    brandId = '5';
}
else if(window.location.hostname.search(/(updatebanget.com)/gi)>-1){
    // applicationId = '1942207059345335';
    // brandId = '';
}
else if(window.location.hostname.search(/(cnnindonesia.com)/gi)>-1){
    // applicationId = '902258536467731';
    // brandId = '9'; // disable coz shortenurl cnn.id not ready
    site = 'cnn';
}
else if(window.location.hostname.search(/(cnbcindonesia.com)/gi)>-1){
    // applicationId = '1766408923659392';
    brandId = '10';
}
else if(window.location.hostname.search(/(haibunda.com)/gi)>-1){
    // applicationId = '341571256274234';
    brandId = '4';
}
else if(window.location.hostname.search(/(beautynesia.id)/gi)>-1){
    // applicationId = '1372126242995623';
    brandId = '6';
}

// window.fbAsyncInit = function() {
//     FB.init({
//       appId      : applicationId,
//       xfbml      : true,
//       version    : 'v2.7'
//     });
// 	//shareBox.detail();
// };

// (function(d, s, id){
//  var js, fjs = d.getElementsByTagName(s)[0];
//  if (d.getElementById(id)) {return;}
//  js = d.createElement(s); js.id = id;
//  js.src = "https://connect.facebook.net/en_US/sdk.js";
//  fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

var shareBox = {
	num_share : 0,
	fbLoaded : false,
	shorturl : '',
    totalArr : [],
    totalSeq : 0,
    totalCount : 0,
    regShare : function(elm) {
        shareBox.addShare(elm);
        return false;
    },
	windowOptions : "scrollbars=yes,resizable=yes,toolbar=no,location=yes",
    checkFbBrowser : function () {
        var ua = navigator.userAgent || navigator.vendor || window.opera;
        return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
    },
	facebook : function (data) {
		var _url	= 'http://www.facebook.com/share.php?u=|u|';
		_url = _url.replace('|u|',data.pageUrl).replace('|t|',data.pageTitle).replace('|d|',data.pageDesc).replace('|140|',data.pageTitle.substring(0,130));
		window.open(_url,shareBox.windowOptions, 'width=640, height=528');
	},
	twitter : function (data) {
		var twAPI = "https://twitter.com/intent/tweet",
	    title = encodeURIComponent(data.pageTitle),
	    url = encodeURIComponent(data.pageUrl);

        if(data.pageQuote){
            if (data.pageTitle) {
                title = encodeURIComponent("\""+data.pageQuote+"\" - "+data.pageTitle)
            } else {
                title = encodeURIComponent("\""+data.pageQuote+"\"")
            }

        }
        //if(window.location.hostname.search(/(cnnindonesia.com)/gi)>-1){
        if(site == 'cnn') {
        	var urlcnn = "https://cnn.id/"+article.idnews;
            window.open(twAPI+"?text="+title+"&url="+encodeURIComponent(urlcnn),
                shareBox.windowOptions, "width=550,height=320"
            );
        } else {
            // var shortenUrl = "https://detik.id"
            // if(window.location.hostname.search(/(cnbcindonesia.com)/gi)>-1){
            //     shortenUrl = "https://cnbc.id"
            // }
            $.ajax({
                url: shortenUrl+"/?"+url,
                type: 'GET',
                headers: { 'X-BrandId': brandId },
                success: function(data) {
                    console.log(shareBox.checkFbBrowser())
                    if(shareBox.checkFbBrowser() === true) {
                        window.location.href = twAPI+"?text="+title+"&url="+encodeURIComponent(data)
                    }else {
                        window.open(twAPI+"?text="+title+"&url="+encodeURIComponent(data),
                            shareBox.windowOptions, "width=550,height=320"
                        );
                    }
                }
            })
        }
	},
	gplus : function (data) {
        title = encodeURIComponent(data.pageTitle);
        if(data.pageQuote){
            if (data.pageTitle) {
                title = encodeURIComponent("\""+data.pageQuote+"\" - "+data.pageTitle)
            } else {
                title = encodeURIComponent("\""+data.pageQuote+"\"")
            }
        }
        var _url	= 'https://plusone.google.com/_/+1/confirm?url='+encodeURIComponent(data.pageUrl)+'&title='+title;
		window.open(_url,shareBox.windowOptions, 'width=640, height=528');
	},
	linked : function (data) {
        url = encodeURIComponent(data.pageUrl);
        // title = encodeURIComponent(data.pageTitle);
        // desc = encodeURIComponent(data.pageDesc);
        // ======== description ========
        // https://developer.linkedin.com/docs/share-on-linkedin#methods
        // every parameter requirement and max length is : url = 1024 required, mini = 4 required, title = 200, summary = 256, source = 200
        // ======== end description ========
        // var _url = "https://www.linkedin.com/shareArticle?mini=true&url="+url+"&title="+title+"&summary="+desc+"&source="+window.location.hostname;
        var _url = "https://www.linkedin.com/shareArticle?mini=true&url="+url;
		window.open(_url,shareBox.windowOptions, 'width=520, height=570');
	},
    // fb_copy : function (data) {
    //     var obj = {
	// 		method: 'feed',
	// 		display: 'popup',
	// 		link: data.pageUrl,
	// 		picture: data.pageImage,
	// 		name: data.pageTitle,
    //         // caption: data.pageUrl,
    //         description: data.pageDesc
    //     };
    //     if(data.pageQuote){
    //         obj['quote'] = data.pageQuote;
    //     }

	// 	function callback(response) {
	// 	  if (response && response.post_id) {
	// 		jQuery.ajax({
	// 		  type: "GET",
	// 		  async: true,
	// 		  cache: false,
	// 		  dataType: 'jsonp',
	// 		  jsonp: false,
	// 		  jsonpCallback: 'track',
	// 		  url: 'https://connect.detik.com/share/track?url='+data.pageUrl+'&service=facebook&clientId=21&token=0bcd238282d290b2122b566199e02ca4',
	// 		  success: function (res, st, xhr) {},
	// 		  error: function (xhr, ajaxOptions, thrownError) {}
	// 		});
	// 	  }

	// 	  //console.log('sukses fb');
	//   }

    //     FB.ui(obj);
    //     //FB.ui(obj, callback);
	// },
	whatsapp : function(data, elm) {
		var twAPI = "https://twitter.com/intent/tweet",
	    title = encodeURIComponent(data.pageTitle),
	    url = encodeURIComponent(data.pageUrl);
        if(data.pageQuote){
            if (data.pageTitle) {
                title = encodeURIComponent("\""+data.pageQuote+"\" - "+data.pageTitle)
            } else {
                title = encodeURIComponent("\""+data.pageQuote+"\"")
            }

        }
        var wurl = data.pageUrl;
		if(shareBox.shorturl != '')
			wurl = shareBox.shorturl;
        if(site == 'cnn') {
            var data_url = "cnn.id/"+article.idnews
            // trigger href whatsapp
//            $('.whatsap').attr({href:"https://wa.me/?text="+title+' '+encodeURIComponent(data_url)})
//            $('.whatsap').attr({'data-href':data_url})
            $('.whatsap').click(function(){
                window.open("https://wa.me/?text="+title+' '+encodeURIComponent(data_url)).focus();
            })
        } else {
            // var shortenUrl = "https://detik.id"
            // if(window.location.hostname.search(/(cnbcindonesia.com)/gi)>-1){
            //     shortenUrl = "https://cnbc.id"
            // }
            $.ajax({
                url: shortenUrl+"/?"+url,
                type: 'GET',
                headers: { 'X-BrandId': brandId },
                success: function(data) {
                    // trigger href whatsapp
//                    $('.whatsap').attr({href:"https://wa.me/?text="+title+' '+data})
//                    $('.whatsap').attr({'data-href':data})

                    $('.whatsap').click(function(){
                         window.open("https://wa.me/?text="+title+' '+data).focus();
                    })
                }
            })
        }
	},
	lineit: function(data) {
        title = encodeURIComponent(data.pageTitle)
        if(data.pageQuote){
            if (data.pageTitle) {
                title = encodeURIComponent("\""+data.pageQuote+"\" - "+data.pageTitle)
            } else {
                title = encodeURIComponent("\""+data.pageQuote+"\"")
            }

        }
		window.location.href = 'http://line.me/R/msg/text/?'+title+' '+data.pageUrl
	},
    telegram : function(data, elm) {
	    title = encodeURIComponent(data.pageTitle),
	    url = encodeURIComponent(data.pageUrl);
        if(data.pageQuote){
            if (data.pageTitle) {
                title = encodeURIComponent("\""+data.pageQuote+"\" - "+data.pageTitle)
            } else {
                title = encodeURIComponent("\""+data.pageQuote+"\"")
            }

        }
        if(site == 'cnn') {
            var data_url = "cnn.id/"+article.idnews
            // trigger href telegram
            $('.sh-telegram').attr({href:"https://t.me/share/url?url="+encodeURIComponent(data_url)+"&text="+title})
            $('.sh-telegram').attr({'data-href':data_url})
        } else {
            $.ajax({
                url: shortenUrl+"/?"+url,
                type: 'GET',
                headers: { 'X-BrandId': brandId },
                success: function(data) {
                    // trigger href telegram
                    $('.sh-telegram').attr({href:"https://t.me/share/url?url="+data+"&text="+title})
                    $('.sh-telegram').attr({'data-href':data})
                }
            })
        }
    },     
    addShare : function(elm) {
		var url_ex = $(elm).attr('data-url');
		if (url_ex.substr(0, 2) == '//')
			url_ex = 'http:'+url_ex;

        var data = {
            pageUrl : url_ex,
            pageTitle	: $(elm).attr('data-title'),
            pageDesc	: $(elm).attr('data-desc'),
            pageImage   : $(elm).attr('data-image'),
            pageQuote   : $(elm).attr('data-quote')
        }
		if (!data.pageImage) {
			data.pageImage = baseurl+'images/default-43.gif?w=300';
		}

        if ($(elm).attr('class') == 'fb') {
            // shareBox.fb_copy(data);
            shareBox.facebook(data);
        }
        else if ($(elm).attr('class') == 'tw') {
            shareBox.twitter(data);
        }
        else if ($(elm).attr('class') == 'gplus') {
            shareBox.gplus(data);
        }
        else if ($(elm).attr('class') == 'line') {
            shareBox.lineit(data);
        }
        else if ($(elm).attr('class') == 'whatsap') {
            shareBox.whatsapp(data, $(elm));
        }
        else if ($(elm).attr('class') == 'linked') {
            shareBox.linked(data);
        }
        else if ($(elm).attr('class') == 'sh-telegram') {
            shareBox.telegram(data, $(elm));
        }
        return false;
    },
	addCounter : function(elm) {
		var url_ex = $(elm).attr('data-url');
		if (url_ex.substr(0, 1) == '//')
			url_ex = 'http:'+url_ex;

		var data = {
            pageUrl : url_ex,
            pageTitle	: $(elm).attr('data-title'),
            pageDesc	: $(elm).attr('data-desc'),
            pageImage   : $(elm).attr('data-image'),
            pageQuote   : $(elm).attr('data-quote')
        }

		if($(elm).hasClass('fb')) {
			//shareBox.countFB(elm);
			$(elm).click(function(e) {
				// shareBox.fb_copy(data);
				shareBox.facebook(data);
				e.preventDefault();
			});
		}
		else if ($(elm).hasClass('tw')) {
			// shareBox.countTW(elm);
			$(elm).click(function(e) {
				shareBox.twitter(data);
				e.preventDefault();
			});
		}
		else if ($(elm).hasClass('gplus'))  {
			//shareBox.countGplus(elm);
			$(elm).click(function(e) {
				shareBox.gplus(data);
				e.preventDefault();
			});
        }
		else if ($(elm).hasClass('linked'))  {
			//shareBox.countGplus(elm);
			$(elm).click(function(e) {
				shareBox.linked(data);
				e.preventDefault();
			});
        }
		else if ($(elm).hasClass('line'))  {
			shareBox.countLine(elm);
			$(elm).click(function(e) {
				shareBox.lineit(data);
				e.preventDefault();
			});
		}
		else if ($(elm).hasClass('whatsap'))  {
			// shareBox.countGplus(elm);
            shareBox.whatsapp(data, $(this));
		}
        else if ($(elm).hasClass('sh-telegram'))  {
            shareBox.telegram(data, $(this));
        }        
		else if ($(elm).hasClass('komentar') || $(elm).hasClass('sh-komentar')) {
			shareBox.countComment(elm);
			$(elm).click(function(e) {
				var divtop = parseInt($('#thecomment2').offset().top) - parseInt(46);
				var dt_plus	= divtop + 200;

				$('html, body').animate({ scrollTop: dt_plus }, 600);
				setTimeout(function(){
					$('html, body').animate({ scrollTop: divtop }, 800);
				}, 500);


				return false;
			});
		}
	},
    updateCounter : function(elm, sostype, total) {
        if(this.totalArr.indexOf(sostype) < 0) {
            this.totalArr.push(sostype)
            this.totalCount = this.totalCount+total
            this.totalSeq++
        }

        if(this.totalSeq >= 2) {
            var total_share = $(elm).closest('.share-top-new').find('.count');
    		if (typeof $(total_share) !== 'undefined') {
                $({someValue: 0}).animate({someValue: this.totalCount}, {
                    duration: 1500,
                    easing:'swing',
                    step: function() {
                      $(total_share).find('strong').text(Math.round(this.someValue));
                    }
                });
                setTimeout(function(){$(total_share).find('strong').text(shareBox.totalCount)}, 1600)
    		}
        }
    },
	// countFB : function (elm) {
    //     var pageUrl	= $(elm).attr('data-url')
    //     pageUrl = pageUrl.split('?')[0]
    //     var total_share = 0
    //     //var access_token = "EAACq8uky8B0BANwrioHW5WfCpQudoMow2ZAvmGo06Hd1GRZAdvg7iLlZBLQZA1jt0uhpe2NZAuhhnKsT9HGqVVEijHMPfQDmutJNVup69GPnPGAaWeZCXuiMPu2k49tpcauXA1aI6PfLGhQbbi6gGo2r2Q8WzZCjBwZD"
    //     //
    //     //FB.api("https://graph.facebook.com/v2.7/?id=" + pageUrl + "&access_token=" + access_token,
    //     //   function(data){
    //     //       var totalFb = 0;
    //     //       if (data && !data.error) {
    //     //           totalFb = data.share.share_count
    //     //            if(typeof($(elm).find('.nolabel').html()) != 'undefined')
    //     //                $(elm).find('.nolabel').html(totalFb);
    //     //            else
    //     //                $(elm).find('span').html('Share '+totalFb);
    //     //       }
    //     //       shareBox.updateCounter(elm, 'facebook', totalFb)
    //     //   }
    //     //);

    //     FB.api(
    //         "/",
    //         {
    //             "id": pageUrl
    //         },
    //         function(data){
    //            var totalFb = 0;
    //            if (data && !data.error) {
    //                totalFb = data.share.share_count
    //                 if(typeof($(elm).find('.nolabel').html()) != 'undefined')
    //                     $(elm).find('.nolabel').html(totalFb);
    //                 else
    //                     $(elm).find('span').html('Share '+totalFb);
    //            }
    //            shareBox.updateCounter(elm, 'facebook', totalFb)
    //        }
    //     );

    //     // $.getJSON('http://graph.facebook.com/?ids=' + pageUrl, function(data){
    //     //     Object.keys(data).forEach(function(key){
    //     //         var value = data[key]
    //     //         Object.keys(value).forEach(function(index){
    //     //             if(index == 'share') {
    //     //                 var val = value[index]
    //     //                 totalFb = val.share_count
    //     //             }
    //     //         })
    //     //     });
    //     //     shareBox.updateCounter(elm, totalFb)
    //     // });
	// },
	countTW : function (elm) {
		var pageUrl	= $(elm).attr('data-url');

		var tweets;
        /*$.getJSON('http://urls.api.twitter.com/1/urls/count.json?url=' + pageUrl + '&callback=?', function(data){
            tweets = data.count;
			$(elm).find('span').html(tweets);

			// update total share
			var total_share = $(elm).closest('.share_top').find('.total_share');
			if (typeof $(total_share) !== 'undefined') {
				var num = $(total_share).find('span').html();
				num = parseInt(num) + parseInt(tweets);
				$(total_share).find('span').html(num);
			}
        });*/
	},
	countGplus : function (elm) {
		var pageUrl	= $(elm).attr('data-url');
		//var api_url = baseurl+'share?url='+ pageUrl;
        var api_url = '';

		$.ajax({
			url: api_url,
			dataType: 'json',
			contentType: 'application/json',
			type: 'GET',
			processData: false,
			success: function(data) {
				var google_pluses = data;

				if(typeof($(elm).find('.nolabel').html()) != 'undefined')
					$(elm).find('.nolabel').html(google_pluses);
				else
					$(elm).find('span').html('Share '+google_pluses);

                shareBox.updateCounter(elm, 'gplus', google_pluses)
			}
		})
	},
	countLine : function(elm) {

	},
	countComment : function (elm) {
		$.getJSON('//apicomment.detik.com/api/comments/old/?count&callback=?',{
			key:article.idnews,
			group:article.idkanal,
			format:'jsonp'
		},function(response){
			if(typeof($(elm).find('.nolabel').html()) != 'undefined')
				$(elm).find('.nolabel').html(response);
			else
				$(elm).find('span').html(response+' komentar');
		})
	},
	run : function(elm) {
		$(elm).find('a').each(function(key, cshare){
			if($(cshare).attr('class') != 'count')
				shareBox.addCounter(cshare)
		})
	},
    includeFb : function() {

    }
};
.35)}.form-check--checkbox label:after{font-size:16px}.form-check--inline{display:inline-flex;align-items:center;margin-right:12px}.form-check--inline__input{position:static;margin-top:0;margin-right:8px;margin-left:0}.form-check--inline label:before,.form-check--inline label:after{top:5px}.form-element,.tagsinput{display:block;width:100%;height:42px;padding:8px 12px;border:1px solid #e6e6e6;line-height:1.4;background-color:#FFFFFF;color:#333333;font-size:14px;-webkit-transition:border-color 0.25s ease-in-out,box-shadow 0.25s ease-in-out;-moz-transition:border-color 0.25s ease-in-out,box-shadow 0.25s ease-in-out;-ms-transition:border-color 0.25s ease-in-out,box-shadow 0.25s ease-in-out;-o-transition:border-color 0.25s ease-in-out,box-shadow 0.25s ease-in-out;transition:border-color 0.25s ease-in-out,box-shadow 0.25s ease-in-out}.form-element:focus,.tagsinput:focus{border-color:#cccccc}.form-element[type="date"],.tagsinput[type="date"]{padding-top:7px;padding-bottom:7px}.form-element--error,.form-element--error:focus{color:#b30000!important;background:#ffd6d6;border-color:#ff8080}.form-inline .form-element,.form-inline .tagsinput{display:inline-block;width:auto;vertical-align:middle}.form-rounded .form-element,.form-rounded .tagsinput{border-radius:24px}.form-gray .form-element,.form-gray .tagsinput{background-color:#f7f7f7}.form-file{position:relative;width:100%;height:42px;padding:8px 12px 0 20px;margin:0;-webkit-transition:all 0.3s ease-in-out 0s;-moz-transition:all 0.3s ease-in-out 0s;-ms-transition:all 0.3s ease-in-out 0s;-o-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s;font-size:16px}.form-file:before{position:absolute!important;left:0;top:0;line-height:1.4;content:'Pilih file';z-index:1;font-size:16px;display:inline-block;line-height:1.4;padding:8px 16px;text-align:center;cursor:pointer;vertical-align:top;border:1px solid transparent;border-radius:4px;background:#e6e6e6;color:#000000;-webkit-transition:all 0.3s ease-in-out 0s;-moz-transition:all 0.3s ease-in-out 0s;-ms-transition:all 0.3s ease-in-out 0s;-o-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s}.form-file:after{content:"";position:absolute;left:0;top:0;width:117px;height:37px;background:#fff}.form-file__input{position:absolute;left:12px}.form-element:disabled,.tagsinput:disabled,.form-element[readonly],.tagsinput[readonly],.form-gray .form-element:disabled,.form-gray .tagsinput:disabled,.form-gray .form-element[readonly],.form-gray .tagsinput[readonly]{background-color:#f0f0f0}.btn,.label{position:relative;font-size:16px;display:inline-flex;align-items:center;line-height:1.4;padding:8px 16px;justify-content:center;cursor:pointer;vertical-align:top;border:1px solid transparent;border-radius:4px}.btn--default,.label--default{background:#f0f0f0;color:#000000}.btn--rounded,.label--rounded{padding-left:24px;padding-right:24px;border-radius:24px}.btn--sm,.label--sm{font-size:12px;padding:calc(12px / 3) 12px}.btn--md,.label--md{font-size:14px;padding-top:6px;padding-bottom:6px}.btn--lg,.label--lg{font-size:20px;padding:8px 32px}.btn:hover{color:#000000;opacity:0.8;filter:alpha(opacity=80)}.btn--rounded.btn--sm{padding-left:16px;padding-right:16px;border-radius:16px}.btn--rounded.btn--lg{padding-left:48px;padding-right:48px;border-radius:32px}.btn--default.btn--outline{border:1px solid #666666;color:#666666}.btn--default.btn--link{color:#007cbd}.btn--outline{border:1px solid #000000;color:#000000}.btn--link:hover{text-decoration:underline;opacity:1;filter:alpha(opacity=100)}.btn--outline,.btn--link{background:transparent!important}.btn--block{display:block;text-align:center;width:100%}.form-inline .btn{margin-bottom:0}.form-rounded .btn{padding-left:24px;padding-right:24px;border-radius:24px}.label{cursor:inherit}.label--rounded.label--sm{padding-left:16px;padding-right:16px;border-radius:16px}.label--rounded.label--lg{padding-left:48px;padding-right:48px;border-radius:32px}.btn--sosmed-instagram{color:#FFFFFF;border:none;background:#5851DB;background:-moz-radial-gradient(left bottom,ellipse cover,#ffdc80 15%,#e1306c 55%,#5851db 100%);background:-webkit-radial-gradient(left bottom,ellipse cover,#ffdc80 15%,#e1306c 55%,#5851db 100%);background:radial-gradient(ellipse at left bottom,#ffdc80 15%,#e1306c 55%,#5851db 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='$top_color',endColorstr='$bottom_color',GradientType=1)}.btn--sosmed-instagram:hover{color:#FFFFFF;border:none}.pagination{display:block;font-size:14px}.pagination a{text-align:center;display:inline-block;padding:4px 8px}.pagination a:first-child{margin-right:16px}.pagination a:last-child{margin-left:16px}.pagination__item:hover{background:#f0f0f0;color:#000000;border-radius:4px}.pagination__item--active,.pagination__item--active:hover{background:var(--kuler-1);color:#FFFFFF;border-radius:4px}.pagination__range{letter-spacing:4px;background:transparent}@font-face{font-family:"detiknetwork-FF";font-weight:normal;font-style:normal;src:local("Helvetica-FF, Arial, Tahoma, sans-serif"),url("../../../assets/fonts/icons/detiknetwork.eot");src:local("Helvetica-FF, Arial, Tahoma, sans-serif"),url("../../../assets/fonts/icons/detiknetwork.woff2") format("woff2"),url("../../../assets/fonts/icons/detiknetwork.woff") format("woff"),url("../../../assets/fonts/icons/detiknetwork.ttf") format("truetype"),url("../../../assets/fonts/icons/detiknetwork.eot?#iefix") format("embedded-opentype");font-display:swap}.icon{line-height:0;display:inline-flex;vertical-align:middle}.icon--xxl{font-size:256px}.icon--xl{font-size:128px}.icon--lg{font-size:64px}.icon--md{font-size:32px}.icon--sm{font-size:24px}.icon--xs{font-size:16px}.btn .icon,.label .icon{margin:0 4px}[data-icon]:before{font-family:"detiknetwork-FF"!important;content:attr(data-icon);font-style:normal!important;font-weight:normal!important;font-variant:normal!important;text-transform:none!important;speak:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;vertical-align:middle}[class^="icon-"]:before,[class*=" icon-"]:before{font-family:"detiknetwork-FF"!important;font-style:normal!important;font-weight:normal!important;font-variant:normal!important;text-transform:none!important;speak:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;vertical-align:middle}.icon-home:before{content:"\63"}.icon-home-bg:before{content:"\64"}.icon-chevron-right:before{content:"\65"}.icon-chevron-right-bg:before{content:"\66"}.icon-chevron-left:before{content:"\67"}.icon-chevron-left-bg:before{content:"\68"}.icon-arrow-right:before{content:"\69"}.icon-arrow-left:before{content:"\6a"}.icon-chevron-up:before{content:"\6b"}.icon-chevron-up-bg:before{content:"\6c"}.icon-chevron-down:before{content:"\6d"}.icon-chevron-down-bg:before{content:"\6e"}.icon-arrow-up:before{content:"\6f"}.icon-arrow-down:before{content:"\70"}.icon-search:before{content:"\71"}.icon-search-bg:before{content:"\72"}.icon-user:before{content:"\73"}.icon-user-bg:before{content:"\74"}.icon-live-tv:before{content:"\75"}.icon-live-tv-bg:before{content:"\76"}.icon-tv:before{content:"\77"}.icon-tv-bg:before{content:"\78"}.icon-menu:before{content:"\79"}.icon-menu-bg:before{content:"\7a"}.icon-lock:before{content:"\41"}.icon-lock-bg:before{content:"\42"}.icon-open-lock:before{content:"\43"}.icon-open-lock-bg:before{content:"\44"}.icon-doc:before{content:"\45"}.icon-doc-bg:before{content:"\46"}.icon-calendar:before{content:"\47"}.icon-calendar-bg:before{content:"\48"}.icon-check:before{content:"\49"}.icon-check-bg:before{content:"\4a"}.icon-trash:before{content:"\4b"}.icon-trash-bg:before{content:"\4c"}.icon-pencil:before{content:"\4d"}.icon-pencil-bg:before{content:"\4e"}.icon-close:before{content:"\4f"}.icon-close-bg:before{content:"\50"}.icon-card:before{content:"\51"}.icon-card-bg:before{content:"\52"}.icon-network:before{content:"\53"}.icon-network-bg:before{content:"\54"}.icon-email:before{content:"\55"}.icon-email-bg:before{content:"\56"}.icon-info:before{content:"\57"}.icon-info-bg:before{content:"\58"}.icon-warning:before{content:"\59"}.icon-warning-bg:before{content:"\5a"}.icon-video:before{content:"\30"}.icon-video-bg:before{content:"\31"}.icon-image:before{content:"\32"}.icon-image-bg:before{content:"\33"}.icon-file-text:before{content:"\34"}.icon-file-text-bg:before{content:"\35"}.icon-graphic:before{content:"\36"}.icon-graphic-bg:before{content:"\37"}.icon-folder:before{content:"\38"}.icon-folder-bg:before{content:"\39"}.icon-notification:before{content:"\21"}.icon-notification-bg:before{content:"\22"}.icon-download:before{content:"\23"}.icon-download-bg:before{content:"\24"}.icon-upload:before{content:"\25"}.icon-upload-bg:before{content:"\26"}.icon-filter:before{content:"\27"}.icon-filter-bg:before{content:"\28"}.icon-sent-mail:before{content:"\29"}.icon-sent-mail-bg:before{content:"\2a"}.icon-play:before{content:"\2b"}.icon-play-bg:before{content:"\2c"}.icon-comment:before{content:"\2d"}.icon-comment-bg:before{content:"\2e"}.icon-plus:before{content:"\2f"}.icon-plus-bg:before{content:"\3a"}.icon-favorite:before{content:"\3b"}.icon-favorite-bg:before{content:"\3c"}.icon-share:before{content:"\3d"}.icon-share-bg:before{content:"\3e"}.icon-setting:before{content:"\3f"}.icon-setting-bg:before{content:"\40"}.icon-crown:before{content:"\5b"}.icon-crown-bg:before{content:"\5d"}.icon-zoom:before{content:"\5e"}.icon-zoom-bg:before{content:"\5f"}.icon-quote-right:before{content:"\60"}.icon-quote-left:before{content:"\7b"}.icon-camera:before{content:"\7c"}.icon-camera-bg:before{content:"\7d"}.icon-link:before{content:"\7e"}.icon-link-bg:before{content:"\5c"}.icon-love:before{content:"\e000"}.icon-love-bg:before{content:"\e001"}.icon-sign-out:before{content:"\e002"}.icon-sign-out-bg:before{content:"\e003"}.icon-sign-in:before{content:"\e004"}.icon-sign-in-bg:before{content:"\e005"}.icon-facebook:before{content:"\61"}.icon-twitter:before{content:"";background-image:url("data:image/svg+xml,%3Csvg width='18' height='17' viewBox='0 0 18 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.425986 0.877441L6.99437 9.65591L0.390625 16.7901H1.8758L7.65739 10.5399L12.3339 16.7901H17.3906L10.4598 7.51655L16.6038 0.877441H15.1187L9.79676 6.63251L5.49151 0.877441H0.434827H0.425986ZM2.60955 1.97364H4.93457L15.1982 15.6939H12.8732L2.60955 1.97364Z' fill='white'/%3E%3C/svg%3E%0A");background-repeat:no-repeat;background-position:center;background-size:contain;width:18px;height:16px}.icon-instagram:before{content:"\e006"}.icon-linkedin:before{content:"\e007"}.icon-youtube:before{content:"\e008"}.icon-refresh:before{content:"\e009"}.icon-eye:before{content:"\e00a"}.icon-back-in-time:before{content:"\e00b"}.icon-whatsapp:before{content:"\e00c"}.icon-code:before{content:"\e00d"}.icon-telegram:before{content:"\e00e"}.icon-tiktok:before{content:"";width:16px;height:18px;background-image:url("data:image/svg+xml,%3Csvg width='20' height='22' viewBox='0 0 20 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.96337 19.1587C-1.43553 15.3416 1.4095 6.84288 8.17224 7.91213V8.69927C2.46079 8.43365 -0.053318 15.2464 2.96337 19.1587ZM15.2989 4.41544C15.9938 4.97071 16.9521 5.3803 18.2731 5.45848V6.22958C16.8113 5.9596 15.8848 5.23316 15.2989 4.41544ZM13.4649 0.355957C13.4639 0.640509 13.5008 0.946185 13.5474 1.2254H10.8514V14.6486C10.8514 15.2675 10.7878 15.8184 10.6611 16.3018C9.56319 18.7217 6.45472 18.4056 5.59573 16.7449C6.87451 17.5456 8.97733 17.333 9.84046 15.4324C9.96623 14.9499 10.0298 14.3978 10.0298 13.7792V0.355957H13.4651H13.4649Z' fill='%2300F7EF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.287 1.22559V1.24282C14.288 1.5536 14.379 6.04768 19.0953 6.3281C19.0953 10.509 19.0974 6.32811 19.0974 9.80052C18.7432 9.82164 15.9931 9.62279 14.2819 8.09636L14.2766 14.8562C14.3188 17.9171 12.6149 20.9189 9.42486 21.5237C8.53114 21.693 7.72628 21.7121 6.37539 21.4169C-1.40683 19.089 1.17915 7.54644 8.99317 8.78176C8.99317 12.5081 8.99536 8.78079 8.99536 12.5081C5.76719 12.0332 4.68725 14.7188 5.54528 16.6414C6.3261 18.392 9.54018 18.7717 10.6614 16.302C10.7884 15.8186 10.8517 15.2675 10.8517 14.6488V1.22559H14.287Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.17395 8.69921C8.44029 8.71087 8.7144 8.73709 8.99483 8.78152C8.99483 12.5079 8.99701 8.78055 8.99701 12.5079C5.76885 12.033 4.68891 14.7185 5.54694 16.6412C5.56272 16.6761 5.57971 16.7111 5.59768 16.7449C5.21383 16.5047 4.905 16.1748 4.72533 15.7717C3.86852 13.8488 4.94724 11.1636 8.17541 11.6382C8.17541 8.22285 8.17443 11.065 8.17443 8.69897L8.17395 8.69921ZM18.2748 6.22977C18.5317 6.27712 18.8058 6.31087 19.0967 6.3281C19.0967 10.509 19.0989 6.3281 19.0989 9.80052C18.7446 9.82164 15.9945 9.62279 14.2833 8.09636L14.278 14.8562C14.3202 17.9171 12.6163 20.9189 9.42627 21.5237C8.53255 21.693 7.7277 21.7121 6.3768 21.4169C4.85595 20.9622 3.7328 20.1541 2.96484 19.1587C3.64903 19.7531 4.50779 20.2343 5.55616 20.5484C6.9056 20.8425 7.7107 20.8235 8.60442 20.6541C11.7945 20.049 13.4984 17.0474 13.4571 13.9875L13.4615 7.22668C15.1727 8.75311 17.9228 8.95293 18.2782 8.93059C18.2782 5.70583 18.2751 9.08088 18.2751 6.22953L18.2748 6.22977ZM14.2884 1.22559V1.24282C14.2884 1.42565 14.3212 3.04823 15.3006 4.41563C14.1202 3.47117 13.6994 2.10692 13.5491 1.22559H14.2884Z' fill='%23FF004F'/%3E%3C/svg%3E%0A");background-repeat:no-repeat;background-position:center;background-size:contain}.notification-overlay{width:300px;position:fixed;top:215px;left:50%;z-index:12;padding:12px 16px;color:var(--kuler-1);background:#FFFFFF;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);box-shadow:0 0 8px 0 rgba(0,0,0,0.15);-webkit-transition:all 0.3s ease-in-out 0s;-moz-transition:all 0.3s ease-in-out 0s;-ms-transition:all 0.3s ease-in-out 0s;-o-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s}.notification-overlay__close{position:absolute;top:calc(4px / 2);right:4px;color:#999999}.notification-overlay a:hover .icon{-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg);-webkit-transition:all 0.5s ease-in-out 0s;-moz-transition:all 0.5s ease-in-out 0s;-ms-transition:all 0.5s ease-in-out 0s;-o-transition:all 0.5s ease-in-out 0s;transition:all 0.5s ease-in-out 0s}.notification-overlay--alpha{opacity:0.5;filter:alpha(opacity=50)}.loader-animate{width:32px;margin:12px auto}.copy_url{position:relative}.copy_url .notif{display:inline-block;padding:8px;margin:0;position:absolute;z-index:5;bottom:0%;left:50%;width:auto;white-space:nowrap;font-size:14px;background:#FF0000;color:#FFFFFF;opacity:0;filter:alpha(opacity=0);-webkit-transform:translateX(-50%) scale(0);-moz-transform:translateX(-50%) scale(0);-ms-transform:translateX(-50%) scale(0);-o-transform:translateX(-50%) scale(0);transform:translateX(-50%) scale(0);-webkit-transition:all 0.3s ease-in-out 0s;-moz-transition:all 0.3s ease-in-out 0s;-ms-transition:all 0.3s ease-in-out 0s;-o-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s}.copy_url .notif:before{position:absolute;content:"";border:3px solid;right:50%;margin:0 -7px 0 0;top:100%;border-top:8px solid #ff0000;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:none}.sticky-share .copy_url .notif:before{top:-7px;border-bottom:8px solid #FF0000;border-left:7px solid transparent;border-top:none;border-right:7px solid transparent}.copy_url .notif.url_copied{display:inline-block;bottom:135%;opacity:1;filter:alpha(opacity=100);-webkit-transform:translateX(-50%) scale(1);-moz-transform:translateX(-50%) scale(1);-ms-transform:translateX(-50%) scale(1);-o-transform:translateX(-50%) scale(1);transform:translateX(-50%) scale(1)}.sticky-share .copy_url .notif.url_copied{bottom:-160%}.livereport_notif{text-align:center;padding-top:16px;z-index:3}.livereport_notif a:hover i{transform:rotate(360deg);transition:2s}@media (min-width:1024px) and (max-width:1280px){.navbar-first .nav__item a,.navbar-second .nav__item a{padding:12px 7px}}.nav__item--new a:after,.nav__item--live a:after{content:"";width:5px;height:5px;background:#FF0000;position:absolute;top:12px;right:4px;overflow:hidden}.nav--column .nav__item--new a:after,.nav__item--new .nav--column a:after,.nav--column .nav__item--live a:after,.nav__item--live .nav--column a:after{top:4px}.navbar-second .nav{margin-left:8px}.nav{position:relative;list-style:none;margin:0;padding:0;font-size:14px}.navbar-second .dropdown-menu .nav{margin-left:0}.nav a{display:block}.nav__item{position:relative;padding:0}.nav__item a{padding:12px 10px}.navbar-first .nav__item a{color:#FFFFFF}.navbar-first .nav__item a:hover{color:#fcc43f}.is-sticky .navbar-first .nav__item a{color:inherit}.is-sticky .navbar-first .nav__item a:hover{color:var(--kuler-1)}.navbar-first .dropdown-menu .nav__item a{color:#000000}.navbar-first .dropdown-menu .nav__item a:hover{color:var(--kuler-1)}.nav--column .nav__item a{padding:4px 0}.footer-nav .nav__item a{font-size:12px;color:#666666}.static-nav .nav__item a{padding:12px 0;font-size:14px}.static-nav .nav__item a:hover{color:var(--kuler-3)}.sitemap-nav .nav__item a{padding:4px 0;font-size:14px;color:#333333}.nav__item--active a{color:var(--kuler-1)}.navbar-first .nav__item--active a{color:#fcc43f}.is-sticky .navbar-first .nav__item--active a{color:var(--kuler-1)}.static-nav .nav__item--active a{color:var(--kuler-3)}.nav__item--new{position:relative}.nav__item--new a{color:#75b72e}.nav__item--live{position:relative}.nav__item--live a{color:var(--kuler-1)}.nav--column .nav__item{display:inline-block;width:100%;vertical-align:top}.static-nav .nav__item{border-bottom:1px solid #e6e6e6}.static-nav .nav__item a{justify-content:space-between}.nav--center{justify-content:center}.nav--right{justify-content:flex-end}.nav--column{flex-direction:column;width:100%}.nav--column-2{display:inherit!important;