(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1006:function(e,t,i){"use strict";i.d(t,"j",(function(){return a})),i.d(t,"b",(function(){return o})),i.d(t,"i",(function(){return c})),i.d(t,"h",(function(){return d})),i.d(t,"g",(function(){return r})),i.d(t,"c",(function(){return u})),i.d(t,"f",(function(){return h})),i.d(t,"a",(function(){return l})),i.d(t,"d",(function(){return s})),i.d(t,"e",(function(){return n}));const a={become_creator:"Become a creator",search_media:"Search videos and photos",search_tags:"Search tags",search_creators:"Search creators",search_favorites:"Search favorites",upload:"Upload",messages:"Messages",account:"Register for nude videos and photos",account_authed:"Account",account_me:"Profile",account_me_edit:"Edit - Profile",account_myMedia:"My media",account_consent:"Consent",account_earnings:"Earnings",account_earnings_payoutMethods:"Payout methods - Earnings",account_earnings_addNew:"New payout method - Earnings",account_earnings_addBankAccount:"Add bank account - Earnings",account_earnings_editBankAccount:"Edit bank account - Earnings",account_earnings_addPaxumAccount:"Add paxum account - Earnings",account_earnings_editPaxumAccount:"Edit paxum account - Earnings",account_purchases:"Purchases",account_settings:"Settings",account_settings_genderPreferences:"Gender preferences - Settings",account_settings_usernameEmail:"Username and email - Settings",account_settings_password:"Password - Settings",account_settings_blockedAccounts:"Blocked accounts - Settings",account_settings_geoBlocking:"Geo blocking - Settings",account_settings_deleteAccount:"Delete account - Settings",account_settings_geoBlockingCountries:"Select countries to block - Settings",account_settings_notifications:"Notifications - Settings",account_about:"About",account_about_termsOfService:"Terms of service",account_about_affiliateTerms:"Affiliate Terms and Conditions",account_about_privacyPolicy:"Privacy policy",account_about_cookiePolicy:"Cookie policy",account_about_dmca:"DMCA",account_about_privacyRemoval:"Privacy removal",account_about_dmcaForm:"DMCA form",account_about_sitemap:"Sitemap",account_followers:"Followers",account_following:"Following",account_subscribers:"Subscribers",new_message:"New message",new_direct_message:"New direct message",utah:"State of Utah Warning",new_automated_message:"New automated message",edit_automated_message:"Edit automated message",account_live:"Live"},s="Browse content from the top adult creators.",n="Top Adult Creators",o=e=>({hid:"description",name:"description",content:e?"".concat(e," - ").concat(s):"".concat(s)}),c=function(){return{hid:"og:title",name:"og:title",property:"og:title",content:"".concat((arguments.length>0&&void 0!==arguments[0]?arguments[0]:n)||n," - Sex.com")}},r=e=>({hid:"og:description",name:"og:description",property:"og:description",content:e?"".concat(e," - ").concat(s):"".concat(s)}),d=e=>({hid:"og:image",name:"og:image",property:"og:image",content:"".concat(e)}),u={hid:"viewport",name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"},h={hid:"robots",name:"robots",content:"noindex"},l=function(e){return{rel:"canonical",url:"".concat(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://shorts.sex.com","/").concat(e)}}},1007:1008:function(e,t,i){"use strict";class a{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.mediaType=e,this.getPage=t.getPage,this.refreshPage=t.refreshPage,this.itemTransformFunction=t.itemTransformFunction,this.mixin=this.initMixin(),this.control=this.initControl()}initMixin(){return{data:()=>({[this.mediaType]:{items:[],hasNextPage:!0,initFetchPending:!1,fetchPending:!1,refreshPending:!1,page:1,activeItemIdx:0}})}}initControl(){const e=this;return{fetch:async function(){const t=this[e.mediaType];if(!t.fetchPending&&t.hasNextPage){t.initFetchPending=!t.items.length&&t.hasNextPage,t.fetchPending=!0;try{const{page:{items:i,pageInfo:{hasNextPage:a,nextPageNumber:s}}}=await e.getPage.call(this,t.page);i.forEach((i=>{if(e.itemTransformFunction){const a=e.itemTransformFunction.call(this,i);t.items.push({...a})}else null!=i&&i.media?t.items.push(i.media):t.items.push(i)})),t.hasNextPage=a,t.page=s,t.fetchPending=!1,t.initFetchPending=!1}catch(i){t.fetchPending=!1,this.$logError(i)}}},refresh:async function(){const t=this[e.mediaType];if(!t.refreshPending){t.refreshPending=!0;try{const i=await e.refreshPage.call(this,t.items.length);if(i){const{page:{items:a}}=i;t.items=a.map(e.itemTransformFunction?e.itemTransformFunction.bind(this):e=>e.media)}}catch(i){this.$logError(i)}finally{t.refreshPending=!1}}},reset:function(){this[e.mediaType]={items:[],hasNextPage:!0,initFetchPending:!1,fetchPending:!1,page:1,activeItemIdx:0}}}}}var s=i(1007);t.a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=[],i=new Map,n=Object.values(s.a),o=e.map((e=>e.type));return e.forEach((e=>{if(!n.includes(e.type))throw new Error("Media type should be one of specified MediaTypes");if("object"!=typeof e.dataMethods)throw new TypeError("DataMethods should be an object");if("function"!=typeof e.dataMethods.getPage||"function"!=typeof e.dataMethods.refreshPage)throw new TypeError("DataMethods should contain getPage and refreshPage methods");const s=new a(e.type,e.dataMethods);t.push(s.mixin),i.set(e.type,s.control)})),{mixins:[...t],props:{activeTabProp:{type:String,default:s.a.videos}},provide:watch:{async activeTabProp,async sxFetch(){await this.callFetch()},datacomputed:{videosTabActive(){return this.activeTab===s.a.videos},photosTabActiveactiveItem(){const{items:e,activeItemIdx:t}=this[this.activeTab];return e[t]?e[t]:null},openedByCrawler(){return o.reduce(((e,t)=>this.$route.query[t]||e),!1)}},methods:{setTabAndPage(){const{$route:e}=this,{page:t}=e.query;"direct-media-link"===this.$route.name&&this.preventTabSwitch||o.forEach((i=>{e.query[i]&&(this.activeTab=i,this[i].page=+t||1)}))},async fetchProductByDirectLink(){const{$api:e,$route:t,videos:i}=this,{type:a,caption:n}=t.params;if(a&&n){var o;const{product:a}=await e.products.getProductByRelativeUrl(decodeURI(t.path.slice(1)));this.activeTab=s.a.videos,i.items.push({...a});let n=null;a.promoMediaUid?n=this.cdnImageProcess(a.media.thumbnail.fullPath,{width:"300",aspectRatio:"1:1"}):null!==(o=a.user.avatar)&&void 0!==o&&o.fullPath&&(n=this.cdnImageProcess(a.user.avatar.fullPath,{width:"300",aspectRatio:"1:1"}));const c="".concat(a.title);return{title:c?"".concat(a.user.displayName," - ").concat(c):a.user.displayName,ogImage:n}}return{title:null,ogImage:null}},async fetchMediaByDirectLink(){const{$api:e,$route:t,videos:i,photos:a}=this;i.initFetchPending=!0,a.initFetchPending=!0;const n={title:null,ogImage:null},{type:o,caption:c}=t.params,r={video:s.a.videos,picture:s.a.photos};if(o&&c){var d;const{media:s}=await e.media.getMediaByRelativeUrl(decodeURI(t.path.slice(1))),{mediaType:o}=s;if(!o)return n;let c;this.activeTab=r[o],s.injectedOnClient=!0,"video"===o?(i.items.push(s),i.initFetchPending=!1,c=this.cdnImageProcess(s.thumbnail.fullPath,{width:"300",aspectRatio:"1:1"})):(a.items.push(s),a.initFetchPending=!1,c=this.cdnImageProcess(s.publicFullPath,{width:"300",aspectRatio:"1:1"}));const u=s.tags.map(().join(" "),h="".concat(null!==(d=s.caption)&&void 0!==d?d:""," ").concat(null!=u?u:"").trim();return{title:h?"".concat(s.user.displayName," - ").concat(h):s.user.displayName,ogImage:c}}return n},isTabActivegetActiveItem(){const{items:e,activeItemIdx:t}=this[this.activeTab];return e.length&&e[t]?e[t]:null},getActiveItemIndex(){const{items:e,activeItemIdx:t}=this[this.activeTab];return e.length&&e[t]?t:null},async onTabChanged(e){this.activeTab!==e&&(this.activeTab=e,this.$emit("tab-changed",e),o.forEach((e=>{this.isTabActive(e)&&(!this[e].items.length&&this[e].hasNextPage||this[e].activeItemIdx>=this[e].items.length-2)&&this.callFetchFunction(e)})))},async onActiveItemChanged(e){await this.clearUrl(),this.innerItems?this.$refs.innerFeed.onActiveItemChanged(e):o.forEach((t=>{this.isTabActive(t)&&(this[t].activeItemIdx=e,e>=this[t].items.length-2&&!this[t].fetchPending&&this.callFetchFunction(t))}))},async loadMore(e){o.forEach((t=>{(e?e===t:this.isTabActive(t))&&this.callFetchFunction(t)}))},async fetchListPage(){const e=o.map((async e=>{await this.callFetchFunction(e)}));await Promise.all(e)},async resetListPage(){const e=o.map((async e=>{await this.callResetFunction(e)}));await Promise.all(e)},async refreshListPage(){const e=o.map((async e=>{await this.callRefreshFunction(e)}));await Promise.all(e)},clearMediaData(){this.activeTab=this.activeTabProp,o.forEach(()},async clearUrl(){const{name:e}=this.$route;"direct-media-link"!==e&&"model-live"!==e||await this.$router.replace("/")},async callFetch(){this.setTabAndPage();const e=o.map((async e=>{this.isTabActive(e)&&await this.callFetchFunction(e)}));await Promise.all(e)},async callFetchFunction(e){await i.get(e).fetch.call(this)},async callRefreshFunction(e){await i.get(e).refresh.call(this)},callResetFunction(e){i.get(e).reset.call(this)},searchByUid(e){let t;return o.forEach((i=>{t=t||this[i].items.find((t=>e===(t.videoUid||t.pictureUid||t.productUid)))})),t}}}}},1011:function(e,t,i){"use strict";t.a={mounted(){this.$nuxt.$on("sx-comment-added",this.onCommentAdded),this.$nuxt.$on("sx-comment-removed",this.onCommentRemoved)},beforeDestroymethods:{onCommentAdded(e){let{mediaUid:t}=e;const i=this.searchByUid(t);if(i&&(i.totalCommentsCount+=1),this.innerFeed){const e=this.innerFeed.searchByUid(t);e&&(e.totalCommentsCount+=1)}},onCommentRemoved(e){let{mediaUid:t,decrement:i=1}=e;const a=this.searchByUid(t);if(a&&(a.totalCommentsCount-=i),this.innerFeed){const e=this.innerFeed.searchByUid(t);e&&(e.totalCommentsCount-=i)}}}}},1016:function(e,t,i){var a=i(1035);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,i(8).default)("12c0254e",a,!0,{sourceMap:!1})},1017:function(e,t,i){var a=i(1037);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,i(8).default)("d464da82",a,!0,{sourceMap:!1})},1019:function(e,t,i){"use strict";t.a={mounted(){this.$nuxt.$on("sx-block",this.onBlock)},beforeDestroymethods:{updateMediaType(e,t){const i=e.activeItemIdx,a=e.items.slice(0,i).filter(().length;e.activeItemIdx=i-a,e.items=e.items.filter(()},onBlock(e){let{username:t}=e;this.videos&&Array.isArray(this.videos.items)&&this.videos.items.length&&this.updateMediaType(this.videos,t),this.photos&&Array.isArray(this.photos.items)&&this.photos.items.length&&this.updateMediaType(this.photos,t),this.innerFeed&&(this.innerFeed.videos&&Array.isArray(this.innerFeed.videos.items)&&this.innerFeed.videos.items.length&&this.updateMediaType(this.innerFeed.videos,t),this.innerFeed.photos&&Array.isArray(this.innerFeed.photos.items)&&this.innerFeed.photos.items.length&&this.updateMediaType(this.innerFeed.photos,t))}}}},1026:function(e,t,i){"use strict";t.a={methods:{async subscribe(e){let{item:t}=e;if("login"!==(await this.$auth()).status)return;if(await this.authActionPromise,this.subscription)return;const{subscription:i}=await this.$apiCache.users.getUserData(t.username,{userUid:t.userUid,username:t.username});i||await this.showSubscribeModal(t)},async showSubscribeModal(e){const t=this.$apiCache.users,[i,a,s]=await Promise.all([(async()=>(await t.getUserData(e.username,{userUid:e.userUid,username:e.username})).subscription)(),(async()=>(await t.getUserData(e.username,{userUid:e.userUid,username:e.username})).product)(),(async()=>{const{user:i}=await t.getUser(e.username,e.username);return i})()]),n={user:{userUid:s.userUid,avatar:s.profile.avatar,displayName:s.profile.displayName}},o=await this.$subscribeModal({user:n.user,subscription:i,product:a,resubscribe:!1});"subscribed"===o.status&&(this.$nuxt.$emit("sx-subscribe",o.subscription),t.invalidate(e.username),this.onSubscribeAction&&await this.onSubscribeAction(o.subscription),this.$showSuccessMessage("Subscribed"))}}}},1034:function(e,t,i){"use strict";i(1016)},1035:function(e,t,i){var a=i(7)((function(e){return e[1]}));a.push([e.i,"/*purgecss start ignore*/\n.sx-media-min-content-height[data-v-1fe2539b]{\n  min-height:200px\n}\n\n/*purgecss end ignore*/",""]),a.locals={},e.exports=a},1036:function(e,t,i){"use strict";i(1017)},1037:function(e,t,i){var a=i(7)((function(e){return e[1]}));a.push([e.i,"/*purgecss start ignore*/\n.sx-media-min-content-height[data-v-18b64d3b]{\n  min-height:200px\n}\n\n/*purgecss end ignore*/",""]),a.locals={},e.exports=a},1041:function(e,t,i){"use strict";i.r(t);var a={props:{items:{type:Array,default:()=>[]},fetchPending:{type:Boolean,default:!1},pageSize:{type:Number,default:0},query:{type:String,default:""},page:{type:Number,default:1},hasNextPage:Boolean}},s=(i(1034),i(0)),n=Object(s.a)(a,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"sx-media-min-content-height"},[t("sxc-media-infinite-scroll-wrapper",{attrs:{items:e.items,"get-key":"fetch-pending":e.fetchPending,"page-size":e.pageSize,"placeholders-count":e.pageSize,"data-cy-id":"model-media-container"},on:{loadMore:function(t){return e.$emit("load-more")}},scopedSlots:e._u([{key:"default",fn:function(i){let{item:a}=i;return[t("div",{on:{click:function(t){return e.$emit("select-media",a)}}},[a.videoUid?t("sxc-video-square-item",{attrs:{video:a}}):a.streamUid?t("sxc-stream-square-item",{attrs:{stream:a}}):e._e()],1)]}},{key:"placeholder",fn:function(){return[t("sxc-square-placeholder")]},proxy:!0}])}),e._v(" "),e.hasNextPage?e._m(0):e._e()],1)}),[function(){var e=this;return(0,e._self._c)("nuxt-link",{attrs:{to:"?videos=1&query=".concat(e.query,"&page=").concat(e.page),title:"Sex.com",event:""}})}],!1,null,"1fe2539b",null);t.default=n.exports},1042:function(e,t,i){"use strict";i.r(t);var a={props:{items:{type:Array,default:,fetchPending:{type:Boolean,default:!1},pageSize:{type:Number,default:0},query:{type:String,default:""},page:{type:Number,default:1},hasNextPage:Boolean}},s=(i(1036),i(0)),n=Object(s.a)(a,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"sx-media-min-content-height"},[t("sxc-media-infinite-scroll-wrapper",{attrs:{items:e.items,"get-key":"fetch-pending":e.fetchPending,"page-size":e.pageSize,"placeholders-count":e.pageSize,"data-cy-id":"model-media-container"},on:{loadMore:,scopedSlots:e._u([{key:"default",fn:function(i){let{item:a}=i;return[t("div",{on:{click:},[[t("sxc-photo-square-item",{attrs:{picture:a}})]],2)]}},{key:"placeholder",fn:proxy:!0}])}),e._v(" "),e.hasNextPage?e._m(0):e._e()],1)}),[function(){var e=this;return(0,e._self._c)("nuxt-link",{attrs:{to:"?photos=1&query=".concat(e.query,"&page=").concat(e.page),title:"Sex.com",event:""}})}],!1,null,"18b64d3b",null);t.default=n.exports},1408:1722:1723:1899:function(e,t,i){"use strict";i.r(t);var a=i(1006),s=i(1041),n=i(1042),o=i(1011),c=i(1019),r=i(1008),d=i(1007),u=i(1026);var h={head(){return{title:this.$t("title.search_tags"),meta:[Object(a.b)(this.$t("title.search_tags")),Object(a.i)(a.j.search_tags),Object(a.g)(a.j.search_tags)]}},components:{VideoList:s.default,PhotoList:n.default},inject:["getInnerFeed","setInnerFeed"],mixins:[Object(r.a)([{type:d.a.videos,dataMethods:{getPage:async function(e){const t={};t.tags=this.$route.params.tag;return await this.$api.media.getList(e,12,{...t,mediaType:"video",visibility:"public"})},refreshPage:function(e){const t={};return t.tags=this.$route.params.tag,this.$api.media.getList(1,e,{...t,mediaType:"video"})}}},{type:d.a.photos,dataMethods:{getPage:async function(e){const t={};t.tags=this.$route.params.tag;return await this.$api.media.getList(e,12,{...t,mediaType:"picture",visibility:"public"})},refreshPage:function(e){const t={};return t.tags=this.$route.params.tag,this.$api.media.getList(1,e,{...t,mediaType:"picture"})}}}]),o.a,c.a,u.a],async sxFetchdata:computed:{activeComponent(){switch(this.activeTab){case d.a.videos:return s.default;case d.a.photos:return n.default;default:return null}},activeComponentProps(){const{activeTab:e}=this,{items:t,fetchPending:i,initFetchPending:a,hasNextPage:s,page:n}=this[e];return{items:t.filter((),fetchPending:i,initFetchPending:a,hasNextPage:s,page:n,pageSize:12}}},mountedmethods:{resetPageasync selectMedia(e){const{mediaType:t,videoUid:i,pictureUid:a}=e;"video"===t&&(this.videos.activeItemIdx=this.videos.items.findIndex((e=>e.videoUid===i)),this.$emit("play")),"picture"===t&&(this.photos.activeItemIdx=this.photos.items.findIndex(())}}},l=(i(1722),i(0)),m=Object(l.a)(h,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative h-full w-full overflow-hidden"},[t("sxcd-app",{staticClass:"w-full h-full absolute"},[t("sxcd-app-header",{attrs:{sticky:!1}},[t("sxcd-app-header-back-button",{attrs:{"fallback-link":"/"}}),e._v(" "),t("sxcd-app-header-title",[e._v("\n        #"+e._s(e.$route.params.tag)+"\n      ")])],1),e._v(" "),t("div",{staticClass:"h-full w-full"},[t("div",{staticClass:"h-full flex flex-col"},[t("div",{staticClass:"flex flex-col items-stretch overflow-hidden"},[t("sx-tabs",{attrs:{value:e.activeTab,underlined:""},on:{input:e.onTabChanged}},[t("sx-tab",{attrs:{idx:e.mediaTypes.videos}},[t("nuxt-link",{attrs:{to:"?videos=1",title:"Sex.com",event:""}},[t("sx-icon",{staticStyle:{height:"24px"},attrs:{name:"video",title:"Video"}})],1)],1),e._v(" "),t("sx-tab",{attrs:{idx:e.mediaTypes.photos}},[t("nuxt-link",{attrs:{to:"?photos=1",title:"Sex.com",event:""}},[t("sx-icon",{staticStyle:{height:"24px"},attrs:{name:"photo",title:"Photo"}})],1)],1)],1),e._v(" "),t("keep-alive",[t(e.activeComponent,e._b({tag:"component",staticClass:"overflow-y-auto",on:{"select-media":e.selectMedia,"load-more":e.loadMore}},"component",e.activeComponentProps,!1))],1)],1)]),e._v(" "),e.activeComponentProps.hasNextPage?t("nuxt-link",{attrs:{to:"?".concat(e.activeTab,"=1&page=").concat(e.activeComponentProps.page),title:"Sex.com",event:""}}):e._e()],1)],1)],1)}),[],!1,null,"23eda7d4",null);t.default=m.exports},1951:function(e,t,i){"use strict";i.r(t);var a={middleware:[e=>{let{route:t,redirect:i}=e;i({path:"/tag/".concat(t.params.tag)})}]},s=i(0),n=Object(s.a)(a,undefined,undefined,!1,null,null,null);t.default=n.exports}}]);