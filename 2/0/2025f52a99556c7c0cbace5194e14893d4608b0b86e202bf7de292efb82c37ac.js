"use strict";(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["bundle.ConversationParticipants"],{751507:(e,t,n)=>{n.d(t,{$6:()=>o,eY:()=>c,zt:()=>s});var r=n(202784),i=r.createContext(!1);function s(e){return r.createElement(i.Provider,e)}var o=i.Consumer;function c(){return r.useContext(i)}},213045:(e,t,n)=>{n.d(t,{$f:()=>T,KV:()=>v,LI:()=>x,Nn:()=>f,SC:()=>w,Vt:()=>y,X_:()=>_,Xs:()=>b,c4:()=>N,ed:()=>D,fX:()=>m,op:()=>E});var r=n(202784),i=n(484292),s=n(645184),o=n.n(s),c=n(973952),a=n(97463),l=n(801206),u=n(766961),d=o().cfd2f35e,p=o().f9e45cfb,f=o().fcd4d489,b=o().a6450e84,m=o().g353ad73,v=o().a9fd20be,k=o().j546fb79,g=o().c9623eeb,y=o().e133be4e,h=o().he43bca4,_=o().ae3e9c81,C=o().e68b09b4,Z=o().dacb5cc6,w=Object.freeze({TWEET_CARET:"tweet_caret",PROFILE:"user_profile",LIST_DETAIL:"list_detail",RICH_FEEDBACK:"rich_feedback",TWEET:"tweet",FOLLOWERS_LIST:"followers_list"}),T=function(e){return{confirmButtonType:"destructiveFilled",headline:p({screenName:e}),label:b,text:m({screenName:e})}},E=function(e){var t,n=e.blockAction,r=e.blockSubtext,i=e.source,s=e.testID,o=e.unblockAction,c=e.unblockSubtext,a=e.user,d=l.Z,p=x(a);switch(i){case w.PROFILE:case w.LIST_DETAIL:case w.FOLLOWERS_LIST:d=function(){a.smart_blocking||!a.blocking?n(p):o(p)};break;case w.TWEET:case w.TWEET_CARET:case w.RICH_FEEDBACK:t=u.uq.block,d=function(){a.smart_blocking||!a.blocking?n(p):o(p)}}return{confirmation:p,onClick:d,testID:s,shortcutKey:t,Icon:I(a.blocking,a.smart_blocking),text:L(a),subText:S({user:a,blockSubtext:r,unblockSubtext:c})}},I=function(e,t){return t||!e?c.default:a.default},S=function(e){var t=e.blockSubtext,n=e.unblockSubtext,r=e.user;return!r.smart_blocking&&r.blocking||!t?r.blocking?n:void 0:t(r.screen_name)},L=function(e){return e.smart_blocking||!e.blocking?f({screenName:e.screen_name}):g({screenName:e.screen_name})},x=function(e){return e.smart_blocking||!e.blocking?T(e.screen_name):(t=e.screen_name,{confirmButtonType:"primary",headline:k({screenName:t}),label:y,text:h});var t},D=function(e){var t=e.confirmation,n=e.handleConfirm,s=e.onClose,o=t.confirmButtonType,c=t.headline,a=t.label,l=t.text;return r.createElement(i.Z,{cancelButtonLabel:d,confirmButtonLabel:a,confirmButtonType:o,headline:c,onCancel:s,onConfirm:n,text:l})},N=function(e){return{confirmButtonType:"primary",headline:_({screenName:e}),label:C,text:Z}}},819565:(e,t,n)=>{n.d(t,{d:()=>i});var r=n(645184),i={defaultToast:{text:n.n(r)().b6878b0a},showToast:!0}},765249:(e,t,n)=>{n.d(t,{c:()=>c});var r,i=n(256666),s=n(801206),o=n(663140),c=(r={},(0,i.Z)(r,o.ZP.OtherUserSuspended,{customAction:s.Z}),(0,i.Z)(r,o.ZP.StatusViewForbidden,{customAction:s.Z}),r)},517772:(e,t,n)=>{n.d(t,{D:()=>i});var r=n(645184),i={defaultToast:{text:n.n(r)().ca96fe6e},showToast:!0}},58343:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(476984),i=n.n(r),s=n(24949);const o=(0,s.wN)(s.PW,i())},766961:(e,t,n)=>{n.d(t,{OX:()=>p,Od:()=>u,PN:()=>f,uq:()=>l,wR:()=>m});var r=n(968079),i=(n(477950),n(94908),n(200634),n(315735),n(906886),n(606710),n(909933)),s=n(645184),o=n.n(s),c=n(16587),a=n(206149),l=Object.freeze({openKeyboardShortcuts:"?",swipeLeft:"left",swipeRight:"right",nextItem:"j",previousItem:"k",refresh:".",nightMode:"z",bookmark:"b",block:"x",mute:"u",newTweet:"n",newMessage:"m",toggleDMDrawer:"i",goHome:"g h",goExplore:"g e",goNotifications:"g n",goMentions:"g r",goProfile:"g p",goLikes:"g l",goLists:"g i",goMessages:"g m",goToDrafts:"g f",goToScheduled:"g t",goSettings:"g s",goToUser:"g u",goBookmarks:"g b",goTopArticles:"g a",goDisplay:"g d",search:"/",audio:{dock:"a d",play:"a space",mute:"a m"},video:{play1:"k",play2:"space",mute:"m"},columns:{createNewColumn:"c n",duplicateColumn:"c d",focusOnReorderButton:"c r",lastColumn:"c 0",nextColumn:"]",nthColumn:"c 1..9",prevColumn:"[",removeColumn:"c backspace",toggleColumnOptions:"c o",undoRemoveColumn:"c u"},decks:{createNewDeck:"d n",editActiveDeck:"d e",lastPinnedDeck:"d 0",manageAllDecks:"d m",nthPinnedDeck:"d 1..9"},labs:{openCommandCenter:">"}}),u=(0,c.Z)((function(e){var t=e?[{description:o().b7fa0cfe,keys:l.goTopArticles,universal:!1}]:[];return[].concat((0,r.Z)([]),[{description:o().d5696fcc,keys:l.openKeyboardShortcuts,universal:!0},{description:o().a83d4280,keys:l.nextItem,universal:!0},{description:o().g0048656,keys:l.previousItem,universal:!0},{description:o().a690c4d0,keys:"Space",universal:!0},{description:o().e893811a,keys:l.refresh,universal:!1},{description:o().ha8209bc,keys:l.goHome,universal:!1},{description:o().fcf3e54c,keys:l.goExplore,universal:!0},{description:o().eb75875e,keys:l.goNotifications,universal:!1},{description:o().cdb53d7a,keys:l.goMentions,universal:!1},{description:o().fa98627a,keys:l.goProfile,universal:!1},{description:o().d4ebc798,keys:l.goToDrafts,universal:!1},{description:o().fd6a3f30,keys:l.goToScheduled,universal:!1},{description:o().d7b8ebaa,keys:l.goLikes,universal:!1},{description:o().b0041756,keys:l.goLists,universal:!1},{description:o().d4986f86,keys:l.goMessages,universal:!1},{description:o().bb081ea2,keys:l.goSettings,universal:!0},{description:o().i3145aa0,keys:l.goBookmarks,universal:!1}],t,[{description:o().eee2ed92,keys:l.goToUser,universal:!0},{description:o().ee5ccf3e,keys:l.goDisplay,universal:!1}])})),d=a.ZP.isMac()?"⌘":"CTRL",p=function(){return[{description:o().ab3d53f8,keys:l.newTweet,universal:!1},{description:o().de94bda6,keys:"".concat(d," Enter"),universal:!1},{description:o().e736990a,keys:l.newMessage,universal:!1},{description:o().a9ae1e78,keys:l.search,universal:!0},{description:o().fe731016,keys:i.Z.shortcuts.like,universal:!1},{description:o().d17df548,keys:i.Z.shortcuts.reply,universal:!1},{description:o().g062295e,keys:i.Z.shortcuts.retweet,universal:!1},{description:o().h01621a4,keys:i.Z.shortcuts.share,universal:!0},{description:o().gb303814,keys:l.bookmark,universal:!1},{description:o().c03b1126,keys:l.mute,universal:!1},{description:o().ebd2abb2,keys:l.block,universal:!1},{description:o().hc6c5510,keys:"Enter",universal:!0},{description:o().eebdef38,keys:i.Z.shortcuts.openMediaModal,universal:!0},{description:o().b488758c,keys:l.toggleDMDrawer,universal:!1}]},f=function(){return[{description:o().c82314e0,keys:l.video.play1,universal:!0},{description:o().c82314e0,keys:l.video.play2,universal:!0},{description:o().b881560e,keys:l.video.mute,universal:!0},{description:o().a94f7302,keys:l.audio.dock,universal:!1},{description:o().a7e604c6,keys:l.audio.play,universal:!1},{description:o().f978c4fc,keys:l.audio.mute,universal:!1}]},b=(0,c.Z)((function(e){var t=u(e),n=p(),i=f(),s={};return[].concat((0,r.Z)(n),(0,r.Z)(i),(0,r.Z)(t),(0,r.Z)([])).forEach((function(e){var t=e.description,n=e.keys;return s[n]=t})),JSON.stringify(s)})),m=function(e,t){if(t)return{dataSet:{"at-shortcutkeys":b(e)}}}},234590:(e,t,n)=>{n.d(t,{Z:()=>r});const r=Object.freeze({User:"User",ProfileCard:"ProfileCard",UserCompact:"UserCompact",UserConcise:"UserConcise",UserDetailed:"UserDetailed",PendingFollowUser:"PendingFollowUser",SubscribableUser:"SubscribableUser"})},54699:(e,t,n)=>{n.r(t),n.d(t,{ConversationParticipantsScreen:()=>D,default:()=>N});var r=n(709249),i=n(887371),s=n(545754),o=n(486906),c=(n(739529),n(231235),n(202784)),a=n(645184),l=n.n(a),u=n(872983),d=n(300292),p=n(142569),f=n(296688),b=n(765249),m=n(123301),v=n(234590),k=n(968079),g=(n(477950),n(74069),n(24949)),y=n(53223),h=n(503614),_=n(923335),C=n(392160),Z=n(407419),w=function(e,t){return t.match.params.screenName},T=function(e,t){return t.match.params.statusId},E=function(e,t){return Z.Z.selectHydrated(e,t.match.params.statusId)},I=function(e,t){return Z.Z.selectFetchStatus(e,t.match.params.statusId)};const S=(0,C.Z)().propsFromState((function(){return{fetchStatus:I,screenName:w,statusId:T,participantIds:(0,g.P1)(E,(function(e){if(!e)return[];var t=(e.entities||{}).user_mentions,n=void 0===t?[]:t,r={id_str:e.in_reply_to_user_id_str},i=n.filter((function(t){return t.indices[0]<e.display_text_range[0]})),s=[r].concat((0,k.Z)(i));return(0,y.Z)((0,h.Z)(s.map((function(e){return e.id_str}))))})),unmentionedUserIds:(0,g.P1)(E,(function(e){var t;return null!==(t=null==e?void 0:e.unmentioned_user_ids)&&void 0!==t?t:[]}))}})).propsFromActions((function(){return{createLocalApiErrorHandler:(0,_.createLocalApiErrorHandlerWithContextFactory)("CONVERSATION_PARTICIPANTS_SCREEN"),fetchTweetIfNeeded:Z.Z.fetchOneIfNeeded}})).withAnalytics({page:"conversation_participants"});var L=l().cdd4aafe,x=l().aac3fad2,D=function(e){(0,s.Z)(n,e);var t=(0,o.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s)))._renderUserCell=function(t){var n=e.props.unmentionedUserIds.includes(t);return c.createElement(p.ZP,{cellClickable:!n,decoration:n?null:p.ET,displayMode:v.Z.UserDetailed,key:t,promotedItemType:m.bj.USER,userId:t,withFollowsYou:!0,withLink:!n})},e._renderList=function(){return c.createElement(f.Z,{renderUserCell:e._renderUserCell,userIds:e.props.participantIds})},e._handleFetch=function(){var t=e.props,n=t.createLocalApiErrorHandler;(0,t.fetchTweetIfNeeded)(t.statusId).catch(n(b.c))},e}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){this._handleFetch()}},{key:"render",value:function(){var e=this.props,t=e.fetchStatus,n=e.history,r=e.screenName,i=e.statusId;return c.createElement(d.Z,{backLocation:"/".concat(r.toLowerCase(),"/status/").concat(i),history:n,title:x},c.createElement(u.Z,{accessibilityLabel:L,fetchStatus:t,onRequestRetry:this._handleFetch,render:this._renderList}))}}]),n}(c.Component);const N=S(D)},97463:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(133028),i=n(202784),s=n(890601),o=n(783427),c=n(473569),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.Z)().direction;return(0,s.Z)("svg",(0,r.Z)((0,r.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[c.Z.root,e.style],viewBox:"0 0 24 24",children:i.createElement("g",null,i.createElement("path",{d:"M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08l2.8-2.79 1.41 1.42-2.79 2.79c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08l-2.79 2.79-1.41-1.42 2.79-2.79C15.68 4.4 13.92 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z"}))}),{writingDirection:t})};a.metadata={width:24,height:24};const l=a},642203:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(133028),i=n(202784),s=n(890601),o=n(783427),c=n(473569),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.Z)().direction;return(0,s.Z)("svg",(0,r.Z)((0,r.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[c.Z.root,e.style],viewBox:"0 0 24 24",children:i.createElement("g",null,i.createElement("path",{d:"M18 1.2v21.6L8.71 17H5.5C4.12 17 3 15.88 3 14.5v-5C3 8.12 4.12 7 5.5 7h3.21L18 1.2zM8 9H5.5c-.28 0-.5.22-.5.5v5c0 .28.22.5.5.5H8V9zm2 6.45l6 3.75V4.8l-6 3.75v6.9z"}))}),{writingDirection:t})};a.metadata={width:24,height:24};const l=a}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web-legacy/bundle.ConversationParticipants.c62f2c5a.js.map                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Cancel" type="button">
                    <icon data-delayed-url="https://static.licdn.com/aero-v1/sc/h/gs508lg3t2o81tq7pmcgn6m2"></icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
      
    <div class="alert hidden" role="alert" tabindex="-1">
      <div class="wrapper">
        <p class="alert-content">
          
        </p>
      </div>
    </div>
  

      <section class="join-form__form-body  join-form__form-body--gsi">
        <div class="join-form__form-input-container join-form__form-input-container--is-hidden join-form__form-input-container--is-last-section">
            

    
    
    
    
    
    

      
      <div class="input ">
        
    <!---->
    <input class="input__input" autocomplete="on" required id="first-name" name="first-name" placeholder=" " type="text">
    <!---->
    <label class="input__label" for="first-name">First name</label>
  
        
      </div>
  
      
      <div class="input ">
        
    <!---->
    <input class="input__input" autocomplete="on" required id="last-name" name="last-name" placeholder=" " type="text">
    <!---->
    <label class="input__label" for="last-name">Last name</label>
  
        
      </div>
  
      
        </div>

        <div class="join-form__form-input-container ">
            
      <div class="input ">
        
    <!---->
    <input class="input__input" required id="email-or-phone" name="email-or-phone" placeholder=" ">
    <datalist id="email-domains"></datalist>
    <label class="input__label" for="email-or-phone">Email</label>
  
        
      </div>
  

            

    
    
    
    

      
      <div class="input ">
        
    <!---->
    <input class="input__input" autocomplete="new-password" required id="password" name="password" placeholder=" " type="password">
    <!---->
    <label class="input__label" for="password">Password (8+ characters)</label>
  
        
      </div>
  
  
        </div>

          <p data-is-not-yielded="true" class="join-form__form-body-agreement">
            By clicking Agree & Join, you agree to the LinkedIn <a href="https://www.linkedin.com/legal/user-agreement?trk=seo-authwall-base_join-form-user-agreement" class="join-form__form-body-agreement-item-link" target="_blank" data-tracking-control-name="seo-authwall-base_join-form-user-agreement" data-tracking-will-navigate="true">User Agreement</a>, <a href="https://www.linkedin.com/legal/privacy-policy?trk=seo-authwall-base_join-form-privacy-policy" class="join-form__form-body-agreement-item-link" target="_blank" data-tracking-control-name="seo-authwall-base_join-form-privacy-policy" data-tracking-will-navigate="true">Privacy Policy</a>, and <a href="https://www.linkedin.com/legal/cookie-policy?trk=seo-authwall-base_join-form-cookie-policy" class="join-form__form-body-agreement-item-link" target="_blank" data-tracking-control-name="seo-authwall-base_join-form-cookie-policy" data-tracking-will-navigate="true">Cookie Policy</a>.
          </p>

          <button class="join-form__form-body-submit-button" data-tracking-control-name="seo-authwall-base_join-form-submit" id="join-form-submit" value="Agree &amp; Join" type="submit">
            Agree & Join
          </button>

              

    
    
    
    
    
    
    


    <code id="dust-var-callbackUrl" style="display: none"><!--""--></code>
    <code id="dust-var-authUrl" style="display: none"><!--""--></code>
    <code id="dust-var-isSmartLockEnabled" style="display: none"><!--"false"--></code>
    <code id="dust-var-useStandaloneLibrary" style="display: none"><!--"true"--></code>
    <code id="dust-var-joinBtnProvider" style="display: none"><!--"GOOGLE"--></code>

    <code id="i18n_third_party_join_error-message-facebook" style="display: none"><!--"Sorry, we were unable to pull in your Facebook information. Please try again."--></code>
    <code id="i18n_third_party_join_error-message-google" style="display: none"><!--"Sorry, we were unable to pull in your Google information. Please try again."--></code>
    <code id="i18n_third_party_join_error-message-wechat" style="display: none"><!--"Sorry, we were unable to pull in your Wechat information. Please try again."--></code>

    <div class="third-party-join__container hidden">
        <div class="third-party-join__reg-option">
          <span class="third-party-join__line-wrapper">
            <span class="third-party-join__line"></span>
          </span>
          <span class="third-party-join__content">
            <span class="third-party-join__or-span">or</span>
          </span>
        </div>
<!---->
          <div class="third-party-join__gsi-btn-container" data-lib-src-path="https://static.licdn.com/aero-v1/sc/h/6y2czwba46q3wsh2b0d0g6trj"></div>

<!---->    </div>
  
      </section>

        
      <p class="authwall-join-form__swap-cta">
        Already on Linkedin? <button class="authwall-join-form__form-toggle--bottom form-toggle" data-tracking-control-name="auth_wall_desktop_samename-login-toggle"> Sign in </button>
      </p>

<!---->    
    </form>

    <section aria-labelledby="challenge-title" class="challenge-dialog" role="dialog" style="display: none;" tabindex="-1">
      <div class="challenge-dialog__modal-container">
        <header class="challenge-dialog__header">
          <span class="challenge-dialog__title" id="challenge-title">
            Security verification
          </span>
          <button class="challenge-dialog__close" aria-label="Dismiss" data-tracking-control-name="seo-authwall-base_join-form-challenge-dialog-close">
              Close
          </button>
        </header>

        <iframe title="Security verification" class="challenge-dialog__iframe" src="about:blank" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
      </div>
    </section>

    


    


    
    
    

    <code id="i18n_required_email-or-phone" style="display: none"><!--"Please enter your email address or mobile number."--></code>
    <code id="i18n_tooLong_email-or-phone" style="display: none"><!--"Email or mobile number must be between 3 to 128 characters."--></code>
    <code id="i18n_invalidFormat_email-or-phone" style="display: none"><!--"Please enter a valid email address or mobile number."--></code>


    
    
    

    <code id="i18n_required_password" style="display: none"><!--"Please enter your password."--></code>
    <code id="i18n_tooShort_password" style="display: none"><!--"Password must be 8 characters or more."--></code>
    <code id="i18n_tooLong_password" style="display: none"><!--"Your password cannot exceed a maximum of 200 characters."--></code>

    
    <code id="i18n_server_generic_error" style="display: none"><!--"Sorry, something went wrong. Please try again."--></code>
  

    
    
    
    
    
    

    <code id="i18n_required_first-name" style="display: none"><!--"Please enter your first name."--></code>
    <code id="i18n_tooLong_first-name" style="display: none"><!--"First name can not exceed 50 characters."--></code>
    <code id="i18n_noForbiddenCharacters_first-name" style="display: none"><!--"Please enter a valid first name."--></code>
    <code id="i18n_noConsecutiveDigits_first-name" style="display: none"><!--"Please enter a valid first name."--></code>
    <code id="i18n_noFourConsecutiveDuplicates_first-name" style="display: none"><!--"Please enter a valid first name."--></code>
    <code id="i18n_noLinkedIn_first-name" style="display: none"><!--"Please enter a valid first name."--></code>
    <code id="i18n_noUrl_first-name" style="display: none"><!--"Please enter a valid first name."--></code>
    <code id="i18n_onlyPhonetic_phonetic-first-name" style="display: none"><!--"Please use phonetic characters for your phonetic first name."--></code>
    <code id="i18n_tooLong_phonetic-first-name" style="display: none"><!--"Phonetic first name can not exceed 50 characters."--></code>
    <code id="i18n_noFourConsecutiveDuplicates_phonetic-first-name" style="display: none"><!--"Please enter a valid phonetic first name."--></code>


    
    
    
    
    
    

    <code id="i18n_required_last-name" style="display: none"><!--"Please enter your last name."--></code>
    <code id="i18n_tooLong_last-name" style="display: none"><!--"Last name can not exceed 50 characters."--></code>
    <code id="i18n_noForbiddenCharacters_last-name" style="display: none"><!--"Please enter a valid last name."--></code>
    <code id="i18n_noConsecutiveDigits_last-name" style="display: none"><!--"Please enter a valid last name."--></code>
    <code id="i18n_noFourConsecutiveDuplicates_last-name" style="display: none"><!--"Please enter a valid last name."--></code>
    <code id="i18n_noLinkedIn_last-name" style="display: none"><!--"Please enter a valid last name."--></code>
    <code id="i18n_noUrl_last-name" style="display: none"><!--"Please enter a valid last name."--></code>
    <code id="i18n_onlyPhonetic_phonetic-last-name" style="display: none"><!--"Please use phonetic characters for your phonetic last name."--></code>
    <code id="i18n_tooLong_phonetic-last-name" style="display: none"><!--"Phonetic last name can not exceed 50 characters."--></code>
    <code id="i18n_noFourConsecutiveDuplicates_phonetic-last-name" style="display: none"><!--"Please enter a valid phonetic last name."--></code>

    
    
    
    

    <code id="i18n_onlyChinese_real-name" style="display: none"><!--"Please use only Chinese characters for real name."--></code>
    <code id="i18n_tooLong_real-name" style="display: none"><!--"Real name should be 2-4 characters long."--></code>
    <code id="i18n_tooShort_real-name" style="display: none"><!--"Real name should be 2-4 characters long."--></code>
    <code id="i18n_required_real-name" style="display: none"><!--"Please enter your real name."--></code>
  

      <script data-delayed-url="https://static.licdn.com/aero-v1/sc/h/5qa1f22mxd8ig3o5g568vo59" class="lazy-load" data-module-id="abuse-features-lib"></script>
<!---->  


                

  
  
  
  
  

  <div class="authwall-sign-in-form">
    <h2 class="authwall-sign-in-form__header-title">Sign in</h2>

    
    
    
    
    
    
    
    
    
    
    

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

    <form data-id="sign-in-form" action="https://www.linkedin.com/uas/login-submit" method="post" novalidate class="authwall-sign-in-form__body">
      <input name="loginCsrfParam" value="0c639451-e518-423d-8a48-777ffc975244" type="hidden">

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
          
            <button aria-live="assertive" data-id="sign-in-form__password-visibility-toggle" class="font-sans text-md font-bold text-color-action z-10 ml-[12px] hover:cursor-pointer" aria-label="Show your LinkedIn password" data-tracking-control-name="seo-authwall-base_sign-in-password-visibility-toggle-btn" type="button">Show</button>
          
        </div>
      </div>

      <p class="input-helper mt-1.5" for="session_password" role="alert" data-js-module-id="guest-input__message"></p>
    </div>
  

        <input name="session_redirect" type="hidden">

<!---->      </div>

      <div data-id="sign-in-form__footer" class="flex justify-between
          sign-in-form__footer--full-width">
        <a data-id="sign-in-form__forgot-password" class="font-sans text-md font-bold link leading-regular
            sign-in-form__forgot-password--full-width" href="https://www.linkedin.com/uas/request-password-reset?trk=seo-authwall-base_forgot_password" data-tracking-control-name="seo-authwall-base_forgot_password" data-tracking-will-navigate>Forgot password?</a>

<!---->
        <input name="trk" value="seo-authwall-base_sign-in-submit" type="hidden">
        <button class="btn-md btn-primary flex-shrink-0 cursor-pointer
            sign-in-form__submit-btn--full-width w-full max-w-[400px] mx-auto" data-id="sign-in-form__submit-btn" data-tracking-control-name="seo-authwall-base_sign-in-submit-btn" data-tracking-litms type="submit">
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
      <p class="google-auth-button__tc text-color-text-low-emphasis text-xs pb-2" data-impression-id="seo-authwall-base_button-skip-tc-text">
        By clicking Continue, you agree to LinkedIn’s <a href="/legal/user-agreement?trk=seo-authwall-base_google-auth-button_user-agreement" target="_blank" data-tracking-control-name="seo-authwall-base_google-auth-button_user-agreement" data-tracking-will-navigate="true">User Agreement</a>, <a href="/legal/privacy-policy?trk=seo-authwall-base_google-auth-button_privacy-policy" target="_blank" data-tracking-control-name="seo-authwall-base_google-auth-button_privacy-policy" data-tracking-will-navigate="true">Privacy Policy</a>, and <a href="/legal/cookie-policy?trk=seo-authwall-base_google-auth-button_cookie-policy" target="_blank" data-tracking-control-name="seo-authwall-base_google-auth-button_cookie-policy" data-tracking-will-navigate="true">Cookie Policy</a>.
      </p>
  
      <div class="google-auth-button__placeholder"></div>
    </div>
  
      </div>
      
        <p class="authwall-sign-in-form__swap-cta">
          New to Linkedin? <button class="authwall-sign-in-form__form-toggle--bottom form-toggle" data-tracking-control-name="auth_wall_desktop_samename-login-toggle"> Join now </button>
        </p>
      
  
  </div>

              </div>

<!---->
                
    
    
    
    
    

        

    

      <div class="cta-modal overflow-hidden container-raised z-10 fixed bottom-3 right-3 min-h-[56px] p-2 babybear:hidden windows-app-upsell windows-app-upsell--msft flex flex-col p-2 w-[359px] !bg-[#F1F8FA] opacity-90 backdrop-blur-[2px]" data-impression-id="seo-authwall-base_windows-app-upsell_cta-modal" role="dialog" aria-labelledby="cta-modal-header" aria-describedby="cta-modal-subheader">
          

          

        
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
          <a class="windows-app-upsell__cta btn-sm btn-secondary-emphasis mt-2 mb-[6px] w-fit" href="ms-windows-store://pdp/?ProductId=9WZDNCRFJ4Q7&amp;mode=mini&amp;cid=guest_desktop_upsell_authwall2" data-tracking-control-name="seo-authwall-base_windows-app-upsell_cta" data-tracking-will-navigate>
            Open the app
          </a>
        

        <button class="cta-modal__dismiss-btn absolute h-4 w-4 p-1 top-2 right-2 hover:cursor-pointer focus:outline focus:outline-2 focus:outline-color-action" data-tracking-control-name="seo-authwall-base_windows-app-upsell_dismiss" aria-label="Dismiss">
          <icon class="cta-modal__dismiss-icon block h-2 w-2 onload" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/582r9vsvwmiwa75ujfqps3ivc"></icon>
        </button>
      </div>
  
  

              <code id="isPreloadDuoEnabled" style="display: none"><!--true--></code>

              <code id="i18n_sign_up_title" style="display: none"><!--"Sign Up | LinkedIn"--></code>
              <code id="i18n_sign_in_title" style="display: none"><!--"Sign In | LinkedIn"--></code>
            
      </main>

<!---->
      

    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    

    
    
    
    

    <footer class="li-footer bg-transparent w-full ">
      <ul class="li-footer__list flex flex-wrap flex-row items-start justify-start w-full h-auto min-h-[50px] my-[0px] mx-auto py-3 px-2 papabear:w-[1128px] papabear:p-0">
        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        
          <span class="sr-only">LinkedIn</span>
          <icon class="li-footer__copy-logo text-color-logo-brand-alt inline-block self-center h-[14px] w-[56px] mr-1" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/e12h2cd8ac580qen9qdd0qks8"></icon>
          <span class="li-footer__copy-text flex items-center">&copy; 2024</span>
        
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://about.linkedin.com?trk=seo-authwall-base_footer-about" data-tracking-control-name="seo-authwall-base_footer-about" data-tracking-will-navigate>
          
          About
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/accessibility?trk=seo-authwall-base_footer-accessibility" data-tracking-control-name="seo-authwall-base_footer-accessibility" data-tracking-will-navigate>
          
          Accessibility
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/user-agreement?trk=seo-authwall-base_footer-user-agreement" data-tracking-control-name="seo-authwall-base_footer-user-agreement" data-tracking-will-navigate>
          
          User Agreement
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/privacy-policy?trk=seo-authwall-base_footer-privacy-policy" data-tracking-control-name="seo-authwall-base_footer-privacy-policy" data-tracking-will-navigate>
          
          Privacy Policy
        
        </a>
  </li>

<!---->        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/cookie-policy?trk=seo-authwall-base_footer-cookie-policy" data-tracking-control-name="seo-authwall-base_footer-cookie-policy" data-tracking-will-navigate>
          
          Cookie Policy
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/copyright-policy?trk=seo-authwall-base_footer-copyright-policy" data-tracking-control-name="seo-authwall-base_footer-copyright-policy" data-tracking-will-navigate>
          
          Copyright Policy
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://brand.linkedin.com/policies?trk=seo-authwall-base_footer-brand-policy" data-tracking-control-name="seo-authwall-base_footer-brand-policy" data-tracking-will-navigate>
          
          Brand Policy
        
        </a>
  </li>

          
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/psettings/guest-controls?trk=seo-authwall-base_footer-guest-controls" data-tracking-control-name="seo-authwall-base_footer-guest-controls" data-tracking-will-navigate>
          
            Guest Controls
          
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/professional-community-policies?trk=seo-authwall-base_footer-community-guide" data-tracking-control-name="seo-authwall-base_footer-community-guide" data-tracking-will-navigate>
          
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
  
    

            <script src="https://static.licdn.com/aero-v1/sc/h/an3u8gpta43rgjny4tzujbn6p" async></script>
<!---->          
            <script data-delayed-url="https://static.licdn.com/aero-v1/sc/h/5qa1f22mxd8ig3o5g568vo59" data-module-id="apfc-lib"></script>
          <code id="apfcLix" style="display: none"><!--true--></code>
          <code id="dust-var-apfcDf" style="display: none"><!--"enabled"--></code>

      <script src="https://static.licdn.com/aero-v1/sc/h/132tb6exu03e95gkp74f8ip9y" async defer></script>
    
      </body>
    </html>
  
