"use strict";(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["bundle.AdvancedSearch","icons/IconEye-js"],{879075:(e,t,n)=>{n.d(t,{Ci:()=>h,Dd:()=>u,F$:()=>c,NW:()=>l,QK:()=>i,Qs:()=>o,Ur:()=>d,WX:()=>a,jF:()=>p,kl:()=>r,nQ:()=>s,tI:()=>g});var a="ArrowDown",r="ArrowUp",i="ArrowLeft",o="ArrowRight",l="Enter",s="Escape",c="XF86Back",d="ESC",u="Tab",p="Delete",h="Backspace",g="MediaPlayPause"},63899:(e,t,n)=>{n.d(t,{Z:()=>a});const a={AdvancedSearchPage:"advanced_search_page",CashtagClick:"cashtag_click",HashtagClick:"hashtag_click",PromotedTrendClick:"promoted_trend_click",RecentSearchClick:"recent_search_click",SavedSearchClick:"saved_search_click",RelatedQueryClick:"related_query_click",SpellingCorrectionClick:"spelling_correction_click",SpellingCorrectionRevertClick:"spelling_suggestion_revert_click",SpellingExpansionClick:"spelling_expansion_click",SpellingExpansionRevertClick:"spelling_expansion_revert_click",SpellingSuggestionClick:"spelling_suggestion_click",TrendClick:"trend_click",TrendView:"trend_view",TypeaheadClick:"typeahead_click",Typed:"typed_query",TweetDetailQuoteTweet:"tdqt",TweetDetailSimilarPost:"tweet_detail_similar_posts"}},872120:(e,t,n)=>{n.r(t),n.d(t,{AdvancedSearchScreen:()=>ie,default:()=>oe});var a=n(133028),r=n(968079),i=n(256666),o=n(709249),l=n(887371),s=n(545754),c=n(486906),d=(n(200634),n(477950),n(385940),n(743108),n(202784)),u=n(325686),p=n(468591),h=n(594836),g=n(585204),m=n(510036),f=n(229496),y=n(535030),b=n(123162),v=n(431388),_=n(882392),x=n(934509),T=n(973186),C=n(645184),Z=n.n(C),k=n(16587),I=n(300292),L=n(879075),w=n(63899),F=n(24949),E=n(923335),S=n(392160),D=n(896665),P=["en-gb","fil","gl","ga","msa"];const R=(0,S.Z)().propsFromState((function(){return{languageList:(0,F.P1)(D.Nr,(function(e){return e.filter((function(e){return-1===P.indexOf(e.code)}))}))}})).propsFromActions((function(){return{createLocalApiErrorHandler:(0,E.createLocalApiErrorHandlerWithContextFactory)("ADVANCED_SEARCH"),fetchAvailableLanguagesIfNeeded:D.yt}})).withAnalytics({page:"search_advanced"});var V=Object.freeze({AllOfTheseWords:"allOfTheseWords",ThisExactPhrase:"thisExactPhrase",AnyOfTheseWords:"anyOfTheseWords",NoneOfTheseWords:"noneOfTheseWords",Language:"language",TheseHashtags:"theseHashtags",FromTheseAccounts:"fromTheseAccounts",ToTheseAccounts:"toTheseAccounts",MentioningTheseAccounts:"mentioningTheseAccounts",FromThisDate:"fromThisDate",ToThisDate:"toThisDate",MinReplies:"minReplies",MinLikes:"minLikes",MinRetweets:"minRetweets",ReplyFilter:"replyFilter",LinkFilter:"linkFilter"}),A="any";const z={wordsFields:[{label:Z().b6215680,name:V.AllOfTheseWords,description:Z().cceffa5e},{label:Z().f1c5faee,name:V.ThisExactPhrase,description:Z().ad10780e},{label:Z().a555a3f4,name:V.AnyOfTheseWords,description:Z().ee8a2b60},{label:Z().f51fe348,name:V.NoneOfTheseWords,description:Z().hb657ad4},{label:Z().d10da5da,name:V.TheseHashtags,description:Z().f0b52b50}],peopleFields:[{label:Z().e292598a,name:V.FromTheseAccounts,description:Z().hef790d8},{label:Z().g2c27394,name:V.ToTheseAccounts,description:Z().d158d9d0},{label:Z().a10e3230,name:V.MentioningTheseAccounts,description:Z().daaf2c72}],engagementFields:[{label:Z().b18366ba,name:V.MinReplies,description:Z().f481ba1c},{label:Z().ib3ddbd4,name:V.MinLikes,description:Z().ef994dac},{label:Z().a504ca74,name:V.MinRetweets,description:Z().jd9bd944}]};n(136728),n(345794);var H=function(e){return e.filter((function(e){return""!==e}))},M=function(e){return e.replace(/#+/g,"")},O=function(e){return e.replace(/@+/g,"")},W=function(e){return"(".concat(e,")")},B=Z().eb63de70,K=Z().j622effe,j=Z().d3938be8,N=Z().i647fb04,U=Z().e0dded5e,q=Z().b8e1d524,Q=Z().a097f7ba,G=Z().a9ae1e78,X=Z().a03dacaa,Y=Z().c03f15ca,$=Z().c647aac8,J=Z().ac6ce1c0,ee=Z().cb334136,te=Z().jdceda60,ne={day:void 0,month:void 0,year:void 0},ae=[{label:Z().jf1cbcc2,value:""},{label:Z().gede6f6e,value:"filter:links"}],re=[{label:Z().bda44dd4,value:""},{label:Z().ab870904,value:"filter:replies"}],ie=function(e){(0,s.Z)(n,e);var t=(0,c.Z)(n);function n(e,l){var s;return(0,o.Z)(this,n),(s=t.call(this,e,l))._renderSectionTitle=function(e){return d.createElement(p.ZP,{text:e})},s._renderField=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text";return d.createElement(u.Z,{key:e.name},d.createElement(h.Z,{helperText:e.description,label:e.label,name:e.name,numberOfLines:1,ref:s._setFormTextInputRef,style:le.field,type:t}))},s._handleToDateChange=function(e){s.setState({toDate:e})},s._handleFromDateChange=function(e){s.setState({fromDate:e})},s._handleFilterChanged=function(e,t){s.setState((0,i.Z)({},e,t))},s._renderLanguages=function(){var e=s._getFormattedLanguageList(s.props.languageList);return e.length?d.createElement(g.ZP,{label:X,onChange:s._handleLanguageChange,options:e,style:le.languageSelector}):null},s._getFormattedLanguageList=(0,k.Z)((function(e){var t={label:Y,value:A},n=e.map((function(e){return{label:e.name,value:e.code}}));return[t].concat((0,r.Z)(n))})),s._handleOnKeyDown=function(e){e.key===L.NW&&(e.preventDefault(),s._executeSearch())},s._handleOnSearchPress=function(){s._executeSearch()},s._handleLanguageChange=function(e,t){s.setState({language:e})},s._executeSearch=function(){var e=s.props,t=e.history,n=e.location,r=function(e){var t,n,a=[];return Object.keys(e).forEach((function(r){var i=e[r];if(i)switch(r){case V.ThisExactPhrase:a.push('"'.concat(i,'"'));break;case V.AnyOfTheseWords:t=i.split(" "),n=H(t),a.push(W(n.join(" OR ")));break;case V.NoneOfTheseWords:t="-".concat(i).split(" "),n=H(t),a.push(n.join(" -"));break;case V.TheseHashtags:t="#".concat(M(i)).split(" "),n=H(t),a.push(W(n.join(" OR #")));break;case V.FromTheseAccounts:t="from:".concat(O(i)).split(" "),n=H(t),a.push(W(n.join(" OR from:")));break;case V.ToTheseAccounts:t="to:".concat(O(i)).split(" "),n=H(t),a.push(W(n.join(" OR to:")));break;case V.MentioningTheseAccounts:t="@".concat(O(i)).split(" "),n=H(t),a.push(W(n.join(" OR @")));break;case V.FromThisDate:a.push("since:".concat(i));break;case V.ToThisDate:a.push("until:".concat(i));break;case V.Language:i!==A&&a.push("lang:".concat(i));break;case V.MinReplies:a.push("min_replies:".concat(i));break;case V.MinLikes:a.push("min_faves:".concat(i));break;case V.MinRetweets:a.push("min_retweets:".concat(i));break;case V.AllOfTheseWords:case V.LinkFilter:case V.ReplyFilter:a.push(i)}})),a.join(" ").trim()}(s._getInputValues());r&&t.replace({pathname:"/search",query:(0,a.Z)((0,a.Z)({},n.query),{},{q:r,src:w.Z.Typed})})},s._setFormTextInputRef=function(e){e&&e.props&&(s._formTextInputRefs[e.props.name]=e)},s._getInputValues=function(){var e,t=s.state,n=t.fromDate,r=t.language,o=t.linkFilter,l=t.replyFilter,c=t.toDate,d=Object.keys(s._formTextInputRefs).reduce((function(e,t){var n=s._formTextInputRefs[t];return n&&n.getValue()&&(e[t]=n.getValue()),e}),{}),u=m.ZP.getFormattedDateValue(c.day,c.month,c.year),p=m.ZP.getFormattedDateValue(n.day,n.month,n.year);return(0,a.Z)((0,a.Z)({},d),{},(e={language:r},(0,i.Z)(e,V.ToThisDate,u),(0,i.Z)(e,V.FromThisDate,p),(0,i.Z)(e,V.LinkFilter,o),(0,i.Z)(e,V.ReplyFilter,l),e))},s._formTextInputRefs={},s.state={language:A,linkFilter:"",replyFilter:"",toDate:ne,fromDate:ne},s}return(0,l.Z)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.createLocalApiErrorHandler;(0,e.fetchAvailableLanguagesIfNeeded)().catch(t({}))}},{key:"render",value:function(){var e=this,t=this.props.history,n=this.state,a=n.linkFilter,r=n.replyFilter,i=d.createElement(f.ZP,{onPress:this._handleOnSearchPress,size:"small",type:"primaryFilled"},G);return d.createElement(I.w,{backLocation:"/explore",documentTitle:B,history:t,rightControl:i,title:K},d.createElement(u.Z,{style:le.root},d.createElement(y.Z,{onKeyDown:this._handleOnKeyDown},this._renderSectionTitle(j),d.createElement(u.Z,{style:le.section},z.wordsFields.map((function(t){return e._renderField(t)})),this._renderLanguages()),d.createElement(b.Z,null),this._renderSectionTitle(q),d.createElement(u.Z,{style:le.section},z.peopleFields.map((function(t){return e._renderField(t)}))),d.createElement(b.Z,null),this._renderSectionTitle(N),d.createElement(v.Z,{label:te,name:"replyFilter",offValue:"-filter:replies",onChange:this._handleFilterChanged,options:re,value:r}),d.createElement(u.Z,{style:le.divider}),d.createElement(v.Z,{label:ee,name:"linkFilter",offValue:"-filter:links",onChange:this._handleFilterChanged,options:ae,value:a}),d.createElement(b.Z,null),this._renderSectionTitle(U),d.createElement(u.Z,{style:le.section},z.engagementFields.map((function(t){return e._renderField(t,"number")}))),d.createElement(b.Z,null),this._renderSectionTitle(Q),d.createElement(u.Z,{style:le.section},this._renderDateInputs()))))}},{key:"_renderDateInputs",value:function(){var e=this.state,t=e.fromDate,n=e.toDate;return d.createElement(u.Z,{style:le.dateInputs},d.createElement(_.ZP,null,J),d.createElement(x.Z,{day:t.day,label:J,minSelectableYear:2006,month:t.month,onChange:this._handleFromDateChange,style:le.fromDateInput,year:t.year}),d.createElement(_.ZP,null,$),d.createElement(x.Z,{day:n.day,label:$,minSelectableYear:2006,month:n.month,onChange:this._handleToDateChange,style:le.toDateInput,year:n.year}))}}]),n}(d.Component);const oe=R(ie);var le=T.Z.create((function(e){return{root:{paddingBottom:e.spaces.space16},section:{paddingHorizontal:e.spaces.space16},title:{marginBottom:e.spaces.space12},divider:{borderBottomColor:e.colors.gray200,borderBottomWidth:1},languageSelector:{marginVertical:e.spaces.space12},dateInputs:{marginVertical:e.spaces.space12},fromDateInput:{marginTop:e.spaces.space4,marginBottom:e.spaces.space16},toDateInput:{marginTop:e.spaces.space4,marginBottom:0},field:{paddingHorizontal:0,paddingVertical:e.spaces.space12}}}))},594836:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(807896),r=n(459740),i=n(709249),o=n(887371),l=n(545754),s=n(486906),c=n(202784),d=n(614983),u=n.n(d),p=n(325686),h=n(645184),g=n.n(h),m=n(437556),f=n(685834),y=n(168172),b=n(31735),v=n(16587),_=n(351384),x=n(463142),T=n(882392),C=n(229496),Z=n(973186),k=n(632070),I=["Icon","accessibilityLabel","calculateLength","editable","errorText","helperText","invalid","label","maxLength","onBlur","onChange","onFocus","onKeyDown","onKeyPress","onKeyUp","onSubmitEditing","showPasswordVisibilityIcon","showValidationIcon","style","type","validLength"],L=function(e){return e.length},w=function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:L)(e)},F=g().de540c32,E=g().b4abfdb4,S=function(e){(0,l.Z)(n,e);var t=(0,s.Z)(n);function n(e){var a;(0,i.Z)(this,n),(a=t.call(this,e))._isLabelLarge=function(){var e=a.state,t=e.actualCount,n=e.isFocused;return!t&&!n},a._getTextInputStyle=(0,v.Z)((function(e){return[D.root,!e&&D.disabled]})),a._getTextInputType=function(){var e=a.props,t=e.showPasswordVisibilityIcon,n=e.type,r=a.state.isPasswordRevealed;return"password"===n&&t?r?"text":"password":n},a._calculateLength=function(e){return w(e,a.props.calculateLength)},a._shouldRenderDisplayCount=function(){var e=a.state.isFocused,t=a._isFormInvalid();return Boolean((e||t)&&a._getMaxDisplayCount())},a._isInvalidNumber=function(){var e,t,n=a.props.type,r=null===(e=a._textInput)||void 0===e||null===(e=e.textInputNode)||void 0===e?void 0:e.value,i=null===(t=a._textInput)||void 0===t||null===(t=t.textInputNode)||void 0===t||null===(t=t.validity)||void 0===t?void 0:t.badInput;return"number"===n&&""===r&&!0===i},a._getActualCount=function(e){var t=e.length;return a._isInvalidNumber()&&(t=1),t},a._handleBlur=function(){var e,t=a.props.onBlur,n=(null===(e=a._textInput)||void 0===e?void 0:e.getValue())||"",r=a._calculateLength(n),i=a._getActualCount(n);a.setState({isFocused:!1,displayCount:r,actualCount:i}),t&&t()},a._handleChange=function(e){var t=a.props.onChange,n=a.state.previousValue,r=e.currentTarget.value,i=a._calculateLength(r),o=a._getActualCount(r),l=a._getAdjustedMaxLength();void 0!==l&&r.length>l&&n.length<r.length?e.currentTarget.value=n:(a.setState({isFocused:!0,displayCount:i,actualCount:o,previousValue:e.currentTarget.value}),t&&t(e))},a._handleFocus=function(){var e=a.props.onFocus;a.setState({isFocused:!0}),e&&e()},a._handleKeyPress=function(e){var t=a.props,n=t.multiline,r=t.onKeyPress,i=t.onSubmitEditing;r&&r(e),e.isDefaultPrevented()||"Enter"!==e.key||e.shiftKey||n||!i||(e.preventDefault(),i(e))},a._handleKeyDown=function(e){var t=a.props.onKeyDown;t&&t(e)},a._handleKeyUp=function(e){var t=a.props.onKeyUp;t&&t(e)},a._handlePasswordVisibilityClick=function(e){a.setState((function(e){return{isPasswordRevealed:!e.isPasswordRevealed}}))},a._setTextInputRef=function(e){a._textInput=e},a._checkComponentPropsUsageCorrectness=function(e){var t=e.defaultValue,n=e.maxLength,a=e.onChange,r=e.validLength,i=!!a,o="string"==typeof e.value,l="string"==typeof t;u()(!(!l&&o&&!i),"A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined."),u()(!(n&&r&&r>n),"Max length should be equal or greater than valid length."),u()(!(void 0!==n&&n<=0||void 0!==r&&r<=0),"Set editable to false instead of limiting the valid character count to 0.")},a._exceedsValidLength=function(e){var t=a._getMaxDisplayCount();return!!t&&e>t},a._getMaxDisplayCount=function(){return a.props.validLength||a.props.maxLength},a._getAdjustedMaxLength=function(){var e=a.props.maxLength,t=a.getValue(),n=a._calculateLength(t);return e?e+t.length-n:void 0},a._checkComponentPropsUsageCorrectness(e);var r=e.defaultValue,o=e.value||r||"";return a.state={displayCount:a._calculateLength(o),actualCount:L(o),isFocused:!1,isPasswordRevealed:!1,previousValue:o},a}return(0,o.Z)(n,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.maxLength,a=t.onChange,r=t.validLength,i=t.value,o=e.maxLength,l=e.onChange,s=e.validLength,c=e.value;s===r&&n===o&&!!a===!!l&&"string"==typeof i===("string"==typeof c)||this._checkComponentPropsUsageCorrectness(this.props)}},{key:"render",value:function(){var e=this.props,t=e.accessibilityLabel,n=e.editable,a=e.errorText,r=e.helperText,i=e.style,o=this.state.isFocused,l=this._isFormInvalid();return c.createElement(p.Z,{style:[P.root,i]},c.createElement(p.Z,{accessibilityLabel:t,accessibilityRole:"label",style:[_.Z.border,P.textInputFormStyle,l&&_.Z.invalidBorderColor,o&&l&&_.Z.focusedBorderInvalid,o&&!l&&_.Z.focusedBorderValid,!n&&_.Z.disabled]},c.createElement(p.Z,{style:P.textInputFormWrapper},c.createElement(p.Z,{style:P.textInputHeader},this._renderLabel(),this._shouldRenderDisplayCount()?this._renderDisplayCount():null),this._renderTextInput())),c.createElement(p.Z,{style:[P.sidePadding,P.underTextInputForm]},c.createElement(p.Z,{style:P.subtextWrapper},r?this._renderHelperText():null,l&&a?this._renderErrorText():null)))}},{key:"_renderLabel",value:function(){var e=this.props.label,t=this.state.isFocused?"primary":"gray700",n=this._isFormInvalid()?"red500":t,a=this._isLabelLarge();return c.createElement(T.ZP,{color:a?"gray700":n,numberOfLines:1,size:a?"headline1":"subtext2",style:[P.textInputHeaderItem,a&&P.placeholderText,!x.Z.reducedMotionEnabled&&P.transition]},e)}},{key:"_renderTextInput",value:function(){var e=this.props,t=e.Icon,n=(e.accessibilityLabel,e.calculateLength,e.editable),i=(e.errorText,e.helperText,e.invalid,e.label,e.maxLength,e.onBlur,e.onChange,e.onFocus,e.onKeyDown,e.onKeyPress,e.onKeyUp,e.onSubmitEditing,e.showPasswordVisibilityIcon,e.showValidationIcon),o=(e.style,e.type,e.validLength,(0,r.Z)(e,I));return c.createElement(p.Z,{style:D.container},t&&!this._isLabelLarge()?this._renderIcon():null,c.createElement(T.ZP,{size:"headline1",style:D.wrapper},c.createElement(k.Z,(0,a.Z)({},o,{editable:n,maxLength:this._getAdjustedMaxLength(),onBlur:this._handleBlur,onChange:this._handleChange,onFocus:this._handleFocus,onKeyDown:this._handleKeyDown,onKeyPress:this._handleKeyPress,onKeyUp:this._handleKeyUp,ref:this._setTextInputRef,style:this._getTextInputStyle(n),type:this._getTextInputType()}))),i&&!this._isLabelLarge()?this._renderValidationIcon():null,this._renderPasswordVisibilityIcon())}},{key:"_renderPasswordVisibilityIcon",value:function(){var e=this.props,t=e.showPasswordVisibilityIcon,n=e.type,a=this.state.isPasswordRevealed;return"password"===n&&t?c.createElement(p.Z,{style:P.passwordVisibilityIconContainer},c.createElement(C.ZP,{accessibilityLabel:a?E:F,focusable:!0,hoverLabel:{label:a?E:F},icon:a?c.createElement(m.default,null):c.createElement(f.default,null),onPress:this._handlePasswordVisibilityClick,size:"smallCompact",type:"primaryText"})):null}},{key:"_renderHelperText",value:function(){return c.createElement(p.Z,{accessibilityLiveRegion:"polite"},c.createElement(T.ZP,{color:"gray700",size:"subtext2",style:P.subtext},this.props.helperText))}},{key:"_renderErrorText",value:function(){return c.createElement(p.Z,{accessibilityLiveRegion:"assertive"},c.createElement(T.ZP,{color:"red500",size:"subtext2",style:P.subtext},this.props.errorText))}},{key:"_renderDisplayCount",value:function(){var e=this.state.displayCount,t=this._getMaxDisplayCount(),n=this._exceedsValidLength(e),a=t&&g().ia24dc8d(t),r=g().ia24dc8d(e);return c.createElement(p.Z,{accessibilityLiveRegion:"polite",style:[P.textInputHeaderItem,P.displayCount]},c.createElement(T.ZP,{color:n?"red500":"gray700",size:"subtext2"},a?"".concat(r," / ").concat(a):""))}},{key:"_renderIcon",value:function(){var e=this.props.Icon,t=this.state.isFocused,n=[P.icon,t&&P.focusedIcon];return e&&c.createElement(e,{style:n})}},{key:"_renderValidationIcon",value:function(){return this._isFormInvalid()?c.createElement(y.default,{style:[P.validationIcon,_.Z.invalidColor]}):c.createElement(b.default,{style:[P.validationIcon,_.Z.validIconColor]})}},{key:"_isFormInvalid",value:function(){var e=this.state.displayCount;return!!this.props.invalid||this._exceedsValidLength(e)||this._isInvalidNumber()}},{key:"blur",value:function(){this._textInput&&this._textInput.blur()}},{key:"getValue",value:function(){return this._textInput&&this._textInput.getValue()||""}},{key:"focus",value:function(){this._textInput&&this._textInput.focus()}},{key:"isValidLength",value:function(){var e=this.getValue(),t=this._calculateLength(e);return!this._exceedsValidLength(t)}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.calculateLength,a=e.value,r="string"==typeof a?w(a,n):0;return"string"==typeof a&&r!==t.displayCount?{displayCount:r,actualCount:a.length}:null}}]),n}(c.Component);S.defaultProps={autoComplete:"on",autoCorrect:!0,autoFocus:!1,editable:!0,invalid:!1},S.propTypes={};var D=Z.Z.create((function(e){return{container:{flexDirection:"row",flexGrow:1,flexShrink:1,overflow:"hidden",paddingBottom:e.spaces.space8,paddingHorizontal:e.spaces.space8,paddingTop:e.spaces.space12,marginTop:e.spaces.space16},root:{backgroundColor:"transparent",borderRadius:e.borderRadii.none,borderWidth:e.borderWidths.none,boxSizing:"border-box",color:"inherit",fontFamily:"inherit",fontSize:"inherit",textAlign:"inherit",outlineStyle:"none",padding:0},wrapper:{alignItems:"center",display:"flex",fontSize:e.fontSizes.headline2,width:"100%"},disabled:{color:e.colors.gray700}}})),P=Z.Z.create((function(e){return{root:{paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical},textInputFormStyle:{flexDirection:"row"},textInputFormWrapper:{flexGrow:1,flexShrink:1},textInputHeader:{flexDirection:"row",justifyContent:"space-between",position:"absolute",height:"100%",width:"100%"},textInputHeaderItem:{paddingTop:e.spaces.space8,paddingHorizontal:e.spaces.space8,fontSize:"small"},placeholderText:{paddingTop:e.spaces.space16,fontSize:e.fontSizes.headline2,userSelect:"none"},displayCount:{flexGrow:1,alignItems:"flex-end"},sidePadding:{paddingHorizontal:e.spaces.space8},underTextInputForm:{flexDirection:"row"},subtextWrapper:{flexDirection:"column",flex:1,paddingEnd:e.spaces.space20,paddingTop:e.spaces.space4},subtext:{alignSelf:"flex-start"},focusedIcon:{color:e.colors.primary},icon:{alignSelf:"center",color:e.colors.gray700,paddingEnd:e.spaces.space4},validationIcon:{alignSelf:"center",paddingStart:e.spaces.space4},transition:{transition:"transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1), padding-top 150ms cubic-bezier(0.4, 0, 0.2, 1)"},passwordVisibilityIconContainer:{alignSelf:"center",paddingStart:e.spaces.space4},passwordVisibilityIcon:{color:e.colors.gray700}}}))},351384:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(973186).Z.create((function(e){return{border:{borderRadius:e.borderRadii.small,borderWidth:e.borderWidths.small,borderColor:e.colors.gray200},focusedBorderValid:{boxShadow:"0 0 0 ".concat(e.borderWidths.small," ").concat(e.colors.primary),borderColor:e.colors.primary},focusedBorderInvalid:{boxShadow:"0 0 0 ".concat(e.borderWidths.small," ").concat(e.colors.red500)},invalidBorderColor:{borderColor:e.colors.red500},invalidColor:{color:e.colors.red500},validColor:{color:e.colors.primary},validIconColor:{color:e.colors.green500},disabled:{cursor:"default",opacity:.5,backgroundColor:e.colors.gray50,borderColor:e.colors.gray50}}}))},703655:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(133028),r=n(202784),i=n(890601),o=n(783427),l=n(493987),s=n(473569),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.useContext(l.Z),n=(0,o.Z)().direction;return(0,i.Z)("svg",(0,a.Z)((0,a.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[s.Z.root,e.style,t&&s.Z.iconRTL],viewBox:"0 0 24 24",children:r.createElement("g",null,r.createElement("path",{d:"M12.957 4.54L20.414 12l-7.457 7.46-1.414-1.42L16.586 13H3v-2h13.586l-5.043-5.04 1.414-1.42z"}))}),{writingDirection:n})};c.metadata={width:24,height:24};const d=c},31735:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(133028),r=n(202784),i=n(890601),o=n(783427),l=n(473569),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.Z)().direction;return(0,i.Z)("svg",(0,a.Z)((0,a.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[l.Z.root,e.style],viewBox:"0 0 24 24",children:r.createElement("g",null,r.createElement("path",{d:"M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"}))}),{writingDirection:t})};s.metadata={width:24,height:24};const c=s},685834:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(133028),r=n(202784),i=n(890601),o=n(783427),l=n(473569),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.Z)().direction;return(0,i.Z)("svg",(0,a.Z)((0,a.Z)({},e),{},{accessibilityRole:e.accessibilityLabel?e.accessibilityRole||"img":void 0,accessibilityHidden:void 0===e.accessibilityLabel,style:[l.Z.root,e.style],viewBox:"0 0 24 24",children:r.createElement("g",null,r.createElement("path",{d:"M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}))}),{writingDirection:t})};s.metadata={width:24,height:24};const c=s}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web-legacy/bundle.AdvancedSearch.a176a72a.js.map2 17.7825 122.946 18.9091 122.946 18.9091L122.949 18.9181C122.001 19.6004 121.221 20.7798 120.645 22.057V21.5012C120.645 19.8339 119.296 18.4859 117.632 18.4859C115.966 18.4859 114.62 19.8339 114.62 21.5012V37.2107C114.62 38.8795 115.966 40.2245 117.632 40.2245C119.296 40.2245 120.645 38.8795 120.645 37.2107V29.7536C121.078 26.5605 122.705 24.744 125.33 24.1295C125.481 24.0964 125.624 24.0497 125.765 24C125.768 23.9985 125.768 23.9985 125.773 23.997C125.777 23.994 125.786 23.994 125.792 23.991C131.865 22.2257 131.188 16.7011 131.188 16.7011" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8038 0C8.86641 0 0 8.8729 0 19.8198V56.2874C0 57.4547 1.41176 58.0391 2.23805 57.2122L12.9963 46.4505H26.6113C37.5502 46.4505 46.4166 37.5776 46.4166 26.6322V0H19.8038Z" fill="#2BB656"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9962 46.451H3.09277L9.28015 50.1682L12.9962 46.451Z" fill="#006B40"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M46.4165 0H19.8037V26.6323L46.4165 0Z" fill="#0CA750"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8038 0V0C8.86641 0 0 8.8744 0 19.8198V46.4505L19.8038 26.6322V0Z" fill="#006B40"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M46.4165 0L19.8037 26.6323H46.4165V0Z" fill="#75DD66"/>
    </svg>

<svg
        class="dn flex-l h500 ml-400-l"
    aria-hidden="true"    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 289 58"
    height="58"
    width="195"
>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M70.6499 37.9658C70.0147 37.5682 69.5 36.8542 69.5 35.9008C69.5 34.5528 70.5295 33.5226 71.878 33.5226C72.313 33.5226 72.751 33.64 73.067 33.8419C75.0884 35.1101 77.1112 35.7427 78.8164 35.7427C80.5608 35.7427 81.3525 35.1101 81.3525 34.1582V34.0768C81.3525 32.768 79.2905 32.3312 76.9516 31.6172C73.9791 30.7452 70.6092 29.355 70.6092 25.2295V25.1497C70.6092 20.8255 74.098 18.4051 78.3815 18.4051C80.6 18.4051 82.8997 19.0015 84.9617 20.0317C85.8331 20.47 86.3885 21.2623 86.3885 22.2955C86.3885 23.645 85.3184 24.6753 83.9698 24.6753C83.5349 24.6753 83.2549 24.5954 82.8606 24.3966C81.1538 23.5637 79.5283 23.0486 78.2626 23.0486C76.7936 23.0486 76.0396 23.6842 76.0396 24.5156V24.5954C76.0396 25.7868 78.0624 26.3426 80.3621 27.1349C83.3347 28.1244 86.7843 29.5538 86.7843 33.4412V33.5226C86.7843 38.2429 83.2549 40.3832 78.6584 40.3832C76.0396 40.3832 73.2266 39.6316 70.6499 37.9658" fill="#040404"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M89.4844 21.5013C89.4844 19.834 90.8314 18.486 92.4945 18.486C94.1607 18.486 95.5077 19.834 95.5077 21.5013V21.7785C96.9767 19.7963 98.998 18.3278 102.13 18.3278C107.085 18.3278 111.803 22.2138 111.803 29.3139V29.3952C111.803 36.4969 107.166 40.3843 102.13 40.3843C98.9182 40.3843 96.936 38.9173 95.5077 37.2108V43.5593C95.5077 45.2252 94.1607 46.5732 92.4945 46.5732C90.8314 46.5732 89.4844 45.2252 89.4844 43.5593V21.5013ZM105.777 29.3948V29.3135C105.777 25.786 103.399 23.4439 100.584 23.4439C97.7683 23.4439 95.4309 25.786 95.4309 29.3135V29.3948C95.4309 32.9253 97.7683 35.2674 100.584 35.2674C103.399 35.2674 105.777 32.966 105.777 29.3948V29.3948Z" fill="#040404"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M129.03 29.4758V29.396C129.03 23.2869 133.944 18.3286 140.567 18.3286C147.145 18.3286 152.022 23.2071 152.022 29.3147V29.396C152.022 35.5066 147.106 40.4649 140.487 40.4649C133.907 40.4649 129.03 35.5849 129.03 29.4758M146.077 29.4757V29.3959C146.077 26.2616 143.816 23.5248 140.487 23.5248C137.039 23.5248 134.977 26.1817 134.977 29.3146V29.3959C134.977 32.5303 137.236 35.2685 140.567 35.2685C144.016 35.2685 146.077 32.6086 146.077 29.4757" fill="#040404"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M174.184 37.2108C174.184 38.8782 172.835 40.2247 171.172 40.2247C169.506 40.2247 168.158 38.8782 168.158 37.2108V36.9744C166.77 38.7577 164.986 40.3828 161.934 40.3828C157.377 40.3828 154.719 37.3675 154.719 32.4905V21.5014C154.719 19.834 156.067 18.486 157.73 18.486C159.397 18.486 160.744 19.834 160.744 21.5014V30.5867C160.744 33.4409 162.092 34.9109 164.392 34.9109C166.69 34.9109 168.158 33.4409 168.158 30.5867V21.5014C168.158 19.834 169.506 18.486 171.172 18.486C172.835 18.486 174.184 19.834 174.184 21.5014V37.2108Z" fill="#040404"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M177.251 33.9576V16.0672C177.251 14.3984 178.6 13.0503 180.263 13.0503C181.929 13.0503 183.276 14.3984 183.276 16.0672V18.7241H185.932C187.359 18.7241 188.509 19.8748 188.509 21.3027C188.509 22.7305 187.359 23.8813 185.932 23.8813H183.276V32.9665C183.276 34.3537 183.87 35.03 185.219 35.03C185.416 35.03 185.813 34.9893 185.932 34.9893C187.281 34.9893 188.431 36.0994 188.431 37.4881C188.431 38.5605 187.716 39.4311 186.885 39.7519C185.773 40.1887 184.743 40.3438 183.435 40.3438C179.748 40.3438 177.251 38.8798 177.251 33.9576" fill="#040404"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M201.012 40.3834C198.078 40.3834 194.828 39.2327 192.528 37.3681L194.073 35.1886C196.294 36.8529 198.753 37.8063 201.169 37.8063C203.628 37.8063 205.41 36.5351 205.41 34.553V34.4732C205.41 32.4112 202.993 31.6175 200.299 30.8644C197.087 29.9501 193.52 28.8401 193.52 25.0701V24.9918C193.52 21.4613 196.454 19.1192 200.498 19.1192C202.993 19.1192 205.77 19.9913 207.87 21.383L206.482 23.6829C204.579 22.4539 202.399 21.6963 200.416 21.6963C197.999 21.6963 196.454 22.9675 196.454 24.674V24.7523C196.454 26.6968 198.99 27.4514 201.726 28.2858C204.897 29.2362 208.306 30.4667 208.306 34.1569V34.2352C208.306 38.1226 205.094 40.3834 201.012 40.3834" fill="#040404"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M221.345 40.4644C215.201 40.4644 210.719 35.6236 210.719 29.7931C210.719 23.9597 215.24 19.0405 221.424 19.0405C227.567 19.0405 232.089 23.8814 232.089 29.7118C232.089 35.5452 227.529 40.4644 221.345 40.4644M221.345 21.7367C216.903 21.7367 213.854 25.2702 213.854 29.7119C213.854 34.1582 217.105 37.7263 221.424 37.7263C225.863 37.7263 228.957 34.1958 228.957 29.7933C228.957 25.3109 225.666 21.7367 221.345 21.7367" fill="#040404"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M244.848 40.4644C238.862 40.4644 234.344 35.5844 234.344 29.7931C234.344 23.9597 238.862 19.0405 244.848 19.0405C248.734 19.0405 251.152 20.6672 253.055 22.6915L251.032 24.8333C249.407 23.1283 247.584 21.7366 244.809 21.7366C240.646 21.7366 237.476 25.2701 237.476 29.7118C237.476 34.1957 240.727 37.7262 245.007 37.7262C247.625 37.7262 249.644 36.4158 251.273 34.6701L253.213 36.4956C251.152 38.7986 248.695 40.4644 244.848 40.4644" fill="#040404"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M256.34 14.9944H259.83V11.6236H256.34V14.9944ZM256.537 39.9894H259.592V19.4767H256.537V39.9894Z" fill="#040404"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M265.891 23.4046L264.98 20.9059C267.24 19.8742 269.46 19.1994 272.435 19.1994C278.022 19.1994 281.155 22.0566 281.155 27.4517V39.9892H278.219V36.894C276.792 38.7586 274.416 40.423 270.808 40.423C267.002 40.423 263.156 38.2812 263.156 33.9976C263.156 29.6342 266.725 27.3328 271.916 27.3328C274.533 27.3328 276.398 27.6882 278.219 28.2063V27.4924C278.219 23.8008 275.958 21.8985 272.116 21.8985C269.697 21.8985 267.795 22.5311 265.891 23.4046M266.248 33.8784C266.248 36.4962 268.627 38.0054 271.401 38.0054C275.17 38.0054 278.261 35.7039 278.261 32.4491V30.4669C276.755 30.0316 274.732 29.5964 272.232 29.5964C268.389 29.5964 266.248 31.2607 266.248 33.8784" fill="#040404"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M285.946 39.9895H289V11.0272H285.946V39.9895Z" fill="#040404"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M131.188 16.7011C131.188 16.7011 128.563 17.8683 126.263 17.8262C124.042 17.7825 122.946 18.9091 122.946 18.9091L122.949 18.9181C122.001 19.6004 121.221 20.7798 120.645 22.057V21.5012C120.645 19.8339 119.296 18.4859 117.632 18.4859C115.966 18.4859 114.62 19.8339 114.62 21.5012V37.2107C114.62 38.8795 115.966 40.2245 117.632 40.2245C119.296 40.2245 120.645 38.8795 120.645 37.2107V29.7536C121.078 26.5605 122.705 24.744 125.33 24.1295C125.481 24.0964 125.624 24.0497 125.765 24C125.768 23.9985 125.768 23.9985 125.773 23.997C125.777 23.994 125.786 23.994 125.792 23.991C131.865 22.2257 131.188 16.7011 131.188 16.7011" fill="#040404"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8038 0C8.86641 0 0 8.8729 0 19.8198V56.2874C0 57.4547 1.41176 58.0391 2.23805 57.2122L12.9963 46.4505H26.6113C37.5502 46.4505 46.4166 37.5776 46.4166 26.6322V0H19.8038Z" fill="#2BB656"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9962 46.451H3.09277L9.28015 50.1682L12.9962 46.451Z" fill="#006B40"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M46.4165 0H19.8037V26.6323L46.4165 0Z" fill="#0CA750"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8038 0V0C8.86641 0 0 8.8744 0 19.8198V46.4505L19.8038 26.6322V0Z" fill="#006B40"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M46.4165 0L19.8037 26.6323H46.4165V0Z" fill="#75DD66"/>
</svg>
                                    </a>
            
                            <a                    aria-label="Start your free trial"
                    class="dn-l hover-no-underline fw-bold text-center underline w-auto-l wsnw w-33p tc f300 js-track__topNavCTA"
                    href="/pricing/"
                    title="Start your free trial"
                                    >
                    <span>Start your free trial</span>
                </a>
            
                            <div class="dn-l flex w-33p w-auto-l">
                    <button
                        aria-label="Open Main Menu"
                        class="db button-reset flex ml-auto js-sprout-nav-mobile-trigger"
                        title="Open Main Menu"
                                            >
                                    <svg
        class="flex h450 icon-menu"
                height="28"
        role="img"
        viewBox="0 0 448 512"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            >
                <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
    </svg>
                                    <svg
        class="dn h450 icon-close"
                height="28"
        role="img"
        viewBox="0 0 320 512"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            >
                <path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path>
    </svg>
                    </button>
                </div>
                    </div>

        <div class="mobile-contact dn db-l">
            <div class="bg--blue-1100 bg--neutral-100-l flex inline-flex-l flex-column flex-row-l h500-l items-center-l w-100p">
                <div class="dn flex-l">
                        <div class="flex items-center">
        <span class="dn dib-l fw-bold mr400">Contact</span>
                    <a
                aria-label="Call Sprout Support"
                class="c--link-white c--link-dark-l inline-flex items-center mr400 pa400 pa0-l f300 f400-m f300-l  js-sproutphonenumber"
                href="tel:18668783231"
                title="Call Sprout Support"
            >
                            <svg
        class="dn-l h450 mr350"
                height="16"
        role="img"
        viewBox="0 0 512 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            >
                <path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
    </svg>
                <span class="fw-bold fw-normal-l">1.866.878.3231</span>
            </a>
            </div>
    <div class="flex items-center">
                    <button
                class="button-reset c--link-white c--link-dark-l hover-no-underline inline-flex items-center mr400-l pa400 pa0-l f300 f400-m f300-l "
                data-a11y-dialog-show="nav-contact"
                title="Email Sprout Social"
            >
                            <svg
        class="h450 h400-l mr350 mr0-l"
                height="16"
        role="img"
        viewBox="0 0 512 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            >
                <path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
    </svg>
                <span class="dn-l fw-bold">Email</span>
            </button>
        
                                    <a
                    aria-label="Schedule a demo"
                    class="c--link-white c--link-dark-l dn mr400-l inline-flex-l items-center hover-no-underline"
                    href="/demo/"
                    title="Schedule a demo"
                >
                                <svg
        class="h400-l"
                height="14"
        role="img"
        viewBox="0 0 448 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            >
                <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
    </svg>
                </a>
                        </div>
                </div>

                                    <div class="dn db-l">
                       <div class="relative-l my-auto w-100p w-auto-l
         bl-l b--neutral-600-l        ">
    <button
        id="header-nav-login"
        class="button-reset c--text-inverse c--text-l fw-bold inline-flex items-center justify-between ml400-l pa400 pa0-l w-100p w-auto-l"
        title="Open Login Menu"
        aria-controls="header-nav-login-modal"
        aria-expanded="false"
        aria-label="Open Login Menu"
            >
        <span class="f300 f400-m f300-l ">Login</span>
        <span class="rotate-caret ml300" >
                        <svg
        class="h400 h350-l"
                height="10"
        role="img"
        viewBox="0 0 320 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            >
                <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
    </svg>
        </span>
    </button>
    <div
        id="header-nav-login-modal"
        class="dn"
            >
        <div class="login-modal pointer-events-all absolute-l bg--neutral-0-l mt400-l pl600 pl0-l pb450 pb0-l right0-l w-100p w425-l">
            <a
    aria-label="Sprout Social Login"
    class="c--text-inverse c--text-l flex fw-bold-l hover-bg--neutral-200-l hover-no-underline items-center justify-between py350 pa400-l w-100p"
    href="https://app.sproutsocial.com/dashboard/"
    rel="noopener noreferrer"
    target="_blank"
    title="Sprout Social Login"
>
    <div class="flex items-center">
        
<svg 
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
>
    <path d="M9 3a4.8 4.8 0 0 0-4.8 4.8v8.9a.3.3 0 0 0 .5.2l2.6-2.6h3.4a4.8 4.8 0 0 0 4.8-4.8V3z" fill="#5ec85f"></path>
    <path fill="#1da554" d="M7.3 14.3H5l1.5.9 1-1z"></path>
    <path fill="#34b45a" d="M15.5 3H9v6.5L15.5 3z"></path>
    <path d="M9 3a4.8 4.8 0 0 0-4.8 4.8v6.5L9 9.5z" fill="#1da554"></path>
    <path fill="#79da6c" d="M15.5 3L9 9.5h6.5V3z"></path>
</svg>

        <span class="f300 f400-m f300-l  ml300">Sprout Social<span class="screenreader"> Login</span></span>
    </div>
                <svg
        class="dn dib-l"
                height="16"
        role="img"
        viewBox="0 0 256 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                title="Sprout Social Login"
        aria-labelledby="fa_angle_right_1656531337"
            >
                <title id="fa_angle_right_1656531337">Sprout Social Login</title>
                <path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
    </svg>
</a>

            <a
    aria-label="Employee Advocacy Login"
    class="c--text-inverse c--text-l flex fw-bold-l hover-bg--neutral-200-l hover-no-underline items-center justify-between py350 pa400-l w-100p"
    href="https://advocacy.sproutsocial.com/login"
    rel="noopener noreferrer"
    target="_blank"
    title="Employee Advocacy Login"
>
    <div class="flex items-center">
        
<svg width="20" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.6 74" xml:space="preserve">
    <path fill="#0B968F" d="M28.7 32.9c4.5 0 8.2-3.7 8.2-8.2s-3.7-8.2-8.2-8.2-8.2 3.7-8.2 8.2 3.6 8.2 8.2 8.2zM51.3 0C45.6 0 41 4.6 41 10.3s4.6 10.3 10.3 10.3c5.7-.1 10.2-4.7 10.2-10.4C61.4 4.6 56.9 0 51.3 0zm0 53.4c-5.7-.1-10.3 4.5-10.4 10.2S45.4 73.9 51.1 74h.2c5.7-.1 10.2-4.7 10.2-10.4-.1-5.6-4.6-10.1-10.2-10.2zm0-26.7C45.6 26.7 41 31.3 41 37c0 5.7 4.6 10.3 10.3 10.3 5.7 0 10.3-4.6 10.3-10.3 0-5.7-4.6-10.3-10.3-10.3zM28.7 57.6c4.5 0 8.2-3.7 8.2-8.2s-3.7-8.2-8.2-8.2c-4.5 0-8.2 3.7-8.2 8.2s3.6 8.2 8.2 8.2zM8.1 45.3c4.5.1 8.3-3.6 8.3-8.1.1-4.5-3.6-8.3-8.1-8.3h-.2c-4.5 0-8.1 3.7-8.1 8.2 0 4.5 3.7 8.1 8.1 8.2z"/>
</svg>

        <span class="f300 f400-m f300-l  ml300">Employee Advocacy<span class="screenreader"> Login</span></span>
    </div>
                <svg
        class="dn dib-l"
                height="16"
        role="img"
        viewBox="0 0 256 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                title="Employee Advocacy Login"
        aria-labelledby="fa_angle_right_835405664"
            >
                <title id="fa_angle_right_835405664">Employee Advocacy Login</title>
                <path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
    </svg>
</a>
        </div>
    </div>
</div>


                    </div>
                
                                    <a class="dn db-l br600 hover-no-underline bg--primary hover-bg--primary-hover c--neutral-0 interaction--hover ml400 px350 py450 py300-l fw-bold tc wsnw js-track__topNavCTA" href="/trial/">
                        <span>Try Sprout for Free</span>
                    </a>
                            </div>
        </div>
    </div>
</div>
                                <nav class="dn db-l" >
        <div class="b--neutral-200-l bb-l bg--blue-1100 bg--neutral-0-l c--text-inverse c--text-l flex flex-auto flex-column flex-row-l relative z2">
            <div class="f300 flex flex-column flex-row-l items-center-l justify-between-l mw900 mx-auto pb750  pb0-l px350-l w-100p">
                                                                        <div class="db dn-l">
                            <div class="flex items-center">
        <span class="dn dib-l fw-bold mr400">Contact</span>
                    <a
                aria-label="Call Sprout Support"
                class="c--link-white c--link-dark-l inline-flex items-center mr400 pa400 pa0-l f300 f400-m f300-l  js-sproutphonenumber"
                href="tel:18668783231"
                title="Call Sprout Support"
            >
                            <svg
        class="dn-l h450 mr350"
                height="16"
        role="img"
        viewBox="0 0 512 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            >
                <path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
    </svg>
                <span class="fw-bold fw-normal-l">1.866.878.3231</span>
            </a>
            </div>
    <div class="flex items-center">
                    <button
                class="button-reset c--link-white c--link-dark-l hover-no-underline inline-flex items-center mr400-l pa400 pa0-l f300 f400-m f300-l "
                data-a11y-dialog-show="nav-contact"
                title="Email Sprout Social"
            >
                            <svg
        class="h450 h400-l mr350 mr0-l"
                height="16"
        role="img"
        viewBox="0 0 512 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            >
                <path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
    </svg>
                <span class="dn-l fw-bold">Email</span>
            </button>
        
                                    <a
                    aria-label="Schedule a demo"
                    class="c--link-white c--link-dark-l dn mr400-l inline-flex-l items-center hover-no-underline"
                    href="/demo/"
                    title="Schedule a demo"
                >
                                <svg
        class="h400-l"
                height="14"
        role="img"
        viewBox="0 0 448 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            >
                <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
    </svg>
                </a>
                        </div>
                    </div>
                    
                    <ul class="flex flex-auto flex-column flex-row-l flex-wrap-l list pl0 w-100p w-auto-l ">
                                                    <li class="flex items-center mr400">
                                <a class="flex" href="https://sproutsocial.com/insights/">
                                                                        <span class="screenreader">Blog Home</span>
                                    <span class="button-reset dn-l fw-bold inline-flex items-center justify-between mr400-l pa400 px200-l relative w-100p w-auto-l wsnw">
                                        <span class="c--neutral-0 f500 f300-l">Home</span>
                                    </span>

                                                <svg
        class="c--primary dn db-l"
                height="16"
        role="img"
        viewBox="0 0 576 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            >
                <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
    </svg>
                                </a>
                            </li>
                                                                                                                                    <li class="flex flex-column items-center mt0 relative w-100p w-auto-ns">
                                            <button
                                                id="header-nav-social-media"
                                                class="button-reset fw-bold inline-flex items-center justify-between mr400-l pa400 px200-l relative w-100p w-auto-l wsnw"
                                                title="Open Social Media menu"
                                                aria-controls="header-nav-social-media-id"
                                                aria-expanded="false"
                                                aria-label="Open Social Media menu"
                                                                                            >
                                                <span class="f300 f400-m f300-l ">Social Media</span>
                                                <span
                                                    class="rotate-caret ml300"
                                                                                                    >
                                                                <svg
        class="h400 h350-l"
                height="10"
        role="img"
        viewBox="0 0 320 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            >
                <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
    </svg>
                                                </span>
                                            </button>
                                            <div
    aria-labelledby="header-nav-social-media"
    class="dn"
        id="header-nav-social-media-id"
    role="region"
>
    <div class="pointer-events-none absolute-l left0 overflow-hidden pa400-l pt0-l ml-400-l mr-400-l top-100p w450-l z8">
        <div class="pointer-events-all b--neutral-200-l br--bottom br600 bt-l bg--blue-1100 bg--neutral-0-l c--text-inverse f300 flex flex-column pb450 pl600 pl0-l py350-l shadow200-l tl">
                                                                    
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/social-strategy/"
     rel="nofollow" >
    <span class="wsnw">Strategy</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/social-trends/"
    >
    <span class="wsnw">Trends</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/analytics/"
     rel="nofollow" >
    <span class="wsnw">Analytics</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/social-listening/"
     rel="nofollow" >
    <span class="wsnw">Listening</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/engagement/"
     rel="nofollow" >
    <span class="wsnw">Engagement</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/community-management/"
    >
    <span class="wsnw">Community Management</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/customer-care-service/"
     rel="nofollow" >
    <span class="wsnw">Customer Care</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="https://sproutsocial.com/insights/social-commerce-and-ecommerce/"
    >
    <span class="wsnw">Commerce</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/social-media-scheduling/"
     rel="nofollow" >
    <span class="wsnw">Scheduling</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/advertising/"
     rel="nofollow" >
    <span class="wsnw">Advertising</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/advocacy/"
     rel="nofollow" >
    <span class="wsnw">Employee Advocacy</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/influencers/"
    >
    <span class="wsnw">Influencers</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/team-collaboration/"
    >
    <span class="wsnw">Team Collaboration</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-semibold c--text-inverse c--link-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/all-social-media/"
    >
    <span class="wsnw">All Social Media</span>
</a>
                                    </div>
    </div>
</div>
                                        </li>
                                                                                                                                                                                                        <li class="flex flex-column items-center mt0 relative w-100p w-auto-ns">
                                            <button
                                                id="header-nav-networks"
                                                class="button-reset fw-bold inline-flex items-center justify-between mr400-l pa400 px200-l relative w-100p w-auto-l wsnw"
                                                title="Open Networks menu"
                                                aria-controls="header-nav-networks-id"
                                                aria-expanded="false"
                                                aria-label="Open Networks menu"
                                                                                            >
                                                <span class="f300 f400-m f300-l ">Networks</span>
                                                <span
                                                    class="rotate-caret ml300"
                                                                                                    >
                                                                <svg
        class="h400 h350-l"
                height="10"
        role="img"
        viewBox="0 0 320 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            >
                <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
    </svg>
                                                </span>
                                            </button>
                                            <div
    aria-labelledby="header-nav-networks"
    class="dn"
        id="header-nav-networks-id"
    role="region"
>
    <div class="pointer-events-none absolute-l left0 overflow-hidden pa400-l pt0-l ml-400-l mr-400-l top-100p w450-l z8">
        <div class="pointer-events-all b--neutral-200-l br--bottom br600 bt-l bg--blue-1100 bg--neutral-0-l c--text-inverse f300 flex flex-column pb450 pl600 pl0-l py350-l shadow200-l tl">
                                                                    
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/facebook/"
    >
    <span class="wsnw">Facebook</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/instagram/"
    >
    <span class="wsnw">Instagram</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/linkedin/"
    >
    <span class="wsnw">LinkedIn</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/pinterest/"
    >
    <span class="wsnw">Pinterest</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/review-sites/"
    >
    <span class="wsnw">Review Sites</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="https://sproutsocial.com/insights/social-platforms/"
    >
    <span class="wsnw">Social Platforms</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="https://sproutsocial.com/insights/tiktok/"
    >
    <span class="wsnw">TikTok</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/twitter/"
    >
    <span class="wsnw">Twitter</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/youtube/"
    >
    <span class="wsnw">YouTube</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/other-platforms/"
    >
    <span class="wsnw">Other</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-semibold c--text-inverse c--link-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/all-platforms/"
    >
    <span class="wsnw">All Networks</span>
</a>
                                    </div>
    </div>
</div>
                                        </li>
                                                                                                                                                                                                        <li class="flex flex-column items-center mt0 relative w-100p w-auto-ns">
                                            <button
                                                id="header-nav-industries"
                                                class="button-reset fw-bold inline-flex items-center justify-between mr400-l pa400 px200-l relative w-100p w-auto-l wsnw"
                                                title="Open Industries menu"
                                                aria-controls="header-nav-industries-id"
                                                aria-expanded="false"
                                                aria-label="Open Industries menu"
                                                                                            >
                                                <span class="f300 f400-m f300-l ">Industries</span>
                                                <span
                                                    class="rotate-caret ml300"
                                                                                                    >
                                                                <svg
        class="h400 h350-l"
                height="10"
        role="img"
        viewBox="0 0 320 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            >
                <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
    </svg>
                                                </span>
                                            </button>
                                            <div
    aria-labelledby="header-nav-industries"
    class="dn"
        id="header-nav-industries-id"
    role="region"
>
    <div class="pointer-events-none absolute-l left0 overflow-hidden pa400-l pt0-l ml-400-l mr-400-l top-100p w450-l z8">
        <div class="pointer-events-all b--neutral-200-l br--bottom br600 bt-l bg--blue-1100 bg--neutral-0-l c--text-inverse f300 flex flex-column pb450 pl600 pl0-l py350-l shadow200-l tl">
                                                                    
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/tech-companies/"
    >
    <span class="wsnw">Tech/Software</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/higher-education/"
    >
    <span class="wsnw">Higher Education</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/retail/"
    >
    <span class="wsnw">Retail</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/healthcare/"
     rel="nofollow" >
    <span class="wsnw">Healthcare</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/nonprofit/"
    >
    <span class="wsnw">Nonprofit</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/agency/"
    >
    <span class="wsnw">Agency</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/government/"
    >
    <span class="wsnw">Government</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/travel-and-hospitality/"
    >
    <span class="wsnw">Travel & Hospitality</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-semibold c--text-inverse c--link-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/industries/"
    >
    <span class="wsnw">All Industries</span>
</a>
                                    </div>
    </div>
</div>
                                        </li>
                                                                                                                                                                                                        <li class="flex flex-column items-center mt0 relative w-100p w-auto-ns">
                                            <button
                                                id="header-nav-career-growth"
                                                class="button-reset fw-bold inline-flex items-center justify-between mr400-l pa400 px200-l relative w-100p w-auto-l wsnw"
                                                title="Open Career Growth menu"
                                                aria-controls="header-nav-career-growth-id"
                                                aria-expanded="false"
                                                aria-label="Open Career Growth menu"
                                                                                            >
                                                <span class="f300 f400-m f300-l ">Career Growth</span>
                                                <span
                                                    class="rotate-caret ml300"
                                                                                                    >
                                                                <svg
        class="h400 h350-l"
                height="10"
        role="img"
        viewBox="0 0 320 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            >
                <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
    </svg>
                                                </span>
                                            </button>
                                            <div
    aria-labelledby="header-nav-career-growth"
    class="dn"
        id="header-nav-career-growth-id"
    role="region"
>
    <div class="pointer-events-none absolute-l left0 overflow-hidden pa400-l pt0-l ml-400-l mr-400-l top-100p w450-l z8">
        <div class="pointer-events-all b--neutral-200-l br--bottom br600 bt-l bg--blue-1100 bg--neutral-0-l c--text-inverse f300 flex flex-column pb450 pl600 pl0-l py350-l shadow200-l tl">
                                                                    
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/marketing/"
    >
    <span class="wsnw">Marketing Disciplines</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/leveling-up/"
    >
    <span class="wsnw">Leveling Up</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/leadership/"
    >
    <span class="wsnw">Leadership</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/diversity-equity-inclusion/"
    >
    <span class="wsnw">Diversity, Equity & Inclusion</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-semibold c--text-inverse c--link-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/career-growth/"
    >
    <span class="wsnw">All Career Growth</span>
</a>
                                    </div>
    </div>
</div>
                                        </li>
                                                                                                                                                                                                        <li class="flex flex-column items-center mt0 relative w-100p w-auto-ns">
                                            <button
                                                id="header-nav-marketing-insights"
                                                class="button-reset fw-bold inline-flex items-center justify-between mr400-l pa400 px200-l relative w-100p w-auto-l wsnw"
                                                title="Open Marketing Insights menu"
                                                aria-controls="header-nav-marketing-insights-id"
                                                aria-expanded="false"
                                                aria-label="Open Marketing Insights menu"
                                                                                            >
                                                <span class="f300 f400-m f300-l ">Marketing Insights</span>
                                                <span
                                                    class="rotate-caret ml300"
                                                                                                    >
                                                                <svg
        class="h400 h350-l"
                height="10"
        role="img"
        viewBox="0 0 320 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            >
                <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
    </svg>
                                                </span>
                                            </button>
                                            <div
    aria-labelledby="header-nav-marketing-insights"
    class="dn"
        id="header-nav-marketing-insights-id"
    role="region"
>
    <div class="pointer-events-none absolute-l left0 overflow-hidden pa400-l pt0-l ml-400-l mr-400-l top-100p w450-l z8">
        <div class="pointer-events-all b--neutral-200-l br--bottom br600 bt-l bg--blue-1100 bg--neutral-0-l c--text-inverse f300 flex flex-column pb450 pl600 pl0-l py350-l shadow200-l tl">
                                                                    
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/corporate-communications/"
    >
    <span class="wsnw">Corporate Communications</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/culture/"
    >
    <span class="wsnw">Culture Strategies</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/customer-experience/"
    >
    <span class="wsnw">Customer Experience</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/digital-transformation/"
    >
    <span class="wsnw">Digital Transformation</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/whats-next/"
    >
    <span class="wsnw">What's Next</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-semibold c--text-inverse c--link-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/marketing-insights/"
    >
    <span class="wsnw">All Marketing Insights</span>
</a>
                                    </div>
    </div>
</div>
                                        </li>
                                                                                                                                                                                                        <li class="flex flex-column items-center mt0 relative w-100p w-auto-ns">
                                            <button
                                                id="header-nav-sprout"
                                                class="button-reset fw-bold inline-flex items-center justify-between mr400-l pa400 px200-l relative w-100p w-auto-l wsnw"
                                                title="Open Sprout menu"
                                                aria-controls="header-nav-sprout-id"
                                                aria-expanded="false"
                                                aria-label="Open Sprout menu"
                                                                                            >
                                                <span class="f300 f400-m f300-l ">Sprout</span>
                                                <span
                                                    class="rotate-caret ml300"
                                                                                                    >
                                                                <svg
        class="h400 h350-l"
                height="10"
        role="img"
        viewBox="0 0 320 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            >
                <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
    </svg>
                                                </span>
                                            </button>
                                            <div
    aria-labelledby="header-nav-sprout"
    class="dn"
        id="header-nav-sprout-id"
    role="region"
>
    <div class="pointer-events-none absolute-l left0 overflow-hidden pa400-l pt0-l ml-400-l mr-400-l top-100p w450-l z8">
        <div class="pointer-events-all b--neutral-200-l br--bottom br600 bt-l bg--blue-1100 bg--neutral-0-l c--text-inverse f300 flex flex-column pb450 pl600 pl0-l py350-l shadow200-l tl">
                                                                    
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/using-sprout/"
    >
    <span class="wsnw">Sprout in Action</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/product-updates/"
    >
    <span class="wsnw">Updates & Enhancements</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/team-sprout/"
    >
    <span class="wsnw">Team Sprout</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/sprout-engineering/"
    >
    <span class="wsnw">Sprout Engineering</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="https://learning.sproutsocial.com/"
    >
    <span class="wsnw">Learning Portal</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/press/"
    >
    <span class="wsnw">Press</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-semibold c--text-inverse c--link-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/sprout/"
    >
    <span class="wsnw">All Sprout Social</span>
</a>
                                    </div>
    </div>
</div>
                                        </li>
                                                                                                                                                                                                        <li class="flex flex-column items-center mt0 relative w-100p w-auto-ns">
                                            <button
                                                id="header-nav-resources"
                                                class="button-reset fw-bold inline-flex items-center justify-between mr400-l pa400 px200-l relative w-100p w-auto-l wsnw"
                                                title="Open Resources menu"
                                                aria-controls="header-nav-resources-id"
                                                aria-expanded="false"
                                                aria-label="Open Resources menu"
                                                                                            >
                                                <span class="f300 f400-m f300-l ">Resources</span>
                                                <span
                                                    class="rotate-caret ml300"
                                                                                                    >
                                                                <svg
        class="h400 h350-l"
                height="10"
        role="img"
        viewBox="0 0 320 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            >
                <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
    </svg>
                                                </span>
                                            </button>
                                            <div
    aria-labelledby="header-nav-resources"
    class="dn"
        id="header-nav-resources-id"
    role="region"
>
    <div class="pointer-events-none absolute-l left0 overflow-hidden pa400-l pt0-l ml-400-l mr-400-l top-100p w450-l z8">
        <div class="pointer-events-all b--neutral-200-l br--bottom br600 bt-l bg--blue-1100 bg--neutral-0-l c--text-inverse f300 flex flex-column pb450 pl600 pl0-l py350-l shadow200-l tl">
                                                                    
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/resources/"
    >
    <span class="wsnw">Resource Center</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/case-studies/"
    >
    <span class="wsnw">Case Studies</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/guides/"
    >
    <span class="wsnw">Guides</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/webinars/"
    >
    <span class="wsnw">Webinars</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/data/"
    >
    <span class="wsnw">Data Reports</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/templates/"
    >
    <span class="wsnw">Templates</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/interactive/"
    >
    <span class="wsnw">Interactive</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/events/"
    >
    <span class="wsnw">Events</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="/insights/podcasts/"
    >
    <span class="wsnw">Podcasts</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="https://community.sproutsocial.com/"
    >
    <span class="wsnw">Community</span>
</a>
                                                        
<a
    class="db hover-no-underline-l fw-normal py300-l mt450 mt0-l fw-normal c--text-inverse c--text-dark-l hover-bg--neutral-100-l px450 f300 f400-m f300-l "
    href="https://sproutsocial.com/free-tools/"
    >
    <span class="wsnw">Free Social Media Tools</span>
</a>
                                    </div>
    </div>
</div>
                                        </li>
                                                                                                                                                                                                        <li class="mt0 w-100p w-auto-ns">
                                            <a class="c--text-inverse c--text-l db fw-bold mr400-l pa400 wsnw" href="/insights/all-topics/">
                                                <span class="f300 f400-m f300-l ">All Topics</span>
                                            </a>
                                        </li>
                                                                                                                                            </ul>
                
                                    <div class="dn db-l mt0">
                        <button
                            class="button-reset flex items-center pa0 ma0 py300"
                            aria-controls="header-nav-search"
                            aria-label="Open simple search form"
                                                    >
                                        <svg
        class="mr200"
                height="16"
        role="img"
        viewBox="0 0 512 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            >
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
    </svg>
                            Search
                        </button>
                        <div
    id="header-nav-search"
    aria-labelledby="header-nav-search-label"
    class="dn"
    role="region"
    >
    <div class="pointer-events-none absolute-l b--neutral-200-l bt-l c--text-dark left0 pb400-l overflow-hidden-l top-100p w-100p z8">
        <div class="bg--neutral-0 shadow200-l">
            <div class="pointer-events-all mw900 mx-auto py650-l relative">
                <button
                    class="button-reset absolute mt300 right0 top0 js-sprout-nav-close"
                    aria-label="Close simple search form"
                                    >
                                <svg
        class="c--text-dark"
                height="18"
        role="img"
        viewBox="0 0 320 512"
        width="18"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            >
                <path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path>
    </svg>
                </button>

                <div class="c--text-inverse c--text-l f300 mw700 mx-auto">
                    <p id="header-nav-search-label" class="fw-extrabold f600 mb300">Search the Blog</p>
                    <div class="mt0 relative">
                        <form id="header-nav-search-form-desktop" action="https://sproutsocial.com/insights" novalidate="novalidate" class="flex">
                            <input
        name="s"
    type="text"
    class="pl500 js-search-field"
            placeholder="What are you searching for?"                                                         />
                            <button class="button-reset br500 bg--primary hover-bg--primary-hover interaction--hover c--neutral-0 db fw-bold ml400 mx350 px600 py300 tc">
                                Search
                            </button>
                        </form>
                        <div class="pointer-events-none absolute flex h-100p items-center left0 px350 top0">
                                        <svg
        class="c--text-dark"
                height="16"
        role="img"
        viewBox="0 0 512 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            >
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
    </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
                    </div>
                
                                                    <div class="relative-l my-auto w-100p w-auto-l
         bl-l b--neutral-600-l     dn-l    ">
    <button
        id="header-nav-login-mobile"
        class="button-reset c--text-inverse c--text-l fw-bold inline-flex items-center justify-between ml400-l pa400 pa0-l w-100p w-auto-l"
        title="Open Login Menu"
        aria-controls="header-nav-login-mobile-modal"
        aria-expanded="false"
        aria-label="Open Login Menu"
            >
        <span class="f300 f400-m f300-l ">Login</span>
        <span class="rotate-caret ml300" >
                        <svg
        class="h400 h350-l"
                height="10"
        role="img"
        viewBox="0 0 320 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            >
                <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
    </svg>
        </span>
    </button>
    <div
        id="header-nav-login-mobile-modal"
        class="dn"
            >
        <div class="login-modal pointer-events-all absolute-l bg--neutral-0-l mt400-l pl600 pl0-l pb450 pb0-l right0-l w-100p w425-l">
            <a
    aria-label="Sprout Social Login"
    class="c--text-inverse c--text-l flex fw-bold-l hover-bg--neutral-200-l hover-no-underline items-center justify-between py350 pa400-l w-100p"
    href="https://app.sproutsocial.com/dashboard/"
    rel="noopener noreferrer"
    target="_blank"
    title="Sprout Social Login"
>
    <div class="flex items-center">
        
<svg 
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
>
    <path d="M9 3a4.8 4.8 0 0 0-4.8 4.8v8.9a.3.3 0 0 0 .5.2l2.6-2.6h3.4a4.8 4.8 0 0 0 4.8-4.8V3z" fill="#5ec85f"></path>
    <path fill="#1da554" d="M7.3 14.3H5l1.5.9 1-1z"></path>
    <path fill="#34b45a" d="M15.5 3H9v6.5L15.5 3z"></path>
    <path d="M9 3a4.8 4.8 0 0 0-4.8 4.8v6.5L9 9.5z" fill="#1da554"></path>
    <path fill="#79da6c" d="M15.5 3L9 9.5h6.5V3z"></path>
</svg>

        <span class="f300 f400-m f300-l  ml300">Sprout Social<span class="screenreader"> Login</span></span>
    </div>
                <svg
        class="dn dib-l"
                height="16"
        role="img"
        viewBox="0 0 256 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                title="Sprout Social Login"
        aria-labelledby="fa_angle_right_1917006345"
            >
                <title id="fa_angle_right_1917006345">Sprout Social Login</title>
                <path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
    </svg>
</a>

            <a
    aria-label="Employee Advocacy Login"
    class="c--text-inverse c--text-l flex fw-bold-l hover-bg--neutral-200-l hover-no-underline items-center justify-between py350 pa400-l w-100p"
    href="https://advocacy.sproutsocial.com/login"
    rel="noopener noreferrer"
    target="_blank"
    title="Employee Advocacy Login"
>
    <div class="flex items-center">
        
<svg width="20" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.6 74" xml:space="preserve">
    <path fill="#0B968F" d="M28.7 32.9c4.5 0 8.2-3.7 8.2-8.2s-3.7-8.2-8.2-8.2-8.2 3.7-8.2 8.2 3.6 8.2 8.2 8.2zM51.3 0C45.6 0 41 4.6 41 10.3s4.6 10.3 10.3 10.3c5.7-.1 10.2-4.7 10.2-10.4C61.4 4.6 56.9 0 51.3 0zm0 53.4c-5.7-.1-10.3 4.5-10.4 10.2S45.4 73.9 51.1 74h.2c5.7-.1 10.2-4.7 10.2-10.4-.1-5.6-4.6-10.1-10.2-10.2zm0-26.7C45.6 26.7 41 31.3 41 37c0 5.7 4.6 10.3 10.3 10.3 5.7 0 10.3-4.6 10.3-10.3 0-5.7-4.6-10.3-10.3-10.3zM28.7 57.6c4.5 0 8.2-3.7 8.2-8.2s-3.7-8.2-8.2-8.2c-4.5 0-8.2 3.7-8.2 8.2s3.6 8.2 8.2 8.2zM8.1 45.3c4.5.1 8.3-3.6 8.3-8.1.1-4.5-3.6-8.3-8.1-8.3h-.2c-4.5 0-8.1 3.7-8.1 8.2 0 4.5 3.7 8.1 8.1 8.2z"/>
</svg>

        <span class="f300 f400-m f300-l  ml300">Employee Advocacy<span class="screenreader"> Login</span></span>
    </div>
                <svg
        class="dn dib-l"
                height="16"
        role="img"
        viewBox="0 0 256 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                title="Employee Advocacy Login"
        aria-labelledby="fa_angle_right_1771810387"
            >
                <title id="fa_angle_right_1771810387">Employee Advocacy Login</title>
                <path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
    </svg>
</a>
        </div>
    </div>
</div>


                
                                    <div class="dn-l">
                        <div class=" f300  bg--blue-1100 bg--neutral-0-l mt-auto mt0-l w-100p w-auto-l fixed static-l bottom0 left0">
                                                    <a class="f300  button bg--primary c--neutral-0 hover-bg--primary-hover interaction--hover hover-no-underline px350 button-reset py400  py300-l db w100p-ns fw-bold tc js-track__topNavCTA" href="/pricing/" >
                                <span>Start your free trial</span>
                            </a>
                                                </div>
                    </div>
                            </div>
        </div>
    </nav>
                    </div>
    </header>

            <div class="b--neutral-200 bb dn-l dn-p flex items-center pl450">
                        <svg
        class="c--text-dark square450 square-auto-ns"
                height="16"
        role="img"
        viewBox="0 0 512 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            >
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
    </svg>
            <form
                id="header-nav-search-form-mobile"
                action="https://sproutsocial.com/insights"
                class="px200 w-100p"
            >
                <input
        name="s"
    type="text"
    class="b--none js-search-field"
            placeholder="Search Sprout Blog"                                                         />
            </form>
                            <button class="button-reset bg--blue-1000 c--text-inverse f400 fw-bold px500 py400 js-filter-open" data-a11y-dialog-show="nav-filter" >
                    Filter
                </button>
                    </div>
    
<main id="content" class="Main Main--hasSticky site-main">

<article class="Post">

	<header><div class="bg--neutral-100 py675 mb500-l"><div class="mw900 mx-auto w-100p"><div class="flex flex-row-l flex-column items-center-l justify-between-l"><div class="mw-75p-m mx-auto-m py600 w-100p dn-l db px450 px0-m"><div><img
                                        alt=""
                                        class="w-100p"
                                        src="https://media.sproutsocial.com/uploads/2023/10/Business-Intelligence-New-Hub-final.png"
                                        width="1564"
                                        height="885"
                                        loading="eager"
                                    /></div></div><div class="mw-41p-l mw-75p-m mx-auto-m w-100p px350-l px450 px0-m"><p class="f300 fw-bold pb400">Business Intelligence</p><h1
    class="fw-extrabold f700-m f800-l "
        class="fw-extrabold f700-m f800-l "
    style=""
>
    Business intelligence: What it is and steps to help you build your strategy
</h1><div><p class="mx0"></p></div><div class="flex items-center"><svg
        class=" db-ns ml300 mr300 mt0"
                height="16"
        role="img"
        viewBox="0 0 512 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            ><path fill="currentColor" d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path></svg><p class="fw-bold"><span class="screenreader">Reading time&nbsp;</span>11 minutes
                                    </p><svg
        class="db-ns ml500 mr300 mt0"
                height="14"
        role="img"
        viewBox="0 0 448 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            ><path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path></svg><p class="fw-bold"><span class="screenreader">Published on&nbsp;</span>November 1, 2023
                                </p></div></div><div class="mw-50p-l mw-66p-m mx-auto-m pt0-l pt650 w-100p db-l dn"><div class=" px350-l px450"><img
                                        alt=""
                                        class="w-100p"
                                        src="https://media.sproutsocial.com/uploads/2023/10/Business-Intelligence-New-Hub-final.png"
                                        width="1564"
                                        height="885"
                                        loading="eager"
                                    /></div></div></div></div></div></header>
<div class="dn-l mb450 sticky-ns left0-ns right0-ns bw600 z4 bg--background bb bt bt-m b--neutral-200 w-100p mt0-m js-sticky-nav">
	<nav class="mw900 mx-auto py400 overflow-auto">
		<ul class="flex justify-start-m list pl500">
							<li class="mt0">
					<a href="#what" class="wsnw pr500 f400 c--new-blue-1000 underline">
						What is business intelligence? 
					</a>
				</li>
                							<li class="mt0">
					<a href="#benefits" class="wsnw pr500 f400 c--new-blue-1000 underline">
						Benefits of using business intelligence
					</a>
				</li>
                							<li class="mt0">
					<a href="#create" class="wsnw pr500 f400 c--new-blue-1000 underline">
						How to create a business intelligence strategy
					</a>
				</li>
                							<li class="mt0">
					<a href="#look" class="wsnw pr500 f400 c--new-blue-1000 underline">
						What to look for in a business intelligence solution
					</a>
				</li>
                							<li class="mt0">
					<a href="#future" class="wsnw pr500 f400 c--new-blue-1000 underline">
						What does the future of business intelligence look like?
					</a>
				</li>
                                    <li class="mt0">
                        <a href="#additional-resources" class="wsnw pr500 f400 c--new-blue-1000 underline">
                            Latest in Business Intelligence
                        </a>
                    </li>
                					</ul>
	</nav>
</div>

<div class="flex-l mw900 mx-auto w-100p">
    <div class="mw-75p-l px450 px350-l w-100p">
                <div class="flex-l ">
            <div class="dn db-l dn-p mw400 px350 relative w-100p">
                <div class="mt0-l my500 sticky-l top800-l">
                                            <h2 class="f400 mb350">Table of Contents</h2>
                        <div class="Post-navigation">
                            <nav class="overflow-auto">
                                <ul class="list pa0 mt0">
                                                                            <li class="db">
                                            <a href="#what" class="db f200 is-active">
                                                What is business intelligence? 
                                            </a>
                                        </li>
                                                                                                                                                            <li class="db">
                                            <a href="#benefits" class="db f200 ">
                                                Benefits of using business intelligence
                                            </a>
                                        </li>
                                                                                                                                                            <li class="db">
                                            <a href="#create" class="db f200 ">
                                                How to create a business intelligence strategy
                                            </a>
                                        </li>
                                                                                                                                                            <li class="db">
                                            <a href="#look" class="db f200 ">
                                                What to look for in a business intelligence solution
                                            </a>
                                        </li>
                                                                                                                                                            <li class="db">
                                            <a href="#future" class="db f200 ">
                                                What does the future of business intelligence look like?
                                            </a>
                                        </li>
                                                                                                                            <li class="db">
                                                <a href="#additional-resources" class="db f200">
                                                                                                        Latest in Business Intelligence
                                                                                                    </a>
                                            </li>
                                                                                                            </ul>
                            </nav>
                        </div>
                                    </div>
            </div>
            <div class="mw-83p-m mx-auto-m mw600-l px350 w-100p">
                <div class="Post-content">
                                        
                    
                    <p>It’s no secret that we live in a data-driven world. And one of the keys of running an effective business is how well your company uses data. This is where business intelligence comes in.</p>
<p>Businesses using data in a way that paints a holistic picture of their company’s performance will undoubtedly outpace companies that don’t. And business intelligence provides the paint, paintbrush and canvas you need to create that picture.</p>
<p>But what is business intelligence? In this article, we’ll answer that question and give you strategies and tools to consider adopting.</p>
<section id="what">
<h2>What is business intelligence?</h2>
<p>Business intelligence (BI) is the process of collecting and analyzing internal and external company data to empower more informed and confident decision-making, and the strategies involved in understanding and using that data.</p>
<p>Business intelligence involves many processes. But to keep it simple, BI tools pull company, consumer and competitor data (and beyond) into easily digestible reports and data visualizations. This gives companies a 360-degree view of their business, which helps them create better benchmarks, set smarter goals and make more data-backed decisions.</p>
<p><img class="db mx-auto" src="https://media.sproutsocial.com/uploads/2023/10/Question-Callout-Template-1024x1024.png" alt="A data visualization that says, &quot;What is business intelligence? Business intelligence (BI) is the process of collecting and analyzing internal and external company data to empower more informed and confident decision making, and the strategies involved in understanding and using that data.&quot;" width="600" height="600" /></p>
<p>BI used to be a domain reserved mostly for IT and technical teams. But modern BI tools are increasingly easy to use across all departments. For example, social listening tools can uncover <a href="https://sproutsocial.com/insights/marketing-business-intelligence/">marketing business intelligence</a> that is valuable beyond social alone. Think: surfacing social media conversations about your products, gauging digital audience sentiment about your company, or determining a brand’s social share of voice.</p>
</section>
<section id="benefits">
<h2>Benefits of using business intelligence</h2>
<p>Today, data is like gold; the digital space is your goldmine. It’s no wonder that two-thirds (67%) of business leaders say their company currently uses BI software, according to <a href="https://sproutsocial.com/insights/data/harris-insights-report-2023/">The 2023 State of Social Media report</a>.</p>
<p>The takeaway? If your company doesn’t have a business intelligence strategy and the tools to power it, you’re already falling behind.</p>
<p><img class="db mx-auto" src="https://media.sproutsocial.com/uploads/2023/10/Data-Viz_-Stat-Call-Out-Increase-1024x1024.png" alt="A data visualization with a large 67% on it and text that says, &quot;Business leaders who say their company currently uses business intelligence software,&quot; cited from the 2023 State of Social Media report." width="600" height="600" /></p>
<p>Let’s get into four specific ways business intelligence can help your company grow and improve.</p>
<h3>Sharpen your competitive strategy</h3>
<p>Gathering <a href="https://sproutsocial.com/insights/competitive-intelligence/">competitive intelligence</a> is critical to getting an accurate view of your brand health—and what you need to change.</p>
<p>Business intelligence sheds light on what competitors are doing, how you stand out in your industry and product gaps or feedback you need to address. Think, where your <a href="https://sproutsocial.com/insights/share-of-voice/">share of voice</a> is compared to your competitors, or what pain points customers face with competitor products that your product solves.</p>
<p>With the right tools, you can get an up-close view of your competitors’ performance, without having to sift through social feeds or reviews manually. For example, Sprout’s Competitor Analysis Listening Topic uses social data to unearth critical insights about your competitors’ social performance, their share of voice and audience sentiment. All of which can inform decisions around marketing, pricing and more.</p>
<p><img class="db mx-auto" src="https://media.sproutsocial.com/uploads/2023/06/PI_Listening_Competitive_Analysis_Performance-1024x624.png" alt="Sprout Social Listening Dashboard showing a circular graph that plots out a brand's share of voice versus several competitors." width="600" height="366" /></p>
<h3>Establish more accurate benchmarks</h3>
<p>Benchmarking helps you set goalposts for your performance to ensure you’re on track. But you can’t conduct <a href="https://sproutsocial.com/insights/competitive-benchmark/">competitive benchmarking</a> in the dark.</p>
<p>Business intelligence provides context for your benchmarks by empowering you to look not only at your company’s—or competitors’—current performance, but also past performance. This gives you the full picture of your performance, how that performance positions you in your industry and what goals you must set and aim for to grow.</p>
<p>For example, comparing your past and current performance data enables you to set informed, realistic goals based on how you’ve been performing, and stretch goals based on where you go. Or, think about <a href="https://sproutsocial.com/insights/social-media-benchmarks-by-industry/">social media benchmarks</a>: these are crucial to ensuring your channels, awareness, social presence and engagement grow in a healthy way.</p>
<h3>Eliminate guesswork</h3>
<p>Long-term business success requires more than just good instincts or guessing. A business intelligence strategy enables you to make confident decisions based on rich, cross-functional data—not just feelings. Plus, data-backed reasoning helps you secure <a href="https://sproutsocial.com/insights/marketing-budget/">budget</a> and buy in where you need it.</p>
<p>Take the question, “How do people feel about our brand?” Teams can guess and provide a qualitative answer based on customer comments or emails. But a <a href="https://sproutsocial.com/insights/sentiment-analysis-tools/">sentiment analysis software</a> provides quantitative proof about how your customers feel and reveals where dips and peaks in sentiment may be coming from.</p>
<p><img class="db mx-auto" src="https://media.sproutsocial.com/uploads/2023/09/sentiment-1024x624.png" alt="A screenshot of the sentiment summary in Sprout's social listening solution. In the middle of the report is a chart that shows how much positive and negative sentiment there is for the brand. On the right side of the report are messages and their assigned sentiment type. This empowers you to explore what messages and customer feedback is impacting your brand's sentiment." width="600" height="366" /></p>
<h3>Improve ROI</h3>
<p>Business intelligence improves ROI by helping you understand whether or not you’re spending money and time effectively. It also helps you surface what areas of your business or strategy need more, or less, resources.</p>
<p>Let’s use <a href="https://sproutsocial.com/insights/social-media-roi/">social media ROI</a> as an example. With social budgets already thin, you want to ensure your dollars drive results. Analyzing cost-per-click and conversion data ensures you can iterate on ads to make them more effective, and avoid wasting money on creative that doesn’t resonate.</p>
</section>
<section id="create">
<h2>How to create a business intelligence strategy</h2>
<p>Now it’s time to reap the benefits we just discussed. To start informing your decisions with business intelligence, you need a business intelligence strategy.</p>
<p>Let’s dive into some steps to consider when creating your strategy.</p>
<h3>Step 1. Form a business intelligence team</h3>
<p>This may be tackled in different ways by different businesses. Enterprise businesses may have the budget to hire team members dedicated to analyzing business intelligence. This is already happening in the marketing space: 53% of business leaders say their companies currently support social media data analysis by hiring new staff to collect and analyze those social insights and data, according to The 2023 State of Social Media report.</p>
<p><img class="db mx-auto" src="https://media.sproutsocial.com/uploads/2023/10/Data-Viz_-Stat-Call-Out-Increase-2-1024x1024.png" alt="A data visualization that says, &quot;Percentage of business leaders who say their companies support social media data analysis by hiring new staff to collect and analyze those social insights and data,&quot; followed by a large 53% next to a smiley face icon. The data is cited to the 2023 State of Social Media report." width="600" height="600" /></p>
<p>But forming a BI team can also involve choosing cross-org representatives to come together and share knowledge in a formal way. In fact, 56% of business leaders say that greater collaboration between departments would make it easier to demonstrate the impact of social data and insights on a company’s bottom line, according to The 2023 State of Social Media report.</p>
<p><strong>Here are a few things to consider while you build this team:</strong></p>
<ul>
<li>Determine stakeholders across teams and leadership.</li>
<li>Consider any barriers to access, such as business intelligence tools your company uses—or will use—that aren’t self-service, or require training.</li>
<li>Talk to other team leaders. Discuss how they gather data and what they want out of a business intelligence strategy.</li>
<li>Assess the scope of your business intelligence team’s efforts. Will it include competitive intelligence? Customer intelligence? Internal operations?</li>
<li>Determine what questions leadership often has that your business intelligence team can help answer.</li>
<li>Decide whether you can make do with an internal team, or whether you need to hire staff, or talk to consultants, with business intelligence expertise.</li>
<li>Ask yourself how you will collect and analyze business intelligence in a go-to source of truth. Think: a Tableau dashboard that visualizes cross-company data.</li>
</ul>
<p>Once you’ve considered these factors, you can establish specific roles, create roadmaps, develop your meeting cadence and decide how to share insights.</p>
<h3>Step 2. Understand your goals</h3>
<p>There are two key parts to this. One is knowing your business goals to assess where additional business intelligence is needed.</p>
<p>But you also need to know what your goals are for BI itself. What questions do you want to answer with BI? Create better benchmarks? Streamline operations? Understand your competitive standing? What areas do you want to improve decision-making in?</p>
<p>Knowing what you want from your BI strategy is like laying train tracks—you decide which directions you want to go, and the tracks you lay will guide the resources, tools and integrations you need.</p>
<h3>Step 3. Identify stakeholders</h3>
<p>This can span multiple departments. For example, connect with IT stakeholders to ensure you get access to the data you need while staying secure. If you need new business intelligence tools, who do you need to connect with to build a business case for investing in them?</p>
<p>You should also identify who you’ll be sharing findings with. Which leaders will need and want to see the insights your team surfaces?</p>
<p>Once you identify who needs to be involved, you can start mapping out a timeline to establish when you want your strategy to launch, and what steps are needed to make that happen.</p>
<h3>Step 4. Select a business intelligence tool</h3>
<p>BI tools can be as simple or complex as you need or want them to be. The business intelligence tools you choose will depend on your company and needs.</p>
<p>There are many BI tools out there. For example, Domo caters to enterprise-level companies. Audiense is focused on digging into audience and ad campaign data. And Sprout Social uncovers business insights through the power of social data, social listening and dozens of integrations.</p>
<p>We’ll get into specific features to look for in an ideal BI tool below. But once we do, check out these <a href="https://sproutsocial.com/insights/business-intelligence-tools/">15 business intelligence tools</a> to help make your final decision.</p>
<h3>Step 5. Collect data from multiple sources</h3>
<p>BI should funnel in data across multiple corners and departments in your business. This is what makes it truly cross-functional, and valuable for your overall business decisions.</p>
<p>Identify which data sources you want to pull data from. Think: social media analytics, customer service channels, email and website data hubs, CRM systems, etc. Then, determine which BI tools will enable you to collect, analyze and report on all of those sources.</p>
<h3>Step 6. Uncover trends</h3>
<p>This is a core use case of business intelligence. And it’s only growing in popularity—97% of business leaders agree that the use of social data to understand market trends will increase over the next three years, according to The 2023 State of Social Media report.</p>
<p><img class="db mx-auto" src="https://media.sproutsocial.com/uploads/2023/10/Data-Viz_-Stat-Call-Out-Increase-3-1024x1024.png" alt="A data visualization that reads, &quot;97% of business leaders agree that the use of social data to understand market trends will increase over the next three years,&quot; which is cited from The 2023 State of Social Media report." width="600" height="600" /></p>
<p>Discovering trends in data can help any department be proactive and informed. For example, when you hear <a href="https://sproutsocial.com/insights/social-media-trends/">social media trends</a>, your mind probably goes to TikTok dances or meme formats. But there are trends within your social data that reveal important information about your customers, social strategy and even your brand health.</p>
<p>The Word Cloud in Sprout’s <a href="https://sproutsocial.com/insights/social-media-listening/">social listening</a> solution is a great example. It visualizes the most common keywords people use when discussing your brand, product and more. Trends like a new keyword on the rise can clue you into everything from a product pain point, a brewing brand crisis or an exciting news story you should explore.</p>
<p><img class="db mx-auto" src="https://media.sproutsocial.com/uploads/2023/05/wordcloud-copy-1024x624.png" alt="A screenshot of the Sprout Word Cloud that shows popular keywords mentioned around a topic using Sprout's social listening tool." width="600" height="366" /></p>
<h3>Step 7. Use data visualizations to present your findings</h3>
<p>A dense spreadsheet isn’t the most effective way to present insights. But adding in <a href="https://sproutsocial.com/insights/data-visualization/">data visualizations</a> packages your data and findings in a clear, straightforward visual medium. This makes data more digestible for you and your stakeholders, and easier to put into practice.</p>
<p>Many business intelligence tools have built-in data visualization capabilities. For example, all of Sprout’s reports—from Social Listening to custom or pre-built reports—include data visualizations. Sprout’s Google Analytics report maps social activity to activity on your company’s website so teams can demonstrate social’s business impact.</p>
<p><img class="db mx-auto" src="https://media.sproutsocial.com/uploads/2023/09/GoogleAnalytics-1024x702.png" alt="A screenshot of the Google Analytics report in Sprout Social where you can connect website activity by social network." width="600" height="411" /></p>
<p><strong>Pro tip:</strong> While data visualizations are helpful, you must use <a href="https://sproutsocial.com/insights/storytelling-with-data/">data storytelling</a> to transform your insights into actionable takeaways. Take time to present not only data visualizations but also written summaries and explanations translating those visuals into next steps for stakeholders.</p>
<h3>Step 8. Take action on insights</h3>
<p>It’s one thing to gather insights from business intelligence. But if you don’t use them, you won’t reap the benefits of your data. Ensure that you have a game plan for putting your insights into action.</p>
<p>Perhaps that’s communicating and working with leaders on other teams. Or perhaps it’s putting time on a calendar for yourself and stakeholders to make those changes, faster.</p>
<p>This could also be a roadmap detailing larger, data-informed changes you want to make, like new products, features, or a new social strategy.</p>
</section>
<section id="look">
<h2>What to look for in a business intelligence solution</h2>
<p>You’ve created a team and a strategy. The next step is finding the right business intelligence tool for you.</p>
<p>Here are a few capabilities to look for in your search.</p>
<h3>Ability to connect with multiple data sources</h3>
<p>The beauty of BI is that it synthesizes data across different areas of your org, and outside of it, to paint a fuller picture of company performance—and highlight opportunities for improvement.</p>
<p>Ensure the BI tool you choose can integrate with all of the data sources you need it to. For example, Sprout Social integrates with tools across the ecommerce, customer care, social and website analytics landscape and more to give you a holistic view of your business, and deeper data capabilities.</p>
<p>For example, our Tableau integration enables you to create a true BI dashboard consisting of easy-to-understand data visualizations.</p>
<p><img class="db mx-auto" src="https://media.sproutsocial.com/uploads/2023/07/SproutTableau-1024x624.png" alt="A screenshot of a Tableau dashboard with data from Sprout Social incorporated." width="600" height="366" /></p>
<p>And our Salesforce integration enables you to enrich your CRM with social data from Sprout. This empowers Salesforce users to deliver exceptional customer experiences that drive revenue, grow and retain a loyal customer base, and strengthen brand equity.</p>
<p><img class="db mx-auto" src="https://media.sproutsocial.com/uploads/2023/10/Salesforce-integration-1024x657.png" alt="A screenshot showing Sprout social messages appearing in Salesforce through Sprout's Salesforce integration." width="600" height="385" /></p>
<h3>Incorporates a user-friendly UI/UX</h3>
<p>The goal of BI is to make insights easier to gather and grasp. So your tool should have a user-friendly and easy-to-learn UI and UX.</p>
<p>For example, ideally you should pick a self-service BI tool. This breaks down silos by enabling multiple teams to pull reports and insights they need, and to create an accessible source of truth for your data.</p>
<p>Your tool should also include data visualization capabilities, and the ability to create focused reports. This helps you present data in a way that’s easy to digest, tells a clear story and is easy to understand when used cross-functionally.</p>
<p>Sprout, for example, <a href="https://investors.sproutsocial.com/news/news-details/2023/Sprout-Social-Recognized-by-G2s-2023-Best-Software-Awards-for-the-Seventh-Consecutive-Year/default.aspx">has a reputation for being easy to learn</a>. And we provide many resources and support to help you as you go. Sprout provides intuitive reporting capabilities with clear data visualizations automatically produced for you, streamlining your efforts and getting you to actionable insights, faster.</p>
<h3>Leverages AI</h3>
<p>AI will only become a more important feature to consider when choosing tools. Prioritizing tools with AI capabilities can help ensure your team spends less time manually sorting through data and more time analyzing critical insights.</p>
<p>Sprout’s AI and automation capabilities make teams more efficient with features like AI-powered listening query suggestions. Through a partnership with OpenAI, this feature suggests keywords for Listening queries, enabling you to build better searches and uncover important information faster.</p>
<p><img class="db mx-auto" src="https://media.sproutsocial.com/uploads/2023/10/Screenshot-2023-10-26-at-12.43.05-PM-1024x751.png" alt="A screenshot of Queries by AI Assist in Sprout where AI suggests keywords to add to your social listening query." width="600" height="440" /></p>
<h3>Prioritizes security</h3>
<p>Data security and governance is crucial for any BI tool or process you’re considering.</p>
<p>Whether you’re in a highly regulated industry or not, choose tools that prioritize security and protect sensitive data from breaches, leaks and corruption—and protect you from a brand crisis.</p>
</section>
<section id="future">
<h2>What does the future of business intelligence look like?</h2>
<p>From data marketplaces to machine learning, the future of business intelligence is full of exciting possibilities.</p>
<p>Here are two of the key predictions we have regarding the future of BI, and how it might impact your work moving forward.</p>
<h3>Social media data will become more integrated into business intelligence</h3>
<p>Social media intelligence is business intelligence. And while “social media” is in its name, the data you glean from social has wide applications that extend far beyond your digital channels and marketing. In fact, 76% of marketers agree that their team’s social insights inform other departments, according to the Sprout Social Index™. And this is a trend we anticipate will continue.</p>
<p>Using a social media marketing tool like Sprout that connects with multiple sources of business intelligence, is a prime way to connect social with other business data sources.</p>
<h3>AI and automation will rule</h3>
<p>AI is not just a passing fad. It’s becoming a key part of any tool and process you use. And according to the Index, 81% of marketers say AI has already positively impacted their work.</p>
<p>But AI will be important <a href="https://sproutsocial.com/insights/ai-marketing/">beyond marketing</a>. 87% of business leaders agree that they expect an increase in their companies’ AI/ML investments over the next three years, and 96% of business leaders agree that AI and ML can help companies significantly improve decision-making processes.</p>
<p>In short, prioritize AI in the BI tools you choose.</p>
<h2>Work smarter: Tap into business intelligence</h2>
<p>Business intelligence isn’t a nice-to-have—it’s a must-use resource if you want to keep up with and out-pace competitors.</p>
<p>Evolve your analysis and reporting strategy by getting smarter with your data. As we mentioned above, we anticipate social data will be a much bigger part of business intelligence and reporting in general. Step into the future of data now, and lean on social for a more holistic view of brand health and performance.</p>
<p>Read more about how to get your entire team access to <a href="https://sproutsocial.com/insights/social-business-intelligence/">social business intelligence</a>, and why it matters.</p>
</section>

                                                                            </div>

                <footer class="pt500 dn-p">
                                        <div class="mw900 mx-auto w-100p">
                        <div class="flex w-100p">
                            <div class="pr300 pt200">
                                            <svg
        class=""
                height="16"
        role="img"
        viewBox="0 0 512 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            >
                <path fill="currentColor" d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"></path>
    </svg>
                            </div>
                            <span class="screenreader">Categories</span>
<ul class="flex flex-wrap items-center list pl0 mt-400 mt0-l">
                        
                    <li class="mt0 px300 py400 py0-l pb200-l">
            <a
    href="https://sproutsocial.com/insights/competitive-insights/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    >
    Competitive Strategies
</a>
        </li>
            </ul>
                        </div>

                                                                        
                    </div>
                    
                    
                                    </footer>
            </div>
        </div>
    </div>
        <div class="mw-83p-m mw-25p-l mx-auto-m px450 px350-l relative w-100p dn-p">
                            <div class="dn db-l mb600 sticky-l">
                <div
            id="post-cta-sidebar"            class="sticky-l top800-l"
        ><aside class="bg--neutral-100"><a href="https://sproutsocial.com/trial/"
                       class="db"
                       data-ctatitle="[Right Rail] Social Analytics &#8211; Trial"
                    ><img
        class="db h-auto mw-100p fit-contain"    alt="[Right Rail] Social Analytics &#8211; Trial"
        src="https://media.sproutsocial.com/uploads/2022/09/Dark-Background-4.png"
    height="1220"
    width="800"
                                                            loading="lazy"    /></a></aside></div>                            </div>
                    </div>
</div>


    <section id="additional-resources" class="mt600">
        <div class="mw900 mw650-m mx-auto">
            <div class="flex flex-wrap px450 px350-l">
                <h2 class="f700">Additional resources for Business Intelligence</h2>
            </div>
                            <div class="flex flex-wrap js-load-more-container" >
                                    <div class="mw-25p-l mw-50p-m px450 px350-l mt400">
                        <article
        id="postcard-178585-96656377"
        class="w-100p relative"
        aria-labelledby="title-178585-96656377"
    ><div class=""><div class="w-100p "><a
                        class="db"
                        href="https://sproutsocial.com/insights/business-intelligence/"
                        aria-hidden="true"
                        tabindex="-1"
                                            ><img
        class="ba b--neutral-200 db w-100p h-100p fit-cover aspect-ratio-video"    alt=""
        src="https://media.sproutsocial.com/uploads/2023/10/Business-Intelligence-New-Hub-final.png"
    height="885"
    width="1564"
            layout="responsive"                                                loading="eager"    /></a></div><div class="w-100p "><span class="screenreader">Categories</span><ul class="flex flex-wrap items-center list pl0 pt400"><li class="mt0 pb200 pr200"><a
    href="https://sproutsocial.com/insights/competitive-insights/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow">
    Competitive Strategies
</a></li></ul><a href="https://sproutsocial.com/insights/business-intelligence/"
                        class="c--text-dark db fw-bold mt0 w-100p mt400 "
                                            ><p
                            id="title-178585-96656377"
                            class="f700 f600-m f400-l fw-extrabold "
                        >
                            Business intelligence: What it is and steps to help you build your strategy
                        </p></a><div class="f200 pt400"><span><span class="screenreader">Published on&nbsp;</span>November 1, 2023
                            </span><span class="c--neutral-400 dib mx200 mt0" aria-hidden="true"> • </span><span><span class="screenreader">Reading time&nbsp;</span>11 minutes
                            </span></div></div></div></article>                    </div>
                                    <div class="mw-25p-l mw-50p-m px450 px350-l mt400">
                        <article
        id="postcard-178833-1754577693"
        class="w-100p relative"
        aria-labelledby="title-178833-1754577693"
    ><div class=""><div class="w-100p "><a
                        class="db"
                        href="https://sproutsocial.com/insights/social-business-intelligence/"
                        aria-hidden="true"
                        tabindex="-1"
                                            ><img
        class="ba b--neutral-200 db w-100p h-100p fit-cover aspect-ratio-video"    alt=""
        src="https://media.sproutsocial.com/uploads/2021/04/data-science-for-entire-team@2x.jpg"
    height="880"
    width="1560"
            layout="responsive"                                                loading="eager"    /></a></div><div class="w-100p "><span class="screenreader">Categories</span><ul class="flex flex-wrap items-center list pl0 pt400"><li class="mt0 pb200 pr200"><a
    href="https://sproutsocial.com/insights/competitive-insights/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow">
    Competitive Strategies
</a></li></ul><a href="https://sproutsocial.com/insights/social-business-intelligence/"
                        class="c--text-dark db fw-bold mt0 w-100p mt400 "
                                            ><p
                            id="title-178833-1754577693"
                            class="f700 f600-m f400-l fw-extrabold "
                        >
                            Why your entire team needs access to social business intelligence
                        </p></a><div class="f200 pt400"><span><span class="screenreader">Published on&nbsp;</span>November 1, 2023
                            </span><span class="c--neutral-400 dib mx200 mt0" aria-hidden="true"> • </span><span><span class="screenreader">Reading time&nbsp;</span>5 minutes
                            </span></div></div></div></article>                    </div>
                                    <div class="mw-25p-l mw-50p-m px450 px350-l mt400">
                        <article
        id="postcard-175874-271269477"
        class="w-100p relative"
        aria-labelledby="title-175874-271269477"
    ><div class=""><div class="w-100p "><a
                        class="db"
                        href="https://sproutsocial.com/insights/salesforce-social-studio/"
                        aria-hidden="true"
                        tabindex="-1"
                                            ><img
        class="ba b--neutral-200 db w-100p h-100p fit-cover aspect-ratio-video"    alt=""""
        src="https://media.sproutsocial.com/uploads/2023/08/Why-Sprout-is-the-best-alternative-for-Salesforce-Social-Studio-01.svg"
    height="440"
    width="780"
            layout="responsive"                                                loading="eager"    /></a></div><div class="w-100p "><span class="screenreader">Categories</span><ul class="flex flex-wrap items-center list pl0 pt400"><li class="mt0 pb200 pr200"><a
    href="https://sproutsocial.com/insights/customer-care-service/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow">
    Customer Care
</a></li><li class="mt0 pb200 pr200"><a
    href="https://sproutsocial.com/insights/leveling-up/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow">
    Leveling Up
</a></li></ul><a href="https://sproutsocial.com/insights/salesforce-social-studio/"
                        class="c--text-dark db fw-bold mt0 w-100p mt400 "
                                            ><p
                            id="title-175874-271269477"
                            class="f700 f600-m f400-l fw-extrabold "
                        >
                            Why brands transition from Social Studio to Sprout Social
                        </p></a><div class="f200 pt400"><span><span class="screenreader">Published on&nbsp;</span>August 16, 2023
                            </span><span class="c--neutral-400 dib mx200 mt0" aria-hidden="true"> • </span><span><span class="screenreader">Reading time&nbsp;</span>7 minutes
                            </span></div></div></div></article>                    </div>
                                    <div class="mw-25p-l mw-50p-m px450 px350-l mt400">
                        <article
        id="postcard-154684-199050046"
        class="w-100p relative"
        aria-labelledby="title-154684-199050046"
    ><div class=""><div class="w-100p "><a
                        class="db"
                        href="https://sproutsocial.com/insights/business-intelligence-tools/"
                        aria-hidden="true"
                        tabindex="-1"
                                            ><img
        class="ba b--neutral-200 db w-100p h-100p fit-cover aspect-ratio-video"    alt=""
        src="https://media.sproutsocial.com/uploads/2021/09/Business-Intelligence-Tools3.svg"
    height="440"
    width="780"
            layout="responsive"                                                loading="eager"    /></a></div><div class="w-100p "><span class="screenreader">Categories</span><ul class="flex flex-wrap items-center list pl0 pt400"><li class="mt0 pb200 pr200"><a
    href="https://sproutsocial.com/insights/marketing/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow">
    Marketing Disciplines
</a></li><li class="mt0 pb200 pr200"><a
    href="https://sproutsocial.com/insights/analytics/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow">
    Social Media Analytics
</a></li></ul><a href="https://sproutsocial.com/insights/business-intelligence-tools/"
                        class="c--text-dark db fw-bold mt0 w-100p mt400 "
                                            ><p
                            id="title-154684-199050046"
                            class="f700 f600-m f400-l fw-extrabold "
                        >
                            15 business intelligence tools (BI tools) to use in 2023
                        </p></a><div class="f200 pt400"><span><span class="screenreader">Published on&nbsp;</span>August 2, 2023
                            </span><span class="c--neutral-400 dib mx200 mt0" aria-hidden="true"> • </span><span><span class="screenreader">Reading time&nbsp;</span>9 minutes
                            </span></div></div></div></article>                    </div>
                                    <div class="mw-25p-l mw-50p-m px450 px350-l mt400">
                        <article
        id="postcard-173318-1202184450"
        class="w-100p relative"
        aria-labelledby="title-173318-1202184450"
    ><div class=""><div class="w-100p "><a
                        class="db"
                        href="/glossary/multilingual-sentiment/"
                        aria-hidden="true"
                        tabindex="-1"
                                            ><img
        class="ba b--neutral-200 db w-100p h-100p fit-cover aspect-ratio-video"    alt=""
        src="https://media.sproutsocial.com/uploads/2016/05/sprout-social-webinar.png"
    height="460"
    width="720"
            layout="responsive"                                                loading="eager"    /></a></div><div class="w-100p "><span class="screenreader">Categories</span><ul class="flex flex-wrap items-center list pl0 pt400"><li class="mt0 pb200 pr200"><a
    href="/glossary/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow">
    Glossary
</a></li><li class="mt0 pb200 pr200"><a
    href="https://sproutsocial.com/insights/social-media-glossary-category/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow"></a></li></ul><a href="/glossary/multilingual-sentiment/"
                        class="c--text-dark db fw-bold mt0 w-100p mt400 "
                                            ><p
                            id="title-173318-1202184450"
                            class="f700 f600-m f400-l fw-extrabold "
                        >
                            Multilingual sentiment analysis
                        </p></a></div></div></article>                    </div>
                                    <div class="mw-25p-l mw-50p-m px450 px350-l mt400">
                        <article
        id="postcard-173313-388334600"
        class="w-100p relative"
        aria-labelledby="title-173313-388334600"
    ><div class=""><div class="w-100p "><a
                        class="db"
                        href="/glossary/aspect-based-sentiment/"
                        aria-hidden="true"
                        tabindex="-1"
                                            ><img
        class="ba b--neutral-200 db w-100p h-100p fit-cover aspect-ratio-video"    alt=""
        src="https://media.sproutsocial.com/uploads/2016/05/sprout-social-webinar.png"
    height="460"
    width="720"
            layout="responsive"                                                loading="eager"    /></a></div><div class="w-100p "><span class="screenreader">Categories</span><ul class="flex flex-wrap items-center list pl0 pt400"><li class="mt0 pb200 pr200"><a
    href="/glossary/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow">
    Glossary
</a></li><li class="mt0 pb200 pr200"><a
    href="https://sproutsocial.com/insights/social-media-glossary-category/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow"></a></li></ul><a href="/glossary/aspect-based-sentiment/"
                        class="c--text-dark db fw-bold mt0 w-100p mt400 "
                                            ><p
                            id="title-173313-388334600"
                            class="f700 f600-m f400-l fw-extrabold "
                        >
                            Aspect-based sentiment analysis
                        </p></a></div></div></article>                    </div>
                                    <div class="mw-25p-l mw-50p-m px450 px350-l mt400">
                        <article
        id="postcard-173310-220810801"
        class="w-100p relative"
        aria-labelledby="title-173310-220810801"
    ><div class=""><div class="w-100p "><a
                        class="db"
                        href="/glossary/named-entity-recognition/"
                        aria-hidden="true"
                        tabindex="-1"
                                            ><img
        class="ba b--neutral-200 db w-100p h-100p fit-cover aspect-ratio-video"    alt=""
        src="https://media.sproutsocial.com/uploads/2016/05/sprout-social-webinar.png"
    height="460"
    width="720"
            layout="responsive"                                                loading="eager"    /></a></div><div class="w-100p "><span class="screenreader">Categories</span><ul class="flex flex-wrap items-center list pl0 pt400"><li class="mt0 pb200 pr200"><a
    href="/glossary/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow">
    Glossary
</a></li><li class="mt0 pb200 pr200"><a
    href="https://sproutsocial.com/insights/social-media-glossary-category/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow"></a></li></ul><a href="/glossary/named-entity-recognition/"
                        class="c--text-dark db fw-bold mt0 w-100p mt400 "
                                            ><p
                            id="title-173310-220810801"
                            class="f700 f600-m f400-l fw-extrabold "
                        >
                            Named entity recognition
                        </p></a></div></div></article>                    </div>
                                    <div class="mw-25p-l mw-50p-m px450 px350-l mt400">
                        <article
        id="postcard-172284-861039222"
        class="w-100p relative"
        aria-labelledby="title-172284-861039222"
    ><div class=""><div class="w-100p "><a
                        class="db"
                        href="/glossary/semantic-search/"
                        aria-hidden="true"
                        tabindex="-1"
                                            ><img
        class="ba b--neutral-200 db w-100p h-100p fit-cover aspect-ratio-video"    alt=""
        src="https://media.sproutsocial.com/uploads/2016/05/sprout-social-webinar.png"
    height="460"
    width="720"
            layout="responsive"                                                loading="eager"    /></a></div><div class="w-100p "><span class="screenreader">Categories</span><ul class="flex flex-wrap items-center list pl0 pt400"><li class="mt0 pb200 pr200"><a
    href="/glossary/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow">
    Glossary
</a></li><li class="mt0 pb200 pr200"><a
    href="https://sproutsocial.com/insights/social-media-glossary-category/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow"></a></li></ul><a href="/glossary/semantic-search/"
                        class="c--text-dark db fw-bold mt0 w-100p mt400 "
                                            ><p
                            id="title-172284-861039222"
                            class="f700 f600-m f400-l fw-extrabold "
                        >
                            Semantic search
                        </p></a></div></div></article>                    </div>
                                </div>
                            <div class="flex flex-wrap js-load-more-container" hidden>
                                    <div class="mw-25p-l mw-50p-m px450 px350-l mt400">
                        <article
        id="postcard-172282-1628273866"
        class="w-100p relative"
        aria-labelledby="title-172282-1628273866"
    ><div class=""><div class="w-100p "><a
                        class="db"
                        href="/glossary/nlp/"
                        aria-hidden="true"
                        tabindex="-1"
                                            ><img
        class="ba b--neutral-200 db w-100p h-100p fit-cover aspect-ratio-video"    alt=""
        src="https://media.sproutsocial.com/uploads/2016/05/sprout-social-webinar.png"
    height="460"
    width="720"
            layout="responsive"                                                loading="eager"    /></a></div><div class="w-100p "><span class="screenreader">Categories</span><ul class="flex flex-wrap items-center list pl0 pt400"><li class="mt0 pb200 pr200"><a
    href="/glossary/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow">
    Glossary
</a></li><li class="mt0 pb200 pr200"><a
    href="https://sproutsocial.com/insights/social-media-glossary-category/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow"></a></li></ul><a href="/glossary/nlp/"
                        class="c--text-dark db fw-bold mt0 w-100p mt400 "
                                            ><p
                            id="title-172282-1628273866"
                            class="f700 f600-m f400-l fw-extrabold "
                        >
                            Natural language processing
                        </p></a></div></div></article>                    </div>
                                    <div class="mw-25p-l mw-50p-m px450 px350-l mt400">
                        <article
        id="postcard-172188-1038476399"
        class="w-100p relative"
        aria-labelledby="title-172188-1038476399"
    ><div class=""><div class="w-100p "><a
                        class="db"
                        href="/glossary/machine-learning/"
                        aria-hidden="true"
                        tabindex="-1"
                                            ><img
        class="ba b--neutral-200 db w-100p h-100p fit-cover aspect-ratio-video"    alt=""
        src="https://media.sproutsocial.com/uploads/2016/05/sprout-social-webinar.png"
    height="460"
    width="720"
            layout="responsive"                                                loading="eager"    /></a></div><div class="w-100p "><span class="screenreader">Categories</span><ul class="flex flex-wrap items-center list pl0 pt400"><li class="mt0 pb200 pr200"><a
    href="/glossary/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow">
    Glossary
</a></li><li class="mt0 pb200 pr200"><a
    href="https://sproutsocial.com/insights/social-media-glossary-category/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow"></a></li></ul><a href="/glossary/machine-learning/"
                        class="c--text-dark db fw-bold mt0 w-100p mt400 "
                                            ><p
                            id="title-172188-1038476399"
                            class="f700 f600-m f400-l fw-extrabold "
                        >
                            Machine learning
                        </p></a></div></div></article>                    </div>
                                    <div class="mw-25p-l mw-50p-m px450 px350-l mt400">
                        <article
        id="postcard-171907-1764082524"
        class="w-100p relative"
        aria-labelledby="title-171907-1764082524"
    ><div class=""><div class="w-100p "><a
                        class="db"
                        href="/glossary/artificial-intelligence/"
                        aria-hidden="true"
                        tabindex="-1"
                                            ><img
        class="ba b--neutral-200 db w-100p h-100p fit-cover aspect-ratio-video"    alt=""
        src="https://media.sproutsocial.com/uploads/2016/05/sprout-social-webinar.png"
    height="460"
    width="720"
            layout="responsive"                                                loading="eager"    /></a></div><div class="w-100p "><span class="screenreader">Categories</span><ul class="flex flex-wrap items-center list pl0 pt400"><li class="mt0 pb200 pr200"><a
    href="/glossary/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow">
    Glossary
</a></li><li class="mt0 pb200 pr200"><a
    href="https://sproutsocial.com/insights/social-media-glossary-category/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow"></a></li></ul><a href="/glossary/artificial-intelligence/"
                        class="c--text-dark db fw-bold mt0 w-100p mt400 "
                                            ><p
                            id="title-171907-1764082524"
                            class="f700 f600-m f400-l fw-extrabold "
                        >
                            Artificial Intelligence
                        </p></a></div></div></article>                    </div>
                                    <div class="mw-25p-l mw-50p-m px450 px350-l mt400">
                        <article
        id="postcard-162223-1347867592"
        class="w-100p relative"
        aria-labelledby="title-162223-1347867592"
    ><div class=""><div class="w-100p "><a
                        class="db"
                        href="https://sproutsocial.com/insights/social-media-intelligence/"
                        aria-hidden="true"
                        tabindex="-1"
                                            ><img
        class="ba b--neutral-200 db w-100p h-100p fit-cover aspect-ratio-video"    alt=""
        src="https://media.sproutsocial.com/uploads/2022/07/Executive-Thought-Leadership-on-the-Power-of-Social-Data.png"
    height="440"
    width="780"
            layout="responsive"                                                loading="eager"    /></a></div><div class="w-100p "><span class="screenreader">Categories</span><ul class="flex flex-wrap items-center list pl0 pt400"><li class="mt0 pb200 pr200"><a
    href="https://sproutsocial.com/insights/competitive-insights/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow">
    Competitive Strategies
</a></li><li class="mt0 pb200 pr200"><a
    href="https://sproutsocial.com/insights/leadership/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow">
    Leadership
</a></li></ul><a href="https://sproutsocial.com/insights/social-media-intelligence/"
                        class="c--text-dark db fw-bold mt0 w-100p mt400 "
                                            ><p
                            id="title-162223-1347867592"
                            class="f700 f600-m f400-l fw-extrabold "
                        >
                            In bull or bear markets, social media intelligence makes all the difference
                        </p></a><div class="f200 pt400"><span><span class="screenreader">Published on&nbsp;</span>July 6, 2022
                            </span><span class="c--neutral-400 dib mx200 mt0" aria-hidden="true"> • </span><span><span class="screenreader">Reading time&nbsp;</span>6 minutes
                            </span></div></div></div></article>                    </div>
                                    <div class="mw-25p-l mw-50p-m px450 px350-l mt400">
                        <article
        id="postcard-149643-1816485999"
        class="w-100p relative"
        aria-labelledby="title-149643-1816485999"
    ><div class=""><div class="w-100p "><a
                        class="db"
                        href="https://sproutsocial.com/insights/data/future-of-business-intelligence/"
                        aria-hidden="true"
                        tabindex="-1"
                                            ><img
        class="ba b--neutral-200 db w-100p h-100p fit-cover aspect-ratio-video"    alt=""
        src="https://media.sproutsocial.com/uploads/2021/04/Harris-Report-Insights-Image-Exec-Summary@2x.png"
    height="880"
    width="1560"
            layout="responsive"                                                loading="eager"    /></a></div><div class="w-100p "><span class="screenreader">Categories</span><ul class="flex flex-wrap items-center list pl0 pt400"><li class="mt0 pb200 pr200"><a
    href="/insights/data/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow">
    Data Report
</a></li><li class="mt0 pb200 pr200"><a
    href="https://sproutsocial.com/insights/digital-transformation/"
    class="br--x dib f300 fw-bold f200-ns px300 wsnw bg--aqua-200 c--text"
    rel="nofollow">
    Digital Transformation
</a></li></ul><a href="https://sproutsocial.com/insights/data/future-of-business-intelligence/"
                        class="c--text-dark db fw-bold mt0 w-100p mt400 "
                                            ><p
                            id="title-149643-1816485999"
                            class="f700 f600-m f400-l fw-extrabold "
                        >
                            The State of Social Media: After a Year of Transformation, Executives Are All-In on Social
                        </p></a></div></div></article>                    </div>
                                </div>
                    </div>

                        <div class="tc my650 mw900 mx-auto px450">
                    <button class="button mx-auto w400-l w-100p w-70p-m js-hub-load-more">Load More</button>
                </div>
                </section>


</article>

	
</main>

<section id="insights-footer-cta" class="section bg--blue-0 dn-p mt450 mt650-l"><div class="mw900 mx-auto w-100p"><div class="flex flex-column flex-row-ns justify-between mx-auto"><div class="w-100p px450 px350-l mw-50p-l"><div class="db dn-ns mw-41p w-100p mb650"><img
        class="db h-auto mb350"    alt="Sprout Social"
        src="https://media.sproutsocial.com/uploads/sprout-social-logo.svg"
    height="36.65"
    width="184"
            layout="responsive"                                                loading="lazy"    /></div><svg
    class="Device  js-device"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    enable-background="new 0 0 420.3 244.7"    viewBox="0 0 420.3 244.7"
><path d="m377.4 0h-334.4c-6.2 0-11.2 5-11.2 11.2v219c0 6.2 5 11.2 11.2 11.2h334.4c6.2 0 11.2-5 11.2-11.2v-219c0-6.2-5.1-11.2-11.2-11.2z" class="Device--primary"/><path d="m419.2 232.1h-418.1c-.6 0-1.1.5-1.1 1.1v5.8s0 5.7 33.7 5.7h353c33.7 0 33.7-5.7 33.7-5.7v-5.8c-.1-.6-.6-1.1-1.2-1.1z" class="Device--secondary"/><path d="m0 239s0 5.7 33.7 5.7h353c33.7 0 33.7-5.7 33.7-5.7z" class="Device--tertiary"/><image height="977" width="1600" transform="matrix(.2101 0 0 .2101 42.2834 13.7395)" data-href="https://media.sproutsocial.com/uploads/PI_Engagement_Smart_Inbox_Collision_Detection.png"/></svg></div><div class="mw-41p-l px450 px350-l w-100p pr-8p-offset-l"><div class="dn db-ns mw-41p w-100p mt400"><img
        class="db h-auto mb350"    alt="Sprout Social"
        src="https://media.sproutsocial.com/uploads/sprout-social-logo.svg"
    height="36.65"
    width="184"
            layout="responsive"                                                loading="lazy"    /></div><div class="mw-81p w-100p mt450 mt400-ns"><p class="f700 fw-extrabold">
                        Build and grow stronger relationships on social
                    </p><p class="f300 mt450 mt400-ns">
                        Sprout Social helps you understand and reach your audience, engage your community and measure performance with the only all-in-one social media management platform built for connection.
                    </p><div class="mt600 mt500-ns mb500 mb0-ns"><a href="/pricing/" class="button Button--large db dib-l">
                            Try Sprout For Free
                        </a></div></div></div></div></div></section><footer class="SF bg--background relative z1 py600 pt0-ns ff-proxima-nova dn-p b--neutral-200 bt" role="contentinfo"><div class="dn-ns px400 mw900 mx-auto"><a class="db" href="/" title="Sprout Social"><svg class="db" width="45" height="38" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.132 0.197021C15.2813 0.197021 0 15.4895 0 34.3566V97.2088C0 99.2206 2.43318 100.228 3.8573 98.8027L22.3993 80.2549H45.8647C64.718 80.2549 79.9994 64.9624 79.9994 46.0979V0.197021H34.132Z" fill="#2BB656"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.3987 80.2557H5.33008L15.9941 86.6624L22.3987 80.2557Z" fill="#006B40"/><path fill-rule="evenodd" clip-rule="evenodd" d="M79.9992 0.197021H34.1318V46.0979L79.9992 0.197021Z" fill="#0CA750"/><path fill-rule="evenodd" clip-rule="evenodd" d="M34.132 0.197021C15.2813 0.197021 0 15.4921 0 34.3566V80.2549L34.132 46.0979V0.197021Z" fill="#006B40"/><path fill-rule="evenodd" clip-rule="evenodd" d="M79.9992 0.197021L34.1318 46.0979H79.9992V0.197021Z" fill="#75DD66"/></svg><span class="screenreader">Sprout Social Website Home</span></a></div><div class="flex-ns flex-wrap-ns mw900 mx-auto px400 pb600 pt650-l"><div class="mw-50p-ns mw-33p-m mw-16p-l px400-ns w-100p mt600 mt400-ns mt0-l"><h2 class="fw-bold f200">
                    Contact
                </h2><nav class="mt0"><ul class="list ma0 pa0"><li class="mt400 mt200-ns"><button
                                aria-label="Email Us"
                                class="button-reset f200 fw-bold fw-normal-ns underline no-underline-ns hover-underline c--link hover-c--link-dark c--link-subtle-ns hover-c--link-subtle-ns inline-flex items-center pa0"
                                title="Email Us"
                                data-a11y-dialog-show="nav-contact"
                            >
                                Email Us
                            </button></li><li class="mt400 mt200-ns"><a class="db fw-bold fw-normal-ns f200 underline no-underline-ns c--link c--link-subtle-ns hover-c--link-dark hover-c--link-subtle-ns js-sproutphonenumber" href="tel:8668783231" rel="nofollow"><span>1.866.878.3231</span></a></li><li class="dn db-ns mt0 mt200-ns"><a class="db f200 no-underline c--link-subtle hover-c--link-subtle fw-normal" href="/about/#offices">
                                Office Locations
                            </a></li></ul></nav><div class="dn-ns mt400 w-100p"><button class="f200 fw-bold py300 button-reset pa0 js-accordion-button hover-c--neutral-800 flex items-center w-100p" aria-labelledby="-m-footer-dropdown" aria-expanded="false" aria-controls="-m-sublist"><span id="-m-footer-dropdown" class="flex justify-between items-center w-100p"><span class="db">
                                Support
                            </span><span class="rotate-caret ml300 flex items-center"><svg
        class="h400 h350-l px200 fw-extrabold"
                height="14"
        role="img"
        viewBox="0 0 448 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            ><path fill="currentColor" d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"></path></svg></span></span></button><div id="-m-sublist" role="region" hidden><nav class="Summary f200 fw-normal"><ul class="list ma0 pa0"><li class="mt0"><a href="https://support.sproutsocial.com" class="db c--neutral-700 hover-c--neutral-800 py300">
                                        Help Center
                                    </a></li><li class="mt0"><a href="/faq/" class="db c--neutral-700 hover-c--neutral-800 py300">
                                        FAQs
                                    </a></li><li class="mt0"><a href="https://www.sproutsocialstatus.com" class="db c--neutral-700 hover-c--neutral-800 py300">
                                        System Status
                                    </a></li></ul></nav></div></div><div class="dn db-ns mt400"><h2 class="f200 fw-semibold">
                        Support
                    </h2><nav class="mt0"><ul class="list ma0 pa0"><li class="mt200"><a href="https://support.sproutsocial.com" class="db c--link-subtle hover-c--link-subtle fw-normal f200">
                                    Help Center
                                </a></li><li class="mt200"><a href="/faq/" class="db c--link-subtle hover-c--link-subtle fw-normal f200">
                                    FAQs
                                </a></li><li class="mt200"><a href="https://www.sproutsocialstatus.com" class="db c--link-subtle hover-c--link-subtle fw-normal f200">
                                    System Status
                                </a></li></ul></nav></div></div><div class="mw-50p-ns mw-33p-m mw-16p-l px400-ns w-100p"><div class="dn-ns"><button class="f200 fw-bold py300 button-reset pa0 js-accordion-button hover-c--neutral-800 flex items-center w-100p" aria-labelledby="Solutions-m-footer-dropdown1" aria-expanded="false" aria-controls="Solutions-m-sublist1"><span id="Solutions-m-footer-dropdown1" class="flex justify-between items-center w-100p"><span class="db">
                                    Solutions
                                </span><span class="rotate-caret ml300 flex items-center"><svg
        class="h400 h350-l px200 fw-extrabold"
                height="14"
        role="img"
        viewBox="0 0 448 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            ><path fill="currentColor" d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"></path></svg></span></span></button><div id="Solutions-m-sublist1" role="region" hidden><nav class="Summary f200 fw-normal"><ul class="list ma0 pa0"><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/enterprise/"                        >
    Enterprise
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/agencies/"                        >
    Agencies
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/smb/"                        >
    Small and Medium Businesses
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/social-media-management/"                        >
    Social Management
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/social-customer-service/"                        >
    Customer Care
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/advocacy/"                        >
    Advocacy
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/analytics-and-social-listening/"                        >
    Data & Intelligence
    
    </a></li><li class="f200 mt0 "><button class="button-reset db w-100p pa0 js-accordion-button c--neutral-700 hover-c--neutral-800 py300 flex items-center" aria-labelledby="Solutions-m-footer-dropdown8" aria-expanded="false" aria-controls="Solutions-m-sublist8"><span id="Solutions-m-footer-dropdown8" class="flex items-center">
                                                            Industries
                                                        </span><span class="rotate-caret ml300 flex items-center"><svg
        class="h400 h350-l"
                height="10"
        role="img"
        viewBox="0 0 320 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            ><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg></span></button><div id="Solutions-m-sublist8" role="region" hidden><ul class="list ma0 pa0 tl"><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/travel-industry/"                        >
    Travel and Hospitality
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/software-industry/"                        >
    Computer and Software
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/retail-industry/"                        >
    Retail
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/higher-education-industry/"                        >
    Higher Education
    
    </a></li></ul></div></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/premier-success/"                        >
    Premier Success
    
    </a></li></ul></nav></div></div><div class="dn db-ns mt400 mt0-l"><h2 class="f200 fw-semibold">
                            Solutions
                        </h2><nav class="mt0"><ul class="list ma0 pa0"><li class="mt200"><a
                                                href="/enterprise/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Enterprise
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/agencies/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Agencies
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/smb/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Small and Medium Businesses
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/social-media-management/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Social Management
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/social-customer-service/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Customer Care
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/advocacy/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Advocacy
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/analytics-and-social-listening/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Data & Intelligence
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200 "><button class="button-reset db c--neutral-700 hover-c--neutral-800 f200 px0 tl w-100p js-accordion-button flex items-center" aria-labelledby="Solutions-footer-dropdown8" aria-expanded="false" aria-controls="Solutions-sublist8"><span id="Solutions-footer-dropdown8" class="flex items-center">Industries</span><span class="rotate-caret ml300 flex items-center"><svg
        class="h400 h350-l"
                height="10"
        role="img"
        viewBox="0 0 320 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            ><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg></span></button><div id="Solutions-sublist8" role="region" hidden><ul class="list ma0 pa0 tl"><li class="mt200"><a
                                                                    href="/travel-industry/"
                                                                    class="db c--neutral-700 hover-c--neutral-800 f200 "
                                                                                                                                    >
                                                                    Travel and Hospitality
                                                                </a></li><li class="mt200"><a
                                                                    href="/software-industry/"
                                                                    class="db c--neutral-700 hover-c--neutral-800 f200 "
                                                                                                                                    >
                                                                    Computer and Software
                                                                </a></li><li class="mt200"><a
                                                                    href="/retail-industry/"
                                                                    class="db c--neutral-700 hover-c--neutral-800 f200 "
                                                                                                                                    >
                                                                    Retail
                                                                </a></li><li class="mt200"><a
                                                                    href="/higher-education-industry/"
                                                                    class="db c--neutral-700 hover-c--neutral-800 f200 "
                                                                                                                                    >
                                                                    Higher Education
                                                                </a></li></ul></div></li><li class="mt200"><a
                                                href="/premier-success/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Premier Success
                                                <span style="font-size:9px;" class="v-top"></span></a></li></ul></nav></div></div><div class="mw-50p-ns mw-33p-m mw-16p-l px400-ns w-100p"><div class="dn-ns"><button class="f200 fw-bold py300 button-reset pa0 js-accordion-button hover-c--neutral-800 flex items-center w-100p" aria-labelledby="Platform-m-footer-dropdown2" aria-expanded="false" aria-controls="Platform-m-sublist2"><span id="Platform-m-footer-dropdown2" class="flex justify-between items-center w-100p"><span class="db">
                                    Platform
                                </span><span class="rotate-caret ml300 flex items-center"><svg
        class="h400 h350-l px200 fw-extrabold"
                height="14"
        role="img"
        viewBox="0 0 448 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            ><path fill="currentColor" d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"></path></svg></span></span></button><div id="Platform-m-sublist2" role="region" hidden><nav class="Summary f200 fw-normal"><ul class="list ma0 pa0"><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/features/social-media-analytics/"                        >
    Social Analytics
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/features/social-media-engagement/"                        >
    Social Engagement
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/features/social-media-publishing/"                        >
    Social Publishing
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/features/social-media-listening/"                        >
    Social Listening
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/features/social-media-automation/"                        >
    Social Automation
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/features/team-collaboration/"                        >
    Social Collaboration
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/ai/"                        >
    AI & Automation
    
    </a></li></ul></nav></div></div><div class="dn db-ns mt400 mt0-l"><h2 class="f200 fw-semibold">
                            Platform
                        </h2><nav class="mt0"><ul class="list ma0 pa0"><li class="mt200"><a
                                                href="/features/social-media-analytics/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Social Analytics
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/features/social-media-engagement/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Social Engagement
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/features/social-media-publishing/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Social Publishing
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/features/social-media-listening/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Social Listening
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/features/social-media-automation/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Social Automation
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/features/team-collaboration/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Social Collaboration
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/ai/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                AI & Automation
                                                <span style="font-size:9px;" class="v-top"></span></a></li></ul></nav></div></div><div class="mw-50p-ns mw-33p-m mw-16p-l px400-ns w-100p"><div class="dn-ns"><button class="f200 fw-bold py300 button-reset pa0 js-accordion-button hover-c--neutral-800 flex items-center w-100p" aria-labelledby="Integrations-m-footer-dropdown3" aria-expanded="false" aria-controls="Integrations-m-sublist3"><span id="Integrations-m-footer-dropdown3" class="flex justify-between items-center w-100p"><span class="db">
                                    Integrations
                                </span><span class="rotate-caret ml300 flex items-center"><svg
        class="h400 h350-l px200 fw-extrabold"
                height="14"
        role="img"
        viewBox="0 0 448 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            ><path fill="currentColor" d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"></path></svg></span></span></button><div id="Integrations-m-sublist3" role="region" hidden><nav class="Summary f200 fw-normal"><ul class="list ma0 pa0"><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/integrations/facebook/"                        >
    Facebook Management
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/integrations/twitter/"                        >
    Twitter Management
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/integrations/instagram/"                        >
    Instagram Management
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/integrations/linkedin/"                        >
    LinkedIn Management
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/integrations/pinterest/"                        >
    Pinterest Management
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/integrations/tiktok/"                        >
    TikTok Management
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/integrations/youtube/"                        >
    YouTube Management
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/integrations/whatsapp/"                        >
    WhatsApp Management
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/salesforce/"                        >
    Salesforce
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/integrations/"                        >
    All Integrations
    
    </a></li></ul></nav></div></div><div class="dn db-ns mt400 mt0-l"><h2 class="f200 fw-semibold">
                            Integrations
                        </h2><nav class="mt0"><ul class="list ma0 pa0"><li class="mt200"><a
                                                href="/integrations/facebook/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Facebook Management
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/integrations/twitter/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Twitter Management
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/integrations/instagram/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Instagram Management
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/integrations/linkedin/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                LinkedIn Management
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/integrations/pinterest/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Pinterest Management
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/integrations/tiktok/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                TikTok Management
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/integrations/youtube/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                YouTube Management
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/integrations/whatsapp/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                WhatsApp Management
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/salesforce/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Salesforce
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/integrations/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                All Integrations
                                                <span style="font-size:9px;" class="v-top"></span></a></li></ul></nav></div></div><div class="mw-50p-ns mw-33p-m mw-16p-l px400-ns w-100p"><div class="dn-ns"><button class="f200 fw-bold py300 button-reset pa0 js-accordion-button hover-c--neutral-800 flex items-center w-100p" aria-labelledby="Company-m-footer-dropdown4" aria-expanded="false" aria-controls="Company-m-sublist4"><span id="Company-m-footer-dropdown4" class="flex justify-between items-center w-100p"><span class="db">
                                    Company
                                </span><span class="rotate-caret ml300 flex items-center"><svg
        class="h400 h350-l px200 fw-extrabold"
                height="14"
        role="img"
        viewBox="0 0 448 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            ><path fill="currentColor" d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"></path></svg></span></span></button><div id="Company-m-sublist4" role="region" hidden><nav class="Summary f200 fw-normal"><ul class="list ma0 pa0"><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/about/"                        >
    About Sprout
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/pricing/"                        >
    Pricing
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/contact-us/"                        >
    Contact Us
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300 sl_norewrite f200"
         href="/careers/"                        >
    Careers
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/customers/"                        >
    Customers
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300 sl_norewrite f200"
         href="https://investors.sproutsocial.com"                 target="_blank"        >
    Investors
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/sustainability/"                        >
    Sustainability
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/security/"                        >
    Security
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/trust-center/"                        >
    Trust Center
    
    </a></li></ul></nav></div></div><div class="dn db-ns mt400 mt0-l"><h2 class="f200 fw-semibold">
                            Company
                        </h2><nav class="mt0"><ul class="list ma0 pa0"><li class="mt200"><a
                                                href="/about/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                About Sprout
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/pricing/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Pricing
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/contact-us/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Contact Us
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/careers/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 sl_norewrite"
                                                                                                                                            >
                                                Careers
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/customers/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Customers
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="https://investors.sproutsocial.com"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 sl_norewrite"
                                                target="_blank"                                                rel="noopener noreferrer"                                            >
                                                Investors
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/sustainability/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Sustainability
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/security/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Security
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/trust-center/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Trust Center
                                                <span style="font-size:9px;" class="v-top"></span></a></li></ul></nav></div></div><div class="mw-50p-ns mw-33p-m mw-16p-l px400-ns w-100p"><div class="dn-ns"><button class="f200 fw-bold py300 button-reset pa0 js-accordion-button hover-c--neutral-800 flex items-center w-100p" aria-labelledby="Resources-m-footer-dropdown5" aria-expanded="false" aria-controls="Resources-m-sublist5"><span id="Resources-m-footer-dropdown5" class="flex justify-between items-center w-100p"><span class="db">
                                    Resources
                                </span><span class="rotate-caret ml300 flex items-center"><svg
        class="h400 h350-l px200 fw-extrabold"
                height="14"
        role="img"
        viewBox="0 0 448 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            ><path fill="currentColor" d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"></path></svg></span></span></button><div id="Resources-m-sublist5" role="region" hidden><nav class="Summary f200 fw-normal"><ul class="list ma0 pa0"><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/insights/index/"                        >
    The Sprout Social Index
    
    <span style="font-size:9px;" class="v-top">TM</span></a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/insights/"                        >
    Sprout Blog
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300 sl_norewrite f200"
         href="https://community.sproutsocial.com/"                        >
    Arboretum
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300 sl_norewrite f200"
         href="/insights/resources/"                        >
    Resource Center
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300 sl_norewrite f200"
         href="/glossary/"                        >
    Social Media Glossary
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300 sl_norewrite f200"
         href="/partner-directory"                        >
    Agency Partner Directory
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/partnership-program/"                        >
    Affiliate and Referrals
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300 sl_norewrite f200"
         href="https://seeds.sproutsocial.com/brand-assets/"                        >
    Brand Assets
    
    </a></li><li class="f200 mt0 "><button class="button-reset db w-100p pa0 js-accordion-button c--neutral-700 hover-c--neutral-800 py300 flex items-center" aria-labelledby="Resources-m-footer-dropdown9" aria-expanded="false" aria-controls="Resources-m-sublist9"><span id="Resources-m-footer-dropdown9" class="flex items-center">
                                                            Free Social Media Tools
                                                        </span><span class="rotate-caret ml300 flex items-center"><svg
        class="h400 h350-l"
                height="10"
        role="img"
        viewBox="0 0 320 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            ><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg></span></button><div id="Resources-m-sublist9" role="region" hidden><ul class="list ma0 pa0 tl"><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/landscape/"                        >
    Landscape Image Resizer
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/best-times-to-post/"                        >
    Best Times to Post Tool
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/templates/"                        >
    Free Social Media Templates
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/free-tools/"                        >
    All Free Social Media Tools
    
    </a></li></ul></div></li><li class="f200 mt0 "><button class="button-reset db w-100p pa0 js-accordion-button c--neutral-700 hover-c--neutral-800 py300 flex items-center" aria-labelledby="Resources-m-footer-dropdown10" aria-expanded="false" aria-controls="Resources-m-sublist10"><span id="Resources-m-footer-dropdown10" class="flex items-center">
                                                            Social Media Topics
                                                        </span><span class="rotate-caret ml300 flex items-center"><svg
        class="h400 h350-l"
                height="10"
        role="img"
        viewBox="0 0 320 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            ><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg></span></button><div id="Resources-m-sublist10" role="region" hidden><ul class="list ma0 pa0 tl"><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/insights/social-media-scheduling-tools/"                        >
    Social Media Scheduling
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/insights/crisis-communication-examples/"                        >
    Crisis Communications
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/insights/reputation-management/"                        >
    Reputation Management
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/insights/social-media-statistics/"                        >
    Social Media Statistics
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/insights/competitive-analysis/"                        >
    Social Competitive Analysis
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/insights/what-is-employee-advocacy/"                        >
    Employee Advocacy
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/insights/social-media-reporting/"                        >
    Social Media Reporting
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/insights/social-media-roi/"                        >
    Social Media ROI
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/insights/social-media-management/"                        >
    Social Media Management
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/insights/social-media-marketing-strategy/"                        >
    Social Media Marketing
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/insights/social-media-listening/"                        >
    Social Media Listening
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/insights/business-intelligence/"                        >
    Business Intelligence
    
    </a></li><li class="mt0"><a
    class="db c--link-subtle hover-c--link-subtle fw-normal py300  f200"
         href="/insights/social-media-analytics/"                        >
    Social Media Analytics
    
    </a></li></ul></div></li></ul></nav></div></div><div class="dn db-ns mt400 mt0-l"><h2 class="f200 fw-semibold">
                            Resources
                        </h2><nav class="mt0"><ul class="list ma0 pa0"><li class="mt200"><a
                                                href="/insights/index/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                The Sprout Social Index
                                                <span style="font-size:9px;" class="v-top">TM</span></a></li><li class="mt200"><a
                                                href="/insights/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Sprout Blog
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="https://community.sproutsocial.com/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 sl_norewrite"
                                                                                                                                            >
                                                Arboretum
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/insights/resources/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 sl_norewrite"
                                                                                                                                            >
                                                Resource Center
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/glossary/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 sl_norewrite"
                                                                                                                                            >
                                                Social Media Glossary
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/partner-directory"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 sl_norewrite"
                                                                                                                                            >
                                                Agency Partner Directory
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="/partnership-program/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 "
                                                                                                                                            >
                                                Affiliate and Referrals
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200"><a
                                                href="https://seeds.sproutsocial.com/brand-assets/"
                                                class="db c--link-subtle hover-c--link-subtle fw-normal f200 sl_norewrite"
                                                                                                                                            >
                                                Brand Assets
                                                <span style="font-size:9px;" class="v-top"></span></a></li><li class="mt200 "><button class="button-reset db c--neutral-700 hover-c--neutral-800 f200 px0 tl w-100p js-accordion-button flex items-center" aria-labelledby="Resources-footer-dropdown9" aria-expanded="false" aria-controls="Resources-sublist9"><span id="Resources-footer-dropdown9" class="flex items-center">Free Social Media Tools</span><span class="rotate-caret ml300 flex items-center"><svg
        class="h400 h350-l"
                height="10"
        role="img"
        viewBox="0 0 320 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            ><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg></span></button><div id="Resources-sublist9" role="region" hidden><ul class="list ma0 pa0 tl"><li class="mt200"><a
                                                                    href="/landscape/"
                                                                    class="db c--neutral-700 hover-c--neutral-800 f200 "
                                                                                                                                    >
                                                                    Landscape Image Resizer
                                                                </a></li><li class="mt200"><a
                                                                    href="/best-times-to-post/"
                                                                    class="db c--neutral-700 hover-c--neutral-800 f200 "
                                                                                                                                    >
                                                                    Best Times to Post Tool
                                                                </a></li><li class="mt200"><a
                                                                    href="/templates/"
                                                                    class="db c--neutral-700 hover-c--neutral-800 f200 "
                                                                                                                                    >
                                                                    Free Social Media Templates
                                                                </a></li><li class="mt200"><a
                                                                    href="/free-tools/"
                                                                    class="db c--neutral-700 hover-c--neutral-800 f200 "
                                                                                                                                    >
                                                                    All Free Social Media Tools
                                                                </a></li></ul></div></li><li class="mt200 "><button class="button-reset db c--neutral-700 hover-c--neutral-800 f200 px0 tl w-100p js-accordion-button flex items-center" aria-labelledby="Resources-footer-dropdown10" aria-expanded="false" aria-controls="Resources-sublist10"><span id="Resources-footer-dropdown10" class="flex items-center">Social Media Topics</span><span class="rotate-caret ml300 flex items-center"><svg
        class="h400 h350-l"
                height="10"
        role="img"
        viewBox="0 0 320 512"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            ><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg></span></button><div id="Resources-sublist10" role="region" hidden><ul class="list ma0 pa0 tl"><li class="mt200"><a
                                                                    href="/insights/social-media-scheduling-tools/"
                                                                    class="db c--neutral-700 hover-c--neutral-800 f200 "
                                                                                                                                    >
                                                                    Social Media Scheduling
                                                                </a></li><li class="mt200"><a
                                                                    href="/insights/crisis-communication-examples/"
                                                                    class="db c--neutral-700 hover-c--neutral-800 f200 "
                                                                                                                                    >
                                                                    Crisis Communications
                                                                </a></li><li class="mt200"><a
                                                                    href="/insights/reputation-management/"
                                                                    class="db c--neutral-700 hover-c--neutral-800 f200 "
                                                                                                                                    >
                                                                    Reputation Management
                                                                </a></li><li class="mt200"><a
                                                                    href="/insights/social-media-statistics/"
                                                                    class="db c--neutral-700 hover-c--neutral-800 f200 "
                                                                                                                                    >
                                                                    Social Media Statistics
                                                                </a></li><li class="mt200"><a
                                                                    href="/insights/competitive-analysis/"
                                                                    class="db c--neutral-700 hover-c--neutral-800 f200 "
                                                                                                                                    >
                                                                    Social Competitive Analysis
                                                                </a></li><li class="mt200"><a
                                                                    href="/insights/what-is-employee-advocacy/"
                                                                    class="db c--neutral-700 hover-c--neutral-800 f200 "
                                                                                                                                    >
                                                                    Employee Advocacy
                                                                </a></li><li class="mt200"><a
                                                                    href="/insights/social-media-reporting/"
                                                                    class="db c--neutral-700 hover-c--neutral-800 f200 "
                                                                                                                                    >
                                                                    Social Media Reporting
                                                                </a></li><li class="mt200"><a
                                                                    href="/insights/social-media-roi/"
                                                                    class="db c--neutral-700 hover-c--neutral-800 f200 "
                                                                                                                                    >
                                                                    Social Media ROI
                                                                </a></li><li class="mt200"><a
                                                                    href="/insights/social-media-management/"
                                                                    class="db c--neutral-700 hover-c--neutral-800 f200 "
                                                                                                                                    >
                                                                    Social Media Management
                                                                </a></li><li class="mt200"><a
                                                                    href="/insights/social-media-marketing-strategy/"
                                                                    class="db c--neutral-700 hover-c--neutral-800 f200 "
                                                                                                                                    >
                                                                    Social Media Marketing
                                                                </a></li><li class="mt200"><a
                                                                    href="/insights/social-media-listening/"
                                                                    class="db c--neutral-700 hover-c--neutral-800 f200 "
                                                                                                                                    >
                                                                    Social Media Listening
                                                                </a></li><li class="mt200"><a
                                                                    href="/insights/business-intelligence/"
                                                                    class="db c--neutral-700 hover-c--neutral-800 f200 "
                                                                                                                                    >
                                                                    Business Intelligence
                                                                </a></li><li class="mt200"><a
                                                                    href="/insights/social-media-analytics/"
                                                                    class="db c--neutral-700 hover-c--neutral-800 f200 "
                                                                                                                                    >
                                                                    Social Media Analytics
                                                                </a></li></ul></div></li></ul></nav></div></div></div><div class="bt-l b--neutral-200 flex-l items-center-l mw900 mx-auto py600"><div class="px400 w-100p mw-16p-l relative"><button
                        id="languagePicker"
                        type="button"
                        aria-expanded="false"
                        aria-controls="languagePickerOptions"
                        aria-label="Toggle Language picker"
                        class="accordion-trigger button-reset db ma0 pa0 bg-transparent bn flex items-center f300 fw-bold overflow-hidden w-100p w-auto-ns js-accordion-button"
                                            ><div class="db w100 h450" aria-hidden="true"><svg width="14" height="18" fill="currentColor" class="db w-100p h-100p" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm179.3 160h-67.2c-6.7-36.5-17.5-68.8-31.2-94.7 42.9 19 77.7 52.7 98.4 94.7zM248 56c18.6 0 48.6 41.2 63.2 112H184.8C199.4 97.2 229.4 56 248 56zM48 256c0-13.7 1.4-27.1 4-40h77.7c-1 13.1-1.7 26.3-1.7 40s.7 26.9 1.7 40H52c-2.6-12.9-4-26.3-4-40zm20.7 88h67.2c6.7 36.5 17.5 68.8 31.2 94.7-42.9-19-77.7-52.7-98.4-94.7zm67.2-176H68.7c20.7-42 55.5-75.7 98.4-94.7-13.7 25.9-24.5 58.2-31.2 94.7zM248 456c-18.6 0-48.6-41.2-63.2-112h126.5c-14.7 70.8-44.7 112-63.3 112zm70.1-160H177.9c-1.1-12.8-1.9-26-1.9-40s.8-27.2 1.9-40h140.3c1.1 12.8 1.9 26 1.9 40s-.9 27.2-2 40zm10.8 142.7c13.7-25.9 24.4-58.2 31.2-94.7h67.2c-20.7 42-55.5 75.7-98.4 94.7zM366.3 296c1-13.1 1.7-26.3 1.7-40s-.7-26.9-1.7-40H444c2.6 12.9 4 26.3 4 40s-1.4 27.1-4 40h-77.7z"/></svg></div><span class="px300">
                            English
                        </span><div
                            class="db w100 h450 relative rotate-caret"
                                                    ><svg class="db h-100p w-100p" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"/></svg></div></button><ul
                        id="languagePickerOptions"
                        class="list pl0 absolute bg--background b--text-inverse f500 f300-ns c--text-inverse bottom500 shadow300 z3 SL_norewrite"
                        aria-label="Language picker"
                        aria-hidden="true"
                        hidden
                        role="menu"
                                            ><li role="menuitem" class="mt0"><a class="hover-bg--aqua-1100 c--aqua-1100 hover-c--text-inverse db fw-bold pa300 wsnw w-100p hover-no-underline" href="/">
                                    English
                                </a></li><li role="menuitem" class="mt0"><a class="hover-bg--aqua-1100 c--aqua-1100 hover-c--text-inverse db fw-bold pa300 wsnw w-100p hover-no-underline" href="/es/">
                                    Español
                                </a></li><li role="menuitem" class="mt0"><a class="hover-bg--aqua-1100 c--aqua-1100 hover-c--text-inverse db fw-bold pa300 wsnw w-100p hover-no-underline" href="/pt/">
                                    Português
                                </a></li><li role="menuitem" class="mt0"><a class="hover-bg--aqua-1100 c--aqua-1100 hover-c--text-inverse db fw-bold pa300 wsnw w-100p hover-no-underline" href="/fr/">
                                    Français
                                </a></li><li role="menuitem" class="mt0"><a class="hover-bg--aqua-1100 c--aqua-1100 hover-c--text-inverse db fw-bold pa300 wsnw w-100p hover-no-underline" href="/it/">
                                    Italiano
                                </a></li><li role="menuitem" class="mt0"><a class="hover-bg--aqua-1100 c--aqua-1100 hover-c--text-inverse db fw-bold pa300 wsnw w-100p hover-no-underline" href="/de/">
                                    Deutsche
                                </a></li></ul><button
                        id="language-picker-lightbox"
                        class="fixed top0 left0 right0 bottom0 bg--light-translucent button-reset h-100p w-100p z2 js-accordion-close-button"
                        tabindex="-1"
                        hidden
                                            ><span class="screenreader">Close Language Picker</span></button></div><div class="flex px400 mt600 mt0-l"><a
                            class="c--text hover-c--twitter db pa350"
                            href="https://twitter.com/sproutsocial"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><svg
        fill="currentColor"
        class="db h450 h450-ns mw200 w-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        title=""
        aria-labelledby="svg-inline--twitter1091702093"
        height="25"        width="25"    ><title id="svg-inline--twitter1091702093"></title><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg><span class="screenreader">
                                Sprout Social on Twitter
                            </span></a><a
                            class="c--text hover-c--instagram db pa350"
                            href="https://instagram.com/sproutsocial/"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><svg
        fill="currentColor"
        class="db h450 h450-ns mw200 w-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        title=""
        aria-labelledby="svg-inline--instagram1258141403"
        height="25"        width="25"    ><title id="svg-inline--instagram1258141403"></title><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg><span class="screenreader">
                                Sprout Social on Instagram
                            </span></a><a
                            class="c--text hover-c--linkedin db pa350"
                            href="https://www.linkedin.com/company/sprout-social-inc-"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><svg
        fill="currentColor"
        class="db h450 h450-ns mw200 w-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448.1 512"
        title=""
        aria-labelledby="svg-inline--linkedin1339926432"
        height="25"        width="25"    ><title id="svg-inline--linkedin1339926432"></title><path d="M100.3 448H7.4V148.9h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8S24.1 0 53.8 0s53.8 24.1 53.8 53.8-24.1 54.3-53.8 54.3zM448 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448h-.1z"/></svg><span class="screenreader">
                                Sprout Social on LinkedIn
                            </span></a><a
                            class="c--text hover-c--facebook db pa350"
                            href="https://www.facebook.com/SproutSocialInc/?fref=ts"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><svg
        fill="currentColor"
        class="db h450 h450-ns mw200 w-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 264 512"
        title=""
        aria-labelledby="svg-inline--facebook1074785312"
        height="25"        width="25"    ><title id="svg-inline--facebook1074785312"></title><path d="M215.8 85H264V3.6C255.7 2.5 227.1 0 193.8 0 124.3 0 76.7 42.4 76.7 120.3V192H0v91h76.7v229h94V283h73.6l11.7-91h-85.3v-62.7c0-26.3 7.3-44.3 45.1-44.3z"/></svg><span class="screenreader">
                                Sprout Social on Facebook
                            </span></a><a
                            class="c--text hover-c--pinterest db pa350"
                            href="https://www.pinterest.com/sproutsocial/"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><svg
        fill="currentColor"
        class="db h450 h450-ns mw200 w-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 512"
        title=""
        aria-labelledby="svg-inline--pinterest852693220"
        height="25"        width="25"    ><title id="svg-inline--pinterest852693220"></title><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"/><span class="screenreader">
                                Sprout Social on Pinterest
                            </span></a><a
                            class="c--text hover-c--youtube db pa350"
                            href="https://www.youtube.com/user/SproutSocial"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><svg
        fill="currentColor"
        class="db h450 h450-ns mw200 w-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        title=""
        aria-labelledby="svg-inline--youtube660672665"
        height="25"        width="25"    ><title id="svg-inline--youtube660672665"></title><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg><span class="screenreader">
                                Sprout Social on Youtube
                            </span></a><a
                            class="c--text hover-c--tiktok-red db pa350"
                            href="https://www.tiktok.com/@sproutsocial"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><svg class="db h450 h450-ns mw200 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path fill="currentColor" d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path></svg><span class="screenreader">
                                Sprout Social on TikTok
                            </span></a></div><div class="dn w-100p flex-l justify-end-l px400 px0-l mt600 mt0-l"><a
                    href="https://itunes.apple.com/app/apple-store/id475307859?pt=533273&amp;ct=sprout_footer&amp;mt=8"
                    class="mr300 db"
                ><amp-img
                        alt="Apple Store badge"
                        layout="fixed"
                        class="db h-auto"
                        src="https://media.sproutsocial.com/uploads/svgz/store-buttons/download-app-store.svgz"
                        width="120"
                        height="36"
                    ></amp-img><span class="screenreader">Download the Sprout Social app for IOS Devices in the Apple App store.</span></a><a
                    href="https://play.google.com/store/apps/details?id=com.sproutsocial.android&amp;hl=en&amp;utm_source=sprout_footer&amp;utm_medium=website&amp;utm_campaign=mobile_5"
                    class="db"
                ><amp-img
                        alt="Google Play Store badge"
                        layout="fixed"
                        class="db h-auto"
                        src="https://media.sproutsocial.com/uploads/svgz/store-buttons/download-google-play.svgz"
                        width="120"
                        height="36"
                    ></amp-img><span class="screenreader">Download the Sprout Social app for Android in the Google Play Store.</span></a></div></div><div class="mw900 mx-auto px400"><p class="f200 c--neutral-700">
                © Copyright <span class="js-copyright-year">2024</span> Sprout Social, Inc. All Rights Reserved.
                <span class="db di-ns"><a href="/privacy-policy/" class="c--link-dark fw-normal">
                        Privacy
                    </a> |
                    <a href="/legal/terms/" class="c--link-dark">
                    Terms of Service
                    </a> |
                    <a href="/legal/website-terms-of-use/" class="c--link-dark">
                        Website Terms
                    </a> |
                    <a href="/responsible-disclosure-policy/" class="c--link-dark fw-normal">
                        Disclosure Policy
                    </a> |
                    <a href="/cookie-notice/" class="c--link-dark fw-normal">
                        Cookies
                    </a> |
                    <a href="/do-not-sell/" class="c--link-dark fw-normal">
                        Do Not Sell or Share My Personal Information
                    </a></span></p></div></footer><div
    id="nav-filter"
    class="bg--background bottom0 fixed h-100p left0 overflow-x-hidden overflow-y-auto right0 top0 w-100p z23"
    aria-label="Filter blog content"
    aria-hidden="true"
    data-a11y-dialog
    hidden
><div class="px450 py400 w-100p" role="dialog"><div class="flex justify-end"><button
                class="button-reset"
                aria-controls="nav-filter"
                aria-labelledby="filter-close"
                data-a11y-dialog-hide
            ><svg
        class="db h450"
                height="28"
        role="img"
        viewBox="0 0 320 512"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
        focusable="false"
            ><path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg><span id="filter-close" class="screenreader">"Close filter menu"</span></button></div><aside class="db"><p id="filter-heading-1822964807" class="f800 fw-extrabold mt600"
        >
    Filter by
    
</p><form class="Form mt500 js-filter" action="https://sproutsocial.com/insights" novalidate role="search" data-fields='[{"label":"Topic","name":"_fm_topic","component":"Select","options":[{"value":"career-growth","label":"All Career Growth"},{"value":"diversity-equity-inclusion","label":"&nbsp;&nbsp; Diversity, Equity &amp; Inclusion"},{"value":"leadership","label":"&nbsp;&nbsp; Leadership"},{"value":"leveling-up","label":"&nbsp;&nbsp; Leveling Up"},{"value":"marketing","label":"&nbsp;&nbsp; Marketing Disciplines"},{"value":"industries","label":"All Industries"},{"value":"agency","label":"&nbsp;&nbsp; Agency"},{"value":"consumer-goods","label":"&nbsp;&nbsp; Consumer Goods"},{"value":"finance-and-banking","label":"&nbsp;&nbsp; Finance &amp; Banking"},{"value":"food-and-restaurants","label":"&nbsp;&nbsp; Food &amp; Restaurants"},{"value":"gaming-and-esports","label":"&nbsp;&nbsp; Gaming &amp; Esports"},{"value":"government","label":"&nbsp;&nbsp; Government"},{"value":"healthcare","label":"&nbsp;&nbsp; Healthcare"},{"value":"higher-education","label":"&nbsp;&nbsp; Higher Education"},{"value":"legal","label":"&nbsp;&nbsp; Legal"},{"value":"media-and-entertainment","label":"&nbsp;&nbsp; Media &amp; Entertainment"},{"value":"nonprofit","label":"&nbsp;&nbsp; Nonprofit"},{"value":"real-estate","label":"&nbsp;&nbsp; Real Estate"},{"value":"recruiting","label":"&nbsp;&nbsp; Recruiting"},{"value":"retail","label":"&nbsp;&nbsp; Retail"},{"value":"sports","label":"&nbsp;&nbsp; Sports"},{"value":"tech-companies","label":"&nbsp;&nbsp; Technology &amp; Software"},{"value":"travel-and-hospitality","label":"&nbsp;&nbsp; Travel &amp; Hospitality"},{"value":"marketing-insights","label":"All Marketing Insights"},{"value":"artificial-intelligence","label":"&nbsp;&nbsp; AI"},{"value":"corporate-communications","label":"&nbsp;&nbsp; Corporate Communications"},{"value":"culture","label":"&nbsp;&nbsp; Culture Strategies"},{"value":"customer-experience","label":"&nbsp;&nbsp; Customer Experience"},{"value":"digital-transformation","label":"&nbsp;&nbsp; Digital Transformation"},{"value":"whats-next","label":"&nbsp;&nbsp; What\u2019s Next"},{"value":"all-platforms","label":"All Networks"},{"value":"facebook","label":"&nbsp;&nbsp; Facebook"},{"value":"instagram","label":"&nbsp;&nbsp; Instagram"},{"value":"linkedin","label":"&nbsp;&nbsp; LinkedIn"},{"value":"other-platforms","label":"&nbsp;&nbsp; Other Platforms"},{"value":"pinterest","label":"&nbsp;&nbsp; Pinterest"},{"value":"review-sites","label":"&nbsp;&nbsp; Review Sites"},{"value":"social-platforms","label":"&nbsp;&nbsp; Social Platforms"},{"value":"tiktok","label":"&nbsp;&nbsp; TikTok"},{"value":"twitter","label":"&nbsp;&nbsp; Twitter"},{"value":"youtube","label":"&nbsp;&nbsp; YouTube"},{"value":"all-social-media","label":"All Social Media"},{"value":"branding-and-creative","label":"&nbsp;&nbsp; Branding &amp; Creative"},{"value":"community-management","label":"&nbsp;&nbsp; Community Management"},{"value":"competitive-insights","label":"&nbsp;&nbsp; Competitive Strategies"},{"value":"customer-care-service","label":"&nbsp;&nbsp; Customer Care"},{"value":"advocacy","label":"&nbsp;&nbsp; Employee Advocacy"},{"value":"influencers","label":"&nbsp;&nbsp; Influencers"},{"value":"review-management","label":"&nbsp;&nbsp; Review Management"},{"value":"social-commerce-and-ecommerce","label":"&nbsp;&nbsp; Social Commerce"},{"value":"social-listening","label":"&nbsp;&nbsp; Social Listening"},{"value":"advertising","label":"&nbsp;&nbsp; Social Media Advertising"},{"value":"analytics","label":"&nbsp;&nbsp; Social Media Analytics"},{"value":"social-media-content","label":"&nbsp;&nbsp; Social Media Content"},{"value":"engagement","label":"&nbsp;&nbsp; Social Media Engagement"},{"value":"publishing","label":"&nbsp;&nbsp; Social Media Publishing"},{"value":"social-media-scheduling","label":"&nbsp;&nbsp; Social Media Scheduling"},{"value":"social-strategy","label":"&nbsp;&nbsp; Social Media Strategy"},{"value":"social-trends","label":"&nbsp;&nbsp; Social Media Trends"},{"value":"social-spotlight","label":"&nbsp;&nbsp; Social Spotlight"},{"value":"team-collaboration","label":"&nbsp;&nbsp; Team Collaboration"},{"value":"video","label":"&nbsp;&nbsp; Video"},{"value":"sprout","label":"All Sprout Social"},{"value":"sprout-engineering","label":"&nbsp;&nbsp; Sprout Engineering"},{"value":"using-sprout","label":"&nbsp;&nbsp; Sprout in Action"},{"value":"team-sprout","label":"&nbsp;&nbsp; Team Sprout"},{"value":"product-updates","label":"&nbsp;&nbsp; Updates &amp; Enhancements"},{"value":"level","label":"Experience Level"},{"value":"beginner","label":"&nbsp;&nbsp; Beginner"},{"value":"expert","label":"&nbsp;&nbsp; Expert"},{"value":"intermediate","label":"&nbsp;&nbsp; Intermediate"},{"value":"future-of-marketing","label":"Future of Marketing"}],"placeholder":null,"inputvalue":null,"modifier":null,"is_input":false},{"label":"Type","name":"post_type","component":"Select","options":[{"value":"casestudies","label":"Case Studies"},{"value":"guides","label":"Guides"},{"value":"index","label":"Data Reports"},{"value":"interactive","label":"Interactive"},{"value":"templates","label":"Templates & Tools"},{"value":"webinars","label":"Webinars"},{"value":"hubs","label":"Hubs"}],"placeholder":null,"inputvalue":null,"modifier":null,"is_input":false}]'><div class="flex-l mt450"><button
    class="button button Button--secondary db dib-l w-100p w-auto-l wsnw"
                type="submit"                                >
    Filter Results
    
</button><button
    class=" button-reset db dib-l f300 fw-bold ml300-l mt450 mt0-l px350 w-100p w-auto-l wsnw"
                type="reset"                                >
    Reset
    
</button></div></form></aside></div></div><script src="https://media.sproutsocial.com/assets/insights/scripts/insights.2b50c3a092c6f2757ed2.js?ver=9" defer></script>
<script src="https://media.sproutsocial.com/assets/insights/scripts/pardotIframe.6706176869d47f81d71f.js?ver=9" defer></script>
<script src="https://media.sproutsocial.com/assets/insights/scripts/hub-navigation.698f2bca1315f3c1dafe.js?ver=9" defer></script>
<script src="https://media.sproutsocial.com/assets/cookieconsent.js" defer></script>
<script type="text/javascript" id="datalayer-js-after">
/* <![CDATA[ */
					window.dataLayer = window.dataLayer || [];
					window.dataLayer.push({
							'pageUrl': 'https://sproutsocial.com/insights/business-intelligence/',
							'pageTitle': 'Business intelligence: What it is and steps to help you build your strategy',
							'staticPageTitle': 'Business Intelligence: What it is and How to Build a Strategy | Sprout Social',
							'pageCategory': 'Hub',
							'pageType': 'hubs',
							'blogHub': 'Business Intelligence Hub',
							'blogSpoke': '',
							'blogCategory': 'Competitive Strategies',
							'blogSubcategory': '',
					});
			
/* ]]> */
</script>

</body>
</html>

<!-- plugin=object-cache-pro client=phpredis metric#hits=13865 metric#misses=412 metric#hit-ratio=97.1 metric#bytes=3610664 metric#prefetches=0 metric#store-reads=247 metric#store-writes=87 metric#store-hits=580 metric#store-misses=244 metric#sql-queries=73 metric#ms-total=2036.62 metric#ms-cache=107.55 metric#ms-cache-avg=0.3230 metric#ms-cache-ratio=5.3 sample#redis-hits=532953189 sample#redis-misses=69350183 sample#redis-hit-ratio=88.5 sample#redis-ops-per-sec=506 sample#redis-evicted-keys=0 sample#redis-used-memory=51313576 sample#redis-used-memory-rss=45817856 sample#redis-memory-fragmentation-ratio=0.9 sample#redis-connected-clients=3 sample#redis-tracking-clients=0 sample#redis-rejected-connections=0 sample#redis-keys=6469 -->
