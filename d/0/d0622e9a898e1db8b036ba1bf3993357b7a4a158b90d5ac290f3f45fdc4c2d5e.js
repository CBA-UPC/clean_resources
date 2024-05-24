/*! For license information please see client.min.js.LICENSE.txt */
(function(){var __webpack_modules__={1377:1400:3222:3964:2630:6226:7541:4478:9095:6993:3292:9275:2683:3963:8006:5010:1702:2476:5799:8101:9846:9877:function(t){t.exports={DEFAULT_INTERVAL:20}},6094:2233:6282:3189:9489:882:function(){},8011:8380:4467:6909:3382:1388:7939:4482:6814:9645:7945:4730:3533:7246:2156:5301:7219:9842:7170:8839:6245:2528:970:1441:9779:4477:740:1731:7493:1930:8479:6935:9325:2420:7769:7543:3270:6095:826:6434:8287:7613:6199:6465:8204:6743:4142:3009:5302:8148:4834:7845:7946:49:484:563:3133:9294:7169:9854:5403:5811:9400:585:1228:2548:8315:8157:966:671:6744:6:424:1514:8569:9707:8378:8286:5851:3105:1422:1625:7266:969:5741:5234:1147:9589:2290:4937:1739:5661:8076:5318:8926:2387:9155:7755:1686:5140:7970:2193:3786:2713:7295:8751:8560:6843:8340:function(t,n,e){t.exports=e(4478)},1197:1001:5335:2248:1135:4257:3756:3198:4739:8717:5473:6522:861:6949:5697:2183:3199:9795:4346:9714:1569:4096:8482:9015:6602:6801:1182:9721:6857:function(t,n,e){t.exports=function(t){t.registerApiModule("behavior",e(9721))}},818:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(6489)),t.registerAudienceMatcher("behavior",e(1089))}},1089:6489:8156:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(4003))}},4003:5529:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(6731)),t.registerAudienceMatcher("first_session",e(1927))}},1927:6731:9923:513:5198:8713:7472:2779:6758:function(t){t.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(t){return t.getId()}]}},8629:function(t){t.exports={provides:"browserVersion",getter:["sources/browser_id",function(t){return t.getVersion()}]}},1012:6767:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(8606)),t.registerAudienceMatcher("campaign",e(2659))}},2659:8606:7228:function(t,n,e){t.exports=function(t){t.registerAudienceMatcher("code",e(7025))}},7025:6382:4538:2573:5596:283:function(t){t.exports={fieldsNeeded:["device"],match:function(t,n){return t.device===n.value}}},6763:5444:8533:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(5771)),t.registerAudienceMatcher("device_type",e(7320))}},7320:5771:3224:6397:1127:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(7967)),t.registerAudienceMatcher("referrer",e(972))}},972:7967:8454:function(t,n,e){t.exports=function(t){t.registerVisitorProfileProvider(e(7330)),t.registerAudienceMatcher("source_type",e(7577))}},7577:7330:7716:9864:3032:9646:8111:7850:2712:1153:5680:5761:7176:6143:2632:1807:7421:9154:8439:6218:function(){}},__webpack_module_cache__={};_webpack_require__.amdO={},__webpack_require__.g=),__webpack_require__.nmd=var __webpack_exports__={};!function(){try{!function(){var t=window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin"),__webpack_require__(8439).initialize();var n=__webpack_require__(7769);n.time("gtagReady");var e=__webpack_require__(6843),i=__webpack_require__(740);__webpack_require__(3199);var r=i.get("stores/directive");if(!__webpack_require__(861).isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var o,a=__webpack_require__(5010),u=__webpack_require__(1731),c=__webpack_require__(3198),s={"accountId": "2129670914", "namespace": "18956663993", "revision": "3599", "anonymizeIP": true, "enableForceParameters": true, "experimental": {"trimPages": true}, "projectId": "18956663993", "layers": [{"changes": null, "id": "21573410328", "name": null, "commitId": "22621971450", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "20530010617"], "audienceName": null, "changes": null, "id": "21561710104", "integrationSettings": null, "variations": [{"id": "21536360447", "name": null, "actions": [{"viewId": "19181870067", "changes": [{"dependencies": [], "type": "custom_code", "id": "4EF9BA5F-BAFA-48A9-BEEB-BBD43F979870", "value": function($){var utils = optimizely.get('utils');

utils.observeSelector("div[aria-label='Step3']", function(elem){  

$("body").append('<script type="text/javascript" src="https://mastiff.ext.hp.com/gw/hpit/cs/mastiff/1.0/supportweb/HP_scraper.js"></script>');  
$(elem).append('<div class="opt-mastiff-setup-box step-text hidden"><span class="opt-mastiff-setup-title">Purchase Supplies And Protect Your Printer</span><div id="opt-mastiff-setup"></div>'); 
  
  
},{"once": true});
}}, {"value": "<style>span.opt-mastiff-setup-title {\n    font-family: HPSimplified;\n    font-size: 14px;\n    font-weight: 400;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: .3px;\n    margin-top: 30px;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "A25B9B6D-13B1-4939-9DF4-935027D78846"}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["19181870067"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "22519000348", "name": null, "commitId": "22599020958", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "20195953023"], "audienceName": null, "changes": null, "id": "22513040871", "integrationSettings": null, "variations": [{"id": "22456462031", "name": null, "actions": [{"viewId": "22484370720", "changes": []}]}, {"id": "22500140009", "name": null, "actions": [{"viewId": "22484370720", "changes": [{"dependencies": [], "type": "custom_code", "id": "17A76E47-6E73-449A-8593-14CBDFF32E90", "value": function($){var utils = window.optimizely.get("utils");

utils.observeSelector("#sec-nav-dashboard1",;
}}, {"value": "<style>.sec-nav-instant-ink-dashboard{\n  \n  \n}\n.sec-nav-instant-ink-dashboard:hover{\n  \n  \n}\n.sec-nav-instant-ink-dashboard>a{\n  font-family: HPSimplified-Light !important;\n  font-weight: 700 !important;\n  color: #165dba !important;\n  \n}\n.sec-nav-instant-ink-dashboard>a:hover{\n  color: #114284 !important;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "3EAB4FCB-B9A7-440D-8AC3-8402BB081EE4"}, {"selector": ".sec-nav-instant-ink-dashboard>a", "dependencies": [], "attributes": {}, "type": "attribute", "id": "572FA8F3-F334-4AFA-B9EA-1CECE7785FE3", "css": {}}]}]}], "weightDistributions": [{"entityId": "22500140009", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["22484370720"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "23989170075", "name": null, "commitId": "26557020021", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "20195953023", "20178924461"], "audienceName": null, "changes": null, "id": "23979820126", "integrationSettings": null, "variations": [{"id": "24003310172", "name": null, "actions": [{"viewId": "23990010085", "changes": []}]}, {"id": "24003250161", "name": null, "actions": [{"viewId": "23990010085", "changes": [{"dependencies": [], "type": "custom_code", "id": "25368A4B-15AE-4753-90A8-062044B21226", "value": function($){$(()=>{
    const translation = (ln)=>{
        const all = {
            en: {
                explore: 'Explore',
                shop: 'Shop',
                support: 'Support',
                ariaExplore: 'Open Explore',
                ariaShop: 'Open Shop',
            },
            zh: {
                explore: '深入了解',
                shop: '在线购物',
                support: '支持',
                ariaExplore: '打开 深入了解',
                ariaShop: '打开在线购物',
                
            },
            ja: {
                explore: '製品',
                shop: 'オンラインストア',
                support: 'サポート',
                ariaExplore: 'Open 製品',
                ariaShop: 'Open オンラインストア',
                
            },
            de: {
                explore: 'Erkunden',
                shop: 'Jetzt kaufen',
                support: 'Unterstützung',
                ariaExplore: 'Öffnen Erkunden',
                ariaShop: 'Öffnen Jetzt kaufen',
                
            },
            fr: {
                explore: 'Découvrir',
                shop: 'Acheter',
                support: 'Assistance',
                ariaExplore: 'Ouvrir Découvrir',
                ariaShop: 'Ouvrir Acheter',
            },
            pt: {
                explore: 'Explorar',
                shop: 'Comprar',
                support: 'Suporte',
                ariaExplore: 'Open Explorar',
                ariaShop: 'Open Comprar',
            },
            it: {
                explore: 'Esplora',
                shop: 'Acquista',
                support: 'Supporto',
                ariaExplore: 'Open Esplora',
                ariaShop: 'Open Acquista',
            },
            es: {
                explore: 'Descubrir',
                shop: 'Comprar',
                support: 'Soporte',
                ariaExplore: 'Abrir Descubrir',
                ariaShop: 'Abrir Comprar',
            },
            ko: {
                explore: '탐색',
                shop: '쇼핑',
                support: '고객지원',
                ariaExplore: '열기 탐색',
                ariaShop: '열기쇼핑',
            },
            nl: {
                explore: 'Ontdek',
                shop: 'Shop',
                support: 'Ondersteuning',
                ariaExplore: 'Openen Ontdek',
                ariaShop: 'Openen Shop',
            }
        };
        return all[ln]?all[ln]:all['en'];
    };

    const utils = window.optimizely.get("utils");
        
    const locale = window.location.pathname.split('/')[1];
    const country = locale.split('-')[0];
    const lang = locale.split('-')[1];

    const url = new URL(window.location.href);
    const query = url.searchParams.get('q');
    const exploreUrl = `https://www.hp.com/${locale}/search.html#qt=${query}`;
    
    let shopUrl = `https://www.hp.com/${locale}/shop/search.aspx?q=${query}`;
    if(/us-en/.test(locale)){
        shopUrl = `https://www.hp.com/us-en/shop/sitesearch?keyword=${query}`;
    }else if(/cn-zh/.test(locale)){
        shopUrl = `https://www.hpstore.cn/catalogsearch/result/?q=${query}`;
    }else if(/in-en|br-pt|mx-es|kr-ko|au-en/.test(locale)){
        shopUrl = `https://www.hp.com/${locale}/shop/catalogsearch/result/?q=${query}`;
    }else if(/jp-ja/.test(locale)){
        shopUrl = `https://jp.ext.hp.com/directplus/personal/`;
    }
    
    const codeHtml = `
        <div class='patch4087 opt-navigation'>
            <div class='patch4087 opt-explore'><a id='opt-explore_${locale}' href='${exploreUrl}' target='_blank' aria-label='${translation(lang).ariaExplore}'>${translation(lang).explore}</a></div>
            <div class='patch4087 opt-shop'><a id='opt-shop_${locale}' href='${shopUrl}' target='_blank' aria-label='${translation(lang).ariaShop}'>${translation(lang).shop}</a></div>
            <div class='/div>
        </div>
    `;

    utils.observeSelector('hr.horizontal-rule', elem=>{
        $(elem).before(codeHtml);    
    });
  
  $('body').on('click',".opt-explore,.opt-shop",event =>{
    const id = event.target.id;
    optAdobeTrackingESSCommon("eVar37", id);
});
    
});
}}, {"value": "<style>hr.horizontal-rule{\n    margin: 0 0 30px 0 !important;\n}\n\n.patch4087.opt-navigation{\n    display: flex;\n    justify-content: center;\n    gap: 40px;\n    font-size: 20px;\n    line-height: 23px;\n    font-family: 'HPSimplified';\n    margin-top: 20px;\n}\n\n.patch4087.opt-navigation div a{\n    font-size: inherit;\n    color: #666666;\n    text-decoration: none;\n}\n\n.patch4087.opt-navigation div a:hover, .patch4087.opt-navigation div a:focus{\n    border-bottom: 2px solid #666666;\n    padding-bottom: 10px;\n    box-shadow: none;\n}\n\n.patch4087.opt-navigation div.opt-support{\n    color: #165dba;\n    border-bottom: 2px solid #165dba;\n    padding-bottom: 10px;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "49F5B7AC-4E41-42A1-B4BB-6530D212DFB7"}, {"selector": ".patch4087.opt-explore a", "dependencies": [], "attributes": {}, "type": "attribute", "id": "040713DA-8D9E-4FE4-8C9B-ADE457C27A8A", "css": {}}, {"selector": ".patch4087.opt-shop a", "dependencies": [], "attributes": {}, "type": "attribute", "id": "D5E2C6E6-48E0-4A90-AA9E-359B36879155", "css": {}}]}]}], "weightDistributions": [{"entityId": "24003250161", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["23990010085"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "24437641023", "name": null, "commitId": "24629630463", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "20195953023", "24480690545", "24492511048"], "audienceName": null, "changes": null, "id": "24489530129", "integrationSettings": null, "variations": [{"id": "24493160159", "name": null, "actions": []}, {"id": "24489510127", "name": null, "actions": [{"viewId": "24463610612", "changes": [{"id": "CE5182B6-2740-4335-9BCF-6B7BD854A6CA", "type": "custom_code", "value": function($){console.info('3917 targting testing with audience plcode');

var utils = window.optimizely.get("utils"), tileHeader = 'Find a HP certified service center and schedule an appointment', tileLink= 'Find a service center';
  
//ar, fr, th

switch(window.opt_windowlc) {
  case "ar":
    tileHeader = 'اعثر على مركز خدمة HP معتمد وحدد موعدًا';
    tileLink= 'اعثر على مركز خدمة';
    break;
  case "fr":
    tileHeader = 'Trouver un centre certifié HP et prendre rendez-vous';//'Trouver un centre de service certifié HP et prendre rendez-vous';
    tileLink= 'Trouver un centre de service';
    break;
  case "th":
    tileHeader = 'ค้นหาศูนย์บริการได้รับการรับรองของ HP และจัดกำหนดการนัดหมาย';
    tileLink= 'ค้นหาศูนย์บริการ';
    break;
  default :
    tileHeader = 'Find a HP certified service center and schedule an appointment';
    tileLink= 'Find a service center';
    
}


utils.observeSelector("app-mastiff-widget", function(elem){	
	  let _ngContentName = "_ngcontent-app-root-c82", href = "https://support.hp.com/"+opt_windowcc+"-"+opt_windowlc+"/help/service-center?bench=1";
	  $('.deviceCardSubContainer').each(function() {
		  $.each(this.attributes, function() {
			var index = this.name.indexOf("_ngcontent-app-root"); 
			  if(index !== -1){
				  _ngContentName = this.name;
			  }
		  });
	  });
	  
		$('app-mastiff-widget').closest( ".deviceCardContainer" ).before('<div  class="deviceCardContainer"><!----><!----><!----><app-general-widget><div  '+_ngContentName+' class="deviceCardSubContainer"><div  '+_ngContentName+' tabindex="0" class="deviceCard width1Tile row3" id="opt_find_service_center" style="height: 245px;"><h2 '+_ngContentName+' class="tileHeader row3header" style="height: 30px;">'+tileHeader+'</h2><div '+_ngContentName+' class="tileDescContainer row3container" style="height: 129px;"><div '+_ngContentName+' class="mainImageContainer"><div '+_ngContentName+' class="cardImage" style="background-image: url(//cdn.optimizely.com/img/2129670914/e719ddb178e64443947ceb678dfe2674.svgz);"></div><p '+_ngContentName+' class="tileDesc row3content" style="height: 49px;"> </p><!----></div><div '+_ngContentName+' class="mainImageDescContainer"><!----></div></div><div '+_ngContentName+' class="tile-link-wrapper"><a '+_ngContentName+' href="javascript:void(0)" class="tileLink arrow-link align-self-center row3link" title="'+tileLink+'" style="height: 24px;">'+tileLink+'</a></div></div><!----><!----><!----></div></app-general-widget><!----><!----><!----></div>');
	  
	  $(document).on('click', '#opt_find_service_center', function() {	
		optAdobeTrackingESSCommon("eVar37", "opt_find_service_center_"+opt_windowcc+"_"+opt_windowlc);  
		window.open(href, '_blank');
	  });
	  
	  $(document).on('keydown', '#opt_find_service_center', function(event) {	
		 var id = event.keyCode;   
		 if (id == 13) {
			 $('#opt_find_service_center').click();
		  }
	  });

	  /*if(window.opt_windowlc == "ar"  || window.opt_windowlc == "fr"){
		 $('app-mastiff-widget').closest('.deviceCardContainer').addClass('hidden');
	  }*/
	  
}, { "once": true });
}, "dependencies": []}, {"id": "43172E8A-42A0-4D42-87A8-3CB132709DC3", "type": "append", "selector": "head", "value": "<style>.width1Tile .cardImage {\n    background-position: center 5px;\n}\n\n.deviceCardContainer {\n    margin: 0 15px 30px;\n    max-height: 275px;\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "24489510127", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["24463610612"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "25134480613", "name": null, "commitId": "25245441375", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "20195953023"], "audienceName": null, "changes": null, "id": "25211200579", "integrationSettings": null, "variations": [{"id": "25188050157", "name": null, "actions": [{"viewId": "25195760055", "changes": [{"id": "F11E51A5-4E0D-4436-9930-E4D6A1AEB1D6", "type": "custom_code", "value": function($){console.info('SSVSPRT-7888');
var utils = window.optimizely.get("utils");

utils.observeSelector(".product-name-text",function(elem){ 
	if(globalDataLayer.Product.productLineCode == 'NG' || globalDataLayer.Product.productLineCode == 'NL' ||        globalDataLayer.Product.productLineCode == 'NI' || globalDataLayer.Product.productLineCode == 'NJ' ||        globalDataLayer.Product.productLineCode == 'NK' ){
				window.uniqueContentType = [];
				window.manualsDataContentTypeWise = {};
        window._ngContentNameDropdown = '', window._ngContentPaginationSection = '', window._ngContentPaginationContainer= '';
        window.opt_totalPages, window.opt_totalPages, window.oldSelectedValue ;
				const getManualsURL = window.location.protocol + "//" + window.location.host + "/wcc-services/pdp/manuals/getManuals?productID=" + window.location.href.split('?')[0].split('/')[window.location.href.split('?')[0].split('/').length - 1] + "&languageCode=" + opt_windowlc;
		$.ajax({
      	type: 'GET',
		headers: {"Access-Control-Allow-Origin": "*"},
      	url : getManualsURL,
		beforeSend: function(){},
	    success : function(response) {  
      if(response.code  == 500)	{
				//console.info('error 500');
			}
			else{
			    try{
					 console.info('SSVSPRT-7888 - categories-dd-section');
            
           utils.observeSelector("app-setup-user-guides .categories-dd-section",function(elem){ 
             $('app-setup-user-guides app-vn-dropdown a.main-anchor').each(function() {
	  						$.each(this.attributes, function() {
	    							var index = this.name.indexOf("_ngcontent-app-root"); 
		  							if(index !== -1){
			  							_ngContentNameDropdown = this.name;
		  							}
	  					   });
  					 });
             
            utils.observeSelector("app-setup-user-guides .pagination-section",function(elem){ 
             $('app-setup-user-guides .pagination-section').each(function() {
	  						$.each(this.attributes, function() {
	    							var index = this.name.indexOf("_ngcontent-app-root"); 
		  							if(index !== -1){
			  							_ngContentPaginationSection = this.name;
		  							}
	  					});
  					});
            }, {"once": true});               
             
          $('app-setup-user-guides .select-preffered-lang').append('<div _ngcontent-app-root-c97="" class="categories-dd-section opt_categories-dd-section hidden"><app-vn-dropdown _ngcontent-app-root-c97="" '+_ngContentNameDropdown+'><div '+_ngContentNameDropdown+' class="ltr vn-dropdown-container opt_vn-dropdown-container"></div></app-vn-dropdown></div>');
           $('app-setup-user-guides .select-preffered-lang .opt_vn-dropdown-container').append('<a '+_ngContentNameDropdown+' href="javascript:void(0)" role="combobox" class="main-anchor" title="All" aria-expanded="false"><div '+_ngContentNameDropdown+' class="main-container"><div '+_ngContentNameDropdown+' class="select-value"><span '+_ngContentNameDropdown+' class="label"></span><!----><span '+_ngContentNameDropdown+'>All</span></div><div '+_ngContentNameDropdown+' class="cross-btn"><!----></div><!----><div '+_ngContentNameDropdown+' class="arrow selected icon-dwn"></div></div></a>');
            $('app-setup-user-guides .select-preffered-lang .opt_vn-dropdown-container').append('<div '+_ngContentNameDropdown+' role="listbox" class="items-container opt_items-container" aria-multiselectable="false"></div>');
              $('app-setup-user-guides .select-preffered-lang .opt_vn-dropdown-container .opt_items-container').append('<a '+_ngContentNameDropdown+' href="javascript:void(0)" tabindex="-1" role="option" aria-selected="false" id="All" title="All"><div '+_ngContentNameDropdown+' class="item">All</div></a>');
          for (var i=0; i< response.data.totalCount; i++){
            if(uniqueContentType.indexOf(response.data.manuals[i].contentType) === -1) {
     					 uniqueContentType.push(response.data.manuals[i].contentType);
              $('app-setup-user-guides .select-preffered-lang .opt_vn-dropdown-container .opt_items-container').append('<a '+_ngContentNameDropdown+' href="javascript:void(0)" tabindex="-1" role="option" aria-selected="false" id="'+response.data.manuals[i].contentType+'" title="'+response.data.manuals[i].contentType+'"><div '+_ngContentNameDropdown+' class="item">'+response.data.manuals[i].contentType+'</div></a>');
      				// console.log(response.data.manuals[i]);
  					 manualsDataContentTypeWise[response.data.manuals[i].contentType] = [];
						 manualsDataContentTypeWise[response.data.manuals[i].contentType].push(response.data.manuals[i]);
  			}	
            else{
			   manualsDataContentTypeWise[response.data.manuals[i].contentType].push(response.data.manuals[i]);
			}	 
          } 
            console.info("--------------------");
            if(uniqueContentType.length > 1){
                $('.opt_categories-dd-section').removeClass('hidden');
            }           
         }, {"once": true});
            
          utils.observeSelector("app-setup-user-guides .setup-user-guides",function(elem){  
                $(elem).append('<div _ngcontent-app-root-c97="" class="table opt_table hidden"><div _ngcontent-app-root-c97="" class="heading"><h4 _ngcontent-app-root-c97="" class="left">Title</h4><h4 _ngcontent-app-root-c97="" class="right">Size</h4></div><div _ngcontent-app-root-c97="" class="body"></div></div><div '+_ngContentPaginationSection+' class="pagination-section opt_pagination-section hidden"><app-vn-pagination '+_ngContentPaginationSection+' _nghost-a": true});
				}
				catch(err) {
				  console.info(err.message);
				}
				
			}
		},
	    error : function(e) {
	          console.info('in error of ajax call');
	    },
        complete: function() {     
             $('app-loader-opt').remove();
             console.info('complete call');            
        }
    });




$(document).on( 'click', 'app-setup-user-guides .opt_vn-dropdown-container a.main-anchor', function(e){
        $('app-setup-user-guides .opt_vn-dropdown-container a.main-anchor').attr('aria-expanded', function(i, attr){ return attr == 'true' ? 'false' : 'true'; });
        $('app-setup-user-guides .opt_vn-dropdown-container a.main-anchor .main-container').toggleClass("dd-open");
        $('app-setup-user-guides .opt_vn-dropdown-container .opt_items-container').toggleClass("dd-open");
});

$(document).on( 'keydown', 'app-setup-user-guides .opt_vn-dropdown-container a.main-anchor', function(e){
        if(event.key == "ArrowDown" && $('app-setup-user-guides .opt_vn-dropdown-container a.main-anchor').attr('aria-expanded') == 'false'){
        		$('app-setup-user-guides .opt_vn-dropdown-container a.main-anchor').trigger('click');
        }  
        if(event.key == "ArrowDown" && $('app-setup-user-guides .opt_vn-dropdown-container a.main-anchor').attr('aria-expanded') == 'true'){
        		$('app-setup-user-guides .opt_vn-dropdown-container .opt_items-container.dd-open a:first').focus();
        }         
});

$(document).on( 'keydown', 'app-setup-user-guides .opt_vn-dropdown-container .opt_items-container.dd-open a', function(e){  
        //if($('a:focus').length==0){$('a').first().focus();}
        if (e.keyCode == 40) {      
            $("a:focus").next().focus();
        }
        if (e.keyCode == 38) {      
            $("a:focus").prev().focus();
        }
});

//$("app-setup-user-guides .opt_vn-dropdown-container a").focusout(function(){
$(document).on( 'focusout', 'app-setup-user-guides .opt_vn-dropdown-container a', function(e){
  setTimeout(()=>{
      const focus = $('app-setup-user-guides .opt_vn-dropdown-container a').is(":focus");
      if(!focus){
        $('app-setup-user-guides .opt_vn-dropdown-container a.main-anchor').attr('aria-expanded', function(i, attr){ return attr == 'true' ? 'false' : 'true'; });
        $('app-setup-user-guides .opt_vn-dropdown-container a.main-anchor .main-container').removeClass("dd-open");
        $('app-setup-user-guides .opt_vn-dropdown-container .opt_items-container').removeClass("dd-open");
      }
    }, 100);  
});

    

    
    
$(document).on( 'click', '.opt_categories-dd-section .opt_vn-dropdown-container .opt_items-container a', function(e){         
          oldSelectedValue = $('.opt_vn-dropdown-container .main-anchor .main-container .select-value > span:eq(1)').text();
         lect-value > span:eq(1)').text(this.text);
          optAdobeTrackingESSCommon("eVar37", "opt-poly-manual|" + this.text);
          setTimeout(()=>{     
        			$('app-setup-user-guides .opt_vn-dropdown-container a.main-anchor').attr('aria-expanded', function(i, attr){ return attr == 'true' ? 'false' : 'true'; });
        			$('app-setup-user-guides .opt_vn-dropdown-container a.main-anchor .main-container').removeClass("dd-open");
        			$('app-setup-user-guides .opt_vn-dropdown-container .opt_items-container').removeClass("dd-open");      
             $('app-setup-user-guides .setup-user-guides .table:eq(1)').removeClass('hidden');
             $('app-setup-user-guides .setup-user-guides .pagination-section:eq(1)').removeClass('hidden');
    }, 200);  
              console.info(manualsDataContentTypeWise[this.text]);
              if(this.text == 'All'){
                setTimeout(()=>{
                $('app-setup-user-guides .setup-user-guides .table:eq(0)').removeClass('hidden');
                $('app-setup-user-guides .setup-user-guides .pagination-section:eq(0)').removeClass('hidden');
                $('app-setup-user-guides .setup-user-guides .table:eq(1)').addClass('hidden');
                $('app-setup-user-guides .setup-user-guides .pagination-section:eq(1)').addClass('hidden');
                //$('.opt_categories-dd-section').removeClass('hidden');
                }, 200);
              }
              else{                
              	createManualsList(0, 9, this.text);
                var opt_totalPages = Math.ceil(manualsDataContentTypeWise[this.text].length/10);
                if(oldSelectedValue != this.text){
                	createPagination(opt_totalPages); 
                }
                setTimeout(()=>{
                $('app-setup-user-guides .setup-user-guides .table:eq(0)').addClass('hidden');
                $('app-setup-user-guides .setup-user-guides .pagination-section:eq(0)').addClass('hidden');
                $('app-setup-user-guides .setup-user-guides .table:eq(1)').removeClass('hidden');
                $('app-setup-user-guides .setup-user-guides .pagination-section:eq(1)').removeClass('hidden');
                //$('.optutils.observeSelector("app-setup-user-guides .setup-user-guides .table .body",function(elem){
       setTimeout(()=>{ 
        	$('app-setup-user-guides .setup-user-guides .table:eq(0)').addClass('hidden');
        	$('app-setup-user-guides .setup-user-guides .pagination-section:eq(0)').addClass('hidden');
        }, 1000); 
     }, {"once": true});
     utils.observeSelector("app-setup-user-guides .setup-user-guides .opt_table .body",function(elem){
        $(elem).empty();      
       for(let i=start; i<=last; i++){          
           $(elem).append('<div _ngcontent-app-root-c97="" class="table-body-row"><a _ngcontent-app-root-c97="" target="_blank" class="left" id="'+items[i].id+'" href="'+items[i].url+'" title="'+items[i].value+'"><span _ngcontent-app-root-c97=""><img _ngcontent-app-root-c97="" src="/wcc-assets/content/dam/hp-wcc/fe-assets/images/pdp_icons/info-blue.svg" alt="info-blue"></span><div _ngcontent-app-root-c97="">'+items[i].value+'</div></a><div _ngcontent-app-root-c97="" class="right">'+items[i].fileBytes+'</div></div>');
       }     
     }, {"once": true});
}
    
function createPagination(totalPages){    
  utils.observeSelector("app-setup-user-guides .common-pagination-container",function(elem){ 
    $('app-setup-user-guides .common-pagination-container').each(function() {
      $.each(this.attributes, function() {
        var index = this.name.indexOf("_ngcontent-app-root"); 
        if(index !== -1){
          _ngContentPaginationContainer = this.name;
        }
      });
    });
  }, {"once": true});  
  
  //alert(totalPages); 
   
   utils.observeSelector(".opt_pagination-section .common-pagination-container",function(elem){
     if(totalPages == 1){
         $(elem).empty();
    		 $('.opt_pagination-section').addClass('hidden');
  		}
  		else{  
    $('.opt_pagination-section').removeClass('hidden');
    $(elem).empty(); 
    if(totalPages>1){
    $(elem).append('<div '+_ngContentPaginationContainer+' class="text-box"><a '+_ngContentPaginationContainer+' href="javascript:void(0)" title="Previous" id="opt_default-leftarrow" tabindex="0" class="disable" style="pointer-events: auto;"><div '+_ngContentPaginationContainer+' class="arrow icon-dwn left-arrow"></div></a></div>');
     }
  for(var i=1; i <= totalPages; i++ ){
    var classHighlight = '';
    var classHidden = '';
    
    if(i == 1){
       $(elem).append('<div '+_ngContentPaginationContainer+' class="text-box highlighted"><a '+_ngContentPaginationContainer+' href="javascript:void(0)" id="opt_default-'+i+'" tabindex="0"><div '+_ngContentPaginationContainer+' class="number">'+i+'</div></a></div>');
    }
    
    if(i == 2){
      	$(elem).append('<div '+_ngContentPaginationContainer+' class="text-box hidden"><div _ngcontent-app-root-c62="" class="triple-dots opt_first_triple-dots">...</div></div>');
    }  
     
    if(i > 1 && i <= 4){
      $(elem).append('<div '+_ngContentPaginationContainer+' class="text-box"><a '+_ngContentPaginationContainer+' href="javascript:void(0)" id="opt_default-'+i+'" tabindex="0"><div '+_ngContentPaginationContainer+' class="number">'+i+'</div></a></div>'); 
    }
    
    if(i > 4 && i < totalPages){
     	$(elem).append('<div '+_ngContentPaginationContainer+' class="text-box hidden"><a '+_ngContentPaginationContainer+' href="javascript:void(0)" id="opt_default-'+i+'" tabindex="0"><div '+_ngContentPaginationContainer+' class="number">'+i+'</div></a></div>');
     }
    
    if(i == totalPages-1){
      if(i > 4){
      	$(elem).append('<div '+_ngContentPaginationContainer+' class="text-box"><div _ngcontent-app-root-c62="" class="triple-dots opt_last_triple-dots">...</div></div>');
      }else{
      	$(elem).append('<div '+_ngContentPaginationContainer+' class="text-box hidden"><div _ngcontent-app-root-c62="" class="triple-dots opt_last_triple-dots">...</div></div>');
      }
    }
    
    if(i > 4 && i == totalPages){
      //if(totalPages == 5)
      $(elem).append('<div '+_ngContentPaginationContainer+' class="text-box"><a '+_ngContentPaginationContainer+' href="javascript:void(0)" id="opt_default-'+i+'" tabindex="0"><div '+_ngContentPaginationContainer+' class="number">'+i+'</div></a></div>');
    }
    
  }
     
     if(totalPages>1){
    		 $(elem).append('<div '+_ngContentPaginationContainer+' class="text-box "><a '+_ngContentPaginationContainer+' href="javascript:void(0)" title="Next" id="opt_default-rightarrow" tabindex="0" style="pointer-events: auto;" class=""><div '+_ngContentPaginationContainer+' class="arrow icon-dwn right-arrow"></div></a></div>');
     }
    } 
  }, {"once": true}); 
	
}
    
utils.observeSelector("app-setup-user-guides .setup-user-guides .opt_table .body",function(elem){  
setTimeout(()=>{
   
   // create an observer instance
var target = $( 'app-setup-user-guides .vn-dropdown-container .main-anchor .main-container .select-value span' )[1];
console.log(target);

var observer = new WebKitMutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
	  setTimeout(()=>{
	  	console.info((mutation));
	  	console.info(mutation.target.data);
      //alert(mutation.target.data);
      if(mutation.target.data == 'English'){
          utils.observeSelector(".opt_categories-dd-section .opt_vn-dropdown-container .opt_items-container a",function(elem){
        	if($('.opt_vn-dropdown-container .main-anchor .main-container .select-value > span:eq(1)').text() == 'All'){
            setTimeout(()=>{
              $('app-setup-user-guides .setup-user-guides .table:eq(0)').removeClass('hidden');
              $('app-setup-user-guides .setup-user-guides .pagination-section:eq(0)').removeClass('hidden');
              $('app-setup-user-guides .setup-user-guides .table:eq(1)').addClass('hidden');
              $('app-setup-user-guides .setup-user-guides .pagination-section:eq(1)').addClass('hidden');
              $('.opt_categories-dd-section').removeClass('hidden');
              //$('.opt_pagination-section').addClass('hidden');
            }, 200); 
        }
        else{
            setTimeout(()=>{
              $('app-setup-user-guides .setup-user-guides .table:eq(0)').addClass('hidden');
              $('app-setup-user-guides .setup-user-guides .pagination-section:eq(0)').addClass('hidden');
              $('app-setup-user-guides .setup-user-guides .table:eq(1)').removeClass('hidden');
              $('app-setup-user-guides .setup-user-guides .pagination-section:eq(1)').removeClass('hidden');
              $('.opt_categories-dd-section').removeClass('hidden');
             // $('.opt_pagination-section').removeClass('hidden');
            }, 200); 
          }
          }, {"once": true});
      }
      else{
      		setTimeout(()=>{
            $('app-setup-user-guides .setup-user-guides .table:eq(0)').removeClass('hidden');
        	  $('app-setup-user-guides .setup-user-guides .pagination-section:eq(0)').removeClass('hidden');
            $('app-setup-user-guides .setup-user-guides .table:eq(1)').addClass('hidden');
            $('app-setup-user-guides .setup-user-guides .pagination-section:eq(1)').addClass('hidden');
            $('.opt_categories-dd-section').addClass('hidden');
            $('.opt_pagination-section').addClass('hidden');
          }, 200);
      }
	  }, 100); 
	  
		//$('#log').text('input text changed: "' + target.text() + '"');
		//console.log(mutation, mutation.type);
    
	});    
});
observer.observe(target, { attributes: true, childList: true, characterData: true, subtree: true });
}, 1000); 
}, {"once": true});   
   
$(document).on( 'click', '.opt_pagination-section app-vn-pagination .common-pagination-container .text-box', function(e){ 
     if($(this).find('a').attr('class') != "disable"){
         if(this.textContent != '...'){
     var selectedValue =  $('.opt_vn-dropdown-container .main-anchor .main-container .select-value > span:eq(1)').text(); 
     var highlightedValue = $('.opt_pagination-section app-vn-pagination .common-pagination-container .text-box.highlighted').text();
     var opt_totalPages = Math.ceil(manualsDataContentTypeWise[selectedValue].length/10);
     var thisTextContent = Number(this.textContent);     
     if(highlightedValue != thisTextContent){
       if($(this).find('a').attr('title') == 'Previous'){
         if(highlightedValue != 1){
            thisTextContent = (Number(highlightedValue) - 1);
         }
       }
       if($(this).find('a').attr('title') == 'Next'){
          if(highlightedValue != opt_totalPages){
            thisTextContent = (Number(highlightedValue) + 1);
          }
       }
     
       createManualsList((thisTextContent-1)*10, (thisTextContent*10)-1, selectedValue);
       
       // To disable left arrow button or reaching first page
       if(thisTextContent == 1){
         $('#opt_default-leftarrow').addClass('disable');
       }
       else{
         $('#opt_default-leftarrow').removeClass('disable');
       } 
       
      // To disable right arrow button on reacing last element    
      if(thisTextContent == opt_totalPages){
        $('#opt_default-rightarrow').addClass('disable');
      }else{
         $('#opt_default-rightarrow').removeClass('disable');
      }
     	
     // hide first dots if current page is less/equal than 3
    if(Number(thisTextContent) > 3 && opt_totalPages>5){
      $('.opt_first_triple-dots').parent().removeClass('hidden');
    }else{
      $('.opt_first_triple-dots').parent().addClass('hidden');
    }
       
       
    // hide last dots if current page is less than 3
    if(opt_totalPages - Number(thisTextContent) > 2 && opt_totalPages>5){
     $('.opt_last_triple-dots').parent().removeClass('hidden');
    }else{
      $('.opt_last_triple-dots').parent().addClass('hidden');
    }
       $('.opt_pagination-section app-vn-pagination .common-pagination-container .text-box').removeClass('highlighted'); 
       
       for (var i = 1; i<=opt_totalPages; i++){
           $('#opt_default-'+i).parent().addClass('hidden');
       }
       
       if(Number(thisTextContent) <= 3){
         $('#opt_default-'+Number(thisTextContent)).parent().addClass('highlighted');
         $('#opt_default-1').parent().removeClass('hidden');
         $('#opt_default-2').parent().removeClass('hidden');
         $('#opt_default-3').parent().removeClass('hidden');
         $('#opt_default-4').parent().removeClass('hidden');
         if(opt_totalPages - 4  >= 2 ){
           $('#opt_default-'+opt_totalPages).parent().removeClass('hidden');
           //$('#opt_last_triple-dots').parent().removeClass('hidden');
         }
         if(opt_totalPages == 5){
           $('#opt_default-5').parent().removeClass('hidden');
         }
       }
       if(Number(thisTextContent) == 4){
         $('#opt_default-'+Number(thisTextContent)).parent().addClass('highlighted');
         $('#opt_default-1').parent().removeClass('hidden');
         $('#opt_default-2').parent().addClass('hidden');
         $('#opt_default-3').parent().removeClass('hidden');
         $('#opt_default-4').parent().removeClass('hidden');
         $('#opt_default-5').parent().removeClass('hidden');
         if(opt_totalPages - Number(thisTextContent) >= 2){
            $('#opt_default-'+opt_totalPages).parent().removeClass('hidden');
         }
         if(opt_totalPages == 5){
           $('#opt_default-2').parent().removeClass('hidden');
         }
       }
       if(Number(thisTextContent) == 5){
         $('#opt_default-'+Number(thisTextContent)).parent().addClass('highlighted');
         $('#opt_default-1').parent().removeClass('hidden');
         $('#opt_default-2').parent().addClass('hidden');
         $('#opt_default-3').parent().addClass('hidden');
         $('#opt_default-4').parent().removeClass('hidden');
         $('#opt_default-5').parent().removeClass('hidden');
         $('#opt_default-6').parent().removeClass('hidden');
		     if(opt_totalPages - Number(thisTextContent) == 1){
		      	$('#opt_default-3').parent().removeClass('hidden');
		     }
         if(opt_totalPages - Number(thisTextContent) >= 2){
            $('#opt_default-'+opt_totalPages).parent().removeClass('hidden');
         }
       }
       if(Number(thisTextContent) > 5 && Number(thisTextContent) <= opt_totalPages -1){
         $('#opt_default-1').parent().removeClass('hidden');
         $('#opt_default-'+Number(thisTextContent)).parent().addClass('highlighted');
         $('#opt_default-'+Number(thisTextContent)).parent().removeClass('hidden');
         $('#opt_default-'+String(Number(thisTextContent) - 1)).parent().removeClass('hidden');
         $('#opt_default-'+String(Number(thisTextContent) + 1)).parent().removeClass('hidden');
         if(opt_totalPages - Number(thisTextContent) == 1){
           $('#opt_default-'+String(Number(thisTextContent) - 2)).parent().removeClass('hidden');
         }
         if(opt_totalPages - Number(thisTextContent) >= 2){
           $('#opt_default-'+opt_totalPages).parent().removeClass('hidden');
         }
	     }
       if(Number(thisTextContent) == opt_totalPages && !(Number(thisTextContent) <= 3)){
       	  $('#opt_default-'+Number(thisTextContent)).parent().addClass('highlighted');
          $('#opt_default-'+Number(thisTextContent)).parent().removeClass('hidden');
          $('#opt_default-1').parent().removeClass('hidden');
          $('#opt_default-'+ String(opt_totalPages-1)).parent().removeClass('hidden');
          $('#opt_default-'+ String(opt_totalPages-2)).parent().removeClass('hidden');
          $('#opt_default-'+ String(opt_totalPages-3)).parent().removeClass('hidden');
       }
       
     }
     }
     }
  }); 
    
}                      
});
}, "dependencies": []}, {"id": "9564BEE9-C243-424C-BF1F-81BA2F808451", "type": "append", "selector": "head", "value": "<style>@media only screen and (min-width: 768px)  {\n  .setup-user-guides .select-preffered-lang {\n    width: 100% !important;\n  }\n    \n  app-setup-user-guides app-vn-dropdown .vn-dropdown-container:first-of-type{\n  \tmargin-right: 10px; \n  }\n  \n  .setup-user-guides .select-preffered-lang span{\n    flex-grow: 1;\n  }\n}</style>", "dependencies": []}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["25195760055"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "25208700610", "name": null, "commitId": "26561240598", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "20195953023"], "audienceName": null, "changes": null, "id": "25230030523", "integrationSettings": null, "variations": [{"id": "25253800372", "name": null, "actions": [{"viewId": "25237940469", "changes": [{"id": "786EE1F2-D391-4978-983F-3F1A6514D30D", "type": "custom_code", "value": function($){var value = "SDP-VarB";

function waitForGDL_Template() {
  checkElementExist = setInterval(function () {
    if (globalDataLayer.Template == "SDP_hp-instant-ink-series") {
      clearInterval(checkElementExist);

      if (sessionStorage.getItem("SDP-VarB_load") == "true") {
        setTimeout(function () {
          console.info("================ one plus prop9");

          optAdobeTrackingESSCommon("prop9", value);
        }, 500);
      } else {

        $(function () {
          function loadscript() {
            console.info("checkprivacyCookie loop");

            setTimeout(function () {
              console.info("+++++++++++++++ one prop9");

              optAdobeTrackingESSCommon("prop9", value);

              sessionStorage.setItem("SDP-VarB_load", "true");
            }, 500);
          }
          function argStringToMap(args, splitter, keyValSep) {
            return args.split(splitter).reduce(function (map, obj) {
              var keyVal = obj.trim().split(new RegExp(keyValSep + "(.*)"));

              map[keyVal[0]] = keyVal[1];

              return map;
            }, {});
          }
          function extractGroupsOptions() {
            var upCookiesMap = argStringToMap(document.cookie, ";", "=");

            var consentMap = argStringToMap(
              upCookiesMap.OptanonConsent,
              "&",
              "="
            );

            var groupMap = argStringToMap(consentMap.groups, "%2C", "%3A");

            return groupMap;
          }
          function checkgroups() {
            if (extractGroupsOptions()["2"] === "1") loadscript();
          }
          var cookiesMap = argStringToMap(document.cookie, ";", "=");

          var currentLocation = window.location.pathname.split("/");

          if (cookiesMap.OptanonAlertBoxClosed === undefined) {
            var interval = setInterval(function () {
              if ($("#onetrust-banner-sdk").css("display") === "none") {
                checkgroups();

                clearInterval(interval);
              }
            }, 500);
          } else checkgroups();
        });
      }
    }
  });
}

waitForGDL_Template();

$(()=>{
  $(document).on('click', 'a', function() {	
    if (this.id !== "") 
		optAdobeTrackingESSCommon("eVar37", globalDataLayer.Template + "|" + this.id + "|SSVSPRT-8215-Instant-ink-SDP");  
		window.open(href, '_blank');
	  });
  
  const jqueryObserve = (selector, callback, once=true)=>{
    const interval = setInterval(()=>{
      if($(selector).length>0){
        if(once){
          clearInterval(interval);
				}
        callback(selector);
      }
    }, 100);
  };
  
  jqueryObserve("app-hero-section h2", elem=>{
  	$(elem).text('Access your account, find answers to questions or get some help');
  });
  
  jqueryObserve("app-hero-section div.description", elem=>{
  	$(elem).html('<p>If you need help with your ink shipments or printer connection,</p><p><a href="https://virtualagent.hpcloud.hp.com/?BotClient=webwidget&BotSubClient=contacthp&query=&SerialNumber=&PL=&ProductNumber=&ProductName=&ProductNameOID=5401249&ProductSeriesName=&ProductSeriesNameOID=&CC=us&LC=en" id="optVarB-virtual-assistant">chat with our Virtual Assistant.</a></p><br><p>You can check your shipment dates or update your account in your instant ink dashboard. If you’d like help finding what you need in your dashboard, or with other Instanbr><p><a href ="https://instantink.hpconnected.com/users/signin?redirect=isep_or_same_origin"id="optVarB-instant-ink-sign-in">Go to your Instant Ink dashboard</a></p>');
  });
  
  jqueryObserve("app-sdp-support-category-options .support-option span:contains(Your ink)", elem=>{
  	$(elem).text("Where is my ink?");
  }, false);
  
  jqueryObserve("app-vn-recommended-solutions .sdp-recommended-solution:has(.card__tag:contains('Shipping & deliveries')) .card__content:not(.updated)", elem => {
		$(elem).addClass('updated').html("<p>We only send ink when it’s needed, not monthly. Keep your printer connected to the internet to make sure HP knows when to ship more ink.</p><p>If you're missing a shipment, <a href='https://virtualagent.hpcloud.hp.com/?BotClient=webwidget&BotSubClient=contacthp&query=&SerialNumber=&PL=&ProductNumber=&ProductName=&ProductNameOID=5401249&ProductSeriesName=&ProductSeriesNameOID=&CC=us&LC=en'id='optVarB-virtual-assistant-1'>chat with our Virtual Assistant.</a> If you're signed in, it can look up shipments that might be on their way to you or diagnose issues that sometimes cause delays. You may also be able to start a shipment yourself.</p><p>To see your recent and next shipment dates, <a href='https://instantink.hpconnected.com/users/signin?redirect=isep_or_same_origin'id='optVarB-shipment-tracking'>go to Shipment Tracking</a> in your Instant Ink dashboard.</p><p>If you still have an issue, <a href='https://support.hp.com/us-en/contact/product/hp-instant-ink-series/5264756/model/5401249?sku=INSTANTINK2'id='optVarB-contact-hp'>contact HP here.</a></p>");
}, false);
  
});
}, "dependencies": []}, {"id": "691E5281-BD3D-4417-BCF1-4B5BE16CC03C", "type": "append", "selector": "head", "value": "<style>app-hero-section div.description{\n  padding-bottom: 20px;\n};</style>", "dependencies": []}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "ABE2C456-48AD-4B31-8DEC-A4C9F2E6DDF9", "selector": ".optVarB-virtual-assistant"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "785FE017-1BCB-4DBA-92FE-19AB89FCF8B9", "selector": "#optVarB-virtual-assistant"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "904F55D4-C32A-4D5F-99AF-D3679814A7EF", "selector": "#optVarB-instant-ink-sign-in"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "92CD9481-42D1-411B-8AA5-3BCFA6A277A5", "selector": "#optVarB-virtual-assistant-1"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "E01F6B63-AF65-40B7-9505-8DDE76FB5DF5", "selector": "#optVarB-shipment-tracking"}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "CFA2D8C7-6151-4A97-9E8E-F637004C498A", "selector": "#optVarB-contact-hp"}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["25237940469"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "25966722101", "name": null, "commitId": "27166120423", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "20195953023"], "audienceName": null, "changes": null, "id": "25976332124", "integrationSettings": null, "variations": [{"id": "25997381393", "name": null, "actions": [{"viewId": "25984282333", "changes": [{"id": "92347079-3F0D-4B9B-A6F4-359B7AF05E23", "type": "custom_code", "value": function($){console.info('SSVSPRT-9479 activated');

var utils = window.function() {

		if(globalDataLayer.Template ==  "SWD-OtherLanding"){  

			clearInterval(checkElementExist);

			if(sessionStorage.getItem("opt_PolyLanding_load") == "true"){

				setTimeout(function(){ 

				    console.info("================ one plus prop9");

					optAdobeTrackingESSCommon("prop9", value);    

				}, 500); 

		    } else{

				$(function(){

					function loadscript(){        

						console.info('checkprivacyCookie loop');				  

						setTimeout(function(){ 

						   console.info("+++++++++++++++ one prop9");

						   optAdobeTrackingESSCommon("prop9", value);

						   sessionStorage.setItem("opt_PolyLanding_load", "true");

						}, 500); 						

					}
 
					function argStringToMap(args,splitter,keyValSep){

						return args.split(splitter).reduce(function(map,obj){

							var keyVal = obj.trim().split(new RegExp(keyValSep+'(.*)'));

							map[keyVal[0]] = keyVal[1];

							return map;

						}, {});

					};
 
					function extractGroupsOptions(){

						var upCookiesMap = argStringToMap(document.cookie, ';', '=');

						var consentMap = argStringToMap(upCookiesMap.OptanonConsent, '&', '=');

						var groupMap = argStringToMap(consentMap.groups, '%2C', '%3A');

						return groupMap;

					}
 
					function checkgroups(){

						if (extractGroupsOptions()['2'] === '1')

							loadscript();

					}
 
					var cookiesMap = argStringToMap(document.cookie, ';', '=');

					var currentLocation = window.location.pathname.split('/');

					if (cookiesMap.OptanonAlertBoxClosed === undefined) {

						var interval = setInterval(function(){

						if ($('#onetrust-banner-sdk').css('display') === 'none') {

								checkgroups();

						    }     

		}

	});

}

waitForGDL_Template();

if(location.href.indexOf('products#poly') !== -1){
  utils.observeSelector(".signin-button", function(elem){
    utils.observeSelector("#sign-in", function(elem){
      setTimeout(function(){ 
        $('#sign-in').attr('href',$('.signin-button').attr('href'));
        }, 200) 
    });
  });
}  

utils.observeSelector("#Other", function(elem){
  
let _ngContentName_product_icons_list = "_ngcontent-app-root-c111";
$('.product-icons-list > li').each(function() {
  $.each(this.attributes, function() {
    var index = this.name.indexOf("_ngcontent-app-root"); 
    if(index !== -1){
      _ngContentName_product_icons_list = this.name;
    }
  });
});
  
  
if(!$('#Poly').length){ 
var swdpolyurl = "/"+opt_windowcc +"-"+opt_windowlc+"/drivers/products#poly";
  $(".product-icons-list li").eq(2).after('<li '+_ngContentName_product_icons_list+'><a '+_ngContentName_product_icons_list+' href="'+swdpolyurl+'" class="product-type-icon" id="Poly" title="Poly" target="_self"><img '+_ngContentName_product_icons_list+' alt="Laptop" src="//cdn.optimizely.com/img/2129670914/6fe30bb9590e45e88e150bc18c8b2d7c.svgz" class="poly"><img '+_ngContentName_product_icons_list+' style="display: none;" alt="Poly" src="//cdn.optimizely.com/img/2129670914/6fe30bb9590e45e88e150bc18c8b2d7c.svgz" class="poly"></a></li>');
  //setTimeout(function() { $(".product-icons-list li").eq(2).after('<li '+_ngContentName_product_icons_list+'><a '+_ngContentName_product_icons_list+' href="'+swdpolyurl+'" class="product-type-icon" id="Poly" title="Poly" target="_self"><img '+_ngContentName_product_icons_list+' alt="Laptop" src="//cdn.optimizely.com/img/2129670914/6fe30bb9590e45e88e150bc18c8b2d7c.svgz" class="poly"><img '+_ngContentName_product_icons_list+' style="display: none;" alt="Poly" src="//cdn.optimizely.com/img/2129670914/6fe30bb9590e45e88e150bc18c8b2d7c.svgz" class="poly"></a></li>')}, 5000);
}  
  
// $("#PolyTile").addClass('hidden');$('#Poly').addClass('active');
 		$('#Other').removeClass('active');
    $('#Other img').attr('src', "https://support.hp.com/wcc-assets/content/dam/hp-wcc/headless-assets/images/swd/swd-landing/other.png");
    utils.observeSelector(".device-detector-box.bottom", function(elem){
        $(elem).addClass('hidden');
    });
   
    var documentAPIURL = window.ln+"/wcc-services/search/translateDocuments";
var getTermbaseURL = "/wcc-services/termbase/"+opt_windowcc +"-"+opt_windowlc+"/siteHome";
if(!$(".tooltip_headsetHelp_poly").length){
$.ajax({
      	type: 'GET',
		    headers: {"Access-Control-Allow-Origin": "*"},
      	url : getTermbaseURL,
		    beforeSend: function(){},
	      success : function(response) {
		        console.info(response);
            utils.observeSelector(".find-product-info", function(elem){
                  let _ngContentName_product_info = "_ngcontent-app-root-c88";
									$('.find-product-info ul li').each(function() {
 											 $.each(this.attributes, function() {
    											var index = this.name.indexOf("_ngcontent-app-root"); 
    											if(index !== -1){
      												_ngContentName_product_info = this.name;
    											}
  											});
									});
                  $('.find-product-info h3').html(response.data['#pps_WCC_FS_Poly_Pfinder_Tooltip_Heading']);
            			$('#tooltip_labelinfo_others').closest( "li" ).addClass('hidden');            
                  $('#tooltip_video_others').attr('id','tooltip_video_poly');
                  $('.find-product-info ul').prepend('<li '+_ngContentName_product_info+'><a  '+_ngContentName_product_info+'  href="us-en/document/ish_7525690-7525971-16" title="'+ response.data["#pps_WCC_FS_Poly_Serial_Number_Entry_Page_Help_Link"]+'" id="tooltip_headsetHelp_poly" class="tooltip_headsetHelp_poly" target="_blank"><span '+_ngContentName_product_info+' aria-hidden="true">'+ response.data["#pps_WCC_FS_Poly_Serial_Number_Entry_Page_Help_Link"]+'</span></a></li>');
                  
				  var jsonData_swd_poly = {
				  
											"cc": "us",
											"lc": "en",
											"targetCC":opt_windowcc.toUpperCase(),
											"targetLC":opt_windowlc,
											"docIDs": ["ish_7525690-7525971-16"]
									};		
									if(jsonData_swd_poly.docIDs.length > 0){
										$.ajax({
										type: "POST",
										headers: {
												'Content-Type': 'application/json'
										},
										url: documentAPIURL,
										data: JSON.stringify(jsonData_swd_poly),
										success: function(data) {
  											console.info(data.data);
                        if(data.data.documentIDMap['ish_7525690-7525971-16'] == ""){
                        $('#tooltip_headsetHelp_poly').attr('href', "/"+ opt_windowcc +"-"+ opt_windowlc +"/document/ish_7525690-7525971-16");tooltip_headsetHelpp['ish_7525690-7525971-16'])
                      }
										}
										}); 
								}
            });
		    },
	      error : function(e) {
	          console.info('error in termbase ajax call');
	      },
        complete: function() {     
             console.info('termbase call completed');            
        }
});
}
   $(document.body).on('click', '.country-selector' ,function(){ 
	if($('.country-group').length > 0){
		var listItems = $('.country-group li a');
		listItems.each(function(idx, li) {
			var relcc = $(li).attr('rel');
			var rellc = $(li).attr('data-languagecode');
			$(li).attr('href', "/"+relcc+"-"+rellc+"/drivers/products#poly");
		});
	}
	if($('.country-list').length > 0){
		var listItems = $('.country-list li a');
		listItems.each(function(idx, li) {
			var relcc = $(li).attr('rel');
			var rellc = $(li).attr('data-languagecode');
			$(li).attr('href', "/"+relcc+"-"+rellc+"/drivers/products#poly");
			console.info(product);
			console.info(products);
		});
	}
});
   
   $(document).on( 'click', 'a, button' , function (){ 
			if (this.id !== "") {
				adobeAnalyticsTracking("eVar37", globalDataLayer.Template + "|" + this.id + "|SSVSPRT-9479-SWD-Poly");
			}	
});
   
 } 
  });
//},{"once": true});



$(document.body).on('click', '#tooltip_video_poly' ,function(){
   var videoidPoly = {en:"pp2EQg0XQHo", cn:"6309574785112"};
   utils.observeSelector(".videoMainContainer", function(elem){
       $('iframe#other').addClass('hidden');
       $.ajax({
        type: 'GET',
        url: "/wcc-services/content/videoDetails/" + opt_windowcc + "-" + opt_windowlc + "?videoIds=CID36679876&udpFlag=true",
        contentType: "application/json",
        dataType: 'json'
    }).done(function(data) {
        if(data.data == null){
          data.data["CID36679876"].brightcoveId = "";
          data.data["CID36679876"].youtubeId = "";
        }
        if(opt_windowcc == "cn"){
       		$('iframe#other').after('<video id="myPlayerID" class="video-js aspectRatio" data-video-id="'+data.data["CID36679876"].brightcoveId+'" data-account="1160438706001" data-player="ByLWUi0A" data-embed="default" data-application-id controls width="100%"  height="100%" autoplay></video></div>');
        var brightCoveScript = document.createElement( 'script' );
				brightCoveScript.type = 'text/javascript';
				brightCoveScript.src = 'https://players.brightcove.net/1160438706001/ByLWUi0A_default/index.min.js';
				$('body').append( brightCoveScript );
       }
       else{
         let _ngContentName_iframe = "_ngcontent-app-root-c88";
$('.iframe#other').each(function() {
  $.each(this.attributes, function() {
    var index = this.name.indexOf("_ngcontent-app-root"); 
    if(index !== -1){
      _ngContentName_iframe = this.n="0" allow="autoplay" frameborder="0" allowfullscreen="" class="modalLayout" id="poly" src="https://www.youtube.com/embed/'+data.data["CID36679876"].youtubeId+'?rel=0&amp;autoplay=0"></iframe>');
       }       
    }).fail(function(jqXHR, textStatus) {
        console.infor("ms log: video json ld fetch failed ");
    });
       
   });
});

$(document.body).on('click', '#Other' ,function(){
   $('#Other').addClass('active');
   $('#Poly').removeClass('active');
   $('#Other img').attr('src', "https://support.hp.com/wcc-assets/content/dam/hp-wcc/headless-assets/images/swd/swd-landing/other.png");
   window.location.assign("/"+opt_windowcc +"-"+opt_windowlc+"/drivers/products");
});
+"-"+opt_windowlc+"/drivers/printers");
});

$(document.body).on('click', '#Laptop' ,function(){
   window.location.assign("/"+opt_windowcc +"-"+opt_windowlc+"/drivers/laptops");
});

$(document.body).on('click', '#Desktop' ,function(){
   window.location.assign("/"+opt_windowcc +"-"+opt_windowlc+"/drivers/desktops");
});

$(document.body).on('click', '#Poly' ,function(){  
    window.location.assign("/"+opt_windowcc +"-"+opt_windowlc+"/drivers/products#poly");  
    window.location.reload("/"+opt_windowcc +"-"+opt_windowlc+"/drivers/products#poly");  
});

/*utils.observeSelector("app-home", function(elem){
},{"once": true});*/
}, "dependencies": []}, {"id": "14CFEEC4-7FC1-43B0-B643-05EBB7D32AA4", "type": "append", "selector": "head", "value": "<style>.hidden{\n\tdisplay: none;\n}\n\nswd-identify-header .product-icons-list .product-type-icon:focus, .product-type-container .product-icons-list .product-type-icon:focus {\n    outline: #0096D6 auto 0px;\n    box-shadow: 0 0 6px #0096d6;\n}\n\nswd-identify-header .product-icons-list .product-type-icon:focus, \n.product-type-container .product-icons-list .product-type-icon:focus {\n    outline: #0096D6 auto 0px;\n    box-shadow: 0 0 6px #0096d6;\n}\n\n.swd-identify-header .product-icons-list .product-type-icon#Poly.active,\n.product-type-container .product-icons-list .product-type-icon.product-type-icon#Poly.active{\n    outline: #0096D6 auto 0px;\n    box-shadow: 0 0 6px #0096d6;\n}\n\n.swd-identify-header .product-icons-list .product-type-icon#Poly img,\n.product-type-container .product-icons-list .product-type-icon.product-type-icon#Poly img{\n\t  width: 30px;\n    height: 24px;\n}\n\n.swd-identify-header .product-icons-list .product-type-icon#Poly.active img,\n.product-type-container .product-icons-list .product-type-icon.product-type-icon#Poly.active img{\n     content: url(\"//cdn.optimizely.com/img/2129670914/7092b9888b5349628b4cbee768f81666.svgz\");\n}\n    \n\n.swd-identify-header .product-icons-list .product-type-icon#Poly:hover,\n.product-type-container .product-icons-list .product-type-icon.product-type-icon#Poly:hover{\n     background: #0278AB;\n}\n\n.swd-identify-header .product-icons-list .product-type-icon#Poly:hover img,\n.product-type-container .product-icons-list .product-type-icon.product-type-icon#Poly:hover img\n{\n   content: url(\"//cdn.optimizely.com/img/2129670914/7092b9888b5349628b4cbee768f81666.svgz\");  \n} \n\n@media only screen and (min-width: 600px) and (max-width: 767px), only screen and (max-width: 600px), only screen and (min-width: 768px) and (max-width: 991px){\n\t.swd-identify-header .product-icons-list{\n    gap: 20px !important\n\t}\n}</style>", "dependencies": []}]}]}], "weightDistributions": null, "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["25984282333"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "26010890012", "name": null, "commitId": "26156861099", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "20195953023"], "audienceName": null, "changes": null, "id": "26021560926", "integrationSettings": null, "variations": [{"id": "26031000685", "name": null, "actions": []}, {"id": "26029200614", "name": null, "actions": [{"viewId": "26001311960", "changes": [{"id": "DC6ED6D5-7E9A-4B73-B71F-E19AA81681F5", "type": "custom_code", "value": function($){const translations = {
	en:"Please note, warranty and coverage information won’t be available until a minimum of 14 days after purchase. Apologies for the inconvenience.",
  ar: "يُرجى ملاحظة أن معلومات الضمان والتغطية لن تكون متاحة إلا بعد 14 يومًا على الأقل من الشراء. نعتذر عن الإزعاج.",
  cs: "Vezměte prosím na vědomí, že informace o záruce a krytí budou k dispozici nejdříve 14 dní po zakoupení. Omlouváme se za nepříjemnosti.",
  da: "Bemærk, at garanti- og dækningsoplysninger først er tilgængelige mindst 14 dage efter købet. Vi beklager ulejligheden.",
  de: "Bitte beachten Sie, dass Informationen zur Garantie und zum Versicherungsschutz frühestens 14 Tage nach dem Kauf zur Verfügung gestellt werden können. Wir entschuldigen uns für die Unannehmlichkeiten.",
  el: "Να σημειωθεί ότι οι πληροφορίες εγγύησης και κάλυψης θα είναι διαθέσιμες 14 ημέρες μετά την αγορά. Λυπούμαστε για την ταλαιπωρία.",
  es: "Tenga en cuenta que la información sobre la garantía y cobertura no estará disponible hasta un mínimo de 14 días después de la compra. Disculpe las molestias.",
  fi: "Huomaa, että takuu- ja katetiedot ovat saatavilla vasta vähintään 14 päivää oston jälkeen. Valitamme tästä aiheutuvaa vaivaa.",
  fr: "Veuillez noter que les informations sur la garantie et la couverture ne seront disponibles qu'au moins 14 jours après l'achat. Nous nous excusons pour la gêne occasionnée.",
  he: "שימו לב, המידע על האחריות והכיסוי הביטוחי יהיה זמין רק אחרי לפחות 14 יום ממועד הרכישה. אנו מתנצלים על אי-הנוחות.",
  hu: "Kérjük, vegye figyelembe, hogy a garanciával és a lefedettséggel kapcsolatos információk a vásárlás után legalább 14 elteltével lesznek csak elérhetők. Elnézést a kellemetlenségért.",
  it: "Notare che le informazioni sulla garanzia e sulla copertura non saranno disponibili prima di almeno 14 giorni dall'acquisto. Ci scusiamo per l'inconveniente.",
  ja: "保証および補償範囲に関する情報は購入後14日以降にご参照可能です。ご理解のほどよろしくお願い申し上げます。",
  ko: "보증 및 적용 범위 정보는 구매 후 최소 14일이 지나야 확인할 수 있습니다. 불편을 끼쳐 드려 죄송합니다.",
  nl: "Let op: informatie over garantie en dekking is op zijn vroegst 14 dagen na aankoop beschikbaar. Onze excuses voor het ongemak. ",
  no: "Vær oppmerksom, informasjon om garanti og dekning vil ikke være tilgjengelig før minst 14 dager etter kjøpet. Vi beklager ulempene dette medfører.",
  pl: "Uwaga: informacje na temat gwarancji i jej zakresu będą dostępne po upływie co najmniej 14 dni od zakupu. Przepraszamy za niedogodności.",
  pt: "Atenção: as informações sobre garantia e cobertura não estarão disponíveis nos primeiros 14 dias após a compra. Pedimos desculpa pelo incómodo.",
  ru: "Просьба учитывать, что информация о гарантии и покрытии станет доступной не ранее, чем через 14 дней после покупки. Приносим извинения за неудобства. ",
  sv: "Obs! All information om garanti och täckning kommer att vara tillgänglig endast minst 14 dagar efter köpet. Vi ber om ursäkt för besväret",
  th: "โปรดทราบว่าจะไม่มีข้อมูลเกี่ยวกับการรับประกันและความคุ้มครองจนกว่าจะผ่านไปอย่างน้อย 14 วันหลังจากการซื้อ ขออภัยในความไม่สะดวก",
  tr: "Lütfen, garanti ve kapsam bilgilerinin satın alma tarihinden itibaren en az 14 gün geçmeden mevcut olmayacağını unutmayın. Verdiğimiz rahatsızlıktan dolayı özür dileriz.",
  uk: "Будь ласка, зверніть увагу, що інформація про гарантію та покриття буде доступна щонайменше через 14 днів після покупки. Приносимо вибачення за незручності. ",
  "hk-zh": "請注意，保固和涵蓋範圍資訊在購買後至少 14 天後才會提供。不便之處敬請原諒",
  "tw-zh": "請注意，保固和涵蓋範圍資訊在購買後至少 14 天後才會提供。不便之處敬請原諒",
  "cn-zh": "请注意，保修和覆盖范围信息至少在购买后 14 天内才能提供。对您造成的不便，我们深表歉意。"
};
const utils = window.optimizely.get("utils");
const cc = window.opt_windowcc;
const lc = window.opt_windowlc;
let lineText = translations[lc]||translations.en; 
if(lc==="zh"){
	lineText = translations[cc+"-"+lc];
}
utils.observeSelector("app-single-product .checkWarrantyForm", elem=>{
  	$(elem).prepend(`<div class = "opt-single-product">${lineText}</div>`);
  });

utils.observeSelector("app-multiple-product", elem=>{
  	$(elem).prepend(`<div class = "opt-multiple-product">${lineText}</div>`);
  });

utils.observeSelector("app-multi-product-warranty-summary form", elem=>{
  	$(elem).prepend(`<div class = "opt-multi-product-warranty-summary">${lineText}</div>`);
  });
}, "dependencies": []}, {"id": "172A3740-D1BD-43E4-BA1F-4FA24FFA0224", "type": "append", "selector": "head", "value": "<style>.opt-multiple-product{\n  \tmax-width: 593px;\n    color: #666;\n    font-size: 14px;\n    font-weight: 300;\n    margin: 20px auto 20px auto;\n    height: 0px;\n}\n\n.opt-multi-product-warranty-summary {\n    font-size: 14px;\n    font-weight: 300;\n    color: #666;\n    font-size: 14px;\n    font-weight: 300;  \n    max-width: 380px;\n}\n.opt-single-product{\n\t\tmax-width: 386px;\n  \tcolor: #666;\n\t\tfont-size: 14px;\n\t\tfont-weight: 300;\n  \tmargin-bottom: 15px;\n}</style>", "dependencies": []}]}]}], "weightDistributions": [{"entityId": "26029200614", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["26001311960"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "26540160034", "name": null, "commitId": "26735830755", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "20195953023"], "audienceName": null, "changes": null, "id": "26577450017", "integrationSettings": null, "variations": [{"id": "26567980030", "name": null, "actions": [{"viewId": "26577100030", "changes": [{"id": "B795F857-5957-40B6-B0B1-34743035E1F3", "type": "custom_code", "value": function($){const translations = {
	en: {
  	bold: "First time here?",
    main: "Learn how to use the HP support website for Poly. If you are a Poly Partner or Enterprise customer,",
    link: " learn how to use HP Support"
  },
  ar: {
    bold: "هل هذه أول مرة لك هنا؟ ",
    main: " تعرّف على كيفية استخدام موقع دعم HP لـ Poly. إذا كنت أحد عملاء Poly Partner أو Enterprise.تعرف",
    link: ".تعرف عل كيفية استخدام دعم HP"
  },
  cs: {
  	bold: "Jste tu poprvé?",
    main: "Jste-li partnerem Poly nebo zákazníkem Enterprise,",
    link: " Naučte se používat podporu HP"
  },
  da: {
  	bold: "Er det første gang, du er her?",
    main: "Er det første gang, du er her? Få mere at vide om, hvordan du bruger HP's supportwebsted til Poly. Hvis du er Poly Partner eller Enterprise-kunde,",
    link: " få mere at vide om, hvordan du bruger HP Support"
  },
  de: {
  	bold: "Sind Sie zum ersten Mal hier?",
    main: "Erfahren Sie, wie Sie die Website HP Support für Poly optimal nutzen. Informationen für Poly Partner und Geschäftskunden,",
    link: " So nutzen Sie HP Support optimal"
  },
  el: {
  	bold: "Νέος χρήστης;",
    main: "Μάθετε πώς να χρησιμοποιήσετε τον ιστότοπο υποστήριξης της HP για τα προϊόντα Poly σας. Αν είστε Συνεργάτης Poly ή Εταιρικός πελάτης,",
    link: " Μάθετε πώς να χρησιμοποιείτε την Υποστήριξη HP"
  },
  es: {
  	bold: "¿Primera vez aquí?",
    main: "Aprenda a utilizar el sitio web de soporte de HP para Poly. Si eres un Socio de Poly o cliente de Enterprise,",
    link: " Aprenda cómo utilizar el soporte de HP"
  },
  fi: {
  	bold: "Oletko täällä ensimmäistä kertaa?",
    main: "Opi käyttämään Polyn HP-tukisivustoa, jos olet Poly-kumppani tai yritysasiakas,",
    link: " Opi käyttämään HP-tukea"
  },
  fr: {
  	bold: "Première visite ?",
    main: "Découvrez comment utiliser le site Web d'assistance pour Poly. Si vous êtes un Partenaire Poly ou un client d'Entreprise,",
    link: " Découvrez comment utiliser l'Assistance HP"
  },
  he: {
  	bold: "הגעת לכאן לראשונה?  ",
    main: " למד כיצד להשתמש באתר התמיכה של HP עבור Poly. אם אתה שותף Poly או לקוח ארגוני",
    link: " למד כיצד להשתמש בתמיכה של HP"
  },
  hu: {
  	bold: "Első alkalommal van jelen van itt?",
    main: "Opi käyttämään Polyn HP-tukisivustoa, jos olet Poly-kumppani tai yritysasiakas,",
    link: " Opi käyttämään HP-tukea"
  },
  it: {
  	bold: "È la prima volta che vieni qui?",
    main: "Scopri come utilizzare il sito web dell'assistenza HP per Poly. Se sei un Partner Poly o un cliente Enterprise,",
    link: " Impara a usare l'Assistenza HP"
  },
  ja: {
  	bold: "初めてですか？",
    main: "PolyのHPサポートウェブサイトの使用方法についての詳細をご覧ください。Poly PartnerまたはEnterpriseのお客様の場合はこちら。",
    link: " HP Supportの使用方法"
  },
  ko: {
  	bold: "여기 처음이세요?",
    main: "Poly 제품을 지원하는 HP 지원 웹사이트 사용 방법을 알아보세요. Poly 파트너나 기업 고객이라면 말이죠,",
    link: " HP 지원 사용 방법 알아보기"
  },
  nl: {
  	bold: "Eerste keer hier?",
    main: "Ontdek hoe u de website HP Klantenondersteuning voor Poly gebruikt als u een Poly Partner of Enterprise-klant bent,",
    link: " Ontdek hoe u HP Klantenondersteuning kunt gebruiken"
  },
  no: {
  	bold: "Ditt første besøk?",
    main: "Finn ut hvordan du bruker HPs støtteside for Poly. Er du Poly- eller Enterprise-partner,",
    link: " Finn ut hvordan du bruker HP Support"
  },
  pl: {
  	bold: "Pierwszy raz tutaj?",
    main: "Dowiedz się, jak korzystać ze strony pomocy technicznej HP dla produktów Poly. Jeśli jesteś partnerem Poly lub klientem korporacyjnym,",
    link: " dowiedz się, jak korzystać z pomocy technicznej HP"
  },
  pt: {
  	bold: "É a primeira vez que nos visita?",
    main: "Saiba como usar o sítio Web de suporte da HP para produtos Poly. Para parceiros Poly ou clientes empresa,",
    link: " Saiba como usar o suporte HP"
  },
  ru: {
  	bold: "Впервые здесь?",
    main: "Узнайте, как использовать веб-сайт поддержки HP для Poly. Если вы партнер Poly или корпоративный клиент,",
    link: " Узнайте, как пользоваться службой поддержки HP"
  },
  sv: {
  	bold: "Första gången?",
    main: "Lär dig hur du använder HP:s supportwebbplats för Poly. Om du är Poly Partner eller Enterprise-kund,",
    link: " Lär dig hur du använder HP Support"
  },
  th: {
  	bold: "ครั้งแรกที่นี่ใช่หรือไม่",
    main: "เรียนรู้วิธีใช้เว็บไซต์บริการสนับสนุนลูกค้าของ HP สำหรับ Poly หากคุณเป็นคู่ค้าหรือลูกค้าองค์กรของ Poly,",
    link: " เรียนรู้วิธีใช้บริการสนับสนุนลูกค้า HP"
  },
  tr: {
  	bold: "Buraya ilk kez mi geliyorsunuz?",
    main: "Poly için HP destek web sitesini nasıl kullanacağınızı öğrenin. Poly İş Ortağı veya Kurumsal müşteriyseniz,",
    link: " HP Destek'i nasıl kullanacağınızı öğrenin"
  },
  uk: {
  	bold: "Вперше тут?",
    main: "Дізнайтеся, як користуватися веб-сайтом служби підтримки HP для Poly. Якщо ви є партнером Poly або корпоративним клієнтом, натисніть,",
    link: " дізнатися, як користуватися службою підтримки HP"
  },
  "hk-zh": {
  	bold: "首次到此处吗？",
    main: "了解如何使用 Poly 的 HP 支持网站。如果您是 Poly 合作伙伴或企业客户。",
    link: " 了解如何使用 HP 支持"
  },
  "tw-zh": {
  	bold: "首次到此处吗？",
    main: "了解如何使用 Poly 的 HP 支持网站。如果您是 Poly 合作伙伴或企业客户。",
    link: " 了解如何使用 HP 支持"
  },
  "cn-zh": {
  	bold: "第一次來這裡嗎？",
    main: "瞭解如何使用適用於 Poly 的 HP 支援網站。如果您是 Poly 合作夥伴或企業客戶。",
    link: " 瞭解如何使用 HP 支援"
  },
};  

let lineText = translations[opt_windowlc]||translations.en; 
if(opt_windowlc==="zh"){
	lineText = translations[opt_windowcc+"-"+opt_windowlc];
}

$(()=>{
   const utils = window.optimizely.get("utils");
    let storedValue = window.sessionStorage.getItem('opt-cross-icon');
   
   if(storedValue===null){
    	utils.observeSelector("app-poly>div", elem=>{
  			$(elem).prepend(`
				<div class = "opt-banner-section"><div class = "opt-shield-icon"><img src = "//cdn.optimizely.com/img/2129670914/32839034d75840869a4c9540e93d6d4e.svgz"></div><div class = "opt-banner-text"><span style="font-weight:bold">${lineText.bold}</span>${lineText.main}<a href="https://support.hp.com/${opt_windowcc}-${opt_windowlc}/document/ish_9727404-9728717-16"id="display-banner"target="_blank">${lineText.link}</a></div><div class = "opt-cross-icon"><img src = "//cdn.optimizely.com/img/2129670914/eb9ab3d14c5d44208a0f0662490e02b9.svgz"></div></div>`);
     
				document.getElementsByClassName("opt-cross-icon")[0].onclick = function(){
                document.getElementsByClassName("opt-banner-section")[0].style.display = 'none';
          				window.sessionStorage.setItem('opt-cross-icon', true);
            }; 
     
 });
   }
   
});
}, "dependencies": []}, {"id": "C5A37A1A-B2A1-4D7F-891D-33D6A31F560F", "type": "append", "selector": "head", "value": "<style>.opt-banner-section {\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 24px;\n    display: flex;\n}\n\n\n.opt-shield-icon {   \n    background: #CAF3FF;\n    display: flex;\n    padding: 12px 15px 12px max(15px, 50% - 610px);  \n  \tmin-width: 55px;\n    /*margin-left: -15px*/\n}\n.opt-banner-text{\n    margin: 10px;\n    padding: 0 30px 0 30px;  \n}\n.opt-cross-icon{\n   display: flex;\n    padding: 12px 50px 12px 100px;\n}\n.opt-cross-icon img {\n  cursor: pointer;\n}\n@media screen and (max-width: 1024px){\n\t\n  .opt-shield-icon {   \n    /*background: #CAF3FF;\n    display: flex;\n    padding: 12px 20px 12px 0px;\n\t  width: 85px;*/\n\t  margin-top: -5px;\n\t  \n}\n\t.opt-shield-icon img{\n\t\t/*margin-top: -20;\n    height: 24px;\n\t\twidth: 24px;\n\t\t margin-left: auto;*/\n\t}\n\n\t.opt-cross-icon img{\n    margin-top: -20px;\n\t\twidth: 24px;\n\t\t margin-right: 30px;\n\t}\n\t.opt-cross-icon img {cursor: pointer;}\n}  \n@media screen and (max-width: 800px){\n \n.opt-cross-icon {\n    padding: 12px 50px 12px 0;\n    vertical-align:text-top;\n    }\n \n.opt-shield-icon img {\n  \n  margin-top:0 !important;\n  height: 24px;\n  \n}\n.opt-shield-icon img, .opt-cross-icon img {\n  margin-top:0 !important;\n  height: 24px;\n  }</style>", "dependencies": []}, {"css": {}, "dependencies": [], "attributes": {}, "type": "attribute", "id": "8B964DBC-6CFC-4977-8061-4051BAD80394", "selector": ".opt-banner-text"}]}]}, {"id": "26561620022", "name": null, "actions": [{"viewId": "26577100030", "changes": []}]}], "weightDistributions": [{"entityId": "26567980030", "endOfRange": 10000}], "name": null, "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["26577100030"], "weightDistributions": null, "decisionMetadata": null}], "groups": [], "audiences": [{"id": "20178924461", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": "var results;\nif((window.location.href).indexOf(\"qa2\") > 0){\n      if(opt_windowcc == \"nz\" ){    \n          results =  true;\n      }\n      else{\n          results =  false;\n      }\n    }\n    else{ \n        results =  true;\n    }"}]]]}, {"id": "20195953023", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": "var results;\nif((window.location.href).indexOf(\"uat\") > 0 || (window.location.href).indexOf(\"ppssupport\") > 0 ||  (window.location.href).indexOf(\"wcc-dr-even.corp\") > 0){\n      if(opt_windowcc == \"nz\" ){   \n          results =  true;\n      }else{\n          results =  false;\n      }\n}else{\n    results =  true;\n}"}]]]}, {"id": "20530010617", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": "(window.opt_windowlc === \"en\")"}]]]}, {"id": "24480690545", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": "(['emea_africa', 'emea_middle_east', 'ph', 'id', 'th', 'vn'].indexOf(window.opt_windowcc)!==-1)"}]]]}, {"id": "24492511048", "name": null, "conditions": ["and", ["or", ["or", {"match": null, "name": null, "type": "code", "value": "/2Q|2N|KV|5M|7T|GC|E4|4H|M7|L9|GD|DU|M8|1M|6J|IR|9G|LE|LG5|2G|HQ|M6|N0|2H|4T|B7|IF|52|DY|6V|1N|UR|GU|N4|7S|G0|AU|GP|MS|R6|MN|FH|65|GV|UO|LU/.test(globalDataLayer.Product.productLineCode)"}]]]}], "listTargetingKeys": [], "visitorAttributes": [], "visitorIdLocator": null, "integrationSettings": [], "views": [{"id": "19181870067", "category": "other", "apiName": "18956663993_url_targeting_for_rdr294_hide_give_feedback_option_o", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "/printer-setup/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "22484370720", "category": "other", "apiName": "18956663993_rdr892_instant_ink_dashboard_option_added_to_my_acco", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "/ie-en/service/hp-instant-ink-series/5264756"}, {"match": "substring", "type": "url", "value": "/gb-en/service/hp-instant-ink-series/5264756"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "23990010085", "category": "other", "apiName": "18956663993_search_page_falcon", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "/us-en/search"}, {"match": "substring", "type": "url", "value": "/cn-zh/search"}, {"match": "substring", "type": "url", "value": "/in-en/search"}, {"match": "substring", "type": "url", "value": "/jp-ja/search"}, {"match": "substring", "type": "url", "value": "/de-de/search"}, {"match": "substring", "type": "url", "value": "/fr-fr/search"}, {"match": "substring", "type": "url", "value": "/gb-en/search"}, {"match": "substring", "type": "url", "value": "/ca-en/search"}, {"match": "substring", "type": "url", "value": "/br-pt/search"}, {"match": "substring", "type": "url", "value": "/it-it/search"}, {"match": "substring", "type": "url", "value": "/es-es/search"}, {"match": "substring", "type": "url", "value": "/mx-es/search"}, {"match": "substring", "type": "url", "value": "/kr-ko/search"}, {"match": "substring", "type": "url", "value": "/nl-nl/search"}, {"match": "substring", "type": "url", "value": "/au-en/search"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "24399692060", "category": "other", "apiName": "18956663993_url_targeting_for_optimizely_location", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "null"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": []}, {"id": "24463610612", "category": "other", "apiName": "18956663993_url_targeting_for_3917__web_portal_dashboard__bench_", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "/dashboard/device"}], ["or", {"type": "custom_code", "value": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered.
 * It should return true when the page is ready to activate.
 *
 * Editor now supports ES6 compliant code. Note that adding ES6
 * specific code to an experiment will break for users running
 * ES5-only browsers as code entered is not transpiled down to ES5.
 */

function callbackGlobalDataLayerCMG() {
  //console.info('====');
for(var k = 0; k < 200; k++) { 
  //console.info(k);
  return true;
/*if (undefined !== window.globalDataLayer && undefined !== globalDataLayer.Product && undefined !== globalDataLayer.Product.productLineCode &&  globalDataLayer.Product.productLineCode.length >  0 ){
		return true;		
	}*/
}
}
}], ["or", {"type": "element_present", "value": ".dashboard-device-header"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "dom_changed"}, {"id": "25195760055", "category": "other", "apiName": "18956663993_url_targeting_for__ssvsprt7888__manuals_subcategory_", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "en/product/setup-user-guides"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "url_changed"}, {"id": "25237940469", "category": "other", "apiName": "18956663993_instant_ink_sdp_page", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "/us-en/service/hp-instant-ink-series/5264756"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "25984282333", "category": "other", "apiName": "18956663993_url_targeting_for_ssvsprt9479_swd_update_for_poly__p", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "/drivers/products"}, {"match": "substring", "type": "url", "value": "/drivers/printers"}, {"match": "substring", "type": "url", "value": "/drivers/laptops"}, {"match": "substring", "type": "url", "value": "/drivers/desktops"}, {"match": "substring", "type": "url", "value": "/drivers/products#poly"}]], "deactivationEnabled": true, "undoOnDeactivation": true, "tags": [], "activationType": "url_changed"}, {"id": "26001311960", "category": "other", "apiName": "18956663993_check_warranty", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "/check-warranty"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "26577100030", "category": "other", "apiName": "18956663993_ssvsprt10488__banner_display_on_poly_landing_page", "name": null, "staticConditions": ["and", ["or", {"match": "substring", "type": "url", "value": "/poly"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}], "events": [{"id": "22463141332", "viewId": "22484370720", "name": null, "category": "other", "apiName": "18956663993_track_link_clicks", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".sec-nav-instant-ink-dashboard>a"}}, {"id": "23989580239", "viewId": "23990010085", "name": null, "category": "other", "apiName": "18956663993_explore_link", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".patch4087.opt-explore a"}}, {"id": "23995040142", "viewId": "23990010085", "name": null, "category": "other", "apiName": "18956663993_shop_link", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".patch4087.opt-shop a"}}, {"id": "25222690638", "viewId": "25237940469", "name": null, "category": "other", "apiName": "18956663993_optvarbinstantinksignin", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#optVarB-instant-ink-sign-in"}}, {"id": "25228871483", "viewId": "25237940469", "name": null, "category": "other", "apiName": "18956663993_optshipmenttracking", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#opt-shipment-tracking"}}, {"id": "25232321727", "viewId": "25237940469", "name": null, "category": "other", "apiName": "18956663993_optcontacthp", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#opt-contact-hp"}}, {"id": "25238051481", "viewId": "25237940469", "name": null, "category": "other", "apiName": "18956663993_optvarbvirtualassistant1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#optVarB-virtual-assistant-1"}}, {"id": "25247061753", "viewId": "25237940469", "name": null, "category": "other", "apiName": "18956663993_optvirtualassistant", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#opt-virtual-assistant"}}, {"id": "25253681453", "viewId": "25237940469", "name": null, "category": "other", "apiName": "18956663993_optinstantinksignin_1", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#opt-instant-ink-sign-in"}}, {"id": "25253811370", "viewId": "25237940469", "name": null, "category": "other", "apiName": "18956663993_optvarbshipmenttracking", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#optVarB-shipment-tracking"}}, {"id": "25259200964", "viewId": "25237940469", "name": null, "category": "other", "apiName": "18956663993_optvarbcontacthp", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#optVarB-contact-hp"}}, {"id": "25275700955", "viewId": "25237940469", "name": null, "category": "other", "apiName": "18956663993_optvarbvirtualassistant", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": "#optVarB-virtual-assistant"}}, {"id": "26541710041", "viewId": null, "name": null, "category": "other", "apiName": "poly", "eventType": "custom", "eventFilter": null}, {"id": "26615240078", "viewId": "26577100030", "name": null, "category": "other", "apiName": "18956663993_optbannertext", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".opt-banner-text"}}], "dimensions": [], "projectJS": function(){var opt_pathName = window.location.pathname.split("/");
window.opt_windowcc = opt_pathName[1].substring(0, opt_pathName[1].indexOf("-"));
window.opt_windowlc = opt_pathName[1].substring(opt_pathName[1].indexOf("-") + 1, opt_pathName[1].length);

var grecaptchaKey = "6LfX93IaAAAAAKlH_84kr8WSMGbZ-qDaxJxNzrnB";

/**adobe tracking event common function impl (10 Aug 2021)  STARTS **/
window.optAdobeTrackingESSCommon  = function optAdobeTrackingESSCommon(vId, text){
	var y = {};
    var varId = vId; 
    y[varId] = text;
    y["linkTrackVars"] = varId;
    console.log("adobeAnalyticsEss|"+JSON.stringify(y));
    try{     
      ess.tl(true,"o",text, y);
    }
    catch(err){
      console.log('ess function not found'+ err);
    }  
};
/**adobe tracking event common function impl (10 Aug 2021)  ENDS **/

if(window.location.href.indexOf("https://support.hp.com/") >= 0){
/** Start get country cc and lc function impl (Sep 4 2020) **/

console.info('falcon contentSquare imp remove v0.1');


/** #459 close alert after 10 sec **/
/*function optlyAlertCloseTemp() {
    if(localStorage.getItem("onLoadreadAlert")  === null){
		optlyUtils.observeSelector(".notifications-main", function(elem) {
			setTimeout(function(){
            if(document.getElementById('onetrust-banner-sdk')!= null && document.getElementById('onetrust-banner-sdk').style.display != "none" ){
               $("#closeAlert")[0].click();
              setTimeout(function(){ $("#onetrust-banner-sdk").css({"visibility": "inherit", "opacity": "1", "display":"block"});}, 10);
            }
        else{
         $("#closeAlert")[0].click();
        }
			}, 10000);

		}, {once: true});
    }
}*/


/** BEGIN ContentSquare impl (Aug 6 2020) **/
function onOpInitialized(event) {
    window.optlyUtils = window.optimizely.get("utils");
    /* START removing content square from optimizely req = RDR 608
    var cntsqr = document.createElement('script');
    cntsqr.setAttribute('type','text/javascript');
    cntsqr.innerHTML = "(function () { window._uxa = window._uxa || []; try { if (typeof (hpmmd.page) != 'undefined') { if (typeof hpmmd.page.name != 'undefined') { window._uxa.push(['setCustomVariable', 1, 'pageName', hpmmd.page.name, 3]); } if (typeof hpmmd.page.sectiontaxonomy != 'undefined') { window._uxa.push(['setCustomVariable', 2, 'sectionTaxonomy', hpmmd.page.sectiontaxonomy, 3]); } if (typeof hpmmd.page.lifecycle != 'undefined') { window._uxa.push(['setCustomVariable', 3, 'lifecycle', hpmmd.page.lifecycle, 3]); } } } catch (e){} try { var CS_DL = _UDL.getDataLayerVar('e_pageView'); if (typeof (CS_DL) != 'undefined') { if (typeof CS_DL.pageNameL5 != 'undefined') { window._uxa.push(['setCustomVariable', 4, 'pageNameL5', CS_DL.pageNameL5, 3]); } if (typeof CS_DL.pageNameL6 != 'undefined') { window._uxa.push(['setCustomVariable', 5, 'pageNameL6', CS_DL.pageNameL6, 3]); } } } catch (e){} if (typeof CS_CONF === 'undefined') { window._uxa.push(['setPath', window.location.pathname+window.location.hash.replace('#','?__')]); var mt = document.createElement(\"script\"); mt.type = \"text/javascript\"; mt.async = true; mt.src = \"//t.contentsquare.net/uxa/9d25aca9-e352-4895-bbbd-ccebc9786c07.izely"] || [];
window["optimizely"].push({
  type: "addListener",
  filter: {
    type: "lifecycle",
    name: "initialized"
  },
  handler: onOpInitialized
});

/** BEGIN create doc url  impl (19 MAR 2021) **/
window.createDocUrlOptly = function (){
    var className = '.document-url-optly';
    console.log('doc url ==');
    var documentAnchorsOptly = $(className);
    var documentPathCheck = "document/";
    var documentAPIURL = "/hp-pps-services/kaaS/getDocumentTranslations?lc=" + opt_windowlc + "&cc=" + opt_windowcc;
    var finalDocumentAnchors = [];
	$(documentAnchorsOptly).each(function(i) {
		var actualTaggedDom = $(this);
		var extendedUrl = $(this).attr('data-extendedUrl');
		var hasonlyHrefOptly = $(this).hasClass("onlyHrefOptly") ? true : false;
		var documentAnchorDom = actualTaggedDom.closest('a');
		var link = documentAnchorDom.attr('href');
		if (typeof link === 'undefined') {
			documentAnchorDom = $(this).children(":first");
			link = documentAnchorDom.attr('href');
		}
		if (link.indexOf(documentPathCheck) > -1) {
			var splittedLink = link.split('/');
			var documentId = splittedLink[splittedLink.length - 1];
			var documentIdArray = [];
			documentIdArray.push(documentId);
			var jsonData = {
				"docIDs": documentIdArray,
				"docTitles": documentIdArray
			};
			$.ajax({
				type: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				url: documentAPIURL,
				data: JSON.stringify(jsonData),
				success: function(data) {
					var currentLanguageIDJSON = data['documentURLMap'];
					var currentLanguageTitleJSON = data['documentTitleMap'];
					if(hasonlyHrefOptly){
						if (typeof currentLanguageIDJSON !== 'undefined') {
							//update path
							var docURL = currentLanguageIDJSON['docurl' + documentId];
							if(validateExternalUrlOptly(docURL)){
								documentAnchorDom.attr('href',docURL+extendedUrl);
							}
						}
					}else{
						if (typeof currentLanguageIDJSON !== 'undefined') {
							//update path
							var docURL = currentLanguageIDJSON['docurl' + documentId];
							if(validateExternalUrlOptly(docURL)){
								documentAnchorDom.attr('href',docURL+extendedUrl);
							}
						}
						if (typeof currentLanguageTitleJSON !== 'undefined') {
							//update text
							if (documentAnchorDom.find(className).length !== 0) {
								documentAnchorDom = documentAnchorDom.find(className);
							}
							documentAnchorDom.text(currentLanguageTitleJSON['doctitle' + documentId]);
						}
					}
				}
			});
		}
	});
};

window.validateExternalUrlOptly= function (value) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
};
/** END create doc url  impl (19 MAR 2021) **/




/**feedback button and form creation impl (31 Aug 2021)  STARTS **/
/** before making it live. Please remove the old code for feedback Btn styling and uncomment the below css script 
/** external css added for feedback button **/
   /* $('head').append('<link type="text/css" rel="styleSheet" href="https://support.hp.com/wps/wcm/connect/pps/225ad22a-5657-4c62-8dd7-7172c89eda13/falconcss.css?MOD=AJPERES" />');


  console.info("feedback for create testing ver 0.001");
    var feedbackBtnTextAEMArray = {"en" :{ text :"Feedback"}, "ar" : { text :"ردود الفعل"}, "cs" : { text :"Zpětná vazba"}, "da" : { text :"Feedback"}, "de" : { text :"Feedback"}, "el" : { text :"Ανατροφοδότηση"}, "es" : { text :"Comentarios"}, "fi" : { text :"Palaute"}, "fr" : { text :"Avis"}, "he" : { text :"מָשׁוֹב"}, "hu" : { text :"Visszajelzés"}, "it" : { text :"Risposta"}, "ja" : { text :"フィードバック"}, "ko" : { text :"피드백"}, "nl" : { text :"Feedback"}, "nb" : { text :"Tilbakemelding"}, "pl" : { text :"Opinie"}, "pt" : { text :"Comentários"}, "br" : { text :"Comentários"}, "ro" : { text :"Părere"}, "ru" : { text :"Оставить отзыв"}, "sv" : { text :"Respons"}, "th" : { text :"ข้อเสนอแนะ"} , "tr" : { text :"Geri Bildirim"}, "cn" : { text :"反馈"}, "tw" : { text :"反饋"}, "hk" : { text :"反饋"}, "uk" : { text :"Відгук"}};

	var feedbackFormAem = 32024; //34025; // cahnge value for pro to 32024
	
	/** uncomment below code for pro **/
	/*if(opt_windowcc+"-"+opt_windowlc == "br-pt"){ feedbackFormAem = 33437;}
	if(opt_windowcc+"-"+opt_windowlc == "tw-zh"){ feedbackFormAem = 33454;}
	if(opt_windowcc+"-"+opt_windowlc == "hk-zh"){ feedbackFormAem = 33446;}
	
	
	function waitForKampyle() {
	    console.info("start running");
	    var checkExistKampyle = setInterval(function() {
		    if (typeof(KAMPYLE_ONSITE_SDK) != "undefined") {	
		        clearInterval(checkExistKampyle);
		        console.info("running");
		        KAMPYLE_ONSITE_SDK.loadForm(feedbackFormAem);
			    var feedbackBtnTextAEM = feedbackBtnTextAEMArray.en.text; 
			    if(opt_windowcc == "cn" || opt_windowcc == "tw" || opt_windowcc == "hk"){
				    feedbackBtnTextAEM = feedbackBtnTextAEMArray[opt_windowcc].text;
			    }
				else{
					feedbackBtnTextAEM = feedbackBtnTextAEMArray.hasOwnProperty(opt_windowlc) ? feedbackBtnTextAEMArray[opt_windowlc].text : feedbackBtnTextAEMArray.en.text;
				}
			    $('#psf').append('<li _ngcontent-app-root-c6="" id="opt_Feedback_form_AEM" class="opt_feedback_li psf-feedback"><a tabindex="0" _ngcontent-app-root-c6="" class="opt_feedback_link psf-link">'+feedbackBtnTextAEM+'</a></li>');
			    //console.table(typeof(KAMPYLE_ONSITE_SDK));
			    if (opt_windowlc == "ar" || opt_windowlc == "he") {
				    $(".opt_feedback_li").css("transform", "rotate(270deg)");
			    }	
          $("head").append('<style type="text/css">#psf li a.opt_feedback_link:focus {outline: 0}</style>');
			    if (opt_windowlc == "zh") {
			       $("head").append('<style type="text/css">html[lang="zh"] .opt_feedback_link {display: table !important; writing-mode: tb-rl; margin-bottom: -3px!important; padding: 11px!important; transform: rotate(270deg); text-orientation: upright; min-height: fit-content; min-height: moz-fit-content; width: inherit; }</style>');
			    }
                $(document).on('click','#opt_Feedback_form_AEM', function(){console.log('clicked form ');KAMPYLE_ONSITE_SDK.showForm(feedbackFormAem);});		
          $(document).on("keyup","#opt_Feedback_form_AEM", function(event) { if (event.keyCode === 13) {KAMPYLE_ONSITE_SDK.showForm(feedbackFormAem);}});		
				/**hididng old feedback button as it is visible for br-pt**/
          /*optlyUtils.observeSelector("#nebula_div_btn", function() {$('#opt_custom_Feedback').hide();});
		    } 
	    }, 500); // check every 500ms
	}
	waitForKampyle();

/**feedback button and form creation impl (31 Aug 2021)  ENDS **/

// #RDR-621 Adding active experiment IDs to Global Data Layer
/*function addVariationIdsToGDL(experimentList) {	
	var listMaxLenght = 100;
	var finalList = JSON.parse(sessionStorage.getItem('OptimizelyVarID')) !== null ? JSON.parse(sessionStorage.getItem('OptimizelyVarID')) : [];
	var variationMap = optimizely.get('state').getVariationMap();

	//Avoiding having duplicates on the list
	for (var i=0; i < experimentList.length; i++) {
		try {
			if(finalList.indexOf(experimentList[i]+"_"+variationMap[experimentList[i]].id) == -1) {				
				finalList.push(experimentList[i]+"_"+variationMap[experimentList[i]].id);
			}
		} catch (e){			
		}
	}

	finalList = (finalList.length >= listMaxLenght) ? finalList.slice(-listMaxLenght) : finalList;
	sessionStorage.setItem('OptimizelyVarID', JSON.stringify(finalList));

	if(globalDataLayer !== null && globalDataLayer !== undefined) {
		globalDataLayer.OptimizelyVarID = finalList.join(';');
	}	
}

$(document).ready(function(){
	var attemptCount = 5;
	(function pollExperimentList() {
	attemptCount--;
	if (attemptCount >= 0){			
		addVariationIdsToGDL(optimizely.get('state').getActiveExperimentIds());
	  	window.setTimeout(pollExperimentList,1000);
	}
	})();
});*/
}

// added on 8 aug 2023 as told by Srabani on zoom
if(window.location.href.indexOf("https://wcc-dev2.corp.hpicloud.net/") >= 0 || window.location.href.indexOf("https://ppssupport-dev2auth.inc.hpicorp.net/") >= 0 || window.location.href.indexOf("https://wcc-qa2.corp.hpicloud.net/") >= 0 || window.location.href.indexOf("https://ppssupport-itg2.inc.hp.com/") >= 0){
/**feedback button and form creation impl (31 Aug 2021)  STARTS **/
/** before making it live. Please remove the old code for feedback Btn styling and uncommenpend('<link type="text/css" rel="styleSheet" href="https://supp" />');


  console.info("feedback for create testing ver 0.001");
    var feedbackBtnTextAEMArray = {"en" :{ text :"Feedback : { text :"Zpětná vazba"}, "da" : { text :"Feedback"}, "de" : { text :"Feedback"}, "el" : { text :"Ανατροφοδότηση"}, "es" : { text :"Comentarios"}, "fi" : { text :"Palaute"}, "fr" : { text :"Avis"}, "he" : { text :"מָשׁוֹב"}, "hu" : { text :"Visszajelzés"}, "it" : { text :"Risposta"}, "ja" : { text :"フィードバック"}, "ko" : { text :"피드백"}, "nl" : { text :"Feedback"}, "nb" : { text :"Tilbakemelding"}, "pl" : { text :"Opinie"}, "pt" : { text :"Comentários"}, "br" : { text :"Comentários"}, "ro" : { text :"Părere"}, "ru" : { text :"Оставить отзыв"}, "sv" : { text :"Respons"}, "th" : { text :"ข้อเสนอแนะ"} , "tr" : { text :"Geri Bildirim"}, "cn" : { text :"反馈"}, "tw" : { text :"反饋"}, "hk" : { text :"反饋"}, "uk" : { text :"Відгук"}};

	var feedbackFormAem = 34025; //34025; // change value for pro to 32024
	
	/** uncomment below code for pro **/
	/*if(opt_windowcc+"-"+opt_windowlc == "br-pt"){ feedbackFormAem = 33437;}
	if(opt_windowcc+"-"+opt_windowlc == "tw-zh"){ feedbackFormAem = 33454;}
	if(opt_windowcc+"-"+opt_windowlc == "hk-zh"){ feedbackFormAem = 33446;}*/
	
	
	function waitForKampyle() {
	    console.info("start running");
	    var checkExistKampyle = setInterval(function() {
		    if (typeof(KAMPYLE_ONSITE_SDK) != "undefin(checkExistKampyle);
		        console.info("running");
		        KAMPYLE_ONSITE_SDK.loadForm(feedbackFormAem);
			    var feedbackBtnTextAEM = feedbackBtnTextAEMArray.en.text; 
			    if(opt_windowcc == "cn" || opt_windowcc == "tw" || opt_windowcc == "hk"){
				    feedbackBtnTextAEM = feedbackBtnTextAEMArray[opt_windowcc].text;
			    }
				else{
					feedbackBtnTextAEM = feedbackBtnTextAEMArray.hasOwnProperty(opt_windowlc) ? feedbackBtnTextAEMArray[opt_windowlc].text : feedbackBtnTextAEMArray.en.text;
				}
			    $('#psf').append('<li _ngcontent-app-root-c6="" id="opt_Feedback_form_AEM" class="opt_feedback_li psf-feedback"><a tabindex="0" _ngcontent-app-root-c6="" class="opt_feedback_link psf-link">'+feedsole.table(typeof(KAMPYLE_ONSITE_SDK));
			    if (opt_windowlc == "ar" || opt_windowlc == "he") {
				    $(".opt_feedback_li").css("transform", "rotate(270deg)");
			    }	
          $("head").append('<style type="text/css">#psf li a.opt_feedback_link:focus {outline: 0}</style>');
			    if (opt_windowlc == "zh") {
			       $("head").append('<style type="text/css">html[lang="zh"] .opt_feedback_link {display: table !important; writing-mode: tb-rl; margin-bottom: -3px!important; padding: 11px!important; transform: rotate(270deg); text-orientation: upright; min-height: fit-content; min-height: moz-fit-content; width: inherit; }</style>');
			    }
                $(document).on('click','#opt_Feedback_form_AEM', function(){console.log('clicked form ');KAMPYLE_ONSITE_SDK.showForm(feedbackFormAem);});		
          $(document).on("keyup","#opt_Feedback_form_AEM", function(event) { if (event.keyCode === 13) {KAMPYLE_ONSITE_SDK.showForm(feedbackFormAem);}});		
				/**hididng old feedback button as it is visible for br-pt**/
          optlyUtils.observeSelector("#nebula_div_btn", function() {$('#opt_custom_Feedback').hide();});
		    } 
	    }, 500); // check every 500ms
	}
	waitForKampyle();

/**feedback button and form creation impl (31 Aug 2021)  ENDS **/
}
}, "interestGroups": [], "tagGroups": []},f=__webpack_require__(8011),l="initializeOptimizelyPreview";if(f.initGlobalStore(s),u.populateDirectiveData(),r.clientHasAlreadyInitialized())e.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");else if(r.shouldBailForDesktopApp())e.log("Main / Disabling because of desktop app.");else if(r.conflictInObservingChanges())e.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");else{if(r.shouldLoadInnie())a.registerFunction("getProjectId",(function(){return s.projectId})),a.registerFunction("getAccountId",(function(){return s.accountId})),c.addScriptAsync("https://app.optimizely.com/js/innie.js"),e.log("Main / Disabling in favor of the editor client.");else if(r.shouldLoadPreview())(r.isSlave()?window.optimizely:window.optimizely=window.optimizely||[]).push({type:"load",data:s}),e.log("Main / Disabling in favor of the preview client."),__webpack_require__(9154).setupPreviewGlobal(),__webpack_require__(9154).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:s}),r.isSlave()||(a.registerFunction("getProjectId",(function(){return s.projectId})),c.addScriptSync("https://cdn-assets-prod.s3.amazonaws.com/js/preview2/18956663993.js"));else if(r.shouldBootstrapDataForPreview()){a.registerFunction(l,(function(n){t(),a.unregisterFunction(l)}));var d=r.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:a.getFunction("getProjectId")();h=r.getProjectToken(),v=d,p=r.getPreviewLayerIds(),o="/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",h).replace("__PROJECT_ID__",v).replace("__PREVIEW_LAYER_IDS__",p.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0),c.addScriptSync(o),__webpack_require__(9154).setupPreviewGlobal(),c.addScriptAsync("/dist/js/preview_ui.js")}else r.shouldBootstrapDataForEditor()?(a.registerFunction(l,(function(n){t(),a.unregisterFunction(l)})),c.addScriptAsync(window.optimizely_editor_data_endpoint)):r.shouldInitialize()&&t();var h,v,p;n.timeEnd("block");var g=n.now();n.setMark("optimizelyFinished",startTime=g,duration=g)}}()}catch(t){try{__webpack_require__(9714).handleError(t)}catch(n){console.log(n)}}}()})();