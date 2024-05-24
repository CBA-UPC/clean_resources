var textMode = false;
var browseMode = false;
var browseMode1 = false;
var pastBrowseMode = false;
var pastTextMode = false;

function newspaperIsOpened(){
   var slideGlossyHTML = $('#slideGlossy').html();
   if(slideGlossyHTML!=""){
      return true;
   }

   return false;
}


function hybrid_openTextArtMode () {   
    if (pastTextMode) {    
        hybrid_openTextualMode();       
    } else if (pastBrowseMode) {
        art_closeTextArticle();
        exitZoomMode(); 
    }      
}


function hybrid_ta_enter(){
   ta_enter();
}

function hybrid_pl_enterVm(str){
   pl_enterVm(str);
}

function hybrid_applicationStarted(){
   applicationStarted();
}

function hybrid_cp_fifopushIndex(edition, b, c, d, e, f, g, h, i, j){
   //cp_fifopush(LOAD_INDEX,1,null, FIRST_EDITION, null,       pl_loadStartUpPage, null, null, null, 100)
   if(edition){
      cp_fifopush(LOAD_INDEX, b, c, d, e, f, g, h, i, null, j);
   }
   else{
      cp_fifopush(LOAD_INDEX, b, c, FIRST_EDITION, e, f, g, h, i, null, j);
   }
}


function hybrid_initializeGlobals(pSetup){
   initializeGlobals(pSetup);
}

function hybrid_fitPageWidthToggle1(){
	if(newspaperIsOpened()){
		xc_fitPageWidthToggle(1);   
	}else{
		hybrid_openOptionPage();
	}
	setCursorContSlide();
}





function hybrid_downloadAction(){
   downloadAction();
}

function hybrid_downloadActionInternal(){
   downloadActionInternal();
}

function hybrid_openOptionTab(tab,modal,h,hv,w,wv,x,xv,y,yv){
   openOptionenPage();
   //openOptionTab(tab,modal,h,hv,w,wv,x,xv,y,yv);
}
function hybrid_openOptions(){
   openOptions();
}

function hybrid_openPhotoDirectory(){
	if(currentNewspaper.newspaper.length == 0)return true;
	stclkGA("Open Photo Directory");
	$("#areaText").show();
	addRemoveClassClicked("thumbs");
	closeShareWin();
	$("#adsBottom").remove();
	$("#areaText").css("cursor","");
	$("#pullDown").hide();
	if(viewPullDownInPages == "1"){
		$("#pullDownViewInit").show();
		$("#pullDownViewInit").css("top","0px");
		$("#pullDownViewInit").css("float","right");
		$("#pullDownViewInit").css("right","70px");
		$("#pullDownViewInit").css("left","");
		$("#pullDownViewInit").css("border","0px");	
		$("#pullDownViewInit").css("backgroundColor","")	
		$("#pullDownViewInit").css("position","absolute");
	}
	if(newspaperIsOpened()){
		openPhotoDirectory();
	}else{
		if($("#areaSearch").width()>0){
		}else{
			hybrid_openOptionPage();
		}
	}
	$("#storeAction").hide();
	if(viewPullDownInPages == "1"){
		$("#slidePhodir").mouseover(function(event) {
			if(event.clientY > 50 && $("#pullDown").css("top") != "-30px"){
				pullDownOverOut = "out";
				scrollTo(document.getElementById("pullDown"), pixelUp, 600);
			}
		});
	}
	if (useSvgIcons == "1") {
		$("#cornerLeft ").css("display", "block");
		$("#thumbsAction").css("opacity","1.0");
		pullPageContent("35px","35px","35px");
	}
}

function hybrid_openTextualMode(){
	closearticlemagazine();
	$("#areaText").show();
	addRemoveClassClicked("view");
	if(newspaperIsOpened()){
		if(document.getElementById("Phodir")){
			closeAreaText();
		}
		if(magazineMode == "1" && magazineBrowse == "0" && ($("#areaText").width() == 0 || !$("#articlegraphic").width()) && $("#ebook_button").html() == viewArticle){
			openArticleFromDoublePage();
		}else{
			if(magazineMode == "1" && magazineBrowse == "0")$("#ebook_button").html(viewArticle);
			openTextualMode();
			renderblindDescription(labels.ebook_button);
		}
	}
}


function hybrid_openGraphicMode(){
   openGraphicMode();
}

function hybrid_epaperButtonClicked(){
   hybrid_fitPageWidthToggle();
}
function hybrid_epaperButtonClicked_fit(){
   epaperButtonClicked_fit();
}

function hybrid_openHelp(){
   openOptionHelpPage();
}

function hybrid_openHelpView(){
   openHelpView();
}

function hybrid_openOptionenPage(){ 
   openOptionenPage();
}

function hybrid_openSearchPage(){
   openSearchPage();
}

function hybrid_openArchivePage(){  
   //if(newspaperIsOpened()){
	if(localStorageX.getItem(udbDatabase+"_TAUID") || protectSite == "0" ){
		openSearchPage();
	}else{
		hybrid_openOptionPage();
	}
}

function hybrid_openSearchArchivePage(){
	addRemoveClassClicked("archiveSearchButtonImg_svg");
	var userIsLoggedIn = (localStorageX.getItem('TAUID') > 0 || cookie_get("TAUID") > 0) ? 1 : 0;
	if(userIsLoggedIn || protectSite == "0"){
		openSearchArchivePage();
	}else{
		alert(mustLoginFirst);
		openPageName("ipad_login.php");
	}
}


function hybrid_openStore(){
	pl_openStore();   
}

function hybrid_openOptionPage(){ 
	$(".noDate").remove();
	if(isMobile() && !blindMode && !$("#prepage").is(":visible")){
		$("#chooseOptMobile").show();
		$("#ulChooseOptMobile").css({
			'bottom': 0
		}).show("slow").delay(1500);
	}else{
		stclkGA("Open Editions page");
		openOptionPage();
	}
}

function hybrid_stopEvent(event){
   stopEvent(event);   
}

function hybrid_switchImageOn(img){
   //switchImageOn(img);   
}


function hybrid_console_dump(){
   su_console_dump();   
}

function hybrid_console_dump_xcFifoMsg(){
   su_console_dump_xcFifoMsg();   
}

function hybrid_fitPageWidthToggle(){
	setReadOrBrowse("browse");
	$("#imgNextZoomPage").remove();
	$("#imgPrevZoomPage").remove();
	if(!isMobile()){
		$("#graphicChangeModeAction").hide();
	}
	if(svg_tecnavia == 1){
		$("#indexArt").show();
		$("#browseArt").hide();
	}
	if(stopFuncToggle){
		stopFuncToggle = false;
	}else{
		if(newspaperIsOpened()){
			xc_fitPageWidthToggle(); 
			if (useSvgIcons == "1") {
				pullPageContent("35px","35px","35px");
			}
		}else{
			if($("#areaSearch").width()>0){
				
			}else{
				//console.log("browse 2");
				browseMode= true;
				textMode = false;
				browseMode1 = false;
				hybrid_openOptionPage();
			}
		} 
	}
}

function setReadOrBrowse(action){
	if(twoFingersTapToArticle == "1"){
		actionReadOrBrowse = action;		
		if(action == "read"){			
			setModeBrowse(true);
			pl_clearHighlightingBoxes(0);
			pl_clearHighlightingBoxes_MouseOver();
			stclkGA("changeclick");
			if($("#areaText").is(":visible")){
				art_closeTextArticle();
			}
			if(entryMaxPage){
				hybrid_fitPageWidthToggle1();
			}
			$("#read").addClass("svgSelected");
			$("#wheel").removeClass("svgSelected");
			$("#fullscreen").removeClass("svgSelected");
			$("#wheel_button").removeClass("svgSelected");
			$("#gbook_button").removeClass("svgSelected");
		}else if(action == "browse"){
			setModeBrowse(false);
			pl_clearHighlightingBoxes(0);
			pl_clearHighlightingBoxes_MouseOver();
			stclkGA("changeclick");
			$("#read").removeClass("svgSelected");
			$("#wheel").removeClass("svgSelected");
			$("#fullscreen").addClass("svgSelected");
			$("#wheel_button").removeClass("svgSelected");
			$("#gbook_button").addClass("svgSelected");
		}else if(action == "wheel"){	
			setModeBrowse(true);
			if($("#areaText").is(":visible")){
				//art_closeTextArticle();
			}
			if(!$("#areaText").is(":visible") && localStorageX.getItem("last_Id") == "0"){
				hybrid_openTextualMode();
			}
			if(entryMaxPage){
				hybrid_fitPageWidthToggle1();
			}
			pl_clearHighlightingBoxes(0);
			pl_clearHighlightingBoxes_MouseOver();
			stclkGA("changeclick");
			$("#read").removeClass("svgSelected");
			$("#fullscreen").removeClass("svgSelected");
			$("#wheel").addClass("svgSelected");
			$("#wheel_button").addClass("svgSelected");
			$("#gbook_button").removeClass("svgSelected");
			xc_fitPageWidthToggle();
		}
	}
}

function pullUpContent() {
    //$('#popupShareWin').css("top","35px");
    $("#slideFull").css("margin-top","0px");
    $("#slideArt").css("margin-top","0px");
    $("#contSlide").css("margin-top","0px");
    $("#pullDown").removeClass("pullDownStyle");
    $("#pullDown").addClass("pullDownTransparent");
}

function hybrid_msg_process(){
   xc_msg_process(null,null,null);   
}

function hybrid_ajax_process(){
   cp_ajax_process(null,null,null);   
}


function hybrid_purgeOldEditions(){
   if (isDebug == 1){
      db_purgeOldEditions();
   }
}

function hybrid_openGraphicMode(){
   openGraphicMode();   
}

function hybrid_art_closeTextArticle() {
   art_closeTextArticle();
}

function hybrid_articleScrollLeft() {
   articleScroll.left();
}

function hybrid_articleScrollUp() {
   articleScroll.up();
}


function hybrid_openShareWin() {
   openShareWin();
}

function hybrid_refresh_settings_variables(){
   xc_refresh_settings_variables();
}
function hybrid_xc_setNewspaperAndRead(par_pSetup, par_machine, par_issue, par_edition, par_paperName){
   pl_setNewspaperAndRead(par_pSetup, par_machine, par_issue, par_edition, par_paperName);
   return '0';
}

// erreci 

function hybrid_logout(){
	var expdate = new Date();
	expdate.setTime(expdate.getTime() - (86400 * 1000 * 2000));
	var keyValuePairs = document.cookie.split(';');
	for(var i = 0; i < keyValuePairs.length; i++) {
		var name = keyValuePairs[i].substring(0, keyValuePairs[i].indexOf('='));
		if(name.trim()!="MACHINEID")cookie_set(name.trim(),"",expdate,'/');
	}
	try{
	for(var key in localStorage) {
		if(key!="machineId" && key!=udbDatabase+"_machineId")localStorageX.removeItem(key);
	}
	}catch(e){}
	$("#areaPage").html("");
	$("#areaText").html("");
	if(typeof(APP_OPTIONS_SETTINGS_INI.myaccountslogout) != "undefined" && APP_OPTIONS_SETTINGS_INI.myaccountslogout.custom_url != ""){
		top.window.open(APP_OPTIONS_SETTINGS_INI.myaccountslogout.custom_url, '_self');
	}else{
		openPageName("ipad_login.php");
	}
}
