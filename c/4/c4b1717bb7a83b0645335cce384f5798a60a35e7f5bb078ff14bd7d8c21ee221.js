(function() {
var intent = function() {
//Start Interval Clear
clearInterval(int);
//End Interval Clear
jQuery(window).trigger("duration5sec");
}
//Start Interval
var int = setInterval(intent, 5000);
//End Interval
}());