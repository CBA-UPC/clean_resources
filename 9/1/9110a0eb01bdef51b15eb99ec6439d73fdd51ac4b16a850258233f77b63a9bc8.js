!function(){function h(b){var e=[];if(p.some(function(a){if(a.Tag===b)return e=a.CategoryId,!0;var c,d,f,q=(c=a.Tag,d=-1!==c.indexOf("http:")?c.replace("http:",""):c.replace("https:",""),-1!==(f=d.indexOf("?"))?d.replace(d.substring(f),""):d);return!b||-1===b.indexOf(q)&&-1===a.Tag.indexOf(b)?void 0:(e=a.CategoryId,!0)}),!e.length&&r){var a=function(a){var c=document.createElement("a");c.href=a;a=c.hostname.split(".");return-1!==a.indexOf("www")||2<a.length?a.slice(1).join("."):c.hostname}(b);t.some(function(b){return b===
a})&&(e=["C0004"])}return e}function g(b){return b&&window.OptanonActiveGroups&&b.every(function(b){return-1!==window.OptanonActiveGroups.indexOf(b)})}function k(b){return-1!==(b.getAttribute("class")||"").indexOf("optanon-category")}function l(b){return u&&b.hasAttribute("data-ot-ignore")}var p=JSON.parse('[{"Host":"js.driftt.com","Tag":"https://js.driftt.com/include/1591273200000/8df477mikhtc.js","CategoryId":["C0004"]},{"Host":"youvisit.com","Tag":"https://www.googletagmanager.com/gtm.js","CategoryId":["C0002","C0004"]},{"Host":"youvisit.com","Tag":"https://connect.facebook.net/signals/config/1600456656906870","CategoryId":["C0004"]},{"Host":"youvisit.com","Tag":"https://munchkin.marketo.net/munchkin.js","CategoryId":["C0002"]},{"Host":"youvisit.com","Tag":"https://script.hotjar.com/modules.86894929204a09eb4a2e.js","CategoryId":["C0002"]},{"Host":"youvisit.com","Tag":"https://www.google-analytics.com/analytics.js","CategoryId":["C0002","C0004"]},{"Host":"com","Tag":"https://js.driftt.com/include/1591272900000/8df477mikhtc.js","CategoryId":["C0002"]},{"Host":"twitter.com","Tag":"https://analytics.twitter.com/i/adsct","CategoryId":["C0004"]},{"Host":"bing.com","Tag":"https://bat.bing.com/action/0","CategoryId":["C0004"]},{"Host":"script.hotjar.com","Tag":"https://script.hotjar.com/modules.86894929204a09eb4a2e.js","CategoryId":["C0004"]},{"Host":"bing.com","Tag":"https://bat.bing.com/bat.js","CategoryId":["C0004"]},{"Host":"js.driftt.com","Tag":"https://js.driftt.com/include/1591272900000/8df477mikhtc.js","CategoryId":["C0004"]},{"Host":"app-sj25.marketo.com","Tag":"https://app-sj25.marketo.com/index.php/form/getForm","CategoryId":["C0002"]},{"Host":"js.driftt.com","Tag":"https://js.driftt.com/include/1591273500000/8df477mikhtc.js","CategoryId":["C0004"]},{"Host":"facebook.com","Tag":"https://www.facebook.com/tr/","CategoryId":["C0004"]},{"Host":"app-ab29.marketo.com","Tag":"https://app-ab29.marketo.com/index.php/form/getForm","CategoryId":["C0002"]},{"Host":"ads.linkedin.com","Tag":"https://px.ads.linkedin.com/collect","CategoryId":["C0004"]},{"Host":"youvisit.com","Tag":"https://cdn.bizible.com/scripts/bizible.js","CategoryId":["C0002","C0004"]},{"Host":"youvisit.com","Tag":"https://bat.bing.com/bat.js","CategoryId":["C0004"]},{"Host":"acct.bizible.com","Tag":"https://cdn.bizible.com/BizibleAcct.js","CategoryId":["C0002"]},{"Host":"nr-data.net","Tag":"https://bam.nr-data.net/1/2177bc5f79","CategoryId":["C0002"]},{"Host":"com","Tag":"https://connect.facebook.net/signals/config/1600456656906870","CategoryId":["C0004"]},{"Host":"www.facebook.com","Tag":"https://www.facebook.com/tr/","CategoryId":["C0004"]},{"Host":"youvisit.com","Tag":"https://www.youvisit.com/login/static/js/main.d58d310c.js","CategoryId":["C0002"]},{"Host":"com","Tag":"https://js.driftt.com/include/1591273200000/8df477mikhtc.js","CategoryId":["C0002"]},{"Host":"connect.facebook.net","Tag":"https://connect.facebook.net/en_US/all.js","CategoryId":["C0003"]},{"Host":"bizible.com","Tag":"https://cdn.bizible.com/m/ipv","CategoryId":["C0002"]},{"Host":"youvisit.com","Tag":"https://cdn.bizible.com/BizibleAcct.js","CategoryId":["C0002"]},{"Host":"linkedin.com","Tag":"https://www.linkedin.com/px/li_sync","CategoryId":["C0004"]},{"Host":"app-sj25.marketo.com","Tag":"https://app-sj25.marketo.com/js/forms2/js/forms2.min.js","CategoryId":["C0002"]},{"Host":"doubleclick.net","Tag":"https://googleads.g.doubleclick.net/pagead/viewthroughconversion/776697744/","CategoryId":["C0004"]},{"Host":"app-ab29.marketo.com","Tag":"https://app-ab29.marketo.com/js/forms2/js/forms2.min.js","CategoryId":["C0002"]},{"Host":"www.linkedin.com","Tag":"https://www.linkedin.com/px/li_sync","CategoryId":["C0004"]},{"Host":"linkedin.com","Tag":"https://px.ads.linkedin.com/collect","CategoryId":["C0004"]},{"Host":"com","Tag":"https://js.driftt.com/include/1591273500000/8df477mikhtc.js","CategoryId":["C0002"]}]'),
r=JSON.parse("true"),u=JSON.parse("false"),t="addthis.com addtoany.com adsrvr.org amazon-adsystem.com bing.com bounceexchange.com bouncex.net criteo.com criteo.net dailymotion.com doubleclick.net everesttech.net facebook.com facebook.net googleadservices.com googlesyndication.com krxd.net liadm.com linkedin.com outbrain.com rubiconproject.com sharethis.com taboola.com twitter.com vimeo.com yahoo.com youtube.com".split(" "),m=["embed","iframe","img","script"];(new MutationObserver(function(b){Array.prototype.forEach.call(b,
function(b){Array.prototype.forEach.call(b.addedNodes,function(a){var b,c;if(1===a.nodeType&&-1!==m.indexOf(a.tagName.toLowerCase())&&!k(a)&&!l(a))if("script"===a.tagName.toLowerCase()){if((c=h(b=a.src||"")).length){var d=c.join("-"),e=a.getAttribute("class")?a.getAttribute("class"):"";a.setAttribute("class","optanon-category-"+d+" "+e);g(c)||(a.type="text/plain");var f=function(b){"text/plain"===a.getAttribute("type")&&b.preventDefault();a.removeEventListener("beforescriptexecute",f)};a.addEventListener("beforescriptexecute",
f)}}else(c=h(b=a.src||"")).length&&(d=c.join("-"),e=a.getAttribute("class")?a.getAttribute("class"):"",a.setAttribute("class","optanon-category-"+d+" "+e),g(c)||(a.removeAttribute("src"),a.setAttribute("data-src",b)))});var a=b.target;if(b.attributeName&&(!k(a)||!l(a)))if("script"===a.nodeName.toLowerCase()){if((e=h(d=a.src||"")).length){b=e.join("-");var f=a.getAttribute("class")?a.getAttribute("class"):"";a.setAttribute("class","optanon-category-"+b+" "+f+" ");g(e)||(a.type="text/plain");var c=
function(b){"text/plain"===a.getAttribute("type")&&b.preventDefault();a.removeEventListener("beforescriptexecute",c)};a.addEventListener("beforescriptexecute",c)}}else if(-1!==m.indexOf(b.target.nodeName.toLowerCase())){var d,e;(e=h(d=a.src||"")).length&&(b=e.join("-"),f=a.getAttribute("class")?a.getAttribute("class"):"",a.setAttribute("class","optanon-category-"+b+" "+f),g(e)||(a.removeAttribute("src"),a.setAttribute("data-src",d)))}})})).observe(document.documentElement,{childList:!0,subtree:!0,
attributes:!0,attributeFilter:["src"]});var n=document.createElement;document.createElement=function(){for(var b=[],e=0;e<arguments.length;e++)b[e]=arguments[e];if("script"!==b[0].toLowerCase()&&-1===m.indexOf(b[0].toLowerCase()))return n.bind(document).apply(void 0,b);var a=n.bind(document).apply(void 0,b),f=a.setAttribute.bind(a);return Object.defineProperties(a,{src:{get:function(){return a.getAttribute("src")||""},set:function(c){var d="";"string"==typeof c?d=c:c instanceof Object&&(d=c.toString());
d=h(d);return!d.length||"script"!==b[0].toLowerCase()||k(a)||g(d)||l(a)?!d.length||-1===m.indexOf(b[0].toLowerCase())||k(a)||g(d)||l(a)?f("src",c):(a.removeAttribute("src"),f("data-src",c)):(f("type","text/plain"),f("src",c)),!0}},type:{set:function(b){var c=h(a.src||"");b=!c.length||k(a)||g(c)||l(a)?b:"text/plain";return f("type",b),!0}}}),a.setAttribute=function(b,d,e){"type"!==b&&"src"!==b||e?f(b,d):a[b]=d},a}}();le single-person postid-28267 wp-embed-responsive page-layout_inner page-layout_no-sidebar">

        <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P2FG28R"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    
    <div class="page-container">

      <div role="banner">

        <div class="banner-notifications">

          <a class="skip-to-main" href="#main-content">Skip to main content</a>

          <!--[if lt IE 9]>
            <p class="browse-happy">You are using an <strong>outdated</strong> browser. Please upgrade your browser to improve your experience.</p>
          <![endif]-->

          <div class="rave-alert-container"></div>
          <div class="site-alert-container"></div>

        </div>

        
  
        
  
<!-- begin TITLE section -->

<div class="minimal-title page-title-section type-">
  <div class="center force">

    <div class="page-title-container column force">
      <a class="logo-tab column" href="/" title="Home">
  <img class="white svg" src="https://www.jhu.edu/assets/themes/machado/assets/images/logos/university-logo-small-horizontal-white-156eae9527.svg" alt="Johns Hopkins University" />
  <img class="white svg-fallback" src="https://www.jhu.edu/assets/themes/machado/assets/images/logos/university-logo-small-horizontal-white-43ab279882.png" alt="Johns Hopkins University" />
  <img class="black svg" src="https://www.jhu.edu/assets/themes/machado/assets/images/logos/university-logo-small-horizontal-black-d9c8784b08.svg" alt="Johns Hopkins University" />
  <img class="black svg-fallback" src="https://www.jhu.edu/assets/themes/machado/assets/images/logos/university-logo-small-horizontal-black-82ccd23e07.png" alt="Johns Hopkins University" />
</a>      <h1 class="page-title column">
  
  <span style="white-space: nowrap;">
  Liz</span> <span style="white-space: nowrap;">Mengel
  </span>

</h1>
    </div>

  </div>
</div>
<!-- end TITLE section -->


      </div>

              
<div class="main-nav nav section force" id="bbMainNav" role="navigation">

  <div class="center force">
    <!-- <div class="menu-document" role="document"> -->

      <p id="aria-description-menu" class="hide">You are in a modal window. Press the escape key to exit.</p>

            <a href="#menu" title="Open Menu" class="hamburger" role="button">
        <i class="fa fa-fw fa-bars" aria-hidden="true"></i>
        <span class="visuallyhidden">Open Menu</span>
      </a>

      <!-- <div class="french-fries"> -->

        <ul class="tablist french-fries" role="tablist">
          <li class="tab" role="presentation">
            <a href="#menu" id="tab-menu" aria-controls="tabpanel-menu" role="tab"><i class="fa fa-fw fa-bars" aria-hidden="true"></i>Menu</a>
          </li>
          <li class="tab" role="presentation">
            <a href="#search" id="tab-search" aria-controls="tabpanel-search" role="tab"><i class="fa fa-fw fa-search" aria-hidden="true"></i>Search</a>
          </li>
          <li class="tab" role="presentation">
            <a href="https://hub.jhu.edu" id="tab-news-events" aria-controls="tabpanel-news-events" role="tab"><i class="fa fa-fw fa-calendar" aria-hidden="true"></i>News &amp; Events</a>
          </li>
        </ul>

        <ul class="tier-1 force actions french-fries"><li id="menu-item-18910" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18910"><a href="https://www.jhu.edu/admissions/" data-action="Click" data-category="Calls to Action" data-label="Apply">Apply</a></li>
<li id="menu-item-20004" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20004"><a href="https://www.jhu.edu/admissions/visit/" data-action="Click" data-category="Calls to Action" data-label="Visit">Visit</a></li>
<li id="menu-item-29732" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-29732"><a href="https://e-catalogue.jhu.edu/programs/" data-action="Click" data-category="Calls to Action" data-label="See programs">See programs</a></li>
</ul>

        <div class="tabpanel-set force">

                    
          <div id="tabpanel-search" class="panel-search tabpanel column" aria-labelledby="tab-search" aria-hidden="true" role="tabpanel">
            <button class="close-box-x close" aria-label="Close tab panel widget dialog"><i class="fa fa-fw fa-times" aria-hidden="true"></i></button>
            
  
        
      

  
  
        
  
  
  <div class="jhu-block search-box force">

    <form method="GET" action="/search/" class="column force" >

      <div class="form_fields force">

                              <input type="hidden" name="c" value="site_search" />
                  
        
        <label for="search-google-2008664931" class="visuallyhidden">Search jhu.edu</label>
        <input aria-label="Search jhu.edu" id="search-google-2008664931" class="column" type="text" name="q" value="" autocomplete="off">

        <button aria-label="Search" type="submit" class="button column">
          <i class="fa fa-fw fa-search" aria-hidden="true"></i>
          <span class="visuallyhidden">Search jhu.edu</span><span class="text">search</span>
        </button>

        

        </div>

    </form>

  </div>


            <div class="ga-search-suggestions">
              <h4>Common Searches</h4>
              

<ul class="ga-suggestion-set">

  
        <li>
  
    
    
              
    <a href="https://www.jhu.edu/about/history/"
         target="_self"
         class="gtm-link-click"

        
        
                  data-action="Click"
          data-category="Main Menu"
          data-label="Why is it called Johns Hopkins?"
        
      >Why is it called Johns Hopkins?</a>
  
</li>

  
        <li>
  
    
    
              
    <a href="https://www.jhu.edu/academics/#!/bachelors"
         target="_self"
         class="gtm-link-click"

        
        
                  data-action="Click"
          data-category="Main Menu"
          data-label="What majors and minors are offered?"
        
      >What majors and minors are offered?</a>
  
</li>

  
        <li>
  
    
    
              
    <a href="https://www.jhu.edu/academics/graduate-studies/"
         target="_self"
         class="gtm-link-click"

        
        
                  data-action="Click"
          data-category="Main Menu"
          data-label="Where can I find information about graduate programs?"
        
      >Where can I find information about graduate programs?</a>
  
</li>

  
        <li>
  
    
    
              
    <a href="https://www.jhu.edu/admissions/tuition/"
         target="_self"
         class="gtm-link-click"

        
        
                  data-action="Click"
          data-category="Main Menu"
          data-label="How much is tuition?"
        
      >How much is tuition?</a>
  
</li>

  
        <li>
  
    
    
              
    <a href="https://www.jhu.edu/admissions/financial-aid/"
         target="_self"
         class="gtm-link-click"

        
        
                  data-action="Click"
          data-category="Main Menu"
          data-label="What financial aid packages are available?"
        
      >What financial aid packages are available?</a>
  
</li>

  
        <li>
  
    
    
              
    <a href="https://www.jhu.edu/admissions/"
         target="_self"
         class="gtm-link-click"

        
        
                  data-action="Click"
          data-category="Main Menu"
          data-label="How do I apply?"
        
      >How do I apply?</a>
  
</li>

  
        <li>
  
    
    
              
    <a href="https://www.jhu.edu/maps-directions/"
         target="_self"
         class="gtm-link-click"

        
        
                  data-action="Click"
          data-category="Main Menu"
          data-label="How do I get to campus?"
        
      >How do I get to campus?</a>
  
</li>

  
        <li>
  
    
    
              
    <a href="https://hrnt.jhu.edu/jhujobs/"
         target="_self"
         class="gtm-link-click"

        
        
                  data-action="Click"
          data-category="Main Menu"
          data-label="Where can I find job listings?"
        
      >Where can I find job listings?</a>
  
</li>

  
        <li>
  
    
    
              
    <a href="https://my.jh.edu/portal/group/myjhu"
         target="_self"
         class="gtm-link-click"

        
        
                  data-action="Click"
          data-category="Main Menu"
          data-label="Where can I log in to myJHU?"
        
      >Where can I log in to myJHU?</a>
  
</li>

  
        <li>
  
    
    
              
    <a href="https://sis.jhu.edu/sswf/"
         target="_self"
         class="gtm-link-click"

        
        
                  data-action="Click"
          data-category="Main Menu"
          data-label="Where can I log in to SIS?"
        
      >Where can I log in to SIS?</a>
  
</li>

  
</ul>
            </div>
            <button class="close-button close x-small" aria-label="Close tab panel widget dialog">Close menu</button>
          </div>

          <div class="panel-actions tabpanel column">
                        <ul class="tier-1 force actions"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18910"><a href="https://www.jhu.edu/admissions/" data-action="Click" data-category="Calls to Action" data-label="Apply">Apply</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20004"><a href="https://www.jhu.edu/admissions/visit/" data-action="Click" data-category="Calls to Action" data-label="Visit">Visit</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-29732"><a href="https://e-catalogue.jhu.edu/programs/" data-action="Click" data-category="Calls to Action" data-label="See programs">See programs</a></li>
</ul>
          </div>

          <div id="tabpanel-menu" class="panel-menu tabpanel column" aria-labelledby="tab-menu"  aria-hidden="true" role="tabpanel">
            <button class="close-box-x close" aria-label="Close tab panel widget dialog"><i class="fa fa-fw fa-times" aria-hidden="true"></i></button>
            <ul class="tier-1 force site-tree"><li id="menu-item-18108" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-18108"><a href="https://www.jhu.edu/about/" data-action="Click" data-category="Main Menu" data-label="About Us">About Us</a><button class="toggle-section"><i class="fa fa-plus-square-o" aria-hidden="true"></i><span class="visuallyhidden">Open About Us</span></button>
<ul class="sub-menu tier-2 force">
	<li id="menu-item-18109" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18109"><a href="https://www.jhu.edu/about/university-leadership/" data-action="Click" data-category="Main Menu" data-label="University Leadership">University Leadership</a></li>
	<li id="menu-item-18112" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18112"><a href="https://www.jhu.edu/about/history/" data-action="Click" data-category="Main Menu" data-label="History &#038; Mission">History &#038; Mission</a></li>
	<li id="menu-item-206853" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-206853"><a href="https://www.jhu.edu/about/diversity-inclusion/" data-action="Click" data-category="Main Menu" data-label="Diversity &#038; Inclusion">Diversity &#038; Inclusion</a></li>
	<li id="menu-item-18114" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18114"><a href="https://www.jhu.edu/about/notable-alumni/" data-action="Click" data-category="Main Menu" data-label="Notable Alumni">Notable Alumni</a></li>
	<li id="menu-item-18116" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18116"><a href="https://www.jhu.edu/about/community/" data-action="Click" data-category="Main Menu" data-label="Hopkins in the Community">Hopkins in the Community</a></li>
	<li id="menu-item-18115" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18115"><a href="https://www.jhu.edu/about/international/" data-action="Click" data-category="Main Menu" data-label="Hopkins Around the World">Hopkins Around the World</a></li>
	<li id="menu-item-18117" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18117"><a href="http://hub.jhu.edu" data-action="Click" data-category="Main Menu" data-label="News from Johns Hopkins">News from Johns Hopkins</a></li>
</ul>
</li>
<li id="menu-item-18141" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-18141"><a href="https://www.jhu.edu/academics/" data-action="Click" data-category="Main Menu" data-label="Academics">Academics</a><button class="toggle-section"><i class="fa fa-plus-square-o" aria-hidden="true"></i><span class="visuallyhidden">Open Academics</span></button>
<ul class="sub-menu tier-2 force">
	<li id="menu-item-18145" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18145"><a href="https://www.jhu.edu/academics/undergraduate-studies/" data-action="Click" data-category="Main Menu" data-label="Undergraduate Studies">Undergraduate Studies</a></li>
	<li id="menu-item-18143" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18143"><a href="https://www.jhu.edu/academics/graduate-studies/" data-action="Click" data-category="Main Menu" data-label="Graduate Studies">Graduate Studies</a></li>
	<li id="menu-item-18148" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18148"><a href="https://www.jhu.edu/academics/online/" data-action="Click" data-category="Main Menu" data-label="Online Studies">Online Studies</a></li>
	<li id="menu-item-18149" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18149"><a href="https://www.jhu.edu/academics/part-time-programs/" data-action="Click" data-category="Main Menu" data-label="Part-Time &amp; Non-Degree Programs">Part-Time &amp; Non-Degree Programs</a></li>
	<li id="menu-item-18150" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18150"><a href="https://www.jhu.edu/academics/summer-programs/" data-action="Click" data-category="Main Menu" data-label="Summer Programs">Summer Programs</a></li>
	<li id="menu-item-18142" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18142"><a href="https://www.jhu.edu/academics/calendars/" data-action="Click" data-category="Main Menu" data-label="Academic Calendars">Academic Calendars</a></li>
</ul>
</li>
<li id="menu-item-18151" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-18151"><a href="https://www.jhu.edu/schools/" data-action="Click" data-category="Main Menu" data-label="Schools &#038; Divisions">Schools &#038; Divisions</a><button class="toggle-section"><i class="fa fa-plus-square-o" aria-hidden="true"></i><span class="visuallyhidden">Open Schools &#038; Divisions</span></button>
<ul class="sub-menu tier-2 force">
	<li id="menu-item-18152" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18152"><a href="https://sais.jhu.edu/" data-action="Click" data-category="Main Menu" data-label="Advanced International Studies">Advanced International Studies</a></li>
	<li id="menu-item-18153" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18153"><a href="http://www.jhuapl.edu" data-action="Click" data-category="Main Menu" data-label="Applied Physics Laboratory">Applied Physics Laboratory</a></li>
	<li id="menu-item-18154" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18154"><a href="http://krieger.jhu.edu" data-action="Click" data-category="Main Menu" data-label="Arts &#038; Sciences">Arts &#038; Sciences</a></li>
	<li id="menu-item-18155" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18155"><a href="http://carey.jhu.edu" data-action="Click" data-category="Main Menu" data-label="Business">Business</a></li>
	<li id="menu-item-18156" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18156"><a href="http://education.jhu.edu" data-action="Click" data-category="Main Menu" data-label="Education">Education</a></li>
	<li id="menu-item-18157" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18157"><a href="http://engineering.jhu.edu" data-action="Click" data-category="Main Menu" data-label="Engineering">Engineering</a></li>
	<li id="menu-item-18158" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18158"><a href="https://www.hopkinsmedicine.org/som/" data-action="Click" data-category="Main Menu" data-label="Medicine">Medicine</a></li>
	<li id="menu-item-18159" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18159"><a href="http://nursing.jhu.edu" data-action="Click" data-category="Main Menu" data-label="Nursing">Nursing</a></li>
	<li id="menu-item-18160" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18160"><a href="http://www.peabody.jhu.edu" data-action="Click" data-category="Main Menu" data-label="Peabody Conservatory">Peabody Conservatory</a></li>
	<li id="menu-item-18161" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18161"><a href="http://www.jhsph.edu" data-action="Click" data-category="Main Menu" data-label="Public Health">Public Health</a></li>
</ul>
</li>
<li id="menu-item-18118" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-18118"><a href="https://www.jhu.edu/admissions/" data-action="Click" data-category="Main Menu" data-label="Admissions &amp; Aid">Admissions &amp; Aid</a><button class="toggle-section"><i class="fa fa-plus-square-o" aria-hidden="true"></i><span class="visuallyhidden">Open Admissions &amp; Aid</span></button>
<ul class="sub-menu tier-2 force">
	<li id="menu-item-28305" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-28305"><a href="https://apply.jhu.edu/" data-action="Click" data-category="Main Menu" data-label="Undergraduate Admissions">Undergraduate Admissions</a></li>
	<li id="menu-item-18901" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18901"><a href="https://www.jhu.edu/admissions/graduate-admissions/" data-action="Click" data-category="Main Menu" data-label="Graduate Admissions">Graduate Admissions</a></li>
	<li id="menu-item-18132" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18132"><a href="https://www.jhu.edu/admissions/visit/" data-action="Click" data-category="Main Menu" data-label="Plan a Visit">Plan a Visit</a></li>
	<li id="menu-item-18129" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18129"><a href="https://www.jhu.edu/admissions/tuition/" data-action="Click" data-category="Main Menu" data-label="Tuition &amp; Costs">Tuition &amp; Costs</a></li>
	<li id="menu-item-18125" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18125"><a href="https://www.jhu.edu/admissions/financial-aid/" data-action="Click" data-category="Main Menu" data-label="Financial Aid">Financial Aid</a></li>
</ul>
</li>
<li id="menu-item-18162" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-18162"><a href="https://www.jhu.edu/research/" data-action="Click" data-category="Main Menu" data-label="Research &#038; Faculty">Research &#038; Faculty</a><button class="toggle-section"><i class="fa fa-plus-square-o" aria-hidden="true"></i><span class="visuallyhidden">Open Research &#038; Faculty</span></button>
<ul class="sub-menu tier-2 force">
	<li id="menu-item-18164" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18164"><a href="https://www.jhu.edu/research/innovation/" data-action="Click" data-category="Main Menu" data-label="Innovation &#038; Incubation">Innovation &#038; Incubation</a></li>
	<li id="menu-item-25756" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-25756"><a href="https://www.jhu.edu/research/bloomberg-professors/" data-action="Click" data-category="Main Menu" data-label="Bloomberg Distinguished Professors">Bloomberg Distinguished Professors</a></li>
	<li id="menu-item-18165" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18165"><a href="https://www.jhu.edu/research/milestones/" data-action="Click" data-category="Main Menu" data-label="Milestones">Milestones</a></li>
	<li id="menu-item-18163" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18163"><a href="https://www.jhu.edu/research/undergraduate-research/" data-action="Click" data-category="Main Menu" data-label="Undergraduate Research">Undergraduate Research</a></li>
	<li id="menu-item-18177" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18177"><a href="https://www.jhu.edu/research/libraries/" data-action="Click" data-category="Main Menu" data-label="Libraries">Libraries</a></li>
</ul>
</li>
<li id="menu-item-18168" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-18168"><a href="https://www.jhu.edu/life/" data-action="Click" data-category="Main Menu" data-label="Campus Life">Campus Life</a><button class="toggle-section"><i class="fa fa-plus-square-o" aria-hidden="true"></i><span class="visuallyhidden">Open Campus Life</span></button>
<ul class="sub-menu tier-2 force">
	<li id="menu-item-18908" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18908"><a href="https://www.jhu.edu/life/campuses/" data-action="Click" data-category="Main Menu" data-label="Our Campuses">Our Campuses</a></li>
	<li id="menu-item-18180" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18180"><a href="https://www.jhu.edu/life/about-baltimore/" data-action="Click" data-category="Main Menu" data-label="About Baltimore">About Baltimore</a></li>
	<li id="menu-item-20656" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20656"><a href="https://www.jhu.edu/life/housing-dining/" data-action="Click" data-category="Main Menu" data-label="Housing &#038; Dining">Housing &#038; Dining</a></li>
	<li id="menu-item-18909" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18909"><a href="https://www.jhu.edu/life/arts-culture/" data-action="Click" data-category="Main Menu" data-label="Arts &amp; Culture">Arts &amp; Culture</a></li>
	<li id="menu-item-18172" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18172"><a href="https://www.jhu.edu/life/health-wellness/" data-action="Click" data-category="Main Menu" data-label="Health &amp; Wellness">Health &amp; Wellness</a></li>
	<li id="menu-item-20689" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20689"><a href="https://www.jhu.edu/life/athletics/" data-action="Click" data-category="Main Menu" data-label="Athletics">Athletics</a></li>
	<li id="menu-item-18178" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18178"><a href="https://www.jhu.edu/life/security/" data-action="Click" data-category="Main Menu" data-label="Security">Security</a></li>
	<li id="menu-item-18179" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18179"><a href="https://www.jhu.edu/life/disability-services/" data-action="Click" data-category="Main Menu" data-label="Disability Services">Disability Services</a></li>
	<li id="menu-item-18181" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18181"><a href="http://hub.jhu.edu/events" data-action="Click" data-category="Main Menu" data-label="Calendar of Events">Calendar of Events</a></li>
</ul>
</li>
</ul>
            <ul class="tier-1 force utility-links"><li id="menu-item-14922" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14922"><a href="https://www.jhu.edu/maps-directions/" data-action="Click" data-category="Main Menu" data-label="Maps &amp; Directions">Maps &amp; Directions</a></li>
<li id="menu-item-15740" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15740"><a href="https://www.jhu.edu/contact/" data-action="Click" data-category="Main Menu" data-label="Contact the University">Contact the University</a></li>
<li id="menu-item-14924" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-14924"><a href="https://jobs.jhu.edu/" data-action="Click" data-category="Main Menu" data-label="Employment Opportunities">Employment Opportunities</a></li>
<li id="menu-item-14925" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-14925"><a href="https://my.jh.edu/" data-action="Click" data-category="Main Menu" data-label="my.jh.edu">my.jh.edu</a></li>
<li id="menu-item-17176" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17176"><a href="https://giving.jhu.edu/" data-action="Click" data-category="Main Menu" data-label="Give to the University">Give to the University</a></li>
<li id="menu-item-17177" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17177"><a href="https://alumni.jhu.edu/" data-action="Click" data-category="Main Menu" data-label="For Alumni">For Alumni</a></li>
<li id="menu-item-17178" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17178"><a href="https://studentaffairs.jhu.edu/parents-families/" data-action="Click" data-category="Main Menu" data-label="For Parents">For Parents</a></li>
<li id="menu-item-17179" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17179"><a href="https://hub.jhu.edu/media/" data-action="Click" data-category="Main Menu" data-label="For News Media">For News Media</a></li>
<li id="menu-item-26134" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-26134"><a href="https://www.jhu.edu/life/athletics/" data-action="Click" data-category="Main Menu" data-label="Athletics">Athletics</a></li>
</ul>
            <button class="close-button close x-small" aria-label="Close tab panel widget dialog">Close menu</button>
          </div>

          <div id="tabpanel-news-events" class="panel-newsevents tabpanel column" aria-labelledby="tab-news-events"  aria-hidden="true" role="tabpanel">
            <button class="close-box-x close" aria-label="Close tab panel widget dialog"><i class="fa fa-fw fa-times" aria-hidden="true"></i></button>
            <div class="newsevents-container"></div>
                        <button class="close-button close x-small" aria-label="Close tab panel widget dialog">Close menu</button>
            


<ul class="social-links" aria-label="Johns Hopkins University on Social Media">
  <li>
  
      
  
    
              
              
    <a href="http://www.twitter.com/JohnsHopkins"
         target="_self"
         class="twitter fa-stack gtm-link-click"

                  title="Twitter"
        
        
                  data-action="Click"
          data-category="Main Menu"
          data-label="Twitter"
        
      ><span class="visuallyhidden">Twitter</span><i class="fa fa-stack-1x fa-square" aria-hidden="true"></i><i class="fa fa-stack-1x fa-twitter-square" aria-hidden="true"></i></a>
  


</li>
  <li>
  
      
  
    
              
              
    <a href="http://www.facebook.com/johnshopkinsuniversity"
         target="_self"
         class="facebook fa-stack gtm-link-click"

                  title="Facebook"
        
        
                  data-action="Click"
          data-category="Main Menu"
          data-label="Facebook"
        
      ><span class="visuallyhidden">Facebook</span><i class="fa fa-stack-1x fa-square" aria-hidden="true"></i><i class="fa fa-stack-1x fa-facebook-square" aria-hidden="true"></i></a>
  


</li>
  <li>
  
      
  
    
              
              
    <a href="https://www.linkedin.com/edu/the-johns-hopkins-university-18560"
         target="_self"
         class="linkedin fa-stack gtm-link-click"

                  title="LinkedIn"
        
        
                  data-action="Click"
          data-category="Main Menu"
          data-label="LinkedIn"
        
      ><span class="visuallyhidden">LinkedIn</span><i class="fa fa-stack-1x fa-square" aria-hidden="true"></i><i class="fa fa-stack-1x fa-linkedin-square" aria-hidden="true"></i></a>
  


</li>
  <li>
  
      
  
    
              
              
    <a href="http://www.youtube.com/johnshopkins"
         target="_self"
         class="youtube fa-stack gtm-link-click"

                  title="Youtube"
        
        
                  data-action="Click"
          data-category="Main Menu"
          data-label="Youtube"
        
      ><span class="visuallyhidden">Youtube</span><i class="fa fa-stack-1x fa-square" aria-hidden="true"></i><i class="fa fa-stack-1x fa-youtube-square" aria-hidden="true"></i></a>
  


</li>
  <li>
  
      
  
    
              
              
    <a href="http://instagram.com/johnshopkinsu"
         target="_self"
         class="instagram fa-stack gtm-link-click"

                  title="Instagram"
        
        
                  data-action="Click"
          data-category="Main Menu"
          data-label="Instagram"
        
      ><span class="visuallyhidden">Instagram</span><i class="fa fa-stack-1x fa-square" aria-hidden="true"></i><i class="fa fa-stack-1x fa-instagram" aria-hidden="true"></i></a>
  


</li>
      <li>
  
      
  
    
              
              
    <a href="https://hub.jhu.edu"
         target="_self"
         class="hub fa-stack gtm-link-click"

                  title="Hub"
        
        
                  data-action="Click"
          data-category="Main Menu"
          data-label="Hub"
        
      ><span class="visuallyhidden">Hub</span><i class="fa fa-stack-1x fa-square" aria-hidden="true"></i><i class="fa fa-stack-1x fa-gear" aria-hidden="true"></i></a>
  


</li>
  </ul>
          </div>

        </div>

      <!-- </div> -->

    </div>

  <!-- </div> -->

</div>
      
       <div class="big-story-container" role="complementary" aria-label="News alert"></div>

      
  <div class="main-content section">

    
    <div class="center force">

      
      <div class="primary-column column force">

                <div class="section-nav nav column" role="complementary" aria-label="Section Menu">
          <ul class="tier-1 force closed"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-18108"><a href="https://www.jhu.edu/about/">About Us</a>
<ul class="sub-menu tier-2 force">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-18109"><a href="https://www.jhu.edu/about/university-leadership/">University Leadership</a>
	<ul class="sub-menu tier-3 force">
		<li id="menu-item-18110" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18110"><a title="President&#8217;s Office" href="http://president.jhu.edu/">Office of the President</a></li>
		<li id="menu-item-18111" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18111"><a title="Provost&#8217;s Office" href="https://provost.jhu.edu/">Office of the Provost</a></li>
	</ul>
</li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-18112"><a href="https://www.jhu.edu/about/history/">History &#038; Mission</a>
	<ul class="sub-menu tier-3 force">
		<li id="menu-item-18113" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18113"><a href="https://www.jhu.edu/about/history/gilman-address/">Gilman&#8217;s Inaugural Address</a></li>
	</ul>
</li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-206853"><a href="https://www.jhu.edu/about/diversity-inclusion/">Diversity &#038; Inclusion</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18114"><a href="https://www.jhu.edu/about/notable-alumni/">Notable Alumni</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18116"><a href="https://www.jhu.edu/about/community/">Hopkins in the Community</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18115"><a href="https://www.jhu.edu/about/international/">Hopkins Around the World</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18117"><a href="http://hub.jhu.edu">News from Johns Hopkins</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-18141"><a href="https://www.jhu.edu/academics/">Academics</a>
<ul class="sub-menu tier-2 force">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-18145"><a href="https://www.jhu.edu/academics/undergraduate-studies/">Undergraduate Studies</a>
	<ul class="sub-menu tier-3 force">
		<li id="menu-item-18146" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18146"><a href="https://www.jhu.edu/academics/undergraduate-studies/academic-support/">Academic Support</a></li>
		<li id="menu-item-18147" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18147"><a href="https://www.jhu.edu/academics/undergraduate-studies/study-abroad/">Study Abroad</a></li>
	</ul>
</li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18143"><a href="https://www.jhu.edu/academics/graduate-studies/">Graduate Studies</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18148"><a href="https://www.jhu.edu/academics/online/">Online Studies</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18149"><a href="https://www.jhu.edu/academics/part-time-programs/">Part-Time &amp; Non-Degree Programs</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18150"><a href="https://www.jhu.edu/academics/summer-programs/">Summer Programs</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18142"><a href="https://www.jhu.edu/academics/calendars/">Academic Calendars</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-18151"><a href="https://www.jhu.edu/schools/">Schools &#038; Divisions</a>
<ul class="sub-menu tier-2 force">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18152"><a href="https://sais.jhu.edu/">Advanced International Studies</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18153"><a href="http://www.jhuapl.edu">Applied Physics Laboratory</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18154"><a href="http://krieger.jhu.edu">Arts &#038; Sciences</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18155"><a href="http://carey.jhu.edu">Business</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18156"><a href="http://education.jhu.edu">Education</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18157"><a href="http://engineering.jhu.edu">Engineering</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18158"><a href="https://www.hopkinsmedicine.org/som/">Medicine</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18159"><a href="http://nursing.jhu.edu">Nursing</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18160"><a href="http://www.peabody.jhu.edu">Peabody Conservatory</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18161"><a href="http://www.jhsph.edu">Public Health</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-18118"><a href="https://www.jhu.edu/admissions/">Admissions &amp; Aid</a>
<ul class="sub-menu tier-2 force">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-28305"><a href="https://apply.jhu.edu/">Undergraduate Admissions</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18901"><a href="https://www.jhu.edu/admissions/graduate-admissions/">Graduate Admissions</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18132"><a href="https://www.jhu.edu/admissions/visit/">Plan a Visit</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18129"><a href="https://www.jhu.edu/admissions/tuition/">Tuition &amp; Costs</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18125"><a href="https://www.jhu.edu/admissions/financial-aid/">Financial Aid</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-18162"><a href="https://www.jhu.edu/research/">Research &#038; Faculty</a>
<ul class="sub-menu tier-2 force">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18164"><a href="https://www.jhu.edu/research/innovation/">Innovation &#038; Incubation</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-25756"><a href="https://www.jhu.edu/research/bloomberg-professors/">Bloomberg Distinguished Professors</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-18165"><a href="https://www.jhu.edu/research/milestones/">Milestones</a>
	<ul class="sub-menu tier-3 force">
		<li id="menu-item-26448" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-26448"><a href="https://www.jhu.edu/research/milestones/nobel-prize-winners/">Nobel Prize winners</a></li>
	</ul>
</li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18163"><a href="https://www.jhu.edu/research/undergraduate-research/">Undergraduate Research</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18177"><a href="https://www.jhu.edu/research/libraries/">Libraries</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-18168"><a href="https://www.jhu.edu/life/">Campus Life</a>
<ul class="sub-menu tier-2 force">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-18908"><a href="https://www.jhu.edu/life/campuses/">Our Campuses</a>
	<ul class="sub-menu tier-3 force">
		<li id="menu-item-18169" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18169"><a href="https://www.jhu.edu/life/campuses/homewood/">Homewood Campus</a></li>
	</ul>
</li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18180"><a href="https://www.jhu.edu/life/about-baltimore/">About Baltimore</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20656"><a href="https://www.jhu.edu/life/housing-dining/">Housing &#038; Dining</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18909"><a href="https://www.jhu.edu/life/arts-culture/">Arts &amp; Culture</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18172"><a href="https://www.jhu.edu/life/health-wellness/">Health &amp; Wellness</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20689"><a href="https://www.jhu.edu/life/athletics/">Athletics</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-18178"><a href="https://www.jhu.edu/life/security/">Security</a>
	<ul class="sub-menu tier-3 force">
		<li id="menu-item-20666" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20666"><a href="https://www.jhu.edu/life/security/emergency-contact-information/">Emergency Contact Information</a></li>
	</ul>
</li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18179"><a href="https://www.jhu.edu/life/disability-services/">Disability Services</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18181"><a href="http://hub.jhu.edu/events">Calendar of Events</a></li>
</ul>
</li>
</ul>
        </div>
        

        <div id="main-content" class="primary-content column force" role="main">

          
      <div class="image-container">
      <img width="1194" height="796" src="https://www.jhu.edu/assets/uploads/2019/05/mengel_main-1194x796.jpg" class="attachment-soft_crop_1194 size-soft_crop_1194" alt="Liz Mengel" sizes="(min-width: 1680px) 1071px, (min-width: 1280px) 948px, (min-width: 1024px) 843px, (min-width: 863px) 675px, (min-width: 768px) 716px, (min-width: 640px) 637px, (min-width: 412px) 531px, (min-width: 375px) 342px, 311px" decoding="async" loading="lazy" srcset="https://www.jhu.edu/assets/uploads/2019/05/mengel_main-1194x796.jpg 1194w, https://www.jhu.edu/assets/uploads/2019/05/mengel_main-300x200.jpg 300w, https://www.jhu.edu/assets/uploads/2019/05/mengel_main-1024x683.jpg 1024w, https://www.jhu.edu/assets/uploads/2019/05/mengel_main-360x240.jpg 360w, https://www.jhu.edu/assets/uploads/2019/05/mengel_main-768x512.jpg 768w, https://www.jhu.edu/assets/uploads/2019/05/mengel_main-420x280.jpg 420w, https://www.jhu.edu/assets/uploads/2019/05/mengel_main-630x420.jpg 630w, https://www.jhu.edu/assets/uploads/2019/05/mengel_main-825x550.jpg 825w, https://www.jhu.edu/assets/uploads/2019/05/mengel_main-1030x687.jpg 1030w, https://www.jhu.edu/assets/uploads/2019/05/mengel_main-1300x867.jpg 1300w, https://www.jhu.edu/assets/uploads/2019/05/mengel_main.jpg 1440w" />
    </div>
  
  
      <blockquote class="quote"><p>I suspect people think that we have staff here looking through catalogs and buying books all day long. That hasn't happened in a really long time.</p>
</blockquote>
    <p class="dash" aria-hidden="true">&mdash;</p>
  
  
    
    
  
  
    <dl class="by-line">

      
        
  
      <dt class="name">Name</dt>
    <dd class="name">Liz Mengel</dd>
  

        
  
      <dt class="title">Title</dt>
    <dd class="title">Associate director of Collections &amp; Academic Services</dd>
  

        
  
      <dt class="department">Department</dt>
    <dd class="department">Sheridan Libraries</dd>
  

        
  
      <dt class="divisions">Divisions</dt>
    <dd class="divisions">
  
</dd>
  


      
    </dl>

  


  
  
      <div class="bio">
      <p>Liz Mengel has a few million things to manage as the associate director of Collections &amp; Academic Services of the Johns Hopkins Sheridan Libraries.</p>
<p>Under her directorate are the Academic Liaison librarians, Special Collections, Assessment and User Experience, Cultural Properties, Conservation and Preservation, Digitization, and Access Services. And then there's the matter of the books themselves, more than 4.2 million of them—housed across all Johns Hopkins library locations in Baltimore and Washington, D.C., and at the Libraries Services Center on the APL campus, where the majority are kept. And, of course, new books are published every week.</p>
<p>"There's a lot of moving parts involved with bringing new books to the library," Mengel says. "If you tracked one book from the idea of ordering it to when it's actually checked out, it goes through a lot of different people. Our goal is to get a book on the shelf as soon as possible so it's available for people to use."</p>
<p><a href="https://hub.jhu.edu/at-work/2019/04/09/who-does-that-liz-mengel/">Read more about Liz Mengel and her work</a></p>

    </div>
  

        </div>

      </div>

      
    </div>

  </div>


      
<div class="page-footer section" role="contentinfo">

  <div class="center">

    <div class="content force">

      <div class="identification column force">

        <a class="footer-logo column" href="/" >
  <img class="horizontal-logo svg center" src="https://www.jhu.edu/assets/themes/machado/assets/images/logos/university-logo-small-horizontal-white-no-clear-space-372b7d3d35.svg" alt="Johns Hopkins University" />
  <img class="vertical-logo svg center" src="https://www.jhu.edu/assets/themes/machado/assets/images/logos/university-logo-small-vertical-white-no-clear-space-d419e9c203.svg" alt="Johns Hopkins University" />
  <img class="horizontal-logo svg-fallback center" src="https://www.jhu.edu/assets/themes/machado/assets/images/logos/university-logo-small-horizontal-white-no-clear-space-e44019a003.png" alt="Johns Hopkins University" />
  <img class="vertical-logo svg-fallback center" src="https://www.jhu.edu/assets/themes/machado/assets/images/logos/university-logo-small-vertical-white-no-clear-space-29e2bdee83.png" alt="Johns Hopkins University" />
</a>
        <ul class="contact column">
          <li class="university-name">Johns Hopkins University</li>
          <li class="address"><i class="fa fa-fw fa-map-marker" aria-hidden="true"></i><span class="visuallyhidden">Address</span>Baltimore, Maryland</li>
          <li class="phone-number"><i class="fa fa-fw fa-phone-square" aria-hidden="true"></i><span class="visuallyhidden">Phone number</span>410-516-8000</li>
          <li>


<ul class="social-links" aria-label="Johns Hopkins University on Social Media">
  <li>
  
      
  
    
              
              
    <a href="http://www.twitter.com/JohnsHopkins"
         target="_self"
         class="twitter fa-stack gtm-link-click"

                  title="Twitter"
        
        
                  data-action="Click"
          data-category="Footer"
          data-label="Twitter"
        
      ><span class="visuallyhidden">Twitter</span><i class="fa fa-stack-1x fa-square" aria-hidden="true"></i><i class="fa fa-stack-1x fa-twitter-square" aria-hidden="true"></i></a>
  


</li>
  <li>
  
      
  
    
              
              
    <a href="http://www.facebook.com/johnshopkinsuniversity"
         target="_self"
         class="facebook fa-stack gtm-link-click"

                  title="Facebook"
        
        
                  data-action="Click"
          data-category="Footer"
          data-label="Facebook"
        
      ><span class="visuallyhidden">Facebook</span><i class="fa fa-stack-1x fa-square" aria-hidden="true"></i><i class="fa fa-stack-1x fa-facebook-square" aria-hidden="true"></i></a>
  


</li>
  <li>
  
      
  
    
              
              
    <a href="https://www.linkedin.com/edu/the-johns-hopkins-university-18560"
         target="_self"
         class="linkedin fa-stack gtm-link-click"

                  title="LinkedIn"
        
        
                  data-action="Click"
          data-category="Footer"
          data-label="LinkedIn"
        
      ><span class="visuallyhidden">LinkedIn</span><i class="fa fa-stack-1x fa-square" aria-hidden="true"></i><i class="fa fa-stack-1x fa-linkedin-square" aria-hidden="true"></i></a>
  


</li>
  <li>
  
      
  
    
              
              
    <a href="http://www.youtube.com/johnshopkins"
         target="_self"
         class="youtube fa-stack gtm-link-click"

                  title="Youtube"
        
        
                  data-action="Click"
          data-category="Footer"
          data-label="Youtube"
        
      ><span class="visuallyhidden">Youtube</span><i class="fa fa-stack-1x fa-square" aria-hidden="true"></i><i class="fa fa-stack-1x fa-youtube-square" aria-hidden="true"></i></a>
  


</li>
  <li>
  
      
  
    
              
              
    <a href="http://instagram.com/johnshopkinsu"
         target="_self"
         class="instagram fa-stack gtm-link-click"

                  title="Instagram"
        
        
                  data-action="Click"
          data-category="Footer"
          data-label="Instagram"
        
      ><span class="visuallyhidden">Instagram</span><i class="fa fa-stack-1x fa-square" aria-hidden="true"></i><i class="fa fa-stack-1x fa-instagram" aria-hidden="true"></i></a>
  


</li>
      <li>
  
      
  
    
              
              
    <a href="https://hub.jhu.edu"
         target="_self"
         class="hub fa-stack gtm-link-click"

                  title="Hub"
        
        
                  data-action="Click"
          data-category="Footer"
          data-label="Hub"
        
      ><span class="visuallyhidden">Hub</span><i class="fa fa-stack-1x fa-square" aria-hidden="true"></i><i class="fa fa-stack-1x fa-gear" aria-hidden="true"></i></a>
  


</li>
  </ul>
</li>
          <li>&copy; 2024 Johns Hopkins University. All rights reserved.</li>
        </ul>

      </div>

      <div class="nav column force">

        <div role="search" id="search">
          
  
        
      

  
  
        
  
  
  <div class="jhu-block search-box force">

    <form method="GET" action="/search/" class="column force" >

      <div class="form_fields force">

                              <input type="hidden" name="c" value="site_search" />
                  
        
        <label for="search-google-1965861806" class="visuallyhidden">Search jhu.edu</label>
        <input aria-label="Search jhu.edu" id="search-google-1965861806" class="column" type="text" name="q" value="" autocomplete="off">

        <button aria-label="Search" type="submit" class="button column">
          <i class="fa fa-fw fa-search" aria-hidden="true"></i>
          <span class="visuallyhidden">Search jhu.edu</span><span class="text">search</span>
        </button>

        

        </div>

    </form>

  </div>


        </div>

        <div id="menu" class="force">
          <ul class="tier-1 force site-tree column"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18108"><a href="https://www.jhu.edu/about/" data-action="Click" data-category="Footer" data-label="About Us">About Us</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18141"><a href="https://www.jhu.edu/academics/" data-action="Click" data-category="Footer" data-label="Academics">Academics</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18151"><a href="https://www.jhu.edu/schools/" data-action="Click" data-category="Footer" data-label="Schools &#038; Divisions">Schools &#038; Divisions</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18118"><a href="https://www.jhu.edu/admissions/" data-action="Click" data-category="Footer" data-label="Admissions &amp; Aid">Admissions &amp; Aid</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18162"><a href="https://www.jhu.edu/research/" data-action="Click" data-category="Footer" data-label="Research &#038; Faculty">Research &#038; Faculty</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-18168"><a href="https://www.jhu.edu/life/" data-action="Click" data-category="Footer" data-label="Campus Life">Campus Life</a></li>
</ul>
          <ul class="tier-1 force utility-links nav-utility column"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14922"><a href="https://www.jhu.edu/maps-directions/" data-action="Click" data-category="Footer" data-label="Maps &amp; Directions">Maps &amp; Directions</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15740"><a href="https://www.jhu.edu/contact/" data-action="Click" data-category="Footer" data-label="Contact the University">Contact the University</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-14924"><a href="https://jobs.jhu.edu/" data-action="Click" data-category="Footer" data-label="Employment Opportunities">Employment Opportunities</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-14925"><a href="https://my.jh.edu/" data-action="Click" data-category="Footer" data-label="my.jh.edu">my.jh.edu</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17176"><a href="https://giving.jhu.edu/" data-action="Click" data-category="Footer" data-label="Give to the University">Give to the University</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17177"><a href="https://alumni.jhu.edu/" data-action="Click" data-category="Footer" data-label="For Alumni">For Alumni</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17178"><a href="https://studentaffairs.jhu.edu/parents-families/" data-action="Click" data-category="Footer" data-label="For Parents">For Parents</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17179"><a href="https://hub.jhu.edu/media/" data-action="Click" data-category="Footer" data-label="For News Media">For News Media</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-26134"><a href="https://www.jhu.edu/life/athletics/" data-action="Click" data-category="Footer" data-label="Athletics">Athletics</a></li>
</ul>
          <ul class="tier-1 force utility-links footer-utility column"><li id="menu-item-15475" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15475"><a href="https://www.jhu.edu/contact/" data-action="Click" data-category="Footer" data-label="Contact the University">Contact the University</a></li>
<li id="menu-item-207749" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-207749"><a href="https://jobs.jhu.edu/" data-action="Click" data-category="Footer" data-label="Employment Opportunities">Employment Opportunities</a></li>
<li id="menu-item-15476" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15476"><a href="https://www.jhu.edu/university-policies/" data-action="Click" data-category="Footer" data-label="University Policies and Statements">University Policies and Statements</a></li>
<li id="menu-item-28269" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-28269"><a href="https://www.jhu.edu/privacystatement" data-action="Click" data-category="Footer" data-label="Privacy Statement">Privacy Statement</a></li>
<li id="menu-item-24461" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-24461"><a href="http://sexualassault.jhu.edu/" data-action="Click" data-category="Footer" data-label="Title IX Information and Resources">Title IX Information and Resources</a></li>
<li id="menu-item-15477" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-15477"><a href="https://e-catalogue.jhu.edu/university-wide-policies-information/higher-education-act-disclosures/" data-action="Click" data-category="Footer" data-label="Higher Education Act Disclosures">Higher Education Act Disclosures</a></li>
<li id="menu-item-36764" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-36764"><a href="https://apply.jhu.edu/clery/" data-action="Click" data-category="Footer" data-label="Clery Disclosure">Clery Disclosure</a></li>
<li id="menu-item-26829" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-26829"><a href="http://accessibility.jhu.edu/" data-action="Click" data-category="Footer" data-label="Accessibility">Accessibility</a></li>
<li id="menu-item-15478" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15478"><a href="https://www.jhu.edu/life/security/emergency-contact-information/" data-action="Click" data-category="Footer" data-label="Emergency Contact Information">Emergency Contact Information</a></li>
</ul>
        </div>

      </div>

    </div>

  </div>

</div>

      <div class="modal-overlay" role="button" aria-label="Close all modals"></div>
      <div class="main-nav-overlay" role="button" aria-label="Close menu"></div>

      
<div id="breakpoint">

  <div class="width">
    <div class="hand"></div>
    <div class="lap"></div>
    <div class="desk"></div>
    <div class="wall"></div>
    <div class="jumbotron"></div>
  </div>

  <div class="height">
    <div class="hand"></div>
    <div class="lap"></div>
    <div class="desk"></div>
    <div class="wall"></div>
    <div class="jumbotron"></div>
  </div>

</div>

    </div>

    
    <script type="text/javascript" src="https://www.jhu.edu/wp-includes/js/dist/vendor/lodash.min.js?ver=4.17.19" id="lodash-js"></script>
<script type="text/javascript" id="lodash-js-after">
/* <![CDATA[ */
window.lodash = _.noConflict();
/* ]]> */
</script>
<script type="text/javascript" src="https://www.jhu.edu/assets/themes/machado/assets/js/jquery-763dd8b7bc.js?ver=6.4.2" id="jquery-js"></script>
<script type="text/javascript" src="https://www.jhu.edu/assets/themes/machado/assets/js/underscore-713b6adf31.js?ver=6.4.2" id="underscore-js"></script>
<script type="text/javascript" src="https://www.jhu.edu/wp-includes/js/backbone.min.js?ver=1.5.0" id="backbone-js"></script>
<script type="text/javascript" src="https://www.jhu.edu/assets/themes/machado/assets/js/vent-d4841c5d88.js?ver=6.4.2" id="jhu-base-js"></script>
<script type="text/javascript" src="https://www.jhu.edu/assets/themes/machado/assets/js/page-ae1ac04543.js?ver=6.4.2" id="jhu-page-js"></script>
<script type="text/javascript" src="https://www.jhu.edu/assets/themes/machado/assets/js/callout-28a865acf7.js?ver=6.4.2" id="jhu-callout-js"></script>
<script type="text/javascript" id="gforms_recaptcha_recaptcha-js-extra">
/* <![CDATA[ */
var gforms_recaptcha_recaptcha_strings = {"site_key":"6LclNtkZAAAAANENXb4rH5E6uT1RlbUCAFvjxJYj","ajaxurl":"https:\/\/www.jhu.edu\/wp-admin\/admin-ajax.php","nonce":"74fc0dad63"};
/* ]]> */
</script>
<script type="text/javascript" src="https://www.google.com/recaptcha/api.js?render=6LclNtkZAAAAANENXb4rH5E6uT1RlbUCAFvjxJYj&amp;ver=1.2.2" id="gforms_recaptcha_recaptcha-js"></script>
<script type="text/javascript" id="gforms_recaptcha_recaptcha-js-after">
/* <![CDATA[ */
(function($){grecaptcha.ready(function(){$('.grecaptcha-badge').css('visibility','hidden');});})(jQuery);
/* ]]> */
</script>


          <script type="text/javascript">
/*<![CDATA[*/
(function() {
var sz = document.createElement('script'); sz.type = 'text/javascript'; sz.async = true;
sz.src = '//siteimproveanalytics.com/js/siteanalyze_6185845.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sz, s);
})();
/*]]>*/
</script>
    
    <script>
  !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
  },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
    a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
  twq('init','o1w55');
  twq('track','PageView');
</script>

  </body>
</html>
