 /*patch commUtil v-0.01*/

 $('body').append('<style type="text/css">.patchLoader.loading-screen-wrapper{z-index:100000;position:fixed;background-color:#fff;width:100%;height:100%;display:block;opacity:.9;top:0;left:0}.patchLoader .loading-screen-icon{text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:40px}.patchLoader .loader{margin:60px auto;font-size:10px;text-indent:-9999em;border:1.1em solid #0096d6;border-left-color:#fff;transform:translateZ(0);border-radius:50%;width:120px;height:120px;animation:2s linear infinite spin;position:absolute;left:calc(50% - 60px);top:calc(50% - 60px)}</style>'); 

 $('body').append('<div id="patch-modalPageLevelSpinner" class="patchLoader loading-screen-wrapper"><div class="loading-screen-icon ltr"><div class="loader">loader</div><span class="loading-text"></span></div></div>');
 
 var pfw__comm__func;
 
 var patchActive = false;
 
 
// $(document).ready(function() { 
	 
     let pfw_winPathSplit = window.location.pathname.split("/");
     pfw__comm__func = {
         MAX_POLL_COUNT: 110,
         OSName: "Unknown OS",
		 browserInfo: {'name':'Unknown','version':'Unknown',majorVersion:'Unknown', 'appName':'Unknown', 'userAgent':'Unknown'},
         device: "Unknown Device",
         language: pfw_winPathSplit[1].substring(pfw_winPathSplit[1].indexOf("-") + 1, pfw_winPathSplit[1].length),
         country: pfw_winPathSplit[1].substring(0, pfw_winPathSplit[1].indexOf("-")),
         productARresponse: {},
         globalDataLayer: {},
		 deviceType: "Unknown",
		 adobeAnalyticsTracking : function (vId, text){
				var y = {};
				var varId = vId; 
				y[varId] = text;
				y["linkTrackVars"] = varId;
				  //console.log("adobeAnalyticsEss|"+JSON.stringify(y));
				try{     
				  ess.tl(true,"o",text, y);
				}
				catch(err){
				  console.log('ess function not found'+ err);
				}  
		 },
		 loadScript: 
         pollCountFunc: function(MAX_COUNT, arResponse, globalDataLayerData) {
             return new Promise(function(resolve, reject) {
                 if (undefined !== MAX_COUNT) {
                     pfw__comm__func.MAX_POLL_COUNT = MAX_COUNT;
                 }
                 if (arResponse && !globalDataLayerData) {
                     let pollCount = 0;
                     (function pollForProductArResponse() {
                         pollCount++;
                         let p = $("#productARresponse").val();
                         if (undefined !== p && p.length > 0) {
                             pfw__comm__func.productARresponse = JSON.parse($("#productARresponse").val());
                             resolve("Resolved");
                         } else if (pollCount < pfw__comm__func.MAX_POLL_COUNT) {
                             window.requestAnimationFrame(pollForProductArResponse);
                         }
                     })();
                 }
                 if (globalDataLayerData && !arResponse) {
                     let pollCount = 0;
                     (function pollForProductGlobalDataLayer() {
                         pollCount++;
						 console.log(pollCount);
                         let g = typeof globalDataLayer === 'undefined' || !globalDataLayer ? undefined : globalDataLayer;
                         if (undefined !== g) {
                             pfw__comm__func.globalDataLayerData = globalDataLayer;
                             resolve("Resolved");
                         } else if (pollCount < pfw__comm__func.MAX_POLL_COUNT) {
                             window.requestAnimationFrame(pollForProductGlobalDataLayer);
                         }
                     })();
                 }
                 if (arResponse && globalDataLayerData) {
                     let pollCount = 0;
                     (function pollForProductGlobalDataLayer_arResponse() {
                         pollCount++;
                         let g = typeof globalDataLayer === 'undefined' || !globalDataLayer ? undefined : globalDataLayer;
                         let p = $("#productARresponse").val();
                         if (undefined !== p && p.length > 0 && undefined !== g) {
                             pfw__comm__func.productARresponse = JSON.parse($("#productARresponse").val());
                             pfw__comm__func.globalDataLayerData = globalDataLayer;
                             resolve("Resolved");
                         } else if (pollCount < pfw__comm__func.MAX_POLL_COUNT) {
                             window.requestAnimationFrame(pollForProductGlobalDataLayer_arResponse);
                         }
                     })();
                 }
             });
         },
		 // get os name
         getOSName: function() {
             if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1) this.OSName = "windows10";
             if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1) this.OSName = "windows8.1";
             if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) this.OSName = "windows8";
             if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) this.OSName = "windows7";
             if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) this.OSName = "windowsvista";
             if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) this.OSName = "windowsxp";
             if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) this.OSName = "windows2000";
             if (navigator.appVersion.indexOf("Mac") != -1) this.OSName = "macos";
             if (navigator.appVersion.indexOf("X11") != -1) this.OSName = "unix";
             if (navigator.appVersion.indexOf("Linux") != -1) this.OSName = "linux";
             return this.OSName;
         },
		 // get device name 
         getDeviceName: function() {
             if (navigator.platform.match(/(iPhone|iPod|iPad)/i) || navigator.platform.toUpperCase().indexOf('MAC') >= 0) {
                 this.device = "macos";
             } else if (navigator.appVersion.indexOf("X11") != -1) {
                 this.OSName = "unix";
             } else if (navigator.appVersion.indexOf("Linux") != -1) {
                 this.OSName = "linux";
             } else if (navigator.platform.match(/android/i)) {
                 this.device = 'android';
             } else {
                 this.device = 'windows';
             }
             return this.device;
         },
         // check device name
         checkDeviceName: function(device) {
             if (navigator.platform.match(/(iPhone|iPod|iPad)/i) || navigator.platform.toUpperCase().indexOf('MAC') >= 0) {
                 this.device = "macos";
             } else if (navigator.appVersion.indexOf("X11") != -1) {
                 this.OSName = "unix";
             } else if (navigator.appVersion.indexOf("Linux") != -1) {
                 this.OSName = "linux";
             } else if (navigator.platform.match(/android/i)) {
                 this.device = 'android';
             } else {
                 this.device = 'windows';
             }
             if ((device.replace(/^\s+|\s+$/gm, '')).toLowerCase() === (this.device).toLowerCase()) {
                 return true;
             } else {
                 return false;
             }
         },
		 //get device type
		 getDeviceType: function(){
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				 return "Mobile";
			}
			else{
				return "Desktop/Laptop";
			}
		 },
		 checkWindow10or11 : function(){			 
			return (navigator.userAgent.indexOf('Windows NT 10.0')  != -1)? true:false;
		 },
		 //get browserInfo
		 getBrowserInfo: function(){
			var nVer = navigator.appVersion;
			var nAgt = navigator.userAgent;
			var browserName  = navigator.appName;
			var fullVersion  = ''+parseFloat(navigator.appVersion); 
			var majorVersion = parseInt(navigator.appVersion,10);
			var nameOffset,verOffset,ix;

			// In Opera 15+, the true version is after "OPR/" 
			if ((verOffset=nAgt.indexOf("OPR/"))!=-1) {
			 browserName = "Opera";
			 fullVersion = nAgt.substring(verOffset+4);
			}
			// In older Opera, the true version is after "Opera" or after "Version"
			else if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
			 browserName = "Opera";
			 fullVersion = nAgt.substring(verOffset+6);
			 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
			   fullVersion = nAgt.substring(verOffset+8);
			}
			// In MSIE, the true version is after "MSIE" in userAgent
			else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
			 browserName = "Microsoft Internet Explorer";
			 fullVersion = nAgt.substring(verOffset+5);
			}
			// In Edge, the true version is after "Chrome" 
			else if ((verOffset=nAgt.indexOf("Edg"))!=-1) {
			 browserName = "Edge";
			 fullVersion = nAgt.split('Edg/')[1];
			}
			// In Chrome, the true version is after "Chrome" 
			else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
			 browserName = "Chrome";
			 fullVersion = nAgt.substring(verOffset+7);
			}
			// In Safari, the true version is after "Safari" or after "Version" 
			else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
			 browserName = "Safari";
			 fullVersion = nAgt.substring(verOffset+7);
			 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
			   fullVersion = nAgt.substring(verOffset+8);
			}
			// In Firefox, the true version is after "Firefox" 
			else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
			 browserName = "Firefox";
			 fullVersion = nAgt.substring(verOffset+8);
			}
			// In most other browsers, "name/version" is at the end of userAgent 
			else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < 
					  (verOffset=nAgt.lastIndexOf('/')) ) 
			{
			 browserName = nAgt.substring(nameOffset,verOffset);
			 fullVersion = nAgt.substring(verOffset+1);
			 if (browserName.toLowerCase()==browserName.toUpperCase()) {
			  browserName = navigator.appName;
			 }
			}
			// trim the fullVersion string at semicolon/space if present
			if ((ix=fullVersion.indexOf(";"))!=-1)
			   fullVersion=fullVersion.substring(0,ix);
			if ((ix=fullVersion.indexOf(" "))!=-1)
			   fullVersion=fullVersion.substring(0,ix);

			majorVersion = parseInt(''+fullVersion,10);
			if (isNaN(majorVersion)) {
			 fullVersion  = ''+parseFloat(navigator.appVersion); 
			 majorVersion = parseInt(navigator.appVersion,10);
			}

			this.browserName = {'name':browserName,'version':fullVersion,'majorVersion':majorVersion, 'appName':navigator.appName, 'userAgent':navigator.userAgent};
			
            return this.browserName;
		 },
		 //windows version is 10 or 11
		 win10or11 : function (){
			return (navigator.userAgent.indexOf('Windows NT 10.0')  != -1) ? true : false;
		 },
		 // check url contains ?pfw_disabled=true
		 Pfw_disabled : function (){
			return (window.location.href.indexOf("disable_pfw=true") != -1 || window.location.href.indexOf("pfw_disable=true") != -1) ? true : false;
		 },
         // wait for provided selector element
         waitForElement: function (selector, callback) {
			if(typeof callback === 'function')  {		
				var element = document.querySelectorAll(selector);

				for (let i= 0; i < element.length; i++) {
					callback(element[i]);
				}

				var observer = new MutationObserver(function(mutations) {
				    mutations.forEach(function(mutation) {
				        var nodes = Array.from(mutation.addedNodes);
				        for (var node of nodes) {
				            if (node.matches && node.matches(selector)) {		                
				                callback(node);				                
				            } 
				            if (node.querySelectorAll && node.querySelectorAll(selector).length > 0) {
				             	let childList = node.querySelectorAll(selector);
				             	for (let i= 0; i < childList.length; i++) {
									callback(childList[i]);
								}
				            }
				        };
				    });
				});

				observer.observe(document.documentElement, {
					attributes: true,
				    childList: true,
				    subtree: true,
				    characterData: true
				});		 
			}
		},			
		createDocUrl : function (){
			var pfw_validateExternalUrl = 
			var className = '.pfw-document-url';
			var pfw_documentAnchors = $(className);
			var documentPathCheck = "document/";
			var documentAPIURL = window.location.origin+"/wcc-services/search/translateDocuments";
			//"/hp-pps-services/kaaS/getDocumentTranslations?lc=" + pfw__comm__func.language + "&cc=" + pfw__comm__func.country;
			var finalDocumentAnchors = [];
			$(pfw_documentAnchors).each(function(i) {
				var actualTaggedDom = $(this);
				var extendedUrl = $(this).attr('data-extendedUrl');
				var pfw_hasonlyHref = $(this).hasClass("pfw_onlyHref") ? true : false;
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
					    "cc": "us",
						"lc": "en",
						"targetCC":pfw__comm__func.language,
						"targetLC":pfw__comm__func.country,
						"docIDs": documentIdArray						
					};
					$.ajax({
						type: "POST",
						headers: {
							'Content-Type': 'application/json'
						},
						url: documentAPIURL,
						data: JSON.stringify(jsonData),
						success: function(data) {
							var currentLanguageIDJSON = data.data['documentIDMap'];
							var currentLanguageTitleJSON = data.data['documentTitleMap'];
							if(pfw_hasonlyHref){
								if (typeof currentLanguageIDJSON !== 'undefined') {
									//update path
									var docURL = "/"+ pfw__comm__func.country +"-"+ pfw__comm__func.language +"/document/"+currentLanguageIDJSON[documentId];
									documentAnchorDom.attr('href',docURL);									
								}
							}else{
								if (typeof currentLanguageIDJSON !== 'undefined') {
									//update path
									var docURL = "/"+ pfw__comm__func.country +"-"+ pfw__comm__func.language +"/document/"+currentLanguageIDJSON[documentId];									
									documentAnchorDom.attr('href',docURL);									
								}
								if (typeof currentLanguageTitleJSON !== 'undefined') {
									//update text
									if (documentAnchorDom.find(className).length !== 0) {
										documentAnchorDom = documentAnchorDom.find(className);
									}
									documentAnchorDom.text(currentLanguageTitleJSON[documentId]);
								}
							}
						}
					});
				}
			});
		},			 
        initialize: function() {			
			
			if(!patchActive){
				patchActive =  false;
				$('.patchLoader').addClass('hidden');					
			}
			
			if(!pfw__comm__func.Pfw_disabled()){
				
				/*************************************************************/
				/*     RDR-386 - Adobe Tag Addition- eDM SPOS Campaign       */
				/*************************************************************/
				
				if(pfw__comm__func.country == 'jp'){
					pfw__comm__func.waitForElement('body', function (elem) {
						$(elem).append('<!--adobe tag via optimizely--> <script src="//assets.adobedtm.com/f74d69706122cfe92e00ce6f73afb4d643504043/satelliteLib-49b5e1f40440dd6712c1542f95865fa1e3d7d953.js"></script><!--adobe tag-->');
						console.log('PFW - RDR 386 - Japan Adobe Tag Addition- eDM SPOS Campaign');			  
					}); 
				}
				
				
				
				/*************************************************************/
				/*         RDR-158 RDR-71 HPSA Mobile app promotion          */
				/*************************************************************/
				/*************************************************************/
				/*Remove HPSA banner on mobile for target DesignJet documents*/
				/*************************************************************/
				let docToExclude7620 = (function(){
					return !(window.location.href.indexOf("document/c08090473") != -1 || window.location.href.indexOf("/document/c08365853") != -1 || window.location.href.indexOf("/document/c08366572") != -1 || window.location.href.indexOf("/document/c08097612") != -1 || window.location.href.indexOf("/document/c08365826") != -1 
					|| window.location.href.indexOf("/document/ish_8481407-9433564-16") != -1
					|| window.location.href.indexOf("/document/ish_9018665-9433725-16") != -1
					|| window.location.href.indexOf("/document/ish_9018726-9009341-16") != -1
					|| window.location.href.indexOf("/document/ish_9011790-9009317-16") != -1
					|| window.location.href.indexOf("/document/ish_9012081-9009051-16") != -1
					|| window.location.href.indexOf("/document/ish_9450906-9346007-16") != -1
					|| window.location.href.indexOf("/document/ish_9450790-9346011-16") != -1
					|| window.location.href.indexOf("/document/ish_8481407-8474650-16") != -1
					);	

				})();
					
				let RDR71_Targeting = ['gb-en','sg-en','in-en','au-en','es-es','mx-es','us-en'].indexOf(pfw__comm__func.country+'-'+pfw__comm__func.language) >=0;
				//device type mobile
				if(RDR71_Targeting && pfw__comm__func.getDeviceType() == 'Mobile' &&   ( pfw__comm__func.getDeviceName() == 'macos' || pfw__comm__func.getDeviceName() == 'android') && docToExclude7620){				
					$('head').append('<script type="text/javascript" src="/content/dam/hp-wcc/microsite-assets/customlib/template/patchlib/rdr158n71.js"></script>');
				}	
				
				
			
								
				/*************************************************************/
				/*    RDR-621 Adding active experiment IDs to Global Data Layer		*/
				/*************************************************************/
				
				
				function addVariationIdsToGDL(experimentList) {	
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
                        if ( typeof optimizely !== 'undefined' ){				
							addVariationIdsToGDL(optimizely.get('state').getActiveExperimentIds());
							
						}
						window.setTimeout(pollExperimentList,1000);
					}
					})();
					
				});
					
				/*************************************************************/
				/*        SSVSPRT 10227 - header search bar code STARTS		 */
				/*************************************************************/
				
		
				function globalSearchImpl() {
					console.info("search function called");
					$(window).on("load", function () {
						$("head").append('<style type="text/css">#header .autocomplete-wrapper.main{display: none !important} .wpr-search-icon.wpr-icon-center{display: flex !important}</style>');
						var redirectionURL = window.location.protocol+"//"+window.location.hostname+"/"+pfw__comm__func.country + "-" + pfw__comm__func.language + "/search?q=",
						headerSearchPlaceholder = "Search HP Support";

						$(document).on("keydown", "#search_focus_desktop, #search_focus_mobile", function (elem) {
							var key = elem.which;
							$("a.wpr-search-icon-logo.search_trigger.link_metrics").prop("onkeydown", null).off("keydown");
							if (key == 13) {
								// the enter key code
								var value = this.id + "|" + pfw__comm__func.country + "-" + pfw__comm__func.language + "-" + window.globalDataLayer.Template;
								pfw__comm__func.adobeAnalyticsTracking("eVar37", value);
								if (this.value == null || (typeof this.value === "string" && this.value.trim().length === 0)) {
									setTimeout(() => {
										window.location.href = window.location.protocol+"//"+window.location.hostname+"/"+
										pfw__comm__func.country + "-" + pfw__comm__func.language + "/products";
									}, "10");
								} else {
									setTimeout(() => {
										window.location.href = redirectionURL + ampersandReplace(this.value);
									}, "10");
								}
							}
						});

						switch (pfw__comm__func.language) {
							case "en":
								headerSearchPlaceholder = "Search HP Support";
								break;
							case "fr":
								headerSearchPlaceholder = "Rechercher dans l'Assistance HP";
								break;
							case "de":
								headerSearchPlaceholder = "HP Support durchsuchen";
								break;
							case "nl":
								headerSearchPlaceholder = "Zoek in HP Klantenondersteuning";
								break;
							case "it":
								headerSearchPlaceholder = "Contattare l'Assistenza HP";
								break;
							case "ko":
								headerSearchPlaceholder = "HP 지원 검색";
								break;
							case "ru":
								headerSearchPlaceholder = "Поиск в материалах службы поддержки HP";
								break;
							case "es":
								headerSearchPlaceholder = "Buscar soporte de HP";
								break;
							case "sv":
								headerSearchPlaceholder = "Söka HP Support";
								break;
							case "ja":
								headerSearchPlaceholder = "HP サポートで検索";
								break;
							case "pt":
								headerSearchPlaceholder = "Pesquisar no Suporte HP";
								break;
							case "da":
								headerSearchPlaceholder = "Søg HP Support";
								break;
							case "fi":
								headerSearchPlaceholder = "Suorita haku HP-tuessa";
								break;
							case "ar":
								headerSearchPlaceholder = "بحث عن دعم HP";
								break;
							case "cs":
								headerSearchPlaceholder = "Vyhledávání podpory společnosti HP";
								break;
							case "el":
								headerSearchPlaceholder = "Αναζήτηση στην Υποστήριξη πελατών HP";
								break;
							case "he":
								headerSearchPlaceholder = "חיפוש בתמיכה של HP";
								break;
							case "hu":
								headerSearchPlaceholder = "A HP-támogatás keresése";
								break;
							case "th":
								headerSearchPlaceholder = "ค้นหาบริการลูกค้าของ HP";
								break;
							case "tr":
								headerSearchPlaceholder = "HP Destek'te Ara";
								break;
							case "pl":
								headerSearchPlaceholder = "Przeszukaj pomoc techniczną HP";
								break;
							case "no":
								headerSearchPlaceholder = "Søk i HP Support";
								break;
							case "uk":
								headerSearchPlaceholder = "Пошук служби підтримки HP";
								break;
							case "zh":
								if (pfw__comm__func.country == "cn") {
									headerSearchPlaceholder = "搜索 HP 支持";
								} else if (pfw__comm__func.country == "hk") {
									headerSearchPlaceholder = "搜尋 HP 支援";
								} else {
									headerSearchPlaceholder = "搜尋 HP 支援";
								}
								break;
							default:
								headerSearchPlaceholder = "Search HP Support";
						}

						pfw__comm__func.waitForElement(".wpr-search-icon .wpr-search-icon-logo", function (elem) {
							$(elem).click(function () {
								if (document.querySelector(".wpr-search-container").classList.contains("wpr-show")) {
									$(".wpr-search-container").css({ display: "none!important" });
								} else {
									$(".wpr-search-container").css({ display: "block!important" });
								}
								//$('.wpr-search-container').toggleClass('wpr-show');
							});
						});

						pfw__comm__func.waitForElement(".wps-mobile", function (elem) {
							pfw__comm__func.waitForElement("#search_focus_desktop", function (elem) {
								$("#hp-search").hide();
							});

							$("a.wpr-search-icon-logo.search_trigger.link_metrics").prop("onclick", null).off("click").attr("title", headerSearchPlaceholder);

							$(".wpr-search-icon-logo.search_trigger").on("click", function () {
								var searchValue = $("#search_focus_desktop").val().replace(/["&"]/g, "%26");
								var value = "search-icon-logo" + "|" + pfw__comm__func.country + "-" + pfw__comm__func.language + "-" + window.globalDataLayer.Template;
								pfw__comm__func.adobeAnalyticsTracking("eVar37", value);
								if (searchValue == null || (typeof searchValue === "string" && searchValue.trim().length === 0)) {
									setTimeout(() => {
										window.location.href = window.location.protocol+"//"+window.location.hostname+"/"+ pfw__comm__func.country + "-" + pfw__comm__func.language + "/products";
									}, "10");
								} else {
									setTimeout(() => {
										window.location.href = redirectionURL + searchValue;
									}, "10");
								}
							});

							$("#header .clear-search").on("click", function () {
								var value = "clear-search" + "|" + pfw__comm__func.country + "-" + pfw__comm__func.language + "-" + window.globalDataLayer.Template;
								pfw__comm__func.adobeAnalyticsTracking("eVar37", value);
								$("#search_focus_desktop, #search_focus_mobile").val("");
								$(".wps-header-wrapper").removeClass("autocomplete-main");
								$(this).css("display", "none");
							});

							$("#header .wpr-close-autocomplete").on("click", function () {
								var value = "wpr-close-autocomplete" + "|" + pfw__comm__func.country + "-" + pfw__comm__func.language + "-" + window.globalDataLayer.Template;
								pfw__comm__func.adobeAnalyticsTracking("eVar37", value);
							});

							$("#search_focus_desktop, #search_focus_mobile").attr("placeholder", headerSearchPlaceholder);
							$("#search_focus_desktop, #search_focus_mobile").attr("title", headerSearchPlaceholder);

							$(".search-display-none").eq(0).addClass("wpr-search-icon wpr-icon-center");
							$(".search-display-none").eq(1).addClass("Rectangle-426");
							$(".search-display-none").removeClass("search-display-none");
						});
					});
				}

				/*************************************************************/
				/*          SSVSPRT 10227 - header search bar code ENDS		*/
				/*************************************************************/
					
				/*************************************************************/
				/*                      Falcon specific code  				*/
				/*************************************************************/
				if($('app-root').length > 0){			
					
					/*************************************************************/
					/*        SSVSPRT 10227 - header search bar code STARTS		 */
					/*************************************************************/
						console.info("search bar AEM FALCON");
						globalSearchImpl();
					/*************************************************************/
					/*          SSVSPRT 10227 - header search bar code ENDS		*/
					/*************************************************************/
					
					/*************************************************************/
					/*          #459 close alert after 10 sec for falcon		*/
					/*************************************************************/
					if(localStorage.getItem("onLoadreadAlert")  === null){					
						pfw__comm__func.waitForElement('.notifications-main', function (elem) {
							setTimeout(function(){
	r-sdk').style.display != "none" ){
								$("#closeAlert")[0].click();
								setTimeout(function(){ $("#onetrust-banner-sdk").css({"visibility": "inherit", "opacity": "1", "display":"block"});}, 10);
								}
								else{
									$("#closeAlert")[0].click();
								}
							}, 10000);
						});
					}				
					
					
					
					/*************************************************************/
					/*       feedback button and form creation implementation  	*/
					/*************************************************************/
					
					$("head").append('<style type="text/css">.pfw_feedback_li{cursor:pointer;transform:rotate(90deg);width:42px} .pfw_feedback_link{text-decoration: none !important;border: 1px solid #ccc;color:#0171ad!important;padding:13px 20px!important;height:42px;display:inline-block!important;margin-bottom:0!important; white-space:nowrap!important; background:#f2f2f2; transform:rotate(180deg)} .pfw_feedback_li a:hover,.pfw_feedback_link a:hover{text-decoration:none}#psf[_ngcontent-app-root-c6] li[_ngcontent-app-root-c6] a.pfw_feedback_link[_ngcontent-app-root-c6]:focus{outline:#007bff auto;outline-offset:1px;text-decoration:none}@media only screen and (max-width:767px){#nebula_div_btn{display:block!important}.kampyle_button-text{transform:rotate(180deg);line-height:42px!important;font-size:16px!important;font-family:HPSimplifiedLight,"Open Sans",sans-serif!important}.kampyle_vertical_button.kampyle_right .kampyle_button{border:1px solid #ccc;margin-bottom:-1px;border-radius:0!important;-webkit-border-radius:0px!important;height:42px;min-height:42px!important;max-height:42px!important}}</style>');
					
					let feedbackBtnTextArray_pfw = {"en" :{ text :"Feedback"}, "ar" : { text :"ردود الفعل"}, "cs" : { text :"Zpětná vazba"}, "da" : { text :"Feedback"}, "de" : { text :"Feedback"}, "el" : { text :"Ανατροφοδότηση"}, "es" : { text :"Comentarios"}, "fi" : { text :"Palaute"}, "fr" : { text :"Avis"}, "he" : { text :"מָשׁוֹב"}, "hu" : { text :"Visszajelzés"}, "it" : { text :"Risposta"}, "ja" : { text :"フィードバック"}, "ko" : { text :"피드백"}, "nl" : { text :"Feedback"}, "nb" : { text :"Tilbakemelding"}, "pl" : { text :"Opinie"}, "pt" : { text :"Comentários"}, "br" : { text :"Comentários"}, "ro" : { text :"Părere"}, "ru" : { text :"Оставить отзыв"}, "sv" : { text :"Respons"}, "th" : { text :"ข้อเสนอแนะ"} , "tr" : { text :"Geri Bildirim"}, "cn" : { text :"反馈"}, "tw" : { text :"反饋"}, "hk" : { text :"反饋"}, "uk" : { text :"Відгук"}};
					
					
					var feedbackForm_pfw = 34025; 
					
					if(location.hostname.split('.')[0] === "support"){
						feedbackForm_pfw = 32024;
						if(pfw__comm__func.country+"-"+pfw__comm__func.language == "br-pt"){ feedbackForm_pfw = 33437;}
						if(pfw__comm__func.country+"-"+pfw__comm__func.language == "tw-zh"){ feedbackForm_pfw = 33454;}
						if(pfw__comm__func.country+"-"+pfw__comm__func.language == "hk-zh"){ feedbackForm_pfw = 33446;}
					}
					
					let feedbackBtnText_pfw = feedbackBtnTextArray_pfw.en.text; 
					if(pfw__comm__func.country == "cn" || pfw__comm__func.country == "tw" || pfw__comm__func.country == "hk"){
						feedbackBtnText_pfw = feedbackBtnTextArray_pfw[pfw__comm__func.country].text;
					}
					else{
						feedbackBtnText_pfw = feedbackBtnTextArray_pfw.hasOwnProperty(pfw__comm__func.language) ? feedbackBtnTextArray_pfw[pfw__comm__func.language].text : feedbackBtnTextArray_pfw.en.text;
					}
					
					let checkExistKampyle = setInterval(function() {
						if (typeof(KAMPYLE_ONSITE_SDK) != "undefined") {
							clearInterval(checkExistKampyle);
							KAMPYLE_ONSITE_SDK.loadForm(feedbackBtnText_pfw);
				back_li psf-feedback"><a tabindex="0" _ngcontent-app-ro	}, 500);
					
					$(document).on('click','#pfw_Feedback_form', function(){console.info('clicked form ');KAMPYLE_ONSument).on("keyup","#pfw_Feedback_form", function(event) { if (event.keyCode === 13) {KAMPYLE_ONSITE_SDK.showForm(feedbackForm_pfw);}});	

					/**hididng old feedback button as it is visible for br-pt**/
					pfw__comm__func.waitForElement('#header', function (elem) {$('#opt_custom_Feedback').hide();});
						
					if (pfw__comm__func.language == "ar" || pfw__comm__func.language == "he") {
						 $("head").append('<style type="text/css">.pfw_feedback_li{ transform: rotate(270deg) !important }</style>');
					}	
						
					if (pfw__comm__func.language == "zh") {
						   $("head").append('<style type="text/css">html[lang*="zh"] .pfw_feedback_link, html[lang="zh-CN"] .pfw_feedback_link {display: table !important; writing-mode: tb-rl; margin-bottom: -3px!important; padding: 11px!important; transform: rotate(270deg); text-orientation: upright; min-height: fit-content; min-height: moz-fit-content; width: inherit; }, html[lang*="zh"] .pfw_feedback_link, html[lang="zh-CN"] .pfw_feedback_link {display: table !important; writing-mode: tb-rl; margin-bottom: -3px!important; padding: 11px!important; transform: rotate(270deg); text-orientation: upright; min-height: fit-content; min-height: moz-fit-content; width: inherit; }</style>');
					}
					
					 
				}
				else{
					/*************************************************************/
					/*                     Non falcon code                       */
					/*************************************************************/	
					/*************************************************************/
					/*          SSVSPRT 10256 - header search bar code STARTS	 */
					/*************************************************************/
						let is_document_template_page = window.location.href.indexOf("/document/") != -1;
						if(is_document_template_page){
							console.info("search bar AEM Websphere");
							globalSearchImpl();
						}							
					/*************************************************************/
					/*          SSVSPRT 10256 - header search bar code ENDS		 */
					/*************************************************************/

					/*************************************************************/
					/*       #459 close alert after 10 sec for Non falcon	     */
					/*************************************************************/
					var runCloseAlert = true;
					pfw__comm__func.waitForElement('.notifications-bg', function (elem) {
						if(runCloseAlert){
							setTimeout(function(){ 
								runCloseAlert (elem).hasClass('viewed')) {
									setTimeout(function(){
									$('.notifications-bg.open').fadeOut();
									/* settimeout for removing class open so it doesnt appear again and show fadeout effect*/
									setTimeout(function(){
										$('.notifications-bg.open').removeClass('open'); }, 400);
								}, 10000);
								//console.log("#459 alert is hidden");
								}
							}, 400);
						}
					});     
					
					window.hpUtil = {};
					window.hpUtil.setCookie = function(cname, cvalue, exdays, cdomain, cpath) {
					  var c = [];
					  var d = new Date;
					  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1E3);
					  c.push(cname + "\x3d" + cvalue);
					  c.push("expires\x3d" + d.toUTCString());
					  c.
					  document.cookie = c.join(";");
					};
					
					 
				}
				
			}
			
			
			//remove loader after 5 sec - only to catch condition if element selector remove from page or some error
			setTimeout(function () {
				patchActive =  false;
				$('.patchLoader').addClass('hidden');
			}, 5000);
			
        }
s.id !== "") {
				pfw__comm__func.adobeAnalyticsTracking("eVar37", globalDataLayer.Template + "|pfw|" + this.id);
			}	
	});
	
    // modal to be closed when user hit escape key STARTS//
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$("#downloadModal").modal("hide");
	   }
	});       
    // modal to be closed when user hit escape key ENDS//	 
     pfw__comm__func.initialize();


 //});