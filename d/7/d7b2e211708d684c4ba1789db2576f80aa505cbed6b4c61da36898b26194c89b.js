
  window.onload = function() {
      function advgTrackingPixelTimer() {
          var referrer = document.referrer;
          var location_href = window.location.href;
          var vars_referrer = '';
    	    var vars_website = '';
          var vars_pixel_type = '&vars[pixel_type]=' + 'timer';
          if(document.referrer) vars_referrer = '&vars[referrer]=' + referrer;
          if(window.location.href) vars_website = '&vars[location_href]=' + location_href;
          var pixel = document.createElement("IMG");
          pixel.setAttribute("src", "https://pixel62ce5556d21c1d3.advangelists.com/v1/audiences?account_id=488&segment_key=62ce5556d21c1d3&vars[advid]=2427" + vars_referrer + vars_website + vars_time_spent_on_site + vars_local_uuid + vars_session_uuid + vars_pixel_type);
          pixel.setAttribute("height", "1");
          pixel.setAttribute("width", "1");
          pixel.setAttribute("onerror", "this.onerror=null;this.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==';");
          document.body.appendChild(pixel);
      }
      var timer = setTimeout(advgTrackingPixelTimer, 5000);
      
      function advgTrackingPixel() {
          var referrer = document.referrer;
          var location_href = window.location.href;
          var vars_referrer = '';
          var vars_website = '';
          var vars_pixel_type = '&vars[pixel_type]=' + 'initial';
          if(document.referrer) vars_referrer = '&vars[referrer]=' + referrer;
          if(window.location.href) vars_website = '&vars[location_href]=' + location_href;
          var pixel = document.createElement("IMG");
          pixel.setAttribute("src", "https://pixel62ce5556d21c1d3.advangelists.com/v1/audiences?account_id=488&segment_key=62ce5556d21c1d3&vars[advid]=2427" + vars_referrer + vars_website + vars_time_spent_on_site + vars_local_uuid + vars_session_uuid + vars_pixel_type);
          pixel.setAttribute("height", "1");
          pixel.setAttribute("width", "1");
          pixel.setAttribute("onerror", "this.onerror=null;this.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==';");
          document.body.appendChild(pixel);
      }
      advgTrackingPixel();
  };
  
  var timer2;
  var timerStart;
  var timeSpentOnSite = getTimeSpentOnSite();
  var vars_time_spent_on_site = '&vars[time_spent_on_site]=' + timeSpentOnSite;
  var vars_session_uuid;
  var vars_local_uuid;
  var uuid;

  function getTimeSpentOnSite(){
    timeSpentOnSite = parseInt(sessionStorage.getItem('timeSpentOnSite'));
    timeSpentOnSite = isNaN(timeSpentOnSite) ? 0 : timeSpentOnSite;
    return timeSpentOnSite;
  }

  function getSessionUUID() {
    if (sessionStorage.getItem('sessionUUID')) {
      vars_session_uuid = '&vars[session_id]=' + sessionStorage.getItem('sessionUUID');
    } else {
      sessionStorage.setItem('sessionUUID',uuidv4());
      vars_session_uuid = '&vars[session_id]=' + sessionStorage.getItem('sessionUUID');
    }
  }

  function getLocalUUID() {
    if (localStorage.getItem('av-localUUID')) {
      vars_local_uuid = '&vars[av-localUUID]=' + localStorage.getItem('av-localUUID');
    } else {
      localStorage.setItem('av-localUUID','av-' + uuidv4());
      vars_local_uuid = '&vars[av-localUUID]=' + localStorage.getItem('av-localUUID');
    }
  }

  
  function startCounting(){
    timerStart = Date.now();
    timer2 = setInterval(function(){
        timeSpentOnSite = getTimeSpentOnSite()+(Date.now()-timerStart);
        sessionStorage.setItem('timeSpentOnSite',timeSpentOnSite);
        timerStart = parseInt(Date.now());
        // Convert to seconds
        // console.log(parseInt(timeSpentOnSite/1000));
    },1000);
  }
  
  startCounting();
  getLocalUUID()
  getSessionUUID();
  