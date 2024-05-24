function getAfpadgCurrentDayId() {

	var date = new Date();
	var yyyy = (date.getFullYear() + "");
	var mm = (date.getMonth() + 1);
	if (mm < 10) {
		mm = "0" + mm
	}
	var dd = date.getDate();
	if (dd < 10) {
		dd = "0" + dd
	}
	var hh = date.getHours();
	if (hh < 10) {
		hh = "0" + hh
	}
	return parseInt(yyyy + "" + mm + "" + dd + "" + hh);
}

var adgsrvrUrl = "";
if (window.location.protocol == "https:") {
	adgsrvrUrl = "https://adgebra.co.in";
} else {
	adgsrvrUrl = "https://adgebra.co.in";
}

var scr = document.createElement("script");
/*hrId is for cache Buster*/
scr.src=adgsrvrUrl+"/afph/afphChild.js?hrId="+getAfpadgCurrentDayId();
document.head.appendChild(scr);