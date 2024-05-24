var stagRequestManager = {
    adServerRequestSent: false,
    aps: true,
    stag: false,
    slots: []
};

function stagRequestAps() {
    window.googletag.cmd.push(function () {
        window.apstag.setDisplayBids();
        window.stagRequestManager.aps = true;
        window.stagBiddersBack();
    });
}

function stagRequestPrebid() {
    if (window.pbjs.initAdserverSet) return;
    window.pbjs.initAdserverSet = true;
    window.googletag.cmd.push(function () {
        window.pbjs.que.push(function () {
            window.pbjs.setTargetingForGPTAsync();
            if (window.apstag) {
                window.stagRequestManager.stag = true;
                window.stagBiddersBack();
            } else {
                window.googletag.pubads().refresh();
            }
        });
    });
}

function stagRequestGpt() {
    if (window.apstag) {
        window.stagRequestManager.stag = true;
        window.stagBiddersBack();
    } else {
        window.googletag.cmd.push(function () {
            if (window.stagRequestManager.slots.length > 0)
            {
                window.googletag.pubads().refresh(window.stagRequestManager.slots);
            }
        });
    }
}

function stagBiddersBack() {
    if (window.stagRequestManager.aps && window.stagRequestManager.stag) {
        this.stagSendAdServerRequest();
    }
    return;
}

function stagSendAdServerRequest() {
    if (window.stagRequestManager.adServerRequestSent === true) {
        return;
    }
    window.stagRequestManager.adServerRequestSent = true;
    window.googletag.cmd.push(function() {
        window.googletag.pubads().refresh();
    });
}
class Config {
    constructor(config_obj, module_types) {
        this.src_config_obj = config_obj;
        this.can_be_delivered = true;
        if (this.is_can_be_delivered()) {
            this.domain_op = window.location.hostname;
            this.queryUrl = window.location.href;
            this.user_agent = navigator.userAgent;
            this.pub_id = (typeof pub_id !== 'undefined') ? pub_id : config_obj['publisher_id'];
            this.config_id = (typeof config_id !== 'undefined') ? config_id : config_obj['config_id'];
            this.gam_id = (typeof gam_id !== 'undefined') ? gam_id : config_obj['gam_id'];
            this.rand = (typeof rand !== 'undefined') ? rand : -1;
            this.country = (typeof country !== 'undefined') ? country : '';
            this.find_css_manipulatable_stylesheet();
            this.queryUrlHash = this.generate_hash(this.queryUrl);
            this.init_placeholders();
            this.pv_id = Date.now() + "-" + Math.random().toString(36).substr(2, 13) + "-" + Math.random().toString(36).substr(2, 13) + "-" + this.queryUrlHash;
            this.loggerObject = new Logger(this.pv_id, this.queryUrl, this.pub_id, this.domain_op, this.country, this.config_id, this.gam_id, this.rand, this.user_agent, this.placeholder1, this.placeholder2, this.placeholder3, this.placeholder4);
            this.modules = {};
            this.slots = [];
            module_types.forEach(module_type => {
                console.log(`initilizing module ${module_type}...`);
                this.modules[module_type] = module_factory(module_type, config_obj, this.loggerObject);
            });
        }
    }

    is_can_be_delivered() {
        let urls = JSON.parse(this.src_config_obj['urls'] ?? '[]');
        if (urls.length > 0) {
            this.can_be_delivered = false;
            let exclude_match_count = 0;
            for (const item of urls) {
                let url = item?.url?.trim();
                if (url) {
                    let include = item?.matchMode || 0;
                    let match = false;
                    switch (item?.matchType) {
                        case 'EXACT':
                            match = url === window.location.href;
                            break;
                        case 'STARTS_WITH':
                            match = window.location.href.startsWith(url) ||
                                window.location.pathname.startsWith('/'.concat(url).replace('//', '/'));
                            break;
                        case 'CONTAINS':
                            match = window.location.href.includes(url);
                            break;
                    }
                    if (match) {
                        if (include) {
                            this.can_be_delivered = true;
                            break;
                        }
                        exclude_match_count++;
                    }
                }
            }
            this.can_be_delivered = this.can_be_delivered || exclude_match_count === 0;
        }

        if (!this.can_be_delivered) {
            console.log('Config is not match to URL');
        }

        return this.can_be_delivered;
    }

    find_css_manipulatable_stylesheet() {
        Array.from(document.styleSheets).some((css_doc, i) => {
            try {
                css_doc.insertRule('#dummy_test_mani_css:before {content: " ";}', 0);
            } catch (error) {
                return false;
            }
            // this.css_manipulatable_stylesheet = i
            this.css_manipulatable_stylesheet = document.styleSheets[i];
            return true;
        });
    }

    generate_hash(str) {
        var hash = 0,
            i, chr;
        if (str.length === 0) return hash;
        for (i = 0; i < str.length; i++) {
            chr = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0;
        }
        return hash;
    }

    init_placeholders() {
        var query_path_parts = this.queryUrl?.split(this.domain_op)?.[1]?.split("?")?.[0]?.replace("/^/+|/+$/g", "")?.split("/")?.filter(function(query_part) {
            return (query_part.length > 0)
        }) ?? ['', '', '', ''];
        var query_parts_to_remove = query_path_parts.length - 4;
        if (query_parts_to_remove > 0) {
            var t;
            for (var i = 0; i < query_parts_to_remove; ++i) {
                t = query_path_parts.shift();
                query_path_parts[0] = t + "/" + query_path_parts[0];
            }
        } else {
            for (var i = 0; i < Math.abs(query_parts_to_remove); ++i) {
                query_path_parts.push("");
            }
        }
        this.placeholder1 = query_path_parts[0];
        this.placeholder2 = query_path_parts[1];
        this.placeholder3 = query_path_parts[2];
        this.placeholder4 = query_path_parts[3];
    }

    header_activate() {
        for (var module_type in this.modules) {
            this.modules[module_type].header_activate();
        }
    }

    DOMContentLoaded_activate() {
        var prebid_used = Object.keys(this.modules).includes('prebid');
        for (var module_type in this.modules) {
            if (module_type == 'gpt' && prebid_used) {} else {
                this.modules[module_type].DOMContentLoaded_activate();
            }
        }
    }
};
class Logger {
    constructor(pv_id, queryUrl, pub_id, domain_op, country, config_id, gam_id, rand, user_agent, placeholder1, placeholder2, placeholder3, placeholder4) {
        this.pv_id = pv_id;
        this.queryUrl = queryUrl;
        this.queryString = queryUrl;
        this.pub_id = pub_id;
        this.domain = domain_op;
        this.country = country;
        this.config_id = config_id;
        this.gam_id = gam_id;
        this.rand = rand;
        this.user_agent = user_agent;
        this.placeholder1 = placeholder1;
        this.placeholder2 = placeholder2;
        this.placeholder3 = placeholder3;
        this.placeholder4 = placeholder4;
        this.logger_changed = true;
        setInterval(this.publish_info.bind(this), 1000);
    }

    logger_recieve(obj) {
        for (k in obj.data_values) {
            this[k] = obj.data_values[k]
        }
        this.logger_changed = true;
    }

    publish_info() {
        // debugger;
        if (this.logger_changed) {
            this.logtime_int = Date.now();
            this.post_logger();
            this.logtime_int = undefined;
            this.logger_changed = false;
        }
    };


    flat_to_fluentd(obj) {
        obj.config_id = parseInt(obj?.config_id) || parseInt(obj?.config_id?.split('-')[1]) || 0;

        if (obj?.slots) {
            var message_slots = Object.values(obj.slots)
            message_slots.map((e, i) => {
                if (e?.['gam']) {
                    var temp = Object.values(e.gam);
                    delete message_slots[i].gam;
                    message_slots[i].gam = temp;
                    if (message_slots[i]?.gam) {
                        message_slots[i]?.gam?.map((ee, ii) => {
                            var temp = Object.values(ee.adunit_requests)
                            delete message_slots[i].gam[ii].adunit_requests;
                            temp.map((el, ind) => {
                                if (el?.size) {
                                    temp[ind]['size'] = el.size[0] + "x" + el.size[1];
                                }
                            });
                            message_slots[i].gam[ii].adunit_requests = temp;
                        })
                    }
                }
            })
            delete obj.slots;
            obj.slots = message_slots;
        }
    }

    post_logger() {
        var form = new FormData();
        var temp = JSON.parse(JSON.stringify(this));
        this.flat_to_fluentd(temp);
        form.set('json', JSON.stringify(temp));
        temp = undefined;
        var req = new XMLHttpRequest();
        req.open('POST', 'https://custom-fluentd-eyzeqmfaaa-uk.a.run.app/bq-all');
        req.send(form);
    }

};
class Module {
    constructor(config_obj, loggerObject) {

        loggerObject.recieve_module_event = function(event, new_element) {

        }
    }

    activate_module() {
        console.log('activate_module')
        return
    }

    header_activate() {
        console.log(`header activating module ${this.constructor.name}:`);
        return
    }

    DOMContentLoaded_activate() {
        console.log(`DOMContentLoaded activating module ${this.constructor.name}:`);
        return
    }
};

function module_factory(type, config_obj, loggerObject) {
    type = type.toUpperCase();
    switch (type) {
        case 'VIDMAX':
            return new ModuleVidmax(config_obj, loggerObject);
            break;
        case 'PIXALATE':
            return new ModulePixalate(config_obj, loggerObject);
            break;
        case 'BROWSI':
            return new ModuleBrowsi(config_obj, loggerObject);
            break;
        case 'GPT':
            return new ModuleGPT(config_obj, loggerObject);
            break;
        case 'APS':
            return new ModuleAps(config_obj, loggerObject);
            break;
        case 'PREBID':
            return new ModulePrebid(config_obj, loggerObject);
            break;
        case 'FREESTAR':
            return new ModuleFreestar(config_obj, loggerObject);
            break;
        case 'BLOCKTHROUGH':
            return new ModuleBlockthrough(config_obj, loggerObject);
            break;
        default:
            console.log(`Sorry, No Type: ${type}`);
            break;
    }
};
class ModuleGPT extends Module {
    constructor(config_obj, loggerObject) {
        super(config_obj, loggerObject);
        this.adUnits = this.parse_ad_units_list(config_obj);
        this.pageKeyValues = JSON.parse(config_obj?.pageKeyValues ?? '[]');

        this.adUnits.forEach((adUnit, index) => {

            if (adUnit?.slots?.slots_match) {
                this.adUnits[index].slots.slot_items = {}
                var slot_format = this.adUnits[index].slots.slot_formatting;

                function slot_formatting(display = true) {
                    if (display) {
                        if (!this.fotmatting_applied) {
                            var new_style_text = "display: flex; flex-direction: column; align-items: center;";
                            if (slot_format?.padding) {
                                new_style_text += `padding: ${slot_format.padding};`
                            }
                            if (slot_format?.background_color) {
                                new_style_text += `background-color: ${slot_format.background_color};`
                            }


                            document.getElementById(this.name).style = new_style_text;

                            if (adUnit?.slots?.slot_formatting?.label) {
                                var css_rule = ""
                                css_rule += ':before { display: block; ' + (adUnit.slots.slot_formatting?.label_font_size ? ' font-size: ' + adUnit.slots.slot_formatting.label_font_size + ';' : '') + ' content: "' + adUnit.slots.slot_formatting.label + '";' + (adUnit.slots.slot_formatting?.label_text_color ? ' color: ' + adUnit.slots.slot_formatting.label_text_color + '; }' : '}')
                                var current_css_rule = config?.css_manipulatable_stylesheet?.cssRules?.length;
                                if (current_css_rule) {
                                    this.css_rule_index = config?.css_manipulatable_stylesheet?.insertRule?.("#" + this.name + css_rule, current_css_rule);
                                }
                            }

                            this.fotmatting_applied = true;
                        }
                    } else {
                        if (this.fotmatting_applied) {
                            document.getElementById(this.name).style = "";
                            if (this?.css_rule_index) {
                                config.css_manipulatable_stylesheet.removeRule(this.css_rule_index)
                                delete this.css_rule_index;
                            }

                            this.fotmatting_applied = false;
                        }
                    }
                }

                adUnit.slots.slots_match.split(",").forEach((anchor, jindex) => {
                    this.adUnits[index].slots.slot_items[anchor] = new Slot(anchor, adUnit.code, slot_formatting);
                })


            }
        })


        if (config_obj?.adUnits.search('%') >= 0) {
            this.adunits_externally_defined_wildcard_match();
        }



        (function() {
            var script_gpt = document.createElement('script');
            script_gpt.id = 'gpt_script';
            script_gpt.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
            document.head.append(script_gpt);
        })();

        loggerObject.recieve_gpt_event = function(event, new_element) {
            var slot = event.slot;
            var slot_id = slot.getSlotElementId();
            var slot_requested_time = slot.getTargeting('slot_requested_time')?.[0] ?? slot.setTargeting('slot_requested_time', Date.now()).getTargeting('slot_requested_time')[0];
            var adunit_path = slot.getAdUnitPath();
            if (!this?.['slots']?.[slot_id]?.['gam']?.[adunit_path]?.['adunit_requests']?.[slot_requested_time]) {
                if (!this?.['slots']) {
                    this['slots'] = {};
                }

                if (!this?.['slots']?.[slot_id]) {
                    this['slots'][slot_id] = {
                        slot_id: slot_id,
                        slot_type: 'gam',
                        gam: {}
                    };
                }

                if (!this?.['slots']?.[slot_id]?.['gam']?.[adunit_path]) {
                    this['slots'][slot_id]['gam'][adunit_path] = {
                        adunit_path: adunit_path,
                        adunit_requests: {}
                    }
                }

                this['slots'][slot_id]['gam'][adunit_path]['adunit_requests'][slot_requested_time] = {
                    slot_requested_time: slot_requested_time
                };
            }

            var base_element = this['slots'][slot_id]['gam'][adunit_path]['adunit_requests'][slot_requested_time];
            for (var i in new_element) {
                base_element[i] = new_element[i];
            }
            this.logger_changed = true;
        }
    };


    // This is for situations that the  slots were already defined externally, we connect ad units after
    adunits_externally_defined_wildcard_match() {
        if (window?.googletag) {
            var adUnits_target = [];
            var all_slots = googletag.pubads().getSlots();
            this.adUnits.forEach(adUnit => {
                if (!adUnit.code.includes("%")) {
                    adUnits_target.push(adUnit);
                } else {
                    var is_fluid = adUnit.mediaTypes.banner?.fluid || 0;
                    var adUnitSizesArray = adUnit.mediaTypes.banner?.sizes?.map(e => e[0] + "x" + e[1]) || [];
                    var qq, ww;
                    all_slots.map(sl => {
                        if (sl.getAdUnitPath().startsWith(adUnit.code.slice(0, -1)) && (is_fluid || (qq = sl.getSizes()[0], ww = adUnitSizesArray.find(t => t == qq["width"] + "x" + qq["height"])))) {
                            var adUnitTemp = JSON.parse(JSON.stringify(adUnit));
                            adUnitTemp.srcCode = adUnitTemp.code;
                            adUnitTemp.code = sl.getAdUnitPath();
                            adUnitTemp.slots.slots_match = sl.getSlotElementId();
                            adUnitTemp.mediaTypes.banner.sizes = [];
                            if (is_fluid) {
                                adUnitTemp.mediaTypes.banner.fluid = 'fluid';
                            } else {
                                adUnitTemp.mediaTypes.banner.sizes[0] = [qq["width"], qq["height"]];
                            }
                            adUnits_target.push(adUnitTemp);
                        }
                    });

                }
            })
            this.adUnits = adUnits_target;
        }
    }

    parse_ad_units_list(data) {
        return JSON.parse(data?.adUnits ?? '[]').filter(e => (e?.module ?? 'gpt') === 'gpt' || e?.slots?.slots_type === 3);
    }

    get_ad_unit(adUnitName) {
        return this?.adUnits?.filter(e => e.code == adUnitName)?.[0];
    }

    DOMContentLoaded_activate() {
        this.construct_ad_server();
        this.define_slots();
        this.setTargeting();


        window.googletag.cmd.push(function() {
            window.googletag.enableServices();
            window.googletag.pubads().getSlots().forEach(function(e) {
                window.googletag.display(e);
            })
        });


        // this.slot_formatting();

        // add event listeners
        googletag.cmd.push((function() {
            this.addEventListeners();
        }).bind(this))
    }

    construct_ad_server() {
        window.googletag = window.googletag || {};
        window.googletag.cmd = window.googletag.cmd || [];
        window.googletag.cmd.push(function() {
            window.googletag.pubads().disableInitialLoad();
            window.googletag.pubads().enableLazyLoad({
                fetchMarginPercent: 500,
                renderMarginPercent: 200,
                mobileScaling: 2.0
            });
        });

        setTimeout((function() {
            this.initAdserver();
        }).bind(this), 0)
    }


    initAdserver() {
        window.stagRequestManager.slots = config.slots;
        window.stagRequestGpt();
    }



    define_slots() {
        window.googletag.cmd.push((function() {
            this.adUnits.forEach(adUnit => {
                if (adUnit?.slots?.slots_type) {
                    switch (adUnit.slots.slots_type) {
                        case 1:
                            if (adUnit?.slots?.slots_match) {
                                adUnit.slots.slots_match.split(",").forEach(anchor => {
                                    if (document.getElementById(anchor)?.tagName === 'DIV') {
                                        let generalSize = adUnit.mediaTypes.banner?.fluid === 1 ? "fluid" : adUnit.mediaTypes.banner.sizes;
                                        let slot = window.googletag.defineSlot(adUnit.code, generalSize, anchor);
                                        if (slot) {
                                            this.setKeyValueTargeting(slot, adUnit.keyValues);
                                            slot.addService(window.googletag.pubads());
                                            config.slots.push(slot);
                                        }
                                    }
                                })
                            }
                            break;
                        case 2:
                            if (adUnit?.slots?.slots_sticky_type) {
                                let slot = window.googletag.defineOutOfPageSlot(adUnit.code, googletag.enums.OutOfPageFormat[adUnit.slots.slots_sticky_type]);
                                if (slot) {
                                    this.setKeyValueTargeting(slot, adUnit.keyValues);
                                    slot.addService(window.googletag.pubads());
                                    config.slots.push(slot);
                                }
                            }
                            break;
                        case 3:
                            let slot = window.googletag.defineOutOfPageSlot(adUnit.code, googletag.enums.OutOfPageFormat.INTERSTITIAL);
                            if (slot) {
                                this.setKeyValueTargeting(slot, adUnit.keyValues);
                                slot.addService(window.googletag.pubads());
                                config.slots.push(slot);
                            }
                            break;
                        default:
                            console.log(`Unknown slots_type for ${adUnit}`);
                    }
                }
            })
        }).bind(this))
    }

    setKeyValueTargeting(obj, keyValues) {
        if (obj) {
            let targeting = keyValues || [];
            targeting.forEach(key_value => {
                let val = String(key_value['value']);
                if (val.includes(',')) {
                    val = val.split(',');
                }
                obj.setTargeting(key_value['key'], val);
            });
        }
    }

    setTargeting() {
        window.googletag.cmd.push((function() {
            window.googletag.pubads().setTargeting('stag_config_index_ext', '1');
            window.googletag.pubads().setTargeting('stag_hour_ext', (new Date()).getUTCHours().toString());
            this.setKeyValueTargeting(window.googletag.pubads(), this.pageKeyValues)
            window.googletag.pubads().getSlots().forEach(slot => {
                slot
                    .setTargeting('refresh', 240)
                    .setTargeting('gam_slot_type', 'regular')
                    .setTargeting('stag_adunit_slot_index', 2)
                    .setTargeting('stag_hour', (new Date()).getUTCHours())
            })
        }).bind(this));
    }

    addEventListeners() {
        // window.googletag.pubads().addEventListener('slotRequested', this.slot_requested.bind(this));
        window.googletag.pubads().addEventListener('slotRequested', this.slot_requested.bind(this));
        window.googletag.pubads().addEventListener('slotResponseReceived', this.slot_response_received.bind(this));
        window.googletag.pubads().addEventListener('slotOnload', this.slot_on_load.bind(this));
        window.googletag.pubads().addEventListener('slotRenderEnded', this.slot_render_ended.bind(this));
        window.googletag.pubads().addEventListener('impressionViewable', this.impression_viewable.bind(this));
    }


    slotEventDecorator(wrapped) {
        return function(event) {
            var curr_slot = this?.get_ad_unit?.(event?.slot?.getAdUnitPath())?.slots?.slot_items?.[event?.slot?.getSlotElementId()];
            if (curr_slot) {
                var event_name = wrapped.name.replace('_int', '');
                curr_slot?.event_recieved?.(event_name, event);
            }


            const result = wrapped.apply(this, arguments);
            return result;
        }
    }

    slot_requested_int(event) {
        config.loggerObject.recieve_gpt_event(
            event, {
                slot_requested_event: true
            }
        );
    };
    slot_requested = this.slotEventDecorator(this.slot_requested_int);


    slot_response_received_int(event) {
        config.loggerObject.recieve_gpt_event(
            event, {
                slot_response_received: true
            }
        );
        var curr_slot = this?.get_ad_unit?.(event?.slot?.getAdUnitPath())?.slots?.slot_items?.[event?.slot?.getSlotElementId()];
    };
    slot_response_received = this.slotEventDecorator(this.slot_response_received_int);

    slot_on_load_int(event) {
        config.loggerObject.recieve_gpt_event(
            event, {
                slot_on_load: true
            }
        );
    };
    slot_on_load = this.slotEventDecorator(this.slot_on_load_int);


    slot_render_ended_int(event) {
        config.loggerObject.recieve_gpt_event(
            event, {
                slot_render_ended: true,
                advertiser_id: event.advertiserId,
                campaign_id: event.campaignId,
                creative_id: event.creativeId,
                is_empty: event.isEmpty,
                line_item_id: event.lineItemId,
                size: event.size
            }
        );

    };
    slot_render_ended = this.slotEventDecorator(this.slot_render_ended_int);


    impression_viewable_int(event) {
        config.loggerObject.recieve_gpt_event(
            event, {
                impression_viewable: true
            }
        );
    };
    impression_viewable = this.slotEventDecorator(this.impression_viewable_int);

}


class Slot {
    constructor(slot_id, adUnit, slot_formatting) {
        this.name = slot_id
        this.adUnit = adUnit
        this.status = 'init';
        this.format = slot_formatting;
        this.fotmatting_applied = false;
    }

    // define slot in gpt

    // display solt  - window.googletag.display(e);

    event_recieved(event_name, event) {
        this.status = event_name;
        this?.[event_name]?.(event);
    }

    slot_render_ended(event) {
        if (!event.isEmpty) {
            this.format(true);
        } else {
            this.format(false);
        }
    }
}




window.config = new Config({
    "config_id": 128,
    "publisher_id": 34,
    "gam_id": "6943",
    "adUnits": "[{\"code\": \"/6943/JPost_2017/Desktop/All_Regular_Ad_Units/728x90_sticky_footer\", \"slots\": {\"slots_type\": 2, \"slots_match\": \"anchor\", \"slots_sticky_type\": \"BOTTOM_ANCHOR\"}, \"module\": \"gpt\", \"mediaTypes\": {\"banner\": {\"sizes\": [[728, 90]]}}}, {\"code\": \"/6943/Desktop_Interstitial\", \"slots\": {\"slots_type\": 3, \"slots_match\": \"Interstitial\"}, \"module\": \"gpt\", \"mediaTypes\": {\"banner\": {\"fluid\": 0, \"sizes\": [[300, 250], [320, 480], [336, 280]]}}}]",
    "modules": "gpt",
    "lazy_prebid": 0,
    "add_gpt_script": 1,
    "prebid_timeout": 1000,
    "failsafe_timeout": 3000,
    "pixalate_cap": 0,
    "gpt_single_request": 0,
    "auto_render_gpt_display_code": 1,
    "log_statistics": 1,
    "stag_config_index_ext": 2,
    "urls": "[{\"url\": \"https://www.jpost.com/insights\", \"matchMode\": 0, \"matchType\": \"CONTAINS\"}, {\"url\": \"https://www.jpost.com/advisor\", \"matchMode\": 0, \"matchType\": \"CONTAINS\"}, {\"url\": \"https://www.jpost.com/business-and-innovation/real-estate\", \"matchMode\": 0, \"matchType\": \"EXACT\"}, {\"url\": \"https://www.jpost.com/promocontent\", \"matchMode\": 0, \"matchType\": \"CONTAINS\"}]",
    "pub_seller": "{\"seller_id\": 7122099, \"name\": \"Jerusalem Post\", \"domain\": \"jpost.com\"}",
    "publisherName": "JerusalemPost"
}, ['gpt']);
if (window.config.can_be_delivered) {
    window.config.header_activate();

    var config_modules_DOMContentLoaded_activated = false;
    window.addEventListener('DOMContentLoaded', function() {
        if (!config_modules_DOMContentLoaded_activated) {
            window.config.DOMContentLoaded_activate();
            config_modules_DOMContentLoaded_activated = true;
        }
    });

    window.setTimeout(function() {
        if (!config_modules_DOMContentLoaded_activated) {
            window.config.DOMContentLoaded_activate();
            config_modules_DOMContentLoaded_activated = true;
        }
    }, 1000);

    window.setTimeout(function() {
        if (!config_modules_DOMContentLoaded_activated) {
            window.config.DOMContentLoaded_activate();
            config_modules_DOMContentLoaded_activated = true;
        }
    }, 2000);
};
var rand = rand ?? 2; var country = country ?? 'ES';