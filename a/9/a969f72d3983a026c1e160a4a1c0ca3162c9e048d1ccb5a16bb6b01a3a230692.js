;(function(){
  var widget_klass = 'ca-widget';
  var data_token = 'data-token';
  var widget_uuid_attr = 'data-widget-uuid';

  var CA_EMBEDDER = window['CA_EMBEDDER'] || new function() {

    window['CA_HANDLED_PCUS'] = {};
    window['CA_EMBEDDER_RENDERING'] = false;
    window['CA_WIDGET_TRACK_SKIP'] = false;
    window['CA_EMBEDDER_RENDER_COUNT'] = 0;
    window['CA_EMBEDDER_WAIT_FOR_CUSTOM_PARAMS_COUNT'] = 0;

    this.init = function() {
      var _this = this;

      var custom_ca_af_link_params = window['__custom_ca_af_link_params'];
      var custom_ca_af_link_params_loading = window['__custom_ca_af_link_params_loading'] || false;
      var should_waiting_for_ca_af_link_params = !custom_ca_af_link_params && custom_ca_af_link_params_loading && window['CA_EMBEDDER_WAIT_FOR_CUSTOM_PARAMS_COUNT'] < 10;
      if (should_waiting_for_ca_af_link_params) {
        window['CA_EMBEDDER_WAIT_FOR_CUSTOM_PARAMS_COUNT'] += 1;
        setTimeout(function() {
          _this.init();
        }, 1500);
        return;
      }

      if (window['CA_EMBEDDER_RENDERING']) {
        // Do final check
        setTimeout( 500);
        return;
      }

      window['CA_EMBEDDER_RENDERING'] = true;
      window['CA_EMBEDDER_RENDER_COUNT'] += 1;

      var widgets = document.getElementsByClassName(widget_klass);

      // get infos
      var url = self.location.href;
      var script_urls = [];
      for (var i = 0; i < widgets.length; i++) {
        var widget = widgets[i];

        // size
        var domRect = widget.getBoundingClientRect();

        var pcuid = widget.getAttribute(data_token);
        var has_uuid = widget.getAttribute(widget_uuid_attr) != null;
        if (has_uuid) {
          // no action
          continue;
        }
        var widget_uuid = this.widget_uuid();
        widget.setAttribute(widget_uuid_attr, widget_uuid);

        var script_url_params = {
          pcuid: pcuid,
          widget_uuid: widget_uuid,
          w: domRect.width,
          ts: (new Date()).getTime()
        };

        if (custom_ca_af_link_params) {
          for (var key in custom_ca_af_link_params) {
            if (custom_ca_af_link_params.hasOwnProperty(key)) {
              script_url_params[key] = encodeURIComponent(custom_ca_af_link_params[key]);
            }
          }
        }


        var common_forward_params = ["ip","zip","s1","s2","s3","ca_referer","ap_referrer","apxa1","apxa2","apxa3","apxa4","apxa5","subid1","subid2","subid3","ptid","afftag"];
        for(var i = 0; i < common_forward_params.length; i++) {
          var key = common_forward_params[i];
          var val = widget.getAttribute("data-"+key);
          if (!val) {
            val = widget.getAttribute("data-"+key.replace(/\_/g, '-'));
          }
          if (val) {
            script_url_params[key] = encodeURIComponent(val);
          }
        }

        if (!script_url_params.ca_referer) {
          script_url_params.ca_referer = encodeURIComponent(url);
        }

        if (window['CA_HANDLED_PCUS'][pcuid]) {
          script_url_params.skip_pcu_impression = true;
        }

        var querys = [];
        for (var key in script_url_params) {
          if (script_url_params.hasOwnProperty(key)) {
            querys.push(""+key+"="+script_url_params[key]);
          }
        }

        if (window['CA_WIDGET_TRACK_SKIP']) {
          querys.push("widget_track_skip=1");
        } else {
          window['CA_WIDGET_TRACK_SKIP'] = true;
        }

        script_urls.push('https://secure.money.com/embeds/v2.js?' + querys.join('&'));

        window['CA_HANDLED_PCUS'][pcuid] = true;
      }
      if (script_urls.length > 0) {
        this.load_scripts_async(script_urls, function(){
        });
      }

      window['CA_EMBEDDER_RENDERING'] = false;
    }

    this.widget_uuid = 
    this.load_scripts_async = function(array, callback){
      var loader = function(src, handler){
        var script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.defer = true;
        script.onload = script.onreadystatechange = function(){
            script.onreadystatechange = script.onload = null;
            handler();
        }
        var head = document.getElementsByTagName('head')[0];
        (head || document.body).appendChild( script );
      };

      for (let i = 0; i < array.length; i++) {
        const url = array[i];
        loader(url, ;
      }
    }

    this.load_scripts = function(array, callback){
      var loader = function(src, handler){
        var script = document.createElement('script');
        script.src = src;
        script.onload = script.onreadystatechange =         var head = document.getElementsByTagName('head')[0];
        (head || document.body).appendChild( script );
      };
      (function run(){
        if(array.length!=0){
          loader(array.shift(), run);
        }else{
          callback && callback();
        }
      })();
    }

    window.addEventListener('DOMContentLoaded', ;

  };
  window['CA_EMBEDDER'] = CA_EMBEDDER;
  CA_EMBEDDER.init();
})();
