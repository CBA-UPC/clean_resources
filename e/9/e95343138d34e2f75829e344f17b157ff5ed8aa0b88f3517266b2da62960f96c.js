var hasoffers_aff_id = getUrlVars()["aff_id"];
var hasoffers_offer_id = getUrlVars()["offer_id"];
var hasoffers_source = getUrlVars()["source"];
var hasoffers_aff_sub = getUrlVars()["aff_sub"];
var hasoffers_aff_sub2 = getUrlVars()["aff_sub2"];
var hasoffers_aff_sub3 = getUrlVars()["aff_sub3"];
var hasoffers_aff_sub4 = getUrlVars()["aff_sub4"];
var hasoffers_aff_sub5 = getUrlVars()["aff_sub5"];
var hasoffers_aff_ref = getUrlVars()["aff_ref"];
var hasoffers_url_id = getUrlVars()["url_id"];
var hasoffers_file_id = getUrlVars()["file_id"];

if( ((typeof (hasoffers_aff_id) != "undefined" && hasoffers_aff_id !== undefined) || ( typeof (hasoffers_aff_ref) != "undefined" && hasoffers_aff_ref !== undefined )) && (typeof (hasoffers_offer_id) != "undefined" && hasoffers_offer_id !== undefined) ) {

	var hasoffers_click = "";
	
	if (typeof (hasoffers_aff_id) != "undefined" && hasoffers_aff_id !== undefined && IsNumeric(hasoffers_aff_id)) {
		hasoffers_click = hasoffers_domain+"/aff_c?offer_id="+hasoffers_offer_id+"&aff_id="+hasoffers_aff_id;
	}else if (typeof (hasoffers_aff_ref) != "undefined" && hasoffers_aff_ref !== undefined) {
		hasoffers_click = hasoffers_domain+"/aff_c?offer_id="+hasoffers_offer_id+"&aff_ref="+hasoffers_aff_ref;
	}
		
	if(typeof (hasoffers_source) != "undefined" && hasoffers_source !== undefined ) {
		hasoffers_click = hasoffers_click+"&source="+hasoffers_source;
	}
	if(typeof (hasoffers_aff_sub) != "undefined" && hasoffers_aff_sub !== undefined ) {
		hasoffers_click = hasoffers_click+"&aff_sub="+hasoffers_aff_sub;
	}
	if(typeof (hasoffers_aff_sub2) != "undefined" && hasoffers_aff_sub2 !== undefined ) {
		hasoffers_click = hasoffers_click+"&aff_sub2="+hasoffers_aff_sub2;
	}
	if(typeof (hasoffers_aff_sub3) != "undefined" && hasoffers_aff_sub3 !== undefined ) {
		hasoffers_click = hasoffers_click+"&aff_sub3="+hasoffers_aff_sub3;
	}
	if(typeof (hasoffers_aff_sub4) != "undefined" && hasoffers_aff_sub4 !== undefined ) {
		hasoffers_click = hasoffers_click+"&aff_sub4="+hasoffers_aff_sub4;
	}
	if(typeof (hasoffers_aff_sub5) != "undefined" && hasoffers_aff_sub5 !== undefined ) {
		hasoffers_click = hasoffers_click+"&aff_sub5="+hasoffers_aff_sub5;
	}
	if(typeof (hasoffers_url_id) != "undefined" && hasoffers_url_id !== undefined ) {
		hasoffers_click = hasoffers_click+"&url_id="+hasoffers_url_id;
	}
	if(typeof (hasoffers_file_id) != "undefined" && hasoffers_file_id !== undefined ) {
		hasoffers_click = hasoffers_click+"&file_id="+hasoffers_file_id;
	}

	if(typeof (hasoffers_click) != "undefined" && hasoffers_click != "" ) {
		document.write('<img src="'+hasoffers_click+'" width="1" height="1" border="0" />');
	}
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, ;
    return vars;
}

function IsNumeric(input)
{
    return (input - 0) == input && input.length > 0;
}
