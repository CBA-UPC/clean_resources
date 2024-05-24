
//  The TrafficCookie object handles the "tfx" cookie, which is used to keep track of traffic "touches".
//
//  TrafficCookie usage:
//      Constructor:
//          var trafficCookie = new TrafficCookie()
//      Functions:
//          trafficCookie.addTouch(trafficMedium, trafficSource, timeStamp, domainName)
//          trafficCookie.getAllTouches()
//          trafficCookie.getLastTouch()
//
TrafficCookie.prototype.sameSessionTouchDuration = 30*60;//time in seconds
TrafficCookie.prototype.sameTouchDuration = 5*60;//time in seconds
TrafficCookie.prototype.ADaySessionTouchCookieDuration = 24*60*60;//time in seconds
TrafficCookie.prototype.DIRECT = 6;
TrafficCookie.prototype.enableADaySessionTouchCookie = true;
TrafficCookie.prototype.enableSameSessionTouchCookie = false;
TrafficCookie.prototype.cpDomain = function(){
   if(window.location.host.indexOf(".dev") > 0)
   	return ".dev"
   return ".cafepress.";

}

// If tfx_session cookie does not exist, this method adds new touch to existing touches in cookie and cookie will be rewritten with new value
// as follows:
//      - traffic_medium_no in new touch will not be validated
//      - traffic_source in new touch will be truncated if greater than 50 chars
//      - total number of touches will be limited to TOUCH_LIMIT
// If tfx_touch cookie is add or rewritten, the tfx_session cookie will be created.
TrafficCookie.prototype.addTouch = function() {
    var tfxSessionCookie = getCookieByName(this.TFX_SESSION_COOKIE_NAME);
    
    if (tfxSessionCookie && tfxSessionCookie != "" && tfxSessionCookie != 'undefined') {
        var currentTouch = tfxSessionCookie.split(",");

        if (currentTouch.length < 5) {
            currentTouch[4] = currentTouch[4];
            currentTouch[3] = "";
        }

        var allTouches = this.constructCookieValue(currentTouch);

        var expDate = new Date();
        var year = expDate.getFullYear();
        expDate.setFullYear(year + 20);

        document.cookie = this.TFX_COOKIE_NAME + "=" + allTouches +
                        "; expires=" + expDate.toUTCString() +
                        "; domain=" + currentTouch[currentTouch.length-1] +
                        "; path=/";
                        

        var now = new Date();
	now.setTime(now.getTime() + 1000*this.sameSessionTouchDuration);
	
        document.cookie = this.TFX_SESSION_COOKIE_NAME + "=" + "" +
                        (this.enableSameSessionTouchCookie)?("; expires=" + now.toUTCString()):"" +
                        "; domain=" + currentTouch[currentTouch.length-1] +
                        "; path=/";
        
        if(currentTouch[0] != this.DIRECT && this.enableADaySessionTouchCookie  == true)
	{
	    //record the last non direct touch in a 24 hour cookie
	    var now = new Date();
	    now.setTime(now.getTime() + 1000*this.ADaySessionTouchCookieDuration);

	    var lastTouch = currentTouch[0] + "," + currentTouch[1].toString().substr(0, 50) + "," + getCurrentTimeStamp() + "," + currentTouch[3];

	    document.cookie = this.TFX_LAST_NON_DIRECT_TOUCH + "=" + lastTouch +
			"; expires=" + now.toUTCString() +
			"; domain=" + currentTouch[currentTouch.length-1] +
			"; path=/";
        }                        
        
    }
    
    
}

function getCookieByName(cookieName) {
    var aCookie = document.cookie.split("; ");
    for (var i = 0; i < aCookie.length; i++) {
        // a name/value pair (a crumb) is separated by an equal sign
        var aCrumb = aCookie[i].split("=");
        if (aCrumb[0] != null) {
            if (cookieName == aCrumb[0]) {
                if (aCrumb[1] != null)
                    return aCrumb[1];
                else
                    return "";
            }
        }
    }
    // a cookie with the requested name does not exist
    return "";
}

// Retrieves all touches from cookie and returns it as a string in format:
//      traffic_medium_no,traffic_source,timestamp|traffic_medium_no,traffic_source,timestamp|traffic_medium_no,traffic_source,timestamp|...
// where:
//      - each touch consists of "traffic_medium_no,traffic_source,timestamp" e.g. "8,Direct,20090820133056"
//      - timestamp format is "yyyyMMddhhmmss" with time in 24-hr format
// Returns "" if no cookie is present.
//
// cookies are separated by semicolons
//
TrafficCookie.prototype.getAllTouches = 
// Returns last touch in cookie in format "traffic_medium_no,traffic_source,timestamp" e.g. "8,Direct,20090820133056" 
// or "" if no cookie present
//
TrafficCookie.prototype.getLastTouch = function() {
    var allTouches = this.getAllTouches();
    var touches = allTouches.split("|");  // split allTouches string into array; array will be empty if allTouches is an empty string
    return touches.length > 0 ? touches[touches.length - 1] : "";
}

// Returns new cookie value after adding new touch to touches retrieved from cookie.
// Traffic_source will be truncated to 50 chars.
// Total number of touches in returned value will be limited to TOUCH_LIMIT.
//
TrafficCookie.prototype.constructCookieValue = function(currentTouch) {
    var allTouches = this.getAllTouches();
    var touches = allTouches.split("|");
    var len = touches.length;

    var trafficMedium = currentTouch[0];
    var trafficSource = currentTouch[1];

    var timeStamp = currentTouch[2];
    if (timeStamp == "placeholder") {
        timeStamp = getCurrentTimeStamp();
    }

    var utmStracking = currentTouch[3];

    var newTouch = trafficMedium + "," + trafficSource.toString().substr(0, 50) + "," + timeStamp + "," + utmStracking;
    
    newTouch = this.lastValidTouch(newTouch);//determine the direct vs 24 hour cookie case
    
    if (!(this.isSameTouch(newTouch,touches[len - 1]) || this.ignoreTouch(newTouch,touches[len - 1]))) {  // don't add new touch if its same as last touch; this is to handle multiple simultaneous touches from multiple browser tabs
        touches[len] = newTouch;
        ++len;
        if (len > this.TOUCH_LIMIT) {
            touches.shift(); // remove first touch from array
        }
    }

    var cookieValue = touches.join("|");
    if (cookieValue.indexOf("|") == 0) {
        cookieValue = cookieValue.substr(1);
    }

    return cookieValue;
}
//if direct is inferred and check if previous touch was recent
TrafficCookie.prototype.ignoreTouch = function(curTouch,prevTouch)
{
  currentTouch = curTouch.split(",");
  previousTouch = prevTouch.split(",");
  return (this.enableSameSessionTouchCookie && !isNullOrEmpty(curTouch) && !isNullOrEmpty(previousTouch) &&
           (document.referrer == "" || document.referrer.indexOf(this.cpDomain()) > 0 )&&  
           currentTouch[0] == this.DIRECT && 
           isValidDuration(currentTouch[2],previousTouch[2],this.sameSessionTouchDuration));
}



//the previous solution was comparing touches with timestamps
TrafficCookie.prototype.isSameTouch = function(curTouch,prevTouch)
{
  currentTouch = curTouch.split(",");
  previousTouch = prevTouch.split(",");
  return currentTouch[0] == previousTouch[0] && 
      currentTouch[1] == previousTouch[1] && 
      currentTouch[3] == previousTouch[3] && 
      isValidDuration(currentTouch[2],previousTouch[2],this.sameTouchDuration) ;
}

TrafficCookie.prototype.lastValidTouch = function(curTouch)
{
  currentTouch = curTouch.split(",");
  prevTouch = this.getLastTouch();
  previousTouch = prevTouch.split(",");
  if(this.enableADaySessionTouchCookie  == true && !isNullOrEmpty(curTouch) && !isNullOrEmpty(previousTouch) &&
           (document.referrer == "" || document.referrer.indexOf(this.cpDomain()) > 0 )&&  
           currentTouch[0] == this.DIRECT && 
           isValidDuration(currentTouch[2],previousTouch[2],this.ADaySessionTouchCookieDuration))
  	return  prevTouch;
  return  curTouch;
  
}

function isValidDuration(current,previous,duration)
{
    return timeElapsed(current,previous) < duration;
}

function timeElapsed(dateNow,datePrevious) {
  var regexp = "([0-9]{4})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})";
  var date1 = dateNow.match(new RegExp(regexp));
  var date2 = datePrevious.match(new RegExp(regexp));
    var difference =
        Date.UTC(date1[1],date1[2],date1[3],date1[4],date1[5],date1[6])
      - Date.UTC(date2[1],date2[2],date2[3],date2[4],date2[5],date2[6]);
    return difference/1000;
}

// get the current time, convert to PST and format to "yyyyMMddHHmmss" pattern
function getCurrentTimeStamp() {
    // get current computer local time
    var ts = new Date();
    return getTimeStamp(ts);
}

// get the current time, convert to PST and format to "yyyyMMddHHmmss" pattern
function getTimeStamp(ts) {
    var format = "yyyyMMddHHmmss";

    

    // get UTC date/time components
    var year = ts.getUTCFullYear();
    var month = ts.getUTCMonth();
    var day = ts.getUTCDate();
    var hour = ts.getUTCHours();
    var min = ts.getUTCMinutes();
    var sec = ts.getUTCSeconds();

    // set ts as UTC time
    ts.setFullYear(year, month, day);
    ts.setHours(hour);
    ts.setMinutes(min);
    ts.setSeconds(sec);

    // get ts milliseconds and subtract 7 hours to get PST
    var utc = ts.valueOf();
    utc -= 7 * 60 * 60 * 1000;

    // set PST time to ts
    ts.setTime(utc);

    // get PST time components
    year = ts.getFullYear();
    month = ts.getMonth() + 1;
    day = ts.getDate();
    hour = ts.getHours();
    min = ts.getMinutes();
    sec = ts.getSeconds();

    // format timestamp string with PST time
    format = format.replace("yyyy", year.toString());
    format = format.replace("MM", month.toString().padL(2, "0"));
    format = format.replace("dd", day.toString().padL(2, "0"));
    format = format.replace("HH", hour.toString().padL(2, "0"));
    format = format.replace("mm", min.toString().padL(2, "0"));
    format = format.replace("ss", sec.toString().padL(2, "0"));

    return format;
}

String.repeat = function(chr, count) {
    var str = "";
    for (var x = 0; x < count; x++) { str += chr };
    return str;
}

String.prototype.padL = function(width, pad) {
    if (!width || width < 1)
        return this;

    if (!pad) pad = " ";
    var length = width - this.length
    if (length < 1) return this.substr(0, width);
    return (String.repeat(pad, length) + this).substr(0, width);
}

String.IsNullOrEmpty = function(value) {
    var isNullOrEmpty = true;
    if (value) {
        if (typeof (value) == 'string') {
            if (value.length > 0)
                isNullOrEmpty = false;
        }
    }
    return isNullOrEmpty;
}

var trafficCookie = new TrafficCookie();
trafficCookie.addTouch();

