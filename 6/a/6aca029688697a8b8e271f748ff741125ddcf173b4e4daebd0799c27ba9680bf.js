(function() {
var intent = function() {
//Start Interval Clear
clearInterval(int);
//End Interval Clear
jQuery(window).trigger("duration60sec");
}
//Start Interval
var int = setInterval(intent, 60000);
//End Interval
}());