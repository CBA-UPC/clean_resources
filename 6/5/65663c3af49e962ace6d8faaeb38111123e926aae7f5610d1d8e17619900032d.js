"use strict";(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["bundle.BadgeViolationsNotification","icons/IconCheckmarkCircleFillWhite-js","icons/IconErrorCircleFillWhite-js"],{49898:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(709249),i=n(887371),a=n(545754),o=n(486906),c=n(202784),l=n(706555),s=n(882392),u=n(700400),d=n(973186),h=n(488809),f=n(24949),g=n(392160),p=n(157659),m=function(e,t){return t.entityId&&p.ZP.select(e,t.entityId)||void 0},y=function(e){return"/".concat(e.screen_name)},v=function(e){return e.name};const Z=(0,g.Z)().propsFromState((function(){return{user:m,badging:(0,f.P1)(m,(function(e){return e?{displayContext:"content",isBlueVerified:e.is_blue_verified,isProtected:e.protected,isVerified:e.verified,verifiedType:e.verified_type,translatorType:e.translator_type,affiliateBadgeInfo:e.highlightedLabel}:void 0}))}})).adjustStateProps((function(e){var t=e.badging,n=e.user;return{badging:t,link:n&&y(n),screenName:n&&n.screen_name,text:n&&v(n)||""}}));var b=function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.color,n=e.link,r=e.onClick,i=e.screenName,a=e.text,o=e.weight,s=e.withHashflags,u=c.createElement(l.Z.TextFragment,{color:t,link:n,onClick:r,style:x.wordBreak,weight:o,withHashflags:s},a,this._renderBadges());return i?c.createElement(h.Z,{screenName:i},u):u}},{key:"_renderBadges",value:function(){var e=this.props.badging;return e?c.createElement(s.ZP,{style:x.badges},c.createElement(u.Z,e)):null}}]),n}(c.PureComponent),x=d.Z.create((function(e){return{wordBreak:{wordBreak:"break-word",display:"inline-flex",flexWrap:"wrap"},badges:{position:"relative",top:1}}}));const k=Z(b)},119884:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(807896),i=n(709249),a=n(887371),o=n(545754),c=n(486906),l=n(202784),s=n(706555),u=n(973186),d=n(991584),h=n(49898),f="Center",g="Natural",p=function(e){(0,o.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,a.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.accessibilityRole,n=e.alignment,i=e.color,a=e.entities,o=e.forceAutoTextDirection,c=e.nativeID,u=e.onEntityClick,g=e.rtl,p=e.size,y=e.style,v=e.text,Z=e.weight,b=e.withHashflags,x=n===f?"center":void 0,k=o?"auto":g?"rtl":"ltr";return l.createElement(s.Z,{accessibilityRole:t,align:x,color:i,dir:k,entities:a,nativeID:c,onEntityClick:u,renderFragment:{user:function(e,t){return l.createElement(h.Z,(0,r.Z)({},e,{color:"text",entityId:t.id}))},url:function(e,t){return l.createElement(s.Z.TextFragment,(0,r.Z)({},e,{link:(0,d.s9)(t)}))}},size:p,style:[m.hideOverflow,y],text:v,weight:Z,withHashflags:b})}}]),n}(l.PureComponent);p.defaultProps={alignment:g};var m=u.Z.create((function(e){return{hideOverflow:{overflow:"hidden"}}}));const y=p},743970:(e,t,n)=>{n.r(t),n.d(t,{BadgeViolations:()=>S,default:()=>B});var r=n(709249),i=n(887371),a=n(545754),o=n(486906),c=n(202784),l=n(325686),s=n(882392),u=n(434411),d=n(868472),h=n(973186),f=n(645184),g=n.n(f),p=n(773090),m=n(447495),y=n(300292),v=n(119884),Z=n(599401),b=n(823803),x=n(923335),k=n(392160),C=n(214707);const w=(0,k.Z)().propsFromState((function(){return{badgeViolations:C.XC,fetchStatus:C.Sb}})).adjustStateProps((function(e){var t=e.badgeViolations,n=e.fetchStatus;return{badgeViolations:t,fetchStatus:n===b.ZP.NONE?b.ZP.LOADING:n}})).propsFromActions((function(){return{createLocalApiErrorHandler:(0,x.createLocalApiErrorHandlerWithContextFactory)("ACCOUNT_VERIFICATION_NOTIFICATION_SCREEN"),fetchBadgeViolations:C.pD}})).withAnalytics();var E="/notifications",_=g().fc2a5c92,I=function(e){return null},S=function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a)))._renderViolation=function(e,t){var n=e.violation_category,r=e.violation_desc,i=r.entities,a=r.text,o=e.violation_status,u=e.violation_title,d=o===Z.Tq.IN_COMPLIANCE?c.createElement(p.default,{style:[L.icon,L.green]}):c.createElement(m.default,{style:[L.icon,L.red]});return c.createElement(l.Z,{key:n,style:[L.listItem,t&&L.withBottomBorder]},d,c.createElement(l.Z,{style:L.itemContent},c.createElement(s.ZP,{style:L.itemTitle},u),c.createElement(v.Z,{color:"gray700",entities:i,size:"subtext2",text:a})))},e._render=function(){var t=e.props,n=t.badgeViolations,r=t.history,i=n.button_text,a=n.violation_modal_desc,o=a.entities,l=a.text,s=n.violation_modal_title,d=n.violations,h=function(){return r.goBack({backLocation:E})},f=c.createElement(v.Z,{entities:o,text:l}),g=d&&d.length?c.createElement(c.Fragment,null,d.map((function(t,n,r){return e._renderViolation(t,n!==r.length-1)}))):null;return c.createElement(u.Z,{actionLabel:i,children:g,contentStyle:L.contentContainer,headline:s,onAction:h,onClose:h,subtext:f})},e._handleRequestRetry=function(){var t=e.props,n=t.createLocalApiErrorHandler;(0,t.fetchBadgeViolations)().catch(n())},e}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.createLocalApiErrorHandler;(0,e.fetchBadgeViolations)().catch(t())}},{key:"render",value:function(){var e=this.props,t=e.fetchStatus,n=e.history,r=t===b.ZP.LOADED;return c.createElement(y.Z,{backLocation:E,containerStyle:!r&&L.loading,history:n,renderHeader:r?I:void 0},c.createElement(d.Z,{fetchStatus:t,onRequestRetry:this._handleRequestRetry,render:this._render,retryMessage:_,retryable:!0}))}}]),n}(c.Component),L=h.Z.create((function(e){return{contentContainer:{marginVertical:e.spaces.space16,justifyContent:"center"},listItem:{flexDirection:"row",paddingVertical:e.spaces.space20,width:"100%"},withBottomBorder:{borderBottomWidth:e.borderWidths.small,borderBottomColor:e.colors.borderColor,borderBottomStyle:"solid"},icon:{flexShrink:0,fontSize:e.fontSizes.headline1,marginEnd:e.spaces.space12},itemContent:{flexShrink:1,flexGrow:1},itemTitle:{marginBottom:e.spaces.space2},loading:{paddingBottom:e.spaces.space48},green:{color:e.colors.green500},red:{color:e.colors.magenta500}}}));const B=w(S)},868472:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(709249),i=n(887371),a=n(545754),o=n(486906),c=n(202784),l=n(476984),s=n.n(l),u=n(107333),d=n(117779),h=n(913364),f="failed",g="loaded",p="loading",m="none",y=function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"shouldComponentUpdate",value:function(e){var t=e.fetchStatus===g,n=this.props.fetchStatus!==e.fetchStatus;return!(!t&&!n)||!s()(e,this.props)}},{key:"render",value:function(){var e=this.props,t=e.accessibilityLabel,n=e.failureMessage,r=e.fetchStatus,i=e.icon,a=e.loadingMessage,o=e.onRequestRetry,l=e.render,s=e.renderFailure,u=e.retryMessage,g=e.retryable;switch(r){case f:return g?c.createElement(d.Z,{icon:i,onRequestRetry:o,retryMessage:u}):n?c.createElement(h.m,{failureMessage:n}):s();case p:return c.createElement(h.J,{accessibilityLabel:t,loadingMessage:a});case m:return null;default:return l()}}}]),n}(c.Component);y.defaultProps={renderFailure:u.Z,retryable:!0},y.propTypes={}},706555:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(202784),i=n(882392),a=n(2464);function o(e){var t=e.accessibilityRole,n=e.align,o=e.color,c=e.dir,l=e.entities,s=e.nativeID,u=e.onEntityClick,d=e.renderFragment,h=void 0===d?{}:d,f=e.size,g=e.style,p=e.text,m=e.weight,y=e.withHashflags,v=(0,a.ZP)(p,l);return r.createElement(i.ZP,{accessibilityRole:t,align:n,color:o,dir:c,nativeID:s,size:f,style:g,weight:m,withHashflags:y},v.map((function(e,t){var n=h[e.type],a={children:e.text,color:e.color,dir:e.dir,link:e.link,onClick:e.link?u:void 0,weight:e.weight,withHashflags:y};return r.createElement(r.Fragment,{key:"".concat(e.text,":").concat(t)},n?n(a,e.ref):r.createElement(i.ZP,a))})))}o.makeEntityLink=a.ie,o.internal_parseRichTextEntities=a.ZP,o.TextFragment=i.ZP},2464:(e,t,n)=>{n.d(t,{ZP:()=>p,ie:()=>h,nt:()=>d});var r=n(841361),i=n(133028),a=n(196234),o=(n(344112),n(136728),n(34640)),c=n(249089),l=n(256500),s=Object.freeze({Cashtag:"cashtag",Hashtag:"hashtag",Mention:"mention",Url:"url",List:"twitterList"}),u=Object.freeze({CashtagClick:"cashtag_click",HashtagClick:"hashtag_click"});function d(e){return e.screenName?s.Mention:e.hashtag?s.Hashtag:e.cashtag?s.Cashtag:e.url?s.Url:null}function h(e,t){var n="https://twitter.com";switch(e){case s.Cashtag:var r=encodeURIComponent("".concat(t));return"".concat(n,"/search?q=").concat(r,"&src=").concat(u.CashtagClick);case s.Hashtag:var i=encodeURIComponent("".concat(t));return"".concat(n,"/search?q=").concat(i,"&src=").concat(u.HashtagClick);case s.Mention:return"".concat(n,"/").concat(t);case s.List:return"".concat(n,"/i/lists/").concat(t);case s.Url:return t.startsWith("http://")||t.startsWith("https://")?t:"//".concat(t)}}var f={cashtag:function(e,t){return{color:"link",dir:"ltr",link:h(s.Cashtag,"$".concat(t.text)),ref:t,text:"$".concat(t.text),type:s.Cashtag}},hashtag:function(e,t){return{color:"link",dir:l.Z.getTextDirection(t.text),link:h(s.Hashtag,"#".concat(t.text)),ref:t,text:"#".concat(t.text),type:s.Hashtag}},mention:function(e,t){return{color:"link",dir:"ltr",link:h(s.Mention,t.screenName),ref:t,text:"@".concat(t.screenName),type:s.Mention}},text:function(e,t){return{ref:{},text:c.Z.replaceCarriageReturns(e),type:"text",weight:"Strong"===t?"bold":void 0}},twitterList:function(e,t){return{color:"text",link:h(s.List,t.id),ref:t,text:e,type:s.List,weight:"bold"}},url:function(e,t){return{color:"link",link:h(s.Url,t.url),ref:t,text:e,type:s.Url}},user:function(e,t){return{ref:t,text:e,type:"user",weight:"bold"}}},g=function(e,t){return e.map((function(e){var n=(0,o.Z)(t,e.fromIndex,e.toIndex),r=(0,a.Z)(n,2),c=r[0],l=r[1];return(0,i.Z)((0,i.Z)({},e),{},{fromIndex:c,toIndex:l})}))};function p(e,t){var n=[];if(t.length){var i,a=g(t,e),o=0,c=(0,r.Z)(a);try{var l=function(){var t=i.value,r=t.format,a=t.fromIndex,c=t.ref,l=t.toIndex;l!==o&&a>o&&n.push(f.text(e.slice(o,a)));var s=e.slice(a,l);if(c){var u=Object.keys(c).find((function(e){return null!=c[e]}));if(u){var d=f[u];d?n.push(d(s,c[u])):n.push(f.text(s))}}else n.push(f.text(s,r));o=l};for(c.s();!(i=c.n()).done;)l()}catch(u){c.e(u)}finally{c.f()}var s=e.length;o<s&&n.push(f.text(e.slice(o)))}else n.push(f.text(e));return n}},773090:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(133028),i=n(202784),a=n(890601),o=n(783427),c=n(473569),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.Z)().direction;return(0,a.Z)("svg",(0,r.Z)((0,r.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[c.Z.root,e.style],viewBox:"0 0 24 24",children:i.createElement("g",null,i.createElement("circle",{cx:"12",cy:"12",fill:"#FFF",r:"9"}),i.createElement("path",{d:"M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"}))}),{writingDirection:t})};l.metadata={width:24,height:24};const s=l},447495:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(133028),i=n(202784),a=n(890601),o=n(783427),c=n(473569),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.Z)().direction;return(0,a.Z)("svg",(0,r.Z)((0,r.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[c.Z.root,e.style],viewBox:"0 0 24 24",children:i.createElement("g",null,i.createElement("path",{d:"M12 1.75C6.339 1.75 1.75 6.339 1.75 12S6.339 22.25 12 22.25 22.25 17.661 22.25 12 17.661 1.751 12 1.75z"}),i.createElement("path",{d:"M13.25 7L13 12.7c-.32-.121-.658-.189-1-.2-.342.011-.68.079-1 .2L10.75 7h2.5zM12 17c-.828 0-1.5-.672-1.5-1.5S11.172 14 12 14s1.5.672 1.5 1.5S12.828 17 12 17z",fill:"#fff"}))}),{writingDirection:t})};l.metadata={width:24,height:24};const s=l}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web-legacy/bundle.BadgeViolationsNotification.8015157a.js.map                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      allowfullscreen frameborder="0" data-delayed-url="https://www.youtube-nocookie.com/embed/ha7ASaPnjbA?rel=0&amp;amp;autohide=1&amp;amp;playsinline=0&amp;amp;html5=1&amp;amp;wmode=opaque&amp;amp;autoplay=0" title="YOUTUBE Embed">
      </iframe>
    
              </div>
        </div>
      </div>

<!---->    </div>  
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p2">
      <h2>Table of Contents:</h2> <ol> <li><a rel="" href="#introduction" target="_self">Introduction</a></li> <li><a rel="" href="#obligations" target="_self">Obligations</a></li> <li><a rel="" href="#rights" target="_self">Rights and Limits</a></li> <li><a rel="" href="#disclaimer" target="_self">Disclaimer and Limit of Liability</a></li> <li><a rel="" href="#termination" target="_self">Termination</a></li> <li><a rel="" href="#dispute" target="_self">Governing Law and Dispute Resolution</a></li> <li><a rel="" href="#general" target="_self">General Terms</a></li> <li><a rel="" href="#dos" target="_self">LinkedIn “Dos and Don’ts”</a></li> <li><a rel="" href="#complaints" target="_self">Complaints Regarding Content</a></li> <li><a rel="" href="#contact" target="_self">How To Contact Us</a></li> </ol>
    </div>  
  
      </div>
      <div id class="component component-standaloneList" data-component-type="standaloneList">
        

        

      <ol class="standalone-list standalone-list--article-width standalone-list--none" start="1" style="counter-reset: list-counter 1;">
          <li id="introduction" class="standalone-list__item standalone-list__item--hairline  t-16dp">
            

      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <h2>Introduction</h2> <h3>1.1 Contract</h3>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>When you use our Services you agree to all of these terms. Your use of our Services is also subject to our Cookie Policy and our Privacy Policy, which covers how we collect, use, share, and store your personal information.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <p>You agree that by clicking “Join Now”, “Join LinkedIn”, “Sign Up” or similar, registering, accessing or using our services (described below),&nbsp;you are agreeing to enter into a legally binding contract&nbsp;with LinkedIn (even if you are using our Services on behalf of a company). If you do not agree to this contract (“Contract” or “User Agreement”), do&nbsp;not&nbsp;click “Join Now” (or similar) and do not access or otherwise use any of our Services. If you wish to terminate this contract, at any time you can do so by closing your account and no longer accessing or using our Services.</p> <h4>Services</h4> <p>This Contract applies to LinkedIn.com, LinkedIn-branded apps, LinkedIn Learning and other LinkedIn-related sites, apps, communications and other services that state that they are offered under this Contract (“Services”), including the offsite collection of data for those Services, such as our ads and the “Apply with LinkedIn” and “Share with LinkedIn” plugins. Registered users of our Services are “Members” and unregistered users are “Visitors”.</p> <h4>LinkedIn</h4> <p>You are entering into this Contract with LinkedIn (also referred to as “we” and “us”).</p> <p>We use the term “Designated Countries” to refer to countries in the European Union (EU), European Economic Area (EEA), and Switzerland.</p> <p>If you reside in the “Designated Countries”, you are entering into this Contract with LinkedIn Ireland Unlimited Company (“LinkedIn Ireland”) and LinkedIn Ireland will be the controller of your personal data provided to, or collected by or for, or processed in connection with our Services.</p> <p>If you reside outside of the “Designated Countries”, you are entering into this Contract with LinkedIn Corporation (“LinkedIn Corp.”) and LinkedIn Corp. will be the controller of your personal data provided to, or collected by or for, or processed in connection with our Services.</p>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>This Contract applies to Members and Visitors.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <p>As a Visitor or Member of our Services, the collection, use and sharing of your personal data is subject to this&nbsp;<a rel="" href="https://www.linkedin.com/legal/privacy-policy" target="_self">Privacy Policy</a>&nbsp;(which includes our&nbsp;<a rel="" href="https://www.linkedin.com/legal/cookie-policy" target="_self">Cookie Policy</a>&nbsp;and other documents referenced in this Privacy Policy) and updates.</p> <h3>1.2 Members and Visitors</h3> <p>When you register and join the LinkedIn Services, you become a Member. If you have chosen not to register for our Services, you may access certain features as a “Visitor.”</p> <h3>1.3 Change</h3>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>We may make changes to the Contract.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <p>We may modify this Contract, our Privacy Policy and our Cookies Policy from time to time. If we make material changes to it, we will provide you notice through our Services, or by other means, to provide you the opportunity to review the changes before they become effective. We agree that changes cannot be retroactive. If you object to any changes, you may&nbsp;<a rel="" href="https://www.linkedin.com/help/linkedin/answer/63?trk=microsites-frontend_legal_user-agreement&lang=en" target="_self">close your account</a>. Your continued use of our Services after we publish or send a notice about our changes to these terms means that you are consenting to the updated terms as of their effective date.</p>
    </div>  
  
      </div>
  
          </li>
          <li id="obligations" class="standalone-list__item standalone-list__item--hairline  t-16dp">
            

      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <h2>2. Obligations</h2> <h3>2.1 Service Eligibility</h3>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>Here are some promises that you make to us in this Contract:<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>You’re eligible to enter into this Contract and you are at least our “Minimum Age.”<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <p>The Services are not for use by anyone under the age of 16.</p> <p>To use the Services, you agree that: (1) you must be the <a rel="" href="#key-terms-2" target="_self">"Minimum Age"</a>(described below) or older; (2) you will only have one LinkedIn account, which must be in your real name; and (3) you are not already restricted by LinkedIn from using the Services. Creating an account with false information is a violation of our terms, including accounts registered on behalf of others or persons under the age of 16.</p> <p>“Minimum Age” means 16 years old. However, if law requires that you must be older in order for LinkedIn to lawfully provide the Services to you without parental consent (including using of your personal data) then the Minimum Age is such older age.</p> <h3>2.2 Your Account</h3>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>You will keep your password a secret<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>You will not share an account with anyone else and will follow our rules and the law.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <p>Members are account holders. You agree to: (1) use a strong password and keep it confidential; (2) not transfer any part of your account (e.g., connections) and (3) follow the law and our list of Dos and Don’ts and&nbsp;<a rel="" href="https://www.linkedin.com/help/linkedin/answer/89880?trk=microsites-frontend_legal_user-agreement&lang=en" target="_self">Professional Community Policies</a>. You are responsible for anything that happens through your account unless you close it or report misuse.</p> <p>As between you and others (including your employer), your account belongs to you. However, if the Services were purchased by another party for you to use (e.g. Recruiter seat bought by your employer), the party paying for such Service has the right to control access to and get reports on your use of such paid Service; however, they do not have rights to your personal account</p> <h3>2.3 Payment</h3>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>You’ll honor your payment obligations and you are okay with us storing your payment information. You understand that there may be fees and taxes that are added to our prices.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>Refunds are subject to our policy.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <p>If you buy any of our paid Services (“Premium Services”), you agree to pay us the applicable fees and taxes and to&nbsp;<a rel="" href="https://www.linkedin.com/legal/pop/terms-for-paid-services" target="_self">additional terms</a>&nbsp;specific to the paid Services. Failure to pay these fees will result in the termination of your paid Services. Also, you agree that:</p> <ul> <li>Your purchase may be subject to foreign exchange fees or differences in prices based on location (e.g. exchange rates).</li> <li>We may store and continue billing your payment method (e.g. credit card) even after it has expired, to avoid interruptions in your Services and to use to pay other Services you may buy.</li> <li>If you purchase a subscription, your payment method automatically will be charged at the start of each subscription period for the fees and taxes applicable to that period. To avoid future charges, cancel before the renewal date. Learn how to&nbsp;<a rel="" href="https://www.linkedin.com/help/linkedin/answer/50?trk=microsites-frontend_legal_user-agreement&lang=en" target="_self">cancel or suspend</a>&nbsp;your Premium Services.</li> <li>All of your purchases of Services are subject to LinkedIn’s&nbsp;<a rel="" href="https://www.linkedin.com/help/linkedin/answer/5704?trk=microsites-frontend_legal_user-agreement&lang=en" target="_self">refund policy</a>.</li> <li>We may calculate taxes payable by you based on the billing information that you provide us at the time of purchase.</li> </ul> <p>You can get a copy of your invoice through your LinkedIn account settings under “<a rel="" href="https://www.linkedin.com/mnyfe/secure/purchasehistoryv4" target="_self">Purchase History</a>”.</p> <h3>2.4 Notices and Messages</h3>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>You’re okay with us providing notices and messages to you through our websites, apps, and contact information. If your contact information is out of date, you may miss out on important notices.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <p>You agree that we will provide notices and messages to you in the following ways: (1) within the Service, or (2) sent to the contact information you provided us (e.g., email, mobile number, physical address). You agree to keep your&nbsp;<a rel="" href="https://www.linkedin.com/help/linkedin/answer/34987?trk=microsites-frontend_legal_user-agreement&lang=en" target="_self">contact information</a>&nbsp;up to date.</p> <p>Please review your settings to&nbsp;<a rel="" href="https://www.linkedin.com/help/linkedin/answer/67?trk=microsites-frontend_legal_user-agreement&lang=en" target="_self">control and limit</a>&nbsp;messages you receive from us.</p> <h3>2.5 Sharing</h3>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>When you share information on our Services, others can see, copy and use that information.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <p>Our Services allow messaging and sharing of information in many ways, such as your profile, articles, group posts, links to news articles, job postings, messages and InMails. Information and content that you share or post may be seen by other Members, Visitors or others (including off of the Services). Where we have made settings available, we will honor the choices you make about who can see content or information (e.g., message content to your addressees, sharing content only to LinkedIn connections, restricting your profile visibility from search engines, or opting not to notify others of your LinkedIn profile update). For job searching activities, we default to not notifying your connections network or the public. So, if you apply for a job through our Service or opt to signal that you are interested in a job, our default is to share it only with the job poster.</p> <p>We are not obligated to publish any information or content on our Service and can remove it with or without notice.</p>
    </div>  
  
      </div>
      <div id="key-terms-2" class="component component-expandableSection" data-component-type="expandableSection">
        

        

    <section class="expandable-section expandable-section--article-width expandable-section--no-hairline" data-collapse-container>
        <button class="expandable-section__header-button t-16" aria-controls="section-1705425329893-60" aria-expanded="false" data-collapse-trigger>
          Key terms
          <li-icon class="expandable-section__header-chevron" focusable="false" size="small" type="chevron-down-icon"></li-icon>
        </button>

      <div class="expandable-section__content" aria-hidden="true" tabindex="-1" id="section-1705425329893-60" data-collapsed="true" data-collapse-target="true">
        

      <div id="min" class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <h4>Minimum Age</h4> <p>Members who were below this new Minimum Age when they started using the Services under a previous User Agreement which had allowed certain persons under 16 to use the Services, may continue to use the Services. As of June 2017 persons under the age of 16 are not eligible to use our Services.</p>
    </div>  
  
      </div>
  
      </div>
    </section>  
  
      </div>
  
          </li>
          <li id="rights" class="standalone-list__item standalone-list__item--hairline  t-16dp">
            

      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <h2>3. Rights and Limits</h2> <h3>3.1. Your License to LinkedIn</h3>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>You own all of the content, feedback and personal information you provide to us, but you also grant us a non-exclusive license to it.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>We’ll honor the choices you make about who gets to see your information and content, including how it can be used for ads.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <p>As between you and LinkedIn, you own the content and information that you submit or post to the Services, and you are only granting LinkedIn and our&nbsp;<a rel="" href="#key-terms-3" target="_self">affiliates</a>&nbsp;the following non-exclusive license:</p> <p>A worldwide, transferable and sublicensable right to use, copy, modify, distribute, publish and process, information and content that you provide through our Services and the services of others, without any further consent, notice and/or compensation to you or others. These rights are limited in the following ways:</p> <ol> <li>You can end this license for specific content by deleting such content from the Services, or generally by closing your account, except (a) to the extent you shared it with others as part of the Service and they copied, re-shared it or stored it and (b) for the reasonable time it takes to remove from backup and other systems.</li> <li>We will not include your content in advertisements for the products and services of third parties to others without your separate consent (including sponsored content). However, we have the right, without payment to you or others, to serve ads near your content and information, and your&nbsp;<a rel="" href="#key-terms-3" target="_self">social actions</a>&nbsp;may be visible and included with ads, as noted in the Privacy Policy. If you use a Service feature, we may mention that with your name or photo to promote that feature within our Services, subject to your settings.</li> <li>We will get your consent if we want to give others the right to publish your content beyond the Services. However, if you choose to share your post as "public, everyone or similar", we will enable a feature that allows other Members to embed that public post onto third-party services, and we enable search engines to make that public content findable though their services.&nbsp;<a rel="" href="https://www.linkedin.com/help/linkedin/answer/86529?trk=microsites-frontend_legal_user-agreement&lang=en" target="_self">Learn More</a></li> <li>While we may edit and make format changes to your content (such as translating or transcribing it, modifying the size, layout or file type or removing metadata), we will not modify the meaning of your expression.</li> <li>Because you own your content and information and we only have non-exclusive rights to it, you may choose to make it available to others, including under the terms of a&nbsp;<a rel="" href="https://creativecommons.org/choose/" target="_self">Creative Commons license</a>.</li> </ol>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>You and LinkedIn agree that if content includes personal data, it is subject to our Privacy Policy.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <p>You and LinkedIn agree that we may access, store, process and use any information and personal data that you provide in accordance with, the terms of the&nbsp;<a rel="" href="https://www.linkedin.com/legal/privacy-policy" target="_self">Privacy Policy</a>&nbsp;and your choices (including settings).</p> <p>By submitting suggestions or other feedback regarding our Services to LinkedIn, you agree that LinkedIn can use and share (but does not have to) such feedback for any purpose without compensation to you.</p>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>You promise to only provide information and content that you have the right to share, and that your LinkedIn profile will be truthful.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <p>You agree to only provide content or information that does not violate the law nor anyone’s rights (including intellectual property rights). You also agree that your profile information will be truthful. LinkedIn may be required by law to remove certain information or content in certain countries.</p> <h3>3.2 Service Availability</h3>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>We may change or end any Service or modify our prices prospectively.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <p>We may change, suspend or discontinue any of our Services. We may also modify our prices effective prospectively upon reasonable notice to the extent allowed under the law.</p> <p>We don’t promise to store or keep showing any information and content that you’ve posted. LinkedIn is not a storage service. You agree that we have no obligation to store, maintain or provide you a copy of any content or information that you or others provide, except to the extent required by applicable law and as noted in our Privacy Policy.</p> <h3>3.3 Other Content, Sites and Apps</h3>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>Your use of others’ content and information posted on our Services, is at your own risk.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>Others may offer their own products and services through our Services, and we aren’t responsible for those third-party activities.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <p>By using the Services, you may encounter content or information that might be inaccurate, incomplete, delayed, misleading, illegal, offensive or otherwise harmful. LinkedIn generally does not review content provided by our Members or others. You agree that we are not responsible for others’ (including other Members’) content or information. We cannot always prevent this misuse of our Services, and you agree that we are not responsible for any such misuse. You also acknowledge the risk that you or your organization may be mistakenly associated with content about others when we let connections and followers know you or your organization were mentioned in the news. Members have&nbsp;<a rel="" href="https://www.linkedin.com/psettings/news-mention-broadcast" target="_self">choices</a>&nbsp;about this&nbsp;<a rel="" href="https://www.linkedin.com/help/linkedin/answer/50021?trk=microsites-frontend_legal_user-agreement&lang=en" target="_self">feature</a>.</p> <p>LinkedIn may help connect Members offering their services (career coaching, accounting, etc.) with Members seeking services. LinkedIn does not perform nor employs individuals to perform these services. You must be at least 18 years of age to offer, perform or procure these services. You acknowledge that LinkedIn does not supervise, direct, control or monitor Members in the performance of these services and agree that (1) LinkedIn is not responsible for the offering, performance or procurement of these services, (2) LinkedIn does not endorse any particular Member’s offered services, and (3) nothing shall create an employment, agency, or joint venture relationship between LinkedIn and any Member offering services. If you are a Member offering services, you represent and warrant that you have all the required licenses and will provide services consistent with our&nbsp;<a rel="" href="https://www.linkedin.com/help/linkedin/answer/89880?trk=microsites-frontend_legal_user-agreement&lang=en" target="_self">Professional Community Policies</a>.</p> <p>Similarly, LinkedIn may help you register for and/or attend events organized by Members and connect with other Members who are attendees at such events. You agree that (1) LinkedIn is not responsible for the conduct of any of the Members or other attendees at such events, (2) LinkedIn does not endorse any particular event listed on our Services, (3) LinkedIn does not review and/or vet any of these events, and (4) that you will adhere to these terms and conditions that apply to such events.</p> <h3>3.4 Limits</h3>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>We have the right to limit how you connect and interact on our Services.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <p>LinkedIn reserves the right to limit your use of the Services, including the number of your connections and your ability to contact other Members. LinkedIn reserves the right to restrict, suspend, or terminate your account if you breach this Contract or the law or are misusing the Services (e.g., violating any of the Dos and Don’ts or&nbsp;<a rel="" href="https://www.linkedin.com/help/linkedin/answer/89880?trk=microsites-frontend_legal_user-agreement&lang=en" target="_self">Professional Community Policies</a>).</p> <h3>3.5 Intellectual Property Rights</h3>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>We’re providing you notice about our intellectual property rights.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <p>LinkedIn reserves all of its intellectual property rights in the Services. Trademarks and logos used in connection with the Services are the trademarks of their respective owners. LinkedIn, and “in” logos and other LinkedIn trademarks, service marks, graphics and logos used for our Services are trademarks or registered trademarks of LinkedIn.</p> <h3>3.6 Automated Processing</h3>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>We use data and information about you to make relevant suggestions to you and others.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <p>We use the information and data that you provide and that we have about Members to make recommendations for connections, content and features that may be useful to you. For example, we use data and information about you to recommend jobs to you and you to recruiters. Keeping your profile accurate and up to date helps us to make these recommendations more accurate and relevant. <a rel="" href="https://www.linkedin.com/help/linkedin/answer/a1339724" target="_blank">Learn More</a></p>
    </div>  
  
      </div>
      <div id="key-terms-3" class="component component-expandableSection" data-component-type="expandableSection">
        

        

    <section class="expandable-section expandable-section--article-width expandable-section--no-hairline" data-collapse-container>
        <button class="expandable-section__header-button t-16" aria-controls="section-1705425329894-67" aria-expanded="false" data-collapse-trigger>
          Key Terms
          <li-icon class="expandable-section__header-chevron" focusable="false" size="small" type="chevron-down-icon"></li-icon>
        </button>

      <div class="expandable-section__content" aria-hidden="true" tabindex="-1" id="section-1705425329894-67" data-collapsed="true" data-collapse-target="true">
        

      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <h4>Affiliates</h4> <p>Affiliates are companies controlling, controlled by or under common control with us, including, for example, LinkedIn Ireland, LinkedIn Corporation, LinkedIn Singapore and Microsoft Corporation.&nbsp;</p> <h4>Social Action</h4> <p>e.g.&nbsp;likes, comments, follows,&nbsp;share</p>
    </div>  
  
      </div>
  
      </div>
    </section>  
  
      </div>
  
          </li>
          <li id="disclaimer" class="standalone-list__item standalone-list__item--hairline  t-16dp">
            

      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <h2>4. Disclaimer and Limit of Liability</h2> <h3>4.1 No Warranty</h3>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>This is our disclaimer of legal liability for the quality, safety, or reliability of our Services.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <p>LINKEDIN AND ITS AFFILIATES MAKE NO REPRESENTATION OR WARRANTY ABOUT THE SERVICES, INCLUDING ANY REPRESENTATION THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, AND PROVIDE THE SERVICES (INCLUDING CONTENT AND INFORMATION) ON AN “AS IS” AND “AS AVAILABLE” BASIS. TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW, LINKEDIN AND ITS AFFILIATES DISCLAIM ANY IMPLIED OR STATUTORY WARRANTY, INCLUDING ANY IMPLIED WARRANTY OF TITLE, ACCURACY OF DATA, NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.</p> <h3>4.2 Exclusion of Liability</h3>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>These are the limits of legal liability we may have to you.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <p>TO THE FULLEST EXTENT PERMITTED BY LAW (AND UNLESS LINKEDIN HAS ENTERED INTO A SEPARATE WRITTEN AGREEMENT THAT OVERRIDES THIS CONTRACT), LINKEDIN, INCLUDING ITS AFFILIATES, WILL NOT BE LIABLE IN CONNECTION WITH THIS CONTRACT FOR LOST PROFITS OR LOST BUSINESS OPPORTUNITIES, REPUTATION (E.G., OFFENSIVE OR DEFAMATORY STATEMENTS), LOSS OF DATA (E.G., DOWN TIME OR LOSS, USE OF, OR CHANGES TO, YOUR INFORMATION OR CONTENT) OR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL OR PUNITIVE DAMAGES.</p> <p>LINKEDIN AND ITS AFFILIATES WILL NOT BE LIABLE TO YOU IN CONNECTION WITH THIS CONTRACT FOR ANY AMOUNT THAT EXCEEDS (A) THE TOTAL FEES PAID OR PAYABLE BY YOU TO LINKEDIN FOR THE SERVICES DURING THE TERM OF THIS CONTRACT, IF ANY, OR (B) US $1000.</p>
    </div>  
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <h3>4.3 Basis of the Bargain; Exclusions</h3> <p>The limitations of liability in this Section 4 are part of the basis of the bargain between you and LinkedIn and shall apply to all claims of liability (e.g., warranty, tort, negligence, contract and law) even if LinkedIn or its affiliates has been told of the possibility of any such damage, and even if these remedies fail their essential purpose.</p> <p>These limitations of liability do not apply to liability for death or personal injury or for fraud, gross negligence or intentional misconduct, or in cases of negligence where a material obligation has been breached, a material obligation being such which forms a prerequisite to our delivery of services and on which you may reasonably rely, but only to the extent that the damages were directly caused by the breach and were foreseeable upon conclusion of this Contract and to the extent that they are typical in the context of this Contract.</p>
    </div>  
  
      </div>
  
          </li>
          <li id="termination" class="standalone-list__item standalone-list__item--hairline  t-16dp">
            

      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <h2>5. Termination</h2>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>We can each end this Contract, but some rights and obligations survive.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <p>Both you and LinkedIn may terminate this Contract at any time with notice to the other. On termination, you lose the right to access or use the Services. The following shall survive termination:</p> <ul> <li>Our rights to use and disclose your feedback;</li> <li>Members and/or Visitors’ rights to further re-share content and information you shared through the Services;</li> <li>Sections 4, 6, 7, and 8.2 of this Contract;</li> <li>Any amounts owed by either party prior to termination remain owed after termination.</li> </ul> <p>You can visit our&nbsp;<a rel="" href="https://www.linkedin.com/help/linkedin/answer/63?trk=microsites-frontend_legal_user-agreement&lang=en" target="_self">Help Center</a>&nbsp;to close your account.</p>
    </div>  
  
      </div>
  
          </li>
          <li id="dispute" class="standalone-list__item standalone-list__item--hairline  t-16dp">
            

      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <h2>6. Governing Law and Dispute Resolution</h2>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p><p></p>In the unlikely event we end up in a legal dispute, depending on where you live, you and LinkedIn agree to resolve it in California courts using California law, Dublin, Ireland courts using Irish law, or in your local courts using local law.<p></p><p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <p>If you live in the Designated Countries, the laws of Ireland govern all claims related to LinkedIn's provision of the Services, but this shall not deprive you of the mandatory consumer protections under the law of the country to which we direct your Services where you have habitual residence. With respect to jurisdiction, you and LinkedIn agree to choose the courts of the country to which we direct your Services where you have habitual residence for all disputes arising out of or relating to this User Agreement, or in the alternative, you may choose the responsible court in Ireland.</p> <p>For others outside of Designated Countries, including those who live outside of the United States: You and LinkedIn agree that the laws of the State of California, U.S.A., excluding its conflict of laws rules, shall exclusively govern any dispute relating to this Contract and/or the Services. You and LinkedIn both agree that all claims and disputes can be litigated only in the federal or state courts in Santa Clara County, California, USA, and you and LinkedIn each agree to personal jurisdiction in those courts</p>
    </div>  
  
      </div>
  
          </li>
          <li id="general" class="standalone-list__item standalone-list__item--hairline  t-16dp">
            

      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <h2>7. General Terms</h2>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>Here are some important details about the Contract.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <p>If a court with authority over this Contract finds any part of it unenforceable, you and we agree that the court should modify the terms to make that part enforceable while still achieving its intent. If the court cannot do that, you and we agree to ask the court to remove that unenforceable part and still enforce the rest of this Contract.</p> <p>This Contract (including additional terms that may be provided by us when you engage with a feature of the Services) is the only agreement between us regarding the Services and supersedes all prior agreements for the Services.</p> <p>If we don't act to enforce a breach of this Contract, that does not mean that LinkedIn has waived its right to enforce this Contract. You may not assign or transfer this Contract (or your membership or use of Services) to anyone without our consent. However, you agree that LinkedIn may assign this Contract to its affiliates or a party that buys it without your consent. There are no third-party beneficiaries to this Contract.</p> <p>You agree that the only way to provide us legal notice is at the addresses provided in Section 10.</p>
    </div>  
  
      </div>
  
          </li>
          <li id="dos" class="standalone-list__item standalone-list__item--hairline  t-16dp">
            

      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <h2>8. LinkedIn “Dos and Don’ts”</h2>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>LinkedIn is a community of professionals. This list of “Dos and Don’ts” along with our Professional Community Policies limit what you can and cannot do on our Services.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <h3>8.1. Dos</h3> <p><strong>You agree that you will:</strong></p> <ol> <li>Comply with all applicable laws, including, without limitation, privacy laws, intellectual property laws, anti-spam laws, export control laws, tax laws, and regulatory requirements;</li> <li>Provide accurate information to us and keep it updated;</li> <li>Use your real name on your profile; and</li> <li>Use the Services in a professional manner.</li> </ol> <h3>8.2. Don’ts</h3> <p><strong>You agree that you will&nbsp;<em>not</em>:</strong></p> <ol> <li>Create a false identity on LinkedIn, misrepresent your identity, create a Member profile for anyone other than yourself (a real person), or use or attempt to use another’s account;</li> <li>Develop, support or use software, devices, scripts, robots or any other means or processes (including crawlers, browser plugins and add-ons or any other technology) to scrape the Services or otherwise copy profiles and other data from the Services;</li> <li>Override any security feature or bypass or circumvent any access controls or use limits of the Service (such as caps on keyword searches or profile views);</li> <li>Copy, use, disclose or distribute any information obtained from the Services, whether directly or through third parties (such as search engines), without the consent of LinkedIn;</li> <li>Disclose information that you do not have the consent to disclose (such as confidential information of others (including your employer));</li> <li>Violate the intellectual property rights of others, including copyrights, patents, trademarks, trade secrets or other proprietary rights. For example, do not copy or distribute (except through the available sharing functionality) the posts or other content of others without their permission, which they may give by posting under a Creative Commons license;</li> <li>Violate the intellectual property or other rights of LinkedIn, including, without limitation, (i) copying or distributing our learning videos or other materials or (ii) copying or distributing our technology, unless it is released under open source licenses; (iii) using the word “LinkedIn” or our logos in any business name, email, or URL except as provided in the&nbsp;<a rel="" href="https://brand.linkedin.com/policies" target="_self">Brand Guidelines</a>;</li> <li>Post anything that contains software viruses, worms, or any other harmful code;</li> <li>Reverse engineer, decompile, disassemble, decipher or otherwise attempt to derive the source code for the Services or any related technology that is not open source;</li> <li>Imply or state that you are affiliated with or endorsed by LinkedIn without our express consent (e.g., representing yourself as an accredited LinkedIn trainer);</li> <li>Rent, lease, loan, trade, sell/re-sell or otherwise monetize the Services or related data or access to the same, without LinkedIn’s consent;</li> <li>Deep-link to our Services for any purpose other than to promote your profile or a Group on our Services, without LinkedIn’s consent;</li> <li>Use bots or other automated methods to access the Services, add or download contacts, send or redirect messages;</li> <li>Monitor the Services’ availability, performance or functionality for any competitive purpose;</li> <li>Engage in “framing,” “mirroring,” or otherwise simulating the appearance or function of the Services;</li> <li>Overlay or otherwise modify the Services or their appearance (such as by inserting elements into the Services or removing, covering, or obscuring an advertisement included on the Services);</li> <li>Interfere with the operation of, or place an unreasonable load on, the Services (e.g., spam, denial of service attack, viruses, gaming algorithms); and/or</li> <li>Violate the&nbsp;<a rel="" href="https://www.linkedin.com/help/linkedin/answer/89880?trk=microsites-frontend_legal_user-agreement&lang=en" target="_self">Professional Community Policies</a>&nbsp;or any additional terms concerning a specific Service that are provided when you sign up for or start using such Service, and the&nbsp;<a rel="" href="https://www.microsoft.com/en-us/maps/product/terms-april-2011" target="_self">Bing Maps terms</a>&nbsp;where applicable.</li> </ol>
    </div>  
  
      </div>
  
          </li>
          <li id="complaints" class="standalone-list__item standalone-list__item--hairline  t-16dp">
            

      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <h2>9. Complaints Regarding Content</h2>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>Contact information for complaint about content provided by our Members.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <p>We respect the intellectual property rights of others. We require that information posted by Members be accurate and not in violation of the intellectual property rights or other rights of third parties. We provide a&nbsp;<a rel="" href="https://www.linkedin.com/legal/copyright-policy" target="_self">policy and process</a>&nbsp;for complaints concerning content posted by our Members.</p>
    </div>  
  
      </div>
  
          </li>
          <li id="contact" class="standalone-list__item standalone-list__item--hairline  t-16dp">
            

      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <h2>10. How To Contact Us</h2>
    </div>  
  
      </div>
      <div id class="component component-callout" data-component-type="callout">
        

        

    <div class="callout callout-color--teal">
        <li-icon type="lightbulb-icon"></li-icon>
      <div class="callout__content ">
        <h3 class="callout__headline t-16 t-black t-bold t-roman"></h3>
        <div class="callout__description"><p></p><p></p>Our Contact information. Our Help Center also provides information about our Services.<p></p><p></p></div>
      </div>
<!---->    </div>
  
      </div>
      <div id class="component component-richText" data-component-type="richText">
        

        
    <div class="rich-text global-paragraph-style--p1">
      <p>For general inquiries, you may contact us&nbsp;<a rel="" href="https://www.linkedin.com/help/linkedin?trk=microsites-frontend_legal_user-agreement&lang=en" target="_self">online</a>. For legal notices or service of process, you may write us at these&nbsp;<a rel="" href="https://www.linkedin.com/help/linkedin/answer/79728?trk=microsites-frontend_legal_user-agreement&lang=en" target="_self">addresses</a>.</p>
    </div>  
  
      </div>
  
          </li>
      </ol>
  
  
      </div>
  

<!---->    </section>  
        </div>

        <script src="https://static.licdn.com/aero-v1/sc/h/8hfbuq1ftcvnnx4dd5067pi0t" async></script>
        <script src="https://static.licdn.com/aero-v1/sc/h/8e7ikqvdnraups5h63nkk2u7f" async></script>
        <script src="https://static.licdn.com/aero-v1/sc/h/5wt7te7z4axzisiox9c8gp2mo" async></script>
      
        </main>

        

    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    

    
    
    
    

    <footer class="li-footer bg-transparent w-full ">
      <ul class="li-footer__list flex flex-wrap flex-row items-start justify-start w-full h-auto min-h-[50px] my-[0px] mx-auto py-3 px-2 papabear:w-[1128px] papabear:p-0">
        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        
          <span class="sr-only">LinkedIn</span>
          <icon class="li-footer__copy-logo text-color-logo-brand-alt inline-block self-center h-[14px] w-[56px] mr-1" data-delayed-url="https://static.licdn.com/aero-v1/sc/h/e12h2cd8ac580qen9qdd0qks8"></icon>
          <span class="li-footer__copy-text flex items-center">&copy; 2024</span>
        
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://about.linkedin.com?trk=content_footer-about" data-tracking-control-name="content_footer-about" data-tracking-will-navigate>
          
          About
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/accessibility?trk=content_footer-accessibility" data-tracking-control-name="content_footer-accessibility" data-tracking-will-navigate>
          
          Accessibility
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/user-agreement?trk=content_footer-user-agreement" data-tracking-control-name="content_footer-user-agreement" data-tracking-will-navigate>
          
          User Agreement
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/privacy-policy?trk=content_footer-privacy-policy" data-tracking-control-name="content_footer-privacy-policy" data-tracking-will-navigate>
          
          Privacy Policy
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/cookie-policy?trk=content_footer-cookie-policy" data-tracking-control-name="content_footer-cookie-policy" data-tracking-will-navigate>
          
          Cookie Policy
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/legal/copyright-policy?trk=content_footer-copyright-policy" data-tracking-control-name="content_footer-copyright-policy" data-tracking-will-navigate>
          
          Copyright Policy
        
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://brand.linkedin.com/policies?trk=content_footer-brand-policy" data-tracking-control-name="content_footer-brand-policy" data-tracking-will-navigate>
          
          Brand Policy
        
        </a>
  </li>

          
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/psettings/guest-controls?trk=content_footer-guest-controls" data-tracking-control-name="content_footer-guest-controls" data-tracking-will-navigate>
          
            Guest Controls
          
        </a>
  </li>

        
  <li class="li-footer__item font-sans text-xs text-color-text-low-emphasis flex flex-shrink-0 justify-start p-1 relative w-50% papabear:justify-center papabear:w-auto">
        <a class="li-footer__item-link flex items-center font-sans text-xs font-bold text-color-text-low-emphasis hover:text-color-link-hover focus:text-color-link-focus" href="https://www.linkedin.com/help/linkedin/answer/34593?trk=content_footer-community-guide" data-tracking-control-name="content_footer-community-guide" data-tracking-will-navigate>
          
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
  
      

            <script src="https://static.licdn.com/aero-v1/sc/h/4qelrr8yaxrosc55jx3gu3dyd" async></script>
          
      </body>
    </html>
  
  
  