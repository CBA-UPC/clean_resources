"use strict";(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["shared~ondemand.ParticipantReaction~ondemand.EmojiPicker"],{267006:(e,i,t)=>{t.d(i,{Z:()=>d});var n=t(202784),o=t(273487),a=t(973186),r=t(272873),s=t(287436);var c=a.Z.create((function(e){return{root:{height:r.u8.EmojiHeight,width:r.u8.EmojiWidth}}}));const d=function(e){var i=e.accessibilityLabel,t=e.emoji,a=e.skinTone,r=e.style,d=(0,s.al)(t,a);return d?n.createElement(o.Z,{accessibilityLabel:i,alt:t.name,draggable:!1,resizeMode:"stretch",source:d,style:[c.root,r]}):null}},272873:(e,i,t)=>{t.d(i,{W7:()=>f,WD:()=>h,Zx:()=>m,c0:()=>v,u8:()=>l,wN:()=>d});var n,o,a=t(256666),r=t(645184),s=t.n(r),c=t(973186),d={None:"none",Light:"light",MediumLight:"medium-light",Medium:"medium",MediumDark:"medium-dark",Dark:"dark"},u=(n={},(0,a.Z)(n,d.Light,"1f3fb"),(0,a.Z)(n,d.MediumLight,"1f3fc"),(0,a.Z)(n,d.Medium,"1f3fd"),(0,a.Z)(n,d.MediumDark,"1f3fe"),(0,a.Z)(n,d.Dark,"1f3ff"),n),m=(o={},(0,a.Z)(o,d.None,{id:d.None,name:s().ff3dd27c,color:"#FFDC5D"}),(0,a.Z)(o,d.Light,{codepoint:u[d.Light],id:d.Light,name:s().b554fcf4,color:"#F7DECE"}),(0,a.Z)(o,d.MediumLight,{codepoint:u[d.MediumLight],id:d.MediumLight,name:s().j590b148,color:"#F3D2A2"}),(0,a.Z)(o,d.Medium,{codepoint:u[d.Medium],id:d.Medium,name:s().e7d4ee86,color:"#D5AB88"}),(0,a.Z)(o,d.MediumDark,{codepoint:u[d.MediumDark],id:d.MediumDark,name:s().ia423ebc,color:"#AF7E57"}),(0,a.Z)(o,d.Dark,{codepoint:u[d.Dark],id:d.Dark,name:s().a2cf0942,color:"#7C533E"}),o),f={search:s().j824dc06,notFoundHeader:s().fffb3384,notFoundMessage:s().j3d20752,skintext:s().d67ad796,clear:s().e6388bfa,recentCategoryName:s().j7c67eca,searchCategoryName:s().da539d38},l={EmojiWidth:c.Z.theme.spaces.space20,EmojiHeight:c.Z.theme.spaces.space20,EmojiGutter:c.Z.theme.spaces.space4},h={Search:"search",Recent:"recent",People:"people",Nature:"nature",Foods:"foods",Activity:"activity",Places:"places",Objects:"objects",Symbols:"symbols",Flags:"flags",Custom:"custom"},v=9},738958:(e,i,t)=>{t.d(i,{W:()=>c});t(477950),t(248319),t(136728),t(606710),t(94908);var n=t(674428),o={name:"a",keywords:"j",sprite_position:"k",skin_variations:"l"},a={unified:"key",skin_tone:"d",sprite_position:"k"},r=function(e){var i=[],t=function(e,t){e&&(Array.isArray(e)?e:[e]).forEach((function(e){(t?e.split(/[-|_|\s]+/):[e]).forEach((function(e){var t=e.toLowerCase();-1===i.indexOf(t)&&i.push(t)}))}))};return t(e.short_names,!0),t(e.name,!0),t(e.keywords,!1),i.join(",")},s=function(e,i){for(var t in i)e[t]=e[i[t]],delete e[i[t]]},c=function(e){var i=JSON.parse(JSON.stringify(e));for(var t in i.compressed=!1,i.emojis){var c=i.emojis[t];s(c,o),c.id=t,c.unified=t,c.short_names=[t],c.text||(c.text=""),c.search=r(c),c.skin_variations&&(c.skin_variations.forEach((function(e){s(e,a)})),c.skin_variations=(0,n.Z)(c.skin_variations,(function(e){for(var i=e.skin_tone,t=i[0],n=1;n<i.length;n++)t+="+".concat(i[n]);return t})))}return i}},287436:(e,i,t)=>{t.d(i,{A1:()=>c,Nw:()=>s,XF:()=>a,al:()=>r,up:()=>d});var n=t(395871),o=function(e,i){var t=i&&i.codepoint;if(!(t&&a(e.skin_variations,t)>1))return t&&e.skin_variations&&e.skin_variations[t]?e.skin_variations[t]:void 0},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0,t=0;for(var n in e)i&&n.indexOf(i)>=0&&(t+=1);return t},r=function(e,i){var t=(o(e,i)||e).unified;return n.Z.getTwemojiUrl(t)},s=function(e,i){var t=e.name,n=e.short_names,a=e.text,r=o(e,i),s=r?r.unified:e.unified;return{id:e.id||n[0],name:t,text:a||s,unified:s}},c=function(){return"emojiPicker-".concat(Math.random())};function d(e,i){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(e&&i){var n=e.getBoundingClientRect(),o=n.height,a=n.top,r=a+t,s=i.getBoundingClientRect(),c=s.bottom,d=s.top,u=o+a;if(d<r){var m=r-d;e.scrollTop=Math.max(0,e.scrollTop-m)}else if(d>u||c>u){var f=c-u;e.scrollTop=Math.max(0,e.scrollTop+f)}}}}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web-legacy/shared~ondemand.ParticipantReaction~ondemand.EmojiPicker.1ea1181a.js.mapl-alert__responsive-content-container">
            <div class="artdeco-global-alert__content">
              <p>LinkedIn and 3rd parties use essential and non-essential cookies to provide, secure, analyze and improve our Services, and to show you relevant ads (including <b>professional and job ads</b>) on and off LinkedIn. Learn more in our <a href="https://www.linkedin.com/legal/cookie-policy">Cookie Policy</a>.</p><p>Select Accept to consent or Reject to decline non-essential cookies for this use. You can update your choices at any time in your <a href="https://www.linkedin.com/mypreferences/g/guest-cookies">settings</a>.</p>
            </div>
          </div>
          <div class="artdeco-global-alert-action__wrapper">
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
  
  

        
        <div class="products-serp-layout">
          
    
    
    
    
    
    
    


<!---->
    
    
    <div class="base-serp-page">
        
    

    <a href="#main-content" class="skip-link btn-md btn-primary absolute z-11 -top-[100vh] focus:top-0">
      Skip to main content
    </a>
  
      <header class="base-serp-page__header global-alert-offset">
          

    
    
    

    <nav class="nav pt-1.5 pb-2 flex items-center justify-between relative flex-nowrap babybear:flex-wrap babybear:py-1.5
        " aria-label="Primary">

<!---->
      <a href="/?trk=products_seo_search_nav-header-logo" class="nav__logo-link link-no-visited-state z-1 mr-auto babybear:z-0 babybear:mr-0 babybear:flex-1 hover:no-underline focus:no-underline active:no-underline
          " data-tracking-control-name="products_seo_search_nav-header-logo" data-tracking-will-navigate>
          
                
          
    
    <span class="sr-only">LinkedIn</span>
<!---->      <icon class="block text-color-brand w-[84px] h-[21px] papabear:w-[135px] papabear:h-[34px]
          " data-test-id="nav-logo" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/8fkga714vy9b2wk5auqo5reeb"></icon>
  
      
            
      </a>

        

    
    
    
    

    <section class="search-bar relative flex flex-grow h-[40px] bg-cool-gray-20 min-w-0 max-w-full mx-4 rounded-sm babybear:mx-0 babybear:mb-1.5 babybear:bg-color-transparent babybear:w-full babybear:flex babybear:flex-wrap
        " data-current-search-type="JOBS">
      <button class="search-bar__placeholder papabear:hidden mamabear:hidden text-input w-full mt-1.5 !pl-[14px] border-1 border-solid border-color-border-faint rounded-[2px] h-[40px] max-h-[40px] flex items-center overflow-hidden cursor-text" data-tracking-control-name="products_seo_search_search-switcher-opener">
        <icon class="text-color-icon w-3 h-3 mr-1" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/397vrsk6op88l4981ji1xe1qt"></icon>
        <div class="search-bar__full-placeholder font-sans text-md text-color-text max-w-[calc(100%-40px)] text-left whitespace-nowrap overflow-hidden text-ellipsis">
<!----><!----><!---->        </div>
        <span class="sr-only">Expand search</span>
      </button>
      
      
        

    
    
    
    

    <div class="switcher-tabs__trigger-and-tabs babybear:flex">
        <button aria-expanded="false" class="switcher-tabs__placeholder flex !h-full !py-0 !pl-2 !pr-1.5 border-r-1 border-solid border-r-color-border-faint babybear:hidden
            tab-md papabear:tab-vertical mamabear:tab-vertical papabear:justify-start mamabear:justify-start cursor-pointer" data-tracking-control-name="products_seo_search_switcher-tabs-placeholder">
          <span class="switcher-tabs__placeholder-text m-auto"></span>
          <icon class="switcher-tabs__caret-down-filled onload pointer-events-none block my-auto min-h-[24px] min-w-[24px] h-[24px] babybear:hidden" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/7asbl4deqijhoy3z2ivveispv"></icon>
        </button>

        <div class="switcher-tabs hidden z-[1] w-auto min-w-[160px] mb-1.5 py-1 absolute top-[48px] left-0 border-solid border-1 border-color-border-faint papabear:container-raised mamabear:container-raised babybear:static babybear:w-[100vw] babybear:h-[48px] babybear:p-0">
          <ul class="switcher-tabs__list flex flex-1 items-stretch papabear:flex-col mamabear:flex-col" role="tablist">
              <li class="switcher-tabs__tab h-[44px] babybear:basis-1/2" aria-selected="true" role="tab">
                <button class="switcher-tabs__button w-full h-full
                    tab-md papabear:tab-vertical mamabear:tab-vertical papabear:justify-start mamabear:justify-start cursor-pointer
                    tab-selected" data-switcher-type="JOBS" data-tracking-control-name="products_seo_search_switcher-tabs-jobs-search-switcher" type="button">
                  Jobs
                </button>
              </li>
              <li class="switcher-tabs__tab h-[44px] babybear:basis-1/2" aria-selected="false" role="tab">
                <button class="switcher-tabs__button w-full h-full
                    tab-md papabear:tab-vertical mamabear:tab-vertical papabear:justify-start mamabear:justify-start cursor-pointer
                    " data-switcher-type="PEOPLE" data-tracking-control-name="products_seo_search_switcher-tabs-people-search-switcher" type="button">
                  People
                </button>
              </li>
              <li class="switcher-tabs__tab h-[44px] babybear:basis-1/2" aria-selected="false" role="tab">
                <button class="switcher-tabs__button w-full h-full
                    tab-md papabear:tab-vertical mamabear:tab-vertical papabear:justify-start mamabear:justify-start cursor-pointer
                    " data-switcher-type="LEARNING" data-tracking-control-name="products_seo_search_switcher-tabs-learning-search-switcher" type="button">
                  Learning
                </button>
              </li>
          </ul>

          <button aria-label="Close" class="switcher-tabs__cancel-btn papabear:hidden mamabear:hidden block w-6 h-6 m-auto text-color-text-low-emphasis" data-tracking-control-name="products_seo_search_switcher-tabs-cancel-search-switcher" type="button">
            <icon class="switcher-tabs__cancel-icon block w-3 h-3 m-auto onload" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cs55jggk4p3uqh9ozxdmpvjg7"></icon>
          </button>
        </div>
    </div>
  

        

    
    
    
    

    

    

    <section class="base-search-bar w-full h-full" data-searchbar-type="PEOPLE">
      <form class="base-search-bar__form w-full flex babybear:mx-mobile-container-padding babybear:flex-col" role="search" action="/pub/dir" data-tracking-control-name="products_seo_search_people-search-bar_base-search-bar-form">
        
          
      
    

    <section class="dismissable-input text-input !pr-3 bg-color-transparent flex items-center h-[40px] min-w-0 relative babybear:w-full babybear:mb-1 search-input">
      <input aria-label="First Name" name="firstName" class="dismissable-input__input font-sans text-md text-color-text bg-color-transparent flex items-center flex-1 focus:outline-none" placeholder="First Name" autocomplete="on" data-tracking-control-name="products_seo_search_people-search-bar_first-name_dismissable-input" maxlength="500" type="search">
      
        <button class="dismissable-input__button text-color-text h-[40px] min-w-[24px] w-[24px] -mr-2 opacity-0 transition-opacity duration-[0.1s] disabled:invisible focus:opacity-100" data-tracking-control-name="products_seo_search_people-search-bar_first-name_dismissable-input-clear" type="button">
          <label class="sr-only">Dismiss</label>
          <icon class="dismissable-input__button-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cs55jggk4p3uqh9ozxdmpvjg7"></icon>
        </button>
    </section>
  
  
          
      
    

    <section class="dismissable-input text-input !pr-3 bg-color-transparent flex items-center h-[40px] min-w-0 relative babybear:w-full babybear:mb-1 search-input">
      <input aria-label="Last Name" name="lastName" class="dismissable-input__input font-sans text-md text-color-text bg-color-transparent flex items-center flex-1 focus:outline-none" placeholder="Last Name" autocomplete="on" data-tracking-control-name="products_seo_search_people-search-bar_last-name_dismissable-input" maxlength="500" type="search">
      
        <button class="dismissable-input__button text-color-text h-[40px] min-w-[24px] w-[24px] -mr-2 opacity-0 transition-opacity duration-[0.1s] disabled:invisible focus:opacity-100" data-tracking-control-name="products_seo_search_people-search-bar_last-name_dismissable-input-clear" type="button">
          <label class="sr-only">Dismiss</label>
          <icon class="dismissable-input__button-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cs55jggk4p3uqh9ozxdmpvjg7"></icon>
        </button>
    </section>
  
  
      
        <input name="trk" value="products_seo_search_people-search-bar_search-submit" type="hidden">
        <button class="base-search-bar__submit-btn block basis-[40px] flex-shrink-0 cursor-pointer babybear:invisible babybear:ml-[-9999px] babybear:w-[1px] babybear:h-[1px]" aria-label="Search" data-tracking-control-name="products_seo_search_people-search-bar_base-search-bar-search-submit" type="submit">
          <icon class="base-search-bar__search-icon onload mx-auto" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cb5bsr4tsn2r4sjg9e3ls4tjl"></icon>
        </button>
      </form>
    </section>
  
  

        

    
    
    
    

    

    

    <section class="base-search-bar w-full h-full" data-searchbar-type="JOBS">
      <form class="base-search-bar__form w-full flex babybear:mx-mobile-container-padding babybear:flex-col" role="search" action="/jobs/search" data-tracking-control-name="products_seo_search_jobs-search-bar_base-search-bar-form">
        
        

    
    
    

    <code id="i18n_aria_live_text_no-suggestions" style="display: none"><!--"No suggestions found"--></code>
    <code id="i18n_aria_live_text_one-suggestion" style="display: none"><!--"One Suggestion. Use up and down keys to navigate"--></code>
    <code id="i18n_aria_live_text_multiple-suggestions" style="display: none"><!--"Multiple Suggestions. Use up and down keys to navigate"--></code>

    
    

    <section class="dismissable-input text-input !pr-3 bg-color-transparent flex items-center h-[40px] min-w-0 relative babybear:w-full babybear:mb-1 typeahead-input keywords-typeahead-input text-input">
      <input aria-autocomplete="list" aria-controls="job-search-bar-keywords-typeahead-list" aria-haspopup="listbox" aria-label="Search job titles or companies" name="keywords" class="dismissable-input__input font-sans text-md text-color-text bg-color-transparent flex items-center flex-1 focus:outline-none" placeholder="Search job titles or companies" autocomplete="off" data-tracking-control-name="products_seo_search_dismissable-input" maxlength="500" role="combobox" type="search">
      
<!---->      <div class="typeahead-input__dropdown container-lined absolute top-[calc(100%+3px)] left-0 