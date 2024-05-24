(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{0:function(e,t){},"07Z1":function(e,t,n){},"0SDT":function(e,t,n){"use strict";var r=n("2mXy");t.a=function(e){return Object(r.h)(r.Fragment,null,Object(r.h)("div",{class:"w-full lg:w-8/12"},Object(r.h)("div",{class:"row justify-center"},Object(r.h)("div",{class:"w-full lg:w-3/4"},e.children))))}},"14Sl":function(e,t,n){"use strict";n("rB9j");var r=n("4zBA"),o=n("busE"),i=n("kmMV"),a=n("0Dky"),u=n("tiKp"),c=n("kRJp"),s=u("species"),l=RegExp.prototype;e.exports=function(e,t,n,d){var f=u(e),p=!a((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),_=p&&!a((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[s]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!p||!_||n){var E=r(/./[f]),h=t(f,""[e],(function(e,t,n,o,a){var u=r(e),c=t.exec;return c===i||c===l.exec?p&&!a?{done:!0,value:E(t,n,o)}:{done:!0,value:u(n,t,o)}:{done:!1}}));o(String.prototype,e,h[0]),o(l,f,h[1])}d&&c(l[f],"sham",!0)}},"3NNm":function(e,t,n){"use strict";n.r(t);n("sMBO"),n("pNMO"),n("4Brf"),n("ma9I"),n("DQNa"),n("07d7"),n("JfAA"),n("zKZe"),n("rB9j"),n("UxlC"),n("EnZy"),n("J30X"),n("0oug"),n("4mDm"),n("PKPk"),n("3bBZ"),n("+2oP"),n("pjDv"),n("eoL8");var r=n("2mXy"),o=n("Qyje"),i=n.n(o),a=n("HYZD"),u=n("8H9f"),c=n("0SDT"),s=n("AAE2"),l=n("I0j7"),d=n("MOxe"),f=n("NKCw"),p=n("woEc"),_=n("kao6"),E=n("scas"),h=n("8ejd"),m=n("Dlue");n("U15V");function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(){var e,t,n=v(Object(d.useState)({name:"",description:""}),2),o=n[0],b=n[1],O=v(Object(_.a)(),1)[0],y=window.qf.recipe,g=y.id,R=y.name,C=y.description;Object(d.useEffect)((function(){b({name:R,description:C}),j("video_edit[name]",R),j("video_edit[description]",C),E.a.init()}),[]);var S=Object(f.b)(),T=S.register,I=S.formState.errors,A=S.handleSubmit,j=S.setValue,D=function(e){var t=e.target,n=t.name,r=t.value;b(Object.assign(Object.assign({},o),function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n.split("[")[1].replace(/]/g,""),r)))},P=function(){window.location.href="/",E.a.remove()};return Object(r.h)("div",{class:"edit--popup--component"},Object(r.h)("div",{class:"form"},Object(r.h)("div",{class:"container"},Object(r.h)(a.a,{title:"Edytuj Wideoprzepis",onClose:P}),Object(r.h)("form",{class:"edit--popup--form",onSubmit:A((function(e){O("".concat(h.a.VIDEO_EDIT,"/").concat(g.toString()),i.a.stringify(Object.assign(Object.assign({},e),{tokenId:"videoEdit"})),"post").then((function(e){e.status==m.b?(e.message&&l.a.success({text:e.message}),e.url&&(window.location.href=e.url)):e.status==m.a&&l.a.error({text:e.message})})).catch((function(e){e.message&&l.a.error({text:e.message})}))}),(function(){l.a.error({text:"Błędy w formularzu"})}))},Object(r.h)("div",{class:"edit--container"},Object(r.h)("div",{class:"container"},Object(r.h)("div",{class:"edit--border"},Object(r.h)("div",{class:"row"},Object(r.h)(u.a,null,Object(r.h)("div",{class:"col--steps mx-auto"},Object(r.h)("h3",{class:"miniature--title"},"Podgląd miniatury"),Object(r.h)("div",{class:"steps--border"},Object(r.h)("div",{class:"mini--recipe--block"},Object(r.h)("div",{class:""},Object(r.h)("picture",null,Object(r.h)("img",{src:window.qf.recipe.photoPath,alt:window.qf.recipe.name}))),Object(r.h)("div",{class:"avatar--component"},Object(r.h)("div",{class:"border"},Object(r.h)("div",{class:"img"},Object(r.h)("img",{src:"/images/tmp/50.jpg",alt:"",class:"lazyLoad",loading:"lazy"}))),Object(r.h)("div",{class:"nick"},window.qf.user.name)),Object(r.h)("div",{class:"txt"},Object(r.h)("h4",{class:"category"},"Wideoprzepisy"),Object(r.h)("h3",{class:"title"},o.name)),Object(r.h)("div",{class:"separator"}))))),Object(r.h)(c.a,null,Object(r.h)("div",{class:"my-20"},Object(r.h)("div",{class:"form--group"},Object(r.h)(s.a,{id:"title",name:"Tytuł"}),Object(r.h)("input",Object.assign({class:"form--input ".concat((null===(e=null==I?void 0:I.video_edit)||void 0===e?void 0:e.name)?"-error":""),placeholder:"Wpisz tytuł swojego wideoprzepisu",type:"text",value:o.name},T("video_edit[name]",{required:!0}),{onKeyDown:p.c,onChange:D}))),Object(r.h)("div",{class:"form--group"},Object(r.h)(s.a,{id:"description",name:"Opis"}),Object(r.h)("textarea",Object.assign({class:"form--input -textarea ".concat((null===(t=null==I?void 0:I.video_edit)||void 0===t?void 0:t.description)?"-error":""),placeholder:"Opis",value:o.description},T("video_edit[description]",{required:!0}),{onChange:D}))))))))),Object(r.h)("div",{class:"popup--bottom--bar"},Object(r.h)("div",{class:"container"},Object(r.h)("div",{class:"items--container flex justify-between items-center"},Object(r.h)("button",{type:"submit",class:"btn--primary -w-160"},"Zapisz"),Object(r.h)("button",{type:"button",class:"btn--back ml-5",onClick:P},"Anuluj"))))))))}},"8H9f":function(e,t,n){"use strict";n("NcRM");var r=n("2mXy");t.a=function(e){return Object(r.h)(r.Fragment,null,Object(r.h)("div",{class:"w-full lg:w-4/12"},Object(r.h)("div",{class:"relative min-h-full"},Object(r.h)("img",{src:"https://assetssmaker.iplsc.com/build/images/gradient.1c866763.png",alt:"",class:"col--gradient"}),Object(r.h)("div",{class:"container--padding pt-5 md:pt-12 -first"},e.children))))}},"8ejd":function(e,t,n){"use strict";t.a={INDEX:"/",PRIVACY:"https://prywatnosc.interia.pl/?sr=c21ha2Vy",USER_SESSION_LIFETIME:"/user/check_lifetime",SEARCH_SUGGESTION:"/search-suggestions",SEARCH_REDIRECT:"/szukaj",SEARCH_TYPE_RECIPES:"/polecane-przepisy/{name}",SEARCH:"/polecane/{name}",INCREASE_LIKES_COUNT:"/counters/like",GET_COUNTERS_BAR:"/get-counters-bar",INCREASE_COOK_BOOKED_COUNT:"/counters/cook-booked",INCREASE_SENT_COUNT:"/counters/sent",INCREASE_PRINTED_COUNT:"/counters/printed",INCREASE_VISIT_COUNT:"/counters/visited",INCREASE_PLANNED_COUNT:"/counters/planned",REPORT_ITEM:"/item/report",BASE_ENTITY_DELETE:"/base-entity/delete",GET_RECIPE_IMAGE:"/get-recipe-image",RECIPE:"/przepisy.html",RECIPE_ADD:"/przepis/dodaj",RECIPE_ADD_STEP1:"/przepis/dodaj-1",RECIPE_ADD_STEP2:"/przepis/dodaj-2",RECIPE_ADD_STEP3:"/przepis/dodaj-3",RECIPE_ADD_STEP4:"/przepis/dodaj-4",RECIPE_EDIT_STEP1:"/przepis/edytuj-1",RECIPE_EDIT_STEP2:"/przepis/edytuj-2",RECIPE_EDIT_STEP3:"/przepis/edytuj-3",RECIPE_EDIT_STEP4:"/przepis/edytuj-4",RECIPE_CANCEL:"/przepis/cancel",RECIPE_ALGORITHM_2_RECIPES:"/get-algorithm2-recipes",RECIPE_STAR_RATING_VOTE:"/counters/star-rating-vote",RECIPE_GET_STAR_RATING_VOTES_COUNT:"/counters/get-star-rating-votes-count",VIDEO:"/filmy.html",VIDEO_EDIT:"/video/edytuj",PLAYLIST_ADD:"/playlist/dodaj",PLAYLIST_DELETE:"/playlist/delete",COOKBOOKS:"/ksiazki-kucharskie.html",COOKBOOK:"/ksiazka-kucharska-{slug},{id}.html",COOKBOOK_EDIT_ITEM:"/cookbook/edit",COOKBOOK_EDIT:"/edycja-ksiazki,{id}",COOKBOOK_COPY:"/cookbook/copy",COOKBOOK_LIST_USER:"/cookbook/user-list",COOKBOOK_ADD:"/cookbook/add",COOKBOOK_GENERATE_PDF:"/cookbook-generate-pdf",REGISTER:"/register",REGISTER_UID_DETAILS:"/register/uid-details",CHECK_NICK_AVAILABILITY:"/check-nick-availability",PASSWORD_RECOVERY:"/przypomnienie-hasla",LOGIN:"/login",USER_PROFILE:"/user/profile",USER_PROFILE_RECIPES:"/user/profilerecipes",USER_PROFILE_COOKBOOKS:"/user/profilecookbooks",USER_PROFILE_VIDEOS:"/user/profilevideos",USER_PROFILE_RATED:"/user/profilerated/ratedby/",USER_PROFILE_OBSERVED:"/user/profileobserved",USER_PROFILE_ADSENSE:"/user/profileadsense",USER_PROFILE_SETTINGS:"/user/profilesettings",USER_PROFILE_PLANNER:"/kucharz-{slug}/planer,{id}",USER_CONFIG_COVER_UPDATE:"/user/config/cover/update",USER_CONFIG_AVATAR_UPDATE:"/profile/update-avatar",USER_OBSERVE:"/user/observe",CHECK_USER_OBSERVING:"/user/observing",GET_FORM_TOKEN:"/get-form-token",PROFILE_CHANGE_EMAIL:"/profile/update-email",PROFILE_UPDATE_PASSWORD:"/profile/update-password",PROFILE_UPDATE_NOTIFICATIONS:"/profile/update-notifications",PROFILE_UPDATE_NEWSLETTER:"/profile/update-newsletter",PROFILE_DELETE_ACCOUNT:"/profile/delete-account",PROFILE_ADD_AUTH_METHOD:"/profile/add-auth-method",PROFILE_REMOVE_AUTH_METHOD:"/profile/remove-auth-method",PROFILE_UPDATE_DETAILS:"/profile/update-details",PROFILE_GET_PLANER:"/user/profileplanner",ADSENSE:"/user/profileadsense",ADSENSE_PROCEED:"/adsense/proceed",ADSENSE_RESIGN:"/adsense/abandon",ADSENSE_AUTHENTICATE:"/adsense/authenticate",ADSENSE_INFO:"/adsense",CHAT:"/chat",CHAT_USERS:"/chat/users",ADD_CHAT_MESSAGE_USERS:"/chat/message/send",CHAT_ITEM:"/chat/{id}",CHAT_MESSAGE_UPDATE_STATUS:"/chat/message/read",CHAT_FIND:"/chat/find",CHAT_REMOVE:"/chat/remove",CHAT_LOAD_MORE:"/chat/load",COMMENT_ADD:"/comments/add-comment",COMMENT_LIKE:"/comments/set-like",GET_ENTITY_COMMENTS:"/get-entity-comments",PLANNER_ADD:"/planner/add",PLANNER_EDIT:"/planner/edit",PLANNER_DELETE:"/planner/delete",ADD_TO_NEWSLETTER:"/newsletter/add",REMOVE_FROM_NEWSLETTER:"/newsletter/remove/confirm",ARTICLE:"/artykuly.html",VOTE_SURVEY:"/vote/survey",VOTE_DUEL:"/vote/duel",GET_PLEBISCITE_OBJECT:"/plebiscite/get-plebiscite-objects",GET_PLEBISCITE_VOTES:"/plebiscite/get-plebiscite-votes",ADD_PLEBISCITE_OBJECT:"/plebiscite/add-plebiscite-object",ADD_PLEBISCITE_OBJECT_VOTE:"/plebiscite/add-plebiscite-object-vote",SHARE_PLEBISCITE_OBJECT_VOTE:"/plebiscite/share-plebiscite-object-vote ",GET_USER_RECIPES:"/get-user-recipes",SEND_EMBEDDABLE_CONTEST_ANSWER:"/send-embeddable-contest-answer",REFRIGERATOR_SEARCH:"/lodowka/szukaj",WRITE_US:"/napisz-do-nas"}},AAE2:function(e,t,n){"use strict";n("sMBO"),n("07Z1");var r=n("2mXy");t.a=function(e){var t=e.id,n=e.name,o=e.optional,i=e.floating;return Object(r.h)("label",{class:"".concat(i?"floating--placeholder":"label--component"),htmlFor:t},n," ",o&&Object(r.h)("span",{class:"optional"},"(nieobowiązkowe)"))}},DLK6:function(e,t,n){var r=n("4zBA"),o=n("ewvW"),i=Math.floor,a=r("".charAt),u=r("".replace),c=r("".slice),s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,d,f){var p=n+e.length,_=r.length,E=l;return void 0!==d&&(d=o(d),E=s),u(f,E,(function(o,u){var s;switch(a(u,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,n);case"'":return c(t,p);case"<":s=d[c(u,1,-1)];break;default:var l=+u;if(0===l)return o;if(l>_){var f=i(l/10);return 0===f?o:f<=_?void 0===r[f-1]?a(u,1):r[f-1]+a(u,1):o}s=r[l-1]}return void 0===s?"":s}))}},Dlue:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return a}));var r="OK",o="ERROR",i="VALIDATION_ERROR",a="UNABLE_TO_UPDATE"},EnZy:function(e,t,n){"use strict";var r=n("K6Rb"),o=n("xluM"),i=n("4zBA"),a=n("14Sl"),u=n("ROdP"),c=n("glrk"),s=n("HYAF"),l=n("SEBh"),d=n("iqWW"),f=n("UMSQ"),p=n("V37c"),_=n("3Eq5"),E=n("Ta7t"),h=n("FMNM"),m=n("kmMV"),v=n("n3/R"),b=n("0Dky"),O=v.UNSUPPORTED_Y,y=Math.min,g=[].push,R=i(/./.exec),C=i(g),S=i("".slice);a("split",(function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=p(s(this)),a=void 0===n?4294967295:n>>>0;if(0===a)return[];if(void 0===e)return[i];if(!u(e))return o(t,i,e,a);for(var c,l,d,f=[],_=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,v=new RegExp(e.source,_+"g");(c=o(m,v,i))&&!((l=v.lastIndex)>h&&(C(f,S(i,h,c.index)),c.length>1&&c.index<i.length&&r(g,f,E(c,1)),d=c[0].length,h=l,f.length>=a));)v.lastIndex===c.index&&v.lastIndex++;return h===i.length?!d&&R(v,"")||C(f,""):C(f,S(i,h)),f.length>a?E(f,0,a):f}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:o(t,this,e,n)}:t,[function(t,n){var r=s(this),a=null==t?void 0:_(t,e);return a?o(a,t,r,n):o(i,p(r),t,n)},function(e,r){var o=c(this),a=p(e),u=n(i,o,a,r,i!==t);if(u.done)return u.value;var s=l(o,RegExp),_=o.unicode,E=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(O?"g":"y"),m=new s(O?"^(?:"+o.source+")":o,E),v=void 0===r?4294967295:r>>>0;if(0===v)return[];if(0===a.length)return null===h(m,a)?[a]:[];for(var b=0,g=0,R=[];g<a.length;){m.lastIndex=O?0:g;var T,I=h(m,O?S(a,g):a);if(null===I||(T=y(f(m.lastIndex+(O?g:0)),a.length))===b)g=d(a,g,_);else{if(C(R,S(a,b,g)),R.length===v)return R;for(var A=1;A<=I.length-1;A++)if(C(R,I[A]),R.length===v)return R;g=b=T}}return C(R,S(a,b)),R}]}),!!b((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),O)},FMNM:function(e,t,n){var r=n("2oRo"),o=n("xluM"),i=n("glrk"),a=n("Fib7"),u=n("xrYK"),c=n("kmMV"),s=r.TypeError;e.exports=function(e,t){var n=e.exec;if(a(n)){var r=o(n,e,t);return null!==r&&i(r),r}if("RegExp"===u(e))return o(c,e,t);throw s("RegExp#exec called on incompatible receiver")}},FdF9:function(e,t,n){"use strict";n.r(t),n.d(t,"version",(function(){return B})),n.d(t,"Children",(function(){return p})),n.d(t,"render",(function(){return A})),n.d(t,"hydrate",(function(){return j})),n.d(t,"unmountComponentAtNode",(function(){return z})),n.d(t,"createPortal",(function(){return R})),n.d(t,"createFactory",(function(){return F})),n.d(t,"cloneElement",(function(){return K})),n.d(t,"isValidElement",(function(){return V})),n.d(t,"findDOMNode",(function(){return H})),n.d(t,"PureComponent",(function(){return u})),n.d(t,"memo",(function(){return c})),n.d(t,"forwardRef",(function(){return d})),n.d(t,"flushSync",(function(){return W})),n.d(t,"unstable_batchedUpdates",(function(){return G})),n.d(t,"StrictMode",(function(){return $})),n.d(t,"Suspense",(function(){return h})),n.d(t,"SuspenseList",(function(){return b})),n.d(t,"lazy",(function(){return v})),n.d(t,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(function(){return M}));var r=n("MOxe");n.d(t,"useState",(function(){return r.useState})),n.d(t,"useReducer",(function(){return r.useReducer})),n.d(t,"useEffect",(function(){return r.useEffect})),n.d(t,"useLayoutEffect",(function(){return r.useLayoutEffect})),n.d(t,"useRef",(function(){return r.useRef})),n.d(t,"useImperativeHandle",(function(){return r.useImperativeHandle})),n.d(t,"useMemo",(function(){return r.useMemo})),n.d(t,"useCallback",(function(){return r.useCallback})),n.d(t,"useContext",(function(){return r.useContext})),n.d(t,"useDebugValue",(function(){return r.useDebugValue})),n.d(t,"useErrorBoundary",(function(){return r.useErrorBoundary}));var o=n("2mXy");function i(e,t){for(var n in t)e[n]=t[n];return e}function a(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var r in t)if("__source"!==r&&e[r]!==t[r])return!0;return!1}function u(e){this.props=e}function c(e,t){function n(e){var n=this.props.ref,r=n==e.ref;return!r&&n&&(n.call?n(null):n.current=null),t?!t(this.props,e)||!r:a(this.props,e)}function r(t){return this.shouldComponentUpdate=n,Object(o.createElement)(e,t)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}n.d(t,"createElement",(function(){return o.createElement})),n.d(t,"createContext",(function(){return o.createContext})),n.d(t,"createRef",(function(){return o.createRef})),n.d(t,"Fragment",(function(){return o.Fragment})),n.d(t,"Component",(function(){return o.Component})),(u.prototype=new o.Component).isPureReactComponent=!0,u.prototype.shouldComponentUpdate=function(e,t){return a(this.props,e)||a(this.state,t)};var s=o.options.__b;o.options.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),s&&s(e)};var l="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function d(e){function t(t,n){var r=i({},t);return delete r.ref,e(r,(n=t.ref||n)&&("object"!=typeof n||"current"in n)?n:null)}return t.$$typeof=l,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var f=function(e,t){return null==e?null:Object(o.toChildArray)(Object(o.toChildArray)(e).map(t))},p={map:f,forEach:f,count:function(e){return e?Object(o.toChildArray)(e).length:0},only:function(e){var t=Object(o.toChildArray)(e);if(1!==t.length)throw"Children.only";return t[0]},toArray:o.toChildArray},_=o.options.__e;o.options.__e=function(e,t,n){if(e.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t);_(e,t,n)};var E=o.options.unmount;function h(){this.__u=0,this.t=null,this.__b=null}function m(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function v(e){var t,n,r;function i(i){if(t||(t=e()).then((function(e){n=e.default||e}),(function(e){r=e})),r)throw r;if(!n)throw t;return Object(o.createElement)(n,i)}return i.displayName="Lazy",i.__f=!0,i}function b(){this.u=null,this.o=null}o.options.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&!0===e.__h&&(e.type=null),E&&E(e)},(h.prototype=new o.Component).__c=function(e,t){var n=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(n);var o=m(r.__v),i=!1,a=function(){i||(i=!0,n.__R=null,o?o(u):u())};n.__R=a;var u=function(){if(!--r.__u){if(r.state.__e){var e=r.state.__e;r.__v.__k[0]=function e(t,n,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map((function(t){return e(t,n,r)})),t.__c&&t.__c.__P===n&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(e,e.__c.__P,e.__c.__O)}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate()}},c=!0===t.__h;r.__u++||c||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(a,a)},h.prototype.componentWillUnmount=function(){this.t=[]},h.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function e(t,n,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),t.__c.__H=null),null!=(t=i({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=n),t.__c=null),t.__k=t.__k&&t.__k.map((function(t){return e(t,n,r)}))),t}(this.__b,n,r.__O=r.__P)}this.__b=null}var a=t.__e&&Object(o.createElement)(o.Fragment,null,e.fallback);return a&&(a.__h=null),[Object(o.createElement)(o.Fragment,null,t.__e?null:e.children),a]};var O=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function y(e){return this.getChildContext=function(){return e.context},e.children}function g(e){var t=this,n=e.i;t.componentWillUnmount=function(){Object(o.render)(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(e){this.childNodes.push(e),t.i.appendChild(e)},insertBefore:function(e,n){this.childNodes.push(e),t.i.appendChild(e)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.i.removeChild(e)}}),Object(o.render)(Object(o.createElement)(y,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function R(e,t){return Object(o.createElement)(g,{__v:e,i:t})}(b.prototype=new o.Component).__e=function(e){var t=this,n=m(t.__v),r=t.o.get(e);return r[0]++,function(o){var i=function(){t.props.revealOrder?(r.push(o),O(t,e,r)):o()};n?n(i):i()}},b.prototype.render=function(e){this.u=null,this.o=new Map;var t=Object(o.toChildArray)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},b.prototype.componentDidUpdate=b.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(t,n){O(e,n,t)}))};var C="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,S=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,T="undefined"!=typeof document,I=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(e)};function A(e,t,n){return null==t.__k&&(t.textContent=""),Object(o.render)(e,t),"function"==typeof n&&n(),e?e.__c:null}function j(e,t,n){return Object(o.hydrate)(e,t),"function"==typeof n&&n(),e?e.__c:null}o.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(o.Component.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})}));var D=o.options.event;function P(){}function N(){return this.cancelBubble}function x(){return this.defaultPrevented}o.options.event=function(e){return D&&(e=D(e)),e.persist=P,e.isPropagationStopped=N,e.isDefaultPrevented=x,e.nativeEvent=e};var w,k={configurable:!0,get:function(){return this.class}},L=o.options.vnode;o.options.vnode=function(e){var t=e.type,n=e.props,r=n;if("string"==typeof t){var i=-1===t.indexOf("-");for(var a in r={},n){var u=n[a];T&&"children"===a&&"noscript"===t||"value"===a&&"defaultValue"in n&&null==u||("defaultValue"===a&&"value"in n&&null==n.value?a="value":"download"===a&&!0===u?u="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+t)&&!I(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(a)?a=a.toLowerCase():i&&S.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===u&&(u=void 0),r[a]=u)}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=Object(o.toChildArray)(n.children).forEach((function(e){e.props.selected=-1!=r.value.indexOf(e.props.value)}))),"select"==t&&null!=r.defaultValue&&(r.value=Object(o.toChildArray)(n.children).forEach((function(e){e.props.selected=r.multiple?-1!=r.defaultValue.indexOf(e.props.value):r.defaultValue==e.props.value}))),e.props=r,n.class!=n.className&&(k.enumerable="className"in n,null!=n.className&&(r.class=n.className),Object.defineProperty(r,"className",k))}e.$$typeof=C,L&&L(e)};var U=o.options.__r;o.options.__r=function(e){U&&U(e),w=e.__c};var M={ReactCurrentDispatcher:{current:{readContext:function(e){return w.__n[e.__c].props.value}}}},B="17.0.2";function F(e){return o.createElement.bind(null,e)}function V(e){return!!e&&e.$$typeof===C}function K(e){return V(e)?o.cloneElement.apply(null,arguments):e}function z(e){return!!e.__k&&(Object(o.render)(null,e),!0)}function H(e){return e&&(e.base||1===e.nodeType&&e)||null}var G=function(e,t){return e(t)},W=function(e,t){return e(t)},$=o.Fragment;t.default={useState:r.useState,useReducer:r.useReducer,useEffect:r.useEffect,useLayoutEffect:r.useLayoutEffect,useRef:r.useRef,useImperativeHandle:r.useImperativeHandle,useMemo:r.useMemo,useCallback:r.useCallback,useContext:r.useContext,useDebugValue:r.useDebugValue,version:"17.0.2",Children:p,render:A,hydrate:j,unmountComponentAtNode:z,createPortal:R,createElement:o.createElement,createContext:o.createContext,createFactory:F,cloneElement:K,createRef:o.createRef,Fragment:o.Fragment,isValidElement:V,findDOMNode:H,Component:o.Component,PureComponent:u,memo:c,forwardRef:d,flushSync:W,unstable_batchedUpdates:G,StrictMode:o.Fragment,Suspense:h,SuspenseList:b,lazy:v,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:M}},HYZD:function(e,t,n){"use strict";n("kgZU");var r=n("2mXy");t.a=function(e){var t=e.title,n=e.onClose;return Object(r.h)("header",{class:"steps--header"},t,Object(r.h)("button",{type:"button",class:"close",onClick:n},Object(r.h)("span",{class:"icon-close"})))}},I0j7:function(e,t,n){"use strict";n("R5XZ"),n("ewlR");var r={defaultTime:5e3,create:function(e){var t=e.txt,n=e.type,o=e.time;o=o||r.defaultTime;var i=document.createElement("div");return i.classList.add("toast--component","toastComponent","-".concat(n)),i.innerText=t,r.append(i),r.expiration(i,o),r.handleClose(),r.timeline(o),i},append:function(e){e.appendChild(r.initCloseBtn()),e.appendChild(r.initBorder()),document.body.appendChild(e)},timeline:function(e){setTimeout((function(){var t=document.querySelector(".timelineComponent");t.style.transitionDuration="".concat(e,"ms"),t.style.width="0px"}),100)},initBorder:function(){var e=document.createElement("div");return e.classList.add("timeline","timelineComponent"),e},initCloseBtn:function(){var e=document.createElement("button"),t=document.createElement("div");return e.classList.add("close","closeToastTrigger"),t.classList.add("icon-close"),e.appendChild(t),e},handleClose:function(){document.querySelector(".closeToastTrigger").addEventListener("click",(function(e){r.expiration(e.currentTarget.parentNode,100)}))},expiration:function(e,t){setTimeout((function(){e.style.cssText="opacity: 0"}),t),setTimeout((function(){e.remove()}),t+500)},info:function(e){var t=e.text,n=e.time;r.create({txt:t,type:"info",time:n})},error:function(e){var t=e.text,n=e.time;r.create({txt:t,type:"error",time:n})},success:function(e){var t=e.text,n=e.time;r.create({txt:t,type:"success",time:n})},warning:function(e){var t=e.text,n=e.time;r.create({txt:t,type:"warning",time:n})}};t.a=r},NcRM:function(e,t,n){},ROdP:function(e,t,n){var r=n("hh1v"),o=n("xrYK"),i=n("tiKp")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==o(e))}},T63A:function(e,t,n){var r=n("I+eb"),o=n("b1O7").entries;r({target:"Object",stat:!0},{entries:function(e){return o(e)}})},U15V:function(e,t,n){},UxlC:function(e,t,n){"use strict";var r=n("K6Rb"),o=n("xluM"),i=n("4zBA"),a=n("14Sl"),u=n("0Dky"),c=n("glrk"),s=n("Fib7"),l=n("WSbT"),d=n("UMSQ"),f=n("V37c"),p=n("HYAF"),_=n("iqWW"),E=n("3Eq5"),h=n("DLK6"),m=n("FMNM"),v=n("tiKp")("replace"),b=Math.max,O=Math.min,y=i([].concat),g=i([].push),R=i("".indexOf),C=i("".slice),S="$0"==="a".replace(/./,"$0"),T=!!/./[v]&&""===/./[v]("a","$0");a("replace",(function(e,t,n){var i=T?"$":"$0";return[function(e,n){var r=p(this),i=null==e?void 0:E(e,v);return i?o(i,e,r,n):o(t,f(r),e,n)},function(e,o){var a=c(this),u=f(e);if("string"==typeof o&&-1===R(o,i)&&-1===R(o,"$<")){var p=n(t,a,u,o);if(p.done)return p.value}var E=s(o);E||(o=f(o));var v=a.global;if(v){var S=a.unicode;a.lastIndex=0}for(var T=[];;){var I=m(a,u);if(null===I)break;if(g(T,I),!v)break;""===f(I[0])&&(a.lastIndex=_(u,d(a.lastIndex),S))}for(var A,j="",D=0,P=0;P<T.length;P++){for(var N=f((I=T[P])[0]),x=b(O(l(I.index),u.length),0),w=[],k=1;k<I.length;k++)g(w,void 0===(A=I[k])?A:String(A));var L=I.groups;if(E){var U=y([N],w,x,u);void 0!==L&&g(U,L);var M=f(r(o,void 0,U))}else M=h(N,u,x,w,L,o);x>=D&&(j+=C(u,D,x)+M,D=x+N.length)}return j+C(u,D)}]}),!!u((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}))||!S||T)},b1O7:function(e,t,n){var r=n("g6v/"),o=n("4zBA"),i=n("33Wh"),a=n("/GqU"),u=o(n("0eef").f),c=o([].push),s=function(e){return function(t){for(var n,o=a(t),s=i(o),l=s.length,d=0,f=[];l>d;)n=s[d++],r&&!u(o,n)||c(f,e?[n,o[n]]:o[n]);return f}};e.exports={entries:s(!0),values:s(!1)}},ewlR:function(e,t,n){},iqWW:function(e,t,n){"use strict";var r=n("ZUd8").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},kao6:function(e,t,n){"use strict";n("ls82"),n("zKZe"),n("ma9I"),n("07d7"),n("5s+n");var r=n("Qyje"),o=n.n(r),i=n("8ejd"),a=n("Dlue");function u(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}t.a=function(){return[function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var r,u,c,s,l,d,f,p=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=p.length>1&&void 0!==p[1]?p[1]:{},u=p.length>2&&void 0!==p[2]?p[2]:"post",c=p.length>3?p[3]:void 0,s=p.length>4?p[4]:void 0,void 0!==window.axios){e.next=8;break}return e.next=7,n("vDqi").default;case 7:window.axios=e.sent;case 8:if(!(d=o.a.parse(r)).tokenId){e.next=12;break}return e.next=12,window.axios({url:i.a.GET_FORM_TOKEN,method:"POST",data:o.a.stringify({tokenId:d.tokenId}),headers:c}).then((function(e){e.data.status==a.b&&(delete d.tokenId,r=o.a.stringify(Object.assign(Object.assign({},d),{_token:e.data.token})))}));case 12:return e.next=14,window.axios(Object.assign({url:t,method:u,data:r,headers:c},s));case 14:if((f=e.sent).data&&(f.data.status||f.data.status===a.c&&f.data.status===a.b&&f.data.status===a.d)){e.next=17;break}throw new Error("(".concat(null===(l=null==f?void 0:f.data)||void 0===l?void 0:l.code,") ").concat(f.data.message));case 17:return e.abrupt("return",f.data);case 18:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){u(i,r,o,a,c,"next",e)}function c(e){u(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}()]}},kgZU:function(e,t,n){},scas:function(e,t,n){"use strict";var r={init:function(){document.querySelector("html").style.cssText="overflow: hidden; height: 100%; position: relative;",document.body.classList.add("-popup")},remove:function(){document.querySelector("html").removeAttribute("style"),document.body.classList.remove("-popup")}};t.a=r},woEc:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return c}));n("T63A"),n("J30X"),n("pNMO"),n("4Brf"),n("07d7"),n("0oug"),n("4mDm"),n("PKPk"),n("3bBZ"),n("+2oP"),n("sMBO"),n("pjDv"),n("rB9j");function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=function(e){for(var t=0,n=Object.entries(e);t<n.length;t++){var o=r(n[t],2),i=o[0],a=o[1];window.qf[i]=a}},a=function(e){"Enter"===e.key&&!1===e.shiftKey&&e.preventDefault()},u=function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)},c=function(e){var t=window.open("","my div","height=400,width=600");return t.document.write("<html><head>"),t.document.write("</head><body>"),t.document.write(e),t.document.write("</body></html>"),t.print(),t.close(),!0}}}]);1/Polsat-Cafe_1339123/Polsat-Cafe_463160/index.html" title="Polsat Cafe">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/wd/wddvqekh3412xwkqk4vtwjefavdvbush.png" alt="Polsat Cafe">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Polsat-Play_1339122/Polsat-Play_463161/index.html" title="Polsat Play">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/2p/2pcgvedttnhw4chwzppo95iigs84ige5.png" alt="Polsat Play">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Polsat-Film_1339121/Polsat-Film_1026387/index.html" title="Polsat Film">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/cm/cmeyfo1rtu6at2ju291jg1qsnwt56qdy.png" alt="Polsat Film">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Polsat-Sport_1339119/Polsat-Sport_1026390/index.html" title="Polsat Sport">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/ho/hocmem3hnjmer3e7ioxtiu75378i42br.png" alt="Polsat Sport">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Polsat-Sport-Extra_1339118/Polsat-Sport-Extra_1026464/index.html" title="Polsat Sport Extra">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/t6/t6im7ewm6t2mc1d87hm151de6735ts9b.png" alt="Polsat Sport Extra">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  class="last"  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Polsat-Sport-News_1339117/Polsat-Sport-News_1026465/index.html" title="Polsat Sport News">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/kd/kdujijq6di4mnovxn6481fb5c52d2t6w.png" alt="Polsat Sport News">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Polsat-Games_1682521/Polsat-Games_1498582/index.html" title="Polsat Games">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/39/39ymkp1eg7tebdz53z73f2h6s6tp75ug.png" alt="Polsat Games">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Polsat-Seriale_1339105/Polsat-Seriale_1026388/index.html" title="Polsat Seriale">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/3y/3ygoc1ch4naxyq458cwfse38w7239yj8.png" alt="Polsat Seriale">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Disco-Polo-Music_1348363/Disco-Polo-Music_810049/index.html" title="Disco Polo Music">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/m1/m1pv48wnm9buyookk5zn7tgivoio4dek.png" alt="Disco Polo Music">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Polsat-Music_1553857/Polsat-Music_1496746/index.html" title="Polsat Music">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/gu/gukr6efbek3tjd8t66t419x4bhpb4dko.png" alt="Polsat Music">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Czworka_1339114/TV4_463164/index.html" title="Czwórka">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/qu/quamnp4p5uxa9roemuh5x9yh3d419wh9.png" alt="Czwórka">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Szostka_1339113/TV6_463165/index.html" title="Szóstka">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/16/16fdc5qf4o6aejxqx2cypif2qyt5dsmb.png" alt="Szóstka">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Super-Polsat_1534626/Super-Polsat_1493231/index.html" title="Super Polsat">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/m4/m46xkp86z1x5wm9tam6drnqd93zdhu7v.png" alt="Super Polsat">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Polsat-Doku_1538676/Polsat-Doku_1493291/index.html" title="Polsat Doku">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/2j/2j9ziec2xfy6iu16yij1iniujhvr5p6e.png" alt="Polsat Doku">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Polsat-Rodzina_1682520/Polsat-Rodzina_1498581/index.html" title="Polsat Rodzina">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/86/86tktz6vv2dmwps3rmhmn6he9q3xc2q7.png" alt="Polsat Rodzina">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Eleven-Sports-1_1693230/Eleven-Sports-1_1498990/index.html" title="Eleven Sports 1">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/hx/hxxe3khm7gypvcjb1rsm5ojj7bt1ucuc.png" alt="Eleven Sports 1">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Eleven-Sports-2_1693245/Eleven-Sports-2_1498991/index.html" title="Eleven Sports 2">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/rp/rpgi1k3vp56f86rv84mw54fjxu6ouhde.png" alt="Eleven Sports 2">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  class="last"  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Eska-TV_1610945/Eska-TV_1497195/index.html" title="Eska TV">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/uo/uoqb1ab32n3t48hggpp2g37trtkv1jxi.png" alt="Eska TV">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Eska-TV-Extra_1610946/Eska-TV-Extra_1497196/index.html" title="Eska TV Extra">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/x2/x2n5hcrdt3zsfi55hrf19h619m893po3.png" alt="Eska TV Extra">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Eska-Rock-TV_1610947/Eska-Rock-TV_1497197/index.html" title="Eska Rock TV">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/x9/x9zja36m2m6mign3bxgssj8fbqruwkgk.png" alt="Eska Rock TV">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Polo-TV_1610948/Polo-TV_1497190/index.html" title="Polo TV">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/fe/fe77et8na6hreunchf6kq4cp2r7ypaie.png" alt="Polo TV">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Vox-Music-TV_1610949/Vox-Music-TV_1497194/index.html" title="Vox Music TV">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/wk/wk6viruysbjn448nnjihzxrdk62p7rhb.png" alt="Vox Music TV">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/TV-Puls_1783952/TV-PULS_1500972/index.html" title="TV Puls">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/35/35rie8i2gjqpyh7dp8i5h7vpve83461q.png" alt="TV Puls">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/PULS-2_1783954/PULS-2_1500973/index.html" title="PULS 2">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/y6/y6fvkszvgwqzoncs29cujxp731b61kos.png" alt="PULS 2">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Telewizja-WP_1748742/WP_1500329/index.html" title="Telewizja WP">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/nd/nditcevxjmv915cu4g1z47uayjzz7s9h.png" alt="Telewizja WP">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/BBC-Earth_1339109/BBC-Earth_463168/index.html" title="BBC Earth">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/nq/nq29pvypt4aoupx14rgkctfo6n212me4.png" alt="BBC Earth">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/BBC-Brit_1375986/BBC-Brit_463169/index.html" title="BBC Brit">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/bi/bie1pzydf1mxrz6jfh4h8goiv15zmij3.png" alt="BBC Brit">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/BBC-Lifestyle_1339108/BBC-Lifestyle_463170/index.html" title="BBC Lifestyle">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/gd/gdxxuj67cn3ivrngwv5t5f3o2miuzb8i.png" alt="BBC Lifestyle">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/BBC-First_1735059/BBC-First_1500006/index.html" title="BBC First">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/by/byy9ufguguyp6k8iq4u4t7u25nmjuy1f.png" alt="BBC First">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  class="last"  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/CBeebies_1339107/CBeebies_463171/index.html" title="CBeebies">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/e1/e1vojs1rk3nsdc1gqzw5tdomeu6e1hmu.png" alt="CBeebies">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/AXN_1693246/AXN_1498985/index.html" title="AXN">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/w5/w541i43edvfhprbojmegcc94qib2fnqj.png" alt="AXN">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/AXN-Black_1693248/AXN-Black_1498987/index.html" title="AXN Black">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/ue/ueiotth2d4b3pfg9dmh8aur79nvsmwje.png" alt="AXN Black">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/AXN-White_1693249/AXN-White-_1498988/index.html" title="AXN White">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/fr/frdy3zoza157k1ibfqx8k953cm74egta.png" alt="AXN White">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/AXN-Spin_1693250/AXN-Spin_1498989/index.html" title="AXN Spin">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/37/37w5762xnchkk4dy1s65iff8qskn5jj6.png" alt="AXN Spin">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/AMC_1538675/AMC_1493290/index.html" title="AMC">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/w7/w7ecxb2pvm1qq8m3ra4esfw5r8q2ujcq.png" alt="AMC">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/SundanceTV_1751734/Sundance-TV_1500374/index.html" title="SundanceTV">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/4y/4ysryuvispmpmua2ktuhry8umom1j6s2.png" alt="SundanceTV">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/CBS-Reality_1339095/CBS-Reality_463175/index.html" title="CBS Reality">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/v2/v2swt57zhpfyacpt1k9f41zqv16vahxf.jpg" alt="CBS Reality">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/CBS-Europa_1339096/CBS-Europa_463176/index.html" title="CBS Europa">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/dy/dyt5mic7kvz42mcoscxbyfgcx24q8es4.png" alt="CBS Europa">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Extreme-Channel_1339101/Extreme-Channel_463163/index.html" title="Extreme Channel">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/jh/jhmqzhhhmi419chnu6gth2be87oqvs3b.png" alt="Extreme Channel">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Polsat-JimJam_1339099/Polsat-JimJam_1026383/index.html" title="Polsat JimJam">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/eb/ebimri7hbga4b69dso13z1ib87ma599k.png" alt="Polsat JimJam">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/CI-Polsat_1339112/CI-Polsat-_463166/index.html" title="CI Polsat">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/g9/g9xn3sfx5wkvnfaqivs28gj25seodiip.png" alt="CI Polsat">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  class="last"  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/History_1339111/History_463167/index.html" title="History">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/38/38qdn4atkii8m4japr1icfwh33y26hpp.png" alt="History">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/HISTORY2_1453591/History-2_1491569/index.html" title="HISTORY2">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/op/op3zgk9d4xiymectbqhwd27fqo4a6aav.png" alt="HISTORY2">
                            </a>
                        </li>
                         					                                         	                                                                <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Ale-Kino_1885332/index.html" title="Ale Kino+">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/y4/y41jq61k5jawbgvg4ekt1t6zykwrd266.png" alt="Ale Kino+">
                            </a>
                        </li>
                         					                                         	                                                                <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/CanalSport_1885342/index.html" title="Canal+Sport">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/17/173qopoz5uwz57dtva7v96etvyag4jmr.png" alt="Canal+Sport">
                            </a>
                        </li>
                         					                                         	                                                                <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/CanalSport-2_1885343/index.html" title="Canal+Sport 2">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/da/da56vbgbt3hob2cxqet23h523g3i59ek.png" alt="Canal+Sport 2">
                            </a>
                        </li>
                         					                                         	                                                                <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/CanalSport-3_1885344/index.html" title="Canal+Sport 3">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/4o/4omtzynkv1yyobgubfy4r34tatksgr74.png" alt="Canal+Sport 3">
                            </a>
                        </li>
                         					                                         	                                                                <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Canal-Sport-5_1885345/index.html" title="Canal+ Sport 5">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/jj/jjbbaux8e194cvi9h3bqh27ud924smvt.png" alt="Canal+ Sport 5">
                            </a>
                        </li>
                         					                                         	                                                                <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/CANAL-Domo_1885334/index.html" title="CANAL+ Domo">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/qd/qdx4mk7wp2wwfacn1h11e9kp5dkaj22f.png" alt="CANAL+ Domo">
                            </a>
                        </li>
                         					                                         	                                                                <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/CanalKuchnia_1885340/index.html" title="Canal+Kuchnia">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/z3/z37k1g7r9ibmzdqdey5pg5m7d3682sfb.png" alt="Canal+Kuchnia">
                            </a>
                        </li>
                         					                                         	                                                                <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Planete_1885335/index.html" title="Planete+">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/bd/bdrjn4w17hrnt3f5i6tiny4x9sv8ud4a.png" alt="Planete+">
                            </a>
                        </li>
                         					                                         	                                                                <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/MiniMini_1885336/index.html" title="MiniMini+">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/su/sudd9ms9igieojkmrnn58mps3uzgux3z.png" alt="MiniMini+">
                            </a>
                        </li>
                         					                                         	                                                                <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/TeleTOON_1885337/index.html" title="teleTOON+">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/jf/jfp3cvm6y4ikw53zs4g1bbvgdttxife1.png" alt="teleTOON+">
                            </a>
                        </li>
                         					                                         	                                                                <li  class="last"  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/CANALFAMILY_1885341/index.html" title="CANAL+FAMILY">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/oi/oitve8ui9i5wix9j5byxavm2zi54u2v7.png" alt="CANAL+FAMILY">
                            </a>
                        </li>
                         					                                         	                                                                <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Novelas_1885338/index.html" title="Novelas+">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/cb/cb2bi1d9ihajpw12fjotmoxg2swvscwb.png" alt="Novelas+">
                            </a>
                        </li>
                         					                                         	                                                                <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Canal-PREMIUM_1885339/index.html" title="Canal+ PREMIUM">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/xj/xjkqyxuczmzd3xu98fjr8vcho4f4jwj1.png" alt="Canal+ PREMIUM">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/13-Ulica_1339093/13-Ulica_463180/index.html" title="13 Ulica">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/rf/rf6xadae92ufucjvagiy2v2xqauon533.png" alt="13 Ulica">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/SCI-FI_1339092/SciFi-Universal_463181/index.html" title="SCI FI">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/ms/ms9oiynujzndu6uakofe8dv4sc4ok5ft.png" alt="SCI FI">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/E-Entertainment_1375987/E-Entertainment_463182/index.html" title="E! Entertainment">
                                <img src="https://www.polsatmedia.pl/image/mini/1775100.jpg" alt="E! Entertainment">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Kino-Polska_1339091/Kino-Polska_463183/index.html" title="Kino Polska">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/i9/i9kvsb8uba38fmpz231pa52tx9jyiv38.png" alt="Kino Polska">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Kino-Polska-Muzyka_1339090/Kino-Polska-Muzyka_463184/index.html" title="Kino Polska Muzyka">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/82/82nibvpmxa6849v74571p3ib9q41w77q.png" alt="Kino Polska Muzyka">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Kino-TV_1339089/Kino-TV_463185/index.html" title="Kino TV">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/av/avjxw6b3fnbi2zrxmf7m1kqb64b3jg49.png" alt="Kino TV">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Stopklatka_1339088/Stopklatka_1016077/index.html" title="Stopklatka">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/6r/6r3r48dg6osns3hm4bfp4zrj4hfiuafm.png" alt="Stopklatka">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Zoom-TV_1527387/Zoom-TV_1493079/index.html" title="Zoom TV">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/jb/jb823nnf5avkgyk2vk4e2sse6x2g8zxs.png" alt="Zoom TV">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Gametoon_1711031/Gametoon_1499589/index.html" title="Gametoon">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/w5/w57qaa28ynejs8xz5cz7qsm7vedki7v3.png" alt="Gametoon">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  class="last"  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/4FUN-TV_1534563/4FUN-TV_1493226/index.html" title="4FUN TV">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/8k/8kfok23khcg331s954niezq3k1g2p9ng.png" alt="4FUN TV">
                            </a>
                        </li>
                         					                                         	                                                                <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/DIZI_1885346/index.html" title="DIZI">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/yf/yfdqxwg5hdhvrpjyzxgqggq2khabi4dv.png" alt="DIZI">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/4FUN-DANCE_1534565/4FUN-DANCE_1493230/index.html" title="4FUN DANCE">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/wy/wyjwwv68n919916ux9825f94byjixebp.png" alt="4FUN DANCE">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/4FUN-KIDS_1774453/4FUN-KIDS_1500691/index.html" title="4FUN KIDS">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/md/md5cfgz3wh55e9b6a6tw93bkj9dfdct1.png" alt="4FUN KIDS">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Fokus-TV_1610950/Fokus-TV_1497192/index.html" title="Fokus TV">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/bo/bogmk1oa2pk9uy6dg35ngx8egbtcwkdf.png" alt="Fokus TV">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Nowa-TV_1610951/Nowa-TV_1497191/index.html" title="Nowa TV">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/49/49tm7q8mizwf1aipuc2m2jh3m3ij54qi.png" alt="Nowa TV">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Polsat-Viasat-Nature_1339103/Polsat-Viasat-Nature_463173/index.html" title="Polsat Viasat Nature">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/sk/sktxariwq2cihos2s1aswg1rt299smpe.png" alt="Polsat Viasat Nature">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Polsat-Viasat-Explore_1339104/Polsat-Viasat-Explore_463172/index.html" title="Polsat Viasat Explore">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/oj/oj1mwp58egscpcuwiiv1hswo136m7wq4.png" alt="Polsat Viasat Explore">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Polsat-Viasat-History_1339102/Polsat-Viasat-History_463174/index.html" title="Polsat Viasat History">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/o7/o7hj5skgyrx4ayouf3vf2wxrviasqog9.png" alt="Polsat Viasat History">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Epic-Drama_1610952/Epic-Drama_1497193/index.html" title="Epic Drama">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/7m/7m648xmetbauemfs43w1tvq2ey6hx9i7.png" alt="Epic Drama">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Tele5_1566208/Tele5_1496973/index.html" title="Tele5">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/w5/w5otnc1ws6mph4qdyeh5x1aqp5h3tntp.png" alt="Tele5">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Polonia1_1566205/Polonia1_1496972/index.html" title="Polonia1">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/99/99tkvq19smuonrzuz15tenp7e3qr4oo4.png" alt="Polonia1">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  class="last"  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Water-Planet_1569219/Water-Planet_1497025/index.html" title="Water Planet">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/eq/eqvnewrv5axnjdcuxue6r2v1p345r9jn.png" alt="Water Planet">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Novela-TV_1569218/Novela-TV_1497024/index.html" title="Novela TV">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/u8/u8wf961sugz48ngxc2387wmusu9ust1h.png" alt="Novela TV">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/TV-Republika_1348429/TV-Republika_814804/index.html" title="TV Republika">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/5e/5eq12zwz6r1vprwju823cj389jfs5w58.png" alt="TV Republika">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/WPolsce-Pl_1624064/WPolsce-Pl_1497970/index.html" title="wPolsce.pl">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/td/tdhw2bg2j5ma5zes7piaad7vsvhenazx.png" alt="wPolsce.pl">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/STARS-TV_1474589/Stars-TV_1491633/index.html" title="STARS.TV">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/6x/6xccwkt667agwfh93z4pfh1i1jkj12pf.png" alt="STARS.TV">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Golf-Channel-Polska_1543372/Golf-Channel_1493404/index.html" title="Golf Channel Polska">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/w2/w2cg4j6x2kwh74qi1jydbuiob4ddf8ja.png" alt="Golf Channel Polska">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Da-Vinci_1564798/Da-Vinci-Learning_1496971/index.html" title="Da Vinci">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/c5/c5b3vpc1bozf1toqo14rhqj5vmd3w9ju.png" alt="Da Vinci">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Polsat-Media-Display_1736808/Polsat-Media-Display_1500091/index.html" title="Polsat Media Display">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/d3/d3qyyae1v6wah5vvfu96cdo18az3dsfo.png" alt="Polsat Media Display">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Polsat-Media-Video_1339087/Polsat-Media-Video_1500098/index.html" title="Polsat Media Video">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/a6/a6d5k9e8pjho8wgou2fpeu58qzhs5bhx.png" alt="Polsat Media Video">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Polsat-Media-Digital-Audio_1752562/Polsat-Media-Digital-Audio_1500384/index.html" title="Polsat Media Digital Audio">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/vq/vqs8r91fn18nujzpzr6izdkh5qi7qagr.png" alt="Polsat Media Digital Audio">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Polsat-Media-Mobile_1788322/Mobiem_1501154/index.html" title="Polsat Media Mobile">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/ue/uem5uw2sqvb6mj777re7b5h8v48wvo6e.png" alt="Polsat Media Mobile">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Adretail_1788321/Adretail_1501153/index.html" title="Adretail">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/pz/pzchtocnuqbbq9qwq73rat7x41kdhaty.png" alt="Adretail">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  class="last"  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Polsat-Media-AdTube_1548472/Polsat-Media-AdTube_1493645/index.html" title="Polsat Media AdTube">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/7u/7urhfz6n9c4xiqg3st719xpo58515qfn.png" alt="Polsat Media AdTube">
                            </a>
                        </li>
                         					                                         	                                                                                    <li  >
                            <a alt="" href="https://www.polsatmedia.pl/Oferta---Kanal_6801/Polsat-Media-AdScreen_1339080/Polsat-Media-AdScreen_1496751/index.html" title="Polsat Media AdScreen">
                                <img src="https://ipla.pluscdn.pl/dituel/cp/ib/ib6wzm248bavr35enakeycwzp5e3zqis.png" alt="Polsat Media AdScreen">
                            </a>
                        </li>
                         					                                         	            			</ul>
			
		</section>
</section>
</div>

<div class="container section-article">
<section class="page row">
	<h2 class="title-section for-mobi-padding">aktualności	</h2>
	<section class="section-article-list row for-mobi-padding">
		<div class="slidetoTop arrow-to-top"><a href="#" class="section-arrow"></a></div>
				                                                					                                                                 					                                                                 					                                                                 					                                                                 					                                                                 					                                                                 					                                                                                                                 									            			<article class="hentry front  ">
				<a href="https://www.polsatmedia.pl/Aktualnosc_6786/Grupa-Polsat---Interia-Pierwszy-Raz-W-Historii-Liderem-Internetu-W-Polsce-Wyprzedzila-Grupe-Wirtualna-Polska-I-Grupe-RAS-Polska-Onet_1889649/index.html" title="Grupa Polsat - Interia pierwszy raz w historii liderem Internetu w Polsce. Wyprzedziła Grupę Wirtualna Polska i Grupę RAS Polska (Onet)" class="bgNews" style="width:100%; display:block; background-size:100% 100%;">
                	<img src="https://ipla.pluscdn.pl/dituel/cp/12/123eq5syuxpfk5n9z9k5bmacz4egy8ys.jpg">             	</a>

                <a href="https://www.polsatmedia.pl/Aktualnosc_6786/Grupa-Polsat---Interia-Pierwszy-Raz-W-Historii-Liderem-Internetu-W-Polsce-Wyprzedzila-Grupe-Wirtualna-Polska-I-Grupe-RAS-Polska-Onet_1889649/index.html" title="Grupa Polsat - Interia pierwszy raz w historii liderem Internetu w Polsce. Wyprzedziła Grupę Wirtualna Polska i Grupę RAS Polska (Onet)">
    				<div class="entry-content">
    					<h2 class="entry-title front">Grupa Polsat - Interia pierwszy raz w ...</h2>
    					<h2 class="entry-summary">-- </h2>
    					<a href="https://www.polsatmedia.pl/Aktualnosc_6786/Grupa-Polsat---Interia-Pierwszy-Raz-W-Historii-Liderem-Internetu-W-Polsce-Wyprzedzila-Grupe-Wirtualna-Polska-I-Grupe-RAS-Polska-Onet_1889649/index.html" title="Grupa Polsat - Interia pierwszy raz w historii liderem Internetu w Polsce. Wyprzedziła Grupę Wirtualna Polska i Grupę RAS Polska (Onet)" class="news-arrow"></a>
    				</div>
                </a>
			</article>
					                                                					                                                                 					                                                                 					                                                                 					                                                                 					                                                                 					                                                                                                                 									            			<article class="hentry front  ">
				<a href="https://www.polsatmedia.pl/Aktualnosc_6786/Znane-I-Lubiane-Telewizja-Polsat-Stawia-Na-Hitowe-Programy-W-Wiosennej-Ramowce_1890472/index.html" title="Znane i lubiane! Telewizja Polsat stawia na hitowe programy w wiosennej ramówce" class="bgNews" style="width:100%; display:block; background-size:100% 100%;">
                	<img src="https://ipla.pluscdn.pl/dituel/cp/2c/2cv7a8gx4mrj6f2zgvohegxia6b47g1q.png">             	</a>

                <a href="https://www.polsatmedia.pl/Aktualnosc_6786/Znane-I-Lubiane-Telewizja-Polsat-Stawia-Na-Hitowe-Programy-W-Wiosennej-Ramowce_1890472/index.html" title="Znane i lubiane! Telewizja Polsat stawia na hitowe programy w wiosennej ramówce">
    				<div class="entry-content">
    					<h2 class="entry-title front">Znane i lubiane! Telewizja Polsat stawia ...</h2>
    					<h2 class="entry-summary">-- </h2>
    					<a href="https://www.polsatmedia.pl/Aktualnosc_6786/Znane-I-Lubiane-Telewizja-Polsat-Stawia-Na-Hitowe-Programy-W-Wiosennej-Ramowce_1890472/index.html" title="Znane i lubiane! Telewizja Polsat stawia na hitowe programy w wiosennej ramówce" class="news-arrow"></a>
    				</div>
                </a>
			</article>
					                                                					                                                                 					                                                                 					                                                                 					                                                                 					                                                                             									            			<article class="hentry front  last-list  ">
				<a href="https://www.polsatmedia.pl/Aktualnosc_6786/Wiosna-W-Czworce-Pelna-Emocji_1890473/index.html" title="Wiosna w Czwórce pełna emocji!" class="bgNews" style="width:100%; display:block; background-size:100% 100%;">
                	<img src="https://ipla.pluscdn.pl/dituel/cp/1z/1z6o3m9oyt2ogq3ftfuxjs8qshez7yft.png">             	</a>

                <a href="https://www.polsatmedia.pl/Aktualnosc_6786/Wiosna-W-Czworce-Pelna-Emocji_1890473/index.html" title="Wiosna w Czwórce pełna emocji!">
    				<div class="entry-content">
    					<h2 class="entry-title front">Wiosna w Czwórce pełna emocji!</h2>
    					<h2 class="entry-summary">-- </h2>
    					<a href="https://www.polsatmedia.pl/Aktualnosc_6786/Wiosna-W-Czworce-Pelna-Emocji_1890473/index.html" title="Wiosna w Czwórce pełna emocji!" class="news-arrow"></a>
    				</div>
                </a>
			</article>
					                                                					                                                                 					                                                                 					                                                                 					                                                                                                                 									            			<article class="hentry front   noMarginBottom ">
				<a href="https://www.polsatmedia.pl/Aktualnosc_6786/Interia-Liderem-Wiarygodnosci-Wsrod-Portali-W-Polsce-W-2023-Roku-Wedlug-Badania-CBOS_1890474/index.html" title="Interia liderem wiarygodności wśród portali w Polsce w 2023 roku według badania CBOS" class="bgNews" style="width:100%; display:block; background-size:100% 100%;">
                	<img src="https://ipla.pluscdn.pl/dituel/cp/re/rejqw9kvtt8f5a12dskh4tknwszmo4hw.png">             	</a>

                <a href="https://www.polsatmedia.pl/Aktualnosc_6786/Interia-Liderem-Wiarygodnosci-Wsrod-Portali-W-Polsce-W-2023-Roku-Wedlug-Badania-CBOS_1890474/index.html" title="Interia liderem wiarygodności wśród portali w Polsce w 2023 roku według badania CBOS">
    				<div class="entry-content">
    					<h2 class="entry-title front">Interia liderem wiarygodności wśród ...</h2>
    					<h2 class="entry-summary">-- </h2>
    					<a href="https://www.polsatmedia.pl/Aktualnosc_6786/Interia-Liderem-Wiarygodnosci-Wsrod-Portali-W-Polsce-W-2023-Roku-Wedlug-Badania-CBOS_1890474/index.html" title="Interia liderem wiarygodności wśród portali w Polsce w 2023 roku według badania CBOS" class="news-arrow"></a>
    				</div>
                </a>
			</article>
					                                                					                                                                 					                                                                 					                                                                 					                                                                             									            			<article class="hentry front   noMarginBottom ">
				<a href="https://www.polsatmedia.pl/Aktualnosc_6786/Wiosna-Z-Telewizja-Puls_1890475/index.html" title="Wiosna z Telewizją Puls!" class="bgNews" style="width:100%; display:block; background-size:100% 100%;">
                	<img src="https://ipla.pluscdn.pl/dituel/cp/48/484gafip83k65ooyfzh53rj4ps36ckfx.jpg">             	</a>

                <a href="https://www.polsatmedia.pl/Aktualnosc_6786/Wiosna-Z-Telewizja-Puls_1890475/index.html" title="Wiosna z Telewizją Puls!">
    				<div class="entry-content">
    					<h2 class="entry-title front">Wiosna z Telewizją Puls!</h2>
    					<h2 class="entry-summary">-- </h2>
    					<a href="https://www.polsatmedia.pl/Aktualnosc_6786/Wiosna-Z-Telewizja-Puls_1890475/index.html" title="Wiosna z Telewizją Puls!" class="news-arrow"></a>
    				</div>
                </a>
			</article>
					                                                					                                                                 					                                                                 					                                                                 					                                                                 					                                                                             									            			<article class="hentry front  last-list   noMarginBottom ">
				<a href="https://www.polsatmedia.pl/Aktualnosc_6786/Polsat-Liderem-W-Kategorii-Filmowej_1890476/index.html" title="Polsat liderem w kategorii filmowej" class="bgNews" style="width:100%; display:block; background-size:100% 100%;">
                	<img src="https://ipla.pluscdn.pl/dituel/cp/1j/1j1sp5zyhzkjdfhty1jwpwh579ixkrz7.png">             	</a>

                <a href="https://www.polsatmedia.pl/Aktualnosc_6786/Polsat-Liderem-W-Kategorii-Filmowej_1890476/index.html" title="Polsat liderem w kategorii filmowej">
    				<div class="entry-content">
    					<h2 class="entry-title front">Polsat liderem w kategorii filmowej</h2>
    					<h2 class="entry-summary">-- </h2>
    					<a href="https://www.polsatmedia.pl/Aktualnosc_6786/Polsat-Liderem-W-Kategorii-Filmowej_1890476/index.html" title="Polsat liderem w kategorii filmowej" class="news-arrow"></a>
    				</div>
                </a>
			</article>
						</section>
	<div class="link-more"><a href="https://www.polsatmedia.pl/Aktualnosci_6785/index.html" title="Wszystkie aktualności">Wszystkie aktualności <span>&raquo;</span></a></div>
</section>
</div>
<style>
.footer-right ul li.adflow {float: left;
    list-style: none;
    width: 237px;
    height: 83px;
    margin-left: 2px;
    margin-top:46px;
    background: url(/templates/polsatmedia2/gfx/pmedia_adflow.png) no-repeat;
    background-size: contain;}
</style>
<div class="container section-footer">
			<div class="slidetoTop arrow-to-top"><a class="section-arrow"></a></div>
		<footer class="page row">
			<h2 class="title-section-kontakt-footer for-mobi-padding" style="color:#686868;">kontakt</h2>
			<div class="footer-left">
		
			<h6 style="">Polsat Media Spółka z ograniczoną odpowiedzialnością</h6>
			<!-- <p class="fo-one">Spółka z ograniczoną odpowiedzialnością</p> -->
			<p  class="fo-two">ul. Ostrobramska 77</p>
			<p class="fo-two">04-175 Warszawa</p>
			</div>
			<div class="footer-center">
			<p style="margin:47px 0 10px 0;"><span>tel.</span>  (22) 514 49 00 </p>
			
			<p> <a href="mailto:sekretariat@polsatmedia.pl?temat">sekretariat@polsatmedia.pl &raquo;</a> </p>
            <p class="privacy"><a class="privacy-link" href="https://www.polsatmedia.pl/bin/acc6798ced78762703e9a13750f6467a.pdf">Dane osobowe</a></p>
			</div>
					<div class="footer-right">
			<p>Spotkasz nas również:</p>
			<ul>
				
				<li class="facebook"><a title="Polsat Media Facebook" href="https://pl-pl.facebook.com/PolsatMedia"></a></li>
				<li class="linkedin"><a title="Polsat Media Linked-In" href="https://pl.linkedin.com/company/polsat-media-sp.-z-o.o"></a></li>
                <li class="adflow"><a title="Polsat Media adFlow" href="https://adflow.polsatmedia.pl/"></a></li>
			</ul>
			</div>
		</footer>
</div>
<div class="container section-footer-copyright">
<section class="page row">
	<section class="section-footer-copyright-box">
		<a class="section-footer-copyright-box-left" href="https://www.polsatmedia.pl/Strona-Glowna_6784/index.html" title="Polsat Media"><img src="/templates/polsatmedia2/gfx/polsat_media_header_logo.png" /></a>
        		<p class="section-footer-copyright-box-right source-org vcard copyright">Copyright © 2024 Polsat Media Spółka z ograniczoną odpowiedzialnością. Wszelkie prawa zastrzeżone.</p>
	</section>
</section>
</div>
<!-- "https://www.polsatmedia.pl/Programs/index.html", "https://www.polsatmedia.pl/Ajax---Produkty-Lista_9502/index.html" -->


<script src="/templates/polsatmedia2/js/jquery_cycle_all.js" type="text/javascript"></script>
<script>
$(function(){var e=$("#progress"),t=$(".cycle-slideshow");if(typeof e!=="undefined"){t.on("cycle-initialized cycle-before",function(t,n){e.stop(true).css("width",0)});t.on("cycle-initialized cycle-after",function(n,r){if(!t.is(".cycle-paused"))e.animate({width:"100%"},r.timeout,"linear")});t.on("cycle-paused",function(t,n){e.stop()});t.on("cycle-resumed",function(t,n,r){e.animate({width:"100%"},r,"linear")})}if(typeof $(".praca-box-info")!=="undefined"){$(".link-job").on("click",function(){$("#bg-tooltip").show();$(".tooltip").show();var e=$(this).parent();var t=e.attr("data-description");var n=e.find(".entry-title").html();var r=e.find(".entry-summary span").html();var i=e.attr("data-preview");var s=$(".tooltip-info");s.find("h1").html(n);s.find("h3 span").html(r);s.find(".wymDesc").html(t)});$(".tooltip-top span").on("click",function(){$("#bg-tooltip").hide();$(".tooltip").hide()})}$(".slidetoTop a").on("click",function(e){e.preventDefault();var t=$("html, body");t.animate({scrollTop:0},"500","swing",function(){})})})
</script>
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/pl_PL/all.js#xfbml=1&appId=420955498000945";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>


<!-- (C)2000-2012 Gemius SA - gemiusTraffic / ver 11.1 / 1.strona_glowna_serwisu -->
<script type="text/javascript">
<!--//--><![CDATA[//><!--
var gemius_identifier = new String('B701ZC9aAbKsZvHZRZxTEsR7XhYWCvrpQMxLgvp8mor.s7');
<!-- /--><!]]> -->
</script>
<script type="text/javascript" src="/templates/polsatmedia2/js/gemius.js"></script>

<!-- (c) 2008 Gemius SA / gemiusHeatMap(GHM+XY) / http://www.polsatmedia.pl -->
<script type="text/javascript">
<!--//--><![CDATA[//><!--
var ghmxy_align = 'center';
var ghmxy_type = 'percent';
var ghmxy_identifier = 'p9Mw5H_By7o829kaz9EsIcV276dB4sNAbEXBNh.6SFz.o7';
//--><!]]>
</script>
<script type="text/javascript" src="//pro.hit.gemius.pl/hmapxy.js"></script>

</body>
</html>