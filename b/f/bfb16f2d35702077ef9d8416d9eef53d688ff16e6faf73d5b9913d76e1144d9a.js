<HTML><HEAD>
<TITLE>400 Request failed due to privacy signals</TITLE>
</HEAD><BODY>
<H1>Request failed due to privacy signals</H1>
</BODY></HTML>
form_field;
      this.options = options1;
      if (!AbstractChosen.browser_is_supported()) {
        return;
      }
      this.is_multiple = this.form_field.multiple;
      this.set_default_text();
      this.set_default_values();
      this.setup();
      this.set_up_html();
      this.register_observers();
    }

    set_default_values() {
      this.click_test_action = (evt) => {
        return this.test_active_click(evt);
      };
      this.activate_action = (evt) => {
        return this.activate_field(evt);
      };
      this.active_field = false;
      this.mouse_on_container = false;
      this.results_showing = false;
      this.result_highlighted = null;
      this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
      this.disable_search_threshold = this.options.disable_search_threshold || 0;
      this.disable_search = this.options.disable_search || false;
      this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
      this.group_search = this.options.group_search != null ? this.options.group_search : true;
      this.search_contains = this.options.search_contains || false;
      this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
      this.max_selected_options = this.options.max_selected_options || 2e308;
      this.inherit_select_classes = this.options.inherit_select_classes || false;
      this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
      return this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
    }

    // Detect mobile browser
    // if /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)) || window.opera
    //   @is_touch = true
    // else
    //   @is_touch = false
    set_default_text() {
      if (this.form_field.getAttribute("data-placeholder")) {
        this.default_text = this.form_field.getAttribute("data-placeholder");
      } else if (this.is_multiple) {
        this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
      } else {
        this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
      }
      return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
    }

    mouse_enter() {
      return this.mouse_on_container = true;
    }

    mouse_leave() {
      return this.mouse_on_container = false;
    }

    input_focus(evt) {
      if (this.is_multiple) {
        if (!this.active_field) {
          return setTimeout((() => {
            return this.container_mousedown();
          }), 50);
        }
      } else {
        if (!this.active_field) {
          return this.activate_field();
        }
      }
    }

    input_blur(evt) {
      if (!this.mouse_on_container) {
        this.active_field = false;
        return setTimeout((() => {
          return this.blur_test();
        }), 100);
      }
    }

    results_option_build(options) {
      var content, data, i, len, ref;
      content = '';
      ref = this.results_data;
      for (i = 0, len = ref.length; i < len; i++) {
        data = ref[i];
        if (data.group) {
          content += this.result_add_group(data);
        } else {
          content += this.result_add_option(data);
        }
        // this select logic pins on an awkward flag
        // we can make it better
        if (options != null ? options.first : void 0) {
          if (data.selected && this.is_multiple) {
            this.choice_build(data);
          } else if (data.selected && !this.is_multiple) {
            this.single_set_selected_text(data.text);
          }
        }
      }
      return content;
    }

    result_add_option(option) {
      var classes, option_el;
      if (!option.search_match) {
        return '';
      }
      if (!this.include_option_in_results(option)) {
        return '';
      }
      classes = [];
      if (!option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("active-result");
      }
      if (option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("disabled-result");
      }
      if (option.selected) {
        classes.push("result-selected");
      }
      if (option.group_array_index != null) {
        classes.push("group-option");
      }
      if (option.classes !== "") {
        classes.push(option.classes);
      }
      option_el = document.createElement("li");
      option_el.className = classes.join(" ");
      option_el.style.cssText = option.style;
      option_el.setAttribute("data-option-array-index", option.array_index);
      option_el.innerHTML = option.search_text;
      return this.outerHTML(option_el);
    }

    result_add_group(group) {
      var group_el;
      if (!(group.search_match || group.group_match)) {
        return '';
      }
      if (!(group.active_options > 0)) {
        return '';
      }
      group_el = document.createElement("li");
      group_el.className = "group-result";
      group_el.innerHTML = group.search_text;
      return this.outerHTML(group_el);
    }

    results_update_field() {
      this.set_default_text();
      if (!this.is_multiple) {
        this.results_reset_cleanup();
      }
      this.result_clear_highlight();
      this.results_build();
      if (this.results_showing) {
        return this.winnow_results();
      }
    }

    reset_single_select_options() {
      var i, len, ref, result, results1;
      ref = this.results_data;
      results1 = [];
      for (i = 0, len = ref.length; i < len; i++) {
        result = ref[i];
        if (result.selected) {
          results1.push(result.selected = false);
        } else {
          results1.push(void 0);
        }
      }
      return results1;
    }

    results_toggle() {
      if (this.results_showing) {
        return this.results_hide();
      } else {
        return this.results_show();
      }
    }

    results_search(evt) {
      if (this.results_showing) {
        return this.winnow_results();
      } else {
        return this.results_show();
      }
    }

    winnow_results() {
      var escapedSearchText, i, len, option, ref, regex, results, results_group, searchText, startpos, text, zregex;
      this.no_results_clear();
      results = 0;
      searchText = this.get_search_text();
      escapedSearchText = searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      zregex = new RegExp(escapedSearchText, 'i');
      regex = this.get_search_regex(escapedSearchText);
      ref = this.results_data;
      for (i = 0, len = ref.length; i < len; i++) {
        option = ref[i];
        option.search_match = false;
        results_group = null;
        if (this.include_option_in_results(option)) {
          if (option.group) {
            option.group_match = false;
            option.active_options = 0;
          }
          if ((option.group_array_index != null) && this.results_data[option.group_array_index]) {
            results_group = this.results_data[option.group_array_index];
            if (results_group.active_options === 0 && results_group.search_match) {
              results += 1;
            }
            results_group.active_options += 1;
          }
          if (!(option.group && !this.group_search)) {
            option.search_text = option.group ? option.label : option.text;
            option.search_match = this.search_string_match(option.search_text, regex);
            if (option.search_match && !option.group) {
              results += 1;
            }
            if (option.search_match) {
              if (searchText.length) {
                startpos = option.search_text.search(zregex);
                text = option.search_text.substr(0, startpos + searchText.length) + '</em>' + option.search_text.substr(startpos + searchText.length);
                option.search_text = text.substr(0, startpos) + '<em>' + text.substr(startpos);
              }
              if (results_group != null) {
                results_group.group_match = true;
              }
            } else if ((option.group_array_index != null) && this.results_data[option.group_array_index].search_match) {
              option.search_match = true;
            }
          }
        }
      }
      this.result_clear_highlight();
      if (results < 1 && searchText.length) {
        this.update_results_content("");
        return this.no_results(searchText);
      } else {
        this.update_results_content(this.results_option_build());
        return this.winnow_results_set_highlight();
      }
    }

    get_search_regex(escaped_search_string) {
      var regex_anchor;
      regex_anchor = this.search_contains ? "" : "^";
      return new RegExp(regex_anchor + escaped_search_string, 'i');
    }

    search_string_match(search_string, regex) {
      var i, len, part, parts;
      if (regex.test(search_string)) {
        return true;
      } else if (this.enable_split_word_search && (search_string.indexOf(" ") >= 0 || search_string.indexOf("[") === 0)) {
        //TODO: replace this substitution of /\[\]/ with a list of characters to skip.
        parts = search_string.replace(/\[|\]/g, "").split(" ");
        if (parts.length) {
          for (i = 0, len = parts.length; i < len; i++) {
            part = parts[i];
            if (regex.test(part)) {
              return true;
            }
          }
        }
      }
    }

    choices_count() {
      var i, len, option, ref;
      if (this.selected_option_count != null) {
        return this.selected_option_count;
      }
      this.selected_option_count = 0;
      ref = this.form_field.options;
      for (i = 0, len = ref.length; i < len; i++) {
        option = ref[i];
        if (option.selected) {
          this.selected_option_count += 1;
        }
      }
      return this.selected_option_count;
    }

    choices_click(evt) {
      evt.preventDefault();
      if (!(this.results_showing || this.is_disabled)) {
        return this.results_show();
      }
    }

    keyup_checker(evt) {
      var ref, stroke;
      stroke = (ref = evt.which) != null ? ref : evt.keyCode;
      this.search_field_scale();
      switch (stroke) {
        case 8:
          if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
            return this.keydown_backstroke();
          } else if (!this.pending_backstroke) {
            this.result_clear_highlight();
            return this.results_search();
          }
          break;
        case 13:
          evt.preventDefault();
          if (this.results_showing) {
            return this.result_select(evt);
          }
          break;
        case 27:
          if (this.results_showing) {
            this.results_hide();
          }
          return true;
        case 9:
        case 38:
        case 40:
        case 16:
        case 91:
        case 17:
          break;
        default:
          // don't do anything on these keys
          return this.results_search();
      }
    }

    clipboard_event_checker(evt) {
      return setTimeout((() => {
        return this.results_search();
      }), 50);
    }

    container_width() {
      if (this.options.width != null) {
        return this.options.width;
      } else {
        return `${this.form_field.offsetWidth}px`;
      }
    }

    include_option_in_results(option) {
      if (this.is_multiple && (!this.display_selected_options && option.selected)) {
        return false;
      }
      if (!this.display_disabled_options && option.disabled) {
        return false;
      }
      if (option.empty) {
        return false;
      }
      return true;
    }

    search_results_touchstart(evt) {
      this.touch_started = true;
      return this.search_results_mouseover(evt);
    }

    search_results_touchmove(evt) {
      this.touch_started = false;
      return this.search_results_mouseout(evt);
    }

    search_results_touchend(evt) {
      if (this.touch_started) {
        return this.search_results_mouseup(evt);
      }
    }

    outerHTML(element) {
      var tmp;
      if (element.outerHTML) {
        return element.outerHTML;
      }
      tmp = document.createElement("div");
      tmp.appendChild(element);
      return tmp.innerHTML;
    }

    // class methods and variables ============================================================
    static browser_is_supported() {
      if (window.navigator.appName === "Microsoft Internet Explorer") {
        return document.documentMode >= 8;
      }
      return true;
    }

  };

  AbstractChosen.default_multiple_text = "Select Some Options";

  AbstractChosen.default_single_text = "Select an Option";

  AbstractChosen.default_no_result_text = "No results match";

  return AbstractChosen;

}).call(this);



var SelectParser;

SelectParser = class SelectParser {
  constructor() {
    this.options_index = 0;
    this.parsed = [];
  }

  add_node(child) {
    if (child.nodeName.toUpperCase() === "OPTGROUP") {
      return this.add_group(child);
    } else {
      return this.add_option(child);
    }
  }

  add_group(group) {
    var group_position, i, len, option, ref, results;
    group_position = this.parsed.length;
    this.parsed.push({
      array_index: group_position,
      group: true,
      label: this.escapeExpression(group.label),
      children: 0,
      disabled: group.disabled
    });
    ref = group.childNodes;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      option = ref[i];
      results.push(this.add_option(option, group_position, group.disabled));
    }
    return results;
  }

  add_option(option, group_position, group_disabled) {
    if (option.nodeName.toUpperCase() === "OPTION") {
      if (option.text !== "") {
        if (group_position != null) {
          this.parsed[group_position].children += 1;
        }
        this.parsed.push({
          array_index: this.parsed.length,
          options_index: this.options_index,
          value: option.value,
          text: option.text,
          html: option.innerHTML,
          selected: option.selected,
          disabled: group_disabled === true ? group_disabled : option.disabled,
          group_array_index: group_position,
          classes: option.className,
          style: option.style.cssText
        });
      } else {
        this.parsed.push({
          array_index: this.parsed.length,
          options_index: this.options_index,
          empty: true
        });
      }
      return this.options_index += 1;
    }
  }

  escapeExpression(text) {
    var map, unsafe_chars;
    if ((text == null) || text === false) {
      return "";
    }
    if (!/[\&\<\>\"\'\`]/.test(text)) {
      return text;
    }
    map = {
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;"
    };
    unsafe_chars = /&(?!\w+;)|[\<\>\"\'\`]/g;
    return text.replace(unsafe_chars, function(chr) {
      return map[chr] || "&amp;";
    });
  }

};

SelectParser.select_to_array = function(select) {
  var child, i, len, parser, ref;
  parser = new SelectParser();
  ref = select.childNodes;
  for (i = 0, len = ref.length; i < len; i++) {
    child = ref[i];
    parser.add_node(child);
  }
  return parser.parsed;
};
0","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"13.5","is_mobile":"1","is_desktop":"1","is_webview":"1","is_amp":"1","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":null,"overlay_no_preroll":"0","preroll_id":null,"is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":"6516102125","deal_ssp":"dfp","rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"33523","isPriorityCapped":"0","kpiActivated":null,"perfRuleParams":"{\"lineItemId\":6516102125,\"keyId\":13697002,\"keyValueId\":449013246264,\"creativeIds\":[138463626891,138463790858]}","fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[\"44\",\"33\",\"18\",\"11\",\"12\",\"28\",\"46\",\"38\",\"2\",\"58\",\"57\",\"5\",\"30\",\"23\",\"41\",\"40\",\"14\",\"34\",\"39\",\"37\",\"8\",\"48\",\"9\",\"27\",\"15\",\"55\",\"29\",\"10\",\"19\",\"47\",\"26\",\"31\",\"42\",\"17\",\"32\",\"1\",\"21\",\"22\",\"45\",\"13\",\"35\",\"56\",\"92\",\"4\",\"25\",\"16\",\"3\"]","iabCodes":"[]","blockedNavigators":"[]","audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"1","ias_fraud":"1","ias_adt":"2","ias_alc":"2","ias_dlm":"2","ias_drg":"2","ias_hat":"2","ias_off":"2","ias_vio":"2","ias_campaign_ids":"1500081;1500093;1500195;1500671;1500691;1500692;1500902;1505819;1506742;1508965;1508970","name":"366_VIDEOS_SAMSUNG_smb store _ 070224","tag":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/l5uf3\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be&iu=31755961","oss":[],"tag_matched":"","tags_matched":"","deal_id_encrypted":"s8zxpkumv","isOwned":0,"group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2QlLmmIC_r0miYAqNxfRputUueWnpBO7At6wlOc8mNimJzDc4rynL3K_TWozEk_hV-A..","tag_response":[],"sure_tag":0,"norme":"0"},{"id":"53f0u","country":"0","script":"{\"publisherId\":\"160240\",\"adSlot\":\"4302457\"}","duree":"0","type":"vast","labels":["17247","17248","17269","17270","17290","17336","17337","17338","17341","17373","17374","17375","17410","17411","17412","17414","17415","17416","17425","17870","18028","18029","18125","18126","18127","18162","18228","18380","18382","18408","18410","18412","18518","18558","18560","18562","18576","18586","18948"],"label_exclusivity":"1","autoplay":"2","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":"0","alias":"pubmaticipm","bidder":"pubmatic","bid_ajustment":"1","group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":"0","priorite":"1","switch_click_to_play":"0","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"1","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"0","is_hb":"1","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"7","is_mobile":"1","is_desktop":"1","is_webview":"1","is_amp":"1","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":"0","overlay_no_preroll":"0","preroll_id":"0","is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":null,"deal_ssp":null,"rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"0","isPriorityCapped":"0","kpiActivated":null,"perfRuleParams":null,"fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[]","iabCodes":"[]","blockedNavigators":"[]","audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"0","ias_fraud":"0","ias_adt":"2","ias_alc":"2","ias_dlm":"2","ias_drg":"2","ias_hat":"2","ias_off":"2","ias_vio":"2","ias_campaign_ids":"","name":"HB Web IPM Pubmatic - DHnet","tag":"{\"publisherId\":\"160240\",\"adSlot\":\"4302457\"}","oss":[],"tag_matched":"","tags_matched":"","isOwned":1,"bid_params":"{\"publisherId\":\"160240\",\"adSlot\":\"4302457\",\"cust_params\":\"\"}","group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2Ql9I7HtFz9p1f-eXvq3v4G1b3TMuaCrx3F0amr4uIo5b","tag_response":false,"sure_tag":0,"norme":"0"},{"id":"5ksrq","country":"0","script":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/l5u8u\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be&iu=31755961","duree":"0","type":"vast","labels":[],"label_exclusivity":"1","autoplay":"1","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":null,"alias":null,"bidder":null,"bid_ajustment":null,"group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":null,"priorite":"1","switch_click_to_play":"0","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"0","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"2","is_hb":"0","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"12","is_mobile":"1","is_desktop":"1","is_webview":"1","is_amp":"1","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":null,"overlay_no_preroll":"0","preroll_id":null,"is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":"3048149","deal_ssp":"dfp","rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"33523","isPriorityCapped":"0","kpiActivated":null,"perfRuleParams":"{\"lineItemId\":197943151,\"keyId\":13697002,\"keyValueId\":449012111489,\"creativeIds\":[]}","fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[\"44\",\"33\",\"18\",\"11\",\"12\",\"28\",\"46\",\"38\",\"2\",\"58\",\"57\",\"5\",\"30\",\"23\",\"41\",\"40\",\"14\",\"34\",\"39\",\"37\",\"8\",\"48\",\"9\",\"27\",\"15\",\"55\",\"29\",\"10\",\"19\",\"47\",\"26\",\"31\",\"42\",\"17\",\"32\",\"1\",\"21\",\"22\",\"45\",\"13\",\"35\",\"56\",\"92\",\"4\",\"25\",\"16\",\"3\"]","iabCodes":"[]","blockedNavigators":"[]","audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"0","ias_fraud":"0","ias_adt":"2","ias_alc":"2","ias_dlm":"2","ias_drg":"2","ias_hat":"2","ias_off":"2","ias_vio":"2","ias_campaign_ids":"","name":"366GT\/ LES FURETS\/ PREROLL 20S\/ PG\/V2\/DATA TNS ACTIFS","tag":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/l5u8u\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be&iu=31755961","oss":[],"tag_matched":"","tags_matched":"","deal_id_encrypted":"8pms8x","isOwned":0,"group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2QladbpPHkbNsVBnTK9lHOyrP2gIitN_tKFyvp2zkpR5xE2OZyVU5-qiRKMs89SrcvZOiYskGvlfSNCHHaf-sViU.","tag_response":[],"sure_tag":0,"norme":"0"},{"id":"53p83","country":"0","script":"{\"zoneId\":\"2255610\",\"accountId\":\"13276\",\"siteId\":\"402810\"}","duree":"0","type":"vast","labels":["17247","17248","17269","17270","17290","17336","17337","17338","17341","17373","17374","17375","17410","17411","17412","17414","17415","17416","17425","17870","18028","18029","18125","18126","18127","18162","18228","18380","18382","18408","18410","18412","18518","18558","18560","18562","18576","18586","18948"],"label_exclusivity":"1","autoplay":"2","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":"0","alias":"rubiconipm","bidder":"rubicon","bid_ajustment":"1","group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":"0","priorite":"1","switch_click_to_play":"0","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"1","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"0","is_hb":"1","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"7","is_mobile":"1","is_desktop":"1","is_webview":"1","is_amp":"1","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":"0","overlay_no_preroll":"0","preroll_id":"0","is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":null,"deal_ssp":null,"rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"0","isPriorityCapped":"0","kpiActivated":null,"perfRuleParams":null,"fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[]","iabCodes":"[]","blockedNavigators":"[]","audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"0","ias_fraud":"0","ias_adt":"2","ias_alc":"2","ias_dlm":"2","ias_drg":"2","ias_hat":"2","ias_off":"2","ias_vio":"2","ias_campaign_ids":"","name":"HB Web IPM Rubicon - DHnet","tag":"{\"zoneId\":\"2255610\",\"accountId\":\"13276\",\"siteId\":\"402810\"}","oss":[],"tag_matched":"","tags_matched":"","isOwned":1,"bid_params":"{\"zoneId\":\"2255610\",\"accountId\":\"13276\",\"siteId\":\"402810\",\"cust_params\":\"\"}","group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2QkE9a6y4AnbT5MaEfPFk12FIp_NabsyBSbfROWU61afG","tag_response":false,"sure_tag":0,"norme":"0"},{"id":"5kszr","country":"0","script":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/l5umf\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be&iu=31755961","duree":"0","type":"vast","labels":[],"label_exclusivity":"1","autoplay":"1","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":null,"alias":null,"bidder":null,"bid_ajustment":null,"group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":null,"priorite":"1","switch_click_to_play":"0","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"0","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"2","is_hb":"0","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"11.5","is_mobile":"1","is_desktop":"1","is_webview":"1","is_amp":"1","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":null,"overlay_no_preroll":"0","preroll_id":null,"is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":"3004110","deal_ssp":"dfp","rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"33523","isPriorityCapped":"0","kpiActivated":null,"perfRuleParams":"{\"lineItemId\":197932922,\"keyId\":13697002,\"keyValueId\":449012854674,\"creativeIds\":[]}","fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[\"44\",\"33\",\"18\",\"11\",\"12\",\"28\",\"46\",\"38\",\"2\",\"58\",\"57\",\"5\",\"30\",\"23\",\"41\",\"40\",\"14\",\"34\",\"39\",\"37\",\"8\",\"48\",\"9\",\"27\",\"15\",\"55\",\"29\",\"10\",\"19\",\"47\",\"26\",\"31\",\"42\",\"17\",\"32\",\"1\",\"21\",\"22\",\"45\",\"13\",\"35\",\"56\",\"92\",\"4\",\"25\",\"16\",\"3\"]","iabCodes":"[]","blockedNavigators":"[]","audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"1","ias_fraud":"0","ias_adt":"3","ias_alc":"3","ias_dlm":"3","ias_drg":"3","ias_hat":"3","ias_off":"3","ias_vio":"3","ias_campaign_ids":"1500079;1500691;1505819;1506253;1507660;1508968;1506279;1507657","name":"366GT \/ FRANCE \/ OMD \/ GPE RENAULT \/ 2024 \/ FEVRIER \/ PG \/ MEGANE\/ PREROLL \/ INTERET VOITURES ELECTRIQUES \/ 35-54 ANS \/ [DATA A1]","tag":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/l5umf\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be&iu=31755961","oss":[],"tag_matched":"","tags_matched":"","deal_id_encrypted":"8mm0lz","isOwned":0,"group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2QoGAQLbGlf479-FAGCBGIgvrqj9r565HTCyzlCfr_cf_7CS1pgRetlbjnB73hF0F0vpDzhcelr_pL8BJtOrUfBqXUGP8vLEgmonlhZSQRAGJMEZdRJYLNaqTAL-NmgRijSGsnPQN-oqv6Rx0sanZ7BMNVej0bpv30MaCLpPt3JN5jIiX9T3mChYNeStC-0ibCw..","tag_response":[],"sure_tag":0,"norme":"0"},{"id":"5ksru","country":"0","script":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/l5u8z\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be&iu=31755961","duree":"0","type":"vast","labels":[],"label_exclusivity":"1","autoplay":"1","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":null,"alias":null,"bidder":null,"bid_ajustment":null,"group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":null,"priorite":"1","switch_click_to_play":"0","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"0","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"2","is_hb":"0","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"11.5","is_mobile":"0","is_desktop":"1","is_webview":"0","is_amp":"0","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":null,"overlay_no_preroll":"0","preroll_id":null,"is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":"6517793660","deal_ssp":"dfp","rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"33523","isPriorityCapped":"0","kpiActivated":null,"perfRuleParams":"{\"lineItemId\":6517793660,\"keyId\":13697002,\"keyValueId\":449012111501,\"creativeIds\":[138463225196]}","fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[\"44\",\"33\",\"18\",\"11\",\"12\",\"28\",\"46\",\"38\",\"2\",\"58\",\"57\",\"5\",\"30\",\"23\",\"41\",\"40\",\"14\",\"34\",\"39\",\"37\",\"8\",\"48\",\"9\",\"27\",\"15\",\"55\",\"29\",\"10\",\"19\",\"47\",\"26\",\"31\",\"42\",\"17\",\"32\",\"1\",\"21\",\"22\",\"45\",\"13\",\"35\",\"56\",\"92\",\"4\",\"25\",\"16\",\"3\"]","iabCodes":"[]","blockedNavigators":"[]","audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"0","ias_fraud":"0","ias_adt":"2","ias_alc":"2","ias_dlm":"2","ias_drg":"2","ias_hat":"2","ias_off":"2","ias_vio":"2","ias_campaign_ids":"","name":"366_Web_CIC ( CREDIT INDUSTRIEL ET COMMERCIAL )_15937_640x480.00_050224_1","tag":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/l5u8z\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be&iu=31755961","oss":[],"tag_matched":"","tags_matched":"","deal_id_encrypted":"s8zumxluu","isOwned":0,"group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2Qt6FAKiHrzf3nnvaolAFJfxFhBlU2zBH5GrCF2a5hOS_gLMZYtWPAKwWZ1qOfyvtR2BxS5MdPMpr_PdMWiIYc5TTkmlYew1JnX8E42zzkPfh","tag_response":[],"sure_tag":0,"norme":"0"},{"id":"53fvf","country":"0","script":"{\"placementId\":\"22391753\",\"publisherId\":\"1549\"}","duree":"0","type":"vast","labels":["17247","17248","17269","17270","17290","17336","17337","17338","17341","17373","17374","17375","17410","17411","17412","17414","17415","17416","17425","17870","18028","18029","18125","18126","18127","18162","18228","18380","18382","18408","18410","18412","18518","18558","18560","18562","18576","18586","18948"],"label_exclusivity":"1","autoplay":"2","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":"0","alias":"improveipm","bidder":"improvedigital","bid_ajustment":"1","group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":"0","priorite":"1","switch_click_to_play":"0","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"1","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"0","is_hb":"1","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"7","is_mobile":"1","is_desktop":"1","is_webview":"1","is_amp":"1","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":"0","overlay_no_preroll":"0","preroll_id":"0","is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":null,"deal_ssp":null,"rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"0","isPriorityCapped":"0","kpiActivated":null,"perfRuleParams":null,"fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[]","iabCodes":"[]","blockedNavigators":"[]","audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"0","ias_fraud":"0","ias_adt":"2","ias_alc":"2","ias_dlm":"2","ias_drg":"2","ias_hat":"2","ias_off":"2","ias_vio":"2","ias_campaign_ids":"","name":"HB Web IPM Improve - DHnet","tag":"{\"placementId\":\"22391753\",\"publisherId\":\"1549\"}","oss":[],"tag_matched":"","tags_matched":"","isOwned":1,"bid_params":"{\"placementId\":\"22391753\",\"publisherId\":\"1549\",\"cust_params\":\"\"}","group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2Qvnu7Vv3dgwuZOJ9EQ7Z6mQOMFP6PMj7MK9KNWrrNeaM","tag_response":false,"sure_tag":0,"norme":"0"},{"id":"5ksrz","country":"0","script":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/l5ur3\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be&iu=31755961","duree":"0","type":"vast","labels":[],"label_exclusivity":"1","autoplay":"1","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":null,"alias":null,"bidder":null,"bid_ajustment":null,"group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":null,"priorite":"1","switch_click_to_play":"0","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"0","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"2","is_hb":"0","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"12","is_mobile":"1","is_desktop":"1","is_webview":"1","is_amp":"1","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":null,"overlay_no_preroll":"0","preroll_id":null,"is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":"3048152","deal_ssp":"dfp","rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"33523","isPriorityCapped":"0","kpiActivated":null,"perfRuleParams":"{\"lineItemId\":197943319,\"keyId\":13697002,\"keyValueId\":449012112755,\"creativeIds\":[]}","fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[\"44\",\"33\",\"18\",\"11\",\"12\",\"28\",\"46\",\"38\",\"2\",\"58\",\"57\",\"5\",\"30\",\"23\",\"41\",\"40\",\"14\",\"34\",\"39\",\"37\",\"8\",\"48\",\"9\",\"27\",\"15\",\"55\",\"29\",\"10\",\"19\",\"47\",\"26\",\"31\",\"42\",\"17\",\"32\",\"1\",\"21\",\"22\",\"45\",\"13\",\"35\",\"56\",\"92\",\"4\",\"25\",\"16\",\"3\"]","iabCodes":"[]","blockedNavigators":"[]","audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"0","ias_fraud":"0","ias_adt":"2","ias_alc":"2","ias_dlm":"2","ias_drg":"2","ias_hat":"2","ias_off":"2","ias_vio":"2","ias_campaign_ids":"","name":"366GT\/ LES FURETS\/ PREROLL 20S\/ PG\/V2\/DATA SENIOR 50+","tag":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/l5ur3\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be&iu=31755961","oss":[],"tag_matched":"","tags_matched":"","deal_id_encrypted":"8pms8k","isOwned":0,"group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2QladbpPHkbNsVBnTK9lHOyrP2gIitN_tKFyvp2zkpR5xi5so1c1L_wduDzNHY-reF1aeuNnn21QpBgDY0oS5iW8.","tag_response":[],"sure_tag":0,"norme":"0"},{"id":"sr3m8","country":"1","script":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/smlf5\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be","duree":"0","type":"vast","labels":[],"label_exclusivity":"0","autoplay":"0","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":null,"alias":null,"bidder":null,"bid_ajustment":null,"group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":"0","priorite":"1","switch_click_to_play":"1","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"0","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"0","is_hb":"0","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"10","is_mobile":"0","is_desktop":"1","is_webview":"0","is_amp":"0","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":"0","overlay_no_preroll":"0","preroll_id":null,"is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":"DIG-DEA-01088","deal_ssp":"freewheel-ssp","rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"0","isPriorityCapped":"1","kpiActivated":null,"perfRuleParams":null,"fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[]","iabCodes":"[]","blockedNavigators":null,"audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"0","ias_fraud":"0","ias_adt":"2","ias_alc":"2","ias_dlm":"2","ias_drg":"2","ias_hat":"2","ias_off":"2","ias_vio":"2","ias_campaign_ids":null,"name":"Deal Engie Qwarry","tag":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/smlf5\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be","oss":[],"tag_matched":"","tags_matched":"","isOwned":0,"group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2Qq94u1CW1aODl-xsdPHVnVBN8VyBKjCAocAlosQ3CILm","tag_response":[],"sure_tag":0,"norme":"0"},{"id":"5k3vz","country":"0","script":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/l5lv3\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be&iu=31755961","duree":"0","type":"vast","labels":[],"label_exclusivity":"0","autoplay":"1","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":null,"alias":null,"bidder":null,"bid_ajustment":null,"group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":null,"priorite":"1","switch_click_to_play":"0","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"0","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"2","is_hb":"0","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"15","is_mobile":"1","is_desktop":"1","is_webview":"1","is_amp":"1","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":"0","overlay_no_preroll":"0","preroll_id":null,"is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":"6490121924","deal_ssp":"dfp","rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"33523","isPriorityCapped":"0","kpiActivated":null,"perfRuleParams":"{\"lineItemId\":6490121924,\"keyId\":13697002,\"keyValueId\":449009578705,\"creativeIds\":[138462432386]}","fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[\"44\",\"33\",\"18\",\"11\",\"12\",\"28\",\"46\",\"38\",\"2\",\"58\",\"57\",\"5\",\"30\",\"23\",\"41\",\"40\",\"14\",\"34\",\"39\",\"37\",\"8\",\"48\",\"9\",\"27\",\"15\",\"55\",\"29\",\"10\",\"19\",\"47\",\"26\",\"31\",\"42\",\"17\",\"32\",\"1\",\"21\",\"22\",\"45\",\"13\",\"35\",\"56\",\"92\",\"4\",\"25\",\"16\",\"3\"]","iabCodes":"[]","blockedNavigators":"[]","audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"1","ias_fraud":"1","ias_adt":"2","ias_alc":"2","ias_dlm":"4","ias_drg":"2","ias_hat":"2","ias_off":"2","ias_vio":"2","ias_campaign_ids":"1500094;1500691;1500903;1507657;1508970;1508986;1513045;427;8804;8845;1509461;1507653;1507661;1500692","name":"366_Web_MSC CROISIERES_15524_640x480.00_220124_15s","tag":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/l5lv3\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be&iu=31755961","oss":[],"tag_matched":"","tags_matched":"","deal_id_encrypted":"s888ru0sf","isOwned":0,"group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2QtMCC2OBKDDxyOiz5gvwgOvg4BLW1Ptqg2QQcEeY-E9ZsLDKG7RYTEcA0G9d5gOQIJTFS97VQcUJL3jkY5kLZ5k.","tag_response":[],"sure_tag":0,"norme":"0"},{"id":"5kxkz","country":"0","script":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/l55k3\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be&iu=31755961","duree":"0","type":"vast","labels":[],"label_exclusivity":"0","autoplay":"1","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":null,"alias":null,"bidder":null,"bid_ajustment":null,"group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":null,"priorite":"1","switch_click_to_play":"0","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"0","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"2","is_hb":"0","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"13.0042","is_mobile":"1","is_desktop":"1","is_webview":"1","is_amp":"1","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":"0","overlay_no_preroll":"0","preroll_id":null,"is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":"6491262860","deal_ssp":"dfp","rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"33523","isPriorityCapped":"0","kpiActivated":null,"perfRuleParams":"{\"lineItemId\":6491262860,\"keyId\":13697002,\"keyValueId\":449008306251,\"creativeIds\":[138461820482,138462377809]}","fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[\"44\",\"33\",\"18\",\"11\",\"12\",\"28\",\"46\",\"38\",\"2\",\"58\",\"57\",\"5\",\"30\",\"23\",\"41\",\"40\",\"14\",\"34\",\"39\",\"37\",\"8\",\"48\",\"9\",\"27\",\"15\",\"55\",\"29\",\"10\",\"19\",\"47\",\"26\",\"31\",\"42\",\"17\",\"32\",\"1\",\"21\",\"22\",\"45\",\"13\",\"35\",\"56\",\"92\",\"4\",\"25\",\"16\",\"3\"]","iabCodes":"[]","blockedNavigators":"[]","audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"1","ias_fraud":"1","ias_adt":"3","ias_alc":"3","ias_dlm":"3","ias_drg":"3","ias_hat":"3","ias_off":"3","ias_vio":"3","ias_campaign_ids":"1500084;1500089;1500112;1500114;1500115;1500116;1500117;1500691;1500692;1505819;1506279;1506280;1506282;1506283;1506284;1506285;1506286;1506287;1507589;1507653;1507654;1507657;1507658;1507663;1512698","name":"366_Web_SOCIETE GENERALE_15589_640x480.00_220124_1","tag":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/l55k3\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be&iu=31755961","oss":[],"tag_matched":"","tags_matched":"","deal_id_encrypted":"s88kzvvvu","isOwned":0,"group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2QtvFu69M2wpjcKF3gj4enH92AwccQaLspsNdoyxqCV-pMmSAF1AIja62vAIbIEgoSrmk4uJbFelY-Xue72Bz-Ow.","tag_response":[],"sure_tag":0,"norme":"0"},{"id":"5k05f","country":"0","script":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/l53sr\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be&iu=31755961","duree":"0","type":"vast","labels":[],"label_exclusivity":"0","autoplay":"1","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":null,"alias":null,"bidder":null,"bid_ajustment":null,"group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":null,"priorite":"1","switch_click_to_play":"0","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"0","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"2","is_hb":"0","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"9.1","is_mobile":"1","is_desktop":"1","is_webview":"1","is_amp":"1","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":"0","overlay_no_preroll":"0","preroll_id":null,"is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":"6449720045","deal_ssp":"dfp","rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"33523","isPriorityCapped":"0","kpiActivated":null,"perfRuleParams":"{\"lineItemId\":6449720045,\"keyId\":13697002,\"keyValueId\":449001706407,\"creativeIds\":[138459243249,138459253062,138459405560,138459406004]}","fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[\"44\",\"33\",\"18\",\"11\",\"12\",\"28\",\"46\",\"38\",\"2\",\"58\",\"57\",\"5\",\"30\",\"23\",\"41\",\"40\",\"14\",\"34\",\"39\",\"37\",\"8\",\"48\",\"9\",\"27\",\"15\",\"55\",\"29\",\"10\",\"19\",\"47\",\"26\",\"31\",\"42\",\"17\",\"32\",\"1\",\"21\",\"22\",\"45\",\"13\",\"35\",\"56\",\"92\",\"4\",\"25\",\"16\",\"3\"]","iabCodes":"[]","blockedNavigators":"[]","audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"1","ias_fraud":"1","ias_adt":"3","ias_alc":"2","ias_dlm":"2","ias_drg":"3","ias_hat":"2","ias_off":"3","ias_vio":"2","ias_campaign_ids":"1507653;1507660;1507661;1508930;13059;1508968","name":"366_Web_SANTE PUBLIQUE FRANCE_14680_640x480.00_010124_1","tag":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/l53sr\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be&iu=31755961","oss":[],"tag_matched":"","tags_matched":"","deal_id_encrypted":"s8qsffmmv","isOwned":0,"group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2QuAsWdsHZY7ZI0aiJarhAwihKEEWgF8akneMa75fNvuxJx4FHllc7Lae2_NTyWPPOGoFd-J9nrXHx4tx5YNBDUA.","tag_response":[],"sure_tag":0,"norme":"0"},{"id":"5rzu5","country":"0","script":"{\"placementId\":\"30597876\"}","duree":"0","type":"vast","labels":["17247","17248","17269","17270","17290","17336","17337","17338","17341","17373","17374","17375","17410","17411","17412","17414","17415","17416","17425","17870","18028","18029","18125","18126","18127","18162","18228","18380","18382","18408","18410","18412","18518","18558","18560","18562","18576","18586","18948"],"label_exclusivity":"0","autoplay":"2","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":"0","alias":"appnexus","bidder":"appnexus","bid_ajustment":"1","group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":null,"priorite":"1","switch_click_to_play":"0","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"1","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"0","is_hb":"1","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"6.3","is_mobile":"0","is_desktop":"1","is_webview":"0","is_amp":"0","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":"0","overlay_no_preroll":"0","preroll_id":"0","is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":null,"deal_ssp":null,"rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"0","isPriorityCapped":"0","kpiActivated":null,"perfRuleParams":null,"fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[]","iabCodes":"[]","blockedNavigators":"[]","audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"0","ias_fraud":"0","ias_adt":"2","ias_alc":"2","ias_dlm":"2","ias_drg":"2","ias_hat":"2","ias_off":"2","ias_vio":"2","ias_campaign_ids":"","name":"Xandr 366 Hors PQR - esports.dhnet.be desktop contenus_propres","tag":"{\"placementId\":\"30597876\"}","oss":[],"tag_matched":"","tags_matched":"","isOwned":1,"bid_params":"{\"placementId\":\"30597876\",\"cust_params\":\"\"}","group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2QrivvhQstSjdz8_d5M0uodm-ssoykp3WrfoWeeIY-icuAmHBOS_fgoQPrv1nJQw__4uT58QI0AXW4Og_8P54ZYU.","tag_response":false,"sure_tag":0,"norme":"0"},{"id":"5kq3u","country":"0","script":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/l5sxq\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be&iu=31755961","duree":"0","type":"vast","labels":[],"label_exclusivity":"0","autoplay":"1","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":null,"alias":null,"bidder":null,"bid_ajustment":null,"group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":null,"priorite":"1","switch_click_to_play":"0","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"0","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"2","is_hb":"0","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"15","is_mobile":"1","is_desktop":"1","is_webview":"1","is_amp":"1","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":"0","overlay_no_preroll":"0","preroll_id":null,"is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":"6462902285","deal_ssp":"dfp","rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"33523","isPriorityCapped":"0","kpiActivated":null,"perfRuleParams":"{\"lineItemId\":6462902285,\"keyId\":13697002,\"keyValueId\":449005852319,\"creativeIds\":[138460891728,138460891923,138460892676]}","fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[\"44\",\"33\",\"18\",\"11\",\"12\",\"28\",\"46\",\"38\",\"2\",\"58\",\"57\",\"5\",\"30\",\"23\",\"41\",\"40\",\"14\",\"34\",\"39\",\"37\",\"8\",\"48\",\"9\",\"27\",\"15\",\"55\",\"29\",\"10\",\"19\",\"47\",\"26\",\"31\",\"42\",\"17\",\"32\",\"1\",\"21\",\"22\",\"45\",\"13\",\"35\",\"56\",\"92\",\"4\",\"25\",\"16\",\"3\"]","iabCodes":"[]","blockedNavigators":"[]","audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"1","ias_fraud":"1","ias_adt":"4","ias_alc":"4","ias_dlm":"4","ias_drg":"4","ias_hat":"4","ias_off":"4","ias_vio":"4","ias_campaign_ids":"1500195;1500671;1500692;1500726;1500903;1505819;1506279;1507653;1507660;1508966;1508979;1509461;1511321","name":"366_VIDEOS_PEUGEOT_MI-VIE_150124","tag":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/l5sxq\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be&iu=31755961","oss":[],"tag_matched":"","tags_matched":"","deal_id_encrypted":"s83vklmxv","isOwned":0,"group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2Ql9G_YksBfNzHz3sHvT10Nu1nVcYgpiARmndkA1d_yGDjnHQL1gul5jGNhl86S2-ng..","tag_response":[],"sure_tag":0,"norme":"0"},{"id":"5xu3u","country":"0","script":"{\"dat\":\"1\",\"inventoryCode\":\"Digiteka_Instream_RON\"}","duree":"0","type":"vast","labels":[],"label_exclusivity":"0","autoplay":"2","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":"0","alias":"3liftdtk","bidder":"triplelift","bid_ajustment":"0.665","group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":"0","priorite":"1","switch_click_to_play":"0","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"1","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"0","is_hb":"1","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"14.23","is_mobile":"1","is_desktop":"1","is_webview":"1","is_amp":"1","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":"0","overlay_no_preroll":"0","preroll_id":"0","is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":null,"deal_ssp":null,"rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"0","isPriorityCapped":"0","kpiActivated":null,"perfRuleParams":null,"fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[]","iabCodes":"[]","blockedNavigators":"[]","audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"0","ias_fraud":"0","ias_adt":"2","ias_alc":"2","ias_dlm":"2","ias_drg":"2","ias_hat":"2","ias_off":"2","ias_vio":"2","ias_campaign_ids":"","name":"Triplelift HB Web - DTK IPM","tag":"{\"dat\":\"1\",\"inventoryCode\":\"Digiteka_Instream_RON\"}","oss":[],"tag_matched":"","tags_matched":"","isOwned":0,"bid_params":"{\"dat\":\"1\",\"inventoryCode\":\"Digiteka_Instream_RON\",\"cust_params\":\"\"}","group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2QiIkpZTiPzGCWY44rt8T7x4Ew-uNOPPgGgO6Fgqb27oE","tag_response":false,"sure_tag":0,"norme":"0"},{"id":"svkvq","country":"1","script":"[]","duree":"0","type":"vast","labels":[],"label_exclusivity":"0","autoplay":"2","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":"0","alias":"sfxdtk","bidder":"freewheel-ssp","bid_ajustment":"0.63","group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":"0","priorite":"1","switch_click_to_play":"0","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"1","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"0","is_hb":"1","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"9.18","is_mobile":"0","is_desktop":"1","is_webview":"0","is_amp":"0","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":"0","overlay_no_preroll":"0","preroll_id":"0","is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":null,"deal_ssp":null,"rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"0","isPriorityCapped":"1","kpiActivated":null,"perfRuleParams":null,"fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[]","iabCodes":"[]","blockedNavigators":"[]","audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"0","ias_fraud":"0","ias_adt":"2","ias_alc":"2","ias_dlm":"2","ias_drg":"2","ias_hat":"2","ias_off":"2","ias_vio":"2","ias_campaign_ids":"","name":"HB Web SFX - Generique DTK IPM","tag":"[]","oss":[],"tag_matched":"","tags_matched":"","isOwned":0,"bid_params":"{\"zoneId\":9906849,\"cust_params\":\"\"}","group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2Qi7qDkuDVmQEXwLSIDW3CvF-45ksWuHfcHFEa-Y_VGSf","tag_response":false,"sure_tag":0,"norme":"0"},{"id":"srp0r","country":"1","script":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/sz3p5\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be","duree":"0","type":"vast","labels":[],"label_exclusivity":"0","autoplay":"0","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":null,"alias":null,"bidder":null,"bid_ajustment":null,"group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":"0","priorite":"1","switch_click_to_play":"1","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"0","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"0","is_hb":"0","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"10","is_mobile":"0","is_desktop":"1","is_webview":"0","is_amp":"0","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":"0","overlay_no_preroll":"0","preroll_id":null,"is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":"1226945","deal_ssp":"dfp","rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"0","isPriorityCapped":"1","kpiActivated":null,"perfRuleParams":null,"fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[]","iabCodes":"[]","blockedNavigators":"[]","audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"0","ias_fraud":"0","ias_adt":"2","ias_alc":"2","ias_dlm":"2","ias_drg":"2","ias_hat":"2","ias_off":"2","ias_vio":"2","ias_campaign_ids":"","name":"Deal DFP Delonghi","tag":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/sz3p5\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be","oss":[],"tag_matched":"","tags_matched":"","deal_id_encrypted":"3kllsl","isOwned":0,"group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2QsCgjRGtyuJbc665vpAG1a7Uc4UC2etwYfQQ1eQOv76x","tag_response":[],"sure_tag":0,"norme":"0"},{"id":"5vpxk","country":"0","script":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/l5qq5\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be&iu=31755961","duree":"0","type":"vast","labels":[],"label_exclusivity":"0","autoplay":"1","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":null,"alias":null,"bidder":null,"bid_ajustment":null,"group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":null,"priorite":"1","switch_click_to_play":"0","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"0","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"2","is_hb":"0","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"12.5","is_mobile":"1","is_desktop":"1","is_webview":"1","is_amp":"1","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":"0","overlay_no_preroll":"0","preroll_id":null,"is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":"2945025","deal_ssp":"dfp","rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"33523","isPriorityCapped":"0","kpiActivated":null,"perfRuleParams":"{\"lineItemId\":197794051,\"keyId\":13697002,\"keyValueId\":448996846115,\"creativeIds\":[]}","fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[\"44\",\"33\",\"18\",\"11\",\"12\",\"28\",\"46\",\"38\",\"2\",\"58\",\"57\",\"5\",\"30\",\"23\",\"41\",\"40\",\"14\",\"34\",\"39\",\"37\",\"8\",\"48\",\"9\",\"27\",\"15\",\"55\",\"29\",\"10\",\"19\",\"47\",\"26\",\"31\",\"42\",\"17\",\"32\",\"1\",\"21\",\"22\",\"45\",\"13\",\"35\",\"56\",\"92\",\"4\",\"25\",\"16\",\"3\"]","iabCodes":"[]","blockedNavigators":"[]","audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"0","ias_fraud":"0","ias_adt":"2","ias_alc":"2","ias_dlm":"2","ias_drg":"2","ias_hat":"2","ias_off":"2","ias_vio":"2","ias_campaign_ids":"","name":"366GT \/ DENTSU\/MIDAS\/ PREROLL\/ DECEMBRE\/ PD","tag":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/l5qq5\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be&iu=31755961","oss":[],"tag_matched":"","tags_matched":"","deal_id_encrypted":"8v0m0l","isOwned":0,"group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2QjDPjN6JfL_xz3y4XUs1f3ADKrittQsbsAvGIKSdSRNuLKsnakE09PgjRKJvlKH-YQ..","tag_response":[],"sure_tag":0,"norme":"0"},{"id":"5vklz","country":"0","script":"{\"siteId\":\"587969\",\"pageId\":\"1795593\",\"formatId\":\"97800\",\"dat\":\"1\"}","duree":"0","type":"vast","labels":[],"label_exclusivity":"0","autoplay":"2","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":"0","alias":"smart366","bidder":"smartadserver","bid_ajustment":"1","group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":null,"priorite":"1","switch_click_to_play":"0","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"1","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"0","is_hb":"1","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"4.85","is_mobile":"1","is_desktop":"1","is_webview":"1","is_amp":"1","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":"0","overlay_no_preroll":"0","preroll_id":"0","is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":null,"deal_ssp":null,"rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"0","isPriorityCapped":"0","kpiActivated":null,"perfRuleParams":null,"fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[\"44\",\"33\",\"18\",\"11\",\"12\",\"28\",\"46\",\"38\",\"2\",\"58\",\"57\",\"5\",\"30\",\"23\",\"41\",\"40\",\"14\",\"34\",\"39\",\"37\",\"8\",\"48\",\"9\",\"27\",\"15\",\"55\",\"29\",\"10\",\"19\",\"47\",\"26\",\"31\",\"42\",\"17\",\"32\",\"1\",\"21\",\"22\",\"45\",\"13\",\"35\",\"56\",\"92\",\"4\",\"25\",\"16\",\"3\"]","iabCodes":"[]","blockedNavigators":"[]","audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"0","ias_fraud":"0","ias_adt":"2","ias_alc":"2","ias_dlm":"2","ias_drg":"2","ias_hat":"2","ias_off":"2","ias_vio":"2","ias_campaign_ids":"","name":"HB Web 366 Smart - Dtk_DHnet","tag":"{\"siteId\":\"587969\",\"pageId\":\"1795593\",\"formatId\":\"97800\",\"dat\":\"1\"}","oss":[],"tag_matched":"","tags_matched":"","isOwned":0,"bid_params":"{\"siteId\":\"587969\",\"pageId\":\"1795593\",\"formatId\":\"97800\",\"dat\":\"1\",\"cust_params\":\"\"}","group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2QgR8RbLgJN4t6oF1V4Kl1xpfRkUMYxuCG3MV8FaecsoR","tag_response":false,"sure_tag":0,"norme":"0"},{"id":"srf35","country":"1","script":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/sz5xr\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be","duree":"0","type":"vast","labels":[],"label_exclusivity":"0","autoplay":"0","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":null,"alias":null,"bidder":null,"bid_ajustment":null,"group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":"0","priorite":"1","switch_click_to_play":"1","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"0","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"0","is_hb":"0","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"10","is_mobile":"0","is_desktop":"1","is_webview":"0","is_amp":"0","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":"0","overlay_no_preroll":"0","preroll_id":null,"is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":"DIG-DEA-01133","deal_ssp":"freewheel-ssp","rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"0","isPriorityCapped":"1","kpiActivated":null,"perfRuleParams":null,"fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[]","iabCodes":"[]","blockedNavigators":null,"audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"0","ias_fraud":"0","ias_adt":"2","ias_alc":"2","ias_dlm":"2","ias_drg":"2","ias_hat":"2","ias_off":"2","ias_vio":"2","ias_campaign_ids":null,"name":"Deal SFX Makuity","tag":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/sz5xr\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be","oss":[],"tag_matched":"","tags_matched":"","isOwned":0,"group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2QhBH2cAq7rtvzs2NiyDMw8Uy7jskGrvH28DNbDmKybP6","tag_response":[],"sure_tag":0,"norme":"0"},{"id":"srz3u","country":"1","script":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/szxlx\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be","duree":"0","type":"vast","labels":[],"label_exclusivity":"0","autoplay":"0","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":null,"alias":null,"bidder":null,"bid_ajustment":null,"group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":"0","priorite":"1","switch_click_to_play":"1","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"0","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"0","is_hb":"0","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"10","is_mobile":"0","is_desktop":"1","is_webview":"0","is_amp":"0","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":"0","overlay_no_preroll":"0","preroll_id":null,"is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":"DIG-DIG-00038","deal_ssp":"freewheel-ssp","rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"0","isPriorityCapped":"1","kpiActivated":null,"perfRuleParams":null,"fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[\"44\",\"33\",\"18\",\"11\",\"12\",\"28\",\"46\",\"38\",\"2\",\"58\",\"57\",\"5\",\"30\",\"23\",\"41\",\"40\",\"14\",\"34\",\"39\",\"37\",\"8\",\"48\",\"9\",\"27\",\"15\",\"55\",\"29\",\"10\",\"19\",\"47\",\"26\",\"31\",\"42\",\"17\",\"32\",\"1\",\"21\",\"22\",\"45\",\"13\",\"35\",\"56\",\"92\",\"4\",\"25\",\"16\",\"3\"]","iabCodes":"[]","blockedNavigators":"[]","audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"0","ias_fraud":"0","ias_adt":"2","ias_alc":"2","ias_dlm":"2","ias_drg":"2","ias_hat":"2","ias_off":"2","ias_vio":"2","ias_campaign_ids":"","name":"Deal SFX Publicis ITM","tag":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/szxlx\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be","oss":[],"tag_matched":"","tags_matched":"","isOwned":0,"group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2QgNraVOFuRT37lVuKv8Gpzl4L3faePtX3djlptkO7RKk","tag_response":[],"sure_tag":0,"norme":"0"},{"id":"skr3f","country":"1","script":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/sf8lr\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be","duree":"0","type":"vast","labels":[],"label_exclusivity":"0","autoplay":"0","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":null,"alias":null,"bidder":null,"bid_ajustment":null,"group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":"0","priorite":"1","switch_click_to_play":"1","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"0","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"0","is_hb":"0","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"8","is_mobile":"0","is_desktop":"1","is_webview":"0","is_amp":"0","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":"0","overlay_no_preroll":"0","preroll_id":null,"is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":"1418209","deal_ssp":"dfp","rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"0","isPriorityCapped":"1","kpiActivated":null,"perfRuleParams":null,"fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[]","iabCodes":"[]","blockedNavigators":"[]","audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"0","ias_fraud":"0","ias_adt":"2","ias_alc":"2","ias_dlm":"2","ias_drg":"2","ias_hat":"2","ias_off":"2","ias_vio":"2","ias_campaign_ids":"","name":"DEAL - TBS - DESK","tag":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/sf8lr\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be","oss":[],"tag_matched":"","tags_matched":"","deal_id_encrypted":"ssxuvl","isOwned":0,"group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2Qr43tjg3srOIs5J-YADEq4ji4DxMqV8V8Zf2onyvQKhH","tag_response":[],"sure_tag":0,"norme":"0"},{"id":"5kq85","country":"0","script":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/l5slf\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be&iu=31755961","duree":"0","type":"vast","labels":[],"label_exclusivity":"0","autoplay":"1","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":null,"alias":null,"bidder":null,"bid_ajustment":null,"group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":null,"priorite":"1","switch_click_to_play":"0","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"0","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"2","is_hb":"0","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"12.5","is_mobile":"1","is_desktop":"1","is_webview":"1","is_amp":"1","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":"0","overlay_no_preroll":"0","preroll_id":null,"is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":"6448325007","deal_ssp":"dfp","rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"33523","isPriorityCapped":"0","kpiActivated":null,"perfRuleParams":"{\"lineItemId\":6448325007,\"keyId\":13697002,\"keyValueId\":449006408879,\"creativeIds\":[138461714398]}","fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[\"44\",\"33\",\"18\",\"11\",\"12\",\"28\",\"46\",\"38\",\"2\",\"58\",\"57\",\"5\",\"30\",\"23\",\"41\",\"40\",\"14\",\"34\",\"39\",\"37\",\"8\",\"48\",\"9\",\"27\",\"15\",\"55\",\"29\",\"10\",\"19\",\"47\",\"26\",\"31\",\"42\",\"17\",\"32\",\"1\",\"21\",\"22\",\"45\",\"13\",\"35\",\"56\",\"92\",\"4\",\"25\",\"16\",\"3\"]","iabCodes":"[]","blockedNavigators":"[]","audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"1","ias_fraud":"1","ias_adt":"2","ias_alc":"2","ias_dlm":"2","ias_drg":"2","ias_hat":"2","ias_off":"2","ias_vio":"2","ias_campaign_ids":"1500672;1500691;1500903;1505819;1506278;1506279;1507589;1507660;1508962;1508964;1508966;1508968;1508986;1507657;1507653;1500692;1500902;1507661;1507654","name":"366_Web_RED BULL_15231_640x480.00_080124_1","tag":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/l5slf\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be&iu=31755961","oss":[],"tag_matched":"","tags_matched":"","deal_id_encrypted":"s8qq0x0k0","isOwned":0,"group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2QmxWZamr-2Lp86K6Ng4gAU0xfgONMbIpveNr-Mug9ldiAWmW13bauw6zxZruWWaoEg..","tag_response":[],"sure_tag":0,"norme":"0"},{"id":"sr350","country":"1","script":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/sml05\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be","duree":"0","type":"vast","labels":[],"label_exclusivity":"0","autoplay":"0","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":null,"alias":null,"bidder":null,"bid_ajustment":null,"group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":"0","priorite":"1","switch_click_to_play":"1","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"0","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"0","is_hb":"0","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"8","is_mobile":"0","is_desktop":"1","is_webview":"0","is_amp":"0","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":"0","overlay_no_preroll":"0","preroll_id":null,"is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":"1101197","deal_ssp":"dfp","rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"0","isPriorityCapped":"1","kpiActivated":null,"perfRuleParams":null,"fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[]","iabCodes":"[]","blockedNavigators":null,"audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"0","ias_fraud":"0","ias_adt":"2","ias_alc":"2","ias_dlm":"2","ias_drg":"2","ias_hat":"2","ias_off":"2","ias_vio":"2","ias_campaign_ids":null,"name":"Deal RON MATIRO","tag":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/sml05\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be","oss":[],"tag_matched":"","tags_matched":"","deal_id_encrypted":"35vsvv","isOwned":0,"group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2QhSyOHXxpIcQu6Tb8Akv3oY.","tag_response":[],"sure_tag":0,"norme":"0"},{"id":"5k3k3","country":"0","script":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/l5lvr\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be&iu=31755961","duree":"0","type":"vast","labels":[],"label_exclusivity":"0","autoplay":"1","playlist":1,"roll_type":"preroll","active_geoloc":"0","active_geoloc_adex":"0","capping":"0","duration":null,"alias":null,"bidder":null,"bid_ajustment":null,"group_limit":null,"group_id":null,"group_capping":null,"display_skipad":"0","id_type_contenu":null,"priorite":"1","switch_click_to_play":"0","delay_hit_on_launch":"0","pause_on_scroll_out":"0","show_skip_ad":"0","skip_ad_delay":"0","skip_ad_type":"0","only_chrome":"0","disabled_on_playlist_mode":"0","view_to_play":"0","tvty_status":"0","brand_safety":"0","isVisibilityStatsAd":"0","visibilityAdTimeout":"0","autopilot":"2","is_hb":"0","is_gag":"0","hb_with_gag":"0","gam_publisher":"0","gag_to_hb":"0","competition_rule":"0","cpm":"12","is_mobile":"1","is_desktop":"1","is_webview":"1","is_amp":"1","secret_media":"0","only_adblock":"0","vendor_required":"0","vertical_campaign":"0","preview":0,"overlay_id":"0","overlay_no_preroll":"0","preroll_id":null,"is_adloox":"0","is_adloox_adfraud":"0","invisible":"0","is_playlist":"0","deal_id":"6490121414","deal_ssp":"dfp","rgpd_campaign":"0","rgpd_adnetwork":"1","company_id":"33523","isPriorityCapped":"0","kpiActivated":null,"perfRuleParams":"{\"lineItemId\":6490121414,\"keyId\":13697002,\"keyValueId\":449009579296,\"creativeIds\":[138462300897]}","fb_share":"","tw_share":"","instagram_redirect":"","sound_option":0,"isCookieless":"2","qc_segments":"","topics":"[\"44\",\"33\",\"18\",\"11\",\"12\",\"28\",\"46\",\"38\",\"2\",\"58\",\"57\",\"5\",\"30\",\"23\",\"41\",\"40\",\"14\",\"34\",\"39\",\"37\",\"8\",\"48\",\"9\",\"27\",\"15\",\"55\",\"29\",\"10\",\"19\",\"47\",\"26\",\"31\",\"42\",\"17\",\"32\",\"1\",\"21\",\"22\",\"45\",\"13\",\"35\",\"56\",\"92\",\"4\",\"25\",\"16\",\"3\"]","iabCodes":"[]","blockedNavigators":"[]","audiences":null,"db_rang1":"0","db_priority":"1","ias_activated":"1","ias_fraud":"1","ias_adt":"2","ias_alc":"2","ias_dlm":"4","ias_drg":"2","ias_hat":"2","ias_off":"2","ias_vio":"2","ias_campaign_ids":"1500094;1500691;1500903;1507657;1508970;1508986;1513045;427;8804;8845;1509461;1507653;1507661;1500692","name":"366_Web_MSC CROISIERES_15522_640x480.00_220124_30s","tag":"https:\/\/www.videoadex.com\/wacker\/sparry\/khanga\/kasbek\/curare\/l5lvr\/01585661\/?url=https%3A%2F%2Fwww.dhnet.be%2F&uri=www.dhnet.be&iu=31755961","oss":[],"tag_matched":"","tags_matched":"","deal_id_encrypted":"s888rlv55","isOwned":0,"group_id_encryted":"33m03","priority":"1","nc":"HXu0_OWg4Bzxe3QZLCw2QtMCC2OBKDDxyOiz5gvwgOuKvXVX3fz8fbBq6ceosXuhlF7Gm6VW9IRScAuftBni3GvmMCefE06B_MOBmZ7OliM.","tag_response":[],"sure_tag":0,"norme":"0"}],"preroll_default":[],"preroll_google":[],"postroll":[],"postroll_default":[],"postroll_google":[],"overlay":[],"overlay_google":[],"brandcontent":[],"dbpreroll":[],"assigned":false},"campaignEgs":[{"env":"web","network":"","ad_position":"p2","campaign_id":"5r3mq"},{"env":"web","network":"","ad_position":"pr","campaign_id":"5kq3u"},{"env":"web","network":"","ad_position":"pr","campaign_id":"5kxkz"},{"env":"web","network":"","ad_position":"pr","campaign_id":"5k3vz"},{"env":"web","network":"","ad_position":"pr","campaign_id":"5ksrq"},{"env":"web","network":"","ad_position":"pr","campaign_id":"5ksrz"},{"env":"web","network":"","ad_position":"pr","campaign_id":"5kszr"},{"env":"web","network":"","ad_position":"pr","campaign_id":"5ksfz"}],"adconf":{"multiad":false,"double_preroll":1,"isMultiAdAllowedBrowser":true,"isMobile":0,"brandContent":false,"country_code":"ES","vsync":false},"settings":{"__initializer__":null,"__cloner__":null,"__isInitialized__":true,"id":3992,"name":"dhnet.be_smart_fr","url":"dhnet.be\/staging.dhnet.be\/sandbox.dhnet.be","miniPath":null,"contentType":{"id":21,"type":"News","options":"","indexSearch":"multi","tag":"news","pos":1,"order":9,"iabCode":"IAB12","videoTopics":[]},"partnersId":9807,"langue":"fr","importance":3,"mdtk":"01585661","status":4,"dateCreation":{"date":"2018-03-27 16:26:53.000000","timezone_type":3,"timezone":"Europe\/Berlin"},"prerollRotation":1,"displayLogo":0,"redirectClick":"","logoPath":"logos\/3lvmk.png","skin":{"__initializer__":null,"__cloner__":null,"__isInitialized__":true,"id":36,"name":"Digiteka Player 2021","filename":"dtkplayer","private":0,"jw5":1,"jw6":1,"jw7":1},"displaySocial":2,"urlSocial":"","affiliatemanager":1794,"ownerExclude":"","extraCss":"#um_{target}_wrap_widget_default #um_{target}_title_widget{background-color:#fff;}\r\n#um_{target}_wrap_widget_default #um_{target}_title_widget #um_{target}_marquee_wrap #um_{target}_marquee{ font:bold 18px 'Helvetica Neue',Helvetica,Arial,sans-serif; color: #000;}\r\n#um_{target}_list_ultimedia{background-color:#fff;}\r\n#um_{target}_wrap_widget_default #um_{target}_list_ultimedia #um_{target}_carousel_ultimedia .um_{target}_videoThumb .um_{target}_link_videoThumb .um_{target}_layer_date{display:none;}\r\n","extraCssLock":0,"displayAdblock":0,"sitemapVideo":0,"consolidationVideoView":0,"statsMediametrie":1,"xiti":0,"xtsite":"","xtsd":"","xtsdHttps":"","xtn2":"","xitiClickShareButtons":0,"showSkipAd":0,"skipAdDelay":0,"showtitle":0,"showtitlePreroll":0,"onetagtimeout":12000,"pauseOnScrollOut":0,"displayLoadingDescr":0,"html5":1,"skipAdType":0,"iframeMode":1,"viewToPlay":1,"ratio":0,"scrollToShow":0,"displayOverlayPreview":0,"statsVisibility":0,"statsVisibilityAd":1,"multiad":1,"multiadPreload":1,"multiadPreloadVideoPreview":0,"viewPlayerToPlay":1,"rotateVideos":0,"scrollToPlayWifi":0,"monitoring":0,"moatIntegration":"","authorizeVisible":1,"digitalAdTrust":0,"showCloseAdButton":1,"showCrossAfter":0,"gemiusStream":"p8Y1NL9T3dH8VOqJbya4TZbfnA3U4hilXJfhy02BwsD.k7","showCmpPlayer":0,"optionVideoPlayCmp":0,"tracksShowingMode":1,"useDigitekaConsent":0,"iasAnId":930774,"pubstackTrackId":null,"macrosKpis":0,"ownedGam":0,"mappingEnabled":0,"mappingMdtkDesktop":"0","mappingMdtkWebMobile":"0","mappingMdtkAmp":"0","mappingMdtkAppAndroid":"0","mappingMdtkAppIos":"0","clsStatus":1,"disableAutoplayVisibleNoAd":0,"visibleNotToOverlapAdDiv":"","isOutstream":0,"hasInread":0,"idZone":"3992_2","nomZone":"Actualit\u00e9s","format":{"__initializer__":null,"__cloner__":null,"__isInitialized__":true,"id":1045,"nomFormat":"1060*596","hauteur":596,"largeur":1060},"autoplay":0,"autoplayMobile":"no","playlist":1,"type":{"id":21,"type":"News","options":"","indexSearch":"multi","tag":"news","pos":1,"order":9,"iabCode":"IAB12","videoTopics":[]},"widgetParameters":"","verrous":"","widgetVerrous":"","showOnlyVideolist":0,"videoDetect":"","addOldVideosToSearch":0,"showBackupDefault":0,"forceJs":0,"soundOnHover":1,"clickSoundControl":0,"typeGroup":0,"visible":"yes","updateCache":0,"playlistAdRotation":1,"stdDev":"0.00","mediametrieSerial":"","mediametrieSerialMob":"","mediametrieSerialApp":"","darSampling":91,"kpis":"{\"web\":{\"txVisibility\":90.63,\"txCompletion\":{\"10\":87.82,\"15\":83.69,\"20\":78.64,\"25\":74.45,\"30\":69.92,\"60\":46.63}},\"mobile\":{\"txVisibility\":95.05,\"txCompletion\":{\"10\":85.74,\"15\":80.69,\"20\":76.16,\"25\":72.46,\"30\":70.76}}}","outstream":false,"sound_low":0,"float_video":1,"float_video_css":1,"width_float_video_css":350,"top_float_video_css":5,"bottom_float_video_css":5,"left_float_video_css":5,"right_float_video_css":5,"float_video_transition":300,"display_visible_mobile":2,"notification":0,"play_mode":2,"unitaire":0,"autoplay_lock":1,"overlay_title":null,"visible_plus":0,"theme_visible_plus":0,"video_format":0,"authorize_visible":1,"show_close_ad_button":1,"visible_video_title":true,"visible_extra_css":"","contextuel_simple":false,"scrolltoplay":1,"rgpd":0,"topic":0,"subOptions":null,"zone":"2","sendstats":"0","src":"xqxuflr","width":"1060","height":"596","urlfacebook":"https:\/\/www.dhnet.be\/","ad":"1","fstart":"2","title":"100 ans de la maison Bocuse: \"d\u00e9poussi\u00e9rer\" sans renier l'h\u00e9ritage de \"Monsieur Paul\"","vl":"qs3lu0","endMessage":"um_digitekaSmartPlayer_ultimediaEndRoll","widgetPrefix":"um_digitekaSmartPlayer_","tagparam":"CxSegments=undefined&cxprnd=undefined&cxid=undefined&cxsiteid=undefined&video_section=dhnet.be,actu,belgique&digitype=smartplayer","tagparamdecoded":"","sspParam":"","gdprconsentstring":"","typePlayer":"0","xiti_xtsite":"","xiti_xtsd":"","xiti_xtsd_https":"","xiti_xtn2":"","xiti_title":"100_ans_de_la_maison_ocuse_depoussierer_sans_renier_l_heritage_de_onsieur_aul","xiti_date":"2024-02-08","getOrginUrl":1},"allowedCookies":[]}, {"topic":0,"mdtk":"01585661","subOptions":null,"zone":"2","type_player":"0","sendstats":"0","src":"xqxuflr","width":"1060","height":"596","urlfacebook":"https:\/\/www.dhnet.be\/","ad":"1","autoplay":"no","fstart":"2","title":"100 ans de la maison Bocuse: \"d\u00e9poussi\u00e9rer\" sans renier l'h\u00e9ritage de \"Monsieur Paul\"","vl":"qs3lu0","endMessage":"um_digitekaSmartPlayer_ultimediaEndRoll","widgetPrefix":"um_digitekaSmartPlayer_","tagparam":"CxSegments=undefined&cxprnd=undefined&cxid=undefined&cxsiteid=undefined&video_section=dhnet.be,actu,belgique&digitype=smartplayer","tagparamdecoded":"","sspParam":"","visible":"yes","gdprconsentstring":"","zoneid":"2"}, 'player');</script>

<script>
    var frame = window;
    var cmpFrame;
    var cmpCallbacks = {};
    while (!cmpFrame) {
        try {
            if (frame.frames['__tcfapiLocator']) cmpFrame = frame;
        } catch (ignore) {
            console.log(ignore);
        }
        if (frame === window.top) break;
        frame = frame.parent;
    }

    if (cmpFrame) {
        window.__tcfapi = function (cmd, version, callback, arg) {
            const callId = Math.random() + '';
            let msg = {
                __tcfapiCall: {
                    command: cmd,
                    parameter: arg,
                    version: version,
                    callId: callId,
                },
            };
            cmpCallbacks[callId] = callback;
            msg = JSON.parse(JSON.stringify(msg));
            cmpFrame.postMessage(msg, '*');
        };

        /* when we get the return message, call the stashed callback */
        window.addEventListener("message", function (event) {
            let json = {};
            try {
                json = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
            } catch (ignore) {
            }
            const payload = json['__tcfapiReturn'];
            if (payload) {
                if (typeof cmpCallbacks[payload.callId] === 'function') {
                    cmpCallbacks[payload.callId](payload.returnValue, payload.success);
                }
            }
        }, false);

        function callBack(tcData, success) {
            if (success) {
                if (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete') {
                    var purposes = tcData.purpose.consents;
                    if (purposes.hasOwnProperty(1) && purposes[1] === true) {

                                            }
                }
            }
        }

        __tcfapi("addEventListener", 2, callBack);
    }

</script>
<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "100 ans de la maison Bocuse: 'dépoussiérer' sans renier l'héritage de 'Monsieur Paul'",
        "description":"Reprise en 1924 par les grands-parents de Paul Bocuse, l'auberge de Collonges-au-Mont-d'Or (Rhône) fête son centenaire six ans après le décès du 'pape de la gastronomie'. 'On veut que l’ADN Bocuse reste', appuie le directeur général de la maison, privée depuis 2020 de sa troisième étoile.",
        "thumbnailUrl": [
           "https://vod.digiteka.com/xqxuflr/thumbnails/0381c103f42bbff83e986a166a07af7614926736-858x480.jpg"
        ],
        "uploadDate": "2024-02-08T15:14:12+00:00
",
        "duration": "PT1M37S",
        "contentUrl":  "https://ngs18c.digiteka.com/29d9e22d8e36377d0f2e00718f6e03b9/c3BlZWQ9MTUwO3VzZXI9bmdzO2V4cGlyZT03ZmZmZmZmZg,,/sdi1/74/64/7464b59eeb47bba440a5103ecf8738e56c9eed1f.mp4?ri=1250k&rs=125k",
        "embedUrl" : "https://www.ultimedia.com/deliver/generic/iframe/mdtk/01585661/zone/2/src/xqxuflr",
        "interactionStatistic": {
            "@type": "InteractionCounter",
            "interactionType": { "@type": "WatchAction" },
            "userInteractionCount": "35287"
        },
        "regionsAllowed": ""
    }
</script>



</body>
</html>
