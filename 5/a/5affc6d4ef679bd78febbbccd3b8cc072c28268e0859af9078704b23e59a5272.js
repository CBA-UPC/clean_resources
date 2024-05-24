(function() {
var intent = function() {
//Start Interval Clear
clearInterval(int);
//End Interval Clear
jQuery(window).trigger("duration30sec");
}
//Start Interval
var int = setInterval(intent, 30000);
//End Interval
}());