(window["webpackJsonp"]=windb1":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section section--article is-longform"},[a("div",{staticClass:"container is-leftaligned"},[t.articleReady&&t.dataReady?a("div",{staticClass:"article_longform"},[a("div",{staticClass:"article_longform__head"},[a("figure",{staticClass:"article_longform__figure"},[a("app-image",{attrs:{"intersection-options":{rootMargin:"350px 0px 350px 0px"},src:t.articleData.image.url,crop:t.articleData.image.crop,w:540,h:450,alt:t.articleData.image.title,"class-name":"article__figure_img"}}),t.articleData.cover_image.author?a("figcaption",[t._v(" "+t._s(t.photoAuthor)+" ")]):t._e()],1),a("div",{staticClass:"article_longform__title_wrap"},[a("span",{staticClass:"article_longform__label",class:[{"article_longform__label--premium":t.articleData.is_premium},"has-background-"+t.articleSectionSlug]},[a("span",[t._v(t._s(t.articleData.label))]),t.articleData.is_premium?a("span",{staticClass:"article__label_premium"},[t._v(" Plus+ ")]):t._e()]),a("p",{staticClass:"article_longform__title"},[t._v(" "+t._s(t.articleData.title)+" ")]),a("div",{staticClass:"article_longform__info_wrap"},[a("ul",{staticClass:"article__authors_list"},t._l(t.articleData.authors,(function(e,i){return a("li",{key:e.id,staticClass:"article__authors_item"},[0===i?a("span",{staticClass:"article__authors_prefix"},[t._v("Piše ")]):t._e(),a("router-link",{staticClass:"article__authors_link",attrs:{to:{name:"Author",params:{slug:e.slug,id:e.id}}}},[t._v(t._s(e.name))])],1)})),0),a("span",{staticClass:"article__date"},[a("time",{staticClass:"article__time",attrs:{datetime:t.articleData.publish_date}},[t._v(" "+t._s(t.$_time_formatTime(t.articleData.publish_date,"dddd, D.M.YYYY. u H:mm"))+" ")])])]),a("p",{staticClass:"article_longform__lead_text"},[t._v(" "+t._s(t.articleData.lead_text)+" ")])])]),t.showArticleAds?a("div",{staticClass:"dfp_banner dfp_banner--rectangle_top"},[a("dfp-slot",{attrs:{unit:"24m_rectangle_1"}}),a("dfp-slot",{attrs:{unit:"24m_rectangle_1_premium"}})],1):t._e(),a("div",{staticClass:"columns is-desktop"},[a("div",{staticClass:"column"},[a("article",{staticClass:"article"},[t.articleData.native?a("div",{staticClass:"article_longform__sponsor_top"},[a("article-sponsor",{attrs:{"article-data":t.articleData,position:"longform-article"}})],1):t._e(),a("div",{staticClass:"article__body"},[a("div",{staticClass:"article__content_wrap is-clearfix",class:t.$_contentMaskClass},[t._l(t.groupedData,(function(e,i){return a("article-content",{key:i,attrs:{"article-id":t.articleData.id,"article-type":t.articleData.article_type,"article-data":t.articleData,"article-content":e,"galleries-data":t.articleData.galleries?t.articleData.galleries:[],"related-articles":t.articleData.related_articles,"x-related-articles":t.articleData.related_xinline_articles,"images-data":t.articleData.images,"videos-data":t.articleData.videos,"article-gallery-data":t.articleData.galleries?t.articleData.galleries[0]:{}}})})),t.articleData.is_locked?a("div",{staticClass:"piano_offer_inline",attrs:{id:"pianoOfferInline"}}):t._e()],2),t.articleData.native?a("div",{staticClass:"article_sponsor--bottom"},[a("article-sponsor",{attrs:{"article-data":t.articleData,position:"longform-article"}})],1):t._e(),t.displayAppPromoBlock?a(t.ArticleAppPromoBlock,{tag:"component"}):t._e(),t.articleData.keywords&&t.articleData.keywords.length?a("article-keywords",{attrs:{"keywords-data":t.articleData.keywords}}):t._e(),a("intersect",{on:{enter:function(e){t.engagementReachedBottom=!0},leave:function(e){t.engagementReachedBottom=!1}}},[a("div",{staticClass:"js_stickyShareStop sticky_stop"})]),a("engagement-bar",{attrs:{"page-url":t.articleData.link,"page-title":t.articleData.title,"page-lead":t.articleData.lead_text,"article-url":t.articleData.link,"item-id":t.articleData.id,"has-comments":t.articleData.comment_count>0,"card-comment-count":t.articleData.comment_count,"reached-bottom":t.engagementReachedBottom,page:"article","content-type":"article","total-reaction-count":t.articleData.total_reaction_count,"popular-reactions":t.articleData.reactions,"own-reaction":t.articleData.own_reaction,"hide-thread":!t.articleData.is_for_comment}})],1),t.shouldShowThreadTeaser?a("thread-teaser",{attrs:{"item-id":t.$_article_articleId,"item-comments-count":t.articleData.comment_count,"item-url":t.articleData.link||""+t.articleData.id,"popular-comments":t.articleData.popular_comments}}):t._e()],1),a("div",{staticClass:"article__extras_block"},[t.$_article_isInSpecialSection?t._e():[a("div",{staticClass:"article__recommender"},[a("card",{attrs:{data:t.cardMidasData(0,"video")}}),a("card",{attrs:{data:t.cardMidasData(0,"native")}}),a("card",{attrs:{data:t.cardMidasData(0,"tes")}}),a("card",{attrs:{data:t.cardMidasData(0,"pr")}})],1),t.showArticleAds?a("div",{staticClass:"dfp_banner dfp_banner--rectangle_bot"},[a("dfp-slot",{attrs:{unit:"24m_rectangle_3"}}),a("dfp-slot",{attrs:{unit:"24m_rectangle_3_premium"}})],1):t._e()],t.feedSectionArticles.length?[a("article-extra-folds-mobile",{attrs:{"article-data":t.articleData,"num-articles":t.numOfFeedArticles-t.feedSectionArticles.length,"article-feed-banners":t.articleFeedBanners,"article-in-special-section":t.$_article_isInSpecialSection}})]:t._e()],2)])])]):t._e()])])},r=[],s=a("13ea"),l=a.n(s),c=a("0e14"),n=a("dbc6"),o=a("cc39"),d=a("c400"),u=a("58f2"),h=a("f910"),_=a("b9d7"),m=a("dbde"),p=a("a7a8"),g=a("c990"),f={name:"ArticleLongformMobile",components:{ArticleContent:()=>a.e("chunk-314de286").then(a.bind(null,"49d7")),ArticleSponsor:()=>Promise.resolve().then(a.bind(null,"e935")),ArticleKeywords:h["a"],EngagementBar:_["default"],ThreadTeaser:m["default"],ArticleExtraFoldsMobile:p["a"],Card:()=>Promise.resolve().then(a.bind(null,"b4aa"))},mixins:[o["b"],d["g"],u["a"]],data(){return{articleContent:[],groupedData:[],chapters:[],galleryData:{},dataReady:!1,expandChapterList:!1,activeChapter:1,showChapterWidget:!1,engagementReachedBottom:!1}},computed:{articleBaseData(){return{articleUrl:this.articleData.link||""+this.articleData.id,articleSectionSlug:this.articleSectionSlug,articleLabel:this.articleData.label,articleTitle:this.articleData.title}},photoAuthor(){return"Foto: "+this.articleData.cover_image.author.name},articleFeedBanners(){return Object(g["e"])(this.articleData.article_type)},ArticleAppPromoBlock(){return()=>a.e("chunk-63955faa").then(a.bind(null,"b522"))}},watch:{articleBaseData:{handler(){localStorage.setItem("adata",JSON.stringify(this.articleBaseData))},deep:!0}},beforeMount(){this.$_article_isInSpecialSection||this.loadCardsMidas(["video","native","tes","pr"])},mounted(){this.checkLocalStorage(),this.getGalleryData(),this.chapterInView()},methods:{checkLocalStorage(){const t=localStorage.getItem("adata"),e=JSON.stringify(this.articleBaseData);t&&t===e||localStorage.setItem("adata",e)},getGalleryData(){l()(this.coverGallery)?this.groupData():n["b"].get("galleries/"+this.coverGallery.id).then(t=>{this.galleryData=Object(c["deserialize"])(t.data),this.galleryReady=!0,this.groupData()}).catch(()=>{})},groupData(){let t=[],e=!1,a=0,i=1;const r=this.articleContent.find(t=>"h1"===t.type);if(!r)return this.groupedData.push(this.articleContent),this.dataReady=!0,!1;this.articleContent.forEach(r=>{"h1"===r.type?(this.chapters.push(`${i}. ${r.element.replace(/<(|\/)h(\d)>/gi,"")}`),r.chapterId=i,i+=1,this.galleryData&&this.galleryData.items&&(r.image=this.galleryData.items.shift()),e||(t.length&&this.groupedData.push(t),e=!0),t=[],t.push(r),this.groupedData.push(t)):t.push(r),a+=1,a===this.articleContent.length&&(this.dataReady=!0)})},chapterInView(){const t={root:null,rootMargin:"0px",threshold:1};this.observer=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting?(this.activeChapter=Number(t.target.dataset.chapterId),this.showChapterWidget||(this.showChapterWidget=!0)):this.activeChapter===Number(t.target.dataset.chapterId)&&t.boundingClientRect.y>0&&(this.activeChapter-=1,0===this.activeChapter&&(this.showChapterWidget=!1),0===this.activeChapter&&this.expandChapterList&&(this.expandChapterList=!1))})},t),setTimeout(()=>{const t=window.document.querySelectorAll(".js_dossierChapter");t.forEach(t=>{this.observer.observe(t)})},500)}}},D=f,v=a("2877"),b=Object(v["a"])(D,i,r,!1,null,null,null);e["default"]=b.exports},1526:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section section--article is-longform"},[a("div",{staticClass:"container"},[t.articleReady&&t.dataReady?a("div",{staticClass:"article_longform"},[a("div",{staticClass:"article_longform__head"},[a("figure",{staticClass:"article_longform__figure"},[a("app-image",{attrs:{"intersection-options":{rootMargin:"350px 0px 350px 0px"},src:t.articleData.image.url,crop:t.articleData.image.crop,w:1680,h:560,alt:t.articleData.image.title,"class-name":"article__figure_img"}}),t.articleData.cover_image.author?a("figcaption",[t._v(" "+t._s(t.photoAuthor)+" ")]):t._e()],1),a("div",{staticClass:"article_longform__title_container"},[a("div",{staticClass:"article_longform__title_wrap"},[a("div",{staticClass:"article_longform__title_info"},[a("span",{staticClass:"article_longform__label",class:[{"article_longform__label--premium":t.articleData.is_premium},"has-background-"+t.articleSectionSlug]},[a("span",[t._v(t._s(t.articleData.label))]),t.articleData.is_premium?a("span",{staticClass:"article__label_premium"},[t._v(" Plus+ ")]):t._e()]),a("p",{staticClass:"article_longform__title"},[t._v(" "+t._s(t.articleData.title)+" ")]),a("div",{staticClass:"article_longform__info_wrap"},[a("ul",{staticClass:"article__authors_list"},t._l(t.articleData.authors,(function(e,i){return a("li",{key:e.id,staticClass:"article__authors_item"},[0===i?a("span",{staticClass:"article__authors_prefix"},[t._v("Piše ")]):t._e(),a("router-link",{staticClass:"article__authors_link",attrs:{to:{name:"Author",params:{slug:e.slug,id:e.id}}}},[t._v(t._s(e.name))])],1)})),0),a("span",{staticClass:"article__date"},[a("time",{staticClass:"article__time",attrs:{datetime:t.articleData.publish_date}},[t._v(" "+t._s(t.$_time_formatTime(t.articleData.publish_date,"dddd, D.M.YYYY. u H:mm"))+" ")])])]),a("p",{staticClass:"article_longform__lead_text"},[t._v(" "+t._s(t.articleData.lead_text)+" ")])])])])]),a("article",{staticClass:"article"},[a("div",{staticClass:"article__content_block"},[a("div",{staticClass:"columns is-justified-center"},[a("div",{staticClass:"column is-main"},[a("div",{staticClass:"article__content_container article__content_container--longform"},[t.articleData.native?a("div",{staticClass:"article_longform__sponsor_top"},[a("article-sponsor",{attrs:{"article-data":t.articleData,position:"longform-article"}})],1):t._e(),a("share-bar",{attrs:{"page-title":t.articleData.title,"page-url":t.articleData.link,"item-id":t.articleData.id,"item-comments-count":t.articleData.comment_count,"visible-thread":t.articleData.is_for_comment}}),a("div",{staticClass:"article__content_wrap is-clearfix",class:t.$_contentMaskClass},[a("intersect",{attrs:{threshold:[0]},on:{enter:function(e){t.engagementFadedOut=!1},leave:function(e){t.engagementFadedOut=!0}}},[a("div",{staticClass:"article__engagement_trigger"})]),t._l(t.groupedData,(function(e,i){return a("article-content",{key:i,attrs:{"article-id":t.articleData.id,"article-type":t.articleData.article_type,"article-data":t.articleData,"article-content":e,"galleries-data":t.articleData.galleries?t.articleData.galleries:[],"related-articles":t.articleData.related_articles,"x-related-articles":t.articleData.related_xinline_articles,"images-data":t.articleData.images,"videos-data":t.articleData.videos,"article-gallery-data":t.articleData.galleries?t.articleData.galleries[0]:{}}})})),t.articleData.is_locked?a("div",{staticClass:"piano_offer_inline",attrs:{id:"pianoOfferInline"}}):t._e()],2),t.articleData.native?a("div",{staticClass:"article_sponsor--bottom"},[a("article-sponsor",{attrs:{"article-data":t.articleData,position:"longform-article"}})],1):t._e(),t.articleData.keywords&&t.articleData.keywords.length?a("article-keywords",{attrs:{"keywords-data":t.articleData.keywords}}):t._e(),a("engagement-bar",{attrs:{"page-url":t.articleData.link,"page-title":t.articleData.title,"page-lead":t.articleData.lead_text,"article-url":t.articleData.link,"item-id":t.articleData.id,"has-comments":t.articleData.comment_count>0,"card-comment-count":t.articleData.comment_count,"reached-bottom":t.engagementReachedBottom,"is-faded-out":t.engagementFadedOut,page:"article","content-type":"article","total-reaction-count":t.articleData.total_reaction_count,"popular-reactions":t.articleData.reactions,"own-reaction":t.articleData.own_reaction,"hide-thread":!t.articleData.is_for_comment}}),a("intersect",{on:{enter:function(e){t.engagementReachedBottom=!0},leave:function(e){t.engagementReachedBottom=!1}}},[a("div",{staticClass:"js_stickyShareStop sticky_stop"})]),t.shouldShowThreadTeaser?a("thread-teaser",{attrs:{"item-id":t.$_article_articleId,"item-comments-count":t.articleData.comment_count,"item-url":t.articleData.link||""+t.articleData.id,"popular-comments":t.articleData.popular_comments}}):t._e()],1)]),a("div",{staticClass:"column is-sidebar"},[t.showArticleAds?a("div",{staticClass:"dfp_banner dfp_banner--halfpage_1 has-text-centered"},[a("dfp-slot",{attrs:{unit:"24_halfpage_1"}}),a("dfp-slot",{attrs:{unit:"24_halfpage_1_premium"}})],1):t._e()])])]),a("div",{staticClass:"article__extras"},[a("div",{staticClass:"article__extras_block"},[a("div",{staticClass:"columns is-justified-center"},[a("div",{staticClass:"column is-main"},[a("div",{staticClass:"article__extras_wrap"},[t.showArticleAds?a("div",{staticClass:"dfp_banner dfp_banner--rectangle_bot"},[a("dfp-slot",{attrs:{unit:"24_rectangle_2"}})],1):t._e(),a("div",{staticClass:"article__more_from_section",class:{"has-disabled-comments":!t.articleData.is_for_comment}},[t.feedSectionArticles.length?[t._l(t.feedSectionArticles,(function(t){return[a("card",{key:t.id,attrs:{data:t}})]}))]:t._e()],2)]),t.showArticleAds?a("div",{staticClass:"dfp_banner dfp_banner--rectangle_before_feed"},[a("dfp-slot",{attrs:{unit:"24_rectangle_2"}})],1):t._e()]),a("div",{ref:"sticky_sidebar_control",staticClass:"column is-sidebar has-sidebar-cards"},[a("div",{staticClass:"is-sticky"},[a("card",{attrs:{data:t.cardMidasData(0,"tes")}}),a("card",{attrs:{data:t.cardMidasData(0,"pr")}}),a("card",{attrs:{data:t.cardMidasData(0,"native")}}),t.showArticleAds?a("div",{staticClass:"dfp_banner dfp_banner--halfpage_2 has-text-centered"},[a("div",{staticClass:"is-sticky"},[a("dfp-slot",{attrs:{unit:"24_halfpage_2"}})],1)]):t._e()],1)])])])])]),t.feedSectionArticles.length?[a("article-extra-folds-desktop",{attrs:{"article-data":t.articleData,"num-articles":t.numOfFeedArticles-t.feedSectionArticles.length,"article-in-special-section":t.$_article_isInSpecialSection}})]:t._e()],2):t._e()])])},r=[],s=a("13ea"),l=a.n(s),c=a("0e14"),n=a("dbc6"),o=a("3b01"),d=a("cc39"),u=a("c400"),h=a("58f2"),_=a("f910"),m=a("b9d7"),p=a("dbde"),g=a("6b59"),f=a("54f3"),D={name:"ArticleLongformDesktop",components:{ArticleContent:()=>Promise.all([a.e("vendors-async"),a.e("chunk-314de286")]).then(a.bind(null,"49d7")),ArticleSponsor:()=>Promise.resolve().then(a.bind(null,"e935")),ArticleKeywords:_["a"],EngagementBar:m["default"],ThreadTeaser:p["default"],ArticleExtraFoldsDesktop:g["a"],ShareBar:f["a"]},mixins:[d["b"],u["g"],o["a"],h["a"]],data(){return{articleContent:[],groupedData:[],chapters:[],galleryData:{},dataReady:!1,engagementReachedBottom:!1,engagementFadedOut:!0}},computed:{articleBaseData(){return{articleUrl:this.articleData.link||""+this.articleData.id,articleSectionSlug:this.articleSectionSlug,articleLabel:this.articleData.label,articleTitle:this.articleData.title}},photoAuthor(){return"Foto: "+this.articleData.cover_image.author.name}},watch:{articleBaseData:{handler(){localStorage.setItem("adata",JSON.stringify(this.articleBaseData))},deep:!0}},beforeMount(){this.loadCardsMidas(["tes","pr","native"])},mounted(){const t=document.querySelector(".site_wrap");"longform"===this.articleData.article_type&&t.classList.add("is-full-width"),this.checkLocalStorage(),this.getGalleryData(),this.dataReady=!0,setTimeout(()=>{this.sidebarRails()},0)},methods:{sidebarRails(){this.sidebarRef=this.$refs.sticky_sidebar_control;const t=this.sidebarRef.getElementsByTagName("div")[0],e=this.getSetting("halfpage_sticky_article").value;t.classList.contains("is-sticky")&&0!==e&&this.observeSidebarHeight(t)},observeSidebarHeight(t){this.resizeObserver=new ResizeObserver(this.setSidebarRails),this.resizeObserver.observe(t)},setSidebarRails(){const t=this.getSetting("halfpage_sticky_article").value,e=this.sidebarRef.querySelector(".is-sticky").clientHeight,a=e+t;this.sidebarRef.previousElementSibling.clientHeight>=a?this.sidebarRef.style.height=a+"px":this.sidebarRef.removeAttribute("style")},checkLocalStorage(){const t=localStorage.getItem("adata"),e=JSON.stringify(this.articleBaseData);t&&t===e||localStorage.setItem("adata",e)},getGalleryData(){l()(this.coverGallery)?this.groupData():n["b"].get("galleries/"+this.coverGallery.id).then(t=>{this.galleryData=Object(c["deserialize"])(t.data),this.galleryReady=!0,this.groupData()}).catch(()=>{})},groupData(){let t=[],e=!1,a=0,i=1;const r=this.articleContent.find(t=>"h1"===t.type);if(!r)return this.groupedData.push(this.articleContent),this.dataReady=!0,!1;this.articleContent.forEach(r=>{"h1"===r.type?(this.chapters.push(`${i}. ${r.element.replace(/<(|\/)h(\d)>/gi,"")}`),r.chapterId=i,i+=1,this.galleryData&&this.galleryData.items&&(r.image=this.galleryData.items.shift()),e||(t.length&&this.groupedData.push(t),e=!0),t=[],t.push(r),this.groupedData.push(t)):t.push(r),a+=1,a===this.articleContent.length&&(this.dataReady=!0)})}}},v=D,b=a("2877"),y=Object(b["a"])(v,i,r,!1,null,null,null);e["default"]=y.exports},"1fe6":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section section--standalone_video"},[a("article",{staticClass:"article"},[a("div",{staticClass:"block block--article_header"},[a("div",{staticClass:"column is-auto"},[a("div",{staticClass:"article_head"},[a("article-header",{attrs:{"article-id":t.articleData.id,"article-data":t.articleData,"article-type":t.articleData.article_type,"article-section-slug":t.articleSectionSlug}})],1),a("div",{staticClass:"article__body"},[a("p",{staticClass:"article__lead_text"},[t._v(" "+t._s(t.articleData.lead_text)+" ")]),a("div",{staticClass:"article__main"},[a("intersect",{attrs:{threshold:[.5]},on:{enter:function(e){t.videoInView=!0,t.changeUrl(t.articleData)},leave:function(e){t.videoInView=!1}}},[a("div",{staticClass:"article__engagement_trigger"})]),a("share-bar",{attrs:{"page-title":t.articleData.title,"page-url":t.articleData.link,"item-id":t.articleData.id,"item-comments-count":t.articleData.comment_count,"visible-thread":t.articleData.is_for_comment}}),t.articleData.is_locked&&!t.hasCoverGallery?[a("article-faux-cover",{attrs:{"article-type":t.articleData.article_type,"cover-data":t.articleData.cover_image}}),a("div",{staticClass:"piano_offer_inline piano_offer_inline--video_article",attrs:{id:"pianoOfferInline"}})]:t._e(),t.videoData&&t.videoData.video?a("div",{staticClass:"gallery__block"},[a("div",{staticClass:"article_video__video_wrap",class:[{"is-1by1 is-absolute":t.showInPlaceholder&&t.isMob&&!t.jwplayerEmbed},{"is-3by2 is-absolute":t.showInPlaceholder&&!t.isMob&&!t.jwplayerEmbed},t.isHorizontal?"is-horizontal":"is-vertical"],style:t.wrapStyle(t.jwplayerEmbed)},["upload"===t.videoData.video.provider?a("video-player",{ref:"videoPlayer_"+t.videoData.video.id,attrs:{options:t.videoOptions,"article-data":t.$_video_getArticleData(t.articleData.section,t.articleData.subsection,t.articleData.id,t.articleData.keywords),"poster-w":t.coverW,"poster-h":t.coverH,"show-ads":t.showArticleAds,"video-origin":"article"}}):t.jwplayerEmbed?a(t.VideoPlayerJW,{tag:"component",attrs:{"content-object":t.videoData.video,"show-ads":t.showArticleAds,"article-data":t.$_video_getArticleData(t.articleData.section,t.articleData.subsection,t.articleData.id,t.articleData.keywords),"video-id":t.videoData.video.id,"article-id":t.articleData.id}}):a("div",{staticClass:"article_video__photo_wrap"},[a("v-photo",{staticClass:"article_video__video_fallback_image",attrs:{"intersection-options":{rootMargin:"350px 0px 350px 0px"},src:t.videoPoster,alt:t.articleData.title,"use-picture":!0}}),a("div",{staticClass:"article_video__photo_icon"},[a("app-icon",{attrs:{"icon-name":"icon-play-60px"}})],1)],1)],1),t.showDescription?a("div",{staticClass:"article_video__metadata"},[t.videoData.video.description?[t._v(" "+t._s(t.videoData.video.description)+" ")]:t._e(),t.videoData.video.author&&t.videoData.video.author.name?a("span",{staticClass:"article_video__author"},[t.videoData.video.description?[t._v("|")]:t._e(),t._v(" Video: "+t._s(t.videoData.video.author.name)+" ")],2):t._e()],2):t._e()]):t._e(),a("article-content",{attrs:{"article-data":t.articleData,"article-id":t.articleData.id,"article-type":t.articleData.article_type,"article-content":t.articleContent,"article-section":t.$_article_returnSectionSlug(t.articleData.section),"article-subsection":t.$_article_returnSectionSlug(t.articleData.subsection),"article-keywords":t.articleData.keywords,"galleries-data":t.articleData.galleries,"x-related-articles":t.articleData.related_xinline_articles,"images-data":t.articleData.images,"videos-data":t.articleData.videos,"extra-content":t.articleData.extra_contents}})],2),t.articleData.keywords&&t.articleData.keywords.length?a("article-keywords",{attrs:{"keywords-data":t.articleData.keywords,"keywords-type":"videoArticle"}}):t._e()],1),a("engagement-bar",{attrs:{"article-url":t.articleData.link,"item-id":t.articleData.id,"page-url":t.articleData.link,"page-title":t.articleData.title,"page-lead":t.articleData.lead_text,"has-comments":t.articleData.comment_count>0,"card-comment-count":t.articleData.comment_count,page:"article","content-type":"article","total-reaction-count":t.articleData.total_reaction_count,"popular-reactions":t.articleData.reactions,"own-reaction":t.articleData.own_reaction,"hide-thread":!t.articleData.is_for_comment}})],1)]),a("div",{staticClass:"article__extras_block"},[t.feedSectionArticles.length?[a("div",{staticClass:"column is-auto"},[t._l(t.feedSectionArticles,(function(t){return[a("card",{key:t.id,attrs:{data:t,"card-type":"CardStandaloneVideo"}})]}))],2)]:t._e()],2),t.feedSectionArticles.length?a("div",{staticClass:"article__extras_block"},[a("article-extra-folds-desktop",{attrs:{"article-data":t.articleData,"num-articles":t.numOfFeedArticles-t.feedSectionArticles.length,"article-in-special-section":t.$_article_isInSpecialSection}})],1):t._e()])])},r=[],s=a("0e14"),l=a("3b01"),c=a("cc39"),n=a("dbc6"),o=a("6b59"),d=a("4a67"),u=a("f910"),h=a("b9d7"),_=a("54f3"),m=a("584f"),p=a("0d1b"),g=a("5125"),f=a("c400"),D={name:"ArticleVideoDesktop",components:{ArticleExtraFoldsDesktop:o["a"],ArticleHeader:d["a"],ArticleKeywords:u["a"],EngagementBar:h["default"],ShareBar:_["a"],ArticleFauxCover:m["a"],ArticleContent:()=>Promise.all([a.e("vendors-async"),a.e("chunk-314de286")]).then(a.bind(null,"49d7")),VideoPlayer:()=>a.e("chunk-077a90f4").then(a.bind(null,"d143"))},mixins:[c["b"],l["a"],p["a"],g["a"]],data(){return{galleryData:[],galleryReady:!1}},computed:{showDescription(){return this.videoData&&this.videoData.video&&(this.videoData.video.description||this.videoData.video.author)},videoPoster(){const t=this.videoData.video.cover_image?this.videoData.video.cover_image.url:"";return this.articleData.image?this.articleData.image.url:t},videoOptions(){const t=!this.showInPlaceholder;return{language:"hr",playsInline:!0,controls:!0,sources:[{type:"video/mp4",src:this.videoData.video.url}],preload:"auto",poster:this.videoPoster,fluid:t}},VideoPlayerJW(){return()=>a.e("chunk-4a293c9a").then(a.bind(null,"b656"))},jwplayerEmbed(){const t=this.videoData.video.provider;return t.includes("jwplayer")}},mounted(){this.coverGallery&&this.coverGallery.id?this.getGalleryData(this.coverGallery.id):this.galleryReady=!0},methods:{getGalleryData(t){const e=Object(f["e"])("gallerysData");e?this.setGalleryData(e.data):n["b"].get("galleries/"+t).then(t=>{const e=Object(s["deserialize"])(t.data);this.galleryData=e,this.galleryData&&this.galleryData.items.length&&(this.videoData=this.galleryData.items.find(t=>"video"===t.content_type),this.checkVideoSize(this.videoData.video)),this.galleryReady=!0}).catch(()=>{})}}},v=D,b=a("2877"),y=Object(b["a"])(v,i,r,!1,null,null,null);e["default"]=y.exports},"3b01":function(t,e,a){"use strict";a.d(e,"b",(function(){return m})),a.d(e,"c",(function(){return p})),a.d(e,"a",(function(){return g}));var i=a("00e7"),r=a.n(i),s=a("2f62"),l=a("0e14"),c=a("dbc6"),n=a("cc39"),o=a("4272"),d=a("b4aa");let u=()=>{};function h(t=!1){t&&(u=console.log.bind(console))}const _=23,m={methods:{...Object(s["b"])("pieces",["setPiecesData"]),getPiecesParentSection(){const t=this.$route.params.subsection;c["b"].get("sections/"+t).then(t=>{const e=Object(l["deserialize"])(t.data),a=e.parent?e.parent.slug:e.slug;this.collectPieces(a)})},collectPieces(t){this.setPiecesData(t).then(()=>{const e=this.piecesData.filter(t=>t.piece_type&&"top_pokloni"===t.piece_type.code),a=e.find(t=>t.pieces.length);if(a)this.topPiecesReady=!0;else{if("homepage"===t)return;this.collectPieces("homepage")}})}}},p={data(){return{isInViewport:!1}},methods:{setIsInViewport(){this.isInViewport=!0}}},g={components:{Card:d["default"]},props:{data:[Object,String],type:String,extra:[String,Number],parentSection:[Object,String],feedIndex:{type:Number,required:!1,default:0},articleFeedBanners:{type:Boolean,default:!0},articleInSpecialSection:{type:Boolean,default:!1},articleType:{type:String,default:""},excludeCommercialElements:{type:Boolean,default:!1}},mixins:[n["a"]],data(){return{cards:[],cardsOffset:0,cardsCount:1,feedReady:!1,showAds:!1,firstCall:!0,sidebarRef:null,resizeObserver:null,cardChunks:{},isTopGiftsHWidgetDisplayed:!1}},async serverPrefetch(){return await this.setupBlocks(),"manual"===this.blockType?(this.feedReady=!0,!0):!!this.data&&(this.cards=[...this.data.cards||this.data.feed_cards],this.feedReady=!0,!0)},async mounted(){const t=JSON.parse(r.a.get("devmode"));if(h(!!t&&t.targeting),await this.setupBlocks(),!this.data)return!1;this.cards=[...this.data.cards||this.data.feed_cards]},updated(){"manual"!==this.blockType||this.isBlockShown(this.data.code)||this.$nextTick(()=>{this.setBlockShown(this.data.code)})},computed:{...Object(s["c"])(["isLoadBelowTheFoldDone"]),...Object(s["c"])("ads",["getAdsReady","showArticleAds"]),...Object(s["c"])("user",["isAuthenticated"]),...Object(s["c"])(["getSettings","getSetting","getReadyBlocks","getShownBlocks","isBlockShown","isBlockReady","isMob"]),manualBlocksReady(){if(this.parentSection)return!0;const t=Object.keys(this.getShownBlocks).length,e=Object.keys(this.getReadyBlocks).length;if(1===e){const a=Object.keys(this.getReadyBlocks)[0],i=this.isBlockReady(a);return!!i&&(t&&t===e)}return e<=3?t&&t===e:t&&t-e>=-1},feedTypeParam(){const t={f:"flavours",c:"chronological"},e=this.$router.history.current.query.o;return t[e]?"feed_type="+t[e]:""},stickyWrapperClass(){return"Home"===this.$route.name?"sticky_rails":"is-flex-auto"},blockType(){let t="manual";return this.data&&this.data.template&&this.data.template.code?this.data.template&&this.data.template.code.toLowerCase().includes("auto")?t="auto":this.data.id.toLowerCase().includes("midas")&&(t="midas"):t="articleFeed",t}},beforeDestroy(){this.resizeObserver&&this.resizeObserver.disconnect()},watch:{cardChunks(t){const{lastUpdated:e,...a}=t;Object.values(a).every(t=>t.isReady)&&this.triggerBlockShown()},getReadyBlocks(){if("manual"===this.blockType){const t=!this.data.previousBlockCode||this.isBlockShown(this.data.previousBlockCode);t&&!this.feedReady&&this.triggerBlockShown()}}},methods:{...Object(s["b"])(["setBlockReady","setBlockShown"]),triggerBlockShown(){this.feedReady=!0},async setupBlocks(){this.setAds(),this.$store.watch(()=>this.getAdsReady,t=>{const e="request_by_blocks"===this.$doubleclick.requestType;!e&&t&&this.firstCall&&this.setAds()}),"manual"===this.blockType&&(this.setBlockReady({blockKey:this.data.code,isReady:!1}),this.cardsOffset=this.data.cardsOffset,this.cardsCount=this.data.cardsCount,this.loadBlockCards())},setAds(){u(`Block ${this.$options.name} setAds - adsReady: `,this.getAdsReady,"requestType: ",this.getAdsReady?this.$doubleclick.requestType:"ads not ready"),this.getAdsReady&&(this.showAds=!this.isLoadBelowTheFoldDone)},onScreenEnter(t=!1){u("onEnterScreen event, block:",this.$options.name),this.setAds(),this.showAds=!0,t?this.loadArticleFeedCards():"auto"===this.blockType&&this.loadAutoCards()},async loadArticleFeedCards(){const t=this.$route.params.id,e=this.data.cardOffset,a=this.cards.length;return this.cards=await this.getArticleFeed(t,e,a),this.feedReady=!0,!0},getFeedPath(t="manual"){const e=this.$route.query.preview_id&&"manual"===t?"/preview":"",a=this.$route.params.section?this.$route.params.section:this.$route.params.subsection,i="manual"===t?"section/section/"+a:a;return a?`feed/${t}/${i}${e}`:`feed/${t}/homepage${e}`},getFeedFullUrl(t,e=0,a=10){const i=o["a"];return`${t}?${i}&offset=${e}&limit=${a}`},getDeserializedCardsData(t,e,a){const i={data:t,included:e};return i.data.map(t=>Object(o["b"])(t)),a.data.included&&i.included&&(i.data=Object(o["g"])(i.data,a.data),i.included=i.included.concat(a.data.included)),Object(l["deserialize"])(i).flat()},getChunkKey(t,e=null){return e?`offset${t}&limit${e}`:`offset${t}&limit`},updateCardChunks(t,e,a){this.cardChunks[t].cards=this.getDeserializedCardsData(e.data.data,e.data.included,a),this.cardChunks[t].isReady=!0,this.cardChunks={...this.cardChunks,lastUpdated:t}},handleChunkedDataBlock(t,e){t.promiseData.forEach((a,i)=>{this.cardChunks[this.getChunkKey(a.params.offset,a.params.limit)]={isReady:!1,promise:a.promise.then(a=>{const{limit:r,offset:s}=a.data.meta.pagination,l=this.getChunkKey(s,r);this.updateCardChunks(l,a,e),t.promiseData.length-1===i&&this.setBlockReady({blockKey:this.data.code,isReady:!0})})}})},async handleDataBlock(t,e){let{promiseData:a}=t;t.isChunked&&(a=a.map(t=>t.promise));const i=await Promise.all(a),r=i.map(t=>t.data.data),s=i.map(t=>t.data.included?t.data.included:[]);return this.cards=this.getDeserializedCardsData(r.flat(),s.flat(),e),this.setBlockReady({blockKey:this.data.code,isReady:!0}),!0},async loadBlockCards(){const t=this.getCardsData(this.cardsOffset,this.cardsCount),e=await this.getBlockOwnReactions(this.cardsOffset,this.cardsCount);return this.isMob&&t.isChunked?this.handleChunkedDataBlock(t,e):await this.handleDataBlock(t,e),!0},generateChunkParams(t,e){const a=10;let i=e,r=t,s=[];while(i>a)i-=a,s.push(a);return s.push(i),s=s.reverse(),s.map(t=>{const e={offset:r,limit:t};return r+=t,e})},getCardsData(t,e){const a=this.getFeedPath(this.blockType),i=10;let r,s=!1;if(e>i||this.isMob){const i=e>_||this.isMob?_:e,l=this.generateChunkParams(t,i);e>_&&l.push({offset:_,limit:e-i}),r=l.map(t=>{const e=this.getFeedFullUrl(a,t.offset,t.limit);return{promise:c["b"].get(e),params:t}}),s=!0}else{const i=this.getFeedFullUrl(a,t,e),s=c["b"].get(i);r=[s]}return{promiseData:r,isChunked:s}},async loadAutoCards(){if(this.cardsReady)return;const t=this.cards&&this.cards.length&&this.cards[0],e=this.feed_cards&&this.feed_cards.length&&this.feed_cards[0];if(t||e)return this.cardsReady=!0,void(this.feedReady=!0);const a=this.getAutoCards(this.data.card_offset,this.cards.length),i=this.getBlockOwnReactions(this.data.card_offset,this.cards.length),r=await Promise.all(a),s=await i,c=s.data,n=[];return r.forEach(t=>{t.data.data=t.data.data.map(t=>Object(o["b"])(t)),c.included&&t.data.included&&(t.data.data=Object(o["g"])(t.data.data,c),t.data.included=t.data.included.concat(c.included)),n.push(Object(l["deserialize"])(t.data))}),this.cards=n.flat(),this.feedReady=!0,!0},getAutoCards(t,e){const a=[],i=this.getFeedPath("auto");let r,s=parseInt(t,10)||0,l=0,n=0;while(l<e)n=e-l>=10?10:e-l,r=this.getFeedFullUrl(i,s,n),a.push(c["b"].get(r)),s+=n,l+=n;return a},async getBlockOwnReactions(t,e){const a=parseInt(t,10)||0;let i=this.main&&this.main.section&&"homepage"!==this.main.section?this.main.section:"";return i=this.main&&"special"===this.main.cont_type?this.main.canonicalUrl.replace("/",""):i,i=i.includes("?")?i.split("?")[0]:i,"manual"===this.blockType?Object(o["c"])(i,a,e,"manual"):"auto"===this.blockType?Object(o["c"])(i,a,e,"auto"):void 0},cardChunk(t,e=null){if(e)return this.cardChunks[this.getChunkKey(t,e)];const a=Object.keys(this.cardChunks),i=a.filter(e=>e.includes(this.getChunkKey(t)))[0];return this.cardChunks[i]},isCardChunkReady(t,e=null){const a=e?this.cardChunk(t,e):this.cardChunk(t);return a&&a.isReady},cardData(t){return this.cards[t]},sidebarRails(t){if(!t)return;this.sidebarRef=t;const e=this.sidebarRef.querySelector(".is-sticky");e&&this.observeSidebarHeight(e)},observeSidebarHeight(t){this.resizeObserver=new ResizeObserver(this.setSidebarRails),this.resizeObserver.observe(t)},setSidebarRails(){const t=this.getSetting("halfpage_sticky_homepage").value,e=this.sidebarRef.querySelector(".is-sticky").clientHeight,a=e+t,i=this.sidebarRef.querySelectorAll(".sidebar_inner > *"),r=this.sidebarRef.querySelector(".sticky_rails");let s=0;i.forEach(t=>{t.classList.contains("sticky_rails")||(s+=t.clientHeight)}),this.sidebarRef.clientHeight>=s+a?(r.style.height=a+"px",r.classList.remove("is-flex-auto")):(r.removeAttribute("style"),r.classList.add("is-flex-auto"))}}}},4690:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var i=a("2f62"),r=a("9086"),s=a("3a18");const l={mixins:[r["b"]],props:{articleData:{type:Object,required:!0},numArticles:{type:Number,required:!0},feedSectionArticles:{type:Array}},data(){return{loadOtherFeeds:!1,otherFeedsArticle:[]}},computed:{...Object(i["c"])(["isMob"])},created(){this.getFeedBlocks()},methods:{getBlockType(t){const e=["Block23"].includes(t)?"Home":"";return`${t}${e}`},isSectionSpecial(){const t=this.articleData.sections;return t.find(t=>!0===t.is_special)},getFeedBlocks(){const t=this.isSectionSpecial(),e=[...Array(this.numArticles).keys()].map(()=>{});let a="article";t&&(a="articleSpecial");const i=this.isMob?"Mobile":"Desktop";Object(s["a"])(e,a,i).then(t=>{this.otherFeedsArticle=Object.freeze(t),this.loadOtherFeeds=!0})}}}},"4a67":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.articleData&&t.articleType&&t.articleId?a("header",{staticClass:"article__header",class:t.columnHeaderClass()},[a("div",{staticClass:"article__header_wrap is-clearfix"},["pr"===t.articleType?a("span",{staticClass:"article__label",class:"has-background-column"},[t._v(" Promo ")]):t.articleData.label?a("span",{staticClass:"article__label",class:[{"article__label--premium":t.articleData.is_premium},"has-background-"+(t.articleSectionSlug||"defaultlabel")]},[a("span",[t._v(t._s(t.articleData.label))]),t.articleData.is_premium?a("span",{staticClass:"article__label_premium"},[t._v(" Plus+ ")]):t._e()]):t._e(),"column"===t.articleData.article_type?a("article-authors",{attrs:{"authors-data":t.articleData.authors,"is-article-column":!0}}):t._e(),["Thread","ThreadReply"].includes(t.$route.name)?[a("router-link",{staticClass:"article__title is-link",attrs:{to:{name:"ArticleCustom",params:{section:t.articleData.section&&t.articleData.section.slug||null,slug:t.articleData.slug,id:t.articleData.id}}}},[t._v(" "+t._s(t.articleData.title)+" ")])]:a("h1",{staticClass:"article__title"},[t._v(" "+t._s(t.articleData.title)+" ")]),!["flashcard","video"].includes(t.articleData.article_type)||["Thread","ThreadReply","ThreadPiece","ThreadPieceReply"].includes(t.$route.name)?a("div",{staticClass:"article__info_wrap"},["column"!==t.articleData.article_type?a("article-authors",{attrs:{"authors-data":t.articleData.authors,"is-article-pr":"pr"===t.articleData.article_type,"article-publish-date":"live"===t.articleData.article_type?t.articleData.modified_date:t.articleData.publish_date}}):t._e(),"column"===t.articleData.article_type?a("span",{staticClass:"article__date"},[a("time",{staticClass:"article__time",attrs:{datetime:t.articleData.publish_date}},[t._v(" "+t._s(t.$_time_formatTime(t.articleData.publish_date,"dddd, D.M.YYYY. u H:mm"))+" ")])]):t._e()],1):t._e(),"native"===t.articleData.article_type&&t.articleData.native?a("article-sponsor",{attrs:{"article-data":t.articleData,position:"article-header"}}):t._e()],2)]):t._e()},r=[],s=a("2f62"),l=a("c400"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article__authors",class:{"is-columnist":t.isArticleColumn}},[a("span",{staticClass:"article__authors_list"},[t._l(t.authorsData,(function(e,i){return a("span",{key:i,staticClass:"article__authors_item"},[0===i?[t.isArticleColumn?[t._v(" Komentira ")]:t.isArticlePr?t._e():[t._v(" Piše ")]]:t._e(),t.isArticlePr?a("span",[t._v(t._s(e.name))]):a("router-link",{staticClass:"article__authors_link",class:{"is-column":t.isArticleColumn},attrs:{to:{name:"Author",params:{slug:e.slug,id:e.id}}}},[t._v(t._s(e.name))])],2)})),t.isArticleColumn?t._e():a("span",{staticClass:"article__date"},[a("time",{staticClass:"article__time",attrs:{datetime:t.articlePublishDate}},[t._v(" "+t._s(t.$_time_formatTime(t.articlePublishDate,"dddd, D.M.YYYY. u H:mm"))+" ")])])],2),t.isArticleColumn&&t.authorsData[0].image?a("figure",{staticClass:"article__authors_figure"},[a("app-image",{attrs:{"intersection-options":{rootMargin:"350px 0px 350px 0px"},src:t.authorsData[0].image.url,w:140,h:140,alt:t.authorsData[0].image.title}})],1):t._e()])},n=[],o={name:"ArticleAuthors",mixins:[l["g"]],props:{authorsData:{type:Array,default:()=>[]},isArticleColumn:{type:Boolean,required:!1},isArticlePr:{type:Boolean,required:!1},articlePublishDate:{type:String,default:null}}},d=o,u=a("2877"),h=Object(u["a"])(d,c,n,!1,null,null,null),_=h.exports,m=a("e935"),p={name:"ArticleHeader",components:{ArticleAuthors:_,ArticleSponsor:m["default"]},mixins:[l["g"]],props:{articleId:{type:String,required:!0},articleData:{type:Object,required:!0},articleType:{type:String,default:"article"},articleSectionSlug:{type:String,default:""}},computed:{...Object(s["c"])("user",["isAuthenticated","token"])},methods:{columnHeaderClass(){if("column"===this.articleType)return"article__header--column"}}},g=p,f=Object(u["a"])(g,i,r,!1,null,null,null);e["a"]=f.exports},"4d2a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section section--article"},[a("article",{staticClass:"article"},[a("div",{staticClass:"article__header_block columns is-justified-center"},[a("div",{staticClass:"column is-main"},[a("div",{staticClass:"article_head"},[a("article-header",{attrs:{"article-id":t.articleData.id,"article-data":t.articleData,"article-type":t.articleData.article_type,"article-section-slug":t.articleSectionSlug}})],1),a("div",{staticClass:"article__body"},[!t.articleData.image&&t.hasCoverGallery?a("article-cover-video",{attrs:{"article-gallery-data":t.coverGallery,"article-data":t.articleData}}):"gallery"===t.articleData.article_type||t.hasCoverGallery?a("article-cover-gallery",{attrs:{"article-data":t.articleData,"article-gallery-data":t.coverGallery}}):a("article-cover-photo",{attrs:{"article-image-data":t.articleImage}}),a("p",{staticClass:"article__lead_text"},[t._v(" "+t._s(t.articleData.lead_text)+" ")])],1)]),a("div",{staticClass:"column is-sidebar has-sidebar-cards"},[a("div",{staticClass:"is-sticky"},[["pr","native"].includes(t.articleData.article_type)?[t.showArticleAds&&!t.user.isPremium?a("div",{staticClass:"dfp_banner dfp_banner--halfpage_1 has-text-centered"},[a("dfp-slot",{attrs:{unit:"24_halfpage_1"}})],1):t._e()]:[a("card",{attrs:{data:t.cardMidasData(0,"video")}}),a("card",{attrs:{data:t.cardMidasData(0,"native")}})]],2)])]),t.showArticleAds?a("div",{staticClass:"dfp_banner dfp_banner--billboard_mid"},[a("dfp-slot",{attrs:{unit:t.user.isPremium?"24_billboard_1_premium":"24_billboard_1","extra-target":{dfpblkn:t.$options.name,dfpbind:"1"}}})],1):t._e(),a("div",{staticClass:"article__content_block columns is-justified-center"},[a("div",{staticClass:"column is-main"},[a("div",{staticClass:"article__content_container"},[a("share-bar",{attrs:{"page-title":t.articleData.title,"page-url":t.articleData.link,"item-id":t.articleData.id,"item-comments-count":t.articleData.comment_count,"visible-thread":t.articleData.is_for_comment}}),a("div",{staticClass:"article__main"},[a("intersect",{attrs:{threshold:[0]},on:{enter:function(e){t.engagementFadedOut=!1},leave:function(e){t.engagementFadedOut=!0}}},[a("div",{staticClass:"article__engagement_trigger"})]),a("div",{staticClass:"article__content_wrap is-clearfix",class:t.$_contentMaskClass},[a("article-content",{attrs:{"article-data":t.articleData,"article-id":t.articleData.id,"article-type":t.articleData.article_type,"article-content":t.articleContent,"article-section":t.$_article_returnSectionSlug(t.articleData.section),"article-subsection":t.$_article_returnSectionSlug(t.articleData.subsection),"article-keywords":t.articleData.keywords,"galleries-data":t.articleData.galleries,"x-related-articles":t.articleData.related_xinline_articles,"images-data":t.articleData.images,"videos-data":t.articleData.videos,"extra-content":t.articleData.extra_contents}}),t.articleData.is_locked?a("div",{staticClass:"piano_offer_inline",attrs:{id:"pianoOfferInline"}}):t._e(),"column"===t.articleData.article_type&&t.articleData.authors?a("router-link",{staticClass:"btn btn--all_columns is-rounded is-blue is-fluid has-text-centered",attrs:{to:{name:"Author",params:{slug:t.articleData.authors[0].slug,id:t.articleData.authors[0].id}}}},[t._v(" Vidi sve članke ovog autora ")]):t._e()],1)],1),"native"===t.articleData.article_type&&t.articleData.native?a("div",{staticClass:"article_sponsor--bottom"},[a("article-sponsor",{attrs:{"article-data":t.articleData,position:"article-content"}})],1):t._e(),"live"!==t.articleData.article_type&&t.articleData.keywords&&t.articleData.keywords.length?a("article-keywords",{attrs:{"keywords-data":t.articleData.keywords}}):t._e(),a("engagement-bar",{attrs:{"page-url":t.articleData.link,"page-title":t.articleData.title,"page-lead":t.articleData.lead_text,"article-url":t.articleData.link,"item-id":t.articleData.id,"has-comments":t.articleData.comment_count>0,"card-comment-count":t.articleData.comment_count,"reached-bottom":t.engagementReachedBottom,"is-faded-out":t.engagementFadedOut,page:"article","content-type":"article","total-reaction-count":t.articleData.total_reaction_count,"popular-reactions":t.articleData.reactions,"own-reaction":t.articleData.own_reaction,"hide-thread":!t.articleData.is_for_comment}}),t.shouldShowThreadTeaser?a("thread-teaser",{attrs:{"item-id":t.$_article_articleId,"item-comments-count":t.articleData.comment_count,"item-url":t.articleData.link||""+t.articleData.id,"popular-comments":t.articleData.popular_comments}}):t._e(),a("intersect",{on:{enter:function(e){t.engagementReachedBottom=!0},leave:function(e){t.engagementReachedBottom=!1}}},[a("div",{staticClass:"js_stickyShareStop sticky_stop"})]),t.showArticleAds&&!t.user.isPremium?a("div",{staticClass:"dfp_banner dfp_banner--rectangle_mid"},[a("dfp-slot",{attrs:{unit:"24_rectangle_1"}})],1):t._e()],1)]),a("div",{ref:"sticky_sidebar_control",staticClass:"column is-sidebar has-sidebar-cards"},[t.$_article_isLiveArticle||["pr","native"].includes(t.articleData.article_type)?t._e():a("div",{staticClass:"is-sticky"},[t.showArticleAds&&!t.user.isPremium?a("div",{staticClass:"dfp_banner dfp_banner--halfpage_1 has-text-centered"},[a("dfp-slot",{attrs:{unit:"24_halfpage_1"}})],1):t._e(),a("card",{attrs:{data:t.cardMidasData(0,"tes")}})],1)])]),t.$_article_isLiveArticle?t._e():a("div",{staticClass:"article__content_block columns is-justified-center"},[a("div",{staticClass:"column is-main"},[a("div",{staticClass:"article__extras_wrap"},[a("card",{staticClass:"article__more_from_section",attrs:{data:t.cardMidasData(0,"dedicated")}}),t.feedSectionArticles.length?[a("div",{staticClass:"article__more_from_section",class:{"has-disabled-comments":!t.articleData.is_for_comment}},[t._l(t.feedSectionArticles,(function(t){return[a("card",{key:t.id,attrs:{data:t}})]}))],2)]:t._e()],2)]),a("div",{staticClass:"column is-sidebar has-sidebar-cards is-marginless-top"},[["pr","native"].includes(t.articleData.article_type)?t._e():[t.topGiftsDataReady?a(t.TopGiftsWidget,{tag:"component",attrs:{pieces:t.piecesData,"parent-code":t.getTopGiftsParentCode(t.$route.params.section,1)}}):t._e(),a("div",{staticClass:"is-sticky"},[a("card",{attrs:{data:t.cardMidasData(1,"tes")}}),a("card",{attrs:{data:t.cardMidasData(0,"pr")}}),a("card",{attrs:{data:t.cardMidasData(1,"native")}})],1)]],2)])]),t.$_article_isLiveArticle?a("div",{staticClass:"fold_article__livecast"},[a("div",{staticClass:"livearticle__events_wrap"},[a(t.ArticleLivecastHeader,{tag:"component",attrs:{"article-live-data":t.articleData.live},on:{"events-show":t.toggleHighlightedEvents}}),a(t.ArticleLivecast,{tag:"component",attrs:{"article-live-data":t.articleData.live,"show-all-events":t.showAllEvents,"article-data":t.articleBaseData,"comments-enabled":t.articleData.is_for_comment,"popular-comments":t.articleData.popular_comments}})],1)]):t._e(),!t.$_article_isLiveArticle&&t.feedSectionArticles.length?[a("article-extra-folds-desktop",{attrs:{"article-feed-banners":t.articleFeedBanners,"article-data":t.articleData,"num-articles":t.numOfFeedArticles-t.feedSectionArticles.length,"article-in-special-section":t.$_article_isInSpecialSection}})]:t._e()],2)},r=[],s=a("2f62"),l=a("cc39"),c=a("9086"),n=a("3b01"),o=a("58f2"),d=a("4a67"),u=a("eb6c"),h=a("95da"),_=a("b2d9"),m=a("f910"),p=a("dbde"),g=a("6b59"),f=a("b9d7"),D=a("54f3"),v=a("c18a"),b={name:"ArticleDefaultDesktop",components:{ArticleHeader:d["a"],ArticleCoverGallery:u["a"],ArticleCoverPhoto:h["a"],ArticleCoverVideo:_["a"],ArticleContent:()=>Promise.all([a.e("vendors-async"),a.e("chunk-314de286")]).then(a.bind(null,"49d7")),ArticleKeywords:m["a"],ThreadTeaser:p["default"],ArticleExtraFoldsDesktop:g["a"],ArticleSponsor:()=>Promise.resolve().then(a.bind(null,"e935")),EngagementBar:f["default"],ShareBar:D["a"]},mixins:[l["b"],c["b"],n["a"],o["a"]],data(){return{engagementReachedBottom:!1,showAllEvents:!0,engagementFadedOut:!0,sidebarRef:null,resizeObserver:null,topGiftsDataReady:!1}},computed:{...Object(s["d"])("pieces",["piecesData"]),...Object(s["c"])(["getSettings","getSetting"]),TopGiftsWidget(){return()=>a.e("chunk-63955faa").then(a.bind(null,"af87"))},articleBaseData(){return{articleUrl:this.articleData.link||""+this.articleData.id,articleId:this.articleData.id,articleSection:this.articleData.section?this.articleData.section.name:"",articleSectionSlug:this.articleSectionSlug,articleSubsection:this.$_article_returnSectionSlug(this.articleData.subsection),articleKeywords:this.articleData.keywords,articleLabel:this.articleData.label,articleTitle:this.articleData.title,articleLead:this.articleData.lead_text,articleCommentsCount:this.articleData.comment_count}},ArticleLivecastHeader(){return()=>a.e("chunk-63955faa").then(a.bind(null,"ff40"))},ArticleLivecast(){return()=>a.e("chunk-63955faa").then(a.bind(null,"3f97"))},articleImage(){const t={url:"/media/images/2020-23/placeholder-24sata.png",author:"24sata"};return this.articleData.cover_image||this.articleData.image||t}},watch:{articleBaseData:{handler(){localStorage.setItem("adata",JSON.stringify(this.articleBaseData))},deep:!0}},beforeMount(){this.articleData.section&&this.setPiecesData(this.articleData.section.slug).then(()=>{this.topGiftsDataReady=!0}),!this.$_article_isLiveArticle&&this.articleFeedBanners&&this.loadCardsMidas(["video","native","tes","tes","pr","native","dedicated"])},beforeDestroy(){this.resizeObserver&&this.resizeObserver.disconnect()},mounted(){this.checkLocalStorage(),this.sidebarRails()},methods:{...Object(s["b"])("pieces",["setPiecesData"]),getTopGiftsParentCode:v["b"],sidebarRails(){this.sidebarRef=this.$refs.sticky_sidebar_control;const t=this.sidebarRef.getElementsByTagName("div")[0],e=this.getSetting("halfpage_sticky_article").value;t&&t.classList.contains("is-sticky")&&0!==e&&this.observeSidebarHeight(t)},observeSidebarHeight(t){this.resizeObserver=new ResizeObserver(this.setSidebarRails),this.resizeObserver.observe(t)},setSidebarRails(){const t=this.getSetting("halfpage_sticky_article").value,e=this.sidebarRef.querySelector(".is-sticky").clientHeight,a=e+t;this.sidebarRef.previousElementSibling.clientHeight>=a?this.sidebarRef.style.height=a+"px":this.sidebarRef.removeAttribute("style")},checkLocalStorage(){const t=localStorage.getItem("adata"),e=JSON.stringify(this.articleBaseData);t&&t===e||localStorage.setItem("adata",e)},toggleHighlightedEvents(){this.showAllEvents=!this.showAllEvents}}},y=b,C=a("2877"),w=Object(C["a"])(y,i,r,!1,null,null,null);e["default"]=w.exports},"584f":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("figure",{staticClass:"article__figure image is-faux",class:t.$_setImageRatio(t.isMob)},[a("v-photo",{attrs:{"intersection-options":{rootMargin:"350px 0px 350px 0px"},src:t.imgSrc,alt:t.coverData.title,"use-picture":""}},[t.isDesk?a("source",{attrs:{srcset:t.imgSrc,media:"(min-width: 1024px)"}}):t._e()]),"video"===t.articleType?a("div",{staticClass:"article__video_play_btn"},[a("app-icon",{attrs:{"icon-name":"icon-play-60px"}})],1):t._e()],1)},r=[],s=a("2f62"),l=a("af18"),c={name:"ArticleFauxCover",mixins:[l["a"]],props:{articleType:{type:String,required:!0},coverData:{type:Object,required:!0}},computed:{...Object(s["c"])(["isMob","isDesk"])},mounted(){const t={src:this.coverData.url,crop:this.coverData.crop,w:this.isDesk?776:414,h:this.isDesk?437:276};this.$_thumbor_getImgSrc(t).then(t=>{this.imgSrc=t})}},n=c,o=a("2877"),d=Object(o["a"])(n,i,r,!1,null,null,null);e["a"]=d.exports},"647f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section section--article is-flashcard"},[a("article",{staticClass:"article"},[a("div",{staticClass:"article__content_block columns is-justified-center"},[a("div",{staticClass:"column is-main"},[a("div",{staticClass:"article__content_container"},[a("div",{staticClass:"article__main"},[a("intersect",{attrs:{threshold:[0]},on:{enter:function(e){t.engagementFadedOut=!1},leave:function(e){t.engagementFadedOut=!0}}},[a("div",{staticClass:"article__engagement_trigger"})]),a("article-header",{attrs:{"article-id":t.articleData.id,"article-data":t.articleData,"article-type":t.articleData.article_type,"article-section-slug":t.articleSectionSlug}}),a("div",{staticClass:"article__content_wrap"},[a("div",{ref:"articleContent",staticClass:"article__content",domProps:{innerHTML:t._s(t.articleLeadAsContent)}})])],1),"native"===t.articleData.article_type&&t.articleData.native?a("div",{staticClass:"article_sponsor--bottom"},[a("article-sponsor",{attrs:{"article-data":t.articleData,position:"article-content"}})],1):t._e(),t.articleData.image?a("article-cover-photo",{attrs:{"article-image-data":t.articleData.image}}):t._e(),a("div",{staticClass:"article__extra_content has-text-centered"},[t.articleData.flash_external_link?a("a",{staticClass:"card__extra_content_link btn",attrs:{href:t.$_protocol_to_url(t.articleData.flash_external_link),target:"_blank"}},[t._v(" Vidi još na "+t._s(t.$_hostname_from_url(t.articleData.flash_external_link))+" ")]):t._e()]),t.articleData.keywords&&t.articleData.keywords.length?a("article-keywords",{attrs:{"keywords-data":t.articleData.keywords}}):t._e(),a("engagement-bar",{attrs:{"article-url":t.articleData.link,"page-url":t.articleData.link,"page-title":t.articleData.title,"page-lead":t.articleData.lead_text,"item-id":t.articleData.id,"has-comments":t.articleData.comment_count>0,"card-comment-count":t.articleData.comment_count,"reached-bottom":t.engagementReachedBottom,"is-faded-out":t.engagementFadedOut,page:"article","content-type":"article","total-reaction-count":t.articleData.total_reaction_count,"popular-reactions":t.articleData.reactions,"own-reaction":t.articleData.own_reaction,"hide-thread":!t.articleData.is_for_comment}}),t.shouldShowThreadTeaser?a("thread-teaser",{attrs:{"item-id":t.$_article_articleId,"item-comments-count":t.articleData.comment_count,"item-url":t.articleData.link||""+t.articleData.id,"popular-comments":t.articleData.popular_comments}}):t._e(),a("intersect",{on:{enter:function(e){t.engagementReachedBottom=!0},leave:function(e){t.engagementReachedBottom=!1}}},[a("div",{staticClass:"js_stickyShareStop sticky_stop"})])],1),a("div",{staticClass:"article__extras_block"},[a("div",{staticClass:"article__extras_wrap"},[t.showArticleAds?a("div",{staticClass:"dfp_banner dfp_banner--rectangle_mid"},[a("dfp-slot",{attrs:{unit:"24_rectangle_1"}})],1):t._e(),a("div",{staticClass:"article__more_from_section",class:{"has-disabled-comments":!t.articleData.is_for_comment}},[t.feedSectionArticles.length?[t._l(t.feedSectionArticles,(function(t){return[a("card",{key:t.id,attrs:{data:t}})]}))]:t._e()],2)])])]),a("div",{staticClass:"column is-sidebar"},[a("div",{staticClass:"is-sticky"},[a("div",{staticClass:"dfp_banner dfp_banner--halfpage_2 has-text-centered"},[a("dfp-slot",{attrs:{unit:"24_halfpage_2"}})],1)])])])]),t.feedSectionArticles.length?[a("article-extra-folds-desktop",{attrs:{"article-data":t.articleData,"num-articles":t.numOfFeedArticles-t.feedSectionArticles.length,"article-in-special-section":t.$_article_isInSpecialSection}})]:t._e()],2)},r=[],s=a("cc39"),l=a("c400"),c=a("9086"),n=a("3b01"),o=a("4a67"),d=a("95da"),u=a("f910"),h=a("dbde"),_=a("6b59"),m=a("b9d7"),p=a("c990"),g={name:"ArticleFlashcardDesktop",components:{ArticleHeader:o["a"],ArticleCoverPhoto:d["a"],ArticleKeywords:u["a"],ThreadTeaser:h["default"],ArticleExtraFoldsDesktop:_["a"],ArticleSponsor:()=>Promise.resolve().then(a.bind(null,"e935")),EngagementBar:m["default"]},mixins:[s["b"],c["b"],n["a"],l["h"]],data(){return{engagementReachedBottom:!1,engagementFadedOut:!0}},computed:{articleBaseData(){return{articleUrl:this.articleData.link||""+this.articleData.id,articleId:this.articleData.id,articleSection:this.articleData.section?this.articleData.section.name:"",articleSectionSlug:this.articleSectionSlug,articleSubsection:this.$_article_returnSectionSlug(this.articleData.subsection),articleKeywords:this.articleData.keywords,articleLabel:this.articleData.label,articleTitle:this.articleData.title,articleLead:this.articleData.lead_text,articleCommentsCount:this.articleData.comment_count}},articleLeadAsContent(){let t=this.articleData.lead_text;t=t.split(/\r?\n/);let e="";return t.forEach(t=>{e+=`<p>${t}</p>`}),e}},watch:{articleBaseData:{handler(){localStorage.setItem("adata",JSON.stringify(this.articleBaseData))},deep:!0}},mounted(){var t;this.checkLocalStorage();const e=null===(t=this.$refs.articleContent)||void 0===t?void 0:t.querySelectorAll("p");this.showArticleAds&&e&&e.length>2&&Object(p["d"])(e)},methods:{checkLocalStorage(){const t=localStorage.getItem("adata"),e=JSON.stringify(this.articleBaseData);t&&t===e||localStorage.setItem("adata",e)}}},f=g,D=a("2877"),v=Object(D["a"])(f,i,r,!1,null,null,null);e["default"]=v.exports},"6b59":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article__feeds_wrap"},[t.loadOtherFeeds?[t._l(t.otherFeedsArticle,(function(e,i){return[e.template&&e.cards.length>0?a("section",{key:e.id,class:t.$_section_getSectionCode(e.template.source),attrs:{"data-cy":t.$_section_getSectionCode(e.template.source)}},[a("block",{key:e.id,attrs:{data:e,type:t.getBlockType(e.template.source),extra:t.articleData.article_type,"feed-index":i+1,"article-feed-banners":t.articleFeedBanners,"article-in-special-section":t.articleInSpecialSection}})],1):t._e()]}))]:t._e()],2)},r=[],s=a("4690"),l={name:"ArticleExtraFoldsDesktop",mixins:[s["a"]],props:{articleFeedBanners:{type:Boolean,default:!0},articleInSpecialSection:{type:Boolean,default:!1}}},c=l,n=a("2877"),o=Object(n["a"])(c,i,r,!1,null,null,null);e["a"]=o.exports},"87ff":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section section--article is-flashcard"},[a("div",{staticClass:"article_head"},[a("article-header",{attrs:{"article-id":t.articleData.id,"article-data":t.articleData,"article-type":t.articleData.article_type,"article-section-slug":t.articleSectionSlug}})],1),a("article",{staticClass:"article"},[a("div",{staticClass:"article__body"},[a("div",{staticClass:"article__main"},[a("div",{staticClass:"article__content_wrap"},[a("div",{ref:"articleContent",staticClass:"article__content",domProps:{innerHTML:t._s(t.articleLeadAsContent)}})])]),t.articleData.image?a("article-cover-photo",{attrs:{"article-image-data":t.articleData.image}}):t._e(),a("div",{staticClass:"article__extra_content has-text-centered"},[t.articleData.flash_external_link?a("a",{staticClass:"card__extra_content_link btn",attrs:{href:t.$_protocol_to_url(t.articleData.flash_external_link),target:"_blank"}},[t._v(" Vidi još na "+t._s(t.$_hostname_from_url(t.articleData.flash_external_link))+" ")]):t._e()]),"native"===t.articleData.article_type&&t.articleData.native?a("article-sponsor",{attrs:{"article-data":t.articleData,position:"article-content"}}):t._e(),t.displayAppPromoBlock?a(t.ArticleAppPromoBlock,{tag:"component"}):t._e(),t.articleData.keywords&&t.articleData.keywords.length?a("article-keywords",{attrs:{"keywords-data":t.articleData.keywords}}):t._e(),a("engagement-bar",{attrs:{"article-url":t.articleData.link,"page-url":t.articleData.link,"page-title":t.articleData.title,"page-lead":t.articleData.lead_text,"item-id":t.articleData.id,"has-comments":t.articleData.comment_count>0,"card-comment-count":t.articleData.comment_count,page:"article","content-type":"article","hide-thread":!t.articleData.is_for_comment}})],1)]),a("div",{staticClass:"article__extras_block"},[t.shouldShowThreadTeaser?a("thread-teaser",{attrs:{"item-id":t.$_article_articleId,"item-comments-count":t.articleData.comment_count,"item-url":t.articleData.link||""+t.articleData.id,"popular-comments":t.articleData.popular_comments}}):t._e(),t.showArticleAds?a("div",{staticClass:"dfp_banner dfp_banner--rectangle_mid"},[a("dfp-slot",{attrs:{unit:"24m_rectangle_2"}}),a("dfp-slot",{attrs:{unit:"24m_rectangle_2_premium"}})],1):t._e(),t.feedSectionArticles.length?[a("article-extra-folds-mobile",{attrs:{"article-data":t.articleData,"num-articles":t.numOfFeedArticles-t.feedSectionArticles.length}})]:t._e()],2)])},r=[],s=a("cc39"),l=a("c400"),c=a("4a67"),n=a("95da"),o=a("f910"),d=a("dbde"),u=a("a7a8"),h=a("b9d7"),_=a("c990"),m={name:"ArticleFlashcardMobile",components:{ArticleHeader:c["a"],ArticleCoverPhoto:n["a"],ArticleKeywords:o["a"],ThreadTeaser:d["default"],ArticleSponsor:()=>Promise.resolve().then(a.bind(null,"e935")),EngagementBar:h["default"],ArticleExtraFoldsMobile:u["a"]},mixins:[s["b"],l["h"]],computed:{articleLeadAsContent(){let t=this.articleData.lead_text;t=t.split(/\r?\n/);let e="";return t.forEach(t=>{e+=`<p>${t}</p>`}),e},articleBaseData(){return{articleUrl:this.articleData.link||""+this.articleData.id,articleId:this.articleData.id,articleSection:this.articleData.section?this.articleData.section.name:"",articleSectionSlug:this.articleSectionSlug,articleSubsection:this.$_article_returnSectionSlug(this.articleData.subsection),articleKeywords:this.articleData.keywords,articleLabel:this.articleData.label,articleTitle:this.articleData.title,articleLead:this.articleData.lead_text,articleCommentsCount:this.articleData.comment_count}},ArticleAppPromoBlock(){return()=>a.e("chunk-63955faa").then(a.bind(null,"b522"))}},watch:{articleBaseData:{handler(){localStorage.setItem("adata",JSON.stringify(this.articleBaseData))},deep:!0}},mounted(){var t;this.checkLocalStorage();const e=null===(t=this.$refs.articleContent)||void 0===t?void 0:t.querySelectorAll("p");this.showArticleAds&&e&&e.length>2&&Object(_["d"])(e)},methods:{checkLocalStorage(){const t=localStorage.getItem("adata"),e=JSON.stringify(this.articleBaseData);t&&t===e||localStorage.setItem("adata",e)}}},p=m,g=a("2877"),f=Object(g["a"])(p,i,r,!1,null,null,null);e["default"]=f.exports},"95da":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article__cover"},[a("figure",{staticClass:"article__figure image",class:t.$_setImageRatio(t.isMob)},[a("img",{staticClass:"article__figure_img",attrs:{src:t.imgSrc,alt:t.articleImageData.title,width:t.isMob?"414":"622",height:t.isMob?"276":"345"}}),a("image-video-metadata",{attrs:{dataset:t.articleImageData,"inline-media-data":t.articleImageData,media:"image",page:"article"}})],1)])},r=[],s=a("2f62"),l=a("af18"),c={name:"ArticleCoverPhoto",components:{ImageVideoMetadata:()=>a.e("chunk-63955faa").then(a.bind(null,"51e1"))},mixins:[l["a"]],props:{articleImageData:{type:Object,required:!0}},computed:{...Object(s["c"])(["isMob","isDesk"])},created(){const t={src:this.articleImageData.url,crop:this.articleImageData.crop,w:this.isDesk?1243:1200,h:this.isDesk?700:800};this.$_thumbor_getImgSrc(t).then(t=>{this.imgSrc=t})}},n=c,o=a("2877"),d=Object(o["a"])(n,i,r,!1,null,null,null);e["a"]=d.exports},a6db:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gallery__video"},["cds"===t.videoProvider?a("video-player",{ref:"videoPlayer_"+t.videoData.video.id,attrs:{options:t.videoOptions,"article-data":t.$_video_getArticleData(t.articleSection,t.articleSubsection,t.articleId,t.articleKeywords),"show-ads":t.showPreroll}}):"jwplayer"===t.videoProvider||"jwplayer"===t.videoData.video.provider?a(t.VideoPlayerJW,{tag:"component",attrs:{"content-object":t.videoData.video,"show-ads":t.showPreroll,"article-data":t.$_video_getArticleData(t.articleSection,t.articleSubsection,t.articleId,t.articleKeywords),"video-id":t.videoData.video.id,"article-id":t.articleId}}):a("div",{attrs:{id:t.videoData.video.id}}),a("image-video-metadata",{attrs:{dataset:t.videoData,page:"gallery"}})],1)},r=[],s=a("0d1b"),l={name:"GalleryVideo",components:{VideoPlayer:()=>Promise.all([a.e("vendors-async"),a.e("chunk-077a90f4")]).then(a.bind(null,"d143")),ImageVideoMetadata:()=>a.e("chunk-63955faa").then(a.bind(null,"51e1"))},mixins:[s["a"]],props:{videoData:{type:Object,required:!0},articleId:{type:String,required:!0},articleSection:{type:String,default:""},articleSubsection:{type:String,default:""},articleKeywords:{type:Array,default:()=>[]},showAds:{type:Boolean,default:!0}},computed:{screenWidth(){const t=document.body.clientWidth;return t>414?414:t},videoPoster(){return this.videoData.video.cover_image?this.videoData.video.cover_image.url:""},videoOptions(){return{language:"hr",aspectRatio:"16:9",width:this.screenWidth,playsinline:!0,controls:!0,muted:!0,sources:[{type:"video/mp4",src:this.videoData.video.url}],preload:"auto",poster:this.videoPoster}},showPreroll(){return!0!==this.videoData.video.no_ads&&this.showAds},VideoPlayerJW(){return()=>a.e("chunk-4a293c9a").then(a.bind(null,"b656"))}},mounted(){["cds","jwplayer"].includes(this.videoProvider)||"jwplayer"===this.videoData.video.provider||this.$_video_setEmbededPlayer(this.videoData.video.id,this.videoData.video.url,!1,!0)}},c=l,n=a("2877"),o=Object(n["a"])(c,i,r,!1,null,null,null);e["a"]=o.exports},a7a8:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article__feeds_wrap",class:{"has-disabled-comments":!t.articleData.is_for_comment}},[t.articleData.section&&t.articleFeedBanners&&"article"!==t.articleType?a("block-feed-3-mobile",{attrs:{articles:t.feedSectionArticles,"section-slug":t.articleData.section.slug,"article-id":t.articleData.id,"article-feed-banners":t.articleFeedBanners,"article-in-special-section":t.articleInSpecialSection}}):t._e(),t.articleData.section&&t.articleFeedBanners&&"article"===t.articleType?a("block-feed-3-mobile-default",{attrs:{articles:t.feedSectionArticles,"section-slug":t.articleData.section.slug,"article-id":t.articleData.id,"article-feed-banners":t.articleFeedBanners,"article-in-special-section":t.articleInSpecialSection,"article-type":t.articleType}}):t._e(),t.loadOtherFeeds?[t._l(t.otherFeedsArticle,(function(e){return[e.template&&e.cards.length>0?a("section",{key:e.id,class:t.$_section_getSectionCode(e.template.source),attrs:{"data-cy":t.$_section_getSectionCode(e.template.source)}},[a("block",{key:e.id,attrs:{data:e,extra:t.articleData.article_type,type:t.getBlockType(e.template.source),"article-feed-banners":t.articleFeedBanners,"article-in-special-section":t.articleInSpecialSection,"article-type":t.articleType}})],1):t._e()]}))]:t._e()],2)},r=[],s=a("4690"),l=a("900b"),c=a("fe84"),n={name:"ArticleExtraFoldsMobile",components:{BlockFeed3Mobile:l["default"],BlockFeed3MobileDefault:c["default"]},mixins:[s["a"]],props:{articleFeedBanners:{type:Boolean,default:!0},articleInSpecialSection:{type:Boolean,default:!1},articleType:{type:String,default:""},extra:{type:String,default:""}}},o=n,d=a("2877"),u=Object(d["a"])(o,i,r,!1,null,null,null);e["a"]=u.exports},ace0:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section section--standalone_gallery is-article"},[a("div",{staticClass:"article_head"},[a("article-header",{attrs:{"article-id":t.articleData.id,"article-data":t.articleData,"article-type":t.articleData.article_type,"article-section-slug":t.articleSectionSlug}})],1),a("article",{staticClass:"article"},[a("div",{staticClass:"article__body"},[a("p",{staticClass:"article__lead_text"},[t._v(" "+t._s(t.articleData.lead_text)+" ")]),a("div",{staticClass:"article__main"},[t.articleData.is_locked&&!t.hasCoverGallery?[a("article-faux-cover",{attrs:{"article-type":t.articleData.article_type,"cover-data":t.articleData.cover_image}}),a("div",{staticClass:"piano_offer_inline",attrs:{id:"pianoOfferInline"}})]:t._e(),t.galleryReady?t._l(t.galleryData.items,(function(e,i){return a("div",{key:e.content_id,staticClass:"gallery__block"},["video"===e.content_type?a("gallery-video",{attrs:{"video-data":e,"article-id":t.articleData.id,"show-ads":e.video.no_ads||t.showArticleAds}}):a("gallery-image",{attrs:{"image-data":e}}),0===i&&t.showArticleAds?a("div",{staticClass:"gallery__banner"},[a("dfp-slot",{attrs:{unit:"24m_rectangle_1"}}),a("dfp-slot",{attrs:{unit:"24m_rectangle_1_premium"}})],1):t._e(),0!==i&&(i+1)%3===1&&t.showArticleAds?a("div",{staticClass:"gallery__banner"},[a("div",{staticClass:"dfp_banner dfp_banner--rectangle_mid"},[a("dfp-slot",{attrs:{unit:"24m_rectangle_feed_mid"}})],1)]):t._e()],1)})):t._e()],2),t.displayAppPromoBlock?a(t.ArticleAppPromoBlock,{tag:"component"}):t._e(),t.articleData.keywords&&t.articleData.keywords.length?a("article-keywords",{attrs:{"keywords-data":t.articleData.keywords}}):t._e(),a("engagement-bar",{attrs:{"article-url":t.articleData.link,"page-url":t.articleData.link,"page-title":t.articleData.title,"page-lead":t.articleData.lead_text,"item-id":t.articleData.id,"has-comments":t.articleData.comment_count>0,"card-comment-count":t.articleData.comment_count,"reached-bottom":t.engagementReachedBottom,page:"article","content-type":"article","hide-thread":!t.articleData.is_for_comment}})],1)]),t.shouldShowThreadTeaser?a("thread-teaser",{attrs:{"item-id":t.$_article_articleId,"item-comments-count":t.articleData.comment_count,"item-url":t.articleData.link||""+t.articleData.id,"popular-comments":t.articleData.popular_comments}}):t._e(),a("div",{staticClass:"article__extras_block"},[t.feedSectionArticles.length?[t._l(t.feedSectionArticles,(function(t,e){return[a("card",{key:e,attrs:{data:t}})]}))]:t._e()],2),t.showArticleAds?a("div",{staticClass:"dfp_banner dfp_banner--rectangle_bot"},[a("dfp-slot",{attrs:{unit:"24m_rectangle_feed_bot"}})],1):t._e(),a("vue-photo-swipe",{attrs:{options:t.pswpOptions}})],1)},r=[],s=a("0e14"),l=a("cc39"),c=a("dbc6"),n=a("3b01"),o=a("4a67"),d=a("f910"),u=a("584f"),h=a("dbde"),_=a("b9d7"),m=a("a6db"),p=a("ec0d"),g=a("f8df"),f=a("c400"),D={name:"ArticleGalleryMobile",components:{ArticleHeader:o["a"],ArticleKeywords:d["a"],ArticleFauxCover:u["a"],ThreadTeaser:h["default"],EngagementBar:_["default"],GalleryVideo:m["a"],GalleryImage:p["a"],VuePhotoSwipe:g["a"]},mixins:[l["b"],n["a"]],data(){return{galleryData:[],galleryReady:!1,engagementReachedBottom:!1,pswpOptions:{closeEl:!0,captionEl:!1,fullscreenEl:!1,zoomEl:!1,shareEl:!1,counterEl:!1,arrowEl:!1,preloaderEl:!0,timeToIdle:1e5,timeToIdleOutside:1e5,history:!1,closeOnScroll:!1,barsSize:{top:0,bottom:0}}}},computed:{ArticleAppPromoBlock(){return()=>a.e("chunk-63955faa").then(a.bind(null,"b522"))}},mounted(){this.hasCoverGallery?this.getGalleryData(this.coverGallery.id):this.galleryReady=!0},methods:{getGalleryData(t){const e=Object(f["e"])("gallerysData");e?this.setGalleryData(e.data):c["b"].get("galleries/"+t).then(t=>{const e=Object(s["deserialize"])(t.data);this.galleryData=e,this.galleryReady=!0}).catch(()=>{})}}},v=D,b=a("2877"),y=Object(b["a"])(v,i,r,!1,null,null,null);e["default"]=y.exports},b2d9:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.mainGalleryReady?a("div",{staticClass:"article__gallery"},[a("router-link",{staticClass:"article__gallery_link",attrs:{to:{name:"Gallery",params:{section:t.articleData.section.slug,slug:t.articleData.slug,aid:t.articleData.id,id:t.articleGalleryData.id}}}},[a("figure",{staticClass:"article__figure image is-16by9"},[a("div",{staticClass:"article__image_wrap"},[a("img",{staticClass:"article__figure_img",attrs:{src:t.imgSrc,alt:t.mainGalleryData.video.title,width:t.isMob?"414":"622",height:t.isMob?"276":"345"}}),a("div",{staticClass:"article__gallery_count"},[a("app-icon",{attrs:{"icon-name":"icon-camera"}}),t._v(" "+t._s(t.articleGalleryData.item_count)+" ")],1),a("div",{staticClass:"article__video_play_btn"},[a("app-icon",{attrs:{"icon-name":"icon-play-60px"}})],1)]),a("image-video-metadata",{attrs:{dataset:t.mainGalleryData,"inline-media-data":t.mainGalleryData,media:"video",page:"article"}})],1)])],1):t._e()},r=[],s=a("0e14"),l=a("dbc6"),c=a("af18"),n=a("aa25"),o={name:"ArticleCoverVideo",components:{ImageVideoMetadata:()=>a.e("chunk-63955faa").then(a.bind(null,"51e1"))},mixins:[c["a"],Object(n["a"])(["mainGalleryData",[]],"getGalleryData",[],"beforeMount")],props:{articleData:{type:Object,required:!0},articleGalleryData:{type:Object,default:()=>({})}},data(){return{mainGalleryData:[],mainGalleryReady:!1}},computed:{imageUrl(){return this.mainGalleryData.video.cover_image?this.mainGalleryData.video.cover_image.url:""},imageCrop(){return this.mainGalleryData.video.cover_image?this.mainGalleryData.video.cover_image.crop:""}},mounted(){this.$_thumbor_getImgSrc({src:this.imageUrl,crop:this.imageCrop,w:1244,h:700}).then(t=>{this.imgSrc=t})},methods:{getGalleryData(){l["b"].get("galleries/"+this.articleGalleryData.id).then(t=>{this.mainGalleryData=Object(s["deserialize"])(t.data).items.slice(0,1)[0],this.imgSrc=this.imageUrl,this.mainGalleryReady=!0}).catch(()=>{})}}},d=o,u=a("2877"),h=Object(u["a"])(d,i,r,!1,null,null,null);e["a"]=h.exports},c990:function(t,e,a){"use strict";a.d(e,"a",(function(){return u})),a.d(e,"f",(function(){return h})),a.d(e,"b",(function(){return _})),a.d(e,"c",(function(){return m})),a.d(e,"g",(function(){return p})),a.d(e,"e",(function(){return g})),a.d(e,"d",(function(){return f}));var i=a("bc3a"),r=a.n(i),s=a("6821"),l=a.n(s),c=a("07a4"),n=a("efd5"),o=a("1dbc"),d=a("4023");const u="18981092",h=t=>{let e=u+"/";const a=u+"/24SATA_PREMIUM_PLUS/";t.includes(a)&&(e=a);const i=t.split(e)[1];return i||t};class _{constructor(t,e,a=!1){this.LOG=a?console.log.bind(console):()=>{},this.TABLE=a?console.table.bind(console):()=>{},this.options=t,this.target=e}static getTargetScreenSizes(){const t=Object(n["a"])(),e={1024:[1024,768],1280:[1280,1024],1366:[1366,768],1370:[1370,768],1440:[1440,900],1600:[1600,1050],1920:[1920,1080]},a=[];return Object.keys(e).forEach(i=>{t.width>=Number(i)&&a.push(`${i}x${e[i][1]}_min`)}),a}static generatePPID(t){return l()("googletag-PPID-"+t)}initialize(){window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push(()=>{const t=this.constructor.getTargetScreenSizes(),e=Object(o["b"])({checkTablet:!0}).toLocaleLowerCase();window.googletag.pubads().setTargeting("site",Object(o["a"])()),window.googletag.pubads().setTargeting("platform",e),window.googletag.pubads().setTargeting("domain",window.location.host),window.googletag.pubads().setTargeting("userType",this.options.userType),t.length&&window.googletag.pubads().setTargeting("res_min",t);const a={};["cont_type","section","sub_sec","articleID","tag24","isPremium"].forEach(t=>{const e=this.target[t]||"";a[t]=e,window.googletag.pubads().setTargeting(t,e)}),this.LOG("\n-----\ndfp targeting customKeys"),this.TABLE(a),window.googletag.pubads().collapseEmptyDivs(),window.googletag.pubads().disableInitialLoad();const i=c["a"].getters.getSetting("ppid_set_enabled").value;if(i&&this.options.userId){const t=this.constructor.generatePPID(this.options.userId);window.googletag.pubads().setPublisherProvidedId(t)}window.googletag.enableServices()})}static destroySlots(){const t=window.document.querySelectorAll(".js_spaRemove");t.forEach(t=>{t&&t.remove()}),window.googletag&&"function"===typeof window.googletag.destroySlots&&window.googletag.destroySlots(),window.teads&&"function"===typeof window.teads.cleanup&&window.teads.cleanup()}static deleteUserData(t){const e=this.generatePPID(t),a=`https://securepubads.g.doubleclick.net/user_data_deletion?ppid=${e}&iu=${d["googlePubAdManagerNewtorkCode"]}`;r.a.get(a)}}const m=()=>{window.googletag&&"function"===typeof window.googletag.destroySlots&&window.googletag.destroySlots();const t=window.document.querySelectorAll(".js_removeStyle");t.forEach(t=>{t&&t.removeAttribute("style")});const e=window.document.querySelectorAll(".js_spaRemove");e.forEach(t=>{t&&t.remove()});const a=c["a"].getters.getSetting("ads_classes");if(a){const t=JSON.parse(a.value);Array.isArray(t)&&t.forEach(t=>{const e=window.document.querySelector("."+t);e&&e.classList.remove(t)})}const i=window.document.querySelectorAll(".ado-template-styles"),r=window.document.querySelectorAll('*[id^="billboard"]');i.forEach(t=>t.classList.add("js_spaRemove")),r.forEach(t=>t.classList.add("js_spaRemove"))},p=(t,e)=>{const a=t.filter(t=>"DfpSlot"===t.$options.name);return a.findIndex(t=>t===e)};function g(t){return!["native","pr","video"].includes(t)}function f(t){const e='<div id="midasWidget__11206"></div>';t[1].insertAdjacentHTML("afterend",e);const a=document.createElement("script");a.src="https://cdn2.midas-network.com/Scripts/midasWidget-29-1087-11206.js",a.async=!0;const i=document.getElementById("midasWidget__11206");i&&i.parentNode.insertBefore(a,i.nextSibling)}},cc39:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return d}));var i=a("2f62"),r=a("0e14"),s=a("dbc6"),l=a("4272"),c=a("82ca"),n=a("efd5");const o={computed:{...Object(i["c"])("meta",["user"]),...Object(i["c"])("user",["isAuthenticated"]),...Object(i["c"])("ads",["showArticleAds"]),...Object(i["c"])(["isMob"])},methods:{async getArticleFeed(t,e,a){const i=this.isMob?"":"/desktop",c=`/articles/${t}/feed${i}`,n="include=gallery_video.video,gallery_video.video.author,gallery_video.video.cover_image&merge=true",o=`${c}?${n}&offset=${e}&limit=${a}`,d=this.getFeedOwnReactions(c,e,a),u=await s["b"].get(o),h=await d,_=h.data;void 0!==this.numOfFeedArticles&&(this.numOfFeedArticles=u.data.meta.pagination.count);const m=Object(l["f"])(u.data,_);return Object(r["deserialize"])(m)},getFeedOwnReactions(t,e,a){return this.isAuthenticated?s["b"].get(`${t}/own-reactions?offset=${e}&limit=${a}`):new Promise(t=>t({data:{}}))}}},d={props:{articleData:{type:Object,required:!1}},mixins:[o],data(){return{articleSectionSlug:"",articleReady:!0,articleContent:[],hasCoverGallery:!1,coverGallery:{},shouldGetFeedSectionArticles:!0,showTemplatedFeed:!1,feedSectionArticles:[],numOfFeedArticles:null}},head:{title(){return{inner:this.articleData.title}}},computed:{...Object(i["c"])(["getSetting"]),...Object(i["c"])("user",["userData"]),displayAppPromoBlock(){return!this.getSetting("disable_mobile_app_promo").value},$_article_articleId(){return this.articleData.id},$_article_isLiveArticle(){return Object(n["c"])(this.articleData)},$_article_isInSpecialSection(){let t;return this.articleData.sections&&(t=this.articleData.sections.filter(t=>!0===t.is_special)),!!t.length},$_contentMaskClass(){return!!this.articleData.is_locked&&"is-locked"},shouldShowThreadTeaser(){return this.articleData.is_for_comment&&!this.$_article_isLiveArticle}},beforeMount(){this.getArticleData(),document.dispatchEvent(new CustomEvent("vueApp:openedArticle",{detail:{articleData:this.articleData}}))},mounted(){const t=this.getSetting("show_templated_article_feed").value,e=new URLSearchParams(window.location.search).get("show_templated_article_feed");this.showTemplatedFeed=e?"true"===e:t;const a=!this.showTemplatedFeed||this.shouldGetFeedSectionArticles;this.getArticleContent(),!this.$route.query.preview_code&&a&&this.getFeedSectionArticles(),window.FB.XFBML.parse()},methods:{...Object(i["b"])("menus",["setCurrentSection"]),...Object(i["b"])("article",["setStartArticleFeedLoad"]),getLabelSlug(t){let e="";"column"===t?e=t:this.articleData.section&&(e=this.articleData.section.slug);const a=this.articleData.section?this.articleData.section.slug:"";this.setCurrentSection(a),this.articleSectionSlug=e},getArticleContent(){this.articleContent=this.articleData.content||"[]"},getCoverGallery(){if(this.articleData.galleries){const t=this.articleData.galleries.find(t=>!t.is_embedded);t&&(this.coverGallery=t,this.hasCoverGallery=!0)}},getArticleData(){this.getCoverGallery(),this.getLabelSlug(this.articleData.article_type),this.articleData.is_locked?this.setPiano():window.tp.push(["setTags",["regular_article"]])},async getFeedSectionArticles(){const t=this.isMob?3:6;this.feedSectionArticles=await this.getArticleFeed(this.articleData.id,0,t)},$_article_returnSectionSlug:c["b"],setPiano(){window.tp.push(["setTags",[this.articleData.premium_content_type]]),window.tp.experience.execute()}}}},d2b3:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var i=a("0e14"),r=a("dbc6"),s=a("2f62");const l={computed:{$_getUserDataInfo(){let t;return t=this.isAuthenticated&&!this.userData.display_name?"change-display-name":{modalRole:"welcome-intro",modalType:"comments"},t}},methods:{...Object(s["b"])("snackbar",["setSnackbar"]),$_sortedItems(t,e){function a(t,a){const i=t[e],r=a[e];return i<r?-1:i>r?1:0}this.replies.sort(a)},$_findIndex(t,e){const a=e=>e.id===t,i=e.findIndex(a);if("number"===typeof i)return i},$_linkParent(t){t.target.closest(".thread_comment__reply")?(this.isPostReply=!0,this.isViewReply=!1):(this.isPostReply=!1,this.isViewReply=!0)},$_getCommentData(t){this.dataReady=!1;const e=`comments/${t}?include=posted_by,replies.posted_by&replies_count=${this.commentThreadReplyCount}`;return r["b"].get(e).then(t=>{this.commentData=Object(i["deserialize"])(t.data),this.replies=this.commentData.replies,this.dataReady=!0,this.$_sortedItems(this.replies,"created_date")}).catch(t=>{const e=404===t.response.status,a=this.$route.name;if(e){const t="Sadržaj na koji smo naumili sletjeti više ne postoji ¯\\_(ツ)_/¯";if(this.setSnackbar({message:t,type:"warning"}),"ThreadReply"===a){const{section:t}=this.$route.params,{id:e}=this.$route.params,{slug:a}=this.$route.params;this.$router.push({name:"Thread",params:{section:t,slug:a,id:e}}).catch(()=>{})}else if("ThreadPiecesReply"===a){const{code:t}=this.$route.params,{id:e}=this.$route.params;this.$router.push({name:"ThreadPiece",params:{code:t,id:e}}).catch(()=>{})}}})}}}},dbde:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article__thread js_stickyShareStop"},[t.itemCommentsCount?a("thread-teaser-with-comments",{attrs:{"item-url":t.itemUrl||"a-"+t.itemId,"item-id":t.itemId,"item-comments-count":t.itemCommentsCount,"thread-comments":t.threadComments,"sticky-header":t.stickyHeader}}):a("thread-teaser-no-comments",{attrs:{"item-url":t.itemUrl||"a-"+t.itemId,"item-comments-count":t.itemCommentsCount}})],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"thread_teaser"},[a("div",{staticClass:"thread_teaser__header"},[a("span",{staticClass:"thread_teaser__title"},[t._v(" Komentari "),a("span",{staticClass:"thread_teaser__count"},[t._v(t._s(t.itemCommentsCount))])])]),a("div",{staticClass:"thread_teaser__body thread_teaser__body--has_border"},[t.isAuthenticated?a("router-link",{staticClass:"btn is-big is-blue is-rounded is-fluid is-center",attrs:{to:{path:t.itemUrl+"/komentari"}}},[t._v(" Komentiraj ")]):a("button",{staticClass:"btn is-big is-blue is-rounded is-fluid is-center",on:{click:function(e){return t.openModal("welcome-classic")}}},[t._v(" Komentiraj ")])],1),a(t.ArticleCommentsDisclaimer,{tag:"component"})],1)},l=[],c=a("2f62"),n={name:"ThreadTeaserNoComments",props:{itemUrl:{type:String,required:!0},itemCommentsCount:{type:Number,required:!0}},computed:{...Object(c["c"])("user",["isAuthenticated"]),ArticleCommentsDisclaimer(){return()=>a.e("chunk-4a293c9a").then(a.bind(null,"a359"))}},methods:{...Object(c["b"])(["openModal"])}},o=n,d=a("2877"),u=Object(d["a"])(o,s,l,!1,null,null,null),h=u.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"thread_teaser"},[a("div",{staticClass:"thread_teaser__header",class:{"is-sticky":t.stickyHeader}},[a("span",{staticClass:"thread_teaser__title"},[t._v(" Komentari "),a("span",{staticClass:"thread_teaser__count"},[t._v(" "+t._s(t.itemCommentsCount+t.fakeCommentCount)+" ")])])]),a("div",{staticClass:"thread_teaser__body thread_teaser__body--has_border"},[t._l(t.threadComments,(function(e){return[a(t.commentComponent,{key:e.id,tag:"component",attrs:{"comment-data":e,"item-url":t.itemUrl,"comment-type":"preview"}})]})),t.isAuthenticated&&t.userData.display_name?a("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"btn btn__fake_input is-rounded is-fluid",attrs:{to:{path:t.itemUrl+"/komentari"}}},[t._v(" Komentiraj... ")]):a("div",[a("router-link",{staticClass:"btn btn__fake_input is-rounded is-fluid",attrs:{to:{path:t.itemUrl+"/komentari?zelimkomentirati"}}},[t._v(" Komentiraj... ")])],1),a("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"btn is-blue is-rounded is-fluid is-center",attrs:{to:{path:t.itemUrl+"/komentari"}}},[t._v(" Vidi sve komentare ")])],2),a(t.ArticleCommentsDisclaimer,{tag:"component"})],1)},m=[],p=a("c400"),g=a("d2b3"),f={name:"ThreadTeaserWithComments",mixins:[p["g"],g["a"]],props:{itemUrl:{type:String,required:!0},itemCommentsCount:{type:Number,required:!0},threadComments:{type:Array,required:!0},stickyHeader:{type:Boolean,default:!1}},data(){return{fakeCommentCount:0}},computed:{...Object(c["c"])("user",["isAuthenticated","userData"]),...Object(c["c"])(["isMob"]),commentComponent(){return this.isMob?()=>Promise.all([a.e("vendors-async"),a.e("chunk-661f6ab4"),a.e("chunk-314de286")]).then(a.bind(null,"014b")):()=>Promise.all([a.e("vendors-async"),a.e("chunk-661f6ab4"),a.e("chunk-314de286")]).then(a.bind(null,"dd81"))},ArticleCommentsDisclaimer(){return()=>a.e("chunk-4a293c9a").then(a.bind(null,"a359"))}},created(){this.$eventHub.$on("update-comment",this.updateComment),this.$eventHub.$on("comment-delete-update",this.deleteComment)},beforeDestroy(){this.$eventHub.$off("update-comment"),this.$eventHub.$off("comment-delete-update")},methods:{...Object(c["b"])(["openModal"]),updateComment(t){const e=this.$_findIndex(t.id,this.threadComments);this.setNumberOfComments(e,t),this.threadComments.splice(e,1,t)},deleteComment(t){const e=this.$_findIndex(t,this.threadComments);this.fakeCommentCount+=-1,this.threadComments.splice(e,1)},setNumberOfComments(t,e){const a=this.threadComments[t].replies.length,i=e.replies.length,r=i-a;this.fakeCommentCount+=r}}},D=f,v=Object(d["a"])(D,_,m,!1,null,null,null),b=v.exports,y={name:"ThreadTeaser",components:{ThreadTeaserNoComments:h,ThreadTeaserWithComments:b},props:{itemId:{type:String,required:!0},itemCommentsCount:{type:Number,required:!0},itemUrl:{type:String,required:!0},popularComments:{type:Array,default:()=>[]},stickyHeader:{type:Boolean,default:!1}},data(){return{threadComments:[]}},created(){this.threadComments=this.popularComments,this.threadTeaserReady=!0}},C=y,w=Object(d["a"])(C,i,r,!1,null,null,null);e["default"]=w.exports},e374:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section section--article"},[a("div",{staticClass:"article_head"},[a("article-header",{attrs:{"article-id":t.articleData.id,"article-data":t.articleData,"article-type":t.articleData.article_type,"article-section-slug":t.articleSectionSlug}})],1),a("article",{staticClass:"article is-default"},[a("div",{staticClass:"article__body"},[void 0===t.articleData.image&&t.hasCoverGallery?a("article-cover-video",{attrs:{"article-gallery-data":t.coverGallery,"article-data":t.articleData}}):"gallery"===t.articleData.article_type||t.hasCoverGallery?a("article-cover-gallery",{attrs:{"article-data":t.articleData,"article-gallery-data":t.coverGallery}}):a("article-cover-photo",{attrs:{"article-image-data":t.articleImage}}),a("p",{staticClass:"article__lead_text"},[t._v(" "+t._s(t.articleData.lead_text)+" ")]),t.showArticleAds?a("div",{staticClass:"dfp_banner dfp_banner--rectangle_top"},[a("dfp-slot",{attrs:{unit:t.user.isPremium?"24m_rectangle_1_premium":"24m_rectangle_1"}})],1):t._e(),a("div",{staticClass:"article__main"},[a("div",{staticClass:"article__content_wrap is-clearfix",class:t.$_contentMaskClass},[a("article-content",{attrs:{"article-data":t.articleData,"article-id":t.articleData.id,"article-type":t.articleData.article_type,"article-content":t.articleContent,"article-section":t.$_article_returnSectionSlug(t.articleData.section),"article-subsection":t.$_article_returnSectionSlug(t.articleData.subsection),"article-keywords":t.articleData.keywords,"galleries-data":t.articleData.galleries,"x-related-articles":t.articleData.related_xinline_articles,"images-data":t.articleData.images,"videos-data":t.articleData.videos,"extra-content":t.articleData.extra_contents}}),t.articleData.is_locked?a("div",{staticClass:"piano_offer_inline",attrs:{id:"pianoOfferInline"}}):t._e(),"column"===t.articleData.article_type&&t.articleData.authors?a("router-link",{staticClass:"btn btn--all_columns is-rounded is-blue is-fluid has-text-centered",attrs:{to:{name:"Author",params:{slug:t.articleData.authors[0].slug,id:t.articleData.authors[0].id}}}},[t._v(" Vidi sve članke ovog autora ")]):t._e()],1)]),a("intersect",{on:{"~enter":function(e){return t.setStartArticleFeedLoad()}}},[a("div")]),"native"===t.articleData.article_type&&t.articleData.native?a("div",{staticClass:"article_sponsor--bottom"},[a("article-sponsor",{attrs:{"article-data":t.articleData,position:"article-content"}})],1):t._e(),"live"!==t.articleData.article_type&&t.displayAppPromoBlock?a(t.ArticleAppPromoBlock,{tag:"component"}):t._e(),"live"!==t.articleData.article_type&&t.articleData.keywords&&t.articleData.keywords.length?a("article-keywords",{attrs:{"keywords-data":t.articleData.keywords}}):t._e(),a("intersect",{on:{enter:function(e){t.engagementReachedBottom=!0,t.loadMidasData(!0)},leave:function(e){t.engagementReachedBottom=!1}}},[a("div",{staticClass:"js_stickyShareStop sticky_stop"})]),a("engagement-bar",{attrs:{"article-url":t.articleData.link,"page-url":t.articleData.link,"page-title":t.articleData.title,"page-lead":t.articleData.lead_text,"item-id":t.articleData.id,"has-comments":t.articleData.comment_count>0,"card-comment-count":t.articleData.comment_count,page:"article","content-type":"article","reached-bottom":t.engagementReachedBottom,"total-reaction-count":t.articleData.total_reaction_count,"popular-reactions":t.articleData.reactions,"own-reaction":t.articleData.own_reaction,"hide-thread":!t.articleData.is_for_comment}})],1)]),t.$_article_isLiveArticle?t._e():a("div",{staticClass:"article__extras_block"},[a("card",{staticClass:"article__more_from_section",attrs:{data:t.cardMidasData(0,"dedicated")}})],1),t.shouldShowThreadTeaser?a("thread-teaser",{attrs:{"item-id":t.$_article_articleId,"item-comments-count":t.articleData.comment_count,"item-url":t.articleData.link||""+t.articleData.id,"popular-comments":t.articleData.popular_comments}}):t._e(),t.showArticleAds&&!t.$_article_isInSpecialSection?a("div",{staticClass:"dfp_banner dfp_banner--rectangle_bot"},[t.user.isPremium?t._e():a("dfp-slot",{attrs:{unit:"24m_rectangle_3"}})],1):t._e(),t.$_article_isLiveArticle?t._e():a("div",{staticClass:"article__extras_block"},[t.showCustomMidas?a("div",{staticClass:"article__recommender"},[a("card",{attrs:{data:t.cardMidasData(0,"video")}}),a("card",{attrs:{data:t.cardMidasData(0,"native")}}),a("card",{attrs:{data:t.cardMidasData(0,"tes")}}),a("card",{attrs:{data:t.cardMidasData(0,"pr")}})],1):t._e(),t.showTemplatedFeed?a("article-feed",{class:{"has-disabled-comments":!t.articleData.is_for_comment,"article-feed":!0},attrs:{"article-id":t.articleData.id,"section-slug":t.articleSectionSlug,"is-section-special":t.$_article_isInSpecialSection,"should-load-ads":t.articleFeedBanners,"article-type":t.articleData.article_type}}):[t.feedSectionArticles.length?[a("article-extra-folds-mobile",{attrs:{"article-feed-banners":t.articleFeedBanners,"article-data":t.articleData,"num-articles":t.numOfFeedArticles-t.feedSectionArticles.length,"feed-section-articles":t.feedSectionArticles,"article-in-special-section":t.$_article_isInSpecialSection,"article-type":t.articleData.article_type}})]:t._e()]],2),t.$_article_isLiveArticle?a("div",{staticClass:"fold_article__livecast"},[a("div",{staticClass:"livearticle__events_wrap"},[a(t.ArticleLivecastHeader,{tag:"component",attrs:{"article-live-data":t.articleData.live,"article-section-slug":t.articleSectionSlug},on:{"events-show":t.toggleHilightedEvents}}),a(t.ArticleLivecast,{tag:"component",attrs:{"article-live-data":t.articleData.live,"article-section-slug":t.articleSectionSlug,"show-all-events":t.showAllEvents}})],1)]):t._e()],1)},r=[],s=a("cc39"),l=a("58f2"),c=a("4a67"),n=a("eb6c"),o=a("95da"),d=a("b2d9"),u=a("f910"),h=a("dbde"),_=a("a7a8"),m=a("b9d7"),p=a("c990"),g={name:"ArticleDefaultMobile",components:{ArticleHeader:c["a"],ArticleCoverGallery:n["a"],ArticleCoverPhoto:o["a"],ArticleCoverVideo:d["a"],ArticleContent:()=>a.e("chunk-314de286").then(a.bind(null,"49d7")),ArticleKeywords:u["a"],ThreadTeaser:h["default"],ArticleSponsor:()=>Promise.resolve().then(a.bind(null,"e935")),EngagementBar:m["default"],ArticleExtraFoldsMobile:_["a"],Card:()=>Promise.resolve().then(a.bind(null,"b4aa")),ArticleFeed:()=>Promise.all([a.e("chunk-314de286"),a.e("chunk-365c89d0")]).then(a.bind(null,"a64e"))},mixins:[s["b"],l["a"]],data(){return{engagementReachedBottom:!1,showAllEvents:!0,shouldGetFeedSectionArticles:"article"!==this.articleData.article_type}},computed:{articleBaseData(){return{articleUrl:this.articleData.link||""+this.articleData.id,articleId:this.articleData.id,articleSection:this.articleData.section?this.articleData.section.name:"",articleSectionSlug:this.articleSectionSlug,articleSubsection:this.$_article_returnSectionSlug(this.articleData.subsection),articleKeywords:this.articleData.keywords,articleLabel:this.articleData.label,articleTitle:this.articleData.title,articleLead:this.articleData.lead_text,articleCommentsCount:this.articleData.comment_count}},ArticleLivecastHeader(){return()=>a.e("chunk-63955faa").then(a.bind(null,"ff40"))},ArticleLivecast(){return()=>a.e("chunk-63955faa").then(a.bind(null,"fb37"))},articleImage(){const t={url:"/media/images/2020-23/placeholder-24sata.png",author:"24sata"};return this.articleData.cover_image||this.articleData.image||t},articleFeedBanners(){return Object(p["e"])(this.articleData.article_type)},showCustomMidas(){return this.articleFeedBanners&&!this.$_article_isInSpecialSection&&"article"!==this.articleData.article_type},ArticleAppPromoBlock(){return()=>a.e("chunk-63955faa").then(a.bind(null,"b522"))}},watch:{articleBaseData:{handler(){localStorage.setItem("adata",JSON.stringify(this.articleBaseData))},deep:!0}},mounted(){this.checkLocalStorage()},methods:{loadMidasData(t=!1){this.cardsMidas.length||!this.showCustomMidas&&!t||this.loadCardsMidas(["video","native","tes","pr","dedicated"])},checkLocalStorage(){const t=localStorage.getItem("adata"),e=JSON.stringify(this.articleBaseData);t&&t===e||localStorage.setItem("adata",e)},toggleHilightedEvents(){this.showAllEvents=!this.showAllEvents}}},f=g,D=a("2877"),v=Object(D["a"])(f,i,r,!1,null,null,null);e["default"]=v.exports},e935:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.articleData.native.client_name||t.articleData.native.logo_image||t.articleData.native.client_label?a("vue-link",{staticClass:"article_sponsor",class:{"has-border-top":"article-header"===t.position,"is-top":"longform"!=t.articleData.article_type&&t.articleData.native.client_name,"has-link":t.articleData.native.logo_url},attrs:{to:t.articleData.native.logo_url?t.articleData.native.logo_url:"",target:t.linkTarget}},[a("p",{staticClass:"article_sponsor__label"},[t._v(" "+t._s(t.articleSponsorLabel)+" "),t.articleData.native.client_name?a("span",[t._v(" "+t._s(t.articleData.native.client_name)+" ")]):t._e()]),t.articleData.native.logo_image?a("span",{staticClass:"article_sponsor__img_wrap"},[a("app-image",{staticClass:"article_sponsor__img",attrs:{"intersection-options":{rootMargin:"350px 0px 350px 0px"},src:t.articleData.native.logo_image.url,w:0,h:72,alt:t.articleData.native.client_name}})],1):t._e()]):t._e()},r=[],s=a("9071"),l=a.n(s),c={name:"ArticleSponsor",components:{VueLink:l.a},props:{articleData:{type:Object,required:!0},position:{type:String,default:""}},computed:{articleSponsorLabel(){return this.articleData.native.client_label||"Powered by:"},linkTarget(){return this.articleData.native.logo_url&&this.articleData.native.logo_url.startsWith("http")?"_blank":"_self"}}},n=c,o=a("2877"),d=Object(o["a"])(n,i,r,!1,null,null,null);e["default"]=d.exports},eb6c:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article__gallery"},[a("router-link",{staticClass:"article__gallery_link",attrs:{to:{name:"Gallery",params:{section:t.articleData.section&&t.articleData.section.slug||"",slug:t.articleData.slug,aid:t.articleData.id,id:t.articleGalleryData.id}}}},[a("figure",{staticClass:"article__figure image",class:t.$_setImageRatio(t.isMob)},[t.imgSrc?a("div",{staticClass:"article__image_wrap"},[a("img",{staticClass:"article__figure_img",attrs:{src:t.imgSrc,alt:t.articleData.image.title,width:t.isMob?"414":"622",height:t.isMob?"276":"345"}}),a("div",{staticClass:"article__gallery_count"},[a("app-icon",{attrs:{"icon-name":"icon-camera"}}),t._v(" "+t._s(t.articleGalleryData.item_count)+" ")],1)]):t._e(),a("image-video-metadata",{attrs:{dataset:t.articleData.image,"inline-media-data":t.articleData.image,media:"image",page:"article"}})],1)])],1)},r=[],s=a("2f62"),l=a("af18"),c={name:"ArticleCoverGallery",components:{ImageVideoMetadata:()=>a.e("chunk-63955faa").then(a.bind(null,"51e1"))},mixins:[l["a"]],props:{articleData:{type:Object,required:!0},articleGalleryData:{type:Object,required:!0}},computed:{...Object(s["c"])(["isMob","isDesk"])},created(){const t={src:this.articleData.image.url,crop:this.articleData.image.crop,w:this.isDesk?1243:1200,h:this.isDesk?700:800};this.$_thumbor_getImgSrc(t).then(t=>{this.imgSrc=t})}},n=c,o=a("2877"),d=Object(o["a"])(n,i,r,!1,null,null,null);e["a"]=d.exports},ec0d:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.imageReady?a("div",{staticClass:"gallery__image",attrs:{id:t.imageData.image.id,itemscope:"",itemtype:"https://schema.org/ImageGallery","data-pswp-uid":t.imageData.image.id}},[a("figure",{attrs:{itemprop:"associatedMedia",itemscope:"",itemtype:"https://schema.org/ImageObject",src:t.imgSrc,"data-index":0},on:{click:function(e){return t.onThumbnailsClick()}}},[a("a",{attrs:{href:t.imgSrc,itemprop:"contentUrl","data-size":(t.isMob?621:1920)+"x0",title:t.imageData.image.title}},[a("v-photo",{attrs:{"intersection-options":{rootMargin:"350px 0px 350px 0px"},src:t.imgSrc,alt:t.imageData.image.title,itemprop:"thumbnail"}})],1),a("image-video-metadata",{attrs:{dataset:t.imageData,page:"gallery"}})],1)]):t._e()},r=[],s=a("2f62"),l=a("af18"),c={name:"GalleryImage",components:{ImageVideoMetadata:()=>a.e("chunk-63955faa").then(a.bind(null,"51e1"))},mixins:[l["a"]],props:{imageData:{type:Object,required:!0}},data(){return{imageReady:!1}},computed:{...Object(s["c"])(["isMob"])},mounted(){this.$_thumbor_getImgSrc({src:this.imageData.image.url,w:this.isMob?621:1920,h:0}).then(t=>{this.imgSrc=t,this.imageReady=!0})},methods:{onThumbnailsClick(){this.$eventHub.$emit("pswp-init")}}},n=c,o=a("2877"),d=Object(o["a"])(n,i,r,!1,null,null,null);e["a"]=d.exports},efd5:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return s})),a.d(e,"c",(function(){return l}));var i=a("4023");const r=t=>{const e=i["browserNavigated"].map(t=>window.location.pathname.includes(t)),a=window.location.pathname.includes("/flatpages"),r=window.location.pathname.includes("/tagovi/"),s="Article"===t;return!a&&e.includes(!0)&&!r&&!s},s=()=>({width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight});function l(t){return!!t.live&&"live"===t.article_type}},f8df:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"photoSwipe_"+t._uid,staticClass:"pswp",attrs:{tabindex:"-1",role:"dialog","aria-hidden":"true"}},[a("div",{staticClass:"pswp__bg"}),t._m(0)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pswp__scroll-wrap"},[a("div",{staticClass:"pswp__container"},[a("div",{staticClass:"pswp__item"}),a("div",{staticClass:"pswp__item"}),a("div",{staticClass:"pswp__item"})]),a("div",{staticClass:"pswp__ui pswp__ui--hidden"},[a("div",{staticClass:"pswp__top-bar"},[a("div",{staticClass:"pswp__counter"}),a("button",{staticClass:"pswp__button pswp__button--close",attrs:{title:"Close (Esc)"}}),a("button",{staticClass:"pswp__button pswp__button--share",attrs:{title:"Share"}}),a("button",{staticClass:"pswp__button pswp__button--fs",attrs:{title:"Toggle fullscreen"}}),a("button",{staticClass:"pswp__button pswp__button--zoom",attrs:{title:"Zoom in/out"}}),a("div",{staticClass:"pswp__preloader"},[a("div",{staticClass:"pswp__preloader__icn"},[a("div",{staticClass:"pswp__preloader__cut"},[a("div",{staticClass:"pswp__preloader__donut"})])])])]),a("div",{staticClass:"pswp__share-modal pswp__share-modal--hidden pswp__single-tap"},[a("div",{staticClass:"pswp__share-tooltip"})]),a("button",{staticClass:"pswp__button pswp__button--arrow--left",attrs:{title:"Previous (arrow left)"}}),a("button",{staticClass:"pswp__button pswp__button--arrow--right",attrs:{title:"Next (arrow right)"}}),a("div",{staticClass:"pswp__caption"},[a("div",{staticClass:"pswp__caption__center"})])])])}],s=a("b24f"),l=a.n(s),c=a("14fd"),n=a.n(c),o={name:"VuePhotoSwipe",props:{options:{default:()=>({}),type:Object}},data(){return{pswp:null}},created(){this.$eventHub.$on("pswp-init",this.onThumbnailsClick)},beforeDestroy(){this.$eventHub.$off("pswp-init")},mounted(){this.initPhotoSwipeFromDOM()},methods:{prepareItem(t){if(t.w<1||t.h<1){const e=new Image;e.onload=()=>{t.w=e.width,t.h=e.height,this.pswp.updateSize(!0)},e.src=t.src}},parseThumbnailElements(t){const e=t.childNodes,a=e.length,i=[];let r,s,l,c;for(let n=0;n<a;n++)r=e[n],1===r.nodeType&&(s=r.children[0],l=s.getAttribute("data-size").split("x"),c={src:s.getAttribute("href"),w:parseInt(l[0],10),h:parseInt(l[1],10),title:s.getAttribute("title")},r.children.length>1&&(c.title=r.children[1].innerHTML),s.children.length>0&&(c.msrc=s.children[0].getAttribute("src")),c.el=r,i.push(c));return i},closest(t,e){return t&&(e(t)?t:this.closest(t.parentNode,e))},onThumbnailsClick(t){t=t||window.event,t.preventDefault();const e=t.target||t.srcElement,a=this.closest(e,t=>t.tagName&&"FIGURE"===t.tagName.toUpperCase());if(!a)return;const i=a.parentNode,r=parseInt(a.getAttribute("data-index"),10);return r>=0&&this.openPhotoSwipe(r,i),!1},openPhotoSwipe(t,e,a,i){const r=this.$refs["photoSwipe_"+this._uid],s=this.parseThumbnailElements(e),c={index:t,galleryUID:e.getAttribute("data-pswp-uid"),getThumbBoundsFn(t){const e=s[t].el.getElementsByTagName("img")[0],a=window.pageYOffset||document.documentElement.scrollTop,i=e.getBoundingClientRect();return{x:i.left,y:i.top+a,w:i.width}}},o={...this.options,...c};if(i)if(c.galleryPIDs){for(let l=0;l<s.length;l++)if(s[l].pid===t){c.index=l;break}}else c.index=parseInt(t,10)-1;else c.index=parseInt(t,10);Number.isNaN(c.index)||(a&&(c.showAnimationDuration=0),this.pswp=new l.a(r,n.a,s,o),this.pswp.listen("gettingData",(t,e)=>{this.prepareItem(e)}),this.pswp.listen("afterInit",()=>{document.getElementsByTagName("html")[0].classList.add("lockScroll")}),this.pswp.listen("destroy",()=>{document.getElementsByTagName("html")[0].classList.remove("lockScroll")}),this.pswp.init())},photoswipeParseHash(){const t=window.location.hash.substring(1),e={};if(t.length<5)return e;const a=t.split("&");for(let i=0;i<a.length;i++){if(!a[i])continue;const t=a[i].split("=");t.length<2||(e[t[0]]=t[1])}return e},initPhotoSwipeFromDOM(){const t=this.photoswipeParseHash(),e=document.getElementById(t.gid);t.pid&&t.gid&&this.openPhotoSwipe(t.pid,e,!0,!0)}}},d=o,u=a("2877"),h=Object(u["a"])(d,i,r,!1,null,null,null);e["a"]=h.exports}}]);   
                
            </div>

        
    </div>

    


<div class="component__cta">
    <div class="component__group">
        <div class="cta">
            <div class="cta__title">
                Važna obavijest
                <div class="cta__tooltip">
                    



<div class="tooltip">
    <div class="tooltip__icon">
        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><g stroke="#e41e27" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m8 15.0954c3.866 0 7-3.1554 7-7.04769 0-3.89234-3.134-7.04771-7-7.04771-3.86599 0-7 3.15537-7 7.04771 0 3.89229 3.13401 7.04769 7 7.04769z"/><path d="m8 5.22852v2.81908"/><path d="m8 10.8672h.008"/></g></svg>
    </div>
    <div class="tooltip__hoverable">
        <div class="tooltip__text">
            Sukladno članku 94. Zakona o elektroničkim medijima, komentiranje članaka na web portalu i mobilnim aplikacijama Vecernji.hr dopušteno je samo registriranim korisnicima. Svaki korisnik koji želi komentirati članke obvezan je prethodno se upoznati s <a href="https://www.vecernji.hr/pravila-komentiranja/">Pravilima komentiranja</a> na web portalu i mobilnim aplikacijama Vecernji.hr te sa <a href="https://www.vecernji.hr/zakon-o-elektronickim-medijima/">zabranama propisanim stavkom 2. članka 94. Zakona.</a>
        </div>
    </div>
</div>


                </div>
            </div>

            
                <div class="cta__text">
                    <p>Za komentiranje je potrebna prijava/registracija. Ako nemate korisnički račun, izaberite jedan od dva ponuđena načina i registrirajte se u par brzih koraka.</p>
                </div>
            
        </div>
    </div>
    <div class="component__group">
        <div class="button-group">
            
                <div class="button-group__item">
                    <a href="/korisnici/login" class="button button--alpha">Prijavite se</a>
                </div>
                <div class="button-group__item">
                    <a href="/korisnici/registracija" class="button button--alpha">Registrirajte se</a>
                </div>
            
        </div>
    </div>
</div>

    
</div>

		
	
</div>


                        
                        
                        



                        



                    </div>
                    <aside class="grid__item grid__item--4of12">
                        <div class="grid__row grid__row--sticky column__tabs--bg">
                            
























<div class="component component--light component--side js-tabs">
    <div class="component__head">
        <div class="tabs">
            <a class="tabs__tab js-tab is-active" href="#najcitanije">Najčitanije</a>
            <a class="tabs__tab js-tab" href="#najnovije">Najnovije</a>
            <span class="tabs__active-indicator js-indicator"></span>
        </div>
    </div>
    <div class="component__content">
        <div class="tabs-content">
            
            <div id="najcitanije" class="tabs-content__item is-active">
                <div class="card-group">
                    
                    
                    
                        



<div class="card-group">
    
        <div class="card-group__item">
            




<article class="card  card--icons-small card--size-small card--type-horizontal-reverse">
    <a class="card__link" href="/vijesti/za-cijelu-hrvatsku-danas-upaljen-meteoalarm-no-pravo-pogorsanje-tek-nam-stize-1745031" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/f2/62/1bfd9c638827f3d9d31b.jpeg" alt="Noćni pljusak u Splitu" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/f2/62/1bfd9c638827f3d9d31b.jpeg"
    
    data-srcset="/media/img/f2/62/1bfd9c638827f3d9d31b.jpeg 1280w, /media/img/ag/2c/e34c544e6282a68ea829.jpeg 612w, /media/img/6d/07/96c3129de22afdb97f19.jpeg 305w"
    
    alt="Noćni pljusak u Splitu"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
    
        <div class="card__ordinal-nr">
            <div class="ordinal-nr">
                1
            </div>
        </div>
    

                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                Promjena vremena
            
            </div>
            
            <h3 class="card__title">
                Za cijelu Hrvatsku danas upaljen meteoalarm, no pravo pogoršanje tek nam stiže
            </h3>

            
            

            
            

        </div>
    </a>
</article>

        </div>
    
        <div class="card-group__item">
            




<article class="card  card--icons-small card--size-small card--type-horizontal-reverse">
    <a class="card__link" href="/vijesti/cekaonice-su-bile-prazne-kako-su-lijecnici-odbili-novinarku-vecernjeg-jer-nije-njihova-pacijentica-1744952" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/38/ba/07d0345df38ca44ef2a3.jpeg" alt="Gripa" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/38/ba/07d0345df38ca44ef2a3.jpeg"
    
    data-srcset="/media/img/38/ba/07d0345df38ca44ef2a3.jpeg 1280w, /media/img/d8/58/c9c1ecce0fccd51a4573.jpeg 612w, /media/img/b0/f4/78911e66768fc7419a40.jpeg 305w"
    
    alt="Gripa"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
    
        <div class="card__ordinal-nr">
            <div class="ordinal-nr">
                2
            </div>
        </div>
    

                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                dežurstva vikendom
            
            </div>
            
            <h3 class="card__title">
                Čekaonice su bile prazne: Kako su liječnici odbili novinarku Večernjeg jer nije njihova pacijentica
            </h3>

            
            

            
            

        </div>
    </a>
</article>

        </div>
    
        <div class="card-group__item">
            




<article class="card  card--icons-small card--size-small card--type-horizontal-reverse">
    <a class="card__link" href="/vijesti/zapoceo-novi-proces-premjestanje-stanovnistva-iz-zagreba-u-okolicu-1744932" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/f3/c0/f149f26cddd20492f922.jpeg" alt="" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/f3/c0/f149f26cddd20492f922.jpeg"
    
    data-srcset="/media/img/f3/c0/f149f26cddd20492f922.jpeg 1280w, /media/img/57/98/1ba9737a90e0d3327a9c.jpeg 612w, /media/img/b8/69/6a83dd8357afea847e8c.jpeg 305w"
    
    alt=""
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
    
        <div class="card__ordinal-nr">
            <div class="ordinal-nr">
                3
            </div>
        </div>
    

                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                više nije atraktivan
            
            </div>
            
            <h3 class="card__title">
                Sve više stanovnika odlazi iz Zagreba, najprivlačnije su im ove destinacije
            </h3>

            
            

            
            

        </div>
    </a>
</article>

        </div>
    
        <div class="card-group__item">
            




<article class="card  card--icons-small card--size-small card--type-horizontal-reverse">
    <a class="card__link" href="/vijesti/hercegovac-milenko-u-njemackoj-ostvario-djecacki-san-gotovo-svake-godine-kuci-ide-novim-mercedesom-1745161" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/71/86/ec4f9571cb180b47198a.jpeg" alt="Milenko Vrcan" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/71/86/ec4f9571cb180b47198a.jpeg"
    
    data-srcset="/media/img/71/86/ec4f9571cb180b47198a.jpeg 1280w, /media/img/35/4c/e17999e68f1a69311561.jpeg 612w, /media/img/53/70/0f989295747fad6e02eb.jpeg 305w"
    
    alt="Milenko Vrcan"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
    
        <div class="card__ordinal-nr">
            <div class="ordinal-nr">
                4
            </div>
        </div>
    

                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                &#39;NEKIMA SE TO NEĆE SVIDJETI...&#39;
            
            </div>
            
            <h3 class="card__title">
                Hercegovac Milenko u Njemačkoj ostvario dječački san: Gotovo svake godine kući ide novim Mercedesom
            </h3>

            
            

            
            

        </div>
    </a>
</article>

        </div>
    
        <div class="card-group__item">
            




<article class="card  card--icons-small card--size-small card--type-horizontal-reverse">
    <a class="card__link" href="/vijesti/putinov-intervju-desetljeca-je-veliko-sirenje-propagande-carlson-ga-je-pritisnuo-samo-u-ovom-trenutku-1745026" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/f4/ac/5879b6f7340cfb5ed6b9.jpeg" alt="Vladimir Putin i Tucker Carlson" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/f4/ac/5879b6f7340cfb5ed6b9.jpeg"
    
    data-srcset="/media/img/f4/ac/5879b6f7340cfb5ed6b9.jpeg 1280w, /media/img/93/56/2712b9e232a9126814de.jpeg 612w, /media/img/8c/9b/816061ed70d3a067f5e0.jpeg 305w"
    
    alt="Vladimir Putin i Tucker Carlson"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
    
        <div class="card__ordinal-nr">
            <div class="ordinal-nr">
                5
            </div>
        </div>
    

                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                ANALIZA CNN-A
            
            </div>
            
            <h3 class="card__title">
                VIDEO &#39;Očito je zašto je Putin pristao na intervju upravo s Carlsonom&#39;
            </h3>

            
            

            
            

        </div>
    </a>
</article>

        </div>
    
</div>

                    
                </div>
            </div>
            
            
            <div id="najnovije" class="tabs-content__item">
                <div class="card-group">
                    
                        
                        
                            



<div class="card-group">
    
        <div class="card-group__item">
            




<article class="card  card--icons-small card--size-small card--type-horizontal-reverse">
    <a class="card__link" href="/vijesti/nepoznati-michelangelo-tajna-sobe-ispod-sakristije-bazilike-san-lorenzo-1745083" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/ed/72/d1b4f265a6517105ce10.jpeg" alt="" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/ed/72/d1b4f265a6517105ce10.jpeg"
    
    data-srcset="/media/img/ed/72/d1b4f265a6517105ce10.jpeg 1280w, /media/img/ff/2e/c411b433e48d86038aa7.jpeg 612w, /media/img/9c/37/24acf9435a895fe3fa4f.jpeg 305w"
    
    alt=""
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                            <div class="card__icon card__icon--premium">
                                Premium sadržaj
                            </div>
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                bogataš koji je živio u siromaštvu
            
            </div>
            
            <h3 class="card__title">
                Nepoznati Michelangelo: Tajna sobe ispod sakristije bazilike San Lorenzo
            </h3>

            
            

            
            

        </div>
    </a>
</article>

        </div>
    
        <div class="card-group__item">
            




<article class="card  card--icons-small card--size-small card--type-horizontal-reverse">
    <a class="card__link" href="/vijesti/stipic-ovdje-smo-zbog-koeficijenata-i-to-je-tek-pocetak-1745220" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/39/be/0cf747589ee7af47ba8a.jpeg" alt="Zagreb: Veliki prosvjed prosvjetara na Trgu svetog Marka" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/39/be/0cf747589ee7af47ba8a.jpeg"
    
    data-srcset="/media/img/39/be/0cf747589ee7af47ba8a.jpeg 1280w, /media/img/6b/39/6eb72871bf2abc12ca84.jpeg 612w, /media/img/93/04/9f4014dd003282af2aad.jpeg 305w"
    
    alt="Zagreb: Veliki prosvjed prosvjetara na Trgu svetog Marka"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                        
                        
                    </div>

                    
                        
                            











    
        
    



    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                PROSVJED UČITELJA NA MARKOVOM TRGU
            
            </div>
            
            <h3 class="card__title">
                Stipić: &#39;Ovdje smo zbog koeficijenata, i to je tek početak&#39;
            </h3>

            
            

            
            

        </div>
    </a>
</article>

        </div>
    
        <div class="card-group__item">
            




<article class="card  card--icons-small card--size-small card--type-horizontal-reverse">
    <a class="card__link" href="/vijesti/foto-meloni-popustila-pritiscima-farmeri-stigli-do-rima-traktorima-prosli-pokraj-koloseja-1745221" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/4d/d0/2fb573ea93850ed3ef20.jpeg" alt="Farmers protest over price pressures, taxes and green regulation, in Rome" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/4d/d0/2fb573ea93850ed3ef20.jpeg"
    
    data-srcset="/media/img/4d/d0/2fb573ea93850ed3ef20.jpeg 1280w, /media/img/17/b0/3416d18042da4e19e2ef.jpeg 612w, /media/img/e5/8a/aa1968c17ea8c0e2562e.jpeg 305w"
    
    alt="Farmers protest over price pressures, taxes and green regulation, in Rome"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                        
                        
                    </div>

                    
                        
                            











    
        
    



    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                TRAŽE ODGOVORE
            
            </div>
            
            <h3 class="card__title">
                FOTO Meloni popustila pritiscima: Farmeri stigli do Rima, traktorima prošli pokraj Koloseja
            </h3>

            
            

            
            

        </div>
    </a>
</article>

        </div>
    
        <div class="card-group__item">
            




<article class="card  card--icons-small card--size-small card--type-horizontal-reverse">
    <a class="card__link" href="/vijesti/svijet-je-sve-umorniji-od-prizemnog-politikantstva-u-washingtonu-1744930" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/ab/55/388bd74760e1bfc8f3c8.jpeg" alt="" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/ab/55/388bd74760e1bfc8f3c8.jpeg"
    
    data-srcset="/media/img/ab/55/388bd74760e1bfc8f3c8.jpeg 1280w, /media/img/91/60/2cbfab3554777100d0c0.jpeg 612w, /media/img/03/56/4014aef24f7f414bed1e.jpeg 305w"
    
    alt=""
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                            <div class="card__icon card__icon--premium">
                                Premium sadržaj
                            </div>
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                DINO BRUMEC
            
            </div>
            
            <h3 class="card__title">
                Svijet je sve umorniji od prizemnog politikantstva u Washingtonu
            </h3>

            
            

            
            

        </div>
    </a>
</article>

        </div>
    
        <div class="card-group__item">
            




<article class="card  card--icons-small card--size-small card--type-horizontal-reverse">
    <a class="card__link" href="/vijesti/foto-video-policija-o-detaljima-potrage-za-krijumcarima-bjezali-preko-livade-obojica-su-uhicena-1745216" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/e6/b8/d9c8569131737ada56ea.jpeg" alt="Kod Nove Gradiške bježali od policije vozilom u kojem je otkriveno nekoliko migranata" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/e6/b8/d9c8569131737ada56ea.jpeg"
    
    data-srcset="/media/img/e6/b8/d9c8569131737ada56ea.jpeg 1280w, /media/img/f2/05/3e062c6e6a6ce79e8dda.jpeg 612w, /media/img/bf/f6/d3861c7bf7a55bff2cda.jpeg 305w"
    
    alt="Kod Nove Gradiške bježali od policije vozilom u kojem je otkriveno nekoliko migranata"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                kod N. Gradiške
            
            </div>
            
            <h3 class="card__title">
                FOTO/VIDEO Policija o detaljima potrage za krijumčarima: Bježali preko livade, obojica su uhićena
            </h3>

            
            

            
            

        </div>
    </a>
</article>

        </div>
    
</div>

                        
                    
                </div>
            </div>
            
        </div>
    </div>
</div>

                        </div>
                    </aside>
                </div>
            </div>
        </article>
    </div>
</section>



    



<section class="block block--light">
    <div class="block__inner">
        <div class="component">
            <div class="component__head">
                <h2 class="title">Ne propustite</h2>
            </div>
            <div class="component__content">
                <div class="grid grid--down grid--auto">
                    
                    <div class="grid__item grid__item--2of12">
                        




<article class="card  card--size-small-up">
    <a class="card__link" href="/vijesti/za-cijelu-hrvatsku-danas-upaljen-meteoalarm-no-pravo-pogorsanje-tek-nam-stize-1745031" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/f2/62/1bfd9c638827f3d9d31b.jpeg" alt="Noćni pljusak u Splitu" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/f2/62/1bfd9c638827f3d9d31b.jpeg"
    
    data-srcset="/media/img/f2/62/1bfd9c638827f3d9d31b.jpeg 1280w, /media/img/ag/2c/e34c544e6282a68ea829.jpeg 612w, /media/img/6d/07/96c3129de22afdb97f19.jpeg 305w"
    
    alt="Noćni pljusak u Splitu"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                Promjena vremena
            
            </div>
            
            <h3 class="card__title">
                Za cijelu Hrvatsku danas upaljen meteoalarm, no pravo pogoršanje tek nam stiže
            </h3>

            
            

            
            

        </div>
    </a>
</article>

                    </div>
                    
                    <div class="grid__item grid__item--2of12">
                        




<article class="card  card--size-small-up">
    <a class="card__link" href="/sport/rijeci-stize-novo-pakleno-oruzje-u-borbi-za-titulu-ovo-bi-hajduku-i-dinamu-do-kraja-uneredilo-planove-1744988" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/15/c1/41a322fb16458353c243.jpeg" alt="storyeditor/2024-02-08/PXL_280124_109252402.jpg" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/15/c1/41a322fb16458353c243.jpeg"
    
    data-srcset="/media/img/15/c1/41a322fb16458353c243.jpeg 1280w, /media/img/5c/99/3235ee449f821a14b571.jpeg 612w, /media/img/d0/8e/8444817973e86676713e.jpeg 305w"
    
    alt="storyeditor/2024-02-08/PXL_280124_109252402.jpg"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                        
                        
                    </div>

                    
                        
                            











    
        
    



    
        <div class="card__comments-nr">8</div>
    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                FINIŠ MERCATA
            
            </div>
            
            <h3 class="card__title">
                Rijeci stiže novo pakleno oružje u borbi za titulu? Ovo bi Hajduku i Dinamu do kraja poremetilo planove
            </h3>

            
            

            
            

        </div>
    </a>
</article>

                    </div>
                    
                    <div class="grid__item grid__item--2of12">
                        




<article class="card  card--size-small-up">
    <a class="card__link" href="/vijesti/cekaonice-su-bile-prazne-kako-su-lijecnici-odbili-novinarku-vecernjeg-jer-nije-njihova-pacijentica-1744952" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/38/ba/07d0345df38ca44ef2a3.jpeg" alt="Gripa" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/38/ba/07d0345df38ca44ef2a3.jpeg"
    
    data-srcset="/media/img/38/ba/07d0345df38ca44ef2a3.jpeg 1280w, /media/img/d8/58/c9c1ecce0fccd51a4573.jpeg 612w, /media/img/b0/f4/78911e66768fc7419a40.jpeg 305w"
    
    alt="Gripa"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    
        <div class="card__comments-nr">23</div>
    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                dežurstva vikendom
            
            </div>
            
            <h3 class="card__title">
                Čekaonice su bile prazne: Kako su liječnici odbili novinarku Večernjeg jer nije njihova pacijentica
            </h3>

            
            

            
            

        </div>
    </a>
</article>

                    </div>
                    
                    <div class="grid__item grid__item--2of12">
                        




<article class="card  card--size-small-up">
    <a class="card__link" href="/vijesti/zapoceo-novi-proces-premjestanje-stanovnistva-iz-zagreba-u-okolicu-1744932" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/f3/c0/f149f26cddd20492f922.jpeg" alt="" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/f3/c0/f149f26cddd20492f922.jpeg"
    
    data-srcset="/media/img/f3/c0/f149f26cddd20492f922.jpeg 1280w, /media/img/57/98/1ba9737a90e0d3327a9c.jpeg 612w, /media/img/b8/69/6a83dd8357afea847e8c.jpeg 305w"
    
    alt=""
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    
        <div class="card__comments-nr">28</div>
    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                više nije atraktivan
            
            </div>
            
            <h3 class="card__title">
                Sve više stanovnika odlazi iz Zagreba, najprivlačnije su im ove destinacije
            </h3>

            
            

            
            

        </div>
    </a>
</article>

                    </div>
                    
                    <div class="grid__item grid__item--2of12">
                        




<article class="card  card--size-small-up">
    <a class="card__link" href="/sport/dinamo-dovodi-novo-veliko-pojacanje-povratak-poznatog-lica-na-maksimir-1745079" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/14/1b/b7fcbb76a8580c311fd2.jpeg" alt="Zagreb: MAXtv 1. HNL, 06. kolo, GNK Dinamo - RNK Split" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/14/1b/b7fcbb76a8580c311fd2.jpeg"
    
    data-srcset="/media/img/14/1b/b7fcbb76a8580c311fd2.jpeg 1280w, /media/img/91/47/d8b2a1f599d75a12c698.jpeg 612w, /media/img/c8/9f/b6bd02f8eb1961488876.jpeg 305w"
    
    alt="Zagreb: MAXtv 1. HNL, 06. kolo, GNK Dinamo - RNK Split"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    
        <div class="card__comments-nr">8</div>
    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                MARKO ROG
            
            </div>
            
            <h3 class="card__title">
                Dinamo dovodi novo veliko pojačanje?! Povratak poznatog lica na Maksimir
            </h3>

            
            

            
            

        </div>
    </a>
</article>

                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</section>


    <section class="block">
        <div class="block__inner">
            <div class="grid">
                <div class="grid__item grid__item--8of12">

                    

                    <div class="banner banner--belowarticle">
                        <div id='divBelowArticle'>
    <script type='text/javascript'>
        googletag.cmd.push(function() { googletag.display('divBelowArticle'); });
    </script>
</div>

                    </div>

                </div>
                <div class="grid__item grid__item--4of12 grid__item--300">
                    <div class="grid__row grid__row--sticky">
                        





<div class="banner">
    <div id='divRectangle3'>
    <script type='text/javascript'>
        googletag.cmd.push(function() { googletag.display('divRectangle3'); });
    </script>
</div>

    <div id='divHalfpage3'>
    <script type='text/javascript'>
        googletag.cmd.push(function() { googletag.display('divHalfpage3'); });
    </script>
</div>

</div>

                    </div>
                </div>

                <div id="report-bug" class="mfp-hide">
    <div class="form">
        <div class="form__box">
            <div class="form__head form__head--center">               
                <div class="form__steps-content">
                    <h1 class="form__title">Želite prijaviti greške?</h1>
                </div>
            </div>
            
            <div class="form__body">
                <form>
                    <input type="hidden" name="csrfmiddlewaretoken" value="phOQ1YLcqdEI2W0QkUb6VpMGSRIKxTqy0ZpjZkKGpJz4joJ0v418rgHb9NxrefqQ">

                    <input type="hidden" name="pk" value="1741447">
                    <input type="hidden" name="app" value="content">
                    <input type="hidden" name="model" value="article">

                    <div class="form__element is-required">
                        <div class="form__row">
                            <label class="label label--required" for="correction">Opis događaja</label>
                        </div>
                        <div class="form__row">
                            <textarea rows="7" class="input form__textarea js-correction" type="text" name="correction" id="correction" placeholder="Unesite opis događaja..."></textarea>
                        </div>
                    </div>

                    <div class="form__element form__element--space">
                        <a href="#" class="button button--beta js-reportBug">Pošalji</a>
                    </div>

                </form>

            </div>
        </div>
    </div>
</div>


            </div>
        </div>
    </section>

    
    <section class="block">
        <div class="block__inner">
            
                <div class="tes-widget">
                    
    <div id="_tes_vl_clanak"></div>
    <script>
        function loadTESScript(src, callback){
            var ready = false, st = document.createElement('script'); st.type = 'text/javascript'; st.async = true; st.src = src;
            st.onload = st.onreadystatechange = function() {
                if ( !ready && (!this.readyState || this.readyState == 'complete') )
                { ready = true; callback(); }
            };
            var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(st, s);
        }
        function initTESScript(){
            loadTESScript('//traffic.styria.hr/scripts/widget_async.js', function(){
                let css_file ='//www.vecernji.hr/static/vlredesign/css/tes.css';
                if('dark' == localStorage.getItem('vl-theme')) {
                    css_file = css_file.replace('.css', '_dark.css');
                }
                _tes.display({
                    code: 'vl_vijesti_partnerski_clanak_redesign',
                    widgetWidth: '100%',
                    widgetHeight: '361',
                    elementId: '_tes_vl_clanak',
                    custom_css: css_file
                });
            });
        }
        initTESScript();
    </script>


                </div>
            
        </div>
    </section>
    

    




    
        
            




<section class="block block--light">
    <div class="block__inner">
        <div class="component">
            <div class="component__head">
                <div class="component__group">
                    <h2 class="title title--small-down">
                        <a href="/premium">Premium korisnici čitaju</a>
                    </h2>
                </div>
                <div class="component__group">
                    <a href="/premium" class="text-link">Vidi sve</a>
                </div>
            </div>
            <div class="component__content">
                <div class="grid grid--down grid--auto">
                    
                    <div class="grid__item grid__item--2of12">
                        




<article class="card  card--border-top-down card--icons-small-down card--size-small card--type-horizontal-reverse-down">
    <a class="card__link" href="/vijesti/stalni-godisnji-dodatak-na-mirovinu-od-10-eura-po-godini-staza-veci-majcinski-dodatak-1744657" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/e8/eb/ecb164916c193cef83d5.jpeg" alt="storyeditor/2024-02-01/PXL_260422_93175917.jpg" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/e8/eb/ecb164916c193cef83d5.jpeg"
    
    data-srcset="/media/img/e8/eb/ecb164916c193cef83d5.jpeg 1280w, /media/img/91/a0/00011e582cf06e324f53.jpeg 612w, /media/img/f4/03/f9171fa509634b7d2792.jpeg 305w"
    
    alt="storyeditor/2024-02-01/PXL_260422_93175917.jpg"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                            <div class="card__icon card__icon--premium">
                                Premium sadržaj
                            </div>
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    
        <div class="card__comments-nr">18</div>
    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                nova formula usklađenja
            
            </div>
            
            <h3 class="card__title">
                Stalni godišnji dodatak na mirovinu od 10 eura po godini staža, veći majčinski dodatak?
            </h3>

            
            

            
            

        </div>
    </a>
</article>

                    </div>
                    
                    <div class="grid__item grid__item--2of12">
                        




<article class="card  card--border-top-down card--icons-small-down card--size-small card--type-horizontal-reverse-down">
    <a class="card__link" href="/vijesti/visoke-potpore-za-djecu-sali-za-prvo-dijete-daje-7963-eura-vir-za-peto-25-482-1744679" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/66/53/703af9aa3fe80af898d6.jpeg" alt="Mame u šetnji s djecom" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/66/53/703af9aa3fe80af898d6.jpeg"
    
    data-srcset="/media/img/66/53/703af9aa3fe80af898d6.jpeg 1280w, /media/img/e3/97/ef685f46db3b50d27c24.jpeg 612w, /media/img/08/e0/2649b9a7ddec1fecf16b.jpeg 305w"
    
    alt="Mame u šetnji s djecom"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                            <div class="card__icon card__icon--premium">
                                Premium sadržaj
                            </div>
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    
        <div class="card__comments-nr">4</div>
    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                Dobrodošle, bebe!
            
            </div>
            
            <h3 class="card__title">
                Jedna za prvo dijete dijete daje 7963, druga za peto čak 25.482 eura: Ovo su općine rekorderi po potporama za djecu
            </h3>

            
            

            
            

        </div>
    </a>
</article>

                    </div>
                    
                    <div class="grid__item grid__item--2of12">
                        




<article class="card  card--border-top-down card--icons-small-down card--size-small card--type-horizontal-reverse-down">
    <a class="card__link" href="/vijesti/politika-placa-smanjila-siromastvo-ali-devastirala-srednji-sloj-u-deset-godina-udvostrucen-minimalac-1744935" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/1c/79/b96b9d7924b9cfb2ba7a.jpeg" alt="" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/1c/79/b96b9d7924b9cfb2ba7a.jpeg"
    
    data-srcset="/media/img/1c/79/b96b9d7924b9cfb2ba7a.jpeg 1280w, /media/img/c4/fe/5aa45a9240a71ff1f2a4.jpeg 612w, /media/img/d7/2f/269f537235f480bc4d61.jpeg 305w"
    
    alt=""
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                            <div class="card__icon card__icon--premium">
                                Premium sadržaj
                            </div>
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    
        <div class="card__comments-nr">11</div>
    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                srednje plaće rastu sporije
            
            </div>
            
            <h3 class="card__title">
                Hrvatska udvostručila minimalac da bi otvorila vrata strancima
            </h3>

            
            

            
            

        </div>
    </a>
</article>

                    </div>
                    
                    <div class="grid__item grid__item--2of12">
                        




<article class="card  card--border-top-down card--icons-small-down card--size-small card--type-horizontal-reverse-down">
    <a class="card__link" href="/vijesti/tko-je-kriv-sto-turudic-i-dalje-nije-odgovorio-na-kljucno-pitanje-1744686" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/71/66/d90f9cdcdef6b579d4ce.jpeg" alt="Zagreb: Ivan Turudi? došao u Banske dvore" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/71/66/d90f9cdcdef6b579d4ce.jpeg"
    
    data-srcset="/media/img/71/66/d90f9cdcdef6b579d4ce.jpeg 1280w, /media/img/ac/88/aee74155e9ef4747ad4b.jpeg 612w, /media/img/78/d5/c2705105a03290a7bc50.jpeg 305w"
    
    alt="Zagreb: Ivan Turudi? došao u Banske dvore"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                            <div class="card__icon card__icon--premium">
                                Premium sadržaj
                            </div>
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    
        <div class="card__comments-nr">11</div>
    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                IVAN HRSTIĆ
            
            </div>
            
            <h3 class="card__title">
                Tko je kriv što Turudić i dalje nije odgovorio na ključno pitanje?
            </h3>

            
            

            
            

        </div>
    </a>
</article>

                    </div>
                    
                    <div class="grid__item grid__item--2of12">
                        




<article class="card  card--border-top-down card--icons-small-down card--size-small card--type-horizontal-reverse-down">
    <a class="card__link" href="/sport/sestra-pokojnog-cire-o-godinu-dana-bez-voljenog-brata-zalosti-me-u-kakvom-je-stanju-njegov-grob-1744719" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/97/02/46fdf465e08e01a6d6f1.jpeg" alt="JOZEFINA DRAGUN" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/97/02/46fdf465e08e01a6d6f1.jpeg"
    
    data-srcset="/media/img/97/02/46fdf465e08e01a6d6f1.jpeg 1280w, /media/img/9c/2f/ca567b4cc504c7d831e6.jpeg 612w, /media/img/bd/82/fc74db1daed7dd20095a.jpeg 305w"
    
    alt="JOZEFINA DRAGUN"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                            <div class="card__icon card__icon--premium">
                                Premium sadržaj
                            </div>
                        
                        
                        
                    </div>

                    
                        
                            











    
        
    



    
        <div class="card__comments-nr">8</div>
    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                Jozefina Dragun
            
            </div>
            
            <h3 class="card__title">
                Sestra pokojnog Ćire o godini dana bez voljenog brata: Žalosti me u kakvom je stanju njegov grob
            </h3>

            
            

            
            

        </div>
    </a>
</article>

                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</section>



        
    



    
        
        
        
        
        








    <section class="block">
        <div class="block__inner">
            <div class="grid">
                <div class="grid__item grid__item--8of12">
                    <div class="component">

                        <div class="component__head">
                            <h2 class="title">Još iz kategorije</h2>
                        </div>

                        <div class="component__content">
                            <div class="card-group">
                                
                                    <div class="card-group__item">
                                        




<article class="card  card--border-top-down card--icons-small-down card--size-medium-up card--size-small-down card--special card--type-horizontal-reverse-down card--type-horizontal-up">
    <a class="card__link" href="/vijesti/svijet-je-sve-umorniji-od-prizemnog-politikantstva-u-washingtonu-1744930" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/ab/55/388bd74760e1bfc8f3c8.jpeg" alt="" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/ab/55/388bd74760e1bfc8f3c8.jpeg"
    
    data-srcset="/media/img/ab/55/388bd74760e1bfc8f3c8.jpeg 1280w, /media/img/91/60/2cbfab3554777100d0c0.jpeg 612w, /media/img/03/56/4014aef24f7f414bed1e.jpeg 305w"
    
    alt=""
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                            <div class="card__icon card__icon--premium">
                                Premium sadržaj
                            </div>
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                DINO BRUMEC
            
            </div>
            
            <h3 class="card__title">
                Svijet je sve umorniji od prizemnog politikantstva u Washingtonu
            </h3>

            
    <p class="card__description">
        
        Amerika će ostati najvažniji saveznik Europske unije, ali prijateljstvo će očigledno imati svoja ograničenja
    </p>


            
            

        </div>
    </a>
</article>

                                    </div>
                                
                                    <div class="card-group__item">
                                        




<article class="card  card--border-top-down card--icons-small-down card--size-medium-up card--size-small-down card--special card--type-horizontal-reverse-down card--type-horizontal-up">
    <a class="card__link" href="/vijesti/zatvor-pljacka-banda-krim-milje-lazi-ne-krimic-sabor-1744660" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/52/f5/ca64bda6ee5039e66dbd.jpeg" alt="Zagreb: Sabor glasuje o Ivanu Turudiću" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/52/f5/ca64bda6ee5039e66dbd.jpeg"
    
    data-srcset="/media/img/52/f5/ca64bda6ee5039e66dbd.jpeg 1280w, /media/img/6d/5e/8f94c890ae518d02a0d4.jpeg 612w, /media/img/3a/91/ccb5ef1c81217ef517f1.jpeg 305w"
    
    alt="Zagreb: Sabor glasuje o Ivanu Turudiću"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                            <div class="card__icon card__icon--premium">
                                Premium sadržaj
                            </div>
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                SUZANA LEPAN ŠTEFANČIĆ
            
            </div>
            
            <h3 class="card__title">
                Zatvor, pljačka, banda, krim-milje, laži... Ne krimić, Sabor
            </h3>

            
    <p class="card__description">
        
        U državi u kojoj se slabo vjeruje i politici i pravosuđu jučerašnje scene iz Sabora vjeru građana dodatno srozavaju
    </p>


            
            

        </div>
    </a>
</article>

                                    </div>
                                
                                    <div class="card-group__item">
                                        




<article class="card  card--border-top-down card--icons-small-down card--size-medium-up card--size-small-down card--special card--type-horizontal-reverse-down card--type-horizontal-up">
    <a class="card__link" href="/vijesti/tko-je-kriv-sto-turudic-i-dalje-nije-odgovorio-na-kljucno-pitanje-1744686" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/71/66/d90f9cdcdef6b579d4ce.jpeg" alt="Zagreb: Ivan Turudi? došao u Banske dvore" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/71/66/d90f9cdcdef6b579d4ce.jpeg"
    
    data-srcset="/media/img/71/66/d90f9cdcdef6b579d4ce.jpeg 1280w, /media/img/ac/88/aee74155e9ef4747ad4b.jpeg 612w, /media/img/78/d5/c2705105a03290a7bc50.jpeg 305w"
    
    alt="Zagreb: Ivan Turudi? došao u Banske dvore"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                            <div class="card__icon card__icon--premium">
                                Premium sadržaj
                            </div>
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    
        <div class="card__comments-nr">11</div>
    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                IVAN HRSTIĆ
            
            </div>
            
            <h3 class="card__title">
                Tko je kriv što Turudić i dalje nije odgovorio na ključno pitanje?
            </h3>

            
    <p class="card__description">
        
        Politika, pravosuđe i javni interes se isprepliću, a sukob interesa i politički voajerizam dodatno zaoštravaju situaciju. Je li ovo udar na pojedinca ili na cijelu Vladu?
    </p>


            
            

        </div>
    </a>
</article>

                                    </div>
                                
                                    <div class="card-group__item">
                                        




<article class="card  card--border-top-down card--icons-small-down card--size-medium-up card--size-small-down card--special card--type-horizontal-reverse-down card--type-horizontal-up">
    <a class="card__link" href="/vijesti/prodati-sto-vise-oruzja-onima-koji-ratuju-zar-je-to-stvarno-vrhunac-inteligencije-ljudske-vrste-1744259" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/e5/d2/ef3061ad3b8dd7a5ba57.jpeg" alt="Rat u Izraelu" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/e5/d2/ef3061ad3b8dd7a5ba57.jpeg"
    
    data-srcset="/media/img/e5/d2/ef3061ad3b8dd7a5ba57.jpeg 1280w, /media/img/b9/39/2c4ef75b496437cf3a6f.jpeg 612w, /media/img/5b/f5/c4ee06106173f7a1cd14.jpeg 305w"
    
    alt="Rat u Izraelu"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                            <div class="card__icon card__icon--premium">
                                Premium sadržaj
                            </div>
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    




                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                BRANIMIR POFUK
            
            </div>
            
            <h3 class="card__title">
                Prodati što više oružja onima koji ratuju, zar je to stvarno vrhunac inteligencije ljudske vrste?
            </h3>

            
    <p class="card__description">
        
        Perspektiva mira više nigdje na svijetu ne dobiva zasluženu pozornost i ne uživa osobitu popularnost
    </p>


            
            

        </div>
    </a>
</article>

                                    </div>
                                
                                    <div class="card-group__item">
                                        




<article class="card  card--border-top-down card--icons-small-down card--size-medium-up card--size-small-down card--special card--type-horizontal-reverse-down card--type-horizontal-up">
    <a class="card__link" href="/vijesti/orbane-dosadio-si-i-bogu-i-bruxellesu-1744255" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/fc/ef/4933ae930836050203d3.jpeg" alt="Viktor Orban" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/fc/ef/4933ae930836050203d3.jpeg"
    
    data-srcset="/media/img/fc/ef/4933ae930836050203d3.jpeg 1280w, /media/img/80/d3/df87b28162a3cc3b152f.jpeg 612w, /media/img/fe/51/7842353d1fe85a7cdd54.jpeg 305w"
    
    alt="Viktor Orban"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                            <div class="card__icon card__icon--premium">
                                Premium sadržaj
                            </div>
                        
                        
                        
                    </div>

                    
                        
                            











    
        
    



    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                RENATA RAŠOVIĆ
            
            </div>
            
            <h3 class="card__title">
                Orbáne, dosadio si i bogu i Bruxellesu
            </h3>

            
    <p class="card__description">
        
        U Habsburškom Carstvu, kojemu je Mađarska pripadala do njegova raspada, ponašala se na sličan način, a to je uključivalo i uzimanje zajedničkog proračuna za taoca
    </p>


            
            

        </div>
    </a>
</article>

                                    </div>
                                
                                    <div class="card-group__item">
                                        




<article class="card  card--border-top-down card--icons-small-down card--size-medium-up card--size-small-down card--special card--type-horizontal-reverse-down card--type-horizontal-up">
    <a class="card__link" href="/vijesti/sto-je-nakon-cetiri-desetljeca-ostalo-od-sarajevske-olimpijade-tek-sjecanja-i-rusevine-1744166" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/49/2b/ef8f22f3995f677b889c.jpeg" alt="" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/49/2b/ef8f22f3995f677b889c.jpeg"
    
    data-srcset="/media/img/49/2b/ef8f22f3995f677b889c.jpeg 1280w, /media/img/80/4c/b15e91f78b5baba31941.jpeg 612w, /media/img/8d/8c/d5d09a529678d8851553.jpeg 305w"
    
    alt=""
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                            <div class="card__icon card__icon--premium">
                                Premium sadržaj
                            </div>
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                jozo pavković
            
            </div>
            
            <h3 class="card__title">
                Što je nakon četiri desetljeća ostalo od sarajevske Olimpijade? Tek sjećanja i ruševine!
            </h3>

            
    <p class="card__description">
        
        Bile su to, među ostalim, prve Olimpijske igre u jednoj državi socijalizma i prve za mandata dugovječnoga predsjednika Međunarodnog olimpijskog odbora Juana Antonija Samarancha
    </p>


            
            

        </div>
    </a>
</article>

                                    </div>
                                
                                    <div class="card-group__item">
                                        




<article class="card  card--border-top-down card--icons-small-down card--size-medium-up card--size-small-down card--special card--type-horizontal-reverse-down card--type-horizontal-up">
    <a class="card__link" href="/vijesti/hoce-li-bidenova-doktrina-bliskom-istoku-donijeti-mir-ili-jos-jedan-rat-1743885" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/98/af/882cb5a8a0636ac9adc5.jpeg" alt="FILE PHOTO: U.S. President Joe Biden delivers an address to the nation from the Oval Office of the White House in Washington" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/98/af/882cb5a8a0636ac9adc5.jpeg"
    
    data-srcset="/media/img/98/af/882cb5a8a0636ac9adc5.jpeg 1280w, /media/img/d1/24/4348efc3fb3509f0f2e9.jpeg 612w, /media/img/9f/b7/5fb3581a0c45742c8cb8.jpeg 305w"
    
    alt="FILE PHOTO: U.S. President Joe Biden delivers an address to the nation from the Oval Office of the White House in Washington"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                            <div class="card__icon card__icon--premium">
                                Premium sadržaj
                            </div>
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    
        <div class="card__comments-nr">3</div>
    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                Denis Romac
            
            </div>
            
            <h3 class="card__title">
                Hoće li Bidenova doktrina Bliskom istoku donijeti mir ili još jedan rat
            </h3>

            
    <p class="card__description">
        
        Temelj Bidenove doktrine predstavlja promocija ideje palestinske države, koja bi trebala biti demilitarizirana i ne bi smjela predstavljati prijetnju Izraelu
    </p>


            
            

        </div>
    </a>
</article>

                                    </div>
                                
                                    <div class="card-group__item">
                                        




<article class="card  card--border-top-down card--icons-small-down card--size-medium-up card--size-small-down card--special card--type-horizontal-reverse-down card--type-horizontal-up">
    <a class="card__link" href="/vijesti/pateticne-izjave-o-toleranciji-ne-pomazu-bez-integracije-stranaca-1743831" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/ff/13/2896e2ea8edb997f968d.jpeg" alt="Slavonski Brod: Dobro raspoloženi strani radnici u šetnji i razgledavanju grada" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/ff/13/2896e2ea8edb997f968d.jpeg"
    
    data-srcset="/media/img/ff/13/2896e2ea8edb997f968d.jpeg 1280w, /media/img/4b/8f/a98cdb3dc2f50c66f1f4.jpeg 612w, /media/img/2c/63/f578daeadfffadb46a23.jpeg 305w"
    
    alt="Slavonski Brod: Dobro raspoloženi strani radnici u šetnji i razgledavanju grada"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                            <div class="card__icon card__icon--premium">
                                Premium sadržaj
                            </div>
                        
                        
                        
                    </div>

                    
                        
                            











    
        
    



    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                Dijana Jurasić
            
            </div>
            
            <h3 class="card__title">
                Patetične izjave o toleranciji ne pomažu bez integracije stranaca
            </h3>

            
    <p class="card__description">
        
        Poznavanje jezika jest bitno za uklopljenost stranaca u društvo, ali samo znanje jezika i minimalne plaće neće osigurati uspješnu integraciju
    </p>


            
            

        </div>
    </a>
</article>

                                    </div>
                                
                                    <div class="card-group__item">
                                        




<article class="card  card--border-top-down card--icons-small-down card--size-medium-up card--size-small-down card--special card--type-horizontal-reverse-down card--type-horizontal-up">
    <a class="card__link" href="/vijesti/sdp-je-toliko-u-panici-da-o-koaliciji-pregovara-i-s-radnickom-frontom-1743870" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/38/d6/77d6939914c8dc77687d.jpeg" alt="Zagreb: Predsjednik SDP-a Pe?a Grbin obratio se medijima" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/38/d6/77d6939914c8dc77687d.jpeg"
    
    data-srcset="/media/img/38/d6/77d6939914c8dc77687d.jpeg 1280w, /media/img/bf/6b/bb203e74e594efdef78c.jpeg 612w, /media/img/f3/0a/76bd4b8a6a7ca0dd54e3.jpeg 305w"
    
    alt="Zagreb: Predsjednik SDP-a Pe?a Grbin obratio se medijima"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                            <div class="card__icon card__icon--premium">
                                Premium sadržaj
                            </div>
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    
        <div class="card__comments-nr">3</div>
    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                Zvonimir Despot
            
            </div>
            
            <h3 class="card__title">
                SDP je toliko u panici da o koaliciji pregovara i s Radničkom frontom
            </h3>

            
    <p class="card__description">
        
        Ta je panika krenula od njihove zatečenosti odlukom stranke Možemo! da s njima ne želi formirati nikakvu predizbornu koaliciju na nacionalnoj razini
    </p>


            
            

        </div>
    </a>
</article>

                                    </div>
                                
                                    <div class="card-group__item">
                                        




<article class="card  card--border-top-down card--icons-small-down card--size-medium-up card--size-small-down card--special card--type-horizontal-reverse-down card--type-horizontal-up">
    <a class="card__link" href="/vijesti/ako-itko-odluci-slijediti-britance-u-ne-bas-pametnoj-ideji-izlaska-iz-eu-bit-ce-to-orbanova-madarska-1743998" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/d5/33/e5f82c0b3ffc4a7049c9.jpeg" alt="EU leaders meet in Brussels" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/d5/33/e5f82c0b3ffc4a7049c9.jpeg"
    
    data-srcset="/media/img/d5/33/e5f82c0b3ffc4a7049c9.jpeg 1280w, /media/img/a9/44/2e674102087c5486d3be.jpeg 612w, /media/img/12/91/20b2d9dfac176a835473.jpeg 305w"
    
    alt="EU leaders meet in Brussels"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                            <div class="card__icon card__icon--premium">
                                Premium sadržaj
                            </div>
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    
        <div class="card__comments-nr">4</div>
    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                Tomislav Krasnec
            
            </div>
            
            <h3 class="card__title">
                Ako itko odluči slijediti Britance u ne baš pametnoj ideji izlaska iz EU, bit će to Orbánova Mađarska
            </h3>

            
    <p class="card__description">
        
        Potencijalno članstvo Ukrajine u EU zaista bi promijenilo izgled članstva u EU za sve druge, postojeće države članice. Orbán je iznio računicu prema kojoj bi 17 posto europskog proračuna išlo Ukrajini
    </p>


            
            

        </div>
    </a>
</article>

                                    </div>
                                
                            </div>

                        </div>
                        
                        <div class="js-addAjaxContentBefore"></div>

                        <div class="component__foot js-removeAfterLoad">
                            
    

    <a href="#" class="js-loadMoreArticles button" data-more-articles="/kolumne/exclude-more-by-ids/1741447?page=2">
    Učitaj još
</a>

<div class="loader"><div></div><div></div><div></div><div></div></div>


                        </div>

                    </div>
                </div>
                <div class="grid__item grid__item--4of12 grid__item--300">
                    <div class="grid__row grid__row--sticky">
                        
    





<div class="banner">
    <div id='divRectangle4'>
    <script type='text/javascript'>
        googletag.cmd.push(function() { googletag.display('divRectangle4'); });
    </script>
</div>

    <div id='divHalfpage4'>
    <script type='text/javascript'>
        googletag.cmd.push(function() { googletag.display('divHalfpage4'); });
    </script>
</div>

</div>


                    </div>
                </div>
            </div>
        </div>
    </section>



    

    

    
        
  <!-- Schema Markup - article -->

<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "NewsArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "/vijesti/jadranska-magistrala-proracunata-je-pista-smrti-samo-se-na-njoj-stedjelo-1741447"
  },
  "headline": "Jadranska magistrala proračunata je pista smrti, samo se na njoj štedjelo",
  
  "image": {
    "@type": "ImageObject",
    "url": "https://www.vecernji.hr/media/img/af/9d/f8cedc69410fad909c84.jpeg",
    "height": 1024,
    "width": 768
  },
  
  "datePublished": "2024-01-26T09:15:00+01:00",
  "dateModified": "2024-01-26T10:59:44.374438+01:00",
  
  "author": [
    
      {
        "@type": "Person",
        "name": "Boris Beck"
      }
    
  ],
  
  "publisher": {
    "@type": "Organization",
    "name": "Večernji.hr",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.vecernji.hr/static/images/vecernji.jpg"
    }
  },
  "description": "Nije to volja Božja, nego odluka inženjera. Veći radijusi zahtijevaju više iskopa i nasipa, koje radnička država nije mogla platiti, i zato su zavoji tako oštri i naslagani jedan na drugi.",
  "keywords": "Jadranska magistrala, cesta, prometnica, serijal, Andrea Buča"
}
</script>






  <!-- Schema Map - videos -->
  <script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "MediaObject",
    "video": [
      
        {
          "@type": "VideoObject",
          "name": "Zaglavila na prevrnutom autu u rijeci, vatrogasci je spasili nakon petnaest sati",
          "description": "Zaglavila na prevrnutom autu u rijeci, vatrogasci je spasili nakon petnaest sati",
          "thumbnailUrl": "https://www.vecernji.hr/media/images/2024-04/dizajn-bez-naslova-99.jpg",
          "uploadDate": "2024-01-25T11:23:44.371544+01:00",
          "contentUrl": "https://video.vecernji.hr/portal/2024/1/f51da521.mp4"
        }
      
    ]
  }
  </script>


        
        
            <!-- Schema Markup - gallery -->

<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "ImageGallery",
  "description": "Jadranska magistrala proračunata je pista smrti, samo se na njoj štedjelo",

  "associatedMedia": [
    
      {
        "@type": "ImageObject",
        "contentUrl": "https://www.vecernji.hr/vijesti/jadranska-magistrala-proracunata-je-pista-smrti-samo-se-na-njoj-stedjelo-1741447/galerija-590914?page=1",
        "caption": "Dubrovnik: Jadranska magistrala kod Ratca izuzetno opasna "
      },
    
      {
        "@type": "ImageObject",
        "contentUrl": "https://www.vecernji.hr/vijesti/jadranska-magistrala-proracunata-je-pista-smrti-samo-se-na-njoj-stedjelo-1741447/galerija-590914?page=2",
        "caption": "Dubrovnik: Jadranska magistrala kod Ratca izuzetno opasna "
      }
    
  ]
}
</script>

        
    



                    </main>

                    
                        <footer class="footer">
    <div class="footer__inner">
        <div class="footer__logo">
            <a href="/" class="logo logo--transparent">Večernji list</a>
        </div>
    </div>
</footer>

                        <div class="js_tokie is-hidden" data-tokie="phOQ1YLcqdEI2W0QkUb6VpMGSRIKxTqy0ZpjZkKGpJz4joJ0v418rgHb9NxrefqQ"></div>
                    

                </div>

            </div>
        

        
            <div class="toaster__response toaster__response--warning js_toaster">
                <div class="toaster__response_icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_109_809)"><path d="M12 0C5.3832 0 0 5.38327 0 12C0 18.6167 5.3832 24 12 24C18.6168 24 24 18.6169 24 12C24 5.38313 18.6168 0 12 0ZM12 21.8182C6.58618 21.8182 2.18182 17.4138 2.18182 12C2.18182 6.58618 6.58618 2.18182 12 2.18182C17.4138 2.18182 21.8182 6.58633 21.8182 12C21.8182 17.4137 17.4137 21.8182 12 21.8182Z" fill="white"/><path d="M12.0002 5.09082C11.1983 5.09082 10.5459 5.74362 10.5459 6.54602C10.5459 7.34769 11.1983 7.99991 12.0002 7.99991C12.802 7.99991 13.4544 7.34769 13.4544 6.54602C13.4544 5.74362 12.802 5.09082 12.0002 5.09082Z" fill="white"/><path d="M12.0001 10.1816C11.3976 10.1816 10.9092 10.6701 10.9092 11.2725V17.818C10.9092 18.4205 11.3976 18.9089 12.0001 18.9089C12.6026 18.9089 13.091 18.4205 13.091 17.818V11.2725C13.091 10.6701 12.6026 10.1816 12.0001 10.1816Z" fill="white"/></g><defs><clipPath id="clip0_109_809"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>

                </div>
                
                <div class="toaster__response_text js_toasterText"></div>

                <div class="toaster__close js_closeToaster">
                    <svg class="icon__close" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6.34314575 4.92893219 5.65689325 5.65610681 5.6568152-5.65610681c.3905243-.39052429 1.0236893-.39052429 1.4142136 0s.3905243 1.02368927 0 1.41421356l-5.6560288 5.65689325 5.6560288 5.6568152c.3905243.3905243.3905243 1.0236893 0 1.4142136s-1.0236893.3905243-1.4142136 0l-5.6568152-5.6560288-5.65689325 5.6560288c-.39052429.3905243-1.02368927.3905243-1.41421356 0s-.39052429-1.0236893 0-1.4142136l5.65610681-5.6568152-5.65610681-5.65689325c-.39052429-.39052429-.39052429-1.02368927 0-1.41421356s1.02368927-.39052429 1.41421356 0z" fill="#fff" fill-rule="evenodd"/></svg>

                </div>
            </div>
        

        <script src="/static/vlredesign/js/vendor/lazysizes.min.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="/static/js/lib/jquery-2.1.3.min.js"><\/script>')</script>
        <script src="/static/vlredesign/js/vendor/jquery-throttle-debounce.min.js"></script>
        <script src="/static/vlredesign/js/vendor/iframeResizer.min.js"></script>

        

        
    <script src="/static/vlredesign/js/modules/polls.js?bust=20231107"></script>
    <script src="/static/vlredesign/js/modules/video_player.js?bust=20231107"></script>
    <script src="/static/vlredesign/js/modules/piano.js"></script>

    


        
            <link rel="stylesheet" href="/static/vlredesign/js/vendor/flickity/flickity.min.css">
            <script src="/static/vlredesign/js/vendor/flickity/flickity.pkgd.min.js"></script>
            <script src="/static/vlredesign/js/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
            
            <script src="/static/vlredesign/js/vendor/jquery-cookie/jquery.cookie-1-4-1.js"></script>
            <script src="/static/vlredesign/js/vendor/t.min.edited.js"></script>

            <script src="/static/vlredesign/js/misc.js?bust=20231107"></script>
        

        
<script type="text/javascript">
;e = encodeURIComponent;
var _styt = _styt || [];_styt.push('url='+e(location.href));_styt.push('ref='+e(document.referrer));_styt.push('title='+e(document.title));

    (function() {
        function dotck() {var d = new Date();_styt.push(['seed='+d.getTime()+Math.random()]);return _styt.join('&');};
        var tck = document.createElement('script');tck.type = 'text/javascript';tck.async = true;tck.src = '/analytics/track.js?'+dotck();var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(tck, s);
    })();
</script>


        
    
            <div id='divAIO1'>
    <script type='text/javascript'>
        googletag.cmd.push(function() { googletag.display('divAIO1'); });
    </script>
</div>

            <div id='divAIO2'>
    <script type='text/javascript'>
        googletag.cmd.push(function() { googletag.display('divAIO2'); });
    </script>
</div>

        
    <div id='divAIO3'>
    <script type='text/javascript'>
        googletag.cmd.push(function() { googletag.display('divAIO3'); });
    </script>
</div>



        
            
            
                




<script>
    (function(src) {
        var a = document.createElement('script');
        a.type = 'text/javascript';
        a.async = true;
        a.src = src;
        var b = document.getElementsByTagName('script')[0];
        b.parentNode.insertBefore(a, b)
    })('//experience.tinypass.com/xbuilder/experience/load?aid=lIwrWjnppu');
</script>

<script>
    tp = window.tp || [];

    var pianoData = {
        userRef : 'None' !== 'None' ? 'None' : '',
        isArticlePremium : 'True' === 'True' || '' === 'True',
        isUserAuth : 'ne' === 'da',
        userId: 'None',
        articleId: '1741447',
        articleType: 'c',
        articleLayout: 'None' === 'None' ? 'default' : 'gallery'
    };

    var pianoTag = pianoData.isArticlePremium ? pianoData.articleLayout === 'gallery' ? 'premium_gallery' : 'premium' : '';

    tp.push(['init', function () {
        tp.push(['setUserRef', pianoData.userRef ]);
        tp.push(['setTags', [pianoTag]]);
        tp.enableGACrossDomainLinking('UA-98836491-1');
        tp.experience.init();
    }]);

    tp.push(['addHandler', 'checkoutComplete', function (conversion) {
        dataLayer.push({
            event: 'piano',
            eventCategory: 'Piano',
            eventAction: 'purchase completed',
            eventLabel: conversion.offerId
        });

        // Piano tracking by Smartocto
        _ain.pushConversion(
            `Vecernji - Subscription - ${conversion.termId}`,
            {
                'url': window.location.href,
                'postid': pianoData.articleId
            }
        );
    }]);

    tp.push(['addHandler', 'customEvent', function (event) {

        var pianoData = event.params.params.split('***');

        var paramsData = JSON.parse(pianoData[0]);
        var termData = JSON.parse(pianoData[1]);

        var checkoutDataObj = {
            offerId: paramsData.offerId,
            termId: termData.termId,
            trackingId: paramsData.trackingId,
            templateId: paramsData.templateId,
            description: termData.description
        };

        switch (event.eventName) {
            case 'triggerUserData':
                var triggerUserDataModal = new CustomEvent('pianoTriggerUserData', { detail: checkoutDataObj });
                document.body.dispatchEvent(triggerUserDataModal);
                break;
            case 'triggerRegister':
                var pianoTriggerRegister = new Event('pianoTriggerRegistration');
                document.body.dispatchEvent(pianoTriggerRegister);
                break;
            case 'triggerLogin':
                var pianoTriggerLogin = new CustomEvent('pianoTriggerLogin', { detail: checkoutDataObj });
                document.body.dispatchEvent(pianoTriggerLogin);
                break;
        }
    }]);

    
    
    
</script>

            
        

        
        

        
        

    </body>
</html>



iv class="card__headline">
            
                IVAN HRSTIĆ
            
            </div>
            
            <h3 class="card__title">
                Tko je kriv što Turudić i dalje nije odgovorio na ključno pitanje?
            </h3>

            
            

            
            

        </div>
    </a>
</article>

                    </div>
                    
                    <div class="grid__item grid__item--2of12">
                        




<article class="card  card--border-top-down card--icons-small-down card--size-small card--type-horizontal-reverse-down">
    <a class="card__link" href="/sport/sestra-pokojnog-cire-o-godinu-dana-bez-voljenog-brata-zalosti-me-u-kakvom-je-stanju-njegov-grob-1744719" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/97/02/46fdf465e08e01a6d6f1.jpeg" alt="JOZEFINA DRAGUN" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/97/02/46fdf465e08e01a6d6f1.jpeg"
    
    data-srcset="/media/img/97/02/46fdf465e08e01a6d6f1.jpeg 1280w, /media/img/9c/2f/ca567b4cc504c7d831e6.jpeg 612w, /media/img/bd/82/fc74db1daed7dd20095a.jpeg 305w"
    
    alt="JOZEFINA DRAGUN"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                            <div class="card__icon card__icon--premium">
                                Premium sadržaj
                            </div>
                        
                        
                        
                    </div>

                    
                        
                            











    
        
    



    
        <div class="card__comments-nr">8</div>
    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                Jozefina Dragun
            
            </div>
            
            <h3 class="card__title">
                Sestra pokojnog Ćire o godini dana bez voljenog brata: Žalosti me u kakvom je stanju njegov grob
            </h3>

            
            

            
            

        </div>
    </a>
</article>

                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</section>



        
    



    
        
        
        
        
        








    <section class="block">
        <div class="block__inner">
            <div class="grid">
                <div class="grid__item grid__item--8of12">
                    <div class="component">

                        <div class="component__head">
                            <h2 class="title">Još iz kategorije</h2>
                        </div>

                        <div class="component__content">
                            <div class="card-group">
                                
                                    <div class="card-group__item">
                                        




<article class="card  card--border-top-down card--icons-small-down card--size-medium-up card--size-small-down card--special card--type-horizontal-reverse-down card--type-horizontal-up">
    <a class="card__link" href="/vijesti/plenkovic-u-ateni-eu-sljedece-generacije-odigrao-je-kljucnu-ulogu-u-oporavku-od-pandemije-1745240" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/71/87/cb658e22009cc97da012.jpeg" alt="" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/71/87/cb658e22009cc97da012.jpeg"
    
    data-srcset="/media/img/71/87/cb658e22009cc97da012.jpeg 1280w, /media/img/2f/bc/f2ecd0302fd536de8d4c.jpeg 612w, /media/img/94/ca/118ee63957364088b698.jpeg 305w"
    
    alt=""
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                SKUP EPP-A
            
            </div>
            
            <h3 class="card__title">
                Plenković u Ateni: &#39;EU sljedeće generacije&#39; odigrao je ključnu ulogu u oporavku od pandemije
            </h3>

            
    <p class="card__description">
        
        Provedba EU-a sljedeće generacije teče glatko i doprinosi gospodarskom rastu, rekao je Plenković
    </p>


            
            

        </div>
    </a>
</article>

                                    </div>
                                
                                    <div class="card-group__item">
                                        




<article class="card  card--border-top-down card--icons-small-down card--size-medium-up card--size-small-down card--special card--type-horizontal-reverse-down card--type-horizontal-up">
    <a class="card__link" href="/vijesti/stipic-ovdje-smo-zbog-koeficijenata-i-to-je-tek-pocetak-1745220" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/39/be/0cf747589ee7af47ba8a.jpeg" alt="Zagreb: Veliki prosvjed prosvjetara na Trgu svetog Marka" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/39/be/0cf747589ee7af47ba8a.jpeg"
    
    data-srcset="/media/img/39/be/0cf747589ee7af47ba8a.jpeg 1280w, /media/img/6b/39/6eb72871bf2abc12ca84.jpeg 612w, /media/img/93/04/9f4014dd003282af2aad.jpeg 305w"
    
    alt="Zagreb: Veliki prosvjed prosvjetara na Trgu svetog Marka"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                        
                        
                    </div>

                    
                        
                            











    
        
    



    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                PROSVJED UČITELJA NA MARKOVOM TRGU
            
            </div>
            
            <h3 class="card__title">
                Stipić: &#39;Ovdje smo zbog koeficijenata, i to je tek početak&#39;
            </h3>

            
    <p class="card__description">
        
        Završio je prosvjed učitelja na Markovu trgu. Uz brojne zvižduke upućene Vladi i Ministarstvu, prosvjednici su poručili da su spremni i na daljnje akcije ako ne bude promjena oko koeficijenata.
    </p>


            
            

        </div>
    </a>
</article>

                                    </div>
                                
                                    <div class="card-group__item">
                                        




<article class="card  card--border-top-down card--icons-small-down card--size-medium-up card--size-small-down card--special card--type-horizontal-reverse-down card--type-horizontal-up">
    <a class="card__link" href="/vijesti/vojni-rok-ipak-mozemo-ocekivati-anusic-najavio-tko-ce-ga-sve-morati-sluziti-1745207" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/af/d7/329762f02d2813475827.jpeg" alt="Zagreb: Održana je svečana promocija kadeta na Hrvatskom vojnom učilištu Dr. Franjo Tuđman" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/af/d7/329762f02d2813475827.jpeg"
    
    data-srcset="/media/img/af/d7/329762f02d2813475827.jpeg 1280w, /media/img/5e/7f/ac583f86814b1f004781.jpeg 612w, /media/img/32/e0/e989b4fda8a8cb3d216b.jpeg 305w"
    
    alt="Zagreb: Održana je svečana promocija kadeta na Hrvatskom vojnom učilištu Dr. Franjo Tuđman"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    
        <div class="card__comments-nr">50</div>
    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                OBVEZNI VOJNI ROK
            
            </div>
            
            <h3 class="card__title">
                FOTO Vojni rok ide u realizaciju, Anušić najavio tko će ga sve morati služiti
            </h3>

            
    <p class="card__description">
        
        Ministar obrane Ivan Anušić izjavio je u petak kako se radi na tri scenarija dužine vojnog roka što bi trebalo biti poznato idući tjedan, dodao je da se ove godine neće stići početi provoditi, te naglasio da nije smisao koliko će obuka trajati nego koliko će biti učinkovita i efektivna.
    </p>


            
            

        </div>
    </a>
</article>

                                    </div>
                                
                                    <div class="card-group__item">
                                        




<article class="card  card--border-top-down card--icons-small-down card--size-medium-up card--size-small-down card--special card--type-horizontal-reverse-down card--type-horizontal-up">
    <a class="card__link" href="/vijesti/uce-kriptovalute-kuhaju-rade-robote-i-sapune-zato-vole-skolu-i-svi-su-daroviti-1744675" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/c3/db/5593c43b511d87fc0c71.jpeg" alt="Zagreb: Osnovna škola Trnjanska" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/c3/db/5593c43b511d87fc0c71.jpeg"
    
    data-srcset="/media/img/c3/db/5593c43b511d87fc0c71.jpeg 1280w, /media/img/cb/d5/ce33b484b125234e445e.jpeg 612w, /media/img/37/c5/1dd2593d4b8929fd89ef.jpeg 305w"
    
    alt="Zagreb: Osnovna škola Trnjanska"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                novi projekti osnovnoškolaca
            
            </div>
            
            <h3 class="card__title">
                Uče kriptovalute, kuhaju, rade robote i sapune, zato vole školu i svi su daroviti
            </h3>

            
    <p class="card__description">
        
        Radionice đacima pomažu da brže uče, projekt traje cijelu godinu u četiri modula: STEM, likovno-literarni, modul prirodoslovnih predmeta te zdravog domaćinstva, a uključeno je svih 25 učitelja i 200 učenika
    </p>


            
            

        </div>
    </a>
</article>

                                    </div>
                                
                                    <div class="card-group__item">
                                        




<article class="card  card--border-top-down card--icons-small-down card--size-medium-up card--size-small-down card--special card--type-horizontal-reverse-down card--type-horizontal-up">
    <a class="card__link" href="/vijesti/ljubica-po-drugi-put-ostaje-bez-krova-nad-glavom-otplatila-cijeli-dug-stana-a-nasljede-i-dalje-ide-majci-1745198" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/24/6a/8ecb1f57905df9f1b8bd.jpeg" alt="Ključ u bravi" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/24/6a/8ecb1f57905df9f1b8bd.jpeg"
    
    data-srcset="/media/img/24/6a/8ecb1f57905df9f1b8bd.jpeg 1280w, /media/img/b6/0e/f338ff8aef87d7e159fd.jpeg 612w, /media/img/7d/be/529e913ce0fa763a761f.jpeg 305w"
    
    alt="Ključ u bravi"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                PROBLEMI S NASLJEDSTVOM
            
            </div>
            
            <h3 class="card__title">
                Ljubica po drugi put ostaje bez krova nad glavom: Otplatila cijeli dug stana, a nasljeđe i dalje ide majci?
            </h3>

            
    <p class="card__description">
        
        80 kvadrata na atraktivnoj lokaciji. I čovjek koji ga je kupio, a da ga nikad nije vidio! On ušao u posjed, a Ljubica na cestu! Kako je do ovoga došlo?
    </p>


            
            

        </div>
    </a>
</article>

                                    </div>
                                
                                    <div class="card-group__item">
                                        




<article class="card  card--border-top-down card--icons-small-down card--size-medium-up card--size-small-down card--special card--type-horizontal-reverse-down card--type-horizontal-up">
    <a class="card__link" href="/vijesti/putovanje-od-10-000-eur-pocinje-na-ini-1744872" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/d3/75/03fe1817dd37a12d79c2.png" alt="Putovanje od 10.000 € počinje na Ini!" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/d3/75/03fe1817dd37a12d79c2.png"
    
    data-srcset="/media/img/d3/75/03fe1817dd37a12d79c2.png 1280w, /media/img/d7/1d/61fbf42df004ca63a731.png 612w, /media/img/05/e7/9f56fdbd1d2374015fe0.png 305w"
    
    alt="Putovanje od 10.000 € počinje na Ini!"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                        
                        
                    </div>

                    
                        
                            











    
        
    




                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                PROMO
            
            </div>
            
            <h3 class="card__title">
                Putovanje od 10.000 € počinje na Ini!
            </h3>

            
    <p class="card__description">
        
        Posjetite bilo koje Inino maloprodajno mjesto do 28. veljače i sudjelujte u nagradnoj igri samo za članove INA Loyalty programa.
    </p>


            
            

        </div>
    </a>
</article>

                                    </div>
                                
                                    <div class="card-group__item">
                                        




<article class="card  card--border-top-down card--icons-small-down card--size-medium-up card--size-small-down card--special card--type-horizontal-reverse-down card--type-horizontal-up">
    <a class="card__link" href="/vijesti/dio-sindikata-nije-bio-na-prosvjedu-sprem-objasnila-podcjenjivanje-uciteljske-profesije-je-neprihvatljivo-1745192" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/b7/34/852fa8c9aab8162b4359.png" alt="" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/b7/34/852fa8c9aab8162b4359.png"
    
    data-srcset="/media/img/b7/34/852fa8c9aab8162b4359.png 1280w, /media/img/f9/69/9b6f58621b9b0b8f886e.png 612w, /media/img/0a/71/444c614834abda778280.png 305w"
    
    alt=""
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                        
                        
                    </div>

                    
                        
                            











    
        
    



    
        <div class="card__comments-nr">5</div>
    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                Za Večernji TV
            
            </div>
            
            <h3 class="card__title">
                Dio sindikata nije bio na prosvjedu, Šprem objasnila: &#39;Podcjenjivanje učiteljske profesije je neprihvatljivo&#39;
            </h3>

            
    <p class="card__description">
        
        Kazala je da ne vidi razloga zbog kojih bi Vlada odbila njihove zahtjeve, ali da njoj osobno, a i članovima njezina sindikata, nije bilo mjesto na prosvjedu
    </p>


            
            

        </div>
    </a>
</article>

                                    </div>
                                
                                    <div class="card-group__item">
                                        




<article class="card  card--border-top-down card--icons-small-down card--size-medium-up card--size-small-down card--special card--type-horizontal-reverse-down card--type-horizontal-up">
    <a class="card__link" href="/vijesti/poznato-sto-je-uzrokovalo-incident-u-splitskom-hotelu-pet-osoba-zatrazilo-pomoc-prostori-se-provjetravaju-1745186" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/0e/2e/31a6e5f92b6fe38d6e44.jpeg" alt="Zbog curenja klora evakuiran hotel u Splitu, dvije osobe u bolnici" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/0e/2e/31a6e5f92b6fe38d6e44.jpeg"
    
    data-srcset="/media/img/0e/2e/31a6e5f92b6fe38d6e44.jpeg 1280w, /media/img/8b/ea/b3416b033c7f03fd64c5.jpeg 612w, /media/img/f4/46/571de733147b5a7900dc.jpeg 305w"
    
    alt="Zbog curenja klora evakuiran hotel u Splitu, dvije osobe u bolnici"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                ISPARAVANJE KLORA
            
            </div>
            
            <h3 class="card__title">
                Poznato što je uzrokovalo incident u splitskom hotelu? Pet osoba zatražilo pomoć, prostori se provjetravaju
            </h3>

            
    <p class="card__description">
        
        Neslužbeno se doznaje da se istjecanje klora dogodilo na hotelskom bazenu u trenutku kada je dostavljač ulio krivu kemikaliju u rezervoar. U policiji najavljuju da bi se uvjeti za obavljanje očevida trebali steći tek u subotu jer se u hotelu još uvijek osjećaju posljedice isparavanja klora.
    </p>


            
            

        </div>
    </a>
</article>

                                    </div>
                                
                                    <div class="card-group__item">
                                        




<article class="card  card--border-top-down card--icons-small-down card--size-medium-up card--size-small-down card--special card--type-horizontal-reverse-down card--type-horizontal-up">
    <a class="card__link" href="/vijesti/pokrenuta-istraga-protiv-vozaca-kamiona-koji-je-u-lovranu-usmrtio-djevojku-tereti-ga-se-za-tesko-djelo-1745184" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/ba/2f/e4e90e34d760761f7b2e.jpeg" alt="Lovran: Jedna djevojka poginula, dvije ozlijeđene u naletu kamiona na pješakinje" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/ba/2f/e4e90e34d760761f7b2e.jpeg"
    
    data-srcset="/media/img/ba/2f/e4e90e34d760761f7b2e.jpeg 1280w, /media/img/d1/24/3cdfdf54e395135ccf6c.jpeg 612w, /media/img/62/12/693bc42d4f6221a456cb.jpeg 305w"
    
    alt="Lovran: Jedna djevojka poginula, dvije ozlijeđene u naletu kamiona na pješakinje"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                STRAŠNA TRAGEDIJA
            
            </div>
            
            <h3 class="card__title">
                Pokrenuta istraga protiv vozača kamiona koji je u Lovranu usmrtio djevojku, tereti ga se za teško djelo
            </h3>

            
    <p class="card__description">
        
        Sumnjiče ga da prije uključivanja u promet nije na odgovarajući način osigurao metalni stabilizator, odnosno &quot;nogu&quot;, koja se pružila izvan kolnika i pritom udarila pješakinje koje su hodale nogostupom.
    </p>


            
            

        </div>
    </a>
</article>

                                    </div>
                                
                                    <div class="card-group__item">
                                        




<article class="card  card--border-top-down card--icons-small-down card--size-medium-up card--size-small-down card--special card--type-horizontal-reverse-down card--type-horizontal-up">
    <a class="card__link" href="/vijesti/milanovic-se-vrlo-ostro-obrusio-na-plenkovica-kardeljeva-tehnologija-komuniciranja-zasto-laze-1745180" >
        <div class="card__visual">
            <div class="card__image">

                <div class="image ">

                    
<noscript>
    <img class="" src="/media/img/19/6f/0622f6d9b20ddeda119e.jpeg" alt="Zagreb: Predsjednik Milanovi? posjetio je retrospektivnu izložbu djela Ivana Meštrovi?a u Galeriji Klovi?evi dvori" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/19/6f/0622f6d9b20ddeda119e.jpeg"
    
    data-srcset="/media/img/19/6f/0622f6d9b20ddeda119e.jpeg 1280w, /media/img/15/ce/cfc43056c29919ba40ef.jpeg 612w, /media/img/c8/c1/80b0eedf068e926e28f5.jpeg 305w"
    
    alt="Zagreb: Predsjednik Milanovi? posjetio je retrospektivnu izložbu djela Ivana Meštrovi?a u Galeriji Klovi?evi dvori"
    class="lazyload" />



                    
                    

                    <div class="card__icons">
                        
                        
                        
                            <div class="card__icon card__icon--video">
                                Video sadržaj
                            </div>
                        
                        
                    </div>

                    
                        
                            











    
        
    



    
        <div class="card__comments-nr">46</div>
    


                        
                    
                </div>
            </div>
        </div>

        <div class="card__text">

            <div class="card__headline">
            
                SIGURNOSNA PROVJERA TURUDIĆA
            
            </div>
            
            <h3 class="card__title">
                Milanović se vrlo oštro obrušio na Plenkovića: &#39;Kardeljeva tehnologija komuniciranja... Zašto laže?&#39;
            </h3>

            
    <p class="card__description">
        
        &quot;Predsjednik Republike prije dva dana pozvao je javno i Plenkovića i njegove trbuhozborce da objasne svoje insinuacije, a sada ih ponovo na to poziva. Iako je jasno da su te insinuacije obične laži, ustrajavanje na njima dokazuje da je lažov Plenković zlokobna prijetnja hrvatskoj državi i demokraciji&quot;, stoji, među ostalim, u priopćenju
    </p>


            
            

        </div>
    </a>
</article>

                                    </div>
                                
                            </div>

                        </div>
                        
                        <div class="js-addAjaxContentBefore"></div>

                        <div class="component__foot js-removeAfterLoad">
                            
    

    <a href="#" class="js-loadMoreArticles button" data-more-articles="/hrvatska/exclude-more-by-ids/1744091?page=2">
    Učitaj još
</a>

<div class="loader"><div></div><div></div><div></div><div></div></div>


                        </div>

                    </div>
                </div>
                <div class="grid__item grid__item--4of12 grid__item--300">
                    <div class="grid__row grid__row--sticky">
                        
    





<div class="banner">
    <div id='divRectangle4'>
    <script type='text/javascript'>
        googletag.cmd.push(function() { googletag.display('divRectangle4'); });
    </script>
</div>

    <div id='divHalfpage4'>
    <script type='text/javascript'>
        googletag.cmd.push(function() { googletag.display('divHalfpage4'); });
    </script>
</div>

</div>


                    </div>
                </div>
            </div>
        </div>
    </section>



    

    
    <textarea class="top-offer-template js-top-offer-template">
        
            







    
    
    
    

        
        

        <section class="block js-insertedSliderBlock" data-category="Top proizvodi članak - Lidlov super vikend od petka 09.02.">
            <div class="">
                <div class="component">
                    <div class="component__head">
                        <div class="component__group">
                            
<a href="https://www.lidl.hr/" class="offer-sponsor" target="_blank">
    
        
        
            <figure>
                
<noscript>
    <img class="" src="/media/img/27/d9/d1140c57ccbc2b7256b7.png" alt="Lidlov super vikend od petka 09.02." />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/27/d9/d1140c57ccbc2b7256b7.png"
    
    data-srcset="/media/img/27/d9/d1140c57ccbc2b7256b7.png Nonew"
    
    alt="Lidlov super vikend od petka 09.02."
    class="lazyload" />


            </figure>
        
    
    <h2 class="title">Lidlov super vikend od petka 09.02.</h2>
</a>

                        </div>
                        
                        <div class="component__group">
                            <div class="controls  is-inactive js-controls">
                                <a href="#" class="controls__item js-controlsPrevious" data-direction="previous" title="Prethodno"><svg fill="none" height="18" viewBox="0 0 10 18" width="10" xmlns="http://www.w3.org/2000/svg"><path d="m8.5 16-7-7 7-7" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-width="2"/></svg></a>
                                <a href="#" class="controls__item js-controlsNext" data-direction="next" title="Sljedeće"><svg fill="none" height="18" viewBox="0 0 10 18" width="10" xmlns="http://www.w3.org/2000/svg"><path d="m1.5 2 7 7-7 7" stroke="#111" stroke-linecap="square" stroke-linejoin="round" stroke-width="2"/></svg></a>
                            </div>
                        </div>
                        
                    </div>
                    <div class="component__content ">
                        
<div class="slider slider--top-offer">
    <div class="slider__inner js-slider" data-autoplay="true" data-contain="true" data-mobile="false">
        <div class="slider__item">
            
                
                <div class="slider__col">
                    <article class="offer">
                        <a class="offer__link js-topOfferLink" href="https://www.lidl.hr/c/online-katalog/s10027538?utm_medium=display&amp;utm_source=vecernji&amp;utm_campaign=online_premium_sales_veljaca_2024&amp;utm_content=widget_image_letak" target="_blank" title="">
                            <div class="offer__image">
                                <div class="image image--top-offer">
                                    
<noscript>
    <img class="" src="/media/img/a7/93/25cde2e166d4085945aa.png" alt="B8" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/a7/93/25cde2e166d4085945aa.png"
    
    data-srcset="/media/img/a7/93/25cde2e166d4085945aa.png 282w"
    
    alt="B8"
    class="lazyload" />


                                </div>
                            </div>
                        </a>
                    </article>
                </div>
            
                
                <div class="slider__col">
                    <article class="offer">
                        <a class="offer__link js-topOfferLink" href="https://www.lidl.hr/l/hr/letak/vrijedi-od-05-02-do-10-02-ponuda-od-ponedjeljka-05-02/view/flyer/page/71?utm_medium=display&amp;utm_source=vecernji&amp;utm_campaign=online_premium_sales_veljaca_2024&amp;utm_content=widget_pv_mesnica_svjeza_mlada_teletina_za_pecenje" target="_blank" title="">
                            <div class="offer__image">
                                <div class="image image--top-offer">
                                    
<noscript>
    <img class="" src="/media/img/39/e8/460bcb359ff70eb9520f.jpeg" alt="B1" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/39/e8/460bcb359ff70eb9520f.jpeg"
    
    data-srcset="/media/img/39/e8/460bcb359ff70eb9520f.jpeg 282w"
    
    alt="B1"
    class="lazyload" />


                                </div>
                            </div>
                        </a>
                    </article>
                </div>
            
                
                <div class="slider__col">
                    <article class="offer">
                        <a class="offer__link js-topOfferLink" href="https://www.lidl.hr/l/hr/letak/vrijedi-od-05-02-do-10-02-ponuda-od-ponedjeljka-05-02/view/flyer/page/70?utm_medium=display&amp;utm_source=vecernji&amp;utm_campaign=online_premium_sales_veljaca_2024&amp;utm_content=widget_pv_lsv_svjeza_jaja" target="_blank" title="">
                            <div class="offer__image">
                                <div class="image image--top-offer">
                                    
<noscript>
    <img class="" src="/media/img/ec/6c/a9f8e12bf8ee0239b0a1.jpeg" alt="B2" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/ec/6c/a9f8e12bf8ee0239b0a1.jpeg"
    
    data-srcset="/media/img/ec/6c/a9f8e12bf8ee0239b0a1.jpeg 282w"
    
    alt="B2"
    class="lazyload" />


                                </div>
                            </div>
                        </a>
                    </article>
                </div>
            
                
                <div class="slider__col">
                    <article class="offer">
                        <a class="offer__link js-topOfferLink" href="https://www.lidl.hr/l/hr/letak/vrijedi-od-05-02-do-10-02-ponuda-od-ponedjeljka-05-02/view/flyer/page/70?utm_medium=display&amp;utm_source=vecernji&amp;utm_campaign=online_premium_sales_veljaca_2024&amp;utm_content=widget_pv_lp_biljni_margarin" target="_blank" title="">
                            <div class="offer__image">
                                <div class="image image--top-offer">
                                    
<noscript>
    <img class="" src="/media/img/af/ee/8126579f3fdfaaaae1ae.jpeg" alt="B3" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/af/ee/8126579f3fdfaaaae1ae.jpeg"
    
    data-srcset="/media/img/af/ee/8126579f3fdfaaaae1ae.jpeg 282w"
    
    alt="B3"
    class="lazyload" />


                                </div>
                            </div>
                        </a>
                    </article>
                </div>
            
                
                    </div>
                    <div class="slider__item">
                
                <div class="slider__col">
                    <article class="offer">
                        <a class="offer__link js-topOfferLink" href="https://www.lidl.hr/l/hr/letak/vrijedi-od-05-02-do-10-02-ponuda-od-ponedjeljka-05-02/view/flyer/page/72?utm_medium=display&amp;utm_source=vecernji&amp;utm_campaign=online_premium_sales_veljaca_2024&amp;utm_content=widget_pv_lsv_kraljevske_kozice" target="_blank" title="">
                            <div class="offer__image">
                                <div class="image image--top-offer">
                                    
<noscript>
    <img class="" src="/media/img/8a/e8/27ee2db5e93b5d19a269.jpeg" alt="B4" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/8a/e8/27ee2db5e93b5d19a269.jpeg"
    
    data-srcset="/media/img/8a/e8/27ee2db5e93b5d19a269.jpeg 282w"
    
    alt="B4"
    class="lazyload" />


                                </div>
                            </div>
                        </a>
                    </article>
                </div>
            
                
                <div class="slider__col">
                    <article class="offer">
                        <a class="offer__link js-topOfferLink" href="https://www.lidl.hr/l/hr/letak/vrijedi-od-05-02-do-10-02-ponuda-od-ponedjeljka-05-02/view/flyer/page/70?utm_medium=display&amp;utm_source=vecernji&amp;utm_campaign=online_premium_sales_veljaca_2024&amp;utm_content=widget_pv_lsv_domaca_kobasica" target="_blank" title="">
                            <div class="offer__image">
                                <div class="image image--top-offer">
                                    
<noscript>
    <img class="" src="/media/img/84/52/ed72b915e0a09fc6a8ac.jpeg" alt="B5" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/84/52/ed72b915e0a09fc6a8ac.jpeg"
    
    data-srcset="/media/img/84/52/ed72b915e0a09fc6a8ac.jpeg 282w"
    
    alt="B5"
    class="lazyload" />


                                </div>
                            </div>
                        </a>
                    </article>
                </div>
            
                
                <div class="slider__col">
                    <article class="offer">
                        <a class="offer__link js-topOfferLink" href="https://www.lidl.hr/l/hr/letak/vrijedi-od-05-02-do-10-02-ponuda-od-ponedjeljka-05-02/view/flyer/page/73?utm_medium=display&amp;utm_source=vecernji&amp;utm_campaign=online_premium_sales_veljaca_2024&amp;utm_content=widget_pv_lsv_mljevena_kava_classic" target="_blank" title="">
                            <div class="offer__image">
                                <div class="image image--top-offer">
                                    
<noscript>
    <img class="" src="/media/img/4a/7d/414b61fc354fdd6d53d5.jpeg" alt="B6" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/4a/7d/414b61fc354fdd6d53d5.jpeg"
    
    data-srcset="/media/img/4a/7d/414b61fc354fdd6d53d5.jpeg 282w"
    
    alt="B6"
    class="lazyload" />


                                </div>
                            </div>
                        </a>
                    </article>
                </div>
            
                
                <div class="slider__col">
                    <article class="offer">
                        <a class="offer__link js-topOfferLink" href="https://www.lidl.hr/l/hr/letak/vrijedi-od-05-02-do-10-02-ponuda-od-ponedjeljka-05-02/view/flyer/page/70?utm_medium=display&amp;utm_source=vecernji&amp;utm_campaign=online_premium_sales_veljaca_2024&amp;utm_content=widget_pv_lsv_svjeza_delikatesna_mesna_salata" target="_blank" title="">
                            <div class="offer__image">
                                <div class="image image--top-offer">
                                    
<noscript>
    <img class="" src="/media/img/cf/5f/2e07393d4b3b61840db9.jpeg" alt="B7" />
</noscript>
<img
    data-sizes="auto"
    data-src="/media/img/cf/5f/2e07393d4b3b61840db9.jpeg"
    
    data-srcset="/media/img/cf/5f/2e07393d4b3b61840db9.jpeg 282w"
    
    alt="B7"
    class="lazyload" />


                                </div>
                            </div>
                        </a>
                    </article>
                </div>
            
        </div>
    </div>
</div>

                    </div>
                    

                    

                </div>
            </div>
        </section>
    


        
    </textarea>
    

    
        
  <!-- Schema Markup - article -->

<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "NewsArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "/vijesti/prepiska-turudic-rimac-plenkovic-danas-na-sjednici-hdz-a-ocekuje-se-izjava-1744091"
  },
  "headline": "&#39;Turudić nije lagao o odnosu s Rimac, bio je reduciran u svom izričaju. HDZ ostaje pri svom stavu&#39;",
  
  "image": {
    "@type": "ImageObject",
    "url": "https://www.vecernji.hr/media/img/d1/c8/739f543ad9797a58d014.jpeg",
    "height": 1024,
    "width": 768
  },
  
  "datePublished": "2024-02-05T17:37:00+01:00",
  "dateModified": "2024-02-05T21:42:40.136353+01:00",
  
  "author": [
    
      {
        "@type": "Person",
        "name": "vecernji.hr"
      },
    
      {
        "@type": "Person",
        "name": "Paula Hađur"
      }
    
  ],
  
  "publisher": {
    "@type": "Organization",
    "name": "Večernji.hr",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.vecernji.hr/static/images/vecernji.jpg"
    }
  },
  "description": "Premijer Andrej Plenković je poručio kako HDZ ostaje pri svom stavu oko prijedloga Turudića za šefa DORH-a, naglasivši kako je odabran jer je bio &#39;&#39;najbolji od četvero kandidata&#39;&#39;",
  "keywords": "Andrej Plenković, HDZ, Ivan Turudić"
}
</script>






  <!-- Schema Map - videos -->
  <script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "MediaObject",
    "video": [
      
        {
          "@type": "VideoObject",
          "name": "Andrej Plenković ustraje na izboru Turudića za glavnog državnog odvjetnika",
          "description": "Andrej Plenković ustraje na izboru Turudića za glavnog državnog odvjetnika",
          "thumbnailUrl": "https://www.vecernji.hr/media/images/2024-06/pxl-050224-109648538_Zdl40AK.jpg",
          "uploadDate": "2024-02-05T18:28:02.957188+01:00",
          "contentUrl": "https://video.vecernji.hr/portal/2024/2/65ab2ac5.mp4"
        },
      
        {
          "@type": "VideoObject",
          "name": "Andrej Plenković ustraje na izboru Turudića za glavnog državnog odvjetnika",
          "description": "Andrej Plenković ustraje na izboru Turudića za glavnog državnog odvjetnika",
          "thumbnailUrl": "https://www.vecernji.hr/media/images/2024-06/pxl-050224-109648539_rOzxy5n.jpg",
          "uploadDate": "2024-02-05T18:36:00.730942+01:00",
          "contentUrl": "https://video.vecernji.hr/portal/2024/2/882e37bd.mp4"
        }
      
    ]
  }
  </script>


        
        
            <!-- Schema Markup - gallery -->

<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "ImageGallery",
  "description": "Plenković: HDZ će ustrajati na Turudiću kao kandidatu za glavnog državnog odvjetnika",

  "associatedMedia": [
    
      {
        "@type": "ImageObject",
        "contentUrl": "https://www.vecernji.hr/vijesti/prepiska-turudic-rimac-plenkovic-danas-na-sjednici-hdz-a-ocekuje-se-izjava-1744091/galerija-592178?page=1",
        "caption": "Andrej Plenković ustraje na izboru Turudića za glavnog državnog odvjetnika"
      },
    
      {
        "@type": "ImageObject",
        "contentUrl": "https://www.vecernji.hr/vijesti/prepiska-turudic-rimac-plenkovic-danas-na-sjednici-hdz-a-ocekuje-se-izjava-1744091/galerija-592178?page=2",
        "caption": "Andrej Plenković ustraje na izboru Turudića za glavnog državnog odvjetnika"
      },
    
      {
        "@type": "ImageObject",
        "contentUrl": "https://www.vecernji.hr/vijesti/prepiska-turudic-rimac-plenkovic-danas-na-sjednici-hdz-a-ocekuje-se-izjava-1744091/galerija-592178?page=3",
        "caption": "Andrej Plenković ustraje na izboru Turudića za glavnog državnog odvjetnika"
      },
    
      {
        "@type": "ImageObject",
        "contentUrl": "https://www.vecernji.hr/vijesti/prepiska-turudic-rimac-plenkovic-danas-na-sjednici-hdz-a-ocekuje-se-izjava-1744091/galerija-592178?page=4",
        "caption": "Andrej Plenković ustraje na izboru Turudića za glavnog državnog odvjetnika"
      },
    
      {
        "@type": "ImageObject",
        "contentUrl": "https://www.vecernji.hr/vijesti/prepiska-turudic-rimac-plenkovic-danas-na-sjednici-hdz-a-ocekuje-se-izjava-1744091/galerija-592178?page=5",
        "caption": "Andrej Plenković ustraje na izboru Turudića za glavnog državnog odvjetnika"
      },
    
      {
        "@type": "ImageObject",
        "contentUrl": "https://www.vecernji.hr/vijesti/prepiska-turudic-rimac-plenkovic-danas-na-sjednici-hdz-a-ocekuje-se-izjava-1744091/galerija-592178?page=6",
        "caption": "Andrej Plenković ustraje na izboru Turudića za glavnog državnog odvjetnika"
      }
    
  ]
}
</script>

        
    



                    </main>

                    
                        <footer class="footer">
    <div class="footer__inner">
        <div class="footer__logo">
            <a href="/" class="logo logo--transparent">Večernji list</a>
        </div>
    </div>
</footer>

                        <div class="js_tokie is-hidden" data-tokie="Ht5AZVkNLPH8qREpSyEb7l51Bw2tu9FxbbVlJWQhUarQwHUdK1TiX2BeKaumvV2p"></div>
                    

                </div>

            </div>
        

        
            <div class="toaster__response toaster__response--warning js_toaster">
                <div class="toaster__response_icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_109_809)"><path d="M12 0C5.3832 0 0 5.38327 0 12C0 18.6167 5.3832 24 12 24C18.6168 24 24 18.6169 24 12C24 5.38313 18.6168 0 12 0ZM12 21.8182C6.58618 21.8182 2.18182 17.4138 2.18182 12C2.18182 6.58618 6.58618 2.18182 12 2.18182C17.4138 2.18182 21.8182 6.58633 21.8182 12C21.8182 17.4137 17.4137 21.8182 12 21.8182Z" fill="white"/><path d="M12.0002 5.09082C11.1983 5.09082 10.5459 5.74362 10.5459 6.54602C10.5459 7.34769 11.1983 7.99991 12.0002 7.99991C12.802 7.99991 13.4544 7.34769 13.4544 6.54602C13.4544 5.74362 12.802 5.09082 12.0002 5.09082Z" fill="white"/><path d="M12.0001 10.1816C11.3976 10.1816 10.9092 10.6701 10.9092 11.2725V17.818C10.9092 18.4205 11.3976 18.9089 12.0001 18.9089C12.6026 18.9089 13.091 18.4205 13.091 17.818V11.2725C13.091 10.6701 12.6026 10.1816 12.0001 10.1816Z" fill="white"/></g><defs><clipPath id="clip0_109_809"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>

                </div>
                
                <div class="toaster__response_text js_toasterText"></div>

                <div class="toaster__close js_closeToaster">
                    <svg class="icon__close" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6.34314575 4.92893219 5.65689325 5.65610681 5.6568152-5.65610681c.3905243-.39052429 1.0236893-.39052429 1.4142136 0s.3905243 1.02368927 0 1.41421356l-5.6560288 5.65689325 5.6560288 5.6568152c.3905243.3905243.3905243 1.0236893 0 1.4142136s-1.0236893.3905243-1.4142136 0l-5.6568152-5.6560288-5.65689325 5.6560288c-.39052429.3905243-1.02368927.3905243-1.41421356 0s-.39052429-1.0236893 0-1.4142136l5.65610681-5.6568152-5.65610681-5.65689325c-.39052429-.39052429-.39052429-1.02368927 0-1.41421356s1.02368927-.39052429 1.41421356 0z" fill="#fff" fill-rule="evenodd"/></svg>

                </div>
            </div>
        

        <script src="/static/vlredesign/js/vendor/lazysizes.min.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="/static/js/lib/jquery-2.1.3.min.js"><\/script>')</script>
        <script src="/static/vlredesign/js/vendor/jquery-throttle-debounce.min.js"></script>
        <script src="/static/vlredesign/js/vendor/iframeResizer.min.js"></script>

        

        
    <script src="/static/vlredesign/js/modules/polls.js?bust=20231107"></script>
    <script src="/static/vlredesign/js/modules/video_player.js?bust=20231107"></script>
    <script src="/static/vlredesign/js/modules/piano.js"></script>

    
    <script type="text/javascript" src=https://waytogrow.bbvms.com/e/417.js></script>
    


        
            <link rel="stylesheet" href="/static/vlredesign/js/vendor/flickity/flickity.min.css">
            <script src="/static/vlredesign/js/vendor/flickity/flickity.pkgd.min.js"></script>
            <script src="/static/vlredesign/js/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
            
            <script src="/static/vlredesign/js/vendor/jquery-cookie/jquery.cookie-1-4-1.js"></script>
            <script src="/static/vlredesign/js/vendor/t.min.edited.js"></script>

            <script src="/static/vlredesign/js/misc.js?bust=20231107"></script>
        

        
<script type="text/javascript">
;e = encodeURIComponent;
var _styt = _styt || [];_styt.push('url='+e(location.href));_styt.push('ref='+e(document.referrer));_styt.push('title='+e(document.title));

    (function() {
        function dotck() {var d = new Date();_styt.push(['seed='+d.getTime()+Math.random()]);return _styt.join('&');};
        var tck = document.createElement('script');tck.type = 'text/javascript';tck.async = true;tck.src = '/analytics/track.js?'+dotck();var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(tck, s);
    })();
</script>


        
    
            <div id='divAIO1'>
    <script type='text/javascript'>
        googletag.cmd.push(function() { googletag.display('divAIO1'); });
    </script>
</div>

            <div id='divAIO2'>
    <script type='text/javascript'>
        googletag.cmd.push(function() { googletag.display('divAIO2'); });
    </script>
</div>

        
    <div id='divAIO3'>
    <script type='text/javascript'>
        googletag.cmd.push(function() { googletag.display('divAIO3'); });
    </script>
</div>



        
            
            
                




<script>
    (function(src) {
        var a = document.createElement('script');
        a.type = 'text/javascript';
        a.async = true;
        a.src = src;
        var b = document.getElementsByTagName('script')[0];
        b.parentNode.insertBefore(a, b)
    })('//experience.tinypass.com/xbuilder/experience/load?aid=lIwrWjnppu');
</script>

<script>
    tp = window.tp || [];

    var pianoData = {
        userRef : 'None' !== 'None' ? 'None' : '',
        isArticlePremium : 'False' === 'True' || '' === 'True',
        isUserAuth : 'ne' === 'da',
        userId: 'None',
        articleId: '1744091',
        articleType: 'a',
        articleLayout: 'None' === 'None' ? 'default' : 'gallery'
    };

    var pianoTag = pianoData.isArticlePremium ? pianoData.articleLayout === 'gallery' ? 'premium_gallery' : 'premium' : '';

    tp.push(['init', function () {
        tp.push(['setUserRef', pianoData.userRef ]);
        tp.push(['setTags', [pianoTag]]);
        tp.enableGACrossDomainLinking('UA-98836491-1');
        tp.experience.init();
    }]);

    tp.push(['addHandler', 'checkoutComplete', function (conversion) {
        dataLayer.push({
            event: 'piano',
            eventCategory: 'Piano',
            eventAction: 'purchase completed',
            eventLabel: conversion.offerId
        });

        // Piano tracking by Smartocto
        _ain.pushConversion(
            `Vecernji - Subscription - ${conversion.termId}`,
            {
                'url': window.location.href,
                'postid': pianoData.articleId
            }
        );
    }]);

    tp.push(['addHandler', 'customEvent', function (event) {

        var pianoData = event.params.params.split('***');

        var paramsData = JSON.parse(pianoData[0]);
        var termData = JSON.parse(pianoData[1]);

        var checkoutDataObj = {
            offerId: paramsData.offerId,
            termId: termData.termId,
            trackingId: paramsData.trackingId,
            templateId: paramsData.templateId,
            description: termData.description
        };

        switch (event.eventName) {
            case 'triggerUserData':
                var triggerUserDataModal = new CustomEvent('pianoTriggerUserData', { detail: checkoutDataObj });
                document.body.dispatchEvent(triggerUserDataModal);
                break;
            case 'triggerRegister':
                var pianoTriggerRegister = new Event('pianoTriggerRegistration');
                document.body.dispatchEvent(pianoTriggerRegister);
                break;
            case 'triggerLogin':
                var pianoTriggerLogin = new CustomEvent('pianoTriggerLogin', { detail: checkoutDataObj });
                document.body.dispatchEvent(pianoTriggerLogin);
                break;
        }
    }]);

    
    
    
</script>

            
        

        
        

        
        

    </body>
</html>



