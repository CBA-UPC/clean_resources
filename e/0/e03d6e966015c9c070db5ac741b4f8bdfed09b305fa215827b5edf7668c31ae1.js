imod = imod || {};
imod.Designations = imod.Designations || {};

imod.Designations.AdvancedSelect = {
	Controls: [],
	FirstTabStop: null,
	LastTabStop: null
};

jQuery(document).ready(function () {
	var focusableControlsQuery = 'div.arrow, a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
	imod.log('Designations Advanced Select document ready called.');
    // let's figure out which chevrons to show. If the designation doesn't have any children we will hide the div from the user.
    // the array of sections
	ShowHideNoResults();

	var advancedSelectModal = jQuery('#divDesignationsAdvancedSelect');
	advancedSelectModal.keydown(function(e) {
		// Check for TAB key press
		if (e.keyCode === 9) {
			var activeElement = jQuery(':focus');


			// SHIFT + TAB
			if (e.shiftKey) {
				if (activeElement.is(imod.Designations.AdvancedSelect.FirstTabStop)) {
					e.preventDefault();
					imod.Designations.AdvancedSelect.LastTabStop.focus();
				}

				// TAB
			} else {
				if (activeElement.is(imod.Designations.AdvancedSelect.LastTabStop)) {
					e.preventDefault();
					imod.Designations.AdvancedSelect.FirstTabStop.focus();
				}
			}
		}

		// ESCAPE
		if (e.keyCode === 27) {
			CloseModal();
		}
	});

	jQuery('div.arrow').keydown(function (e) {
		if (e.key === ' ' || e.key === 'Enter') {
			e.preventDefault();
			ShowSubSection(this);
		}
	});
});}
function DesignationCheckChange (chk)
{
	var checkbox = jQuery(chk);
	var designationIds = jQuery("#" + hidAdvancedSelectCache).val().split(',');
	// if the checkbox Id exists in the array we need to remove it from cache
	var wasChecked = jQuery.inArray(checkbox.val(), designationIds) > -1;

	var parentClassName = checkbox.parent().prop("className");
	if (checkbox.attr("checked")) {
		parentClassName += " selected";
	} else {
		parentClassName = parentClassName.replace(/\sselected/gi, "");
	}
	checkbox.parent().prop("className", parentClassName);

	if (wasChecked) {
		
		checkbox.attr('checked', false);
		jQuery("#" + hidAdvancedSelectCache).val(jQuery.grep(designationIds,
	}));
		checkbox.attr('checked', false);
		var designationsRow = jQuery(".desRow[did='" + checkbox.val() + "']");
		designationsRow.hide();

		var instructionsRow = designationsRow.next();
		instructionsRow.hide();

		CheckBothTotals();
	}
	ShowUpdateSelectedCountText();
}
function ShowUpdateSelectedCountText ()
{
	var selectedCount = GetCheckedItems().length;
	var selectedCountText = DesignationsAdvancedSelect_SelectedCountVerbiage.replace('[##]', selectedCount);
	// show the selected count to the user.
	jQuery('div.imod_designations_wrapper div.notification-section-top span').html(selectedCountText);
	jQuery('div.imod_designations_wrapper div.notification-section-bottom span').html(selectedCountText);
}
function GetCheckedItems ()
{
	var checkedItems = jQuery(".main-section input:checkbox:checked.chkDesignation").ma}).get();
	return RemoveDuplicates(checkedItems);
}
function btnContinueClick() {
	jQuery("#btnContinue").prop('disabled', true);
	var checkedItems = GetCheckedItems();
	DesignationsAdvancedContinue(checkedItems);
    CloseModal();
}
function CloseModal() {
	jQuery('#divDesignationsAdvancedSelect').attr('aria-hidden', 'true');
	if (imod.RolloutFlags.CustomDesignationsModal) {
		document.getElementById("divDesignationsAdvancedSelect").style.display = "none";
		imod.General.NormalScreen();
	}
	else {
		rmDesignationsAdvancedSelect.Close();
	}
	focusedElementBeforeAdvancedSelectModal.focus();
}}
function SearchDesignations(sender, event){
	var searchText = jQuery(sender).val().toLowerCase();
	if (searchText.length < 2) {
		var key = event.keyCode;
		if (key == 8 || key == 46) {
			CancelSearch(event);
		} else if (searchText.length <= 1){
			CancelSearch(event);
		}
    }
    else{
		ShowHideMatchedResults(jQuery.trim(searchText));
    }
}
function ShowHideMatchedResults (searchText){
	ShowHideCancelIcon(jQuery.trim(searchText));
	var lis = jQuery('div.imod_designations_wrapper div.main-section fieldset ul li');
	var lisLength = lis.length;
    var subSectionsToShow = [];
	var visibleListItems = [];
	for (var i = lisLength; i--;)
	{
	    var searchableText = jQuery(lis[i]).find('label').html();
	    if (searchableText.toLowerCase().indexOf(searchText) > -1) {
	    	lis[i].style.display = '';
		    visibleListItems.push(lis[i]);
	    }
        else {
	    	lis[i].style.display = "none";
        }
    }
    var fieldSets = jQuery('div.imod_designations_wrapper div.main-section fieldset');
	var fieldSetsLength = fieldSets.length;
	for (var i = fieldSetsLength; i--;)
	{
        var hasContent = false;
        var isMatchingFieldset = false;
        var fs = fieldSets[i];
        var fsa = fs.getElementsByTagName("a");
	    var fsaLength = fsa.length;
        var fslis = fs.getElementsByTagName("li");
        var fslisLength = fslis.length;
        for (var j = fsaLength; j--;)
        {
            if (fsa[j].innerHTML.toLowerCase().indexOf(searchText) > -1) {
                isMatchingFieldset = true;
            }
            else {
            	for (var k = fslisLength; k--;)
            	{
                    if (fslis[k].style.display != "none") {
                        hasContent = true;
                        break;
                    }
                }
            }
        }
        fs.style.display = (isMatchingFieldset || hasContent) ? '' : "none";
        // So if we have a matching field set, and the content has been hidden we need to show it again.
        if (isMatchingFieldset)
        {
        	for (var l = fslisLength; l--;)
        	{
                if (fslis[l].style.display == "none") {
                    fslis[l].style.display = '';
                }
            }
        }
        if (hasContent){
            // The fieldset has content so build a array of the fieldsets that need to be expanded.
            subSectionsToShow.push(fs);
        }
    }
    ShowMatchingContentSubSections(subSectionsToShow, visibleListItems);
}

function ShowMatchingContentSubSections(subSectionsToShow, visibleListItems)
{
	var visibleListItemsLength = visibleListItems.length;
	for (var p = visibleListItemsLength; p--;)
	{
		var element = jQuery(visibleListItems[p]);
		var lisClass = element.attr('class');
		if (lisClass == 'section parent' && element.children().length > 0) {
			// show all child li in this list because the parent matches the search text.
			jQuery(visibleListItems[p]).find('li.child').show();
		}
	}
	// Show the subsections with matching content
	for (var n = 0; n < subSectionsToShow.length; n++) {
		var subSections = jQuery(subSectionsToShow[n]).find('ul.sub-section');
		var subSectionsLength = subSections.length;
		for (var m = subSectionsLength; m--;)
		{
			var parent = subSections[m].parentNode;
			var subLis = jQuery(subSections[m]).find('li.child');
			var subLisLength = subLis.length;
			for (var o = subLisLength; o--;)
			{
				if (subLis[o].style.display == '' && parent.style.display == 'none') {
					parent.style.display = '';
					subSections[m].style.display = 'block';
					ChangeChevronImage(jQuery(parent), true);
				}
			}
		}
	}
	ShowHideCancelIcon();
	InitFlowLayout(subSectionsToShow);
}
function InitFlowLayout(subSectionsToShow) {
	// loop through each feildset and get the visible list items that are parents.
	var visibleItems = [];
	jQuery(subSectionsToShow).each(function (i){
		var parentListItems = jQuery(subSectionsToShow[i]).find('li.parent');
		parentListItems.each(function (j){
			if (parentListItems[j].style.display == '' || parentListItems[j].style.display == 'block') {
				visibleItems.push(parentListItems[j]);
			}
		});
		jQuery(visibleItems).each(function (k) {
		    if (k % 2 == 0) {
		        jQuery(this).addClass('odd');
		    }
		    else {
		        jQuery(this).removeClass('odd');
		    }
		});
		visibleItems = [];
	});
}
function ShowHideNoResults(){
    var visibleItems = 0;
    var fieldSets = jQuery('div.imod_designations_wrapper div.main-section fieldset').each(function (){
        if (this.style.display == ''){
            visibleItems++;
        }
    });
    if (visibleItems == 0){
        jQuery(".NoResults").show();
    }
    else{
        jQuery(".NoResults").hide();
    }
}
function ChangeChevronImage(sender, expand){
	var img = sender.find('img');
	if (img == undefined) return;
	var src = img.attr('src');
	var alt = img.attr('alt');
	if (src == undefined) return;
	var isExpanded = expand != undefined ? expand : src.indexOf('expand') > 0;

	if (isExpanded) {
		// change the image to the collapse image
		jQuery(img).attr('src', src.replace('expand', 'collapse'));
		// Find the child element and expand it.
		jQuery(sender).parent('li').find("ul.sub-section").show('fast');
		jQuery('div.arrow').attr('aria-expanded', true);
		jQuery(img).attr('alt', alt.replace("Expand to view funds", "Collapse funds"));
	}
	else {
		// change the image to the expand image
		jQuery(img).attr('src', src.replace('collapse', 'expand'));
		// Find the child element and expand it.
		jQuery(sender).parent('li').find("ul.sub-section").hide('fast');
		jQuery('div.arrow').attr('aria-expanded', false);
		jQuery(img).attr('alt', alt.replace("Collapse funds", "Expand to view funds"));
	}
}
function ShowHideCancelIcon(searchText)
{
	if (searchText == undefined) return null;
    if (searchText.length > 0) {
    	jQuery("div.imod_designations_wrapper div.search-section div.search-box div.search-icons i.icon-remove").show();
	    jQuery("div.imod_designations_wrapper div.search-section div.search-box div.search-icons i.icon-search").hide();
                               }
    else{
    	jQuery("div.imod_designations_wrapper div.search-section div.search-box div.search-icons i.icon-remove").hide();
    	jQuery("div.imod_designations_wrapper div.search-section div.search-box div.search-icons i.icon-search").show();
    }
	return null;
}
function CancelSearch(event){
	// clear the search text box 
	// only if the clear search button was clicked.
	var target, clickedTagName;
	if (event != 'modalClose')
	{
		target = (event.currentTarget) ? event.currentTarget : event.srcElement;
		clickedTagName = jQuery(target).prop('tagName').toLowerCase();
	}

	if ((event.type == 'click' && clickedTagName == 'i') || event == 'modalClose')
	{
		var filterTextBox = jQuery('div.imod_designations_wrapper div.search-section div.search-box input[type=text]');
		filterTextBox.val('');
		filterTextBox.focus();
		jQuery('div.imod_designations_wrapper div.main-section fieldset ul li.parent').removeClass('odd');
	}
	// hide all the sub sections again
	var subSections = jQuery('ul.sub-section');
	var subSectionsLength = subSections.length;
	subSections.hide();
	jQuery('div.imod_designations_wrapper div.main-section fieldset').show();
	jQuery('div.imod_designations_wrapper div.main-section fieldset ul li').show();
	ShowHideNoResults();
	for (var i = subSectionsLength; i--;)
	{
		ChangeChevronImage(jQuery(subSections[i]).parent(), false);
	}
	var searchText = event.type == 'click' || event == 'modalClose' ? '' : jQuery('div.imod_designations_wrapper div.search-section div.search-box .search-box-input').val();
	ShowHideCancelIcon(searchText);
}
function CheckAdvancedSelectDesignationsFromCache(){
	var designationIds = jQuery("#" + hidAdvancedSelectCache).val().split(',');
	var didLength = designationIds.length;
	UncheckAllAdvancedDesignationCheckboxes();
    // check the checkboxes for the inputs that match the ids in the cache.
	for (var i = didLength; i--;)
	{
        var input = jQuery("div.main-section input[value='" + designationIds[i] + "']");
        input.attr('checked', true);
        var ul = input.closest('ul[class^="sub-section"]');
        if (ul != undefined) {
            ul.css('display', 'block');
        	// have to change the chevron image to match
	        ChangeChevronImage(ul.parent(), true);
        }
    }
	ShowUpdateSelectedCountText();
                                                   }}
if (window.IModController) IModController.scriptLoadedNotification("/iDBMS/ui/commerce/DesignationsAdvancedSelect.js");

function ToggleViewFunds() {
    CheckAdvancedSelectDesignationsFromCache();
	jQuery('#imod_designations_wrapper').toggle();
	if (jQuery('#imod_designations_wrapper').is(':visible')) {
		ScrollToAnchor2();
        jQuery('#imod_designations_wrapper').attr("aria-hidden", "false");
        jQuery('#divDesignationsAdvancedSelect').attr("aria-hidden", "false");
		jQuery("#btnContinue").prop('disabled', false);
        jQuery("input[id*='btnDefault'").prop('disabled', true);
        jQuery("a[id*='_lbnViewAllFunds']").attr("aria-expanded", "true");
	}
	else {
        jQuery('#imod_designations_wrapper').attr("aria-hidden", "true");
        jQuery('#divDesignationsAdvancedSelect').attr("aria-hidden", "true");
		jQuery("#btnContinue").prop('disabled', true);
        jQuery("input[id*='btnDefault'").prop('disabled', false);
        jQuery("a[id*='_lbnViewAllFunds']").attr("aria-expanded", "false");
	}
}



function hideViewAll() {
	jQuery('#imod_designations_wrapper').hide();
	jQuery("#btnContinue").prop('disabled', true);
    clearAllCheckboxes();
    jQuery("input[id*='btnDefault'").prop('disabled', false);

}

function btnSaveSelection() {
    var checkedItems = GetCheckedItems();
    if (checkedItems.length > 0) {
        jQuery("input[type='radio'][value='-1']").attr('checked', true);
    }
	jQuery("#btnContinue").prop('disabled', true);
	DesignationsAdvancedContinue(checkedItems);
	jQuery('#imod_designations_wrapper').hide();
	jQuery('#divButtons').attr("style", "display:block");
    jQuery('#imod_designations_wrapper').attr("aria-hidden", "true");
	jQuery("input[id*='btnDefault'").prop('disabled', false);
    jQuery("a[id*='_lbnViewAllFunds']").attr("aria-expanded", "false");

}
}
function closeViewAll() {
	jQuery('#imod_designations_wrapper').hide();
	jQuery('#imod_designations_wrapper').attr("aria-hidden","true");
	jQuery('#divButtons').attr("style", "display:block");
    jQuery("#btnContinue").prop('disabled', true);
    jQuery("input[id*='btnDefault'").prop('disabled', false);
	jQuery("input[type='radio'][value='-1']").attr('checked', false);
    jQuery("a[id*='_lbnViewAllFunds']").attr("aria-expanded", "false");
}

function ScrollToAnchor2() {
	var pdid = imod.Browser.Request.QueryString["pdid"];
	if (!pdid) return;

	var mainSectionSelector = ".main-section";
	
	var scrollingDiv = jQuery(mainSectionSelector);
	var anchorToScrollTo = jQuery(mainSectionSelector + " a[name='" + "pdid_" + pdid + "']");
	if (anchorToScrollTo.length === 0) return;
	if (scrollingDiv.length === 0) return;
	var positionToScrollTo = anchorToScrollTo.offset().top - scrollingDiv.offset().top + scrollingDiv.scrollTop();
	scrollingDiv.animate({ scrollTop: positionToScrollTo }, 400);
}