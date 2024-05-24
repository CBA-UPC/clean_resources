!function(){function q(b){var c=[],a=[],e=function(f)r=y).indexOf("http:")?r.replace("http:",""):r.replace("https:",""),-1!==(v=l.indexOf("?"))?l.replace(l.substring(v),""):l);if(f&&(-1!==f.indexOf(k)||-1!==g.Tag.indexOf(f))){d=g;break}}var y,l,v,r;return d}(b);return e.CategoryId&&(c=e.CategoryId),e.Vendor&&(a=e.Vendor.split(":")),!e.Tag&&F&&(a=c=function(f){var d=[],h=function(g){var k=document.createElement("a");
k.href=g;g=k.hostname.split(".");return-1!==g.indexOf("www")||2<g.length?g.slice(1).join("."):k.hostname}(f);w.some(function(g){return g===h})&&(d=["C0004"]);return d}(b)),{categoryIds:c,vsCatIds:a}}function z(b){return!bGroups.indexOf(","+c+",")}):void 0)}function m(b,c){void 0===c&&(c=null);var a=window,e=a.OneTrust&&a.OneTrust.IsVendorServiceEnabled;a=e&&a.OneTrust.IsVendorServiceEnabled();return"Categories"===
t||"All"===t&&e&&!a?z(b):("Vendors"===t||"All"===t&&e&&a)&&z(c)}function n(b){b=b.getAttribute("class")||"";return-1!==b.indexOf("optanon-category")||-1!==b.indexOf("ot-vscat")}function p(b){return b.hasAttribute("data-ot-ignore")}function A(b,c,a){void 0===a&&(a=null);var e=b.join("-"),f=a&&a.join("-"),d=c.getAttribute("class")||"",h="",g=!1;b&&b.length&&-1===d.indexOf("optanon-category-"+e)&&(h=("optanon-category-"+e).trim(),g=!0);a&&a.length&&-1===d.indexOf("ot-vscat-"+f)&&(h+=" "+("ot-vscat-"+
f).trim(),g=!0);g&&c.setAttribute("class",h+" "+d)}function B(b,c,a){void 0===a&&(a=null);var e;b=b.join("-");a=a&&a.join("-");return-1===c.indexOf("optanon-category-"+b)&&(e=("optanon-category-"+b).trim()),-1===c.indexOf("ot-vscat-"+a)&&(e+=" "+("ot-vscat-"+a).trim()),e+" "+c}function C(b){var c=q(b.src||"");if(c.categoryIds.length||c.vsCatIds.length){A(c.categoryIds,b,c.vsCatIds);m(c.categoryIds,c.vsCatIds)||(b.type="text/plain");var a=function(e){"text/plain"===b.getAttribute("type")&&e.preventDefault();
b.removeEventListener("beforescriptexecute",a)};b.addEventListener("beforescriptexecute",a)}}function D(b){var c=b.src||"",a=q(c);(a.categoryIds.length||a.vsCatIds.length)&&(A(a.categoryIds,b,a.vsCatIds),m(a.categoryIds,a.vsCatIds)||(b.removeAttribute("src"),b.setAttribute("data-src",c)))}var x=JSON.parse('[{"Tag":"https://www.google-analytics.com/analytics.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://siteimproveanalytics.com/js/siteanalyze_88721.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://88721.global.siteimproveanalytics.io/image.aspx","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://hello.myfonts.net/count/2cc326","CategoryId":["C0003"],"Vendor":null}]'),
F=JSON.parse("true"),t=JSON.parse('"Categories"'),w=[""];w=w.filter(function(b){if("null"!==b&&b.trim().length)return b});var u=["embed","iframe","img","script"];(new MutationObserver(function(b){Array.prototype.forEach.call(b,function(c){Array.prototype.forEach.call(c.addedNodes,function(e){1===e.nodeType&&(-1===u.indexOf(e.tagName.toLowerCase())||n(e)||p(e)||("script"===e.tagName.toLowerCase()?C:D)(e))});var a=c.target;c.attributeName&&(n(a)&&p(a)||("script"===a.nodeName.toLowerCase()?C(a):-1!==
u.indexOf(c.target.nodeName.toLowerCase())&&D(a)))})})).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["src"]});var E=document.createElement;document.createElement=function(){for(var b=[],c=0;c<arguments.length;c++)b[c]=arguments[c];if("script"!==b[0].toLowerCase()&&-1===u.indexOf(b[0].toLowerCase()))return E.bind(document).apply(void 0,b);var a=E.bind(document).apply(void 0,b),e=a.setAttribute.bind(a);return Object.defineProperties(a,{src:{get:function(){return a.getAttribute("src")||
""},set:function(f){var d="";"string"==typeof f?d=f:f instanceof Object&&(d=f.toString());d=q(d);!d.categoryIds.length&&!d.vsCatIds.length||"script"!==b[0].toLowerCase()||n(a)||m(d.categoryIds,d.vsCatIds)||p(a)?!d.categoryIds.length||-1===u.indexOf(b[0].toLowerCase())||n(a)||m(d.categoryIds,d.vsCatIds)||p(a)?e("src",f):(a.removeAttribute("src"),e("data-src",f),f=a.getAttribute("class"),f||(f=B(d.categoryIds,f||"",d.vsCatIds),e("class",f))):(e("type","text/plain"),e("src",f));return!0}},type:{get:function(){return a.getAttribute("type")||
""},set:function(f){return d=f,g=e,k=q((h=a).src||""),g("type",!k.categoryIds.length&&!k.vsCatIds.length||n(h)||m(k.categoryIds,k.vsCatIds)||p(h)?d:"text/plain"),!0;var d,h,g,k}},class:{set:function(f){return d=f,g=e,!(k=q((h=a).src)).categoryIds.length&&!k.vsCatIds.length||n(h)||m(k.categoryIds,k.vsCatIds)||p(h)?g("class",d):g("class",B(k.categoryIds,d,k.vsCatIds)),!0;var d,h,g,k}}}),a.setAttribute=function(f,d,h){"type"!==f&&"src"!==f||h?e(f,d):a[f]=d},a}}();tElement.className = document.documentElement.className.replace(/\bno-js\b/, 'js');
    </script>
    <script src="/static/js/modernizr.js" data-ot-ignore></script>
    <link rel="stylesheet" type="text/css" href="/static/css/styles.css?v=1.1.1.1" />


    
<script type="text/javascript">var appInsights=window.appInsights||function(config){function t(config){i[config]=function(){var t=arguments;i.queue.push(function(){i[config].apply(i,t)})}}var i={config:config},u=document,e=window,o="script",s="AuthenticatedUserContext",h="start",c="stop",l="Track",a=l+"Event",v=l+"Page",r,f;setTimeout(function(){var t=u.createElement(o);t.src=config.url||"https://az416426.vo.msecnd.net/scripts/a/ai.0.js";u.getElementsByTagName(o)[0].parentNode.appendChild(t)});try{i.cookie=u.cookie}catch(y){}for(i.queue=[],r=["Event","Exception","Metric","PageView","Trace","Dependency"];r.length;)t("track"+r.pop());return t("set"+s),t("clear"+s),t(h+a),t(c+a),t(h+v),t(c+v),t("flush"),config.disableExceptionTracking||(r="onerror",t("_"+r),f=e[r],e[r]=function(config,t,u,e,o){var s=f&&f(config,t,u,e,o);return s!==!0&&i["_"+r](config,t,u,e,o),s}),i}({instrumentationKey:"7cd00a9d-fe4f-4bf1-930e-237c9b654550",sdkExtension:"a"});window.appInsights=appInsights;appInsights.queue&&appInsights.queue.length===0&&appInsights.trackPageView();</script></head>

<body >

    
    

    <div class="skiptocontent">
        <a href="#skipToContent">Skip to content</a>
    </div>

    <div class="mainContent">
<header class="content layout-100 header" id="header">
    <div class="wrap">
        <!-- mobile trigger buttons -->
        <nav class="header-mobile-nav">
            <ul>
                    <li class="toggleSearch"><a href="#">Search site</a></li>
                <li class="toggleMenu"><a href="#">Menu</a></li>
            </ul>
        </nav>

        <section class="header-block">
            <div class="header-util">
                <!-- logo -->
                <p class="header-logo">
                    <a href="/" >
                        <img src="/contentassets/847d385a0f4741f79cb11f476e6ae875/logo_informa.png" alt="Home" />
                    </a>
                </p>

                <!-- share price -->
                    <div class="header-sharePrice desktop-only">
                        <div class="header-sharePrice-wrap">
                            <iframe title="Share Price" src="https://irs.tools.investis.com/Clients/(S(bwszc4r24tsws5ap5a1ozst2))/uk/informa2/Ticker/ticker_header.aspx?culture=en-GB"></iframe>
                        </div>
                    </div>

                <!-- search -->
                    <form action="/search-results/#results-top">
                        <fieldset class="header-search">
                            <label for="search-site" class="accessibility">Search Informa</label>
                            <input type="text" class="search-input" id="search-site" name="q" placeholder="Search">
                            <input type="submit" class="search-button" value="Search">
                        </fieldset>
                    </form>               
            </div>

            <!-- main navigation -->
            <nav class="menu" id="menu">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                            <li >
                                <a href="/about-us/">About Us</a>
                                    <ul>
                                            <li><a href="/about-us/what-we-do/">What We Do</a></li>
                                            <li><a href="/about-us/where-we-are/">Where We Are</a></li>
                                            <li><a href="/about-us/our-history/">History</a></li>
                                            <li><a href="/about-us/group-strategy/">Strategy</a></li>
                                            <li><a href="/about-us/working-in-specialist-markets/">Market Trends</a></li>
                                            <li><a href="/about-us/purpose-principles/">Purpose &amp; Principles</a></li>
                                            <li><a href="/about-us/executive-management/">Executive Management</a></li>
                                            <li><a href="/about-us/board-of-directors/">Board of Directors</a></li>
                                            <li><a href="/about-us/group-policies/">Policies</a></li>
                                    </ul>
                            </li>
                            <li >
                                <a href="/divisions/">Divisions</a>
                                    <ul>
                                            <li><a href="/divisions/informa-connect/">Informa Connect</a></li>
                                            <li><a href="/divisions/informa-markets/">Informa Markets</a></li>
                                            <li><a href="/divisions/informa-tech/">Informa Tech</a></li>
                                            <li><a href="/divisions/taylor-and-francis/">Taylor &amp; Francis</a></li>
                                            <li><a href="/divisions/Global-Support/">Global Support</a></li>
                                    </ul>
                            </li>
                            <li >
                                <a href="/investors/">Investors</a>
                                    <ul>
                                            <li><a href="/investors/investor-days/">Investor Days</a></li>
                                            <li><a href="/investors/investment-case/">Investment Case</a></li>
                                            <li><a href="/investors/shareholder-centre/">Shareholder Centre</a></li>
                                            <li><a href="/investors/Annual-Report/">Annual Reports</a></li>
                                            <li><a href="/investors/results-presentations/">Results &amp; Presentations</a></li>
                                            <li><a href="/investors/press-releases-news/">Press Releases &amp; News</a></li>
                                            <li><a href="/investors/financial-calendar/">Financial Calendar</a></li>
                                            <li><a href="/investors/financial-summary/">Financial Summary</a></li>
                                            <li><a href="/investors/debt-summary/">Debt Summary</a></li>
                                            <li><a href="/investors/tax/">Tax Approach</a></li>
                                            <li><a href="/investors/analysts-and-advisors/">Advisors &amp; Analysts</a></li>
                                            <li><a href="/investors/analyst-research/">Analyst Research</a></li>
                                            <li><a href="/investors/pension-schemes/">Pension Schemes</a></li>
                                            <li><a href="/investors/corporate-governance/">Corporate Governance</a></li>
                                            <li><a href="/investors/investor-relations-contacts/">Investor Relations Contacts</a></li>
                                    </ul>
                            </li>
                            <li >
                                <a href="/sustainability/">Sustainability</a>
                                    <ul>
                                            <li><a href="/sustainability/faster-forward/">FasterForward</a></li>
                                            <li><a href="/sustainability/climate-impact/">Climate Impact</a></li>
                                            <li><a href="/sustainability/sustainable-products/">Sustainable Products</a></li>
                                            <li><a href="/sustainability/community-impact/">Community Impact</a></li>
                                            <li><a href="/sustainability/sustainability-awards/">Recognition</a></li>
                                            <li><a href="/sustainability/sustainability-reports/">Sustainability Reports</a></li>
                                    </ul>
                            </li>
                            <li >
                                <a href="/talent/">Talent</a>
                                    <ul>
                                            <li><a href="https://lifeat.informa.com/">Life at Informa</a></li>
                                            <li><a href="/talent/DiversityandInclusion/">Diversity &amp; Inclusion</a></li>
                                            <li><a href="https://careers.informa.com/">Vacancies</a></li>
                                            <li><a href="/talent/graduates/">Graduates</a></li>
                                            <li><a href="/talent/recruitment-warning/">Recruitment Warning</a></li>
                                    </ul>
                            </li>
                            <li >
                                <a href="/media/">Media</a>
                                    <ul>
                                            <li><a href="/media/media-contacts/">Media Contacts</a></li>
                                            <li><a href="/media/press-releases-news/">News</a></li>
                                    </ul>
                            </li>
                            <li >
                                <a href="/contact-us/">Contact</a>
                                    <ul>
                                            <li><a href="/contact-us/global-contacts/">Global Contacts</a></li>
                                            <li><a href="/contact-us/office-locator/">Office Locator</a></li>
                                    </ul>
                            </li>
                    </ul>
            </nav>
        </section>

            <p class="share-price mobile-only">
                <iframe title="Share Price" src="https://irs.tools.investis.com/Clients/(S(bwszc4r24tsws5ap5a1ozst2))/uk/informa2/Ticker/ticker_header.aspx?culture=en-GB"></iframe>
            </p>
    </div>
</header>

<div id="skipToContent"></div>
        
<div class="container-100"><div class='section section_edge section_edgeContent' style='' ><div class='section-wrap'><div class='grid '><div class="col-12 ">



<div class="multiHero">
        <picture class="multiHeroImg">
            <!-- desktop -->
                <source media="(min-width: 80em)" srcset="/contentassets/4e59dcad40984cecb6604f46f5d1dc52/infnewherobanner2023v2-high.jpg">

            <!-- tablet -->
                <source media="(min-width: 37.5em)" srcset="/contentassets/4e59dcad40984cecb6604f46f5d1dc52/infnewherobannertablet23.jpg">

            <!-- mobile -->
                <source srcset="/contentassets/4e59dcad40984cecb6604f46f5d1dc52/infnewherobannermobilesr23.jpg">

            <!-- fallback -->
            <img src="/contentassets/4e59dcad40984cecb6604f46f5d1dc52/infnewherobanner2023v2-high.jpg" alt="Informa Office image">
        </picture>
    

    <div class="multiHeroBody">
        <!-- left column -->
        <div class="heroCol opacity position-tl textDark">

                <div class="multiHeroBodyWrap">


                        <div class="wysiwyg">
                            <h1>Championing the specialist</h1>
<p class="large">Informa's events, digital products and academic research services connect specialists with knowledge, helping them learn more, know more and do more</p>
<ul class="ctaWhiteList">
<li><a href="/about-us/">Learn more about Informa</a></li>
<li><a href="/about-us/purpose-principles/">Our purpose &amp; principles</a></li>
<li><a title="2022 Annual Report" href="/investors/Annual-Report/">View 2022 Annual Report</a></li>
<li>&nbsp;</li>
</ul>
                        </div>
                </div>

            




        </div>

        <!-- right column -->
        <div class="heroCol  position-br textLight">


            
    <div class="owl-carousel carouselSmall">
            <div class="carouselSmall-item">
                <div class="carouselSmall-body">
        <h3 class="carouselSmall-title"> FTSE100</h3>
        <div class="carouselSmall-summary">
            member
        </div>
                </div>
            </div>
            <div class="carouselSmall-item">
                <div class="carouselSmall-body">
        <h3 class="carouselSmall-title">100s</h3>
        <div class="carouselSmall-summary">
            specialist brands
        </div>
                </div>
            </div>
            <div class="carouselSmall-item">
                <div class="carouselSmall-body">
        <h3 class="carouselSmall-title"> 11,000</h3>
        <div class="carouselSmall-summary">
            colleagues			 
        </div>
                </div>
            </div>
            <div class="carouselSmall-item">
                <div class="carouselSmall-body">
        <h3 class="carouselSmall-title">30+</h3>
        <div class="carouselSmall-summary">
            countries
        </div>
                </div>
            </div>
    </div>




        </div>
    </div>
</div>
</div></div></div></div><div class='section section_addPaddings' style='' ><div class='section-wrap'><div class='grid '><div class="col-6 ">
<div class="campaignPromoBlock imageRight">
    <h2 class="campaignPromoBlockHeader" >Trading &amp; Combination</h2>

    <div class="campaignPromoBlockBody wysiwyg">
        <p>Read our January Full Year Trading Update, detailing Informa&rsquo;s strong performance in 2023 and commitment to further growth in 2024, and our acceleration in B2B Digital Services through an agreement to combine Informa Tech&rsquo;s digital businesses with TechTarget.</p>
<ul class="ctaWhiteList">
<li><a title=" Read Full Year Trading Update" href="/globalassets/documents/investor-relations/2024/informa-plc--2023-full-year-trading-update.pdf" target="_blank" rel="noopener"> Read Full Year Trading Update</a></li>
<li><a title="Read - New TechTarget: Informa accelerates in B2B Digital Services" href="/globalassets/documents/investor-relations/2024/informa-plc---informa-tech-digital-businesses-to-combine-with-techtarget.pdf" target="_blank" rel="noopener">Read - New TechTarget: Informa accelerates in B2B Digital Services</a></li>
<li><a title="Watch the Investor Presentation " href="https://stream.brrmedia.co.uk/broadcast/658021c4e6ef8495cc737ae2" target="_blank" rel="noopener">Watch the Investor Presentation </a></li>
<li><a title="Informa Full Year 2023 Trading Update and New TechTarget Presentation" href="/globalassets/documents/investor-relations/2024/informa-full-year-2023-trading-update-and-new-techtarget-presentation.pdf" target="_blank" rel="noopener">Informa Full Year 2023 Trading Update and New TechTarget Presentation</a></li>
</ul>
    </div>

    <div class="campaignPromoBlockImg">
        <a href="/globalassets/documents/investor-relations/2023/informa-2023-h1-results-.pdf">
            <img src="/globalassets/global/homepage/trading-promo-2023-updated.png">

        </a>
    </div>
</div>
</div><div class="col-6 ">
<div class="tabsToAccordion tabsStyle2">

    <div class="tabsNavWrap">
        <ul class="tabsToAccordion-navlist hor_1">
                <li>News</li>
                <li>Calendar</li>
                <li>Results</li>
        </ul>
    </div>

    <div class="tabsToAccordion-container hor_1">
            <div class="tabsToAccordion-content">
                <div class="wysiwyg">
                    <ul class="listNews">
<li><strong>10 Jan 2024</strong><a class="cta" title="New TechTarget: Informa accelerates in B2B Digital Services" href="/globalassets/documents/investor-relations/2024/informa-plc---informa-tech-digital-businesses-to-combine-with-techtarget.pdf" rel="noopener">New TechTarget: Informa accelerates in B2B Digital Services</a></li>
<li><strong>10 Jan 2024</strong><a class="cta" title="Informa 2023 Full Year Trading Update" href="/globalassets/documents/investor-relations/2024/informa-plc--2023-full-year-trading-update.pdf" rel="noopener">Informa 2023 Full Year Trading Update </a></li>
<li><strong>14 Nov 2023</strong><a class="cta" title="November 2023 Trading Update" href="/globalassets/documents/investor-relations/2023/2023-trading-update/20231113-informa-10-month-trading-update---final.pdf" rel="noopener">November 2023 Trading Update</a></li>
<li><strong>27 July 2023</strong><a class="cta" title="Saudi Arabia's Events Investment Fund" href="/media/press-releases-news/latest-news/saudi-arabias-events-investment-fund-acquires-stake-in-tahaluf-the-informa-ksa-strategic-joint-venture-supporting-vision-2030/" rel="noopener">Saudi Arabia&rsquo;s Events Investment Fund acquires stake in Tahaluf, the Informa-KSA strategic joint venture supporting Vision 2030</a></li>
<li><strong>27 July 2023</strong><a class="cta" title="Informa 2023 H1 Results" href="/globalassets/documents/investor-relations/2023/informa-2023-h1-results-.pdf" rel="noopener">Informa 2023 Half Year Results</a></li>
<li><strong>15 Jun 2023</strong><a class="cta" title="Informa 2023 AGM Trading Update" href="/globalassets/documents/investor-relations/2023/informa-2023-agm-trading-update.pdf" rel="noopener">Informa 2023 AGM Trading Update</a></li>
<li><strong>18 May 2023</strong><a class="cta" title="Informa further strengthens position in the specialist B2B Foodservice market through the acquisition of Winsight" href="/globalassets/documents/investor-relations/2023/informa-plc---expansion-in-b2b-foodservice-through-acquisition-of-winsight.pdf" rel="noopener">Informa further strengthens position in the specialist B2B Foodservice market through the acquisition of Winsight</a></li>
</ul>
                </div>
            </div>
            <div class="tabsToAccordion-content">
                <div class="wysiwyg">
                    <ul class="listNews">
<li><strong>8 Mar 2024</strong> <a class="cta" title="2023 Full Year Results" href="/investors/financial-calendar/" target="_top">2023 Full Year Results</a></li>
<li><strong>10 Jan 2024</strong> <a class="cta" title="Informa 2023 Full Year Trading Update" href="/investors/financial-calendar/" target="_top">2023 Full Year Trading Update </a></li>
<li><strong>14 Nov 2023</strong> <a class="cta" title="2023 Ten-Month Trading Update" href="/investors/financial-calendar/">2023 Ten-Month Trading Update</a></li>
<li><strong>27 July 2023</strong> <a class="cta" title="2023 Half Year Results" href="/investors/financial-calendar/">2023 Half-Year Results</a></li>
<li><strong>15 June 2023</strong> <a class="cta" title="2023 Interim Results" href="/investors/financial-calendar/">2023 Annual General Meeting</a></li>
<li><strong>9 Mar 2023</strong> <a class="cta" title="2022 Full Year Results" href="/investors/financial-calendar/">2022 Full Year Results</a></li>
</ul>
                </div>
            </div>
            <div class="tabsToAccordion-content">
                <div class="wysiwyg">
                    <div class="respTblInnerWrap">
<div class="respTblOuterWrap">
<div class="respTblInnerWrap">
<table class="responsiveTable table" style="height: 497px;">
<tbody>
<tr style="height: 48px;">
<td id="Date" class="tablehead" style="width: 118.42px; height: 48px;"><strong>Date</strong></td>
<td id="Title" class="tablehead" style="width: 127.448px; height: 48px;"><strong>Title</strong></td>
<td id="Statement" class="tablehead" style="width: 115.417px; height: 48px;"><strong>Statement</strong></td>
<td id="Presentation" class="tablehead" style="width: 135.486px; height: 48px;"><strong>Presentation</strong></td>
<td id="Webcast" class="tablehead" style="width: 101.354px; height: 48px;"><strong>Webcast</strong></td>
<td id="highlight" class="tablehead" style="width: 114.41px; height: 48px;"><strong>Transcript</strong></td>
<td id="Report" class="tablehead" style="width: 86.3542px; height: 48px;"><strong>Report</strong></td>
</tr>
<tr style="height: 140px;">
<td style="width: 118.42px; height: 140px;">
<p><strong>10 January 2024</strong></p>
</td>
<td style="width: 127.448px; height: 140px;">
<p style="font-weight: 400;"><strong>Informa 2023 Full Year Trading Update </strong></p>
</td>
<td style="width: 115.417px; height: 140px;"><a href="/globalassets/documents/investor-relations/2024/informa-plc--2023-full-year-trading-update.pdf"><img style="width: 32px;" src="/Global/Icon/Informa_icon_statement-web-40x40.png" alt="Informa 2023 Full Year Trading Update" /></a></td>
<td style="width: 135.486px; height: 102px;"><a title="Informa Full Year 2023 Trading Update and New TechTarget Presentation" href="/globalassets/documents/investor-relations/2024/informa-full-year-2023-trading-update-and-new-techtarget-presentation.pdf" target="_blank" rel="noopener"><img src="/globalassets/global/icon/informa_icon_presentation-web-40x40.png" alt="Informa Full Year 2023 Trading Update and New TechTarget Presentation" width="32" height="32" /></a></td>
<td style="width: 101.354px; height: 140px;"><a title="Listen to the 2023 Full Year Trading Update " href="https://stream.brrmedia.co.uk/broadcast/658021c4e6ef8495cc737ae2" target="_blank" rel="noopener"><img style="width: 32px;" src="/Global/Icon/Informa_icon_video-camera-web-40x40.png" alt="Informa 2023 Full Year Trading Update Webcast" /></a></td>
<td style="width: 114.41px; height: 140px;"><a title="Informa 2023 Trading Update and Combination with TechTarget Transcript" href="/globalassets/documents/investor-relations/2024/informa-2023-trading-update-and-combination-with-techtarget-transcript.pdf" target="_blank" rel="noopener"><img style="width: 32px;" src="/Global/Icon/Informa_icon_statement-web-40x40.png" alt="Informa 2023 Half Year Results" /></a></td>
<td style="width: 86.3542px; height: 140px;">&nbsp;</td>
</tr>
<tr style="height: 104px;">
<td style="width: 118.42px; height: 104px;">
<p><strong>14 November 2023</strong></p>
</td>
<td style="width: 127.448px; height: 104px;"><strong>10 Month Trading Update</strong></td>
<td style="width: 115.417px; height: 104px;"><a href="/globalassets/documents/investor-relations/2023/2023-trading-update/20231113-informa-10-month-trading-update---final.pdf"><img style="width: 32px;" src="/Global/Icon/Informa_icon_statement-web-40x40.png" alt="November 2023 Trading Update" /></a></td>
<td style="width: 135.486px; height: 104px;">&nbsp;</td>
<td style="width: 101.354px; height: 104px;"><a title="Listen to the 2023 Ten-Month Trading Update Conference Call" href="/globalassets/documents/investor-relations/2023/2023-trading-update/informa-2023-ten-month-trading-update-conference-call.mp3" target="_blank" rel="noopener"><img style="width: 32px;" src="/Global/Icon/Informa_icon_video-camera-web-40x40.png" alt="Informa 2023 Half Year Results Webcast" /></a></td>
<td style="width: 114.41px; height: 104px;"><a title="2023 Ten-Month Trading Update Transcript" href="/globalassets/documents/investor-relations/2023/2023-trading-update/2023-ten-month-trading-update-conference-call-transcript.pdf" target="_blank" rel="noopener"><img style="width: 32px;" src="/Global/Icon/Informa_icon_statement-web-40x40.png" alt="Informa 2023 Half Year Results" /></a></td>
<td style="width: 86.3542px; height: 104px;">&nbsp;</td>
</tr>
<tr style="height: 102px;">
<td style="width: 118.42px; height: 102px;">
<p><strong>27 July 2023</strong></p>
</td>
<td style="width: 127.448px; height: 102px;"><strong>Informa 2023 Half Year Results</strong></td>
<td style="width: 115.417px; height: 102px;"><a href="/globalassets/documents/investor-relations/2023/informa-2023-h1-results-.pdf"><img style="width: 32px;" src="/Global/Icon/Informa_icon_statement-web-40x40.png" alt="Informa 2023 Half Year Results" /></a></td>
<td style="width: 135.486px; height: 102px;"><a title="Informa 2023 Half Year Results" href="/globalassets/documents/investor-relations/2023/informa-2023-h1-results-presentation.pdf" target="_blank" rel="noopener"><img src="/globalassets/global/icon/informa_icon_presentation-web-40x40.png" alt="" width="32" height="32" /></a></td>
<td style="width: 101.354px; height: 102px;"><a title="Informa 2023 Half Year Results Webcast" href="https://stream.brrmedia.co.uk/broadcast/6492ef06cf110c81f8666745" target="_blank" rel="noopener"><img style="width: 32px;" src="/Global/Icon/Informa_icon_video-camera-web-40x40.png" alt="Informa 2023 Half Year Results Webcast" /></a></td>
<td style="width: 114.41px; height: 102px;"><a title="H1 2023 Transcript" href="/globalassets/documents/investor-relations/2023/informa-transcript-h1-20232.pdf"><img style="width: 32px;" src="/Global/Icon/Informa_icon_statement-web-40x40.png" alt="Informa 2023 Half Year Results" /></a></td>
<td style="width: 86.3542px; height: 102px;">&nbsp;</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
                </div>
            </div>
    </div>
</div>

</div></div></div></div><div class='section section_wide section_wideContent' style='' ><div class='section-wrap'><div class='grid '><div class="col-12 ">



<div class="multiHero">
        <picture class="multiHeroImg">
            <!-- desktop -->
                <source media="(min-width: 80em)" srcset="/contentassets/81192363aebc4b9baf5da69dbf0018f6/greatthings-new-orbit.jpg">

            <!-- tablet -->

            <!-- mobile -->

            <!-- fallback -->
            <img src="/contentassets/81192363aebc4b9baf5da69dbf0018f6/greatthings-new-orbit.jpg" alt="Great things happen when we get together">
        </picture>
    

    <div class="multiHeroBody">
        <!-- left column -->
        <div class="heroCol  position-center textLight">

                <div class="multiHeroBodyWrap">


                        <div class="wysiwyg">
                            <h2><strong>Connecting people, knowledge and ideas </strong></h2>
<p class="campaignPromoBlockBody">Informa is home to dozens of different brands and businesses.&nbsp;What we all share is a focus on connecting people, connecting knowledge and connecting ideas.</p>
<p class="campaignPromoBlockBody">It&rsquo;s how we help our customers succeed in their roles and businesses, and how we make a positive impact on the markets and communities we work in.</p>
                        </div>
                </div>

            




        </div>

        <!-- right column -->
        <div class="heroCol  position-center textDark">




<div class="promoBlock">
    
    <div class="promoBlockImage">
<a href="/overlay/?videoUrl=https://player.vimeo.com/video/806052607&videoTitle=Introduction+to+Informa" data-hrefpreview="/overlay/?videoUrl=https://player.vimeo.com/video/806052607&videoTitle=Introduction+to+Informa #overlay-content" class="openOverlay cta-video">            <img alt="Watch our corporate video" src="/contentassets/097540955f684a3aa1c1cac17ffc111b/about2023_landscape.jpg" />
                <h2 class="promoBlockTitle" >Introduction to Informa</h2>
</a>    </div>

        <div class="promoBlockSummary" >
            <p>
                Watch for a snapshot of Informa

            </p>

        </div>
</div>
            




        </div>
    </div>
</div>
</div></div></div></div><div class='section section_addPaddings' style='' ><div class='section-wrap'><div class='grid '><div class="col-6 ">
<div class="campaignPromoBlock imageRight">
    <h2 class="campaignPromoBlockHeader" >Investing in Informa</h2>

    <div class="campaignPromoBlockBody wysiwyg">
        <p>Informa offers exposure to the growing, global knowledge and information economy.</p>
<p>We have scale leadership positions in Academic and B2B Markets and a portfolio of digital-first, data-driven products plus powerful live and on-demand events.</p>
<ul class="ctaWhiteList">
<li><a href="/investors/investment-case/">Why invest in Informa</a></li>
<li><a href="/investors/financial-summary/">Financial summary</a></li>
<li><a href="/investors/shareholder-centre/">Shareholder centre</a></li>
</ul>
    </div>

    <div class="campaignPromoBlockImg">
        <a href="/investors/investment-case/">
            <img src="/globalassets/investors/annual-report-2022/jt-new/homepageicon2.jpg">

        </a>
    </div>
</div>
</div><div class="col-6 ">
<div class="campaignPromoBlock imageRight">
    <h2 class="campaignPromoBlockHeader" >Our Specialist Markets</h2>

    <div class="campaignPromoBlockBody wysiwyg">
        <p>We have brands and teams operating in over a dozen specialist markets and subject matter categories.</p>
<p>This deep industry expertise keeps our products and services highly relevant and valuable to B2B, academic and professional customers.</p>
<p><a class="ctaSkyBlue" href="/about-us/working-in-specialist-markets/">Trends in our markets</a></p>
    </div>

    <div class="campaignPromoBlockImg">
        <a href="/about-us/working-in-specialist-markets/">
            <img src="/globalassets/investors/annual-report-2022/jt-new/specialist-market-homepage.png">

        </a>
    </div>
</div>
</div></div></div></div><div class='section section_edge section_wideContent' style='' ><div class='section-wrap'><div class='grid '><div class="col-12 ">
<div class="largeCarousel">
    <div class="largeCarousel-container">
        <div class="contentWrap">
            <h2 class="largeCarousel-heading" >Our Divisions</h2>
        </div>

        <div class="largeCarousel owl-carousel">

<!-- item 1 -->
<div class="largeCarousel-item" data-dot="<button>Taylor &amp; Francis</button>">

    <picture class="shelf-img">
        <!-- desktop -->
        <source media="(min-width: 48em)" srcset="/contentassets/aef278d73f04474ebf717e4e0af20e46/tfbannerhp-small.jpg">
        <!-- mobile -->
            <source srcset="/globalassets/global/homepage/tfbannerhp-mobile.jpg">

        <!-- fallback -->
        <img src="/contentassets/aef278d73f04474ebf717e4e0af20e46/tfbannerhp-small.jpg" alt=Bookshelf containing a collection of books called &#39;the basics&#39;>
    </picture>

    <div class="contentWrap">
        <div class="largeCarousel-body colour-scheme8">

            <h3 class="largeCarousel-body-title">Taylor &amp; Francis</h3>
                <h4 class="largeCarousel-body-subtitle">Academic Knowledge</h4>

            <!-- summary -->
            <div class="largeCarousel-body-summary">
                <p>Taylor &amp; Francis is one of the world's leading publishers of advanced, emergent and applied academic research and knowledge. We help to foster human progress through knowledge</p>
            </div>

            <!-- columns -->
            <div class="largeCarousel-body-cols">
                    <div class="largeCarousel-body-cols-left">
                        <strong >5m</strong>Articles published
                    </div>

                <div class="largeCarousel-body-cols-right">
                        <a href="/divisions/taylor-and-francis/" class="cta2" >
                            <h5 >Discover Taylor &amp; Francis</h5>
                            <span></span>
                        </a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- item 1 -->
<div class="largeCarousel-item" data-dot="<button>Informa Markets</button>">

    <picture class="shelf-img">
        <!-- desktop -->
        <source media="(min-width: 48em)" srcset="/contentassets/cd5b8ebf3cdd4f3f9d68d79f0087efd6/informamarkets.jpg">
        <!-- mobile -->
            <source srcset="/contentassets/cd5b8ebf3cdd4f3f9d68d79f0087efd6/informamarkets-mobile.jpg">

        <!-- fallback -->
        <img src="/contentassets/cd5b8ebf3cdd4f3f9d68d79f0087efd6/informamarkets.jpg" alt=Crowd of attendees and exhibitors mingling at an Informa Markets event>
    </picture>

    <div class="contentWrap">
        <div class="largeCarousel-body colour-scheme8">

            <h3 class="largeCarousel-body-title">Informa Markets</h3>
                <h4 class="largeCarousel-body-subtitle">Trade, Innovate, Grow</h4>

            <!-- summary -->
            <div class="largeCarousel-body-summary">
                <p>In person through exhibitions and live events, online and through data, we help businesses, buyers and suppliers in over a dozen markets worldwide to connect, trade and grow.</p>
<p>&nbsp;</p>
            </div>

            <!-- columns -->
            <div class="largeCarousel-body-cols">
                    <div class="largeCarousel-body-cols-left">
                        <strong >12+</strong>specialist markets served
                    </div>

                <div class="largeCarousel-body-cols-right">
                        <a href="/divisions/informa-markets/" class="cta2" >
                            <h5 >Discover Informa Markets</h5>
                            <span></span>
                        </a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- item 1 -->
<div class="largeCarousel-item" data-dot="<button>Informa Connect</button>">

    <picture class="shelf-img">
        <!-- desktop -->
        <source media="(min-width: 48em)" srcset="/contentassets/cacff6ef50a94cdeb19ca6a5db90f9be/bannerhp-connect.jpg">
        <!-- mobile -->
            <source srcset="/contentassets/cacff6ef50a94cdeb19ca6a5db90f9be/bannerhp-connect-mobile.jpg">

        <!-- fallback -->
        <img src="/contentassets/cacff6ef50a94cdeb19ca6a5db90f9be/bannerhp-connect.jpg" alt=Panel discussion at Informa Connect&#39;s SuperReturn International event>
    </picture>

    <div class="contentWrap">
        <div class="largeCarousel-body colour-scheme8">

            <h3 class="largeCarousel-body-title">Informa Connect</h3>
                <h4 class="largeCarousel-body-subtitle">Connect, Learn, Network</h4>

            <!-- summary -->
            <div class="largeCarousel-body-summary">
                <p>Through content-rich live and on-demand events, accredited training and specialist digital content, we provide businesses and professionals with connections and learning that create commercial edge</p>
            </div>

            <!-- columns -->
            <div class="largeCarousel-body-cols">
                    <div class="largeCarousel-body-cols-left">
                        <strong >25 years</strong>SuperReturn International has run for 25 years
                    </div>

                <div class="largeCarousel-body-cols-right">
                        <a href="/divisions/informa-connect/" class="cta2" >
                            <h5 >Discover Informa Connect</h5>
                            <span></span>
                        </a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- item 1 -->
<div class="largeCarousel-item" data-dot="<button>Informa Tech</button>">

    <picture class="shelf-img">
        <!-- desktop -->
        <source media="(min-width: 48em)" srcset="/globalassets/global/homepage/inftec-blackhat-small.jpg">
        <!-- mobile -->
            <source srcset="/globalassets/global/homepage/inftec-blackhat-mobile.jpg">

        <!-- fallback -->
        <img src="/globalassets/global/homepage/inftec-blackhat-small.jpg" alt=Large seated crowd listening to a keynote speaker at Infroma Tech&#39;s Black Hat Europe 2017 event>
    </picture>

    <div class="contentWrap">
        <div class="largeCarousel-body colour-scheme8">

            <h3 class="largeCarousel-body-title">Informa Tech</h3>
                <h4 class="largeCarousel-body-subtitle">Inform, Connect, Inspire</h4>

            <!-- summary -->
            <div class="largeCarousel-body-summary">
                <p>Informa Tech sits at the heart of the global tech community. We provide market insight through research, media and training, and market access through live events and digital demand generation services to tech businesses and professionals looking to make better tech decisions</p>
            </div>

            <!-- columns -->
            <div class="largeCarousel-body-cols">
                    <div class="largeCarousel-body-cols-left">
                        <strong >100+</strong>Leading tech brands
                    </div>

                <div class="largeCarousel-body-cols-right">
                        <a href="/divisions/informa-tech/" class="cta2" >
                            <h5 >Discover Informa Tech</h5>
                            <span></span>
                        </a>
                </div>
            </div>
        </div>
    </div>
</div>        </div>
    </div>
</div>

</div></div></div></div><div class='section section_wideContent' style='' ><div class='section-wrap'><div class='grid '><div class="col-12 ">



<div class="multiHero">
        <picture class="multiHeroImg">
            <!-- desktop -->
                <source media="(min-width: 80em)" srcset="/globalassets/investors/annual-report-2022/jt-new/wwlfbg-small-4.jpg">

            <!-- tablet -->

            <!-- mobile -->

            <!-- fallback -->
            <img src="/globalassets/investors/annual-report-2022/jt-new/wwlfbg-small-4.jpg" alt="Female Informa colleague smiling and pointing towards the camera, tracing the Informa logo with her finger">
        </picture>
    

    <div class="multiHeroBody">
        <!-- left column -->
        <div class="heroCol  position-tl textDark">

                <div class="multiHeroBodyWrap">


                        <div class="wysiwyg">
                            <h2>Life at Informa</h2>
<p class="campaignPromoBlockBody">Informa is proudly a people business.</p>
<p class="campaignPromoBlockBody">We're here to champion our colleagues. Our culture, work and benefits offer everyone a chance to be at their best.</p>
<p class="campaignPromoBlockBody">No two days are the same and we celebrate the diversity of our teams and people.</p>
<p class="campaignPromoBlockBody">But wherever and whoever you are, you can expect the freedom to bring ideas to life, work that makes a real difference to our customers and markets and the chance to join an international and inclusive community of great people.&nbsp;</p>
<p class="campaignPromoBlockBody">Join us for opportunities to build a varied career, in a company that's building for the future.&nbsp;</p>
<div style="float: left;">
<ul class="ctaWhiteList">
<li><a title="Life at Informa" href="https://lifeat.informa.com">Life at Informa</a></li>
<li><a href="/about-us/purpose-principles/">Purpose &amp; principles</a></li>
<li><a href="/talent/DiversityandInclusion/">Diversity &amp; inclusion</a></li>
<li><a href="https://careers.informa.com/">Vacancies</a></li>
</ul>
</div>
<div>&nbsp;</div>
                        </div>
                </div>

            




        </div>

        <!-- right column -->
        <div class="heroCol  position-center textDark">




<div class="promoBlock">
    
    <div class="promoBlockImage">
<a href="/overlay/?videoUrl=https://player.vimeo.com/video/818874203&videoTitle=Learn+about+Life%40Informa" data-hrefpreview="/overlay/?videoUrl=https://player.vimeo.com/video/818874203&videoTitle=Learn+about+Life%40Informa #overlay-content" class="openOverlay cta-video">            <img alt="Ingredients" src="/globalassets/investors/annual-report-2022/jt-new/lifeatinformavideo-2.png" />
                <h2 class="promoBlockTitle" >Learn about Life@Informa</h2>
</a>    </div>

</div>
            




        </div>
    </div>
</div>
</div></div></div></div><div class='section section_wideContent' style='' ><div class='section-wrap'><div class='grid '><div class="col-12 ">



<div class="multiHero">
        <picture class="multiHeroImg">
            <!-- desktop -->
                <source media="(min-width: 80em)" srcset="/contentassets/f1a7a5c69c2b422382705ce8afbe0c0c/walktheworld-2020.jpg">

            <!-- tablet -->
                <source media="(min-width: 37.5em)" srcset="/contentassets/f1a7a5c69c2b422382705ce8afbe0c0c/infnewherobannertablet.jpg">

            <!-- mobile -->
                <source srcset="/contentassets/f1a7a5c69c2b422382705ce8afbe0c0c/sustain-0cover-mob.jpg">

            <!-- fallback -->
            <img src="/contentassets/f1a7a5c69c2b422382705ce8afbe0c0c/walktheworld-2020.jpg" alt="Group of 200 Informa colleagues gathered in a park ready for a charity walk, all wearing Informa Walk the World T-shirts">
        </picture>
    

    <div class="multiHeroBody">
        <!-- left column -->
        <div class="heroCol opacity position-center textDark">

                <div class="multiHeroBodyWrap">


                        <div class="wysiwyg">
                            <h2>Sustainability</h2>
<p class="campaignPromoBlockBody">Sustainability is at the heart of how we work, serve our customers and support our communities.</p>
<p class="campaignPromoBlockBody">Through our FasterForward programme, we're embedding sustainability into all our products and operations and making an ever greater and more positive impact on the markets and communities we work in.</p>
<p class="campaignPromoBlockBody">Informa is a Carbon Neutral Company and we rank top of the global media sector in the Dow Jones Sustainability Index.&nbsp;</p>
<ul class="ctaWhiteList">
<li><a class="ctaSkyBlue" title="Faster Forward" href="/sustainability/faster-forward/">Our FasterForward programme</a></li>
<li><a title="2020 Sustainability Report" href="/sustainability/sustainable-products/" rel="noopener">Our sustainable products</a></li>
<li><a href="/sustainability/climate-impact/">Climate commitments and progress</a></li>
</ul>
                        </div>
                </div>

            




        </div>

        <!-- right column -->
        <div class="heroCol  position-center textDark">




<div class="promoBlock colour-scheme8">
    
    <div class="promoBlockImage">
            <a href="/sustainability/sustainability-reports/" >
                <img alt="2022 Sustainability Report image" src="/globalassets/investors/annual-report-2022/jt-new/srhomepageicon.png" />
                    <h2 class="promoBlockTitle" >2022 Sustainability Report</h2>
            </a>
    </div>

        <div class="promoBlockSummary" >
            <p>
                Championing Sustainability
            </p>

        </div>
</div>
            




        </div>
    </div>
</div>
</div></div></div></div></div>





<!-- FOOTER -->
<footer class="footer">
    <div class="wrap">
        <div class="footerTopLinks">
                <ul class="footerLinks">
            <li>
                <a href="/contact-us/"
                   class="cta-contact" 
                   >
                    Contact Us
                </a>
            </li>
            <li>
                <a href="/contact-us/office-locator/"
                   class="cta-location" 
                   >
                    Office Locator
                </a>
            </li>
    </ul>



                <ul class="socialLinks">
            <li>
                <a title="Email Alerts" 
                   class="icon i-email" 
                   href="/generic-content/latest-informa-news/" 
                   >
                Email Alerts</a>
            </li>
            <li>
                <a title="LinkedIn" 
                   class="icon i-linkedIn" 
                   href="https://www.linkedin.com/company/informa" 
                   target=_blank rel=noopener>
                LinkedIn</a>
            </li>
            <li>
                <a title="Twitter" 
                   class="icon i-twitter" 
                   href="http://twitter.com/informaplc" 
                   target=_blank rel=noopener>
                Twitter</a>
            </li>
    </ul>

        </div>
        <div class="footerMiddleLinks">
                <ul>
                        <li><a href="/about-us/">About Us</a></li>
                        <li><a href="/divisions/">Divisions</a></li>
                        <li><a href="/investors/">Investors</a></li>
                        <li><a href="/sustainability/">Sustainability</a></li>
                        <li><a href="/talent/">Talent</a></li>
                        <li><a href="/media/">Media</a></li>
                        <li><a href="/contact-us/">Contact</a></li>
                </ul>
        </div>
        <div class="footerBottomLinks">
                <ul>
                        <li>
                            

<a href="/generic-content/accessibility/" target="_top" rel=&quot;noopener&quot;>Accessibility Statement</a>

                        </li>
                        <li>
                            

<a href="/generic-content/terms--conditions/" target="_top" rel=&quot;noopener&quot;>Terms &amp; Conditions</a>

                        </li>
                        <li>
                            

<a href="/privacy-policy/" rel=&quot;noopener&quot;>Privacy Policy</a>

                        </li>
                        <li>
                            

<a href="/generic-content/cookie-policy/" rel=&quot;noopener&quot;>Cookie Policy</a>

                        </li>
                        <li>
                            

<a href="/generic-content/modern-slavery-statement/" target="_blank" rel=&quot;noopener&quot;>Modern Slavery Statement</a>

                        </li>
                        <li>
                            

<a href="/site-map/" rel=&quot;noopener&quot;>Site Map</a>

                        </li>
                </ul>

                <p class="registerText">Informa PLC registered in England &amp; Wales with number 8860726, registered office and head office 5 Howick Place, London, SW1P 1WG, UK. Lloyd&#39;s is the registered trade mark of the Society incorporated by the Lloyd&#39;s Act 1871 by the name of Lloyd&#39;s.</p>

                <p>&#169; 2024 Informa PLC</p>
        </div>

        <!-- mobile home/top icons -->
        <div class="mobilefooter">
            <ul>
                <li class="toHome"><a href="/">Home</a></li>
                <li class="toTop"><a href="#top" class="js-scrollTop">Go to top</a></li>
            </ul>
        </div>
        <!-- end footer -->

    </div>
</footer>
    </div>
    <script type="text/javascript" data-ot-ignore src="https://dl.episerver.net/13.5.8/epi-util/find.js"></script>
<script type="text/javascript" data-ot-ignore>
if(FindApi){var api = new FindApi();api.setApplicationUrl('/');api.setServiceApiBaseUrl('/find_v2/');api.processEventFromCurrentUri();api.bindWindowEvents();api.bindAClickEvent();api.sendBufferedEvents();}
</script>




    <script src="/static/js/app.js" data-ot-ignore></script>

    
</body>
</html>
