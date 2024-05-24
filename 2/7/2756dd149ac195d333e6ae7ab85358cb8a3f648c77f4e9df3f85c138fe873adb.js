function Q(){
  var still_running = true; //debug variable to make sure the queue interval has properly shut down, this can be removed in production

  //go over the banner queue and check if we should render a banner
  function processQueue(){
    if(typeof zones === "undefined"){ return; }
    var top_of_screen = document.documentElement.scrollTop || document.body.scrollTop;
    var bottom_of_screen = top_of_screen + window.innerHeight;
    for(var i = 0; i < oc_adzone_queue.length; i++){
      var queue_item = zones[oc_adzone_queue[i]];
      if(typeof queue_item === "undefined"){
        cleanUpGlobals(i);
        return
      }
      var div_item_arr = document.querySelectorAll('[data-zone='+ queue_item["id"] +']');
      for(var j = 0; j < div_item_arr.length; j++) {
        div_item = div_item_arr[j];
        var top_of_div = div_item.getBoundingClientRect().top;
        if(top_of_div - bottom_of_screen <= 300){ //render banner if 300 or less from bottom of screen, this is tweakable
          renderQueueItem(i, div_item);
          return
        }  
      }
    }
    checkForLoopEnd();
  }

  //Render a script tag into the selected zone, then use the heartbeat.js code to render the actual banner.
  //function renderQueueItem(index){
  function renderQueueItem(index, div){
    var idSuffix = Math.round(Math.random()*1000000);
    var banner_object = zones[oc_adzone_queue[index]];
    var zone_split = banner_object["id"].split("-");
    var zone_id = zone_split[zone_split.length-1];
    var preselect_urls = [];
    for(var i = 0; i < banner_object["urls"].length; i++){
      preselect_urls.push(banner_object["urls"][i][Math.floor(Math.random()*banner_object["urls"][i].length)]); 
    }
    var postselect_url = preselect_urls[Math.floor(Math.random()*preselect_urls.length)]
    zone_id = zone_id + "-" + idSuffix;
    if(postselect_url){
      var script_element = createScriptElement(zone_id, postselect_url, banner_object)
      div.innerHTML += script_element;
      renderBanner("zid-"+zone_id);
      div.setAttribute('data-zone', zone_id);
    }
    cleanUpGlobals(index);
   }

   function createScriptElement(zone_id, url, banner_object){
    if(url.match(/^third_party_\d+$/)){
      var third_party_entry_id = url.split('_')[url.split('_').length-1];
      var script_location = banner_object["id"] + "|" + third_party_entry_id;
      return '<script id="zid-'+zone_id+'" data-overcast="banner" data-urls="'+url+'" data-width="'+banner_object["width"]+'" data-height="'+banner_object["height"]+'" data-responsive="true"  data-third_party_location="'+script_location + '"></'+'script>';
    }
    else if(url.match(/^vendor_meta_\d+$/)){
      var vendor_meta_entry_id = url.split('_')[url.split('_').length-1];
      var vendor_meta_location = banner_object["id"] + "|" + vendor_meta_entry_id;
      return '<script id="zid-'+zone_id+'" data-overcast="banner" data-urls="'+url+'" data-width="'+banner_object["width"]+'" data-height="'+banner_object["height"]+'" data-responsive="true"  data-vendor_meta_location="'+vendor_meta_location + '"></'+'script>';
    }
    else{
      return '<script id="zid-'+zone_id+'" data-overcast="banner" data-urls="'+url+'" data-width="'+banner_object["width"]+'" data-height="'+banner_object["height"]+'" data-responsive="true"></'+'script>';
    }
   }


  
  function checkForLoopEnd(){
    if(oc_adzone_queue.length <= 0 && document.readyState === 'complete'){
      clearInterval(bannerRenderer);
      still_running = false;
    }
  }

  //the banner rendering loop, this is turned off when all banners have been rendered.
  var bannerRenderer = setInterval( 100);
}

function B(urlArray, config){
    this.heartbeat_url = 'https://static.airserve.net/'
    //this.heartbeat_url = '//localhost:23000/'
    this.urlArray = urlArray;
    this.adSlot = config.s;
    this.height = config.h;
    this.width = config.w;
    this.ratio = this.height/this.width;
    this.isResponsive = config.r;
    this.hardcoded_source = config.hardcoded_source;
    //remove this
    if(window.location.href.indexOf('seafoodsource.com') > -1) {
      this.isResponsive = false;
    }
    this.iframe_id = 'oc-' + this.adSlot
    this.placement = document.getElementById(this.adSlot).parentNode;
    this.w = null;
    this.recieved_source = null;
    this.callbackUrl = config.c;
    this.external_script_location = config.es;
    this.vendor_meta_location = config.vm;
    this.dfp_pattern = config.p;
    //console.log(config);
    this.isCrossOrigin =  function() {
      try{
          //try to access the document object
          if (top.document || top.document.domain){
            //we have the same document.domain value!
          }
      }catch(e) {
          //We don't have access, it's cross-origin!
          return true;
      }
      return false;
    };

    this.url = function(vendor_meta) {
      var path;
      if(vendor_meta){
        var location_split = this.vendor_meta_location.split("|");
        path = this.heartbeat_url+zones[location_split[0]]["vendor_metas"][location_split[1]]["url"];
      }
      else{
       path = this.heartbeat_url+this.urlArray[Math.floor(Math.random()*this.urlArray.length)];
      }
      if (this.isCrossOrigin()) {
        path = path + '?crossOrigin=true';
      }
      return path
    };

    this.bannerWindow = function() {
      var w = window;
      var i = 0;


      while((w.self !== window.top) && !this.isCrossOrigin() && i < 5) {
          w = w.parent.window;
          i++;
      }
      return w;
    };

    this.bannerDocument = 
    this.source = function() {
        return this.hardcoded_source || this.recieved_source || this.bannerWindow().location.href;
    };
    this.hostname = 

    this.display = function(inscreen_listener = false) {
        var iframe = document.createElement('iframe');
        var is_tracked = false;
        var placement = this.placement;
        var ratio = this.ratio;
        var source = this.source();
        var hostname = this.hostname();
        var heartbeat_url = this.heartbeat_url;
        var callbackUrl = this.callbackUrl;
        var dfp_pattern = this.dfp_pattern;
        var is_external = this.urlArray[Math.floor(Math.random()*this.urlArray.length)].match(/^third_party_\d+$/);
        var is_vendor_meta = this.urlArray[Math.floor(Math.random()*this.urlArray.length)].match(/^vendor_meta_\d+$/);
        var vendor_meta = false;
        _this = this;
        if(is_vendor_meta){
          var location_split = this.vendor_meta_location.split("|");
          vendor_meta = JSON.parse(zones[location_split[0]]["vendor_metas"][location_split[1]]["inject_vars"]);
        }
        if(!is_external){
          iframe.src = this.url(is_vendor_meta);
        }
        if(this.isResponsive === true) {
            if(this.placement.clientHeight !== this.height){
               responsiveResize();
               if(window.addEventListener){
                   window.addEventListener('resize', responsiveResize, false);
                }
                else if(window.attachEvent){
                    window.attachEvent('onresize', responsiveResize)
                }
            }else{
                iframe.height = '100%';
                iframe.width = '100%';
            }
        } else {
            iframe.height = this.height + 'px';
            iframe.width = this.width + 'px';    
        }

        function responsiveResize(){
            iframe.width = placement.clientWidth;
            iframe.height = placement.clientWidth*ratio;
        }

        function postMessage(classification, actionType, vendor_meta) {
            receiver.postMessage({
                'classification': classification, 
                'banner_action': actionType,
                'source': source, 
                'hostname': hostname, 
                'callback_url': callbackUrl, 
                'dfp_pattern': dfp_pattern,
                'vendor_meta': vendor_meta  
                }, ( is_external ? '*' : heartbeat_url )
            );
        }
        
        iframe.border = '0';
        iframe.scrolling ='no';
        iframe.style.borderStyle = 'none';
        iframe.id = this.iframe_id;
        iframe.name = this.iframe_id;
        iframe.setAttribute('callback', this.callbackUrl);
        iframe.setAttribute('data-dfp-pattern', this.dfp_pattern);
        this.placement.appendChild(iframe);


        var receiver = iframe.contentWindow;
        var placement = document.getElementById(this.iframe_id).parentNode; //this.placement;
        var html = this.bannerDocument().documentElement;
        var w = this.bannerWindow();

        var iframe_id = this.iframe_id;

        function isInViewport() {
            var rect = null;
            if(window.self !== window.top) {
                rect = window.frameElement.getBoundingClientRect();
            } else {
                rect = placement.getBoundingClientRect();
            }

            var visibility_factor = (rect.height*rect.width) > 242500 ? 0.7 : 0.5;

            if (!is_tracked && (rect.top >= (rect.height*-visibility_factor) && rect.left >= 0 && rect.bottom <= (w.innerHeight+rect.height*visibility_factor || html.clientHeight+rect.height*visibility_factor) && rect.right <= (w.innerWidth || html.clientWidth))) {
                postMessage('banner', 'inscreen');
                is_tracked = true;
            } else if(is_tracked && !(rect.top >= (rect.height*-visibility_factor) && rect.left >= 0 && rect.bottom <= (w.innerHeight+rect.height*visibility_factor || html.clientHeight+rect.height*visibility_factor) && rect.right <= (w.innerWidth || html.clientWidth))){
                is_tracked = false;
            }
        }

        function nested_inscreen(e) {
          var message = e.data;
          if(message !== undefined && message.banner_action === "inscreen") {
            postMessage('banner', 'inscreen')
          }
        }

        if(inscreen_listener) {
          window.addEventListener('message', 
        }

        iframe.onload = function() { 
          postMessage('banner', 'impression', vendor_meta);
          if(!_this.isCrossOrigin()) {
            isInViewport();
            setInterval(isInViewport, 1000);
          }
        };
        if(is_external){
          var location_split = this.external_script_location.split("|")
          iframe.contentWindow.document.open();
          iframe.contentWindow.document.write(zones[location_split[0]]["scripts"][location_split[1]]);
          iframe.contentWindow.document.close();
        }
    };
    _this = this;
    this.sourceRelay = function(e) {
      var message = e.data;
        if(message !== undefined && message.banner_action === "impression") {
          this.recieved_source = message.source;
          this.display(true);
        }
    };
    function isHostedAdnuntius(){
      return (frameElement && frameElement.id.match(/adn-widget-\d.\d+/g) && isNestedAdnuntius());
    }
    function isNestedAdnuntius(){
      try{
        return frameElement.contentWindow.location.href.indexOf('static.airserve.net') !== -1;
      }
      catch (err){
        return false;
      }
    }
    function isHostedCxense(){
      var href = window.location.href;
      return href.indexOf("static.airserve.net") !== -1 && href.indexOf("EAS_fif.html") !== -1;
    }
   (isHostedAdnuntius() || isHostedCxense()) ? window.addEventListener('message',  : this.display();
}

function getScriptElement() {
    if(document.currentScript != undefined) {
        return document.currentScript;
    } else if (document.querySelector( 'script[data-overcast="banner"]' )){
        return document.querySelector( 'script[data-overcast="banner"]' );
    } else {
        return document.querySelector( 'script[data-overcast="queue"]' );
    }
}



function renderBanner(id){
    if(id != null && id != '') {
        var scriptElement = document.getElementById(id);
        if(scriptElement != null) {
          var height = parseInt(scriptElement.attributes['data-height'].value);
          var width = parseInt(scriptElement.attributes['data-width'].value);
          var responsive = (scriptElement.attributes['data-responsive'].value === 'true');
          var urls = scriptElement.attributes['data-urls'].value.split('|');
          var dataovercast = scriptElement.attributes['data-overcast'].value;
          var external_script_location = '';
          if(scriptElement.hasAttribute('data-third_party_location')){
            external_script_location = scriptElement.attributes['data-third_party_location'].value;
          }
          var vendor_meta_location = '';
          if(scriptElement.hasAttribute('data-vendor_meta_location')){
            vendor_meta_location = scriptElement.attributes['data-vendor_meta_location'].value;
          }
          var hardcoded_source = null;
          if(scriptElement.hasAttribute('data-source')){
            hardcoded_source = scriptElement.attributes['data-source'].value;
          }

          //DFP macro tracking
          var callback = '';
          if (scriptElement.hasAttribute('callback')) {
            if(scriptElement.attributes['callback'].value != '%%CLICK_URL_UNESC%%' && scriptElement.attributes['callback'].value != '') {
                dfp_clickurl = scriptElement.attributes['callback'].value;
                callback = scriptElement.attributes['callback'].value;  
            }
          }
          var dfp_pattern = '';
          if (scriptElement.hasAttribute('data-dfp-pattern')) {
            if(scriptElement.attributes['data-dfp-pattern'].value != '%%PATTERN:url%%' && scriptElement.attributes['data-dfp-pattern'].value != '') {
                dfp_pattern = scriptElement.attributes['data-dfp-pattern'].value;    
            }
          }
          //DFP macro tracking ends

          var rand =  Math.round(Math.random()*1000000);
          var s = id+rand;  
          document.getElementById(id).setAttribute('data-overcast',s);
          document.getElementById(id).setAttribute('id',s);
          new B(urls,{s:s,w:width,h:height,r:responsive,c:callback,p:dfp_pattern,es: external_script_location, vm: vendor_meta_location, hardcoded_source: hardcoded_source});  
        }
    }
}

try {
    var autorenderzone = getParameterByName('autorenderzone', getScriptName());
    if(autorenderzone && autorenderzone == 1) {
        Q();
    } else {
        var id = getParameterByName('id', getScriptName());
        renderBanner(id);
    }    
} catch (err) {
    throw err;
}

