<HTML><HEAD>
<TITLE>Access Denied</TITLE>
</HEAD><BODY>
<H1>Access Denied</H1>
 
You don't have permission to access "http&#58;&#47;&#47;www&#46;sap&#46;com&#47;etc&#46;clientlibs&#47;sapdx&#47;front&#45;layer&#47;dist&#47;resources&#47;sapcom&#47;finders&#45;SearchStandard&#46;6db8ca263ef1d1978b1c&#46;js" on this server.<P>
Reference&#32;&#35;18&#46;24231102&#46;1706719702&#46;d3dcc7
</BODY>
</HTML>
URLs.length; jCount++) {
            blogURL = arrBlogURLs[jCount];
            getBlogContent(blogURL, jCount + 1, arrBlogsID[jCount][0], arrBlogsID[jCount][1]);
        }
    }
/*     for (var iCount = 0; iCount < arrTwitterQueryTerms.length; iCount++) {
        searchTerm = arrTwitterQueryTerms[iCount];
        CallTwitterProxy(searchTerm, iCount + 1, arrTwitterQueryID[iCount],arrTwitterQuerySpeed[iCount]);
    } */
});


function parseTwitterResponse(twitterJson) {
    var objTweet = JSON.parse(twitterJson);
    var tweetNumbers = objTweet.statuses.length;
	var tweetList = '';
    
    for (var n = 0; n < tweetNumbers; n++) {
        tweetList += '<div class="columnHero"><div class="imageTitle"><div class="twtimg"><img src="';
        tweetList += objTweet.statuses[n].user.profile_image_url.replace('http://','//');
        tweetList += '"></div><div>';
		tweetList += '<div class="twtname">';
        tweetList += objTweet.statuses[n].user.name;
        tweetList += '<span>';
		//tweetList += monArr[new Date(objTweet.statuses[n].created_at).getMonth()] +' '+new Date(objTweet.statuses[n].created_at).getDate();
        tweetList += monArr[moment(objTweet.statuses[n].created_at, 'dd MMM DD HH:mm:ss ZZ YYYY')._d.getMonth()] +' '+ moment(objTweet.statuses[n].created_at, 'dd MMM DD HH:mm:ss ZZ YYYY')._d.getDate();
        tweetList += '</span></div>';
        tweetList += '<div class="twthash">';
        tweetList += decodeURIComponent(objTweet.search_metadata.query).replace(/from:/g,"@").replace(/\+OR\+/g,", ");
        tweetList += '</div>';
        tweetList += '</div></div><div><p>';
        tweetList += addTwitterLinks(objTweet.statuses[n].text);
        tweetList += "</p></div>";
        tweetList += "</div>";
        // each tweet will have the following properties: ImageUrl, ScreenName, TweetText, CreateDate
    }

    return tweetList;
}

function CallTwitterProxy(searchTerm, srno, twitterControl,twitterSpeed) {
	var XHR = $.ajax({
        url: "//socialproxy.sapvirtualevents.com/digitalceohub/tweetsfetcher.aspx?search=" + encodeURIComponent(searchTerm) + "&srno=" + srno,
        dataType: "jsonp"
    }).done(function (data) {
        $("#" + twitterControl).append(parseTwitterResponse(data));
        if(twitterSpeed > 0){
			$("#" + twitterControl).owlCarousel({
                autoPlay: twitterSpeed,
                items : 3,
                itemsDesktop : [1199,3],
                itemsDesktopSmall : [979,3],  
                itemsMobile : [700,1],
                navigation : true,
             	pagination : false
            }); 
        }else{
			$("#" + twitterControl).owlCarousel({
                autoPlay: false,
                items : 3,
                itemsDesktop : [1199,3],
                itemsDesktopSmall : [979,3],  
                itemsMobile : [700,1],
                navigation : true,
             	pagination : false
            }); 
        }

    });
}

function getBlogContent(bURL, srno, blogControl,type) {
	var XHR = $.ajax({
        url: "//socialproxy.sapvirtualevents.com/digitalceohub/tweetsfetcher.aspx?feedurl=" + encodeURIComponent(bURL) + "&srno=" + srno + "&feedcount=5",
        dataType: "jsonp"
    }).done(function (data) {
        $("#" + blogControl).append(parseRSSResponse(data,type));

    });
}

function parseRSSResponse(data,type) {
    var objRSS = JSON.parse(data);
    var latestPosts = objRSS.value.items;
    var entryNumbers = parseInt(objRSS.count);
    if (entryNumbers <= 0) {
        entryNumbers = objRSS.value.items.length;
    }

    var blogList = '';
    for (var i = 0; i < 1; i++) {
        if(type == "multi"){
			blogList += ' <div class="centerBlock"><div class="columnHero"><div class="columnHeroImage"> <img class="radius" src="/etc/designs/sep1dx/images/noPromo.png" alt=""> </div><div><h2><a href="';
        }else{
			blogList += ' <div class="centerBlock"><div class="columnHero full-width"><div class="columnHeroImage"> <img class="radius" src="/etc/designs/sep1dx/images/noPromo.png" alt=""> </div><div class="full-width-contant"><h2><a href="';
        }

		blogList += latestPosts[i].link;
		blogList += '" target="_blank">';
        blogList += latestPosts[i].title;
        blogList += '</a></h2><div class="columnHeroCopy" style="height: 60px; overflow: hidden;">';
        blogList += '<div class="blogdescpost"><p>';
        blogList += latestPosts[i].description;
        blogList += '</div></p></div><div class="LinkBtn"><a class="linkButton blue" href="'
		blogList += latestPosts[i].link;
		blogList += '" target="_blank">Read more';
        blogList += '</a></div></div></div></div>';
    };

    return blogList;
}

// Convert URLs (w/ or w/o protocol), @mentions, and #hashtags into anchor links
function addTwitterLinks(text)
{
	var base_url = 'http://twitter.com/';
	var hashtag_part = 'search?q=#';

	// convert URLs into links
	text = text.replace(
		/(>|<a[^<>]+href=['"])?(https?:\/\/([-a-z0-9]+\.)+[a-z]{2,5}(\/[-a-z0-9!#()\/?&.,]*[^ !#?().,])?)/gi,
		function($0, $1, $2) {
			return ($1 ? $0 : '<a href="' + $2 + '" target="_blank">' + $2 + '</a>');
		});

	// convert protocol-less URLs into links		
	text = text.replace(
		/(:\/\/|>)?\b(([-a-z0-9]+\.)+[a-z]{2,5}(\/[-a-z0-9!#()\/?&.]*[^ !#?().,])?)/gi,
		function($0, $1, $2) {
			return ($1 ? $0 : '<a href="http://' + $2 + '">' + $2 + '</a>');
		});

	// convert @mentions into follow links
	text = text.replace(
		/(:\/\/|>)?(@([_a-z0-9\-]+))/gi,
		function($0, $1, $2, $3) {
			return ($1 ? $0 : '<a href="' + base_url + $3
				+ '" title="Follow ' + $3 + '" target="_blank">@' + $3
				+ '</a>');
		});
	// convert #hashtags into tag search links
	text = text.replace(
		/(:\/\/[^ <]*|>)?(\#([_\-0-9\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1deco-global-alert-action__wrapper">
                <button class="artdeco-global-alert-action artdeco-button artdeco-button--inverse artdeco-button--2 artdeco-button--primary" action-url action-type="ACCEPT" data-tracking-control-name="urn:li:control:ga-cookie.consent.accept.v4" data-control-name="urn:li:control:ga-cookie.consent.accept.v4">
                Accept
                </button>
                <button class="artdeco-global-alert-action artdeco-button artdeco-button--inverse artdeco-button--2 artdeco-button--primary" action-url action-type="DENY" data-tracking-control-name="urn:li:control:ga-cookie.consent.deny.v4" data-control-name="urn:li:control:ga-cookie.consent.deny.v4">
                Reject
                </button>
          </div>
        </div>
<!---->      </section>
    </div>  
      </div>
  
  

        
        
    
      <code id="isClsFixActive" style="display: none"><!--true--></code>
      
    

    <a href="#main-content" class="skip-link btn-md btn-primary absolute z-11 -top-[100vh] focus:top-0">
      Skip to main content
    </a>
  
    <header class="header base-detail-page__header px-mobile-container-padding bg-color-background-container global-alert-offset">
      
        

    
    
    
    

    <nav class="nav pt-1.5 pb-2 flex items-center justify-between relative flex-nowrap mamabear:flex-wrap mamabear:gap-y-1 babybear:flex-wrap babybear:py-1.5
        " aria-label="Primary">

      <a href="/?trk=organization_guest_nav-header-logo" class="nav__logo-link link-no-visited-state z-1 mr-auto babybear:z-0 babybear:mr-0 babybear:flex-1 hover:no-underline focus:no-underline active:no-underline" data-tracking-control-name="organization_guest_nav-header-logo" data-tracking-will-navigate>
          
              
    
    <span class="sr-only">LinkedIn</span>
<!---->      <icon class="block text-color-brand w-[84px] h-[21px] papabear:w-[135px] papabear:h-[34px]
          " data-test-id="nav-logo" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/8fkga714vy9b2wk5auqo5reeb"></icon>
  
          
      </a>

<!---->
        
    
    
    
    
    
    
    <ul class="top-nav-menu flex items-center mr-0.5 babybear:hidden mamabear:hidden
        
         nav__menu order-3">
        <li class>
          
    <a href="https://www.linkedin.com/pulse/topics/home/?trk=organization_guest_guest_nav_menu_articles" data-tracking-control-name="organization_guest_guest_nav_menu_articles" data-tracking-will-navigate class="top-nav-link flex justify-center items-center h-[52px] hover:text-color-text visited:hover:text-color-text hover:no-underline
        w-[64px]
        flex-col mx-1
        text-color-text-secondary visited:text-color-text-secondary">
      <icon class="top-nav-link__icon flex h-3 w-3 flex-shrink-0 " data-delayed-url="https://static.licdn.com/aero-v1/sc/h/6ulnj3n2ijcmhej768y6oj1hr">
      </icon>
      <span class="top-nav-link__label-text font-sans text-xs leading-regular text-center
          font-regular">
        Articles
      </span>
    </a>
  
        </li>
        <li class>
          
    <a href="https://www.linkedin.com/pub/dir/+/+?trk=organization_guest_guest_nav_menu_people" data-tracking-control-name="organization_guest_guest_nav_menu_people" data-tracking-will-navigate class="top-nav-link flex justify-center items-center h-[52px] hover:text-color-text visited:hover:text-color-text hover:no-underline
        w-[64px]
        flex-col mx-1
        text-color-text-secondary visited:text-color-text-secondary">
      <icon class="top-nav-link__icon flex h-3 w-3 flex-shrink-0 " data-delayed-url="https://static.licdn.com/aero-v1/sc/h/7kb6sn3tm4cx918cx9a5jlb0">
      </icon>
      <span class="top-nav-link__label-text font-sans text-xs leading-regular text-center
          font-regular">
        People
      </span>
    </a>
  
        </li>
        <li class>
          
    <a href="https://www.linkedin.com/learning/search?trk=organization_guest_guest_nav_menu_learning" data-tracking-control-name="organization_guest_guest_nav_menu_learning" data-tracking-will-navigate class="top-nav-link flex justify-center items-center h-[52px] hover:text-color-text visited:hover:text-color-text hover:no-underline
        w-[64px]
        flex-col mx-1
        text-color-text-secondary visited:text-color-text-secondary">
      <icon class="top-nav-link__icon flex h-3 w-3 flex-shrink-0 " data-delayed-url="https://static.licdn.com/aero-v1/sc/h/8wykgzgbqy0t3fnkgborvz54u">
      </icon>
      <span class="top-nav-link__label-text font-sans text-xs leading-regular text-center
          font-regular">
        Learning
      </span>
    </a>
  
        </li>
        <li class>
          
    <a href="https://www.linkedin.com/jobs/search?trk=organization_guest_guest_nav_menu_jobs" data-tracking-control-name="organization_guest_guest_nav_menu_jobs" data-tracking-will-navigate class="top-nav-link flex justify-center items-center h-[52px] hover:text-color-text visited:hover:text-color-text hover:no-underline
        w-[64px]
        flex-col mx-1
        top-nav-link--selected text-color-text visited:text-color-text border-solid border-b-2 border-color-text" aria-current="page">
      <icon class="top-nav-link__icon flex h-3 w-3 flex-shrink-0 " data-delayed-url="https://static.licdn.com/aero-v1/sc/h/92eb1xekc34eklevj0io6x4ki">
      </icon>
      <span class="top-nav-link__label-text font-sans text-xs leading-regular text-center
          font-regular">
        Jobs
      </span>
    </a>
  
        </li>
        <li class>
          
    <a href="ms-windows-store://pdp/?ProductId=9WZDNCRFJ4Q7&amp;mode=mini&amp;cid=guest_nav_upsell&amp;trk=organization_guest_guest_nav_menu_windows" data-tracking-control-name="organization_guest_guest_nav_menu_windows" data-tracking-will-navigate class="top-nav-link flex justify-center items-center h-[52px] hover:text-color-text visited:hover:text-color-text hover:no-underline
        w-[96px] px-1 border-solid border-x-1 border-color-border-faint
        flex-col mx-1
        text-color-text-secondary visited:text-color-text-secondary">
      <icon class="top-nav-link__icon flex h-3 w-3 flex-shrink-0 " data-delayed-url="https://static.licdn.com/aero-v1/sc/h/admayac2rnonsqhz9v3rzwcyu">
      </icon>
      <span class="top-nav-link__label-text font-sans text-xs leading-regular text-center
          font-regular">
        Get the app
      </span>
    </a>
  
        </li>
    </ul>
  

      <div class="nav__cta-container order-3 flex gap-x-1 justify-end min-w-[100px] flex-nowrap flex-shrink-0 babybear:flex-wrap flex-2">
        
    
    <a class="nav__button-tertiary btn-md btn-tertiary" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_nav-header-join" data-tracking-control-name="organization_guest_nav-header-join" data-test-live-nav-primary-cta data-tracking-will-navigate>
      Join now
    </a>


        
  
  

      
      <a class="nav__button-secondary btn-md btn-secondary-emphasis" href="https://www.linkedin.com/login?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;fromSignIn=true&amp;trk=organization_guest_nav-header-signin" data-tracking-control-name="organization_guest_nav-header-signin" data-tracking-will-navigate>
          Sign in
      </a>


<!---->      </div>

<!---->
<!---->    </nav>
  
      
    </header>

    
<!---->      

<!---->
    <main class="main papabear:flex papabear:w-content-max-w papabear:mx-auto papabear:pt-desktop-content-top-margin mamabear:pt-desktop-content-top-margin
        " id="main-content" role="main">
      <section class="core-rail mx-auto papabear:w-core-rail-width mamabear:max-w-[790px] babybear:max-w-[790px]">
        
        
            
    
    
    
    
    

    
    <section class="top-card-layout container-lined overflow-hidden babybear:rounded-[0px]">
        
    <figure class="cover-img min-h-[87px] papbear:min-h-[100px] rounded-t-[2px] babybear:rounded-[0px] -z-1">
<!---->      <div class="cover-img__image-frame relative w-full overflow-hidden pb-[calc((134/782)*100%)]">
        <div class="cover-img__image-position absolute top-0 right-0 bottom-0 left-0
            ">
            <img class="cover-img__image relative w-full h-full object-cover" src="https://media.licdn.com/dms/image/D4E3DAQHJyaqe7YnSxA/image-scale_191_1128/0/1706550839784/sap_cover?e=2147483647&amp;v=beta&amp;t=nTMi5iUlQd75rkCkDXBN7ZnQkOTieLB3kDB9DoVoHtM" fetchpriority="auto" data-embed-id="cover-image" alt>
        </div>
      </div>
<!---->    </figure>
  

      <div class="top-card-layout__card relative p-2 papabear:p-details-container-padding">
            <div class="top-card-layout__entity-image-container flex">
              
      <img class="inline-block relative
          
          w-16 h-16
           top-card-layout__entity-image shadow-color-shadow shadow-[0_4px_12px] border-2 border-solid border-color-surface mt-[-70px] mb-[14px] papabear:border-4 papabear:mt-[-100px] papabear:mb-[18px]" data-delayed-url="https://media.licdn.com/dms/image/D4E0BAQFgplzXUs8o1Q/company-logo_200_200/0/1688178772044/sap_logo?e=2147483647&amp;v=beta&amp;t=Bc3kcgnBxbiLNX_nidI3DP0zVMGcU3M3chbTgx_7_5M" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt="SAP">
  
            </div>

          <div class="top-card-layout__entity-info-container flex flex-wrap papabear:flex-nowrap">
            <div class="top-card-layout__entity-info flex-grow flex-shrink-0 basis-0 babybear:flex-none babybear:w-full babybear:flex-none babybear:w-full">
                    <h1 class="top-card-layout__title font-sans text-lg papabear:text-xl font-bold leading-open text-color-text mb-0">
                      SAP
                      
                    </h1>
                <h2 class="top-card-layout__headline break-words font-sans text-md leading-open text-color-text">
                    Software Development
                </h2>

                <h3 class="top-card-layout__first-subline font-sans text-md leading-open text-color-text-low-emphasis">
                  
        Walldorf, BW <span class="before:middot"></span> 3,435,167 followers
      
                </h3>

                <h4 class="top-card-layout__second-subline font-sans text-sm leading-open text-color-text-low-emphasis mt-0.5">
                  
        <span class="line-clamp-2">We bring out the best in every business.</span>
      
                </h4>

              <div class="top-card-layout__cta-container flex flex-wrap mt-0.5 papabear:mt-0 ml-[-12px]">
                    
          <a class="top-card-layout__cta mt-2 ml-1.5 h-auto babybear:flex-auto top-card-layout__cta--primary btn-md btn-primary" href="https://www.linkedin.com/jobs/sap-jobs-worldwide?f_C=2818%2C2573558%2C166185%2C5822%2C1115&amp;trk=top-card_top-card-primary-button-top-card-primary-cta" data-tracking-control-name="top-card_top-card-primary-button-top-card-primary-cta" data-tracking-will-navigate>
            See jobs
          </a>
              

                    
          <a class="top-card-layout__cta mt-2 ml-1.5 h-auto babybear:flex-auto top-card-layout__cta--secondary btn-md btn-secondary" href="https://www.linkedin.com/login?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;fromSignIn=true&amp;trk=top-card_top-card-secondary-button-top-card-secondary-cta" data-tracking-control-name="top-card_top-card-secondary-button-top-card-secondary-cta" data-tracking-will-navigate>
            Follow
          </a>
      
              </div>
            </div>

                <div class="top-card-layout__entity-info flex-grow flex-shrink-0 basis-0 babybear:flex-none babybear:w-full
                    top-card-layout__entity-info--right-column ml-details-container-padding max-w-[288px] babybear:my-2 babybear:ml-0">
                  
        
  
  
  

  <ul>
<!---->
      <li class="papabear:mb-1.5">
        
    <div class="face-pile flex">
      <div class="face-pile__images-container self-start flex-shrink-0 mr-1 leading-[1]">
          
      <img class="inline-block relative
          rounded-[50%]
          w-4 h-4
           face-pile__image border-1 border-solid border-color-transparent -ml-2 first:ml-0" data-delayed-url="https://media.licdn.com/dms/image/C4E03AQE1f3JMHcGt3w/profile-displayphoto-shrink_100_100/0/1516156119569?e=2147483647&amp;v=beta&amp;t=jPcBoPbspRQXYY9TswzjgrHgA1Iobn-FzvNE3khi8Dg" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9c8pery4andzj6ohjkjp54ma2" alt>
  
          
      <img class="inline-block relative
          rounded-[50%]
          w-4 h-4
           face-pile__image border-1 border-solid border-color-transparent -ml-2 first:ml-0" data-delayed-url="https://media.licdn.com/dms/image/C4E03AQHeO6SShJCGnQ/profile-displayphoto-shrink_100_100/0/1516156236821?e=2147483647&amp;v=beta&amp;t=NT3G0YRWol6QKx8MgqMWqf4xaXqqPWS9GxSvVO-JYas" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9c8pery4andzj6ohjkjp54ma2" alt>
  
          
      <img class="inline-block relative
          rounded-[50%]
          w-4 h-4
           face-pile__image border-1 border-solid border-color-transparent -ml-2 first:ml-0" data-delayed-url="https://media.licdn.com/dms/image/D5603AQGoU7tDuHLmOQ/profile-displayphoto-shrink_100_100/0/1688759280213?e=2147483647&amp;v=beta&amp;t=pYZOLSOzJ2Po6Kq5i2a9yT6r2EJL0RTETI9t_HsOyY8" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9c8pery4andzj6ohjkjp54ma2" alt>
  
      </div>
          <a class="face-pile__cta self-center link-no-visited-state" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fsearch%2Fresults%2Fpeople%2F%3FfacetCurrentCompany%3D%255B2818%252C%2B2573558%252C%2B166185%252C%2B5822%252C%2B1115%255D&amp;trk=org-employees_cta_face-pile-cta" data-tracking-control-name="org-employees_cta_face-pile-cta" data-tracking-will-navigate>
            View all 111,584 employees
          </a>
    </div>
  
      </li>

<!---->  </ul>

      
                </div>
          </div>

          

    
    
    
    
    
    
    
    
    
    
    
    
    

      <div class="ellipsis-menu absolute right-0 top-0 top-card-layout__ellipsis-menu mr-1 papabear:mt-0.5 papabear:mr-2">
        

    

    <div class="collapsible-dropdown flex items-center relative hyphens-auto">
          
            <button class="ellipsis-menu__trigger
                collapsible-dropdown__button btn-md btn-tertiary cursor-pointer
                !py-[6px] !px-1 flex items-center rounded-[50%]
                
                " aria-expanded="false" aria-label="Open menu" data-tracking-control-name="top-card_ellipsis-menu-trigger">
              <icon class="ellipsis-menu__trigger-icon m-0 p-0 centered-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/671xosfpvk4c0kqtyl87hashi"></icon>
            </button>
          

        <ul class="collapsible-dropdown__list hidden container-raised absolute w-auto overflow-y-auto flex-col items-stretch z-1 bottom-auto top-[100%]" role="menu" tabindex="-1">
          
              

                <li class="ellipsis-menu__item border-t-1 border-solid border-color-border-low-emphasis first-of-type:border-none flex">
                  

    
    

    

    

    <a href="/uas/login?fromSignIn=true&amp;session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsap&amp;trk=top-card_ellipsis-menu-semaphore-sign-in-redirect&amp;guestReportContentType=COMPANY&amp;_f=guest-reporting" data-tracking-control-name="top-card_ellipsis-menu-semaphore-sign-in-redirect" data-tracking-will-navigate data-item-type="semaphore" data-semaphore-content-type="COMPANY" data-semaphore-content-urn="urn:li:organization:1115" data-semaphore-tracking-prefix="top-card_ellipsis-menu-semaphore" data-is-logged-in="false" data-modal="semaphore__toggle" class="semaphore__toggle visited:text-color-text-secondary ellipsis-menu__semaphore ellipsis-menu__item-button flex items-center w-full p-1 cursor-pointer font-sans text-sm font-bold link-styled focus:link-styled link:no-underline active:bg-color-background-container-tint focus:bg-color-background-container-tint hover:bg-color-background-container-tint outline-offset-[-2px]">
<!---->        
                      <icon class="ellipsis-menu__item-icon text-color-text h-[24px] w-[24px] mr-1" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/iq0x9q37wj214o129ai1yjut">
                      </icon>
                      Report this company
                    
    </a>

<!---->  
                </li>
<!---->          
        </ul>

<!---->    </div>
  

      </div>
  

<!---->      </div>
    </section>
  
  
          
      

        <div class="details mx-details-container-padding">
          
        
            
    

      
    

    <nav aria-label="Secondary" class="tabs mt-3 babybear:mt-0.5" data-test-id="nav-tabs">
      <ul class="tabs__list">
        
          
    
    
    
    

    
    <li class="tab flex ml-3 first-of-type:ml-0">
      <a class="tab__link tab-md hover:no-underline hover:visited:text-color-label hover:focus:text-color-label outline-offset-[-1px] visited:text-color-label
          tab-selected" aria-current="true" href="https://www.linkedin.com/company/sap?trk=nav_type_overview" data-tracking-control-name="nav_type_overview" data-tracking-will-navigate>
          
          Overview
      </a>
    </li>
  
  
<!---->            
    
    
    
    

    
    <li class="tab flex ml-3 first-of-type:ml-0">
      <a class="tab__link tab-md hover:no-underline hover:visited:text-color-label hover:focus:text-color-label outline-offset-[-1px] visited:text-color-label
          " aria-current="false" href="https://www.linkedin.com/company/sap/jobs?trk=nav_type_jobs" data-tracking-control-name="nav_type_jobs" data-tracking-will-navigate>
          
          Jobs
      </a>
    </li>
  
  
            
    
    
    
    

    
    <li class="tab flex ml-3 first-of-type:ml-0">
      <a class="tab__link tab-md hover:no-underline hover:visited:text-color-label hover:focus:text-color-label outline-offset-[-1px] visited:text-color-label
          " aria-current="false" href="https://www.linkedin.com/company/sap/life?trk=nav_type_life" data-tracking-control-name="nav_type_life" data-tracking-will-navigate>
          
          Life
      </a>
    </li>
  
  
        
      </ul>
    </nav>
  
  
            
    
    
    
    
    
    
    
    
    
    
    

      
    <section class="core-section-container my-3 core-section-container--with-border border-b-1 border-solid border-color-border-faint m-0 py-3 text-color-text" data-test-id="about-us">
<!---->
          <h2 class="core-section-container__title section-title">
            About us
          </h2>

<!---->
      <div class="core-section-container__content break-words">
        

          <p class="break-words whitespace-pre-wrap text-color-text" data-test-id="about-us__description">At SAP, our purpose is to help the world run better and improve people’s lives. Our promise is to innovate to help our customers run at their best. SAP is committed to helping every customer become a best-run business. We engineer solutions to fuel innovation, foster equality, and spread opportunity across borders and cultures. Together, with our customers and partners, we can transform industries, grow economies, lift up societies, and sustain our environment. 

SAP privacy statement for followers: www.sap.com/sps</p>

          <dl class="mt-6">
              
    <div class="mb-2 flex papabear:mr-3 mamabear:mr-3 babybear:flex-wrap" data-test-id="about-us__website">
      <dt class="font-sans text-md font-bold text-color-text break-words w-40 papabear:flex-shrink-0 papabear:mr-3 mamabear:flex-shrink-0 mamabear:mr-3 babybear:mb-1">
          Website
      </dt>
      <dd class="font-sans text-md text-color-text break-words overflow-hidden">
        
                  
    <a class="link-no-visited-state hover:no-underline" data-tracking-control-name="about_website" href="https://www.linkedin.com/redir/redirect?url=http%3A%2F%2Fwww%2Esap%2Ecom&amp;urlhash=-6We&amp;trk=about_website" target="_blank" rel="noopener" data-tracking-will-navigate aria-describedby="websiteLinkDescription">
      http://www.sap.com
      <icon class="align-middle" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/49229g4q0jsla5l1xojq1wob9" aria-hidden="true"></icon>
    </a>
  
                  <p class="hidden" id="websiteLinkDescription">External link for SAP</p>
                
      </dd>
    </div>
  
              
    <div class="mb-2 flex papabear:mr-3 mamabear:mr-3 babybear:flex-wrap" data-test-id="about-us__industry">
      <dt class="font-sans text-md font-bold text-color-text break-words w-40 papabear:flex-shrink-0 papabear:mr-3 mamabear:flex-shrink-0 mamabear:mr-3 babybear:mb-1">
          Industry
      </dt>
      <dd class="font-sans text-md text-color-text break-words overflow-hidden">
        
                  Software Development
                
      </dd>
    </div>
  
              
    <div class="mb-2 flex papabear:mr-3 mamabear:mr-3 babybear:flex-wrap" data-test-id="about-us__size">
      <dt class="font-sans text-md font-bold text-color-text break-words w-40 papabear:flex-shrink-0 papabear:mr-3 mamabear:flex-shrink-0 mamabear:mr-3 babybear:mb-1">
          Company size
      </dt>
      <dd class="font-sans text-md text-color-text break-words overflow-hidden">
        
                  

    
    
    
    
    
    
    
    
    

        10,001+ employees
  

                
      </dd>
    </div>
  
              
    <div class="mb-2 flex papabear:mr-3 mamabear:mr-3 babybear:flex-wrap" data-test-id="about-us__headquarters">
      <dt class="font-sans text-md font-bold text-color-text break-words w-40 papabear:flex-shrink-0 papabear:mr-3 mamabear:flex-shrink-0 mamabear:mr-3 babybear:mb-1">
          Headquarters
      </dt>
      <dd class="font-sans text-md text-color-text break-words overflow-hidden">
        
                    Walldorf, BW
                
      </dd>
    </div>
  
              
    <div class="mb-2 flex papabear:mr-3 mamabear:mr-3 babybear:flex-wrap" data-test-id="about-us__organizationType">
      <dt class="font-sans text-md font-bold text-color-text break-words w-40 papabear:flex-shrink-0 papabear:mr-3 mamabear:flex-shrink-0 mamabear:mr-3 babybear:mb-1">
          Type
      </dt>
      <dd class="font-sans text-md text-color-text break-words overflow-hidden">
        
                  Public Company
                
      </dd>
    </div>
  
<!---->
              
    <div class="mb-2 flex papabear:mr-3 mamabear:mr-3 babybear:flex-wrap" data-test-id="about-us__specialties">
      <dt class="font-sans text-md font-bold text-color-text break-words w-40 papabear:flex-shrink-0 papabear:mr-3 mamabear:flex-shrink-0 mamabear:mr-3 babybear:mb-1">
          Specialties
      </dt>
      <dd class="font-sans text-md text-color-text break-words overflow-hidden">
        
                  ERP, Financials, Business Intelligence, Procurement, HCM, SCM, business, planning, efficiency, sustainability, innovation, analytics, reporting, and dashboarding
                
      </dd>
    </div>
  
          </dl>
      
      </div>
    </section>
  
  
            
    
    
    

<!---->  
            
    
    
    
    
    
    
    
    
    

      
    <section class="core-section-container my-3 core-section-container--with-border border-b-1 border-solid border-color-border-faint m-0 py-3 locations">
<!---->
          <h2 class="core-section-container__title section-title">
            Locations
          </h2>

<!---->
      <div class="core-section-container__content break-words">
        
        
    
    

      <div class="show-more-less">
<!---->
        <ul data-max-num-to-show="4" class="show-more-less__list show-more-less__list--hide-after-4" data-impression-id="org-locations_show-more-less">
          
              <li class="mb-3 papabear:w-50% papabear:odd:mr-2 papabear:odd:w-[calc(50%-16px)]">
                  <span class="tag-sm tag-enabled">
                    Primary
                  </span>
                <div id="address-0">
                    <p>
                      Dietmar-Hopp-Allee 16
                    </p>
<!---->                    <p>
                          Walldorf, BW 69190, DE
                    </p>
                </div>
                
    <a class="link-no-visited-state hover:no-underline" data-tracking-control-name="org-locations_url" href="https://www.bing.com/maps?where=Dietmar-Hopp-Allee+16+Walldorf+69190+BW+DE&amp;trk=org-locations_url" target="_blank" rel="noopener" data-tracking-will-navigate aria-describedby="address-0">
      Get directions
      <icon class="align-middle" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/49229g4q0jsla5l1xojq1wob9" aria-hidden="true"></icon>
    </a>
  
              </li>
              <li class="mb-3 papabear:w-50% papabear:odd:mr-2 papabear:odd:w-[calc(50%-16px)]">
<!---->                <div id="address-1">
                    <p>
                      4120 Yonge St
                    </p>
<!---->                    <p>
                          Toronto, Ontario M2P 2B8, CA
                    </p>
                </div>
                
    <a class="link-no-visited-state hover:no-underline" data-tracking-control-name="org-locations_url" href="https://www.bing.com/maps?where=4120+Yonge+St+Toronto+M2P+2B8+Ontario+CA&amp;trk=org-locations_url" target="_blank" rel="noopener" data-tracking-will-navigate aria-describedby="address-1">
      Get directions
      <icon class="align-middle" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/49229g4q0jsla5l1xojq1wob9" aria-hidden="true"></icon>
    </a>
  
              </li>
              <li class="mb-3 papabear:w-50% papabear:odd:mr-2 papabear:odd:w-[calc(50%-16px)]">
<!---->                <div id="address-2">
                    <p>
                      SAP Labs, Inc.
                    </p>
                    <p>
                      3410 Hillview Ave.
                    </p>
                    <p>
                          Palo Alto, CA 94304, US
                    </p>
                </div>
                
    <a class="link-no-visited-state hover:no-underline" data-tracking-control-name="org-locations_url" href="https://www.bing.com/maps?where=SAP+Labs%2C+Inc.+3410+Hillview+Ave.+Palo+Alto+94304+CA+US&amp;trk=org-locations_url" target="_blank" rel="noopener" data-tracking-will-navigate aria-describedby="address-2">
      Get directions
      <icon class="align-middle" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/49229g4q0jsla5l1xojq1wob9" aria-hidden="true"></icon>
    </a>
  
              </li>
              <li class="mb-3 papabear:w-50% papabear:odd:mr-2 papabear:odd:w-[calc(50%-16px)]">
<!---->                <div id="address-3">
                    <p>
                      3999 West Chester Pike
                    </p>
<!---->                    <p>
                          Newtown Square, PA 19073, US
                    </p>
                </div>
                
    <a class="link-no-visited-state hover:no-underline" data-tracking-control-name="org-locations_url" href="https://www.bing.com/maps?where=3999+West+Chester+Pike+Newtown+Square+19073+PA+US&amp;trk=org-locations_url" target="_blank" rel="noopener" data-tracking-will-navigate aria-describedby="address-3">
      Get directions
      <icon class="align-middle" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/49229g4q0jsla5l1xojq1wob9" aria-hidden="true"></icon>
    </a>
  
              </li>
              <li class="mb-3 papabear:w-50% papabear:odd:mr-2 papabear:odd:w-[calc(50%-16px)]">
<!---->                <div id="address-4">
                    <p>
                      DOGOKRO
                    </p>
<!---->                    <p>
                          GANGNAMGU, Seoul, KR
                    </p>
                </div>
                
    <a class="link-no-visited-state hover:no-underline" data-tracking-control-name="org-locations_url" href="https://www.bing.com/maps?where=DOGOKRO+GANGNAMGU+Seoul+KR&amp;trk=org-locations_url" target="_blank" rel="noopener" data-tracking-will-navigate aria-describedby="address-4">
      Get directions
      <icon class="align-middle" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/49229g4q0jsla5l1xojq1wob9" aria-hidden="true"></icon>
    </a>
  
              </li>
              <li class="mb-3 papabear:w-50% papabear:odd:mr-2 papabear:odd:w-[calc(50%-16px)]">
<!---->                <div id="address-5">
                    <p>
                      111 Rue Duke
                    </p>
<!---->                    <p>
                          Montreal, QC H3C 2M1, CA
                    </p>
                </div>
                
    <a class="link-no-visited-state hover:no-underline" data-tracking-control-name="org-locations_url" href="https://www.bing.com/maps?where=111+Rue+Duke+Montreal+H3C+2M1+QC+CA&amp;trk=org-locations_url" target="_blank" rel="noopener" data-tracking-will-navigate aria-describedby="address-5">
      Get directions
      <icon class="align-middle" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/49229g4q0jsla5l1xojq1wob9" aria-hidden="true"></icon>
    </a>
  
              </li>
              <li class="mb-3 papabear:w-50% papabear:odd:mr-2 papabear:odd:w-[calc(50%-16px)]">
<!---->                <div id="address-6">
                    <p>
                      910 Mainland St
                    </p>
<!---->                    <p>
                          Vancouver, BC V6B 1A9, CA
                    </p>
                </div>
                
    <a class="link-no-visited-state hover:no-underline" data-tracking-control-name="org-locations_url" href="https://www.bing.com/maps?where=910+Mainland+St+Vancouver+V6B+1A9+BC+CA&amp;trk=org-locations_url" target="_blank" rel="noopener" data-tracking-will-navigate aria-describedby="address-6">
      Get directions
      <icon class="align-middle" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/49229g4q0jsla5l1xojq1wob9" aria-hidden="true"></icon>
    </a>
  
              </li>
              <li class="mb-3 papabear:w-50% papabear:odd:mr-2 papabear:odd:w-[calc(50%-16px)]">
<!---->                <div id="address-7">
                    <p>
                      Avenida Sap
                    </p>
<!---->                    <p>
                          Sao Leopoldo, RS 93022-718, BR
                    </p>
                </div>
                
    <a class="link-no-visited-state hover:no-underline" data-tracking-control-name="org-locations_url" href="https://www.bing.com/maps?where=Avenida+Sap+Sao+Leopoldo+93022-718+RS+BR&amp;trk=org-locations_url" target="_blank" rel="noopener" data-tracking-will-navigate aria-describedby="address-7">
      Get directions
      <icon class="align-middle" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/49229g4q0jsla5l1xojq1wob9" aria-hidden="true"></icon>
    </a>
  
              </li>
              <li class="mb-3 papabear:w-50% papabear:odd:mr-2 papabear:odd:w-[calc(50%-16px)]">
<!---->                <div id="address-8">
                    <p>
                      287 Si Lom Road
                    </p>
<!---->                    <p>
                          Bangkok, Bangkok City 10500, TH
                    </p>
                </div>
                
    <a class="link-no-visited-state hover:no-underline" data-tracking-control-name="org-locations_url" href="https://www.bing.com/maps?where=287+Si+Lom+Road+Bangkok+10500+Bangkok+City+TH&amp;trk=org-locations_url" target="_blank" rel="noopener" data-tracking-will-navigate aria-describedby="address-8">
      Get directions
      <icon class="align-middle" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/49229g4q0jsla5l1xojq1wob9" aria-hidden="true"></icon>
    </a>
  
              </li>
              <li class="mb-3 papabear:w-50% papabear:odd:mr-2 papabear:odd:w-[calc(50%-16px)]">
<!---->                <div id="address-9">
                    <p>
                      N O Connor Blvd
                    </p>
<!---->                    <p>
                          Irving, TX 75039, US
                    </p>
                </div>
                
    <a class="link-no-visited-state hover:no-underline" data-tracking-control-name="org-locations_url" href="https://www.bing.com/maps?where=N+O+Connor+Blvd+Irving+75039+TX+US&amp;trk=org-locations_url" target="_blank" rel="noopener" data-tracking-will-navigate aria-describedby="address-9">
      Get directions
      <icon class="align-middle" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/49229g4q0jsla5l1xojq1wob9" aria-hidden="true"></icon>
    </a>
  
              </li>
              <li class="mb-3 papabear:w-50% papabear:odd:mr-2 papabear:odd:w-[calc(50%-16px)]">
<!---->                <div id="address-10">
                    <p>
                      Zeppelinstrasse 2
                    </p>
<!---->                    <p>
                          Hallbergmoos, BY 85399, DE
                    </p>
                </div>
                
    <a class="link-no-visited-state hover:no-underline" data-tracking-control-name="org-locations_url" href="https://www.bing.com/maps?where=Zeppelinstrasse+2+Hallbergmoos+85399+BY+DE&amp;trk=org-locations_url" target="_blank" rel="noopener" data-tracking-will-navigate aria-describedby="address-10">
      Get directions
      <icon class="align-middle" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/49229g4q0jsla5l1xojq1wob9" aria-hidden="true"></icon>
    </a>
  
              </li>
          
        </ul>

            <button class="show-more-less__button show-more-less__more-button show-more-less-button
                " aria-expanded="false" data-tracking-control-name="org-locations_show_more">
                
            Show more locations
          
              <icon class="show-more-less__button--chevron show-more-less-button-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cyolgscd0imw2ldqppkrb84vo"></icon>
            </button>

            <button class="show-more-less__button show-more-less__less-button show-more-less-button
                show-more-less__button--hide" aria-expanded="false" data-tracking-control-name="org-locations_show_more">
                
            Show fewer locations
          
              <icon class="show-more-less__button--chevron show-more-less-button-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/4chtt12k98xwnba1nimld2oyg"></icon>
            </button>
      </div>
  
      
      </div>
    </section>
  
  
            
    
    

    
      
    <section class="core-section-container my-3 core-section-container--with-border border-b-1 border-solid border-color-border-faint m-0 py-3" data-test-id="employees-at">
<!---->
          <h2 class="core-section-container__title section-title">
            Employees at SAP
          </h2>

<!---->
      <div class="core-section-container__content break-words">
        
        <ul>
            <li>
              
    
    

    
    
    
      <a href="https://ca.linkedin.com/in/jasonreynoldssupport?trk=org-employees" target="_self" data-tracking-control-name="org-employees" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-main-card flex flex-wrap py-2 pr-2 babybear:pr-0
        
        base-main-card--link">
        

<!---->
      
          
      <img class="inline-block relative
          rounded-[50%]
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/C4E03AQE1f3JMHcGt3w/profile-displayphoto-shrink_100_100/0/1516156119569?e=2147483647&amp;v=beta&amp;t=jPcBoPbspRQXYY9TswzjgrHgA1Iobn-FzvNE3khi8Dg" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9c8pery4andzj6ohjkjp54ma2" alt="Click here to view Jason Reynolds’ profile">
  

        <div class="base-main-card__info self-center ml-1 flex-1 relative break-words papabear:min-w-0 mamabear:min-w-0 babybear:w-full">
          <h3 class="base-main-card__title font-sans text-[18px] font-bold text-color-text overflow-hidden
              ">
            
        Jason Reynolds

<!---->      
          </h3>
          

            <h4 class="base-main-card__subtitle body-text text-color-text overflow-hidden">
              
        Global Leader, Multi-Solution Expert Team, Business Technology Platform Portfolio at SAP
      
            </h4>

<!---->
<!---->        </div>

<!---->      
    
      </a>
  
  
  
  
            </li>
            <li>
              
    
    

    
    
    
      <a href="https://www.linkedin.com/in/cshack?trk=org-employees" target="_self" data-tracking-control-name="org-employees" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-main-card flex flex-wrap py-2 pr-2 babybear:pr-0
        
        base-main-card--link">
        

<!---->
      
          
      <img class="inline-block relative
          rounded-[50%]
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/C4E03AQHeO6SShJCGnQ/profile-displayphoto-shrink_100_100/0/1516156236821?e=2147483647&amp;v=beta&amp;t=NT3G0YRWol6QKx8MgqMWqf4xaXqqPWS9GxSvVO-JYas" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9c8pery4andzj6ohjkjp54ma2" alt="Click here to view Chris Shackelford’s profile">
  

        <div class="base-main-card__info self-center ml-1 flex-1 relative break-words papabear:min-w-0 mamabear:min-w-0 babybear:w-full">
          <h3 class="base-main-card__title font-sans text-[18px] font-bold text-color-text overflow-hidden
              ">
            
        Chris Shackelford

<!---->      
          </h3>
          

            <h4 class="base-main-card__subtitle body-text text-color-text overflow-hidden">
              
        VP, NA West Enterprise Customer Success
      
            </h4>

<!---->
<!---->        </div>

<!---->      
    
      </a>
  
  
  
  
            </li>
            <li>
              
    
    

    
    
    
      <a href="https://www.linkedin.com/in/wnewman?trk=org-employees" target="_self" data-tracking-control-name="org-employees" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-main-card flex flex-wrap py-2 pr-2 babybear:pr-0
        
        base-main-card--link">
        

<!---->
      
          
      <img class="inline-block relative
          rounded-[50%]
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D5603AQGoU7tDuHLmOQ/profile-displayphoto-shrink_100_100/0/1688759280213?e=2147483647&amp;v=beta&amp;t=pYZOLSOzJ2Po6Kq5i2a9yT6r2EJL0RTETI9t_HsOyY8" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9c8pery4andzj6ohjkjp54ma2" alt="Click here to view William Newman’s profile">
  

        <div class="base-main-card__info self-center ml-1 flex-1 relative break-words papabear:min-w-0 mamabear:min-w-0 babybear:w-full">
          <h3 class="base-main-card__title font-sans text-[18px] font-bold text-color-text overflow-hidden
              ">
            
        William Newman

<!---->      
          </h3>
          

            <h4 class="base-main-card__subtitle body-text text-color-text overflow-hidden">
              
        Industry Executive Advisor, Author &amp; Consultant | Car Tech &amp; Wine Guy | LinkedIn Advisor | WSET3 📚 Sommelier Foodie &amp; Influencer | Accidental Orange…
      
            </h4>

<!---->
<!---->        </div>

<!---->      
    
      </a>
  
  
  
  
            </li>
            <li>
              
    
    

    
    
    
      <a href="https://www.linkedin.com/in/amy-summa-feldman?trk=org-employees" target="_self" data-tracking-control-name="org-employees" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-main-card flex flex-wrap py-2 pr-2 babybear:pr-0
        
        base-main-card--link">
        

<!---->
      
          
      <img class="inline-block relative
          rounded-[50%]
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/C4E03AQGfbw6dOQ_8yw/profile-displayphoto-shrink_100_100/0/1628804987946?e=2147483647&amp;v=beta&amp;t=pxbXPYHbyDcndqigBEigq5dGX3JOdwyZNCOfBvibshs" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9c8pery4andzj6ohjkjp54ma2" alt="Click here to view Amy Summa Feldman’s profile">
  

        <div class="base-main-card__info self-center ml-1 flex-1 relative break-words papabear:min-w-0 mamabear:min-w-0 babybear:w-full">
          <h3 class="base-main-card__title font-sans text-[18px] font-bold text-color-text overflow-hidden
              ">
            
        Amy Summa Feldman

<!---->      
          </h3>
          

            <h4 class="base-main-card__subtitle body-text text-color-text overflow-hidden">
              
        Change and Learning Leader for SAP Transformations
      
            </h4>

<!---->
<!---->        </div>

<!---->      
    
      </a>
  
  
  
  
            </li>
        </ul>
        
        <a class="mt-4 inline-block btn-md btn-secondary-emphasis hover:no-underline" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fsearch%2Fresults%2Fpeople%2F%3FfacetCurrentCompany%3D%255B2818%252C%2B2573558%252C%2B166185%252C%2B5822%252C%2B1115%255D&amp;trk=public_biz_employees-join" data-tracking-control-name="public_biz_employees-join" data-tracking-will-navigate>
          See all employees
        </a>
      
      
      </div>
    </section>
  
  
  
            
    

      
    <section class="core-section-container my-3 core-section-container--with-border border-b-1 border-solid border-color-border-faint m-0 py-3 updates" data-test-id="updates">
<!---->
          <h2 class="core-section-container__title section-title">
            Updates
          </h2>

<!---->
      <div class="core-section-container__content break-words">
        
        <ul class="updates__list">
            <li class="mb-1">
              
        
    
          
  
      

    <article class="relative pt-1.5 px-2 pb-0 bg-color-background-container
        container-lined main-feed-activity-card papabear:max-w-[550px]" data-activity-urn="urn:li:activity:7125723264361848832" data-featured-activity-urn="urn:li:activity:7125723264361848832" data-attributed-urn="urn:li:ugcPost:7125723263804035072" data-id="main-feed-card">
      
              
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    

    
    

<!---->  
        

      
            

    
    
    
    
    
    
    
    
    
    
    

    <div class="flex items-center font-sans mb-1" data-test-id="main-feed-activity-card__entity-lockup">
          <a href="https://de.linkedin.com/company/sap?trk=organization_guest_main-feed-card_feed-actor-image" class="relative" data-tracking-control-name="organization_guest_main-feed-card_feed-actor-image" data-tracking-will-navigate>
            
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D4E0BAQFgplzXUs8o1Q/company-logo_100_100/0/1688178772044/sap_logo?e=2147483647&amp;v=beta&amp;t=juX9BS1x_7d30VNK3nlyHDIm6fuuA1o_TsFISNSyU2M" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt="View organization page for SAP">
  
<!---->          </a>
      <div class="flex flex-col self-start min-w-0 ml-1">
        <div class="text-color-text ">
            <a class="text-sm link-styled no-underline leading-open" href="https://de.linkedin.com/company/sap?trk=organization_guest_main-feed-card_feed-actor-name" data-tracking-control-name="organization_guest_main-feed-card_feed-actor-name" aria-label="View organization page for SAP" data-tracking-will-navigate>
              SAP
            </a>
<!----><!---->        </div>

            <p class="!text-xs text-color-text-low-emphasis leading-[1.33333] m-0 truncate">
<!---->                3,435,167 followers
            </p>

            <span class="!text-xs text-color-text-low-emphasis leading-[1.33333] flex">
                <time class="flex-none">
                  

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      3mo
  
                    <span aria-hidden="true" class="text-color-text-low-emphasis before:middot"></span>
                    <span>
                      Edited
                    </span>
                </time>
<!---->            </span>
                </div>

<!---->    </div>
  
        

      
              

    
    
    
    
    
    
    
    
    
    
    
    
    

      <div class="ellipsis-menu absolute right-0 top-0 !mr-0.5" data-test-id="main-feed-activity-card__ellipsis-menu">
        

    

    <div class="collapsible-dropdown flex items-center relative hyphens-auto">
          
            <button class="ellipsis-menu__trigger
                collapsible-dropdown__button btn-md btn-tertiary cursor-pointer
                !py-[6px] !px-1 flex items-center rounded-[50%]
                
                " aria-expanded="false" aria-label="Open menu" data-tracking-control-name="organization_guest_main-feed-card_ellipsis-menu-trigger">
              <icon class="ellipsis-menu__trigger-icon m-0 p-0 centered-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/671xosfpvk4c0kqtyl87hashi"></icon>
            </button>
          

        <ul class="collapsible-dropdown__list hidden container-raised absolute w-auto overflow-y-auto flex-col items-stretch z-1 bottom-auto top-[100%]" role="menu" tabindex="-1">
          
              

                <li class="ellipsis-menu__item border-t-1 border-solid border-color-border-low-emphasis first-of-type:border-none flex">
                  

    
    

    

    

    <a href="/uas/login?fromSignIn=true&amp;session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_ellipsis-menu-semaphore-sign-in-redirect&amp;guestReportContentType=POST&amp;_f=guest-reporting" data-tracking-control-name="organization_guest_main-feed-card_ellipsis-menu-semaphore-sign-in-redirect" data-tracking-will-navigate data-item-type="semaphore" data-semaphore-content-type="POST" data-semaphore-content-urn="urn:li:activity:7125723264361848832" data-semaphore-tracking-prefix="organization_guest_main-feed-card_ellipsis-menu-semaphore" data-is-logged-in="false" data-modal="semaphore__toggle" class="semaphore__toggle visited:text-color-text-secondary ellipsis-menu__semaphore ellipsis-menu__item-button flex items-center w-full p-1 cursor-pointer font-sans text-sm font-bold link-styled focus:link-styled link:no-underline active:bg-color-background-container-tint focus:bg-color-background-container-tint hover:bg-color-background-container-tint outline-offset-[-2px]">
<!---->        
                      <icon class="ellipsis-menu__item-icon text-color-text h-[24px] w-[24px] mr-1" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/iq0x9q37wj214o129ai1yjut">
                      </icon>
                      Report this post
                    
    </a>

<!---->  
                </li>
<!---->          
        </ul>

<!---->    </div>
  

      </div>
  
        

      
            
            
  <div class="attributed-text-segment-list__container relative mt-1 mb-1.5 babybear:mt-0 babybear:mb-0.5">
    <p class="attributed-text-segment-list__content text-color-text !text-sm whitespace-pre-wrap break-words
        " dir="ltr" data-test-id="main-feed-activity-card__commentary">Introducing SAP Build Code, generative AI-based code development with Joule. Build faster, integrate smoother, and collaborate easier. <a class="link" href="https://lnkd.in/dMbp7MM4?trk=organization_guest_main-feed-card-text" target="_self" rel="nofollow" data-tracking-control-name="organization_guest_main-feed-card-text" data-tracking-will-navigate>https://lnkd.in/dMbp7MM4</a> </p>
<!---->  </div>



        

      
            
      
<!---->      
    <div class="share-native-video w-main-feed-card-media
          " data-test-id="feed-native-video-content">
      <video class="share-native-video__node video-js" data-sources="[{&quot;src&quot;:&quot;https://dms.licdn.com/playlist/vid/D4E10AQHgE-nMcRDcrQ/mp4-640p-30fp-crf28/0/1698904813438?e=2147483647&amp;v=beta&amp;t=Q-yCrz-HsPhjPWLKuw6afUq2DfjyxoGXZ2haDJ4-C0U&quot;,&quot;type&quot;:&quot;video/mp4&quot;,&quot;data-bitrate&quot;:280905},{&quot;src&quot;:&quot;https://dms.licdn.com/playlist/vid/D4E10AQHgE-nMcRDcrQ/mp4-360p-30fp-crf28/0/1698904813302?e=2147483647&amp;v=beta&amp;t=7YRQtF2MuiMKTwGrI5U81NbwyVYyte8-g5ZJgryuC6A&quot;,&quot;type&quot;:&quot;video/mp4&quot;,&quot;data-bitrate&quot;:132544},{&quot;src&quot;:&quot;https://dms.licdn.com/playlist/vid/D4E10AQHgE-nMcRDcrQ/mp4-720p-30fp-crf28/0/1698904814708?e=2147483647&amp;v=beta&amp;t=nWFxwwPmza4K1IMcglZZ6EhC8qDztOnDgEKBdEYHnBw&quot;,&quot;type&quot;:&quot;video/mp4&quot;,&quot;data-bitrate&quot;:334056}]" data-poster-url="https://media.licdn.com/dms/image/D4E10AQHgE-nMcRDcrQ/videocover-high/0/1698904809019?e=2147483647&amp;v=beta&amp;t=u_QsE_DQGByawFzt4dRRPu1RwCcXPngOrYp2z-WnFyA" data-digitalmedia-asset-urn="urn:li:digitalmediaAsset:D4E10AQHgE-nMcRDcrQ" data-tracking-id="cxLJWg4wQHm6YtJlx/wNvw==" playsinline>
      </video>
    </div>
  
<!---->  
  
                  

      
          
<!---->    
        

      
          
<!---->    
        

      
          
      
    
    
    
    
    
    
    
    
    

      <div class="flex items-center font-sans text-sm babybear:text-xs main-feed-activity-card__social-actions">
            
      <a href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_social-actions-reactions" target="_self" data-tracking-control-name="organization_guest_main-feed-card_social-actions-reactions" data-tracking-will-navigate class="flex items-center font-normal text-color-text-low-emphasis no-underline visited:text-color-text-low-emphasis  my-1" aria-label="4,072 Reactions" data-separate-ctas="false" data-test-id="social-actions__reactions" data-id="social-actions__reactions" data-num-reactions="4072" data-singular="%numReactions%" data-plural="%numReactions%">
        
                    <img alt data-reaction-type="LIKE" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/9sun4diznbhgyelaeryxy75ur" height="16px" width="16px">
                    <img alt data-reaction-type="PRAISE" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cjrxeu0ese8oxe32kiom8kzoh" height="16px" width="16px">
                    <img alt data-reaction-type="EMPATHY" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/37hg81qnm85dsy5mbqfifg9qs" height="16px" width="16px">

              <span class="font-normal ml-0.5" data-test-id="social-actions__reaction-count">
                    4,072
              </span>
            
      </a>
  
                  <code id="social-actions__reaction-image-APPRECIATION" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/cib97epu77mrzque5gqlzjgaw"--></code>
<!----><!---->                  <code id="social-actions__reaction-image-EMPATHY" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/37hg81qnm85dsy5mbqfifg9qs"--></code>
                  <code id="social-actions__reaction-image-ENTERTAINMENT" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/e7ppwfmo0if15fgie4q5r4us4"--></code>
<!---->                  <code id="social-actions__reaction-image-INTEREST" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/4v7dh2d6cuqm24mzps1pqzeqt"--></code>
                  <code id="social-actions__reaction-image-LIKE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/9sun4diznbhgyelaeryxy75ur"--></code>
                  <code id="social-actions__reaction-image-MAYBE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/4iy169rwfs5rdhspekg2r5wc6"--></code>
                  <code id="social-actions__reaction-image-PRAISE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/cjrxeu0ese8oxe32kiom8kzoh"--></code>
<!----><!---->
            
      <a href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_social-actions-comments" target="_self" data-tracking-control-name="organization_guest_main-feed-card_social-actions-comments" data-tracking-will-navigate class="flex items-center font-normal text-color-text-low-emphasis no-underline visited:text-color-text-low-emphasis
                before:middot
                my-1" data-separate-ctas="false" data-test-id="social-actions__comments" data-id="social-actions__comments" data-num-comments="60" data-singular="%numComments% Comment" data-plural="%numComments% Comments">
        
                60 Comments
            
      </a>
  
      </div>
  
  
        

      
              
    
    
    

    <div class="social-action-bar flex flex-wrap border-t-1 border-solid border-color-border-faint min-h-[44px] items-center babybear:justify-around !m-0">
      
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_like-cta" data-tracking-control-name="organization_guest_main-feed-card_like-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/70k0g8kmgdfjjymflqqzipzxj">
    </icon>
    <span class="social-action-bar__button-text">
      Like
    </span>
  </a>

        
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_comment-cta" data-tracking-control-name="organization_guest_main-feed-card_comment-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/4ol9mo4lxvobj5ww3va90wz1o">
    </icon>
    <span class="social-action-bar__button-text">
      Comment
    </span>
  </a>

        
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_share-cta" data-tracking-control-name="organization_guest_main-feed-card_share-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/852gyy4s01pfis5qf9k99s6d2">
    </icon>
    <span class="social-action-bar__button-text">
      Share
    </span>
  </a>

    </div>
  
                    

      
<!---->        

      
            
      
    
        
    </article>
  
      <code id="is-mobile" style="display: none"><!--false--></code>
  

        

  
            </li>
            <li class="mb-1">
              
        
    
          
  
      

    <article class="relative pt-1.5 px-2 pb-0 bg-color-background-container
        container-lined main-feed-activity-card papabear:max-w-[550px]" data-activity-urn="urn:li:activity:7158474026414182400" data-featured-activity-urn="urn:li:activity:7158474026414182400" data-attributed-urn="urn:li:share:7158474023645962240" data-id="main-feed-card">
      
              
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    

    
    

<!---->  
        

      
            

    
    
    
    
    
    
    
    
    
    
    

    <div class="flex items-center font-sans mb-1" data-test-id="main-feed-activity-card__entity-lockup">
          <a href="https://de.linkedin.com/company/sap?trk=organization_guest_main-feed-card_feed-actor-image" class="relative" data-tracking-control-name="organization_guest_main-feed-card_feed-actor-image" data-tracking-will-navigate>
            
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D4E0BAQFgplzXUs8o1Q/company-logo_100_100/0/1688178772044/sap_logo?e=2147483647&amp;v=beta&amp;t=juX9BS1x_7d30VNK3nlyHDIm6fuuA1o_TsFISNSyU2M" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt="View organization page for SAP">
  
<!---->          </a>
      <div class="flex flex-col self-start min-w-0 ml-1">
        <div class="text-color-text ">
            <a class="text-sm link-styled no-underline leading-open" href="https://de.linkedin.com/company/sap?trk=organization_guest_main-feed-card_feed-actor-name" data-tracking-control-name="organization_guest_main-feed-card_feed-actor-name" aria-label="View organization page for SAP" data-tracking-will-navigate>
              SAP
            </a>
<!----><!---->        </div>

            <p class="!text-xs text-color-text-low-emphasis leading-[1.33333] m-0 truncate">
<!---->                3,435,167 followers
            </p>

            <span class="!text-xs text-color-text-low-emphasis leading-[1.33333] flex">
                <time class="flex-none">
                  

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      1h
  
<!---->                </time>
<!---->            </span>
                </div>

<!---->    </div>
  
        

      
              

    
    
    
    
    
    
    
    
    
    
    
    
    

      <div class="ellipsis-menu absolute right-0 top-0 !mr-0.5" data-test-id="main-feed-activity-card__ellipsis-menu">
        

    

    <div class="collapsible-dropdown flex items-center relative hyphens-auto">
          
            <button class="ellipsis-menu__trigger
                collapsible-dropdown__button btn-md btn-tertiary cursor-pointer
                !py-[6px] !px-1 flex items-center rounded-[50%]
                
                " aria-expanded="false" aria-label="Open menu" data-tracking-control-name="organization_guest_main-feed-card_ellipsis-menu-trigger">
              <icon class="ellipsis-menu__trigger-icon m-0 p-0 centered-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/671xosfpvk4c0kqtyl87hashi"></icon>
            </button>
          

        <ul class="collapsible-dropdown__list hidden container-raised absolute w-auto overflow-y-auto flex-col items-stretch z-1 bottom-auto top-[100%]" role="menu" tabindex="-1">
          
              

                <li class="ellipsis-menu__item border-t-1 border-solid border-color-border-low-emphasis first-of-type:border-none flex">
                  

    
    

    

    

    <a href="/uas/login?fromSignIn=true&amp;session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_ellipsis-menu-semaphore-sign-in-redirect&amp;guestReportContentType=POST&amp;_f=guest-reporting" data-tracking-control-name="organization_guest_main-feed-card_ellipsis-menu-semaphore-sign-in-redirect" data-tracking-will-navigate data-item-type="semaphore" data-semaphore-content-type="POST" data-semaphore-content-urn="urn:li:activity:7158474026414182400" data-semaphore-tracking-prefix="organization_guest_main-feed-card_ellipsis-menu-semaphore" data-is-logged-in="false" data-modal="semaphore__toggle" class="semaphore__toggle visited:text-color-text-secondary ellipsis-menu__semaphore ellipsis-menu__item-button flex items-center w-full p-1 cursor-pointer font-sans text-sm font-bold link-styled focus:link-styled link:no-underline active:bg-color-background-container-tint focus:bg-color-background-container-tint hover:bg-color-background-container-tint outline-offset-[-2px]">
<!---->        
                      <icon class="ellipsis-menu__item-icon text-color-text h-[24px] w-[24px] mr-1" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/iq0x9q37wj214o129ai1yjut">
                      </icon>
                      Report this post
                    
    </a>

<!---->  
                </li>
<!---->          
        </ul>

<!---->    </div>
  

      </div>
  
        

      
            
            
  <div class="attributed-text-segment-list__container relative mt-1 mb-1.5 babybear:mt-0 babybear:mb-0.5">
    <p class="attributed-text-segment-list__content text-color-text !text-sm whitespace-pre-wrap break-words
        " dir="ltr" data-test-id="main-feed-activity-card__commentary">Developers – we know you’ve got feedback. 😉 Share your thoughts by participating in our developer insights survey.</p>
<!---->  </div>



        

      
            
      
<!---->      
    
    

    
      <a href="https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fsap%2Eto%2F6048pXlir&amp;urlhash=DON6&amp;trk=organization_guest_main-feed-card_feed-article-content" target="_self" data-tracking-control-name="organization_guest_main-feed-card_feed-article-content" data-tracking-will-navigate class="flex flex-col" data-test-id="article-content">
        

        <img alt="2024's SAP Developer Insights Survey is Ready for You" class="lazy-load w-main-feed-card-media object-cover babybear:max-h-[225px]" data-delayed-url="https://media.licdn.com/dms/image/D5610AQGTWRcJSULD5Q/image-shrink_1280/0/1706713201169?e=2147483647&amp;v=beta&amp;t=ZrulKXhpJ1leaWB1xys7JVCNxoBqk6x-Eo2U9mlQWGM" data-ghost-classes="tw-feed-content-ghost-image" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9l8dv1r8a09nem281grvopn9l">
      <section class="flex justify-between article-content__header
           py-1">
        <header>
            <h3 class="tw-feed-content-title" dir="ltr" data-test-id="article-content__title">
              2024's SAP Developer Insights Survey is Ready for You
            </h3>

<!---->        </header>
<!---->      </section>
    
      </a>
  
  
  
      
  
                  

      
          
<!---->    
        

      
          
<!---->    
        

      
          
      
    
    
    
    
    
    
    
    
    

      <div class="flex items-center font-sans text-sm babybear:text-xs main-feed-activity-card__social-actions">
            
      <a href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_social-actions-reactions" target="_self" data-tracking-control-name="organization_guest_main-feed-card_social-actions-reactions" data-tracking-will-navigate class="flex items-center font-normal text-color-text-low-emphasis no-underline visited:text-color-text-low-emphasis  my-1" aria-label="20 Reactions" data-separate-ctas="false" data-test-id="social-actions__reactions" data-id="social-actions__reactions" data-num-reactions="20" data-singular="%numReactions%" data-plural="%numReactions%">
        
                    <img alt data-reaction-type="LIKE" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/9sun4diznbhgyelaeryxy75ur" height="16px" width="16px">

              <span class="font-normal ml-0.5" data-test-id="social-actions__reaction-count">
                    20
              </span>
            
      </a>
  
                  <code id="social-actions__reaction-image-APPRECIATION" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/cib97epu77mrzque5gqlzjgaw"--></code>
<!----><!---->                  <code id="social-actions__reaction-image-EMPATHY" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/37hg81qnm85dsy5mbqfifg9qs"--></code>
                  <code id="social-actions__reaction-image-ENTERTAINMENT" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/e7ppwfmo0if15fgie4q5r4us4"--></code>
<!---->                  <code id="social-actions__reaction-image-INTEREST" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/4v7dh2d6cuqm24mzps1pqzeqt"--></code>
                  <code id="social-actions__reaction-image-LIKE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/9sun4diznbhgyelaeryxy75ur"--></code>
                  <code id="social-actions__reaction-image-MAYBE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/4iy169rwfs5rdhspekg2r5wc6"--></code>
                  <code id="social-actions__reaction-image-PRAISE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/cjrxeu0ese8oxe32kiom8kzoh"--></code>
<!----><!---->
<!---->      </div>
  
  
        

      
              
    
    
    

    <div class="social-action-bar flex flex-wrap border-t-1 border-solid border-color-border-faint min-h-[44px] items-center babybear:justify-around !m-0">
      
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_like-cta" data-tracking-control-name="organization_guest_main-feed-card_like-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/70k0g8kmgdfjjymflqqzipzxj">
    </icon>
    <span class="social-action-bar__button-text">
      Like
    </span>
  </a>

        
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_comment-cta" data-tracking-control-name="organization_guest_main-feed-card_comment-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/4ol9mo4lxvobj5ww3va90wz1o">
    </icon>
    <span class="social-action-bar__button-text">
      Comment
    </span>
  </a>

        
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_share-cta" data-tracking-control-name="organization_guest_main-feed-card_share-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/852gyy4s01pfis5qf9k99s6d2">
    </icon>
    <span class="social-action-bar__button-text">
      Share
    </span>
  </a>

    </div>
  
                    

      
<!---->        

      
            
      
    
        
    </article>
  
      <code id="is-mobile" style="display: none"><!--false--></code>
  

        

  
            </li>
            <li class="mb-1">
              
        
    
          
  
      

    <article class="relative pt-1.5 px-2 pb-0 bg-color-background-container
        container-lined main-feed-activity-card papabear:max-w-[550px]" data-activity-urn="urn:li:activity:7158111890353635328" data-featured-activity-urn="urn:li:activity:7158111890353635328" data-attributed-urn="urn:li:share:7158111889615413248" data-id="main-feed-card">
      
              
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    

    
    

<!---->  
        

      
            

    
    
    
    
    
    
    
    
    
    
    

    <div class="flex items-center font-sans mb-1" data-test-id="main-feed-activity-card__entity-lockup">
          <a href="https://de.linkedin.com/company/sap?trk=organization_guest_main-feed-card_feed-actor-image" class="relative" data-tracking-control-name="organization_guest_main-feed-card_feed-actor-image" data-tracking-will-navigate>
            
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D4E0BAQFgplzXUs8o1Q/company-logo_100_100/0/1688178772044/sap_logo?e=2147483647&amp;v=beta&amp;t=juX9BS1x_7d30VNK3nlyHDIm6fuuA1o_TsFISNSyU2M" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt="View organization page for SAP">
  
<!---->          </a>
      <div class="flex flex-col self-start min-w-0 ml-1">
        <div class="text-color-text ">
            <a class="text-sm link-styled no-underline leading-open" href="https://de.linkedin.com/company/sap?trk=organization_guest_main-feed-card_feed-actor-name" data-tracking-control-name="organization_guest_main-feed-card_feed-actor-name" aria-label="View organization page for SAP" data-tracking-will-navigate>
              SAP
            </a>
<!----><!---->        </div>

            <p class="!text-xs text-color-text-low-emphasis leading-[1.33333] m-0 truncate">
<!---->                3,435,167 followers
            </p>

            <span class="!text-xs text-color-text-low-emphasis leading-[1.33333] flex">
                <time class="flex-none">
                  

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      1d
  
<!---->                </time>
<!---->            </span>
                </div>

<!---->    </div>
  
        

      
              

    
    
    
    
    
    
    
    
    
    
    
    
    

      <div class="ellipsis-menu absolute right-0 top-0 !mr-0.5" data-test-id="main-feed-activity-card__ellipsis-menu">
        

    

    <div class="collapsible-dropdown flex items-center relative hyphens-auto">
          
            <button class="ellipsis-menu__trigger
                collapsible-dropdown__button btn-md btn-tertiary cursor-pointer
                !py-[6px] !px-1 flex items-center rounded-[50%]
                
                " aria-expanded="false" aria-label="Open menu" data-tracking-control-name="organization_guest_main-feed-card_ellipsis-menu-trigger">
              <icon class="ellipsis-menu__trigger-icon m-0 p-0 centered-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/671xosfpvk4c0kqtyl87hashi"></icon>
            </button>
          

        <ul class="collapsible-dropdown__list hidden container-raised absolute w-auto overflow-y-auto flex-col items-stretch z-1 bottom-auto top-[100%]" role="menu" tabindex="-1">
          
              

                <li class="ellipsis-menu__item border-t-1 border-solid border-color-border-low-emphasis first-of-type:border-none flex">
                  

    
    

    

    

    <a href="/uas/login?fromSignIn=true&amp;session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_ellipsis-menu-semaphore-sign-in-redirect&amp;guestReportContentType=POST&amp;_f=guest-reporting" data-tracking-control-name="organization_guest_main-feed-card_ellipsis-menu-semaphore-sign-in-redirect" data-tracking-will-navigate data-item-type="semaphore" data-semaphore-content-type="POST" data-semaphore-content-urn="urn:li:activity:7158111890353635328" data-semaphore-tracking-prefix="organization_guest_main-feed-card_ellipsis-menu-semaphore" data-is-logged-in="false" data-modal="semaphore__toggle" class="semaphore__toggle visited:text-color-text-secondary ellipsis-menu__semaphore ellipsis-menu__item-button flex items-center w-full p-1 cursor-pointer font-sans text-sm font-bold link-styled focus:link-styled link:no-underline active:bg-color-background-container-tint focus:bg-color-background-container-tint hover:bg-color-background-container-tint outline-offset-[-2px]">
<!---->        
                      <icon class="ellipsis-menu__item-icon text-color-text h-[24px] w-[24px] mr-1" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/iq0x9q37wj214o129ai1yjut">
                      </icon>
                      Report this post
                    
    </a>

<!---->  
                </li>
<!---->          
        </ul>

<!---->    </div>
  

      </div>
  
        

      
            
            
  <div class="attributed-text-segment-list__container relative mt-1 mb-1.5 babybear:mt-0 babybear:mb-0.5">
    <p class="attributed-text-segment-list__content text-color-text !text-sm whitespace-pre-wrap break-words
        " dir="ltr" data-test-id="main-feed-activity-card__commentary">We are helping our customers with incentives to make it easier to switch to cloud ERP. Learn more about the RISE with SAP Migration and Modernization program. <a class="link" href="https://sap.to/6044pV9J4?trk=organization_guest_main-feed-card-text" target="_self" rel="nofollow" data-tracking-control-name="organization_guest_main-feed-card-text" data-tracking-will-navigate>https://sap.to/6044pV9J4</a></p>
<!---->  </div>



        

      
            
      
<!---->      
    
    

    
      <a href="https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fsap%2Eto%2F6044pV9J4&amp;urlhash=f-HI&amp;trk=organization_guest_main-feed-card_feed-article-content" target="_self" data-tracking-control-name="organization_guest_main-feed-card_feed-article-content" data-tracking-will-navigate class="flex flex-col" data-test-id="article-content">
        

        <img alt="SAP Helps Customers Build a Cloud-First Business Strategy" class="lazy-load w-main-feed-card-media object-cover babybear:max-h-[225px]" data-delayed-url="https://media.licdn.com/dms/image/D4E10AQFzDsZKPJZcDg/image-shrink_1280/0/1706626861646?e=2147483647&amp;v=beta&amp;t=BtuARtThd3HeaozUgTYnbubfiQRUnnWgw_bm7eOurvQ" data-ghost-classes="tw-feed-content-ghost-image" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9l8dv1r8a09nem281grvopn9l">
      <section class="flex justify-between article-content__header
           py-1">
        <header>
            <h3 class="tw-feed-content-title" dir="ltr" data-test-id="article-content__title">
              SAP Helps Customers Build a Cloud-First Business Strategy
            </h3>

<!---->        </header>
<!---->      </section>
    
      </a>
  
  
  
      
  
                  

      
          
<!---->    
        

      
          
<!---->    
        

      
          
      
    
    
    
    
    
    
    
    
    

      <div class="flex items-center font-sans text-sm babybear:text-xs main-feed-activity-card__social-actions">
            
      <a href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_social-actions-reactions" target="_self" data-tracking-control-name="organization_guest_main-feed-card_social-actions-reactions" data-tracking-will-navigate class="flex items-center font-normal text-color-text-low-emphasis no-underline visited:text-color-text-low-emphasis  my-1" aria-label="148 Reactions" data-separate-ctas="false" data-test-id="social-actions__reactions" data-id="social-actions__reactions" data-num-reactions="148" data-singular="%numReactions%" data-plural="%numReactions%">
        
                    <img alt data-reaction-type="LIKE" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/9sun4diznbhgyelaeryxy75ur" height="16px" width="16px">
                    <img alt data-reaction-type="EMPATHY" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/37hg81qnm85dsy5mbqfifg9qs" height="16px" width="16px">
                    <img alt data-reaction-type="PRAISE" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cjrxeu0ese8oxe32kiom8kzoh" height="16px" width="16px">

              <span class="font-normal ml-0.5" data-test-id="social-actions__reaction-count">
                    148
              </span>
            
      </a>
  
                  <code id="social-actions__reaction-image-APPRECIATION" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/cib97epu77mrzque5gqlzjgaw"--></code>
<!----><!---->                  <code id="social-actions__reaction-image-EMPATHY" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/37hg81qnm85dsy5mbqfifg9qs"--></code>
                  <code id="social-actions__reaction-image-ENTERTAINMENT" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/e7ppwfmo0if15fgie4q5r4us4"--></code>
<!---->                  <code id="social-actions__reaction-image-INTEREST" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/4v7dh2d6cuqm24mzps1pqzeqt"--></code>
                  <code id="social-actions__reaction-image-LIKE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/9sun4diznbhgyelaeryxy75ur"--></code>
                  <code id="social-actions__reaction-image-MAYBE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/4iy169rwfs5rdhspekg2r5wc6"--></code>
                  <code id="social-actions__reaction-image-PRAISE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/cjrxeu0ese8oxe32kiom8kzoh"--></code>
<!----><!---->
<!---->      </div>
  
  
        

      
              
    
    
    

    <div class="social-action-bar flex flex-wrap border-t-1 border-solid border-color-border-faint min-h-[44px] items-center babybear:justify-around !m-0">
      
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_like-cta" data-tracking-control-name="organization_guest_main-feed-card_like-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/70k0g8kmgdfjjymflqqzipzxj">
    </icon>
    <span class="social-action-bar__button-text">
      Like
    </span>
  </a>

        
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_comment-cta" data-tracking-control-name="organization_guest_main-feed-card_comment-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/4ol9mo4lxvobj5ww3va90wz1o">
    </icon>
    <span class="social-action-bar__button-text">
      Comment
    </span>
  </a>

        
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_share-cta" data-tracking-control-name="organization_guest_main-feed-card_share-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/852gyy4s01pfis5qf9k99s6d2">
    </icon>
    <span class="social-action-bar__button-text">
      Share
    </span>
  </a>

    </div>
  
                    

      
<!---->        

      
            
      
    
        
    </article>
  
      <code id="is-mobile" style="display: none"><!--false--></code>
  

        

  
            </li>
            <li class="mb-1">
              
        
    
          
  
      

    <article class="relative pt-1.5 px-2 pb-0 bg-color-background-container
        container-lined main-feed-activity-card papabear:max-w-[550px]" data-activity-urn="urn:li:activity:7157749481801699328" data-featured-activity-urn="urn:li:activity:7157749481801699328" data-attributed-urn="urn:li:ugcPost:7157749422951399425" data-id="main-feed-card">
      
              
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    

    
    

<!---->  
        

      
            

    
    
    
    
    
    
    
    
    
    
    

    <div class="flex items-center font-sans mb-1" data-test-id="main-feed-activity-card__entity-lockup">
          <a href="https://de.linkedin.com/company/sap?trk=organization_guest_main-feed-card_feed-actor-image" class="relative" data-tracking-control-name="organization_guest_main-feed-card_feed-actor-image" data-tracking-will-navigate>
            
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D4E0BAQFgplzXUs8o1Q/company-logo_100_100/0/1688178772044/sap_logo?e=2147483647&amp;v=beta&amp;t=juX9BS1x_7d30VNK3nlyHDIm6fuuA1o_TsFISNSyU2M" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt="View organization page for SAP">
  
<!---->          </a>
      <div class="flex flex-col self-start min-w-0 ml-1">
        <div class="text-color-text ">
            <a class="text-sm link-styled no-underline leading-open" href="https://de.linkedin.com/company/sap?trk=organization_guest_main-feed-card_feed-actor-name" data-tracking-control-name="organization_guest_main-feed-card_feed-actor-name" aria-label="View organization page for SAP" data-tracking-will-navigate>
              SAP
            </a>
<!----><!---->        </div>

            <p class="!text-xs text-color-text-low-emphasis leading-[1.33333] m-0 truncate">
<!---->                3,435,167 followers
            </p>

            <span class="!text-xs text-color-text-low-emphasis leading-[1.33333] flex">
                <time class="flex-none">
                  

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      2d
  
<!---->                </time>
<!---->            </span>
                </div>

<!---->    </div>
  
        

      
              

    
    
    
    
    
    
    
    
    
    
    
    
    

      <div class="ellipsis-menu absolute right-0 top-0 !mr-0.5" data-test-id="main-feed-activity-card__ellipsis-menu">
        

    

    <div class="collapsible-dropdown flex items-center relative hyphens-auto">
          
            <button class="ellipsis-menu__trigger
                collapsible-dropdown__button btn-md btn-tertiary cursor-pointer
                !py-[6px] !px-1 flex items-center rounded-[50%]
                
                " aria-expanded="false" aria-label="Open menu" data-tracking-control-name="organization_guest_main-feed-card_ellipsis-menu-trigger">
              <icon class="ellipsis-menu__trigger-icon m-0 p-0 centered-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/671xosfpvk4c0kqtyl87hashi"></icon>
            </button>
          

        <ul class="collapsible-dropdown__list hidden container-raised absolute w-auto overflow-y-auto flex-col items-stretch z-1 bottom-auto top-[100%]" role="menu" tabindex="-1">
          
              

                <li class="ellipsis-menu__item border-t-1 border-solid border-color-border-low-emphasis first-of-type:border-none flex">
                  

    
    

    

    

    <a href="/uas/login?fromSignIn=true&amp;session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_ellipsis-menu-semaphore-sign-in-redirect&amp;guestReportContentType=POST&amp;_f=guest-reporting" data-tracking-control-name="organization_guest_main-feed-card_ellipsis-menu-semaphore-sign-in-redirect" data-tracking-will-navigate data-item-type="semaphore" data-semaphore-content-type="POST" data-semaphore-content-urn="urn:li:activity:7157749481801699328" data-semaphore-tracking-prefix="organization_guest_main-feed-card_ellipsis-menu-semaphore" data-is-logged-in="false" data-modal="semaphore__toggle" class="semaphore__toggle visited:text-color-text-secondary ellipsis-menu__semaphore ellipsis-menu__item-button flex items-center w-full p-1 cursor-pointer font-sans text-sm font-bold link-styled focus:link-styled link:no-underline active:bg-color-background-container-tint focus:bg-color-background-container-tint hover:bg-color-background-container-tint outline-offset-[-2px]">
<!---->        
                      <icon class="ellipsis-menu__item-icon text-color-text h-[24px] w-[24px] mr-1" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/iq0x9q37wj214o129ai1yjut">
                      </icon>
                      Report this post
                    
    </a>

<!---->  
                </li>
<!---->          
        </ul>

<!---->    </div>
  

      </div>
  
        

      
            
            
  <div class="attributed-text-segment-list__container relative mt-1 mb-1.5 babybear:mt-0 babybear:mb-0.5">
    <p class="attributed-text-segment-list__content text-color-text !text-sm whitespace-pre-wrap break-words
        " dir="ltr" data-test-id="main-feed-activity-card__commentary">What’s new with SAP S/4HANA Cloud Public Edition? Improved productivity across business processes with AI, plus a lot more. Get the details 👉 <a class="link" href="https://sap.to/6040Tfi50?trk=organization_guest_main-feed-card-text" target="_self" rel="nofollow" data-tracking-control-name="organization_guest_main-feed-card-text" data-tracking-will-navigate>https://sap.to/6040Tfi50</a></p>
<!---->  </div>



        

      
            
      
<!---->      
    <div class="share-native-video w-main-feed-card-media
          " data-test-id="feed-native-video-content">
      <video class="share-native-video__node video-js" data-sources="[{&quot;src&quot;:&quot;https://dms.licdn.com/playlist/vid/D4E10AQGLW0pxDSBm6A/mp4-640p-30fp-crf28/0/1706540453287?e=2147483647&amp;v=beta&amp;t=bC_58gpnVzANkaAsptliVeNSM6BewGBynzZ5qByz7hg&quot;,&quot;type&quot;:&quot;video/mp4&quot;,&quot;data-bitrate&quot;:244919},{&quot;src&quot;:&quot;https://dms.licdn.com/playlist/vid/D4E10AQGLW0pxDSBm6A/mp4-360p-30fp-crf28/0/1706540449073?e=2147483647&amp;v=beta&amp;t=dql5knb4zsuu8KJ6L8FMsC61UGKfVHoQZummncGPbaY&quot;,&quot;type&quot;:&quot;video/mp4&quot;,&quot;data-bitrate&quot;:100095},{&quot;src&quot;:&quot;https://dms.licdn.com/playlist/vid/D4E10AQGLW0pxDSBm6A/mp4-720p-30fp-crf28/0/1706540453284?e=2147483647&amp;v=beta&amp;t=3fDMZIhpIVVQM-Nc-JAV_gM67Ij8nYbLI8GPLkRLdRA&quot;,&quot;type&quot;:&quot;video/mp4&quot;,&quot;data-bitrate&quot;:295291}]" data-poster-url="https://media.licdn.com/dms/image/D4E10AQGLW0pxDSBm6A/videocover-high/0/1706540434595?e=2147483647&amp;v=beta&amp;t=AkJ6HcCbWUu3Dh_czEGI1tKUwUgOtzOO8HnXWKGLru4" data-digitalmedia-asset-urn="urn:li:digitalmediaAsset:D4E10AQGLW0pxDSBm6A" data-tracking-id="cjJkv1drS9i6HV/8kyzKZQ==" playsinline>
      </video>
    </div>
  
<!---->  
  
                  

      
          
<!---->    
        

      
          
<!---->    
        

      
          
      
    
    
    
    
    
    
    
    
    

      <div class="flex items-center font-sans text-sm babybear:text-xs main-feed-activity-card__social-actions">
            
      <a href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_social-actions-reactions" target="_self" data-tracking-control-name="organization_guest_main-feed-card_social-actions-reactions" data-tracking-will-navigate class="flex items-center font-normal text-color-text-low-emphasis no-underline visited:text-color-text-low-emphasis  my-1" aria-label="610 Reactions" data-separate-ctas="false" data-test-id="social-actions__reactions" data-id="social-actions__reactions" data-num-reactions="610" data-singular="%numReactions%" data-plural="%numReactions%">
        
                    <img alt data-reaction-type="LIKE" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/9sun4diznbhgyelaeryxy75ur" height="16px" width="16px">
                    <img alt data-reaction-type="PRAISE" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cjrxeu0ese8oxe32kiom8kzoh" height="16px" width="16px">
                    <img alt data-reaction-type="EMPATHY" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/37hg81qnm85dsy5mbqfifg9qs" height="16px" width="16px">

              <span class="font-normal ml-0.5" data-test-id="social-actions__reaction-count">
                    610
              </span>
            
      </a>
  
                  <code id="social-actions__reaction-image-APPRECIATION" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/cib97epu77mrzque5gqlzjgaw"--></code>
<!----><!---->                  <code id="social-actions__reaction-image-EMPATHY" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/37hg81qnm85dsy5mbqfifg9qs"--></code>
                  <code id="social-actions__reaction-image-ENTERTAINMENT" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/e7ppwfmo0if15fgie4q5r4us4"--></code>
<!---->                  <code id="social-actions__reaction-image-INTEREST" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/4v7dh2d6cuqm24mzps1pqzeqt"--></code>
                  <code id="social-actions__reaction-image-LIKE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/9sun4diznbhgyelaeryxy75ur"--></code>
                  <code id="social-actions__reaction-image-MAYBE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/4iy169rwfs5rdhspekg2r5wc6"--></code>
                  <code id="social-actions__reaction-image-PRAISE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/cjrxeu0ese8oxe32kiom8kzoh"--></code>
<!----><!---->
            
      <a href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_social-actions-comments" target="_self" data-tracking-control-name="organization_guest_main-feed-card_social-actions-comments" data-tracking-will-navigate class="flex items-center font-normal text-color-text-low-emphasis no-underline visited:text-color-text-low-emphasis
                before:middot
                my-1" data-separate-ctas="false" data-test-id="social-actions__comments" data-id="social-actions__comments" data-num-comments="8" data-singular="%numComments% Comment" data-plural="%numComments% Comments">
        
                8 Comments
            
      </a>
  
      </div>
  
  
        

      
              
    
    
    

    <div class="social-action-bar flex flex-wrap border-t-1 border-solid border-color-border-faint min-h-[44px] items-center babybear:justify-around !m-0">
      
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_like-cta" data-tracking-control-name="organization_guest_main-feed-card_like-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/70k0g8kmgdfjjymflqqzipzxj">
    </icon>
    <span class="social-action-bar__button-text">
      Like
    </span>
  </a>

        
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_comment-cta" data-tracking-control-name="organization_guest_main-feed-card_comment-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/4ol9mo4lxvobj5ww3va90wz1o">
    </icon>
    <span class="social-action-bar__button-text">
      Comment
    </span>
  </a>

        
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_share-cta" data-tracking-control-name="organization_guest_main-feed-card_share-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/852gyy4s01pfis5qf9k99s6d2">
    </icon>
    <span class="social-action-bar__button-text">
      Share
    </span>
  </a>

    </div>
  
                    

      
<!---->        

      
            
      
    
        
    </article>
  
      <code id="is-mobile" style="display: none"><!--false--></code>
  

        

  
            </li>
            <li class="mb-1">
              
        
    
          
  
      

    <article class="relative pt-1.5 px-2 pb-0 bg-color-background-container
        container-lined main-feed-activity-card papabear:max-w-[550px]" data-activity-urn="urn:li:activity:7156646988485115906" data-featured-activity-urn="urn:li:activity:7156646988485115906" data-attributed-urn="urn:li:share:7156646987176562688" data-id="main-feed-card">
      
              
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    

    
    

<!---->  
        

      
            

    
    
    
    
    
    
    
    
    
    
    

    <div class="flex items-center font-sans mb-1" data-test-id="main-feed-activity-card__entity-lockup">
          <a href="https://de.linkedin.com/company/sap?trk=organization_guest_main-feed-card_feed-actor-image" class="relative" data-tracking-control-name="organization_guest_main-feed-card_feed-actor-image" data-tracking-will-navigate>
            
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D4E0BAQFgplzXUs8o1Q/company-logo_100_100/0/1688178772044/sap_logo?e=2147483647&amp;v=beta&amp;t=juX9BS1x_7d30VNK3nlyHDIm6fuuA1o_TsFISNSyU2M" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt="View organization page for SAP">
  
<!---->          </a>
      <div class="flex flex-col self-start min-w-0 ml-1">
        <div class="text-color-text ">
            <a class="text-sm link-styled no-underline leading-open" href="https://de.linkedin.com/company/sap?trk=organization_guest_main-feed-card_feed-actor-name" data-tracking-control-name="organization_guest_main-feed-card_feed-actor-name" aria-label="View organization page for SAP" data-tracking-will-navigate>
              SAP
            </a>
<!----><!---->        </div>

            <p class="!text-xs text-color-text-low-emphasis leading-[1.33333] m-0 truncate">
<!---->                3,435,167 followers
            </p>

            <span class="!text-xs text-color-text-low-emphasis leading-[1.33333] flex">
                <time class="flex-none">
                  

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      5d
  
<!---->                </time>
<!---->            </span>
                </div>

<!---->    </div>
  
        

      
              

    
    
    
    
    
    
    
    
    
    
    
    
    

      <div class="ellipsis-menu absolute right-0 top-0 !mr-0.5" data-test-id="main-feed-activity-card__ellipsis-menu">
        

    

    <div class="collapsible-dropdown flex items-center relative hyphens-auto">
          
            <button class="ellipsis-menu__trigger
                collapsible-dropdown__button btn-md btn-tertiary cursor-pointer
                !py-[6px] !px-1 flex items-center rounded-[50%]
                
                " aria-expanded="false" aria-label="Open menu" data-tracking-control-name="organization_guest_main-feed-card_ellipsis-menu-trigger">
              <icon class="ellipsis-menu__trigger-icon m-0 p-0 centered-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/671xosfpvk4c0kqtyl87hashi"></icon>
            </button>
          

        <ul class="collapsible-dropdown__list hidden container-raised absolute w-auto overflow-y-auto flex-col items-stretch z-1 bottom-auto top-[100%]" role="menu" tabindex="-1">
          
              

                <li class="ellipsis-menu__item border-t-1 border-solid border-color-border-low-emphasis first-of-type:border-none flex">
                  

    
    

    

    

    <a href="/uas/login?fromSignIn=true&amp;session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_ellipsis-menu-semaphore-sign-in-redirect&amp;guestReportContentType=POST&amp;_f=guest-reporting" data-tracking-control-name="organization_guest_main-feed-card_ellipsis-menu-semaphore-sign-in-redirect" data-tracking-will-navigate data-item-type="semaphore" data-semaphore-content-type="POST" data-semaphore-content-urn="urn:li:activity:7156646988485115906" data-semaphore-tracking-prefix="organization_guest_main-feed-card_ellipsis-menu-semaphore" data-is-logged-in="false" data-modal="semaphore__toggle" class="semaphore__toggle visited:text-color-text-secondary ellipsis-menu__semaphore ellipsis-menu__item-button flex items-center w-full p-1 cursor-pointer font-sans text-sm font-bold link-styled focus:link-styled link:no-underline active:bg-color-background-container-tint focus:bg-color-background-container-tint hover:bg-color-background-container-tint outline-offset-[-2px]">
<!---->        
                      <icon class="ellipsis-menu__item-icon text-color-text h-[24px] w-[24px] mr-1" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/iq0x9q37wj214o129ai1yjut">
                      </icon>
                      Report this post
                    
    </a>

<!---->  
                </li>
<!---->          
        </ul>

<!---->    </div>
  

      </div>
  
        

      
            
            
  <div class="attributed-text-segment-list__container relative mt-1 mb-1.5 babybear:mt-0 babybear:mb-0.5">
    <p class="attributed-text-segment-list__content text-color-text !text-sm whitespace-pre-wrap break-words
        " dir="ltr" data-test-id="main-feed-activity-card__commentary">Remember when just a scratch meant it was game over? 😩 </p>
<!---->  </div>



        

      
            
      
    
    

      <ul class="grid grid-cols-6 grid-rows-[60%_40%] w-main-feed-card-media feed-images-content list-none pl-0
          
          " data-test-id="feed-images-content">
            <li class="bg-color-background-container-tint
                col-span-full row-span-full 
                " data-test-id="feed-images-content__list-item" data-position="0">
                <img class="lazy-load w-full object-cover object-center
                    h-full babybear:max-h-[400px]" data-delayed-url="https://media.licdn.com/dms/image/D4E10AQGBxphniETcgA/image-shrink_800/0/1706277601472?e=2147483647&amp;v=beta&amp;t=H-07tAaY2KkBFUmDLLCLbW7ed-IrEhenZ5vf8eCFnxE" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/921ynb2z53z33mhm3061qvjag" alt="No alternative text description for this image">
<!---->            </li>
      </ul>
<!---->  
  
                  

      
          
<!---->    
        

      
          
<!---->    
        

      
          
      
    
    
    
    
    
    
    
    
    

      <div class="flex items-center font-sans text-sm babybear:text-xs main-feed-activity-card__social-actions">
            
      <a href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_social-actions-reactions" target="_self" data-tracking-control-name="organization_guest_main-feed-card_social-actions-reactions" data-tracking-will-navigate class="flex items-center font-normal text-color-text-low-emphasis no-underline visited:text-color-text-low-emphasis  my-1" aria-label="457 Reactions" data-separate-ctas="false" data-test-id="social-actions__reactions" data-id="social-actions__reactions" data-num-reactions="457" data-singular="%numReactions%" data-plural="%numReactions%">
        
                    <img alt data-reaction-type="LIKE" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/9sun4diznbhgyelaeryxy75ur" height="16px" width="16px">
                    <img alt data-reaction-type="ENTERTAINMENT" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/e7ppwfmo0if15fgie4q5r4us4" height="16px" width="16px">
                    <img alt data-reaction-type="EMPATHY" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/37hg81qnm85dsy5mbqfifg9qs" height="16px" width="16px">

              <span class="font-normal ml-0.5" data-test-id="social-actions__reaction-count">
                    457
              </span>
            
      </a>
  
                  <code id="social-actions__reaction-image-APPRECIATION" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/cib97epu77mrzque5gqlzjgaw"--></code>
<!----><!---->                  <code id="social-actions__reaction-image-EMPATHY" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/37hg81qnm85dsy5mbqfifg9qs"--></code>
                  <code id="social-actions__reaction-image-ENTERTAINMENT" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/e7ppwfmo0if15fgie4q5r4us4"--></code>
<!---->                  <code id="social-actions__reaction-image-INTEREST" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/4v7dh2d6cuqm24mzps1pqzeqt"--></code>
                  <code id="social-actions__reaction-image-LIKE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/9sun4diznbhgyelaeryxy75ur"--></code>
                  <code id="social-actions__reaction-image-MAYBE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/4iy169rwfs5rdhspekg2r5wc6"--></code>
                  <code id="social-actions__reaction-image-PRAISE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/cjrxeu0ese8oxe32kiom8kzoh"--></code>
<!----><!---->
            
      <a href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_social-actions-comments" target="_self" data-tracking-control-name="organization_guest_main-feed-card_social-actions-comments" data-tracking-will-navigate class="flex items-center font-normal text-color-text-low-emphasis no-underline visited:text-color-text-low-emphasis
                before:middot
                my-1" data-separate-ctas="false" data-test-id="social-actions__comments" data-id="social-actions__comments" data-num-comments="20" data-singular="%numComments% Comment" data-plural="%numComments% Comments">
        
                20 Comments
            
      </a>
  
      </div>
  
  
        

      
              
    
    
    

    <div class="social-action-bar flex flex-wrap border-t-1 border-solid border-color-border-faint min-h-[44px] items-center babybear:justify-around !m-0">
      
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_like-cta" data-tracking-control-name="organization_guest_main-feed-card_like-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/70k0g8kmgdfjjymflqqzipzxj">
    </icon>
    <span class="social-action-bar__button-text">
      Like
    </span>
  </a>

        
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_comment-cta" data-tracking-control-name="organization_guest_main-feed-card_comment-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/4ol9mo4lxvobj5ww3va90wz1o">
    </icon>
    <span class="social-action-bar__button-text">
      Comment
    </span>
  </a>

        
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_share-cta" data-tracking-control-name="organization_guest_main-feed-card_share-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/852gyy4s01pfis5qf9k99s6d2">
    </icon>
    <span class="social-action-bar__button-text">
      Share
    </span>
  </a>

    </div>
  
                    

      
<!---->        

      
            
      
    
        
    </article>
  
      <code id="is-mobile" style="display: none"><!--false--></code>
  

        

  
            </li>
            <li class="mb-1">
              
        
    
          
  
      

    <article class="relative pt-1.5 px-2 pb-0 bg-color-background-container
        container-lined main-feed-activity-card papabear:max-w-[550px]" data-activity-urn="urn:li:activity:7156299682036482048" data-featured-activity-urn="urn:li:activity:7156299682036482048" data-attributed-urn="urn:li:share:7156299680912408577" data-id="main-feed-card">
      
              
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    

    
    

<!---->  
        

      
            

    
    
    
    
    
    
    
    
    
    
    

    <div class="flex items-center font-sans mb-1" data-test-id="main-feed-activity-card__entity-lockup">
          <a href="https://de.linkedin.com/company/sap?trk=organization_guest_main-feed-card_feed-actor-image" class="relative" data-tracking-control-name="organization_guest_main-feed-card_feed-actor-image" data-tracking-will-navigate>
            
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D4E0BAQFgplzXUs8o1Q/company-logo_100_100/0/1688178772044/sap_logo?e=2147483647&amp;v=beta&amp;t=juX9BS1x_7d30VNK3nlyHDIm6fuuA1o_TsFISNSyU2M" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt="View organization page for SAP">
  
<!---->          </a>
      <div class="flex flex-col self-start min-w-0 ml-1">
        <div class="text-color-text ">
            <a class="text-sm link-styled no-underline leading-open" href="https://de.linkedin.com/company/sap?trk=organization_guest_main-feed-card_feed-actor-name" data-tracking-control-name="organization_guest_main-feed-card_feed-actor-name" aria-label="View organization page for SAP" data-tracking-will-navigate>
              SAP
            </a>
<!----><!---->        </div>

            <p class="!text-xs text-color-text-low-emphasis leading-[1.33333] m-0 truncate">
<!---->                3,435,167 followers
            </p>

            <span class="!text-xs text-color-text-low-emphasis leading-[1.33333] flex">
                <time class="flex-none">
                  

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      6d
  
<!---->                </time>
<!---->            </span>
                </div>

<!---->    </div>
  
        

      
              

    
    
    
    
    
    
    
    
    
    
    
    
    

      <div class="ellipsis-menu absolute right-0 top-0 !mr-0.5" data-test-id="main-feed-activity-card__ellipsis-menu">
        

    

    <div class="collapsible-dropdown flex items-center relative hyphens-auto">
          
            <button class="ellipsis-menu__trigger
                collapsible-dropdown__button btn-md btn-tertiary cursor-pointer
                !py-[6px] !px-1 flex items-center rounded-[50%]
                
                " aria-expanded="false" aria-label="Open menu" data-tracking-control-name="organization_guest_main-feed-card_ellipsis-menu-trigger">
              <icon class="ellipsis-menu__trigger-icon m-0 p-0 centered-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/671xosfpvk4c0kqtyl87hashi"></icon>
            </button>
          

        <ul class="collapsible-dropdown__list hidden container-raised absolute w-auto overflow-y-auto flex-col items-stretch z-1 bottom-auto top-[100%]" role="menu" tabindex="-1">
          
              

                <li class="ellipsis-menu__item border-t-1 border-solid border-color-border-low-emphasis first-of-type:border-none flex">
                  

    
    

    

    

    <a href="/uas/login?fromSignIn=true&amp;session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_ellipsis-menu-semaphore-sign-in-redirect&amp;guestReportContentType=POST&amp;_f=guest-reporting" data-tracking-control-name="organization_guest_main-feed-card_ellipsis-menu-semaphore-sign-in-redirect" data-tracking-will-navigate data-item-type="semaphore" data-semaphore-content-type="POST" data-semaphore-content-urn="urn:li:activity:7156299682036482048" data-semaphore-tracking-prefix="organization_guest_main-feed-card_ellipsis-menu-semaphore" data-is-logged-in="false" data-modal="semaphore__toggle" class="semaphore__toggle visited:text-color-text-secondary ellipsis-menu__semaphore ellipsis-menu__item-button flex items-center w-full p-1 cursor-pointer font-sans text-sm font-bold link-styled focus:link-styled link:no-underline active:bg-color-background-container-tint focus:bg-color-background-container-tint hover:bg-color-background-container-tint outline-offset-[-2px]">
<!---->        
                      <icon class="ellipsis-menu__item-icon text-color-text h-[24px] w-[24px] mr-1" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/iq0x9q37wj214o129ai1yjut">
                      </icon>
                      Report this post
                    
    </a>

<!---->  
                </li>
<!---->          
        </ul>

<!---->    </div>
  

      </div>
  
        

      
            
            
  <div class="attributed-text-segment-list__container relative mt-1 mb-1.5 babybear:mt-0 babybear:mb-0.5">
    <p class="attributed-text-segment-list__content text-color-text !text-sm whitespace-pre-wrap break-words
        " dir="ltr" data-test-id="main-feed-activity-card__commentary">Take a tour through SAP Datasphere. Experiment with guided exercises, learn how to build analytic models, and more. <a class="link" href="https://sap.to/6040TmreC?trk=organization_guest_main-feed-card-text" target="_self" rel="nofollow" data-tracking-control-name="organization_guest_main-feed-card-text" data-tracking-will-navigate>https://sap.to/6040TmreC</a></p>
<!---->  </div>



        

      
            
      
<!---->      
    
    

    
      <a href="https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fsap%2Eto%2F6040TmreC&amp;urlhash=L3cD&amp;trk=organization_guest_main-feed-card_feed-article-content" target="_self" data-tracking-control-name="organization_guest_main-feed-card_feed-article-content" data-tracking-will-navigate class="flex flex-col" data-test-id="article-content">
        

        <img alt="Start your SAP Datasphere guided experience" class="lazy-load w-main-feed-card-media object-cover babybear:max-h-[225px]" data-delayed-url="https://media.licdn.com/dms/image/D4E10AQGYbt5goD0BDQ/image-shrink_1280/0/1706194801173?e=2147483647&amp;v=beta&amp;t=OjIBNyPzwKGGOJz86y6R5Ljf_bROS4Gv8-XYYYc8o94" data-ghost-classes="tw-feed-content-ghost-image" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9l8dv1r8a09nem281grvopn9l">
      <section class="flex justify-between article-content__header
           py-1">
        <header>
            <h3 class="tw-feed-content-title" dir="ltr" data-test-id="article-content__title">
              Start your SAP Datasphere guided experience
            </h3>

<!---->        </header>
<!---->      </section>
    
      </a>
  
  
  
      
  
                  

      
          
<!---->    
        

      
          
<!---->    
        

      
          
      
    
    
    
    
    
    
    
    
    

      <div class="flex items-center font-sans text-sm babybear:text-xs main-feed-activity-card__social-actions">
            
      <a href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_social-actions-reactions" target="_self" data-tracking-control-name="organization_guest_main-feed-card_social-actions-reactions" data-tracking-will-navigate class="flex items-center font-normal text-color-text-low-emphasis no-underline visited:text-color-text-low-emphasis  my-1" aria-label="231 Reactions" data-separate-ctas="false" data-test-id="social-actions__reactions" data-id="social-actions__reactions" data-num-reactions="231" data-singular="%numReactions%" data-plural="%numReactions%">
        
                    <img alt data-reaction-type="LIKE" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/9sun4diznbhgyelaeryxy75ur" height="16px" width="16px">
                    <img alt data-reaction-type="PRAISE" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cjrxeu0ese8oxe32kiom8kzoh" height="16px" width="16px">
                    <img alt data-reaction-type="EMPATHY" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/37hg81qnm85dsy5mbqfifg9qs" height="16px" width="16px">

              <span class="font-normal ml-0.5" data-test-id="social-actions__reaction-count">
                    231
              </span>
            
      </a>
  
                  <code id="social-actions__reaction-image-APPRECIATION" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/cib97epu77mrzque5gqlzjgaw"--></code>
<!----><!---->                  <code id="social-actions__reaction-image-EMPATHY" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/37hg81qnm85dsy5mbqfifg9qs"--></code>
                  <code id="social-actions__reaction-image-ENTERTAINMENT" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/e7ppwfmo0if15fgie4q5r4us4"--></code>
<!---->                  <code id="social-actions__reaction-image-INTEREST" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/4v7dh2d6cuqm24mzps1pqzeqt"--></code>
                  <code id="social-actions__reaction-image-LIKE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/9sun4diznbhgyelaeryxy75ur"--></code>
                  <code id="social-actions__reaction-image-MAYBE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/4iy169rwfs5rdhspekg2r5wc6"--></code>
                  <code id="social-actions__reaction-image-PRAISE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/cjrxeu0ese8oxe32kiom8kzoh"--></code>
<!----><!---->
            
      <a href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_social-actions-comments" target="_self" data-tracking-control-name="organization_guest_main-feed-card_social-actions-comments" data-tracking-will-navigate class="flex items-center font-normal text-color-text-low-emphasis no-underline visited:text-color-text-low-emphasis
                before:middot
                my-1" data-separate-ctas="false" data-test-id="social-actions__comments" data-id="social-actions__comments" data-num-comments="1" data-singular="%numComments% Comment" data-plural="%numComments% Comments">
        
                1 Comment
            
      </a>
  
      </div>
  
  
        

      
              
    
    
    

    <div class="social-action-bar flex flex-wrap border-t-1 border-solid border-color-border-faint min-h-[44px] items-center babybear:justify-around !m-0">
      
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_like-cta" data-tracking-control-name="organization_guest_main-feed-card_like-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/70k0g8kmgdfjjymflqqzipzxj">
    </icon>
    <span class="social-action-bar__button-text">
      Like
    </span>
  </a>

        
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_comment-cta" data-tracking-control-name="organization_guest_main-feed-card_comment-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/4ol9mo4lxvobj5ww3va90wz1o">
    </icon>
    <span class="social-action-bar__button-text">
      Comment
    </span>
  </a>

        
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_share-cta" data-tracking-control-name="organization_guest_main-feed-card_share-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/852gyy4s01pfis5qf9k99s6d2">
    </icon>
    <span class="social-action-bar__button-text">
      Share
    </span>
  </a>

    </div>
  
                    

      
<!---->        

      
            
      
    
        
    </article>
  
      <code id="is-mobile" style="display: none"><!--false--></code>
  

        

  
            </li>
            <li class="mb-1">
              
        
    
          
  
      

    <article class="relative pt-1.5 px-2 pb-0 bg-color-background-container
        container-lined main-feed-activity-card papabear:max-w-[550px]" data-activity-urn="urn:li:activity:7155699599834251264" data-featured-activity-urn="urn:li:activity:7155699599834251264" data-attributed-urn="urn:li:ugcPost:7155699527008591872" data-id="main-feed-card">
      
              
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    

    
    

<!---->  
        

      
            

    
    
    
    
    
    
    
    
    
    
    

    <div class="flex items-center font-sans mb-1" data-test-id="main-feed-activity-card__entity-lockup">
          <a href="https://de.linkedin.com/company/sap?trk=organization_guest_main-feed-card_feed-actor-image" class="relative" data-tracking-control-name="organization_guest_main-feed-card_feed-actor-image" data-tracking-will-navigate>
            
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D4E0BAQFgplzXUs8o1Q/company-logo_100_100/0/1688178772044/sap_logo?e=2147483647&amp;v=beta&amp;t=juX9BS1x_7d30VNK3nlyHDIm6fuuA1o_TsFISNSyU2M" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt="View organization page for SAP">
  
<!---->          </a>
      <div class="flex flex-col self-start min-w-0 ml-1">
        <div class="text-color-text ">
            <a class="text-sm link-styled no-underline leading-open" href="https://de.linkedin.com/company/sap?trk=organization_guest_main-feed-card_feed-actor-name" data-tracking-control-name="organization_guest_main-feed-card_feed-actor-name" aria-label="View organization page for SAP" data-tracking-will-navigate>
              SAP
            </a>
<!----><!---->        </div>

            <p class="!text-xs text-color-text-low-emphasis leading-[1.33333] m-0 truncate">
<!---->                3,435,167 followers
            </p>

            <span class="!text-xs text-color-text-low-emphasis leading-[1.33333] flex">
                <time class="flex-none">
                  

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      1w
  
<!---->                </time>
<!---->            </span>
                </div>

<!---->    </div>
  
        

      
              

    
    
    
    
    
    
    
    
    
    
    
    
    

      <div class="ellipsis-menu absolute right-0 top-0 !mr-0.5" data-test-id="main-feed-activity-card__ellipsis-menu">
        

    

    <div class="collapsible-dropdown flex items-center relative hyphens-auto">
          
            <button class="ellipsis-menu__trigger
                collapsible-dropdown__button btn-md btn-tertiary cursor-pointer
                !py-[6px] !px-1 flex items-center rounded-[50%]
                
                " aria-expanded="false" aria-label="Open menu" data-tracking-control-name="organization_guest_main-feed-card_ellipsis-menu-trigger">
              <icon class="ellipsis-menu__trigger-icon m-0 p-0 centered-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/671xosfpvk4c0kqtyl87hashi"></icon>
            </button>
          

        <ul class="collapsible-dropdown__list hidden container-raised absolute w-auto overflow-y-auto flex-col items-stretch z-1 bottom-auto top-[100%]" role="menu" tabindex="-1">
          
              

                <li class="ellipsis-menu__item border-t-1 border-solid border-color-border-low-emphasis first-of-type:border-none flex">
                  

    
    

    

    

    <a href="/uas/login?fromSignIn=true&amp;session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_ellipsis-menu-semaphore-sign-in-redirect&amp;guestReportContentType=POST&amp;_f=guest-reporting" data-tracking-control-name="organization_guest_main-feed-card_ellipsis-menu-semaphore-sign-in-redirect" data-tracking-will-navigate data-item-type="semaphore" data-semaphore-content-type="POST" data-semaphore-content-urn="urn:li:activity:7155699599834251264" data-semaphore-tracking-prefix="organization_guest_main-feed-card_ellipsis-menu-semaphore" data-is-logged-in="false" data-modal="semaphore__toggle" class="semaphore__toggle visited:text-color-text-secondary ellipsis-menu__semaphore ellipsis-menu__item-button flex items-center w-full p-1 cursor-pointer font-sans text-sm font-bold link-styled focus:link-styled link:no-underline active:bg-color-background-container-tint focus:bg-color-background-container-tint hover:bg-color-background-container-tint outline-offset-[-2px]">
<!---->        
                      <icon class="ellipsis-menu__item-icon text-color-text h-[24px] w-[24px] mr-1" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/iq0x9q37wj214o129ai1yjut">
                      </icon>
                      Report this post
                    
    </a>

<!---->  
                </li>
<!---->          
        </ul>

<!---->    </div>
  

      </div>
  
        

      
            
            
  <div class="attributed-text-segment-list__container relative mt-1 mb-1.5 babybear:mt-0 babybear:mb-0.5">
    <p class="attributed-text-segment-list__content text-color-text !text-sm whitespace-pre-wrap break-words
        " dir="ltr" data-test-id="main-feed-activity-card__commentary">Today, SAP announced its financial results for Q4 and full-year 2023. <a class="link" href="https://sap.to/6041TjWUZ?trk=organization_guest_main-feed-card-text" target="_self" rel="nofollow" data-tracking-control-name="organization_guest_main-feed-card-text" data-tracking-will-navigate>https://sap.to/6041TjWUZ</a>

🔔 Stay updated with news for investors – follow <a class="link" href="https://de.linkedin.com/showcase/sap-investor-relations/?trk=organization_guest_main-feed-card-text" target="_self" data-tracking-control-name="organization_guest_main-feed-card-text" data-tracking-will-navigate>SAP Investor Relations</a>.</p>
<!---->  </div>



        

      
            
      
<!---->      
    <div class="share-native-video w-main-feed-card-media
          " data-test-id="feed-native-video-content">
      <video class="share-native-video__node video-js" data-sources="[{&quot;src&quot;:&quot;https://dms.licdn.com/playlist/vid/D4E10AQFAeCEhtl2EWg/mp4-640p-30fp-crf28/0/1706051703633?e=2147483647&amp;v=beta&amp;t=F_AxRbxsOuEdPLvGxmZg8yj8NS-bmo2Sm6tEFpuoxg4&quot;,&quot;type&quot;:&quot;video/mp4&quot;,&quot;data-bitrate&quot;:268558},{&quot;src&quot;:&quot;https://dms.licdn.com/playlist/vid/D4E10AQFAeCEhtl2EWg/mp4-360p-30fp-crf28/0/1706051700267?e=2147483647&amp;v=beta&amp;t=kq-qvbWkyiNhnZm2oenhL2IrdIBBdBsfV_d5brCGWTk&quot;,&quot;type&quot;:&quot;video/mp4&quot;,&quot;data-bitrate&quot;:119482},{&quot;src&quot;:&quot;https://dms.licdn.com/playlist/vid/D4E10AQFAeCEhtl2EWg/mp4-720p-30fp-crf28/0/1706051700962?e=2147483647&amp;v=beta&amp;t=XQq0gFiKM0p3TJTcuMU6jNcwZB2ajJBuThKXm4OotPA&quot;,&quot;type&quot;:&quot;video/mp4&quot;,&quot;data-bitrate&quot;:321145}]" data-poster-url="https://media.licdn.com/dms/image/D4E10AQFAeCEhtl2EWg/videocover-high/0/1706051694685?e=2147483647&amp;v=beta&amp;t=UuU8qotpdC9BsFMPoS3a01f14aZcKuT36de_m8II5v0" data-digitalmedia-asset-urn="urn:li:digitalmediaAsset:D4E10AQFAeCEhtl2EWg" data-tracking-id="XsOAurtPRAGoNBIYtKEJug==" playsinline>
      </video>
    </div>
  
<!---->  
  
                  

      
          
<!---->    
        

      
          
<!---->    
        

      
          
      
    
    
    
    
    
    
    
    
    

      <div class="flex items-center font-sans text-sm babybear:text-xs main-feed-activity-card__social-actions">
            
      <a href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_social-actions-reactions" target="_self" data-tracking-control-name="organization_guest_main-feed-card_social-actions-reactions" data-tracking-will-navigate class="flex items-center font-normal text-color-text-low-emphasis no-underline visited:text-color-text-low-emphasis  my-1" aria-label="3,245 Reactions" data-separate-ctas="false" data-test-id="social-actions__reactions" data-id="social-actions__reactions" data-num-reactions="3245" data-singular="%numReactions%" data-plural="%numReactions%">
        
                    <img alt data-reaction-type="LIKE" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/9sun4diznbhgyelaeryxy75ur" height="16px" width="16px">
                    <img alt data-reaction-type="PRAISE" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cjrxeu0ese8oxe32kiom8kzoh" height="16px" width="16px">
                    <img alt data-reaction-type="EMPATHY" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/37hg81qnm85dsy5mbqfifg9qs" height="16px" width="16px">

              <span class="font-normal ml-0.5" data-test-id="social-actions__reaction-count">
                    3,245
              </span>
            
      </a>
  
                  <code id="social-actions__reaction-image-APPRECIATION" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/cib97epu77mrzque5gqlzjgaw"--></code>
<!----><!---->                  <code id="social-actions__reaction-image-EMPATHY" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/37hg81qnm85dsy5mbqfifg9qs"--></code>
                  <code id="social-actions__reaction-image-ENTERTAINMENT" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/e7ppwfmo0if15fgie4q5r4us4"--></code>
<!---->                  <code id="social-actions__reaction-image-INTEREST" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/4v7dh2d6cuqm24mzps1pqzeqt"--></code>
                  <code id="social-actions__reaction-image-LIKE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/9sun4diznbhgyelaeryxy75ur"--></code>
                  <code id="social-actions__reaction-image-MAYBE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/4iy169rwfs5rdhspekg2r5wc6"--></code>
                  <code id="social-actions__reaction-image-PRAISE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/cjrxeu0ese8oxe32kiom8kzoh"--></code>
<!----><!---->
            
      <a href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_social-actions-comments" target="_self" data-tracking-control-name="organization_guest_main-feed-card_social-actions-comments" data-tracking-will-navigate class="flex items-center font-normal text-color-text-low-emphasis no-underline visited:text-color-text-low-emphasis
                before:middot
                my-1" data-separate-ctas="false" data-test-id="social-actions__comments" data-id="social-actions__comments" data-num-comments="15" data-singular="%numComments% Comment" data-plural="%numComments% Comments">
        
                15 Comments
            
      </a>
  
      </div>
  
  
        

      
              
    
    
    

    <div class="social-action-bar flex flex-wrap border-t-1 border-solid border-color-border-faint min-h-[44px] items-center babybear:justify-around !m-0">
      
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_like-cta" data-tracking-control-name="organization_guest_main-feed-card_like-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/70k0g8kmgdfjjymflqqzipzxj">
    </icon>
    <span class="social-action-bar__button-text">
      Like
    </span>
  </a>

        
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_comment-cta" data-tracking-control-name="organization_guest_main-feed-card_comment-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/4ol9mo4lxvobj5ww3va90wz1o">
    </icon>
    <span class="social-action-bar__button-text">
      Comment
    </span>
  </a>

        
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_share-cta" data-tracking-control-name="organization_guest_main-feed-card_share-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/852gyy4s01pfis5qf9k99s6d2">
    </icon>
    <span class="social-action-bar__button-text">
      Share
    </span>
  </a>

    </div>
  
                    

      
<!---->        

      
            
      
    
        
    </article>
  
      <code id="is-mobile" style="display: none"><!--false--></code>
  

        

  
            </li>
            <li class="mb-1">
              
        
    
          
  
      

    <article class="relative pt-1.5 px-2 pb-0 bg-color-background-container
        container-lined main-feed-activity-card papabear:max-w-[550px]" data-activity-urn="urn:li:activity:7155212537595138048" data-featured-activity-urn="urn:li:activity:7155212537595138048" data-attributed-urn="urn:li:share:7155212536814911490" data-id="main-feed-card">
      
              
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    

    
    

<!---->  
        

      
            

    
    
    
    
    
    
    
    
    
    
    

    <div class="flex items-center font-sans mb-1" data-test-id="main-feed-activity-card__entity-lockup">
          <a href="https://de.linkedin.com/company/sap?trk=organization_guest_main-feed-card_feed-actor-image" class="relative" data-tracking-control-name="organization_guest_main-feed-card_feed-actor-image" data-tracking-will-navigate>
            
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D4E0BAQFgplzXUs8o1Q/company-logo_100_100/0/1688178772044/sap_logo?e=2147483647&amp;v=beta&amp;t=juX9BS1x_7d30VNK3nlyHDIm6fuuA1o_TsFISNSyU2M" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt="View organization page for SAP">
  
<!---->          </a>
      <div class="flex flex-col self-start min-w-0 ml-1">
        <div class="text-color-text ">
            <a class="text-sm link-styled no-underline leading-open" href="https://de.linkedin.com/company/sap?trk=organization_guest_main-feed-card_feed-actor-name" data-tracking-control-name="organization_guest_main-feed-card_feed-actor-name" aria-label="View organization page for SAP" data-tracking-will-navigate>
              SAP
            </a>
<!----><!---->        </div>

            <p class="!text-xs text-color-text-low-emphasis leading-[1.33333] m-0 truncate">
<!---->                3,435,167 followers
            </p>

            <span class="!text-xs text-color-text-low-emphasis leading-[1.33333] flex">
                <time class="flex-none">
                  

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      1w
  
<!---->                </time>
<!---->            </span>
                </div>

<!---->    </div>
  
        

      
              

    
    
    
    
    
    
    
    
    
    
    
    
    

      <div class="ellipsis-menu absolute right-0 top-0 !mr-0.5" data-test-id="main-feed-activity-card__ellipsis-menu">
        

    

    <div class="collapsible-dropdown flex items-center relative hyphens-auto">
          
            <button class="ellipsis-menu__trigger
                collapsible-dropdown__button btn-md btn-tertiary cursor-pointer
                !py-[6px] !px-1 flex items-center rounded-[50%]
                
                " aria-expanded="false" aria-label="Open menu" data-tracking-control-name="organization_guest_main-feed-card_ellipsis-menu-trigger">
              <icon class="ellipsis-menu__trigger-icon m-0 p-0 centered-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/671xosfpvk4c0kqtyl87hashi"></icon>
            </button>
          

        <ul class="collapsible-dropdown__list hidden container-raised absolute w-auto overflow-y-auto flex-col items-stretch z-1 bottom-auto top-[100%]" role="menu" tabindex="-1">
          
              

                <li class="ellipsis-menu__item border-t-1 border-solid border-color-border-low-emphasis first-of-type:border-none flex">
                  

    
    

    

    

    <a href="/uas/login?fromSignIn=true&amp;session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_ellipsis-menu-semaphore-sign-in-redirect&amp;guestReportContentType=POST&amp;_f=guest-reporting" data-tracking-control-name="organization_guest_main-feed-card_ellipsis-menu-semaphore-sign-in-redirect" data-tracking-will-navigate data-item-type="semaphore" data-semaphore-content-type="POST" data-semaphore-content-urn="urn:li:activity:7155212537595138048" data-semaphore-tracking-prefix="organization_guest_main-feed-card_ellipsis-menu-semaphore" data-is-logged-in="false" data-modal="semaphore__toggle" class="semaphore__toggle visited:text-color-text-secondary ellipsis-menu__semaphore ellipsis-menu__item-button flex items-center w-full p-1 cursor-pointer font-sans text-sm font-bold link-styled focus:link-styled link:no-underline active:bg-color-background-container-tint focus:bg-color-background-container-tint hover:bg-color-background-container-tint outline-offset-[-2px]">
<!---->        
                      <icon class="ellipsis-menu__item-icon text-color-text h-[24px] w-[24px] mr-1" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/iq0x9q37wj214o129ai1yjut">
                      </icon>
                      Report this post
                    
    </a>

<!---->  
                </li>
<!---->          
        </ul>

<!---->    </div>
  

      </div>
  
        

      
            
            
  <div class="attributed-text-segment-list__container relative mt-1 mb-1.5 babybear:mt-0 babybear:mb-0.5">
    <p class="attributed-text-segment-list__content text-color-text !text-sm whitespace-pre-wrap break-words
        " dir="ltr" data-test-id="main-feed-activity-card__commentary">Trust, training, and access are important for everyone to succeed in a world with AI technology. Julia White shares insights on how we can achieve this. <a class="link" href="https://sap.to/6042r53Dr?trk=organization_guest_main-feed-card-text" target="_self" rel="nofollow" data-tracking-control-name="organization_guest_main-feed-card-text" data-tracking-will-navigate>https://sap.to/6042r53Dr</a></p>
<!---->  </div>



        

      
            
      
<!---->      
    
    

    
      <a href="https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fsap%2Eto%2F6042r53Dr&amp;urlhash=rVO7&amp;trk=organization_guest_main-feed-card_feed-article-content" target="_self" data-tracking-control-name="organization_guest_main-feed-card_feed-article-content" data-tracking-will-navigate class="flex flex-col" data-test-id="article-content">
        

        <img alt="Why We Must Leave No One Behind in the AI Revolution" class="lazy-load w-main-feed-card-media object-cover babybear:max-h-[225px]" data-delayed-url="https://media.licdn.com/dms/image/D4E10AQHcSRohCgCGUA/image-shrink_1280/0/1705935601496?e=2147483647&amp;v=beta&amp;t=MeMBXXajl10QnB-3gN8HWRWespCRuEtG0Ji4TWB0n1U" data-ghost-classes="tw-feed-content-ghost-image" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9l8dv1r8a09nem281grvopn9l">
      <section class="flex justify-between article-content__header
           py-1">
        <header>
            <h3 class="tw-feed-content-title" dir="ltr" data-test-id="article-content__title">
              Why We Must Leave No One Behind in the AI Revolution
            </h3>

<!---->        </header>
<!---->      </section>
    
      </a>
  
  
  
      
  
                  

      
          
<!---->    
        

      
          
<!---->    
        

      
          
      
    
    
    
    
    
    
    
    
    

      <div class="flex items-center font-sans text-sm babybear:text-xs main-feed-activity-card__social-actions">
            
      <a href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_social-actions-reactions" target="_self" data-tracking-control-name="organization_guest_main-feed-card_social-actions-reactions" data-tracking-will-navigate class="flex items-center font-normal text-color-text-low-emphasis no-underline visited:text-color-text-low-emphasis  my-1" aria-label="309 Reactions" data-separate-ctas="false" data-test-id="social-actions__reactions" data-id="social-actions__reactions" data-num-reactions="309" data-singular="%numReactions%" data-plural="%numReactions%">
        
                    <img alt data-reaction-type="LIKE" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/9sun4diznbhgyelaeryxy75ur" height="16px" width="16px">
                    <img alt data-reaction-type="EMPATHY" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/37hg81qnm85dsy5mbqfifg9qs" height="16px" width="16px">
                    <img alt data-reaction-type="INTEREST" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/4v7dh2d6cuqm24mzps1pqzeqt" height="16px" width="16px">

              <span class="font-normal ml-0.5" data-test-id="social-actions__reaction-count">
                    309
              </span>
            
      </a>
  
                  <code id="social-actions__reaction-image-APPRECIATION" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/cib97epu77mrzque5gqlzjgaw"--></code>
<!----><!---->                  <code id="social-actions__reaction-image-EMPATHY" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/37hg81qnm85dsy5mbqfifg9qs"--></code>
                  <code id="social-actions__reaction-image-ENTERTAINMENT" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/e7ppwfmo0if15fgie4q5r4us4"--></code>
<!---->                  <code id="social-actions__reaction-image-INTEREST" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/4v7dh2d6cuqm24mzps1pqzeqt"--></code>
                  <code id="social-actions__reaction-image-LIKE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/9sun4diznbhgyelaeryxy75ur"--></code>
                  <code id="social-actions__reaction-image-MAYBE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/4iy169rwfs5rdhspekg2r5wc6"--></code>
                  <code id="social-actions__reaction-image-PRAISE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/cjrxeu0ese8oxe32kiom8kzoh"--></code>
<!----><!---->
            
      <a href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_social-actions-comments" target="_self" data-tracking-control-name="organization_guest_main-feed-card_social-actions-comments" data-tracking-will-navigate class="flex items-center font-normal text-color-text-low-emphasis no-underline visited:text-color-text-low-emphasis
                before:middot
                my-1" data-separate-ctas="false" data-test-id="social-actions__comments" data-id="social-actions__comments" data-num-comments="7" data-singular="%numComments% Comment" data-plural="%numComments% Comments">
        
                7 Comments
            
      </a>
  
      </div>
  
  
        

      
              
    
    
    

    <div class="social-action-bar flex flex-wrap border-t-1 border-solid border-color-border-faint min-h-[44px] items-center babybear:justify-around !m-0">
      
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_like-cta" data-tracking-control-name="organization_guest_main-feed-card_like-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/70k0g8kmgdfjjymflqqzipzxj">
    </icon>
    <span class="social-action-bar__button-text">
      Like
    </span>
  </a>

        
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_comment-cta" data-tracking-control-name="organization_guest_main-feed-card_comment-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/4ol9mo4lxvobj5ww3va90wz1o">
    </icon>
    <span class="social-action-bar__button-text">
      Comment
    </span>
  </a>

        
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_share-cta" data-tracking-control-name="organization_guest_main-feed-card_share-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/852gyy4s01pfis5qf9k99s6d2">
    </icon>
    <span class="social-action-bar__button-text">
      Share
    </span>
  </a>

    </div>
  
                    

      
<!---->        

      
            
      
    
        
    </article>
  
      <code id="is-mobile" style="display: none"><!--false--></code>
  

        

  
            </li>
            <li class="mb-1">
              
        
    
          
  
      

    <article class="relative pt-1.5 px-2 pb-0 bg-color-background-container
        container-lined main-feed-activity-card papabear:max-w-[550px]" data-activity-urn="urn:li:activity:7154759558408654848" data-featured-activity-urn="urn:li:activity:7154759558408654848" data-attributed-urn="urn:li:share:7154759556529553408" data-id="main-feed-card">
      
              
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    

    
    

<!---->  
        

      
            

    
    
    
    
    
    
    
    
    
    
    

    <div class="flex items-center font-sans mb-1" data-test-id="main-feed-activity-card__entity-lockup">
          <a href="https://de.linkedin.com/company/sap?trk=organization_guest_main-feed-card_feed-actor-image" class="relative" data-tracking-control-name="organization_guest_main-feed-card_feed-actor-image" data-tracking-will-navigate>
            
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D4E0BAQFgplzXUs8o1Q/company-logo_100_100/0/1688178772044/sap_logo?e=2147483647&amp;v=beta&amp;t=juX9BS1x_7d30VNK3nlyHDIm6fuuA1o_TsFISNSyU2M" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt="View organization page for SAP">
  
<!---->          </a>
      <div class="flex flex-col self-start min-w-0 ml-1">
        <div class="text-color-text ">
            <a class="text-sm link-styled no-underline leading-open" href="https://de.linkedin.com/company/sap?trk=organization_guest_main-feed-card_feed-actor-name" data-tracking-control-name="organization_guest_main-feed-card_feed-actor-name" aria-label="View organization page for SAP" data-tracking-will-navigate>
              SAP
            </a>
<!----><!---->        </div>

            <p class="!text-xs text-color-text-low-emphasis leading-[1.33333] m-0 truncate">
<!---->                3,435,167 followers
            </p>

            <span class="!text-xs text-color-text-low-emphasis leading-[1.33333] flex">
                <time class="flex-none">
                  

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      1w
  
<!---->                </time>
<!---->            </span>
                </div>

<!---->    </div>
  
        

      
              

    
    
    
    
    
    
    
    
    
    
    
    
    

      <div class="ellipsis-menu absolute right-0 top-0 !mr-0.5" data-test-id="main-feed-activity-card__ellipsis-menu">
        

    

    <div class="collapsible-dropdown flex items-center relative hyphens-auto">
          
            <button class="ellipsis-menu__trigger
                collapsible-dropdown__button btn-md btn-tertiary cursor-pointer
                !py-[6px] !px-1 flex items-center rounded-[50%]
                
                " aria-expanded="false" aria-label="Open menu" data-tracking-control-name="organization_guest_main-feed-card_ellipsis-menu-trigger">
              <icon class="ellipsis-menu__trigger-icon m-0 p-0 centered-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/671xosfpvk4c0kqtyl87hashi"></icon>
            </button>
          

        <ul class="collapsible-dropdown__list hidden container-raised absolute w-auto overflow-y-auto flex-col items-stretch z-1 bottom-auto top-[100%]" role="menu" tabindex="-1">
          
              

                <li class="ellipsis-menu__item border-t-1 border-solid border-color-border-low-emphasis first-of-type:border-none flex">
                  

    
    

    

    

    <a href="/uas/login?fromSignIn=true&amp;session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_ellipsis-menu-semaphore-sign-in-redirect&amp;guestReportContentType=POST&amp;_f=guest-reporting" data-tracking-control-name="organization_guest_main-feed-card_ellipsis-menu-semaphore-sign-in-redirect" data-tracking-will-navigate data-item-type="semaphore" data-semaphore-content-type="POST" data-semaphore-content-urn="urn:li:activity:7154759558408654848" data-semaphore-tracking-prefix="organization_guest_main-feed-card_ellipsis-menu-semaphore" data-is-logged-in="false" data-modal="semaphore__toggle" class="semaphore__toggle visited:text-color-text-secondary ellipsis-menu__semaphore ellipsis-menu__item-button flex items-center w-full p-1 cursor-pointer font-sans text-sm font-bold link-styled focus:link-styled link:no-underline active:bg-color-background-container-tint focus:bg-color-background-container-tint hover:bg-color-background-container-tint outline-offset-[-2px]">
<!---->        
                      <icon class="ellipsis-menu__item-icon text-color-text h-[24px] w-[24px] mr-1" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/iq0x9q37wj214o129ai1yjut">
                      </icon>
                      Report this post
                    
    </a>

<!---->  
                </li>
<!---->          
        </ul>

<!---->    </div>
  

      </div>
  
        

      
            
            
  <div class="attributed-text-segment-list__container relative mt-1 mb-1.5 babybear:mt-0 babybear:mb-0.5">
    <p class="attributed-text-segment-list__content text-color-text !text-sm whitespace-pre-wrap break-words
        " dir="ltr" data-test-id="main-feed-activity-card__commentary">Trailblazer. Visionary. Icon. Happy Birthday to our founder, Prof. Hasso Plattner.</p>
<!---->  </div>



        

      
            
      
    
    

      <ul class="grid grid-cols-6 grid-rows-[60%_40%] w-main-feed-card-media feed-images-content list-none pl-0
          
          " data-test-id="feed-images-content">
            <li class="bg-color-background-container-tint
                col-span-full row-span-full 
                " data-test-id="feed-images-content__list-item" data-position="0">
                <img class="lazy-load w-full object-cover object-center
                    h-full babybear:max-h-[400px]" data-delayed-url="https://media.licdn.com/dms/image/D4E10AQG2rZihho1uXg/image-shrink_800/0/1705827603293?e=2147483647&amp;v=beta&amp;t=2IohpwJQ3Dh49vOs2jjBZqArAt4j77nILB827XjqfH4" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/921ynb2z53z33mhm3061qvjag" alt="No alternative text description for this image">
<!---->            </li>
      </ul>
<!---->  
  
                  

      
          
<!---->    
        

      
          
<!---->    
        

      
          
      
    
    
    
    
    
    
    
    
    

      <div class="flex items-center font-sans text-sm babybear:text-xs main-feed-activity-card__social-actions">
            
      <a href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_social-actions-reactions" target="_self" data-tracking-control-name="organization_guest_main-feed-card_social-actions-reactions" data-tracking-will-navigate class="flex items-center font-normal text-color-text-low-emphasis no-underline visited:text-color-text-low-emphasis  my-1" aria-label="3,796 Reactions" data-separate-ctas="false" data-test-id="social-actions__reactions" data-id="social-actions__reactions" data-num-reactions="3796" data-singular="%numReactions%" data-plural="%numReactions%">
        
                    <img alt data-reaction-type="LIKE" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/9sun4diznbhgyelaeryxy75ur" height="16px" width="16px">
                    <img alt data-reaction-type="PRAISE" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cjrxeu0ese8oxe32kiom8kzoh" height="16px" width="16px">
                    <img alt data-reaction-type="EMPATHY" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/37hg81qnm85dsy5mbqfifg9qs" height="16px" width="16px">

              <span class="font-normal ml-0.5" data-test-id="social-actions__reaction-count">
                    3,796
              </span>
            
      </a>
  
                  <code id="social-actions__reaction-image-APPRECIATION" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/cib97epu77mrzque5gqlzjgaw"--></code>
<!----><!---->                  <code id="social-actions__reaction-image-EMPATHY" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/37hg81qnm85dsy5mbqfifg9qs"--></code>
                  <code id="social-actions__reaction-image-ENTERTAINMENT" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/e7ppwfmo0if15fgie4q5r4us4"--></code>
<!---->                  <code id="social-actions__reaction-image-INTEREST" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/4v7dh2d6cuqm24mzps1pqzeqt"--></code>
                  <code id="social-actions__reaction-image-LIKE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/9sun4diznbhgyelaeryxy75ur"--></code>
                  <code id="social-actions__reaction-image-MAYBE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/4iy169rwfs5rdhspekg2r5wc6"--></code>
                  <code id="social-actions__reaction-image-PRAISE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/cjrxeu0ese8oxe32kiom8kzoh"--></code>
<!----><!---->
            
      <a href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_social-actions-comments" target="_self" data-tracking-control-name="organization_guest_main-feed-card_social-actions-comments" data-tracking-will-navigate class="flex items-center font-normal text-color-text-low-emphasis no-underline visited:text-color-text-low-emphasis
                before:middot
                my-1" data-separate-ctas="false" data-test-id="social-actions__comments" data-id="social-actions__comments" data-num-comments="69" data-singular="%numComments% Comment" data-plural="%numComments% Comments">
        
                69 Comments
            
      </a>
  
      </div>
  
  
        

      
              
    
    
    

    <div class="social-action-bar flex flex-wrap border-t-1 border-solid border-color-border-faint min-h-[44px] items-center babybear:justify-around !m-0">
      
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_like-cta" data-tracking-control-name="organization_guest_main-feed-card_like-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/70k0g8kmgdfjjymflqqzipzxj">
    </icon>
    <span class="social-action-bar__button-text">
      Like
    </span>
  </a>

        
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_comment-cta" data-tracking-control-name="organization_guest_main-feed-card_comment-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/4ol9mo4lxvobj5ww3va90wz1o">
    </icon>
    <span class="social-action-bar__button-text">
      Comment
    </span>
  </a>

        
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_share-cta" data-tracking-control-name="organization_guest_main-feed-card_share-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/852gyy4s01pfis5qf9k99s6d2">
    </icon>
    <span class="social-action-bar__button-text">
      Share
    </span>
  </a>

    </div>
  
                    

      
<!---->        

      
            
      
    
        
    </article>
  
      <code id="is-mobile" style="display: none"><!--false--></code>
  

        

  
            </li>
            <li class="mb-1">
              
        
    
          
  
      

    <article class="relative pt-1.5 px-2 pb-0 bg-color-background-container
        container-lined main-feed-activity-card papabear:max-w-[550px]" data-activity-urn="urn:li:activity:7154131864096489472" data-featured-activity-urn="urn:li:activity:7154131864096489472" data-attributed-urn="urn:li:ugcPost:7154131862964039682" data-id="main-feed-card">
      
              
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    

    
    

<!---->  
        

      
            

    
    
    
    
    
    
    
    
    
    
    

    <div class="flex items-center font-sans mb-1" data-test-id="main-feed-activity-card__entity-lockup">
          <a href="https://de.linkedin.com/company/sap?trk=organization_guest_main-feed-card_feed-actor-image" class="relative" data-tracking-control-name="organization_guest_main-feed-card_feed-actor-image" data-tracking-will-navigate>
            
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D4E0BAQFgplzXUs8o1Q/company-logo_100_100/0/1688178772044/sap_logo?e=2147483647&amp;v=beta&amp;t=juX9BS1x_7d30VNK3nlyHDIm6fuuA1o_TsFISNSyU2M" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt="View organization page for SAP">
  
<!---->          </a>
      <div class="flex flex-col self-start min-w-0 ml-1">
        <div class="text-color-text ">
            <a class="text-sm link-styled no-underline leading-open" href="https://de.linkedin.com/company/sap?trk=organization_guest_main-feed-card_feed-actor-name" data-tracking-control-name="organization_guest_main-feed-card_feed-actor-name" aria-label="View organization page for SAP" data-tracking-will-navigate>
              SAP
            </a>
<!----><!---->        </div>

            <p class="!text-xs text-color-text-low-emphasis leading-[1.33333] m-0 truncate">
<!---->                3,435,167 followers
            </p>

            <span class="!text-xs text-color-text-low-emphasis leading-[1.33333] flex">
                <time class="flex-none">
                  

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      1w
  
<!---->                </time>
<!---->            </span>
                </div>

<!---->    </div>
  
        

      
              

    
    
    
    
    
    
    
    
    
    
    
    
    

      <div class="ellipsis-menu absolute right-0 top-0 !mr-0.5" data-test-id="main-feed-activity-card__ellipsis-menu">
        

    

    <div class="collapsible-dropdown flex items-center relative hyphens-auto">
          
            <button class="ellipsis-menu__trigger
                collapsible-dropdown__button btn-md btn-tertiary cursor-pointer
                !py-[6px] !px-1 flex items-center rounded-[50%]
                
                " aria-expanded="false" aria-label="Open menu" data-tracking-control-name="organization_guest_main-feed-card_ellipsis-menu-trigger">
              <icon class="ellipsis-menu__trigger-icon m-0 p-0 centered-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/671xosfpvk4c0kqtyl87hashi"></icon>
            </button>
          

        <ul class="collapsible-dropdown__list hidden container-raised absolute w-auto overflow-y-auto flex-col items-stretch z-1 bottom-auto top-[100%]" role="menu" tabindex="-1">
          
              

                <li class="ellipsis-menu__item border-t-1 border-solid border-color-border-low-emphasis first-of-type:border-none flex">
                  

    
    

    

    

    <a href="/uas/login?fromSignIn=true&amp;session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_ellipsis-menu-semaphore-sign-in-redirect&amp;guestReportContentType=POST&amp;_f=guest-reporting" data-tracking-control-name="organization_guest_main-feed-card_ellipsis-menu-semaphore-sign-in-redirect" data-tracking-will-navigate data-item-type="semaphore" data-semaphore-content-type="POST" data-semaphore-content-urn="urn:li:activity:7154131864096489472" data-semaphore-tracking-prefix="organization_guest_main-feed-card_ellipsis-menu-semaphore" data-is-logged-in="false" data-modal="semaphore__toggle" class="semaphore__toggle visited:text-color-text-secondary ellipsis-menu__semaphore ellipsis-menu__item-button flex items-center w-full p-1 cursor-pointer font-sans text-sm font-bold link-styled focus:link-styled link:no-underline active:bg-color-background-container-tint focus:bg-color-background-container-tint hover:bg-color-background-container-tint outline-offset-[-2px]">
<!---->        
                      <icon class="ellipsis-menu__item-icon text-color-text h-[24px] w-[24px] mr-1" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/iq0x9q37wj214o129ai1yjut">
                      </icon>
                      Report this post
                    
    </a>

<!---->  
                </li>
<!---->          
        </ul>

<!---->    </div>
  

      </div>
  
        

      
            
            
  <div class="attributed-text-segment-list__container relative mt-1 mb-1.5 babybear:mt-0 babybear:mb-0.5">
    <p class="attributed-text-segment-list__content text-color-text !text-sm whitespace-pre-wrap break-words
        " dir="ltr" data-test-id="main-feed-activity-card__commentary">The <a class="link" href="https://www.linkedin.com/company/san-francisco-49ers?trk=organization_guest_main-feed-card-text" target="_self" data-tracking-control-name="organization_guest_main-feed-card-text" data-tracking-will-navigate>San Francisco 49ers</a> bring out their best with SAP. 💻 🤝 

5 years ago, the 49ers and SAP started an ambitious mission to enhance the fan experience at Levi's Stadium. 

In 5 years of co-innovation, we arrived at far more than that: A first-of-its-kind venue management platform. And by venturing into predictive analytics we are on the way to making Levi’s Stadium more environmentally friendly. 🏟️ 
</p>
<!---->  </div>



        

      
            
      
<!---->      
    <div class="share-native-video w-main-feed-card-media
          " data-test-id="feed-native-video-content">
      <video class="share-native-video__node video-js" data-sources="[{&quot;src&quot;:&quot;https://dms.licdn.com/playlist/vid/D4E10AQGTB_e_aNbgng/mp4-640p-30fp-crf28/0/1705677948417?e=2147483647&amp;v=beta&amp;t=gAAAB0YeXQelK95DtV8qFIOn6A-vs_QEUPRpzDE6bnU&quot;,&quot;type&quot;:&quot;video/mp4&quot;,&quot;data-bitrate&quot;:480618},{&quot;src&quot;:&quot;https://dms.licdn.com/playlist/vid/D4E10AQGTB_e_aNbgng/mp4-360p-30fp-crf28/0/1705677947132?e=2147483647&amp;v=beta&amp;t=fAhieQDw9yFpiHvP97rK8eADaZQZGtQLFDOo17EhLO0&quot;,&quot;type&quot;:&quot;video/mp4&quot;,&quot;data-bitrate&quot;:218935},{&quot;src&quot;:&quot;https://dms.licdn.com/playlist/vid/D4E10AQGTB_e_aNbgng/mp4-720p-30fp-crf28/0/1705677948711?e=2147483647&amp;v=beta&amp;t=Xqy9ygqiNp16QZgcxYqEed8Bde0WgsbZwqIToVD6uik&quot;,&quot;type&quot;:&quot;video/mp4&quot;,&quot;data-bitrate&quot;:571146}]" data-poster-url="https://media.licdn.com/dms/image/D4E10AQGTB_e_aNbgng/videocover-high/0/1705677943217?e=2147483647&amp;v=beta&amp;t=zYCfI600vwFesW0asteR2UyVCHrLsy4C0anly7Kgh08" data-captions-url="https://dms.licdn.com/playlist/vid/D4E10AQGTB_e_aNbgng/video-captions-webvtt/B4EY0iU6UMGQAI-/0/1705677940008?e=2147483647&amp;v=beta&amp;t=J6J5qtu7GzC8enE9HnfawY6HNuXYFWX_9Yyzf2t35qA" data-digitalmedia-asset-urn="urn:li:digitalmediaAsset:D4E10AQGTB_e_aNbgng" data-tracking-id="nkzJIUIcRmWGzRxO74clmA==" playsinline>
      </video>
    </div>
  
<!---->  
  
                  

      
          
<!---->    
        

      
          
<!---->    
        

      
          
      
    
    
    
    
    
    
    
    
    

      <div class="flex items-center font-sans text-sm babybear:text-xs main-feed-activity-card__social-actions">
            
      <a href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_social-actions-reactions" target="_self" data-tracking-control-name="organization_guest_main-feed-card_social-actions-reactions" data-tracking-will-navigate class="flex items-center font-normal text-color-text-low-emphasis no-underline visited:text-color-text-low-emphasis  my-1" aria-label="2,003 Reactions" data-separate-ctas="false" data-test-id="social-actions__reactions" data-id="social-actions__reactions" data-num-reactions="2003" data-singular="%numReactions%" data-plural="%numReactions%">
        
                    <img alt data-reaction-type="LIKE" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/9sun4diznbhgyelaeryxy75ur" height="16px" width="16px">
                    <img alt data-reaction-type="PRAISE" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cjrxeu0ese8oxe32kiom8kzoh" height="16px" width="16px">
                    <img alt data-reaction-type="EMPATHY" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/37hg81qnm85dsy5mbqfifg9qs" height="16px" width="16px">

              <span class="font-normal ml-0.5" data-test-id="social-actions__reaction-count">
                    2,003
              </span>
            
      </a>
  
                  <code id="social-actions__reaction-image-APPRECIATION" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/cib97epu77mrzque5gqlzjgaw"--></code>
<!----><!---->                  <code id="social-actions__reaction-image-EMPATHY" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/37hg81qnm85dsy5mbqfifg9qs"--></code>
                  <code id="social-actions__reaction-image-ENTERTAINMENT" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/e7ppwfmo0if15fgie4q5r4us4"--></code>
<!---->                  <code id="social-actions__reaction-image-INTEREST" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/4v7dh2d6cuqm24mzps1pqzeqt"--></code>
                  <code id="social-actions__reaction-image-LIKE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/9sun4diznbhgyelaeryxy75ur"--></code>
                  <code id="social-actions__reaction-image-MAYBE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/4iy169rwfs5rdhspekg2r5wc6"--></code>
                  <code id="social-actions__reaction-image-PRAISE" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/cjrxeu0ese8oxe32kiom8kzoh"--></code>
<!----><!---->
            
      <a href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_social-actions-comments" target="_self" data-tracking-control-name="organization_guest_main-feed-card_social-actions-comments" data-tracking-will-navigate class="flex items-center font-normal text-color-text-low-emphasis no-underline visited:text-color-text-low-emphasis
                before:middot
                my-1" data-separate-ctas="false" data-test-id="social-actions__comments" data-id="social-actions__comments" data-num-comments="24" data-singular="%numComments% Comment" data-plural="%numComments% Comments">
        
                24 Comments
            
      </a>
  
      </div>
  
  
        

      
              
    
    
    

    <div class="social-action-bar flex flex-wrap border-t-1 border-solid border-color-border-faint min-h-[44px] items-center babybear:justify-around !m-0">
      
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_like-cta" data-tracking-control-name="organization_guest_main-feed-card_like-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/70k0g8kmgdfjjymflqqzipzxj">
    </icon>
    <span class="social-action-bar__button-text">
      Like
    </span>
  </a>

        
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_comment-cta" data-tracking-control-name="organization_guest_main-feed-card_comment-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/4ol9mo4lxvobj5ww3va90wz1o">
    </icon>
    <span class="social-action-bar__button-text">
      Comment
    </span>
  </a>

        
  <a class="social-action-bar__button !rounded-none" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=organization_guest_main-feed-card_share-cta" data-tracking-control-name="organization_guest_main-feed-card_share-cta" data-tracking-will-navigate>
    <icon class="social-action-bar__icon" data-svg-class-name="social-action-bar__icon--svg" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/852gyy4s01pfis5qf9k99s6d2">
    </icon>
    <span class="social-action-bar__button-text">
      Share
    </span>
  </a>

    </div>
  
                    

      
<!---->        

      
            
      
    
        
    </article>
  
      <code id="is-mobile" style="display: none"><!--false--></code>
  

        

  
            </li>
        </ul>
        <section id="json-refs">
            <code id="isMobile" style="display: none"><!--false--></code>
            <code id="feedUpdatesBaseUrl" style="display: none"><!--"/organization-guest/api/feedUpdates/1115?paginationToken=0-1706719701535-8644313abbd2da8bcc6256dbe8056d8c"--></code>
          <code id="paginationToken" style="display: none"><!--"0-1706719701535-8644313abbd2da8bcc6256dbe8056d8c"--></code>
        </section>
        
    <div class="loader updates-loader max-w-[550px]">
      <div class="loader__container mb-2 overflow-hidden">
        <icon class="loader__icon inline-block loader__icon--default text-color-progress-loading" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/ddi43qwelxeqjxdd45pe3fvs1" data-svg-class-name="loader__icon-svg--small fill-currentColor h-[30px] min-h-[30px] w-[30px] min-w-[30px]"></icon>
      </div>
    </div>
  
          
    
    
    
    
    
    
    
    

    
    

    <section class="hidden-summary container-lined p-3 overflow-hidden babybear:p-2 papabear:mt-3 hidden max-w-[550px]" data-impression-id="conversion_prompt_guest_hidden_summary" data-id="conversion-prompt">
            <h2 class="hidden-summary__title text-xl text-color-text overflow-hidden break-words mb-2 leading-regular font-normal">
              Join now to see what you are missing
            </h2>

      <ul class="hidden-summary__summary-items">
              <li class="hidden-summary__summary-item flex text-md text-color-text font-normal leading-open items-center mb-1.5 last:mb-0">
                <div class="hidden-summary__summary-item-icon-container flex items-center justify-center shrink-0 mr-1">
                  <icon class="hidden-summary__summary-item-icon h-2 w-2
                      " alt="Check mark" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/82pl4lu8lcdmvm9t7n4hoq0zi"></icon>
                </div>
                <span class="hidden-summary__summary-item-text overflow-hidden break-words">
                  Find people you know at SAP
                </span>
              </li>
              <li class="hidden-summary__summary-item flex text-md text-color-text font-normal leading-open items-center mb-1.5 last:mb-0">
                <div class="hidden-summary__summary-item-icon-container flex items-center justify-center shrink-0 mr-1">
                  <icon class="hidden-summary__summary-item-icon h-2 w-2
                      " alt="Check mark" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/82pl4lu8lcdmvm9t7n4hoq0zi"></icon>
                </div>
                <span class="hidden-summary__summary-item-text overflow-hidden break-words">
                  Browse recommended jobs for you
                </span>
              </li>
              <li class="hidden-summary__summary-item flex text-md text-color-text font-normal leading-open items-center mb-1.5 last:mb-0">
                <div class="hidden-summary__summary-item-icon-container flex items-center justify-center shrink-0 mr-1">
                  <icon class="hidden-summary__summary-item-icon h-2 w-2
                      " alt="Check mark" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/82pl4lu8lcdmvm9t7n4hoq0zi"></icon>
                </div>
                <span class="hidden-summary__summary-item-text overflow-hidden break-words">
                  View all updates, news, and articles
                </span>
              </li>
      </ul>

<!---->            <a class="hidden-summary__cta hidden-summary__cta--secondary btn-md btn-secondary-emphasis inline-block mt-3 mr-1.5" href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&amp;trk=public_biz_promo-join" data-tracking-control-name="public_biz_promo-join" data-tracking-will-navigate>
              Join now
            </a>
    </section>
  
  
      
      </div>
    </section>
  
  
          
      
        </div>
      </section>
      <section class="right-rail papabear:w-right-rail-width papabear:ml-column-gutter mamabear:max-w-[790px] mamabear:px-mobile-container-padding babybear:max-w-[790px] babybear:px-mobile-container-padding">
        
        
            
    
    
    

      
      <section class="aside-section-container mb-4" data-test-id="affiliated-pages">

            <h2 class="aside-section-container__title section-title">
              Affiliated pages
            </h2>

<!---->
        <div class="aside-section-container__content break-words">
          
        
    
    

      <div class="show-more-less">
<!---->
        <ul data-max-num-to-show="4" class="show-more-less__list show-more-less__list--hide-after-4" data-impression-id="affiliated-pages_show-more-less">
          
              <li>
                

    
    
    
    
      <a href="https://www.linkedin.com/showcase/sapbtp/?trk=affiliated-pages" target="_self" data-tracking-control-name="affiliated-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D560BAQF8yP2tetZLgQ/company-logo_100_100/0/1689110362225/sapbtp_logo?e=2147483647&amp;v=beta&amp;t=2jlc9ulb1vE_1IIK7Ovbt6SZJndJiQES74elsqxrCBY" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        SAP Business Technology Platform
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Software Development
      
            </p>

            <p class="base-aside-card__second-subtitle font-sans text-sm leading-open text-color-text-low-emphasis">
              
        Newtown Square, PA
      
            </p>

<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://www.linkedin.com/company/sapsuccessfactors?trk=affiliated-pages" target="_self" data-tracking-control-name="affiliated-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D560BAQGgBEokQEP5Pg/company-logo_100_100/0/1701972203054/sapsuccessfactors_logo?e=2147483647&amp;v=beta&amp;t=uTQ3lVbTTEGXXvXKykSeZ5nC_Jces_VJ8AIamjvonsg" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        SAP SuccessFactors
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Software Development
      
            </p>

            <p class="base-aside-card__second-subtitle font-sans text-sm leading-open text-color-text-low-emphasis">
              
        South San Francisco, California
      
            </p>

<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://www.linkedin.com/company/sapconcur?trk=affiliated-pages" target="_self" data-tracking-control-name="affiliated-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D560BAQEKfUxNtddxXg/company-logo_100_100/0/1702567529267/sapconcur_logo?e=2147483647&amp;v=beta&amp;t=jSXgLhSfa7jm0XulCw2EQYGcN3E3zb5KJQuGVOhlxpU" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        SAP Concur
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Software Development
      
            </p>

            <p class="base-aside-card__second-subtitle font-sans text-sm leading-open text-color-text-low-emphasis">
              
        Bellevue, WA
      
            </p>

<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://www.linkedin.com/company/sapcx?trk=affiliated-pages" target="_self" data-tracking-control-name="affiliated-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D560BAQGuFs_oLGO5BQ/company-logo_100_100/0/1688617035927/sapcx_logo?e=2147483647&amp;v=beta&amp;t=RxjTPm9FTR8_EkuYFmRlTeY6fNbwDPBUf7by9ZKFF8k" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        SAP Customer Experience
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Software Development
      
            </p>

            <p class="base-aside-card__second-subtitle font-sans text-sm leading-open text-color-text-low-emphasis">
              
        Palo Alto, California
      
            </p>

<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://de.linkedin.com/company/ariba?trk=affiliated-pages" target="_self" data-tracking-control-name="affiliated-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D4D0BAQFgJob1zd8eRw/company-logo_100_100/0/1701983675281/ariba_logo?e=2147483647&amp;v=beta&amp;t=ZHc7lKL7LqPsbY680qCkmAy5EtV8vmNSOqeAdu8e4Ok" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        SAP Ariba
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Software Development
      
            </p>

<!---->
<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://de.linkedin.com/showcase/sap-erp-finance/?trk=affiliated-pages" target="_self" data-tracking-control-name="affiliated-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/C560BAQF3p_2AZJ9pAg/company-logo_100_100/0/1653295642095/sap_erp_finance_logo?e=2147483647&amp;v=beta&amp;t=PqMCf1ccD5y5EGAWyY2qpHAVMEy62r2ocxvhpn8RdEM" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        SAP S/4HANA Cloud ERP
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Software Development
      
            </p>

            <p class="base-aside-card__second-subtitle font-sans text-sm leading-open text-color-text-low-emphasis">
              
        Walldorf, Baden-Württemberg
      
            </p>

<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://de.linkedin.com/showcase/sap-developers/?trk=affiliated-pages" target="_self" data-tracking-control-name="affiliated-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/C4E0BAQGPV87-Ov1jXA/company-logo_100_100/0/1659971613243/sap_developers_logo?e=2147483647&amp;v=beta&amp;t=qpWo6A-Op9ZQzdjKsqH0hhbmgc5v9WpguBIOyOGgoT0" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        SAP Developers
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Software Development
      
            </p>

            <p class="base-aside-card__second-subtitle font-sans text-sm leading-open text-color-text-low-emphasis">
              
        Walldorf, Baden-Württemberg
      
            </p>

<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://www.linkedin.com/showcase/sapscm/?trk=affiliated-pages" target="_self" data-tracking-control-name="affiliated-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/C560BAQF9piqbbsGFLQ/company-logo_100_100/0/1653295062334/sapdsc_logo?e=2147483647&amp;v=beta&amp;t=lK6_z2lMOuqqTJOL0Hz6ht67kYP8kqQhcHVTCrc07Ls" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        SAP Supply Chain Management
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Software Development
      
            </p>

            <p class="base-aside-card__second-subtitle font-sans text-sm leading-open text-color-text-low-emphasis">
              
        Newtown Square, Pennsylvania
      
            </p>

<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://de.linkedin.com/showcase/sap-news/?trk=affiliated-pages" target="_self" data-tracking-control-name="affiliated-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D4E0BAQEJCl4uh4Ktsw/company-logo_100_100/0/1689100054931/sap_news_network_logo?e=2147483647&amp;v=beta&amp;t=Rs6Etrs1zPm8xCy8UAC2cnTmn81XLrFyurnz_80YPwY" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        SAP News
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Software Development
      
            </p>

            <p class="base-aside-card__second-subtitle font-sans text-sm leading-open text-color-text-low-emphasis">
              
        Walldorf, Baden-Württemberg
      
            </p>

<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://www.linkedin.com/showcase/sap-partneredge/?trk=affiliated-pages" target="_self" data-tracking-control-name="affiliated-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D4E0BAQFdHpP1pI-ETw/company-logo_100_100/0/1689023492483/sap_partneredge_logo?e=2147483647&amp;v=beta&amp;t=TXjeeQ4QLqdpvOk00_4o8V9BhOqm24aSz6m1BrXhy9c" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        SAP PartnerEdge
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Software Development
      
            </p>

            <p class="base-aside-card__second-subtitle font-sans text-sm leading-open text-color-text-low-emphasis">
              
        Newtown Square, PA
      
            </p>

<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://de.linkedin.com/company/sap-hybris?trk=affiliated-pages" target="_self" data-tracking-control-name="affiliated-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/C4D0BAQEfui-gb6j9XA/company-logo_100_100/0/1631368128825/sap_hybris_logo?e=2147483647&amp;v=beta&amp;t=4uaymtI9H8tlibpjPTgdgqohgQE-cWsYDHCaGVxVUxk" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        SAP Hybris
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Software Development
      
            </p>

            <p class="base-aside-card__second-subtitle font-sans text-sm leading-open text-color-text-low-emphasis">
              
        Munich, Bavaria
      
            </p>

<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://de.linkedin.com/company/signavio?trk=affiliated-pages" target="_self" data-tracking-control-name="affiliated-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D4E0BAQGpn-xlTv9LwA/company-logo_100_100/0/1700469532166/signavio_logo?e=2147483647&amp;v=beta&amp;t=2nRnoQBOFMuobxqeLEK6F7zZBOYFLn1-jUa5-qL6qJs" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        SAP Signavio
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Software Development
      
            </p>

            <p class="base-aside-card__second-subtitle font-sans text-sm leading-open text-color-text-low-emphasis">
              
        Walldorf, Baden-Württemberg
      
            </p>

<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://de.linkedin.com/company/sapfieldglass?trk=affiliated-pages" target="_self" data-tracking-control-name="affiliated-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D4D0BAQHnssr-4MT0Nw/company-logo_100_100/0/1701983975154/sapfieldglass_logo?e=2147483647&amp;v=beta&amp;t=fy3O62WYPZ61tYB6HD1jiXG4d5zewLNCfRb5XukxYrM" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        SAP Fieldglass
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Software Development
      
            </p>

<!---->
<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://www.linkedin.com/showcase/the-future-of-customer-engagement/?trk=affiliated-pages" target="_self" data-tracking-control-name="affiliated-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/C4D0BAQGRF-ADgSD6lA/company-logo_100_100/0/1631324846560?e=2147483647&amp;v=beta&amp;t=ONyyG8rQ5Wa5VKzNdmnhX1jtUAWlqoB8VIHjG1fH0SY" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        The Future of Customer Engagement
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Software Development
      
            </p>

            <p class="base-aside-card__second-subtitle font-sans text-sm leading-open text-color-text-low-emphasis">
              
        Palo Alto, California
      
            </p>

<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://www.linkedin.com/company/altiscale?trk=affiliated-pages" target="_self" data-tracking-control-name="affiliated-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/C4D0BAQHb7c_YwwchjA/company-logo_100_100/0/1631321726326?e=2147483647&amp;v=beta&amp;t=RYhbc5l1y3-yumBqgBTmyAe2WwyD6U8EEVXIygabXHg" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Altiscale
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Software Development
      
            </p>

            <p class="base-aside-card__second-subtitle font-sans text-sm leading-open text-color-text-low-emphasis">
              
        Palo Alto, California
      
            </p>

<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://www.linkedin.com/showcase/sap-experience-centers/?trk=affiliated-pages" target="_self" data-tracking-control-name="affiliated-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/C4E0BAQFZGHpZ7o9C1Q/company-logo_100_100/0/1672656942635/sap_experience_centers_logo?e=2147483647&amp;v=beta&amp;t=7B2vIUMKARJdBPRRE9HfTGVTZqWzVt_YltXl_TYLBQ8" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        SAP Experience Centers
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Software Development
      
            </p>

<!---->
<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://de.linkedin.com/showcase/sap-investor-relations/?trk=affiliated-pages" target="_self" data-tracking-control-name="affiliated-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D4E0BAQGcfeqMxQHbbg/company-logo_100_100/0/1705328322224?e=2147483647&amp;v=beta&amp;t=N6Ly9KoeMjqFb-aSQMJ8uNkg0pIkPT0hjjmkvzFVf74" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        SAP Investor Relations
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Software Development
      
            </p>

            <p class="base-aside-card__second-subtitle font-sans text-sm leading-open text-color-text-low-emphasis">
              
        Walldorf, Baden-Württemberg
      
            </p>

<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
          
        </ul>

            <button class="show-more-less__button show-more-less__more-button show-more-less-button
                " aria-expanded="false" data-tracking-control-name="affiliated-pages_show_more">
                
            Show more affiliated pages
          
              <icon class="show-more-less__button--chevron show-more-less-button-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cyolgscd0imw2ldqppkrb84vo"></icon>
            </button>

            <button class="show-more-less__button show-more-less__less-button show-more-less-button
                show-more-less__button--hide" aria-expanded="false" data-tracking-control-name="affiliated-pages_show_more">
                
            Show fewer affiliated pages
          
              <icon class="show-more-less__button--chevron show-more-less-button-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/4chtt12k98xwnba1nimld2oyg"></icon>
            </button>
      </div>
  
      
        </div>
      </section>
  
  
            
    
    
    

      
      <section class="aside-section-container mb-4" data-test-id="similar-pages">

            <h2 class="aside-section-container__title section-title">
              Similar pages
            </h2>

<!---->
        <div class="aside-section-container__content break-words">
          
        
    
    

      <div class="show-more-less">
<!---->
        <ul data-max-num-to-show="4" class="show-more-less__list show-more-less__list--hide-after-4" data-impression-id="similar-pages_show-more-less">
          
              <li>
                

    
    
    
    
      <a href="https://www.linkedin.com/company/oracle?trk=similar-pages" target="_self" data-tracking-control-name="similar-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D4E0BAQHYCgYovUuPtQ/company-logo_100_100/0/1665755678957/oracle_logo?e=2147483647&amp;v=beta&amp;t=EpTB1kDOi9VFf6jT0BVXe8uOHLUk2FvyQpNPaiYwXnU" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Oracle
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        IT Services and IT Consulting
      
            </p>

            <p class="base-aside-card__second-subtitle font-sans text-sm leading-open text-color-text-low-emphasis">
              
        Austin, Texas
      
            </p>

<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://www.linkedin.com/company/microsoft?trk=similar-pages" target="_self" data-tracking-control-name="similar-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_100_100/0/1630652622688/microsoft_logo?e=2147483647&amp;v=beta&amp;t=4ft1hh_UdO2TMuqRWlFPHTTr2B3BN0E2LmTE6tEYwJI" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Microsoft
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Software Development
      
            </p>

            <p class="base-aside-card__second-subtitle font-sans text-sm leading-open text-color-text-low-emphasis">
              
        Redmond, Washington
      
            </p>

<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://www.linkedin.com/company/google?trk=similar-pages" target="_self" data-tracking-control-name="similar-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_100_100/0/1631311446380?e=2147483647&amp;v=beta&amp;t=5bmvSDVt4i-ECxTU43yiS4iXUM4inJiG-e9PHOUlxx0" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Google
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Software Development
      
            </p>

            <p class="base-aside-card__second-subtitle font-sans text-sm leading-open text-color-text-low-emphasis">
              
        Mountain View, CA
      
            </p>

<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://www.linkedin.com/company/deloitte?trk=similar-pages" target="_self" data-tracking-control-name="similar-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/C560BAQGNtpblgQpJoQ/company-logo_100_100/0/1662120928214/deloitte_logo?e=2147483647&amp;v=beta&amp;t=KhIfaHWyu1aAgyyImEhYDprMjFP3LaMR0E7NF2MPxMY" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Deloitte
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Business Consulting and Services
      
            </p>

<!---->
<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://www.linkedin.com/company/ibm?trk=similar-pages" target="_self" data-tracking-control-name="similar-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D560BAQGiz5ecgpCtkA/company-logo_100_100/0/1688684715866/ibm_logo?e=2147483647&amp;v=beta&amp;t=5zkuzxYrW1Iyx8oUa-u7lMSQ9TN1Q9D87M_0ybQf3NQ" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        IBM
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        IT Services and IT Consulting
      
            </p>

            <p class="base-aside-card__second-subtitle font-sans text-sm leading-open text-color-text-low-emphasis">
              
        Armonk, New York, NY
      
            </p>

<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://www.linkedin.com/company/salesforce?trk=similar-pages" target="_self" data-tracking-control-name="similar-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/C560BAQHZ9xYomLW7zg/company-logo_100_100/0/1630658255326/salesforce_logo?e=2147483647&amp;v=beta&amp;t=GvAdJRB6d3hWoiMBjIAOP9tjZzbWxLNF84FnSTgWblE" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Salesforce
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Software Development
      
            </p>

            <p class="base-aside-card__second-subtitle font-sans text-sm leading-open text-color-text-low-emphasis">
              
        San Francisco, California
      
            </p>

<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://ie.linkedin.com/company/accenture?trk=similar-pages" target="_self" data-tracking-control-name="similar-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D4E0BAQGTUswcRlgg9A/company-logo_100_100/0/1689352303687/accenture_logo?e=2147483647&amp;v=beta&amp;t=dWFSBIrSx0hPz-Sa9g9BrrufhsfNr4tisCL18AE_C-g" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Accenture
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Business Consulting and Services
      
            </p>

<!---->
<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://www.linkedin.com/company/amazon?trk=similar-pages" target="_self" data-tracking-control-name="similar-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_100_100/0/1630640869849/amazon_logo?e=2147483647&amp;v=beta&amp;t=ckUoyDcKb4OtrPrnkiepZRIH4rOREd9cewh-TTrMVJE" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Amazon
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Software Development
      
            </p>

            <p class="base-aside-card__second-subtitle font-sans text-sm leading-open text-color-text-low-emphasis">
              
        Seattle, WA
      
            </p>

<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://in.linkedin.com/company/saplabsindia?trk=similar-pages" target="_self" data-tracking-control-name="similar-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/C4E0BAQEaaj4f0MjhAA/company-logo_100_100/0/1631307593636?e=2147483647&amp;v=beta&amp;t=TU6cAYAYjoG68RzQY3aMVy1Gg2JBvNQ_MGoM5CaZRAU" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        SAP Labs India
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Research Services
      
            </p>

            <p class="base-aside-card__second-subtitle font-sans text-sm leading-open text-color-text-low-emphasis">
              
        Bangalore, Karnataka
      
            </p>

<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li>
                

    
    
    
    
      <a href="https://www.linkedin.com/company/cisco?trk=similar-pages" target="_self" data-tracking-control-name="similar-pages" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link">
        

<!---->
      
<!---->
            
              
      <img class="inline-block relative
          
          w-6 h-6
          " data-delayed-url="https://media.licdn.com/dms/image/D560BAQFVQnYFvzs9jw/company-logo_100_100/0/1688482473854/cisco_logo?e=2147483647&amp;v=beta&amp;t=KML8LhO9zpJ8x3KXb5ukbtuiH4nDYEGYzqYNRyyl6OE" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  

        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Cisco
      
<!---->          </h3>

            <p class="base-aside-card__subtitle font-sans text-sm text-color-text leading-open mt-0.5 break-words
                ">
              
        Software Development
      
            </p>

            <p class="base-aside-card__second-subtitle font-sans text-sm leading-open text-color-text-low-emphasis">
              
        San Jose, CA
      
            </p>

<!---->
<!---->
<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
          
        </ul>

            <button class="show-more-less__button show-more-less__more-button show-more-less-button
                " aria-expanded="false" data-tracking-control-name="similar-pages_show_more">
                
            Show more similar pages
          
              <icon class="show-more-less__button--chevron show-more-less-button-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cyolgscd0imw2ldqppkrb84vo"></icon>
            </button>

            <button class="show-more-less__button show-more-less__less-button show-more-less-button
                show-more-less__button--hide" aria-expanded="false" data-tracking-control-name="similar-pages_show_more">
                
            Show fewer similar pages
          
              <icon class="show-more-less__button--chevron show-more-less-button-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/4chtt12k98xwnba1nimld2oyg"></icon>
            </button>
      </div>
  
      
        </div>
      </section>
  
  
            

    
    
    

      
      <section class="aside-section-container mb-4" data-test-id="browse-jobs">

            <h2 class="aside-section-container__title section-title">
              Browse jobs
            </h2>

<!---->
        <div class="aside-section-container__content break-words">
          
        
    
    

      <div class="show-more-less">
<!---->
        <ul data-max-num-to-show="10" class="show-more-less__list show-more-less__list--hide-after-10" data-impression-id="organization_guest-browse_jobs_show-more-less">
          
              <li data-impression-id="organization_guest-browse_jobs-0">
                

    

    
    
    
      <a href="https://www.linkedin.com/jobs/sap-jobs?trk=organization_guest-browse_jobs" target="_self" data-tracking-control-name="organization_guest-browse_jobs" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link aside-job-search-result-card">
        

<!---->
      
<!---->
        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        SAP jobs
      
<!---->          </h3>

<!---->
<!---->
<!---->
            <div class="base-aside-card__metadata font-sans text-sm leading-open font-regular text-color-text-low-emphasis mt-0.5">
              
        122,374 open jobs
      
            </div>

<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li data-impression-id="organization_guest-browse_jobs-1">
                

    

    
    
    
      <a href="https://www.linkedin.com/jobs/analyst-jobs?trk=organization_guest-browse_jobs" target="_self" data-tracking-control-name="organization_guest-browse_jobs" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link aside-job-search-result-card">
        

<!---->
      
<!---->
        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Analyst jobs
      
<!---->          </h3>

<!---->
<!---->
<!---->
            <div class="base-aside-card__metadata font-sans text-sm leading-open font-regular text-color-text-low-emphasis mt-0.5">
              
        760,055 open jobs
      
            </div>

<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li data-impression-id="organization_guest-browse_jobs-2">
                

    

    
    
    
      <a href="https://www.linkedin.com/jobs/intern-jobs?trk=organization_guest-browse_jobs" target="_self" data-tracking-control-name="organization_guest-browse_jobs" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link aside-job-search-result-card">
        

<!---->
      
<!---->
        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Intern jobs
      
<!---->          </h3>

<!---->
<!---->
<!---->
            <div class="base-aside-card__metadata font-sans text-sm leading-open font-regular text-color-text-low-emphasis mt-0.5">
              
        48,214 open jobs
      
            </div>

<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li data-impression-id="organization_guest-browse_jobs-3">
                

    

    
    
    
      <a href="https://www.linkedin.com/jobs/manager-jobs?trk=organization_guest-browse_jobs" target="_self" data-tracking-control-name="organization_guest-browse_jobs" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link aside-job-search-result-card">
        

<!---->
      
<!---->
        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Manager jobs
      
<!---->          </h3>

<!---->
<!---->
<!---->
            <div class="base-aside-card__metadata font-sans text-sm leading-open font-regular text-color-text-low-emphasis mt-0.5">
              
        2,003,890 open jobs
      
            </div>

<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li data-impression-id="organization_guest-browse_jobs-4">
                

    

    
    
    
      <a href="https://www.linkedin.com/jobs/engineer-jobs?trk=organization_guest-browse_jobs" target="_self" data-tracking-control-name="organization_guest-browse_jobs" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link aside-job-search-result-card">
        

<!---->
      
<!---->
        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Engineer jobs
      
<!---->          </h3>

<!---->
<!---->
<!---->
            <div class="base-aside-card__metadata font-sans text-sm leading-open font-regular text-color-text-low-emphasis mt-0.5">
              
        608,159 open jobs
      
            </div>

<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li data-impression-id="organization_guest-browse_jobs-5">
                

    

    
    
    
      <a href="https://www.linkedin.com/jobs/project-manager-jobs?trk=organization_guest-browse_jobs" target="_self" data-tracking-control-name="organization_guest-browse_jobs" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link aside-job-search-result-card">
        

<!---->
      
<!---->
        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Project Manager jobs
      
<!---->          </h3>

<!---->
<!---->
<!---->
            <div class="base-aside-card__metadata font-sans text-sm leading-open font-regular text-color-text-low-emphasis mt-0.5">
              
        312,603 open jobs
      
            </div>

<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li data-impression-id="organization_guest-browse_jobs-6">
                

    

    
    
    
      <a href="https://www.linkedin.com/jobs/associate-jobs?trk=organization_guest-browse_jobs" target="_self" data-tracking-control-name="organization_guest-browse_jobs" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link aside-job-search-result-card">
        

<!---->
      
<!---->
        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Associate jobs
      
<!---->          </h3>

<!---->
<!---->
<!---->
            <div class="base-aside-card__metadata font-sans text-sm leading-open font-regular text-color-text-low-emphasis mt-0.5">
              
        1,094,512 open jobs
      
            </div>

<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li data-impression-id="organization_guest-browse_jobs-7">
                

    

    
    
    
      <a href="https://www.linkedin.com/jobs/specialist-jobs?trk=organization_guest-browse_jobs" target="_self" data-tracking-control-name="organization_guest-browse_jobs" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link aside-job-search-result-card">
        

<!---->
      
<!---->
        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Specialist jobs
      
<!---->          </h3>

<!---->
<!---->
<!---->
            <div class="base-aside-card__metadata font-sans text-sm leading-open font-regular text-color-text-low-emphasis mt-0.5">
              
        849,142 open jobs
      
            </div>

<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li data-impression-id="organization_guest-browse_jobs-8">
                

    

    
    
    
      <a href="https://www.linkedin.com/jobs/developer-jobs?trk=organization_guest-browse_jobs" target="_self" data-tracking-control-name="organization_guest-browse_jobs" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link aside-job-search-result-card">
        

<!---->
      
<!---->
        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Developer jobs
      
<!---->          </h3>

<!---->
<!---->
<!---->
            <div class="base-aside-card__metadata font-sans text-sm leading-open font-regular text-color-text-low-emphasis mt-0.5">
              
        344,797 open jobs
      
            </div>

<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li data-impression-id="organization_guest-browse_jobs-9">
                

    

    
    
    
      <a href="https://www.linkedin.com/jobs/consultant-jobs?trk=organization_guest-browse_jobs" target="_self" data-tracking-control-name="organization_guest-browse_jobs" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link aside-job-search-result-card">
        

<!---->
      
<!---->
        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Consultant jobs
      
<!---->          </h3>

<!---->
<!---->
<!---->
            <div class="base-aside-card__metadata font-sans text-sm leading-open font-regular text-color-text-low-emphasis mt-0.5">
              
        820,324 open jobs
      
            </div>

<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li data-impression-id="organization_guest-browse_jobs-10">
                

    

    
    
    
      <a href="https://www.linkedin.com/jobs/executive-jobs?trk=organization_guest-browse_jobs" target="_self" data-tracking-control-name="organization_guest-browse_jobs" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link aside-job-search-result-card">
        

<!---->
      
<!---->
        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Executive jobs
      
<!---->          </h3>

<!---->
<!---->
<!---->
            <div class="base-aside-card__metadata font-sans text-sm leading-open font-regular text-color-text-low-emphasis mt-0.5">
              
        700,389 open jobs
      
            </div>

<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li data-impression-id="organization_guest-browse_jobs-11">
                

    

    
    
    
      <a href="https://www.linkedin.com/jobs/account-executive-jobs?trk=organization_guest-browse_jobs" target="_self" data-tracking-control-name="organization_guest-browse_jobs" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link aside-job-search-result-card">
        

<!---->
      
<!---->
        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Account Executive jobs
      
<!---->          </h3>

<!---->
<!---->
<!---->
            <div class="base-aside-card__metadata font-sans text-sm leading-open font-regular text-color-text-low-emphasis mt-0.5">
              
        87,726 open jobs
      
            </div>

<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li data-impression-id="organization_guest-browse_jobs-12">
                

    

    
    
    
      <a href="https://www.linkedin.com/jobs/director-jobs?trk=organization_guest-browse_jobs" target="_self" data-tracking-control-name="organization_guest-browse_jobs" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link aside-job-search-result-card">
        

<!---->
      
<!---->
        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Director jobs
      
<!---->          </h3>

<!---->
<!---->
<!---->
            <div class="base-aside-card__metadata font-sans text-sm leading-open font-regular text-color-text-low-emphasis mt-0.5">
              
        1,374,979 open jobs
      
            </div>

<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li data-impression-id="organization_guest-browse_jobs-13">
                

    

    
    
    
      <a href="https://www.linkedin.com/jobs/accountant-jobs?trk=organization_guest-browse_jobs" target="_self" data-tracking-control-name="organization_guest-browse_jobs" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link aside-job-search-result-card">
        

<!---->
      
<!---->
        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Accountant jobs
      
<!---->          </h3>

<!---->
<!---->
<!---->
            <div class="base-aside-card__metadata font-sans text-sm leading-open font-regular text-color-text-low-emphasis mt-0.5">
              
        104,259 open jobs
      
            </div>

<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li data-impression-id="organization_guest-browse_jobs-14">
                

    

    
    
    
      <a href="https://www.linkedin.com/jobs/account-manager-jobs?trk=organization_guest-browse_jobs" target="_self" data-tracking-control-name="organization_guest-browse_jobs" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link aside-job-search-result-card">
        

<!---->
      
<!---->
        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Account Manager jobs
      
<!---->          </h3>

<!---->
<!---->
<!---->
            <div class="base-aside-card__metadata font-sans text-sm leading-open font-regular text-color-text-low-emphasis mt-0.5">
              
        152,491 open jobs
      
            </div>

<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li data-impression-id="organization_guest-browse_jobs-15">
                

    

    
    
    
      <a href="https://www.linkedin.com/jobs/assistant-jobs?trk=organization_guest-browse_jobs" target="_self" data-tracking-control-name="organization_guest-browse_jobs" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link aside-job-search-result-card">
        

<!---->
      
<!---->
        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Assistant jobs
      
<!---->          </h3>

<!---->
<!---->
<!---->
            <div class="base-aside-card__metadata font-sans text-sm leading-open font-regular text-color-text-low-emphasis mt-0.5">
              
        728,748 open jobs
      
            </div>

<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li data-impression-id="organization_guest-browse_jobs-16">
                

    

    
    
    
      <a href="https://www.linkedin.com/jobs/sap-consultant-jobs?trk=organization_guest-browse_jobs" target="_self" data-tracking-control-name="organization_guest-browse_jobs" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link aside-job-search-result-card">
        

<!---->
      
<!---->
        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        SAP Consultant jobs
      
<!---->          </h3>

<!---->
<!---->
<!---->
            <div class="base-aside-card__metadata font-sans text-sm leading-open font-regular text-color-text-low-emphasis mt-0.5">
              
        15,151 open jobs
      
            </div>

<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li data-impression-id="organization_guest-browse_jobs-17">
                

    

    
    
    
      <a href="https://www.linkedin.com/jobs/graduate-jobs?trk=organization_guest-browse_jobs" target="_self" data-tracking-control-name="organization_guest-browse_jobs" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link aside-job-search-result-card">
        

<!---->
      
<!---->
        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Graduate jobs
      
<!---->          </h3>

<!---->
<!---->
<!---->
            <div class="base-aside-card__metadata font-sans text-sm leading-open font-regular text-color-text-low-emphasis mt-0.5">
              
        387,306 open jobs
      
            </div>

<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li data-impression-id="organization_guest-browse_jobs-18">
                

    

    
    
    
      <a href="https://www.linkedin.com/jobs/senior-jobs?trk=organization_guest-browse_jobs" target="_self" data-tracking-control-name="organization_guest-browse_jobs" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link aside-job-search-result-card">
        

<!---->
      
<!---->
        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Senior jobs
      
<!---->          </h3>

<!---->
<!---->
<!---->
            <div class="base-aside-card__metadata font-sans text-sm leading-open font-regular text-color-text-low-emphasis mt-0.5">
              
        1,142,468 open jobs
      
            </div>

<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
              <li data-impression-id="organization_guest-browse_jobs-19">
                

    

    
    
    
      <a href="https://www.linkedin.com/jobs/sales-manager-jobs?trk=organization_guest-browse_jobs" target="_self" data-tracking-control-name="organization_guest-browse_jobs" data-tracking-will-navigate class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-aside-card flex my-1.5
        
        base-aside-card--link aside-job-search-result-card">
        

<!---->
      
<!---->
        <div class="base-aside-card__info self-center pl-0.5 flex flex-col flex-1">
          <h3 class="base-aside-card__title font-sans text-md font-bold text-color-text relative">
            
        Sales Manager jobs
      
<!---->          </h3>

<!---->
<!---->
<!---->
            <div class="base-aside-card__metadata font-sans text-sm leading-open font-regular text-color-text-low-emphasis mt-0.5">
              
        348,591 open jobs
      
            </div>

<!---->        </div>
      
    
      </a>
  
  
  
  
              </li>
          
        </ul>

            <button class="show-more-less__button show-more-less__more-button show-more-less-button
                " aria-expanded="false" data-tracking-control-name="organization_guest-browse_jobs_show_more">
                
            Show more jobs like this
          
              <icon class="show-more-less__button--chevron show-more-less-button-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cyolgscd0imw2ldqppkrb84vo"></icon>
            </button>

            <button class="show-more-less__button show-more-less__less-button show-more-less-button
                show-more-less__button--hide" aria-expanded="false" data-tracking-control-name="organization_guest-browse_jobs_show_more">
                
            Show fewer jobs like this
          
              <icon class="show-more-less__button--chevron show-more-less-button-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/4chtt12k98xwnba1nimld2oyg"></icon>
            </button>
      </div>
  
      
        </div>
      </section>
  
  
            
    
    
    
    
    
    
    
    
    
    

      
      <section class="aside-section-container mb-4" data-test-id="stock">

            <h2 class="aside-section-container__title section-title">
              Stock
            </h2>

<!---->
        <div class="aside-section-container__content break-words">
          
        <div class="flex flex-wrap mt-2">
          <p class="mb-0.5 flex-[0_0_50%] font-bold">
            SAP
          </p>
            <time class="mb-0.5 flex-[0_0_50%] text-color-text-secondary text-sm text-right" datetime="2024-01-31">
              January 31, 2024
            </time>
          <p class="mb-0.5 flex-[0_0_50%] text-color-text-secondary text-sm">
            NYSE
          </p>
          <p class="mb-0.5 flex-[0_0_50%] text-color-text-secondary text-sm text-right">
            20 minutes delay
          </p>
        </div>

        <div class="mb-2">
          <p class="text-display-lg mb-0.5">
            $174.66
          </p>

            <p class="text-color-text-negative">
              -1.07 (-0.609%)
            </p>
        </div>

          <dl class="mb-2 flex flex-wrap" title="Daily Price">
                <div class="flex flex-[0_0_50%] even:justify-end">
                  <dt class="text-color-text-secondary flex-[0_1_50%] break-words text-sm">
                    Open
                  </dt>
                  <dd class="ml-1">
                    175.63
                  </dd>
                </div>
                <div class="flex flex-[0_0_50%] even:justify-end">
                  <dt class="text-color-text-secondary flex-[0_1_50%] break-words text-sm">
                    Low
                  </dt>
                  <dd class="ml-1">
                    174.26
                  </dd>
                </div>
                <div class="flex flex-[0_0_50%] even:justify-end">
                  <dt class="text-color-text-secondary flex-[0_1_50%] break-words text-sm">
                    High
                  </dt>
                  <dd class="ml-1">
                    176.08
                  </dd>
                </div>
          </dl>

          <p class="stock__provider text-color-text-secondary text-sm mb-2">
            Data from Refinitiv
          </p>
          <a href="https://www.bing.com/search?q=SAP%2Bstock&amp;trk=stock_disclaimer_link" class="btn-md btn-secondary inline-block mb-0.5" data-tracking-control-name="stock_disclaimer_link" target="_blank" rel="nofollow noopener" data-tracking-will-navigate aria-label="See more info on Bing">
            See more info on
            <span class="ml-0.5 text-[#0b8484]">
              <icon data-svg-class-name="w-3 h-3 align-middle" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/8uwt2bf5vf2xisqysghhi8iug"></icon>
              Bing
            </span>
          </a>
      
        </div>
      </section>
  
  
            
    
    
    
    
    
    
    
    
    
    
    

        
      <section class="aside-section-container mb-4" data-test-id="funding">

            <h2 class="aside-section-container__title section-title">
              Funding
            </h2>

<!---->
        <div class="aside-section-container__content break-words">
          
              <a class="link-styled text-sm mb-1 inline-block !text-color-text-secondary" href="https://www.crunchbase.com/organization/sap/funding_rounds/funding_rounds_list?utm_source=linkedin&amp;utm_medium=referral&amp;utm_campaign=linkedin_companies&amp;utm_content=all_fundings_anon&amp;trk=funding_all-rounds" aria-label="SAP had 2 rounds of funding" data-tracking-control-name="funding_all-rounds" target="_blank" rel="sponsored nofollow noopener noreferrer" data-tracking-will-navigate>
                <span>
                  SAP
                </span>
                  <span class="before:middot">
                    2 total rounds
                  </span>
              </a>
            <div class="my-2">
              <p class="mb-0.5 font-bold">
                Last Round
              </p>
                  <a class="link-styled text-sm mb-1 inline-block !text-color-text-secondary" href="https://www.crunchbase.com/funding_round/sap-post-ipo-equity--f2e7e531?utm_source=linkedin&amp;utm_medium=referral&amp;utm_campaign=linkedin_companies&amp;utm_content=last_funding_anon&amp;trk=funding_last-round" data-tracking-control-name="funding_last-round" aria-describedby="external-link-last-round" target="_blank" rel="sponsored nofollow noopener noreferrer" data-tracking-will-navigate>
                    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

      Post IPO equity
  
                    <time class="before:middot" datetime="2019-05-24">
                      May 24, 2019
                    </time>
                  </a>
                  <div class="hidden" id="external-link-last-round">
                    External Crunchbase Link for last round of funding
                  </div>
                <p class="text-display-lg">
                    US$ 1.3B
                </p>
            </div>

            <div class="mb-2">
              <p class="text-color-text-secondary text-sm">
                Investors
              </p>
                    <a class="flex text-sm items-center mb-1 link-styled text-sm mb-1 inline-block !text-color-text-secondary" href="https://www.crunchbase.com/organization/elliott-management-corp?utm_source=linkedin&amp;utm_medium=referral&amp;utm_campaign=linkedin_companies&amp;utm_content=investor_anon&amp;trk=funding_investors" data-tracking-control-name="funding_investors" aria-label="Elliott Investment Management Crunchbase external link" target="_blank" rel="sponsored nofollow noopener noreferrer" data-tracking-will-navigate>
                      
  
      <img class="inline-block relative
          
          w-4 h-4
          " data-delayed-url="https://media.licdn.com/dms/image/sync/D5638AQHguusVVYCaqg/crunchbase_investor_logo_100/0/1706118924995?e=1707325200&amp;v=beta&amp;t=AVp53YiHsVbAglzJQRAfZjQdv0YnIF993rw5gZwIYbA" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  
  Elliott Investment Management

<!---->                    </a>

<!---->            </div>

            <a class="btn-md btn-secondary inline-block mb-0.5" href="https://www.crunchbase.com/organization/sap?utm_source=linkedin&amp;utm_medium=referral&amp;utm_campaign=linkedin_companies&amp;utm_content=profile_cta_anon&amp;trk=funding_crunchbase" data-tracking-control-name="funding_crunchbase" target="_blank" rel="sponsored nofollow noopener noreferrer" data-tracking-will-navigate>
              See more info on <span class="text-[#263844]">crunchbase</span>
              
  <icon class="align-middle" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/49229g4q0jsla5l1xojq1wob9"></icon>

            </a>
        
        </div>
      </section>
  
  
          
      
      </section>
    </main>

      <div class="pre-footer ">
        
        
            
      <section class="mt-2 papabear:pl-1 papabear:mx-auto papabear:max-w-screen-content-max-w mamabear:px-2 babybear:pt-2 babybear:px-2" data-js-module-id="more-searches" data-test-id="more-searches">
        
    

    <section class="tw-expandable-linkster" data-js-module-id="expandable-linkster">
      
    
    

      <div class="show-more-less">
            <button class="show-more-less__button show-more-less__more-button show-more-less-button
                " aria-expanded="false" data-tracking-control-name="organization_guest_show_more">
                
          
            More searches
        
              <icon class="show-more-less__button--chevron show-more-less-button-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cyolgscd0imw2ldqppkrb84vo"></icon>
            </button>

            <button class="show-more-less__button show-more-less__less-button show-more-less-button
                show-more-less__button--hide" aria-expanded="false" data-tracking-control-name="organization_guest_show_more">
                
          
            More searches
        
              <icon class="show-more-less__button--chevron show-more-less-button-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/4chtt12k98xwnba1nimld2oyg"></icon>
            </button>

        <ul data-max-num-to-show="0" class="show-more-less__list show-more-less__list--hide-after-0" data-impression-id="organization_guest_show-more-less">
          
          
            <li>
              
    <section class="tw-linkster " data-impression-id="organization_guest_linkster" data-entity-id="urn:li:organization:1115" data-module-name="company_to_jserps_coview" data-js-module-id="linkster">
      <div class="max-w-screen-content-max-w w-full flex justify-between my-0 mx-auto mamabear:px-3 babybear:px-2 babybear:flex-col">
            

    

      <div class="flex-1 w-1/2 pt-2 pr-4 pb-4 pl-0 babybear:pb-2 babybear:w-full babybear:border-b-1 babybear:border-solid babybear:border-color-border-low-emphasis babybear:last:border-b-0">
<!---->        <ul class="my-1">
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/sap-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                SAP jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/analyst-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Analyst jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/intern-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Intern jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/engineer-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Engineer jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/sap-consultant-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                SAP Consultant jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/developer-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Developer jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/manager-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Manager jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/consultant-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Consultant jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/project-manager-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Project Manager jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/accountant-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Accountant jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/software-engineer-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Software Engineer jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/director-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Director jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/specialist-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Specialist jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/account-executive-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Account Executive jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/account-manager-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Account Manager jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/senior-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Senior jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/associate-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Associate jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/scientist-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Scientist jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/graduate-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Graduate jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/assistant-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Assistant jobs
              </a>
            </li>
        </ul>

<!---->      </div>
  
            

    

      <div class="flex-1 w-1/2 pt-2 pr-4 pb-4 pl-0 babybear:pb-2 babybear:w-full babybear:border-b-1 babybear:border-solid babybear:border-color-border-low-emphasis babybear:last:border-b-0">
<!---->        <ul class="my-1">
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/student-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Student jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/executive-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Executive jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/user-experience-designer-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                User Experience Designer jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/sales-manager-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Sales Manager jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/data-analyst-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Data Analyst jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/recruiter-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Recruiter jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/sap-materials-management-consultant-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Sap Materials Management Consultant jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/sap-developer-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                SAP Developer jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/business-analyst-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Business Analyst jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/sap-project-manager-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                SAP Project Manager jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/marketing-manager-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Marketing Manager jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/legal-counsel-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Legal Counsel jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/human-resources-specialist-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Human Resources Specialist jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/marketing-specialist-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Marketing Specialist jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/coordinator-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Coordinator jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/designer-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Designer jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/business-development-specialist-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Business Development Specialist jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/lawyer-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Lawyer jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/partner-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Partner jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/solutions-architect-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Solutions Architect jobs
              </a>
            </li>
        </ul>

<!---->      </div>
  
            

    

      <div class="flex-1 w-1/2 pt-2 pr-4 pb-4 pl-0 babybear:pb-2 babybear:w-full babybear:border-b-1 babybear:border-solid babybear:border-color-border-low-emphasis babybear:last:border-b-0">
<!---->        <ul class="my-1">
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/senior-manager-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Senior Manager jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/python-developer-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Python Developer jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/sap-specialist-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                SAP Specialist jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/marketing-intern-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Marketing Intern jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/president-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                President jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/assistant-manager-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Assistant Manager jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/mechanical-engineer-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Mechanical Engineer jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/buyer-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Buyer jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/team-lead-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Team Lead jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/architect-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Architect jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/finance-specialist-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Finance Specialist jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/administrator-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Administrator jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/head-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Head jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/administrative-assistant-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Administrative Assistant jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/vice-president-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Vice President jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/writer-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Writer jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/financial-assistant-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Financial Assistant jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/product-designer-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Product Designer jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/senior-software-engineer-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Senior Software Engineer jobs
              </a>
            </li>
            <li class="tw-link-column-item">
              
              
              <a class="link tw-linkster-link" href="https://www.linkedin.com/jobs/sales-specialist-jobs?trk=organization_guest_linkster_link" data-js-module-id="link-column-link" data-tracking-control-name="organization_guest_linkster_link" data-tracking-will-navigate>
                Sales Specialist jobs
              </a>
            </li>
        </ul>

<!---->      </div>
  
            

    

<!---->  
            

    

<!---->  
            

    

<!---->  
            

    

<!---->  
            

    

<!---->  
            

    

<!---->  
            

    

<!---->  
            

    

<!---->  
            

    

<!---->  
            

    

<!---->  
            

    

<!---->  
            

    

<!---->  
            

    

<!---->  
            

    

<!---->  
            

    

<!---->  
            

    

<!---->  
            

    

<!---->  
      </div>
    </section>
  
            </li>
        
        </ul>

<!---->      </div>
  
    </section>
  
      </section>
  
          
      
      </div>

    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    

    
    
    
    

    <footer class="li-footer bg-transparent w-full ">
      <ul class="li-footer__list flex flex-wrap flex-row items-start justify-start w-full h-auto min-h-[50px] my-[0px] mx-auto py-3 px-2 papabear:w-[1128px] papabear:p-0">
        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        
          <span class="sr-only">LinkedIn</span>
          <icon class="li-footer__copy-logo text-color-logo-brand-alt inline-block self-center h-[14px] w-[56px] mr-1" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/e12h2cd8ac580qen9qdd0qks8"></icon>
          <span class="li-footer__copy-text flex items-center">&copy; 2024</span>
        
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://about.linkedin.com?trk=d_org_guest_company_overview_footer-about" data-tracking-control-name="d_org_guest_company_overview_footer-about" data-tracking-will-navigate>
          
          About
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/accessibility?trk=d_org_guest_company_overview_footer-accessibility" data-tracking-control-name="d_org_guest_company_overview_footer-accessibility" data-tracking-will-navigate>
          
          Accessibility
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/user-agreement?trk=d_org_guest_company_overview_footer-user-agreement" data-tracking-control-name="d_org_guest_company_overview_footer-user-agreement" data-tracking-will-navigate>
          
          User Agreement
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/privacy-policy?trk=d_org_guest_company_overview_footer-privacy-policy" data-tracking-control-name="d_org_guest_company_overview_footer-privacy-policy" data-tracking-will-navigate>
          
          Privacy Policy
        
        </a>
  </li>

<!---->        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/cookie-policy?trk=d_org_guest_company_overview_footer-cookie-policy" data-tracking-control-name="d_org_guest_company_overview_footer-cookie-policy" data-tracking-will-navigate>
          
          Cookie Policy
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/copyright-policy?trk=d_org_guest_company_overview_footer-copyright-policy" data-tracking-control-name="d_org_guest_company_overview_footer-copyright-policy" data-tracking-will-navigate>
          
          Copyright Policy
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://brand.linkedin.com/policies?trk=d_org_guest_company_overview_footer-brand-policy" data-tracking-control-name="d_org_guest_company_overview_footer-brand-policy" data-tracking-will-navigate>
          
          Brand Policy
        
        </a>
  </li>

          
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/psettings/guest-controls?trk=d_org_guest_company_overview_footer-guest-controls" data-tracking-control-name="d_org_guest_company_overview_footer-guest-controls" data-tracking-will-navigate>
          
            Guest Controls
          
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/professional-community-policies?trk=d_org_guest_company_overview_footer-community-guide" data-tracking-control-name="d_org_guest_company_overview_footer-community-guide" data-tracking-will-navigate>
          
          Community Guidelines
        
        </a>
  </li>

        
<!---->
          
          
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        
              

    
    

    

    

    <div class="collapsible-dropdown collapsible-dropdown--footer collapsible-dropdown--up flex items-center relative hyphens-auto language-selector z-2">
<!---->
        <ul class="collapsible-dropdown__list hidden container-raised absolute w-auto overflow-y-auto flex-col items-stretch z-1 bottom-[100%] top-auto" role="menu" tabindex="-1">
          
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="العربية (Arabic)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-ar_AE" data-locale="ar_AE" role="menuitem" lang="ar_AE">
                العربية (Arabic)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Čeština (Czech)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-cs_CZ" data-locale="cs_CZ" role="menuitem" lang="cs_CZ">
                Čeština (Czech)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Dansk (Danish)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-da_DK" data-locale="da_DK" role="menuitem" lang="da_DK">
                Dansk (Danish)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Deutsch (German)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-de_DE" data-locale="de_DE" role="menuitem" lang="de_DE">
                Deutsch (German)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="English (English) selected" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link--selected" data-tracking-control-name="language-selector-en_US" data-locale="en_US" role="menuitem" lang="en_US">
                <strong>English (English)</strong>
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Español (Spanish)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-es_ES" data-locale="es_ES" role="menuitem" lang="es_ES">
                Español (Spanish)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Français (French)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-fr_FR" data-locale="fr_FR" role="menuitem" lang="fr_FR">
                Français (French)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="हिंदी (Hindi)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-hi_IN" data-locale="hi_IN" role="menuitem" lang="hi_IN">
                हिंदी (Hindi)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Bahasa Indonesia (Indonesian)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-in_ID" data-locale="in_ID" role="menuitem" lang="in_ID">
                Bahasa Indonesia (Indonesian)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Italiano (Italian)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-it_IT" data-locale="it_IT" role="menuitem" lang="it_IT">
                Italiano (Italian)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="日本語 (Japanese)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-ja_JP" data-locale="ja_JP" role="menuitem" lang="ja_JP">
                日本語 (Japanese)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="한국어 (Korean)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-ko_KR" data-locale="ko_KR" role="menuitem" lang="ko_KR">
                한국어 (Korean)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Bahasa Malaysia (Malay)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-ms_MY" data-locale="ms_MY" role="menuitem" lang="ms_MY">
                Bahasa Malaysia (Malay)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Nederlands (Dutch)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-nl_NL" data-locale="nl_NL" role="menuitem" lang="nl_NL">
                Nederlands (Dutch)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Norsk (Norwegian)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-no_NO" data-locale="no_NO" role="menuitem" lang="no_NO">
                Norsk (Norwegian)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Polski (Polish)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-pl_PL" data-locale="pl_PL" role="menuitem" lang="pl_PL">
                Polski (Polish)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Português (Portuguese)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-pt_BR" data-locale="pt_BR" role="menuitem" lang="pt_BR">
                Português (Portuguese)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Română (Romanian)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-ro_RO" data-locale="ro_RO" role="menuitem" lang="ro_RO">
                Română (Romanian)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Русский (Russian)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-ru_RU" data-locale="ru_RU" role="menuitem" lang="ru_RU">
                Русский (Russian)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Svenska (Swedish)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-sv_SE" data-locale="sv_SE" role="menuitem" lang="sv_SE">
                Svenska (Swedish)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="ภาษาไทย (Thai)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-th_TH" data-locale="th_TH" role="menuitem" lang="th_TH">
                ภาษาไทย (Thai)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Tagalog (Tagalog)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-tl_PH" data-locale="tl_PH" role="menuitem" lang="tl_PH">
                Tagalog (Tagalog)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Türkçe (Turkish)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-tr_TR" data-locale="tr_TR" role="menuitem" lang="tr_TR">
                Türkçe (Turkish)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Українська (Ukrainian)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-uk_UA" data-locale="uk_UA" role="menuitem" lang="uk_UA">
                Українська (Ukrainian)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="简体中文 (Chinese (Simplified))" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-zh_CN" data-locale="zh_CN" role="menuitem" lang="zh_CN">
                简体中文 (Chinese (Simplified))
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="正體中文 (Chinese (Traditional))" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-zh_TW" data-locale="zh_TW" role="menuitem" lang="zh_TW">
                正體中文 (Chinese (Traditional))
            </button>
          </li>
<!---->      
        </ul>

          
        <button class="language-selector__button select-none relative pr-2 font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover hover:cursor-pointer focus:text-color-link-focus focus:outline-dotted focus:outline-1" aria-expanded="false" data-tracking-control-name="footer-lang-dropdown_trigger">
          <span class="language-selector__label-text mr-0.5 break-words">
            Language
          </span>
          <icon class="language-selector__label-chevron w-2 h-2 absolute top-0 right-0" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cyolgscd0imw2ldqppkrb84vo"></icon>
        </button>
      
    </div>
  
  
          
  </li>

      </ul>

<!---->    </footer>
  
  
  

        
    
    
    
    

    
    
    
    
    <form class="google-auth" action="https://www.linkedin.com/uas/login-submit" method="post">
      <input name="loginCsrfParam" value="c0855d59-1e33-478d-84c9-295a494eadc7" type="hidden">

        <input name="session_redirect" value="https://www.linkedin.com/company/sap" type="hidden">

      <input name="trk" value="organization_guest_google-one-tap-submit" type="hidden">
        <code id="termsAndConditionsRendered" style="display: none"><!--true--></code>
          <div class="google-one-tap__module hidden fixed flex flex-col items-center top-[20px] right-[20px] z-[9999]">
            <div class="relative top-2 bg-color-background-container-tint pl-2 pr-1 pt-2 pb-3 w-[375px] rounded-md shadow-2xl">
              <p class="text-md font-bold text-color-text">
                Agree & Join LinkedIn
              </p>
              <p class="text-sm text-color-text" data-impression-id="organization_guest_one-tap-skip-tc-text">
                By clicking Continue, you agree to LinkedIn’s <a href="/legal/user-agreement?trk=organization_guest_google-auth-button_user-agreement" target="_blank" data-tracking-control-name="organization_guest_google-auth-button_user-agreement" data-tracking-will-navigate="true">User Agreement</a>, <a href="/legal/privacy-policy?trk=organization_guest_google-auth-button_privacy-policy" target="_blank" data-tracking-control-name="organization_guest_google-auth-button_privacy-policy" data-tracking-will-navigate="true">Privacy Policy</a>, and <a href="/legal/cookie-policy?trk=organization_guest_google-auth-button_cookie-policy" target="_blank" data-tracking-control-name="organization_guest_google-auth-button_cookie-policy" data-tracking-will-navigate="true">Cookie Policy</a>.
              </p>
            </div>
            <div data-tracking-control-name="organization_guest_google-one-tap" id="google-one-tap__container"></div>
          </div>
      
    <div class="loader loader--full-screen">
      <div class="loader__container mb-2 overflow-hidden">
        <icon class="loader__icon inline-block loader__icon--default text-color-progress-loading" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/ddi43qwelxeqjxdd45pe3fvs1" data-svg-class-name="loader__icon-svg--large fill-currentColor h-[60px] min-h-[60px] w-[60px] min-w-[60px]"></icon>
      </div>
    </div>
  
    </form>

    <script data-delayed-url="https://static.licdn.com/aero-v1/sc/h/8m736dfzskmdn6bwwqz67iiki" data-module-id="google-gsi-lib"></script>
    <code id="googleAuthLibraryPath" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/8m736dfzskmdn6bwwqz67iiki"--></code>
    <code id="isLinkedInAppWebView" style="display: none"><!--false--></code>
    <code id="isTermsAndConditionsSkipEnabledOneTap" style="display: none"><!--true--></code>
  

    
    
    
    
    
    

    
    
    
    
    
    

      <div class="contextual-sign-in-modal" data-impression-id="organization_guest_contextual-sign-in-modal" data-cool-off-enabled>
<!---->
        

    
    <div class>
<!---->
      <div id="organization_guest_contextual-sign-in" class="modal modal--contextual-sign-in" data-outlet="organization_guest_contextual-sign-in">
<!---->        <div class="modal__overlay flex items-center bg-color-background-scrim justify-center fixed bottom-0 left-0 right-0 top-0 opacity-0 invisible pointer-events-none z-[1000] transition-[opacity] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] duration-[0.17s]
            py-4
            ">
          <section aria-modal="true" role="dialog" aria-labelledby="organization_guest_contextual-sign-in-modal-header" tabindex="-1" class="max-h-full modal__wrapper overflow-auto p-0 bg-color-surface max-w-[1128px] min-h-[160px] relative scale-[0.25] shadow-sm shadow-color-border-faint transition-[transform] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] duration-[0.33s] focus:outline-0
              
              w-[1128px] mamabear:w-[744px] babybear:w-[360px]
              
              rounded-md">
              
              <button class="modal__dismiss btn-tertiary h-[40px] w-[40px] p-0 rounded-full indent-0
                  contextual-sign-in-modal__modal-dismiss absolute right-0 m-[20px] cursor-pointer" aria-label="Dismiss" data-tracking-control-name="organization_guest_contextual-sign-in-modal_modal_dismiss">
                <icon class="contextual-sign-in-modal__modal-dismiss-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/gs508lg3t2o81tq7pmcgn6m2"></icon>
              </button>
          
            <div class="modal__main w-full ">
              
            <div class="contextual-sign-in-modal__screen contextual-sign-in-modal__context-screen flex flex-col my-4 mx-3">
                
                
      <img class="inline-block relative
          
          w-16 h-16
           contextual-sign-in-modal__img m-auto" data-delayed-url="https://media.licdn.com/dms/image/D4E0BAQFgplzXUs8o1Q/company-logo_200_200/0/1688178772044/sap_logo?e=2147483647&amp;v=beta&amp;t=Bc3kcgnBxbiLNX_nidI3DP0zVMGcU3M3chbTgx_7_5M" data-ghost-classes="bg-color-entity-ghost-background" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/cs8pjfgyw96g44ln9r7tct85f" alt>
  
              <h2 class="contextual-sign-in-modal__context-screen-title font-sans text-xl text-color-text my-2 mx-4 text-center" id="organization_guest_contextual-sign-in-modal-header">
                Sign in to see who you already know at SAP
              </h2>
<!----><!---->              <div class="contextual-sign-in-modal__btn-container m-auto w-[320px] babybear:w-full">
<!---->                
    
    
    
    

    <div class="sign-in-modal" data-impression-id="organization_guest_contextual-sign-in-modal_sign-in-modal">
        <button class="sign-in-modal__outlet-btn cursor-pointer btn-md btn-primary" data-tracking-control-name="organization_guest_contextual-sign-in-modal_sign-in-modal_outlet-button" data-modal="organization_guest_contextual-sign-in_sign-in-modal">
            Sign in
        </button>

      

    
    <div class>
<!---->
      <div id="organization_guest_contextual-sign-in_sign-in-modal" class="modal modal--sign-in" data-outlet="organization_guest_contextual-sign-in_sign-in-modal">
<!---->        <div class="modal__overlay flex items-center bg-color-background-scrim justify-center fixed bottom-0 left-0 right-0 top-0 opacity-0 invisible pointer-events-none z-[1000] transition-[opacity] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] duration-[0.17s]
            py-4
            ">
          <section aria-modal="true" role="dialog" aria-labelledby="organization_guest_contextual-sign-in_sign-in-modal-modal-header" tabindex="-1" class="max-h-full modal__wrapper overflow-auto p-0 bg-color-surface max-w-[1128px] min-h-[160px] relative scale-[0.25] shadow-sm shadow-color-border-faint transition-[transform] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] duration-[0.33s] focus:outline-0
              
              w-[1128px] mamabear:w-[744px] babybear:w-[360px]
              
              rounded-md">
              
            <button class="modal__dismiss btn-tertiary h-[40px] w-[40px] p-0 rounded-full indent-0 sign-in-modal__dismiss absolute right-0 cursor-pointer m-[20px]" aria-label="Dismiss" data-tracking-control-name="organization_guest_contextual-sign-in-modal_sign-in-modal_dismiss">
              <icon class="sign-in-modal__dismiss-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/gs508lg3t2o81tq7pmcgn6m2"></icon>
            </button>
        
            <div class="modal__main w-full ">
              
          <div class="sign-in-modal__screen flex flex-col py-4 px-3 w-[513px] babybear:w-full">
            <h2 class="sign-in-modal__header font-sans text-display-md text-color-text">
                Welcome back
            </h2>
            
    
    
    
    
    
    
    
    
    
    

    <code id="i18n_sign_in_form_show_text" style="display: none"><!--"Show"--></code>
    <code id="i18n_sign_in_form_show_label" style="display: none"><!--"Show your LinkedIn password"--></code>
    <code id="i18n_sign_in_form_hide_text" style="display: none"><!--"Hide"--></code>
    <code id="i18n_sign_in_form_hide_label" style="display: none"><!--"Hide your LinkedIn password"--></code>

    
    <code id="i18n_username_error_empty" style="display: none"><!--"Please enter an email address or phone number"--></code>
    
    <code id="i18n_username_error_too_long" style="display: none"><!--"Email or phone number must be between 3 to 128 characters"--></code>
    <code id="i18n_username_error_too_short" style="display: none"><!--"Email or phone number must be between 3 to 128 characters"--></code>

    
    <code id="i18n_password_error_empty" style="display: none"><!--"Please enter a password"--></code>
    
    <code id="i18n_password_error_too_short" style="display: none"><!--"The password you provided must have at least 6 characters"--></code>
    
    <code id="i18n_password_error_too_long" style="display: none"><!--"The password you provided must have at most 400 characters"--></code>

    <form data-id="sign-in-form" action="https://www.linkedin.com/uas/login-submit" method="post" novalidate class="mt-1.5 mb-2">
      <input name="loginCsrfParam" value="c0855d59-1e33-478d-84c9-295a494eadc7" type="hidden">

      <div class="flex flex-col">
        
    <div class="mt-1.5" data-js-module-id="guest-input">
      <div class="flex flex-col">
        <label class="input-label mb-1" for="organization_guest_contextual-sign-in_sign-in-modal_session_key">
          Email or phone
        </label>
        <div class="text-input flex">
          <input class="text-color-text font-sans text-md outline-0 bg-color-transparent grow" autocomplete="username" id="organization_guest_contextual-sign-in_sign-in-modal_session_key" name="session_key" required type="text">
          
        </div>
      </div>

      <p class="input-helper mt-1.5" for="organization_guest_contextual-sign-in_sign-in-modal_session_key" role="alert" data-js-module-id="guest-input__message"></p>
    </div>
  

        
    <div class="mt-1.5" data-js-module-id="guest-input">
      <div class="flex flex-col">
        <label class="input-label mb-1" for="organization_guest_contextual-sign-in_sign-in-modal_session_password">
          Password
        </label>
        <div class="text-input flex">
          <input class="text-color-text font-sans text-md outline-0 bg-color-transparent grow" autocomplete="current-password" id="organization_guest_contextual-sign-in_sign-in-modal_session_password" name="session_password" required type="password">
          
            <button aria-live="assertive" data-id="sign-in-form__password-visibility-toggle" class="font-sans text-md font-bold text-color-action z-10 ml-[12px] hover:cursor-pointer" aria-label="Show your LinkedIn password" data-tracking-control-name="organization_guest_contextual-sign-in-modal_sign-in-modal_sign-in-password-visibility-toggle-btn" type="button">Show</button>
          
        </div>
      </div>

      <p class="input-helper mt-1.5" for="organization_guest_contextual-sign-in_sign-in-modal_session_password" role="alert" data-js-module-id="guest-input__message"></p>
    </div>
  

        <input name="session_redirect" value="https://www.linkedin.com/company/sap" type="hidden">

<!---->      </div>

      <div data-id="sign-in-form__footer" class="flex justify-between
          sign-in-form__footer--full-width">
        <a data-id="sign-in-form__forgot-password" class="font-sans text-md font-bold link leading-regular
            sign-in-form__forgot-password--full-width" href="https://www.linkedin.com/uas/request-password-reset?trk=organization_guest_contextual-sign-in-modal_sign-in-modal_forgot_password" data-tracking-control-name="organization_guest_contextual-sign-in-modal_sign-in-modal_forgot_password" data-tracking-will-navigate>Forgot password?</a>

<!---->
        <input name="trk" value="organization_guest_contextual-sign-in-modal_sign-in-modal_sign-in-submit" type="hidden">
        <button class="btn-md btn-primary flex-shrink-0 cursor-pointer
            sign-in-form__submit-btn--full-width" data-id="sign-in-form__submit-btn" data-tracking-control-name="organization_guest_contextual-sign-in-modal_sign-in-modal_sign-in-submit-btn" data-tracking-litms type="submit">
          Sign in
        </button>
      </div>
        <div class="sign-in-form__divider left-right-divider pt-2 pb-3">
          <p class="sign-in-form__divider-text font-sans text-sm text-color-text px-2">
            or
          </p>
        </div>
    </form>
      <div class="w-full max-w-[400px] mx-auto">
        
    <div class="google-auth-button">
        
    
      <code id="isTermsAndConditionsSkipEnabledAuthButton" style="display: none"><!--true--></code>
      <p class="google-auth-button__tc text-color-text-low-emphasis text-xs pb-2" data-impression-id="organization_guest_contextual-sign-in-modal_sign-in-modal_button-skip-tc-text">
        By clicking Continue, you agree to LinkedIn’s <a href="/legal/user-agreement?trk=organization_guest_contextual-sign-in-modal_sign-in-modal_google-auth-button_user-agreement" target="_blank" data-tracking-control-name="organization_guest_contextual-sign-in-modal_sign-in-modal_google-auth-button_user-agreement" data-tracking-will-navigate="true">User Agreement</a>, <a href="/legal/privacy-policy?trk=organization_guest_contextual-sign-in-modal_sign-in-modal_google-auth-button_privacy-policy" target="_blank" data-tracking-control-name="organization_guest_contextual-sign-in-modal_sign-in-modal_google-auth-button_privacy-policy" data-tracking-will-navigate="true">Privacy Policy</a>, and <a href="/legal/cookie-policy?trk=organization_guest_contextual-sign-in-modal_sign-in-modal_google-auth-button_cookie-policy" target="_blank" data-tracking-control-name="organization_guest_contextual-sign-in-modal_sign-in-modal_google-auth-button_cookie-policy" data-tracking-will-navigate="true">Cookie Policy</a>.
      </p>
  
      <div class="google-auth-button__placeholder"></div>
    </div>
  
      </div>
<!---->  
              <p class="sign-in-modal__join-now m-auto font-sans text-md text-color-text
                  mt-2">
                New to LinkedIn? <a href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&trk=organization_guest_contextual-sign-in-modal_sign-in-modal_join-link" data-tracking-control-name="organization_guest_contextual-sign-in-modal_sign-in-modal_join-link" data-tracking-will-navigate="true" class="sign-in-modal__join-link">Join now</a>
              </p>
          </div>
        
            </div>

<!---->          </section>
        </div>
      </div>
    </div>
  
    </div>
  

                <div class="contextual-sign-in-modal__divider left-right-divider">
                  <p class="contextual-sign-in-modal__divider-text font-sans text-sm text-color-text px-2">
                    or
                  </p>
                </div>
                  <div class="w-full max-w-[400px] mx-auto">
                    
    <div class="google-auth-button">
        
    
      <code id="isTermsAndConditionsSkipEnabledAuthButton" style="display: none"><!--true--></code>
      <p class="google-auth-button__tc text-color-text-low-emphasis text-xs pb-2" data-impression-id="organization_guest_button-skip-tc-text">
        By clicking Continue, you agree to LinkedIn’s <a href="/legal/user-agreement?trk=organization_guest_google-auth-button_user-agreement" target="_blank" data-tracking-control-name="organization_guest_google-auth-button_user-agreement" data-tracking-will-navigate="true">User Agreement</a>, <a href="/legal/privacy-policy?trk=organization_guest_google-auth-button_privacy-policy" target="_blank" data-tracking-control-name="organization_guest_google-auth-button_privacy-policy" data-tracking-will-navigate="true">Privacy Policy</a>, and <a href="/legal/cookie-policy?trk=organization_guest_google-auth-button_cookie-policy" target="_blank" data-tracking-control-name="organization_guest_google-auth-button_cookie-policy" data-tracking-will-navigate="true">Cookie Policy</a>.
      </p>
  
      <div class="google-auth-button__placeholder"></div>
    </div>
  
                  </div>
              </div>
                <p class="contextual-sign-in-modal__join-now m-auto font-sans text-md text-color-text">
                  New to LinkedIn? <a href="https://www.linkedin.com/signup?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany%2Fsap&trk=organization_guest_contextual-sign-in-modal_join-link" data-tracking-control-name="organization_guest_contextual-sign-in-modal_join-link" data-tracking-will-navigate="true" class="contextual-sign-in-modal__join-link">Join now</a>
                </p>
            </div>
          
            </div>

<!---->          </section>
        </div>
      </div>
    </div>
  
      </div>
  

      
    
    
    
    
    

        

    

      <div class="cta-modal overflow-hidden container-raised z-10 fixed bottom-3 right-3 min-h-[56px] p-2 babybear:hidden windows-app-upsell windows-app-upsell--msft flex flex-col p-2 w-[359px] !bg-[#F1F8FA] opacity-90 backdrop-blur-[2px] z-1" data-impression-id="organization_guest_windows-app-upsell_cta-modal" role="dialog" aria-labelledby="cta-modal-header" aria-describedby="cta-modal-subheader">
          

          

        
          <div class="windows-app-upsell__linkedin-title-container pt-[6px] mb-1.5 flex align-center">
            <icon class="windows-app-upsell__linkedin-bug-icon block w-[21px] h-[21px]" data-svg-class-name="windows-app-upsell__linkedin-bug-icon-svg w-[21px] h-[21px]" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/dkgve44sisif1wgwp8ozaxu1x"></icon>
            <p class="windows-app-upsell__linkedin-title uppercase text-xs text-color-text-secondary leading-[21px] ml-1">
              LinkedIn
            </p>
          </div>
          <p class="windows-app-upsell__title font-sans text-md text-color-text-accent-4-hover font-semibold leading-regular mb-1">
            LinkedIn is better on the app
          </p>
          <p class="windows-app-upsell__body font-sans text-sm text-color-text-secondary leading-regular">
            Don’t have the app? Get it in the Microsoft Store.
          </p>
          <a class="windows-app-upsell__cta btn-sm btn-secondary-emphasis mt-2 mb-[6px] w-fit" href="ms-windows-store://pdp/?ProductId=9WZDNCRFJ4Q7&amp;mode=mini&amp;cid=guest_desktop_upsell_org2" data-tracking-control-name="organization_guest_windows-app-upsell_cta" data-tracking-will-navigate>
            Open the app
          </a>
        

        <button class="cta-modal__dismiss-btn absolute h-4 w-4 p-1 top-2 right-2 hover:cursor-pointer focus:outline focus:outline-2 focus:outline-color-action" data-tracking-control-name="organization_guest_windows-app-upsell_dismiss" aria-label="Dismiss">
          <icon class="cta-modal__dismiss-icon block h-2 w-2 onload" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/582r9vsvwmiwa75ujfqps3ivc"></icon>
        </button>
      </div>
  
  
  
        
      <code id="flagshipOrganizationTracking" style="display: none"><!--{"organization":{"objectUrn":"urn:li:organization:1115"},"module":"COMPANY_OVERVIEW_PAGE","viewerUrn":0,"isPaidOrganization":true}--></code>
  
      

<!---->
            <script src="https://static.licdn.com/aero-v1/sc/h/b19orns4yhthzphzlegb2ykzv" async></script>
<!---->          
        <script src="https://static.licdn.com/aero-v1/sc/h/9dsooiofugxje2tgnk1660ni6" async defer></script>
        <script data-delayed-url="https://static.licdn.com/aero-v1/sc/h/x653ibish526iwzldlzoj0nr" data-module-id="media-player"></script>
      
      </body>
    </html>
  
  