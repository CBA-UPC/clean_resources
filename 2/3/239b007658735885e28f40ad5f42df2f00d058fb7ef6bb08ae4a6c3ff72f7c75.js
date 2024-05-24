"use strict";(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["loader.TileHandler","icons/IconArrowRightCircleFill-js"],{684049:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(316742),i=n(539928),a=n(156649);const c=i.iH({component:a.Z,shouldDisplayBorder:(0,r.Z)(!1),defaultScribeNamespace:{element:"tile"}}).getHandler()},149275:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(316742),i=n(539928),a=n(202784),c=n(101830),o=n(882392),l=n(973186),s=n(686984),u=l.Z.create((function(e){var t="calc(2 * ".concat(e.spaces.space32,")");return{upper:{height:t,justifyContent:"flex-end"},lower:{height:t,justifyContent:"flex-start"},container:{alignItems:"center"},icon:{height:e.spaces.space32,width:e.spaces.space32}}}));const d=function(e){var t=e.containerStyle,n=e.icon,r=void 0===n?c.default:n,i=e.iconColor,d=void 0===i?"primary":i,m=e.link,p=e.onClick,f=e.text,b=a.useMemo((function(){return{color:l.Z.theme.colors[d]}}),[d]);return a.createElement(s.Z,{accessibilityLabel:f,containerStyle:[u.container,t],link:m,lower:a.createElement(o.ZP,{style:b},f),onClick:p,stackLayoutLowerStyle:u.lower,stackLayoutUpperStyle:u.upper,upper:a.createElement(r,{style:[u.icon,b]})})};var m=n(991584),p=n(698858),f=n(954412),b=function(e){var t=e.entry,n=t.content.content.callToAction&&t.content.content.callToAction.text||"",r=t.content.url,i=a.useMemo((function(){return r?(0,m.s9)(r):void 0}),[r]),c=(0,p.U)(t,!!i).handleTileClick;return i?a.createElement(d,{containerStyle:f.g.containerStyle,link:i,onClick:c,text:n}):null};const v=i.iH({component:b,shouldDisplayBorder:(0,r.Z)(!1),defaultScribeNamespace:{element:"tile"}}).getHandler()},156649:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(202784),i=n(473757),a=n(709249),c=n(887371),o=n(545754),l=n(486906),s=(n(200634),n(325686)),u=n(35953),d=n(882392),m=n(744329),p=n(932430),f=n(973186),b=n(481142),v=n(695995),y=n(686984),g=function(e){(0,o.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var i=arguments.length,c=new Array(i),o=0;o<i;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c)))._renderTileLower=function(){return e.props.attribution?e._renderUserAvatar():e._renderEventDescription()},e._renderTileUpper=function(){var t=e.props,n=t.accessibilityLabel,i=t.badge,a=t.image;return a?r.createElement(r.Fragment,null,r.createElement(u.Z,{accessibilityLabel:n,aspectMode:m.Z.COVER,image:a}),i?r.createElement(p.Z,{align:"left",background:i.backgroundColor,bold:!0},i.text):null):null},e._renderUserAvatar=function(){var t=e.props.attribution;return t?r.createElement(s.Z,{style:h.accountContainer},r.createElement(s.Z,{style:h.avatarContainer},r.createElement(b.default,{accessibilityHidden:!0,focusable:!1,size:"xLarge",uri:t.profile_image_url_https,withLink:!1})),r.createElement(s.Z,{style:h.groupContainer},r.createElement(v.Z,{isBlueVerified:t.is_blue_verified,isVerified:t.verified,name:t.name,nameSize:"subtext2",screenName:t.screen_name,verifiedType:t.verified_type,weight:"bold",withLink:!1,withScreenName:!0,withStackedLayout:!0}))):null},e._renderEventDescription=function(){var t=e.props,n=t.description,i=t.rightControl;return n?r.createElement(s.Z,{style:h.eventDescription},r.createElement(d.ZP,{numberOfLines:2,size:"subtext2",style:{width:"100%"},weight:"bold"},n),r.createElement(s.Z,{style:h.rightControl},i||null)):null},e}return(0,c.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.accessibilityLabel,n=e.containerStyle,i=e.link,a=e.onClick;return r.createElement(y.Z,{accessibilityLabel:t,containerStyle:n,link:i,lower:this._renderTileLower(),onClick:a,upper:this._renderTileUpper(),withInteractiveStyling:!0})}}]),n}(r.Component),h=f.Z.create((function(e){return{accountContainer:{flexDirection:"row"},avatarContainer:{marginEnd:e.spaces.space4},rightControl:{marginTop:e.spaces.space2},groupContainer:{flexDirection:"row",flexShrink:1},eventDescription:{flexDirection:"row"}}}));const k=g;var Z=n(991584),C=n(101451),w=n(698858),E=n(954412),S=n(392160),L=n(157659),_=function(e,t){if(t.entry.content.content.broadcast)return L.ZP.select(e,t.entry.content.content.broadcast.userId)};var x=function(e){var t,n,a,c=e.broadcastUser,o=e.entry,l=e.feedbackItems,s=o.content,u=s.content,d=s.image,m=s.url;u.standard?(t=u.standard.title,n=u.standard.badge,a=t):u.broadcast&&(t=c&&"".concat(c.name," ").concat(c.screen_name),n=u.broadcast.badge);var p=r.useMemo((function(){var e,t,r=null===(e=n)||void 0===e?void 0:e.text;return r?{backgroundColor:(0,i.FZ)((null===(t=n)||void 0===t?void 0:t.backgroundColorName)||"")||void 0,text:r}:void 0}),[n]),f=(0,w.U)(o).handleTileClick,b=r.useMemo((function(){return m?(0,Z.s9)(m):""}),[m]),v=r.useMemo((function(){return a?r.createElement(C.Z,{feedbackItems:l}):null}),[a,l]);return r.createElement(k,{accessibilityLabel:t||"",attribution:c,badge:p,containerStyle:E.g.containerStyle,description:a,image:d,link:b,onClick:f,rightControl:v})};const T=(0,S.Z)().propsFromState((function(){return{broadcastUser:_}}))(r.memo(x))},399653:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(316742),i=n(539928),a=n(156649);const c=i.iH({component:a.Z,shouldDisplayBorder:(0,r.Z)(!1),defaultScribeNamespace:{element:"tile"}}).getHandler()},698858:(e,t,n)=>{n.d(t,{U:()=>c});var r=n(202784),i=n(676275),a=n(460673),c=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=(0,a.z)(),c=function(e){var t=e.itemMetadata.clientEventInfo,n=i.Z.getAllSurfaceDetails(t);return n?{items:[n]}:void 0}(e);return r.useEffect((function(){t&&n.scribe({action:"impression",data:c})}),[]),{handleTileClick:r.useCallback((function(){n.scribe({action:"click",data:c})}),[n,c])}}},648050:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(316742),i=n(539928),a=n(202784),c=n(154048),o=n(991584),l=n(410381),s=n(698858),u=n(954412),d=function(e){var t=e.entry,n=t.content.content.scoreCard&&t.content.content.scoreCard.scoreEventSummary.scoreEvent||{},r=n.category,i=n.eventState,d=n.gameClock,m=n.gameClockPeriod,p=n.participants,f=n.startTimeMillis,b=n.winnerId,v=(0,s.U)(t).handleTileClick,y=t.content.url,g=a.useMemo((function(){return y?(0,o.s9)(y):""}),[y]);return a.createElement(c.Z,{accessibilityLabel:(0,l.bH)(r,i,p,m,b),category:r,containerStyle:u.g.containerStyle,gameClock:d,gameClockPeriod:m,gameState:i,link:g,onClick:v,startTimeMillis:f,teams:p,winnerId:b})};const m=a.memo(d);const p=i.iH({component:m,shouldDisplayBorder:(0,r.Z)(!1),isFocusable:(0,r.Z)(!0)}).getHandler()},954412:(e,t,n)=>{n.d(t,{g:()=>r});var r=n(973186).Z.create((function(e){return{containerStyle:{width:"calc(".concat(e.spaces.space36,"*5)")}}}))},101451:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(202784),i=n(244173),a=n(973186);n(315735),n(73439),n(906886);const c=(0,n(656499).Z)({loader:function(){return n.e("shared~bundle.Birdwatch~bundle.TwitterArticles~bundle.Grok~bundle.SettingsProfessionalProfileProfileSpotlight").then(n.bind(n,968767))}});var o=n(460673),l=n(160007),s=a.Z.create((function(e){return{curationControl:{marginStart:e.spaces.space20}}}));const u=(0,o.Z)((function(e){var t=e.analytics,n=e.feedbackItems,a=e.isDisplayedOnMedia,o=r.useCallback((function(e){return n?r.createElement(c,{actionItems:n,onClose:e}):null}),[n]),u=r.useCallback((function(){return t.scribe({element:"caret",action:"click"})}),[t]);return n&&n.length>0?r.createElement(i.Z,{onClick:u,renderActionMenu:o,style:s.curationControl,testID:l.Z.caret,withDarkBackground:a}):null}))},101830:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(133028),i=n(202784),a=n(890601),c=n(783427),o=n(493987),l=n(473569),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=i.useContext(o.Z),n=(0,c.Z)().direction;return(0,a.Z)("svg",(0,r.Z)((0,r.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[l.Z.root,e.style,t&&l.Z.iconRTL],viewBox:"0 0 24 24",children:i.createElement("g",null,i.createElement("path",{d:"M12 1.75C6.339 1.75 1.75 6.34 1.75 12S6.339 22.25 12 22.25 22.25 17.66 22.25 12 17.661 1.75 12 1.75zm.957 14.71l-1.414-1.42L13.586 13H7v-2h6.586l-2.043-2.04 1.414-1.42L17.414 12l-4.457 4.46z"}))}),{writingDirection:n})};s.metadata={width:24,height:24};const u=s}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web-legacy/loader.TileHandler.4e01c6da.js.maplayed-url="https://static.licdn.com/aero-v1/sc/h/ddi43qwelxeqjxdd45pe3fvs1" data-svg-class-name="loader__icon-svg--large fill-currentColor h-[60px] min-h-[60px] w-[60px] min-w-[60px]"></icon>
      </div>
    </div>
  
    </form>

    <script data-delayed-url="https://static.licdn.com/aero-v1/sc/h/8m736dfzskmdn6bwwqz67iiki" data-module-id="google-gsi-lib"></script>
    <code id="googleAuthLibraryPath" style="display: none"><!--"https://static.licdn.com/aero-v1/sc/h/8m736dfzskmdn6bwwqz67iiki"--></code>
    <code id="isLinkedInAppWebView" style="display: none"><!--false--></code>
    <code id="isTermsAndConditionsSkipEnabledOneTap" style="display: none"><!--true--></code>
  
          
    
    
    

    

    
      <code id="isClsFixActive" style="display: none"><!--true--></code>
    <div class="base-serp-page">
        
    

    <a href="#main-content" class="skip-link btn-md btn-primary absolute z-11 -top-[100vh] focus:top-0">
      Skip to main content
    </a>
  
      <header class="base-serp-page__header global-alert-offset">
          

    
    
    
    

    <nav class="nav pt-1.5 pb-2 flex items-center justify-between relative flex-nowrap mamabear:flex-wrap mamabear:gap-y-1 babybear:flex-wrap babybear:py-1.5
        " aria-label="Primary">

      <a href="/?trk=public_jobs_nav-header-logo" class="nav__logo-link link-no-visited-state z-1 mr-auto babybear:z-0 babybear:mr-0 babybear:flex-1 hover:no-underline focus:no-underline active:no-underline" data-tracking-control-name="public_jobs_nav-header-logo" data-tracking-will-navigate>
          
                
          
    
    <span class="sr-only">LinkedIn</span>
<!---->      <icon class="block text-color-brand w-[84px] h-[21px] papabear:w-[135px] papabear:h-[34px]
          " data-test-id="nav-logo" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/8fkga714vy9b2wk5auqo5reeb"></icon>
  
      
            
      </a>

        

    
    
    
    
    

    <section class="search-bar relative flex flex-grow h-[40px] bg-cool-gray-20 min-w-0 max-w-full mx-4 rounded-sm babybear:mx-0 babybear:mb-1.5 babybear:bg-color-transparent babybear:w-full babybear:flex babybear:flex-wrap
        " data-current-search-type="JOBS">
      <button class="search-bar__placeholder papabear:hidden mamabear:hidden text-input w-full mt-1.5 !pl-[14px] border-1 border-solid border-color-border-faint rounded-[2px] h-[40px] max-h-[40px] flex items-center overflow-hidden cursor-text" data-tracking-control-name="public_jobs_search-switcher-opener">
        <icon class="text-color-icon w-3 h-3 mr-1" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/397vrsk6op88l4981ji1xe1qt"></icon>
        <div class="search-bar__full-placeholder font-sans text-md text-color-text max-w-[calc(100%-40px)] text-left whitespace-nowrap overflow-hidden text-ellipsis">
<!---->              Administrative Assistant in Badalona, Catalonia, Spain
<!----><!---->        </div>
        <span class="sr-only">Expand search</span>
      </button>
      
    

      
        

    
    
    
    
    
    
    

    <div class="switcher-tabs__trigger-and-tabs babybear:flex">
        <button aria-expanded="false" class="switcher-tabs__placeholder flex !h-full !py-0 !pl-2 !pr-1.5 border-r-1 border-solid border-r-color-border-faint babybear:hidden
            tab-md papabear:tab-vertical mamabear:tab-vertical papabear:justify-start mamabear:justify-start cursor-pointer" data-tracking-control-name="public_jobs_switcher-tabs-placeholder" aria-describedby="switcher-description">
          <span class="switcher-tabs__placeholder-text m-auto"></span>
          <icon class="switcher-tabs__caret-down-filled onload pointer-events-none block my-auto min-h-[24px] min-w-[24px] h-[24px] babybear:hidden" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/7asbl4deqijhoy3z2ivveispv"></icon>
        </button>
        <div id="switcher-description" class="hidden">This button displays the currently selected search type. When expanded it provides a list of search options that will switch the search inputs to match the current selection. </div>
<!---->        <div class="switcher-tabs hidden z-[1] w-auto min-w-[160px] mb-1.5 py-1 absolute top-[48px] left-0 border-solid border-1 border-color-border-faint papabear:container-raised mamabear:container-raised babybear:static babybear:w-[100vw] babybear:h-[48px] babybear:p-0 overflow-y-hidden overflow-x-auto md:overflow-x-hidden">
          <ul class="switcher-tabs__list flex flex-1 items-stretch papabear:flex-col mamabear:flex-col" role="tab             <button aria-controls="jobs-search-panel" aria-selected="true" class="switcher-tabs__button w-full h-full
                        tab-md papabear:tab-vertical mamabear:tab-vertical papabear:justify-start mamabear:justify-start cursor-pointer
                        tab-selected" data-switcher-type="JOBS" data-tracking-control-name="public_jobs_switcher-tabs-jobs-search-switcher" id="job-switcher-tab" role="tab">
                        Jobs
                    </button>
                  </li>
                  <li class="switcher-tabs__tab h-[44px] babybear:basis-1/2" role="presentation">
                    <button aria-controls="people-search-panel" aria-selected="false" class="switcher-tabs__button w-full h-full
                        tab-md papabear:tab-vertical mamabear:tab-vertical papabear:justify-start mamabear:justify-start cursor-pointer
                        " data-switcher-type="PEOPLE" data-tracking-control-name="public_jobs_switcher-tabs-people-search-switcher" id="people-switcher-tab" role="tab">
                        People
                    </button>
                  </li>
                  <li class="switcher-tabs__tab h-[44px] babybear:basis-1/2" role="presentation">
                    <button aria-controls="learning-search-panel" aria-selected="false" class="switcher-tabs__button w-full h-full
                        tab-md papabear:tab-vertical mamabear:tab-vertical papabear:justify-start mamabear:justify-start cursor-pointer
                        " data-switcher-type="LEARNING" data-tracking-control-name="public_jobs_switcher-tabs-learning-search-switcher" id="learning-switcher-tab" role="tab">
                        Learning
                    </button>
                  </li>
          </ul>

            <button aria-label="Close" class="switcher-tabs__cancel-btn papabear:hidden mamabear:hidden block w-6 h-6 m-auto text-color-text-low-emphasis" data-tracking-control-name="public_jobs_switcher-tabs-cancel-search-switcher" type="button">
              <icon class="switcher-tabs__cancel-icon block w-3 h-3 m-auto onload" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cs55jggk4p3uqh9ozxdmpvjg7"></icon>
            </button>
        </div>
    </div>
  

        

    
    
    
    

    

    

    <section class="base-search-bar w-full h-full" data-searchbar-type="PEOPLE" aria-labelledby="people-switcher-tab" id="people-search-panel" role="tabpanel">
      <form class="base-search-bar__form w-full flex babybear:mx-mobile-container-padding babybear:flex-col" role="search" action="/pub/dir" data-tracking-control-name="public_jobs_people-search-bar_base-search-bar-form">
        
          
      
    

    <section class="dismissable-input text-input !pr-3 bg-color-transparent flex items-center h-[40px] min-w-0 relative babybear:w-full babybear:mb-1 search-input">
      <input aria-label="First Name" autocomplete="on" class="dismissable-input__input font-sans text-md text-color-text bg-color-transparent flex items-center flex-1 focus:outline-none placeholder:text-color-text-secondary" data-tracking-control-name="public_jobs_people-search-bar_first-name_dismissable-input" maxlength="500" name="firstName" placeholder="First Name" type="search">
      
        <button class="dismissable-input__button text-color-text h-[40px] min-w-[24px] w-[24px] -mr-2 opacity-0 transition-opacity duration-[0.1s] disabled:invisible focus:opacity-100" data-tracking-control-name="public_jobs_people-search-bar_first-name_dismissable-input-clear" type="button">
          <label class="sr-only">Dismiss</label>
          <icon class="dismissable-input__button-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cs55jggk4p3uqh9ozxdmpvjg7"></icon>
        </button>
    </section>
  
  
          
      
    

    <section class="dismissable-input text-input !pr-3 bg-color-transparent flex items-center h-[40px] min-w-0 relative babybear:w-full babybear:mb-1 search-input">
      <input aria-label="Last Name" autocomplete="on" class="dismissable-input__input font-sans text-md text-color-text bg-color-transparent flex items-center flex-1 focus:outline-none placeholder:text-color-text-secondary" data-tracking-control-name="public_jobs_people-search-bar_last-name_dismissable-input" maxlength="500" name="lastName" placeholder="Last Name" type="search">
      
        <button class="dismissable-input__button text-color-text h-[40px] min-w-[24px] w-[24px] -mr-2 opacity-0 transition-opacity duration-[0.1s] disabled:invisible focus:opacity-100" data-tracking-control-name="public_jobs_people-search-bar_last-name_dismissable-input-clear" type="button">
          <label class="sr-only">Dismiss</label>
          <icon class="dismissable-input__button-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cs55jggk4p3uqh9ozxdmpvjg7"></icon>
        </button>
    </section>
  
  
      
        <input name="trk" value="public_jobs_people-search-bar_search-submit" type="hidden">
        <button class="base-search-bar__submit-btn block basis-[40px] flex-shrink-0 cursor-pointer babybear:invisible babybear:ml-[-9999px] babybear:w-[1px] babybear:h-[1px]" aria-label="Search" data-tracking-control-name="public_jobs_people-search-bar_base-search-bar-search-submit" type="submit">
          <icon class="base-search-bar__search-icon onload mx-auto" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cb5bsr4tsn2r4sjg9e3ls4tjl"></icon>
        </button>
      </form>
    </section>
  
  

        

    
    
    
    

    

    

    <section class="base-search-bar w-full h-full" data-searchbar-type="JOBS" aria-labelledby="job-switcher-tab" id="jobs-search-panel" role="tabpanel">
      <form class="base-search-bar__form w-full flex babybear:mx-mobile-container-padding babybear:flex-col" role="search" action="/jobs/search" data-tracking-control-name="public_jobs_jobs-search-bar_base-search-bar-form">
        
        

    
    
    

    <code id="i18n_aria_live_text_no-suggestions" style="display: none"><!--"No suggestions found"--></code>
    <code id="i18n_aria_live_text_one-suggestion" style="display: none"><!--"One Suggestion. Use up and down keys to navigate"--></code>
    <code id="i18n_aria_live_text_multiple-suggestions" style="display: none"><!--"Multiple Suggestions. Use up and down keys to navigate"--></code>

    
    

    <section class="dismissable-input text-input !pr-3 bg-color-transparent flex items-center h-[40px] min-w-0 relative babybear:w-full babybear:mb-1 typeahead-input keywords-typeahead-input text-input">
      <input aria-autocomplete="list" aria-controls="job-search-bar-keywords-typeahead-list" aria-haspopup="listbox" aria-label="Search job titles or companies" autocomplete="off" class="dismissable-input__input font-sans text-md text-color-text bg-color-transparent flex items-center flex-1 focus:outline-none placeholder:text-color-text-secondary" data-tracking-control-name="public_jobs_dismissable-input" id="job-search-bar-keywords" maxlength="500" name="keywords" placeholder="Search job titles or companies" role="combobox" value="Retail Associate" type="search">
      
<!---->      <div class="typeahead-input__dropdown container-lined absolute top-[calc(100%+3px)] left-0 w-full rounded-b-md rounded-t-none z-[10] overflow-hidden max-w-none babybear:min-w-full babybear:bottom-0 babybear:overflow-y-auto">
        <template class="typeahead-item-template">
          <li class="typeahead-input__dropdown-item py-1.5 px-2 hover:cursor-pointer hover:bg-color-surface-new-hover hover:border-y-2 hover:border-solid hover:border-color-container-primary" role="option">
            <span class="typeahead-input__dropdown-text font-sans text-sm font-bold text-color-text"></span>
          </li>
        </template>

        <ul class="typeahead-input__dropdown-list w-full" id="job-search-bar-keywords-typeahead-list" role="listbox"></ul>
      </div>
<!---->    
        <button class="dismissable-input__button text-color-text h-[40px] min-w-[24px] w-[24px] -mr-2 opacity-0 transition-opacity duration-[0.1s] disabled:invisible focus:opacity-100" data-tracking-control-name="public_jobs_dismissable-input-clear" type="button">
          <label class="sr-only">Dismiss</label>
          <icon class="dismissable-input__button-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cs55jggk4p3uqh9ozxdmpvjg7"></icon>
        </button>
    </section>
  
  
<!---->        

    
    
    

    <code id="i18n_aria_live_text_no-suggestions" style="display: none"><!--"No suggestions found"--></code>
    <code id="i18n_aria_live_text_one-suggestion" style="display: none"><!--"One Suggestion. Use up and down keys to navigate"--></code>
    <code id="i18n_aria_live_text_multiple-suggestions" style="display: none"><!--"Multiple Suggestions. Use up and down keys to navigate"--></code>

    
    

    <section class="dismissable-input text-input !pr-3 bg-color-transparent flex items-center h-[40px] min-w-0 relative babybear:w-full babybear:mb-1 typeahead-input location-typeahead-input">
      <input aria-autocomplete="list" aria-controls="job-search-bar-location-typeahead-list" aria-haspopup="listbox" aria-label="Location" autocomplete="off" class="dismissable-input__input font-sans text-md text-color-text bg-color-transparent flex items-center flex-1 focus:outline-none placeholder:text-color-text-secondary" data-tracking-control-name="public_jobs_dismissable-input" id="job-search-bar-location" maxlength="500" name="location" placeholder="Location" role="combobox" value="Badalona, Catalonia, Spain" type="search">
      
<!---->      <div class="typeahead-input__dropdown container-lined absolute top-[calc(100%+3px)] left-0 w-full rounded-b-md rounded-t-none z-[10] overflow-hidden max-w-none babybear:min-w-full babybear:bottom-0 babybear:overflow-y-auto">
        <template class="typeahead-item-template">
          <li class="typeahead-input__dropdown-item py-1.5 px-2 hover:cursor-pointer hover:bg-color-surface-new-hover hover:border-y-2 hover:border-solid hover:border-color-container-primary" role="option">
            <span class="typeahead-input__dropdown-text font-sans text-sm font-bold text-color-text"></span>
          </li>
        </template>

        <ul class="typeahead-input__dropdown-list w-full" id="job-search-bar-location-typeahead-list" role="listbox"></ul>
      </div>
<!---->    
        <button class="dismissable-input__button text-color-text h-[40px] min-w-[24px] w-[24px] -mr-2 opacity-0 transition-opacity duration-[0.1s] disabled:invisible focus:opacity-100" data-tracking-control-name="public_jobs_dismissable-input-clear" type="button">
          <label class="sr-only">Dismiss</label>
          <icon class="dismissable-input__button-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cs55jggk4p3uqh9ozxdmpvjg7"></icon>
        </button>
    </section>
  
  
        <input name="geoId" value="102632252" type="hidden">
      
        <input name="trk" value="public_jobs_jobs-search-bar_search-submit" type="hidden">
        <button class="base-search-bar__submit-btn block basis-[40px] flex-shrink-0 cursor-pointer babybear:invisible babybear:ml-[-9999px] babybear:w-[1px] babybear:h-[1px]" aria-label="Search" data-tracking-control-name="public_jobs_jobs-search-bar_base-search-bar-search-submit" type="submit">
          <icon class="base-search-bar__search-icon onload mx-auto" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cb5bsr4tsn2r4sjg9e3ls4tjl"></icon>
        </button>
      </form>
    </section>
  
  

        
    
    

    

    

    <section class="base-search-bar w-full h-full" data-searchbar-type="LEARNING" aria-labelledby="learning-switcher-tab" id="learning-search-panel" role="tabpanel">
      <form class="base-search-bar__form w-full flex babybear:mx-mobile-container-padding babybear:flex-col" role="search" action="/learning/search" data-tracking-control-name="public_jobs_learning-search-bar_base-search-bar-form">
        
        
      
    

    <section class="dismissable-input text-input !pr-3 bg-color-transparent flex items-center h-[40px] min-w-0 relative babybear:w-full babybear:mb-1 search-input">
      <input aria-label="Search skills, subjects, or software" autocomplete="on" class="dismissable-input__input font-sans text-md text-color-text bg-color-transparent flex items-center flex-1 focus:outline-none placeholder:text-color-text-secondary" data-tracking-control-name="public_jobs_learning-search-bar_keywords_dismissable-input" maxlength="500" name="keywords" placeholder="Search skills, subjects, or software" value="Retail Associate" type="search">
      
        <button class="dismissable-input__button text-color-text h-[40px] min-w-[24px] w-[24px] -mr-2 opacity-0 transition-opacity duration-[0.1s] disabled:invisible focus:opacity-100" data-tracking-control-name="public_jobs_learning-search-bar_keywords_dismissable-input-clear" type="button">
          <label class="sr-only">Dismiss</label>
          <icon class="dismissable-input__button-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cs55jggk4p3uqh9ozxdmpvjg7"></icon>
        </button>
    </section>
  
  
        <input class="nav__search-uoo" name="upsellOrderOrigin" type="hidden">
        
      
        <input name="trk" value="public_jobs_learning-search-bar_search-submit" type="hidden">
        <button class="base-search-bar__submit-btn block basis-[40px] flex-shrink-0 cursor-pointer babybear:invisible babybear:ml-[-9999px] babybear:w-[1px] babybear:h-[1px]" aria-label="Search" data-tracking-control-name="public_jobs_learning-search-bar_base-search-bar-search-submit" type="submit">
          <icon class="base-search-bar__search-icon onload mx-auto" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cb5bsr4tsn2r4sjg9e3ls4tjl"></icon>
        </button>
      </form>
    </section>
  
  

<!---->        <div aria-live="polite" class="search-bar__live-text sr-only" role="status"></div>
      
  
    </section>
  

<!---->
      <div class="nav__cta-container order-3 flex gap-x-1 justify-end min-w-[100px] flex-nowrap flex-shrink-0 babybear:flex-wrap flex-2">
        
    
    <a class="nav__button-tertiary btn-md btn-tertiary" href="https://www.linkedin.com/signup/cold-join?source=jobs_registration&amp;session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fjobs%2Fretail-associate-jobs-badalona%3Ftrk%3Dhomepage-basic_suggested-search&amp;trk=public_jobs_nav-header-join" data-tracking-control-name="public_jobs_nav-header-join" data-test-live-nav-primary-cta data-tracking-will-navigate>
      Join now
    </a>


        
  
  

      
      <a class="nav__button-secondary btn-md btn-secondary-emphasis" href="https://www.linkedin.com/login?emailAddress=&amp;fromSignIn=&amp;fromSignIn=true&amp;session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fjobs%2Fretail-associate-jobs-badalona%3Ftrk%3Dhomepage-basic_suggested-search&amp;trk=public_jobs_nav-header-signin" data-tracking-control-name="public_jobs_nav-header-signin" data-tracking-will-navigate>
          Sign in
      </a>


<!---->      </div>

<!---->
<!---->    </nav>
  
      </header>

        <section class="base-serp-page__filters-bar">
          <div class="base-serp-page__filters">
            
        
        
    
    
    

    <div class="guest-filters">
      
    
    

    <div class="filters filters--desktop">
      <form class="filters__form" id="jserp-filters" action="https://www.linkedin.com/jobs/retail-associate-jobs-badalona" data-tracking-control-name="public_jobs_filters">
        
            <input name="keywords" value="Retail Associate" type="hidden">
            <input name="location" value="Badalona, Catalonia, Spain" type="hidden">
            <input name="locationId" type="hidden">
            <input name="geoId" value="102632252" type="hidden">
        
        <ul class="filters__list">
            
<!---->        
            
              
    
    
    

      <li class="filter">
        
    <div class="dropdown-to-modal filter__dropdown-to-modal">
        

    

    <div class="collapsible-dropdown flex items-center relative hyphens-auto">
          
            
            
    
    
    

    <button class="filter-button pill flex items-center !min-h-0
         filter-button--selected pill-checked filter__dropdown-to-modal-trigger" aria-label="Date posted filter. Any Time filter is currently applied. Clicking this button displays all Date posted filter options." data-tracking-control-name="public_jobs_f_TPR" aria-expanded="false" type="button">
        
        Any Time
      <icon data-delayed-url="https://static.licdn.com/aero-v1/sc/h/7asbl4deqijhoy3z2ivveispv" class="filter-button__icon h-3 w-2"></icon>
    </button>
  
          
          

        <div class="collapsible-dropdown__list hidden container-raised absolute w-auto overflow-y-auto flex-col items-stretch z-1 bottom-auto top-[100%]" tabindex="-1">
          
            
<!---->            
    

    <div class="filter-values-container">
      <div class="filter-values-container__filter-values" aria-label="Date posted filter options" role="group">
          
  

  <div class="filter-values-container__filter-value">
    <input id="f_TPR-0" form="jserp-filters" name="f_TPR" value="r86400" type="radio">
    <label for="f_TPR-0">
        Past 24 hours (32)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="f_TPR-1" form="jserp-filters" name="f_TPR" value="r604800" type="radio">
    <label for="f_TPR-1">
        Past Week (104)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="f_TPR-2" form="jserp-filters" name="f_TPR" value="r2592000" type="radio">
    <label for="f_TPR-2">
        Past Month (228)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="f_TPR-3" form="jserp-filters" name="f_TPR" checked value type="radio">
    <label for="f_TPR-3">
        Any Time (506)
    </label>
  </div>

      </div>
    </div>
  
              
  <button class="filter__submit-button" form="jserp-filters" data-tracking-control-name="public_jobs_f_TPR" type="submit">
    Done
  </button>

          
          
        </div>

<!---->    </div>
  
    </div>
  
      </li>
  
              
    
    
    

      <li class="filter">
        
    <div class="dropdown-to-modal filter__dropdown-to-modal">
        

    

    <div class="collapsible-dropdown flex items-center relative hyphens-auto">
          
            
            
    
    
    

    <button class="filter-button pill flex items-center !min-h-0
         filter-button--selected pill-checked filter__dropdown-to-modal-trigger" aria-label="Distance filter. 25 mi (40 km) filter is currently applied. Clicking this button displays all Distance filter options." data-tracking-control-name="public_jobs_distance" aria-expanded="false" type="button">
        
        25 mi (40 km)
      <icon data-delayed-url="https://static.licdn.com/aero-v1/sc/h/7asbl4deqijhoy3z2ivveispv" class="filter-button__icon h-3 w-2"></icon>
    </button>
  
          
          

        <div class="collapsible-dropdown__list hidden container-raised absolute w-auto overflow-y-auto flex-col items-stretch z-1 bottom-auto top-[100%]" tabindex="-1">
          
            
<!---->            
    

    <div class="filter-values-container">
      <div class="filter-values-container__filter-values" aria-label="Distance filter options" role="group">
          
  

  <div class="filter-values-container__filter-value">
    <input id="distance-0" form="jserp-filters" name="distance" value="10" type="radio">
    <label for="distance-0">
        10 mi (15km)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="distance-1" form="jserp-filters" name="distance" checked value="25" type="radio">
    <label for="distance-1">
        25 mi (40 km)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="distance-2" form="jserp-filters" name="distance" value="50" type="radio">
    <label for="distance-2">
        50 mi (80 km)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="distance-3" form="jserp-filters" name="distance" value="75" type="radio">
    <label for="distance-3">
        75 mi (120 km)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="distance-4" form="jserp-filters" name="distance" value="100" type="radio">
    <label for="distance-4">
        100 mi (160 km)
    </label>
  </div>

      </div>
    </div>
  
              
  <button class="filter__submit-button" form="jserp-filters" data-tracking-control-name="public_jobs_distance" type="submit">
    Done
  </button>

          
          
        </div>

<!---->    </div>
  
    </div>
  
      </li>
  
              
    
    
    

      <li class="filter">
        
    <div class="dropdown-to-modal filter__dropdown-to-modal">
        

    

    <div class="collapsible-dropdown flex items-center relative hyphens-auto">
          
            
            
    
    
    

    <button class="filter-button pill flex items-center !min-h-0
         filter__dropdown-to-modal-trigger" aria-label="Company filter. Clicking this button displays all Company filter options." data-tracking-control-name="public_jobs_f_C" aria-expanded="false" type="button">
        Company
<!---->      <icon data-delayed-url="https://static.licdn.com/aero-v1/sc/h/7asbl4deqijhoy3z2ivveispv" class="filter-button__icon h-3 w-2"></icon>
    </button>
  
          
          

        <div class="collapsible-dropdown__list hidden container-raised absolute w-auto overflow-y-auto flex-col items-stretch z-1 bottom-auto top-[100%]" tabindex="-1">
          
            
              

    
    
    

    <code id="i18n_aria_live_text_no-suggestions" style="display: none"><!--"No suggestions found"--></code>
    <code id="i18n_aria_live_text_one-suggestion" style="display: none"><!--"One Suggestion. Use up and down keys to navigate"--></code>
    <code id="i18n_aria_live_text_multiple-suggestions" style="display: none"><!--"Multiple Suggestions. Use up and down keys to navigate"--></code>

    
    

    <section class="dismissable-input text-input !pr-3 bg-color-transparent flex items-center h-[40px] min-w-0 relative babybear:w-full babybear:mb-1 typeahead-input filter__typeahead" data-base-api-url="/jobs-guest/api/typeaheadHits?typeaheadType=COMPANY" aria-label="Add a filter for Company">
      <input aria-autocomplete="list" aria-controls="f_C-typeahead-list" aria-haspopup="listbox" aria-label="Add a filter" autocomplete="off" class="dismissable-input__input font-sans text-md text-color-text bg-color-transparent flex items-center flex-1 focus:outline-none placeholder:text-color-text-secondary" data-tracking-control-name="public_jobs_f_C_dismissable-input" id="f_C" maxlength="500" placeholder="Add a filter" role="combobox" type="text">
      
        <div aria-live="polite" class="typeahead-live-text sr-only" role="status"></div>
      <div class="typeahead-input__dropdown container-lined absolute top-[calc(100%+3px)] left-0 w-full rounded-b-md rounded-t-none z-[10] overflow-hidden max-w-none babybear:min-w-full babybear:bottom-0 babybear:overflow-y-auto">
        <template class="typeahead-item-template">
          <li class="typeahead-input__dropdown-item py-1.5 px-2 hover:cursor-pointer hover:bg-color-surface-new-hover hover:border-y-2 hover:border-solid hover:border-color-container-primary" role="option">
            <span class="typeahead-input__dropdown-text font-sans text-sm font-bold text-color-text"></span>
          </li>
        </template>

        <ul class="typeahead-input__dropdown-list w-full" id="f_C-typeahead-list" role="listbox"></ul>
      </div>
<!---->    
        <button class="dismissable-input__button text-color-text h-[40px] min-w-[24px] w-[24px] -mr-2 opacity-0 transition-opacity duration-[0.1s] disabled:invisible focus:opacity-100" data-tracking-control-name="public_jobs_f_C_dismissable-input-clear" type="button">
          <label class="sr-only">Dismiss</label>
          <icon class="dismissable-input__button-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cs55jggk4p3uqh9ozxdmpvjg7"></icon>
        </button>
    </section>
  
  
            
    

    <div class="filter-values-container">
      <div class="filter-values-container__filter-values" aria-label="Company filter options" role="group">
          
  

  <div class="filter-values-container__filter-value">
    <input id="f_C-0" form="jserp-filters" name="f_C" value="720834" type="checkbox">
    <label for="f_C-0">
        EMPRESAS IMAN (127)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="f_C-1" form="jserp-filters" name="f_C" value="265751" type="checkbox">
    <label for="f_C-1">
        LUXE TALENT (25)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="f_C-2" form="jserp-filters" name="f_C" value="69246295" type="checkbox">
    <label for="f_C-2">
        VICIO (4)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="f_C-3" form="jserp-filters" name="f_C" value="10221520" type="checkbox">
    <label for="f_C-3">
        Iplan Gestión Integral (2)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="f_C-4" form="jserp-filters" name="f_C" value="2029" type="checkbox">
    <label for="f_C-4">
        Nike (2)
    </label>
  </div>

      </div>
    </div>
  
              
  <button class="filter__submit-button" form="jserp-filters" data-tracking-control-name="public_jobs_f_C" type="submit">
    Done
  </button>

          
          
        </div>

<!---->    </div>
  
    </div>
  
      </li>
  
              
    
    
    

      <li class="filter">
        
    <div class="dropdown-to-modal filter__dropdown-to-modal">
        

    

    <div class="collapsible-dropdown flex items-center relative hyphens-auto">
          
            
            
    
    
    

    <button class="filter-button pill flex items-center !min-h-0
         filter__dropdown-to-modal-trigger" aria-label="Location filter. Clicking this button displays all Location filter options." data-tracking-control-name="public_jobs_f_PP" aria-expanded="false" type="button">
        Location
<!---->      <icon data-delayed-url="https://static.licdn.com/aero-v1/sc/h/7asbl4deqijhoy3z2ivveispv" class="filter-button__icon h-3 w-2"></icon>
    </button>
  
          
          

        <div class="collapsible-dropdown__list hidden container-raised absolute w-auto overflow-y-auto flex-col items-stretch z-1 bottom-auto top-[100%]" tabindex="-1">
          
            
              

    
    
    

    <code id="i18n_aria_live_text_no-suggestions" style="display: none"><!--"No suggestions found"--></code>
    <code id="i18n_aria_live_text_one-suggestion" style="display: none"><!--"One Suggestion. Use up and down keys to navigate"--></code>
    <code id="i18n_aria_live_text_multiple-suggestions" style="display: none"><!--"Multiple Suggestions. Use up and down keys to navigate"--></code>

    
    

    <section class="dismissable-input text-input !pr-3 bg-color-transparent flex items-center h-[40px] min-w-0 relative babybear:w-full babybear:mb-1 typeahead-input filter__typeahead" data-base-api-url="/jobs-guest/api/typeaheadHits?origin=jserp&amp;typeaheadType=GEO&amp;geoTypes=POPULATED_PLACE" aria-label="Add a filter for Location">
      <input aria-autocomplete="list" aria-controls="f_PP-typeahead-list" aria-haspopup="listbox" aria-label="Add a filter" autocomplete="off" class="dismissable-input__input font-sans text-md text-color-text bg-color-transparent flex items-center flex-1 focus:outline-none placeholder:text-color-text-secondary" data-tracking-control-name="public_jobs_f_PP_dismissable-input" id="f_PP" maxlength="500" placeholder="Add a filter" role="combobox" type="text">
      
        <div aria-live="polite" class="typeahead-live-text sr-only" role="status"></div>
      <div class="typeahead-input__dropdown container-lined absolute top-[calc(100%+3px)] left-0 w-full rounded-b-md rounded-t-none z-[10] overflow-hidden max-w-none babybear:min-w-full babybear:bottom-0 babybear:overflow-y-auto">
        <template class="typeahead-item-template">
          <li class="typeahead-input__dropdown-item py-1.5 px-2 hover:cursor-pointer hover:bg-color-surface-new-hover hover:border-y-2 hover:border-solid hover:border-color-container-primary" role="option">
            <span class="typeahead-input__dropdown-text font-sans text-sm font-bold text-color-text"></span>
          </li>
        </template>

        <ul class="typeahead-input__dropdown-list w-full" id="f_PP-typeahead-list" role="listbox"></ul>
      </div>
<!---->    
        <button class="dismissable-input__button text-color-text h-[40px] min-w-[24px] w-[24px] -mr-2 opacity-0 transition-opacity duration-[0.1s] disabled:invisible focus:opacity-100" data-tracking-control-name="public_jobs_f_PP_dismissable-input-clear" type="button">
          <label class="sr-only">Dismiss</label>
          <icon class="dismissable-input__button-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cs55jggk4p3uqh9ozxdmpvjg7"></icon>
        </button>
    </section>
  
  
            
    

    <div class="filter-values-container">
      <div class="filter-values-container__filter-values" aria-label="Location filter options" role="group">
          
  

  <div class="filter-values-container__filter-value">
    <input id="f_PP-0" form="jserp-filters" name="f_PP" value="105088894" type="checkbox">
    <label for="f_PP-0">
        Barcelona (245)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="f_PP-1" form="jserp-filters" name="f_PP" value="100256124" type="checkbox">
    <label for="f_PP-1">
        L&#39;Hospitalet de Llobregat (31)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="f_PP-2" form="jserp-filters" name="f_PP" value="106219807" type="checkbox">
    <label for="f_PP-2">
        El Prat de Llobregat (24)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="f_PP-3" form="jserp-filters" name="f_PP" value="100861588" type="checkbox">
    <label for="f_PP-3">
        Sant Cugat del Vallès (22)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="f_PP-4" form="jserp-filters" name="f_PP" value="104978775" type="checkbox">
    <label for="f_PP-4">
        Cornellà de Llobregat (22)
    </label>
  </div>

      </div>
    </div>
  
              
  <button class="filter__submit-button" form="jserp-filters" data-tracking-control-name="public_jobs_f_PP" type="submit">
    Done
  </button>

          
          
        </div>

<!---->    </div>
  
    </div>
  
      </li>
  
              
    
    
    

      <li class="filter">
        
    <div class="dropdown-to-modal filter__dropdown-to-modal">
        

    

    <div class="collapsible-dropdown flex items-center relative hyphens-auto">
          
            
            
    
    
    

    <button class="filter-button pill flex items-center !min-h-0
         filter__dropdown-to-modal-trigger" aria-label="Job type filter. Clicking this button displays all Job type filter options." data-tracking-control-name="public_jobs_f_JT" aria-expanded="false" type="button">
        Job type
<!---->      <icon data-delayed-url="https://static.licdn.com/aero-v1/sc/h/7asbl4deqijhoy3z2ivveispv" class="filter-button__icon h-3 w-2"></icon>
    </button>
  
          
          

        <div class="collapsible-dropdown__list hidden container-raised absolute w-auto overflow-y-auto flex-col items-stretch z-1 bottom-auto top-[100%]" tabindex="-1">
          
            
<!---->            
    

    <div class="filter-values-container">
      <div class="filter-values-container__filter-values" aria-label="Job type filter options" role="group">
          
  

  <div class="filter-values-container__filter-value">
    <input id="f_JT-0" form="jserp-filters" name="f_JT" value="F" type="checkbox">
    <label for="f_JT-0">
        Full-time (476)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="f_JT-1" form="jserp-filters" name="f_JT" value="P" type="checkbox">
    <label for="f_JT-1">
        Part-time (14)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="f_JT-2" form="jserp-filters" name="f_JT" value="C" type="checkbox">
    <label for="f_JT-2">
        Contract (6)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="f_JT-3" form="jserp-filters" name="f_JT" value="T" type="checkbox">
    <label for="f_JT-3">
        Temporary (4)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="f_JT-4" form="jserp-filters" name="f_JT" value="I" type="checkbox">
    <label for="f_JT-4">
        Internship (1)
    </label>
  </div>

      </div>
    </div>
  
              
  <button class="filter__submit-button" form="jserp-filters" data-tracking-control-name="public_jobs_f_JT" type="submit">
    Done
  </button>

          
          
        </div>

<!---->    </div>
  
    </div>
  
      </li>
  
              
    
    
    

      <li class="filter">
        
    <div class="dropdown-to-modal filter__dropdown-to-modal">
        

    

    <div class="collapsible-dropdown flex items-center relative hyphens-auto">
          
            
            
    
    
    

    <button class="filter-button pill flex items-center !min-h-0
         filter__dropdown-to-modal-trigger" aria-label="Experience level filter. Clicking this button displays all Experience level filter options." data-tracking-control-name="public_jobs_f_E" aria-expanded="false" type="button">
        Experience level
<!---->      <icon data-delayed-url="https://static.licdn.com/aero-v1/sc/h/7asbl4deqijhoy3z2ivveispv" class="filter-button__icon h-3 w-2"></icon>
    </button>
  
          
          

        <div class="collapsible-dropdown__list hidden container-raised absolute w-auto overflow-y-auto flex-col items-stretch z-1 bottom-auto top-[100%]" tabindex="-1">
          
            
<!---->            
    

    <div class="filter-values-container">
      <div class="filter-values-container__filter-values" aria-label="Experience level filter options" role="group">
          
  

  <div class="filter-values-container__filter-value">
    <input id="f_E-0" form="jserp-filters" name="f_E" value="1" type="checkbox">
    <label for="f_E-0">
        Internship (4)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="f_E-1" form="jserp-filters" name="f_E" value="2" type="checkbox">
    <label for="f_E-1">
        Entry level (321)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="f_E-2" form="jserp-filters" name="f_E" value="3" type="checkbox">
    <label for="f_E-2">
        Associate (15)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="f_E-3" form="jserp-filters" name="f_E" value="4" type="checkbox">
    <label for="f_E-3">
        Mid-Senior level (76)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="f_E-4" form="jserp-filters" name="f_E" value="5" type="checkbox">
    <label for="f_E-4">
        Director (3)
    </label>
  </div>

      </div>
    </div>
  
              
  <button class="filter__submit-button" form="jserp-filters" data-tracking-control-name="public_jobs_f_E" type="submit">
    Done
  </button>

          
          
        </div>

<!---->    </div>
  
    </div>
  
      </li>
  
              
    
    
    

      <li class="filter">
        
    <div class="dropdown-to-modal filter__dropdown-to-modal">
        

    

    <div class="collapsible-dropdown flex items-center relative hyphens-auto">
          
            
            
    
    
    

    <button class="filter-button pill flex items-center !min-h-0
         filter__dropdown-to-modal-trigger" aria-label="On-site/remote filter. Clicking this button displays all On-site/remote filter options." data-tracking-control-name="public_jobs_f_WT" aria-expanded="false" type="button">
        On-site/remote
<!---->      <icon data-delayed-url="https://static.licdn.com/aero-v1/sc/h/7asbl4deqijhoy3z2ivveispv" class="filter-button__icon h-3 w-2"></icon>
    </button>
  
          
          

        <div class="collapsible-dropdown__list hidden container-raised absolute w-auto overflow-y-auto flex-col items-stretch z-1 bottom-auto top-[100%]" tabindex="-1">
          
            
<!---->            
    

    <div class="filter-values-container">
      <div class="filter-values-container__filter-values" aria-label="On-site/remote filter options" role="group">
          
  

  <div class="filter-values-container__filter-value">
    <input id="f_WT-0" form="jserp-filters" name="f_WT" value="1" type="checkbox">
    <label for="f_WT-0">
        On-site (435)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="f_WT-1" form="jserp-filters" name="f_WT" value="3" type="checkbox">
    <label for="f_WT-1">
        Hybrid (67)
    </label>
  </div>

          
  

  <div class="filter-values-container__filter-value">
    <input id="f_WT-2" form="jserp-filters" name="f_WT" value="2" type="checkbox">
    <label for="f_WT-2">
        Remote (3)
    </label>
  </div>

      </div>
    </div>
  
              
  <button class="filter__submit-button" form="jserp-filters" data-tracking-control-name="public_jobs_f_WT" type="submit">
    Done
  </button>

          
          
        </div>

<!---->    </div>
  
    </div>
  
      </li>
  
        
        </ul>
      </form>

<!---->    </div>
  
    </div>
  
      
      
          </div>
        </section>

      
        
<!---->      
      

      <div class="base-serp-page__content">
        
        <main id="main-content" class="two-pane-serp-page__results" role="main">
            <section class="two-pane-serp-page__search-header">
              
<!---->
            
    
    

    <section class="job-alert-redirect-section job-alert-redirect-section--jserp">
      <icon class="job-alert-redirect-section__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/dd4yq8pu9gycnw9c7p5uro8qn"></icon>
      <div class="job-alert-redirect-section__container">
        <p>Get notified about new <strong class="break-word">Retail Associate</strong> jobs in <strong>Badalona, Catalonia, Spain</strong>.</p>

        <a class="job-alert-redirect-section__cta" href="https://www.linkedin.com/login?emailAddress=&amp;fromSignIn=&amp;session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fjobs%2Fretail-associate-jobs-badalona%3Ftrk%3Dhomepage-basic_suggested-search&amp;trk=public_jobs_job-alert-guest-redirect-cta" data-impression-id="public_jobs_job-alert-guest-redirect-cta" data-tracking-control-name="public_jobs_job-alert-guest-redirect-cta" data-tracking-will-navigate>
          Sign in to create job alert
        </a>
      </div>
    </section>
  
      
            </section>

              
<!---->
        
    
    

        
    
    
    

    <div class="results-context-header">
      <h1 class="results-context-header__context">
          <span class="results-context-header__job-count">506</span> <span class="results-context-header__query-search">Retail Associate Jobs in Badalona, Catalonia, Spain</span>
          <span class="results-context-header__new-jobs">
            (32&nbsp;new)
          </span>
      </h1>
      
    </div>
  
  
      
            <section class="two-pane-serp-page__results-list">
              
          <ul class="jobs-search__results-list">
              <li>
                

    

    
    
    
      <div class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:3796965046" data-search-id="5FNdHh7NxabEmqYmXePjzQ==" data-tracking-id="5dFsDl8Bq7H2UUydEDr0dQ==" data-column="1" data-row="1">
        

        <a class="base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]" href="https://es.linkedin.com/jobs/view/retail-stores-associate-viladecans-20h-permanente-at-nike-3796965046?refId=5FNdHh7NxabEmqYmXePjzQ%3D%3D&amp;trackingId=5dFsDl8Bq7H2UUydEDr0dQ%3D%3D&amp;position=1&amp;pageNum=0&amp;trk=public_jobs_jserp-result_search-card" data-tracking-control-name="public_jobs_jserp-result_search-card" data-tracking-client-ingraph data-tracking-will-navigate>
          
          <span class="sr-only">
              
        
        RETAIL STORES ASSOCIATE- VILADECANS 20H PERMANENTE
      
      
          </span>
        </a>

      
        
    <div class="search-entity-media">
        
      <img class="artdeco-entity-image artdeco-entity-image--square-4
          " data-delayed-url="https://media.licdn.com/dms/image/C560BAQFckBxRnPg53Q/company-logo_100_100/0/1630594333146/nike_logo?e=2147483647&amp;v=beta&amp;t=EMO_VVnDlJ39EkF9dGi3Vg-d1XkFcnl7u18M1tXkRgg" data-ghost-classes="artdeco-entity-image--ghost" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9a9u41thxt325ucfh5z8ga4m8" alt>
  
    </div>
  

        <div class="base-search-card__info">
          <h3 class="base-search-card__title">
            
        RETAIL STORES ASSOCIATE- VILADECANS 20H PERMANENTE
      
          </h3>

            <h4 class="base-search-card__subtitle">
              
          <a class="hidden-nested-link" data-tracking-client-ingraph data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle" data-tracking-will-navigate href="https://www.linkedin.com/company/nike?trk=public_jobs_jserp-result_job-search-card-subtitle">
            Nike
          </a>
      
            </h4>

<!---->
            <div class="base-search-card__metadata">
              
          <span class="job-search-card__location">
            Barcelona, Catalonia, Spain
          </span>

<!---->
          <div class="job-search-card__benefits">
            
                      
    
    
    
    

    <div class="result-benefits">
      <icon class="result-benefits__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/1pwj7aot6lxrfhr9sdta6cnxw" data-svg-class-name="result-benefits__icon-svg"></icon>
      <span class="result-benefits__text">
         Actively Hiring
<!---->      </span>
    </div>
  
                  
          </div>

<!---->
          <time class="job-search-card__listdate" datetime="2024-01-02">
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      1 week ago
  
          </time>

<!---->      
            </div>
        </div>
<!---->      
    
      </div>
  
  
  
  
              </li>
              <li>
                

    

    
    
    
      <div class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:3790803821" data-search-id="5FNdHh7NxabEmqYmXePjzQ==" data-tracking-id="aPldLRlYGB6uVznEhWtjzw==" data-column="1" data-row="2">
        

        <a class="base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]" href="https://es.linkedin.com/jobs/view/retail-stores-associate-ii-at-nike-3790803821?refId=5FNdHh7NxabEmqYmXePjzQ%3D%3D&amp;trackingId=aPldLRlYGB6uVznEhWtjzw%3D%3D&amp;position=2&amp;pageNum=0&amp;trk=public_jobs_jserp-result_search-card" data-tracking-control-name="public_jobs_jserp-result_search-card" data-tracking-client-ingraph data-tracking-will-navigate>
          
          <span class="sr-only">
              
        
        Retail Stores Associate II
      
      
          </span>
        </a>

      
        
    <div class="search-entity-media">
        
      <img class="artdeco-entity-image artdeco-entity-image--square-4
          " data-delayed-url="https://media.licdn.com/dms/image/C560BAQFckBxRnPg53Q/company-logo_100_100/0/1630594333146/nike_logo?e=2147483647&amp;v=beta&amp;t=EMO_VVnDlJ39EkF9dGi3Vg-d1XkFcnl7u18M1tXkRgg" data-ghost-classes="artdeco-entity-image--ghost" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9a9u41thxt325ucfh5z8ga4m8" alt>
  
    </div>
  

        <div class="base-search-card__info">
          <h3 class="base-search-card__title">
            
        Retail Stores Associate II
      
          </h3>

            <h4 class="base-search-card__subtitle">
              
          <a class="hidden-nested-link" data-tracking-client-ingraph data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle" data-tracking-will-navigate href="https://www.linkedin.com/company/nike?trk=public_jobs_jserp-result_job-search-card-subtitle">
            Nike
          </a>
      
            </h4>

<!---->
            <div class="base-search-card__metadata">
              
          <span class="job-search-card__location">
            Terrassa, Catalonia, Spain
          </span>

<!---->
          <div class="job-search-card__benefits">
            
                      
    
    
    
    

    <div class="result-benefits">
      <icon class="result-benefits__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/1pwj7aot6lxrfhr9sdta6cnxw" data-svg-class-name="result-benefits__icon-svg"></icon>
      <span class="result-benefits__text">
         Actively Hiring
<!---->      </span>
    </div>
  
                  
          </div>

<!---->
          <time class="job-search-card__listdate" datetime="2024-01-11">
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      5 days ago
  
          </time>

<!---->      
            </div>
        </div>
<!---->      
    
      </div>
  
  
  
  
              </li>
              <li>
                

    

    
    
    
      <div class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:3806871587" data-search-id="5FNdHh7NxabEmqYmXePjzQ==" data-tracking-id="7fBMGNbT7K5S/ecb55IldA==" data-column="1" data-row="3">
        

        <a class="base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]" href="https://es.linkedin.com/jobs/view/telefonista-at-pizza-a-punt-3806871587?refId=5FNdHh7NxabEmqYmXePjzQ%3D%3D&amp;trackingId=7fBMGNbT7K5S%2Fecb55IldA%3D%3D&amp;position=3&amp;pageNum=0&amp;trk=public_jobs_jserp-result_search-card" data-tracking-control-name="public_jobs_jserp-result_search-card" data-tracking-client-ingraph data-tracking-will-navigate>
          
          <span class="sr-only">
              
        
        Telefonista
      
      
          </span>
        </a>

      
        
    <div class="search-entity-media">
        
      <img class="artdeco-entity-image artdeco-entity-image--square-4
          " data-delayed-url="https://media.licdn.com/dms/image/C560BAQFPTM4KC8pXwQ/company-logo_100_100/0/1630589112284/pizza_a_punt_logo?e=2147483647&amp;v=beta&amp;t=aap6SF1FmY5KEhXA3pL36eX4RQSFVtm7vhH7-RSSKls" data-ghost-classes="artdeco-entity-image--ghost" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9a9u41thxt325ucfh5z8ga4m8" alt>
  
    </div>
  

        <div class="base-search-card__info">
          <h3 class="base-search-card__title">
            
        Telefonista
      
          </h3>

            <h4 class="base-search-card__subtitle">
              
          <a class="hidden-nested-link" data-tracking-client-ingraph data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle" data-tracking-will-navigate href="https://es.linkedin.com/company/pizza-a-punt?trk=public_jobs_jserp-result_job-search-card-subtitle">
            PIZZA A PUNT
          </a>
      
            </h4>

<!---->
            <div class="base-search-card__metadata">
              
          <span class="job-search-card__location">
            Cardedeu, Catalonia, Spain
          </span>

<!---->
          <div class="job-search-card__benefits">
            
                      
    
    
    
    

    <div class="result-benefits">
      <icon class="result-benefits__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/ee2elqv6ktdjhlrxiyhac6py6" data-svg-class-name="result-benefits__icon-svg"></icon>
      <span class="result-benefits__text">
         Be an early applicant
<!---->      </span>
    </div>
  
                  
          </div>

<!---->
          <time class="job-search-card__listdate--new" datetime="2024-01-15">
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      23 hours ago
  
          </time>

<!---->      
            </div>
        </div>
<!---->      
    
      </div>
  
  
  
  
              </li>
              <li>
                

    

    
    
    
      <div class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:3650652605" data-search-id="5FNdHh7NxabEmqYmXePjzQ==" data-tracking-id="KCa84wpUrKx4gB7lZ4UWoQ==" data-column="1" data-row="4">
        

        <a class="base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]" href="https://es.linkedin.com/jobs/view/floor-manager-luxury-brand-barcelona-at-luxe-talent-3650652605?refId=5FNdHh7NxabEmqYmXePjzQ%3D%3D&amp;trackingId=KCa84wpUrKx4gB7lZ4UWoQ%3D%3D&amp;position=4&amp;pageNum=0&amp;trk=public_jobs_jserp-result_search-card" data-tracking-control-name="public_jobs_jserp-result_search-card" data-tracking-client-ingraph data-tracking-will-navigate>
          
          <span class="sr-only">
              
        
        Floor Manager Luxury Brand - Barcelona
      
      
          </span>
        </a>

      
        
    <div class="search-entity-media">
        
      <img class="artdeco-entity-image artdeco-entity-image--square-4
          " data-delayed-url="https://media.licdn.com/dms/image/C4D0BAQHF4t81QtR0IQ/company-logo_100_100/0/1630570662950/luxetalent_logo?e=2147483647&amp;v=beta&amp;t=LGrFGNbsos2ICR-XUfknJ1z-ekoSKa0Y8OCXL3GyVv4" data-ghost-classes="artdeco-entity-image--ghost" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9a9u41thxt325ucfh5z8ga4m8" alt>
  
    </div>
  

        <div class="base-search-card__info">
          <h3 class="base-search-card__title">
            
        Floor Manager Luxury Brand - Barcelona
      
          </h3>

            <h4 class="base-search-card__subtitle">
              
          <a class="hidden-nested-link" data-tracking-client-ingraph data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle" data-tracking-will-navigate href="https://es.linkedin.com/company/luxetalent?trk=public_jobs_jserp-result_job-search-card-subtitle">
            LUXE TALENT
          </a>
      
            </h4>

<!---->
            <div class="base-search-card__metadata">
              
          <span class="job-search-card__location">
            Barcelona, Catalonia, Spain
          </span>

<!---->
          <div class="job-search-card__benefits">
            
                      
    
    
    
    

    <div class="result-benefits">
      <icon class="result-benefits__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/1pwj7aot6lxrfhr9sdta6cnxw" data-svg-class-name="result-benefits__icon-svg"></icon>
      <span class="result-benefits__text">
         Actively Hiring
<!---->      </span>
    </div>
  
                  
          </div>

<!---->
          <time class="job-search-card__listdate" datetime="2023-06-06">
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      7 months ago
  
          </time>

<!---->      
            </div>
        </div>
<!---->      
    
      </div>
  
  
  
  
              </li>
              <li>
                

    

    
    
    
      <div class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:3716362523" data-search-id="5FNdHh7NxabEmqYmXePjzQ==" data-tracking-id="9CVzpRa8J8sHu5VxBoIEtg==" data-column="1" data-row="5">
        

        <a class="base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]" href="https://es.linkedin.com/jobs/view/aux-admtvo-a-ma%C3%B1anas-12-horas-semanales-at-empresas-iman-3716362523?refId=5FNdHh7NxabEmqYmXePjzQ%3D%3D&amp;trackingId=9CVzpRa8J8sHu5VxBoIEtg%3D%3D&amp;position=5&amp;pageNum=0&amp;trk=public_jobs_jserp-result_search-card" data-tracking-control-name="public_jobs_jserp-result_search-card" data-tracking-client-ingraph data-tracking-will-navigate>
          
          <span class="sr-only">
              
        
        AUX. ADMTVO/A MAÑANAS 12 HORAS SEMANALES
      
      
          </span>
        </a>

      
        
    <div class="search-entity-media">
        
      <img class="artdeco-entity-image artdeco-entity-image--square-4
          " data-delayed-url="https://media.licdn.com/dms/image/C4E0BAQHUMqszynhG4A/company-logo_100_100/0/1652884342501/empresas_iman_logo?e=2147483647&amp;v=beta&amp;t=NJeOpAJxeAl4wkt9UMZNU8pHVnPq1dLx_5yrG6ap-GI" data-ghost-classes="artdeco-entity-image--ghost" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9a9u41thxt325ucfh5z8ga4m8" alt>
  
    </div>
  

        <div class="base-search-card__info">
          <h3 class="base-search-card__title">
            
        AUX. ADMTVO/A MAÑANAS 12 HORAS SEMANALES
      
          </h3>

            <h4 class="base-search-card__subtitle">
              
          <a class="hidden-nested-link" data-tracking-client-ingraph data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle" data-tracking-will-navigate href="https://es.linkedin.com/company/empresas-iman?trk=public_jobs_jserp-result_job-search-card-subtitle">
            EMPRESAS IMAN
          </a>
      
            </h4>

<!---->
            <div class="base-search-card__metadata">
              
          <span class="job-search-card__location">
            El Prat de Llobregat, Catalonia, Spain
          </span>

<!---->
          <div class="job-search-card__benefits">
            
                      
    
    
    
    

    <div class="result-benefits">
      <icon class="result-benefits__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/1pwj7aot6lxrfhr9sdta6cnxw" data-svg-class-name="result-benefits__icon-svg"></icon>
      <span class="result-benefits__text">
         Actively Hiring
<!---->      </span>
    </div>
  
                  
          </div>

<!---->
          <time class="job-search-card__listdate" datetime="2023-09-14">
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      4 months ago
  
          </time>

<!---->      
            </div>
        </div>
<!---->      
    
      </div>
  
  
  
  
              </li>
              <li>
                

    

    
    
    
      <div class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:3778558050" data-search-id="5FNdHh7NxabEmqYmXePjzQ==" data-tracking-id="L1Dm0kR9T/O+k8JgejydTw==" data-column="1" data-row="6">
        

        <a class="base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]" href="https://es.linkedin.com/jobs/view/assistant-store-manager-calvin-klein-la-roca-at-awwg-3778558050?refId=5FNdHh7NxabEmqYmXePjzQ%3D%3D&amp;trackingId=L1Dm0kR9T%2FO%2Bk8JgejydTw%3D%3D&amp;position=6&amp;pageNum=0&amp;trk=public_jobs_jserp-result_search-card" data-tracking-control-name="public_jobs_jserp-result_search-card" data-tracking-client-ingraph data-tracking-will-navigate>
          
          <span class="sr-only">
              
        
        Assistant Store Manager - Calvin Klein La Roca
      
      
          </span>
        </a>

      
        
    <div class="search-entity-media">
        
      <img class="artdeco-entity-image artdeco-entity-image--square-4
          " data-delayed-url="https://media.licdn.com/dms/image/C4D0BAQESP3j6ucYkBQ/company-logo_100_100/0/1630545113039/allweweargroup_logo?e=2147483647&amp;v=beta&amp;t=tJfxz86aDuZ-nGxm80OSTvrc9-kvhayakvhIDhzpwJs" data-ghost-classes="artdeco-entity-image--ghost" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9a9u41thxt325ucfh5z8ga4m8" alt>
  
    </div>
  

        <div class="base-search-card__info">
          <h3 class="base-search-card__title">
            
        Assistant Store Manager - Calvin Klein La Roca
      
          </h3>

            <h4 class="base-search-card__subtitle">
              
          <a class="hidden-nested-link" data-tracking-client-ingraph data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle" data-tracking-will-navigate href="https://es.linkedin.com/company/awwg?trk=public_jobs_jserp-result_job-search-card-subtitle">
            AWWG
          </a>
      
            </h4>

<!---->
            <div class="base-search-card__metadata">
              
          <span class="job-search-card__location">
            Barcelona, Catalonia, Spain
          </span>

<!---->
          <div class="job-search-card__benefits">
            
                      
    
    
    
    

    <div class="result-benefits">
      <icon class="result-benefits__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/ee2elqv6ktdjhlrxiyhac6py6" data-svg-class-name="result-benefits__icon-svg"></icon>
      <span class="result-benefits__text">
         Be an early applicant
<!---->      </span>
    </div>
  
                  
          </div>

<!---->
          <time class="job-search-card__listdate" datetime="2023-12-05">
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      1 month ago
  
          </time>

<!---->      
            </div>
        </div>
<!---->      
    
      </div>
  
  
  
  
              </li>
              <li>
                

    

    
    
    
      <div class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:3607417622" data-search-id="5FNdHh7NxabEmqYmXePjzQ==" data-tracking-id="Ky8j0WyA/IX/rOY6UlZZlQ==" data-column="1" data-row="7">
        

        <a class="base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]" href="https://es.linkedin.com/jobs/view/administrativos-as-de-fincas-at-empresas-iman-3607417622?refId=5FNdHh7NxabEmqYmXePjzQ%3D%3D&amp;trackingId=Ky8j0WyA%2FIX%2FrOY6UlZZlQ%3D%3D&amp;position=7&amp;pageNum=0&amp;trk=public_jobs_jserp-result_search-card" data-tracking-control-name="public_jobs_jserp-result_search-card" data-tracking-client-ingraph data-tracking-will-navigate>
          
          <span class="sr-only">
              
        
        ADMINISTRATIVOS/AS DE FINCAS
      
      
          </span>
        </a>

      
        
    <div class="search-entity-media">
        
      <img class="artdeco-entity-image artdeco-entity-image--square-4
          " data-delayed-url="https://media.licdn.com/dms/image/C4E0BAQHUMqszynhG4A/company-logo_100_100/0/1652884342501/empresas_iman_logo?e=2147483647&amp;v=beta&amp;t=NJeOpAJxeAl4wkt9UMZNU8pHVnPq1dLx_5yrG6ap-GI" data-ghost-classes="artdeco-entity-image--ghost" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9a9u41thxt325ucfh5z8ga4m8" alt>
  
    </div>
  

        <div class="base-search-card__info">
          <h3 class="base-search-card__title">
            
        ADMINISTRATIVOS/AS DE FINCAS
      
          </h3>

            <h4 class="base-search-card__subtitle">
              
          <a class="hidden-nested-link" data-tracking-client-ingraph data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle" data-tracking-will-navigate href="https://es.linkedin.com/company/empresas-iman?trk=public_jobs_jserp-result_job-search-card-subtitle">
            EMPRESAS IMAN
          </a>
      
            </h4>

<!---->
            <div class="base-search-card__metadata">
              
          <span class="job-search-card__location">
            Cornellà de Llobregat, Catalonia, Spain
          </span>

<!---->
          <div class="job-search-card__benefits">
            
                      
    
    
    
    

    <div class="result-benefits">
      <icon class="result-benefits__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/ee2elqv6ktdjhlrxiyhac6py6" data-svg-class-name="result-benefits__icon-svg"></icon>
      <span class="result-benefits__text">
         Be an early applicant
<!---->      </span>
    </div>
  
                  
          </div>

<!---->
          <time class="job-search-card__listdate" datetime="2023-04-22">
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      8 months ago
  
          </time>

<!---->      
            </div>
        </div>
<!---->      
    
      </div>
  
  
  
  
              </li>
              <li>
                

    

    
    
    
      <div class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:3789774077" data-search-id="5FNdHh7NxabEmqYmXePjzQ==" data-tracking-id="OwWJ/JZT8Gj0jEGJc9pklw==" data-column="1" data-row="8">
        

        <a class="base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]" href="https://es.linkedin.com/jobs/view/store-manager-murcia-at-vicio-3789774077?refId=5FNdHh7NxabEmqYmXePjzQ%3D%3D&amp;trackingId=OwWJ%2FJZT8Gj0jEGJc9pklw%3D%3D&amp;position=8&amp;pageNum=0&amp;trk=public_jobs_jserp-result_search-card" data-tracking-control-name="public_jobs_jserp-result_search-card" data-tracking-client-ingraph data-tracking-will-navigate>
          
          <span class="sr-only">
              
        
        Store Manager (Murcia)
      
      
          </span>
        </a>

      
        
    <div class="search-entity-media">
        
      <img class="artdeco-entity-image artdeco-entity-image--square-4
          " data-delayed-url="https://media.licdn.com/dms/image/C4D0BAQESH6Xj9QBgOA/company-logo_100_100/0/1672143679530/ganas_de_vicio_logo?e=2147483647&amp;v=beta&amp;t=mFs_hwtBfW1std9GFxEqccOzc0SjdLW2Uo1br0cseDw" data-ghost-classes="artdeco-entity-image--ghost" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9a9u41thxt325ucfh5z8ga4m8" alt>
  
    </div>
  

        <div class="base-search-card__info">
          <h3 class="base-search-card__title">
            
        Store Manager (Murcia)
      
          </h3>

            <h4 class="base-search-card__subtitle">
              
          <a class="hidden-nested-link" data-tracking-client-ingraph data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle" data-tracking-will-navigate href="https://es.linkedin.com/company/ganas-de-vicio?trk=public_jobs_jserp-result_job-search-card-subtitle">
            VICIO
          </a>
      
            </h4>

<!---->
            <div class="base-search-card__metadata">
              
          <span class="job-search-card__location">
            Barcelona, Catalonia, Spain
          </span>

<!---->
          <div class="job-search-card__benefits">
            
                      
    
    
    
    

    <div class="result-benefits">
      <icon class="result-benefits__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/ee2elqv6ktdjhlrxiyhac6py6" data-svg-class-name="result-benefits__icon-svg"></icon>
      <span class="result-benefits__text">
         Be an early applicant
<!---->      </span>
    </div>
  
                  
          </div>

<!---->
          <time class="job-search-card__listdate" datetime="2023-12-19">
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      4 weeks ago
  
          </time>

<!---->      
            </div>
        </div>
<!---->      
    
      </div>
  
  
  
  
              </li>
              <li>
                

    

    
    
    
      <div class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:3679518083" data-search-id="5FNdHh7NxabEmqYmXePjzQ==" data-tracking-id="bG9N0cb2f94x+cglkm3u1w==" data-column="1" data-row="9">
        

        <a class="base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]" href="https://es.linkedin.com/jobs/view/store-manager-firma-mujer-el-prat-at-luxe-talent-3679518083?refId=5FNdHh7NxabEmqYmXePjzQ%3D%3D&amp;trackingId=bG9N0cb2f94x%2Bcglkm3u1w%3D%3D&amp;position=9&amp;pageNum=0&amp;trk=public_jobs_jserp-result_search-card" data-tracking-control-name="public_jobs_jserp-result_search-card" data-tracking-client-ingraph data-tracking-will-navigate>
          
          <span class="sr-only">
              
        
        Store Manager - firma mujer - El Prat
      
      
          </span>
        </a>

      
        
    <div class="search-entity-media">
        
      <img class="artdeco-entity-image artdeco-entity-image--square-4
          " data-delayed-url="https://media.licdn.com/dms/image/C4D0BAQHF4t81QtR0IQ/company-logo_100_100/0/1630570662950/luxetalent_logo?e=2147483647&amp;v=beta&amp;t=LGrFGNbsos2ICR-XUfknJ1z-ekoSKa0Y8OCXL3GyVv4" data-ghost-classes="artdeco-entity-image--ghost" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9a9u41thxt325ucfh5z8ga4m8" alt>
  
    </div>
  

        <div class="base-search-card__info">
          <h3 class="base-search-card__title">
            
        Store Manager - firma mujer - El Prat
      
          </h3>

            <h4 class="base-search-card__subtitle">
              
          <a class="hidden-nested-link" data-tracking-client-ingraph data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle" data-tracking-will-navigate href="https://es.linkedin.com/company/luxetalent?trk=public_jobs_jserp-result_job-search-card-subtitle">
            LUXE TALENT
          </a>
      
            </h4>

<!---->
            <div class="base-search-card__metadata">
              
          <span class="job-search-card__location">
            Barcelona, Catalonia, Spain
          </span>

<!---->
          <div class="job-search-card__benefits">
            
                      
    
    
    
    

    <div class="result-benefits">
      <icon class="result-benefits__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/ee2elqv6ktdjhlrxiyhac6py6" data-svg-class-name="result-benefits__icon-svg"></icon>
      <span class="result-benefits__text">
         Be an early applicant
<!---->      </span>
    </div>
  
                  
          </div>

<!---->
          <time class="job-search-card__listdate" datetime="2023-07-06">
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      6 months ago
  
          </time>

<!---->      
            </div>
        </div>
<!---->      
    
      </div>
  
  
  
  
              </li>
              <li>
                

    

    
    
    
      <div class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:3792186284" data-search-id="5FNdHh7NxabEmqYmXePjzQ==" data-tracking-id="AMLIvYqP+iVZN0vjlCy5gQ==" data-column="1" data-row="10">
        

        <a class="base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]" href="https://es.linkedin.com/jobs/view/store-manager-illa-diagonal-at-tropicfeel-3792186284?refId=5FNdHh7NxabEmqYmXePjzQ%3D%3D&amp;trackingId=AMLIvYqP%2BiVZN0vjlCy5gQ%3D%3D&amp;position=10&amp;pageNum=0&amp;trk=public_jobs_jserp-result_search-card" data-tracking-control-name="public_jobs_jserp-result_search-card" data-tracking-client-ingraph data-tracking-will-navigate>
          
          <span class="sr-only">
              
        
        Store Manager - Illa Diagonal
      
      
          </span>
        </a>

      
        
    <div class="search-entity-media">
        
      <img class="artdeco-entity-image artdeco-entity-image--square-4
          " data-delayed-url="https://media.licdn.com/dms/image/C4D0BAQGJBK2dBmU7aA/company-logo_100_100/0/1669715764615/tropicfeel_logo?e=2147483647&amp;v=beta&amp;t=BThUCnbKbIDFNbmlvQCsddbP2_A9H4OTKzmPpXCt-eY" data-ghost-classes="artdeco-entity-image--ghost" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9a9u41thxt325ucfh5z8ga4m8" alt>
  
    </div>
  

        <div class="base-search-card__info">
          <h3 class="base-search-card__title">
            
        Store Manager - Illa Diagonal
      
          </h3>

            <h4 class="base-search-card__subtitle">
              
          <a class="hidden-nested-link" data-tracking-client-ingraph data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle" data-tracking-will-navigate href="https://es.linkedin.com/company/tropicfeel?trk=public_jobs_jserp-result_job-search-card-subtitle">
            Tropicfeel
          </a>
      
            </h4>

<!---->
            <div class="base-search-card__metadata">
              
          <span class="job-search-card__location">
            Barcelona, Catalonia, Spain
          </span>

<!---->
          <div class="job-search-card__benefits">
            
                      
    
    
    
    

    <div class="result-benefits">
      <icon class="result-benefits__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/ee2elqv6ktdjhlrxiyhac6py6" data-svg-class-name="result-benefits__icon-svg"></icon>
      <span class="result-benefits__text">
         Be an early applicant
<!---->      </span>
    </div>
  
                  
          </div>

<!---->
          <time class="job-search-card__listdate" datetime="2023-12-22">
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      3 weeks ago
  
          </time>

<!---->      
            </div>
        </div>
<!---->      
    
      </div>
  
  
  
  
              </li>
              <li>
                

    

    
    
    
      <div class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:3683805468" data-search-id="5FNdHh7NxabEmqYmXePjzQ==" data-tracking-id="FNOMj1ND42Dw3cMJaSLHTA==" data-column="1" data-row="11">
        

        <a class="base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]" href="https://es.linkedin.com/jobs/view/administrativos-as-de-fincas-at-empresas-iman-3683805468?refId=5FNdHh7NxabEmqYmXePjzQ%3D%3D&amp;trackingId=FNOMj1ND42Dw3cMJaSLHTA%3D%3D&amp;position=11&amp;pageNum=0&amp;trk=public_jobs_jserp-result_search-card" data-tracking-control-name="public_jobs_jserp-result_search-card" data-tracking-client-ingraph data-tracking-will-navigate>
          
          <span class="sr-only">
              
        
        ADMINISTRATIVOS/AS DE FINCAS
      
      
          </span>
        </a>

      
        
    <div class="search-entity-media">
        
      <img class="artdeco-entity-image artdeco-entity-image--square-4
          " data-delayed-url="https://media.licdn.com/dms/image/C4E0BAQHUMqszynhG4A/company-logo_100_100/0/1652884342501/empresas_iman_logo?e=2147483647&amp;v=beta&amp;t=NJeOpAJxeAl4wkt9UMZNU8pHVnPq1dLx_5yrG6ap-GI" data-ghost-classes="artdeco-entity-image--ghost" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9a9u41thxt325ucfh5z8ga4m8" alt>
  
    </div>
  

        <div class="base-search-card__info">
          <h3 class="base-search-card__title">
            
        ADMINISTRATIVOS/AS DE FINCAS
      
          </h3>

            <h4 class="base-search-card__subtitle">
              
          <a class="hidden-nested-link" data-tracking-client-ingraph data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle" data-tracking-will-navigate href="https://es.linkedin.com/company/empresas-iman?trk=public_jobs_jserp-result_job-search-card-subtitle">
            EMPRESAS IMAN
          </a>
      
            </h4>

<!---->
            <div class="base-search-card__metadata">
              
          <span class="job-search-card__location">
            Cornellà de Llobregat, Catalonia, Spain
          </span>

<!---->
          <div class="job-search-card__benefits">
            
                      
    
    
    
    

    <div class="result-benefits">
      <icon class="result-benefits__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/ee2elqv6ktdjhlrxiyhac6py6" data-svg-class-name="result-benefits__icon-svg"></icon>
      <span class="result-benefits__text">
         Be an early applicant
<!---->      </span>
    </div>
  
                  
          </div>

<!---->
          <time class="job-search-card__listdate" datetime="2023-07-10">
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      6 months ago
  
          </time>

<!---->      
            </div>
        </div>
<!---->      
    
      </div>
  
  
  
  
              </li>
              <li>
                

    

    
    
    
      <div class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:3806302565" data-search-id="5FNdHh7NxabEmqYmXePjzQ==" data-tracking-id="J85bZ5PB9sht3unEkSrq6A==" data-column="1" data-row="12">
        

        <a class="base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]" href="https://es.linkedin.com/jobs/view/stockroom-manager-adidas-store-barcelona-paseo-de-gracia-at-adidas-3806302565?refId=5FNdHh7NxabEmqYmXePjzQ%3D%3D&amp;trackingId=J85bZ5PB9sht3unEkSrq6A%3D%3D&amp;position=12&amp;pageNum=0&amp;trk=public_jobs_jserp-result_search-card" data-tracking-control-name="public_jobs_jserp-result_search-card" data-tracking-client-ingraph data-tracking-will-navigate>
          
          <span class="sr-only">
              
        
        STOCKROOM MANAGER - adidas Store Barcelona - Paseo de Gracia
      
      
          </span>
        </a>

      
        
    <div class="search-entity-media">
        
      <img class="artdeco-entity-image artdeco-entity-image--square-4
          " data-delayed-url="https://media.licdn.com/dms/image/D4E0BAQGCfxj85VyrNA/company-logo_100_100/0/1688526664084/adidas_logo?e=2147483647&amp;v=beta&amp;t=wEhOy6WrX1siRpOBU1Ma7_8qLv6B5ssyaBiTL9Z57f0" data-ghost-classes="artdeco-entity-image--ghost" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9a9u41thxt325ucfh5z8ga4m8" alt>
  
    </div>
  

        <div class="base-search-card__info">
          <h3 class="base-search-card__title">
            
        STOCKROOM MANAGER - adidas Store Barcelona - Paseo de Gracia
      
          </h3>

            <h4 class="base-search-card__subtitle">
              
          <a class="hidden-nested-link" data-tracking-client-ingraph data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle" data-tracking-will-navigate href="https://de.linkedin.com/company/adidas?trk=public_jobs_jserp-result_job-search-card-subtitle">
            adidas
          </a>
      
            </h4>

<!---->
            <div class="base-search-card__metadata">
              
          <span class="job-search-card__location">
            Barcelona, Catalonia, Spain
          </span>

<!---->
          <div class="job-search-card__benefits">
            
                      
    
    
    
    

    <div class="result-benefits">
      <icon class="result-benefits__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/ee2elqv6ktdjhlrxiyhac6py6" data-svg-class-name="result-benefits__icon-svg"></icon>
      <span class="result-benefits__text">
         Be an early applicant
<!---->      </span>
    </div>
  
                  
          </div>

<!---->
          <time class="job-search-card__listdate--new" datetime="2024-01-16">
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      37 minutes ago
  
          </time>

<!---->      
            </div>
        </div>
<!---->      
    
      </div>
  
  
  
  
              </li>
              <li>
                

    

    
    
    
      <div class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:3803538528" data-search-id="5FNdHh7NxabEmqYmXePjzQ==" data-tracking-id="tkiPiy4pUYFll8Jqa5Js8w==" data-column="1" data-row="13">
        

        <a class="base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]" href="https://es.linkedin.com/jobs/view/recepcionista-administrativo-a-at-iplan-gesti%C3%B3n-integral-3803538528?refId=5FNdHh7NxabEmqYmXePjzQ%3D%3D&amp;trackingId=tkiPiy4pUYFll8Jqa5Js8w%3D%3D&amp;position=13&amp;pageNum=0&amp;trk=public_jobs_jserp-result_search-card" data-tracking-control-name="public_jobs_jserp-result_search-card" data-tracking-client-ingraph data-tracking-will-navigate>
          
          <span class="sr-only">
              
        
        Recepcionista-Administrativo/a
      
      
          </span>
        </a>

      
        
    <div class="search-entity-media">
        
      <img class="artdeco-entity-image artdeco-entity-image--square-4
          " data-delayed-url="https://media.licdn.com/dms/image/C560BAQGDlD7bCXjgUA/company-logo_100_100/0/1630613196299/iplan_gestin_integral_s_l__logo?e=2147483647&amp;v=beta&amp;t=uIQAnSm7umM6m6LDN3xcZ8sMRbqgmRrLsj2QxtFeSB4" data-ghost-classes="artdeco-entity-image--ghost" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9a9u41thxt325ucfh5z8ga4m8" alt>
  
    </div>
  

        <div class="base-search-card__info">
          <h3 class="base-search-card__title">
            
        Recepcionista-Administrativo/a
      
          </h3>

            <h4 class="base-search-card__subtitle">
              
          <a class="hidden-nested-link" data-tracking-client-ingraph data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle" data-tracking-will-navigate href="https://es.linkedin.com/company/iplan-gestion-integral-s-l?trk=public_jobs_jserp-result_job-search-card-subtitle">
            Iplan Gestión Integral
          </a>
      
            </h4>

<!---->
            <div class="base-search-card__metadata">
              
          <span class="job-search-card__location">
            Barcelona, Catalonia, Spain
          </span>

<!---->
          <div class="job-search-card__benefits">
            
                      
    
    
    
    

    <div class="result-benefits">
      <icon class="result-benefits__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/1pwj7aot6lxrfhr9sdta6cnxw" data-svg-class-name="result-benefits__icon-svg"></icon>
      <span class="result-benefits__text">
         Actively Hiring
<!---->      </span>
    </div>
  
                  
          </div>

<!---->
          <time class="job-search-card__listdate" datetime="2024-01-11">
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      5 days ago
  
          </time>

<!---->      
            </div>
        </div>
<!---->      
    
      </div>
  
  
  
  
              </li>
              <li>
                

    

    
    
    
      <div class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:3596689831" data-search-id="5FNdHh7NxabEmqYmXePjzQ==" data-tracking-id="3pw/To/RmR/c5oVn0pQKxg==" data-column="1" data-row="14">
        

        <a class="base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]" href="https://es.linkedin.com/jobs/view/assistant-store-manager-luxury-brand-barcelona-at-luxe-talent-3596689831?refId=5FNdHh7NxabEmqYmXePjzQ%3D%3D&amp;trackingId=3pw%2FTo%2FRmR%2Fc5oVn0pQKxg%3D%3D&amp;position=14&amp;pageNum=0&amp;trk=public_jobs_jserp-result_search-card" data-tracking-control-name="public_jobs_jserp-result_search-card" data-tracking-client-ingraph data-tracking-will-navigate>
          
          <span class="sr-only">
              
        
        Assistant Store Manager Luxury Brand - Barcelona
      
      
          </span>
        </a>

      
        
    <div class="search-entity-media">
        
      <img class="artdeco-entity-image artdeco-entity-image--square-4
          " data-delayed-url="https://media.licdn.com/dms/image/C4D0BAQHF4t81QtR0IQ/company-logo_100_100/0/1630570662950/luxetalent_logo?e=2147483647&amp;v=beta&amp;t=LGrFGNbsos2ICR-XUfknJ1z-ekoSKa0Y8OCXL3GyVv4" data-ghost-classes="artdeco-entity-image--ghost" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9a9u41thxt325ucfh5z8ga4m8" alt>
  
    </div>
  

        <div class="base-search-card__info">
          <h3 class="base-search-card__title">
            
        Assistant Store Manager Luxury Brand - Barcelona
      
          </h3>

            <h4 class="base-search-card__subtitle">
              
          <a class="hidden-nested-link" data-tracking-client-ingraph data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle" data-tracking-will-navigate href="https://es.linkedin.com/company/luxetalent?trk=public_jobs_jserp-result_job-search-card-subtitle">
            LUXE TALENT
          </a>
      
            </h4>

<!---->
            <div class="base-search-card__metadata">
              
          <span class="job-search-card__location">
            Barcelona, Catalonia, Spain
          </span>

<!---->
          <div class="job-search-card__benefits">
            
                      
    
    
    
    

    <div class="result-benefits">
      <icon class="result-benefits__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/1pwj7aot6lxrfhr9sdta6cnxw" data-svg-class-name="result-benefits__icon-svg"></icon>
      <span class="result-benefits__text">
         Actively Hiring
<!---->      </span>
    </div>
  
                  
          </div>

<!---->
          <time class="job-search-card__listdate" datetime="2023-05-05">
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      8 months ago
  
          </time>

<!---->      
            </div>
        </div>
<!---->      
    
      </div>
  
  
  
  
              </li>
              <li>
                

    

    
    
    
      <div class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:3596690688" data-search-id="5FNdHh7NxabEmqYmXePjzQ==" data-tracking-id="AiG5H2v40Cdn5sh2WMj0Cw==" data-column="1" data-row="15">
        

        <a class="base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]" href="https://es.linkedin.com/jobs/view/store-manager-la-roca-village-barcelona-at-luxe-talent-3596690688?refId=5FNdHh7NxabEmqYmXePjzQ%3D%3D&amp;trackingId=AiG5H2v40Cdn5sh2WMj0Cw%3D%3D&amp;position=15&amp;pageNum=0&amp;trk=public_jobs_jserp-result_search-card" data-tracking-control-name="public_jobs_jserp-result_search-card" data-tracking-client-ingraph data-tracking-will-navigate>
          
          <span class="sr-only">
              
        
        Store Manager La Roca Village (Barcelona)
      
      
          </span>
        </a>

      
        
    <div class="search-entity-media">
        
      <img class="artdeco-entity-image artdeco-entity-image--square-4
          " data-delayed-url="https://media.licdn.com/dms/image/C4D0BAQHF4t81QtR0IQ/company-logo_100_100/0/1630570662950/luxetalent_logo?e=2147483647&amp;v=beta&amp;t=LGrFGNbsos2ICR-XUfknJ1z-ekoSKa0Y8OCXL3GyVv4" data-ghost-classes="artdeco-entity-image--ghost" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9a9u41thxt325ucfh5z8ga4m8" alt>
  
    </div>
  

        <div class="base-search-card__info">
          <h3 class="base-search-card__title">
            
        Store Manager La Roca Village (Barcelona)
      
          </h3>

            <h4 class="base-search-card__subtitle">
              
          <a class="hidden-nested-link" data-tracking-client-ingraph data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle" data-tracking-will-navigate href="https://es.linkedin.com/company/luxetalent?trk=public_jobs_jserp-result_job-search-card-subtitle">
            LUXE TALENT
          </a>
      
            </h4>

<!---->
            <div class="base-search-card__metadata">
              
          <span class="job-search-card__location">
            Barcelona, Catalonia, Spain
          </span>

<!---->
          <div class="job-search-card__benefits">
            
                      
    
    
    
    

    <div class="result-benefits">
      <icon class="result-benefits__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/ee2elqv6ktdjhlrxiyhac6py6" data-svg-class-name="result-benefits__icon-svg"></icon>
      <span class="result-benefits__text">
         Be an early applicant
<!---->      </span>
    </div>
  
                  
          </div>

<!---->
          <time class="job-search-card__listdate" datetime="2023-05-05">
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      8 months ago
  
          </time>

<!---->      
            </div>
        </div>
<!---->      
    
      </div>
  
  
  
  
              </li>
              <li>
                

    

    
    
    
      <div class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:3792468939" data-search-id="5FNdHh7NxabEmqYmXePjzQ==" data-tracking-id="mOaGOX/ovWiSSpK94laUjw==" data-column="1" data-row="16">
        

        <a class="base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]" href="https://es.linkedin.com/jobs/view/store-manager-shop-manager-encargad%40-de-tienda-barcelona-at-casa-international-3792468939?refId=5FNdHh7NxabEmqYmXePjzQ%3D%3D&amp;trackingId=mOaGOX%2FovWiSSpK94laUjw%3D%3D&amp;position=16&amp;pageNum=0&amp;trk=public_jobs_jserp-result_search-card" data-tracking-control-name="public_jobs_jserp-result_search-card" data-tracking-client-ingraph data-tracking-will-navigate>
          
          <span class="sr-only">
              
        
        Store Manager - Shop Manager - Encargad@ de Tienda -Barcelona
      
      
          </span>
        </a>

      
        
    <div class="search-entity-media">
        
      <img class="artdeco-entity-image artdeco-entity-image--square-4
          " data-delayed-url="https://media.licdn.com/dms/image/C4E0BAQFjkibvmEI4cA/company-logo_100_100/0/1631313969883?e=2147483647&amp;v=beta&amp;t=tQ5TnG0H3X_F1mmI2OpY_9T1xMKYtLmhi_kNAC-XFew" data-ghost-classes="artdeco-entity-image--ghost" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9a9u41thxt325ucfh5z8ga4m8" alt>
  
    </div>
  

        <div class="base-search-card__info">
          <h3 class="base-search-card__title">
            
        Store Manager - Shop Manager - Encargad@ de Tienda -Barcelona
      
          </h3>

            <h4 class="base-search-card__subtitle">
              
          <a class="hidden-nested-link" data-tracking-client-ingraph data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle" data-tracking-will-navigate href="https://be.linkedin.com/company/c-a-s-a--international?trk=public_jobs_jserp-result_job-search-card-subtitle">
            Casa International
          </a>
      
            </h4>

<!---->
            <div class="base-search-card__metadata">
              
          <span class="job-search-card__location">
            Barcelona, Catalonia, Spain
          </span>

<!---->
          <div class="job-search-card__benefits">
            
                      
    
    
    
    

    <div class="result-benefits">
      <icon class="result-benefits__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/ee2elqv6ktdjhlrxiyhac6py6" data-svg-class-name="result-benefits__icon-svg"></icon>
      <span class="result-benefits__text">
         Be an early applicant
<!---->      </span>
    </div>
  
                  
          </div>

<!---->
          <time class="job-search-card__listdate" datetime="2023-11-28">
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      1 month ago
  
          </time>

<!---->      
            </div>
        </div>
<!---->      
    
      </div>
  
  
  
  
              </li>
              <li>
                

    

    
    
    
      <div class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:3762814348" data-search-id="5FNdHh7NxabEmqYmXePjzQ==" data-tracking-id="2pBa1LWKEXcw4U+i+QezBg==" data-column="1" data-row="17">
        

        <a class="base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]" href="https://es.linkedin.com/jobs/view/assistant-store-manager-paseo-3-at-mango-3762814348?refId=5FNdHh7NxabEmqYmXePjzQ%3D%3D&amp;trackingId=2pBa1LWKEXcw4U%2Bi%2BQezBg%3D%3D&amp;position=17&amp;pageNum=0&amp;trk=public_jobs_jserp-result_search-card" data-tracking-control-name="public_jobs_jserp-result_search-card" data-tracking-client-ingraph data-tracking-will-navigate>
          
          <span class="sr-only">
              
        
        ASSISTANT STORE MANAGER - PASEO 3
      
      
          </span>
        </a>

      
        
    <div class="search-entity-media">
        
      <img class="artdeco-entity-image artdeco-entity-image--square-4
          " data-delayed-url="https://media.licdn.com/dms/image/C4D0BAQHLuFSgknIvzQ/company-logo_100_100/0/1630580083479/mango_logo?e=2147483647&amp;v=beta&amp;t=eruW8fSg79E4aG1NjVOXjt9v_xWKeISar-QJAFc4ycU" data-ghost-classes="artdeco-entity-image--ghost" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9a9u41thxt325ucfh5z8ga4m8" alt>
  
    </div>
  

        <div class="base-search-card__info">
          <h3 class="base-search-card__title">
            
        ASSISTANT STORE MANAGER - PASEO 3
      
          </h3>

            <h4 class="base-search-card__subtitle">
              
          <a class="hidden-nested-link" data-tracking-client-ingraph data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle" data-tracking-will-navigate href="https://es.linkedin.com/company/mango?trk=public_jobs_jserp-result_job-search-card-subtitle">
            MANGO
          </a>
      
            </h4>

<!---->
            <div class="base-search-card__metadata">
              
          <span class="job-search-card__location">
            Barcelona, Catalonia, Spain
          </span>

<!---->
          <div class="job-search-card__benefits">
            
                      
    
    
    
    

    <div class="result-benefits">
      <icon class="result-benefits__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/1pwj7aot6lxrfhr9sdta6cnxw" data-svg-class-name="result-benefits__icon-svg"></icon>
      <span class="result-benefits__text">
         Actively Hiring
<!---->      </span>
    </div>
  
                  
          </div>

<!---->
          <time class="job-search-card__listdate" datetime="2023-11-13">
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      2 months ago
  
          </time>

<!---->      
            </div>
        </div>
<!---->      
    
      </div>
  
  
  
  
              </li>
              <li>
                

    

    
    
    
      <div class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:3596689428" data-search-id="5FNdHh7NxabEmqYmXePjzQ==" data-tracking-id="SfOpc4CGLCmSBNq8nWjr+Q==" data-column="1" data-row="18">
        

        <a class="base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]" href="https://es.linkedin.com/jobs/view/recepcionista-auxiliar-administrativo-a-barcelona-at-what-s-up%21-living-english-3596689428?refId=5FNdHh7NxabEmqYmXePjzQ%3D%3D&amp;trackingId=SfOpc4CGLCmSBNq8nWjr%2BQ%3D%3D&amp;position=18&amp;pageNum=0&amp;trk=public_jobs_jserp-result_search-card" data-tracking-control-name="public_jobs_jserp-result_search-card" data-tracking-client-ingraph data-tracking-will-navigate>
          
          <span class="sr-only">
              
        
        RECEPCIONISTA AUXILIAR ADMINISTRATIVO/A - BARCELONA
      
      
          </span>
        </a>

      
        
    <div class="search-entity-media">
        
      <img class="artdeco-entity-image artdeco-entity-image--square-4
          " data-delayed-url="https://media.licdn.com/dms/image/D4D0BAQGS9dYbhYHSrA/company-logo_100_100/0/1694770669402/whats_up_living_english_logo?e=2147483647&amp;v=beta&amp;t=PPM2Drl1myxz4XxmibUez4STuci-VjWU3Hc_Au53rJU" data-ghost-classes="artdeco-entity-image--ghost" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9a9u41thxt325ucfh5z8ga4m8" alt>
  
    </div>
  

        <div class="base-search-card__info">
          <h3 class="base-search-card__title">
            
        RECEPCIONISTA AUXILIAR ADMINISTRATIVO/A - BARCELONA
      
          </h3>

            <h4 class="base-search-card__subtitle">
              
          <a class="hidden-nested-link" data-tracking-client-ingraph data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle" data-tracking-will-navigate href="https://es.linkedin.com/company/what%27s-up-living-english?trk=public_jobs_jserp-result_job-search-card-subtitle">
            What's Up! Living English
          </a>
      
            </h4>

<!---->
            <div class="base-search-card__metadata">
              
          <span class="job-search-card__location">
            Barcelona, Catalonia, Spain
          </span>

<!---->
          <div class="job-search-card__benefits">
            
                      
    
    
    
    

    <div class="result-benefits">
      <icon class="result-benefits__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/1pwj7aot6lxrfhr9sdta6cnxw" data-svg-class-name="result-benefits__icon-svg"></icon>
      <span class="result-benefits__text">
         Actively Hiring
<!---->      </span>
    </div>
  
                  
          </div>

<!---->
          <time class="job-search-card__listdate" datetime="2023-05-05">
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      8 months ago
  
          </time>

<!---->      
            </div>
        </div>
<!---->      
    
      </div>
  
  
  
  
              </li>
              <li>
                

    

    
    
    
      <div class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:3683877828" data-search-id="5FNdHh7NxabEmqYmXePjzQ==" data-tracking-id="GD02ws/u7gedIbyfVoYi+w==" data-column="1" data-row="19">
        

        <a class="base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]" href="https://es.linkedin.com/jobs/view/recepcionista-auxiliar-administrativo-a-barcelona-at-what-s-up%21-living-english-3683877828?refId=5FNdHh7NxabEmqYmXePjzQ%3D%3D&amp;trackingId=GD02ws%2Fu7gedIbyfVoYi%2Bw%3D%3D&amp;position=19&amp;pageNum=0&amp;trk=public_jobs_jserp-result_search-card" data-tracking-control-name="public_jobs_jserp-result_search-card" data-tracking-client-ingraph data-tracking-will-navigate>
          
          <span class="sr-only">
              
        
        RECEPCIONISTA AUXILIAR ADMINISTRATIVO/A - BARCELONA
      
      
          </span>
        </a>

      
        
    <div class="search-entity-media">
        
      <img class="artdeco-entity-image artdeco-entity-image--square-4
          " data-delayed-url="https://media.licdn.com/dms/image/D4D0BAQGS9dYbhYHSrA/company-logo_100_100/0/1694770669402/whats_up_living_english_logo?e=2147483647&amp;v=beta&amp;t=PPM2Drl1myxz4XxmibUez4STuci-VjWU3Hc_Au53rJU" data-ghost-classes="artdeco-entity-image--ghost" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9a9u41thxt325ucfh5z8ga4m8" alt>
  
    </div>
  

        <div class="base-search-card__info">
          <h3 class="base-search-card__title">
            
        RECEPCIONISTA AUXILIAR ADMINISTRATIVO/A - BARCELONA
      
          </h3>

            <h4 class="base-search-card__subtitle">
              
          <a class="hidden-nested-link" data-tracking-client-ingraph data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle" data-tracking-will-navigate href="https://es.linkedin.com/company/what%27s-up-living-english?trk=public_jobs_jserp-result_job-search-card-subtitle">
            What's Up! Living English
          </a>
      
            </h4>

<!---->
            <div class="base-search-card__metadata">
              
          <span class="job-search-card__location">
            Barcelona, Catalonia, Spain
          </span>

<!---->
          <div class="job-search-card__benefits">
            
                      
    
    
    
    

    <div class="result-benefits">
      <icon class="result-benefits__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/1pwj7aot6lxrfhr9sdta6cnxw" data-svg-class-name="result-benefits__icon-svg"></icon>
      <span class="result-benefits__text">
         Actively Hiring
<!---->      </span>
    </div>
  
                  
          </div>

<!---->
          <time class="job-search-card__listdate" datetime="2023-07-10">
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      6 months ago
  
          </time>

<!---->      
            </div>
        </div>
<!---->      
    
      </div>
  
  
  
  
              </li>
              <li>
                

    

    
    
    
      <div class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:3798392352" data-search-id="5FNdHh7NxabEmqYmXePjzQ==" data-tracking-id="EKTmKbo6kI3eR23W+rtJ0Q==" data-column="1" data-row="20">
        

        <a class="base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]" href="https://es.linkedin.com/jobs/view/assistant-store-manager-jd-barcelona-at-jd-sports-iberia-3798392352?refId=5FNdHh7NxabEmqYmXePjzQ%3D%3D&amp;trackingId=EKTmKbo6kI3eR23W%2BrtJ0Q%3D%3D&amp;position=20&amp;pageNum=0&amp;trk=public_jobs_jserp-result_search-card" data-tracking-control-name="public_jobs_jserp-result_search-card" data-tracking-client-ingraph data-tracking-will-navigate>
          
          <span class="sr-only">
              
        
        ASSISTANT STORE MANAGER JD BARCELONA
      
      
          </span>
        </a>

      
        
    <div class="search-entity-media">
        
      <img class="artdeco-entity-image artdeco-entity-image--square-4
          " data-delayed-url="https://media.licdn.com/dms/image/D4E0BAQH2QuI2uOc6-A/company-logo_100_100/0/1666089294202/jdsportsiberia_logo?e=2147483647&amp;v=beta&amp;t=lTDsO430UEA73rH6_RnhpgPHHaUNLA8d7hpoPdhOrR4" data-ghost-classes="artdeco-entity-image--ghost" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9a9u41thxt325ucfh5z8ga4m8" alt>
  
    </div>
  

        <div class="base-search-card__info">
          <h3 class="base-search-card__title">
            
        ASSISTANT STORE MANAGER JD BARCELONA
      
          </h3>

            <h4 class="base-search-card__subtitle">
              
          <a class="hidden-nested-link" data-tracking-client-ingraph data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle" data-tracking-will-navigate href="https://es.linkedin.com/company/jd-sports-iberiaa?trk=public_jobs_jserp-result_job-search-card-subtitle">
            JD Sports Iberia
          </a>
      
            </h4>

<!---->
            <div class="base-search-card__metadata">
              
          <span class="job-search-card__location">
            Barcelona, Catalonia, Spain
          </span>

<!---->
<!---->
<!---->
          <time class="job-search-card__listdate" datetime="2024-01-04">
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      1 week ago
  
          </time>

<!---->      
            </div>
        </div>
<!---->      
    
      </div>
  
  
  
  
              </li>
              <li>
                

    

    
    
    
      <div class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:3764828387" data-search-id="5FNdHh7NxabEmqYmXePjzQ==" data-tracking-id="tGzthrVGKvxVcd6XosaJjQ==" data-column="1" data-row="21">
        

        <a class="base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]" href="https://es.linkedin.com/jobs/view/retail-media-campaign-associate-at-hp-3764828387?refId=5FNdHh7NxabEmqYmXePjzQ%3D%3D&amp;trackingId=tGzthrVGKvxVcd6XosaJjQ%3D%3D&amp;position=21&amp;pageNum=0&amp;trk=public_jobs_jserp-result_search-card" data-tracking-control-name="public_jobs_jserp-result_search-card" data-tracking-client-ingraph data-tracking-will-navigate>
          
          <span class="sr-only">
              
        
        Retail Media Campaign Associate
      
      
          </span>
        </a>

      
        
    <div class="search-entity-media">
        
      <img class="artdeco-entity-image artdeco-entity-image--square-4
          " data-delayed-url="https://media.licdn.com/dms/image/D560BAQEZ6ZVjZmwiwA/company-logo_100_100/0/1692312131432/hp_logo?e=2147483647&amp;v=beta&amp;t=WEqTOFflRHZYNzSANVsNI-eE711zTYzCCGiPOpXhO4Q" data-ghost-classes="artdeco-entity-image--ghost" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9a9u41thxt325ucfh5z8ga4m8" alt>
  
    </div>
  

        <div class="base-search-card__info">
          <h3 class="base-search-card__title">
            
        Retail Media Campaign Associate
      
          </h3>

            <h4 class="base-search-card__subtitle">
              
          <a class="hidden-nested-link" data-tracking-client-ingraph data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle" data-tracking-will-navigate href="https://www.linkedin.com/company/hp?trk=public_jobs_jserp-result_job-search-card-subtitle">
            HP
          </a>
      
            </h4>

<!---->
            <div class="base-search-card__metadata">
              
          <span class="job-search-card__location">
            Sant Cugat del Vallès, Catalonia, Spain
          </span>

<!---->
          <div class="job-search-card__benefits">
            
                      
    
    
    
    

    <div class="result-benefits">
      <icon class="result-benefits__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/1pwj7aot6lxrfhr9sdta6cnxw" data-svg-class-name="result-benefits__icon-svg"></icon>
      <span class="result-benefits__text">
         Actively Hiring
<!---->      </span>
    </div>
  
                  
          </div>

<!---->
          <time class="job-search-card__listdate" datetime="2023-12-28">
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      2 weeks ago
  
          </time>

<!---->      
            </div>
        </div>
<!---->      
    
      </div>
  
  
  
  
              </li>
              <li>
                

    

    
    
    
      <div class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:3742082238" data-search-id="5FNdHh7NxabEmqYmXePjzQ==" data-tracking-id="+TJ9X0BHY5SwKXIYy3grdA==" data-column="1" data-row="22">
        

        <a class="base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]" href="https://es.linkedin.com/jobs/view/store-manager-sprinter-gav%C3%A1-at-sprinter-3742082238?refId=5FNdHh7NxabEmqYmXePjzQ%3D%3D&amp;trackingId=%2BTJ9X0BHY5SwKXIYy3grdA%3D%3D&amp;position=22&amp;pageNum=0&amp;trk=public_jobs_jserp-result_search-card" data-tracking-control-name="public_jobs_jserp-result_search-card" data-tracking-client-ingraph data-tracking-will-navigate>
          
          <span class="sr-only">
              
        
        STORE MANAGER SPRINTER GAVÁ
      
      
          </span>
        </a>

      
        
    <div class="search-entity-media">
        
      <img class="artdeco-entity-image artdeco-entity-image--square-4
          " data-delayed-url="https://media.licdn.com/dms/image/D4D0BAQFYV1_2XnUv9w/company-logo_100_100/0/1694697805007/sprinter_logo?e=2147483647&amp;v=beta&amp;t=USQpn7pnU84pXjHYhcQKqV5z9luEKY2KHLD5yU6K3nw" data-ghost-classes="artdeco-entity-image--ghost" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9a9u41thxt325ucfh5z8ga4m8" alt>
  
    </div>
  

        <div class="base-search-card__info">
          <h3 class="base-search-card__title">
            
        STORE MANAGER SPRINTER GAVÁ
      
          </h3>

            <h4 class="base-search-card__subtitle">
              
          <a class="hidden-nested-link" data-tracking-client-ingraph data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle" data-tracking-will-navigate href="https://es.linkedin.com/company/sprinter?trk=public_jobs_jserp-result_job-search-card-subtitle">
            SPRINTER
          </a>
      
            </h4>

<!---->
            <div class="base-search-card__metadata">
              
          <span class="job-search-card__location">
            Barcelona, Catalonia, Spain
          </span>

<!---->
          <div class="job-search-card__benefits">
            
                      
    
    
    
    

    <div class="result-benefits">
      <icon class="result-benefits__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/ee2elqv6ktdjhlrxiyhac6py6" data-svg-class-name="result-benefits__icon-svg"></icon>
      <span class="result-benefits__text">
         Be an early applicant
<!---->      </span>
    </div>
  
                  
          </div>

<!---->
          <time class="job-search-card__listdate" datetime="2023-10-18">
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      2 months ago
  
          </time>

<!---->      
            </div>
        </div>
<!---->      
    
      </div>
  
  
  
  
              </li>
              <li>
                

    

    
    
    
      <div class="base-card relative w-full hover:no-underline focus:no-underline base-card--link base-search-card base-search-card--link job-search-card" data-entity-urn="urn:li:jobPosting:3732682447" data-search-id="5FNdHh7NxabEmqYmXePjzQ==" data-tracking-id="ZkvMwuopW0jHSZsRWz4bOw==" data-column="1" data-row="23">
        

        <a class="base-card__full-link absolute top-0 right-0 bottom-0 left-0 p-0 z-[2]" href="https://es.linkedin.com/jobs/view/store-manager-la-roca-village-barcelona-at-luxe-talent-3732682447?refId=5FNdHh7NxabEmqYmXePjzQ%3D%3D&amp;trackingId=ZkvMwuopW0jHSZsRWz4bOw%3D%3D&amp;position=23&amp;pageNum=0&amp;trk=public_jobs_jserp-result_search-card" data-tracking-control-name="public_jobs_jserp-result_search-card" data-tracking-client-ingraph data-tracking-will-navigate>
          
          <span class="sr-only">
              
        
        Store Manager La Roca Village (Barcelona)
      
      
          </span>
        </a>

      
        
    <div class="search-entity-media">
        
      <img class="artdeco-entity-image artdeco-entity-image--square-4
          " data-delayed-url="https://media.licdn.com/dms/image/C4D0BAQHF4t81QtR0IQ/company-logo_100_100/0/1630570662950/luxetalent_logo?e=2147483647&amp;v=beta&amp;t=LGrFGNbsos2ICR-XUfknJ1z-ekoSKa0Y8OCXL3GyVv4" data-ghost-classes="artdeco-entity-image--ghost" data-ghost-url="https://static.licdn.com/aero-v1/sc/h/9a9u41thxt325ucfh5z8ga4m8" alt>
  
    </div>
  

        <div class="base-search-card__info">
          <h3 class="base-search-card__title">
            
        Store Manager La Roca Village (Barcelona)
      
          </h3>

            <h4 class="base-search-card__subtitle">
              
          <a class="hidden-nested-link" data-tracking-client-ingraph data-tracking-control-name="public_jobs_jserp-result_job-search-card-subtitle" data-tracking-will-navigate href="https://es.linkedin.com/company/luxetalent?trk=public_jobs_jserp-result_job-search-card-subtitle">
            LUXE TALENT
          </a>
      
            </h4>

<!---->
            <div class="base-search-card__metadata">
              
          <span class="job-search-card__location">
            Barcelona, Catalonia, Spain
          </span>

<!---->
          <div class="job-search-card__benefits">
            
                      
    
    
    
    

    <div class="result-benefits">
      <icon class="result-benefits__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/ee2elqv6ktdjhlrxiyhac6py6" data-svg-class-name="result-benefits__icon-svg"></icon>
      <span class="result-benefits__text">
         Be an early applicant
<!---->      </span>
    </div>
  
                  
          </div>

<!---->
          <time class="job-search-card__listdate" datetime="2023-09-09">
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

      4 months ago
  
          </time>

<!---->      
            </div>
        </div>
<!---->      
    
      </div>
  
  
  
  
              </li>
          </ul>

            
    
    

    

    
    <div class="loader">
      <div class="loader__container mb-2 overflow-hidden">
        <icon class="loader__icon inline-block loader__icon--default text-color-progress-loading" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/ddi43qwelxeqjxdd45pe3fvs1" data-svg-class-name="loader__icon-svg--small fill-currentColor h-[30px] min-h-[30px] w-[30px] min-w-[30px]"></icon>
      </div>
    </div>
  

      <button aria-label="See more jobs" class="infinite-scroller__show-more-button" data-tracking-control-name="infinite-scroller_show-more">

          
                See more jobs
              
      </button>
  

          
    <div class="px-1.5 flex inline-notification hidden text-color-signal-positive see-more-jobs__viewed-all" role="alert" type="success">
      <icon class="inline-notification__icon w-[20px] h-[20px] shrink-0 mr-[10px] inline-block" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/5y10kyxw0tpa4rk80dkbjhk6b"></icon>
      <p class="inline-notification__text text-sm leading-regular">
        You&#39;ve viewed all jobs for this search
<!---->      </p>
    </div>
  

          
    

<!---->  
      
            </section>
        </main>
        <section class="two-pane-serp-page__detail-view">
          
        <div class="details-pane__loader details-pane__loader--hide">
          
    <div class="loader">
      <div class="loader__container mb-2 overflow-hidden">
        <icon class="loader__icon inline-block loader__icon--default text-color-progress-loading" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/ddi43qwelxeqjxdd45pe3fvs1" data-svg-class-name="loader__icon-svg--large fill-currentColor h-[60px] min-h-[60px] w-[60px] min-w-[60px]"></icon>
      </div>
    </div>
  
        </div>
        <div class="details-pane__content"></div>
      
        </section>
      
      </div>

      
        
        
<!---->  
      
      

      

    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    

    
    
    
    

    <footer class="li-footer bg-transparent w-full ">
      <ul class="li-footer__list flex flex-wrap flex-row items-start justify-start w-full h-auto min-h-[50px] my-[0px] mx-auto py-3 px-2 papabear:w-[1128px] papabear:p-0">
        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        
          <span class="sr-only">LinkedIn</span>
          <icon class="li-footer__copy-logo text-color-logo-brand-alt inline-block self-center h-[14px] w-[56px] mr-1" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/e12h2cd8ac580qen9qdd0qks8"></icon>
          <span class="li-footer__copy-text flex items-center">&copy; 2024</span>
        
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://about.linkedin.com?trk=public_jobs_footer-about" data-tracking-control-name="public_jobs_footer-about" data-tracking-will-navigate>
          
          About
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/accessibility?trk=public_jobs_footer-accessibility" data-tracking-control-name="public_jobs_footer-accessibility" data-tracking-will-navigate>
          
          Accessibility
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/user-agreement?trk=public_jobs_footer-user-agreement" data-tracking-control-name="public_jobs_footer-user-agreement" data-tracking-will-navigate>
          
          User Agreement
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/privacy-policy?trk=public_jobs_footer-privacy-policy" data-tracking-control-name="public_jobs_footer-privacy-policy" data-tracking-will-navigate>
          
          Privacy Policy
        
        </a>
  </li>

<!---->        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/cookie-policy?trk=public_jobs_footer-cookie-policy" data-tracking-control-name="public_jobs_footer-cookie-policy" data-tracking-will-navigate>
          
          Cookie Policy
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/copyright-policy?trk=public_jobs_footer-copyright-policy" data-tracking-control-name="public_jobs_footer-copyright-policy" data-tracking-will-navigate>
          
          Copyright Policy
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://brand.linkedin.com/policies?trk=public_jobs_footer-brand-policy" data-tracking-control-name="public_jobs_footer-brand-policy" data-tracking-will-navigate>
          
          Brand Policy
        
        </a>
  </li>

          
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/psettings/guest-controls?trk=public_jobs_footer-guest-controls" data-tracking-control-name="public_jobs_footer-guest-controls" data-tracking-will-navigate>
          
            Guest Controls
          
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/professional-community-policies?trk=public_jobs_footer-community-guide" data-tracking-control-name="public_jobs_footer-community-guide" data-tracking-will-navigate>
          
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
  
    </div>
  
  
  

<!---->
          
    

    

    
    <div class>
<!---->
      <div id="create-alert-modal" class="modal " data-outlet="create-alert-modal-outlet">
<!---->        <div class="modal__overlay flex items-center bg-color-background-scrim justify-center fixed bottom-0 left-0 right-0 top-0 opacity-0 invisible pointer-events-none z-[1000] transition-[opacity] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] duration-[0.17s]
            py-4
            ">
          <section aria-modal="true" role="dialog" aria-labelledby="create-alert-modal-modal-header" tabindex="-1" class="max-h-full modal__wrapper overflow-auto p-0 bg-color-surface max-w-[1128px] min-h-[160px] relative scale-[0.25] shadow-sm shadow-color-border-faint transition-[transform] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] duration-[0.33s] focus:outline-0
              
              w-[552px] babybear:w-[360px]
              
              rounded-md">
              <header class="modal__header flex items-center justify-between py-1.5 px-3
                  ">
                  <h2 id="create-alert-modal-modal-header" class="modal__title font-normal leading-open text-color-text text-lg">Create job alert</h2>
                  <button class="modal__dismiss modal__dismiss--with-icon btn-tertiary h-[40px] w-[40px] p-0 rounded-full indent-0
                      " aria-label="Dismiss" data-tracking-control-name="public_jobs_create-alert-modal_modal_dismiss" type="button">
                      <icon class="modal__dismiss-icon relative top-[2px]" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/gs508lg3t2o81tq7pmcgn6m2"></icon>
                  </button>
<!---->              </header>
            <div class="modal__main w-full ">
              
        
    
    
    
    

    <form class="create-alert-form">
      <div class="create-alert-form__body">
        <p class="create-alert-form__header">Get email updates for new <strong class="break-word">Retail Associate</strong> jobs in <strong>Badalona, Catalonia, Spain</strong></p>
<!---->        
    

    <section class="dismissable-input text-input !pr-3 bg-color-transparent flex items-center h-[40px] min-w-0 relative babybear:w-full babybear:mb-1 create-alert-form-input">
      <input aria-label="Email address*" autocomplete="off" class="dismissable-input__input font-sans text-md text-color-text bg-color-transparent flex items-center flex-1 focus:outline-none placeholder:text-color-text-secondary" data-tracking-control-name="public_jobs_create-alert-modal_create-alert-form_email-address_dismissable-input" maxlength="500" name="emailAddress" placeholder="Email address*" required type="email">
      
        <button class="dismissable-input__button text-color-text h-[40px] min-w-[24px] w-[24px] -mr-2 opacity-0 transition-opacity duration-[0.1s] disabled:invisible focus:opacity-100" data-tracking-control-name="public_jobs_create-alert-modal_create-alert-form_email-address_dismissable-input-clear" type="button">
          <label class="sr-only">Dismiss</label>
          <icon class="dismissable-input__button-icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/cs55jggk4p3uqh9ozxdmpvjg7"></icon>
        </button>
    </section>
  

        
            
              <input name="jserpUrl" value="https://www.linkedin.com/jobs/retail-associate-jobs-badalona?trk=homepage-basic_suggested-search" type="hidden">
              <input name="pageType" value="JSERP" type="hidden">
              <input name="keywords" value="Retail Associate" type="hidden">
            
          

        
    
    
    

    <code id="i18n_create_alert_invalid_email" style="display: none"><!--"Please enter a valid email address"--></code>
    <code id="i18n_generic_error_message" style="display: none"><!--"Your job alert couldn’t be created, please try again later."--></code>

    <p class="create-alert-error-message create-alert-error-message--email" role="alert">
      <icon class="create-alert-error-message__icon lazy-load"></icon>
      <span class="create-alert-error-message__container">
        <span class="create-alert-error-message__text"></span>
<!---->      </span>
    </p>
  

        <p class="create-alert-form__agreement-links">
          By creating this job alert, you agree to the LinkedIn <a class="create-alert-form__agreement-item-link" href="https://www.linkedin.com/legal/user-agreement?trk&#61;public_jobs_create-alert-modal_create-alert-form_user-agreement" target="_blank" rel="noopener" data-tracking-control-name="public_jobs_create-alert-modal_create-alert-form_user-agreement" data-tracking-will-navigate>User Agreement</a> and <a class="create-alert-form__agreement-item-link" href="https://www.linkedin.com/legal/privacy-policy?trk&#61;public_jobs_create-alert-modal_create-alert-form_privacy-policy" target="_blank" rel="noopener" data-tracking-control-name="public_jobs_create-alert-modal_create-alert-form_privacy-policy" data-tracking-will-navigate>Privacy Policy</a>. You can unsubscribe from these emails at any time.
        </p>

        
    
    
    

    <code id="i18n_create_alert_invalid_email" style="display: none"><!--"Please enter a valid email address"--></code>
    <code id="i18n_generic_error_message" style="display: none"><!--"Your job alert couldn’t be created, please try again later."--></code>

    <p class="create-alert-error-message create-alert-error-message--generic" role="alert">
      <icon class="create-alert-error-message__icon lazy-load"></icon>
      <span class="create-alert-error-message__container">
        <span class="create-alert-error-message__text"></span>
          <a class="create-alert-error-message__sign-in-link hidden" href="https://www.linkedin.com/login?emailAddress=&amp;fromSignIn=&amp;fromSignIn=true&amp;session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fjobs%2Fretail-associate-jobs-badalona%3Ftrk%3Dhomepage-basic_suggested-search&amp;trk=public_jobs_create-alert-modal_create-alert-form_over-limit-sign-in-link" data-tracking-control-name="public_jobs_create-alert-modal_create-alert-form_over-limit-sign-in-link" data-tracking-will-navigate>Sign in to create more</a>
      </span>
    </p>
  

      </div>

      <footer class="create-alert-form__footer">
        <button class="create-alert-form__footer-button" data-tracking-control-name="public_jobs_create-alert-modal_create-alert-form_submit" type="submit">
          Create job alert
        </button>
      </footer>
    </form>
  

        
    
    
    
    
    
    
    
    

    <div class="alert-activation-status alert-activation-status--hidden">
      <div class="alert-activation-status__body">
        <icon class="alert-activation-status__icon" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/b07gfc9sn5x0jqbgm90xzlh9a"></icon>

        <p class="alert-activation-status__headline">
          Your job alert is set
        </p>
        <p class="alert-activation-status__subline">
          Click the link in the email we sent to <span id="guest-email" class="break-word"></span> to verify your email address and activate your job alert.
        </p>
      </div>

      <footer class="alert-activation-status__footer">
        <button class="alert-activation-status__footer-button" data-tracking-control-name="public_jobs_create-alert-modal_alert-activation-status-close">
          Done
        </button>
      </footer>
    </div>
  

        
    

    
    

    <div class="welcome-back-sign-in-form welcome-back-sign-in-form--hidden">
      <h3 class="welcome-back-sign-in-form__header">
        Welcome back
      </h3>

        <p class="welcome-back-sign-in-form__subline">
          
        Sign in to create your job alert for <span class="create-alert-sign-in-form__query-info">Retail Associate</span> jobs in <span class="create-alert-sign-in-form__query-info">Badalona, Catalonia, Spain</span>.
      
        </p>

      
    
    
    
    
    
    
    
    
    
    

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

    <form data-id="sign-in-form" action="https://www.linkedin.com/uas/login-submit" method="post" novalidate class="create-alert-sign-in-form">
      <input name="loginCsrfParam" value="55f183ec-62e8-4de9-8e5c-e95a11b98eec" type="hidden">

      <div class="flex flex-col">
        
    <div class="mt-1.5" data-js-module-id="guest-input">
      <div class="flex flex-col">
        <label class="input-label mb-1" for="session_key">
          Email or phone
        </label>
        <div class="text-input flex">
          <input class="text-color-text font-sans text-md outline-0 bg-color-transparent grow" autocomplete="username" id="session_key" name="session_key" required type="text">
          
        </div>
      </div>

      <p class="input-helper mt-1.5" for="session_key" role="alert" data-js-module-id="guest-input__message"></p>
    </div>
  

        
    <div class="mt-1.5" data-js-module-id="guest-input">
      <div class="flex flex-col">
        <label class="input-label mb-1" for="session_password">
          Password
        </label>
        <div class="text-input flex">
          <input class="text-color-text font-sans text-md outline-0 bg-color-transparent grow" autocomplete="current-password" id="session_password" name="session_password" required type="password">
          
            <button aria-live="assertive" data-id="sign-in-form__password-visibility-toggle" class="font-sans text-md font-bold text-color-action z-10 ml-[12px] hover:cursor-pointer" aria-label="Show your LinkedIn password" data-tracking-control-name="public_jobs_create-alert-modal_sign-in-password-visibility-toggle-btn" type="button">Show</button>
          
        </div>
      </div>

      <p class="input-helper mt-1.5" for="session_password" role="alert" data-js-module-id="guest-input__message"></p>
    </div>
  

        <input name="session_redirect" value="https://www.linkedin.com/jobs/retail-associate-jobs-badalona?trk=homepage-basic_suggested-search" type="hidden">

<!---->      </div>

      <div data-id="sign-in-form__footer" class="flex justify-between
          items-center mt-[16px]">
        <a data-id="sign-in-form__forgot-password" class="font-sans text-md font-bold link leading-regular
            " href="https://www.linkedin.com/uas/request-password-reset?trk=public_jobs_create-alert-modal_forgot_password" data-tracking-control-name="public_jobs_create-alert-modal_forgot_password" data-tracking-will-navigate>Forgot password?</a>

<!---->
        <input name="trk" value="public_jobs_create-alert-modal_sign-in-submit" type="hidden">
        <button class="btn-md btn-primary flex-shrink-0 cursor-pointer
            ml-[8px]" data-id="sign-in-form__submit-btn" data-tracking-control-name="public_jobs_create-alert-modal_sign-in-submit-btn" data-tracking-litms type="submit">
          Sign in
        </button>
      </div>
<!---->    </form>
<!----><!---->  
    </div>
  
  
      
            </div>

<!---->          </section>
        </div>
      </div>
    </div>
  
  

<!---->
<!---->
        
    
    
    

    
    
    
    
    
    

        

    

      <div class="cta-modal overflow-hidden container-raised z-10 fixed bottom-3 right-3 min-h-[56px] p-2 babybear:hidden windows-app-upsell windows-app-upsell--msft flex flex-col p-2 w-[359px] !bg-[#F1F8FA] opacity-90 backdrop-blur-[2px] z-1" data-impression-id="public_jobs_windows-app-upsell_cta-modal" role="dialog" aria-labelledby="cta-modal-header" aria-describedby="cta-modal-subheader">
          

          

        
          <div class="windows-app-upsell__linkedin-title-container pt-[6px] mb-1.5 flex align-center">
            <icon class="windows-app-upsell__linkedin-bug-icon block w-[21px] h-[21px]" data-svg-class-name="windows-app-upsell__linkedin-bug-icon-svg w-[21px] h-[21px]" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/dkgve44sisif1wgwp8ozaxu1x"></icon>
            <p class="windows-app-upsell__linkedin-title uppercase text-xs text-color-text-secondary leading-[21px] ml-1">
              LinkedIn
            </p>
          </div>
          <p class="windows-app-upsell__title font-sans text-md text-color-text-accent-4-hover font-semibold leading-regular mb-1">
            Know when new jobs open up
          </p>
          <p class="windows-app-upsell__body font-sans text-sm text-color-text-secondary leading-regular">
            Never miss a job alert with the new LinkedIn app for Windows.
          </p>
          <a class="windows-app-upsell__cta btn-sm btn-secondary-emphasis mt-2 mb-[6px] w-fit" href="ms-windows-store://pdp/?ProductId=9WZDNCRFJ4Q7&amp;mode=mini&amp;cid=guest_desktop_upsell_job2" data-tracking-control-name="public_jobs_windows-app-upsell_cta" data-tracking-will-navigate>
            Get the app
          </a>
        

        <button class="cta-modal__dismiss-btn absolute h-4 w-4 p-1 top-2 right-2 hover:cursor-pointer focus:outline focus:outline-2 focus:outline-color-action" data-tracking-control-name="public_jobs_windows-app-upsell_dismiss" aria-label="Dismiss">
          <icon class="cta-modal__dismiss-icon block h-2 w-2 onload" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/582r9vsvwmiwa75ujfqps3ivc"></icon>
        </button>
      </div>
  
  
  
          

    
    
    
    
    
    

    

    

      <div class="cta-modal overflow-hidden container-raised z-10 fixed bottom-3 right-3 min-h-[56px] p-2 babybear:hidden conversion-modal w-40" data-impression-id="public_jobs_conversion-modal_cta-modal" role="dialog" aria-labelledby="cta-modal-header" aria-describedby="cta-modal-subheader">
          <h2 id="cta-modal-header" class="cta-modal__header text-xl leading-regular font-bold text-color-text mr-[28px]">You’re signed out</h2>

          <h3 id="cta-modal-subheader" class="cta-modal__subheader text-md leading-open font-normal text-color-text mt-0.5">Sign in for the full experience.</h3>

        
      <a class="cta-modal__primary-btn btn-md btn-primary inline-block w-full mt-3" href="https://www.linkedin.com/login?emailAddress=&amp;fromSignIn=&amp;trk=public_jobs_conversion-modal-signin&amp;session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fjobs%2Fretail-associate-jobs-badalona%3Ftrk%3Dhomepage-basic_suggested-search" data-tracking-control-name="public_jobs_conversion-modal-signin" data-tracking-will-navigate>
        Sign in
      </a>

<!---->        <a class="cta-modal__secondary-btn btn-md inline-block w-full mt-1.5
            btn-secondary-emphasis px-0.5" href="https://www.linkedin.com/signup/cold-join?source=jobs_registration&amp;trk=public_jobs_conversion-modal-join&amp;session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fjobs%2Fretail-associate-jobs-badalona%3Ftrk%3Dhomepage-basic_suggested-search" data-tracking-control-name="public_jobs_conversion-modal-join" data-tracking-will-navigate>
          Join now
        </a>

<!---->    

        <button class="cta-modal__dismiss-btn absolute h-4 w-4 p-1 top-2 right-2 hover:cursor-pointer focus:outline focus:outline-2 focus:outline-color-action" data-tracking-control-name="public_jobs_conversion-modal_dismiss" aria-label="Dismiss">
          <icon class="cta-modal__dismiss-icon block h-2 w-2 onload" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/582r9vsvwmiwa75ujfqps3ivc"></icon>
        </button>
      </div>
  
  
        
    

    <div id="toasts" class="toasts fixed z-8 babybear:right-4 mamabear:right-4 papabear:min-h-[96px] invisible
        top:auto bottom-4 left-4 papabear:w-[400px]
        toasts--bottom" type="bottom">
    

    <template id="toast-template">
      <div class="toast container-raised flex
          toast--bottom
          transition ease-accelerate duration-xxslow
          " data-id="toast">
        <div class="toast__message flex flex-1 babybear:items-center mamabear:items-center papabear:items-start py-2 px-1.5" data-id="toast__message" role="alert" tabindex="-1">
          <div class="toast__message-content-container" data-id="toast__message-content-container">
            <p class="toast__message-content font-sans text-sm opacity-90 inline babybear:self-center mamabear:self-center papabear:self-start" data-id="toast__message-content"></p>
          </div>
        </div>
        <button class="toast__dismiss-btn cursor-pointer babybear:self-center mamabear:self-center papabear:self-start pt-3 pb-2 papabear:py-2 pl-0.5 pr-0" data-id="toast__dismiss-btn" aria-label="Close">
          <svg width="24" height="24" class="fill-color-icon"><path d="M13 4.32 9.31 8 13 11.69 11.69 13 8 9.31 4.31 13 3 11.69 6.69 8 3 4.31 4.31 3 8 6.69 11.68 3Z"></path></svg>
        </button>
      </div>
    </template>
      <template id="toast-icon-caution">
        <icon class="text-color-icon-caution toast__icon w-3 h-3 shrink-0 mr-2" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/u6kgm8vi5s4rhtbgmjlphlp6"></icon>
      </template>
      <template id="toast-icon-error">
        <icon class="text-color-icon-negative toast__icon w-3 h-3 shrink-0 mr-2" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/2ffvlzyh9wb65459t9va8w2ph"></icon>
      </template>
      <template id="toast-icon-gdpr">
        <icon class="text-color-icon-neutral toast__icon w-3 h-3 shrink-0 mr-2" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/a0d85elrpgg38lskvq1kvzb3"></icon>
      </template>
      <template id="toast-icon-notify">
        <icon class="text-color-icon-neutral toast__icon w-3 h-3 shrink-0 mr-2" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/de23f5me7dfm17unsj9up4vga"></icon>
      </template>
      <template id="toast-icon-success">
        <icon class="text-color-icon-positive toast__icon w-3 h-3 shrink-0 mr-2" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/c44ryoszao52cyd0y87z7s0uf"></icon>
      </template>
    <template id="toast-cta">
      <a class="toast__cta cta-link font-medium ml-0.5 text-sm text-inherit inline" target="_blank"></a>
    </template>
  </div>
  

        <section id="json-refs">
          <code id="requestSubdomain" style="display: none"><!--"www"--></code>
          <code id="pageKey" style="display: none"><!--"d_jobs_guest_search"--></code>
          <code id="isRedirectedFromDeletedAlert" style="display: none"><!--false--></code>
            <code id="currentJobId" style="display: none"><!--3796965046--></code>
          <code id="currentSearchId" style="display: none"><!--"5FNdHh7NxabEmqYmXePjzQ=="--></code>
          <code id="totalResults" style="display: none"><!--506--></code>
          <code id="resultsPerPage" style="display: none"><!--25--></code>
          <code id="i18n_redirected_from_deleted_alert" style="display: none"><!--"This job alert has been deactivated."--></code>
<!----><!---->        </section>
      

<!---->
            <script src="https://static.licdn.com/aero-v1/sc/h/b19orns4yhthzphzlegb2ykzv" async></script>
<!---->          
          <script src="https://static.licdn.com/aero-v1/sc/h/2kgy454drmjf0zrcxwtp7ydwd" async defer></script>
      
      </body>
    </html>
  
  veToken&&this.activeToken===e){var a=this.stateWM.get(e),s="enabled"===(null===(t=(n=this.core.host).__getLixTreatment)||void 0===t?void 0:t.call(n,"pemberly.tracking.time-origin-epoch-time")),c=Fn(this.core.host.api.performance,s);a.endProps={renderCompleteTime:c,isImpactedByHiddenWindow:i,rumKey:o},this.isTracerLixEnabled&&o&&(a.pageKey=o);var u=this.activeToken,l=this.isTracerLixEnabled?5e3:this.config["beacon-timeout"];a.fireRumEventTimeout=setTimeout((function(){if(r.isTracerLixEnabled){r.flushResourceLoadEvents(u);var e=r.collector.collectPageLoadEndData({isInitial:a.isInitial});"then"in e?e.then((function(e){r.firePageLoadEndEvent(e,u)})):r.firePageLoadEndEvent(e,u)}var t=r.collector.collect({isInitial:a.isInitial});"then"in t?t.then((function(e){r.fireRumEvent(e,u)})):r.fireRumEvent(t,u)}),l),this.activeToken=void 0}else wt("rum-end",mn)}},{key:"firePageLoadStartEvent",value:function(e){if(e&&this.activeToken&&this.activeToken===e){this.shouldTrackCustomMeasureEvent=!0;var t=this.stateWM.get(e);this.pageLoadId=dt(),t.pageLoadId=this.pageLoadId;var n=this.collector.collectPageLoadStartData({isInitial:t.isInitial,rumKey:t.pageKey});n.pageLoadId=t.pageLoadId,this.core.fireEvent({appId:this.config["app-id"],eventName:"PageLoadStartEvent"},n)}else wt("PageLoadStartEvent",mn)}},{key:"destroy",value:function(){var e,t,n;rt.offBefore("internal:hide",this.beforeHideHandlerBound),this.activeToken&&this.abort(this.activeToken),this.flushEndedSessions(),this.collector.stopObserving(),null===(e=this.webVitalsObserver)||void 0===e||e.stopObserving(),null===(t=this.appMemoryObserver)||void 0===t||t.stopObserving(),null===(n=this.pageMemoryObserver)||void 0===n||n.stopObserving(),this.responseRleCache=void 0,this.core.destroy()}},{key:"getPageLoadIdFromState",value:function(e){var t,n=null!=e?e:this.activeToken;return n&&(t=this.stateWM.get(n).pageLoadId),t}},{key:"abort",value:function(e){var t;if(!e||this.activeToken!==e)throw new Error("RUM abort: rum token passed is invalid");if(null!==(t=this.stateWM.get(e))&&void 0!==t&&t.endProps)throw new Error("RUM abort: Can't abort a session that was already ended");this.activeToken=void 0,this.stateWM.delete(e),this.liveTokens.delete(e)}},{key:"flushEndedSessions",value:function(){var e=this;this.liveTokens.forEach((function(t){var n=e.stateWM.get(t);if(n.endProps){if(e.isTracerLixEnabled){var r=e.collector.collectPageLoadEndData({isInitial:n.isInitial,immediate:!0});e.firePageLoadEndEvent(r,t),e.flushResourceLoadEvents(t)}var i=e.collector.collect({isInitial:n.isInitial,immediate:!0});e.fireRumEvent(i,t)}}))}},{key:"flushResourceLoadEvents",value:function(e){var t,n,r=this,i=null===(t=this.responseRleCache)||void 0===t?void 0:t.flushCache();null==i||i.map((function(t){r.fireResourceLoadEvent(t,e)})),null===(n=this.responseRleCache)||void 0===n||n.clear()}},{key:"firePageLoadEndEvent",value:function(e,t){if(this.stateWM.get(t)){var n=this.core.host.api.assign,r=this.stateWM.get(t),i=r.startTime,o=r.endProps,a=r.pageLoadId,s=r.pageKey;if(o){var c=o.renderCompleteTime,u=o.isImpactedByHiddenWindow;if(a?e.pageLoadId=a:wt("PageLoadEndEvent",vn),e.browserPageLoadEndContext&&(e.browserPageLoadEndContext.isImpactedByHiddenWindow=u),e.navigationTiming){var l,d=null===(l=e.navigationTiming)||void 0===l?void 0:l.navigationStart,f=this.boomerangStart=d||this.boomerangStart,h=d||i,p=c-h;e.navigationTiming.boomerangStart=f,e.navigationTiming.timeDone=p,e.navigationTiming.navigationStart=h,void 0===e.navigationTiming.workerStart&&(e.navigationTiming.workerStart=0)}this.core.fireEvent({appId:this.config["app-id"],eventName:"PageLoadEndEvent"},(function(t){return n({pageKey:s||t.pageKey},e)})),this.shouldTrackCustomMeasureEvent=!1}else this.abort(t)}}},{key:"fireCustomMeasureEvent",value:function(e){var t=this;if(this.isTracerLixEnabled&&this.shouldTrackCustomMeasureEvent){var n,r=null!==(n=this.getPageLoadIdFromState())&&void 0!==n?n:this.pageLoadId;if(!r)return void this.initialCustomMeasureEvents.push(e);this.initialCustomMeasureEvents.length>0&&(this.initialCustomMeasureEvents.forEach((function(e){e.parentPageLoadId=r,t.core.fireEvent({appId:t.config["app-id"],eventName:"CustomMeasureEvent"},e)})),this.initialCustomMeasureEvents=[]),e.parentPageLoadId=r,this.core.fireEvent({appId:this.config["app-id"],eventName:"CustomMeasureEvent"},e)}}},{key:"fireResourceLoadEvent",value:function(e,t){var n=this;if(this.isTracerLixEnabled){var r,i=null!==(r=this.getPageLoadIdFromState(t))&&void 0!==r?r:this.pageLoadId;if(!i)return void this.initialResourcesEvents.push(e);this.initialResourcesEvents.length>0&&(this.initialResourcesEvents.forEach((function(e){e.parentPageLoadId=i,n.core.fireEvent({appId:n.config["app-id"],eventName:"ResourceLoadEvent"},e)})),this.initialResourcesEvents=[]),e.parentPageLoadId=i,this.core.fireEvent({appId:this.config["app-id"],eventName:"ResourceLoadEvent"},e)}}},{key:"fireRumEvent",value:function(e,t){if(this.stateWM.get(t)){var n=this.core.host.api.assign,r=this.stateWM.get(t),i=r.startTime,o=r.endProps;if(o){var a=o.renderCompleteTime,s=o.isImpactedByHiddenWindow,c=o.rumKey,u=this.boomerangStart=e.navigationStart||this.boomerangStart,l=e.navigationStart||i,d=a-l,f=this.config["app-version"];this.core.fireEvent({appId:this.config["app-id"],eventName:"RealUserMonitoringEvent"},(function(t){return n({pageKey:c||t.pageKey,isImpactedByHiddenWindow:s,appVersion:f,timeDone:d,navigationStart:l,boomerangStart:u,renderCompleteTime:a},e)})),r.fireRumEventTimeout&&clearTimeout(r.fireRumEventTimeout),this.liveTokens.delete(t),this.stateWM.delete(t)}else this.abort(t)}}},{key:"beforeHideHandler",value:function(){this.flushEndedSessions()}},{key:"fireApfcEvent",value:function(e,t){var n,r,i=null===(n=document)||void 0===n||null===(r=n.cookie)||void 0===r?void 0:r.split(";"),o={issueTime:0,browserId:""};try{o=function(e){var t,n={issueTime:0,browserId:""},r=f(e);try{for(r.s();!(t=r.n()).done;){var i=t.value.split("=");if(i.length>1&&"bscookie"===i[0]){var o=decodeURIComponent(i[1]),a=Number(o.substring(4,18)),s=isNaN(a)?0:a,c=o.substring(18,50);return n.browserId=c,n.issueTime=s,n}}}catch(e){r.e(e)}finally{r.f()}return n}(i)}catch(e){}var a={type:e,bsCookieInfo:o,payload:t};this.core.fireEvent({appId:this.config["app-id"],eventName:"ApfcEvent"},a)}}]),e}(),jr="undefined"!=typeof window&&"undefined"!=typeof performance,Wr="undefined"!=typeof location&&-1!==location.search.indexOf("_LI_MEASURE_DEBUG");!function(){function e(t,n){g(this,e),b(this,"trackingCore",void 0),b(this,"endPageInstance",void 0),b(this,"startPageInstance",void 0),b(this,"featureIdentifier",void 0),b(this,"marks",[]),b(this,"spans",[]),b(this,"spanStarts",new Map),b(this,"started",!1),b(this,"ended",!1),b(this,"featureKey",void 0),b(this,"productName",void 0),b(this,"flushOnEnd",void 0),b(this,"basePageTreeId",void 0),b(this,"debounceFlush",void 0),b(this,"disableAutoFlush",void 0),b(this,"isCanceled",!1),b(this,"isClosed",!1),this.trackingCore=t;var r=n.featureKey,i=n.productName,o=n.flushDebounceMilliseconds,a=n.flushOnEnd;this.featureKey=r,this.productName=i,this.flushOnEnd=a;var s=i?"::".concat(i):"";this.featureIdentifier="".concat(r).concat(s);var c=void 0!==o?o:3e3;c>0&&(this.debounceFlush=function(e,t,n){var r,i,o;void 0===t&&(t=50),void 0===n&&(n={});var a=null!=(r=n.isImmediate)&&r,s=null!=(i=n.callback)&&i,c=n.maxWait,u=Date.now(),l=[];function d(){if(void 0!==c){var e=Date.now()-u;if(e+t>=c)return c-e}return t}var f=function(){var t=[].slice.call(arguments),n=this;return new Promise((function(r,i){var c=a&&void 0===o;if(void 0!==o&&clearTimeout(o),o=setTimeout((function(){if(o=void 0,u=Date.now(),!a){var r=e.apply(n,t);s&&s(r),l.forEach((function(e){return(0,e.resolve)(r)})),l=[]}}),d()),c){var f=e.apply(n,t);return s&&s(f),r(f)}l.push({resolve:r,reject:i})}))};return f.cancel=function(e){void 0!==o&&clearTimeout(o),l.forEach((function(t){return(0,t.reject)(e)})),l=[]},f}(this.flush.bind(this),c)),this.disableAutoFlush=c<0}x(e,[{key:"start",value:function(e){var t;if(jr){if(this.started)throw new Error("Same PerfMeasurement (".concat(this.featureIdentifier,") cannot be started twice"));this.startPageInstance=e||(null===(t=this.trackingCore.getCurrentContext())||void 0===t?void 0:t.pageInstance),this.spanStart("load"),this.started=!0}}},{key:"end",value:function(e){var t;if(!this.isClosed){if(this.isClosed=!0,this.isCanceled)throw new Error('[rum measurement] cannot end a canceled measurement "'.concat(this.featureIdentifier,'"'));if(jr){if(this.ended)throw new Error("Same PerfMeasurement (".concat(this.featureIdentifier,") should not be ended twice"));this.endPageInstance=e||(null===(t=this.trackingCore.getCurrentContext())||void 0===t?void 0:t.pageInstance),this.spanEnd("load"),this.ended=!0,this.flushOnEnd&&this.flush()}}}},{key:"mark",value:function(e){jr&&(this.marks.push({name:e,startTime:qn()}),Wr&&(performance.mark("LI:".concat(this.featureIdentifier,"-mark-").concat(e)),performance.measure("LI:".concat(this.featureIdentifier,"-mark-").concat(e),"LI:".concat(this.featureIdentifier,"-start"),"LI:".concat(this.featureIdentifier,"-mark-").concat(e))),this.handleNewData())}},{key:"spanStart",value:function(e){jr&&(this.spanStarts.set(e,qn()),Wr&&performance.mark("LI:".concat(this.featureIdentifier,"-span-").concat(e,"-start")))}},{key:"spanEnd",value:function(e,t){if(jr&&this.spanStarts.has(e)){var n=this.spanStarts.get(e),r=t||e;this.spans.push({name:r,startTime:n,duration:qn()-n}),Wr&&(performance.mark("LI:".concat(this.featureIdentifier,"-span-").concat(e,"-end")),performance.measure("LI:".concat(this.featureIdentifier,"-span-").concat(t||e),"LI:".concat(this.featureIdentifier,"-span-").concat(e,"-start"),"LI:".concat(this.featureIdentifier,"-span-").concat(e,"-end"))),this.handleNewData()}}},{key:"addSpan",value:function(e){this.spans.push(e),this.handleNewData()}},{key:"setBasePageTreeId",value:function(e){this.basePageTreeId=e}},{key:"getTimestamp",value:function(){return qn()}},{key:"flush",value:function(){0===this.marks.length&&0===this.spans.length||(this.fireEvent(),this.marks=[],this.spans=[],this.debounceFlush&&this.debounceFlush.cancel())}},{key:"handleNewData",value:function(){this.debounceFlush?this.debounceFlush().catch((function(e){})):this.disableAutoFlush||this.flush()}},{key:"fireEvent",value:function(){var e=this,t=this.endPageInstance&&{header:{pageInstance:this.endPageInstance}};this.trackingCore.fireEvent("FeaturePerformanceMeasurementEvent",(function(t){var n=e.startPageInstance||t.pageInstance||ht("unknown"),r={name:e.featureKey,startTime:-1,duration:-1,startPageInstance:n,marks:e.marks,spans:e.spans};return e.productName&&(r.productName=e.productName),e.basePageTreeId&&(r.basePageTreeId=e.basePageTreeId),r}),t)}},{key:"cancel",value:function(){this.isCanceled=!0}},{key:"check",value:function(){if(jr){if(this.isCanceled)throw new Error('[rum measurement] "'.concat(this.featureIdentifier,'" has been canceled'));if(!this.isClosed)throw new Error('[rum measurement] "'.concat(this.featureIdentifier,'" is still open'))}}}])}();!function(e){e[e.BATCH=0]="BATCH",e[e.FLUSH_ALL=1]="FLUSH_ALL"}(Fr||(Fr={}));var Vr=n(0);window.addEventListener("load",(function(e){var t=new Xt({appId:Object(Vr.f)(),endpoint:"/li/track",__getLixTreatment:function(e){var t=e.replace(/\./g,"_"),n="lix_".concat(t),r=Object(Vr.j)(n);return r||"control"},locale:navigator&&navigator.language||"en_US",api:{AbortController:AbortController,performance:window.performance,PerformanceObserver:window.PerformanceObserver,location:window.location,document:document,Promise:Promise,assign:Object.assign,fetch:fetch,sendBeacon:window.navigator.sendBeacon&&window.navigator.sendBeacon.bind(window.navigator),requestIdleCallback:window.requestIdleCallback}}),n=new $t(t),r=Object(Vr.n)(),i=Object(Vr.m)(r);n.updateAppState({clientApplicationInstance:{applicationUrn:"urn:li:application:(checkpoint-frontend)",version:"0.0.0",trackingId:dt()}}),n.setCurrentContext({pageKey:r,pageInstance:i});var o=new Kr({"app-render-mode":"SSR","is-app-render-failed":!1},{"is-single-page-app":!1,"enable-rs-timing":!0,"beacon-timeout":500,"request-sampling-rate":1,"enable-cdn-tracking":!0,"enable-pop-tracking":!0,"user-timing-mark-enabled":!0,"web-ui-framework":"GLIMMER"},n);o.end(o.start()),o.observeWebVitals(),window.performance.mark("mark_meaningful_paint_end")}));var zr=n(3);window.addEventListener("load",(function(e){var t=Object(Vr.n)(),n=Object(Vr.k)();Object(Vr.y)(t,{funCaptchaChallengeSource:n})&&Object(zr.c)(t,zr.a.FULL)}))},13:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},2:function(e,t,n){e.exports=function(){"use strict";var e="aria-[a-z0-9_\\-]+|class|data-[a-z0-9_\\-]+|dir|id|role|tabindex",t="undefined"==typeof document||"textContent"in document.createElement("div")?"textContent":"innerText",n=["b","del","em","i","s","strong","sub","sup"],r=n.concat(["a","abbr","address","area","article","aside","audio","bdi","bdo","big","blockquote","br","button","center","cite","code","datalist","dd","details","dfn","div","dl","dt","fieldset","figcaption","figure","font","footer","h1","h2","h3","h4","h5","h6","header","hgroup","hr","img","ins","kbd","label","legend","li","map","mark","marquee","nav","nobr","ol","p","pre","q","rp","rt","ruby","samp","section","small","source","span","strike","table","tbody","td","tfoot","th","thead","time","tr","u","ul","var","video","wbr"]),i=[e,"alt|checked|selected|colgroup|cols|colspan|disabled|height|hidden|maxlength|method|multiple|name|placeholder|readonly|rel|required|rows|rowspan|spellcheck|target|title|width","border|caption|color|controls|coords|hreflang|label|lang|loop|marginheight|marginwidth|preload|reversed|type|usemap|clear|headers|ismap|start|datetime|accept|max|min|size|step|style|cellspacing|cellpadding"].join("|");function o(){}function a(e,t){if(t=t||"log","undefined"!=typeof window&&window&&window.jet&&"error"===t.toLowerCase())try{throw new Error(e)}catch(e){try{window.jet.error(e)}catch(e){}}"undefined"!=typeof console&&"function"==typeof console[t]&&console[t](e)}new RegExp("&#?[a-zA-Z0-9]{1,10};");var s,c,u=(c=/[&<>"'\u0000\\=]/g,s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","\0":"�","\\":"&#92;","=":"&#61;"},function(e){return null==e?null:e.toString().replace(c,(function(e){return s[e]}))}),l=function(){var e,n,r=/&(?:([a-z0-9]+)|#x([\da-f]{1,6})|#(\d{1,8}));/gi;if("undefined"==typeof document)return function(){throw new Error("document is undefined (i.e. you are probably in Node.js)")};e=document.createElement("div");var i={nbsp:" ",lt:"<",gt:">",amp:"&",quot:'"'};return n="function"==typeof String.fromCodePoint?function(e){return String.fromCodePoint(e)}:function(e){return e<=65535?String.fromCharCode(e):"�"},function(o){return null==o?null:(o+"").replace(r,(function(r,o,a,s){return o?(c=o,i.hasOwnProperty(c)?i[c]:(e.innerHTML="&"+c+";",u=e[t],i[c]=u,u)):a||s?n(parseInt(a||s,a?16:10)||65533):"�";var c,u}))}}(),d=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function f(e){return/[<&]/.test(e)}var h,p=Array.prototype.forEach?function(e,t){Array.prototype.forEach.call(e,t)}:function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)};function v(e){e=d(e)?e:[e];var t,n,o,a=0,s="<(?!/?";return s+="(?:",p(e,(function(e,c){t=e.tags||r,n=e.attrs||i,o=e.checkUrlAttrs||!1,0!==c&&(s+="|"),s+="(?:"+t.join("|")+")",s+="(?:",s+="[ \t\r\n]*",s+="|[ \t\r\n]+",s+="(?:(?:",s+="(?:"+n+")(?:=([\"'])[^'\"<>]*\\"+ ++a+")?",o&&(s+="|(?:href|src)=([\"'])(?:(?:https?|ftp|mailto|invalid)(?::|&#(?:58|x3a);)|(?:data:image/(?:gif|jpg|jpeg|png);base64,)|[/.#?]|&#(?:35|4[67]|63|x(?:2[3ef]|3f));)[^'\"<>]*\\"+ ++a),s+=")[ \t\r\n]*)+",s+=")"})),s+=")",s+="/?>)",new RegExp(s,"i")}function m(e){return v({tags:e=e||r,checkUrlAttrs:!0})}function g(e,t){var n=(t=t||{}).allowTags,r=!1!==t.hasCustomElementMarkup;return n?!m(n).test(e):r?!g.R_UNSAFE_CUSTOM_ELEMENT.test(e):!g.R_UNSAFE_HTML.test(e)}function y(e){return e.replace(/<[^>]*>|[<>'"&\\]/g,"")}function x(e,t,n){if(null==e)return null;e=e.toString();var r=t?function(e,t){var n={};return e.replace(/\{([^}]+)\}/g,(function(e,r){var i,a=e;if(n.hasOwnProperty(r))return n[r];if(t.hasOwnProperty(r)){if(!((i="string"==typeof(a=t[r]))||a instanceof o||"number"==typeof a))throw new Error("Only strings, numbers, and jSecure types are allowed as placeholder replacements.");a=i?u(a):a.toString()}return n[r]=a,a}))}(e,t):e,i=e;return f(r)&&!g(r,n)&&(r=y(r),a("Content contains tags or attributes that are not allowed:\nContent: "+i,"error")),r}function b(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e}g.R_UNSAFE_HTML=m(),g.R_UNSAFE_CUSTOM_ELEMENT=v([{tags:r,checkUrlAttrs:!0},{tags:[(h={tag:"li-icon",attrs:"active|a11y-text|animate|color|size|type"}).tag],attrs:[e,h.attrs].join("|"),checkUrlAttrs:!1}]);var E={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};E.optgroup=E.option,E.tbody=E.tfoot=E.colgroup=E.caption=E.thead,E.th=E.td;var w=/<([\w:]+)/;function T(e,t){var n,r,i,o,a,s,c,u=t.createDocumentFragment(),l=[];for(a=0,c=e.length;a<c;a++)if((o=e[a])||0===o)if("string"==typeof o){for(i=i||u.appendChild(t.createElement("div")),n=(w.exec(o)||["",""])[1].toLowerCase(),C(i,(r=E[n]||E._default)[1]+o+r[2]),s=r[0];s--;)i.lastChild&&i.lastChild.nodeType===Node.ELEMENT_NODE&&(i=i.lastChild);b(l,i.childNodes),(i=u.firstChild).textContent=""}else b(l,o.nodeType?[o]:o);for(u.textContent="",o=l[a=0];o;)u.appendChild(o),o=l[++a];return u}function S(e,t){var n;if(t=t||document.implementation&&document.implementation.createHTMLDocument?document.implementation.createHTMLDocument(""):document,"string"==typeof e)n=T([e],t);else{if(!d(e))return e;n=T(e,t)}return b([],n.childNodes)}var k=x,_=x;function C(e,n,r){var i=x(n,r);return f(i)?e.innerHTML=i:e[t]=i,i}function I(e,t){if(!(this instanceof I))return new I(e,t);(t=t||{}).allowTags=t.allowTags?t.allowTags.reduce((function(e,t){return e.concat(t)}),[]):null,this._string=e,this._options=t}function A(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i="",o=void 0,a=n.length;return e&&e.forEach((function(e,t){i+=e,t<a&&(o=n[t],i+=o instanceof I?o:u(o))})),_(i)}I.prototype=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}(new o,{toString:function(){var e=this._string,t=this._stringVal,n=e;return void 0!==t?t:(g(e,this._options)||(n=e,e=y(e),a("UnsafeString contains tags or attributes that are not allowed.\nString: "+n,"error")),this._stringVal=e,e)}});var L=/ /g,R=/[\s\u0000<>"]|%00/,D=/\\/,N=/([.]|%2e){2}/i,P=new RegExp("^(?:HTTPS?|https?|ftp|mailto|tel|sms|blob|voyager|android-app|linkedin|chrome-extension|invalid|data:(?:(?:image/(?:gif|jpe?g|png|webp|bmp|tiff))|(?:application/x-font-woff)|(?:font/(?:opentype|ttf)))[;,]|[/.#?])");function M(e){var t=void 0;if("string"!=typeof e)return a("jSecure Warning: url must be a string","error"),"invalid://";if((t=e.trim()).indexOf(" ")>-1&&(a("jSecure Warning: url should not contain spaces: "+e,"warn"),t=t.replace(L,"+")),!P.test(t))return a("jSecure Error: URL should be absolute with allowed schemas, relative, a hash fragment or query string. "+e,"error"),"invalid://";if(R.test(t))return a("jSecure Error: not valid url character found in url: "+e,"error"),"invalid://";var n=t.split("?")[0],r=void 0,i=!1;try{r=decodeURI(n)}catch(e){i=!0}return i?(a("jSecure Error: malformed url path detected: "+n),"invalid://"):D.test(n)||N.test(n)||N.test(r)?(a("jSecure Error: malicious data found in url path: "+n,"error"),"invalid://"):e}var O={redirect:function(e){window&&(window.location.href=e)}};return{ALLOWED_TAGS:r,FORMATTING_TAGS:n,htmlEncode:u,htmlUnencode:l,log:a,mk:A,parseHTML:S,parseSelector:function(e){return"string"==typeof e&&/^(?:\s*(<[\w\W]+>)[^>]*)$/.test(e)?[]:e},processTemplate:k,reEncode:function(e){return u(l(e))},_redirector:O,redirect:function(e){var t=M(e);t===e&&O.redirect(t)},sanitizeHTML:_,sanitizeUrl:M,setElementContent:C,text:function(e){return a("jSecure.text() is deprecated. Please use jSecure.htmlEncode().","warn"),u(e)},unsafe:function(e){return e},UnsafeString:I}}()},3:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"f",(function(){return f}));var r=n(9),i=n.n(r),o=n(0),a={APP_NAME:Object(o.f)("appName")||"checkpoint-frontend",URL:"/li/track",QUEUE_SIZE:10,QUEUE_TIMEOUT:1e3,APP_ID:"com.linkedin.checkpoint"},s={AJAX:"ajax",FULL:"full"};function c(e,t,n,r){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:document.referrer;if(!e||!t||!n)throw new Error("eventName, body and topicName are required.");var u=Object(o.m)(),l=t;l.header={pageInstance:u,time:Date.now()},l.requestHeader={pageKey:(r||Object(o.n)())+"_jsbeacon",path:window.location.href,referer:c},s&&(l.requestHeader.trackingCode=s);var d={eventName:e,topicName:n,appId:a.APP_ID,appName:a.APP_NAME};i.a.sendEvent(d,l)}function u(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;c("PageViewEvent",{pageType:t||s.AJAX,trackingInfo:{},totalTime:1},"PageViewEvent",e,n)}function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:document.referrer;c("PageViewEvent",{pageType:t||s.AJAX,trackingInfo:r,totalTime:1},"PageViewEvent",e,n,i)}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Object(o.n)(),r={controlUrn:"urn:li:control:".concat(n,"-").concat(e),interactionType:"SHORT_PRESS"};c("ControlInteractionEvent",r,"ControlInteractionEvent",n,t)}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Object(o.n)(),r={moduleNames:e};c("ViewModuleImpressionEvent",r,"ViewModuleImpressionEvent",n,t)}i.a.setProperty("globalTrackingUrl",a.URL),i.a.setProperty("globalTrackingAppId",a.APP_NAME),i.a.setProperty("maxQueueSize",a.QUEUE_SIZE),i.a.setProperty("queueTimeout",a.QUEUE_TIMEOUT)},52:function(e,t,n){e.exports=function(){"use strict";function e(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function t(e){return(e=e||window).performance&&e.performance.timing&&"function"==typeof e.performance.now?Math.round(e.performance.now())+e.performance.timing.navigationStart:(new Date).getTime()}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},a=function(){function e(t){r(this,e),this._parent=t,this._config=t.getConfig(),this._complete=!1,this._window=t._window,this._doc=this._window.document,this.data={}}return e.prototype.isComplete=function(){return this._complete},e.prototype.markComplete=function(){this._complete=!0},e.prototype.done=function(){this._complete=!0,this.isAsync()&&this._parent.pluginDone()},e.prototype.resetState=function(){this._complete=!1,this.data={}},e.prototype.getData=function(){return this.data},e.prototype.collectData=function(){},e.prototype.isAsync=function(){return!1},e}(),s=function(e){function t(n){return r(this,t),o(this,e.call(this,n))}return i(t,e),t.prototype.collectData=function(){this._readLinkedinData()},t.prototype._readLinkedinData=function(){this.data.timeSource=this._config["beacon-source"],this.data.treeId=this._getTreeId(),this._config["commit-id"]&&(this.data.sessionID=this._config["commit-id"]),this.data.isFromServiceWorker=this._getFromServiceWorker(),this.done()},t.prototype._getTreeId=function(){var e=this._doc.querySelector('meta[name="treeID"]');return e&&e.getAttribute("content")},t.prototype._getFromServiceWorker=function(){var e=this._doc.querySelector('meta[name="fromServiceWorker"]');return e&&"true"===e.getAttribute("content")},t}(a),c=function(e){function t(n){r(this,t);var i=o(this,e.call(this,n));return i._navigationTimingRead=!1,i._navigationTimingFields=["loadEventEnd","loadEventStart","domComplete","domContentLoadedEventEnd","domContentLoadedEventStart","domInteractive","domLoading","responseEnd","responseStart","requestStart","secureConnectionStart","connectEnd","connectStart","domainLookupEnd","domainLookupStart","fetchStart","redirectEnd","redirectStart","unloadEventEnd","unloadEventStart","navigationStart"],i}return i(t,e),t.prototype.collectData=function(){this._readNavigationTiming(),this.done()},t.prototype._readNavigationTiming=function(){var e,t,n,r;if(!this._navigationTimingRead){if(this._window.performance&&this._window.performance.timing&&this._window.performance.navigation){for(this.data.navigationTimingApi=!0,e=this._window.performance.timing,t=0;t<this._navigationTimingFields.length;t++)e[n=this._navigationTimingFields[t]]&&(this.data[n]=e[n]);this.data.redirectCount=this._window.performance.navigation.redirectCount,this.data.navigationType=this._window.performance.navigation.type}else this.data.navigationTimingApi=!1;if(this._window.performance&&this._window.performance.getEntriesByType&&void 0!==(r=this._window.performance.getEntriesByType("navigation")[0])&&(this.data.workerStart=r.workerStart,"number"==typeof r.fetchStart&&"number"==typeof r.responseEnd&&"number"==typeof r.decodedBodySize&&"number"==typeof r.encodedBodySize&&"number"==typeof r.transferSize)){var i={};i.htmlFetchStart=r.fetchStart,i.htmlResponseEnd=r.responseEnd,i.htmlDecodedBodySize=r.decodedBodySize,i.htmlEncodedBodySize=r.encodedBodySize,i.htmlTransferSize=r.transferSize,this.data.htmlMetrics=i}this._navigationTimingRead=!0}},t}(a),u=function(e){function t(n){r(this,t);var i=o(this,e.call(this,n));return i._imgEntries=[],i._resourceTimingFields={name:!0,entryType:!1,duration:!0,initiatorType:!0,fetchStart:!0,responseEnd:!0,startTime:!0,connectEnd:!0,connectStart:!0,domainLookupEnd:!0,domainLookupStart:!0,redirectEnd:!0,redirectStart:!0,requestStart:!0,responseStart:!0,secureConnectionStart:!0,nextHopProtocol:!0,transferSize:!0,decodedBodySize:!0,encodedBodySize:!0,workerStart:!0},i._requestSamplingRandVal=Math.random(),i._setupResourceTiming(),i}return i(t,e),t.prototype.resetState=function(){e.prototype.resetState.call(this),this._requestSamplingRandVal=Math.random()},t.prototype.collectData=function(){this._readResourceTiming(),this.done()},t.prototype.addTreeId=function(e,t){var n;if(this._treeIdUrlParser&&this._rsTimingUrlParser&&(this._treeIdUrlParser.href=t,this._readResourceTiming(),this.data.resourceTimingEntries))for(n=this.data.resourceTimingEntries.length-1;n>=0;n--)if(this._rsTimingUrlParser.href=this.data.resourceTimingEntries[n].name,this._treeIdUrlParser.protocol===this._rsTimingUrlParser.protocol&&this._treeIdUrlParser.host===this._rsTimingUrlParser.host&&this._treeIdUrlParser.pathname===this._rsTimingUrlParser.pathname&&(this._treeIdUrlParser.search===this._rsTimingUrlParser.search||""===this._treeIdUrlParser.search)){this.data.resourceTimingEntries[n].resourceTreeId=e;break}},t.prototype._isResourceTimingSupported=function(){return this._window.performance&&"function"==typeof this._window.performance.getEntriesByType},t.prototype._setupResourceTiming=function(){var e={default:.001,xmlhttprequest:1};if(null!==this._config["rs-sample-rate"]&&"object"===n(this._config["rs-sample-rate"]))for(var t in this._config["rs-sample-rate"])this._config["rs-sample-rate"].hasOwnProperty(t)&&(e[t]=this._config["rs-sample-rate"][t]);this._config["rs-sample-rate"]=e,this._isResourceTimingSupported()&&(this._readResourceTiming(),this._setBufferSize(100),null===this._window.performance.onresourcetimingbufferfull?this._window.performance.onresourcetimingbufferfull=this._readResourceTiming.bind(this):null===this._window.performance.onwebkitresourcetimingbufferfull&&(this._window.performance.onwebkitresourcetimingbufferfull=this._readResourceTiming.bind(this))),this._treeIdUrlParser=this._doc.createElement("a"),this._rsTimingUrlParser=this._doc.createElement("a")},t.prototype._clearBuffer=function(){this._isResourceTimingSupported()&&this._config["enable-rs-timing"]&&(this._window.performance.clearResourceTimings&&"function"==typeof this._window.performance.clearResourceTimings?this._window.performance.clearResourceTimings():this._window.performance.webkitClearResourceTimings&&"function"==typeof this._window.performance.webkitClearResourceTimings&&this._window.performance.webkitClearResourceTimings())},t.prototype._setBufferSize=function(e){this._isResourceTimingSupported()&&this._config["enable-rs-timing"]&&(this._window.performance.setResourceTimingBufferSize&&"function"==typeof this._window.performance.setResourceTimingBufferSize?this._window.performance.setResourceTimingBufferSize(e):this._window.performance.webkitSetResourceTimingBufferSize&&"function"==typeof this._window.performance.webkitSetResourceTimingBufferSize&&this._window.performance.webkitSetResourceTimingBufferSize(e))},t.prototype._readResourceTiming=function(){var e,t,n,r,i,o,a=!1,s=this.data&&this.data.resourceTimingEntries||[];if(this._isResourceTimingSupported()&&this._config["enable-rs-timing"]){for(e=this._window.performance.getEntriesByType("resource"),t=0;t<e.length;t++){for(n in r={},e[t])!0===this._resourceTimingFields[n]&&(r[n]=e[t][n]);"img"===r.initiatorType&&this._imgEntries.push(r),null===this._parent._config.xcndUrl&&"script"===r.initiatorType&&(this._parent._config.xcndUrl=r.name),i=Math.random(),o=this._config["rs-sample-rate"][e[t].initiatorType]||this._config["rs-sample-rate"].default,((a=this._requestSamplingRandVal<=this._config["request-sampling-rate"])||i<=o)&&(s.push(r),r.sampleMode="",a&&(r.sampleMode="requestSampled,"),i<=o&&(r.sampleMode+="rand"+o.toString()))}this._clearBuffer(),s.length>0&&(this.data.resourceTimingEntries=s)}},t}(a),l=function(e){function t(n){return r(this,t),o(this,e.call(this,n))}return i(t,e),t.prototype.collectData=function(){this._readUserTimingEntries(),this.done()},t.prototype._clearUserTimings=function(){this._window.performance&&(this._window.performance.clearMarks&&this._window.performance.clearMarks(),this._window.performance.clearMeasures&&this._window.performance.clearMeasures())},t.prototype._getUserTimingEntries=function(e,t){var n,r,i,o=[];for(r=0;r<e.length;r++)(n=e[r])&&((i={}).entryType=t,i.name=n.name,i.startTime=n.startTime,i.duration=n.duration,o.push(i));return o},t.prototype._readUserTimingEntries=function(){var e,t=[];this._window.performance&&"function"==typeof this._window.performance.getEntriesByType&&(this._config["user-timing-measure-enabled"]&&(e=this._window.performance.getEntriesByType("measure"),t=t.concat(this._getUserTimingEntries(e,"MEASURE"))),this._config["user-timing-mark-enabled"]&&(e=this._window.performance.getEntriesByType("mark"),t=t.concat(this._getUserTimingEntries(e,"MARK")))),this.data.userTimingEntries=t,this._clearUserTimings()},t}(a),d=function(e){function t(n){r(this,t);var i=o(this,e.call(this,n));return i._started=!1,i}return i(t,e),t.prototype.resetState=function(){},t.prototype.isAsync=function(){return!0},t.prototype.collectData=function(){this._started||(this._started=!0,this._getCDNData())},t.prototype._getCDNData=function(){var e=this._window.location.protocol,t=this._parent._config.xcndUrl,n=new XMLHttpRequest,r=this,i="",o="",a="";this.data.usedCDN={static_domain:i,ip_version:a,http_version:a},0===e.lastIndexOf("http",0)&&null!==t?(n.onreadystatechange=function(){var e=this.readyState?this:n;if(4===e.readyState){if(200===e.status){try{i=e.getResponseHeader("X-CDN"),o=e.getResponseHeader("X-CDN-CLIENT-IP-VERSION"),a=e.getResponseHeader("X-CDN-Proto")}catch(e){console.warn("Can't read the X-CDN header, possibly because of CORS restrictions")}r.data.usedCDN.static_domain=null===i?"":i,r.data.usedCDN.ip_version=null===o?"":o.toLowerCase(),r.data.usedCDN.http_version=null===a?"":a.toLowerCase()}else console.error("CDN request did not return a HTTP 200. Status: "+e.status);r.done()}},n.open("HEAD",t,!0),n.send()):this.done()},t}(a),f=function(e){function t(n){r(this,t);var i=o(this,e.call(this,n));return i._started=!1,i}return i(t,e),t.prototype.resetState=function(){},t.prototype.isAsync=function(){return!0},t.prototype.collectData=function(){this._started||(this._started=!0,this._getPoPData())},t.prototype._getPoPData=function(){var e=this._window.location,t=e.protocol,n=t+"//"+e.host+"/fizzy/admin?"+(new Date).getTime(),r=new XMLHttpRequest,i=this;0===t.lastIndexOf("http",0)?(r.onreadystatechange=function(){var e=this.readyState?this:r;4===e.readyState&&(e.status>=200&&e.status<400?(i.data.pointOfPresenceId=e.getResponseHeader("X-Li-Pop"),i.data.rawXLiFabricHeader=e.getResponseHeader("X-Li-Fabric"),i.data.httpVersion=e.getResponseHeader("X-Li-proto")):console.error("PoP request was not successful. Status: "+e.status),i.done())},r.open("get",n,!0),r.send()):this.done()},t}(a),h=function(e){function t(n){r(this,t);var i=o(this,e.call(this,n));i.data.longTasks=[],i._longTaskFields=["duration","name","startTime"],i._observer=new PerformanceObserver((function(e){e.getEntries().forEach((function(e){for(var t={},n=0;n<i._longTaskFields.length;n++){var r=i._longTaskFields[n];void 0!==e[r]&&(t[r]=e[r])}i.data.longTasks.push(t)}))}));try{i._observer.observe({entryTypes:["longtask"]})}catch(e){console.warn("Longtask api is not supported")}return i}return i(t,e),t.prototype.resetState=function(){this._complete=!1,this.data={},this.data.longTasks=[]},t.prototype.collectData=function(){this.done()},t}(a),p=function(e){function t(n){return r(this,t),o(this,e.call(this,n))}return i(t,e),t.prototype.collectData=function(){this._readNetworkInformation(),this.done()},t.prototype._readNetworkInformation=function(){if(navigator&&navigator.connection){var e={},t=navigator.connection.downlinkMax;e.connectionType=void 0===navigator.connection.type?"UNKNOWN":navigator.connection.type.toUpperCase(),e.effectiveType=this._formatEffectiveType(navigator.connection.effectiveType),e.roundTripTime=void 0===navigator.connection.rtt?-1:navigator.connection.rtt,e.downlinkBandwidth=void 0===navigator.connection.downlink?-1:navigator.connection.downlink,e.downlinkMaxBandwidth=void 0===t?-1:t===1/0?0:navigator.connection.downlinkMax,this.data.networkInformationMetrics=e}},t.prototype._formatEffectiveType=function(e){return"2g"===e?"TWO_G":"3g"===e?"THREE_G":"4g"===e?"FOUR_G":"SLOW_2G"},t}(a),v=["https://www.linkedin-ei.com/lite/rum-track","/li/track","https://lca1-mobile-tracking-frontend-vip-1.corp.linkedin.com/li/track"];return function(){function n(t,i){var o=this;r(this,n),this._resetState(!1),this._defaults={enabled:!0,"beacon-url":"/li/track","beacon-service":"tracking","event-name":"RealUserMonitoringEvent","topic-name":"RealUserMonitoringEvent","app-id":"linkedin.rum.tracking","is-single-page-app":!0,"cross-origin":!1,"beacon-timeout":3e4,"request-sampling-rate":.01,"user-timing-mark-enabled":!1,"user-timing-measure-enabled":!0,"beacon-source":"apps","page-key-prefix":"","navigation-timing-only":!1,"pathname-depth":-1,"lazy-image-class-names":["lazy-image"],"enable-cdn-tracking":!1,"enable-pop-tracking":!1,"async-plugins-timeout":5e3,"non-spa-manual-send":!1},this._config=e(this._defaults,t),this._window=i||window,this._config.enabled&&this._canAccessContext(this._window)&&(this._doc=this._window.document,this._config.readyState||(this._config.readyState=this._doc.readyState),this._config.xcndUrl=null,this._config["navigation-timing-only"]?this._config["enable-rs-timing"]=this._config["enable-rs-timing"]||!1:this._config["enable-rs-timing"]=!1!==this._config["enable-rs-timing"],this._config.plugins=[new s(this),new c(this),new u(this),new l(this),new p(this)],this._config["enable-cdn-tracking"]&&this._config.plugins.push(new d(this)),this._config["enable-pop-tracking"]&&this._config.plugins.push(new f(this)),"function"==typeof PerformanceObserver&&"function"==typeof PerformanceLongTaskTiming&&this._config.plugins.push(new h(this)),this._isInitialLoad=!0,this._initialStartTime=void 0,this._renderCompleteCount=0,this._isLazyRender=!1,this._allBeaconData=[],this._csrfToken="",this._isInternalApp=!1,this._config["beacon-source"]&&"internal-apps"===this._config["beacon-source"]&&(this._isInternalApp=!0,("lite"===this._config["beacon-service"]||v.indexOf(this._config["beacon-url"])>-1)&&(this._config["beacon-service"]="tracking",this._config["beacon-url"]="https://tracking.corp.linkedin.com/li/track/")),this._onLoad=function(){setTimeout((function(){o._collectPluginData()}),500)},this._onUnload=function(){o._collectPluginData()},this._config["navigation-timing-only"]&&!this._config["non-spa-manual-send"]?"complete"===this._config.readyState?this._onLoad():this._window.addEventListener("load",this._onLoad):this._config["navigation-timing-only"]||(this._config["non-spa-manual-send"]?console.error("Manual send mode not supported for SPA apps"):this._window.addEventListener("unload",this._onUnload)))}return n.prototype.destroy=function(){this._config["navigation-timing-only"]&&!this._config["non-spa-manual-send"]?this._window.removeEventListener("load",this._onLoad):this._config["navigation-timing-only"]||(this._config["non-spa-manual-send"]?console.error("Manual send mode not supported for SPA apps"):(this._collectPluginData(),this._window.removeEventListener("unload",this._onUnload)))},n.prototype.setLixData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._lixData=e,this._applyLixData()},n.prototype._applyLixData=function(){isNaN(this._getTreatment("voyager-web.rum.beaconTimeout"))||(this._config["beacon-timeout"]=parseInt(this._getTreatment("voyager-web.rum.beaconTimeout")))},n.prototype._getTreatment=function(e){return this._lixData[e]||"control"},n.prototype.setPageKey=function(e){this._beaconData.pageKey=e},n.prototype.setCurrentUser=function(e){this._isInternalApp&&"string"==typeof e&&(this._beaconData.sessionID=e)},n.prototype.appTransitionStart=function(e){(e||this._renderCompleteCount>0)&&(this._collectPluginData(),this._beaconData.navigationStart=t(this._window),this._isInitialLoad=!1)},n.prototype.appRenderComplete=function(){var e=this;this._renderCompleteCount++,this._beaconData.renderCompleteTime=t(this._window),this._timeOutVal||(this._timeOutVal=setTimeout((function(){e._collectPluginData()}),this._config["beacon-timeout"]))},n.prototype.addTreeId=function(e,t){if(this._config.plugins&&this._config.plugins.length>2){var n=this._config.plugins[2];n&&n.addTreeId(e,t)}},n.prototype.appViewRenderStart=function(e,n){this._viewTimings[e]||(this._viewTimings[e]={renderName:n||e,viewId:e,renderStart:t(this._window)})},n.prototype.appViewRenderComplete=function(e,n){this._viewTimings[e]&&!this._viewTimings[e].renderEnd&&(this._viewTimings[e].renderEnd=t(this._window))},n.prototype.setDeepLinkTrackingId=function(e){this._shouldSendBeacon=!1},n.prototype.setWindowHiddenState=function(e){this._beaconData.isImpactedByHiddenWindow=e},n.prototype.setPageInstance=function(e){this._beaconData.pageInstance=e},n.prototype.setIsLazyRender=function(e){this._isLazyRender=e},n.prototype.getConfig=function(){return this._config},n.prototype.pluginDone=function(){for(var e,t=this,n=0;n<this._config.plugins.length;n++)if((e=this._config.plugins[n]).isAsync()&&!e.isComplete())return!1;setTimeout((function(){t._sendAllData()}),500)},n.prototype.manuallySetNonSpaPLTSendBeacon=function(){var e=t(this._window),n=this._collectPlugin(),r=this._allBeaconData.length;r>0&&void 0!==this._allBeaconData[r-1].loadEventEnd&&(this._allBeaconData[r-1].loadEventEnd=e),this._checkAsyncPlugAndSend(n)},n.prototype._resetState=function(e){this._beaconData={},this._viewTimings={},this._scrollTime=void 0,this._shouldSendBeacon=!0,this._timeOutVal&&(clearTimeout(this._timeOutVal),this._timeOutVal=void 0),e&&this._config.plugins.map((function(e){e.resetState()}))},n.prototype._readRenderTimingEntries=function(){if(Object.keys(this._viewTimings).length>0)for(var e in this._beaconData.detailedRenderTimingEntries=[],this._viewTimings)this._viewTimings.hasOwnProperty(e)&&this._beaconData.detailedRenderTimingEntries.push(this._viewTimings[e])},n.prototype._collectPluginData=function(){var e=this._collectPlugin();this._checkAsyncPlugAndSend(e)},n.prototype._collectPlugin=function(){var e=!0;if(this._config.enabled)return this._config.plugins.map((function(t){t.collectData(),t.isComplete()||(e=!1)})),this._pushCurrentBeaconData(),e},n.prototype._checkAsyncPlugAndSend=function(e){var t=this;e?this._sendAllData():setTimeout((function(){t._markAllAsyncPluginComplete()}),this._config["async-plugins-timeout"]),this._resetState(!0)},n.prototype._markAllAsyncPluginComplete=function(){this._config.plugins.map((function(e){e.isAsync()&&e.markComplete()})),this._sendAllData()},n.prototype._doesNotHaveLazyImageClass=function(e){var t,n=!0,r=this._config["lazy-image-class-names"];if(e&&e.className&&r)for(t=r.length-1;t>=0;t--)e.className.indexOf(r[t])>-1&&(n=!1);return n},n.prototype._doesElementOverlapWithViewport=function(e){var t,n=e.getBoundingClientRect();return!((t={top:Math.max(n.top,0),left:Math.max(n.left,0),bottom:Math.min(n.bottom,this._window.innerHeight||this._doc.documentElement.clientHeight),right:Math.min(n.right,this._window.innerWidth||this._doc.documentElement.clientWidth)}).bottom<=t.top||t.right<=t.left)},n.prototype._getImgResourceEntries=function(){var e,t,n=[],r=this._beaconData.resourceTimingEntries;if(r)for(e=r.length-1;e>=0;e--)"img"===(t=r[e]).initiatorType&&n.push(t);return n},n.prototype._cleanUpResourceTimingEntries=function(){var e;if(this._beaconData.resourceTimingEntries)for(e=this._beaconData.resourceTimingEntries.length-1;e>=0;e--)this._beaconData.resourceTimingEntries[e].name&&(this._beaconData.resourceTimingEntries[e].name=this._beaconData.resourceTimingEntries[e].name.split(/[?#]/)[0])},n.prototype._readPageKey=function(){this._beaconData&&!this._beaconData.pageKey&&this._isInitialLoad&&(this._beaconData.pageKey=this._getPageKey()),this._isInternalApp&&("EMBER"===this._config["web-ui-framework"]&&void 0!==this._beaconData.pageKey?this._beaconData.pageKey=this._config["page-key-prefix"]+":"+this._beaconData.pageKey:this._doc.querySelector('meta[name="pageKey"]')||(this._beaconData.pageKey=this._config["page-key-prefix"]+":",this._config["pathname-depth"]>-1?this._beaconData.pageKey+=this._window.location.pathname.split(/[/#]/).slice(0,this._config["pathname-depth"]+1).join("/"):this._beaconData.pageKey+=this._window.location.pathname))},n.prototype._getPageKey=function(){var e=this._doc.querySelector('meta[name="pageKey"]');return e?e.getAttribute("content"):this._doc.body.id?this._doc.body.id.substring("pagekey-".length):""},n.prototype._getRenderingMode=function(){var e,t=this._doc.querySelector('meta[name="renderingMode"]');return t&&"BIGPIPE"===(e=t.getAttribute("data-mode"))&&(e="BIG_PIPE"),e},n.prototype._doesRenderErrorCodeBlockExists=function(){return null!=this._doc.querySelector("code#renderError")},n.prototype._readSinglePageAppData=function(){this._beaconData.isSinglePageApp=this._config["is-single-page-app"],this._beaconData.isSinglePageApp&&(this._beaconData.webUIFramework=this._config["web-ui-framework"],this._beaconData.appRenderMode=this._getRenderingMode(),this._isInitialLoad?(this._beaconData.pageLoadMode="INITIAL",this._doesRenderErrorCodeBlockExists()&&(this._beaconData.isAppRenderFailed=!0)):this._beaconData.pageLoadMode="PARTIAL")},n.prototype._sendAllData=function(){var t,n,r,i={};for(t=0;t<this._config.plugins.length;t++)(n=this._config.plugins[t]).isAsync()&&(i=e(i,n.getData()));for(t=0;t<this._allBeaconData.length;t++)r=e(this._allBeaconData[t],i),this._sendBeacon(r);this._allBeaconData=[]},n.prototype._pushCurrentBeaconData=function(){var t;(t=this._getBeaconAndPluginData())&&this._allBeaconData.push(e({},t))},n.prototype._readIsSSL=function(){this._window&&this._window.location&&(this._beaconData.isSSL="https:"===this._window.location.protocol?1:0)},n.prototype._getBeaconAndPluginData=function(){var t=this;if(this._readPageKey(),this._readSinglePageAppData(),this._readRenderTimingEntries(),this._readIsSSL(),this._config["app-version"]&&(this._beaconData.appVersion=this._config["app-version"]),this._config.plugins.map((function(n){t._beaconData=e(t._beaconData,n.getData())})),"navigationStart"in this._beaconData&&this._shouldSendBeacon){if(this._initialStartTime||(this._initialStartTime=this._beaconData.navigationStart),this._beaconData.boomerangStart=this._initialStartTime,this._cleanUpResourceTimingEntries(),this._beaconData.isSinglePageApp)if("renderCompleteTime"in this._beaconData)this._beaconData.timeDone=this._beaconData.renderCompleteTime-this._beaconData.navigationStart;else if(!this._config["navigation-timing-only"])return;return this._beaconData}},n.prototype._sendBeacon=function(e){if(this._config.enabled)try{if(this._fireTrackingBeacon(e),"undefined"!=typeof CustomEvent){var t=new CustomEvent("RUMEvent",{detail:e});this._doc.dispatchEvent(t)}}catch(e){}},n.prototype._fireTrackingBeacon=function(e){var t,n={eventInfo:{eventName:this._config["event-name"],topicName:this._config["topic-name"],appId:this._config["app-id"]},eventBody:e};e.header={pageInstance:e.pageInstance},e.requestHeader={pageKey:e.pageKey},n.eventBody.trackingTime=-1,(t=new XMLHttpRequest).open("POST",this._config["beacon-url"],!0),t.setRequestHeader("content-type","application/json"),this._csrfToken||(this._csrfToken=this._getCsrfToken()),t.setRequestHeader("Csrf-Token",this._csrfToken),t.send(JSON.stringify([n]))},n.prototype._getCookieString=function(){return this._doc.cookie},n.prototype._getCsrfToken=function(){for(var e=this._getCookieString().split(";"),t=0;t<e.length;t++){for(var n=e[t];" "===n.charAt(0);)n=n.substring(1);if(-1!==n.indexOf("JSESSIONID=")){var r=n.substring("JSESSIONID=".length,n.length);return'"'===r[0]&&'"'===r[r.length-1]&&(r=r.substring(1,r.length-1)),r}}return""},n.prototype._canAccessContext=function(e){var t=null;try{t=e&&e.document}catch(e){}return null!==t},n}()}()},55:function(e,t,n){(function(t,n){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */var r;r=function(){"use strict";function e(e){return"function"==typeof e}var r=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=0,o=void 0,a=void 0,s=function(e,t){p[i]=e,p[i+1]=t,2===(i+=2)&&(a?a(v):b())},c="undefined"!=typeof window?window:void 0,u=c||{},l=u.MutationObserver||u.WebKitMutationObserver,d="undefined"==typeof self&&void 0!==t&&"[object process]"==={}.toString.call(t),f="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function h(){var e=setTimeout;return function(){return e(v,1)}}var p=new Array(1e3);function v(){for(var e=0;e<i;e+=2)(0,p[e])(p[e+1]),p[e]=void 0,p[e+1]=void 0;i=0}var m,g,y,x,b=void 0;function E(e,t){var n=this,r=new this.constructor(S);void 0===r[T]&&P(r);var i=n._state;if(i){var o=arguments[i-1];s((function(){return D(i,r,o,n._result)}))}else L(n,r,e,t);return r}function w(e){if(e&&"object"==typeof e&&e.constructor===this)return e;var t=new this(S);return _(t,e),t}d?b=function(){return t.nextTick(v)}:l?(g=0,y=new l(v),x=document.createTextNode(""),y.observe(x,{characterData:!0}),b=function(){x.data=g=++g%2}):f?((m=new MessageChannel).port1.onmessage=v,b=function(){return m.port2.postMessage(0)}):b=void 0===c?function(){try{var e=Function("return this")().require("vertx");return void 0!==(o=e.runOnLoop||e.runOnContext)?function(){o(v)}:h()}catch(e){return h()}}():h();var T=Math.random().toString(36).substring(2);function S(){}function k(t,n,r){n.constructor===t.constructor&&r===E&&n.constructor.resolve===w?function(e,t){1===t._state?I(e,t._result):2===t._state?A(e,t._result):L(t,void 0,(function(t){return _(e,t)}),(function(t){return A(e,t)}))}(t,n):void 0===r?I(t,n):e(r)?function(e,t,n){s((function(e){var r=!1,i=function(e,t,n,r){try{e.call(t,n,r)}catch(e){return e}}(n,t,(function(n){r||(r=!0,t!==n?_(e,n):I(e,n))}),(function(t){r||(r=!0,A(e,t))}),e._label);!r&&i&&(r=!0,A(e,i))}),e)}(t,n,r):I(t,n)}function _(e,t){if(e===t)A(e,new TypeError("You cannot resolve a promise with itself"));else if(i=typeof(r=t),null===r||"object"!==i&&"function"!==i)I(e,t);else{var n=void 0;try{n=t.then}catch(t){return void A(e,t)}k(e,t,n)}var r,i}function C(e){e._onerror&&e._onerror(e._result),R(e)}function I(e,t){void 0===e._state&&(e._result=t,e._state=1,0!==e._subscribers.length&&s(R,e))}function A(e,t){void 0===e._state&&(e._state=2,e._result=t,s(C,e))}function L(e,t,n,r){var i=e._subscribers,o=i.length;e._onerror=null,i[o]=t,i[o+1]=n,i[o+2]=r,0===o&&e._state&&s(R,e)}function R(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var r=void 0,i=void 0,o=e._result,a=0;a<t.length;a+=3)r=t[a],i=t[a+n],r?D(n,r,i,o):i(o);e._subscribers.length=0}}function D(t,n,r,i){var o=e(r),a=void 0,s=void 0,c=!0;if(o){try{a=r(i)}catch(e){c=!1,s=e}if(n===a)return void A(n,new TypeError("A promises callback cannot return that same promise."))}else a=i;void 0!==n._state||(o&&c?_(n,a):!1===c?A(n,s):1===t?I(n,a):2===t&&A(n,a))}var N=0;function P(e){e[T]=N++,e._state=void 0,e._result=void 0,e._subscribers=[]}var M=function(){function e(e,t){this._instanceConstructor=e,this.promise=new e(S),this.promise[T]||P(this.promise),r(t)?(this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?I(this.promise,this._result):(this.length=this.length||0,this._enumerate(t),0===this._remaining&&I(this.promise,this._result))):A(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;void 0===this._state&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,r=n.resolve;if(r===w){var i=void 0,o=void 0,a=!1;try{i=e.then}catch(e){a=!0,o=e}if(i===E&&void 0!==e._state)this._settledAt(e._state,t,e._result);else if("function"!=typeof i)this._remaining--,this._result[t]=e;else if(n===O){var s=new n(S);a?A(s,o):k(s,e,i),this._willSettleAt(s,t)}else this._willSettleAt(new n((function(t){return t(e)})),t)}else this._willSettleAt(r(e),t)},e.prototype._settledAt=function(e,t,n){var r=this.promise;void 0===r._state&&(this._remaining--,2===e?A(r,n):this._result[t]=n),0===this._remaining&&I(r,this._result)},e.prototype._willSettleAt=function(e,t){var n=this;L(e,void 0,(function(e){return n._settledAt(1,t,e)}),(function(e){return n._settledAt(2,t,e)}))},e}(),O=function(){function t(e){this[T]=N++,this._result=this._state=void 0,this._subscribers=[],S!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(e,t){try{t((function(t){_(e,t)}),(function(t){A(e,t)}))}catch(t){A(e,t)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(e){return this.then(null,e)},t.prototype.finally=function(t){var n=this.constructor;return e(t)?this.then((function(e){return n.resolve(t()).then((function(){return e}))}),(function(e){return n.resolve(t()).then((function(){throw e}))})):this.then(t,t)},t}();return O.prototype.then=E,O.all=function(e){return new M(this,e).promise},O.race=function(e){var t=this;return r(e)?new t((function(n,r){for(var i=e.length,o=0;o<i;o++)t.resolve(e[o]).then(n,r)})):new t((function(e,t){return t(new TypeError("You must pass an array to race."))}))},O.resolve=w,O.reject=function(e){var t=new this(S);return A(t,e),t},O._setScheduler=function(e){a=e},O._setAsap=function(e){s=e},O._asap=s,O.polyfill=function(){var e=void 0;if(void 0!==n)e=n;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var r=null;try{r=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===r&&!t.cast)return}e.Promise=O},O.Promise=O,O},e.exports=r()}).call(this,n(66),n(13))},56:function(e,t,n){"use strict";n.r(t);var r="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise((function(n,r){var i=new XMLHttpRequest;for(var o in i.open(t.method||"get",e,!0),t.headers)i.setRequestHeader(o,t.headers[o]);function a(){var e,t=[],n=[],r={};return i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(i,o,a){t.push(o=o.toLowerCase()),n.push([o,a]),e=r[o],r[o]=e?e+","+a:a})),{ok:2==(i.status/100|0),status:i.status,statusText:i.statusText,url:i.responseURL,clone:a,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(i.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([i.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}i.withCredentials="include"==t.credentials,i.onload=function(){n(a())},i.onerror=r,i.send(t.body)}))};t.default=r},61:function(e,t,n){"use strict";n(62),n(63),n(64),n(65),n(55),n(67),n(68),n(69);window.Promise=window.Promise||n(55).Promise;var r=window.LI||{};window.LI=r},62:function(e,t){Array.prototype.forEach||(Array.prototype.forEach=function(e){var t,n;if(null==this)throw new TypeError("this is null or not defined");var r=Object(this),i=r.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(arguments.length>1&&(t=arguments[1]),n=0;n<i;){var o;n in r&&(o=r[n],e.call(t,o,n,r)),n++}})},63:function(e,t){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)})},64:function(e,t){String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")})},65:function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null})},66:function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],l=!1,d=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&h())}function h(){if(!l){var e=s(f);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||l||s(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},67:function(e,t,n){window.fetch||(window.fetch=n(56).default||n(56))},68:function(e,t){
/*! (C) Andrea Giammarchi - @WebReflection - ISC Style License */
!function(e,t){"use strict";function n(){var e=k.splice(0,k.length);for(Ze=0;e.length;)e.shift().call(null,e.shift())}function r(e,t){for(var n=0,r=e.length;n<r;n++)p(e[n],t)}function i(e){return function(t){Oe(t)&&(p(t,e),oe.length&&r(t.querySelectorAll(oe),e))}}function o(e){var t=Ke.call(e,"is"),n=e.nodeName.toUpperCase(),r=se.call(re,t?ee+t.toUpperCase():$+n);return t&&-1<r&&!a(n,t)?-1:r}function a(e,t){return-1<oe.indexOf(e+'[is="'+t+'"]')}function s(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target,o=e[X]||2,a=e[Q]||3;!rt||i&&i!==t||!t[K]||"style"===r||e.prevValue===e.newValue&&(""!==e.newValue||n!==o&&n!==a)||t[K](r,n===o?null:e.prevValue,n===a?null:e.newValue)}function c(e){var t=i(e);return function(e){k.push(t,e.target),Ze&&clearTimeout(Ze),Ze=setTimeout(n,1)}}function u(e){nt&&(nt=!1,e.currentTarget.removeEventListener(Z,u)),oe.length&&r((e.target||w).querySelectorAll(oe),e.detail===F?F:B),Pe&&function(){for(var e,t=0,n=Ue.length;t<n;t++)e=Ue[t],ae.contains(e)||(n--,Ue.splice(t--,1),p(e,F))}()}function l(e,t){var n=this;Ve.call(n,e,t),_.call(n,{target:n})}function d(e,t,n){var r=t.apply(e,n),i=o(r);return-1<i&&D(r,ie[i]),n.pop()&&oe.length&&function(e){for(var t,n=0,r=e.length;n<r;n++)t=e[n],D(t,ie[o(t)])}(r.querySelectorAll(oe)),r}function f(e,t){Le(e,t),A?A.observe(e,Qe):(tt&&(e.setAttribute=l,e[O]=I(e),e[U](Y,_)),e[U](J,s)),e[z]&&rt&&(e.created=!0,e[z](),e.created=!1)}function h(e){throw new Error("A "+e+" type is already registered")}function p(e,t){var n,r,i=o(e);-1<i&&!Fe.call(e,"TEMPLATE")&&(R(e,ie[i]),i=0,t!==B||e[B]?t!==F||e[F]||(e[B]=!1,e[F]=!0,r="disconnected",i=1):(e[F]=!1,e[B]=!0,r="connected",i=1,Pe&&se.call(Ue,e)<0&&Ue.push(e)),i&&(n=e[t+H]||e[r+H])&&n.call(e))}function v(){}function m(e,t,n){var r=n&&n[q]||"",i=t.prototype,o=Ae(i),a=t.observedAttributes||fe,s={prototype:o};Me(o,z,{value:function(){if(Se)Se=!1;else if(!this[ye]){this[ye]=!0,new t(this),i[z]&&i[z].call(this);var e=ke[Ce.get(t)];(!be||e.create.length>1)&&x(this)}}}),Me(o,K,{value:function(e){-1<se.call(a,e)&&i[K]&&i[K].apply(this,arguments)}}),i[W]&&Me(o,j,{value:i[W]}),i[V]&&Me(o,G,{value:i[V]}),r&&(s[q]=r),e=e.toUpperCase(),ke[e]={constructor:t,create:r?[r,Ie(e)]:[e]},Ce.set(t,e),w[P](e.toLowerCase(),s),b(e),_e[e].r()}function g(e){var t=ke[e.toUpperCase()];return t&&t.constructor}function y(e){return"string"==typeof e?e:e&&e.is||""}function x(e){for(var t,n=e[K],r=n?e.attributes:fe,i=r.length;i--;)t=r[i],n.call(e,t.name||t.nodeName,null,t.value||t.nodeValue)}function b(e){return(e=e.toUpperCase())in _e||(_e[e]={},_e[e].p=new Te((function(t){_e[e].r=t}))),_e[e].p}function E(){xe&&delete e.customElements,de(e,"customElements",{configurable:!0,value:new v}),de(e,"CustomElementRegistry",{configurable:!0,value:v});for(var t=S.get(/^HTML[A-Z]*[a-z]/),n=t.length;n--;function(t){var n=e[t];if(n){e[t]=function(e){var t,r;return e||(e=this),e[ye]||(Se=!0,t=ke[Ce.get(e.constructor)],(e=(r=be&&1===t.create.length)?Reflect.construct(n,fe,t.constructor):w.createElement.apply(w,t.create))[ye]=!0,Se=!1,r||x(e)),e},e[t].prototype=n.prototype;try{n.prototype.constructor=e[t]}catch(r){!0,de(n,ye,{value:e[t]})}}}(t[n]));w.createElement=function(e,t){var n=y(t);return n?Xe.call(this,e,Ie(n)):Xe.call(this,e)},Ye||(et=!0,w[P](""))}var w=e.document,T=e.Object,S=function(e){var t,n,r,i,o=/^[A-Z]+[a-z]/,a=function(e,t){(t=t.toLowerCase())in s||(s[e]=(s[e]||[]).concat(t),s[t]=s[t.toUpperCase()]=e)},s=(T.create||T)(null),c={};for(n in e)for(i in e[n])for(r=e[n][i],s[i]=r,t=0;t<r.length;t++)s[r[t].toLowerCase()]=s[r[t].toUpperCase()]=i;return c.get=function(e){return"string"==typeof e?s[e]||(o.test(e)?[]:""):function(e){var t,n=[];for(t in s)e.test(t)&&n.push(t);return n}(e)},c.set=function(e,t){return o.test(e)?a(e,t):a(t,e),c},c}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});"object"!=typeof t&&(t={type:t||"auto"});var k,_,C,I,A,L,R,D,N,P="registerElement",M=1e5*e.Math.random()>>0,O="__"+P+M,U="addEventListener",B="attached",H="Callback",F="detached",q="extends",K="attributeChanged"+H,j=B+H,W="connected"+H,V="disconnected"+H,z="created"+H,G=F+H,X="ADDITION",Q="REMOVAL",J="DOMAttrModified",Z="DOMContentLoaded",Y="DOMSubtreeModified",$="<",ee="=",te=/^[A-Z][._A-Z0-9]*-[-._A-Z0-9]*$/,ne=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],re=[],ie=[],oe="",ae=w.documentElement,se=re.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},ce=T.prototype,ue=ce.hasOwnProperty,le=ce.isPrototypeOf,de=T.defineProperty,fe=[],he=T.getOwnPropertyDescriptor,pe=T.getOwnPropertyNames,ve=T.getPrototypeOf,me=T.setPrototypeOf,ge=!!T.__proto__,ye="__dreCEv1",xe=e.customElements,be=!/^force/.test(t.type)&&!!(xe&&xe.define&&xe.get&&xe.whenDefined),Ee=T.create||T,we=e.Map||function(){var e,t=[],n=[];return{get:function(e){return n[se.call(t,e)]},set:function(r,i){(e=se.call(t,r))<0?n[t.push(r)-1]=i:n[e]=i}}},Te=e.Promise||function(e){function t(e){for(r=!0;n.length;)n.shift()(e)}var n=[],r=!1,i={catch:function(){return i},then:function(e){return n.push(e),r&&setTimeout(t,1),i}};return e(t),i},Se=!1,ke=Ee(null),_e=Ee(null),Ce=new we,Ie=function(e){return e.toLowerCase()},Ae=T.create||function e(t){return t?(e.prototype=t,new e):this},Le=me||(ge?function(e,t){return e.__proto__=t,e}:pe&&he?function(){function e(e,t){for(var n,r=pe(t),i=0,o=r.length;i<o;i++)n=r[i],ue.call(e,n)||de(e,n,he(t,n))}return function(t,n){do{e(t,n)}while((n=ve(n))&&!le.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),Re=e.MutationObserver||e.WebKitMutationObserver,De=e.HTMLAnchorElement,Ne=(e.HTMLElement||e.Element||e.Node).prototype,Pe=!le.call(Ne,ae),Me=Pe?function(e,t,n){return e[t]=n.value,e}:de,Oe=Pe?function(e){return 1===e.nodeType}:function(e){return le.call(Ne,e)},Ue=Pe&&[],Be=Ne.attachShadow,He=Ne.cloneNode,Fe=Ne.closest||function(e){for(var t=this;t&&t.nodeName!==e;)t=t.parentNode;return t},qe=Ne.dispatchEvent,Ke=Ne.getAttribute,je=Ne.hasAttribute,We=Ne.removeAttribute,Ve=Ne.setAttribute,ze=w.createElement,Ge=w.importNode,Xe=ze,Qe=Re&&{attributes:!0,characterData:!0,attributeOldValue:!0},Je=Re||function(e){tt=!1,ae.removeEventListener(J,Je)},Ze=0,Ye=P in w&&!/^force-all/.test(t.type),$e=!0,et=!1,tt=!0,nt=!0,rt=!0;if(Re&&((N=w.createElement("div")).innerHTML="<div><div></div></div>",new Re((function(e,t){if(e[0]&&"childList"==e[0].type&&!e[0].removedNodes[0].childNodes.length){var n=(N=he(Ne,"innerHTML"))&&N.set;n&&de(Ne,"innerHTML",{set:function(e){for(;this.lastChild;)this.removeChild(this.lastChild);n.call(this,e)}})}t.disconnect(),N=null})).observe(N,{childList:!0,subtree:!0}),N.innerHTML=""),Ye||(me||ge?(R=function(e,t){le.call(t,e)||f(e,t)},D=f):D=R=function(e,t){e[O]||(e[O]=T(!0),f(e,t))},Pe?(tt=!1,function(){var e=he(Ne,U),t=e.value,n=function(e){var t=new CustomEvent(J,{bubbles:!0});t.attrName=e,t.prevValue=Ke.call(this,e),t.newValue=null,t[Q]=t.attrChange=2,We.call(this,e),qe.call(this,t)},r=function(e,t){var n=je.call(this,e),r=n&&Ke.call(this,e),i=new CustomEvent(J,{bubbles:!0});Ve.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i.MODIFICATION=i.attrChange=1:i[X]=i.attrChange=0,qe.call(this,i)},i=function(e){var t,n=e.currentTarget,r=n[O],i=e.propertyName;r.hasOwnProperty(i)&&(r=r[i],(t=new CustomEvent(J,{bubbles:!0})).attrName=r.name,t.prevValue=r.value||null,t.newValue=r.value=n[i]||null,null==t.prevValue?t[X]=t.attrChange=0:t.MODIFICATION=t.attrChange=1,qe.call(n,t))};e.value=function(e,o,a){e===J&&this[K]&&this.setAttribute!==r&&(this[O]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",i)),t.call(this,e,o,a)},de(Ne,U,e)}()):Re||(ae[U](J,Je),ae.setAttribute(O,1),ae.removeAttribute(O),tt&&(_=function(e){var t,n,r,i=this;if(i===e.target){for(r in t=i[O],i[O]=n=I(i),n){if(!(r in t))return C(0,i,r,t[r],n[r],X);if(n[r]!==t[r])return C(1,i,r,t[r],n[r],"MODIFICATION")}for(r in t)if(!(r in n))return C(2,i,r,t[r],n[r],Q)}},C=function(e,t,n,r,i,o){var a={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};a[o]=e,s(a)},I=function(e){for(var t,n,r={},i=e.attributes,o=0,a=i.length;o<a;o++)"setAttribute"!==(n=(t=i[o]).name)&&(r[n]=t.value);return r})),w[P]=function(e,t){if(n=e.toUpperCase(),$e&&($e=!1,Re?(A=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new Re((function(r){for(var i,o,a,s=0,c=r.length;s<c;s++)"childList"===(i=r[s]).type?(n(i.addedNodes,e),n(i.removedNodes,t)):(o=i.target,rt&&o[K]&&"style"!==i.attributeName&&(a=Ke.call(o,i.attributeName))!==i.oldValue&&o[K](i.attributeName,i.oldValue,a))}))}(i(B),i(F)),(L=function(e){return A.observe(e,{childList:!0,subtree:!0}),e})(w),Be&&(Ne.attachShadow=function(){return L(Be.apply(this,arguments))})):(k=[],w[U]("DOMNodeInserted",c(B)),w[U]("DOMNodeRemoved",c(F))),w[U](Z,u),w[U]("readystatechange",u),w.importNode=function(e,t){switch(e.nodeType){case 1:return d(w,Ge,[e,!!t]);case 11:for(var n=w.createDocumentFragment(),r=e.childNodes,i=r.length,o=0;o<i;o++)n.appendChild(w.importNode(r[o],!!t));return n;default:return He.call(e,!!t)}},Ne.cloneNode=function(e){return d(this,He,[!!e])}),et)return et=!1;if(-2<se.call(re,ee+n)+se.call(re,$+n)&&h(e),!te.test(n)||-1<se.call(ne,n))throw new Error("The type "+e+" is invalid");var n,o,a=function(){return l?w.createElement(f,n):w.createElement(f)},s=t||ce,l=ue.call(s,q),f=l?t[q].toUpperCase():n;return l&&-1<se.call(re,$+f)&&h(f),o=re.push((l?ee:$)+n)-1,oe=oe.concat(oe.length?",":"",l?f+'[is="'+e.toLowerCase()+'"]':f),a.prototype=ie[o]=ue.call(s,"prototype")?s.prototype:Ae(Ne),oe.length&&r(w.querySelectorAll(oe),B),a},w.createElement=Xe=function(e,t){var n=y(t),r=n?ze.call(w,e,Ie(n)):ze.call(w,e),i=""+e,o=se.call(re,(n?ee:$)+(n||i).toUpperCase()),s=-1<o;return n&&(r.setAttribute("is",n=n.toLowerCase()),s&&(s=a(i.toUpperCase(),n))),rt=!w.createElement.innerHTMLHelper,s&&D(r,ie[o]),r}),addEventListener("beforeunload",(function(){delete w.createElement,delete w.importNode,delete w[P]}),!1),v.prototype={constructor:v,define:be?function(e,t,n){if(n)m(e,t,n);else{var r=e.toUpperCase();ke[r]={constructor:t,create:[r]},Ce.set(t,r),xe.define(e,t)}}:m,get:be?function(e){return xe.get(e)||g(e)}:g,whenDefined:be?function(e){return Te.race([xe.whenDefined(e),b(e)])}:b},!xe||/^force/.test(t.type))E();else if(!t.noBuiltIn)try{!function(t,n,r){var i=new RegExp("^<a\\s+is=('|\")"+r+"\\1></a>$");if(n[q]="a",(t.prototype=Ae(De.prototype)).constructor=t,e.customElements.define(r,t,n),!i.test(w.createElement("a",{is:r}).outerHTML)||!i.test((new t).outerHTML))throw n}((function e(){return Reflect.construct(De,[],e)}),{},"document-register-element-a"+M)}catch(e){E()}if(!t.noBuiltIn)try{if(ze.call(w,"a","a").outerHTML.indexOf("is")<0)throw{}}catch(e){Ie=function(e){return{is:e.toLowerCase()}}}}(window)},69:function(e,t){var n,r;n=function(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(e.indexOf("Trident/")>0){var n=e.indexOf("rv:");return parseInt(e.substring(n+3,e.indexOf(".",n)),10)}var r=e.indexOf("Edge/");return r>0&&parseInt(e.substring(r+5,e.indexOf(".",r)),10)}(),r=document.querySelector("body"),n&&(r instanceof Element&&r.classList.add("browser-ie"),n<=10&&r instanceof Element&&r.classList.add("browser-ie--10"),n<=11&&r instanceof Element&&r.classList.add("browser-ie--11"))},70:function(e,t,n){"use strict";var r,i=n(52),o=n.n(i),a=n(0);(r=window).addEventListener("load",(function(e){if("function"==typeof o.a){r.rumTracking=new o.a({"web-ui-framework":"DUST","is-single-page-app":!1,"navigation-timing-only":!0,"enable-rs-timing":!0,"request-sampling-rate":1,"beacon-service":"tracking","beacon-url":"/li/track","event-name":"RealUserMonitoringEvent"});var t=Object(a.m)();r.rumTracking.setPageInstance(t)}}))},9:function(e,t,n){var r,i,o;i=[t,e],void 0===(o="function"==typeof(r=function(e,t){"use strict";var n="undefined"!=typeof window&&window&&"node"!==window.appEnvironment,r=n&&!!window.requestIdleCallback,i={AJAX_METHOD:"POST",DEFAULT_PAGE_TYPE:"ajax",globalTrackingUrl:null,globalTrackingAppId:"no.app.id",queue:[],paused:!1,maxQueueSize:1,queueTimeout:1e3,timeoutId:null,csrfToken:"",testId:"",testSegId:"",setProperty:function(e,t){t&&(this[e]=t)},setTrackingUrl:function(e){this.setProperty("globalTrackingUrl",e)},setAppId:function(e){this.setProperty("globalTrackingAppId",e)},setCsrfToken:function(e){this.setProperty("csrfToken",e)},setTestId:function(e){this.setProperty("testId",e)},setTestSegId:function(e){this.setProperty("testSegId",e)},getCookieString:function(){return document.cookie},getCsrfToken:function(){for(var e=this.getCookieString().split(";"),t=0;t<e.length;t++){for(var n=e[t];" "===n.charAt(0);)n=n.substring(1);if(-1!==n.indexOf("JSESSIONID=")){var r=n.substring("JSESSIONID=".length,n.length);return'"'===r[0]&&'"'===r[r.length-1]&&(r=r.substring(1,r.length-1)),r}}return""},createXmlHttpObject:function(){return n&&window.XMLHttpRequest?new XMLHttpRequest:null},ajax:function(e,t,n,r){var i;(r=r||this.globalTrackingUrl)?(i=this.createXmlHttpObject())&&(i.open(this.AJAX_METHOD,r,!0),i.withCredentials=!0,i.setRequestHeader("Content-type","application/json"),this.csrfToken?i.setRequestHeader("Csrf-Token",this.csrfToken):i.setRequestHeader("Csrf-Token",this.getCsrfToken()),this.testId&&i.setRequestHeader("X-LinkedIn-traceDataContext-ENG_TEST_ID",this.testId),this.testSegId&&i.setRequestHeader("X-LinkedIn-traceDataContext-ENG_TEST_SEGMENT_ID",this.testSegId),i.onreadystatechange=function(){4===i.readyState&&(200===i.status||304===i.status?"function"==typeof t&&t(i):n&&n(i))},4!==i.readyState&&i.send(e)):n&&n("Tracking url is not defined")},pause:function(){this.paused=!0},unpause:function(){this.paused=!1,this.queue.length>=this.maxQueueSize&&this.flush()},flush:function(){this.queue.length>0&&(this.ajax(JSON.stringify(this.queue),null,this.logError),this.queue=[]),r?cancelIdleCallback(this.timeoutId):clearTimeout(this.timeoutId),this.timeoutId=null,this.paused=!1},idleFlush:function(e){var t=this,n=Date.now();return requestIdleCallback((function(r){r.timeRemaining()>8||r.didTimeout?t.flush():t.timeoutId=t.idleFlush(e-(Date.now()-n))}),{timeout:e})},addToQueue:function(e){if(this.queue.push(e),this.queue.length>=this.maxQueueSize&&!this.paused)return this.flush();if(!this.timeoutId){var t=this;r&&!this.paused?this.timeoutId=this.idleFlush(this.queueTimeout):this.timeoutId=setTimeout((function(){t.flush()}),this.queueTimeout)}},validateEvent:function(e,t,n){this.ajax(JSON.stringify([{eventInfo:this.populateEventInfo(e),eventBody:this.populateEventHeaders(t)}]),(function(e){return n(null,e)}),(function(e){return n(e)}),this.globalTrackingUrl+"/validate")},sendEvent:function(e,t){this.addToQueue({eventInfo:this.populateEventInfo(e),eventBody:this.populateEventHeaders(t)})},getTimestamp:function(){return Math.round((new Date).getTime()/1e3)},populateEventInfo:function(e){return"string"==typeof e&&(e={eventName:e}),e&&"object"==typeof e?(e.appId||(e.appId=this.globalTrackingAppId),e):(this.logError("Event info must be object"),{})},populateEventHeaders:function(e){return e&&"object"==typeof e?e:(this.logError("Event body must be object"),{})},logError:function(e){var t=window.console;t&&t.error&&t.error(e)},init:function(){this.setTrackingUrl(),this.setAppId(),this.onBeforeUnload=this.onBeforeUnload.bind(this),n&&window.addEventListener("beforeunload",this.onBeforeUnload)},destroy:function(){n&&window.removeEventListener("beforeunload",this.onBeforeUnload)},onBeforeUnload:function(){this.flush()}};i.init(),t.exports=i})?r.apply(t,i):r)||(e.exports=o)}});