
/*!---- gatag-----*/
var filetypes = /\.(zip.*|exe.*|dmg.*|pdf.*|doc.*|xls.*|ppt.*|mp3.*|txt.*|rar.*|wma.*|mov.*|ics.*|vcf.*|avi.*|wmv.*|flv.*|wav.*)$/i;
var baseHref = '';
if ($j('base').attr('href') != undefined) baseHref = $j('base').attr('href');
var hrefRedirect = '';
$j(document).ready(function(){
$j('body').on('click', 'a', function(event) {

if(typeof window.CookieConsent == "undefined" || typeof window.CookieConsent.categories == "undefined" || typeof window.CookieConsent.categories.performanceCookies == "undefined" || window.CookieConsent.categories.performanceCookies)
{ 

	var el = $j(this);
	var track = true;
	var href = (typeof(el.attr('href')) != 'undefined' ) ? el.attr('href') : '';
	var isThisDomain = href.match(document.domain.split('.').reverse()[1] + '.' + document.domain.split('.').reverse()[0]);
	if (!href.match(/^javascript:/i)) {
		var elEv = []; elEv.value=0, elEv.non_i=false;
		if (href.match(/^mailto\:/i)) {
			elEv.category = 'email';
			elEv.action = 'click';
			elEv.label = href.replace(/^mailto\:/i, '');
			elEv.loc = href;
		}
		else if (href.match(filetypes)) {
			var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
			elEv.category = 'download';
			elEv.action = 'click-' + extension[0];
			elEv.label = href.replace(/ /g,'-');
			elEv.loc = baseHref + href;
		}
		else if (href.match(/^https?\:/i) && !isThisDomain) {
			elEv.category = 'external';
			elEv.action = 'click';
			elEv.label = href.replace(/^https?\:\/\//i, '');
			elEv.non_i = true;
			elEv.loc = href;
		}
		else if (href.match(/^tel\:/i)) {
			elEv.category = 'telephone';
			elEv.action = 'click';
			elEv.label = href.replace(/^tel\:/i, '');
			elEv.loc = href;
		}
		else track = false;
		
    
		if (track) {
			var ret = true;

			if((elEv.category == 'external' || elEv.category == 'download') && (el.attr('target') == undefined || el.attr('target').toLowerCase() != '_blank') && (elEv.loc.search("youtube") <= 0) ) {
				hrefRedirect = elEv.loc;

				ga('send','event', elEv.category.toLowerCase(),elEv.action.toLowerCase(),elEv.label.toLowerCase(),elEv.value,{
					'nonInteraction': elEv.non_i ,
					'hitCallback':gaHitCallbackHandler
				});

				ret = false;
			}
			else {
				ga('send','event', elEv.category.toLowerCase(),elEv.action.toLowerCase(),elEv.label.toLowerCase(),elEv.value,{
					'nonInteraction': elEv.non_i
				});
			}

			return ret;
		}
	}
}
});
});

gaHitCallbackHandler = 

/*!---- ir-menu-----*/
$j(document).ready(function(){

/*
	$j('#section-investors-level2 div ul li').remove();

    $j('#hidden-nav-investors-level1 ul li.level2').each(function(i,v){
        if(i < 6){
            $j(this).appendTo('#section-investors-level2 div.level1-col1 > ul');
        }
        else if(i>5 && i<12){
            $j(this).appendTo('#section-investors-level2 div.level1-col2 > ul');
        }
        else if(i>11 && i<13){
        	$j(this).appendTo('#section-investors-level2 div.level1-col3 > ul');
        }
        else{
        	$j(this).appendTo('#section-investors-level2 div.level1-col4 > ul');
        }
    });
  */  
   
    
  /*$j('.desk-nav ul li.level1').hover(function(){
    	$j(this).find('> ul li').animate({
        	opacity: 1
        },1);
    },function(){
    	$j(this).find('> ul li').animate({
        	opacity: 0
        },1);
    });*/
    
   
    
    
    
    if(is_touch_device()){
    //alert();
    	//$j('.desk-nav ul li.level1> ul li').css('opacity','1 !important');
        
        if(!window.navigator.msPointerEnabled){
        
        	
            
            
            
        }
        else{
        $j('#topnavigation ul li.level1').one( "click", function(e) {
                e.preventDefault();
                $j('.topnavigation ul li.level1 > ul').hide();
                $j(this).find('>ul').show();
            });
        }
        
    }
    
    
});
/*!---- new-resp-table-----*/
    ;(( $j, window, document );
    $j(document).ready(function(){
      $j('.rad-responsive').each(;
      
    });
/*!---- selfserve-----*/
$j(document).ready(function(){
    $j("body.ip3-edit a.scWebEditContentEditorButton").parent().css({"z-index": "9"});
});
/*!---- mmenu-----*/
/*
 * jQuery mmenu v5.6.2
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */
! $j)
, /*	
 * jQuery mmenu offCanvas addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
$j)
, /*	
 * jQuery mmenu scrollBugFix addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
$j)
, /*	
 * jQuery mmenu backButton addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
$j)
, /*	
 * jQuery mmenu autoHeight addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
$j)
, /*	
 * jQuery mmenu counters addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
$j)
, /*	
 * jQuery mmenu columns addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
$j)
, /*	
 * jQuery mmenu dividers addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
$j)
, /*	
 * jQuery mmenu dropdown addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
$j)
, /*	
 * jQuery mmenu dragOpen addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
$j)
, /*	
 * jQuery mmenu fixedElements addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
$j)
, /*	
 * jQuery mmenu iconPanels addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
$j)
, /*	
 * jQuery mmenu navbar addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
$j)
, /*	
 * jQuery mmenu navbar addon breadcrumbs content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
$j)
, /*	
 * jQuery mmenu navbar addon close content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
$j)
, /*	
 * jQuery mmenu navbar addon next content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
$j)
, /*	
 * jQuery mmenu navbar addon prev content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
$j)
, /*	
 * jQuery mmenu navbar addon searchfield content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
$j)
, /*	
 * jQuery mmenu navbar addon title content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
$j)
, /*	
 * jQuery mmenu screenReader addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
$j)
, /*	
 * jQuery mmenu searchfield addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
$j)
, /*	
 * jQuery mmenu sectionIndexer addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
$j)
, /*	
 * jQuery mmenu setSelected addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
$j)
, /*	
 * jQuery mmenu toggles addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
$j);
var API;
$j(document).ready(function () {
    /* $j('#menu').mmenu({
            offCanvas: {
                position: "left",
                zposition: "front"
            },
            "slidingSubmenus": true
        }, {
            offCanvas: {
           
                position: "right",
                menuWrapperSelector: '.mobilemenuwrapper'
            }
        });
   
        
        */
    $j("#menu").mmenu({

    
        offCanvas: {
            position: "right"
        }
    }, {
        offCanvas: {
            pageSelector: "#MainWrapper"
            , position: "right"
            , menuWrapperSelector: '#MainForm'
        }
    });
    
    
    
    
    
    
    
    
    
    
  $j(".mm-menu").prepend($j('#mobishowsearch').clone());
  
  
  
  
  $j(".header-wrapper #mobishowsearch").remove();
    /*--open close starts--*/
   API = $j("#menu").data("mmenu");
    $j('#mmenu-burger').on('click', function (e) {
        //e.stopPropagation();
        if ($j(this).hasClass('active')) {
            API.close();
            $j(this).removeClass('active');
        }
        else {
            $j(this).addClass('active');
            API.open();
            if ($j('#menu li.current:last').hasClass('haschildren')) {
                var open_page_parent = $j('#menu li.current:last').find('a.mm-next').attr('href');
            }
            else {
                var open_page_parent = $j('#menu li.current:last').parent('ul').parent('div').find('a.mm-prev').attr('href');
            }
            var selected = false;
            if (open_page_parent == undefined) {
                if ($j('#menu li.selected:last').hasClass('haschildren')) {
                    var open_page_parent = $j('#menu li.selected:last').find('a.mm-next').attr('href');
                }
                else {
                    var open_page_parent = $j('#menu li.selected:last').parent('ul').parent('div').find('a.mm-prev').attr('href');
                }
                selected = true;
            }
            if (open_page_parent) {
                //$j(open_page_parent).find('li.selected a.mm-subopen').click();
                $j(".mm-panel").removeClass("mm-opened mm-subopened");
                $j(".mm-panel.mm-current").addClass("mm-hidden");
                $j(".mm-panel.mm-current").removeClass("mm-highest mm-current mm-opened");
                $j('#mm-1').removeClass("mm-current");
                if (selected) {
                    if ($j('#menu li.selected:last').hasClass('haschildren')) {
                        $j('div' + open_page_parent).removeClass('mm-hidden').addClass('mm-highest mm-current mm-opened');
                        openMenu($j('#menu li.selected:last').find('a.mm-next').attr('href'));
                    }
                    else {
                        $j('#menu li.selected:last').parent('ul').parent('div').removeClass('mm-hidden').addClass('mm-highest mm-current mm-opened');
                    }
                    openMenu($j('#menu li.selected:last').parent('ul').parent('div'));
                }
                else {
                    if ($j('#menu li.current:last').hasClass('haschildren')) {
                        $j('div' + open_page_parent).removeClass('mm-hidden').addClass('mm-highest mm-current mm-opened');
                        openMenu($j('#menu li.current:last').find('a.mm-next').attr('href'));
                    }
                    else {
                        $j('#menu li.current:last').parent('ul').parent('div').removeClass('mm-hidden').addClass('mm-highest mm-current mm-opened');
                        openMenu($j('#menu li.current:last').parent('ul').parent('div'));
                    }
                }
                $j(open_page_parent).removeClass("mm-hidden");
            }
            var maxHeight = viewport().height;
            $j(".mm-menu").height(maxHeight);
        }
    });
    $j('.skip-block').insertBefore('#menu');
});

function openMenu(parentSelector) {
    var prevParent = $j(parentSelector).find("a.mm-prev").attr("href");
    $j(prevParent).addClass("mm-opened mm-subopened mm-hidden");
    if (prevParent == "#mm-0") {
        return;
    }
    else {
        openMenu(prevParent);
    }
}
/*!---- responsive-----*/
/*!
 * jQuery lightweight responsive web adaptation plugin
 * Original author: @stildv
 * Copyright © 2011: Devrim Vardar, @stildv -- http://stild.com/
 * Further changes, comments: @stildv -- http://stild.com/code/jquery-responsive-web/
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://stild.com/license/
 * Date: Thu Oct 20 01:27:32 2011 +0300
 * Version: 1.00 (20-OCT-2010)
 * PS. I am not a wonderful coder, I neither have the patience nor the repertoire so this is almost as good as I get. Cheers. :)
 */
;
)($j, window, document);



function rearrangeObjects() {
  
  $j('#searchTextboxContainer input,#searchbox.search-wrapper #SearchButtonContainer .srchbtn').css('min-height',$j('.header-ticker').outerHeight());
  
  //window.setTimeout(FrameManager.resizeFrames, 300);
  currWidth = viewport().width;
  setEqualHeight_CommonClass(".ir-graph-img");
  setEqualHeight_CommonClass(".heads-wrap");
  
  
  setEqualHeight_CommonClass(".meet-bod-details");
  setEqualHeight_CommonClass(".meet-name > a");
  setEqualHeight_CommonClass(".meet-bod");
  
  
  /******** for bod black **********/
  setEqualHeight_CommonClass(".bod-details");
  
  /********* for bod black ends ********/
  
  if(currWidth > 991){
    setEqualHeight_CommonClass(".rc-box");
  }
  else if(currWidth < 992 && currWidth > 767){        
    $j('.rc-box').css('height','auto');
  }
  
  
  if(currWidth > 767){
    setEqualHeight_CommonClass(" .bodWrapper .eqbod");
    
    $j('.news-item').each(function(){
      setEqualHeight_CommonClass($j(this).find('.equal'));
    });
    
    setEqualHeight_CommonClass(".grey-box");
    setEqualHeight_CommonClass(".color-box");
    setEqualHeight_CommonClass(".tabs-area .tab");
    setEqualHeight_CommonClass(".text-subtitle");
    setEqualHeight_CommonClass(".sub-big");
    setEqualHeight_CommonClass(".vidItem");
    setEqualHeight_CommonClass(".technology-item");
	setEqualHeight_CommonClass(".chinese-news-box");
	  
	
	setEqualHeight_CommonClass("#recent-media-coverage-list > div");
    
    setTimeout,500);  
    
  }  
  else{
    $j('.equal,.technology-item').css('height','auto');
    $j('.meet-our-people').css('height','auto');
    $j('.bottom-colored-boxes').each);
  }
  
  
}
var isMobile;

$j(document).ready);
$j(window).load(function(){
  setTimeout,300);  
});
/*!---- slick-----*/
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.9
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
);

$j(document).ready(function(){
	if ($j(window).width() < 768) {
        $j('.four-blocks-wrapper').slick({
            infinite: false,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '8%',
            centerMode: true,
            dots: false
        });
        
    }
    
    $j('.ticker-slider').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:true
        });
	});
/*!---- main-----*/
function checkSnapdownDeeplinking() {
  /* --------- Deep linking related ----------------- */
  if (window.location.hash.length) {
    
    var hashValue = window.location.hash;
    
    if ($j('.snapWrapper').length) {
		$j('.snapdownItem').removeClass('active');
		$j('.snapdownItem .snapdown-content').slideUp();
      $j('.snapWrapper .snap-content').slideUp();
      $j('.snapWrapper .snapdownItem[data-id=' + hashValue.slice(1) + '] .snapdown-title').trigger('click');  
		//$j('html,body').animate({scrollTop: $j(this).parent().offset().top - 300},500);
    }
    
  } 
  /* --------- Deep linking related----------------- */
}

$j(window).on("orientationchange",function(){
  if($j(window).width() > 991){
    $j('.ticker-desktop').slick('unslick');
  }
  else{
    //$j('.header-ticker').slick('unslick');
    $j('.ticker-desktop').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots:true
    });
  }
});





$j(document).on('click touchstart', function(event) {
  
  if (!$j(event.target).closest('.srchbtn').length && !$j(event.target).closest('#searchTextboxContainer').length) {
    if ($j('#searchTextboxContainer').width() !== 0) {      
      $j('#searchTextboxContainer > ul').hide();
      $j('#searchTextboxContainer').stop().animate({
        width: '0px'
      }, 800);
      $j("#searchbox").toggleClass("open");
    }
  }  
  
});


/********** Added extra to close tabs on click any doc *********/

$j(document).on('click touchend', function(event) {
  if (!$j(event.target).closest('.tabmobi').length && !$j(event.target).closest('.stories-categories-filter-wrap').length){
    
    $j('.yeartabselectmobi').next('ul').slideUp();
    $j('.yeartabselectmobi').removeClass('selected');
    
    $j('.stories-options').slideUp();
    $j('.stories-toggle').removeClass('selected');
    
  }
  
});


/********** Added extra to close tabs on click any doc ends *********/

$j(document).ready(function () {
  
   $j('.box-with-link-wrapper').getSameTopGroups({
    commonParent: '.row'
  }, function (gc) {
    for (i = 1; i <= gc; i++) {
      
      setEqualHeight_CommonClass(".gg-g-" + i + " h2");
      setEqualHeight_CommonClass(".gg-g-" + i + " .content-wrapper");
      setEqualHeight_CommonClass(".gg-g-" + i + " .links-wrapper");
      setEqualHeight_CommonClass(".gg-g-" + i + ".box-with-link-wrapper");
    }
  });
  
  
  
  $j(document).on('click','.do-not-click',function(e){
    e.preventDefault();
  });
  
  $j('.block').getSameTopGroups({
    commonParent: '.four-blocks-wrapper'
  },);
  
  
  $j('.desk-nav ul li.level2').hover); 
  
  
  
  
  if($j(window).width() < '991'){
    $j('.ticker-desktop').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots:true
    });
  }
  
  
  
  /*********** youtube **********/
  
  /********* you tube ends ********/
  
  
  /******** financial data template *******/
  //$j(".toggle-class .second-tab.test").hide();
  $j(".toggle-class .test").click(function() {
    
    $j(".main-content-show").toggleClass('highlight');
    $j(".toggle-class div.test").show();
    $j(this).hide();
    
    //var switchClass = $j(this).attr( "class" );
    //$j("#" + switchClass).toggle();
    //$j(".toggle-class div").removeClass('active');
    //$j(this).addClass('active');
    
    
    
    //$j(".content-switch-template .commclass")
    
    
  });
  
  /****** financial template data ends ********/
  
  
  /********** uri *********/
  
  //var uri = $j(".prev .mp-name").text();
  //var res = encodeURI(uri);
  
  //var uri2 = $j(".next .mp-name").text();
  //var res2 = encodeURI(uri2);
  /********  uri **********/
  //alert(res + ":" + res2);
  
  
  /******** search *************/
  $j('.srchbtn').click);
  
  /********* search ends *********/
  
  
  
  
  
  
  /************** mmenu *******************/
  $j('#menu').mmenu({
    extensions	: [ 'effect-slide-menu', 'pageshadow' ],
    searchfield	: true,
    counters	: true,
    navbar 		: {
      title		: 'Advanced menu'
    },
    navbars		: [
      {
        position	: 'top',
        content		: [ 'searchfield' ]
      }, {
        position	: 'top',
        content		: [
          'prev',
          'title',
          'close'
        ]
      }, {
        position	: 'bottom',
        content		: [
          '<a href="http://mmenu.frebsite.nl" target="_blank">Visit website</a>',
          '<a href="http://mmenu.frebsite.nl/wordpress-plugin.html" target="_blank">WordPress plugin</a>'
        ]
      }
    ]
  });
  
  /************** mmenu *********************/
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  $j('#play_button').click);
  
  $j('.close-video').click(function(e){
    e.preventDefault();
    
    $j('.video-area > iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');       
    
    //$j('#youtube1').get(0).stopVideo();
    if($j('.video-area > div').hasClass('vjs-playing')){
      $j('.vjs-play-control').click();
    }
    $j('.video-player').hide();
  });
  
  
  
  
  
  
  
  $j('.busi-tabs .stories-toggle').click);
  
  $j('.busi-tabs ul li a').click(function(e){
    e.preventDefault();
    $j('.busi-label').text($j(this).text());
    
    $j('.busi-tabs ul li').removeClass('hide');
    $j(this).parent().addClass('hide');
    $j('.busi-tabs .stories-options').slideUp();
    
    $j('.tab-content').hide();
    var id = $j(this).data('id');
    $j('#'+id).show();
  });
  
  $j('.tabs-area .tab').click(function(){
    $j('.tabs-area .tab').removeClass('active');
    $j('.tab-content').hide();
    
    var id = $j(this).data('id');
    $j('#'+id).show();
    $j(this).addClass('active');
  });
  
 /* $j('#disclaimerDeclineButton').click(function(e){
    e.preventDefault();
    $j('.disclaimerTextContainer').show();
  });*/
  
  $j('.acc-title').not('.disable-click').click);
  
  setEqualHeight_CommonClass(".black-textblock");
  setEqualHeight_CommonClass(".black-textblock .white-h2");
  
  if($j(window).width() > '767'){
    $j(window).scroll(function() {
      windowScrollTop = $j(window).scrollTop();
      
      if(windowScrollTop > 0){
        //$j('.header-wrapper').slideUp('fast');
        //$j('.sticky-nav').addClass('active');
      }
      else{
        //$j('.header-wrapper').slideDown('fast');
        //$j('.sticky-nav').removeClass('active');					
      }
    });
  }
  
  /********** first word css ***************/
  
  /*
$j('body').each(function() {
   
if($j('body').hasClass('ip3-edit')){ 
        alert("ip3 mode");
    }
   
});
*/
  
  
  
  /*

	
	$j('h2').each(function() {
		if($j(this).find('a').length > 0){
				var h = $j.trim($j(this).find('a').html());
				var index = h.split(' ');
			
				var string = index[0];
				var string2 = index[1];
			   
				var re = new RegExp("Relx","i");
				var re2 = new RegExp("Group","i");
				
				if (re.test(string) && re2.test(string2)) {
					$j(this).find('a').html('<span class="first-word rlx-grp">' + index[0] + ' ' + index[1] + '</span>' + h.substring(index[0].length+index[1].length+1, h.length));
				} else {
					$j(this).find('a').html('<span class="first-word">' + index[0] + '</span>' + h.substring(index[0].length, h.length));
				}
			}
			else{
				var h = $j.trim($j(this).html());
				var index = h.split(' ');
			
				var string = index[0];
				var string2 = index[1];
			   
				var re = new RegExp("Relx","i");
				var re2 = new RegExp("Group","i");
				
				if (re.test(string) && re2.test(string2)) {
					$j(this).html('<span class="first-word rlx-grp">' + index[0] + ' ' + index[1] + '</span>' + h.substring(index[0].length+index[1].length+1, h.length));
				} else {
					$j(this).html('<span class="first-word">' + index[0] + '</span>' + h.substring(index[0].length, h.length));
				}	
			}
    });
    
    
    */
  /*************** first word css Ends *************/
  
  
  
  
  
  
  /*----------- show more  Share Bar starts ---------------------*/
  /*     $j('.shareIcon,.share-options').click(function(){
     	var curr = $j(this);
     	curr.fadeOut(function(){
        	curr.siblings().toggle('slide', { direction: "right" });
        });
       
     
     });
  */   
  var url = window.location;
  $j('.share-options a.changehref').each(function() {
    var hrf = $j(this).attr('href');
    var txt = $j('h1').text().trim();
    if (hrf.indexOf('@@@') != -1) {
      hrf = hrf.replace("@@@", txt);
    }
    hrf = hrf.replace("###", url);
    $j(this).attr('href', hrf);
  });
  
  
  /*----------- show more  Share Bar ends ---------------------*/
  
  
  
  
  
  
  
  
  /*------------------ Year Tab Starts -------------------*/
  var currTxt = $j('.tabmobi ul li.current').text();
  $j('.yeartabselectmobi a').html(currTxt);
  $j('.tabmobi .yeartabselectmobi').click(function(e) {
    e.preventDefault();
    if ($j(this).hasClass('selected')) {
      $j('.tabmobi ul').slideUp();
      $j(this).removeClass('selected');
    } else {
      $j('.tabmobi ul').slideDown();
      $j(this).addClass('selected');
    }
  });
  /*------------------ Year Tab Ends -------------------*/
  
  
  
  
  
  
  /************ reult center ***********/   
  $j( ".template-tab-year-landing #tabs" ).tabs();   
  /************ reult center ends ***********/
  
  /*********** for the desktop navigation *********/
  
  $j( "#section-Homepage-level2 > div" ).wrapAll( "<div class='container-fluid my-nav-wrap'></div>" );
  
  
  
  /********** for the desktop navigation ends ******/
  
  /*********** meet our people js ************/
  
  /*---------- portfolio pagination -------------*/
  $j(".our-stories-pagger .pagerlink.external-story").remove();
 
  if(!$j(".our-stories-pagger .pagerlink:first-child").hasClass("first"))
  {
	$j(".our-stories-pagger .pagerlink:first-child").addClass("first");
  }
  if(!$j(".our-stories-pagger .pagerlink:nth-last-child(2)").hasClass("last"))
  {
	$j(".our-stories-pagger .pagerlink:nth-last-child(2)").addClass("last");
  }
  
  setTimeout(function(){
	if($j('.pagerlink.first').hasClass('curr')){
      $j('.pagenav').find('.prev').click(function(e){
        e.preventDefault();
      });
    
    $j('.pagenav').find('.prev').parent().addClass('disabled');
  }
  else{
    $j('.pagenav').find('.prev').attr('href', $j('.pagerlink.curr').prev().find('a').attr('href'));
    $j('.pagenav').find('.prev').attr('data-title', $j('.pagerlink.curr').prev().find('a').attr('data-title'));
    
    var prevtext = $j('.pagerlink.curr').prev().find('a').attr('data-title');
    $j('.pagenav').find('.prev > span.mp-name').text(prevtext);
  }
  if($j('.pagerlink.last').hasClass('curr')){
    $j('.pagenav').find('.next').click(function(e){
      e.preventDefault();
    });
    $j('.pagenav').find('.next').parent().addClass('disabled');
  }
  else{
    $j('.pagenav').find('.next').attr('href', $j('.pagerlink.curr').next().find('a').attr('href'));
    $j('.pagenav').find('.next').attr('data-title', $j('.pagerlink.curr').next().find('a').attr('data-title'));
    
    var nexttext =  $j('.pagerlink.curr').next().find('a').attr('data-title');
    $j('.pagenav').find('.next > span.mp-name').text(nexttext);
    
  }
  },100);
  
  
  /************ meet our people ends *********/
  
  
  
  
  
  /*--- search--- */
  
  $j('.srchbtn').click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    if ($j('#searchTextboxContainer').width() != 0) {
      if($j('#searchTextboxContainer input').val() != 'Search' && $j('#searchTextboxContainer input').val() !=''){
        $j('#SearchButtonContainer input').click();
      } else{
        $j('#searchTextboxContainer').stop().animate({
          width: '0px'
        }, 800);
      }
      return false;
    } else {
      
      $j('#searchTextboxContainer').stop().animate({
        width: '440px'
        
      }, 800, function() {
        //    $j('.search-icon').hide();
        //    $j('#SearchButtonContainer input').show();
        
      });
      
    }
  });
  $j('#searchTextboxContainer input').click);
  /*---- Search ends --*/
  
  
  
  
  
  
  
  
  
  
  
  /********** search js ends *******/
  
  
  
  
  
  /*--- error page redirection and counter starts --------*/
  
  
  
  if ($j('body').attr('id') == 'ip3-error-page' && !$j('body').hasClass('ip3-edit')) {
    var counter_value = parseInt($j('.counter').html());
    var cnt = setInterval, 1000);
  }
  
  
  
  
  
  /*--- error page redirection and counter ends --------*/
  /* ------------------ Search - Following function is used for <enter> issue in IE ------------ */
  $j("#searchTextboxContainer input").keypress(function (e) {
    if (e.keyCode == 13) {
      document.getElementById("searchButton").click();
      return false;
    }
  });
  $j("#searchTextBoxContainerRP input").keypress);
  /* ------------------ <END> Following function is used for <enter> issue in IE ------------ */
  /*---------Include Respond.js in IE8 and below starts----------*/
  if ($j('body').is('.ie8, .ie7, .ie6')) {
    /*document.write("<script src='/javascripts/respond.js' type='text/javascript' language='javascript'></script>");*/
    $j.getScript("/javascripts/respond.js", function () { /*alert('respond,js loaded');*/ });
  }
  /*---------Include Respond.js in IE8 and below ends----------*/
  /* ------------------ File extension to UPPERCASE in title attribute ------------------ */
  
  
  $j("a.media-links").each(function () {
    var tmpTxt = $j(this).attr("title").split(",");
    if (tmpTxt.length > 1) {
      tmpTxt[0] = tmpTxt[0].toUpperCase();
    }
    $j(this).attr("title", tmpTxt.join());
  });
  $j("a.media-links>img").each(function () {
    var tmpTxt = $j(this).attr("alt").split(",");
    if (tmpTxt.length > 1) {
      tmpTxt[1] = tmpTxt[1].toUpperCase();
    }
    $j(this).attr("alt", tmpTxt.join());
  });
  
  
  
  /* ------------------ <END> File extension to UPPERCASE in title attribute ------------ */
  
  
  /* --- File extension to UPPERCASE in title attribute ----- */
  $j("a.media-link").each(function () {
    var tmpTxt = $j(this).attr("title").split(",");
    if (tmpTxt.length > 1) {
      tmpTxt[0] = tmpTxt[0].toUpperCase();
    }
    $j(this).attr("title", tmpTxt.join());
  });
  
  $j("a.media-link>img").each);
  /* --- <END> File extension to UPPERCASE in title attribute --- */
  
  
  
  
  
  
  /*-------Wrap tables except inv-responsive tables with horizontal scrollable wrapper Starts--*/
  $j('.content-wrap  table:not(".inv-responsive")').each);
  /*-------Wrap tables except inv-responsive tables with horizontal scrollable wrapper Ends--*/
  /*--------------------Snapdowns--------------------------------*/
  $j('.snapdownItem:first-child').addClass('active');
  $j('.snapdownItem:first-child .snapdown-content').slideDown("medium", function () {
    if (!($j('body').hasClass('ip3-edit'))) {
      if($j(window).width() > '767'){
        
      }
      else{
        
      }
    }
  });  
  
  
  
   $j('.snapdown-title').click(function (e) {
    e.preventDefault();
    if ($j(this).parent().hasClass('active')) {
      $j(this).parent().removeClass('active');
      $j(this).next('.snapdown-content').slideUp();
      //$j(this).parent().removeClass('active');
    }
    else {
      //$j('.snapdownItem, .snapdownCloseItem').removeClass('active');
      //$j('.snapdown-content').slideUp(); 
      $j(this).parent().addClass('active');
		
		var sURL = window.location.href;
      var hash_val = $j(this).parent().data('id');
      var finalURL = sURL + "#" + hash_val;
      window.location.hash = hash_val;
      $j(this).next('.snapdown-content').slideDown("medium", function () {
        if (!($j('body').hasClass('ip3-edit'))) {
          if($j(window).width() > '767'){
             $j('html,body').animate({scrollTop: $j(this).parent().offset().top - 140},500);
          }
          else{
            $j('html,body').animate({scrollTop: $j(this).parent().offset().top},500);
          }
        }
      });
    }
  });
	
	
	
  /*---------- Equal Height boxes start -----------------*/
  $j('.box-items').getSameTopGroups({
    commonParent: '.row'
  },);
  /*---------- Equal Height boxes end -----------------*/
});
/*--------Equal height plugin starts-----------*/
;
(function ($j) {
  var defaults = {
    waitforimages: true
    , waitforfonts: false
    , areSiblings: true
    , commonParent: ''
  }; // default settings
  $j.fn.getSameTopGroups = function (options, callback) {
    //var settings = {};
    if ($j(this).length < 1) {
      return false;
    }
    var settings = $j.extend(true, {}, defaults, options);
    var $jelement = $j(this);
    //$jelement['settings'] = $j.extend(true, {}, defaults, options)
    var winEvents = false;
    var totElements = 0;
    var reload =;
    var timeOut;
    var resFun =;
    $jelement.reGroup =;
    $j(window).bind('load',);
    $j(document).bind('ajaxComplete', function () {
      $jelement = $j($jelement['selector']);
      $j('.hometwitter').height('auto');
      reload(true);
    });
    $j(window).bind('resize', resFun);
    return $jelement;
  };
  var getStyle =;
  var getOuterWidthWithMargin =;
})($j);


Array.min = function (array) {
  return Math.min.apply(Math, array);
};
Array.max =;
/*--------Equal height plugin Ends-----------*/


/*$j(window).load(function(){

	$j('.video-area .vjs-play-control').click();
    
		//$j('.overlay-banner-wrap').css('margin-top',$j('.sticky-nav').height());	
});*/

$j(document).ajaxComplete(function(){
  $j('h2').each(function() {
    if($j(this).find('.first-word').length < 1){
      if($j(this).find('a').length > 0){
        var h = $j.trim($j(this).find('a').html());
        var index = h.split(' ');
        
        var string = index[0];
        var string2 = index[1];
        
        var re = new RegExp("Relx","i");
        var re2 = new RegExp("Group","i");
        
        if (re.test(string) && re2.test(string2)) {
          $j(this).find('a').html('<span class="first-word rlx-grp">' + index[0] + ' ' + index[1] + '</span>' + h.substring(index[0].length+index[1].length+1, h.length));
        } else {
          $j(this).find('a').html('<span class="first-word">' + index[0] + '</span>' + h.substring(index[0].length, h.length));
        }
      }
      else{
        var h = $j.trim($j(this).html());
        var index = h.split(' ');
        
        var string = index[0];
        var string2 = index[1];
        
        var re = new RegExp("Relx","i");
        var re2 = new RegExp("Group","i");
        
        if (re.test(string) && re2.test(string2)) {
          $j(this).html('<span class="first-word rlx-grp">' + index[0] + ' ' + index[1] + '</span>' + h.substring(index[0].length+index[1].length+1, h.length));
        } else {
          $j(this).html('<span class="first-word">' + index[0] + '</span>' + h.substring(index[0].length, h.length));
        }	
      }
    }
  });
});



$j(window).load(function(){
  
 checkSnapdownDeeplinking();
 	
	
	
  if($j(window).width() < '767'){
    $j('.ticker-desktop').appendTo('.header-wrapper.mobi .header-ticker');
  }
  
  
  /* Code to restrict Click on Navigation Point Page Link Start */
  
  $j('.desk-nav ul li.level1 > ul li.haschildren').each(function () {    
    var firstHREF = $j(this).find('> a').attr('href');
    var innerHREF;
    $j(this).find('ul li a').each(function () {
      innerHREF = $j(this).attr('href');
      if(firstHREF == innerHREF){
        $j(this).parent().parent().prev().addClass('do-not-click');
      }
    });    
  });
  
  newHREF = [];
  $j('.desk-nav ul li.level1 > ul li.haschildren').each);
  
  var hrefLEN = $j('.desk-nav ul li.level1 > ul li.haschildren .do-not-click').length;
  $j('#breadcrumb a').each(function (i) {
    var breadHREF = $j(this).attr('href');   
    for(var k = 0;  k < newHREF.length; k++){
      if(breadHREF == newHREF[k]){
        $j(this).addClass('do-not-click');
      }
    }    
  });
  
  $j('#menu .mm-panels .mm-panel li.haschildren a:not(".mm-next")').each(function (i) {
    var mmenuHREF = $j(this).attr('href');
    for(var k = 0;  k < hrefLEN; k++){
      if(mmenuHREF == newHREF[k]){
        $j(this).addClass('do-not-click');
      }
    }    
  });
  
  /* Code to restrict Click on Navigation Point Page Link End */

  $j('.mm-next, .mm-btn.mm-prev, #topnavigation ul li.level2 > a.showmore, .gen-box-img a.covering-wrap, .foot-sp-content a.covering-wrap').each);
	
});
/*!---- navigation-----*/
$j(document).ready(function() {

/************** for top nav *****************/

  /*  $j('.desk-nav > ul > li.level1').on('click', function(e) {
        e.preventDefault();
        if ($j(this).hasClass('selected')) {

            $j(this).parent().find('ul').slideUp();
            $j(this).removeClass('selected');
            $j(this).parent().removeClass('navopen');
        } else {

            $j("#sidenavigation ul li.level1 ul li.level2 > a.showmore").parent().find('ul').slideUp();
            $j(this).parent().find('ul:first').slideDown();
            $j("#sidenavigation ul li.level1 ul li.level2 > a.showmore").removeClass('selected');
            $j(this).addClass('selected');
            $j("#sidenavigation ul li.level1 ul li.level2 > a.showmore").parent().removeClass('navopen');
            $j(this).parent().addClass('navopen');
        }
    });

*/
/************** for top nav ends *****************/



$j( "#Middle-container" ).append( "<div class='trans-bg'></div>" );
var windowsize = $j(window).width();

  /***************** left navigation ****************/
 $j('#leftnavigation ul li.level2.haschildren, #leftnavigation ul li.level2 ul li.level3.haschildren').each(function() {
        $j(this).append('<a href="#" class="showmore"></a>');
    });
 $j('#leftnavigation ul li.level2 ul, #leftnavigation ul li.level2 ul li.level3 ul').hide();
 $j('#leftnavigation ul li.level2, #leftnavigation ul li.level2 ul li.level3').each(function() {
        if ($j(this).hasClass('selected') || $j(this).hasClass('current')) {
            $j(this).children('ul').show();
            $j(this).children('.showmore').addClass('selected');
        }
    });
    $j('#leftnavigation ul li.level2 > a.showmore').on('click', function(e) {
        e.preventDefault();
        if ($j(this).hasClass('selected')) {
            $j(this).parent().find('ul').slideUp();
            $j(this).removeClass('selected');
            $j(this).parent().removeClass('navopen');
        } else {
            $j(".showmore").parent().find('ul').slideUp();
            $j(this).parent().find('ul:first').slideDown();
            $j(".showmore").removeClass('selected');
            $j(this).addClass('selected');
            $j(".showmore").parent().removeClass('navopen');
            $j(this).parent().addClass('navopen');
        }
    });
  $j('#leftnavigation ul li.level2 ul li.level3 > a.showmore').on('click', function(e) {
        e.preventDefault();
        if ($j(this).hasClass('selected')) {

            $j(this).parent().find('ul').slideUp();
            $j(this).removeClass('selected');
            $j(this).parent().removeClass('navopen');
        } else {

            $j("#leftnavigation ul li.level2 ul li.level3 > a.showmore").parent().find('ul').slideUp();
            $j(this).parent().find('ul:first').slideDown();
            $j("#leftnavigation ul li.level2 ul li.level3 > a.showmore").removeClass('selected');
            $j(this).addClass('selected');
            $j("#leftnavigation ul li.level2 ul li.level3 > a.showmore").parent().removeClass('navopen');
            $j(this).parent().addClass('navopen');
        }
    });
 /****************** left navigation ends ************/

/********************* Top navigation *************/
$j('#topnavigation ul li.level2.haschildren, #topnavigation ul li.level2 ul li.level3.haschildren').each(function() {
        $j(this).append('<a href="#" class="showmore"></a>');
    });
 $j('#topnavigation ul li.level2 ul, #topnavigation ul li.level2 ul li.level3 ul').hide();
 $j('#topnavigation ul li.level2, #topnavigation ul li.level2 ul li.level3').each(function() {
        if ($j(this).hasClass('selected') || $j(this).hasClass('current')) {
            $j(this).children('ul').show();
            $j(this).children('.showmore').addClass('selected');
        }
    });
$j('#topnavigation ul li.level2 > a.showmore').on('click', function(e) {
        e.preventDefault();
        if ($j(this).hasClass('selected')) {
        //alert("action-----2----1");
            $j(this).parent().find('ul').slideUp();
            $j(this).removeClass('selected');
            $j(this).parent().removeClass('navopen');
        } else {
        //alert("action------2-----2");
            $j(this).parent().parent().find('ul').slideUp();
            $j(this).parent().find('ul:first').slideDown();
            $j(this).parent().parent().find('a.showmore').removeClass('selected');
            $j(this).addClass('selected');
            $j(this).parent().removeClass('navopen');
            $j(this).parent().addClass('navopen');
        }
    });
$j('#topnavigation ul li.level2 ul li.level3 > a.showmore').on('click', function(e) {
        e.preventDefault();
        if ($j(this).hasClass('selected')) {
//alert("action------3----1");
            $j(this).parent().find('ul').slideUp();
            $j(this).removeClass('selected');
            $j(this).parent().removeClass('navopen');
        } else {
//alert("action---3-2");
            $j("#topnavigation ul li.level2 ul li.level3 > a.showmore").parent().find('ul').slideUp();
            $j(this).parent().find('ul:first').slideDown();
            $j("#topnavigation ul li.level2 ul li.level3 > a.showmore").removeClass('selected');
            $j(this).addClass('selected');
            $j("#topnavigation ul li.level2 ul li.level3 > a.showmore").parent().removeClass('navopen');
            $j(this).parent().addClass('navopen');
        }
    });
/********************* Top navigation *************/
/******************* Mobile Navigation *************/
    $j('#sidenavigation ul li.level1.haschildren, #sidenavigation ul li.level2.haschildren, #sidenavigation ul li.level2 ul li.level3.haschildren').each);

    $j('#sidenavigation ul li.level1 ul, #sidenavigation ul li.level2 ul, #sidenavigation ul li.level2 ul li.level3 ul').hide();

    $j('#sidenavigation ul li.level1, #sidenavigation ul li.level2, #sidenavigation ul li.level2 ul li.level3').each(function() {
        if ($j(this).hasClass('selected') || $j(this).hasClass('current')) {
            $j(this).children('ul').show();
            $j(this).children('.showmore').addClass('selected');
        }
    });

    $j('#sidenavigation ul li.level1 > a.showmore').on('click', function(e) {
    
          e.preventDefault();
        if ($j(this).hasClass('selected')) {

            $j(this).parent().find('ul').slideUp();
            $j(this).removeClass('selected');
            $j(this).parent().removeClass('navopen');
        } else {

            $j("#sidenavigation ul li.level1 > a.showmore").parent().find('ul').slideUp();
            $j(this).parent().find('ul:first').slideDown();
            $j("#sidenavigation ul li.level1 > a.showmore").removeClass('selected');
            $j(this).addClass('selected');
            $j("#sidenavigation ul li.level1 > a.showmore").parent().removeClass('navopen');
            $j(this).parent().addClass('navopen');
        }
    
    
    
    });

    $j('#sidenavigation ul li.level1 ul li.level2 > a.showmore').on('click', function(e) {
        e.preventDefault();
        if ($j(this).hasClass('selected')) {

            $j(this).parent().find('ul').slideUp();
            $j(this).removeClass('selected');
            $j(this).parent().removeClass('navopen');
        } else {

            $j("#sidenavigation ul li.level1 ul li.level2 > a.showmore").parent().find('ul').slideUp();
            $j(this).parent().find('ul:first').slideDown();
            $j("#sidenavigation ul li.level1 ul li.level2 > a.showmore").removeClass('selected');
            $j(this).addClass('selected');
            $j("#sidenavigation ul li.level1 ul li.level2 > a.showmore").parent().removeClass('navopen');
            $j(this).parent().addClass('navopen');
        }
    });


    /******************* Mobile Navigation ends*************/
 if ($j("li.level2").hasClass('selected')) {
  

  
 } else {

 
/* $j( "#nav-our-business-level1 a.showmore" ).trigger( "click" );
//$j( "#nav-investors-level1 a.showmore" ).trigger( "click" );
$j( "#nav-responsibility-level1 a.showmore" ).trigger( "click" );
$j( "#nav-careers-level1 a.showmore" ).trigger( "click" );
$j( "#nav-media-level1 a.showmore" ).trigger( "click" );
//$j( "a" ).trigger( "click" );
  */
  }   
 
 
 
 
 
 
 
/*

$j('.level2').each(function(){
if(($j(this).parent().parent().parent().parent().parent().attr("id") == "nav-investors-level1")||($j(this).hasClass('selected'))){
//console.log('Luv');
}
else{
$j(this).find('.showmore').trigger('click');
}
});

*/





    
});
/*!---- not-ss-main-----*/
$j(document).ready(function () {

/********** first word css ***************/

	$j('h2').each(function() {
		if($j(this).find('a').length > 0 && $j(this).find('.rad-header').length < 1){
				var h = $j.trim($j(this).find('a').html());
				var index = h.split(' ');
			
				var string = index[0];
				var string2 = index[1];
			   
				var re = new RegExp("Relx","i");
				var re2 = new RegExp("Group","i");
				
				if (re.test(string) && re2.test(string2)) {
					$j(this).find('a').html('<span class="first-word rlx-grp">' + index[0] + ' ' + index[1] + '</span>' + h.substring(index[0].length+index[1].length+1, h.length));
				} else {
					$j(this).find('a').html('<span class="first-word">' + index[0] + '</span>' + h.substring(index[0].length, h.length));
				}
			}
            else if($j(this).find('.rad-header').length > 0){
            
            }
			else{
				var h = $j.trim($j(this).html());
				var index = h.split(' ');
			
				var string = index[0];
				var string2 = index[1];
			   
				var re = new RegExp("Relx","i");
				var re2 = new RegExp("Group","i");
				
				if (re.test(string) && re2.test(string2)) {
					$j(this).html('<span class="first-word rlx-grp">' + index[0] + ' ' + index[1] + '</span>' + h.substring(index[0].length+index[1].length+1, h.length));
				} else {
					$j(this).html('<span class="first-word">' + index[0] + '</span>' + h.substring(index[0].length, h.length));
				}	
			}
    });
    /*************** first word css Ends *************/
    

});

/*!---- autocomplete-----*/
$j(document).ready(function () {
	//main search textbox
	if($j("#searchTextbox").length > 0)
	{
		$j("#searchTextbox").autocomplete({
        appendTo:"#searchTextboxContainer",
			source: function (request, response) {

				$j.ajax({
					url: "/Investis/AdvancedSearch/PredictiveSearch.aspx",
					data: {
						ps_lang: 'en',
						PS_HOSTNAME: autoCompleteDomain,
						PS_SEARCHTERM: encodeURIComponent(request.term),
						PS_MAXSUGGESTIONCOUNT: 7
					},
					async: true,
					success: function (data) {


						response(data);
					},
					error: function (result) {
						//alert("Error loading the data" + result.responseText);
					}
				});
			},
			minLength: 1,
			select: function (event, ui) {
				$j("#searchTextbox").val(ui.item.value);
				$j("#searchButton").trigger("click");
			}
		}).data("ui-autocomplete")._renderItem = function (ul, item) {
			return $j("<li class='ui-corner-all'>")
				.append("<a> <span style='float:left;'>" + item.label + "</span><span style='float:right;'>(" + item.count + ")</span></a>").appendTo(ul);
		};
		
		
	}
	
	
	// Search result page textbox
	if($j("#SearchTextboxRP").length > 0)
		{
			 $j("#SearchTextboxRP").autocomplete({
               appendTo: "#searchTextBoxContainerRP",
				source:,
				minLength: 1,
				select:
			}).data("ui-autocomplete")._renderItem =;
		}
});
/*!---- back-to-top-----*/
/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
;)(jQuery);

$j.fn.topLink =;

$j(document).ready(function () {
    $j(".footer").append('<style type="text/css">#auto-top-link{ display:none; position:fixed; float:left; bottom:50px; right:10px; color:#fff;background: #f3f3f3;font-weight:normal; text-decoration:none;padding:0px 0px; width:50px;height:50px;transition:all 0.2s ease 0.2s;z-index: 1000;"}</style>');
    
    $j(".footer").append('<a href="#MainForm" id="auto-top-link"><img alt="Top of page" src="/~/media/Images/R/RELX-Group/css/back-to-tops.png"></a>');
    
    $j('#auto-top-link').topLink({
        min: 400,
        fadeSpeed: 500
    });

    //smoothscroll
    $j('#auto-top-link').click);
   
});


/*!---- frame-manager-----*/
/*! iFrame Resizer (iframeSizer.min.js ) - v2.6.2 - 2014-10-11
 *  Desc: Force cross domain iframes to size to content.
 *  Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
 *  Copyright: (c) 2014 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 *	Requires: iframeResizer_child.js on I-framed page.
 */

();

if (!Array.prototype.forEach){
    Array.prototype.forEach =;
}


$j(document).ready);

$j(window).resize);

/** Changes for keeping popup in the centre for fundamental tool **/

var __iframe;
$j(document).ready);
$j(window).scroll(function() {
    sendDimensions();
});

$j(window).resize);

function sendDimensions() {

    __iframe = document.querySelectorAll("iframe.responsive")[0];
    var iFrameWindow = __iframe.contentWindow;
    var iframeSrcHost = getToolHostName(__iframe.src);
    iFrameWindow.postMessage("[Fundamentals_PageViewport]:" + $j(window).height() + ":" + $j(window).scrollTop() + ":" + $j(__iframe).offset().top + ":" + $j(__iframe).height(), iframeSrcHost);
}

/*!---- double-tap-to-go-----*/
/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

;)( $j, window, document );


$j(document).ready(function () {
  /*------------------- <Start> Double tap to Go ------------- */
  $j('#topnavigation li.level1.haschildren').doubleTapToGo();
  $j('#topnavigation ul li.level1.haschildren').each);
  
  $j('#topnavigation ul li.level2.haschildren li.level3').attr('aria-haspopup', 'false');
  //$j('#topnavigation ul li.level2.haschildren li.level3 a').attr('onclick', 'false');
  //$j('#toplinks li.brand_link:has(div)').doubleTapToGo();
  /*------------------- <END> Double tap to Go ------------- */
});
/*!---- invd-cm-config-en-----*/
/* © InvestisDigital, All rights reserved, v3.0.0 */
var __CookieConsentConfig = {
  title: 'This site uses cookies to improve your experience.',
  preferenceTitle: 'Cookie Preferences',
  description: 'We use cookies essential to operate our site. We also use additional cookies and other technologies to analyse our site’s traffic and performance. For more information, view our <a target="_blank" title="Opens in a new window" href="/site-services/cookies">cookie notice</a>.',
  acceptAllBtnText: 'Accept all cookies',
  disableOptionalBtnText: 'Decline additional cookies',
  cookieSettingBtnText: 'Change cookie preferences',
  saveBtnText: 'Save preferences',
  categoriesTitle: 'Manage cookie preferences',
  expiry: 90,
  cookieName: '__CookieConsentV300',
  legacyCookieName: '__CookieConsentV200',
  categories: [{
    name: 'necessaryCookie',
    enabled: true,
    title: 'Strictly necessary cookies',
    description: 'These cookies are required for the operation of our website and cannot be declined. They include cookies used for load balancing and security to help protect you as you interact with the website.',
    required: true,
    requiredText: 'Required'
  }, {
    name: 'performanceCookies',
    enabled: true,
    title: 'Performance cookies',
    description: 'These cookies count the number of visitors to our website and to gather other usage statistics. This helps us to analyse and improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.<br><br>For more information on our use of cookies and our use of tags and other technologies, and how to manage them, visit our <a target="_blank" title="Opens in a new window" href="/site-services/cookies">cookie notice</a>.',
    required: false,
    defaultState: false,
    cookieList: ['_ga','_gid','_gat','_gat_INVDSitecore','_ga_HDM6BN56JZ','_lfa','_gat_UA-88442839-1','_ga_VW1YYLKJ60','_ga_V1VQCPSY6V','_gat_shorthand']
  }]
};
if (window.CookieConsent.setConfiguration == undefined) {
  window.CookieConsent = new CookieConsent({});
}
window.CookieConsent.setConfiguration(__CookieConsentConfig);