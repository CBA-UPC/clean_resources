(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8372],{50969:function(e,t,r){"use strict";var n=r(67294),o=r(59653),i=r(90837),a=r(81638),s=r(85893),c=n.memo((function(e){var t=e.height,r=e.isMobile,n=void 0!==r&&r?[{width:"75%",height:"34px"},{width:"50%",height:"17px"}]:[{width:"624px",height:"32px"},{width:"432px",height:"20px"}],c=t?{height:t}:null;return(0,s.jsx)(a.PQ,{"data-testid":"placeholder-container",children:(0,s.jsx)(o.d,{style:c,children:(0,s.jsx)(i.O,{"data-testid":"placeholder-text-loader",layout:n})})})}));t.Z=c},54751:function(e,t,r){"use strict";r.d(t,{Z:function(){return O}});var n=r(59499),o=r(67294),i=r(89167),a=r(68414),s=r(74282),c=r(82571),l=r(7406),u=r(29424),d=r(13081),p=r(77744),f=r(86836),v=r(31871),y=r(4511),h=r(81301),_=r(94476),g=r(85893);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(e){var t=e.pageType,r=void 0===t?"home":t,n=e.isBuiltMobile,m=void 0!==n&&n,O=e.isMobileDefault,j=void 0!==O&&O,T=e.children,b=e.homeAppContextProps,E=(0,s.Z)().windowNavigator,w=(0,c.x)(E,m,j),N=(0,l.tq)(w),A=(0,u.y)().getFeatureVariables,I=(0,d.e)().isLoggedIn,P=(0,a.sG)().updateAppShellState,S=p.px.EXPERIMENTS.RN_LDP_SRP_GOOGLE_ONE_TAP_102023,L=A(S.KEY,S.EXP_KEY).variables,R=(null===L||void 0===L?void 0:L.Variation)===S.VARIATIONS.V1,C=[i.Ss.APARTMENTS,i.Ss.APARTMENTS_NEAR_ME,i.Ss.FOR_RENT].includes(r);(0,o.useEffect)((function(){var e=window.performance.getEntriesByType("navigation"),t=(null===e||void 0===e?void 0:e.length)>0&&"reload"===e[0].type,r=function(e,t){var r=0;eturn function(){var e=sessionStorage.getItem("srp-pageViewCount");e&&(r=Number(e))}(),t||(I?(r=0,n()):e&&N&&(r+=1,n())),r}(C,t);P(C&&N&&R&&r<3?{raasProps:{hideGoogleOneTap:!0}}:{raasProps:{hideGoogleOneTap:!1}})}),[C,r,R,N]);var D=(0,_.e)(null===b||void 0===b?void 0:b.news);return(0,g.jsxs)(f.jh,x(x({},x({deviceType:w,pageType:r},b)),{},{children:[(0,g.jsx)(v.Z,{socialImageUrl:D}),(0,g.jsx)(y.SV,{fallback:(0,g.jsx)(h.Z,{}),children:T})]}))}},53866:function(e,t,r){"use strict";r.d(t,{j:);var n=r(4730),o=r(27812),i=r(67294),a=r(47334),s=r(42192),c=r(26180),l=r(95389),u=r(29376),d=r(29378),p=r(12309),f=r(51795),v=r(68676),y=r(99223),h=r(17433),_=r(65941),g="".concat(_.config.STATIC_MEDIA_ASSETS_CDN_PREFIX,"/ConsumerMedia/apartments-near-me/assets/images/spot-apartment.png"),m={sources:[{srcSet:g,media:"".concat(h.t.breakPoint.xs)}],imgProps:{srcSet:"\n        ".concat(g," ").concat(h.t.screenSize.xs,"w,\n        ").concat(g," ").concat(h.t.screenSize.md,"w"),src:g,alt:"realtor.com for rent apartments near me"}},x=r(22157),O=r.n(x),j=r(85893),T={width:"40px",height:"40px"},b={left:4},E=function(){return(0,j.jsx)("div",{className:O().ApartmentsNearMeWidget,"data-testid":"ApartmentsNearMe",children:(0,j.jsx)(c.W,{children:(0,j.jsx)(l.X,{align:"center",children:(0,j.jsx)(u.J,{xs:12,children:(0,j.jsx)(d.Z,{children:(0,j.jsxs)(p.a,{className:O().CardContents,children:[(0,j.jsx)(f.Y,{pictureProps:m,size:T}),(0,j.jsxs)(v.D,{styleType:"body200",display:"inline-block",gutter:b,children:["Looking for apartments for rent in your area?"," ",(0,j.jsx)(y.z,{styleType:"Inline",href:"/rentals/apartments-near-me",children:"Find apartments near you"})]})]})})})})})})},w=r(70780),N=r(98613),A=r(67297),I={right:"5px"},P=function(e){var t=e.city,r=e.state_code,n=e.state,o=t?"".concat(t,", ").concat(r):"".concat(n),i="Explore ".concat(o);return(0,j.jsx)(A.Nm,{children:(0,j.jsx)(v.D,{gutter:I,styleType:"display700",children:i})})},S=r(86836),L=r(75509),R=r(65200),C=r(89167),D=r(8933),M=r(44989),k=r(63080),Z=r(48905),V={AVAIL_ENTRY:"".concat("for_rent:landing",":top:landlord_tools")},X={src:"https://static.media-assets.rdc.moveaws.com/ConsumerMedia/landlord-tools/assets/images/svg/common/avail-logo-small.svg",alt:"Avail Logo","data-testid":"avail-logo-element",className:"avail-logo"},W=(["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"].map((),(0,r(14141).ZP)(c.W).withConfig({displayName:"styles__AvailEntryPointWrapper",componentId:"sc-1ccfodk-0"})(["@media ","{margin-bottom:20px;}"],h.t.maxWidth.sm)),q=Y={bottom:"40px",top:"16px"},H=i.memo((function(){return(0,j.jsx)(W,{gutter:Y,children:(0,j.jsx)(d.Z,{children:(0,j.jsx)(p.a,{children:(0,j.jsxs)(M.k,{alignItems:"center",gap:"12px",children:[(0,j.jsx)(k.t,{imgProps:X}),(0,j.jsxs)("div",{children:[(0,j.jsx)("span",{children:" Want to list your rental for free in minutes? "}),(0,j.jsx)(y.z,{href:"/landlords","data-testid":"avail-link",styleType:"Link",onClick:q,children:"Learn about landlord tools by Avail"})]})]})})})})}));H.displayName="AvailEntryPoint";var z=r(59499),G=r(50029),F=r(87794),K=r.n(F),U=r(17673),J=r(63032),B=r(5480),Q=r(30434),$=function(e){return null===e||void 0===e?void 0:e.filter(Boolean).map((function(e){var t=new URL(e).pathname;return ee(null,t).propertyId}))},ee=function(e,t){var r=(e||t).match(/(M|P|Q|m|p|q)(?:(\d{12})|(\d{5})(?:-?)(\d{5}))/);if(!r||0===r.length)return{};var n=r[2]?r[2]:"".concat(r[3]).concat(r[4]);return{type:r[1],propertyId:n}},te=function(){return(null===Q.X||void 0===Q.X?void 0:Q.X.getItem("LDP_HistorySession"))||[]},re=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[];if(e){var r=te();t=$(r)}return t},ne=r(55665),oe=r(97914),ie=(0,oe.j)("RLService"),ae=function(e,t){t?ie.error("Error while fetching ==> [HOME ".concat(e,"], ERROR ").concat(JSON.stringify(t))):ie.warn("Error while fetching ==> [HOME ".concat(e,"]"),{error:"NO DATA"})},se=function(){var e=(0,G.Z)(K().mark((function e(t){var r,n,o,i,a,s,c,l;return K().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.variables,o=(0,ne.y)(document.cookie),i="".concat(_.config.RDC_X_API_CLIENT).concat(_.config.RDC_X_API_RENTALS,"/hestia?client_id=").concat(_.config.RENTALS_CLIENT_ID),a={query:r,variables:n,nrQueryType:"RECENTLY_VIEWED_LISTINGS",callfrom:"RENTALS_HOME",user_id:o},e.prev=4,e.next=7,(new B.v).post(i,a,{Accept:"application/json, text/javascript"},{timeout:0});case 7:return s=e.sent,c=s.result,l=s.status,null!==c&&void 0!==c&&c.data&&!c.error||ae("Post To Hestia",null===c||void 0===c?void 0:c.error),c.data.status_code=l,e.abrupt("return",c);case 15:e.prev=15,e.t0=e.catch(4),ae("failed to query hestia",e.t0);case 18:case"end":return e.stop()}}),e,null,[[4,15]])})));return (),ce=function(){var e=(0,G.Z)(K().mark((function e(){var t,r,n,o,i,a,s,c;return K().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i=te(),a=$(i),(s={property_id:null===a||void 0===a||null===(t=a.slice(-1))||void 0===t?void 0:t[0]}).property_id){e.next=6;break}return e.abrupt("return",null);case 6:return e.next=8,se({query:"query GetPropertyLocation($property_id: ID) {\n  home(property_id: $property_id) {\n    location {\n      address {\n        city,\n        postal_code, \n        state_code\n      }\n    }\n  }\n}",variables:s});case 8:return c=e.sent,e.abrupt("return",null===(r=c.data)||void 0===r||null===(n=r.home)||void 0===n||null===(o=n.location)||void 0===o?void 0:o.address);case 12:e.prev=12,e.t0=e.catch(0),ae("Last Recently Viewed City",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return ();r de=function(){var e=(0,G.Z)(K().mark((function e(t,r){var n,o,i,a,s,c,l,u,d,p,f,v,y,h,g,m,x,O,j=arguments;return K().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=j.length>2&&void 0!==j[2]?j[2]:[],o=j.length>3?j[3]:void 0,i=re(r),e.t1=t,e.t1){e.next=8;break}return e.next=7,ce();case 7:e.t1=e.sent;case 8:if(e.t0=e.t1,e.t0){e.next=11;break}e.t0={};case 11:return a=e.t0,s=_.config||{},c=s.RDC_X_API_CLIENT,l=s.RDC_X_API_RENTALS,u=s.CLIENT_ID,d="".concat(c).concat(l,"/browse_modules"),f=(p=a).city,v=p.county,y=p.state_code,h=p.postal_code,g={limit:C.kV,client_id:u,types:n.map((),postal_code:h,city:f,state_code:y},o&&(g=ue(ue({},g),o)),!f&&v&&(g.county=v),(null===i||void 0===i?void 0:i.length)>0&&(g.property=i),e.prev=19,m=new URL("".concat(d,"?").concat((0,U.stringify)(g))),e.next=23,(new B.v).get(m.toString());case 23:return x=e.sent,O=x.result,e.abrupt("return",O);case 28:throw e.prev=28,e.t2=e.catch(19),new Error(e.t2);case 31:case"end":return e.stop()}}),e,null,[[19,28]])})));return (),pe=r(50969),fe=["recently_viewed_for_rent","recently_updated_for_rent"],ve=function(e){var t,r,c=e.news,l=e.seoLinks,u=e.narLinks,d=e.recentTypes,p=e.showRVL,f=void 0!==p&&p,v=(0,S.gt)().deviceType,y=(0,i.useMemo)((function(){return[].concat((0,o.Z)(d),(0,o.Z)(C.Tm))}),[d,C.Tm]),h=(0,N.Z)(de,f,y),_=h.modulesData,g=h.isLoading,m=h.location,x=h.clientLocation,O=(0,L.tq)(v)?C.a2:C.Aw;if(!g){var T,b,A=(null===_||void 0===_?void 0:_.results)||{},I=A.recently_viewed_for_rent,M=A.recently_updated_for_rent,k=(0,n.Z)(A,fe);t=(0,w.q7)({results:{recently_viewed_for_rent:I,recently_updated_for_rent:M}},x);var Z=(0,w.q7)({results:k},m),V=null===(T=r=null===Z||void 0===Z?void 0:Z.filter(())||void 0===T?void 0:T.find((),X=V&&(0,R.q)(V.properties,O);r=null===(b=r)||void 0===b?void 0:b.filter((function(e){return!(!X&&e.testId===D.bz.PROMOTIONS_FOR_RENT.TEST_ID)&&(!X||e.testId!==D.bz.STUDIO.TEST_ID)}))}return(0,j.jsxs)(a.Z,{news:c,seoLinks:l,narLinks:u,children:[(0,j.jsx)(H,{}),(0,j.jsx)(s.X,{types:d,data:t,isLoading:g,minPropertiesCount:1}),(0,j.jsx)(E,{}),g?(0,j.jsx)(pe.Z,{height:"60px"}):r.length>0&&(0,j.jsx)(P,{city:m.city,state_code:m.state_code,state:m.state}),(0,j.jsx)(s.X,{types:C.Tm,data:r,isLoading:g,minPropertiesCount:O})]})}},22157:]);