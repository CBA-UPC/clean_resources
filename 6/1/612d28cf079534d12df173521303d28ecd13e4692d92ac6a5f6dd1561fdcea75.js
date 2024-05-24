(self.webpackChunk=self.webpackChunk||[]).push([["MP"],{"./components/articleshow/MoviePoster.js":(e,t,a)=>{"use strict";a.r(t),a.d(t,{Userrating:()=>I,default:()=>q});var n=a("../node_modules/react/index.js"),r=a("./components/common/ImageCard/ImageCard.js"),s=a("./utils/fetch/fetch.js"),c=a("./utils/util.js"),l=a("./components/common/css/MovieReviewShowCard.scss"),i=a("./components/common/ssoLogin.js"),o=a("./components/common/Byline.js"),u=a("./components/common/PageMeta.js"),m=a("./components/common/SocialShare.js");pR)(),O=N.locale,j="",L="2.5",P=function(e){function t(e){var a;return this,t),(a=b(this,t,[e])).state={_rating:"2.5"},a}var a,s;return t,e),a=t,(s=[{key:"render",value:function(){var e,t=this.props,a=t.item,s=t.review,i=t.sharedata,d=t.openCommentsPopup,p=this.state._rating,v=[],E=a.pwa_meta&&"techreview"==s?"techreview":"moviereview";a.pwa_meta,j=a.pwa_meta&&"techreview"==a.pwa_meta.subpagetype||"user"==s?"tech":"";var y=a&&a.moviereview?a.moviereview:a;y&&y.lang&&v.push(y.lang),y&&y.gn&&v.push(y.gn.split(",").join(", "));var b=a.gadgetinfo&&a.gadgetinfo.rating?a.gadgetinfo.rating:null,h=a.ur,_=a.gadgetinfo,w=null;if(h&&a.pwa_meta&&"techreview"===a.pwa_meta.subpagetype)w=h;else if(_&&_.userrating&&"NaN"!==_.userrating){var L=_.userrating;w=void 0!==L&&L}var P=(0,u.J)(),S="moviereview"==E?(0,u.J)({pagetype:"articleshow"}).attr().itemReviewed:{};return n.createElement("div",{className:"animated fadeIn moviereview-summaryCard".concat((0,c.an)()?"":" desktop"),"data-attr":"news_card"},a&&a.hidePoster?null:n.createElement(n.Fragment,null,null==s||"critic"==s||"moviereview"==s||"techreview"==s?n.createElement("div",{className:"poster_card"},n.createElement("div",{className:"con_poster"},"moviereview"!=a.pwa_meta.pagetype?n.createElement("span",null,n.createElement("meta",{itemProp:"datePublished",content:a.dlseo?a.dlseo:null}),n.createElement("meta",{itemProp:"dateModified",content:a.luseo?a.luseo:null})):null,(0,c.an)()||"moviereview"!=a.pwa_meta.pagetype?n.createElement(n.Fragment,null,n.createElement("h1",{className:"name"},a.hl)):n.createElement("h2",{className:"mvlabel name"},N.locale.film_review),a&&a.hideMovieTable?n.createElement("span",{style:{height:"60%"}},a.imageid&&n.createElement(r.Z,{noLazyLoad:!0,msid:a.imageid,size:"midthumb",schema:!0,width:"100%"})):n.createElement("div",g({},S,{className:"table"}),n.createElement("div",{className:"table_row"},n.createElement("span",{className:"".concat(l.Z.img_wrap," table_col img_wrap handlereview")},a&&a.image&&a.image[0]&&a.image[0].id&&n.createElement(r.Z,{noLazyLoad:!0,msid:a&&a.image&&a.image[0]&&a.image[0].id,size:"posterthumb",schema:!0})),n.createElement("span",{className:"table_col con_wrap"},(0,c.an)()?"moviereview"==a.pwa_meta.pagetype?null:void 0:"moviereview"==a.pwa_meta.pagetype?n.createElement("h1",{className:"movie-name"},a.hl):a.hl,(0,c.an)()||"moviereview"!=a.pwa_meta.pagetype?null:n.createElement("div",{className:"moviereview-sourceCard"},n.createElement(o.Z,{item:f(f({},a),{},{noAuthorSchema:!0})})),(0,c.an)()?"":n.createElement(n.Fragment,null,n.createElement("div",{id:"widget-two",className:"wdt_timespoints"}),n.createElement("div",{className:"google-share-icon"},""!==N.whatsapp?n.createElement(m.gi,null):n.createElement(m.Em,null)),n.createElement(m.ZP,{shareText:a&&a.pwa_meta&&a.pwa_meta.ogtitle||a.hl,sharedata:i,openCommentsPopup:d})),y&&y.ct?R(y.ct):null,n.createElement("span",{className:"des",itemProp:("moviereview"!=a.pwa_meta.pagetype||(0,c.an)(),"")},(0,c.an)()?"":n.createElement("span",null,n.createElement("b",null,N.locale.director,":")," ",y.dir),n.createElement("span",null,(0,c.an)()?"":n.createElement("b",{className:""},"".concat(N.locale.genre,":")),""!=v?v.join(", "):null),y.du?x(y.du):null),(0,c.an)()?null:n.createElement("span",{className:"btn_rate",role:"button",tabIndex:"0",onClick:B.bind(this,this.props.id,i,d),onKeyUp:B.bind(this,this.props.id,i,d)},O.review_movie))),y.dir?P.directorMeta(y.dir):null,null!=a&&a.hl?P.addMeta({name:"name",content:a.hl}):null,null!=a&&null!==(e=a.pwa_meta)&&void 0!==e&&e.redirectUrl?P.addMeta({name:"sameAs",content:a.pwa_meta.redirectUrl}):null,y.rd?P.addMeta({name:"dateCreated",content:y.rd}):null),y.cr?P.ratingMeta(y.cr):null,a.audetails&&!(0,c.an)()?P.author(a.audetails):null,"mobile"==process.env.PLATFORM?"tech"==j?n.createElement("div",{className:"table rating"},n.createElement("meta",{itemProp:"author",content:a.bl}),n.createElement("div",{className:"table_row"},n.createElement("span",{className:"table_col"},n.createElement("span",{className:"txt critic"},O.critics_rating),n.createElement("span",{className:"count"},0==y.cr||null==y.cr||"NaN"==y.cr?n.createElement("span",null,"NA",n.createElement("meta",{content:"1"})," "):n.createElement("span",null,n.createElement("b",null,y.cr),"/5"))),n.createElement("span",{className:"table_col"},n.createElement("span",{className:"txt users"},O.reader_rating),n.createElement("span",{className:"count"},y.ur&&"NaN"!=y.ur&&""!=y.ur?n.createElement("span",null,n.createElement("b",null,"NaN"==y.ur?"NA":y.ur),"/5"):"NA")))):n.createElement("div",{className:"table rating"},n.createElement("div",{className:"table_row"},n.createElement("span",{className:"table_col"},n.createElement("span",{className:"txt critic"},O.critics_rating),n.createElement("span",{className:"count"},0==y.cr||null==y.cr||"NaN"==y.cr?n.createElement("span",null,"NA"):n.createElement("span",null,n.createElement("b",null,y.cr),"/5"))),n.createElement("span",{className:"table_col"},n.createElement("span",{className:"txt users"},O.reader_rating),n.createElement("span",{className:"count"},y.ur&&"NaN"!=y.ur&&""!=y.ur?n.createElement("span",null,n.createElement("b",null,"NaN"==y.ur?"NA":y.ur),"/5"):"NA")))):null)):null,null==s||"user"==s||"moviereview"==s||"techreview"==s?n.createElement(I,{userratings:b,review:s,userrating:0==w?null:w,id:a.id,topfeature:a.topfeature&&""!=a.topfeature?a.topfeature:null,sharedata:i,cr:y.cr,ur:y.ur,pagetype:E,openCommentsPopup:d,_rating:p,this:this}):null))}}])&&E(a.prototype,s),Object.defineProperty(a,"prototype",{writable:!1}),t}(n.Component),I=function(e){var t=e.userratings,a=e.userrating,r=e.review,s=e.pagetype,c=e.openCommentsPopup;return n.createElement(n.Fragment,null,n.createElement("div",{className:"con_review_rate","data-exclude":"amp"},"user"==r?n.createElement(n.Fragment,null,n.createElement(T,{userratings:t,userrating:a,id:e.id,this:e.this}),n.createElement(A,{id:e.id,review:r,sharedata:e.sharedata,openCommentsPopup:c,_rating:e._rating,this:e.this}),n.createElement(S,{id:e.id,cr:e.cr,ur:e.ur,pagetype:e.pagetype,_rating:e._rating,this:e.this})):"techreview"==s?n.createElement(n.Fragment,null,n.createElement(A,{id:e.id,sharedata:e.sharedata,pagetype:s,_rating:e._rating,this:e.this}),n.createElement(S,{id:e.id,cr:e.cr,ur:e.ur,pagetype:s,_rating:e._rating,this:e.this}),n.createElement(T,{userratings:t,userrating:a,id:e.id,this:e.this})):n.createElement(n.Fragment,null,n.createElement(A,{id:e.id,sharedata:e.sharedata,_rating:e._rating,this:e.this}),n.createElement(S,{id:e.id,cr:e.cr,ur:e.ur,pagetype:e.pagetype,_rating:e._rating,this:e.this}))),e.topfeature&&""!=e.topfeature?n.createElement(M,{topfeature:e.topfeature}):null)},S=function(e){var t,a,r,s,c;return n.createElement("div",{className:"rateBox",id:"ratingbox_".concat(e.id)},"desktop"==process.env.PLATFORM?n.createElement(n.Fragment,null,function(e){return n.createElement(n.Fragment,null,n.createElement("div",{className:"rating"},n.createElement("h3",null,N.locale.critics_rating),n.createElement("div",{className:"star-and-value"},n.createElement("span",{className:"rating-stars"},n.createElement("span",{className:"empty-stars"}),e&&e.cr?n.createElement("span",{style:{width:"".concat(parseInt(20*e.cr),"%")},className:"filled-stars critic"}):null),n.createElement("span",{className:"ratespan"},e&&e.cr?e.cr:"NA",e&&e.cr?n.createElement("small",null,"/5"):null))),n.createElement("div",{className:"rating"},n.createElement("h3",null,N.locale.user_rating),n.createElement("div",{className:"star-and-value"},n.createElement("span",{className:"rating-stars"},n.createElement("span",{className:"empty-stars"}),e&&e.ur?n.createElement("span",{style:{width:"".concat(parseInt(20*e.ur),"%")},className:"filled-stars users"}):null),n.createElement("span",{className:"ratespan"},e&&e.ur?e.ur:"NA",e&&e.ur?n.createElement("small",null,"/5"):null))))}(e)):null,n.createElement("div",{className:"rate_con rating"},n.createElement("h3",null,O.rate_text?O.rate_text:O.slide_to_rate_movie),n.createElement("div",{className:"star-and-value"},n.createElement("span",{className:"rating-stars"},n.createElement("span",{className:"empty-stars"}),"desktop"==process.env.PLATFORM?(t=e.id,a=e.pagetype,r=e._rating,s=e.this,c=Array.from({length:10},(),n.createElement(n.Fragment,null,n.createElement("div",{className:"hover-stars"},c.map((function(e){return n.createElement("span",{onMouseOver:function(e){return function(e,t,a,n){if(!(document.querySelector(".hover-stars").classList.value.indexOf("disabled_".concat(a))>-1)){var r=t.currentTarget.getAttribute("value");if(r){r=Number(r);var s=document.getElementById("ratestar_".concat(a)),c=document.getElementById("ratespan_".concat(a));s.classList.value="",s.classList.add("w".concat(10*r)),s.classList.add("filled-stars"),s.classList.add("ratestar"),c.innerHTML=Number(.5*r)}e.setState({_rating:Number(.5*r)})}}(s,e,t)},onClick:function(e){return function(e,t,a,n,r){if(!(document.querySelector(".hover-stars").classList.value.indexOf("disabled_".concat(t))>-1)){var s=a.currentTarget.getAttrsibute("value");s&&(s=Number(s)),e.setState({_rating:Number(.5*s)}),n&&"movieshow"===n&&C(t,n,a,r)}}(s,t,e,a,r)},key:e,value:e}," ",.5*e," ")}))))):null,n.createElement("span",{className:"filled-stars ratestar w50",id:"ratestar_".concat(e.id)})),n.createElement("span",{className:"ratespan",id:"rating_".concat(e.id)},n.createElement("span",{id:"ratespan_".concat(e.id)},L),n.createElement("small",null,"/5"))),"mobile"==process.env.PLATFORM?n.createElement("input",{className:"rangeslider",type:"range",min:"0",max:"5",step:".5",id:"rateslider_".concat(e.id)}):null,n.createElement("button",{className:"btn-submit",id:"ratesubmit_".concat(e.id),onClick:,"Submit"),n.createElement("span",{id:"rating-status-".concat(e.id),className:"rating-status"},"")))},A=function(e,t,a,r,s){return n.createElement("div",{className:"tabs_circle"},"mobile"==process.env.PLATFORM||"techreview"==e.pagetype?n.createElement("ul",{className:"tabs_circle_list"},n.createElement("li",{onClick:B.bind(void 0,e.id,e.sharedata,r)},"techreview"!=e.pagetype?O.review_movie:O.review_device),n.createElement("li",{id:"rating_".concat(e.id),onClick:,"techreview"!=e.pagetype?O.rate_movie:O.rate,n.createElement("input",{className:"hide",type:"checkbox"}))):null,(0,c.G9)()?H(e.id):null)},M=function(e){return null!=e.topfeature["#text"]&&e.topfeature&&Array.isArray(e.topfeature["#text"])?n.createElement("div",{className:"top_features"},n.createElement("h3",null,N.locale.tech.topfeature),n.createElement("ul",null,e&&e.topfeature&&e.topfeature["#text"]&&Array.isArray(e.topfeature["#text"])?e.topfeature["#text"].map(():null)):null},T=function(e){var t,a=[];e.userratings&&e.userratings.ratings?a.push(e.userratings.ratings):e.userratings&&(a=t=e.userratings)||t)||t)||));var r,s=e.userrating,c=[],l=[],i=0,o={};c.length=5,a.map((function(e,t){r=e.rating/2-1,c[r]=e,i=parseInt(e.count)>i?e.count:i}));for(var u=4;u>=0;u--)o={width:c[u]?"".concat(parseInt(c[u].count)/parseInt(i)*100,"%"):"0%"},l.push(n.createElement("li",null,n.createElement("span",{className:"star_txt"},"".concat(u+1," ★ ")),n.createElement("span",{className:"star_bg"},n.createElement("span",{className:"star".concat(u+1),style:o},c[u]?c[u].count:"0"))));return n.createElement("div",{className:"rating-values",id:"rating-values".concat(e.id)},n.createElement("div",{className:"user_review"},s?n.createElement("div",{className:"rating"},n.createElement("span",null,s,n.createElement("sub",null,"/5"))):"Be the first one to review"),c?n.createElement("div",{className:"user_star"},n.createElement("ul",null,l)):null)},x=function(e){if(e=parseInt(e)){var t=e/60,a=Math.floor(t),r=60*(t-a),s=Math.round(r);return n.createElement("span",{className:"duration"},(0,c.an)()?"":n.createElement("b",null,"".concat(N.locale.duration,":")),"".concat(a," Hrs ").concat(s," Min"))}return null},R=function(e){var t=e.split(",");return n.createElement("div",{className:"cast text_ellipsis"},(0,c.an)()?"":n.createElement("b",null,"".concat(N.locale.actors,":")),n.createElement("div",{className:"items"},t.map((function(e,a){return n.createElement("span",{itemProp:"actor",itemScope:"itemScope",itemType:"https://schema.org/Person"},n.createElement("span",{itemProp:"name",key:a},e,t.length===a+1?"":","))}))))},B=function(e,t,a){if((0,c.an)()){var n=document.getElementById("comment_".concat(e));n&&n.click()}else a()},k=function(e,t,a){var n=document.getElementById("rating_".concat(e)),r=document.getElementById("rating-values".concat(e)),s=n.querySelector(".hide"),c=document.getElementById("ratingbox_".concat(e)),l=document.getElementById("rateslider_".concat(e)),i=document.getElementById("ratestar_".concat(e)),o=document.getElementById("ratespan_".concat(e)),u=document.getElementById("ratesubmit_".concat(e));document.querySelector(".empty-stars"),s&&(s.checked=!s.checked,s.checked?c.classList.add("visible"):c.classList.remove("visible"),s.checked?n.classList.add("active"):n.classList.remove("active"),r&&(s.checked?r.classList.add("visible"):r.classList.remove("visible"))),"mobile"==process.env.PLATFORM&&(l.oninput=function(e){L=parseFloat(e.target.value),e.target.style.background="linear-gradient(to right, #00b3ff 0%,#00b3ff ".concat(2*L*10,"%,#fff ").concat(2*L*10,"%, #fff 100%)"),i.classList.value="",i.classList.add("w".concat(2*L*10)),i.classList.add("filled-stars"),i.classList.add("ratestar"),o.innerHTML=L}),u&&(u.onchange=function(n){n.target.checked&&a>0&&C(e,t,n,a)})},C=function(e,t,a,n){var r,l=document.getElementById("rateslider_".concat(e)),o=document.getElementById("ratingbox_".concat(e)),u=document.getElementById("rating-status-".concat(e)),m=(document.getElementById("ratespan_".concat(e)).innerText,"techreview"==t?"".concat(N.mweburl,"/pwafeeds/sc_rategadget.cms?msid=").concat(e,"&getuserrating=1&criticrating=&vote="):"".concat(N.mweburl+("tech"==j?"/tech":""),"/off-url-forward/rate_moviereview.cms?msid=").concat(e,"&getuserrating=1&criticrating=")+"&vote="),d=n;"mobile"==process.env.PLATFORM&&(d=l.value),m+=2*Number(d),r=document.getElementById("ratespan_".concat(e)),window._user?(D("Rated",e,"",2*Number(d),""),(0,s.ZP)(m,{type:"jsonp"}).then((function(){if("undefined"!=typeof window){var t=[];"mobile"==process.env.PLATFORM&&(l.classList.add("rate-submit"),l.setAttribute("disabled_".concat(e),!0),l.style.pointerEvents="none"),window.sessionStorage.getItem("mr-ratings")&&(t=JSON.parse(window.sessionStorage.getItem("mr-ratings"))),t.push(e),window.sessionStorage.setItem("mr-ratings",JSON.stringify(t));var a=document.getElementById("ratesubmit_".concat(e));a&&(a.style.display="none");var n=document.querySelector(".hover-stars");n&&n.classList.add("disabled_".concat(e)),r.innerHTML="<b>".concat(d,"</b>"),u&&(u.innerHTML="Thank you for submitting rating!")}(0,c.an)()&&setTimeout((function(){document.getElementById("rating_".concat(e)).innerHTML="<span><b>".concat(d,"</b>/5</span>"),o.classList.remove("visible");var t=document.getElementById("rating_".concat(e));t.style.pointerEvents="none",t.classList.add("btn-rated")}),2e3)}),(function(){u?u.innerHTML="ERROR":o.innerHTML="ERROR"})).catch((function(){u?u.innerHTML="ERROR":o.innerHTML="ERROR"}))):(document&&document.addEventListener("user.status"}),!1),(0,i.e0)())},},H=function(e){(0,c.Fl)((function(t){var a;if(t.detail){var n="".concat(N.sso.MYTIMES_ALREADY_RATED).concat(N.sso.APP_KEY,"&userId=").concat(t.detail._id,"&baseEntityId=0&uniqueAppKey=").concat(e);(0,s.ZP)(n).then((function(t){if(t&&""!=t){var n=parseInt(t)/2;(a=document.getElementById("ratespan_".concat(e))).innerHTML="<b>".concat(n,"</b>"),a.style.pointerEvents="none",a.classList.add("btn-rated");var r=document.getElementById("ratesubmit_".concat(e));r&&(r.style.display="none");var s=document.querySelector(".hover-stars");s&&s.classList.add("disabled_".concat(e));var l=document.getElementById("rateslider_".concat(e));if(l&&(l.style.display="none"),(0,c.an)()){document.getElementById("rating_".concat(e)).innerHTML="<span><b>".concat(n,"</b>/5</span>"),document.getElementById("ratingbox_".concat(e)).classList.remove("visible");var i=document.getElementById("rating_".concat(e));i.style.pointerEvents="none",i.classList.add("btn-rated")}var o=document.getElementById("ratestar_".concat(e));o.classList.value="",o.classList.add("w".concat(2*n*10)),o.classList.add("filled-stars"),o.classList.add("ratestar")}}))}}))},D=function(e,t,a,n,r){if(null!=t&&null!=t){var s=arguments.length>5&&void 0!==arguments[5]&&arguments[5]||arguments.length>6&&void 0!==arguments[6]&&arguments[6]?"APP_KEY_TECH":"APP_KEY",c=N.sso.MYTIMES_ADD_ACTIVITY+N.sso[s];c="".concat(c,"&activityType=").concat(e),c="".concat(c,"&uniqueAppID=").concat(t),c+="&baseEntityType=MOVIEW_REVIEW",c="".concat(c+="&objectType=B","&url=").concat(window.location.href),null!=n&&null!=n&&""!=n&&"0"!=n&&(c="".concat(c,"&userrating=").concat(n)),null!=r&&null!=r&&""!=r&&(c="".concat(c,"&exCommentTxt=").concat(r)),null!=a&&null!=a&&""!=a&&(c="".concat(c,"&via=").concat(a)),new Image(1,1).src=c}};const q=P},"../node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[2].use[1]!../node_modules/css-loader/index.js??ruleSet[1].rules[2].use[2]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!../node_modules/postcss-loader/lib/index.js??ruleSet[1].rules[2].use[4]!./components/common/css/MovieReviewShowCard.scss},"./components/common/css/MovieReviewShowCard.scss":(e,t,a)=>{"use strict";a.d(t,{l});var n=a("../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=a.n(n),s=a("../node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[2].use[1]!../node_modules/css-loader/index.js??ruleSet[1].rules[2].use[2]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[3]!../node_modules/postcss-loader/lib/index.js??ruleSet[1].rules[2].use[4]!./components/common/css/MovieReviewShowCard.scss"),c=a.n(s);r()(c(),{insert:"head",singleton:!1});const l=c().locals||{}}}]);