"use strict";(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["loader.IconLabelHandler"],{49898:function _(e,t,n){n.d(t,{Z:function Z(){return b;}});var r=n(709249),i=n(887371),a=n(545754),o=n(486906),c=n(202784),s=n(706555),l=n(882392),u=n(700400),d=n(973186),f=n(488809),p=n(24949),m=n(392160),g=n(157659),h=function h(e,t){return t.entityId&&g.ZP.select(e,t.entityId)||void 0;},Z=function Z(e){return"/".concat(e.screen_name);},v=function v(e){return e.name;};var y=(0,m.Z)().propsFromState(function(){return{user:h,badging:(0,p.P1)(h,function(e){return e?{displayContext:"content",isBlueVerified:e.is_blue_verified,isProtected:e["protected"],isVerified:e.verified,verifiedType:e.verified_type,translatorType:e.translator_type,affiliateBadgeInfo:e.highlightedLabel}:void 0;})};}).adjustStateProps(function(e){var t=e.badging,n=e.user;return{badging:t,link:n&&Z(n),screenName:n&&n.screen_name,text:n&&v(n)||""};});var w=function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments);}return(0,i.Z)(n,[{key:"render",value:function value(){var e=this.props,t=e.color,n=e.link,r=e.onClick,i=e.screenName,a=e.text,o=e.weight,l=e.withHashflags,u=c.createElement(s.Z.TextFragment,{color:t,link:n,onClick:r,style:E.wordBreak,weight:o,withHashflags:l},a,this._renderBadges());return i?c.createElement(f.Z,{screenName:i},u):u;}},{key:"_renderBadges",value:function value(){var e=this.props.badging;return e?c.createElement(l.ZP,{style:E.badges},c.createElement(u.Z,e)):null;}}]),n;}(c.PureComponent),E=d.Z.create(function(e){return{wordBreak:{wordBreak:"break-word",display:"inline-flex",flexWrap:"wrap"},badges:{position:"relative",top:1}};});var b=y(w);},119884:function _(e,t,n){n.d(t,{Z:function Z(){return _Z;}});var r=n(807896),i=n(709249),a=n(887371),o=n(545754),c=n(486906),s=n(202784),l=n(706555),u=n(973186),d=n(991584),f=n(49898),p="Center",m="Natural",g=function(e){(0,o.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments);}return(0,a.Z)(n,[{key:"render",value:function value(){var e=this.props,t=e.accessibilityRole,n=e.alignment,i=e.color,a=e.entities,o=e.forceAutoTextDirection,c=e.nativeID,u=e.onEntityClick,m=e.rtl,g=e.size,Z=e.style,v=e.text,y=e.weight,w=e.withHashflags,E=n===p?"center":void 0,b=o?"auto":m?"rtl":"ltr";return s.createElement(l.Z,{accessibilityRole:t,align:E,color:i,dir:b,entities:a,nativeID:c,onEntityClick:u,renderFragment:{user:function user(e,t){return s.createElement(f.Z,(0,r.Z)({},e,{color:"text",entityId:t.id}));},url:function url(e,t){return s.createElement(l.Z.TextFragment,(0,r.Z)({},e,{link:(0,d.s9)(t)}));}},size:g,style:[h.hideOverflow,Z],text:v,weight:y,withHashflags:w});}}]),n;}(s.PureComponent);g.defaultProps={alignment:m};var h=u.Z.create(function(e){return{hideOverflow:{overflow:"hidden"}};});var _Z=g;},729042:function _(e,t,n){n.r(t),n.d(t,{"default":function _default(){return y;}});var r=n(316742),i=n(539928),a=n(202784),o=n(949758),c=n(973186),s=n(855036),l=n(267267),u=n(437556),d=n(673707),f=n(437324),p=n(78884),m=n(119884),g=function g(e){switch(e){case p.Z.BALLOON_STROKE:return a.createElement(s["default"],{style:Z.icon});case p.Z.CALENDAR:return a.createElement(l["default"],{style:Z.icon});case p.Z.EYE_OFF:return a.createElement(u["default"],{style:Z.icon});case p.Z.LOCATION_STROKE:return a.createElement(d["default"],{style:Z.icon});case p.Z.SAFETY:return a.createElement(f["default"],{style:Z.icon});}};function h(e){var t=e.entry.content,n=t.icon,r=t.iconLabelText,i=a.useMemo(function(){return[{label:a.createElement(m.Z,{entities:r.entities,style:Z.textItem,text:r.text}),decoration:g(n)}];},[n,r]);return a.createElement(o.Z,{containerStyle:Z.container,items:i});}var Z=c.Z.create(function(e){return{icon:{height:e.spaces.space24,width:e.spaces.space24,marginEnd:e.spaces.space16,color:e.colors.text},container:{paddingHorizontal:e.componentDimensions.gutterHorizontal},textItem:{textAlign:"start"}};});var v=a.memo(h);var y=i.iH({component:v,isFocusable:(0,r.Z)(!0)}).getHandler();}}]);

//# sourceMappingURL=loader.IconLabelHandler.5eb9e2ba.js.map></path>
        </svg>
    </span>  
        </li-icon>
        <div class="artdeco-global-alert__responsive-container">
            <h2>LinkedIn respects your privacy</h2>
          <div class="artdeco-global-alert__responsive-content-container">
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
      
<!---->      <