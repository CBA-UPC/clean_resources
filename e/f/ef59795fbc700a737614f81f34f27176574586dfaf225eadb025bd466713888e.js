var ta_lastClick=0;
var ta_lastPinch=1.0;


var ta_extraBar_status = {
   'share': false,
   'back': false,
   'up': false,
   'forward': false
};

var ta_extraBar2_status = {
   'fitpage': false,
   'phodir': false,
   'gmode': false
};

function ta_extraBar_share(active) {
   ta_extraBar_status['share'] = active;
   ta_extraBar_showHide(active, '#extra-button-share-disable', '#extra-button-share img');
}

function ta_extraBar_back(active) {
   ta_extraBar_status['back'] = active;
   ta_extraBar_showHide(active, '#extra-button-back-disable', '#extra-button-back img');
}

function ta_extraBar_up(active) {
   ta_extraBar_status['up'] = active;
   ta_extraBar_showHide(active, '#extra-button-up-disable', '#extra-button-up img');
}

function ta_extraBar_forward(active) {
   ta_extraBar_status['forward'] = active;
   ta_extraBar_showHide(active,'#extra-button-forward-disable', '#extra-button-forward img');
}

function ta_extraBar_fitpage(active) {
   ta_extraBar2_status['fitpage'] = active;
   ta_extraBar2_showHide(active,'#extra-button-fitpage-disable', '.extra-button-fitpage img');
}

function ta_extraBar_phodir(active) {
   ta_extraBar2_status['phodir'] = active;
   ta_extraBar2_showHide(active,'#extra-button-phodir-disable', '.extra-button-phodir img');
}

function ta_extraBar_gmode(active) {
   ta_extraBar2_status['gmode'] = active;
   ta_extraBar2_showHide(active,'#extra-button-gmode-disable', '.extra-button-gmode img');
}

function ta_extraBar2_showHide(active, disableQuery, buttonQuery) {
   if (enableHideButtonsInMainBar == '1') {
      ta_extraBar_showHide(active, disableQuery, buttonQuery);
   }
}

function ta_extraBar_showHide(active, disableQuery, buttonQuery) {
   try {
      if (active) {
         $(disableQuery).width(0);
         $(disableQuery).height(0);
      } else {
         var p = $(buttonQuery).position();
			 if(typeof p != "undefined"){
	         $(disableQuery).css('top', (p.top));
	         $(disableQuery).css('left', (p.left + 4));
	         $(disableQuery).width($(buttonQuery).width());
	         $(disableQuery).height($(buttonQuery).height());
	      }
      }
   } catch (e) {}
}

function ta_extraBar_update() {
   try {
      for (var type in ta_extraBar_status) {
         if (ta_extraBar_status.hasOwnProperty(type)) {
            ta_extraBar_showHide(ta_extraBar_status[type],'#extra-button-' + type + '-disable', '#extra-button-' + type + ' img');
         }
      }

      for (var type in ta_extraBar2_status) {
         if (ta_extraBar2_status.hasOwnProperty(type)) {
            ta_extraBar2_showHide(ta_extraBar2_status[type],'#extra-button-' + type + '-disable', '.extra-button-' + type + ' img');
         }
      }
   } catch (e) {}
}


// Specify if the scrolling-up has been already performed; it is used by iScroll.js to decide if scroll or not
var scrollUpPerformed = false;

function ta_articleScrollUp(pageIdcn){
	if(articleOpenedInPopup == 1 && $('#articlemagazine').is(":visible")){
		closearticlemagazine();
		return true;
	}
    if(svg_tecnavia == 1)$("#shareButtonsSvg").hide();
	if($("#titles").attr("fromArchive") && $("#titles").attr("fromArchive") != "" && isMobile()){
		$("#areaSearch").show();
		return true;
	}
	if(dragging){
		return;
	}
	var xmlidSel = $("#titles").attr("xmlid");
	var pageidSel = $("#titles").attr("pageid");
	closeShareWin();
	if($("#adsBottom").lenght > 0)removeAdsBottom();
	lastAction = "ta_articleScrollUp";
	lastArticle = "";
	if(magazineMode == "1" && urlIndexExist[currentNewspaper.getIssue()+currentNewspaper.edition]){
		hybrid_openTextualMode();
		return true;
	}
	if(document.getElementById("upModeActionPhone")){
		document.getElementById("upModeActionPhone").style.opacity = 1;
		document.getElementById("upModeActionPhone").style.pointerEvents  = "";
		document.getElementById("backModeActionPhone").style.opacity = 1;
		document.getElementById("backModeActionPhone").style.pointerEvents  = "";
		document.getElementById("forwardModeActionPhone").style.opacity = 1;
		document.getElementById("forwardModeActionPhone").style.pointerEvents  = "";
		document.getElementById("downloadAction2Phone").style.opacity = .3;
		document.getElementById("downloadAction2Phone").style.pointerEvents  = "none";
	}
	if(!$("#articletext").height() && isIphone && !pageIdcn){
		ta_loadFirstIndex(localGetValues('last_issue'));
	}else{
		switch (custom_template_style){
			case "_1":
				ta_articleScrollUp_1(pageIdcn);
				break;
			case "_2":
				ta_articleScrollUp_1(pageIdcn);
				break;
			default:
				ta_articleScrollUp_std(pageIdcn);
				break;
		}
		// Scroll has been performed by previous code
		scrollUpPerformed = true;
	}
	if(typeof(pageidSel)!="undefined" && typeof(xmlidSel)!="undefined" && xmlidSel != ""){
		
	}else{
		pl_scrollToPage(pageIdcn);
	}
	manageAdsPage(parseInt(localGetValues('last_Id'), 10),"");
	renderblindDescription(subIndex+currentNewspaper.newspaper[parseInt(localGetValues('last_Id'), 10)].section);
	if(typeof(event)!="undefined"){
		event.preventDefault();
		event.stopPropagation();
	}
}

function ta_articleScrollUp_std(pageIdcn) {
	if((enableDebugConsole == '1') && console) { console.log("[textarea.ta_articleScrollUp_std] Starting pageIdcn: " + pageIdcn); }
	xc_closeGraphicArticle();
	try {		
		$('#extra-button-share').show();		
		$('#extra-button-more').hide();
	} catch (e) {}
	ta_extraBar_share(false);
	ta_extraBar_back(true);
	ta_extraBar_up(true);
	ta_extraBar_forward(true);
	var pageId = null;
	if (pageIdcn) {
		pageId = pageIdcn;
	} else {
		pageId = $('#titles').attr('pageid');
	}
	var curPageId = art_getPageindexFromPageId(pageId);
	var getPages = new Array();
	var pageWord = 'Pag.';
	if(typeof(labels['pageWord'])!="undefined" && labels['pageWord']!=""){
		pageWord = labels['pageWord'];
	}	
	if (tocStyle == "all_art") {
		for(var i = 0; i < currentNewspaper.newspaper.length; i++) {
			if (currentNewspaper.newspaper[i]['page'] == currentNewspaper.newspaper[curPageId]['page']) {
				getPages[getPages.length]=i;
			}
		}
	} else {
		for(var i = 0; i < currentNewspaper.newspaper.length; i++) {
			if (currentNewspaper.newspaper[i]['section'] == currentNewspaper.newspaper[curPageId]['section']) {
				getPages[getPages.length]=i;
			}
		}
	}
	var headerDivWidth = parseInt(objAreaText.style.width,10);
	var toWrite = '<div style="width:'+headerDivWidth+'px;">'
		+ ta_getHeader(articleHeder);
	if(isIphone)  var toWrite = '<div style="width:'+headerDivWidth+'px;">';
	if(!isIphone){
		toWrite +='<div style="clear:both;"></div>'
			+ '<hr class="headerBar" />';
	}
	if(browser_prefix === "-moz"){
		toWrite += '<div ontouchstart="highlightSelectedItemTitle(this, \'-moz-linear-gradient (left, #8186A6, #656C9E, #494F91, #494F91)\')" class="areatext-topbar" myonclick="articleScroll.up();">';
	}else if(browser_prefix === "-ms"){
		toWrite += '<div ontouchstart="highlightSelectedItemTitle(this, \'progid:DXImageTransform.Microsoft.gradient(startColorstr=#8186A6, endColorstr=#494F91)\')" class="areatext-topbar" myonclick="articleScroll.up();">';
	}else{
		toWrite += '<div ontouchstart="highlightSelectedItemTitle(this, \'-webkit-gradient(linear,left top,left bottom,color-stop(0%,#8186A6),color-stop(33%,#656C9E),color-stop(67%,#494F91),color-stop(100%,#494F91))\')" class="areatext-topbar" myonclick="articleScroll.up();">';
	}
	toWrite += '<div style="position: absolute;"><img class="toc-back-arrow" src="'+iconBackArrow+'" /></div>';
	toWrite += '<div style="float:right;"><a class="pagerefart toc-close-button" style="float:right;" href="javascript:'+OBJNAME('art_closeTextArticle')+'();"><img src="'+iconClose+'" /></a></div>';
	// Addition of cutter button but with visibility hidden to "fix arrows position"
	toWrite += '<div style="visibility: hidden; float:right;"><a class="pagerefart toc-graph-button" style="float:right;" href="javascript:'+OBJNAME('changeArticleMode')+'();"><img src="'+iconImmagine+'" id="graphicbutton" /></a></div>'
	toWrite += '<div style="float:left;" class="areatext-title" myonclick="articleScroll.up();">' + util_htmlEncode(currentNewspaper.newspaper[curPageId]['section']) + '</div>';
	// Article navigation arrows
	if(!isIphone){
		toWrite += '<div style="float:right;"><a class="pagerefart toc-graph-button" style="float:right;margin-top: 10px;" href="javascript:'+OBJNAME('ta_articleScrollPrevNext')+'(1);"><img src="'+versionUrl+'/hybrid/buttons/iphone/safari-bar-forward.png" /></a></div>';
		toWrite += '<div style="float:right;"><a class="pagerefart toc-graph-button" style="float:right;margin-top: 10px;" href="javascript:'+OBJNAME('ta_loadFirstIndex')+'('+currentNewspaper.getIssue() + ');"><img src="'+versionUrl+'/hybrid/buttons/iphone/safari-bar-up.png" /></a></div>';
		toWrite += '<div style="float:right;"><a class="pagerefart toc-graph-button" style="float:right;margin-top: 10px;" href="javascript:'+OBJNAME('ta_articleScrollPrevNext')+'(-1);"><img src="'+versionUrl+'/hybrid/buttons/iphone/safari-bar-back.png" /></a></div>';
	}
	toWrite += '<div style="clear: both;"></div></div>';
	//todo: convert to div?
	toWrite += '<div style="padding: 3px; height:100%;">';
	for (var i=0;i<getPages.length;i++) {
		var row = currentNewspaper.newspaper[getPages[i]];
		var objid = 'ulpag'+row['pageId'];
		toWrite += '<div class="section-wrap">';
		var labPage = row['page'];
		if(row['page'])labPage = row['shownpage'].replace(/\./,"");
		toWrite += '<div ontouchstart="highlightSelectedItem(this, highlightSelectedItemColor);" class="section-page-wrap" myonclick="'+OBJNAME('pl_scrollToPage')+'('+row['pageId']+');'+OBJNAME('art_closeTextArticle')+'();">';
		toWrite += '<a class="pageref" myonclick="'+OBJNAME('pl_scrollToPage')+'('+row['pageId']+');'+OBJNAME('art_closeTextArticle')+'();">'+ pageWord + labPage+'</a>';
		toWrite += '</div>'
		toWrite += '<div class="pagetitles" id="'+objid+'">...</div>';
		toWrite += '</div>';
		cp_fifopush(LOAD_ART  ,row['pageId'],currentNewspaper.issue,row['filename'],null,art_printPageArticles,row['pageId'],objid,null, null,70);
	}
	toWrite += '</div>' + '</div>';
	$('#titles').html(art_addPaddingDiv(toWrite,"padding: 3px; z-index:2;"));
	$('#titles').attr('pageid',row['pageId']);
	$('#titles').attr('type',row['type']);
	$('#titles').attr('xmlid','');
	art_refreshAreaText();
	if(articleScroll){
		articleScroll.setHScrollMode(true);
		articleScroll.up = function () {
			ta_loadFirstIndex(currentNewspaper.getIssue());
		}
	}
	if (getPages.length>0) setTimeout(OBJNAME('pl_alignPageToArticle')+'('+pageId+',null)',100);
	try {
		if(browser_prefix === "-moz"){
			document.getElementById('slideArt').style.MozTransform = ' translate(0px,0px)';
		}else if(browser_prefix === "-ms"){
			document.getElementById('slideArt').style.msTransform = ' translate(0px,0px)';
		}else{
			document.getElementById('slideArt').style.webkitTransform = ' translate3d(0px,0px,0)';
		}
	} catch (e) {
	// Nothing
	}
}

function ta_isEditorialArticle(row) {
	var  ret = false;
	for (var k in row.typelist) {
		if (row.typelist.hasOwnProperty(k)) {
			if(row.typelist[k] == "Editorial"){
				ret = true;
				break;
			}
		}
	}
	return ret;
}

function ta_articleScrollUp_1(pageIdcn) {
	if((enableDebugConsole == '1') && console) { console.log("[textarea.ta_articleScrollUp_1] Starting pageIdcn: " + pageIdcn); }
	var pageId = null;
	if (pageIdcn) {
		pageId = pageIdcn;
	} else {
		pageId = $('#titles').attr('pageid');
	}
	clicckedTab = true;
	ta_enter();
	adAdsBottom();
	clicckedTab = false;
	var curPageId = art_getPageindexFromPageId(pageId);
	var curSectionPageId = currentNewspaper.newspaper[curPageId]['section'];
	var getPages = new Array();
	var pageWord = 'Pag.';
	if(typeof(labels['pageWord'])!="undefined" && labels['pageWord']!=""){
		pageWord = labels['pageWord'];
	}
	if (tocStyle == "all_art") {
		for(var i = 0; i < currentNewspaper.newspaper.length; i++) {
			if (currentNewspaper.newspaper[i]['section'] == curSectionPageId) {
				getPages[getPages.length]=i;
			}
		}
	} else {
		for(var i = 0; i < currentNewspaper.newspaper.length; i++) {
			if (currentNewspaper.newspaper[i]['section'] == curSectionPageId) {
				getPages[getPages.length]=i;
			}else{
				if(arabView!="1" && getPages.length > 0){
					//break;
				}
			}
		}
	}
	if(seeNewspaperPreview == "1"){
		getPages.pop();
	}

	var toWrite = "";	
	// Article navigation arrows
	if(isIphone)$("#upModeActionPhone").attr("href",'javascript:ta_loadFirstIndex('+currentNewspaper.getIssue()+');');

	if(isIphone &&  !is_android_native && !blindMode)toWrite += '<div style="text-align: right;"><a class="pagerefart" style="float: right; margin-right: 5px;" href="javascript:art_closeTextArticle();"><img src="'+iconClose+'" border="0" style="float: right; margin-right: 10px;" id="graphicbutton" /></a></div>'
	else if(is_android_native && !blindMode)toWrite += '<div style="text-align: right;"><a class="pagerefart" style="float: right; margin-right: 5px;" onclick="art_closeTextArticle();" ><img src="'+iconClose+'" border="0" style="float: right; margin-right: 10px;" id="graphicbutton" /></a></div>'
	toWrite += '<div class="toc-top-header">'+articleHeder + '</div><hr class="headerBar" /><div id="id_above_index" style="display:none"></div><div style="padding: 3px;">';
	if(blindMode){
		var curSection = currentNewspaper.newspaper[curPageId]['section'];
		var foundSection = null;
		var getSection = [];
		if (tocStyle == "all_art") {
			getSection = ta_getAllPagesList();
		} else {
			getSection = ta_getSectionList();
		}
		for (var i=0;foundSection===null && i<getSection.length;i++) {
			if (tocStyle == "all_art") {
				if (curPage == getSection[i]['page']) {
					foundSection = i;
				}
			} else {
				if (curSection == getSection[i]['section']) {
					foundSection = i;
				}
			}
		}
		var prevSection = "";
		var nextSection = "";
		if (foundSection === null) {
			su_console('E','TA ERROR : Cannot find current Section ta_sectionScrollPrevNext ' + curSection);
		} else {
			if(getSection[foundSection-1])prevSection = getSection[foundSection-1]['section'];
			if(getSection[foundSection+1])nextSection = getSection[foundSection+1]['section'];
		}
		//toWrite += '<a class="section-page-wrap pageref" style="width:100%;float:left;" href="javascript:art_closeTextArticle();"><span style="float: left;">&nbsp;</span>CLOSE<span style="float: right;">&nbsp;</span></a>'
		toWrite += '<a class="toc-section-page-wrap titleSection" style="width:100%;float:left;color: #4c4cbb;margin-top:0px !important;" href="javascript:hybrid_openTextualMode();"><span style="float: left;">&nbsp;</span>'+returnMainIndexAccesibility+'<span style="float: right;">&nbsp;</span></a>';
		if(prevSection != "")toWrite += '<a class="toc-section-page-wrap titleSection" style="width:100%;float:left;color: #4c4cbb;margin-top:0px !important;" href="javascript:ta_articleScrollPrevNext(-1);"><span style="float: left;">&nbsp;</span>'+goToPreviusSectionAccesibility+', '+prevSection+'<span style="float: right;">&nbsp;</span></a>';
		if(nextSection != "")toWrite += '<a class="toc-section-page-wrap titleSection" style="width:100%;float:left;color: #4c4cbb;margin-top:0px !important;" href="javascript:ta_articleScrollPrevNext(1);"><span style="float: left;">&nbsp;</span>'+goToNextSectionAccesibility+', '+nextSection+'<span style="float: right;">&nbsp;</span></a>';
	}else if(!isIphone){
        if (useSvgIcons == "1") {
            toWrite += '<div id="articleToolbarDiv" style="padding: 3px;">';
            // Addition of cutter button but with visibility hidden to "fix arrows position"
            toWrite += '<div style="text-align: right;"><div class="pagerefart" style="float: right; margin-right: 5px;padding-top:2px" onclick="javascript:art_closeTextArticle();"><object id="graphicbutton" width="30px" height="30px" data="'+iconClose+'" style="float: right; margin-right: 10px;"></object></div></div>'
            toWrite += '<div style="visibility: hidden;float:right;"><div class="pagerefart toc-graph-button" style="float:right;" onclick="javascript:'+OBJNAME('changeArticleMode')+'();"><object id="graphicbutton" width="30px" height="30px" data="'+iconImmagine+'"></object></div></div>'
            toWrite += '<div style="float:right;"><div class="pagerefart toc-graph-button" style="float:right;" onclick="javascript:'+OBJNAME('ta_articleScrollPrevNext')+'(1);"><object width="30px" height="30px" data="'+iconNext+'"></object></div></div>';
            toWrite += '<div style="float:right;"><div class="pagerefart toc-graph-button" style="float:right;" onclick="javascript:'+OBJNAME('ta_loadFirstIndex')+'('+currentNewspaper.getIssue() + ');"><object width="30px" height="30px" data="'+iconUp+'"></object></div></div>';
            toWrite += '<div style="float:right;"><div class="pagerefart toc-graph-button" style="float:right;" onclick="javascript:'+OBJNAME('ta_articleScrollPrevNext')+'(-1);"><object width="30px" height="30px" data="'+iconPrev+'"></object></div></div>';
            toWrite += '</div>';
        } else {
			toWrite += '<div id="articleToolbarDiv" style="padding: 3px;">';
			// Addition of cutter button but with visibility hidden to "fix arrows position"
			toWrite += '<div style="text-align: right;"><a class="pagerefart" style="float: right; margin-right: 5px;" href="javascript:art_closeTextArticle();"><img src="'+iconClose+'" border="0" style="float: right; margin-right: 10px;" id="graphicbutton" /></a></div>'
			if(!is_iOS && !is_Android){
				toWrite += '<div style="visibility: hidden; float:right;"><a class="pagerefart toc-graph-button" style="float:right;" href="javascript:'+OBJNAME('changeArticleMode')+'();"><img src="'+iconImmagine+'" id="graphicbutton" /></a></div>'
				toWrite += '<div style="visibility: hidden; float:right;"><a class="pagerefart toc-graph-button" style="float:right;" href="javascript:'+OBJNAME('changeArticleMode')+'();"><img src="'+iconImmagine+'" id="graphicbutton" /></a></div>'
				toWrite += '<div style="visibility: hidden; float:right;"><a class="pagerefart toc-graph-button" style="float:right;" href="javascript:'+OBJNAME('changeArticleMode')+'();"><img src="'+iconImmagine+'" id="graphicbutton" /></a></div>'
				toWrite += '<div style="visibility: hidden; float:right;"><a class="pagerefart toc-graph-button" style="float:right;" href="javascript:'+OBJNAME('changeArticleMode')+'();"><img src="'+iconImmagine+'" id="graphicbutton" /></a></div>'
				toWrite += '<div style="visibility: hidden; float:right;"><a class="pagerefart toc-graph-button" style="float:right;" href="javascript:'+OBJNAME('changeArticleMode')+'();"><img src="'+iconImmagine+'" id="graphicbutton" /></a></div>'
			}
			toWrite += '<div style="visibility: hidden; float:right;"><a class="pagerefart toc-graph-button" style="float:right;" href="javascript:'+OBJNAME('changeArticleMode')+'();"><img src="'+iconImmagine+'" id="graphicbutton" /></a></div>'
			toWrite += '<div style="visibility: hidden; float:right;"><a class="pagerefart toc-graph-button" style="float:right;" href="javascript:'+OBJNAME('changeArticleMode')+'();"><img src="'+iconImmagine+'" id="graphicbutton" /></a></div>'
			toWrite += '<div style="visibility: hidden; float:right;"><a class="pagerefart toc-graph-button" style="float:right;" href="javascript:'+OBJNAME('changeArticleMode')+'();"><img src="'+iconImmagine+'" id="graphicbutton" /></a></div>'
			toWrite += '<div style="float:right;"><a class="pagerefart toc-graph-button" style="float:right;" href="javascript:'+OBJNAME('ta_articleScrollPrevNext')+'(1);"><img src="'+iconNext+'" /></a></div>';
			toWrite += '<div style="float:right;"><a class="pagerefart toc-graph-button" style="float:right;" href="javascript:'+OBJNAME('ta_loadFirstIndex')+'('+currentNewspaper.getIssue() + ');"><img src="'+iconUp+'" /></a></div>';
			toWrite += '<div style="float:right;"><a class="pagerefart toc-graph-button" style="float:right;" href="javascript:'+OBJNAME('ta_articleScrollPrevNext')+'(-1);"><img src="'+iconPrev+'" /></a></div>';
			toWrite += '</div>';
        }
	}
	toWrite += '</div>';
   
	toWrite += '<hr style="width:100%;float:left;">';
	if (tocStyle == "all_art") {
		toWrite += '';
	} else {
		toWrite += '<h1 class="h1titlepage">'+ $("<div/>").html(currentNewspaper.newspaper[curPageId]['section']).text() + '</h1>';
	}
	//todo: convert to div?
	
	if(arabView=="1"){
		toWrite += '<ul style="direction:rtl;">';
	}else{
		toWrite += '<ul>';
	}
	if(arabView=="1"){
		getPages.reverse();
	}
	var notAdvert = true;
	for (var i=0;i<getPages.length;i++) {
		var row = currentNewspaper.newspaper[getPages[i]];
		if ( notAdvert && row['title'] != 'Advertisement' && ta_isEditorialArticle(row) ){
			pageId = row['pageId'];
			notAdvert = false;
		}
		var objid = 'ulpag'+row['pageId'];
		toWrite += '<li style="float: left;width: 100%;">';
		var labPage = row['page'].replace(/([A-Za-z]{0,1})[0]*([1-9]+[0-9]*)/, "$1$2");
		if(row['shownpage'] && row['page']!=row['shownpage']){
			labPage = row['shownpage'].replace(/\./,"");
		}
		toWrite += '<div class="section-page-wrap">';
		toWrite += '<a class="pageref" href="javascript:'+OBJNAME('pl_scrollToPage')+'('+row['pageId']+');"> '+ pageWord + labPage+'</a>';
		toWrite += '</div>';
		if(showImgIndex == "1"){
			var srcImgIndex = serverCDN + setSoftwareBaseCDN + "ajax-request.php?action=loadImage&type=low&pSetup=" + getPSetupImage(pSetup) + "&issue=" + currentNewspaper.getIssue() + "&crc=" + row.filename + "&edition=" + currentNewspaper.edition;
			srcImgIndex = updateQueryStringParameter(srcImgIndex,'verCdn',verCdn);
			if(archiveDate && archiveDate > 2){
				if(row.filename.indexOf("../..")>=0){
					filenameUse = row.filename.replace("../..","");
					filenameUse = filenameUse.replace(currentNewspaper.getIssue(),currentNewspaper.getIssue().substr(0,4) + "/" + currentNewspaper.getIssue().substr(4,6).substr(0,2) + "/" + currentNewspaper.getIssue());
					srcImgIndex = "//" + eval("archBaseDomain"+(archiveDate - 2)) + eval("archBaseUrl"+(archiveDate - 2)) + "/" + filenameUse + "/text.gif";
				}else{
					srcImgIndex = "ajax-request.php?action=loadImage&type=text&pSetup=" + getPSetupImage(pSetup) + "&issue=" + currentNewspaper.getIssue() + "&crc=" + row.filename + "&edition=" + currentNewspaper.edition;
					srcImgIndex = "//" + eval("archBaseDomain"+(archiveDate - 2)) + "/eebrowser/ipad/" + verArchive + "/"+ srcImgIndex;
				}
			}else{
				srcImgIndex += "&mtime="+currentNewspaper.newspaper[curPageId].mtime;
			}
			toWrite += '<div class=\"divImgIndexSection\"><img class=\"imgIndexSection\" src=\"'+srcImgIndex+'\"></div>';
		}		
		toWrite += '<ul class="pagetitles" id="'+objid+'"><li>...</li></ul>';
		toWrite += '</li>';
	}
	su_console('D','Printing index of section:'+ currentNewspaper.newspaper[curPageId]['section'] + ' for ' + getPages.length + ' pages');
	$('#titles').html(art_addPaddingDiv(toWrite,"padding: 3px; z-index:2;"));
	returnNoticesType("above_index","id_above_index");
	refreshAdAboveIndex();
	$('#titles').attr('pageid',row['pageId']);
	$('#titles').attr('type',row['type']);
	$('#titles').attr('xmlid','');
	for (var i=0;i<getPages.length;i++) {
		var row = currentNewspaper.newspaper[getPages[i]];
		var objid = 'ulpag'+row['pageId'];
		art_printPageArticles(row,row['pageId'],objid);	
	}
	$('#areaText').unbind();
	$('#areaText').on('touchstart', ;
	$('#areaText').on('touchend', function(e) {
		dragging = false;
		var endTouchSlideArtX = e.originalEvent.changedTouches[0].clientX;
		var endTouchSlideArtY = e.originalEvent.changedTouches[0].clientY;
		if(startTouchSlideArtX && startTouchSlideArtY){
			if((endTouchSlideArtY>startTouchSlideArtY && endTouchSlideArtY<(startTouchSlideArtY+50)) ||
			(endTouchSlideArtY<startTouchSlideArtY && endTouchSlideArtY>(startTouchSlideArtY-50))){
				if(startTouchSlideArtX>(endTouchSlideArtX+100)){				
					ta_articleScrollPrevNext(1);				
				}else if(startTouchSlideArtX<(endTouchSlideArtX-100)){				
					ta_articleScrollPrevNext(-1);
				}
			}
		}
		startTouchSlideArtX = false;
		startTouchSlideArtY = false;
	});
	setIScrollArticle();
	art_refreshAreaText();
	if(articleScroll){
		articleScroll.setHScrollMode(true);
		articleScroll.up = function () {
			ta_loadFirstIndex(currentNewspaper.getIssue());
		}
	}
	//if (getPages.length>0) setTimeout(OBJNAME('pl_alignPageToArticle')+'('+pageId+',null)',100);
	try {
		if(browser_prefix === "-moz"){
			document.getElementById('slideArt').style.MozTransform = 'translate(0px,0px)';
		}else if(browser_prefix === "-ms"){
			document.getElementById('slideArt').style.msTransform = 'translate(0px,0px)';
		}else{
			document.getElementById('slideArt').style.webkitTransform = 'translate3d(0px,0px,0)';
		}
	} catch (e) {
		// Nothing
	}
	if($("#areaText").width()<600){
		$(".toc-graph-button").css("padding","0px 5px 10px 5px");
	}
	// Scroll has been performed by previous code
	scrollUpPerformed = true;
	showFitBottom();
}

function ta_sectionScrollPrevNext(prevnext) { // todo
   var pageId = $('#titles').attr('pageid');
	if(arabView=="1"){
		if(prevnext == -1){
			prevnext = 1;
		}else if(prevnext == 1){
			prevnext = -1;
		}
	}
   if (pageId == null || pageId =='undefined') {
      return;
   }
   pageId = parseInt(pageId,10);
   var curPageId = art_getPageindexFromPageId(pageId);
   var curSection = currentNewspaper.newspaper[curPageId]['section'];
   var curPage = currentNewspaper.newspaper[curPageId]['page'];

   // build section list
   var foundSection = null;
   var getSection = [];

   //if (ta_tocView == "all_page") {
   if (tocStyle == "all_art") {
      getSection = ta_getAllPagesList();
   } else {
      getSection = ta_getSectionList();
   }

   for (var i=0;foundSection===null && i<getSection.length;i++) {
      //if (ta_tocView == "all_page") {
      if (tocStyle == "all_art") {
         if (curPage == getSection[i]['page']) {
            foundSection = i;
         }
      } else {
         if (curSection == getSection[i]['section']) {
            foundSection = i;
         }
      }
   }
   if (foundSection === null) {
      su_console('E','TA ERROR : Cannot find current Section ta_sectionScrollPrevNext ' + curSection);
   } else {
      if (prevnext > 0) {
         foundSection ++;
      } else {
         foundSection --;
      }
      foundSection = Math.max(0,Math.min(getSection.length - 1,foundSection));
      su_console('D','Prev Next Section ' + prevnext + ' Section ' + foundSection + ' ' + getSection[foundSection]['pageId'] + ' ' + getSection[foundSection]['section']);
      ta_articleScrollUp(getSection[foundSection]['pageId']);
   }
}

function ta_getSectionList() {
   var getSection = new Array();
	if(arabView=="1"){
		currentNewspaper.newspaper.reverse();
	}
   for(var i = 0; i < currentNewspaper.newspaper.length; i++) {
      var found = false;
      for (var j=0;!found && j<getSection.length;j++) {
         if (currentNewspaper.newspaper[i]['section'] == getSection[j]['section']) {
            // First time j is 0... and below if will be true for two times and so first section will be duplicated...
            found = true; 
         }
      }
      if (!found) {
         var insert = getSection.length;
         getSection[insert] = new Array();
         getSection[insert]['section'] = currentNewspaper.newspaper[i]['section'];
         getSection[insert]['pageId'] = currentNewspaper.newspaper[i]['pageId'];
         getSection[insert]['filename'] = currentNewspaper.newspaper[i]['filename'];
         found = insert;
      }
   }
	if(arabView=="1"){
		currentNewspaper.newspaper.reverse();
	}
   return getSection;
}

function ta_getAllPagesList() {
   var getSection = new Array();
   for(var i = 0; i < currentNewspaper.newspaper.length; i++) {
      getSection.push(currentNewspaper.newspaper[i]);
   }
   return getSection;
}

function ta_articleScrollPrevNext(prevnext) {
	if($("#titles").attr("fromArchive") && $("#titles").attr("fromArchive") != ""){
		$('#searchIFrame')[0].contentWindow.openNextPrevArticle(prevnext);
		return;
	}
	var pageId = $('#titles').attr('pageid');
	var type = $('#titles').attr('type');
	if(lastTypeArt == "Editorial")type="Editorial";
	else type = "";
	var xmlId = $('#titles').attr('xmlid');
	if(typeof xmlId == "undefined" && localGetValues('last_artid')){
		xmlId = localGetValues('last_artid');
	}
	if(typeof pageId == "undefined" && localGetValues('last_pageId')){
		pageId = localGetValues('last_pageId');
	}
	lastArticle = "";
	su_console('D','Article Scroll '+ prevnext + ' pageId:'+pageId + ' xmlid:'+xmlId );
	if (isNaN(xmlId) || pageId === null || xmlId === null || xmlId == '' || pageId =='undefined') {
		if (pageId) { // I am looking at a section
			ta_sectionScrollPrevNext(prevnext);
		}
	} else { // next page
		pageId = parseInt(pageId,10);
		xmlId = parseInt(xmlId,10);
		art_getNextArticle(pageId,xmlId,prevnext,type);
	}
	adAdsBottom();
}
function urlExists(urlToTest){
	var urlIndexExists;
	var urlIndex = urlToTest;
	var urlCall = BASE_AJAX_URL.split("ajax-request.php");
	urlCall = urlCall[0];
	urlToTest = urlCall+"indexExist.php?"+urlToTest;	
	urlToTest = normalizeCallForCDN(urlToTest,true);
	if(archiveDate){
		urlToTest += "&archive="+archiveDate;
	}
	if (urlToTest.indexOf(serverCDN) > -1 && pSetup.match(/-xp-/)) {
		a_pSetup = pSetup.split('-xp-');
		urlToTest = updateQueryStringParameter(urlToTest,'pSetup',a_pSetup[1]);
	}
	if(typeof urlIndexExist[currentNewspaper.getIssue()+currentNewspaper.edition] != 'undefined'){
		urlIndexExists = urlIndexExist[currentNewspaper.getIssue()+currentNewspaper.edition];
	}else{		
		$.ajax({
			url: urlToTest,
			type: 'GET',
			async: false,
			success : function(data){				
				if(data!="NO"){
					//frameIndex = "<iframe id=slideArt src='"+urlIndex+"' width='100%' height='99%' style='z-index:10;background-color:white !important;border:0px;'></iframe>";
					frameIndex = data.substring(data.indexOf("<body>")+6,data.indexOf("</body>"));					
					frameIndex = replaceAll(frameIndex,"parent\\.","");
					//replace the hardcoded sublayout 1.0.a with the one currently used by the psetup
					//frameIndex = replaceAll(frameIndex,"\/1\.0\.a\/","/"+layoutSubStyle+"/");
					urlIndexExist[currentNewspaper.getIssue()+currentNewspaper.edition] = frameIndex;
					if($('#titles').length > 0 && $('#titles').html().trim() == ""){
						ta_enter();
					}
					urlIndexExists = true;					
				}else{
					urlIndexExists = false;
				}				
			},
			error: 		});
	}
	return urlIndexExists;
}

var areaTextEmpty = '<div id="slideArt" style="position:relative;"><div id="titles" style="width:100%;"><img src="'+versionUrl+'/code/icons/usa/loading_art.gif" style="max-width: 30px;"><br /></div></div>';
function showslideArtDIV(){
	if(articleOpenedInPopup == 1){
		$('#articlemagazine').html(areaTextEmpty);
	}
	$('#areaText').html(areaTextEmpty);
}
var articleScroll= null;
var clicckedTab = false;
var urlIndexExist = new Array();
function ta_enter() {
	if((enableDebugConsole == '1') && console) { console.log("[textarea.ta_enter] Starting..."); }
	//var urlIndex = "pSetup="+pSetup+"&edition="+currentNewspaper.getEdition()+"&issue="+currentNewspaper.getIssue();
	var urlIndex = "pSetup="+pSetup+"&edition="+encodeURIComponent(currentNewspaper.getEdition())+"&issue="+currentNewspaper.getIssue();
	if((!urlIndexExist[currentNewspaper.getIssue()+currentNewspaper.edition]) || (urlIndexExist[currentNewspaper.getIssue()+currentNewspaper.edition] && urlIndexExist[currentNewspaper.getIssue()+currentNewspaper.edition].indexOf(urlIndex) == -1)){
		if(currentNewspaper.getIssue()){
			if(urlExists(urlIndex)){
				if(clicckedTab){
					showslideArtDIV();
				}
			}else{
				urlIndexExist[currentNewspaper.getIssue()+currentNewspaper.edition] = false;
				showslideArtDIV();
			}
		}
	}
	if(!currentNewspaper.getIssue() || !urlIndexExist[currentNewspaper.getIssue()+currentNewspaper.edition] || clicckedTab || (indexSpecialDefault=='' && indexSpecialJs=='')){
		showslideArtDIV();
		clicckedTab = false;
	}else{
		$('#areaText').html(urlIndexExist[currentNewspaper.getIssue()+currentNewspaper.edition]);
		$("#slideArt").load(function(){
			$("#slideArt").height(this.contentWindow.document.body.offsetHeight+20);
			$('#areaText').append($("#pageSE").html());
		});
		$('#areaText').css("overflow-y","hidden");
		try{
			goBackToHomePage();
			setHeightFrame();
		}catch(e){
		}
	}
	setIScrollArticle();
	art_refreshAreaText();
}

function ta_enter_article_1() {
   if((enableDebugConsole == '1') && console) { console.log("[textarea.ta_enter] Starting..."); }
   var existFrameIndex = false;
   if(frameIndex && frameIndex!="0"){
      var urlIndex = baseUrl+"/"+paper+"/"+currentNewspaper.getIssue()+"/fork/index.html";
      if(frameIndex.indexOf("frame")==-1)frameIndex = "<iframe id=slideArt src='./action/php-script/index.php?issue="+currentNewspaper.getIssue()+"&pSetup="+pSetup+"' width='100%' height='100%' style='z-index:10;background-color:white !important;'></iframe>";
      else frameIndex = "<iframe id=slideArt src='"+urlIndex+"' width='100%' height='100%' style='z-index:10;background-color:white !important;'></iframe>";
      existFrameIndex = true;
   }
   if(startDifferent == "0" || !existFrameIndex){
       $('#areaText').html ( ''+
         '<div id="slideArt" style="position:relative;">'+
         '<div id="scrollerSlideArt">'+
         '<div id="titles" style="width:100%;">-<br /></div>'+
         '</div>'+
         '</div>');


   }else{
      $('#areaText').html(frameIndex);
      $('#areaText').css("overflow-y","hidden");
   }
   art_refreshAreaText();
}

function setIScrollArticle(set){
	if(typeof set == "undefined")set = false;
	if (articleScroll) articleScroll = null;	
	if(onclickORontouchend == "touchend"){
		return false;
	}else if(set){
		articleScroll = new iScroll('slideArt');	
		articleScroll.onClick = ta_ClickImage;
		articleScroll.onPinch = ta_PinchImage;
		articleScroll.guides = true;
		articleScroll.navigationGap = true;
		articleScroll.right = function () {
			su_console('D','right');
			ta_articleScrollPrevNext(1);
		}
		articleScroll.up = 		articleScroll.left = function () {
			su_console('D','left');
			ta_articleScrollPrevNext(-1);
		}
		articleScroll.bottom = 	}
}

function setIScrollArticle_1(){
	if (articleScroll) articleScroll = null;
	if(onclickORontouchend == "touchend"){
		return false;
	}else{
		$("#scrollerSlideArt").width($("#titles")[0].scrollWidth);
		$("#slideArt").height($("#areaText").height());
		$("#slideArt").width($("#areaText").width());
		if($("#scrollerSlideArt").width()<$("#slideArt").width())$("#scrollerSlideArt").width($("#slideArt").width()+1);
		if($("#scrollerSlideArt").height()<$("#slideArt").height())$("#scrollerSlideArt").height($("#slideArt").height()+1);
		articleScroll = new IScroll('#slideArt', {
			zoom: false,
			scrollX: true,
			scrollY: true
		});
	}
}

var articleScroll2;
function setIScrollArticle_2(){
	articleScroll.setHScrollMode(true);
}

function ta_ClickImage(action,target,x,y,scale) {
	switch (action)  {
		case 'mousemove': {
			var oldtarget = target;
			target = document.getElementById('slideArt');
			target.style.webkitTransform = ' translate3d(' + x + 'px,' + y + 'px,0) scale(' + scale + ') ';
			target.style.MozTransform = ' translate(' + x + 'px,' + y + 'px) scale(' + scale + ') ';
			target.style.msTransform = ' translate(' + x + 'px,' + y + 'px) scale(' + scale + ') ';
			break;
		}
		case 'click': {
			var curClick = new Date().getTime();
			var doubleclick = 0;
			if (ta_lastClick && (curClick - ta_lastClick < 500)) {
				su_console('U','Double Click');
				doubleclick = 1;
				ta_lastClick=0;
				var pinchScale = 1.;
				ta_resizeText('titles',pinchScale);
				ta_lastPinch = pinchScale;
			} else {
				ta_lastClick = curClick;
			}
			break;
		}
		default: {
			
		}
   }
}

function ta_PinchImage(action,target,x,y,pinchScale,e) {
   if((enableDebugConsole == '1') && console) { console.log("[textarea.ta_PinchImage] Starting..."); }
   switch (action) {
      case 'pinchOrig': {
         articleScroll.scrollX = false;
         articleScroll.scrollY = false;
         break;
      }
      case 'pinchStart' : {
         articleScroll.scrollX = false;
         articleScroll.scrollY = false;
         pinch=true;
         break;
      }
      case 'pinchMove' : {
         if (art_currentArticleMode == 'graphic') {
         //
         } else {
            pinchScale = ta_lastPinch + (pinchScale-ta_lastPinch)/2;
            pinchScale = Math.max(0.5,Math.min(3.,pinchScale));
            ta_resizeText('titles',pinchScale);
         }
         ta_lastPinch = pinchScale;
         pinch = true;
         break;
      }
      case 'pinchEnd' :  {
         if (art_currentArticleMode == 'graphic') {
            if (enablePinchAddon == '1') {
               ta_openArticleInAddon();
            }
         } else {
            art_refreshAreaText();
         }
         pinch = false;
         break;
      }
   }
}

function ta_openArticleInAddon() {
	xc_isInAddon = true;
	xc_highlightBox(-1,null,false);
	pl_enterVm("artinaddon");
	try {
		var headerDivWidth = parseInt(objAreaText.style.width,10);
		var out = '<div style="width:'+headerDivWidth+'px;">'      
				+ ta_getHeader(articleHeder)		
				+ '<div style="clear:both;"></div>';      
		if(!isIphone)out += '<hr class="headerBar" />';
		if(browser_prefix === "-moz"){
			out = out + '<div class="areatext-topbar" ontouchstart="highlightSelectedItemTitle(this, \'-moz-linear-gradient (left, #8186A6, #656C9E, #494F91, #494F91)\')" href="javascript:articleScroll.up();">';
		}else if(browser_prefix === "-ms"){
			out = out + '<div class="areatext-topbar" ontouchstart="highlightSelectedItemTitle(this, \'progid:DXImageTransform.Microsoft.gradient(startColorstr=#8186A6, endColorstr=#494F91)\')" href="javascript:articleScroll.up();">';
		}else{
			out = out + '<div class="areatext-topbar" ontouchstart="highlightSelectedItemTitle(this, \'-webkit-gradient(linear,left top,left bottom,color-stop(0%,#8186A6),color-stop(33%,#656C9E),color-stop(67%,#494F91),color-stop(100%,#494F91))\')" href="javascript:articleScroll.up();">';
		}
		out = out + '<div style="position: absolute;"><img class="toc-back-arrow" src="'+iconBackArrow+'" /></div>'
			+ '<div style="float:right;">';
		out = out + '<div style="float:right;"><a class="pagerefart toc-close-button" style="float:right;" href="javascript:'+OBJNAME('ta_closeAddon')+'();"><img src="'+iconClose+'" /></a></div>';
		/* + sharedButtons */
		out = out + '</div>';
		// Addition of cutter button but with visibility hidden to "fix arrows position"
		out += '<div style="visibility: hidden; float:right;"><a class="pagerefart toc-graph-button" style="float:right;" href="javascript:'+OBJNAME('changeArticleMode')+'();"><img src="'+iconImmagine+'" id="graphicbutton" /></a></div>'
		// Article navigation arrows
		out += '<div style="float:right;"><a class="pagerefart toc-graph-button" style="float:right;" href="javascript:'+OBJNAME('ta_articleScrollPrevNext')+'(1);"><img src="'+versionUrl+'/hybrid/buttons/iphone/safari-bar-forward.png" /></a></div>';
		out += '<div style="float:right;"><a class="pagerefart toc-graph-button" style="float:right;" href="javascript:'+OBJNAME('ta_articleScrollUp')+'(null);"><img src="'+versionUrl+'/hybrid/buttons/iphone/safari-bar-up.png" /></a></div>';
		out += '<div style="float:right;"><a class="pagerefart toc-graph-button" style="float:right;" href="javascript:'+OBJNAME('ta_articleScrollPrevNext')+'(-1);"><img src="'+versionUrl+'/hybrid/buttons/iphone/safari-bar-back.png" /></a></div>';
		out += '<div style="clear: both;"></div>' + '</div>';
		$('#areaText').html(out);
		//art_refreshAreaText();
	} catch (e) {		
	}
	showAddonImage = currentGraphicInfo;
	xc_showAddonImage(
		currentGraphicInfo['pageid'],
		currentGraphicInfo['xoff'],
		currentGraphicInfo['yoff'],
		currentGraphicInfo['xend'],
		currentGraphicInfo['yend'],
		currentGraphicInfo['pwm'],
		currentGraphicInfo['phm']
	);
}

function ta_closeAddon() {
	xc_closeAddon_2();
	ta_enter();
	var pageId = localGetValues('last_pageId');
	var artid = localGetValues('last_artid');
	pl_exitVm();
	xc_justRotated = true;
	xc_checkGmode();
	xc_gMode = 0;
	art_printArticle(pageId, artid);
}

function ta_resizeText(objid,scale) {
	// var scale1dig = Math.round(scale*10)/10;
	var scale1dig = Math.round(scale*100);
	var scale1digDiv5 = Math.round((1.+(scale-1)/4)*100);
	var obj = document.getElementById(objid);
	if (objid.length > 0 && obj && obj!= 'undefined') {
		if (obj.style.fontSize == "") {
			obj.style.fontSize = "100%";
			obj.style.lineHeight = "100%";
		}
		obj.style.fontSize = parseFloat(scale1dig) + "%";
		obj.style.lineHeight = parseFloat(scale1digDiv5) + "%";
	}
}

function ta_loadFirstIndex(issue) {
	try {
		//$('#extra-button-back').hide();
		$('#extra-button-share').hide();
		//$('#extra-button-phodir').show();
		$('#extra-button-more').show();
	} catch (e) {}
	if(document.getElementById("upModeActionPhone")){
		document.getElementById("upModeActionPhone").style.opacity = .3;
		document.getElementById("upModeActionPhone").style.pointerEvents  = "none";
		document.getElementById("backModeActionPhone").style.opacity = .3;
		document.getElementById("backModeActionPhone").style.pointerEvents  = "none";
		document.getElementById("forwardModeActionPhone").style.opacity = .3;
		document.getElementById("forwardModeActionPhone").style.pointerEvents  = "none";
		document.getElementById("downloadAction2Phone").style.opacity = .3;
		document.getElementById("downloadAction2Phone").style.pointerEvents  = "none";
	}
	ta_extraBar_share(false);
	ta_extraBar_back(false);
	ta_extraBar_up(false);
	ta_extraBar_forward(false);
	switch (tocStyle){
		// section image + articles
		case "iphone":
			ta_getAllPagesListViewIphone(issue);
			break;
		// section title + articles
		case "list":
			ta_getAllPagesListNoThumbImgViewIphone(issue);
			break;
		// section title + articles
		case "all_art":
			ta_getAllPagesListView(issue);
			break;
		// section title + first article
		case "orig":
		default:
			ta_getSectionListView(issue);
	}
	showFitBottom();
}

function ta_getSectionListView(issue) {
	if((enableDebugConsole == '1') && console) { console.log("[textarea.ta_getSectionListView] Starting issue: " + issue); }
	var sectionList = ta_getSectionList();
	ta_enter();
	if(articleScroll) articleScroll.setHScrollMode(false);
	$('#titles').html(' ');
	// HEADER
	var out = '<div>'
	+ ta_getHeader(articleHeder)
	+ '<div style="clear:both;"></div>'
	+ '<hr class="headerBar" />';
	if(isIphone)out= "";
	if (clickableHeader == '1') {
		if(browser_prefix === "-moz"){
			out += '<div ontouchstart="highlightSelectedItemTitle(this, \'-moz-linear-gradient (left, #8186A6, #656C9E, #494F91, #494F91)\')" class="areatext-topbar" href="javascript:openOptions();">';
		}else if(browser_prefix === "-ms"){
			out += '<div ontouchstart="highlightSelectedItemTitle(this, \'progid:DXImageTransform.Microsoft.gradient(startColorstr=#8186A6, endColorstr=#494F91)\')" class="areatext-topbar" href="javascript:openOptions();">';
		}else{
			out += '<div ontouchstart="highlightSelectedItemTitle(this, \'-webkit-gradient(linear,left top,left bottom,color-stop(0%,#8186A6),color-stop(33%,#656C9E),color-stop(67%,#494F91),color-stop(100%,#494F91))\')" class="areatext-topbar" href="javascript:openOptions();">';
		}
	} else {
		out += '<div class="areatext-topbar">';
	}
   out += '<div style="position: absolute;"><img class="toc-back-arrow" src="'+iconBackArrow+'" /></div>';
   out += '<div style="float:right;"><a class="pagerefart toc-close-button" style="float:right;" href="javascript:'+OBJNAME('art_closeTextArticle')+'();"><img src="'+iconClose+'" /></a></div>'
   out += '<a href="javascript:openOptions();"><div style="float:left;" class="areatext-title">' + formatDate(currentNewspaper.getIssue(),DATE_FORMAT,SHOW_WEEK,SHOW_WEEK_LONG) + '</div></a>';
   if(!isIphone)out +=  '<div style="float:right;"><a class="pagerefart toc-graph-button" style="float:right;color:white;" href="javascript:increaseIndexFontSize();">A+</a></div>';
   if(!isIphone)out +=  '<div style="float:right;"><a class="pagerefart toc-graph-button" style="float:right;color:white;" href="javascript:reduceIndexFontSize();">A-</a></div>';
   out +=  '<div style="clear: both;"></div>';
   out +=  '</div>';
   if (sectionList.length > 0) {

      var oldSection = '';
      for (var x = 0; x < sectionList.length; x++ ) {
         var sectionLink = "<a ontouchstart=\"this.style.backgroundColor = '#ddd';\" href=\"javascript:"+OBJNAME('ta_articleScrollUp')+"('"+sectionList[x]['pageId']+"');\" class=\"firstindexsectionorig\"> ";

         out += "<div style=\"width: auto; margin: 5px;\">" + sectionLink+"<b>" + sectionList[x]['section'].replace(/ /g,"&nbsp;") + "</b></a>: <i>" ;
       for(var i=0; i<currentNewspaper.newspaper.length; i++){
          if(sectionList[x]['pageId'] == currentNewspaper.newspaper[i].pageId){

            if(cookie_get('fontSize')){
               var fs = cookie_get('fontSize');
               out += "<a style=\"font-size:"+fs+";\" ontouchstart=\"this.style.backgroundColor = '#ddd';\" id='firstindex"+sectionList[x]['pageId']+"'  \" class=\"firstindexarticleorig\" ";
            }
            else{
               out += "<a ontouchstart=\"this.style.backgroundColor = '#ddd';\" id='firstindex"+sectionList[x]['pageId']+"'  \" class=\"firstindexarticleorig\" ";
            }
            out += "href=\"javascript:cp_fifopush(LOAD_ART ,\'"+sectionList[x]['pageId']+"','" + currentNewspaper.issue + "', '"+ currentNewspaper.newspaper[i].filename+"', $('#titles'), art_printArticle1, "+sectionList[x]['pageId']+", 0, null, 5);\">";
            out += currentNewspaper.newspaper[i].title;
         }
       }
       out +="...</i></a></div>";

      }

      $('#titles').html(art_addPaddingDiv(out,"padding: 3px; z-index:2;"));
      art_refreshAreaText();
		if(articleScroll){
			articleScroll.up = function () {
				ta_loadFirstIndex(currentNewspaper.getIssue());
			}
		}
      //setTimeout(OBJNAME('articleScroll')+'.setPosition(0,0);',10);
   } else {
      su_console('D','no sections');
   }
}

var ta_getAllPagesListView_array = new Array();
function ta_getAllPagesListView(issue) {
	if(!is_Android)ta_enter();
	if(articleScroll)articleScroll.setHScrollMode(false);
	$('#titles').html(' ');
	ta_getAllPagesListView_success();
	
	// Call to ajax sql-remote
	/*toLoad = BASE_AJAX_URL  +  '&action=sql-remote&operationSQL=issuesAndPagesAndArticlesByIssue_1' +
		'&artType=' + artType +
		'&issue=' + escape(issue) +
		'&edition=' + unescape(currentNewspaper.getCurrentPage().edition) +
		'&editionForDB=' + cp_normalizeEditionForDbName(currentNewspaper.getCurrentPage().edition);
	if(ta_getAllPagesListView_array[issue]){
		ta_getAllPagesListView_success(ta_getAllPagesListView_array[issue]);
	}else{
		$.ajax({
			url : toLoad,
			success : function(data){
				ta_getAllPagesListView_success(data);
				ta_getAllPagesListView_array[issue] = data;
			},
			error: function(jqXHR, exception){
				su_console('E', '[ta_getAllPagesListView] Errore from WEB - Unable to read pages: ' + exception);
			}
		});
	}*/
}

//i.e: "Gli articoli principali del 19.10.2014"
//or:  "Gli articoli principali di Domenica 19.10.2014"
function getIndexEditionTitle(){
	var str_date;
	if(SHOW_WEEK && language == 1){
		str_date = firstIndexEditionTitleWithDay + ' ' + ta_getFormattedDate();
	}else{
		str_date = firstIndexEditionTitle + ' ' + ta_getFormattedDate();
	}
	return str_date;
}

/********************
 * AJAX SUCCESS ta_getAllPagesListView
 ********************/
function ta_getAllPagesListView_success(){
	var results = new Array();
	results.rows = currentNewspaper.newspaper;
	if((enableDebugConsole == '1') && console) { console.log("[textarea.ta_getAllPagesListView_success] Starting..."); }
	var out = '<div style="text-align: right;"><a class="pagerefart" style="padding: 3px; margin-right: 10px; " href="javascript:art_closeTextArticle();" ><img src="'+iconClose+'" border="0" id="graphicbutton" style="float: right; margin-right: 10px;margin-top: 15px;" /></a></div>';	
	var str_date = getIndexEditionTitle();

    if (dateInHeader == 1 && !articleHeder.match(/id='date'/i))    articleHeder="<table style='width:100%'><tr><td style='width: 40%;'>"+articleHeder+"</td><td id='date' style='vertical-align:bottom;width:60%'><span id='date' style='font-size: 20px; font-weight: bold;'>"+str_date+"</span></td></tr></table>";
        //articleHeder+="<span id='date' style='font-size: 20px; font-weight: bold;'>"+str_date+"</span>";

    if (dateInHeader == 1) str_date = "";
	out += ta_getHeader(articleHeder)
		+ '<div style="clear:both;"></div>'
		+ '<hr class="headerBar" />'
		+ '<div style="margin: 10px; font-size: 20px; font-weight: bold;">'
		+ str_date
		+ '</div>';
   if (results.rows.length > 0){
		var curPage = results.rows.item(0).page;
		var pageLabel = results.rows.item(0).page;
		if(typeof(curPage)=="undefined"){
			curPage = results.rows.item(0).pageId;
			pageLabel = results.rows.item(0).pageId;
		}
	}
	var addBull = "";
	viewBull = false;
	if(viewBull)addBull = "&bull;";
	out += '<div class=\"divlistIndexSection\" style=\"margin: 10px;\">';
	if(blindMode){
		out = '<div><div>';
		out += '<hr class="headerBar" />';
		out += '<a class="toc-section-page-wrap titleSection" style="width:100%;float:left;color: #4c4cbb;margin-top:0px !important;" href="javascript:blindModeSet(!blindMode);"><span style="float: left;">&nbsp;</span>'+exitAccessibility+'<span style="float: right;">&nbsp;</span></a>';
		out += '<a class="toc-section-page-wrap titleSection" style="width:100%;float:left;color: #4c4cbb;margin-top:0px !important;" href="javascript:hybrid_openOptionPage();"><span style="float: left;">&nbsp;</span>'+changeIssueEditionAccessibility+'<span style="float: right;">&nbsp;</span></a>';		
	}
   var rightPos = 10;
	for(var i=0;i<currentNewspaper.newspaper.length;i++){
		if(currentNewspaper.newspaper[i].titlelist){
			var outList = new Array();
			for(var j in currentNewspaper.newspaper[i].titlelist){
				if (currentNewspaper.newspaper[i].titlelist.hasOwnProperty(j)){
					var inc = parseInt(currentNewspaper.newspaper[i].inc[j]);
					if(currentNewspaper.newspaper[i].titlelist[j] == "" || currentNewspaper.newspaper[i].titlelist[j] == "..." || currentNewspaper.newspaper[i].titlelist[j] == "-" || currentNewspaper.newspaper[i].typelist[j] != "Editorial")continue;
					var pj = false;
					if(typeof(currentNewspaper.newspaper[i].pj) != "undefined"){
						pj = currentNewspaper.newspaper[i].pj[j];
					}
					if(!pj || JSON.parse(pj).length == 0 || (JSON.parse(pj)[Object.keys(JSON.parse(pj))[0]] && JSON.parse(pj)[Object.keys(JSON.parse(pj))[0]]["type"] != "slug") 
					|| (JSON.parse(pj)[Object.keys(JSON.parse(pj))[0]] && !JSON.parse(pj)[Object.keys(JSON.parse(pj))[0]]["from"])){
						var tmpPage = currentNewspaper.newspaper[i].page;
						if(typeof(tmpPage)=="undefined"){
							tmpPage = currentNewspaper.newspaper[i].pageId;
						}
						if(blindMode){
							outList[inc] = '<a class="toc-section-page-wrap titleSection" href="javascript:pl_scrollToPage('+currentNewspaper.newspaper[i].pageId+');art_printArticle('+currentNewspaper.newspaper[i].pageId+', '+j+');"'
								+ "> ";
							outList[inc] += currentNewspaper.newspaper[i].titlelist[j]
								+ '</a>';
						}else{
						if (curPage != tmpPage) {
							curPage = tmpPage;
							pageLabel = tmpPage;
							out += "<div style=\"width: auto; height: 15px;\">"
								+ '<hr class="pageSeparatorBar" />'
								+ "</div>";
						}
						outList[inc] = "<div style=\"position: relative; width: auto; margin: 5px;\">"
							+ '<div style="position: absolute; right: '+ rightPos +'px; font-size: 20px;">'
							+ '<a ontouchstart="this.style.backgroundColor = #ddd;" href="javascript:' + OBJNAME('ta_articleScrollUp') + '(\'' + currentNewspaper.newspaper[i].pageId + '\');"><b>'
							+ pageLabel.replace(/([A-Za-z]{0,1})[0]*([1-9]+[0-9]*)/, "$1$2")
							+ '</b></a>'
							+ '</div>'
							+ '<div style="float:left; padding: 3px; margin-right: 60px; text-indent: -10px; padding-left: 10px;">'
								+ '<a ontouchstart="this.style.backgroundColor = #ddd;" class="articleIndexList titleSection" href="javascript:pl_scrollToPage('+currentNewspaper.newspaper[i].pageId+');art_printArticle('+currentNewspaper.newspaper[i].pageId+', '+j+');"'
							+ "> ";
						outList[inc] += "<span class=\"sec_bullet\"></span>";
						outList[inc] += currentNewspaper.newspaper[i].titlelist[j]
							+ '</a>'
							+ '</div>'
							+ '<div style="clear:both"></div>'
							+ '</div>';
					}
					}
					pageLabel = "";
				}
			}
			for(var j in outList){
				if (outList.hasOwnProperty(j)) {
					out += outList[j];
				}
			}
		}
	}
	out += '</div>';
	out += '</div>';
	out += '<div id="divSpecialSections" ></div>';
	out += '</div>';
	$('#titles').html(art_addPaddingDiv(out,"padding: 3px; z-index:2;"));
	art_refreshAreaText();
	ta_loadSpecialSections(true);
	if(articleScroll){
		articleScroll.up = function () {
			ta_loadFirstIndex(currentNewspaper.getIssue());
		}
	}
}

function increaseFontSizeS() {
    var size = parseFloat($("#titles").css('font-size'));
    $("#iconDecreaseLower").css('opacity','0.6');
    $("#iconIncreaseLower").css('opacity','1.0');
    $("#titles").css("font-size", (size + 1));
}

function decreaseFontSizeS() {
    var size = parseFloat($("#titles").css('font-size'));
    $("#iconDecreaseLower").css('opacity','1.0');
    $("#iconIncreaseLower").css('opacity','0.6');
    $("#titles").css("font-size", (size - 1));
}

function backArtFunc() {
    //SILVIJA TODO IMPLEMENT BACK ART
    console.log("backArtFunc to implement");
}

// Article index with images, "BN De stem style"
function ta_getAllPagesListViewIphone(issue){
	ta_enter();
	if(articleScroll)articleScroll.setHScrollMode(false);
	$('#titles').html(' ');
	ta_getAllPagesListViewIphone_AjaxCall(issue);
}

// Articles index with no images, "NN style"
function ta_getAllPagesListNoThumbImgViewIphone(issue){
   ta_enter();
   if(articleScroll)articleScroll.setHScrollMode(false);
   $('#titles').html(' ');

   ta_getAllPagesListViewIphone_AjaxCall(issue);
}

function ta_getAllPagesListViewIphone_AjaxCall(issue) {
	// Call to ajax sql-remote
	toLoad = BASE_AJAX_URL  +  '&action=sql-remote&operationSQL=issuesAndPagesAndArticlesByIssue_2' +
			'&artType=' + artType +
			'&issue=' + escape(issue) +
			'&editionForDB=' + cp_normalizeEditionForDbName(unescape(currentNewspaper.getEdition()));
	if(currentNewspaper.newspaper){
		ta_getAllPagesListNoThumbImgViewIphone_success(new Array());
	}else{
		$.ajax({
			url : toLoad,
			success : function(data){
				if(tocStyle == "iphone"){ 
					ta_getAllPagesListViewIphone_success(data); 
				}else{ 
					ta_getAllPagesListNoThumbImgViewIphone_success(data);
				}
			},
			error: function(jqXHR, exception){
				su_console('E', '[ta_getAllPagesListViewIphone] Errore from WEB - Unable to read pages: ' + exception);
			}
		});
	}
}


/********************
 * AJAX SUCCESS ta_getAllPagesListViewIphone
 ********************/
function ta_getAllPagesListViewIphone_success(results){
	if((enableDebugConsole == '1') && console) { console.log("[textarea.ta_getAllPagesListViewIphone_success] Starting..."); }
	//var viewAllTitles = (ta_tocView == "all_page") ? true : false;
	var viewAllTitles = (tocStyle == "all_art") ? true : false;
	// HEADER
	var out = '<div>'
	+ ta_getHeader(articleHeder)
	+ '<div style="clear:both;"></div>'
	+ '<hr class="headerBar" />';

   if(isIphone)out= "";

   if (clickableHeader == '1') {
      if(browser_prefix === "-moz")
      {
         out += '<div ontouchstart="highlightSelectedItemTitle(this, \'-moz-linear-gradient (left, #8186A6, #656C9E, #494F91, #494F91)\')" class="areatext-topbar" href="javascript:openOptions();">';
      }
      else if(browser_prefix === "-ms")
      {
         out += '<div ontouchstart="highlightSelectedItemTitle(this, \'progid:DXImageTransform.Microsoft.gradient(startColorstr=#8186A6, endColorstr=#494F91)\')" class="areatext-topbar" href="javascript:openOptions();">';
      }
      else
      {
         out += '<div ontouchstart="highlightSelectedItemTitle(this, \'-webkit-gradient(linear,left top,left bottom,color-stop(0%,#8186A6),color-stop(33%,#656C9E),color-stop(67%,#494F91),color-stop(100%,#494F91))\')" class="areatext-topbar" href="javascript:openOptions();">';
      }
   } else {
      out += '<div class="areatext-topbar">';
   }
   out += '<div style="position: absolute;"><img class="toc-back-arrow" src="'+iconBackArrow+'" /></div>';

   out += '<div style="float:right;"><a class="pagerefart toc-close-button" style="float:right;" href="javascript:'+OBJNAME('art_closeTextArticle')+'();"><img src="'+iconClose+'" /></a></div>'
   out += '<a href="javascript:openOptions();"><div style="float:left;" class="areatext-title">' + formatDate(currentNewspaper.getIssue(),DATE_FORMAT,SHOW_WEEK,SHOW_WEEK_LONG) + '</div></a>'
   + '<div style="clear: both;"></div>'
   + '</div>';

   //toWrite += '<div class="bar"><div class="body"><div><span></span></div><p>';

   out += '<div style="padding: 3px; height:100%;">';
   out += '<div class="section-wrap">';

   if (results.rows.length > 0) {
      var curPage = ""; //results.rows.item(0).page;
      var pageLabel = ""; //results.rows.item(0).page;
      var curSection = "";
   }
   var prevPageLabel = "";
   for (var i = 0; i < results.rows.length; i++)
   {
      var row = results.rows.item(i);

      if (curPage != row['page']) {
         curPage = row['page'];
		 if(row["shownpage"])curPage = row['shownpage'].replace(/\./,"");
         pageLabel = (row['section'] == '') ? pageLabel : row['section'];
         if (viewAllTitles) {
			out += '<a href="javascript:' + OBJNAME('ta_articleScrollUp') + '(\'' + row['pageId'] + '\');">';
            out += '<div class="toc-section-wrap" style="position:relative; width: auto;">'            
            + '<div style="float:left;" >' + pageLabel + "</div>"
            + '<div style="position: absolute; right: 5px; " >'
            + curPage
            + '</div>'
            //+ '</a>'
            + '<div style="clear:both"></div>'
            + "</div>"
            + "</a>";
         } else {
            if (prevPageLabel != pageLabel) {
               var marginStyle = " ";
               if (!isNewSection(curSection, row['page'])) {
                  marginStyle = "margin-left:90px; ";
               } else if (i > 0) {
                       out += '<div style="clear:left;"></div>';
               }
				out += '<a href="javascript:' + OBJNAME('ta_articleScrollUp') + '(\'' + row['pageId'] + '\');">';
               out += '<div class="toc-section-page-wrap" style="' + marginStyle + 'position:relative; width: auto;">'               
               + '<div style="float:left; max-height: 1.8em; overflow: hidden; max-width: 75%;">' + pageLabel + "</div>"
               + '<div style="float:right;">'
               + curPage.replace(/([A-Za-z]{0,1})[0]*([1-9]+[0-9]*)/, "$1$2")
               + '</div>'
               //+ '</a>'
               + '<div style="clear:right"></div>'
               + "</div>"
               + "</a>";

               if (isNewSection(curSection, row['page'])) {
                  var imagePath = "../../.." + baseUrl + "/" + paper + "/" + currentNewspaper.getIssue() + "/" + row['filename'] + '/low.jpg';


					cp_fifopush(LOAD_LOW, row['pageId'], row['issue'], row['filename'], '@toc-thumb-pageid-' + row['pageId'], ta_showThumbSection, row['pageId'], imagePath, null, null, 20);
					curSection = row['page'];
					out += '<a href="javascript:'+OBJNAME('pl_scrollToPage')+'('+row['pageId']+');'+OBJNAME('art_closeTextArticle')+'();">';
					out += '<div style="float:left;" class="toc-thumb">';
					out = out + '<img toLoad="' + row['filename'] + '" id="toc-thumb-pageid-' + row['pageId'] + '" width="80" src="'+ imagePath +'">'
					out = out + '<div style="clear:both"></div>'
                  + '</div>'
                  + '</a>';
               }
            }
            prevPageLabel = pageLabel;
         }
      }

      if (viewAllTitles) {
         out += "<div ontouchstart=\"highlightSelectedItem(this, highlightSelectedItemColor);\" class=\"toc-page-title-wrap\" style=\"position: relative; width: auto; margin: 5px;\">"
         + '<div style="float:left; padding: 3px; margin-right: 60px; text-indent: 0px; padding-left: 0px;">'
         + row['title']
         + '</div>'
         + '<div style="clear:both"></div>'
         + '</div>';
      }
   }
   out += '<div style="clear:both"></div>'
       + '</div>'
       + '</div>'
       + '</div>';


   $('#titles').html(art_addPaddingDiv(out,"padding: 3px; z-index:2;"));
   art_refreshAreaText();
	if(articleScroll){
   articleScroll.up = function () {
      ta_loadFirstIndex(currentNewspaper.getIssue());
   }
   }
   // su_console('D','articleScroll set position 0');
   //setTimeout(OBJNAME('articleScroll')+'.setPosition(0,0);',10);
}

/********************
 * AJAX SUCCESS ta_getAllPagesListNoThumbImgViewIphone
 ********************/
function ta_getAllPagesListNoThumbImgViewIphone_success(results){
	if(currentNewspaper.newspaper)results.rows = currentNewspaper.newspaper;
	var viewAllTitles = (tocStyle == "all_art") ? true : false;
	var out = '<div style="position: absolute;top: 0px;right: 15px;"><a class="pagerefart" ' +
		'href="javascript:art_closeTextArticle();">' +
		'<img src="'+iconClose+'" border="0" id="graphicbutton" /></a></div>';
	if (useSvgIcons == "1") {
        var out =   '<div class="pagerefart" onclick="javascript:art_closeTextArticle();" style="position: absolute;top: 0px;right: 15px; top:5px">' +
                    '<object width="30px" height="30px" data="'+iconClose+'" style="" id="graphicbutton"></object></div>';
    } 
	var readSpeakerBut = '';
	if(ipadTextSpeech == "readspeaker"){
		   readSpeakerBut += '<div style="position:relative; margin-left:150px; top:25px;">'
		   + '<div id="readspeaker_button2" class="rs_skip rsbtn rs_preserve" style="width: auto;">'
		   + '<a rel="nofollow" class="rsbtn_play" accesskey="L" title="ReadSpeaker webReader إستمع إلى هذه الصفحةِ مستخدماً" href="//app-eu.readspeaker.com/cgi-bin/rsent?customerid=9522&amp;lang=ar_ar&amp;voice=Faris&amp;readclass=titleSection">'
		   + '<span class="rsbtn_left rsimg rspart"><span class="rsbtn_text"><span>استمع</span></span></span>'
		   + '<span class="rsbtn_right rsimg rsplay rspart"></span>'
		   + '</a>'
		   + '</div>'
		   + '</div>'
	}
	if(blindMode){
		out = '';
		out += '<a class="toc-section-page-wrap titleSection" style="width:100%;float:left;color: #4c4cbb;margin-top:0px !important;" href="javascript:blindModeSet(!blindMode);"><span style="float: left;">&nbsp;</span>'+exitAccessibility+'<span style="float: right;">&nbsp;</span></a>';
		out += '<a class="toc-section-page-wrap titleSection" style="width:100%;float:left;color: #4c4cbb;margin-top:0px !important;" href="javascript:hybrid_openOptionPage();"><span style="float: left;">&nbsp;</span>'+changeIssueEditionAccessibility+'<span style="float: right;">&nbsp;</span></a>';
	}
	if (articleHeder.indexOf('$$edition')) {
		var lasteditStart = (localStorageX.getItem('last_edition') == null)?"":localStorageX.getItem('last_edition');		
		lastedit = lasteditStart.replace(unescape("%FC"),"u");
		lastedit = lastedit.replace(unescape("%E4"),"a");
		lastedit = lastedit.replace(/\-/g,"");
		lastedit = "logo_"+ lastedit.replace(/\s/g,"")+".png";
		lastedit = lastedit.toLowerCase();			
		lastedit = "logo_background.png";
		lastedit = "images/webapp/banner.png";
		if ( multiLogoHeder == 1 && xpaper != paper){
			lastedit = lasteditStart.replace(unescape("%FC"),"u");
			lastedit = lastedit.replace(unescape("%E4"),"a");
			lastedit = "logo_"+ lastedit.replace(/\s/g,"")+".gif";
			lastedit = lastedit.toLowerCase();
			var mylogo = window.location.protocol + "//" + TA_DOMAIN + "/eeLayout/" + paper + "/1.0.a/images/webapp/banner.png";
			var myoriglogo = window.location.protocol + "//" + TA_DOMAIN + "/eeLayout/" + layoutStyle + "/" + layoutSubStyle + "/images/webapp/banner.png";
			articleHeder = "<img id='imagLogoArt' src='" + mylogo +"' style='max-width:100%;max-height:60px;margin:0;' onError="+ "'" + "this.onerror=null;this.src=" +"\""+  myoriglogo + "\""+ "';>";
		}else if ( multiLogoHeder == 1 ){
			lastedit = lasteditStart.replace(unescape("%FC"),"u");
			lastedit = lastedit.replace(unescape("%E4"),"a");
			lastedit = "logo_"+ lastedit.replace(/\s/g,"")+".gif";
			lastedit = lastedit.toLowerCase();
			var mylogo = window.location.protocol + "//" + TA_DOMAIN + "/eeLayout/" + layoutStyle + "/" + layoutSubStyle + "/images/webapp/" + lastedit;
			var myoriglogo = window.location.protocol + "//" + TA_DOMAIN + "/eeLayout/" + layoutStyle + "/" + layoutSubStyle + "/images/webapp/banner.png";
			articleHeder = "<img id='imagLogoArt' src='" + mylogo +"' style='max-width:100%;max-height:60px;margin:0;' onError="+ "'" + "this.onerror=null;this.src=" +"\""+  myoriglogo + "\""+ "';>";
		}
		articleHeder = articleHeder.replace(/\$\$edition/g,lasteditStart);
	}
	if(svg_tecnavia == 1) articleHeder = "";
	var str_date = getIndexEditionTitle();
	if(blindMode)str_date = currentNewspaper.edition+ " - " + str_date;
	out  = '<div class="toc-top-header">' + articleHeder + out +'</div>';
	out += '<div style="clear:both;"></div>';
	out += '<hr class="headerBar" />';
	out += '<div id="id_above_index" style="display:none"></div>';
	out += ((viewEditionIndex == "1")?'<div style="margin: 10px; font-size: 20px;">Ausgabe: <b>'+currentNewspaper.edition+ '</b></div>':"");
	out += '<div style="margin: 10px; font-size: 20px; font-weight: bold;height: 30px;">';
	if(blindMode) out +=  '<h1>'+str_date+'</h1>';
	else out +=  '<span>'+str_date+'</span>';
	if(styleViewFirstPageSection == "1" && allTabsOpenIndex == "1"){
		var stylesDiv = "float: right;font-size: 14px;margin-right: 20px;background: lightgray;padding:6px;border-radius:5px;border:1px solid;font-weight: bold;cursor:pointer;";
		out += "<div onclick='javascript:opencloseSubTitleSectionAll();' style='"+stylesDiv+"'>"+coolapseAll+"</div>";
	}
	out +=  '<span style="float: right;">&nbsp;</span>';
	out +=  '</div>';
	if (results.rows.length > 0) {
		var curPage = ""; //results.rows.item(0).page;
		var pageLabel = ""; //results.rows.item(0).page;
	}
	// var prevPageLabel = "";
	var sectionPageView = false;
	if(currentNewspaper && currentNewspaper.newspaper && currentNewspaper.newspaper[parseInt(localGetValues('last_Id'), 10)])sectionPageView = currentNewspaper.newspaper[parseInt(localGetValues('last_Id'), 10)]["section"];
	var row,isinarray,pageId,type;
	var isSequence = false;
	var sectionArray = new Array();
	var allSectionsArray = new Array();
	var allPagesBySection = new Array();
	if (listAllPageNumbersInIndexBySection === "1"){
		for (var i = 0; i < results.rows.length; i++) {
			row = results.rows.item(i);
			pageLabel = (row['section'] == '') ? pageLabel : row['section'];
			pageId = row.page;
			type = row.type;
			isinarray = jQuery.inArray(pageLabel, allSectionsArray);
			if (isinarray == -1) {
				allSectionsArray[i] = ""+pageLabel;
				if (listAllPageNumbersInIndexBySection === "1"){
					allPagesBySection[i] = ""+pageId.replace(/([A-Za-z]{0,1})[0]*([1-9]+[0-9]*)/, "$1$2");
				}else{
					allPagesBySection[i] = ""+pageId.replace(/([A-Za-z]{0,1})[0]*([1-9]+[0-9]*)/, "$1$2");
				}
			} else {
				if (allPagesBySection[isinarray].indexOf(", ") != -1) {
					var splittedSequences = allPagesBySection[isinarray].split(", ");
					splittedSequences[splittedSequences.length - 1] = createPageSequence (splittedSequences[splittedSequences.length - 1], pageId.replace(/([A-Za-z]{0,1})[0]*([1-9]+[0-9]*)/, "$1$2"), type);
					allPagesBySection[isinarray] = splittedSequences.join(", ");
				} else {
					allPagesBySection[isinarray] = createPageSequence (allPagesBySection[isinarray], pageId.replace(/([A-Za-z]{0,1})[0]*([1-9]+[0-9]*)/, "$1$2"), type);
				}
			}
		}   
	}
	var displayPage;   
	if(arabView=="1"){
		results.rows.reverse();
	}
	if(specialBeforeIndex == "1"){
		out += '<div id="divSpecialSections" ></div>';
	}
	for (var i = 0; i < results.rows.length; i++) {
		row = results.rows.item(i);
		if (curPage != row['page']) {
			curPage = row['page'];
			if(row["shownpage"])curPage = row['shownpage'].replace(/\./,"");
			pageLabel = (row['section'] == '') ? pageLabel : row['section'];
			if (paper != pageLabel && jQuery.inArray(pageLabel, sectionArray) == -1) {
				if (listAllPageNumbersInIndexBySection === "1"){
					isinarray = jQuery.inArray(pageLabel, allSectionsArray);
					if (isinarray != -1) {
						displayPage = allPagesBySection[isinarray];
					}
				} else {
					displayPage = curPage.replace(/([A-Za-z]{0,1})[0]*([1-9]+[0-9]*)/, "$1$2");
				}
				var classDivSection = "toc-section-page-wrap";
				var addBull = "";
				viewBull = false;
				if(viewBull)addBull = "&bull;";
				classDivSection += " titleSection";					
				if(styleViewFirstPageSection == "1" && !blindMode){					
					out += '<a href="javascript:' + OBJNAME('opencloseSubTitleSection') + '(\'' + i + '\',\'' + row.pageId + '\');">'
					out += '<div class="'+classDivSection+'" >'
						+ '<div class="section-page-wrap-title"> '+addBull+' '+pageLabel+"</div>"
						+ '<div class="section-page-wrap-pageNum">'
						+ displayPage
						+ '</div>'
						+ "</div>"
						+ "</a>";
					var indexPage = i;
					if(sectionPageView == pageLabel){
						var haveArticlesEditiorial = false;
						if(results.rows.item(parseInt(localGetValues('last_Id'), 10)).titlelist){
							for (var y = 0; y < Object.keys(results.rows.item(parseInt(localGetValues('last_Id'), 10)).titlelist).length; y++) {
								if(results.rows.item(parseInt(localGetValues('last_Id'), 10)).typelist[y] == "Editorial")haveArticlesEditiorial = true;
							}
						}
							row = results.rows.item(parseInt(localGetValues('last_Id'), 10));
							curPage = row['page'];
						if(row["shownpage"])curPage = row['shownpage'].replace(/\./,"");
							indexPage = parseInt(localGetValues('last_Id'), 10);
					}
					if(row.titlelist){
						var hideShowSubTitleSection = "none";
						if(sectionPageView == pageLabel)hideShowSubTitleSection = "block";
						out += "<div id='subTitleSection"+i+"' class='subTitleSection' style='display:"+hideShowSubTitleSection+";margin-left: 5%;margin-bottom: 5px;margin-top: 5px;'>";
						if(typeof(row.shownpage) != "undefined"){
						for (var y = 0; y < Object.keys(row.titlelist).length; y++) {
							for (var t = 0; t < Object.keys(row.titlelist).length; t++) {
								if( ((typeof(row.inc) != "undefined" && y==parseInt(row.inc[t])) || (typeof(row.inc) == "undefined" && y==t)) && row.typelist[t] == "Editorial"){
									out += '<a href="javascript:javascript:art_printArticle(\''+row.pageId+'\',\''+t+'\');"> '
										+ '<div class="section-page-articles-wrap toc-titles-font" '
										+ "onMouseOver='pl_showArticleIdart_MouseOver(\""+indexPage+"\",\""+t+"\");'>"
										+ '<div class="section-page-wrap-title"'
										+ "onMouseOver='pl_showArticleIdart_MouseOver(\""+indexPage+"\",\""+t+"\");'"
										+ '>&bull; ' +row.titlelist[t]+"</div>"
										+ '<div class="section-page-wrap-pageNum" '
										+ "onMouseOver='pl_showArticleIdart_MouseOver(\""+indexPage+"\",\""+t+"\");'>"
										+ row.shownpage.replace(/([A-Za-z]{0,1})[0]*([1-9]+[0-9]*)/, "$1$2")
										+ '</div>'
										+ "</div>"
										+ "</a>";
									break;
									}
								}
							}
						}else{
							for (var y = 0; y < Object.keys(row.titlelist).length; y++) {
								if(row.typelist[y] == "Editorial"){
									out += '<a href="javascript:' + OBJNAME('cp_fifopush') + "(" + OBJNAME('LOAD_ART') + " , '" + row.pageId+"','"+currentNewspaper.issue+"', '"+row.filename+"', $('#titles'), "+OBJNAME('art_printArticle1')+", "+row.pageId+", "+y+', null, 5);"> '
										+ '<div class="section-page-articles-wrap toc-titles-font" '
										+ "onMouseOver='pl_showArticleIdart_MouseOver(\""+indexPage+"\",\""+y+"\");'>"
										+ '<div class="section-page-wrap-title"'
										+ "onMouseOver='pl_showArticleIdart_MouseOver(\""+indexPage+"\",\""+y+"\");'"
										+ '>&bull; ' +row.titlelist[y]+"</div>"
										+ '<div class="section-page-wrap-pageNum" '
										+ "onMouseOver='pl_showArticleIdart_MouseOver(\""+indexPage+"\",\""+y+"\");'>"
										+ row.page.replace(/([A-Za-z]{0,1})[0]*([1-9]+[0-9]*)/, "$1$2")
										+ '</div>'
										+ "</div>"
										+ "</a>";
								}
							}
						}
						out += "</div>";
					}
				}else if (indentIndex =="1") {
                   if (pageLabel.match(/^[\s]*[A-Z][\s]*[\:]/) || displayPage.match(/^[\s]*[A-Z]1$/)){
						out += '<a href=\"javascript:' + OBJNAME('ta_articleScrollUp') + '(\'' + row['pageId'] + '\');\">'
							+ '<div class=\"'+classDivSection+'\">'
                            + '<div class="section-page-wrap-title"> '+addBull+' '+pageLabel+"</div>"
                            + '<div class="section-page-wrap-pageNum">' 
                            + displayPage
                            + '</div>'
							+ '</div>'
							+ '</a>';
					}else{
						out += '<a href=\"javascript:' + OBJNAME('ta_articleScrollUp') + '(\'' + row['pageId'] + '\');\">'
							+ '<div class=\"'+classDivSection+'\">'
							+ '<div style="padding-left:30px;width:auto;" class="section-page-wrap-title"> '+addBull+' '+pageLabel+"</div>"
							+ '<div class="section-page-wrap-pageNum">' 
							+ displayPage
							+ '</div>'
							+ '</div>'
							+ '</a>';
	                }         
                }  else {
					var classDivPageNum = "section-page-wrap-pageNum";
					var classDivTitle = "section-page-wrap-title";
					if(arabView=="1"){
						classDivPageNum += " section-page-wrap-pageNum-arab";
						classDivTitle += " section-page-wrap-title-arab";
					}
					if(i == 0 && showImgIndex == "1"){
						var srcImgIndex = serverCDN + setSoftwareBaseCDN + "ajax-request.php?action=loadImage&type=low&pSetup=" + getPSetupImage(pSetup) + "&issue=" + currentNewspaper.getIssue() + "&crc=" + row.filename + "&edition=" + currentNewspaper.edition;
						srcImgIndex = updateQueryStringParameter(srcImgIndex,'verCdn',verCdn);
						if(archiveDate && archiveDate > 2){
							if(row.filename.indexOf("../..")>=0){
								filenameUse = row.filename.replace("../..","");
								filenameUse = filenameUse.replace(currentNewspaper.getIssue(),currentNewspaper.getIssue().substr(0,4) + "/" + currentNewspaper.getIssue().substr(4,6).substr(0,2) + "/" + currentNewspaper.getIssue());
								srcImgIndex = "//" + eval("archBaseDomain"+(archiveDate - 2)) + eval("archBaseUrl"+(archiveDate - 2)) + "/" + filenameUse + "/text.gif";
							}else{
								srcImgIndex = "ajax-request.php?action=loadImage&type=low&pSetup=" + getPSetupImage(pSetup) + "&issue=" + currentNewspaper.getIssue() + "&crc=" + row.filename + "&edition=" + currentNewspaper.edition;
								srcImgIndex = "//" + eval("archBaseDomain"+(archiveDate - 2)) + "/eebrowser/ipad/" + verArchive + "/"+ srcImgIndex;
							}
						}else{
							srcImgIndex += "&mtime="+row.mtime;
						}
						out += '<div class=\"divImgIndexSection\"><img class=\"imgIndexSection\" onload=\"loadImgIndex();\" src=\"'+srcImgIndex+'\"></div>';
					}
					if(i == 0)out += '<div class=\"divlistIndexSection\">';
					out += '<a class=\"'+classDivSection+'\" href=\"javascript:' + OBJNAME('ta_articleScrollUp') + '(\'' + row['pageId'] + '\');\">'
						//+ '<div class=\"'+classDivSection+'\">'
						+ '<span class="'+classDivTitle+'"> '+addBull+' '+pageLabel+"</span>"
						+ '<span style="color: white;font-size: 0.1px;">'+onPage+'</span>'
						+ '<span class="'+classDivPageNum+'">' 
						+ displayPage
						+ '</span>'
						//+ '</div>'
						+ '</a>';
				}
			}
			sectionArray.push(pageLabel);
		}

		if (viewAllTitles) {
			out += "<div class=\"toc-page-title-wrap\" style=\"position: relative; width: auto; margin: 5px;\">";
			if(arabView=="1"){
				out +=  '<div style="float:right; padding: 3px; margin-right: 60px; text-indent: -10px; padding-left: 10px;">';
			}else{
				out +=  '<div style="float:left; padding: 3px; margin-right: 60px; text-indent: -10px; padding-left: 10px;">';
			}
			out +=  '<a ontouchstart="this.style.backgroundColor = #ddd;" class="articleIndexList toc-titles-font" href="javascript:' + OBJNAME('cp_fifopush') + "(" + OBJNAME('LOAD_ART') + " , '" + row.pageId+"','"+currentNewspaper.issue+"', '"+row.filename+"', $('#titles'), "+OBJNAME('art_printArticle1')+", "+row.pageId+", "+row.xmlId+", null, 5);\" "
				+ "> &bull; "
				+ row['title']
				+ '</a>'
				+ '</div>'
				+ '<div style="clear:both"></div>'
				+ '</div>';
		} else {
			out += '';
		}
	}
	out += '</div>';
	out += '</div>';	
	if(arabView=="1"){
		results.rows.reverse();
	}
	if(specialBeforeIndex != "1"){
		out += '<div id="divSpecialSections" ></div>';
	}
	out += '</div>';
	if(addDisclaimer != ""){
		out += addDisclaimer;
	}
	$('#titles').html(art_addPaddingDiv(out,"padding: 3px; z-index:2;"));
	returnNoticesType("above_index","id_above_index");
	refreshAdAboveIndex();
	art_refreshAreaText();	
	ta_loadSpecialSections(true);
	if(articlrentNewspaper.getIssue());
		}
	}
	if($("div[id^='subTitleSection']:visible").length > 0){
		if(($("#areaText").height() - 100) < $("div[id^='subTitleSection']:visible").offset().top){
			$("#areaText").scrollTop($("div[id^='subTitleSection']:visible").offset().top-($("#areaText").height()/2));
		}
	}
}

function loadImgIndex(){
	if($("#areaText").width() < 450 || sectionIndexVertical == "0"){
		$(".divImgIndexSection").remove();
		$(".divlistIndexSection").width($("#titles").width());
	}else{
		var widthListIndex = $("#titles").width()-$(".divImgIndexSection").width()-25;
		$(".divlistIndexSection").width(widthListIndex);
		$(".divlistIndexSection").css("float","left");
		if($("#areaText").width() > 800){
			$("#titles").find(".imgSpecial").css("max-height",$(".imgIndexSection").css("max-height"));
			var widthSpecial = 150;
			var widthListIndex = $("#titles").width() - widthSpecial - $(".divImgIndexSection").width()-20;
			$("#titles").find("#divSpecialSections").width(widthSpecial);			
			$("#titles").find(".divlistIndexSection").width(widthListIndex-10);	
			$("#titles").find(".divImgSpecial").css("border-right","none")			
			$("#titles").find(".mainSpecialDiv_noSections").height("auto");
			$("#titles").find(".mainSpecialDiv_noSections").css("float","none");
			$("#titles").find(".divSpecial").css("width","100%");
			$("#titles").find(".divdatespan").css("width","100%");
			$("#titles").find(".divSpecial").css("text-align","center");
			$("#titles").find(".divdatespan").css("margin","0");
		}
	}
}

function createPageSequence (string, pageId, type){
   if (string.indexOf("-") != -1){
      var splittedSubSequence = string.split("-");
      if (parseInt(splittedSubSequence[1]) + 1 == parseInt(pageId) ) {
         pageId = (type !== "1") ? pageId : minTwoDigits(parseInt(pageId) + 1) ;
         string = splittedSubSequence[0] + "-" + pageId; 
      } else {
         pageId = (type !== "1") ? pageId : pageId + "-" + minTwoDigits(parseInt(pageId) +1);
         string +=  ", "+pageId;
      }
   } else if (parseInt(string) + 1 == parseInt(pageId)) {
      pageId = (type !== "1") ? pageId : minTwoDigits(parseInt(pageId) + 1) ;
      string += "-" + pageId; 
   } else {
      pageId = (type !== "1") ? pageId : pageId + "-" + minTwoDigits(parseInt(pageId) +1);
      string +=  ", "+paguSection(pageId, imagePath) {
}

function opencloseSubTitleSection(id,pageId){
	if ($('#subTitleSection'+ id).is(":visible") == true) {
		$('#subTitleSection' + id).hide();
	}else{
		$("div[id^='subTitleSection']").hide();
		$('#subTitleSection' + id).show();		
		pl_scrollToPage(pageId);
		if($('#subTitleSection' + id).html() == "" && (verticalMode == "1" || (verticalMode == "0" && $("#areaText").width() > ($("body").width()-$("#areaButtons").width()-10)))){
			art_closeTextArticle();
		}		
bTitleSection']").show();
	}
}

function onLoadframeIndexSpecial(){
	$("#frameIndexSpecial").height(document.getElementById("frameIndexSpecial").contentDocument.body.offsetHeight + 50);
}

function isNewSection(curSection, curPage) {
   var letterSection = curSection.toString().substr(0, 1);
   var letterPage = curPage.toString().substr(0, 1);
   if (letterSection != letterPage) {
      return true;
   }

   return false;
}

var highlightSelectedItemColor = "#CCCCFF";
function highlightSelectedItem(elem, color) {
   var originalColor = $(elem).css('background-color');
   var originalOffset = $(elem).offset();
   $(elem).css('background-color', color);

   var callback = function(elem, originalOffset, originalColor) {
      return function() {
         var offset = $(elem).offset();
         if (offset.left != originalOffset.left || offset.top != originalOffset.top) {
            $(elem).css('background-color', originalColor);
         }
      }
   };
   setTimeout(callback(elem, originalOffset, originalColor), 500);
}

function highlightSelectedItemTitle(elem, color) {
	if(browser_prefix === "-ms"){
      var originalColor = $(elem).css('filter');
      var originalOffset = $(elem).offset();
      $(elem).css('filter', color);

      var callback = function(elem, originalOffset, originalColor) {
              return function() {
                      $(elem).css('filter', originalColor);
              }
      };
      setTimeout(callback(elem, originalOffset, originalColor), 500);
	}else{
      var originalColor = $(elem).css('background');
      var originalOffset = $(elem).offset();
      $(elem).css('background', color);

      var callback = function(elem, originalOffset, originariginalColor);
              }
      };
      setTimeout(callback(elem, originalOffset, originalColor), 500);
   }
}

function ta_getHeader(articleHeder) {
	if (articleHeder.indexOf('$$edition')!=-1) {
		var lastedit = localStorageX.getItem('last_edition');
		lastedit = lastedit.replace(unescape("%FC"),"u");
		lastedit = lastedit.replace(unescape("%E4"),"a");
		lastedit = lastedit.replace(/\-/g,"");
		lastedit = "logo_background_cippa.png";
		lastedit = lastedit.toLowerCase();
		/* Logo path customization using eeLayout */
		articleHeder = "<img id='logo' src='" + window.location.protocol + "//" + TA_DOMAIN + "/eeLayout/" + layoutStyle + "/" + layoutSubStyle + "/" + lastedit+"' style='max-height:50px; margin:10px;' >";
		articleHeder = articleHeder.replace(/\$\$edition/g,localStorageX.getItem('last_edition'));
	}
   if ( multiLogoHeder == 1 && xpaper != paper){
		var lastedit = localStorageX.getItem('last_edition'); // get current edition
		if(ediSearchFromSearch && ediSearchFromSearch != "")lastedit = ediSearchFromSearch;
		lastedit = lastedit.replace(unescape("%FC"),"u");
		lastedit = lastedit.replace(unescape("%E4"),"a");
		lastedit = "logo_"+ lastedit.replace(/\s/g,"")+".gif";
		lastedit = lastedit.toLowerCase();
		var mylogo = window.location.protocol + "//" + TA_DOMAIN + "/eeLayout/" + paper + "/1.0.a/images/webapp/banner.png";
		var myoriglogo = window.location.protocol + "//" + TA_DOMAIN + "/eeLayout/" + layoutStyle + "/" + layoutSubStyle + "/images/webapp/banner.png";
		articleHeder = "<img id='imagLogoArt' src='" + mylogo +"' style='max-width:100%;max-height:60px;margin:0;' onError="+ "'" + "this.onerror=null;this.src=" +"\""+  myoriglogo + "\""+ "';>";
	}else if ( multiLogoHeder == 1 ){
        var lastedit = localStorageX.getItem('last_edition'); // get current edition
        if(ediSearchFromSearch && ediSearchFromSearch != "")lastedit = ediSearchFromSearch;
        lastedit = lastedit.replace(unescape("%FC"),"u");
        lastedit = lastedit.replace(unescape("%E4"),"a");
        lastedit = "logo_"+ lastedit.replace(/\s/g,"")+".gif";
        lastedit = lastedit.toLowerCase();
        var mylogo = window.location.protocol + "//" + TA_DOMAIN + "/eeLayout/" + layoutStyle + "/" + layoutSubStyle + "/images/webapp/" + lastedit;
        var myoriglogo = window.location.protocol + "//" + TA_DOMAIN + "/eeLayout/" + layoutStyle + "/" + layoutSubStyle + "/images/webapp/banner.png";
        articleHeder = "<img id='imagLogoArt' src='" + mylogo +"' style='max-width:100%;max-height:60px;margin:0;' onError="+ "'" + "this.onerror=null;this.src=" +"\""+  myoriglogo + "\""+ "';>";
	}
   var hiddenStyle = ' style="display: none"';
   if (articleHeder != '') {
      hiddenStyle = '';
   }
   
   var readSpeakerBut = '';
	if(ipadTextSpeech == "readspeaker"){
       readSpeakerBut += '<div style="position:relative; margin-left:23px; top:25px;">'
       + '<div id="readspeaker_button1" class="rs_skip rsbtn rs_preserve" style="width: auto;">'
       + '<a rel="nofollow" class="rsbtn_play" accesskey="L" title="ReadSpeaker webReader إستمع إلى هذه الصفحةِ مستخدماً" href="//app-eu.readspeaker.com/cgi-bin/rsent?customerid=9522&amp;lang=ar_ar&amp;voice=Faris&amp;readid=articletext">'
       + '<span class="rsbtn_left rsimg rspart"><span class="rsbtn_text"><span>استمع</span></span></span>'
       + '<span class="rsbtn_right rsimg rsplay rspart"></span>'
       + '</a>'
       + '</div>'
       + '</div>'
    }
	if(articleOpenedInPopup == 1 && hiddenStyle == ""){
		hiddenStyle = ' style="float:left;"';
	}
   return '<div class="toc-top-header"' + hiddenStyle + '>' + readSpeakerBut + articleHeder + '</div>';
   if(isIphone)ret = "";
   return ret;

}

function ta_showFirstIndexArticle(pageId) {
   su_console('D','ta_showFirstIndexArticle');
      // Call to ajax sql-remote
      toLoad = BASE_AJAX_URL  +  '&action=sql-remote&operationSQL=pagesAndArticlesByPageAndType' +
                                 '&pageId=' + pageId +
                                 '&artType=' + artType +
                                 '&issue=' + escape(currentNewspaper.getIssue()) +
                                 '&editionForDB=' + cp_normalizeEditionForDbName(currentNewspaper.getCurrentPage().edition)
      $showFirstIndexArticle_success(pageId, data);
               },
               error: function(jqXHR, exception)
               {
                  su_console('E', '[ta_getAllPagesListViewIphone] Errore from WEB - Unable to read pages: ' + exception);
               }
            });
}

/********************
 * AJAX SUCCESS ta_showFirstIndexArticle
 ********************/
function ta_showFirstIndexArticle_success(pageId, results)
{
   su_console('D',"results of transaction: " + results.rows.length);
   if (results.rows.length > 0)
   {
      var row = results.rows.item(0);
      var title = row.title;
      $('#firstindex'+pageId).html(title.substr(0,100));
      $('#firstindex'+pageId).attr('on'+onclickORontouchend,
         OBJNAME('cp_fifopush')+"("+OBJNAME('LOAD_ART')+" , '"+row.pageId+"','"+currentNewspaper.issue+"', '"+row.filename+"', $('#titles'), "+OBJNAME('art_printArticle1')+", "+row.pageId+", "+row.xmlId+", null, 5);"
         );

   } else {
      su_console('D','table pages is empty');
   }
   art_refreshAreaText();
}

// ...Get the date in the right format
function formatDate(pValue,dateType,showWeekDay,longWeekName) {
   var finalVal = "";
   var dayValue = "";
   dayValue = pValue.substring(pValue.lastIndexOf("/")+1);
   var lY = parseInt(dayValue.substr(0,4),10);
   var lM = parseInt(dayValue.substr(4,2),10) -1 ;
   var lD = parseInt(dayValue.substr(6,2),10);
   tmpDate = new Date(lY, lM, lD);
   tmpDay = (tmpDate.getDay()+6)%7;
   // ...write the date with the right format
   switch (dateType) { // EUROPE / US / editions
      case "0":
         finalVal = dayValue.substr(6,2)+ "/" + dayValue.substr(4,2) + "/" + dayValue.substr(0,4);
         break; //dd/mm
      case "1":
         finalVal = dayValue.substr(4,2)+ "/" + dayValue.substr(6,2) + "/" + dayValue.substr(0,4);
         break;  //mm/dd
      case "2":
         finalVal = dayValue.substring(4, dayValue.length)+ " " + dayValue.substr(0,4);
         break;
      case "4":
         finalVal = monthNames[dayValue.substr(4,2)-1]+ " " + dayValue.substr(0,4);
         break;
      default:
         finalVal = dayValue;
         break;
   }
   if (showWeekDay=="1") { // Mon  / Monday
      if (longWeekName=="0") {
         var dayOfWeek = weekDays;
      } else {
         var dayOfWeek = weekDaysL;
      }
      finalVal = dayOfWeek[tmpDay] + " " + finalVal;
   }
   return finalVal;
}

function ta_showWeekDay(year,month,day){
	var d = new Date(parseInt(year),parseInt(month)-1,parseInt(day));
	var d_number = d.getDay();
	var d_name = "";
	if(d_number == 0){
		d_name = weekDaysL[6];
	}else{
		d_name = weekDaysL[d_number-1];
	}
	return d_name;
}

function ta_getFormattedDate(dateIn) {
	if(typeof(dateIn) === "undefined"){
		if(currentNewspaper.getIssue() == null) return "";
		dateIn = currentNewspaper.getIssue();
	}
	var dateString = "";
	var day = dateIn.substr(6,2);
	var month = dateIn.substr(4,2);
	var year = dateIn.substr(0,4);
	switch(DATE_FORMAT){
		case "0"://0=dd.mm.yyyy
			dateString = day+"."+month+"."+year;
			break;
		case "1"://1=mm/dd/yyyy
			dateString = month+"/"+day+"/"+year;
			break;
		case "2"://2=edition year
			dateString = year;
			break;
		case "3"://as is
			// dateString = paper;
			dateString = day+"."+month+"."+year;
			break;
		case "4"://dd/mm/yyyy
			//dateString = day+"/"+month+"/"+year;
			dateString = __MONTH_NAMES[parseInt(month,10)-1]+" "+year;
			break;
		case "5"://mm.dd.yyyy
			dateString = month+"."+day+"."+year;
			break;
		case "14"://mm.dd.yyyy
			dateString = day+" "+__MONTH_NAMES[parseInt(month,10)-1]+" "+year;
			break;
		default:
			dateString = dateIn;
			break;
	}
	if(blindMode){
		dateString = day + " " +__MONTH_NAMES[parseInt(month,10)-1] + " " +year;
	}
	if(parseInt(SHOW_WEEK,10)){
		if (DATE_FORMAT == "14") {
			dateString = ta_showWeekDay(year,month,day) + "&#1548; " + dateString;
		} else {
			dateString = ta_showWeekDay(year,ackToPageIphoneButton() {
   var html = '';
   return html;
}

var addSEPage = false;
var arrIndex = new Array();
function ta_loadSpecialSections(showSections) {
	$('#divSpecialSections').html(' ');	
	if(specialBeforeIndex == "1" || sectionIndexTypeHorizontal == "1"){
		showSections = false;
	}
	try{
		var fatherEdition = "";
		var editionfromcalling_cookie =  "";
		var pSetupCheck = pSetup;
		var readcookie = false;
		if(pSetupCheck.indexOf("-xp-")>0) {
			if ( pSetupCheck.split("-xp-")[0] != pSetupCheck.split("-xp-")[1]){
				// if (pSetupCheck.split("-xp-")[1].indexOf('_se') != -1 ){
				readcookie = true;
				// }
			}
		}
		if( readcookie && cookie_get("editionfromcalling")){
			editionfromcalling_cookie = cookie_get("editionfromcalling").split(",");
			fatherEdition = editionfromcalling_cookie[0];
		}else{
			fatherEdition = currentNewspaper.edition;
			var expdate = new Date();
			expdate.setTime(expdate.getTime() + (86400 * 1000 * 2000)); 
			cookie_set("editionfromcalling","",expdate,"/");
		}
		var callAjax = BASE_AJAX_URL;
		callAjax = updateQueryStringParameter(callAjax,'action',"indexspecial");
		callAjax = updateQueryStringParameter(callAjax,'date',encodeURIComponent(currentNewspaper.getIssue()));
		callAjax = updateQueryStringParameter(callAjax,'edition',unescape(fatherEdition));
		callAjax = updateQueryStringParameter(callAjax,'currentedition',unescape(currentNewspaper.edition));
		callAjax = updateQueryStringParameter(callAjax,'showSections',((showSections && sectionIndexVertical == "0")?1:0));
		callAjax = updateQueryStringParameter(callAjax,'accesibilityMode',(blindMode?1:0));
		if(flippTest == "1"){
			callAjax = updateQueryStringParameter(callAjax,'flipp-content-code','publisher-test');
		}
		callAjax = normalizeCallForCDN(callAjax,true);
		callAjax = updateQueryStringParameter(callAjax,'cc',"1");
		callAjax = updateQueryStringParameter(callAjax,'TOKEN',"");
		callAjax = updateQueryStringParameter(callAjax,'token',"");
		callAjax = updateQueryStringParameter(callAjax,'TAUID',"");
	    callAjax = updateQueryStringParameter(callAjax, "editionfromcalling", encodeURIComponent(cookie_get("editionfromcalling")));
		// console.log(fatherEdition);
		if(!currentNewspaper.issue)return;
		if(arrIndex[callAjax]){
			if(arrIndex[callAjax] != "loading")showIndexSpecial(arrIndex[callAjax],showSections);
		}else{
			arrIndex[callAjax] = "loading";
			$.ajax({
				url : callAjax,
				success : function(data){
					if(isMobile())data = replaceAll(data,"onclick=","ontouchend=");
					arrIndex[callAjax] = data;
					showIndexSpecial(data,showSections);
				},
				error: function(jqXHR, exception){
					su_console('E', '[ta_loadSpecialSections] Error from WEB: ' + exception);
				},
				dataType: "html" 
			});
		}
	}catch(e){

	}
}

function showIndexSpecial(data,showSections){
	//check if at leats a special section is returned
	if (data.indexOf("<!-- Special Section -->")!=-1){
		$('#divSpecialSections').html(data);
		if($("#pageSE").length == 0 && currentNewspaper.newspaper.length>0){
			addSEPage = $("#ima_"+(currentNewspaper.newspaper.length-1)).clone();
			addSEPage[0].id = "pageSE";
			$('#slideGlossy').append(addSEPage);
			$("#pageSE").html(data);
			$("#pageSE").css("overflowY","auto");
			$("#pageSE").css("overflowX","hidden");
			$("#pageSE").width($("#pageSE").width());
			$("#pageSE").height($("#areaPage").height());
			if($("#contSlide").height() > 0 && $("#contSlide").height()<$("#areaPage").height())$("#pageSE").height($("#contSlide").height());
			$('#pageSE').css('cursor','pointer !important');
			$('#pageButtonForward').show();
			$('#sectionButtonForward').show();			
			if(specialEditionButton=="1")$('#specialEditionButton').show();
			$('#pageSE').find(".clear").remove();
			$('#pageSE').find(".mainSpecialDiv").width("33%");
			$('#pageSE').find(".mainSpecialDiv").css("float","left");
			$('#pageSE').find(".mainSpecialDiv").css("text-align","center");
			$('#pageSE').find(".mainSpecialDiv").css("padding-bottom","10px");
			$('#pageSE').find(".divSpecial").css("float","none");
			$('#pageSE').find(".divdatespan").css("float","none");
			$('#pageSE').find(".divdatespan").css("margin","0");
			$('#pageSE').find(".divdatespan").css("border","0");
			$('#pageSE').find(".divPageSpecial").css("margin","0");
			$('#pageSE').find(".divPageSpecial").css("padding","0");
			$('#pageSE').find(".divImgSpecial").css("border","0");
			$('#pageSE').find(".divImgSpecial").css("padding","0");
			$('#pageSE').find(".divImgSpecial").css("float","none");
			$('#pageSE').find(".divImgSpecial").width("100%")(".mainSpecialDiv").map(function (){return $(this).height();}).get()) + 20;
			$('#pageSE').find(".mainSpecialDiv").height(HDiv);
		}
		if (showSections){
			//we are showing in the article mode
			art_refreshAreaText();
		}else{
			//in photodirectory
			$('div#slidePhodir').height($('div#slidePhodir').height()+500);
		}
	} else {
		// hide the SE button if there are no SS
		$('#specialEditionButton').hide();
	}
	var pSetupWork = pSetup.split("-xp-");
	if(returnButton == "1" && pSetupWork[1] && pSetupWork[1] != pSetupWork[0] && cookie_get("editionfromcalling") != "" && cookie_get("editionfromcalling") != null){
		var editionfromcalling = cookie_get("editionfromcalling").split(",");
		$("#returnButton").unbind( "click" );
		$("#returnButton").click(function(){ changeIssue(editionfromcalling[3],editionfromcalling[2],decodeURIComponent(editionfromcalling[0]),editionfromcalling[5],"",true,editionfromcalling[0],""); });
		$("#returnButton").show();
	}else if(returnButton == "1" && issueIsDemo && (protectSite != "0" && (!localStorageX.getItem("TAUID") || localStorageX.getItem("TAUID") == ""))){
		$("#returnButton").unbind( "click" );
		$("#returnButton").click(function(){ hybrid_openOptionPage(); });
		$("#returnButton").show();
	}else if(returnButton == "1" && pSetupWork[1] && pSetupWork[1] != pSetupWork[0] && showReturnButton == "1" && uaisPhone()){
		$("("#returnButton").click(function(){ returnFirstIssueLoaded()});
		$("#returnButton").show();
		if(verticalMode == "1"){
			$("#returnButton").css("top","5px");
			$("#returnButton").css("right","5px");
		}else{
			$("#returnButton").css("top","");
			$("#returnButton").css("right","");
		}
	}else{
		$("#returnButton").hide();
	}
	if(isMobile()){
		if(layoutStyleMode == "1"){
			$("#returnButton").html("Close " + currentNewspaper.edition + '<object id="graphicbutton" data = "'+versionUrl+'/code/icons/layoutStyleMode1/close.svg"></object>');
		}else{
			$("#returnButton").html("Close " + currentNewspaper.edition + '<img src="'+iconClose+'" border="0" id="graphicbutton">');
		}
	}else{
		$("#returnButton").hide();
	}
}

function returnFirstIssueLoaded(){
	var pSetupWork = pSetup.split("-xp-");
	pSetup = pSetupWork[0];
	BASE_AJAX_URL = updateQueryStringParameter(BASE_AJAX_URL,'pSetup',pSetup);
	paper = paperFirstLoaded;
	currentNewspaper.edition = editionFirstLoaded;
	cp_loadNewspaper_load(issueFirstLoaded, editionFirstLoaded, prechargeFirstLoaded, mtimedbFirstLoaded);
}

function changeIssue(pSetupPass,issuePass,editionPass,paperPass,pagePass,saveCookie,parentedition,artidPass){
	if(typeof(event)!="undefined"){
		event.preventDefault();
		event.stopPropagation();
	}
	saveCookie = typeof saveCookie !== 'undefined' ? saveCookie : true;
	if(typeof(pagePass)!="undefined" && pagePass!="")goToPage = pagePass;
	if(typeof(artidPass)!="undefined" && artidPass!="")gotoArtid = artidPass;
	var pSetupCheck = pSetup;
	if(pSetupCheck.indexOf("-xp-")>0)pSetupCheck = pSetupCheck.split("-xp-")[1];
	var initpageXpaperNotViewArray = initpageXpaperNotView.split(",");
	for(var i=0;i<initpageXpaperNotViewArray.length;i++){
		if(initpageXpaperNotViewArray[0] == pSetupCheck){
			saveCookie = false;			
		}
	}
	if(saveCookie){
		var expdate = new Date();
		expdate.setTime(expdate.getTime() + (86400 * 1000 * 2000)); 
		if (parentedition == '' || typeof(parentedition) == 'undefined' || parentedition == null){
			parentedition = currentNewspaper.edition;
		}
		// ie9 trick
		if (!window.location.origin) {
			location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
	   }
		if(currentNewspaper.newspaper[0]){
			cookie_set("editionfromcalling",
				//currentNewspaper.edition	+","+
				encodeURI(parentedition) +","+
				location.origin+baseUrl+"/"+paper+"/"+currentNewspaper.issue+"/"+currentNewspaper.newspaper[0].filename+"/bb.low.jpg"	+","+
				currentNewspaper.issue	+","+
				pSetupCheck +","+
				baseUrl+"/"+paper+"/"+","+
				paper
			,expdate,"/");
		}
	}
	paper = paperPass;
	FILEPATH = baseUrl + '/' + paper + '/';
	if(pSetup.indexOf("-xp-")>0){
		if(pSetup.split("-xp-")[0] == pSetupPass){
			pSetup = pSetupPass;
                  xbaseUrl = "";
		}else{
			pSetup = pSetup.split("-xp-")[0] + "-xp-" + pSetupPass;
                  xbaseUrl = const_xbaseUrl;
		}
	}else{
		pSetup = pSetupCfgParam + "-xp-" + pSetupPass;
            xbaseUrl = const_xbaseUrl;
	}
	dragging = false;
	editionPass = decodeURIComponent(editionPass);
	dwnfunc_downloadIssueAndEditionFromWeb(issuePass,editionPass);	
	event = event || window.event;
	if (typeof(event) != "undefined" && typeof (event.stopPropagation) != "undefined" ){
		event.stopPropagation();
	}
}
