(self.webpackChunk=self.webpackChunk||[]).push([["CombineStarCandiConstUI","StarConstituencyUI","StarCandidateUI"],{"./campaign/election/common/designConfig/component/CombineStarCandiConstUI.js":(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>u});var a=t("../node_modules/react/index.js"),l=t("../node_modules/prop-types/index.js"),s=t.n(l),r=t("./campaign/election/components/StarConstituencyUI.js"),o=t("./campaign/election/components/StarCandidateUI.js"),i=t("./components/lib/errorboundery/ErrorBoundary.js");function c(e){var n=e.data,t=e.loading,l=e.params;return a.createElement(i.Z,null,a.createElement(r.default,{loading:t,data:null==n?void 0:n.starConstituencies,statename:null==l?void 0:l.statename}),a.createElement(o.default,{loading:t,data:null==n?void 0:n.starCandidates,statename:null==l?void 0:l.statename}))}t("./campaign/election/common/css/Election.scss"),c.propTypes={data:s().object,params:s().object,loading:s().bool};const u=(0,a.memo)(c)},"./campaign/election/components/CandidateSlide.js":(e,n,t)=>{"use strict";t.d(n,{Z:()=>d});var a=t("../node_modules/react/index.js"),l=t("../node_modules/prop-types/index.js"),s=t.n(l),r=t("./components/common/AnchorLink.js"),o=t("./components/common/ImageCard/ImageCard.js"),i=t("./campaign/election/utils/util.js"),c=process.env.SITE,u=function(e){var n,t,l,s,u,d,m,p,v,f,g,y,j,b,E,h,S,_,C=e.item,w=e.statename,I=e.statusHashMap,x=e.isLive,N="";null!=C&&null!==(n=C.constituency)&&void 0!==n&&null!==(t=n.regInfo)&&void 0!==t&&null!==(l=t[c])&&void 0!==l&&l.name&&(N=(0,i.Xz)({state:w,constituency:C.constituency.uname,id:C.constituency.cns_no}));var O=N?r.Z:"div",T="";(0,i.wX)(C)&&"true"==(null==C||null===(s=C.regInfo)||void 0===s||null===(u=s[process.env.SITE])||void 0===u?void 0:u.hasTopic)&&(T=(0,i.Hf)({name:null==C?void 0:C.uname,id:null==C?void 0:C.c_id}));var k=T?r.Z:"div",A=function(){var e="";return x?I&&null!=C&&C.candidateCode&&(e=i.sl[I.get(parseInt(null==C?void 0:C.candidateCode,10))]):e=null==C?void 0:C.winStatus,e}();return a.createElement(a.Fragment,null,a.createElement("div",{className:"candidate_box ".concat(A)},a.createElement("span",{className:"candidate_img ".concat(A)},a.createElement(k,T&&{href:T},a.createElement(o.Z,{msid:""===C.image?"69347424":C.image||"69347424",title:"title",size:"smallthumb",imgver:null==C?void 0:C.imgsize,className:"candidate_img"}))),a.createElement("div",{className:"candidateDetails"},a.createElement(k,T&&{href:T},a.createElement("span",{className:"candidate_name"},(null===(d=C.regInfo)||void 0===d||null===(m=d[process.env.SITE])||void 0===m?void 0:m.name)||(null===(p=C.regInfo)||void 0===p||null===(v=p.all)||void 0===v?void 0:v.name)||(null==C?void 0:C.name))),a.createElement("div",{className:"party_badge"},a.createElement("span",{className:"party_name ".concat(A?"":"no_status"),style:{background:null===(f=C.party)||void 0===f?void 0:f.color}},(null==C||null===(g=C.party)||void 0===g||null===(y=g.regInfo)||void 0===y||null===(j=y[process.env.SITE])||void 0===j?void 0:j.partyAbbr)||(null==C||null===(b=C.party)||void 0===b?void 0:b.abbr)),A&&a.createElement("span",{className:"party_status ".concat((null==A?void 0:A.toLowerCase())||"")},null==A?void 0:A.toUpperCase())),a.createElement(O,N&&{href:N},a.createElement("span",{className:"constituency"},(null==C||null===(E=C.constituency)||void 0===E||null===(h=E.regInfo)||void 0===h||null===(S=h[process.env.SITE])||void 0===S?void 0:S.name)||(null==C||null===(_=C.constituency)||void 0===_?void 0:_.name))),!x&&(null==C?void 0:C.totalVotes)>0?a.createElement(a.Fragment,null,a.createElement("span",{className:"votes_info"},"Votes : ",a.createElement("span",null,(0,i._H)(null==C?void 0:C.totalVotes)," ")),C.votesPercentage>0?a.createElement("span",{className:"votes_info wining_ratio"},"Vote Percent : ",a.createElement("span",null,C.votesPercentage)):a.createElement(a.Fragment,null)):a.createElement(a.Fragment,null))))};u.propTypes={item:s().object,statusHashMap:s().object,isLive:s().bool,statename:s().string};const d=u},"./campaign/election/components/StarCandidateUI.js":(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>S});var a=t("../node_modules/react/index.js"),l=t("../node_modules/react-redux/es/index.js"),s=t("../node_modules/prop-types/index.js"),r=t.n(s),o=t("./components/common/SectionHeader/SectionHeader.js"),i=t("./utils/util.js"),c=t("./components/desktop/Slide/SlideWrapper.js"),u=t("./components/common/FakeCards/FakeProfileList.js"),d=(t("./campaign/election/common/css/StarCandidate.scss"),t("./campaign/election/utils/util.js")),m=t("./campaign/election/components/CandidateSlide.js"),p=t("./components/common/AnchorLink.js"),v=["data","width","margin","statename"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},f.apply(this,arguments)}unction y(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var j=(0,i.m5)();function b(e){var n=e.data,t=e.size,l=void 0===t?"4":t,s=e.loading,r=e.type,m=e.childTabs,p=e.liveStatusMap,v=e.showlivedata,f=e.statename,b=e.resultrefresh,h=e.notCallJCMSFeed,S="ElectionHPWidget"==r;if(!s&&!(0,i.qt)(n)&&!S)return null;var _,C,w=(0,d.JC)(f,v),I=(_=(0,a.useState)(p),C=2,function(e){if(Array.isArray(e))return e}(_)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,l,s,r,o=[],i=!0,c=!1;try{if(s=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;i=!1}else for(;!(i=(a=s.call(t)).done)&&(o.push(a.value),o.length!==n);i=!0);}catch(e){c=!0,l=e}finally{try{if(!i&&null!=t.return&&(r=t.return(),Object(r)!==r))return}finally{if(c)throw l}}return o}}(_,C)||g(_,C)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),x=I[0],N=I[1];function O(e){(0,d.TY)(e).then((function(e){var n=(0,d.zE)(e);N(n)}))}(0,a.useEffect)((function(){var e;return h||"false"==v||(O(f),"false"!=b&&(e=setInterval((,6e4))),function(){e&&clearInterval(e)}}),[]);var T=(0,i.an)()?"ul":c.Z,k={};(0,i.an)()?k.className="col12 view-horizontal":(k.size=l,k.sliderClass="candidates-newlist");var A,L,M=(A=(0,d.Go)(f).ELECTION_YEAR,L=null==j?void 0:j.starCandidateTxt,!S&&A&&(L+=" ".concat(A)),L),P=[];return(0,i.qt)(n)&&(P=[].concat(n),[{type:"candidate_list_link",candidateListLink:!0}])),a.createElement("div",{className:"star_candidates_widget inner_box_widget"},a.createElement(o.Z,{sectionhead:M,headerClass:""}),m||null,s?a.createElement(u.Z,{elemSize:(0,i.an)()?"3":l||"4",cardheight:"200"}):a.createElement("div",{className:"ele_slider star_candidate"},S&&!(0,i.qt)(n)?a.createElement("div",{className:"no_star_candidate"},"No Star Candidate"):a.createElement(T,k,a.createElement(E,{margin:"15",data:P,width:"153",statusHashMap:h?p:x,isLive:w,statename:f}))))}var E=function(e){var n=e.data,t=e.width,l=e.margin,s=e.statename,r=function(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}(e,v);return(0,i.qt)(n)?n.map((function(e){var n,o,c,u;if(null!=e&&e.candidateListLink){var p,v="",g=null===(p=j.candidateMsidStateMap)||void 0===p?void 0:p[s];return g&&(v=(0,d.Pq)(s,g)),v?a.createElement("li",{className:"slide listing_link",style:(0,i.an)()?{}:{width:"".concat(t,"px"),paddingRight:"".concat(l,"px")}},a.createElement(h,{link:v})):null}return null!=e&&null!==(n=e.regInfo)&&void 0!==n&&null!==(o=n[process.env.SITE])&&void 0!==o&&o.name||null!=e&&null!==(c=e.regInfo)&&void 0!==c&&null!==(u=c.all)&&void 0!==u&&u.name?a.createElement("li",{className:"slide",key:e.uname,style:(0,i.an)()?{}:{width:"".concat(t,"px"),paddingRight:"".concat(l,"px")}},a.createElement(m.Z,f({item:e,statename:s},r))):null})):null};function h(e){var n=e.link;return a.createElement(p.Z,{href:n},a.createElement("div",{className:"candidate_box allCandidateList"},a.createElement("div",{className:"allCanCir"},a.createElement("span",null,j.locale.see_all_candidate)),a.createElement("div",{className:"candiArrow"},a.createElement("span",null))))}E.propTypes={data:r().array,width:r().string,margin:r().string},h.propTypes={link:r().string},b.propTypes={data:r().array,size:r().string,type:r().string,loading:r().bool,childTabs:r().any,liveStatusMap:r().object,showlivedata:r().string,statename:r().string};const S=(0,l.$j)((function(e){var n,t,a,l;return{showlivedata:null===(n=e.app)||void 0===n||null===(t=n.election)||void 0===t?void 0:t.showlivedata,resultrefresh:null===(a=e.app)||void 0===a||null===(l=a.election)||void 0===l?void 0:l.resultrefresh}}))((0,a.memo)(b))},"./campaign/election/components/StarConstituencyUI.js":(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:);var a=t("../node_modules/react/index.js"),l=t("../node_modules/prop-types/index.js"),s=t.n(l),r=t("../node_modules/react-redux/es/index.js"),o=t("./utils/util.js"),i=t("./components/common/FakeCards/FakeStarCandidate.js"),c=t("./components/common/SectionHeader/SectionHeader.js"),u=t("./components/desktop/Slide/SlideWrapper.js"),d=(t("./campaign/election/common/css/MajorConstituencies.scss"),t("./components/common/AnchorLink.js")),m=t("./campaign/election/utils/util.js"),p=t("./components/lib/errorboundery/ErrorBoundary.js"),v=["data","width","margin"];r y=(0,o.m5)(),j=process.env.SITE;function b(e){var n=e.data,t=e.size,l=void 0===t?"3":t,s=e.loading,r=e.statename,d=e.showlivedata,v=e.resultrefresh;if(!s&&!(0,o.qt)(n))return null;var f,j,b=(0,o.an)()?"ul":u.Z,h=(f=(0,a.useState)(),j=2,f)||f,j)||f,j)||)),S=h[0],_=h[1],C={};(0,o.an)()?C.className="col12 view-horizontal":(C.size=l,C.sliderClass="parties_slider");var w,I=(w=(0,m.Go)(r).ELECTION_YEAR,"".concat(null==y?void 0:y.starConstituency," ").concat(w)),x=(0,m.JC)(r,d);function N(e){(0,m.TY)(e).then(()}return(0,a.useEffect)((function(){var e;return x&&(N(r),"true"==v&&(e=setInterval((,6e4))),),[r]),a.createElement(p.Z,null,a.createElement("div",{className:"star_constituency"},a.createElement(c.Z,{sectionhead:I}),s?a.createElement(i.Z,{elemSize:(0,o.an)()?"2":l||"4",cardheight:"100"}):a.createElement("div",{className:"ele_slider major_constituencies"},a.createElement(b,C,a.createElement(E,{margin:"15",data:n,width:"209",statename:r,isLive:x,statusHashMap:S})))))}var E=function(e){var n=e.data,t=e.width,l=e.margin,s=e,v);return(0,o.qt)(n)?n.map((function(e){var n,r,i,c;return null!=e&&null!==(n=e.regInfo)&&void 0!==n&&null!==(r=n[process.env.SITE])&&void 0!==r&&r.name||null!=e&&null!==(i=e.regInfo)&&void 0!==i&&null!==(c=i.all)&&void 0!==c&&c.name?a.createElement("li",{className:"slide",key:e.cns_no,style:(0,o.an)()?{}:{width:"".concat(t,"px"),paddingRight:"".concat(l,"px")}},a.createElement(h,f({item:e},s))):null})):a.createElement(a.Fragment,null)};E.propTypes={data:s().array,margin:s().any,width:s().any};var h=function(e){var n,t,l,s,r,o,i=e.item,c=e.statename,u=e.isLive,p=e.statusHashMap;if(null==i||!i.cns_no)return null;var v="";null!=i&&null!==(n=i.regInfo)&&void 0!==n&&null!==(t=n[j])&&void 0!==t&&t.name&&(v=(0,m.Xz)({state:c,constituency:i.uname,id:i.cns_no}));var f=v?d.Z:a.Fragment,g=function(){var e,n,t,a,l,s={};if(u){if(p&&null!=i&&i.cns_no){var r=p.get(parseInt(null==i?void 0:i.cns_no,10));s={abbr:null==r?void 0:r.abbr,color:(null==r?void 0:r.color)||"#a5a5a5",status:m.sl[null==r?void 0:r.winStatus]}}}else s={abbr:null==i||null===(e=i.winnerCandidate)||void 0===e||null===(n=e.party)||void 0===n?void 0:n.abbr,color:(null==i||null===(t=i.winnerCandidate)||void 0===t||null===(a=t.party)||void 0===a?void 0:a.color)||"#a5a5a5",status:null==i||null===(l=i.winnerCandidate)||void 0===l?void 0:l.status};return s}();return a.createElement(f,v&&{href:v},a.createElement("div",{className:"constiArea"},a.createElement("span",{className:"location_item"},null==i||null===(l=i.regInfo)||void 0===l||null===(s=l[process.env.SITE])||void 0===s?void 0:s.name),((null==i?void 0:i.totalElectors)>0||i.pollingPercentage>0||(null==g?void 0:g.abbr))&&a.createElement("div",{className:"constiArea_cont"},(null==i?void 0:i.totalElectors)>0&&a.createElement("span",{className:"total_vote"},y.locale.constTable.total_Electors," ",a.createElement("span",null,"- ",(0,m._H)(i.totalElectors)||"NA")),i.pollingPercentage>0&&a.createElement("span",{className:"vote_ratio"},y.locale.polling," ",a.createElement("span",null,"- ",i.pollingPercentage?"".concat(i.pollingPercentage,"%"):"NA")),(null==g?void 0:g.abbr)&&a.createElement("div",{className:"party_badge ".concat(null!=g&&g.status?"":"no_status")},a.createElement("span",{className:"party_name",style:null!=g&&g.status?{background:null==g?void 0:g.color}:{background:null==g?void 0:g.color,padding:"6px 12px",textAlign:"center"}},g.abbr),(null==g?void 0:g.status)&&a.createElement("span",{className:"party_status ".concat((null==g||null===(r=g.status)||void 0===r?void 0:r.toLowerCase())||""," ")},null==g||null===(o=g.status)||void 0===o?void 0:o.toUpperCase())))))};h.propTypes={item:s().object,statusHashMap:s().object,statename:s().string,isLive:s().bool},b.propTypes={data:s().array,size:s().string,loading:s().bool,statename:s().string,resultrefresh:s().string};const S=(0,r.$j)((function(e){var n,t,a,l;return{showlivedata:null==e||null===(n=e.app)||void 0===n||null===(t=n.election)||void 0===t?void 0:t.showlivedata,resultrefresh:null===(a=e.app)||void 0===a||null===(l=a.election)||void 0===l?void 0:l.resultrefresh}}))((0,a.memo)(b))},"../node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[2].use[1]!../node_modules/css-loader/index.js??ruleSet[1].rules[2].use[2]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!../node_modules/postcss-loader/lib/index.js??ruleSet[1].rules[2].use[4]!./campaign/election/common/css/Election.scss":()=>{},"../node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[2].use[1]!../node_modules/css-loader/index.js??ruleSet[1].rules[2].use[2]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!../node_modules/postcss-loader/lib/index.js??ruleSet[1].rules[2].use[4]!./campaign/election/common/css/MajorConstituencies.scss":()=>{},"../node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[2].use[1]!../node_modules/css-loader/index.js??ruleSet[1].rules[2].use[2]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!../node_modules/postcss-loader/lib/index.js??ruleSet[1].rules[2].use[4]!./campaign/election/common/css/StarCandidate.scss":"./campaign/election/common/css/Election.scss":(e,n,t)=>{"use strict";var a=t("../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=t.n(a),s=t("../node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[2].use[1]!../node_modules/css-loader/index.js??ruleSet[1].rules[2].use[2]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!../node_modules/postcss-loader/lib/index.js??ruleSet[1].rules[2].use[4]!./campaign/election/common/css/Election.scss"),r=t.n(s);l()(r(),{insert:"head",singleton:!1}),r().locals},"./campaign/election/common/css/MajorConstituencies.scss":(e,n,t)=>{"use strict";var a=t("../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=t.n(a),s=t("../node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[2].use[1]!../node_modules/css-loader/index.js??ruleSet[1].rules[2].use[2]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!../node_modules/postcss-loader/lib/index.js??ruleSet[1].rules[2].use[4]!./campaign/election/common/css/MajorConstituencies.scss"),r=t.n(s);l()(r(),{insert:"head",singleton:!1}),r().locals},"./campaign/election/common/css/StarCandidate.scss":(e,n,t)=>{"use strict";var a=t("../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=t.n(a),s=t("../node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[2].use[1]!../node_modules/css-loader/index.js??ruleSet[1].rules[2].use[2]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!../node_modules/postcss-loader/lib/index.js??ruleSet[1].rules[2].use[4]!./campaign/election/common/css/StarCandidate.scss"),r=t.n(s);l()(r(),{insert:"head",singleton:!1}),r().locals}}]);