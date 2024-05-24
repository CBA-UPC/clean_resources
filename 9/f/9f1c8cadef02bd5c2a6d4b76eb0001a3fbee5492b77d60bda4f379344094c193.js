"use strict";(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[7739],{87927:(e,t,a)=>{a.r(t),a.d(t,{default:()=>B});var s=a(66480),o=a(56054),r=a(86594),n=a(32758),i=a(47517),c=a(70515),l=a(38144),u=a(32787),d=a.n(u),p=a(84868),g=a(90706),m=a(65580),y=a(61993),h=a(90758),v=a(35747),A=a(62956),f=a(80390),_=a(89781),S=a(11129),b=a(75628),M=a(10003),R=a(42254),Z=a(36599),C=a(20755),T=a(69096),P=a(24586),E=a(78744),k=a(83815),L=a(33602),w=a(40887),N=a(71130),I=a(34853);const O=(0,i.Z)(o.Z),D=(new Date).getFullYear();let U,F;const H=e=>{null!=s.Z&&s.Z.trackRegGateExit&&s.Z.trackRegGateExit(e)},B=({origin:e,trackingContext:t})=>{const a=(0,h.Z)(),o=(0,N.useDispatch)(),i=(0,N.useSelector)(_.Xp),u=(0,N.useSelector)(S.Gl),B=(0,N.useSelector)(M.BB),z=(0,N.useSelector)(Z.iZ),x=(0,N.useSelector)(C.Dj),G=(0,N.useSelector)(R.Bo),Y=(0,N.useSelector)(b.so);(0,y.Z)((()=>{var e;U=d().parse(window.location.search),F=U.testMode||U["?testMode"],!F&&G&&(0,E.U)(),o((0,w.cl)(!1)),o((0,v.$P)());const a="softgate"===t.context?k.ef.SOFT_GATE:k.ef.HARD_GATE,r=(0,T.aV)(null!=(e=t.context)?e:"reg-gate");return s.Z.trackRegGateOpen({trigger:r,type:a}),()=>{o((0,v.$P)()),H(k.t$.DISMISS)}}));const $=Y===n.Z.CA,{createAccountMessage:q,title:j}=(({context:e="reg-gate",stationName:t})=>{const s=i?"all_access_Preview":e,o=a(B?"To listen to thousands of live radio and artist stations, create a free account.":"To listen to thousands of live radio stations, create a free account.");switch(s){case"profile":case"sidenav":return{createAccountMessage:o,title:a("Connect with your favorites")};case"my_stations":return{createAccountMessage:a("To easily find your favorite and recently listened to stations, create a free account."),title:a("Access your stations")};case"listen_history":return{createAccountMessage:a("To view recently listened to stations and songs, create a free account."),title:a("See what you've been listening to")};case"live_favorite":return{createAccountMessage:a("To access your favorites anytime, anywhere, create a free account."),title:a("Save stations you love")};case"live_thumb":return{createAccountMessage:a("To hear more music you like, create a free account."),title:a("Personalize your listening")};case"artist_play":return{createAccountMessage:a("To listen to this artist and more, without interruption, create your free account."),title:t?a("Listen to {stationName}",{stationName:t}):a("Listen to Artist Stations")};case"track_play":return{createAccountMessage:a("To listen to music based on this song, create your free account."),title:t?a("Listen to songs like {stationName}",{stationName:t}):a("Listen to songs like this")};case"talk-show_play":return{createAccountMessage:a("To listen to this podcast and more, create your free account."),title:t?a("Listen to {stationName}",{stationName:t}):a("Listen to Podcasts")};case"my_favorites_play":return{createAccountMessage:a("To hear all your favorite songs and artists on your own personal station, create a free account."),title:t?a("Listen to {stationName}!",{stationName:t}):a("Listen to Your Favorites Radio!")};case"shared_favorites_play":return{createAccountMessage:a("To listen, create a free account."),title:t?a("Listen to {stationName}!",{stationName:t}):a("Listen to Favorites Radio!")};case"sdk":return{createAccountMessage:a("All your favorite music. All your favorite stations. All free."),title:a("Create Your iHeart Account")};case"subscribing-IHEART_US_PREMIUM":case"subscribing-IHEART_US_PLUS":case"subscribing-IHEART_US_PREMIUM_TRIAL":case"subscribing-IHEART_US_PLUS_TRIAL":return{createAccountMessage:a("Please create a free account."),title:a("Register first")};case"add_to_playlist":return{createAccountMessage:a("Create a FREE account to add songs and albums to your playlist"),title:a("Create Your iHeart Account")};case"all_access_Preview":return{createAccountMessage:a("Welcome to the All Access FREE Preview Weekend. Create your FREE account and listen to millions of songs, live radio, playlists, and podcasts – enjoy All Access, FREE this weekend only."),title:a("Your Halloween treat is here")};case"family_plan_validation":return{createAccountMessage:a("To join the Family Plan you've been invited to, please create a free account"),title:a("Create a free account to join your Family Plan")};case L.p.NZSTATION:return{createAccountMessage:"Create a FREE account to listen to The ACC Commentary.",title:a("Connect with your favorites")};default:return{createAccountMessage:o,title:a("Connect with your favorites")}}})(t),X="popup"===e?"popup-dialog":void 0,J=(0,I.BX)("span",{children:[(0,I.tZ)("br",{}),q,(0,I.tZ)("br",{}),a("Have an account?")," ",(0,I.tZ)(r.Z,{autoFocus:!0,"data-test":"login-link",onClick:()=>{o((0,v.$P)()),H(k.t$.DISMISS),o((0,P.Mo)(t))},tabIndex:0,children:a("Log In")})]});return(0,I.BX)("div",{"data-name":"signup-module","data-test":"signup-modal",id:X,children:[(0,I.BX)("header",{children:[G?(0,I.tZ)(g.Z,{title:j}):(0,I.tZ)(c.Z,{children:j}),(0,I.tZ)(p.Z,{children:J})]}),(0,I.tZ)(l.Z,{isPopup:"popup"===e,isSdk:G,children:(0,I.tZ)(O,{captcha:G,formError:z?a("Sorry, you are not eligible to register for iHeart"):u,onSubmit:(e,t)=>{const a=(0,A.C)(e,x),r=t.target;o((0,v.$P)());let n=!0;if(G){const e=r.querySelector('[name="g-recaptcha-response"]');n=!(null==e||!e.value)}return!!(F||n||G)&&(o((0,v.z2)(a)),H(k.t$.EMAIL),m.Z.track(s.z.RegGateExit,{optIn:0===(null==a?void 0:a.emailOptOut)}),!1)},trackingContext:t,validate:(e,t)=>{const{userName:s,password:r,birthYear:n,zipCode:i,gender:c}=(0,A.C)(e,x),l=[s,r,n,!!$||i],u=document.querySelector('[data-name="signup-module"]');let d=!0;if(G){const e=u.querySelector('[name="g-recaptcha-response"]');d=!(null==e||!e.value)}return l.map(Boolean).includes(!1)||!c||c===f.zC.DefaultGenderValue?(o((0,v.yu)(a("Please fill out all form fields"))),!1):z||n>D-14||$&&n>D-15?(z||o((0,w.cl)(!0)),!1):d||F||!G?(o((0,v.$P)()),!(Object.keys(t).length>0&&(t.password&&o((0,v.yu)(a("Please correct all password errors"))),1))):(o((0,v.yu)(a("Please complete the CAPTCHA"))),!1)}})})]})}},56054:(e,t,a)=>{a.d(t,{Z:()=>g});var s=a(33400),o=a(71130),r=a(32034),n=a(11129),i=a(10003),c=a(36599),l=a(75628),u=a(46114);const d=(0,s.ZP)({resolved:{},chunkName:()=>"SignupForm",isRe]},importAsy)),requireAs)},requireS)},resol85}),p=(0,r.zB)({emailUpdatesDefaultUnchecked:i.ts,genderOptions:i.n3,isUnderAge:c.iZ,piiRegulation:l.Yw,privacyLink:u.JD,registrationError:n.Gl,termsLink:u.bR,usePostal:i.P,validation:l.X0,zipNumeric:i.CK,zipRegex:i._}),g=(0,o.connect)(p)(d)},62956:(e,t,a)=>{a.d(t,{C:()=>i,K:()=>n});var s=a(51588),o=a(21726),r=a(80390);function n(e){return{[r.zC.DefaultGenderValue]:e("Gender"),[r.zC.Female]:e("Female"),[r.zC.Male]:e("Male"),[r.zC.Unspecified]:"US"===(0,o.Z)()?e("Prefer not to say"):e("Other")}}function i(e,t){var a,r;return(0,s.Z)({},e,{birthYear:Number(null==e?void 0:e.birthYear),emailOptOut:null!=e&&e.emailOptOut?0:1,gender:null==e||null==(a=e.gender)?void 0:a.value,host:`webapp.${(0,o.Z)()}`,pname:t,userName:(null!=(r=null==e?void 0:e.userName)?r:"").trim()})}},336}},46114:(e,t,a)=>{a.d(t,{BJ:()=>l,Bd:()=>F,Br:()=>I,D5:()=>n,ER:()=>x,HC:()=>S,JD:()=>U,Jp:()=>T,Mx:()=>i,Np:()=>g,Ou:()=>C,P5:()=>m,RV:()=>w,Sq:()=>z,Sr:()=>c,TJ:()=>N,Tg:()=>d,UR:()=>D,Ug:()=>P,Wn:()=>Z,XT:()=>h,aO:()=>O,an:()=>B,bR:()=>H,kP:()=>v,lW:()=>R,ly:()=>A,mg:()=>y,mz:()=>b,o6:()=>p,ol:()=>E,p_:()=>_,pb:()=>k,qY:()=>u,rT:()=>f,vA:()=>M,>L});var s=a(32034);const}},r=(e,t)=>(0,s.P1)(o,(a=>{var s,o;return null!=(s=null!=(o=null==a?void 0:a[e])?o:t)?s:""})),n=r("about"),i=r("adChoices"),c=r("advertise"),l=r("appsAuto"),u=r("appsHome"),d=(r("apps"),r("appsMobile")),p=r("appsWear"),g=r("blog"),m=r("brand"),y=r("content"),h=r("contestRules"),v=r("contests"),A=r("customRadio"),f=r("events"),_=r("features"),S=r("forYou"),b=r("genres"),M=r("help"),R=r("helpResettingPassword"),Z=r("helpSkipLimit"),C=r("helpSocialSignIn"),T=r("home"),P=r("jobs"),E=r("liveRadio"),k=r("myMusic"),L=r("myStations"),w=r("news"),N=r("ondemand"),I=(r("perfectFor"),r("photos")),O=r("playlists"),D=r("podcasts"),U=r("privacy"),F=r("subscriptionoptions"),H=r("terms"),B=(r("tlnkApps"),r("getTheAppLink")),z=r("upgrade"),x=r("yourLibrary")}}]);
//# sourceMappingURL=SignupContainer.www.js.map