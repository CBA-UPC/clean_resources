"use strict";(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["loader.TombstonedEntryHandler"],{285661:(e,n,t)=>{t.r(n),t.d(n,{default:()=>M});var o=t(452612),c=t(539928),i=t(813403),a=t(202784),r=t(968079),s=t(709249),d=t(887371),l=t(545754),u=t(486906),f=t(645184),p=t.n(f),k=t(16587),b=t(809739),v=t(134124);const y=(0,t(392160).Z)().propsFromState((function(){return{feedbackActions:function(e,n){return n.module.selectFeedbackActions(e)},feedbackKey:function(e,n){return n.feedbackKeys.length&&n.feedbackKeys[0]}}})).adjustStateProps((function(e){var n=e.feedbackKey?e.feedbackActions[e.feedbackKey]:void 0,t=n&&n.childKeys?n.childKeys.map((function(n){return{key:n,action:e.feedbackActions[n]}})):[];return{feedbackAction:n,childFeedbackActions:t}})).propsFromActions((function(e){var n=e.module;return{applyFeedbackAction:n.applyFeedbackAction,undoFeedbackAction:n.undoFeedbackAction}})).withAnalytics({element:"feedback_dontlike"});var m=p().d058316c,h=p().e2f2b658,A=p().gf5e9ea6,_=function(e,n){return e&&v.S4(e,n)},F=function(e){var n=e.itemMetadata;return n&&n.clientEventInfo&&n.clientEventInfo.component},g=function(e){(0,l.Z)(t,e);var n=(0,u.Z)(t);function t(){var e;(0,s.Z)(this,t);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(e=n.call.apply(n,[this].concat(c)))._getMemoizedFollowUpOptions=(0,k.Z)((function(e,n,t,o,c){return(t||[]).map((function(t){var i,a=t.action,s=t.key;return{label:null!==(i=a.prompt)&&void 0!==i?i:"",onClick:function(){var t,i=_(a,o),d=F(o),l=(t=a.clientEventInfo)&&t.action;c.scribe({component:d,element:i,action:l||"click"}),n({entry:o,feedbackKeys:[s].concat((0,r.Z)(e))})}}}))})),e._getFollowUpOptions=function(){var n=e.props,t=n.analytics,o=n.applyFeedbackAction,c=n.childFeedbackActions,i=n.entry,a=n.feedbackKeys;return e._getMemoizedFollowUpOptions(a,o,c,i,t)},e._handleUndo=function(){var n=e.props,t=n.analytics,o=n.entry,c=n.feedbackAction,i=n.feedbackKeys,a=n.onUndoRichAction,r=n.undoFeedbackAction;if(c){r({entry:o,feedbackKeys:i}),a&&a();var s=_(c,o)||"feedback_unknown",d=F(o),l=v.C_(c,o);t.scribe({component:d,element:s,action:l})}},e._getTombstoneMessage=function(){var n,t=e.props.feedbackAction;return null!=t&&t.confirmation?t.confirmation:null!=t&&null!==(n=t.richBehavior)&&void 0!==n&&n.markNotInterestedTopic?h:m},e}return(0,d.Z)(t,[{key:"render",value:function(){var e=this.props,n=e.carousel,t=e.conversationPosition,o=e.conversationTreeMetadata,c=e.feedbackAction,i=this._getTombstoneMessage(),r=null==c?void 0:c.hasUndoAction;return a.createElement(b.Z,{actionText:r?A:void 0,additionalActions:this._getFollowUpOptions(),carousel:n,conversationPosition:t,conversationTreeMetadata:o,onClick:r?this._handleUndo:void 0},i)}}]),t}(a.Component);g.defaultProps={carousel:!1};const w=y(g);var K=function(e){var n=e.entry,t=n.content,o=t.dismissedEntry,c=t.feedbackKeys,i=n.conversationPosition,r=n.conversationTreeMetadata,s=e.feedbackItems,d=e.module,l=a.useMemo((function(){if(s&&0!==c.length){var e=s.find((function(e){return e.feedbackKey===c[0]}));return null==e?void 0:e.onUndo}}),[c,s]);return a.createElement(w,{conversationPosition:i,conversationTreeMetadata:r,entry:o,feedbackKeys:c,module:d,onUndoRichAction:l})};const E=a.memo(K);const M=c.iH({component:E,feedbackEntrySelector:function(e){return e.content.dismissedEntry},shouldDisplayBorder:function(e){var n=e.conversationPosition;return!n||!!n.isEnd},getScribeDataItem:function(e){var n=e.content.dismissedEntry;return n.type===o.ZP.Tweet?(0,i.Hx)(n):void 0}}).getHandler()}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web-legacy/loader.TombstonedEntryHandler.5f09c9aa.js.map5.5,4.5,10,10,10c5.5,0,10-4.5,10-10C22,6.5,17.5,2,12,2zM12,20.2c-4.5,0-8.2-3.7-8.2-8.2S7.5,3.8,12,3.8s8.2,3.7,8.2,8.2S16.5,20.2,12,20.2zM11,10h2v8h-2V10zM11,6h2v2h-2V6z" fill="#fff"></path>
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
      