(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1526:function(e,t,a){"use strict";a.r(t);var n=a(36),r=a(30),o=function(e){return{type:"TOGGLE_HEADER_DROPDOWNS",newDropDownState:e}},c=a(228),s=a(11),i=a(0),l=a.n(i),u=a(2),d=a.n(u),p=a(3),m=a(35),h=a(526),b=function(e){var t=e.className,a=e.style,n=e.keycloak,r=e.location,o=e.history,c=e.keycloak.authenticated,s=function(){var e=Object(p.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:Object(h.a)(n);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return[!c&&l.a.createElement(m.a,{className:t,key:"login-button",style:a,handleClick:function(){n.login()}},l.a.createElement("i",{className:"material-icons"},"exit_to_app"),"\xa0 Log In"),!!c&&[l.a.createElement(m.a,{className:t,key:"logout-button",style:a,handleClick:s},l.a.createElement("i",{className:"material-icons"},"exit_to_app"),"\xa0 Log Out"),"/"===r.pathname&&l.a.createElement(m.a,{className:t,key:"go-to-dashbaord",handleClick:function(){o.push("/home")}},l.a.createElement("i",{className:"material-icons"},"dashboard"),"\xa0 Go To Dashbaord")]]},v=a(175),f=a(12),g=(a(563),["handleClick","myRef","tooltip","showTooltip","onEnter","onLeave","children"]),E=function(e){var t=e.handleClick,a=e.myRef,n=e.tooltip,r=e.showTooltip,o=e.onEnter,c=e.onLeave,s=e.children,i=Object(f.a)(e,g);return l.a.createElement("button",Object.assign({onClick:t,onMouseEnter:o,onMouseLeave:c,ref:a},i),s,r&&l.a.createElement("span",{className:"btn-tooltip ".concat(n)},n))},w=a(164),O=a(150),y=a(151),k=a(153),j=a(152),N=a(342),T=a(4);var x=function(e){var t=e.eventTarget,a=e.elementArray,n=e.toggleCallback,r=e.stateToToggle;a.every(function(e){return"function"===typeof e.contains&&!e.contains(t)})&&n(Object(T.a)({},r,!1))},C=(a(564),a(422)),P=function(e){Object(k.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showPublishModal:!1,publishTourId:""},e.handleOutsideClick=function(t){var a=e.props,n=a.publishQueueBtnRef,r=a.toggleHeaderDropdowns;x({eventTarget:t.target,elementArray:[e.publishQueue,n],toggleCallback:r,stateToToggle:"publishQueueOpen"})},e.togglePublishModal=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.setState({showPublishModal:!!t,publishTourId:t})},e.renderToPublishTours=function(){var t=e.props,a=t.tours,n=t.savePublicTour,r=t.userEmail,o=t.tier,c=t.history,s=t.toggleHeaderDropdowns,i=t.stops;return Object.keys(a).map(function(t){var u=a[t];return!u.uptoDate&&u.stopIds.length?l.a.createElement(N.a,{key:t,userEmail:r,tourId:t,uptoDate:u.uptoDate,currentTour:u,stops:i,savePublicTour:n,tier:o,history:c,toggleHeaderDropdowns:s,togglePublishModal:e.togglePublishModal,queueItem:!0}):null})},e}return Object(y.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleOutsideClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleOutsideClick)}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.publishQueueLength,r=t.tier,o=t.savePublicTour,c=t.tours,s=t.userEmail,i=this.state,u=i.showPublishModal,d=c[i.publishTourId]||{};return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"publish-queue",className:a,ref:function(t){return e.publishQueue=t},"data-cy":"publish-queue"},l.a.createElement("h3",null,"Publish Queue"),Boolean(n)?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Your recently updated tours are not yet viewable, publish them to make them public."),l.a.createElement("div",{className:"tour-publish-card-wrapper"},this.renderToPublishTours())):l.a.createElement("p",null,"There are no tours in the publish queue. Tours that have been updated will appear here.")),l.a.createElement(C.a,{closeModal:function(){return e.togglePublishModal()},onComplete:function(){return e.togglePublishModal()},isOpen:u,currentTour:d,savePublicTour:o,userEmail:s,uptoDate:d.uptoDate,tourId:d.id,tier:r,gaId:"",mapboxToken:""}))}}]),a}(i.PureComponent),I=a(197),D=Object(n.c)(function(e){return{userEmail:e.userCredentials.email,tours:e.tours.tours,stops:e.stops.stops,tier:e.account.tier}},function(e){return Object(r.b)({savePublicTour:I.b,toggleHeaderDropdowns:o},e)})(P),M=a(427),_=a(24),A=a.n(_),S=(a(580),function(e){Object(k.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleOutsideClick=function(t){var a=e.props,n=a.dropDownType,r=a.headerBtnRef,o=a.toggleHeaderDropdowns,c="accounts"===n?"userMenuOpen":"helpMenuOpen";x({eventTarget:t.target,elementArray:[e.dropDown,r],toggleCallback:o,stateToToggle:c})},e.renderOptions=function(){var t=e.props,a=t.children,n=t.close;e.root=e.root||document.querySelector(":root");var r=a.filter(function(e){return e});return e.root.style.setProperty("--drop-down-height","".concat(35*r.length,"px")),r.map(function(e,t){if(!e)return null;var r=A()({"dropdown-option":!0,last:t===a.length-1});return l.a.createElement("li",{key:t,className:r,onClick:n},e)})},e}return Object(y.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleOutsideClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleOutsideClick)}},{key:"render",value:function(){var e=this,t=this.props,a=t.dropDownType,n=t.rootAdmin,r=t.hasMultipleAccounts,o=A()("dropdown-list","".concat(n?"root-":"").concat(a),{dashboard:r});return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:o,ref:function(t){return e.dropDown=t}},this.renderOptions()))}}]),a}(i.Component)),R=function(e){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 71.6 71.6",className:"upgrade-icon"},l.a.createElement("defs",null),l.a.createElement("path",{className:"a",d:"M35.8,0A35.8,35.8,0,1,0,71.6,35.8,35.764,35.764,0,0,0,35.8,0Zm0,64.8a29,29,0,1,1,29-29A29.021,29.021,0,0,1,35.8,64.8Z"}),l.a.createElement("path",{className:"a",d:"M36.4,18.6a1.04,1.04,0,0,0-1.6,0L20.1,33.2a1.328,1.328,0,0,0,1,2.3h10a1.884,1.884,0,0,0-.2.8v16A1.685,1.685,0,0,0,32.6,54h6.1a1.685,1.685,0,0,0,1.7-1.7v-16a1.884,1.884,0,0,0-.2-.8h10a1.415,1.415,0,0,0,1-2.4Z"}))},L=function(e){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 71.6 71.6",className:"upgrade-icon"},l.a.createElement("defs",null),l.a.createElement("path",{className:"a",d:"M35.8,0A35.8,35.8,0,1,0,71.6,35.8,35.764,35.764,0,0,0,35.8,0Zm0,64.8a29,29,0,1,1,29-29A29.021,29.021,0,0,1,35.8,64.8Z"}),l.a.createElement("path",{className:"a",d:"M36.4,18.6a1.04,1.04,0,0,0-1.6,0L20.1,33.2a1.328,1.328,0,0,0,1,2.3h10a1.884,1.884,0,0,0-.2.8v16A1.685,1.685,0,0,0,32.6,54h6.1a1.685,1.685,0,0,0,1.7-1.7v-16a1.884,1.884,0,0,0-.2-.8h10a1.415,1.415,0,0,0,1-2.4Z"}))},H=a(581),B=a.n(H),F=a(17),q=a(234),Q=a(37),z=(a(582),function(e){var t=e.user,a=e.isLast;return l.a.createElement("div",{className:"active-user"},l.a.createElement(q.a,{userName:t.email,showActive:!0,active:t.active,tooltip:!0,tooltipText:t.active?"active":"inactive",tooltipAbove:a}),l.a.createElement("span",{className:"active-user__email"},t.email))}),U=(a(583),function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.e)(function(e){return e.sessions}).activeUsers,c=Object(n.e)(function(e){return e.userCredentials}),u=Object(i.useRef)(),d=function(){r(!a)},p=[{email:"".concat(c.email," (YOU)"),uid:localStorage.getItem("uid"),active:!0}].concat(Object(Q.a)(Object.values(o))),h=1!==p.length?"s":"";return l.a.createElement("div",{className:"active-users"},l.a.createElement(m.a,{className:"active-users__btn",handleClick:d,ref:u},l.a.createElement("i",{className:"material-icons"}," groups "),"".concat(p.length," Online User").concat(h),l.a.createElement("i",{"data-name":"userMenu",className:"material-icons"},a?"arrow_drop_up":"arrow_drop_down")),a&&l.a.createElement(S,{close:d,headerBtnRef:u,dropDownType:"online-users"},p.map(function(e,t){return l.a.createElement(z,{key:e.uid,user:e,isLast:p.length-1===t})})))}),W=a(205),Y=(a(584),function(e){var t=e.userData,a=t.firstname,n=t.lastname,r=t.picture,o=t.email,c=t.rootAdmin,u=t.privacyPolicy,d=t.accounts,p=e.dropDownState,h=e.location,f=e.tours,g=e.tier,O=e.toggleHeaderDropdowns,y=e.history,k=e.accountId,j=e.basic,N=void 0!==j&&j,T=e.populateSnackBar,x=Object(F.b)(),C=Object(s.a)(x,1)[0],P=Object(i.useRef)(),I=Object(i.useRef)(),_=Object(i.useRef)(),A=function(e){var t=e.target.getAttribute("data-name")||e.target.name;t="".concat(t,"Open");var a={};for(var n in p){var r=n===t&&!p[n]||!1;a[n]=r}O(a)},H=p.userMenuOpen,Q=p.publishQueueOpen,z=p.helpMenuOpen,Y=Object.keys(f).filter(function(e){return f[e].stopIds&&!f[e].uptoDate&&f[e].stopIds.length}).length,Z="foundation"===g?"https://www.concept3d.com/tour-builder-starter-help/":"https://concept3d.zendesk.com/hc/en-us/requests/new",G=d.length>1;return l.a.createElement("header",{className:N||u?"topbar":"topbar disabled"},l.a.createElement(w.a,{className:"c3d-btn",href:"https://www.concept3d.com/",newTab:!0},l.a.createElement("img",{src:B.a,height:"28",alt:"Concept3D Logo",className:"app-portal-btn"})),l.a.createElement(m.a,{className:"tour-builder-home-btn","data-cy":"tour-builder-home-btn",handleClick:function(){return y.push("/home")}},l.a.createElement("i",{className:"material-icons","aria-hidden":"true"},"home"),"\xa0Tour Builder"),!N&&l.a.createElement(m.a,{className:"media-library",handleClick:function(){return y.push("/home/medialibrary")}},l.a.createElement("i",{className:"material-icons","aria-hidden":"true"},"photo_library"),"\xa0Media Library"),l.a.createElement("div",{className:"profile-wrapper"},l.a.createElement(W.a,{featureDisabled:"enterprise"!==g,handleDisabledClick:function(){T({showSnackBar:!0,message:"To access this feature, please contact support@concept3d.com",clearDelay:5e3})}},l.a.createElement(U,null)),"starter"===g&&l.a.createElement(m.a,{className:"starter-upgrade-btn text-btn",handleClick:function(){return y.push("/home/settings/subscription")}},l.a.createElement(L,null),"\xa0Upgrade Now"),l.a.createElement(m.a,{className:"user-profile",handleClick:A,name:"userMenu",myRef:P},l.a.createElement(q.a,{useToken:!0,src:r,"data-name":"userMenu"}),l.a.createElement("span",{"data-name":"userMenu"},a?"".concat(a," ").concat(n):o,l.a.createElement("i",{"data-name":"userMenu",className:"material-icons","aria-hidden":"true"},"arrow_drop_down")))),l.a.createElement(v.a,{render:function(e){var t=e.onEnter,a=e.onLeave,n=e.hovering;return l.a.createElement(E,{className:"text-btn header-btn publish",handleClick:A,name:"publishQueue",myRef:I,tooltip:"publish",showTooltip:n,onEnter:t,onLeave:a,"data-cy":"publish-queue-btn"},l.a.createElement("i",{"data-name":"publishQueue",className:"material-icons","aria-hidden":"true"},"cloud_upload"),l.a.createElement(M.a,{allTours:f}))}}),l.a.createElement(v.a,{render:function(e){var t=e.onEnter,a=e.onLeave,n=e.hovering;return l.a.createElement(E,{className:"text-btn header-btn",handleClick:A,name:"helpMenu",myRef:_,tooltip:"help",showTooltip:n,onEnter:t,onLeave:a},l.a.createElement("i",{"data-name":"helpMenu",className:"material-icons","aria-hidden":"true"},"help_outline"))}}),Q&&l.a.createElement(D,{className:"dropdown",publishQueueLength:Y,publishQueueBtnRef:I,history:y}),H&&l.a.createElement(S,{path:h.pathname,dropDownType:"accounts",close:A,rootAdmin:c,hasMultipleAccounts:G,headerBtnRef:P,toggleHeaderDropdowns:O},c&&l.a.createElement("span",{className:"current-account-text"},l.a.createElement("i",{className:"material-icons","aria-hidden":"true"},"beenhere")," ",l.a.createElement("strong",null,k)),c&&l.a.createElement(w.a,{handleClick:function(){return y.push("/home/accountsmanager")},className:"root-admin-switch"},l.a.createElement("i",{className:"material-icons","aria-hidden":"true"},"swap_horiz"),"\xa0 Switch Accounts"),l.a.createElement(w.a,{handleClick:function(){return y.push("/home/settings/account")}},l.a.createElement("i",{className:"material-icons","aria-hidden":"true"},"manage_accounts"),"\xa0 Account settings"),l.a.createElement(w.a,{handleClick:function(){return y.push("/home/settings/subscription")}},l.a.createElement("i",{className:"material-icons","aria-hidden":"true"},"apps"),"\xa0 Manage subscription"),G&&l.a.createElement(w.a,{handleClick:function(){return y.push("/home/accounts")}},l.a.createElement("i",{className:"material-icons"},"supervisor_account"),"\xa0 Accounts Dashboard"),l.a.createElement(w.a,{handleClick:function(){return y.push("/home/settings/user")},className:"user-settings__option"},l.a.createElement("i",{className:"material-icons","aria-hidden":"true"},"account_box"),"\xa0 User settings"),l.a.createElement(b,{keycloak:C,className:C.authenticated?"logout":"login",location:h})),z&&l.a.createElement(S,{dropDownType:"help",headerBtnRef:_,toggleHeaderDropdowns:O},l.a.createElement(w.a,{href:"https://concept3d.zendesk.com",newTab:!0},l.a.createElement("i",{className:"material-icons","aria-hidden":"true"},"launch"),"\xa0 Help Center"),"starter"===g?l.a.createElement("div",{className:"support-wrapper"},l.a.createElement(w.a,{className:"disabled",handleClick:function(){return y.push("/home/settings/subscription")},newTab:!0},l.a.createElement("i",{className:"material-icons","aria-hidden":"true"},"build"),"\xa0 Support \xa0"),l.a.createElement(m.a,{className:"text-btn support-btn",handleClick:function(){return y.push("/home/settings/subscription")}},l.a.createElement(R,null),"\xa0 Upgrade")):l.a.createElement(w.a,{href:Z,newTab:!0},l.a.createElement("i",{className:"material-icons","aria-hidden":"true"},"build"),"\xa0 Support")))});t.default=Object(n.c)(function(e){return{userData:e.userCredentials,tours:e.tours.tours,dropDownState:e.header,tier:e.account.tier,accountId:e.account.tourAccountId}},function(e){return Object(r.b)({toggleHeaderDropdowns:o,populateSnackBar:c.a},e)})(Y)},169:function(e,t,a){"use strict";var n=a(11),r=a(12),o=a(0),c=a.n(o),s=a(155),i=a(27),l=a(54),u=(a(84),["saving","changed","savingText","changedText","changedIcon","doneText","doneIcon","className","style","handleClick","name","disabled","permission","type"]);t.a=function(e){var t=e.saving,a=e.changed,o=e.savingText,d=e.changedText,p=e.changedIcon,m=void 0===p?"sync":p,h=e.doneText,b=e.doneIcon,v=e.className,f=e.style,g=e.handleClick,E=e.name,w=e.disabled,O=e.permission,y=void 0===O?"":O,k=e.type,j=void 0===k?"button":k,N=Object(r.a)(e,u),T=Object(i.a)(y),x=Object(n.a)(T,1)[0],C=!s.k[y]||x;return c.a.createElement("button",Object.assign({className:"btn-update ".concat(v),name:E,style:f,onClick:g,disabled:w||!C,type:j},N),t?c.a.createElement(c.a.Fragment,null,c.a.createElement(l.ClipLoader,{key:"loader",color:"none",size:10}),o):a?c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"material-icons"},C?m:"lock"),d):c.a.createElement(c.a.Fragment,null,b&&c.a.createElement("i",{className:"material-icons"},b),h))}},175:function(e,t,a){"use strict";var n=a(150),r=a(151),o=a(153),c=a(152),s=a(0),i=a.n(s),l=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).onMouseEnter=function(){e.setState({hovering:!0})},e.onMouseLeave=function(){e.setState({hovering:!1})},e.state={hovering:!1},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.props.render({onEnter:this.onMouseEnter,onLeave:this.onMouseLeave,hovering:this.state.hovering}))}}]),a}(s.Component);t.a=l},204:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("i",{className:"material-icons","aria-hidden":"true"},t)}},205:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(24),c=a.n(o);a(219);t.a=function(e){var t=e.featureDisabled,a=e.handleDisabledClick,n=e.children,o=e.forms;return t?r.a.createElement("main",{id:"tiered-item","data-cy":"tiered-feature",className:c()({disabled:t,forms:o}),onClick:a},n):n}},219:function(e,t,a){},234:function(e,t,a){"use strict";var n=a(11),r=a(0),o=a.n(r),c=a(17),s=a(24),i=a.n(s);a(267);t.a=Object(r.memo)(function(e){e.src;var t=e.useToken,a=e.firstName,s=void 0===a?"":a,l=e.lastName,u=void 0===l?"":l,d=e.userName,p=void 0===d?"":d,m=e.invert,h=e.small,b=e.active,v=e.showActive,f=void 0!==v&&v,g=e.tooltip,E=void 0!==g&&g,w=e.tooltipText,O=void 0===w?"":w,y=e.tooltipAbove,k=void 0!==y&&y,j=Object(c.b)(),N=Object(n.a)(j,1)[0],T=Object(r.useState)(!1),x=Object(n.a)(T,2),C=x[0],P=x[1],I=s,D=u,M=p;if(t){var _=N.tokenParsed;I=null===_||void 0===_?void 0:_.given_name,D=null===_||void 0===_?void 0:_.family_name,M=(null===_||void 0===_?void 0:_.preferred_username)||""}var A=I&&D?I[0]+D[0]:M[0],S=i()("avatar",{invert:m,small:h,active:f&&b,inactive:f&&!b}),R=i()("avatar__tooltip",{above:k});return o.a.createElement("span",{className:S,onMouseOver:function(){return P(!0)},onMouseOut:function(){return P(!1)}},A?o.a.createElement("span",null,A):o.a.createElement("i",{className:"material-icons"}," person "),E&&C&&o.a.createElement("span",{className:R},O))})},267:function(e,t,a){},342:function(e,t,a){"use strict";var n=a(150),r=a(151),o=a(153),c=a(152),s=a(0),i=a.n(s),l=a(24),u=a.n(l),d=a(35),p=a(169),m=(a(421),a(155)),h=a(204),b=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).openTourPublish=function(){var t=e.props,a=t.tourId,n=t.history;(0,t.toggleHeaderDropdowns)({publishQueueOpen:!1}),n.push("/home/".concat(a,"/edit/publish"))},e.openTourPreview=function(){var t=e.props,a=t.tourId;t.history.push("/home/view/".concat(a,"/stop/1"))},e.publishTour=function(){var t=e.props,a=t.currentTour,n=t.savePublicTour,r=t.tourId,o=t.tier,c=t.gaId,s=t.mapboxToken,i=Object.assign({},a,{published:!0}),l={aid:localStorage.getItem("aid"),id:r,tourData:i,published:!0,uptoDate:!0,tier:o,gaId:c,mapboxToken:s};e.startPublishing(),n(l,e.finishPublishing)},e.startPublishing=function(){e.setState({publishing:!0})},e.finishPublishing=function(){setTimeout(function(){var t=e.props.onPublishComplete;e.setState({publishing:!1,published:!0}),"function"===typeof t&&t()},[1e3])},e.state={publishing:!1,published:!1},e}return Object(r.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.state.published&&t.published&&this.setState({published:!1})}},{key:"render",value:function(){var e=this.state,t=e.publishing,a=e.published,n=this.props,r=n.currentTour,o=r.name,c=void 0===o?"":o,s=r.stopIds,l=void 0===s?[]:s,b=n.queueItem,v=n.uptoDate,f=n.disabled,g=n.tourId,E=n.togglePublishModal,w=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return i.a.createElement(p.a,{disabled:v||!Boolean(l.length)||f,changed:!v,saving:t,className:"tour-publish",handleClick:e,changedIcon:"file_upload",changedText:"Publish Now",savingText:"Publishing",doneText:"\u2713 Published",permission:m.k.publishTours,"data-cy":"tour-publish-btn".concat(a)},i.a.createElement("i",{className:"material-icons publish-upload"},"file_upload"),"\xa0 Publish Now")};return i.a.createElement(i.a.Fragment,null,b?i.a.createElement("article",{className:"tour-publish-card","data-cy":"publish-queue-card-".concat(g)},i.a.createElement(i.a.Fragment,null,i.a.createElement("h5",{className:u()("tour-publish-card__title",{published:a})},"Tour - ",c),i.a.createElement("div",{className:"tour-publish-card__btn-wrapper"},w(function(){return E(g)},"-".concat(g)),i.a.createElement(d.a,{className:"primary-btn",handleClick:this.openTourPublish,"data-cy":"publish-queue-publish-page-btn"},i.a.createElement(h.a,null,"arrow_forward"),"Publish Page"),i.a.createElement(d.a,{className:"primary-btn",handleClick:this.openTourPreview,"data-cy":"publish-queue-preview-btn"},i.a.createElement(h.a,null,"visibility"),"Preview Tour")))):i.a.createElement(i.a.Fragment,null,w(this.publishTour.bind(this))))}}]),a}(s.Component);t.a=b},343:function(e,t,a){"use strict";a.d(t,"a",function(){return m}),a.d(t,"b",function(){return h});var n=a(2),r=a.n(n),o=a(3),c=a(6),s=a(155),i=a(7),l=a(25),u=function(){var e=Object(o.a)(r.a.mark(function e(t){var a,n,o,s,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.jobId,n=t.accId,o=t.tourId,s=Object(i.a)(),e.next=4,fetch("".concat(c.a.tourAPI,"/v2/").concat(n,"/tours/").concat(o,"/revisions/csv/").concat(a),{headers:s});case 4:return u=e.sent,e.next=7,Object(l.a)(u);case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(r.a.mark(function e(t){var a,n,c,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.jobId,n=t.accId,c=t.tourId,i=s.e,e.abrupt("return",new Promise(function(e,t){var s=setInterval(Object(o.a)(r.a.mark(function o(){var l;return r.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i<=0&&(clearInterval(s),t({status:408,message:"Request Timeout, process took too long"})),r.next=3,u({jobId:a,accId:n,tourId:c});case 3:if("error"!==(l=r.sent).status&&"complete"!==l.status){r.next=8;break}return clearInterval(s),"complete"===l.status?e(l.url):t(l),r.abrupt("return");case 8:--i;case 9:case"end":return r.stop()}},o)})),3e3)}));case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(r.a.mark(function e(t,a){var n,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(i.a)(),e.prev=1,e.next=4,fetch("".concat(c.a.tourAPI,"/v2/").concat(t,"/tours/").concat(a,"/revisions/csv"),{headers:n,method:"POST"});case 4:return o=e.sent,e.next=7,Object(l.a)(o);case 7:return e.abrupt("return",e.sent);case 10:throw e.prev=10,e.t0=e.catch(1),e.t0;case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t,a){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(r.a.mark(function e(t,a){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(t,a);case 3:return n=e.sent,e.next=6,d({jobId:n,accId:t,tourId:a});case 6:return e.abrupt("return",e.sent);case 9:throw e.prev=9,e.t0=e.catch(0),console.error(e.t0),e.t0;case 13:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t,a){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(r.a.mark(function e(t,a,n){var o,s,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=Object(i.a)(),e.prev=1,s=n?"?limit=".concat(n):"",e.next=5,fetch("".concat(c.a.tourAPI,"/v2/").concat(t,"/tours/").concat(a,"/revisions").concat(s),{headers:o});case 5:return u=e.sent,e.next=8,Object(l.a)(u);case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(1),e.t0;case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t,a,n){return e.apply(this,arguments)}}()},420:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),c=a(528),s=a(24),i=a.n(s),l=a(54),u=(a(423),function(e){var t=e.columns,a=void 0===t?[]:t,s=e.data,u=void 0===s?[]:s,d=e.paginated,p=e.fetchData,m=e.controlledPageCount,h=e.loading,b=e.emptyMessage,v=Object(c.useTable)(Object(o.a)({columns:a,data:u,initialState:{pageIndex:0,pageSize:5},manualPagination:"function"===typeof p},"function"===typeof p&&{pageCount:m}),d&&c.usePagination),f=v.getTableProps,g=v.getTableBodyProps,E=v.headerGroups,w=v.prepareRow,O=v.page,y=v.rows,k=v.canPreviousPage,j=v.canNextPage,N=v.pageOptions,T=v.pageCount,x=v.gotoPage,C=v.nextPage,P=v.previousPage,I=v.setPageSize,D=v.state,M=D.pageIndex,_=D.pageSize,A=d?O:y;return Object(n.useEffect)(function(){"function"===typeof p&&p({pageIndex:M,pageSize:_})},[p,M,_]),r.a.createElement(r.a.Fragment,null,r.a.createElement("table",Object.assign({className:i()("tb-data-table",{paginated:d})},f()),r.a.createElement("thead",null,E.map(function(e){return r.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map(function(e){return r.a.createElement("th",e.getHeaderProps({style:Object(o.a)({},e.styles)}),e.render("Header"))}))})),r.a.createElement("tbody",g(),h&&r.a.createElement("tr",{className:"loading-spinner"},r.a.createElement("td",{colSpan:a.length},r.a.createElement(l.ClipLoader,{key:"loader",color:"none",size:50}))),!h&&0===A.length&&r.a.createElement("tr",{className:"empty-table"},r.a.createElement("td",{colSpan:a.length},b||"No Data to Display")),A.map(function(e,t){return w(e),r.a.createElement("tr",e.getRowProps(),e.cells.map(function(e){return r.a.createElement("td",e.getCellProps({style:Object(o.a)({},e.column.styles)}),e.render("Cell"))}))}))),d&&r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{onClick:function(){return x(0)},disabled:!k},"<<"),r.a.createElement("button",{onClick:function(){return P()},disabled:!k},"<"),r.a.createElement("button",{onClick:function(){return C()},disabled:!j},">"),r.a.createElement("button",{onClick:function(){return x(T-1)},disabled:!j},">>"),r.a.createElement("span",null,"Page"," ",r.a.createElement("strong",null,M+1," of ",N.length)," "),r.a.createElement("select",{value:_,onChange:function(e){I(Number(e.target.value))}},[5,10,20,30].map(function(e){return r.a.createElement("option",{key:e,value:e},"Show ",e)}))))}),d=a(11),p=function(e){var t=e.fieldChanges,a=Object(n.useState)(!1),c=Object(d.a)(a,2),s=c[0],i=c[1],l=Object(n.useState)(null),u=Object(d.a)(l,2),p=u[0],m=u[1],h=Object(n.useState)(0),b=Object(d.a)(h,2),v=b[0],f=b[1],g=Object(n.useState)(null),E=Object(d.a)(g,2),w=E[0],O=E[1],y=Object(n.useRef)();Object(n.useEffect)(function(){if(y.current&&w){var e,t,a,n=null===(e=w.target.parentElement)||void 0===e?void 0:null===(t=e.parentElement)||void 0===t?void 0:null===(a=t.parentElement)||void 0===a?void 0:a.parentElement,r=null===n||void 0===n?void 0:n.getBoundingClientRect();r&&(w.clientY-r.top+y.current.clientHeight>n.clientHeight?(m(0),f(null)):(m(null),f(0)))}},[w,y]);var k=t.map(function(e,t){return r.a.createElement("li",{key:t},e)});return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onMouseOver:function(e){O(e),i(!0)},onMouseLeave:function(){return i(!1)},className:"field-changes-button"},t.length," changes"),s&&r.a.createElement("ul",{className:"field-changes-list",style:Object(o.a)(Object(o.a)({position:"absolute",marginTop:"20px",marginBottom:"20px",zIndex:100,width:"100%"},null!==v&&{top:v}),null!==p&&{bottom:p}),ref:y},k))},m=a(264),h=a.n(m);a(424),t.a=function(e){var t=e.data,a=e.paginated,o=e.loadingData,c=Object(n.useMemo)(function(){return[{Header:"Date",accessor:"created_dt",styles:{minWidth:"100px",width:"100px",textAlign:"center",whiteSpace:"pre"},Cell:function(e){var t=e.cell,a=h()(t.value).format("MMM D, YYYY[\n]h:mm A");return a||""}},{Header:"Status",accessor:"status",styles:{minWidth:"75px",width:"75px",textAlign:"center"},Cell:function(e){var t=e.cell,a="#214C6C";return"Committed"===t.value?a="#009b65":"Reverted"===t.value&&(a="#a23f3f"),r.a.createElement("p",{style:{color:a}},t.value)}},{Header:"Event",accessor:"type",styles:{minWidth:"100px",width:"100px",textAlign:"center"}},{Header:"Item",accessor:"item",styles:{minWidth:"50px",width:"50px",textAlign:"center"}},{Header:"Author",accessor:"revisionBy",styles:{minWidth:"250px",width:"250px",textAlign:"center"}},{Header:"Field Changes",accessor:"fields",styles:{minWidth:"125px",width:"125px",textAlign:"center",background:"inherit"},Cell:function(e){var t,a=e.cell,n=null===(t=a.value)||void 0===t?void 0:t.split(",");return(null===n||void 0===n?void 0:n.length)>1?r.a.createElement("div",{style:{position:"relative",background:"inherit"}},r.a.createElement(p,{fieldChanges:n})):a.value||null}}]},[]);return r.a.createElement("div",{className:"publish-data-table-container"},r.a.createElement(u,{columns:c,data:t,paginated:a,loading:o,emptyMessage:"No Revisions Found"}))}},421:function(e,t,a){},422:function(e,t,a){"use strict";var n=a(2),r=a.n(n),o=a(3),c=a(11),s=a(0),i=a.n(s),l=a(36),u=a(53),d=a(420),p=a(169),m=a(342),h=a(343),b=a(158);a(425);t.a=function(e){var t=e.isPublish,a=void 0===t||t,n=e.revertCompleted,v=void 0===n||n,f=e.closeModal,g=e.onComplete,E=e.isOpen,w=e.currentTour,O=e.savePublicTour,y=e.userEmail,k=e.uptoDate,j=e.tourId,N=e.tier,T=e.gaId,x=e.mapboxToken,C=Object(l.d)(),P=Object(l.e)(function(e){return e}),I=P.account.tourAccountId,D=P.tours.tours,M=Object(s.useState)(!1),_=Object(c.a)(M,2),A=_[0],S=_[1],R=Object(s.useState)([]),L=Object(c.a)(R,2),H=L[0],B=L[1],F=Object(s.useState)(""),q=Object(c.a)(F,2),Q=q[0],z=q[1],U=Object(s.useState)(!1),W=Object(c.a)(U,2),Y=W[0],Z=W[1];Object(s.useEffect)(function(){E&&function(){var e=Object(o.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!0),B([]),e.next=5,Object(h.b)(I,j);case 5:t=e.sent,B(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:return e.prev=12,S(!1),e.finish(12);case 15:case"end":return e.stop()}},e,null,[[0,9,12,15]])}));return function(){return e.apply(this,arguments)}}()()},[E,I,j]),Object(s.useEffect)(function(){var e;D&&j&&z(null===(e=D[j])||void 0===e?void 0:e.name)},[D,j]);var G=function(){setTimeout(function(){Z(!1),g()},[1e3])},J=function(){var e=Object(o.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:Z(!0),C(Object(b.g)(j,G));case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return i.a.createElement(u.a,{className:"publish-modal",closeModal:f,isOpen:E,shouldCloseOnOverlayClick:!0},i.a.createElement("div",{className:"publish-modal__wrapper"},i.a.createElement("h3",null,a?"Publish Confirmation / ".concat(Q):"PROCEED WITH CAUTION"),i.a.createElement("p",{className:"publish-modal__message"},a?"You are about to publish the following ".concat(H.length," changes. This action cannot \n              be undone, select Publish Now to continue."):"Reverting changes will remove all unpublished items and update your \n              preview and editor mode with all data on your live tour. Any\n              unpublished changes you have below will be lost."),i.a.createElement(d.a,{data:H,paginated:!0,loadingData:A}),!a&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h4",null,"You cannot undo this action."),i.a.createElement("p",{className:"revert-modal__message"},"Are you sure you want to revert these changes?")),a?i.a.createElement(m.a,{userEmail:y,tourId:j,currentTour:w,uptoDate:k,savePublicTour:O,tier:N,gaId:T,mapboxToken:x,onPublishComplete:g,disabled:A}):i.a.createElement(p.a,{className:"btn-revert",disabled:A,saving:Y,changed:!k||!v,handleClick:J,changedText:"Revert",savingText:"Reverting",doneText:"\u2713 Reverted","data-cy":"tour-revert-btn"})))}},423:function(e,t,a){},424:function(e,t,a){},425:function(e,t,a){},427:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.tour,a=e.allTours;return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement("span",{className:"circle","data-cy":"publish-queue-count-icon"},function(e){var t=0;for(var a in e)e[a].uptoDate||(t+=1);return t}(a)),t&&!t.uptoDate&&r.a.createElement("span",{className:"circle","data-cy":"publish-queue-count-icon"},"!"))}},526:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(2),r=a.n(n),o=a(3),c=a(527),s=function(){var e=Object(o.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)();case 2:localStorage.clear(),t&&t.logout();case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},563:function(e,t,a){},564:function(e,t,a){},580:function(e,t,a){},581:function(e,t,a){e.exports=a.p+"static/media/logo-icon.12bf8e64.svg"},582:function(e,t,a){},583:function(e,t,a){},584:function(e,t,a){}}]);&(i.custom=n)),i}get(e,t){return t?this.aggregatedData[e]&&this.aggregatedData[e][t]:this.aggregatedData[e]}take(e){for(var t={},r="",n=!1,i=0;i<e.length;i++)t[r=e[i]]=w(this.aggregatedData[r]),t[r].length&&(n=!0),delete this.aggregatedData[r];return n?t:null}}function b(e,t){return null==e?function(e){e?e.c++:e={c:1};return e}(t):t?(t.c||(t=y(t.t)),t.c+=1,t.t+=e,t.sos+=e*e,e>t.max&&(t.max=e),e<t.min&&(t.min=e),t):{t:e}}function y(e){return{t:e,min:e,max:e,sos:e*e,c:1}}function w(e){return"object"!=typeof e?[]:(0,v.D)(e,A)}function A(e,t){return t}var _=i(8632),x=i(4402),E=i(4351);var D=i(5546),k=i(7956),j=i(3239),S=i(7894),R=i(9251);class T extends f{static featureName=R.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,R.t,r),l.il&&((0,k.N)((()=>(0,D.p)("docHidden",[(0,S.z)()],void 0,R.t,this.ee)),!0),(0,j.bP)("pagehide",(()=>(0,D.p)("winPagehide",[(0,S.z)()],void 0,R.t,this.ee))),this.importAggregator())}}var I=i(3081);class P extends f{static featureName=I.t9;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,I.t9,r),this.importAggregator()}}new class extends t{constructor(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,x.ky)(16);super(),l._A?(this.agentIdentifier=r,this.sharedAggregator=new m({agentIdentifier:this.agentIdentifier}),this.features={},(0,_.h5)(r,this),this.desiredFeatures=new Set(t.features||[]),this.desiredFeatures.add(p),(0,s.j)(this,t,t.loaderType||"agent"),this.run()):(0,e.Z)("Failed to initial the agent. Could not determine the runtime environment.")}get config(){return{info:(0,n.C5)(this.agentIdentifier),init:(0,n.P_)(this.agentIdentifier),loader_config:(0,n.DL)(this.agentIdentifier),runtime:(0,n.OP)(this.agentIdentifier)}}run(){try{const t=o(this.agentIdentifier),n=[...this.desiredFeatures];n.sort(((e,t)=>r.p[e.featureName]-r.p[t.featureName])),n.forEach((n=>{if(t[n.featureName]||n.featureName===r.D.pageViewEvent){const i=function(e){switch(e){case r.D.ajax:return[r.D.jserrors];case r.D.sessionTrace:return[r.D.ajax,r.D.pageViewEvent];case r.D.sessionReplay:return[r.D.sessionTrace];case r.D.pageViewTiming:return[r.D.pageViewEvent];default:return[]}}(n.featureName);i.every((e=>t[e]))||(0,e.Z)("".concat(n.featureName," is enabled but one or more dependent features has been disabled (").concat((0,E.P)(i),"). This may cause unintended consequences or missing data...")),this.features[n.featureName]=new n(this.agentIdentifier,this.sharedAggregator)}}))}catch(t){(0,e.Z)("Failed to initialize all enabled instrument classes (agent aborted) -",t);for(const e in this.features)this.features[e].abortHandler?.();const r=(0,_.fP)();return delete r.initializedAgents[this.agentIdentifier]?.api,delete r.initializedAgents[this.agentIdentifier]?.features,delete this.sharedAggregator,r.ee?.abort(),delete r.ee?.get(this.agentIdentifier),!1}}addToTrace(t){(0,e.Z)("Call to agent api addToTrace failed. The session trace feature is not currently initialized.")}setCurrentRouteName(t){(0,e.Z)("Call to agent api setCurrentRouteName failed. The spa feature is not currently initialized.")}interaction(){(0,e.Z)("Call to agent api interaction failed. The spa feature is not currently initialized.")}}({features:[p,T,P],loaderType:"lite"})})()})();</script>
<meta http-equiv="apple-mobile-web-app-capable" content="yes" />
<link rel="modulepreload" href="https://cdn.skypack.dev/pin/lit@v2.0.0-rc.3-RFrIXWBysJfo8GpKQ4Gc/mode=imports,min/optimized/lit.js" />
<link rel="modulepreload" href="/profiles/sitefarm/themes/sitefarm_one/dist/jquery.module.vG6vucuxogm0.js" />
<link rel="modulepreload" href="/profiles/sitefarm/themes/sitefarm_one/dist/_snowpack/pkg/jquery-hoverintent.QzuCi_STP-r5.js" />
<link rel="modulepreload" href="/profiles/sitefarm/themes/sitefarm_one/dist/_snowpack/pkg/superfish.hzX6spBBrKIs.js" />
<link rel="modulepreload" href="/profiles/sitefarm/themes/sitefarm_one/dist/_snowpack/pkg/slim-select.UX-dxNggOu_g.js" />
<link rel="modulepreload" href="/profiles/sitefarm/themes/sitefarm_one/dist/_snowpack/pkg/slidetoggle.liZoolNXNdF9.js" />
<link rel="modulepreload" href="/profiles/sitefarm/themes/sitefarm_one/dist/1_pattern_lab/lib/accessiblity-functions.YSa007ZYNnDb.js" />
<link rel="modulepreload" href="/profiles/sitefarm/themes/sitefarm_one/dist/1_pattern_lab/lib/submenu-toggle.7JFXpfgjxbc-.js" />
<link rel="modulepreload" href="/profiles/sitefarm/themes/sitefarm_one/dist/1_pattern_lab/primary-nav.z7wf9bRWyvhP.js" />
<link rel="preload" href="https://campusfont.ucdavis.edu/proxima-nova/proximanova_bold_macroman/proximanova-bold-webfont.woff2" as="font" type="font/woff" crossorigin="true" />
<link rel="preload" href="https://campusfont.ucdavis.edu/proxima-nova/proximanova_regular_macroman/proximanova-regular-webfont.woff2" as="font" type="font/woff" crossorigin="true" />
<link rel="preload" href="https://campusfont.ucdavis.edu/proxima-nova/proximanova_extrabold_macroman/proximanova-extrabold-webfont.woff2" as="font" type="font/woff" crossorigin="true" />
<link rel="preload" href="https://use.fontawesome.com/releases/v6.0.0/webfonts/fa-solid-900.woff2" as="font" type="font/woff" crossorigin="true" />
<link rel="icon" href="/sites/g/files/dgvnsk11386/files/favicon_0.ico" type="image/vnd.microsoft.icon" />
<link rel="canonical" href="https://www.alumni.ucdavis.edu/membership/alumni-and-friends" />
<link rel="shortlink" href="https://www.alumni.ucdavis.edu/node/11" />
<script src="/sites/g/files/dgvnsk11386/files/google_tag/primary/google_tag.script.js?s7jkz8" defer></script>

    <title>Cal Aggie Alumni Association Membership | One Aggie Network</title>
    <link rel="stylesheet" media="all" href="/sites/g/files/dgvnsk11386/files/css/css_N9umZUNSx16UFegchq1sM3ZngNsKw3VCeC0eU2gczwE.css?delta=0&amp;language=en&amp;theme=sitefarm_one&amp;include=eJxljlFOxDAMRC8UNUeKTOoWC8ezyphF4fRUSKBd-BuP5smPlnrIHA2htZNNd0vMcgKna5MQX2md9W9RiG7ibVyANLd4Y_1fbfmqQwsXU0d9EWrpLuR6ykNJOZWlY2oNzCFunxf2KPd4bLdpQ-ZqIffn1YFI-VDi-noAGUhl_U3FZeE9227suOtc9YI6vHw718M8dW5dbmmIH73Arl8BCHUH" />
<link rel="stylesheet" media="all" href="/sites/g/files/dgvnsk11386/files/css/css_wCPPNkzTTsnPKTQgA6dSAqsTc151hvYaiCRQ2mfSLh0.css?delta=1&amp;language=en&amp;theme=sitefarm_one&amp;include=eJxljlFOxDAMRC8UNUeKTOoWC8ezyphF4fRUSKBd-BuP5smPlnrIHA2htZNNd0vMcgKna5MQX2md9W9RiG7ibVyANLd4Y_1fbfmqQwsXU0d9EWrpLuR6ykNJOZWlY2oNzCFunxf2KPd4bLdpQ-ZqIffn1YFI-VDi-noAGUhl_U3FZeE9227suOtc9YI6vHw718M8dW5dbmmIH73Arl8BCHUH" />
<link rel="stylesheet" media="all" href="https://use.fontawesome.com/releases/v6.4.2/css/all.css" crossorigin="anonymous" />
<link rel="stylesheet" media="all" href="/sites/g/files/dgvnsk11386/files/css/css_3aK1QHj35OITuuvLNUxFBYyIPDRh43wqER-wYY66F6Q.css?delta=3&amp;language=en&amp;theme=sitefarm_one&amp;include=eJxljlFOxDAMRC8UNUeKTOoWC8ezyphF4fRUSKBd-BuP5smPlnrIHA2htZNNd0vMcgKna5MQX2md9W9RiG7ibVyANLd4Y_1fbfmqQwsXU0d9EWrpLuR6ykNJOZWlY2oNzCFunxf2KPd4bLdpQ-ZqIffn1YFI-VDi-noAGUhl_U3FZeE9227suOtc9YI6vHw718M8dW5dbmmIH73Arl8BCHUH" />

    <script src="/profiles/sitefarm/themes/sitefarm_one/dist/main.kBF_7_YArKhs.js?v=10.1.6" type="module"></script>

  </head>
  <body class="path-node page-node-type-sf-page node-11 l-header--fixed">
    <a href="#main-content" class="visually-hidden focusable skip-link">
      Skip to main content
    </a>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5CS5GBM" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas>
    


<div class="layout-container  ">
    <header class="l-header header" role="banner">
    
    <div class="mobile-bar">
      <div class="mobile-bar__nav-toggle">
        <button class="nav-toggle js-nav-toggle" aria-controls="primary-nav" aria-expanded="false" aria-label="Toggle Main Menu">
          <span class="nav-toggle__icon nav-toggle__icon--menu">Menu</span>
        </button>
      </div>
      <div class="mobile-bar__fixed-site-name"><a href="/" title="Home" rel="home">One Aggie Network</a></div>
      <div class="mobile-bar__university">
        <a href="https://www.ucdavis.edu/"><img src="/profiles/sitefarm/themes/sitefarm_one/images/uc-logo-gold.svg" class="ucd-logo" alt="UC Davis Logo" width="124" height="20" /></a>
      </div>
    </div>

    <div class="header__bar">
      <div class="header__university">
        <a href="https://www.ucdavis.edu/">
          <img src="/profiles/sitefarm/themes/sitefarm_one/images/uc-logo-blue.svg" class="ucd-logo" alt="UC Davis Logo" width="100" height="16" />
        </a>
      </div>
    </div>

    <div class="l-header__branding">
        <div class="region region-header">
    
<div id="block-sitefarm-one-branding" class="site-branding block block-system block-system-branding-block">
    
    
          <div class="site-branding__figure">
      <a href="/" title="Home" rel="home">
        <img src="/sites/g/files/dgvnsk11386/files/AAR-1.png" alt="Site Logo" class="site-logo" />
      </a>
    </div>
    <div class="site-branding__body">
            
  </div>
</div>

  </div>

    </div>

    <div class="l-navbar header__navbar menu--closed">
      <div class="l-container--navigation off-canvas off-canvas--left">
        <div class="off-canvas__container l-nav-horizontal">
          <div class="l-nav-horizontal__search-popup ">
              <div class="region region-search">
    <button class="search-popup__open js-search-popup__open">
  <span class="search-popup__open-icon">Open Search</span>
</button>
<div class="search-block-form search-popup" data-drupal-selector="search-block-form" id="block-sitefarm-one-search" role="search">
      <form action="/search/node" method="get" id="search-block-form" accept-charset="UTF-8" class="search-form">
  <div class="js-form-item form-item js-form-type-search form-type-search js-form-item-keys form-item-keys form-no-label">
      <label for="edit-keys" class="visually-hidden">Search</label>
        <input title="Enter the terms you wish to search for." class="search-form__input form-search" placeholder="Search..." required="required" data-drupal-selector="edit-keys" type="search" id="edit-keys" name="keys" value="" size="15" maxlength="128" />

        </div>
<div data-drupal-selector="edit-actions" class="form-actions js-form-wrapper form-wrapper" id="edit-actions"><input class="search-form__submit js-form-submit form-submit" data-drupal-selector="edit-submit" type="submit" id="edit-submit" value=" Submit" />
</div>

</form>

  </div>


  </div>

          </div>
          <div class="l-nav-horizontal__quick-links">
                            <div class="region region-quick-links">
    <div class="quick-links">
  <button id="block-sitefarm-one-quicklinks-menu" class="quick-links__title" aria-controls="quick-links" aria-expanded="false" aria-label="Toggle Quick Links Menu">
    Quick Links
    <span class="submenu-toggle"><span class="submenu-toggle__icon">+</span></span>
  </button>
  <nav aria-labelledby="block-sitefarm-one-quicklinks-menu" id="block-sitefarm-one-quicklinks" class="quick-links__menu u-hidden--visually quick-links--highlight">
              
              <ul class="menu">
                    <li class="menu-item">
        <a href="https://securelb.imodules.com/s/1768/rd18/index.aspx?sid=1768&amp;gid=2&amp;pgid=6068">Update Your Information</a>
              </li>
                <li class="menu-item">
        <a href="/membership/alumni-email" data-drupal-link-system-path="node/716">UC Davis Email Access</a>
              </li>
                <li class="menu-item">
        <a href="/scholarships" data-drupal-link-system-path="node/71">Scholarships</a>
              </li>
                <li class="menu-item">
        <a href="https://give.ucdavis.edu/CAAA/GIFTGEN?utm_source=alumni&amp;utm_medium=website&amp;utm_campaign=make%20a%20gift&amp;utm_content=quicklinks">Make a Gift to UC Davis</a>
              </li>
                <li class="menu-item">
        <a href="/business-partnership-program" data-drupal-link-system-path="node/1491">Business Partners</a>
              </li>
                <li class="menu-item">
        <a href="/membership/aggies-uncorked" data-drupal-link-system-path="node/1501">Alumni Wine Club</a>
              </li>
                <li class="menu-item">
        <a href="/career-resources" data-drupal-link-system-path="node/81">Career Resources</a>
              </li>
                <li class="menu-item">
        <a href="/volunteer" data-drupal-link-system-path="node/701">Volunteer</a>
              </li>
                <li class="menu-item menu-item--active-trail">
        <a href="/membership/alumni-and-friends" data-drupal-link-system-path="node/11" class="is-active">Cal Aggie Alumni Association</a>
              </li>
                <li class="menu-item">
        <a href="/parents" data-drupal-link-system-path="node/1881">Aggie Parent and Family Association</a>
              </li>
                <li class="menu-item">
        <a href="/membership/student-alumni-association" data-drupal-link-system-path="node/1956">Student Alumni Association</a>
              </li>
        </ul>
  


      </nav>
</div>

  </div>

                      </div>
          <div class="l-nav-horizontal__primary-nav">
              <div class="region region-navigation">
    


  <nav aria-labelledby="block-sitefarm-one-main-menu-menu" id="primary-nav" class="primary-nav primary-nav--superfish">
            
      <h2 class="visually-hidden" id="block-sitefarm-one-main-menu-menu">Main navigation (extended config)</h2>
    

        
              <ul suggestion="region_navigation" class="menu">
                                                    <li class="menu-item menu-item--expanded menu-item--active-trail">
                  <div class="submenu-toggle__wrapper primary-nav__top-link">
            <a href="/membership" data-drupal-link-system-path="node/976">          Membership<span class="primary-nav__submenu-indicator"></span>
        </a>
            <button class="submenu-toggle" aria-label="Toggle Submenu"><span class="submenu-toggle__icon"></span></button>
          </div>
                        <ul class="menu">
                                      <li class="menu-item menu-item--active-trail">
                            <a href="/membership/alumni-and-friends" data-drupal-link-system-path="node/11" class="is-active">Alumni, Friends, Staff and Faculty</a>
                        </li>
                                  <li class="menu-item">
                            <a href="/membership/parents" data-drupal-link-system-path="node/8241">Parents and Families</a>
                        </li>
                                  <li class="menu-item">
                            <a href="/membership/student-alumni-association" data-drupal-link-system-path="node/1956">Students</a>
                        </li>
                                  <li class="menu-item">
                            <a href="http://retireecenter.ucdavis.edu/">Retiree Center</a>
                        </li>
                                  <li class="menu-item">
                            <a href="/member-benefit-directory" data-drupal-link-system-path="node/5646">Aggie Rewards Alumni and Member Benefits</a>
                        </li>
                                  <li class="menu-item">
                            <a href="/membership/travel" data-drupal-link-system-path="node/691">Aggie Adventures Travel</a>
                        </li>
                                  <li class="menu-item">
                            <a href="/membership/aggies-uncorked" data-drupal-link-system-path="node/1501">Alumni Wine Club</a>
                        </li>
        </ul>
  
              </li>
                                                <li class="menu-item menu-item--expanded">
                  <div class="submenu-toggle__wrapper primary-nav__top-link">
            <a href="/join-local-network" data-drupal-link-system-path="node/731">          Alumni Networks<span class="primary-nav__submenu-indicator"></span>
        </a>
            <button class="submenu-toggle" aria-label="Toggle Submenu"><span class="submenu-toggle__icon"></span></button>
          </div>
                        <ul class="menu">
                                      <li class="menu-item">
                            <a href="/join-local-network/unitedstatesnetworks" data-drupal-link-system-path="node/741">U.S. Networks</a>
                        </li>
                                  <li class="menu-item">
                            <a href="/join-local-network/international-networks" data-drupal-link-system-path="node/1906">International Networks</a>
                        </li>
                                  <li class="menu-item">
                            <a href="/join-local-network/special-interest-networks" data-drupal-link-system-path="node/2791">Special Interest and Affinity Networks</a>
                        </li>
                                  <li class="menu-item">
                            <a href="/join-local-network/network-leader-resources" data-drupal-link-system-path="node/7916">Network Leader Resources</a>
                        </li>
        </ul>
  
              </li>
                                                <li class="menu-item menu-item--expanded">
                  <div class="submenu-toggle__wrapper primary-nav__top-link">
            <a href="/get-connected" data-drupal-link-system-path="node/6">          Stay Connected<span class="primary-nav__submenu-indicator"></span>
        </a>
            <button class="submenu-toggle" aria-label="Toggle Submenu"><span class="submenu-toggle__icon"></span></button>
          </div>
                        <ul class="menu">
                                      <li class="menu-item">
                            <a href="/events" data-drupal-link-system-path="events">Events</a>
                        </li>
                                  <li class="menu-item">
                            <a href="/volunteer" data-drupal-link-system-path="node/701">Volunteer</a>
                        </li>
                                  <li class="menu-item">
                            <a href="/social-media" data-drupal-link-system-path="node/1901">Social Media</a>
                        </li>
                                  <li class="menu-item">
                            <a href="/news" data-drupal-link-system-path="news">Recent News</a>
                        </li>
                                  <li class="menu-item">
                            <a href="/aggie-traditions" data-drupal-link-system-path="node/1926">Aggie Traditions</a>
                        </li>
                                  <li class="menu-item">
                            <a href="https://magazine.ucdavis.edu/">UC Davis Magazine</a>
                        </li>
                                  <li class="menu-item">
                            <a href="/college-and-schools-magazines" data-drupal-link-system-path="node/1986">College and Schools Magazines</a>
                        </li>
        </ul>
  
              </li>
                                                <li class="menu-item menu-item--expanded">
                  <div class="submenu-toggle__wrapper primary-nav__top-link">
            <a href="/career-resources" data-drupal-link-system-path="node/81">          Career Resources<span class="primary-nav__submenu-indicator"></span>
        </a>
            <button class="submenu-toggle" aria-label="Toggle Submenu"><span class="submenu-toggle__icon"></span></button>
          </div>
                        <ul class="menu">
                                      <li class="menu-item">
                            <a href="/career-resources/coaches-services" data-drupal-link-system-path="node/8216">Career Coaches and Services</a>
                        </li>
                                  <li class="menu-item">
                            <a href="/career-resources/career-video-library" data-drupal-link-system-path="node/8246">Career Video Library</a>
                        </li>
                                  <li class="menu-item">
                            <a href="/career-resources/established-professional" data-drupal-link-system-path="node/5261">Established Professional</a>
                        </li>
                                  <li class="menu-item">
                            <a href="/career-resources/in-transition" data-drupal-link-system-path="node/5266">In Transition</a>
                        </li>
                                  <li class="menu-item">
                            <a href="/career-resources/recent-graduate" data-drupal-link-system-path="node/5251">Recent Graduate</a>
                        </li>
                                  <li class="menu-item">
                            <a href="/career-resources/rising-professional" data-drupal-link-system-path="node/5256">Rising Professional</a>
                        </li>
        </ul>
  
              </li>
                                  <li class="menu-item">
                              <div class="primary-nav__top-link">
                    <a href="/parents" data-drupal-link-system-path="node/1881">Parents &amp; Families</a>
                      </div>
                        </li>
                                  <li class="menu-item">
                              <div class="primary-nav__top-link">
                    <a href="/membership/student-alumni-association" data-drupal-link-system-path="node/1956">Students</a>
                      </div>
                        </li>
                                  <li class="menu-item">
                              <div class="primary-nav__top-link">
                    <a href="https://give.ucdavis.edu/CAAA/GIFTGEN?utm_source=alumni&amp;utm_medium=website&amp;utm_campaign=give%20now&amp;utm_content=primarynav">Give Now</a>
                      </div>
                        </li>
        </ul>
  


  </nav>

  </div>

          </div>
        </div>
      </div>
    </div>

      </header>
  
  <main class="l-main">
    <a id="main-content" tabindex="-1"></a>    
      <div class="region region-pre-title">
    
<div id="block-caaabanner" class="image-banner block block-block-content block-block-contentc20aaceb-26a6-438c-a079-5b2f727f32ef">
    
    
          <a href="">
      
            <div class="field field--name-field-sf-m-block-primary-img field--type-entity-reference field--label-hidden field__item">  <img loading="lazy" src="/sites/g/files/dgvnsk11386/files/styles/sf_image_banner/public/media/images/London%20PDAW%202017_0.jpg?itok=ReDkO6Pf" width="2000" height="460" alt="UC Davis Alumni in London at Picnic Day celebration" class="image-style-sf-image-banner" />


</div>
      
      </a>
  
  
</div>
<div data-drupal-messages-fallback class="hidden"></div>

  </div>


      <div class="l-page-title region region-page-title">
    
<div id="block-sitefarm-one-page-title" class="block block-core block-page-title-block">
    
    
        <div>
  
      <h1 class="page-title"><span class="field field--name-title field--type-string field--label-hidden"> Cal Aggie Alumni Association Membership</span>
</h1>
    
</div>

  </div>

<div id="block-sitefarm-one-breadcrumbs" class="l-page-title__breadcrumb block block-system block-system-breadcrumb-block">
    
    
          <nav aria-labelledby="system-breadcrumb">
    <header id="system-breadcrumb" class="visually-hidden">Breadcrumb</header>
    <ol class="breadcrumbs">
          <li>
                  <a href="/">One Aggie Network</a>
              </li>
          <li>
                  <a href="/membership">Membership</a>
              </li>
          <li>
                   Cal Aggie Alumni Association Membership
              </li>
        </ol>
  </nav>

  </div>

  </div>


    
    <div class="l-container ">
      

              
      
          </div>

    <div class="l-container">
      <section class="    ">
                  
          <div class="l-content">
              <div class="region region-content">
    
<div id="block-membershiptypecaaa" class="block block-block-content block-block-contentd0a6a887-5c04-4106-b075-b7876dbf29c6 panel o-box">
      
        
          
            <div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><div class="align-center">
<h2 class="u-clear"><strong>Choose your CAAA membership level.</strong></h2>

<h5><strong><em><span>You can choose either an annual or life membership, see benefits listed below. </span></em></strong></h5>
</div></div>
      
      </div>

<div id="block-mhaggiecommunity" class="category-brand--primary l-sibling-grid--third block block-block-content block-block-contentf03c5c3d-2dc4-483e-8fff-6c975877fcc0 panel o-box">
    
    
      <a href="https://securelb.imodules.com/s/1768/rd18/index.aspx?sid=1768&amp;gid=2&amp;pgid=407&amp;pc=ALUMNI&amp;appealcode=web" class="marketing-highlight ">
    <div class="marketing-highlight__image">
      
            <div class="field field--name-field-sf-m-block-primary-img field--type-entity-reference field--label-hidden field__item">  <img loading="lazy" src="/sites/g/files/dgvnsk11386/files/styles/sf_landscape_4x3/public/media/images/alumni%20thumbnail%20%282%29.png?h=a01cff5f&amp;itok=-cTCFgQa" width="640" height="480" alt="UC Davis alumni graduates" class="image-style-sf-landscape-4x3" />


</div>
      
              <h3 class="marketing-highlight__type"><span>$60 /year</span></h3>
          </div>
    <div class="marketing-highlight__body">
      <h3 class="marketing-highlight__title">Alumni</h3>
              <p>UC Davis alumni. $60/yr Annual | $850 Life</p>
                    <span class="marketing-highlight__cta">Sign-up</span>
          </div>
  </a>
  
</div>

<div id="block-mhmembershiprecentgrads" class="category-brand--secondary l-sibling-grid--third block block-block-content block-block-contentfda16eee-0f3c-4da1-be71-d62a8e46c254 panel o-box">
    
    
      <a href="https://securelb.imodules.com/s/1768/rd18/index.aspx?sid=1768&amp;gid=2&amp;pgid=407&amp;pc=RECENT&amp;appealcode=web" class="marketing-highlight ">
    <div class="marketing-highlight__image">
      
            <div class="field field--name-field-sf-m-block-primary-img field--type-entity-reference field--label-hidden field__item">  <img loading="lazy" src="/sites/g/files/dgvnsk11386/files/styles/sf_landscape_4x3/public/media/images/New%20Grad%20%284%29.png?h=a01cff5f&amp;itok=VpAwv8xB" width="640" height="480" alt="UC Davis alumni graduates" class="image-style-sf-landscape-4x3" />


</div>
      
              <h3 class="marketing-highlight__type"><span>$30 /year</span></h3>
          </div>
    <div class="marketing-highlight__body">
      <h3 class="marketing-highlight__title">Recent Grads</h3>
              <p>Graduated in the last 5 years. $30/yr Annual | $425 Life</p>
                    <span class="marketing-highlight__cta">Sign-up</span>
          </div>
  </a>
  
</div>

<div id="block-mhhonoredaggies65" class="category-brand--admin-blue l-sibling-grid--third block block-block-content block-block-contenta1a081bf-f844-4e20-82f4-aa0301425cb3 panel o-box">
    
    
      <a href="https://securelb.imodules.com/s/1768/rd18/index.aspx?sid=1768&amp;gid=2&amp;pgid=407&amp;pc=FRIEND&amp;appealcode=web" class="marketing-highlight ">
    <div class="marketing-highlight__image">
      
            <div class="field field--name-field-sf-m-block-primary-img field--type-entity-reference field--label-hidden field__item">  <img loading="lazy" src="/sites/g/files/dgvnsk11386/files/styles/sf_landscape_4x3/public/media/images/New_Grad%5B1%5D.png?h=a01cff5f&amp;itok=xCUz4kp3" width="640" height="480" alt="Become a member!" class="image-style-sf-landscape-4x3" />


</div>
      
              <h3 class="marketing-highlight__type"><span>$75 /year</span></h3>
          </div>
    <div class="marketing-highlight__body">
      <h3 class="marketing-highlight__title">Friend</h3>
              <p>Supporters of UC Davis. $75/yr Annual | $900 Life</p>
                    <span class="marketing-highlight__cta">Sign-up</span>
          </div>
  </a>
  
</div>

<div id="block-sitefarm-one-content" class="panel--nested block block-system block-system-main-block panel o-box">
    
    
        
<article>

      
        
  
        
  
      <div class="u-space--no-margin-collapse node__content">
        <div class="layout layout--onecol">
    <div  class="layout__region layout__region--content">
      
<div class="block block-layout-builder block-field-blocknodesf-pagebody">
    
    
        
            <div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><div class="align-left"><a href="https://securelb.imodules.com/s/1768/rd18/index.aspx?sid=1768&amp;gid=2&amp;pgid=407&amp;pc=ALL&amp;appealcode=web">
<div class="media media--type-sf-image-media-type media--view-mode-default">
  
          <img loading="lazy" src="/sites/g/files/dgvnsk11386/files/media/images/CAAA%20General%20Block%202%20%283%29.png" width="1875" height="606" alt="Become a member of the Cal Aggie Alumni Association!" /></div>
</a>

<h3 class="heading--auxiliary">Make the most of your Aggie experience!</h3>

<p>Members have access to exclusive career events and services, shopping and hotel, travel, and event tickets/concert discounts! New grads, join now and take advantage of your recent grad status to save. Show your Aggie Pride and become a lifetime member!</p>

<p><a class="btn--primary" href="https://securelb.imodules.com/s/1768/rd18/index.aspx?sid=1768&amp;gid=2&amp;pgid=407&amp;pc=ALL&amp;appealcode=web">Become a member</a></p>

<h3 class="heading--auxiliary">Need help?</h3>

<p>Call 530-752-0286 to join, renew or upgrade a membership by phone. You can also email us directly at <a href="mailto:alumni@ucdavis.edu">alumni@ucdavis.edu</a>. </p>

<h3 class="heading--auxiliary">Impacts of your membership</h3>

<p><span><span>Our alumni have the opportunity to take advantage of general programming and network opportunities, but by becoming a member of CAAA you’ll have access to additional programming, discounts and other benefits. Your membership dues also help fund programming for all of our alumni, provide scholarships to UC Davis students and allow us opportunities to serve and connect Aggies.</span></span></p>

<h3 class="heading--auxiliary">Advantages of membership</h3>

<p><span><span>The Cal Aggie Alumni Association (CAAA) works hard to serve our Aggie community with membership opportunities for students through our Student Alumni Association (SAA), their families through our Aggie Parent and Family Association (APFA) and of course our alumni. We strive to curate events, resources and benefits for our Aggies to serve them throughout their UC Davis experience and into their professional lives. Our ultimate goal is always to help with the growth and success of our Aggie community. </span></span></p>
</div>

<ul class="l-column--2 list--arrow"><li><span><span><span><span><span><span><span><span><span><a href="/events">Networking and social events</a> throughout the world</span></span></span></span></span></span></span></span></span></li>
	<li><span><span><span><span><span><span><span><span><span>Free search tools to find alumni-owned businesses and partners</span></span></span></span></span></span></span></span></span></li>
	<li><span><span><span><span><span><span><span><span><span>Our monthly e-newsletter, Aggie Connections</span></span></span></span></span></span></span></span></span></li>
	<li><a href="/career-resources"><span><span><span><span><span><span><span><span><span>Career networking opportunities</span></span></span></span></span></span></span></span></span></a></li>
	<li><span><span><span><span><span><span><span><span><span>In-person access and borrowing privileges at all 10 University of California libraries</span></span></span></span></span></span></span></span></span></li>
	<li><a href="/member-benefit-directory"><span><span><span><span><span><span><span><span><span>Discounts to restaurants, shops, home insurance and auto insurance in Davis and nationwide</span></span></span></span></span></span></span></span></span></a></li>
	<li><span><span><span>Exclusive invitations to <a href="/alumni-wine-beer-program">Alumni Wine &amp; Beer Program</a> events</span></span></span></li>
	<li><span><span><span><span><span><span><span><span><span>VIP treatment at UC Davis events including Homecoming and Picnic Day</span></span></span></span></span></span></span></span></span></li>
	<li><span><span><span><span><span><span><span><span><span>Discounts on </span></span></span><span><span><span><span><span><a href="https://extension.ucdavis.edu/">UC Davis Continuing and Professional Education Courses</a></span></span></span></span></span></span></span></span></span></span></span></li>
	<li><span><span><span>Travel opportunities throughout the world</span></span></span></li>
	<li><span><span><span>Alumni locator service</span></span></span></li>
	<li><span><span><span><span><span><span><span><span>And <a href="/member-benefit-directory">much, much more</a>. </span></span></span></span></span></span></span></span></li>
</ul><p><em><span><span><span>Prices and benefits are subject to change. Memberships are tax-deductible gifts and are nonrefundable and nontransferable, unless purchased for someone else as a gift.</span></span></span></em></p></div>
      
  </div>

<div class="block block-layout-builder block-extra-field-blocknodesf-pagecontent-moderation-control">
    
    
        
  </div>

    </div>
  </div>

    </div>
  
</article>

  </div>

  </div>

          </div>
                        </section>
    </div>

    <div class="l-container">
          </div>

      </main>

    <footer class="l-footer footer dark-background">
        <div class="l-container">
        <div class="region region-footer flex-footer">
                  <div class="flex-footer__item">
          


<nav aria-labelledby="block-footermenucolumn1-menu" id="block-footermenucolumn1" class="footer-nav">
            
      <h2 class="visually-hidden" id="block-footermenucolumn1-menu">Footer Menu Column 1</h2>
    

        
              <ul class="menu">
                    <li class="menu-item">
        <a href="/about" data-drupal-link-system-path="node/56">About</a>
              </li>
                <li class="menu-item">
        <a href="/about/history" data-drupal-link-system-path="node/51">History</a>
              </li>
                <li class="menu-item">
        <a href="/board-directors" data-drupal-link-system-path="node/36">CAAA Board of Directors</a>
              </li>
                <li class="menu-item">
        <a href="/partners" data-drupal-link-system-path="node/3451">Business Partners</a>
              </li>
                <li class="menu-item">
        <a href="/about/campus-partners" data-drupal-link-system-path="node/8841">Campus Partners</a>
              </li>
                <li class="menu-item">
        <a href="/scholarships" data-drupal-link-system-path="node/71">Scholarships</a>
              </li>
                <li class="menu-item">
        <a href="/about/alumni-center" data-drupal-link-system-path="node/21">Alumni Center</a>
              </li>
                <li class="menu-item">
        <a href="/about/alumnistats" data-drupal-link-system-path="node/1976">Alumni Stats</a>
              </li>
                <li class="menu-item">
        <a href="/about/uc-davis-alumni-awards" data-drupal-link-system-path="node/441">Alumni Awards</a>
              </li>
                <li class="menu-item">
        <a href="/about/contact-us" data-drupal-link-system-path="node/46">Contact Us</a>
              </li>
        </ul>
  


  </nav>

        </div>
              <div class="flex-footer__item">
          


<nav aria-labelledby="block-footermenucolumn2-menu" id="block-footermenucolumn2" class="footer-nav">
            
      <h2 class="visually-hidden" id="block-footermenucolumn2-menu">Footer Menu Column 2</h2>
    

        
              <ul class="menu">
                    <li class="menu-item">
        <a href="/membership" data-drupal-link-system-path="node/976">Membership</a>
              </li>
                <li class="menu-item menu-item--active-trail">
        <a href="/membership/alumni-and-friends" data-drupal-link-system-path="node/11" class="is-active"> Cal Aggie Alumni Association</a>
              </li>
                <li class="menu-item">
        <a href="/membership/parents" data-drupal-link-system-path="node/8241">Aggie Parent and Family Association</a>
              </li>
                <li class="menu-item">
        <a href="/membership/student-alumni-association" data-drupal-link-system-path="node/1956">Student Alumni Association</a>
              </li>
                <li class="menu-item">
        <a href="/member-benefit-directory" data-drupal-link-system-path="node/5646">Member Benefits Directory</a>
              </li>
                <li class="menu-item">
        <a href="/membership/travel" data-drupal-link-system-path="node/691">Aggie Adventures Travel Program</a>
              </li>
                <li class="menu-item">
        <a href="/membership/aggies-uncorked" data-drupal-link-system-path="node/1501">Alumni Wine and Beer Program</a>
              </li>
                <li class="menu-item">
        <a href="https://retireecenter.ucdavis.edu">Retiree Center</a>
              </li>
                <li class="menu-item">
        <a href="/career-resources" data-drupal-link-system-path="node/81">Career Resources</a>
              </li>
        </ul>
  


  </nav>

        </div>
              <div class="flex-footer__item">
          


<nav aria-labelledby="block-footermenucolumn3-menu" id="block-footermenucolumn3" class="footer-nav">
            
      <h2 class="visually-hidden" id="block-footermenucolumn3-menu">Footer Menu Column 3</h2>
    

        
              <ul class="menu">
                    <li class="menu-item">
        <a href="/join-local-network" data-drupal-link-system-path="node/731">Alumni Networks</a>
              </li>
                <li class="menu-item">
        <a href="/volunteer" data-drupal-link-system-path="node/701">Volunteer</a>
              </li>
                <li class="menu-item">
        <a href="/events" data-drupal-link-system-path="events">Upcoming Events</a>
              </li>
                <li class="menu-item">
        <a href="/news" data-drupal-link-system-path="news">Latest Articles</a>
              </li>
                <li class="menu-item menu-item--collapsed">
        <a href="/parents" data-drupal-link-system-path="node/1881">Parent and Family Program</a>
              </li>
                <li class="menu-item">
        <a href="/aggie-traditions" data-drupal-link-system-path="node/1926">Aggie Traditions</a>
              </li>
                <li class="menu-item">
        <a href="/social-media" data-drupal-link-system-path="node/1901">Connect on Social Media</a>
              </li>
                <li class="menu-item">
        <a href="https://give.ucdavis.edu/CAAA/GIFTGEN?utm_source=alumni&amp;utm_medium=website&amp;utm_campaign=make%20a%20gift&amp;utm_content=footer">Make a Gift</a>
              </li>
        </ul>
  


  </nav>

        </div>
              <div class="flex-footer__item">
          
<div id="block-footercontactinfo" class="block block-block-content block-block-content6d8e4fa8-40f1-4768-8ab7-cea64acde534">
      
        
          
            <div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><p class="u-clear"><strong>University of<br />
California, Davis</strong></p>

<p>One Shields Avenue<br />
Davis, CA 95616-5270</p>

<p class="u-clear"><strong>Alumni &amp; Affiliate Relations</strong></p>

<p>Toll free: 800-242-GRAD<br />
Main line: 530-752-0286<br />
Fax: 530-752-3395<br /><a href="mailto:alumni@ucdavis.edu">alumni@ucdavis.edu</a></p></div>
      
      </div>

        </div>
            </div>


      <div class="footer-spacer">
        <div class="footer-spacer__logo">
          <a href="https://www.ucdavis.edu/"><img src="/profiles/sitefarm/themes/sitefarm_one/images/aggie-logo-white.svg" class="ucd-logo" alt="UC Davis footer logo" width="180" height="140" loading="lazy" /></a>
        </div>
      </div>

        <div class="region region-footer-credits">
    
<div id="block-sitefarm-one-uccredits" class="uc-footer block block-uc-credits block-uc-credits-block">
    
    
        
    <ul class="list--pipe">
            <li><a href="http://ucdavis.edu/help/privacy-accessibility.html">Privacy & Accessibility</a></li>    <li><a href="https://diversity.ucdavis.edu/principles-community">Principles of Community</a></li>        <li><a href="/sitemap">Sitemap</a></li>    <li>Last update: October 10, 2023</li>  </ul>
  <p>Copyright © The Regents of the University of California, Davis campus. All rights reserved.</p>
</div>

<div id="block-disclaimer" class="block block-block-content block-block-contente5f3b08f-dd2a-4e43-86f6-b0163a08793b">
      
        
          
            <div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><p class="text-align-center">Links to commercial websites do not imply endorsement by the University of California or its affiliates.</p></div>
      
      </div>

  </div>


      <div class="u-align--center">This site is officially grown in <a href="https://sitefarm.ucdavis.edu">SiteFarm</a>.</div>

    </div>
      </footer>
  
</div>

  </div>

    
    <script type="application/json" data-drupal-selector="drupal-settings-json">{"path":{"baseUrl":"\/","scriptPath":null,"pathPrefix":"","currentPath":"node\/11","currentPathIsAdmin":false,"isFront":false,"currentLanguage":"en"},"pluralDelimiter":"\u0003","suppressDeprecationErrors":true,"google_analytics":{"account":"UA-57740802-1","trackOutbound":true,"trackMailto":true,"trackTel":true,"trackDownload":true,"trackDownloadExtensions":"7z|aac|arc|arj|asf|asx|avi|bin|csv|doc(x|m)?|dot(x|m)?|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|msi|msp|pdf|phps|png|ppt(x|m)?|pot(x|m)?|pps(x|m)?|ppam|sld(x|m)?|thmx|qtm?|ra(m|r)?|sea|sit|tar|tgz|torrent|txt|wav|wma|wmv|wpd|xls(x|m|b)?|xlt(x|m)|xlam|xml|z|zip"},"ajaxTrustedUrl":{"\/search\/node":true},"user":{"uid":0,"permissionsHash":"6076760d77082a255c62bf4cac0dff6013a8a4203f8b18ad684d4268a3e54322"}}</script>
<script src="/sites/g/files/dgvnsk11386/files/js/js_sd40XkBwud9yCSzi-y71do8kN2hLZovdYgVy6j8tMBI.js?scope=footer&amp;delta=0&amp;language=en&amp;theme=sitefarm_one&amp;include=eJxljlFOxDAMRC8UNUeKTOoWC8ezyphF4fRUSKBd-BuP5smPlnrIHA2htZNNd0vMcgKna5MQX2md9W9RiG7ibVyANLd4Y_1fbfmqQwsXU0d9EWrpLuR6ykNJOZWlY2oNzCFunxf2KPd4bLdpQ-ZqIffn1YFI-VDi-noAGUhl_U3FZeE9227suOtc9YI6vHw718M8dW5dbmmIH73Arl8BCHUH"></script>
<script src="/profiles/sitefarm/themes/sitefarm_one/dist/primary-nav.YjpNf22ZJUhm.js?v=10.1.6" type="module"></script>

  <script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"020debb3a9","applicationID":"1024149658,1065795583","transactionName":"NgEDZBEEWEoHUEUKWQ9LIFMXDFlXSXdDFkYACD1eDAFTZSVcXxdEDggNVRE5eFYCVmcKUxYnDl4XF1lVClZDTggXDQRH","queueTime":23,"applicationTime":667,"atts":"GkYAElkeS0Q=","errorBeacon":"bam.nr-data.net","agent":""}</script></body>
</html>
