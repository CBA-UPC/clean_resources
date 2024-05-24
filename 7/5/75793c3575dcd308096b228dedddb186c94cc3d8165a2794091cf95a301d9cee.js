if(typeof yotpo!=='undefined'&&!yotpo.v2YotpoLoaded){yotpo=undefined;}tpo=function(){c(){this.pageSku&&this.productName&&this.getUserSetting("widget_rich_snippet")&&this.getBatch([{method:"rich_snippet",params:{pid:this.pageSku,name:this.productName,price:this.productPrice,currency:this.productCurrency,image:this.productImage}}])}="POST",e.isIE10OrLess=-1!=navigator.userAgent.indexOf("MSIE"),e.isIE8=e.isIE10OrLess&&8==parseInt(navigator.userAgent.toLowerCase().split("msie")[1]),e.isIEEdge=/Edge\/12./i.test(navigator.userAgent),e.isIE11=navigator.userAgent.indexOf("Trident/7.0")>0,e.isIEFamily=e.isIE10OrLess||e.isIE11||e.isIEEdge,e.dynamicCreateType="POST",e.globals={},e.hosts={widget:{dynamic:"w2.yotpo.com","static":"staticw2.yotpo.com"},api:{dynamic:"api.yotpo.com"},b2b:{dynamic:"my.yotpo.com"},reviews_me:{dynamic:"reviews.me"},base:{dynamic:"yotpo.com"}},e.getWidgetHost=e.getApiHost=e.texts={},e.filterAndSearch={filters_state_manager:{aggregators_types:{}},analytics:{page_types:{}}},e.widgets={main:{selector:".yotpo.yotpo-main-widget"},bottomline:{selector:".yotpo.bottomLine"},embedded:{selector:".yotpo.embedded-widget"},badge:{selector:".yotpo.badge,.yotpo.yotpo-badge"},"questions-bottomline":{selector:".yotpo.QABottomLine"},carousels:{selector:".yotpo.yotpo-reviews-carousel"},slider:{selector:".yotpo.yotpo-slider"},"visual-carousel":{selector:".yotpo.yotpo-visual-carousel"},"pictures-gallery":{selector:".yotpo.yotpo-pictures-gallery"},"pictures-widget":{selector:".yotpo.yotpo-pictures-widget"},"shoppable-gallery":{selector:".yotpo.yotpo-shoppable-gallery"},testimonials:{selector:"#yotpo-testimonials-custom-tab,.yotpo.testimonials"},"single-video":{selector:".yotpo.yotpo-single-video"},"shoppers-say":{selector:".yotpo.yotpo-shoppers-say"}},e.docElement=void 0,e.getDocElement=e.getMainWidget=e.scrollToReviewsTabInMainWidget=e.focusOnRightElement=e.focusOnRightElement.setFocus=e.prototype.on=function(t,i){e.Modules.Event.on.call(this,t,i)},e.prototype.onAllWidgetsReady=function(e){this.allWidgetsReadyCallback.push(e)},e.prototype.trigger=function(t,i){e.Modules.Event.trigger.call(this,t,i)},e.prototype.setState=function(e){this.state=e},e.prototype.getState=function(){return this.state},e.prototype.getWidgetByName=e.prototype.getWidgetsByName=e.prototype.getWidgetsByNames=e.prototype.getAppKey=function(){return this.appKey},e.prototype.getUserSettings=function(){return this.userSettings},e.prototype.getUserSetting=function(e){return this.userSettings[e]},e.prototype.getWidgets=function(){return this.widgets},e.prototype.allowCookies=e.prototype.getTrustedVendorsData=e.prototype.addWidget=e.prototype.getUserReference=function(){return this.userReference},e.prototype.getBatch=e.prototype.init=e.prototype.init_for_async=e.prototype.initWidgets=function(){t.call(this),h.call(this)},e.prototype.clean=e.prototype.updateContent=e.prototype.refreshWidgets=e.prototype.trackEvent=e.prototype.trackPageView=e}(),Yotpo.Element=Yotpo);var EDGE_RANGE_WIDTH=300;Yotpo.escapeHtml=Yotpo.cleanParam=Yotpo.validateStringMaxLength=Yotpo.validateStringHasNoSpecialChars=Yotpo.appendChildElements=Yotpo.validateStringMaxWords=Yotpo.validateStringMinLength=Yotpo.validateEmail=Yotpo.isValidUrl=Yotpo.validateCheckbox=Yotpo.capitalize=Yotpo.camelize=Yotpo.getIEVersion=Yotpo.ready=Yotpo.rotate=Yotpo.hasClass=Yotpo.hasAnyClass=Yotpo.addClass=Yotpo.removeClass=Yotpo.removeClassList=Yotpo.removeClassFromElements=Yotpo.toggleClass=Yotpo.addClassToElements=Yotpo.addEventListener=Yotpo.removeEventListener=Yotpo.keyCodes={escape:27,enter:13,tab:9,right:39,left:37,up:38,down:40},Yotpo.onKeyDown=Yotpo.oneTimeOnKeyDown=Yotpo.onEnterKeyDown=function(e,t){Yotpo.onKeyDown(e,t,[Yotpo.keyCodes.enter])},Yotpo.mouseClickOnEnterKeyDown=Yotpo.onTabKeyDown=function(e,t){Yotpo.onKeyDown(e,t,[Yotpo.keyCodes.tab])},Yotpo.onEscapeKeyDown=Yotpo.onTabAndShiftDown=Yotpo.loopKeyboardTabs=Yotpo.copy=Yotpo.toggleVisibility=Yotpo.setElementsVisibility=Yotpo.toggleAttribute=Yotpo.getDisplayStyle=Yotpo.getVisibilityStyle=Yotpo.getComputedStyle=Yotpo.getComputedMargins=Yotpo.show=Yotpo.hide=Yotpo.remove=Yotpo.getStyle=Yotpo.isHidden=Yotpo.localStorage=localStorage||{getItem:setItem:removeItem:,Yotpo.bindAnimation=Yotpo.supportTouch=Yotpo.togglePreLoader=Yotpo.setSearchInProgressDisplayStatus=Yotpo.scrollTo=Yotpo.moveTo=Yotpo.scrollToTop=Yotpo.mobileCheck=Yotpo.isMobile=Yotpo.compact=Yotpo.forEach=Yotpo.getElementText=Yotpo.getAncestorByClassName=Yotpo.origin=Yotpo.isArray="isArray"in Array?Array.isArray:Yotpo.preloadImages=Yotpo.getDefualtImage=Yotpo.emojiRegex=new RegExp("\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]","g"),Yotpo.getPosition=Yotpo.simulateClickEvent=Yotpo.redirectToUrl=Yotpo.getStars=Yotpo.debounce=Yotpo.injectScript=Yotpo.injectCSS=Yotpo.loadScript=Yotpo.getURLParameter=Yotpo.updateQueryStringParameter=Yotpo.safeConsole=function(){},Yotpo.getDefualtImage=Yotpo.setHoverEnable=Yotpo.isString=function(e){return"string"==typeof e||e instanceof String},Yotpo.isEmptyString=Yotpo.generateUUID=Yotpo.removeUndefinedFields=function(e){return JSON.parse(JSON.stringify(e))},Yotpo.isMethodExists=function(e){return"function"==typeof e},Yotpo.toTitleCase=Yotpo.isInViewport=Yotpo.getBoolSetting=Yotpo.trapModalFocus=Yotpo.supportsPassive=Yotpo.ajax=Yotpo.successfulResponse=Yotpo.convertHashToQueryStringParams=Yotpo.convertComplexObjectToQueryStringParams=Yotpo.convertArrayToQueryStringParam=Yotpo.Animations=Yotpo),Yotpo.Session=Yotpo),Yotpo.Review=Yotpo),Yotpo.InstagramPost=Yotpo),Yotpo.Question=Yotpo),Yotpo.Answer=Yotpo),Yotpo.Tabs=Yotpo),Yotpo.Select=Yotpo),Yotpo.Stars=Yotpo),Yotpo.Messages=Yotpo),Yotpo.Form=Yotpo),Yotpo.FileUploader=Yotpo),Yotpo.Analytics=Yotpo),Yotpo.Inview=Yotpo),document.getElementsByClassName||(document.getElementsByClassName=Element.prototype.getElementsByClassName=document.getElementsByClassName),"function"!=typeof String.prototype.trim&&(String.prototype.trim=,Object.keys||(Object.keys=)),String.prototype.includes||(String.prototype.includes=,"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:writable:!0,configurable:!0}),String.prototype.startsWith||(String.prototype.startsWith=,window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),Yotpo.API=Yotpo),Yotpo.ShareLink=Yotpo),Yotpo.CustomFields=Yotpo),Yotpo.CustomFieldsForm=Yotpo),Yotpo.CustomFieldsRenderer=Yotpo),Yotpo.Libraries=Yotpo.Libraries||{},Yotpo.Libraries.Tracker=Yotpo),Yotpo.Libraries=Yotpo.Libraries||{},Yotpo.Libraries.YotpoTracker=Yotpo),Yotpo.Libraries=Yotpo.Libraries||{},Yotpo.Libraries.FacebookAds=Yotpo),Yotpo.Widgets=Yotpo.Widgets||{},Yotpo.Widgets.Lightbox=function(e){xt",PREVIOUS_IMAGE:"previous"};return t.prototype.open=t.prototype.close=t.prototype.slide=t}(Yotpo),Yotpo.ReviewContentCreator=Yotpo),Yotpo.InstagramContentCreator=Yotpo),Yotpo.ProductContentCreator=Yotpo),Yotpo.SingleReviewContentProvider=Yotpo),Yotpo.SliderContentProvider=Yotpo),Yotpo.TaggedProducts=Yotpo),Yotpo.ImagesHandler=Yotpo),Yotpo.VideoPlayerLoader=Yotpo),Yotpo.ImagesAnalyticsHandler=Yotpo),Yotpo.AnalyticsTracker=Yotpo),Yotpo.ShoppableProductsSlider=Yotpo),Yotpo.SuggestedTopics=Yotpo),Yotpo.Modules=Yotpo.Modules||{},Yotpo.Modules.Cart=Yotpo),Yotpo.Modules=Yotpo.Modules||{},Yotpo.Modules.CollapsibleElement=Yotpo),Yotpo.Modules=Yotpo.Modules||{},Yotpo.Modules.DynamicLayout=Yotpo),Yotpo.Modules=Yotpo.Modules||{},Yotpo.Modules.ButtonEndlessScroll=Yotpo),Yotpo.Modules.InviewEndlessScroll=Yotpo),Yotpo.Modules=Yotpo.Modules||{},Yotpo.Modules.Event=Yotpo),Yotpo.Modules=Yotpo.Modules||{},Yotpo.Modules.GallerySettings=Yotpo),Yotpo.Modules=Yotpo.Modules||{},Yotpo.Modules.Handle=Yotpo),Yotpo.Modules=Yotpo.Modules||{},Yotpo.Modules.Helper=Yotpo),Yotpo.Modules=Yotpo.Modules||{},Yotpo.Modules.KalturaManager=Yotpo),Yotpo.Modules=Yotpo.Modules||{},Yotpo.Modules.lazyLoading=Yotpo),Yotpo.Modules=Yotpo.Modules||{},Yotpo.Modules.MobileSlide=Yotpo),Yotpo.Modules=Yotpo.Modules||{},Yotpo.Modules.Pagination=function(e){var t={};return t.init=function(){for(var i=this,o=n=r=s=a=i.element.getElementsByClassName("yotpo-pager"),l=0;l<a.length;++l)for(var c=a[l].children,d=0;d<c.length;++d){var u=c[d],p=o(u),g=null;"goTo"==p?g=+u.getAttribute("data-page"):"yotpo_next"==p?this instanceof e.Widgets.Basic&&this.supportsPagination()&&s(u,"next",this.settings.page):"yotpo_previous"==p&&this instanceof e.Widgets.Basic&&this.supportsPagination()&&s(u,"prev",this.settings.page);var h=i,p,g);u.onclick=h,e.onEnterKeyDown(u,h)}},t.actions={yotpo_next:yotpo_previous:goTo:,t}(Yotpo),Yotpo.Modules=Yotpo.Modules||{},Yotpo.Modules.PopupWindow=Yotpo),Yotpo.Modules=Yotpo.Modules||{},Yotpo.Modules.Refresh=Yotpo),Yotpo.Modules=Yotpo.Modules||{},Yotpo.Modules.Slide=Yotpo),Yotpo.Modules=Yotpo.Modules||{},Yotpo.Modules.UserAllocation=Yotpo),Yotpo.Modules=Yotpo.Modules||{},Yotpo.Modules.Vote=Yotpo),Yotpo.Helpers=Yotpo.Helpers||{},Yotpo.Helpers.FileValidator=Yotpo),Yotpo.Helpers=Yotpo.Helpers||{},Yotpo.Helpers.ImageUtils=Yotpo),call(this),Yotpo.Helpers=Yotpo.Helpers||{},Yotpo.Helpers.WidthClass=Yotpo),Yotpo.Flows=Yotpo.Flows||{},Yotpo.Flows.ImageUpload=Yotpo),Yotpo.Flows=Yotpo.Flows||{},Yotpo.Flows.ImageUpload=Yotpo.Flows.ImageUpload||{},Yotpo.Flows.ImageUpload.ThankYou=Yotpo),Yotpo.Flows=Yotpo.Flows||{},Yotpo.Flows.UploadButton=Yotpo),Yotpo.Flows=Yotpo.Flows||{},Yotpo.Flows.ImageUpload=Yotpo.Flows.ImageUpload||{},Yotpo.Flows.ImageUpload.UploadError=Yotpo),Yotpo.Flows=Yotpo.Flows||{},Yotpo.Flows.ImageUpload=Yotpo.Flows.ImageUpload||{},Yotpo.Flows.ImageUpload.UploadImages=Yotpo),Yotpo.Flows=Yotpo.Flows||{},Yotpo.Flows.ImageUpload=Yotpo.Flows.ImageUpload||{},Yotpo.Flows.ImageUpload.UserDetails=Yotpo),Yotpo.BaseAggregator=Yotpo),Yotpo.CrfsAggregator=Yotpo),Yotpo.OrdersAggregator=Yotpo),Yotpo.ScoresAggregator=function(e){function t(){e.BaseAggregator.call(this)}return t.prototype=Object.create(e.BaseAggregator.prototype),t.prototype.toJson=function(){return this.baseObject?[this.baseObject]:null},t}(Yotpo),Yotpo.SortsAggregator=Yotpo),Yotpo.TopicsAggregator=Yotpo),Yotpo.FilterAndSearch=Yotpo.FilterAndSearch||{},Yotpo.FilterAndSearch.Analytics=Yotpo.FilterAndSearch.Analytics||{},Yotpo.FilterAndSearch.Analytics.AnalyticsNotifier=Yotpo),Yotpo.FilterAndSearch=Yotpo.FilterAndSearch||{},Yotpo.FilterAndSearch.Analytics=Yotpo.FilterAndSearch.Analytics||{},Yotpo.FilterAndSearch.Analytics.Filtering=Yotpo.FilterAndSearch.Analytics.Filtering||{},Yotpo.FilterAndSearch.Analytics.Filtering.Params=Yotpo),Yotpo.FilterAndSearch=Yotpo.FilterAndSearch||{},Yotpo.FilterAndSearch.ContainersHandlers=Yotpo.FilterAndSearch.ContainersHandlers||{},Yotpo.FilterAndSearch.ContainersHandlers.ReviewsFiltersHandler=Yotpo),Yotpo.CrfFilter=Yotpo),Yotpo.OrderFilter=Yotpo),Yotpo.SortByFilter=Yotpo),Yotpo.FilterAndSearch=Yotpo.FilterAndSearch||{},Yotpo.FilterAndSearch.FiltersHandlers=Yotpo.FilterAndSearch.FiltersHandlers||{},Yotpo.FilterAndSearch.FiltersHandlers.FilterDropDownsHandler=Yotpo),Yotpo.FilterAndSearch=Yotpo.FilterAndSearch||{},Yotpo.FilterAndSearch.FiltersHandlers=Yotpo.FilterAndSearch.FiltersHandlers||{},Yotpo.FilterAndSearch.FiltersHandlers.FilterRadioButtonsHandler=Yotpo),Yotpo.FilterAndSearch=Yotpo.FilterAndSearch||{},Yotpo.FilterAndSearch.FiltersHandlers=Yotpo.FilterAndSearch.FiltersHandlers||{},Yotpo.FilterAndSearch.FiltersHandlers.FilterTagsHandler=Yotpo),Yotpo.FilterAndSearch=Yotpo.FilterAndSearch||{},Yotpo.FilterAndSearch.FiltersHandlers=Yotpo.FilterAndSearch.FiltersHandlers||{},Yotpo.FilterAndSearch.FiltersHandlers.FiltersParser=Yotpo),Yotpo.FiltersState=Yotpo),Yotpo.FiltersStateManager=Yotpo),Yotpo.FreeTextSearch=Yotpo),Yotpo.MobileFilterModal=Yotpo),Yotpo.MobileFiltersRadio=Yotpo),Yotpo.SearchInProgress=Yotpo),Yotpo.HoverIntervalEvent=Yotpo),Yotpo.TestingGroupsHandler=Yotpo),Yotpo.AddToCart=Yotpo),Yotpo.StarDistribution=Yotpo),Yotpo.Widgets=Yotpo.Widgets||{},Yotpo.Widgets.Badge=Yotpo),Yotpo.Widgets=Yotpo.Widgets||{},Yotpo.Widgets.Basic=Yotpo),Yotpo.Widgets=Yotpo.Widgets||{},Yotpo.Widgets.Bottomline=Yotpo),Yotpo.Widgets=Yotpo.Widgets||{},Yotpo.Widgets.Carousels=Yotpo),Yotpo.Widgets=Yotpo.Widgets||{},Yotpo.Widgets.Embedded=Yotpo),Yotpo.Widgets=Yotpo.Widgets||{},Yotpo.Widgets.Main=Yotpo),Yotpo.Widgets=Yotpo.Widgets||{},Yotpo.Widgets.PicturesCollage=Yotpo),Yotpo.Widgets=Yotpo.Widgets||{},Yotpo.Widgets.PicturesGallery=Yotpo),Yotpo.Widgets=Yotpo.Widgets||{},Yotpo.Widgets.GenericGallery=Yotpo),Yotpo.Widgets.PicturesWidget=Yotpo),Yotpo.Widgets=Yotpo.Widgets||{},Yotpo.Widgets.PromotedProducts=Yotpo),Yotpo.Widgets=Yotpo.Widgets||{},Yotpo.Widgets.QuestionsBottomline=Yotpo),Yotpo.Widgets=Yotpo.Widgets||{},Yotpo.Widgets.ShoppableGallery=Yotpo),Yotpo.Widgets=Yotpo.Widgets||{},Yotpo.Widgets.ShoppersSay=Yotpo),Yotpo.Widgets=Yotpo.Widgets||{},Yotpo.Widgets.SingleVideo=Yotpo),Yotpo.Widgets=Yotpo.Widgets||{},Yotpo.Widgets.Slider=Yotpo),Yotpo.Widgets.VisualCarousel=Yotpo),Yotpo.Widgets=Yotpo.Widgets||{},Yotpo.Widgets.Testimonials=Yotpo);var getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,RTCSessionDescription=window.RTCSessionDescription||window.mozRTCSessionDescription,RTCPeerConnection=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,RTCIceCandidate=window.RTCIceCandidate||window.mozRTCIceCandidate;Room.prototype.on=function(e,t){this.handles[e]=t},Room.prototype["in"]=Room.prototype._signal_open=Room.prototype._signal_close=function(e){this._clean(),"function"==typeof this.handles.signal_close&&this.handles.signal_close(e)},Room.prototype._signal_error=Room.prototype._signalSend=Room.prototype._clean=Room.prototype._newPeerConnection=Room.prototype.setStream=function(e){this.stream=e},Room.prototype.create=function(e){this._signalSend({For:"create",Room:e})},Room.prototype.join=Room.prototype.leave=Room.prototype.send=Room.prototype.peersCount=Room.prototype.channelsCount=Room.prototype._signal_message=Room.prototype._join_older=Room.prototype._join_newer=
/**
 * Load Iovation Fingerprint loader for BV Syndication
 */

/**
 * Widget Version
 *
 * @type {String}
*/
Yotpo.version = '2023-09-26_06-41-24';
/**
 * Yotpo hosts
 */
Yotpo.hosts = {"widget":{"dynamic":"w2.yotpo.com","static":"staticw2.yotpo.com"},"api":{"dynamic":"api.yotpo.com"},"b2b":{"dynamic":"my.yotpo.com"},"reviews_me":{"dynamic":"reviews.me"},"base":{"dynamic":"yotpo.com"}};

/**
 * Yotpo mock_test
 */
Yotpo.mock = false;

/**
 * Max batch methods per request
 */
Yotpo.maxBatchMethods = 50;

/**
 * Data requests limit
 */
Yotpo.dataRequestsLimit = 30

/**
 * All available Yotpo texts and thier translations
 *
 * @type {object} - Object of texts and translations
 */
Yotpo.texts = {
    read_more: 'Read More',
    read_less: 'Read Less',
    read_more_about: 'Read more about',
    read_less_about: 'Read less about',
    upload_photos_invalid_type: 'Files must be in JPG, PNG, or GIF formats',
    upload_photos_invalid_size: 'File size over 15MB',
    upload_photos_invalid_image_dimensions: 'Photos must be at least 400 x 400 px',
    upload_photos_invalid_image_file: 'Sorry, we weren’t able to upload your photo',
    upload_video_error: 'Upload failed, please try again',
    upload_video_invalid_type: 'Files must be in JPG, PNG, GIF, MP4, MOV or FLV formats',
    upload_video_invalid_size: 'File size over 2GB',
    add_to_cart_item_unavailable: 'Item unavailable',
    add_to_cart_currently_unavailable: 'Currently unavailable'
}

Yotpo.filterAndSearch = {
    min_reviews_for_filters_container: 3,
    filtered_reviews_title: 'Reviews',
    single_review_title: 'Review',
    free_text_search_input_placeholder: 'Search Reviews',
    filters_drop_down_default_answer: 'All',
    sorts_drop_down_default_answer: 'Select',
    sort_drop_down_most_relevant_value: 'Most Relevant',
    imagesMobileFilterDefaultAnswer: 'All Reviews',
    images_drop_down_answer: 'With Images &amp; Videos',
    rating_tag_title: 'Rating',
    show: 'Show',
    withImagesOnly: 'Images Only',
    filters_state_manager: {
        aggregators_types: {
            crfs: 'crfs',
            scores: 'scores',
            topics: 'topics',
            images: 'images',
            sorts: 'sorts',
            free_text_search: 'free_text_search',
            orders: 'orders'
        }
    },
    analytics: {
        page_types: {
            main_widget: 1,
            dedicated_page: 2,
            testimonials_tab: 3
        }
    }
}

Yotpo.defaultImages = {
    size_180: "https://staticw2.yotpo.com/assets/default_image_180px.jpg",
    size_656: "https://staticw2.yotpo.com/assets/default_image_656px.jpg",
    profile: "https://staticw2.yotpo.com/assets/default_profile.png"
}

/**
 * Share links for all social networks
 */
Yotpo.socialData = {
    facebook: {
        application_id: "226132034107547",
        feed_link: "https://www.facebook.com/dialog/feed"
    },
    twitter: {
        intent_link: "https://twitter.com/intent/tweet"
    },
    google: {
        share_link: "https://plus.google.com/share"
    },
    linkedin: {
        share_link: "https://www.linkedin.com/shareArticle"
    }
}

Yotpo.feature_testing_groups = {}


Yotpo.awsS3Domain = "s3.amazonaws.com"

Yotpo.kalturaServerUrl = ""
Yotpo.yotpoVideoUploaderUrl = 'https://cdn-vms-video-uploader.yotpo.com/vms-video-uploader/master/' + "2019-09-10_12-29-08" + '/yotpo_video_uploader.js'

/**
 * Print a message to the console
 *
 * @param message - message to print to log (string)
 * @param logType - Type of logging to use
 */
Yotpo.safeConsole };

//////////////////////////////////////////////////
/////////////// Yotpo Initiation /////////////////
//////////////////////////////////////////////////

// NOTE!
// Don't declare any functions after this line of code
// this is the initialization of the Yotpo instance
if (typeof yotpo == 'undefined') {
    var yotpo = new Yotpo("Mowjk0P2HVfFu6EJc379Z40NwSliXebh39XChGD6", {"account_settings":{"settings":{"customer_language":"en","account_logo":"https://cdn-yotpo-images-production.yotpo.com/Account/999363/389088546/thumb.jpg?1676885193","domain":"okbeautybox.co.uk","name":"https://okbeautybox.co.uk","auto_publish":true}},"reviews":false,"testimonials":{"settings":{"default_tab":"product_tab","show_tab":"product_tab","display_free_text_filters":false}},"testimonials_tab":false,"questions_and_answers":{"settings":{"send_question_to_shoppers":"0","auto_publish_answers":"0","hide_answers":"0"}},"questions_and_answers_standalone":false,"vendor_review_creation":false,"language":"en","comments":{"settings":{"comments_visibility":"1"}},"async_create":{"settings":{}},"ads":{"settings":{}},"facebook_ads":false,"show_social_links":false,"host":"static","css_custom_host":null,"direction":"ltr","reporting_end_points":["p.yotpo.com"],"close_button":false,"version":"2023-09-26_06-41-24","prevent_duplicate_reviews":false,"custom_fields_info":{},"widget_rich_snippet":{"settings":{}},"carousel_settings":{"settings":{}},"review_with_pictures":{"settings":{"main_widget_visible":"1","testimonials_visible":"1","number_of_pictures_per_review":10,"collection_enabled":true}},"visual_curation":{"settings":{"product_albums_migrator_completed":true,"date_sort":"created_at","secondary_sort":"none","hash_tag":"#approve","thank_you_needed":"1","thank_you_text":"Thanks {user} for sharing your photo with our community! Check out our site to see it live.","new_image_notification_type":"e-mail","notifications_email":"","approval_text":"{user}, your photo is awesome and we would love to feature it. To agree simply reply {hashtag}.","search_product_albums_on_elastic":false}},"visual_carousel":{"settings":{"auto_slide":"0","slider_title":{"show_title":false,"text":"Photos from our community","alignment":"Center","color":"#56575f","font_size":22,"mobile_font_size":18},"slider_hover":{"background_color":"#000000","opacity":0.6,"show_icon":true},"slider_source":["instagram","yotpo_reviews"],"cta_text":"Shop Now","cta_color":"#4f4f4f","full_width":"1","sort":"created","number_of_images":56}},"pictures_slider":{"settings":{"auto_slide":"0","slider_title":{"show_title":false,"text":"Photos from our community","alignment":"Center","color":"#56575f","font_size":22,"mobile_font_size":18},"slider_hover":{"background_color":"#000000","opacity":0.6,"show_icon":true},"slider_source":["instagram","yotpo_reviews"],"full_width":1,"sort":"created","number_of_images":56}},"pictures_dedicated_page":{"settings":{"dedicated_page_source":["instagram","yotpo_reviews"],"dedicated_page_layout":{"mode":"full_page","rows":2,"load_more_button":0},"dedicated_page_spacing":"0","dedicated_page_title":{"show_title":false,"text":"Photos from our community","alignment":"Right","color":"#56575f","font_size":22,"mobile_font_size":18},"dedicated_page_hover":{"background_color":"#ffffff","opacity":0.6,"show_icon":true},"dedicated_page_cta_text":"Shop Now","dedicated_page_cta_color":"#4f4f4f","dedicated_page_custom_color":"0","dedicated_page_sorting":0,"sort":"created"}},"generic_gallery":{"settings":{"min_photos_grid_carousel":3}},"product_gallery":{"settings":{"gallery_source":["instagram","yotpo_reviews"],"gallery_layout":{"mode":"full_page","rows":2,"load_more_button":0},"gallery_spacing":"1","gallery_title":{"show_title":false,"text":"Photos from our community","color":"#56575f","alignment":"Left","font_size":22,"mobile_font_size":18},"gallery_hover":{"background_color":"#ffffff","opacity":0.6,"show_icon":true},"gallery_cta_text":"Shop Now","gallery_cta_color":"#4f4f4f","gallery_custom_color":"1","gallery_sorting":"0","gallery_cta":"0","sort":"created"}},"shoppable_instagram":{"settings":{"settings":{"title":{"enabled":true,"text":"Shop these items"},"cta":{"enabled":true,"text":"Buy now","color":"#71b1ff"},"promoted_products":{"enabled":false,"text":"You may also like:"},"star_rating":{"enabled":true,"color":"#fec600"},"header":{"enabled":true},"hide_sales":false,"only_account_images":false,"sort":"created"}}},"load_only_widgets_on_page":false,"load_css_async":false,"ab_testing":false,"cookie_path":false,"upload_photos":{"settings":{"max_photos":3,"enable_import_webhooks":false}},"upload_videos":{"settings":{}},"video_support":{"settings":{"partner_id":"4620863","player_id":50097953,"ks":"djJ8NDYyMDg2M3xuG3HsHshDe2Vqv1-xTmb-fRJCEcSXvDhbsG2lKs4-IPgWsoKpOuZmPPugcK6K95_PwhrfyHbTbz7HFimeuLvN","metadata_profile_id":18321743,"player_version":"1.0.3"}},"new_main_widget_layout":{"settings":{}},"new_testimonials_widget_layout":false,"shoppers_say":{"settings":{"show":true,"title":"REVIEW HIGHLIGHTS","max_sentences_desktop":2,"max_sentences_mobile":1,"widget_font":"Open Sans","text_theme":"Dark","background_color":{"transparent":false,"color":"#E8F6FF"},"links_color":"#0084e9","stars_color":"#e7721b","text_colors":{"primary_color":"#051146","name_color":"#697090","more_reviews_link_color":"#37416b","more_reviews_links_hover":"#50587e"},"arrow_colors":{"color":"#0084e9","hover_color":"#0077d2"}}},"widget_v2":{"settings":{"read_only":"0","redis_cache_expires_in":"300","http_cache_expires_in":10800,"review_per_page":5,"date_format":"%d/%m/%y","reporting_domains":["p.yotpo.com"],"close_button":"0","version":null,"css_custom_host":null,"show_average_rating_digits":true,"display_vote_text":"0","disable_yotpo_logo_hyperlink":"0","display_crf_filters":false,"display_topic_filters":false,"better_performance_effective_date":"2023-06-03","display_free_text_filters":false,"reviews_display_names":{"order_properties":null,"order_custom_properties":null,"order_product_properties":null,"order_product_custom_properties":null,"product_properties":null,"product_specs_properties":null,"customer_properties":null,"customer_custom_properties":null},"display_orders_filters":false,"display_names":{"order_properties":null,"order_custom_properties":null,"order_product_properties":null,"order_product_custom_properties":null,"product_properties":null,"product_specs_properties":null,"customer_properties":null,"customer_custom_properties":null},"fetch_from_elastic":false,"disable_performance_section":true,"use_new_filter_and_search_outbound_service":false,"display_star_distribution":false}},"lightbox_new_design":true,"gallery_customizations":{"settings":{}},"add_to_cart":{"settings":{}},"bv_syndication":false,"disable_social_login":false,"gremlins_dev":{"settings":{"star_distribution":false,"widget_prod_controller":false,"holistic_widget_view_account":false,"reviews_view_service_enabled":false,"reviews_subject_release":false,"voice_search":false,"voice_search_lang":"en-US","reviews_view_orders_metadata":false,"reviews_view_bottomline_release":false,"reviews_view_cache_release":false,"macaroon_development_mode":false,"promoted_products_bottom_lines":false}},"grid_layout":{"settings":{}},"carousel_layout":{"settings":{}},"collage_layout":{"settings":{}},"widgets_data_requests":{"settings":{}},"disable_shopper_side_cookies":false});
    Yotpo.ready(function() {
        yotpo.init();
    });
}





yotpo.v2YotpoLoaded=true;if(typeof yotpoWidgetsContainer!=='undefined'&&yotpoWidgetsContainer.yotpoV3&&yotpoWidgetsContainer.yotpoV3.performV3Logic){Yotpo.ready(function(){yotpoWidgetsContainer.yotpoV3.performV3Logic();})}