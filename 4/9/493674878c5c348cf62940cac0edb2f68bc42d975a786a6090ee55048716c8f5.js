!);var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"redpop@b474a6ad4354f4ba5fde672fa4e9c2c267684761"};"use strict";(self.webpackChunk_tumblr_redpop=self.webpackChunk_tumblr_redpop||[]).push([[9792],{38740:(e,t,s)=>{s.d(t,{e:()=>r});var r=(0,s(95004).createContext)({hotkeyWrapper:null,isEnterAsSubmitDisabled:!1})},48341:(e,t,s)=>{s.d(t,{Z:()=>k});var r=s(54138),a=s.n(r),n=s(50209),o=s.n(n),l=s(9156),i=s(95004),d=s(93853),p=s(38740),u=s(2629);class c extends i.Component{constructor(){super(...arguments),o()(this,"state",{disableHotkeysForTextEntryOverrideCount:0,disableEnterAsSubmitOverrideCount:0}),o()(this,"isEnterAsSubmitDisabled",()=>{var e;return(null===(e=this.props.hotkeyDisablerForTextEntryContext)||void 0===e?void 0:e.isEnterAsSubmitDisabled)||!!this.state.disableEnterAsSubmitOverrideCount}),o()(this,"canModifyDisableCounter",(e,t)=>!(-1===e&&0===t)),o()(this,"disableParentControlOfHotkeys",e=>{var t=e?1:-1;this.setState(e=>({disableHotkeysForTextEntryOverrideCount:this.canModifyDisableCounter(t,e.disableHotkeysForTextEntryOverrideCount)?e.disableHotkeysForTextEntryOverrideCount+t:e.disableHotkeysForTextEntryOverrideCount}))}),o()(this,"disableEnterAsSubmit",e=>{var t=e?1:-1;this.setState(e=>({disableEnterAsSubmitOverrideCount:this.canModifyDisableCounter(t,e.disableEnterAsSubmitOverrideCount)?e.disableEnterAsSubmitOverrideCount+t:e.disableEnterAsSubmitOverrideCount}))}),o()(this,"getHotkeyWrapperMethods",,o()(this,"hotkeyWrapper",function(e){var t=e.disableParentControlOfHotkeys,s=e.disableEnterAsSubmit;return class extends i.Component{omponentWillUnmountomponentDidUpdate(e){!e.shouldRenderHotkeyComponent&&this.props.shouldRenderHotkeyComponent?this.setHotkeyOptionsOnWrapper():e.shouldRenderHotkeyComponent&&!this.props.shouldRenderHotkeyComponent&&this.setHotkeyOptionsOnWrapper({unsetValues:!0})}etHotkeyOptionsOnWrapper(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.unsetValues,a=this.props,n=a.shouldRenderHotkeyComponent,o=a.shouldDisableParentControlOfHotkeys,l=a.shouldDisableEnterAsSubmit;this.lastUnsetValues=!!r,(n||r)&&(o&&t(!r),l&&(null==s||s(!r)))}}}(this.getHotkeyWrapperMethods())),o()(this,"getContextValue",(0,l.Z)({maxSize:1}))}render(){var e=this.props,t=e.children,s=e.shouldRenderHotkeyBlocker,r=e.hotkeyDisablerForTextEntryContext,a=this.state.disableHotkeysForTextEntryOverrideCount;return null!=r&&r.hotkeyWrapper?t:(0,u.jsxs)(u.Fragment,{children:[s&&!a&&(0,u.jsx)(d.ZP,{disable:d.z9}),(0,u.jsx)(p.e.Provider,{value:this.getContextValue(!!a),children:t})]})}}class h extends i.Component{render(){return(0,u.jsx)(p.e.Consumer,{children:e=>(0,u.jsx)(c,a()(a()({},this.props),{},{ref:this.props.forwardedRef,hotkeyDisablerForTextEntryContext:e}))})}}let k=h},2731:(e,t,s)=>{s.d(t,{Z:()=>a});var r=(0,s(36343).q)("plus");r.defaultProps={size:{width:16,height:16}};let a=r},89792:(e,t,s)=>{s.d(t,{Z:);var r=s(54138),a=s.n(r),n=s(33970),o=s.n(n),l=s(95004),i=s(1539),d=s(48341),p=s(6135),u=s(18488),c=s(43523),h=s(85795),k=s(78667),b=s(93613),m=s(86033),g=s(63583),v=s.n(g),y=s(5754),f=s.n(y),x=s(44009),C=s(50213),P=s(93853),S=s(98478),j=s(2731),N=s(26321),E=s(30420),w=s(2629);let H=e=>{var t=e.name,s=e.className,r=e.removePerkByName,a=(0,k.bp)()._t;return(0,w.jsxs)("span",{className:"ZNx6j",children:[(0,w.jsx)(N.Z,{className:f()("QET28",s),noHover:!0,children:t}),(0,w.jsx)(x.Z,{label:a("Remove perk"),wrapperClassName:"LDjR_",onClick:()=>r(t),children:(0,w.jsx)(E.Z,{size:{height:6,width:6},colors:{primary:v().paletteWhite}})})]})},O={perksEditor:"vKHw8",perksWrapper:"uJ0aF",perksForm:"m7Fq0",newPerkInput:"fj2S8",closeButton:"tRQK8",perk:"rbwP7",iconOnly:"Q80sH",footer:"Ha4CC"};var T=T||{}),Z=[...P.VY,...P.LA,...P.YZ,...P.yK];let D=e=>{var t=e.allSuggestedPerks,s=e.initialPerks,r=e.isTumblrpayOnboarded,n=e.onSelectPerks,i=(0,k.bp)(),d=i._t,p=i._c,h=i.logEvent,m=(0,b.V)().toggleToast,g=(0,l.useState)(!1),y=o()(g,2),E=y[0],D=y[1],A=(0,l.useState)(""),R=o()(A,2),_=R[0],W=R[1],F=(0,l.useRef)(null),L=(0,l.useState)(s),V=o()(L,2),B=V[0],z=V[1],I={height:12,width:12},G=(0,l.useState)([]),J=o()(G,2),M=J[0],Y=J[1],U=B.length>0,$=U?p("Perks is a plural noun, benefits a user will get for purchasing a paid subscription to a blog.","Edit your perks"):"",K=5===B.length?"":p("Place holder is max amount of perks. Perks is a plural noun, benefits a user will get for purchasing a paid subscription to a blog.","Enter up to %1$s perks…",["5"]),},X=e=>{if(B.length<5){var s,r=B.concat([e]);q(c.J.PostpSetupProfilePerkAddTap),z(r),Y(t.filter(e=>!r.includes(e))),null===(s=F.current)||void 0===s||s.focus()}else et(T.PerksLimitReached)},q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};h({eventName:e,eventDetails:a()(a()({},{is_activated:r}),t)})},ee=e=>{z(B.filtet)),t.includes(e)&&Y(M.concat([e]))},et=e=>{var t;switch(e){case T.PerkNameTooLong:t=p("Perks is a plural noun, variable is the maximum number of characters.","Dang! Perks cannot be longer than %1$s characters.",["64"]);break;case T.NoPerksAdded:t=p("Error message when field is blank","Dang! You should put something here.");break;case T.PerksLimitReached:t=p("Perk is a noun, variable is the max number or perks.","Dang! You hit the %1$s perk limit.",["5"]),q(c.J.PostpSetupProfilePerkLimitReached)}m(t,"error")};return(0,w.jsxs)("div",{className:O.perksEditor,children:[(0,w.jsxs)("div",{className:O.perksWrapper,children:[(0,w.jsx)(x.Z,{onClick:()=>{Y(t.filte))),D(!0),q(c.J.PostpSetupProfilePerkOpen),setTimeou},100)},label:$,className:"openEditor",children:(0,w.jsxs)(N.Z,{className:f()(O.perk,{[O.iconOnly]:U}),noHover:!0,children:[(0,w.jsx)(j.Z,{size:I,colors:{primary:v().paletteBlack}}),!U&&p("Perks is a plural noun, benefits a user will get for purchasing a paid subscription to a blog.","Add supporter perks")]})}),B.map(e=>(0,w.jsx)(N.Z,{noHover:!0,className:f()(O.perk,"selectedPerk"),children:e},e))]}),E&&(0,w.jsxs)(C.Z,{onGlassClick:Q,glassIsClickable:!1,children:[(0,w.jsx)(P.ZP,{disable:Z}),(0,w.jsxs)("div",{className:O.perksForm,children:[(0,w.jsxs)("div",{className:O.perksWrapper,children:[B.ma)),(0,w.jsx)("input",{className:O.newPerkInput,type:"text",placeholder:K,ref:F,onChang),onKeyDown:e=>{var t,s=_.trim();""===s||e.key!==P.SV.Enter&&e.key!==P.SV.Tab||e.nativeEvent.isComposing||(null===(t=e.nativeEvent)||void 0===t||t.preventDefault(),s.length>64?et(T.PerkNameTooLong):5===B.length?et(T.PerksLimitReached):(q(c.J.PostpSetupProfilePerkAddTap),z(B.concat([s.substr(0,64)]))),W("")),""===s&&B.length>0&&e.key===P.SV.Backspace&&ee(B[B.length-1])},value:_})]}),(0,w.jsx)("p",{children:p("Heading for list of suggested perks","Suggested")}),(0,w.jsx)("div",{className:O.perksWrapper,children:M.map(e=>(0,w.jsx)(x.Z,{onClic),className:"suggestedPerk",children:(0,w.jsxs)(N.Z,{className:O.perk,noHover:!0,children:[(0,w.jsx)(j.Z,{size:I})," ",e]})},e))}),(0,w.jsx)("div",{className:O.footer,children:(0,w.jsx)(u.Z,{className:O.done,textColor:v().paletteNavy,disabled:0===B.length,disabledTheme:"default",disabledTextColor:v().paletteGray40,disabledBackgroundColor:v().paletteGray13,onClick:()=>{0===B.length?et(T.NoPerksAdded):(D(!1),n(B),q(c.J.PostpSetupProfilePerkSaveTap)),W("")},children:p("Save changes and close editor","Done")})}),(0,w.jsx)(x.Z,{className:O.closeButton,label:d("Close without saving"),onClick:Q,children:(0,w.jsx)(S.Z,{size:{height:14,width:14},colors:{primary:v().paletteBlack}})})]})]})]})},A=function(e){var t=e.blogName,s=e.plan,r=e.onUpdateSubscriptionPlan,n=e.onCancel,g=e.isTumblrpayOnboarded,y=(0,k.bp)(),f=y._c,x=y._getLocaleNumberString,C=y._t,P=y.apiFetch,S=y.logEvent,j=(0,b.V)().toggleToast,N=(0,l.useState)([]),E=o()(N,2),H=E[0],O=E[1],T=(0,l.useState)(s.memberPerks),Z=o()(T,2),A=Z[0],R=Z[1],_=(0,l.useState)(s.description),W=o()(_,2),F=W[0],L=W[1],V=(0,l.useState)(!1),B=o()(V,2),z=B[0],I=B[1],G=(0,l.useState)(!1),J=o()(G,2),M=J[0],Y=J[1];(0,l.useEffect)(()=>{var e=(0,m.Z)((0,h.ZP)(P).getAllMemberPerks().fetch());return e.then(e=>{var t=e.response;t&&O(t.memberPerks)}).catc}),e.cancel},[P]);var U=(0,l.useCallback)(e=>{L(e.target.value),e.target.value.length>999&&j(C("Your Post+ profile can only have a maximum of 1,000 characters."),"error","max-characters")},[]),$=(0,l.useCallback),[]),K=(0,l.useCallback)(()=>{Y(!0),S({eventName:c.J.PostpSetupProfileSaveTap,eventDetails:{is_activated:g}}),(0,h.ZP)(P).updateSubscriptionSettings({blogName:t,description:F,memberPerks:A}).fetch().then(e=>{var t=e.response;Y(!1),I(!1),r(a()({},t))}).catc})},[A,F,P,t,g,S,r]),Q=(0,l.useCallback)(()=>{var e={theme:"error",wrapperClassName:"Qtw8Z",message:C("Something went wrong. Try again.")};return(0,w.jsx)(i.Z,a()({},e))},[C]),X=!F||0===A.length||M;return(0,w.jsxs)("div",{className:"zXu7y",children:[(0,w.jsx)(d.Z,{shouldRenderHotkeyBlocker:!0,children:(0,w.jsx)("textarea",{className:"RI0Bv",value:F,onChange:U,placeholder:C("Tell your supporters what makes you special…"),maxLength:1e3})}),(0,w.jsx)("p",{className:"A8a2s",children:`${x(F.length)}/${x(1e3)}`}),(0,w.jsx)("label",{className:"VBz7J",children:f("Plural noun: benefits a user will get for purchasing a paid subscription to a blog.","Perks:")}),(0,w.jsx)(D,{isTumblrpayOnboarded:g,allSuggestedPerks:H,initialPerks:A,onSelectPerks:$}),z&&Q(),(0,w.jsxs)("div",{className:"CXD60",children:[(0,w.jsx)(u.Z,{wrapperClassName:"xCryI",label:C("Cancel"),onClick:n,backgroundColor:v().paletteGray25,theme:"border",children:C("Cancel")}),(0,w.jsx)(u.Z,{wrapperClassName:"GGXx5",backgroundColor:v().paletteAccent,textColor:v().paletteNavy,disabledTheme:"default",disabledBackgroundColor:v().paletteGray13,disabledTextColor:v().paletteGray40,label:C("Save"),disabled:X,onClick:K,children:M?(0,w.jsx)(p.Z,{small:!0,centerOrientation:"horizontal",color:v().paletteGray40}):C("Save")})]})]})}}}]);