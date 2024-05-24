"use strict";(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["bundle.ExtendedUserProfile"],{49898:(e,t,r)=>{r.d(t,{Z:()=>_});var n=r(709249),a=r(887371),i=r(545754),o=r(486906),s=r(202784),c=r(706555),l=r(882392),u=r(700400),d=r(973186),f=r(488809),p=r(24949),m=r(392160),h=r(157659),v=function(e,t){return t.entityId&&h.ZP.select(e,t.entityId)||void 0},y=function(e){return"/".concat(e.screen_name)},Z=function(e){return e.name};const E=(0,m.Z)().propsFromState((function(){return{user:v,badging:(0,p.P1)(v,(function(e){return e?{displayContext:"content",isBlueVerified:e.is_blue_verified,isProtected:e.protected,isVerified:e.verified,verifiedType:e.verified_type,translatorType:e.translator_type,affiliateBadgeInfo:e.highlightedLabel}:void 0}))}})).adjustStateProps((function(e){var t=e.badging,r=e.user;return{badging:t,link:r&&y(r),screenName:r&&r.screen_name,text:r&&Z(r)||""}}));var g=function(e){(0,i.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.color,r=e.link,n=e.onClick,a=e.screenName,i=e.text,o=e.weight,l=e.withHashflags,u=s.createElement(c.Z.TextFragment,{color:t,link:r,onClick:n,style:b.wordBreak,weight:o,withHashflags:l},i,this._renderBadges());return a?s.createElement(f.Z,{screenName:a},u):u}},{key:"_renderBadges",value:function(){var e=this.props.badging;return e?s.createElement(l.ZP,{style:b.badges},s.createElement(u.Z,e)):null}}]),r}(s.PureComponent),b=d.Z.create((function(e){return{wordBreak:{wordBreak:"break-word",display:"inline-flex",flexWrap:"wrap"},badges:{position:"relative",top:1}}}));const _=E(g)},119884:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(807896),a=r(709249),i=r(887371),o=r(545754),s=r(486906),c=r(202784),l=r(706555),u=r(973186),d=r(991584),f=r(49898),p="Center",m="Natural",h=function(e){(0,o.Z)(r,e);var t=(0,s.Z)(r);function r(){return(0,a.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.accessibilityRole,r=e.alignment,a=e.color,i=e.entities,o=e.forceAutoTextDirection,s=e.nativeID,u=e.onEntityClick,m=e.rtl,h=e.size,y=e.style,Z=e.text,E=e.weight,g=e.withHashflags,b=r===p?"center":void 0,_=o?"auto":m?"rtl":"ltr";return c.createElement(l.Z,{accessibilityRole:t,align:b,color:a,dir:_,entities:i,nativeID:s,onEntityClick:u,renderFragment:{user:function(e,t){return c.createElement(f.Z,(0,n.Z)({},e,{color:"text",entityId:t.id}))},url:function(e,t){return c.createElement(l.Z.TextFragment,(0,n.Z)({},e,{link:(0,d.s9)(t)}))}},size:h,style:[v.hideOverflow,y],text:Z,weight:E,withHashflags:g})}}]),r}(c.PureComponent);h.defaultProps={alignment:m};var v=u.Z.create((function(e){return{hideOverflow:{overflow:"hidden"}}}));const y=h},268383:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ce});var n=r(807896),a=r(133028),i=r(202784),o=r(107267),s=r(229496),c=r(133252),l=r(57619),u=r(814305),d=r(25539),f=r(348501),p=r(51600),m=r(267619),h=r(153961),v=r(789201),y=r(669210),Z=r(565075),E=r(984257),g=r(216837),b=r(541532),_=r(679621),k=(r(477950),r(74069),r(923335)),w=r(392160),x=r(467935),N=r(157659),C=function(e,t){return t.match.params.screenName||""},S=function(e,t){return N.ZP.selectIsUserNotFound(e,C(0,t))},F=function(e,t){return N.ZP.selectIsUserSuspended(e,C(0,t))},P=function(e,t){return N.ZP.selectUserSuspendMessage(e,C(0,t))},I=function(e,t){return N.ZP.selectByScreenName(e,C(0,t))};const R=(0,w.Z)().propsFromState((function(){return{isNotFound:S,isSuspended:F,suspendMessage:P,screenName:C,user:I,viewerUserId:x._h}})).propsFromActions((function(){return{createLocalApiErrorHandler:(0,k.createLocalApiErrorHandlerWithContextFactory)("EXTENDED_USER_PROFILE"),fetchOneUserByScreenNameIfNeeded:N.ZP.fetchOneByScreenNameIfNeeded}})).withAnalytics({page:"user_profile_extended_profile"});r(136728),r(606710);var T=r(444487),B=r(645184),D=r.n(B),O=r(484793),H=r(983882),U=r(36840),M=r(460673),L=D().j7bb1a43,z=D().h63a5c3c,A=i.createElement(O.default,null),W=function(e){var t=e.onClose,r=e.user,n=(0,M.z)(),a=(0,o.k6)(),s=(0,f.QZ)().featureSwitches,c=function(){return{Icon:H.default,text:L({screenName:r.screen_name}),onClick:function(){t(),function(){var e=U.C2.User;if((0,U.Yw)(s,e)){var t=(0,U.j_)({clientReferer:window.location.pathname,isMedia:!1,isPromoted:!1,reportType:e,reportedUser:r.id_str,scribeNamespace:n.contextualScribeNamespace});a.push({pathname:"/i/safety/report_story_start",state:{input:{requested_variant:JSON.stringify(t)}}})}else a.push({pathname:"/i/report/user/".concat(r.id_str),state:{clientReferer:window.location.pathname,scribeNamespace:n.contextualScribeNamespace}})}()}}};return i.createElement(T.Z,{items:[c()],onCloseRequested:t})},V=function(e){var t=e.user,r=i.useCallback((function(e){return i.createElement(W,{onClose:e,user:t})}),[t]),n=i.useMemo((function(){return{label:z}}),[]);return i.createElement(s.ZP,{accessibilityLabel:z,hoverLabel:n,icon:A,renderMenu:r,type:"primaryOutlined"})};const j=i.memo(V);r(571372);var q=r(301503),X=r(325686),J=r(277660),K=r.n(J),Y=r(702753),Q=r(170132),G=r(973186),$=r(765526),ee=r(734478),te=r(729496),re=function(e){var t,r=e.profileBlocksRef,n=K()(v.m1,r),a=(null==n||null===(t=n.items)||void 0===t||null===(t=t[0])||void 0===t||null===(t=t.data)||void 0===t?void 0:t.value)||"",o=i.useMemo((function(){try{var e=JSON.parse(a);if(!e.entityMap||!e.blocks)throw new Error("Malformed RawDraftContentState");return e}catch(t){}}),[a]);return(0,$.q)((function(){(0,Y.fH)((0,te.yW)(te.Hx,te.K),te.Hx)})),i.createElement(X.Z,{style:ne.root},o&&(0,q.convertFromRaw)(o).hasText()?i.createElement(ee.Z,{className:te.Hx},i.createElement(X.Z,{style:ne.richText},i.createElement(Q.Z,{contentState:o,paragraphFontSizeOverride:te.K.paragraphFontSize}))):null)},ne=G.Z.create((function(e){return{root:{paddingVertical:e.spaces.space20},flexRow:{display:"flex",flexDirection:"row",alignItems:"center",gap:e.spaces.space8,paddingVertical:e.spaces.space8,paddingHorizontal:e.spaces.space16},flexCol:{display:"flex",flexDirection:"column"},flexOne:{flex:1},avatar:{width:90,height:90},richText:{color:e.colors.text,padding:e.spaces.space16}}}));const ae=i.memo(re);var ie=function(e){var t=e.analytics,r=e.hasProfileBlocks,n=e.profileBlocksRef,p=e.screenName,m=e.user,v=e.viewerUserId,y=(0,o.k6)(),E=i.useContext(f.rC),g=E.featureSwitches,b=E.userClaims;i.useEffect((function(){null!=m&&m.id_str&&t.scribe((0,a.Z)({},(0,h.Zi)(null==m?void 0:m.id_str)))}),[t,null==m?void 0:m.id_str]);var _=i.useCallback((function(){t.scribe((0,a.Z)({},(0,h.he)()))}),[t]);return i.createElement(d.Z,{backLocation:"/".concat(p),history:y,primaryContent:m?r?i.createElement(ae,{profileBlocksRef:n}):i.createElement(Z.Z,{header:"This user does not have an expanded bio",message:"Try searching for another.",screenName:p}):null,rightControl:(null==m?void 0:m.id_str)===v&&g.isTrue("xprofile_editing_enabled")&&b.isTrueAndEnabled("subscriptions_feature_extend_profile")?i.createElement(s.ZP,{link:"/settings/bio",onClick:_,size:"xSmall",type:"primaryOutlined"},"Edit"):m?i.createElement(j,{user:m}):null,sidebarContent:i.createElement(c.Z,null),subtitle:"@".concat(p),title:(0,l.Z)(m),titleIconCell:(0,u.Z)(m)})},oe=function(e){var t,r,a=e.screenName,o=(0,y.p)(v.kI,{screenName:a}).user_result_by_screen_name,s=null==o||null===(t=o.result)||void 0===t?void 0:t.profile_blocks,c=!(null==o||null===(r=o.result)||void 0===r||!r.has_profile_blocks);return a&&s?i.createElement(ie,(0,n.Z)({hasProfileBlocks:c,profileBlocksRef:s},e)):null},se={context:"EXTENDED_USER_PROFILE"};const ce=R((function(e){var t=e.createLocalApiErrorHandler,r=e.fetchOneUserByScreenNameIfNeeded,n=e.isNotFound,a=e.isSuspended,o=e.screenName,s=e.suspendMessage,c=e.user,l=e.viewerUserId;return i.useEffect((function(){o&&r(o).catch(t(m.F))}),[t,r,o]),o&&c?a?i.createElement(_.i,{screenName:o,suspendMessage:s}):c.blocked_by?i.createElement(g.T,{screenName:o}):!c.protected||c&&l===c.id_str||c.following?n?i.createElement(E.Y,{screenName:o}):i.createElement(p.H,{errorConfig:se},i.createElement(oe,e)):i.createElement(b.X,{screenName:o}):null}))},170132:(e,t,r)=>{r.d(t,{Z:()=>Z});var n=r(196234),a=(r(136728),r(743108),r(202784)),i=r(301503),o=r(325686),s=r(801206),c=r(51276),l=r(818760),u=r(854044),d=r(702753),f=r(558811),p=r(857077),m=r(871791),h=r(973186),v=r(961134),y=!1;function Z(e){var t=e.componentByType,r=e.contentState,h=e.onScribeEvent,Z=e.paragraphFontSizeOverride;a.useEffect((function(){y||(d.fH(v.c,v.n),y=!0)}),[]);var g=[(0,p.ez)(h,Z),p.aF,p.RU];e.disable_entityLinkDecorator||g.push((0,p.NA)(h,Z));var b=f.Z.initEditorState(r,{decorators:g}),_=s.Z;t&&(_=function(e){var r=e.getType();return t[r]||null});var k=(0,c.Z)({atomic:{element:"section"}}).reduce((function(e,t){var r=(0,n.Z)(t,2),a=r[0],i=r[1];return e.set(a,i)}),i.DefaultDraftBlockRenderMap);return a.createElement(u.ZP,null,(function(e){var t=e.containerWidth;return a.createElement(o.Z,{style:E.fontFamily},a.createElement(i.Editor,{blockRenderMap:k,blockRendererFn:_,blockStyleFn:(0,l.su)(m.Z.isNarrowScreenWidth(t)),editorState:b,onChange:s.Z,readOnly:!0,webDriverTestID:"longformRichTextComponent"}))}))}var E=h.Z.create((function(e){return{fontFamily:{fontFamily:e.fontFamilies.normal}}}))}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web-legacy/bundle.ExtendedUserProfile.a867f50a.js.mapar-apfcDf" style="display: none"><!--"enabled"--></code>
    <code id="apfcDfPK" style="display: none"><!--"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqyVTa3Pi5twlDxHc34nl3MlTHOweIenIid6hDqVlh5/wcHzIxvB9nZjObW3HWfwqejGM+n2ZGbo9x8R7ByS3/V4qRgAs1z4aB6F5+HcXsx8uVrQfwigK0+u7d3g1s7H8qUaguMPHxNnyj5EisTJBh2jf9ODp8TpWnhAQHCCSZcDM4JIoIlsVdGmv+dGlzZzmf1if26U4KJqFdrqS83r3nGWcEpXWiQB+mx/EX4brbrhOFCvfPovvsLEjMTm0UC68Bvki3UsB/vkkMPW9cxNiiJJdnDkOEEdQPuFmPug+sqhACl3IIHLVBFM7vO0ca14rcCNSbSDaaKOY6BQoW1A30wIDAQAB"--></code>
    <code id="apfcDfPKV" style="display: none"><!--2--></code>

    <code id="shouldSignInOnDuplicateAccount" style="display: none"><!--false--></code>
    <code id="signInOnDuplicateAccountUrl" style="display: none"><!--"/checkpoint/lg/login-submit"--></code>

    <code id="trackingPrefix" style="display: none"><!--"registration-frontend"--></code>

<!---->
<!---->
    <form class="join-form" action="/signup/api/cors/createAccount" method="post">
        
                  <span class="hidden"></span>
                

          <div class="profile-card hidden">
            <div class="profile-card__content">
              <img class="profile-card__photo" alt="Foto del perfil">
              <button class="profile-card__edit-icon" aria-label="Edita tu foto de perfil" data-tracking-control-name="registration-frontend_join-form-profile-card-edit-photo" title="Edita tu foto de perfil" type="button">
                <icon data-delayed-url="https://static.licdn.com/sc/h/5oas73nreunfgygkpe5iwmgrs"></icon>
              </button>
              <div class="profile-card__info">
                <h3 class="profile-card__info-name"></h3>
                <p class="profile-card__info-email"></p>
              </div>
              <button class="profile-card__not-you" data-tracking-control-name="registration-frontend_join-form-profile-card-not-you" type="button">
                      ¿No eres tú?
              </button>
            </div>
            <div class="profile-card__edit-photo-modal hidden">
              <div class="profile-card__edit-photo-content">
                <div class="profile-card__edit-photo-remove">
                  <button class="profile-card__edit-photo-text" data-tracking-control-name="registration-frontend_join-form-profile-card-remove-photo" type="button">
                    Eliminar foto
                  </button>
                </div>
                <div class="profile-card__edit-photo-cancel">
                  <button aria-label="Cancelar" class="profile-card__edit-photo-cancel-icon" data-tracking-control-name="registration-frontend_join-form-profile-card-edit-photo-cancel" title="Cancelar" type="button">
                    <icon data-delayed-url="https://static.licdn.com/sc/h/gs508lg3t2o81tq7pmcgn6m2"></icon>
                  </button>
                </div>
              </div>
            </div>
          </div>

<!---->
      
    <div class="alert hidden" role="alert" tabindex="-1">
      <div class="wrapper">
        <p class="alert-content">
          
        </p>
      </div>
    </div>
  

      <section class="join-form__form-body  join-form__form-body--gsi">
        <div class="join-form__form-input-container join-form__form-input-container--is-hidden join-form__form-input-container--is-last-section">
            

    
    
    
    
    
    

      
        
    <label class="input__label " for="first-name">Nombre</label>
    <input class="input__input" autocomplete="on" required id="first-name" name="first-name" placeholder="Nombre" type="text">
    <!---->
    <!---->
  
        
  
      
        
    <label class="input__label " for="last-name">Apellidos</label>
    <input class="input__input" autocomplete="on" required id="last-name" name="last-name" placeholder="Apellidos" type="text">
    <!---->
    <!---->
  
        
  
      
        </div>

        <div class="join-form__form-input-container ">
            
                    
        
    <label class="input__label " for="email-address">Email</label>
    <input class="input__input" required id="email-address" name="email-address" placeholder="Email" type="email">
    <datalist id="email-domains"></datalist>
    <!---->
  
        
  
                
                

    
    
    
    
    

    <code id="i18n_hide_password_aria_label" style="display: none"><!--"Hide your LinkedIn password"--></code>
    <code id="i18n_show_password_aria_label" style="display: none"><!--"Show your LinkedIn password"--></code>

      <label class="input__label " for="password">Contraseña (más de 6 caracteres)</label>
        <div class="join-form__show-password-container">
          <input class="input__input" autocomplete="new-password" required="true" id="password" name="password" placeholder value type="password">
          <button data-hide-copy="Ocultar" data-tracking-control-name="registration-frontend_join-form-show-password" data-show-copy="Mostrar" class="join-form__show-password-btn" aria-label="Show your LinkedIn password" type="button">Mostrar</button>
        </div>
  
        </div>

              <p data-is-not-yielded="true" class="join-form__form-body-agreement">
                Al hacer clic en «Aceptar y unirse», aceptas las <a href="https://www.linkedin.com/legal/user-agreement?trk=registration-frontend_join-form-user-agreement" class="join-form__form-body-agreement-item-link" target="_blank" data-tracking-control-name="registration-frontend_join-form-user-agreement" data-tracking-will-navigate="true">Condiciones de uso</a>, la <a href="https://www.linkedin.com/legal/privacy-policy?trk=registration-frontend_join-form-privacy-policy" class="join-form__form-body-agreement-item-link" target="_blank" data-tracking-control-name="registration-frontend_join-form-privacy-policy" data-tracking-will-navigate="true">Política de privacidad</a> y la <a href="https://www.linkedin.com/legal/cookie-policy?trk=registration-frontend_join-form-cookie-policy" class="join-form__form-body-agreement-item-link" target="_blank" data-tracking-control-name="registration-frontend_join-form-cookie-policy" data-tracking-will-navigate="true">Política de cookies de LinkedIn</a>.
              </p>

            <button class="join-form__form-body-submit-button" data-tracking-control-name="registration-frontend_join-form-submit" id="join-form-submit" value="Aceptar y unirse" type="submit">
              Aceptar y unirse
            </button>

              

    
    
    
    
    
    
    


    <code id="dust-var-callbackUrl" style="display: none"><!--"/signup/third-party-call-back/"--></code>
    <code id="dust-var-authUrl" style="display: none"><!--"/xauth/startauth?_authEd=AgGLt7ANNJRLhQAAAY0TRYWylqDmYAz_iKGXmmPAv9n-XOV1KzXI8Q0wq8dimFPuiYCGNCDt8CiPbrKLh8zoAXQ-RZlbq22Hsr0IAyT-HzzKXD0wN9rqac-c1BHVpyvoksC2avpHUlPp2SAr4VQq8IQxctjQkg_NgrK26Oq9yzIaKSy7JHTOCSy__rZFeXSpFN5UtdvIZGEbsfw6QzpclFBas_yqPCysdv2dRqB5pw"--></code>
    <code id="dust-var-isSmartLockEnabled" style="display: none"><!--"true"--></code>
    <code id="dust-var-useStandaloneLibrary" style="display: none"><!--"false"--></code>
    <code id="dust-var-joinBtnProvider" style="display: none"><!--"GOOGLE"--></code>

    <code id="i18n_third_party_join_error-message-facebook" style="display: none"><!--"Lo sentimos. No hemos podido obtener tu información de Facebook. Vuelve a intentarlo."--></code>
    <code id="i18n_third_party_join_error-message-google" style="display: none"><!--"Lo sentimos. No hemos podido obtener tu información de Google. Vuelve a intentarlo."--></code>
    <code id="i18n_third_party_join_error-message-wechat" style="display: none"><!--"Lo sentimos. No hemos podido obtener tu información de WeChat. Vuelve a intentarlo."--></code>

    <div class="third-party-join__container ">
        <div class="third-party-join__reg-option">
          <span class="third-party-join__line-wrapper">
            <span class="third-party-join__line"></span>
          </span>
          <span class="third-party-join__content">
            <span class="third-party-join__or-span">o</span>
          </span>
        </div>
<!---->
          <div class="third-party-join__gsi-btn-container" data-lib-src-path="https://static.licdn.com/sc/h/6y2czwba46q3wsh2b0d0g6trj"></div>

<!---->    </div>
  
      </section>

<!---->    </form>

    
    

    
    <div class>
        <button class="modal__outlet " data-tracking-control-name="registration-frontend_modal_outlet" data-modal="default-outlet">
          
        </button>

      <div id="challenge-dialog" class="modal challenge-dialog " data-outlet="default-outlet">
<!---->        <div class="modal__overlay flex items-center bg-color-background-scrim justify-center fixed bottom-0 left-0 right-0 top-0 opacity-0 invisible pointer-events-none z-[1000] transition-[opacity] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] duration-[0.17s]
            py-4
            ">
          <section aria-modal="true" role="dialog" aria-labelledby="challenge-dialog-modal-header" tabindex="-1" class="max-h-full modal__wrapper overflow-auto p-0 bg-color-surface max-w-[1128px] min-h-[160px] relative scale-[0.25] shadow-sm shadow-color-border-faint transition-[transform] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] duration-[0.33s] focus:outline-0
              
              w-[774px] babybear:w-[360px]
              
              rounded-md">
              <header class="modal__header flex items-center justify-between border-b-1 border-solid border-color-border-faint py-1.5 px-3
                  ">
                  <h2 id="challenge-dialog-modal-header" class="modal__title font-normal leading-open text-color-text text-lg">Verificación de seguridad</h2>
                  <button class="modal__dismiss modal__dismiss--with-icon btn-tertiary h-[40px] w-[40px] p-0 rounded-full indent-0
                      " aria-label="Descartar" data-tracking-control-name="registration-frontend_modal_dismiss" type="button">
                      <icon class="modal__dismiss-icon relative top-[2px]" data-delayed-url="https://static.licdn.com/sc/h/gs508lg3t2o81tq7pmcgn6m2"></icon>
                  </button>
<!---->              </header>
            <div class="modal__main w-full ">
              
        <div class="flex">
          <iframe tabindex="0" title="Verificación de seguridad" class="challenge-dialog__iframe" src="about:blank" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
        </div>
      
            </div>

<!---->          </section>
        </div>
      </div>
    </div>
  
  

    


    


    
    
    

    <code id="i18n_required_email-or-phone" style="display: none"><!--"Introduce tu dirección de email o tu número de teléfono."--></code>
    <code id="i18n_tooLong_email-or-phone" style="display: none"><!--"El email o teléfono debe tener entre 3 y 128 caracteres."--></code>
    <code id="i18n_invalidFormat_email-or-phone" style="display: none"><!--"Introduce una dirección de email o un número de teléfono válidos."--></code>


    
    
    

    <code id="i18n_required_password" style="display: none"><!--"Introduce tu contraseña."--></code>
    <code id="i18n_tooShort_password" style="display: none"><!--"Password must be 6 characters or more."--></code>
    <code id="i18n_tooLong_password" style="display: none"><!--"La contraseña no puede superar los 200 caracteres."--></code>

    
    <code id="i18n_server_generic_error" style="display: none"><!--"Lo sentimos, ha habido un problema. Vuelve a intentarlo."--></code>
  

    
    
    
    
    
    

    <code id="i18n_required_first-name" style="display: none"><!--"Introduce tu nombre."--></code>
    <code id="i18n_tooLong_first-name" style="display: none"><!--"El nombre no puede tener más de 50 caracteres."--></code>
    <code id="i18n_noForbiddenCharacters_first-name" style="display: none"><!--"Introduce un nombre válido."--></code>
    <code id="i18n_noConsecutiveDigits_first-name" style="display: none"><!--"Introduce un nombre válido."--></code>
    <code id="i18n_noFourConsecutiveDuplicates_first-name" style="display: none"><!--"Introduce un nombre válido."--></code>
    <code id="i18n_noLinkedIn_first-name" style="display: none"><!--"Introduce un nombre válido."--></code>
    <code id="i18n_noUrl_first-name" style="display: none"><!--"Introduce un nombre válido."--></code>
    <code id="i18n_onlyPhonetic_phonetic-first-name" style="display: none"><!--"Utiliza caracteres fonéticos para tu nombre fonético."--></code>
    <code id="i18n_tooLong_phonetic-first-name" style="display: none"><!--"El nombre fonético no puede tener más de 50 caracteres."--></code>
    <code id="i18n_noFourConsecutiveDuplicates_phonetic-first-name" style="display: none"><!--"Introduce un nombre fonético válido."--></code>


    
    
    
    
    
    

    <code id="i18n_required_last-name" style="display: none"><!--"Introduce tus apellidos."--></code>
    <code id="i18n_tooLong_last-name" style="display: none"><!--"Los apellidos no pueden tener más de 50 caracteres."--></code>
    <code id="i18n_noForbiddenCharacters_last-name" style="display: none"><!--"Introduce unos apellidos válidos."--></code>
    <code id="i18n_noConsecutiveDigits_last-name" style="display: none"><!--"Introduce unos apellidos válidos."--></code>
    <code id="i18n_noFourConsecutiveDuplicates_last-name" style="display: none"><!--"Introduce unos apellidos válidos."--></code>
    <code id="i18n_noLinkedIn_last-name" style="display: none"><!--"Introduce unos apellidos válidos."--></code>
    <code id="i18n_noUrl_last-name" style="display: none"><!--"Introduce unos apellidos válidos."--></code>
    <code id="i18n_onlyPhonetic_phonetic-last-name" style="display: none"><!--"Utiliza caracteres fonéticos para tus apellidos fonéticos."--></code>
    <code id="i18n_tooLong_phonetic-last-name" style="display: none"><!--"Los apellidos fonéticos no pueden tener más de 50 caracteres."--></code>
    <code id="i18n_noFourConsecutiveDuplicates_phonetic-last-name" style="display: none"><!--"Introduce apellidos fonéticos válidos."--></code>

    
    
    
    

    <code id="i18n_onlyChinese_real-name" style="display: none"><!--"Utiliza solo caracteres chinos para el nombre real."--></code>
    <code id="i18n_tooLong_real-name" style="display: none"><!--"El nombre real debería tener entre 2 y 4 caracteres."--></code>
    <code id="i18n_tooShort_real-name" style="display: none"><!--"El nombre real debería tener entre 2 y 4 caracteres."--></code>
    <code id="i18n_required_real-name" style="display: none"><!--"Introduce tu nombre real."--></code>

    
    
    <code id="i18n_required_koreaConsentData" style="display: none"><!--"Para continuar, debes confirmar que entiendes y aceptas los elementos anteriores marcando cada casilla."--></code>
    <code id="i18n_required_koreaConsentShare" style="display: none"><!--"Para continuar, debes confirmar que entiendes y aceptas los elementos anteriores marcando cada casilla."--></code>
    

      <script data-delayed-url="https://static.licdn.com/sc/h/9m08psxnki0ctc2vf72rjejj3" class="lazy-load" data-module-id="abuse-features-lib"></script>
      <script data-delayed-url="https://static.licdn.com/sc/h/7v44l5aw6ujgcy3nh3lqxmucj" class="lazy-load" data-module-id="shape-js"></script>
      <script data-delayed-url="https://static.licdn.com/sc/h/74byosh2l0us0ryykjgu4jufu" class="lazy-load" data-module-id="timestone-js"></script>
  

              <p class="main__sign-in-container">
                ¿Ya estás LinkedIn? <a href="https://www.linkedin.com/uas/login?fromSignIn=true&trk=cold_join_sign_in" class="main__sign-in-link" data-tracking-will-navigate="true" data-tracking-litms="true" data-tracking-control-name="cold_join_sign_in">Iniciar sesión</a>
              </p>
            </div>

              <p class="page-help-link__text">¿Quieres crear una página de empresa? <a href="https://www.linkedin.com/help/linkedin/answer/710?trk=registration-frontend_join-form-page-help-link" class="page-help-link__link" target="_blank" data-tracking-will-navigate="true" data-tracking-litms="true" data-tracking-control-name="page_help_link">Obtener ayuda</a></p>
          </main>
            

    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    

    
    
    
    

    <footer class="li-footer bg-transparent w-full ">
      <ul class="li-footer__list flex flex-wrap flex-row items-start justify-start w-full h-auto min-h-[50px] my-[0px] mx-auto py-3 px-2 papabear:w-[1128px] papabear:p-0">
        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        
          <span class="sr-only">LinkedIn</span>
          <icon class="li-footer__copy-logo text-color-logo-brand-alt inline-block self-center h-[14px] w-[56px] mr-1" data-delayed-url="https://static.licdn.com/sc/h/e12h2cd8ac580qen9qdd0qks8"></icon>
          <span class="li-footer__copy-text flex items-center">© 2024</span>
        
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://about.linkedin.com?trk=registration_footer-about" data-tracking-control-name="registration_footer-about" data-tracking-will-navigate>
          
          Acerca de
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/accessibility?trk=registration_footer-accessibility" data-tracking-control-name="registration_footer-accessibility" data-tracking-will-navigate>
          
          Accesibilidad
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/user-agreement?trk=registration_footer-user-agreement" data-tracking-control-name="registration_footer-user-agreement" data-tracking-will-navigate>
          
          Condiciones de uso
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/privacy-policy?trk=registration_footer-privacy-policy" data-tracking-control-name="registration_footer-privacy-policy" data-tracking-will-navigate>
          
          Política de privacidad
        
        </a>
  </li>

<!---->        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/cookie-policy?trk=registration_footer-cookie-policy" data-tracking-control-name="registration_footer-cookie-policy" data-tracking-will-navigate>
          
          Política de cookies
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/copyright-policy?trk=registration_footer-copyright-policy" data-tracking-control-name="registration_footer-copyright-policy" data-tracking-will-navigate>
          
          Política de copyright
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://brand.linkedin.com/policies?trk=registration_footer-brand-policy" data-tracking-control-name="registration_footer-brand-policy" data-tracking-will-navigate>
          
          Política de marca
        
        </a>
  </li>

          
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/psettings/guest-controls?trk=registration_footer-guest-controls" data-tracking-control-name="registration_footer-guest-controls" data-tracking-will-navigate>
          
            Controles de invitados
          
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/professional-community-policies?trk=registration_footer-community-guide" data-tracking-control-name="registration_footer-community-guide" data-tracking-will-navigate>
          
          Pautas comunitarias
        
        </a>
  </li>

        
<!---->
          
          
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        
              

    
    

    

    

    <div class="collapsible-dropdown collapsible-dropdown--footer collapsible-dropdown--up flex items-center relative hyphens-auto language-selector z-2">
<!---->
        <ul class="collapsible-dropdown__list hidden container-raised absolute w-auto overflow-y-auto flex-col items-stretch z-1 bottom-[100%] top-auto" role="menu" tabindex="-1">
          
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="العربية (árabe)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-ar_AE" data-locale="ar_AE" role="menuitem" lang="ar_AE">
                العربية (árabe)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Čeština (checo)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-cs_CZ" data-locale="cs_CZ" role="menuitem" lang="cs_CZ">
                Čeština (checo)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Dansk (danés)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-da_DK" data-locale="da_DK" role="menuitem" lang="da_DK">
                Dansk (danés)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Deutsch (alemán)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-de_DE" data-locale="de_DE" role="menuitem" lang="de_DE">
                Deutsch (alemán)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="English (inglés)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-en_US" data-locale="en_US" role="menuitem" lang="en_US">
                English (inglés)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Español (Spanish) seleccionado" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link--selected" data-tracking-control-name="language-selector-es_ES" data-locale="es_ES" role="menuitem" lang="es_ES">
                <strong>Español (Spanish)</strong>
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Français (francés)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-fr_FR" data-locale="fr_FR" role="menuitem" lang="fr_FR">
                Français (francés)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="हिंदी (hindi)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-hi_IN" data-locale="hi_IN" role="menuitem" lang="hi_IN">
                हिंदी (hindi)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Indonesio" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-in_ID" data-locale="in_ID" role="menuitem" lang="in_ID">
                Indonesio
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Italiano (italiano)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-it_IT" data-locale="it_IT" role="menuitem" lang="it_IT">
                Italiano (italiano)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="日本語 (japonés)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-ja_JP" data-locale="ja_JP" role="menuitem" lang="ja_JP">
                日本語 (japonés)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="한국어 (coreano)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-ko_KR" data-locale="ko_KR" role="menuitem" lang="ko_KR">
                한국어 (coreano)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Bahasa Malaysia (malayo)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-ms_MY" data-locale="ms_MY" role="menuitem" lang="ms_MY">
                Bahasa Malaysia (malayo)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Nederlands (neerlandés)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-nl_NL" data-locale="nl_NL" role="menuitem" lang="nl_NL">
                Nederlands (neerlandés)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Norsk (noruego)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-no_NO" data-locale="no_NO" role="menuitem" lang="no_NO">
                Norsk (noruego)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Polski (polaco)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-pl_PL" data-locale="pl_PL" role="menuitem" lang="pl_PL">
                Polski (polaco)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Português (portugués)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-pt_BR" data-locale="pt_BR" role="menuitem" lang="pt_BR">
                Português (portugués)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Română (rumano)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-ro_RO" data-locale="ro_RO" role="menuitem" lang="ro_RO">
                Română (rumano)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Русский (ruso)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-ru_RU" data-locale="ru_RU" role="menuitem" lang="ru_RU">
                Русский (ruso)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Svenska (sueco)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-sv_SE" data-locale="sv_SE" role="menuitem" lang="sv_SE">
                Svenska (sueco)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="ภาษาไทย (tailandés)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-th_TH" data-locale="th_TH" role="menuitem" lang="th_TH">
                ภาษาไทย (tailandés)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Tagalog (tagalo)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-tl_PH" data-locale="tl_PH" role="menuitem" lang="tl_PH">
                Tagalog (tagalo)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Türkçe (turco)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-tr_TR" data-locale="tr_TR" role="menuitem" lang="tr_TR">
                Türkçe (turco)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="Українська (ucraniano)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-uk_UA" data-locale="uk_UA" role="menuitem" lang="uk_UA">
                Українська (ucraniano)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="简体中文 (chino simplificado)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-zh_CN" data-locale="zh_CN" role="menuitem" lang="zh_CN">
                简体中文 (chino simplificado)
            </button>
          </li>
          <li class="language-selector__item" role="presentation">
            <!-- Adding aria-label to both the li and the button because screen reader focus goes to button on desktop and li on mobile-->
            <button aria-label="正體中文 (chino tradicional)" class="font-sans text-xs link block py-[5px] px-2 w-full hover:cursor-pointer hover:bg-color-action hover:text-color-text-on-dark focus:bg-color-action focus:text-color-text-on-dark
                language-selector__link !font-regular" data-tracking-control-name="language-selector-zh_TW" data-locale="zh_TW" role="menuitem" lang="zh_TW">
                正體中文 (chino tradicional)
            </button>
          </li>
<!---->      
        </ul>

          
        <button class="language-selector__button select-none relative pr-2 font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover hover:cursor-pointer focus:text-color-link-focus focus:outline-dotted focus:outline-1" aria-expanded="false" data-tracking-control-name="footer-lang-dropdown_trigger">
          <span class="language-selector__label-text mr-0.5 break-words">
            Idioma
          </span>
          <icon class="language-selector__label-chevron w-2 h-2 absolute top-0 right-0" data-delayed-url="https://static.licdn.com/sc/h/cyolgscd0imw2ldqppkrb84vo"></icon>
        </button>
      
    </div>
  
  
          
  </li>

      </ul>

<!---->    </footer>
  
<!---->          <div class="page__overlay hidden"></div>
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
        <button class="toast__dismiss-btn cursor-pointer babybear:self-center mamabear:self-center papabear:self-start pt-3 pb-2 papabear:py-2 pl-0.5 pr-0" data-id="toast__dismiss-btn" aria-label="Cerrar">
          <svg width="24" height="24" class="fill-color-icon"><path d="M13 4.32 9.31 8 13 11.69 11.69 13 8 9.31 4.31 13 3 11.69 6.69 8 3 4.31 4.31 3 8 6.69 11.68 3Z"></path></svg>
        </button>
      </div>
    </template>
      <template id="toast-icon-caution">
        <icon class="text-color-icon-caution toast__icon w-3 h-3 shrink-0 mr-2" data-delayed-url="https://static.licdn.com/sc/h/u6kgm8vi5s4rhtbgmjlphlp6"></icon>
      </template>
      <template id="toast-icon-error">
        <icon class="text-color-icon-negative toast__icon w-3 h-3 shrink-0 mr-2" data-delayed-url="https://static.licdn.com/sc/h/2ffvlzyh9wb65459t9va8w2ph"></icon>
      </template>
      <template id="toast-icon-gdpr">
        <icon class="text-color-icon-neutral toast__icon w-3 h-3 shrink-0 mr-2" data-delayed-url="https://static.licdn.com/sc/h/a0d85elrpgg38lskvq1kvzb3"></icon>
      </template>
      <template id="toast-icon-notify">
        <icon class="text-color-icon-neutral toast__icon w-3 h-3 shrink-0 mr-2" data-delayed-url="https://static.licdn.com/sc/h/de23f5me7dfm17unsj9up4vga"></icon>
      </template>
      <template id="toast-icon-success">
        <icon class="text-color-icon-positive toast__icon w-3 h-3 shrink-0 mr-2" data-delayed-url="https://static.licdn.com/sc/h/c44ryoszao52cyd0y87z7s0uf"></icon>
      </template>
    <template id="toast-cta">
      <a class="toast__cta cta-link font-medium ml-0.5 text-sm text-inherit inline" target="_blank"></a>
    </template>
  </div>
  
        <script data-delayed-url="https://static.licdn.com/sc/h/6y2czwba46q3wsh2b0d0g6trj" class="lazy-load" data-module-id="google-gsi-lib"></script>
          <script src="https://static.licdn.com/sc/h/8ory2lv0fcel2bbnzxu9x2wnx" async defer></script>
        <script src="https://static.licdn.com/sc/h/3j12a5awf32tx22n8hw31dk01" async defer></script>
<!---->        
    
    
    
    
    
    

    <!-- wwe errors -->

    <code id="i18n_invalidFormat_phone-number" style="display: none"><!--"Introduce un número de teléfono móvil válido."--></code>
    <code id="i18n_required_phone-number" style="display: none"><!--"Introduce tu número de teléfono móvil."--></code>
    <code id="i18n_tooLong_phone-number" style="display: none"><!--"El número de teléfono móvil debe tener entre 3 y 128 caracteres."--></code>

    <!-- email only errors -->

    <code id="i18n_invalidFormat_email-address" style="display: none"><!--"Introduce una dirección de correo electrónico válida."--></code>
    <code id="i18n_required_email-address" style="display: none"><!--"Introduce tu dirección de correo electrónico."--></code>
    <code id="i18n_tooLong_email-address" style="display: none"><!--"La dirección de correo electrónico debe tener entre 3 y 128 caracteres."--></code>
  
      

            <script src="https://static.licdn.com/sc/h/cchc4xla3dglu106e9mw6snkx" async></script>
<!---->          
      </body>
    </html>
  
  