/**
* Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
*
* You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
* copy, modify, and distribute this software in source code or binary form for use
* in connection with the web services and APIs provided by Facebook.
*
* As with any software that integrates with the Facebook platform, your use of
* this software is subject to the Facebook Platform Policy
* [http://developers.facebook.com/policy/]. This copyright notice shall be
* included in all copies or substantial portions of the software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
((window,document,location,history);
((window,document,location,history);
((window,document,location,history);
((window,document,location,history);
((window,document,location,history);
((window,document,location,history);
((window,document,location,history);
((window,document,location,history);
((window,document,location,history);
((window,document,location,history);
((window,document,location,history);
((window,document,location,history);
fbq.registerPlugin("233175853836342", {__fbEventsPlugin: 1, plugin: function(fbq, instance, config) { fbq.loadPlugin("iwlbootstrapper");
instance.optIn("233175853836342", "IWLBootstrapper", true);
fbq.loadPlugin("cookie");
instance.optIn("233175853836342", "FirstPartyCookies", true);
config.set(null, "batching", {"batchWaitTimeMs":501,"maxBatchSize":10});
config.set(null, "microdata", {"waitTimeMs":500});
config.set("233175853836342", "prohibitedSources", {"prohibitedSources":[]});
fbq.loadPlugin("prohibitedsources");
instance.optIn("233175853836342", "ProhibitedSources", true);
config.set("233175853836342", "unwantedData", {"blacklisted_keys":{"PageView":{"cd":[],"url":["lat","lng"]},"Search":{"cd":[],"url":["lng","lat"]}},"sensitive_keys":{}});
fbq.loadPlugin("unwanteddata");
instance.optIn("233175853836342", "UnwantedData", true);
config.set("233175853836342", "IABPCMAEBridge", {"enableAutoEventId":false});
fbq.loadPlugin("iabpcmaebridge");
instance.optIn("233175853836342", "IABPCMAEBridge", true);
config.set("233175853836342", "browserProperties", {"delayInMs":200,"enableEventSuppression":true,"enableBackupTimeout":true});
fbq.loadPlugin("browserproperties");
instance.optIn("233175853836342", "BrowserProperties", true);
config.set("233175853836342", "protectedDataMode", {"standardParams":{"lead_event_source":true,"predicted_ltv":true,"product_catalog_id":true,"availability":true,"body_style":true,"checkin_date":true,"checkout_date":true,"city":true,"condition_of_vehicle":true,"content_category":true,"content_ids":true,"content_name":true,"content_type":true,"contents":true,"country":true,"currency":true,"delivery_category":true,"departing_arrival_date":true,"departing_departure_date":true,"destination_airport":true,"destination_ids":true,"dma_code":true,"drivetrain":true,"exterior_color":true,"fuel_type":true,"hotel_score":true,"interior_color":true,"lease_end_date":true,"lease_start_date":true,"listing_type":true,"make":true,"mileage.unit":true,"mileage.value":true,"model":true,"neighborhood":true,"num_adults":true,"num_children":true,"num_infants":true,"num_items":true,"order_id":true,"origin_airport":true,"postal_code":true,"preferred_baths_range":true,"preferred_beds_range":true,"preferred_neighborhoods":true,"preferred_num_stops":true,"preferred_price_range":true,"preferred_star_ratings":true,"price":true,"property_type":true,"region":true,"returning_arrival_date":true,"returning_departure_date":true,"search_string":true,"state_of_vehicle":true,"status":true,"suggested_destinations":true,"suggested_home_listings":true,"suggested_hotels":true,"suggested_jobs":true,"suggested_local_service_businesses":true,"suggested_location_based_items":true,"suggested_vehicles":true,"transmission":true,"travel_class":true,"travel_end":true,"travel_start":true,"trim":true,"user_bucket":true,"value":true,"vin":true,"year":true}});
fbq.loadPlugin("protecteddatamode");
instance.optIn("233175853836342", "ProtectedDataMode", true);
config.set("233175853836342", "ccRuleEvaluator", {"ccRules":[{"id":"357615945817772","rule":{"and":[{"event":{"eq":"Lead"}},{"or":[{"URL":{"i_contains":"\/payment\/edr-house"}}]}]}},{"id":"1436971719777939","rule":{"and":[{"event":{"eq":"CompletePayment"}}]}}],"wcaRules":[{"rule":{"and":[{"event":{"eq":"ViewContent"}}]},"id":"7516508758365913"},{"rule":{"and":[{"event":{"eq":"Purchase"}}]},"id":"6830891337008765"},{"rule":{"and":[{"event":{"eq":"InitiateCheckout"}}]},"id":"6450304525097043"},{"rule":{"and":[{"event":{"eq":"Contact"}}]},"id":"6580409238695572"},{"rule":{"and":[{"event":{"eq":"Lead"}}]},"id":"6369181899876778"},{"rule":{"and":[{"event":{"eq":"AddToCart"}}]},"id":"6689498407752155"},{"rule":{"and":[{"event":{"eq":"Purchase"}}]},"id":"6555677521158192"},{"rule":{"and":[{"event":{"eq":"InitiateCheckout"}}]},"id":"6530053027074086"},{"rule":{"and":[{"event":{"eq":"ViewContent"}}]},"id":"6898831726814678"},{"rule":{"and":[{"url":{"i_contains":""}}]},"id":"5727003190669168"},{"rule":{"and":[{"or":[{"url":{"i_contains":"https:\/\/www.endeksa.com\/tr\/projects"}}]},{"url":{"i_contains":""}}]},"id":"9303338186358972"},{"rule":{"and":[{"event":{"eq":"PageView"}}]},"id":"5933700636711777"},{"rule":{"and":[{"url":{"i_contains":""}}]},"id":"4859158167493244"},{"rule":{"and":[{"event":{"eq":"CompleteRegistration"}}]},"id":"5018676838155068"},{"rule":{"and":[{"event":{"eq":"Lead"}}]},"id":"4923065294446310"},{"rule":{"and":[{"url":{"i_contains":""}}]},"id":"6022637911140570"},{"rule":{"url":{"i_contains":""}},"id":"1984102795023659"},{"rule":{"and":[{"url":{"i_contains":"signin"}},{"not":[{"url":{"i_contains":"\/odeme\/tamamlandi\/"}}]}]},"id":"2109353372495273"},{"rule":{"and":[{"url":{"i_contains":"signin"}},{"not":[{"url":{"i_contains":"\/odeme\/tamamlandi\/"}}]}]},"id":"2198958240219930"},{"rule":{"and":[{"url":{"i_contains":"signin"}},{"not":[{"url":{"i_contains":"\/odeme\/tamamlandi\/"}}]}]},"id":"2410253435672340"},{"rule":{"and":[{"url":{"i_contains":"signin"}},{"not":[{"url":{"i_contains":"\/odeme\/tamamlandi\/"}}]}]},"id":"2350306488366214"},{"rule":{"and":[{"url":{"i_contains":"signin"}},{"not":[{"url":{"i_contains":"\/odeme\/tamamlandi\/"}}]}]},"id":"2441163292612944"},{"rule":{"and":[{"url":{"i_contains":"signin"}},{"not":[{"url":{"i_contains":"\/odeme\/tamamlandi\/"}}]}]},"id":"2349043301821982"},{"rule":{"and":[{"url":{"i_contains":""}}]},"id":"1954250277963390"},{"rule":{"and":[{"url":{"i_contains":""}},{"or":[{"url":{"i_not_contains":"signin"}}]}]},"id":"1468711429844819"},{"rule":{"and":[{"url":{"i_contains":""}},{"or":[{"url":{"i_not_contains":"signin"}}]}]},"id":"1592925240795434"},{"rule":{"and":[{"url":{"i_contains":""}},{"or":[{"url":{"i_not_contains":"signin"}}]}]},"id":"2137492589601570"},{"rule":{"and":[{"url":{"i_contains":""}},{"or":[{"url":{"i_not_contains":"signin"}}]}]},"id":"1661351753904361"},{"rule":{"and":[{"url":{"i_contains":""}},{"or":[{"url":{"i_not_contains":"signin"}}]}]},"id":"1226233170814672"},{"rule":{"and":[{"url":{"i_contains":""}},{"or":[{"url":{"i_not_contains":"signin"}}]}]},"id":"1304116146384064"}],"blacklistedIframeReferrers":{"google":true}});
fbq.loadPlugin("ccruleevaluator");
instance.optIn("233175853836342", "CCRuleEvaluator", true);
config.set("233175853836342", "clientHint", {"delayInMs":200,"disableBackupTimeout":false});
fbq.loadPlugin("clienthint");
instance.optIn("233175853836342", "ClientHint", true);
fbq.loadPlugin("privacysandbox");
instance.optIn("233175853836342", "PrivacySandbox", true);
fbq.loadPlugin("lastexternalreferrer");
instance.optIn("233175853836342", "LastExternalReferrer", true);
fbq.loadPlugin("cookiedeprecationlabel");
instance.optIn("233175853836342", "CookieDeprecationLabel", true);instance.configLoaded("233175853836342"); }});